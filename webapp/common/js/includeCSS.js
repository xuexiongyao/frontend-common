
//版本管理获取最新版本号进行对比,如果变化则强制刷新页面
var jwzhVersion = '1.0.0.t1';                       //项目更新时手动修改版本号
var staticPath = 'http://static.jwzh.com:7777/jwzh';//注意:请同步修改pathConfig.js中的路径!!!
var pathname = location.pathname;
if(jwzhVersion){
    if(!getCookie(pathname) || getCookie(pathname) != jwzhVersion){
        setCookie(pathname,jwzhVersion,300);
        console.log('系统升级, 当前版本号为:'+jwzhVersion);
        //location.reload(true);
    }
}
//静态资源路径

//1.各个子项目的路径
document.write('<script src="'+staticPath+'/common/js/pathConfig.js?v='+jwzhVersion+'"></script>');

//2.公共CSS文件
document.write('<link rel="stylesheet" href="'+staticPath+'/common/easyuiDiy/easyui.css?">');
document.write('<link rel="stylesheet" href="'+staticPath+'/common/easyuiDiy/icon.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/common/easyuiDiy/font-awesome.min.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/common/datepicker/skin/christ/datepicker.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/stylesheets/newItemStyle.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/stylesheets/common.css?v='+jwzhVersion+'">');

//3,4,5... 在includeJS.js文件中

//获取cookie值
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
//写入到Cookie
//c_name:cookie名称,value:cookie值,expiredays:过期天数
function setCookie(c_name,value,expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+	((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}