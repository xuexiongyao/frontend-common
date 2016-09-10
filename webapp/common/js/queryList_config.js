/**
 * Created by zhuwei on 2016/4/8.
 */
//查询页面测试配置文件   TEST
function ListConfig(){
    var portal = 'http://www.jwzh.com:9016/jwzh-main';
    //默认配置项,显示的表头和查询条件
    this.init = ['zjhm','xm','xbdm','jzd_dzxz'];

    //表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.config = {
        xm:['textbox','姓名',null,100,true],
        cyzjdm:['combobox','证件类型',portal+'/common/dict/KX_D_CYZJDM.js',100,true],
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
        xbdm:['combobox','性别',portal + '/common/dict/GB_D_XBDM.js',100,true]
    };
}
