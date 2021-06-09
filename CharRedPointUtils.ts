module ro {


    export class CharRedPointUtils {
        public constructor() {
        }

        char() {
            return ro.redpoints.client.char = this.char_converg() || this.char_evolve() || this.char_wing() || this.char_role();
        }
        char_converg() {//
            if (ro.role.hxpdata.Is_ConActivity() == 1) {
                return ro.redpoints.client.char_converg = this.fuwen_fenjie() || this.fuwen_exchange() || this.fuwen_active();
            } else {
                let res = ro.functionIsShow(23) == true && ro.functionIsOpen(23, false) == true ? true : false;
                return ro.redpoints.client.char_converg = res == true ? 1 : 0;
            }
        }
        char_evolve() {//
            return ro.redpoints.client.char_evolve = this.evolve_helper() || this.evolve_exp() || this.evolve_mat1() || this.evolve_mat2() || this.evolve_up();
        }

        char_wing() {//
            return ro.redpoints.client.char_wing = this.wing_active() || this.wing_up() || this.wing_cifu() || this.wing_zizhi() || this.wing_god();
        }


        mibao_active() {//
            return ro.redpoints.client.mibao_active = this.mb_active1() || this.mb_active2() || this.mb_active3() || this.mb_active4() || this.mb_active5() || this.mb_active6();
        }
        mibao_upstar() {//
            return ro.redpoints.client.mibao_upstar = ro.role.mibao.mibao_upstar();
        }
        mibao_shouhu() {
            if(!ro.NEWGAME || !ro.functionIsOpen(173,false)) {
                return 0;
            }
            return ro.role.mibao2.checkPoint(0) || ro.role.mibao2.checkPoint(1) || ro.role.mibao2.checkPoint(2);
        }
        role_mibao() {//
            if (!ro.functionIsOpen(1, false)) {
                return ro.redpoints.client.role_mibao = 0;
            }
            return ro.redpoints.client.role_mibao = this.mibao_active() || this.mibao_rong() || this.mibao_upskill() || this.mibao_upstar() || this.mibao_uplevel() || this.mibao_shouhu();
        }

        evolve_mat2() {//
            let val = 0;
            if (ro.functionIsOpen(24, false) && ro.check_evolve()) {
                let num = ro.item.getItemNum(90000223);
                let count = ro.role.raw.zhuanshengInfo.seniorExpitemUseTimes;
                if (num > 0 && count > 0)
                    val = 1;
            }
            return ro.redpoints.client.evolve_mat2 = val;
        }

        public evolve_exp_flag = false
        evolve_exp() {//
            let val = 0;
            if (ro.functionIsOpen(24, false) && ro.check_evolve() && !this.evolve_exp_flag) {
                if (ro.role.raw.zhuanshengInfo.reduceLvTimes > 0 && ro.role.level > 80)
                    val = 1;
            }
            return ro.redpoints.client.evolve_exp = val;
        }



        evolve_mat1() {//
            let val = 0;
            if (ro.functionIsOpen(24, false) && ro.check_evolve()) {
                let num = ro.item.getItemNum(90000222);
                let count = ro.role.raw.zhuanshengInfo.normalExpitemUseTimes;
                if (num > 0 && count > 0)
                    val = 1;
            }
            return ro.redpoints.client.evolve_mat1 = val;
        }

        evolve_up() {//
            let val = 0;
            if (ro.functionIsOpen(24, false) && ro.check_evolve()) {
                let lvl = ro.hero.getHerosCommonData().zxLv;
                let cfg = ro.getConfig("Evolve", lvl);
                if (ro.hero.getHerosCommonData().zxExp >= cfg.Next_cost[1] && ro.role.level >= 80)
                    val = 1;
            }
            return ro.redpoints.client.evolve_up = val;
        }

        //此为手动添加
        wing_dev() {//
            return this.wing_up() || this.wing_cifu() || this.wing_zizhi() || this.wing_god();
        }

        wing_cifu_up() {
            let val = "";
            let num = ro.item.getItemNum(90000103);
            ro.role.wing.heroWingLoop((hero, idx, array) => {
                let wingCfg = ro.getConfig("Wing", hero.wings.lv);
                if (num > 0 && hero.wings.fsLv < wingCfg.FlyPill) val = val + (idx + 2);
            });
            val = val == "" ? "0" : val;
            return ro.redpoints.client.wing_cifu_up = Number(val);
        }
        wing_zizhi_up() {
            let val = "";
            let num = ro.item.getItemNum(90000104);
            ro.role.wing.heroWingLoop((hero, idx, array) => {
                let wingCfg = ro.getConfig("Wing", hero.wings.lv);
                if (num > 0 && hero.wings.zzLv < wingCfg.AttrPill) val = val + (idx + 2);
            });
            val = val == "" ? "0" : val;
            return ro.redpoints.client.wing_zizhi_up = Number(val);
        }
        wing_god_refine() {
            return ro.redpoints.client.wing_god_refine = this.wing_god_refine_up();
        }
        wing_god_comp() {
            return ro.redpoints.client.wing_god_comp = this.wing_god_comp_add();
        }
        wing_god_equip() {
            return ro.redpoints.client.wing_god_equip = this.wing_god_equip_add() || this.wing_god_equip_comp();
        }
        wing_up() {
            let val = "";
            ro.role.wing.heroWingLoop((hero, idx, array) => {
                let wingCfg = ro.getConfig("Wing", hero.wings.lv);
                let num = ro.userData.role.item.getItemNum(wingCfg.CostNum[0]);
                if (num >= wingCfg.CostNum[1]) val = val + (idx + 2);
            });
            val = val == "" ? "0" : val;
            return ro.redpoints.client.wing_up = Number(val);
        }
        wing_cifu() {
            return ro.redpoints.client.wing_cifu = this.wing_cifu_up();
        }
        wing_zizhi() {
            return ro.redpoints.client.wing_zizhi = this.wing_zizhi_up();
        }
        wing_god() {
            return ro.redpoints.client.wing_god = this.wing_god_refine() || this.wing_god_comp() || this.wing_god_equip();
        }
        wing_active() {
            let val = "";
            ro.role.wing.heroWingLoop1((hero, idx, array) => {
                val = val + (idx + 2);
            });

            //这个地方导致所有羽翼养成后  人物界面下面羽翼按钮的红点不消失  所以注释了
            val = val + this.wing_dev();
            val = val == "" ? "0" : val;
            return ro.redpoints.client.wing_active = Number(val);
        }
        wing_god_equip_add() {
            let val = "";
            ro.role.wing.heroWingLoop((hero, idx, array) => {
                if (hero.wings.featherList) {
                    hero.wings.featherList.some((element, idx1, array) => {
                        let flag = ro.role.wing.checkAddFeather(element, hero.id);
                        if (flag && val.indexOf(idx + 2) == -1) val = val + (idx + 2);
                        return false;
                    });
                }
            });
            val = val == "" ? "0" : val;
            return ro.redpoints.client.wing_god_equip_add = Number(val);
        }
        wing_god_equip_comp() {
            let val = "";
            ro.role.wing.heroWingLoop((hero, idx, array) => {
                if (hero.wings.featherList) {
                    hero.wings.featherList.some((element, idx1, array) => {
                        let flag = ro.role.wing.checkCompNext(element, hero.id);
                        if (flag && val.indexOf(idx + 2) == -1) val = val + (idx + 2);
                        return false;
                    });
                }

            });
            val = val == "" ? "0" : val;
            return ro.redpoints.client.wing_god_equip_comp = Number(val);
        }
        wing_god_refine_up() {
            let val = "";
            if (ro.role.wing.checkRefineOpen()) {
                ro.role.wing.heroWingLoop((hero, idx, array) => {
                    if (hero.wings.featherList) {
                        hero.wings.featherList.some((element, idx1, array) => {
                            let flag = ro.role.wing.checkRefine(element, hero.id);
                            if (flag > 0 && val.indexOf(idx + 2) == -1) val = val + (idx + 2);
                            return false;
                        });
                    }
                });
            }
            val = val == "" ? "0" : val;
            return ro.redpoints.client.wing_god_refine_up = Number(val);
        }
        wing_god_comp_add() {
            return ro.redpoints.client.wing_god_comp_add = ro.role.wing.checkCompAll();
        }
        fuwen_active() {
            return ro.redpoints.client.fuwen_active = ro.role.hxpdata.Is_activity();
        }
        fuwen_exchange() {
            this.fuwen_exchange1(); this.fuwen_exchange2(); this.fuwen_exchange3(); this.fuwen_exchange4(); this.fuwen_exchange5(); this.fuwen_exchange6(); this.fuwen_exchange7();
            return ro.redpoints.client.fuwen_exchange = this.fuwen_exchange1() || this.fuwen_exchange2() || this.fuwen_exchange3() || this.fuwen_exchange4() || this.fuwen_exchange5() || this.fuwen_exchange6() || this.fuwen_exchange7();
        }

        fuwen_open() {
            let res1 = ro.functionIsShow(23) == true && ro.functionIsOpen(23, false) == true ? true : false;
            let val = res1 == true ? 1 : 0;
            return ro.redpoints.client.fuwen_open = val;
        }
        fuwen_fenjie() {
            let val = ro.role.hxpdata.Is_ConResolve() ? 1 : 0;
            return ro.redpoints.client.fuwen_fenjie = val;
        }
        role_baowu() {
            if (!ro.functionIsOpen(121, false) && !ro.functionIsOpen(ro.role.yingjieData.YingjieModuleID, false))
                return ro.redpoints.client.role_baowu = 0;
            else {
                return ro.redpoints.client.role_baowu = this.baowu_xunzhang() || this.baowu_jiban() || this.baowu_wenzhang() || this.baowu_doll()|| this.baowu_ying();
            }
        }
        role_shizhuang() {
            return ro.redpoints.client.role_shizhuang = ro.cacleHeadVal([this.shizhuang_active(), this.shizhuang_uplevel(),
            this.shizhuang_make(), this.shizhuang_yibiao(), this.shizhuang_meili()]) || this.shizhuang_title_equip();
        }
        role_autoequip() {
            if (!ro.functionIsOpen(86, false)) {
                return ro.redpoints.client.role_autoequip = 0;
            }
            let auto = Number(ro.equip.check_auto_point());
            console.log("autoEquip=> ", auto);
            return ro.redpoints.client.role_autoequip = auto;
        }
        role_zhanwen() {
            if (!ro.functionIsOpen(16, false))
                return ro.redpoints.client.role_zhanwen = 0;
            else
                return ro.redpoints.client.role_zhanwen = ro.cacleHeadVal([this.zhanwen_xiangqian(), this.zhanwen_fenjie()]);
        }
        mibao_uplevel() {
            return ro.redpoints.client.mibao_uplevel = ro.role.mibao.mibao_shenli();
        }
        mibao_rong() {
            return ro.redpoints.client.mibao_rong = ro.role.mibao.mibao_rong();
        }
        mb_active6() {
            return ro.redpoints.client.mb_active6 = ro.role.mibao.check_enble_active(5) ? 1 : 0;
        }
        mb_active2() {
            return ro.redpoints.client.mb_active2 = ro.role.mibao.check_enble_active(1) ? 1 : 0;
        }
        mb_active5() {
            return ro.redpoints.client.mb_active5 = ro.role.mibao.check_enble_active(4) ? 1 : 0;
        }
        mb_active3() {
            return ro.redpoints.client.mb_active3 = ro.role.mibao.check_enble_active(2) ? 1 : 0;
        }
        mb_active1() {
            return ro.redpoints.client.mb_active1 = ro.role.mibao.check_enble_active(0) ? 1 : 0;
        }
        mb_active4() {
            return ro.redpoints.client.mb_active4 = ro.role.mibao.check_enble_active(3) ? 1 : 0;
        }
        mibao_upskill() {
            return ro.redpoints.client.mibao_upskill = Number(ro.role.mibao.check_enble_skillup(-1));
        }
        fuwen_exchange3() {
            return ro.redpoints.client.fuwen_exchange3 = ro.role.hxpdata.Is_Exchange(2);
        }
        fuwen_exchange5() {
            return ro.redpoints.client.fuwen_exchange5 = ro.role.hxpdata.Is_Exchange(4);
        }
        fuwen_exchange1() {
            return ro.redpoints.client.fuwen_exchange1 = ro.role.hxpdata.Is_Exchange(0);
        }
        fuwen_exchange2() {
            return ro.redpoints.client.fuwen_exchange2 = ro.role.hxpdata.Is_Exchange(1);
        }
        fuwen_exchange4() {
            return ro.redpoints.client.fuwen_exchange4 = ro.role.hxpdata.Is_Exchange(3);
        }
        fuwen_exchange6() {
            return ro.redpoints.client.fuwen_exchange6 = ro.role.hxpdata.Is_Exchange(5);
        }
        fuwen_exchange7() {
            return ro.redpoints.client.fuwen_exchange7 = ro.role.hxpdata.Is_Exchange(6);
        }
        shenqi_chuancheng() {
            return ro.redpoints.client.shenqi_chuancheng = this.chuancheng_hecheng() || this.chuancheng_uplevel() || this.chuancheng_fen() || this.aomi_uplevel();
        }

        xunzhang_active() {
            return ro.redpoints.client.xunzhang_active = Number(ro.role.baowu.isActiveLong());
        }
        xunzhang_uplevel() {
            return ro.redpoints.client.huizhang_upstar = Number(ro.role.baowu.check_upstar());
        }
        baowu_xunzhang() {
            if (!ro.functionIsOpen(11, false)) {
                return ro.redpoints.client.baowu_xunzhang = 0;
            }
            return ro.redpoints.client.baowu_xunzhang = this.xunzhang_active() || this.xunzhang_uplevel();
        }
        qiyue_active() {
            return Number(ro.role.chuanshi.check_point(0));
        }
        qiyue_he() {
            let qhe = Number(ro.role.chuanshi.check_point(2));
            return qhe;
        }
        qiyue_uplevel() {
            return Number(ro.role.chuanshi.check_point(1));
        }
        qiyue_fen() {
            return Number(ro.role.chuanshi.check_point(3));
        }
        shizhuang_active() {
            return Number(ro.role.avatar.check_point(0));
        }
        shizhuang_title_equip() {
            return ro.redpoints.client.shizhuang_title_equip = ro.role.avatar.check_title();
        }
        shizhuang_uplevel() {
            return Number(ro.role.avatar.check_point(1));
        }
        shizhuang_make() {
            return Number(ro.role.avatar.check_point(2));
        }
        zhanwen_set() {
            return Number(ro.role.zhanwen.check_point(0));
        }
        zhanwen_uplevel() {
            return Number(ro.role.zhanwen.check_point(1));
        }
        zhanwen_fen() {
            return ro.redpoints.client.zhanwen_fen = ro.role.zhanwen.check_fen();
        }
        zhanwen_xiangqian() {
            return ro.redpoints.client.zhanwen_xiangqian = ro.cacleHeadVal([this.zhanwen_set(), this.zhanwen_uplevel()]);
        }
        zhanwen_fenjie() {
            return ro.redpoints.client.zhanwen_fenjie = this.zhanwen_fen();
        }
        role_shenqi() {
            if (!ro.functionIsOpen(3, false)) return 0;
            return ro.redpoints.client.role_shenqi = ro.cacleHeadVal([this.shenqi_chuancheng(), this.shenqi_shenzhuang(), this.shenqi_chaofan(), this.shenqi_yuangu()]);
        }
        role_openhero() {
            return ro.redpoints.client.role_openhero = Number(ro.hero.check_openhero_point());
        }
        role_chuanshi() {
            if (ro.functionIsOpen(8, false) || ro.role.vipLevel >= 4)
                return ro.redpoints.client.role_chuanshi = this.chuanshi_qiyue();
            else
                return ro.redpoints.client.role_chuanshi = 0;
        }
        char_role() {
            return ro.redpoints.client.char_role = this.role_shenqi() || this.role_openhero() || this.role_baowu() || this.role_autoequip() || this.role_chuanshi() || this.role_mibao() || this.role_shizhuang() || this.role_zhanwen();
        }
        chuancheng_uplevel() {
            return ro.cacleHeadVal([this.chuancheng_uplevel1(), this.chuancheng_uplevel2()]);
        }
        shengzhuang_uplevel() {
            return this.shenzhuang_uplevel1() || this.shenzhuang_uplevel2() || this.shenzhuang_uplevel3() || this.shenzhuang_uplevel4()
                || this.shenzhuang_uplevel5() || this.shenzhuang_uplevel6() || this.shenzhuang_uplevel7() || this.shenzhuang_uplevel8();
        }
        shenzhuang_uplevel2() {
            return ro.redpoints.client.shenzhuang_uplevel2 = Number(ro.role.equip.check_shenzhuang_uplevel_point(1));
        }
        shenzhuang_uplevel1() {
            return ro.redpoints.client.shenzhuang_uplevel1 = Number(ro.role.equip.check_shenzhuang_uplevel_point(0));
        }
        shenzhuang_uplevel8() {
            return ro.redpoints.client.shenzhuang_uplevel8 = Number(ro.role.equip.check_shenzhuang_uplevel_point(7));
        }
        shenzhuang_uplevel7() {
            return ro.redpoints.client.shenzhuang_uplevel7 = Number(ro.role.equip.check_shenzhuang_uplevel_point(6));
        }
        shenzhuang_uplevel3() {
            return ro.redpoints.client.shenzhuang_uplevel3 = Number(ro.role.equip.check_shenzhuang_uplevel_point(2));
        }
        shenzhuang_uplevel5() {
            return ro.redpoints.client.shenzhuang_uplevel5 = Number(ro.role.equip.check_shenzhuang_uplevel_point(4));
        }
        shenzhuang_uplevel6() {
            return ro.redpoints.client.shenzhuang_uplevel6 = Number(ro.role.equip.check_shenzhuang_uplevel_point(5));
        }
        shenzhuang_uplevel4() {
            return ro.redpoints.client.shenzhuang_uplevel4 = Number(ro.role.equip.check_shenzhuang_uplevel_point(3));
        }
        shenqi_shenzhuang() {
            return ro.redpoints.client.shenqi_shenzhuang = Number(ro.role.equip.check_shenzhuang_point());
        }
        chuanshi_qiyue() {
            ro.redpoints.client.chuanshi_qiyue = ro.cacleHeadVal([this.qiyue_he(), this.qiyue_uplevel(), this.qiyue_active(), this.qiyue_fen()]);
            return ro.redpoints.client.chuanshi_qiyue;
        }
        qiyue_active7() {
            return ro.redpoints.client.qiyue_active7 = Number(ro.role.chuanshi.check_uplevel(6, 0));
        }
        qiyue_he7() {
            return ro.redpoints.client.qiyue_he7 = Number(ro.role.chuanshi.check_uplevel(6, 2));
        }
        qiyue_uplevel8() {
            return ro.redpoints.client.qiyue_uplevel8 = Number(ro.role.chuanshi.check_uplevel(7, 1));
        }
        qiyue_active8() {
            return ro.redpoints.client.qiyue_active8 = Number(ro.role.chuanshi.check_uplevel(7, 0));
        }
        qiyue_active6() {
            return ro.redpoints.client.qiyue_active6 = Number(ro.role.chuanshi.check_uplevel(5, 0));
        }
        qiyue_he8() {
            return ro.redpoints.client.qiyue_he8 = Number(ro.role.chuanshi.check_uplevel(7, 2));
        }
        qiyue_uplevel6() {
            return ro.redpoints.client.qiyue_uplevel6 = Number(ro.role.chuanshi.check_uplevel(5, 1));
        }
        qiyue_he1() {
            return ro.redpoints.client.qiyue_he1 = Number(ro.role.chuanshi.check_uplevel(0, 2));
        }
        qiyue_he6() {
            return ro.redpoints.client.qiyue_he6 = Number(ro.role.chuanshi.check_uplevel(5, 2));
        }
        qiyue_he2() {
            return ro.redpoints.client.qiyue_he2 = Number(ro.role.chuanshi.check_uplevel(1, 2));
        }
        qiyue_he4() {
            return ro.redpoints.client.qiyue_he4 = Number(ro.role.chuanshi.check_uplevel(3, 2));
        }
        qiyue_uplevel1() {
            return ro.redpoints.client.qiyue_uplevel1 = Number(ro.role.chuanshi.check_uplevel(0, 1));
        }
        qiyue_uplevel3() {
            return ro.redpoints.client.qiyue_uplevel3 = Number(ro.role.chuanshi.check_uplevel(2, 1));
        }
        qiyue_active3() {
            return ro.redpoints.client.qiyue_active3 = Number(ro.role.chuanshi.check_uplevel(2, 0));
        }
        qiyue_uplevel5() {
            return ro.redpoints.client.qiyue_uplevel5 = Number(ro.role.chuanshi.check_uplevel(4, 1));
        }
        qiyue_he3() {
            return ro.redpoints.client.qiyue_he3 = Number(ro.role.chuanshi.check_uplevel(2, 2));
        }
        qiyue_active2() {
            return ro.redpoints.client.qiyue_active2 = Number(ro.role.chuanshi.check_uplevel(1, 0));
        }
        qiyue_he5() {
            return ro.redpoints.client.qiyue_he5 = Number(ro.role.chuanshi.check_uplevel(4, 2));
        }
        qiyue_uplevel2() {
            return ro.redpoints.client.qiyue_uplevel2 = Number(ro.role.chuanshi.check_uplevel(1, 1));
        }
        qiyue_active1() {
            return ro.redpoints.client.qiyue_active1 = Number(ro.role.chuanshi.check_uplevel(0, 0));
        }
        qiyue_active4() {
            return ro.redpoints.client.qiyue_active4 = Number(ro.role.chuanshi.check_uplevel(3, 0));
        }
        qiyue_uplevel4() {
            return ro.redpoints.client.qiyue_uplevel4 = Number(ro.role.chuanshi.check_uplevel(3, 1));
        }
        qiyue_active5() {
            return ro.redpoints.client.qiyue_active5 = Number(ro.role.chuanshi.check_uplevel(4, 0));
        }
        qiyue_uplevel7() {
            return ro.redpoints.client.qiyue_uplevel7 = Number(ro.role.chuanshi.check_uplevel(6, 1));
        }
        qiyue_fen8() {
            return ro.redpoints.client.qiyue_fen8 = Number(ro.role.chuanshi.check_uplevel(7, 3));
        }
        qiyue_fen6() {
            return ro.redpoints.client.qiyue_fen6 = Number(ro.role.chuanshi.check_uplevel(5, 3));
        }
        qiyue_fen5() {
            return ro.redpoints.client.qiyue_fen5 = Number(ro.role.chuanshi.check_uplevel(4, 3));
        }
        qiyue_fen3() {
            return ro.redpoints.client.qiyue_fen3 = Number(ro.role.chuanshi.check_uplevel(2, 3));
        }
        qiyue_fen4() {
            return ro.redpoints.client.qiyue_fen4 = Number(ro.role.chuanshi.check_uplevel(3, 3));
        }
        qiyue_fen2() {
            return ro.redpoints.client.qiyue_fen2 = Number(ro.role.chuanshi.check_uplevel(1, 3));
        }
        qiyue_fen1() {
            return ro.redpoints.client.qiyue_fen1 = Number(ro.role.chuanshi.check_uplevel(0, 3));
        }
        qiyue_fen7() {
            return ro.redpoints.client.qiyue_fen7 = Number(ro.role.chuanshi.check_uplevel(6, 3));
        }
        baowu_jiban() {
            if (ro.functionIsShow(12) && ro.functionIsOpen(12, false)) {
                if ((ro.checker.is_num_limit(90000124) || ro.checker.is_num_limit(90000237) || ro.checker.is_num_limit(90000238))) {
                    return ro.redpoints.client.baowu_jiban = this.jibanshengji() || this.jibanheadRedpoint() || this.jibanjihuo();
                } else {
                    return ro.redpoints.client.baowu_jiban = false || false || this.jibanjihuo();
                }
            } else {
                return ro.redpoints.client.baowu_jiban = 0;
            }
        }
        baowu_wenzhang() {
            if (ro.functionIsShow(13) && ro.functionIsOpen(13, false)) {
                return ro.redpoints.client.baowu_wenzhang = this.wenzhangheadRedpoint() > 0 ? 1 : 0;
            } else {
                return ro.redpoints.client.baowu_wenzhang = 0;
            }
        }
        zhanwen_set4() {
            return ro.redpoints.client.zhanwen_set4 = Number(ro.role.zhanwen.check_set_pos(3));
        }
        zhanwen_uplevel8() {
            return ro.redpoints.client.zhanwen_uplevel8 = Number(ro.role.zhanwen.check_uplevel_pos(7));
        }
        zhanwen_uplevel7() {
            return ro.redpoints.client.zhanwen_uplevel7 = Number(ro.role.zhanwen.check_uplevel_pos(6));
        }
        zhanwen_uplevel5() {
            return ro.redpoints.client.zhanwen_uplevel5 = Number(ro.role.zhanwen.check_uplevel_pos(4));
        }
        zhanwen_set5() {
            return ro.redpoints.client.zhanwen_set5 = Number(ro.role.zhanwen.check_set_pos(4));
        }
        zhanwen_uplevel6() {
            return ro.redpoints.client.zhanwen_uplevel6 = Number(ro.role.zhanwen.check_uplevel_pos(5));
        }
        zhanwen_uplevel1() {
            return ro.redpoints.client.zhanwen_uplevel1 = Number(ro.role.zhanwen.check_uplevel_pos(0));
        }
        zhanwen_set3() {
            return ro.redpoints.client.zhanwen_set3 = Number(ro.role.zhanwen.check_set_pos(2));
        }
        zhanwen_uplevel2() {
            return ro.redpoints.client.zhanwen_uplevel2 = Number(ro.role.zhanwen.check_uplevel_pos(1));
        }
        zhanwen_uplevel3() {
            return ro.redpoints.client.zhanwen_uplevel3 = Number(ro.role.zhanwen.check_uplevel_pos(2));
        }
        zhanwen_uplevel4() {
            return ro.redpoints.client.zhanwen_uplevel4 = Number(ro.role.zhanwen.check_uplevel_pos(3));
        }
        zhanwen_set8() {
            return ro.redpoints.client.zhanwen_set8 = Number(ro.role.zhanwen.check_set_pos(7));
        }
        zhanwen_set2() {
            return ro.redpoints.client.zhanwen_set2 = Number(ro.role.zhanwen.check_set_pos(1));
        }
        zhanwen_set1() {
            return ro.redpoints.client.zhanwen_set1 = Number(ro.role.zhanwen.check_set_pos(0));
        }
        zhanwen_set7() {
            return ro.redpoints.client.zhanwen_set7 = Number(ro.role.zhanwen.check_set_pos(6));
        }
        zhanwen_set6() {
            return ro.redpoints.client.zhanwen_set6 = Number(ro.role.zhanwen.check_set_pos(5));
        }
        zhanwen_xiangqian1() {
            return ro.redpoints.client.zhanwen_xiangqian1 = ro.cacleHeadVal([this.zhanwen_uplevel1(), this.zhanwen_set1()]);
        }
        zhanwen_xiangqian6() {
            return ro.redpoints.client.zhanwen_xiangqian6 = ro.cacleHeadVal([this.zhanwen_uplevel6(), this.zhanwen_set6()]);
        }
        zhanwen_xiangqian3() {
            return ro.redpoints.client.zhanwen_xiangqian3 = ro.cacleHeadVal([this.zhanwen_uplevel3(), this.zhanwen_set3()]);
        }
        zhanwen_xiangqian8() {
            return ro.redpoints.client.zhanwen_xiangqian8 = ro.cacleHeadVal([this.zhanwen_uplevel8(), this.zhanwen_set8()]);
        }
        zhanwen_xiangqian7() {
            return ro.redpoints.client.zhanwen_xiangqian7 = ro.cacleHeadVal([this.zhanwen_uplevel7(), this.zhanwen_set7()]);
        }
        zhanwen_xiangqian2() {
            return ro.redpoints.client.zhanwen_xiangqian2 = ro.cacleHeadVal([this.zhanwen_uplevel2(), this.zhanwen_set2()]);
        }
        zhanwen_xiangqian4() {
            return ro.redpoints.client.zhanwen_xiangqian4 = ro.cacleHeadVal([this.zhanwen_uplevel4(), this.zhanwen_set4()]);
        }
        zhanwen_xiangqian5() {
            return ro.redpoints.client.zhanwen_xiangqian5 = ro.cacleHeadVal([this.zhanwen_uplevel5(), this.zhanwen_set5()]);
        }
        shizhuang_uplevel5() {
            return ro.redpoints.client.shizhuang_uplevel5 = Number(ro.role.avatar.check_uplevel(4));
        }
        shizhuang_uplevel6() {
            return ro.redpoints.client.shizhuang_uplevel6 = Number(ro.role.avatar.check_uplevel(5));
        }
        shizhuang_uplevel2() {
            return ro.redpoints.client.shizhuang_uplevel2 = Number(ro.role.avatar.check_uplevel(1));
        }
        shizhuang_active3() {
            return ro.redpoints.client.shizhuang_active3 = Number(ro.role.avatar.check_active(2));
        }
        shizhuang_active5() {
            return ro.redpoints.client.shizhuang_active5 = Number(ro.role.avatar.check_active(4));
        }
        shizhuang_active2() {
            return ro.redpoints.client.shizhuang_active2 = Number(ro.role.avatar.check_active(1));
        }
        shizhuang_active1() {
            return ro.redpoints.client.shizhuang_active1 = Number(ro.role.avatar.check_active(0));
        }
        shizhuang_active4() {
            return ro.redpoints.client.shizhuang_active4 = Number(ro.role.avatar.check_active(3));
        }
        shizhuang_active6() {
            return ro.redpoints.client.shizhuang_active6 = Number(ro.role.avatar.check_active(5));
        }
        shizhuang_uplevel1() {
            return ro.redpoints.client.shizhuang_uplevel1 = Number(ro.role.avatar.check_uplevel(0));
        }
        shizhuang_uplevel4() {
            return ro.redpoints.client.shizhuang_uplevel4 = Number(ro.role.avatar.check_uplevel(3));
        }
        shizhuang_uplevel3() {
            return ro.redpoints.client.shizhuang_uplevel3 = Number(ro.role.avatar.check_uplevel(2));
        }
        shizhuang_point4() {
            return ro.redpoints.client.shizhuang_point4 = ro.cacleHeadVal([this.shizhuang_uplevel4(), this.shizhuang_active4()]);
        }
        shizhuang_point1() {
            return ro.redpoints.client.shizhuang_point1 = ro.cacleHeadVal([this.shizhuang_uplevel1(), this.shizhuang_active1()]);
        }
        shizhuang_point6() {
            return ro.redpoints.client.shizhuang_point6 = ro.cacleHeadVal([this.shizhuang_uplevel6(), this.shizhuang_active6()]);
        }
        shizhuang_point5() {
            return ro.redpoints.client.shizhuang_point5 = ro.cacleHeadVal([this.shizhuang_uplevel5(), this.shizhuang_active5()]);
        }
        shizhuang_point3() {
            return ro.redpoints.client.shizhuang_point3 = ro.cacleHeadVal([this.shizhuang_uplevel3(), this.shizhuang_active3()]);
        }
        shizhuang_point2() {
            return ro.redpoints.client.shizhuang_point2 = ro.cacleHeadVal([this.shizhuang_uplevel2(), this.shizhuang_active2()]);
        }
        wenzhangresove() {
            if (ro.functionIsShow(12)) {
                if (ro.functionIsOpen(12, false)) {
                    return ro.redpoints.client.wenzhangresove = ro.role.fetter.xinfa_Resolver() == 1 ? 1 : 0;
                }
            } else {
                return ro.redpoints.client.wenzhangresove = 0;
            }
        }
        jibanshengji() {
            if (ro.functionIsShow(12)) {
                if (ro.functionIsOpen(12, false)) {
                    if ((ro.checker.is_num_limit(90000124) || ro.checker.is_num_limit(90000237) || ro.checker.is_num_limit(90000238))) {
                        return ro.redpoints.client.jibanshengji = ro.role.fetter.Hero_LevelUp();
                    } else {
                        return ro.redpoints.client.jibanshengji = 0;
                    }

                }
            } else {
                return ro.redpoints.client.jibanshengji = 0;
            }

        }
        wenzhangheadRedpoint() {
            if (ro.functionIsShow(13)) {
                if (ro.functionIsOpen(13, false)) {
                    if (ro.checker.is_num_limit(90000277)) {
                        return ro.redpoints.client.wenzhangheadRedpoint = ro.role.fetter.crestHeadRedpoint();
                    } else {
                        return ro.redpoints.client.wenzhangheadRedpoint = 0;
                    }
                }
            } else {
                return ro.redpoints.client.wenzhangheadRedpoint = 0;
            }
        }
        jibanheadRedpoint() {
            if (ro.functionIsShow(12)) {
                if (ro.functionIsOpen(12, false)) {
                    if ((ro.checker.is_num_limit(90000124) || ro.checker.is_num_limit(90000237) || ro.checker.is_num_limit(90000238))) {
                        return ro.redpoints.client.jibanheadRedpoint = ro.role.fetter.FetterHeadPoint();
                    } else {
                        return ro.redpoints.client.jibanheadRedpoint = 0;
                    }
                }
            } else {
                return ro.redpoints.client.jibanheadRedpoint = 0;
            }
        }
        jibanjihuo() {
            return ro.redpoints.client.jibanjihuo = ro.role.fetter.FetterActivity();
        }
        huizhang_upstar() {
            return ro.redpoints.client.huizhang_upstar//TODO 内部逻辑 return 0 1;
        }
        aomi_uplevel() {
            if (!ro.functionIsOpen(105, false)) return 0;
            return ro.cacleHeadVal([this.aomi_uplevel1(), this.aomi_uplevel2()]);
        }
        chuancheng_hecheng() {
            return ro.cacleHeadVal([ro.role.equip.check_chuancheng(1, 0), ro.role.equip.check_chuancheng(2, 0)]);
        }
        chuancheng_uplevel2() {
            return ro.redpoints.client.chuancheng_uplevel2 = ro.role.equip.check_chuancheng(2, 1);
        }
        aomi_uplevel2() {
            return ro.redpoints.client.aomi_uplevel2 = ro.role.equip.check_aomi_uplevel(2);
        }
        aomi_uplevel1() {
            return ro.redpoints.client.aomi_uplevel1 = ro.role.equip.check_aomi_uplevel(1);
        }
        chuancheng_hecheng2() {
            return ro.redpoints.client.chuancheng_hecheng2 = ro.role.equip.check_chuancheng(2, 0);
        }
        chuancheng_uplevel1() {
            return ro.redpoints.client.chuancheng_uplevel1 = ro.role.equip.check_chuancheng(1, 1);
        }
        chuancheng_hecheng1() {
            return ro.redpoints.client.chuancheng_hecheng1 = ro.role.equip.check_chuancheng(1, 0);
        }
        shizhuang_make4() {
            return ro.redpoints.client.shizhuang_make4 = Number(ro.role.avatar.check_make(3));
        }
        shizhuang_make2() {
            return ro.redpoints.client.shizhuang_make2 = Number(ro.role.avatar.check_make(1));
        }
        shizhuang_make1() {
            return ro.redpoints.client.shizhuang_make1 = Number(ro.role.avatar.check_make(0));
        }
        shizhuang_make5() {
            return ro.redpoints.client.shizhuang_make5 = Number(ro.role.avatar.check_make(4));
        }
        shizhuang_make6() {
            return ro.redpoints.client.shizhuang_make6 = Number(ro.role.avatar.check_make(5));
        }
        shizhuang_make3() {
            return ro.redpoints.client.shizhuang_make3 = Number(ro.role.avatar.check_make(2));
        }
        wing_skillup() {
            let val = "";
            ro.role.wing.heroWingLoop((hero, idx, array) => {
                for (let i: number = 0; i < 5; i++) {
                    let skillinfo = hero.wings.skillinfo[i];
                    if (skillinfo) {
                        let skillCfg = ro.getConfig("Wing_Skill", skillinfo.skillid);
                        let num = ro.item.getItemNum(skillCfg.CostNum[0]);
                        if (skillinfo.lv < skillCfg.Max_Level && num >= skillCfg.CostNum[1]) {
                            val = val + (idx + 2);
                            break
                        }
                    }
                }
            });
            val = val == "" ? "0" : val;
            return ro.redpoints.client.wing_skillup = Number(val);
        }
        shizhuang_yibiao() {
            return Number(ro.role.avatar.check_point(3));
        }
        shizhuang_meili() {
            return Number(ro.role.avatar.check_point(4));
        }
        shizhuang_yibiao4() {
            return ro.redpoints.client.shizhuang_yibiao4 = Number(ro.role.avatar.check_yibiao(3));
        }
        shizhuang_meili4() {
            return ro.redpoints.client.shizhuang_meili4 = Number(ro.role.avatar.check_meili(3));
        }
        shizhuang_yibiao1() {
            return ro.redpoints.client.shizhuang_yibiao1 = Number(ro.role.avatar.check_yibiao(0));
        }
        shizhuang_meili1() {
            return ro.redpoints.client.shizhuang_meili1 = Number(ro.role.avatar.check_meili(0));
        }
        shizhuang_meili2() {
            return ro.redpoints.client.shizhuang_meili2 = Number(ro.role.avatar.check_meili(1));
        }
        shizhuang_yibiao2() {
            return ro.redpoints.client.shizhuang_yibiao2 = Number(ro.role.avatar.check_yibiao(1));
        }
        shizhuang_yibiao6() {
            return ro.redpoints.client.shizhuang_yibiao6 = Number(ro.role.avatar.check_yibiao(5));
        }
        shizhuang_meili6() {
            return ro.redpoints.client.shizhuang_meili6 = Number(ro.role.avatar.check_meili(5));
        }
        shizhuang_yibiao3() {
            return ro.redpoints.client.shizhuang_yibiao3 = Number(ro.role.avatar.check_yibiao(2));
        }
        shizhuang_meili3() {
            return ro.redpoints.client.shizhuang_meili3 = Number(ro.role.avatar.check_meili(2));
        }
        shizhuang_meili5() {
            return ro.redpoints.client.shizhuang_meili5 = Number(ro.role.avatar.check_meili(4));
        }
        shizhuang_yibiao5() {
            return ro.redpoints.client.shizhuang_yibiao5 = Number(ro.role.avatar.check_yibiao(4));
        }
        chuancheng_fen() {
            return ro.redpoints.client.chuancheng_fen = Number(ro.role.equip.check_chuan_fen());
        }

        public evolve_helper_flag = false;
        evolve_helper() {
            let val = 0;
            if (ro.role.raw.zhuanshengGuide && ro.functionIsOpen(24, false) && ro.check_evolve()) {
                if (!this.evolve_helper_flag) {
                    if (ro.role.raw.zhuanshengGuide.itemsId != 0 ||
                        (ro.role.raw.zhuanshengGuide.theEndLv != 0 && ro.role.raw.zhuanshengGuide.outdoorFlag == 0) ||
                        (ro.role.raw.zhuanshengGuide.rewardFlag < 2 && ro.role.raw.zhuanshengGuide.outdoorFlag == 1)) {
                        val = 1;
                    }
                }

                let helper = ro.role.raw.zhuanshengGuide;
                helper.theEndLv = helper.theEndLv % 10000;
                let leftLvl = helper.theEndLv - BattleSimulator.Instance.data.pve_level;
                leftLvl = leftLvl > 0 ? Math.max((10 - leftLvl), 0) : 10;
                if (ro.role.raw.zhuanshengGuide.rewardFlag == 1 || (helper.theEndLv != 0 && leftLvl == 10)) {
                    val = 1;
                }
            }
            return ro.redpoints.client.evolve_helper = val;
        }
        shenqi_yuangu() {
            return ro.redpoints.client.shenqi_yuangu = ro.redpoints.ancient.equip_main;
        }
        shenqi_chaofan() {
            return ro.redpoints.client.shenqi_chaofan = ro.redpoints.thunder.thunder_entry;
        }
        doll_active() {
            return ro.redpoints.client.doll_active = ro.role.baowu.check_dollstate(0);
        }
        doll_upQua() {
            return ro.redpoints.client.doll_upQua = ro.role.baowu.check_dollstate(2);
        }
        doll_fen() {
            return ro.redpoints.client.doll_fen = ro.role.baowu.check_dollfen();
        }
        doll_bless() {
            return ro.redpoints.client.doll_bless = ro.role.baowu.check_dollbless();
        }
        doll_gong() {
            return ro.redpoints.client.doll_gong = ro.role.baowu.check_dollgong();
        }
        doll_uplevel() {
            return ro.redpoints.client.doll_uplevel = ro.role.baowu.check_dollstate(1);
        }
        baowu_doll() {
            if (!ro.functionIsOpen(121, false)) {
                return ro.redpoints.client.baowu_doll = 0;
            }
            return ro.redpoints.client.baowu_doll = this.doll_active() || this.doll_upQua() || this.doll_fen() || this.doll_bless() || this.doll_uplevel() || this.doll_gong();
        }
        baowu_ying() {
            if (!ro.functionIsOpen(ro.role.yingjieData.YingjieModuleID, false)) {
                return ro.redpoints.client.baowu_ying = 0;
            }
            return ro.redpoints.client.baowu_ying = this.ying_active() || this.ying_upQua() || this.ying_tu() || this.ying_fen() || this.ying_uplevel()|| this.ying_jiban();
        }
        ying_active() {
            return ro.redpoints.client.ying_active = ro.role.yingjieData.checkPointState(0);
        }
        ying_upQua() {
            return ro.redpoints.client.ying_star = ro.role.yingjieData.checkPointState(3);;
        }
        ying_tu() {
            return ro.redpoints.client.ying_tu = ro.role.yingjieData.checkPointState(2);;
        }
        ying_fen() {
            return ro.redpoints.client.ying_fen = ro.role.yingjieData.checkPointState(4);;;
        }
        ying_jiban() {
            return ro.redpoints.client.ying_jiban = ro.role.yingjieData.checkPointState(5);
        }
        ying_uplevel() {
            return ro.redpoints.client.ying_upLevel = ro.role.yingjieData.checkPointState(1);;
        }
        //end 勿删
    }
}
