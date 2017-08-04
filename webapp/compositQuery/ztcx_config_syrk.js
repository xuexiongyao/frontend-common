/*专题查询配置*/
function ListConfig(){
    //默认配置项,显示的表头和查询条件
    this.table_head_init = ['ZJHM','XM','XBDM','CSRQ','MZDM','JZD_DZXZ','GXDW_ORGNAME','GLDJDM','HCSJ','XT_LRSJ','RYHC_NUM','HCQKDM','BZ','ZHHCSJ'];

    //表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件','翻译程序']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.table_head_config = {
        XM:{inputType:'textbox',text:'姓名',width:90,isQuery:false,isShow:true},
        CYZJDM:{inputType:'combobox',text:'证件类型',dict:portal+'/common/dict/KX_D_CYZJDM.js',width:100,isQuery:false,isShow:true},
        ZJHM:{inputType:'textbox',text:'证件号码',width:100,isQuery:false,isShow:true},
        MZDM:{inputType:'combobox',text:'民族',dict:portal + '/common/dict/GB_D_MZDM.js',width:50,isQuery:false,isShow:true},
        CSRQ:{inputType:'datebox',text:'出生日期',width:100,isQuery:false,endName:'csrqend',isShow:true,formatter:'date10'},
        //JGSSXDM:{inputType:'combobox',text:'籍贯',dict:portal + '/common/dict/GB_D_XZQHDMLIST.js',width:100,isQuery:false,isShow:true},
        HJD_DZXZ:{inputType:'textbox',text:'户籍地址',width:200,isQuery:false,func:'address',isShow:true},
        JZD_DZXZ:{inputType:'textbox',text:'居住地址',width:200,isQuery:true,func:'address',isShow:true,isFuzzy:true},
        CYM:{inputType:'textbox',text:'曾用名',width:100,isQuery:false,isShow:true},
        //GJDQDM:{inputType:'combobox',text:'国家地区',dict:portal + '/common/dict/GB_D_GJHDQDM.js',width:100,isQuery:false,isShow:true},
        XBDM:{inputType:'combobox',text:'性别',dict:portal + '/common/dict/GB_D_XBDM.js',width:50,isQuery:false,isShow:true},
        GXDW_ORGNAME:{inputType:'textbox_org',text:'管辖单位',width:100,isQuery:true,isShow:false},
        GLDJDM:{inputType:'combobox',text:'管理等级',dict:portal + '/common/dict/BD_D_GLDJDM.js',width:100,isQuery:true,isShow:false},
        HCSJ:{inputType:'datebox',text:'核查时间',width:100,isQuery:true,endName:'HCSJEND',isShow:false,formatter:'date10'},
        XT_LRSJ:{inputType:'datebox',text:'轨迹创建时间',width:100,isQuery:true,endName:'XT_LRSJEND',isShow:false,formatter:'date10'},
        XT_ZXBZ:{inputType:'combobox',text:'注销标志',dict:portal+'/common/dict/BD_D_ZXBZDM.js',width:100,isQuery:true,isShow:false},
        RYHC_NUM:{inputType:'textbox_condition',text:'核查次数',width:50,isQuery:true,otherCondition:'condition3',isShow:true},
        HCQKDM:{inputType:'combobox',text:'核查情况',dict:portal+'/common/dict/BD_D_HCQKDM.js',width:100,isQuery:true,isShow:false},
        BZ:{inputType:'combobox',text:'备注是否为空',dict:portal+'/common/dict/BD_D_SFDM.js',width:100,isQuery:true,isShow:false},
		ZHHCSJ:{inputType:'datebox',text:'最后核查时间',width:100,isQuery:false,isShow:true,formatter:'date19',isTime19:true}
    };
    
    this.export_url = basePath+'cetcQuery/exportExcel2003/ztcxSyrk';
}