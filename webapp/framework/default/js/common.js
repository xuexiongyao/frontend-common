$(function(){
    //父框架接收子框架的消息
    var parent_frame = new Messenger('parent','toParent');
    parent_frame.listen(
        function(msg){
            //console.log('父框架接收到的消息',msg);
            try{
                eval(msg);  //执行父框架中存在的方法
            }catch(e){
                console.log('父框架接收消息提示:',msg + ' is not a function');
            }
        }
    );
});

function reLogin(){
    location.href = loginPath;
}

/*跨域请求子页面
 * 1.msg_obj:消息对象,包含消息状态和消息内容
 * 2.iframe: 接收消息的子框架对象
 * */
function crossRequestIframe(msg_obj,iframe){
    var messenger = new Messenger('parent','toIframe');
    var _msg = JSON.stringify(msg_obj);
    sendToMain(_msg);
    function sendToMain(msg){
        messenger.addTarget(iframe.contentWindow,'iframe');
        messenger.targets['iframe'].send(msg);
    }
}


/*获取门户网站的url
 * 1.tab_id:需要获取url的的tabID
 * */
function iframJump(tab_id){
    var iframe = $('#'+tab_id).find('iframe')[0];
    var msg = {
        status : 'page_jump',
        content : jump_url
    };
    crossRequestIframe(msg,iframe);
}


/*打开添加Tab页
 * 1.title:Tab页的Title
 * 2.url : Tab页的url
 * 3.tab_id
 * 4.return_tab_id
 * 5.此方法会在跨域打开中执行
 * */
function addTab(title,url,tab_id,return_tab_id,fn_name){
    //console.log('addTab参数:',arguments);
    if(!title || !url || !tab_id){
        alert('addTab 缺少必要参数!');
        return false;
    }
    //判断title是否存在,存在的话添加标示符号
    var new_title = returnTitle(title);
    //判断tab_id是否存在和选择
    if ($('#frameTabs').tabs('existsById', tab_id)){ //存在,切换
        $('#frameTabs').tabs('selectById', tab_id);
    } else {                                    //不存在,新建
        var content = '' +
            '<iframe scrolling="hidden" frameborder="0" return_tab_id="'+return_tab_id+'"' +
            'src="'+url+'" style="width:100%;height: 100%;"> ' +
            '</iframe>';
        $('#frameTabs').tabs('add',{
            title:new_title,
            content:content,
            closable:true,
            id : tab_id
            //icon: icon    //图标
        });
    }

    //调用打开或选择的tab中的方法
    if(fn_name){
        //添加或选择的iframe
        var iframe = $('#'+tab_id).find('iframe')[0];
        var fn_name = return_fn_name.split(',');
        for(var i=0;i<fn_name.length;i++){
            var _fn_name = fn_name[i];
            var msg = {
                status : 'run_fn',
                content : 'window.return_fn.'+_fn_name+'()'
            };
            crossRequestIframe(msg,iframe);
        }
    }
    handleTab();        //绑定菜单事件:右键,双击等
}

//递归方式给Tab的相同title +1,以示区分;
function returnTitle(title){
    var new_title = title;
    if ($('#frameTabs').tabs('exists', title)){
        var plus_pos = title.indexOf('+');
        if(plus_pos == -1){
            new_title = title + '+1';
        }else{
            var title_last_num = parseInt(title.substring(title.length - 1));
            var title_pre = title.substr(0,title.length - 1);
            new_title = title_pre + (title_last_num + 1);
        }
        return returnTitle(new_title);
    }else{
        return new_title;
    }
}

//获取当前tabID,上个tabID发送到子框架,该方法由子框架加载完成后发送的消息来调用
function getTabIdToIframe(){
    $('#frameTabs>.tabs-panels>.panel').each(function(){
        var display = $(this).css('display');
        var select_id = $(this).children().attr('id');
        if(display == 'block'){
            var iframe = $('#'+select_id).find('iframe')[0];
            var return_tab_id = $('#'+select_id).find('iframe').attr('return_tab_id');
            var msg = {
                status : 'get_tab_id',
                content : select_id+','+ return_tab_id
            };
            //console.log('当前页面:'+select_id,'返回页面:'+return_tab_id);
            crossRequestIframe(msg,iframe);
        }
    });
}

/*关闭当前窗口,切换到自定义窗口并执行目的窗口中的函数
 * 1.return_tab_id:返回的TabID
 * 2.return_fn_name:返回Tab中的方法名(执行),多个方法名用","隔开
 * 3.此方法由子框架发送的消息来执行
 * */
function closeTabRefreshOther(return_tab_id,return_fn_name){
    var fraTabs = $("#frameTabs");      //获取tabs容器
    var allTabs = fraTabs.tabs('tabs'); //所有tabs面板
    //获取所有tabs的title数组
    var allTitles = [];
    $.each(allTabs,function (i,o) {
        allTitles.push($(o).panel('options').title);
    });
    var currentTab = fraTabs.tabs('getSelected');                 //当前tab对象(obj)
    var currentTabIndex = fraTabs.tabs('getTabIndex',currentTab); //当前tab索引(index)
    var currentTabTitle = allTitles[currentTabIndex];             //当前tab标题(title)

    if(return_tab_id == '' || return_tab_id == false || return_tab_id == 'undefind' || return_tab_id == 'null'){
        alert('closeTabRefreshOther(return_tab_id,return_fn_name)中没有return_tab_id');
    }else{
        if(fraTabs.tabs('existsById',return_tab_id)){
            fraTabs.tabs('selectById',return_tab_id);
            if(return_fn_name){
                var return_iframe = $('#'+return_tab_id).find('iframe')[0];
                //同域下调用iframe中的某个方法
                //return_iframe[0].contentWindow['return_fn'][return_fn_name]();

                //使用跨域方法执行返回后的方法,多个方法名用","隔开
                var fn_name = return_fn_name.split(',');
                for(var i=0;i<fn_name.length;i++){
                    var _fn_name = fn_name[i];
                    var msg = {
                        status : 'run_fn',
                        content : 'window.return_fn.'+_fn_name+'()'
                    };
                    crossRequestIframe(msg,return_iframe);
                }
            }
            fraTabs.tabs('close',currentTabTitle);//关闭当前标签
        }else{
            //返回的页面被人为关闭
            console.log('本该返回的Tab被您手动关掉了!!!',return_tab_id);
        }
    }
}