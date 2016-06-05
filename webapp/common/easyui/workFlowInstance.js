// 工作流程定义
// author : redstorm
// 2014-05-12
var BLS = false;
var BA = true;
var DA = false;
var MTO = null;
var STO = null;
var MX, MY;
var TX, TY;
var AGOT = 0;
var AGOL = 0;
var tacheCountValue = 1;
var transCountValue = 0;
var ST = "";
var SC = 0;
var TRO = null;
function body_resize() {
    var documentSize = getDocumentSize();
    var panelDivObj = document.getElementById("panelDiv");
    panelDivObj.style.width = documentSize.width + "px";
    panelDivObj.style.height = documentSize.height + "px";
};function document_onMouseDown(e) {
    var curTarget = e.target;
    var curTagName = curTarget.tagName;
    var curTargetID = curTarget.id;
    var isMouseLeft = false;
    if (IE) {
        if (e.button == 1) {
            isMouseLeft = true;
        }
    } else {
        if (e.button == 0) {
            isMouseLeft = true;
        }
    }
    if (isMouseLeft) {
        if (curTagName == "DIV") {
            if (curTargetID == "panelDiv") {
                setEmptySelected();
            } else {
                var parentTransDiv = curTarget.getAttribute("parentTransDiv");
                if (parentTransDiv != null) {
                    setEmptySelected();
                    ST = "trans";
                    STO = document.getElementById("transDiv" + parentTransDiv);
                    STO.className = "transDivSelect";
                    var objInput = $(STO).find("div");
                    for (var i = 0; i < objInput.length; i++) {
                        var objItem = objInput[i];
                        var curClassName = objItem.className;
                        curClassName = curClassName.replace("1", "2");
                        objItem.className = curClassName;
                    }
                }
            }
        } else if (curTagName == "TD") {
            if (curTargetID != null && curTargetID.indexOf("tacheTd") == 0) {
                var tacheNo = curTargetID.substring(7);
                setEmptySelected();
                DA = true;
                ST = "tache";
                SC = tacheNo;
                MTO = document.getElementById("tacheTable" + tacheNo);
                var curClassName = MTO.className;
                curClassName = curClassName.replace("1", "2");
                MTO.className = curClassName;
                if (document.forms["dataForm"].elements["TACHETYPE" + tacheNo].value == "2") {
                    var tacheID = document.forms["dataForm"].elements["TACHEID" + tacheNo].value;
                    displayTacheResult(tacheID, MTO);
                }
            } else {
                setEmptySelected();
            }
        } else {
            setEmptySelected();
        }
    }
};function createDivLine(FTN, TTN, isNew, isOpenDialog) {
    var divID = "transDiv" + FTN + "__" + TTN;
    var tDataDivID = "tDataDiv" + FTN + "__" + TTN;
    var fromObject = document.getElementById("tacheTable" + FTN);
    var toObject = document.getElementById("tacheTable" + TTN);
    var transitionName = "";
    var dataDiv = new StringBuffer();
    var canOut = "";
    var canIn = "";
    var isAuto = "1";
    var transName = "";
    var linkType = "";
    var oldYesOut = "";
    var oldYesIn = "";
    if (document.forms["dataForm"].elements["TACHETYPE" + FTN].value == "1") {
        linkType = "1";
    } else if (document.forms["dataForm"].elements["TACHETYPE" + TTN].value == "3") {
        linkType = "3";
    } else {
        linkType = "2";
    }
    var TDO2 = null;
    var transNo = "";
    TDO2 = document.getElementById(divID);
    transNo = TDO2.getAttribute("transNo");
    oldYesOut = TDO2.getAttribute("yesOut");
    oldYesIn = TDO2.getAttribute("yesIn");
    if (isOpenDialog) {
        var PA = [];
        PA['parentWindow'] = window;
        PA['linkType'] = linkType;
        PA['canOut'] = canOut;
        PA['canIn'] = canIn;
        PA['oldYesOut'] = oldYesOut;
        PA['oldYesIn'] = oldYesIn;
        PA['isAuto'] = '1';
        PA['TRANSITIONTYPE'] = document.forms["dataForm"].elements["TRANSITIONTYPE" + transNo].value;
        PA['STARTTACHEFINISH'] = document.forms["dataForm"].elements["STARTTACHEFINISH" + transNo].value;
        PA['TRANSITIONNAME'] = document.forms["dataForm"].elements["TRANSITIONNAME" + transNo].value;
        PA['TRANSITIONNAMEDESC'] = document.forms["dataForm"].elements["TRANSITIONNAMEDESC" + transNo].value;
        PA['PROCESSPASS'] = document.forms["dataForm"].elements["PROCESSPASS" + transNo].value;
        PA['PROCESSEND'] = document.forms["dataForm"].elements["PROCESSEND" + transNo].value;
        PA['CONDITONPARAMETER'] = document.forms["dataForm"].elements["CONDITONPARAMETER" + transNo].value;
        PA['CONDITONPARAMETERTYPE'] = document.forms["dataForm"].elements["CONDITONPARAMETERTYPE" + transNo].value;
        PA['CONDITONOPERATOR'] = document.forms["dataForm"].elements["CONDITONOPERATOR" + transNo].value;
        PA['CONDITONVALUE'] = document.forms["dataForm"].elements["CONDITONVALUE" + transNo].value;
        PA['CONDITIONEXIST'] = document.forms["dataForm"].elements["CONDITIONEXIST" + transNo].value;
        PA['EVENTCLASS'] = document.forms["dataForm"].elements["EVENTCLASS" + transNo].value;
        PA['EVENTMETHOD'] = document.forms["dataForm"].elements["EVENTMETHOD" + transNo].value;
        var isCache = false;
        var myTime = (new Date()).getTime();
        var windowID = "win_" + myTime;
        var openURL = basePath + "/wfDeProcess/defineTransitionView?myTime=" + myTime;
        var dataOptions = {
            title: '&nbsp;环节流向管理（查看）',
            width: 850,
            height: 420,
            collapsible: false,
            minimizable: false,
            maximizable: false,
            closable: true,
            closed: false,
            cache: false,
            inline: false,
            modal: true
        };
        dataOptions.buttons = [{
            text: '关闭', iconCls: 'icon-cancel', handler: function () {
                window.top.$('#' + windowID).dialog('close');
            }
        }];
        window.top.openWindow(isCache, windowID, openURL, PA, dataOptions);
    }
};function lineDoubleClick(thisObject) {
    var parentTransDiv = thisObject.getAttribute("parentTransDiv");
    if (parentTransDiv != null && parentTransDiv != "") {
        var found_address = parentTransDiv.indexOf("__");
        var FTN = parentTransDiv.substr(0, found_address);
        var TTN = parentTransDiv.substr(found_address + 2);
        createDivLine(FTN, TTN, false, true);
    }
};function tache_dbclick(tacheNo) {
    var tacheObject = document.getElementById("tacheTable" + tacheNo);
    if (tacheObject != null) {
        var tacheTdObject = document.getElementById("tacheTd" + tacheNo);
        var tacheType = document.forms["dataForm"].elements["TACHETYPE" + tacheNo].value;
        if (tacheType == "1") {
            defineTacheStart(tacheNo);
        } else if (tacheType == "3") {
            defineTacheEnd(tacheNo);
        } else {
            defineTacheStep(tacheNo);
        }
    }
};function defineTacheStart(tacheNo) {
    var isCache = false;
    var myTime = (new Date()).getTime();
    var windowID = "win_" + myTime;
    var openURL = basePath + "/wfDeProcess/defineTacheStartView?myTime=" + myTime;
    var PA = [];
    var tacheTdObject = document.getElementById("tacheTd" + tacheNo);
    PA['parentWindow'] = window;
    PA['TACHENAME'] = tacheTdObject.innerHTML;
    PA['TACHENAMEDESC'] = document.forms["dataForm"].elements["TACHENAMEDESC" + tacheNo].value;
    var dataOptions = {
        title: '&nbsp;流程开始环节（查看）',
        width: 850,
        height: 240,
        collapsible: false,
        minimizable: false,
        maximizable: false,
        closable: true,
        closed: false,
        cache: false,
        inline: false,
        modal: true
    };
    dataOptions.buttons = [{
        text: '关闭', iconCls: 'icon-cancel', handler: function () {
            window.top.$('#' + windowID).dialog('close');
        }
    }];
    window.top.openWindow(isCache, windowID, openURL, PA, dataOptions);
};function defineTacheStep(tacheNo) {
    var isCache = false;
    var myTime = (new Date()).getTime();
    var windowID = "win_" + myTime;
    var PA = [];
    PA['parentWindow'] = window;
    var existTacheOptions = "";
    for (var i = 1; i <= tacheCountValue; i++) {
        var tacheTableObject = document.getElementById("tacheTable" + i);
        if (tacheTableObject != null) {
            var tacheType = document.forms["dataForm"].elements["TACHETYPE" + i].value;
            if (tacheType == "2" && tacheNo != ("" + i)) {
                existTacheOptions += "" + i + "=" + document.forms["dataForm"].elements["TACHENAME" + i].value + ",";
            }
        }
    }
    if (existTacheOptions != "") {
        existTacheOptions = existTacheOptions.substr(0, existTacheOptions.length - 1);
    }
    PA['DEPANDTACHEOPTIONS'] = existTacheOptions;
    var tacheTdObject = document.getElementById("tacheTd" + tacheNo);
    PA['TACHENAME'] = tacheTdObject.innerHTML;
    PA['TACHENAMEDESC'] = document.forms["dataForm"].elements["TACHENAMEDESC" + tacheNo].value;
    PA['TACHEURL'] = document.forms["dataForm"].elements["TACHEURL" + tacheNo].value;
    PA['LIMITEMINUTE'] = document.forms["dataForm"].elements["LIMITEMINUTE" + tacheNo].value;
    PA['SINGLEMULTI'] = document.forms["dataForm"].elements["SINGLEMULTI" + tacheNo].value;
    PA['MULTIPOLICY'] = document.forms["dataForm"].elements["MULTIPOLICY" + tacheNo].value;
    PA['MULTIPOLICYVALUE'] = document.forms["dataForm"].elements["MULTIPOLICYVALUE" + tacheNo].value;
    PA['PARTICIPANTPOLICY'] = document.forms["dataForm"].elements["PARTICIPANTPOLICY" + tacheNo].value;
    PA['DEPANDTACHEID'] = document.forms["dataForm"].elements["DEPANDTACHEID" + tacheNo].value;
    PA['DEPANDPOLICY'] = document.forms["dataForm"].elements["DEPANDPOLICY" + tacheNo].value;
    PA['DEPANDOTHERCLASS'] = document.forms["dataForm"].elements["DEPANDOTHERCLASS" + tacheNo].value;
    PA['DEPANDOTHERMETHOD'] = document.forms["dataForm"].elements["DEPANDOTHERMETHOD" + tacheNo].value;
    PA['ASSIGNTYPE'] = document.forms["dataForm"].elements["ASSIGNTYPE" + tacheNo].value;
    PA['ASSIGNID'] = document.forms["dataForm"].elements["ASSIGNID" + tacheNo].value;
    PA['SIGNIDEADM'] = document.forms["dataForm"].elements["SIGNIDEADM" + tacheNo].value;
    var urlParameter = "ASSIGNTYPE=" + PA['ASSIGNTYPE'] + "&ASSIGNID=" + PA['ASSIGNID'] + "&myTime=" + myTime;
    var openURL = basePath + "/wfDeProcess/defineTacheStepView?" + urlParameter;
    var dataOptions = {
        title: '&nbsp;流程流转环节（查看）',
        width: 850,
        height: 460,
        collapsible: false,
        minimizable: false,
        maximizable: false,
        closable: true,
        closed: false,
        cache: false,
        inline: false,
        modal: true
    };
    dataOptions.buttons = [{
        text: '关闭', iconCls: 'icon-cancel', handler: function () {
            window.top.$('#' + windowID).dialog('close');
        }
    }];
    window.top.openWindow(isCache, windowID, openURL, PA, dataOptions);
};function defineTacheEnd(tacheNo) {
    var isCache = false;
    var myTime = (new Date()).getTime();
    var windowID = "win_" + myTime;
    var openURL = basePath + "/wfDeProcess/defineTacheEndView?myTime=" + myTime;
    var PA = [];
    var tacheTdObject = document.getElementById("tacheTd" + tacheNo);
    PA['parentWindow'] = window;
    PA['TACHENAME'] = tacheTdObject.innerHTML;
    PA['TACHENAMEDESC'] = document.forms["dataForm"].elements["TACHENAMEDESC" + tacheNo].value;
    var dataOptions = {
        title: '&nbsp;流程结束环节（查看）',
        width: 850,
        height: 240,
        collapsible: false,
        minimizable: false,
        maximizable: false,
        closable: true,
        closed: false,
        cache: false,
        inline: false,
        modal: true
    };
    dataOptions.buttons = [{
        text: '关闭', iconCls: 'icon-cancel', handler: function () {
            window.top.$('#' + windowID).dialog('close');
        }
    }];
    window.top.openWindow(isCache, windowID, openURL, PA, dataOptions);
};function setEmptySelected() {
    if (ST != "") {
        if (ST == "tache") {
            if (MTO != null) {
                var curClassName = MTO.className;
                curClassName = curClassName.replace("2", "1");
                MTO.className = curClassName;
                MTO = null;
            }
            if (TRO != null) {
                TRO.style.display = "none";
                TRO = null;
            }
        } else if (ST == "trans") {
            if (STO != null) {
                STO.className = "transDiv";
                var objInput = $(STO).find("div");
                for (var i = 0; i < objInput.length; i++) {
                    var objItem = objInput[i];
                    var curClassName = objItem.className;
                    curClassName = curClassName.replace("2", "1");
                    objItem.className = curClassName;
                }
                STO = null;
            }
        }
        ST = "";
        SC = 0;
    }
    flowButtonLine_empty();
};function flowButtonLine_over() {
    if (!BLS) {
        var flowButtonLineObj = document.getElementById("flowButtonLine");
        if (flowButtonLineObj != null) {
            flowButtonLineObj.className = "flowButtonLine2";
        }
    }
};function flowButtonLine_out() {
    if (!BLS) {
        var flowButtonLineObj = document.getElementById("flowButtonLine");
        if (flowButtonLineObj != null) {
            flowButtonLineObj.className = "flowButtonLine1";
        }
    }
};function flowButtonLine_empty() {
    BLS = false;
    var flowButtonLineObj = document.getElementById("flowButtonLine");
    if (flowButtonLineObj != null) {
        flowButtonLineObj.className = "flowButtonLine1";
    }
};function displayTacheResult(tacheID, MTO) {
    var tacheResultMainTableObj = document.getElementById("tacheResultMainTable" + tacheID);
    if (tacheResultMainTableObj != null) {
        var positionInit = tacheResultMainTableObj.getAttribute("positionInit");
        if (positionInit == null) {
            var willTop = MTO.offsetTop + 43;
            var willLeft = MTO.offsetLeft;
            var panelDivWidth = document.getElementById("panelDiv").offsetWidth;
            if (willLeft + 420 > panelDivWidth) {
                willLeft = willLeft - 420 + 103 - 3;
            }
            tacheResultMainTableObj.style.top = willTop + "px";
            tacheResultMainTableObj.style.left = willLeft + "px";
            tacheResultMainTableObj.setAttribute("positionInit", "1");
        }
        tacheResultMainTableObj.style.display = "block";
        TRO = tacheResultMainTableObj;
    }
};