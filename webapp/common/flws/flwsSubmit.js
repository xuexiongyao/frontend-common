/**
 * Created by zhuwei on 2016/9/2.
 * description: 法律文书送审请求js文件
 */
//送审人物选择
function selectName(cqbgzj,asjflwsdm,sessionBean){
    console.log(sessionBean);
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
        url : pathConfig.basePath+'/workflowRelated/findSysPzFlwsLcjbpzbs?flwsDms='+asjflwsdm+'&gajgjgdm='+gajgjgdm,
        type: 'post',
        dataType: 'json',
        success : function(json){
            console.log('1',json);
            var lcpzXxzjbh = (json.data)[0].lcpzXxzjbh;
            //第二次
            $.ajax({
                url : pathConfig.basePath+'/workflowRelated/findCandidateUsers?lcpzXxzjbh='+lcpzXxzjbh+'&jdId=usertask1&jdmc=StartEvent',
                type: 'post',
                dataType: 'json',
                success : function(json){
                    console.log(2,json);
                    loading('close');
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
                            var html_label = '<label><input type="checkbox" class="approve-check" bizID="'+nameArr[i]['bizID']+'">'+nameArr[i]['text']+'</label>';
                            $('#role_approve').append(html_label);
                        }
                    }
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
                        console.log('nameIdStr:',nameIdStr);
                        var param = 'businessKey='+cqbgzj;
                        param += '&lcpzXxzjbh='+lcpzXxzjbh;
                        param += '&nextCandidateUsers='+nameIdStr;
                        param += '&candidateUsers=511002198504095614,510502199410238742';

                        param += '&asjbh='+DATA.asjbh;
                        param += '&asjflwsdm='+asjflwsdm;
                        param += '&shjl=1';
                        param += '&shyj=1';
                        param += '&shsj='+getCurrentTime();

                        //发送短信请求
                        var isCheckMsger = $('#sendMsg_btn').prop("checked");//是否勾选发送消息

                        //第三次
                        $.ajax({
                            url: pathConfig.basePath+'/workflowRelated/startProcessInstance?'+param,
                            type: 'post',
                            dataType: 'json',
                            success: function (json) {
                                if(json.status == 'success'){
                                    //呈请移送案件报告书 请求接口  刑事案件
                                    if(asjflwsdm == '020004'){
                                        saveAjyjData(DATA.asjbh , DATA.FLWS['020005'].flwsRow[0].SWDW_GAJGJGDM,DATA.FLWS['020005'].flwsRow[0].SWDW_GAJGMC,DATA.FLWS['020005'].flwsRow[0].CQBG_ZJ)
                                    }
                                    //呈请移送案件报告书 请求接口  行政案件
                                    if(asjflwsdm == 'X030003'){
                                        saveAjyjData(DATA.asjbh , DATA.FLWS['X030004'].flwsRow[0].SWDW_GAJGJGDM,DATA.FLWS['X030004'].flwsRow[0].SWDW_GAJGMC,DATA.FLWS['X030004'].flwsRow[0].CQBG_ZJ)
                                    }
                                    //发送短信请求
                                    if(isCheckMsger){
                                        var content = DATA.publicJkXx.BADW01.BAJG_GAJGMC+"送审的【"+DATA.CQBG.asjflwsmc+"】已到审批任务中，请您及时处理。";
                                        sendMsg(nameIdStr,content,json.message);
                                    }else{
                                        loading('close');
                                        $.messager.alert({
                                            title : '提示',
                                            msg: '保存成功!',
                                            fn: function () {
                                                crossCloseTab('refresh_table_list');
                                            }
                                        });
                                    }
                                }else{
                                    loading('close');
                                    $.messager.alert({
                                        title : '提示',
                                        msg: json.message
                                    });
                                }
                            }
                        });
                    });
                }
            });
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
            loading('close');
            $.messager.alert({
                title : '提示',
                msg: '保存成功!',
                fn: function () {
                    crossCloseTab('refresh_table_list');
                }
            });
        }    
    })
}

