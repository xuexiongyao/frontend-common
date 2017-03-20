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
 * 所有接口请求回调函数  全部ajax成功之后渲染数据
 */
function callbackForAllAjaxQuerySuccess() {
    // if (DATA.ajax.count == 0) {
    if (typeof (DATA.CQBG.cqbgZj) == 'undefined' || !DATA.CQBG.cqbgZj) {
        cqbgNrXxfy();//呈请报告内容接口请求信息复用
        cqbgFlwsOtherXxfy();//呈请报告、法律文书其他公共接口数据复用
        $('#loadingMskFlws').hide();
    }
    flwsLsCqbgNrXxfy();//法律文书中类呈请报告呈请内容的信息复用
    // }
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