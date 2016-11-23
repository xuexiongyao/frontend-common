
//版本管理获取最新版本号进行对比,如果变化则强制刷新页面
var jwzhVersion = '1.0.0.4';                       //项目更新时手动修改版本号
var staticPath = 'http://static.jwzh.com:7777/jwzh';//注意:请同步修改pathConfig.js中的路径!!!
var pathname = location.pathname;


var jwzhVersionOld =  localStorage.getItem(pathname);
if(jwzhVersionOld){
    if(jwzhVersionOld != jwzhVersion){
        console.log('当前页面地址:',pathname,'版本已更新:'+jwzhVersion);
        /*if(confirm('当前系统版本已更新,是否获取最新页面?')){
            //localStorage.setItem(pathname, jwzhVersion);
            //location.reload(true);
        }*/
    }
}else{
    console.log('初始存储版本号:',jwzhVersion);
    localStorage.setItem(pathname, jwzhVersion);
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