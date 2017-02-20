/**
 * Created by christ on 2016/9/26.
 */

/*本文件存放js中需要用到的各项配置信息*/
function ListConfig(){
    //默认配置项,显示的表头和查询条件
    this.init = ['AJMC','ASJFLWSMC', 'XYRXM','CQZT','XT_LRSJ','CQRQ'];

    //表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.config = {
        AJMC:['textbox','案件名称',null,100,true],
        ASJFLWSMC:['textbox','呈请报告名称',null,100,true],
        XYRXM:['textbox','嫌疑人姓名',null,100,true],
        CQZT:['combobox','呈请状态',pathConfig.mainPath + '/common/dict/BD_D_CQZTDM.js',100,true],
        XT_LRSJ:['datebox','录入时间',null,100,true],
        CQRQ:['datebox','呈请日期',null,100,true]
    };
}