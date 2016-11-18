//var staticPath = './webapp';
//var window_type = 'open_url';
var condition_obj = {mainTable:search_config.main_type};
var table_header_info=[];
var	config=[];

$(function(){
	changeName();       //页面展示的模块更名
	pagination();       //初始化分页
	setTable();         //初始化表格设置按钮
	getTableSetDom();   //生成表头配置信息,并实现拖动
	createDatagrid();    //初始化表格
	btnEvent();         //按钮事件
});
//更改页面显示的标题内容
function changeName(){
	$('#title_name').text(search_config.query_title);
	var search_config_arr1 = [search_config_arr[0]];
	createAdInput(search_config_arr1);//初始化高级查询框
}

//初始化高级查询框
function createAdInput(search_config_arr){
	$('#advanced_box').empty();
	var type_html = '';
	//通过配置生成多表查询条件
	for(var i=0;i<search_config_arr.length;i++){
		var type = search_config_arr[i];
		type_html += ''
			+'<div id="'+type+'">'
			+'<div>'
			+'<span class="search-title">'+search_config[type+'_title']+'</span>'
			+'<span class="search-add">'
			+'<a class="easyui-linkbutton c2" style="margin-right:10px;" id="otherTable" data-options="height:20">子表查询</a>'
			+'<a class="easyui-linkbutton c1 add-condition" data-options="height:20"><i class="fa fa-plus"></i></a>'
			+'</span>'
			+'</div>'
			+'<ul></ul>'
			+'</div>';
	}
	type_html += '<div class="bottom-btn">'
		+'<a class="easyui-linkbutton c6" id="search_submit">查询</a>'
		+'<a class="easyui-linkbutton c6" id="search_clear">清空</a>'
		+'<a class="easyui-linkbutton c6" id="search_close">关闭</a>'
		+'</div>';
	$('#advanced_box').append(type_html);
	for(var i=0;i<search_config_arr.length;i++){
		//生成查询条件输入框
		createSearchInput(search_config_arr[i]);
	}
	addOtherTable();//添加查询模块
}

//通过勾选生成查询框
function createAdInputByCheck(search_config_obj){
	//$('#advanced_box').empty();
	for(var k in search_config_obj){
		var otherTableBtn = '';
		var module_k = search_config_obj[k];
		if(k == search_config_arr[0]){
			otherTableBtn = '<a class="easyui-linkbutton c2" style="margin-right:10px;" id="otherTable" data-options="height:20">子表查询</a>';
		}
		var type = k;
		var type_html = ''
			+'<div id="'+type+'">'
			+'<div>'
			+'<span class="search-title">'+search_config[type+'_title']+'</span>'
			+'<span class="search-add">'
			+ otherTableBtn
			+'<a class="easyui-linkbutton c1 add-condition" data-options="height:20"><i class="fa fa-plus"></i></a>'
			+'</span>'
			+'</div>'
			+'<ul></ul>'
			+'</div>';
		$('#advanced_box .bottom-btn').before(type_html);
		for(var i= 0,len=module_k.length;i<len;i++){
			var module_i = module_k[i];
			var config_i;
			var search_arr = search_config[k];
			if(module_i){
				for(var j= 0,len=search_arr.length;j<len;j++){
					if(search_arr[j]['field'] == module_i){
						config_i = search_arr[j];
					}
				}
				var search_li = '<li field="'+config_i.field+'" input_type="'+config_i.input+'">'
					+'<span class="pro">'+config_i.text+'</span>'
					+'<input id="'+type+'judge_input'+i+'" class="judge">'
					+'<input id="'+type+'condition_input'+i+'" class="condition">'
					+'</li>';
				$('#'+type+' ul').append(search_li);
				parseInput(config_i,type+'judge_input'+i,type+'condition_input'+i); //初始化input组件
			}
		}
	}
	/*var bottomBtn = '<div class="bottom-btn">'
		+'<a class="easyui-linkbutton c6" id="search_submit">查询</a>'
		+'<a class="easyui-linkbutton c6" id="search_clear">清空</a>'
		+'<a class="easyui-linkbutton c6" id="search_close">关闭</a>'
		+'</div>';
	$('#advanced_box').append(bottomBtn);*/
	addOtherTable();//添加查询模块
	btnEvent();
}

//添加查询模块
function addOtherTable(){
	$('#otherTable').off('click').on('click',function(){
		openOtherTable(false);
	});
}

//打开多表查询条件
function openOtherTable(isExport){
	var title = '添加查询条件';
	var text = '确认';
	var start = 1;
	var tableArr = [];
	if(isExport){
		title = '批量导出选项';
		text = '导出';
		start = 0;
	}else{
		$('#advanced_box>div').each(function(){
			var thisId = $(this).attr('id');
			if(thisId) tableArr.push(thisId);
		});
	}
	//通过勾选获取查询配置条件
	var search_config_obj = {};
	$('#other_table_dialog').empty();
	//var search_config_arr = [];
	for(var i=start;i<search_config_arr.length;i++){
		var isMaster = false;
		if(i==0) isMaster = true;
		var for_i = search_config_arr[i];
		var module_i = search_config[search_config_arr[i]];
		if($.inArray(for_i,tableArr) == -1){
			var html = ''
				+'<div class="item-table" isMaster="'+isMaster+'">'
					+'<div class="title">'
						+'<div class="text">'+search_config[for_i+'_title']+'</div>'
						+'<div class="fold"><span><i class="fa fa-angle-double-down"></i></span></div>'
						+'<div class="select-all"><label><input type="checkbox"><span>全选/反选</span></label></div>'
					+'</div>'
					+'<div class="item-check" id="item_check'+i+'" module="'+for_i+'"></div>'
				+'</div>';
			$('#other_table_dialog').append(html);
			var chineseArr = [];
			var new_module_i = [];
			//获取汉字
			for(var j=0;j<module_i.length;j++){
				var module_i_j = module_i[j];
				chineseArr.push(module_i_j.text);
			}
			//根据字段名称首汉字排序
			chineseArr.sort(function(a,b){return a.localeCompare(b)});//汉字拼音排序
			//根据排序重新生成条件数组
			for(var k=0;k<chineseArr.length;k++){
				var _text = chineseArr[k];
				for(var l=0;l<module_i.length;l++){
					if(module_i[l].text == _text) new_module_i.push(module_i[l]);
				}
			}
			//排序后生成查询条件勾选框
			for(var m=0;m<new_module_i.length;m++){
				var module_i_j = new_module_i[m];
				var html_check = ''
				+'<label title="'+module_i_j.text+'"><input type="checkbox" field="'+module_i_j.field+'" text="'+module_i_j.text+'" input="'+module_i_j.input+'" formatter="'+module_i_j.formatter+'">'+module_i_j.text+'</label>';
				$('#item_check'+i).append(html_check);
			}
		}
	}
	openDivForm({
		id: 'other_table_dialog',
		title: title,
		width: 800,
		height: 'auto'
	},[
		{
			text: text,
			handler: function () {
				//添加主表信息数据
				//if(!isExport) search_config_obj[search_config_arr[0]] = search_config[search_config_arr[0]+'_init'];
				$('#other_table_dialog .item-check>label>input:checked').each(function(){
					var module = $(this).parent().parent().attr('module');
					var field = $(this).attr('field');
					var text = $(this).attr('text');
					var input = $(this).attr('input');
					var formatter = $(this).attr('formatter');
					formatter = datePattern[formatter];
					if(!formatter) 
						formatter = datePattern.date19;
					if(search_config_obj[module]){
						if(isExport){
							(search_config_obj[module]).push(field+'|'+text+'|'+input+'|'+formatter);
						}else{
							(search_config_obj[module]).push(field);
						}

					}else{
						if(isExport){
							search_config_obj[module] = [field+'|'+text+'|'+input+'|'+formatter];
						}else{
							search_config_obj[module] = [field];
						}
					}
				});
				$('#other_table_dialog').dialog('close');
				if(isExport){
					batchExprot(search_config_obj);
				}else{
					createAdInputByCheck(search_config_obj);
				}
			}
		}, {
			text: '取消',
			handler: function () {
				$('#other_table_dialog').dialog('close');
			}
		}
	]);
	$('#other_table_dialog .item-table:first-child').find('.item-check').slideDown();
	//折叠样式修改
	$('.fold').off('click').on('click',function(){
		$(this).parent().parent().siblings().find('.item-check').slideUp();
		$(this).parent().next().stop().slideDown();
	});
	//全选,反选
	$('#other_table_dialog .select-all input').off('click').on('click',function(){
		var $this = $(this);
		var $parent = $this.parent().parent().parent().parent();
		var isChecked = $this.prop('checked');
		if(isChecked){
			$this.parent().parent().parent().next().find('input').prop('checked',true);
			if(isExport){
				$parent.siblings().each(function(){
					var $this = $(this);
					var isMaster = $this.attr('isMaster');
					if(isMaster === 'false'){
						$this.removeClass('item-check-border').find('input').prop('checked',false);
					}
				});
				$parent.addClass('item-check-border');
			}
		}else{
			if(isExport){
				$parent.removeClass('item-check-border');
			}
			$this.parent().parent().parent().next().find('input').prop('checked',false);
		}
	});

	//导出选项的勾选操作
	if(isExport){
		$('#other_table_dialog .item-check input').off('click').on('click',function(){
			var $this = $(this);
			var isChecked = $this.prop('checked');
			var $parent = $this.parent().parent().parent();
			if(isChecked){
				$parent.siblings().each(function(){
					var $this = $(this);
					var isMaster = $this.attr('isMaster');
					if(isMaster === 'false'){
						$this.removeClass('item-check-border').find('input').prop('checked',false);
					}
				});
				$parent.addClass('item-check-border');
			}else{
				var checked = $parent.find('input:checked');
				if(checked.length == 0){
					$parent.removeClass('item-check-border');
				}
			}
		});
	}
}

//批量导出
function batchExprot(search_config_obj){
	//将查询条件赋给导出查询条件
	var export_condition_obj = {};

	if(checked_id_arr.length>0){//有勾选的
		export_condition_obj['mainTable']=search_config.main_type;
		export_condition_obj['key']='';
		export_condition_obj['option']='ad';

		export_condition_obj.query=[{"type":search_config.main_type,"condition":[{"k":search_config.primary_key,"v":checked_id_arr.join(' '),"op":"="}]}];

	}else{//没有勾选的
		for(var k in condition_obj){
			export_condition_obj[k] = condition_obj[k];
		}
	}

	var query = export_condition_obj.query || [];
	for(var k in search_config_obj){
		//判断导出的条件查询条件中是否存在
		var isrepeat = false;
		var repeat_fields = [];
		for(var i=0;i<query.length;i++){
			if(k.toUpperCase() == query[i]['type'].toUpperCase()){
				isrepeat = true;
			}
		}
		//不存在，添加的默认查询条件
		if(!isrepeat){
			var condition = search_config_obj[k][0];

			query.push({
				condition : [{
					"op": "=",
					"k": '_all',
					"v": "*"
				}],
				type : k
			});
		}
	}
	export_condition_obj.query = query;
	//表格内容
	export_condition_obj['start']=0;
	export_condition_obj['limit']=2000;

	console.log('查询条件:',condition_obj);
	console.log('导出的查询条件:',export_condition_obj);
	console.log('导出条件:',search_config_obj);
	console.log('导出URL:',search_config.export_url);



	loading('open','数据处理中,请稍候...');
	$.ajax({
		url  : search_config.export_url,
		type : 'post',
		dataType : 'json',
		data : {
			query_condition : JSON.stringify(export_condition_obj),
			export_param    : JSON.stringify(search_config_obj)
		},
		xhrFields:{withCredentials:true},
		crossDomain:true,
		success : function(data){
			//console.log('导出返回参数:',data);
			if(data.status == 'success'){
				var fileurl=data.message;
            	if(fileurl.indexOf("http")<0){
            		fileurl=basePath + '/' + data.message;
            	}
                location.href = fileurl;
				//$('#'+init.export_panel).dialog('close');

				var noticeMsg;
				if(data.maxNum<data.totalNum){
					noticeMsg="系统最大允许导出"+data.maxNum+"条，本次导出"+data.exportNum+"条";
				}else{
					noticeMsg="本次导出"+data.exportNum+"条";
				}

				$.messager.show({
					title : '导出提示',
					msg : noticeMsg
				});
			}else{
				$.messager.show({
					title : '导出失败',
					msg : data.message,
				});
			}
		},
		complete : function(){
			loading('close');
		}

	});
}

//表格设置
function setTable(){
	$('#table_setting').off('click').on('click',function(){
		//生成表格配置面板
		$('#set_table_panel').dialog({
			title: '配置显示字段',
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
					table_header_info = []; //先清空
					$('#selected_ul li').find('div').each(function(index){
						table_header_info[index] = $(this).attr('rel');
					});
					console.log('表头参数:',table_header_info); //参数
					//getTableData();
					$('#set_table_panel').dialog('close');
					ajaxQuery(condition_obj);
				}
			},{
				text:'取消',
				handler:function(){
					$('#set_table_panel').dialog('close');
				}
			}]
		});
		$('#set_table_panel').dialog('open').show();
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
	$('#selected_ul,#waiting_ul').empty();
	//只显示主表字段
	for(var i=0;i<1;i++){
		config = config.concat(search_config[search_config_arr[i]]);
		table_header_info = table_header_info.concat(search_config[search_config_arr[i]+'_init']);
	}
	var config_arr = getConfigArr(config); //默认配置
	//加载显示的表头数据
	for(var i = 0;i < table_header_info.length;i++){
		var rel_val = table_header_info[i];
		var html_li = '<li><div rel="'+rel_val+'">'+getConfigObj(rel_val,config)['text']+'</div></li>';
		$('#selected_ul').append(html_li);
	}
	//加载未显示的表格数据
	for(var i = 0;i < config_arr.length;i++){
		var config_i = config_arr[i];
		var is_exist = $.inArray(config_i, table_header_info);
		//不存在的
		if(is_exist == -1){
			var _html_li = '<li><div rel="'+config_i+'">'+getConfigObj(config_i,config)['text']+'</div></li>';
			$('#waiting_ul').append(_html_li);
		}
	}
}

//根据字段名获取配置信息
function getConfigObj(field,config){
	for(var i= 0,len=config.length;i<len;i++){
		if(config[i]['field'] == field ){
			return config[i];
		}
	}
	return null;
}

//根据字段名获取字段数组
function getConfigArr(config){
	var arr = [];
	for(var i= 0,len=config.length;i<len;i++){
		arr.push(config[i]['field']);
	}
	return arr;
}

//普通查询
function normalQuery(){
	checked_id_arr = [];//清空已勾选
	
	var keywords = $.trim($('#keywords').val());
	if(keywords == ''){
		$.messager.alert('提示','请输入关键字!','warning',function(){
			$('#keywords').next().find('input').focus();
		});
		return false;
	}else{
		delete condition_obj.query;
		condition_obj.key = keywords;
		condition_obj.option = 'all';
		condition_obj.start = 0;
		condition_obj.limit = 5;
		$('#pagination').pagination({
			pageNumber:1,
			pageSize:5
		});
		ajaxQuery(condition_obj);
	}
}

//初始按钮事件
function btnEvent(){
	$('.easyui-linkbutton:not(.c7)').linkbutton();
	$('#search_all').off('click').on('click',function(){
		normalQuery();
	});
	//回车事件
	$('#keywords').next().find('input').keydown(function(e){
		if(e.keyCode == 13){
			normalQuery();
		}
	});
	//点击高级
	$('#advanced').off('click').on('click',function(){
		var _this = $(this);
		//按钮样式变化,展开/折叠搜索框
		if(_this.find('.fa').hasClass('fa-angle-double-down')){
			$('#advanced_box').slideDown(function(){
				_this.find('.fa').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
			});
		}else{
			$('#advanced_box').slideUp(function(){
				_this.find('.fa').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
			});
		}

		//点击各个子模块的添加按钮(事件委托)
		$('#advanced_box').off('click.add').on('click.add','.add-condition',function(){
			var type = $(this).parent().parent().parent().attr('id');
			addCondition(type);
		});
	});
	//点击查询(高级查询)
	$('#search_submit').off('click').on('click',function(){
		checked_id_arr = [];//清空已勾选
		var null_status = 0;
		var query = [];
		for(var i=0;i<search_config_arr.length;i++){
			var query_item = getBaseInfoObj(search_config_arr[i]);
			if((query_item.condition).length){
				query.push(query_item);
			}
		}
		condition_obj.query = query;
		condition_obj.option = 'ad';
		condition_obj.key = '';
		condition_obj.start = 0;
		condition_obj.limit = 5;
		$.each(condition_obj.query,function(index){
			var this_obj = condition_obj.query[index];
			if((this_obj.condition).length > 0){
				null_status = 1;
			}
		});
		if(null_status == 0){
			$.messager.alert('提示','查询条件为空,请输入查询条件!','warning');
		}else{
			$('#pagination').pagination({
				pageNumber:1,
				pageSize:5
			});
			ajaxQuery(condition_obj);
		}
	});
	//点击清空
	$('#search_clear').off('click').on('click',function(){
		//移除添加查询条件
		$('#advanced_box li[condition_type="add"]').remove();
		//清除查询条件的值
		clearInput('condition');
	});
	//点击关闭
	$('#search_close').off('click').on('click',function(){$('#advanced_box').slideUp(function(){
		$('#advanced').find('.fa').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
	});});
	//点击全选
	$('#all_select').off('click').on('click',function(){
		if($(this).prop('checked')){
			$('#result_table').datagrid('checkAll');
		}else{
			$('#result_table').datagrid('uncheckAll');
		}
	});
	//点击批量导出
	$('#export').off('click').on('click',function(){
		openOtherTable(true);
	});
	
}

//初始化表格
function createDatagrid(){
	$('#result_table').datagrid({
		showHeader:false,
		fitColumns:true,
		pagination:false,
		striped: true,
		singleSelect: true,
		nowrap: true,
		scrollbarSize: 0,
		selectOnCheck: false,
		checkOnSelect: false,
		fit: false,
		columns:[[
			{field: 'ID',title:'check',align:'center',width:10, checkbox: true},
			{field:'HJD_XZQHDMMC',title:'描述',align:'center',width:80,formatter:tableContent},
			{field:'handle',title:'操作',align:'center',width:10,formatter:tableHandle}
		]],
		onCheck : function(index, row){
        	doCheckRows(index, row,'add');
        },
        onCheckAll: function(rows){
        	doCheckRows(null, rows,'add');
        },
        onUncheck : function(index, row){
        	doCheckRows(index, row,'del');
        },
        onUncheckAll: function(rows){
        	doCheckRows(null, rows,'del');
        },
        onLoadSuccess : function(data){
        	clearFormate();
        	doCheckRows(null, data.rows,'load');
        },
        onDblClickRow : function(index, row){
        	try {
        		listDetail(index, row);
            } catch (e) {
            	console.log("未定义详情跳转方法");
            }
        	
        }
	});
}


var checked_id_arr = [];//已勾选的ID

/**
 * 保存勾选，分页要记录
 * @param index 行数，不传标识全选
 * @param rows 单行时传一行的对象，全选时传选中行的数组
 * @param type 处理类型，load:加载,add:勾选，del:取消勾选
 */
function doCheckRows(index,rows,type){
	
	if(type=='load'){
		for(var i=0; i<rows.length; i++){
			var row = rows[i];
			var idIndex=checked_id_arr.indexOf(row[search_config.primary_key]);
		
			if(idIndex>=0){
				$('#result_table').datagrid('checkRow',i);
			}
		}
		return;
	}
	
	if(index!=null){//单行
		var idIndex=checked_id_arr.indexOf(rows[search_config.primary_key]);
		if(type=='add' && idIndex<0){
			checked_id_arr[checked_id_arr.length]=rows[search_config.primary_key];
		}
		if(type=='del' && idIndex>=0){
			checked_id_arr.splice(idIndex,1);
		}
	}else{
		for(var i=0; i<rows.length; i++){
			var row = rows[i];
			var idIndex=checked_id_arr.indexOf(row[search_config.primary_key]);
			if(type=='add' && idIndex<0){
				checked_id_arr[checked_id_arr.length]=row[search_config.primary_key];
			}
			if(type=='del' && idIndex>=0){
				checked_id_arr.splice(idIndex,1);
			}
		}
	}
	
	console.log(checked_id_arr);
}

//生成查询条件输入框
function createSearchInput(type){
	var init = search_config[type+'_init'];
	var config = search_config[type];
	for(var i=0;i<config.length;i++){
		var config_i = config[i];
		if($.inArray(config_i['field'],init) != -1){
			var isOrg = config_i.isOrganization || false;
			var search_li = '<li field="'+config_i.field+'" input_type="'+config_i.input+'">'
				+'<span class="pro">'+config_i.text+'</span>'
				+'<input id="'+type+'judge_input'+i+'" class="judge">'
				+'<input id="'+type+'condition_input'+i+'" isOrg="'+isOrg+'" class="condition">'
				+'</li>';
			$('#advanced_box #'+type+' ul').append(search_li);
			parseInput(config_i,type+'judge_input'+i,type+'condition_input'+i); //初始化input组件
		}
	}
}

//初始化组件
function parseInput(config,judge_id,condition_id){
	//console.log(config,judge_id,condition_id);
	var valid_type = config.valid_type || '';
	var default_value = config.judge_default || '=';
	var multiple = config.multiple || false;
	var field = config.field;
	//判断条件组件初始化
	$('#'+judge_id).combobox({
		editable: false,
		//url: config.judge_dict,
		data: config.judge_dict,
		//method: 'get',
		valueField: 'id',
		textField: 'text',
		panelWidth: 75,
		//required: true,
		width: 75,
		formatter: function (row) {
			var opts = $(this).combobox('options');
			return row[opts.textField];
		}
	});
	//初始化选择条件,并选择
	$('#'+judge_id).combobox('select',default_value);
	$('#'+judge_id).combobox('setValue',default_value);
	//输入条件组件初始化
	var condition_type = config.input;
	if(condition_type == 'combobox'){
		$('#'+condition_id).combobox({
			multiple:multiple,
			url: config.condition_dict,
			// data: config.condition_dict,
			method: 'get',
			valueField: 'id',
			textField: 'text',
			panelWidth: 180,
			width:180
		});
		clickShowPanel(condition_id, true);
	}else if(condition_type == 'textbox'){
		$('#'+condition_id).textbox({
			panelWidth: 180,
			width:180,
			validType:valid_type
		});
	}else if(condition_type == 'textbox_org'){
		var field_time = (new Date()).getTime();
		var new_condition_id = condition_id+'_'+field_time;
		$('#'+condition_id).attr('id',new_condition_id);
		$('#'+new_condition_id).textbox({
			panelWidth: 180,
			width:180
		});
		
		$('#'+new_condition_id).parent().attr('field_time',field_time)
		$('#'+new_condition_id).parent().append('<input type="hidden" class="condition" id="'+field+'_org_'+field_time+'">');
		initMultiSelectOrg(new_condition_id,null,{text:new_condition_id,id:field+'_org_'+field_time},null);
		$('#'+judge_id).combobox('select','IN');
		$('#'+judge_id).combobox('setValue','IN');
	}else if(condition_type == 'datebox'){
		//日期段处理
		/*$('#'+condition_id).datebox({
		 panelWidth: 180,
		 width:180,
		 validType:'date[\'yyyy-MM-dd\']'
		 });*/

		var $parent = $('#'+condition_id).parent();
		$('#'+condition_id).remove();
		var dateDom = '<input id="'+condition_id+'" class="condition easyui-validatebox Wdate validatebox-text"'
			+' style="height:22px;line-height:22px;width:180px;margin:0;position:relative;top:2px;"'
			+'onfocus="WdatePicker({skin: \'christ\',dateFmt: \'yyyy-MM-dd\',autoPickDate:true});"'
			+'data-options="required:false,validType:[\'date[\\\'yyyy-MM-dd\\\']\']"/>';
		$parent.append(dateDom);
	}else if(condition_type == 'combotree'){
		$('#'+condition_id).combotree({
			multiple:multiple,
			url: config.condition_dict,
			// data: config.condition_dict,
			method: 'get',
			valueField: 'id',
			textField: 'text',
			panelWidth: 180,
			width:180
		});
	}
}

//获取查询条件对象(高级查询)
function getBaseInfoObj(type){
	var query_obj = {};
	var query = [];
	query_obj.type = search_config[type+'_type'];

	//循环获取查询条件
	$('#advanced_box #'+type+' li').each(function(index){
		var $this = $(this);
		var search_data = getSearchData($this);//获取单个查询条件数据
		var field = $this.attr('field');
		if(search_data[1] || search_data[0] == 'NL' || search_data[0] == 'NN'){
			var module_obj = {
				k : field,
				v : search_data[1],
				op : search_data[0]
			};
			query.push(module_obj);
		}
	});
	query_obj.condition = query;
	return query_obj;
}

//获取单个查询条件数据
function getSearchData($this){
	var data_info = [];
	var field = $this.attr('field');
	var input_type = $this.attr('input_type');
	var input = $this.find('.condition');
	data_info[0] = getInputValue($this.find('.judge'),'combobox',false);
	if(data_info[0] == 'NL' || data_info[0] == 'NN'){ //为空,不为空
		data_info[1] = data_info[0];
	}else{//不为空
		if(input_type == 'textbox_org'){
			var field_time = $this.attr('field_time');
			data_info[1] = ($('#'+field+'_org_'+field_time).val()).replace(/,/g, ' ');
		}else{
			data_info[1] = getInputValue(input,input_type,true);
		}
	}
	if(data_info[1] != '' && data_info[1] != null && data_info[1] != undefined){
		//多个条件用空格隔开
		if($.isArray(data_info[1])){
			data_info[1] = data_info[1].join(' ');
		}
		return data_info;
	}else{
		return false;
	}
}

//提交查询请求
function ajaxQuery(condition_obj){
	//查询成功,展示查询内容
	loading('open','查询中...');
	console.log('查询条件:',condition_obj);
	//console.log(JSON.stringify(condition_obj));
	var condition = JSON.stringify(condition_obj);
	$.ajax({
		url : search_config.url + condition,
		type : 'get',
		dataType : 'json',
		xhrFields:{withCredentials:true},
		crossDomain:true,
		success : function(data){
			console.log('查询结果:',data);
			//加载分页
			$('#pagination').pagination({
				total:data.count
			}).show();
			changeLinkButtonIcon();
			searchResult(data); //展示查询结果
		},
		error:function(e){
			alert('获取数据失败,详情查看console. \n\n接下来展示的为本地测试数据!!!\n');
			console.log(e);
			$('#pagination').pagination({
				total:998
			}).show();
			changeLinkButtonIcon();
			searchResult(search_result_test);
		}
	});

}

//子模块添加查询条件
function addCondition(type){
	var config = search_config[type];
	var j = Date.parse(new Date());
	$('#condition_dialog ul').empty();
	var chineseArr = [];
	var newConfig = [];
	//获取汉字
	for(var i=0;i<config.length;i++){
		var config_i = config[i];
		chineseArr.push(config_i.text);
	}
	//根据汉字拼音排序
	chineseArr.sort(function(a,b){return a.localeCompare(b)});
	//根据排序重新生成条件数组
	for(var k=0;k<chineseArr.length;k++){
		var _text = chineseArr[k];
		for(var l=0;l<config.length;l++){
			if(config[l].text == _text) newConfig.push(config[l]);
		}
	}
	//排序后生成查询条件勾选框
	for(var m=0;m<newConfig.length;m++){
		var newConfig_m = newConfig[m];
		var li_html = '<li module="'+newConfig_m.field+'">'
			+'<label><input type="checkbox"><span>'+newConfig_m.text+'</span></label>'
			+'</li>';
		$('#condition_dialog ul').append(li_html);
	}
	openDivForm({
		id: 'condition_dialog',
		title: '添加查询条件',
		width: 600,
		height: 'auto',
		top:100
	}, [
		{
			text: '添加',
			handler: function () {
				$('#condition_dialog').dialog('close');
				var input_checked_arr = [];
				$( "#condition_dialog input:checked").each(function(){
					input_checked_arr.push($(this).parent().parent().attr('module'));
				});
				//console.log(input_checked_arr);
				for(var i=0;i<config.length;i++){
					var config_i = config[i];
					//添加勾选的项
					if($.inArray(config_i.field,input_checked_arr) != -1){
						var li_html = '<li field="'+config_i.field+'" multi="'+config_i.multiple+'" input_type="'+config_i.input+'" condition_type="add">'
							+'<span class="pro">'+config_i.text+'</span>'
							+'<input id="'+type+'judge_input_'+j+'" class="judge">'
							+'<input id="'+type+'condition_input_'+j+'" class="condition">'
							+'</li>';
						var $li = $('#advanced_box #'+type+' li[field="'+config_i.field+'"]');
						//相同条件添加到旁边
						if($li.length > 0){
							$li.last().after(li_html);
						}else{
							$('#advanced_box #'+type+' ul').append(li_html);
						}
						//console.log(config);
						parseInput(config_i,type+'judge_input_'+j,type+'condition_input_'+j);
						//$('#judge_input_'+j).combobox({
						// readonly : true
						//});
						j++;
					}
				}
			}
		}, {
			text: '关闭',
			handler: function () {
				$('#condition_dialog').dialog('close');
			}
		}
	]);
}

//加载分页
function pagination(){
	$('#pagination').pagination({
		total:100,
		pageSize:5,
		pageList: [5,10,15,20,30,50],
		onSelectPage:function(pageNumber, pageSize){
			condition_obj.start = (pageNumber-1)*pageSize;
			condition_obj.limit = pageSize;
			console.log(condition_obj);
			ajaxQuery(condition_obj);
		}
	});
}

//查询结果
function searchResult(data){
	loading('close');
	//var data = data || search_result_test; //测试数据
	var datagrid_data = {
		rows : data.result,
		total: data.count
	};
	$('#result_table').datagrid('loadData', datagrid_data);
	$('#handle_area').show();
}

//表格内容
function tableContent(val, row, index){
	//alert()
	//console.log(1,row,table_header_info);
	var html  = '<div class="table-content"><div class="content-dsc">';
	for(var i= 0,len=table_header_info.length;i<len;i++){
		var field_i = table_header_info[i];
		//console.log(field_i);
		var pro_name = getConfigObj(field_i,config)['text'];
		var inputType = getConfigObj(field_i,config)['input'];
		var field = getConfigObj(field_i,config)['field'];
		var formatter = getConfigObj(field_i,config)['formatter'];//格式化
		//console.log(config[i].field)
		if(inputType == 'combobox' || inputType == 'combotree'){
			if(!row[field]){
				html += '<div class="item"><span class="pro">'+pro_name+'</span><span class="val"></span></div>';
			}else{
				html += '<div class="item"><span class="pro">'+pro_name+'</span><span class="val">'+row[field+"MC"]+'</span></div>';
			}
		}else if(inputType == 'textbox_org'){//组织机构，翻译
			var span_id='org_format_'+(new Date()).getTime();
			html += '<div class="item"><span class="pro">'+pro_name+'</span><span class="val" id="'+span_id+'">'+orgCodeFormatter(row[field],span_id)+'</span></div>';
		}else if(inputType == 'datebox'){//日期格式化
			var val=dateFormatter(row[field],datePattern[formatter]);
			html += '<div class="item"><span class="pro">'+pro_name+'</span><span class="val">'+val+'</span></div>';
		}else{
			if(!row[field]){
				html += '<div class="item"><span class="pro">'+pro_name+'</span><span class="val"></span></div>';
			}else{
				html += '<div class="item"><span class="pro">'+pro_name+'</span><span class="val">'+row[field]+'</span></div>';
			}
		}
	}
	html += '</div></div>';
	return html;
}

//高度自适应
function selfHeight(){
	var window_h = window.innerHeight;
	var result_box_h = window_h - 100;
	$('#search_result .result').css('max-height',result_box_h + 'px');
	$('#advanced_box .search-condition').css('max-height',result_box_h - 30 + 'px');
}



/*********************以下为测试数据,可删除*******************************/



/*条件规则说明(以下为实际查询条件对象)
 * 1.不同的条件字段之间为"与"关系
 * 2.同一个条件字段(同名条件)之间为"或"关系
 * 3,多选条件之间为"或"关系
 * */
var condition = {
	//表名(一)
	base_info:{
		//条件字段(1)
		zjlx:[
			["=",["1","2"]],//同名条件1(多选条件)
			["!=",["3"]],   //同名条件2(单选条件)
			["!=",["5"]]    //同名条件3(单选条件)
		],
		//条件字段(2)
		zjhm:[
			["=","513023198804112546"],
			["in","19852"]],
		//条件字段(3)
		xm:[
			["=","帅雷雷"]
		],
		//条件字段(4)
		xb:[
			//[判断规则,判断条件]
			["=",["1","3","9"]]//多选条件
		],
		//条件字段(5)
		csrq:[
			[">","2016-06-01"], //同名条件1
			["<","2016-07-12"]],//同名条件2

		//排序规则
		sort : 'desc' //desc,asc
	},

	//表名(二)...
	relation_info:{}
};







//搜索返回的结果，采用的是json格式，格式如下:
var t1 = {
	"count": 0,//返回的记录条数
	"took": 21,//搜索所花的时间,单位是毫秒
	"msg": "",//错误信息,为空为正常,内容代表错误提示
	"result": []//真正的结果,是一个数组(或列表)
};

//请求示例
var t2 = {
	"start":0,//查询记录开始条数
	"limit":10,//查询记录分页大小,
	"option":'ad|all',//操作类型，ad为高级查询query字段必填，all为全文检索key字段必填,
	"key":"操作类型为全文检索时必填",
	"sort":"myDate ASC",
	"query": [
		{
			"type": "syrk_syrkxxzb",
			"condition": [
				{
					"op": "<",
					"k": "CSRQ",
					"v": "2016-06-01"
				},//同名条件1
				{
					"op": ">",
					"k": "CSRQ",
					"v": "2016-05-01"
				},//同名条件2
				{
					"op": "=",//同名条件1(多选条件),op可以IN/NI/= 操作符
					"k": "ZJLX ",
					"v": "1,2" //or 关系
				},//同名条件1(多选条件)
				{
					"op": "=",
					"k": "ZJHM ",
					"v": "5130"
				},
				{
					"op": "=",
					"k": "XM",
					"v": "王五"
				}
			]
		},
		{
			"type": "ry_ryjzgjxxb",
			"condition": [
				{
					"op": "=",
					"k": "XT_LRRID",
					"v": "未注销"
				},
				{
					"op": "NL",
					"k": "JZD_XZQHDM",
					"v": ""
				},
				{
					"op": "IN",
					"k": "XT_LRRXM",
					"v": "刘大饼,福忠"
				}
			]
		}
	]
};

/**
 * 组织机构代码翻译
 * @param orgCodes 机构代码，多个用逗号分隔
 * @returns {String}
 */
function orgCodeFormatter(val,span_id){
	if(!val) return "";
	else{
		if(orgNames[val]){
			return orgNames[val];
		}else{
	    	getOrgName(val,span_id);
	    	return '加载中……';
		}
	}
	
}

var orgNames={};//组织机构缓存
var sendAry_org=[];//待转换机构
var sendAry_span=[];//待转换机构存储标签
var sendNum=10;//每多少条发送一次
/**
 * 每10条发送一次
 * @param val 机构代码
 * @param span_id spanv标签id
 */
function getOrgName(val,span_id){
	if(val!=null && span_id!=null){
		sendAry_org[sendAry_org.length]=val;
		sendAry_span[sendAry_span.length]=span_id;
		
		if(sendAry_org.length<sendNum){
			return;
		}
	}
	
	if(sendAry_span.length==0)
		return;
	
	var sendAry_span_tmp=sendAry_span;//临时数组
	var sendAry_org_tmp=sendAry_org;//临时数组
	sendAry_span=[];
	sendAry_org=[];
	
	$.ajax({
		url: pathConfig.managePath +'/api/orgization/queryOrgNameByOrgcodes',
		  dataType: 'text',
		  type: 'get',
		  async: true,	 
		  xhrFields: {
			  withCredentials: true
		  },
		  crossDomain: true,
		  data: {
			  'orgCodes':sendAry_org_tmp.join(',')
		  },
		  success: function (data) {
			  if(data){
				  data = data.split(',');
			  }
			  //将返回的名称填入对应的span
			  for(var item in sendAry_span_tmp){
				  span_id = sendAry_span_tmp[item];
				  val = sendAry_org_tmp[item];//默认orgcode，有翻译才翻译
				  
				  if(data[item])
					  val = data[item];
				  
				  orgNames[sendAry_org_tmp[item]]=val;//缓存机构名称
				  
				  $("#"+span_id).html(val);
			  }
			  
			  //setTimeout(function () {
              	//$("#"+span_id).html(data);
              //},500);//延迟0.5秒执行
		  },
		  error: function (errorData) {//返回只有 组织机构名称，不符合json规范，所以进error
		      console.log("queryOrgNameByOrgcodes ajax error");
		  }
		});
}

/**
 * 清空未发送的翻译请求
 */
function clearFormate(){
	console.log("clearFormate");
	getOrgName(null,null);
}

//日期格式
var datePattern={
		'date10':'yyyy-MM-dd',
		'date13':'yyyy-MM-dd HH',
		'date16':'yyyy-MM-dd HH:mm',
		'date19':'yyyy-MM-dd HH:mm:ss'
		};
/**
 * 日期字符串格式化
 * 目前的日期格式有 yyyy-MM-dd HH:mm:ss和yyyy-MM-dd'T'HH:mm:ss这种
 * @param val
 * @param pattern
 */
function dateFormatter(val,pattern){
	if(!val || val.length<19) return "";
	if(!pattern) pattern = datePattern.date19;
	
	var year,month,date,hours,minutes,seconds
	year=val.substr(0,4);
	month=val.substr(5,2);
	date=val.substr(8,2);
	hours=val.substr(11,2);
	minutes=val.substr(14,2);
	seconds=val.substr(17,2);
	
	pattern =pattern.replace('yyyy',year);
	pattern =pattern.replace('MM',month);
	pattern =pattern.replace('dd',date);
	pattern =pattern.replace('HH',hours);
	pattern =pattern.replace('mm',minutes);
	pattern =pattern.replace('ss',seconds);
	
	return pattern;
}

