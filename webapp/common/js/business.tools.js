/**
 * 业务公共方法
 * author : redstorm
 * create time : 2014-08-28
 */

// 初始化下拉列表（大数据的下拉列表用，如全国行政区划）
// comboID 下拉框ID
// dictUrl 对应字典的Url，如：portal+'/common/dict/GB_D_XZQHDMLIST.js'
//window.top有问题
function initComboBox(comboID, dictUrl) {
	$('#' + comboID).combobox({
		clientLoad: true,
		validEnter: false,
		unValidClear: false,
		url: dictUrl,
		loader: function(param, success, error) {
			var opts = $(this).combobox('options');
			if (!opts.url) return false;
			if ("undefined" == typeof param.q) {
				var data = [];
				success(data);
				return;
			}
			else {
				opts.validEnter = true;
				param.q = param.q.replace(/(^[\s|　]*)|([\s|　]*$)/g, "");
				if (param.q == "") { // 清空
					var data = [];
					success(data);
					return;
				}
			}
			var str = param.q.toUpperCase();
			if (opts.isTopLoad && window.top && window.top.publicDictArray) {
				data = window.top.getPublicDict(opts.url);
				opts.loaded = true;
				var resultData = [];
				var countI = 0;
				if (data != null) {
					var dataFilter = opts.dataFilter;
					if (dataFilter == "") {
						for (var i = 0; i < data.length; i++) {
							var row = data[i];
							var returnValue = false;
							if (/[(0-9)*]/.test(str)) {
								returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0;
							}
							else {
								var py = row['py'];
								if (py) {
									returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0 || row['py'].indexOf(str) >= 0;
								}
								else {
									returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0;
								}
							}
							if (returnValue) {
								resultData.push(row);
								countI ++;
								if (countI == 10) {
									break;
								}
							}
						}
					}
					else {
						var resultData = [];
						if (dataFilter.indexOf("^") == -1 && dataFilter.indexOf("*") == -1 && dataFilter.indexOf("|") == -1 && dataFilter.indexOf("+") == -1
							&& dataFilter.indexOf("?") == -1 && dataFilter.indexOf("$") == -1 && dataFilter.indexOf("(") == -1 && dataFilter.indexOf(")") == -1
							&& dataFilter.indexOf("{") == -1 && dataFilter.indexOf("}") == -1 && dataFilter.indexOf("[") == -1 && dataFilter.indexOf("]") == -1
							&& dataFilter.indexOf(".") == -1) {
							dataFilter = "^" + dataFilter;
						}
						var regExp = new RegExp(dataFilter);
						for (var i = 0; i < data.length; i++) {
							var row = data[i];
							var v = row[opts.valueField] + '';
							if (regExp.test(v)) {
								var returnValue = false;
								if (/[(0-9)*]/.test(str)) {
									returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0;
								}
								else {
									var py = row['py'];
									if (py) {
										returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0 || row['py'].indexOf(str) >= 0;
									}
									else {
										returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0;
									}
								}
								if (returnValue) {
									resultData.push(row);
									countI ++;
									if (countI == 10) {
										break;
									}
								}
							}
						}
					}
				}
				success(resultData);
			}
			else {
				$.ajax({
					xhrFields: {withCredentials: true},
					crossDomain: true,
					type: opts.method,
					url: opts.url,
					data: param,
					dataType: 'json',
					success: function(data) {
						opts.loaded = true;
						var resultData = [];
						var countI = 0;
						if (data != null) {
							var dataFilter = opts.dataFilter;
							if (dataFilter == "") {
								for (var i = 0; i < data.length; i++) {
									var row = data[i];
									var returnValue = false;
									if (/[(0-9)*]/.test(str)) {
										returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0;
									}
									else {
										var py = row['py'];
										if (py) {
											returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0 || row['py'].indexOf(str) >= 0;
										}
										else {
											returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0;
										}
									}
									if (returnValue) {
										resultData.push(row);
										countI ++;
										if (countI == 10) {
											break;
										}
									}
								}
							}
							else {
								var resultData = [];
								if (dataFilter.indexOf("^") == -1 && dataFilter.indexOf("*") == -1 && dataFilter.indexOf("|") == -1 && dataFilter.indexOf("+") == -1
									&& dataFilter.indexOf("?") == -1 && dataFilter.indexOf("$") == -1 && dataFilter.indexOf("(") == -1 && dataFilter.indexOf(")") == -1
									&& dataFilter.indexOf("{") == -1 && dataFilter.indexOf("}") == -1 && dataFilter.indexOf("[") == -1 && dataFilter.indexOf("]") == -1
									&& dataFilter.indexOf(".") == -1) {
									dataFilter = "^" + dataFilter;
								}
								var regExp = new RegExp(dataFilter);
								for (var i = 0; i < data.length; i++) {
									var row = data[i];
									var v = row[opts.valueField] + '';
									if (regExp.test(v)) {
										var returnValue = false;
										if (/[(0-9)*]/.test(str)) {
											returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0;
										}
										else {
											var py = row['py'];
											if (py) {
												returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0 || row['py'].indexOf(str) >= 0;
											}
											else {
												returnValue = row[opts.valueField].indexOf(str) == 0 || row[opts.textField].toUpperCase().indexOf(str) >= 0;
											}
										}
										if (returnValue) {
											resultData.push(row);
											countI ++;
											if (countI == 10) {
												break;
											}
										}
									}
								}
							}
						}
						success(resultData);
					},
					error: function() {
						error.apply(this, arguments);
					}
				});
			}
		},
		filter: function(q, row) {
			return true;
		},
		loadFilter: function(data) {
			return data;
		},
		onLoadSuccess: function() {
		},
		onHidePanel: function() {
			var opts = $(this).combobox('options');
			if (!opts.validEnter) {
				return;
			}
			else {
				var clearData = false;
				var data = $(this).combobox('getData');
				if (data.length == 0) {
					clearData = true;
				}
				else {
					var panel = $(this).combo('panel');
					var itemSelected = panel.find('div.combobox-item-selected');
					if (itemSelected.length == 0) {
						clearData = true;
					}
					else {
						var oldValue = $(this).combobox("getValues");
						var valueArray = [];
						for (var i = 0; i < oldValue.length; i++) {
							var value = oldValue[i];
							if (value != null && value != "") {
								if (value.indexOf(opts.separator) != -1) {
									valueArray = valueArray.concat(value.split(opts.separator));
								}
								else {
									valueArray.push(value);
								}
							}
						}
						$(this).combobox("setValues", valueArray);
					}
				}
				if (clearData) {
					$(this).combobox('clear');
				}
			}
		}

	});

	$(document).ready(function() {
		var comboText = $('#' + comboID).next(".combo").children(".combo-text");
		var tempValue = comboText.val();
		$('#' + comboID).combobox("setValue", tempValue);
		comboText.bind("focus", function(e) {
			$(this).css('color', '#222222');
			if (this.value == "请输入搜索内容...") {
				this.value = "";
			}
		}).bind("blur", function() {
			if (this.value == "") {
				$(this).css('color', '#C0C0C0');
				this.value = "请输入搜索内容...";
			}
		});
	});

}

// 列表字典多选对话框
// isCache         是否缓存页面（默认为false不缓存）
// windowID        窗口的ID（isCache=true，windowID确保在同一个页面中唯一；isCache=false，windowID可以不指定；）
// parentWindow    调用页面的window对象
// dictName        字典对应的json文件
// dictInputID     字典值存放的ID
// dictShowID      字典显示框的ID
// dataFilter      数据过滤正则表达式
// onOkMethod      对话中点击确认后执行原页面中的方法（如：“xzqh_onOk”）
function dict_multiSelectList(isCache, windowID, parentWindow, dictName, dictInputID, dictShowID, dataFilter, onOkMethod) {
	if (isCache) {
		if (windowID == null || windowID == "") {
			$.messager.alert('页面错误','字典选择dict_multiSelectList()方法：<br><br>参数 windowID 不能为空！','error');
			return;
		}
	}
	if (!windowID) {
		var myTime = (new Date()).getTime();
		windowID = "win_" + myTime;
	}
	var openURL = basePath + "/forward/commonDictMultiList";
	if ("undefined" == typeof dataFilter || dataFilter == null) {
		dataFilter = "";
	}
	if ("undefined" == typeof onOkMethod || onOkMethod == null) {
		onOkMethod = "";
	}
	var paramArray = [];
	paramArray['parentWindow'] = parentWindow;
	paramArray['dictName'] = dictName;
	paramArray['dictInputID'] = dictInputID;
	paramArray['dictShowID'] = dictShowID;
	paramArray['dataFilter'] = dataFilter;
	paramArray['onOkMethod'] = onOkMethod;
	var dataOptions = {
		title: '&nbsp;字典选择',
		url: dictName,
		dataFilter: dataFilter,
		width: 800,
		height: 400,
		collapsible: false,
		minimizable: false,
		maximizable: false,
		closable: true,
		closed: false,
		cache: false,
		inline: false,
		modal: true
	};
	dataOptions.buttons = [
		{
			text: '确定',
			iconCls: 'icon-ok',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				iframeObject.ok_execute();
				$('#' + windowID).dialog('close');
				if (onOkMethod != null && onOkMethod != "") {
					try {
						var parentWinObject = parentWindow;
						if (parentWinObject.contentWindow) {
							parentWinObject = parentWinObject.contentWindow;
						}
						eval("parentWinObject." + onOkMethod + "()");
					}
					catch (err) {
						$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
					}
				}
			}
		},
		{
			text: '关闭',
			iconCls: 'icon-cancel',
			handler: function() {
				$('#' + windowID).dialog('close');
			}
		}
	];
	openWindow(isCache, windowID, openURL, paramArray, dataOptions);
}

// 树形字典多选对话框
// isCache         是否缓存页面（默认为false不缓存）
// windowID        窗口的ID（isCache=true，windowID确保在同一个页面中唯一；isCache=false，windowID可以不指定；）
// parentWindow    调用页面的window对象
// dictName        字典对应的json文件
// dictInputID     字典值存放的ID
// dictShowID      字典显示框的ID
// onlyLeaf        是否只能选叶子结点（默认为true）
// allExcludeChild 父结点选中了就不包括子结点（默认为false，只有当onlyLeaf为false时才生效）
// dataFilter      数据过滤正则表达式
// onOkMethod      对话中点击确认后执行原页面中的方法（如：“xzqh_onOk”）
function dict_multiSelectTree(isCache, windowID, parentWindow, dictName, dictInputID, dictShowID, onlyLeaf, allExcludeChild, dataFilter, onOkMethod) {
	if (isCache) {
		if (windowID == null || windowID == "") {
			$.messager.alert('页面错误','字典选择dict_multiSelectTree()方法：<br><br>参数 windowID 不能为空！','error');
			return;
		}
	}
	if (!windowID) {
		var myTime = (new Date()).getTime();
		windowID = "win_" + myTime;
	}
	var openURL = basePath + "/forward/commonDictMultiTree";
	if ("undefined" == typeof onlyLeaf || onlyLeaf == null) {
		onlyLeaf = true;
	}
	if ("undefined" == typeof allExcludeChild || allExcludeChild == null) {
		allExcludeChild = false;
	}
	if ("undefined" == typeof dataFilter || dataFilter == null) {
		dataFilter = "";
	}
	if ("undefined" == typeof onOkMethod || onOkMethod == null) {
		onOkMethod = "";
	}
	var paramArray = [];
	paramArray['parentWindow'] = parentWindow;
	paramArray['dictName'] = dictName;
	paramArray['dictInputID'] = dictInputID;
	paramArray['dictShowID'] = dictShowID;
	paramArray['onlyLeaf'] = onlyLeaf;
	paramArray['allExcludeChild'] = allExcludeChild;
	paramArray['dataFilter'] = dataFilter;
	paramArray['onOkMethod'] = onOkMethod;
	var dataOptions = {
		title: '&nbsp;字典选择',
		url: dictName,
		onlyLeaf: onlyLeaf,
		dataFilter: dataFilter,
		width: 800,
		height: 400,
		collapsible: false,
		minimizable: false,
		maximizable: false,
		closable: true,
		closed: false,
		cache: false,
		inline: false,
		modal: true
	};
	dataOptions.buttons = [
		{
			text: '确定',
			iconCls: 'icon-ok',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				iframeObject.ok_execute();
				$('#' + windowID).dialog('close');
				if (onOkMethod != null && onOkMethod != "") {
					try {
						var parentWinObject = parentWindow;
						if (parentWinObject.contentWindow) {
							parentWinObject = parentWinObject.contentWindow;
						}
						eval("parentWinObject." + onOkMethod + "()");
					}
					catch (err) {
						$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
					}
				}
			}
		},
		{
			text: '关闭',
			iconCls: 'icon-cancel',
			handler: function() {
				$('#' + windowID).dialog('close');
			}
		}
	];
	openWindow(isCache, windowID, openURL, paramArray, dataOptions);
}
function initAddressSearch2(comboID, filterData, returnFieldData,onSelectedFun){
	if(!filterData) filterData = {};
	if(!filterData.sort) filterData.sort = 'DZJB ASC,MPH ASC,MPHHZ_HFH ASC,MPHHZ_ZHFH ASC';
	if(!filterData.order) filterData.order = 'MULTIPLE_SORT';
	
	var basePath = basePath || pathConfig.basePath;
	var url=basePath + '/solrSearcher/doBzdzSelect';
	initSolrSearch(comboID, filterData, returnFieldData,url,onSelectedFun);
}

function initCompanySearch(comboID, filterData, returnFieldData,onSelectedFun){
	var basePath = basePath || pathConfig.basePath;
	var url=basePath + '/solrSearcher/doSydwSelect';
	initSolrSearch(comboID, filterData, returnFieldData,url,onSelectedFun);
}

function initHouseSearch(comboID, filterData, returnFieldData,onSelectedFun){
	if(!filterData) filterData = {};
	if(!filterData.sort) filterData.sort = 'FWDZ_DZJB';
	if(!filterData.order) filterData.order = 'ASC';
	
	var basePath = basePath || pathConfig.basePath;
	var url=basePath + '/solrSearcher/doSyfwSelect';
	var bzdzUrl=basePath + '/solrSearcher/doBzdzListSelect';
	initSolrSearch(comboID, filterData, returnFieldData,url,function(record){
		if(record){
			//房屋的地址信息不全，需要再查地址信息来补全
			loading('open','数据加载中,请耐心等待...');
			$.ajax({
				xhrFields: {withCredentials: true},
				crossDomain: true,
				type: 'post',
				url: bzdzUrl,
				data: {
					dzids : record.dzid
				},
				dataType: 'json',
				success: function(data) {
					if(data && data.length > 0){
						var fwxx = data[0];
						fwxx['gldjdm']=record.gldjdm;
						fwxx['lxdm']=record.lxdm;
						fwxx['fwid']=record.fwid;
						fwxx['ytdm']=record.ytdm;
						fwxx['sylxdm']=record.sylxdm;
						fwxx['jglxdm']=record.jglxdm;
						
						for (var item in returnFieldData) {
							if (fwxx[item]) {
								$('#' + returnFieldData[item]).val(fwxx[item]);
							}
						}
					}else{
						$.messager.alert({
	                        title: '提示信息',
	                        msg  : '数据同步不一致，无法保存，请联系维护中心！'
	                    });
						
						for (var item in returnFieldData) {
							$('#' + returnFieldData[item]).val('');
						}
					}
				},
				error: function() {
					console.log('getAddrssInfo ajax err');
				},
		        complete : function(){
		        	loading('close');
		        }
			});
		}
		
		
		
		
		//执行回调函数
		if (typeof onSelectedFun == 'function') {
			var fn = eval(onSelectedFun);
			fn(record);
		}
	});
}

//根据四川的需求对上面的函数进行精简优化(下拉框地址ID,过滤字段,回填字段)
function initSolrSearch(comboID, filterData, returnFieldData,url,onSelectedFun) {
	$('#' + comboID).combobox({
		address:true,
		delay: 600,
		unValidClear: false,
		url: url,
		loader: function(param, success, error) {
			var opts = $(this).combobox('options');
			if (!opts.url) return false;
			if ("undefined" == typeof param.q) {
				var data = [];
				success(data);
				return;
			} else {
				param.q = param.q.replace(/(^[\s|　]*)|([\s|　]*$)/g, "");
				if (param.q == "") {
					var data = [];
					success(data);

					if (returnFieldData) {
						for (var item in returnFieldData) {
							if (item == "text") {
								$('#' + returnFieldData[item]).val(param.q);
							}
							else {
								$('#' + returnFieldData[item]).val("");
							}
						}
					}
					return;
				}
			}

			if (returnFieldData) {
				for (var item in returnFieldData) {
					if (item == "text") {
						$('#' + returnFieldData[item]).val(param.q);
					}
					else {
						$('#' + returnFieldData[item]).val("");
					}
				}
			}
			var submitParam = {};
			for (var item in filterData) {
				submitParam[item] = filterData[item];
			}
			for (var item in submitParam) {
				var submitValue = submitParam[item];
				if (submitValue && submitValue.indexOf("#") == 0) { // 动态值
					if ($(submitValue).val()) {
						submitParam[item] = $(submitValue).val();
					}
					else {
						submitParam[item] = "";
					}
				}
			}
			submitParam['text'] = param.q;

			var i = 10;     //首次次加载的条数
			getSolrInfo(i);

			//后面将函数提取出来:getSolrInfo
			function getSolrInfo(page_size){
				submitParam['pagenum'] = 1;//起始页数
				submitParam['rownum'] = page_size;//加载条数
				loading('open','数据加载中,请耐心等待...');
				$.ajax({
					xhrFields: {withCredentials: true},
					crossDomain: true,
					type: opts.method,
					url: opts.url,
					data: submitParam,
					dataType: 'json',
					success: function(data) {
						//console.log('地址信息:',data);
						opts.loaded = true;
						success(data.rows);
						loading('close');
						var count = data.total;
						//每次加载10条地址
						if(count > i){
							var down_btn = $('<div class="address-more" id="address_more_btn"><i class="fa fa-angle-double-down"></i></div>');
							$('.combo-p').each(function(){
								var _this = $(this);
								var _display = _this.css('display');
								//当前显示的combobox的panel
								if(_display == 'block'){
									down_btn.appendTo(_this.children());
									$('#address_more_btn').off('click').on('click',function(){
										i += 10;
										getSolrInfo(i);
									});
								}
							});
						}
					},
					error: function() {
						loading('close');
						console.log('getSolrInfo ajax err');
					}
				});
			}
		},
		onLoadSuccess: function() {},
		filter: function(q, row) {
			return true;
		},
		formatter: function(row) {
			var opts = $(this).combobox('options');
			if (opts.maxValueLength == 0) { // 自动调整宽度与高度
				var data = $(this).combobox('getData');
				var optionTextMaxLen = 0; // text的最大长度
				for (var i = 0; i < data.length; i++){
					var tempRow = data[i];
					var sLen = getGBLength(tempRow[opts.textField]);
					if (sLen > optionTextMaxLen) {
						optionTextMaxLen = sLen;
					}
				}
				opts.maxValueLength = 1;
				autoPanelWidth = (optionTextMaxLen + 8) * 6;
				autoPanelWidth = autoPanelWidth < opts.width ? opts.width : autoPanelWidth;
				var autoPanelHeight = data.length;
				if (data.length > opts.panelOptionsNumber) {
					autoPanelHeight = opts.panelOptionsNumber;
				}
				else if (autoPanelHeight < 2) {
					autoPanelHeight = 2;
				}
				var itemHeight = 20;
				if (IE && IE_VERSION <= 9) {
					itemHeight = 18;
				}
				$(this).combo('panel').panel('resize',{width:autoPanelWidth ,height: autoPanelHeight * itemHeight + 50});
			}
			return row[opts.textField];
		},
		loadFilter: function(data) {
			return data;
		},
		onSelect: function(record) {
			//console.log('选择的地址:',record,returnFieldData);
			for (var item in returnFieldData) {
				if (record[item]) {
					$('#' + returnFieldData[item]).val(record[item]);
				}
			}
			//执行回调函数
			if (typeof onSelectedFun == 'function') {
				var fn = eval(onSelectedFun);
				fn(record);
			}
		},
		onClick: function(){return false;},
		//展示面板时,清空input的值并执行不带参数的回调函数
		onShowPanel :function(){
			/*
			for (var item in returnFieldData) {
				$('#' + returnFieldData[item]).val('');
			}
			//执行回调函数
			if (typeof onSelectedFun == 'function') {
				var fn = eval(onSelectedFun);
				try{fn();}catch(e){console.log(e)}
			}
			*/
		},
		onHidePanel : function(){
			for (var item in returnFieldData) {
				if (item == "text") {
					var text = $(this).combobox('getValue');
					if('' == text || typeof (text) == 'undefined'){
                        $(this).textbox('setText','');
						$('#' + returnFieldData[item]).val('');
					}
				}
			}
		}
	});

	$(function(){
		var comboText1 = $('#' + comboID).next(".combo").children(".combo-text");
		comboText1.attr('maxlength', 80); // 设置门楼牌号选择输入框只能输入80个汉字
	});
}

//地址管辖信息选择
function selectAddressTeam(record){
	console.log('你选择的地址是:',record);
	return;
	var dialog_div =
		'<div id="selectAddressTeam">'+
			'<div><label><input type="radio" name="address_team"><span>'+record.fxjmc+'</span></label></div>'+
			'<div><label><input type="radio" name="address_team"><span>'+record.pcsmc+'</span></label></div>'+
		'</div>';
	$('body').append(dialog_div);
	openDivForm({
		id: 'selectAddressTeam', //页面上div的id,将div设置为display:none,在div中设置好form属性,自动提交第一个form
		title: '选择地址',
		width: 400,
		height: 'auto',
		onClose: function () {
			$('#selectAddressTeam').remove();
		}
	}, [
		{
			text: '确定',
			handler: function () {
				$('#selectAddressTeam').dialog('close');
			}
		}, {
			text: '关闭',
			handler: function () {
				$('#selectAddressTeam').dialog('close');
			}
		}
	]);
}

// 附件管理
// lybm      来源表名
// lyid      来源id
// lyms      来源描述
// fileType  上传类型（只能上传图片=img）
// fileOnly  附件是否唯一（'1'=唯一，'0'=不唯一，默认不唯一）
// isTopOpen 是否在顶层页面打开（'1'=顶层页面打开，'0'=本面页打开，默认在本页面打开）
// winTitle  弹出页面窗口标题
function uploadFileEdit(lybm, lyid, lyms, fileType, fileOnly, isTopOpen, winTitle) {
	if ("undefined" == typeof lybm || lybm == null || lybm == "" ||
		"undefined" == typeof lyid || lyid == null || lyid == "") {
		topMessager.alert('', '管理附件传入参数错误！');
		return;
	}
	if ("undefined" == typeof lyms) {
		lyms = "";
	}
	lyms = encodeURI(lyms);
	if ("undefined" == typeof fileType) {
		fileType = "";
	}
	if ("undefined" == typeof fileOnly || fileOnly == "") {
		fileOnly = "0";
	}
	if ("undefined" == typeof winTitle || winTitle == null || winTitle == "") {
		winTitle = "附件信息";
	}
	var dataOptions = {
		title: winTitle,
		url: basePath + '/zpfjFjxxb/edit?lybm='+ lybm + '&lyid=' + lyid + '&lyms=' + lyms + '&fileType=' + fileType + '&fileOnly=' + fileOnly,
		width: 850,
		height: 531
	};
	if ("undefined" == typeof isTopOpen) {
		isTopOpen = "0";
	}
	if (isTopOpen == "1") {
		window.top.openWindowNoSave(false, "", window, null, dataOptions, "您是否要上传附件？", "");
	}
	else {
		openWindowNoSave(false, "", window, null, dataOptions, "您是否要上传附件？", "");
	}
}

// 附件查看
// lybm 来源表名
// lyid 来源id
// isTopOpen 是否在顶层页面打开（'1'=顶层页面打开，'0'=本面页打开，默认在本页面打开）
// winTitle  弹出页面窗口标题
function uploadFileView(lybm, lyid, isTopOpen, winTitle) {
	if ("undefined" == typeof lybm || lybm == null || lybm == "" ||
		"undefined" == typeof lyid || lyid == null || lyid == "") {
		topMessager.alert('', '查看附件传入参数错误！');
		return;
	}
	if ("undefined" == typeof winTitle || winTitle == null || winTitle == "") {
		winTitle = "附件信息";
	}
	var dataOptions = {
		title: winTitle,
		url: basePath + '/zpfjFjxxb/query?lybm='+ lybm + '&lyid=' + lyid,
		width: 850,
		height: 417
	};
	if ("undefined" == typeof isTopOpen) {
		isTopOpen = "0";
	}
	if (isTopOpen == "1") {
		window.top.openWindowNoSave(false, "", window, null, dataOptions);
	}
	else {
		openWindowNoSave(false, "", window, null, dataOptions);
	}
}

// 附件图片查看（支持多个）
// lybm       来源表名
// lyid       来源id
// divID      显示图片div的ID
// imgWidth   图片宽度
// imgHeight  图片高度
// emptyImage 无图片时显示的照片
function uploadFileImageView(lybm, lyid, divID, imgWidth, imgHeight, emptyImage) {
	if ("undefined" == typeof lybm || lybm == null || lybm == "" ||
		"undefined" == typeof lyid || lyid == null || lyid == "" ||
		"undefined" == typeof divID || divID == null || divID == "") {
		topMessager.alert('', '查看附件图片查传入参数错误！');
		return;
	}
	$('#' + divID).html('<span>图片加载中,请稍候...</span>');
	$.ajax({
		xhrFields: {withCredentials: true},
		crossDomain: true,
		type: "POST",
		url: basePath + "/zpfjFjxxb/queryZpfjIdList",
		dataType: "json",
		data: "lybm="+lybm+"&lyid="+lyid,
		success: function(data) {
			if (data) {
				var idArray = data.split(",");
				var id = idArray[0];
				var imgUrl = basePath + "/zpfjFjxxb/queryZpfjById.jpg?id=" + id;
				var divHtml = "<img id='"+ divID +"Img' src='"+ imgUrl +"' width='"+imgWidth+"' height='"+imgHeight+"' border='0' idString='"+ data +"' idIndex='1' style='cursor:pointer'/>";
				divHtml += "<div style='width:100%; padding-top:2px;text-align: center; padding-bottom:2px;font-family: \'Microsoft Himalaya\';'>" +
					"<input type='button' id='"+ divID +"ImgPrev' value='←' disabled='disabled' style='cursor:pointer;color:#fff;background: #747474;outline: none;border: 0;line-height: 18px;border-radius: 3px;cursor:not-allowed;'/>&nbsp;"+
					"<span id='"+ divID +"ImgIndex' style='color:#ed4848;'>1</span> / " + idArray.length + "</span>&nbsp;&nbsp;";
				if (idArray.length == 1) {
					divHtml += "<input type='button' id='"+ divID +"ImgNext' value='→' disabled='disabled' style='cursor:pointer;color:#fff;background: #747474;outline: none;border:0;line-height: 18px;border-radius: 3px;cursor:not-allowed;'/>";
				}
				else {
					divHtml += "<input type='button' id='"+ divID +"ImgNext' value='→' style='cursor:pointer;color:#fff;background: #0e6595;outline: none;border: 0;line-height: 18px;border-radius: 3px;'/>";
				}
				divHtml += "</div>";
				$('#' + divID).html(divHtml);
				$('#' + divID).bind("dblclick",function() {
					cancelBubble();
				});
				$('#' + divID + 'Img').bind("click",function() {
					var imgUrl = $('#' + divID + 'Img').attr('src');
					window.open(imgUrl);
				});
				$('#' + divID + 'ImgPrev').bind("click",function() {
					$('#' + divID + 'ImgNext').prop('disabled', false);
					$('#' + divID + 'ImgNext').css({'background':'#0e6595','cursor':'pointer'});
					var idString = $('#' + divID + 'Img').attr('idString');
					var idArray = idString.split(",");
					var idIndex = $('#' + divID + 'Img').attr('idIndex');
					idIndex = parseInt(idIndex) - 1;
					$('#' + divID + 'Img').attr('idIndex', idIndex);
					var id = idArray[idIndex - 1];
					var imgUrl = basePath + "/zpfjFjxxb/queryZpfjById.jpg?id=" + id;
					$('#' + divID + 'ImgIndex').html(idIndex);
					$('#' + divID + 'Img').attr('src', imgUrl);
					if (idIndex == 1) {
						$('#' + divID + 'ImgPrev').prop('disabled', true);
						$('#' + divID + 'ImgPrev').css({'background':'#747474','cursor':'not-allowed'});
					}
				});
				$('#' + divID + 'ImgNext').bind("click",function() {
					$('#' + divID + 'ImgPrev').prop('disabled', false);
					$('#' + divID + 'ImgPrev').css({'background':'#0e6595','cursor':'pointer'});
					var idString = $('#' + divID + 'Img').attr('idString');
					var idArray = idString.split(",");
					var idIndex = $('#' + divID + 'Img').attr('idIndex');
					idIndex = parseInt(idIndex) + 1;
					$('#' + divID + 'Img').attr('idIndex', idIndex);
					var id = idArray[idIndex - 1];
					var imgUrl = basePath + "/zpfjFjxxb/queryZpfjById.jpg?id=" + id;
					$('#' + divID + 'ImgIndex').html(idIndex);
					$('#' + divID + 'Img').attr('src', imgUrl);
					if (idIndex == idArray.length) {
						$('#' + divID + 'ImgNext').prop('disabled', true);
						$('#' + divID + 'ImgNext').css({'background':'#747474','cursor':'not-allowed'});
					}
				});
			}
			else {
				if ("undefined" == typeof emptyImage || emptyImage == null || emptyImage == "") {
					var emptyImage = staticPath + '/common/images/no_pic.jpg';
					var divHtml = "<img alt='静态无图片资源' id='"+ divID +"Img' src='"+ emptyImage +"' width='100%' height='100%' border='0'/>";
					$('#' + divID).html(divHtml);
					//css生成无图片样式
					/*var divHtml = "<div style='width:100%; padding-top:10px; padding-bottom:10px; color: #666666'>暂无照片</div>";
					 $('#' + divID).html(divHtml);*/
				}
				else {
					var divHtml = "<img id='"+ divID +"Img' src='"+ emptyImage +"' width='100%' height='100%' border='0'/>";
					$('#' + divID).html(divHtml);
				}
			}
		}
	});
}


// 人员照片管理
// ryid            人员ID
// lybm            来源表名
// lyid            来源id
// lyms            来源描述
// isTopOpen       是否在顶层页面打开（'1'=顶层页面打开，'0'=本面页打开，默认在本页面打开）
// onSubmitSuccess 对话中提交成功后执行的方法点击确认后执行原页面中的方法（如：“xzqh_onSubmitSuccess”，该方法的参数会传入弹出页面所有已提交的数据）
// oldPageObject   执行onSubmitSuccess方法时返回原页面的参数（如：原页面的某个动太对象{oldObject:this}）
function ptryzpEdit(ryid, lybm, lyid, lyms, isTopOpen, onSubmitSuccess, oldPageObject) {
	if ("undefined" == typeof ryid || ryid == null || ryid == "" ||
		"undefined" == typeof lybm || lybm == null || lybm == "" ||
		"undefined" == typeof lyid || lyid == null || lyid == "") {
		topMessager.alert('', '管理人员照片传入参数错误！');
		return;
	}
	if ("undefined" == typeof lyms) {
		lyms = "";
	}
	lyms = encodeURI(lyms);
	var dataOptions = {
		title: '人员照片信息',
		url: basePath + '/zpfjPtryzp/edit?ryid=' + ryid + '&lybm='+ lybm + '&lyid=' + lyid + '&lyms=' + lyms,
		width: 820,
		height: 200
	};
	if ("undefined" == typeof isTopOpen) {
		isTopOpen = "0";
	}
	if (isTopOpen == "1") {
		window.top.openWindowWithSave(false, "", window, null, dataOptions, "您是否要上传人员照片？", onSubmitSuccess, oldPageObject);
	}
	else {
		openWindowWithSave(false, "", window, null, dataOptions, "您是否要上传人员照片？",  onSubmitSuccess, oldPageObject);
	}
}

// 验证联系电话正确性（是否与其他人的联系电话有重复）
// lxdh_id 联系电话输入框ID
// ryid_id 人员ID输入框ID
function checkLxdh(lxdh_id, ryid_id) {
	var obj = document.getElementById(lxdh_id).value;
	var regTel1 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(obj);//带区号的固定电话
	var regTel2 = /^(\d{7,8})(-(\d{3,}))?$/.test(obj);//不带区号的固定电话
	var regTel3 = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/.test(obj);//移动电话号
	if(obj !=""){
		if(!regTel1 && !regTel2 && !regTel3){
			alert("请输入正确的电话号码 (固定电话或移动电话)\r例：024-6677XXXX或6677XXXX或1516688XXXX");
			document.getElementById(lxdh_id).focus();
			return;
		}}
	if (!$("#" + lxdh_id).validatebox("isValid")) {
		return;
	}
	if ($("#" + lxdh_id).val() == "") {
		return;
	}
	var _lxdh = $("#" + lxdh_id).attr("lxdh");
	if (!_lxdh) {
		_lxdh = "";
	}
	if ($("#" + lxdh_id).val() != _lxdh) {
		$.ajax({
			xhrFields: {withCredentials: true},
			crossDomain: true,
			type: "POST",
			url: basePath + "/ryRylxfsxxb/check",
			dataType: "json",
			data: "lxfs="+$("#" + lxdh_id).val()+"&ryid="+$("#" + ryid_id).val(),
			success: function(data){
				if (data && data.xm) {
					if (data.xm != ""||data.xm!=null) {
						topMessagerAlert('数据质量提醒', '电话号码：'+data.lxfs+'<br><br>已于'+data.djsj+'在办理业务中<br><br>登记为【'+data.xm+'】的联系电话，<br><br>与当前录入信息不符');
					}
				}

			}
		});
		$("#" + lxdh_id).attr("lxdh", $("#" + lxdh_id).val());
	}
}



/**************************************组织机构相关函数**********************************/
//组织机构部门名称初始化（用于数据库只保存部门代码，初始化显示部门名称时用）
// orgCodeInputID  部门代码输入框的ID
// orgNameInputID  部门显示输入框的ID
function public_getOrgName(orgCodeInputID, orgNameInputID) {
	if (orgCodeInputID && orgNameInputID) {
		var orgCodeValue = $('#' + orgCodeInputID).val();
		if (orgCodeValue != "") {
			$.ajax({
				xhrFields: {withCredentials: true},
				crossDomain: true,
				type: "POST",
				url: basePath + "/orgPublicSelect/getOrgName",
				dataType: "json",
				data: "orgCodes="+orgCodeValue,
				success: function(data) {
					if (data) {
						$('#' + orgNameInputID).val(data);
					}
				}
			});
		}
	}
}

// 组织机构部门选择（单选）
// rootOrgCode     部门树根结点代码（为空时为整个部门树）
// orgType         部门类型（=01只能选择部门；=02只能选择工作组，为空可以选择部门和工作组）
// orgLevel        部门等级过滤（多个时用逗号分隔）
// orgBizType      部门业务类型过滤（多个时用逗号分隔）
// orgCodeInputID  部门代码输入框的ID
// orgNameInputID  部门显示输入框的ID
// orgIDInputID    部门ID输入框的ID（不需要返回部门ID该参数时为''或null）
// allExcludeChild 该参数在单选中无用
// isCache         是否缓存页面（默认为false不缓存）
// windowID        窗口的ID（isCache=true，windowID确保在同一个页面中唯一；isCache=false，windowID可以不指定；）
// parentWindow    调用页面的window对象
// onOkMethod      对话中点击确认后执行原页面中的方法（如：“orgSelect_onOk”）
// dialogTitle     对话框的标题
function public_singleSelectOrg(rootOrgCode, orgType, orgLevel, orgBizType, orgCodeInputID, orgNameInputID, orgIDInputID, allExcludeChild, isCache, windowID, parentWindow, onOkMethod, dialogTitle) {
	if (isCache) {
		if (windowID == null || windowID == "") {
			$.messager.alert('页面错误','组织机构部门选择public_singleSelectOrg()方法：<br><br>参数 windowID 不能为空！','error');
			return;
		}
	}
	if (!windowID) {
		var myTime = (new Date()).getTime();
		windowID = "win_" + myTime;
	}
	if ("undefined" == typeof rootOrgCode || rootOrgCode == null) {
		rootOrgCode = "";
	}
	if ("undefined" == typeof orgType || orgType == null) {
		orgType = "";
	}
	if ("undefined" == typeof orgLevel || orgLevel == null) {
		orgLevel = "";
	}
	if ("undefined" == typeof orgBizType || orgBizType == null) {
		orgBizType = "";
	}
	if ("undefined" == typeof onOkMethod || onOkMethod == null) {
		onOkMethod = "";
	}
	if ("undefined" == typeof dialogTitle || dialogTitle == null || dialogTitle == "") {
		dialogTitle = "组织机构部门选择";
	}
	var openURL = basePath + "/orgPublicSelect/singleSelect?rootOrgCode=" + rootOrgCode + "&orgType=" + orgType + "&orgLevel=" + orgLevel + "&orgBizType=" + orgBizType;
	var paramArray = [];
	paramArray['parentWindow'] = parentWindow;
	paramArray['orgCodeInputID'] = orgCodeInputID;
	paramArray['orgNameInputID'] = orgNameInputID;
	paramArray['orgIDInputID'] = orgIDInputID;
	paramArray['onOkMethod'] = onOkMethod;
	var dataOptions = {
		title: '&nbsp;' + dialogTitle,
		width: 800,
		height: 400,
		collapsible: false,
		minimizable: false,
		maximizable: false,
		closable: true,
		closed: false,
		cache: false,
		inline: false,
		modal: true
	};
	dataOptions.buttons = [
		{
			text: '确定',
			iconCls: 'icon-ok',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				if (iframeObject.ok_execute()) {
					$('#' + windowID).dialog('close');
					if (onOkMethod != null && onOkMethod != "") {
						try {
							var parentWinObject = parentWindow;
							if (parentWinObject.contentWindow) {
								parentWinObject = parentWinObject.contentWindow;
							}
							eval("parentWinObject." + onOkMethod + "(orgCodeInputID)");
						}
						catch (err) {
							$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
						}
					}
				}
			}
		},
		{
			text: '清空',
			iconCls: 'icon-remove',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				iframeObject.clear_execute();
				$('#' + windowID).dialog('close');
				if (onOkMethod != null && onOkMethod != "") {
					try {
						var parentWinObject = parentWindow;
						if (parentWinObject.contentWindow) {
							parentWinObject = parentWinObject.contentWindow;
						}
						eval("parentWinObject." + onOkMethod + "(orgCodeInputID)");
					}
					catch (err) {
						$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
					}
				}
			}
		},
		{
			text: '关闭',
			iconCls: 'icon-cancel',
			handler: function() {
				$('#' + windowID).dialog('close');
			}
		}
	];
	openWindow(isCache, windowID, openURL, paramArray, dataOptions);
}

// 组织机构部门选择（多选）
// rootOrgCode     部门树根结点代码（为空时为整个部门树）
// orgType         部门类型（=01只能选择部门；=02只能选择工作组，为空可以选择部门和工作组）
// orgLevel        部门等级过滤（多个时用逗号分隔）
// orgBizType      部门业务类型过滤（多个时用逗号分隔）
// orgCodeInputID  部门代码输入框的ID
// orgNameInputID  部门显示输入框的ID
// orgIDInputID    部门ID输入框的ID（不需要返回部门ID该参数时为''或null）
// allExcludeChild 父结点选中了就不包括子结点（默认为false）
// isCache         是否缓存页面（默认为false不缓存）
// windowID        窗口的ID（isCache=true，windowID确保在同一个页面中唯一；isCache=false，windowID可以不指定；）
// parentWindow    调用页面的window对象
// onOkMethod      对话中点击确认后执行原页面中的方法（如：“orgSelect_onOk”）
// dialogTitle     对话框的标题
function public_multiSelectOrg(rootOrgCode, orgType, orgLevel, orgBizType, orgCodeInputID, orgNameInputID, orgIDInputID, allExcludeChild, isCache, windowID, parentWindow, onOkMethod, dialogTitle) {
	if (isCache) {
		if (windowID == null || windowID == "") {
			$.messager.alert('页面错误','组织机构部门选择public_multiSelectOrg()方法：<br><br>参数 windowID 不能为空！','error');
			return;
		}
	}
	if (!windowID) {
		var myTime = (new Date()).getTime();
		windowID = "win_" + myTime;
	}
	if ("undefined" == typeof rootOrgCode || rootOrgCode == null) {
		rootOrgCode = "";
	}
	if ("undefined" == typeof orgType || orgType == null) {
		orgType = "";
	}
	if ("undefined" == typeof orgLevel || orgLevel == null) {
		orgLevel = "";
	}
	if ("undefined" == typeof orgBizType || orgBizType == null) {
		orgBizType = "";
	}
	if ("undefined" == typeof allExcludeChild || allExcludeChild == null) {
		allExcludeChild = false;
	}
	if ("undefined" == typeof onOkMethod || onOkMethod == null) {
		onOkMethod = "";
	}
	if ("undefined" == typeof dialogTitle || dialogTitle == null || dialogTitle == "") {
		dialogTitle = "组织机构部门选择";
	}
	var orgCodeString = "";
	var parentWinObject = parentWindow;
	if (parentWinObject.contentWindow) {
		parentWinObject = parentWinObject.contentWindow;
	}
	if (orgCodeInputID && parentWinObject.$('#' + orgCodeInputID).length > 0) {
		orgCodeString = parentWinObject.$('#' + orgCodeInputID).val();
	}
	var otherOrgCode = "";
	if (orgCodeString.length > 1900) { // IE最大支持2048个字符
		var tempString = orgCodeString.substring(0, 1900);
		var atI = tempString.lastIndexOf(",");
		otherOrgCode = orgCodeString.substr(atI + 1);
		orgCodeString = orgCodeString.substring(0, atI);
	}
	var urlParameter = "rootOrgCode=" + rootOrgCode + "&orgType=" + orgType + "&orgLevel=" + orgLevel + "&orgBizType=" + orgBizType;
	urlParameter += "&orgCodeString=" + orgCodeString;
	var openURL = basePath + "/orgPublicSelect/multiSelect?" + urlParameter;
	var paramArray = [];
	paramArray['parentWindow'] = parentWindow;
	paramArray['orgCodeInputID'] = orgCodeInputID;
	paramArray['orgNameInputID'] = orgNameInputID;
	paramArray['orgIDInputID'] = orgIDInputID;
	paramArray['allExcludeChild'] = allExcludeChild;
	paramArray['onOkMethod'] = onOkMethod;
	paramArray['otherOrgCode'] = otherOrgCode;
	var dataOptions = {
		title: '&nbsp;' + dialogTitle,
		width: 800,
		height: 400,
		collapsible: false,
		minimizable: false,
		maximizable: false,
		closable: true,
		closed: false,
		cache: false,
		inline: false,
		modal: true
	};
	dataOptions.buttons = [
		{
			text: '确定',
			iconCls: 'icon-ok',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				iframeObject.ok_execute();
				$('#' + windowID).dialog('close');
				if (onOkMethod != null && onOkMethod != "") {
					try {
						var parentWinObject = parentWindow;
						if (parentWinObject.contentWindow) {
							parentWinObject = parentWinObject.contentWindow;
						}
						eval("parentWinObject." + onOkMethod + "(orgCodeInputID)");
					}
					catch (err) {
						$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
					}
				}
			}
		},
		{
			text: '关闭',
			iconCls: 'icon-cancel',
			handler: function() {
				$('#' + windowID).dialog('close');
			}
		}
	];
	openWindow(isCache, windowID, openURL, paramArray, dataOptions);
}

// 组织机构人员选择（单选）
// rootOrgCode        部门树根结点代码（为空时为整个部门树）
// orgType            部门类型（=01只能选择部门；=02只能选择工作组，为空可以选择部门和工作组）
// orgLevel           部门等级过滤（多个时用逗号分隔）
// orgBizType         部门业务类型过滤（多个时用逗号分隔）
// userPositions      人员虚拟岗位表POSID过滤（多个时用逗号分隔）
// initFocusOrgCode   无已选择的人员时，初始定位部门代码
// userIDInputID      人员userID输入框的ID
// userNameInputID    人员显示输入框的ID
// userTableIDInputID 人员ID输入框的ID（不需要返回人员ID该参数时为''或null）
// orgCodeInputID     部门代码输入框的ID（不需要返回部门ID该参数时为''或null）
// orgNameInputID     部门显示输入框的ID（不需要返回部门ID该参数时为''或null）
// orgIDInputID       部门ID输入框的ID（不需要返回部门ID该参数时为''或null）
// isCache            是否缓存页面（默认为false不缓存）
// windowID           窗口的ID（isCache=true，windowID确保在同一个页面中唯一；isCache=false，windowID可以不指定；）
// parentWindow       调用页面的window对象
// onOkMethod         对话中点击确认后执行原页面中的方法（如：“orgUserSelect_onOk”）
// dialogTitle        对话框的标题
function public_singleSelectOrgUser(rootOrgCode, orgType, orgLevel, orgBizType, userPositions, initFocusOrgCode, userIDInputID, userNameInputID, userTableIDInputID, orgCodeInputID, orgNameInputID, orgIDInputID, isCache, windowID, parentWindow, onOkMethod, dialogTitle,dialogTop) {
	if (isCache) {
		if (windowID == null || windowID == "") {
			$.messager.alert('页面错误','组织机构人员选择public_singleSelectOrgUser()方法：<br><br>参数 windowID 不能为空！','error');
			return;
		}
	}
	if (!windowID) {
		var myTime = (new Date()).getTime();
		windowID = "win_" + myTime;
	}
	if ("undefined" == typeof rootOrgCode || rootOrgCode == null) {
		rootOrgCode = "";
	}
	if ("undefined" == typeof orgType || orgType == null) {
		orgType = "";
	}
	if ("undefined" == typeof orgLevel || orgLevel == null) {
		orgLevel = "";
	}
	if ("undefined" == typeof orgBizType || orgBizType == null) {
		orgBizType = "";
	}
	if ("undefined" == typeof userPositions || userPositions == null) {
		userPositions = "";
	}
	if ("undefined" == typeof initFocusOrgCode || initFocusOrgCode == null) {
		initFocusOrgCode = "";
	}
	if ("undefined" == typeof onOkMethod || onOkMethod == null) {
		onOkMethod = "";
	}
	if ("undefined" == typeof dialogTitle || dialogTitle == null || dialogTitle == "") {
		dialogTitle = "组织机构人员选择";
	}
	var urlParameter = "rootOrgCode=" + rootOrgCode + "&orgType=" + orgType + "&orgLevel=" + orgLevel + "&orgBizType=" + orgBizType + "&userPositions=" + userPositions + "&initFocusOrgCode=" + initFocusOrgCode;
	var userIdString = "";
	var parentWinObject = parentWindow;
	if (parentWinObject.contentWindow) {
		parentWinObject = parentWinObject.contentWindow;
	}
	if (userIDInputID && parentWinObject.$('#' + userIDInputID).length > 0) {
		userIdString = parentWinObject.$('#' + userIDInputID).val();
	}
	var userTableIdString = "";
	if (userTableIDInputID && parentWinObject.$('#' + userTableIDInputID).length > 0) {
		userTableIdString = parentWinObject.$('#' + userTableIDInputID).val();
	}
	urlParameter += "&userIdString=" + userIdString + "&userTableIdString=" + userTableIdString;
	var openURL = basePath + "/orgUserPublicSelect/singleSelect?" + urlParameter;
	var paramArray = [];
	paramArray['parentWindow'] = parentWindow;
	paramArray['userIDInputID'] = userIDInputID;
	paramArray['userNameInputID'] = userNameInputID;
	paramArray['userTableIDInputID'] = userTableIDInputID;
	paramArray['orgCodeInputID'] = orgCodeInputID;
	paramArray['orgNameInputID'] = orgNameInputID;
	paramArray['orgIDInputID'] = orgIDInputID;
	paramArray['onOkMethod'] = onOkMethod;
	var dataOptions = {
		title: '&nbsp;' + dialogTitle,
		top: dialogTop,
		width: 800,
		height: 400,
		collapsible: false,
		minimizable: false,
		maximizable: false,
		closable: true,
		closed: false,
		cache: false,
		inline: false,
		modal: true
	};
	dataOptions.buttons = [
		{
			text: '确定',
			iconCls: 'icon-ok',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				if (iframeObject.ok_execute()) {
					$('#' + windowID).dialog('close');
					if (onOkMethod != null && onOkMethod != "") {
						try {
							var parentWinObject = parentWindow;
							if (parentWinObject.contentWindow) {
								parentWinObject = parentWinObject.contentWindow;
							}
							eval("parentWinObject." + onOkMethod + "(userIDInputID)");
						}
						catch (err) {
							$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
						}
					}
				}
			}
		},
		{
			text: '清空',
			iconCls: 'icon-remove',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				iframeObject.clear_execute();
				$('#' + windowID).dialog('close');
				if (onOkMethod != null && onOkMethod != "") {
					try {
						var parentWinObject = parentWindow;
						if (parentWinObject.contentWindow) {
							parentWinObject = parentWinObject.contentWindow;
						}
						eval("parentWinObject." + onOkMethod + "(userIDInputID)");
					}
					catch (err) {
						$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
					}
				}
			}
		},
		{
			text: '关闭',
			iconCls: 'icon-cancel',
			handler: function() {
				$('#' + windowID).dialog('close');
			}
		}
	];
	openWindow(isCache, windowID, openURL, paramArray, dataOptions);
}

// 组织机构人员选择（多选）
// rootOrgCode        部门树根结点代码（为空时为整个部门树）
// orgType            部门类型（=01只能选择部门；=02只能选择工作组，为空可以选择部门和工作组）
// orgLevel           部门等级过滤（多个时用逗号分隔）
// orgBizType         部门业务类型过滤（多个时用逗号分隔）
// userPositions      人员虚拟岗位表POSID过滤（多个时用逗号分隔）
// initFocusOrgCode   无已选择的人员时，初始定位部门代码
// userIDInputID      人员userID输入框的ID
// userNameInputID    人员显示输入框的ID
// userTableIDInputID 人员ID输入框的ID（不需要返回人员ID该参数时为''或null）
// orgCodeInputID     部门代码输入框的ID（不需要返回部门ID该参数时为''或null）
// orgNameInputID     部门显示输入框的ID（不需要返回部门ID该参数时为''或null）
// orgIDInputID       部门ID输入框的ID（不需要返回部门ID该参数时为''或null）
// isCache            是否缓存页面（默认为false不缓存）
// windowID           窗口的ID（isCache=true，windowID确保在同一个页面中唯一；isCache=false，windowID可以不指定；）
// parentWindow       调用页面的window对象
// onOkMethod         对话中点击确认后执行原页面中的方法（如：“orgUserSelect_onOk”）
// dialogTitle        对话框的标题
function public_multiSelectOrgUser(rootOrgCode, orgType, orgLevel, orgBizType, userPositions, initFocusOrgCode, userIDInputID, userNameInputID, userTableIDInputID, orgCodeInputID, orgNameInputID, orgIDInputID, isCache, windowID, parentWindow, onOkMethod, dialogTitle,listOptions) {
	if (isCache) {
		if (windowID == null || windowID == "") {
			$.messager.alert('页面错误','组织机构人员选择public_multiSelectOrgUser()方法：<br><br>参数 windowID 不能为空！','error');
			return;
		}
	}
	if (!windowID) {
		var myTime = (new Date()).getTime();
		windowID = "win_" + myTime;
	}
	if ("undefined" == typeof rootOrgCode || rootOrgCode == null) {
		rootOrgCode = "";
	}
	if ("undefined" == typeof orgType || orgType == null) {
		orgType = "";
	}
	if ("undefined" == typeof orgLevel || orgLevel == null) {
		orgLevel = "";
	}
	if ("undefined" == typeof orgBizType || orgBizType == null) {
		orgBizType = "";
	}
	if ("undefined" == typeof userPositions || userPositions == null) {
		userPositions = "";
	}
	if ("undefined" == typeof initFocusOrgCode || initFocusOrgCode == null) {
		initFocusOrgCode = "";
	}
	if ("undefined" == typeof onOkMethod || onOkMethod == null) {
		onOkMethod = "";
	}
	if ("undefined" == typeof dialogTitle || dialogTitle == null || dialogTitle == "") {
		dialogTitle = "组织机构人员选择";
	}
	if ("undefined" == typeof listOptions || listOptions == null || listOptions == "") {
		listOptions = "";
	}
	var urlParameter = "rootOrgCode=" + rootOrgCode + "&orgType=" + orgType + "&orgLevel=" + orgLevel + "&orgBizType=" + orgBizType + "&userPositions=" + userPositions + "&initFocusOrgCode=" + initFocusOrgCode+"&listOptions="+listOptions;
	var userIdString = "";
	var parentWinObject = parentWindow;
	if (parentWinObject.contentWindow) {
		parentWinObject = parentWinObject.contentWindow;
	}
	if (userIDInputID && parentWinObject.$('#' + userIDInputID).length > 0) {
		userIdString = parentWinObject.$('#' + userIDInputID).val();
	}
	var userTableIdString = "";
	if (userTableIDInputID && parentWinObject.$('#' + userTableIDInputID).length > 0) {
		userTableIdString = parentWinObject.$('#' + userTableIDInputID).val();
	}
	urlParameter += "&userIdString=" + userIdString + "&userTableIdString=" + userTableIdString;
	var openURL = basePath + "/orgUserPublicSelect/multiSelect?" + urlParameter;
	var paramArray = [];
	paramArray['parentWindow'] = parentWindow;
	paramArray['userIDInputID'] = userIDInputID;
	paramArray['userNameInputID'] = userNameInputID;
	paramArray['userTableIDInputID'] = userTableIDInputID;
	paramArray['orgCodeInputID'] = orgCodeInputID;
	paramArray['orgNameInputID'] = orgNameInputID;
	paramArray['orgIDInputID'] = orgIDInputID;
	paramArray['onOkMethod'] = onOkMethod;
	paramArray['listOptions'] = listOptions;
	var dataOptions = {
		title: '&nbsp;' + dialogTitle,
		width: 800,
		height: 400,
		collapsible: false,
		minimizable: false,
		maximizable: false,
		closable: true,
		closed: false,
		cache: false,
		inline: false,
		modal: true
	};
	dataOptions.buttons = [
		{
			text: '确定',
			iconCls: 'icon-ok',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				iframeObject.ok_execute();
				$('#' + windowID).dialog('close');
				if (onOkMethod != null && onOkMethod != "") {
					try {
						var parentWinObject = parentWindow;
						if (parentWinObject.contentWindow) {
							parentWinObject = parentWinObject.contentWindow;
						}
						eval("parentWinObject." + onOkMethod + "(userIDInputID)");
					}
					catch (err) {
						$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
					}
				}
			}
		},
		{
			text: '关闭',
			iconCls: 'icon-cancel',
			handler: function() {
				$('#' + windowID).dialog('close');
			}
		}
	];
	openWindow(isCache, windowID, openURL, paramArray, dataOptions);
}

// 组织机构岗位选择（单选）
// rootOrgCode        部门树根结点代码（为空时为整个部门树）
// orgType            部门类型（=01只能选择部门；=02只能选择工作组，为空可以选择部门和工作组）
// orgLevel           部门等级过滤（多个时用逗号分隔）
// orgBizType         部门业务类型过滤（多个时用逗号分隔）
// posids             人员虚拟岗位表POSID过滤（多个时用逗号分隔）
// initFocusOrgCode   无已选择的人员时，初始定位部门代码
// posIDInputID       岗位ID（实体岗位）输入框的ID
// posNameInputID     岗位人员显示输入框的ID
// orgCodeInputID     部门代码输入框的ID（不需要返回部门ID该参数时为''或null）
// orgNameInputID     部门显示输入框的ID（不需要返回部门ID该参数时为''或null）
// orgIDInputID       部门ID输入框的ID（不需要返回部门ID该参数时为''或null）
// isCache            是否缓存页面（默认为false不缓存）
// windowID           窗口的ID（isCache=true，windowID确保在同一个页面中唯一；isCache=false，windowID可以不指定；）
// parentWindow       调用页面的window对象
// onOkMethod         对话中点击确认后执行原页面中的方法（如：“orgPosSelect_onOk”）
// dialogTitle        对话框的标题
function public_singleSelectOrgPos(rootOrgCode, orgType, orgLevel, orgBizType, posids, initFocusOrgCode, posIDInputID, posNameInputID, orgCodeInputID, orgNameInputID, orgIDInputID, isCache, windowID, parentWindow, onOkMethod, dialogTitle) {
	if (isCache) {
		if (windowID == null || windowID == "") {
			$.messager.alert('页面错误','组织机构岗位选择public_singleSelectOrgPos()方法：<br><br>参数 windowID 不能为空！','error');
			return;
		}
	}
	if (!windowID) {
		var myTime = (new Date()).getTime();
		windowID = "win_" + myTime;
	}
	if ("undefined" == typeof rootOrgCode || rootOrgCode == null) {
		rootOrgCode = "";
	}
	if ("undefined" == typeof orgType || orgType == null) {
		orgType = "";
	}
	if ("undefined" == typeof orgLevel || orgLevel == null) {
		orgLevel = "";
	}
	if ("undefined" == typeof orgBizType || orgBizType == null) {
		orgBizType = "";
	}
	if ("undefined" == typeof posids || posids == null) {
		posids = "";
	}
	if ("undefined" == typeof initFocusOrgCode || initFocusOrgCode == null) {
		initFocusOrgCode = "";
	}
	if ("undefined" == typeof onOkMethod || onOkMethod == null) {
		onOkMethod = "";
	}
	if ("undefined" == typeof dialogTitle || dialogTitle == null || dialogTitle == "") {
		dialogTitle = "组织机构岗位选择";
	}
	var urlParameter = "rootOrgCode=" + rootOrgCode + "&orgType=" + orgType + "&orgLevel=" + orgLevel + "&orgBizType=" + orgBizType + "&posids=" + posids + "&initFocusOrgCode=" + initFocusOrgCode;
	var realPosIdString = "";
	if (posIDInputID && $('#' + posIDInputID).length > 0) {
		realPosIdString = $('#' + posIDInputID).val();
	}
	urlParameter += "&realPosIdString=" + realPosIdString;
	var openURL = basePath + "/orgPosPublicSelect/singleSelect?" + urlParameter;
	var paramArray = [];
	paramArray['parentWindow'] = parentWindow;
	paramArray['posIDInputID'] = posIDInputID;
	paramArray['posNameInputID'] = posNameInputID;
	paramArray['orgCodeInputID'] = orgCodeInputID;
	paramArray['orgNameInputID'] = orgNameInputID;
	paramArray['orgIDInputID'] = orgIDInputID;
	paramArray['onOkMethod'] = onOkMethod;
	var dataOptions = {
		title: '&nbsp;' + dialogTitle,
		width: 800,
		height: 400,
		collapsible: false,
		minimizable: false,
		maximizable: false,
		closable: true,
		closed: false,
		cache: false,
		inline: false,
		modal: true
	};
	dataOptions.buttons = [
		{
			text: '确定',
			iconCls: 'icon-ok',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				if (iframeObject.ok_execute()) {
					$('#' + windowID).dialog('close');
					if (onOkMethod != null && onOkMethod != "") {
						try {
							var parentWinObject = parentWindow;
							if (parentWinObject.contentWindow) {
								parentWinObject = parentWinObject.contentWindow;
							}
							eval("parentWinObject." + onOkMethod + "(posIDInputID)");
						}
						catch (err) {
							$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
						}
					}
				}
			}
		},
		{
			text: '清空',
			iconCls: 'icon-remove',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				iframeObject.clear_execute();
				$('#' + windowID).dialog('close');
				if (onOkMethod != null && onOkMethod != "") {
					try {
						var parentWinObject = parentWindow;
						if (parentWinObject.contentWindow) {
							parentWinObject = parentWinObject.contentWindow;
						}
						eval("parentWinObject." + onOkMethod + "(posIDInputID)");
					}
					catch (err) {
						$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
					}
				}
			}
		},
		{
			text: '关闭',
			iconCls: 'icon-cancel',
			handler: function() {
				$('#' + windowID).dialog('close');
			}
		}
	];
	openWindow(isCache, windowID, openURL, paramArray, dataOptions);
}

// 组织机构岗位选择（多选）
// rootOrgCode        部门树根结点代码（为空时为整个部门树）
// orgType            部门类型（=01只能选择部门；=02只能选择工作组，为空可以选择部门和工作组）
// orgLevel           部门等级过滤（多个时用逗号分隔）
// orgBizType         部门业务类型过滤（多个时用逗号分隔）
// posids             人员虚拟岗位表POSID过滤（多个时用逗号分隔）
// initFocusOrgCode   无已选择的人员时，初始定位部门代码
// posIDInputID       岗位ID（实体岗位）输入框的ID
// posNameInputID     岗位人员显示输入框的ID
// orgCodeInputID     部门代码输入框的ID（不需要返回部门ID该参数时为''或null）
// orgNameInputID     部门显示输入框的ID（不需要返回部门ID该参数时为''或null）
// orgIDInputID       部门ID输入框的ID（不需要返回部门ID该参数时为''或null）
// isCache            是否缓存页面（默认为false不缓存）
// windowID           窗口的ID（isCache=true，windowID确保在同一个页面中唯一；isCache=false，windowID可以不指定；）
// parentWindow       调用页面的window对象
// onOkMethod         对话中点击确认后执行原页面中的方法（如：“orgPosSelect_onOk”）
// dialogTitle        对话框的标题
function public_multiSelectOrgPos(rootOrgCode, orgType, orgLevel, orgBizType, posids, initFocusOrgCode, posIDInputID, posNameInputID, orgCodeInputID, orgNameInputID, orgIDInputID, isCache, windowID, parentWindow, onOkMethod, dialogTitle) {
	if (isCache) {
		if (windowID == null || windowID == "") {
			$.messager.alert('页面错误','组织机构岗位选择public_multiSelectOrgPos()方法：<br><br>参数 windowID 不能为空！','error');
			return;
		}
	}
	if (!windowID) {
		var myTime = (new Date()).getTime();
		windowID = "win_" + myTime;
	}
	if ("undefined" == typeof rootOrgCode || rootOrgCode == null) {
		rootOrgCode = "";
	}
	if ("undefined" == typeof orgType || orgType == null) {
		orgType = "";
	}
	if ("undefined" == typeof orgLevel || orgLevel == null) {
		orgLevel = "";
	}
	if ("undefined" == typeof orgBizType || orgBizType == null) {
		orgBizType = "";
	}
	if ("undefined" == typeof posids || posids == null) {
		posids = "";
	}
	if ("undefined" == typeof initFocusOrgCode || initFocusOrgCode == null) {
		initFocusOrgCode = "";
	}
	if ("undefined" == typeof onOkMethod || onOkMethod == null) {
		onOkMethod = "";
	}
	if ("undefined" == typeof dialogTitle || dialogTitle == null || dialogTitle == "") {
		dialogTitle = "组织机构岗位选择";
	}
	var urlParameter = "rootOrgCode=" + rootOrgCode + "&orgType=" + orgType + "&orgLevel=" + orgLevel + "&orgBizType=" + orgBizType + "&posids=" + posids + "&initFocusOrgCode=" + initFocusOrgCode;
	var realPosIdString = "";
	var parentWinObject = parentWindow;
	if (parentWinObject.contentWindow) {
		parentWinObject = parentWinObject.contentWindow;
	}
	if (posIDInputID && parentWindow.$('#' + posIDInputID).length > 0) {
		realPosIdString = parentWindow.$('#' + posIDInputID).val();
	}
	urlParameter += "&realPosIdString=" + realPosIdString;
	var openURL = basePath + "/orgPosPublicSelect/multiSelect?" + urlParameter;
	var paramArray = [];
	paramArray['parentWindow'] = parentWindow;
	paramArray['posIDInputID'] = posIDInputID;
	paramArray['posNameInputID'] = posNameInputID;
	paramArray['orgCodeInputID'] = orgCodeInputID;
	paramArray['orgNameInputID'] = orgNameInputID;
	paramArray['orgIDInputID'] = orgIDInputID;
	paramArray['onOkMethod'] = onOkMethod;
	var dataOptions = {
		title: '&nbsp;' + dialogTitle,
		width: 800,
		height: 400,
		collapsible: false,
		minimizable: false,
		maximizable: false,
		closable: true,
		closed: false,
		cache: false,
		inline: false,
		modal: true
	};
	dataOptions.buttons = [
		{
			text: '确定',
			iconCls: 'icon-ok',
			handler: function() {
				var iframeObject = window.frames[windowID + '_iframe'];
				if (iframeObject.contentWindow) {
					iframeObject = iframeObject.contentWindow;
				}
				iframeObject.ok_execute();
				$('#' + windowID).dialog('close');
				if (onOkMethod != null && onOkMethod != "") {
					try {
						var parentWinObject = parentWindow;
						if (parentWinObject.contentWindow) {
							parentWinObject = parentWinObject.contentWindow;
						}
						eval("parentWinObject." + onOkMethod + "(posIDInputID)");
					}
					catch (err) {
						$.messager.alert('页面错误', "执行事件 "+ onOkMethod + " 有错误发生：<br/><br/>错误名称: " + err.name + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误行号:" + (err.number & 0xFFFF ) + "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误信息:" + err.message, 'error');
					}
				}
			}
		},
		{
			text: '关闭',
			iconCls: 'icon-cancel',
			handler: function() {
				$('#' + windowID).dialog('close');
			}
		}
	];
	openWindow(isCache, windowID, openURL, paramArray, dataOptions);
}

