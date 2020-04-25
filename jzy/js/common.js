// 布局脚本
mui.plusReady(function() {
	var token = getSelfToken();
	var all = parseUrl(); 
	var area_id = all["area_id"];  
	//	alert(token)
	jQuery("a").each(function(i) {
		if(jQuery(this).attr("href") != "" && jQuery(this).attr("href") != undefined && jQuery(this).attr("href").indexOf("#") == -1) {
			if(jQuery(this).attr("href").indexOf("area_id") == -1) {
				//无area_id
				if(jQuery(this).attr("href").indexOf("?") == -1) {
					jQuery(this).attr("href", jQuery(this).attr("href") + "?token=" + token + "&area_id=" + area_id);
				} else {
					jQuery(this).attr("href", jQuery(this).attr("href") + "&token=" + token + "&area_id=" + area_id);
				}
			} else {
				//有area_id
				if(jQuery(this).attr("href").indexOf("?") == -1) {
					jQuery(this).attr("href", jQuery(this).attr("href") + "?token=" + token);
				} else {
					jQuery(this).attr("href", jQuery(this).attr("href") + "&token=" + token);
				}
			}
//									console.log(jQuery(this).attr("href"))
		}
	})
	jQuery("a").click(function() {
		if(jQuery(this).attr("href") != "" && jQuery(this).attr("href") != undefined) {
//			console.log(area_id)
			if(area_id == 1) {
				document.location.href = jQuery(this).attr("href");
			}else if(area_id == 10) {
				if(jQuery(this).attr("href").indexOf("index")!=-1||jQuery(this).attr("href").indexOf("structure")!=-1||jQuery(this).attr("href").indexOf("contact")!=-1||jQuery(this).attr("href").indexOf("home_page")!=-1||jQuery(this).attr("href").indexOf("equip")!=-1){
					 document.location.href = jQuery(this).attr("href");
				}else{
					mui.alert("暂无数据")
				}
			}
		}
	})

//隐藏 
for(var i=0;i<jQuery(".mui-table-view-cell").length;i++){
	
if(jQuery(".mui-table-view-cell").eq(i).find("a").text()=="基础沉降"){ 
	jQuery(".mui-table-view-cell").eq(i).addClass("hide");
}

if(jQuery(".mui-table-view-cell").eq(i).find("a").text()=="供电安全"){ 
	jQuery(".mui-table-view-cell").eq(i).addClass("hide");
} 
}


});

//获取token mui.plusReady内
function getSelfToken() {
	var self = plus.webview.currentWebview();
	var token = self.token; //获取当前页面所属的id 
	if(token == undefined) {
		var all = parseUrl();
		if(all != undefined) {
			token = all["token"];

		}
	}
	return token
} 

function overTime(msg){
	if(msg==-500){  
	 	removeStorage("token");
	 	location = "login.html";
	 	return false;
	}
}

/*====================================
 *基于JQuery 1.9.0主框架
====================================*/

function initEasyDropDown(selector) {
	$(selector).easyDropDown({
		cutOff: 10
	});
	initScroll(".lselect", 280, "100%");
}

function initSidebar() {
	$(".sidebar-open").click(function() {
		if($(this).attr("data-name") != "" || $(this).attr("data-name") != undefined) {
			$('.' + $(this).attr("data-name")).iCheck('check');
			$('input[name="' + $(this).attr("data-name") + '"]').iCheck('check');
		}
		$(".sidebar-right").animate({
			"right": 0
		})
	});
	$(".sidebar-close").click(function() {
		$(".sidebar-right").animate({
			"right": -220
		})
	});
	$('input[type="checkbox"]').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue',
		increaseArea: '20%'
	});
	$('input[type="checkbox"]').on("ifChanged", function(e) {
		//console.log(e.target)
		var name = $(this).attr("class");
		var isChecked = $(this).is(':checked');
		if(name != "" || name != undefined) {
			if(isChecked) {
				$('input[name="' + name + '"]').iCheck('check');
			} else {
				$('input[name="' + name + '"]').iCheck('uncheck');
			}
		}
	});
	initScroll(".sidebar-right", $(window).height(), 220);
}

function closeSidebar() {
	$(".sidebar-right").animate({
		"right": -220
	});
}

function initScroll(selector, height, width) {
	$(selector).slimScroll({
		width: width,
		height: height,
		alwaysVisible: true
	});
}

function setKeyword(obj) {
	var keywords = $(obj).is(":focus");
	var onclick = $(obj).nextAll("input[type='button']").attr("onclick");
	if(keywords) {
		document.onkeydown = function(e) {
			var ev = document.all ? window.event : e;
			if(ev.keyCode == 13) {
				eval(onclick);
			}
		}
	}
}

function isPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	var flag = true;
	for(var v = 0; v < Agents.length; v++) {
		if(userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

function browser() {
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
	if(browser.ie) {
		var v1 = agent.match(/(?:msie\s([\w.]+))/);
		var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
		if(v1 && v2 && v1[1] && v2[1]) {
			version = Math.max(v1[1] * 1, v2[1] * 1);
		} else if(v1 && v1[1]) {
			version = v1[1] * 1;
		} else if(v2 && v2[1]) {
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
	if(browser.gecko) {
		var geckoRelease = agent.match(/rv:([\d\.]+)/);
		if(geckoRelease) {
			geckoRelease = geckoRelease[1].split('.');
			version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
		}
	}
	//检测当前浏览器是否为Chrome, 如果是，则返回Chrome的大版本号  
	if(/chrome\/(\d+\.\d)/i.test(agent)) {
		browser.chrome = +RegExp['\x241'];
	}
	//检测当前浏览器是否为Safari, 如果是，则返回Safari的大版本号  
	if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
		browser.safari = +(RegExp['\x241'] || RegExp['\x242']);
	}
	// Opera 9.50+  
	if(browser.opera)
		version = parseFloat(opera.version());
	// WebKit 522+ (Safari 3+)  
	if(browser.webkit)
		version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
	//检测当前浏览器版本号  
	browser.version = version;
	return browser;
};

//地址栏获取参数
function getParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
//全选取消按钮函数
function checkAllItem(chkobj, docName) {
	if($(chkobj).children("span").text() == "全选") {
		$(chkobj).children("span").text("取消");
		$('#' + docName).find('input[type="checkbox"]').prop("checked", true);
	} else {
		$(chkobj).children("span").text("全选");
		$('#' + docName).find('input[type="checkbox"]').prop("checked", false);
	}
}

function checkAll(chkobj, docName) {
	if($(chkobj).children("span").text() == "全选") {
		$(chkobj).children("span").text("取消");
		$(chkobj).children("i").removeClass("fa-square-o").addClass("fa-check-square");
		$('#' + docName).find('input[type="checkbox"]').prop("checked", true);
	} else {
		$(chkobj).children("span").text("全选");
		$(chkobj).children("i").removeClass("fa-check-square").addClass("fa-square-o");
		$('#' + docName).find('input[type="checkbox"]').prop("checked", false);
	}
}
//获取选中checkboxID
function getIds(docName) {
	var $d = $(docName);
	var ids = "";
	$d.find('input[type="checkbox"]:checked').each(function() {
		ids += $(this).nextAll('input').val() + ",";
	});
	if(ids.length > 0) {
		ids = ids.substring(0, ids.length - 1);
	}
	return ids;
}

function getSelfIds(docName) {
	var $d = $(docName);
	var ids = "";
	$d.find('input[type="checkbox"]:checked').each(function() {
		if($(this).attr("name") != undefined) {
			ids += $(this).val() + ",";
		}
	});
	if(ids.length > 0) {
		ids = ids.substring(0, ids.length - 1);
	}
	return ids;
}
//===========================工具类函数============================
//只允许输入数字
function checkNumber(e) {
	var keynum = window.event ? e.keyCode : e.which;
	if((48 <= keynum && keynum <= 57) || keynum == 8) {
		return true;
	} else {
		return false;
	}
}
//截取字符串
function cutString(text, num) {
	if(text.length > num) {
		return text.substring(0, num) + "...";
	} else {
		return text;
	}
}
//判断是否为JSON
function isJson(str) {
	if(!str.match("^\{(.+:.+,*){1,}\}$")) {
		return false;
	} else {
		return true;
	}
}

//只允许输入小数
function checkForFloat(obj, e) {
	var isOK = false;
	var key = window.event ? e.keyCode : e.which;
	if((key > 95 && key < 106) || //小键盘上的0到9  
		(key > 47 && key < 60) || //大键盘上的0到9  
		(key == 110 && obj.value.indexOf(".") < 0) || //小键盘上的.而且以前没有输入.  
		(key == 190 && obj.value.indexOf(".") < 0) || //大键盘上的.而且以前没有输入.  
		key == 8 || key == 9 || key == 46 || key == 37 || key == 39) {
		isOK = true;
	} else {
		if(window.event) { //IE
			e.returnValue = false; //event.returnValue=false 效果相同.    
		} else { //Firefox 
			e.preventDefault();
		}
	}
	return isOK;
}
//检查短信字数
function checktxt(obj, txtId) {
	var txtCount = $(obj).val().length;
	if(txtCount < 1) {
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
//写Cookie
function addCookie(objName, objValue, objHours) {
	var str = objName + "=" + escape(objValue);
	if(objHours > 0) { //为0时不设定过期时间，浏览器关闭时cookie自动消失
		var date = new Date();
		var ms = objHours * 3600 * 1000;
		date.setTime(date.getTime() + ms);
		str += "; expires=" + date.toGMTString();
	}
	document.cookie = str;
}

//读Cookie
function getCookie(objName) { //获取指定名称的cookie的值
	var arrStr = document.cookie.split("; ");
	for(var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split("=");
		if(temp[0] == objName) return unescape(temp[1]);
	}
	return "";
}

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

    return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|H{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
        switch ($0) {
            case 'd': return d.getDate();
            case 'dd': return zeroize(d.getDate());
            case 'ddd': return [7, 1, 2, 3, 4, 5, 6][d.getDay()];
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
            case 'HHH': return zeroize(d.getHours() - 1);
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
//获取前几天日期
function getBeforeDate(n) {
	var n = n;
	var d = new Date();
	var year = d.getFullYear();
	var mon = d.getMonth() + 1;
	var day = d.getDate();
	if(day <= n) {
		if(mon > 1) {
			mon = mon - 1;
		} else {
			year = year - 1;
			mon = 12;
		}
	}
	d.setDate(d.getDate() - n);
	year = d.getFullYear();
	mon = d.getMonth() + 1;
	day = d.getDate();
	s = year + "/" + (mon < 10 ? ('0' + mon) : mon) + "/" + (day < 10 ? ('0' + day) : day);
	return s;
}
//获取前几月日期
function getBeforeMonth(n) {
	var d = new Date();
	var year = d.getFullYear(); //获取当前日期的年份
	var mon = d.getMonth() + 1; //获取当前日期的月份
	var day = d.getDate(); //获取当前日期的日
	var days = new Date(year, mon, 0);
	days = days.getDate(); //获取当前日期中月的天数
	var year2 = year;
	var month2 = parseInt(mon) - n;
	if(month2 <= 0) {
		year2 = parseInt(year2) - 1;
		month2 = 12 - n;
	}
	if(month2 >= 13) {
		year2 = parseInt(year2) + 1;
		month2 = month2 - 12;
	}
	var day2 = day;
	var days2 = new Date(year2, month2, 0);
	days2 = days2.getDate();
	if(day2 > days2) {
		day2 = days2;
	}
	if(month2 < 10) {
		month2 = '0' + month2;
	}
	var t2 = year2 + '/' + month2 + '/' + day2;
	return t2;
}
//获取前几年日期
function getBeforeYear(n) {
	var d = new Date();
	var year = d.getFullYear(); //获取当前日期的年份
	var mon = d.getMonth() + 1; //获取当前日期的月份
	var day = d.getDate(); //获取当前日期的日
	var year2 = year - n;
	var t2 = year2 + '/' + pad(mon, 2) + '/' + pad(day, 2);
	return t2;
}

function pad(num, n) {
	return Array(n > num ? (n - ('' + num).length + 1) : 0).join(0) + num;
}
//日期差
function getDateDiff(startDate, endDate) { //sDate1和sDate2是2006-12-18格式  
	var startTime = new Date(Date.parse(startDate.replace(/-/g, "-"))).getTime();
	var endTime = new Date(Date.parse(endDate.replace(/-/g, "-"))).getTime();
	var dates = (startTime - endTime) / (1000 * 60 * 60 * 24);
	return dates + 1;
}

//======================以上基于layer插件======================
//iframe层
function jsOther(title, url, width, height) {
	if(width != undefined && height != undefined) {
		layer.open({
			title: title,
			type: 2,
			scrollbar: false, //浏览器滚动条已锁
			area: [width, height],
			fix: true, //不固定
			content: url
		});
	} else if(width != undefined) {
		layer.open({
			title: title,
			type: 2,
			scrollbar: false, //浏览器滚动条已锁
			area: [width, "100%"],
			fix: true, //不固定
			content: url
		});
	} else if(height != undefined) {
		layer.open({
			title: title,
			type: 2,
			scrollbar: false, //浏览器滚动条已锁
			area: ["100%", height],
			fix: true, //不固定
			content: url
		});
	} else {
		layer.open({
			title: title,
			type: 2,
			scrollbar: false, //浏览器滚动条已锁
			area: ["100%", "100%"],
			fix: true, //不固定
			content: url
		});
	}
}
//iframe层
function jsOtherNoclose(title, url) {
	layer.open({
		title: title,
		type: 2,
		scrollbar: false, //浏览器滚动条已锁
		area: ["100%", "100%"],
		fix: true, //不固定
		closeBtn: 0,
		content: url
	});
}
//可以自动关闭的提示，基于layer插件
function jsprint(msgtitle, url, callback, option) {
	if(msgtitle != "") {
		layer.msg(msgtitle, {
			icon: option
		}, function() {
			if(url == "back") {;
				history.back(-1);
			} else if(url != "") {
				location.href = url;
			}
			//执行回调函数
			if(arguments.length == 3) {
				callback();
			}
		});
	}
}

// 不可以自动关闭的提示，基于layer插件
function jsTip(msgcontent, callback, option) {
	if(option != undefined) {
		if(option.icon == undefined) {
			layer.alert(msgcontent);
		} else {
			layer.alert(msgcontent, {
				icon: option.icon
			});
		}
	} else {
		layer.alert(msgcontent);
	}
}

function jsConfirm(msgcontent, msg, callback, cancel) {
	layer.msg(msgcontent, {
		time: 0 //不自动关闭
			,
		btn: ['确定', '取消'],
		yes: function(index) {
			//layer.close(index);
			layer.msg(msg, {
				icon: 6,
				time: 0,
				btn: ['确定'],
				yes: function(back) {
					if(callback != undefined) {
						callback();
					}
				}
			});
		},
		no: function(index) {
			layer.close(index);
			if(cancel != undefined) {
				cancel();
			}
		}
	});
}

function jsConfirmSingle(msgcontent, callback, cancel) {
	layer.msg(msgcontent, {
		time: 0 //不自动关闭
			,
		btn: ['确定', '取消'],
		yes: function(index) {
				layer.close(index);
				//layer.msg(msg, {
				//    icon: 6, time: 0, btn: ['确定']
				//, yes: function (back) {
				if(callback != undefined) {
					callback();
				}
			}
			// });
			// }
			,
		no: function(index) {
			layer.close(index);
			if(cancel != undefined) {
				cancel();
			}
		}
	});
}
//======================以上基于layer插件======================

//========================基于Validform插件========================
//初始化验证表单
$.fn.initValidform = function(beforeSubmit) {
	var checkValidform = function(formObj) {
		$(formObj).Validform({
			tiptype: function(msg, o, cssctl) {
				/*msg：提示信息;
				o:{obj:*,type:*,curform:*}
				obj指向的是当前验证的表单元素（或表单对象）；
				type指示提示的状态，值为1、2、3、4， 1：正在检测/提交数据，2：通过验证，3：验证失败，4：提示ignore状态；
				curform为当前form对象;
				cssctl:内置的提示信息样式控制函数，该函数需传入两个参数：显示提示信息的对象 和 当前提示的状态（既形参o中的type）；*/
				//全部验证通过提交表单时o.obj为该表单对象;
				if(!o.obj.is("form")) {
					//定位到相应的Tab页面
					if(o.obj.is(o.curform.find(".Validform_error:first"))) {
						var tabobj = o.obj.parents(".tab-content"); //显示当前的选项
						var tabindex = $(".tab-content").index(tabobj); //显示当前选项索引
						if(!$(".content-tab ul li").eq(tabindex).children("a").hasClass("selected")) {
							$(".content-tab ul li a").removeClass("selected");
							$(".content-tab ul li").eq(tabindex).children("a").addClass("selected");
							$(".tab-content").hide();
							tabobj.show();
						}
					}
					//页面上不存在提示信息的标签时，自动创建;
					if(o.obj.parents("dd").find(".Validform_checktip").length == 0) {
						o.obj.parents("dd").append("<span class='Validform_checktip' />");
						o.obj.parents("dd").next().find(".Validform_checktip").remove();
					}
					var objtip = o.obj.parents("dd").find(".Validform_checktip");
					cssctl(objtip, o.type);
					objtip.text(msg);
				}
			},
			beforeSubmit: function(curform) {
				if(beforeSubmit != undefined) {
					beforeSubmit();
				}
			},
			showAllError: true
		});
	};
	return $(this).each(function() {
		checkValidform($(this));
	});
}
//分页
function outPageList(pageSize, pageIndex, totalCount, centSize, callback) {
	if(totalCount > 0) {
		var pageStr = "";
		$pageStr = $("<div></div>");
		//$pageStr.append($("<span>共" + totalCount + "记录</span>"));
		var pageCount = parseInt(totalCount / pageSize);
		if(totalCount % pageSize > 0) {
			pageCount += 1;
		}
		if((totalCount > 1 || pageSize > 1) && pageCount >= 2) {
			var pageId = "__id__";
			var $firstBtn = $("<a href=\"javascript:;\">上一页</a>");
			$firstBtn.click(function() {
				callback(parseInt(pageIndex) - 1);
			});
			var $lastBtn = $("<a href=\"javascript:;\">下一页</a>");
			$lastBtn.click(function() {
				callback(parseInt(pageIndex) + 1);
			});

			var $firstStr = $("<a href=\"javascript:;\">1</a>");
			$firstStr.click(function() {
				callback(1);
			});
			var $lastStr = $("<a href=\"javascript:;\">" + pageCount + "</a>");
			$lastStr.click(function() {
				callback(pageCount);
			});
			if(parseInt(pageIndex) <= 1) {
				$firstBtn = $("<span class=\"disabled\">上一页</span>");
			}
			if(parseInt(pageIndex) >= pageCount) {
				$lastBtn = $("<span class=\"disabled\">下一页</span>");
			}
			if(parseInt(pageIndex) == 1) {
				$firstStr = $("<span class=\"current\">1</span>");
			}
			if(parseInt(pageIndex) == pageCount) {
				$lastStr = $("<span class=\"current\">" + pageCount + "</span>");
			}

			var firstNum = parseInt(pageIndex) - (centSize / 2); //中间开始的页码
			if(parseInt(pageIndex) < centSize)
				firstNum = 2;
			var lastNum = parseInt(pageIndex) + centSize - ((centSize / 2) + 1); //中间结束的页码
			if(lastNum >= pageCount)
				lastNum = pageCount - 1;
			$pageStr.append($firstBtn);
			$pageStr.append($firstStr);

			if(parseInt(pageIndex) >= centSize) {
				$pageStr.append($("<span>...</span>"));
			}

			for(var i = firstNum; i <= lastNum; i++) {

				if(i == parseInt(pageIndex)) {
					$pageStr.append($("<span class=\"current\">" + i + "</span>"));
				} else {
					var $p = $("<a  href=\"javascript:;\">" + i + "</a>");
					$p.click(function() {
						callback(parseInt($(this).text()));
					});

					$pageStr.append($p);
				}
			}

			if(pageCount - parseInt(pageIndex) > centSize - ((centSize / 2))) {
				$pageStr.append($("<span>...</span>"));
			}
			$pageStr.append($lastStr);
			$pageStr.append($lastBtn);
		}
		return $pageStr;
	}
}
// 替换指定的字符串
function replaceStr(originalStr, oldStr, newStr) {
	if(oldStr == "") {
		return "";
	}
	return originalStr.replace(oldStr, newStr);
}
var index;
var showLoading = function() {
	index = layer.load(1, {
		shade: [0.5, '#fff'] //0.1透明度的白色背景
	});
}
var closeLoading = function() {
	layer.close(index);
}
//ajax异步
function sendGetAjaxP(url, func) {
	$.ajax({
		type: "get",
		url: url,
		dataType: 'jsonp',
		cache: false,
		error: function(data) {
			alert(JSON.stringify(data));
		},
		success: function(data) {
			success(data, func);
		}
	});
}

function sendGetAjax(url, func) {
	$.ajax({
		type: "get",
		url: url,
		dataType: 'json',
		cache: false,
		error: function(data) {
			alert(JSON.stringify(data));
		},
		success: function(data) {
			success(data, func);
		}
	});
}

function sendPostAjax(url, postData, func) {
	$.ajax({
		type: "post",
		url: url,
		data: postData,
		dataType: 'json',
		beforeSend: showLoading(""),
		cache: false,
		error: function(data) {
			alert(JSON.stringify(data));
		},
		success: function(data) {
			success(data, func);
		}
	});
}

function sendLoadingAjaxP(url, postData, func) {
	$.ajax({
		type: "post",
		url: url,
		data: postData,
		dataType: 'jsonp',
		beforeSend: showLoading(""),
		cache: false,
		error: function(data) {
			alert(JSON.stringify(data));
		},
		success: function(data) {
			success(data, func);
		}
	});
}

function getAjax(url, isCache, isLoading, func, errorFuc) {
	var token = getSelfToken();
//	console.log(typeof postData)
	if(postData.indexOf("&") != -1) {
		postData += "&token=" + token;
	} else {
		postData.token = token;
	}
	mui.ajax(url, {
		data: postData,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			console.log(JSON.stringify(data))
			success(data, func, errorFuc)
			//
		}
	});
}

function postAjax(url, postData, isCache, isLoading, func, errorFuc) { 
//	console.log()
	var token = getSelfToken();
	if(postData.indexOf("&") != -1) {
		postData += "&token=" + token;
	} else { 
		postData.token = token;
	}
//	console.log(postData)
	mui.ajax(url, {
		data: postData,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
//			console.log(JSON.stringify(data))
			success(data, func, errorFuc)
			//
		}
	});
}

function success(data, func, errorFuc) {
//	closeLoading();
	var msg = data.msg;
			overTime(msg);
	if(msg > 0) { 
		func(data);
	} else {
//  console.log(JSON.stringify(data))
		if(errorFuc == undefined) {
//			layer.msg(data.msgbox, {
//				icon: 2
//			});
//	alert(data.msgbox);
		} else {
			errorFuc(data);
		}
	}
}
//数字动画
function animateNumber(name, num) {
	//console.log(isNaN(num));!isNaN(num) &&
	//console.log(parseFloat(num) > 0)
	if(parseFloat(num) >= 0) {
		var floored_number = parseFloat(num).toFixed(2);
		var reg = /.*\..*/;
		var suffix;
		if(reg.test(floored_number)) {
			var decimal_places = floored_number.split(".");
			suffix = "." + decimal_places[1];
			//console.log(floored_number)
			if(decimal_places[1].length == 1) {
				suffix = "." + decimal_places[1] + "0";
			} else if(decimal_places[1].length == 0) {
				suffix = "." + decimal_places[1] + "00";
				if(isNaN(num)) {
					suffix = "." + decimal_places[1];
				}
			}
		}
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',', 3, suffix)
		$(name).animateNumber({
			number: num,
			numberStep: comma_separator_number_step
		});
	} else {
		$(name).html("---")
	}

	return false;
}
//树形结构
function findkind() {
	//筛选
	$("#find").click(function() {
		$("#treeview-checkable").removeClass("hide")
	})
	$("#treeview-checkable .no").click(function() {
		$("#treeview-checkable").addClass("hide")
	})
	$("#treeview-checkable .yes").click(function() {
		$("#treeview-checkable").addClass("hide")
	})
}
//时间筛选
function timekind() {
	//筛选
//	$("#timeSelect").click(function() {
//		$(".timeCon").removeClass("hide")
//	})
//	$(".timeCon .no").click(function() {
//		$(".timeCon").addClass("hide")
//	})
//	$(".timeCon .yes").click(function() {
//		$(".timeCon").addClass("hide")
//	})
}
//json删除
function jsonDel(index, dataArray) {
	var len = dataArray.length;
	for(var i = 0; i < len; i = i + 1) {
		if(i == (index - 1)) {
			for(var j = i + 1; j < len; j = j + 1) {
				//当前索引值后的数据都向前移
				dataArray[j - 1] = dataArray[j];
			}

			//移完之后,自身长度减1
			dataArray.length--;
		}
	}
}
/**
 * 获取当前月的最后一天
 */
function getCurrentMonthLast(param) {
    var date = new Date(param);
    var currentMonth = date.getMonth();
    var nextMonth = ++currentMonth;
    var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
    var oneDay = 1000 * 60 * 60 * 24;
    return new Date(nextMonthFirstDay - oneDay).format("yyyy/MM/dd");
}
//日期加0
//Date.prototype.format = function(formatStr) {
//	var str = formatStr;
//	var Week = ['日', '一', '二', '三', '四', '五', '六'];
//	str = str.replace(/yyyy|YYYY/, this.getFullYear());
//	str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
//	str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
//	str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
//	return str;
//}
//数组排序
function sortJsonHtml(htmljson, showhtml) {
	var newdata = htmljson;
	//根据价格（price）排序  
	function sortvalues(a, b) {
		return b.value - a.value
	}
	//利用js中的sort方法  
	newdata.sort(sortvalues);
	//打印排序后的数据到控制台   
	for(var i = 0; i < newdata.length; i++) {

		showhtml += newdata[i].html
	}
	//console.log(showhtml)
	return showhtml
}
//加0
function addzero(str) {
	if(str < 9) {
		str = "0" + str;
	}
	return str;
}
//日期
function calendar(name) {
	laydate.render({
		elem: name,
		showBottom: false, //关闭底部框 去掉取消、确定、清空按钮
		value: function() {
			return(new Date().format("yyyy/MM/dd"))
		}(),
		max: function() {
			return(new Date().format("yyyy/MM/dd"))
		}(),
		format: 'yyyy/MM/dd',
	});
}
//Hover效果(dataview)
function setTableBg() {
	var hover_index = 0;
	$("tbody  td").hover(function() {
		hover_index = $(this).parent().find('td').index(this);
		$("tbody tr").find("td:eq(" + hover_index + ")").addClass("bghover");
		$(this).addClass("bghover");
	}, function() {
		$("tbody tr").find("td:eq(" + hover_index + ")").removeClass("bghover");
		$(this).removeClass("bghover");
	});

	$("tbody tr").hover(function() {
		$(this).addClass("bghover");
	}, function() {
		$(this).removeClass("bghover");
	});
}

//获取url里参数
function parseUrl() {
	var url = location.href;
	var i = url.indexOf('?');
	if(i == -1) return;
	var querystr = url.substr(i + 1);
	var arr1 = querystr.split('&');
	var arr2 = new Object();
	for(i in arr1) {
		var ta = arr1[i].split('=');
		arr2[ta[0]] = ta[1];
	}
	return arr2;
}
//状态判断
function status(sts, name) {
	if(parseInt(sts) == 1) {
		$(name).removeClass("bgcolorgray");
		$(name).addClass("bgcolorgreen");
		//$(".value101")
	}  else if (parseInt(sts) == 0)
		$(name).removeClass("bgcolorgreen");
		$(name).addClass("bgcolorgray");
	}
}
//写cookies  
function setStorage(name, value) {
	plus.storage.setItem(name, value);

}
//读取cookies 
function getStorage(name) {
	return plus.storage.getItem(name);
}

//删除cookies 
function removeStorage(name) {
	plus.storage.removeItem(name);
}

function mobileSingleSelect(selector, trigger, trigname, title, array, icur, func) {
	//	alert(trigname)
	var singleSelect = new MobileSelect({
		trigger: trigger,
		trigname: trigname,
		title: title,
		wheels: [{
			data: array
		}],
		position: [icur], //初始化定位 打开时默认选中的哪个 如果不填默认为0        
		callback: function(indexArr, data) {
			if(func != undefined) {
				func(indexArr, data);
			}
		}
	});
	eval(selector + "= singleSelect");
}

//时间 依赖dtpicker插件
function dtpicker(param, type, func) {
	var dtpicker = new mui.DtPicker({
		type: type, //设置日历初始视图模式
		beginDate: new Date(2010, 01, 01), //设置开始日期
		endDate: new Date(2111, 12, 31) //设置开始日期
	});
	dtpicker.show(function(selectItems) {
		$(param).text((selectItems.text).replace(/-/g,"/"));
		if(func!=undefined){
			func(); 
		}
		
	})
}
//拍照
// 拍照获取图片
function getImage(func) {
	var c = plus.camera.getCamera();
	c.captureImage(function(e) {
		plus.io.resolveLocalFileSystemURL(e, function(entry) {
			var imgSrc = entry.toLocalURL() + "?version=" + new Date().getTime(); //拿到图片路径
			// 其他操作,比如预览展示
			if(func != undefined) {
				func(imgSrc)
			}
		}, function(e) {
			console.log("读取拍照文件错误：" + e.message);
		});
	}, function(s) {
		console.log("error" + s);
	}, {
		filename: "_doc/camera/"
	})
}
// 从相册中选择图片 
function galleryImg(num, func) {
	// 从相册中选择图片
	plus.gallery.pick(function(e) {
		//  	for(var i in e.files){
		//	    	var fileSrc = e.files[i];
		//          // 其他操作,比如预览展示
		//          
		//  	}
		if(func != undefined) {
			func(e.files)
		}
	}, function(e) {
		console.log("取消选择图片");
	}, {
		filter: "image",
		multiple: true,
		maximum: num,
		system: false,
		onmaxed: function() {
			plus.nativeUI.alert('最多只能选择' + num + '张图片');
		}
	});
}

// 上传的方法
function upload() {
	MicroTaskGUID = common.guid();

	var rul = "服务器地址"

	var imgsArr = mui(".task-img"); // 要上传的 img 标签

	mui.each(imgsArr, function(index, item) {
		// 		console.log(index)
		// 		console.log(item.src)
		createUp(item)
	})

	function createUp(files) {
		var task = plus.uploader.createUpload(url, {
				method: "POST"
			},
			function(t, status) { //上传完成
				if(status == 200) {
					console.log("上传成功：" + t.responseText);
				} else {
					console.log("上传失败：" + status);
				}
			}
		);
		//添加其他参数
		//	    task.addData("name","test");
		// 页面中要上传的 图片路径
		task.addFile(files.src, {
			key: files.src
		});
		task.start();
	}
}