/**
 * @title:onloadMap
 * @description:加载地图
 * @author: zhou_lijun@founder.com
 * @param
 * @date:2016-04-5 10:10:54
 */
function onloadMap(mapDiv, toolDiv, objName, bjzbz) {

    /*地图对象*/
    objName.map = new FrameTools.Map();
    /*设置地图代理*/
    objName.map.setProxy(basePath + "/Proxy");
    /*设置地图加载容器*/
    objName.map.setMapDiv(mapDiv);
    /*加载地图*/
    objName.map.onloadMap();

    if (objName.map._MapApp == null) {
        return;
    }
    /*显示鹰眼*/
    objName.map.addOverView();
    /*隐藏自带矢量影像图层对象*/
    objName.map._MapApp.hideMapServer();
    /*加载自定义的矢量影像图层对象*/
    objName.map.showNewMapServer(mapDiv, objName.mapName);
    if (toolDiv != "" && toolDiv != null) {
        /*加载地图工具条*/
        objName.map.buildTools(mapDiv, toolDiv, objName.mapName);
        /*设置工具条显示的位置*/
        diyToolDiv(mapDiv, toolDiv);
        /*窗口变化地图工具条自动变*/
        $("#" + mapDiv).resize(function () {
            diyToolDiv(mapDiv, toolDiv);
        });
    }
    /*加载边界坐标值*/
    objName.map.moveMapToBjzbz(bjzbz);
}

/**
 * @title:diyToolDiv
 * @description:设置工具条显示的位置
 * @author: zhou_lijun@founder.com
 * @param
 * @date:2016-04-5 10:10:54
 */
function diyToolDiv(mapDiv, toolDiv) {
    var top = $("#" + mapDiv).height() - 40;
    $("#" + toolDiv).css({
        "top": top,
        "left": 10
    });
}

/**
 * @title:loadPoint
 * @description:加载地图坐标点
 * @author: zhou_lijun@founder.com
 * @param
 * @date:2016-04-5 10:10:54
 */
function loadPoint(objName, data) {
    //延迟加载列表统计
    // beforeTableLoad(data, ''+objName.datagrid);

    if (objName.map._MapApp == null || objName.map._MapApp == "undefined") {
        return;
    }
    //关闭所有器已经打开的气泡框
    //objName.map._MapApp.closeInfoWindow();
    //判断延时是否执行完，没执行完终止此方法
    if (objName.setInt != "") {
        clearInterval(objName.setInt);
    }
    //判断地图上已经存在点图层清除
    if (objName.initMarkerArr != null) {
        var markerLen = objName.initMarkerArr.length;
        for (var j = 0; j < markerLen; j++) {
            objName.map._MapApp.removeOverlay(objName.initMarkerArr[j]);
        }
    }
    //清除记录点击列表点
    if (objName.initMarker != "") {
        //清除之前的坐标点
        objName.map._MapApp.removeOverlay(objName.initMarker);
    }
    //延时加载点图层
    var rows = objName.getRows();
    if(rows==undefined){
        return;
    }
    var len = rows.length;
    var count = 0;
    objName.setInt = setInterval(function () {
        if (count < len) {
            var zbx = rows[count][objName.zbx];
            var zby = rows[count][objName.zby];
            var title = rows[count][objName.title];
            if (zbx != "" && zby != "") {
                var initMarker = objName.map.initMarker(title, zbx, zby, 'syrkBlue.png', null, null, 43, 37);
                objName.map._MapApp.addOverlay(initMarker);
                objName.initMarkerArr.push(initMarker);
                //地图元素和列表联动
                addMapToListFun(initMarker, count, objName);
            }
        } else {
            clearInterval(objName.setInt);
        }
        count++;
    }, 90);
}

/**
 * @title:addMapToListFun
 * @description:地图元素和列表联动
 * @author: zhou_lijun@founder.com
 * @param
 * @date:2016-04-5 10:10:54
 */
function addMapToListFun(PMarker, row, objName) {
    PMarker.addListener("click", function () {
        addClickMarker(row, objName);
    });
}

/**
 * @title:addClickMarker
 * @description:地图图标变换
 * @author: zhou_lijun@founder.com
 * @param
 * @date:2016-04-5 10:10:54
 */
function addClickMarker(row, objName) {
    if (objName.map._MapApp == null || objName.map._MapApp == "undefined") {
        return;
    }
    //关闭所有器已经打开的气泡框
    objName.map._MapApp.closeInfoWindow();
    if (objName.initMarker != "") {
        //清除之前的坐标点
        objName.map._MapApp.removeOverlay(objName.initMarker);
    }
    //获取基本信息内容
    var rows = objName.getRows();
    if(rows==undefined){
        return;
    }
    var rowData = rows[row];
    var title = rowData[objName.title];
    var zbx = rowData[objName.zbx];
    var zby = rowData[objName.zby];
    if (zbx != "" && zby != "") {
        objName.initMarker = objName.map.initMarker(title, zbx, zby, 'syrkRedSmall.png', null, null, 43, 37);
        objName.map._MapApp.addOverlay(objName.initMarker);
        //鼠标移动到点上列表选中
         $('#'+ objName.datagrid).datagrid("selectRow", row);
        //打开气泡
        openInfoWindow(row, objName);
    }
}

/**
 * @title:openInfoWindow
 * @description:打开气泡框内容
 * @author: zhou_lijun@founder.com
 * @param
 * @date:2016-04-5 10:10:54
 */
function openInfoWindow(row, objName) {
    //获取基本信息内容
    var rows =  objName.getRows();
    if(rows==undefined){
        return;
    }
    var rowData = rows[row];
    var zbx = rowData.jzd_zbx;
    var zby = rowData.jzd_zby;
    var point = new Point(zbx, zby);
    var openHtml = objName.buldHtml(rowData);
    //打开气泡框
    objName.map._MapApp.openInfoWindow(point, openHtml, true);
}

/**
 * @title:onClickRow
 * @description:点击列表事件
 * @author: zhou_lijun@founder.com
 * @param
 * @date:2016-04-5 10:10:54
 */
function onClickRow(rowIndex, objName) {
    addClickMarker(rowIndex, objName);
}