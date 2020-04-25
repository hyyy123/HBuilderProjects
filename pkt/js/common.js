var weekData;
$(function() {
	mui.init();
})
//JS操作cookies方法! 

//写cookies 

function setStorage(name, value) { 
	plus.storage.setItem(name,value);

} 
//读取cookies 
function getStorage(name) {
	return plus.storage.getItem(name);
}
 
//删除cookies 
function removeStorage(name) {
	plus.storage.removeItem(name);
}

function openmenu() {
	jQuery("#sidemenu").animate({
		"right": "0px"
	}, 500)
	jQuery("#sidemenu .sideclose").animate({
		"right": "20px"
	}, 500)

}

function closemenu() {
	jQuery("#sidemenu").animate({
		"right": "-100%"
	}, 600);
	jQuery("#sidemenu .sideclose").animate({
		"right": "-100%"
	}, 500);
}

function zerostr(str) {
	if(str < 10) {
		return "0" + str;
	}
	return str;
}

Date.prototype.Format = function(formatStr) {
	var str = formatStr;
	var Week = ['日', '一', '二', '三', '四', '五', '六'];

	str = str.replace(/yyyy|YYYY/, this.getFullYear());
	str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

	str = str.replace(/MM/, this.getMonth() + 1 > 9 ? this.getMonth() + 1 : '0' + (this.getMonth() + 1));
	str = str.replace(/M/g, this.getMonth());

	str = str.replace(/w|W/g, Week[this.getDay()]);

	str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
	str = str.replace(/d|D/g, this.getDate());

	str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
	str = str.replace(/h|H/g, this.getHours());
	str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
	str = str.replace(/m/g, this.getMinutes());

	str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
	str = str.replace(/s|S/g, this.getSeconds());

	return str;
}

function nowDate(data, week, time) {
	$(data).html(new Date().Format("yyyy/MM/DD"));
	$(week).html("周" + new Date().Format("W"));
	$(time).html(new Date().Format("HH:mm:ss"));
}


function initFirst(icurData, dataArray, courseArray) {
	//星期
	$(".nav table tr").children().remove();
	var weekSdate = icurData.sdate;
	var weekEdate = icurData.edate;
	var weekSarray = weekSdate.split("/");
	var weekEarray = weekSdate.split("/");
	var weekmonth = weekSarray[1];
	var weekSday = weekSarray[2];
	var weekDday = weekEarray[2];
	var html = "";
	for(var i = 0; i < 7; i++) {
		var nowDay = parseInt(weekSday) + i;
		if(zerostr(nowDay) == new Date().format("dd")) {
			html += '<td class="text-center" id="nowday">' + dataArray[i] + ' <span class="fontCondensed">' + weekmonth + "/" + nowDay + '</span><p>今日</p></td>';

		} else {
			html += '<td class="text-center">' + dataArray[i] + ' <span class="fontCondensed">' + weekmonth + "/" + nowDay + '</span></td>';

		}
	}
	$(".nav table tr").append(html);

	//节次
	$(".mui_table_con .slide ul").children().remove();
	//	console.log(courseArray)
	var html = "";
	for(var i = 0; i < courseArray.length; i++) {
		var start_hour = courseArray[i].start_hour + ":" + courseArray[i].start_minute;
		var end_hour = courseArray[i].end_hour + ":" + courseArray[i].end_minute;

		if(i == courseArray.length - 1) {
			html += '<li class="border0"><span class="fontsize12">' + courseArray[i].name + '</span><span class="fontCondensed fontsize15">(' + start_hour + "~" + end_hour + ')</span></li>';

		} else {
			html += '<li><span class="fontsize12">' + courseArray[i].name + '</span><span class="fontCondensed fontsize15">(' + start_hour + "~" + end_hour + ')</span></li>';

		}
	}

	$(".mui_table_con .slide ul").append(html);

}
//总周数
function initDate() {
	jQuery("#weekdata").children().remove();
	var html = ""
	//	console.log(weekData);
	for(var i = 0; i < weekData.length; i++) {
		if(i == icurweek - 1) {
			html += "<li class='pull-left active'><p class='fontCondensed '>" + weekData[i].week + "</p><span class='hide'>" + weekData[i].start + "</span><span class='hide'>" + weekData[i].end + "</span></li>";
		} else {
			html += "<li class='pull-left'><p class='fontCondensed '>" + weekData[i].week + "</p><span class='hide'>" + weekData[i].start + "</span><span class='hide'>" + weekData[i].end + "</span></li>";
		}
	}
	jQuery("#weekdata").append(html);
	initSelectWeek();
}

function initSelectWeek() {
	jQuery("#weekdata li").click(function() {
		jQuery("#weekdata li").removeClass("active");
		jQuery(this).addClass("active");

	})
}
//header表头
function initHeader(name, icurweek) {
	$(".classes .mui-title").html("");
	//	console.log(weekData[0].term)
	var weekterm = weekData[0].term;
	var termYear = weekterm.substring(0, 4) + "~" + weekterm.substring(5, 9) + "学年";
	var termData = "第" + weekterm[2] + "学期";
	var termweek = "第" + icurweek + "周";
	$(".classes .mui-title").html(termYear + "&nbsp;&nbsp;" + termData + "&nbsp;&nbsp;" + termweek + "&nbsp;&nbsp;" + name);
}
//header表头//realtime
function initHeaderReal(name, icurweek,inner) {
	$(inner).html("");
	//	console.log(weekData[0].term)
	var weekterm = weekData[0].term;
	var termYear = weekterm.substring(0, 4) + "~" + weekterm.substring(5, 9) + "学年";
	var termData = "第" + weekterm[2] + "学期";
	var termweek = "第" + icurweek + "周";
	$(inner).html(termYear + "&nbsp;&nbsp;" + termData + "&nbsp;&nbsp;" + termweek + "&nbsp;&nbsp;" + name);
}
//判断节次
function judgeTime(stime, etime) {

	var timeDate = new Array;
	for(var i = 0; i < courseArray.length; i++) {
		var stratTime = courseArray[i].start_hour + ":" + courseArray[i].start_minute + ":00"
		var endTime = courseArray[i].end_hour + ":" + courseArray[i].end_minute + ":00"
		if(stime == stratTime) {
			timeDate.push(i)
		}
		if(etime == endTime) {
			timeDate.push(i)
		}
	}
	timeDate.push(timeDate[1] - timeDate[0] + 1);
	if(stime.substring(0, 2) > etime.substring(0, 2)) {
		return ""
	} else if(stime.substring(0, 2) == etime.substring(0, 2) && stime.substring(2, 4) > etime.substring(2, 4)) {

	} else {
		return timeDate; //[第一节次，最后节次，总节次 ]
	}

}

function judgeEmpty(str) {
	var name = "暂未确定";
	if(str != "") {
		name = str
	}
	return name
}
//json排序
function sortJsonHtml(nowjson) {
	var newdata = nowjson;
	//根据价格（price）排序  
	function sortvalues(a, b) {
		return b.day - a.day
	}
	//利用js中的sort方法  
	newdata.sort(sortvalues);
	//console.log(showhtml)
	return newdata
}

//不同课不同颜色
var bgcolor = new Array;
for(var i = 1; i < 10; i++) {
	bgcolor.push("bg" + i);
}

function initColor(course, course_code) {
	var judge = 0;
	for(var i = 0; i < course.length; i++) {
		if(course_code == course[i]) {
			judge = 1;
			return bgcolor[i];
		}
	}
	if(judge == 0) {
		var num = course.length;
		course.push(course_code);
		return bgcolor[num];
	}

}
//弹框
function infoMsg(param) {
	$(".mui-popup").remove();
	var infojson = JSON.parse($(param).find(".info").html()); 
	var thistypena = $(param).find(".liclasstype ").text();
	
	var html = "";
	html += '<div class="mui-popup mui-popup-in" style="display: block;">';
	html += '<div class="mui-popup-inner">';
	if($(param).hasClass("real_item")) {
		html += '<div class="mui-popup-title">' + judgeEmpty(infojson.resna) + '</div>';

	} else {
		html += '<div class="mui-popup-title">' + judgeEmpty(infojson.room_name) + '</div>';

	}
	html += '<div class="mui-popup-text">';
	html += '<p><i class="fa fa-building-o"></i>&nbsp;课程&nbsp;' + judgeEmpty(infojson.course_name) + '</p>';
	html += '<p><i class="fa fa-columns"></i>&nbsp;班级&nbsp;' + judgeEmpty(infojson.class_name) + '</p>';
	html += '<p><i class="fa fa-user-o"></i>&nbsp;教师&nbsp;' + judgeEmpty(infojson.teacher_name) + '</p>';
	html += '<p><i class="fa fa-calendar"></i>&nbsp;上课时间&nbsp;' + infojson.stime + "-" + infojson.etime + '</p>';
	if($(param).hasClass("real_item")) {
		html += '<p><i class="fa fa-th-large"></i>&nbsp;教室类型&nbsp;' + judgeEmpty(thistypena) + '</p>';
	
	} 
	html += '</div>';
	html += '</div>';
	html += '<div class="mui-popup-buttons">';
	html += '<span class="mui-popup-button student" >查看学生</span>';
	html += '<span class="mui-popup-button  closepopup" style="color:#8f8f94">关闭</span>';
	html += '</div>';
	html += '</div>';

	jQuery("body").append(html);

	$(".closepopup").click(function() {
		$(".mui-popup").remove();
	})
	
	$(".student").click(function(){
		location="student_list.html?class_code="+encodeURI(infojson.class_code);
	})
}
//下一节课时间
function nextSection(timeH, timeM) {
	var timeArray = new Array; 
	for(var i = 0; i < courseArray.length; i++) { 
		if(i==0){
			
		var stime = courseArray[i].start_hour + ":" + courseArray[i].start_minute;//当前课开始
		var etime = courseArray[i].end_hour + ":" + courseArray[i].end_minute;  //当前课结束
		}else{
		var stime = courseArray[i-1].start_hour + ":" + courseArray[i-1].start_minute;//当前课开始
		var etime = courseArray[i-1].end_hour + ":" + courseArray[i-1].end_minute;  //当前课结束
			
		}
		var stimef = courseArray[i].start_hour + ":" + courseArray[i].start_minute;//下节课开始
		var etimef = courseArray[i].end_hour + ":" + courseArray[i].end_minute;  //下节课结束
		if(courseArray[i].start_hour > timeH || courseArray[i].start_hour == timeH && courseArray[i].start_minute > timeM) {

			timeArray.push(stime+":00");
			timeArray.push(etime+":00"); 
			timeArray.push(stimef+":00");
			timeArray.push(etimef+":00"); 
			return timeArray
		}

	}
	return ""
}
 
//判断是否已被占用
function judgeClass(stime, nextTime) {
	if(nextTime.substring(0, 2) > stime.substring(0, 2) || nextTime.substring(0, 2) == stime.substring(0, 2) && nextTime.substring(2, 4) > stime.substring(2, 4)) {
		return true
	} else {
		return false
	}
}
function TimeDifference(time1, nowtime) {

	var min1 = parseInt(time1.substr(0, 2)) * 360 + parseInt(time1.substr(3, 5)) * 60;
	var min2 = parseInt(nowtime.substr(0, 2)) * 360 + parseInt(nowtime.substr(3, 5)) * 60+ parseInt(nowtime.substr(6, 8));
 
	var n = min1 - min2;
	if(n > 0) {  
		if(n == 600) {
		return 1
		}
	}
		return -1

}
//获取url里参数
function parseUrl() {
    var url = location.href;
    var i = url.indexOf('?');
    if (i == -1) return;
    var querystr = url.substr(i + 1);
    var arr1 = querystr.split('&');
    var arr2 = new Object();
    for (i in arr1) {
        var ta = arr1[i].split('=');
        arr2[ta[0]] = ta[1];
    }
    return arr2;
}

//根据周和星期获取当前日期
function nowDataThis(week,weekday){
	//week周
	//weekday星期
	var icurDataSelect = getDateByWeeks(getStartDate(), week); 
//	console.log(icurDataSelect);
	var sdatea=icurDataSelect.sdate;
	var edatea=icurDataSelect.edate; 
	
	var sdateArray=sdatea.split("/");
	var day=parseInt(sdateArray[2])+parseInt(weekday);
	
	return sdateArray[0]+"/"+sdateArray[1]+"/"+day
}
