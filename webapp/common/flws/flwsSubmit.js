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

                        //第三次
                        $.ajax({
                            url: pathConfig.basePath+'/workflowRelated/startProcessInstance?'+param,
                            type: 'post',
                            dataType: 'json',
                            success: function (json) {
                                loading('close');
                                if(json.status == 'success'){
                                    //发送短信请求
                                    var isCheckMsger = $('#sendMsg_btn').prop("checked");//是否勾选发送消息
                                    if(isCheckMsger){
                                        var content = DATA.publicJkXx.BADW01.BAJG_GAJGMC+"送审的【"+DATA.asjflwsmc+"】已到审批任务中，请您及时处理。";
                                        sendMsg(nameIdStr,content);
                                    }
                                    $.messager.alert({
                                        title : '提示',
                                        msg: '保存成功!',
                                        fn: function () {
                                            crossCloseTab();
                                        }
                                    });
                                }else{
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
 */
function sendMsg(userid,con){
    $.ajax({
        url:  pathConfig.basePath + '/api/xx/sendMsg/'+userid,
        param: {
            content: con
        },
        type: 'post',
        success: function (data) {
            console.log(data);
        }    
    })
}

