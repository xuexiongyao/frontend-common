/**
 * Created by christ on 2016/12/5.
 */

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
        $.ajax({
            url: DATA.CQBG.cqbgData.queryUrl,
            data: param,
            jsonType: 'json',
            success: function (data) {
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
                if (only) {//只能出一份文书
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
                    } else {
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
                    //获取法律文书数据请求
                    $.ajax({
                        url: flwsData[k].queryUrl,
                        data: param,
                        dataType: 'json',
                        success: function (json) {
                            //console.log(json)
                            if (json.state == 'success') {
                                var jsonRows = json.rows;
                                if (jsonRows.length > 0) {//有数据 执行编辑渲染
                                    DATA.FLWS[flwsData[k].bianMa].flwsRow = jsonRows;
                                    if (only) {
                                        //已经呈请的法律文书不能再改
                                        if (DATA.FLWS[flwsData[k].bianMa].flwsRow[0].CQZT == '1') {
                                            DATA.FLWS[flwsData[k].bianMa].status.disabled = true;
                                        }

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
 * 获取嫌疑对象信息(需要修改)
 */
function getDxxxData(render) {
    //有无呈请报告的判断
    if (DATA.CQBG == undefined || DATA.CQBG.cqbgData == undefined || DATA.CQBG.cqbgData.dxbm == undefined) {
        for (var key in DATA.FLWS.flwsData) {
            if (DATA.FLWS.flwsData[key].dxbm != undefined) {
                DATA.DX.dxbm = DATA.FLWS.flwsData[key].dxbm;
            }
            if (DATA.FLWS.flwsData[key].wdx != undefined) {
                DATA.DX.wdx = DATA.FLWS.flwsData[key].wdx;
            }
        }

    } else {
        if (DATA.CQBG.cqbgData.dxbm) {
            DATA.DX.dxbm = DATA.CQBG.cqbgData.dxbm;
        }
        if (DATA.CQBG.cqbgData.wdx) {
            DATA.DX.wdx = DATA.CQBG.cqbgData.wdx;
        }
    }
    if (DATA.DX.dxbm && !DATA.DX.wdx) {//有嫌疑对象
        $.ajax({
            url: pathConfig.basePath + '/api/dtbm/' + DATA.DX.dxbm + '/getByForeignKey/ASJBH/' + DATA.asjbh,
            type: 'get',
            success: function (json) {
                if (json) {
                    DATA.DX.xydxData = json;
                    DATA.DX.hasData = true;
                    for (var key in DATA.DX.xydxData) {
                        if (DATA.DX.xydxData[key] == undefined || DATA.DX.xydxData[key] == null) {
                            DATA.DX.xydxData[key] = [];
                        }
                        //嫌疑人前后置关系的判断
                        if (DATA.DX.xydxData[anjianXyDxDic.xyr] != undefined) {
                            var xyr_rsqzcsdm;
                            for (var i = 0; i < DATA.DX.xydxData[anjianXyDxDic.xyr].length; i++) {
                                var xyr = DATA.DX.xydxData[anjianXyDxDic.xyr][i];
                                if (xyr[flwsQhzgxXyrPz] == null || xyr[flwsQhzgxXyrPz] == 'null') {
                                    xyr_rsqzcsdm = '0000';
                                } else {
                                    xyr_rsqzcsdm = xyr[flwsQhzgxXyrPz];
                                }
                                var rule = DATA.RULE[xyr_rsqzcsdm];
                                var disabled = "";
                                var title = "";
                                if (typeof rule != 'undefined' || rule != undefined) {
                                    if (rule.iscontain) {//包含的不能做
                                        for (var z = 0; z < rule.item.length; z++) {
                                            if (DATA.CQBG.asjflwsdm == rule.item[z]) {
                                                disabled = "disabled ='disabled'";
                                                title = "title = '" + rule.message + "'";
                                                break;
                                            }
                                        }
                                    } else {//包含的能做
                                        disabled = "disabled='disabled'";
                                        title = "title = '" + rule.message + "'";
                                        for (var z = 0; z < rule.item.length; z++) {
                                            if (DATA.CQBG.asjflwsdm == rule.item[z]) {
                                                disabled = "";
                                                title = "";
                                            }
                                        }
                                    }
                                }
                                xyr.disabled = disabled;
                                xyr.title = title;
                            }
                        }
                    }
                }

                if (DATA.CQBG.cqbgData) {
                    if (DATA.CQBG.cqbgData.bx && !DATA.DX.hasData) {
                        loading('open', '必选嫌疑对象列表不能为空')
                    } else {
                        render();
                    }
                }
            }
        })
    } else {//无嫌疑对象
        xydxHide();
    }
}

/**
 * 呈请报告  保存函数
 * @param data
 */
function cqbgSaveComplete(data) {
    //loading('close');//完成后关闭...转圈
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
    //loading('close');//完成后关闭...转圈
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
 */
function scflwsRequest(params) {
    var cqbgzj = '';//呈请报告主键
    if(DATA.FLWS.cqbgZj && typeof (DATA.FLWS.cqbgZj) != 'undefined'){
        cqbgzj = DATA.FLWS.cqbgZj;
    } else if(DATA.CQBG.cqbgzj && typeof (DATA.CQBG.cqbgzj) != 'undefined'){
        cqbgzj = DATA.CQBG.cqbgzj;
    }

    $.ajax({
        url: pathConfig.basePath + '/workflowRelated/createXwFlwsscrwb?cqbgXxzjbh='+cqbgzj,
        data: params,
        success: function (data) {
            var json = eval('(' + data + ')');
            if (json.status == 'success') {
                $.messager.alert({
                    title: '提示',
                    msg: '生成法律文书成功',
                    fn: function () {
                        crossCloseTab();
                    }
                });
            } else if (json.status == 'error') {
                $.messager.alert({
                    title: '提示',
                    msg: '生成法律文书失败',
                    fn: function () {
                        crossCloseTab();
                    }
                });
            }
        }
    })
}