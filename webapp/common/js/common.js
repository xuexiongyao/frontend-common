/**
 * Created by zhuwei on 2016/3/25.
 */

var current_tab_id = null;
var return_tab_id = null;
var staticPath = 'http://static.jwzh.com:7777/jwzh';
document.write('<script src="'+staticPath+'/common/js/function.js?v=1.0.0.1"></script>');
$(function () {
    //版本管理获取最新版本号进行对比,如果变化则强制刷新页面
    var test_version = window.localStorage.jwzhVersion;
    var pathname = location.pathname;
    //console.log(pathname,localStorage[pathname],test_version);
    if(test_version){
        //console.log('test_version存在',test_version);
        if(!window.localStorage[pathname] || window.localStorage[pathname] != test_version){
            window.localStorage[pathname] = test_version;
            console.log('调试测试: 版本已经升级,页面将重新加载一次最新资源文件');
            //location.reload(true);
        }
    }



    //加载完成后,发送消息到父框架获取当前TabID和上一个TabID
    if (typeof window_type == 'undefined') {
        try {
            crossRequestParent('getTabIdToIframe()');
        }catch(e) {
            console.log('getTabIdToIframe not defined')
        }
    } else {
        if (window_type != 'open_url') {
            try {
                crossRequestParent('getTabIdToIframe()');
            }catch(e) {
                console.log('getTabIdToIframe not defined')
            }
        }
    }
    //优化页面渲染效果,避免出现easyui渲染过程
    $('body').css('visibility', 'visible');

    //clickWindow();//点击子框架页面document

    //接收父框架的请求
    var iframeWindow = new Messenger('iframe', 'toIframe');
    iframeWindow.listen(
        function (_msg) {
            //console.log('子框架接收到的消息:',_msg);
            var msg = eval('(' + _msg + ')');
            var status = msg.status;
            var content = msg.content;
            if (status == 'run_fn') { //执行函数
                try {
                    eval(content);
                } catch (e) {
                    console.log('toIframe提示:,请确认页面中 ' + content + ' is not a function');
                }
            } else if (status == 'get_tab_id') {
                var content_arr = content.split(',');
                current_tab_id = content_arr[0];
                return_tab_id = content_arr[1];
                //console.log('当前tabID:',current_tab_id,'返回tabID:',return_tab_id);
            } else if (status == 'page_jump') {
                location.href = msg.content;
            } else {
                alert('msg.status err');
            }
        }
    );
});
