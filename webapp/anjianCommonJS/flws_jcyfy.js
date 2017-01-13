var zj,flg,asjbh,fzxyr_xm;

$(function(){
    beforeLoadInit();
    initData()
});

//数据请求前就能初始化的
var mode;
function beforeLoadInit(){
    asjbh = getUrlParam('asjbh');
    zj = getUrlParam('zj');
    flg = getUrlParam('flg');
    $("#asjbh").val(asjbh);
    $(".initHide").hide();
    if(flg=='detail'){
        editSwitch(false,'clear-border','val');
        $("#subBtn").hide();
    }

}
var sessionBean = null;
//数据请求后才能初始化的
function afterLoadInit(){

    Datafilter();//数据过滤

    clickShowPanel();
}


function initData(){
    getSessionInfo();
    loading('open','正在加载中,请稍候...');
    $.ajax({
        url : pathConfig.basePath+'/api/jcyjfy/queryDetailPage',
        type: 'get',
        dataType: 'json',
        data:{
            zj :zj
        },
        success : function(data){
            //console.log(data);

            if(data){
                sessionBean = data.sessionBean;
                if(data.entity){//如果已录入过，直接显示信息
                    mode='update';
                    loadFormData($('#dataForm'),data.entity);
                    fzxyr_xm =data.entity.fzxyr_xm;
                    $('#fzxyr_xm').combobox('setText',fzxyr_xm);
                    if(asjbh==null){
                        asjbh = $("#asjbh").val();
                    }
                }else{//如果没有，则是新增
                    mode='insert';
                }
                dataLoad(mode);//数据显示
            }else{//未查询到数据
                $.messager.alert({
                    title : '提示信息',
                    msg : '未获取到主键【'+zj+'】有效的线索信息，页面即将关闭！',
                    fn : function(){
                        crossCloseTab();
                    }
                });

                return;
            }
        },
        error : function(){
            console.log('ajax err');
        },
        complete : function(){
            loading('close');
        }
    });
    afterLoadInit();
}


function submitForm(clickObj){
    if($('#dataForm').form('validate')){
        var subUrl;
        var submitData;
        if(mode=='insert'){
            submitData =getSubmitData($('#dataForm'),true);
            subUrl=pathConfig.basePath+'/api/jcyjfy/saveJcyjfy';
        }

        if(mode=='update'){
            submitData =getSubmitData($('#dataForm'),false);
            subUrl=pathConfig.basePath+'/api/jcyjfy/updateJcyjfy';
        }


        normalSubmitFormData(
            subUrl,
            submitData,
            function(data){
                $(clickObj).linkbutton('disable');
                crossCloseTab("jcyfy_refresh_list_table");
            }
        );
    }
}

//数据过滤
function Datafilter(){

    $("#pfywlxdm").combotree({
        onSelect: function (record) {
            $("#pfywlxdm").attr('choose', 'yes');
            var val = record.id;
            if(val =="010101"){
                //获取嫌疑人
                $.ajax({
                    url: pathConfig.basePath + '/base/autotable/queryByAsjbhAndTable',
                    type:'post',
                    data:'asjbh='+asjbh+'&table=TB_ST_RY_WFXYRY',
                    async:false,
                    dataType:'json',
                    success: function(data){
                        bczjData = data;
                        $('#fzxyr_xm').combobox({
                            data:data,
                            valueField:'fzxyr_xm',
                            textField:'fzxyr_xm',
                            panelMaxHeight: 200,
                            panelHeight: 'auto',
                            onSelect: function(row){
                                $("#asjxgrybh").val(row.asjxgrybh);
                                $("#fzxyr_zj").val(row.asjxgrybh);
                            },
                            loadFilter: function(data){
                                var newData = [];
                                for(var i in data){
                                    var v = data[i].fzxyr_rsqzcsdm;
                                    if(v=="11"){
                                        console.log(data[i]);
                                        newData.push(data[i]);
                                    }
                                }
                                return newData;
                            }
                        });

                    }
                });
            }else {
                //获取嫌疑人
                $.ajax({
                    url: pathConfig.basePath + '/base/autotable/queryByAsjbhAndTable',
                    type:'post',
                    data:'asjbh='+asjbh+'&table=TB_ST_RY_WFXYRY',
                    async:false,
                    dataType:'json',
                    success: function(data){
                        bczjData = data;
                        console.log(data);
                        $('#fzxyr_xm').combobox({
                            data:data,
                            valueField:'fzxyr_xm',
                            textField:'fzxyr_xm',
                            panelMaxHeight: 200,
                            panelHeight: 'auto',
                            onSelect: function(row){
                                $("#asjxgrybh").val(row.asjxgrybh);
                                $("#fzxyr_zj").val(row.asjxgrybh);
                            },
                            formatter: function(row){
                                var opts = $(this).combobox('options');
                                return row[opts.textField];
                            },
                            loadFilter: function(data){
                                var newData = [];
                                for(var i in data){
                                    newData.push(data[i]);
                                }
                                return newData;
                            }
                        });

                    }
                });
            }



            if(val =="010101"||val=="010102"||val=="0203"){//逮捕.补充侦查
                $(".jdlx").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
                $("#jdlxdm").combobox({
                    loadFilter: function(data){
                        var newData = [];
                        for(var i in data){
                            var v = data[i].id;
                            if(v=="01010101"||v=="01010102"||v=="01010103"||v=="01010104"||v=="01010105"){
                                newData.push(data[i]);
                            }
                        }
                        return newData;
                    }
                });
            }
            if(val =="010103"){//批捕业务“要求复议”
                $(".jdlx").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
                $("#jdlxdm").combobox({
                    loadFilter: function(data){
                        var newData = [];
                        for(var i in data){
                            var v = data[i].id;
                            if(v=="01010301"||v=="01010302"){
                                newData.push(data[i]);
                            }
                        }
                        return newData;
                    }
                });
            }
            if(val=="0204"){// 移送起诉业务“要求复议”
                $(".jdlx").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
                $("#jdlxdm").combobox({
                    loadFilter: function(data){
                        var newData = [];
                        for(var i in data){
                            var v = data[i].id;
                            if(v=="02040001"||v=="02040002"){
                                newData.push(data[i]);
                            }
                        }
                        return newData;
                    }
                });
            }
            if(val=="010105"){//批捕业务“提请复核”
                $(".jdlx").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
                $("#jdlxdm").combobox({
                    loadFilter: function(data){
                        var newData = [];
                        for(var i in data){
                            var v = data[i].id;
                            if(v=="01010501"||v=="01010502"){
                                newData.push(data[i]);
                            }
                        }
                        return newData;
                    }
                });
            }
            if(val=="0206"){//移送起诉业务“提请复核”
                $(".jdlx").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
                $("#jdlxdm").combobox({
                    loadFilter: function(data){
                        var newData = [];
                        for(var i in data){
                            var v = data[i].id;
                            if(v=="02060001"||v=="02060002"){
                                newData.push(data[i]);
                            }
                        }
                        return newData;
                    }
                });
            }
            if(val=="010106"||val=="010107"){//为空
                $(".jdlx").hide();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
            }
            if(val=="010207"){// 提请延长羁押
                $(".jdlx").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
                $("#jdlxdm").combobox({
                    loadFilter: function(data){
                        var newData = [];
                        for(var i in data){
                            var v = data[i].id;
                            if(v=="01020701"||v=="01020702"){
                                newData.push(data[i]);
                            }
                        }
                        return newData;
                    }
                });
            }
            if(val=="0202"){// 提请起诉
                $(".jdlx").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
                $("#jdlxdm").combobox({
                    loadFilter: function(data){
                        var newData = [];
                        for(var i in data){
                            var v = data[i].id;
                            if(v=="02020001"||v=="02020002"||v=="02020004"||v=="02020005"){
                                newData.push(data[i]);
                            }
                        }
                        return newData;
                    }
                });
            }


            if(val =="0208"){//起诉移办
                $(".jdlx").hide();
                $(".yb").show();
                $(".bpb,.tc,.bypb,.zhjl,.pz,.qs,.bqs,.pb,.pj").hide();
            }
            if(val =="0209"){//法院判决
                $(".jdlx").hide();
                $(".pj").show();
                $(".bpb,.tc,.bypb,.zhjl,.pz,.qs,.bqs,.pb,.yb").hide();
            }
        }

    });

    $("#jdlxdm").combobox({
        onSelect: function (record) {
            $("#jdlxdm").attr('choose', 'yes');
            var val = record.id;

            if(val =="01010101"){//批捕
                $(".pb").show();
                $(".bpb,.tc,.bypb,.zhjl,.pz,.qs,.bqs,.yb,.pj").hide();
            }
            if(val =="01010102"){//不批捕
                $(".bpb").show();
                $(".pb,.tc,.bypb,.zhjl,.pz,.qs,.bqs,.yb,.pj").hide();
            }
            if(val =="01010103"||val =="02020004"||val =="02020005"){//不批捕-退查,第一次退查,第二次退查
                $(".tc").show();
                $(".pb,.bpb,.bypb,.zhjl,.pz,.qs,.bqs,.yb,.pj").hide();
            }
            if(val =="01010104"){//不予批捕
                $(".bypb").show();
                $(".pb,.bpb,.tc,.zhjl,.pz,.qs,.bqs,.yb,.pj").hide();
            }
            if(val =="01010501"||val =="01010502"){//变更、维持
                $(".zhjl").show();
                $(".pb,.bpb,.tc,.bypb,.pz,.qs,.bqs,.yb,.pj").hide();
            }

            if(val =="01020701"){//批准
                $(".pz").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj").hide();
            }
            if(val =="01020702"){//不起诉
                $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
            }


            if(val =="02020001"){//起诉
                $(".qs").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.pz,.bqs,.yb,.pj").hide();
            }
            if(val =="02020002"){//不批诉
                $(".bqs").show();
                $(".pb,.bpb,.tc,.bypb,.zhjl,.pz,.qs,.yb,.pj").hide();
            }

        }
    });
}

//数据显示
function dataLoad(mode){
    console.log(mode);
    if(mode =='update'){
        var pfywlxdm = $("#pfywlxdm").combotree("getValue");
        var jdlxdm   = $("#jdlxdm").combotree("getValue");

        if(pfywlxdm =="0208"){//起诉移办
            $(".jdlx").hide();
            $(".yb").show();
            $(".bpb,.tc,.bypb,.zhjl,.pz,.qs,.bqs,.pb,.pj").hide();
        }
        if(pfywlxdm =="0209"){//法院判决
            $(".jdlx").hide();
            $(".pj").show();
            $(".bpb,.tc,.bypb,.zhjl,.pz,.qs,.bqs,.pb,.yb").hide();
        }
        if(pfywlxdm=="010106"||pfywlxdm=="010107"){//为空
            $(".jdlx").hide();
            $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
        }

        if(pfywlxdm =="010101"||pfywlxdm=="010102"||pfywlxdm=="0203"||pfywlxdm =="010103"||pfywlxdm=="0204"||pfywlxdm=="010105"||pfywlxdm=="0206"||pfywlxdm=="010207"||pfywlxdm=="0202"){
            $(".jdlx").show();
        }


        if(jdlxdm =="01010101"){//批捕
            $(".pb").show();
            $(".bpb,.tc,.bypb,.zhjl,.pz,.qs,.bqs,.yb,.pj").hide();
        }
        if(jdlxdm =="01010102"){//不批捕
            $(".bpb").show();
            $(".pb,.tc,.bypb,.zhjl,.pz,.qs,.bqs,.yb,.pj").hide();
        }
        if(jdlxdm =="01010103"||jdlxdm =="02020004"||jdlxdm =="02020005"){//不批捕-退查,第一次退查,第二次退查
            $(".tc").show();
            $(".pb,.bpb,.bypb,.zhjl,.pz,.qs,.bqs,.yb,.pj").hide();
        }
        if(jdlxdm =="01010104"){//不予批捕
            $(".bypb").show();
            $(".pb,.bpb,.tc,.zhjl,.pz,.qs,.bqs,.yb,.pj").hide();
        }
        if(jdlxdm =="01010501"||jdlxdm =="01010502"){//变更、维持
            $(".zhjl").show();
            $(".pb,.bpb,.tc,.bypb,.pz,.qs,.bqs,.yb,.pj").hide();
        }

        if(jdlxdm =="01020701"){//批准
            $(".pz").show();
            $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj").hide();
        }
        if(jdlxdm =="01020702"){//不起诉
            $(".pb,.bpb,.tc,.bypb,.zhjl,.qs,.bqs,.yb,.pj,.pz").hide();
        }


        if(jdlxdm =="02020001"){//起诉
            $(".qs").show();
            $(".pb,.bpb,.tc,.bypb,.zhjl,.pz,.bqs,.yb,.pj").hide();
        }
        if(jdlxdm =="02020002"){//不批诉
            $(".bqs").show();
            $(".pb,.bpb,.tc,.bypb,.zhjl,.pz,.qs,.yb,.pj").hide();
        }

    }
}