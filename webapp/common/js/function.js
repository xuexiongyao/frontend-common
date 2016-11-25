
//点击子框架页面
function clickWindow() {
    $(document).click(function () {
        crossRequestParent('slideUpNav()');
    });
}
//跨域请求父页面(向父框架发送消息)
function crossRequestParent(_msg) {
    var messenger = new Messenger('iframe', 'toParent');
    sendToMain(_msg);
    function sendToMain(msg) {
        messenger.addTarget(window.parent, 'parent');
        messenger.targets['parent'].send(msg);
    }

    return true;
}
//
function pageJump() {
    crossRequestParent('iframJump("' + current_tab_id + '")');
}

/*页面铺满加载中样式
 * 1.type: open,打开;close,关闭
 * 2.msg : 显示的文字,默认为加载中...
 * */
function loading(type,msg){
    var msg = msg || '加载中...';
    //var staticPath = staticPath;
    //if(!staticPath) alert('loading()方法无法获取静态资源路径');
    var loading_img_url = staticPath +'/framework/default/images/loading.gif';
    var loading_html='<div id="loadingMsk">'
        +'<div class="loadingPage">'
        +'<img src="'+loading_img_url+'" alt="loading">'
        +'<span class="msg">'+msg+'</span>'
        +'</div>'
        +'</div>';
    if($('#loadingMsk').length == 0){
        $('body').append(loading_html);
    }
    if(type == 'open'){
        $('#loadingMsk').fadeIn('fast');
    }else if(type == 'close'){
        $('#loadingMsk').fadeOut('fast').remove();
    }else{
        console.log('加载效果处理方式参数错误!');
        return false;
    }
}

//跨域添加Tab
function crossAddTab(tab_title, tab_url, tab_id) {

    //将当前tabID作为下一个tab的返回ID
    var return_tab_id = window.current_tab_id;
    if (!tab_title || !tab_url || !tab_id) {
        console.log('crossAddTab(tab_title,tab_url,tab_id) 缺少必要参数!');
        return false;
    }
    //添加tab时,通过全局获取返回的tab_id,并存放在iframe的DOM属性中
    crossRequestParent("addTab('" + tab_title + "','" + tab_url + "','" + tab_id + "','" + return_tab_id + "')");
}

//跨域关闭标签
function crossCloseTab(return_fn_name) {
    //关闭标签时,直接获取上一级tabID(返回TabID);
    //var return_tab_id = window.return_tab_id;
    //console.log('切换回去tabID:',return_tab_id);
    if (return_fn_name) {
        crossRequestParent("closeTabRefreshOther('" + return_tab_id + "','" + return_fn_name + "')");
    } else {
        crossRequestParent("closeTabRefreshOther('" + return_tab_id + "')");
    }
}

//改变按钮移入icon的样式
function changeLinkButtonIcon() {
    var oldClass;
    $(".l-btn").hover(
        function () {
            var tmp = $(this).find('.l-btn-icon').attr('class');
            var disNum = $(this).attr('class').indexOf('l-btn-disabled');
            if (tmp && disNum == -1) {
                var pos = tmp.indexOf('icon-');
                var str = tmp.substring(pos);
                oldClass = str;
                $(this).find('.l-btn-icon').removeClass(str).addClass(str + "-hover");
            }

        },
        function () {
            var tmp = $(this).find('.l-btn-icon').attr('class');
            var disNum = $(this).attr('class').indexOf('l-btn-disabled');
            if (tmp && disNum == -1) {
                var str = tmp.substring(tmp.indexOf('icon-'));
                $(this).find('.l-btn-icon').removeClass(str).addClass(oldClass);
            }
        }
    )
}
//添加slider滑块两端圆圈方法
function sliderEndsCircle() {
    var sliderItem = $(".easyui-slider");//所有的滑块组件
    var slider = $('.slider');//获得滑块组件

    for (var i = 0; i < sliderItem.length; i++) {
        var mode = $(sliderItem[i]).slider('options').mode;//获取滑块的方向
        if (mode == 'h') {//横向滑块
            var strL = '<div class="ends-circle ends-circle-l"><span></span></div>';
            var strR = '<div class="ends-circle ends-circle-r"><span></span></div>';
            $(slider[i]).prepend(strL);
            $(slider[i]).prepend(strR);
        } else if (mode == 'v') {//垂直滑块
            var strT = '<div class="ends-circle ends-circle-t"><span></span></div>';
            var strB = '<div class="ends-circle ends-circle-b"><span></span></div>';
            $(slider[i]).prepend(strT);
            $(slider[i]).prepend(strB);
        }
    }
}
//格式化日期显示
function formatDate() {
    $('.easyui-datebox').datebox({
        formatter: function (date) {
            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        },
        parser: function (date) {
            if (date == "" || date == "null" || date == null || date == undefined) {
                return new Date();
            }
            return new Date(Date.parse(date.replace(/-/g, "/")));
        }
    })
}

/*combobox点击输入框是否直接弹出下拉框
 * 1.box_id:组件Id
 * 2.bool:是否执行点击就下拉
 * 3.不传参数则执行整个页面所有组件,点击就下拉
 * */
function clickShowPanel(box_id, bool) {
    if (box_id) {
        if (bool) {
            $('#' + box_id).next().on('click.showPanel', function () {
                if($(this).hasClass('inputReadonly') || $(this).hasClass('textbox-readonly')){
                    $(this).prev().combobox("hidePanel");
                }else{
                    $(this).prev().combobox("showPanel");
                }
            });
        } else {
            $('#' + box_id).next().on('click.showPanel', function () {
                $(this).prev().combobox("hidePanel");
            });
        }
    } else {
        $(".combo").on('click.showPanel', function () {
            if($(this).hasClass('inputReadonly') || $(this).hasClass('textbox-readonly')){
                $(this).prev().combobox("hidePanel");
            }else{
                $(this).prev().combobox("showPanel");
            }
        });
    }

}

//判断两个数组中是否存在相同的值
function arrSame(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        if ($.inArray(arr1[i], arr2) != -1) {
            return true;
        }
    }
    return false;
}

/*js本地图片预览，兼容ie[6-9]、火狐、Chrome17+、Opera11+、Maxthon3
 * 1.fileObj:file类型的input对象(使用原生JS方法获取)
 * 2.imgPreviewId:img的id
 * 3.divPreviewId:包装img的div的id
 **/
function PreviewImage(fileObj, imgPreviewId, divPreviewId) {
    //fileObj.value = ""; //清空选中文件
    var allowExtention = ".jpg,.bmp,.gif,.png"; //允许上传文件的后缀名document.getElementById("hfAllowPicSuffix").value;
    var extention = fileObj.value.substring(fileObj.value.lastIndexOf(".") + 1).toLowerCase();
    var browserVersion = window.navigator.userAgent.toUpperCase();
    if (allowExtention.indexOf(extention) > -1) {
        if (fileObj.files) {//HTML5实现预览，兼容chrome、火狐7+等
            if (window.FileReader) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById(imgPreviewId).setAttribute("src", e.target.result);
                };
                reader.readAsDataURL(fileObj.files[0]);
            } else if (browserVersion.indexOf("SAFARI") > -1) {
                alert("不支持Safari6.0以下浏览器的图片预览!");
            }
        } else if (browserVersion.indexOf("MSIE") > -1) {
            if (browserVersion.indexOf("MSIE 6") > -1) {//ie6
                document.getElementById(imgPreviewId).setAttribute("src", fileObj.value);
            } else {//ie[7-9]
                fileObj.select();
                if (browserVersion.indexOf("MSIE 9") > -1)
                    fileObj.blur(); //不加上document.selection.createRange().text在ie9会拒绝访问
                var newPreview = document.getElementById(divPreviewId + "New");
                if (newPreview == null) {
                    newPreview = document.createElement("div");
                    newPreview.setAttribute("id", divPreviewId + "New");
                    newPreview.style.width = document.getElementById(imgPreviewId).width + "px";
                    newPreview.style.height = document.getElementById(imgPreviewId).height + "px";
                    newPreview.style.border = "solid 1px #d2e2e2";
                }
                newPreview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='" + document.selection.createRange().text + "')";
                var tempDivPreview = document.getElementById(divPreviewId);
                tempDivPreview.parentNode.insertBefore(newPreview, tempDivPreview);
                tempDivPreview.style.display = "none";
            }
        } else if (browserVersion.indexOf("FIREFOX") > -1) {//firefox
            var firefoxVersion = parseFloat(browserVersion.toLowerCase().match(/firefox\/([\d.]+)/)[1]);
            if (firefoxVersion < 7) {//firefox7以下版本
                document.getElementById(imgPreviewId).setAttribute("src", fileObj.files[0].getAsDataURL());
            } else {//firefox7.0+
                document.getElementById(imgPreviewId).setAttribute("src", window.URL.createObjectURL(fileObj.files[0]));
            }
        } else {
            document.getElementById(imgPreviewId).setAttribute("src", fileObj.value);
        }
    } else {
        alert("仅支持" + allowExtention + "为后缀名的文件!");
        fileObj.value = ""; //清空选中文件
        if (browserVersion.indexOf("MSIE") > -1) {
            fileObj.select();
            document.selection.clear();
        }
        fileObj.outerHTML = fileObj.outerHTML;
    }
    return fileObj.value;    //返回路径
};

/*日期起始时间小于结束日期,并且只能小于等于今天(开始时间框ID,结束时间框ID)
 * 1.start_id : 开始时间的datebox ID
 * 2.end_id : 结束时间的datebox ID
 * */
function ltToday(start_id, end_id) {
    $('#' + start_id).datebox({
        onSelect: function () {
            clickShowPanel(end_id, true);
            var st = new Date($('#' + start_id).datebox('getValue'));
            $('#' + end_id).datebox({
                disabled: false
            }).datebox('calendar').calendar({
                validator: function (date) {
                    var _date = date.getTime() / 1000;
                    var _st = st.getTime() / 1000;
                    var _now = (new Date()).getTime() / 1000;
                    return (_date + 3600 * 24) >= _st && _date <= _now;
                }
            });
        }
    }).datebox('calendar').calendar({
        validator: function (date) {
            var now = new Date();
            return date <= now;
        }
    });
}

/*form提交,依赖easyui [不带提示信息],
* 1.form_id : 表单ID
* 2.call_back : 提交成功后的回调函数处理
* 3.url : 提交表单地址,默认为form上的action属性
* 4.queryParams : 额外的参数
* */
function formSubmit(form_id, call_back, url,queryParams){
    var $submit_form = $('#' + form_id);
    var submit_url = url || $submit_form.action;
    var params = {};
    if(queryParams) params = queryParams;
    $submit_form.form('submit', {
        url: submit_url,
        queryParams: params,
        onSubmit: function () {
            var isValid = $(this).form('validate');
            if(isValid){
                loading('open','数据提交中,请稍候...');
            }
            return isValid;	// 返回false终止表单提交
        },
        success: function (data) {
            try{
                var json = eval('(' + data + ')');
            }catch(e){
                var json=data;
            }
            if(json.status == 'success'){
                if(typeof call_back == 'function'){
                    call_back(data);
                    loading('close');//完成后关闭...转圈
                }else{
                    alert(call_back+'is not a function');
                }
            }else{
                $.messager.alert('提示',json.message);
                loading('close');//完成后关闭...转圈
            }

        }
    });
}

/*普通form提交,依赖easyui
 * 1.form_id : 表单ID
 * 2.call_back : 提交成功后的回调函数处理
 * 3.url : 提交表单地址,默认为form上的action属性
 * */
function normalSubmit(form_id, call_back, url) {
    var submit_form = $('#' + form_id);
    var submit_url = url || submit_form.action;
    submit_form.form('submit', {
        url: submit_url,
        onSubmit: function () {
            var isValid = $(this).form('validate');
            if(isValid){
                loading('open','数据处理中,请稍候...');//验证通过提交后台，开始....转圈！
            }
            return isValid;	// 返回false终止表单提交
        },

        success: function (data) {
            loading('close');//完成后关闭...转圈
            try{
                var json = eval('(' + data + ')');
            }catch(e){
                var json=data;
            }

            formTips(json, call_back, 'tips');
        },
        error: function (data) {
            loading('close');//完成后关闭...转圈
            resetToken();
            console.log('submit ajax error');

        }
    });
}
/*提交form时,对反馈信息的处理
 * 1.json:为success中返回的json格式数据(非json格式请转换)
 * 2.success_fn:成功后需要执行的函数名称,不传值则默认弹框显示json.message
 * 3.type : 如何执行success_fn,不传参直接调用;传递tips,则提示信息后延迟1秒后执行
 * 3.返回信息格式 {"message":"{\"xxzb.xbdm\":\"【性别】不能为空\",\"xxzb.zjhm\":\"【证件号码】不能为空\"}","status":"error"}
 * */
function formTips(json, success_fn, type) {
    //console.log('添加返回参数:',json);
    //console.log('参数:',success_fn,type);
    if (json.status == 'success') {
        if (success_fn) {
            try {
                var fn = eval(success_fn);
                if (type == 'tips' && json.message) {
                    $.messager.show({
                        title: '提示信息',
                        msg: json.message,
                        height:'auto'
                    });
                    setTimeout(function () {
                        fn(json);
                    }, 5000);
                } else {
                    fn(json);
                }
            } catch (e) {
                console.log('请确认函数success_fn,是否存在');
            }
        } else {
            $.messager.show({
                title: '提示信息',
                msg: json.message
            })
        }
    } else {

        //if (json.status == 308) {
        if (json){//有错误信息，不是重复提交，无错误信息，则是重复提交
            resetToken();
        }

        if (json.message && json.message.indexOf('{') == -1) {   //系统异常错误抛出
            $.messager.alert({
                title: '提示信息',
                msg: json.message,
                top: 200
            });
        } else {
            var message = eval("(" + json.message + ")");
            var message_arr = [];
            var field_arr = [];
            var i = 0;
            for (var k in message) {
                message_arr[i] = message[k];
                field_arr[i] = k;
                i++;
            }
            if (message_arr[0]) {
                //focus定位错误信息位置,并提示
                $.messager.alert({
                    title: '提示信息',
                    msg: message_arr[0],
                    top: 200,
                    onClose: function () {
                        $('input[textboxname="' + field_arr[0] + '"] + span > input').focus();
                        $('textarea[name="' + field_arr[0] + '"]').focus();
                    }
                });
            }
        }
    }
}
/*图片通过form上传方法
 * 1.form_id:提交的表单的id
 * 2.callback_fn:提交成功之后的回调函数
 **/
function submitImg(form_id, callback_fn) {
    var img_input = $("#" + form_id + " input[type=file]");
    if (img_input.val() == '') {
        $.messager.alert('添加失败', '请添加图片!');
        return false;
    } else if (!/.(gif|jpg|jpeg|png|GIF|JPG|png|PNG)$/.test(img_input.val())) {
        $.messager.alert('上传失败', '图片类型必须是.gif,jpeg,jpg,png中的一种');
        return false;
    } else {
        $("#" + form_id).ajaxSubmit({
            success: function (data) {
                var json = eval('(' + data + ')');
                if (json.status == 'success') {
                    if ((typeof callback_fn) == 'function') {
                        callback_fn();
                    } else {
                        $.messager.show({
                            title: '提示信息',
                            msg: '图片上传成功'
                        });
                    }
                    img_input.val('');
                } else {
                    $.messager.alert('上传失败', data);
                }
            },
            error: function () {
                $.messager.alert('上传失败', 'submitImg ajaxsubmit err');
            }
        });
    }
}


/*自定义的Url弹框方法
 * 1.options : 对象参数(各项配置)
 * 2.btn_diy : 数组参数(自定义按钮操作)
 * */
function openUrlForm(options) {
    //参数使用说明(子页面能够调用父页面的事件函数)
    /*openUrlForm({
     id: 'dlg_id',       //自定义ID,防止重复添加DOM
     url: '2.html',      //需要放入弹框的页面URL,此页面中设置好form属性,自动提交第一个form
     title: '表单提交',   //模态框标题
     width: 800,         //模态框宽度
     height: 600,        //模态框高度
     cache:true,         //是否缓存
     });*/
    //只创建一次DIV
    if($('#' + options.id).length > 0 && options.cache){
        //缓存窗口
        options.open_status = options.cache;
        var dlg_div = $('#' + options.id);
    }else{
        var dlg_div = $('<div id="' + options.id + '"></div>').css({
            overflow: 'hidden'
        });
        var iframe = $('<iframe src="" id="' + options.id + '_iframe" name="' + options.id + '_iframe"  frameborder="0"></iframe>').css({
            width: '100%',
            height: '100%'
        });
        $('body').append(dlg_div);
        dlg_div.append(iframe);
    }
    //var _buttons = btn_diy || default_btn;
    var _width = options.width || '90%';
    var _title = options.title || '弹框标题';
    var _height = options.height || 'auto';
    var _cache = options.open_status || false;
    var _close = options.onClose;
    var blank_height = _height;
    if (blank_height == 'auto') {
        blank_height = dlg_div.height();
        if (blank_height > 0) {
            setCookie(dlg_id + 'dialog_height', blank_height);
        } else {
            blank_height = parseInt(getCookie(dlg_id + 'dialog_height'));
        }
        blank_height = blank_height + 200;
    }
    var surplus_height_ = window.innerHeight - _height;
    var self_top = 0;
    if (surplus_height_ > 0) {
        self_top = parseInt(surplus_height_ / 2);
    }
    //var _top = options.top || self_top;   //如果需要强行定制高度,使用此项设置
    var _top = self_top; //自适应高度
    dlg_div.dialog({
        //href:options.url,1
        cache:_cache,
        modal: true,
        title: _title,
        width: _width,
        height: _height,
        top: _top,
        //buttons: _buttons,   //打开url的弹框暂时不使用面板按钮
        onBeforeOpen:function(){
            //没有缓存,重新加载
            if(options.open_status != true){
                $('#' + options.id + '_iframe').prop('src', options.url);
            }
        },
        onClose:function(){
            if(options.open_status != true){
                dlg_div.remove();
            }
            try{
                _close();
            }catch(e){}
        }
    });
    //弹框高度自适应
    dlg_div.dialog('move', {top: $(document).scrollTop() + _top});
    dlg_div.dialog('open');
}


/*自定义的div弹框方法
 * 1.options : 对象参数(各项配置)
 * 2.btn_diy : 数组参数(自定义按钮操作)
 * */
function openDivForm(options, btn_diy) {
    //参数使用说明举例
    //只弹窗的用法
    /*openDivForm({
        id: 'div_id', //页面上div的id,将div设置为display:none,在div中设置好form属性,自动提交第一个form
        title: '表单提交',
        width: 800,
        height: 200,
    }, []);*/
    //提交表单的用法
    /*openDivForm({
        id: 'div_id', //页面上div的id,将div设置为display:none,在div中设置好form属性,自动提交第一个form
        title: '表单提交',
        width: 800,
        height: 200,
        top: 200,
        beforeSubmit: function () {
        }, //return false,阻止提交
        afterSubmit: function (data) {
        }, //提交成功,data为返回的数据
        onClose: function () {
        },             //关闭时提交的函数
    }, [                     //以下为按钮添加配置,不传值为默认,传递[]时,清除所有按钮
        {
            text: '确定',
            handler: function () {
                $('#div_id').dialog('close');
            }
        }, {
            text: '关闭',
            handler: function () {
                $('#div_id').dialog('close');
            }
        },
    ]);*/
    var dlg_id = options.id;
    var dlg_div = $('#' + dlg_id);
    var defualt_beforeSubmit = function () {
        //验证表单
        var isValid = $(this).form('validate');
        return isValid; // 返回false终止表单提交
    };
    var default_afterSubmit = function (data) {
        if (data) {
            dlg_div.dialog('close');
        }
    };
    var beforeSubmit = options.beforeSubmit || defualt_beforeSubmit;
    var afterSubmit = options.afterSubmit || default_afterSubmit;

    var default_btn = [{
        text: '保存',
        handler: function () {
            var form = dlg_div.find('form');
            var submitUrl = options.url || form.action;
            if (form.length > 0) {
                $(form[0]).form('submit', {
                    url: submitUrl,
                    onSubmit: beforeSubmit,
                    success: afterSubmit
                });
            } else {
                $.messager.alert('提示', '无法获取表单元素,无法提交', 'warning');
            }
        }
    }, {
        text: '重置',
        handler: function () {
            var form = dlg_div.find('form');
            if (form.length > 0) {
                $(form[0]).form('reset');
            } else {
                $.messager.alert('提示', '无法获取表单元素,无法提交', 'warning');
            }
        }
    }, {
        text: '关闭',
        handler: function () {
            dlg_div.dialog('close');
        }
    }];
    var _buttons = btn_diy || default_btn;
    var _title = options.title || '弹框';
    var _width = options.width || 800;
    var _height = options.height || 'auto';
    var _left = options.left || null;
    var blank_height = _height;
    if (blank_height == 'auto') {
        blank_height = dlg_div.height();
        if (blank_height > 0) {
            setCookie(dlg_id + 'dialog_height', blank_height);
        } else {
            blank_height = parseInt(getCookie(dlg_id + 'dialog_height'));
        }
        blank_height = blank_height + 160;
    }

    var surplus_height_ = window.innerHeight - blank_height;
    var self_top = 0;
    if (surplus_height_ > 0) {
        self_top = parseInt(surplus_height_ / 2);
    }
    var _top = options.top || self_top;   //如果需要强行定制高度,使用此项设置,不输入自适应
    //var _top = self_top; //自适应高度
    dlg_div.dialog({
        cache: true,
        modal: true,
        novalidate: true,  //验证表单元素
        title: _title,
        width: _width,
        height: _height,
        top: _top,
        left: _left,
        buttons: _buttons,
        onClose: options.onClose
    });
    dlg_div.dialog('move', {top: $(document).scrollTop() + _top});
    dlg_div.show().dialog('open');
}

/*去除input效果
 * 1.bool:true启用编辑效果和样式,false禁用编辑效果并清除样式
 * 2.border_class:禁用编辑时给输入框添加的样式class
 * 3.box_class:给需要禁用或启用的组件添加样式,不传值则对整个页面有效
 * 4.重新初始化组件会导致value变化,必须修改
 * */
function editSwitch(bool, border_class, box_class) {
    var _border_class = border_class || 'clear-border';
    var box = $('.val');
    if (box_class) {box = $('.' + box_class);}
    //启用编辑
    if (bool) {
        box.each(function () {
            var _this = $(this);
            _this.prev().find('i').show();
            if (_this.hasClass('easyui-combobox')) {
                _this.combobox({readonly: false}).next().removeClass(_border_class);//移除样式还原边框
            } else if (_this.hasClass('easyui-textbox')) {
                _this.textbox({readonly: false}).next().removeClass(_border_class);
            } else if (_this.hasClass('easyui-datebox')) {
                _this.datebox({readonly: false}).next().removeClass(_border_class);
            } else if (_this.hasClass('easyui-datetimebox')) {
                _this.datetimebox({readonly: false}).next().removeClass(_border_class);
            } else if (_this.hasClass('easyui-combotree')) {
                _this.combotree({readonly: false}).next().removeClass(_border_class);
            } else if (_this.hasClass('easyui-validatebox')) {
                if(_this.hasClass('Wdate')){
                    _this.removeAttr('disabled');
                    _this.css({'border':'1px solid #ccc','background':'url('+pathConfig.staticPath+'/common/datepicker/skin/christ/datePicker.png) no-repeat right'});
                }else{
                    _this.validatebox({readonly: false}).next().removeClass(_border_class);
                }
            }else if(_this.hasClass('Wdate')){
                _this.removeAttr('disabled');
                _this.css({'border':'1px solid #ccc','background':'url('+pathConfig.staticPath+'/common/datepicker/skin/christ/datePicker.png) no-repeat right'});
            }
            _this.next().find('span.textbox-addon').show();//显示按钮
        });
    } else {
        box.each(function () {
            var _this = $(this);
            //清除“*”
            _this.prev().find('i').hide();
            if (_this.hasClass('easyui-combobox') || _this.hasClass('easyuicombobox')) {
                _this.combobox({readonly: true,required:false}).next().addClass(_border_class);//添加样式取消边框
            } else if (_this.hasClass('easyui-textbox') || _this.hasClass('easyuitextbox')) {
                _this.textbox({readonly: true,required:false}).next().addClass(_border_class);
            } else if (_this.hasClass('easyui-datebox') || _this.hasClass('easyuidatebox')) {
                _this.datebox({readonly: true,required:false}).next().addClass(_border_class);
            } else if (_this.hasClass('easyui-datetimebox') || _this.hasClass('easyuidatetimebox')) {
                _this.datetimebox({readonly: true,required:false}).next().addClass(_border_class);
            } else if (_this.hasClass('easyui-combotree') || _this.hasClass('easyuicombotree')) {
                _this.combotree({readonly: true,required:false}).next().addClass(_border_class);
            } else if (_this.hasClass('easyui-validatebox') || _this.hasClass('easyuivalidatebox')) {
                if(_this.hasClass('Wdate')){
                    _this.attr('disabled','disabled');
                    _this.css({'border':'0','background':'#fff'})
                }else{
                    _this.validatebox({readonly: true,required:false}).next().addClass(_border_class);
                }
            } else if(_this.hasClass('Wdate')){
                _this.attr('disabled','disabled');
                _this.css({'border':'0','background':'#fff'})
            }
            _this.next().find('span.textbox-addon').hide();//隐藏按钮
        });
    }
}

//input禁用编辑(easyui组件)
function editDisable(input_class){
    var box = $('.'+input_class);
    var border_class = 'clear-border';//确保此样式已经加载
    box.each(function () {
        var _this = $(this);
        //隐藏“*”
        _this.prev().find('i').hide();
        if (_this.hasClass('easyui-combobox')) {
            _this.combobox({readonly: true}).next().addClass(border_class);//添加样式取消边框
        } else if (_this.hasClass('easyui-textbox')) {
            _this.textbox({readonly: true}).next().addClass(border_class);
        } else if (_this.hasClass('easyui-datebox')) {
            _this.datebox({readonly: true}).next().addClass(border_class);
        } else if (_this.hasClass('easyui-datetimebox')) {
            _this.datetimebox({readonly: true}).next().addClass(border_class);
        } else if (_this.hasClass('easyui-combotree')) {
            _this.combotree({readonly: true}).next().addClass(border_class);
        } else if (_this.hasClass('easyui-validatebox')) {
            if(_this.hasClass('Wdate')){
                _this.attr('disabled','disabled');
                _this.css({'border':'0','background':'#fff'})
            }else{
                _this.validatebox({readonly: true,required:false}).next().addClass(border_class);
            }
        } else if(_this.hasClass('Wdate')){
            _this.attr('disabled','disabled');
            _this.css({'border':'0','background':'#fff'})
        }
        _this.next().find('span.textbox-addon').hide();//隐藏按钮
    });
}

//input启用编辑(easyui组件)
function editEnable(input_class){
    var box = $('.'+input_class);
    var border_class = 'clear-border';//确保此样式已经加载
    box.each(function () {
        var _this = $(this);
        //显示"*"
        _this.prev().find('i').show();
        if (_this.hasClass('easyui-combobox')) {
            _this.combobox({readonly: false}).next().removeClass(border_class);//移除样式还原边框
        } else if (_this.hasClass('easyui-textbox')) {
            _this.textbox({readonly: false}).next().removeClass(border_class);
        } else if (_this.hasClass('easyui-datebox')) {
            _this.datebox({readonly: false}).next().removeClass(border_class);
        } else if (_this.hasClass('easyui-datetimebox')) {
            _this.datetimebox({readonly: false}).next().removeClass(border_class);
        } else if (_this.hasClass('easyui-combotree')) {
            _this.combotree({readonly: false}).next().removeClass(border_class);
        } else if (_this.hasClass('easyui-validatebox')) {
            if(_this.hasClass('Wdate')){
                _this.removeAttr('disabled');
                _this.css({'border':'1px solid #ccc','background':'url('+pathConfig.staticPath+'/common/datepicker/skin/christ/datePicker.png) no-repeat right'});
            }else{
                _this.validatebox({readonly: false}).next().removeClass(border_class);
            }
        } else if(_this.hasClass('Wdate')){
            _this.removeAttr('disabled');
            _this.css({'border':'1px solid #ccc','background':'url('+pathConfig.staticPath+'/common/datepicker/skin/christ/datePicker.png) no-repeat right'});
        }
        _this.next().find('span.textbox-addon').show();//显示按钮
    });
}

//组件的边框和图标是否显示
function isBorder(bool,boxClass){
    var $box = $('.'+boxClass);
    var noBorderClass = 'clear-border';
    //显示边框和图标
    if(bool){
        $box.each(function(){
            var $this = $(this);
            $this.next().removeClass(noBorderClass).find('span.textbox-addon').show();
            //My97日期处理
            if($this.hasClass('Wdate')){
                $this.removeAttr('disabled');
                $this.css({'border':'1px solid #ccc','background':'url('+pathConfig.staticPath+'/common/datepicker/skin/christ/datePicker.png) no-repeat right'});
            }
        });
    //隐藏边框和图标
    }else{
        $box.each(function(){
            var $this = $(this);
            $this.next().addClass(noBorderClass).find('span.textbox-addon').hide();
            //My97日期处理
            if($this.hasClass('Wdate')){
                $this.attr('disabled','disabled');
                $this.css({'border':'0','background':'#fff'})
            }
        });
    }
}


/*表单修改,只提交点击过的input框(easyui组件)
 * 1.页面加载完成时执行方法1(页面DOM记录点击状态)
 * 2.在表单提交之前执行方法2(获取页面点击状态,将未点击的input设置disabled,并判断返回是否有修改)
 * 3.必须提交的input,添加属性sb_status="1"
 * */
//1.记录FORM中input的提交状态
function markInputStatus(form_id) {
    $('#' + form_id + ' span.textbox input').off('focus.status').on('focus.status', function () {
        var input_module = $(this).parent().prev();  //组件input
        if(input_module.hasClass('readonly') == false){
            input_module.attr('sb_status', 1);
        }
    });
    $('#' + form_id + ' textarea').off('focus.status').on('focus.status', function () {
        var input_module = $(this);
        if(input_module.hasClass('readonly') == false){
            input_module.attr('sb_status', 1);
        }
    });
}

//2.提交之前更改input的disable状态,并判断返回是否有修改
function changeInputStatus(form_id) {
    var i = 0;
    $('#' + form_id + ' span.textbox').each(function () { //所有上传到后台的隐藏输入框
        //处理组件下面的input
        var input_module = $(this).prev();  //组件input
        if (input_module.attr('sb_status') != 1) {
            input_module.next().find('input').prop("disabled", true);
        } else {
            input_module.next().find('input').prop("disabled", false);
            i++;
        }
    });

    $('#' + form_id + ' textarea').each(function () {
        var input_module = $(this);
        if (input_module.attr('sb_status') != 1) {
            input_module.prop("disabled", true);
        } else {
            input_module.prop("disabled", false);
            i++;
        }
    });
    if (i >= 1) {
        return true;
    } else {
        console.log('未能获取一个修改项');
        return false;
    }
}
//3.未作任何修改还原input状态
function returnInputStatus(form_id){
    $('#' + form_id + ' span.textbox').each(function () { //所有上传到后台的隐藏输入框
        var input_module = $(this).prev();  //组件input
        input_module.next().find('input').prop("disabled", false);
    });
    $('#' + form_id + ' textarea').each(function () {
        var input_module = $(this)  //组件input
        input_module.prop("disabled", false);
    });
}

/*combobox下拉菜单中,只显示中文描述,不显示代码
 * 1.combox_id : combobox组件ID
 * */
function setComboxOnlyText(combox_id) {
    $('#' + combox_id).combobox({
        formatter: function (row) {
            var opts = $(this).combobox('options');
            return row[opts.textField];
        }
    });
}
/*使用url弹框中的页面关闭方法
 * 1.dialog_id:打开窗口的dialogDIV的id
 * 2.msg:关闭后的提示信息
 * 3.fn_name:关闭后执行父框架中函数名
 * */
function closeWindow(dialog_id, msg, fn_name) {
    if (msg) {
        window.parent.$.messager.show({
            title: '提示',
            msg: msg
        });
    }
    if (fn_name) {
        window.parent.return_fn[fn_name]();
    }
    window.parent.$('#' + dialog_id, window.parent.document).dialog('close');
}

//获取对象实例属性的个数
function countObj(obj) {
    var count = 0;
    for (var property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            count++;
        }
    }
    return count;
}

//更新照片src
function updatePicUrl(img_id, src, default_src) {
    $('#' + img_id).prop('src', src).on('error', function () {
        if (default_src) {
            $(this).prop('src', default_src);
        } else {
            alert('请正确填写默认照片路径');
        }
    });
}


/***以下为巡逻盘查获取封面和最后上传图片的方法***/


/**
 * 获取封面图片
 */
function getFmImage(lyid, lybm, add_btn, manage_btn) {
    $.ajax({
        url: basePath + '/zpfjFjxxb/queryList',
        type: 'post',
        dataType: 'json',
        data: {
            lyid: lyid,
            lybm: lybm,
            sffm: '1',
            page: 1,
            rows: 1
        },
        success: function (json) {
            //console.log(json);
            var data = json.rows;
            if (data.length > 0) {
                var src = 'data:image/jpeg;base64,' + data[0]['slt'];
                updatePicUrl('info_pic', src, basePath + '/images/xlpc/person_default.jpg');
                if (add_btn) {
                    add_btn.css('display', 'none');
                }
                if (manage_btn) {
                    manage_btn.css('display', 'block');
                }
            } else {
                getLastUploadImage(lyid, lybm, add_btn, manage_btn);
            }

        },
        error: function () {
            console.log('getSLTInfo ajax err');
        }
    });
}

/**
 * 获取最后上传的图片
 */
function getLastUploadImage(lyid, lybm, add_btn, manage_btn) {
    $.ajax({
        url: basePath + '/zpfjFjxxb/queryList',
        type: 'post',
        dataType: 'json',
        data: {
            lyid: lyid,
            lybm: lybm,
            page: 1,
            rows: 1
        },
        success: function (json) {
            var data = json.rows;
            if (data.length > 0) {
                var src = 'data:image/jpeg;base64,' + data[0]['slt'];
                updatePicUrl('info_pic', src, basePath + '/images/xlpc/person_default.jpg');
                if (add_btn) {
                    add_btn.css('display', 'none');
                }
                if (manage_btn) {
                    manage_btn.css('display', 'block');
                }
            }
        },
        error: function () {
            console.log('getSLTInfo ajax err');
        }
    });
}
//刷新token,防止重复提交
function resetToken() {
    $.ajax({
        url: basePath + '/submitToken/new',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            if (json.token) {
                $("#token").val(json.token);
            }
        },
        error: function () {
            console.log('token reset error!');
        }
    });
}

//combobox下拉显示,只显示textValue
//页面直接引用,并在组件中添加show-text样式
function comboboxShowText(){
    $('.show-text').combobox({
        formatter: function(row){
            var opts = $(this).combobox('options');
            return row[opts.textField];
        }
    });
}
/*统一获取组件的值
 * 1.input:组件对象
 * 2.input_type:组件类型
 * 3.multiple:是否获取去多选值数组结果
 * */
function getInputValue(input,input_type,multiple){
    if(input_type == 'textbox'){
        return input.textbox('getValue');
    }else if(input_type == 'datebox'){
        return input.val();
        //return input.datebox('getValue');
    }else if(input_type == 'combobox'){
        if(multiple){
            return input.combobox('getValues');
        }else{
            return input.combobox('getValue');
        }
    }else if(input_type == 'combotree'){
        if(multiple){
            return input.combobox('getValues');
        }else{
            return input.combobox('getValue');
        }
    }else{
        alert('请输入正确的组件类型');
    }
}

//批量清除组件数据
function clearInput(input_class){
    $('.Wdate').val('');
    $('.'+input_class).each(function(){
        var _this = $(this);
        try{
            _this.combobox('setValue','');
            _this.combobox('select','');
        }catch(e){
            try{
                _this.textbox('setValue','');
            }catch(e){
                try{
                    _this.datebox('setValue','');
                }catch(e){
                    try{
                        _this.combotree('setValue','');
                    }catch(e){
                        try{
                            _this.validate('setValue','');
                        }catch(e){
                            _this.val('');
                        }
                    }
                }
            }
        }
    })
}

//设置组件的值
function setInputValue($input,val){
    try{
        $input.combobox('setValue',val);
        $input.combobox('select',val);
    }catch(e){
        try{
            $input.textbox('setValue',val);
        }catch(e){
            try{
                $input.datebox('setValue',val);
            }catch(e){
                try{
                    $input.combotree('setValue',val);
                }catch(e){
                    try{
                        $input.validate('setValue',val);
                    }catch(e){
                        $input.val(val);
                    }
                }
            }
        }
    }
}

//combobox自动填值
function comboAutoComplete(combobox_id,url){
    var _combobox = $('#'+combobox_id);
    $.ajax({
        url : url,
        type:'get',
        dataType:'json',
        success : function(data){
            if(data.length === 1){
                _combobox.combobox('select',data[0]['id']);
            }
        }
    });
}

//html页面参数获取
function getParamLinkUrl() {
    var pathObj = {};
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        var arrSource = decodeURI(this.location.search).substring(1, this.location.search.length).split("&");

        for(var i=0;i<arrSource.length;i++){
            var paramName = arrSource[i].split("=")[0];//参数名称
            var paramVal = arrSource[i].split("=")[1];//参数值
            pathObj[paramName] = paramVal;
        }
    }
    return pathObj;
}

//获取当前location对象
function getThisLocationObj(){
    var locaObj = location;
    var locaTmp = {
        hash:locaObj.hash,//锚点
        host:locaObj.host,//主机
        hostname:locaObj.hostname,//域名
        href: locaObj.href,//url字符串
        origin: locaObj.origin,//完整域名
        pathname : locaObj.pathname,//参数(查询)部分,
        port: locaObj.port,//端口
        protocol: locaObj.protocol,//协议
        proname: locaObj.pathname.substr(0,locaObj.pathname.substr(1).indexOf("/")+1)//项目名称
    };

    return locaTmp;
}

//获取当前时间并格式化为'yyyy-MM-dd HH:mm:ss'
function getCurrentTime(){
    var myDate = new Date();
    var yyyy = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var MM = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
    var dd = myDate.getDate();        //获取当前日(1-31)
    var HH = myDate.getHours();       //获取当前小时数(0-23)
    var mm = myDate.getMinutes();     //获取当前分钟数(0-59)
    var ss = myDate.getSeconds();     //获取当前秒数(0-59)
    if(MM < 10) MM = '0' + MM;
    if(dd < 10) dd = '0' + dd;
    if(HH < 10) HH = '0' + HH;
    if(mm < 10) mm = '0' + mm;
    if(ss < 10) ss = '0' + ss;
    return yyyy+'-'+MM+'-'+dd+' '+HH+':'+mm+':'+ss;
}

//获取sessionbean
function getSessionBean(){
    var sessionBean = null;
    $.ajax({
        url: pathConfig.managePath+'/api/userLogin/getSetuSession',
        type: 'get',
        dataType: 'json',
        xhrFields: {withCredentials: true},
        crossDomain: true,
        async: false,
        success: function(json){
            sessionBean = json.sessionBean;
            console.log('sessionbean:',json);
        }
    });
    return sessionBean;
}

/**
 * 打开帮助文档的页面
 * @param tag_id 放置帮助链接的DIV的ID
 * @param type 帮助文档类型
 */
function openHelpWindow(tag_id,type){
	$.ajax({
		url : managerPath+'/api/sysXtcsGlobal/queryPage',
		type : 'post',
		dataType : 'json',
		xhrFields:{withCredentials:true},
		crossDomain:true,
		data :{
			cslb : '13',
			csmc :'helpUrlAry'
		},
		success : function(data){
			if(data && data.length>0){
				var csz=data[0].csz;
				var json = eval('(' + csz + ')');
				var fileUrl = json[type];
				if(fileUrl)
					$("#"+tag_id).html('<a href="'+fileUrl+'" target="_blank"><i class="fa fa-question-circle"></i><span>帮助</span></a>');
			}
		},
		error:function(e){
			
		}
	});
}

//1.绑定storage事件函数
function onStorage(fn){
    localStorage.setItem('storageStatus','true');
    $(window).off('storage').on('storage',function(){
        if(typeof fn == 'function'){
            fn();
            $(window).off('storage');
            localStorage.setItem('storageStatus','true');
        }else{
            alert('onStorage的参数不合法,请传递回调函数.');
        }
    });
}
//2.改变storage的状态
function changeStorage(){
    localStorage.setItem('storageStatus','false');
}

/**
 * wdate时间控件内容校验
 * @param obj:当前对象this
 */
function wdateValidate(obj){
    var $this = $(obj);
    $this.validatebox();
}
