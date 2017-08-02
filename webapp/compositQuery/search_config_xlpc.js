/*配置说明
* 1.不同查询模块均使用相同的index_config.html中的内容,改革文件名即可
* 2.html文件下方引用不同的search_config_模块名称.js
* 3.在search_config_模块名称.js中配置页面查询参数和展示参数
*/

var dictPath = portal+'/common/dict/'

var search_config_arr = ['XLPC_PCXX','XLPC_BPCRYXX','XLPC_BPCCLXX','XLPC_BPCWPXX','XLPC_KKXX'];


//查询条件配置
var search_config = {
    //查询接口地址
    url : compositQueryPath,
	basePath : basePath,
	export_url : basePath+'cetcQuery/exportExcel2003/zhcxXlpc',

    main_type : 'XLPC_PCXX',
	primary_key : 'ID',//主键

    //页面标题名称
    query_title : '巡逻盘查',
    sysType: 'xlpc',		//系统类型,用于区别查询模板的来源

    //基本信息查询条件和展示项配置
	XLPC_KKXX_type : 'XLPC_KKXX',
	XLPC_KKXX_title : '巡逻盘查_卡口信息',
	XLPC_KKXX_init : ['KKMC','GAJMC','KKDZ'],    //默认显示的查询条件
	XLPC_KKXX : [
		{field:'KKMC',text:'卡口名称',input:'textbox',judge_dict: judge1},
		{field:'KKSZDGAJ',text:'卡口所在地公安局',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'DZ_XZDZ',text:'地址选择地址',input:'textbox',judge_dict: judge1},
		{field:'ZBX',text:'卡口坐标X',input:'textbox',judge_dict: judge1},
		{field:'ZBY',text:'卡口坐标Y',input:'textbox',judge_dict: judge1},
		{field:'DZBC',text:'地址补充',input:'textbox',judge_dict: judge1},
		{field:'KKDZ',text:'卡口地址',input:'textbox',judge_dict: judge1},
		{field:'XT_CJSJ',text:'操作时间',input:'datebox',judge_dict: judge2},
		{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
		{field:'XT_LRRXM',text:'操作人姓名',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRID',text:'操作人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
		{field:'XT_LRIP',text:'操作IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
		{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
		{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge6,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},
		{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},
		{field:'XT_ZXYYBZ',text:'注销原因备注',input:'textbox',judge_dict: judge1},
		{field:'GXSJDM',text:'管辖市局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true}
	],

	XLPC_PCXX_type : 'XLPC_PCXX',
	XLPC_PCXX_title : '巡逻盘查_盘查信息',
	XLPC_PCXX_init : ['PCSJ','KKMC','PCDZ'],    //默认显示的查询条件
	XLPC_PCXX : [
		{field:'XT_CJSJ',text:'操作时间',input:'datebox',judge_dict: judge2},
		{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
		{field:'XT_LRRXM',text:'操作人姓名',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRID',text:'操作人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
		{field:'XT_LRIP',text:'操作IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
		{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
		{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge6,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},
		{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},
		{field:'XT_ZXYYBZ',text:'注销原因备注',input:'textbox',judge_dict: judge1},
		{field:'KKMC',text:'卡口名称',input:'textbox',judge_dict: judge1},
		{field:'PCSJ',text:'盘查时间',input:'datebox',judge_dict: judge2},
		{field:'DZ_XZDZ',text:'地址选择地址',input:'textbox',judge_dict: judge1},
		{field:'DZBC',text:'地址补充',input:'textbox',judge_dict: judge1},
		{field:'PCDZ',text:'盘查地址',input:'textbox',judge_dict: judge1},
		{field:'PCMJ_ID',text:'盘查民警ID',input:'textbox',judge_dict: judge1},
		{field:'PCMJ',text:'盘查民警',input:'textbox',judge_dict: judge1},
		{field:'PCMJ_ORGCODE',text:'盘查民警部门编码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'PCDW',text:'盘查单位',input:'textbox',judge_dict: judge1},
		{field:'PCYY',text:'盘查原因',input:'combobox',judge_dict: judge1,condition_dict:dictPath+'BD_D_PCYY.js',multiple:true},
		{field:'PCBZ',text:'盘查备注',input:'textbox',judge_dict: judge1},
		{field:'BCZT',text:'保存状态0预保存1保存',input:'textbox',judge_dict: judge1},
		{field:'ZHYBCSJ',text:'最后预保存时间',input:'datebox',judge_dict: judge2},
		{field:'BCSJ',text:'保存时间',input:'datebox',judge_dict: judge2},
		{field:'GXFJDM',text:'管辖分局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXPCSDM',text:'管辖派出所代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXZRQDM',text:'管辖责任区代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXSJDM',text:'管辖市局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true}
	],

	XLPC_BPCRYXX_type : 'XLPC_BPCRYXX',
	XLPC_BPCRYXX_title : '巡逻盘查_被盘查人员信息',
	XLPC_BPCRYXX_init : [],    //默认显示的查询条件
	XLPC_BPCRYXX : [
		{field:'BPCR_ZJLYDM',text:'被盘查人_证件来源',input:'combobox',judge_dict: judge1,condition_dict:dictPath+'BD_D_ZJLYDM.js',multiple:true},
		{field:'BPCR_ZJLX',text:'被盘查人_证件类型',input:'combobox',judge_dict: judge1,condition_dict:dictPath+'KX_D_CYZJDM.js',multiple:true},
		{field:'BPCR_ZJHM',text:'被盘查人_证件号码',input:'textbox',judge_dict: judge1},
		{field:'BPCR_XM',text:'被盘查人_姓名',input:'textbox',judge_dict: judge1},
		{field:'BPCR_XB',text:'被盘查人_性别',input:'combobox',judge_dict: judge1,condition_dict:dictPath+'GB_D_XBDM.js',multiple:true},
		{field:'BPCR_MZ',text:'被盘查人_民族',input:'combobox',judge_dict: judge1,condition_dict:dictPath+'GB_D_MZDM.js',multiple:true},
		{field:'BPCR_CSRQ',text:'被盘查人_出生日期',input:'datebox',judge_dict: judge2},
		{field:'BPCR_TMTZ',text:'被盘查人_体貌特征',input:'textbox',judge_dict: judge1},
		{field:'BPCR_HJDZXZ',text:'被盘查人_户籍地址详址',input:'textbox',judge_dict: judge1},
		{field:'BPCR_LXDH',text:'被盘查人_联系电话',input:'textbox',judge_dict: judge1},
		{field:'BPCR_XZHZ',text:'被盘查人_现住址',input:'textbox',judge_dict: judge1},
		{field:'BPCR_XXZHZ',text:'被盘查人_详细住址',input:'textbox',judge_dict: judge1},
		{field:'CLJG',text:'处理结果',input:'combobox',judge_dict: judge1,condition_dict:dictPath+'BD_D_RYCLJGDM.js',multiple:true},
		{field:'CLJGBC',text:'处理结果补充',input:'textbox',judge_dict: judge1},
		{field:'YJLX',text:'移交类型',input:'combobox',judge_dict: judge1,condition_dict:dictPath+'BD_D_YJLX.js',multiple:true},
		{field:'YJBMMC',text:'移交部门名称',input:'textbox',judge_dict: judge1},
		{field:'ZKYY',text:'暂扣原因',input:'textbox',judge_dict: judge1},
		{field:'XXBZ',text:'信息备注',input:'textbox',judge_dict: judge1},
		{field:'BCZT',text:'保存状态0预保存1保存',input:'textbox',judge_dict: judge1},
		{field:'XT_CJSJ',text:'操作时间',input:'datebox',judge_dict: judge2},
		{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
		{field:'XT_LRRXM',text:'操作人姓名',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRID',text:'操作人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
		{field:'XT_LRIP',text:'操作IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
		{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
		{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge6,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},
		{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},
		{field:'XT_ZXYYBZ',text:'注销原因备注',input:'textbox',judge_dict: judge1},
		{field:'GXPCSDM',text:'管辖派出所代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXFJDM',text:'管辖分局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXZRQDM',text:'管辖责任区代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXSJDM',text:'管辖市局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true}
	],

	XLPC_BPCCLXX_type : 'XLPC_BPCCLXX',
	XLPC_BPCCLXX_title : '巡逻盘查_被盘查车辆信息',
	XLPC_BPCCLXX_init : [],    //默认显示的查询条件
	XLPC_BPCCLXX : [
		{field:'GXSJDM',text:'管辖市局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'JSRY_BPCRYID',text:'驾驶人员_被盘查人员id',input:'textbox',judge_dict: judge1},
		{field:'CZRY_BPCRYID',text:'乘坐人员_被盘查人员id',input:'textbox',judge_dict: judge1},
		{field:'CLZL',text:'车辆种类',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_CLZL.js',multiple:true},
		{field:'CLLX',text:'车辆类型',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_CLLX.js',multiple:true},
		{field:'SFXGCP',text:'是否悬挂车牌',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_SFDM.js',multiple:true},
		{field:'HPZL',text:'号牌种类',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_HPZL.js',multiple:true},
		{field:'HPHM',text:'号牌号码',input:'textbox',judge_dict: judge1},
		{field:'CSYS',text:'车身颜色',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_CSYS.js',multiple:true},
		{field:'SFBBFDJH',text:'是否能够辨别发动机号',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_SFDM.js',multiple:true},
		{field:'FDJH',text:'发动机号',input:'textbox',judge_dict: judge1},
		{field:'SFBBCJH',text:'是否能够辨别车架号',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_SFDM.js',multiple:true},
		{field:'CJH',text:'车架号',input:'textbox',judge_dict: judge1},
		{field:'GYH',text:'钢印号',input:'textbox',judge_dict: judge1},
		{field:'PP',text:'品牌',input:'textbox',judge_dict: judge1},
		{field:'CLJG',text:'处理结果',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_CLCLJGDM.js',multiple:true},
		{field:'CLJGBC',text:'处理结果补充',input:'textbox',judge_dict: judge1},
		{field:'YJLX',text:'移交类型',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_YJLX.js',multiple:true},
		{field:'YJBMBH',text:'移交部门编号',input:'textbox',judge_dict: judge1},
		{field:'YJBMMC',text:'移交部门名称',input:'textbox',judge_dict: judge1},
		{field:'ZKYY',text:'暂扣原因',input:'textbox',judge_dict: judge1},
		{field:'XXBZ',text:'信息备注',input:'textbox',judge_dict: judge1},
		{field:'BCZT',text:'保存状态0预保存1保存',input:'textbox',judge_dict: judge1},
		{field:'XT_CJSJ',text:'操作时间',input:'datebox',judge_dict: judge2},
		{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
		{field:'XT_LRRXM',text:'操作人姓名',input:'textbox',judge_dict: judge1},
		{field:'GXFJDM',text:'管辖分局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'XT_ZXYYBZ',text:'注销原因备注',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRID',text:'操作人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
		{field:'XT_LRIP',text:'操作IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
		{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
		{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge6,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},
		{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},
		{field:'GXPCSDM',text:'管辖派出所代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXZRQDM',text:'管辖责任区代码',input:'textbox_org',judge_dict: judge9,isOrganization:true}
	],

	XLPC_BPCWPXX_type : 'XLPC_BPCWPXX',
	XLPC_BPCWPXX_title : '巡逻盘查_被盘查物品信息',
	XLPC_BPCWPXX_init : [],    //默认显示的查询条件
	XLPC_BPCWPXX : [
		{field:'XT_LRRXM',text:'操作人姓名',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRID',text:'操作人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
		{field:'XT_LRIP',text:'操作IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
		{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},
		{field:'GXFJDM',text:'管辖分局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXPCSDM',text:'管辖派出所代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXZRQDM',text:'管辖责任区代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'GXSJDM',text:'管辖市局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		{field:'SJCH',text:'手机串号',input:'textbox',judge_dict: judge1},
		{field:'SJHM',text:'手机号码',input:'textbox',judge_dict: judge1},
		{field:'MAC',text:'MAC地址',input:'textbox',judge_dict: judge1},
		{field:'SSYH',text:'所属银行',input:'textbox',judge_dict: judge1},
		{field:'KH',text:'卡号',input:'textbox',judge_dict: judge1},
		{field:'QZZL',text:'枪支种类',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_QZZLDM.js',multiple:true},
		{field:'ZDSL',text:'子弹数量',input:'textbox',judge_dict: judge1},
		{field:'QH',text:'枪号',input:'textbox',judge_dict: judge1},
		{field:'SNID',text:'电脑SNID',input:'textbox',judge_dict: judge1},
		{field:'XT_ZXYYBZ',text:'注销原因备注',input:'textbox',judge_dict: judge1},
		{field:'CYR_BPCRYID',text:'持有人_被盘查人员ID',input:'textbox',judge_dict: judge1},
		{field:'WPLBDM',text:'物品类别',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_WPLBDM.js',multiple:true},
		{field:'WPMC',text:'物品名称',input:'textbox',judge_dict: judge1},
		{field:'PP',text:'品牌',input:'textbox',judge_dict: judge1},
		{field:'XH',text:'型号',input:'textbox',judge_dict: judge1},
		{field:'SL',text:'数量',input:'textbox',judge_dict: judge1},
		{field:'DW',text:'单位',input:'textbox',judge_dict: judge1},
		{field:'WP_XX',text:'物品信息',input:'textbox',judge_dict: judge1},
		{field:'CLJG',text:'处理结果',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_WPCLJGDM.js',multiple:true},
		{field:'CLJGBC',text:'处理结果补充',input:'textbox',judge_dict: judge1},
		{field:'YJLX',text:'移交类型',input:'textbox',judge_dict: judge1,condition_dict:dictPath+'BD_D_YJLX.js',multiple:true},
		{field:'YJBMMC',text:'移交部门名称',input:'textbox',judge_dict: judge1},
		{field:'ZKYY',text:'暂扣原因',input:'textbox',judge_dict: judge1},
		{field:'WPBZ',text:'物品备注',input:'textbox',judge_dict: judge1},
		{field:'BCZT',text:'保存状态0预保存1保存',input:'textbox',judge_dict: judge1},
		{field:'XT_CJSJ',text:'操作时间',input:'datebox',judge_dict: judge2},
		{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
		{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge1},
		{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
		{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},
		{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge6,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},
		{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1}
	],

};


//以下为测试数据
var search_result_test = {"count":222795,"msg":"success","type":null,"took":10312,"result":[{"XT_ZHXGRBM":"隆昌县公安局交警大队巡逻三中队","JN_xlpc_bpcryxx":"{\"count\": 1, \"data\": [{\"BPCR_HJDZXZ\": \"成都市龙泉驿区龙泉驿都中路９２８号１０栋２单元１９楼１９０１号\", \"BPCR_HJDZID\": \"510112\", \"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"BPCR_ZJLYDMMC\": \"1\", \"PC_ID\": \"2B9F80966199437289919601540092EB\", \"XT_ZHXGSJ\": \"2015-06-15T14:45:30.000+0800\", \"BPCR_ZJLXMC\": \"居民身份证\", \"BPCR_XZHDZID\": \"null\", \"XT_LRRXM\": \"叶顶柏\", \"BPCR_MZMC\": \"汉族\", \"XT_LRRBMID\": \"511028170700\", \"BPCR_ZJHM\": \"511028197009069311\", \"XT_LRRID\": \"511028196210010018\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170700\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.103\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-15T14:42:55.000+0800\", \"CLJGMC\": \"现场放行\", \"BPCR_XBMC\": \"男\", \"OLD_BPCR_XZHDZID\": \"null\", \"OLD_RY_ID\": \"511028303000201205041827538767\", \"_type\": \"xlpc_bpcryxx\", \"BPCR_MZ\": \"01\", \"XT_ZHXGRXM\": \"叶顶柏\", \"XT_ZHXGRBMID\": \"511028170700\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-15T14:42:55.000+0800\", \"BPCR_ZJLYDM\": \"1\", \"BPCR_XB\": \"1\", \"BPCR_CSRQ\": \"1970-09-06T00:00:00.000+0800\", \"GXSJDM\": \"511000000000\", \"ID\": \"61BF262D736347F1BA0F0887BD0696D6\", \"BPCR_XM\": \"李天贵\", \"XT_ZHXGIP\": \"10.68.112.103\", \"BCZTMC\": \"保存\", \"BPCR_ZJLX\": \"111\", \"_index\": \"\", \"OLD_ID\": \"51102851102817070020150615102210\", \"OLD_PC_ID\": \"51102851102817070020150615102209\", \"XT_ZHXGRID\": \"511028196210010018\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511028000000\", \"_id\": \"61BF262D736347F1BA0F0887BD0696D6\", \"RY_ID\": \"E57F117EEF954F979CF76798F9EE9715\", \"GXPCSDM\": \"511028170000\"}]}","OLD_DZ_ID":"511028080000201208201709036166","XT_LRRXM":"叶顶柏","XT_LRRBMID":"511028170700","XT_LRRID":"511028196210010018","BCZT":"1","GXZRQDM":"511028170700","XT_ZHXGRBMID":"511028170700","XT_LRIP":"10.68.112.103","XT_ZXBZ":"0","XT_LRSJ":"2015-06-15T14:42:18.000+0800","XT_ZHXGRID":"511028196210010018","ZBY":"29.33539","ZBX":"105.29132","_type":"xlpc_pcxx","PCDW":"511028170700","XT_ZHXGRXM":"叶顶柏","XT_CJSJ":"2015-06-15T14:42:18.000+0800","PCDZ":"四川省内江市隆昌县隆泸大道","XT_LRRBM":"隆昌县公安局交警大队巡逻三中队","PCSJ":"2015-06-15T14:41:00.000+0800","JN_xlpc_bpcwpxx":"{\"count\": 2, \"data\": [{\"XT_LRSJ\": \"2015-06-15T14:44:38.000+0800\", \"OLD_PC_ID\": \"51102851102817070020150615102209\", \"PC_ID\": \"2B9F80966199437289919601540092EB\", \"XT_LRRXM\": \"叶顶柏\", \"PP\": \"索爱\", \"XT_LRRBMID\": \"511028170700\", \"XT_LRRID\": \"511028196210010018\", \"BCZT\": \"0\", \"GXZRQDM\": \"511028170700\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.103\", \"XT_ZXBZ\": \"1\", \"CLJGMC\": \"现场放行\", \"CYR_BPCRYID\": \"51102851102817070020150615102210\", \"_type\": \"xlpc_bpcwpxx\", \"GXFJDM\": \"511028000000\", \"XT_CJSJ\": \"2015-06-15T14:44:38.000+0800\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"CLJG\": \"1\", \"WPMC\": \"MP4\", \"OLD_CYR_BPCRYID\": \"51102851102817070020150615102210\", \"XT_ZHXGSJ\": \"2015-06-15T14:46:09.000+0800\", \"GXSJDM\": \"511000000000\", \"WPLBDMMC\": \"其他\", \"ID\": \"B332DDC57DBB40B38EBBD8A010056F49\", \"BCZTMC\": \"预保存\", \"_index\": \"\", \"OLD_ID\": \"51102851102817070020150615102212\", \"YJLXMC\": \"公安内移交\", \"WPLBDM\": \"99\", \"YJBMBH\": \"undefined\", \"_id\": \"B332DDC57DBB40B38EBBD8A010056F49\", \"GXPCSDM\": \"511028170000\"}, {\"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"OLD_PC_ID\": \"51102851102817070020150615102209\", \"PC_ID\": \"2B9F80966199437289919601540092EB\", \"XT_LRRXM\": \"叶顶柏\", \"XT_LRRBMID\": \"511028170700\", \"XT_LRRID\": \"511028196210010018\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170700\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.103\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-15T14:45:22.000+0800\", \"CLJGMC\": \"现场放行\", \"CYR_BPCRYID\": \"51102851102817070020150615102210\", \"_type\": \"xlpc_bpcwpxx\", \"GXFJDM\": \"511028000000\", \"XT_ZHXGRXM\": \"叶顶柏\", \"XT_ZHXGRBMID\": \"511028170700\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-15T14:45:22.000+0800\", \"WPMC\": \"书籍\", \"OLD_CYR_BPCRYID\": \"51102851102817070020150615102210\", \"XT_ZHXGSJ\": \"2015-06-15T14:46:17.000+0800\", \"GXSJDM\": \"511000000000\", \"WPLBDMMC\": \"其他\", \"ID\": \"02DD42F5FDDC43248B8043FE8F6715A9\", \"XT_ZHXGIP\": \"10.68.112.103\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102851102817070020150615102213\", \"XT_ZHXGRID\": \"511028196210010018\", \"YJLXMC\": \"公安内移交\", \"WPLBDM\": \"99\", \"YJBMBH\": \"undefined\", \"_id\": \"02DD42F5FDDC43248B8043FE8F6715A9\", \"GXPCSDM\": \"511028170000\"}]}","ID":"2B9F80966199437289919601540092EB","PCYYMC":"在巡逻中发现可疑情况主动盘查","XT_ZHXGSJ":"2015-06-15T14:46:31.000+0800","GXSJDM":"511000000000","PCMJ_ORGCODE":"511028170700","DZ_ID":"511028080000201208201709036166","PCYY":"4","XT_ZHXGIP":"10.68.112.103","BCZTMC":"保存","_index":"test2","OLD_ID":"51102851102817070020150615102209","JN_xlpc_bpcclxx":"{\"count\": 1, \"data\": [{\"SFXGCPMC\": \"是\", \"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"OLD_PC_ID\": \"51102851102817070020150615102209\", \"HPZL\": \"02\", \"PC_ID\": \"2B9F80966199437289919601540092EB\", \"CSYS\": \"J\", \"XT_LRRXM\": \"叶顶柏\", \"XT_LRRBMID\": \"511028170700\", \"XT_LRRID\": \"511028196210010018\", \"SFXGCP\": \"1\", \"CSYSMC\": \"黑\", \"SFBBFDJH\": \"1\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170700\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.103\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-15T14:43:37.000+0800\", \"CLZLMC\": \"机动车\", \"CLJGMC\": \"现场放行\", \"XT_ZHXGRID\": \"511028196210010018\", \"CLLXMC\": \"轿车\", \"_type\": \"xlpc_bpcclxx\", \"SFBBCJHMC\": \"是\", \"XT_ZHXGRXM\": \"叶顶柏\", \"XT_ZHXGRBMID\": \"511028170700\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-15T14:43:37.000+0800\", \"FDJH\": \"S91833\", \"CLLX\": \"K33\", \"HPHM\": \"川AB76N6\", \"XT_ZHXGSJ\": \"2015-06-15T14:46:02.000+0800\", \"GXSJDM\": \"511000000000\", \"ID\": \"6FD85B42970C4068A0EEE30AEDE15387\", \"SFBBCJH\": \"1\", \"XT_ZHXGIP\": \"10.68.112.103\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102851102817070020150615102211\", \"SFBBFDJHMC\": \"是\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511028000000\", \"CLZL\": \"1\", \"CJH\": \"LSVXU65N5E2090801\", \"_id\": \"6FD85B42970C4068A0EEE30AEDE15387\", \"HPZLMC\": \"小型汽车号牌\", \"GXPCSDM\": \"511028170000\"}]}","PCMJ":"叶顶柏","DZ_XZDZ":"四川省内江市隆昌县隆泸大道","GXFJDM":"511028000000","PCMJ_ID":"511028196210010018","_id":"2B9F80966199437289919601540092EB","GXPCSDM":"511028170000"},{"XT_ZHXGRBM":"隆昌县公安局交警大队巡逻三中队","JN_xlpc_bpcryxx":"{\"count\": 1, \"data\": [{\"BPCR_HJDZXZ\": \"四川省大英县回马镇双江街60号附24号\", \"BPCR_HJDZID\": \"510923\", \"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"BPCR_ZJLYDMMC\": \"1\", \"PC_ID\": \"8D5ABD513F104C8388C5FCF7AB43667F\", \"XT_ZHXGSJ\": \"2015-06-15T15:48:13.000+0800\", \"BPCR_ZJLXMC\": \"居民身份证\", \"BPCR_XZHDZID\": \"null\", \"XT_LRRXM\": \"叶顶柏\", \"BPCR_MZMC\": \"汉族\", \"XT_LRRBMID\": \"511028170700\", \"BPCR_ZJHM\": \"510923198606293339\", \"XT_LRRID\": \"511028196210010018\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170700\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.103\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-15T15:46:50.000+0800\", \"CLJGMC\": \"现场放行\", \"BPCR_XBMC\": \"男\", \"OLD_BPCR_XZHDZID\": \"null\", \"OLD_RY_ID\": \"510923507000201204290304049395\", \"_type\": \"xlpc_bpcryxx\", \"BPCR_MZ\": \"01\", \"XT_ZHXGRXM\": \"叶顶柏\", \"XT_ZHXGRBMID\": \"511028170700\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-15T15:46:50.000+0800\", \"BPCR_ZJLYDM\": \"1\", \"BPCR_XB\": \"1\", \"BPCR_CSRQ\": \"1986-06-29T00:00:00.000+0900\", \"GXSJDM\": \"511000000000\", \"ID\": \"160FC1A513644326ADAEA827C2B767BC\", \"BPCR_XM\": \"徐槐\", \"XT_ZHXGIP\": \"10.68.112.103\", \"BCZTMC\": \"保存\", \"BPCR_ZJLX\": \"111\", \"_index\": \"\", \"OLD_ID\": \"51102851102817070020150615102373\", \"OLD_PC_ID\": \"51102851102817070020150615102368\", \"XT_ZHXGRID\": \"511028196210010018\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511028000000\", \"_id\": \"160FC1A513644326ADAEA827C2B767BC\", \"RY_ID\": \"7DAE479F6A874E279FDD5CB3DC1B15AE\", \"GXPCSDM\": \"511028170000\"}]}","OLD_DZ_ID":"511028080000201208201709036166","XT_LRRXM":"叶顶柏","XT_LRRBMID":"511028170700","XT_LRRID":"511028196210010018","BCZT":"1","GXZRQDM":"511028170700","XT_ZHXGRBMID":"511028170700","XT_LRIP":"10.68.112.103","XT_ZXBZ":"0","XT_LRSJ":"2015-06-15T15:45:32.000+0800","XT_ZHXGRID":"511028196210010018","ZBY":"29.33539","ZBX":"105.29132","_type":"xlpc_pcxx","PCDW":"511028170700","XT_ZHXGRXM":"叶顶柏","XT_CJSJ":"2015-06-15T15:45:32.000+0800","PCDZ":"四川省内江市隆昌县隆泸大道","XT_LRRBM":"隆昌县公安局交警大队巡逻三中队","PCSJ":"2015-06-15T15:45:00.000+0800","JN_xlpc_bpcwpxx":"{\"count\": 1, \"data\": [{\"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"OLD_PC_ID\": \"51102851102817070020150615102368\", \"PC_ID\": \"8D5ABD513F104C8388C5FCF7AB43667F\", \"XT_LRRXM\": \"叶顶柏\", \"XT_LRRBMID\": \"511028170700\", \"XT_LRRID\": \"511028196210010018\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170700\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.103\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-15T15:48:01.000+0800\", \"CLJGMC\": \"现场放行\", \"CYR_BPCRYID\": \"51102851102817070020150615102373\", \"_type\": \"xlpc_bpcwpxx\", \"GXFJDM\": \"511028000000\", \"XT_ZHXGRXM\": \"叶顶柏\", \"XT_ZHXGRBMID\": \"511028170700\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-15T15:48:01.000+0800\", \"WPMC\": \"被子\", \"OLD_CYR_BPCRYID\": \"51102851102817070020150615102373\", \"XT_ZHXGSJ\": \"2015-06-15T15:48:26.000+0800\", \"GXSJDM\": \"511000000000\", \"WPLBDMMC\": \"其他\", \"ID\": \"2889E2D690C3415E811989989939E6C7\", \"XT_ZHXGIP\": \"10.68.112.103\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102851102817070020150615102382\", \"XT_ZHXGRID\": \"511028196210010018\", \"YJLXMC\": \"公安内移交\", \"WPLBDM\": \"99\", \"YJBMBH\": \"undefined\", \"_id\": \"2889E2D690C3415E811989989939E6C7\", \"GXPCSDM\": \"511028170000\"}]}","ID":"8D5ABD513F104C8388C5FCF7AB43667F","PCYYMC":"在巡逻中发现可疑情况主动盘查","XT_ZHXGSJ":"2015-06-15T15:48:30.000+0800","GXSJDM":"511000000000","PCMJ_ORGCODE":"511028170700","DZ_ID":"511028080000201208201709036166","PCYY":"4","XT_ZHXGIP":"10.68.112.103","BCZTMC":"保存","_index":"test2","OLD_ID":"51102851102817070020150615102368","JN_xlpc_bpcclxx":"{\"count\": 1, \"data\": [{\"SFXGCPMC\": \"是\", \"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"OLD_PC_ID\": \"51102851102817070020150615102368\", \"HPZL\": \"01\", \"PC_ID\": \"8D5ABD513F104C8388C5FCF7AB43667F\", \"CSYS\": \"E\", \"XT_LRRXM\": \"叶顶柏\", \"XT_LRRBMID\": \"511028170700\", \"XT_LRRID\": \"511028196210010018\", \"SFXGCP\": \"1\", \"CSYSMC\": \"红\", \"SFBBFDJH\": \"1\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170700\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.103\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-15T15:47:41.000+0800\", \"CLZLMC\": \"机动车\", \"CLJGMC\": \"现场放行\", \"XT_ZHXGRID\": \"511028196210010018\", \"CLLXMC\": \"重型普通货车\", \"_type\": \"xlpc_bpcclxx\", \"SFBBCJHMC\": \"是\", \"XT_ZHXGRXM\": \"叶顶柏\", \"XT_ZHXGRBMID\": \"511028170700\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻三中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-15T15:47:41.000+0800\", \"FDJH\": \"B1021761\", \"CLLX\": \"H11\", \"HPHM\": \"渝BU0176\", \"XT_ZHXGSJ\": \"2015-06-15T15:48:20.000+0800\", \"GXSJDM\": \"511000000000\", \"ID\": \"03C20C0767F3486A84A6360975F716C1\", \"SFBBCJH\": \"1\", \"XT_ZHXGIP\": \"10.68.112.103\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102851102817070020150615102377\", \"SFBBFDJHMC\": \"是\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511028000000\", \"CLZL\": \"1\", \"CJH\": \"LGAX5D651B3042718\", \"_id\": \"03C20C0767F3486A84A6360975F716C1\", \"HPZLMC\": \"大型汽车号牌\", \"GXPCSDM\": \"511028170000\"}]}","PCMJ":"叶顶柏","DZ_XZDZ":"四川省内江市隆昌县隆泸大道","GXFJDM":"511028000000","PCMJ_ID":"511028196210010018","_id":"8D5ABD513F104C8388C5FCF7AB43667F","GXPCSDM":"511028170000"},{"XT_ZHXGRBM":"隆昌县公安局交警大队巡逻四中队","JN_xlpc_bpcryxx":"{\"count\": 1, \"data\": [{\"BPCR_XZHDZID\": \"8E4570F424C74502954C33BB78768BCB\", \"BPCR_HJDZID\": \"511523\", \"BPCR_XXZHZ\": \"四川省内江市隆昌县响石镇三块碑巷16号2栋2单元3楼1号\", \"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"BPCR_ZJLYDMMC\": \"1\", \"PC_ID\": \"0B39B969C82040B79DD86F3E69313B08\", \"XT_ZHXGSJ\": \"2015-06-08T11:14:03.000+0800\", \"BPCR_ZJLXMC\": \"机动车驾驶证\", \"XT_LRRXM\": \"曾应林\", \"BPCR_MZMC\": \"汉族\", \"XT_LRRBMID\": \"511028170800\", \"BPCR_ZJHM\": \"511523198503250669\", \"XT_LRRID\": \"511028196309144016\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170800\", \"YJLX\": \"1\", \"BPCR_XZHZ\": \"四川省内江市隆昌县响石镇三块碑巷16号2栋2单元3楼1号\", \"XT_ZXBZ\": \"0\", \"BPCR_HJDZXZ\": \"四川省江安县大井镇铜锣村新龙咀组２１号\", \"CLJGMC\": \"现场放行\", \"BPCR_XBMC\": \"女\", \"OLD_BPCR_XZHDZID\": \"511028450000201411171457330082\", \"OLD_RY_ID\": \"201205021830095644\", \"XT_LRIP\": \"10.68.112.170\", \"_type\": \"xlpc_bpcryxx\", \"BPCR_MZ\": \"01\", \"XT_ZHXGRXM\": \"曾应林\", \"XT_ZHXGRBMID\": \"511028170800\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-08T11:11:55.000+0800\", \"BPCR_ZJLYDM\": \"1\", \"BPCR_XB\": \"2\", \"XT_LRSJ\": \"2015-06-08T11:11:55.000+0800\", \"BPCR_CSRQ\": \"1985-03-25T00:00:00.000+0800\", \"GXSJDM\": \"511000000000\", \"ID\": \"52B798CDD5C84AD78E98C916702CE4DD\", \"BPCR_XM\": \"朱华\", \"XT_ZHXGIP\": \"10.68.112.170\", \"BCZTMC\": \"保存\", \"BPCR_ZJLX\": \"335\", \"_index\": \"\", \"OLD_ID\": \"51102851102817080020150608098453\", \"OLD_PC_ID\": \"51102851102817080020150608098450\", \"XT_ZHXGRID\": \"511028196309144016\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511028000000\", \"_id\": \"52B798CDD5C84AD78E98C916702CE4DD\", \"RY_ID\": \"02E0A0C5B187430DA4282AB3DE196FBE\", \"GXPCSDM\": \"511028170000\"}]}","OLD_DZ_ID":"511028080000201208201604484940","XT_LRRXM":"曾应林","XT_LRRBMID":"511028170800","XT_LRRID":"511028196309144016","BCZT":"1","GXZRQDM":"511028170800","XT_ZHXGRBMID":"511028170800","XT_LRIP":"10.68.112.170","XT_ZXBZ":"0","XT_LRSJ":"2015-06-08T11:11:01.000+0800","XT_ZHXGRID":"511028196309144016","ZBY":"29.31751","ZBX":"105.27449","_type":"xlpc_pcxx","PCDW":"511028170800","XT_ZHXGRXM":"曾应林","XT_CJSJ":"2015-06-08T11:11:01.000+0800","PCDZ":"四川省内江市隆昌县山川镇红光村","XT_LRRBM":"隆昌县公安局交警大队巡逻四中队","PCSJ":"2015-06-08T11:09:00.000+0800","JN_xlpc_bpcwpxx":"{\"count\": 1, \"data\": [{\"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"OLD_PC_ID\": \"51102851102817080020150608098450\", \"PC_ID\": \"0B39B969C82040B79DD86F3E69313B08\", \"XT_LRRXM\": \"曾应林\", \"XT_LRRBMID\": \"511028170800\", \"XT_LRRID\": \"511028196309144016\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170800\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.170\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-08T11:13:51.000+0800\", \"CLJGMC\": \"现场放行\", \"CYR_BPCRYID\": \"51102851102817080020150608098453\", \"_type\": \"xlpc_bpcwpxx\", \"GXFJDM\": \"511028000000\", \"XT_ZHXGRXM\": \"曾应林\", \"XT_ZHXGRBMID\": \"511028170800\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-08T11:13:51.000+0800\", \"WPMC\": \"皮包\", \"OLD_CYR_BPCRYID\": \"51102851102817080020150608098453\", \"XT_ZHXGSJ\": \"2015-06-08T11:14:33.000+0800\", \"GXSJDM\": \"511000000000\", \"WPLBDMMC\": \"其他\", \"ID\": \"C490ABB3B34D43F98FF102C0A7497130\", \"XT_ZHXGIP\": \"10.68.112.170\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102851102817080020150608098461\", \"XT_ZHXGRID\": \"511028196309144016\", \"YJLXMC\": \"公安内移交\", \"WPLBDM\": \"99\", \"YJBMBH\": \"undefined\", \"_id\": \"C490ABB3B34D43F98FF102C0A7497130\", \"GXPCSDM\": \"511028170000\"}]}","ID":"0B39B969C82040B79DD86F3E69313B08","PCYYMC":"在巡逻中发现可疑情况主动盘查","XT_ZHXGSJ":"2015-06-09T10:47:14.000+0800","GXSJDM":"511000000000","PCMJ_ORGCODE":"511028170800","DZ_ID":"511028080000201208201604484940","PCYY":"4","XT_ZHXGIP":"10.68.112.170","BCZTMC":"保存","_index":"test2","OLD_ID":"51102851102817080020150608098450","JN_xlpc_bpcclxx":"{\"count\": 1, \"data\": [{\"SFXGCPMC\": \"是\", \"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"OLD_PC_ID\": \"51102851102817080020150608098450\", \"HPZL\": \"02\", \"PC_ID\": \"0B39B969C82040B79DD86F3E69313B08\", \"CSYS\": \"C\", \"XT_LRRXM\": \"曾应林\", \"XT_LRRBMID\": \"511028170800\", \"XT_LRRID\": \"511028196309144016\", \"SFXGCP\": \"1\", \"CSYSMC\": \"黄\", \"SFBBFDJH\": \"1\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170800\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.170\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-08T11:13:21.000+0800\", \"CLZLMC\": \"机动车\", \"CLJGMC\": \"现场放行\", \"XT_ZHXGRID\": \"511028196309144016\", \"CLLXMC\": \"轿车\", \"_type\": \"xlpc_bpcclxx\", \"SFBBCJHMC\": \"是\", \"XT_ZHXGRXM\": \"曾应林\", \"XT_ZHXGRBMID\": \"511028170800\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-08T11:13:21.000+0800\", \"FDJH\": \"076021\", \"CLLX\": \"K33\", \"HPHM\": \"川A3SH95\", \"XT_ZHXGSJ\": \"2015-06-08T11:14:21.000+0800\", \"GXSJDM\": \"511000000000\", \"ID\": \"A210ECC3E71B47978A26C2A5809F19C8\", \"SFBBCJH\": \"1\", \"XT_ZHXGIP\": \"10.68.112.170\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102851102817080020150608098456\", \"SFBBFDJHMC\": \"是\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511028000000\", \"CLZL\": \"1\", \"CJH\": \"LSVNX2189E2047053\", \"_id\": \"A210ECC3E71B47978A26C2A5809F19C8\", \"HPZLMC\": \"小型汽车号牌\", \"GXPCSDM\": \"511028170000\"}]}","PCMJ":"曾应林","DZ_XZDZ":"四川省内江市隆昌县山川镇红光村","GXFJDM":"511028000000","PCMJ_ID":"511028196309144016","_id":"0B39B969C82040B79DD86F3E69313B08","GXPCSDM":"511028170000"},{"XT_ZHXGRBM":"隆昌县公安局交警大队巡逻四中队","JN_xlpc_bpcryxx":"{\"count\": 1, \"data\": [{\"BPCR_HJDZXZ\": \"四川省富顺县童寺镇凰凤村3组47号\", \"BPCR_HJDZID\": \"510322\", \"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"BPCR_LXDH\": \"13678221999\", \"PC_ID\": \"68D65930D70D4521932165A97CF790F0\", \"XT_ZHXGSJ\": \"2015-06-09T12:01:14.000+0800\", \"BPCR_ZJLXMC\": \"居民身份证\", \"BPCR_XZHDZID\": \"null\", \"XT_LRRXM\": \"曾应林\", \"BPCR_MZMC\": \"汉族\", \"XT_LRRBMID\": \"511028170800\", \"BPCR_ZJHM\": \"510322197102287310\", \"XT_LRRID\": \"511028196309144016\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170800\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.170\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-09T12:00:11.000+0800\", \"CLJGMC\": \"现场放行\", \"BPCR_XBMC\": \"男\", \"OLD_BPCR_XZHDZID\": \"null\", \"OLD_RY_ID\": \"510322008000201205041505342412\", \"_type\": \"xlpc_bpcryxx\", \"BPCR_MZ\": \"01\", \"XT_ZHXGRXM\": \"曾应林\", \"XT_ZHXGRBMID\": \"511028170800\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-09T12:00:11.000+0800\", \"BPCR_ZJLYDMMC\": \"1\", \"BPCR_XB\": \"1\", \"BPCR_CSRQ\": \"1971-02-28T00:00:00.000+0800\", \"GXSJDM\": \"511000000000\", \"BPCR_ZJLYDM\": \"1\", \"ID\": \"471CEE098032426EBDB395E9CE932C2A\", \"BPCR_XM\": \"李平\", \"XT_ZHXGIP\": \"10.68.112.170\", \"BCZTMC\": \"保存\", \"BPCR_ZJLX\": \"111\", \"_index\": \"\", \"OLD_ID\": \"51102851102817080020150609099003\", \"OLD_PC_ID\": \"51102851102817080020150609099002\", \"XT_ZHXGRID\": \"511028196309144016\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511028000000\", \"_id\": \"471CEE098032426EBDB395E9CE932C2A\", \"RY_ID\": \"499A3AC4339542DA869A6D91BCB3BE4B\", \"GXPCSDM\": \"511028170000\"}]}","OLD_DZ_ID":"511028080000201208201604484940","XT_LRRXM":"曾应林","XT_LRRBMID":"511028170800","XT_LRRID":"511028196309144016","BCZT":"1","GXZRQDM":"511028170800","XT_ZHXGRBMID":"511028170800","XT_LRIP":"10.68.112.170","XT_ZXBZ":"0","XT_LRSJ":"2015-06-09T11:59:30.000+0800","XT_ZHXGRID":"511028196309144016","ZBY":"29.31751","ZBX":"105.27449","_type":"xlpc_pcxx","PCDW":"511028170800","XT_ZHXGRXM":"曾应林","XT_CJSJ":"2015-06-09T11:59:30.000+0800","PCDZ":"四川省内江市隆昌县山川镇红光村","XT_LRRBM":"隆昌县公安局交警大队巡逻四中队","PCSJ":"2015-06-09T11:59:00.000+0800","JN_xlpc_bpcwpxx":"{\"count\": 1, \"data\": [{\"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"OLD_PC_ID\": \"51102851102817080020150609099002\", \"PC_ID\": \"68D65930D70D4521932165A97CF790F0\", \"XT_LRRXM\": \"曾应林\", \"XT_LRRBMID\": \"511028170800\", \"XT_LRRID\": \"511028196309144016\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170800\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.170\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-09T12:01:07.000+0800\", \"CLJGMC\": \"现场放行\", \"CYR_BPCRYID\": \"51102851102817080020150609099003\", \"_type\": \"xlpc_bpcwpxx\", \"GXFJDM\": \"511028000000\", \"XT_ZHXGRXM\": \"曾应林\", \"XT_ZHXGRBMID\": \"511028170800\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-09T12:01:07.000+0800\", \"WPMC\": \"皮包\", \"OLD_CYR_BPCRYID\": \"51102851102817080020150609099003\", \"XT_ZHXGSJ\": \"2015-06-09T12:01:29.000+0800\", \"GXSJDM\": \"511000000000\", \"WPLBDMMC\": \"其他\", \"ID\": \"3B231BD0103B4E468A5D95A52FF608C6\", \"XT_ZHXGIP\": \"10.68.112.170\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102851102817080020150609099005\", \"XT_ZHXGRID\": \"511028196309144016\", \"YJLXMC\": \"公安内移交\", \"WPLBDM\": \"99\", \"YJBMBH\": \"undefined\", \"_id\": \"3B231BD0103B4E468A5D95A52FF608C6\", \"GXPCSDM\": \"511028170000\"}]}","ID":"68D65930D70D4521932165A97CF790F0","PCYYMC":"在巡逻中发现可疑情况主动盘查","XT_ZHXGSJ":"2015-06-09T12:01:43.000+0800","GXSJDM":"511000000000","PCMJ_ORGCODE":"511028170800","DZ_ID":"511028080000201208201604484940","PCYY":"4","XT_ZHXGIP":"10.68.112.170","BCZTMC":"保存","_index":"test2","OLD_ID":"51102851102817080020150609099002","JN_xlpc_bpcclxx":"{\"count\": 1, \"data\": [{\"SFXGCPMC\": \"是\", \"XT_ZHXGRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"OLD_PC_ID\": \"51102851102817080020150609099002\", \"HPZL\": \"02\", \"PC_ID\": \"68D65930D70D4521932165A97CF790F0\", \"CSYS\": \"B\", \"XT_LRRXM\": \"曾应林\", \"XT_LRRBMID\": \"511028170800\", \"XT_LRRID\": \"511028196309144016\", \"SFXGCP\": \"1\", \"CSYSMC\": \"灰\", \"SFBBFDJH\": \"1\", \"BCZT\": \"1\", \"GXZRQDM\": \"511028170800\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.112.170\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-09T12:00:42.000+0800\", \"CLZLMC\": \"机动车\", \"CLJGMC\": \"现场放行\", \"XT_ZHXGRID\": \"511028196309144016\", \"_type\": \"xlpc_bpcclxx\", \"SFBBCJHMC\": \"是\", \"XT_ZHXGRXM\": \"曾应林\", \"XT_ZHXGRBMID\": \"511028170800\", \"XT_LRRBM\": \"隆昌县公安局交警大队巡逻四中队\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-06-09T12:00:42.000+0800\", \"FDJH\": \"UCB2121137\", \"HPHM\": \"川C0A356\", \"XT_ZHXGSJ\": \"2015-06-09T12:01:22.000+0800\", \"GXSJDM\": \"511000000000\", \"ID\": \"84EF196D37754A808961E53403C646A4\", \"SFBBCJH\": \"1\", \"XT_ZHXGIP\": \"10.68.112.170\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102851102817080020150609099004\", \"SFBBFDJHMC\": \"是\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511028000000\", \"CLZL\": \"1\", \"CJH\": \"LZWADAGA6C4327073\", \"_id\": \"84EF196D37754A808961E53403C646A4\", \"HPZLMC\": \"小型汽车号牌\", \"GXPCSDM\": \"511028170000\"}]}","PCMJ":"曾应林","DZ_XZDZ":"四川省内江市隆昌县山川镇红光村","GXFJDM":"511028000000","PCMJ_ID":"511028196309144016","_id":"68D65930D70D4521932165A97CF790F0","GXPCSDM":"511028170000"},{"XT_ZHXGRBM":"资中县公安局金李井派出所","JN_xlpc_bpcryxx":"{\"count\": 1, \"data\": [{\"BPCR_XZHDZID\": \"D37349CAD7F742BB81AB3CD57623A583\", \"BPCR_XXZHZ\": \"四川省内江市资中县铁佛镇新街54号附1号\", \"XT_ZHXGRBM\": \"资中县公安局金李井派出所\", \"BPCR_ZJLYDMMC\": \"1\", \"PC_ID\": \"9B0C24BC5BDB40F98B8803C21CBDC389\", \"XT_ZHXGSJ\": \"2015-05-25T15:00:22.000+0800\", \"BPCR_ZJLXMC\": \"居民身份证\", \"XT_LRRXM\": \"巫文毅\", \"BPCR_MZMC\": \"汉族\", \"XT_LRRBMID\": \"511025530000\", \"BPCR_ZJHM\": \"511025197403257776\", \"XT_LRRID\": \"511025196710208953\", \"BCZT\": \"1\", \"GXZRQDM\": \"511025530000\", \"YJLX\": \"1\", \"BPCR_XZHZ\": \"四川省内江市资中县铁佛镇新街54号附1号\", \"XT_ZXBZ\": \"0\", \"BPCR_HJDZXZ\": \"四川省资中县铁佛镇老街3组122号\", \"CLJGMC\": \"现场放行\", \"BPCR_XBMC\": \"男\", \"OLD_BPCR_XZHDZID\": \"511025540000201406120940009312\", \"OLD_RY_ID\": \"201205021732370974\", \"XT_LRIP\": \"10.68.111.245\", \"_type\": \"xlpc_bpcryxx\", \"BPCR_MZ\": \"01\", \"XT_ZHXGRXM\": \"巫文毅\", \"XT_ZHXGRBMID\": \"511025530000\", \"XT_LRRBM\": \"资中县公安局金李井派出所\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-05-25T14:55:31.000+0800\", \"BPCR_LXDH\": \"13408328666\", \"BPCR_XB\": \"1\", \"XT_LRSJ\": \"2015-05-25T14:55:31.000+0800\", \"BPCR_CSRQ\": \"1974-03-25T00:00:00.000+0800\", \"GXSJDM\": \"511000000000\", \"BPCR_ZJLYDM\": \"1\", \"ID\": \"43738D7EF7724B3F975A2C3B08476CAF\", \"BPCR_XM\": \"刘刚\", \"XT_ZHXGIP\": \"10.68.111.245\", \"BCZTMC\": \"保存\", \"BPCR_ZJLX\": \"111\", \"_index\": \"\", \"OLD_ID\": \"51102551102553000020150525091887\", \"OLD_PC_ID\": \"51102551102553000020150525091886\", \"XT_ZHXGRID\": \"511025196710208953\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511025000000\", \"BPCR_TMTZ\": \"中等偏瘦\", \"_id\": \"43738D7EF7724B3F975A2C3B08476CAF\", \"RY_ID\": \"F9E8A8AEC52E40CEA6C74BD6C7D8DBA6\", \"GXPCSDM\": \"511025530000\"}]}","OLD_DZ_ID":"511025120000201208211647300132","XT_LRRXM":"巫文毅","XT_LRRBMID":"511025530000","XT_LRRID":"511025196710208953","XT_ZHXGRXM":"巫文毅","BCZT":"1","GXZRQDM":"511025530000","XT_ZHXGRBMID":"511025530000","XT_LRIP":"10.68.111.245","XT_ZXBZ":"0","XT_LRSJ":"2015-05-25T14:53:41.000+0800","XT_ZHXGRID":"511025196710208953","ZBY":"29.78795","ZBX":"104.67955","_type":"xlpc_pcxx","PCDW":"511025530000","DZBC":"强飞超市门口","XT_CJSJ":"2015-05-25T14:53:41.000+0800","PCDZ":"四川省内江市资中县金李井镇新胜街强飞超市门口","XT_LRRBM":"资中县公安局金李井派出所","PCSJ":"2015-05-25T14:28:00.000+0800","JN_xlpc_bpcwpxx":"{\"count\": 1, \"data\": [{\"XT_ZHXGRBM\": \"资中县公安局金李井派出所\", \"OLD_PC_ID\": \"51102551102553000020150525091886\", \"PC_ID\": \"9B0C24BC5BDB40F98B8803C21CBDC389\", \"XT_LRRXM\": \"巫文毅\", \"DW\": \"1\", \"XT_LRRBMID\": \"511025530000\", \"XT_LRRID\": \"511025196710208953\", \"BCZT\": \"1\", \"GXZRQDM\": \"511025530000\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.111.245\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-05-25T14:59:34.000+0800\", \"CLJGMC\": \"现场放行\", \"CYR_BPCRYID\": \"51102551102553000020150525091887\", \"_type\": \"xlpc_bpcwpxx\", \"GXFJDM\": \"511025000000\", \"XT_ZHXGRXM\": \"巫文毅\", \"XT_ZHXGRBMID\": \"511025530000\", \"XT_LRRBM\": \"资中县公安局金李井派出所\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-05-25T14:59:34.000+0800\", \"WPMC\": \"身份证\", \"OLD_CYR_BPCRYID\": \"51102551102553000020150525091887\", \"XT_ZHXGSJ\": \"2015-05-25T15:00:29.000+0800\", \"GXSJDM\": \"511000000000\", \"WPLBDMMC\": \"其他\", \"ID\": \"4124A04D6DBE49548D5DA5DED8DCE588\", \"XT_ZHXGIP\": \"10.68.111.245\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102551102553000020150525091891\", \"XT_ZHXGRID\": \"511025196710208953\", \"YJLXMC\": \"公安内移交\", \"WPLBDM\": \"99\", \"YJBMBH\": \"undefined\", \"SL\": 1, \"_id\": \"4124A04D6DBE49548D5DA5DED8DCE588\", \"GXPCSDM\": \"511025530000\"}]}","ID":"9B0C24BC5BDB40F98B8803C21CBDC389","PCYYMC":"在巡逻中发现可疑情况主动盘查","XT_ZHXGSJ":"2015-05-26T11:51:02.000+0800","GXSJDM":"511000000000","PCMJ_ORGCODE":"511025530000","DZ_ID":"511025120000201208211647300132","PCYY":"4","XT_ZHXGIP":"10.68.111.247","BCZTMC":"保存","_index":"test2","OLD_ID":"51102551102553000020150525091886","JN_xlpc_bpcclxx":"{\"count\": 1, \"data\": [{\"SFXGCPMC\": \"是\", \"XT_ZHXGRBM\": \"资中县公安局金李井派出所\", \"OLD_PC_ID\": \"51102551102553000020150525091886\", \"HPZL\": \"02\", \"PC_ID\": \"9B0C24BC5BDB40F98B8803C21CBDC389\", \"OLD_JSRY_BPCRYID\": \"51102551102553000020150525091887\", \"CSYS\": \"J\", \"XT_LRRXM\": \"巫文毅\", \"SFBBCJHMC\": \"是\", \"XT_LRRBMID\": \"511025530000\", \"XT_LRRID\": \"511025196710208953\", \"SFXGCP\": \"1\", \"CSYSMC\": \"黑\", \"SFBBFDJH\": \"1\", \"BCZT\": \"1\", \"GXZRQDM\": \"511025530000\", \"YJLX\": \"1\", \"XT_LRIP\": \"10.68.111.245\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-05-25T14:57:44.000+0800\", \"HPHM\": \"川K8V008\", \"CLJGMC\": \"现场放行\", \"XT_ZHXGRID\": \"511025196710208953\", \"CLLXMC\": \"小型越野客车\", \"_type\": \"xlpc_bpcclxx\", \"JSRY_BPCRYID\": \"51102551102553000020150525091887\", \"XT_ZHXGRXM\": \"巫文毅\", \"XT_ZHXGRBMID\": \"511025530000\", \"XT_LRRBM\": \"资中县公安局金李井派出所\", \"CLJG\": \"1\", \"XT_CJSJ\": \"2015-05-25T14:57:44.000+0800\", \"FDJH\": \"BA745152\", \"CLLX\": \"K32\", \"CLZLMC\": \"机动车\", \"XT_ZHXGSJ\": \"2015-05-25T15:00:02.000+0800\", \"GXSJDM\": \"511000000000\", \"ID\": \"F5883513F6B54A97ADA489B4ED88929E\", \"SFBBCJH\": \"1\", \"XT_ZHXGIP\": \"10.68.111.245\", \"BCZTMC\": \"保存\", \"_index\": \"\", \"OLD_ID\": \"51102551102553000020150525091888\", \"SFBBFDJHMC\": \"是\", \"YJLXMC\": \"公安内移交\", \"GXFJDM\": \"511025000000\", \"CLZL\": \"1\", \"CJH\": \"LBELMBKC4BY095233\", \"_id\": \"F5883513F6B54A97ADA489B4ED88929E\", \"HPZLMC\": \"小型汽车号牌\", \"GXPCSDM\": \"511025530000\"}]}","PCMJ":"巫文毅","DZ_XZDZ":"四川省内江市资中县金李井镇新胜街","GXFJDM":"511025000000","PCMJ_ID":"511025196710208953","_id":"9B0C24BC5BDB40F98B8803C21CBDC389","GXPCSDM":"511025530000"}]}
