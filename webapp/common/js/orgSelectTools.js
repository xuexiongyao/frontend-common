/*
 * 组织机构选择工具JS
 */

var normalHtmlDivId = "public_selectOrg_";//组织机构多选的HTML DIV标签的ID前缀
var filterDataAry = {};

/**
 * 组织机构多选初始方法
 * @param textboxID 弹出框触发和显示的textbox对象ID
 * @param filterData 过滤条件：rootOrgCode 根节点orgcode、orgType 部门类型、orgLevel 部门等级、orgBizType 部门业务类型
 * @param returnFieldData 返回数据存储对象：ID 部门编号、TEXT 部门名称
 * @param onSelectedFun 回掉方法
 */
function initMultiSelectOrg(textboxID, filterData, returnFieldData, onSelectedFun) {
    if (!filterData)
        filterData = {};
    filterDataAry[textboxID] = filterData;
    initHtmlDiv(textboxID, filterData,null, 'multi');

    //初始化弹出框
    $("#" + normalHtmlDivId + textboxID).dialog({
        title: '组织机构多选',
        height: 'auto',
        width: 800,
        resizable: true,
        modal: true,
        closed: true,
        buttons: [{
            text: '确定',
            handler: function () {
                returnSelected(textboxID, returnFieldData, 'multi');
                $("#" + normalHtmlDivId + textboxID).dialog('close');

                if (typeof onSelectedFun == 'function') {
                    var fn = eval(onSelectedFun);
                    fn();
                }
            }

        },
            {
                text: '关闭',
                handler: function () {
                    $("#" + normalHtmlDivId + textboxID).dialog('close');
                }

            }]
    });

    //绑定弹出事件
    $('#' + textboxID).textbox({
        'editable': false,
        'prompt': '点击”选择“可弹出选择框',
        'buttonText': '选择',
        'onClickButton': function () {
            var _top = parseInt($(document).scrollTop() + 200);
            $("#" + normalHtmlDivId + textboxID).show().dialog('open').dialog('move', {top: _top});
            $('#searchKey_' + textboxID).parent().off('keydown').on('keydown', function (e) {
                if (e.keyCode == 13) {
                    searchTree(textboxID);
                }
            });
            //$("#"+normalHtmlDivId+textboxID).show().dialog('open');
        }
    });

}


/**
 *
 * @param textboxID 弹出框触发和显示的textbox对象ID
 */
function initHtmlDiv(textboxID, filterData,initSelected, multi_single) {
    //添加DIV标签
    if ($("#" + normalHtmlDivId + textboxID).length > 0) {
        //console.log("组织机构多选DIV已存在");
    } else {
        //console.log("组织机构多选DIV不存在");
        var orgDiv = document.createElement('div');
        orgDiv.setAttribute('id', normalHtmlDivId + textboxID);
        orgDiv.setAttribute('class', "frame-window");
        orgDiv.setAttribute('style', "display:none;");

        var body = document.getElementsByTagName('body');
        body[0].appendChild(orgDiv);
        if (multi_single == 'multi') {
            $("#" + normalHtmlDivId + textboxID).html(getMultiDivHtml(textboxID));
            initMultiTree(textboxID, filterData);
        } else {
            $("#" + normalHtmlDivId + textboxID).html(getSingleDivHtml(textboxID));
            initSingleTree(textboxID, filterData,initSelected);
        }

        $('#searchKey_' + textboxID).textbox();
        $('#searchBtn_' + textboxID).linkbutton();
        $('#treeDiv_' + textboxID).panel();
    }
}


/**
 * 组织机构多选初始方法
 * @param textboxID 弹出框触发和显示的textbox对象ID
 * @param filterData 过滤条件：rootOrgCode 根节点orgcode、orgType 部门类型、orgLevel 部门等级、orgBizType 部门业务类型
 * @param returnFieldData 返回数据存储对象：ID 部门编号、TEXT 部门名称
 * @param onSelectedFun 回掉方法
 */
function initMultiSelectOrgForTztb(textboxID, filterData, returnFieldData, onSelectedFun) {
    if (!filterData)
        filterData = {};
    filterDataAry[textboxID] = filterData;
    initHtmlDivForTztb(textboxID, filterData, 'multi', returnFieldData);

    //初始化弹出框
    $("#" + normalHtmlDivId + textboxID).dialog({
        title: '组织机构多选',
        height: 'auto',
        width: 800,
        resizable: true,
        modal: true,
        closed: true,
        buttons: [{
            text: '确定',
            handler: function () {
                returnSelected(textboxID, returnFieldData, 'multi');
                $("#" + normalHtmlDivId + textboxID).dialog('close');

                if (typeof onSelectedFun == 'function') {
                    var fn = eval(onSelectedFun);
                    fn();
                }
            }

        },
            {
                text: '关闭',
                handler: function () {
                    $("#" + normalHtmlDivId + textboxID).dialog('close');
                }

            }]
    });

    //绑定弹出事件
    $('#' + textboxID).textbox({
        'editable': false,
        'prompt': '点击”选择“可弹出选择框',
        'buttonText': '选择',
        'onClickButton': function () {
            var _top = parseInt($(document).scrollTop() + 200);
            $("#" + normalHtmlDivId + textboxID).show().dialog('open').dialog('move', {top: _top});
            $('#searchKey_' + textboxID).parent().off('keydown').on('keydown', function (e) {
                if (e.keyCode == 13) {
                    searchTree(textboxID);
                }
            });
        }
    });

}


/**
 * 专门用于 门户通知通报
 * @param textboxID 弹出框触发和显示的textbox对象ID
 */
function initHtmlDivForTztb(textboxID, filterData, multi_single, returnFieldData) {
    //添加DIV标签
    if ($("#" + normalHtmlDivId + textboxID).length > 0) {
        //console.log("组织机构多选DIV已存在");
    } else {
        //console.log("组织机构多选DIV不存在");
        var sfqfDiv = '<div style="padding:10px 0px;text-align: center;">' +
            '<span class="sfqf-span selected" style="cursor: pointer;">' +
            '<input type="radio" name="sfqf" checked="true" value="1" style="vertical-align: bottom;margin-bottom: 2px;"/>发送勾选部门及其下属部门</span>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<span class="sfqf-span" style="cursor: pointer;">' +
            '<input type="radio" name="sfqf" value="0" style="vertical-align: bottom;margin-bottom: 2px;" />发送勾选部门</span>' +
            '</div>';

        var orgDiv = document.createElement('div');
        orgDiv.setAttribute('id', normalHtmlDivId + textboxID);
        orgDiv.setAttribute('class', "frame-window");
        orgDiv.setAttribute('style', "display:none;");

        var body = document.getElementsByTagName('body');
        body[0].appendChild(orgDiv);
        if (multi_single == 'multi') {
            $("#" + normalHtmlDivId + textboxID).html(getMultiDivHtml(textboxID));

            //通知通报-是否群发-改动部分
            $("#" + normalHtmlDivId + textboxID).prepend(sfqfDiv);

            $('.sfqf-span').off('click').on('click', function () {
                $('.selected').removeClass('selected').find('input').prop("checked", 'false');
                $(this).addClass('selected').find('input').prop('checked', 'true');

                //设置值
                var sfqfInputId = returnFieldData['sfqf'];
                if (sfqfInputId) {
                    var value = $(this).addClass('selected').find('input').val();
                    $('#' + sfqfInputId).val(value);
                }
            });


            initMultiTree(textboxID, filterData);
        } else {
            $("#" + normalHtmlDivId + textboxID).html(getSingleDivHtml(textboxID));
            initSingleTree(textboxID, filterData,null);
        }
        $('#searchKey_'+textboxID).textbox();
        $('#searchBtn_' + textboxID).linkbutton();
        $('#treeDiv_' + textboxID).panel();
    }
}


/**
 * 初始化选择树
 * @param textboxID 弹出框触发和显示的textbox对象ID
 */
function initMultiTree(textboxID, filterData) {
    filterData['loadType'] = 'initTree';//返回包括当前结点的树
    var managerPath = managerPath || pathConfig.managePath;
    $.ajax({
        url: managerPath + '/orgPublicSelect/queryComboTree',
        dataType: 'json',
        type: 'post',
        async: true,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: filterData,
        success: function (data) {
            $('#treeSelect_' + textboxID).tree({
                onlyLeaf: false,
                cascadeCheck: false,
                data: data,

                onClick: function (node) { // 在点击的时候执行

                    if (node.id != "ROOT") { // 根结点不变
                        if (!node.loaded || node.loaded == '0') {//未加载
                            loadExpandNode(node, textboxID, filterData); // 异步加载子节点数据
                        } else {
                            if (!$(this).tree('isLeaf', node.target)) {
                                if (node.state == 'closed') {
                                    $(this).tree('expand', node.target);
                                }
                                else {
                                    $(this).tree('collapse', node.target);
                                }
                            }
                        }
                    }
                }
            });

        },
        error: function () {
            console.log('queryByOrgcode ajax err');
        }
    });
}

/**
 *逐步加载子节点
 *@param textboxID 弹出框触发和显示的textbox对象ID
 */
function loadExpandNode(node, textboxID, filterData) {
    node.loaded = '1';//只请求一次
    if (!filterData)
        filterData = {};

    filterData['rootOrgCode'] = node.id;
    filterData['loadType'] = 'loadExpandNode';//返回不包括当前结点的树
    var managerPath = managerPath || pathConfig.managePath;
    loading('open', '数据加载中,请稍候...');
    $.ajax({
        url: managerPath + '/orgPublicSelect/queryComboTree',
        type: 'post',
        async: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: filterData,
        success: function (data) {
            if (data) {
                $('#treeSelect_' + textboxID).tree('append', {
                    parent: node.target,
                    data: data
                });
            }

        },
        complete: function () {
            loading('close');
        }
    });
}

/**
 * 机构选择，添加到右侧显示
 * @param textboxID 弹出框触发和显示的textbox对象ID
 */
function org_add_select(textboxID) {
    var checkedArray = [];
    var nodes = $('#treeSelect_' + textboxID).tree('getChecked');


    if (nodes.length > 0) {
        var selectedNodes = {};
        for (var item in nodes) {
            var node = nodes[item];
            selectedNodes[node.id] = node;
        }

        //显示选中的节点
        var addHTML = []
        if (selectedNodes) {
            for (var item in selectedNodes) {
                var node = selectedNodes[item];
                if (node.id != "ROOT") { // 根结点不变
                    var orgLevel = getOrgLevel(node);

                    addHTML.push(getOptionString(node.id, node.text, getOrgId(node), orgLevel));
                }
            }
        }
        $('#select_valid_' + textboxID).html(addHTML.join(''));
    }


}

/**
 *
 * @param optionValue
 * @param optionText
 * @param bizID
 * @returns {String}
 */
function getOptionString(optionValue, optionText, bizID, orgLevel) {
    var optionString = '<option value="' + optionValue + '" optionName="' + optionText + '" bizID="' + bizID + '" orgLevel ="' + orgLevel + '">';
    optionString += '\xA0' + optionValue + '\xA0|\xA0' + optionText + '</options>';
    return optionString;
}

/**
 * 移除选择的机构
 * @param textboxID 弹出框触发和显示的textbox对象ID
 */
function org_remove_select(textboxID) {
    var select_validObj = document.getElementById("select_valid_" + textboxID);
    var i = select_validObj.selectedIndex;
    var treeSelect = $('#treeSelect_' + textboxID);
    while (i >= 0) {
        treeSelect.tree('uncheck', treeSelect.tree('find', select_validObj.options[i].value).target);
        select_validObj.remove(i);
        i = select_validObj.selectedIndex;
    }
}

/**
 * 移除所有选择的机构
 * @param textboxID 弹出框触发和显示的textbox对象ID
 */
function org_removeall_select(textboxID) {
    var options = $('#select_valid_' + textboxID + '>option');
    var treeSelect = $('#treeSelect_' + textboxID);
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        treeSelect.tree('uncheck', treeSelect.tree('find', option.value).target);
        options.remove(i);
    }
}

function getMultiDivHtml(textboxID) {
    var html = '<table border="0" cellspacing="0" cellpadding="0" width="100%">'
        + '<tr>'
        + '<td width="40%">'
        + '<table border="0" cellspacing="0" cellpadding="0" width="100%">'
        + '<tr>'
        + '	<td align="right" style="padding-bottom:1px;">'
        + '		<table border="0" cellspacing="0" cellpadding="0">'
        + '		<tr>'
        + '			<td><input id="searchKey_' + textboxID + '" class="val easyui-textbox" data-options="width:290,prompt:\'只匹配部门名称\'" /></td>'
        + '			<td style="padding-left:4px;"><a class="easyui-linkbutton c6" id="searchBtn_' + textboxID + '" onclick="searchTree(\'' + textboxID + '\')">搜索</a></td>'
        + '		</tr>'
        + '		</table>'
        + '	</td>'
        + '</tr>'
        + '<tr>'
        + '	<td align="right">'
        + '		<div id="treeDiv_' + textboxID + '" class="easyui-panel" style="padding:5px; width: 340px; height: 248px;" onselectstart="return false;">'
        + '			<ul class="easyui-tree" id="treeSelect_' + textboxID + '" data-options="method:\'get\',lines:true,checkbox:true,searchServer:true"></ul>'
        + '		</div>'
        + '	</td>'
        + '</tr>'
        + '</table>'
        + '</td>'
        + '<td align="center" width="20%">'
        + '<table border="0" cellspacing="0">'
        + '<tr><td align="center" height="80"><button onclick="org_add_select(\'' + textboxID + '\')" tabindex="5" class="buttonMultiSelect" TYPE="button"><table border="0" cellspacing="0" cellpadding="0" width="23"><tr><td align="center" class="buttonAddSelect"   ></td></tr><tr><td height="2"></td></tr></table></button></td></tr>'
        + '<tr><td align="center" height="50"><button onclick="org_remove_select(\'' + textboxID + '\')" tabindex="7" class="buttonMultiSelect" TYPE="button"><table border="0" cellspacing="0" cellpadding="0" width="23"><tr><td align="center" class="buttonRemoveSelect"></td></tr><tr><td height="2"></td></tr></table></button></td></tr>'
        + '<tr><td align="center" height="80"><button onclick="org_removeall_select(\'' + textboxID + '\')" tabindex="8" class="buttonMultiSelect" TYPE="button"><table border="0" cellspacing="0" cellpadding="0" width="23"><tr><td align="center" class="buttonRemoveAll"   ></td></tr><tr><td height="2"></td></tr></table></button></td></tr>'
        + '</table>'
        + '</td>'
        + '<td align="right" valign="top">'
        + '<select id="select_valid_' + textboxID + '" size="10" tabindex="10" class="multiSelect" style="width: 340px; height: 269px;">'
        + '</select>'
        + '</td>'
        + '</tr>'
        + '</table>';
    return html;
}


/**
 * 设置选择的值
 * @param returnFieldData
 */
function returnSelected(textboxID, returnFieldData, multi_single) {
    if (returnFieldData) {
        var selectedOrgId = [];
        var selectedOrgCode = [];
        var selectedOrgName = [];
        var selectedorgLevel = [];

        if (multi_single == 'multi') {//多选
            var options = $('#select_valid_' + textboxID + '>option');
            for (var i = 0; i < options.length; i++) {
                var option = options[i];
                selectedOrgCode.push(option.value);
                selectedOrgId.push(option.getAttribute('bizID'));
                selectedOrgName.push(option.getAttribute('optionname'));
                selectedorgLevel.push(option.getAttribute('orgLevel'));
            }
        } else {
            var checkNode = $('#treeSelect_' + textboxID).tree('getChecked');
            if (checkNode.length > 0) {
                selectedOrgCode = checkNode[0].id;
                selectedOrgName = checkNode[0].text;

                if (checkNode[0].orgLevel)
                    selectedorgLevel = checkNode[0].orgLevel;
                else
                    selectedorgLevel = getOrgLevel(checkNode[0]);
            }
        }


        for (var item in returnFieldData) {
            if (item == "text") {
                $('#' + returnFieldData[item]).textbox('setValue', selectedOrgName);
            } else if (item == "id") {
                var dom_item = $('#' + returnFieldData[item]);
                if (dom_item.hasClass('easyui-textbox')) {
                    dom_item.textbox('setValue', selectedOrgCode)
                } else {
                    dom_item.val(selectedOrgCode);
                }
            } else if (item == "orgLevel") {
                $('#' + returnFieldData[item]).val(selectedorgLevel);
            } else if (item == "orgId") {
                $('#' + returnFieldData[item]).val(selectedOrgId);
            }
        }
    }
}

function searchOrgByCondition(textboxID) {
    var searchKeyValue = $('#searchKey_' + textboxID).textbox('getValue');
    searchKeyValue = searchKeyValue.replace(/(^\s*)|(\s*$)/g, "");
    $('#searchKey_' + textboxID).textbox('setValue', searchKeyValue);
    if (searchKeyValue != "") {
        var treeObject = $('#treeSelect_' + textboxID);
        var node = treeObject.tree('searchTreeNode', {searchKey: searchKeyValue.toUpperCase()});
        if (node != null) {
            var locateNode = treeObject.tree('find', node['id']);
            treeObject.tree('expandTo', locateNode.target);
            treeObject.tree('scrollTo', locateNode.target);
            treeObject.tree('select', locateNode.target);
        }
        else {
            $.messager.show({
                title: '搜索结果',
                msg: '无匹配的数据项！'
            });
        }
    }
}

/**
 * 组织机构树搜索，支持多根结点，但是一旦搜索出结果，就不会再搜索下一个根结点
 * @param textboxID
 * @param searchKeyValue 搜索的关键字，有值就不取输入框的
 */
function searchTree(textboxID,searchKeyValue) {
    var managerPath = managerPath || pathConfig.managePath;
    var filterData = filterDataAry[textboxID];
    
    var initSelected = true;//是否初始化选择
    if(!searchKeyValue){//没有值，取搜索框的值
    	initSelected = false;
    	searchKeyValue = $('#searchKey_' + textboxID).textbox('getValue');
    	searchKeyValue = searchKeyValue.replace(/(^\s*)|(\s*$)/g, "");
        $('#searchKey_' + textboxID).textbox('setValue', searchKeyValue);
    }
    
    if (searchKeyValue != "") {
        var treeObject = $('#treeSelect_' + textboxID);
        var url = managerPath + '/orgPublicSelect/queryPublicOrgTreeSearchResultByOrgCode';

        var rootNodes = treeObject.tree('getRoots');
        if (!rootNodes || rootNodes.length == 0) return;
        var rootOrgCodes = [];
        for (var index = 0; index < rootNodes.length; index++) {
            rootOrgCodes.push(rootNodes[index].id);
        }
        filterData['rootOrgCode'] = rootOrgCodes.join(",");

        var urlParam = "";
        for (var item in filterData) {
        	if(filterData[item]){
        		urlParam += "&" + item + "=" + filterData[item];
        	}
        }
        
        if(urlParam && urlParam.length>1){
        	url += "?" + urlParam.substr(1);
        }
        //第一次搜索时无法获取
        try {
            var resultObject = treeObject.tree('serverSearchTreeNode', {
                searchKey: searchKeyValue.toUpperCase(),
                url: url
            });
        } catch (e) {
        	if(!initSelected){
	            $.messager.show({
	                title: '搜索结果',
	                msg: '搜索无匹配的结果！',
	                timeout: 1500,
	            });
        	}
            return false;
        }
        if (resultObject != null) {
            var parentPath = resultObject.parentPath;
            var tempArray = [];
            if (parentPath != "") {
                tempArray = parentPath.split(",");
            }
            tempArray.push(resultObject.id);
            var loadNode = null;
            var loadCodeString = "";
            for (var i = 0; i < tempArray.length; i++) {
                var tempNode = treeObject.tree('find', tempArray[i]);
                if (tempNode != null) {
                    var loaded = tempNode.loaded;
                    if (!loaded || loaded == '0') {//未加载
                        loadNode = tempNode;
                        for (var j = i; j < tempArray.length; j++) {
                            if (tempArray[j].indexOf("_") == -1) { // 部门结点
                                loadCodeString += tempArray[j] + ",";
                            }
                        }
                        if (loadCodeString != "") {
                            loadCodeString = loadCodeString.substring(0, loadCodeString.length - 1);
                        }
                        break;
                    }
                }
            }
            if (loadNode != null) {
                filterData['loadCodeString'] = loadCodeString;
                loading('open', '数据加载中,请稍候...');
                $.ajax({
                    url: managerPath + '/orgOrganization/queryOrgCodeTreeSearchLoadJson',
                    type: 'POST',
                    async: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    data: filterData
                }).done(function (result) {
                    loading('close');
                    if (result) {
                        result = parseReturn(result);
                        treeObject.tree('append', {
                            parent: loadNode.target,
                            data: result
                        });
                    }
                    var nodeText = loadNode['text'];
                    treeObject.tree('update', {
                        target: loadNode.target,
                        text: nodeText
                    });
                    loadNode.loaded = "1";

                    var locateNode = treeObject.tree('find', resultObject.id);
                    if (locateNode != null) {
                    	if(initSelected){
                    		treeObject.tree('check', locateNode.target);
                    	}
                        treeObject.tree('expandTo', locateNode.target);
                        treeObject.tree('scrollTo', locateNode.target);
                        treeObject.tree('select', locateNode.target);
                    }
                });
            } else {
                var locateNode = treeObject.tree('find', resultObject.id);
                if (locateNode != null) {
                	if(initSelected){
                		treeObject.tree('check', locateNode.target);
                	}
                    treeObject.tree('expandTo', locateNode.target);
                    treeObject.tree('scrollTo', locateNode.target);
                    treeObject.tree('select', locateNode.target);
                }
            }
        }
        else {
            $.messager.show({
                title: '搜索结果',
                msg: '搜索无匹配的结果！',
                timeout: 1500
            });
        }
    }
}


/**
 * 组织机构单选初始方法,设置id输入框的值可实现初始化勾选
 * @param textboxID 弹出框触发和显示的textbox对象ID
 * @param filterData 过滤条件：rootOrgCode 根节点orgcode、orgType 部门类型、orgLevel 部门等级、orgBizType 部门业务类型
 * @param returnFieldData 返回数据存储对象：ID 部门编号、TEXT 部门名称
 * @param onSelectedFun 回掉方法
 */
function initSingleSelectOrg(textboxID, filterData, returnFieldData, onSelectedFun) {
    if (!filterData)
        filterData = {};
    filterDataAry[textboxID] = filterData;
    
    var initSelected = null;
    try{
    	//获取已有的值
	    if(returnFieldData && returnFieldData.id){
	    	initSelected = $("#"+returnFieldData.id).val();
	    }
    }catch(e){}
    
    initHtmlDiv(textboxID, filterData,initSelected, 'single');

    //初始化弹出框
    $("#" + normalHtmlDivId + textboxID).dialog({
        title: '组织机构单选',
        height: 'auto',
        width: 470,
        resizable: true,
        modal: true,
        closed: true,
        buttons: [{
            text: '确定',
            handler: function () {
                returnSelected(textboxID, returnFieldData, 'single');
                $("#" + normalHtmlDivId + textboxID).dialog('close');

                if (typeof onSelectedFun == 'function') {
                    var fn = eval(onSelectedFun);
                    fn();
                }
            }

        },
            {
                text: '关闭',
                handler: function () {
                    $("#" + normalHtmlDivId + textboxID).dialog('close');
                }

            }]
    });

    //绑定弹出事件
    $('#' + textboxID).textbox({
        'editable': false,
        'prompt': '点击”选择“可弹出选择框',
        'buttonText': '选择',
        'onClickButton': function () {
            var _top = parseInt($(document).scrollTop() + 200);
            $("#" + normalHtmlDivId + textboxID).show().dialog('open').dialog('move', {top: _top});
            //滚动到勾选的节点
            var treeObject = $('#treeSelect_' + textboxID);
            var nodes = treeObject.tree('getChecked');
            if(nodes && nodes.length>0){//已有勾选的节点
            	treeObject.tree('scrollTo', nodes[0].target);
            }
        }
    });
    
    $('#searchKey_' + textboxID).parent().off('keydown').on('keydown', function (e) {
        if (e.keyCode == 13) {
            searchTree(textboxID);
        }
    });
}

/**
 * 组织机构单选初始方法
 * @param textboxID 弹出框触发和显示的textbox对象ID
 * @param filterData 过滤条件：rootOrgCode 根节点orgcode、orgType 部门类型、orgLevel 部门等级、orgBizType 部门业务类型
 * @param returnFieldData 返回数据存储对象：CLASS 部门编号、TEXT 部门名称
 * @param onSelectedFun 回掉方法
 */
function initSingleSelectOrgReturnByClass(textboxID, filterData, returnFieldData, onSelectedFun) {
    if (!filterData)
        filterData = {};
    filterDataAry[textboxID] = filterData;
    initHtmlDiv(textboxID, filterData,null, 'single');

    //初始化弹出框
    $("#" + normalHtmlDivId + textboxID).dialog({
        title: '组织机构单选',
        height: 'auto',
        width: 450,
        resizable: true,
        modal: true,
        closed: true,
        buttons: [{
            text: '确定',
            handler: function () {
                returnSelectedByClass(textboxID, returnFieldData, 'single');
                $("#" + normalHtmlDivId + textboxID).dialog('close');

                if (typeof onSelectedFun == 'function') {
                    var fn = eval(onSelectedFun);
                    fn();
                }
            }

        },
            {
                text: '关闭',
                handler: function () {
                    $("#" + normalHtmlDivId + textboxID).dialog('close');
                }

            }]
    });

    //绑定弹出事件
    $('#' + textboxID).textbox({
        'editable': true,
        'prompt': '点击”选择“可弹出选择框',
        'buttonText': '选择',
        'onClickButton': function () {
            var _top = parseInt($(document).scrollTop() + 200);
            $("#" + normalHtmlDivId + textboxID).show().dialog('open').dialog('move', {top: _top});
            $('#searchKey_' + textboxID).parent().off('keydown').on('keydown', function (e) {
                if (e.keyCode == 13) {
                    searchTree(textboxID);
                }
            });
        }
    });

}

/**
 * 设置选择的值 回填到class
 * @param returnFieldData
 */
function returnSelectedByClass(textboxID, returnFieldData, multi_single) {
    if (returnFieldData) {
        var selectedOrgCode = [];
        var selectedOrgName = [];
        var selectedorgLevel = [];

        if (multi_single == 'multi') {//多选
            var options = $('#select_valid_' + textboxID + '>option');
            for (var i = 0; i < options.length; i++) {
                var option = options[i];
                selectedOrgCode.push(option.value);
                selectedOrgName.push(option.getAttribute('optionname'));
                selectedorgLevel.push(option.getAttribute('orgLevel'));
            }
        } else {
            var checkNode = $('#treeSelect_' + textboxID).tree('getChecked');
            if (checkNode.length > 0) {
                selectedOrgCode = checkNode[0].id;
                selectedOrgName = checkNode[0].text;

                if (checkNode[0].orgLevel)
                    selectedorgLevel = checkNode[0].orgLevel;
                else
                    selectedorgLevel = checkNode[0].attributes.orgLevel;
            }
        }


        for (var item in returnFieldData) {
            if (item == "text") {
                $('#' + returnFieldData[item]).textbox('setValue', selectedOrgName);
            } else if (item == "className") {
                var dom_item = $('.' + returnFieldData[item]);
                if (dom_item.hasClass('easyui-textbox')) {
                    dom_item.textbox('setValue', selectedOrgCode)
                } else {
                    dom_item.val(selectedOrgCode);
                }
            } else if (item == "orgLevel") {
                $('#' + returnFieldData[item]).val(selectedorgLevel);
            }
        }
    }
}


/**
 * 单选得HTML
 * @param textboxID
 * @returns {String}
 */
function getSingleDivHtml(textboxID) {
    var html = '<table border="0" cellspacing="0" cellpadding="0" width="100%">'
        + '<tr>'
        + '<td width="100%">'
        + '<table border="0" cellspacing="0" cellpadding="0" width="100%">'
        + '<tr>'
        + '	<td align="center" style="padding-bottom:1px;">'
        + '		<table border="0" cellspacing="0" cellpadding="0">'
        + '		<tr>'
        + '			<td><input id="searchKey_' + textboxID + '" class="val easyui-textbox" data-options="width:390,prompt:\'只匹配部门名称\'" /></td>'
        + '			<td style="padding-left:4px;"><a class="easyui-linkbutton c6" id="searchBtn_' + textboxID + '" onclick="searchTree(\'' + textboxID + '\')">搜索</a></td>'
        + '		</tr>'
        + '		</table>'
        + '	</td>'
        + '</tr>'
        + '<tr>'
        + '	<td align="center">'
        + '		<div id="treeDiv_' + textboxID + '" class="easyui-panel" style="padding:5px; width: 440px; height: 248px;" onselectstart="return false;">'
        + '			<ul class="easyui-tree" id="treeSelect_' + textboxID + '" data-options="method:\'get\',lines:true,checkbox:true,searchServer:true"></ul>'
        + '		</div>'
        + '	</td>'
        + '</tr>'
        + '</table>'
        + '</td>'
        + '</tr>'
        + '</table>';
    return html;
}

/**
 * 初始化单选选择树
 * @param textboxID 弹出框触发和显示的textbox对象ID
 * @param filterData 过滤的条件
 * @param initSelected 已选择的机构代码
 */
function initSingleTree(textboxID, filterData,initSelected) {
    filterData['loadType'] = 'initTree';//返回包括当前结点的树
    var managerPath = managerPath || pathConfig.managePath;
    $.ajax({
        url: managerPath + '/orgPublicSelect/queryComboTree',
        dataType: 'json',
        type: 'post',
        async: true,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: filterData,
        success: function (data) {
            $('#treeSelect_' + textboxID).tree({
                onlyLeaf: false,
                cascadeCheck: false,
                data: data,
                onClick: function (node) { // 在点击的时候执行

                    if (node.id != "ROOT") { // 根结点不变
                        if (!node.loaded || node.loaded == '0') {//未加载
                            loadExpandNode(node, textboxID, filterData); // 异步加载子节点数据
                        } else {
                            if (!$(this).tree('isLeaf', node.target)) {
                                if (node.state == 'closed') {
                                    $(this).tree('expand', node.target);
                                }
                                else {
                                    $(this).tree('collapse', node.target);
                                }
                            }
                        }
                    }
                },
                onBeforeCheck: function (node, checked) {
                    if (checked) {
                        var orgTreeObject = $('#treeSelect_'+textboxID);
                        try{
                            var checkNodes = orgTreeObject.tree('getChecked');
                            if(checkNodes.length > 0){
                                for(var index in checkNodes){
                                    orgTreeObject.tree('uncheck',checkNodes[index].target);
                                }
                            }
                        }catch(e){}
                    }
                },
                onDblClick: function(node){
                    var nodeId = node.id;

                }
            });
            
            //初始化已选中的机构
            initSingleSelected(textboxID,initSelected);
        },
        error: function () {
            console.log('queryByOrgcode ajax err');
        }
    });
}

function initSingleSelected(textboxID,initSelected){
	if(!initSelected) return;
	searchTree(textboxID,initSelected);
}

/**
 * 清除选中的结点
 * @param textboxID
 */
function clearOrgSelectChecked(textboxID){
	if(!textboxID) return

	var orgTreeObject = $('#treeSelect_'+textboxID);
	if(!orgTreeObject)  return;

    var checkNodes = orgTreeObject.tree('getChecked');
    if(checkNodes.length > 0){
    	for(var index in checkNodes){
    		orgTreeObject.tree('uncheck',checkNodes[index].target);
    	}
    }
}

/**
 * 组织机构级别获取，点击出来的结点和搜索出来的结点不一样
 * @param node
 * @returns
 */
function getOrgLevel(node) {
    var orgLevel = null;
    if (node) {
        if (node.orgLevel) {
            orgLevel = node.orgLevel;//搜索出来结点
        } else {
            if (node.attributes && node.attributes.orgLevel) {
                orgLevel = node.attributes.orgLevel;//手动点击出来的结点
            }
        }
    }

    if (!orgLevel) {
        console.log("组织机构级别为空，无法判定级别！");
    }

    return orgLevel;
}

/**
 * 组织机构级别获取，点击出来的结点和搜索出来的结点不一样
 * @param node
 * @returns
 */
function getOrgId(node) {
    var orgId = null;
    if (node) {
        if (node.bizID) {
            orgId = node.bizID;//搜索出来结点
        } else {
            if (node.attributes && node.attributes.bizID) {
                orgId = node.attributes.bizID;//手动点击出来的结点
            }
        }
    }

    if (!orgId) {
        console.log("组织机构ID为空！");
    }

    return orgId;
}