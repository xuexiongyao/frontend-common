/**
 * Created by christ on 2016/11/3.
 * description：法律文书前端输入控件easyui处理js文件
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
        var isTrue = true;//是否必填

        if (annotation) {
            var funName = annotation.substring(annotation.indexOf('(') + 1, annotation.indexOf(')')); //方法名称
            var params = annotation.substring(annotation.indexOf('[') + 1, annotation.indexOf(']')); //参数
            var editAttr = annotation.substring(annotation.indexOf('/') + 1, annotation.lastIndexOf('/')); //编辑状态

            //必填项的判断
            if(editAttr && editAttr !='REPLACE'){
                if (editAttr == 'EDIT_N'){
                    isTrue = false;
                }else{
                    isTrue = true;
                }
            }

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
                    required: isTrue, showText: true, valueField: 'id', textField: 'text', method: 'get',
                    onChange: function (newValue, oldValue) {
                        if (newValue) {
                            var $this = $(this);
                            var className = $this.attr('textboxname');//组件class name值
                            var val = $this.next().find('input:hidden').val();
                            if (val && bm) {
                                if (val && bm) {
                                    if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                        flwsLdXxfy(bm, className, val, 'combobox');
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
                            required: isTrue, showText: true, valueField: 'id', textField: 'text', method: 'get',
                            onChange: function (newValue, oldValue) {
                                if (newValue) {
                                    var $this = $(this);
                                    var className = $this.attr('textboxname');//组件class name值
                                    var val = $this.next().find('input:hidden').val();
                                    if (val && bm) {
                                        if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                            flwsLdXxfy(bm, className, val, 'combobox');
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
                    required: isTrue,
                    onChange: function (newValue, oldValue) {
                        if (newValue) {
                            var $this = $(this);
                            var className = $this.attr('textboxname');//组件class name值
                            var val = $this.next().find('input:hidden').val();
                            if (val && bm) {
                                if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(bm, className, val, 'combotree');
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
                        required: isTrue,
                        onChange: function (newValue, oldValue) {
                            if (newValue && bm) {
                                var $this = $(this);
                                var className = $this.attr('textboxname');//组件class name值
                                if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(bm, className, newValue, 'textbox');
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
                                required: isTrue,
                                onChange: function (newValue, oldValue) {
                                    //输入框值得处理
                                    var iptVal = Number(newValue);//输入框的值
                                    var $this = $(this);
                                    var className = $this.attr('textboxname');//组件class name值
                                    if (!isNaN(iptVal) && bm) {
                                        var chNum = NumberToChinese(iptVal);//转化之后的汉字
                                        $this.textbox({value: chNum});
                                        if (!DATA.FLWS[bm].flwsData.switchVersion) {
                                            flwsLdXxfy(bm, className, chNum, 'textbox');
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
                                required: isTrue,
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
                                            flwsLdXxfy(bm, className, chNum, 'textbox');
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
                                    flwsLdXxfy(bm, className, val, 'Wdate');
                                }
                            });
                            break;
                        case 'DATETIME':
                            $(ipts[i]).on('blur', function () {
                                var $this = $(this);
                                var val = $this.val();
                                var className = $this.attr('name');//组件class name值
                                if (bm && !DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(bm, className, val, 'Wdate');
                                }
                            });
                            break;
                    }
                    var validateboxObj = {
                        required: isTrue
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
 * @param bm 法律文书编码
 * @param className 当前操作的class name
 * @param vals 当前操作的输入框的值
 * @param funName 当前操作的输入框类型
 */
function flwsLdXxfy(bm, className, vals, funName) {
    var ipts = $('#flws_cl_area_'+ bm +' .panel .panel-body form a');
    for (var i = 0; i < ipts.length; i++) {
        if (funName == 'textbox') {
            // $(ipts[i]).find('.' + className).textbox({value: vals});
            $(ipts[i]).find('.' + className).textbox('setValue', vals);
        } else if (funName == 'combobox') {
            $(ipts[i]).find('.' + className).combobox({value: vals});
            // $(ipts[i]).find('.' + className).combobox('setValue', vals);
        } else if (funName == 'combotree') {
            $(ipts[i]).find('.' + className).combotree({value: vals});
            // $(ipts[i]).find('.' + className).combotree('setValue', vals);
        } else if (funName == 'validatebox' || funName == 'Wdate') {
            $(ipts[i]).find('.' + className).val(vals).validatebox();
        }
    }
}
