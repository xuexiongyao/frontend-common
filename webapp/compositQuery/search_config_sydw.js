/*配置说明
* 1.不同查询模块均使用相同的index_config.html中的内容,改革文件名即可
* 2.html文件下方引用不同的search_config_模块名称.js
* 3.在search_config_模块名称.js中配置页面查询参数和展示参数
*/
var dictPath = portal +'/common/dict/';
var search_config_arr = ["SYDW_DWJBXXB","SYDW_BZXXB","SYDW_CYRYXXB","SYDW_DWDZB","SYDW_GGYLCSXXB","SYDW_JYXSWFWXXB","SYDW_LDXXB","SYDW_NBDW","SYDW_QCZL","SYDW_RCJCXXB","SYDW_SWSBDW","SYDW_SZQYJYRY","SYDW_WBZLSCS","SYDW_WRJXXB","SYDW_WRJGMRXXB"];
//查询条件配置
var search_config = {
    //查询接口地址
    url : compositQueryPath,
	basePath : basePath,
    export_url : basePath+'/compositQuery/exportExcel2003',

    main_type : 'sydw_dwjbxxb',
	primary_key : 'ID',//主键

    //页面标题名称
    query_title : '实有单位',
    sysType: 'sydw',		//系统类型,用于区别查询模板的来源
	//
	 //关联照片附件信息表
    /*ZPFJ_FJXXB_type: 'ZPFJ_FJXXB',//查询条件中的type
    ZPFJ_FJXXB_title: '照片附件信息表',
    ZPFJ_FJXXB_init : ['BZ'],
    ZPFJ_FJXXB : [
        {field:'BZ',text:'图片说明',input:'textbox',judge_dict: judge11}
    ]*/

SYDW_DWJBXXB_type : 'SYDW_DWJBXXB',
SYDW_DWJBXXB_title : '实有单位-单位基本信息',
SYDW_DWJBXXB_init : ['DWMC','DWFL','GLDJ'],    //默认显示的查询条件
SYDW_DWJBXXB : [
		{field:'CYRS',text:'从业人数',input:'textbox',judge_dict: judge2},
		//{field:'RCJC_NUM',text:'统计_日常检查次数',input:'textbox',judge_dict: judge2},
		//{field:'DWBZ_NUM',text:'统计_单位备注次数',input:'textbox',judge_dict: judge2},
		// {field:'HAVE_PIC',text:'是否有图片',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},
		//{field:'RC_HAVE_PIC',text:'统计_日常检查是否有图片',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},
		//{field:'DWDZ_NUM',text:'统计_单位地址数',input:'textbox',judge_dict: judge2},

        {field:'DWMC',text:'单位名称',input:'textbox',judge_dict: judge5},
        {field:'DWFL',text:'单位分类',input:'combotree',judge_dict: judge3,condition_dict:dictPath+'BD_D_DWFLDM.js',multiple:true},
        {field:'DWSX',text:'单位属性',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_DWSXDM.js',multiple:true},
        {field:'GLDJ',text:'管理等级',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_GLDJDM.js'},
        {field:'DWSC',text:'单位俗称',input:'textbox',judge_dict: judge5},
        {field:'LXRLXDH',text:'联系人联系电话',input:'textbox',judge_dict: judge5},
        {field:'DWXZ',text:'单位性质',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_DWXZDM.js'},
        {field:'ZZJGDM',text:'组织机构代码',input:'textbox',judge_dict: judge5},
        {field:'ZCRQ',text:'注册日期',input:'datebox',judge_dict: judge2},
        {field:'JYFW',text:'经营范围',input:'textbox',judge_dict: judge5},
        {field:'ZCZB',text:'注册资本（万）',input:'textbox',judge_dict: judge5},
        {field:'ZCDZ',text:'注册地址',input:'textbox',judge_dict: judge5},
        //{field:'ZCDZBH',text:'注册地址编号',input:'textbox',judge_dict: judge5},
        {field:'SWDJH',text:'税务登记号',input:'textbox',judge_dict: judge5},
        {field:'FZRQ',text:'发照日期',input:'datebox',judge_dict: judge2},
        {field:'YXQZ',text:'有效期至',input:'databox',judge_dict: judge2},
        {field:'XXSBZH',text:'信息申报账号',input:'textbox',judge_dict: judge5},
        {field:'DWLXDH',text:'单位联系电话',input:'textbox',judge_dict: judge5},
        {field:'YYZZH',text:'营业执照号',input:'textbox',judge_dict: judge5},
        {field:'SFBD',text:'是否标点',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_SFDM.js'},
        {field:'SFYTP',text:'是否有图片',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_SFDM.js'},
		{field:'JKGS_NUM',text:'监控（个）',input:'textbox',judge_dict: judge2},
		//管辖部门
        //{field:'SSPCSDM',text:'所属派出所',input:'textbox_org',judge_dict: judge9,isOrganization:true},
        //{field:'SSZRQDM',text:'所属责任区',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		//与其他单位关系
        //{field:'SJDWID',text:'上级单位ID',input:'textbox',judge_dict: judge5},
		//通用操作轨迹信息
        {field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge5},
        //{field:'XT_LRRID',text:'录入人身份证号',input:'textbox',judge_dict: judge4},
        //{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge5},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
        {field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
        //{field:'XT_CJSJ',text:'采集时间段',input:'datebox',judge_dict: judge2},
        {field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge5},
        {field:'XT_ZHXGRID',text:'最后修改人身份证号',input:'textbox',judge_dict: judge4},
        //{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge5},
        {field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
        //{field:'XT_ZHXGRBMID',text:'最后修改人部门代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
        {field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge5},
        {field:'XT_ZXYY',text:'注销原因',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SYDWZXYY.js'},
        {field:'XT_ZHXGSJ',text:'注销时间段',input:'datebox',judge_dict: judge2},
        {field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},
        {field:'ZXYYBZ',text:'注销原因备注',input:'textbox',judge_dict: judge5},
        
        //关联从业人员信息：TODO：统计
        /*{field:'BARS',text:'保安人数',input:'textbox',judge_dict: judge2},
        {field:'CYRS',text:'从业人数',input:'textbox',judge_dict: judge2},
		//关联单位地址: TODO:统计 地址表数量
        {field:'DWDZS',text:'单位地址数',input:'textbox',judge_dict: judge2},
		//关联日常检查表: TODO: 统计
        {field:'RCJCCS',text:'日常检查次数',input:'textbox',judge_dict: judge2},
		//关联备注消息表
        {field:'BZXXZHXGSJD',text:'备注信息最后修改时间段',input:'datebox',judge_dict: judge5},
        {field:'BZCS',text:'备注次数',input:'textbox',judge_dict: judge2},
		//关联照片附件信息表
        {field:'SFCJTP',text:'是否采集图片',input:'textbox',judge_dict: judge3},
		//关联散装汽油加油人员
        {field:'SZQYJYRYZS',text:'散装汽油加油人员总数',input:'textbox',judge_dict: judge2},  */

		
		//{field:'SSFJDM',text:'所属分局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		//{field:'ZPFMID',text:'照片封面ID',input:'textbox',judge_dict: judge1}, 
		{field:'XXSBMM',text:'信息申报密码',input:'textbox',judge_dict: judge1},   
		//{field:'SJDM',text:'市局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
		//{field:'ZBX',text:'X坐标',input:'textbox',judge_dict: judge1},
		//{field:'ZBY',text:'Y坐标',input:'textbox',judge_dict: judge1},   
		//{field:'ID',text:'主键ID',input:'textbox',judge_dict: judge1},   
		{field:'DWBH',text:'单位编号',input:'textbox',judge_dict: judge1},   
		//{field:'DWMCJP',text:'单位名称简拼',input:'textbox',judge_dict: judge1},   
		//{field:'DWSCJP',text:'单位俗称简拼',input:'textbox',judge_dict: judge1},   
		//{field:'DWDZSC',text:'单位地址俗称',input
	// :'textbox',judge_dict: judge1},
		{field:'LXRZJLX',text:'联系人证件类型',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'KX_D_CYZJDM.js'},   
		{field:'LXRZJHM',text:'联系人证件号码',input:'textbox',judge_dict: judge1},   
		{field:'LXRGMSFHM',text:'联系人公民身份号码',input:'textbox',judge_dict: judge1},   
		{field:'LXRXM',text:'联系人姓名',input:'textbox',judge_dict: judge1},   
		{field:'LXRGJDM',text:'联系人国籍代码',input:'combobox',judge_dict: judge1,condition_dict:dictPath + 'GB_D_GJHDQDM.js'},   
		{field:'SFYSPJK',text:'是否有视频监控',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},   
		{field:'ZAFZR',text:'治安负责人',input:'textbox',judge_dict: judge1},   
		
		 
		   
		
		//{field:'DZ_DWDZDM',text:'地址-单位地址代码',input:'textbox',judge_dict: judge1},   
		//{field:'DZ_DWDZXZ',text:'地址-单位地址详址',input:'textbox',judge_dict: judge1},
		{field:'SJLYBS',text:'数据来源标识',input:'textbox',judge_dict: judge3}  
],
SYDW_BZXXB_type : 'SYDW_BZXXB',
SYDW_BZXXB_title : '实有单位-备注信息',
SYDW_BZXXB_init : [],    //默认显示的查询条件
SYDW_BZXXB : [
	///   
	//
	{field:'ZXYYBZ',text:'注销备注',input:'textbox',judge_dict: judge1},   
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1},   
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1}   
],

SYDW_CYRYXXB_type : 'SYDW_CYRYXXB',
SYDW_CYRYXXB_title : '实有单位-从业人员',
SYDW_CYRYXXB_init : [],    //默认显示的查询条件
SYDW_CYRYXXB : [
	//   
	{field:'DWMC',text:'单位名称',input:'textbox',judge_dict: judge1},   
	{field:'DWFL',text:'单位分类',input:'combotree',judge_dict: judge3,condition_dict:dictPath+'BD_D_DWFLDM.js',multiple:true},   
	{field:'DWDZMC',text:'单位地址名称',input:'textbox',judge_dict: judge1},   
	{field:'BGRQ',text:'变更日期',input:'textbox',judge_dict: judge2},   
	{field:'ZXYYBZ',text:'注销备注',input:'textbox',judge_dict: judge1},   
	//{field:'CYGJ_QRBZ',text:'从业轨迹确认标识',input:'textbox',judge_dict: judge3},   
	{field:'KYXW',text:'可疑行为类型',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'FK_D_KYXW.js'},   
	{field:'KYJX',text:'可疑迹象类型',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'FK_D_KYJX.js'},   
	{field:'MZDM',text:'民族',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'GB_D_MZDM.js'},   
	{field:'SFZTRY',text:'是否为在逃人员 ',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},   
	{field:'SFCLSYRK',text:'是否采录为实有人口 ',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},   
	//{field:'JZD_ZBX',text:'居住地_坐标X',input:'textbox',judge_dict: judge1},    
	//{field:'JZD_ZBY',text:'居住地_坐标Y',input:'textbox',judge_dict: judge1},   
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	//{field:'RYID',text:'人员ID',input:'textbox',judge_dict: judge1},   
	{field:'ZJLXDM',text:'证件类型',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'KX_D_CYZJDM.js'},   
	{field:'ZJHM',text:'证件号码',input:'textbox',judge_dict: judge1},   
	{field:'XM',text:'姓名',input:'textbox',judge_dict: judge1},   
	{field:'CSRQ',text:'出生日期',input:'datebox',judge_dict: judge2,formatter:'date10'},
	{field:'XB',text:'性别',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'GB_D_XBDM.js'},   
	{field:'GJDM',text:'国籍',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'GB_D_GJHDQDM.js'},   
	{field:'JGDM',text:'籍贯',input:'textbox',judge_dict: judge1},   
	{field:'LXDH',text:'联系电话',input:'textbox',judge_dict: judge1},   
	{field:'JZD_XZQHDM',text:'居住地_行政区划',input:'combobox',judge_dict: judge6,condition_dict:dictPath+'GB_D_XZQHDMLIST.js',multiple:true},
	{field:'JZD_DZXZ',text:'居住地址',input:'textbox',judge_dict: judge1},   
	{field:'SZBM',text:'所在部门',input:'textbox',judge_dict: judge1},
	{field:'SZGW',text:'所在岗位',input:'textbox',judge_dict: judge1},   
	{field:'ZWLBDM',text:'职务类别',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'BD_D_ZWLBDM.js'},   
	{field:'BGZKSRQ',text:'开始日期',input:'datebox',judge_dict: judge2},
	{field:'BGZJSRQ',text:'结束日期',input:'datebox',judge_dict: judge2},
	{field:'SJLY',text:'数据来源',input:'textbox',judge_dict: judge3},   
	{field:'RYBH',text:'人员编号',input:'textbox',judge_dict: judge1},   
	{field:'DZ_DWDZXZ',text:'单位地址',input:'textbox',judge_dict: judge1},   
	{field:'CJRLBDM',text:'采集人类别',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_CJRLBDM.js'},   
	{field:'CJYJDM',text:'采集依据',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_CJYJDM.js'},   
	 
	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1},   
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZ.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_CYRYZXYY.js'},
],

SYDW_DWDZB_type : 'SYDW_DWDZB',
SYDW_DWDZB_title : '实有单位-单位地址',
SYDW_DWDZB_init : [],    //默认显示的查询条件
SYDW_DWDZB : [
	   
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	//{field:'DWDZ_ZBY',text:'单位地址_坐标Y',input:'textbox',judge_dict: judge1},   
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},   
	{field:'BZ',text:'备注',input:'textbox',judge_dict: judge1},   
	{field:'ZXYYBZ',text:'注销备注',input:'textbox',judge_dict: judge1},   
	{field:'DWDZ_GXDW',text:'管辖单位',input:'textbox_org',judge_dict: judge9,isOrganization:true,lishu:{sj:'SJDM',fxj:'FXJDM',pcs:'PCSID',zrq:'ZRQID'},dataFilter:'00,10,21,32,50'},
//	{field:'PCSID',text:'辖区派出所',input:'textbox_org',judge_dict: judge9,isOrganization:true},
//	{field:'SQID',text:'所在社区',input:'textbox_org',judge_dict: judge9,isOrganization:true},
//	{field:'ZRQID',text:'所在责任区',input:'textbox_org',judge_dict: judge9,isOrganization:true},
//	{field:'SJDM',text:'市局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
//	{field:'FXJDM',text:'分县局代码',input:'textbox_org',judge_dict: judge9,isOrganization:true},
	{field:'DWDZ_XZQHDM',text:'行政区划',input:'combobox',judge_dict: judge6,condition_dict:dictPath+'GB_D_XZQHDMLIST.js',multiple:true},
	{field:'DWDZ_DZXZ',text:'地址名称',input:'textbox',judge_dict: judge1},   
	//{field:'DWDZ_ZBX',text:'单位地址_坐标X',input:'textbox',judge_dict: judge1},   
	{field:'DWMC',text:'单位名称',input:'textbox',judge_dict: judge1}   
],

SYDW_GGYLCSXXB_type : 'SYDW_GGYLCSXXB',
SYDW_GGYLCSXXB_title : '实有单位-公共娱乐场所信息',
SYDW_GGYLCSXXB_init : [],    //默认显示的查询条件
SYDW_GGYLCSXXB : [
	{field:'CSBH',text:'场所编号',input:'textbox',judge_dict: judge1},   
	{field:'JYMJ_NUM',text:'经营面积',input:'textbox',judge_dict: judge2},
	{field:'FZRQ',text:'文化许可证发证日期',input:'datebox',judge_dict: judge2},
	{field:'BJGS_NUM',text:'包间个数',input:'textbox',judge_dict: judge2},
	{field:'HDRS_NUM',text:'核定人数',input:'textbox',judge_dict: judge2},
	{field:'HLWFW',text:'互联网服务',input:'combobox',judge_dict: judge1,condition_dict:dictPath + 'BD_D_SFDM.js'},   
	{field:'KYRQ',text:'开业日期',input:'datebox',judge_dict: judge2},
	{field:'WHXKZ',text:'文化许可证',input:'textbox',judge_dict: judge1},   
	{field:'XFSHS',text:'消防审核书',input:'textbox',judge_dict: judge1},   
	{field:'SFAZXT',text:'是否安装系统',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},   
	{field:'MJSFZHM',text:'民警身份证',input:'textbox',judge_dict: judge4},
	{field:'MJXM',text:'民警姓名',input:'textbox',judge_dict: judge1},   
	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1},   
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},   
	{field:'SSPCSJGDM',text:'所属派出所',input:'textbox_org',judge_dict: judge9,isOrganization:true},
	//{field:'XFYJSHSFZRQ',text:'所属派出所机构代码',input:'datebox',judge_dict: judge2},
	{field:'ZXYYBZ',text:'注销备注',input:'textbox',judge_dict: judge1}   
],

SYDW_JYXSWFWXXB_type : 'SYDW_JYXSWFWXXB',
SYDW_JYXSWFWXXB_title : '实有单位-经营性上网服务',
SYDW_JYXSWFWXXB_init : [],    //默认显示的查询条件
SYDW_JYXSWFWXXB : [
	   
	{field:'WBBM',text:'网吧编码',input:'textbox',judge_dict: judge1},   
	{field:'SSPCSJGDM',text:'所属派出所',input:'textbox_org',judge_dict: judge9,isOrganization:true},
	
	{field:'ZXYYBZ',text:'注销备注',input:'textbox',judge_dict: judge1},   
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox',judge_dict: judge12,isOrganization:true},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},  
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1}, 
	{field:'FWQSL_NUM',text:'服务器数量',input:'textbox',judge_dict: judge2},
	{field:'DNTS_NUM',text:'电脑台数',input:'textbox',judge_dict: judge2},
	{field:'JYMJ_NUM',text:'经营面积',input:'textbox',judge_dict: judge2},
	{field:'JRIPDZ',text:'接入IP地址',input:'textbox',judge_dict: judge1},   
	{field:'WG_ZJLX',text:'网管证件类型',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'KX_D_CYZJDM.js'},   
	{field:'WG_ZJHM',text:'网管证件号码',input:'combobox',judge_dict: judge1},   
	{field:'WG_XM',text:'网管姓名',input:'textbox',judge_dict: judge1},   
	{field:'WG_GJDM',text:'网管国籍',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'GB_D_GJHDQDM.js'},   
	{field:'WG_LXDH',text:'网管联系电话',input:'textbox',judge_dict: judge1},   
	{field:'SFAZXT',text:'是否安装系统',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},   
	{field:'MJSFZ',text:'民警身份证',input:'textbox',judge_dict: judge4},
	{field:'MJXM',text:'民警姓名',input:'textbox',judge_dict: judge1},   
	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1},   
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4}
],

SYDW_LDXXB_type : 'SYDW_LDXXB',
SYDW_LDXXB_title : '实有单位-旅店信息',
SYDW_LDXXB_init : [],    //默认显示的查询条件
SYDW_LDXXB : [
	   
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	{field:'LGBM',text:'旅馆编码',input:'textbox',judge_dict: judge1},   
	{field:'SSPCS',text:'所属派出所',input:'textbox_org',judge_dict: judge1,isOrganization:true},
	{field:'SSPCSDM',text:'所属派出编号',input:'textbox',judge_dict: judge9,isOrganization:true},   
	{field:'SFAZXT',text:'是否安装系统',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},    
	{field:'ZRMJGMSFHM',text:'民警身份证',input:'textbox',judge_dict: judge1},   
	{field:'ZRMJXM',text:'民警姓名',input:'textbox',judge_dict: judge1},   
	{field:'LGXJDM',text:'旅馆星级',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_LGXJDM.js'},   
	{field:'JYMJ_NUM',text:'经营面积(M²)',input:'textbox',judge_dict: judge2},
	{field:'TZHYXKZBH',text:'特种行业许可证编号',input:'textbox',judge_dict: judge1},   
	{field:'TZHYXKZFZRQ',text:'发证日期',input:'datebox',judge_dict: judge2},
	{field:'KFDS_NUM',text:'客房幢数',input:'textbox',judge_dict: judge2},
	{field:'LCS_NUM',text:'楼层数(层)',input:'textbox',judge_dict: judge2},
	{field:'KFJS_NUM',text:'客房间数(个)',input:'textbox',judge_dict: judge2},
	{field:'CWS_NUM',text:'床位数',input:'textbox',judge_dict: judge2},
	 
	   
	
	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1}, 
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},   
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1}   
],

SYDW_NBDW_type : 'SYDW_NBDW',
SYDW_NBDW_title : '实有单位-内保单位',
SYDW_NBDW_init : [],    //默认显示的查询条件
SYDW_NBDW : [
	   
	
	{field:'ZXYYBZ',text:'注销备注',input:'textbox',judge_dict: judge1},   
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	{field:'MJXM',text:'民警姓名',input:'textbox',judge_dict: judge1},   
	{field:'MJSFZ',text:'民警身份证',input:'textbox',judge_dict: judge4},
	{field:'NBJB',text:'内保级别',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'BD_D_NBJBDM.js'},   
	{field:'ZRGAJG',text:'责任公安机关',input:'textbox_org',judge_dict: judge9,isOrganization:true},
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1}, 
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},  
	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1}   
],

SYDW_QCZL_type : 'SYDW_QCZL',
SYDW_QCZL_title : '实有单位-汽车租赁',
SYDW_QCZL_init : [],    //默认显示的查询条件
SYDW_QCZL : [
	   
	
	{field:'ZXYYBZ',text:'注销备注',input:'textbox',judge_dict: judge1},   
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	{field:'HPZL',text:'号牌种类',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'KX_D_JDCHPZLDM.js'},   
	{field:'CPH',text:'车牌号',input:'textbox',judge_dict: judge1},   
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1}, 
	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1}   
],

SYDW_RCJCXXB_type : 'SYDW_RCJCXXB',
SYDW_RCJCXXB_title : '实有单位-日常检查',
SYDW_RCJCXXB_init : [],    //默认显示的查询条件
SYDW_RCJCXXB : [

	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1},
	{field:'JCSJ',text:'检查日期',input:'datebox',judge_dict: judge2},
	//{field:'RCJCSFCJTP',text:'是否采集图片',input:'textbox',judge_dict: judge3}
	   
	{field:'DWDZ',text:'单位地址',input:'textbox',judge_dict: judge1},   
	{field:'DWMC',text:'单位名称',input:'textbox',judge_dict: judge1},   
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	{field:'JYBH',text:'警员编号',input:'textbox',judge_dict: judge1},   
	{field:'YWYCQK',text:'有无异常情况',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},   
	{field:'JCMJ',text:'检查民警',input:'textbox',judge_dict: judge1},   
	 
	   
	
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},  
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},  
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1}   
],

SYDW_SWSBDW_type : 'SYDW_SWSBDW',
SYDW_SWSBDW_title : '实有单位-涉危涉爆单位',
SYDW_SWSBDW_init : [],    //默认显示的查询条件
SYDW_SWSBDW : [
	   
	
	{field:'ZXYYBZ',text:'注销备注',input:'textbox',judge_dict: judge1},   
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	{field:'ZRGAJG',text:'责任公安机关',input:'textbox_org',judge_dict: judge9,isOrganization:true},
	{field:'MJXM',text:'民警姓名',input:'textbox',judge_dict: judge1},   
	{field:'MJSFZ',text:'民警身份证',input:'textbox',judge_dict: judge4},
	{field:'CCWPJSL_NUM',text:'存储物品及数量',input:'textbox',judge_dict: judge2},
	{field:'CCSB',text:'存储设备',input:'textbox',judge_dict: judge1},   
	{field:'BAXZ',text:'备案性质',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},  
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},  
	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1}   
],

SYDW_SZQYJYRY_type : 'SYDW_SZQYJYRY',
SYDW_SZQYJYRY_title : '实有单位-散装汽油加油人员',
SYDW_SZQYJYRY_init : [],    //默认显示的查询条件
SYDW_SZQYJYRY : [
	   
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},  
	{field:'SFZH',text:'身份证号',input:'textbox',judge_dict: judge4},
	{field:'XM',text:'姓名',input:'textbox',judge_dict: judge1},   
	{field:'XB',text:'性别',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'GB_D_XBDM.js'},   
	{field:'MZ',text:'民族',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'GB_D_MZDM.js'},   
	{field:'XJD',text:'现居地',input:'textbox',judge_dict: judge1},   
	{field:'CSRQ',text:'出生日期',input:'datebox',judge_dict: judge2,formatter:'date10'},
	{field:'HJD',text:'户籍地',input:'textbox',judge_dict: judge1},   
	{field:'LXFS',text:'联系方式',input:'textbox',judge_dict: judge1},   
	{field:'GMSL_NUM',text:'购买数量',input:'textbox',judge_dict: judge2},
	{field:'GMLX',text:'购买类型',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'DB_D_SZQYGMLX.js'},   
	{field:'GMRQ',text:'购买日期',input:'datebox',judge_dict: judge2},
	{field:'GMYT',text:'购买用途',input:'textbox',judge_dict: judge1},   
	{field:'GMDW',text:'购买单位',input:'textbox',judge_dict: judge1},   
	{field:'GM_RQ',text:'购买容器',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'BD_D_SZQYGYRQ.js'},   
	{field:'JTGJ',text:'交通工具',input:'combobox',judge_dict: judge4,condition_dict:dictPath + 'BD_D_SZQYJTGJ.js'},   
	{field:'PZH',text:'牌照号',input:'textbox',judge_dict: judge1},   
	{field:'SFWXJDQSF',text:'是否为新疆地区身份',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'DB_D_SFJZRYSF.js'},   
	{field:'JYZMC',text:'加油站名称',input:'textbox',judge_dict: judge1},   
	{field:'JYZBH',text:'加油站编号',input:'textbox',judge_dict: judge1},   
	{field:'JYZDZ',text:'加油站地址',input:'textbox',judge_dict: judge1},   
	{field:'JYZFZR',text:'加油站负责人',input:'textbox',judge_dict: judge1},   
	{field:'JYZLXDH',text:'加油站联系电话',input:'textbox',judge_dict: judge1},   
	{field:'JYZSSGXDW',text:'加油站所属管辖单位',input:'textbox',judge_dict: judge9,isOrganization:true},
	{field:'GYXXZT',text:'购油信息状态',input:'textbox',judge_dict: judge1},   
	{field:'CYRYXM',text:'从业人员姓名',input:'textbox',judge_dict: judge1},   
	{field:'CYRYSFZH',text:'从业人员身份证号',input:'textbox',judge_dict: judge4},
	{field:'CYRYDH',text:'从业人员电话',input:'textbox',judge_dict: judge1},   
	{field:'JZRKSJ',text:'警综入库时间',input:'datebox',judge_dict: judge2},
	//{field:'DWID',text:'单位ID',input:'textbox',judge_dict: judge1},   
	//{field:'RYID',text:'人员ID',input:'textbox',judge_dict: judge1},   
	//{field:'SYRKID',text:'实有人口ID',input:'textbox',judge_dict: judge1},   
	{field:'YTJBH',text:'一体机编号',input:'textbox',judge_dict: judge1},   
	//{field:'XCZPID',text:'现场照片id',input:'textbox',judge_dict: judge1},   
	//{field:'XCZP',text:'现场照片',input:'textbox',judge_dict: judge1},   
	//{field:'JYZSSGXDWBM',text:'加油场所所属管辖单位id',input:'textbox',judge_dict: judge1},   
	{field:'BZX',text:'备注信息',input:'textbox',judge_dict: judge1},   
	//{field:'CYRYID',text:'从业人员ID',input:'textbox',judge_dict: judge1},   
	//{field:'SFZZPID',text:'身份证照片ID',input:'textbox',judge_dict: judge1},   
	//{field:'SFZZP',text:'身份证照片',input:'textbox',judge_dict: judge1}   
],

SYDW_WBZLSCS_type : 'SYDW_WBZLSCS',
SYDW_WBZLSCS_title : '实有单位-未办证留宿场所',
SYDW_WBZLSCS_init : [],    //默认显示的查询条件
SYDW_WBZLSCS : [
	   
	{field:'SSPCS',text:'所属派出所',input:'textbox_org',judge_dict: judge9,isOrganization:true},
	{field:'SSPCSJGDM',text:'所属派出所机构代码',input:'textbox',judge_dict: judge1},
	
	{field:'ZXYYBZ',text:'注销备注',input:'textbox',judge_dict: judge1},   
	{field:'MJXM',text:'民警姓名',input:'textbox',judge_dict: judge1},   
	{field:'MJSFZ',text:'民警身份证',input:'textbox',judge_dict: judge4},
	{field:'SFAZXT',text:'是否安装系统',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_SFDM.js'},   
	{field:'CWS_NUM',text:'床位数',input:'textbox',judge_dict: judge2},
	{field:'KFJS_NUM',text:'客房间数',input:'textbox',judge_dict: judge2},
	{field:'LCS_NUM',text:'楼层数',input:'textbox',judge_dict: judge2},
	{field:'KFDS_NUM',text:'客房栋数',input:'textbox',judge_dict: judge2},
	{field:'JYMJ_NUM',text:'经营面积',input:'textbox',judge_dict: judge2},
	//{field:'XT_CJSJ',text:'采集时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_LRRID',text:'录入人ID',input:'textbox',judge_dict: judge4},
	  
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
	//{field:'XT_LRIP',text:'录入IP',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	//{field:'XT_ZHXGRID',text:'最后修改人ID',input:'textbox_org',judge_dict: judge4},
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
	//{field:'XT_ZHXGIP',text:'最后修改IP',input:'textbox',judge_dict: judge1},
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath + 'BD_D_ZXBZDM.js'},   
	{field:'XT_ZXYY',text:'注销原因',input:'textbox',judge_dict: judge1},  
	{field:'BZ',text:'备注信息',input:'textbox',judge_dict: judge1}   
],

SYDW_WRJXXB_type : 'SYDW_WRJXXB',
SYDW_WRJXXB_title : '民用无人驾驶航空器信息',
SYDW_WRJXXB_init : [],    //默认显示的查询条件
SYDW_WRJXXB : [
    {field:'WRJLX',text:'类型',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_WRJLXDM.js',multiple:true},          
	{field:'PMXH',text:'品名型号',input:'textbox',judge_dict: judge1},
	{field:'JSBM',text:'机身编码',input:'textbox',judge_dict: judge1},
	{field:'BZ',text:'备注',input:'textbox',judge_dict: judge1},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},  
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}}, 
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},   
	{field:'XT_ZXYYBZ',text:'注销原因',input:'textbox',judge_dict: judge1}
],


SYDW_WRJGMRXXB_type : 'SYDW_WRJGMRXXB',
SYDW_WRJGMRXXB_title : '民用无人驾驶航空器操作人信息',
SYDW_WRJGMRXXB_init : [],    //默认显示的查询条件
SYDW_WRJGMRXXB : [
    {field:'XM',text:'姓名',input:'textbox',judge_dict: judge1},         
	{field:'ZJHM',text:'身份证号',input:'textbox',judge_dict: judge1},
	{field:'LXDH',text:'联系电话',input:'textbox',judge_dict: judge1},
	{field:'EMAIL_QQ',text:'邮箱或者QQ',input:'textbox',judge_dict: judge1},
	{field:'JZD_DZXZ',text:'居住地址',input:'textbox',judge_dict: judge1},
	{field:'BZ',text:'备注',input:'textbox',judge_dict: judge1},
	{field:'XT_LRSJ',text:'录入时间',input:'datebox',judge_dict: judge2},
	{field:'XT_LRRXM',text:'录入人姓名',input:'textbox',judge_dict: judge1},   
	{field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},  
	{field:'XT_ZHXGSJ',text:'最后修改时间',input:'datebox',judge_dict: judge2},
	{field:'XT_ZHXGRXM',text:'最后修改人姓名',input:'textbox',judge_dict: judge1},   
	{field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}}, 
	{field:'XT_ZXBZ',text:'注销标志',input:'combobox',judge_dict: judge3,condition_dict:dictPath+'BD_D_ZXBZDM.js',multiple:true},   
	{field:'XT_ZXYYBZ',text:'注销原因',input:'textbox',judge_dict: judge1}
]

};


//以下为测试数据
var search_result_test = {"count":126448,"msg":"success","type":null,"took":8019,"result":[{"DWSC":"统帅电器","BARS":"0","SSZRQDM":"5110116700002012082402496","DWFLMC":"其它","XT_ZHXGRBM":"内江市公安局东兴区分局椑木派出所","FZRQ":"2012-05-29T00:00:00.000+0800","DWFL":"90000","SSFJDM":"511011000000","XT_ZXBZMC":"未注销","YYZZH":"511011600150619","XT_LRRXM":"胡长富","DWSCJP":"TSDQ","XXSBMM":"111111","SJDM":"511000000000","JN_sydw_dwdzb":"{\"count\": 3, \"data\": [{\"PCSID\": \"511011670000\", \"DWDZ_ZBY\": \"29.50918\", \"PCS\": \"内江市公安局东兴区分局椑木派出所\", \"XT_ZXBZMC\": \"未注销\", \"FXJMC\": \"内江市公安局东兴区分局\", \"XT_LRRXM\": \"黎军\", \"DWDZ_ZBX\": \"105.08879\", \"SJDM\": \"511000000000\", \"XT_LRRBMID\": \"511011670000\", \"XT_LRRID\": \"511021196508183419\", \"DWDZ_DZXZ\": \"四川省内江市东兴区椑木镇兴顺街25号\", \"SECURITYGRADE\": \"1\", \"DWID\": \"4E24858239304503BEB06FA89C4829F0\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2013-12-16T16:04:32.000+0800\", \"SJMC\": \"内江市公安局\", \"DWDZ_DZID\": \"AA4DA574B5FE4A64822F69352DE750C3\", \"_type\": \"sydw_dwdzb\", \"XT_CJSJ\": \"2013-12-16T16:04:32.000+0800\", \"XT_LRRBM\": \"内江市公安局东兴区分局椑木派出所\", \"SQID\": \"511011116001\", \"XT_ZHXGSJ\": \"2014-10-22T00:25:50.000+0800\", \"ID\": \"48974F200BA24B559348AC672A1BF6AE\", \"FXJDM\": \"511011000000\", \"_index\": \"\", \"SQ\": \"椑木镇玉屏社区\", \"DWDZ_XZQHDM\": \"511011\", \"DWMC\": \"内江市东兴区袁四通家电经营部\", \"_id\": \"48974F200BA24B559348AC672A1BF6AE\"}, {\"PCSID\": \"511011670000\", \"DWDZ_ZBY\": \"29.50916\", \"PCS\": \"内江市公安局东兴区分局椑木派出所\", \"XT_ZXBZMC\": \"未注销\", \"FXJMC\": \"内江市公安局东兴区分局\", \"XT_LRRXM\": \"黎军\", \"DWDZ_ZBX\": \"105.08873\", \"SJDM\": \"511000000000\", \"XT_LRRBMID\": \"511011670000\", \"XT_LRRID\": \"511021196508183419\", \"DWDZ_DZXZ\": \"四川省内江市东兴区椑木镇兴顺街27号\", \"SECURITYGRADE\": \"1\", \"DWID\": \"4E24858239304503BEB06FA89C4829F0\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2013-12-16T16:04:32.000+0800\", \"SJMC\": \"内江市公安局\", \"DWDZ_DZID\": \"1C633A16E3A64D4B85A77C57200698C6\", \"_type\": \"sydw_dwdzb\", \"XT_CJSJ\": \"2013-12-16T16:04:32.000+0800\", \"XT_LRRBM\": \"内江市公安局东兴区分局椑木派出所\", \"SQID\": \"511011116001\", \"XT_ZHXGSJ\": \"2014-10-22T00:25:50.000+0800\", \"ID\": \"9891E80B3EBB47DE86950053386D8BF2\", \"FXJDM\": \"511011000000\", \"_index\": \"\", \"SQ\": \"椑木镇玉屏社区\", \"DWDZ_XZQHDM\": \"511011\", \"DWMC\": \"内江市东兴区袁四通家电经营部\", \"_id\": \"9891E80B3EBB47DE86950053386D8BF2\"}, {\"PCSID\": \"511011670000\", \"DWDZ_ZBY\": \"29.50919\", \"PCS\": \"内江市公安局东兴区分局椑木派出所\", \"XT_ZXBZMC\": \"未注销\", \"FXJMC\": \"内江市公安局东兴区分局\", \"XT_LRRXM\": \"黎军\", \"DWDZ_ZBX\": \"105.08873\", \"SJDM\": \"511000000000\", \"XT_LRRBMID\": \"511011670000\", \"XT_LRRID\": \"511021196508183419\", \"DWDZ_DZXZ\": \"四川省内江市东兴区椑木镇兴顺街29号\", \"SECURITYGRADE\": \"1\", \"DWID\": \"4E24858239304503BEB06FA89C4829F0\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2013-12-16T16:04:32.000+0800\", \"SJMC\": \"内江市公安局\", \"DWDZ_DZID\": \"E09DE03388424F5680E5E7CA4249432C\", \"_type\": \"sydw_dwdzb\", \"XT_CJSJ\": \"2013-12-16T16:04:32.000+0800\", \"XT_LRRBM\": \"内江市公安局东兴区分局椑木派出所\", \"SQID\": \"511011116001\", \"XT_ZHXGSJ\": \"2014-10-22T00:25:50.000+0800\", \"ID\": \"05C1E1C71AA54BBC8A22E600F78D59B2\", \"FXJDM\": \"511011000000\", \"_index\": \"\", \"SQ\": \"椑木镇玉屏社区\", \"DWDZ_XZQHDM\": \"511011\", \"DWMC\": \"内江市东兴区袁四通家电经营部\", \"_id\": \"05C1E1C71AA54BBC8A22E600F78D59B2\"}]}","GLDJ":"3","XT_LRRID":"511011196610012517","JYFW":"零售家用电器","BMJB":"1","GLDJMC":"常规管理类（C）","DWXZMC":"个体工商户","CYRS":"1","XT_LRIP":"10.68.64.70","XT_ZXBZ":"0","XT_LRSJ":"2013-07-10T11:20:49.000+0800","SXZW":"00000000000000000000000000000000000000000000000000000000000000000000001                                                                                                                                                                                   ","SJMC":"内江市公安局","ZCRQ":"2012-05-29T00:00:00.000+0800","DWBH":"D51101167000020130710000327136","_type":"sydw_dwjbxxb","DWXZ":"08","XT_ZHXGRXM":"黎军","XT_ZHXGRBMID":"511011670000","XT_LRRBM":"内江市公安局东兴区分局椑木派出所","DZ_DWDZXZ":"四川省内江市东兴区椑木镇兴顺街25号","XT_CJSJ":"2013-07-10T11:20:49.000+0800","XZBJ":"0","XT_LRRBMID":"511011670000","JN_sydw_cyryxxb":"{\"count\": 2, \"data\": [{\"DWFLMC\": \"其它\", \"SZBM\": \"统帅电器\", \"XT_ZHXGRBM\": \"内江市公安局东兴区分局椑木派出所\", \"DWFL\": \"90000\", \"XT_CJSJ\": \"2013-07-10T11:23:08.000+0800\", \"XT_ZHXGSJ\": \"2014-05-25T17:08:58.000+0800\", \"BGZKSRQ\": \"2011-09-01T00:00:00.000+0800\", \"XT_LRRXM\": \"胡长富\", \"LXDH\": \"18989117479\", \"XT_LRRBMID\": \"511011670000\", \"GJDM\": \"CHN\", \"XT_LRRID\": \"511011196610012517\", \"ZWLBDM\": \"50\", \"ZJLXDMMC\": \"居民身份证\", \"BMJB\": \"1\", \"ZJLXDM\": \"111\", \"XB\": \"1\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2013-07-10T11:23:08.000+0800\", \"XT_ZHXGRID\": \"511011196610012517\", \"XBMC\": \"男\", \"CSRQ\": \"1978-10-09T00:00:00.000+0800\", \"_type\": \"sydw_cyryxxb\", \"ZJHM\": \"511002197810093217\", \"XT_ZHXGRXM\": \"胡长富\", \"DWID\": \"4E24858239304503BEB06FA89C4829F0\", \"XT_LRRBM\": \"内江市公安局东兴区分局椑木派出所\", \"RYID\": \"5679EEDD3CC44EB881D844B92E508624\", \"ZXYYBZ\": \"经电话联系，了解到该员现已不在此从业。\", \"XT_ZHXGRBMID\": \"511011670000\", \"GJDMMC\": \"CHN\", \"SZGW\": \"营业员\", \"ID\": \"35C4C3578F004579B09BADAC44D75F74\", \"XT_ZHXGIP\": \"10.68.64.70\", \"XT_ZXBZMC\": \"已注销\", \"SJLY\": \"0\", \"JGDM\": \"511000\", \"_index\": \"\", \"SCBJ\": \"0\", \"XZBJ\": \"0\", \"XM\": \"张艺瀛\", \"DWMC\": \"内江市东兴区袁四通家电经营部\", \"_id\": \"35C4C3578F004579B09BADAC44D75F74\", \"ZWLBDMMC\": \"一般从业人员\"}, {\"DWFLMC\": \"其它\", \"SZBM\": \"统帅电器\", \"XT_ZHXGRBM\": \"内江市公安局东兴区分局椑木派出所\", \"DWFL\": \"90000\", \"XT_CJSJ\": \"2013-07-10T11:21:30.000+0800\", \"XT_ZHXGSJ\": \"2013-09-26T17:11:28.000+0800\", \"BGZKSRQ\": \"2011-09-01T00:00:00.000+0800\", \"XT_LRRXM\": \"胡长富\", \"LXDH\": \"15390307396\", \"XT_LRRBMID\": \"511011670000\", \"GJDM\": \"CHN\", \"XT_LRRID\": \"511011196610012517\", \"ZWLBDM\": \"10\", \"ZJLXDMMC\": \"居民身份证\", \"BMJB\": \"1\", \"ZJLXDM\": \"111\", \"XB\": \"2\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2013-07-10T11:21:30.000+0800\", \"XT_ZHXGRID\": \"61011119840616254X\", \"XBMC\": \"女\", \"CSRQ\": \"1981-07-27T00:00:00.000+0800\", \"_type\": \"sydw_cyryxxb\", \"ZJHM\": \"511011198107270745\", \"XT_ZHXGRXM\": \"胡琳琳\", \"DWID\": \"4E24858239304503BEB06FA89C4829F0\", \"XT_LRRBM\": \"内江市公安局东兴区分局椑木派出所\", \"RYID\": \"05FDCB334F8A443B9BF2D2F51F9DB0BC\", \"XZBJ\": \"0\", \"XT_ZHXGRBMID\": \"511011670000\", \"GJDMMC\": \"CHN\", \"SZGW\": \"法人代表\", \"ID\": \"51AE7648A74A476AA49940FAD6E679FD\", \"XT_ZHXGIP\": \"10.68.64.70\", \"XT_ZXBZMC\": \"未注销\", \"SJLY\": \"0\", \"JGDM\": \"511002\", \"_index\": \"\", \"SCBJ\": \"0\", \"XM\": \"袁梅\", \"DWMC\": \"内江市东兴区袁四通家电经营部\", \"_id\": \"51AE7648A74A476AA49940FAD6E679FD\", \"ZWLBDMMC\": \"法定代表人\"}]}","XT_ZHXGSJ":"2014-10-22T10:30:51.000+0800","ID":"4E24858239304503BEB06FA89C4829F0","SSPCSDM":"511011670000","XT_ZHXGIP":"10.68.64.70","_index":"test2","ZCDZ":"四川省内江市东兴区椑木镇兴顺街29号","SFYSPJK":"0","SCBJ":"0","XT_ZHXGRID":"511021196508183419","ZCZB":"2","DWMC":"内江市东兴区袁四通家电经营部","DWLXDH":"80322412069","DZ_DWDZDM":"AA4DA574B5FE4A64822F69352DE750C3","_id":"4E24858239304503BEB06FA89C4829F0","JN_sydw_szqyjyry":"{\"count\": 0, \"data\": []}"},{"BARS":"0","SSZRQDM":"5110285900002012082201789","DWFLMC":"餐饮行业","XT_ZHXGRBM":"隆昌县公安局李市镇派出所","DWFL":"11600","SSFJDM":"511028000000","XT_ZXBZMC":"未注销","XT_LRRXM":"黄廷波","DWXZMC":"个体工商户","SJDM":"511000000000","SJLYBS":"0","JN_sydw_dwdzb":"{\"count\": 3, \"data\": [{\"PCSID\": \"511028590000\", \"DWDZ_ZBY\": \"29.31629364\", \"PCS\": \"隆昌县公安局李市镇派出所\", \"XT_ZXBZMC\": \"未注销\", \"FXJMC\": \"隆昌县公安局\", \"XT_LRRXM\": \"梁辉\", \"DWDZ_ZBX\": \"105.3983246\", \"SJDM\": \"511000000000\", \"XT_LRRBMID\": \"511028590000\", \"XT_LRRID\": \"511028196312220059\", \"DWDZ_DZXZ\": \"四川省内江市隆昌县李市镇南华宫街84号\", \"SECURITYGRADE\": \"1\", \"DWID\": \"279C8930DD224E4FA1A2564896FCFFAB\", \"XT_LRIP\": \"10.68.64.69\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-30T16:30:38.000+0800\", \"SJMC\": \"内江市公安局\", \"DWDZ_DZID\": \"F765C25939974FB79AF5C7ACCFE037BD\", \"_type\": \"sydw_dwdzb\", \"XT_CJSJ\": \"2015-06-30T16:30:38.000+0800\", \"XT_LRRBM\": \"隆昌县公安局李市镇派出所\", \"SQID\": \"511028316012\", \"ID\": \"A88A5B4E58B1462480F8F0CEB7EEDB33\", \"FXJDM\": \"511028000000\", \"_index\": \"\", \"SQ\": \"李市镇李市社区居委会\", \"DWDZ_XZQHDM\": \"511028\", \"DWMC\": \"隆昌县李市镇谌方良小食店\", \"_id\": \"A88A5B4E58B1462480F8F0CEB7EEDB33\"}, {\"PCSID\": \"511028590000\", \"DWDZ_ZBY\": \"29.31631083\", \"PCS\": \"隆昌县公安局李市镇派出所\", \"XT_ZXBZMC\": \"未注销\", \"FXJMC\": \"隆昌县公安局\", \"XT_LRRXM\": \"梁辉\", \"DWDZ_ZBX\": \"105.3983406\", \"SJDM\": \"511000000000\", \"XT_LRRBMID\": \"511028590000\", \"XT_LRRID\": \"511028196312220059\", \"DWDZ_DZXZ\": \"四川省内江市隆昌县李市镇南华宫街86号\", \"SECURITYGRADE\": \"1\", \"DWID\": \"279C8930DD224E4FA1A2564896FCFFAB\", \"XT_LRIP\": \"10.68.64.69\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-30T16:30:38.000+0800\", \"SJMC\": \"内江市公安局\", \"DWDZ_DZID\": \"2115A76D870A42D083534B3CC31E2D14\", \"_type\": \"sydw_dwdzb\", \"XT_CJSJ\": \"2015-06-30T16:30:38.000+0800\", \"XT_LRRBM\": \"隆昌县公安局李市镇派出所\", \"SQID\": \"511028316012\", \"ID\": \"7B952B1B0BBA4B738AF0C11608C40DFF\", \"FXJDM\": \"511028000000\", \"_index\": \"\", \"SQ\": \"李市镇李市社区居委会\", \"DWDZ_XZQHDM\": \"511028\", \"DWMC\": \"隆昌县李市镇谌方良小食店\", \"_id\": \"7B952B1B0BBA4B738AF0C11608C40DFF\"}, {\"PCSID\": \"511028590000\", \"DWDZ_ZBY\": \"29.31633047\", \"PCS\": \"隆昌县公安局李市镇派出所\", \"XT_ZXBZMC\": \"未注销\", \"FXJMC\": \"隆昌县公安局\", \"XT_LRRXM\": \"梁辉\", \"DWDZ_ZBX\": \"105.3983583\", \"SJDM\": \"511000000000\", \"XT_LRRBMID\": \"511028590000\", \"XT_LRRID\": \"511028196312220059\", \"DWDZ_DZXZ\": \"四川省内江市隆昌县李市镇南华宫街88号\", \"SECURITYGRADE\": \"1\", \"DWID\": \"279C8930DD224E4FA1A2564896FCFFAB\", \"XT_LRIP\": \"10.68.64.69\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-06-30T16:30:38.000+0800\", \"SJMC\": \"内江市公安局\", \"DWDZ_DZID\": \"3D9AC68F8720476F96E134FE70A54768\", \"_type\": \"sydw_dwdzb\", \"XT_CJSJ\": \"2015-06-30T16:30:38.000+0800\", \"XT_LRRBM\": \"隆昌县公安局李市镇派出所\", \"SQID\": \"511028316012\", \"ID\": \"90B52ECD98A940549EDEE7C5B2B8AC3D\", \"FXJDM\": \"511028000000\", \"_index\": \"\", \"SQ\": \"李市镇李市社区居委会\", \"DWDZ_XZQHDM\": \"511028\", \"DWMC\": \"隆昌县李市镇谌方良小食店\", \"_id\": \"90B52ECD98A940549EDEE7C5B2B8AC3D\"}]}","XT_LRRBMID":"511028590000","XT_LRRID":"511028198401273231","BMJB":"1","GLDJMC":"常规管理类（C）","XXSBMM":"111111","CYRS":"2","XT_LRIP":"10.68.64.69","XT_ZXBZ":"0","XT_LRSJ":"2014-11-14T13:10:31.000+0800","SXZW":"000000000000000000000000000000000000000000000000000000000000000000000012                                                                                                                                                                                  ","SJMC":"内江市公安局","XT_ZHXGRID":"511028196312220059","DWLXDH":"15884876409","_type":"sydw_dwjbxxb","DWXZ":"08","XT_ZHXGRXM":"梁辉","XT_ZHXGRBMID":"511028590000","XT_LRRBM":"隆昌县公安局李市镇派出所","DZ_DWDZXZ":"四川省内江市隆昌县李市镇南华宫街84号","XT_CJSJ":"2014-11-14T13:10:31.000+0800","XZBJ":"0","GLDJ":"3","JN_sydw_cyryxxb":"{\"count\": 2, \"data\": [{\"DWFLMC\": \"餐饮行业\", \"XT_LRSJ\": \"2014-11-14T13:13:15.000+0800\", \"DWFL\": \"11600\", \"DWID\": \"279C8930DD224E4FA1A2564896FCFFAB\", \"XT_ZXBZMC\": \"未注销\", \"XT_LRRXM\": \"黄廷波\", \"LXDH\": \"15884876409\", \"XT_LRRBMID\": \"511028590000\", \"GJDM\": \"CHN\", \"XT_LRRID\": \"511028198401273231\", \"ZJLXDMMC\": \"居民身份证\", \"BMJB\": \"1\", \"ZJLXDM\": \"111\", \"XB\": \"1\", \"XT_LRIP\": \"10.68.64.69\", \"XT_ZXBZ\": \"0\", \"JZD_DZXZ\": \"四川省内江市隆昌县李市镇南华宫街5060号\", \"XT_LRRBM\": \"隆昌县公安局李市镇派出所\", \"XBMC\": \"男\", \"CSRQ\": \"1963-08-05T00:00:00.000+0800\", \"_type\": \"sydw_cyryxxb\", \"ZJHM\": \"510521196308051610\", \"XM\": \"谌方良\", \"ZWLBDM\": \"10\", \"SCBJ\": \"0\", \"RYID\": \"82D755044C1D4DA8A93784B2F3948060\", \"XT_CJSJ\": \"2014-11-14T13:13:15.000+0800\", \"XZBJ\": \"0\", \"DWMC\": \"隆昌县李市镇谌方良小食店\", \"GJDMMC\": \"CHN\", \"ID\": \"A36D36A243A6468691DE822B79175CCB\", \"SJLY\": \"0\", \"JGDM\": \"510521\", \"_index\": \"\", \"_id\": \"A36D36A243A6468691DE822B79175CCB\", \"ZWLBDMMC\": \"法定代表人\"}, {\"DWFLMC\": \"餐饮行业\", \"XT_LRSJ\": \"2014-11-14T16:21:49.000+0800\", \"DWFL\": \"11600\", \"DWID\": \"279C8930DD224E4FA1A2564896FCFFAB\", \"XT_ZXBZMC\": \"未注销\", \"XT_LRRXM\": \"黄廷波\", \"LXDH\": \"15884876409\", \"XT_LRRBMID\": \"511028590000\", \"GJDM\": \"CHN\", \"XT_LRRID\": \"511028198401273231\", \"ZJLXDMMC\": \"居民身份证\", \"BMJB\": \"1\", \"ZJLXDM\": \"111\", \"XB\": \"2\", \"XT_LRIP\": \"10.68.64.69\", \"XT_ZXBZ\": \"0\", \"JZD_DZXZ\": \"四川省内江市隆昌县李市镇南华宫街5060号\", \"XT_LRRBM\": \"隆昌县公安局李市镇派出所\", \"XBMC\": \"女\", \"CSRQ\": \"1973-02-12T00:00:00.000+0800\", \"_type\": \"sydw_cyryxxb\", \"ZJHM\": \"511028197302128026\", \"XM\": \"李丽\", \"ZWLBDM\": \"50\", \"SCBJ\": \"0\", \"RYID\": \"46EF8815AA9B4535B1448ACA44FD26A6\", \"XT_CJSJ\": \"2014-11-14T16:21:49.000+0800\", \"XZBJ\": \"0\", \"DWMC\": \"隆昌县李市镇谌方良小食店\", \"GJDMMC\": \"CHN\", \"ID\": \"F75972B655FA4FAC881B82CF7526B926\", \"SJLY\": \"0\", \"JGDM\": \"511028\", \"_index\": \"\", \"_id\": \"F75972B655FA4FAC881B82CF7526B926\", \"ZWLBDMMC\": \"一般从业人员\"}]}","XT_ZHXGSJ":"2015-06-30T16:30:37.000+0800","ID":"279C8930DD224E4FA1A2564896FCFFAB","SSPCSDM":"511028590000","XT_ZHXGIP":"10.68.64.69","DWMCJP":"LCXLSZZFLXSD","_index":"test2","SCBJ":"0","DWMC":"隆昌县李市镇谌方良小食店","DWBH":"D51102859000020141114000584728","DZ_DWDZDM":"F765C25939974FB79AF5C7ACCFE037BD","_id":"279C8930DD224E4FA1A2564896FCFFAB","JN_sydw_szqyjyry":"{\"count\": 0, \"data\": []}"},{"BARS":"0","SSZRQDM":"5110116700002012082402496","DWFLMC":"茶馆棋牌","XT_ZHXGRBM":"内江市公安局东兴区分局椑木派出所","DWFL":"20204","SSFJDM":"511011000000","XT_ZXBZMC":"未注销","XT_LRRXM":"苏辉","DWXZMC":"个体工商户","SJDM":"511000000000","SJLYBS":"0","JN_sydw_dwdzb":"{\"count\": 1, \"data\": [{\"PCSID\": \"511011670000\", \"DWDZ_ZBY\": \"29.51117\", \"PCS\": \"内江市公安局东兴区分局椑木派出所\", \"XT_ZXBZMC\": \"未注销\", \"FXJMC\": \"内江市公安局东兴区分局\", \"XT_LRRXM\": \"胡长富\", \"DWDZ_ZBX\": \"105.08699\", \"SJDM\": \"511000000000\", \"XT_LRRBMID\": \"511011670000\", \"XT_LRRID\": \"511011196610012517\", \"DWDZ_DZXZ\": \"四川省内江市东兴区椑木镇玉屏街61号\", \"SECURITYGRADE\": \"1\", \"DWID\": \"8CDAC6F5A8A14DEF9ED4536C1A7F6DED\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2015-05-05T08:58:57.000+0800\", \"SJMC\": \"内江市公安局\", \"DWDZ_DZID\": \"D544CE26E83748EBA896F163B55277E3\", \"_type\": \"sydw_dwdzb\", \"XT_CJSJ\": \"2015-05-05T08:58:57.000+0800\", \"XT_LRRBM\": \"内江市公安局东兴区分局椑木派出所\", \"SQID\": \"511011116001\", \"ID\": \"7A28E982652F465A862F475C73E7ECE2\", \"FXJDM\": \"511011000000\", \"_index\": \"\", \"SQ\": \"椑木镇玉屏社区\", \"DWDZ_XZQHDM\": \"511011\", \"DWMC\": \"李绍宇麻将馆\", \"_id\": \"7A28E982652F465A862F475C73E7ECE2\"}]}","XT_LRRBMID":"511011670000","XT_LRRID":"511002198510020010","JYFW":"棋牌娱乐","BMJB":"1","GLDJMC":"重点关注类（B）","XXSBMM":"111111","CYRS":"1","XT_LRIP":"10.68.64.69","XT_ZXBZ":"0","XT_LRSJ":"2014-08-28T10:51:42.000+0800","SXZW":"0000000000000000000000100000000000000000000000000000000000000000000000                                                                                                                                                                                    ","SJMC":"内江市公安局","XT_ZHXGRID":"511011196610012517","DWLXDH":"18989101066","_type":"sydw_dwjbxxb","DWXZ":"08","XT_ZHXGRXM":"胡长富","XT_ZHXGRBMID":"511011670000","XT_LRRBM":"内江市公安局东兴区分局椑木派出所","DZ_DWDZXZ":"四川省内江市东兴区椑木镇玉屏街61号","XT_CJSJ":"2014-08-28T10:51:42.000+0800","XZBJ":"0","GLDJ":"2","JN_sydw_cyryxxb":"{\"count\": 1, \"data\": [{\"DWFLMC\": \"茶馆棋牌\", \"XT_LRSJ\": \"2014-08-28T10:55:05.000+0800\", \"DWFL\": \"20204\", \"DWID\": \"8CDAC6F5A8A14DEF9ED4536C1A7F6DED\", \"XT_ZXBZMC\": \"未注销\", \"BGZKSRQ\": \"2013-09-01T00:00:00.000+0800\", \"XT_LRRXM\": \"苏辉\", \"LXDH\": \"13541539705\", \"XT_LRRBMID\": \"511011670000\", \"GJDM\": \"CHN\", \"XT_LRRID\": \"511002198510020010\", \"ZJLXDMMC\": \"居民身份证\", \"BMJB\": \"1\", \"ZJLXDM\": \"111\", \"XB\": \"1\", \"XT_LRIP\": \"10.68.64.69\", \"XT_ZXBZ\": \"0\", \"XT_LRRBM\": \"内江市公安局东兴区分局椑木派出所\", \"XBMC\": \"男\", \"CSRQ\": \"1963-03-10T00:00:00.000+0800\", \"_type\": \"sydw_cyryxxb\", \"ZJHM\": \"511002196303103236\", \"XM\": \"李绍宇\", \"ZWLBDM\": \"10\", \"SCBJ\": \"0\", \"RYID\": \"BD19667F097F458094127882C9AE8BA8\", \"XT_CJSJ\": \"2014-08-28T10:55:05.000+0800\", \"XZBJ\": \"0\", \"DWMC\": \"李绍宇麻将馆\", \"GJDMMC\": \"CHN\", \"SZGW\": \"法人代表哦\", \"ID\": \"80B2DDD085B042A997D88A180495CE0F\", \"SJLY\": \"0\", \"JGDM\": \"511021\", \"_index\": \"\", \"_id\": \"80B2DDD085B042A997D88A180495CE0F\", \"ZWLBDMMC\": \"法定代表人\"}]}","XT_ZHXGSJ":"2015-05-05T08:58:57.000+0800","ID":"8CDAC6F5A8A14DEF9ED4536C1A7F6DED","SSPCSDM":"511011670000","XT_ZHXGIP":"10.68.64.70","_index":"test2","SFYSPJK":"0","SCBJ":"0","DWMC":"李绍宇麻将馆","DWBH":"D51101167000020140828000522727","DZ_DWDZDM":"D544CE26E83748EBA896F163B55277E3","_id":"8CDAC6F5A8A14DEF9ED4536C1A7F6DED","JN_sydw_szqyjyry":"{\"count\": 0, \"data\": []}"},{"BARS":"0","SSZRQDM":"5110116400002012082302021","DWFLMC":"其它","XT_LRSJ":"2014-10-27T11:25:51.000+0800","DWFL":"90000","SSFJDM":"511011000000","XT_ZXBZMC":"未注销","XT_LRRXM":"何川平","DWXZMC":"个体工商户","BZ":"未办证","SJLYBS":"0","JN_sydw_dwdzb":"{\"count\": 1, \"data\": [{\"PCSID\": \"511011640000\", \"DWDZ_ZBY\": \"29.50086\", \"PCS\": \"内江市公安局东兴区分局永东派出所\", \"XT_ZXBZMC\": \"未注销\", \"FXJMC\": \"内江市公安局东兴区分局\", \"XT_LRRXM\": \"何川平\", \"DWDZ_ZBX\": \"105.22137\", \"SJDM\": \"511000000000\", \"XT_LRRBMID\": \"511011640000\", \"XT_LRRID\": \"511002196104090030\", \"DWDZ_DZXZ\": \"四川省内江市东兴区永东乡兴隆街19号\", \"SECURITYGRADE\": \"1\", \"DWID\": \"E88BD4042E0648A7BE5D5CE3E0E1B2AB\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2014-10-27T11:25:51.000+0800\", \"SJMC\": \"内江市公安局\", \"DWDZ_DZID\": \"11DBB7EEC6574AEBB921E0D76D5CE499\", \"_type\": \"sydw_dwdzb\", \"XT_CJSJ\": \"2014-10-27T11:25:51.000+0800\", \"XT_LRRBM\": \"内江市公安局东兴区分局永东派出所\", \"SQID\": \"511011127006\", \"ID\": \"8D6274098F1C4378A11E0AC4C467A419\", \"FXJDM\": \"511011000000\", \"_index\": \"\", \"SQ\": \"永东乡永兴社区\", \"DWDZ_XZQHDM\": \"511011\", \"DWMC\": \"海尔专卖店永东店\", \"_id\": \"8D6274098F1C4378A11E0AC4C467A419\"}]}","XT_LRRBMID":"511011640000","XT_LRRID":"511002196104090030","JYFW":"家电","BMJB":"1","GLDJMC":"常规管理类（C）","XXSBMM":"111111","SJDM":"511000000000","CYRS":"2","XT_LRIP":"10.68.64.70","XT_ZXBZ":"0","SXZW":"00000000000000000000000000000000000000000000000000000000000000000000001                                                                                                                                                                                   ","SJMC":"内江市公安局","XT_LRRBM":"内江市公安局东兴区分局永东派出所","DWLXDH":"18608323518","_type":"sydw_dwjbxxb","DWXZ":"08","XT_CJSJ":"2014-10-27T11:25:51.000+0800","SCBJ":"0","DZ_DWDZXZ":"四川省内江市东兴区永东乡兴隆街19号","XZBJ":"0","GLDJ":"3","JN_sydw_cyryxxb":"{\"count\": 2, \"data\": [{\"DWFLMC\": \"其它\", \"XT_LRSJ\": \"2014-10-27T11:27:46.000+0800\", \"DWFL\": \"90000\", \"DWID\": \"E88BD4042E0648A7BE5D5CE3E0E1B2AB\", \"XT_ZXBZMC\": \"未注销\", \"XT_LRRXM\": \"何川平\", \"LXDH\": \"18608323518\", \"XT_LRRBMID\": \"511011640000\", \"GJDM\": \"CHN\", \"XT_LRRID\": \"511002196104090030\", \"ZJLXDMMC\": \"居民身份证\", \"BMJB\": \"1\", \"ZJLXDM\": \"111\", \"XB\": \"2\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"JZD_DZXZ\": \"四川省内江市东兴区永东乡兴隆街28号\", \"XT_LRRBM\": \"内江市公安局东兴区分局永东派出所\", \"XBMC\": \"女\", \"CSRQ\": \"1972-06-26T00:00:00.000+0800\", \"_type\": \"sydw_cyryxxb\", \"ZJHM\": \"511028197206266541\", \"XM\": \"黄菊芬\", \"ZWLBDM\": \"50\", \"SCBJ\": \"0\", \"RYID\": \"E03264D1B8DD4ED49B36338F6A9B07FA\", \"XT_CJSJ\": \"2014-10-27T11:27:46.000+0800\", \"XZBJ\": \"0\", \"DWMC\": \"海尔专卖店永东店\", \"GJDMMC\": \"CHN\", \"ID\": \"5C02F3BB2DB84500A233144DCB343218\", \"SJLY\": \"0\", \"JGDM\": \"511028\", \"_index\": \"\", \"_id\": \"5C02F3BB2DB84500A233144DCB343218\", \"ZWLBDMMC\": \"一般从业人员\"}, {\"DWFLMC\": \"其它\", \"XT_ZHXGRBM\": \"内江市公安局东兴区分局永东派出所\", \"DWFL\": \"90000\", \"DWID\": \"E88BD4042E0648A7BE5D5CE3E0E1B2AB\", \"XT_CJSJ\": \"2014-10-27T11:27:17.000+0800\", \"XT_ZHXGSJ\": \"2014-11-23T15:51:19.000+0800\", \"XT_LRRXM\": \"何川平\", \"LXDH\": \"18608323518\", \"XT_LRRBMID\": \"511011640000\", \"GJDM\": \"CHN\", \"XT_LRRID\": \"511002196104090030\", \"ZWLBDM\": \"20\", \"ZJLXDMMC\": \"居民身份证\", \"BMJB\": \"1\", \"ZJLXDM\": \"111\", \"XT_ZHXGRBMID\": \"511011640000\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2014-10-27T11:27:17.000+0800\", \"JZD_DZXZ\": \"四川省内江市东兴区永东乡兴隆街28号\", \"XT_ZHXGRID\": \"511011198203058752\", \"XBMC\": \"男\", \"CSRQ\": \"1972-12-09T00:00:00.000+0800\", \"_type\": \"sydw_cyryxxb\", \"ZJHM\": \"511028197212096518\", \"XT_ZHXGRXM\": \"李利\", \"XB\": \"1\", \"XT_LRRBM\": \"内江市公安局东兴区分局永东派出所\", \"RYID\": \"F9D9931585B64E3990892B3FC976DD50\", \"XZBJ\": \"0\", \"DWMC\": \"海尔专卖店永东店\", \"GJDMMC\": \"CHN\", \"ID\": \"A8083E89BC634F61AF775C6875E906F1\", \"XT_ZHXGIP\": \"10.68.64.69\", \"XT_ZXBZMC\": \"未注销\", \"SJLY\": \"0\", \"JGDM\": \"511028\", \"_index\": \"\", \"SCBJ\": \"0\", \"XM\": \"邓洪\", \"_id\": \"A8083E89BC634F61AF775C6875E906F1\", \"ZWLBDMMC\": \"负责人\"}]}","XT_ZHXGSJ":"2014-10-27T11:25:51.000+0800","ID":"E88BD4042E0648A7BE5D5CE3E0E1B2AB","SSPCSDM":"511011640000","_index":"test2","SFYSPJK":"0","DWMC":"海尔专卖店永东店","DWBH":"D51101164000020141027000558666","DZ_DWDZDM":"11DBB7EEC6574AEBB921E0D76D5CE499","_id":"E88BD4042E0648A7BE5D5CE3E0E1B2AB","JN_sydw_szqyjyry":"{\"count\": 0, \"data\": []}"},{"BARS":"0","SSZRQDM":"5110116300002012082402337","DWFLMC":"其它","XT_LRSJ":"2014-11-13T13:50:49.000+0800","DWFL":"90000","SSFJDM":"511011000000","XT_ZXBZMC":"未注销","XT_LRRXM":"李鹏","DWXZMC":"个体工商户","SJDM":"511000000000","SJLYBS":"0","JN_sydw_dwdzb":"{\"count\": 1, \"data\": [{\"PCSID\": \"511011630000\", \"DWDZ_ZBY\": \"29.60882\", \"PCS\": \"内江市公安局东兴区分局平坦派出所\", \"XT_ZXBZMC\": \"未注销\", \"FXJMC\": \"内江市公安局东兴区分局\", \"XT_LRRXM\": \"李鹏\", \"DWDZ_ZBX\": \"105.29601\", \"SJDM\": \"511000000000\", \"XT_LRRBMID\": \"511011630000\", \"XT_LRRID\": \"511002198408311516\", \"DWDZ_DZXZ\": \"四川省内江市东兴区平坦乡平顺路16号附101号\", \"SECURITYGRADE\": \"1\", \"DWID\": \"FDB9A5B71650437C96C5B919598E7EAE\", \"XT_LRIP\": \"10.68.64.69\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2014-11-13T13:50:49.000+0800\", \"SJMC\": \"内江市公安局\", \"DWDZ_DZID\": \"74DCA1A16EDD4DEBAA7684ED02FF476E\", \"_type\": \"sydw_dwdzb\", \"XT_CJSJ\": \"2014-11-13T13:50:49.000+0800\", \"XT_LRRBM\": \"内江市公安局东兴区分局平坦派出所\", \"SQID\": \"511011124001\", \"ID\": \"BB07D5A8A7A34006B096C8CA3B1B505B\", \"FXJDM\": \"511011000000\", \"_index\": \"\", \"SQ\": \"平坦乡平坦社区\", \"DWDZ_XZQHDM\": \"511011\", \"DWMC\": \"敖昌芬杂货店\", \"_id\": \"BB07D5A8A7A34006B096C8CA3B1B505B\"}]}","XT_LRRBMID":"511011630000","XT_LRRID":"511002198408311516","BMJB":"1","GLDJMC":"常规管理类（C）","XXSBMM":"111111","CYRS":"1","XT_LRIP":"10.68.64.69","XT_ZXBZ":"0","SXZW":"00000000000000000000000000000000000000000000000000000000000000000000001                                                                                                                                                                                   ","SJMC":"内江市公安局","XT_LRRBM":"内江市公安局东兴区分局平坦派出所","DWLXDH":"08322320113","_type":"sydw_dwjbxxb","DWXZ":"08","XT_CJSJ":"2014-11-13T13:50:49.000+0800","SCBJ":"0","DZ_DWDZXZ":"四川省内江市东兴区平坦乡平顺路16号附101号","XZBJ":"0","GLDJ":"3","JN_sydw_cyryxxb":"{\"count\": 1, \"data\": [{\"DWFLMC\": \"其它\", \"XT_LRSJ\": \"2014-11-13T13:51:17.000+0800\", \"GJDM\": \"CHN\", \"XT_ZXBZMC\": \"未注销\", \"XT_LRRXM\": \"李鹏\", \"LXDH\": \"08322320113\", \"XT_LRRBMID\": \"511011630000\", \"DWID\": \"FDB9A5B71650437C96C5B919598E7EAE\", \"XT_LRRID\": \"511002198408311516\", \"ZJLXDMMC\": \"居民身份证\", \"BMJB\": \"1\", \"ZJLXDM\": \"111\", \"XB\": \"2\", \"XT_LRIP\": \"10.68.64.69\", \"XT_ZXBZ\": \"0\", \"XT_LRRBM\": \"内江市公安局东兴区分局平坦派出所\", \"XBMC\": \"女\", \"CSRQ\": \"1963-08-20T00:00:00.000+0800\", \"_type\": \"sydw_cyryxxb\", \"ZJHM\": \"51102119630820932X\", \"XM\": \"敖昌芬\", \"ZWLBDM\": \"20\", \"SCBJ\": \"0\", \"RYID\": \"A9F760337EED4ED89843A7A649F5CA78\", \"XT_CJSJ\": \"2014-11-13T13:51:17.000+0800\", \"DWFL\": \"90000\", \"XZBJ\": \"0\", \"DWMC\": \"敖昌芬杂货店\", \"GJDMMC\": \"CHN\", \"ID\": \"604E286FF3AC483BADF976C2B9461AC7\", \"SJLY\": \"0\", \"JGDM\": \"511011\", \"_index\": \"\", \"_id\": \"604E286FF3AC483BADF976C2B9461AC7\", \"ZWLBDMMC\": \"负责人\"}]}","XT_ZHXGSJ":"2014-11-13T13:50:49.000+0800","ID":"FDB9A5B71650437C96C5B919598E7EAE","SSPCSDM":"511011630000","DWMCJP":"ACFZHD","_index":"test2","SFYSPJK":"0","DWMC":"敖昌芬杂货店","DWBH":"D51101163000020141113000581328","DZ_DWDZDM":"74DCA1A16EDD4DEBAA7684ED02FF476E","_id":"FDB9A5B71650437C96C5B919598E7EAE","JN_sydw_szqyjyry":"{\"count\": 0, \"data\": []}"}]}
