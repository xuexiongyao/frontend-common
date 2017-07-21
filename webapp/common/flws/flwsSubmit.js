/*
* 生成法律文书
* */
function scflwsQuery(cqbgzj,asjflwsdm){
    var param = {
        flwsywzj:cqbgzj,
        asjbh:DATA.asjbh,
        asjflwsdm:asjflwsdm
    };
    //console.log('scflwsQuery:',param);
    loading('open','正在发送生成任务,请稍候...');
    $.ajax({
        url : pathConfig.basePath+'/qzrw/cqbg_scflws',
        type: 'post',
        data: param,
        dataType: 'json',
        success : function(json){
            loading('close');
            if(json.status == 'success'){
                $.messager.show({
                    title: '提示信息',
                    msg: '生成任务发送成功!'
                })
            }else{
                alertDiv({
                    title: '错误提示',
                    msg: json.message
                });
            }
        }
    });
}


/**
 * Created by zhuwei on 2016/9/2.
 * description: 法律文书送审请求js文件
 */
//送审人物选择
function selectName(cqbgzj,asjflwsdm,sessionBean,asjbh){
    var gajgjgdm = null;
    var ssFsxCode = sessionBean.extendMap.ssFsxCode; //分县局代码
    var ssDsjCode = sessionBean.extendMap.ssDsjCode; //市局代码

    if(ssFsxCode != null){ //有分局取分局，没分局取市局
        gajgjgdm =ssFsxCode;
    }else {
        gajgjgdm =ssDsjCode;
    }
    console.log(gajgjgdm);
    loading('open','正在获取审批人信息...');
    //第一次
    $.ajax({
        url : pathConfig.basePath+'/workflowRelated/findSysPzFlwsLcjbpzbs?flwsDms='+asjflwsdm+'&gajgjgdm='+gajgjgdm+'&asjbh='+asjbh,
        type: 'post',
        dataType: 'json',
        success : function(json){
            if(json.status == 'success'){
                console.log('1',json);
                var lcpzXxzjbh = (json.data)[0].lcpzXxzjbh;
                //第二次
                $.ajax({
                    url : pathConfig.basePath+'/workflowRelated/findCandidateUsers?lcpzXxzjbh='+lcpzXxzjbh+'&jdId=usertask1&jdmc=StartEvent&asjbh='+asjbh,
                    type: 'post',
                    dataType: 'json',
                    success : function(json){
                        console.log(2,json);
                        loading('close');
                        if(json.status == 'success'){
                            //var nameData = eval('('+json['data']['treeJson']+')');
                            //var nameArr = nameData[0]['children'];

                            var nameData = eval('(' + json['data']['treeJson'] + ')');
                            var nameArr = null;
                            if(json['data'].yyzlx == 'O'){
                                nameArr = nameData[0]['children'];
                            }else{
                                nameArr = nameData;
                            }

                            $('#role_approve').empty();
                            for(var i=0;i<nameArr.length;i++){
                                if(nameArr[i]['nodeType'] == 'user'){
                                    var disabled = '',title = '';
                                    if(nameArr[i].sfygzj == '0'){//是否已过中级
                                        disabled = 'disabled = "diasabled"';
                                        title = 'title="没有中级资格，无法勾选！"';
                                    }
                                    var html_label = '<label><input type="checkbox" class="approve-check" '+disabled+' '+title+' bizID="'+nameArr[i]['bizID']+'">'+nameArr[i]['text']+'</label>';
                                    $('#role_approve').append(html_label);
                                }
                            }
                            //审批流程中下一环节审批人的选择,需要检查是否签章
                            $('#role_approve input').off('click').on('click',function () {
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
                                                msg: json.msg+',不能选择【'+name+'】为审批人！',
                                                icon: 'warning'
                                            });
                                            $this.prop('checked',false);
                                        }
                                    }
                                })
                            });

                            openDivForm({
                                id: 'select_name',
                                title: '选择审批人',
                                width: 600
                            }, []);
                            $('#save_approve').off('click').on('click',function(){
                                $('#select_name').dialog('close');
                                loading('open','审批人信息保存中...');
                                var nameIdArr = [];
                                $('#role_approve .approve-check:checked').each(function(){
                                    var bizID = $(this).attr('bizID');
                                    nameIdArr.push(bizID);
                                });
                                var nameIdStr = nameIdArr.join(',');
                                //console.log('nameIdStr:',nameIdStr);

                                //提交的数据
                                var param = {
                                    businessKey:cqbgzj,
                                    lcpzXxzjbh:lcpzXxzjbh,
                                    nextCandidateUsers:nameIdStr,
                                    asjbh:DATA.asjbh,
                                    asjflwsdm:asjflwsdm,
                                    shjl:'1',
                                    shyj:'同意'

                                };

                                //第一次启动流程，审核时间的获取
                                if(DATA.CQBG.cqbgRow.CQRQ_MASTER){//有呈请报告
                                    param.shsj = DATA.CQBG.cqbgRow.CQRQ_MASTER;
                                }else{//无呈请报告，例如：受案登记表
                                    param.shsj = getCurrentTime();
                                }

                                //发送短信请求
                                var isCheckMsger = $('#sendMsg_btn').prop("checked");//是否勾选发送消息

                                //第三次
                                $.ajax({
                                    url: pathConfig.basePath+'/workflowRelated/startProcessInstance',
                                    type: 'post',
                                    data:param,
                                    dataType: 'json',
                                    success: function (json) {
                                        if(json.status == 'success'){
                                            /*
                                             * 后台直接请求接口,下面的调取直接注释
                                             * */
                                            /*
                                             //呈请移送案件报告书 请求接口  刑事案件
                                             if(asjflwsdm == '020004'){
                                             saveAjyjData(DATA.asjbh , DATA.FLWS['020005'].flwsRow[0].SWDW_GAJGJGDM,DATA.FLWS['020005'].flwsRow[0].SWDW_GAJGMC,DATA.FLWS['020005'].flwsRow[0].CQBG_ZJ)
                                             }
                                             //呈请移送案件报告书 请求接口  行政案件
                                             if(asjflwsdm == 'X030003'){
                                             saveAjyjData(DATA.asjbh , DATA.FLWS['X030004'].flwsRow[0].YSJGDM,DATA.FLWS['X030004'].flwsRow[0].YSJG,DATA.FLWS['X030004'].flwsRow[0].CQBG_ZJ)
                                             }
                                             */
                                            //发送短信请求
                                            if(isCheckMsger){
                                                var content = DATA.publicJkXx.BADW01.BAJG_GAJGMC+"送审的【"+DATA.CQBG.asjflwsmc+"】已到审批任务中，请您及时处理。";
                                                sendMsg(nameIdStr,content,json.message);
                                            }else{
                                                loading('close');
                                                alertDiv({
                                                    title : '提示',
                                                    msg: '保存成功!',
                                                    fn: function () {
                                                        try {
                                                            parent.crossCloseTab('refresh_table_list');
                                                        }catch (e){}
                                                        crossCloseTab('refresh_table_list');
                                                    }
                                                });
                                            }
                                        } else if(json.status == 'error'){
                                            loading('close');
                                            alertDiv({
                                                title : '提示',
                                                msg: json.message
                                            });
                                        }
                                    }
                                });
                            });
                        } else if(json.status == 'error'){
                            alertDiv({
                                title : '提示',
                                msg: json.message
                            });
                        }
                    }
                });
            } else if(json.status == 'error'){
                loading('close');
                alertDiv({
                    title : '提示',
                    msg: json.message
                });
            }
        }
    });
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
            if(data.state == 'success'){//发送短信成功
                alertDiv({
                    title : '提示',
                    msg: '文书已送审，短信发送成功！',
                    fn: function () {
                        try {
                            parent.crossCloseTab('refresh_table_list');
                        }catch (e){}
                        crossCloseTab('refresh_table_list');
                    }
                });
            }else if(data.state == 'error'){//发送短信失败
                alertDiv({
                    title : '提示',
                    msg: '文书已送审，短信发送失败：'+data.message,
                    fn: function () {
                        try {
                            parent.crossCloseTab('refresh_table_list');
                        }catch (e){}
                        crossCloseTab('refresh_table_list');
                    }
                });
            }
            loading('close');
        }
    })
}

