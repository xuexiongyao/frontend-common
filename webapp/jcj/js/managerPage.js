//案件办理 create by jessie on 2016/5/24
function ListConfig(){
    //实有人口默认配置项,显示的表头和查询条件
    this.syrk_table_head_init = ['cyzjdm','zjhm','xm','xbdm'];

    //实有人口表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应

    this.syrk_table_head_config = {
        xm:['textbox','姓名',null,100,true],
        cyzjdm:['combobox','证件类型',null,100,true],
        zjhm:['textbox','证件号码',null,100,true],
        xbdm:['combobox','性别',null,100,true],
        mzdm:['combobox','民族',null,100,true],
        csrq:['datebox','出生日期',null,100,true],
        jggjdm:['combobox','籍贯国家',null,100,true],
        jgssxdm:['combobox','籍贯',null,100,true],
        hjd_dzxz:['textbox','户籍地址',null,200,true],
        jzd_dzxz:['textbox','居住地址',null,200,true],
        cym:['textbox','曾用名',null,100,true]
    };




    //人员核查默认配置项,显示的表头和查询条件
    this.ryhc_table_head_init = ['hcqkdm','glry'];


    //人员核查表头查询具体配置项:
    // 1.{数据库字段名:['输入框类型','中文名称','数据字典url','表格显示的宽度','是否作为查询条件']}
    // 2.无数据字典填写为null,表格的宽度100为一倍,不填则根据内容自适应
    this.ryhc_table_head_config = {
        'jzd_dzxz':['textbox','居住地址',null,200,true],
        'hcqkdm':['combobox','核查情况',null,100,true],
        'hcsj':['datebox','核查时间',null,100,true],
        'glry':['textbox','管理人员',null,100,true],
    };

}
$(function(){
    var init = {
        //查询
        query_panel_id : 'query_panel',             //查询面板ID,请同步修改jsp中的页面元素ID
        query_condition_panel : 'other_condition_panel',//查询条件框ID,请同步修改jsp中的页面元素ID
        query_btn_id : 'submit_query',              //查询按钮ID,请同步修改jsp中的页面元素ID

        //列表数据展示
        list_table_id : 'list_table',       //列表表格ID,请同步修改jsp中的页面元素ID
        list_init : 'syrk_table_head_init',         //初始化表格查询配置项名称,同步修改list_config.js【*修改*】
        list_config : 'syrk_table_head_config'     //所有表格查询配置项名称,同步修改list_config.js【*修改*】
    };

    //虚拟数据
    var self_data = [{cyzjdm:"111",zjhm:"610324198802205073",xm:"郑爽",xbdm:"2"},{cyzjdm:"111",zjhm:"610324198802205073",xm:"郑爽",xbdm:"2"}];


    /*********************************JS执行*****************************/
    //获取配置信息
    var config = new ListConfig();
    var list_init = config[init.list_init];
    var list_config = config[init.list_config];

    //默认查询条件和表头样式
    var query_params = {};  //初始化查询条件
    var table_header_info = list_init; //初始化表头配置信息
    var query_condition_info = list_init; //初始化查询条件信息

    getTableData(); //初始化加载表格数据
    queryModule();          //查询模块
    pageClick(); //页面点击事件

    //页面点击事件
    function pageClick(){
        //收起查询条件
        $('.panel-tool-collapse').on('click',function(){
            if($(this).attr('class').indexOf('panel-tool-expand') == -1){
                $('.add-btn').show();
                $('.input-search').hide();
            }else{
                $('.add-btn').hide();
                $('.input-search').css('display','block');
            }
        });
        //点击分类查询
        $('.ajbl-nav').find('.title').on('click',function(){
            $('.ajbl-nav').find('.title').removeClass('active');
            $(this).addClass('active');
        });
    }

    //查询模块
    function queryModule(){
        //查询条件输入框,勾选项
        for(var k in list_config){
            var k_mark = k;
            if(k_mark.indexOf('.') != -1){
                k_mark = k_mark.replace('.','_');
            }
            var query_item = '<div class="item '+k_mark+'" >'
                +'<span class="pro">'+list_config[k][1]+'</span>'
                +'<input name="'+k+'" class="val" id="query_input_'+k_mark+'">'
                +'</div>';
            $('#'+init.query_panel_id+' .query-item').append(query_item);
            if(list_config[k][0] == 'textbox'){
                $('#query_input_'+k_mark).textbox({
                    prompt:'请输入'+list_config[k][1]
                })
            }else if(list_config[k][0] == 'datebox'){
                $('#query_input_'+k_mark).datebox({
                    prompt:'请选择'+list_config[k][1],
                    panelWidth : 250
                });
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
            }

            //显示查询勾选项
            if(list_config[k][4]){  //判断是否作为查询项目
                if($.inArray(k, query_condition_info) == -1){
                    var query_condition = '<div class="item"><input type="checkbox" rel="'+k+'"><span>'+list_config[k][1]+'</span></div>';
                    $('#'+init.query_condition_panel+' .query-condition').append(query_condition);
                }
            }
        }

        //查询条件按钮
        var panel_head = $('#'+init.query_panel_id+'>.panel>.panel-header>.panel-title');
        var query_btn = '<div class="add-btn"><span>搜索条件 : </span>';
        for(var i=0;i<list_init.length;i++){
            query_btn += '<input type="button" class="short" rel="'+list_init[i]+'" value="'+list_config[list_init[i]][1]+'">';
        }
        query_btn += '<input type="button" value="更多条件" class="add-other" id="more_condition">';
        query_btn += '<input type="button" value="清除更多" class="add-other" style="display:none;" id="clear_more"></div>';
        query_btn += '<span class="input-search"><input class="enter-condition" placeholder="输入查询条件"/><span class="search-xian">|</span><i class="fa fa-search search-logo"></i></span>';
        panel_head.html(query_btn);

        //显示查询项
        for(var i=0;i<query_condition_info.length;i++){
            var item_class = query_condition_info[i];
            if(item_class.indexOf('.') != -1){
                item_class = item_class.replace('.','_');
            }
            $('.'+item_class).show();
        }

        //清空更多查询条件
        $('#clear_more').off('click').on('click',function(){
            $('.query-item .item').hide();
            $('.short').click();
            $('.query-item .item input').val('');
            query_params = {};
            $(this).fadeOut();
        });
        //快捷添加查询条件
        $('.add-btn input.short').off('click').on('click',function(){
            var class_attr = $(this).attr('rel');
            $('.'+class_attr).show();
        });

        //点击添加其他
        $('#more_condition').off('click').on('click',function(){
            //添加其他面板
            $('#'+init.query_condition_panel).dialog({
                title: '添加其他条件',
                height: 'auto',
                width: 600,
                top:200,
                resizable: true,
                modal: true,
                closed: true,
                buttons:[{
                    text:'确定',
                    handler:function(){
                        //显示查询项
                        var i = 0;
                        $('#'+init.query_condition_panel+' .query-condition .item input:checked').each(function(){
                            var class_attr = $(this).attr('rel');
                            $('.'+class_attr).fadeIn();
                            i ++;
                        });
                        if(i>0){
                            $('#clear_more').fadeIn();
                        }

                        $('#'+init.query_condition_panel).dialog('close');
                    }
                },{
                    text:'取消',
                    handler:function(){
                        $('#'+init.query_condition_panel).dialog('close');
                    }
                }],

            });
            $('#'+init.query_condition_panel).show().dialog('open');
        });

        //点击查询
        $('#'+init.query_btn_id).on('click',function(){
            query_params = {};
            $('#'+init.query_panel_id+' input[name]').each(function(){
                var _this = $(this);
                var pro = _this.prop('name');
                var val = _this.val();
                //生成查询条件
                if(val != ''){
                    query_params[pro] = val;
                }
            });
            getTableData();
        });
    }

    //生成表格数据
    function getTableData(){
        //生成表头信息
        var length = table_header_info.length;
        var thead_arr = [];//表头数组
        thead_arr[length] = {
            title : '操作',
            field : 'process',
            width : 100,
            align : 'center',
            formatter : datagridProcessFormater
        };

        for(var i = 0;i<length;i++){
            var _field = table_header_info[i];
            var _title = list_config[_field];
            //console.log('字典:',_title,_title[0],_title[1]);

            //生成表头
            var info_obj;
            if(_title[2] == null){
                info_obj = {title:_title[1],field:_field,align:'center',width:_title[3]};
            }else{
                info_obj = {title:_title[1],field:_field,align:'center',width:_title[3],formatter:dictFormatter,dictName:_title[2]};
            }
            thead_arr[i] = info_obj;
        }
        //console.log('表头数据:',thead_arr);

        //配置并生成表格
        $('#'+init.list_table_id).datagrid({
            url : init.list_table_url,

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
            //onDblClickRow : function(index, row){
            //    listDetail(row.id,row.xm);
            //},
            data:self_data
        });

    }

    //操作按钮选项
    function datagridProcessFormater(val,row,index){
        //if(userOrgCode== row.xt_lrrbmid){
        //    return  '<i class="fa fa-edit details" title="编辑" onclick="crossAddTab(\'房屋信息编辑\',\''+init.list_detail_url+'/editPre/'+row.id+'\',\'fwedit_tab_id_'+row.id+'\')"></i>'
        //        + '<i class="fa fa-remove remove" title="注销" onclick="listLogout(\''+row.id+'\')"></i>';
        //}
        return '<i class="fa fa-eye details" title="详情" onclick="crossAddTab(\'房屋信息详情\',\''+init.list_detail_url+'/show/'+row.id+'\',\'fwdetails_tab_id_'+row.id+'\')"></i>';
    }

    //注销
    listLogout = function(syfw_id){
        var logout_parmas = {}; //注销参数
        $('#'+init.logout_panel).dialog({
            title: init.logout_title,
            top:200,
            height: 'auto',
            width:800,
            resizable: true,
            modal: true,
            closed: true,
            buttons:[{
                //确定生成表头配置信息,并重新加载表格数据
                text:'注销',
                handler:function(){
                    if($('#syfw_delete_bz').val()!=null&&$('#syfw_delete_bz').val()!=''){
                        logout_parmas.xt_zxyy = $('#'+init.logout_panel +' .logout-zxyy').val();
                        logout_parmas.bz = $('#'+init.logout_panel +' .logout-bz').val();
                        //console.log('注销参数:',logout_parmas);
                        $.ajax({
                            url : init.logout_url+syfw_id,
                            type : 'post',
                            data : logout_parmas,
                            success : function(data){
                                var data = eval('('+data+')');
                                //console.log('注销返回参数:',data);
                                if(data.status == 'success'){
                                    logout_parmas = {};
                                    $('#'+init.logout_panel +' .logout-bz').val('');
                                    $('#'+init.logout_panel).dialog('close');
                                    $('#'+init.list_table_id).datagrid('reload');
                                    $.messager.show({
                                        title:'注销提示',
                                        msg:data.message
                                    });
                                }else{
                                    $.messager.show({
                                        title:'注销失败',
                                        msg:data.message
                                    });
                                }
                            },
                            error : function(){
                                console.log('deleteJzgjOrsyfw ajax err');
                            }
                        });
                    }else{
                        $('#'+init.logout_panel+' .logout-reason>.tips>span').text('请填写注销原因!');
                    }
                }
            },{
                text:'取消',
                handler:function(){
                    $('#'+init.logout_panel).dialog('close');
                }
            }],
            onClose : function(){$('#'+init.logout_panel+' .logout-reason>.tips>span').text('');}
        });
        $('#'+init.logout_panel).show().dialog('open');
        changeLinkButtonIcon(); //优化表格分页图标样式
    };
});