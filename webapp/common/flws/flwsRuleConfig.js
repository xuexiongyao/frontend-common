/**
 * Created by christ on 2016/11/3.
 * description：法律文书前端输入控件easyui处理js文件
 */
/**
 * easyui初始化组件
 * @param ipts input输入框
 * @param isAdd 是否新增
 * @param bm 文书编码（呈请报告编码/法律文书编码）
 * @param isFlws  是否是法律文书（false---呈请报告；true---法律文书）
 */
function easyuiReset(ipts, isAdd, bm ,isFlws) {
    var urlAttr = {};
    if (DATA.URLATTR != undefined) {
        urlAttr = DATA.URLATTR;
    }
    for (var i = 0; i < ipts.length; i++) {
        var parentA = $(ipts[i]).parent();//a标签
        var annotation = parentA.attr('annotation');//annotation的值
        var aName = parentA.attr('name');//name的值
        var isTrue = false;//是否必填
        var isEdit = true;//是否可编辑

        if (annotation) {
            var funName = annotation.substring(annotation.indexOf('(') + 1, annotation.indexOf(')')); //方法名称
            var params = annotation.substring(annotation.indexOf('[') + 1, annotation.indexOf(']')); //参数
            var editAttr = annotation.substring(annotation.indexOf('/') + 1, annotation.lastIndexOf('/')); //编辑状态

            //是否为必填项的判断
            if(editAttr && editAttr !='REPLACE'){
                if (editAttr == 'EDIT_N'){
                    isTrue = false;
                }else{
                    isTrue = true;
                }
            }else{
                isEdit = false;
            }

            //annotation为中文的判断(行政案件)
            var isChinese = isChineseChar(annotation);
            if(isChinese){
                $(ipts[i]).textbox({value:annotation});
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
                            if (val && bm && isFlws) {
                                if (DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(bm, className, '', val, 'combobox','');
                                }
                            }
                        }
                    }
                };
                switch (dictName) {
                    case 'TB_ST_BARY': //办案人员
                        comboboxObj.url = pathConfig.basePath + '/api/ajxx/' + DATA.asjbh + '/getBary';
                        comboboxObj.multiple = true;
                        $(ipts[i]).attr('dicturl', comboboxObj.url);
                        $(ipts[i]).combobox({
                            url: comboboxObj.url, multiple: true,
                            required: isTrue, showText: true, valueField: 'id', textField: 'text', method: 'get',
                            onChange: function (newValue, oldValue) {
                                if (newValue) {
                                    var $this = $(this);
                                    var className = $this.attr('textboxname');//组件class name值
                                    var val = $this.next().find('input:hidden').val();
                                    if (val && bm && isFlws) {
                                        if (DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion) {
                                            flwsLdXxfy(bm, className, '', val, 'combobox','');
                                        }
                                    }
                                }
                            },
                            onHidePanel: function () {
                                var $this = $(this);
                                var getBary = $this.combobox('getValues');
                                //必须勾选当前登录者
                                var currentUserId = DATA.OWN.userId;//当前登录者用户ID
                                var currentUserName = DATA.OWN.userName;//当前登录者用户姓名
                                var isCheckCurUser = jQuery.inArray(currentUserId,getBary);//是否勾选当前登录者用户
                                if(!isFlws && bm != 'X050028'){
                                    // 行政案件'当场处罚决定书（X050028）'办案民警可以只勾选一个
                                    if(isCheckCurUser == -1 && getBary.length < 2){
                                        alertDiv({
                                            title: '提示信息',
                                            msg: '办案民警至少选两名并且必须勾选当前登录者用户:' + currentUserName,
                                            fn: function () {
                                                $this.combobox('clear');
                                                $this.next().find('input').focus();
                                            }
                                        })
                                    } else if(isCheckCurUser > -1 && getBary.length < 2){
                                        alertDiv({
                                            title: '提示信息',
                                            msg: '办案民警至少选两名',
                                            fn: function () {
                                                $this.combobox('clear');
                                                $this.next().find('input').focus();
                                            }
                                        })
                                    } else if(isCheckCurUser == -1 && getBary.length >= 2){
                                        alertDiv({
                                            title: '提示信息',
                                            msg: '办案民警必须勾选当前登录者用户:'+currentUserName,
                                            fn: function () {
                                                $this.combobox('clear');
                                                $this.next().find('input').focus();
                                            }
                                        })
                                    }
                                }else{
                                    if(isCheckCurUser == -1){
                                        alertDiv({
                                            title: '提示信息',
                                            msg: '办案民警必须勾选当前登录者用户:'+currentUserName,
                                            fn: function () {
                                                $this.combobox('clear');
                                                $this.next().find('input').focus();
                                            }
                                        })
                                    }
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
                    case 'BD_D_JSJZ_FLTK'://监视居住法律条款
                        var url = pathConfig.mainPath + '/common/dict/BD_D_JSJZ_FLTK.js';
                        comboboxObj.data = flwsDictObj.BD_D_JSJZ_FLTK;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_KSSDM'://看守所代码
                        var url = pathConfig.mainPath + '/common/dict/BD_D_KSSDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_KSSDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_WCNRFDDLR_ZRHBHRLXDM':
                        var url = pathConfig.mainPath + '/common/dict/BD_D_WCNRFDDLR_ZRHBHRLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_WCNRFDDLR_ZRHBHRLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_WCNRFDDLR_XWLXDM':
                        var url = pathConfig.mainPath + '/common/dict/BD_D_WCNRFDDLR_XWLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_WCNRFDDLR_XWLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_HJFZXYR_RSCSDM':
                        var url = pathConfig.mainPath + '/common/dict/BD_D_HJFZXYR_RSCSDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_HJFZXYR_RSCSDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_SWTZ_RYJSDM':
                        var url = pathConfig.mainPath + '/common/dict/BD_D_SWTZ_RYJSDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_SWTZ_RYJSDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_ZJBQFLMC':
                        var url = pathConfig.mainPath + '/common/dict/BD_D_ZJBQFLMC.js';
                        comboboxObj.data = flwsDictObj.BD_D_ZJBQFLMC;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_JXFS'://举行方式
                        var url = pathConfig.mainPath + '/common/dict/BD_D_JXFS.js';
                        comboboxObj.data = flwsDictObj.BD_D_JXFS;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_SFTZ_JLDBLXDM'://释放通知逮捕拘留类型代码
                        var url = pathConfig.mainPath + '/common/dict/BD_D_SFTZ_JLDBLXDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_SFTZ_JLDBLXDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_HYZ_SDFSDM'://送达方式
                        var url = pathConfig.mainPath + '/common/dict/BD_D_HYZ_SDFSDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_HYZ_SDFSDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_CX_QZCS':
                        var url = pathConfig.mainPath + '/common/dict/BD_D_CX_QZCS.js';
                        comboboxObj.data = flwsDictObj.BD_D_CX_QZCS;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_HYZ_HYYYDM':
                        var url = pathConfig.mainPath + '/common/dict/BD_D_HYZ_HYYYDM.js';
                        comboboxObj.data = flwsDictObj.BD_D_HYZ_HYYYDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'GB_D_GJHDQDM'://国籍
                        var url = pathConfig.mainPath + '/common/dict/GB_D_GJHDQDM.js';
                        comboboxObj.data = flwsDictObj.GB_D_GJHDQDM;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_CF'://查封
                        var url = pathConfig.mainPath + '/common/dict/BD_D_CF.js';
                        comboboxObj.data = flwsDictObj.BD_D_CF;
                        $(ipts[i]).attr('dicturl', url);
                        $(ipts[i]).combobox(comboboxObj);
                        break;
                    case 'BD_D_KYKL'://扣押
                        var url = pathConfig.mainPath + '/common/dict/BD_D_KYKL.js';
                        comboboxObj.data = flwsDictObj.BD_D_KYKL;
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
                            if (val && bm && isFlws) {
                                if (DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(bm, className, '', val, 'combotree','');
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
                    case 'GA_D_XZAJLBDM': //行政案件类别代码
                        var url = pathConfig.mainPath + '/common/dict/GA_D_XZAJLBDM.js';
                        combotreeObj.data = flwsTreeDictObj.GA_D_XZAJLBDM;
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
                            if (newValue && bm && isFlws) {
                                var $this = $(this);
                                var className = $this.attr('textboxname');//组件class name值
                                if (DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion) {
                                    flwsLdXxfy(bm, className, '', newValue, 'textbox','');
                                }
                            }
                        }
                    };
                    switch (textStyle) {
                        case 'TEXT': //普通文本
                            if(aName == 'TFR_XM'){
                                //todo 填发人姓名不能填写处理,模板不修改，js修改
                                $(ipts[i]).addClass('iptreadonly').textbox({
                                    required: false,
                                    onChange: function (newValue, oldValue) {
                                        if (newValue && bm && isFlws) {
                                            var $this = $(this);
                                            var className = $this.attr('textboxname');//组件class name值
                                            if (DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion) {
                                                flwsLdXxfy(bm, className, '', newValue, 'textbox','');
                                            }
                                        }
                                    }
                                });
                            }else{
                                $(ipts[i]).textbox(textboxObj);
                            }
                            break;
                        case 'NUMBER': //数字输入框
                            $(ipts[i]).textbox(textboxObj);
                            break;
                        case 'TEXTAREA': //换行文本   不换行
                            var dataOpts = $(ipts[i]).attr('data-options');//驗證規則
                            var height = $(ipts[i]).css('height');//高度
                            var readonly = '';
                            if(!isEdit){
                                readonly = 'readonly="readonly"'
                            }else {
                                readonly = '';
                            }
                            var classNames = aName;
                            if(params){
                                classNames += ' ' + params
                            }
                            var strTextbox = '<textarea class="easyuivalidatebox TEXTAREA ' + classNames + '" name="' + aName + '" '+readonly+' data-options="'+dataOpts+'"></textarea>';
                            parentA.html(strTextbox);
                            if(height && parseInt(height) > 100){
                                parentA.find('textarea').css('height',height);
                            }
                            if(!isEdit){
                                parentA.find('textarea').css('border','0');
                            }
                            parentA.find('textarea').validatebox({
                                required: isTrue
                            });
                            autoTextarea(parentA.find('textarea')[0]);
                            //输入框的联动处理
                            parentA.find('textarea').off().on({
                                input: function () {
                                    this.style.height = '0px';
                                    this.style.height = (this.scrollHeight + 'px');
                                },
                                blur:function () {
                                    var $this = $(this);
                                    var val = $this.val();
                                    var className = $this.attr('name');//组件class name值
                                    $this.validatebox();//失去焦点验证必填
                                    if (bm && DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion) {
                                        flwsLdXxfy(bm, className, '', val, 'textarea','');
                                    }
                                }
                            });
                            break;
                        case 'TEXTAREA_R': //换行文本不换行
                            var dataOpts = $(ipts[i]).attr('data-options');//驗證規則
                            var height = $(ipts[i]).css('height');//高度
                            var readonly = '';
                            if(!isEdit){
                                readonly = 'readonly="readonly"'
                            }else {
                                readonly = '';
                            }
                            var classNames = aName;
                            if(params){
                                classNames += ' ' + params
                            }
                            var strTextbox = '<textarea class="easyuivalidatebox TEXTAREA_R ' + classNames + '" name="' + aName + '" '+readonly+' data-options="'+dataOpts+'"></textarea>';
                            parentA.html(strTextbox);
                            if(height && parseInt(height) > 100){
                                parentA.find('textarea').css('height',height);
                            }
                            if(!isEdit){
                                parentA.find('textarea').css('border','0');
                            }
                            parentA.find('textarea').validatebox({
                                required: isTrue
                            });
                            autoTextarea(parentA.find('textarea')[0]);
                            //输入框的联动处理
                            parentA.find('textarea').off().on({
                                input: function () {
                                    this.style.height = '0px';
                                    this.style.height = (this.scrollHeight + 'px');
                                },
                                blur:function () {
                                    var $this = $(this);
                                    var val = $this.val();
                                    var className = $this.attr('name');//组件class name值
                                    $this.validatebox();//失去焦点验证必填
                                    if (bm && DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion) {
                                        flwsLdXxfy(bm, className, '', val, 'textarea','');
                                    }
                                }
                            });
                            break;
                        case 'NUMBERCN'://数字转大写
                            $(ipts[i]).textbox({
                                required: isTrue,
                                validType:['naturalNumber'],
                                onChange: function (newValue, oldValue) {
                                    if(bm && isFlws){
                                        var $this = $(this),iptVal = '';
                                        $this.textbox('enableValidation');
                                        if (!isNaN(newValue)) {//只有输入数字转化才符合规则
                                            if(newValue){
                                                iptVal = Number(newValue);//输入框的值
                                            }
                                            var className = $this.attr('textboxname');//组件class name值
                                            var chNum = NumberToChinese(iptVal);//转化之后的汉字
                                            if (DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion) {
                                                flwsLdXxfy(bm, className, chNum, iptVal, 'textbox', 'number');
                                            }
                                        }
                                    }
                                }
                            });
                            break;
                        case 'MONEY'://金额转大写
                            $(ipts[i]).textbox({
                                required: isTrue,
                                validType:['numeric[\'+f\',2]'],
                                onChange: function (newValue, oldValue) {
                                    if(bm && isFlws){
                                        var $this = $(this),iptVal = '';
                                        $this.textbox('enableValidation');
                                        if (!isNaN(newValue)) {
                                            if(newValue){
                                                iptVal = Number(newValue);
                                            }
                                            var className = $this.attr('textboxname');//组件class name值
                                            var chNum = Arabia_to_Chinese(String(newValue));//转化之后的汉字

                                            if (DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion) {
                                                flwsLdXxfy(bm, className, chNum, iptVal, 'textbox', 'money');
                                            }
                                        }
                                    }
                                }
                            });
                            break;
                        case 'TEXTBOX'://文本框  换行文本
                            var dataOpts = $(ipts[i]).attr('data-options');//驗證規則
                            var height = $(ipts[i]).css('height');//文本框的高度
                            var readonly = '';
                            if(!isEdit){
                                readonly = 'readonly="readonly"'
                            }else {
                                readonly = '';
                            }
                            var classNames = aName;
                            if(params){
                                classNames += ' ' + params
                            }
                            var strTextbox = '<textarea class="easyuivalidatebox TEXTBOX ' + classNames + '" name="' + aName + '" '+readonly+' data-options="'+dataOpts+'"></textarea>';
                            parentA.html(strTextbox);
                            if(height && parseInt(height) > 100){
                                parentA.find('textarea').css('height',height);
                            }
                            if(!isEdit){
                                parentA.find('textarea').css('border','0');
                            }
                            parentA.find('textarea').validatebox({
                                required: isTrue
                            });
                            autoTextarea(parentA.find('textarea')[0]);
                            //输入框的联动处理
                            parentA.find('textarea').off().on({
                                input: function () {
                                    this.style.height = '0px';
                                    this.style.height = (this.scrollHeight + 'px');
                                },
                                blur:function () {
                                    var $this = $(this);
                                    var val = $this.val();
                                    var className = $this.attr('name');//组件class name值
                                    $this.validatebox();//失去焦点验证必填
                                    if (bm && DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion  && isFlws) {
                                        flwsLdXxfy(bm, className, '', val, 'textarea','');
                                    }
                                }
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
                                if (bm && DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion && isFlws) {
                                    flwsLdXxfy(bm, className, '', val, 'Wdate','');
                                }
                            });
                            break;
                        case 'DATETIME':
                            $(ipts[i]).on('blur', function () {
                                var $this = $(this);
                                var val = $this.val();
                                var className = $this.attr('name');//组件class name值
                                if (bm && DATA.FLWS[bm].flwsData && !DATA.FLWS[bm].flwsData.switchVersion && isFlws) {
                                    flwsLdXxfy(bm, className, '', val, 'Wdate','');
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
    editDisableForAj('readonly');//清除easyui样式
    clickShowPanel();
}

/**
 * 法律文书多级联动
 * @param bm 法律文书编码
 * @param className 当前操作的class name
 * @param chNum 当前操作的输入框的值为转化之前的值
 * @param vals 当前操作的输入框的值
 * @param funName 当前操作的输入框类型
 * @param tx 特性
 */
function flwsLdXxfy(bm,className,chNum,vals,funName,tx) {
    var ipts = $('#flws_cl_area_'+ bm +' .panel .panel-body form a');
    for (var i = 0; i < ipts.length; i++) {
        if (funName == 'textbox') {
            if(tx){
                switch (tx){
                    case 'number':
                        $(ipts[i]).find('.' + className).parent().attr('number',vals);
                        $(ipts[i]).find('.' + className).textbox('setValue', chNum);
                        if(chNum){
                            $(ipts[i]).find('.' + className).textbox('disableValidation');
                        }
                        break;
                    case 'money':
                        $(ipts[i]).find('.' + className).parent().attr('money',vals);
                        $(ipts[i]).find('.' + className).textbox('setValue', chNum);
                        if(chNum){
                            $(ipts[i]).find('.' + className).textbox('disableValidation');
                        }
                        break;
                }
            }else{
                $(ipts[i]).find('.' + className).textbox('setValue', vals);
            }
        } else if (funName == 'combobox') {
            $(ipts[i]).find('.' + className).combobox({value: vals});
        } else if (funName == 'combotree') {
            $(ipts[i]).find('.' + className).combotree({value: vals});
        } else if (funName == 'validatebox' || funName == 'Wdate') {
            $(ipts[i]).find('.' + className).val(vals).validatebox();
        } else if(funName == 'textarea'){
            $(ipts[i]).find('.' + className).val(vals).validatebox();
        }
    }
}
