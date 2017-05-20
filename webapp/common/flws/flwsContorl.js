/**
 * Created by christ on 2016/12/6.
 * description: 法律文书操作js文件
 */

/**
 * 呈请报告保存 按钮点击
 */
function saveCqbg() {
    if (DATA.CQBG.cqbgData.bx && !DATA.CQBG.status.selected) {
        alertDiv({
            title: '提示',
            msg: DATA.CQBG.cqbgData.name + '下的嫌疑对象列表必须勾选'
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
                    BADW_GAJGJGDM: DATA.publicJkXx.BADW01.BAJG_GAJGJGDM,//办案单位公安机关机关代码
                    BADW_GAJGMC: DATA.publicJkXx.BADW01.BAJG_GAJGMC//办案机关公安机关名称
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
        alertDiv({
            title: '提示',
            msg: DATA.FLWS[bm].flwsData.name + '下的嫌疑对象列表必须勾选'
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

            if (isvalid && DATA.FLWS[bm].checkBoxIsChecked) {
                flwsSave(DATA.FLWS[bm].flwsData.insertUrl, DATA.FLWS[bm].params, bm)
            } else {
                if(!isvalid && DATA.FLWS[bm].checkBoxIsChecked){
                    alertDiv({
                        title: '温馨提示',
                        msg: '请检查法律文书多联中，必填项是否已填写和符合填写规范'
                    })
                }else if(isvalid && !DATA.FLWS[bm].checkBoxIsChecked){
                    alertDiv({
                        title: '提示',
                        msg: '法律文书中选择框不能为空，必须勾选一个'
                    })
                }
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

        if (isvalid && DATA.FLWS[bm].checkBoxIsChecked) {
            flwsSave(DATA.FLWS[bm].flwsData.updateUrl, DATA.FLWS[bm].params, bm)
        } else {
            if(!isvalid && DATA.FLWS[bm].checkBoxIsChecked){
                alertDiv({
                    title: '温馨提示',
                    msg: '请检查法律文书多联中，必填项是否已填写和符合填写规范'
                })
            }else if(isvalid && !DATA.FLWS[bm].checkBoxIsChecked){
                alertDiv({
                    title: '提示',
                    msg: '法律文书中选择框不能为空，必须勾选一个'
                })
            }
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
        ASJFLWSDM: bm,//案事件法律文书代码
        CQZT: '0',//呈请状态
        ASJBH: DATA.asjbh,//案事件编号
        AJMC: DATA.publicJkXx.AJ01.AJMC,//案件名称
        BADW_GAJGJGDM: DATA.publicJkXx.BADW01.BAJG_GAJGJGDM,//办案机关公安机关机关代码
        BADW_GAJGMC: DATA.publicJkXx.BADW01.BAJG_GAJGMC,//办案机关公安机关名称
        BAMJXM:DATA.OWN.userName,//办案民警姓名(没有呈请报告的法律文书向呈请报告写数据)todo
        BAMJID:DATA.OWN.userId//办案民警ID
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
                DATA.FLWS[bm].checkBoxIsChecked = true;

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
                                    var dicturl = $(dataArry[i]).parent().prev().attr('dicturl');
                                    var annotation = parentA.attr('annotation');
                                    var dictName = annotation.substring(annotation.indexOf('{') + 1, annotation.indexOf('}'));
                                    if (dicturl) {
                                        var dictValue = getDictName(dicturl, val, false);
                                        if(dictName == 'BD_D_KSSDM'){//羁押处所特殊处理
                                            DATA.FLWS[bm].params.JYCS_GAJGMC = dictValue;
                                            DATA.FLWS[bm].params.JYCS_GAJGJGDM = val;
                                        }else{
                                            DATA.FLWS[bm].params[dataname] = val;
                                            DATA.FLWS[bm].params[dataname + '_DICTMC'] = dictValue;
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
                    var checkArr = [];
                    var checkboxIpt = currentForm.find("input[type='checkbox']");
                    for(var n=0;n<checkboxIpt.length;n++){
                        var param = DATA.FLWS[bm].params;
                        var _this = $(checkboxIpt[n]);
                        if(_this.prop('checked')){
                            checkArr.push(_this.val());
                        }
                        param[_this.attr('name')] = checkArr.join(',');
                    }

                    //文书中checkbox验证不能为空【目前只针对行政案件XX选择框】
                    var checkboxs = currentForm.find("input[type='checkbox'][name^='XX']");
                    if(checkboxs.length > 0){
                        if(currentForm.find('input[type="checkbox"]:checked').length < 1){
                            DATA.FLWS[bm].checkBoxIsChecked = false;
                        }else{
                            DATA.FLWS[bm].checkBoxIsChecked = true;
                        }
                    }

                    //文书中radio 处理（主要针对行政案件）
                    var checkRadioArr = [];
                    currentForm.find("input[type='radio']").each(function (i,radio) {
                        var param = DATA.FLWS[bm].params;
                        var _this = $(radio);
                        //选中的值
                        if(_this.prop('checked')){
                            checkRadioArr.push(_this.val());
                        }
                        param[_this.attr('name')] = checkRadioArr.join(',');
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
                    //法律文书必填及分组规则
                    if(DATA.CQBG.btflwsRuleSelected!=undefined&&DATA.FLWS[bm].params[ DATA.CQBG.btflwsRuleSelected.FIELD]==undefined){
                        DATA.FLWS[bm].params[ DATA.CQBG.btflwsRuleSelected.FIELD]= DATA.CQBG.btflwsRuleSelected.VALUE;
                    }

                    //特殊提交数据的处理
                    especiallyDataFun(bm);

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
            DATA.FLWS[bm].checkBoxIsChecked = true;
            if (isValid) {
                //法律文书主键
                if (!DATA.FLWS[bm].flwsData.one) {
                    if (DATA.FLWS[bm].flwsZj) {
                        DATA.FLWS[bm].params = {
                            ZJ: DATA.FLWS[bm].flwsZj
                        }
                    }
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
                                        var dictName = annotation.substring(annotation.indexOf('{') + 1, annotation.indexOf('}'));
                                        if (dicturl) {
                                            var dictValue = getDictName(dicturl, val, false);
                                            if(dictName == 'BD_D_KSSDM'){//羁押处所特殊处理
                                                DATA.FLWS[bm].params.JYCS_GAJGMC = dictValue;
                                                DATA.FLWS[bm].params.JYCS_GAJGJGDM = val;
                                            }else{
                                                DATA.FLWS[bm].params[dataname] = val;
                                                DATA.FLWS[bm].params[dataname + '_DICTMC'] = dictValue;
                                            }
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
                        }
                    }else{
                        //文书中自定义的input[type=hidden]的处理
                        var hiddenIpt = $(flwsA[a]+">input[type='hidden']");
                        for(var f=0;f<hiddenIpt.length;f++){
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

                //文书中checkbox 处理（主要针对行政案件）
                var checkArr = [];
                var checkboxIpt = currentForm.find("input[type='checkbox']");
                for(var n=0;n<checkboxIpt.length;n++){
                    var param = DATA.FLWS[bm].params;
                    var _this = $(checkboxIpt[n]);
                    if(_this.prop('checked')){
                        checkArr.push(_this.val());
                    }
                    param[_this.attr('name')] = checkArr.join(',');
                }

                //文书中checkbox验证不能为空【目前只针对行政案件XX选择框】
                var checkboxs = currentForm.find("input[type='checkbox'][name^='XX']");
                if(checkboxs.length > 0){
                    if(currentForm.find('input[type="checkbox"]:checked').length < 1){
                        DATA.FLWS[bm].checkBoxIsChecked = false;
                    }else{
                        DATA.FLWS[bm].checkBoxIsChecked = true;
                    }
                }

                //文书中radio 处理（主要针对行政案件）
                var checkRadioArr = [];
                var radioIpt = currentForm.find("input[type='radio']");
                for(var m=0;m<radioIpt.length;m++){
                    var param = DATA.FLWS[bm].params;
                    var _this = $(radioIpt[m]);
                    //选中的值
                    if(_this.prop('checked')){
                        checkRadioArr.push(_this.val());
                    }
                    param[_this.attr('name')] = checkRadioArr.join(',');
                }

                //文书中自定义的input[type=hidden]的处理
                currentForm.find("a>input[type='hidden']").each(function (i,ipt) {
                    var param = DATA.FLWS[bm].params;
                    var _this = $(ipt);
                    var annotation = _this.attr('annotation');
                    if(!annotation){
                        param[_this.attr('name')] = _this.val();
                    }
                });

                //法律文书必填及分组规则
                if(DATA.CQBG.btflwsRuleSelected!=undefined&&DATA.FLWS[bm].params[ DATA.CQBG.btflwsRuleSelected.FIELD]==undefined){
                    DATA.FLWS[bm].params[ DATA.CQBG.btflwsRuleSelected.FIELD]= DATA.CQBG.btflwsRuleSelected.VALUE;
                }

                if(DATA.FLWS.flwsxgsqbZj){//【呈请法律文书修改】
                    DATA.FLWS[bm].params.SETU_CQXGZJ = DATA.FLWS.flwsxgsqbZj;
                }

                //特殊提交数据的处理
                especiallyDataFun(bm);

                //更新DATA.FLWS[bm].flwsRow中的数据;
                if(bm == 'X030004' || bm == '020005'){
                    var flwsRow = DATA.FLWS[bm].flwsRow;
                    for(var i = 0;i<flwsRow.length;i++){
                        if(DATA.FLWS[bm].flwsZj == flwsRow[i].ZJ){
                            jQuery.extend(flwsRow[i], DATA.FLWS[bm].params);
                        }
                    }
                }

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
        alertDiv({
            title: '提示',
            msg: '请填写呈请报告'
        });
        return;
    } else if (DATA.FLWS.flwsData) {//有法律文书
        var btflwsStr = DATA.CQBG.cqbgData.btflws;//必填法律文书
        var btflwsArray = [];
        if (btflwsStr) {
            //法律文書必選及規則
            if(DATA.CQBG.btflwsRule != undefined && DATA.CQBG.btflwsRule){
                var param={
                    CQBG_ZJ:DATA.CQBG.cqbgZj,
                    CQBG_BM:DATA.CQBG.cqbgData.bianMa
                };
                var skip=false;
                $.ajax({
                    url: pathConfig.basePath + '/wenshu/source/BTFLWS/CHECK',
                    data: param,
                    dataType: 'json',
                    async: false,
                    success: function (json) {
                        var jsonRows = json.rows;
                        if (json.state != 'success') {
                            alertDiv({
                                title: '提示',
                                msg: json.msg
                            });
                            skip = true;
                        }else if(jsonRows.length>0){
                            skip = true;
                            //错误列表提示语言
                            var msgs = msgListTab(jsonRows);
                            $.messager.show({
                                title: '提示',
                                msg: msgs,
                                icon: 'warning'
                            });
                        }
                    }
                });
                if(skip){
                    return;
                }
            }else{
                if (btflwsStr.indexOf(',') == -1) {//只有一条
                    btflwsArray.push(btflwsStr);
                } else {//有多条，逗号分隔
                    btflwsArray = btflwsStr.split(",");
                }

                for (var i = 0; i < btflwsArray.length; i++) {
                    var bm = btflwsArray[i];
                    if (DATA.FLWS[bm] == undefined || !DATA.FLWS[bm] || DATA.FLWS[bm].flwsData == undefined) {
                        alertDiv({
                            title: '提示',
                            msg: "请检查法律文书"
                        });
                        return;
                    } else if (!DATA.FLWS[bm].status.hasDone) {
                        alertDiv({
                            title: '提示',
                            msg: "请填写" + DATA.FLWS[bm].flwsData.name
                        });
                        return;
                    }
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
 * 列表展示
 */
function msgListTab(data){
    var str = '';
    var xydxData = DATA.DX.xydxData;
    for(var i=0;i<data.length;i++){
        var tb = '',param = '',xxzjbh='',xydx='';
        for(var k in xyrObj){
            if(Number(data[i].CLDXLB) == xyrObj[k].cldxlb){
                tb = k;
                param = xyrObj[k].param;
                xxzjbh = data[i].CLDX_XXZJBH;
                xydx = xyrObj[k].text;
            }
        }
        if(tb && param && xxzjbh){
            for(var j=0;j<xydxData[tb].length;j++){
                if(xxzjbh == xydxData[tb][j].xxzjbh){
                    var name = xydxData[tb][j][param];
                    str += xydx +'('+ name+')对应的文书<'+data[i].WENSHU_NAME+'>还未填写，请填写！'
                }
            }
        }
    }
    return str;
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
            alertDiv({
                title: '提示',
                msg: "请填写" + DATA.FLWS[bm].flwsData.name
            });
            return;
        }
    } else {//编辑
        if (DATA.FLWS[bm].flwsZj || DATA.FLWS[bm].flwsZj != undefined) {
            if(DATA.FLWS.cqFlwsZj){//【呈请法律文书修改生成法律文书】
                var params = {
                    ASJFLWSDM: DATA.FLWS.flwsdm,
                    FLWSYW_ZJ:DATA.FLWS.cqFlwsZj,
                    AJMC:DATA.FLWS.ajmc,
                    ASJBH:DATA.asjbh,
                    FLWSXGSQB_ZJ:DATA.FLWS.flwsxgsqbZj
                };
                cqxgWsScflwsRequest(params);
            }else{
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
            }
        } else {
            alertDiv({
                title: '提示',
                msg: "请填写" + DATA.FLWS[bm].flwsData.name
            });
            return;
        }
    }
}

/**
 * 提交数据的特殊处理
 */
function especiallyDataFun(bm){
    var params = DATA.FLWS[bm].params;
    switch (bm){
        case '042155'://取保候审人保|财保
            if(params.BZR_XM && !params.BZJ){
                params.ASJFLWSDM = '042155';
                params.QBLX = 'R';
            }else if(!params.BZR_XM && params.BZJ){
                params.ASJFLWSDM = '042104';
                params.QBLX = 'C';
            }
            break;
        case '110006'://告知书  批准时间(PZSJ)获取当前系统时间
            params.PZSJ = getCurrentTime();
            break;
        case 'X060003'://拘留审查决定书
            if(params.QXXZ == '1'){
                params.ASJFLWSDM = 'X060003';
            }else if(params.QXXZ == '2'){
                params.ASJFLWSDM = 'X060012';
            }
            break;
        case 'X060007'://限制活动范围决定书
            if(params.QXXZ == '1'){
                params.ASJFLWSDM = 'X060007';
            }else if(params.QXXZ == '2'){
                params.ASJFLWSDM = 'X060013';
            }
            break;
        case 'X020001'://行政处罚告知笔录（行政案件）
            if(params.XX == '1,2'){
                params.ASJFLWSDM = 'X020001';//行政处罚告知笔录
            }else{
                params.ASJFLWSDM = 'X020016';//行政处罚告知笔录（无听证）
            }
            break;
        case '042162'://行政处罚告知笔录（刑事案件）
            if(params.XX == '1,2'){
                params.ASJFLWSDM = '042162';//行政处罚告知笔录
            }else{
                params.ASJFLWSDM = '042161';//行政处罚告知笔录（无听证）
            }
            break;
    }
}