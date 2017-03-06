/**
 * Created by christ on 2016/12/7.
 */

/*********************************呈请报告**************************************/
/**
 * 呈请报告、法律文书页面  初始化渲染
 */
function getCqbgFlwsHtmlPage() {
    /***呈请报告***/
    var cqbgstr = '';
    var cqbgData = DATA.CQBG.cqbgData;//呈请报告数据
    if (cqbgData) {
        //呈请报告字符串
        var cqbgcon = getHtmlByAjax(cqbgData.url);
        cqbgstr = '<div class="flws-tabs-title" id="flws_cqbg" title="' + cqbgData.name + '">' +
            '<div class="flws-main-con">' +
            '<div class="flws-main-con-l" id="cqbg_xyr_con"></div>' +
            '<div class="flws-main-con-r" id="cqbg_main_con">' + cqbgcon +
            '<div class="save-btn-bottom">' +
            '<a href="javascript:;" id="save_cqbg" style="width: 625px;" class="easyui-linkbutton c6">呈请报告保存</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    $("#flwsTabs").append(cqbgstr);

    $("#flwsTabs .save-btn-bottom a").linkbutton();

    /***法律文书***/
    var flwsstr = '';
    var flwsData = DATA.FLWS.flwsData;//法律文书数据
    if (flwsData) {
        //法律文书字符串
        for (var a in flwsData) {
            flwsstr = '<div class="flws-tabs-title" title="' + flwsData[a].name + '">' +
                '<div class="flws-main-con">' +
                '<div class="flws-main-con-l flws_xyr_area flws_xyr_area_add" id="flws_xyr_area_' + flwsData[a].bianMa + '">' +
                '</div>' +
                '<div class="flws-main-con-r"  id="flws_main_con_r_' + flwsData[a].bianMa + '">' +
                '</div>' +
                '</div>' +
                '</div>';
            $("#flwsTabs").append(flwsstr);
            flwsRightPageRenderA(flwsData[a]);
        }
    }

    setPage();//设置页面高度
    $('#flwsTabs').css({height: '100%', width: '100%'}).tabs({
        plain: true, pill: true, border: false
    });

}
/*********************************(需要修改)*************************************/
/**
 * 呈请报告页面  easyui组件、公共接口数据回填 渲染
 */
function cqbgPageRender() {
    //呈请报告input组件 easyui初始化组件
    var cqbgIpts = $('#cqbg_main_con form input');
    if (DATA.CQBG.cqbgData.customized) {
        if (DATA.CQBG.cqbgRow.CQZT != undefined && DATA.CQBG.cqbgRow.CQZT != 0 && DATA.CQBG.cqbgData.one) {
            $.messager.alert({
                title: '提示',
                msg: DATA.CQBG.cqbgData.name + '：已经呈请，无需再呈请',
                icon: 'warning',
                fn: function () {
                    crossCloseTab();
                }
            });
        } else {
            eval("render" + DATA.CQBG.cqbgData.bianMa + "CustomizedPage('" + JSON.stringify(DATA.CQBG.cqbgRow) + "')");
        }
    } else if (DATA.CQBG.cqbgZj == undefined || DATA.CQBG.cqbgZj == 'undefined') {//新增
        easyuiReset(cqbgIpts, true);
        //$('#loadingMskFlws').show();
    } else {//编辑
        if (DATA.CQBG.cqbgRow.CQZT != undefined && DATA.CQBG.cqbgRow.CQZT != 0 && DATA.CQBG.cqbgData.one) {
            $.messager.alert({
                title: '提示',
                msg: DATA.CQBG.cqbgData.name + '：已经呈请，无需再呈请',
                icon: 'warning',
                fn: function () {
                    crossCloseTab();
                }
            });
        } else {
            easyuiReset(cqbgIpts, false, '');
            cqbgDataXxfy();//呈请报告信息复用
            if (DATA.CQBG.cqbgRow.XYRID) {
                var interval = setInterval(function () {//必须保证嫌疑人列表已经渲染
                    if (DATA.DX && DATA.DX.hasData) {
                        cqbgXyrDataXxfy();//呈请报告嫌疑人信息复用
                        clearInterval(interval);
                    }
                }, 10);
            }
        }
    }

    //绑定事件
    $('#save_cqbg').off('click').on('click', function () {
        saveCqbg();
    });
}

/**
 * 嫌疑人对象列表渲染（呈请报告）
 */
function xyrdxRenderCqbg() {
    var xydxDatas = DATA.DX.xydxData;//嫌疑对象数据
    var xyrListStr = '';//嫌疑人list字符串
    if (xydxDatas && DATA.DX.dxbm) {
        for (var k in xydxDatas) {
            for (var key in xyrObj) {
                if (k == key) {
                    var xyrStr = '';
                    for (var i = 0; i < xydxDatas[k].length; i++) {
                        if (key == anjianXyDxDic.xyr) {//嫌疑人的显示组合信息
                            var xyrzhxx = filedToParagraph(xydxDatas[k][i], DATA.CQBG.cqbgData.prefixpz, DATA.CQBG.cqbgData.splitpz);
                            xyrStr += '<li><label><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox" />' +
                                '<span xyrtype="' + xyrObj[key].id + '"  xyrzhxx="' + xyrzhxx + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                        } else if (key == anjianXyDxDic.xydw) {//嫌疑单位
                            xyrStr += '<li><label><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox"/>' +
                                '<span xyrtype="' + xyrObj[key].id + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                        } else if (key == anjianXyDxDic.ajxgr) {//案件相关人
                            xyrStr += '<li><label><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox"/>' +
                                '<span xyrtype="' + xyrObj[key].id + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                        }
                    }
                    xyrListStr += '<div><p><i class="fa fa-bars"></i>' + xyrObj[key].text + '</p>' +
                        '<ul class="xyrList ' + xyrObj[key].id + '" ids=' + xyrObj[key].id + '>' + xyrStr + '</ul></div>'
                }
            }
        }
        //console.log(xyrArry);
        //呈请报告嫌疑人列表展示
        $('#cqbg_xyr_con').append(xyrListStr);

        //已呈请样式(呈请报告的前后置关系)
        //$('#cqbg_xyr_con ul.xyrList').find("label[disabled='disabled']").tooltip({position: 'right'});

        //嫌疑对象的勾选
        $('#cqbg_xyr_con ul.xyrList input:checkbox').off('click').on('click', function () {
            xyrCheckedXxfy($(this));//呈请报告 嫌疑人勾选呈请报告信息复用
        });
    }
}

/**
 * 嫌疑对象hide
 */
function xydxHide() {
    $('#cqbg_xyr_con,.flws-main-con-l').hide();
    $('#cqbg_main_con,.flws-main-con-r').css({width: '100%'});
    $('.flws_cl_area').css({height: '100%', width: '100%'}).tabs();
}

/**
 * 嫌疑人组合信息  字段组合成文字段信息
 * @param xyrinfo
 * @returns {string}
 */
function filedToParagraph(xyrinfo, prefixpz, splitpz) {
    var xyrinfoStr = '';
    if (splitpz == undefined) {
        splitpz = ',';
    }
    for (var key in xyrinfo) {
        var value = xyrinfo[key];
        var caseValue = null;

        if (value) {
            //配置姓名字段展示
            if (key == 'fzxyr_xm' || key == 'xm') {
                caseValue = 'xm';
            }
            //配置性别字段展示
            else if (key == 'xbdm' || key == 'fzxyr_xbdm') {
                caseValue = 'xbdm';
            }
            else {
                caseValue = key;
            }
            if (prefixpz) {
                switch (caseValue) {
                    case 'xm':
                        xyrinfoStr = "姓名:" + value + splitpz + xyrinfoStr;
                        break;
                    case 'xbdm':
                        xyrinfoStr += "性别:" + getDictName(pathConfig.mainPath + '/common/dict/GB_D_XBDM.js', value) + splitpz;
                        break;
                    case 'cyzj_cyzjdm':
                        xyrinfoStr += "证件类型:" + getDictName(pathConfig.mainPath + '/common/dict/KX_D_CYZJDM.js', value) + splitpz;
                        break;
                    case 'fzxyr_csrq':
                        xyrinfoStr += parseTimeToCN(value) + "出生" + splitpz;
                        break;
                    case 'fzxyr_zzmmdm': //政治面貌
                        xyrinfoStr += getDictName(pathConfig.mainPath + '/common/dict/GB_D_ZZMMDM.js', value) + splitpz;
                        break;
                    case 'fzxyr_jyzkdm':
                        xyrinfoStr += getDictName(pathConfig.mainPath + '/common/dict/GB_D_HYZKDM.js', value) + splitpz;
                        break;
                    case 'fzxyr_jgdm':
                        xyrinfoStr += "籍贯为:" + getDictName(pathConfig.mainPath + '/common/dict/GB_D_XZQHDM.js', value) + splitpz;
                        break;
                    case 'fzxyr_sg':
                        xyrinfoStr += "身高:" + value + "厘米" + splitpz;
                        break;
                        break;
                    case 'fzxyr_tmtzms':
                        xyrinfoStr += value + splitpz;
                        break;
                    case 'fzxyr_gzdw':
                        xyrinfoStr += "在" + value + "工作" + splitpz;
                        break;
                    case 'fzxyr_zylbdm':
                        xyrinfoStr += "职务为" + getDictName(pathConfig.mainPath + '/common/dict/KX_D_ZYLBDM.js', value) + splitpz;
                        break;
                    case 'hjdz_dzmc':
                        xyrinfoStr += "户籍地:" + value + splitpz;
                        break;
                    case 'xzz_dzmc':
                        xyrinfoStr += "现住址:" + value + splitpz;
                        break;
                    case 'dwmc':
                        xyrinfoStr += "单位名称:" + value + splitpz;
                        break;
                    case 'dwbgdz_dzmc':
                        xyrinfoStr += "办公地址:" + value + splitpz;
                        break;
                    case 'fddbr_xm':
                        xyrinfoStr += "法定待辨认姓名:" + value + splitpz;
                        break;
                }
            } else {
                switch (caseValue) {
                    case 'xm':
                        xyrinfoStr = value + splitpz + xyrinfoStr;
                        break;
                    case 'xbdm':
                        xyrinfoStr += getDictName(pathConfig.mainPath + '/common/dict/GB_D_XBDM.js', value) + splitpz;
                        break;
                    case 'cyzj_cyzjdm':
                        xyrinfoStr += getDictName(pathConfig.mainPath + '/common/dict/KX_D_CYZJDM.js', value) + splitpz;
                        break;
                    case 'fzxyr_csrq':
                        xyrinfoStr += parseTimeToCN(value) + splitpz;
                        break;
                    case 'fzxyr_zzmmdm': //政治面貌
                        xyrinfoStr += getDictName(pathConfig.mainPath + '/common/dict/GB_D_ZZMMDM.js', value) + splitpz;
                        break;
                    case 'fzxyr_jyzkdm':
                        xyrinfoStr += getDictName(pathConfig.mainPath + '/common/dict/GB_D_HYZKDM.js', value) + splitpz;
                        break;
                    case 'fzxyr_jgdm':
                        xyrinfoStr += getDictName(pathConfig.mainPath + '/common/dict/GB_D_XZQHDM.js', value) + splitpz;
                        break;
                    case 'fzxyr_sg':
                        xyrinfoStr += value + splitpz;
                        break;
                        break;
                    case 'fzxyr_tmtzms':
                        xyrinfoStr += value + splitpz;
                        break;
                    case 'fzxyr_gzdw':
                        xyrinfoStr += value + splitpz;
                        break;
                    case 'fzxyr_zylbdm':
                        xyrinfoStr += getDictName(pathConfig.mainPath + '/common/dict/KX_D_ZYLBDM.js', value) + splitpz;
                        break;
                    case 'hjdz_dzmc':
                        xyrinfoStr += value + splitpz;
                        break;
                    case 'xzz_dzmc':
                        xyrinfoStr += value + splitpz;
                        break;
                    case 'dwmc':
                        xyrinfoStr += value + splitpz;
                        break;
                    case 'dwbgdz_dzmc':
                        xyrinfoStr += value + splitpz;
                        break;
                    case 'fddbr_xm':
                        xyrinfoStr += value + splitpz;
                        break;
                }
            }

        }
    }
    return xyrinfoStr;
}

//function filedToParagraph(agr) {
//    console.log(1111, agr);
//    return JSON.stringify(agr);
//    //return 'sb';
//}

/**
 * 呈请报告 犯罪嫌疑人勾选组合信息的复用
 */
function xyrCheckedXxfy($this) {
    var parentDiv = $this.parent().parent().parent().parent();//父级div
    var parentLi = $this.parent().parent();//父级li
    var parentUl = $this.parent().parent().parent();//父级li
    if (DATA.ajax.count != 0) {
        console.log('信息复用中');
        return;
    }
    var xyrxmData = '';
    var xyridData = '';
    var xyrxmArry = [];//嫌疑人姓名
    var xyridArry = [];//嫌疑人ID
    var checkXyr = [];
    //勾选嫌疑人
    if (parentDiv.find('input:checked').length > 0) {//选中
        var textareaVal = $("#cqbg_main_con form textarea").val();

        /***嫌疑对象接口信息的复用***/
        var cqbgDataArry = textareaVal.match(/\((.*?)\]/g);
        var cqbgxxTmpObj = {};
        if (cqbgDataArry) {
            var cqbgxxTmpArray = [];
            for (var n = 0; n < cqbgDataArry.length; n++) {
                var a = cqbgDataArry[n];
                var dataTmp = {
                    funName: a.substring(a.indexOf('(') + 1, a.indexOf(')')),//方法名称
                    paramName: a.substring(a.indexOf('[') + 1, a.indexOf(']'))//参数名称
                };
                cqbgxxTmpArray.push(dataTmp.paramName);
                cqbgxxTmpObj[dataTmp.funName] = cqbgxxTmpArray;
            }
        }

        var xydxDataArry;//嫌疑人对象数据
        var xyrType = $this.next().attr('xyrtype');//嫌疑人类型
        var xyrXxzjbh = $this.attr('xxzjbh');//嫌疑人信息主键编号
        for (var k in xyrObj) {
            if (xyrType == xyrObj[k].id) {
                xydxDataArry = DATA.DX.xydxData[k];//嫌疑对象数据
            }
        }
        // console.log(xydxDataArry);
        // console.log(cqbgxxTmpObj);
        for (var l = 0; l < xydxDataArry.length; l++) {
            if (xyrXxzjbh == xydxDataArry[l].xxzjbh) {
                for (var k2 in cqbgxxTmpObj) {
                    for (var j = 0; j < cqbgxxTmpObj[k2].length; j++) {
                        var key = cqbgxxTmpObj[k2][j];//参数名称
                        var val = xydxDataArry[l][key.toLowerCase()];//参数对应的值
                        var strVal = '(' + k2 + ')[' + key + ']';//textarea中对应的字符串

                        if (val == undefined || val == null || val == '') {//返回数据为空
                            textareaVal = textareaVal.replace(strVal, '');
                            console.log(key + '为空');
                        } else {//textarea中对应的字符串替换赋值
                            textareaVal = textareaVal.replace(strVal, val);
                        }
                    }
                    $("#cqbg_main_con form textarea").val(textareaVal);
                }
            }
        }
        /***********end************/
        checkXyr = $this.parent().parent().parent().find('input:checked');

        //同一时间只能操作一个
        parentDiv.show();
        parentDiv.siblings().hide();

        if (!DATA.CQBG.cqbgData.dx) {//单选
            parentLi.siblings().find('input:checked').attr('checked', false);//单选
            checkXyr = $this.parent().parent().parent().find('input:checked');
        }

        //必选的校验
        DATA.CQBG["status"]["selected"] = true;

        //已经选择的
        for (var i = 0; i < checkXyr.length; i++) {
            xyrxmData = $(checkXyr[i]).next().text();
            xyridData = $(checkXyr[i]).attr('xxzjbh');
            xyrxmArry.push(xyrxmData);
            xyridArry.push(xyridData);
        }
        DATA.CQBG.xyrxms = xyrxmArry;
        DATA.CQBG.xyrids = xyridArry;

        /*******行政案件组合信息拼接*******/
        var zhxxObj = null;
        var xydxLb = parentUl.attr("ids");//嫌疑对象类别
        var cqbgData = DATA.CQBG.cqbgData;

        // 违法嫌疑人
        if (xydxLb == xyrObj[anjianXyDxDic.xyr].id && cqbgData.xyrpz != undefined && cqbgData.xyrpz != '') {
            for (var key in DATA.DX.xydxData[anjianXyDxDic.xyr]) {
                if (DATA.DX.xydxData[anjianXyDxDic.xyr][key].xxzjbh == $this.attr("xxzjbh")) {
                    zhxxObj = DATA.DX.xydxData[anjianXyDxDic.xyr][key];
                }
            }
            var zhxx = {};
            var xyrpzArr = cqbgData.xyrpz.split(",");
            for (var j = 0; j < xyrpzArr.length; j++) {
                var field = xyrpzArr[j];
                var val = zhxxObj[field];
                if (val) {
                    zhxx[field] = val;
                }
            }
            $("#cqbg_main_con form textarea").val('\t' + filedToParagraph(zhxx, cqbgData.prefixpz, cqbgData.splitpz) + '\n' + textareaVal);
        } else if (xydxLb == xyrObj[anjianXyDxDic.xydw].id && cqbgData.xydwpz != undefined && cqbgData.xydwpz != '') {//违法嫌疑单位
            for (var key in DATA.DX.xydxData[anjianXyDxDic.xydw]) {
                if (DATA.DX.xydxData[anjianXyDxDic.xydw][key].xxzjbh == $this.attr("xxzjbh")) {
                    zhxxObj = DATA.DX.xydxData[anjianXyDxDic.xydw][key];
                }
            }

            var zhxx = {};
            var xyrpzArr = cqbgData.xydwpz.split(",");
            for (var k = 0; k < xyrpzArr.length; k++) {
                var field = xyrpzArr[k];
                var val = zhxxObj[field];
                if (val) {
                    zhxx[field] = val;
                }
            }
            $("#cqbg_main_con form textarea").val(filedToParagraph(zhxx, cqbgData.prefixpz, cqbgData.splitpz) + '\n' + textareaVal);
        } else {
            var xyrZhxxData = '\n' + '\t' + $this.next().attr('xyrzhxx');
            $("#cqbg_main_con form textarea").val(xyrZhxxData + '\t' + textareaVal);
        }

    } else {//未选中
        DATA.CQBG["status"]["selected"] = false;

        //同一时间只能操作一个
        parentDiv.show();
        parentDiv.siblings().show();
    }
}


/**
 * 呈请报告查询接口返回数据的渲染
 */
function cqbgDataXxfy() {
    var data = DATA.CQBG.cqbgRow;
    //信息复用
    for (var key in data) {
        var $node = $("#cqbg_main_con form ." + key);//节点
        if ($node) {
            var val = data[key];
            if (key == 'CQNR') {//呈请内容单独处理
                $('#cqbg_main_con form textarea').val(val);
                $node.textbox({
                    value: val
                })
            } else if (key == 'CQRQ') {//呈请日期
                $('#cqbg_main_con form input.' + key).val(data[key + '_MASTER']);
                wdateValidate('#cqbg_main_con form input.Wdate');
            } else {
                if ($node.hasClass('easyuitextbox')) {
                    $node.textbox({value: val})
                } else if ($node.hasClass('easyuicombobox')) {
                    if (key == 'BAMJXM') {
                        $node.combobox({value: data.BAMJID})
                    } else {
                        $node.combobox({value: val})
                    }
                } else if ($node.hasClass('easyuicombotree')) {
                    $node.combotree({value: val})
                }
            }
        }
    }
}

/**
 * 呈请报告查询接口返回数据 嫌疑人对象列表的渲染
 */
function cqbgXyrDataXxfy() {
    var xyrids = DATA.CQBG.cqbgRow.XYRID;
    var xyridArry = [];
    if (xyrids != undefined || xyrids) {
        if (xyrids.indexOf(',') == -1) {
            xyridArry.push(xyrids);
        } else {
            xyridArry = xyrids.split(',');
        }
    }

    var currentXyDxDiv;
    for (var i = 0; i < xyridArry.length; i++) {
        $('#cqbg_xyr_con ul.xyrList').find("input[xxzjbh=" + xyridArry[i] + "]").click();
        currentXyDxDiv = $('#cqbg_xyr_con ul.xyrList').find("input[xxzjbh=" + xyridArry[i] + "]").parent().parent().parent().parent()[0];
    }

    if (xyridArry.length > 0 && currentXyDxDiv) {
        $(currentXyDxDiv).siblings().hide();
    }
}

/********************************end******************************/

/*******************************法律文书************************************/

/**
 * 法律文书tab的切换
 */
function tabSwitch() {
    $("#flwsTabs").tabs({
        onSelect: function (title, index) {
            if (DATA.CQBG.cqbgData.bianMa != '000000' || DATA.CQBG.cqbgData != undefined) {//有呈请报告
                if (index > 0) {//操作法律文书
                    if (DATA.CQBG.cqbgZj == undefined) {//呈请报告主键还未生成
                        $.messager.alert({
                            title: '提示',
                            msg: '请先保存呈请报告，再操作法律文书',
                            fn: function () {
                                $(this).removeClass('tabs-selected');
                                $("#flwsTabs").tabs('select', 0)
                            }
                        })
                    } else {//已经有呈请报告主键
                        DATA.FLWS.title = title;
                        queryFlwsData(title, flwsPageRender);
                    }
                }
            } else {//没有呈请报告
                DATA.FLWS.title = title;
                queryFlwsData(title, flwsPageRender);
            }
        }
    })
}
/**
 * 没有呈请报告，只有法律文的渲染
 */
function onlyFlwsRender() {
    if (DATA.FLWS.flwsData.customer) {
        DATA.FLWS.title = DATA.FLWS.flwsData.customer.name;
        queryFlwsData(DATA.FLWS.flwsData.customer.name, flwsPageRender);
    }
}

/**
 * 法律文书对象渲染方法 A (法律文书only：false,dx:false)
 * @param bm
 * @param flwsRow
 */
function flwsDxRenderA(bm, flwsRow) {
    $('#flws_xyr_area_' + bm).html('');
    if (DATA.FLWS[bm].flwsData.wdx) {
        $('#flws_xyr_area_' + bm).hide();
        $('#flws_main_con_r_' + bm).css({width: '100%'});
        $('#flws_cl_area_' + bm).css({height: '100%', width: '100%'}).tabs();
        return;
    }
    var xydxDatas = DATA.DX.xydxData;//嫌疑对象数据
    var wclXyrStr = '', yclXyrStr = '';

    if (xydxDatas) {
        /**
         * 1、如果当前法律文书有数据，根据当前文书地类型，渲染未处理嫌疑人对象列表类型
         * 2、如果当前法律文书没有数据，则多个列表全部显示出来
         */
        if (flwsRow.length > 0) {//1
            //勾选过嫌疑对象
            if (flwsRow[0].CLDXLB) {
                /***已处理嫌疑对象列表渲染***/
                var xyrObjTemp;
                var xyrStr = '';
                var dxLb = '';
                for (var key in xyrObj) {
                    if (flwsRow[0].CLDXLB == xyrObj[key].cldxlb) {
                        //同一时间勾选法律文书嫌疑人，只能操作一种，所以取第一条数据判断类别就可以
                        DATA.FLWS[bm].xyrBm = key;
                        DATA.FLWS[bm].xyrData = (xydxDatas[key]);
                        xyrObjTemp = xyrObj[key];
                        dxLb = key;
                    }
                }

                for (var i = 0; i < flwsRow.length; i++) {
                    if (DATA.FLWS[bm].status.currentFlwsId != undefined && DATA.FLWS[bm].status.currentFlwsId == flwsRow[i].ZJ) {
                        DATA.FLWS[bm].status.currentDxId = flwsRow[i].CLDX_XXZJBH;
                    }
                    var disabled = "";
                    var title = "";
                    if ((flwsRow[i].CQBG_ZJ == undefined && flwsRow[i].CQZT > 0 || (flwsRow[i].CQBG_ZJ != DATA.CQBG.cqbgZj))) {
                        disabled = "disabled='disabled'";
                        title = "title='已呈请法律文书，不能修改'";
                    }
                    //console.log('已处理对象违法嫌疑人参数',flwsRow[i],xyrObjTemp);//[(xyrObjTemp.param).toUpperCase()]
                    //嫌疑对象名称拼接
                    var xydxArrayTmp = DATA.DX.xydxData[dxLb];
                    var xydxMc = '';
                    for (var q = 0; q < xydxArrayTmp.length; q++) {
                        if (xydxArrayTmp[q].xxzjbh == flwsRow[i].CLDX_XXZJBH) {
                            if (dxLb == anjianXyDxDic.xyr) {
                                xydxMc = xydxArrayTmp[q][xyrObj[anjianXyDxDic.xyr].param]
                            } else if (dxLb == anjianXyDxDic.xydw) {
                                xydxMc = xydxArrayTmp[q][xyrObj[anjianXyDxDic.xydw].param]
                            } else if (dxLb == anjianXyDxDic.ajxgr) {
                                xydxMc = xydxArrayTmp[q][xyrObj[anjianXyDxDic.ajxgr].param]
                            }
                        }
                    }
                    xyrStr += '<li><label ' + title + ' class="easyui-tooltip"><input xxzjbh="' + flwsRow[i].CLDX_XXZJBH + '" flwszj="' + flwsRow[i].ZJ + '" ' + disabled + ' type="checkbox"/>' +
                        '<span xyrtype="' + xyrObjTemp.id + '">' + xydxMc + '</span></label></li>';
                }

                yclXyrStr = '<div><p><i class="fa fa-bars"></i>' + xyrObjTemp.text + '</p>' +
                    '<ul class="xyrList ' + xyrObjTemp.id + '" ids=' + xyrObjTemp.id + '>' + xyrStr + '</ul></div>';

                /***未处理嫌疑对象列表渲染***/
                //$('.flws_xyr_area_wcq').html('');
                //总的嫌疑人数据，删除已经做过的数据
                var wcqXyrArry = getDiffer(DATA.FLWS[bm].xyrData, flwsRow, 'xxzjbh', 'CLDX_XXZJBH');
                //console.log(wcqXyrArry);

                var wcqXyrStr = '';
                for (var h = 0; h < wcqXyrArry.length; h++) {
                    if (dxLb == anjianXyDxDic.xyr) {
                        wcqXyrStr += '<li><label ' + wcqXyrArry[h].title + ' ' + wcqXyrArry[h].disabled + '><input xxzjbh="' + wcqXyrArry[h].xxzjbh + '" type="checkbox" ' + wcqXyrArry[h].disabled + '/>' +
                            '<span xyrtype="' + xyrObj[DATA.FLWS[bm].xyrBm].id + '">' + wcqXyrArry[h][xyrObj[DATA.FLWS[bm].xyrBm].param] + '</span></label></li>';
                    } else {
                        wcqXyrStr += '<li><label ><input xxzjbh="' + wcqXyrArry[h].xxzjbh + '" type="checkbox"/>' +
                            '<span xyrtype="' + xyrObj[DATA.FLWS[bm].xyrBm].id + '">' + wcqXyrArry[h][xyrObj[DATA.FLWS[bm].xyrBm].param] + '</span></label></li>';

                    }
                }

                wclXyrStr = '<div><p><i class="fa fa-bars"></i>' + xyrObj[DATA.FLWS[bm].xyrBm].text + '</p>' +
                    '<ul class="xyrList ' + xyrObj[DATA.FLWS[bm].xyrBm].id + '" ids=' + xyrObj[DATA.FLWS[bm].xyrBm].id + '>' + wcqXyrStr + '</ul></div>';
            } else {
                //未勾选过嫌疑对象
                for (var k in xydxDatas) {
                    for (var key in xyrObj) {
                        if (k == key) {
                            var xyrStr = '';
                            for (var i = 0; i < xydxDatas[k].length; i++) {
                                if (key == anjianXyDxDic.xyr) {//嫌疑人的显示组合信息
                                    var xyrzhxx = filedToParagraph(xydxDatas[k][i], DATA.FLWS[bm].prefixpz, DATA.FLWS[bm].splitpz);
                                    xyrStr += '<li><label ' + xydxDatas[k][i].title + ' ' + xydxDatas[k][i].disabled + '><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox" ' + xydxDatas[k][i].disabled + '/>' +
                                        '<span xyrtype="' + xyrObj[key].id + '" xyrzhxx="' + xyrzhxx + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                                } else {
                                    xyrStr += '<li><label><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox"/>' +
                                        '<span xyrtype="' + xyrObj[key].id + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                                }
                            }

                            wclXyrStr += '<div><p><i class="fa fa-bars"></i>' + xyrObj[key].text + '</p>' +
                                '<ul class="xyrList ' + xyrObj[key].id + '" ids=' + xyrObj[key].id + '>' + xyrStr + '</ul></div>'
                        }
                    }
                }
            }
        } else if (flwsRow.length == 0) {//2
            for (var k in xydxDatas) {
                for (var key in xyrObj) {
                    if (k == key) {
                        var xyrStr = '';
                        for (var i = 0; i < xydxDatas[k].length; i++) {
                            if (key == anjianXyDxDic.xyr) {//嫌疑人的显示组合信息
                                var xyrzhxx = filedToParagraph(xydxDatas[k][i], DATA.FLWS[bm].prefixpz, DATA.FLWS[bm].splitpz);
                                xyrStr += '<li><label ' + xydxDatas[k][i].title + ' ' + xydxDatas[k][i].disabled + '><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox" ' + xydxDatas[k][i].disabled + '/>' +
                                    '<span xyrtype="' + xyrObj[key].id + '" xyrzhxx="' + xyrzhxx + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                            } else {
                                xyrStr += '<li><label><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox"/>' +
                                    '<span xyrtype="' + xyrObj[key].id + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                            }
                        }

                        wclXyrStr += '<div><p><i class="fa fa-bars"></i>' + xyrObj[key].text + '</p>' +
                            '<ul class="xyrList ' + xyrObj[key].id + '" ids=' + xyrObj[key].id + '>' + xyrStr + '</ul></div>'
                    }
                }
            }
        }
    }

    var xyrTmpStr = '<div class="flws_xyr_area_wcl" id="flws_xyr_area_wcl_' + bm + '">' +
        '<div class="title">未处理嫌疑对象</div>' +
        '<div class="xyr_box">' + wclXyrStr + '</div>' +
        '</div>' +
        '<div class="flws_xyr_area_ycl" id="flws_xyr_area_ycl_' + bm + '">' +
        '<div class="title">已处理嫌疑对象</div>' +
        '<div class="xyr_box">' + yclXyrStr + '</div>' +
        '</div>';

    //append嫌疑人列表
    $('#flws_xyr_area_' + bm).append(xyrTmpStr);
    setPage();

    //disabled样式
    $('#flws_xyr_area_wcl_' + bm + ' ul.xyrList').find("label[disabled='disabled']").tooltip({position: 'right'});

    //未处理嫌疑对象绑定事件
    $('#flws_xyr_area_wcl_' + bm + ' ul.xyrList input:checkbox').off('click').on('click', function (event) {
        flwsWclXyrCheck(bm, $(this), event);
        //return flwsWclXyrCheck(bm, $(this),event);
    });

    //已处理嫌疑对象绑定事件
    $('#flws_xyr_area_ycl_' + bm + ' ul.xyrList input:checkbox').off('click').on('click', function () {
        flwsYclXyrCheck(bm, $(this));
    });

    //保存数据成功后获取法律文书主键，再次点击为编辑
    if (DATA.FLWS[bm].status.currentDxId != undefined) {
        $('#flws_xyr_area_' + bm).find("input[xxzjbh='" + DATA.FLWS[bm].status.currentDxId + "']").click();
    }
}

/**
 * 法律文书对象渲染方法 B (法律文书only：false,dx:true)
 * @param bm
 */
function flwsDxRenderB(bm) {

}


/**
 * 法律文书对象渲染方法 C (法律文书one：true,dx: false) 整个案件中只能出一份儿
 * @param bm
 */
function flwsDxRenderC(bm) {
    $('#flws_xyr_area_' + bm).html('');
    var xydxDatas = DATA.DX.xydxData;//嫌疑对象数据
    var xyrListStr = '';//嫌疑人list字符串

    if (xydxDatas) {
        for (var k in xydxDatas) {
            for (var key in xyrObj) {
                if (k == key) {
                    var xyrStr = '';
                    for (var i = 0; i < xydxDatas[k].length; i++) {
                        //DATA.xyrArry.push(xydxDatas[k][i]);
                        if (key == anjianXyDxDic.xyr) {//嫌疑人的显示组合信息
                            var xyrzhxx = filedToParagraph(xydxDatas[k][i], DATA.FLWS[bm].prefixpz, DATA.FLWS[bm].splitpz);
                            xyrStr += '<li><label ' + xydxDatas[k][i].title + ' ' + xydxDatas[k][i].disabled + '><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox" ' + xydxDatas[k][i].disabled + '/>' +
                                '<span xyrtype="' + xyrObj[key].id + '" xyrzhxx="' + xyrzhxx + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                        } else {
                            xyrStr += '<li><label><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox"/>' +
                                '<span xyrtype="' + xyrObj[key].id + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                        }
                    }

                    xyrListStr += '<div><p><i class="fa fa-bars"></i>' + xyrObj[key].text + '</p>' +
                        '<ul class="xyrList ' + xyrObj[key].id + '" ids=' + xyrObj[key].id + '>' + xyrStr + '</ul></div>'
                }
            }
        }

        //法律文书嫌疑人列表展示
        $('#flws_xyr_area_' + bm).append(xyrListStr).css('background', '#f5f5f5');

        //disabled样式
        $('#flws_xyr_area_' + bm + ' ul.xyrList').find("label[disabled='disabled']").tooltip({position: 'right'});


        //选中已经保存的法律文书
        if (DATA.FLWS[bm].flwsRow.length > 0) {
            $('#flws_xyr_area_' + bm).find("input[xxzjbh='" + (DATA.FLWS[bm].flwsRow)[0].CLDX_XXZJBH + "']").prop('checked', true);
        }

        //嫌疑对象的勾选
        $('#flws_xyr_area_' + bm + ' ul.xyrList input:checkbox').off('click').on('click', function () {
            flwsClXyrCheckC(bm, $(this));
        });
    }
}

/**
 * 法律文书对象渲染方法 D (法律文书only：true,dx:true)
 * @param bm
 */
function flwsDxRenderD(bm) {
    $('#flws_xyr_area_' + bm).html('');
    var xydxDatas = DATA.DX.xydxData;//嫌疑对象数据
    var xyrListStr = '';//嫌疑人list字符串

    if (xydxDatas) {
        for (var k in xydxDatas) {
            for (var key in xyrObj) {
                if (k == key) {
                    var xyrStr = '';
                    for (var i = 0; i < xydxDatas[k].length; i++) {
                        //DATA.xyrArry.push(xydxDatas[k][i]);
                        if (key == anjianXyDxDic.xyr) {//嫌疑人的显示组合信息
                            var xyrzhxx = filedToParagraph(xydxDatas[k][i], DATA.FLWS[bm].prefixpz, DATA.FLWS[bm].splitpz);
                            xyrStr += '<li><label ' + xydxDatas[k][i].title + ' ' + xydxDatas[k][i].disabled + '><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox" ' + xydxDatas[k][i].disabled + '/>' +
                                '<span xyrtype="' + xyrObj[key].id + '" xyrzhxx="' + xyrzhxx + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                        } else if (key == anjianXyDxDic.xyr) {
                            xyrStr += '<li><label><input xxzjbh="' + xydxDatas[k][i][xyrObj[key].xxzjbh] + '" type="checkbox"/>' +
                                '<span xyrtype="' + xyrObj[key].id + '">' + xydxDatas[k][i][xyrObj[key].param] + '</span></label></li>';
                        }
                    }

                    xyrListStr += '<div><p><i class="fa fa-bars"></i>' + xyrObj[key].text + '</p>' +
                        '<ul class="xyrList ' + xyrObj[key].id + '" ids=' + xyrObj[key].id + '>' + xyrStr + '</ul></div>'
                }
            }
        }

        //法律文书嫌疑人列表展示
        $('#flws_xyr_area_' + bm).append(xyrListStr).css('background', '#f5f5f5');

        //disabled样式
        $('#flws_xyr_area_' + bm + ' ul.xyrList').find("label[disabled='disabled']").tooltip({position: 'right'});


        //嫌疑对象的勾选
        $('#flws_xyr_area_' + bm + ' ul.xyrList input:checkbox').off('click').on('click', function () {
            flwsClXyrCheckD(bm, $(this));
        });

        //选中已经保存的法律文书
        if (DATA.FLWS[bm].flwsRow.length > 0) {
            var tmpArray = [];
            var cldxs = (DATA.FLWS[bm].flwsRow)[0].CLDX_XXZJBH;

            if (cldxs.indexOf(',') == -1) {
                tmpArray.push(cldxs);
            } else {
                tmpArray = cldxs.split(',');
            }

            for (var i = 0; i < tmpArray.length; i++) {
                console.log($('#flws_xyr_area_' + bm).find("input[xxzjbh='" + tmpArray[i] + "']"));

                $('#flws_xyr_area_' + bm).find("input[xxzjbh='" + tmpArray[i] + "']").click();
            }
        }
    }

}

/**
 * 法律文书对象渲染方法 D (法律文书only：true,wdx:true)
 * @param bm
 */
function flwsDxRenderE(bm) {
    $('#flws_xyr_area_' + bm).hide();
    $('#flws_main_con_r_' + bm).css({width: '100%'});
    $('#flws_cl_area_' + bm).css({height: '100%', width: '100%'}).tabs();
    $('#flws_cl_area_' + bm + ' .tabs-panels .panel').css('width', '1168px');
    $('#flws_cl_area_' + bm + ' .tabs-panels .panel .panel-body').css('width', '1168px');
}

/**
 * 法律文书 嫌疑人对象列表渲染
 * @param bm
 */
function flwsPageRender(bm) {
    var flwsData = DATA.FLWS[bm].flwsData;
    var flwsRow = DATA.FLWS[bm].flwsRow;

    if (flwsData.one && flwsData.dx) {//法律文书只能保存一份儿且允许多选
        flwsDxRenderB(bm);
    } else if (flwsData.one && !flwsData.dx) {//法律文书只能保存一份儿
        flwsDxRenderC(bm);
        flwsPageRenderC(bm);
    } else if (flwsData.dx && flwsData.only) {//法律文书多选并且一个呈请报告下法律文书只有一份儿
        flwsDxRenderD(bm);
        flwsPageRenderD(bm);
    } else if (flwsData.only && flwsData.wdx) {//法律文书无嫌疑对象
        flwsDxRenderE(bm);
        flwsPageRenderD(bm);
    } else {//法律文书可以保存多份儿
        flwsDxRenderA(bm, flwsRow);
    }
}

/**
 * 法律文书右侧页面拼接
 */
function flwsRightPagePj(flwsData) {
    $('#flws_main_con_r_' + flwsData.bianMa).html('');//清空

    var iframecon = '', emputArry = [], flwscon = '';
    var childs = flwsData.childMap;
    for (var b in childs) {
        emputArry.push(childs[b]);
    }
    var childIframe = emputArry.sort(compare('index'));//排序
    for (var i = 0; i < childIframe.length; i++) {
        flwscon = getHtmlByAjax(childIframe[i].url);
        iframecon += '<div title="' + childIframe[i].name + '" tabindex="' + childIframe[i].index + '">' + flwscon + '</div>';
    }

    var str = '<div class="save-btn-area">' +
        '<a class="save-btn saveFlwsZfgk" id="saveFlwsZfgk_' + flwsData.bianMa + '">执法公开编辑</a>' +
        '<a class="save-btn saveFlwsAdd" id="saveFlwsAdd_' + flwsData.bianMa + '" style="display: block;"></a>' +
        '</div>' +
        '<div class="flws-mode-right">' +
        '<div class="flws_cl_area" id="flws_cl_area_' + flwsData.bianMa + '">' + iframecon + '</div>' +
        '</div>';

    $('#flws_main_con_r_' + flwsData.bianMa).append(str);
    setPage();//设置页面高度

    $('#flws_cl_area_' + flwsData.bianMa).css({height: '100%', width: '100%'}).tabs({
        plain: true, pill: true, border: false
    });

    //绑定保存事件
    $('#saveFlwsAdd_' + flwsData.bianMa).off('click').on('click', function () {
        saveFlws(flwsData.bianMa);
    });

    //生成法律文书按钮 绑定事件（没有呈请报告）
    if (DATA.FLWS.flwsData.customer) {
        var str = '<a class="scflws" id="scflws_' + flwsData.bianMa + '">生成法律文书</a>';
        $('.save-btn-area').append(str);

        $('#scflws_' + flwsData.bianMa).show().off('click').on('click', function () {
            scflwsrwForNoCqbg(flwsData.bianMa);
        });
    }
}

/**
 * 新增渲染
 * 法律文书右侧页面渲染
 */
function flwsRightPageRenderA(flwsData) {
    flwsRightPagePj(flwsData);
    $('#saveFlwsAdd_' + flwsData.bianMa).text('法律文书新增保存');

    //行政案件 行政处罚报告书  执法公开编辑按钮单独处理
    //if(flwsData.bianMa == '020003'){
    //    $('#saveFlwsZfgk_' + flwsData.bianMa).show().text('执法公开编辑');
    //}

    //法律文书页面的初始化
    var flwsIpts = $('#flws_main_con_r_' + flwsData.bianMa + ' form input');
    easyuiReset(flwsIpts, true, flwsData.bianMa);

    if (DATA.FLWS[flwsData.bianMa] == undefined) {
        DATA.FLWS[flwsData.bianMa] = {};
    }
    if (DATA.FLWS[flwsData.bianMa]['status'] == undefined) {
        DATA.FLWS[flwsData.bianMa]['status'] = {};
    }

    DATA.FLWS[flwsData.bianMa]['status']['isAdd'] = true;

    //获取呈请报告、法律文书公共参数接口
    getCqbgFlwsAllXxData(cqbgFlwsOtherXxfy);
}


/**
 * 编辑渲染
 * 法律文书右侧页面渲染
 */
function flwsRightPageRenderB(flwsData) {

    flwsRightPagePj(flwsData);
    $('#saveFlwsAdd_' + flwsData.bianMa).text('法律文书编辑保存');

    //行政案件 行政处罚报告书  执法公开编辑按钮单独处理

    if (flwsData.bianMa == 'X020003') {
        $('#saveFlwsZfgk_' + flwsData.bianMa).show().text('执法公开编辑');
    }

    //法律文书页面的初始化
    var flwsIpts = $('#flws_main_con_r_' + flwsData.bianMa + ' form input');
    easyuiReset(flwsIpts, false, flwsData.bianMa);

    if (DATA.FLWS[flwsData.bianMa] == undefined) {
        DATA.FLWS[flwsData.bianMa] = {};
    }
    if (DATA.FLWS[flwsData.bianMa]['status'] == undefined) {
        DATA.FLWS[flwsData.bianMa]['status'] = {};
    }
    DATA.FLWS[flwsData.bianMa]['status']['isAdd'] = false;
}
/**
 * 针对法律文书 one：true  dx：false 法律文书页面的渲染
 */
function flwsPageRenderC(bm) {
    //是否有法律文书的数据
    var flwsRow = DATA.FLWS[bm].flwsRow;

    if (flwsRow.length == 0 || flwsRow == undefined) {//无数据
        //新增渲染
        //flwsRightPageRenderA(DATA.FLWS[bm].flwsData);

        //新增标识
        DATA.FLWS[bm]['status']['isAdd'] = true;

    } else if (flwsRow.length > 0) {//有数据
        //法律文书主键
        DATA.FLWS[bm].flwsZj = flwsRow[0].ZJ;
        DATA.FLWS[bm].params = {
            ZJ: DATA.FLWS[bm].flwsZj
        };
        //编辑渲染
        flwsRightPageRenderB(DATA.FLWS[bm].flwsData);

        //编辑标识
        DATA.FLWS[bm]['status']['isAdd'] = false;

        //法律文书信息复用
        flwsDataXxfy(bm, flwsRow[0].ZJ);
    }
}

/**
 * 法律文书 one：true
 * 多个嫌疑对象列表同一时间只能操作一个
 * 法律文书 嫌疑对象 勾选
 */
function flwsClXyrCheckC(bm, $this) {
    var parentDiv = $this.parent().parent().parent().parent();//父级div
    var parentLi = $this.parent().parent();//父级li

    //勾选嫌疑人
    if (parentDiv.find('input:checked').length > 0) {//选中
        parentLi.siblings().find('input:checked').attr('checked', false);//单选

        //多个嫌疑对象列表同一时间只能操作一个
        parentDiv.show();
        parentDiv.siblings().hide();

        //选中状态
        DATA.FLWS[bm]["status"]["selected"] = true;

        /*嫌疑人信息的复用*/
        var xyrXxzjbh = $this.attr('xxzjbh');//嫌疑人信息主键编号
        var xyrtype = $this.next().attr('xyrtype');//嫌疑人类别
        var xyrname = $this.next().text();//嫌疑人姓名

        DATA.FLWS[bm].xyrXxzjbh = xyrXxzjbh;
        //嫌疑人处理对象类别
        for (var k in xyrObj) {
            if (xyrtype == xyrObj[k].id) {
                DATA.FLWS[bm].xyrCldxlb = xyrObj[k].cldxlb;
                if (!DATA.FLWS[bm].xyrBm) {
                    DATA.FLWS[bm].xyrBm = k;
                }
            }
        }

        //嫌疑人数组中获取当前选中的嫌疑人数据
        var xyrArry = DATA.DX.xydxData[DATA.FLWS[bm].xyrBm];
        for (var i = 0; i < xyrArry.length; i++) {
            if (xyrArry[i]["xxzjbh"] == xyrXxzjbh) {
                var xyrCurrent = xyrArry[i];
                if (DATA.URLATTR[xyrApiName]) {
                    for (var j = 0; j < DATA.URLATTR[xyrApiName].length; j++) {
                        var key = DATA.URLATTR[xyrApiName][j];
                        if (xyrCurrent[key.toLowerCase()] != undefined) {
                            DATA.FLWS[bm].params[key] = xyrCurrent[key.toLowerCase()];
                        }
                    }
                    if (DATA.FLWS[bm].xyrXxzjbh) {
                        DATA.FLWS[bm].params.CLDX_XXZJBH = DATA.FLWS[bm].xyrXxzjbh;//嫌疑人主键id
                    }
                    if (DATA.FLWS[bm].xyrCldxlb) {
                        DATA.FLWS[bm].params.CLDXLB = DATA.FLWS[bm].xyrCldxlb;//嫌疑人处理对象类别
                    }
                    //犯罪嫌疑人信息复用
                    fzxyrXxfy(xyrCurrent, bm);
                }
            }
        }

    } else {//未选中
        if (DATA.FLWS[bm].flwsData.bx) {
            event.stopPropagation();
            $.messager.alert({
                title: '提示',
                msg: '必须选择一项',
                fn: function () {
                    $this.prop('checked', true);
                }
            });
            return false;
        }

        //选中状态
        DATA.FLWS[bm]["status"]["selected"] = false;

        parentDiv.show();
        parentDiv.siblings().show();

        //置空
        for (var j = 0; j < DATA.URLATTR[xyrApiName].length; j++) {
            var key = DATA.URLATTR[xyrApiName][j];
            DATA.FLWS[bm].params[key] = "";
        }
        DATA.FLWS[bm].params.CLDX_XXZJBH = "";//嫌疑人主键id
        DATA.FLWS[bm].params.CLDXLB = "";//嫌疑人处理对象类别

        if (!DATA.FLWS[bm].flwsData.customized) {
            var xyrDom = DATA.URLATTR[xyrApiName];
            for (var j = 0; j < xyrDom.length; j++) {
                var $node = $("#flws_cl_area_" + bm + " .panel form a>input." + xyrDom[j]);

                if ($node.hasClass('easyuitextbox')) {
                    $node.textbox({value: ''})
                } else if ($node.hasClass('easyuicombobox')) {
                    $node.combobox({value: ''});
                } else if ($node.hasClass('easyuicombotree')) {
                    $node.combotree({value: ''})
                } else if ($node.hasClass('easyuivalidatebox') || $node.hasClass('Wdate')) {
                    $node.val('');
                    wdateValidate($node[0]);
                }
            }

            editSwitch(false, 'clear-border', 'iptreadonly');//清除easyui样式
        }
    }
}

/**
 * 针对法律文书 only：true  dx：true 法律文书页面的渲染
 */
function flwsPageRenderD(bm) {
    //是否有法律文书的数据
    var flwsRow = DATA.FLWS[bm].flwsRow;

    if (flwsRow.length == 0 || flwsRow == undefined) {//无数据
        //新增渲染
        //flwsRightPageRenderA(DATA.FLWS[bm].flwsData);

        //新增标识
        DATA.FLWS[bm]['status']['isAdd'] = true;

    } else if (flwsRow.length > 0) {//有数据
        //法律文书主键
        DATA.FLWS[bm].flwsZj = flwsRow[0].ZJ;
        DATA.FLWS[bm].params = {
            ZJ: DATA.FLWS[bm].flwsZj
        };
        //编辑渲染
        flwsRightPageRenderB(DATA.FLWS[bm].flwsData);

        //编辑标识
        DATA.FLWS[bm]['status']['isAdd'] = false;

        //法律文书信息复用
        flwsDataXxfy(bm, flwsRow[0].ZJ);
    }
}

/**
 * 法律文书 only：true | dx:true
 * 多个嫌疑对象列表同一时间只能操作一个
 * 法律文书 嫌疑对象 勾选
 */
function flwsClXyrCheckD(bm, $this) {
    var parentDiv = $this.parent().parent().parent().parent();//父级div
    var parentUl = $this.parent().parent().parent();//父级ul
    var parentLi = $this.parent().parent();//父级li

    //针对嫌疑人多选组合信息的初始化
    //var xyrxmData = '';
    var xyridData = '';
    var xyrzhxxData = '';
    //var xyrxmArry = [];//嫌疑人姓名
    var xyridArry = [];//嫌疑人ID
    var xyrzhxxArry = [];
    var checkXyr = [];

    //勾选嫌疑人
    if (parentUl.find('input:checked').length > 0) {//选中

        //多个嫌疑对象列表同一时间只能操作一个
        parentDiv.show();
        parentDiv.siblings().hide();

        //选中状态
        DATA.FLWS[bm]["status"]["selected"] = true;


        var xyrtype = $this.next().attr('xyrtype');//嫌疑人类别
        for (var k in xyrObj) {
            if (xyrtype == xyrObj[k].id) {
                DATA.FLWS[bm].xyrCldxlb = xyrObj[k].cldxlb;
                if (!DATA.FLWS[bm].xyrBm) {
                    DATA.FLWS[bm].xyrBm = k;
                }
            }
        }

        //textarea框的值
        var textareaVal = $('#flws_cl_area_' + bm + ' form a textarea').val();
        checkXyr = $this.parent().parent().parent().find('input:checked');

        for (var i = 0; i < checkXyr.length; i++) {
            //xyrxmData = $(checkXyr[i]).next().text();
            xyridData = $(checkXyr[i]).attr('xxzjbh');
            xyrzhxxData = $(checkXyr[i]).next().attr('xyrzhxx');
            //xyrxmArry.push(xyrxmData);
            xyridArry.push(xyridData);
            xyrzhxxArry.push(xyrzhxxData);
        }

        var xyrZhxxData = '';
        for (var j = 0; j < xyrzhxxArry.length; j++) {
            xyrZhxxData += '\n' + '\t' + xyrzhxxArry[j];
        }

        $('#flws_cl_area_' + bm + ' form a textarea').val(xyrZhxxData + '\t');

        //DATA.FLWS[bm].xyrxms = xyrxmArry;
        DATA.FLWS[bm].xyrids = xyridArry;

    } else {//未选中
        if (DATA.FLWS[bm].flwsData.bx) {
            event.stopPropagation();
            $.messager.alert({
                title: '提示',
                msg: '必须选择一项',
                fn: function () {
                    $this.prop('checked', true);
                }
            });
            return false;
        }

        //选中状态
        DATA.FLWS[bm]["status"]["selected"] = false;

        parentDiv.show();
        parentDiv.siblings().show();

        //置空
        for (var j = 0; j < DATA.URLATTR[xyrApiName].length; j++) {
            var key = DATA.URLATTR[xyrApiName][j];
            DATA.FLWS[bm].params[key] = "";
        }
        DATA.FLWS[bm].params.CLDX_XXZJBH = "";//嫌疑人主键id
        DATA.FLWS[bm].params.CLDXLB = "";//嫌疑人处理对象类别

        if (!DATA.FLWS[bm].flwsData.customized) {
            var xyrDom = DATA.URLATTR[xyrApiName];
            for (var j = 0; j < xyrDom.length; j++) {
                var $node = $("#flws_cl_area_" + bm + " .panel form a>input." + xyrDom[j]);

                if ($node.hasClass('easyuitextbox')) {
                    $node.textbox({value: ''})
                } else if ($node.hasClass('easyuicombobox')) {
                    $node.combobox({value: ''});
                } else if ($node.hasClass('easyuicombotree')) {
                    $node.combotree({value: ''})
                } else if ($node.hasClass('easyuivalidatebox') || $node.hasClass('Wdate')) {
                    $node.val('');
                    wdateValidate($node[0]);
                }
            }

            editSwitch(false, 'clear-border', 'iptreadonly');//清除easyui样式
        }
    }
}

/**
 * 多个嫌疑对象列表同一时间只能操作一个
 * 法律文书 未处理嫌疑对象 勾选
 */
function flwsWclXyrCheck(bm, $this, event) {
    var parentDiv = $this.parent().parent().parent().parent();//父级div
    var parentUl = $this.parent().parent().parent();//父级ul
    var parentLi = $this.parent().parent();//父级li

    //勾选嫌疑人
    if (parentDiv.find('input:checked').length > 0) {//选中
        //新增渲染
        flwsRightPageRenderA(DATA.FLWS[bm].flwsData);
        flwsLsCqbgNrXxfy();//法律文书中类呈请报告呈请内容的信息复用
        //新增标识
        DATA.FLWS[bm]['status']['isAdd'] = true;

        //已处理|未处理嫌疑对象选中的互斥
        var yclXyrLen = $('#flws_xyr_area_ycl_' + bm + ' .xyrList li');
        if (yclXyrLen.length > 0) {
            $('#flws_xyr_area_ycl_' + bm + ' .xyrList').find('input:checked').attr('checked', false);
        }

        //选中状态
        DATA.FLWS[bm]["status"]["selected"] = true;

        //多个嫌疑对象列表同一时间只能操作一个
        parentDiv.show();
        parentDiv.siblings().hide();

        /**
         * 判断是否可以多选
         * 1、可多选
         * 2、不可多选
         */
        if (DATA.FLWS[bm].flwsData.dx) {//1
            //TODO 多选

        } else {//2
            parentLi.siblings().find('input:checked').attr('checked', false);//单选
            /*嫌疑人信息的复用*/
            var xyrXxzjbh = $this.attr('xxzjbh');//嫌疑人信息主键编号
            var xyrtype = $this.next().attr('xyrtype');//嫌疑人类别
            var xyrname = $this.next().text();//嫌疑人姓名
            DATA.FLWS[bm].xyrXxzjbh = xyrXxzjbh;
            //嫌疑人处理对象类别
            for (var k in xyrObj) {
                if (xyrtype == xyrObj[k].id) {
                    DATA.FLWS[bm].xyrCldxlb = xyrObj[k].cldxlb;
                    if (!DATA.FLWS[bm].xyrBm) {
                        DATA.FLWS[bm].xyrBm = k;
                    }
                }
            }
            //嫌疑人数组中获取当前选中的嫌疑人数据
            var xyrArry = DATA.DX.xydxData[DATA.FLWS[bm].xyrBm];
            for (var i = 0; i < xyrArry.length; i++) {
                if (xyrArry[i]["xxzjbh"] == xyrXxzjbh) {
                    var xyrCurrent = xyrArry[i];
                    if (DATA.FLWS[bm].flwsData.customized) {
                        eval("render" + bm + "CustomizedDx('" + JSON.stringify(xyrCurrent) + "')");
                    }
                    //犯罪嫌疑人信息复用
                    fzxyrXxfy(xyrCurrent, bm);
                    break;
                }
            }
            //违法嫌疑人
            var zhxxObj = null;
            var flwsData = DATA.FLWS[bm].flwsData;
            var xydxLb = parentUl.attr("ids");//嫌疑对象类别

            if (xydxLb == xyrObj[anjianXyDxDic.xyr].id && flwsData.xyrpz != undefined && flwsData.xyrpz != '') {//勾选嫌疑人
                for (var key in DATA.DX.xydxData[anjianXyDxDic.xyr]) {
                    if (DATA.DX.xydxData[anjianXyDxDic.xyr][key].xxzjbh == $this.attr("xxzjbh")) {
                        zhxxObj = DATA.DX.xydxData[anjianXyDxDic.xyr][key];
                    }
                }

            } else if (xydxLb == xyrObj[anjianXyDxDic.xydw].id && flwsData.xydwpz != undefined && flwsData.xydwpz != '') {
                for (var key in DATA.DX.xydxData[anjianXyDxDic.xydw]) {
                    if (DATA.DX.xydxData[anjianXyDxDic.xydw][key].xxzjbh == $this.attr("xxzjbh")) {
                        zhxxObj = DATA.DX.xydxData[anjianXyDxDic.xydw][key];
                    }
                }
            }

            if (zhxxObj) {
                var zhxx = {};
                var xyrpz = eval('(' + flwsData.xyrpz + ')');
                for (var fieldName in xyrpz) {
                    var xyrpzArr = xyrpz[fieldName].split(",");
                    for (var j = 0; j < xyrpzArr.length; j++) {
                        var field = xyrpzArr[j];
                        var val = zhxxObj[field];
                        if (val) {
                            zhxx[field] = val;
                        }
                    }
                    fzxyDxXxfy(fieldName, filedToParagraph(zhxx, DATA.FLWS[bm].prefixpz, DATA.FLWS[bm].splitpz), bm);
                }
            }
        }
    } else {//未选中
        if (DATA.FLWS[bm].flwsData.bx) {
            event.stopPropagation();
            $.messager.alert({
                title: '提示',
                msg: '必须选择一项',
                fn: function () {
                    $this.prop('checked', true);
                }
            });
            return false;
        }
        //选中状态
        DATA.FLWS[bm]["status"]["selected"] = false;

        /*不勾选嫌疑人信息置空*/
        DATA.FLWS[bm].xyrXxzjbh = '';
        DATA.FLWS[bm].xyrBm = '';
        DATA.FLWS[bm].xyrCldxlb = '';
        parentDiv.show();
        parentDiv.siblings().show();

        if (!DATA.FLWS[bm].flwsData.customized) {
            var xyrDom = DATA.URLATTR[xyrApiName];
            for (var j = 0; j < xyrDom.length; j++) {
                var $node = $("#flws_cl_area_" + bm + " .panel form a>input." + xyrDom[j]);

                if ($node.hasClass('easyuitextbox')) {
                    $node.textbox({value: ''})
                } else if ($node.hasClass('easyuicombobox')) {
                    $node.combobox({value: ''});
                } else if ($node.hasClass('easyuicombotree')) {
                    $node.combotree({value: ''})
                } else if ($node.hasClass('easyuivalidatebox') || $node.hasClass('Wdate')) {
                    $node.val('');
                    wdateValidate($node[0]);
                }
            }

            editSwitch(false, 'clear-border', 'iptreadonly');//清除easyui样式
        }

    }
}

/**
 * 法律文书已处理嫌疑对象勾选
 */
function flwsYclXyrCheck(bm, $this) {
    var parentDiv = $this.parent().parent().parent().parent();//父级div
    var parentLi = $this.parent().parent();//父级li

    //勾选嫌疑人
    if (parentDiv.find('input:checked').length > 0) {//选中
        //编辑渲染
        flwsRightPageRenderB(DATA.FLWS[bm].flwsData);
        flwsLsCqbgNrXxfy();//法律文书中类呈请报告呈请内容的信息复用
        //编辑标识
        DATA.FLWS[bm]['status']['isAdd'] = false;
        DATA.FLWS[bm]['status']['selected'] = true;
        //已处理|未处理嫌疑对象选中的互斥
        var wclXyrLen = $('#flws_xyr_area_wcl_' + bm + ' .xyrList li');
        if (wclXyrLen.length > 0) {
            $('#flws_xyr_area_wcl_' + bm + ' .xyrList').find('input:checked').attr('checked', false);
        }

        /**
         * 判断是否可以多选
         * 1、可多选
         * 2、不可多选
         */
        if (DATA.FLWS[bm].flwsData.dx) {//1
            //TODO 多选的处理


        } else {//2
            parentLi.siblings().find('input:checked').attr('checked', false);//单选

            var flwsZj = $this.attr('flwszj');//当前嫌疑人的法律文书主键
            DATA.FLWS[bm].flwsZj = flwsZj;//法律文书主键
            DATA.FLWS[bm].params = {
                ZJ: DATA.FLWS[bm].flwsZj
            }
            //法律文书信息复用
            flwsDataXxfy(bm, flwsZj);

            //绑定执法公开点击事件
            $('#saveFlwsZfgk_' + bm).off('click').on('click', function () {
                zfgkEdit(bm, flwsZj);
            });
        }
    } else {//未选中
        DATA.FLWS[bm]['status']['selected'] = false;
        //新增渲染
        flwsRightPageRenderA(DATA.FLWS[bm].flwsData);
    }
}

/**
 * 法律文书 查询接口返回数据的渲染
 * @param bm 法律文书编码
 * @param zj 法律文书主键
 */
function flwsDataXxfy(bm, zj) {
    var data = DATA.FLWS[bm].flwsRow;//返回的法律文书数据
    //查询嫌疑人结果信息复用
    for (var i = 0; i < data.length; i++) {
        if (zj == data[i].ZJ) {
            //自定义页面处理
            if (DATA.FLWS[bm].flwsData.customized) {
                eval("render" + bm + "CustomizedPage('" + JSON.stringify(data[i]) + "')");
            }
            //多版本处理
            data[i].VERSION = parseInt(data[i].VERSION);
            if (DATA.FLWS[bm].flwsData.switchVersion) {
                var tabs = $('#flws_cl_area_' + bm).tabs("tabs");
                if (tabs.length > data[i].VERSION) {
                    for (var index = data[i].VERSION; index < tabs.length; index++) {
                        $('#flws_cl_area_' + bm).tabs("close", index);
                    }
                }
                for (var index = data[i].VERSION - 2; index >= 0; index--) {
                    $('#flws_cl_area_' + bm).tabs("close", index);
                }
            }
            for (var key in data[i]) {
                var $node = $("#flws_cl_area_" + bm + " form a ." + key);//节点
                var val = data[i][key];
                //版本切换赋值的处理
                var $a = $node.parent();
                if ($a.attr('annotation') == '/REPLACE/') {
                    $a.parent().next().val(val);
                } else {
                    if ($node.hasClass('easyuitextbox')) {
                        $node.textbox({value: val});
                    } else if ($node.hasClass('easyuicombobox')) {
                        $node.combobox({value: val})
                    } else if ($node.hasClass('easyuicombotree')) {
                        $node.combotree({value: val})
                    } else if ($node.hasClass('easyuivalidatebox') || $node.hasClass('Wdate')) {
                        $node.val(data[i][key + '_MASTER']);
                        wdateValidate("#flws_cl_area_" + bm + " form input." + key);
                    } else if ($node.hasClass('TEXTBOX')) {//多选 TEXTBOX 的处理
                        $node.val(val);
                    }
                }
            }
            break;
        }
    }

    editSwitch(false, 'clear-border', 'iptreadonly');//清除easyui样式
}