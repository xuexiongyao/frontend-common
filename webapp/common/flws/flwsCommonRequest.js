/**
 * Created by christ on 2016/11/4.
 * description：法律文书公共接口请求js文件
 */
/*************呈请报告(法律文书)接口********************/

/**
 * 获取呈请报告、法律文书 公共数据 新增使用(需要修改)
 */
function getCqbgFlwsAllXxData() {
    if (!DATA.publicJkXx) {
        var dfd = $.Deferred();
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
                dfd.resolve('获取文书公共信息成功');
            },
            error: function () {
                console.log('获取呈请报告公共信息失败')
            }
        });
        return dfd.promise();
    } else {
        cqbgFlwsOtherXxfy();
    }
}

/**
 * 获取嫌疑对象信息(需要修改)
 */
function getDxxxData() {
    //有无呈请报告的判断
    if (DATA.CQBG == undefined || DATA.CQBG.cqbgData == undefined || DATA.CQBG.cqbgData.dxbm == undefined) {//没有呈请报告
        for (var key in DATA.FLWS.flwsData) {
            if (DATA.FLWS.flwsData[key].dxbm != undefined) {
                DATA.DX.dxbm = DATA.FLWS.flwsData[key].dxbm;
            }
            if (DATA.FLWS.flwsData[key].wdx != undefined) {
                DATA.DX.wdx = DATA.FLWS.flwsData[key].wdx;
            }
        }

    } else {//有呈请报告
        if (DATA.CQBG.cqbgData.dxbm) {
            DATA.DX.dxbm = DATA.CQBG.cqbgData.dxbm;
        }
        if (DATA.CQBG.cqbgData.wdx) {
            DATA.DX.wdx = DATA.CQBG.cqbgData.wdx;
        }
    }

    if (DATA.DX.dxbm && !DATA.DX.wdx) {//有嫌疑对象
        var dfd = $.Deferred();
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

                            for (var i = 0; i < DATA.DX.xydxData[anjianXyDxDic.xyr].length; i++) {
                                var xyr_rsqzcsdm='',rule='';
                                var xyr = DATA.DX.xydxData[anjianXyDxDic.xyr][i];
                                //嫌疑人根据出生日期计算年龄
                                if(anjianXyDxDic.xyr == 'TB_ST_XYR'){//刑事案件犯罪嫌疑人
                                    if(xyr.fzxyr_csrq){
                                        xyr.fzxyr_nl = jsGetAge(xyr.fzxyr_csrq)+'岁';
                                    }
                                }
                                if(anjianXyDxDic.xyr == 'TB_ST_RY_WFXYRY'){//行政案件违法嫌疑人
                                    if(xyr.csrq){
                                        xyr.nl = jsGetAge(xyr.csrq)+'岁';
                                    }
                                }

                                if (xyr[flwsQhzgxXyrPz] == null || xyr[flwsQhzgxXyrPz] == 'null' || !xyr[flwsQhzgxXyrPz]) {
                                    xyr_rsqzcsdm='0';
                                } else {
                                    xyr_rsqzcsdm = xyr[flwsQhzgxXyrPz];
                                }

                                if(jQuery.isEmptyObject(DATA.RULE)){
                                    $.ajax({
                                        url: pathConfig.basePath + '/wenshu/source/RULE',
                                        dataType: 'json',
                                        type: 'get',
                                        async: false,
                                        success: function (data) {
                                            DATA.RULE = data;
                                        }
                                    });
                                }
                                rule = DATA.RULE[xyr_rsqzcsdm];

                                var disabled = "";
                                var title = "";
                                if (typeof rule != 'undefined' || rule != undefined||rule ) {
                                    if (rule.iscontain) {//包含的能做
                                        disabled = "disabled ='disabled'";
                                        title = "title = '" + rule.message + "'";
                                        for (var z = 0; z < rule.item.length; z++) {
                                            if (DATA.CQBG.asjflwsdm){//有呈请报告
                                                if (DATA.CQBG.asjflwsdm == rule.item[z].dm) {
                                                    if(rule.item[z].message ){
                                                        title = "title = '" + rule.item[z].message + "'";
                                                    }
                                                    disabled = "";
                                                    title = "";
                                                    break;
                                                }
                                            }else{//无呈请报告
                                                if (DATA.FLWS.flwsData.customer.bianMa == rule.item[z].dm) {
                                                    if(rule.item[z].message ){
                                                        title = "title = '" + rule.item[z].message + "'";
                                                    }
                                                    disabled = "";
                                                    title = "";
                                                    break;
                                                }
                                            }
                                        }
                                    } else {//包含的能做
                                        disabled = "";
                                        title = "";
                                        for (var z = 0; z < rule.item.length; z++) {
                                            if (DATA.CQBG.asjflwsdm) {//有呈请报告
                                                if (DATA.CQBG.asjflwsdm == rule.item[z].dm) {
                                                    if(rule.item[z].message ){
                                                        title = "title = '" + rule.item[z].message + "'";
                                                    }else{
                                                        title = "title = '" + rule.message + "'";
                                                    }
                                                    disabled = "disabled='disabled'";
                                                }
                                            }else{//无呈请报告
                                                if (DATA.FLWS.flwsData.customer.bianMa == rule.item[z].dm) {
                                                    if(rule.item[z].message ){
                                                        title = "title = '" + rule.item[z].message + "'";
                                                    }else{
                                                        title = "title = '" + rule.message + "'";
                                                    }
                                                    disabled = "disabled='disabled'";
                                                }
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
                    }
                }
                dfd.resolve('获取嫌疑对象列表成功');
            }
        });
        return dfd.promise();
    } else {//无嫌疑对象
        xydxHide();
    }
}

/**
 * 呈请报告、法律文书 前后置关系请求接口
 */
function flwsQhzgxRequest() {
    var dfd = $.Deferred();
    $.ajax({
        url: pathConfig.basePath + '/wenshu/source/RULE',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            DATA.RULE = data;

            dfd.resolve('获取前后置关系规则成功');
        }
    });
    return dfd.promise();
}

/**
 * 获取登录者信息
 */
function getLoginInfo() {
    //获取登录者信息
    var dfd = $.Deferred();
    $.ajax({
        url: pathConfig.basePath + '/base/autotable/getUserInfo',
        dataType: 'json',
        type: 'post',
        success: function (data) {
            DATA.OWN = data;

            dfd.resolve('获取登录者信息成功');
        }
    });
    return dfd.promise();
}


/**
 * 所有接口请求回调函数  全部ajax成功之后渲染数据
 */
function callbackForAllAjaxQuerySuccess() {
    if (typeof (DATA.CQBG.cqbgZj) == 'undefined' || !DATA.CQBG.cqbgZj) {
        cqbgNrXxfy();//呈请报告内容接口请求信息复用
    }

    flwsLsCqbgNrXxfy();//法律文书中类呈请报告呈请内容的信息复用
}
