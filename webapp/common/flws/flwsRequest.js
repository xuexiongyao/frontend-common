/**
 * Created by christ on 2016/12/5.
 * description：法律文书请求js文件
 */

/**
 * 当字符串长度过大（string>5000）时，在本页面请求获取文书map结构数据
 * @param data  前一个页面传过来的map数据
 * @param cqbgBm  呈请报告的编码
 */
function wsMainPageRender(data,cqbgBm){
    if(typeof data == 'undefined' && typeof cqbgBm != 'undefined'){
        $.ajax({
            url: pathConfig.basePath + '/wenshu/source/CQBG_' + cqbgBm + '/DIC.json',
            success: function (json) {
                initFlwsMain(json);
            }
        })
    } else if(typeof data == 'string'){
        initFlwsMain(data);
    }
}

/**
 * 初始化文书主页面函数
 * @param data  前一个页面传过来的map数据
 */
function initFlwsMain(data){
    var jsonDatas = eval('(' + data + ')');//json化数据

    /**********规则引入***********/
    DATA.asjbh = pathObj.asjbh;//案事件编号
    if (pathObj.asjzcxwdm) {
        DATA.asjzcxwdm = pathObj.asjzcxwdm;//案事件侦查行为代码
    }

    //呈请报告、法律文书map数据的获取
    if (!jsonDatas.isFlws && !jsonDatas.bianMa.startsWith("000000")) {

        DATA.CQBG = {
            cqbgData: jsonDatas,//呈请报告数据
            asjflwsdm: jsonDatas.bianMa,//呈请报告编码(案事件法律文书代码)
            asjflwsmc: jsonDatas.name,//案事件法律文书名称
            status: {}
        };
        //法律文书必填及分组规则
        if(jsonDatas.btflws != undefined && jsonDatas.btflws){
            if((jsonDatas.btflws).indexOf('[')>-1 && (jsonDatas.btflws).indexOf(']')>-1){
                var btflwsRule = eval('('+jsonDatas.btflws+')');//处理
                if(typeof btflwsRule == 'object'){//【取保候审】
                    DATA.CQBG.btflwsRule = btflwsRule;
                }
            }
        }
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

        if(pathObj.flwsxxzjbh && typeof (pathObj.flwsxxzjbh) != 'undefined'){
            DATA.FLWS.cqbgZj = pathObj.flwsxxzjbh;//呈请报告主键
        }

        if(pathObj.flwsZj && typeof (pathObj.flwsZj) != 'undefined'){
            DATA.FLWS.cqFlwsZj = pathObj.flwsZj;//法律文书主键【针对呈请法律文书修改】
        }

        if(pathObj.ajmc && typeof (pathObj.ajmc) != 'undefined'){
            DATA.FLWS.ajmc = pathObj.ajmc;//案件名称【针对呈请法律文书修改】
        }

        if(pathObj.flwsdm && typeof (pathObj.flwsdm) != 'undefined'){
            DATA.FLWS.flwsdm = pathObj.flwsdm;//法律文书代码【针对呈请法律文书修改】
        }

        if(pathObj.flwsxgsqbZj && typeof (pathObj.flwsxgsqbZj) != 'undefined'){
            DATA.FLWS.flwsxgsqbZj = pathObj.flwsxgsqbZj;//法律文书修改申请表主键【针对呈请法律文书修改】
        }


        $("#sent").hide();
    }

    //页面初始化
    getCqbgFlwsHtmlPage();//获取呈请报告、法律文书页面

    $.when(flwsQhzgxRequest() , getCqbgFlwsAllXxData(), getDxxxData() , getLoginInfo()).done(function (r1,r2,r3,r4) {
        console.log(r1 +','+ r2 +','+ r3 +','+ r4);

        //获取呈请报告数据
        /***呈请报告***/
        if (typeof (DATA.CQBG.cqbgData) != 'undefined') {//有呈请报告
            queryCqbgData(cqbgPageRender);//页面渲染
        }else{//无呈请报告
            if(DATA.FLWS.flwsData.customer){//只有法律文书,并且需要生成法律文书
                onlyFlwsRender();
            }
        }

        xydxRenderCqbg();//呈请报告嫌疑对象列表的渲染;
        callbackForAllAjaxQuerySuccess();//呈请报告内容复用，其他公共信息复用

        loading('close');
    }).fail(function () {
        console.log("fail");
    });



    /***呈请报告****/
    replaceEnterForCqbg();//textarea框的处理

    // 页面操作
    tabSwitch();//tab切换

    //绑定送审事件
    $('#sent').off('click').on('click', function () {
        if (DATA.OWN || typeof (DATA.OWN) != 'undefined') {
            shongshen(DATA.OWN);
        }
    });
}


/**
 * 请求获取呈请报告数据，判断该数据是否存在，如果存在保存既修改，如果不存在，保存既新增
 * @param render 回调函数
 */
function queryCqbgData(render) {
    if (DATA.CQBG.cqbgData) {
        var one = DATA.CQBG.cqbgData.one;
        var param = {};
        if (one) {//只能出一份文书
            param = {
                ASJBH: DATA.asjbh,
                FLWS_ASJFLWSDM: DATA.CQBG.cqbgData.bianMa,
                XT_ZXBZ: '0'
            }
        } else {//出多份文书
            param = {
                CQZT: '0',
                ASJBH: DATA.asjbh,
                FLWS_ASJFLWSDM: DATA.CQBG.cqbgData.bianMa,
                XT_ZXBZ: '0'
            }
        }

        //获取呈请报告数据请求
        loading("open","正在获取呈请报告数据,请稍等...");
        $.ajax({
            url: DATA.CQBG.cqbgData.queryUrl,
            data: param,
            jsonType: 'json',
            success: function (data) {
                loading('close');
                var json = eval('(' + data + ')');
                if (json.state == 'success') {//查询成功
                    if (json.rows.length > 0) {//有数据 编辑
                        DATA.CQBG.cqbgRow = json.rows[0];
                        //one为true，整个案件只能出一份儿呈请报告；并且该呈请报告已经呈请，CQZT=='1'，就不能再做
                        if (one && DATA.CQBG.cqbgRow.CQZT == '1') {
                            DATA.CQBG.status.disabled = true;
                        }
                        //呈请报告状态hasDone为true，已经做过
                        DATA.CQBG.status.hasDone = true;

                        if (typeof(DATA.CQBG.cqbgRow.XXZJBH) == 'undefined') {
                            DATA.CQBG.cqbgZj = DATA.CQBG.cqbgRow.ZJ;
                        } else {
                            DATA.CQBG.cqbgZj = DATA.CQBG.cqbgRow.XXZJBH;
                        }
                    } else {//没有数据 新增
                        DATA.CQBG.cqbgRow = {};
                    }

                    render();//回调函数
                } else if (json.state == 'error') {//查询错误
                    // console.log('error');
                    $.messager.alert({
                        title: '温馨提示',
                        msg: json.msg,
                        fn: function () {
                            crossCloseTab();
                        }
                    });
                }
            }
        })
    }
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
                //法律文书必填及分组规则
                var btflwsRule =  DATA.CQBG.btflwsRule;
                if(btflwsRule!=undefined){
                    for(var z in btflwsRule){
                        if(btflwsRule[z].BM.indexOf(flwsData[k].bianMa)!=-1){
                            DATA.CQBG.btflwsRuleSelected=btflwsRule[z];
                            break;
                        }
                    }
                }
                //构造对象
                if (typeof (DATA.FLWS[flwsData[k].bianMa]) == 'undefined') {
                    DATA.FLWS[flwsData[k].bianMa] = {};
                }

                if (typeof (DATA.FLWS[flwsData[k].bianMa]['status']) == 'undefined') {
                    DATA.FLWS[flwsData[k].bianMa]['status'] = {};
                }

                DATA.FLWS[flwsData[k].bianMa].flwsData = flwsData[k];
                DATA.FLWS[flwsData[k].bianMa].params = {};

                var only = DATA.FLWS[flwsData[k].bianMa].flwsData.only;
                if(!jQuery.isEmptyObject(DATA.FLWS_PARAM)){
                    param = {
                        ZJ: DATA.FLWS_PARAM.flwsZj
                    }
                }else if (only) {//只能出一份文书
                    if(DATA.CQBG.cqbgZj){
                        param = {
                            XT_ZXBZ: '0',
                            ASJBH: DATA.asjbh,
                            CQBG_ZJ: DATA.CQBG.cqbgZj
                        }
                    }else{
                        param = {
                            XT_ZXBZ: '0',
                            ASJBH: DATA.asjbh
                        }
                    }
                } else {//出多份文书
                    if(DATA.CQBG.cqbgZj){
                        param = {
                            CQBG_ZJ: DATA.CQBG.cqbgZj,
                            XT_ZXBZ: '0',
                            ASJBH: DATA.asjbh
                        }
                    }else if(DATA.FLWS.cqbgZj){
                        param = {
                            CQBG_ZJ: DATA.FLWS.cqbgZj,
                            XT_ZXBZ: '0',
                            ASJBH: DATA.asjbh
                        }
                    }else if(DATA.FLWS[flwsData[k].bianMa].status.currentFlwsId){
                        param = {
                            ZJ: DATA.FLWS[flwsData[k].bianMa].status.currentFlwsId
                        }
                    }else if(DATA.FLWS.cqFlwsZj){//呈请法律文书修改
                        param = {
                            ZJ: DATA.FLWS.cqFlwsZj
                        }
                    }
                    else {
                        param = undefined;
                        DATA.FLWS[flwsData[k].bianMa].flwsRow = [];

                        //自定义页面无数据的处理
                        if (window["render" + flwsData[k].bianMa + "CustomizedPageForNone"]) {
                            eval("render" + flwsData[k].bianMa + "CustomizedPageForNone()");
                        }
                        render(flwsData[k].bianMa);
                    }
                }
                if(param){
                    loading("open","正在获取法律文书数据,请稍等...");
                    //获取法律文书数据请求
                    $.ajax({
                        url: flwsData[k].queryUrl,
                        data: param,
                        dataType: 'json',
                        success: function (json) {
                            //console.log(json)
                            loading("close");
                            if (json.state == 'success') {
                                var jsonRows = json.rows;
                                if (jsonRows.length > 0) {//有数据 执行编辑渲染
                                    DATA.FLWS[flwsData[k].bianMa].flwsRow = [];
                                    for(var i=0;i<jsonRows.length;i++){
                                        if(flwsData[k].bianMa == jsonRows[i].ASJFLWSDM){
                                            DATA.FLWS[flwsData[k].bianMa].flwsRow.push(jsonRows[i]);
                                        }
                                    }
                                    if (only) {
                                        //已经呈请的法律文书不能再改
                                        //if (DATA.FLWS[flwsData[k].bianMa].flwsRow[0].CQZT == '1') {
                                        //    DATA.FLWS[flwsData[k].bianMa].status.disabled = true;
                                        //}

                                        //法律文书跟呈请报告绑定
                                        for (var i = 0; i < jsonRows.length; i++) {
                                            if (jsonRows[i].CQZT == '0' && jsonRows[i].CQBG_ZJ == DATA.CQBG.cqbgZj) {
                                                DATA.FLWS[flwsData[k].bianMa].status.hasDone = true;
                                                break;
                                            }
                                        }
                                    } else {
                                        //无呈请报告，法律文书可以做多份儿，获取呈请报告主键
                                        if(DATA.CQBG.cqbgZj == undefined || DATA.FLWS.cqbgZj == undefined){
                                            DATA.CQBG.cqbgzj = jsonRows[0].CQBG_ZJ;
                                        }
                                        DATA.FLWS[flwsData[k].bianMa].status.hasDone = true;
                                    }

                                } else {//没有数据 执行新增渲染
                                    DATA.FLWS[flwsData[k].bianMa].flwsRow = [];

                                    //自定义页面无数据的处理
                                    if (window["render" + flwsData[k].bianMa + "CustomizedPageForNone"]) {
                                        eval("render" + flwsData[k].bianMa + "CustomizedPageForNone()");
                                    }
                                }

                                render(flwsData[k].bianMa);
                            } else if (json.state == 'error') {
                                console.log('error');
                            }
                        }
                    });
                }
                break;
            }
        }
    }
}

/**
 * 呈请报告  保存函数
 * @param data
 */
function cqbgSaveComplete(data) {
    loading('close');//完成后关闭...转圈
    if (data) {
        var json = eval('(' + data + ')');
        if (json.state == 'success') {
            if (DATA.CQBG.cqbgZj == undefined) {
                DATA.CQBG.cqbgZj = json.ID;
            }
            $.messager.show({
                title: '提示',
                msg: '呈请报告保存成功'
            });
        } else if (json.state == 'error') {
            $.messager.show({
                title: '提示',
                msg: '呈请报告保存失败'
            });
        }
    }
}
function cqbgSave(url, param) {
    if (DATA.CQBG.cqbgData.customized) {
        eval("save" + DATA.CQBG.cqbgData.bianMa + "CustomizedPage('" + url + "','" + JSON.stringify(param) + "','cqbgSaveComplete');");
    } else {
        loading("open","数据处理中...");
        $.ajax({
            url: url,
            data: param,
            success: function (data) {
                cqbgSaveComplete(data);
            }
        });
    }

}

function flwsSaveComplete(data, bm) {
    loading('close');//完成后关闭...转圈
    if (data) {
        var json = eval('(' + data + ')');
        if (json.state == 'success') {
            if (json.ID != undefined || json.ID) {
                DATA.FLWS[bm].status.currentFlwsId = json.ID;
                DATA.FLWS[bm].status.hasDone = true;

                //TODO 执法公开的单独处理(只针对行政案件)
                if (bm == 'X020003') {
                    DATA.FLWS[bm].status.zfgked = false;
                }
                queryFlwsData(DATA.FLWS.title, flwsPageRender);
            }
            $.messager.show({
                title: '提示',
                msg: '法律文书保存成功'
            });
        } else if (json.state == 'error') {
            $.messager.show({
                title: '提示',
                msg: '法律文书保存失败'
            });
        }
    }
}
/**
 * 法律文书  保存函数
 * @param url 保存url
 * @param param 参数
 * @param bm 编码
 */
function flwsSave(url, param, bm) {
    if (DATA.FLWS[bm].flwsData.customized) {
        eval("save" + bm + "CustomizedPage('" + url + "','" + JSON.stringify(param) + "','flwsSaveComplete', '" + bm + "');");
    } else {
        loading("open","数据处理中...");
        $.ajax({
            url: url,
            data: param,
            success: function (data) {
                flwsSaveComplete(data, bm);
            }
        });
    }

}

/**
 * 生成法律文书请求(需要修改)
 * @param params  请求参数
 */
function scflwsRequest(params) {
    var cqbgzj = '';//呈请报告主键
    if(DATA.FLWS.cqbgZj && typeof (DATA.FLWS.cqbgZj) != 'undefined'){
        cqbgzj = DATA.FLWS.cqbgZj;
    } else if(DATA.CQBG.cqbgzj && typeof (DATA.CQBG.cqbgzj) != 'undefined'){
        cqbgzj = DATA.CQBG.cqbgzj;
    }

    loading("open","数据处理中...");
    $.ajax({
        url: pathConfig.basePath + '/workflowRelated/createXwFlwsscrwb?cqbgXxzjbh='+cqbgzj,
        data: params,
        success: function (data) {
            loading('close');
            if(data){
                var json = eval('(' + data + ')');
                if (json.status == 'success') {
                    $.messager.alert({
                        title: '提示',
                        msg: '生成法律文书成功',
                        fn: function () {
                            crossCloseTab('refresh_table_list');
                        }
                    });
                } else if (json.status == 'error') {
                    $.messager.alert({
                        title: '提示',
                        msg: '生成法律文书失败',
                        fn: function () {
                            crossCloseTab('refresh_table_list');
                        }
                    });
                }
            }
        }
    })
}

/**
 * 呈请修改文书生成法律文书请求
 * @param params  请求参数
 */
function cqxgWsScflwsRequest(params){
    loading("open","数据处理中...");
    $.ajax({
        url: pathConfig.basePath + '/wenshu/source/FLWS/XGRW/COMPLETE',
        data: params,
        success: function (data) {
            loading('close');
            if(data){
                var json = eval('(' + data + ')');
                if (json.state == 'success') {
                    $.messager.alert({
                        title: '提示',
                        msg: '生成法律文书成功',
                        fn: function () {
                            crossCloseTab('refresh_cqflwstask');
                        }
                    });
                } else if (json.state == 'error') {
                    $.messager.alert({
                        title: '提示',
                        msg: '生成法律文书失败',
                        fn: function () {
                            crossCloseTab('refresh_cqflwstask');
                        }
                    });
                }
            }
        }
    })
}

/**
 *呈请移送案件报告书  保存数据
 */
function saveAjyjData(asjbh,jsdwGajgjgdm,jsdwGajgmc,cqbgZj){
    loading("open","数据处理中...");
    var param = {
        asjbh: asjbh,
        jsdw_gajgjgdm:jsdwGajgjgdm,
        jsdw_gajgmc: jsdwGajgmc,
        cqbg_zj:cqbgZj
    };

    $.ajax({
        url: pathConfig.basePath + '/api/ajxx/ajyj/save',
        data: param,
        success: function () {
            loading('close');
        }
    })
}