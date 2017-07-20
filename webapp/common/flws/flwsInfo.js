/**
 * Created by christ on 2016/11/4.
 * description: 法律文书详情页面渲染js文件
 */

/**
 * 获取法律文书数据
 * @param cqbgzj 呈请报告主键
 */
function getCqbgMapData(cqbgzj) {
    var openUrl = '';
    if (DATA.asjflwsbm && DATA.asjflwsbm != 'null' && DATA.asjflwsbm != 'undefined' && DATA.asjflwsbm != 'TB_XW_FLWS_SADJ' && DATA.asjflwsbm != 'TB_FLWS_SADJB' && DATA.asjflwsbm != 'TB_XW_FLWS_HJFZXYRSQB') {//无呈请报告法律文书的处理
        openUrl = pathConfig.basePath + '/wenshu/source/FLWS_' + DATA.flwsAsjflwsdm + '/DIC.json'
    }
    else if(pathObj.pageFrom=="cqwsxg"){
        openUrl = pathConfig.basePath + '/wenshu/source/FLWS/DIC?dms='+ DATA.flwsAsjflwsdm;
    }
    else {
        openUrl = pathConfig.basePath + '/wenshu/source/CQBG_' + DATA.flwsAsjflwsdm + '/DIC.json'
    }

    loading("open", "正在请求数据中,请稍等...");
    //发送请求
    $.ajax({
        url: openUrl,
        data: {
            cqbgZj: cqbgzj
        },
        success: function (json) {
            loading('close');
            var jsonDatas = eval('(' + json + ')');//json化数据
            //console.log(jsonDatas);
            //呈请报告、法律文书map数据的获取
            if (!jsonDatas.isFlws && !jsonDatas.bianMa.startsWith("000000")) {//有呈请报告
                DATA.CQBG = {
                    cqbgData: jsonDatas,//呈请报告数据
                    asjflwsdm: jsonDatas.bianMa,//呈请报告编码(案事件法律文书代码)
                    asjflwsmc: jsonDatas.name,//案事件法律文书名称
                    status: {}
                };

                //有法律文书
                if (jsonDatas.childMap) {//有法律文书
                    DATA.FLWS = {
                        flwsData: jsonDatas.childMap//法律文书数据
                    }
                } else {
                    DATA.FLWS = {
                        flwsData: {}//法律文书数据
                    }
                }
            } else if (jsonDatas.isFlws) {//无呈请报告
                DATA.CQBG = {status: {}};
                DATA.FLWS = {
                    flwsData: {"customer": jsonDatas}//法律文书数据
                };
            }

            if (pathObj.pageFrom != 'undefined' && pathObj.pageFrom == 'cqwsxg') {//【呈请文书修改详情】
                DATA.FLWS.cqFlwsZj = pathObj.flwsxxzjbh;//呈请法律文书主键
            }

            getCqbgFlwsHtmlPage();//呈请报告(法律文书)iframe页面的获取
            //呈请报告数据查询
            if (typeof (DATA.CQBG.cqbgData) != 'undefined') {
                //获取呈请报告数据
                queryCqbgData();//【电子签章不需要获取】
            } else {
                if (DATA.FLWS.flwsData.customer) {//只有法律文书,并且需要生成法律文书
                    onlyFlwsRender();
                }
            }
            clearAllStyle();

            tabSwitch();//法律文书tab切换
        }
    });
}

/**
 * 呈请报告、法律文书页面  初始化渲染
 */
function getCqbgFlwsHtmlPage() {
    /***呈请报告***/
    var cqbgstr = '';
    var cqbgData = DATA.CQBG.cqbgData;//呈请报告数据
    var cqbgzj = DATA.cqbgzj;
    console.log('呈请报告数据:',DATA);
    if (!jQuery.isEmptyObject(cqbgData)) {
        /*
        //呈请报告审批签章
        var dzqzPdfUrl = pathConfig.basePath + '/html/pdfqz/cqbgSpqz.html?xxzjbh='+cqbgzj;
        var cqbgcon = '<iframe scrolling="hidden" frameborder="0" src="' + dzqzPdfUrl + '" style="width:100%;height: 99%;"> </iframe>';
        cqbgstr = '<div class="flws-tabs-title" id="flws_cqbg" title="' + cqbgData.name + '">' +
            '<div class="flws-main-con">' +
            '<div class="flws-main-con-r" id="cqbg_main_con" style="width: 100%;">' + cqbgcon +
            '</div>' +
            '</div>' +
            '</div>';
        */

        //呈请报告字符串【未使用签章时引用的方式】
        var cqbgcon = getHtmlByAjax(cqbgData.url);
        cqbgstr = '<div class="flws-tabs-title" id="flws_cqbg" title="' + cqbgData.name + '">' +
        '<div class="flws-main-con">' +
        '<div class="flws-main-con-r" id="cqbg_main_con" style="width: 100%;">' + cqbgcon +
        '</div>' +
        '</div>' +
        '</div>';
    }

    $("#flwsTabs").append(cqbgstr);

    /***法律文书***/
    var flwsstr = '';
    var flwsData = DATA.FLWS.flwsData;//法律文书数据
    if (!jQuery.isEmptyObject(flwsData)) {
        var flwsTmpArray = [];//法律文书临时数组
        for (var k in flwsData) {
            flwsTmpArray.push(flwsData[k]);
        }
        var sortedFlwsData = flwsTmpArray.sort(compare('index'));
        //法律文书字符串
        for (var a = 0; a < sortedFlwsData.length; a++) {
            flwsstr = '<div class="flws-tabs-title" title="' + sortedFlwsData[a].name + '">' +
                '<div class="flws-main-con" id="flws_main_con_' + sortedFlwsData[a].bianMa + '">' +
                '</div>' +
                '</div>';
            $("#flwsTabs").append(flwsstr);
            flwsRightPageRender(sortedFlwsData[a]);
        }
    }

    setPage();//设置页面高度
    $('#flwsTabs').css({height: '100%', width: '100%'}).tabs({
        plain: true, pill: true, border: false
    });

}

/**
 * query 呈请报告数据
 */
function queryCqbgData() {
    loading('open', '正在获取呈请报告数据,请稍等...');
    var cqbgQueryUrl = DATA.CQBG.cqbgData.queryUrl;//query呈请报告url

    $.ajax({
        url: cqbgQueryUrl,
        data: {
            XXZJBH: DATA.cqbgzj,
            CQBG_ZJ: DATA.cqbgzj
        },
        dataType: 'json',
        success: function (json) {
            loading('close');
            if (json.state == 'success') {//成功
                var data = json.rows[0];//呈请报告返回的数据
                DATA.CQBG.cqbgRow = data;//呈请报告返回的数据
                //判断是否为自定义页面
                if (DATA.CQBG.cqbgData.customized) {
                    //自定义页面的渲染，由各自的js文件单独单独处理，这里只负责传值
                    for(var k in data){
                        if(data[k] && data[k].search(/\n|\r|\t/) != -1){
                            var tmp = strEnterSpaceA(data[k]);
                            data[k] = tmp;
                        }
                    }
                    eval("render" + DATA.CQBG.cqbgData.bianMa + "CustomizedPage('" + JSON.stringify(data) + "')");
                } else {
                    //信息复用
                    var $target = $("#cqbg_main_con form a");
                    for (var a in data) {
                        if (a == 'CQNR') {//呈请内容单独处理
                            $('#cqbg_main_con form textarea').val(data[a]).prop('readonly', true);
                            autoTextarea($('#cqbg_main_con form textarea')[0]);
                        } else {
                            for (var i = 0; i < $target.length; i++) {
                                var aName = $($target[i]).attr('name');//a标签的name属性
                                if (a == aName) {
                                    $($target[i]).text(data[a]);
                                }
                            }
                        }

                    }
                }
            } else {
                $.messager.show({
                    title: '错误提示',
                    msg: json.message,
                    icon: 'warning'
                });
            }

        }
    })
}

/**
 * 法律文书详情渲染
 * 法律文书右侧页面渲染
 */
function flwsRightPageRender(flwsData) {
    flwsRightPagePj(flwsData);
}

/**
 * 法律文书右侧页面拼接
 */
function flwsRightPagePj(flwsData) {
    var str = '';
    var bm = flwsData.bianMa;//法律文书编码
    $('#flws_main_con_' + bm).html('');//清空

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

    if (flwsData.wdx) {//无嫌疑对象列表
        str = '<div class="flws-main-con-r"  id="flws_main_con_r_' + bm + '"  style="width: 100%;">' +
            '<div class="flws-mode-right">' +
            '<div class="flws_cl_area" id="flws_cl_area_' + bm + '" style="width: 100%;">' + iframecon + '</div>' +
            '</div>' +
            '</div>';
    } else {//有嫌疑对象列表
        if (flwsData.dx && flwsData.only) {//多选 并且只能出一份儿
            str = '<div class="flws-main-con-r"  id="flws_main_con_r_' + bm + '"  style="width: 100%;">' +
                '<div class="flws-mode-right">' +
                '<div class="flws_cl_area" id="flws_cl_area_' + bm + '" style="width: 100%;">' + iframecon + '</div>' +
                '</div>' +
                '</div>';
        } else {//单选 出多份儿
            str = '<div class="flws-main-con-l flws_xyr_area flws_xyr_area_add" id="flws_xyr_area_' + bm + '">' +
                '</div>' +
                '<div class="flws-main-con-r"  id="flws_main_con_r_' + bm + '">' +
                '<div class="save-btn-area">' +
                '<a class="save-btn saveFlwsZfgk" id="linkFlwsZfgk_' + bm + '"></a>' +
                '</div>' +
                '<div class="flws-mode-right">' +
                '<div class="flws_cl_area" id="flws_cl_area_' + bm + '">' + iframecon + '</div>' +

                '</div>' +
                '</div>';
        }

    }
    //console.log(str);
    $('#flws_main_con_' + bm).append(str);
    setPage();//设置页面高度

    /****行政案件 行政处罚报告书  执法公开编辑按钮单独处理****/
    if (bm == 'X020003' || bm == '042164') {
        $('#linkFlwsZfgk_' + bm).show().text('查看执法公开信息');
    }

    $('#flws_cl_area_' + bm).css({height: '100%', width: '100%'}).tabs({
        plain: true, pill: true, border: false
    });
}


/**
 * 法律文书tab的切换
 */
function tabSwitch() {
    $("#flwsTabs").tabs({
        onSelect: function (title, index) {
            if (DATA.CQBG.cqbgData.bianMa != '000000' || typeof (DATA.CQBG.cqbgData) != 'undefined') {//有呈请报告
                DATA.FLWS.title = title;
                queryFlwsData(title, flwsPageRender);
            } else {//没有呈请报告
                //TODO 无呈请报告的处理(并且有多个法律文书的处理)
                queryFlwsData(title, flwsPageRender);
            }
        }
    })
}

/**
 * 特殊类型
 * 无呈请报告，只有一个法律文书的的渲染
 */
function onlyFlwsRender() {
    var title = DATA.FLWS.flwsData.customer.name;
    DATA.FLWS.title = title;
    queryFlwsData(title, flwsPageRender);
}

/**
 * 请求获取法律文书数据，判断该数据是否存在，如果存在保存既修改，如果不存在，保存既新增
 * @param title 当前tab窗口
 */
function queryFlwsData(title, render) {
    var flwsData = DATA.FLWS.flwsData;//法律文书数据
    if (flwsData) {
        //操作当前tab下的查询
        for (var k in flwsData) {
            if (title == flwsData[k].name) {
                var param = {};//参数
                var bm = flwsData[k].bianMa;//法律文书编码

                //目前只能查看有呈请报告的法律文书，没有的还未设计 todo
                if (DATA.FLWS.cqFlwsZj) {//【呈请法律文书修改】
                    param = {
                        ZJ: DATA.FLWS.cqFlwsZj
                    };
                } else {
                    param = {
                        CQBG_ZJ: DATA.cqbgzj,
                        XT_ZXBZ: '0',
                        ASJBH: DATA.asjbh
                    };
                }
                if (typeof (DATA.FLWS[bm]) == 'undefined') {
                    DATA.FLWS[bm] = {};
                }
                if (typeof (DATA.FLWS[bm]['status']) == 'undefined') {
                    DATA.FLWS[bm]['status'] = {};
                }

                DATA.FLWS[bm].flwsData = flwsData[k];
                //DATA.FLWS[flwsData[k].bianMa].params = {};
                //var only = DATA.CQBG.cqbgZj == undefined || DATA.FLWS[flwsData[k].bianMa].flwsData.only;
                //var one = DATA.FLWS[flwsData[k].bianMa].flwsData.one;
                //if (only || one) {//只能出一份文书
                //    param = {
                //        XT_ZXBZ: '0',
                //        ASJBH: DATA.asjbh
                //    }
                //} else {//出多份文书
                //    param = {
                //        CQBG_ZJ: DATA.CQBG.cqbgZj,
                //        XT_ZXBZ: '0',
                //        ASJBH: DATA.asjbh
                //    }
                //}

                loading("open", "正在获取法律文书数据,请稍等...");
                if (!jQuery.isEmptyObject(DATA.CQBG.cqbgData)) {
                    if (DATA.CQBG.cqbgData.btflws && DATA.CQBG.cqbgData.btflws.indexOf('[') > -1) {
                        var btflwsRule = eval('(' + DATA.CQBG.cqbgData.btflws + ')');//处理
                        for (var index = 0; index < btflwsRule.length; index++) {
                            if (btflwsRule[index].BM.split(",")[0] == bm && btflwsRule[index].FIELD && !btflwsRule[index].FCX) {
                                param[btflwsRule[index].FIELD] = btflwsRule[index].VALUE;
                            }
                        }
                    }
                }
                $.ajax({
                    url: flwsData[k].queryUrl,
                    data: param,
                    dataType: 'json',
                    success: function (json) {
                        loading('close');
                        //console.log(json)
                        if (json.state == 'success') {
                            var jsonRows = json.rows;
                            if (jsonRows.length > 0) {//有数据 执行编辑渲染
                                DATA.FLWS[bm].flwsRow = jsonRows;
                            } else {//没有数据 执行新增渲染
                                DATA.FLWS[bm].flwsRow = [];
                            }

                            render(bm);
                        } else if (json.state == 'error') {
                            console.log('error');
                        }
                    }
                });
            }
        }
    }
}

/**
 * 法律文书 嫌疑人对象列表渲染
 * @param bm
 */
function flwsPageRender(bm) {
    var flwsData = DATA.FLWS[bm].flwsData;

    /***无嫌疑对象***/
    if (flwsData.wdx) {
        //针对自定义页面
        if (flwsData.customized) {
            var data = DATA.FLWS[bm].flwsRow[0];
            for(var k in data){
                if(data[k] && data[k].search(/\n|\r|\t/) != -1){
                    var tmp = strEnterSpaceA(data[k]);
                    data[k] = tmp;
                }
            }
            eval("render" + bm + "CustomizedPage('" + JSON.stringify(data) + "')");
            return;
        }

        if (flwsData.only) {
            //无嫌疑对象,法律文书真能做一份儿 wdx:true  only:true
            /****类型A*****/
            xydxListRenderA(bm);
        } else if (!flwsData.only) {
            //无嫌疑对象,法律文书真能做一份儿 wdx:true  only:false（无呈请报告）
            /****类型A*****/
            xydxListRenderA(bm);
        }
    } else if (!flwsData.wdx) {
        /****有嫌疑对象****/

        if (flwsData.dx && flwsData.only) {//有嫌疑对象，并且允许多选，只能出一份儿文书 wdx:false dx:true only:true
            //针对自定义页面
            if (flwsData.customized) {
                var data = DATA.FLWS[bm].flwsRow[0];
                for(var k in data){
                    if(data[k] && data[k].search(/\n|\r|\t/) != -1){
                        var tmp = strEnterSpaceA(data[k]);
                        data[k] = tmp;
                    }
                }
                eval("render" + bm + "CustomizedPage('" + JSON.stringify(data) + "')");
                return;
            }
            /****类型B****/
            xydxListRenderB(bm);

        } else {//有嫌疑对象，并且单选，而且可以出多份儿文书
            /****类型C(customized内部处理)***/
            xydxListRenderC(bm);
        }
    }

    //默认勾选第一个嫌疑对象
    if($('#flws_xyr_area_' + bm + ' div li').length>0){//如果有数据
        $('#flws_xyr_area_' + bm + ' div li:first-child label').click();
    }
}
/**************************A类型************************/
/**
 * 嫌疑对象列表的渲染 无嫌疑人对象
 * @param bm 法律文书编码
 */
function xydxListRenderA(bm) {
    flwsXxfyA(bm);
}

/**
 * 法律文书信息复用A
 */
function flwsXxfyA(bm) {
    var data = DATA.FLWS[bm].flwsRow[0];
    var $target = $('#flws_cl_area_' + bm + ' form a');

    for (var j = 0; j < $target.length; j++) {
        var aName = $($target[j]).attr('name');//a标签的name属性
        var annotation = $($target[j]).attr('annotation');//a标签的annotation属性

        if (typeof aName != 'undefined') {
            try {
                if (aName.indexOf('_T_') != -1) {
                    var type = $($target[j]).find('input').attr('type');//input框类型
                    if (type == 'radio' || type == 'checkbox') {
                        $($target[j]).find('input[type="' + type + '"]').prop('checked', false);
                    }
                    var name = aName.substring(0, aName.indexOf('_T_'));//对应数据的name值
                    var val = data[name];//对应数据的值
                    // checkbox多选框多个值的处理
                    var valArr = [];
                    if (val) {
                        if (val.indexOf(',') == -1) {
                            valArr.push(val);
                        } else {
                            valArr = val.split(',');
                        }
                    }
                    for (var g = 0; g < valArr.length; g++) {
                        $($target[j]).find("input[value='" + valArr[g] + "']").prop('checked', true).attr('disabled', 'disabled');
                    }
                }
            } catch (e) {
            }
        }

        if (annotation) {
            var tlx = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
            if (tlx != 'CHECKBOX' && tlx != 'RADIOBOX') {
                $($target[j]).text('');
            }
        }

        for (var k in data) {
            if (k == aName) {
                if (annotation) {//日期的处理
                    var textStyle = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
                    var dictStyle = annotation.substring(annotation.indexOf('{') + 1, annotation.indexOf('}'));
                    var treeStyle = annotation.substring(annotation.indexOf('%') + 1, annotation.lastIndexOf('%'));
                    var isEdit = annotation.substring(annotation.indexOf('/') + 1, annotation.lastIndexOf('/'));
                    if (textStyle) {
                        if (textStyle == 'DATE') {//2016年12月28日
                            var val = data[k + '_MASTER'];
                            var array = val.split('-');
                            var newVal = '';

                            for (var m = 0; m < array.length; m++) {
                                newVal = array[0] + '年' + array[1] + '月' + array[2] + '日';
                            }
                            $($target[j]).text(newVal);
                        } else if (textStyle == 'TEXTBOX' || textStyle == 'TEXTAREA' || textStyle == 'TEXTAREA_R') {//textarea框的处理
                            var strTextbox = "<textarea class='" + aName + " easyuivalidatebox " + textStyle + "' name='" + aName + "' readonly style='border: 0;'>" + data[k] + "</textarea>";
                            $($target[j]).html(strTextbox);
                            autoTextarea($($target[j]).find('textarea')[0]);
                        } else if (textStyle == 'DATE_CN') {
                            $($target[j]).text(data[k]);
                        } else if (textStyle == 'MONEY') {
                            $($target[j]).text(data[k + '_DX']);
                        } else {
                            $($target[j]).text(data[k]);
                        }
                    } else if (dictStyle || treeStyle) {
                        if (k == 'JYCS_GAJGMC') {
                            $($target[j]).text(data[k]);
                        } else {
                            $($target[j]).text(data[k + '_DICTMC']);
                        }
                    } else {
                        $($target[j]).text(data[k]);
                    }
                } else {
                    $($target[j]).text(data[k]);
                }
            }
        }
    }
}

/*************************end****************************/

/*************************类型B****************************/
/**
 * 嫌疑对象列表的渲染 有嫌疑人对象
 * @param bm  法律文书编码
 */
function xydxListRenderB(bm) {
    flwsXxfyB(bm, false);
}

/**
 * 法律文书信息复用B
 * @param bm  法律文书编码
 */
function flwsXxfyB(bm, isCustomized) {
    var data = DATA.FLWS[bm].flwsRow[0];
    var $target = $('#flws_cl_area_' + bm + ' form a');

    if (isCustomized) {
        if (DATA.FLWS[bm].flwsData.customized) {
            for(var k in data){
                if(data[k] && data[k].search(/\n|\r|\t/) != -1){
                    var tmp = strEnterSpaceA(data[k]);
                    data[k] = tmp;
                }
            }
            eval("render" + bm + "CustomizedPage('" + JSON.stringify(data) + "')");
        }
    }

    for (var j = 0; j < $target.length; j++) {
        var aName = $($target[j]).attr('name');//a标签的name属性
        var annotation = $($target[j]).attr('annotation');//a标签的annotation属性

        //多版本处理（行政案件）
        if(data.VERSION){
            data.VERSION = parseInt(data.VERSION);
            if (DATA.FLWS[bm].flwsData.switchVersion) {
                var tabs = $('#flws_cl_area_' + bm).tabs("tabs");
                if (tabs.length > data.VERSION) {
                    for (var index = data.VERSION; index < tabs.length; index++) {
                        $('#flws_cl_area_' + bm).tabs("close", index);
                    }
                }
                for (var index = data.VERSION - 2; index >= 0; index--) {
                    $('#flws_cl_area_' + bm).tabs("close", index);
                }
            }
        }

        //checkbox、radiobox的处理
        if (typeof aName != 'undefined') {
            try {
                if (aName.indexOf('_T_') > -1) {
                    var type = $($target[j]).find('input').attr('type');//input框类型
                    if (type == 'radio' || type == 'checkbox') {
                        $($target[j]).find('input[type="' + type + '"]').prop('checked', false);
                    }
                    var name = aName.substring(0, aName.indexOf('_T_'));//对应数据的name值
                    var val = data[name];//对应数据的值
                    // checkbox多选框多个值的处理
                    var valArr = [];
                    if (val) {
                        if (val.indexOf(',') == -1) {
                            valArr.push(val);
                        } else {
                            valArr = val.split(',');
                        }
                    }
                    for (var g = 0; g < valArr.length; g++) {
                        $($target[j]).find("input[value='" + valArr[g] + "']").prop('checked', true).attr('disabled', 'disabled');
                    }
                }
            } catch (e) {
            }
        }

        if (annotation) {
            var tlx = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
            if (tlx != 'CHECKBOX' && tlx != 'RADIOBOX') {
                $($target[j]).text('');
            }
        }

        for (var k in data) {
            if (k == aName) {
                if (annotation) {
                    var textStyle = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
                    var dictStyle = annotation.substring(annotation.indexOf('{') + 1, annotation.indexOf('}'));
                    var treeStyle = annotation.substring(annotation.indexOf('%') + 1, annotation.lastIndexOf('%'));
                    var isEdit = annotation.substring(annotation.indexOf('/') + 1, annotation.lastIndexOf('/'));
                    if (textStyle) {//日期的处理
                        if (textStyle == 'DATE') {//2016年12月28日
                            var val = data[k + '_MASTER'];
                            var array = val.split('-');
                            var newVal = '';

                            for (var m = 0; m < array.length; m++) {
                                newVal = array[0] + '年' + array[1] + '月' + array[2] + '日';
                            }
                            $($target[j]).text(newVal);
                        } else if (textStyle == 'DATE_CN') {
                            $($target[j]).text(data[k]);
                        } else if (textStyle == 'TEXTBOX' || textStyle == 'TEXTAREA' || textStyle == 'TEXTAREA_R') {//textarea框的处理
                            var strTextbox = "<textarea class='" + aName + " easyuivalidatebox " + textStyle + "' name='" + aName + "' readonly style='border: 0;'>" + data[k] + "</textarea>";
                            $($target[j]).html(strTextbox);
                            autoTextarea($($target[j]).find('textarea')[0]);
                        } else if (textStyle == 'MONEY') {
                            $($target[j]).text(data[k + '_DX']);
                        } else {
                            $($target[j]).text(data[k]);
                        }
                    } else if (dictStyle || treeStyle) {
                        if (k == 'JYCS_GAJGMC') {
                            $($target[j]).text(data[k]);
                        } else {
                            $($target[j]).text(data[k + '_DICTMC']);
                        }
                    } else {
                        $($target[j]).text(data[k]);
                    }
                } else {
                    $($target[j]).text(data[k]);
                }
            }
        }
    }
}
/************************end*****************************/

/************************类型C*****************************/
/**
 * 嫌疑对象列表的渲染 有嫌疑人对象
 * @param bm  法律文书编码
 */
function xydxListRenderC(bm) {
    //清空嫌疑对象DOM树
    $('#flws_xyr_area_' + bm).html('');

    var flwsRow = DATA.FLWS[bm].flwsRow;

    //拼接选嫌疑人
    var checkedXyrStr = '', xyrstr = '';//嫌疑人列表字符串
    var xyrCldxlb;//嫌疑人处理对象类别

    var data = flwsRow;
    if (data.length > 0) {//有数据
        //只有一条数据(有嫌疑对象但是未勾选，并且非必选，也只能有一条数据)
        if (data.length == 1 && !data[0].CLDXLB) {//默认选中
            flwsXxfyB(bm, true);
            $('#flws_xyr_area_' + bm).hide();
            $('#flws_main_con_r_' + bm).css({width: '100%'});
            $('#flws_cl_area_' + bm).css({height: '100%', width: '100%'}).tabs();
            $('#flws_cl_area_' + bm + ' .tabs-panels .panel').css('width', '1168px');
            $('#flws_cl_area_' + bm + ' .tabs-panels .panel .panel-body').css('width', '1168px');
        } else {
            for (var i = 0; i < data.length; i++) {
                if (data[0].CLDXLB) {
                    xyrCldxlb = data[0].CLDXLB;
                    for (var k in xyrObj) {
                        if (xyrCldxlb == xyrObj[k].cldxlb) {
                            if (data[i][(xyrObj[k].param).toUpperCase()]) {
                                xyrstr += '<li><label xxzjbh="' + data[i].CLDX_XXZJBH + '"><span>' + data[i][(xyrObj[k].param).toUpperCase()] + '</span></label></li>';
                            } else {
                                if (!DATA.DX.xydxData) {
                                    $.ajax({
                                        url: pathConfig.basePath + '/api/dtbm/' + DATA.FLWS[bm].flwsData.dxbm + '/getByForeignKey/ASJBH/' + DATA.asjbh,
                                        type: 'get',
                                        async: false,
                                        success: function (json) {
                                            if (json) {
                                                DATA.DX.xydxData = json;
                                            }
                                        }
                                    })
                                }

                                var xydxArray = DATA.DX.xydxData[k];
                                for (var j = 0; j < xydxArray.length; j++) {
                                    if (xydxArray[j].xxzjbh == data[i].CLDX_XXZJBH) {
                                        xyrstr += '<li><label xxzjbh="' + data[i].CLDX_XXZJBH + '"><span>' + xydxArray[j][(xyrObj[k].param)] + '</span></label></li>';
                                        break;
                                    }
                                }
                            }
                        }
                    }
                } else {
                    checkedXyrStr = '<div><p><i class="fa fa-bars"></i>嫌疑对象列表</p>' +
                        '<ul class="choose-list chooseXyr">' + xyrstr + '</ul></div>';
                }
            }

            for (var k2 in xyrObj) {
                if (xyrCldxlb == xyrObj[k2].cldxlb) {
                    checkedXyrStr = '<div><p><i class="fa fa-bars"></i>' + xyrObj[k2].text + '</p>' +
                        '<ul class="choose-list chooseXyr">' + xyrstr + '</ul></div>';
                }
            }
        }
    } else {//无数据
        checkedXyrStr = '<div><p><i class="fa fa-bars"></i>嫌疑对象列表</p>' +
            '<ul class="choose-list chooseXyr">' + xyrstr + '</ul></div>';
    }

    //嫌疑对象列表的背景色处理
    $('#flws_xyr_area_' + bm).css('background', '#f5f5f5').append(checkedXyrStr);

    //绑定点击事件
    if (data.length > 0) {
        if (data[0].CLDXLB) {//勾選了嫌疑對象
            $('#flws_xyr_area_' + bm + ' div li label').off('click').on('click', function () {
                flwsXxfyC1(bm, $(this));
            })
        } else {//不必選，沒有勾選嫌疑對象
            flwsXxfyB(bm, true);
        }
    } else {
        flwsXxfyC2(bm);
    }
}

/**
 * 法律文书信息复用C1
 */
function flwsXxfyC1(bm, $this) {
    var xxzjbh = $this.attr('xxzjbh');
    var $target = $('#flws_cl_area_' + bm + ' form a');
    var zfgkxxData = '';//执法公开信息数据

    //状态切换
    $this.parent().addClass('active');
    $this.parent().siblings().removeClass('active');

    var data = DATA.FLWS[bm].flwsRow;
    if (data) {
        for (var i = 0; i < data.length; i++) {
            if (xxzjbh == data[i].CLDX_XXZJBH) {
                zfgkxxData = data[i].WWGKNR;
                if (DATA.FLWS[bm].flwsData.customized) {
                    for(var k in data[i]){
                        if(data[i][k] && data[i][k].search(/\n|\r|\t/) != -1){
                            var tmp = strEnterSpaceA(data[i][k]);
                            data[i][k] = tmp;
                        }
                    }
                    eval("render" + bm + "CustomizedPage('" + JSON.stringify(data[i]).replace(/'/g,"\\'")   + "')");
                }

                for (var j = 0; j < $target.length; j++) {
                    var aName = $($target[j]).attr('name');//a标签的name属性
                    var annotation = $($target[j]).attr('annotation');//a标签的annotation属性

                    //多版本处理（行政案件）
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

                    //checkbox、radiobox的处理
                    if (typeof aName != 'undefined') {
                        try {
                            if (aName.indexOf('_T_') != -1) {
                                var type = $($target[j]).find('input').attr('type');//input框类型
                                if (type == 'radio' || type == 'checkbox') {
                                    $($target[j]).find('input[type="' + type + '"]').prop('checked', false);
                                }
                                var name = aName.substring(0, aName.indexOf('_T_'));//对应数据的name值
                                var val = data[i][name];//对应数据的值
                                //checkbox多选框多个值的处理
                                var valArr = [];
                                if (val) {
                                    if (val.indexOf(',') == -1) {
                                        valArr.push(val);
                                    } else {
                                        valArr = val.split(',');
                                    }
                                }
                                for (var g = 0; g < valArr.length; g++) {
                                    $($target[j]).find("input[value='" + valArr[g] + "']").prop('checked', true).attr('disabled', 'disabled');
                                }
                            }
                        } catch (e) {
                        }
                    }

                    if (annotation) {
                        var tlx = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
                        if (tlx != 'CHECKBOX' && tlx != 'RADIOBOX') {
                            $($target[j]).text('');
                        } else {
                        }
                    }

                    for (var a in data[i]) {
                        if (a == aName) {
                            if (annotation) {
                                //日期的处理
                                var textStyle = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
                                var dictStyle = annotation.substring(annotation.indexOf('{') + 1, annotation.indexOf('}'));
                                var treeStyle = annotation.substring(annotation.indexOf('%') + 1, annotation.lastIndexOf('%'));
                                var isEdit = annotation.substring(annotation.indexOf('/') + 1, annotation.lastIndexOf('/'));
                                if (textStyle) {
                                    if (textStyle == 'DATE') {//2016年12月28日
                                        var val = data[i][a + '_MASTER'];
                                        var array = val.split('-');
                                        var newVal = '';

                                        for (var m = 0; m < array.length; m++) {
                                            newVal = array[0] + '年' + array[1] + '月' + array[2] + '日';
                                        }
                                        $($target[j]).text(newVal);
                                    } else if (textStyle == 'DATE_CN') {
                                        $($target[j]).text(data[i][a]);
                                    } else if (textStyle == 'TEXTBOX' || textStyle == 'TEXTAREA' || textStyle == 'TEXTAREA_R') {//textarea框的处理
                                        var strTextbox = "<textarea class='" + aName + " easyuivalidatebox " + textStyle + "' name='" + aName + "' readonly style='border: 0;'>" + data[i][a] + "</textarea>";
                                        $($target[j]).html(strTextbox);
                                        autoTextarea($($target[j]).find('textarea')[0]);
                                    } else if (textStyle == 'MONEY') {
                                        $($target[j]).text(data[i][a + '_DX']);
                                    } else {
                                        $($target[j]).text(data[i][a]);
                                    }
                                } else if (dictStyle || treeStyle) {
                                    if (a == 'JYCS_GAJGMC') {
                                        $($target[j]).text(data[i][a]);
                                    } else {
                                        $($target[j]).text(data[i][a + '_DICTMC']);
                                    }
                                } else {
                                    $($target[j]).text(data[i][a]);
                                }
                            } else {
                                $($target[j]).text(data[i][a]);
                            }
                        }
                    }
                }
                break;
            }
        }

        //查看执法公开信息 点击事件
        $('#linkFlwsZfgk_' + bm).off('click').on('click', function () {
            zfgkDetail(zfgkxxData);
        });
    }
}

/**
 * 法律文书信息复用C2
 */
function flwsXxfyC2(bm) {
    var $target = $('#flws_cl_area_' + bm + ' form a');

    for (var j = 0; j < $target.length; j++) {
        $($target[j]).html('');
    }
}
/************************end*****************************/
/**
 * 清除所有可编辑的样式
 */
function clearAllStyle() {
    $('input').attr({"readonly": "readonly", 'disabled': 'disabled'});
}

/*************************************流程图***********************************/
/**
 * 流程图的显示
 * cqzt 等于1（已呈请）或2（已审批）
 */
function lctShow() {
    if (DATA.lcslid && DATA.lcdyid && DATA.lcslid !='undefined' && DATA.lcslid !='null' && DATA.lcdyid !='undefined' && DATA.lcdyid !='null') {
        $('#process_png').attr('src', pathConfig.basePath + '/config/findResourceAsStream?processDefinitionId=' + DATA.lcdyid);
        if (DATA.lczt == '0') {//流程中
            getLctCord(pathConfig.basePath + '/config/findProcessDefinitionByProcessInstanceId', 'processInstanceId', DATA.lcslid);//获取流程图坐标位置
        } else if (DATA.lczt == '1') {//流程已结束
            getLctCord(pathConfig.basePath + '/config/findProcessDefinitionById', 'id', DATA.lcdyid);//获取流程图坐标位置
        }
    }
}

/**
 * 获取流程图坐标信息
 * @param url
 * @param paramname
 * @param param
 */
function getLctCord(url, paramname, param) {
    var params = {};
    params[paramname] = param;

    $.ajax({
        url: url,
        data: params,
        dataType: 'json',
        success: function (data) {
            var box_data = data.activities;//数据
            var now_data = data.activatedActivities;//当前流程点
            var str = '';
            for (var i = 0; i < box_data.length; i++) {
                if (box_data[i].type == 'userTask') {
                    str += '<div class="process-box" id="' + box_data[i].id + '" style="' +
                        'width: ' + box_data[i].width + 'px;' +
                        'height: ' + box_data[i].height + 'px;' +
                        'top: ' + box_data[i].y + 'px;' +
                        'left: ' + box_data[i].x + 'px;' +
                        'line-height: ' + box_data[i].height + 'px;">' + box_data[i].name + '</div>';
                }
            }

            $('#mask_process').append(str);

            if (now_data.length > 0) {
                for (var j = 0; j < now_data.length; j++) {
                    $('#' + now_data[j].id).css('border-color', 'red');
                }
            }
            lcriZs();//流程日志的展示
        },
        error: function(e){
            alertDiv({
                title: '温馨提示',
                msg: '无法获取流程图坐标信息,请联系管理员!'
            });
            console.log('获取流程图坐标信息失败:' + e);
        }
    })
}

/**
 * 流程日志
 */
function lcriZs() {
    var str = '';
    var spzt = '';//审批状态
    $.ajax({
        url: pathConfig.basePath + '/workflowRelated/findGzlLcrz?lcslId=' + DATA.lcslid,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            //console.log('流程图展示数据:', json, DATA.lcslid);
            if (json.status == 'success') {

                $.ajax({
                    url: pathConfig.basePath + '/workflowRelated/findHxr?lcslId=' + DATA.lcslid,
                    type: 'post',
                    dataType: 'json',
                    success: function (json2) {
                        if (json2.status == 'success') {
                            var data = json.data;
                            var data2 = json2.data;
                            for (var i = 0; i < data.length; i++) {
                                //审批状态
                                if (data[i].shjl == '1') {
                                    spzt = '<i class="fa fa-check"></i>';
                                } else if (data[i].shjl == '2') {
                                    spzt = '<i class="fa fa-times"></i>';
                                } else if (data[i].shjl == '3') {
                                    spzt = '<i class="fa fa-reply"></i>';
                                }

                                str += '<div class="lct-node" title="' + data[i].shyj + '">' +
                                    '<div class="text">' +
                                    '<span class="lcspr">' + data[i].shrXm + '</span>' +
                                    '<span class="lcspzt">' + spzt +
                                    '</span>' +
                                    '</div>' +
                                    '<div class="point">' +
                                    '<b>' +
                                    '<div class="h-line"></div>' +
                                    '</b>' +
                                    '</div>' +
                                    '<div class="time">' +
                                    '<span>' + data[i].shsj + '</span>' +
                                    '</div>' +
                                    '</div>';
                            }

                            if (data2 && data2.username) {
                                str += '<div class="lct-node" title="待审批">' +
                                    '<div class="text">' +
                                    '<span class="lcspr">' + data2.username + '</span>' +
                                    '<span class="lcspzt"><i class="fa fa-map-marker" style="color:#ff0000;"></i>' +
                                    '</span>' +
                                    '</div>' +
                                    '<div class="point">' +
                                    '<b>';
                            }

                            $('.lct-container').append(str);
                            $('.lct-node').tooltip({position: 'bottom'});
                            if (!str) {//如果没有流程图，隐藏流程
                                $('.lct-box').hide();
                            }
                        }
                    }
                });

            } else {
                alertDiv({
                    title: '提示',
                    msg: json.message
                });
            }
        }
    })
}

/**
 * 执法公开详情
 * @param zfgkxx 执法公开信息
 */
function zfgkDetail(zfgkxx) {
    openDivForm({
        id: 'zfgk_info',
        title: '执法公开详情',
        width: 1000,
        height:520
    }, []);

    $("#zfgk_info textarea").val(zfgkxx);
}