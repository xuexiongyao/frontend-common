/**
 * Created by christ on 2017/3/27.
 * description：文书送审js
 */

var pathObj = getParamLinkUrl();
var taskId = pathObj.id;    //rwid
var name = pathObj.name;    //rwmc
var businessKey = pathObj.businessKey;
var processInstanceId = pathObj.processInstanceId;
var asjzcxwlbdm = pathObj.asjzcxwlbdm;
var asjflwsdm = pathObj.asjflwsdm;
var dxmc = pathObj.dxmc;
var flwsmc = pathObj.flwsmc;
var cjsj = pathObj.cjsj;
var asjbh = pathObj.asjbh;
var ajmc = pathObj.ajmc;
var badwGajgmc = pathObj.badwGajgmc;
var fjrid = pathObj.fjrid;
var fjrxm = pathObj.fjrxm;
var lcslId = pathObj.lcslId;
var hxshyjbzCurrent = null;  //当前回写审核意见标识
var candidateUsers;
var flagText = null;
var isFinally = false;
var backInitial = {};
var backPrev = {};
var ajaxUrl = pathConfig.basePath + '/workflowRelated';
var isLastTask = true;
var isOver = false;
var sessionBean = getSessionBean();             //获取登陆者信息
var role = sessionBean.userOrgBiztype || '04';  //登陆角色 02为法制民警
var flwsinfoaram = 'asjbh=' + asjbh + '&flwsxxzjbh=' + businessKey + '&flwsAsjflwsdm=' + asjflwsdm + '&pageType=info';

//【注意】 原来引用的是flwsInfo.html,签章审批后使用flwsInfo2.html
//var str = '<iframe src="' + pathConfig.basePath + '/html/flws/flwsInfo.html?' + flwsinfoaram + '" frameborder="0" style="width: 1168px;min-height: 800px;padding:0 15px;overflow-x: hidden;overflow-y:auto"></iframe>';

var str = '<iframe src="' + pathConfig.basePath + '/html/flws/flwsInfo2.html?' + flwsinfoaram + '" frameborder="0" style="width: 1168px;min-height: 800px;padding:0 15px;overflow-x: hidden;overflow-y:auto"></iframe>';
$('.right-report').append(str);

$(function () {
    clickShowPanel();
    selectApprove('1');         //选择审批人
    getNext();                  //下一环节状态
    getCurrent();               //当前环节
    saveAndSsShyj();            //保存并送审
    getPrevAndOri();            //获取上一节点数据和初始节点数据
    lctShow();                  //流程图展示接口
    linkToJz();                 //跳转到卷宗页面
});

//获取下一节点数据
function getNext() {
    $.ajax({
        url: ajaxUrl + '/findNextTasks?&processInstanceId=' + processInstanceId + '&name=' + name,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            if (json.status == 'success') {
                var data = json.data;
                if (data.length) {
                    isLastTask = false;
                    $('#next_link_area').show();
                    for (var i = 0; i < data.length; i++) {
                        var data_i = data[i];
                        var html = '<label><input type="radio" jdId="' + data_i.jdId + '" name="link">' + data_i.jdmc + '</label>';
                        $('#links').append(html);
                    }
                    //$('#links input').off('click').on('click',function(e){
                    //    var _name = $(this).parent().text();
                    //    $.ajax({
                    //        url: ajaxUrl + '/findTaskCandidateUsers?processInstanceId=' + processInstanceId + '&name=' + _name,
                    //        type: 'post',
                    //        dataType: 'json',
                    //        success: function (json) {
                    //            var treeJson = eval('(' + json['data']['treeJson'] + ')');
                    //            var data = null;
                    //            if (json['data'].yyzlx == 'O') {
                    //                data = treeJson[0]['children'];
                    //            } else {
                    //                data = treeJson;
                    //            }
                    //            for (var i = 0; i < data.length; i++) {
                    //                var data_i = data[i];
                    //                if (data_i.nodeType == 'user') {
                    //                    var htmlLabel = '<label><input type="checkbox" bizID="' + data_i.bizID + '">' + data_i.text + '</label>';
                    //                    $('#role_name').append(htmlLabel)
                    //                }
                    //            }
                    //        },
                    //        error:function(){
                    //            console.log("ajax error");
                    //        }
                    //    });
                    //});

                    $('#links input')[0].checked = true;
                } else {
                    isLastTask = true;
                    isFinally = true;
                    $('#next_over').show();
                    $('#next_link_area').hide();
                }
            } else {
                isLastTask = true;
                alertDiv({
                    top: 120,
                    title: '获取下一环节出错',
                    msg: json.message
                });
            }
        }
    });
}

//获取当前环节
function getCurrent() {
    loading('open','正在获取当前环节信息,请稍候...');
    $.ajax({
        url: ajaxUrl + '/findCurrentTask?&processInstanceId=' + processInstanceId + '&name=' + name,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            loading('close');
            if (json.status == 'success') {
                var data = json.data;
                if (data.length) {
                    //保存 当前回写审核意见标识
                    hxshyjbzCurrent = data[0].hxshyjbz;
                }
            } else {
                alertDiv({
                    title: '获取当前环节出错',
                    msg: json.message
                });
            }
        }
    });
}

//获取上一节点数据和初始节点数据
function getPrevAndOri() {
    //1.获取上一节点
    loading('open', '正在获取上一节点信息,请稍候...');
    $.ajax({
        url: ajaxUrl + '/findPreviousTask?processInstanceId=' + processInstanceId + '&name=' + name,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            console.log('上一节点信息', json);
            loading('close');
            var data = json.data;
            var dataLen = data.length;
            //选择审核意见
            $('#shjl').combobox({
                onSelect: function (n, o) {
                    selectApprove(n.id);
                }
            });

            //处理是否显示退回
            if (!dataLen) {
                var dictData = [
                    {"id": "1", "text": "同意", "py": "", "wb": ""},
                    {"id": "2", "text": "不同意", "py": "", "wb": ""}
                ];
                $('#shjl').combobox('loadData', dictData);
            } else {
                $('#shjl').combobox({
                    url: pathConfig.mainPath + '/common/dict/BD_D_SPJG.js'
                });
                var csjd = data[0]['csjd'];
                var jdId = data[0]['jdId'];
                var jdmc = data[0]['jdmc'];
                var hxshyjbzPrev = data[0]['hxshyjbz'];
                backPrev.csjd = csjd;
                backPrev.jdid = jdId;
                backPrev.jdmc = jdmc;
                backPrev.hxshyjbz = hxshyjbzPrev;
            }

            //2.取初始节点
            loading('open', '正在获取初始节点信息,请稍候...');
            $.ajax({
                url: ajaxUrl + '/findInitialTask?processInstanceId=' + processInstanceId + '&name=' + name,
                type: 'post',
                dataType: 'json',
                success: function (json) {
                    loading('close');
                    var data = json.data;
                    var csjd = data[0]['csjd'];
                    var jdId = data[0]['jdId'];
                    var jdmc = data[0]['jdmc'];
                    var hxshyjbzOri = data[0]['hxshyjbz'];
                    backInitial.csjd = csjd;
                    backInitial.jdid = jdId;
                    backInitial.jdmc = jdmc;
                    backInitial.hxshyjbz = hxshyjbzOri;
                }
            });
        }
    });
}

//【选择】审批人 ， 选择审核意见
function selectApprove(shjl) {
    /****选择审核结论,的处理方式****/
        //同意
    $('#next_link_area,#next_over').hide();
    $('#over_area').hide();
    if (shjl == '1') {
        if (isFinally) {
            $('#next_select_title').text('下一环节：结束');
            $('#next_link_area').show();
            $('#select_approve').hide();
        } else {
            $('#next_select_title').text('下一环节及审批人');
            $('#next_link_area').show();
            $('#select_approve').show();
        }
    }
    //不同意
    else if (shjl == '2') {
        if (role == '02') {
            //alert('法制员的情况!');
            $('#next_select_title').text('选择处理方式');
            $('#over_area').show();
            $('#next_link_area').show();
            $('#select_approve').show();
        } else {
            $('#next_over').show();
            $('#select_approve').hide();
        }
    }
    //退回
    else if (shjl == '3') {
        $('#next_select_title').text('请选择退回的状态');
        $('#next_link_area').show();
        $('#select_approve').show();
    }
    /*****END*****/

        //点击【选择】按钮
    $('#select_approve').off('click').on('click', function () {
        var $report = $('.right-report');
        $report.css('visibility','hidden');
        //同意,不同意
        if (shjl == '1' || shjl == '2') {
            $('#next_link').show();
            loading('open', '正在获取审批人信息...');
            $.ajax({
                url: ajaxUrl + '/findTaskCandidateUsers?taskId=' + taskId + '&processInstanceId=' + processInstanceId + '&name=' + name,
                type: 'post',
                dataType: 'json',
                success: function (json) {
                    var treeJson = eval('(' + json['data']['treeJson'] + ')');
                    var data = null;
                    if (json['data'].yyzlx == 'O') {
                        data = treeJson[0]['children'];
                    } else {
                        data = treeJson;
                    }
                    $('#role_name').empty();
                    for (var i = 0; i < data.length; i++) {
                        var data_i = data[i];
                        if (data_i.nodeType == 'user') {
                            var htmlLabel = '<label><input type="checkbox" bizID="' + data_i.bizID + '">' + data_i.text + '</label>';
                            $('#role_name').append(htmlLabel)
                        }
                    }
                    loading('close');
                    openDivForm({
                        top:120,
                        id: 'next_link_panel', //页面上div的id,将div设置为display:none,在div中设置好form属性,自动提交第一个form
                        title: '选择环节及审批人',
                        width: 540,
                        onClose: function(){
                            $report.css('visibility','visible');
                        }
                    }, [                       //以下为按钮添加配置,不传值为默认,传递[]时,清除所有按钮
                        {
                            text: '确定',
                            handler: function () {
                                isOver = $('#over_area input').prop('checked');
                                flagText = $('#links input:checked').parent().text();
                                if (!isOver) {
                                    var candidateUsersArr = [];
                                    $('#role_name input:checked').each(function () {
                                        candidateUsersArr.push($(this).attr('bizID'));
                                    });
                                    candidateUsers = candidateUsersArr.join(',');
                                    if (candidateUsers) {
                                        $('#next_link_panel').dialog('close');
                                        $.messager.show({
                                            title: '提示',
                                            msg: '审批人选择成功!'
                                        });
                                    } else {
                                        alertDiv({
                                            title: '提示',
                                            msg: '请选择审批人!'
                                        });
                                    }
                                } else {
                                    $('#next_link_panel').dialog('close');
                                }
                                //console.log(isOver,candidateUsers);
                            }
                        }, {
                            text: '关闭',
                            handler: function () {
                                $('#next_link_panel').dialog('close');
                            }
                        }
                    ]);
                    //选择结束的处理方式
                    //结束
                    $('#over_area input').off('click').on('click', function () {
                        var isCheck = $(this).prop('checked');
                        if (isCheck) {
                            $('#role_name input').prop('checked', false);
                            $('#role_name').parent().hide();
                            $('#next_link_panel').dialog();
                        }
                    });

                    //下一节
                    $('#links input').off('click').on('click', function () {
                        var isCheck = $(this).prop('checked');
                        if (isCheck) {
                            $('#role_name').parent().show();
                        }
                    });
                }
            });
        }
        //退回
        else if (shjl == '3') {
            $('#next_link').hide();
            $('#role_name').empty();
            var htmlLabel = '<label><input type="radio" value="initial" checked name="back">退回审批人(初始节点)</label>';
            htmlLabel += '<label><input type="radio" value="prev" name="back">退回上一级</label>';
            $('#role_name').append(htmlLabel);
            openDivForm({
                id: 'next_link_panel', //页面上div的id,将div设置为display:none,在div中设置好form属性,自动提交第一个form
                title: '退回选项',
                width: 300
            }, [                     //以下为按钮添加配置,不传值为默认,传递[]时,清除所有按钮
                {
                    text: '确定',
                    handler: function () {
                        var val = $('#role_name input:checked').val();
                        var backObj;
                        //alert('退回状态:'+val);
                        if (val == 'initial') {
                            backObj = backInitial;
                        } else if (val == 'prev') {
                            backObj = backPrev;
                        }
                        saveAndSsShyj(backObj);
                        $('#next_link_panel').dialog('close');
                    }
                }, {
                    text: '关闭',
                    handler: function () {
                        $('#next_link_panel').dialog('close');
                    }
                }
            ]);
        }
    });
}

/**
 * 获取审核时间日期最小值（minDate）
 */
function minDateFun(prevDate) {
    var nowDate = getCurrentTime();
    var isTrue = compareTime(prevDate, nowDate, 3);//时间是否超过三天
    return isTrue;
}


//【保存并送审】审核意见
function saveAndSsShyj(backObj) {
    //注册保存按钮事件,保存审核意见
    $('#saveAndss').off('click').on('click', function () {
        var $report = $('.right-report')
        $report.css('visibility','hidden');
        var shjl = $('#shjl').val();
        var shsj = $('#shsj').val();
        var shyj = $('#shyj').val();
        if (!shjl) {
            alertDiv({
                title: '温馨提示',
                msg: '请选择审核结论!',
                fn: function () {
                    $report.css('visibility','visible');
                    $('#shjl').focus();
                }
            });
            return false;
        }
        if (!shsj) {

            alertDiv({
                title: '温馨提示',
                msg: '请选择审核时间!',
                fn: function () {
                    $report.css('visibility','visible');
                    $('#shsj').focus();
                }
            });
            return false;
        }
        if (!shyj) {
            alertDiv({
                title: '温馨提示',
                msg: '请填写审核意见!',
                fn: function () {
                    $report.css('visibility','visible');
                    $('#shyj').focus();
                }
            });
            return false;
        }

        //同意

        if (shjl == '1') {
            console.log('是否最后一级isFinally:',isFinally);
            if(!isFinally && !candidateUsers){
                alertDiv({
                    title: '提示',
                    msg: '请选择下一环节及审批人!',
                    fn: function(){
                        $report.css('visibility','visible');
                    }
                });
            }else{
                var wclc = function(){
                    //获取选择的审批人
                    if (isFinally) {    //最后一级没有审批人
                        candidateUsers = '';
                        complete(shjl, shsj, shyj);
                    }
                    else if (candidateUsers) {
                        complete(shjl, shsj, shyj);
                    }
                };
                //执行签章
                if(hxshyjbzCurrent == '1' || hxshyjbzCurrent == '2' || hxshyjbzCurrent == '3'){
                    //签章送审
                    /*
                    alertDiv({
                        title: '温馨提示',
                        msg: '立即执行签章送审流程,请耐心等待...',
                        fn: function(){
                            $report.css('visibility','visible');
                            window.frames[0].yjqz(shyj,hxshyjbzCurrent,shsj,wclc);
                        }
                    });
                    */
                    //选择签章还是送审
                    $.messager.confirm({
                        title: '签章提示',
                        msg: '是否签章送审',
                        ok: '签章送审',
                        cancel: '直接送审',
                        closeable: false,
                        fn: function(r){
                            if(r){
                                $report.css('visibility','visible');
                                window.frames[0].yjqz(shyj,hxshyjbzCurrent,shsj,wclc);
                            }else{
                                wclc(); //完成流程
                            }
                        }
                    });

                }else{
                    wclc(); //完成流程
                }
            }
        }
        //不同意
        else if (shjl == '2') {
            //console.log(isOver,role);
            //直接结束
            if (isOver || role != '02') {
                end(shjl, shsj, shyj);
            } else {
                //法制民警,选择人员
                if (candidateUsers) {
                    complete(shjl, shsj, shyj);
                    //console.log('不同意,但是选择审批人:',candidateUsers);
                } else {
                    alertDiv({
                        title: '提示',
                        msg: '请选择处理方式'
                    });
                }
            }
        }
        //退回
        else if (shjl == '3') {
            if (backObj) {
                var jdId = backObj.jdid;
                var jdmc = backObj.jdmc;
                var csjd = backObj.csjd;
                var hxshyjbzBack = backObj.hxshyjbz;
                var UsersStr = '';
                $.ajax({
                    url: ajaxUrl + '/findBamjids?businessKey=' + businessKey + '&asjbh=' + asjbh + '&asjflwsdm=' + asjflwsdm,
                    type: 'post',
                    async: false,
                    dataType: 'json',
                    success: function (json) {
                        UsersStr = json.data;
                        // console.log('UsersStr:', json);
                    }
                });
                var candidateUsersStr = (csjd == '1' ? UsersStr : '');
                var param = 'shyj=' + shyj;
                param += '&shsj=' + shsj;
                param += '&shjl=' + shjl;
                param += '&fjrid=' + fjrid;
                param += '&fjrxm=' + fjrxm;
                param += '&candidateUsers=' + candidateUsersStr;
                param += '&destName=' + jdmc;
                param += '&sourceName=' + name;
                param += '&processInstanceId=' + processInstanceId;
                param += '&taskId=' + taskId;
                param += '&activityId=' + jdId;
                param += '&csjd=' + csjd;
                param += '&hxshyjbz=' + hxshyjbzBack;
                param += '&businessKey=' + businessKey;
                param += '&asjbh=' + asjbh;
                param += '&asjflwsdm=' + asjflwsdm;
                loading('open', '正在执行退回操作,请稍候...');
                $.ajax({
                    url: ajaxUrl + '/jump?' + param,
                    type: 'post',
                    dataType: 'json',
                    success: function (json) {
                        loading('close');
                        alertDiv({
                            title: '提示',
                            msg: json.message,
                            fn: function () {
                                crossCloseTab('refresh_flwstask');
                            }
                        });
                    }
                });
            } else {
                alertDiv({
                    title: '提示',
                    msg: '请选择退回状态!'
                });
            }
        }
    });
}


//完成流程,到下一级
function complete(shjl, shsj, shyj) {
    loading('open', '审核信息保存中,请稍候...');
    var param = {
        'taskId': taskId,
        'candidateUsers': candidateUsers,
        'shsj': shsj,
        'shjl': shjl,
        'shyj': shyj,
        'businessKey': businessKey,
        'isLastTask': isLastTask,
        'hxshyjbz': hxshyjbzCurrent,
        'fjrid': fjrid,
        'fjrxm': fjrxm,
        'flag': flagText
    };
    if (isLastTask) {
        //param.xwFlwsLajdsZjs = 'd036c36a9fa442518befc0b34824c0d3,511ef8327bfa441c84226d706bcb3c5a';//先写测试数据
        param.asjzcxwlbdm = asjzcxwlbdm;
        param.asjflwsdm = asjflwsdm;//+asjflwsdm;
        param.dxmc = dxmc;
        param.flwsmc = flwsmc;
        param.asjbh = asjbh;
        param.cjsj = cjsj;
        param.cqbgZj = businessKey;
        param.ajmc = ajmc;
    }
    $.ajax({
        url: ajaxUrl + '/complete',
        data: param,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            loading('close');
            // console.log('complete:', json);
            if (json.status == 'success') {
                //发送短信请求
                var isCheckMsger = $('#sendMsg_btn').prop("checked");//是否勾选发送消息
                if (isLastTask) {
                    if (isCheckMsger) {
                        var content = "您送审的" + ajmc + "的【" + flwsmc + "】已审批完成，请及时查收。";
                        sendMsgLast(asjbh, businessKey, asjflwsdm, content, json.message);
                    } else {
                        alertDiv({
                            title: '提示',
                            msg: json.message,
                            fn: function () {
                                crossCloseTab('refresh_flwstask');
                            }
                        });
                    }
                } else {
                    if (isCheckMsger && candidateUsers) {
                        var content = badwGajgmc + "送审的【" + flwsmc + "】已到审批任务中，请您及时处理。";
                        sendMsg(candidateUsers, content, json.message);
                    } else {
                        alertDiv({
                            title: '提示',
                            msg: json.message,
                            fn: function () {
                                crossCloseTab('refresh_flwstask');
                            }
                        });
                    }
                }
            }
            else {
                loading('close');
                alertDiv({
                    title: '提示',
                    msg: json.message,
                    fn: function(){
                        $report.css('visibility','visible');
                    }
                });
            }
        }
    });
}
//结束流程
function end(shjl, shsj, shyj) {
    loading('open', '最后一级,数据提交中...');
    $.ajax({
        url: ajaxUrl + '/end?taskId=' + taskId + '&sourceName=' + name + '&shjl=' + shjl + '&shsj=' + shsj + '&shyj=' + shyj + '&asjbh=' + asjbh + '&asjflwsdm=' + asjflwsdm + '&businessKey=' + businessKey + '&fjrid=' + fjrid + '&fjrxm=' + fjrxm,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            // console.log('结束:', json);
            loading('close');
            if (json.status == 'success') {
                //发送短信请求
                var isCheckMsger = $('#sendMsg_btn').prop("checked");//是否勾选发送消息
                if (isCheckMsger) {
                    var content = "您送审的" + ajmc + "的【" + flwsmc + "】已审批完成，请及时查收。";
                    sendMsgLast(asjbh, businessKey, asjflwsdm, content, json.message);
                } else {
                    loading('close');
                    alertDiv({
                        title: '提示',
                        msg: json.message,
                        fn: function () {
                            crossCloseTab('refresh_flwstask');
                        }
                    });
                }
            } else {
                alertDiv({
                    title: '错误提示',
                    msg: json.message,
                    fn: function(){
                        $report.css('visibility','visible');
                    }
                });
            }
        }
    });
}

//流程图展示接口
function lctShow() {
    var str = '';
    var spzt = '';//审批状态
    $.ajax({
        url: ajaxUrl + '/findGzlLcrz?lcslId=' + lcslId,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            // console.log('流程图展示数据:', json, lcslId);
            if (json.status == 'success') {
                var data = json.data;
                if (data.length > 0) {
                    /**
                     * 获取上级的审核时间，根据上级审核时间，判断当前级别的最小审核时间的范围;
                     * 1、如果审核时间相对于当前系统时间超过三天，minDate=当前时间-3天；
                     * 2、如果审核时间相对于当前系统时间不超过三天，minDate=审核时间；
                     */
                    var minDateVal, isTrue;
                    var dLen = data.length;
                    isTrue = minDateFun(data[dLen - 1].shsj);
                    if (isTrue) {
                        minDateVal = data[dLen - 1].shsj;
                    } else {
                        minDateVal = '%y-%M-%d {%H-72}:%m:%s'
                    }

                    var shsjStr = '<li>\n' +
                        '<span class="pro">审核时间</span>\n' +
                        '<input class="Wdate" name="shsj" id="shsj" style="" placeholder=""\n' +
                        'onfocus="WdatePicker({skin: \'christ\',dateFmt: \'yyyy-MM-dd HH:mm:ss\',minDate: \'' + minDateVal + '\',maxDate:\'%y-%M-%d {%H+0}:%m:%s\',errDealMode:1,autoPickDate:true});"/>\n' +
                        '</li>';

                    $('#next_over').after(shsjStr);
                    //默认值设置
                    $('#shsj').val(getCurrentTime());

                    for (var i = 0; i < data.length; i++) {
                        //审批状态
                        if (data[i].shjl == '1') {//成功
                            spzt = '<i class="fa fa-check"></i>';
                        } else if (data[i].shjl == '2') {//退回
                            spzt = '<i class="fa fa-times"></i>';
                        } else if (data[i].shjl == '3') {//不同意
                            spzt = '<i class="fa fa-reply"></i>';
                        }else if (data[i].shjl == '5') {//取回
                            spzt = '<i class="fa fa-rotate-left"></i>';
                        }
                        //else if (data[i].shjl == '4') {//待处理
                        //    spzt = '<i class="fa fa-spin fa-spinner"></i>';
                        //}

                        //如果审核人姓名为空，根据id获取审核人姓名

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
                    $('.lct-container').append(str);
                    $('.lct-node').tooltip();
                } else {
                    alertDiv({
                        title: '提示',
                        msg: '请求数据有误，请联系相关工作人员',
                        fn: function () {
                            crossCloseTab();
                        }
                    });
                }
            } else {
                alertDiv({
                    title: '提示',
                    msg: json.message
                });
            }
        }
    });

}

function linkToJz() {
    $('#linkJz').off('click').on('click', function () {
        var tab_title = ajmc + '|卷宗管理';
        var tab_url = pathConfig.basePath + '/html/jzgl/jzgl.html?asjbh=' + asjbh;
        var tab_id = 'jzgl_tab_id_' + asjbh;

        crossAddTab(tab_title, tab_url, tab_id);
    })
}

/**
 * 时间比较（yyyy-MM-dd HH:mm:ss）
 * @param startTime  开始时间
 * @param endTime  结束时间
 * @param i  天数（比较时间）
 * @return {*}
 */
function compareTime(startTime, endTime, i) {
    var startTimes = startTime.substring(0, 10).split('-');
    var endTimes = endTime.substring(0, 10).split('-');
    startTime = startTimes[1] + '-' + startTimes[2] + '-' + startTimes[0] + ' ' + startTime.substring(10, 19);
    endTime = endTimes[1] + '-' + endTimes[2] + '-' + endTimes[0] + ' ' + endTime.substring(10, 19);
    var thisResult = (Date.parse(endTime) - Date.parse(startTime)) / 3600 / 1000 / 24;
    if (thisResult < i) {
        return true;
    } else if (thisResult >= i) {
        return false;
    }
}

/**
 * 启动流程发送短信方法
 * @param userid  用户id
 * @param con  短信内容
 * @param msg  提示信息
 */
function sendMsg(userid, con, msg) {
    loading('open','正在发送短信信息,请稍候...');
    $.ajax({
        url: pathConfig.basePath + '/api/xx/sendMsg/' + userid,
        data: {
            content: con
        },
        type: 'post',
        success: function () {
            loading('close');
            alertDiv({
                title: '提示',
                msg: msg,
                fn: function () {
                    crossCloseTab('refresh_flwstask');
                }
            });
        }
    })
}

/**
 * 审批结束发送短信
 * @param asjbh  案事件编号
 * @param businessKey  短信内容
 * @param asjflwsdm  呈请报告编码
 * @param con  短信内容
 * @param msg  提示信息
 */
function sendMsgLast(asjbh, businessKey, asjflwsdm, con, msg) {
    $.ajax({
        url: pathConfig.basePath + '/api/xx/sendMsg/' + asjbh + '/' + businessKey,
        data: {
            content: con,
            asjflwsdm: asjflwsdm
        },
        type: 'post',
        success: function (data) {
            loading('close');
            alertDiv({
                title: '提示',
                msg: msg,
                fn: function () {
                    crossCloseTab('refresh_flwstask');
                }
            });
        }
    })
}

/**
 * 获取审核人姓名从组织机构
 * @param ryid 审核人id
 */
function getShrxmFromJcj(ryid) {
    $.ajax({
        url: pathConfig.managePath + '/api/user/queryOrgUserList',
        data: {
            identitycard: ryid
        },
        type: 'post',
        success: function (data) {
            console.log(data);
        }
    })
}