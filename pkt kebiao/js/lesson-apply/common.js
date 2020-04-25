//绑定需要浮动的表头
var dayArray = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
//阿拉伯数字转换为简写汉字
function Arabia_To_SimplifiedChinese(Num) {
    for (i = Num.length - 1; i >= 0; i--) {
        Num = Num.replace(",", "")//替换Num中的“,”
        Num = Num.replace(" ", "")//替换Num中的空格
    }
    if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return;
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
    part = String(Num).split(".");
    newchar = "";
    //小数点前进行转化
    for (i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            //alert("位数过大，无法计算");
            return "";
        }//若数量超过拾亿单位，提示
        tmpnewchar = ""
        perchar = part[0].charAt(i);
        switch (perchar) {
            case "0": tmpnewchar = "零" + tmpnewchar; break;
            case "1": tmpnewchar = "一" + tmpnewchar; break;
            case "2": tmpnewchar = "二" + tmpnewchar; break;
            case "3": tmpnewchar = "三" + tmpnewchar; break;
            case "4": tmpnewchar = "四" + tmpnewchar; break;
            case "5": tmpnewchar = "五" + tmpnewchar; break;
            case "6": tmpnewchar = "六" + tmpnewchar; break;
            case "7": tmpnewchar = "七" + tmpnewchar; break;
            case "8": tmpnewchar = "八" + tmpnewchar; break;
            case "9": tmpnewchar = "九" + tmpnewchar; break;
        }
        switch (part[0].length - i - 1) {
            case 0: tmpnewchar = tmpnewchar; break;
            case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
            case 2: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
            case 3: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
            case 4: tmpnewchar = tmpnewchar + "万"; break;
            case 5: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
            case 6: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
            case 7: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
            case 8: tmpnewchar = tmpnewchar + "亿"; break;
            case 9: tmpnewchar = tmpnewchar + "十"; break;
        }
        newchar = tmpnewchar + newchar;
    }
    //替换所有无用汉字，直到没有此类无用的数字为止
    while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
        newchar = newchar.replace("零亿", "亿");
        newchar = newchar.replace("亿万", "亿");
        newchar = newchar.replace("零万", "万");
        newchar = newchar.replace("零零", "零");
    }
    //替换以“一十”开头的，为“十”
    if (newchar.indexOf("一十") == 0) {
        newchar = newchar.substr(1);
    }
    //替换以“零”结尾的，为“”
    if (newchar.lastIndexOf("零") == newchar.length - 1) {
        newchar = newchar.substr(0, newchar.length - 1);
    }
    return newchar;
}
//判断浏览器是否为IE
function isIE() {
    if (window.navigator.userAgent.indexOf("MSIE") >= 1 || !!window.ActiveXObject || "ActiveXObject" in window)
        return true;
    else
        return false;
}
//判断浏览器
var browser = function () {
    var agent = navigator.userAgent.toLowerCase(),
    opera = window.opera,
    browser = {
        //检测当前浏览器是否为IE  
        ie: /(msie\s|trident.*rv:)([\w.]+)/.test(agent),
        //检测当前浏览器是否为Opera  
        opera: (!!opera && opera.version),
        //检测当前浏览器是否是webkit内核的浏览器  
        webkit: (agent.indexOf(' applewebkit/') > -1),
        //检测当前浏览器是否是运行在mac平台下  
        mac: (agent.indexOf('macintosh') > -1),
        //检测当前浏览器是否处于“怪异模式”下  
        quirks: (document.compatMode == 'BackCompat')
    };
    //检测当前浏览器内核是否是gecko内核  
    browser.gecko = (navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie);
    var version = 0;
    // Internet Explorer 6.0+  
    if (browser.ie) {
        var v1 = agent.match(/(?:msie\s([\w.]+))/);
        var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
        if (v1 && v2 && v1[1] && v2[1]) {
            version = Math.max(v1[1] * 1, v2[1] * 1);
        } else if (v1 && v1[1]) {
            version = v1[1] * 1;
        } else if (v2 && v2[1]) {
            version = v2[1] * 1;
        } else {
            version = 0;
        }
        //检测浏览器模式是否为 IE11 兼容模式  
        browser.ie11Compat = document.documentMode == 11;
        //检测浏览器模式是否为 IE9 兼容模式  
        browser.ie9Compat = document.documentMode == 9;
        //检测浏览器模式是否为 IE10 兼容模式  
        browser.ie10Compat = document.documentMode == 10;
        //检测浏览器是否是IE8浏览器  
        browser.ie8 = !!document.documentMode;
        //检测浏览器模式是否为 IE8 兼容模式  
        browser.ie8Compat = document.documentMode == 8;
        //检测浏览器模式是否为 IE7 兼容模式  
        browser.ie7Compat = ((version == 7 && !document.documentMode) || document.documentMode == 7);
        //检测浏览器模式是否为 IE6 模式 或者怪异模式  
        browser.ie6Compat = (version < 7 || browser.quirks);
        browser.ie9above = version > 8;
        browser.ie9below = version < 9;
    }
    // Gecko.  
    if (browser.gecko) {
        var geckoRelease = agent.match(/rv:([\d\.]+)/);
        if (geckoRelease) {
            geckoRelease = geckoRelease[1].split('.');
            version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
        }
    }
    //检测当前浏览器是否为Chrome, 如果是，则返回Chrome的大版本号  
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        browser.chrome = +RegExp['\x241'];
    }
    //检测当前浏览器是否为Safari, 如果是，则返回Safari的大版本号  
    if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
        browser.safari = +(RegExp['\x241'] || RegExp['\x242']);
    }
    // Opera 9.50+  
    if (browser.opera)
        version = parseFloat(opera.version());
    // WebKit 522+ (Safari 3+)  
    if (browser.webkit)
        version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
    //检测当前浏览器版本号  
    browser.version = version;
    return browser;
};
//获取选中集合
function getCheckedString(docName, selector) {
    var $d = $(docName);
    var string = '';
    $d.find('input[type="checkbox"]:checked').each(function () {
        if (selector == undefined) {
            string += $(this).val() + ",";
        } else {
            string += $(this).nextAll(selector).val() + ",";
        }
    });
    if (string.length > 0) {
        string = string.substring(0, string.length - 1);
    }
    return string;
}
// 字符串像素
var pixelsLoadCount = 0;
function calcStringPixelsCount(str, strFontSize) {
    // 字符串像素个数
    var stringPixelsCount = 0;
    var pixelsCount = 0;
    // JS 创建HTML元素：span
    if (pixelsLoadCount == 0) {
        var elementPixelsLengthRuler = document.createElement("span");
        elementPixelsLengthRuler.id = "span";
        elementPixelsLengthRuler.style.fontSize = strFontSize;  // 设置span的fontsize
        elementPixelsLengthRuler.style.visibility = "hidden";  // 设置span不可见
        elementPixelsLengthRuler.style.display = "inline-block";
        elementPixelsLengthRuler.style.wordBreak = "break-all !important";  // 打断单词
        // 添加span
        document.body.appendChild(elementPixelsLengthRuler);
        elementPixelsLengthRuler.innerHTML = "a";
    } else {
        elementPixelsLengthRuler = document.getElementById("span");
    }
    pixelsCount = elementPixelsLengthRuler.offsetWidth;

    stringPixelsCount = str.length * pixelsCount;  //先把中文替换成两个字节的英文，在计算长度

    pixelsLoadCount++;
    return stringPixelsCount;
}
//获取字符串长度（汉字算两个字符，字母数字算一个）
function getByteLen(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 2;
        }
        else {
            len += 1;
        }
    }
    return len;
}
//补0
function prefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}
//获取数组最大或最小值
function getArrMost(most, data, param) {
    var string = "";
    if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            var params = param == undefined ? data[i] : eval("data[i]." + param);
            if (most == "max") {
                string = params > string ? params : string;
            } else {
                string = params < string ? params : string;
            }
        }
    }
    return string;
}
//获取数组index
var jsonApplyDataIndex = function (data, val, doc) {
    if (data != undefined) {
        for (var i = 0; i < data.length; i++) {
            if (doc != undefined) {
                if (eval("data[i]." + doc) == val) return i;
            } else {
                if (eval("data[i]") == val) return i;
            }
        }
    }
    return -1;
}
//===========================工具类函数============================

//JS格式化数字（每三位加逗号）
function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

// 替换指定的字符串
function replaceStr(originalStr, oldStr, newStr) {
    if (oldStr == "") {
        return "";
    }
    return originalStr.replace(oldStr, newStr);
}

//截取字符串
function cutString(text, num) {
    if (text.length > num) {
        return text.substring(0, num) + "...";
    }
    else {
        return text;
    }
}
//判断是否为JSON
function isJson(str) {
    if (!str.match("^\{(.+:.+,*){1,}\}$")) {
        return false;
    }
    else {
        return true;
    }
}
//检查短信字数
function checktxt(obj, txtId) {
    var txtCount = $(obj).val().length;
    if (txtCount < 1) {
        return false;
    }
    var smsLength = Math.ceil(txtCount / 62);
    $("#" + txtId).html("您已输入<b>" + txtCount + "</b>个字符，将以<b>" + smsLength + "</b>条短信扣取费用。");
}
//四舍五入函数
function ForDight(Dight, How) {
    Dight = Math.round(Dight * Math.pow(10, How)) / Math.pow(10, How);
    return Dight;
}
//只允许输入数字
function checkNumber(e) {
    var keynum = window.event ? e.keyCode : e.which;
    if ((48 <= keynum && keynum <= 57) || (keynum > 95 && keynum < 106) || keynum == 8) {
        return true;
    } else {
        return false;
    }
}
//只允许输入小数
function checkForFloat(obj, e) {
    var isOK = false;
    var key = window.event ? e.keyCode : e.which;
    if ((key > 95 && key < 106) || //小键盘上的0到9  
        (key > 47 && key < 60) ||  //大键盘上的0到9  
        (key == 110 && obj.value.indexOf(".") < 0) || //小键盘上的.而且以前没有输入.  
        (key == 190 && obj.value.indexOf(".") < 0) || //大键盘上的.而且以前没有输入.  
         key == 8 || key == 9 || key == 46 || key == 37 || key == 39) {
        isOK = true;
    } else {
        if (window.event) { //IE
            e.returnValue = false;   //event.returnValue=false 效果相同.    
        } else { //Firefox 
            e.preventDefault();
        }
    }
    return isOK;
}
//===========================工具类函数============================


//===========================分页函数============================

//分页
function outPageList(pageSize, pageIndex, totalCount, centSize, callback) {
    if (totalCount > 0) {
        var pageStr = "";
        $pageStr = $("<div></div>");
        var pageCount = parseInt(totalCount / pageSize);
        if (totalCount % pageSize > 0) {
            pageCount += 1;
        }
        if ((totalCount > 1 || pageSize > 1) && pageCount >= 2) {
            var pageId = "__id__";
            var $firstBtn = $("<a href=\"javascript:;\">上一页</a>");
            $firstBtn.click(function () {
                callback(parseInt(pageIndex) - 1);
            });
            var $lastBtn = $("<a href=\"javascript:;\">下一页</a>");
            $lastBtn.click(function () {
                callback(parseInt(pageIndex) + 1);
            });

            var $firstStr = $("<a href=\"javascript:;\">1</a>");
            $firstStr.click(function () {
                callback(1);
            });
            var $lastStr = $("<a href=\"javascript:;\">" + pageCount + "</a>");
            $lastStr.click(function () {
                callback(pageCount);
            });
            if (parseInt(pageIndex) <= 1) {
                $firstBtn = $("<span class=\"disabled\">上一页</span>");
            }
            if (parseInt(pageIndex) >= pageCount) {
                $lastBtn = $("<span class=\"disabled\">下一页</span>");
            }
            if (parseInt(pageIndex) == 1) {
                $firstStr = $("<span class=\"current\">1</span>");
            }
            if (parseInt(pageIndex) == pageCount) {
                $lastStr = $("<span class=\"current\">" + pageCount + "</span>");
            }

            var firstNum = parseInt(pageIndex) - (centSize / 2); //中间开始的页码
            if (parseInt(pageIndex) < centSize)
                firstNum = 2;
            var lastNum = parseInt(pageIndex) + centSize - ((centSize / 2) + 1); //中间结束的页码
            if (lastNum >= pageCount)
                lastNum = pageCount - 1;
            $pageStr.append($firstBtn);
            $pageStr.append($firstStr);

            if (parseInt(pageIndex) >= centSize) {
                $pageStr.append($("<span>...</span>"));
            }

            for (var i = firstNum; i <= lastNum; i++) {

                if (i == parseInt(pageIndex)) {
                    $pageStr.append($("<span class=\"current\">" + i + "</span>"));
                }
                else {
                    var $p = $("<a  href=\"javascript:;\">" + i + "</a>");
                    $p.click(function () {
                        callback(parseInt($(this).text()));
                    });

                    $pageStr.append($p);
                }
            }

            if (pageCount - parseInt(pageIndex) > centSize - ((centSize / 2))) {
                $pageStr.append($("<span>...</span>"));
            }
            $pageStr.append($lastStr);
            $pageStr.append($lastBtn);
            $pageStr.append($("<span>共&nbsp;" + totalCount + "&nbsp;记录</span>"));
        }
        return $pageStr;
    }
}
//===========================分页函数============================

//===========================Cookie函数============================
//写Cookie
function addCookie(objName, objValue, objHours) {
    var str = objName + "=" + escape(objValue);
    if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}

//读Cookie
function getCookie(objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
    return "";
}
//===========================Cookie函数============================

//===========================日期函数============================
//获取加几天
function addDate(date, days) {
    var d = new Date(date);
    d.setDate(d.getDate() + days);
    var m = d.getMonth() + 1;
    return d.getFullYear() + '/' + m + '/' + d.getDate();
}
//计算两个日期天数差的函数，通用
function dateDiff(sDate1, sDate2) {  //sDate1和sDate2是yyyy/MM/dd格式
    var aDate, oDate1, oDate2, iDays;
    aDate = sDate1.split("/");
    oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);  //转换为yyyy/MM/dd格式
    aDate = sDate2.split("/");
    oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数

    return iDays;  //返回相差天数
}
//计算两个日期分钟差的函数，通用
function minuteDiff(sMinute1, sMinute2) {  //sDate1和sDate2是yyyy/MM/dd格式
    var iMinutes;
    var oDate1 = new Date('2000/01/01 ' + sMinute1);
    var oDate2 = new Date('2000/01/01 ' + sMinute2);
    iMinutes = parseInt(oDate2 - oDate1) / 1000 / 60; //把相差的毫秒数转换为天数
    return iMinutes;  //返回相差天数
}

//比较日期
function compareDate(beginDate, endDate) {
    if (beginDate.split(" ")[1] == "" || beginDate.split(" ")[1] == undefined) {
        beginDate = new Date(beginDate).format("yyyy/MM/dd 00:00:00");
    }
    if (endDate.split(" ")[1] == "" || endDate.split(" ")[1] == undefined) {
        endDate = new Date(endDate).format("yyyy/MM/dd 23:59:59");
    }
    var d1 = new Date(beginDate.replace(/\-/g, "\/"));
    var d2 = new Date(endDate.replace(/\-/g, "\/"));
    if (beginDate != "" && endDate != "" && d1 <= d2) {
        return true;
    }
    else {
        return false;
    }
}
//比较时间
function compareTime(beginTime, endTime) {
    if (parseInt(beginTime.split(':')[0], 10) * 60 + parseInt(beginTime.split(':')[1], 10) > parseInt(endTime.split(':')[0], 10) * 60 + parseInt(endTime.split(':')[1], 10)) {
        return true;
    }
    else {
        return false;
    }
}
//日期样式
Date.prototype.format = function (mask) {
    var d = this;
    var zeroize = function (value, length) {
        if (!length) length = 2;
        value = String(value);
        for (var i = 0, zeros = ''; i < (length - value.length) ; i++) {
            zeros += '0';
        }
        return zeros + value;
    };

    return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
        switch ($0) {
            case 'd': return d.getDate();
            case 'dd': return zeroize(d.getDate());
            case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
            case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
            case 'M': return d.getMonth() + 1;
            case 'MM': return zeroize(d.getMonth() + 1);
            case 'MMM': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
            case 'MMMM': return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
            case 'yy': return String(d.getFullYear()).substr(2);
            case 'yyyy': return d.getFullYear();
            case 'h': return d.getHours() % 12 || 12;
            case 'hh': return zeroize(d.getHours() % 12 || 12);
            case 'H': return d.getHours();
            case 'HH': return zeroize(d.getHours());
            case 'm': return d.getMinutes();
            case 'mm': return zeroize(d.getMinutes());
            case 's': return d.getSeconds();
            case 'ss': return zeroize(d.getSeconds());
            case 'l': return zeroize(d.getMilliseconds(), 3);
            case 'L': var m = d.getMilliseconds();
                if (m > 99) m = Math.round(m / 10);
                return zeroize(m);
            case 'tt': return d.getHours() < 12 ? 'am' : 'pm';
            case 'TT': return d.getHours() < 12 ? 'AM' : 'PM';
            case 'Z': return d.toUTCString().match(/[A-Z]+$/);
                // Return quoted strings with the surrounding quotes removed  
            default: return $0.substr(1, $0.length - 2);
        }
    });
}
//===========================日期函数============================