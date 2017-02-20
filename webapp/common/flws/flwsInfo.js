/**
 * Created by christ on 2016/11/4.
 */

/**
 * 获取法律文书数据
 */
function getCqbgMapData(){
    $.ajax({
        url: pathConfig.basePath+'/wenshu/source/CQBG_'+DATA.flwsAsjflwsdm+'/DIC',
        success:function(json){
            var jsonDatas = eval('(' + json + ')');//json化数据
            //console.log(jsonDatas);
            //呈请报告、法律文书map数据的获取
            if (!jsonDatas.isFlws && !jsonDatas.bianMa.startsWith("000000")) {
                DATA.CQBG = {
                    cqbgData: jsonDatas,//呈请报告数据
                    asjflwsdm: jsonDatas.bianMa,//呈请报告编码(案事件法律文书代码)
                    asjflwsmc: jsonDatas.name,//案事件法律文书名称
                    status: {}
                }
            } else {
                DATA.CQBG = {
                    status: {}
                }
            }

            //有法律文书
            if (jsonDatas.childMap) {
                DATA.FLWS = {
                    flwsData: jsonDatas.childMap//法律文书数据
                }
            }


            getCqbgFlwsHtmlPage();//呈请报告(法律文书)iframe页面的获取

            //呈请报告数据查询
            if(DATA.CQBG.cqbgData){
                queryCqbgData();//获取呈请报告数据
            }

            lctShow();//流程图的显示

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
    if (cqbgData) {
        //呈请报告字符串
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
    if (flwsData) {
        //法律文书字符串
        for (var a in flwsData) {
            flwsstr = '<div class="flws-tabs-title" title="' + flwsData[a].name + '">' +
                '<div class="flws-main-con" id="flws_main_con_'+flwsData[a].bianMa+'">' +
                '</div>' +
                '</div>';
            $("#flwsTabs").append(flwsstr);
            flwsRightPageRender(flwsData[a]);
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
            XXZJBH: DATA.cqbgzj
        },
        dataType: 'json',
        success: function (json) {
            if (json.state == 'success') {//成功
                var data = json.rows[0];//呈请报告返回的数据
                //信息复用
                var $target = $("#cqbg_main_con form a");
                for (var a in data) {
                    if (a == 'CQNR') {//呈请内容单独处理
                        $('#cqbg_main_con form textarea').val(data[a]).prop('readonly', true);
                    } else {
                        for (var i = 0; i < $target.length; i++) {
                            var aName = $($target[i]).attr('name');//a标签的name属性
                            if (a == aName) {
                                $($target[i]).text(data[a]);
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
            loading('close');
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
    $('#flws_main_con_' + flwsData.bianMa).html('');//清空

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

    if(flwsData.wdx){//无嫌疑对象列表
        str ='<div class="flws-main-con-r"  id="flws_main_con_r_' + flwsData.bianMa + '"  style="width: 100%;">' +
            '<div class="flws-mode-right">' +
            '<div class="flws_cl_area" id="flws_cl_area_' + flwsData.bianMa + '" style="width: 100%;">' + iframecon + '</div>' +
            '</div>'+
            '</div>' ;
    }else{
        if(flwsData.dx && flwsData.only){
            str ='<div class="flws-main-con-r"  id="flws_main_con_r_' + flwsData.bianMa + '"  style="width: 100%;">' +
                '<div class="flws-mode-right">' +
                '<div class="flws_cl_area" id="flws_cl_area_' + flwsData.bianMa + '" style="width: 100%;">' + iframecon + '</div>' +
                '</div>'+
                '</div>' ;
        }else{
            str = '<div class="flws-main-con-l flws_xyr_area flws_xyr_area_add" id="flws_xyr_area_' + flwsData.bianMa + '">' +
                '</div>' +
                '<div class="flws-main-con-r"  id="flws_main_con_r_' + flwsData.bianMa + '">' +
                '<div class="flws-mode-right">' +
                '<div class="flws_cl_area" id="flws_cl_area_' + flwsData.bianMa + '">' + iframecon + '</div>' +
                '</div>'+
                '</div>' ;
        }

    }
    //console.log(str);
    $('#flws_main_con_' + flwsData.bianMa).append(str);
    setPage();//设置页面高度

    $('#flws_cl_area_' + flwsData.bianMa).css({height: '100%', width: '100%'}).tabs({
        plain: true, pill: true, border: false
    });
}


/**
 * 法律文书tab的切换
 */
function tabSwitch() {
    $("#flwsTabs").tabs({
        onSelect: function (title, index) {
            if (DATA.CQBG.cqbgData.bianMa != '000000') {//有呈请报告
                DATA.FLWS.title = title;
                queryFlwsData(title, flwsPageRender);
            } else {//没有呈请报告
                //TODO 无呈请报告的处理
            }
        }
    })
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

                //目前只能查看有呈请报告的法律文书，没有的还未设计 todo
                param = {
                    CQBG_ZJ: DATA.cqbgzj,
                    XT_ZXBZ: '0',
                    ASJBH: DATA.asjbh
                };
                if (DATA.FLWS[flwsData[k].bianMa] == undefined) {
                    DATA.FLWS[flwsData[k].bianMa] = {};
                }
                if (DATA.FLWS[flwsData[k].bianMa]['status'] == undefined) {
                    DATA.FLWS[flwsData[k].bianMa]['status'] = {};
                }

                DATA.FLWS[flwsData[k].bianMa].flwsData = flwsData[k];
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

                $.ajax({
                    url: flwsData[k].queryUrl,
                    data: param,
                    dataType: 'json',
                    success: function (json) {
                        //console.log(json)
                        if (json.state == 'success') {
                            if (json.rows != undefined && json.rows.length > 0) {//有数据 执行编辑渲染
                                DATA.FLWS[flwsData[k].bianMa].flwsRow = json.rows;

                            } else {//没有数据 执行新增渲染
                                DATA.FLWS[flwsData[k].bianMa].flwsRow = [];
                            }

                            render(flwsData[k].bianMa);
                        } else if (json.state == 'error') {
                            console.log('error');
                        }
                    }
                });
                break;
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
    var flwsRow = DATA.FLWS[bm].flwsRow;

    if(flwsData.wdx){//无嫌疑人对象
        xydxListRenderB(bm);
    }else{//有嫌疑对象
        if(flwsData.dx && flwsData.only){//嫌疑对象列表多选，且一个呈请报告下只能出一份儿法律文书
            xydxListRenderC(bm);
        }else{
            xydxListRenderA(flwsRow,bm);
        }
    }

    //针对自定义页面
    if (flwsData.customized) {
        eval("render" + flwsData.bianMa + "CustomizedPage('" + JSON.stringify(DATA.FLWS[flwsData.bianMa].flwsRow[0]) + "')");
    }
}

/**
 * 嫌疑对象列表的渲染 有嫌疑人对象
 * wdx:false dx:false one：false
 * @param flwsRow
 * @param bm
 */
function xydxListRenderA(flwsRow,bm) {
    //拼接选嫌疑人
    var checkedXyrStr = '',xyrstr = '';//嫌疑人列表字符串
    var xyrCldxlb;//嫌疑人处理对象类别
    $('#flws_xyr_area_'+bm).html('');

    var data = flwsRow;
    if(data.length > 0){
        for(var i= 0;i<data.length;i++){
            if(data[0].CLDXLB){
                xyrCldxlb = data[0].CLDXLB;
                for(var k in xyrObj){
                    if(xyrCldxlb == xyrObj[k].cldxlb)
                        xyrstr += '<li><label xxzjbh="'+data[i].CLDX_XXZJBH+'"><span>' + data[i][(xyrObj[k].param).toUpperCase()] + '</span></label></li>';
                }
            }
        }

        for(var k2 in xyrObj){
            if(xyrCldxlb == xyrObj[k2].cldxlb){
                checkedXyrStr = '<div><p><i class="fa fa-bars"></i>'+xyrObj[k2].text+'</p>' +
                    '<ul class="choose-list chooseXyr">'+xyrstr+'</ul></div>';
            }
        }
    }else{//无数据
        checkedXyrStr = '<div><p><i class="fa fa-bars"></i>嫌疑对象列表</p>' +
        '<ul class="choose-list chooseXyr">'+xyrstr+'</ul></div>';
    }

    $('#flws_xyr_area_'+bm).css('background','#f5f5f5').append(checkedXyrStr);

    //绑定点击事件
    if(data.length > 0){
        $('#flws_xyr_area_'+bm+' div li label').off('click').on('click', function () {
            flwsXxfyA1(bm,$(this));
        })
    }else{
        flwsXxfyA2(bm);
    }
}

/**
 * 嫌疑对象列表的渲染 无嫌疑人对象
 * wdx:true
 * @param bm
 */
function xydxListRenderB(bm){
    flwsXxfyB(bm);
}

/**
 * 嫌疑对象列表的渲染 有嫌疑人对象
 * dx:true only:true
 * @param bm
 */
function xydxListRenderC(bm){
    flwsXxfyC(bm);
}

/**
 * 法律文书信息复用A1
 */
function flwsXxfyA1(bm,$this){
    var xxzjbh = $this.attr('xxzjbh');
    var $target = $('#flws_cl_area_' + bm + ' form a');

    //状态切换
    $this.parent().addClass('active');
    $this.parent().siblings().removeClass('active');

    var data = DATA.FLWS[bm].flwsRow;
    if(data){
        for(var i=0;i<data.length;i++){
           if(xxzjbh == data[i].CLDX_XXZJBH){
               for(var j=0;j<$target.length;j++){
                   var aName = $($target[j]).attr('name');//a标签的name属性
                   var annotation = $($target[j]).attr('annotation');//a标签的annotation属性
                   $($target[j]).html('');
                   for(var a in data[i]){
                       if (a == aName) {
                           if(annotation){//日期的处理
                               var textStyle = annotation.substring(annotation.indexOf('<')+1,annotation.indexOf('>'));
                               var dictStyle = annotation.substring(annotation.indexOf('{')+1,annotation.indexOf('}'));
                               var treeStyle = annotation.substring(annotation.indexOf('%')+1,annotation.lastIndexOf('%'));
                               var isEdit = annotation.substring(annotation.indexOf('/')+1,annotation.lastIndexOf('/'));
                               if(textStyle && !isEdit){
                                   if(textStyle == 'DATE'){//2016年12月28日
                                       var val = data[i][a + '_MASTER'];
                                       var array = val.split('-');
                                       var newVal ='';

                                       for(var m=0;m<array.length;m++){
                                           newVal = array[0]+'年'+array[1]+'月'+array[2]+'日';
                                       }
                                       $($target[j]).text(newVal);
                                   }else if(textStyle == 'DATE_CN'){
                                       $($target[j]).text(data[i][a]);
                                   }else{
                                       $($target[j]).text(data[i][a]);
                                   }
                               }else if(dictStyle || treeStyle){
                                       $($target[j]).text(data[i][a + '_DICTMC']);
                               }else{
                                   $($target[j]).text(data[i][a]);
                               }
                           }else{
                               $($target[j]).text(data[i][a]);
                           }
                       }
                   }
               }
           }
        }
    }
}

/**
 * 法律文书信息复用A2
 */
function flwsXxfyA2(bm){
    var $target = $('#flws_cl_area_' + bm + ' form a');

    for(var j=0;j<$target.length;j++){
        $($target[j]).html('');
    }
}

/**
 * 法律文书信息复用B
 */
function flwsXxfyB(bm){
    var data = DATA.FLWS[bm].flwsRow[0];
    var $target = $('#flws_cl_area_' + bm + ' form a');

    for(var j=0;j<$target.length;j++){
        var aName = $($target[j]).attr('name');//a标签的name属性
        var annotation = $($target[j]).attr('annotation');//a标签的annotation属性
        $($target[j]).html('');
        for(var k in data){
            if(k == aName){
                if(annotation){//日期的处理
                    var textStyle = annotation.substring(annotation.indexOf('<')+1,annotation.indexOf('>'));
                    var dictStyle = annotation.substring(annotation.indexOf('{')+1,annotation.indexOf('}'));
                    var treeStyle = annotation.substring(annotation.indexOf('%')+1,annotation.lastIndexOf('%'));
                    var isEdit = annotation.substring(annotation.indexOf('/')+1,annotation.lastIndexOf('/'));
                    if(textStyle && !isEdit){
                        if(textStyle == 'DATE'){//2016年12月28日
                            var val = data[k + '_MASTER'];
                            var array = val.split('-');
                            var newVal ='';

                            for(var m=0;m<array.length;m++){
                                newVal = array[0]+'年'+array[1]+'月'+array[2]+'日';
                            }
                            $($target[j]).text(newVal);
                        }else if(textStyle == 'DATE_CN'){
                            $($target[j]).text(data[k]);
                        }
                    }else if(dictStyle || treeStyle){
                        $($target[j]).text(data[k + '_DICTMC']);
                    }else{
                        $($target[j]).text(data[k]);
                    }
                }else{
                }
            }
        }
    }
}

/**
 * 法律文书信息复用C
 */
function flwsXxfyC(bm){
    var data = DATA.FLWS[bm].flwsRow[0];
    var $target = $('#flws_cl_area_' + bm + ' form a');

    for(var j=0;j<$target.length;j++){
        var aName = $($target[j]).attr('name');//a标签的name属性
        var annotation = $($target[j]).attr('annotation');//a标签的annotation属性
        for(var k in data){
            if(k == aName){
                if(annotation){
                    var textStyle = annotation.substring(annotation.indexOf('<')+1,annotation.indexOf('>'));
                    var dictStyle = annotation.substring(annotation.indexOf('{')+1,annotation.indexOf('}'));
                    var treeStyle = annotation.substring(annotation.indexOf('%')+1,annotation.lastIndexOf('%'));
                    var isEdit = annotation.substring(annotation.indexOf('/')+1,annotation.lastIndexOf('/'));
                    if(textStyle && isEdit){//日期的处理
                        if(textStyle == 'DATE'){//2016年12月28日
                            var val = data[k + '_MASTER'];
                            var array = val.split('-');
                            var newVal ='';

                            for(var m=0;m<array.length;m++){
                                newVal = array[0]+'年'+array[1]+'月'+array[2]+'日';
                            }
                            $($target[j]).text(newVal);
                        }else if(textStyle == 'DATE_CN'){
                            $($target[j]).text(data[k]);
                        }else if(textStyle == 'TEXTBOX'){//换行文本框
                            var str = '<textarea readonly="readonly" style="text-align: start;hyphenate: auto;font-family: 仿宋_GB2312;font-size: 16pt;letter-spacing: 0;min-height: 500px;"></textarea>';
                            $($target[j]).html(str);
                            $($target[j]).find('textarea').val(data[k]);
                        }else{
                            $($target[j]).text(data[k]);
                        }
                    }else if(dictStyle || treeStyle){
                        $($target[j]).text(data[k + '_DICTMC']);
                    }else{
                        $($target[j]).text(data[k]);
                    }
                }else{
                    $($target[j]).text(data[k]);
                }
            }
        }
    }
}


/*************************************流程图***********************************/
/**
 * 流程图的显示
 * cqzt 等于1（已呈请）或2（已审批）
 */
function lctShow() {
    if (DATA.cqzt != 0 && DATA.cqzt) {
        if (DATA.lcslid && DATA.lcdyid) {
            $('#process_png').attr('src',pathConfig.basePath + '/manager/findResourceAsStream?processDefinitionId=' + DATA.lcdyid);
            $('#png_process').show();
            if (DATA.cqzt == '1') {//已呈请
                getLctCord(pathConfig.basePath + '/manager/findProcessDefinitionByProcessInstanceId', 'processInstanceId', DATA.lcslid);//获取流程图坐标位置
            } else if (DATA.cqzt == '2') {//已送审
                getLctCord(pathConfig.basePath + '/manager/findProcessDefinitionById', 'id', DATA.lcdyid);//获取流程图坐标位置
            }
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
        url: pathConfig.basePath + '/workflowRelated/findGzlLcrz?DATA.lcslid=' + DATA.lcslid,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            //console.log('流程图展示数据:', json, DATA.lcslid);
            if (json.status == 'success') {
                var data = json.data;
                for (var i = 0; i < data.length; i++) {
                    //审批状态
                    if (data[i].shjl == '1') {
                        spzt = '<i class="fa fa-check"></i>';
                    } else if (data[i].shjl == '2') {
                        spzt = '<i class="fa fa-times"></i>';
                    } else if (data[i].shjl == '3') {
                        spzt = '<i class="fa fa-reply"></i>';
                    }

                    str += '<div class="lct-node">' +
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

                $('.lct-container').append(str);
                if(!str){//如果没有流程图，隐藏流程
                    $('.lct-box').hide();
                }
            } else {
                $.messager.alert({
                    title: '提示',
                    msg: json.message
                });
            }
        }
    })
}
