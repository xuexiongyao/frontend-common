﻿/*配置说明
 * 1.不同查询模块均使用相同的index_config.html中的内容,改革文件名即可
 * 2.html文件下方引用不同的search_config_模块名称.js
 * 3.在search_config_模块名称.js中配置页面查询参数和展示参数
 */

var dictPath = portal + '/common/dict/'
var search_config_arr = ['SYFW_FWJBXXB', 'SYFW_FWKZXX_CQRXXB', 'SYFW_FWRCJCB', 'SYFW_FWGDB', 'SYFW_FWJZXXB','SYFW_FWBZB'/*,'syfw_analysis'*/];
//查询条件配置
var search_config = {
    //查询接口地址
    url: compositQueryPath,
    basePath: basePath,
    export_url: basePath + '/compositQuery/exportExcel2003',

    main_type: 'syfw_fwjbxxb',
    primary_key: 'ID',//主键

    //页面标题名称
    query_title: '实有房屋',
    sysType: 'syfw',		//系统类型,用于区别查询模板的来源

    //基本信息查询条件和展示项配置
    SYFW_FWJBXXB_type: 'SYFW_FWJBXXB',
    SYFW_FWJBXXB_title: '房屋_房屋基本信息',
        SYFW_FWJBXXB_init: ['FWDZ_DZXZ', 'FW_LXDM', 'FW_SYLXDM'],    //默认显示的查询条件
    SYFW_FWJBXXB: [
        {
            field: 'FW_YTDM',
            text: '房屋用途',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_FWYTDM.js',
            multiple: true
        },
        {
            field: 'FW_LXDM',
            text: '房屋类型',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_FWLXDM.js',
            multiple: true
        },
        {
            field: 'FW_JGLXDM',
            text: '结构类型',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_FWJGLXDM.js',
            multiple: true
        },
        {
            field: 'FW_GLDJDM',
            text: '管理等级',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_FWGLDJDM.js'
        },
        {
            field: 'FW_SYLXDM',
            text: '使用类型',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_FWSYLXDM.js',
            multiple: true
        },
        {
            field: 'FW_ZYLXDM',
            text: '租用类型',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_FWZYLXDM.js',
            multiple: true
        },
        {field: 'SSXQ_MC', text: '小区名称', input: 'textbox', judge_dict: judge1},
        {field: 'FW_JS_NUM', text: '房间数', input: 'textbox', judge_dict: judge2},
        {field: 'JZRS', text: '居住人数', input: 'textbox', judge_dict: judge2},
        {field: 'FW_MJ_NUM', text: '面积（平方米）', input: 'textbox', judge_dict: judge2},
        //{field: 'JCZQ_BEGIN', text: '检查周期开始时间', input: 'datebox', judge_dict: judge2, formatter: 'date10'},
        //{field: 'JCZQ_END', text: '检查周期结束时间', input: 'datebox', judge_dict: judge2, formatter: 'date10'},
        {field: 'FWDZ_DZXZ', text: '房屋详址', input: 'textbox', judge_dict: judge1},
        {field: 'GXFJDM', text: '管辖分局代码', input: 'textbox_org', judge_dict: judge9, isOrganization: true},
        {field: 'GXPCSDM', text: '管辖派出所代码', input: 'textbox_org', judge_dict: judge9, isOrganization: true},
        {field: 'GXZRQDM', text: '管辖责任区代码', input: 'textbox_org', judge_dict: judge9, isOrganization: true},
        {field: 'BZ', text: '备注', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_CJSJ', text: '采集时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRSJ', text: '录入时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRRXM', text: '录入人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_LRRID', text: '录入人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
        //{field: 'XT_LRIP', text: '录入IP', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZHXGSJ', text: '最后修改时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_ZHXGRXM', text: '最后修改人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_ZHXGRID', text: '最后修改人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
        //{field: 'XT_ZHXGIP', text: '最后修改IP', input: 'textbox', judge_dict: judge1},
        {
            field: 'XT_ZXBZ',
            text: '注销标志',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_ZXBZDM.js',
            multiple: true
        },
        {field: 'XT_ZXYY', text: '注销原因', input: 'textbox', judge_dict: judge1},
        {
            field: 'FWDZ_DZJB',
            text: '房屋地址级别',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_BZDZJBDM.js',
            multiple: true,
            dataFilter: '3|4|7'
        },
        {
            field: 'SFYTP', text: '是否有图片', input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_SFDM.js',
            multiple: true
        },
        {field: 'XT_ZXYYBZ', text: '注销原因备注', input: 'textbox', judge_dict: judge1},
        /*{
            field: 'FW_JCZQ',
            text: '房屋检查周期',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_FWJCZQDM.js'
        },*/
        {field: 'GXSJDM', text: '管辖市局', input: 'textbox_org', judge_dict: judge9, isOrganization: true}
    ],

    SYFW_FWGDB_type: 'SYFW_FWGDB',
    SYFW_FWGDB_title: '实有房屋_房屋归栋',
    SYFW_FWGDB_init: [],    //默认显示的查询条件
    SYFW_FWGDB: [
        {field: 'XT_ZXYYBZ', text: '注销原因备注', input: 'textbox', judge_dict: judge1},
        {field: 'DZ_XZ', text: '归栋标准地址详址', input: 'textbox', judge_dict: judge1},
        {field: 'DZ_JB', text: '归栋标准地址级别', input: 'textbox', judge_dict: judge1},
        {
            field: 'IS_ZFW',
            text: '是否为主房屋',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_SFDM.js',
            multiple: false
        },
        //{field: 'XT_CJSJ', text: '采集时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRSJ', text: '录入时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRRXM', text: '录入人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_LRRID', text: '录入人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
        //{field: 'XT_LRIP', text: '录入IP', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZHXGSJ', text: '最后修改时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_ZHXGRXM', text: '最后修改人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_ZHXGRID', text: '最后修改人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
        //{field: 'XT_ZHXGIP', text: '最后修改IP', input: 'textbox', judge_dict: judge1},
        {
            field: 'XT_ZXBZ',
            text: '注销标志',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_ZXBZDM.js',
            multiple: true
        },
        {field: 'XT_ZXYY', text: '注销原因', input: 'textbox', judge_dict: judge1}
    ],

    SYFW_FWJZXXB_type: 'SYFW_FWJZXXB',
    SYFW_FWJZXXB_title: '实有房屋_房屋出租信息',
    SYFW_FWJZXXB_init: [],    //默认显示的查询条件
    SYFW_FWJZXXB: [
        //{field: 'FWSY_SYLX', text: '房屋使用_使用类型:1普通居住，2出租', input: 'textbox', judge_dict: judge1},
        {
            field: 'SF_QDZAZRS',
            text: '是否签订治安责任书',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_SFDM.js',
            multiple: true
        },
        {field: 'BZ', text: '备注', input: 'textbox', judge_dict: judge1},
        {field: 'JZRY_XM', text: '承租人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'JZRY_CYM', text: '居住人员曾用名', input: 'textbox', judge_dict: judge1},
        //{field: 'JZRY_CSRQ', text: '居住人员出生日期', input: 'datebox', judge_dict: judge2, formatter: 'date10'},
        /*{
            field: 'JZRY_XBDM',
            text: '居住人员性别',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'GB_D_XBDM.js',
            multiple: true
        },*/
        /*{
            field: 'JZRY_MZDM',
            text: '居住人员民族',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'GB_D_MZDM.js',
            multiple: true
        },*/
        /*{
            field: 'JZRY_JGSSXDM',
            text: '居住人员籍贯省市县代码',
            input: 'textbox',
            judge_dict: judge1,
            condition_dict: dictPath + 'GB_D_XZQHDMLIST.js',
            multiple: true
        },*/
        //{field: 'JZRY_HJD_DZXZ', text: '居住人员户籍地址', input: 'textbox', judge_dict: judge1},
        {field: 'JZRY_SFZHM', text: '承租人证件号码', input: 'textbox', judge_dict: judge4},
        {field: 'GSRY_XM', text: '出租人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'GSRY_CYM', text: '房屋归属人员曾用名', input: 'textbox', judge_dict: judge1},
        //{field: 'GSRY_CSRQ', text: '房屋归属人员出生日期', input: 'datebox', judge_dict: judge2, formatter: 'date10'},
        /*{
            field: 'GSRY_XBDM',
            text: '房屋归属人员性别',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'GB_D_XBDM.js',
            multiple: true
        },*/
        /*{
            field: 'GSRY_MZDM',
            text: '房屋归属人员民族',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'GB_D_MZDM.js',
            multiple: true
        },*/
        /*{
            field: 'GSRY_JGSSXDM',
            text: '房屋归属人员籍贯省市县代码',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'GB_D_XZQHDMLIST.js',
            multiple: true
        },*/
        //{field: 'GSRY_HJD_DZXZ', text: '房屋归属人员户籍地址', input: 'textbox', judge_dict: judge1},
        {field: 'GSRY_SFZHM', text: '出租人身份证号码', input: 'textbox', judge_dict: judge4},
        //{field: 'XT_CJSJ', text: '采集时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRSJ', text: '录入时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRRXM', text: '录入人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_LRRID', text: '录入人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
        //{field: 'XT_LRIP', text: '录入IP', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZHXGSJ', text: '最后修改时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_ZHXGRXM', text: '最后修改人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_ZHXGRID', text: '最后修改人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
        //{field: 'XT_ZHXGIP', text: '最后修改IP', input: 'textbox', judge_dict: judge1},
        {
            field: 'XT_ZXBZ',
            text: '注销标志',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_ZXBZDM.js',
            multiple: true
        },
        {field: 'XT_ZXYY', text: '注销原因', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZXYYBZ', text: '注销原因备注', input: 'textbox', judge_dict: judge1},
        {field: 'JZRY_LXDH', text: '承租人电话', input: 'textbox', judge_dict: judge1},
        {field: 'GSRY_LXDH', text: '出租人电话', input: 'textbox', judge_dict: judge1}
    ],

    SYFW_FWKZXX_CQRXXB_type: 'SYFW_FWKZXX_CQRXXB',
    SYFW_FWKZXX_CQRXXB_title: '实有房屋产权人信息',
    SYFW_FWKZXX_CQRXXB_init: [],    //默认显示的查询条件
    SYFW_FWKZXX_CQRXXB: [
        {field: 'XT_LRRXM', text: '录入人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_LRRID', text: '录入人ID', input: 'textbox', judge_dict: judge4},
        {field: 'XT_LRRBM', text: '录入人部门', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_LRRBMID', text: '录入人部门ID', input: 'textbox_org', judge_dict: judge9, isOrganization: true},
        //{field: 'XT_LRIP', text: '录入IP', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZHXGSJ', text: '最后修改时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_ZHXGRXM', text: '最后修改人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_ZHXGRID', text: '最后修改人ID', input: 'textbox', judge_dict: judge4},
        {field: 'XT_ZHXGRBM', text: '最后修改人部门', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_ZHXGRBMID', text: '最后修改人部门ID', input: 'textbox_org', judge_dict: judge9, isOrganization: true},
        //{field: 'XT_ZHXGIP', text: '最后修改IP', input: 'textbox', judge_dict: judge1},
        {
            field: 'XT_ZXBZ',
            text: '注销标志',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_ZXBZDM.js',
            multiple: true
        },
        {field: 'XT_ZXYY', text: '注销原因', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZXYYBZ', text: '注销原因备注', input: 'textbox', judge_dict: judge1},
        //{field: 'HKXZ', text: '户口性质', input: 'textbox', judge_dict: judge1},
        {
            field: 'FW_CQLXDM',
            text: '产权类型',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_FWCQLXDM.js',
            multiple: true
        },
        {field: 'FW_CQZH', text: '产权证号', input: 'textbox', judge_dict: judge1},
        {field: 'XM', text: '产权人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'CYM', text: '曾用名', input: 'textbox', judge_dict: judge1},
        //{field: 'CSRQ', text: '出生日期', input: 'datebox', judge_dict: judge2, formatter: 'date10'},
        {
            field: 'XBDM',
            text: '性别',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'GB_D_XBDM.js',
            multiple: true
        },
        {
            field: 'MZDM',
            text: '民族',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'GB_D_MZDM.js',
            multiple: true
        },
        /*{
            field: 'JGSSXDM',
            text: '籍贯省市县',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'GB_D_XZQHDMLIST.js',
            multiple: true
        },*/
        //{field: 'HJD_DZXZ', text: '户籍地址', input: 'textbox', judge_dict: judge1},
        {field: 'SFZHM', text: '身份证号码', input: 'textbox', judge_dict: judge4},
        {field: 'LXDH', text: '联系电话', input: 'textbox', judge_dict: judge1},
        {field: 'FWCS', text: '服务处所', input: 'textbox', judge_dict: judge1},
        {field: 'XJZDZXZ', text: '现居住地址', input: 'textbox', judge_dict: judge1},
        {field: 'DW_MC', text: '单位名称', input: 'textbox', judge_dict: judge1},
        {field: 'DW_LXDH', text: '单位联系电话', input: 'textbox', judge_dict: judge1},
        {field: 'DW_XXDZ', text: '单位详址', input: 'textbox', judge_dict: judge1},
        {field: 'DW_ZW', text: '单位_职务', input: 'textbox', judge_dict: judge1},
        {field: 'BZ', text: '备注', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_CJSJ', text: '采集时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRSJ', text: '录入时间', input: 'datebox', judge_dict: judge2}
    ],

    SYFW_FWRCJCB_type: 'SYFW_FWRCJCB',
    SYFW_FWRCJCB_title: '实有房屋_房屋日常检查',
    SYFW_FWRCJCB_init: [],    //默认显示的查询条件
    SYFW_FWRCJCB: [
        {field: 'FW_DZXZ', text: '房屋详址', input: 'textbox', judge_dict: judge1},
        {
            field: 'YWJZRYDM',
            text: '是否有居住人员',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_SFDM.js',
            multiple: true
        },
        {
            field: 'YWYCQKDM',
            text: '是否有异常情况',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_SFDM.js',
            multiple: true
        },
        {field: 'GLRY', text: '管理人员', input: 'textbox', judge_dict: judge1},
        {field: 'JCSJ', text: '检查时间', input: 'datebox', judge_dict: judge2, formatter: 'date10'},
        {field: 'BZ', text: '备注', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_CJSJ', text: '采集时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRSJ', text: '录入时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRRXM', text: '录入人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_LRRID', text: '录入人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
        //{field: 'XT_LRIP', text: '录入IP', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZHXGSJ', text: '最后修改时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_ZHXGRXM', text: '最后修改人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_ZHXGRID', text: '最后修改人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
        //{field: 'XT_ZHXGIP', text: '最后修改IP', input: 'textbox', judge_dict: judge1},
        {
            field: 'XT_ZXBZ',
            text: '注销标志',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_ZXBZDM.js',
            multiple: true
        },
        {field: 'XT_ZXYY', text: '注销原因', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZXYYBZ', text: '注销原因备注', input: 'textbox', judge_dict: judge1}
    ],


    SYFW_FWBZB_type: 'SYFW_FWBZB',
    SYFW_FWBZB_title: '实有房屋_房屋备注',
    SYFW_FWBZB_init: [],    //默认显示的查询条件
    SYFW_FWBZB: [
        {field: 'BZ', text: '备注', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_CJSJ', text: '采集时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRSJ', text: '录入时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_LRRXM', text: '录入人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_LRRID', text: '录入人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_LRRBMID',text:'录入人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_LRRBMID_SJ',fxj:'XT_LRRBMID_FXJ',pcs:'XT_LRRBMID_PCS',zrq:'XT_LRRBMID_ZRQ'}},
        //{field: 'XT_LRIP', text: '录入IP', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZHXGSJ', text: '最后修改时间', input: 'datebox', judge_dict: judge2},
        {field: 'XT_ZHXGRXM', text: '最后修改人姓名', input: 'textbox', judge_dict: judge1},
        //{field: 'XT_ZHXGRID', text: '最后修改人ID', input: 'textbox', judge_dict: judge4},
        {field:'XT_ZHXGRBMID',text:'最后修改人部门',input:'textbox_org',judge_dict: judge12,isOrganization:true,lishu:{sj:'XT_ZHXGRBMID_SJ',fxj:'XT_ZHXGRBMID_FXJ',pcs:'XT_ZHXGRBMID_PCS',zrq:'XT_ZHXGRBMID_ZRQ'}},
        //{field: 'XT_ZHXGIP', text: '最后修改IP', input: 'textbox', judge_dict: judge1},
        {
            field: 'XT_ZXBZ',
            text: '注销标志',
            input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_ZXBZDM.js',
            multiple: true
        },
        {field: 'XT_ZXYY', text: '注销原因', input: 'textbox', judge_dict: judge1},
        {field: 'XT_ZXYYBZ', text: '注销原因备注', input: 'textbox', judge_dict: judge1}
    ],

    /*syfw_analysis_type: 'syfw_analysis',
    syfw_analysis_title: '实有房屋_统计',
    syfw_analysis_init: [],    //默认显示的查询条件
    syfw_analysis: [
       // {field: 'JZRS_NUM', text: '居住人数', input: 'textbox', judge_dict: judge2},
        // {field: 'RCJC_NUM', text: '日常检查次数', input: 'textbox', judge_dict: judge2},
        /!*{
            field: 'SFYTP', text: '是否有图片', input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_SFDM.js',
            multiple: true
        }*!//!*,
        {
            field: 'RC_HAVE_PIC', text: '日常检查是否有图片', input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_SFDM.js',
            multiple: true
        },
        {
            field: 'HAVE_CZJL', text: '房屋是否采集出租信息', input: 'combobox',
            judge_dict: judge6,
            condition_dict: dictPath + 'BD_D_SFDM.js',
            multiple: true
        }*!/
    ],*/
};


//以下为测试数据
var search_result_test = {
    "count": 2298189,
    "msg": "success",
    "type": null,
    "took": 10378,
    "result": [{
        "JN_syfw_fwgdb": "{\"count\": 1, \"data\": [{\"XT_ZHXGRBM\": \"凤凰责任区\", \"FZBH\": \"5d3600f5277e4342b48a6a34af1ce076\", \"DZ_JB\": \"3\", \"XT_LRRXM\": \"黄强\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"XT_LRRID\": \"511002197603070610\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2016-07-30T15:18:35.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"_type\": \"syfw_fwgdb\", \"XT_ZHXGRXM\": \"黄强\", \"XT_CJSJ\": \"2016-07-30T15:18:35.000+0800\", \"XT_LRRBM\": \"凤凰责任区\", \"XT_ZHXGSJ\": \"2016-07-30T15:18:35.000+0800\", \"DZ_ID\": \"B62AE120727E4BA08ACF209D0C3E5FCF\", \"ID\": \"4007b41289114074b61aa52cd4dd6700\", \"IS_ZFW\": \"1\", \"IS_ZFWMC\": \"是\", \"_index\": \"\", \"FW_ID\": \"C01A7896D5FB47CBBE7B425A17906039\", \"DZ_XZ\": \"四川省内江市东兴区东兴大道908号\", \"_id\": \"4007b41289114074b61aa52cd4dd6700\"}]}",
        "FWDZ_DZID": "B62AE120727E4BA08ACF209D0C3E5FCF",
        "XT_ZHXGRBM": "凤凰责任区",
        "FWDZ_DZXZ": "四川省内江市东兴区东兴大道908号",
        "FW_YTDM": "3",
        "XT_LRRXM": "沈壮翔",
        "FW_GLDJDMMC": "重点管控类（A）",
        "BZ": "#BZ#",
        "XT_LRRBMID": "511011400000",
        "FW_SYLXDM": "2",
        "XT_LRRID": "511002198111070619",
        "FW_YTDMMC": "经营",
        "JN_syfw_fwjzxxb": "{\"count\": 2, \"data\": [{\"XT_ZHXGRBM\": \"凤凰责任区\", \"FWSY_SYLX\": \"2\", \"XT_LRRXM\": \"黄强\", \"GSRY_MZDM\": \"01\", \"BZ\": \"1212\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"XT_LRRID\": \"511002197603070610\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2016-07-30T14:59:24.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"_type\": \"syfw_fwjzxxb\", \"JZRY_XM\": \"213123\", \"XT_ZHXGRXM\": \"黄强\", \"XT_CJSJ\": \"2016-07-30T14:59:24.000+0800\", \"XT_LRRBM\": \"凤凰责任区\", \"FWSY_SYLXMC\": \"出租\", \"JZRY_SFZHM\": \"051101120160730251\", \"JZRY_SYRKID\": \"610d54201c214a81bd7a29284e5f076a\", \"GSRY_LXDH\": \"121122\", \"XT_ZHXGSJ\": \"2016-07-30T15:30:05.000+0800\", \"GSRY_ID\": \"452FC41ECB0349429FBD390FFEDF712D\", \"ID\": \"3555dbe872f44abf9b3f3af50eea9348\", \"GSRY_XBDMMC\": \"女\", \"JZRY_ID\": \"bcc38f2dd3324b5f9e39f00ddf9f5c38\", \"SF_QDZAZRS\": \"0\", \"GSRY_XM\": \"叶勇华\", \"_index\": \"\", \"FW_ID\": \"C01A7896D5FB47CBBE7B425A17906039\", \"GSRY_SFZHM\": \"511025198506104961\", \"SF_QDZAZRSMC\": \"否\", \"GSRY_XBDM\": \"2\", \"_id\": \"3555dbe872f44abf9b3f3af50eea9348\", \"GSRY_MZDMMC\": \"汉族\"}, {\"XT_ZHXGRBM\": \"凤凰责任区\", \"FWSY_SYLX\": \"2\", \"XT_LRRXM\": \"黄强\", \"GSRY_MZDM\": \"01\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"XT_LRRID\": \"511002197603070610\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2016-07-30T12:54:22.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"_type\": \"syfw_fwjzxxb\", \"JZRY_XM\": \"213123\", \"XT_ZHXGRXM\": \"黄强\", \"XT_CJSJ\": \"2016-07-30T12:54:22.000+0800\", \"XT_LRRBM\": \"凤凰责任区\", \"FWSY_SYLXMC\": \"出租\", \"JZRY_SFZHM\": \"051101120160730251\", \"JZRY_SYRKID\": \"610d54201c214a81bd7a29284e5f076a\", \"XT_ZHXGSJ\": \"2016-07-30T15:30:05.000+0800\", \"GSRY_ID\": \"D788CF3A42C54496B268787C2795741B\", \"ID\": \"84c616f3e02f40cfac728628a111eed4\", \"GSRY_XBDMMC\": \"男\", \"JZRY_ID\": \"bcc38f2dd3324b5f9e39f00ddf9f5c38\", \"SF_QDZAZRS\": \"0\", \"GSRY_XM\": \"钟兴福\", \"_index\": \"\", \"FW_ID\": \"C01A7896D5FB47CBBE7B425A17906039\", \"GSRY_SFZHM\": \"511002196511234134\", \"SF_QDZAZRSMC\": \"否\", \"GSRY_XBDM\": \"1\", \"_id\": \"84c616f3e02f40cfac728628a111eed4\", \"GSRY_MZDMMC\": \"汉族\"}]}",
        "XT_ZXYYBZ": "121212",
        "GXZRQDM": "5110114000002012082402424",
        "XT_ZHXGRBMID": "5110114000002012082402424",
        "XT_LRIP": "10.68.64.69",
        "XT_ZXBZ": "1",
        "XT_LRSJ": "2014-11-15T22:04:52.000+0800",
        "XT_ZXYY": "1",
        "XT_ZHXGRID": "511002197603070610",
        "_type": "syfw_fwjbxxb",
        "FWDZ_DZJB": "3",
        "XT_ZHXGRXM": "黄强",
        "XT_CJSJ": "2014-11-15T22:04:52.000+0800",
        "XT_LRRBM": "内江市公安局东兴区分局东兴派出所",
        "FW_SYLXDMMC": "一般租借",
        "XT_ZHXGSJ": "2016-07-30T15:30:05.000+0800",
        "GXSJDM": "511000000000",
        "ID": "C01A7896D5FB47CBBE7B425A17906039",
        "JN_syfw_fwkzxx_cqrxxb": "{\"count\": 4, \"data\": [{\"XBDM\": \"2\", \"XT_ZHXGRBM\": \"凤凰责任区\", \"MZDMMC\": \"汉族\", \"XT_LRRXM\": \"黄强\", \"LXDH\": \"2121211\", \"BZ\": \"121212其恶趣味额为全额\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"XT_LRRID\": \"511002197603070610\", \"XT_ZHXGRXM\": \"黄强\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"FWCS\": \"V1V1时装\", \"XT_ZXBZ\": \"1\", \"XBDMMC\": \"女\", \"XT_ZHXGRID\": \"511002197603070610\", \"FW_CQLXDMMC\": \"个人\", \"SFZHM\": \"511025198506104961\", \"_type\": \"syfw_fwkzxx_cqrxxb\", \"XM\": \"叶勇华\", \"XT_CJSJ\": \"2016-07-30T14:15:11.000+0800\", \"FW_CQZH\": \"112121A\", \"XT_LRRBM\": \"凤凰责任区\", \"MZDM\": \"01\", \"XT_LRSJ\": \"2016-07-30T14:15:11.000+0800\", \"DW_XXDZ\": \" \", \"XT_ZHXGSJ\": \"2016-07-30T15:30:05.000+0800\", \"ID\": \"e5b2a28dea5445559a588df61babe005\", \"DW_LXDH\": \" \", \"_index\": \"\", \"DW_ID\": \" \", \"FW_CQLXDM\": \"2\", \"FW_ID\": \"C01A7896D5FB47CBBE7B425A17906039\", \"XJZDZXZ\": \"四川省内江市资中县水南镇资州大道南一段146号20栋1单元7楼4号\", \"DW_MC\": \" \", \"_id\": \"e5b2a28dea5445559a588df61babe005\", \"RY_ID\": \"452FC41ECB0349429FBD390FFEDF712D\"}, {\"XBDM\": \"1\", \"XT_ZHXGRBM\": \"凤凰责任区\", \"DW_ZW\": \"11111\", \"MZDMMC\": \"汉族\", \"XT_LRRXM\": \"黄强\", \"LXDH\": \"028-86023046\", \"BZ\": \"测试备注\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"XT_LRRID\": \"511002197603070610\", \"XT_ZHXGRXM\": \"黄强\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"FWCS\": \"1+1茶园\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2016-07-30T12:40:56.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"FW_CQLXDMMC\": \"单位\", \"SFZHM\": \"511002196511234134\", \"_type\": \"syfw_fwkzxx_cqrxxb\", \"XM\": \"钟兴福\", \"XT_CJSJ\": \"2016-07-30T12:40:56.000+0800\", \"FW_CQZH\": \"asdwqwwqqw\", \"XT_LRRBM\": \"凤凰责任区\", \"MZDM\": \"01\", \"DW_XXDZ\": \"四川省内江市隆昌县胡家巷181号1栋1单元1楼1号\", \"XT_ZHXGSJ\": \"2016-07-30T15:30:05.000+0800\", \"ID\": \"a6869898bb3341ff9510ecf7e9fd5ff3\", \"DW_LXDH\": \"15884853245\", \"_index\": \"\", \"DW_ID\": \"3E32FBCB39354295A15B9F3CD8F333D1\", \"FW_CQLXDM\": \"1\", \"FW_ID\": \"C01A7896D5FB47CBBE7B425A17906039\", \"XBDMMC\": \"男\", \"XJZDZXZ\": \"四川省内江市东兴区太平村4组39号\", \"DW_MC\": \"1+1精品童装\", \"_id\": \"a6869898bb3341ff9510ecf7e9fd5ff3\", \"RY_ID\": \"D788CF3A42C54496B268787C2795741B\"}, {\"XT_ZHXGRBM\": \"凤凰责任区\", \"DW_ZW\": \"1\", \"XT_LRRXM\": \"黄强\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"XT_LRRID\": \"511002197603070610\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2016-07-30T14:27:05.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"FW_CQLXDMMC\": \"单位\", \"_type\": \"syfw_fwkzxx_cqrxxb\", \"XT_ZHXGRXM\": \"黄强\", \"XT_CJSJ\": \"2016-07-30T14:27:05.000+0800\", \"FW_CQZH\": \"02213\", \"XT_LRRBM\": \"凤凰责任区\", \"DW_XXDZ\": \"四川省内江市隆昌县胡家巷181号1栋1单元11楼\", \"XT_ZHXGSJ\": \"2016-07-30T15:30:05.000+0800\", \"ID\": \"cbc55862ed484a0b8142507a63562c71\", \"DW_LXDH\": \"13890524497\", \"_index\": \"\", \"DW_ID\": \"92FB98F53F1E4EF195CF4871F8BA4A00\", \"FW_ID\": \"C01A7896D5FB47CBBE7B425A17906039\", \"DW_MC\": \"牌坊1+1\", \"_id\": \"cbc55862ed484a0b8142507a63562c71\", \"FW_CQLXDM\": \"1\"}]}",
        "_index": "test2",
        "FW_GLDJDM": "1",
        "JN_syfw_fwrcjcb": "{\"count\": 11, \"data\": [{\"JCSJ\": \"2016-07-30T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市东兴区东兴大道908号\", \"XT_ZHXGRBM\": \"凤凰责任区\", \"YWYCQKDM\": \"1\", \"XT_LRRXM\": \"黄强\", \"YWJZRYDM\": \"1\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"YWJZRYDMMC\": \"是\", \"XT_LRRID\": \"511002197603070610\", \"YWYCQKDMMC\": \"是\", \"XT_CJSJ\": \"2016-07-30T15:27:37.000+0800\", \"BZ\": \"1221122121121211111111111\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2016-07-30T15:27:37.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"_type\": \"syfw_fwrcjcb\", \"XT_ZHXGRXM\": \"黄强\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"XT_LRRBM\": \"凤凰责任区\", \"GLRY\": \"黄强\", \"XT_ZHXGSJ\": \"2016-07-30T15:30:06.000+0800\", \"ID\": \"376f32701f87440e9db8815f47917f85\", \"_index\": \"\", \"FW_ID\": \"C01A7896D5FB47CBBE7B425A17906039\", \"_id\": \"376f32701f87440e9db8815f47917f85\"}, {\"JCSJ\": \"2015-05-18T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市东兴区东兴大道908号\", \"XT_ZHXGRBM\": \"凤凰责任区\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"陈飞宇\", \"YWJZRYDM\": \"0\", \"XT_LRRBMID\": \"511011400000\", \"YWJZRYDMMC\": \"否\", \"XT_LRRID\": \"511011198507256539\", \"XT_ZHXGRXM\": \"黄强\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"BZ\": \"2015年5月18日，经民警走访核实，无异常。\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2015-05-18T11:22:25.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"XT_LRIP\": \"10.68.64.69\", \"_type\": \"syfw_fwrcjcb\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2015-05-18T11:22:25.000+0800\", \"XT_LRRBM\": \"内江市公安局东兴区分局东兴派出所\", \"GLRY\": \"082913\", \"XT_ZHXGSJ\": \"2016-07-30T15:30:06.000+0800\", \"ID\": \"09C67CA2951A4F7B9FA70DF7ED21D5B6\", \"_index\": \"\", \"FW_ID\": \"C01A7896D5FB47CBBE7B425A17906039\", \"_id\": \"09C67CA2951A4F7B9FA70DF7ED21D5B6\"}, {\"JCSJ\": \"2015-06-11T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市东兴区东兴大道908号\", \"XT_ZHXGRBM\": \"凤凰责任区\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"陈飞宇\", \"YWJZRYDM\": \"0\", \"XT_LRRBMID\": \"511011400000\", \"YWJZRYDMMC\": \"否\", \"XT_LRRID\": \"511011198507256539\", \"XT_ZHXGRXM\": \"黄强\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"BZ\": \"2015年6月11日，经核实，该房屋无异常。\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2015-06-11T10:19:04.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"XT_LRIP\": \"10.68.64.69\", \"_type\": \"syfw_fwrcjcb\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2015-06-11T10:19:04.000+0800\", \"XT_LRRBM\": \"内江市公安局东兴区分局东兴派出所\", \"GLRY\": \"082913\", \"XT_ZHXGSJ\": \"2016-07-30T15:30:06.000+0800\", \"ID\": \"19580652784146D0BF5A1476C007C51E\", \"_index\": \"\", \"FW_ID\": \"C01A7896D5FB47CBBE7B425A17906039\", \"_id\": \"19580652784146D0BF5A1476C007C51E\"}]}",
        "GXFJDM": "511011000000",
        "_id": "C01A7896D5FB47CBBE7B425A17906039",
        "GXPCSDM": "511011400000"
    }, {
        "JN_syfw_fwgdb": "{\"count\": 1, \"data\": [{\"XT_ZHXGRBM\": \"凤凰责任区\", \"FZBH\": \"75bc2bdbdd884f2e8c62c8b073c8d981\", \"DZ_JB\": \"4\", \"XT_LRRXM\": \"黄强\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"XT_LRRID\": \"511002197603070610\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2016-07-30T16:11:57.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"_type\": \"syfw_fwgdb\", \"XT_ZHXGRXM\": \"黄强\", \"XT_CJSJ\": \"2016-07-30T16:11:57.000+0800\", \"XT_LRRBM\": \"凤凰责任区\", \"XT_ZHXGSJ\": \"2016-07-30T16:11:57.000+0800\", \"DZ_ID\": \"8DA9C2AC00A946BD9D7DD7973B1BAB59\", \"ID\": \"76a06ff36f9c4ea38a624ddca6b3604e\", \"IS_ZFW\": \"1\", \"IS_ZFWMC\": \"是\", \"_index\": \"\", \"FW_ID\": \"22b7a3e30633425ca04c655ee24debd9\", \"DZ_XZ\": \"四川省内江市东兴区兴盛路东段246号11栋\", \"_id\": \"76a06ff36f9c4ea38a624ddca6b3604e\"}]}",
        "FWDZ_DZID": "8DA9C2AC00A946BD9D7DD7973B1BAB59",
        "XT_ZHXGRBM": "凤凰责任区",
        "FW_LXDM": "1",
        "FWDZ_DZXZ": "四川省内江市东兴区兴盛路东段246号11栋",
        "SSXQ_ID": "E90C3100A90F46B4AACBB4A4ED6EEB06",
        "FW_YTDM": "1",
        "XT_LRRXM": "黄强",
        "FW_JGLXDMMC": "框架",
        "FW_GLDJDMMC": "常规管理类（C）",
        "XT_LRRBMID": "5110114000002012082402424",
        "FW_SYLXDM": "1",
        "XT_LRRID": "511002197603070610",
        "FW_YTDMMC": "居住",
        "JN_syfw_fwjzxxb": "{\"count\": 0, \"data\": []}",
        "ID": "22b7a3e30633425ca04c655ee24debd9",
        "GXZRQDM": "5110114000002012082402424",
        "XT_ZHXGRBMID": "5110114000002012082402424",
        "FW_LXDMMC": "1",
        "XT_ZXBZ": "0",
        "XT_LRSJ": "2016-07-30T15:49:24.000+0800",
        "FW_JS": "1",
        "XT_ZHXGRID": "511002197603070610",
        "_type": "syfw_fwjbxxb",
        "FWDZ_DZJB": "4",
        "XT_ZHXGRXM": "黄强",
        "XT_CJSJ": "2016-07-30T15:49:24.000+0800",
        "SSXQ_MC": "南亚风情",
        "XT_LRRBM": "凤凰责任区",
        "FW_SYLXDMMC": "自用",
        "XT_ZHXGSJ": "2016-07-30T15:49:46.000+0800",
        "GXSJDM": "511000000000",
        "FW_JGLXDM": "1",
        "JN_syfw_fwkzxx_cqrxxb": "{\"count\": 1, \"data\": [{\"XBDM\": \"1\", \"XT_ZHXGRBM\": \"凤凰责任区\", \"MZDMMC\": \"汉族\", \"XT_LRRXM\": \"黄强\", \"LXDH\": \"15228281099\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"XT_LRRID\": \"511002197603070610\", \"XT_ZHXGRXM\": \"江峰\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2016-07-30T16:17:58.000+0800\", \"XT_ZHXGRID\": \"511002196603180014\", \"FW_CQLXDMMC\": \"个人\", \"SFZHM\": \"511681198907102813\", \"_type\": \"syfw_fwkzxx_cqrxxb\", \"XM\": \"陈瑜\", \"XT_CJSJ\": \"2016-07-30T16:17:58.000+0800\", \"XBDMMC\": \"男\", \"XT_LRRBM\": \"凤凰责任区\", \"MZDM\": \"01\", \"DW_XXDZ\": \" \", \"XT_ZHXGSJ\": \"2016-08-01T18:05:21.000+0800\", \"ID\": \"63dbc9a232374c0899ebc3174d492265\", \"DW_LXDH\": \" \", \"_index\": \"\", \"DW_ID\": \" \", \"FW_CQLXDM\": \"2\", \"FW_ID\": \"22b7a3e30633425ca04c655ee24debd9\", \"XJZDZXZ\": \"四川省内江市东兴区东兴街107号1栋1单元1楼111号\", \"DW_MC\": \" \", \"_id\": \"63dbc9a232374c0899ebc3174d492265\", \"RY_ID\": \"3FB5A8A6EF4E459FACB2983B5008DE0A\"}]}",
        "_index": "test2",
        "FW_GLDJDM": "3",
        "JN_syfw_fwrcjcb": "{\"count\": 1, \"data\": [{\"JCSJ\": \"2016-07-30T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市东兴区兴盛路东段246号11栋\", \"XT_ZHXGRBM\": \"凤凰责任区\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"黄强\", \"YWJZRYDM\": \"0\", \"XT_LRRBMID\": \"5110114000002012082402424\", \"YWJZRYDMMC\": \"否\", \"XT_LRRID\": \"511002197603070610\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2016-07-30T16:12:10.000+0800\", \"BZ\": \"qwqwe1212\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2016-07-30T16:12:10.000+0800\", \"XT_ZHXGRID\": \"511002197603070610\", \"_type\": \"syfw_fwrcjcb\", \"XT_ZHXGRXM\": \"黄强\", \"XT_ZHXGRBMID\": \"5110114000002012082402424\", \"XT_LRRBM\": \"凤凰责任区\", \"GLRY\": \"黄强\", \"XT_ZHXGSJ\": \"2016-07-30T16:12:26.000+0800\", \"ID\": \"0e47822582244ae8b4fbbe8dfb23c6be\", \"_index\": \"\", \"FW_ID\": \"22b7a3e30633425ca04c655ee24debd9\", \"_id\": \"0e47822582244ae8b4fbbe8dfb23c6be\"}]}",
        "GXFJDM": "511011000000",
        "FW_MJ": "100",
        "_id": "22b7a3e30633425ca04c655ee24debd9",
        "GXPCSDM": "511011400000"
    }, {
        "JN_syfw_fwgdb": "{\"count\": 1, \"data\": [{\"XT_ZHXGRBM\": \"内江市公安局\", \"FZBH\": \"8fd3f1d733444e7d95dbb6630e7e7741\", \"DZ_JB\": \"3\", \"XT_LRRXM\": \"余毅\", \"XT_LRRBMID\": \"511000000000\", \"XT_LRRID\": \"513027196408240076\", \"XT_ZHXGRBMID\": \"511000000000\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2016-08-06T12:05:56.000+0800\", \"XT_ZHXGRID\": \"513027196408240076\", \"_type\": \"syfw_fwgdb\", \"XT_ZHXGRXM\": \"余毅\", \"XT_CJSJ\": \"2016-08-06T12:05:56.000+0800\", \"XT_LRRBM\": \"内江市公安局\", \"XT_ZHXGSJ\": \"2016-08-06T12:05:56.000+0800\", \"DZ_ID\": \"10d0f4ded8c64aedb7759154bf321c5e\", \"ID\": \"2232cca5a75240b981295698555e1859\", \"IS_ZFW\": \"1\", \"IS_ZFWMC\": \"是\", \"_index\": \"\", \"FW_ID\": \"0cec2e801dab435ea08a7d0b7f027c3c\", \"DZ_XZ\": \"四川省内江市东兴区红牌路中段501号\", \"_id\": \"2232cca5a75240b981295698555e1859\"}]}",
        "FWDZ_DZID": "10d0f4ded8c64aedb7759154bf321c5e",
        "FW_ZYLXDMMC": "整租房",
        "XT_ZHXGRBM": "内江市公安局",
        "FW_LXDM": "1",
        "FWDZ_DZXZ": "四川省内江市东兴区红牌路中段501号",
        "FW_YTDM": "1,2,3,4,5,6",
        "XT_LRRXM": "余毅",
        "FW_JGLXDMMC": "框架",
        "FW_GLDJDMMC": "常规管理类（C）",
        "XT_LRRBMID": "511000000000",
        "FW_SYLXDM": "3",
        "XT_LRRID": "513027196408240076",
        "FW_YTDMMC": "1,2,3,4,5,6",
        "JN_syfw_fwjzxxb": "{\"count\": 0, \"data\": []}",
        "ID": "0cec2e801dab435ea08a7d0b7f027c3c",
        "GXZRQDM": "511000000000",
        "XT_ZHXGRBMID": "511000000000",
        "FW_LXDMMC": "1",
        "XT_ZXBZ": "1",
        "XT_LRSJ": "2016-08-06T10:37:42.000+0800",
        "XT_ZXYY": "1",
        "XT_ZHXGRID": "513027196408240076",
        "FW_JCZQ": "01",
        "_type": "syfw_fwjbxxb",
        "JCZQ_END": "2016-08-15T00:00:00.000+0800",
        "FWDZ_DZJB": "3",
        "XT_ZHXGRXM": "余毅",
        "XT_CJSJ": "2016-08-06T10:37:42.000+0800",
        "XT_LRRBM": "内江市公安局",
        "FW_ZYLXDM": "1",
        "FW_SYLXDMMC": "其他租借",
        "XT_ZHXGSJ": "2016-08-09T10:03:36.000+0800",
        "GXSJDM": "511000000000",
        "FW_JGLXDM": "1",
        "JN_syfw_fwkzxx_cqrxxb": "{\"count\": 1, \"data\": [{\"XBDM\": \"1\", \"XT_ZHXGRBM\": \"内江市公安局\", \"DW_ZW\": \"省道\", \"MZDMMC\": \"汉族\", \"XT_LRRXM\": \"余毅\", \"XT_LRRBMID\": \"511000000000\", \"XT_LRRID\": \"513027196408240076\", \"XT_ZHXGRXM\": \"余毅\", \"XT_ZHXGRBMID\": \"511000000000\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2016-08-06T12:01:28.000+0800\", \"XT_ZHXGRID\": \"513027196408240076\", \"FW_CQLXDMMC\": \"单位\", \"SFZHM\": \"513027196408240076\", \"_type\": \"syfw_fwkzxx_cqrxxb\", \"XM\": \"余毅\", \"XT_CJSJ\": \"2016-08-06T12:01:28.000+0800\", \"XBDMMC\": \"男\", \"XT_LRRBM\": \"内江市公安局\", \"MZDM\": \"01\", \"DW_XXDZ\": \"无\", \"XT_ZHXGSJ\": \"2016-08-09T10:03:36.000+0800\", \"ID\": \"3c17eb87ae09401398399108ad19fa6e\", \"DW_LXDH\": \"15884853245\", \"_index\": \"\", \"DW_ID\": \"3E32FBCB39354295A15B9F3CD8F333D1\", \"FW_CQLXDM\": \"1\", \"FW_ID\": \"0cec2e801dab435ea08a7d0b7f027c3c\", \"XJZDZXZ\": \"四川省内江市东兴区新观街315号1栋1单元11楼1号\", \"DW_MC\": \"1+1精品童装\", \"_id\": \"3c17eb87ae09401398399108ad19fa6e\", \"RY_ID\": \"EB3CAAC958024427AB3E3CC733312AC5\"}]}",
        "_index": "test2",
        "FW_GLDJDM": "3",
        "JN_syfw_fwrcjcb": "{\"count\": 2, \"data\": [{\"JCSJ\": \"2016-08-06T12:05:22.000+0800\", \"FW_DZXZ\": \"四川省内江市东兴区红牌路中段501号\", \"XT_ZHXGRBM\": \"内江市公安局\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"余毅\", \"YWJZRYDM\": \"1\", \"XT_LRRBMID\": \"511000000000\", \"YWJZRYDMMC\": \"是\", \"XT_LRRID\": \"513027196408240076\", \"XT_ZHXGRXM\": \"余毅\", \"XT_ZHXGRBMID\": \"511000000000\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2016-08-06T12:05:22.000+0800\", \"XT_ZHXGRID\": \"513027196408240076\", \"_type\": \"syfw_fwrcjcb\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2016-08-06T12:05:22.000+0800\", \"XT_LRRBM\": \"内江市公安局\", \"GLRY\": \"余毅\", \"XT_ZHXGSJ\": \"2016-08-09T10:03:38.000+0800\", \"ID\": \"3f7de1f761854b2fa24c4651bc39e81f\", \"_index\": \"\", \"FW_ID\": \"0cec2e801dab435ea08a7d0b7f027c3c\", \"_id\": \"3f7de1f761854b2fa24c4651bc39e81f\"}, {\"JCSJ\": \"2016-08-06T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市东兴区红牌路中段501号\", \"XT_ZHXGRBM\": \"内江市公安局\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"余毅\", \"YWJZRYDM\": \"1\", \"XT_LRRBMID\": \"511000000000\", \"YWJZRYDMMC\": \"是\", \"XT_LRRID\": \"513027196408240076\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2016-08-06T13:36:33.000+0800\", \"BZ\": \"得分大幅阿道夫暗访阿道夫阿道夫啊发发啊分大方的安迪分\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2016-08-06T13:36:33.000+0800\", \"XT_ZHXGRID\": \"513027196408240076\", \"_type\": \"syfw_fwrcjcb\", \"XT_ZHXGRXM\": \"余毅\", \"XT_ZHXGRBMID\": \"511000000000\", \"XT_LRRBM\": \"内江市公安局\", \"GLRY\": \"余毅\", \"XT_ZHXGSJ\": \"2016-08-09T10:03:38.000+0800\", \"ID\": \"76a974f0c19946c3ab9e8af029d10f63\", \"_index\": \"\", \"FW_ID\": \"0cec2e801dab435ea08a7d0b7f027c3c\", \"_id\": \"76a974f0c19946c3ab9e8af029d10f63\"}]}",
        "JCZQ_BEGIN": "2016-07-15T00:00:00.000+0800",
        "_id": "0cec2e801dab435ea08a7d0b7f027c3c"
    }, {
        "JN_syfw_fwgdb": "{\"count\": 0, \"data\": []}",
        "FWDZ_DZID": "DE1753FA25F54F8ABF20DD7C9F93507F",
        "XT_ZHXGRBM": "威远县公安局严陵派出所",
        "FW_LXDM": "01",
        "FWDZ_DZXZ": "四川省内江市威远县严陵镇南街96号",
        "FW_YTDM": "3",
        "XT_LRRXM": "李刚",
        "FW_JGLXDMMC": "02",
        "FW_GLDJDMMC": "常规管理类（C）",
        "BZ": "#BZ#",
        "XT_LRRBMID": "511024400000",
        "FW_SYLXDM": "3",
        "XT_LRRID": "511024196303283810",
        "FW_YTDMMC": "经营",
        "JN_syfw_fwjzxxb": "{\"count\": 1, \"data\": [{\"JZRY_JGSSXDM\": \"511024\", \"XT_ZHXGRBM\": \"威远县公安局严陵派出所\", \"FWSY_SYLX\": \"2\", \"GSRY_CSRQ\": \"1976-09-16T00:00:00.000+0800\", \"GSRY_HJD_DZXZ\": \"四川省威远县界牌镇政府街１８９号\", \"XT_LRRXM\": \"胡德才\", \"GSRY_MZDM\": \"01\", \"BZ\": \"此房屋产权所属为：威远县第二人民医院  李泽朝 为威远县第二人民医院负责人\", \"XT_LRRBMID\": \"511024400000\", \"JZRY_XBDM\": \"2\", \"XT_LRRID\": \"51340119661012101X\", \"JZRY_MZDM\": \"01\", \"ID\": \"AE1509EA33A44F8FA3383B986A4D81D9\", \"XT_ZHXGRBMID\": \"511024400000\", \"XT_LRIP\": \"10.68.120.105\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2016-07-01T11:15:18.000+0800\", \"XT_ZHXGRID\": \"51340119661012101X\", \"JZRY_CSRQ\": \"1969-02-07T00:00:00.000+0800\", \"GSRY_XBDMMC\": \"男\", \"_type\": \"syfw_fwjzxxb\", \"FWSY_SYLXMC\": \"出租\", \"JZRY_XM\": \"黄群\", \"XT_ZHXGRXM\": \"胡德才\", \"GSRY_JGSSXDM\": \"511002\", \"XT_LRRBM\": \"威远县公安局严陵派出所\", \"JZRY_LXDH\": \"13551511999\", \"XT_CJSJ\": \"2016-07-01T11:15:18.000+0800\", \"JZRY_HJD_DZXZ\": \"四川省威远县严陵镇广场路２４２号１幢２单元２楼１号\", \"JZRY_SFZHM\": \"511024196902070024\", \"JZRY_SYRKID\": \"A0C43C3C06B4465A89B4E5A8B2F72E74\", \"GSRY_LXDH\": \"13990564416\", \"JZRY_XBDMMC\": \"女\", \"XT_ZHXGSJ\": \"2016-07-01T11:22:49.000+0800\", \"GSRY_ID\": \"6E8CA086FA22499C82812B0EC616D6E1\", \"JZRY_MZDMMC\": \"汉族\", \"XT_ZHXGIP\": \"10.68.120.105\", \"JZRY_ID\": \"E7AFC0AB0E2447758AA095304D91F125\", \"GSRY_XM\": \"李泽朝\", \"_index\": \"\", \"FW_ID\": \"F44B6B0F9BA14D93921B3B55332F9817\", \"GSRY_SFZHM\": \"51100219760916225X\", \"GSRY_XBDM\": \"1\", \"_id\": \"AE1509EA33A44F8FA3383B986A4D81D9\", \"GSRY_MZDMMC\": \"汉族\"}]}",
        "ID": "F44B6B0F9BA14D93921B3B55332F9817",
        "GXZRQDM": "5110244000002012081700399",
        "XT_ZHXGRBMID": "511024400000",
        "FW_LXDMMC": "单元楼",
        "XT_ZXBZ": "0",
        "XT_LRSJ": "2012-08-22T16:50:09.000+0800",
        "FW_JS": "1",
        "XT_ZHXGRID": "51340119661012101X",
        "_type": "syfw_fwjbxxb",
        "FWDZ_DZJB": "3",
        "XT_ZHXGRXM": "胡德才",
        "XT_CJSJ": "2012-08-22T16:50:09.000+0800",
        "XT_LRRBM": "威远县公安局严陵派出所",
        "FW_SYLXDMMC": "其他租借",
        "XT_ZHXGSJ": "2016-07-01T11:14:17.000+0800",
        "GXSJDM": "511000000000",
        "FW_JGLXDM": "02",
        "XT_ZHXGIP": "10.68.64.70",
        "JN_syfw_fwkzxx_cqrxxb": "{\"count\": 2, \"data\": [{\"DW_LXDH\": \"8216600\", \"_type\": \"syfw_fwkzxx_cqrxxb\", \"XT_LRRBMID\": \"511024400000\", \"XT_LRRID\": \"51340119661012101X\", \"_index\": \"\", \"XT_CJSJ\": \"2016-07-01T11:15:06.000+0800\", \"XT_LRSJ\": \"2016-07-01T11:15:06.000+0800\", \"FW_ID\": \"F44B6B0F9BA14D93921B3B55332F9817\", \"XT_LRRBM\": \"威远县公安局严陵派出所\", \"XT_LRRXM\": \"胡德才\", \"DW_MC\": \"威远县第二人民医院\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"DW_XXDZ\": \"四川省内江市威远县严陵镇外北路262号\", \"XT_ZHXGSJ\": \"2016-07-01T11:15:06.000+0800\", \"_id\": \"4DD7F07FEBBC48EAB679E0356BFECD1C\", \"FW_CQLXDM\": \"1\", \"ID\": \"4DD7F07FEBBC48EAB679E0356BFECD1C\", \"FW_CQLXDMMC\": \"单位\"}, {\"XBDM\": \"1\", \"XT_ZHXGRBM\": \"威远县公安局严陵派出所\", \"MZDMMC\": \"汉族\", \"XT_LRRXM\": \"李刚\", \"LXDH\": \"8232992\", \"BZ\": \"此产权人信息为管理人信息  \\n\\n2016年5月回访，袁和萍、丁全洪夫妻之子丁相程因车祸死亡，所以袁和萍夫妻二已将此地址门面停业并转让中。\", \"XT_LRRBMID\": \"511024400000\", \"XT_LRRID\": \"511024196303283810\", \"XM\": \"丁全洪\", \"XT_ZHXGRBMID\": \"511024400000\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"1\", \"XT_LRSJ\": \"2013-10-18T11:25:42.000+0800\", \"XT_ZHXGRID\": \"51340119661012101X\", \"FW_CQLXDMMC\": \"个人\", \"SFZHM\": \"511024196004280871\", \"CSRQ\": \"1960-04-28T00:00:00.000+0800\", \"_type\": \"syfw_fwkzxx_cqrxxb\", \"XT_ZHXGRXM\": \"胡德才\", \"XT_CJSJ\": \"2013-10-18T11:25:42.000+0800\", \"XBDMMC\": \"男\", \"XT_LRRBM\": \"威远县公安局严陵派出所\", \"MZDM\": \"01\", \"JGSSXDM\": \"511024\", \"XT_ZHXGSJ\": \"2016-05-17T22:12:17.000+0800\", \"ID\": \"8058BEF3514B4456AC4E9AD421E2154B\", \"XT_ZHXGIP\": \"10.68.64.70\", \"_index\": \"\", \"FW_CQLXDM\": \"2\", \"FW_ID\": \"F44B6B0F9BA14D93921B3B55332F9817\", \"XJZDZXZ\": \"四川省内江市威远县严陵镇粮丰村2组32号\", \"FWCS\": \"511024400000201310181521513143\", \"HJD_DZXZ\": \"四川省威远县严陵镇粮丰村２组３２号\", \"_id\": \"8058BEF3514B4456AC4E9AD421E2154B\", \"RY_ID\": \"500FAEF5A052429C8FA00D3312EDF433\"}]}",
        "_index": "test2",
        "FW_GLDJDM": "3",
        "JN_syfw_fwrcjcb": "{\"count\": 7, \"data\": [{\"JCSJ\": \"2015-10-20T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市威远县严陵镇南街96号\", \"XT_LRSJ\": \"2015-10-20T10:30:58.000+0800\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"胡德才\", \"YWJZRYDM\": \"0\", \"XT_LRRBMID\": \"511024400000\", \"YWJZRYDMMC\": \"否\", \"XT_LRRID\": \"51340119661012101X\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"_type\": \"syfw_fwrcjcb\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2015-10-20T10:30:58.000+0800\", \"XT_LRRBM\": \"威远县公安局严陵派出所\", \"GLRY\": \"039830\", \"XT_ZHXGSJ\": \"2015-10-20T10:30:58.000+0800\", \"ID\": \"696A4532AADD4BCDAB9CE9467858E779\", \"_index\": \"\", \"FW_ID\": \"F44B6B0F9BA14D93921B3B55332F9817\", \"BZ\": \"2015年10日20日,严陵所民警胡德才带领辅警黄军保对该房屋回访核实，未发现异常情况。  \", \"_id\": \"696A4532AADD4BCDAB9CE9467858E779\"}, {\"JCSJ\": \"2016-05-17T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市威远县严陵镇南街96号\", \"XT_ZHXGRBM\": \"威远县公安局严陵派出所\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"胡德才\", \"YWJZRYDM\": \"0\", \"XT_LRRBMID\": \"511024400000\", \"YWJZRYDMMC\": \"否\", \"XT_LRRID\": \"51340119661012101X\", \"XT_ZHXGRXM\": \"胡德才\", \"XT_ZHXGRBMID\": \"511024400000\", \"BZ\": \"2016年5月回访，袁和萍、丁全洪夫妻之子丁相程因车祸死亡，所以袁和萍夫妻二已将此地址门面停业并转让中。\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2016-05-17T22:08:23.000+0800\", \"XT_ZHXGRID\": \"51340119661012101X\", \"XT_LRIP\": \"10.68.64.70\", \"_type\": \"syfw_fwrcjcb\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2016-05-17T22:08:23.000+0800\", \"XT_LRRBM\": \"威远县公安局严陵派出所\", \"GLRY\": \"039830\", \"XT_ZHXGSJ\": \"2016-05-17T22:09:27.000+0800\", \"ID\": \"362C5FFE39F4489EA200F3CC3C9CD9F0\", \"XT_ZHXGIP\": \"10.68.64.70\", \"_index\": \"\", \"FW_ID\": \"F44B6B0F9BA14D93921B3B55332F9817\", \"_id\": \"362C5FFE39F4489EA200F3CC3C9CD9F0\"}, {\"JCSJ\": \"2016-07-01T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市威远县严陵镇南街96号\", \"XT_LRSJ\": \"2016-07-01T11:14:10.000+0800\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"胡德才\", \"YWJZRYDM\": \"0\", \"XT_LRRBMID\": \"511024400000\", \"YWJZRYDMMC\": \"否\", \"XT_LRRID\": \"51340119661012101X\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"_type\": \"syfw_fwrcjcb\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2016-07-01T11:14:10.000+0800\", \"XT_LRRBM\": \"威远县公安局严陵派出所\", \"GLRY\": \"039830\", \"XT_ZHXGSJ\": \"2016-07-01T11:14:10.000+0800\", \"ID\": \"EF5587ED749441AE91360385FC129A25\", \"_index\": \"\", \"FW_ID\": \"F44B6B0F9BA14D93921B3B55332F9817\", \"BZ\": \"2016年6月29日,严陵所民警胡德才带领辅警对该房屋回访核实，未发现异常情况。\", \"_id\": \"EF5587ED749441AE91360385FC129A25\"}]}",
        "GXFJDM": "511024000000",
        "FW_MJ": "12",
        "_id": "F44B6B0F9BA14D93921B3B55332F9817",
        "GXPCSDM": "511024400000"
    }, {
        "JN_syfw_fwgdb": "{\"count\": 0, \"data\": []}",
        "FWDZ_DZID": "BCD9A338FCA249C98961DF21E91C112C",
        "XT_ZHXGRBM": "威远县公安局城南派出所",
        "FW_LXDM": "01",
        "FWDZ_DZXZ": "四川省内江市威远县严陵镇人民路172号",
        "FW_YTDM": "3",
        "XT_LRRXM": "刘晓东",
        "FW_JGLXDMMC": "02",
        "FW_GLDJDMMC": "重点管控类（A）",
        "BZ": "#BZ#",
        "XT_LRRBMID": "511024600000",
        "FW_SYLXDM": "2",
        "XT_LRRID": "511011198208131752",
        "FW_YTDMMC": "经营",
        "JN_syfw_fwjzxxb": "{\"count\": 1, \"data\": [{\"JZRY_LXDH\": \"13158602862\", \"XT_ZHXGRBM\": \"威远县公安局城南派出所\", \"FWSY_SYLX\": \"2\", \"XT_LRRXM\": \"吴轩印\", \"XT_LRRBMID\": \"511024600000\", \"JZRY_XBDM\": \"1\", \"JZRY_MZDM\": \"01\", \"ID\": \"E43ED68F53C94A738F1CCB036C489297\", \"XT_ZHXGRBMID\": \"511024600000\", \"XT_LRIP\": \"10.68.120.99\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2014-09-16T17:15:12.000+0800\", \"JZRY_CSRQ\": \"1955-01-12T00:00:00.000+0800\", \"_type\": \"syfw_fwjzxxb\", \"JZRY_XM\": \"吉腾良\", \"XT_ZHXGRXM\": \"吴轩印\", \"XT_CJSJ\": \"2014-09-16T17:15:12.000+0800\", \"XT_LRRBM\": \"威远县公安局城南派出所\", \"FWSY_SYLXMC\": \"出租\", \"JZRY_HJD_DZXZ\": \"四川省威远县高石镇高石场正街２００号\", \"JZRY_SFZHM\": \"511024195501124090\", \"JZRY_SYRKID\": \"D86066B10E044CA2B4ADE4E5700E98DD\", \"JZRY_XBDMMC\": \"男\", \"XT_ZHXGSJ\": \"2014-09-16T17:15:12.000+0800\", \"JZRY_MZDMMC\": \"汉族\", \"XT_ZHXGIP\": \"10.68.120.99\", \"JZRY_ID\": \"9B69BBB50C3C412D8BECE98443F7B472\", \"SF_QDZAZRS\": \"0\", \"JZRY_JGSSXDM\": \"511024\", \"_index\": \"\", \"FW_ID\": \"184099D8A802440A84D3B11F9F6728AA\", \"SF_QDZAZRSMC\": \"否\", \"_id\": \"E43ED68F53C94A738F1CCB036C489297\"}]}",
        "ID": "184099D8A802440A84D3B11F9F6728AA",
        "GXZRQDM": "5110246000002012081600163",
        "XT_ZHXGRBMID": "511024600000",
        "FW_LXDMMC": "单元楼",
        "XT_ZXBZ": "0",
        "XT_LRSJ": "2012-08-23T15:36:49.000+0800",
        "FW_JS": "15",
        "XT_ZHXGRID": "511011198809303599",
        "_type": "syfw_fwjbxxb",
        "FWDZ_DZJB": "3",
        "XT_ZHXGRXM": "吴轩印",
        "XT_CJSJ": "2012-08-23T15:36:49.000+0800",
        "XT_LRRBM": "威远县公安局城南派出所",
        "FW_SYLXDMMC": "一般租借",
        "XT_ZHXGSJ": "2015-05-05T16:20:32.000+0800",
        "GXSJDM": "511000000000",
        "FW_JGLXDM": "02",
        "XT_ZHXGIP": "10.68.64.69",
        "JN_syfw_fwkzxx_cqrxxb": "{\"count\": 1, \"data\": [{\"XBDM\": \"1\", \"XT_ZHXGRBM\": \"威远县公安局城南派出所\", \"MZDMMC\": \"汉族\", \"XT_LRRXM\": \"聂其友\", \"LXDH\": \"15282148292\", \"BZ\": \"未提供产权信息\", \"XT_LRRBMID\": \"511024600000\", \"XT_LRRID\": \"511024197702255651\", \"XM\": \"吉腾良\", \"XT_ZHXGRBMID\": \"511024600000\", \"XT_LRIP\": \"10.68.64.69\", \"XT_ZXBZ\": \"0\", \"XT_LRSJ\": \"2013-09-06T15:40:20.000+0800\", \"XT_ZHXGRID\": \"511024197702255651\", \"FW_CQLXDMMC\": \"个人\", \"SFZHM\": \"511024195501124090\", \"CSRQ\": \"1955-01-12T00:00:00.000+0800\", \"_type\": \"syfw_fwkzxx_cqrxxb\", \"XT_ZHXGRXM\": \"聂其友\", \"XT_CJSJ\": \"2013-09-06T15:40:20.000+0800\", \"XBDMMC\": \"男\", \"XT_LRRBM\": \"威远县公安局城南派出所\", \"MZDM\": \"01\", \"JGSSXDM\": \"511024\", \"XT_ZHXGSJ\": \"2013-09-06T15:40:59.000+0800\", \"ID\": \"E20B346F32D942FD925178528AE13483\", \"XT_ZHXGIP\": \"10.68.64.69\", \"_index\": \"\", \"FW_CQLXDM\": \"2\", \"FW_ID\": \"184099D8A802440A84D3B11F9F6728AA\", \"XJZDZXZ\": \"四川省内江市威远县顺城街西外段222号45栋1单元2楼1号\", \"FWCS\": \"511024600000201209130933400373\", \"HJD_DZXZ\": \"四川省威远县高石镇高石场正街２００号\", \"_id\": \"E20B346F32D942FD925178528AE13483\", \"RY_ID\": \"9B69BBB50C3C412D8BECE98443F7B472\", \"HKXZ\": \"02\"}]}",
        "_index": "test2",
        "FW_GLDJDM": "1",
        "JN_syfw_fwrcjcb": "{\"count\": 8, \"data\": [{\"JCSJ\": \"2016-03-09T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市威远县严陵镇人民路172号\", \"XT_LRSJ\": \"2016-03-09T10:56:34.000+0800\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"张泽书\", \"YWJZRYDM\": \"0\", \"XT_LRRBMID\": \"511024600000\", \"YWJZRYDMMC\": \"否\", \"XT_LRRID\": \"511024195801034230\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"_type\": \"syfw_fwrcjcb\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2016-03-09T10:56:34.000+0800\", \"XT_LRRBM\": \"威远县公安局城南派出所\", \"GLRY\": \"039846\", \"XT_ZHXGSJ\": \"2016-03-09T10:56:34.000+0800\", \"ID\": \"14D5CC90CA8B4F51AD50BC9D74CF8E26\", \"_index\": \"\", \"FW_ID\": \"184099D8A802440A84D3B11F9F6728AA\", \"BZ\": \"2016年3月4日，经三河路社区民警张泽书、辅警杨峰对该辖区实有单位进行走访核实，该单位现暂无变动。\", \"_id\": \"14D5CC90CA8B4F51AD50BC9D74CF8E26\"}, {\"JCSJ\": \"2016-04-08T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市威远县严陵镇人民路172号\", \"XT_LRSJ\": \"2016-04-08T17:11:42.000+0800\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"张泽书\", \"YWJZRYDM\": \"0\", \"XT_LRRBMID\": \"511024600000\", \"YWJZRYDMMC\": \"否\", \"XT_LRRID\": \"511024195801034230\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"_type\": \"syfw_fwrcjcb\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2016-04-08T17:11:42.000+0800\", \"XT_LRRBM\": \"威远县公安局城南派出所\", \"GLRY\": \"039846\", \"XT_ZHXGSJ\": \"2016-04-08T17:11:42.000+0800\", \"ID\": \"E4FB531E2FD040CD85B0148B76E530AE\", \"_index\": \"\", \"FW_ID\": \"184099D8A802440A84D3B11F9F6728AA\", \"BZ\": \"2016年4月8日三河路社区核实此单位从业人员，暂无变动。\", \"_id\": \"E4FB531E2FD040CD85B0148B76E530AE\"}, {\"JCSJ\": \"2016-06-16T00:00:00.000+0800\", \"FW_DZXZ\": \"四川省内江市威远县严陵镇人民路172号\", \"XT_LRSJ\": \"2016-06-16T09:29:05.000+0800\", \"YWYCQKDM\": \"0\", \"XT_LRRXM\": \"张泽书\", \"YWJZRYDM\": \"0\", \"XT_LRRBMID\": \"511024600000\", \"YWJZRYDMMC\": \"否\", \"XT_LRRID\": \"511024195801034230\", \"XT_LRIP\": \"10.68.64.70\", \"XT_ZXBZ\": \"0\", \"_type\": \"syfw_fwrcjcb\", \"YWYCQKDMMC\": \"否\", \"XT_CJSJ\": \"2016-06-16T09:29:05.000+0800\", \"XT_LRRBM\": \"威远县公安局城南派出所\", \"GLRY\": \"039846\", \"XT_ZHXGSJ\": \"2016-06-16T09:29:05.000+0800\", \"ID\": \"F1D7B51DA2DF4058B8C8745C19390317\", \"_index\": \"\", \"FW_ID\": \"184099D8A802440A84D3B11F9F6728AA\", \"BZ\": \"2016年6月16日，经三河路社区致电15282134856该单位负责人陈学容提供；该单位从业人员暂无变动。\", \"_id\": \"F1D7B51DA2DF4058B8C8745C19390317\"}]}",
        "GXFJDM": "511024000000",
        "FW_MJ": "350",
        "_id": "184099D8A802440A84D3B11F9F6728AA",
        "GXPCSDM": "511024600000"
    }]
}