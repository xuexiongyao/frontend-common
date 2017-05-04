/**
 * Created by christ on 2016/11/15.
 * description：法律文书字典配置js文件
 */

/*法律文书简单字典配置js*/
//新增一个字典 需要在flwsRuleConfig.js对应的位置新增一个判断

//简单字典
var flwsDictObj = {
    'GB_D_XBDM': [//性别字典
        {"id": "0", "text": "未知的性别", "py": "WZDXB", "wb": "FTRNK"},
        {"id": "1", "text": "男", "py": "N", "wb": "L"},
        {"id": "2", "text": "女", "py": "N", "wb": "V"},
        {"id": "9", "text": "未说明的性别", "py": "WSMDXB", "wb": "FYJRNK"}
    ],
    'BD_D_LA_FLTKDM': [//法律条款
        {"id": "1", "text": "第一百零七条", "py": "DYBLQT", "wb": "TGDFAT"},
        {"id": "2", "text": "第一百一十条", "py": "DYBYST", "wb": "TGDGFT"}
    ],
    'BD_D_SFDM': [//是否
        {"id": "0", "text": "否", "py": "F", "wb": "G"},
        {"id": "1", "text": "是", "py": "S", "wb": "J"}
    ],
    'BD_D_QBHS_QBHSLXDM': [//取保候审类型
        {"id": "1", "text": "财保", "py": "CB", "wb": "MW"},
        {"id": "2", "text": "人保", "py": "RB", "wb": "WW"}
    ],
    'KX_D_CYZJDM': [//成员证件
        {"id": "111", "text": "居民身份证", "py": "JMSFZ", "wb": "NNTWY"},
        {"id": "112", "text": "临时居民身份证", "py": "LSJMSFZ", "wb": "JJNNTWY"},
        {"id": "113", "text": "户口簿", "py": "HKB", "wb": "YKT"},
        {"id": "114", "text": "中国人民解放军军官证", "py": "ZGRMJFJJGZ", "wb": "KLWNQYPPPY"},
        {"id": "115", "text": "中国人民武装警察部队警官证", "py": "ZGRMWZJCBDJGZ", "wb": "KLWNGUAPUBAPY"},
        {"id": "116", "text": "暂住证", "py": "ZZZ", "wb": "LWY"},
        {"id": "117", "text": "出生医学证明", "py": "CSYXZM", "wb": "BTAIYJ"},
        {"id": "118", "text": "士兵证", "py": "SBZ", "wb": "FRY"},
        {"id": "121", "text": "法官证", "py": "FGZ", "wb": "IPY"},
        {"id": "123", "text": "警官证", "py": "JGZ", "wb": "APY"},
        {"id": "125", "text": "检察官证", "py": "JCGZ", "wb": "SPPY"},
        {"id": "127", "text": "律师证", "py": "LSZ", "wb": "TJY"},
        {"id": "129", "text": "记者证", "py": "JZZ", "wb": "YFY"},
        {"id": "131", "text": "工作证", "py": "GZZ", "wb": "AWY"},
        {"id": "133", "text": "学生证", "py": "XSZ", "wb": "ITY"},
        {"id": "151", "text": "出入证", "py": "CRZ", "wb": "BTY"},
        {"id": "153", "text": "临时出入证", "py": "LSCRZ", "wb": "JJBTY"},
        {"id": "155", "text": "住宿证", "py": "ZSZ", "wb": "WPY"},
        {"id": "157", "text": "医疗证", "py": "YLZ", "wb": "AUY"},
        {"id": "159", "text": "劳保证", "py": "LBZ", "wb": "AWY"},
        {"id": "16", "text": "台湾居民来往大陆通行证（五年有效）", "py": "TWJMLWDLTXZ（WNYX）", "wb": "CINNGTDBCTY（GRDU）"},
        {"id": "161", "text": "献血证", "py": "XXZ", "wb": "FTY"},
        {"id": "163", "text": "保险单", "py": "BXD", "wb": "WBU"},
        {"id": "191", "text": "会员证", "py": "HYZ", "wb": "WKY"},
        {"id": "211", "text": "离休证", "py": "LXZ", "wb": "YWY"},
        {"id": "213", "text": "退休证", "py": "TXZ", "wb": "VWY"},
        {"id": "215", "text": "老年证", "py": "LNZ", "wb": "FRY"},
        {"id": "217", "text": "残疾证", "py": "CJZ", "wb": "GUY"},
        {"id": "219", "text": "结婚证", "py": "JHZ", "wb": "XVY"},
        {"id": "22", "text": "往来港澳通行证（8页）", "py": "WLGATXZ（8Y）", "wb": "TGIICTY（8D）"},
        {"id": "221", "text": "离婚证", "py": "LHZ", "wb": "YVY"},
        {"id": "223", "text": "独生子女证", "py": "DSZNZ", "wb": "QTBVY"},
        {"id": "225", "text": "毕业证书", "py": "BYZS", "wb": "XOYN"},
        {"id": "227", "text": "肄业证", "py": "YYZ", "wb": "XOY"},
        {"id": "229", "text": "结业证", "py": "JYZ", "wb": "XOY"},
        {"id": "231", "text": "学位证", "py": "XWZ", "wb": "IWY"},
        {"id": "233", "text": "军人通行证", "py": "JRTXZ", "wb": "PWCTY"},
        {"id": "24", "text": "港澳居民往来内地通行证", "py": "GAJMWLNDTXZ", "wb": "IINNTGMFCTY"},
        {
            "id": "26",
            "text": "往来香港特别行政区通行证（2000年12月20日停止使用）",
            "py": "WLXGTBXZQTXZ（2000N12Y20RTZSY）",
            "wb": "TGTITKTGACTY（2000R12E20JWHWE）"
        },
        {"id": "291", "text": "证明信", "py": "ZMX", "wb": "YJW"},
        {"id": "311", "text": "持枪证", "py": "CQZ", "wb": "RSY"},
        {"id": "313", "text": "枪证", "py": "QZ", "wb": "SY"},
        {"id": "315", "text": "枪支（弹药）携运许可证", "py": "QZ（DY）XYXKZ", "wb": "SF（XA）RFYSY"},
        {"id": "317", "text": "砍伐证", "py": "KFZ", "wb": "DWY"},
        {"id": "319", "text": "准运证", "py": "ZYZ", "wb": "UFY"},
        {"id": "321", "text": "准购证", "py": "ZGZ", "wb": "UMY"},
        {"id": "323", "text": "粮油证", "py": "LYZ", "wb": "OIY"},
        {"id": "325", "text": "购煤证", "py": "GMZ", "wb": "MOY"},
        {"id": "327", "text": "购煤气证", "py": "GMQZ", "wb": "MORY"},
        {"id": "329", "text": "房屋产权证", "py": "FWCQZ", "wb": "YNUSY"},
        {"id": "331", "text": "土地使用证", "py": "TDSYZ", "wb": "FFWEY"},
        {"id": "333", "text": "车辆通行证", "py": "CLTXZ", "wb": "LLCTY"},
        {"id": "335", "text": "机动车驾驶证", "py": "JDCJSZ", "wb": "SFLLCY"},
        {"id": "337", "text": "机动车行驶证", "py": "JDCXSZ", "wb": "SFLTCY"},
        {"id": "339", "text": "机动车登记证书", "py": "JDCDJZS", "wb": "SFLWYYN"},
        {"id": "341", "text": "机动车年检合格证", "py": "JDCNJHGZ", "wb": "SFLRSWSY"},
        {"id": "343", "text": "春运临时检验合格证", "py": "CYLSJYHGZ", "wb": "DFJJSCWSY"},
        {"id": "345", "text": "飞机驾驶证", "py": "FJJSZ", "wb": "NSLCY"},
        {"id": "347", "text": "船舶驾驶证", "py": "CBJSZ", "wb": "TTLCY"},
        {"id": "349", "text": "船舶行驶证", "py": "CBXSZ", "wb": "TTTCY"},
        {"id": "351", "text": "自行车行驶证", "py": "ZXCXSZ", "wb": "TTLTCY"},
        {"id": "353", "text": "汽车号牌", "py": "QCHP", "wb": "ILKT"},
        {"id": "355", "text": "拖拉机牌", "py": "TLJP", "wb": "RRST"},
        {"id": "357", "text": "摩托车牌", "py": "MTCP", "wb": "YRLT"},
        {"id": "359", "text": "船舶牌", "py": "CBP", "wb": "TTT"},
        {"id": "361", "text": "三轮车牌", "py": "SLCP", "wb": "DLLT"},
        {"id": "363", "text": "自行车牌", "py": "ZXCP", "wb": "TTLT"},
        {"id": "391", "text": "残疾人机动轮椅车", "py": "CJRJDLYC", "wb": "GUWSFLSL"},
        {"id": "3E", "text": "特区旅游签证", "py": "TQLYQZ", "wb": "TAYITY"},
        {"id": "3P", "text": "普通签证", "py": "PTQZ", "wb": "UCTY"},
        {"id": "3T", "text": "团队签证", "py": "TDQZ", "wb": "LBTY"},
        {"id": "40", "text": "出海渔船民证", "py": "CHYCMZ", "wb": "BIITNY"},
        {"id": "41", "text": "临时出海渔船民证", "py": "LSCHYCMZ", "wb": "JJBIITNY"},
        {"id": "411", "text": "外交护照", "py": "WJHZ", "wb": "QURJ"},
        {"id": "412", "text": "公务护照", "py": "GWHZ", "wb": "WTRJ"},
        {"id": "413", "text": "因公普通护照", "py": "YGPTHZ", "wb": "LWUCRJ"},
        {"id": "414", "text": "普通护照", "py": "PTHZ", "wb": "UCRJ"},
        {"id": "415", "text": "旅行证", "py": "LXZ", "wb": "YTY"},
        {"id": "416", "text": "入出境通行证", "py": "RCJTXZ", "wb": "TBFCTY"},
        {"id": "417", "text": "外国人出入境证", "py": "WGRCRJZ", "wb": "QLWBTFY"},
        {"id": "418", "text": "外国人旅行证", "py": "WGRLXZ", "wb": "QLWYTY"},
        {"id": "419", "text": "海员证", "py": "HYZ", "wb": "IKY"},
        {"id": "420", "text": "香港特别行政区护照", "py": "XGTBXZQHZ", "wb": "TITKTGARJ"},
        {"id": "421", "text": "澳门特别行政区护照", "py": "AMTBXZQHZ", "wb": "IUTKTGARJ"},
        {"id": "423", "text": "澳门特别行政区旅行证", "py": "AMTBXZQLXZ", "wb": "IUTKTGAYTY"},
        {"id": "43", "text": "出海船舶户口证", "py": "CHCBHKZ", "wb": "BITTYKY"},
        {"id": "511", "text": "台湾居民来往大陆通行证", "py": "TWJMLWDLTXZ", "wb": "CINNGTDBCTY"},
        {"id": "512", "text": "台湾居民来往大陆通行证（一次有效）", "py": "TWJMLWDLTXZ（YCYX）", "wb": "CINNGTDBCTY（GUDU）"},
        {"id": "513", "text": "往来港澳通行证", "py": "WLGATXZ", "wb": "TGIICTY"},
        {"id": "515", "text": "前往港澳通行证", "py": "QWGATXZ", "wb": "UTIICTY"},
        {"id": "516", "text": "港澳同胞回乡证（通行卡）", "py": "GATBHXZ（TXK）", "wb": "IIMELXY（CTH）"},
        {"id": "517", "text": "大陆居民往来台湾通行证", "py": "DLJMWLTWTXZ", "wb": "DBNNTGCICTY"},
        {"id": "518", "text": "因公往来香港澳门特别行政区通行证", "py": "YGWLXGAMTBXZQTXZ", "wb": "LWTGTIIUTKTGACTY"},
        {"id": "551", "text": "华侨回国定居证", "py": "HQHGDJZ", "wb": "WWLLPNY"},
        {"id": "552", "text": "台湾居民定居证", "py": "TWJMDJZ", "wb": "CINNPNY"},
        {"id": "553", "text": "外国人永久居留证", "py": "WGRYJJLZ", "wb": "QLWYQNQY"},
        {"id": "554", "text": "外国人居留证", "py": "WGRJLZ", "wb": "QLWNQY"},
        {"id": "555", "text": "外国人临时居留证", "py": "WGRLSJLZ", "wb": "QLWJJNQY"},
        {"id": "556", "text": "入籍证书", "py": "RJZS", "wb": "TTYN"},
        {"id": "557", "text": "出籍证书", "py": "CJZS", "wb": "BTYN"},
        {"id": "558", "text": "复籍证书", "py": "FJZS", "wb": "TTYN"},
        {"id": "60", "text": "边境通行证", "py": "BJTXZ", "wb": "LFCTY"},
        {"id": "611", "text": "外籍船员住宿证", "py": "WJCYZSZ", "wb": "QTTKWPY"},
        {"id": "612", "text": "随船工作证", "py": "SCGZZ", "wb": "BTAWY"},
        {"id": "620", "text": "海上值勤证（红色)", "py": "HSZQZ（HS)", "wb": "IHWAY（XQ)"},
        {"id": "621", "text": "海上值勤证（蓝色)", "py": "HSZQZ（LS)", "wb": "IHWAY（AQ)"},
        {"id": "631", "text": "出海船民证", "py": "CHCMZ", "wb": "BITNY"},
        {"id": "633", "text": "出海船舶户口簿", "py": "CHCBHKB", "wb": "BITTYKT"},
        {"id": "634", "text": "出海船舶边防登记簿", "py": "CHCBBFDJB", "wb": "BITTLBWYT"},
        {"id": "635", "text": "搭靠台轮许可证", "py": "DKTLXKZ", "wb": "RTCLYSY"},
        {"id": "636", "text": "台湾居民登陆证", "py": "TWJMDLZ", "wb": "CINNWBY"},
        {"id": "637", "text": "台湾船员登陆证", "py": "TWCYDLZ", "wb": "CITKWBY"},
        {"id": "638", "text": "外国船员登陆证", "py": "WGCYDLZ", "wb": "QLTKWBY"},
        {"id": "639", "text": "对台劳务人员登轮作业证", "py": "DTLWRYDLZYZ", "wb": "CCATWKWLWOY"},
        {"id": "640", "text": "合资船船员登陆证", "py": "HZCCYDLZ", "wb": "WUTTKWBY"},
        {"id": "641", "text": "合资船船员登轮作业证", "py": "HZCCYDLZYZ", "wb": "WUTTKWLWOY"},
        {"id": "642", "text": "粤港澳流动渔民证", "py": "YGALDYMZ", "wb": "TIIIFINY"},
        {"id": "643", "text": "粤港澳临时流动渔民证", "py": "YGALSLDYMZ", "wb": "TIIJJIFINY"},
        {"id": "644", "text": "粤港澳流动渔船户口簿", "py": "YGALDYCHKB", "wb": "TIIIFITYKT"},
        {"id": "645", "text": "航行港澳船舶证明书", "py": "HXGACBZMS", "wb": "TTIITTYJN"},
        {"id": "646", "text": "往来港澳小型船舶查验簿", "py": "WLGAXXCBCYB", "wb": "TGIIIGTTSCT"},
        {"id": "650", "text": "劳务人员登轮作业证", "py": "LWRYDLZYZ", "wb": "ATWKWLWOY"},
        {"id": "711", "text": "边境管理区通行证", "py": "BJGLQTXZ", "wb": "LFTGACTY"},
        {"id": "72", "text": "港澳特区通行证（高官证）", "py": "GATQTXZ（GGZ）", "wb": "IITACTY（YPY）"},
        {"id": "721", "text": "中朝鸭绿江、图们江水文作业证", "py": "ZCYLJ、TMJSWZYZ", "wb": "KFLXI、LWIIYWOY"},
        {"id": "722", "text": "朝中鸭绿江、国们江水文作业证", "py": "CZYLJ、GMJSWZYZ", "wb": "FKLXI、LWIIYWOY"},
        {"id": "723", "text": "中朝流筏固定代表证", "py": "ZCLFGDDBZ", "wb": "KFITLPWGY"},
        {"id": "724", "text": "朝中流筏固定代表证", "py": "CZLFGDDBZ", "wb": "FKITLPWGY"},
        {"id": "725", "text": "中朝鸭绿江、图们江船员证", "py": "ZCYLJ、TMJCYZ", "wb": "KFLXI、LWITKY"},
        {"id": "726", "text": "朝中鸭绿江、图们江船员证", "py": "CZYLJ、TMJCYZ", "wb": "FKLXI、LWITKY"},
        {"id": "727", "text": "中朝边境地区公安总代表证", "py": "ZCBJDQGAZDBZ", "wb": "KFLFFAWPUWGY"},
        {"id": "728", "text": "朝中边境地区公安总代表证", "py": "CZBJDQGAZDBZ", "wb": "FKLFFAWPUWGY"},
        {"id": "729", "text": "中朝边境地区公安副总代表证", "py": "ZCBJDQGAFZDBZ", "wb": "KFLFFAWPGUWGY"},
        {"id": "73", "text": "港澳特区通行证（普通证）", "py": "GATQTXZ（PTZ）", "wb": "IITACTY（UCY）"},
        {"id": "730", "text": "朝中边境地区公安副总代表证", "py": "CZBJDQGAFZDBZ", "wb": "FKLFFAWPGUWGY"},
        {"id": "731", "text": "中朝边境地区公安代表证", "py": "ZCBJDQGADBZ", "wb": "KFLFFAWPWGY"},
        {"id": "732", "text": "朝中边境地区公安代表证", "py": "CZBJDQGADBZ", "wb": "FKLFFAWPWGY"},
        {"id": "733", "text": "中朝边境地区出入境通行证（甲、乙种本）", "py": "ZCBJDQCRJTXZ（J、YZB）", "wb": "KFLFFABTFCTY（L、NTS）"},
        {"id": "734", "text": "朝中边境公务通行证", "py": "CZBJGWTXZ", "wb": "FKLFWTCTY"},
        {"id": "735", "text": "朝中边境住民国境通行证", "py": "CZBJZMGJTXZ", "wb": "FKLFWNLFCTY"},
        {"id": "736", "text": "中蒙边境地区出入境通行证（甲、乙种本）", "py": "ZMBJDQCRJTXZ（J、YZB）", "wb": "KALFFABTFCTY（L、NTS）"},
        {"id": "737", "text": "蒙中边境地区出入境通行证", "py": "MZBJDQCRJTXZ", "wb": "AKLFFABTFCTY"},
        {"id": "738", "text": "中缅边境地区出入境通行证", "py": "ZMBJDQCRJTXZ", "wb": "KXLFFABTFCTY"},
        {"id": "739", "text": "缅甸中国边境通行证", "py": "MDZGBJTXZ", "wb": "XQKLLFCTY"},
        {"id": "74", "text": "港澳证贴纸签注", "py": "GAZTZQZ", "wb": "IIYMXTI"},
        {"id": "740", "text": "云南省边境地区境外边民入出境证", "py": "YNSBJDQJWBMRCJZ", "wb": "FFILFFAFQLNTBFY"},
        {"id": "741", "text": "中尼边境地区出入境通行证", "py": "ZNBJDQCRJTXZ", "wb": "KNLFFABTFCTY"},
        {"id": "742", "text": "尼中边境地区出入境通行证", "py": "NZBJDQCRJTXZ", "wb": "NKLFFABTFCTY"},
        {"id": "743", "text": "中越边境地区出入境通行证", "py": "ZYBJDQCRJTXZ", "wb": "KFLFFABTFCTY"},
        {"id": "744", "text": "越中边境地区出入境通行证", "py": "YZBJDQCRJTXZ", "wb": "FKLFFABTFCTY"},
        {"id": "745", "text": "中老边境地区出入境通行证", "py": "ZLBJDQCRJTXZ", "wb": "KFLFFABTFCTY"},
        {"id": "746", "text": "老中边境地区出入境通行证", "py": "LZBJDQCRJTXZ", "wb": "FKLFFABTFCTY"},
        {"id": "747", "text": "中印边境地区出入境通行证", "py": "ZYBJDQCRJTXZ", "wb": "KQLFFABTFCTY"},
        {"id": "748", "text": "印中边境地区出入境通行证", "py": "YZBJDQCRJTXZ", "wb": "QKLFFABTFCTY"},
        {"id": "75", "text": "大陆证贴纸签注", "py": "DLZTZQZ", "wb": "DBYMXTI"},
        {"id": "76", "text": "台湾居民居留贴纸签注", "py": "TWJMJLTZQZ", "wb": "CINNNQMXTI"},
        {"id": "761", "text": "深圳市过境耕作证", "py": "SZSGJGZZ", "wb": "IFYFFDWY"},
        {"id": "765", "text": "贸易证", "py": "MYZ", "wb": "QJY"},
        {"id": "77", "text": "台湾居民往来贴纸签注", "py": "TWJMWLTZQZ", "wb": "CINNTGMXTI"},
        {"id": "771", "text": "铁路员工证", "py": "TLYGZ", "wb": "QKKAY"},
        {"id": "78", "text": "护照贴纸备注", "py": "HZTZBZ", "wb": "RJMXTI"},
        {"id": "781", "text": "机组人员证", "py": "JZRYZ", "wb": "SXWKY"},
        {"id": "81", "text": "缅甸中国通行证", "py": "MDZGTXZ", "wb": "XQKLCTY"},
        {"id": "82", "text": "云南边境地区境外边民入出境证", "py": "YNBJDQJWBMRCJZ", "wb": "FFLFFAFQLNTBFY"},
        {"id": "91", "text": "朝中边境地区居民过境通行证", "py": "CZBJDQJMGJTXZ", "wb": "FKLFFANNFFCTY"},
        {"id": "92", "text": "鸭绿江、图门江水文作业证", "py": "YLJ、TMJSWZYZ", "wb": "LXI、LUIIYWOY"},
        {"id": "94", "text": "中朝鸭绿江图们江航行船舶船员证", "py": "ZCYLJTMJHXCBCYZ", "wb": "KFLXILWITTTTTKY"},
        {"id": "98", "text": "出境卡", "py": "CJK", "wb": "BFH"},
        {"id": "990", "text": "其他", "py": "QT", "wb": "AW"},
        {"id": "9A", "text": "电子护照塑封膜", "py": "DZHZSFM", "wb": "JBRJUFE"},
        {"id": "A1", "text": "护照影子", "py": "HZYZ", "wb": "RJJB"}
    ],
    'BD_D_BYLA_TZDXDM': [//不予立案通知对象
        {"id": "01", "text": "无控告人或移送单位", "py": "WKGRHYSDW", "wb": "FRTWATUUW"},
        {"id": "02", "text": "控告人", "py": "KGR", "wb": "RTW"},
        {"id": "03", "text": "移送单位", "py": "YSDW", "wb": "TUUW"}
    ],
    'BD_D_BYLA_SQFYQXDM': [//不予立案申请复议期限
        {"id": "1", "text": "三日", "py": "SR", "wb": "DJ"},
        {"id": "2", "text": "七日", "py": "QR", "wb": "AJ"}
    ],
    'BD_D_BYLA_TCLXDM': [//不予立案提出类型
        {"id": "1", "text": "控告", "py": "KG", "wb": "RT"},
        {"id": "2", "text": "移送", "py": "YS", "wb": "TU"}
    ],
    'BD_D_TGFLYZ_FLTKDM': [//提供法律援助法律条款
        {"id": "1", "text": "第三十四条", "py": "DSSST", "wb": "TDFLT"},
        {"id": "2", "text": "第二百六十七条", "py": "DEBLSQT", "wb": "TFDUFAT"}
    ],
    'BD_D_TGFLYZ_ZXDDLXDM': [//提供法律援助
        {"id": "1", "text": "羁押处所", "py": "JYCS", "wb": "LRTR"},
        {"id": "2", "text": "住所", "py": "ZS", "wb": "WR"}
    ],
    'BD_D_BZYHJ_FZLXDM': [//不准予会见犯罪类型
        {"id": "1", "text": "危害国家安全犯罪案件", "py": "WHGJAQFZAJ", "wb": "QPLPPWQLPW"},
        {"id": "2", "text": "恐怖活动犯罪案件", "py": "KBHDFZAJ", "wb": "ANIFQLPW"},
        {"id": "3", "text": "特别重大贿赂犯罪案件", "py": "TBZDHLFZAJ", "wb": ""}
    ],
    'BD_D_DBZ_PZJDDM': [//批准决定
        {"id": "1", "text": "批准", "py": "PZ", "wb": "RU"},
        {"id": "2", "text": "决定", "py": "JD", "wb": "UP"}
    ],
    'BD_D_JSJZ_JSJZHZDJS': [//监视居住
        {"id": "1", "text": "监视居住", "py": "", "wb": ""},
        {"id": "2", "text": "指定居所监视居住", "py": "", "wb": ""}
    ],
    'GA_D_XSAJRSQZCSDM': [//强制措施
        {"id": "1", "text": "拘传", "py": "JC", "wb": "RW"},
        {"id": "2", "text": "刑事拘留", "py": "XSJL", "wb": "GGRQ"},
        {"id": "3", "text": "取保候审", "py": "QBHS", "wb": "BWWP"},
        {"id": "4", "text": "监视居住", "py": "JSJZ", "wb": "JPNW"},
        {"id": "5", "text": "逮捕", "py": "DB", "wb": "VR"}
    ],
    'BD_D_BYSFBG_GRHDWLXDM': [//个人或单位
        {"id": "1", "text": "个人", "py": "GR", "wb": "WW"},
        {"id": "2", "text": "单位", "py": "DW", "wb": "UW"}
    ],
    'BD_D_BYSFBG_JYHSQLXDM': [//建议或申请
        {"id": "1", "text": "建议", "py": "JY", "wb": "VY"},
        {"id": "2", "text": "申请", "py": "SQ", "wb": "JY"}
    ],
    'BD_D_BYSFBG_SFHBGQZCSLBDM': [//是否会变更强制措施类别
        {"id": "1", "text": "释放", "py": "SF", "wb": "TY"},
        {"id": "2", "text": "变更强制措施", "py": "BGQZCS", "wb": "YGXRRY"}
    ],
    'GA_D_RSQZCSDM': [//强制措施
        {"id": "1", "text": "拘传", "py": "", "wb": ""},
        {"id": "2", "text": "刑事拘留", "py": "", "wb": ""},
        {"id": "3", "text": "取保候审", "py": "", "wb": ""},
        {"id": "4", "text": "监视居住", "py": "", "wb": ""},
        {"id": "5", "text": "逮捕", "py": "", "wb": ""}
    ],
    'BD_D_CX_FLTK': [//传讯法律条款
        {"id": "1", "text": "第六十九条", "py": "", "wb": ""},
        {"id": "2", "text": "第七十五条", "py": "", "wb": ""}
    ],
    'BD_D_JDYJ_ZPPQLXDM': [//指派类型
        {"id": "1", "text": "指派", "py": "", "wb": ""},
        {"id": "2", "text": "聘请", "py": "", "wb": ""}
    ],
    'BD_D_JSZC_CSZLDM': [//措施种类
        {"id": "1", "text": "记录监控", "py": "JLJK", "wb": "YVJR"},
        {"id": "2", "text": "行踪监控", "py": "XZJK", "wb": "TKJR"},
        {"id": "3", "text": "通讯监控", "py": "TXJK", "wb": "CYJR"},
        {"id": "4", "text": "场所监控", "py": "CSJK", "wb": "FRJR"}
    ],
    'BD_D_XZDJCC_FLTKDM': [//协助冻结
        {"id": "1", "text": "第一百四十二条", "py": "DYBSSET", "wb": "TGDLFFT"},
        {"id": "2", "text": "第一百四十三条", "py": "DYBSSST", "wb": "TGDLFDT"}
    ],
    'BD_D_BGJYQX_PZHJDJGDM': [
        {"id": "1", "text": "延长", "py": "YZ", "wb": "TT"},
        {"id": "2", "text": "重新计算", "py": "ZXJS", "wb": "TUYT"},
        {"id": "4", "text": "不计算", "py": "BJS", "wb": "GYT"},
        {"id": "5", "text": "停止计算", "py": "TZJS", "wb": "WHYT"},
        {"id": "6", "text": "恢复计算", "py": "HFJS", "wb": "NTYT"},
        {"id": "7", "text": "开始计算", "py": "KSJS", "wb": "GVYT"}
    ],
    'BD_D_BGJYQX_JYQXBGYYDM': [
        {"id": "1", "text": "依法延长拘留时间", "py": "YFYZJLSJ", "wb": "WITTRQJU"},
        {"id": "2", "text": "依法延长侦查羁押期限、审查起诉期限、审理期限", "py": "YFYZZCJYQX、SCQSQX、SLQX", "wb": "ITTWSLRAB、PSFYAB、PGAB"},
        {
            "id": "3",
            "text": "发现犯罪嫌疑人另有重要罪行，重新计算侦查羁押期限",
            "py": "FXFZXYRLYZYZX，ZXJSZCJYQX",
            "wb": "NGQLVXWKDTSLT，TUYTWSLRAB"
        },
        {"id": "4", "text": "因犯罪嫌疑人身份不明不计算侦查羁押期限", "py": "YFZXYRSFBMBJSZCJYQX", "wb": "LQLVXWTWGJGYTWSLRAB"},
        {"id": "5", "text": "查清身份开始计算侦查羁押期限", "py": "CQSFKSJSZCJYQX", "wb": "ITWGVYTWSLRAB"},
        {"id": "6", "text": "适用简易程序审理的案件转为第一审普通程序", "py": "SYJYCXSLDAJZWDYSPTCX", "wb": "ETJTYPGRPWLOTGPUCTY"},
        {"id": "7", "text": "因精神病鉴定停止计算羁押期限", "py": "YJSBJDTZJSJYQX", "wb": "OPUJPWHYTLRAB"},
        {"id": "8", "text": "因精神病鉴定恢复计算羁押期限", "py": "YJSBJDHFJSJYQX", "wb": "LOPUJPNTYTLRAB"}
    ],
    'BD_D_BGJYQX_PZHJDLXDM': [
        {"id": "1", "text": "批准", "py": "PZ", "wb": "RU"},
        {"id": "2", "text": "决定", "py": "JD", "wb": "UP"}
    ],
    'BD_D_BAXZ_QWWTDM': [//前往委托
        {"id": "1", "text": "前往你管辖区", "py": "QW", "wb": "UT"},
        {"id": "2", "text": "委托你局代为", "py": "WT", "wb": "TR"}
    ],
    'BD_D_JSJZ_FLTK': [//监视居住法律条款
        {"id":"1","text":"七十二","py":"QSE","wb":""},
        {"id":"2","text":"七十二、七十三","py":"QSE、QSS","wb":""}
    ],
    'BD_D_KSSDM':[//看守所代码
        {"id":"510000110600","text":"四川省看守所","py":"","wb":""},
        {"id":"510100040600","text":"四川省成都市看守所","py":"","wb":""},
        {"id":"510112050000","text":"四川省成都市龙泉驿区看守所","py":"","wb":""},
        {"id":"510113050000","text":"四川省成都市青白江区看守所","py":"","wb":""},
        {"id":"510121030000","text":"四川省成都市金堂县看守所","py":"","wb":""},
        {"id":"510122030000","text":"四川省成都市双流县看守所","py":"","wb":""},
        {"id":"510123050000","text":"四川省成都市温江区看守所","py":"","wb":""},
        {"id":"510124030000","text":"四川省成都市郫县看守所","py":"","wb":""},
        {"id":"510125050000","text":"四川省成都市新都区看守所","py":"","wb":""},
        {"id":"510129030000","text":"四川省成都市大邑县看守所","py":"","wb":""},
        {"id":"510131030000","text":"四川省成都市蒲江县看守所","py":"","wb":""},
        {"id":"510132030000","text":"四川省成都市新津县看守所","py":"","wb":""},
        {"id":"510180190000","text":"四川省成都市简阳市看守所","py":"","wb":""},
        {"id":"510181030000","text":"四川省成都市都江堰市看守所","py":"","wb":""},
        {"id":"510182030000","text":"四川省成都市彭州市看守所","py":"","wb":""},
        {"id":"510183030000","text":"四川省成都市邛崃市看守所","py":"","wb":""},
        {"id":"510184030000","text":"四川省成都市崇州市看守所","py":"","wb":""},
        {"id":"510300280000","text":"四川省自贡市看守所","py":"","wb":""},
        {"id":"510311150000","text":"四川省自贡市沿滩区看守所","py":"","wb":""},
        {"id":"510321170000","text":"四川省自贡市荣县看守所","py":"","wb":""},
        {"id":"510322150000","text":"四川省自贡市富顺县公安局看守所","py":"","wb":""},
        {"id":"510400130000","text":"四川省攀枝花市看守所","py":"","wb":""},
        {"id":"510421090000","text":"四川省攀枝花市米易县看守所","py":"","wb":""},
        {"id":"510422100000","text":"四川省攀枝花市盐边县看守所","py":"","wb":""},
        {"id":"510500200000","text":"四川省泸州市看守所","py":"","wb":""},
        {"id":"510521180000","text":"四川省泸州市泸县看守所","py":"","wb":""},
        {"id":"510522150000","text":"四川省泸州市合江县看守所","py":"","wb":""},
        {"id":"510524130000","text":"四川省泸州市叙永县看守所","py":"","wb":""},
        {"id":"510525160000","text":"四川省泸州市古蔺县看守所","py":"","wb":""},
        {"id":"510603120000","text":"四川省德阳市旌阳区看守所","py":"","wb":""},
        {"id":"510623180000","text":"四川省德阳市中江县看守所","py":"","wb":""},
        {"id":"510626140000","text":"四川省德阳市罗江县看守所","py":"","wb":""},
        {"id":"510681150000","text":"四川省广汉市看守所","py":"","wb":""},
        {"id":"510682620000","text":"四川省什邡市公安局看守所","py":"","wb":""},
        {"id":"510683150000","text":"四川省绵竹市公安局看守所","py":"","wb":""},
        {"id":"510700140000","text":"四川省绵阳市看守所","py":"","wb":""},
        {"id":"510722140000","text":"四川省绵阳市三台县看守所","py":"","wb":""},
        {"id":"510723140000","text":"四川省绵阳市盐亭县看守所","py":"","wb":""},
        {"id":"510724080000","text":"四川省绵阳市安县公安局看守所","py":"","wb":""},
        {"id":"510725140000","text":"四川省绵阳市梓潼县公安局看守所","py":"","wb":""},
        {"id":"510726070000","text":"四川省绵阳市北川羌族自治县看守所","py":"","wb":""},
        {"id":"510727160000","text":"四川省绵阳市平武县公安局看守所","py":"","wb":""},
        {"id":"510781170000","text":"四川省江油市看守所","py":"","wb":""},
        {"id":"510800200000","text":"四川省广元市看守所","py":"","wb":""},
        {"id":"510821150000","text":"四川省广元市旺苍县看守所","py":"","wb":""},
        {"id":"510822140000","text":"四川省广元市青川县看守所","py":"","wb":""},
        {"id":"510823160000","text":"四川省广元市剑阁县公安局看守所","py":"","wb":""},
        {"id":"510824190000","text":"四川省广元市苍溪县公安局看守所","py":"","wb":""},
        {"id":"510900210000","text":"四川省遂宁市看守所","py":"","wb":""},
        {"id":"510921140000","text":"四川省遂宁市蓬溪县公安局看守所","py":"","wb":""},
        {"id":"510922150000","text":"四川省遂宁市射洪县公安局看守所","py":"","wb":""},
        {"id":"510923150000","text":"四川省遂宁市大英县看守所","py":"","wb":""},
        {"id":"511000230000","text":"四川省内江市看守所","py":"","wb":""},
        {"id":"511011180000","text":"四川省内江市公安局东兴区分局看守所","py":"","wb":""},
        {"id":"511024180000","text":"四川省内江市威远县公安局看守所","py":"","wb":""},
        {"id":"511025180000","text":"四川省内江市资中县看守所","py":"","wb":""},
        {"id":"511028120000","text":"四川省内江市隆昌县公安局看守所","py":"","wb":""},
        {"id":"511100420000","text":"四川省乐山市看守所","py":"","wb":""},
        {"id":"511111110000","text":"四川省乐山市沙湾区看守所","py":"","wb":""},
        {"id":"511112130000","text":"四川省乐山市五通桥区看守所","py":"","wb":""},
        {"id":"511113120000","text":"四川省乐山市金口河区看守所","py":"","wb":""},
        {"id":"511123170000","text":"四川省乐山市犍为县看守所","py":"","wb":""},
        {"id":"511124140000","text":"四川省乐山市井研县看守所","py":"","wb":""},
        {"id":"511126140000","text":"四川省乐山市夹江县看守所","py":"","wb":""},
        {"id":"511129100000","text":"四川省乐山市沐川县看守所","py":"","wb":""},
        {"id":"511132180000","text":"四川省乐山市峨边彝族自治县看守所","py":"","wb":""},
        {"id":"511133110000","text":"四川省乐山市马边彝族自治县看守所","py":"","wb":""},
        {"id":"511181160000","text":"四川省峨眉山市看守所","py":"","wb":""},
        {"id":"511300230000","text":"四川省南充市看守所","py":"","wb":""},
        {"id":"511321190000","text":"四川省南充市南部县看守所","py":"","wb":""},
        {"id":"511322180000","text":"四川省南充市营山县看守所","py":"","wb":""},
        {"id":"511323160000","text":"四川省南充市蓬安县看守所","py":"","wb":""},
        {"id":"511324160000","text":"四川省南充市仪陇县看守所","py":"","wb":""},
        {"id":"511325180000","text":"四川省南充市西充县看守所","py":"","wb":""},
        {"id":"511381170000","text":"四川省南充市阆中市看守所","py":"","wb":""},
        {"id":"511400190100","text":"四川省眉山市看守所","py":"","wb":""},
        {"id":"511403170000","text":"四川省眉山市公安局彭山区分局看守所","py":"","wb":""},
        {"id":"511421100000","text":"四川省眉山市仁寿县看守所","py":"","wb":""},
        {"id":"511423130000","text":"四川省眉山市洪雅县看守所","py":"","wb":""},
        {"id":"511424140000","text":"四川省眉山市丹棱县看守所","py":"","wb":""},
        {"id":"511425150000","text":"四川省眉山市青神县看守所","py":"","wb":""},
        {"id":"511500290000","text":"四川省宜宾市看守所","py":"","wb":""},
        {"id":"511503170000","text":"四川省宜宾市南溪区看守所","py":"","wb":""},
        {"id":"511521150000","text":"四川省宜宾市宜宾县看守所","py":"","wb":""},
        {"id":"511523180000","text":"四川省宜宾市江安县看守所","py":"","wb":""},
        {"id":"511524140000","text":"四川省宜宾市长宁县看守所","py":"","wb":""},
        {"id":"511525210000","text":"四川省宜宾市高县看守所","py":"","wb":""},
        {"id":"511526120000","text":"四川省宜宾市珙县公安局看守所","py":"","wb":""},
        {"id":"511527130000","text":"四川省宜宾市筠连县公安局看守所","py":"","wb":""},
        {"id":"511528150000","text":"四川省宜宾市兴文县看守所","py":"","wb":""},
        {"id":"511529140000","text":"四川省宜宾市屏山县看守所","py":"","wb":""},
        {"id":"511602300000","text":"四川省广安市广安区看守所","py":"","wb":""},
        {"id":"511621300000","text":"四川省广安市岳池县看守所","py":"","wb":""},
        {"id":"511622300000","text":"四川省广安市武胜县看守所","py":"","wb":""},
        {"id":"511623300000","text":"四川省广安市邻水县看守所","py":"","wb":""},
        {"id":"511681300000","text":"四川省华蓥市看守所","py":"","wb":""},
        {"id":"511700210000","text":"四川省达州市公安局看守所","py":"","wb":""},
        {"id":"511722150000","text":"四川省达州市宣汉县看守所","py":"","wb":""},
        {"id":"511723140000","text":"四川省达州市开江县公安局看守所","py":"","wb":""},
        {"id":"511724120000","text":"四川省达州市大竹县公安局看守所","py":"","wb":""},
        {"id":"511725210000","text":"四川省达州市渠县公安局看守所","py":"","wb":""},
        {"id":"511781170000","text":"四川省达州市万源市公安局看守所","py":"","wb":""},
        {"id":"511800210000","text":"四川省雅安市看守所","py":"","wb":""},
        {"id":"511803150000","text":"四川省雅安市名山区看守所","py":"","wb":""},
        {"id":"511822110000","text":"四川省雅安市荥经县公安局看守所","py":"","wb":""},
        {"id":"511823130000","text":"四川省雅安市汉源县看守所","py":"","wb":""},
        {"id":"511824140000","text":"四川省雅安市石棉县看守所","py":"","wb":""},
        {"id":"511825140000","text":"四川省雅安市天全县公安局看守所","py":"","wb":""},
        {"id":"511826080000","text":"四川省雅安市芦山县看守所","py":"","wb":""},
        {"id":"511827120000","text":"四川省雅安市宝兴县看守所","py":"","wb":""},
        {"id":"511900260000","text":"四川省巴中市公安局看守所","py":"","wb":""},
        {"id":"511921130000","text":"四川省巴中市通江县公安局看守所","py":"","wb":""},
        {"id":"511922120000","text":"四川省巴中市南江县公安局看守所","py":"","wb":""},
        {"id":"511923070000","text":"四川省巴中市平昌县公安局看守所","py":"","wb":""},
        {"id":"512000180000","text":"四川省资阳市看守所","py":"","wb":""},
        {"id":"512021170000","text":"四川省资阳市安岳县看守所","py":"","wb":""},
        {"id":"512022150000","text":"四川省资阳市乐至县看守所","py":"","wb":""},
        {"id":"512081190000","text":"四川省简阳市看守所","py":"","wb":""},
        {"id":"513200240000","text":"四川省阿坝州看守所","py":"","wb":""},
        {"id":"513221120000","text":"四川省阿坝州汶川县公安局看守所","py":"","wb":""},
        {"id":"513222070000","text":"四川省阿坝州理县公安局看守所","py":"","wb":""},
        {"id":"513223080000","text":"四川省阿坝州茂县看守所","py":"","wb":""},
        {"id":"513224070000","text":"四川省阿坝州松潘县公安局看守所","py":"","wb":""},
        {"id":"513225070000","text":"四川省阿坝州九寨沟县看守所","py":"","wb":""},
        {"id":"513226260000","text":"四川省阿坝州金川县看守所","py":"","wb":""},
        {"id":"513227070000","text":"四川省阿坝州小金县看守所","py":"","wb":""},
        {"id":"513228070000","text":"四川省阿坝州黑水县公安局看守所","py":"","wb":""},
        {"id":"513229100000","text":"四川省阿坝州马尔康县公安局看守所","py":"","wb":""},
        {"id":"513230070000","text":"四川省阿坝州壤塘县看守所","py":"","wb":""},
        {"id":"513231200000","text":"四川省阿坝州阿坝县公安局看守所","py":"","wb":""},
        {"id":"513232110000","text":"四川省阿坝州若尔盖县公安局看守所","py":"","wb":""},
        {"id":"513233070000","text":"四川省阿坝州红原县公安局看守所","py":"","wb":""},
        {"id":"513300180000","text":"四川省甘孜藏族自治州看守所","py":"","wb":""},
        {"id":"513321110000","text":"四川省甘孜藏族自治州康定县公安局看守所","py":"","wb":""},
        {"id":"513322070000","text":"四川省甘孜藏族自治州泸定县公安局看守所","py":"","wb":""},
        {"id":"513323100000","text":"四川省甘孜藏族自治州丹巴县看守所","py":"","wb":""},
        {"id":"513324090000","text":"四川省甘孜藏族自治州九龙县看守所","py":"","wb":""},
        {"id":"513326220000","text":"四川省甘孜藏族自治州道孚县公安局看守所","py":"","wb":""},
        {"id":"513327110000","text":"四川省甘孜藏族自治州炉霍县公安局看守所","py":"","wb":""},
        {"id":"513328060000","text":"四川省甘孜藏族自治州甘孜县公安局看守所","py":"","wb":""},
        {"id":"513329150000","text":"四川省甘孜藏族自治州新龙县公安局看守所","py":"","wb":""},
        {"id":"513330090000","text":"四川省甘孜藏族自治州德格县公安局看守所","py":"","wb":""},
        {"id":"513331100000","text":"四川省甘孜藏族自治州白玉县公安局看守所","py":"","wb":""},
        {"id":"513332110000","text":"四川省甘孜藏族自治州石渠县公安局看守所","py":"","wb":""},
        {"id":"513333140000","text":"四川省甘孜藏族自治州色达县公安局色达县看守所","py":"","wb":""},
        {"id":"513334160000","text":"四川省甘孜藏族自治州理塘县公安局看守所","py":"","wb":""},
        {"id":"513335170000","text":"四川省甘孜藏族自治州巴塘县公安局看守所","py":"","wb":""},
        {"id":"513337070000","text":"四川省甘孜藏族自治州稻城县公安局看守所","py":"","wb":""},
        {"id":"513338090000","text":"四川省甘孜藏族自治州得荣县看守所","py":"","wb":""},
        {"id":"513400290000","text":"四川省凉山彝族自治州看守所","py":"","wb":""},
        {"id":"513401190000","text":"四川省西昌市看守所","py":"","wb":""},
        {"id":"513422110000","text":"四川省凉山彝族自治州木里藏族自治县看守所","py":"","wb":""},
        {"id":"513423130000","text":"四川省凉山彝族自治州盐源县看守所","py":"","wb":""},
        {"id":"513424180000","text":"四川省凉山彝族自治州德昌县看守所","py":"","wb":""},
        {"id":"513425150000","text":"四川省凉山彝族自治州会理县看守所","py":"","wb":""},
        {"id":"513426140000","text":"四川省凉山彝族自治州会东县看守所","py":"","wb":""},
        {"id":"513427070000","text":"四川省凉山彝族自治州宁南县看守所","py":"","wb":""},
        {"id":"513428150000","text":"四川省凉山彝族自治州普格县看守所","py":"","wb":""},
        {"id":"513429110000","text":"四川省凉山彝族自治州布拖县看守所","py":"","wb":""},
        {"id":"513430060000","text":"四川省凉山彝族自治州金阳县看守所","py":"","wb":""},
        {"id":"513431120000","text":"四川省凉山彝族自治州昭觉县看守所","py":"","wb":""},
        {"id":"513432130000","text":"四川省凉山彝族自治州喜德县看守所","py":"","wb":""},
        {"id":"513433090000","text":"四川省凉山彝族自治州冕宁县看守所","py":"","wb":""},
        {"id":"513434120000","text":"四川省凉山彝族自治州越西县看守所","py":"","wb":""},
        {"id":"513435090000","text":"四川省凉山彝族自治州甘洛县看守所","py":"","wb":""},
        {"id":"513436130000","text":"四川省凉山彝族自治州美姑县看守所","py":"","wb":""},
        {"id":"513437100000","text":"四川省凉山彝族自治州雷波县看守所","py":"","wb":""},
        {"id":"801001D10000","text":"成都铁路公安处看守所","py":"","wb":""},
        {"id":"801002D10000","text":"重庆铁路公安处看守所","py":"","wb":""},
        {"id":"801003D10000","text":"贵阳铁路公安处看守所","py":"","wb":""},
        {"id":"801004D10000","text":"西昌铁路公安处看守所","py":"","wb":""}
    ],
    'BD_D_WCNRFDDLR_ZRHBHRLXDM':[//证人、被害人
        {"id":"1","text":"证人","py":"","wb":""},
        {"id":"2","text":"被害人","py":"","wb":""}
    ],
    'BD_D_WCNRFDDLR_XWLXDM':[//询问
        {"id":"1","text":"询问","py":"","wb":""},
        {"id":"2","text":"讯问","py":"","wb":""}
    ],
    'BD_D_HJFZXYR_RSCSDM':[//会见犯罪嫌疑人人身措施代码
        {"id":"2","text":"拘留","py":"JL","wb":"RQ"},
        {"id":"4","text":"监视居住","py":"JSJZ","wb":"JPNW"},
        {"id":"5","text":"逮捕","py":"DB","wb":"VR"}
    ],
    'BD_D_SWTZ_RYJSDM':[//死亡通知人员角色代码
        {"id":"1","text":"嫌疑人","py":"","wb":""},
        {"id":"2","text":"被告人","py":"","wb":""},
        {"id":"3","text":"罪犯","py":"","wb":""}
    ]
};

//树形字典
var flwsTreeDictObj = {
    'KX_D_ZYLBDM': [//职业类别代码
        {
            "id": "ROOT", "text": "职业类别代码", "iconCls": "icon-treeroot1", "children": [
            {
                "id": "000",
                "text": "国家机关、党群组织、企业、事业单位负责人",
                "py": "GJJG、DQZZ、QY、SYDWFZR",
                "wb": "LPSU、IVXX、WO、GOUWQGW",
                "state": "closed",
                "children": [
                    {
                        "id": "010",
                        "text": "中国共产党中央委员会和地方各级组织负责人",
                        "py": "ZGGCDZYWYHHDFGJZZFZR",
                        "wb": "KLAUIKMTKWTFYTXXXQGW"
                    },
                    {
                        "id": "020",
                        "text": "国家机关及其工作机构负责人",
                        "py": "GJJGJQGZJGFZR",
                        "wb": "LPSUEAAWSSQGW",
                        "state": "closed",
                        "children": [
                            {"id": "021", "text": "国家权力机关及其工作机构负责人", "py": "GJQLJGJQGZJGFZR", "wb": "LPSLSUEAAWSSQGW"},
                            {"id": "022", "text": "人民政府及其工作机构负责人", "py": "RMZFJQGZJGFZR", "wb": "WNGYEAAWSSQGW"},
                            {"id": "023", "text": "人民法院负责人", "py": "RMFYFZR", "wb": "WNIBQGW"},
                            {"id": "024", "text": "人民检察院负责人", "py": "RMJCYFZR", "wb": "WNSPBQGW"},
                            {"id": "025", "text": "国家行政机关及其工作机构负责人", "py": "GJXZJGJQGZJGFZR", "wb": "LPTGSUEAAWSSQGW"},
                            {"id": "029", "text": "其他国家机关及其工作机构负责人", "py": "QTGJJGJQGZJGFZR", "wb": "AWLPSUEAAWSSQGW"}
                        ]
                    },
                    {
                        "id": "030",
                        "text": "民主党派和社会团体及其工作机构负责人",
                        "py": "MZDPHSHTTJQGZJGFZR",
                        "wb": "NYIITPWLWEAAWSSQGW",
                        "state": "closed",
                        "children": [
                            {"id": "031", "text": "民主党派负责人", "py": "MZDPFZR", "wb": "NYIIQGW"},
                            {
                                "id": "032",
                                "text": "工会、共青团、妇联、其他人民团体及其工作机构负责人",
                                "py": "GH、GQT、FL、QTRMTTJQGZJGFZR",
                                "wb": "AW、AGL、VB、AWWNLWEAAWSSQGW"
                            },
                            {"id": "033", "text": "群众自治组织负责人", "py": "QZZZZZFZR", "wb": "VWTIXXQGW"},
                            {"id": "039", "text": "其他社会团体及其工作机构负责人", "py": "QTSHTTJQGZJGFZR", "wb": "AWPWLWEAAWSSQGW"}
                        ]
                    },
                    {
                        "id": "040",
                        "text": "事业单位负责人",
                        "py": "SYDWFZR",
                        "wb": "GOUWQGW",
                        "state": "closed",
                        "children": [
                            {"id": "041", "text": "教育教学单位负责人", "py": "JYJXDWFZR", "wb": "FYFIUWQGW"},
                            {"id": "042", "text": "卫生单位负责人", "py": "WSDWFZR", "wb": "BTUWQGW"},
                            {"id": "043", "text": "科研单位负责人", "py": "KYDWFZR", "wb": "TDUWQGW"},
                            {"id": "049", "text": "其他事业单位负责人", "py": "QTSYDWFZR", "wb": "AWGOUWQGW"}
                        ]
                    },
                    {"id": "050", "text": "企业负责人", "py": "QYFZR", "wb": "WOQGW"}
                ]
            },
            {
                "id": "100", "text": "专业技术人员", "py": "ZYJSRY", "wb": "FORSWK", "state": "closed", "children": [
                {
                    "id": "110", "text": "科学研究人员", "py": "KXYJRY", "wb": "TIDPWK", "state": "closed", "children": [
                    {"id": "111", "text": "哲学研究人员", "py": "ZXYJRY", "wb": "RIDPWK"},
                    {"id": "112", "text": "经济学研究人员", "py": "JJXYJRY", "wb": "XIIDPWK"},
                    {"id": "113", "text": "法学研究人员", "py": "FXYJRY", "wb": "IIDPWK"},
                    {"id": "114", "text": "社会学研究人员", "py": "SHXYJRY", "wb": "PWIDPWK"},
                    {"id": "115", "text": "教育科学研究人员", "py": "JYKXYJRY", "wb": "FYTIDPWK"},
                    {"id": "116", "text": "文学、艺术研究人员", "py": "WX、YSYJRY", "wb": "YI、ASDPWK"},
                    {"id": "117", "text": "图书馆学、情报学研究人员", "py": "TSGX、QBXYJRY", "wb": "LNQI、NRIDPWK"},
                    {"id": "118", "text": "历史学研究人员", "py": "LSXYJRY", "wb": "DKIDPWK"},
                    {"id": "119", "text": "管理科学研究人员", "py": "GLKXYJRY", "wb": "TGTIDPWK"}
                ]
                },
                {
                    "id": "120", "text": "科学研究人员", "py": "KXYJRY", "wb": "TIDPWK", "state": "closed", "children": [
                    {"id": "121", "text": "数学研究人员", "py": "SXYJRY", "wb": "OIDPWK"},
                    {"id": "122", "text": "物理学研究人员", "py": "WLXYJRY", "wb": "TGIDPWK"},
                    {"id": "123", "text": "化学研究人员", "py": "HXYJRY", "wb": "WIDPWK"},
                    {"id": "124", "text": "天文学研究人员", "py": "TWXYJRY", "wb": "GYIDPWK"},
                    {"id": "125", "text": "地球科学研究人员", "py": "DQKXYJRY", "wb": "FGTIDPWK"},
                    {"id": "126", "text": "生物科学研究人员", "py": "SWKXYJRY", "wb": "TTTIDPWK"},
                    {"id": "127", "text": "农业科学研究人员", "py": "NYKXYJRY", "wb": "POTIDPWK"},
                    {"id": "128", "text": "医学研究人员", "py": "YXYJRY", "wb": "AIDPWK"},
                    {"id": "129", "text": "其他科学研究人员", "py": "QTKXYJRY", "wb": "AWTIDPWK"}
                ]
                },
                {
                    "id": "130", "text": "工程技术人员", "py": "GCJSRY", "wb": "ATRSWK", "state": "closed", "children": [
                    {"id": "131", "text": "地质勘探工程技术人员", "py": "DZKTGCJSRY", "wb": "FRARATRSWK"},
                    {"id": "132", "text": "测绘工程技术人员", "py": "CHGCJSRY", "wb": "IXATRSWK"},
                    {"id": "133", "text": "矿山工程技术人员", "py": "KSGCJSRY", "wb": "DMATRSWK"},
                    {"id": "134", "text": "石油工程技术人员", "py": "SYGCJSRY", "wb": "DIATRSWK"},
                    {"id": "135", "text": "冶金工程技术人员", "py": "YJGCJSRY", "wb": "UQATRSWK"},
                    {"id": "136", "text": "化工工程技术人员", "py": "HGGCJSRY", "wb": "WAATRSWK"},
                    {"id": "137", "text": "机械工程技术人员", "py": "JXGCJSRY", "wb": "SSATRSWK"},
                    {"id": "138", "text": "兵器工程技术人员", "py": "BQGCJSRY", "wb": "RKATRSWK"},
                    {"id": "139", "text": "航空工程技术人员", "py": "HKGCJSRY", "wb": "TPATRSWK"}
                ]
                },
                {
                    "id": "140", "text": "工程技术人员", "py": "GCJSRY", "wb": "ATRSWK", "state": "closed", "children": [
                    {"id": "141", "text": "航天工程技术人员", "py": "HTGCJSRY", "wb": "TGATRSWK"},
                    {"id": "142", "text": "电子工程技术人员", "py": "DZGCJSRY", "wb": "JBATRSWK"},
                    {"id": "143", "text": "通讯工程技术人员", "py": "TXGCJSRY", "wb": "CYATRSWK"},
                    {"id": "144", "text": "计算机与应用工程技术人员", "py": "JSJYYYGCJSRY", "wb": "YTSGYEATRSWK"},
                    {"id": "145", "text": "电器工程技术人员", "py": "DQGCJSRY", "wb": "JKATRSWK"},
                    {"id": "146", "text": "电力工程技术人员", "py": "DLGCJSRY", "wb": "JLATRSWK"},
                    {"id": "147", "text": "邮政工程技术人员", "py": "YZGCJSRY", "wb": "MGATRSWK"},
                    {"id": "148", "text": "广播、电影、电视工程技术人员", "py": "GB、DY、DSGCJSRY", "wb": "YR、JJ、JPATRSWK"},
                    {"id": "149", "text": "交通工程技术人员", "py": "JTGCJSRY", "wb": "UCATRSWK"}
                ]
                },
                {
                    "id": "150", "text": "工程技术人员", "py": "GCJSRY", "wb": "ATRSWK", "state": "closed", "children": [
                    {"id": "151", "text": "民用航空工程技术人员", "py": "MYHKGCJSRY", "wb": "NETPATRSWK"},
                    {"id": "152", "text": "铁路工程技术人员", "py": "TLGCJSRY", "wb": "QKATRSWK"},
                    {"id": "153", "text": "建筑工程技术人员", "py": "JZGCJSRY", "wb": "VTATRSWK"},
                    {"id": "154", "text": "建材工程技术人员", "py": "JCGCJSRY", "wb": "VSATRSWK"},
                    {"id": "155", "text": "林业工程技术人员", "py": "LYGCJSRY", "wb": "SOATRSWK"},
                    {"id": "156", "text": "水利工程技术人员", "py": "SLGCJSRY", "wb": "ITATRSWK"},
                    {"id": "157", "text": "海洋工程技术人员", "py": "HYGCJSRY", "wb": "IIATRSWK"},
                    {"id": "158", "text": "水产工程技术人员", "py": "SCGCJSRY", "wb": "IUATRSWK"},
                    {"id": "159", "text": "纺织工程技术人员", "py": "FZGCJSRY", "wb": "XXATRSWK"}
                ]
                },
                {
                    "id": "160", "text": "工程技术人员", "py": "GCJSRY", "wb": "ATRSWK", "state": "closed", "children": [
                    {"id": "161", "text": "食品工程技术人员", "py": "SPGCJSRY", "wb": "WKATRSWK"},
                    {"id": "162", "text": "气象工程技术人员", "py": "QXGCJSRY", "wb": "RQATRSWK"},
                    {"id": "163", "text": "地震工程技术人员", "py": "DZGCJSRY", "wb": "FFATRSWK"},
                    {"id": "164", "text": "环境保护工程技术人员", "py": "HJBHGCJSRY", "wb": "GFWRATRSWK"},
                    {"id": "165", "text": "安全工程技术人员", "py": "AQGCJSRY", "wb": "PWATRSWK"},
                    {"id": "166", "text": "标准化、计量、质量工程技术人员", "py": "BZH、JL、ZLGCJSRY", "wb": "SUW、YJ、RJATRSWK"},
                    {"id": "167", "text": "管理（工业）工程技术人员", "py": "GL（GY）GCJSRY", "wb": "TG（AO）ATRSWK"},
                    {"id": "168", "text": "其他工程技术人员", "py": "QTGCJSRY", "wb": "AWATRSWK"}
                ]
                },
                {
                    "id": "170", "text": "农业技术人员", "py": "NYJSRY", "wb": "PORSWK", "state": "closed", "children": [
                    {"id": "171", "text": "土壤肥料技术人员", "py": "TRFLJSRY", "wb": "FFEORSWK"},
                    {"id": "172", "text": "植物保护技术人员", "py": "ZWBHJSRY", "wb": "STWRRSWK"},
                    {"id": "173", "text": "园林技术人员", "py": "YLJSRY", "wb": "LSRSWK"},
                    {"id": "174", "text": "作物遗传育种栽培技术人员", "py": "ZWYCYZZPJSRY", "wb": "WTKWYTFFRSWK"},
                    {"id": "175", "text": "兽医、兽药技术人员", "py": "SY、SYJSRY", "wb": "UA、UARSWK"},
                    {"id": "176", "text": "畜牧与草业技术人员", "py": "CMYCYJSRY", "wb": "YTGAORSWK"},
                    {"id": "179", "text": "其他农业技术人员", "py": "QTNYJSRY", "wb": "AWPORSWK"}
                ]
                },
                {
                    "id": "180",
                    "text": "飞机和船舶技术人员",
                    "py": "FJHCBJSRY",
                    "wb": "NSTTTRSWK",
                    "state": "closed",
                    "children": [
                        {"id": "181", "text": "飞行人员和领航人员", "py": "FXRYHLHRY", "wb": "NTWKTWTWK"},
                        {"id": "182", "text": "船舶指挥和引航人员", "py": "CBZHHYHRY", "wb": "TTRRTXTWK"},
                        {"id": "189", "text": "其他飞机和船舶技术人员", "py": "QTFJHCBJSRY", "wb": "AWNSTTTRSWK"}
                    ]
                },
                {
                    "id": "190",
                    "text": "卫生专业技术人员",
                    "py": "WSZYJSRY",
                    "wb": "BTFORSWK",
                    "state": "closed",
                    "children": [
                        {"id": "191", "text": "西医医师", "py": "XYYS", "wb": "SAAJ"},
                        {"id": "192", "text": "中医医师", "py": "ZYYS", "wb": "KAAJ"},
                        {"id": "193", "text": "中西医结合医师", "py": "ZXYJHYS", "wb": "KSAXWAJ"},
                        {"id": "194", "text": "民族医生", "py": "MZYS", "wb": "NYAT"},
                        {"id": "195", "text": "公共卫生医生", "py": "GGWSYS", "wb": "WABTAT"},
                        {"id": "196", "text": "药剂人员", "py": "YJRY", "wb": "AYWK"},
                        {"id": "197", "text": "医疗技术人员", "py": "YLJSRY", "wb": "AURSWK"},
                        {"id": "198", "text": "护理人员", "py": "HLRY", "wb": "RGWK"},
                        {"id": "199", "text": "其他卫生专业技术人员", "py": "QTWSZYJSRY", "wb": "AWBTFORSWK"}
                    ]
                }
            ]
            },
            {
                "id": "200", "text": "专业技术人员", "py": "ZYJSRY", "wb": "FORSWK", "state": "closed", "children": [
                {
                    "id": "210", "text": "经济业务人员", "py": "JJYWRY", "wb": "XIOTWK", "state": "closed", "children": [
                    {"id": "211", "text": "经济计划人员", "py": "JJJHRY", "wb": "XIYAWK"},
                    {"id": "212", "text": "统计人员", "py": "TJRY", "wb": "XYWK"},
                    {"id": "213", "text": "会计人员", "py": "HJRY", "wb": "WYWK"},
                    {"id": "214", "text": "审计人员", "py": "SJRY", "wb": "PYWK"},
                    {"id": "215", "text": "国际商务人员", "py": "GJSWRY", "wb": "LBUTWK"},
                    {"id": "219", "text": "其他经济业务人员", "py": "QTJJYWRY", "wb": "AWXIOTWK"}
                ]
                },
                {
                    "id": "220", "text": "金融业务人员", "py": "JRYWRY", "wb": "QGOTWK", "state": "closed", "children": [
                    {"id": "221", "text": "银行业务人员", "py": "YXYWRY", "wb": "QTOTWK"},
                    {"id": "222", "text": "保险业务人员", "py": "BXYWRY", "wb": "WBOTWK"},
                    {"id": "223", "text": "证券业务人员", "py": "ZQYWRY", "wb": "YUOTWK"},
                    {"id": "229", "text": "其他金融业务人员", "py": "QTJRYWRY", "wb": "AWQGOTWK"}
                ]
                },
                {
                    "id": "230", "text": "法律专业人员", "py": "FLZYRY", "wb": "ITFOWK", "state": "closed", "children": [
                    {"id": "231", "text": "法官", "py": "FG", "wb": "IP"},
                    {"id": "232", "text": "检察官", "py": "JCG", "wb": "SPP"},
                    {"id": "233", "text": "律师", "py": "LS", "wb": "TJ"},
                    {"id": "234", "text": "公证员", "py": "GZY", "wb": "WYK"},
                    {"id": "235", "text": "司法鉴定人员", "py": "SFJDRY", "wb": "NIJPWK"},
                    {"id": "236", "text": "书记员", "py": "SJY", "wb": "NYK"},
                    {"id": "239", "text": "其他法律专业人员", "py": "QTFLZYRY", "wb": "AWITFOWK"}
                ]
                },
                {
                    "id": "240", "text": "教学人员", "py": "JXRY", "wb": "FIWK", "state": "closed", "children": [
                    {"id": "241", "text": "高级教育教师", "py": "GJJYJS", "wb": "YXFYFJ"},
                    {"id": "242", "text": "中等职业教育教师", "py": "ZDZYJYJS", "wb": "KTBOFYFJ"},
                    {"id": "243", "text": "中学教师", "py": "ZXJS", "wb": "KIFJ"},
                    {"id": "244", "text": "小学教师", "py": "XXJS", "wb": "IIFJ"},
                    {"id": "245", "text": "幼儿教师", "py": "YEJS", "wb": "XQFJ"},
                    {"id": "246", "text": "特殊教育教师", "py": "TSJYJS", "wb": "TGFYFJ"},
                    {"id": "249", "text": "其他教学人员", "py": "QTJXRY", "wb": "AWFIWK"}
                ]
                },
                {
                    "id": "250",
                    "text": "文学艺术工作人员",
                    "py": "WXYSGZRY",
                    "wb": "YIASAWWK",
                    "state": "closed",
                    "children": [
                        {"id": "251", "text": "文学创作和评论人员", "py": "WXCZHPLRY", "wb": "YIWWTYYWK"},
                        {"id": "252", "text": "编导和音乐指挥人员", "py": "BDHYLZHRY", "wb": "XNTUQRRWK"},
                        {"id": "253", "text": "演员", "py": "YY", "wb": "IK"},
                        {"id": "254", "text": "乐器演奏员", "py": "LQYZY", "wb": "QKIDK"},
                        {"id": "255", "text": "电影、电视制作及舞台专业人员", "py": "DY、DSZZJWTZYRY", "wb": "JJ、JPRWERCFOWK"},
                        {"id": "256", "text": "美术专业人员", "py": "MSZYRY", "wb": "USFOWK"},
                        {"id": "257", "text": "工艺美术专业人员", "py": "GYMSZYRY", "wb": "AAUSFOWK"},
                        {"id": "259", "text": "其他文学艺术工作人员", "py": "QTWXYSGZRY", "wb": "AWYIASAWWK"}
                    ]
                },
                {"id": "260", "text": "体育工作人员", "py": "TYGZRY", "wb": "WYAWWK"},
                {
                    "id": "270",
                    "text": "新闻出版、文化工作人员",
                    "py": "XWCB、WHGZRY",
                    "wb": "UUBT、YWAWWK",
                    "state": "closed",
                    "children": [
                        {"id": "271", "text": "记者", "py": "JZ", "wb": "YF"},
                        {"id": "272", "text": "编辑", "py": "BJ", "wb": "XL"},
                        {"id": "273", "text": "校对员", "py": "XDY", "wb": "SCK"},
                        {"id": "274", "text": "播音员及节目主持人", "py": "BYYJJMZCR", "wb": "RUKEAHYRW"},
                        {"id": "275", "text": "翻译", "py": "FY", "wb": "TY"},
                        {"id": "276", "text": "图书资料与档案业务人员", "py": "TSZLYDAYWRY", "wb": "LNUOGSPOTWK"},
                        {"id": "277", "text": "考古及文物保护工作人员", "py": "KGJWWBHGZRY", "wb": "FDEYTWRAWWK"},
                        {"id": "279", "text": "其他新闻出版、文化工作人员", "py": "QTXWCB、WHGZRY", "wb": "AWUUBT、YWAWWK"}
                    ]
                },
                {"id": "280", "text": "宗教职业者", "py": "ZJZYZ", "wb": "PFBOF"},
                {"id": "290", "text": "其他专业技术人员", "py": "QTZYJSRY", "wb": "AWFORSWK"}
            ]
            },
            {
                "id": "300", "text": "办事人员和有关人员", "py": "BSRYHYGRY", "wb": "LGWKTDUWK", "state": "closed", "children": [
                {
                    "id": "310", "text": "行政办公人员", "py": "XZBGRY", "wb": "TGLWWK", "state": "closed", "children": [
                    {"id": "311", "text": "行政业务人员", "py": "XZYWRY", "wb": "TGOTWK"},
                    {"id": "312", "text": "行政事务人员", "py": "XZSWRY", "wb": "TGGTWK"},
                    {"id": "319", "text": "其他行政办公人员", "py": "QTXZBGRY", "wb": "AWTGLWWK"}
                ]
                },
                {
                    "id": "320",
                    "text": "安全保卫和消防人员",
                    "py": "AQBWHXFRY",
                    "wb": "PWWBTIBWK",
                    "state": "closed",
                    "children": [
                        {"id": "321", "text": "人民警察", "py": "RMJC", "wb": "WNAP"},
                        {"id": "322", "text": "治安保卫人员", "py": "ZABWRY", "wb": "IPWBWK"},
                        {"id": "323", "text": "消防人员", "py": "XFRY", "wb": "IBWK"},
                        {"id": "329", "text": "其他安全保卫和消防人员", "py": "QTAQBWHXFRY", "wb": "AWPWWBTIBWK"}
                    ]
                },
                {
                    "id": "330",
                    "text": "邮政和电信业务人员",
                    "py": "YZHDXYWRY",
                    "wb": "MGTJWOTWK",
                    "state": "closed",
                    "children": [
                        {"id": "331", "text": "邮政业务人员", "py": "YZYWRY", "wb": "MGOTWK"},
                        {"id": "332", "text": "电信业务人员", "py": "DXYWRY", "wb": "JWOTWK"},
                        {"id": "333", "text": "电信通讯传输业务人员", "py": "DXTXCSYWRY", "wb": "JWCYWLOTWK"},
                        {"id": "339", "text": "其他邮政和电信业务人员", "py": "QTYZHDXYWRY", "wb": "AWMGTJWOTWK"}
                    ]
                },
                {"id": "390", "text": "其他办事人员和有关人员", "py": "QTBSRYHYGRY", "wb": "AWLGWKTDUWK"}
            ]
            },
            {
                "id": "400", "text": "商业、服务业人员", "py": "SY、FWYRY", "wb": "UO、ETOWK", "state": "closed", "children": [
                {
                    "id": "410", "text": "购销人员", "py": "GXRY", "wb": "MQWK", "state": "closed", "children": [
                    {"id": "411", "text": "营业员人员", "py": "YYYRY", "wb": "AOKWK"},
                    {"id": "412", "text": "推销、展销人员", "py": "TX、ZXRY", "wb": "RQ、NQWK"},
                    {"id": "413", "text": "采购人员", "py": "CGRY", "wb": "EMWK"},
                    {"id": "414", "text": "拍卖、典当及租赁业务人员", "py": "PM、DDJZLYWRY", "wb": "RF、MIETWOTWK"},
                    {"id": "415", "text": "废旧物资回收利用人员", "py": "FJWZHSLYRY", "wb": "YHTULNTEWK"},
                    {"id": "416", "text": "油粮管理人员", "py": "YLGLRY", "wb": "IOTGWK"},
                    {"id": "417", "text": "商品监督和市场管理人员", "py": "SPJDHSCGLRY", "wb": "UKJHTYFTGWK"},
                    {"id": "419", "text": "其他购销人员", "py": "QTGXRY", "wb": "AWMQWK"}
                ]
                },
                {
                    "id": "420", "text": "仓储人员", "py": "CCRY", "wb": "WWWK", "state": "closed", "children": [
                    {"id": "421", "text": "保管人员", "py": "BGRY", "wb": "WTWK"},
                    {"id": "422", "text": "储运人员", "py": "CYRY", "wb": "WFWK"},
                    {"id": "429", "text": "其他仓储人员", "py": "QTCCRY", "wb": "AWWWWK"}
                ]
                },
                {
                    "id": "430", "text": "餐饮服务人员", "py": "CYFWRY", "wb": "HQETWK", "state": "closed", "children": [
                    {"id": "431", "text": "中餐烹饪人员", "py": "ZCPRRY", "wb": "KHYQWK"},
                    {"id": "432", "text": "西餐烹饪人员", "py": "XCPRRY", "wb": "SHYQWK"},
                    {"id": "433", "text": "调酒和茶艺人员", "py": "TJHCYRY", "wb": "YITAAWK"},
                    {"id": "434", "text": "营养配餐人员", "py": "YYPCRY", "wb": "AUSHWK"},
                    {"id": "435", "text": "餐厅服务人员", "py": "CTFWRY", "wb": "HDETWK"},
                    {"id": "439", "text": "其他餐饮服务人员", "py": "QTCYFWRY", "wb": "AWHQETWK"}
                ]
                },
                {
                    "id": "440",
                    "text": "饭店、旅游及健身娱乐场所服务人员",
                    "py": "FD、LYJJSYLCSFWRY",
                    "wb": "QY、YIEWTVQFRETWK",
                    "state": "closed",
                    "children": [
                        {"id": "441", "text": "饭店服务人员", "py": "FDFWRY", "wb": "QYETWK"},
                        {"id": "442", "text": "旅游及公共游览场所服务人员", "py": "LYJGGYLCSFWRY", "wb": "YIEWAIJFRETWK"},
                        {"id": "443", "text": "健身和娱乐场所服务人员", "py": "JSHYLCSFWRY", "wb": "WTTVQFRETWK"},
                        {
                            "id": "449",
                            "text": "其他饭店、旅游及健身娱乐场所服务人员",
                            "py": "QTFD、LYJJSYLCSFWRY",
                            "wb": "AWQY、YIEWTVQFRETWK"
                        }
                    ]
                },
                {
                    "id": "450", "text": "运输服务人员", "py": "YSFWRY", "wb": "FLETWK", "state": "closed", "children": [
                    {"id": "451", "text": "公路、道路运输服务人员", "py": "GL、DLYSFWRY", "wb": "WK、UKFLETWK"},
                    {"id": "452", "text": "铁路客货运输服务人员", "py": "TLKHYSFWRY", "wb": "QKPWFLETWK"},
                    {"id": "453", "text": "航空运输服务人员", "py": "HKYSFWRY", "wb": "TPFLETWK"},
                    {"id": "454", "text": "水上运输服务人员", "py": "SSYSFWRY", "wb": "IHFLETWK"},
                    {"id": "459", "text": "其他运输服务人员", "py": "QTYSFWRY", "wb": "AWFLETWK"}
                ]
                },
                {"id": "460", "text": "医疗卫生辅助服务人员", "py": "YLWSFZFWRY", "wb": "AUBTLEETWK"},
                {
                    "id": "470",
                    "text": "社会服务和居民生活服务人员",
                    "py": "SHFWHJMSHFWRY",
                    "wb": "PWETTNNTIETWK",
                    "state": "closed",
                    "children": [
                        {"id": "471", "text": "社会中介服务人员", "py": "SHZJFWRY", "wb": "PWKWETWK"},
                        {"id": "472", "text": "物业管理人员", "py": "WYGLRY", "wb": "TOTGWK"},
                        {"id": "473", "text": "供水、供热及生活燃料供应服务人员", "py": "GS、GRJSHRLGYFWRY", "wb": "WI、WRETIOOWYETWK"},
                        {"id": "474", "text": "美容美发人员", "py": "MRMFRY", "wb": "UPUNWK"},
                        {"id": "475", "text": "摄影服务人员", "py": "SYFWRY", "wb": "RJETWK"},
                        {"id": "476", "text": "验光配镜人员", "py": "YGPJRY", "wb": "CISQWK"},
                        {"id": "477", "text": "洗染织补人员", "py": "XRZBRY", "wb": "IIXPWK"},
                        {"id": "478", "text": "浴池服务人员", "py": "YCFWRY", "wb": "IIETWK"},
                        {"id": "479", "text": "印章刻字人员", "py": "YZKZRY", "wb": "QUYPWK"}
                    ]
                },
                {
                    "id": "480",
                    "text": "社会服务和居民生活服务人员",
                    "py": "SHFWHJMSHFWRY",
                    "wb": "PWETTNNTIETWK",
                    "state": "closed",
                    "children": [
                        {"id": "481", "text": "日用机电产品维修人员", "py": "RYJDCPWXRY", "wb": "JESJUKXWWK"},
                        {"id": "482", "text": "办公设备维修人员", "py": "BGSBWXRY", "wb": "LWYTXWWK"},
                        {"id": "483", "text": "保育、家庭服务人员", "py": "BY、JTFWRY", "wb": "WY、PYETWK"},
                        {"id": "484", "text": "环境卫生人员", "py": "HJWSRY", "wb": "GFBTWK"},
                        {"id": "485", "text": "殡葬服务人员", "py": "BZFWRY", "wb": "GAETWK"},
                        {"id": "489", "text": "其他社会服务和居民生活服务人员", "py": "QTSHFWHJMSHFWRY", "wb": "AWPWETTNNTIETWK"}
                    ]
                },
                {"id": "490", "text": "其他商业、服务业人员", "py": "QTSY、FWYRY", "wb": "AWUO、ETOWK"}
            ]
            },
            {
                "id": "500",
                "text": "农、林、牧、渔、水利业生产人员",
                "py": "N、L、M、Y、SLYSCRY",
                "wb": "P、S、T、I、ITOTUWK",
                "state": "closed",
                "children": [
                    {
                        "id": "510",
                        "text": "种植业生产人员",
                        "py": "ZZYSCRY",
                        "wb": "TSOTUWK",
                        "state": "closed",
                        "children": [
                            {"id": "511", "text": "大田作物生产人员", "py": "DTZWSCRY", "wb": "DLWTTUWK"},
                            {"id": "512", "text": "农业实验人员", "py": "NYSYRY", "wb": "POPCWK"},
                            {"id": "513", "text": "园艺作物生产人员", "py": "YYZWSCRY", "wb": "LAWTTUWK"},
                            {"id": "514", "text": "热带作物生产人员", "py": "RDZWSCRY", "wb": "RGWTTUWK"},
                            {"id": "515", "text": "中药材生产人员", "py": "ZYCSCRY", "wb": "KASTUWK"},
                            {"id": "516", "text": "农副林特产品加工人员", "py": "NFLTCPJGRY", "wb": "PGSTUKLAWK"},
                            {"id": "519", "text": "其他种植业生产人员", "py": "QTZZYSCRY", "wb": "AWTSOTUWK"}
                        ]
                    },
                    {
                        "id": "520",
                        "text": "林业生产及野生动植物保护人员",
                        "py": "LYSCJYSDZWBHRY",
                        "wb": "SOTUEJTFSTWRWK",
                        "state": "closed",
                        "children": [
                            {"id": "521", "text": "营造林人员", "py": "YZLRY", "wb": "ATSWK"},
                            {"id": "522", "text": "森林资源管护人员", "py": "SLZYGHRY", "wb": "SSUITRWK"},
                            {"id": "523", "text": "野生动植物保护及自然保护区人员", "py": "YSDZWBHJZRBHQRY", "wb": "JTFSTWRETQWRAWK"},
                            {"id": "524", "text": "木材采运人员", "py": "MCCYRY", "wb": "SSEFWK"},
                            {
                                "id": "529",
                                "text": "其他林业生产及野生动植物保护人员",
                                "py": "QTLYSCJYSDZWBHRY",
                                "wb": "AWSOTUEJTFSTWRWK"
                            }
                        ]
                    },
                    {
                        "id": "530",
                        "text": "畜牧业生产人员",
                        "py": "CMYSCRY",
                        "wb": "YTOTUWK",
                        "state": "closed",
                        "children": [
                            {"id": "531", "text": "家畜饲养人员", "py": "JCSYRY", "wb": "PYQUWK"},
                            {"id": "532", "text": "家禽饲养人员", "py": "JQSYRY", "wb": "PWQUWK"},
                            {"id": "533", "text": "蜜蜂饲养人员", "py": "MFSYRY", "wb": "PJQUWK"},
                            {"id": "534", "text": "实验动物饲养人员", "py": "SYDWSYRY", "wb": "PCFTQUWK"},
                            {"id": "535", "text": "动物疫病防治人员", "py": "DWYBFZRY", "wb": "FTUUBIWK"},
                            {"id": "536", "text": "草业生产人员", "py": "CYSCRY", "wb": "AOTUWK"},
                            {"id": "539", "text": "其他畜牧业生产人员", "py": "QTCMYSCRY", "wb": "AWYTOTUWK"}
                        ]
                    },
                    {
                        "id": "540", "text": "渔业生产人员", "py": "YYSCRY", "wb": "IOTUWK", "state": "closed", "children": [
                        {"id": "541", "text": "水产养殖人员", "py": "SCYZRY", "wb": "IUUGWK"},
                        {"id": "542", "text": "水产捕捞及有关人员", "py": "SCBLJYGRY", "wb": "IURREDUWK"},
                        {"id": "543", "text": "水产品加工人员", "py": "SCPJGRY", "wb": "IUKLAWK"},
                        {"id": "549", "text": "其他渔业生产人员", "py": "QTYYSCRY", "wb": "AWIOTUWK"}
                    ]
                    },
                    {
                        "id": "550",
                        "text": "水利设备管理养护人员",
                        "py": "SLSBGLYHRY",
                        "wb": "ITYTTGURWK",
                        "state": "closed",
                        "children": [
                            {"id": "551", "text": "河道、水库管养人员", "py": "HD、SKGYRY", "wb": "IU、IYTUWK"},
                            {"id": "552", "text": "农田灌排工程建设管理维护人员", "py": "NTGPGCJSGLWHRY", "wb": "PLIRATVYTGXRWK"},
                            {"id": "553", "text": "水土保持作业人员", "py": "STBCZYRY", "wb": "IFWRWOWK"},
                            {"id": "554", "text": "水文勘测作业人员", "py": "SWKCZYRY", "wb": "IYAIWOWK"},
                            {"id": "559", "text": "其他水利设备管理养护人员", "py": "QTSLSBGLYHRY", "wb": "AWITYTTGURWK"}
                        ]
                    },
                    {
                        "id": "590",
                        "text": "其他农、林、牧、渔、水利业生产人员",
                        "py": "QTN、L、M、Y、SLYSCRY",
                        "wb": "AWP、S、T、I、ITOTUWK",
                        "state": "closed",
                        "children": [
                            {"id": "591", "text": "农林专用机械操作人员", "py": "NLZYJXCZRY", "wb": "PSFESSRWWK"},
                            {"id": "592", "text": "农村能源开发利用人员", "py": "NCNYKFLYRY", "wb": "PSCIGNTEWK"}
                        ]
                    }
                ]
            },
            {
                "id": "600",
                "text": "生产、运输设备操作人员及有关人员",
                "py": "SC、YSSBCZRYJYGRY",
                "wb": "TU、FLYTRWWKEDUWK",
                "state": "closed",
                "children": [
                    {
                        "id": "610",
                        "text": "勘测及矿物开采人员",
                        "py": "KCJKWKCRY",
                        "wb": "AIEDTGEWK",
                        "state": "closed",
                        "children": [
                            {"id": "611", "text": "地质勘察人员", "py": "DZKCRY", "wb": "FRAPWK"},
                            {"id": "612", "text": "测绘人员", "py": "CHRY", "wb": "IXWK"},
                            {"id": "613", "text": "矿物开采人员", "py": "KWKCRY", "wb": "DTGEWK"},
                            {"id": "614", "text": "矿物处理人员", "py": "KWCLRY", "wb": "DTTGWK"},
                            {"id": "615", "text": "钻井人员", "py": "ZJRY", "wb": "QFWK"},
                            {"id": "616", "text": "石油、天然气开采人员", "py": "SY、TRQKCRY", "wb": "DI、GQRGEWK"},
                            {"id": "617", "text": "盐业生产人员", "py": "YYSCRY", "wb": "FOTUWK"},
                            {"id": "619", "text": "其他勘测及矿物开采人员", "py": "QTKCJKWKCRY", "wb": "AWAIEDTGEWK"}
                        ]
                    },
                    {
                        "id": "620",
                        "text": "金属冶炼、轧制人员",
                        "py": "JSYL、ZZRY",
                        "wb": "QNUO、LRWK",
                        "state": "closed",
                        "children": [
                            {"id": "621", "text": "炼铁人员", "py": "LTRY", "wb": "OQWK"},
                            {"id": "622", "text": "炼钢人员", "py": "LGRY", "wb": "OQWK"},
                            {"id": "623", "text": "铁合金冶炼人员", "py": "THJYLRY", "wb": "QWQUOWK"},
                            {"id": "624", "text": "重有色金属冶炼人员", "py": "ZYSJSYLRY", "wb": "TDQQNUOWK"},
                            {"id": "625", "text": "轻有色金属冶炼人员", "py": "QYSJSYLRY", "wb": "LDQQNUOWK"},
                            {"id": "626", "text": "稀贵金属冶炼人员", "py": "XGJSYLRY", "wb": "TKQNUOWK"},
                            {"id": "627", "text": "半导体材料制备人员", "py": "BDTCLZBRY", "wb": "UNWSORTWK"},
                            {"id": "628", "text": "金属轧制人员", "py": "JSZZRY", "wb": "QNLRWK"},
                            {"id": "629", "text": "铸铁管人员", "py": "ZTGRY", "wb": "QQTWK"}
                        ]
                    },
                    {
                        "id": "630",
                        "text": "金属冶炼、轧制人员",
                        "py": "JSYL、ZZRY",
                        "wb": "QNUO、LRWK",
                        "state": "closed",
                        "children": [
                            {"id": "631", "text": "碳素制品生产人员", "py": "TSZPSCRY", "wb": "DGRKTUWK"},
                            {"id": "632", "text": "硬质合金生产人员", "py": "YZHJSCRY", "wb": "DRWQTUWK"},
                            {"id": "639", "text": "其他金属冶炼、轧制人员", "py": "QTJSYL、ZZRY", "wb": "AWQNUO、LRWK"}
                        ]
                    },
                    {
                        "id": "640",
                        "text": "化工产品生产人员",
                        "py": "HGCPSCRY",
                        "wb": "WAUKTUWK",
                        "state": "closed",
                        "children": [
                            {"id": "641", "text": "化工产品生产通用工艺人员", "py": "HGCPSCTYGYRY", "wb": "WAUKTUCEAAWK"},
                            {"id": "642", "text": "石油炼制生产人员", "py": "SYLZSCRY", "wb": "DIORTUWK"},
                            {"id": "643", "text": "煤化工生产人员", "py": "MHGSCRY", "wb": "OWATUWK"},
                            {"id": "644", "text": "化学肥料生产人员", "py": "HXFLSCRY", "wb": "WIEOTUWK"},
                            {"id": "645", "text": "无机化工产品生产人员", "py": "WJHGCPSCRY", "wb": "FSWAUKTUWK"},
                            {"id": "646", "text": "基本有机化工产品生产人员", "py": "JBYJHGCPSCRY", "wb": "ASDSWAUKTUWK"},
                            {"id": "647", "text": "合成树脂生产人员", "py": "HCSZSCRY", "wb": "WDSETUWK"},
                            {"id": "648", "text": "合成橡胶生产人员", "py": "HCXJSCRY", "wb": "WDSETUWK"},
                            {"id": "649", "text": "化学纤维生产人员", "py": "HXXWSCRY", "wb": "WIXXTUWK"}
                        ]
                    },
                    {
                        "id": "650",
                        "text": "化工产品生产人员",
                        "py": "HGCPSCRY",
                        "wb": "WAUKTUWK",
                        "state": "closed",
                        "children": [
                            {"id": "651", "text": "合成革生产人员", "py": "HCGSCRY", "wb": "WDATUWK"},
                            {"id": "652", "text": "精细化工产品生产人员", "py": "JXHGCPSCRY", "wb": "OXWAUKTUWK"},
                            {"id": "653", "text": "信息记录材料生产人员", "py": "XXJLCLSCRY", "wb": "WTYVSOTUWK"},
                            {"id": "654", "text": "火药、炸药制造人员", "py": "HY、ZYZZRY", "wb": "OA、OARTWK"},
                            {"id": "655", "text": "林产化工产品生产人员", "py": "LCHGCPSCRY", "wb": "SUWAUKTUWK"},
                            {"id": "656", "text": "复合材料生产人员", "py": "FHCLSCRY", "wb": "TWSOTUWK"},
                            {"id": "657", "text": "日用化学品生产人员", "py": "RYHXPSCRY", "wb": "JEWIKTUWK"},
                            {"id": "659", "text": "其他化工产品生产人员", "py": "QTHGCPSCRY", "wb": "AWWAUKTUWK"}
                        ]
                    },
                    {
                        "id": "660",
                        "text": "机械制造加工人员",
                        "py": "JXZZJGRY",
                        "wb": "SSRTLAWK",
                        "state": "closed",
                        "children": [
                            {"id": "661", "text": "机械冷加工人员", "py": "JXLJGRY", "wb": "SSULAWK"},
                            {"id": "662", "text": "机械热加工人员", "py": "JXRJGRY", "wb": "SSRLAWK"},
                            {"id": "663", "text": "特种加工设备操作人员", "py": "TZJGSBCZRY", "wb": "TTLAYTRWWK"},
                            {"id": "664", "text": "冷作钣金加工人员", "py": "LZBJJGRY", "wb": "UWQQLAWK"},
                            {"id": "665", "text": "工件表面处理加工人员", "py": "GJBMCLJGRY", "wb": "AWGDTGLAWK"},
                            {"id": "666", "text": "磨料磨具制造加工人员", "py": "MLMJZZJGRY", "wb": "YOYHRTLAWK"},
                            {"id": "667", "text": "航天器件加工成型人员", "py": "HTQJJGCXRY", "wb": "TGKWLADGWK"},
                            {"id": "669", "text": "其他机械制造加工人员", "py": "QTJXZZJGRY", "wb": "AWSSRTLAWK"}
                        ]
                    },
                    {
                        "id": "670",
                        "text": "机电产品装配人员",
                        "py": "JDCPZPRY",
                        "wb": "SJUKUSWK",
                        "state": "closed",
                        "children": [
                            {"id": "671", "text": "基础件、部件装配人员", "py": "JCJ、BJZPRY", "wb": "ADW、UWUSWK"},
                            {"id": "672", "text": "机械设备装配人员", "py": "JXSBZPRY", "wb": "SSYTUSWK"},
                            {"id": "673", "text": "动力设备装配人员", "py": "DLSBZPRY", "wb": "FLYTUSWK"},
                            {"id": "674", "text": "电气元件及设备装配人员", "py": "DQYJJSBZPRY", "wb": "JRFWEYTUSWK"},
                            {"id": "675", "text": "电子专用设备装配调试人员", "py": "DZZYSBZPTSRY", "wb": "JBFEYTUSYYWK"},
                            {"id": "676", "text": "仪器仪表装配人员", "py": "YQYBZPRY", "wb": "WKWGUSWK"},
                            {"id": "677", "text": "运输车辆装配人员", "py": "YSCLZPRY", "wb": "FLLLUSWK"},
                            {"id": "678", "text": "膜法水处理设备制造人员", "py": "MFSCLSBZZRY", "wb": "EIITGYTRTWK"},
                            {
                                "id": "679",
                                "text": "医疗器械装配及假肢与矫型器制作人员",
                                "py": "YLQXZPJJZYJXQZZRY",
                                "wb": "AUKSUSEWEGTGKRWWK"
                            }
                        ]
                    },
                    {
                        "id": "680",
                        "text": "机电产品装配人员",
                        "py": "JDCPZPRY",
                        "wb": "SJUKUSWK",
                        "state": "closed",
                        "children": [
                            {"id": "681", "text": "日用机械电器制造装配人员", "py": "RYJXDQZZZPRY", "wb": "JESSJKRTUSWK"},
                            {"id": "682", "text": "五金制品制作、装配人员", "py": "WJZPZZ、ZPRY", "wb": "GQRKRW、USWK"},
                            {"id": "683", "text": "装甲车辆装试人员", "py": "ZJCLZSRY", "wb": "ULLLUYWK"},
                            {"id": "684", "text": "枪炮制造人员", "py": "QPZZRY", "wb": "SORTWK"},
                            {"id": "685", "text": "弹制造人员", "py": "DZZRY", "wb": "XRTWK"},
                            {"id": "686", "text": "引信加工制造人员", "py": "YXJGZZRY", "wb": "XWLARTWK"},
                            {"id": "687", "text": "火工品制造人员", "py": "HGPZZRY", "wb": "OAKRTWK"},
                            {"id": "688", "text": "防化器材制造人员", "py": "FHQCZZRY", "wb": "BWKSRTWK"},
                            {"id": "689", "text": "船舶制造人员", "py": "CBZZRY", "wb": "TTRTWK"}
                        ]
                    },
                    {
                        "id": "690",
                        "text": "机电产品装配人员",
                        "py": "JDCPZPRY",
                        "wb": "SJUKUSWK",
                        "state": "closed",
                        "children": [
                            {"id": "691", "text": "航空产品装配与调试人员", "py": "HKCPZPYTSRY", "wb": "TPUKUSGYYWK"},
                            {"id": "692", "text": "航空产品试验人员", "py": "HKCPSYRY", "wb": "TPUKYCWK"},
                            {"id": "693", "text": "导弹卫星装配测试人员", "py": "DDWXZPCSRY", "wb": "NXBJUSIYWK"},
                            {"id": "694", "text": "火箭发动机装配测试人员", "py": "HJFDJZPCSRY", "wb": "OTNFSUSIYWK"},
                            {
                                "id": "695",
                                "text": "航天器结构强度、温度、环境试验人员",
                                "py": "HTQJGQD、WD、HJSYRY",
                                "wb": "TGKXSXY、IY、GFYCWK"
                            },
                            {"id": "696", "text": "靶场试验人员", "py": "BCSYRY", "wb": "AFYCWK"},
                            {"id": "699", "text": "其他机电产品装配人员", "py": "QTJDCPZPRY", "wb": "AWSJUKUSWK"}
                        ]
                    }
                ]
            },
            {"id": "X00", "text": "军人", "py": "JR", "wb": "PW"},
            {"id": "Y00", "text": "不便分类的其他从业人员", "py": "BBFLDQTCYRY", "wb": "GWWORAWWOWK"}
        ]

        }
    ],
    'BD_D_GXDM': [//关系树
        {
            "id": "ROOT", "text": "人员关系代码", "iconCls": "icon-treeroot1", "children": [
            {
                "id": "1", "text": "亲属关系", "py": "QSGJ", "wb": "UNUT", "state": "closed", "children": [
                {"id": "1001", "text": "本人", "py": "BR", "wb": "SW"},
                {"id": "1002", "text": "户主", "py": "HZ", "wb": "YY"},
                {"id": "1010", "text": "配偶", "py": "PO", "wb": "SW"},
                {"id": "1011", "text": "夫", "py": "F", "wb": "F"},
                {"id": "1012", "text": "妻", "py": "Q", "wb": "G"},
                {"id": "1020", "text": "子", "py": "Z", "wb": "B"},
                {"id": "1021", "text": "独生子", "py": "DSZ", "wb": "QTB"},
                {"id": "1022", "text": "长子", "py": "ZZ", "wb": "TB"},
                {"id": "1023", "text": "次子", "py": "CZ", "wb": "UB"},
                {"id": "1024", "text": "三子", "py": "SZ", "wb": "DB"},
                {"id": "1025", "text": "四子", "py": "SZ", "wb": "LB"},
                {"id": "1026", "text": "五子", "py": "WZ", "wb": "GB"},
                {"id": "1027", "text": "养子和继子", "py": "YZHJZ", "wb": "UBTXB"},
                {"id": "1028", "text": "女婿", "py": "NX", "wb": "VV"},
                {"id": "1029", "text": "其他儿子", "py": "QTEZ", "wb": "AWQB"},
                {"id": "1030", "text": "女", "py": "N", "wb": "V"},
                {"id": "1031", "text": "独生女", "py": "DSN", "wb": "QTV"},
                {"id": "1032", "text": "长女", "py": "ZN", "wb": "TV"},
                {"id": "1033", "text": "次女", "py": "CN", "wb": "UV"},
                {"id": "1034", "text": "三女", "py": "SN", "wb": "DV"},
                {"id": "1035", "text": "四女", "py": "SN", "wb": "LV"},
                {"id": "1036", "text": "五女", "py": "WN", "wb": "GV"},
                {"id": "1037", "text": "养女或继女", "py": "YNHJN", "wb": "UVAXV"},
                {"id": "1038", "text": "儿媳", "py": "EX", "wb": "QV"},
                {"id": "1039", "text": "其他女儿", "py": "QTNE", "wb": "AWVQ"},
                {"id": "1040", "text": "孙子、孙女或外孙子、外孙女", "py": "SZ、SNHWSZ、WSN", "wb": "BB、BVAQBB、QBV"},
                {"id": "1041", "text": "孙子", "py": "SZ", "wb": "BB"},
                {"id": "1042", "text": "孙女", "py": "SN", "wb": "BV"},
                {"id": "1043", "text": "外孙子", "py": "WSZ", "wb": "QBB"},
                {"id": "1044", "text": "外孙女", "py": "WSN", "wb": "QBV"},
                {"id": "1045", "text": "孙媳妇或外孙媳妇", "py": "SXFHWSXF", "wb": "BVVAQBVV"},
                {"id": "1046", "text": "孙女婿或外孙女婿", "py": "SNXHWSNX", "wb": "BVVAQBVV"},
                {"id": "1047", "text": "曾孙子或外曾孙子", "py": "CSZHWCSZ", "wb": "UBBAQUBB"},
                {"id": "1048", "text": "曾孙女或外曾孙女", "py": "CSNHWCSN", "wb": "UBVAQUBV"},
                {"id": "1049", "text": "其他孙子、孙女或外孙子外孙女", "py": "QTSZ、SNHWSZWSN", "wb": "AWBB、BVAQBBQBV"},
                {"id": "1050", "text": "父母", "py": "FM", "wb": "WX"},
                {"id": "1051", "text": "父亲", "py": "FQ", "wb": "WU"},
                {"id": "1052", "text": "母亲", "py": "MQ", "wb": "XU"},
                {"id": "1053", "text": "公公", "py": "GG", "wb": "WW"},
                {"id": "1054", "text": "婆婆", "py": "PP", "wb": "II"},
                {"id": "1055", "text": "岳父", "py": "YF", "wb": "RW"},
                {"id": "1056", "text": "岳母", "py": "YM", "wb": "RX"},
                {"id": "1057", "text": "继父或养父", "py": "JFHYF", "wb": "XWAUW"},
                {"id": "1058", "text": "继母或养母", "py": "JMHYM", "wb": "XXAUX"},
                {"id": "1059", "text": "其他父母关系", "py": "QTFMGJ", "wb": "AWWXUT"},
                {"id": "1060", "text": "祖父母或外母父母", "py": "ZFMHWMFM", "wb": "PWXAQXWX"},
                {"id": "1061", "text": "祖父", "py": "ZF", "wb": "PW"},
                {"id": "1062", "text": "祖母", "py": "ZM", "wb": "PX"},
                {"id": "1063", "text": "外祖父", "py": "WZF", "wb": "QPW"},
                {"id": "1064", "text": "外祖母", "py": "WZM", "wb": "QPX"},
                {"id": "1065", "text": "配偶的曾祖父或曾祖母", "py": "PODCZFHCZM", "wb": "SWRUPWAUPX"},
                {"id": "1066", "text": "曾祖父", "py": "CZF", "wb": "UPW"},
                {"id": "1067", "text": "曾祖母", "py": "CZM", "wb": "UPX"},
                {"id": "1068", "text": "配偶的曾祖父母或外曾祖父母", "py": "PODCZFMHWCZFM", "wb": "SWRUPWXAQUPWX"},
                {"id": "1069", "text": "其他祖父母或外祖父母", "py": "QTZFMHWZFM", "wb": "AWPWXAQPWX"},
                {"id": "1070", "text": "兄弟姐妹", "py": "XDJM", "wb": "KUVV"},
                {"id": "1071", "text": "兄", "py": "X", "wb": "K"},
                {"id": "1072", "text": "嫂", "py": "S", "wb": "V"},
                {"id": "1073", "text": "弟", "py": "D", "wb": "U"},
                {"id": "1074", "text": "弟媳", "py": "DX", "wb": "UV"},
                {"id": "1075", "text": "姐姐", "py": "JJ", "wb": "VV"},
                {"id": "1076", "text": "姐夫", "py": "JF", "wb": "VF"},
                {"id": "1077", "text": "妹妹", "py": "MM", "wb": "VV"},
                {"id": "1078", "text": "妹夫", "py": "MF", "wb": "VF"},
                {"id": "1079", "text": "其他兄弟姐妹", "py": "QTXDJM", "wb": "AWKUVV"},
                {"id": "1080", "text": "其他", "py": "QT", "wb": "AW"},
                {"id": "1081", "text": "伯父", "py": "BF", "wb": "WW"},
                {"id": "1082", "text": "伯母", "py": "BM", "wb": "WX"},
                {"id": "1083", "text": "叔父", "py": "SF", "wb": "HW"},
                {"id": "1084", "text": "婶母", "py": "SM", "wb": "VX"},
                {"id": "1085", "text": "舅父", "py": "JF", "wb": "VW"},
                {"id": "1086", "text": "舅母", "py": "JM", "wb": "VX"},
                {"id": "1087", "text": "姨夫", "py": "YF", "wb": "VF"},
                {"id": "1088", "text": "姨母", "py": "YM", "wb": "VX"},
                {"id": "1089", "text": "姑父", "py": "GF", "wb": "VW"},
                {"id": "1090", "text": "姑母", "py": "GM", "wb": "VX"},
                {"id": "1091", "text": "堂兄弟、堂姐妹", "py": "TXD、TJM", "wb": "IKU、IVV"},
                {"id": "1092", "text": "表兄弟、表姐妹", "py": "BXD、BJM", "wb": "GKU、GVV"},
                {"id": "1093", "text": "侄子", "py": "ZZ", "wb": "WB"},
                {"id": "1094", "text": "侄女", "py": "ZN", "wb": "WV"},
                {"id": "1095", "text": "外甥", "py": "WS", "wb": "QT"},
                {"id": "1096", "text": "外甥女", "py": "WSN", "wb": "QTV"},
                {"id": "1097", "text": "其他亲属", "py": "QTQS", "wb": "AWUN"}
            ]
            },
            {
                "id": "2", "text": "非亲属关系", "py": "FQSGJ", "wb": "DUNUT", "state": "closed", "children": [
                {"id": "2010", "text": "同案人", "py": "TAR", "wb": "MPW"},
                {"id": "2020", "text": "朋友", "py": "PY", "wb": "ED"},
                {"id": "2021", "text": "同伙", "py": "TH", "wb": "MW"},
                {"id": "2022", "text": "同监", "py": "TJ", "wb": "MJ"},
                {"id": "2023", "text": "结拜兄弟(姐妹)", "py": "JBXD(JM)", "wb": "XRKU(VV)"},
                {"id": "2024", "text": "赌友", "py": "DY", "wb": "MD"},
                {"id": "2030", "text": "同事", "py": "TS", "wb": "MG"},
                {"id": "2031", "text": "同乡", "py": "TX", "wb": "MX"},
                {"id": "2032", "text": "同学", "py": "TX", "wb": "MI"},
                {"id": "2033", "text": "校友", "py": "XY", "wb": "SD"},
                {"id": "2034", "text": "战友", "py": "ZY", "wb": "HD"},
                {"id": "2035", "text": "学友", "py": "XY", "wb": "ID"},
                {"id": "2036", "text": "网友", "py": "WY", "wb": "MD"},
                {"id": "2040", "text": "师生", "py": "SS", "wb": "JT"},
                {"id": "2041", "text": "师徒", "py": "ST", "wb": "JT"},
                {"id": "2042", "text": "教友", "py": "JY", "wb": "FD"},
                {"id": "2050", "text": "邻居", "py": "LJ", "wb": "WN"},
                {"id": "2060", "text": "主雇", "py": "ZG", "wb": "YY"},
                {"id": "2061", "text": "合伙人", "py": "HHR", "wb": "WWW"},
                {"id": "2062", "text": "客户", "py": "KH", "wb": "PY"},
                {"id": "2070", "text": "恋人", "py": "LR", "wb": "YW"},
                {"id": "2071", "text": "情人", "py": "QR", "wb": "NW"},
                {"id": "2072", "text": "同性恋", "py": "TXL", "wb": "MNY"},
                {"id": "2080", "text": "前夫妻", "py": "QFQ", "wb": "UFG"},
                {"id": "2081", "text": "前夫", "py": "QF", "wb": "UF"},
                {"id": "2082", "text": "前妻", "py": "QQ", "wb": "UG"},
                {"id": "2090", "text": "其他非亲属", "py": "QTFQS", "wb": "AWDUN"}
            ]
            }
        ]

        }]
};