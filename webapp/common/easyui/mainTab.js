var MTC = 10;
var ETC = 1;
var ETID = "0";
var A_TL = 0;
var TTO = new Array();
var HS = false;
var DTO = null;
var SBW = 20;
var SW = 4;
var FO = 1;
var SML = true;
var SMR = true;
var RE = "";
function init() {
    try {
        if (!IE) {
            parent.frames.document.getElementById("main_tab").rows = "27,*";
        }
    } catch (err) {
    }
    DTO = document.getElementById("divTitles");
    DTO.style.left = FO;
    var tempTable = document.getElementById("table0");
    A_TL = tempTable.offsetLeft + tempTable.offsetWidth + SW;
    if (!IE) {
        DTO.style.top = "1px";
        var tempDiv = document.getElementById("divScrollLeft");
        tempDiv.style.top = "3px";
        tempDiv = document.getElementById("divScrollRight");
        tempDiv.style.top = "3px";
    }
    var tempDiv = document.getElementById("divScrollRight");
    tempDiv.style.left = document.body.clientWidth - SBW;
    for (var i = 0; i < MTC; i++) {
        TTO[i] = new Array(4);
        TTO[i][0] = i;
        TTO[i][1] = 0;
        TTO[i][2] = "";
        TTO[i][3] = 0;
    }
    TTO[0][0] = 0;
    TTO[0][1] = 1;
    TTO[0][2] = "tabFirstPage.jsp";
    TTO[0][3] = 97;
};function tabTitle_onClick(clickTitleID) {
    var clickID = clickTitleID.substring(2, clickTitleID.indexOf("_"));
    if (ETID != clickID) {
        var tempID = "td" + ETID + "_";
        if (ETID == "0") {
            document.getElementById(tempID + "1").className = "tab_titleFirst1";
        } else {
            document.getElementById(tempID + "1").className = "tab_title11";
            document.getElementById("table" + ETID + "_close").style.display = "none";
        }
        document.getElementById(tempID + "2").className = "tab_title12";
        document.getElementById(tempID + "3").className = "tab_title13";
        tempID = "td" + clickID + "_";
        if (clickID == "0") {
            document.getElementById(tempID + "1").className = "tab_titleFirst3";
        } else {
            document.getElementById(tempID + "1").className = "tab_title31";
            document.getElementById("table" + clickID + "_close").style.display = "block";
            document.getElementById("table" + clickID + "_close").className = "div_close1";
        }
        document.getElementById(tempID + "2").className = "tab_title32";
        document.getElementById(tempID + "3").className = "tab_title33";
        ETID = clickID;
        tabFrame_active();
    }
    if (HS) {
        var curLeft = parseInt(DTO.style.left);
        var tempLeft = curLeft;
        var enabledTabInt = parseInt(ETID);
        for (var i = 0; i < ETC; i++) {
            if (TTO[i][0] == ETID) {
                break;
            } else {
                tempLeft += TTO[i][3];
            }
        }
        if (tempLeft < SBW) {
            var tempLeft = SBW;
            for (var i = 0; i < ETC; i++) {
                if (TTO[i][0] == ETID) {
                    break;
                } else {
                    tempLeft -= TTO[i][3];
                }
            }
            DTO.style.left = tempLeft;
            if (tempLeft == SBW) {
                var tempDiv = document.getElementById("divScrollLeft");
                tempDiv.className = "tab_scrollLeft2";
            }
            var tempDiv = document.getElementById("divScrollRight");
            if (tempDiv.className = "tab_scrollRight2") {
                tempDiv.className = "tab_scrollRight1";
            }
        } else if ((tempLeft + TTO[parseInt(ETID)][3]) > (document.body.clientWidth - SBW)) {
            var curLeft = parseInt(DTO.style.left);
            var tempLeft = document.body.clientWidth - A_TL - SBW;
            for (var i = ETC - 1; i >= 0; i--) {
                if (TTO[i][0] == ETID) {
                    break;
                } else {
                    tempLeft += TTO[i][3];
                }
            }
            DTO.style.left = tempLeft;
            if (parseInt(DTO.style.left) == (document.body.clientWidth - A_TL - SBW)) {
                var tempDiv = document.getElementById("divScrollRight");
                tempDiv.className = "tab_scrollRight2";
            }
            var tempDiv = document.getElementById("divScrollLeft");
            if (tempDiv.className = "tab_scrollLeft2") {
                tempDiv.className = "tab_scrollLeft1";
            }
        } else {
        }
    }
};function tabTitle_ondbClick() {
    try {
        if (IE) {
            parent.parent.leftScroll.zoom_click();
        } else {
            var zoomFrame = parent.parent.frames.document.getElementById("leftScroll");
            zoomFrame.contentWindow.zoom_click();
        }
    } catch (err) {
    }
};function tabFrame_active() {
    var frameCols = "";
    var tempI = parseInt(ETID);
    for (var i = 0; i < MTC; i++) {
        if (tempI == i) {
            frameCols += "*,";
        } else {
            frameCols += "0,";
        }
    }
    frameCols = frameCols.substring(0, frameCols.length - 1);
    try {
        if (IE) {
            parent.tabContent.cols = frameCols;
        } else {
            parent.frames.document.getElementById("tabContent").cols = frameCols;
        }
    } catch (err) {
    }
};function tabTitle_add(titleName, openURL, matchLeft) {
    if (RE != "") {
        alert(RE);
        return;
    }
    if (("undefined" != typeof matchLeft) && matchLeft) {
        for (var i = 0; i < MTC; i++) {
            if (TTO[i][1] == 1 && TTO[i][2] == openURL) {
                tabTitle_onClick("td" + TTO[i][0] + "_1");
                return;
            }
        }
        var matchURL = openURL;
        if (matchURL.indexOf("?") != -1) {
            matchURL = matchURL.substring(0, matchURL.indexOf("?"));
        }
        for (var i = 0; i < MTC; i++) {
            if (TTO[i][1] == 1) {
                var existURL = TTO[i][2];
                if (existURL.indexOf("?") != -1) {
                    existURL = existURL.substring(0, existURL.indexOf("?"));
                }
                if (existURL == matchURL) {
                    tabTitle_onClick("td" + TTO[i][0] + "_1");
                    TTO[i][2] = openURL;
                    var addID = TTO[i][0];
                    var openFrameID = "main_tab" + addID;
                    var hrefURL = "";
                    if (openURL != null && openURL != "" && openURL.toUpperCase().indexOf("HTTP://") != -1) {
                        hrefURL = openURL;
                    } else {
                        hrefURL = basePath + openURL;
                    }
                    try {
                        if (IE && IE_VERSION <= 9) {
                            var openFrame = parent.frames(openFrameID);
                            openFrame.location.href = hrefURL;
                        } else {
                            var openFrame = parent.frames.document.getElementById(openFrameID);
                            openFrame.contentWindow.location.href = hrefURL;
                        }
                    } catch (err) {
                    }
                    return;
                }
            }
        }
    } else {
        for (var i = 0; i < MTC; i++) {
            if (TTO[i][1] == 1 && TTO[i][2] == openURL) {
                tabTitle_onClick("td" + TTO[i][0] + "_1");
                return;
            }
        }
    }
    if (ETC == MTC) {
        alert("您打开的窗口过多，请先关闭已打开的窗口！");
    } else {
        for (var i = 0; i < MTC; i++) {
            if (TTO[i][1] == 0) {
                var addID = TTO[i][0];
                var tempTable = document.getElementById("table" + TTO[i][0]);
                tempTable.style.left = A_TL;
                var addTitleName = document.getElementById("titleName" + addID);
                addTitleName.innerHTML = titleName + "&nbsp;";
                var tdTitleName = document.getElementById("td" + addID + "_2");
                var tdWidth = (getGBLength(titleName) + 1) * 6;
                tdTitleName.width = tdWidth;
                tempTable.style.display = "block";
                TTO[i][1] = 1;
                TTO[i][2] = openURL;
                TTO[i][3] = tempTable.offsetWidth + SW;
                A_TL += TTO[i][3];
                ETC++;
                scrollDisplay("td" + addID + "_1");
                var openFrameID = "main_tab" + addID;
                var hrefURL = "";
                if (openURL != null && openURL != "" && openURL.toUpperCase().indexOf("HTTP://") != -1) {
                    hrefURL = openURL;
                } else {
                    hrefURL = basePath + openURL;
                }
                try {
                    if (IE && IE_VERSION <= 9) {
                        var openFrame = parent.frames(openFrameID);
                        openFrame.location.href = hrefURL;
                    } else {
                        var openFrame = parent.frames.document.getElementById(openFrameID);
                        openFrame.contentWindow.location.href = hrefURL;
                    }
                } catch (err) {
                }
                return;
            }
        }
    }
};function tabTitle_close(clickTitleID) {
    var closeID = parseInt(clickTitleID.substring(2, clickTitleID.indexOf("_")));
    openFrameID = "main_tab" + closeID;
    var unClose = false;
    try {
        if (IE) {
            var openFrame = parent.frames(openFrameID);
            if (typeof(openFrame.body_unload) == "function") {
                unClose = !openFrame.body_unload();
            }
        } else {
            var openFrame = parent.frames.document.getElementById(openFrameID);
            if (typeof(openFrame.contentWindow.body_unload) == "function") {
                unClose = !openFrame.contentWindow.body_unload();
            }
        }
    } catch (err) {
    }
    if (unClose) {
        return;
    }
    var tableID = "table" + closeID;
    var closeTitleName = document.getElementById("titleName" + closeID);
    closeTitleName.innerHTML = "";
    var closeTable = document.getElementById(tableID);
    var moveLeft = closeTable.offsetWidth + SW;
    A_TL -= moveLeft;
    closeTable.style.display = "none";
    var tdTitleName = document.getElementById("td" + closeID + "_2");
    tdTitleName.width = 63;
    var moveI = 0;
    var willBeEnable = 0;
    var afterFlag = true;
    for (var i = 0; i < MTC; i++) {
        if (moveI != 0) {
            if (TTO[i][1] == 1) {
                TTO[moveI][0] = TTO[i][0];
                TTO[moveI][1] = TTO[i][1];
                TTO[moveI][2] = TTO[i][2];
                TTO[moveI][3] = TTO[i][3];
                if (afterFlag) {
                    willBeEnable = TTO[moveI][0];
                    afterFlag = false;
                }
                var tempTable = document.getElementById("table" + TTO[moveI][0]);
                tempTable.style.left = parseInt(tempTable.style.left) - moveLeft;
                moveI = i;
                TTO[i][0] = closeID;
                TTO[i][1] = 0;
                TTO[i][2] = "";
                TTO[i][3] = 0;
            } else {
                break;
            }
        } else {
            if (TTO[i][0] == closeID) {
                TTO[i][1] = 0;
                TTO[i][2] = "";
                TTO[i][3] = 0;
                var openFrameID = "main_tab" + closeID;
                try {
                    if (IE && IE_VERSION <= 9) {
                        var openFrame = parent.frames(openFrameID);
                        openFrame.location.href = blankURL;
                    } else {
                        var openFrame = parent.frames.document.getElementById(openFrameID);
                        openFrame.contentWindow.location.href = blankURL;
                    }
                } catch (err) {
                }
                moveI = i;
                var tempID = "td" + i + "_";
                if (i == 0) {
                    document.getElementById(tempID + "1").className = "tab_titleFirst1";
                } else {
                    document.getElementById(tempID + "1").className = "tab_title11";
                }
                document.getElementById(tempID + "2").className = "tab_title12";
                document.getElementById(tempID + "3").className = "tab_title13";
                willBeEnable = TTO[i - 1][0];
            }
        }
    }
    ETC--;
    if (ETID == ("" + closeID)) {
        scrollDisplay("td" + willBeEnable + "_1");
    } else {
        scrollDisplay();
    }
};function tabTitle_closeSelf() {
    if (ETID == "0") {
        return;
    }
    var closeID = parseInt(ETID);
    openFrameID = "main_tab" + closeID;
    var tableID = "table" + closeID;
    var closeTitleName = document.getElementById("titleName" + closeID);
    closeTitleName.innerHTML = "";
    var closeTable = document.getElementById(tableID);
    var moveLeft = closeTable.offsetWidth + SW;
    A_TL -= moveLeft;
    closeTable.style.display = "none";
    var tdTitleName = document.getElementById("td" + closeID + "_2");
    tdTitleName.width = 63;
    var moveI = 0;
    var willBeEnable = 0;
    var afterFlag = true;
    for (var i = 0; i < MTC; i++) {
        if (moveI != 0) {
            if (TTO[i][1] == 1) {
                TTO[moveI][0] = TTO[i][0];
                TTO[moveI][1] = TTO[i][1];
                TTO[moveI][2] = TTO[i][2];
                TTO[moveI][3] = TTO[i][3];
                if (afterFlag) {
                    willBeEnable = TTO[moveI][0];
                    afterFlag = false;
                }
                var tempTable = document.getElementById("table" + TTO[moveI][0]);
                tempTable.style.left = parseInt(tempTable.style.left) - moveLeft;
                moveI = i;
                TTO[i][0] = closeID;
                TTO[i][1] = 0;
                TTO[i][2] = "";
                TTO[i][3] = 0;
            } else {
                break;
            }
        } else {
            if (TTO[i][0] == closeID) {
                TTO[i][1] = 0;
                TTO[i][2] = "";
                TTO[i][3] = 0;
                var openFrameID = "main_tab" + closeID;
                try {
                    if (IE && IE_VERSION <= 9) {
                        var openFrame = parent.frames(openFrameID);
                        openFrame.location.href = blankURL;
                    } else {
                        var openFrame = parent.frames.document.getElementById(openFrameID);
                        openFrame.contentWindow.location.href = blankURL;
                    }
                } catch (err) {
                }
                moveI = i;
                var tempID = "td" + i + "_";
                if (i == 0) {
                    document.getElementById(tempID + "1").className = "tab_titleFirst1";
                } else {
                    document.getElementById(tempID + "1").className = "tab_title11";
                }
                document.getElementById(tempID + "2").className = "tab_title12";
                document.getElementById(tempID + "3").className = "tab_title13";
                willBeEnable = TTO[i - 1][0];
            }
        }
    }
    ETC--;
    if (ETID == ("" + closeID)) {
        scrollDisplay("td" + willBeEnable + "_1");
    } else {
        scrollDisplay();
    }
};function tabTitle_closeByName(tabName) {
    var clickTitleID = "";
    for (var i = 1; i < MTC; i++) {
        if (TTO[i][1] == 1) {
            var titleNameObject = document.getElementById("titleName" + i);
            if (titleNameObject != null) {
                var spanText = stringTrim(titleNameObject.innerText);
                if (spanText == tabName) {
                    clickTitleID = "td" + i + "_3";
                    break;
                }
            }
        }
    }
    if (clickTitleID != "") {
        tabTitle_close(clickTitleID);
    }
};function tabTitle_bizOpen() {
    var isOpen = false;
    for (var i = 1; i < MTC; i++) {
        if (TTO[i][1] == 1) {
            isOpen = true;
            break;
        }
    }
    return isOpen;
};function refreshFirstPage() {
    var openFrameID = "main_tab0";
    try {
        if (IE && IE_VERSION <= 9) {
            var openFrame = parent.frames(openFrameID);
            openFrame.location.href = "tabFirstPage.jsp";
        } else {
            var openFrame = parent.frames.document.getElementById(openFrameID);
            openFrame.contentWindow.location.href = "tabFirstPage.jsp";
        }
    } catch (err) {
    }
};function scrollDisplay(willActiveTd) {
    if (A_TL > document.body.clientWidth) {
        if (!HS) {
            var tempDiv = document.getElementById("divScrollLeft");
            tempDiv.className = "tab_scrollLeft2";
            tempDiv.style.display = "block";
            tempDiv = document.getElementById("divScrollRight");
            tempDiv.className = "tab_scrollRight1";
            tempDiv.style.left = document.body.clientWidth - SBW;
            tempDiv.style.display = "block";
            HS = true;
        } else {
            tempDiv = document.getElementById("divScrollRight");
            tempDiv.className = "tab_scrollRight2";
            tempDiv.style.left = document.body.clientWidth - SBW;
            DTO.style.left = document.body.clientWidth - A_TL - SBW;
            var tempDiv = document.getElementById("divScrollLeft");
            if (tempDiv.className = "tab_scrollLeft2") {
                tempDiv.className = "tab_scrollLeft1";
            }
        }
    } else {
        if (HS) {
            var tempDiv = document.getElementById("divScrollLeft");
            tempDiv.style.display = "none";
            tempDiv = document.getElementById("divScrollRight");
            tempDiv.style.display = "none";
            DTO.style.left = FO;
            HS = false;
            scrollLeftCount = 0;
        }
    }
    if (("undefined" != typeof willActiveTd) && (willActiveTd != "")) {
        tabTitle_onClick(willActiveTd);
    } else {
        tabTitle_onClick("td" + ETID + "_1");
    }
};function scrollLeft_click() {
    var curLeft = parseInt(DTO.style.left);
    var tempLeft = SBW;
    for (var i = 0; i < ETC; i++) {
        tempLeft -= TTO[i][3];
        if (tempLeft <= curLeft) {
            DTO.style.left = tempLeft + TTO[i][3];
            break;
        }
    }
    if (parseInt(DTO.style.left) == SBW) {
        var tempDiv = document.getElementById("divScrollLeft");
        tempDiv.className = "tab_scrollLeft2";
    } else {
        if (SML) {
            setTimeout("scrollLeft_click();", 300);
        }
    }
    var tempDiv = document.getElementById("divScrollRight");
    if (tempDiv.className = "tab_scrollRight2") {
        tempDiv.className = "tab_scrollRight1";
    }
};function scrollLeft_mouseOver() {
    var tempDiv = document.getElementById("divScrollLeft");
    if (tempDiv.className == "tab_scrollLeft2")return;
    SML = true;
    setTimeout("scrollLeft_click();", 300);
};function scrollLeft_mouseOut() {
    SML = false;
};function scrollRight_click() {
    var curLeft = parseInt(DTO.style.left);
    var tempLeft = document.body.clientWidth - A_TL - SBW;
    for (var i = ETC - 1; i >= 0; i--) {
        tempLeft += TTO[i][3];
        if (tempLeft >= curLeft) {
            DTO.style.left = tempLeft - TTO[i][3];
            break;
        }
    }
    if (parseInt(DTO.style.left) == (document.body.clientWidth - A_TL - SBW)) {
        var tempDiv = document.getElementById("divScrollRight");
        tempDiv.className = "tab_scrollRight2";
    } else {
        if (SMR) {
            setTimeout("scrollRight_click();", 300);
        }
    }
    var tempDiv = document.getElementById("divScrollLeft");
    if (tempDiv.className = "tab_scrollLeft2") {
        tempDiv.className = "tab_scrollLeft1";
    }
};function scrollRight_mouseOver() {
    var tempDiv = document.getElementById("divScrollRight");
    if (tempDiv.className == "tab_scrollRight2")return;
    SMR = true;
    setTimeout("scrollRight_click();", 300);
};function scrollRight_mouseOut() {
    SMR = false;
};function tabTitle_onMouseOver(clickTitleID) {
    var clickID = clickTitleID.substring(5);
    if (ETID != clickID) {
        var tempID = "td" + clickID + "_";
        if (clickID == "0") {
            document.getElementById(tempID + "1").className = "tab_titleFirst2";
        } else {
            document.getElementById(tempID + "1").className = "tab_title21";
            document.getElementById("table" + clickID + "_close").style.display = "block";
        }
        document.getElementById(tempID + "2").className = "tab_title22";
        document.getElementById(tempID + "3").className = "tab_title23";
    }
};function tabTitle_onMouseOut(clickTitleID) {
    var clickID = clickTitleID.substring(5);
    if (ETID != clickID) {
        var tempID = "td" + clickID + "_";
        if (clickID == "0") {
            document.getElementById(tempID + "1").className = "tab_titleFirst1";
        } else {
            document.getElementById(tempID + "1").className = "tab_title11";
            document.getElementById("table" + clickID + "_close").style.display = "none";
            document.getElementById("table" + clickID + "_close").className = "div_close1";
        }
        document.getElementById(tempID + "2").className = "tab_title12";
        document.getElementById(tempID + "3").className = "tab_title13";
    }
};function close_onMouseOver(clickTitleID) {
    var closeID = parseInt(clickTitleID.substring(2, clickTitleID.indexOf("_")));
    document.getElementById("table" + closeID + "_close").className = "div_close2";
};function close_onMouseOut(clickTitleID) {
    var closeID = parseInt(clickTitleID.substring(2, clickTitleID.indexOf("_")));
    document.getElementById("table" + closeID + "_close").className = "div_close1";
};