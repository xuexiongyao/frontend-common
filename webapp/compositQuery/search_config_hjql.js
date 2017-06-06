/*配置说明
 * 1.不同查询模块均使用相同的index_config.html中的内容,改革文件名即可
 * 2.html文件下方引用不同的search_config_模块名称.js
 * 3.在search_config_模块名称.js中配置页面查询参数和展示参数
 */

var dictPath = portal+'/common/dict/';

var search_config_arr = ['HJQL_HJQLXXB','HJQL_HJPCSSHB','HJQL_XTPCSSHB'];


//查询条件配置
var search_config = {
    //查询接口地址
    url : compositQueryPath,
    basePath : basePath,
    export_url : basePath+'/compositQuery/exportExcel2003',

    main_type : 'HJQL_HJQLXXB',
    primary_key : 'ID',//主键

    //页面标题名称
    query_title : '业务协同',
    sysType: 'ywxt', //系统类型
    //基本信息查询条件和展示项配置
    HJQL_HJQLXXB_type : 'HJQL_HJQLXXB',
    HJQL_HJQLXXB_title : '业务协同_户籍清理基本信息',
    HJQL_HJQLXXB_init : ['SFZH','SJZT','XM'],    //默认显示的查询条件
    HJQL_HJQLXXB : [
        //{field:'ID',text:'id',input:'textbox',judge_dict: judge1},
        {field:'SFZH',text:'身份证号码',input:'textbox',judge_dict: judge1},
        {field:'XM',text:'姓名',input:'textbox',judge_dict: judge1},
        {field:'XB',text:'性别',input:'textbox',judge_dict: judge1},
        {field:'NL',text:'年龄',input:'textbox',judge_dict: judge1},
        {field:'HH',text:'户号',input:'textbox',judge_dict: judge1},
        {field:'HKXZ',text:'户口性质',input:'textbox',judge_dict: judge1},
        {field:'HKSZDXZQH',text:'户口所在行政区',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'GB_D_XZQHDMLIST.js',multiple:true},
        {field:'HKSZDSZMC',text:'户口所在市州及区县',input:'textbox',judge_dict: judge1},
        {field:'HKSZDXZQHMC',text:'户口所在行政区划名称',input:'textbox',judge_dict: judge1},
        {field:'HKSZDPCS',text:'户口所在派出所',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'HJGXSJDM',fxj:'HJGXFJDM',pcs:'HKSZDPCS'}},
        {field:'HKSZDPCSMC',text:'户口所在派出所名称',input:'textbox',judge_dict: judge1},
        {field:'HKDZ',text:'户口地址',input:'textbox',judge_dict: judge1},
        {field:'BRDH',text:'联系电话',input:'textbox',judge_dict: judge1},
        {field:'SFYRH',text:'是否1人户',input:'textbox',judge_dict: judge1},
        {field:'SFZT',text:'是否为在逃人员',input:'textbox',judge_dict: judge1},
        {field:'SFSZ',text:'是否登记人失踪人员',input:'textbox',judge_dict: judge1},
/*        {field:'SYSJ',text:'剩余时间',input:'textbox',judge_dict: judge1},*/
        {field:'THXX',text:'同户人员被采集信息',input:'textbox',judge_dict: judge1},
        {field:'SJZT',text:'数据状态',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJQLSJZTDM.js',multiple:true},
        {field:'CZLX',text:'操作类型',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJXTCLLXDM.js',multiple:true},
        {field:'CLJG',text:'处理结果',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJQLCLJGDM.js',multiple:true},
        {field:'LY',text:'数据来源',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_LYDM.js',multiple:true},
        {field:'CLJGMS',text:'处理结果描述',input:'textbox',judge_dict: judge1},
        {field:'XTPCSMC',text:'协同派出所名称',input:'textbox',judge_dict: judge1},
        {field:'XTPCSCODE',text:'协同派出所部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XTGXSJDM',fxj:'XTGXFJDM',pcs:'XTPCSCODE'}},
        {field:'THCS',text:'退回次数',input:'textbox',judge_dict: judge1},
        {field:'SWJZSHENG',text:'省外居住所在省',input:'textbox',judge_dict: judge1},
        {field:'SWJZSHENGDM',text:'省外居住所在省代码',input:'textbox',judge_dict: judge1},
        {field:'SWJZX',text:'省外居住所在区县',input:'textbox',judge_dict: judge1},
        {field:'SWJZXDM',text:'省外居住所在区县代码',input:'textbox',judge_dict: judge1},
        {field:'JWJZGJDM',text:'出境居住所在国',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'GB_D_GJHDQDM.js',multiple:true},
/*        {field:'FQDM',text:'分区代码',input:'textbox',judge_dict: judge1},*/
        {field:'SWJZSHI',text:'省外居住所在市',input:'textbox',judge_dict: judge1},
        {field:'SWJZSHIDM',text:'省外居住所在市代码',input:'textbox',judge_dict: judge1},
        {field:'ZHTSR',text:'最后推送人',input:'textbox',judge_dict: judge1},
        {field:'ZHTSRID',text:'最后推送人ID',input:'textbox',judge_dict: judge1},
        //{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
        {field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
        {field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},
        //{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge1},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'xt_lrrbmid_sj',fxj:'xt_lrrbmid_fxj',pcs:'xt_lrrbmid_pcs',zrq:'xt_lrrbmid_zrq'}},
/*        {field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},*/
        {field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
        {field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},
        {field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge1},
        {field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'xt_zhxgrbmid_sj',fxj:'xt_zhxgrbmid_fxj',pcs:'xt_zhxgrbmid_pcs',zrq:'xt_zhxgrbmid_zrq'}},
/*        {field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},
        {field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},
        {field:'XT_ZXYY',text:'注销原因',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_JZGJZXYY.js',multiple:true},
        {field:'XT_ZXYYBZ',text:'注销原因备注',input:'textbox',judge_dict: judge1}*/
    ],


    HJQL_HJPCSSHB_type : 'HJQL_HJPCSSHB',
    HJQL_HJPCSSHB_title : '业务协同_户籍派出所审核信息',
    HJQL_HJPCSSHB_init : [],    //默认显示的查询条件
    HJQL_HJPCSSHB : [
        //{field:'ID',text:'ID',input:'textbox',judge_dict: judge1},
        {field:'SFZH',text:'身份证号码',input:'textbox',judge_dict: judge1},
        {field:'PCSMC',text:'派出所名称',input:'textbox',judge_dict: judge1},
        {field:'PCSDM',text:'派出所代码',input:'textbox_org',judge_dict: judge3,isOrganization:true},
        {field:'CLJGDM',text:'处理结果',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJQLCLJGDM.js',multiple:true},
        {field:'YXWXYYDM',text:'应销未销原因',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJQLYXWXYYDM.js',multiple:true},
        {field:'TSPCSDM',text:'推送至派出所代码',input:'textbox_org',judge_dict: judge3,isOrganization:true},
        {field:'TSPCSMC',text:'推送至派出所名称',input:'textbox',judge_dict: judge1},
        {field:'SJJZDZ',text:'实际居住地址',input:'combobox',judge_dict: judge1},
        {field:'XXDZ',text:'详细地址',input:'combobox',judge_dict: judge1},
        {field:'TSR',text:'推送人',input:'textbox',judge_dict: judge1},
        {field:'TSRDH',text:'推送电话',input:'textbox',judge_dict: judge1},
        {field:'BRDH',text:'联系电话',input:'textbox',judge_dict: judge1},
        {field:'SHSJ',text:'审核时间',input:'datebox',judge_dict: judge2},
        {field:'SWJZSHENG',text:'省外居住所在省',input:'textbox',judge_dict: judge2},
        {field:'SWJZSHENGDM',text:'省外居住所在省代码',input:'textbox',judge_dict: judge1},
        {field:'SWJZX',text:'省外居住所在区县',input:'textbox',judge_dict: judge1},
        {field:'SWJZXDM',text:'省外居住所在区县代码',input:'textbox',judge_dict: judge1},
        {field:'SWJZDZ',text:'省外居住地址',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'GB_D_XZQHDMLIST.js',multiple:true},
        {field:'SWJZDZMC',text:'省外居住地址名称',input:'textbox',judge_dict: judge1},
        {field:'JWJZGJDM',text:'出境居住所在国',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'GB_D_GJHDQDM.js',multiple:true},
/*        {field:'FQDM',text:'分区代码',input:'textbox',judge_dict: judge1},*/
        {field:'SWJZSHI',text:'省外居住所在市',input:'textbox',judge_dict: judge1},
        {field:'SWJZSHIDM',text:'省外居住所在市代码',input:'textbox',judge_dict: judge1},
        {field:'CJSYDM',text:'出境事由',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJQLCJSYDM.js',multiple:true},
        {field:'CLJGMS',text:'处理结果描述',input:'textbox',judge_dict: judge1},
        //{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
        {field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
        {field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},
        //{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge1},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'xt_lrrbmid_sj',fxj:'xt_lrrbmid_fxj',pcs:'xt_lrrbmid_pcs',zrq:'xt_lrrbmid_zrq'}},
/*        {field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},*/
        {field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
        {field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},
        //{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge1},
        {field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'xt_zhxgrbmid_sj',fxj:'xt_zhxgrbmid_fxj',pcs:'xt_zhxgrbmid_pcs',zrq:'xt_zhxgrbmid_zrq'}},
/*        {field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},
        {field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},
        {field:'XT_ZXYY',text:'注销原因',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_JZGJZXYY.js',multiple:true},
        {field:'XT_ZXYYBZ',text:'注销原因备注',input:'textbox',judge_dict: judge1},*/
        {field:'MJLXDH',text:'民警联系电话',input:'textbox',judge_dict: judge1},
        {field:'JZD_DZID',text:'实际居住地址id',input:'textbox',judge_dict: judge1}
    ],

    HJQL_XTPCSSHB_type : 'HJQL_XTPCSSHB',
    HJQL_XTPCSSHB_title : '业务协同_协同派出所审核信息',
    HJQL_XTPCSSHB_init : [],    //默认显示的查询条件
    HJQL_XTPCSSHB : [
        //{field:'ID',text:'ID',input:'textbox',judge_dict: judge1},
        {field:'CLLXDM',text:'处理类型',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJXTCLLXDM.js',multiple:true},
        {field:'SFZH',text:'身份证号码',input:'textbox',judge_dict: judge1},
        {field:'PCSMC',text:'派出所名称',input:'textbox',judge_dict: judge1},
        {field:'PCSDM',text:'派出所代码',input:'textbox_org',judge_dict: judge3,isOrganization:true},
        {field:'CLJGDM',text:'处理结果',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJQLCLJGDM.js',multiple:true},
        {field:'YXWXYYDM',text:'应销未销原因',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJQLYXWXYYDM.js',multiple:true},
        {field:'THYYDM',text:'退回原因',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJQLTHYYDM.js',multiple:true},
        {field:'THDW',text:'退回至单位',input:'textbox_org',judge_dict: judge3,isOrganization:true},
        {field:'THRXM',text:'退回人姓名',input:'textbox',judge_dict: judge1},
        {field:'THRDH',text:'退回人电话',input:'textbox',judge_dict: judge1},
        {field:'BRDH',text:'本人电话',input:'textbox',judge_dict: judge1},
        {field:'SHSJ',text:'审核时间',input:'datebox',judge_dict: judge2},
        {field:'SWJZSHENG',text:'省外居住所在省',input:'textbox',judge_dict: judge2},
        {field:'SWJZSHENGDM',text:'省外居住所在省代码',input:'textbox',judge_dict: judge1},
        {field:'SWJZX',text:'省外居住所在区县',input:'textbox',judge_dict: judge1},
        {field:'SWJZXDM',text:'省外居住所在区县代码',input:'textbox',judge_dict: judge1},
        {field:'SWJZDZ',text:'省外居住地址',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'GB_D_XZQHDMLIST.js',multiple:true},
        {field:'SWJZDZMC',text:'省外居住地址名称',input:'textbox',judge_dict: judge1},
        {field:'JWJZGJDM',text:'出境居住所在国',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'GB_D_GJHDQDM.js',multiple:true},
/*        {field:'FQDM',text:'分区代码',input:'textbox',judge_dict: judge1},*/
        {field:'SWJZSHI',text:'省外居住所在市',input:'textbox',judge_dict: judge1},
        {field:'SWJZSHIDM',text:'省外居住所在市代码',input:'textbox',judge_dict: judge1},
        {field:'CJSYDM',text:'出境是由',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_HJQLCJSYDM.js',multiple:true},
        {field:'CLJGMS',text:'处理结果描述',input:'textbox',judge_dict: judge1},
        //{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
        {field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
        {field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},
        //{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge1},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'xt_lrrbmid_sj',fxj:'xt_lrrbmid_fxj',pcs:'xt_lrrbmid_pcs',zrq:'xt_lrrbmid_zrq'}},
/*        {field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},*/
        {field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
        {field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},
        //{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge1},
        {field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'xt_zhxgrbmid_sj',fxj:'xt_zhxgrbmid_fxj',pcs:'xt_zhxgrbmid_pcs',zrq:'xt_zhxgrbmid_zrq'}},
/*        {field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},
        {field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},
        {field:'XT_ZXYY',text:'注销原因',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_JZGJZXYY.js',multiple:true},
        {field:'XT_ZXYYBZ',text:'注销原因备注',input:'textbox',judge_dict: judge1},*/
        {field:'MJLXDH',text:'民警联系电话',input:'textbox',judge_dict: judge1}
    ],

};


//以下为测试数据
var search_result_test = {"count":3370,"msg":"success","type":null,"took":876,"result":[{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"从业人员、吴煜伟、511024197608080031、18990566999、内江市公安局东兴区分局高桥派出所、5110、511011560000、2014-10-28 15:58:17;实有人口、吴煜伟、511024197608080031、18990566999、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-12-29 15:18:23治安_二代证受理信息:13990549675;","HH":"102024420","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"69","HKDZ":"四川省内江市东兴区东兴街道东兴大道１６６８号B１７幢２单元负１０１号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"陈昕","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:22.000+0800","SFZH":"511024194707230900","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"511025199308299088","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"李菊芬","XB":"女性","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-03-11T11:08:53.000+0800","SJZT":"02","ID":"3E7AE83B149102A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.181","_index":"jzpx","DELETEFLAG":"0","HKXZ":"非农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"511024194707230900","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"},{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"实有人口、杨淑真、511002196003152220、13158577381、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-05-13 17:24:58治安_二代证受理信息:2250700;","HH":"102015864","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"31","HKDZ":"四川省内江市东兴区东兴街道凤窝街１０３号３单元１０号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"张光达","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:22.000+0800","SFZH":"511011198502221767","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"039174","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"隆杨丽","XB":"女性","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-03-10T16:37:29.000+0800","SJZT":"02","ID":"3E7AE83B146F02A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.103","_index":"jzpx","DELETEFLAG":"0","HKXZ":"非农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"511011198502221767","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"},{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"从业人员、曾景源、150826200811061218、、内江市公安局市中区分局万里坡派出所、5110、511002460000、2016-02-04 10:31:44;实有人口、曾景源、150826200811061218、13541535746、内江市公安局市中区分局城西派出所、5110、511002420000、2014-11-03 15:55:18;实有人口、李君、511002198201302524、13541535746、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-04-15 10:35:04治安_二代证受理信息:13541535746;","HH":"102023526","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"68","HKDZ":"四川省内江市东兴区东兴街道临江路５４８号２楼３号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"陈明阳","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:22.000+0800","SFZH":"51102119481109679X","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"511011198501204156","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"李华明","XB":"男性","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-03-22T12:03:57.000+0800","SJZT":"02","ID":"3E7AE83B147302A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.103","_index":"jzpx","DELETEFLAG":"0","HKXZ":"非农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"51102119481109679X","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"},{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"实有人口、周世明、51101119831028179X、13890489954、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-09-29 12:19:11;从业人员、周晓凤、511011198612271765、13152488765、三台县公安局古井派出所、5107、510722580000、2013-09-25 12:08:23;实有人口、周晓凤、511011198612271765、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-09-29 12:19:43","HH":"102011663","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"5","HKDZ":"四川省内江市东兴区东兴街道新华村14组69号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"张光达","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:22.000+0800","SFZH":"511011201112311761","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"039174","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"高艺丹","XB":"女性","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-03-02T20:42:05.000+0800","SJZT":"02","ID":"3E7AE83B149D02A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.101","_index":"jzpx","DELETEFLAG":"0","HKXZ":"农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"511011201112311761","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"},{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"实有人口、邓英素、51052119591128086X、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-07-18 15:31:47;实有人口、涂小燕、51052119831029002X、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2016-02-15 16:27:27;实有人口、陈晋希、511011201005051757、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2016-02-15 16:27:38治安_二代证受理信息:13888819442;","HH":"102019503","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"33","HKDZ":"四川省内江市东兴区东兴街道平安路２１８号附３９号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"杨敬","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:22.000+0800","SFZH":"51052119831029002X","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"039210","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"涂小燕","XB":"女性","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-02-21T20:13:45.000+0800","SJZT":"02","ID":"3E7AE83B14BA02A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.168","_index":"jzpx","DELETEFLAG":"0","HKXZ":"非农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"51052119831029002X","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"},{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"实有人口、熊朝富、511002193012070012、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2016-02-25 15:42:12;从业人员、熊斌、510102196706148492、18383266635、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-09-16 10:56:24;实有人口、熊斌、510102196706148492、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-12-19 21:28:21治安_二代证受理信息:2249716;","HH":"102020033","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"86","HKDZ":"四川省内江市东兴区东兴街道中兴路５１号１０幢１单元５号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"杨敬","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:22.000+0800","SFZH":"511002193012070012","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"039210","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"熊朝富","XB":"男性","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-02-25T22:45:06.000+0800","SJZT":"02","ID":"3E7AE83B149F02A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.191","_index":"jzpx","DELETEFLAG":"0","HKXZ":"非农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"511002193012070012","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"},{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"实有人口、门强、511002197307064136、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-11-08 14:57:37","HH":"102026755","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"2","HKDZ":"四川省内江市东兴区东兴街道中兴路８６号２６幢１２７号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"吴鹏","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:22.000+0800","SFZH":"511011201405231765","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"082964","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"门梓馨","XB":"女性","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-04-01T09:03:01.000+0800","SJZT":"02","ID":"3E7AE83B14A402A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.157","_index":"jzpx","DELETEFLAG":"0","HKXZ":"非农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"511011201405231765","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"},{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"实有人口、葛岩鑫、511011201502021751、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2016-02-26 16:34:54;实有人口、葛生权、511011198901161757、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-09-30 10:04:05","HH":"102012072","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"1","HKDZ":"四川省内江市东兴区东兴街道新建村6组20号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"陈昕","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:22.000+0800","SFZH":"511011201502021751","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"511025199308299088","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"葛岩鑫","XB":"男性","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-03-01T18:16:09.000+0800","SJZT":"02","ID":"3E7AE83B14A902A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.201","_index":"jzpx","DELETEFLAG":"0","HKXZ":"农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"511011201502021751","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"},{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"治安_二代证受理信息:2240087;","HH":"102023911","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"58","HKDZ":"四川省内江市东兴区东兴街道中兴路８６号２３幢８号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"陈飞宇","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:23.000+0800","SFZH":"511002195802264128","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"082913","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"王素英","XB":"女性","SFYRH":"一人户","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-03-16T14:00:49.000+0800","SJZT":"02","ID":"3E7AE83B14DD02A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.176","_index":"jzpx","DELETEFLAG":"0","HKXZ":"非农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"511002195802264128","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"},{"HKSZDPCSMC":"东兴派出所","XT_ZHXGRBM":"内江市公安局东兴区分局东兴派出所","THCS":"0","SJZTMC":"待处理","THXX":"实有人口、周桂英、511021194610111180、15984283525、内江市公安局东兴区分局东兴派出所、5110、511011400000、2016-02-21 19:19:01;实有人口、段芸双、511002200110307020、、内江市公安局东兴区分局东兴派出所、5110、511011400000、2016-02-21 19:17:58;实有人口、段莹钏、511002199609017027、15282528103、遂宁市公安局河东新区分局慈音派出所、5109、510998410000、2016-01-11 01:37:54;从业人员、段刚、511021197105271195、15984283525、内江市公安局东兴区分局东兴派出所、5110、511011400000、2013-07-09 11:07:41;实有人口、段刚、511021197105271195、15984283525、内江市公安局东兴区分局东兴派出所、5110、511011400000、2014-12-17 14:13:33;从业人员、段莹钏、511002199609017027、、内江市公安局市中区分局城南派出所、5110、511002410000、2014-07-18 12:35:50;从业人员、段芸双、511002200110307020、15984283525、内江市公安局东兴区分局东兴派出所、5110、511011400000、2013-11-19 11:11:56治安_二代证受理信息:15984283525;","HH":"102018849","SECURITYGRADE":"1","XT_ZHXGRBM_GAT_NAME":"四川省公安厅","NL":"70","HKDZ":"四川省内江市东兴区东兴街道中兴路１６３号２单元１２号","HKSZDPCS":"511011400000","XT_ZHXGRXM":"杨敬","FQDM":"5110","XT_ZHXGRBM_SJ_NAME":"四川省内江市公安局","XT_ZHXGRBMID":"511011400000","XT_LRSJ":"2016-05-05T19:34:23.000+0800","SFZH":"511021194610111180","CLJGMC":"01","XT_ZHXGRBMID_SJ":"511000000000","XT_ZHXGRID":"039210","HKSZDXZQHMC":"东兴区","XT_ZHXGRBMID_GAT":"510000000000","_type":"hjql_hjqlxxb","CZLX":"01","XM":"周桂英","XB":"女性","CLJG":"01","DOWNLOADFLAG":"0","XT_ZHXGRBM_FXJ_NAME":"四川省内江市公安局东兴区分局","UPLOADFLAG":"0","XT_ZHXGSJ":"2016-02-21T20:04:00.000+0800","SJZT":"02","ID":"3E7AE83B14F602A0E0530A41023602A0","HKSZDSZMC":"内江市","XT_ZHXGIP":"10.68.104.103","_index":"jzpx","DELETEFLAG":"0","HKXZ":"非农业家庭户","XT_ZHXGRBMID_FXJ":"511011000000","_id":"511021194610111180","HKSZDXZQH":"511011","CLJGMS":"本派出所内居住的户籍人口"}]};
