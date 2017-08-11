/**
 * Created by christ on 2017/3/27.
 * description：文书送审js
 */

var pathObj = getParamLinkUrl();
var taskId = pathObj.id;    //rwid
var name = pathObj.name;    //rwmc
var businessKey = pathObj.businessKey;//呈请报告主键
var processInstanceId = pathObj.processInstanceId;
var asjzcxwlbdm = pathObj.asjzcxwlbdm;
var asjflwsdm = pathObj.asjflwsdm;//呈请报告编码
var dxmc = pathObj.dxmc;
var flwsmc = pathObj.flwsmc;
var cjsj = pathObj.cjsj;
var asjbh = pathObj.asjbh;
var ajmc = pathObj.ajmc;
var badwGajgmc = pathObj.badwGajgmc;
var fjrid = pathObj.fjrid;
var fjrxm = pathObj.fjrxm;
var lcslId = pathObj.lcslId;
var lx = pathObj.lx;//文书类型 XSAJ|XZAJ
var hxshyjbzCurrent = null;  //当前回写审核意见标识
var candidateUsers,candidateUsersName,backNodeText;
var flagText = null;
var isFinally = false;
var backInitial = {};
var backPrev = {};
var ajaxUrl = pathConfig.basePath + '/workflowRelated';
var isLastTask = true;
var isOver = false;
var sessionBean = getSessionBean();             //获取登陆者信息
var role = sessionBean.userOrgBiztype || '04';  //登陆角色 02为法制民警
var flwsinfoaram = '',str = '';
var isClickQzbcssBtn = false;//是否点击签章保存送审按钮
/****************************无签章页面*****************************/
// flwsinfoaram = 'asjbh=' + asjbh + '&flwsxxzjbh=' + businessKey + '&flwsAsjflwsdm=' + asjflwsdm + '&pageType=info';
// str = '<iframe src="' + pathConfig.basePath + '/html/flws/flwsInfo.html?' + flwsinfoaram + '" frameborder="0" style="width: 1168px;min-height: 800px;padding:0 15px;overflow-x: hidden;overflow-y:auto"></iframe>';
/**********************************end**************************************/

/**************************签章页面************************************/
//【注意】 原来引用的是flwsInfo.html,签章审批后使用flwsInfo2.html
// flwsinfoaram = 'asjbh=' + asjbh + '&flwsxxzjbh=' + businessKey + '&flwsAsjflwsdm=' + asjflwsdm + '&pageType=info';
// str = '<iframe src="' + pathConfig.basePath + '/html/flws/flwsInfo2.html?' + flwsinfoaram + '" frameborder="0" style="width: 1168px;min-height: 800px;padding:0 15px;overflow-x: hidden;overflow-y:auto"></iframe>';
/******************************end********************************/

/********************************呈请过程中文书科修改*************************************/
flwsinfoaram = 'asjbh=' + asjbh + '&cqgczCqbgZj=' + businessKey + '&asjzcxwdm=' + asjzcxwlbdm + "&CQBG_BM=" + asjflwsdm;
str = '<iframe src="' + pathConfig.basePath + '/html/flws/ssFlwsMain.html?' + flwsinfoaram + '" frameborder="0" style="width: 1198px;min-height: 800px;padding:0;overflow-x: hidden;overflow-y:auto"></iframe>';
/********************************end*************************************/

$('.right-report').append(str);

$(function () {
    clickShowPanel();
    getNext();
    selectApprove('1');         //选择审批人
    getCurrent();               //当前环节
    saveAndSsShyj();            //保存并送审
    getPrevAndOri();            //获取上一节点数据和初始节点数据
    lctShow();                  //流程图展示接口
    linkToJz();                 //跳转到卷宗页面
});

//获取下一节点数据
function getNext() {
    loading('open', '正在获取审批人信息...');
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
                    $('#links').empty();
                    for (var i = 0; i < data.length; i++) {
                        var data_i = data[i];
                        var html = '<label><input type="radio" jdId="' + data_i.jdId + '" name="link">' + data_i.jdmc + '</label>';
                        $('#links').append(html);
                    }
                    $('#links input').off('click').on('click',function(e){
                        $('#role_name').parent().show();
                        var _name = $(this).parent().text();
                        $.ajax({
                            url: ajaxUrl + '/findTaskCandidateUsers?taskId=' + taskId + '&processInstanceId=' + processInstanceId + '&name=' + _name,
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
                                        var disabled = '',title = '';
                                        if(data_i.sfygzj == '0'){//是否已过中级
                                            disabled = 'disabled = "diasabled"';
                                            title = 'title="没有中级资格，无法勾选！"';
                                        }
                                        var htmlLabel = '<label '+title+'><input type="checkbox" '+disabled+' bizID="' + data_i.bizID + '">' + data_i.text + '</label>';
                                        $('#role_name').append(htmlLabel)
                                    }
                                }
                                //审批流程中下一环节审批人的选择,需要检查是否签章
                                $('#role_name input').off('click').on('click',function () {
                                    var $this = $(this);
                                    var id = $this.attr('bizID');//id
                                    var name = $this.parent().text();//名字
                                    $.ajax({
                                        url: pathConfig.basePath + '/wenshu/source/QZ/CHECK',
                                        data: {
                                            id: id,
                                            name:name
                                        },
                                        dataType: 'json',
                                        async: false,
                                        success: function (json) {
                                            // console.log(json);
                                            if (json.state == 'success') {
                                                return true;
                                            }else if(json.state == 'error'){
                                                //错误列表提示语言
                                                $.messager.show({
                                                    title: '提示',
                                                    msg: json.msg+',不能选择【'+name+'】为下一环节审批人！',
                                                    icon: 'warning'
                                                });
                                                $this.prop('checked',false);
                                            }
                                        }
                                    })
                                })
                            },
                            error:function(){
                                console.log("ajax error");
                            }
                        });
                    });

                    $($('#links input')[0]).click();
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
        },
        complete:function(){
            loading('close');
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
                    if(candidateUsersName && n.id == '1'){
                        $('#next_select_title').text('下一环节及审批人：'+candidateUsersName).attr('title',candidateUsersName);
                    }else if(backNodeText && n.id == '3'){
                        $('#next_select_title').text('请选择退回的状态：'+backNodeText).attr('title',backNodeText);
                    }
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
        //置空
        $('#role_name').empty();
        $('#role_name').parent().show();
        //同意,不同意
        if (shjl == '1' || shjl == '2') {
            $('#next_link').show();
            getNext();                  //下一环节状态
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
                            var candidateUsersArr = [];//下一环节审批人ID
                            var candidateUsersNameArr = [];//下一环节审批人姓名
                            $('#role_name input:checked').each(function () {
                                candidateUsersNameArr.push($(this).parent().text());
                                candidateUsersArr.push($(this).attr('bizID'));
                            });
                            candidateUsers = candidateUsersArr.join(',');
                            candidateUsersName = candidateUsersNameArr.join(',');
                            $('#next_select_title').text('下一环节及审批人：'+candidateUsersName).attr('title',candidateUsersName);
                            if (candidateUsers) {
                                $('#next_link_panel').dialog('close');
                                $.messager.show({
                                    title: '提示',
                                    msg: '审批人选择成功!'
                                });
                                if(isClickQzbcssBtn){//直接送审
                                    $('#saveAndss').click();
                                }
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
            //$.ajax({
            //    url: ajaxUrl + '/findTaskCandidateUsers?taskId=' + taskId + '&processInstanceId=' + processInstanceId + '&name=' + name,
            //    type: 'post',
            //    dataType: 'json',
            //    success: function (json) {
            //        var treeJson = eval('(' + json['data']['treeJson'] + ')');
            //        var data = null;
            //        if (json['data'].yyzlx == 'O') {
            //            data = treeJson[0]['children'];
            //        } else {
            //            data = treeJson;
            //        }
            //        $('#role_name').empty();
            //        for (var i = 0; i < data.length; i++) {
            //            var data_i = data[i];
            //            if (data_i.nodeType == 'user') {
            //                var htmlLabel = '<label><input type="checkbox" bizID="' + data_i.bizID + '">' + data_i.text + '</label>';
            //                $('#role_name').append(htmlLabel)
            //            }
            //        }
            //        loading('close');
            //    }
            //});
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
                width: 300,
                onClose: function(){
                    $report.css('visibility','visible');
                }
            }, [                     //以下为按钮添加配置,不传值为默认,传递[]时,清除所有按钮
                {
                    text: '确定',
                    handler: function () {
                        var val = $('#role_name input:checked').val();//退回节点
                        backNodeText = $('#role_name input:checked').parent().text();//退回节点的名称
                        var backObj;
                        //alert('退回状态:'+val);
                        if (val == 'initial') {
                            backObj = backInitial;
                        } else if (val == 'prev') {
                            backObj = backPrev;
                        }
                        saveAndSsShyj(backObj);
                        if(isClickQzbcssBtn){//直接送审
                            $('#saveAndss').click();
                        }
                        $('#next_select_title').text('请选择退回的状态：'+backNodeText).attr('title',backNodeText);
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
        var $report = $('.right-report');
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

        if(shjl && shsj && shyj){
            isClickQzbcssBtn = true;
        }

        //同意
        if (shjl == '1') {
            console.log('是否最后一级isFinally:',isFinally);
            if(!isFinally && !candidateUsers){
                //alertDiv({
                //    title: '提示',
                //    msg: '请选择下一环节及审批人!',
                //    fn: function(){
                //        $report.css('visibility','visible');
                //        //保存并送审时如果没选择人员自动弹出人员选择框
                //    }
                //});
                $('#select_approve').click();
            }else{
                var wclc = function(formData){
                    //获取选择的审批人
                    if (isFinally) {    //最后一级没有审批人
                        candidateUsers = '';
                        complete(shjl, shsj, shyj,formData);
                    }
                    else if (candidateUsers) {
                        complete(shjl, shsj, shyj,formData);
                    }
                };
                wclc(); //完成流程
                return;
                //执行签章
                if(hxshyjbzCurrent == '1' || hxshyjbzCurrent == '2' || hxshyjbzCurrent == '3'){
                    //签章送审
                    //alertDiv({
                    //    title: '温馨提示',
                    //    msg: '立即执行签章送审流程,请耐心等待...',
                    //    fn: function(){
                    //        $report.css('visibility','visible');
                    //        window.frames[0].yjqz(shyj,hxshyjbzCurrent,shsj,wclc);
                    //    }
                    //});
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
                    //alertDiv({
                    //    title: '提示',
                    //    msg: '请选择处理方式',
                    //    fn: function () {
                    //        $report.css('visibility','visible');
                    //    }
                    //});
                    $('#select_approve').click();
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
                        sendMessage({
                            ajmc: ajmc,
                            asjbh: asjbh,
                            flwsmc: flwsmc,
                            flwsdm: asjflwsdm,
                            cqbgId: businessKey,
                            nextId: candidateUsers,
                            shjl: shjl
                        });
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
                //alertDiv({
                //    title: '提示',
                //    msg: '请选择退回状态!',
                //    fn: function () {
                //        $report.css('visibility','visible');
                //    }
                //});
                $('#select_approve').click();
            }
        }
    });
}


//完成流程,到下一级
function complete(shjl, shsj, shyj,formData) {
    var formDataParam = new FormData();
    if(formData){
        formDataParam = formData;
    }
    formDataParam.append("taskId", taskId);
    formDataParam.append("candidateUsers", candidateUsers);
    formDataParam.append("asjbh", asjbh);
    formDataParam.append("shsj", shsj);
    formDataParam.append("shjl", shjl);
    formDataParam.append("shyj", shyj);
    formDataParam.append("businessKey", businessKey);
    formDataParam.append("isLastTask", isLastTask);
    formDataParam.append("hxshyjbz", hxshyjbzCurrent);
    formDataParam.append("fjrid", fjrid);
    formDataParam.append("fjrxm", fjrxm);
    formDataParam.append("flag", flagText);
    formDataParam.append("asjflwsdm", asjflwsdm);
    formDataParam.append("rwmc", name);
    if (isLastTask) {
        formDataParam.append("asjzcxwlbdm", asjzcxwlbdm);
        formDataParam.append("dxmc", dxmc);
        formDataParam.append("flwsmc", flwsmc);
        formDataParam.append("cjsj", cjsj);
        formDataParam.append("cqbgZj", businessKey);
        formDataParam.append("ajmc", ajmc);
    }
    loading('open', '审核信息保存中,请稍候...');
    $.ajax({
        url: ajaxUrl + '/complete',
        data: formDataParam,
        type: 'post',
        dataType: 'json',
        xhrFields: {withCredentials: true},
        crossDomain: true,
        contentType: false,//必须false才会自动加上正确的Content-Type
        processData: false,//必须false才会避开jQuery对 formdata 的默认处理XMLHttpRequest会对 formdata 进行正确的处理
        success: function (json) {
            loading('close');
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
                }
                else {
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
                //candidateUsers,candidateUsersName
                sendMessage({
                    ajmc: ajmc,
                    asjbh: asjbh,
                    flwsmc: flwsmc,
                    flwsdm: asjflwsdm,
                    cqbgId: businessKey,
                    nextId: candidateUsers,
                    shjl: shjl
                });
            }
            else {
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
        url: ajaxUrl + '/end?taskId=' + taskId + '&sourceName=' + name + '&shjl=' + shjl + '&shsj=' + shsj + '&shyj=' + shyj + '&asjbh=' + asjbh + '&asjflwsdm=' + asjflwsdm + '&businessKey=' + businessKey + '&fjrid=' + fjrid + '&fjrxm=' + fjrxm +'&hxshyjbz='+hxshyjbzCurrent,
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
    $.ajax({
        url: ajaxUrl + '/findGzlLcrz?businessKey=' + businessKey,
        type: 'post',
        dataType: 'json',
        success: function (json) {
            // console.log('流程图展示数据:', json, lcslId);
            if (json.status == 'success') {
                var data = json.data;
                var str = '';
                if (data.length > 0) {
                    var spzt = '';//审批状态
                    var shrXm = '';//审核人姓名
                    var shsj = '';//审核时间
                    var shyj = '';//审核意见
                    $('.lct-container').empty();

                    /**
                     * 获取上级的审核时间，根据上级审核时间，判断当前级别的最小审核时间的范围;
                     * 1、如果审核时间相对于当前系统时间超过三天，minDate=当前时间-3天；
                     * 2、如果审核时间相对于当前系统时间不超过三天，minDate=审核时间；
                     */
                    var minDateVal, isTrue, lastData;
                    var dLen = data.length;
                    lastData = data[dLen - 1];
                    if(lastData.shsj){
                        lastData = data[dLen - 1];
                    }else if(dLen>1 && !lastData.shsj){
                        lastData = data[dLen - 2];
                    }
                    isTrue = minDateFun(lastData.shsj);
                    if (isTrue) {
                        minDateVal = lastData.shsj;
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
                        if (data[i].shjl == '1') {//同意
                            spzt = '<i class="fa fa-check"></i>';
                            shrXm = data[i].shrXm;
                            shsj = data[i].shsj;
                            shyj = data[i].shyj;
                        } else if (data[i].shjl == '2') {//退回
                            spzt = '<i class="fa fa-times"></i>';
                            shrXm = data[i].shrXm;
                            shsj = data[i].shsj;
                            shyj = data[i].shyj;
                        } else if (data[i].shjl == '3') {//不同意
                            spzt = '<i class="fa fa-reply"></i>';
                            shrXm = data[i].shrXm;
                            shsj = data[i].shsj;
                            shyj = data[i].shyj;
                        } else if (data[i].shjl == '4') {//待审核
                            spzt = '<i class="fa fa-spin fa-spinner"></i>';
                            $.ajax({
                                url:pathConfig.managePath + '/api/user/queryOrgUserList?identitycard='+data[i].shrSfzh,
                                type: 'get',
                                dataType: 'json',
                                async: false,
                                xhrFields: {withCredentials:true},
                                crossDomain: true,
                                success:function (data) {
                                    if(data.length>0){
                                        var dspryXmsArry = [];
                                        for(var j=0;j<data.length;j++){
                                            dspryXmsArry.push(data[j].username);
                                        }

                                        if(dspryXmsArry.length>1){
                                            shrXm = dspryXmsArry.join(',');
                                        }else{
                                            shrXm = dspryXmsArry[0]
                                        }
                                    }
                                }
                            });
                            shsj = '';
                            shyj = data[i].shyj;
                        } else if (data[i].shjl == '5') {//取回
                            spzt = '<i class="fa fa-rotate-left"></i>';
                            shrXm = data[i].shrXm;
                            shsj = data[i].shsj;
                            shyj = data[i].shyj;
                        }

                        str += '<div class="lct-node" title="' + shyj + '">' +
                            '<div class="text">'+
                            '<span class="lcspr">' + shrXm + '</span>' +
                            '<span class="lcspzt">' + spzt +
                            '</span>' +
                            '</div>' +
                            '<div class="point">' +
                            '<b>' +
                            '<div class="h-line"></div>' +
                            '</b>' +
                            '</div>' +
                            '<div class="time">' +
                            '<span>' + shsj + '</span>' +
                            '</div>' +
                            '</div>';
                    }
                    $('.lct-container').append(str);
                    $('.lct-node').tooltip();
                } else {
                    $.messager.alert({
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
        success: function (data) {
            if(data.state == 'success'){//发送短信成功
                alertDiv({
                    title: '提示',
                    msg: msg+'短信发送成功！',
                    fn: function () {
                        crossCloseTab('refresh_flwstask');
                    }
                });
            }else if(data.state == 'error'){//发送短信失败
                alertDiv({
                    title : '提示',
                    msg: msg+'短信发送失败：'+data.message,
                    fn: function () {
                        crossCloseTab('refresh_flwstask');
                    }
                });
            }
            loading('close');
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
            if(data.state == 'success'){//发送短信成功
                alertDiv({
                    title: '提示',
                    msg: msg+'短信发送成功！',
                    fn: function () {
                        crossCloseTab('refresh_flwstask');
                    }
                });
            }else if(data.state == 'error'){//发送短信失败
                alertDiv({
                    title : '提示',
                    msg: msg+'短信发送失败：'+data.message,
                    fn: function () {
                        crossCloseTab('refresh_flwstask');
                    }
                });
            }
            loading('close');
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