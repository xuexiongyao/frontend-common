
/******静态资源路径,和版本号配置********/
var staticPath = 'http://static.jwzh.com:7777/jwzh';
var jwzhVersion = '1.0.0.t11';
//console.log('静态资源链接和版本号:',staticPath,jwzhVersion);
/*********END***********************/

//版本管理获取最新版本号进行对比,如果变化则强制刷新页面
var pathname = location.pathname;
if(jwzhVersion){
    if(!getCookie(pathname) || getCookie(pathname) != jwzhVersion){
        setCookie(pathname,jwzhVersion,300);
        console.log('测试版本提示: 版本已经升级,页面将重新加载一次最新资源文件..版本号:'+jwzhVersion);
        location.reload(true);
    }
}


/*css*/
document.write('<link rel="stylesheet" href="'+staticPath+'/common/easyuiDiy/easyui.css?">');
document.write('<link rel="stylesheet" href="'+staticPath+'/common/easyuiDiy/icon.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/common/easyuiDiy/font-awesome.min.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/common/datepicker/skin/christ/datepicker.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/stylesheets/newItemStyle.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/stylesheets/common.css?v='+jwzhVersion+'">');


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