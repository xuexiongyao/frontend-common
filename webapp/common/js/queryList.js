/**
 * Created by zhuwei on 2016/9/1.
 */

//函数执行
$(function(){
    queryModule();  //生成查询条件模块
    getTableData(); //获取表格数据
    setTable();     //表头设置
});

var listConfig = init.listConfig || new ListConfig();
var tableCookieName = init.cookieName || (location.pathname).substr(0,location.pathname.indexOf('.')) + '_tableHeaderC';
var queryListParam = init.queryListParam || {};    //查询条件
//生成查询条件模块
function queryModule(){
    //查询条件输入框,勾选项
    var list_config = listConfig.config;
    var list_init = listConfig.init;
    //循环生成查询条件
    $('#query_panel .query-item').empty();
    for(var k in list_config){
        var k_mark = k;
        if(k_mark.indexOf('.') != -1){
            k_mark = k_mark.replace('.','_');
        }
        var query_item = '<div class="item '+k_mark+'" >'
            +'<span class="pro">'+list_config[k][1]+'</span>'
            +'<input name="'+k+'" class="val" id="query_input_'+k_mark+'">'
            +'</div>';

        if(list_config[k][0] == 'datebox'){
            query_item = '<div class="item '+k_mark+'" >'
                +'<span class="pro">'+list_config[k][1]+'</span>'
                +'<input name="'+k+'" id="query_input_'+k_mark+'" class="easyui-validatebox Wdate validatebox-text val"'
                +'onfocus="WdatePicker({skin: \'christ\',dateFmt: \'yyyy-MM-dd\',errDealMode:2,autoPickDate:true});"'
                +'data-options="required:false,validType:[\'date[\\\'yyyy-MM-dd\\\']\']"/>'
                +'</div>';
        }

        $('#query_panel .query-item').append(query_item);
        if(list_config[k][0] == 'textbox'){
            $('#query_input_'+k_mark).textbox({
                prompt:'请输入'+list_config[k][1]
            })
        }else if(list_config[k][0] == 'datebox'){
            //不做初始化了，不用datebox
        }else if(list_config[k][0] == 'combobox'){
            $('#query_input_'+k_mark).combobox({
                prompt:'请选择'+list_config[k][1],
                url:list_config[k][2],
                valueField:'id',
                textField:'text',
                method:'get',
                panelHeight:'auto',
                panelMaxHeight:200
            });
        }else if(list_config[k][0] == 'combotree'){
            $('#query_input_'+k_mark).combotree({
                prompt:'请选择'+list_config[k][1],
                url:list_config[k][2],
                valueField:'id',
                textField:'text',
                method:'get',
                panelHeight:'auto',
                panelMaxHeight:200,
                panelWidth: 'auto'
            });
        }

        //显示查询勾选项
        if(list_config[k][4]){  //判断是否作为查询项目
            if($.inArray(k, list_init) == -1){
                var query_condition = '<div class="item"><label><input type="checkbox" rel="'+k+'"><span>'+list_config[k][1]+'</span></label></div>';
                $('#other_condition_panel .query-condition').append(query_condition);
            }
        }
    }

    //查询条件按钮
    var panel_head = $('#query_panel>.panel>.panel-header>.panel-title');
    var query_btn = '<div class="add-btn"><span>搜索条件 : </span>';
    for(var i=0;i<list_init.length;i++){
        query_btn += '<input type="button" class="short" rel="'+list_init[i]+'" value="'+list_config[list_init[i]][1]+'">';
    }
    query_btn += '<input type="button" value="选择查询条件" class="add-other" id="more_condition">';
    panel_head.html(query_btn);

    //显示查询项
    for(var i=0;i<list_init.length;i++){
        var item_class = list_init[i];
        if(item_class.indexOf('.') != -1){
            item_class = item_class.replace('.','_');
        }
        $('.'+item_class).show();
    }

    //快捷添加查询条件
    $('.add-btn input.short').off('click').on('click',function(){
        var class_attr = $(this).attr('rel');
        $('.'+class_attr).show();
    });

    //点击更多条件
    $('#more_condition').off('click').on('click',function(){
        //添加其他面板
        openDivForm({
            id: 'other_condition_panel', //页面上div的id,将div设置为display:none,在div中设置好form属性,自动提交第一个form
            title: '选择查询条件',
            width: 600
        }, [                     //以下为按钮添加配置,不传值为默认,传递[]时,清除所有按钮
            {
                text: '确定',
                handler:function(){
                    //显示查询项
                    $('#other_condition_panel .query-condition .item input').each(function(){
                        var check_status = $(this).prop('checked');
                        var class_attr = $(this).attr('rel');
                        if(check_status){
                            $('.'+class_attr).show();
                            $('.'+class_attr).find('input').attr('isQuery',true);
                        }else{
                            $('.'+class_attr).hide();
                            $('.'+class_attr).find('input').attr('isQuery',false);
                        }
                    });
                    clearInput('query-item .val');
                    $('#other_condition_panel').dialog('close');
                }
            }, {
                text: '关闭',
                handler: function () {
                    $('#other_condition_panel').dialog('close');
                }
            }
        ]);
    });

    //点击查询
    $('#query_btn').on('click',function(){
        queryListParam = init.queryListParam || {};
        $('#query_panel input[name]').each(function(){
            var _this = $(this);
            var pro = _this.prop('name');
            var val = _this.val();
            //获取查询条件
            if(val && _this.attr('isQuery') != false) queryListParam[pro] = val;
        });
        getTableData();
    });

    //点击重置
    $('#reset_btn').on('click',function(){
        clearInput('query-item .val'); //清除查询值
    });
}

//生成表格数据
function getTableData(get_header_info){
    //生成表头信息
    var table_header_info = get_header_info || getTableHeaderCookie(tableCookieName) || listConfig.init;
    var length = table_header_info.length;
    var thead_arr = [];//表头数组
    thead_arr[0] = {title : '编号',field : '_num',sortable : true,width : 100,checkbox:true};
    if(init.isHandle){
        thead_arr[length + 1] = {
            title : '操作',
            field : 'process',
            width : 100,
            align : 'center',
            formatter : datagridProcessFormater
        };
    }

    for(var i = 0;i<length;i++){
        var _field = table_header_info[i];
        var _title = listConfig.config[_field];
        //生成表头
        var info_obj;
        if(_title[5] == 'address'){
            info_obj = {title:_title[1],field:_field,align:'center',width:_title[3],sortable : true,formatter:parseAddress};
        }else if(_title[2] == null){
            info_obj = {title:_title[1],field:_field,align:'center',width:_title[3],sortable : true};
        }else{
            info_obj = {title:_title[1],field:_field,align:'center',width:_title[3],sortable : true,formatter:dictFormatter,dictName:_title[2]};
        }
        thead_arr[i+1] = info_obj;
    }
    //继承传递的属性和事件参数
    var tableOptions = $.extend({
        url : init.tableUrl,
        columns : [thead_arr],
        method:"POST",
        striped : true,
        queryParams: queryListParam,
        singleSelect:true,
        nowrap:true,
        scrollbarSize: 0,
        fitColumns : true,  //列宽度自适应
        selectOnCheck : false,
        checkOnSelect : false,
        fit:false,
        //分页
        pagination : true,
        pageSize : 10,
        pageList : [10,50,100,1000], //rows
        pageNumber : 1,//显示在第几页
        pagePosition : 'bottom'
    },init.tableOptions);
    $('#list_table').datagrid(tableOptions);
    changeLinkButtonIcon(); //优化表格分页图标样式
}

//表格(表头配置)
function setTable(){
    //点击[表头设置],打开表格配置面板
    $('#set_table_btn').linkbutton({
        onClick : function(){
            //生成表格配置面板
            $('#set_table_panel').dialog({
                title: '配置表格显示字段',
                top:200,
                height: 'auto',
                width:800,
                resizable: true,
                modal: true,
                closed: true,
                buttons:[{
                    //确定生成表头配置信息,并重新加载表格数据
                    text:'确定',
                    handler:function(){
                        $('#set_table_panel').dialog('close');
                        var table_header_info = []; //先清空
                        $('#selected_ul li').find('div').each(function(index){
                            table_header_info[index] = $(this).attr('rel');
                        });
                        //console.log('表头参数:',table_header_info); //参数
                        getTableData(table_header_info);
                        //表头信息写cookie
                        setCookie(tableCookieName, table_header_info,30);
                    }
                },{
                    text:'取消',
                    handler:function(){
                        $('#set_table_panel').dialog('close');
                    }
                }]
            });
            $('#set_table_panel').show().dialog('open');
            getTableSetDom();
        }
    });

    //拖放排序插件
    $('#selected_ul,#waiting_ul').dragsort({
        dragSelector: "div",
        dragBetween: true,
        //dragEnd: saveOrder,//拖动结束触发函数
        placeHolderTemplate: "<li class='placeHolder'><div></div></li>"
    });
}

//生成表头配置信息,并实现拖动
function getTableSetDom(){
    var list_config = listConfig.config;
    var table_header_info = getTableHeaderCookie(tableCookieName) || listConfig.init;
    $('#selected_ul,#waiting_ul').empty();
    //加载显示的表头数据
    for(var i = 0;i < table_header_info.length;i++){
        var rel_val = table_header_info[i];
        var html_li = '<li><div rel="'+rel_val+'">'+list_config[rel_val][1]+'</div></li>';
        $('#selected_ul').append(html_li);
    }
    //加载未显示的表格数据
    for(var k in list_config){
        var is_exist = $.inArray(k, table_header_info);
        if(is_exist == -1){
            var _html_li = '<li><div rel="'+k+'">'+list_config[k][1]+'</div></li>';
            $('#waiting_ul').append(_html_li);
        }
    }
}

//地址信息靠右显示
function parseAddress(val,row,index){
    var adress = val || '';
    return '<div style="float:right" title="'+adress+'">'+adress+'</div>';
}

//获取表头cookie信息(数组)
function getTableHeaderCookie(c_name){
    var header_str =  getCookie(c_name);
    if(header_str){
        return header_str.split(',');
    }
    return false;
}



