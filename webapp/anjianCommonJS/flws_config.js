/**
 * Created by christ on 2016/8/1.
 */

/*本文件存放js中需要用到的各项配置信息*/
function ListConfig(){
    //var portal = 'http://www.jwzh.com:9016/jwzh-main';
    //默认配置项,显示的表头和查询条件
    this.init = ['ajmc','flwsmc','xyrxm','xt_lrrbm','fjrxm','cqrq'];

    //表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.config = {
        ajmc:['textbox','案件名称',null,100,true],
        flwsmc:['textbox','呈请报告名称',null,100,true],
        //ywbm:['textbox','业务类型',null,100,true],
        xyrxm:['textbox','嫌疑人姓名',null,100,true],
        fjrxm:['textbox','发件人',null,100,true],
        xt_lrrbm:['textbox','呈请单位',null,150,true],
        cqrq:['datebox','呈报时间',null,100,true],
        /*cyzjdm:['combobox','证件类型',portal+'/common/dict/KX_D_CYZJDM.js',100,true],
        zjhm:['textbox','证件号码',null,100,true],
        xt_zxbz:['combobox','数据类型',portal+'/common/dict/BD_D_ZXBZDM.js',100,true],
        mzdm:['combobox','民族',portal + '/common/dict/GB_D_MZDM.js',100,true],
        csrq:['datebox','出生日期',null,100,true],
        csrqend:['datebox','出生日期结束日期',null,100,true],
        jgssxdm:['combobox','籍贯',portal + '/common/dict/GB_D_XZQHDMLIST.js',100,true],
        hjd_dzxz:['textbox','户籍地址',null,200,true,'address'],
        jzd_dzxz:['textbox','居住地址',null,200,true,'address'],
        cym:['textbox','曾用名',null,100,true],
        gjdqdm:['combobox','国家地区',portal + '/common/dict/GB_D_GJHDQDM.js',100,true],
        xbdm:['combobox','性别',portal + '/common/dict/GB_D_XBDM.js',100,true]*/
    };
}