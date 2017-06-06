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
        {"id": "1", "text": "七十二", "py": "QSE", "wb": ""},
        {"id": "2", "text": "七十二、七十三", "py": "QSE、QSS", "wb": ""}
    ],
    'BD_D_KSSDM': [//看守所代码
        {"id": "510000110600", "text": "四川省看守所", "py": "", "wb": ""},
        {"id": "510100040600", "text": "四川省成都市看守所", "py": "", "wb": ""},
        {"id": "510112050000", "text": "四川省成都市龙泉驿区看守所", "py": "", "wb": ""},
        {"id": "510113050000", "text": "四川省成都市青白江区看守所", "py": "", "wb": ""},
        {"id": "510121030000", "text": "四川省成都市金堂县看守所", "py": "", "wb": ""},
        {"id": "510122030000", "text": "四川省成都市双流县看守所", "py": "", "wb": ""},
        {"id": "510123050000", "text": "四川省成都市温江区看守所", "py": "", "wb": ""},
        {"id": "510124030000", "text": "四川省成都市郫县看守所", "py": "", "wb": ""},
        {"id": "510125050000", "text": "四川省成都市新都区看守所", "py": "", "wb": ""},
        {"id": "510129030000", "text": "四川省成都市大邑县看守所", "py": "", "wb": ""},
        {"id": "510131030000", "text": "四川省成都市蒲江县看守所", "py": "", "wb": ""},
        {"id": "510132030000", "text": "四川省成都市新津县看守所", "py": "", "wb": ""},
        {"id": "510180190000", "text": "四川省成都市简阳市看守所", "py": "", "wb": ""},
        {"id": "510181030000", "text": "四川省成都市都江堰市看守所", "py": "", "wb": ""},
        {"id": "510182030000", "text": "四川省成都市彭州市看守所", "py": "", "wb": ""},
        {"id": "510183030000", "text": "四川省成都市邛崃市看守所", "py": "", "wb": ""},
        {"id": "510184030000", "text": "四川省成都市崇州市看守所", "py": "", "wb": ""},
        {"id": "510300280000", "text": "四川省自贡市看守所", "py": "", "wb": ""},
        {"id": "510311150000", "text": "四川省自贡市沿滩区看守所", "py": "", "wb": ""},
        {"id": "510321170000", "text": "四川省自贡市荣县看守所", "py": "", "wb": ""},
        {"id": "510322150000", "text": "四川省自贡市富顺县公安局看守所", "py": "", "wb": ""},
        {"id": "510400130000", "text": "四川省攀枝花市看守所", "py": "", "wb": ""},
        {"id": "510421090000", "text": "四川省攀枝花市米易县看守所", "py": "", "wb": ""},
        {"id": "510422100000", "text": "四川省攀枝花市盐边县看守所", "py": "", "wb": ""},
        {"id": "510500200000", "text": "四川省泸州市看守所", "py": "", "wb": ""},
        {"id": "510521180000", "text": "四川省泸州市泸县看守所", "py": "", "wb": ""},
        {"id": "510522150000", "text": "四川省泸州市合江县看守所", "py": "", "wb": ""},
        {"id": "510524130000", "text": "四川省泸州市叙永县看守所", "py": "", "wb": ""},
        {"id": "510525160000", "text": "四川省泸州市古蔺县看守所", "py": "", "wb": ""},
        {"id": "510603120000", "text": "四川省德阳市旌阳区看守所", "py": "", "wb": ""},
        {"id": "510623180000", "text": "四川省德阳市中江县看守所", "py": "", "wb": ""},
        {"id": "510626140000", "text": "四川省德阳市罗江县看守所", "py": "", "wb": ""},
        {"id": "510681150000", "text": "四川省广汉市看守所", "py": "", "wb": ""},
        {"id": "510682620000", "text": "四川省什邡市公安局看守所", "py": "", "wb": ""},
        {"id": "510683150000", "text": "四川省绵竹市公安局看守所", "py": "", "wb": ""},
        {"id": "510700140000", "text": "四川省绵阳市看守所", "py": "", "wb": ""},
        {"id": "510722140000", "text": "四川省绵阳市三台县看守所", "py": "", "wb": ""},
        {"id": "510723140000", "text": "四川省绵阳市盐亭县看守所", "py": "", "wb": ""},
        {"id": "510724080000", "text": "四川省绵阳市安县公安局看守所", "py": "", "wb": ""},
        {"id": "510725140000", "text": "四川省绵阳市梓潼县公安局看守所", "py": "", "wb": ""},
        {"id": "510726070000", "text": "四川省绵阳市北川羌族自治县看守所", "py": "", "wb": ""},
        {"id": "510727160000", "text": "四川省绵阳市平武县公安局看守所", "py": "", "wb": ""},
        {"id": "510781170000", "text": "四川省江油市看守所", "py": "", "wb": ""},
        {"id": "510800200000", "text": "四川省广元市看守所", "py": "", "wb": ""},
        {"id": "510821150000", "text": "四川省广元市旺苍县看守所", "py": "", "wb": ""},
        {"id": "510822140000", "text": "四川省广元市青川县看守所", "py": "", "wb": ""},
        {"id": "510823160000", "text": "四川省广元市剑阁县公安局看守所", "py": "", "wb": ""},
        {"id": "510824190000", "text": "四川省广元市苍溪县公安局看守所", "py": "", "wb": ""},
        {"id": "510900210000", "text": "四川省遂宁市看守所", "py": "", "wb": ""},
        {"id": "510921140000", "text": "四川省遂宁市蓬溪县公安局看守所", "py": "", "wb": ""},
        {"id": "510922150000", "text": "四川省遂宁市射洪县公安局看守所", "py": "", "wb": ""},
        {"id": "510923150000", "text": "四川省遂宁市大英县看守所", "py": "", "wb": ""},
        {"id": "511000230000", "text": "四川省内江市看守所", "py": "", "wb": ""},
        {"id": "511011180000", "text": "四川省内江市公安局东兴区分局看守所", "py": "", "wb": ""},
        {"id": "511024180000", "text": "四川省内江市威远县公安局看守所", "py": "", "wb": ""},
        {"id": "511025180000", "text": "四川省内江市资中县看守所", "py": "", "wb": ""},
        {"id": "511028120000", "text": "四川省内江市隆昌县公安局看守所", "py": "", "wb": ""},
        {"id": "511100420000", "text": "四川省乐山市看守所", "py": "", "wb": ""},
        {"id": "511111110000", "text": "四川省乐山市沙湾区看守所", "py": "", "wb": ""},
        {"id": "511112130000", "text": "四川省乐山市五通桥区看守所", "py": "", "wb": ""},
        {"id": "511113120000", "text": "四川省乐山市金口河区看守所", "py": "", "wb": ""},
        {"id": "511123170000", "text": "四川省乐山市犍为县看守所", "py": "", "wb": ""},
        {"id": "511124140000", "text": "四川省乐山市井研县看守所", "py": "", "wb": ""},
        {"id": "511126140000", "text": "四川省乐山市夹江县看守所", "py": "", "wb": ""},
        {"id": "511129100000", "text": "四川省乐山市沐川县看守所", "py": "", "wb": ""},
        {"id": "511132180000", "text": "四川省乐山市峨边彝族自治县看守所", "py": "", "wb": ""},
        {"id": "511133110000", "text": "四川省乐山市马边彝族自治县看守所", "py": "", "wb": ""},
        {"id": "511181160000", "text": "四川省峨眉山市看守所", "py": "", "wb": ""},
        {"id": "511300230000", "text": "四川省南充市看守所", "py": "", "wb": ""},
        {"id": "511321190000", "text": "四川省南充市南部县看守所", "py": "", "wb": ""},
        {"id": "511322180000", "text": "四川省南充市营山县看守所", "py": "", "wb": ""},
        {"id": "511323160000", "text": "四川省南充市蓬安县看守所", "py": "", "wb": ""},
        {"id": "511324160000", "text": "四川省南充市仪陇县看守所", "py": "", "wb": ""},
        {"id": "511325180000", "text": "四川省南充市西充县看守所", "py": "", "wb": ""},
        {"id": "511381170000", "text": "四川省南充市阆中市看守所", "py": "", "wb": ""},
        {"id": "511400190100", "text": "四川省眉山市看守所", "py": "", "wb": ""},
        {"id": "511403170000", "text": "四川省眉山市公安局彭山区分局看守所", "py": "", "wb": ""},
        {"id": "511421100000", "text": "四川省眉山市仁寿县看守所", "py": "", "wb": ""},
        {"id": "511423130000", "text": "四川省眉山市洪雅县看守所", "py": "", "wb": ""},
        {"id": "511424140000", "text": "四川省眉山市丹棱县看守所", "py": "", "wb": ""},
        {"id": "511425150000", "text": "四川省眉山市青神县看守所", "py": "", "wb": ""},
        {"id": "511500290000", "text": "四川省宜宾市看守所", "py": "", "wb": ""},
        {"id": "511503170000", "text": "四川省宜宾市南溪区看守所", "py": "", "wb": ""},
        {"id": "511521150000", "text": "四川省宜宾市宜宾县看守所", "py": "", "wb": ""},
        {"id": "511523180000", "text": "四川省宜宾市江安县看守所", "py": "", "wb": ""},
        {"id": "511524140000", "text": "四川省宜宾市长宁县看守所", "py": "", "wb": ""},
        {"id": "511525210000", "text": "四川省宜宾市高县看守所", "py": "", "wb": ""},
        {"id": "511526120000", "text": "四川省宜宾市珙县公安局看守所", "py": "", "wb": ""},
        {"id": "511527130000", "text": "四川省宜宾市筠连县公安局看守所", "py": "", "wb": ""},
        {"id": "511528150000", "text": "四川省宜宾市兴文县看守所", "py": "", "wb": ""},
        {"id": "511529140000", "text": "四川省宜宾市屏山县看守所", "py": "", "wb": ""},
        {"id": "511602300000", "text": "四川省广安市广安区看守所", "py": "", "wb": ""},
        {"id": "511621300000", "text": "四川省广安市岳池县看守所", "py": "", "wb": ""},
        {"id": "511622300000", "text": "四川省广安市武胜县看守所", "py": "", "wb": ""},
        {"id": "511623300000", "text": "四川省广安市邻水县看守所", "py": "", "wb": ""},
        {"id": "511681300000", "text": "四川省华蓥市看守所", "py": "", "wb": ""},
        {"id": "511700210000", "text": "四川省达州市公安局看守所", "py": "", "wb": ""},
        {"id": "511722150000", "text": "四川省达州市宣汉县看守所", "py": "", "wb": ""},
        {"id": "511723140000", "text": "四川省达州市开江县公安局看守所", "py": "", "wb": ""},
        {"id": "511724120000", "text": "四川省达州市大竹县公安局看守所", "py": "", "wb": ""},
        {"id": "511725210000", "text": "四川省达州市渠县公安局看守所", "py": "", "wb": ""},
        {"id": "511781170000", "text": "四川省达州市万源市公安局看守所", "py": "", "wb": ""},
        {"id": "511800210000", "text": "四川省雅安市看守所", "py": "", "wb": ""},
        {"id": "511803150000", "text": "四川省雅安市名山区看守所", "py": "", "wb": ""},
        {"id": "511822110000", "text": "四川省雅安市荥经县公安局看守所", "py": "", "wb": ""},
        {"id": "511823130000", "text": "四川省雅安市汉源县看守所", "py": "", "wb": ""},
        {"id": "511824140000", "text": "四川省雅安市石棉县看守所", "py": "", "wb": ""},
        {"id": "511825140000", "text": "四川省雅安市天全县公安局看守所", "py": "", "wb": ""},
        {"id": "511826080000", "text": "四川省雅安市芦山县看守所", "py": "", "wb": ""},
        {"id": "511827120000", "text": "四川省雅安市宝兴县看守所", "py": "", "wb": ""},
        {"id": "511900260000", "text": "四川省巴中市公安局看守所", "py": "", "wb": ""},
        {"id": "511921130000", "text": "四川省巴中市通江县公安局看守所", "py": "", "wb": ""},
        {"id": "511922120000", "text": "四川省巴中市南江县公安局看守所", "py": "", "wb": ""},
        {"id": "511923070000", "text": "四川省巴中市平昌县公安局看守所", "py": "", "wb": ""},
        {"id": "512000180000", "text": "四川省资阳市看守所", "py": "", "wb": ""},
        {"id": "512021170000", "text": "四川省资阳市安岳县看守所", "py": "", "wb": ""},
        {"id": "512022150000", "text": "四川省资阳市乐至县看守所", "py": "", "wb": ""},
        {"id": "512081190000", "text": "四川省简阳市看守所", "py": "", "wb": ""},
        {"id": "513200240000", "text": "四川省阿坝州看守所", "py": "", "wb": ""},
        {"id": "513221120000", "text": "四川省阿坝州汶川县公安局看守所", "py": "", "wb": ""},
        {"id": "513222070000", "text": "四川省阿坝州理县公安局看守所", "py": "", "wb": ""},
        {"id": "513223080000", "text": "四川省阿坝州茂县看守所", "py": "", "wb": ""},
        {"id": "513224070000", "text": "四川省阿坝州松潘县公安局看守所", "py": "", "wb": ""},
        {"id": "513225070000", "text": "四川省阿坝州九寨沟县看守所", "py": "", "wb": ""},
        {"id": "513226260000", "text": "四川省阿坝州金川县看守所", "py": "", "wb": ""},
        {"id": "513227070000", "text": "四川省阿坝州小金县看守所", "py": "", "wb": ""},
        {"id": "513228070000", "text": "四川省阿坝州黑水县公安局看守所", "py": "", "wb": ""},
        {"id": "513229100000", "text": "四川省阿坝州马尔康县公安局看守所", "py": "", "wb": ""},
        {"id": "513230070000", "text": "四川省阿坝州壤塘县看守所", "py": "", "wb": ""},
        {"id": "513231200000", "text": "四川省阿坝州阿坝县公安局看守所", "py": "", "wb": ""},
        {"id": "513232110000", "text": "四川省阿坝州若尔盖县公安局看守所", "py": "", "wb": ""},
        {"id": "513233070000", "text": "四川省阿坝州红原县公安局看守所", "py": "", "wb": ""},
        {"id": "513300180000", "text": "四川省甘孜藏族自治州看守所", "py": "", "wb": ""},
        {"id": "513321110000", "text": "四川省甘孜藏族自治州康定县公安局看守所", "py": "", "wb": ""},
        {"id": "513322070000", "text": "四川省甘孜藏族自治州泸定县公安局看守所", "py": "", "wb": ""},
        {"id": "513323100000", "text": "四川省甘孜藏族自治州丹巴县看守所", "py": "", "wb": ""},
        {"id": "513324090000", "text": "四川省甘孜藏族自治州九龙县看守所", "py": "", "wb": ""},
        {"id": "513326220000", "text": "四川省甘孜藏族自治州道孚县公安局看守所", "py": "", "wb": ""},
        {"id": "513327110000", "text": "四川省甘孜藏族自治州炉霍县公安局看守所", "py": "", "wb": ""},
        {"id": "513328060000", "text": "四川省甘孜藏族自治州甘孜县公安局看守所", "py": "", "wb": ""},
        {"id": "513329150000", "text": "四川省甘孜藏族自治州新龙县公安局看守所", "py": "", "wb": ""},
        {"id": "513330090000", "text": "四川省甘孜藏族自治州德格县公安局看守所", "py": "", "wb": ""},
        {"id": "513331100000", "text": "四川省甘孜藏族自治州白玉县公安局看守所", "py": "", "wb": ""},
        {"id": "513332110000", "text": "四川省甘孜藏族自治州石渠县公安局看守所", "py": "", "wb": ""},
        {"id": "513333140000", "text": "四川省甘孜藏族自治州色达县公安局色达县看守所", "py": "", "wb": ""},
        {"id": "513334160000", "text": "四川省甘孜藏族自治州理塘县公安局看守所", "py": "", "wb": ""},
        {"id": "513335170000", "text": "四川省甘孜藏族自治州巴塘县公安局看守所", "py": "", "wb": ""},
        {"id": "513337070000", "text": "四川省甘孜藏族自治州稻城县公安局看守所", "py": "", "wb": ""},
        {"id": "513338090000", "text": "四川省甘孜藏族自治州得荣县看守所", "py": "", "wb": ""},
        {"id": "513400290000", "text": "四川省凉山彝族自治州看守所", "py": "", "wb": ""},
        {"id": "513401190000", "text": "四川省西昌市看守所", "py": "", "wb": ""},
        {"id": "513422110000", "text": "四川省凉山彝族自治州木里藏族自治县看守所", "py": "", "wb": ""},
        {"id": "513423130000", "text": "四川省凉山彝族自治州盐源县看守所", "py": "", "wb": ""},
        {"id": "513424180000", "text": "四川省凉山彝族自治州德昌县看守所", "py": "", "wb": ""},
        {"id": "513425150000", "text": "四川省凉山彝族自治州会理县看守所", "py": "", "wb": ""},
        {"id": "513426140000", "text": "四川省凉山彝族自治州会东县看守所", "py": "", "wb": ""},
        {"id": "513427070000", "text": "四川省凉山彝族自治州宁南县看守所", "py": "", "wb": ""},
        {"id": "513428150000", "text": "四川省凉山彝族自治州普格县看守所", "py": "", "wb": ""},
        {"id": "513429110000", "text": "四川省凉山彝族自治州布拖县看守所", "py": "", "wb": ""},
        {"id": "513430060000", "text": "四川省凉山彝族自治州金阳县看守所", "py": "", "wb": ""},
        {"id": "513431120000", "text": "四川省凉山彝族自治州昭觉县看守所", "py": "", "wb": ""},
        {"id": "513432130000", "text": "四川省凉山彝族自治州喜德县看守所", "py": "", "wb": ""},
        {"id": "513433090000", "text": "四川省凉山彝族自治州冕宁县看守所", "py": "", "wb": ""},
        {"id": "513434120000", "text": "四川省凉山彝族自治州越西县看守所", "py": "", "wb": ""},
        {"id": "513435090000", "text": "四川省凉山彝族自治州甘洛县看守所", "py": "", "wb": ""},
        {"id": "513436130000", "text": "四川省凉山彝族自治州美姑县看守所", "py": "", "wb": ""},
        {"id": "513437100000", "text": "四川省凉山彝族自治州雷波县看守所", "py": "", "wb": ""},
        {"id": "801001D10000", "text": "成都铁路公安处看守所", "py": "", "wb": ""},
        {"id": "801002D10000", "text": "重庆铁路公安处看守所", "py": "", "wb": ""},
        {"id": "801003D10000", "text": "贵阳铁路公安处看守所", "py": "", "wb": ""},
        {"id": "801004D10000", "text": "西昌铁路公安处看守所", "py": "", "wb": ""}
    ],
    'BD_D_WCNRFDDLR_ZRHBHRLXDM': [//证人、被害人
        {"id": "1", "text": "证人", "py": "", "wb": ""},
        {"id": "2", "text": "被害人", "py": "", "wb": ""}
    ],
    'BD_D_WCNRFDDLR_XWLXDM': [//询问
        {"id": "1", "text": "询问", "py": "", "wb": ""},
        {"id": "2", "text": "讯问", "py": "", "wb": ""}
    ],
    'BD_D_HJFZXYR_RSCSDM': [//会见犯罪嫌疑人人身措施代码
        {"id": "2", "text": "拘留", "py": "JL", "wb": "RQ"},
        {"id": "4", "text": "监视居住", "py": "JSJZ", "wb": "JPNW"},
        {"id": "5", "text": "逮捕", "py": "DB", "wb": "VR"}
    ],
    'BD_D_SWTZ_RYJSDM': [//死亡通知人员角色代码
        {"id": "1", "text": "嫌疑人", "py": "", "wb": ""},
        {"id": "2", "text": "被告人", "py": "", "wb": ""},
        {"id": "3", "text": "罪犯", "py": "", "wb": ""}
    ],
    'BD_D_ZJBQFLMC': [
        {"id": "01", "text": "中华人民共和国行政处罚法", "py": "", "wb": ""},
        {"id": "02", "text": "中华人民共和国治安管理处罚法", "py": "", "wb": ""},
        {"id": "03", "text": "中华人民共和国行政强制法", "py": "", "wb": ""},
        {"id": "04", "text": "中华人民共和国道路交通安全法", "py": "", "wb": ""},
        {"id": "05", "text": "中华人民共和国出境入境管理法", "py": "", "wb": ""}
    ],
    'BD_D_JXFS':[//举行方式
        {"id":"1","text":"公开举行","py":"GKJX","wb":"WGIT"},
        {"id":"2","text":"不公开举行","py":"BGKJX","wb":"GWGIT"}
    ],
    'BD_D_SFTZ_JLDBLXDM':[//释放通知逮捕拘留类型代码
        {"id":"5","text":"逮捕","py":"","wb":""},
        {"id":"2","text":"拘留","py":"JL","wb":"RQ"}
    ],
    'BD_D_HYZ_SDFSDM':[//送达方式
        {"id":"01","text":"直接送达","py":"ZJSD","wb":"FRUD"},
        {"id":"02","text":"邮寄","py":"YJ","wb":""},
        {"id":"03","text":"传真","py":"CZ","wb":""}
    ],
    'BD_D_CX_QZCS':[
        {"id":"3","text":"取保候审","py":"","wb":""},
        {"id":"4","text":"监视居住","py":"","wb":""}
    ],
    'BD_D_HYZ_HYYYDM':[
        {"id":"01","text":"侦查机关侦查终结，移送人民检察院审查起诉","py":"ZCJGZCZJ，YSRMJCYSCQS","wb":"WSSUWSXX，TUWNSPBPSFY"},
        {"id":"02","text":"人民检察院退回侦查机关补充侦查","py":"","wb":""},
        {"id":"03","text":"侦查机关补充侦查完毕后重新移送人员检察院审查起诉","py":"ZCJGBCZCWBHZXYSRYJCYSCQS","wb":"WSSUPYWSPXRTUTUWKSPBPSFY"},
        {"id":"04","text":"改变办案机关","py":"","wb":""}
    ],
    'GB_D_GJHDQDM':[//国籍
        {"id":"004","text":"阿富汗","py":"AFH","wb":"BPI"},
        {"id":"008","text":"阿尔巴尼亚","py":"AEBNY","wb":"BQCNG"},
        {"id":"010","text":"南极洲","py":"NJZ","wb":"FSI"},
        {"id":"012","text":"阿尔及利亚","py":"AEJLY","wb":"BQETG"},
        {"id":"016","text":"美属萨摩亚","py":"MSSMY","wb":"UNAYG"},
        {"id":"020","text":"安道尔","py":"ADE","wb":"PUQ"},
        {"id":"024","text":"安哥拉","py":"AGL","wb":"PSR"},
        {"id":"028","text":"安提瓜和巴布达","py":"ATGHBBD","wb":"PRRTCDD"},
        {"id":"031","text":"阿塞拜疆","py":"ASBJ","wb":"BPRX"},
        {"id":"032","text":"阿根廷","py":"AGT","wb":"BST"},
        {"id":"036","text":"澳大利亚","py":"ADLY","wb":"IDTG"},
        {"id":"040","text":"奥地利","py":"ADL","wb":"TFT"},
        {"id":"044","text":"巴哈马","py":"BHM","wb":"CKC"},
        {"id":"048","text":"巴林","py":"BL","wb":"CS"},
        {"id":"050","text":"孟加拉国","py":"MJLG","wb":"BLRL"},
        {"id":"051","text":"亚美尼亚","py":"YMNY","wb":"GUNG"},
        {"id":"052","text":"巴巴多斯","py":"BBDS","wb":"CCQA"},
        {"id":"056","text":"比利时","py":"BLS","wb":"XTJ"},
        {"id":"060","text":"百慕大","py":"BMD","wb":"DAD"},
        {"id":"064","text":"不丹","py":"BD","wb":"GM"},
        {"id":"068","text":"玻利维亚","py":"BLWY","wb":"GTXG"},
        {"id":"070","text":"波斯尼亚和黑塞哥维那","py":"BSNYHHSGWN","wb":"IANGTLPSXV"},
        {"id":"072","text":"博茨瓦纳","py":"BCWN","wb":"FAGX"},
        {"id":"074","text":"布维岛","py":"BWD","wb":"DXQ"},
        {"id":"076","text":"巴西","py":"BX","wb":"CS"},
        {"id":"084","text":"伯利兹","py":"BLZ","wb":"WTU"},
        {"id":"086","text":"英属印度洋领地","py":"YSYDYLD","wb":"ANQYIWF"},
        {"id":"090","text":"所罗门群岛","py":"SLMQD","wb":"RLUVQ"},
        {"id":"092","text":"英属维尔京群岛","py":"YSWEJQD","wb":"ANXQYVQ"},
        {"id":"096","text":"文莱","py":"WL","wb":"YA"},
        {"id":"100","text":"保加利亚","py":"BJLY","wb":"WLTG"},
        {"id":"104","text":"缅甸","py":"MD","wb":"XQ"},
        {"id":"108","text":"布隆迪","py":"BLD","wb":"DBM"},
        {"id":"112","text":"白俄罗斯","py":"BELS","wb":"RWLA"},
        {"id":"116","text":"柬埔寨","py":"JPZ","wb":"GFP"},
        {"id":"120","text":"喀麦隆","py":"KML","wb":"KGB"},
        {"id":"124","text":"加拿大","py":"JND","wb":"LWD"},
        {"id":"132","text":"佛得角","py":"FDJ","wb":"WTQ"},
        {"id":"136","text":"开曼群岛","py":"KMQD","wb":"GJVQ"},
        {"id":"140","text":"中非","py":"ZF","wb":"KD"},
        {"id":"144","text":"斯里兰卡","py":"SLLK","wb":"AJUH"},
        {"id":"148","text":"乍得","py":"ZD","wb":"TT"},
        {"id":"152","text":"智利","py":"ZL","wb":"TT"},
        {"id":"156","text":"中国","py":"ZG","wb":"KL"},
        {"id":"158","text":"中国台湾","py":"ZGTW","wb":"KLCI"},
        {"id":"162","text":"圣诞岛","py":"SDD","wb":"CYQ"},
        {"id":"166","text":"科科斯(基林)群岛","py":"KKS(JL)QD","wb":"TTA(AS)VQ"},
        {"id":"170","text":"哥伦比亚","py":"GLBY","wb":"SWXG"},
        {"id":"174","text":"科摩罗","py":"KML","wb":"TYL"},
        {"id":"175","text":"马约特","py":"MYT","wb":"CXT"},
        {"id":"178","text":"刚果","py":"GG","wb":"MJ"},
        {"id":"180","text":"扎伊尔","py":"ZYE","wb":"RWQ"},
        {"id":"184","text":"库克群岛","py":"KKQD","wb":"YDVQ"},
        {"id":"188","text":"哥斯达黎加","py":"GSDLJ","wb":"SADTL"},
        {"id":"191","text":"克罗地亚","py":"KLDY","wb":"DLFG"},
        {"id":"192","text":"古巴","py":"GB","wb":"DC"},
        {"id":"196","text":"塞浦路斯","py":"SPLS","wb":"PIKA"},
        {"id":"203","text":"捷克","py":"JK","wb":"RD"},
        {"id":"204","text":"贝宁","py":"BN","wb":"MP"},
        {"id":"208","text":"丹麦","py":"DM","wb":"MG"},
        {"id":"212","text":"多米尼克","py":"DMNK","wb":"QOND"},
        {"id":"214","text":"多米尼加共和国","py":"DMNJGHG","wb":"QONLATL"},
        {"id":"218","text":"厄瓜多尔","py":"EGDE","wb":"DRQQ"},
        {"id":"222","text":"萨尔瓦多","py":"SEWD","wb":"AQGQ"},
        {"id":"226","text":"赤道几内亚","py":"CDJNY","wb":"FUMMG"},
        {"id":"231","text":"埃塞俄比亚","py":"ASEBY","wb":"FPWXG"},
        {"id":"232","text":"厄立特里亚","py":"ELTLY","wb":"DUTJG"},
        {"id":"233","text":"爱沙尼亚","py":"ASNY","wb":"EING"},
        {"id":"234","text":"法罗群岛","py":"FLQD","wb":"ILVQ"},
        {"id":"238","text":"马尔维纳斯群岛(福克兰群岛)","py":"MEWNSQD(FKLQD)","wb":"CQXXAVQ(PDUVQ)"},
        {"id":"239","text":"南乔治亚岛和南桑德韦奇岛","py":"NQZYDHNSDWQD","wb":"FTIGQTFCTFDQ"},
        {"id":"242","text":"斐济","py":"FJ","wb":"DI"},
        {"id":"246","text":"芬兰","py":"FL","wb":"AU"},
        {"id":"250","text":"法国","py":"FG","wb":"IL"},
        {"id":"254","text":"法属圭亚那","py":"FSGYN","wb":"INFGV"},
        {"id":"258","text":"法属波利尼西亚","py":"FSBLNXY","wb":"INITNSG"},
        {"id":"260","text":"法属南部领土","py":"FSNBLT","wb":"INFUWF"},
        {"id":"262","text":"吉布提","py":"JBT","wb":"FDR"},
        {"id":"266","text":"加蓬","py":"JP","wb":"LA"},
        {"id":"268","text":"格鲁吉亚","py":"GLJY","wb":"SQFG"},
        {"id":"270","text":"冈比亚","py":"GBY","wb":"MXG"},
        {"id":"276","text":"德国","py":"DG","wb":"TL"},
        {"id":"288","text":"加纳","py":"JN","wb":"LX"},
        {"id":"292","text":"直布罗陀","py":"ZBLT","wb":"FDLB"},
        {"id":"296","text":"基里巴斯","py":"JLBS","wb":"AJCA"},
        {"id":"300","text":"希腊","py":"XL","wb":"QE"},
        {"id":"304","text":"格陵兰","py":"GLL","wb":"SBU"},
        {"id":"308","text":"格林纳达","py":"GLND","wb":"SSXD"},
        {"id":"312","text":"瓜德罗普","py":"GDLP","wb":"RTLU"},
        {"id":"316","text":"关岛","py":"GD","wb":"UQ"},
        {"id":"320","text":"危地马拉","py":"WDML","wb":"QFCR"},
        {"id":"324","text":"几内亚","py":"JNY","wb":"MMG"},
        {"id":"328","text":"圭亚那","py":"GYN","wb":"FGV"},
        {"id":"332","text":"海地","py":"HD","wb":"IF"},
        {"id":"334","text":"赫德岛和麦克唐纳岛","py":"HDDHMKTND","wb":"FTQTGDYXQ"},
        {"id":"336","text":"梵蒂冈","py":"FDG","wb":"SAM"},
        {"id":"340","text":"洪都拉斯","py":"HDLS","wb":"IFRA"},
        {"id":"344","text":"香港","py":"XG","wb":"TI"},
        {"id":"348","text":"匈牙利","py":"XYL","wb":"QAT"},
        {"id":"352","text":"冰岛","py":"BD","wb":"UQ"},
        {"id":"356","text":"印度","py":"YD","wb":"QY"},
        {"id":"360","text":"印度尼西亚","py":"YDNXY","wb":"QYNSG"},
        {"id":"364","text":"伊朗","py":"YL","wb":"WY"},
        {"id":"368","text":"伊拉克","py":"YLK","wb":"WRD"},
        {"id":"372","text":"爱尔兰","py":"AEL","wb":"EQU"},
        {"id":"374","text":"巴勒斯坦","py":"BLST","wb":"CAAF"},
        {"id":"376","text":"以色列","py":"YSL","wb":"CQG"},
        {"id":"380","text":"意大利","py":"YDL","wb":"UDT"},
        {"id":"384","text":"科特迪瓦","py":"KTDW","wb":"TTMG"},
        {"id":"388","text":"牙买加","py":"YMJ","wb":"ANL"},
        {"id":"392","text":"日本","py":"RB","wb":"JS"},
        {"id":"398","text":"哈萨克斯坦","py":"HSKST","wb":"KADAF"},
        {"id":"400","text":"约旦","py":"YD","wb":"XJ"},
        {"id":"404","text":"肯尼亚","py":"KNY","wb":"HNG"},
        {"id":"408","text":"朝鲜","py":"CX","wb":"FQ"},
        {"id":"410","text":"韩国","py":"HG","wb":"FL"},
        {"id":"414","text":"科威特","py":"KWT","wb":"TDT"},
        {"id":"417","text":"吉尔吉斯斯坦","py":"JEJSST","wb":"FQFAAF"},
        {"id":"418","text":"老挝","py":"LW","wb":"FR"},
        {"id":"422","text":"黎巴嫩","py":"LBN","wb":"TCV"},
        {"id":"426","text":"莱索托","py":"LST","wb":"AFR"},
        {"id":"428","text":"拉脱维亚","py":"LTWY","wb":"REXG"},
        {"id":"430","text":"利比里亚","py":"LBLY","wb":"TXJG"},
        {"id":"434","text":"利比亚","py":"LBY","wb":"TXG"},
        {"id":"438","text":"列支敦士登","py":"LZDSD","wb":"GFYFW"},
        {"id":"440","text":"立陶宛","py":"LTW","wb":"UBP"},
        {"id":"442","text":"卢森堡","py":"LSB","wb":"HSW"},
        {"id":"446","text":"澳门","py":"AM","wb":"IU"},
        {"id":"450","text":"马达加斯加","py":"MDJSJ","wb":"CDLAL"},
        {"id":"454","text":"马拉维","py":"MLW","wb":"CRX"},
        {"id":"458","text":"马来西亚","py":"MLXY","wb":"CGSG"},
        {"id":"462","text":"马尔代夫","py":"MEDF","wb":"CQWF"},
        {"id":"466","text":"马里","py":"ML","wb":"CJ"},
        {"id":"470","text":"马耳他","py":"MET","wb":"CBW"},
        {"id":"474","text":"马提尼克","py":"MTNK","wb":"CRND"},
        {"id":"478","text":"毛里塔尼亚","py":"MLTNY","wb":"TJFNG"},
        {"id":"480","text":"毛里求斯","py":"MLQS","wb":"TJFA"},
        {"id":"484","text":"墨西哥","py":"MXG","wb":"LSS"},
        {"id":"492","text":"摩纳哥","py":"MNG","wb":"YXS"},
        {"id":"496","text":"蒙古","py":"MG","wb":"AD"},
        {"id":"498","text":"摩尔多瓦","py":"MEDW","wb":"YQQG"},
        {"id":"500","text":"蒙特塞拉特","py":"MTSLT","wb":"ATPRT"},
        {"id":"504","text":"摩洛哥","py":"MLG","wb":"YIS"},
        {"id":"508","text":"莫桑比克","py":"MSBK","wb":"ACXD"},
        {"id":"512","text":"阿曼","py":"AM","wb":"BJ"},
        {"id":"516","text":"纳米比亚","py":"NMBY","wb":"XOXG"},
        {"id":"520","text":"瑙鲁","py":"NL","wb":"GQ"},
        {"id":"524","text":"尼泊尔","py":"NBE","wb":"NIQ"},
        {"id":"528","text":"荷兰","py":"HL","wb":"AU"},
        {"id":"530","text":"荷属安的列斯","py":"HSADLS","wb":"ANPRGA"},
        {"id":"533","text":"阿鲁巴","py":"ALB","wb":"BQC"},
        {"id":"540","text":"新喀里多尼亚","py":"XKLDNY","wb":"UKJQNG"},
        {"id":"548","text":"瓦努阿图","py":"WNAT","wb":"GVBL"},
        {"id":"554","text":"新西兰","py":"XXL","wb":"USU"},
        {"id":"558","text":"尼加拉瓜","py":"NJLG","wb":"NLRR"},
        {"id":"562","text":"尼日尔","py":"NRE","wb":"NJQ"},
        {"id":"566","text":"尼日利亚","py":"NRLY","wb":"NJTG"},
        {"id":"570","text":"纽埃","py":"NA","wb":"XF"},
        {"id":"574","text":"诺福克岛","py":"NFKD","wb":"YPDQ"},
        {"id":"578","text":"挪威","py":"NW","wb":"RD"},
        {"id":"580","text":"北马里亚纳","py":"BMLYN","wb":"UCJGX"},
        {"id":"581","text":"美属太平洋各群岛(包括:中途岛、约翰斯顿岛、豪兰岛、贝克岛和威克岛等)","py":"MSTPYGQD(BK:ZTD、YHSDD、HLD、BKDHWKDD)","wb":"UNDGITVQ(QR:KWQ、XFAGQ、YUQ、MDQTDDQT)"},
        {"id":"583","text":"密克罗尼西亚","py":"MKLNXY","wb":"PDLNSG"},
        {"id":"584","text":"马绍尔群岛","py":"MSEQD","wb":"CXQVQ"},
        {"id":"585","text":"贝劳","py":"BL","wb":"MA"},
        {"id":"586","text":"巴基斯坦","py":"BJST","wb":"CAAF"},
        {"id":"591","text":"巴拿马","py":"BNM","wb":"CWC"},
        {"id":"598","text":"巴布亚新几内亚","py":"BBYXJNY","wb":"CDGUMMG"},
        {"id":"600","text":"巴拉圭","py":"BLG","wb":"CRF"},
        {"id":"604","text":"秘鲁","py":"ML","wb":"TQ"},
        {"id":"608","text":"菲律宾","py":"FLB","wb":"ATP"},
        {"id":"612","text":"皮特凯恩群岛","py":"PTKEQD","wb":"HTMLVQ"},
        {"id":"616","text":"波兰","py":"BL","wb":"IU"},
        {"id":"620","text":"葡萄牙","py":"PTY","wb":"AAA"},
        {"id":"624","text":"几内亚比绍","py":"JNYBS","wb":"MMGXX"},
        {"id":"626","text":"东帝汶","py":"DDW","wb":"AUI"},
        {"id":"630","text":"波多黎各","py":"BDLG","wb":"IQTT"},
        {"id":"634","text":"卡塔尔","py":"KTE","wb":"HFQ"},
        {"id":"638","text":"留尼汪","py":"LNW","wb":"QNI"},
        {"id":"642","text":"罗马尼亚","py":"LMNY","wb":"LCNG"},
        {"id":"643","text":"俄罗斯","py":"ELS","wb":"WLA"},
        {"id":"646","text":"卢旺达","py":"LWD","wb":"HJD"},
        {"id":"654","text":"圣赫勒拿","py":"SHLN","wb":"CFAW"},
        {"id":"659","text":"圣基茨和尼维斯","py":"SJCHNWS","wb":"CAATNXA"},
        {"id":"660","text":"安圭拉","py":"AGL","wb":"PFR"},
        {"id":"662","text":"圣卢西亚","py":"SLXY","wb":"CHSG"},
        {"id":"666","text":"圣皮埃尔和密克隆","py":"SPAEHMKL","wb":"CHFQTPDB"},
        {"id":"670","text":"圣文森特和格林纳丁斯","py":"SWSTHGLNDS","wb":"CYSTTSSXSA"},
        {"id":"674","text":"圣马力诺","py":"SMLN","wb":"CCLY"},
        {"id":"678","text":"圣多美和普林西比","py":"SDMHPLXB","wb":"CQUTUSSX"},
        {"id":"682","text":"沙特阿拉伯","py":"STALB","wb":"ITBRW"},
        {"id":"686","text":"塞内加尔","py":"SNJE","wb":"PMLQ"},
        {"id":"690","text":"塞舌尔","py":"SSE","wb":"PTQ"},
        {"id":"694","text":"塞拉利昂","py":"SLLA","wb":"PRTJ"},
        {"id":"702","text":"新加坡","py":"XJP","wb":"ULF"},
        {"id":"703","text":"斯洛伐克","py":"SLFK","wb":"AIWD"},
        {"id":"704","text":"越南","py":"YN","wb":"FF"},
        {"id":"705","text":"斯洛文尼亚","py":"SLWNY","wb":"AIYNG"},
        {"id":"706","text":"索马里","py":"SML","wb":"FCJ"},
        {"id":"710","text":"南非","py":"NF","wb":"FD"},
        {"id":"716","text":"津巴布韦","py":"JBBW","wb":"ICDF"},
        {"id":"724","text":"西班牙","py":"XBY","wb":"SGA"},
        {"id":"732","text":"西撒哈拉","py":"XSHL","wb":"SRKR"},
        {"id":"736","text":"苏丹","py":"SD","wb":"AM"},
        {"id":"740","text":"苏里南","py":"SLN","wb":"AJF"},
        {"id":"744","text":"斯瓦尔巴群岛","py":"SWEBQD","wb":"AGQCVQ"},
        {"id":"748","text":"斯威士兰","py":"SWSL","wb":"ADFU"},
        {"id":"752","text":"瑞典","py":"RD","wb":"GM"},
        {"id":"756","text":"瑞士","py":"RS","wb":"GF"},
        {"id":"760","text":"叙利亚","py":"XLY","wb":"WTG"},
        {"id":"762","text":"塔吉克斯坦","py":"TJKST","wb":"FFDAF"},
        {"id":"764","text":"泰国","py":"TG","wb":"DL"},
        {"id":"768","text":"多哥","py":"DG","wb":"QS"},
        {"id":"772","text":"托克劳","py":"TKL","wb":"RDA"},
        {"id":"776","text":"汤加","py":"TJ","wb":"IL"},
        {"id":"780","text":"特立尼达和多巴哥","py":"TLNDHDBG","wb":"TUNDTQCS"},
        {"id":"784","text":"阿联酋","py":"ALQ","wb":"BBU"},
        {"id":"788","text":"突尼斯","py":"TNS","wb":"PNA"},
        {"id":"792","text":"土耳其","py":"TEQ","wb":"FBA"},
        {"id":"795","text":"土库曼斯坦","py":"TKMST","wb":"FYJAF"},
        {"id":"796","text":"特克斯科斯群岛","py":"TKSKSQD","wb":"TDATAVQ"},
        {"id":"798","text":"图瓦卢","py":"TWL","wb":"LGH"},
        {"id":"800","text":"乌干达","py":"WGD","wb":"QFD"},
        {"id":"804","text":"乌克兰","py":"WKL","wb":"QDU"},
        {"id":"807","text":"马斯顿","py":"MSD","wb":"CAG"},
        {"id":"818","text":"埃及","py":"AJ","wb":"FE"},
        {"id":"826","text":"英国","py":"YG","wb":"AL"},
        {"id":"834","text":"坦桑尼亚","py":"TSNY","wb":"FCNG"},
        {"id":"840","text":"美国","py":"MG","wb":"UL"},
        {"id":"850","text":"美属维尔京群岛","py":"MSWEJQD","wb":"UNXQYVQ"},
        {"id":"854","text":"布基纳法索","py":"BJNFS","wb":"DAXIF"},
        {"id":"858","text":"乌拉圭","py":"WLG","wb":"QRF"},
        {"id":"860","text":"乌兹别克斯坦","py":"WZBKST","wb":"QUKDAF"},
        {"id":"862","text":"委内瑞拉","py":"WNRL","wb":"TMGR"},
        {"id":"876","text":"瓦利斯和富图纳群岛","py":"WLSHFTNQD","wb":"GTATPLXVQ"},
        {"id":"882","text":"萨摩亚","py":"SMY","wb":"AYG"},
        {"id":"887","text":"也门","py":"YM","wb":"BU"},
        {"id":"891","text":"南斯拉夫","py":"NSLF","wb":"FARF"},
        {"id":"894","text":"赞比亚","py":"ZBY","wb":"TXG"},
        {"id":"999","text":"其它国家（地区）","py":"QTGJ（DQ）","wb":"APLP（FA）"}
    ],
    'BD_D_CF':[//查封
        {"id":"1","text":"查封","py":"CF","wb":"SF"},
        {"id":"2","text":"延长查封","py":"YZCF","wb":"TTSF"}
    ],
    'BD_D_KYKL':[//扣押
        {"id":"1","text":"扣押、扣留","py":"KY、KL","wb":"RR、RQ"},
        {"id":"2","text":"延长扣押、扣留","py":"YZKY、KL","wb":"TTRR、RQ"}
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

        }],
    'GA_D_XZAJLBDM': [
        {
            "id": "ROOT", "text": "行政案件类别", "iconCls": "icon-treeroot1", "children": [
            {
                "id": "01000000", "text": "人民警察法", "state": "closed", "children": [
                {"id": "01000001", "text": "非法制造、贩卖、持有、使用警用标志、制式服装、警械、证件"},
                {"id": "01000002", "text": "非法制造、贩卖警用标志、制式服装"},
                {"id": "01000003", "text": "非法制造警用标志、制式服装"},
                {"id": "01000004", "text": "非法持有、使用警用标志、制式服装"}
            ]
            },
            {
                "id": "02000000", "text": "人民警察制式服装及其标志管理", "state": "closed", "children": [
                {"id": "02000001", "text": "生产、销售仿制警用制式服装、标志"},
                {"id": "02000002", "text": "穿着、佩带仿制警用制式服装、标志"}
            ]
            },
            {
                "id": "03000000", "text": "治安管理处罚法", "state": "closed", "children": [
                {
                    "id": "03010000", "text": "扰乱公共秩序", "state": "closed", "children": [
                    {"id": "03010001", "text": "扰乱单位秩序"},
                    {"id": "03010002", "text": "扰乱公共场所秩序"},
                    {"id": "03010003", "text": "扰乱公共交通工具上的秩序"},
                    {"id": "03010004", "text": "妨碍交通工具正常行驶"},
                    {"id": "03010005", "text": "破坏选举秩序"},
                    {"id": "03010006", "text": "聚众扰乱单位秩序"},
                    {"id": "03010007", "text": "聚众扰乱公共场所秩序"},
                    {"id": "03010008", "text": "聚众扰乱公共交通工具上的秩序"},
                    {"id": "03010009", "text": "聚众妨碍交通工具正常行驶"},
                    {"id": "03010010", "text": "聚众破坏选举秩序"},
                    {"id": "03010011", "text": "强行进入大型活动场内"},
                    {"id": "03010012", "text": "违规在大型活动场内燃放物品"},
                    {"id": "03010013", "text": "在大型活动场内展示侮辱性物品"},
                    {"id": "03010014", "text": "围攻大型活动工作人员"},
                    {"id": "03010015", "text": "向大型活动场内投掷杂物"},
                    {"id": "03010016", "text": "其他扰乱大型活动秩序的行为"},
                    {"id": "03010017", "text": "虚构事实扰乱公共秩序"},
                    {"id": "03010018", "text": "投放虚假危险物质"},
                    {"id": "03010019", "text": "扬言实施放火、爆炸、投放危险物质"},
                    {"id": "03010020", "text": "寻衅滋事"},
                    {"id": "03010021", "text": "组织、教唆、胁迫、诱骗、煽动从事邪教、会道门活动"},
                    {"id": "03010022", "text": "利用邪教、会道门、迷信活动危害社会"},
                    {"id": "03010023", "text": "冒用宗教、气功名义危害社会"},
                    {"id": "03010024", "text": "故意干扰无线电业务正常进行"},
                    {"id": "03010025", "text": "拒不消除无线电台(站)的有害干扰"},
                    {"id": "03010026", "text": "非法侵入计算机信息系统"},
                    {"id": "03010027", "text": "非法改变计算机信息系统功能"},
                    {"id": "03010028", "text": "非法改变计算机信息系统数据和应用程序"},
                    {"id": "03010029", "text": "故意制作、传播计算机破坏性程序影响运行"}
                ]
                },
                {
                    "id": "03020000", "text": "妨害公共安全", "state": "closed", "children": [
                    {"id": "03020001", "text": "非法制造、买卖、储存、运输、邮寄、携带、使用、提供、处置危险物质"},
                    {"id": "03020002", "text": "危险物质被盗、被抢、丢失不报"},
                    {"id": "03020003", "text": "非法携带枪支、弹药、管制器具"},
                    {"id": "03020004", "text": "盗窃、损毁公共设施"},
                    {"id": "03020005", "text": "移动、损毁边境、领土、领海标志设施"},
                    {"id": "03020006", "text": "非法进行影响国(边)界线走向的活动"},
                    {"id": "03020007", "text": "非法修建有碍国(边)境管理的设施"},
                    {"id": "03020008", "text": "盗窃、损坏、擅自移动航空设施"},
                    {"id": "03020009", "text": "强行进入航空器驾驶舱"},
                    {"id": "03020010", "text": "在航空器上使用禁用物品"},
                    {"id": "03020011", "text": "盗窃、损毁、擅自移动铁路设施、设备、机车车辆配件、安全标志"},
                    {"id": "03020012", "text": "在铁路线路上放置障碍物"},
                    {"id": "03020013", "text": "故意向列车投掷物品"},
                    {"id": "03020014", "text": "在铁路沿线非法挖掘坑穴、采石取沙"},
                    {"id": "03020015", "text": "在铁路线路上私设道口、平交过道"},
                    {"id": "03020016", "text": "擅自进入铁路防护网"},
                    {"id": "03020017", "text": "违法在铁路线路上行走坐卧、抢越铁路"},
                    {"id": "03020018", "text": "擅自安装、使用电网"},
                    {"id": "03020019", "text": "安装、使用电网不符合安全规定"},
                    {"id": "03020020", "text": "道路施工不设置安全防护设施"},
                    {"id": "03020021", "text": "故意损毁、移动道路施工安全防护设施"},
                    {"id": "03020022", "text": "盗窃、损毁路面公共设施"},
                    {"id": "03020023", "text": "违规举办大型活动"},
                    {"id": "03020024", "text": "公共场所经营管理人员违反安全规定"}
                ]
                },
                {
                    "id": "03030000", "text": "侵犯人身权利、财产权利", "state": "closed", "children": [
                    {"id": "03030001", "text": "组织、胁迫、诱骗进行恐怖、残忍表演"},
                    {"id": "03030002", "text": "强迫劳动"},
                    {"id": "03030003", "text": "非法限制人身自由"},
                    {"id": "03030004", "text": "非法侵入住宅"},
                    {"id": "03030005", "text": "非法搜查身体"},
                    {"id": "03030006", "text": "胁迫、诱骗、利用他人乞讨"},
                    {"id": "03030007", "text": "以滋扰他人的方式乞讨"},
                    {"id": "03030008", "text": "威胁人身安全"},
                    {"id": "03030009", "text": "侮辱"},
                    {"id": "03030010", "text": "诽谤"},
                    {"id": "03030011", "text": "诬告陷害行为"},
                    {"id": "03030012", "text": "威胁、侮辱、殴打、打击报复证人及其近亲属"},
                    {"id": "03030013", "text": "发送信息干扰正常生活"},
                    {"id": "03030014", "text": "侵犯隐私"},
                    {"id": "03030015", "text": "殴打他人"},
                    {"id": "03030016", "text": "故意伤害"},
                    {"id": "03030017", "text": "猥亵"},
                    {"id": "03030018", "text": "在公共场所故意裸露身体"},
                    {"id": "03030019", "text": "虐待"},
                    {"id": "03030020", "text": "遗弃"},
                    {"id": "03030021", "text": "强迫交易"},
                    {"id": "03030022", "text": "煽动民族仇恨、民族歧视"},
                    {"id": "03030023", "text": "刊载民族歧视、侮辱内容"},
                    {"id": "03030024", "text": "冒领、隐匿、毁弃、私自开拆、非法检查他人邮件"},
                    {"id": "03030025", "text": "盗窃"},
                    {"id": "03030026", "text": "诈骗"},
                    {"id": "03030027", "text": "哄抢"},
                    {"id": "03030028", "text": "抢夺"},
                    {"id": "03030029", "text": "敲诈勒索"},
                    {"id": "03030030", "text": "故意损毁财物"}
                ]
                },
                {
                    "id": "03040000", "text": "妨害社会管理", "state": "closed", "children": [
                    {"id": "03040001", "text": "拒不执行紧急状态下的决定、命令"},
                    {"id": "03040002", "text": "阻碍执行职务"},
                    {"id": "03040003", "text": "阻碍特种车辆通行"},
                    {"id": "03040004", "text": "冲闯警戒带、警戒区"},
                    {"id": "03040005", "text": "招摇撞骗"},
                    {"id": "03040006", "text": "伪造、变造、买卖公文、证件、证明文件、印章"},
                    {"id": "03040007", "text": "买卖、使用伪造、变造的公文、证件、证明文件"},
                    {"id": "03040008", "text": "伪造、变造、倒卖有价票证、凭证"},
                    {"id": "03040009", "text": "伪造、变造船舶户牌"},
                    {"id": "03040010", "text": "买卖、使用伪造、变造的船舶户牌"},
                    {"id": "03040011", "text": "涂改船舶发动机号码"},
                    {"id": "03040012", "text": "驾船擅自进入、停靠国家管制的水域、岛屿"},
                    {"id": "03040013", "text": "非法以社团名义活动"},
                    {"id": "03040014", "text": "以被撤销登记的社团名义活动"},
                    {"id": "03040015", "text": "未获公安许可擅自经营"},
                    {"id": "03040016", "text": "煽动、策划非法集会、游行、示威"},
                    {"id": "03040017", "text": "不按规定登记住宿旅客信息"},
                    {"id": "03040018", "text": "不制止住宿旅客带入危险物质"},
                    {"id": "03040019", "text": "明知住宿旅客是犯罪嫌疑人不报"},
                    {"id": "03040020", "text": "将房屋出租给无身份证件人居住"},
                    {"id": "03040021", "text": "不按规定登记承租人信息"},
                    {"id": "03040022", "text": "明知承租人利用出租屋犯罪不报告"},
                    {"id": "03040023", "text": "制造噪声干扰正常生活"},
                    {"id": "03040024", "text": "违法承接典当物品"},
                    {"id": "03040025", "text": "典当发现违法犯罪嫌疑人、赃物不报"},
                    {"id": "03040026", "text": "违法收购废旧专用器材"},
                    {"id": "03040027", "text": "收购赃物、有赃物嫌疑的物品"},
                    {"id": "03040028", "text": "收购国家禁止收购的其他物品"},
                    {"id": "03040029", "text": "隐藏、转移、变卖、损毁依法扣押、查封、冻结的财物"},
                    {"id": "03040030", "text": "伪造、隐匿、毁灭证据"},
                    {"id": "03040031", "text": "提供虚假证言"},
                    {"id": "03040032", "text": "谎报案情"},
                    {"id": "03040033", "text": "窝藏、转移、代销赃物"},
                    {"id": "03040034", "text": "违反监督管理规定"},
                    {"id": "03040035", "text": "协助组织、运送他人偷越国(边)境"},
                    {"id": "03040036", "text": "为偷越国(边)境人员提供条件"},
                    {"id": "03040037", "text": "偷越国（边）境"},
                    {"id": "03040038", "text": "故意损坏文物、名胜古迹"},
                    {"id": "03040039", "text": "违法实施危及文物安全的活动"},
                    {"id": "03040040", "text": "偷开机动车"},
                    {"id": "03040041", "text": "无证驾驶、偷开航空器、机动船舶"},
                    {"id": "03040042", "text": "破坏、污损坟墓"},
                    {"id": "03040043", "text": "毁坏、丢弃尸骨、骨灰"},
                    {"id": "03040044", "text": "违法停放尸体"},
                    {"id": "03040045", "text": "卖淫"},
                    {"id": "03040046", "text": "嫖娼"},
                    {"id": "03040047", "text": "拉客招嫖"},
                    {"id": "03040048", "text": "引诱、容留、介绍卖淫"},
                    {"id": "03040049", "text": "制作、运输、复制、出售、出租淫秽物品"},
                    {"id": "03040050", "text": "传播淫秽信息"},
                    {"id": "03040051", "text": "组织播放淫秽音像"},
                    {"id": "03040052", "text": "组织淫秽表演"},
                    {"id": "03040053", "text": "进行淫秽表演"},
                    {"id": "03040054", "text": "参与聚众淫乱"},
                    {"id": "03040055", "text": "为淫秽活动提供条件"},
                    {"id": "03040056", "text": "为赌博提供条件"},
                    {"id": "03040057", "text": "赌博"},
                    {"id": "03040058", "text": "非法种植毒品原植物"},
                    {"id": "03040059", "text": "非法买卖、运输、携带、持有毒品原植物种苗"},
                    {"id": "03040060", "text": "非法运输、买卖、储存、使用罂粟壳"},
                    {"id": "03040061", "text": "非法持有毒品"},
                    {"id": "03040062", "text": "提供毒品"},
                    {"id": "03040063", "text": "吸毒"},
                    {"id": "03040064", "text": "胁迫、欺骗开具麻醉药品、精神药品"},
                    {"id": "03040065", "text": "教唆、引诱、欺骗吸毒"},
                    {"id": "03040066", "text": "为吸毒、赌博、卖淫、嫖娼人员通风报信"},
                    {"id": "03040067", "text": "饲养动物干扰正常生活"},
                    {"id": "03040068", "text": "放任动物恐吓他人"},
                    {"id": "03040069", "text": "担保人不履行担保义务"}
                ]
                }
            ]
            },
            {
                "id": "04000000", "text": "反恐怖主义法", "state": "closed", "children": [
                {"id": "04000001", "text": "参与宣扬恐怖主义、极端主义或者煽动实施恐怖活动、极端主义活动"},
                {"id": "04000002", "text": "参与制作、传播、非法持有宣扬恐怖主义、极端主义的物品"},
                {"id": "04000003", "text": "参与强制他人在公共场所穿戴宣扬恐怖主义、极端主义的服饰、标志"},
                {"id": "04000004", "text": "参与为宣扬恐怖主义、极端主义或者实施恐怖主义、极端主义活动提供信息、资金、物资、劳务、技术、场所等支持、协助、便利"},
                {"id": "04000005", "text": "利用极端主义，实施强迫他人参加宗教活动，或者强迫他人向宗教活动场所、宗教教职人员提供财物或者劳务"},
                {"id": "04000006", "text": "利用极端主义，实施以恐吓、骚扰等方式驱赶其他民族或者有其他信仰的人员离开居住地"},
                {"id": "04000007", "text": "利用极端主义，实施以恐吓、骚扰等方式干涉他人与其他民族或者有其他信仰的人员交往、共同生活"},
                {"id": "04000008", "text": "利用极端主义，实施以恐吓、骚扰等方式干涉他人生活习俗、方式和生产经营"},
                {"id": "04000009", "text": "利用极端主义，实施阻碍国家机关工作人员依法执行职务"},
                {"id": "04000010", "text": "利用极端主义，实施歪曲、诋毁国家政策、法律、行政法规，煽动、教唆抵制人民政府依法管理"},
                {"id": "04000011", "text": "利用极端主义，实施煽动、胁迫群众损毁或者故意损毁居民身份证、户口簿等国家法定证件以及人民币"},
                {"id": "04000012", "text": "利用极端主义，实施煽动、胁迫他人以宗教仪式取代结婚、离婚登记"},
                {"id": "04000013", "text": "利用极端主义，实施煽动、胁迫未成年人不接受义务教育"},
                {"id": "04000014", "text": "利用极端主义，实施其他利用极端主义破坏国家法律制度实施"},
                {"id": "04000015", "text": "明知他人有恐怖活动犯罪、极端主义犯罪行为，窝藏、包庇"},
                {"id": "04000016", "text": "明知他人有恐怖活动犯罪、极端主义犯罪行为，在司法机关向其调查有关情况、收集有关证据时，拒绝提供"},
                {"id": "04000017", "text": "金融机构和特定非金融机构国家反恐怖主义工作领导机构的办事机构公告的恐怖活动组织及恐怖活动人员的资金或者其他资产，未立即予以冻结"},
                {"id": "04000018", "text": "未依照规定为公安机关、国家安全机关依法进行防范、调查恐怖活动提供技术接口和解密等技术支持和协助"},
                {"id": "04000019", "text": "未按照主管部门的要求，停止传输、删除含有恐怖主义、极端主义内容的信息，保存相关记录，关闭相关网站或者关停相关服务"},
                {"id": "04000020", "text": "未落实网络安全、信息内容监督制度和安全技术防范措施，造成含有恐怖主义、极端主义内容的信息传播，情节严重"},
                {"id": "04000021", "text": "未实行安全查验制度，客户身份进行查验"},
                {"id": "04000022", "text": "未依照规定运输、寄递物品进行安全检查或者开封验视"},
                {"id": "04000023", "text": "运输、寄递禁止运输、寄递，存在重大安全隐患物品。"},
                {"id": "04000024", "text": "运输、寄递客户拒绝安全查验的物品"},
                {"id": "04000025", "text": "未实行运输、寄递客户身份、物品信息登记制度"},
                {"id": "04000026", "text": "未按规定客户身份进行查验"},
                {"id": "04000027", "text": "身份不明、拒绝身份查验的客户提供服务"},
                {"id": "04000028", "text": "未依照规定枪支等武器、弹药、管制器具、危险化学品、民用爆炸物品、核与放射物品作出电子追踪标识"},
                {"id": "04000029", "text": "未依照规定民用爆炸物品添加安检示踪标识物"},
                {"id": "04000030", "text": "未依照规定运营中的危险化学品、民用爆炸物品、核与放射物品的运输工具通过定位系统实行监控"},
                {"id": "04000031", "text": "未依照规定传染病病原体等物质实行严格的监督管理，情节严重"},
                {"id": "04000032", "text": "违反国务院有关主管部门或者省级人民政府管制器具、危险化学品、民用爆炸物品决定的管制或者限制交易措施"},
                {"id": "04000033", "text": "未制定防范和应处置恐怖活动的预案、措施"},
                {"id": "04000034", "text": "未建立反恐怖主义工作专项经费保障制度，或者未配备防范和处置设备、设施"},
                {"id": "04000035", "text": "未落实工作机构或者责任人员"},
                {"id": "04000036", "text": "未重要岗位人员进行安全背景审查，或者未将有不适合情形的人员调整工作岗位"},
                {"id": "04000037", "text": "公共交通运输工具未依照规定配备安保人员和相应设备、设施"},
                {"id": "04000038", "text": "未建立公共安全视频图像信息系统值班监看、信息保存使用、运行维护等管理制度"},
                {"id": "04000039", "text": "未依照规定进入大型活动场所、机场、火车站、码头、城市轨道交通站、公路长途客运站、口岸等重点目标的人员、物品和交通工具进行安全检查"},
                {"id": "04000040", "text": "恐怖活动嫌疑人员违反公安机关责令其遵守的约束措施"},
                {"id": "04000041", "text": "编造、传播虚假恐怖事件信息，报道、传播可能引起模仿的恐怖活动的实施细节，发布恐怖事件中残忍、不人道的场景"},
                {"id": "04000042", "text": "未经批准，报道、传播现场应处置的工作人员、人质身份信息和应处置行动情况"},
                {"id": "04000043", "text": "拒不配合有关部门开展反恐怖主义安全防范、情报信息、调查、应处置工作"},
                {"id": "04000044", "text": "阻碍有关部门开展反恐怖主义工作 "}
            ]
            },
            {
                "id": "05000000", "text": "国旗法", "state": "closed", "children": [
                {"id": "05000001", "text": "侮辱国旗"}
            ]
            },
            {
                "id": "06000000", "text": "国徽法", "state": "closed", "children": [
                {"id": "06000001", "text": "侮辱国徽"}
            ]
            },
            {
                "id": "07000000", "text": "惩治破坏金融秩序", "state": "closed", "children": [
                {"id": "07000001", "text": "出售、购买、运输假币"},
                {"id": "07000002", "text": "金融工作人员购买假币、以假币换取货币"},
                {"id": "07000003", "text": "持有、使用假币"},
                {"id": "07000004", "text": "变造货币"},
                {"id": "07000005", "text": "伪造、变造金融票证"},
                {"id": "07000006", "text": "金融票据诈骗"},
                {"id": "07000007", "text": "信用卡诈骗"},
                {"id": "07000008", "text": "保险诈骗"}
            ]
            },
            {
                "id": "08000000", "text": "人民银行法", "state": "closed", "children": [
                {"id": "08000001", "text": "伪造人民币"},
                {"id": "08000002", "text": "变造人民币"},
                {"id": "08000003", "text": "出售、运输伪造、变造的人民币"},
                {"id": "08000004", "text": "购买、持有、使用伪造、变造的人民币"}
            ]
            },
            {
                "id": "09000000", "text": "人民币管理条例", "state": "closed", "children": [
                {"id": "09000001", "text": "故意毁损人民币"}
            ]
            },
            {
                "id": "10000000", "text": "惩治虚开、伪造和非法出售增值税专用发票犯罪的决定", "state": "closed", "children": [
                {"id": "10000001", "text": "伪造、出售伪造的增值税专用发票"},
                {"id": "10000002", "text": "非法出售增值税专用发票"},
                {"id": "10000003", "text": "非法购买增值税专用发票"},
                {"id": "10000004", "text": "购买伪造的增值税专用发票"},
                {"id": "10000005", "text": "非法制造、出售非法制造的可以用于骗取出口退税、抵扣税款的其他发票"},
                {"id": "10000006", "text": "非法制造、出售非法制造的发票"},
                {"id": "10000007", "text": "非法出售可以用于骗取出口退税、抵扣税款的其他发票"},
                {"id": "10000008", "text": "非法出售发票"}
            ]
            },
            {
                "id": "11000000", "text": "严禁卖淫嫖娼的决定", "state": "closed", "children": [
                {"id": "11000001", "text": "放任卖淫、嫖娼活动"}
            ]
            },
            {
                "id": "12000000", "text": "集会游行示威法", "state": "closed", "children": [
                {"id": "12000001", "text": "非法集会、游行、示威"},
                {"id": "12000002", "text": "破坏集会、游行、示威"}
            ]
            },
            {
                "id": "13000000", "text": "居民身份证法", "state": "closed", "children": [
                {"id": "13000001", "text": "骗领居民身份证"},
                {"id": "13000002", "text": "使用骗领的居民身份证"},
                {"id": "13000003", "text": "出租、出借、转让居民身份证"},
                {"id": "13000004", "text": "非法扣押居民身份证"},
                {"id": "13000005", "text": "冒用居民身份证"},
                {"id": "13000006", "text": "购买、出售、使用伪造、变造的居民身份证"},
                {"id": "13000007", "text": "泄露公民个人信息"}
            ]
            },
            {
                "id": "14000000", "text": "枪支管理法", "state": "closed", "children": [
                {"id": "14000001", "text": "违规制造、销（配）售枪支"},
                {"id": "14000002", "text": "违规制造枪支"},
                {"id": "14000003", "text": "违规配售枪支"},
                {"id": "14000004", "text": "违规销售枪支"},
                {"id": "14000005", "text": "违规运输枪支"},
                {"id": "14000006", "text": "非法出租、出借枪支"},
                {"id": "14000007", "text": "未按规定标准制造民用枪支"},
                {"id": "14000008", "text": "不上缴报废枪支"},
                {"id": "14000009", "text": "丢失枪支不报"},
                {"id": "14000010", "text": "制造、销售仿真枪"}
            ]
            },
            {
                "id": "15000000", "text": "环境保护法", "state": "closed", "children": [
                {"id": "15000001", "text": "拒不停建未依法进行环境影响评价的项目"},
                {"id": "15000002", "text": "拒不停止无证排污"},
                {"id": "15000003", "text": "逃避监管违法排污"},
                {"id": "15000004", "text": "生产、使用违禁农药拒不改正"}
            ]
            },
            {
                "id": "16000000", "text": "食品安全法", "state": "closed", "children": [
                {"id": "16000001", "text": "生产、经营用非食品原料的食品"},
                {"id": "16000002", "text": "生产、经营回收食品作为原料的食品"},
                {"id": "16000003", "text": "在食品中添加可能危害人体健康的物质、经营添加可能危害人体健康物质的食品"},
                {"id": "16000004", "text": "生产经营营养成分不符合安全标准的专供婴幼儿、其他特定人群的食品"},
                {"id": "16000005", "text": "经营病死、毒死或者死因不明的动物肉类"},
                {"id": "16000006", "text": "生产经营病死、毒死或者死因不明的动物肉类制品"},
                {"id": "16000007", "text": "经营未按规定检疫或者检疫不合格的肉类"},
                {"id": "16000008", "text": "生产经营未经检验或者检验不合格的肉类制品"},
                {"id": "16000009", "text": "生产经营国家为特殊需要禁止生产经营的食品"},
                {"id": "16000010", "text": "生产经营添加药品的食品"},
                {"id": "16000011", "text": "违法使用剧毒、高毒农药"}
            ]
            },
            {
                "id": "17000000", "text": "民用爆炸物品", "state": "closed", "children": [
                {"id": "17000001", "text": "未经许可从事爆破作业"},
                {"id": "17000002", "text": "非法购买、运输危险物质（民用爆炸物品）"},
                {"id": "17000003", "text": "未按规定民用爆炸物品作出警示、登记标识"},
                {"id": "17000004", "text": "未按规定雷管编码打号"},
                {"id": "17000005", "text": "超出许可购买民用爆炸物品"},
                {"id": "17000006", "text": "使用现金、实物交易民用爆炸物品"},
                {"id": "17000007", "text": "销售民用爆炸物品未按规定保存交易证明材料"},
                {"id": "17000008", "text": "销售、购买、进出口民用爆炸物品未按规定备案"},
                {"id": "17000009", "text": "未按规定建立民用爆炸物品登记制度"},
                {"id": "17000010", "text": "未按规定核销民用爆炸物品运输许可证"},
                {"id": "17000011", "text": "违反许可事项运输民用爆炸物品"},
                {"id": "17000012", "text": "未携带许可证运输民用爆炸物品"},
                {"id": "17000013", "text": "违规混装民用爆炸物品"},
                {"id": "17000014", "text": "民用爆炸物品运输车辆未按规定悬挂、安装警示标志"},
                {"id": "17000015", "text": "违反行驶、停靠规定运输民用爆炸物品"},
                {"id": "17000016", "text": "装载民用爆炸物品的车厢载人"},
                {"id": "17000017", "text": "运输民用爆炸物品发生危险未处置"},
                {"id": "17000018", "text": "运输民用爆炸物品发生危险不报"},
                {"id": "17000019", "text": "未按资质等级从事爆破作业"},
                {"id": "17000020", "text": "营业性爆破作业单位跨区域作业未报告"},
                {"id": "17000021", "text": "违反标准实施爆破作业"},
                {"id": "17000022", "text": "未按规定设置民用爆炸物品专用仓库技术防范设施"},
                {"id": "17000023", "text": "非法储存危险物质（民用爆炸物品）"},
                {"id": "17000024", "text": "违反制度致使民用爆炸物品丢失、被盗、被抢"},
                {"id": "17000025", "text": "危险物质（民用爆炸物品）被盗、被抢、丢失不报"},
                {"id": "17000026", "text": "非法转让、出借、转借、抵押、赠送民用爆炸物品"},
                {"id": "17000027", "text": "非法携带、邮寄危险物质（民用爆炸物品）"},
                {"id": "17000028", "text": "未履行民用爆炸物品安全管理责任"}
            ]
            },
            {
                "id": "18000000", "text": "烟花爆炸", "state": "closed", "children": [
                {"id": "18000001", "text": "非法运输危险物质（烟花爆竹）"},
                {"id": "18000002", "text": "危险物质（烟花爆竹）丢失不报"},
                {"id": "18000003", "text": "违反许可事项经道路运输烟花爆竹"},
                {"id": "18000004", "text": "未携带许可证经道路运输烟花爆竹"},
                {"id": "18000005", "text": "烟花爆竹道路运输车辆未按规定悬挂、安装警示标志"},
                {"id": "18000006", "text": "未按规定装载烟花爆竹"},
                {"id": "18000007", "text": "装载烟花爆竹的车厢载人"},
                {"id": "18000008", "text": "烟花爆竹运输车辆超速行驶"},
                {"id": "18000009", "text": "烟花爆竹运输车辆经停无人看守"},
                {"id": "18000010", "text": "未按规定核销烟花爆竹道路运输许可证"},
                {"id": "18000011", "text": "非法邮寄、携带危险物质（烟花爆竹）"},
                {"id": "18000012", "text": "非法举办大型焰火燃放活动"},
                {"id": "18000013", "text": "违规从事燃放作业"},
                {"id": "18000014", "text": "违规燃放烟花爆竹"}
            ]
            },
            {
                "id": "19000000", "text": "危险化学品", "state": "closed", "children": [
                {"id": "19000001", "text": "剧毒化学品、易制爆危险化学品专用仓库未按规定设置技术防范设施"},
                {"id": "19000002", "text": "未如实记录剧毒化学品、易制爆危险化学品数量、流向"},
                {"id": "19000003", "text": "危险物质被盗、丢失不报"},
                {"id": "19000004", "text": "储存剧毒化学品未备案"},
                {"id": "19000005", "text": "未如实记录剧毒化学品、易制爆危险化学品购买信息"},
                {"id": "19000006", "text": "未按规定期限保存剧毒化学品、易制爆危险化学品销售记录、材料"},
                {"id": "19000007", "text": "未按规定期限备案剧毒化学品、易制爆危险化学品销售、购买信息"},
                {"id": "19000008", "text": "转让剧毒化学品、易制爆危险化学品不报"},
                {"id": "19000009", "text": "转产、停产、停业、解散未备案处置方案"},
                {"id": "19000010", "text": "单位未经许可购买剧毒化学品、易制爆危险化学品"},
                {"id": "19000011", "text": "个人非法购买剧毒化学品、易制爆危险化学品"},
                {"id": "19000012", "text": "单位非法出借、转让剧毒化学品、易制爆危险化学品"},
                {"id": "19000013", "text": "违反核定载质量运输危险化学品"},
                {"id": "19000014", "text": "使用不符合安全标准车辆运输危险化学品"},
                {"id": "19000015", "text": "道路运输危险化学品擅自进入限制通行区域"},
                {"id": "19000016", "text": "非法运输危险物质（剧毒化学品）"},
                {"id": "19000017", "text": "未按规定悬挂、喷涂危险化学品警示标志"},
                {"id": "19000018", "text": "不配备危险化学品押运人员"},
                {"id": "19000019", "text": "道路运输剧毒化学品、易制爆危险化学品长时间停车不报"},
                {"id": "19000020", "text": "剧毒化学品、易制爆危险化学品运输途中丢失、被盗、被抢、流散、泄露未采取有效警示和安全措施"},
                {"id": "19000021", "text": "剧毒化学品、易制爆危险化学品运输途中流散、泄露不报"},
                {"id": "19000022", "text": "伪造、变造、出租、出借、转让剧毒化学品许可证件、使用伪造、变造的剧毒化学品许可证件"},
                {"id": "19000023", "text": "使用伪造、变造的剧毒化学品许可证件"}
            ]
            },
            {
                "id": "20000000", "text": "剧毒化学品购买和公路运输", "state": "closed", "children": [
                {"id": "20000001", "text": "非法购买危险物质（剧毒化学品）"},
                {"id": "20000002", "text": "非法运输危险物质（剧毒化学品）"},
                {"id": "20000003", "text": "非法获取剧毒化学品购买、公路运输许可证件"},
                {"id": "20000004", "text": "未按规定更正剧毒化学品购买许可证件回执填写错误"},
                {"id": "20000005", "text": "未携带许可证经公路运输剧毒化学品"},
                {"id": "20000006", "text": "违反许可事项经公路运输剧毒化学品"},
                {"id": "20000007", "text": "未按规定缴交剧毒化学品购买证件回执"},
                {"id": "20000008", "text": "未按规定缴交剧毒化学品公路运输通行证件"},
                {"id": "20000009", "text": "未按规定缴交已使用剧毒化学品购买凭证存根"},
                {"id": "20000010", "text": "未按规定缴交不再需要使用的剧毒化学品购买凭证"},
                {"id": "20000011", "text": "未按规定作废、缴交填写错误的剧毒化学品购买凭证"}
            ]
            },
            {
                "id": "21000000", "text": "放射性物品", "state": "closed", "children": [
                {"id": "21000001", "text": "非法运输危险物质（放射性物品）"},
                {"id": "21000002", "text": "放射性物品运输车辆违反行驶规定"},
                {"id": "21000003", "text": "放射性物品运输车辆未悬挂警示标志"},
                {"id": "21000004", "text": "道路运输放射性物品未配备押运人员"},
                {"id": "21000005", "text": "道路运输放射性物品脱离押运人员监管"}
            ]
            },
            {
                "id": "22000000", "text": "民用航空安全保卫", "state": "closed", "children": [
                {"id": "22000001", "text": "装载未采取安全措施的物品"},
                {"id": "22000002", "text": "违法交运、捎带他人货物"},
                {"id": "22000003", "text": "托运人伪报品名托运"},
                {"id": "22000004", "text": "托运人在托运货物中夹带危险物品"},
                {"id": "22000005", "text": "携带、交运禁运物品"},
                {"id": "22000006", "text": "违反警卫制度致使航空器失控"},
                {"id": "22000007", "text": "违规出售客票"},
                {"id": "22000008", "text": "承运时未核乘机人和行李"},
                {"id": "22000009", "text": "承运人未核登机旅客人数"},
                {"id": "22000010", "text": "将未登机人员的行李装入、滞留航空器内"},
                {"id": "22000011", "text": "承运人未全程监管承运物品"},
                {"id": "22000012", "text": "配制、装载单位未供应品采取安全措施"},
                {"id": "22000013", "text": "未承运货物采取安全措施"},
                {"id": "22000014", "text": "未航空邮件安检"}
            ]
            },
            {
                "id": "23000000", "text": "铁路安全", "state": "closed", "children": [
                {"id": "23000001", "text": "毁坏铁路设施设备、防护设施"},
                {"id": "23000002", "text": "危及铁路通信、信号设施安全"},
                {"id": "23000003", "text": "危害电气化铁路设施"},
                {"id": "23000004", "text": "危害铁路安全"},
                {"id": "23000005", "text": "运输危险货物不按规定配备押运人员"},
                {"id": "23000006", "text": "发生危险货物泄漏不报"},
                {"id": "23000007", "text": "危险物质被盗、丢失不报"}
            ]
            },
            {
                "id": "24000000", "text": "娱乐场所管理", "state": "closed", "children": [
                {"id": "24000001", "text": "娱乐场所从事毒品违法犯罪活动"},
                {"id": "24000002", "text": "娱乐场所为毒品违法犯罪活动提供条件"},
                {"id": "24000003", "text": "娱乐场所组织、强迫、引诱、容留、介绍他人卖淫、嫖娼"},
                {"id": "24000004", "text": "娱乐场所为组织、强迫、引诱、容留、介绍他人卖淫、嫖娼提供条件"},
                {"id": "24000005", "text": "娱乐场所制作、贩卖、传播淫秽物品"},
                {"id": "24000006", "text": "娱乐场所为制作、贩卖、传播淫秽物品提供条件"},
                {"id": "24000007", "text": "娱乐场所提供营利性陪侍"},
                {"id": "24000008", "text": "娱乐场所从业人员从事营利性陪侍"},
                {"id": "24000009", "text": "娱乐场所为提供、从事营利性陪侍提供条件"},
                {"id": "24000010", "text": "娱乐场所赌博"},
                {"id": "24000011", "text": "娱乐场所为赌博提供条件"},
                {"id": "24000012", "text": "娱乐场所从事邪教、迷信活动"},
                {"id": "24000013", "text": "娱乐场所为从事邪教、迷信活动提供条件"},
                {"id": "24000014", "text": "娱乐场所设施不符合规定"},
                {"id": "24000015", "text": "未按规定安装、使用娱乐场所闭路电视监控设备"},
                {"id": "24000016", "text": "删改、未按规定留存娱乐场所监控录像资料"},
                {"id": "24000017", "text": "删改娱乐场所监控录像资料"},
                {"id": "24000018", "text": "未按规定配备娱乐场所安全检查设备"},
                {"id": "24000019", "text": "未对进入娱乐场所人员进行安全检查"},
                {"id": "24000020", "text": "未按规定配备娱乐场所保安人员"},
                {"id": "24000021", "text": "设置具有赌博功能的游戏设施设备"},
                {"id": "24000022", "text": "以现金、有价证券作为娱乐奖品"},
                {"id": "24000023", "text": "非法回购娱乐奖品"},
                {"id": "24000024", "text": "指使、纵容娱乐场所从业人员侵害消费者人身权利"},
                {"id": "24000025", "text": "未按规定备案娱乐场所营业执照"},
                {"id": "24000026", "text": "未按规定建立娱乐场所从业人员名簿、营业日志"},
                {"id": "24000027", "text": "娱乐场所内发现违法犯罪行为不报"},
                {"id": "24000028", "text": "未按规定悬挂娱乐场所警示标志"}
            ]
            },
            {
                "id": "25000000", "text": "娱乐场所治安管理", "state": "closed", "children": [
                {"id": "25000001", "text": "拒不补齐娱乐场所备案项目"},
                {"id": "25000002", "text": "未按规定进行娱乐场所备案变更"},
                {"id": "25000003", "text": "要求娱乐场所保安人员从事非职务活动"},
                {"id": "25000004", "text": "未按规定通报娱乐场所保安人员工作情况"},
                {"id": "25000005", "text": "未按规定建立、使用娱乐场所治安管理信息系统"}
            ]
            },
            {
                "id": "26000000", "text": "营业性演出内容", "state": "closed", "children": [
                {"id": "26000001", "text": "未制止有非法内容的营业性演出"},
                {"id": "26000002", "text": "发现有非法内容的营业性演出不报"},
                {"id": "26000003", "text": "超过核准数量印制、出售营业性演出门票"},
                {"id": "26000004", "text": "印制、出售观众区域以外的营业性演出门票"}
            ]
            },
            {
                "id": "27000000", "text": "印刷业", "state": "closed", "children": [
                {"id": "27000001", "text": "印刷非法印刷品"},
                {"id": "27000002", "text": "印刷经营中发现违法犯罪行为未报告"},
                {"id": "27000003", "text": "单位内部设立印刷厂（所）未备案"},
                {"id": "27000004", "text": "擅自印刷特种印刷品"},
                {"id": "27000005", "text": "再委托他人印刷特种印刷品"},
                {"id": "27000006", "text": "擅自承印特种印刷品"},
                {"id": "27000007", "text": "印刷业经营者伪造、变造国家机关、企业、事业单位、人民团体公文、证件"},
                {"id": "27000008", "text": "擅自委托印刷特种印刷品"},
                {"id": "27000009", "text": "委托非指定印刷企业印刷特种印刷品"}
            ]
            },
            {
                "id": "28000000", "text": "旅馆业治安管理", "state": "closed", "children": [
                {"id": "28000001", "text": "旅馆变更登记未备案"}
            ]
            },
            {
                "id": "29000000", "text": "租赁房屋治安管理", "state": "closed", "children": [
                {"id": "29000001", "text": "不履行出租房屋治安责任"},
                {"id": "29000002", "text": "转租、转借承租房屋未按规定报告"},
                {"id": "29000003", "text": "利用出租房屋非法生产、储存、经营危险物品"}
            ]
            },
            {
                "id": "30000000", "text": "废旧金属收购业", "state": "closed", "children": [
                {"id": "30000001", "text": "非法设点收购废旧金属"},
                {"id": "30000002", "text": "收购生产性废旧金属未如实登记"},
                {"id": "30000003", "text": "收购国家禁止收购的金属物品"}
            ]
            },
            {
                "id": "31000000", "text": "报废汽车回收管理", "state": "closed", "children": [
                {"id": "31000001", "text": "买卖、伪造、变造报废汽车回收证明"},
                {"id": "31000002", "text": "非法赠与、转让报废汽车"},
                {"id": "31000003", "text": "自行拆解报废汽车"},
                {"id": "31000004", "text": "擅自拆解、改装、拼装、倒卖有犯罪嫌疑的汽车、零配件"},
                {"id": "31000005", "text": "驾驶报废机动车"}
            ]
            },
            {
                "id": "32000000", "text": "机动车修理业、报废机动车回收业", "state": "closed", "children": [
                {"id": "32000001", "text": "承修机动车不如实登记"},
                {"id": "32000002", "text": "回收报废机动车不如实登记"},
                {"id": "32000003", "text": "承修非法改装机动车"},
                {"id": "32000004", "text": "承修交通肇事逃逸车辆不报"},
                {"id": "32000005", "text": "回收无报废证明的机动车"},
                {"id": "32000006", "text": "更改机动车发动机号码、车架号码"},
                {"id": "32000007", "text": "非法拼（组）装汽车、摩托车"}
            ]
            },
            {
                "id": "33000000", "text": "典当", "state": "closed", "children": [
                {"id": "33000001", "text": "收当禁当财物"},
                {"id": "33000002", "text": "未按规定查验证明文件"},
                {"id": "33000003", "text": "未按规定记录、统计、报送典当信息"},
                {"id": "33000004", "text": "发现禁当财物不报"}
            ]
            },
            {
                "id": "34000000", "text": "再生资源回收", "state": "closed", "children": [
                {"id": "34000001", "text": "未按规定进行再生资源回收从业备案"},
                {"id": "34000002", "text": "未按规定保存回收生产性废旧金属登记资料"},
                {"id": "34000003", "text": "再生资源回收经营中发现赃物、有赃物嫌疑物品不报"}
            ]
            },
            {
                "id": "35000000", "text": "大型群众性活动安全管理", "state": "closed", "children": [
                {"id": "35000001", "text": "擅自变更大型活动时间、地点、内容、举办规模"},
                {"id": "35000002", "text": "未经许可举办大型活动"},
                {"id": "35000003", "text": "举办大型活动发生安全事故"},
                {"id": "35000004", "text": "大型活动发生安全事故不处置"},
                {"id": "35000005", "text": "大型活动发生安全事故不报"}
            ]
            },
            {
                "id": "36000000", "text": "企业事业单位内部治安保卫", "state": "closed", "children": [
                {"id": "36000001", "text": "不落实单位内部治安保卫措施"}
            ]
            },
            {
                "id": "37000000", "text": "保安服务管理", "state": "closed", "children": [
                {"id": "37000001", "text": "未经审核变更保安服务公司法定代表人"},
                {"id": "37000002", "text": "未按规定进行自招保安员备案"},
                {"id": "37000003", "text": "未按规定撤销自招保安员备案"},
                {"id": "37000004", "text": "超范围开展保安服务"},
                {"id": "37000005", "text": "违反规定条件招用保安员"},
                {"id": "37000006", "text": "未按规定核查保安服务合法性"},
                {"id": "37000007", "text": "未报告违法保安服务要求"},
                {"id": "37000008", "text": "未按规定签订、留存保安服务合同"},
                {"id": "37000009", "text": "未按规定留存保安服务监控影像资料、报警记录"},
                {"id": "37000010", "text": "泄露保密信息"},
                {"id": "37000011", "text": "使用监控设备侵犯他人合法权益、个人隐私"},
                {"id": "37000012", "text": "删改、扩散保安服务监控影像资料、报警记录"},
                {"id": "37000013", "text": "指使、纵容保安员实施违法犯罪行为"},
                {"id": "37000014", "text": "疏于管理导致发生保安员违法犯罪案件"},
                {"id": "37000015", "text": "保安员扣押、没收他人证件、财物"},
                {"id": "37000016", "text": "保安员参与追索债务"},
                {"id": "37000017", "text": "保安员采用暴力、以暴力相威胁处置纠纷"},
                {"id": "37000018", "text": "保安员删改、扩散保安服务监控影像资料、报警记录"},
                {"id": "37000019", "text": "保安员侵犯个人隐私、泄露保密信息"},
                {"id": "37000020", "text": "未按规定进行保安员培训"}
            ]
            },
            {
                "id": "38000000", "text": "保安培训机构管理", "state": "closed", "children": [
                {"id": "38000001", "text": "非法获取保安培训许可证"},
                {"id": "38000002", "text": "未按规定办理保安培训机构变更手续"},
                {"id": "38000003", "text": "未按规定时间安排保安学员实习"},
                {"id": "38000004", "text": "非法提供保安服务"},
                {"id": "38000005", "text": "未按规定签订保安培训合同"},
                {"id": "38000006", "text": "未按规定备案保安培训合同式样"},
                {"id": "38000007", "text": "发布虚假招生广告"},
                {"id": "38000008", "text": "非法传授侦察技术手段"},
                {"id": "38000009", "text": "未按规定内容、计划进行保安培训"},
                {"id": "38000010", "text": "未按规定颁发保安培训结业证书"},
                {"id": "38000011", "text": "未按规定建立保安学员档案管理制度"},
                {"id": "38000012", "text": "未按规定保存保安学员文书档案"},
                {"id": "38000013", "text": "未按规定备案保安学员、师资人员档案"},
                {"id": "38000014", "text": "违规收取保安培训费用"},
                {"id": "38000015", "text": "转包、违规委托保安培训业务"}
            ]
            },
            {
                "id": "39000000", "text": "金融机构营业场所和金库安全", "state": "closed", "children": [
                {"id": "39000001", "text": "安全防范设施建设方案未经许可施工"},
                {"id": "39000002", "text": "安全防范设施建设工程未经验收投入使用"}
            ]
            },
            {
                "id": "40000000", "text": "安全生产", "state": "closed", "children": [
                {"id": "40000001", "text": "发生生产安全事故逃匿"}
            ]
            },
            {
                "id": "41000000", "text": "收养", "state": "closed", "children": [
                {"id": "41000001", "text": "出卖亲生子女"}
            ]
            },
            {
                "id": "42000000", "text": "拘留所条例", "state": "closed", "children": [
                {"id": "42000001", "text": "担保人不履行担保义务"}
            ]
            },
            {
                "id": "43000000", "text": "出入境", "state": "closed", "children": [
                {"id": "43000001", "text": "持用伪造、变造、骗取的证件出境、入境"},
                {"id": "43000002", "text": "冒用证件出境、入境"},
                {"id": "43000003", "text": "逃避边防检查"},
                {"id": "43000004", "text": "以其他方式非法出境、入境"},
                {"id": "43000005", "text": "协助非法出境、入境"},
                {"id": "43000006", "text": "骗取签证、停留居留证件等出境入境证件"},
                {"id": "43000007", "text": "违反规定为外国人出具申请材料"},
                {"id": "43000008", "text": "（中国公民）出境后非法前往其他国家或者地区被遣返"},
                {"id": "43000009", "text": "拒不接受查验出境入境证件"},
                {"id": "43000010", "text": "拒不交验居留证件"},
                {"id": "43000011", "text": "未按规定办理出生登记"},
                {"id": "43000012", "text": "未按规定办理死亡申报"},
                {"id": "43000013", "text": "未按规定办理居留证件登记事项变更"},
                {"id": "43000014", "text": "外国人冒用他人出境入境证件"},
                {"id": "43000015", "text": "违反外国人住宿登记规定"},
                {"id": "43000016", "text": "未按规定报送外国人住宿登记信息"},
                {"id": "43000017", "text": "擅自进入限制区域"},
                {"id": "43000018", "text": "拒不执行限期迁离决定"},
                {"id": "43000019", "text": "非法居留"},
                {"id": "43000020", "text": "未尽监护义务致使未满十六周岁的外国人非法居留"},
                {"id": "43000021", "text": "容留、藏匿非法入境、非法居留的外国人"},
                {"id": "43000022", "text": "协助非法入境、非法居留的外国人逃避检查"},
                {"id": "43000023", "text": "为非法居留的外国人违法提供出境入境证件"},
                {"id": "43000024", "text": "非法就业"},
                {"id": "43000025", "text": "介绍外国人非法就业"},
                {"id": "43000026", "text": "非法聘用外国人"},
                {"id": "43000027", "text": "从事与停留居留事由不相符的活动"},
                {"id": "43000028", "text": "扰乱口岸限定区域管理秩序"},
                {"id": "43000029", "text": "未办理临时入境手续登陆"},
                {"id": "43000030", "text": "未办理登轮证件上下外国船舶"},
                {"id": "43000031", "text": "交通运输工具擅自出境、入境"},
                {"id": "43000032", "text": "交通运输工具擅自改变出境、入境口岸"},
                {"id": "43000033", "text": "交通运输工具未按规定申报"},
                {"id": "43000034", "text": "交通运输工具拒绝协助边防检查"},
                {"id": "43000035", "text": "交通运输工具违反规定上下人员、装卸货物或者物品"},
                {"id": "43000036", "text": "交通运输工具载运不准出境入境人员出境、入境"},
                {"id": "43000037", "text": "（中国或者外国船舶）未经批准擅自搭靠外国船舶"},
                {"id": "43000038", "text": "（外国船舶、航空器）未按规定路线、航线行驶"},
                {"id": "43000039", "text": "（出境入境的船舶、航空器）违反规定驶入对外开放口岸以外地区"}
            ]
            },
            {
                "id": "44000000", "text": "护照", "state": "closed", "children": [
                {"id": "44000001", "text": "骗取护照"},
                {"id": "44000002", "text": "提供伪造、变造的护照、出入境通行证"},
                {"id": "44000003", "text": "出售护照、出入境通行证"}
            ]
            },
            {
                "id": "45000000", "text": "往来台湾地区", "state": "closed", "children": [
                {"id": "45000001", "text": "伪造、涂改、转让、倒卖旅行证件"},
                {"id": "45000002", "text": "非法获取往来台湾旅行证件"},
                {"id": "45000003", "text": "协助骗取往来台湾旅行证件"},
                {"id": "45000004", "text": "台湾居民未按规定办理暂住登记"},
                {"id": "45000005", "text": "台湾居民非法居留"}
            ]
            },
            {
                "id": "46000000", "text": "往来香港和澳门", "state": "closed", "children": [
                {"id": "46000001", "text": "伪造、涂改、转让往来港澳旅行证件"},
                {"id": "46000002", "text": "非法获取往来港澳旅行证件"}
            ]
            },
            {
                "id": "47000000", "text": "出国旅游管理", "state": "closed", "children": [
                {"id": "47000001", "text": "因滞留不归被遣返回国"}
            ]
            },
            {
                "id": "48000000", "text": "国际航班载运人员信息预报", "state": "closed", "children": [
                {"id": "48000001", "text": "未准确预报国际航班载运人员信息"},
                {"id": "48000002", "text": "延迟预报国际航班载运人员信息"}
            ]
            },
            {
                "id": "49000000", "text": "边境管理区通行证管理", "state": "closed", "children": [
                {"id": "49000001", "text": "持用伪造、涂改、过期、失效的边境管理区通行证"},
                {"id": "49000002", "text": "冒用他人边境管理区通行证"},
                {"id": "49000003", "text": "伪造、涂改、盗窃、贩卖边境管理区通行证"}
            ]
            },
            {
                "id": "50000000", "text": "因私出入境中介活动管理", "state": "closed", "children": [
                {"id": "50000001", "text": "擅自开展因私出入境中介活动"},
                {"id": "50000002", "text": "跨区域开展因私出入境中介活动"},
                {"id": "50000003", "text": "违规设立因私出入境中介分支机构"},
                {"id": "50000004", "text": "承包、转包因私出入境中介活动"},
                {"id": "50000005", "text": "委托无资质单位、个人代理因私出入境中介活动"},
                {"id": "50000006", "text": "中介机构协助骗取出入境证件"}
            ]
            },
            {
                "id": "51000000", "text": "消防法", "state": "closed", "children": [
                {"id": "51000001", "text": "未经消防设计审核擅自施工"},
                {"id": "51000002", "text": "消防设计审核不合格擅自施工"},
                {"id": "51000003", "text": "消防设计抽查不合格不停止施工"},
                {"id": "51000004", "text": "未经消防验收擅自投入使用"},
                {"id": "51000005", "text": "消防验收不合格擅自投入使用"},
                {"id": "51000006", "text": "投入使用后抽查不合格不停止使用"},
                {"id": "51000007", "text": "未经消防安全检查擅自投入使用、营业"},
                {"id": "51000008", "text": "消防安全检查不合格擅自投入使用、营业"},
                {"id": "51000009", "text": "未进行消防设计备案"},
                {"id": "51000010", "text": "未进行竣工消防备案"},
                {"id": "51000011", "text": "违法要求降低消防技术标准设计、施工"},
                {"id": "51000012", "text": "不按照消防技术标准强制性要求进行消防设计"},
                {"id": "51000013", "text": "违法施工降低消防施工质量"},
                {"id": "51000014", "text": "违法监理降低消防施工质量"},
                {"id": "51000015", "text": "消防设施、器材、消防安全标志配置、设置不符合标准"},
                {"id": "51000016", "text": "消防设施、器材、消防安全标志未保持完好有效"},
                {"id": "51000017", "text": "损坏、挪用消防设施、器材"},
                {"id": "51000018", "text": "擅自拆除、停用消防设施、器材"},
                {"id": "51000019", "text": "占用、堵塞、封闭疏散通道、安全出口"},
                {"id": "51000020", "text": "其他妨碍安全疏散行为"},
                {"id": "51000021", "text": "埋压、圈占、遮挡消火栓"},
                {"id": "51000022", "text": "占用防火间距"},
                {"id": "51000023", "text": "占用、堵塞、封闭消防车通道"},
                {"id": "51000024", "text": "门窗设置影响逃生、灭火救援的障碍物"},
                {"id": "51000025", "text": "不及时消除火灾隐患"},
                {"id": "51000026", "text": "易燃易爆危险品场所与居住场所设置在同一建筑物内"},
                {"id": "51000027", "text": "易燃易爆危险品场所未与居住场所保持安全距离"},
                {"id": "51000028", "text": "其他场所与居住场所设置在同一建筑物内不符合消防技术标准"},
                {"id": "51000029", "text": "违规进入生产、储存易燃易爆危险品场所"},
                {"id": "51000030", "text": "违规使用明火作业"},
                {"id": "51000031", "text": "在具有火灾、爆炸危险的场所吸烟、使用明火"},
                {"id": "51000032", "text": "指使、强令他人冒险作业"},
                {"id": "51000033", "text": "过失引起火灾"},
                {"id": "51000034", "text": "阻拦、不及时报告火警"},
                {"id": "51000035", "text": "扰乱火灾现场秩序"},
                {"id": "51000036", "text": "拒不执行火灾现场指挥员指挥"},
                {"id": "51000037", "text": "故意破坏、伪造火灾现场"},
                {"id": "51000038", "text": "擅自拆封、使用被查封场所、部位"},
                {"id": "51000039", "text": "人员密集场所使用不合格、国家明令淘汰的消防产品逾期未改"},
                {"id": "51000040", "text": "电器产品的安装、使用不符合规定"},
                {"id": "51000041", "text": "燃气用具的安装、使用不符合规定"},
                {"id": "51000042", "text": "电器线路的设计、敷设、维护保养、检测不符合规定"},
                {"id": "51000043", "text": "燃气管路的设计、敷设、维护保养、检测不符合规定"},
                {"id": "51000044", "text": "不履行消防安全职责逾期未改"},
                {"id": "51000045", "text": "不履行组织、引导在场人员疏散义务"},
                {"id": "51000046", "text": "消防技术服务机构出具虚假、失实文件"}
            ]
            },
            {
                "id": "52000000", "text": "消防产品监督管理规定", "state": "closed", "children": [
                {"id": "52000001", "text": "人员密集场所使用不符合市场准入的消防产品逾期未改"},
                {"id": "52000002", "text": "非人员密集场所使用不符合市场准入、不合格、国家明令淘汰的消防产品逾期未改"}
            ]
            },
            {
                "id": "53000000", "text": "社会消防技术服务管理规定", "state": "closed", "children": [
                {"id": "53000001", "text": "隐瞒情况、提供虚假材料申请资质"},
                {"id": "53000002", "text": "以欺骗、贿赂或者其他不正当手段取得资质"},
                {"id": "53000003", "text": "未取得资质擅自从事社会消防技术服务活动"},
                {"id": "53000004", "text": "资质被注销继续从事社会消防技术服务活动"},
                {"id": "53000005", "text": "冒名从事社会消防技术服务活动"},
                {"id": "53000006", "text": "超越资质范围从事社会消防技术服务活动"},
                {"id": "53000007", "text": "不再符合资质条件逾期未改"},
                {"id": "53000008", "text": "资质条件改正期间从事相应社会消防技术服务活动"},
                {"id": "53000009", "text": "涂改、倒卖、出租、出借、以其他形式非法转让资质证书"},
                {"id": "53000010", "text": "注册消防工程师兼职执业"},
                {"id": "53000011", "text": "指派无资格人员从事社会消防技术服务活动"},
                {"id": "53000012", "text": "转包、分包消防技术服务项目"},
                {"id": "53000013", "text": "未设立技术负责人、明确项目负责人"},
                {"id": "53000014", "text": "书面结论文件未签名、盖章"},
                {"id": "53000015", "text": "未依法签订消防技术服务合同"},
                {"id": "53000016", "text": "未备案注册消防工程师变化情况、消防技术服务项目目录、书面结论文件"},
                {"id": "53000017", "text": "未申请办理变更手续"},
                {"id": "53000018", "text": "未建立、保管消防技术服务档案"},
                {"id": "53000019", "text": "未公示资质证书、注册消防工程师资格证书等事项"},
                {"id": "53000020", "text": "消防技术服务机构出具虚假、失实文件"},
                {"id": "53000021", "text": "未按标准检测、维修、保养消防设施、灭火器"},
                {"id": "53000022", "text": "消防设施、灭火器维修、保养质量不符合标准"},
                {"id": "53000023", "text": "未依法公示消防技术服务信息"}
            ]
            },
            {
                "id": "54000000", "text": "计算机信息系统安全保护条例", "state": "closed", "children": [
                {"id": "54000001", "text": "违反计算机信息系统安全等级保护制度"},
                {"id": "54000002", "text": "违反计算机信息系统国际联网备案制度"},
                {"id": "54000003", "text": "计算机信息系统发生案件不报"},
                {"id": "54000004", "text": "拒不改进计算机信息系统安全状况"},
                {"id": "54000005", "text": "故意输入计算机病毒、有害数据"},
                {"id": "54000006", "text": "未经许可出售计算机信息系统安全专用产品"}
            ]
            },
            {
                "id": "55000000", "text": "计算机信息网络国际联网管理暂行规定及计算机信息网络国际联网管理暂行规定", "state": "closed", "children": [
                {"id": "55000001", "text": "擅自建立、使用非法定信道进行国际联网"},
                {"id": "55000002", "text": "接入网络未通过互联网络接入国际联网"},
                {"id": "55000003", "text": "未经许可从事国际联网经营业务"},
                {"id": "55000004", "text": "未经批准擅自进行国际联网"},
                {"id": "55000005", "text": "未通过接入网络进行国际联网"},
                {"id": "55000006", "text": "未经接入单位同意接入接入网络"},
                {"id": "55000007", "text": "未办理登记手续接入接入网络"},
                {"id": "55000008", "text": "违规经营国际互联网络业务"}
            ]
            },
            {
                "id": "56000000", "text": "互联网上网服务营业场所管理条例规定", "state": "closed", "children": [
                {"id": "56000001", "text": "利用上网服务营业场所制作、下载、复制、查阅、发布、传播、使用违法信息"},
                {"id": "56000002", "text": "向上网消费者提供直接接入互联网的计算机"},
                {"id": "56000003", "text": "未建立上网服务营业场所巡查制度"},
                {"id": "56000004", "text": "不制止、不举报上网消费者违法行为"},
                {"id": "56000005", "text": "未按规定核、登记上网消费者有效身份证件"},
                {"id": "56000006", "text": "未按规定记录上网信息"},
                {"id": "56000007", "text": "未按规定保存上网消费者登记内容、记录备份"},
                {"id": "56000008", "text": "擅自修改、删除上网消费者登记内容、记录备份"},
                {"id": "56000009", "text": "上网服务经营单位未依法办理变更登记注册事项、终止经营手续、备案"},
                {"id": "56000010", "text": "上网服务营业场所内利用明火照明"},
                {"id": "56000011", "text": "上网服务营业场所内不制止吸烟行为"},
                {"id": "56000012", "text": "上网服务营业场所未悬挂禁烟标志"},
                {"id": "56000013", "text": "上网服务营业场所允许带入、存放易燃易爆物品"},
                {"id": "56000014", "text": "上网服务营业场所安装固定封闭门窗栅栏"},
                {"id": "56000015", "text": "上网服务营业场所营业期间封堵、锁闭门窗、安全疏散通道、安全出口"},
                {"id": "56000016", "text": "上网服务营业场所擅自停止实施安全技术措施"}
            ]
            },
            {
                "id": "57000000", "text": "计算机信息网络国际联网安全保护管理", "state": "closed", "children": [
                {"id": "57000001", "text": "利用国际联网制作、复制、查阅、传播违法信息"},
                {"id": "57000002", "text": "擅自进入计算机信息网络"},
                {"id": "57000003", "text": "擅自使用计算机信息网络资源"},
                {"id": "57000004", "text": "擅自改变计算机信息网络功能"},
                {"id": "57000005", "text": "擅自改变计算机信息网络数据、应用程序"},
                {"id": "57000006", "text": "故意制作、传播计算机破坏性程序"},
                {"id": "57000007", "text": "未建立国际联网安全保护管理制度"},
                {"id": "57000008", "text": "未采取国际联网安全技术保护措施"},
                {"id": "57000009", "text": "未网络用户进行安全教育、培训"},
                {"id": "57000010", "text": "未按规定提供安全保护管理相关信息、资料、数据文件"},
                {"id": "57000011", "text": "未依法审核网络发布信息内容"},
                {"id": "57000012", "text": "未依法登记网络信息委托发布单位和个人信息"},
                {"id": "57000013", "text": "未建立电子公告系统的用户登记、信息管理制度"},
                {"id": "57000014", "text": "未按规定删除网络地址、目录"},
                {"id": "57000015", "text": "未按规定关闭网络服务器"},
                {"id": "57000016", "text": "未建立公用账号使用登记制度"},
                {"id": "57000017", "text": "违法转借、转让用户账号"},
                {"id": "57000018", "text": "不履行国际联网备案职责"}
            ]
            },
            {
                "id": "58000000", "text": "计算机病毒防止管理", "state": "closed", "children": [
                {"id": "58000001", "text": "制作、传播计算机病毒"},
                {"id": "58000002", "text": "发布虚假计算机病毒疫情"},
                {"id": "58000003", "text": "未按规定提交计算机病毒样本"},
                {"id": "58000004", "text": "未按规定上报计算机病毒分析结果"},
                {"id": "58000005", "text": "未建立计算机病毒防治管理制度"},
                {"id": "58000006", "text": "未采取计算机病毒安全技术防治措施"},
                {"id": "58000007", "text": "未进行计算机病毒防治教育、培训"},
                {"id": "58000008", "text": "未及时检测、清除计算机病毒"},
                {"id": "58000009", "text": "未按规定使用具有销售许可证的计算机病毒防治产品"},
                {"id": "58000010", "text": "未按规定检侧、清除计算机病毒"},
                {"id": "58000011", "text": "未依法保存计算机病毒检测、清除记录"}
            ]
            },
            {
                "id": "59000000", "text": "道路交通管理法律法规", "state": "closed", "children": [
                {"id": "59000001", "text": "行人、乘车人、非机动车驾驶人违反道路通行规定"},
                {"id": "59000002", "text": "机动车驾驶人违反道路通行规定"},
                {"id": "59000003", "text": "（再次）饮酒后驾驶机动车"},
                {"id": "59000004", "text": "醉酒驾驶机动车"},
                {"id": "59000005", "text": "饮酒后驾驶营运机动车"},
                {"id": "59000006", "text": "醉酒后驾驶营运机动车"},
                {"id": "59000007", "text": "公路客运车辆超员载客"},
                {"id": "59000008", "text": "公路客运车辆违规载货"},
                {"id": "59000009", "text": "货运机动车超载"},
                {"id": "59000010", "text": "货运机动车违规载客"},
                {"id": "59000011", "text": "违规停放机动车"},
                {"id": "59000012", "text": "出具虚假机动车安全技术检验结果"},
                {"id": "59000013", "text": "未悬挂机动车号牌"},
                {"id": "59000014", "text": "未放置机动车检验合格标志、保险标志"},
                {"id": "59000015", "text": "未随车携带行驶证、驾驶证"},
                {"id": "59000016", "text": "故意遮挡机动车号牌、故意污损机动车号牌"},
                {"id": "59000017", "text": "不按规定安装机动车号牌"},
                {"id": "59000018", "text": "伪造、变造或者使用伪造、变造的机动车登记证书、号牌、行驶证、驾驶证"},
                {"id": "59000019", "text": "伪造、变造或者使用伪造、变造的检验合格标志、保险标志"},
                {"id": "59000020", "text": "使用其他车辆的机动车登记证书、号牌、行驶证、检验合格标志、保险标志"},
                {"id": "59000021", "text": "非法安装警报器、标志灯具"},
                {"id": "59000022", "text": "未投保机动车交通事故责任强制保险"},
                {"id": "59000023", "text": "无有效机动车驾驶证驾驶机动车"},
                {"id": "59000024", "text": "将机动车交由无有效机动车驾驶证人员驾驶"},
                {"id": "59000025", "text": "交通肇事逃逸"},
                {"id": "59000026", "text": "机动车行驶超速50%以上"},
                {"id": "59000027", "text": "强迫机动车驾驶人违规驾驶机动车造成交通事故"},
                {"id": "59000028", "text": "违反交通管制强行通行"},
                {"id": "59000029", "text": "故意损毁、移动、涂改交通设施"},
                {"id": "59000030", "text": "非法拦截、扣留机动车"},
                {"id": "59000031", "text": "驾驶拼装机动车"},
                {"id": "59000032", "text": "驾驶报废机动车"},
                {"id": "59000033", "text": "出售报废机动车"},
                {"id": "59000034", "text": "种植物、设施物妨碍交通安全"}
            ]
            },
            {
                "id": "60000000", "text": "道路交通安全法实施条例", "state": "closed", "children": [
                {"id": "60000001", "text": "以不正当手段取得机动车登记、驾驶许可"}
            ]
            },
            {
                "id": "61000000", "text": "校车安全管理", "state": "closed", "children": [
                {"id": "61000001", "text": "使用拼装、报废机动车接送学生"},
                {"id": "61000002", "text": "使用未取得校车标牌的车辆"},
                {"id": "61000003", "text": "使用未取得校车驾驶资格的人员"},
                {"id": "61000004", "text": "伪造、变造或者使用伪造、变造的校车标牌"},
                {"id": "61000005", "text": "不按规定配备校车安全设备"},
                {"id": "61000006", "text": "不按规定安全维护校车"},
                {"id": "61000007", "text": "未取得校车驾驶资格驾驶校车"},
                {"id": "61000008", "text": "不按规定放置校车标牌、开启校车标志灯"},
                {"id": "61000009", "text": "未按审定的校车线路行驶"},
                {"id": "61000010", "text": "上下学生未按规定停靠校车"},
                {"id": "61000011", "text": "未运载学生使用校车标牌、校车标志灯、停车指示标志"},
                {"id": "61000012", "text": "上路前未检查校车车况"},
                {"id": "61000013", "text": "驾驶存在安全隐患的校车"},
                {"id": "61000014", "text": "校车载有学生时加油"},
                {"id": "61000015", "text": "校车发动机引擎熄灭前离开驾驶座"},
                {"id": "61000016", "text": "不避让校车"},
                {"id": "61000017", "text": "未按规定指派照管人员"}
            ]
            },
            {
                "id": "62000000", "text": "机动车驾驶证申领和使用", "state": "closed", "children": [
                {"id": "62000001", "text": "补领后继续使用原机动车驾驶证"},
                {"id": "62000002", "text": "实习期内未按规定驾驶机动车"},
                {"id": "62000003", "text": "未按规定粘贴、悬挂实习标志、残疾人机动车专用标志"},
                {"id": "62000004", "text": "未按规定申报变更驾驶人信息"},
                {"id": "62000005", "text": "机动车驾驶证被扣期间采用隐瞒、欺骗手段补领"},
                {"id": "62000006", "text": "身体条件不适合仍驾驶机动车"},
                {"id": "62000007", "text": "逾期不参加审验仍驾驶机动车"}
            ]
            },
            {
                "id": "63000000", "text": "机动车号牌生产管理", "state": "closed", "children": [
                {"id": "63000001", "text": "生产不合格机动车号牌"},
                {"id": "63000002", "text": "向无证企业转让机动车号牌生产计划"},
                {"id": "63000003", "text": "未经许可生产机动车号牌"}
            ]
            },
            {
                "id": "64000000", "text": "机动车登记", "state": "closed", "children": [
                {"id": "64000001", "text": "未按规定喷涂机动车放大牌号"},
                {"id": "64000002", "text": "机动车放大牌号喷涂不清晰"},
                {"id": "64000003", "text": "机动车喷涂、粘贴影响安全驾驶的标识、车身广告"},
                {"id": "64000004", "text": "未按规定安装防护装置、粘贴反光标识"},
                {"id": "64000005", "text": "机动车未按期进行安全技术检验"},
                {"id": "64000006", "text": "未按期办理机动车变更登记"},
                {"id": "64000007", "text": "未按期办理机动车转移登记"},
                {"id": "64000008", "text": "未按期申请机动车转入"},
                {"id": "64000009", "text": "擅自改变机动车外形、已登记的技术数据"},
                {"id": "64000010", "text": "以不正当手段办理补、换领机动车登记证书、号牌、行驶证、检验合格标志业务"}
            ]
            },
            {
                "id": "65000000", "text": "禁毒法", "state": "closed", "children": [
                {"id": "65000001", "text": "容留吸毒"},
                {"id": "65000002", "text": "介绍买卖毒品"}
            ]
            },
            {
                "id": "66000000", "text": "易制毒化学品管理", "state": "closed", "children": [
                {"id": "66000001", "text": "未经许可、备案购买、运输易制毒化学品"},
                {"id": "66000002", "text": "骗取易制毒化学品购买、运输许可证、备案证明"},
                {"id": "66000003", "text": "使用他人的许可证、备案证明购买、运输易制毒化学品"},
                {"id": "66000004", "text": "使用伪造、变造、失效的许可证、备案证明购买、运输易制毒化学品"},
                {"id": "66000005", "text": "易制毒化学品购买、运输单位未按规定建立安全管理制度"},
                {"id": "66000006", "text": "转借易制毒化学品购买、运输许可证、备案证明"},
                {"id": "66000007", "text": "超出购买许可、备案范围购买易制毒化学品"},
                {"id": "66000008", "text": "未按规定记录、保存、备案易制毒化学品交易情况"},
                {"id": "66000009", "text": "易制毒化学品丢失、被盗、被抢不报"},
                {"id": "66000010", "text": "使用现金、实物交易易制毒化学品"},
                {"id": "66000011", "text": "未按规定报告易制毒化学品年度经销、库存情况"},
                {"id": "66000012", "text": "运输易制毒化学品货证不符"},
                {"id": "66000013", "text": "运输易制毒化学品未携带许可证、备案证明"},
                {"id": "66000014", "text": "违规携带易制毒化学品"},
                {"id": "66000015", "text": "拒不接受易制毒化学品监督检查"}
            ]
            },
            {
                "id": "67000000", "text": "易制毒化学品购销和运输管理", "state": "closed", "children": [
                {"id": "67000001", "text": "向无购买许可证、备案证明的单位、个人销售易制毒化学品"},
                {"id": "67000002", "text": "超出购买许可、备案范围销售易制毒化学品"}
            ]
            },
            {
                "id": "68000000", "text": "麻醉药品和精神药品管理", "state": "closed", "children": [
                {"id": "68000001", "text": "麻醉药品、精神药品流入非法渠道"}
            ]
            },
            {
                "id": "69000000", "text": "流动人口信息登记", "state": "closed", "children": [
                {"id": "69000001", "text": "流动人口不提供或不如实提供信息"},
                {"id": "69000002", "text": "单位、场所不登记申报或不如实登记申报信息"},
                {"id": "69000003", "text": "房屋出租人和房屋租赁中介机构不如实登记、申报或提供信息"},
                {"id": "69000004", "text": "泄露、出售或违法提供查询、使用信息"}
            ]
            }
        ]
        }
    ]
};