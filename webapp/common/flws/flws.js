/**
 * Created by zhuwei on 2016/9/2.
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
                    var nameData = eval('('+json['data']['treeJson']+')');
                    var nameArr = nameData[0]['children'];
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

