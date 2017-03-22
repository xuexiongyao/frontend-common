/**
 * Created by christ on 2016/11/3.
 * description：法律文书公共方法js文件
 */

/**
 * 设置页面高度
 */
function setPage() {
    var bodyHeight = $(window).height();
    $('.flws-main').css('height', (bodyHeight - 15) + 'px');
    $('.flws-main-con').css('height', (bodyHeight - 52) + 'px');
    $('.flws-main-con-l,.flws-main-con-r,.flws-mode-right').css('height', (bodyHeight - 52) + 'px');
    $('.flws-main-con-l .flws_xyr_area_wcl .xyr_box,.flws-main-con-l .flws_xyr_area_ycl .xyr_box').css('height', ((bodyHeight - 52) * 0.49 - 39) + 'px')
}

/**
 * 定义一个比较器
 * @param propertyName
 * @returns {Function}
 */
function compare(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 < value1) {
            return 1;
        } else if (value2 > value1) {
            return -1;
        } else {
            return 0;
        }
    }
}

/**
 * 两数组中根据某一对象属性匹配，返回不同的数组
 * @param a1  数组一
 * @param a2  数组二
 * @param param1  属性参数1
 * @param param2  属性参数2
 * @returns {Array}
 */
function getDiffer(a1, a2, param1, param2) {
    var idArr = [];
    var a3 = [];
    for (var j = 0; j < a2.length; j++) {
        idArr.push(a2[j][param2]);
    }
    for (var i = 0; i < a1.length; i++) {
        var a1_i = a1[i];
        if ($.inArray(a1_i[param1], idArr) == -1) {
            a3.push(a1_i);
        }
    }
    return a3;
}

/**
 * 获取文书模板数据请求方法
 */
function getHtmlByAjax(url) {
    loading('open','正在获取数据...');
    var data = '';
    $.ajax({
        url: url,
        type: 'get',
        async: false,
        cache: true,
        success: function (html) {
            data = html;
        },
        error: function () {
            console.log('获取页面模板失败');
        }
    });
    return data;
}

/**
 * 获取对象的属性个数
 */
function getObjLength(obj) {
    var count = 0;
    for(var k in obj){
        if(obj.hasOwnProperty(k)){
            count++;
        }
    }
    return count;
}


/**
 * 呈请报告textarea框的处理
 */
//最小高度
var minHeight = 500;
// 最大高度，超过则出现滚动条
var maxHeight = 10000;
//重置textarea
function resizeTextarea() {
    var t = document.getElementsByTagName('textarea')[0];
    var h = t.scrollHeight;
    h = h > minHeight ? h : minHeight;
    h = h > maxHeight ? maxHeight : h;
    t.style.height = h + "px";
}

//用'\t'替换回车
function replaceEnter() {
    //$("textarea").off('keyup').on('keyup', function (e) {
    //    resizeTextarea();
    //    if(e.which == 13){
    //        $(this).val($(this).val()+"\t");
    //    }
    //})
    $('textarea').off().on({
        keydown: function () {
            this.style.height = '0px';
            this.style.height = (this.scrollHeight + 'px');
        },
        keyup: function (e) {
            if (e.which == 13) {
                $(this).val($(this).val() + "\t");
            }
        },
        propertychange: function () {
            this.style.height = (this.scrollHeight + 'px');
        },
        input: function () {
            this.style.height = '0px';
            this.style.height = (this.scrollHeight + 'px');
        },
        scroll: function () {
            this.style.height = '0px';
            this.style.height = (this.scrollHeight + 'px');
        }
    });
}

//textarea框根据内容高度自适应高度
function autoTextarea(elem, extra, maxHeight) {
    extra = extra || 0;
    var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
        isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
        addEvent = function (type, callback) {
            elem.addEventListener ?
                elem.addEventListener(type, callback, false) :
                elem.attachEvent('on' + type, callback);
        },
        getStyle = elem.currentStyle ? function (name) {
            var val = elem.currentStyle[name];

            if (name === 'height' && val.search(/px/i) !== 1) {
                var rect = elem.getBoundingClientRect();
                return rect.bottom - rect.top -
                    parseFloat(getStyle('paddingTop')) -
                    parseFloat(getStyle('paddingBottom')) + 'px';
            }

            return val;
        } : function (name) {
            return getComputedStyle(elem, null)[name];
        },
        minHeight = parseFloat(getStyle('height'));

    elem.style.resize = 'none';

    var change = function () {
        var scrollTop, height,
            padding = 0,
            style = elem.style;

        if (elem._length === elem.value.length) return;
        elem._length = elem.value.length;

        if (!isFirefox && !isOpera) {
            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
        }
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        elem.style.height = minHeight + 'px';
        if (elem.scrollHeight > minHeight) {
            if (maxHeight && elem.scrollHeight > maxHeight) {
                height = maxHeight - padding;
                style.overflowY = 'auto';
            } else {
                height = elem.scrollHeight - padding;
                style.overflowY = 'hidden';
            }
            style.height = height + extra + 'px';
            scrollTop += parseInt(style.height) - elem.currHeight;
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            elem.currHeight = parseInt(style.height);
        }
    };

    addEvent('propertychange', change);
    addEvent('input', change);
    addEvent('focus', change);
    change();
}

/**
 * 获取当前时间并格式化为'yyyy-MM-dd HH:mm:ss'
 * @returns {string}
 */
function getCurrentTime() {
    var myDate = new Date();
    var yyyy = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var MM = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
    var dd = myDate.getDate();        //获取当前日(1-31)
    var HH = myDate.getHours();       //获取当前小时数(0-23)
    var mm = myDate.getMinutes();     //获取当前分钟数(0-59)
    var ss = myDate.getSeconds();     //获取当前秒数(0-59)
    if (MM < 10) MM = '0' + MM;
    if (dd < 10) dd = '0' + dd;
    if (HH < 10) HH = '0' + HH;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss;
}

/**
 * wdate时间控件内容校验
 * @param obj:当前对象this
 */
function wdateValidate(obj) {
    var $this = $(obj);
    $this.validatebox();
}

/**************************数字转汉字*******************************/
//对“零”的第三个规则，把检测放在循环的最前面并默认为false，可以自然的丢弃最高小节的加零判断。
//单个数字转换用数组实现，
var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
//节权位同样用数组实现，
var chnUnitSection = ["", "万", "亿", "万亿", "亿亿"];
//节内权位同样用数组实现，
var chnUnitChar = ["", "十", "百", "千"];

//节内转换算法
function SectionToChinese(section) {
    var strIns = '', chnStr = '';
    var unitPos = 0;
    var zero = true;
    while (section > 0) {
        var v = section % 10;
        if (v === 0) {
            if (!zero) {
                zero = true;
                chnStr = chnNumChar[v] + chnStr;
            }
        } else {
            zero = false;
            strIns = chnNumChar[v];
            strIns += chnUnitChar[unitPos];
            chnStr = strIns + chnStr;
        }
        unitPos++;
        section = Math.floor(section / 10);
    }
    return chnStr;
}

//转换算法主函数：
function NumberToChinese(num) {
    var unitPos = 0;
    var strIns = '', chnStr = '';
    var needZero = false;

    if (num === 0) {
        return chnNumChar[0];
    }

    while (num > 0) {
        var section = num % 10000;
        if (needZero) {
            chnStr = chnNumChar[0] + chnStr;
        }
        strIns = SectionToChinese(section);
        strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
        chnStr = strIns + chnStr;
        needZero = (section < 1000) && (section > 0);
        num = Math.floor(num / 10000);
        unitPos++;
    }

    return chnStr;
}

/***************************end*********************************/

/***********************Arabia_to_Chinese***********************/
/**
 * 金额的转化  阿拉伯数字转金额 Arabia_to_Chinese
 * @param Num
 * @returns {string}
 * @constructor
 */
function Arabia_to_Chinese(Num) {
    for (i = Num.length - 1; i >= 0; i--) {
        Num = Num.replace(",", "");//替换tomoney()中的“,”
        Num = Num.replace(" ", "");//替换tomoney()中的空格
    }
    Num = Num.replace("￥", "");//替换掉可能出现的￥字符
    if (isNaN(Num)) { //验证输入的字符是否为数字
        $.messager.show({
            title: '提示',
            msg: '请检查小写金额是否正确',
            icon: 'warning'
        });
        return;
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
    var part = String(Num).split(".");
    var newchar = "";
    //小数点前进行转化
    for (i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            $.messager.show({
                title: '提示',
                msg: '位数过大，无法计算',
                icon: 'warning'
            });
            return "";
        }//若数量超过拾亿单位，提示
        var tmpnewchar = "";
        var perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":
                tmpnewchar = "零" + tmpnewchar;
                break;
            case "1":
                tmpnewchar = "壹" + tmpnewchar;
                break;
            case "2":
                tmpnewchar = "贰" + tmpnewchar;
                break;
            case "3":
                tmpnewchar = "叁" + tmpnewchar;
                break;
            case "4":
                tmpnewchar = "肆" + tmpnewchar;
                break;
            case "5":
                tmpnewchar = "伍" + tmpnewchar;
                break;
            case "6":
                tmpnewchar = "陆" + tmpnewchar;
                break;
            case "7":
                tmpnewchar = "柒" + tmpnewchar;
                break;
            case "8":
                tmpnewchar = "捌" + tmpnewchar;
                break;
            case "9":
                tmpnewchar = "玖" + tmpnewchar;
                break;
        }
        switch (part[0].length - i - 1) {
            case 0:
                tmpnewchar = tmpnewchar + "元";
                break;
            case 1:
                if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 2:
                if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 3:
                if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 4:
                tmpnewchar = tmpnewchar + "万";
                break;
            case 5:
                if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 6:
                if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 7:
                if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 8:
                tmpnewchar = tmpnewchar + "亿";
                break;
            case 9:
                tmpnewchar = tmpnewchar + "拾";
                break;
        }
        newchar = tmpnewchar + newchar;
    }
    //小数点之后进行转化
    if (Num.indexOf(".") != -1) {
        if (part[1].length > 2) {
            $.messager.show({
                title: '提示',
                msg: '小数点之后只能保留两位,系统将自动截断',
                icon: 'warning'
            });
            part[1] = part[1].substr(0, 2)
        }
        for (var i = 0; i < part[1].length; i++) {
            tmpnewchar = "";
            perchar = part[1].charAt(i);
            switch (perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar;
                    break;
                case "1":
                    tmpnewchar = "壹" + tmpnewchar;
                    break;
                case "2":
                    tmpnewchar = "贰" + tmpnewchar;
                    break;
                case "3":
                    tmpnewchar = "叁" + tmpnewchar;
                    break;
                case "4":
                    tmpnewchar = "肆" + tmpnewchar;
                    break;
                case "5":
                    tmpnewchar = "伍" + tmpnewchar;
                    break;
                case "6":
                    tmpnewchar = "陆" + tmpnewchar;
                    break;
                case "7":
                    tmpnewchar = "柒" + tmpnewchar;
                    break;
                case "8":
                    tmpnewchar = "捌" + tmpnewchar;
                    break;
                case "9":
                    tmpnewchar = "玖" + tmpnewchar;
                    break;
            }
            if (i == 0) tmpnewchar = tmpnewchar + "角";
            if (i == 1) tmpnewchar = tmpnewchar + "分";
            newchar = newchar + tmpnewchar;
        }
    }
    //替换所有无用汉字
    while (newchar.search("零零") != -1)
        newchar = newchar.replace("零零", "零");
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零元", "元");
    newchar = newchar.replace("零角", "");
    newchar = newchar.replace("零分", "");
//        if (newchar.charAt(newchar.length - 1) == "元" || newchar.charAt(newchar.length - 1) == "角")
    if (newchar.charAt(newchar.length - 1) == "元")
        newchar = newchar + "整";
    return newchar;
}
/*****************************end**********************************/
/**
 * 数组去重
 * @returns {Array}
 */
Array.prototype.uniqueChrist = function () {
    var n = {}, r = []; //n为hash表，r为临时数组
    for (var i = 0; i < this.length; i++) //遍历当前数组
    {
        if (!n[this[i]]) //如果hash表中没有当前项
        {
            n[this[i]] = true; //存入hash表
            r.push(this[i]); //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
};

/**
 * hash对象中数组去重
 * @param o hash对象
 * @returns {{}}
 */
function hashObjUnique(o) {
    var n = {};//新的hash表
    for (var k in o) {
        var array = o[k];
        var newA = array.uniqueChrist();
        n[k] = newA;
    }
    return n;
}

/**
 * 定义是否包含
 * @param str
 * @param substr
 * @returns {boolean}
 */
function isContains(str, substr) {
    return str.indexOf(substr) >= 0;
}

/**
 * 是否为中文字符的判断
 * @param str 字符串
 * @returns {boolean} 返回值
 */
function isChineseChar(str){
    var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
    return reg.test(str);
}