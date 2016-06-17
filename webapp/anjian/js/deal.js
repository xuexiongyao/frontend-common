//create by jessie
$(function(){
    var init = {
        //列表数据展示
        list_table_id : 'case_table',
        list_init : 'syrk_table_head_init',
        list_config : 'syrk_table_head_config'

    };

    //虚拟数据
    var self_data = [{cyzjdm:"111",zjhm:"610324198802205073",xm:"郑爽",xbdm:"2"},{cyzjdm:"111",zjhm:"610324198802205073",xm:"郑爽",xbdm:"2"}];

    var config = new ListConfig();
    var list_init = config[init.list_init];
    var list_config = config[init.list_config];

    var query_params = {};  //初始化查询条件
    var table_header_info = list_init;

    var processData = [{'panel':[
        {'name':'不予调查处理'},
        {'name':'终止案件调查决定书'},
        {'name':'移送'},
        {'name':'转刑事案件'}
    ]},{'panel':[
        {'name':'不予调查处理','child':[{'name':'转刑事案件'},{'name':'移送'}]}
    ]},{'panel':[
        {'name':'传唤证'},
        {'name':'询问/讯问笔录'},
        {'name':'检查证'},
        {'name':'_____笔录'},
        {'name':'调取证据通知书','child':[{'name':'调取证据清单'}]},
        {'name':'鉴定聘请书'},
        {'name':'证据保全决定书','child':[{'name':'证据保全清单'}]}
    ]},{'panel':[
        {'name':'治安调解协议书'},
        {'name':'不予行政处罚决定书'},
        {'name':'社区戒毒/社区康复决定书','child':[{'name':'解除社区戒毒/社区康复决定书'}]},
        {'name':'收缴/追缴物品清单'},
        {'name':'强制隔离戒毒','child':[{'name':'延长强制隔离戒毒'},{'name':'解除强制隔离戒毒'}]},
        {'name':'责令______通知书'},
        {'name':'收容教育','child':[{'name':'延长收容教育决定书'},{'name':'提前解除收容教育决定书'}]}
    ]},{'panel':[
        {'name':'行政处罚告知笔录','child':[
            {'name':'公安行政处罚决定书','child':[{'name':'没收违法所得、非法财物清单'}]},
            {'name':'不予受理听证通知书'},
            {'name':'举行听证通知书','child':[{'name':'听证笔录'},{'name':'听证报告书'}]}]}
    ]},{'panel':[
        {'name':'拘留审查/延长拘留审查','child':[{'name':'解除拘留审查决定书'}]},
        {'name':'限制活动范围决定书'},
        {'name':'遣送出境决定书'}
    ]},{'panel':[
        {'name':'催告书'},
        {'name':'行政强制执行决定书'},
        {'name':'代履行决定书'},
        {'name':'强制执行申请书'},
        {'name':'暂缓执行行政拘留决定书','child':[{'name':'强制执行申请书','child':[
            {'name':'强制执行申请书'},{'name':'强制执行申请书'}]},
            {'name':'强制执行申请书'}]}
    ]},{'panel':[
        {'name':'权限分配'},
        {'name':'执行情况'},
        {'name':'材料扫描'},
        {'name':'电子卷宗'},
        {'name':'短信告知'}
    ]}];

    var panleId = '#process_panel';

    slide();
    setTable();
    pageClick();
    editSwitch(false,'clear-border');
    sliderHandle();
    drawPanel();

    //画业务面板
    function drawPanel(){
        for(var i = 0; i < processData.length; i ++){
            var dis = 'none';
            if(i == 0){
                dis = ' block';
            }
            var p = '<div class="processPanel" id="panel'+i+'" style="display: '+dis+'"></div>';
            $(panleId).append(p);
            drawTree('#panel'+i,processData[i].panel,20,90,120);
        }
    }

    //业务办理的流程框
    function drawTree(processId,data,distance,boxWidth,leftDistance){
        distance = distance || 20;
        boxWidth = boxWidth || 100;
        leftDistance = leftDistance || 0;
        var html = '<div class="start-circle"></div>'
            +'<div class="process-line across0" style="width: '+((data.length-0.5)*(distance+boxWidth)+(leftDistance-1+distance/2))+'px"></div>'
            +'<div class="part" style="margin-left: '+leftDistance+'px"></div>';
        for(var i = 0; i < data.length; i++){
            var name = data[i].name;
            var child = '';
            name = box(name);
            if(data[i].child){
                child = drawChild(data[i].child);
            }
            html  += '<div class="part" style="margin-left: '+distance+'px;width: '+boxWidth+'px">'
                    +'<div class="process-line vertical0"></div>'
                    +name+child
                    +'</div>';
        }
        $(processId).append(html);
        function drawChild(data){
            var lllen = data.length;
            var lchild = '<div class="process-line vertical0"></div>'
                +'<div class="row1" style="width: '+((boxWidth+distance)*lllen)+'px;margin-left: '+(-(boxWidth+distance)/2*(lllen-1)-distance)+'px">'
                +'<div class="process-line across1" style="margin-left: '+((boxWidth+distance)/2+(distance/2-1))+'px;width: '+((boxWidth+distance)*(lllen-1))+'px"></div>';
            for(var k = 0; k < lllen; k++){
                var name11 = data[k].name;
                var llchild = '';
                name11 = box(name11);
                if(data[k].child){
                    llchild = drawChild(data[k].child);
                }
                lchild += '<div class="part" style="margin-left: '+distance+'px;width: '+boxWidth+'px">'
                    +'<div class="process-line vertical1"></div>'
                    +name11+llchild
                    +'</div>';
            }
            lchild += '</div>';
            return lchild;
        }
        function box(name){
            var len = name.length;
            if(len > 7){
                var text = name.substring(0,parseInt(len/2));

                name = '<p style="margin: 0;padding: 0;margin-top: 3px;">'+text+'</p><p style="margin: 0;padding: 0;margin-bottom: 3px;">'+name.replace(text,'')+'</p>';
            }else{
                name = '<p style="margin: 0;padding: 0;line-height: 38px;">'+name+'</p>';
            }
            return '<div class="box">'+name+'</div>';
        }
    }

    //导航滑块处理
    function sliderHandle(){
        sliderEndsCircle();     //添加导航滑块上的圆圈
        var target = $('#nav_btn');
        var slider_height = target.height() - 10;
        $('#nav_slider').slider({
            height : slider_height,
            max:slider_height
        });

        target.find('li').off('click').on('click',function(){
            var h = $(this)[0].offsetTop;
            var scroll_top = $('#nav_btn').scrollTop();
            var value = h - scroll_top - 2;

            $('#nav_slider').slider('setValue',value);
            target.find('li').removeClass('active');
            $(this).addClass('active');
            //$('html,body').animate({scrollTop:$(this).offset().top-35},300);
            var fl = $(this).attr('fl');
            var t = $('div[floor='+fl+']');
            if(t.length >0){
                var panel = $('#panel_one');
                panel.animate({scrollTop:(t.offset().top+panel.scrollTop()-35)},300);
            }
        });
    }

    //页面点击事件
    function pageClick(){
        //点击编辑按钮
        $('#person_edit').on('click',function(){
            $(this).hide();
            $('#btn_area').show();
            $('#info_hide').show();
            $('#shou_qi').show();
            $('#zhan_kai').hide();
            editSwitch(true,'clear-border');
        });
        //点击取消按钮
        $('#return_tab').on('click',function(){
            $('#person_edit').show();
            $('#btn_area').hide();
            editSwitch(false,'clear-border');
        });
        //点击导航栏按钮
        $('.process-nav').find('a').on('click',function(){
            $('.process-nav').find('a').removeClass('active');
            $(this).addClass('active');
            var num = $(this).attr('no');
            $('.processPanel').hide();
            $('#panel'+num).show();
        });
        //点击已办任务和流程跟踪切换按钮
        $('.nav-btn').find('a').on('click',function(){
            $('.nav-btn').find('a').removeClass('active');
            $(this).addClass('active');
        });
        //点击展开按钮
        $('#zhan_kai').on('click',function(){
            $(this).hide();
            $('#shou_qi').show();
            $('#info_hide').show();
        });
        //点击收起按钮
        $('#shou_qi').on('click',function(){
            $(this).hide();
            $('#zhan_kai').show();
            $('#info_hide').hide();
        });
        //点击呈请报告等切换面板
        $('.ajbl-nav').find('a').on('click',function(){
            if($(this).hasClass('gray')){
                $(this).removeClass('gray').addClass('title');
            }
            $('.ajbl-nav').find('.title').removeClass('active');
            $(this).addClass('active');
            $('.thr-panel').hide();
            $('#thr_'+$(this).attr('no')).show();
        });
        //点击行政处罚决定书的违法嫌疑人
        $('.choose-list').find('li').on('click',function(){
            $('.choose-list').find('li').removeClass('active');
            $(this).addClass('active');
        });
    }

    //生成表格数据
    function setTable(){
        //生成表头信息
        var length = table_header_info.length;
        var thead_arr = [];//表头数组
        //thead_arr[0] = {title : '案件类别',field : 'type',align : 'center',width : 100};
        thead_arr[length] = {
            title : '操作',
            field : 'process',
            width : 100,
            align : 'center'
            //formatter : datagridProcessFormater
        };

        for(var i = 0;i<length;i++){
            var _field = table_header_info[i];
            var _title = list_config[_field];

            //生成表头
            var info_obj;
            if(_title[2] == null){
                info_obj = {title:_title[1],field:_field,align:'center',width:_title[3]};
            }else{
                info_obj = {title:_title[1],field:_field,align:'center',width:_title[3],formatter:dictFormatter,dictName:_title[2]};
            }
            thead_arr[i] = info_obj;
        }

        //配置并生成表格
        $('#'+init.list_table_id).datagrid({
            //url : init.list_table_url,
            columns : [thead_arr],
            striped : true,
            queryParams: query_params,
            singleSelect:true,
            nowrap:true,
            scrollbarSize: 0,
            fitColumns : true,  //列宽度自适应
            selectOnCheck : false,
            checkOnSelect : false,
            fit:false,
            //分页
            pagination : true,
            pageSize : 5,
            pageList : [5,10,15,20], //rows
            pageNumber : 1,//显示在第几页
            pagePosition : 'bottom',
            data:self_data
        });
        $('#table').datagrid({
            //url : init.list_table_url,
            columns : [thead_arr],
            striped : true,
            queryParams: query_params,
            singleSelect:true,
            nowrap:true,
            scrollbarSize: 0,
            fitColumns : true,  //列宽度自适应
            selectOnCheck : false,
            checkOnSelect : false,
            fit:false,
            //分页
            pagination : true,
            pageSize : 5,
            pageList : [5,10,15,20], //rows
            pageNumber : 1,//显示在第几页
            pagePosition : 'bottom',
            data:self_data
        });
    }

    //三大面板切换、滑动
    function slide(){
        var distance = 150;
        var widthPanel = 1000;
        var rightCoincide = 10;
        var pageNumber = 2;
        var widthContent = 0;
        var target = $('.content-panel');
        setPage(1);
        $(window).resize(function() {
            for(var i = 0 ; i < pageNumber ; i ++){
                if($(target[i]).hasClass('active')){
                    setPage(i);
                }
            }
        });

        function setPage(num){
            var bodyWidth = document.body.scrollWidth;
            var bodyHeight = $(window).height();
            widthContent = parseInt($('#anjian-content').css('width'));
            if(bodyWidth <= 1350){
                distance = 150/(pageNumber-1);
            }
            else if(bodyWidth > 1350 && bodyWidth <= 1520){
                distance = (widthContent - widthPanel)/(pageNumber-1);

            }else if(bodyWidth > 1520){
                distance = 350/(pageNumber-1);
            }
            for(var i = 0 ; i < pageNumber ; i ++){
                $(target[i]).css({'height':(bodyHeight-30)+'px'}).removeClass('active');
                if(i == num){
                    $(target[i]).css({'cursor':'auto'}).addClass('active');
                }else{
                    $(target[i]).css({'cursor':'pointer'});
                }
                if(i == (num+1)){
                    $(target[i]).css({'margin-left':(-rightCoincide)+'px'});
                }else if(i > 0){
                    $(target[i]).css({'margin-left':(distance-widthPanel)+'px'});
                }
            }
            $('.deal-nav').css({'height':(bodyHeight-30)+'px'});
            $('.s-suspect').css({'min-height':$(window).height()+'px'});
        }

        target.on('click',function(){
            var nowNum = parseInt($(this).attr('no'));
            setPage(nowNum);
        });

        $('.deal-nav').on('click',function(){
            pageNumber = 3;
            $('#panel_thr').css('display','block');
            setPage(2);
        });
    }
});