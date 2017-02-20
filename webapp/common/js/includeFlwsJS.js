/**
 * Created by christ on 2017/2/20.
 */
//1.2.3在includeCSS.js中
var jwzhVersionIJS = jwzhVersion;
var staticPathIJS = staticPath || pathConfig.staticPath || 'http://static.jwzh.com:7777/jwzh';
//3.easyui相关资源文件
document.write('<script src="'+staticPathIJS+'/common/flws/flwsCommon.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/flws/flws_dict_config.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/flws/flwsRuleConfig.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/flws/flwsRequest.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/flws/flwsCommonRequest.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/flws/flwsRender.js?v='+jwzhVersionIJS+'"></script>');
document.write('<script src="'+staticPathIJS+'/common/flws/flwsContorl.js?v='+jwzhVersionIJS+'"></script>');
