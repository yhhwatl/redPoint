module ro {
    export class ClientVal {
        protected $duolicate: number = 0;
        public get duolicate() {
            return this.$duolicate;
        }
        public set duolicate(val: number) {
            this.$duolicate = val;

        }
        protected $forge: number = 0;
        public get forge() {
            return this.$forge;
        }
        public set forge(val: number) {
            this.$forge = val;

        }
        protected $char: number = 0;
        public get char() {
            return this.$char;
        }
        public set char(val: number) {
            this.$char = val;

        }
        protected $task: number = 0;
        public get task() {
            return this.$task;
        }
        public set task(val: number) {
            this.$task = val;

        }
        protected $invitationgift: number = 0;
        public get invitationgift() {
            return this.$invitationgift;
        }
        public set invitationgift(val: number) {
            this.$invitationgift = val;

        }
        protected $enshrine: number = 0;
        public get enshrine() {
            return this.$enshrine;
        }
        public set enshrine(val: number) {
            this.$enshrine = val;

        }
        protected $limitact: number = 0;
        public get limitact() {
            return this.$limitact;
        }
        public set limitact(val: number) {
            this.$limitact = val;

        }
        protected $bag: number = 0;
        public get bag() {
            return this.$bag;
        }
        public set bag(val: number) {
            this.$bag = val;

        }
        protected $luckycard: number = 0;
        public get luckycard() {
            return this.$luckycard;
        }
        public set luckycard(val: number) {
            this.$luckycard = val;

        }
        protected $skill: number = 0;
        public get skill() {
            return this.$skill;
        }
        public set skill(val: number) {
            this.$skill = val;

        }
        protected $achievement: number = 0;
        public get achievement() {
            return this.$achievement;
        }
        public set achievement(val: number) {
            this.$achievement = val;

        }
        protected $union: number = 0;
        public get union() {
            return this.$union;
        }
        public set union(val: number) {
            this.$union = val;

        }
        protected $activity: number = 0;
        public get activity() {
            return this.$activity;
        }
        public set activity(val: number) {
            this.$activity = val;

        }
        protected $activity_fuli: number = 0;
        public get activity_fuli() {
            return this.$activity_fuli;
        }
        public set activity_fuli(val: number) {
            this.$activity_fuli = val;

        }
        protected $activity_kfqd: number = 0;
        public get activity_kfqd() {
            return this.$activity_kfqd;
        }
        public set activity_kfqd(val: number) {
            this.$activity_kfqd = val;

        }
        protected $main: number = 0;
        public get main() {
            return this.$main;
        }
        public set main(val: number) {
            this.$main = val;

        }
        protected $experience: number = 0;
        public get experience() {
            return this.$experience;
        }
        public set experience(val: number) {
            this.$experience = val;

        }
        protected $duolicate_MaterFuben: number = 0;
        public get duolicate_MaterFuben() {
            return this.$duolicate_MaterFuben;
        }
        public set duolicate_MaterFuben(val: number) {
            this.$duolicate_MaterFuben = val;
            this.duolicate = this.duolicate_MaterFuben || this.duolicate_ExpFuben || this.duolicate_Tower;
        }
        protected $duolicate_ExpFuben: number = 0;
        public get duolicate_ExpFuben() {
            return this.$duolicate_ExpFuben;
        }
        public set duolicate_ExpFuben(val: number) {
            this.$duolicate_ExpFuben = val;
            this.duolicate = this.duolicate_MaterFuben || this.duolicate_ExpFuben || this.duolicate_Tower;
        }
        protected $duolicate_Tower: number = 0;
        public get duolicate_Tower() {
            return this.$duolicate_Tower;
        }
        public set duolicate_Tower(val: number) {
            this.$duolicate_Tower = val;
            this.duolicate = this.duolicate_MaterFuben || this.duolicate_ExpFuben || this.duolicate_Tower;
        }
        protected $Material3: number = 0;
        public get Material3() {
            return this.$Material3;
        }
        public set Material3(val: number) {
            this.$Material3 = val;
            this.duolicate_MaterFuben = this.Material3 || this.Material4 || this.Material6 || this.Material1 || this.Material5 || this.Material2;
        }
        protected $Material4: number = 0;
        public get Material4() {
            return this.$Material4;
        }
        public set Material4(val: number) {
            this.$Material4 = val;
            this.duolicate_MaterFuben = this.Material3 || this.Material4 || this.Material6 || this.Material1 || this.Material5 || this.Material2;
        }
        protected $Material6: number = 0;
        public get Material6() {
            return this.$Material6;
        }
        public set Material6(val: number) {
            this.$Material6 = val;
            this.duolicate_MaterFuben = this.Material3 || this.Material4 || this.Material6 || this.Material1 || this.Material5 || this.Material2;
        }
        protected $Material1: number = 0;
        public get Material1() {
            return this.$Material1;
        }
        public set Material1(val: number) {
            this.$Material1 = val;
            this.duolicate_MaterFuben = this.Material3 || this.Material4 || this.Material6 || this.Material1 || this.Material5 || this.Material2;
        }
        protected $Material5: number = 0;
        public get Material5() {
            return this.$Material5;
        }
        public set Material5(val: number) {
            this.$Material5 = val;
            this.duolicate_MaterFuben = this.Material3 || this.Material4 || this.Material6 || this.Material1 || this.Material5 || this.Material2;
        }
        protected $Material2: number = 0;
        public get Material2() {
            return this.$Material2;
        }
        public set Material2(val: number) {
            this.$Material2 = val;
            this.duolicate_MaterFuben = this.Material3 || this.Material4 || this.Material6 || this.Material1 || this.Material5 || this.Material2;
        }
        protected $ExpFuben1: number = 0;
        public get ExpFuben1() {
            return this.$ExpFuben1;
        }
        public set ExpFuben1(val: number) {
            this.$ExpFuben1 = val;
            this.duolicate_ExpFuben = this.ExpFuben1 || this.ExpFuben3 || this.ExpFuben2;
        }
        protected $ExpFuben3: number = 0;
        public get ExpFuben3() {
            return this.$ExpFuben3;
        }
        public set ExpFuben3(val: number) {
            this.$ExpFuben3 = val;
            this.duolicate_ExpFuben = this.ExpFuben1 || this.ExpFuben3 || this.ExpFuben2;
        }
        protected $ExpFuben2: number = 0;
        public get ExpFuben2() {
            return this.$ExpFuben2;
        }
        public set ExpFuben2(val: number) {
            this.$ExpFuben2 = val;
            this.duolicate_ExpFuben = this.ExpFuben1 || this.ExpFuben3 || this.ExpFuben2;
        }
        protected $TowerDayReward: number = 0;
        public get TowerDayReward() {
            return this.$TowerDayReward;
        }
        public set TowerDayReward(val: number) {
            this.$TowerDayReward = val;
            this.duolicate_Tower = this.TowerDayReward || this.TowerTurn || this.TowerPoint;
        }
        protected $TowerTurn: number = 0;
        public get TowerTurn() {
            return this.$TowerTurn;
        }
        public set TowerTurn(val: number) {
            this.$TowerTurn = val;
            this.duolicate_Tower = this.TowerDayReward || this.TowerTurn || this.TowerPoint;
        }
        protected $TowerPoint: number = 0;
        public get TowerPoint() {
            return this.$TowerPoint;
        }
        public set TowerPoint(val: number) {
            this.$TowerPoint = val;
            this.duolicate_Tower = this.TowerDayReward || this.TowerTurn || this.TowerPoint;
        }
        protected $forge_cast: number = 0;
        public get forge_cast() {
            return this.$forge_cast;
        }
        public set forge_cast(val: number) {
            this.$forge_cast = val;
            this.forge = this.forge_cast || this.forge_enchan || this.forge_card || this.intensify_headpoint || this.forge_intensify || this.fogre_pur || this.cast_headpoint || this.pur_headpoint;
        }
        protected $forge_enchan: number = 0;
        public get forge_enchan() {
            return this.$forge_enchan;
        }
        public set forge_enchan(val: number) {
            this.$forge_enchan = val;
            this.forge = this.forge_cast || this.forge_enchan || this.forge_card || this.intensify_headpoint || this.forge_intensify || this.fogre_pur || this.cast_headpoint || this.pur_headpoint;
        }
        protected $forge_card: number = 0;
        public get forge_card() {
            return this.$forge_card;
        }
        public set forge_card(val: number) {
            this.$forge_card = val;
            this.forge = this.forge_cast || this.forge_enchan || this.forge_card || this.intensify_headpoint || this.forge_intensify || this.fogre_pur || this.cast_headpoint || this.pur_headpoint;
        }
        protected $intensify_headpoint: number = 0;
        public get intensify_headpoint() {
            return this.$intensify_headpoint;
        }
        public set intensify_headpoint(val: number) {
            this.$intensify_headpoint = val;
            this.forge = this.forge_cast || this.forge_enchan || this.forge_card || this.intensify_headpoint || this.forge_intensify || this.fogre_pur || this.cast_headpoint || this.pur_headpoint;
        }
        protected $forge_intensify: number = 0;
        public get forge_intensify() {
            return this.$forge_intensify;
        }
        public set forge_intensify(val: number) {
            this.$forge_intensify = val;
            this.forge = this.forge_cast || this.forge_enchan || this.forge_card || this.intensify_headpoint || this.forge_intensify || this.fogre_pur || this.cast_headpoint || this.pur_headpoint;
        }
        protected $fogre_pur: number = 0;
        public get fogre_pur() {
            return this.$fogre_pur;
        }
        public set fogre_pur(val: number) {
            this.$fogre_pur = val;
            this.forge = this.forge_cast || this.forge_enchan || this.forge_card || this.intensify_headpoint || this.forge_intensify || this.fogre_pur || this.cast_headpoint || this.pur_headpoint;
        }
        protected $cast_headpoint: number = 0;
        public get cast_headpoint() {
            return this.$cast_headpoint;
        }
        public set cast_headpoint(val: number) {
            this.$cast_headpoint = val;
            this.forge = this.forge_cast || this.forge_enchan || this.forge_card || this.intensify_headpoint || this.forge_intensify || this.fogre_pur || this.cast_headpoint || this.pur_headpoint;
        }
        protected $pur_headpoint: number = 0;
        public get pur_headpoint() {
            return this.$pur_headpoint;
        }
        public set pur_headpoint(val: number) {
            this.$pur_headpoint = val;
            this.forge = this.forge_cast || this.forge_enchan || this.forge_card || this.intensify_headpoint || this.forge_intensify || this.fogre_pur || this.cast_headpoint || this.pur_headpoint;
        }
        protected $zhuzao_uplevel: number = 0;
        public get zhuzao_uplevel() {
            return this.$zhuzao_uplevel;
        }
        public set zhuzao_uplevel(val: number) {
            this.$zhuzao_uplevel = val;
            this.forge_cast = this.zhuzao_uplevel;
        }
        protected $qianghua_uplevel: number = 0;
        public get qianghua_uplevel() {
            return this.$qianghua_uplevel;
        }
        public set qianghua_uplevel(val: number) {
            this.$qianghua_uplevel = val;
            this.forge_intensify = this.qianghua_uplevel;
        }
        protected $jinglian_uplevel: number = 0;
        public get jinglian_uplevel() {
            return this.$jinglian_uplevel;
        }
        public set jinglian_uplevel(val: number) {
            this.$jinglian_uplevel = val;
            this.fogre_pur = this.jinglian_uplevel;
        }
        protected $char_role: number = 0;
        public get char_role() {
            return this.$char_role;
        }
        public set char_role(val: number) {
            this.$char_role = val;
            this.char = this.char_role || this.char_evolve || this.char_wing || this.char_converg;
        }
        protected $char_evolve: number = 0;
        public get char_evolve() {
            return this.$char_evolve;
        }
        public set char_evolve(val: number) {
            this.$char_evolve = val;
            this.char = this.char_role || this.char_evolve || this.char_wing || this.char_converg;
        }
        protected $char_wing: number = 0;
        public get char_wing() {
            return this.$char_wing;
        }
        public set char_wing(val: number) {
            this.$char_wing = val;
            this.char = this.char_role || this.char_evolve || this.char_wing || this.char_converg;
        }
        protected $char_converg: number = 0;
        public get char_converg() {
            return this.$char_converg;
        }
        public set char_converg(val: number) {
            this.$char_converg = val;
            this.char = this.char_role || this.char_evolve || this.char_wing || this.char_converg;
        }
        protected $role_chuanshi: number = 0;
        public get role_chuanshi() {
            return this.$role_chuanshi;
        }
        public set role_chuanshi(val: number) {
            this.$role_chuanshi = val;
            this.char_role = this.role_chuanshi || this.role_mibao || this.role_autoequip || this.role_baowu || this.role_openhero || this.role_shizhuang || this.role_zhanwen || this.role_shenqi;
        }
        protected $role_mibao: number = 0;
        public get role_mibao() {
            return this.$role_mibao;
        }
        public set role_mibao(val: number) {
            this.$role_mibao = val;
            this.char_role = this.role_chuanshi || this.role_mibao || this.role_autoequip || this.role_baowu || this.role_openhero || this.role_shizhuang || this.role_zhanwen || this.role_shenqi;
        }
        protected $role_autoequip: number = 0;
        public get role_autoequip() {
            return this.$role_autoequip;
        }
        public set role_autoequip(val: number) {
            this.$role_autoequip = val;
            this.char_role = this.role_chuanshi || this.role_mibao || this.role_autoequip || this.role_baowu || this.role_openhero || this.role_shizhuang || this.role_zhanwen || this.role_shenqi;
        }
        protected $role_baowu: number = 0;
        public get role_baowu() {
            return this.$role_baowu;
        }
        public set role_baowu(val: number) {
            this.$role_baowu = val;
            this.char_role = this.role_chuanshi || this.role_mibao || this.role_autoequip || this.role_baowu || this.role_openhero || this.role_shizhuang || this.role_zhanwen || this.role_shenqi;
        }
        protected $role_openhero: number = 0;
        public get role_openhero() {
            return this.$role_openhero;
        }
        public set role_openhero(val: number) {
            this.$role_openhero = val;
            this.char_role = this.role_chuanshi || this.role_mibao || this.role_autoequip || this.role_baowu || this.role_openhero || this.role_shizhuang || this.role_zhanwen || this.role_shenqi;
        }
        protected $role_shizhuang: number = 0;
        public get role_shizhuang() {
            return this.$role_shizhuang;
        }
        public set role_shizhuang(val: number) {
            this.$role_shizhuang = val;
            this.char_role = this.role_chuanshi || this.role_mibao || this.role_autoequip || this.role_baowu || this.role_openhero || this.role_shizhuang || this.role_zhanwen || this.role_shenqi;
        }
        protected $role_zhanwen: number = 0;
        public get role_zhanwen() {
            return this.$role_zhanwen;
        }
        public set role_zhanwen(val: number) {
            this.$role_zhanwen = val;
            this.char_role = this.role_chuanshi || this.role_mibao || this.role_autoequip || this.role_baowu || this.role_openhero || this.role_shizhuang || this.role_zhanwen || this.role_shenqi;
        }
        protected $role_shenqi: number = 0;
        public get role_shenqi() {
            return this.$role_shenqi;
        }
        public set role_shenqi(val: number) {
            this.$role_shenqi = val;
            this.char_role = this.role_chuanshi || this.role_mibao || this.role_autoequip || this.role_baowu || this.role_openhero || this.role_shizhuang || this.role_zhanwen || this.role_shenqi;
        }
        protected $chuanshi_qiyue: number = 0;
        public get chuanshi_qiyue() {
            return this.$chuanshi_qiyue;
        }
        public set chuanshi_qiyue(val: number) {
            this.$chuanshi_qiyue = val;
            this.role_chuanshi = this.chuanshi_qiyue;
        }
        protected $qiyue_uplevel7: number = 0;
        public get qiyue_uplevel7() {
            return this.$qiyue_uplevel7;
        }
        public set qiyue_uplevel7(val: number) {
            this.$qiyue_uplevel7 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_fen4: number = 0;
        public get qiyue_fen4() {
            return this.$qiyue_fen4;
        }
        public set qiyue_fen4(val: number) {
            this.$qiyue_fen4 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_fen8: number = 0;
        public get qiyue_fen8() {
            return this.$qiyue_fen8;
        }
        public set qiyue_fen8(val: number) {
            this.$qiyue_fen8 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_active1: number = 0;
        public get qiyue_active1() {
            return this.$qiyue_active1;
        }
        public set qiyue_active1(val: number) {
            this.$qiyue_active1 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_he6: number = 0;
        public get qiyue_he6() {
            return this.$qiyue_he6;
        }
        public set qiyue_he6(val: number) {
            this.$qiyue_he6 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_fen6: number = 0;
        public get qiyue_fen6() {
            return this.$qiyue_fen6;
        }
        public set qiyue_fen6(val: number) {
            this.$qiyue_fen6 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_fen5: number = 0;
        public get qiyue_fen5() {
            return this.$qiyue_fen5;
        }
        public set qiyue_fen5(val: number) {
            this.$qiyue_fen5 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_fen3: number = 0;
        public get qiyue_fen3() {
            return this.$qiyue_fen3;
        }
        public set qiyue_fen3(val: number) {
            this.$qiyue_fen3 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_fen7: number = 0;
        public get qiyue_fen7() {
            return this.$qiyue_fen7;
        }
        public set qiyue_fen7(val: number) {
            this.$qiyue_fen7 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_fen1: number = 0;
        public get qiyue_fen1() {
            return this.$qiyue_fen1;
        }
        public set qiyue_fen1(val: number) {
            this.$qiyue_fen1 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_he2: number = 0;
        public get qiyue_he2() {
            return this.$qiyue_he2;
        }
        public set qiyue_he2(val: number) {
            this.$qiyue_he2 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_he8: number = 0;
        public get qiyue_he8() {
            return this.$qiyue_he8;
        }
        public set qiyue_he8(val: number) {
            this.$qiyue_he8 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_he7: number = 0;
        public get qiyue_he7() {
            return this.$qiyue_he7;
        }
        public set qiyue_he7(val: number) {
            this.$qiyue_he7 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_fen2: number = 0;
        public get qiyue_fen2() {
            return this.$qiyue_fen2;
        }
        public set qiyue_fen2(val: number) {
            this.$qiyue_fen2 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_active6: number = 0;
        public get qiyue_active6() {
            return this.$qiyue_active6;
        }
        public set qiyue_active6(val: number) {
            this.$qiyue_active6 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_active7: number = 0;
        public get qiyue_active7() {
            return this.$qiyue_active7;
        }
        public set qiyue_active7(val: number) {
            this.$qiyue_active7 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_uplevel2: number = 0;
        public get qiyue_uplevel2() {
            return this.$qiyue_uplevel2;
        }
        public set qiyue_uplevel2(val: number) {
            this.$qiyue_uplevel2 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_he4: number = 0;
        public get qiyue_he4() {
            return this.$qiyue_he4;
        }
        public set qiyue_he4(val: number) {
            this.$qiyue_he4 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_he3: number = 0;
        public get qiyue_he3() {
            return this.$qiyue_he3;
        }
        public set qiyue_he3(val: number) {
            this.$qiyue_he3 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_active2: number = 0;
        public get qiyue_active2() {
            return this.$qiyue_active2;
        }
        public set qiyue_active2(val: number) {
            this.$qiyue_active2 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_he1: number = 0;
        public get qiyue_he1() {
            return this.$qiyue_he1;
        }
        public set qiyue_he1(val: number) {
            this.$qiyue_he1 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_active4: number = 0;
        public get qiyue_active4() {
            return this.$qiyue_active4;
        }
        public set qiyue_active4(val: number) {
            this.$qiyue_active4 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_uplevel8: number = 0;
        public get qiyue_uplevel8() {
            return this.$qiyue_uplevel8;
        }
        public set qiyue_uplevel8(val: number) {
            this.$qiyue_uplevel8 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_uplevel4: number = 0;
        public get qiyue_uplevel4() {
            return this.$qiyue_uplevel4;
        }
        public set qiyue_uplevel4(val: number) {
            this.$qiyue_uplevel4 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_uplevel1: number = 0;
        public get qiyue_uplevel1() {
            return this.$qiyue_uplevel1;
        }
        public set qiyue_uplevel1(val: number) {
            this.$qiyue_uplevel1 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_uplevel5: number = 0;
        public get qiyue_uplevel5() {
            return this.$qiyue_uplevel5;
        }
        public set qiyue_uplevel5(val: number) {
            this.$qiyue_uplevel5 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_active8: number = 0;
        public get qiyue_active8() {
            return this.$qiyue_active8;
        }
        public set qiyue_active8(val: number) {
            this.$qiyue_active8 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_uplevel3: number = 0;
        public get qiyue_uplevel3() {
            return this.$qiyue_uplevel3;
        }
        public set qiyue_uplevel3(val: number) {
            this.$qiyue_uplevel3 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_active3: number = 0;
        public get qiyue_active3() {
            return this.$qiyue_active3;
        }
        public set qiyue_active3(val: number) {
            this.$qiyue_active3 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_active5: number = 0;
        public get qiyue_active5() {
            return this.$qiyue_active5;
        }
        public set qiyue_active5(val: number) {
            this.$qiyue_active5 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_uplevel6: number = 0;
        public get qiyue_uplevel6() {
            return this.$qiyue_uplevel6;
        }
        public set qiyue_uplevel6(val: number) {
            this.$qiyue_uplevel6 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $qiyue_he5: number = 0;
        public get qiyue_he5() {
            return this.$qiyue_he5;
        }
        public set qiyue_he5(val: number) {
            this.$qiyue_he5 = val;
            this.chuanshi_qiyue = this.qiyue_uplevel7 || this.qiyue_fen4 || this.qiyue_fen8 || this.qiyue_active1 || this.qiyue_he6 || this.qiyue_fen6 || this.qiyue_fen5 || this.qiyue_fen3 || this.qiyue_fen7 || this.qiyue_fen1 || this.qiyue_he2 || this.qiyue_he8 || this.qiyue_he7 || this.qiyue_fen2 || this.qiyue_active6 || this.qiyue_active7 || this.qiyue_uplevel2 || this.qiyue_he4 || this.qiyue_he3 || this.qiyue_active2 || this.qiyue_he1 || this.qiyue_active4 || this.qiyue_uplevel8 || this.qiyue_uplevel4 || this.qiyue_uplevel1 || this.qiyue_uplevel5 || this.qiyue_active8 || this.qiyue_uplevel3 || this.qiyue_active3 || this.qiyue_active5 || this.qiyue_uplevel6 || this.qiyue_he5;
        }
        protected $mibao_rong: number = 0;
        public get mibao_rong() {
            return this.$mibao_rong;
        }
        public set mibao_rong(val: number) {
            this.$mibao_rong = val;
            this.role_mibao = this.mibao_rong || this.mibao_upstar || this.mibao_uplevel || this.mibao_active || this.mibao_upskill;
        }
        protected $mibao_upstar: number = 0;
        public get mibao_upstar() {
            return this.$mibao_upstar;
        }
        public set mibao_upstar(val: number) {
            this.$mibao_upstar = val;
            this.role_mibao = this.mibao_rong || this.mibao_upstar || this.mibao_uplevel || this.mibao_active || this.mibao_upskill;
        }
        protected $mibao_uplevel: number = 0;
        public get mibao_uplevel() {
            return this.$mibao_uplevel;
        }
        public set mibao_uplevel(val: number) {
            this.$mibao_uplevel = val;
            this.role_mibao = this.mibao_rong || this.mibao_upstar || this.mibao_uplevel || this.mibao_active || this.mibao_upskill;
        }
        protected $mibao_active: number = 0;
        public get mibao_active() {
            return this.$mibao_active;
        }
        public set mibao_active(val: number) {
            this.$mibao_active = val;
            this.role_mibao = this.mibao_rong || this.mibao_upstar || this.mibao_uplevel || this.mibao_active || this.mibao_upskill;
        }
        protected $mibao_upskill: number = 0;
        public get mibao_upskill() {
            return this.$mibao_upskill;
        }
        public set mibao_upskill(val: number) {
            this.$mibao_upskill = val;
            this.role_mibao = this.mibao_rong || this.mibao_upstar || this.mibao_uplevel || this.mibao_active || this.mibao_upskill;
        }
        protected $mb_active4: number = 0;
        public get mb_active4() {
            return this.$mb_active4;
        }
        public set mb_active4(val: number) {
            this.$mb_active4 = val;
            this.mibao_active = this.mb_active4 || this.mb_active2 || this.mb_active5 || this.mb_active1 || this.mb_active3 || this.mb_active6;
        }
        protected $mb_active2: number = 0;
        public get mb_active2() {
            return this.$mb_active2;
        }
        public set mb_active2(val: number) {
            this.$mb_active2 = val;
            this.mibao_active = this.mb_active4 || this.mb_active2 || this.mb_active5 || this.mb_active1 || this.mb_active3 || this.mb_active6;
        }
        protected $mb_active5: number = 0;
        public get mb_active5() {
            return this.$mb_active5;
        }
        public set mb_active5(val: number) {
            this.$mb_active5 = val;
            this.mibao_active = this.mb_active4 || this.mb_active2 || this.mb_active5 || this.mb_active1 || this.mb_active3 || this.mb_active6;
        }
        protected $mb_active1: number = 0;
        public get mb_active1() {
            return this.$mb_active1;
        }
        public set mb_active1(val: number) {
            this.$mb_active1 = val;
            this.mibao_active = this.mb_active4 || this.mb_active2 || this.mb_active5 || this.mb_active1 || this.mb_active3 || this.mb_active6;
        }
        protected $mb_active3: number = 0;
        public get mb_active3() {
            return this.$mb_active3;
        }
        public set mb_active3(val: number) {
            this.$mb_active3 = val;
            this.mibao_active = this.mb_active4 || this.mb_active2 || this.mb_active5 || this.mb_active1 || this.mb_active3 || this.mb_active6;
        }
        protected $mb_active6: number = 0;
        public get mb_active6() {
            return this.$mb_active6;
        }
        public set mb_active6(val: number) {
            this.$mb_active6 = val;
            this.mibao_active = this.mb_active4 || this.mb_active2 || this.mb_active5 || this.mb_active1 || this.mb_active3 || this.mb_active6;
        }
        protected $baowu_jiban: number = 0;
        public get baowu_jiban() {
            return this.$baowu_jiban;
        }
        public set baowu_jiban(val: number) {
            this.$baowu_jiban = val;
            this.role_baowu = this.baowu_jiban || this.baowu_xunzhang || this.jibanheadRedpoint || this.baowu_wenzhang || this.wenzhangresove || this.baowu_ying;
        }
        protected $baowu_xunzhang: number = 0;
        public get baowu_xunzhang() {
            return this.$baowu_xunzhang;
        }
        public set baowu_xunzhang(val: number) {
            this.$baowu_xunzhang = val;
            this.role_baowu = this.baowu_jiban || this.baowu_xunzhang || this.jibanheadRedpoint || this.baowu_wenzhang || this.wenzhangresove || this.baowu_ying;
        }
        protected $jibanheadRedpoint: number = 0;
        public get jibanheadRedpoint() {
            return this.$jibanheadRedpoint;
        }
        public set jibanheadRedpoint(val: number) {
            this.$jibanheadRedpoint = val;
            this.role_baowu = this.baowu_jiban || this.baowu_xunzhang || this.jibanheadRedpoint || this.baowu_wenzhang || this.wenzhangresove || this.baowu_ying;
        }
        protected $baowu_wenzhang: number = 0;
        public get baowu_wenzhang() {
            return this.$baowu_wenzhang;
        }
        public set baowu_wenzhang(val: number) {
            this.$baowu_wenzhang = val;
            this.role_baowu = this.baowu_jiban || this.baowu_xunzhang || this.jibanheadRedpoint || this.baowu_wenzhang || this.wenzhangresove || this.baowu_ying;
        }
        protected $wenzhangresove: number = 0;
        public get wenzhangresove() {
            return this.$wenzhangresove;
        }
        public set wenzhangresove(val: number) {
            this.$wenzhangresove = val;
            this.role_baowu = this.baowu_jiban || this.baowu_xunzhang || this.jibanheadRedpoint || this.baowu_wenzhang || this.wenzhangresove || this.baowu_ying;
        }
        protected $jibanshengji: number = 0;
        public get jibanshengji() {
            return this.$jibanshengji;
        }
        public set jibanshengji(val: number) {
            this.$jibanshengji = val;
            this.baowu_jiban = this.jibanshengji || this.jibanjihuo;
        }
        protected $jibanjihuo: number = 0;
        public get jibanjihuo() {
            return this.$jibanjihuo;
        }
        public set jibanjihuo(val: number) {
            this.$jibanjihuo = val;
            this.baowu_jiban = this.jibanshengji || this.jibanjihuo;
        }
        protected $huizhang_upstar: number = 0;
        public get huizhang_upstar() {
            return this.$huizhang_upstar;
        }
        public set huizhang_upstar(val: number) {
            this.$huizhang_upstar = val;
            this.baowu_xunzhang = this.huizhang_upstar || this.xunzhang_active;
        }
        protected $xunzhang_active: number = 0;
        public get xunzhang_active() {
            return this.$xunzhang_active;
        }
        public set xunzhang_active(val: number) {
            this.$xunzhang_active = val;
            this.baowu_xunzhang = this.huizhang_upstar || this.xunzhang_active;
        }
        protected $wenzhangheadRedpoint: number = 0;
        public get wenzhangheadRedpoint() {
            return this.$wenzhangheadRedpoint;
        }
        public set wenzhangheadRedpoint(val: number) {
            this.$wenzhangheadRedpoint = val;
            this.baowu_wenzhang = this.wenzhangheadRedpoint;
        }
        protected $shizhuang_point2: number = 0;
        public get shizhuang_point2() {
            return this.$shizhuang_point2;
        }
        public set shizhuang_point2(val: number) {
            this.$shizhuang_point2 = val;
            this.role_shizhuang = this.shizhuang_point2 || this.shizhuang_point5 || this.shizhuang_point6 || this.shizhuang_point1 || this.shizhuang_title_equip || this.shizhuang_point4 || this.shizhuang_point3;
        }
        protected $shizhuang_point5: number = 0;
        public get shizhuang_point5() {
            return this.$shizhuang_point5;
        }
        public set shizhuang_point5(val: number) {
            this.$shizhuang_point5 = val;
            this.role_shizhuang = this.shizhuang_point2 || this.shizhuang_point5 || this.shizhuang_point6 || this.shizhuang_point1 || this.shizhuang_title_equip || this.shizhuang_point4 || this.shizhuang_point3;
        }
        protected $shizhuang_point6: number = 0;
        public get shizhuang_point6() {
            return this.$shizhuang_point6;
        }
        public set shizhuang_point6(val: number) {
            this.$shizhuang_point6 = val;
            this.role_shizhuang = this.shizhuang_point2 || this.shizhuang_point5 || this.shizhuang_point6 || this.shizhuang_point1 || this.shizhuang_title_equip || this.shizhuang_point4 || this.shizhuang_point3;
        }
        protected $shizhuang_point1: number = 0;
        public get shizhuang_point1() {
            return this.$shizhuang_point1;
        }
        public set shizhuang_point1(val: number) {
            this.$shizhuang_point1 = val;
            this.role_shizhuang = this.shizhuang_point2 || this.shizhuang_point5 || this.shizhuang_point6 || this.shizhuang_point1 || this.shizhuang_title_equip || this.shizhuang_point4 || this.shizhuang_point3;
        }
        protected $shizhuang_title_equip: number = 0;
        public get shizhuang_title_equip() {
            return this.$shizhuang_title_equip;
        }
        public set shizhuang_title_equip(val: number) {
            this.$shizhuang_title_equip = val;
            this.role_shizhuang = this.shizhuang_point2 || this.shizhuang_point5 || this.shizhuang_point6 || this.shizhuang_point1 || this.shizhuang_title_equip || this.shizhuang_point4 || this.shizhuang_point3;
        }
        protected $shizhuang_point4: number = 0;
        public get shizhuang_point4() {
            return this.$shizhuang_point4;
        }
        public set shizhuang_point4(val: number) {
            this.$shizhuang_point4 = val;
            this.role_shizhuang = this.shizhuang_point2 || this.shizhuang_point5 || this.shizhuang_point6 || this.shizhuang_point1 || this.shizhuang_title_equip || this.shizhuang_point4 || this.shizhuang_point3;
        }
        protected $shizhuang_point3: number = 0;
        public get shizhuang_point3() {
            return this.$shizhuang_point3;
        }
        public set shizhuang_point3(val: number) {
            this.$shizhuang_point3 = val;
            this.role_shizhuang = this.shizhuang_point2 || this.shizhuang_point5 || this.shizhuang_point6 || this.shizhuang_point1 || this.shizhuang_title_equip || this.shizhuang_point4 || this.shizhuang_point3;
        }
        protected $shizhuang_make2: number = 0;
        public get shizhuang_make2() {
            return this.$shizhuang_make2;
        }
        public set shizhuang_make2(val: number) {
            this.$shizhuang_make2 = val;
            this.shizhuang_point2 = this.shizhuang_active2 || this.shizhuang_uplevel2;
        }
        protected $shizhuang_active2: number = 0;
        public get shizhuang_active2() {
            return this.$shizhuang_active2;
        }
        public set shizhuang_active2(val: number) {
            this.$shizhuang_active2 = val;
            this.shizhuang_point2 = this.shizhuang_active2 || this.shizhuang_uplevel2;
        }
        protected $shizhuang_yibiao2: number = 0;
        public get shizhuang_yibiao2() {
            return this.$shizhuang_yibiao2;
        }
        public set shizhuang_yibiao2(val: number) {
            this.$shizhuang_yibiao2 = val;
            this.shizhuang_point2 = this.shizhuang_active2 || this.shizhuang_uplevel2;
        }
        protected $shizhuang_uplevel2: number = 0;
        public get shizhuang_uplevel2() {
            return this.$shizhuang_uplevel2;
        }
        public set shizhuang_uplevel2(val: number) {
            this.$shizhuang_uplevel2 = val;
            this.shizhuang_point2 = this.shizhuang_active2 || this.shizhuang_uplevel2;
        }
        protected $shizhuang_meili2: number = 0;
        public get shizhuang_meili2() {
            return this.$shizhuang_meili2;
        }
        public set shizhuang_meili2(val: number) {
            this.$shizhuang_meili2 = val;
            this.shizhuang_point2 = this.shizhuang_active2 || this.shizhuang_uplevel2;
        }
        protected $shizhuang_make5: number = 0;
        public get shizhuang_make5() {
            return this.$shizhuang_make5;
        }
        public set shizhuang_make5(val: number) {
            this.$shizhuang_make5 = val;
            this.shizhuang_point5 = this.shizhuang_active5 || this.shizhuang_uplevel5;
        }
        protected $shizhuang_meili5: number = 0;
        public get shizhuang_meili5() {
            return this.$shizhuang_meili5;
        }
        public set shizhuang_meili5(val: number) {
            this.$shizhuang_meili5 = val;
            this.shizhuang_point5 = this.shizhuang_active5 || this.shizhuang_uplevel5;
        }
        protected $shizhuang_yibiao5: number = 0;
        public get shizhuang_yibiao5() {
            return this.$shizhuang_yibiao5;
        }
        public set shizhuang_yibiao5(val: number) {
            this.$shizhuang_yibiao5 = val;
            this.shizhuang_point5 = this.shizhuang_active5 || this.shizhuang_uplevel5;
        }
        protected $shizhuang_active5: number = 0;
        public get shizhuang_active5() {
            return this.$shizhuang_active5;
        }
        public set shizhuang_active5(val: number) {
            this.$shizhuang_active5 = val;
            this.shizhuang_point5 = this.shizhuang_active5 || this.shizhuang_uplevel5;
        }
        protected $shizhuang_uplevel5: number = 0;
        public get shizhuang_uplevel5() {
            return this.$shizhuang_uplevel5;
        }
        public set shizhuang_uplevel5(val: number) {
            this.$shizhuang_uplevel5 = val;
            this.shizhuang_point5 = this.shizhuang_active5 || this.shizhuang_uplevel5;
        }
        protected $shizhuang_meili6: number = 0;
        public get shizhuang_meili6() {
            return this.$shizhuang_meili6;
        }
        public set shizhuang_meili6(val: number) {
            this.$shizhuang_meili6 = val;
            this.shizhuang_point6 = this.shizhuang_uplevel6 || this.shizhuang_active6;
        }
        protected $shizhuang_uplevel6: number = 0;
        public get shizhuang_uplevel6() {
            return this.$shizhuang_uplevel6;
        }
        public set shizhuang_uplevel6(val: number) {
            this.$shizhuang_uplevel6 = val;
            this.shizhuang_point6 = this.shizhuang_uplevel6 || this.shizhuang_active6;
        }
        protected $shizhuang_make6: number = 0;
        public get shizhuang_make6() {
            return this.$shizhuang_make6;
        }
        public set shizhuang_make6(val: number) {
            this.$shizhuang_make6 = val;
            this.shizhuang_point6 = this.shizhuang_uplevel6 || this.shizhuang_active6;
        }
        protected $shizhuang_active6: number = 0;
        public get shizhuang_active6() {
            return this.$shizhuang_active6;
        }
        public set shizhuang_active6(val: number) {
            this.$shizhuang_active6 = val;
            this.shizhuang_point6 = this.shizhuang_uplevel6 || this.shizhuang_active6;
        }
        protected $shizhuang_yibiao6: number = 0;
        public get shizhuang_yibiao6() {
            return this.$shizhuang_yibiao6;
        }
        public set shizhuang_yibiao6(val: number) {
            this.$shizhuang_yibiao6 = val;
            this.shizhuang_point6 = this.shizhuang_uplevel6 || this.shizhuang_active6;
        }
        protected $shizhuang_meili1: number = 0;
        public get shizhuang_meili1() {
            return this.$shizhuang_meili1;
        }
        public set shizhuang_meili1(val: number) {
            this.$shizhuang_meili1 = val;
            this.shizhuang_point1 = this.shizhuang_active1 || this.shizhuang_uplevel1;
        }
        protected $shizhuang_make1: number = 0;
        public get shizhuang_make1() {
            return this.$shizhuang_make1;
        }
        public set shizhuang_make1(val: number) {
            this.$shizhuang_make1 = val;
            this.shizhuang_point1 = this.shizhuang_active1 || this.shizhuang_uplevel1;
        }
        protected $shizhuang_active1: number = 0;
        public get shizhuang_active1() {
            return this.$shizhuang_active1;
        }
        public set shizhuang_active1(val: number) {
            this.$shizhuang_active1 = val;
            this.shizhuang_point1 = this.shizhuang_active1 || this.shizhuang_uplevel1;
        }
        protected $shizhuang_uplevel1: number = 0;
        public get shizhuang_uplevel1() {
            return this.$shizhuang_uplevel1;
        }
        public set shizhuang_uplevel1(val: number) {
            this.$shizhuang_uplevel1 = val;
            this.shizhuang_point1 = this.shizhuang_active1 || this.shizhuang_uplevel1;
        }
        protected $shizhuang_yibiao1: number = 0;
        public get shizhuang_yibiao1() {
            return this.$shizhuang_yibiao1;
        }
        public set shizhuang_yibiao1(val: number) {
            this.$shizhuang_yibiao1 = val;
            this.shizhuang_point1 = this.shizhuang_active1 || this.shizhuang_uplevel1;
        }
        protected $shizhuang_yibiao4: number = 0;
        public get shizhuang_yibiao4() {
            return this.$shizhuang_yibiao4;
        }
        public set shizhuang_yibiao4(val: number) {
            this.$shizhuang_yibiao4 = val;
            this.shizhuang_point4 = this.shizhuang_active4 || this.shizhuang_uplevel4;
        }
        protected $shizhuang_active4: number = 0;
        public get shizhuang_active4() {
            return this.$shizhuang_active4;
        }
        public set shizhuang_active4(val: number) {
            this.$shizhuang_active4 = val;
            this.shizhuang_point4 = this.shizhuang_active4 || this.shizhuang_uplevel4;
        }
        protected $shizhuang_uplevel4: number = 0;
        public get shizhuang_uplevel4() {
            return this.$shizhuang_uplevel4;
        }
        public set shizhuang_uplevel4(val: number) {
            this.$shizhuang_uplevel4 = val;
            this.shizhuang_point4 = this.shizhuang_active4 || this.shizhuang_uplevel4;
        }
        protected $shizhuang_meili4: number = 0;
        public get shizhuang_meili4() {
            return this.$shizhuang_meili4;
        }
        public set shizhuang_meili4(val: number) {
            this.$shizhuang_meili4 = val;
            this.shizhuang_point4 = this.shizhuang_active4 || this.shizhuang_uplevel4;
        }
        protected $shizhuang_make4: number = 0;
        public get shizhuang_make4() {
            return this.$shizhuang_make4;
        }
        public set shizhuang_make4(val: number) {
            this.$shizhuang_make4 = val;
            this.shizhuang_point4 = this.shizhuang_active4 || this.shizhuang_uplevel4;
        }
        protected $shizhuang_active3: number = 0;
        public get shizhuang_active3() {
            return this.$shizhuang_active3;
        }
        public set shizhuang_active3(val: number) {
            this.$shizhuang_active3 = val;
            this.shizhuang_point3 = this.shizhuang_active3 || this.shizhuang_uplevel3;
        }
        protected $shizhuang_uplevel3: number = 0;
        public get shizhuang_uplevel3() {
            return this.$shizhuang_uplevel3;
        }
        public set shizhuang_uplevel3(val: number) {
            this.$shizhuang_uplevel3 = val;
            this.shizhuang_point3 = this.shizhuang_active3 || this.shizhuang_uplevel3;
        }
        protected $shizhuang_meili3: number = 0;
        public get shizhuang_meili3() {
            return this.$shizhuang_meili3;
        }
        public set shizhuang_meili3(val: number) {
            this.$shizhuang_meili3 = val;
            this.shizhuang_point3 = this.shizhuang_active3 || this.shizhuang_uplevel3;
        }
        protected $shizhuang_yibiao3: number = 0;
        public get shizhuang_yibiao3() {
            return this.$shizhuang_yibiao3;
        }
        public set shizhuang_yibiao3(val: number) {
            this.$shizhuang_yibiao3 = val;
            this.shizhuang_point3 = this.shizhuang_active3 || this.shizhuang_uplevel3;
        }
        protected $shizhuang_make3: number = 0;
        public get shizhuang_make3() {
            return this.$shizhuang_make3;
        }
        public set shizhuang_make3(val: number) {
            this.$shizhuang_make3 = val;
            this.shizhuang_point3 = this.shizhuang_active3 || this.shizhuang_uplevel3;
        }
        protected $zhanwen_fenjie: number = 0;
        public get zhanwen_fenjie() {
            return this.$zhanwen_fenjie;
        }
        public set zhanwen_fenjie(val: number) {
            this.$zhanwen_fenjie = val;
            this.role_zhanwen = this.zhanwen_fenjie || this.zhanwen_xiangqian;
        }
        protected $zhanwen_xiangqian: number = 0;
        public get zhanwen_xiangqian() {
            return this.$zhanwen_xiangqian;
        }
        public set zhanwen_xiangqian(val: number) {
            this.$zhanwen_xiangqian = val;
            this.role_zhanwen = this.zhanwen_fenjie || this.zhanwen_xiangqian;
        }
        protected $zhanwen_fen: number = 0;
        public get zhanwen_fen() {
            return this.$zhanwen_fen;
        }
        public set zhanwen_fen(val: number) {
            this.$zhanwen_fen = val;
            this.zhanwen_fenjie = this.zhanwen_fen;
        }
        protected $zhanwen_xiangqian4: number = 0;
        public get zhanwen_xiangqian4() {
            return this.$zhanwen_xiangqian4;
        }
        public set zhanwen_xiangqian4(val: number) {
            this.$zhanwen_xiangqian4 = val;
            this.zhanwen_xiangqian = this.zhanwen_xiangqian4 || this.zhanwen_xiangqian1 || this.zhanwen_xiangqian2 || this.zhanwen_xiangqian6 || this.zhanwen_xiangqian7 || this.zhanwen_xiangqian5 || this.zhanwen_xiangqian3 || this.zhanwen_xiangqian8;
        }
        protected $zhanwen_xiangqian1: number = 0;
        public get zhanwen_xiangqian1() {
            return this.$zhanwen_xiangqian1;
        }
        public set zhanwen_xiangqian1(val: number) {
            this.$zhanwen_xiangqian1 = val;
            this.zhanwen_xiangqian = this.zhanwen_xiangqian4 || this.zhanwen_xiangqian1 || this.zhanwen_xiangqian2 || this.zhanwen_xiangqian6 || this.zhanwen_xiangqian7 || this.zhanwen_xiangqian5 || this.zhanwen_xiangqian3 || this.zhanwen_xiangqian8;
        }
        protected $zhanwen_xiangqian2: number = 0;
        public get zhanwen_xiangqian2() {
            return this.$zhanwen_xiangqian2;
        }
        public set zhanwen_xiangqian2(val: number) {
            this.$zhanwen_xiangqian2 = val;
            this.zhanwen_xiangqian = this.zhanwen_xiangqian4 || this.zhanwen_xiangqian1 || this.zhanwen_xiangqian2 || this.zhanwen_xiangqian6 || this.zhanwen_xiangqian7 || this.zhanwen_xiangqian5 || this.zhanwen_xiangqian3 || this.zhanwen_xiangqian8;
        }
        protected $zhanwen_xiangqian6: number = 0;
        public get zhanwen_xiangqian6() {
            return this.$zhanwen_xiangqian6;
        }
        public set zhanwen_xiangqian6(val: number) {
            this.$zhanwen_xiangqian6 = val;
            this.zhanwen_xiangqian = this.zhanwen_xiangqian4 || this.zhanwen_xiangqian1 || this.zhanwen_xiangqian2 || this.zhanwen_xiangqian6 || this.zhanwen_xiangqian7 || this.zhanwen_xiangqian5 || this.zhanwen_xiangqian3 || this.zhanwen_xiangqian8;
        }
        protected $zhanwen_xiangqian7: number = 0;
        public get zhanwen_xiangqian7() {
            return this.$zhanwen_xiangqian7;
        }
        public set zhanwen_xiangqian7(val: number) {
            this.$zhanwen_xiangqian7 = val;
            this.zhanwen_xiangqian = this.zhanwen_xiangqian4 || this.zhanwen_xiangqian1 || this.zhanwen_xiangqian2 || this.zhanwen_xiangqian6 || this.zhanwen_xiangqian7 || this.zhanwen_xiangqian5 || this.zhanwen_xiangqian3 || this.zhanwen_xiangqian8;
        }
        protected $zhanwen_xiangqian5: number = 0;
        public get zhanwen_xiangqian5() {
            return this.$zhanwen_xiangqian5;
        }
        public set zhanwen_xiangqian5(val: number) {
            this.$zhanwen_xiangqian5 = val;
            this.zhanwen_xiangqian = this.zhanwen_xiangqian4 || this.zhanwen_xiangqian1 || this.zhanwen_xiangqian2 || this.zhanwen_xiangqian6 || this.zhanwen_xiangqian7 || this.zhanwen_xiangqian5 || this.zhanwen_xiangqian3 || this.zhanwen_xiangqian8;
        }
        protected $zhanwen_xiangqian3: number = 0;
        public get zhanwen_xiangqian3() {
            return this.$zhanwen_xiangqian3;
        }
        public set zhanwen_xiangqian3(val: number) {
            this.$zhanwen_xiangqian3 = val;
            this.zhanwen_xiangqian = this.zhanwen_xiangqian4 || this.zhanwen_xiangqian1 || this.zhanwen_xiangqian2 || this.zhanwen_xiangqian6 || this.zhanwen_xiangqian7 || this.zhanwen_xiangqian5 || this.zhanwen_xiangqian3 || this.zhanwen_xiangqian8;
        }
        protected $zhanwen_xiangqian8: number = 0;
        public get zhanwen_xiangqian8() {
            return this.$zhanwen_xiangqian8;
        }
        public set zhanwen_xiangqian8(val: number) {
            this.$zhanwen_xiangqian8 = val;
            this.zhanwen_xiangqian = this.zhanwen_xiangqian4 || this.zhanwen_xiangqian1 || this.zhanwen_xiangqian2 || this.zhanwen_xiangqian6 || this.zhanwen_xiangqian7 || this.zhanwen_xiangqian5 || this.zhanwen_xiangqian3 || this.zhanwen_xiangqian8;
        }
        protected $zhanwen_set4: number = 0;
        public get zhanwen_set4() {
            return this.$zhanwen_set4;
        }
        public set zhanwen_set4(val: number) {
            this.$zhanwen_set4 = val;
            this.zhanwen_xiangqian4 = this.zhanwen_set4 || this.zhanwen_uplevel4;
        }
        protected $zhanwen_uplevel4: number = 0;
        public get zhanwen_uplevel4() {
            return this.$zhanwen_uplevel4;
        }
        public set zhanwen_uplevel4(val: number) {
            this.$zhanwen_uplevel4 = val;
            this.zhanwen_xiangqian4 = this.zhanwen_set4 || this.zhanwen_uplevel4;
        }
        protected $zhanwen_set1: number = 0;
        public get zhanwen_set1() {
            return this.$zhanwen_set1;
        }
        public set zhanwen_set1(val: number) {
            this.$zhanwen_set1 = val;
            this.zhanwen_xiangqian1 = this.zhanwen_set1 || this.zhanwen_uplevel1;
        }
        protected $zhanwen_uplevel1: number = 0;
        public get zhanwen_uplevel1() {
            return this.$zhanwen_uplevel1;
        }
        public set zhanwen_uplevel1(val: number) {
            this.$zhanwen_uplevel1 = val;
            this.zhanwen_xiangqian1 = this.zhanwen_set1 || this.zhanwen_uplevel1;
        }
        protected $zhanwen_uplevel2: number = 0;
        public get zhanwen_uplevel2() {
            return this.$zhanwen_uplevel2;
        }
        public set zhanwen_uplevel2(val: number) {
            this.$zhanwen_uplevel2 = val;
            this.zhanwen_xiangqian2 = this.zhanwen_uplevel2 || this.zhanwen_set2;
        }
        protected $zhanwen_set2: number = 0;
        public get zhanwen_set2() {
            return this.$zhanwen_set2;
        }
        public set zhanwen_set2(val: number) {
            this.$zhanwen_set2 = val;
            this.zhanwen_xiangqian2 = this.zhanwen_uplevel2 || this.zhanwen_set2;
        }
        protected $zhanwen_uplevel6: number = 0;
        public get zhanwen_uplevel6() {
            return this.$zhanwen_uplevel6;
        }
        public set zhanwen_uplevel6(val: number) {
            this.$zhanwen_uplevel6 = val;
            this.zhanwen_xiangqian6 = this.zhanwen_uplevel6 || this.zhanwen_set6;
        }
        protected $zhanwen_set6: number = 0;
        public get zhanwen_set6() {
            return this.$zhanwen_set6;
        }
        public set zhanwen_set6(val: number) {
            this.$zhanwen_set6 = val;
            this.zhanwen_xiangqian6 = this.zhanwen_uplevel6 || this.zhanwen_set6;
        }
        protected $zhanwen_uplevel7: number = 0;
        public get zhanwen_uplevel7() {
            return this.$zhanwen_uplevel7;
        }
        public set zhanwen_uplevel7(val: number) {
            this.$zhanwen_uplevel7 = val;
            this.zhanwen_xiangqian7 = this.zhanwen_uplevel7 || this.zhanwen_set7;
        }
        protected $zhanwen_set7: number = 0;
        public get zhanwen_set7() {
            return this.$zhanwen_set7;
        }
        public set zhanwen_set7(val: number) {
            this.$zhanwen_set7 = val;
            this.zhanwen_xiangqian7 = this.zhanwen_uplevel7 || this.zhanwen_set7;
        }
        protected $zhanwen_set5: number = 0;
        public get zhanwen_set5() {
            return this.$zhanwen_set5;
        }
        public set zhanwen_set5(val: number) {
            this.$zhanwen_set5 = val;
            this.zhanwen_xiangqian5 = this.zhanwen_set5 || this.zhanwen_uplevel5;
        }
        protected $zhanwen_uplevel5: number = 0;
        public get zhanwen_uplevel5() {
            return this.$zhanwen_uplevel5;
        }
        public set zhanwen_uplevel5(val: number) {
            this.$zhanwen_uplevel5 = val;
            this.zhanwen_xiangqian5 = this.zhanwen_set5 || this.zhanwen_uplevel5;
        }
        protected $zhanwen_uplevel3: number = 0;
        public get zhanwen_uplevel3() {
            return this.$zhanwen_uplevel3;
        }
        public set zhanwen_uplevel3(val: number) {
            this.$zhanwen_uplevel3 = val;
            this.zhanwen_xiangqian3 = this.zhanwen_uplevel3 || this.zhanwen_set3;
        }
        protected $zhanwen_set3: number = 0;
        public get zhanwen_set3() {
            return this.$zhanwen_set3;
        }
        public set zhanwen_set3(val: number) {
            this.$zhanwen_set3 = val;
            this.zhanwen_xiangqian3 = this.zhanwen_uplevel3 || this.zhanwen_set3;
        }
        protected $zhanwen_uplevel8: number = 0;
        public get zhanwen_uplevel8() {
            return this.$zhanwen_uplevel8;
        }
        public set zhanwen_uplevel8(val: number) {
            this.$zhanwen_uplevel8 = val;
            this.zhanwen_xiangqian8 = this.zhanwen_uplevel8 || this.zhanwen_set8;
        }
        protected $zhanwen_set8: number = 0;
        public get zhanwen_set8() {
            return this.$zhanwen_set8;
        }
        public set zhanwen_set8(val: number) {
            this.$zhanwen_set8 = val;
            this.zhanwen_xiangqian8 = this.zhanwen_uplevel8 || this.zhanwen_set8;
        }
        protected $shenqi_chuancheng: number = 0;
        public get shenqi_chuancheng() {
            return this.$shenqi_chuancheng;
        }
        public set shenqi_chuancheng(val: number) {
            this.$shenqi_chuancheng = val;
            this.role_shenqi = this.shenqi_chuancheng || this.shenqi_shenzhuang || this.shenqi_yuangu || this.shenqi_chaofan;
        }
        protected $shenqi_shenzhuang: number = 0;
        public get shenqi_shenzhuang() {
            return this.$shenqi_shenzhuang;
        }
        public set shenqi_shenzhuang(val: number) {
            this.$shenqi_shenzhuang = val;
            this.role_shenqi = this.shenqi_chuancheng || this.shenqi_shenzhuang || this.shenqi_yuangu || this.shenqi_chaofan;
        }
        protected $shenqi_yuangu: number = 0;
        public get shenqi_yuangu() {
            return this.$shenqi_yuangu;
        }
        public set shenqi_yuangu(val: number) {
            this.$shenqi_yuangu = val;
            this.role_shenqi = this.shenqi_chuancheng || this.shenqi_shenzhuang || this.shenqi_yuangu || this.shenqi_chaofan;
        }
        protected $shenqi_chaofan: number = 0;
        public get shenqi_chaofan() {
            return this.$shenqi_chaofan;
        }
        public set shenqi_chaofan(val: number) {
            this.$shenqi_chaofan = val;
            this.role_shenqi = this.shenqi_chuancheng || this.shenqi_shenzhuang || this.shenqi_yuangu || this.shenqi_chaofan;
        }
        protected $aomi_uplevel1: number = 0;
        public get aomi_uplevel1() {
            return this.$aomi_uplevel1;
        }
        public set aomi_uplevel1(val: number) {
            this.$aomi_uplevel1 = val;
            this.shenqi_chuancheng = this.aomi_uplevel1 || this.aomi_uplevel2 || this.chuancheng_hecheng2 || this.chuancheng_uplevel2 || this.chuancheng_fen || this.chuancheng_uplevel1 || this.chuancheng_hecheng1;
        }
        protected $aomi_uplevel2: number = 0;
        public get aomi_uplevel2() {
            return this.$aomi_uplevel2;
        }
        public set aomi_uplevel2(val: number) {
            this.$aomi_uplevel2 = val;
            this.shenqi_chuancheng = this.aomi_uplevel1 || this.aomi_uplevel2 || this.chuancheng_hecheng2 || this.chuancheng_uplevel2 || this.chuancheng_fen || this.chuancheng_uplevel1 || this.chuancheng_hecheng1;
        }
        protected $chuancheng_hecheng2: number = 0;
        public get chuancheng_hecheng2() {
            return this.$chuancheng_hecheng2;
        }
        public set chuancheng_hecheng2(val: number) {
            this.$chuancheng_hecheng2 = val;
            this.shenqi_chuancheng = this.aomi_uplevel1 || this.aomi_uplevel2 || this.chuancheng_hecheng2 || this.chuancheng_uplevel2 || this.chuancheng_fen || this.chuancheng_uplevel1 || this.chuancheng_hecheng1;
        }
        protected $chuancheng_uplevel2: number = 0;
        public get chuancheng_uplevel2() {
            return this.$chuancheng_uplevel2;
        }
        public set chuancheng_uplevel2(val: number) {
            this.$chuancheng_uplevel2 = val;
            this.shenqi_chuancheng = this.aomi_uplevel1 || this.aomi_uplevel2 || this.chuancheng_hecheng2 || this.chuancheng_uplevel2 || this.chuancheng_fen || this.chuancheng_uplevel1 || this.chuancheng_hecheng1;
        }
        protected $chuancheng_fen: number = 0;
        public get chuancheng_fen() {
            return this.$chuancheng_fen;
        }
        public set chuancheng_fen(val: number) {
            this.$chuancheng_fen = val;
            this.shenqi_chuancheng = this.aomi_uplevel1 || this.aomi_uplevel2 || this.chuancheng_hecheng2 || this.chuancheng_uplevel2 || this.chuancheng_fen || this.chuancheng_uplevel1 || this.chuancheng_hecheng1;
        }
        protected $chuancheng_uplevel1: number = 0;
        public get chuancheng_uplevel1() {
            return this.$chuancheng_uplevel1;
        }
        public set chuancheng_uplevel1(val: number) {
            this.$chuancheng_uplevel1 = val;
            this.shenqi_chuancheng = this.aomi_uplevel1 || this.aomi_uplevel2 || this.chuancheng_hecheng2 || this.chuancheng_uplevel2 || this.chuancheng_fen || this.chuancheng_uplevel1 || this.chuancheng_hecheng1;
        }
        protected $chuancheng_hecheng1: number = 0;
        public get chuancheng_hecheng1() {
            return this.$chuancheng_hecheng1;
        }
        public set chuancheng_hecheng1(val: number) {
            this.$chuancheng_hecheng1 = val;
            this.shenqi_chuancheng = this.aomi_uplevel1 || this.aomi_uplevel2 || this.chuancheng_hecheng2 || this.chuancheng_uplevel2 || this.chuancheng_fen || this.chuancheng_uplevel1 || this.chuancheng_hecheng1;
        }
        protected $shenzhuang_uplevel7: number = 0;
        public get shenzhuang_uplevel7() {
            return this.$shenzhuang_uplevel7;
        }
        public set shenzhuang_uplevel7(val: number) {
            this.$shenzhuang_uplevel7 = val;
            this.shenqi_shenzhuang = this.shenzhuang_uplevel7 || this.shenzhuang_uplevel8 || this.shenzhuang_uplevel3 || this.shenzhuang_uplevel2 || this.shenzhuang_uplevel1 || this.shenzhuang_uplevel4 || this.shenzhuang_uplevel5 || this.shenzhuang_uplevel6;
        }
        protected $shenzhuang_uplevel8: number = 0;
        public get shenzhuang_uplevel8() {
            return this.$shenzhuang_uplevel8;
        }
        public set shenzhuang_uplevel8(val: number) {
            this.$shenzhuang_uplevel8 = val;
            this.shenqi_shenzhuang = this.shenzhuang_uplevel7 || this.shenzhuang_uplevel8 || this.shenzhuang_uplevel3 || this.shenzhuang_uplevel2 || this.shenzhuang_uplevel1 || this.shenzhuang_uplevel4 || this.shenzhuang_uplevel5 || this.shenzhuang_uplevel6;
        }
        protected $shenzhuang_uplevel3: number = 0;
        public get shenzhuang_uplevel3() {
            return this.$shenzhuang_uplevel3;
        }
        public set shenzhuang_uplevel3(val: number) {
            this.$shenzhuang_uplevel3 = val;
            this.shenqi_shenzhuang = this.shenzhuang_uplevel7 || this.shenzhuang_uplevel8 || this.shenzhuang_uplevel3 || this.shenzhuang_uplevel2 || this.shenzhuang_uplevel1 || this.shenzhuang_uplevel4 || this.shenzhuang_uplevel5 || this.shenzhuang_uplevel6;
        }
        protected $shenzhuang_uplevel2: number = 0;
        public get shenzhuang_uplevel2() {
            return this.$shenzhuang_uplevel2;
        }
        public set shenzhuang_uplevel2(val: number) {
            this.$shenzhuang_uplevel2 = val;
            this.shenqi_shenzhuang = this.shenzhuang_uplevel7 || this.shenzhuang_uplevel8 || this.shenzhuang_uplevel3 || this.shenzhuang_uplevel2 || this.shenzhuang_uplevel1 || this.shenzhuang_uplevel4 || this.shenzhuang_uplevel5 || this.shenzhuang_uplevel6;
        }
        protected $shenzhuang_uplevel1: number = 0;
        public get shenzhuang_uplevel1() {
            return this.$shenzhuang_uplevel1;
        }
        public set shenzhuang_uplevel1(val: number) {
            this.$shenzhuang_uplevel1 = val;
            this.shenqi_shenzhuang = this.shenzhuang_uplevel7 || this.shenzhuang_uplevel8 || this.shenzhuang_uplevel3 || this.shenzhuang_uplevel2 || this.shenzhuang_uplevel1 || this.shenzhuang_uplevel4 || this.shenzhuang_uplevel5 || this.shenzhuang_uplevel6;
        }
        protected $shenzhuang_uplevel4: number = 0;
        public get shenzhuang_uplevel4() {
            return this.$shenzhuang_uplevel4;
        }
        public set shenzhuang_uplevel4(val: number) {
            this.$shenzhuang_uplevel4 = val;
            this.shenqi_shenzhuang = this.shenzhuang_uplevel7 || this.shenzhuang_uplevel8 || this.shenzhuang_uplevel3 || this.shenzhuang_uplevel2 || this.shenzhuang_uplevel1 || this.shenzhuang_uplevel4 || this.shenzhuang_uplevel5 || this.shenzhuang_uplevel6;
        }
        protected $shenzhuang_uplevel5: number = 0;
        public get shenzhuang_uplevel5() {
            return this.$shenzhuang_uplevel5;
        }
        public set shenzhuang_uplevel5(val: number) {
            this.$shenzhuang_uplevel5 = val;
            this.shenqi_shenzhuang = this.shenzhuang_uplevel7 || this.shenzhuang_uplevel8 || this.shenzhuang_uplevel3 || this.shenzhuang_uplevel2 || this.shenzhuang_uplevel1 || this.shenzhuang_uplevel4 || this.shenzhuang_uplevel5 || this.shenzhuang_uplevel6;
        }
        protected $shenzhuang_uplevel6: number = 0;
        public get shenzhuang_uplevel6() {
            return this.$shenzhuang_uplevel6;
        }
        public set shenzhuang_uplevel6(val: number) {
            this.$shenzhuang_uplevel6 = val;
            this.shenqi_shenzhuang = this.shenzhuang_uplevel7 || this.shenzhuang_uplevel8 || this.shenzhuang_uplevel3 || this.shenzhuang_uplevel2 || this.shenzhuang_uplevel1 || this.shenzhuang_uplevel4 || this.shenzhuang_uplevel5 || this.shenzhuang_uplevel6;
        }
        protected $evolve_exp: number = 0;
        public get evolve_exp() {
            return this.$evolve_exp;
        }
        public set evolve_exp(val: number) {
            this.$evolve_exp = val;
            this.char_evolve = this.evolve_exp || this.evolve_helper || this.evolve_up || this.evolve_mat2 || this.evolve_mat1;
        }
        protected $evolve_helper: number = 0;
        public get evolve_helper() {
            return this.$evolve_helper;
        }
        public set evolve_helper(val: number) {
            this.$evolve_helper = val;
            this.char_evolve = this.evolve_exp || this.evolve_helper || this.evolve_up || this.evolve_mat2 || this.evolve_mat1;
        }
        protected $evolve_up: number = 0;
        public get evolve_up() {
            return this.$evolve_up;
        }
        public set evolve_up(val: number) {
            this.$evolve_up = val;
            this.char_evolve = this.evolve_exp || this.evolve_helper || this.evolve_up || this.evolve_mat2 || this.evolve_mat1;
        }
        protected $evolve_mat2: number = 0;
        public get evolve_mat2() {
            return this.$evolve_mat2;
        }
        public set evolve_mat2(val: number) {
            this.$evolve_mat2 = val;
            this.char_evolve = this.evolve_exp || this.evolve_helper || this.evolve_up || this.evolve_mat2 || this.evolve_mat1;
        }
        protected $evolve_mat1: number = 0;
        public get evolve_mat1() {
            return this.$evolve_mat1;
        }
        public set evolve_mat1(val: number) {
            this.$evolve_mat1 = val;
            this.char_evolve = this.evolve_exp || this.evolve_helper || this.evolve_up || this.evolve_mat2 || this.evolve_mat1;
        }
        protected $wing_zizhi: number = 0;
        public get wing_zizhi() {
            return this.$wing_zizhi;
        }
        public set wing_zizhi(val: number) {
            this.$wing_zizhi = val;
            this.char_wing = this.wing_zizhi || this.wing_skillup || this.wing_up || this.wing_god || this.wing_active || this.wing_cifu;
        }
        protected $wing_skillup: number = 0;
        public get wing_skillup() {
            return this.$wing_skillup;
        }
        public set wing_skillup(val: number) {
            this.$wing_skillup = val;
            this.char_wing = this.wing_zizhi || this.wing_skillup || this.wing_up || this.wing_god || this.wing_active || this.wing_cifu;
        }
        protected $wing_up: number = 0;
        public get wing_up() {
            return this.$wing_up;
        }
        public set wing_up(val: number) {
            this.$wing_up = val;
            this.char_wing = this.wing_zizhi || this.wing_skillup || this.wing_up || this.wing_god || this.wing_active || this.wing_cifu;
        }
        protected $wing_god: number = 0;
        public get wing_god() {
            return this.$wing_god;
        }
        public set wing_god(val: number) {
            this.$wing_god = val;
            this.char_wing = this.wing_zizhi || this.wing_skillup || this.wing_up || this.wing_god || this.wing_active || this.wing_cifu;
        }
        protected $wing_active: number = 0;
        public get wing_active() {
            return this.$wing_active;
        }
        public set wing_active(val: number) {
            this.$wing_active = val;
            this.char_wing = this.wing_zizhi || this.wing_skillup || this.wing_up || this.wing_god || this.wing_active || this.wing_cifu;
        }
        protected $wing_cifu: number = 0;
        public get wing_cifu() {
            return this.$wing_cifu;
        }
        public set wing_cifu(val: number) {
            this.$wing_cifu = val;
            this.char_wing = this.wing_zizhi || this.wing_skillup || this.wing_up || this.wing_god || this.wing_active || this.wing_cifu;
        }
        protected $wing_zizhi_up: number = 0;
        public get wing_zizhi_up() {
            return this.$wing_zizhi_up;
        }
        public set wing_zizhi_up(val: number) {
            this.$wing_zizhi_up = val;
            this.wing_zizhi = this.wing_zizhi_up;
        }
        protected $wing_god_refine: number = 0;
        public get wing_god_refine() {
            return this.$wing_god_refine;
        }
        public set wing_god_refine(val: number) {
            this.$wing_god_refine = val;
            this.wing_god = this.wing_god_refine || this.wing_god_comp || this.wing_god_equip;
        }
        protected $wing_god_comp: number = 0;
        public get wing_god_comp() {
            return this.$wing_god_comp;
        }
        public set wing_god_comp(val: number) {
            this.$wing_god_comp = val;
            this.wing_god = this.wing_god_refine || this.wing_god_comp || this.wing_god_equip;
        }
        protected $wing_god_equip: number = 0;
        public get wing_god_equip() {
            return this.$wing_god_equip;
        }
        public set wing_god_equip(val: number) {
            this.$wing_god_equip = val;
            this.wing_god = this.wing_god_refine || this.wing_god_comp || this.wing_god_equip;
        }
        protected $wing_god_refine_up: number = 0;
        public get wing_god_refine_up() {
            return this.$wing_god_refine_up;
        }
        public set wing_god_refine_up(val: number) {
            this.$wing_god_refine_up = val;
            this.wing_god_refine = this.wing_god_refine_up;
        }
        protected $wing_god_comp_add: number = 0;
        public get wing_god_comp_add() {
            return this.$wing_god_comp_add;
        }
        public set wing_god_comp_add(val: number) {
            this.$wing_god_comp_add = val;
            this.wing_god_comp = this.wing_god_comp_add;
        }
        protected $wing_god_equip_add: number = 0;
        public get wing_god_equip_add() {
            return this.$wing_god_equip_add;
        }
        public set wing_god_equip_add(val: number) {
            this.$wing_god_equip_add = val;
            this.wing_god_equip = this.wing_god_equip_add || this.wing_god_equip_comp;
        }
        protected $wing_god_equip_comp: number = 0;
        public get wing_god_equip_comp() {
            return this.$wing_god_equip_comp;
        }
        public set wing_god_equip_comp(val: number) {
            this.$wing_god_equip_comp = val;
            this.wing_god_equip = this.wing_god_equip_add || this.wing_god_equip_comp;
        }
        protected $wing_cifu_up: number = 0;
        public get wing_cifu_up() {
            return this.$wing_cifu_up;
        }
        public set wing_cifu_up(val: number) {
            this.$wing_cifu_up = val;
            this.wing_cifu = this.wing_cifu_up;
        }
        protected $fuwen_exchange: number = 0;
        public get fuwen_exchange() {
            return this.$fuwen_exchange;
        }
        public set fuwen_exchange(val: number) {
            this.$fuwen_exchange = val;
            this.char_converg = this.fuwen_exchange || this.fuwen_active || this.fuwen_open || this.fuwen_fenjie;
        }
        protected $fuwen_active: number = 0;
        public get fuwen_active() {
            return this.$fuwen_active;
        }
        public set fuwen_active(val: number) {
            this.$fuwen_active = val;
            this.char_converg = this.fuwen_exchange || this.fuwen_active || this.fuwen_open || this.fuwen_fenjie;
        }
        protected $fuwen_open: number = 0;
        public get fuwen_open() {
            return this.$fuwen_open;
        }
        public set fuwen_open(val: number) {
            this.$fuwen_open = val;
            this.char_converg = this.fuwen_exchange || this.fuwen_active || this.fuwen_open || this.fuwen_fenjie;
        }
        protected $fuwen_fenjie: number = 0;
        public get fuwen_fenjie() {
            return this.$fuwen_fenjie;
        }
        public set fuwen_fenjie(val: number) {
            this.$fuwen_fenjie = val;
            this.char_converg = this.fuwen_exchange || this.fuwen_active || this.fuwen_open || this.fuwen_fenjie;
        }
        protected $fuwen_exchange4: number = 0;
        public get fuwen_exchange4() {
            return this.$fuwen_exchange4;
        }
        public set fuwen_exchange4(val: number) {
            this.$fuwen_exchange4 = val;
            this.fuwen_exchange = this.fuwen_exchange4 || this.fuwen_exchange6 || this.fuwen_exchange2 || this.fuwen_exchange1 || this.fuwen_exchange7 || this.fuwen_exchange3 || this.fuwen_exchange5;
        }
        protected $fuwen_exchange6: number = 0;
        public get fuwen_exchange6() {
            return this.$fuwen_exchange6;
        }
        public set fuwen_exchange6(val: number) {
            this.$fuwen_exchange6 = val;
            this.fuwen_exchange = this.fuwen_exchange4 || this.fuwen_exchange6 || this.fuwen_exchange2 || this.fuwen_exchange1 || this.fuwen_exchange7 || this.fuwen_exchange3 || this.fuwen_exchange5;
        }
        protected $fuwen_exchange2: number = 0;
        public get fuwen_exchange2() {
            return this.$fuwen_exchange2;
        }
        public set fuwen_exchange2(val: number) {
            this.$fuwen_exchange2 = val;
            this.fuwen_exchange = this.fuwen_exchange4 || this.fuwen_exchange6 || this.fuwen_exchange2 || this.fuwen_exchange1 || this.fuwen_exchange7 || this.fuwen_exchange3 || this.fuwen_exchange5;
        }
        protected $fuwen_exchange1: number = 0;
        public get fuwen_exchange1() {
            return this.$fuwen_exchange1;
        }
        public set fuwen_exchange1(val: number) {
            this.$fuwen_exchange1 = val;
            this.fuwen_exchange = this.fuwen_exchange4 || this.fuwen_exchange6 || this.fuwen_exchange2 || this.fuwen_exchange1 || this.fuwen_exchange7 || this.fuwen_exchange3 || this.fuwen_exchange5;
        }
        protected $fuwen_exchange7: number = 0;
        public get fuwen_exchange7() {
            return this.$fuwen_exchange7;
        }
        public set fuwen_exchange7(val: number) {
            this.$fuwen_exchange7 = val;
            this.fuwen_exchange = this.fuwen_exchange4 || this.fuwen_exchange6 || this.fuwen_exchange2 || this.fuwen_exchange1 || this.fuwen_exchange7 || this.fuwen_exchange3 || this.fuwen_exchange5;
        }
        protected $fuwen_exchange3: number = 0;
        public get fuwen_exchange3() {
            return this.$fuwen_exchange3;
        }
        public set fuwen_exchange3(val: number) {
            this.$fuwen_exchange3 = val;
            this.fuwen_exchange = this.fuwen_exchange4 || this.fuwen_exchange6 || this.fuwen_exchange2 || this.fuwen_exchange1 || this.fuwen_exchange7 || this.fuwen_exchange3 || this.fuwen_exchange5;
        }
        protected $fuwen_exchange5: number = 0;
        public get fuwen_exchange5() {
            return this.$fuwen_exchange5;
        }
        public set fuwen_exchange5(val: number) {
            this.$fuwen_exchange5 = val;
            this.fuwen_exchange = this.fuwen_exchange4 || this.fuwen_exchange6 || this.fuwen_exchange2 || this.fuwen_exchange1 || this.fuwen_exchange7 || this.fuwen_exchange3 || this.fuwen_exchange5;
        }
        protected $task_tab_5: number = 0;
        public get task_tab_5() {
            return this.$task_tab_5;
        }
        public set task_tab_5(val: number) {
            this.$task_tab_5 = val;
            this.task = this.task_tab_5 || this.task_tab_1 || this.task_tab_4 || this.task_tab_2 || this.task_tab_3;
        }
        protected $task_tab_1: number = 0;
        public get task_tab_1() {
            return this.$task_tab_1;
        }
        public set task_tab_1(val: number) {
            this.$task_tab_1 = val;
            this.task = this.task_tab_5 || this.task_tab_1 || this.task_tab_4 || this.task_tab_2 || this.task_tab_3;
        }
        protected $task_tab_4: number = 0;
        public get task_tab_4() {
            return this.$task_tab_4;
        }
        public set task_tab_4(val: number) {
            this.$task_tab_4 = val;
            this.task = this.task_tab_5 || this.task_tab_1 || this.task_tab_4 || this.task_tab_2 || this.task_tab_3;
        }
        protected $task_tab_2: number = 0;
        public get task_tab_2() {
            return this.$task_tab_2;
        }
        public set task_tab_2(val: number) {
            this.$task_tab_2 = val;
            this.task = this.task_tab_5 || this.task_tab_1 || this.task_tab_4 || this.task_tab_2 || this.task_tab_3;
        }
        protected $task_tab_3: number = 0;
        public get task_tab_3() {
            return this.$task_tab_3;
        }
        public set task_tab_3(val: number) {
            this.$task_tab_3 = val;
            this.task = this.task_tab_5 || this.task_tab_1 || this.task_tab_4 || this.task_tab_2 || this.task_tab_3;
        }
        protected $invitationgiftred: number = 0;
        public get invitationgiftred() {
            return this.$invitationgiftred;
        }
        public set invitationgiftred(val: number) {
            this.$invitationgiftred = val;
            this.invitationgift = this.invitationgiftred;
        }
        protected $enshrinered: number = 0;
        public get enshrinered() {
            return this.$enshrinered;
        }
        public set enshrinered(val: number) {
            this.$enshrinered = val;
            this.enshrine = this.enshrinered;
        }
        protected $limit_occupy: number = 0;
        public get limit_occupy() {
            return this.$limit_occupy;
        }
        public set limit_occupy(val: number) {
            this.$limit_occupy = val;
            this.limitact = this.limit_occupy || this.limit_bosscity || this.limit_pollybeat || this.limit_pollycarnival || this.limit_wildpk;
        }
        protected $limit_bosscity: number = 0;
        public get limit_bosscity() {
            return this.$limit_bosscity;
        }
        public set limit_bosscity(val: number) {
            this.$limit_bosscity = val;
            this.limitact = this.limit_occupy || this.limit_bosscity || this.limit_pollybeat || this.limit_pollycarnival || this.limit_wildpk;
        }
        protected $limit_pollybeat: number = 0;
        public get limit_pollybeat() {
            return this.$limit_pollybeat;
        }
        public set limit_pollybeat(val: number) {
            this.$limit_pollybeat = val;
            this.limitact = this.limit_occupy || this.limit_bosscity || this.limit_pollybeat || this.limit_pollycarnival || this.limit_wildpk;
        }
        protected $limit_pollycarnival: number = 0;
        public get limit_pollycarnival() {
            return this.$limit_pollycarnival;
        }
        public set limit_pollycarnival(val: number) {
            this.$limit_pollycarnival = val;
            this.limitact = this.limit_occupy || this.limit_bosscity || this.limit_pollybeat || this.limit_pollycarnival || this.limit_wildpk;
        }
        protected $limit_wildpk: number = 0;
        public get limit_wildpk() {
            return this.$limit_wildpk;
        }
        public set limit_wildpk(val: number) {
            this.$limit_wildpk = val;
            this.limitact = this.limit_occupy || this.limit_bosscity || this.limit_pollybeat || this.limit_pollycarnival || this.limit_wildpk;
        }
        protected $bag_zw_use: number = 0;
        public get bag_zw_use() {
            return this.$bag_zw_use;
        }
        public set bag_zw_use(val: number) {
            this.$bag_zw_use = val;
            this.bag = this.bag_zw_use || this.bag_item_use;
        }
        protected $bag_item_use: number = 0;
        public get bag_item_use() {
            return this.$bag_item_use;
        }
        public set bag_item_use(val: number) {
            this.$bag_item_use = val;
            this.bag = this.bag_zw_use || this.bag_item_use;
        }
        protected $luckyCardItem: number = 0;
        public get luckyCardItem() {
            return this.$luckyCardItem;
        }
        public set luckyCardItem(val: number) {
            this.$luckyCardItem = val;
            this.luckycard = this.luckyCardItem;
        }
        protected $skill_role: number = 0;
        public get skill_role() {
            return this.$skill_role;
        }
        public set skill_role(val: number) {
            this.$skill_role = val;
            this.skill = this.skill_role;
        }
        protected $achi_tab_7: number = 0;
        public get achi_tab_7() {
            return this.$achi_tab_7;
        }
        public set achi_tab_7(val: number) {
            this.$achi_tab_7 = val;
            this.achievement = this.achi_tab_7 || this.achi_tab_8 || this.achi_tab_1 || this.achi_tab_6 || this.achi_tab_5 || this.achi_tab_4 || this.achi_tab_3 || this.achi_tab_2;
        }
        protected $achi_tab_8: number = 0;
        public get achi_tab_8() {
            return this.$achi_tab_8;
        }
        public set achi_tab_8(val: number) {
            this.$achi_tab_8 = val;
            this.achievement = this.achi_tab_7 || this.achi_tab_8 || this.achi_tab_1 || this.achi_tab_6 || this.achi_tab_5 || this.achi_tab_4 || this.achi_tab_3 || this.achi_tab_2;
        }
        protected $achi_tab_1: number = 0;
        public get achi_tab_1() {
            return this.$achi_tab_1;
        }
        public set achi_tab_1(val: number) {
            this.$achi_tab_1 = val;
            this.achievement = this.achi_tab_7 || this.achi_tab_8 || this.achi_tab_1 || this.achi_tab_6 || this.achi_tab_5 || this.achi_tab_4 || this.achi_tab_3 || this.achi_tab_2;
        }
        protected $achi_tab_6: number = 0;
        public get achi_tab_6() {
            return this.$achi_tab_6;
        }
        public set achi_tab_6(val: number) {
            this.$achi_tab_6 = val;
            this.achievement = this.achi_tab_7 || this.achi_tab_8 || this.achi_tab_1 || this.achi_tab_6 || this.achi_tab_5 || this.achi_tab_4 || this.achi_tab_3 || this.achi_tab_2;
        }
        protected $achi_tab_5: number = 0;
        public get achi_tab_5() {
            return this.$achi_tab_5;
        }
        public set achi_tab_5(val: number) {
            this.$achi_tab_5 = val;
            this.achievement = this.achi_tab_7 || this.achi_tab_8 || this.achi_tab_1 || this.achi_tab_6 || this.achi_tab_5 || this.achi_tab_4 || this.achi_tab_3 || this.achi_tab_2;
        }
        protected $achi_tab_4: number = 0;
        public get achi_tab_4() {
            return this.$achi_tab_4;
        }
        public set achi_tab_4(val: number) {
            this.$achi_tab_4 = val;
            this.achievement = this.achi_tab_7 || this.achi_tab_8 || this.achi_tab_1 || this.achi_tab_6 || this.achi_tab_5 || this.achi_tab_4 || this.achi_tab_3 || this.achi_tab_2;
        }
        protected $achi_tab_3: number = 0;
        public get achi_tab_3() {
            return this.$achi_tab_3;
        }
        public set achi_tab_3(val: number) {
            this.$achi_tab_3 = val;
            this.achievement = this.achi_tab_7 || this.achi_tab_8 || this.achi_tab_1 || this.achi_tab_6 || this.achi_tab_5 || this.achi_tab_4 || this.achi_tab_3 || this.achi_tab_2;
        }
        protected $achi_tab_2: number = 0;
        public get achi_tab_2() {
            return this.$achi_tab_2;
        }
        public set achi_tab_2(val: number) {
            this.$achi_tab_2 = val;
            this.achievement = this.achi_tab_7 || this.achi_tab_8 || this.achi_tab_1 || this.achi_tab_6 || this.achi_tab_5 || this.achi_tab_4 || this.achi_tab_3 || this.achi_tab_2;
        }
        protected $UnionBattleField: number = 0;
        public get UnionBattleField() {
            return this.$UnionBattleField;
        }
        public set UnionBattleField(val: number) {
            this.$UnionBattleField = val;
            this.union = this.UnionBattleField || this.Union_WarFight || this.UnionShop || this.Union_WorldPrice || this.UnionBaseHall || this.UnionYiwangzhidi || this.UnionShenYu || this.Union_ShenyuHeadPoint || this.UnionShop_Signbuy;
        }
        protected $Union_WarFight: number = 0;
        public get Union_WarFight() {
            return this.$Union_WarFight;
        }
        public set Union_WarFight(val: number) {
            this.$Union_WarFight = val;
            this.union = this.UnionBattleField || this.Union_WarFight || this.UnionShop || this.Union_WorldPrice || this.UnionBaseHall || this.UnionYiwangzhidi || this.UnionShenYu || this.Union_ShenyuHeadPoint || this.UnionShop_Signbuy;
        }
        protected $UnionShop: number = 0;
        public get UnionShop() {
            return this.$UnionShop;
        }
        public set UnionShop(val: number) {
            this.$UnionShop = val;
            this.union = this.UnionBattleField || this.Union_WarFight || this.UnionShop || this.Union_WorldPrice || this.UnionBaseHall || this.UnionYiwangzhidi || this.UnionShenYu || this.Union_ShenyuHeadPoint || this.UnionShop_Signbuy;
        }
        protected $Union_WorldPrice: number = 0;
        public get Union_WorldPrice() {
            return this.$Union_WorldPrice;
        }
        public set Union_WorldPrice(val: number) {
            this.$Union_WorldPrice = val;
            this.union = this.UnionBattleField || this.Union_WarFight || this.UnionShop || this.Union_WorldPrice || this.UnionBaseHall || this.UnionYiwangzhidi || this.UnionShenYu || this.Union_ShenyuHeadPoint || this.UnionShop_Signbuy;
        }
        protected $UnionBaseHall: number = 0;
        public get UnionBaseHall() {
            return this.$UnionBaseHall;
        }
        public set UnionBaseHall(val: number) {
            this.$UnionBaseHall = val;
            this.union = this.UnionBattleField || this.Union_WarFight || this.UnionShop || this.Union_WorldPrice || this.UnionBaseHall || this.UnionYiwangzhidi || this.UnionShenYu || this.Union_ShenyuHeadPoint || this.UnionShop_Signbuy;
        }
        protected $UnionYiwangzhidi: number = 0;
        public get UnionYiwangzhidi() {
            return this.$UnionYiwangzhidi;
        }
        public set UnionYiwangzhidi(val: number) {
            this.$UnionYiwangzhidi = val;
            this.union = this.UnionBattleField || this.Union_WarFight || this.UnionShop || this.Union_WorldPrice || this.UnionBaseHall || this.UnionYiwangzhidi || this.UnionShenYu || this.Union_ShenyuHeadPoint || this.UnionShop_Signbuy;
        }
        protected $UnionShenYu: number = 0;
        public get UnionShenYu() {
            return this.$UnionShenYu;
        }
        public set UnionShenYu(val: number) {
            this.$UnionShenYu = val;
            this.union = this.UnionBattleField || this.Union_WarFight || this.UnionShop || this.Union_WorldPrice || this.UnionBaseHall || this.UnionYiwangzhidi || this.UnionShenYu || this.Union_ShenyuHeadPoint || this.UnionShop_Signbuy;
        }
        protected $Union_ShenyuHeadPoint: number = 0;
        public get Union_ShenyuHeadPoint() {
            return this.$Union_ShenyuHeadPoint;
        }
        public set Union_ShenyuHeadPoint(val: number) {
            this.$Union_ShenyuHeadPoint = val;
            this.union = this.UnionBattleField || this.Union_WarFight || this.UnionShop || this.Union_WorldPrice || this.UnionBaseHall || this.UnionYiwangzhidi || this.UnionShenYu || this.Union_ShenyuHeadPoint || this.UnionShop_Signbuy;
        }
        protected $UnionShop_Signbuy: number = 0;
        public get UnionShop_Signbuy() {
            return this.$UnionShop_Signbuy;
        }
        public set UnionShop_Signbuy(val: number) {
            this.$UnionShop_Signbuy = val;
            this.union = this.UnionBattleField || this.Union_WarFight || this.UnionShop || this.Union_WorldPrice || this.UnionBaseHall || this.UnionYiwangzhidi || this.UnionShenYu || this.Union_ShenyuHeadPoint || this.UnionShop_Signbuy;
        }
        protected $UnionBase_Person: number = 0;
        public get UnionBase_Person() {
            return this.$UnionBase_Person;
        }
        public set UnionBase_Person(val: number) {
            this.$UnionBase_Person = val;
            this.UnionBaseHall = this.UnionBase_Person || this.UnonnBase_BuildLevelUp;
        }
        protected $UnonnBase_BuildLevelUp: number = 0;
        public get UnonnBase_BuildLevelUp() {
            return this.$UnonnBase_BuildLevelUp;
        }
        public set UnonnBase_BuildLevelUp(val: number) {
            this.$UnonnBase_BuildLevelUp = val;
            this.UnionBaseHall = this.UnionBase_Person || this.UnonnBase_BuildLevelUp;
        }
        protected $UnionyiwangzhidiBoss: number = 0;
        public get UnionyiwangzhidiBoss() {
            return this.$UnionyiwangzhidiBoss;
        }
        public set UnionyiwangzhidiBoss(val: number) {
            this.$UnionyiwangzhidiBoss = val;
            this.UnionYiwangzhidi = this.UnionyiwangzhidiBoss || this.Unionyiwang_shengyu;
        }
        protected $Unionyiwang_shengyu: number = 0;
        public get Unionyiwang_shengyu() {
            return this.$Unionyiwang_shengyu;
        }
        public set Unionyiwang_shengyu(val: number) {
            this.$Unionyiwang_shengyu = val;
            this.UnionYiwangzhidi = this.UnionyiwangzhidiBoss || this.Unionyiwang_shengyu;
        }
        protected $UnionOld_Tree: number = 0;
        public get UnionOld_Tree() {
            return this.$UnionOld_Tree;
        }
        public set UnionOld_Tree(val: number) {
            this.$UnionOld_Tree = val;
            this.UnionShenYu = this.UnionOld_Tree || this.UnionOldShen_Boss || this.UnionShen_yu;
        }
        protected $UnionOldShen_Boss: number = 0;
        public get UnionOldShen_Boss() {
            return this.$UnionOldShen_Boss;
        }
        public set UnionOldShen_Boss(val: number) {
            this.$UnionOldShen_Boss = val;
            this.UnionShenYu = this.UnionOld_Tree || this.UnionOldShen_Boss || this.UnionShen_yu;
        }
        protected $UnionShen_yu: number = 0;
        public get UnionShen_yu() {
            return this.$UnionShen_yu;
        }
        public set UnionShen_yu(val: number) {
            this.$UnionShen_yu = val;
            this.UnionShenYu = this.UnionOld_Tree || this.UnionOldShen_Boss || this.UnionShen_yu;
        }
        protected $activity109: number = 0;
        public get activity109() {
            return this.$activity109;
        }
        public set activity109(val: number) {
            this.$activity109 = val;
            this.activity_fuli = this.activity109 || this.activity110 || this.activity509 || this.activity510 || this.activity610;
        }
        protected $activity509: number = 0;
        public get activity509() {
            return this.$activity509;
        }
        public set activity509(val: number) {
            this.$activity509 = val;
            this.activity_fuli = this.activity109 || this.activity110 || this.activity802 || this.activity509 || this.activity610;
        }
        protected $activity802: number = 0;
        public get activity802() {
            return this.$activity802;
        }
        public set activity802(val: number) {
            this.$activity802 = val;
            this.activity_fuli = this.activity109 || this.activity110 || this.activity802 || this.activity509 || this.activity610;
        }
        protected $activity703: number = 0;
        public get activity703() {
            return this.$activity703;
        }
        public set activity703(val: number) {
            this.$activity703 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity610: number = 0;
        public get activity610() {
            return this.$activity610;
        }
        public set activity610(val: number) {
            this.$activity610 = val;
            this.activity_fuli = this.activity109 || this.activity110 || this.activity509 || this.activity510 || this.activity610;
        }
        protected $activity102: number = 0;
        public get activity102() {
            return this.$activity102;
        }
        public set activity102(val: number) {
            this.$activity102 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity405: number = 0;
        public get activity405() {
            return this.$activity405;
        }
        public set activity405(val: number) {
            this.$activity405 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $vip: number = 0;
        public get vip() {
            return this.$vip;
        }
        public set vip(val: number) {
            this.$vip = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity525: number = 0;
        public get activity525() {
            return this.$activity525;
        }
        public set activity525(val: number) {
            this.$activity525 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity527: number = 0;
        public get activity527() {
            return this.$activity527;
        }
        public set activity527(val: number) {
            this.$activity527 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity104: number = 0;
        public get activity104() {
            return this.$activity104;
        }
        public set activity104(val: number) {
            this.$activity104 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity706: number = 0;
        public get activity706() {
            return this.$activity706;
        }
        public set activity706(val: number) {
            this.$activity706 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity404: number = 0;
        public get activity404() {
            return this.$activity404;
        }
        public set activity404(val: number) {
            this.$activity404 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity0: number = 0;
        public get activity0() {
            return this.$activity0;
        }
        public set activity0(val: number) {
            this.$activity0 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity308: number = 0;
        public get activity308() {
            return this.$activity308;
        }
        public set activity308(val: number) {
            this.$activity308 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity112: number = 0;
        public get activity112() {
            return this.$activity112;
        }
        public set activity112(val: number) {
            this.$activity112 = val;
            this.activity_kfqd = this.activity112 || this.activity103;
        }
        protected $activity107: number = 0;
        public get activity107() {
            return this.$activity107;
        }
        public set activity107(val: number) {
            this.$activity107 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity110: number = 0;
        public get activity110() {
            return this.$activity110;
        }
        public set activity110(val: number) {
            this.$activity110 = val;
            this.activity_fuli = this.activity109 || this.activity110 || this.activity802 || this.activity509 || this.activity610;
        }
        protected $activity510: number = 0;
        public get activity510() {
            return this.$activity510;
        }
        public set activity510(val: number) {
            this.$activity510 = val;
            this.activity_fuli = this.activity109 || this.activity510 || this.activity610;
        }
        protected $activity111: number = 0;
        public get activity111() {
            return this.$activity111;
        }
        public set activity111(val: number) {
            this.$activity111 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity406: number = 0;
        public get activity406() {
            return this.$activity406;
        }
        public set activity406(val: number) {
            this.$activity406 = val;
            this.activity = this.activity102 || this.activity405 || this.activity525 || this.activity527 || this.activity404 || this.activity0 || this.activity308 || this.activity107 || this.activity111 || this.activity706 || this.activity406 || this.activity703 || this.activity104;
        }
        protected $activity103: number = 0;
        public get activity103() {
            return this.$activity103;
        }
        public set activity103(val: number) {
            this.$activity103 = val;
            this.activity_kfqd = this.activity112 || this.activity103;
        }
        protected $activity701: number = 0;
        public get activity701() {
            return this.$activity701;
        }
        public set activity701(val: number) {
            this.$activity701 = val;
        }
        protected $activity113: number = 0;
        public get activity113() {
            return this.$activity113;
        }
        public set activity113(val: number) {
            this.$activity113 = val;
        }
        protected $activity801: number = 0;
        public get activity801() {
            return this.$activity801;
        }
        public set activity801(val: number) {
            this.$activity801 = val;
        }
        protected $mainmDGenu_role: number = 0;
        public get mainmDGenu_role() {
            return this.$mainmDGenu_role;
        }
        public set mainmDGenu_role(val: number) {
            this.$mainmDGenu_role = val;
            this.main = this.mainmDGenu_role;
        }
        protected $glory: number = 0;
        public get glory() {
            return this.$glory;
        }
        public set glory(val: number) {
            this.$glory = val;
            this.experience = this.glory || this.handbook || this.artifact || this.pray;
        }
        protected $handbook: number = 0;
        public get handbook() {
            return this.$handbook;
        }
        public set handbook(val: number) {
            this.$handbook = val;
            this.experience = this.glory || this.handbook || this.artifact || this.pray;
        }
        protected $pray: number = 0;
        public get pray() {
            return this.$pray;
        }
        public set pray(val: number) {
            this.$pray = val;
            this.experience = this.glory || this.handbook || this.artifact || this.pray;
        }
        protected $medal: number = 0;
        public get medal() {
            return this.$medal;
        }
        public set medal(val: number) {
            this.$medal = val;
        }
        protected $artifact: number = 0;
        public get artifact() {
            return this.$artifact;
        }
        public set artifact(val: number) {
            this.$artifact = val;
            this.experience = this.glory || this.handbook || this.artifact || this.pray;
        }
        protected $glory_equip: number = 0;
        public get glory_equip() {
            return this.$glory_equip;
        }
        public set glory_equip(val: number) {
            this.$glory_equip = val;
            this.glory = this.glory_equip || this.glory_task || this.glory_item;
        }
        protected $glory_task: number = 0;
        public get glory_task() {
            return this.$glory_task;
        }
        public set glory_task(val: number) {
            this.$glory_task = val;
            this.glory = this.glory_equip || this.glory_task || this.glory_item;
        }
        protected $glory_item: number = 0;
        public get glory_item() {
            return this.$glory_item;
        }
        public set glory_item(val: number) {
            this.$glory_item = val;
            this.glory = this.glory_equip || this.glory_task || this.glory_item;
        }
        protected $glory_task_a: number = 0;
        public get glory_task_a() {
            return this.$glory_task_a;
        }
        public set glory_task_a(val: number) {
            this.$glory_task_a = val;
            this.glory_task = this.glory_task_a || this.glory_task_b || this.glory_task_c;
        }
        protected $glory_task_b: number = 0;
        public get glory_task_b() {
            return this.$glory_task_b;
        }
        public set glory_task_b(val: number) {
            this.$glory_task_b = val;
            this.glory_task = this.glory_task_a || this.glory_task_b || this.glory_task_c;
        }
        protected $glory_task_c: number = 0;
        public get glory_task_c() {
            return this.$glory_task_c;
        }
        public set glory_task_c(val: number) {
            this.$glory_task_c = val;
            this.glory_task = this.glory_task_a || this.glory_task_b || this.glory_task_c;
        }
        protected $handbook_tab_2: number = 0;
        public get handbook_tab_2() {
            return this.$handbook_tab_2;
        }
        public set handbook_tab_2(val: number) {
            this.$handbook_tab_2 = val;
            this.handbook = this.handbook_tab_2 || this.handbook_tab_3 || this.handbook_tab_5 || this.handbook_tab_1 || this.handbook_tab_4
                || this.handbook_tab_6 || this.handbook_tab_7 || this.handbook_tab_8 || this.handbook_tab_9;
        }
        protected $handbook_tab_3: number = 0;
        public get handbook_tab_3() {
            return this.$handbook_tab_3;
        }
        public set handbook_tab_3(val: number) {
            this.$handbook_tab_3 = val;
            this.handbook = this.handbook_tab_2 || this.handbook_tab_3 || this.handbook_tab_5 || this.handbook_tab_1 || this.handbook_tab_4
                || this.handbook_tab_6 || this.handbook_tab_7 || this.handbook_tab_8 || this.handbook_tab_9;
        }
        protected $handbook_tab_5: number = 0;
        public get handbook_tab_5() {
            return this.$handbook_tab_5;
        }
        public set handbook_tab_5(val: number) {
            this.$handbook_tab_5 = val;
            this.handbook = this.handbook_tab_2 || this.handbook_tab_3 || this.handbook_tab_5 || this.handbook_tab_1 || this.handbook_tab_4
                || this.handbook_tab_6 || this.handbook_tab_7 || this.handbook_tab_8 || this.handbook_tab_9;
        }
        protected $handbook_tab_1: number = 0;
        public get handbook_tab_1() {
            return this.$handbook_tab_1;
        }
        public set handbook_tab_1(val: number) {
            this.$handbook_tab_1 = val;
            this.handbook = this.handbook_tab_2 || this.handbook_tab_3 || this.handbook_tab_5 || this.handbook_tab_1 || this.handbook_tab_4
                || this.handbook_tab_6 || this.handbook_tab_7 || this.handbook_tab_8 || this.handbook_tab_9;
        }
        protected $handbook_tab_4: number = 0;
        public get handbook_tab_4() {
            return this.$handbook_tab_4;
        }
        public set handbook_tab_4(val: number) {
            this.$handbook_tab_4 = val;
            this.handbook = this.handbook_tab_2 || this.handbook_tab_3 || this.handbook_tab_5 || this.handbook_tab_1 || this.handbook_tab_4
                || this.handbook_tab_6 || this.handbook_tab_7 || this.handbook_tab_8 || this.handbook_tab_9;
        }
        protected $handbook_tab_6: number = 0;
        public get handbook_tab_6() {
            return this.$handbook_tab_6;
        }
        public set handbook_tab_6(val: number) {
            this.$handbook_tab_6 = val;
            this.handbook = this.handbook_tab_2 || this.handbook_tab_3 || this.handbook_tab_5 || this.handbook_tab_1 || this.handbook_tab_4
                || this.handbook_tab_6 || this.handbook_tab_7 || this.handbook_tab_8 || this.handbook_tab_9;
        }
        protected $handbook_tab_7: number = 0;
        public get handbook_tab_7() {
            return this.$handbook_tab_7;
        }
        public set handbook_tab_7(val: number) {
            this.$handbook_tab_7 = val;
            this.handbook = this.handbook_tab_2 || this.handbook_tab_3 || this.handbook_tab_5 || this.handbook_tab_1 || this.handbook_tab_4
                || this.handbook_tab_6 || this.handbook_tab_7 || this.handbook_tab_8 || this.handbook_tab_9;
        }
        protected $handbook_tab_8: number = 0;
        public get handbook_tab_8() {
            return this.$handbook_tab_8;
        }
        public set handbook_tab_8(val: number) {
            this.$handbook_tab_8 = val;
            this.handbook = this.handbook_tab_2 || this.handbook_tab_3 || this.handbook_tab_5 || this.handbook_tab_1 || this.handbook_tab_4
                || this.handbook_tab_6 || this.handbook_tab_7 || this.handbook_tab_8 || this.handbook_tab_9;
        }
        protected $handbook_tab_9: number = 0;
        public get handbook_tab_9() {
            return this.$handbook_tab_9;
        }
        public set handbook_tab_9(val: number) {
            this.$handbook_tab_9 = val;
            this.handbook = this.handbook_tab_2 || this.handbook_tab_3 || this.handbook_tab_5 || this.handbook_tab_1 || this.handbook_tab_4
                || this.handbook_tab_6 || this.handbook_tab_7 || this.handbook_tab_8 || this.handbook_tab_9;
        }
        protected $baowu_doll: number = 0;
        public get baowu_doll() {
            return this.$baowu_doll;
        }
        public set baowu_doll(val: number) {
            this.$baowu_doll = val;
            this.role_baowu = this.baowu_xunzhang || this.baowu_doll || this.wenzhangresove || this.jibanheadRedpoint || this.baowu_jiban || this.baowu_ying || this.baowu_wenzhang;
        }
        protected $baowu_ying: number = 0;
        public get baowu_ying() {
            return this.$baowu_ying;
        }
        public set baowu_ying(val: number) {
            this.$baowu_ying = val;
            this.role_baowu = this.baowu_xunzhang || this.baowu_doll || this.wenzhangresove || this.jibanheadRedpoint || this.baowu_jiban || this.baowu_ying || this.baowu_wenzhang;
        }
        protected $ying_active: number = 0;
        public get ying_active() {
            return this.$ying_active;
        }
        public set ying_active(val: number) {
            this.$ying_active = val;
            this.baowu_ying = this.ying_fen || this.ying_active || this.ying_jiban || this.ying_upLevel || this.ying_star || this.ying_tu;
        }
        protected $ying_tu: number = 0;
        public get ying_tu() {
            return this.$ying_tu;
        }
        public set ying_tu(val: number) {
            this.$ying_tu = val;
            this.baowu_ying = this.ying_fen || this.ying_active || this.ying_jiban || this.ying_upLevel || this.ying_star || this.ying_tu;
        }
        protected $ying_star: number = 0;
        public get ying_star() {
            return this.$ying_star;
        }
        public set ying_star(val: number) {
            this.$ying_star = val;
            this.baowu_ying = this.ying_fen || this.ying_active || this.ying_jiban || this.ying_upLevel || this.ying_star || this.ying_tu;
        }
        protected $ying_jiban: number = 0;
        public get ying_jiban() {
            return this.$ying_jiban;
        }
        public set ying_jiban(val: number) {
            this.$ying_jiban = val;
            this.baowu_ying = this.ying_fen || this.ying_active || this.ying_jiban || this.ying_upLevel || this.ying_star || this.ying_tu;
        }
        protected $ying_upLevel: number = 0;
        public get ying_upLevel() {
            return this.$ying_upLevel;
        }
        public set ying_upLevel(val: number) {
            this.$ying_upLevel = val;
            this.baowu_ying = this.ying_fen || this.ying_active || this.ying_jiban || this.ying_upLevel || this.ying_star || this.ying_tu;
        }
        protected $ying_fen: number = 0;
        public get ying_fen() {
            return this.$ying_fen;
        }
        public set ying_fen(val: number) {
            this.$ying_fen = val;
            this.baowu_ying = this.ying_fen || this.ying_active || this.ying_jiban || this.ying_upLevel || this.ying_star || this.ying_tu;
        }
        protected $doll_fen: number = 0;
        public get doll_fen() {
            return this.$doll_fen;
        }
        public set doll_fen(val: number) {
            this.$doll_fen = val;
            this.baowu_doll = this.doll_fen || this.doll_active || this.doll_uplevel || this.doll_bless || this.doll_upQua || this.doll_gong;
        }
        protected $doll_active: number = 0;
        public get doll_active() {
            return this.$doll_active;
        }
        public set doll_active(val: number) {
            this.$doll_active = val;
            this.baowu_doll = this.doll_fen || this.doll_active || this.doll_uplevel || this.doll_bless || this.doll_upQua || this.doll_gong;
        }
        protected $doll_uplevel: number = 0;
        public get doll_uplevel() {
            return this.$doll_uplevel;
        }
        public set doll_uplevel(val: number) {
            this.$doll_uplevel = val;
            this.baowu_doll = this.doll_fen || this.doll_active || this.doll_uplevel || this.doll_bless || this.doll_upQua || this.doll_gong;
        }
        protected $doll_bless: number = 0;
        public get doll_bless() {
            return this.$doll_bless;
        }
        public set doll_bless(val: number) {
            this.$doll_bless = val;
            this.baowu_doll = this.doll_fen || this.doll_active || this.doll_uplevel || this.doll_bless || this.doll_upQua || this.doll_gong;
        }
        protected $doll_upQua: number = 0;
        public get doll_upQua() {
            return this.$doll_upQua;
        }
        public set doll_upQua(val: number) {
            this.$doll_upQua = val;
            this.baowu_doll = this.doll_fen || this.doll_active || this.doll_uplevel || this.doll_bless || this.doll_upQua || this.doll_gong;
        }
        protected $doll_gong: number = 0;
        public get doll_gong() {
            return this.$doll_gong;
        }
        public set doll_gong(val: number) {
            this.$doll_gong = val;
            this.baowu_doll = this.doll_fen || this.doll_active || this.doll_uplevel || this.doll_bless || this.doll_upQua || this.doll_gong;
        }
        protected $constellation: number = 0;
        public get constellation() {
            return this.$constellation;
        }
        public set constellation(val: number) {
            this.$constellation = val;
        }
        protected $constellation_hero: number = 0;
        public get constellation_hero() {
            return this.$constellation_hero;
        }
        public set constellation_hero(val: number) {
            this.$constellation_hero = val;
            this.constellation = this.constellation_hero;
        }
        protected $adventure_fruit_hero: number = 0;
        public get adventure_fruit_hero() {
            return this.$adventure_fruit_hero;
        }
        public set adventure_fruit_hero(val: number) {
            this.$adventure_fruit_hero = val;
        }
    }
}