/**
 * Created by christ on 2016/8/1.
 */

/*本文件存放js中需要用到的各项配置信息*/
function ListConfig(){
    //默认配置项,显示的表头和查询条件
    this.init = ['ajmc','flwsmc','xyrxm','xt_lrrbm','fjrxm','cqrq'];

    //表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.config = {
        ajmc:['textbox','案件名称',null,100,true],
        flwsmc:['textbox','呈请报告名称',null,100,true],
        xyrxm:['textbox','嫌疑人姓名',null,100,true],
        fjrxm:['textbox','发件人',null,100,true],
        xt_lrrbm:['textbox','呈请单位',null,150,true],
        cqrq:['datetimebox','呈报时间',null,100,true],
    };
}