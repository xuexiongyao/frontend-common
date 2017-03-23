/**
 * Created by christ on 2016/11/4.
 * description：法律文书公共接口请求js文件
 */
/*************呈请报告(法律文书)接口********************/

/**
 * 获取呈请报告、法律文书 公共数据 新增使用(需要修改)
 */
function getCqbgFlwsAllXxData(render) {
    // $('#loadingMskFlws').show();
    if (!DATA.publicJkXx) {
        DATA.ajax.count++;
        $.ajax({
            url: pathConfig.basePath + '/api/ajxx/cqbg_all_in_one/' + DATA.asjbh,
            type: 'get',
            async: true,
            success: function (data) {
                if (data) {
                    DATA.publicJkXx = data;//公共接口信息
                } else {
                    $.messager.show({
                        title: '提示',
                        msg: '获取信息为空',
                        icon: 'warning'
                    })
                }
                DATA.ajax.count--;
                render();
            },
            error: function () {
                console.log('获取呈请报告公共信息失败')
            }
        })
    } else {
        render();
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
 * 所有接口请求回调函数  全部ajax成功之后渲染数据
 */
function callbackForAllAjaxQuerySuccess() {
    if (DATA.ajax.count == 0) {
        if (typeof (DATA.CQBG.cqbgZj) == 'undefined' || !DATA.CQBG.cqbgZj) {
            cqbgNrXxfy();//呈请报告内容接口请求信息复用
            cqbgFlwsOtherXxfy();//呈请报告、法律文书其他公共接口数据复用
            $('#loadingMskFlws').hide();
        }
        flwsLsCqbgNrXxfy();//法律文书中类呈请报告呈请内容的信息复用
    }
}

/**
 * 呈请报告、法律文书 前后置关系请求接口
 */
function flwsQhzgxRequest() {
    DATA.ajax.count++;
    $.ajax({
        url: pathConfig.basePath + '/wenshu/source/RULE',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            DATA.ajax.count--;
            DATA.RULE = data;
            getCqbgFlwsAllXxData(callbackForAllAjaxQuerySuccess);
            getDxxxData(xydxRenderCqbg);
        }
    })
}

/**
 * 获取登录者信息
 */
function getLoginInfo() {
    DATA.ajax.count++;
    //获取登录者信息
    $.ajax({
        url: pathConfig.basePath + '/base/autotable/getUserInfo',
        dataType: 'json',
        type: 'post',
        success: function (data) {
            DATA.ajax.count--;
            DATA.OWN = data;
        }
    });
}