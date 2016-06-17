/**
 * Created by zhuwei on 2016/4/8.
 */
/*本文件存放js中需要用到的各项配置信息*/

function ListConfig(){
    //实有人口默认配置项,显示的表头和查询条件
    this.syrk_table_head_init = ['cyzjdm','zjhm','xm','xbdm'];

    //实有人口表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应

    this.syrk_table_head_config = {
        xm:['textbox','姓名',null,100,true],
        cyzjdm:['combobox','证件类型',null,100,true],
        zjhm:['textbox','证件号码',null,100,true],
        xbdm:['combobox','性别',null,100,true],
        mzdm:['combobox','民族',null,100,true],
        csrq:['datebox','出生日期',null,100,true],
        jggjdm:['combobox','籍贯国家',null,100,true],
        jgssxdm:['combobox','籍贯',null,100,true],
        hjd_dzxz:['textbox','户籍地址',null,200,true],
        jzd_dzxz:['textbox','居住地址',null,200,true],
        cym:['textbox','曾用名',null,100,true]
    };



    
    //人员核查默认配置项,显示的表头和查询条件
    this.ryhc_table_head_init = ['hcqkdm','glry'];


    //人员核查表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.ryhc_table_head_config = {
    	'jzd_dzxz':['textbox','居住地址',null,200,true],
    	'hcqkdm':['combobox','核查情况',null,100,true],
    	'hcsj':['datebox','核查时间',null,100,true],
    	'glry':['textbox','管理人员',null,100,true],
    };
    
}



