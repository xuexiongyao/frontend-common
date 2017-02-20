/**
 * Created by zhuwei on 2016/10/27.
 */

function ListConfig(){
    //默认配置项,显示的表头和查询条件
    this.init = ['ajmc','asjflwsmc','xyrxm','badwGajgmc','fjrxm','cqrq','lczt'];

    //表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.config = {
        ajmc:['textbox','案件名称',null,100,true],
        asjflwsmc:['textbox','呈请报告名称',null,100,true],
        xyrxm:['textbox','嫌疑人姓名',null,100,true],
        fjrxm:['textbox','发件人',null,100,true],
        badwGajgmc:['textbox','办案单位',null,150,true],
        cqrq:['datetimebox','呈报时间',null,100,true],
        lczt:['combobox','流程是否结束',pathConfig.mainPath+'/common/dict/BD_D_SFDM.js',100,true]
    };
}
