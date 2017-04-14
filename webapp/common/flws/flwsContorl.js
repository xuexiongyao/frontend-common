/**
 * Created by christ on 2016/12/6.
 * description: 法律文书操作js文件
 */

/**
 * 呈请报告保存 按钮点击
 */
function saveCqbg() {
    if (DATA.CQBG.cqbgData.bx && !DATA.CQBG.status.selected) {
        $.messager.alert({
            title: '提示',
            msg: DATA.CQBG.cqbgData.name + '下的嫌疑对象列表必须勾选',
            icon: 'warning'
        });
        return;
    }

    if (DATA.CQBG.cqbgZj == undefined) {
        getCqbgQtsjAdd();
        if (DATA.CQBG.isValid) {
            cqbgSave(DATA.CQBG.cqbgData.insertUrl, DATA.CQBG.params);//发送请求
        }
    } else {
        if (!DATA.CQBG.cqbgData.customized) {//是否是自定義頁面
            getCqbgQtsjEdit();
            if (DATA.CQBG.isValid) {
                cqbgSave(DATA.CQBG.cqbgData.updateUrl, DATA.CQBG.params);//发送请求
            }
        } else {
            DATA.CQBG.params = {};
            DATA.CQBG.params.ZJ = DATA.CQBG.cqbgZj;
            cqbgSave(DATA.CQBG.cqbgData.updateUrl, DATA.CQBG.params);//发送请求
        }

    }
}


/**
 * 获取呈请报告页面数据 拼装提交后台数据 新增
 */
function getCqbgQtsjAdd() {
    $('#cqbg_main_con form').form('submit', {
        onSubmit: function () {
            var isValid = $(this).form('validate');
            DATA.CQBG.isValid = isValid;
            if (isValid) {
                //loading('open','数据处理中,请稍候...');//验证通过提交后台，开始....转圈！
                var bamjDictUrl = '',//办案民警字典url
                    bamj = '',//办案民警
                    bamjArry = [];//办案民警人员数组

                /**********呈请报告提交后台数据************/
                DATA.CQBG.params = {
                    ASJFLWSMC: DATA.CQBG.asjflwsmc,//案事件法律文书名称
                    FLWS_ASJFLWSDM: DATA.CQBG.asjflwsdm,//案事件法律文书名称
                    ASJBH: DATA.asjbh,//案事件编号
                    AJMC: DATA.publicJkXx.AJ01.AJMC,//案件名称
                    ASJZCXWDM: DATA.asjzcxwdm,//案事件侦查行为代码
                    CQZT: '0',//呈请状态
                    BADW_GAJGJGDM: DATA.publicJkXx.BADW01.BAJG_GAJGJGDM//办案单位公安机关机关代码
                };
                /*嫌疑人姓名*/
                if (DATA.CQBG.xyrxms) {
                    DATA.CQBG.params.XYRXM = DATA.CQBG.xyrxms.join(',');//嫌疑人姓名
                }

                /*嫌疑人ID*/
                if (DATA.CQBG.xyrids) {
                    DATA.CQBG.params.XYRID = DATA.CQBG.xyrids.join(',');//嫌疑人ID
                }


                //循环取数据
                var cqbgTjdataArry = $('#cqbg_main_con form input[type="hidden"]');//呈请报告提交后台数据
                //遍历模板数据
                for (var i = 0; i < cqbgTjdataArry.length; i++) {
                    var paramnames = $(cqbgTjdataArry[i]).attr('name');//参数名
                    var paramvals = $(cqbgTjdataArry[i]).val();//值

                    if (paramnames) {
                        if (paramnames == 'BAMJXM') {
                            bamjArry.push(paramvals);
                            bamjDictUrl = $(cqbgTjdataArry[i]).parent().prev().attr('dicturl');
                        }
                        DATA.CQBG.params[paramnames] = paramvals;
                    }
                }

                bamj = bamjArry.join(',');//已选择办案人员
                DATA.CQBG.params.BAMJID = bamj;//办案民警身份证号码
                DATA.CQBG.params.BAMJXM = getDictName(bamjDictUrl, bamj, false);//办案民警名称
                DATA.CQBG.params.CQNR = $('#cqbg_main_con form textarea').val();//呈请内容
                DATA.CQBG.params.CQRQ = $('#cqbg_main_con form input.CQRQ').val();//呈请日期

                //呈请法律文书修改
                if(DATA.FLWS_PARAM && DATA.FLWS_PARAM.CQXG_XQ){
                    DATA.CQBG.params.CQXG_XQ = JSON.stringify(DATA.FLWS_PARAM.CQXG_XQ);
                }

                return false;
            } else {
                return false;	// 返回false终止表单提交
            }
        }
    })
}

/**
 * 获取呈请报告页面数据 拼装提交后台数据 编辑
 */
function getCqbgQtsjEdit() {
    $('#cqbg_main_con form').form('submit', {
        onSubmit: function () {
            var isValid = $(this).form('validate');
            DATA.CQBG.isValid = isValid;
            if (isValid) {
                var bamjDictUrl = $('#cqbg_main_con form input.BAMJXM').attr('dicturl');//办案民警接口

                var cqnr = $('#cqbg_main_con form textarea').val();//呈请内容
                var cqrq = $('#cqbg_main_con form input.CQRQ').val();//呈请日期
                var bamjids = $('#cqbg_main_con form input.BAMJXM').combobox('getValues');//办案民警ID

                var bamjxms = getDictName(bamjDictUrl, bamjids.join(','), false);//办案民警名称
                DATA.CQBG.params = {
                    BAMJXM: bamjxms,//办案民警姓名
                    BAMJID: bamjids.join(','),//办案民警ID
                    XXZJBH: DATA.CQBG.cqbgZj,//呈请报告主键
                    CQNR: cqnr,//呈请内容
                    CQRQ: cqrq//呈请日期
                };
                /*嫌疑人姓名*/
                if (DATA.CQBG.xyrxms) {
                    DATA.CQBG.params.XYRXM = DATA.CQBG.xyrxms.join(',');//嫌疑人姓名
                }

                /*嫌疑人ID*/
                if (DATA.CQBG.xyrids) {
                    DATA.CQBG.params.XYRID = DATA.CQBG.xyrids.join(',');//嫌疑人ID
                }

                return false;
            } else {
                return false;	// 返回false终止表单提交
            }
        }
    })
}

/**
 * 法律文书的保存
 * @param bm
 */
function saveFlws(bm) {
    //法律文书多联必填项的数组初始化
    DATA.FLWS[bm].isValidArry = [];

    if (DATA.FLWS[bm].flwsData.bx && !DATA.FLWS[bm].status.selected) {
        $.messager.alert({
            title: '提示',
            msg: DATA.FLWS[bm].flwsData.name + '下的嫌疑对象列表必须勾选',
            icon: 'warning'
        });
        return;
    }

    if (DATA.FLWS[bm].status.isAdd) {//新增保存
        getFlwsQtsjAdd(bm);
        //多联必填项的校验
        var isValidArry = DATA.FLWS[bm].isValidArry;

        if (isValidArry != undefined && isValidArry.length > 0) {
            var isvalid = false;
            for (var i = 0; i < isValidArry.length; i++) {
                if ($.inArray(false, isValidArry) == -1) {
                    isvalid = true;
                }
            }

            if (isvalid) {
                flwsSave(DATA.FLWS[bm].flwsData.insertUrl, DATA.FLWS[bm].params, bm)
            } else {
                $.messager.alert({
                    title: '提示',
                    msg: '法律文书多联中必填项不能为空',
                    icon: 'warning'
                })
            }
        } else {
            flwsSave(DATA.FLWS[bm].flwsData.insertUrl, DATA.FLWS[bm].params, bm)
        }

    } else {//编辑保存
        getFlwsQtsjEdit(bm);

        //多联必填项的校验
        var isValidArry = DATA.FLWS[bm].isValidArry;
        var isvalid = false;
        for (var i = 0; i < isValidArry.length; i++) {
            if ($.inArray(false, isValidArry) == -1) {
                isvalid = true;
            }
        }

        if (isvalid) {
            flwsSave(DATA.FLWS[bm].flwsData.updateUrl, DATA.FLWS[bm].params, bm)
        } else {
            $.messager.alert({
                title: '提示',
                msg: '法律文书多联中必填项不能为空',
                icon: 'warning'
            })
        }
    }
}
/**
 * 获取法律文书页面数据 拼装提交后台数据 新增
 * @param bm
 */
function getFlwsQtsjAdd(bm) {
    var tabs = $('#flws_cl_area_' + bm).tabs();
    DATA.FLWS[bm].params = {
        ASJFLWSDM: DATA.CQBG.asjflwsdm,//案事件法律文书代码
        CQZT: '0',//呈请状态
        ASJBH: DATA.asjbh,//案事件编号
        AJMC: DATA.publicJkXx.AJ01.AJMC,//案件名称
        BADW_GAJGJGDM: DATA.publicJkXx.BADW01.BAJG_GAJGJGDM,//办案机关公安机关机关代码
        BADW_GAJGMC: DATA.publicJkXx.BADW01.BAJG_GAJGMC//办案机关公安机关名称
    };

    //法律文书是否切换版本【目前只针对行政案件中 行政处罚文书 一\二版】
    if (DATA.FLWS[bm].flwsData.switchVersion) {
        var tab = $('#flws_cl_area_' + bm).tabs('getSelected');
        var index = $('#flws_cl_area_' + bm).tabs('getTabIndex', tab);
        DATA.FLWS[bm].params.VERSION = index + 1;
        tabs = [tab];
    }

    $(tabs).each(function (index, tab) {
        $(tab).find("form").form('submit', {
            onSubmit: function () {
                var currentForm = $(this);
                var isValid = currentForm.form('validate');
                DATA.FLWS[bm].isValidArry.push(isValid);

                if (isValid) {

                    if (DATA.CQBG.cqbgZj != undefined) {
                        DATA.FLWS[bm].params.CQBG_ZJ = DATA.CQBG.cqbgZj;//呈请报告主键
                    }
                    //嫌疑人id
                    if (DATA.FLWS[bm].xyrXxzjbh) {
                        DATA.FLWS[bm].params.CLDX_XXZJBH = DATA.FLWS[bm].xyrXxzjbh;//嫌疑人主键id
                    }
                    if (DATA.FLWS[bm].xyrCldxlb) {
                        DATA.FLWS[bm].params.CLDXLB = DATA.FLWS[bm].xyrCldxlb;//嫌疑人处理对象类别
                    }
                    if (DATA.FLWS[bm].asjxgry) {
                        DATA.FLWS[bm].params.ASJXGRYBH = DATA.FLWS[bm].asjxgry;//嫌疑人案事件相关人员编号
                    }
                    if (DATA.FLWS[bm].fzxyrRyid) {
                        DATA.FLWS[bm].params.FZXYR_RYID = DATA.FLWS[bm].fzxyrRyid;//嫌疑人人员id
                    }

                    //多选
                    if (DATA.FLWS[bm].xyrids) {
                        DATA.FLWS[bm].params.CLDX_XXZJBH = DATA.FLWS[bm].xyrids.join(',');//嫌疑人主键id
                    }
                    if (DATA.FLWS[bm].xyrryids) {
                        DATA.FLWS[bm].params.FZXYR_RYID = DATA.FLWS[bm].xyrryids.join(',');//嫌疑人人员id
                    }
                    if (DATA.FLWS[bm].xyrasjxgrybhs) {
                        DATA.FLWS[bm].params.ASJXGRYBH = DATA.FLWS[bm].xyrasjxgrybhs.join(',');//嫌疑人案事件相关人员编号
                    }

                    //textbox框(换行文本)的处理
                    var textboxArry = currentForm.find('a>textarea');
                    if (textboxArry) {
                        for (var r = 0; r < textboxArry.length; r++) {
                            var dataname = $(textboxArry[r]).attr('name');//参数名
                            var val = $(textboxArry[r]).val();//值
                            if (dataname) {
                                DATA.FLWS[bm].params[dataname] = val;
                            }
                        }
                    }

                    //日期插件my97单独处理
                    var dateArry = currentForm.find('a input.Wdate');
                    for (var j = 0; j < dateArry.length; j++) {
                        var dataname = $(dateArry[j]).attr('name');//参数名
                        var val = $(dateArry[j]).val();//值
                        if (dataname) {
                            DATA.FLWS[bm].params[dataname] = val;
                        }
                    }
                    //除了日期之外的组件
                    var dataArry = currentForm.find('a input[type="hidden"]');
                    for (var i = 0; i < dataArry.length; i++) {
                        var parentA = $(dataArry[i]).parent().parent();//a标签
                        var dataname = $(dataArry[i]).attr('name');//参数名
                        var val = $(dataArry[i]).val();//值

                        if (parentA) {
                            if (dataname) {
                                //所有(树形)字典新增DICTMC后缀
                                if ($(dataArry[i]).parent().prev().hasClass('easyuicombobox')) {
                                    var annotation = parentA.attr('annotation');
                                    var dicturl = $(dataArry[i]).parent().prev().attr('dicturl');
                                    var dictName = annotation.substring(annotation.indexOf('{') + 1, annotation.indexOf('}'));
                                    if (dicturl) {
                                        var dictValue = getDictName(dicturl, val, false);
                                        DATA.FLWS[bm].params[dataname] = val;
                                        DATA.FLWS[bm].params[dataname + '_DICTMC'] = dictValue;
                                        if(dictName == 'BD_D_KSSDM'){//羁押处所特殊处理
                                            DATA.FLWS[bm].params.JYCS_GAJGMC = dictValue;
                                            DATA.FLWS[bm].params.JYCS_GAJGJGDM = val;
                                        }
                                    }
                                } else if ($(dataArry[i]).parent().prev().hasClass('easyuicombotree')) {
                                    var dicturl = $(dataArry[i]).parent().prev().attr('dicturl');
                                    if (dicturl) {
                                        var dictValue = getDictName(dicturl, val, false);
                                        DATA.FLWS[bm].params[dataname] = val;
                                        DATA.FLWS[bm].params[dataname + '_DICTMC'] = dictValue;
                                    }
                                } else if ($(dataArry[i]).parent().prev().hasClass('MONEY')) {//金额的处理
                                    var annotation = parentA.attr('annotation');
                                    var moneyNum = parentA.attr('money');
                                    var textStyle = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
                                    if (textStyle) {
                                        if (textStyle == 'MONEY') {
                                            if (moneyNum) {
                                                DATA.FLWS[bm].params[dataname] = moneyNum;
                                                DATA.FLWS[bm].params[dataname + '_DX'] = val;
                                            }
                                        }
                                    }
                                } else if ($(dataArry[i]).parent().prev().hasClass('NUMBERCN')) {//金额的处理
                                    var annotation = parentA.attr('annotation');
                                    var numberNum = parentA.attr('number');
                                    var textStyle = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));
                                    if (textStyle) {
                                        if (textStyle == 'NUMBERCN') {
                                            if (numberNum) {
                                                DATA.FLWS[bm].params[dataname] = numberNum;
                                            }
                                        }
                                    }
                                } else {
                                    DATA.FLWS[bm].params[dataname] = val;
                                }
                            }
                        }
                    }

                    //文书中textarea 处理
                    currentForm.find('td>textarea').each(function (i, textarea) {
                        var a = $(textarea).prev().find("a");
                        if (a.attr("annotation") == "/REPLACE/") {
                            var param = DATA.FLWS[bm].params;
                            param[a.attr("name")] = $(textarea).val();
                        }
                    });
                    //文书中checkbox 处理（主要针对行政案件）
                    currentForm.find("input[type='checkbox']").each(function (i,checkbox) {
                        var param = DATA.FLWS[bm].params;
                        var _this = $(checkbox);
                        //选中的值
                        if(_this.prop('checked')){
                            param[_this.attr('name')] = _this.val();
                        }
                    });

                    //文书中radio 处理（主要针对行政案件）
                    currentForm.find("input[type='radio']").each(function (i,radio) {
                        var param = DATA.FLWS[bm].params;
                        var _this = $(radio);
                        //选中的值
                        if(_this.prop('checked')){
                            param[_this.attr('name')] = _this.val();
                        }
                    });

                    //文书中自定义的input[type=hidden]的处理
                    currentForm.find("a>input[type='hidden']").each(function (i,ipt) {
                        var param = DATA.FLWS[bm].params;
                        var _this = $(ipt);
                        var annotation = _this.attr('annotation');
                        if(!annotation){
                            param[_this.attr('name')] = _this.val();
                        }
                    });

                    return false;
                } else {
                    return false;// 返回false终止表单提交
                }
            }
        });
    });
}


/**
 * 获取法律文书页面数据 拼装提交后台数据 编辑
 * @param bm
 */
function getFlwsQtsjEdit(bm) {
    $('#flws_cl_area_' + bm + ' form').form('submit', {
        onSubmit: function () {
            var isValid = $(this).form('validate');
            DATA.FLWS[bm].isValidArry.push(isValid);
            if (isValid) {
                //法律文书主键
                if (!DATA.FLWS[bm].flwsData.one) {
                    if (DATA.FLWS[bm].flwsZj) {
                        DATA.FLWS[bm].params = {
                            ZJ: DATA.FLWS[bm].flwsZj
                        }
                    }
                }

                var flwsA = $('#flws_cl_area_' + bm + ' form p>a');
                for (var a = 0; a < flwsA.length; a++) {
                    var annotation = $(flwsA[a]).attr('annotation');

                    if (annotation) {
                        //只获取可编辑选项的值
                        var isEdit = annotation.substring(annotation.indexOf('/') + 1, annotation.lastIndexOf('/'));//可编辑的
                        var isMoney = annotation.substring(annotation.indexOf('<') + 1, annotation.indexOf('>'));//金额的
                        if (isEdit.length > 0) {
                            //日期插件my97单独处理
                            var dateArry = $(flwsA[a]).find('input.Wdate');
                            for (var j = 0; j < dateArry.length; j++) {
                                var dataname = $(dateArry[j]).attr('name');//参数名
                                var val = $(dateArry[j]).val();//值
                                if (dataname) {
                                    DATA.FLWS[bm].params[dataname] = val;
                                }
                            }

                            //除了日期之外的组件
                            var dataArry = $(flwsA[a]).find('input[type="hidden"]');
                            for (var i = 0; i < dataArry.length; i++) {
                                var parentA = $(dataArry[i]).parent().parent();//a标签
                                var dataname = $(dataArry[i]).attr('name');//参数名
                                var val = $(dataArry[i]).val();//值

                                if (dataname) {
                                    //所有(树形)字典新增DICTMC后缀
                                    if ($(dataArry[i]).parent().prev().hasClass('easyuicombobox') || $(dataArry[i]).parent().prev().hasClass('easyuicombotree')) {
                                        var dicturl = $(dataArry[i]).parent().prev().attr('dicturl');
                                        if (dicturl) {
                                            var dictValue = getDictName(dicturl, val, false);
                                            DATA.FLWS[bm].params[dataname] = val;
                                            DATA.FLWS[bm].params[dataname + '_DICTMC'] = dictValue;
                                        }
                                    } else if ($(dataArry[i]).parent().prev().hasClass('MONEY')) {//金额的处理
                                        var moneyNum = $(dataArry[i]).parent().parent().attr('money');
                                        if (moneyNum) {
                                            DATA.FLWS[bm].params[dataname] = moneyNum;
                                            DATA.FLWS[bm].params[dataname + '_DX'] = val;
                                        }
                                    }  else if ($(dataArry[i]).parent().prev().hasClass('NUMBERCN')) {//金额的处理
                                        var numberNum = $(dataArry[i]).parent().parent().attr('number');
                                        if (numberNum) {
                                            DATA.FLWS[bm].params[dataname] = numberNum;
                                        }
                                    } else {
                                        DATA.FLWS[bm].params[dataname] = val;
                                    }
                                }
                            }

                            //textarea框的处理
                            var areaArry = $(flwsA[a]).find('textarea');
                            for (var l = 0; l < areaArry.length; l++) {
                                var dataname = $(areaArry[i]).attr('name');//参数名
                                var val = $(areaArry[i]).val();//值
                                DATA.FLWS[bm].params[dataname] = val;
                            }


                            //文书中checkbox 处理（主要针对行政案件）
                            var checkboxIpt = $(flwsA[a]).find("input[type='checkbox']");
                            for(var n=0;n<checkboxIpt.length;n++){
                                var param = DATA.FLWS[bm].params;
                                var _this = $(checkboxIpt[n]);
                                //选中的值
                                if(_this.prop('checked')){
                                    param[_this.attr('name')] = _this.val();
                                }
                            }

                            //文书中radio 处理（主要针对行政案件）
                            var radioIpt = $(flwsA[a]).find("input[type='radio']");
                            for(var m=0;m<checkbox.length;m++){
                                var param = DATA.FLWS[bm].params;
                                var _this = $(radioIpt[m]);
                                //选中的值
                                if(_this.prop('checked')){
                                    param[_this.attr('name')] = _this.val();
                                }
                            }
                        }
                    }else{
                        //文书中自定义的input[type=hidden]的处理
                        var hiddenIpt = $(flwsA[a]>input[type='hidden']);
                        for(var f=0;f<checkbox.length;f++){
                            var param = DATA.FLWS[bm].params;
                            var _this = $(hiddenIpt[f]);
                            //选中的值
                            param[_this.attr('name')] = _this.val();
                        }
                    }
                }

                var currentForm = $('#flws_cl_area_' + bm + ' form');
                //文书中textarea 处理
                currentForm.find('td>textarea').each(function (i, textarea) {
                    var a = $(textarea).prev().find("a");
                    if (a.attr("annotation") == "/REPLACE/") {
                        var param = DATA.FLWS[bm].params;
                        param[a.attr("name")] = $(textarea).val();
                    }
                });
                return false;
            } else {
                return false;// 返回false终止表单提交
            }
        }
    });
}

/**
 * 送审呈请报告
 */
function shongshen(sessionBean) {
    if (DATA.CQBG.cqbgZj == undefined) {//呈请报告的填写
        $.messager.alert({
            title: '提示',
            msg: '请填写呈请报告',
            icon: 'warning'
        });
        return;
    } else if (DATA.FLWS.flwsData) {//有法律文书
        var btflwsStr = DATA.CQBG.cqbgData.btflws;//必填法律文书
        var btflwsArray = [];
        if (btflwsStr) {
            if (btflwsStr.indexOf(',') == -1) {//只有一条
                btflwsArray.push(btflwsStr);
            } else {//有多条，逗号分隔
                btflwsArray = btflwsStr.split(",");
            }

            for (var i = 0; i < btflwsArray.length; i++) {
                var bm = btflwsArray[i];
                if (DATA.FLWS[bm] == undefined || !DATA.FLWS[bm] || DATA.FLWS[bm].flwsData == undefined) {
                    $.messager.alert({
                        title: '提示',
                        msg: '请填写法律文书',
                        icon: 'warning'
                    });
                    return;
                } else if (!DATA.FLWS[bm].status.hasDone) {
                    $.messager.alert({
                        title: '提示',
                        msg: "请填写" + DATA.FLWS[bm].flwsData.name,
                        icon: 'warning'
                    });
                    return;
                } else if (bm == 'X020003' && !DATA.FLWS[bm].status.zfgked) {
                    $.messager.alert({
                        title: '提示',
                        msg: "请填写" + DATA.FLWS[bm].flwsData.name + '的执法公开',
                        icon: 'warning'
                    });
                    return;
                }
            }
        }
    }
    //如果不是呈请报告
    if(DATA.CQBG.cqbgData.tableName!="TB_ST_ASJ_CQBG"){
        if(DATA.CQBG.cqbgRow.CQBG_ZJ==undefined){
            $.ajax({
                url: DATA.CQBG.cqbgData.queryUrl,
                data: {
                    ZJ:DATA.CQBG.cqbgZj
                },
                jsonType: 'json',
                success: function (data) {
                    var json = eval('(' + data + ')');
                    if (json.state == 'success') {//查询成功
                        if (json.rows.length > 0) {//有数据 编辑
                            DATA.CQBG.cqbgRow = json.rows[0];
                            selectName(DATA.CQBG.cqbgRow.CQBG_ZJ, DATA.CQBG.asjflwsdm, sessionBean);
                        }
                    }
                }
            });
        }else{
            selectName(DATA.CQBG.cqbgRow.CQBG_ZJ, DATA.CQBG.asjflwsdm, sessionBean);
        }
    }else{
        selectName(DATA.CQBG.cqbgZj, DATA.CQBG.asjflwsdm, sessionBean);
    }
}

/**
 * 没有呈请报告的法律文书，无法走流程，只能发送请求生成法律文书任务，生成pdf
 */
function scflwsrwForNoCqbg(bm) {
    if (DATA.FLWS[bm].status.isAdd) {//新增
        if (DATA.FLWS[bm].status.currentFlwsId || DATA.FLWS[bm].status.currentFlwsId != undefined) {//法律文书已经保存
            //任务表数据 拼接
            var params = {
                asjbh: DATA.asjbh,
                ajmc: DATA.publicJkXx.AJ01.AJMC,
                asjflwsdm: DATA.FLWS[bm].flwsData.bianMa,//法律文书编码
                flwsbm: DATA.FLWS[bm].flwsData.tableName,//法律文书表名
                flwsywZj: DATA.FLWS[bm].status.currentFlwsId,//法律文书业务主键
                cjsj: getCurrentTime(),//出具时间
                flwsmc: DATA.FLWS[bm].flwsData.name//法律文书名称
            };
            scflwsRequest(params);
        } else {
            $.messager.alert({
                title: '提示',
                msg: "请填写" + DATA.FLWS[bm].flwsData.name,
                icon: 'warning'
            });
            return;
        }
    } else {//编辑
        if (DATA.FLWS[bm].flwsZj || DATA.FLWS[bm].flwsZj != undefined) {
            //任务表数据 拼接
            var params = {
                asjbh: DATA.asjbh,
                ajmc: DATA.publicJkXx.AJ01.AJMC,
                asjflwsdm: DATA.FLWS[bm].flwsData.bianMa,//法律文书编码
                flwsbm: DATA.FLWS[bm].flwsData.tableName,//法律文书表名
                flwsywZj: DATA.FLWS[bm].flwsZj,//法律文书业务主键
                cjsj: getCurrentTime(),//出具时间
                flwsmc: DATA.FLWS[bm].flwsData.name//法律文书名称
            };
            scflwsRequest(params);
        } else {
            $.messager.alert({
                title: '提示',
                msg: "请填写" + DATA.FLWS[bm].flwsData.name,
                icon: 'warning'
            });
            return;
        }
    }
}