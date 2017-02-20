/**
 * Created by christ on 2017/1/4.
 */
var pathObj = getParamLinkUrl();
var businessKey = pathObj.businessKey;
var flwsAsjflwsdm = pathObj.flwsAsjflwsdm;
var asjbh = pathObj.asjbh;
var lcslId = pathObj.lcslId;
var ajmc = pathObj.ajmc;

var flwsinfoaram ='asjbh='+asjbh+'&flwsxxzjbh='+businessKey+'&flwsAsjflwsdm='+flwsAsjflwsdm;
var str = '<iframe src="'+pathConfig.basePath +'/html/flws/flwsInfo.html?'+flwsinfoaram+'" frameborder="0" style="width: 1168px;min-height: 800px;padding:0 15px;overflow-x: hidden;overflow-y:auto"></iframe>';
$('.right-report').append(str);

$(function(){
    lctShow();//流程图展示接口
    linkToJz();//跳转到卷宗页面
});

//流程图展示接口
function lctShow(){
    var str = '';
    var spzt = '';//审批状态
    $.ajax({
        url: pathConfig.basePath + '/workflowRelated/findGzlLcrz?lcslId='+lcslId,
        type: 'post',
        dataType:'json',
        success: function (json) {
            console.log('流程图展示数据:',json,lcslId);
            if(json.status == 'success') {
                var data = json.data;
                for(var i=0;i<data.length;i++){
                    //审批状态
                    if(data[i].shjl == '1'){
                        spzt = '<i class="fa fa-check"></i>';
                    }else if(data[i].shjl == '2'){
                        spzt = '<i class="fa fa-times"></i>';
                    }else if(data[i].shjl == '3'){
                        spzt = '<i class="fa fa-reply"></i>';
                    }

                    str += '<div class="lct-node" title="'+data[i].shyj+'">'+
                        '<div class="text">'+
                        '<span class="lcspr">'+data[i].shrXm+'</span>'+
                        '<span class="lcspzt">'+spzt+
                        '</span>'+
                        '</div>'+
                        '<div class="point">'+
                        '<b>'+
                        '<div class="h-line"></div>'+
                        '</b>'+
                        '</div>'+
                        '<div class="time">'+
                        '<span>'+data[i].shsj+'</span>'+
                        '</div>'+
                        '</div>';
                }
                $('.lct-container').append(str);
                $('.lct-node').tooltip();
            }else{
                $.messager.alert({
                    title:'提示',
                    msg:json.message
                });
            }
        }
    });

}

//查看卷宗
function linkToJz(){
    $('#linkJz').off('click').on('click', function () {
        var tab_title = ajmc+'|卷宗管理';
        var tab_url = pathConfig.basePath +'/html/jzgl/jzgl.html?asjbh='+asjbh;
        var tab_id = 'jzgl_tab_id_'+asjbh;

        crossAddTab(tab_title,tab_url,tab_id);
    })
}