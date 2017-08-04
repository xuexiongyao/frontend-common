/*配置说明
* 1.不同查询模块均使用相同的index_config.html中的内容,改革文件名即可
* 2.html文件下方引用不同的search_config_模块名称.js
* 3.在search_config_模块名称.js中配置页面查询参数和展示参数
*/

var dictPath = portal +'/common/dict/';

var search_config_arr = ['BZDZ_VIEW'];


//查询条件配置
var search_config = {
    //查询接口地址
    //url : compositQueryPath + '/bigdata/v1/test2/syrk/s?q=',
	url : compositQueryPath,
    basePath : basePath,
    export_url : basePath+'cetcQuery/exportExcel2003/zhcxBzdz',
    sort : "DZMC ASC",
    main_type : 'BZDZ_VIEW',//主表
    primary_key : 'ID',//主键

    //页面标题名称
    query_title : '标准地址',
    sysType:'bzdz',
    BZDZ_VIEW_type : 'BZDZ_VIEW',
    BZDZ_VIEW_title : '标准地址',
    BZDZ_VIEW_init : ['DZJB','DZMC','XZQHDM','XT_LRRBMID'],    //默认显示的查询条件
    BZDZ_VIEW : [
        {field:'DZJB',text:'地址级别',input:'combobox',judge_dict: judge4,condition_dict:dictPath+'BD_D_BZDZJBDM.js'},
        {field:'DZMC',text:'地址名称',input:'textbox',judge_dict: judge1},
        {field:'XZQHDM',text:'行政区划',input:'combobox',judge_dict: judge1,condition_dict:dictPath+'GB_D_XZQHDMLIST.js',multiple:true},
        {field:'JLXMC',text:'街路(巷)名称',input:'textbox',judge_dict: judge1},
        {field:'MLPHMC',text:'门(楼)牌号名称',input:'textbox',judge_dict: judge1},
        {field:'XT_LRRXM',text:'录入人',input:'textbox',judge_dict: judge1},
        //{field:'XT_LRRID',text:'创建人ID',input:'textbox',judge_dict: judge1},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
    	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
    	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
        {field:'SFDJFW',text:'是否登记房屋',input:'combobox',judge_dict: judge4,condition_dict:dictPath+'BD_D_SFDM.js'},
        {field:'SFDJDW',text:'是否登记单位',input:'combobox',judge_dict: judge4,condition_dict:dictPath+'BD_D_SFDM.js'},
        {field:'SFCJZP',text:'是否采集图片',input:'combobox',judge_dict: judge4,condition_dict:dictPath+'BD_D_SFDM.js'},
        {field:'JLXLX',text:'街路巷类型',input:'combobox',judge_dict: judge4,condition_dict:dictPath+'BD_D_JLXLXDM.js'},
    	{field:'ZXSJ',text:'注销时间',input:'datebox',judge_dict: judge2},
        {field:'SFBZ',text:'是否备注',input:'combobox',judge_dict: judge4,condition_dict:dictPath+'BD_D_SFDM.js'},
        {field:'BZXX',text:'备注信息',input:'textbox',judge_dict: judge1},
        {field:'SYFWZS',text:'实有房屋总数',input:'textbox',judge_dict: judge2},
        {field:'DZ_SYDW_COUNT',text:'实有单位总数',input:'textbox',judge_dict: judge2},
        {field:'DZ_CYRY_COUNT',text:'从业人员总数',input:'textbox',judge_dict: judge2},
        {field:'DZ_SYRK_COUNT',text:'实有人口总数',input:'textbox',judge_dict: judge2},
        {field:'DZ_JZW_COUNT',text:'建筑物总数',input:'textbox',judge_dict: judge2},
        {field:'DZ_XQ_COUNT',text:'小区总数',input:'textbox',judge_dict: judge2},
        {field:'MZMMJLXQK',text:'民政部门命名情况',input:'textbox',judge_dict: judge2},
        {field:'SFBD',text:'是否标点',input:'combobox',judge_dict: judge4,condition_dict:dictPath+'BD_D_SFDM.js'},
        {field:'FXJDM',text:'分县局',input:'textbox_org',judge_dict: judge9,isOrganization:true},
        {field:'PCSDM',text:'派出所',input:'textbox_org',judge_dict: judge9,isOrganization:true},
        {field:'ZRQDM',text:'责任区',input:'textbox_org',judge_dict: judge9,isOrganization:true},
    	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_SFDM.js',multiple:true},   
    	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1}

    ]

};


//以下为测试数据
var search_result_test = {"count":1136890,"msg":"success","type":null,"took":1155,"result":[{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"511002530000201306082023316847","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村12组35号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.126","XT_ZXBZ":"0","XT_LRSJ":"2013-07-02T09:51:19.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-07-02T09:51:19.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000324","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"511024400000201208221705114623","DZJB":"3","FXJDM":"510105000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED27D3CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"},{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"511028080200201208201642565696","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村9组32号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.121","XT_ZXBZ":"0","XT_LRSJ":"2013-05-27T15:01:17.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-05-27T15:01:17.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000251","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"3E65DC4ED2293CB8E0539B64400A82EE","DZJB":"2","FXJDM":"510105000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED2293CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"},{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"3E65DC4ED2AD3CB8E0539B64400A82EE","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村15组11号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.126","XT_ZXBZ":"0","XT_LRSJ":"2013-07-02T10:00:54.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-07-02T10:00:54.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000372","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"3E65DC4ED2AD3CB8E0539B64400A82EE","DZJB":"4","FXJDM":"510105000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED2AD3CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"},{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"3E65DC4ED22C3CB8E0539B64400A82EE","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村10组10号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.121","XT_ZXBZ":"0","XT_LRSJ":"2013-05-27T15:01:43.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-05-27T15:01:43.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000255","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"3E65DC4ED22C3CB8E0539B64400A82EE","DZJB":"3","FXJDM":"510603000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED22C3CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"},{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"3E65DC4ED2383CB8E0539B64400A82EE","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村10组25号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.121","XT_ZXBZ":"0","XT_LRSJ":"2013-05-27T15:03:07.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-05-27T15:03:07.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000268","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"3E65DC4ED2383CB8E0539B64400A82EE","DZJB":"3","FXJDM":"510603000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED2383CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"},{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"3E65DC4ED23D3CB8E0539B64400A82EE","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村10组28号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.121","XT_ZXBZ":"0","XT_LRSJ":"2013-05-27T15:03:38.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-05-27T15:03:38.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000271","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"3E65DC4ED23D3CB8E0539B64400A82EE","DZJB":"3","FXJDM":"510603000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED23D3CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"},{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"3E65DC4ED2493CB8E0539B64400A82EE","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村11组12号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.121","XT_ZXBZ":"0","XT_LRSJ":"2013-05-27T15:04:46.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-05-27T15:04:46.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000283","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"3E65DC4ED2493CB8E0539B64400A82EE","DZJB":"3","FXJDM":"510603000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED2493CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"},{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"3E65DC4ED2DE3CB8E0539B64400A82EE","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村16组5号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.126","XT_ZXBZ":"0","XT_LRSJ":"2013-07-02T10:29:27.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-07-02T10:29:27.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000420","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"3E65DC4ED2DE3CB8E0539B64400A82EE","DZJB":"3","FXJDM":"510603000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED2DE3CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"},{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"3E65DC4ED1773CB8E0539B64400A82EE","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村4组12号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.121","XT_ZXBZ":"0","XT_LRSJ":"2013-05-24T10:48:42.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-05-24T10:48:42.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000092","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"3E65DC4ED1773CB8E0539B64400A82EE","DZJB":"3","FXJDM":"510603000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED1773CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"},{"ZRQMC":"和新责任区","XT_ZHXGRBM":"德阳市公安局治安管理支队","FXJMC":"四川省德阳市公安局旌阳区分局","XT_LRRXM":"何宇","SJDM":"510600000000","DZID":"3E65DC4ED1EC3CB8E0539B64400A82EE","XT_LRRBMID":"510603580000","XT_LRRID":"510603198412227817","DZMC":"四川省德阳市旌阳区和新镇英雄岭村7组2号","XZQHDMMC":"旌阳区","XT_ZHXGRBMID":"510600100000","XT_LRIP":"10.66.64.121","XT_ZXBZ":"0","XT_LRSJ":"2013-05-27T14:50:28.000+0800","SJMC":"四川省德阳市公安局","XT_ZHXGRID":"542523198211040033","_type":"bzdz_view","PCSDM":"510603580000","XT_ZHXGRXM":"袁洪","XT_CJSJ":"2013-05-27T14:50:28.000+0800","XT_LRRBM":"德阳市公安局旌阳区分局和新派出所","DZBH":"000188","XZQHDM":"510603","XT_ZHXGSJ":"2013-09-22T16:05:05.000+0800","ID":"3E65DC4ED1EC3CB8E0539B64400A82EE","DZJB":"3","FXJDM":"510603000000","_index":"jzpx","ZRQDM":"5106035800002013011810704","_id":"3E65DC4ED1EC3CB8E0539B64400A82EE","PCSMC":"四川省德阳市公安局旌阳区分局和新派出所"}]};