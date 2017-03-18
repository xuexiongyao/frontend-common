/**
 * Created by christ on 2017/3/18.
 */

/**
 * 两个数组比较去重
 * @param a 数组a
 * @param b 数组b
 */
function uniqueTwoArray(a,b){
    var tempArray = [];//临时数组
    var resultArray = [];//结果数组

    for (var i = 0; i < a.length; i++) {
        tempArray[a[i]] = true;
    }

    for (var j = 0; j < b.length; j++) {
        if (!tempArray[b[j]]) {
            resultArray.push(b[j]);
        }
    }
    return resultArray;
}

/**
 * 新构造一个数组
 * @param a 数组
 * @param p 参数
 */
function newArray(a,p){
    var temp = [];
    for(var i=0;i<a.length;i++){
        temp.push($(a[i]).attr(p))
    }
    return temp;
}

/**
 * 新构造一个数组
 * @param isEdit 是否可编辑
 * @param _this 当前dom对象
 */
function editChange(isEdit,_this){
    if(isEdit){
        var annotation = _this.parent().attr('annotation');//annotation值
        var name = _this.parent().attr('name');//name的值
        if(annotation){
            var textStyle = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
            var dictStyle = annotation.substring(annotation.indexOf('{') + 1, annotation.indexOf('}'));
            var treeStyle = annotation.substring(annotation.indexOf('%') + 1, annotation.lastIndexOf('%'));
            if(textStyle){//輸入框類型
                if(textStyle == 'TEXT' || textStyle == 'TEXTAREA_R' || textStyle == 'TEXTAREA'){//文本框
                    _this.textbox({
                        readonly: false,
                        required: true
                    }).next().removeClass('clear-border');
                }else if(textStyle == 'DATE'){//日期框
                    _this.removeAttr('disabled');
                    _this.css({'border':'1px solid #ccc','background':'url('+pathConfig.staticPath+'/common/datepicker/skin/christ/datePicker.png) no-repeat right'});
                    _this.validatebox({required:true});
                }
            }else if(dictStyle){//字典類型
                _this.combobox({
                    readonly: false,
                    required: true
                }).next().removeClass('clear-border');
            }else if(treeStyle){//树類型
                _this.combotree({
                    readonly: false,
                    required: true
                }).next().removeClass('clear-border');
            }else{//其他類型

            }
        }
    }else{
        var annotation = _this.parent().attr('annotation');//annotation值
        var name = _this.parent().attr('name');//name的值
        if(annotation){
            var textStyle = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
            var dictStyle = annotation.substring(annotation.indexOf('{') + 1, annotation.indexOf('}'));
            var treeStyle = annotation.substring(annotation.indexOf('%') + 1, annotation.lastIndexOf('%'));
            if(textStyle){//輸入框類型
                if(textStyle == 'TEXT' || textStyle == 'TEXTAREA_R' || textStyle == 'TEXTAREA'){//文本框
                    _this.textbox({
                        value:'',
                        readonly: true,
                        required: false
                    }).next().addClass('clear-border');
                }else if(textStyle == 'DATE'){//日期框
                    _this.val('').attr('disabled','disabled');
                    _this.css({'border':'0','background':'#fff'});
                    _this.validatebox({required:false});
                }
            }else if(dictStyle){//字典類型
                _this.combobox({
                    value:'',
                    readonly: true,
                    required: false
                }).next().addClass('clear-border');
            }else if(treeStyle){//树類型
                _this.combotree({
                    value:'',
                    readonly: true,
                    required: false
                }).next().addClass('clear-border');
            }else{//其他類型

            }
        }
    }
}

/**
 * checkbox复选框
 * @param isCheckOnly 复选框是否单选
 */
//checkbox复选框
function checkboxClick(isCheckOnly) {
    var $checkbox = $("input[type='checkbox']");
    $.each($checkbox,function (i,o) {
        $(o).off('click').on('click',function (e) {
            var $this = $(this);
            var cascade = $this.attr('cascade');//checkbox的级联属性
            var isCheck = $this.prop('checked');//是否勾选

            //当前复选框checkbox下的相邻input输入框
            var cbIpt = $this.parent().parent().parent().parent().parent().find("input[type='text'][cascade^='"+cascade+"-ipt']");
            //当前复选框checkbox下的单选框radio
            var cbRadio = $this.parent().parent().parent().parent().parent().find("input[type='radio'][cascade^='"+cascade+"-radio']");
            //当前复选框checkbox下的单选框radio下的input输入框
            var cbRadioIpt = $this.parent().parent().parent().parent().parent().find("input[type='text'][cascade^='"+cascade+"-radio'][cascade*='-ipt-']");

            //所有的复选框
            var allCheckbox = $this.parent().parent().parent().parent().parent().find("input[type='checkbox'][cascade^='cb']");
            var upCheckbox = newArray(allCheckbox,'cascade');
            var lowCheckbox = newArray($this,'cascade');

            //筛选后checkbox的属性值
            var uniqueCascadeCb = uniqueTwoArray(lowCheckbox,upCheckbox);

            //单选框radio的点击调用
            radioClick(cascade);

            if(isCheck){//选中
                if(isCheckOnly){//单选处理
                    //其他checkbox框地处理
                    for(var n=0;n<uniqueCascadeCb.length;n++){
                        var otherCb = $this.parent().parent().parent().parent().parent().find("input[type='checkbox'][cascade='"+uniqueCascadeCb[n]+"']");
                        otherCb.prop('checked',false);

                        var otherCbIpt = $this.parent().parent().parent().parent().parent().find("input[type='text'][cascade^='"+uniqueCascadeCb[n]+"-ipt']");
                        var otherCbRadio = $this.parent().parent().parent().parent().parent().find("input[type='radio'][cascade^='"+uniqueCascadeCb[n]+"-radio']");
                        var otherCbRadioIpt = $this.parent().parent().parent().parent().parent().find("input[type='text'][cascade^='"+uniqueCascadeCb[n]+"-radio'][cascade*='-ipt-']");

                        //输入框的处理
                        $(otherCbIpt).each(function (iptI,iptO) {
                            editChange(false,$(iptO))
                        });

                        //输入框下的单选框radio
                        $(otherCbRadio).each(function (radioI,radioO) {
                            $(radioO).prop('checked',false).attr('disabled','disabled');
                        });

                        //当前checkbox框下radio框下的input输入框的处理
                        $(otherCbRadioIpt).each(function (cbRadioIptI,cbRadioIptO) {
                            editChange(false,$(cbRadioIptO))
                        })
                    }
                }
                //输入框的处理
                $(cbIpt).each(function (iptI,iptO) {
                    editChange(true,$(iptO))
                });
                //输入框下的单选框radio
                $(cbRadio).each(function (radioI,radioO) {
                    $(radioO).removeAttr('disabled');
                });

            }else{//取消勾选
                //输入框的处理
                $(cbIpt).each(function (iptI,iptO) {
                    editChange(false,$(iptO))
                });

                //输入框下的单选框radio
                $(cbRadio).each(function (radioI,radioO) {
                    $(radioO).prop('checked',false).attr('disabled','disabled');
                });

                //当前checkbox框下radio框下的input输入框的处理
                $(cbRadioIpt).each(function (cbRadioIptI,cbRadioIptO) {
                    editChange(false,$(cbRadioIptO))
                })
            }
        })
    });
}

/**
 * radio单选框的勾选
 * @param checkAttr checkbox的属性名
 */
function radioClick(checkAttr){
    var $radio = $("input[type='radio'][cascade^='"+checkAttr+"-radio']");
    $.each($radio,function (i,o) {
        $(o).off('click').on('click',function (e) {
            var $this = $(this);
            var cascade = $this.attr('cascade');//radio的级联属性
            var isCheck = $this.prop('checked');//是否勾选

            var cbRadio = cascade.substring(0,cascade.lastIndexOf('-'));

            //当前radio单选框下的input输入框
            var cbRadioIpt = $this.parent().parent().parent().parent().parent().find("input[type='text'][cascade^='"+cascade+"'][cascade*='-ipt-']");
            var lowI = newArray(cbRadioIpt,'cascade');

            //所有radio单选框下的input输入框
            var allCbRadioIpt = $this.parent().parent().parent().parent().parent().find("input[type='text'][cascade^='"+cbRadio+"'][cascade*='-ipt-']");
            var upI = newArray(allCbRadioIpt,'cascade');

            //筛选后input的属性值
            var uniqueCascade = uniqueTwoArray(lowI,upI);

            if(isCheck){
                //输入框的处理
                $(cbRadioIpt).each(function (iptI,iptO) {
                    editChange(true,$(iptO))
                });
                //其他radio下input框地处理
                for(var n=0;n<uniqueCascade.length;n++){
                    //其他输入框
                    var otherIpt = $this.parent().parent().parent().parent().parent().find("input[type='text'][cascade='"+uniqueCascade[n]+"']");
                    editChange(false,otherIpt)
                }
            }
        })
    });
}