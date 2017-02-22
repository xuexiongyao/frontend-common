/**
 * Created by christ on 2016/11/3.
 */
/**
 * easyui初始化组件
 */
function easyuiReset(ipts, isAdd, bm) {
    var urlAttr = {};
    if (DATA.URLATTR != undefined) {
        urlAttr = DATA.URLATTR;
    }
    for (var i = 0; i < ipts.length; i++) {
        var parentA = $(ipts[i]).parent();//a标签
        var annotation = parentA.attr('annotation');//annotation的值
        var aName = parentA.attr('name');//name的值

        if (annotation) {
            var funName = annotation.substring(annotation.indexOf('(') + 1, annotation.indexOf(')')); //方法名称
            var params = annotation.substring(annotation.indexOf('[') + 1, annotation.indexOf(']')); //参数

            if (isAdd) {//新增页面
                if (params.length > 0 && funName.length > 0) {
                    $(ipts[i]).addClass(params.toUpperCase());
                } else {
                    $(ipts[i]).addClass(aName);
                }
            } else {//编辑页面
                $(ipts[i]).addClass(aName);
            }

            if ($(ipts[i]).hasClass('easyuicombobox')) {//combobox字典
                var dictName = annotation.substring(annotation.indexOf('{') + 1, annotation.indexOf('}')); //字典名称
                var comboboxObj = {
                    required: true, showText: true, valueField: 'id', textField: 'text', method: 'get',
                    onChange: function (newValue, oldValue) {
                        if (newValue) {
                            var $this = $(this);
                            var className = $this.attr('textboxname');//组件class name值
                            var val = $this.next().find('input:hidden').val();
                            if (val && bm) {
                                if (val && bm) {
                                    if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                        flwsLdXxfy(className, val, 'combobox');
                                    }
                                }
                            }
                        }
                    }
                };
                switch (dictName) {
                    case 'TB_ST_BARY': //办案人员
                        comboboxObj.url = pathConfig.basePath + '/api/ajxx/' + DATA.asjbh + '/getBary';
                        comboboxObj.multiple = true;
                        var _comboNode = $(ipts[i]);
                        $(ipts[i]).attr('dicturl', comboboxObj.url);
                        $(ipts[i]).combobox({
                            url: comboboxObj.url, multiple: true,
                            required: true, showText: true, valueField: 'id', textField: 'text', method: 'get',
                            onChange: function (newValue, oldValue) {
                                if (newValue) {
                                    var $this = $(this);
                                    var className = $this.attr('textboxname');//组件class name值
                                    var val = $this.next().find('input:hidden').val();
                                    if (val && bm) {
                                        if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                            flwsLdXxfy(className, val, 'combobox');
                                        }
                                    }
                                }
                            },
                            onHidePanel: function () {
                                var $this = $(this);
                                var getBary = _comboNode.combobox('getValues');
                                if (getBary.length < 2) {
                                    $.messager.confirm('提示信息', '办案民警至少选两名', function (r) {
                                        if (r) {
                                            _comboNode.combobox('clear');
                                            _comboNode.next().find('input').focus();
                                        }
                                    });
                                }
                            }
                        });
                        break;
                    case 'GB_D_XBDM': //性别
                        var url = pathConfig.mainPath + '/common/dict/GB_D_XBDM.js';
                        comboboxObj.data = flwsDictObj.GB_D_XBDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_LA_FLTKDM': //法律条款
                        var url = pathConfig.mainPath + '/common/dict/BD_D_LA_FLTKDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_LA_FLTKDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_SFDM': //是否
                        var url = pathConfig.mainPath + '/common/dict/BD_D_SFDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_SFDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_QBHS_QBHSLXDM'://取保候审类型
                        var url = pathConfig.mainPath + '/common/dict/BD_D_QBHS_QBHSLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_QBHS_QBHSLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'KX_D_CYZJDM'://成员证件
                        var url = pathConfig.mainPath + '/common/dict/KX_D_CYZJDM.js';
                        comboboxObj.data = flwsDictObj.KX_D_CYZJDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BYLA_TZDXDM'://不予立案通知对象
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BYLA_TZDXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BYLA_TZDXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BYLA_SQFYQXDM'://不予立案申请复议期限
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BYLA_SQFYQXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BYLA_SQFYQXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BYLA_TCLXDM'://不予立案提出类型
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BYLA_TCLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BYLA_TCLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_TGFLYZ_FLTKDM'://提供法律援助法律条款
                        var url = pathConfig.mainPath + '/common/dict/BD_D_TGFLYZ_FLTKDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_TGFLYZ_FLTKDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_TGFLYZ_ZXDDLXDM'://提供法律援助
                        var url = pathConfig.mainPath + '/common/dict/BD_D_TGFLYZ_ZXDDLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_TGFLYZ_ZXDDLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BZYHJ_FZLXDM'://不准予会见犯罪类型
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BZYHJ_FZLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BZYHJ_FZLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_DBZ_PZJDDM'://批准决定
                        var url = pathConfig.mainPath + '/common/dict/BD_D_DBZ_PZJDDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_DBZ_PZJDDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_JSJZ_JSJZHZDJS'://监视居住
                        var url = pathConfig.mainPath + '/common/dict/BD_D_JSJZ_JSJZHZDJS.js';
                        comboboxObj.data = flwsDictObj.BD_D_JSJZ_JSJZHZDJS;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'GA_D_XSAJRSQZCSDM'://强制措施
                        var url = pathConfig.mainPath + '/common/dict/GA_D_XSAJRSQZCSDM.js';
                        comboboxObj.data = flwsDictObj.GA_D_XSAJRSQZCSDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BYSFBG_GRHDWLXDM'://个人或单位
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BYSFBG_GRHDWLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BYSFBG_GRHDWLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BYSFBG_JYHSQLXDM'://建议或申请
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BYSFBG_JYHSQLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BYSFBG_JYHSQLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BYSFBG_SFHBGQZCSLBDM'://是否会变更强制措施类别
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BYSFBG_SFHBGQZCSLBDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BYSFBG_SFHBGQZCSLBDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'GA_D_RSQZCSDM'://强制措施
                        var url = pathConfig.mainPath + '/common/dict/GA_D_RSQZCSDM.js';
                        comboboxObj.data = flwsDictObj.GA_D_RSQZCSDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_CX_FLTK'://传讯法律条款
                        var url = pathConfig.mainPath + '/common/dict/BD_D_CX_FLTK.js';
                        comboboxObj.data = flwsDictObj.BD_D_CX_FLTK;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_JDYJ_ZPPQLXDM'://指派类型
                        var url = pathConfig.mainPath + '/common/dict/BD_D_JDYJ_ZPPQLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_JDYJ_ZPPQLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_JSZC_CSZLDM'://措施种类
                        var url = pathConfig.mainPath + '/common/dict/BD_D_JSZC_CSZLDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_JSZC_CSZLDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_XZDJCC_FLTKDM'://协助冻结
                        var url = pathConfig.mainPath + '/common/dict/BD_D_XZDJCC_FLTKDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_XZDJCC_FLTKDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BGJYQX_PZHJDJGDM'://
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BGJYQX_PZHJDJGDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BGJYQX_PZHJDJGDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BGJYQX_JYQXBGYYDM'://
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BGJYQX_JYQXBGYYDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BGJYQX_JYQXBGYYDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BGJYQX_PZHJDLXDM'://
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BGJYQX_PZHJDLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BGJYQX_PZHJDLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_BAXZ_QWWTDM'://前往委托
                        var url = pathConfig.mainPath + '/common/dict/BD_D_BAXZ_QWWTDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_BAXZ_QWWTDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                }
            } else if ($(ipts[i]).hasClass('easyuicombotree')) {//combotree字典
                var dictTree = annotation.substring(annotation.indexOf('%') + 1, annotation.lastIndexOf('%')); //combotree字典名称
                var combotreeObj = {
                    showText: true,
                    onlyLeaf: true,
                    dataFilter: '',
                    method: 'get',
                    editable: false,
                    multiple: false,
                    lines: true,
                    required: true,
                    onChange: function (newValue, oldValue) {
                        if (newValue) {
                            var $this = $(this);
                            var className = $this.attr('textboxname');//组件class name值
                            var val = $this.next().find('input:hidden').val();
                            if (val && bm) {
                                if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(className, val, 'combotree');
                                }
                            }
                        }
                    }
                };
                switch (dictTree) {
                    case 'KX_D_ZYLBDM': //职业类别代码
                        var url = pathConfig.mainPath + '/common/dict/KX_D_ZYLBDM.js';
                        combotreeObj.data = flwsTreeDictObj.KX_D_ZYLBDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combotree(combotreeObj);
                        break;
                    case 'BD_D_GXDM': //关系树
                        var url = pathConfig.mainPath + '/common/dict/BD_D_GXDM.js';
                        combotreeObj.data = flwsTreeDictObj.BD_D_GXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combotree(combotreeObj);
                        break;
                }
            } else if ($(ipts[i]).hasClass('easyuitextbox')) {//输入框
                if (annotation) {
                    var textStyle = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>')); //文本框类型
                    var textboxObj = {
                        required: true,
                        onChange: function (newValue, oldValue) {
                            if (newValue && bm) {
                                var $this = $(this);
                                var className = $this.attr('textboxname');//组件class name值
                                if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(className, newValue, 'textbox');
                                }
                            }
                        }
                    };
                    switch (textStyle) {
                        case 'TEXT': //普通文本
                            $(ipts[i]).textbox(textboxObj);
                            break;
                        case 'NUMBER': //数字输入框
                            $(ipts[i]).textbox(textboxObj);
                            break;
                        case 'TEXTAREA': //换行文本不换行
                            $(ipts[i]).textbox(textboxObj);
                            break;
                        case 'TEXTAREA_R': //换行文本不换行
                            $(ipts[i]).textbox(textboxObj);
                            break;
                        case 'NUMBERCN'://数字转大写
                            $(ipts[i]).textbox({
                                required: true,
                                onChange: function (newValue, oldValue) {
                                    //输入框值得处理
                                    var iptVal = Number(newValue);//输入框的值
                                    var $this = $(this);
                                    var className = $this.attr('textboxname');//组件class name值
                                    if (!isNaN(iptVal) && bm) {
                                        var chNum = NumberToChinese(iptVal);//转化之后的汉字
                                        $this.textbox({value: chNum});
                                        if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                            flwsLdXxfy(className, chNum, 'textbox');
                                        }
                                    } else {
                                        $.messager.alert({
                                            title: '提示',
                                            msg: '只能输入数字',
                                            icon: 'warning',
                                            fn: function () {
                                                $this.textbox({value: ''})
                                            }
                                        })
                                    }
                                }
                            });
                            break;
                        case 'MONEY'://金额转大写
                            $(ipts[i]).textbox({
                                required: true,
                                onChange: function (newValue, oldValue) {
                                    //输入框值得处理
                                    var iptVal = Number(newValue);//输入框的值
                                    var $this = $(this);
                                    var className = $this.attr('textboxname');//组件class name值
                                    if (!isNaN(iptVal) && bm) {
                                        $this.parent().attr('money', newValue);
                                        var chNum = Arabia_to_Chinese(newValue);//转化之后的汉字
                                        $this.textbox({value: chNum});
                                        if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                            flwsLdXxfy(className, chNum, 'textbox');
                                        }
                                    } else {
                                        $.messager.alert({
                                            title: '提示',
                                            msg: '只能输入数字',
                                            icon: 'warning',
                                            fn: function () {
                                                $this.textbox({value: ''})
                                            }
                                        })
                                    }
                                }
                            });
                            break;
                        case 'TEXTBOX'://文本框  换行文本
                            var strTextbox = '<textarea class="easyui-validatebox easyuivalidatebox TEXTBOX ' + aName + '" name="' + aName + '" style="text-align: start;hyphenate: auto;font-family: 仿宋_GB2312;font-size: 16pt;letter-spacing: 0;width: 99%;min-height: 300px;resize: none;"></textarea>';
                            parentA.html(strTextbox);
                            replaceEnter();//textarea框的处理
                            parentA.find('textarea').validatebox({
                                required: false
                            });
                            break;
                        case 'CHECKBOX'://复选框
                            break;
                        case 'RADIOBOX'://单选框
                            break;
                    }
                }
            } else if ($(ipts[i]).hasClass('easyuivalidatebox')) {//输入框
                if (annotation) {
                    var textStyle = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>')); //文本框类型
                    switch (textStyle) {
                        case 'DATE':
                            $(ipts[i]).on('blur', function () {
                                var $this = $(this);
                                var val = $this.val();
                                var className = $this.attr('name');//组件class name值
                                if (bm && !DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(className, val, 'Wdate');
                                }
                            });
                            break;
                        case 'DATETIME':
                            $(ipts[i]).on('blur', function () {
                                var $this = $(this);
                                var val = $this.val();
                                var className = $this.attr('name');//组件class name值
                                if (bm && !DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(className, val, 'Wdate');
                                }
                            });
                            break;
                    }
                    var validateboxObj = {
                        required: true
                    };
                    $(ipts[i]).validatebox(validateboxObj);
                }
            }

            //同一个方法请求一次
            if (funName) {
                if (urlAttr[funName] == undefined) {
                    urlAttr[funName] = new Array();
                    urlAttr[funName].push(params);
                } else {
                    urlAttr[funName].push(params);
                }
                DATA.URLATTR = hashObjUnique(urlAttr);

            }

        }
    }
    editSwitch(false, 'clear-border', 'iptreadonly');//清除easyui样式
    clickShowPanel();
}

/**
 * 法律文书多级联动
 * @param className 当前操作的class name
 * @param vals 当前操作的输入框的值
 * @param funName 当前操作的输入框类型
 */
function flwsLdXxfy(className, vals, funName) {
    var ipts = $('.flws_cl_area .panel .panel-body form');
    for (var i = 0; i < ipts.length; i++) {
        if (funName == 'textbox') {
            $(ipts[i]).find('.' + className).textbox({value: vals});
            $(ipts[i]).find('.' + className).textbox('setValue', vals);
        } else if (funName == 'combobox') {
            $(ipts[i]).find('.' + className).combobox({value: vals});
        } else if (funName == 'combotree') {
            $(ipts[i]).find('.' + className).combotree({value: vals});
        } else if (funName == 'validatebox' || funName == 'Wdate') {
            $(ipts[i]).find('.' + className).val(vals).validatebox();
        }
    }
}

/**********************接口信息复用函数****************************/
/**
 * 呈请报告  内容信息接口请求数据复用
 */
function cqbgNrXxfy() {
    var textareaVal = $("#cqbg_main_con form textarea").val();//textarea默认值
    var cqbgxxTmpObj = {};
    if (textareaVal) {
        var cqbgDataArr = textareaVal.match(/\((.*?)\]/g);
        //TODO hash结构数据有问题，需要转化为数组
        if (cqbgDataArr) {
            //构建呈请报告数据
            for (var i = 0; i < cqbgDataArr.length; i++) {
                var a = cqbgDataArr[i];
                var dataTmp = {
                    funName: a.substring(a.indexOf('(') + 1, a.indexOf(')')),//方法名称
                    paramName: a.substring(a.indexOf('[') + 1, a.indexOf(']'))//参数名称
                };
                cqbgxxTmpObj[dataTmp.funName] = dataTmp.paramName;
            }

            //数据填写
            for (var k1 in DATA.publicJkXx) {
                for (var k2 in cqbgxxTmpObj) {
                    var key = cqbgxxTmpObj[k2];//参数名称
                    var val = DATA.publicJkXx[k1][key];//参数对应的值
                    var strVal = '(' + k2 + ')[' + key + ']';//textarea中对应的字符串

                    if (k1 == k2) {
                        if (val == undefined || val == null || val == '') {//返回数据为空
                            textareaVal = textareaVal.replace(strVal, '');
                            console.log(key + '为空');
                        } else {//textarea中对应的字符串替换赋值
                            textareaVal = textareaVal.replace(strVal, val);
                        }
                    } else {
                        textareaVal = textareaVal.replace(strVal, '');
                    }

                    $("#cqbg_main_con form textarea").val(textareaVal);
                }
            }
        }
    }
}

/**
 * 法律文书中类呈请报告  内容信息接口请求数据复用
 */
function flwsLsCqbgNrXxfy() {
    var textareaVal = $(".flws_cl_area form textarea").val();//textarea默认值
    var cqbgxxTmpObj = {};
    if (textareaVal) {
        var cqbgDataArr = textareaVal.match(/\((.*?)\]/g);
        if (cqbgDataArr) {
            //构建呈请报告数据
            for (var i = 0; i < cqbgDataArr.length; i++) {
                var a = cqbgDataArr[i];
                var dataTmp = {
                    funName: a.substring(a.indexOf('(') + 1, a.indexOf(')')),//方法名称
                    paramName: a.substring(a.indexOf('[') + 1, a.indexOf(']'))//参数名称
                };
                cqbgxxTmpObj[dataTmp.funName] = dataTmp.paramName;
            }
            //数据填写
            for (var k1 in DATA.publicJkXx) {
                for (var k2 in cqbgxxTmpObj) {
                    var key = cqbgxxTmpObj[k2];//参数名称
                    var val = DATA.publicJkXx[k1][key];//参数对应的值
                    var strVal = '(' + k2 + ')[' + key + ']';//textarea中对应的字符串

                    if (k1 == k2) {
                        if (val == undefined || val == null || val == '') {//返回数据为空
                            textareaVal = textareaVal.replace(strVal, '');
                            console.log(key + '为空');
                        } else {//textarea中对应的字符串替换赋值
                            textareaVal = textareaVal.replace(strVal, val);
                        }
                    } else {
                        textareaVal = textareaVal.replace(strVal, '');
                    }

                    $(".flws_cl_area form textarea").val(textareaVal);
                }
            }
        }
    }
}


/**
 * 呈请报告、法律文书 其他接口信息接口请求数据复用
 */
function cqbgFlwsOtherXxfy() {
    for (var k1 in DATA.publicJkXx) {
        for (var k2 in DATA.URLATTR) {
            for (var i = 0; i < DATA.URLATTR[k2].length; i++) {
                var key = DATA.URLATTR[k2][i];//参数名称
                var val = DATA.publicJkXx[k1][key];//参数值

                if (k1 == k2) {
                    if (k2 == 'BAR02') {//办案人字典处理
                        val = DATA.publicJkXx[k2][0].text;
                    }

                    if (val == undefined || val == '' || val == null) {//返回数据为空
                        console.log(key + '为空');
                    } else {
                        var $node = $(".flws-main-con-r form input." + key);
                        if ($node.hasClass('easyuitextbox')) {
                            $node.textbox({value: val})
                        } else if ($node.hasClass('easyuicombobox')) {
                            $node.combobox({value: val})
                        } else if ($node.hasClass('easyuicombotree')) {
                            $node.combotree({value: val})
                        } else if ($node.hasClass('easyuivalidatebox') || $node.hasClass('Wdate')) {
                            $node.val(val);
                        }
                    }
                }
            }
        }
    }
}


/**
 * 法律文书  犯罪嫌疑人接口信息接口请求数据复用
 */
function fzxyrXxfy(currentXyr, tabId) {
    //loading('open','正在复用嫌疑人信息，请稍等....');
    for (var k in DATA.URLATTR) {
        var data;
        if (k == xyrApiName) {
            data = currentXyr;
            for (var j = 0; j < DATA.URLATTR[k].length; j++) {
                var key = DATA.URLATTR[k][j];//法律文书中对应的组件名字
                if (key) {
                    var val = data[key.toLowerCase()];//嫌疑人数据参数对应的值
                    var $node = $("#flws_cl_area_" + tabId + " form input." + key);
                    if (val == undefined || val == '' || val == null) {//返回数据为空
                        console.log(key + '为空');
                        if ($node.hasClass('easyuitextbox')) {
                            $node.textbox({value: ''})
                        } else if ($node.hasClass('easyuicombobox')) {
                            $node.combobox({value: ''});
                        } else if ($node.hasClass('easyuicombotree')) {
                            $node.combotree({value: ''})
                        } else if ($node.hasClass('easyuivalidatebox') || $node.hasClass('Wdate')) {
                            $node.val('');
                        }
                    } else {
                        if ($node.hasClass('easyuitextbox')) {
                            $node.textbox({value: val})
                        } else if ($node.hasClass('easyuicombobox')) {
                            $node.combobox({value: val});
                        } else if ($node.hasClass('easyuicombotree')) {
                            $node.combotree({value: val})
                        } else if ($node.hasClass('easyuivalidatebox') || $node.hasClass('Wdate')) {
                            $node.val(val);
                        }
                    }
                }
            }
            //loading('close');
        }
    }
    editSwitch(false, 'clear-border', 'iptreadonly');//清除easyui样式
}

function fzxyDxXxfy(currentName, currentValue, tabId) {

    //loading('open','正在复用嫌疑人信息，请稍等....');
    var $node = $("#flws_cl_area_" + tabId + " form input[textboxname='" + currentName + "']");
    if ($node.hasClass('easyuitextbox')) {
        $node.textbox({value: currentValue})
    } else if ($node.hasClass('easyuicombobox')) {
        $node.combobox({value: currentValue});
    } else if ($node.hasClass('easyuicombotree')) {
        $node.combotree({value: currentValue})
    } else if ($node.hasClass('easyuivalidatebox') || $node.hasClass('Wdate')) {
        $node.val(currentValue);
    }
    //editSwitch(false, 'clear-border', 'iptreadonly');//清除easyui样式
}