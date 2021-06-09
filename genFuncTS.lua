local lfs = require"lfs"
local sep = string.match (package.config, "[^\n]+")
local current = assert (lfs.currentdir())
local root = arg[1] or current
print("root ===> ",root)
local path = root.."/resource/config/"
local tspath = ""
local vals = {}
local coms = {}
local lastval = ""
local lasttype = 0
local ARG_TTYPE = 0
local END_FLAG = "//end 勿删"
local MODUL_MAP = {
    "CharRedPointUtils",
    "SkillRedPointUtils",
    "ExperienceRedPointUtils",
    "ForgeRedPointUtils",
    "BagRedPointUtils",
    "MainMenuRedPointUtils",
    "ActivityPointUtils",
    "DuolicatePointUtils",
    "UnionRedPointUtils",
    "TaskRedPointUtils",
    "AchievementRedPointUtils",
    "LuckyCardPointUtils",
    "LimitActPointUtils",
    "EnshrineredRedPointUtils",
    "InvitationGiftRedPointUtils",

}
function reset( ... )
    vals = {}
    coms = {}
    lastval = ""
    lasttype = 0
end
function getval(line,key)
    local fidx = string.find(line,key)
    if fidx then
        local val = string.sub(line,fidx+(#key+3),-2)
        if val == "null" then print("error") end
        if val ~= "null" then
            return val
        end
    end
    return nil
end
function getValContext( val,pcom )
    local key = val--string.sub(val,2,-2)
    local com = pcom
    print(pcom)
    return "protected $"..key..":number = 0;\
        public get "..key.."() {\
            return this.$"..key..";\
        }\
        public set "..key.."(val:number) {\
            this.$"..key.." = val;//TODO 上一层赋值\
        }\t\n\t\t"

end
function checkkey( val )
    if(type(val) == "table") then
        -- print("111")
        for k,v in pairs(val) do
            local file_text = io.open(tspath,"r")
            local text = file_text:read("*a")
            local key = "ro.redpoints.client.".. val
            if string.find(text,key) then
                file_text:close()
                return true
            end
            file_text:close()
        end
    else
        local file_text = io.open(tspath,"r")
        local text = file_text:read("*a")
        local key = "ro.redpoints.client.".. val
        if string.find(text,key) then
            file_text:close()
            return true
        end
        file_text:close()
    end

    return false
end
function getFuncContext( val,com,tabs,bottomkey )
    local key = val--string.sub(val,2,-2)
    com = com or ""
    local optera = ""
    if not bottomkey then
        optera = "//TODO 内部逻辑 return 0 1"
    else
        local empty = true
        if type(tabs) == "table" then
            for k,v in pairs(tabs) do
                local x = "this."..k .. "() ||";
                optera = optera .. x;
                empty = false
            end
        end
        if not empty then
            optera = string.sub(optera,1,-3)
            optera = " = " .. optera
        end
    end
    if type(com) == "table" then com = "" end
    return "\t\t"..key .. "() {\
            return ro.redpoints.client."..key..optera..";\
        }\t\n"
end
----------
local allfunccont = {}
local allendcont = {}
function readCurFile( i )
    tspath = root.."/src/Common/redpoint/"..MODUL_MAP[i]..".ts"
    if(not allfunccont[i]) then
        allfunccont[i] = {}
    end
    if(not allendcont[i]) then
        allendcont[i] = {}
    end
    local findend = false
    for line in io.lines(tspath) do
        if( not findend and (not string.find(line,END_FLAG))) then
            table.insert(allfunccont[i],line.."\n")
        else
            findend = true
            table.insert(allendcont[i],line.."\n")
        end
    end
end
function genValTS( vals , bottomkey)
    param = 1
    if param == 1 then
        tspath = root.."/src/Common/redpoint/"..MODUL_MAP[ARG_TTYPE]..".ts"
    elseif param == 2 then
        tspath = root.."/src/Common/redpoint/RedPoints.ts"
    end

    for k,v in pairs(vals) do
        if not checkkey(k) then
            if param == 1 then
                local tmp = (getFuncContext(k,coms[k],v,bottomkey))
                table.insert(allfunccont[ARG_TTYPE],tmp)
            elseif param == 2 then
                local tmp = (getValContext(k,coms[k]))
                table.insert(allfunccont[ARG_TTYPE],tmp)
            end
        end
    end
end
function getConContext( val,com )
    com = com or ""
    if type(com) == "table" then com = "" end
    local bchar = string.upper(val)
    return "\tpublic static "..bchar.." = \"client."..val.."\"" .. ";\n\t";
end
local allcont = {
    [1] = [[module ro {
    export class ConstRedPoint {]],
    [2] = "\n\t"
}
function genConTS( vals )
    local has_cont = false
    for k,v in pairs(vals) do
        local tmp = (getConContext(k,coms[k]))
        table.insert(allcont,tmp)
        has_cont = true
    end
end
function writeConst( ... )
    tspath = root.."/src/Common/redpoint/ConstRedPoint.ts"
    local file_text = io.open(tspath,"w+")
    for k,v in pairs(allcont) do
        file_text:write(v)
    end
    file_text:write("}\n}")
    file_text:close()
end
function writeFunc( i )
    tspath = root.."/src/Common/redpoint/"..MODUL_MAP[i]..".ts"
    local file_text = io.open(tspath,"w+")
    for k,v in pairs(allfunccont[i]) do
        file_text:write(v)
    end
    for k,v in pairs(allendcont[i]) do
        file_text:write(v)
        -- print(k,v)
    end
    file_text:close()
end
lfs.chdir(root .."/tools/redpoint/")
local _mod = {
    char = require('char'),
    skill = require("skill"),
    experience = require("experience"),
    forge = require("forge"),
    bag = require("bag"),
    main = require("mainmenu"),
    activity = require("activity"),
    duolicate = require('duolicate'),
    union = require('union'),
    task = require('task'),
    achievement = require('achievement'),
    luckycard = require('luckycard'),
    limitact = require("limitact"),
    enshrine = require("enshrine"),
    invitationgift = require("invitationgift"),
}
-- local client = require("genClientTS")
local key2num = {
    char = 1,
    skill = 2,
    experience = 3,
    forge = 4,
    bag = 5,
    main = 6,
    activity = 7,
    duolicate = 8,
    union =9,
    task = 10,
    achievement = 11,
    luckycard =12,
    limitact = 13,
    enshrine =14,
    invitationgift = 15,
}
local all = {
    char = require('char'),
    skill = require("skill"),
    experience = require("experience"),
    forge = require("forge"),
    bag = require("bag"),
    main = require("mainmenu"),
    activity = require("activity"),
    duolicate = require('duolicate'),
    union = require('union'),
    task = require('task'),
    achievement = require('achievement'),
    luckycard = require('luckycard'),
    limitact = require('limitact'),
    enshrine = require("enshrine"),
    invitationgift = require("invitationgift"),
}
lfs.chdir(root)
current = assert (lfs.currentdir())
-- local genConVal = function ( tab,k )
--     if type(tab) == "table" then
--         genConTS(tab)
--         genValTS(tab,k)--红点变量定义
--         for k,v in pairs(tab) do
--            if(type(v) == "table") then
--                  genConVal(v,k)
--             end
--         end
--     end
-- end
function genVal( ... )
    for k,v in pairs(_mod) do
        -- print(k)
        ARG_TTYPE = key2num[k]
        if type(v) == "table" then
            for k1,v1 in pairs(v) do
                if type(v1) == "table" then
                    for k2,v2 in pairs(v1) do
                        if type(v2) == "table" then
                            for k3,v3 in pairs(v2) do
                                if type(v3) == "table" then
                                    for k4,v4 in pairs(v3) do
                                        if(type(v4) == "table") then
                                            genConTS(v4)
                                            genValTS(v4)--模块函数声明
                                        end
                                    end
                                    genConTS(v3)
                                    genValTS(v3)--模块函数声明
                                end
                            end
                            genConTS(v2)
                            genValTS(v2,k2)--模块函数声明
                        end
                    end
                    genConTS(v1)
                    genValTS(v1,k1)--模块函数声明
                end
            end
            genConTS(v)
            genValTS(v,k)--红点变量定义
        end
    end
    genConTS(_mod)

end
for i=1,#MODUL_MAP do
    readCurFile(i)
end
genVal()
writeConst()
for i=1,#MODUL_MAP do
    writeFunc(i)
end

function getClientValContext( val,pcom,tabs,topkey )
    local key = val--string.sub(val,2,-2)
    local com = pcom or ""
    local optera = ""
     -- print("com=====> ",com)
    if not topkey then
        optera = ""
    else
        optera = "this."..topkey.." = "
        for k,v in pairs(tabs) do
            if(type(v) == "string" and string.find(v,"ignore")) then
                -- print("ignore => ",v)
            else
                local x = "this."..k .. "||";
                optera = optera .. x;
            end
        end
        optera = string.sub(optera,1,-3)
        optera = optera ..";"
    end

    return "protected $"..key..":number = 0;\
        public get "..key.."() {\
            return this.$"..key..";\
        }\
        public set "..key.."(val:number) {\
            this.$"..key.." = val;\
            "..optera.."\
        }\t\n\t\t"

end
local allcont = {
    [1] = "module ro {\
    export class ClientVal {",
    [2] = "\n\t\t"
}
function genClientValTS( tabs,topkey )
    tspath = root.."/src/Common/redpoint/ClientVal.ts"
    print(tspath)
    vals = tabs
    for k,v in pairs(vals) do
        local tmp = (getClientValContext(k,v,vals,topkey))
        table.insert(allcont,tmp)
    end
end
function writeMid( ... )
    tspath = root.."/src/Common/redpoint/ClientVal.ts"
    local file_text = io.open(tspath,"w+")
    for k,v in pairs(allcont) do
        file_text:write(v)
    end
    file_text:write("\n\t}\n}")
    file_text:close()
end
function genClientVal( ... )
    reset()
    genClientValTS(all)--红点变量定义
    for k,v in pairs(all) do
        reset()
        print(k,v)
        if type(v) == "table" then
            genClientValTS(v,k)--红点变量定义
            for k1,v1 in pairs(v) do
                if type(v1) == "table" then
                    genClientValTS(v1,k1)
                    for k2,v2 in pairs(v1) do
                        if type(v2) == "table" then
                            genClientValTS(v2,k2)
                            for k3,v3 in pairs(v2) do
                                if type(v3) == "table" then
                                    genClientValTS(v3,k3)
                                    for k4,v4 in pairs(v3) do
                                        if(type(v4) == "table") then
                                            genClientValTS(v4,k4)
                                        end
                                    end
                                end
                            end
                        end
                    end
                end
            end
        end
   end
   writeMid()
end
genClientVal()--get set val



