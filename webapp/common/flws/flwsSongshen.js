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
var hxshyjbz = '';

var candidateUsers;
var isFinally = false;
var backInitial = {};
var backPrev = {};
var localObj = getThisLocationObj();//当前页面location对象
//var ajaxUrl = localObj.origin+localObj.proname+'/workflowRelated';
//var ajaxUrl = localObj.origin+'/workflowRelated';
var ajaxUrl = pathConfig.basePath + '/workflowRelated';
var isLastTask = true;

var isOver = false;
var sessionBean = getSessionBean();     //获取登陆者信息
//console.log('sessionBean:',sessionBean);
var role = sessionBean.userOrgBiztype || '04';  //登陆角色 02为法制民警

var flwsinfoaram = 'asjbh=' + asjbh + '&flwsxxzjbh=' + businessKey + '&flwsAsjflwsdm=' + asjflwsdm + '&pageType=info';
var str = '<iframe src="' + pathConfig.basePath + '/html/flws/flwsInfo.html?' + flwsinfoaram + '" frameborder="0" style="width: 1168px;min-height: 800px;padding:0 15px;overflow-x: hidden;overflow-y:auto"></iframe>';
$('.right-report').append(str);

$(function () {
    clickShowPanel();
    selectApprove('1');    //选择审批人
    getNext();          //下一环节状态
    getCurrent();      //当前环节
    saveAndSsShyj();         //保存并送审
    selectCheckOpinion();//选择审核结论
    //alert(11);
    lctShow();//流程图展示接口
    linkToJz();//跳转到卷宗页面
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
                    $('#links input')[0].checked = true;
                } else {
                    isLastTask = true;
                    isFinally = true;
                    $('#next_over').show();
                    $('#next_link_area').hide();
                }
            } else {
                isLastTask = true;
                // console.log('下一环节:', json);
                $.messager.alert({
                    title: '获取下一环节出错',
                    msg: json.message
                });
            }
        }
    });
}

//获取当前环节
function getCurrent() {
    $.ajax({
        url: ajaxUrl + '/findCurrentTask?&processInstanceId=' + processInstanceId + '&name=' + name,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            if (json.status == 'success') {
                var data = json.data;
                if (data.length) {
                    hxshyjbz = data[0].hxshyjbz;
                }
            } else {
                // console.log('当前环节:', json);
                $.messager.alert({
                    title: '获取当前环节出错',
                    msg: json.message
                });
            }
        }
    });
}

//选择审核结论
function selectCheckOpinion() {
    loading('open', '正在获取上一节点信息...');
    //退回,取上一节点
    $.ajax({
        url: ajaxUrl + '/findPreviousTask?processInstanceId=' + processInstanceId + '&name=' + name,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            // console.log('退回,取上一节点:', json);
            loading('close');
            //退回,取初始节点
            $.ajax({
                url: ajaxUrl + '/findInitialTask?processInstanceId=' + processInstanceId + '&name=' + name,
                type: 'post',
                dataType: 'json',
                success: function (json) {
                    // console.log('退回,取初始节点:', json);
                    var data = json.data;
                    var csjd = data[0]['csjd'];
                    var jdId = data[0]['jdId'];
                    var jdmc = data[0]['jdmc'];
                    var hxshyjbz = data[0]['hxshyjbz'];
                    backInitial.csjd = csjd;
                    backInitial.jdid = jdId;
                    backInitial.jdmc = jdmc;
                    backInitial.hxshyjbz = hxshyjbz;
                }
            });
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
                var hxshyjbz = data[0]['hxshyjbz'];
                backPrev.csjd = csjd;
                backPrev.jdid = jdId;
                backPrev.jdmc = jdmc;
                backPrev.hxshyjbz = hxshyjbz;
            }
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
        $('#next_select_title').text('下一环节及审批人');
        $('#next_link_area').show();
    }
    //不同意
    else if (shjl == '2') {
        if (role == '02') {
            //alert('法制员的情况!');
            $('#next_select_title').text('选择处理方式');
            $('#over_area').show();
            $('#next_link_area').show();
        } else {
            $('#next_over').show();
        }
    }
    //退回
    else if (shjl == '3') {
        $('#next_select_title').text('请选择退回的状态');
        $('#next_link_area').show();
    }
    /*****END*****/

    //点击【选择】按钮
    $('#select_approve').off('click').on('click', function () {
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
                    if(json['data'].yyzlx == 'O'){
                        data = treeJson[0]['children'];
                    }else{
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
                        id: 'next_link_panel', //页面上div的id,将div设置为display:none,在div中设置好form属性,自动提交第一个form
                        title: '选择环节及审批人',
                        width: 540
                    }, [                       //以下为按钮添加配置,不传值为默认,传递[]时,清除所有按钮
                        {
                            text: '确定',
                            handler: function () {
                                isOver = $('#over_area input').prop('checked');
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
                                        $.messager.alert({
                                            title: '提示',
                                            msg: '请选择审批人!',
                                            icon: 'warning'
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
    var isTrue = compareTime(prevDate,nowDate,3);//时间是否超过三天
    return isTrue;
}


//【保存并送审】审核意见
function saveAndSsShyj(backObj) {
    //保存审核意见
    $('#saveAndss').off('click').on('click', function () {
        //console.log('candidateUsers',candidateUsers);
        var shjl = $('#shjl').val();
        var shsj = $('#shsj').val();
        var shyj = $('#shyj').val();
        if (!shjl) {
            $.messager.show({
                title: '提示',
                msg: '请选择审核结论!'
            });
            $('#shjl').focus();
            return false;
        }
        if (!shsj) {
            $.messager.show({
                title: '提示',
                msg: '请选择审核时间!'
            });
            $('#shsj').focus();
            return false;
        }
        if (!shyj) {
            $.messager.show({
                title: '提示',
                msg: '请选择审核时间!'
            });
            $('#shyj').focus();
            return false;
        }

        //同意
        if (shjl == '1') {
            //获取选择的审批人
            if (isFinally) {
                candidateUsers = '';
                complete(shjl, shsj, shyj);
            } else {
                if (candidateUsers) {
                    complete(shjl, shsj, shyj);
                } else {
                    $.messager.alert({
                        title: '提示',
                        msg: '请选择下一环节及审批人!',
                        icon: 'warning'
                    });
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
                    $.messager.alert({
                        title: '提示',
                        msg: '请选择处理方式',
                        icon: 'warning'
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
                var hxshyjbz = backObj.hxshyjbz;
                var UsersStr = '';
                $.ajax({
                    url: ajaxUrl + '/findBamjids?businessKey=' + businessKey+'&asjbh='+asjbh+'&asjflwsdm='+asjflwsdm,
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
                param += '&hxshyjbz=' + hxshyjbz;
                param += '&businessKey=' + businessKey;
                param += '&asjbh=' + asjbh;
                param += '&asjflwsdm=' + asjflwsdm;
                loading('open', '正在退回操作...');
                $.ajax({
                    url: ajaxUrl + '/jump?' + param,
                    type: 'post',
                    dataType: 'json',
                    success: function (json) {
                        loading('close');
                        $.messager.alert({
                            title: '提示',
                            msg: json.message,
                            fn: function () {
                                crossCloseTab('refresh_flwstask');
                            }
                        });
                    }
                });
            } else {
                $.messager.alert({
                    title: '提示',
                    msg: '请选择退回状态!',
                    icon: 'warning'
                });
            }

        }
    });
}


//完成流程,到下一级
function complete(shjl, shsj, shyj) {

    //alert('complete');
    //return;
    loading('open', '信息保存中...');
    var param = 'taskId=' + taskId;
    param += '&candidateUsers=' + candidateUsers;
    param += '&shsj=' + shsj;
    param += '&shjl=' + shjl;
    param += '&shyj=' + shyj;
    param += '&businessKey=' + businessKey;
    param += '&isLastTask=' + isLastTask;
    param += '&hxshyjbz=' + hxshyjbz;
    param += '&fjrid=' + fjrid;
    param += '&fjrxm=' + fjrxm;
    if (isLastTask) {
        param += '&xwFlwsLajdsZjs=d036c36a9fa442518befc0b34824c0d3,511ef8327bfa441c84226d706bcb3c5a';//先写测试数据
        param += '&asjzcxwlbdm=' + asjzcxwlbdm;
        param += '&asjflwsdm=' + asjflwsdm;//+asjflwsdm;
        param += '&dxmc=' + dxmc;
        param += '&flwsmc=' + flwsmc;
        param += '&asjbh=' + asjbh;
        param += '&cjsj=' + cjsj || '2012-08-08 20:00:00';
        param += '&cqbgZj=' + businessKey;
        param += '&ajmc=' + ajmc;
    }
    $.ajax({
        url: ajaxUrl + '/complete?' + param,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            loading('close');
            // console.log('complete:', json);
            if (json.status == 'success') {
                //发送短信请求
                var isCheckMsger = $('#sendMsg_btn').prop("checked");//是否勾选发送消息
                if(isLastTask){
                    if(isCheckMsger){
                        var content = "您送审的"+ajmc+"的【"+flwsmc+"】已审批完成，请及时查收。";
                        sendMsg(DATA.CQBG.cqbgRow.BAMJID,content,json.message);
                    }
                } else {
                    if(isCheckMsger && candidateUsers){
                        var content = badwGajgmc+"送审的【"+flwsmc+"】已到审批任务中，请您及时处理。";
                        sendMsg(candidateUsers, content, json.message);
                    }
                }
            } else {
                $.messager.alert({
                    title: '提示',
                    msg: json.message
                });
            }
        }
    });
}
//结束流程
function end(shjl, shsj, shyj) {
    //alert('end');
    //return;
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
                if(isCheckMsger){
                    var content = "您送审的"+ajmc+"的【"+flwsmc+"】已审批完成，请及时查收。";
                    sendMsg(DATA.CQBG.cqbgRow.BAMJID,content,json.message);
                }
            } else {
                //console.log('结束:',json);
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
                /**
                 * 获取上级的审核时间，根据上级审核时间，判断当前级别的最小审核时间的范围;
                 * 1、如果审核时间相对于当前系统时间超过三天，minDate=当前时间-3天；
                 * 2、如果审核时间相对于当前系统时间不超过三天，minDate=审核时间；
                 */
                var minDateVal,isTrue;
                var dLen = data.length;
                isTrue = minDateFun(data[dLen-1].shsj);
                if(isTrue){
                    minDateVal = data[dLen-1].shsj;
                }else{
                    minDateVal = '%y-%M-%d {%H-72}:%m:%s'
                }

                var shsjStr =  '<li>\n'+
                    '<span class="pro">审核时间</span>\n'+
                    '<input class="Wdate" name="shsj" id="shsj" style="" placeholder=""\n'+
                    'onfocus="WdatePicker({skin: \'christ\',dateFmt: \'yyyy-MM-dd HH:mm:ss\',minDate: \''+minDateVal+'\',maxDate:\'%y-%M-%d {%H+0}:%m:%s\',errDealMode:1,autoPickDate:true});"/>\n'+
                    '</li>';

                $('#next_over').after(shsjStr);
                //默认值设置
                $('#shsj').val(getCurrentTime());

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
                $('.lct-container').append(str);
                $('.lct-node').tooltip();
            } else {
                $.messager.alert({
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
function compareTime(startTime,endTime,i) {
    var startTimes = startTime.substring(0, 10).split('-');
    var endTimes = endTime.substring(0, 10).split('-');
    startTime = startTimes[1] + '-' + startTimes[2] + '-' + startTimes[0] + ' ' + startTime.substring(10, 19);
    endTime = endTimes[1] + '-' + endTimes[2] + '-' + endTimes[0] + ' ' + endTime.substring(10, 19);
    var thisResult = (Date.parse(endTime) - Date.parse(startTime)) / 3600 / 1000 /24;
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
function sendMsg(userid,con,msg){
    $.ajax({
        url:  pathConfig.basePath + '/api/xx/sendMsg/'+userid,
        data: {
            content: con
        },
        type: 'post',
        success: function (data) {
            $.messager.alert({
                title: '提示',
                msg: msg,
                fn: function () {
                    crossCloseTab('refresh_flwstask');
                }
            });
        }
    })
}
