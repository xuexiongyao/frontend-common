//1.2.3在includeCSS.js中
console.log(pathConfig);

var jwzhVersionIJS = jwzhVersion;
var staticPathIJS = staticPath || pathConfig.staticPath || 'http://static.jwzh.com:7777/jwzh';
//3.easyui相关资源文件
document.write('<script src="'+staticPathIJS+'/common/easyui/locale/easyui-lang-zh_CN.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/easyui/jquery.easyui.extend.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/easyui/jquery.easyui.extend.validatebox.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/easyui/jquery.easyui.extend.tabs.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/easyui/jquery.form.js?v='+jwzhVersionIJS+'"></script>');

//4.第三方插件
document.write('<script src="'+staticPathIJS+'/common/datepicker/WdatePicker.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/easyui/jquery.dragsort-0.5.2.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/easyui/jquery.linkcss.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/map/map.js"></script>');
document.write('<script src="'+staticPathIJS+'/common/map/mapApi.js"></script>');

//5.自定义函数(方法)
document.write('<script src="'+staticPathIJS+'/common/js/function.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/js/tools.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/js/business.tools.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/js/windowTopPage.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/js/messenger.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/js/common.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/js/ajax.js?v='+jwzhVersionIJS+'"></script>');
