function postQuery(action, data, sucFun, errFun) {
    var loader;
    try{
        loader = layer.load();
    }catch (e) {
    }
    for(var key  in data){
        if(typeof(data[key])=="object"){
            data[key]=JSON.stringify(data[key]);
        }
    }
    if(errFun==undefined){
        errFun=function(){};

    }
    var errCallBack=function(msg){
        if(!msg.responseText){
            errFun(msg);
        }
        var errorJsonStr=msg.responseText.match(/var errorInfo=([\w\W]+);/)[1];
        if(errorJsonStr!=undefined){
            var errorJson=eval('('+errorJsonStr+')');
            if(errorJson.errorCode=="-102"){
                window.top.location.href="../index.html";
            }else{
                alert(errorJson.message);
            }
        }else{
            errFun(msg);
        }
    }

    var sucCallBack = function(result){
        sucFun(result);
    };

    $.ajax({
        url:action,// 跳转到 action
        data:data,
        type:'post',
        cache:false,
        dataType:'json',
        success:sucCallBack,
        error : errCallBack
    });

}