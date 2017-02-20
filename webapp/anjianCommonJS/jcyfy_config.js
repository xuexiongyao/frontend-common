/*本文件存放js中需要用到的各项配置信息*/
function ListConfig(){

    /****操作日志****/
    this.init = ['fzxyr_xm','pfywlxdm','jdlxdm'];
    //实有人口表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.config = {
        fzxyr_xm:['textbox','犯罪嫌疑人姓名',null,100,false],
        pfywlxdm:['combotree','批复业务类型',pathConfig.mainPath + '/common/dict/BD_D_PFYWLXDM.js',100,true],
        jdlxdm:['combobox','决定类型',pathConfig.mainPath + '/common/dict/BD_D_PZJDLXDM.js',100,true],
    };
}