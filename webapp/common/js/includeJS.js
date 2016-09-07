/*js*/
var jwzhVersion = '1.0.0.t7'; //手动修改版本号
setCookie('jwzhVersion',jwzhVersion,30);
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/easyui/locale/easyui-lang-zh_CN.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/easyui/jquery.easyui.extend.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/easyui/jquery.easyui.extend.validatebox.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/js/tools.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/js/business.tools.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/js/windowTopPage.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/js/messenger.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/js/common.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/js/ajax.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/datepicker/WdatePicker.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/easyui/jquery.dragsort-0.5.2.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/easyui/jquery.linkCss.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/easyui/jquery.easyui.extend.tabs.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/easyui/jquery.form.js?v='+jwzhVersion+'"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/map/map.js"></script>');
document.write('<script src="http://static.jwzh.com:7777/jwzh/common/map/mapApi.js"></script>');

function setCookie(c_name,value,expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+	((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}