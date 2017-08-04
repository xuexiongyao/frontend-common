/*专题查询配置*/
function ListConfig(){
	//默认配置项,显示的表头和查询条件
    this.table_head_init = ['DWMC','GLDJ','GLDJDM','SSPCSMC','JCSJ','GXDWDM_ORGNAME','DZ_DWDZXZ','DWHC_NUM','ZHHCSJ','XT_LRSJ'];

    //表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件','翻译程序']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.table_head_config = {
		GLDJ:{inputType:'combobox',text:'管理等级',dict:portal + '/common/dict/BD_D_GLDJDM.js',width:100,isQuery:false,isShow:true},
        GLDJDM:{inputType:'combobox',text:'管理等级',dict:portal + '/common/dict/BD_D_GLDJDM.js',width:100,isQuery:true,isShow:false},
        DWMC:{inputType:'textbox',text:'单位名称',width:90,isQuery:true,isShow:true,isFuzzy:true},
        DZ_DWDZXZ:{inputType:'textbox',text:'单位地址',width:90,isQuery:true,isShow:true,isFuzzy:true},
        JCSJ:{inputType:'datebox',text:'检查时间',width:100,isQuery:true,endName:'JCSJEND',isShow:false,formatter:'date19'},
        GXDWDM_ORGNAME:{inputType:'textbox_org',text:'管辖单位',width:100,isQuery:true,isShow:false},
        SSPCSMC:{inputType:'textbox',text:'所属派出所',width:90,isQuery:false,isShow:true},
        DWHC_NUM:{inputType:'textbox_condition',text:'核查次数',width:50,isQuery:true,otherCondition:'condition3',isShow:true},
        ZHHCSJ:{inputType:'datebox',text:'最后核查时间',width:100,isQuery:false,isShow:true,isTime19:true,formatter:'date19'},
        XT_LRSJ:{inputType:'datebox',text:'录入时间',width:50,isQuery:true,endName:'XT_LRSJEND',isShow:true,formatter:'date19'}
    };
    
    this.export_url = basePath+'cetcQuery/exportExcel2003/ztcxSydw';    
}