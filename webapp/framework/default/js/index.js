
    //函数调用
$(function () {
    iframeUrl();    //绑定iframe的url
    ucmPosi();      //用户中心位置函数
    branchChange(); //切换分局
    handleTab();    //操作Tab,右键,双击等右键功能
    menuNav();      //右上角菜单导航按钮
    logout();
    bgiChangeWin();//更换背景
    addNewModel();//模拟新增模块
    $('body').css('visibility','visible');
    //拖动模块
    $('.gridly').gridly({
        base: 60, // px
        gutter: 20, // px
        columns: 15
    });

});

//logout
function logout(){
    $('#logout').click(function(){
        location.href = logoutPath;
    });
}
//窗口改变时调用
$(window).resize(function () {
    ucmPosi();
});


//绑定iframe的url,防止多次请求页面
function iframeUrl(){
    $("#loadingMsk").fadeOut(50);
    $('#home_page_ifr').prop('src','<%=basePath%>/forward/home');
}

//菜单导航
function menuNav(){
    //加载菜单
    var menu_obj =
    {
        '基层基础' : {'标准地址':'url','实有人口':'url2','实有单位':'url3'},
        '执法办案' : {'行政案件':'url','禁毒案件':'url2'}
    };
    var i = 0;
    for(var key in menu_obj){
        var html_li = '<li>'
            +'<a class="listTitle" href="javascript:;">'+key+'</a>'
            +'<div class="liListAll" id="list_'+i+'"></div>'
            +'</li>';
        $('#menu_ul').append(html_li);
        for(var _key in menu_obj[key]){
            var html_a = '<a href="javascript:addTab(\''+_key+'\',\''+_key+'\',\''+_key+'\');" >'+_key+'</a>';
            $('#list_'+i).append(html_a);
        }
        i++;
    }
    var search = {};
    for(var k  in menu_obj){
        for( var j in menu_obj[k]){
            search[j] = menu_obj[k][j];
        }
    }

    console.log('搜索的内容:',search);

    //点击导航按钮
    $("#menu_btn").on('click', function (e) {
        e.stopPropagation();
        $("#menuNavWin").stop().slideToggle('fast').click(function(_e){
            _e.stopPropagation();
        });
        $(".menuNavWin .menuUl li .liListAll").show();
        //初始化显示菜单
        $("#menuNavWin ul li:first").mouseover();
    });

    //显示二级菜单
    $("#menuNavWin ul li").on('mouseover', function () {
        //左侧
        $(this).addClass('li-active').siblings().removeClass("li-active");
        //右侧
        $(this).find(".liListAll").show();
        $(this).siblings().find(".liListAll").hide()
    });

    //点击主框架其他区域,收起菜单
    $(window).on('click',function(){
        slideUpNav();
    });
    //输入关键字
    $("#iptSearch").on('keyup',function(){
        searchMenu($(this).val());
    });
    //点击搜索
    $('#search_btn').click(function(){
        searchMenu($('#iptSearch').val());
    });
    //清空关键字
    $('#clear_words').click(function(){
        $("#iptSearch").val('');
        $(".menuUl").show();
        $("#searchBox").hide();
    });
}

//搜索菜单
function searchMenu(_keywords){
    var key_words = $.trim(_keywords);
    if(key_words == ''){
        $(".menuUl").show();
        $("#searchBox").hide();
    }else{
        $(".menuUl").hide();
        $("#searchBox").show();
    }
}
//收起导航菜单
function slideUpNav(){
    $("#menuNavWin").stop().slideUp('fast');
}

//用户中心位置
function ucmPosi(){
    var _w = $(window).width();
    var ucm = $(".userCenterModel");
    var ucmX = ucm.offset().left;
    var ucmY = ucm.offset().top;
    var mr = ucm.width()+$(".loginOut").width()+50;
    $(".branchChange").css({
        'width': ucm.width() + 'px',
        'top': (ucmY+50) + 'px',
        'left':  (_w - mr) + 'px'
    });
    $(".menuNavWin").css({
        'top': (ucmY+50) + 'px',
        'right': (mr+20) + 'px'
    })
}
//绑定Tab菜单事件:右键等
function handleTab(){
    //tabs绑定右键功能
    $('.tabs-inner').off().on({
        //右键事件
        contextmenu: function (e) {
            e.preventDefault();
            //右键菜单div,main.jsp页面中
            $("#rightKeyTab").menu('show',
                {
                    left: e.pageX,
                    top: e.pageY
                }
            );
            return false;
        }
    });

    //选择菜单按钮
    $("#rightKeyTab").menu({
        onClick: function(item) {
            var tab_mark = item.id;
            closeTabs(tab_mark);
        }
    });

    var openTabTitle = '主页';       //定义唯一不被关闭的窗口title
    //选择关闭tab的方式
    function closeTabs(tab_mark){
        var scTabs = $('#frameTabs');//tabs节点
        var allTabs = scTabs.tabs('tabs');//所有的tab
        var currentTab = scTabs.tabs('getSelected');//当前的tab
        var allTabTitles = [];      //所有tab的title

        $.each(allTabs, function (i,o) {
            allTabTitles.push($(o).panel('options').title);
        });

        switch (tab_mark){
            case 'closeCurrentTab'://关闭当前
                var currentTabTitle = currentTab.panel('options').title;
                //console.log(currentTabTitle);
                scTabs.tabs('close',currentTabTitle);
                break;
            case 'closeAll':        //关闭所有
                $.each(allTabTitles,function (i,o) {
                    if(o != openTabTitle){
                        scTabs.tabs('close',o);
                    }
                });
                break;
            case 'closeNotCurrent'://关闭除此之外的其他
                var currentTabTitle = currentTab.panel('options').title;
                $.each(allTabTitles, function (i,o) {
                    if(o != openTabTitle && o != currentTabTitle){
                        scTabs.tabs('close',o);
                    }
                });
                break;
            case 'closeLeft':       //关闭左侧所有
                var tabIndex = scTabs.tabs('getTabIndex',currentTab);
                if(tabIndex == 1){
                    alert('左边没有窗口咯，亲！');
                    return false;
                }

                $.each(allTabTitles, function (i,o) {
                    if(tabIndex > i){
                        if(o != openTabTitle){
                            scTabs.tabs('close',o);
                        }
                    }
                });

                break;
            case 'closeRight'://关闭右侧所有
                var tabIndex = scTabs.tabs('getTabIndex',currentTab);

                if(tabIndex == allTabs.length - 1){
                    alert('右边没有窗口咯，亲！');
                    return false;
                }
                $.each(allTabTitles, function (i,o) {
                    if(tabIndex < i){
                        if(o != openTabTitle){
                            scTabs.tabs('close',o);
                        }
                    }
                });
                break;
            case 'exit'://退出
                $('#rightKeyTab').menu('hide');
                break;
        }
    }
}
//切换分局
function branchChange(){
    var bc = $("#branchChangeWin");
    $("#branchChange").on('click',function(){
        bc.stop(true).show();
    });
    bc.hover(function () {},
        function () {
            bc.stop(true).hide();
        }
    );
    bc.find('a').on('click', function () {
        $(".userZone span").html($(this).text());
        $(this).parent().stop(true).show();
    });
}
//更换背景图片窗口弹出
function bgiChangeWin(){
    $('#bgiChange').on('click', function () {
        $("#bgiWindow").window('open');
    });
}

//add new model
function addNewModel(){
    $(document).on('click','#addNewModel',function (e) {
        e.preventDefault();
        e.stopPropagation();
        var data = {
            imgName: 'icon_4.png',
            proTitle: 'Test'
        };
        var str =
            '<li class="s-squareBox">'+
            '<a href="javascript:;">'+
            '<img src="<%=basePath%>/framework/default/images/'+data.imgName+'" alt="icon">'+
            '<div class="boxTitle">'+data.proTitle+'</div>'+
            '</a>'+
            '</li>';

        //                console.log($(this).before(str));
        $(this).closest('.gridly').append(str);

        return $('.gridly').gridly('layout');
    });
}

//open new model
function newModel(){
    $(document).on('click touchend','.boxes li', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var title = $(this).find('.boxTitle').text();

        if($(this).attr('id')== 'addNewModel'){
            return false;
        }else{
            if($(this).find('.boxText').length>0){
                var title = $(this).find('i').text();
            }
            crossAddTab(title,'demo.html');
        }

        return $('.gridly').gridly('layout');
    });
}