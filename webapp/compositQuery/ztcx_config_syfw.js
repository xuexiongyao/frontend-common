/*专题查询配置*/
function ListConfig(){
	//默认配置项,显示的表头和查询条件
    this.table_head_init = ['FW_GLDJDM','RYQBHC','FWDZ_DZXZ','FW_SYLXDM','JCSJ','GXDWDM_ORGNAME','FWHC_NUM','ZHHCSJ','XT_LRSJ'];

    //表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件','翻译程序']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.table_head_config = {
        FW_GLDJDM:{inputType:'combobox',text:'管理等级',dict:portal + '/common/dict/BD_D_GLDJDM.js',width:50,isQuery:true,isShow:true},
        RYQBHC:{inputType:'combobox',text:'人员全部核查',dict:portal + '/common/dict/BD_D_SFDM.js',width:50,isQuery:true,isShow:false},
        FWDZ_DZXZ:{inputType:'textbox',text:'房屋地址',width:90,isQuery:true,isShow:true,isFuzzy:true},
        JCSJ:{inputType:'datebox',text:'检查时间',width:50,isQuery:true,endName:'JCSJEND',isShow:false,formatter:'date19'},
        GXDWDM_ORGNAME:{inputType:'textbox_org',text:'管辖单位',width:100,isQuery:true,isShow:false},
        FWHC_NUM:{inputType:'textbox_condition',text:'核查次数',width:50,isQuery:true,otherCondition:'condition3',isShow:true},
        ZHHCSJ:{inputType:'datebox',text:'最后核查时间',width:50,isQuery:false,isShow:true,formatter:'date19',isTime19:true},
        FW_SYLXDM:{inputType:'combobox',text:'房屋使用类型',dict:portal + '/common/dict/BD_D_FWSYLXDM.js',width:50,isQuery:false,isShow:true},
        XT_LRSJ:{inputType:'datebox',text:'录入时间',width:50,isQuery:true,endName:'XT_LRSJEND',isShow:true,formatter:'date19'}
    };
    
    this.export_url = basePath+'cetcQuery/exportExcel2003/ztcxSyfw';
}