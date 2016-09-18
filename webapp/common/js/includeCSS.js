
/******静态资源路径,和版本号配置********/
var staticPath = 'http://static.jwzh.com:7777';
var jwzhVersion = '1.0.0.t9';
console.log('静态资源链接和版本号:',staticPath,jwzhVersion);
/***END***/


/*css*/
document.write('<link rel="stylesheet" href="'+staticPath+'/jwzh/common/easyuiDiy/easyui.css?">');
document.write('<link rel="stylesheet" href="'+staticPath+'/jwzh/common/easyuiDiy/icon.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/jwzh/common/easyuiDiy/font-awesome.min.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/jwzh/common/datepicker/skin/christ/datepicker.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/jwzh/stylesheets/newItemStyle.css?v='+jwzhVersion+'">');
document.write('<link rel="stylesheet" href="'+staticPath+'/jwzh/stylesheets/common.css?v='+jwzhVersion+'">');