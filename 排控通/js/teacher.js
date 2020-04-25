var weekData, icurweek, icurData;
var today = new Date().format("yyyy/MM/dd");
var dataArray = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
var teacher_codes = "",
	class_codes = "",
	rsc_ids = ""
var nwaiting;
//mui.plusReady
mui.plusReady(function() {
	showLoading();
	//		nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 ***************************************************

	setCourseArr(function() {
		setWeekData(function() { 
			//当前周
			icurweek = getWeekByDate(getStartDate(), today);
			//总周数
			weekData = weekData;
			//当前周开始结束日期
			icurData = getDateByWeeks(getStartDate(), icurweek);
			//			console.log(icurData)

			initFirst(icurData, dataArray, courseArray);

			initDate();
			initTeacher();
		})
	})
})

function initTeacherClass() {
	jQuery("#teacherdata li").click(function() {
		jQuery("#teacherdata li").removeClass("active");
		jQuery(this).addClass("active");
	})
}

//获取教师列表
var teacherData;

function initTeacher() {
	var ocpyTimes = {
		sdate: getStartDate(),
		edate: getEndDate(),
		stime: courseArray[0].start_hour + ":" + courseArray[0].end_hour,
		etime: courseArray[courseArray.length - 1].start_hour + ":" + courseArray[courseArray.length - 1].end_hour
	};
	getOccupyTeacherList(JSON.stringify([ocpyTimes]), true, function(data) {
		var msg = data.msg;
		if(msg > 0) {
			teacherData = data.data;
			var msg = data.msg;
			var itemsort = "";
			if(msg > 0) {
				jQuery("#teacherdata").children().remove();
				var teahtml = "";
				for(var i = 1; i < teacherData.length; i++) {
					if(i == 1) {
						teahtml += "<li class='pull-left text-center active' id=" + teacherData[i].teacher_code + "  >";

						teahtml += '<p><img src="img/teacher.png" alt="" /><i class="mui-icon mui-icon-checkmarkempty"></i></p>';
						teahtml += "<span>" + teacherData[i].teacher_name + "</span>";
						teahtml += "</li>";
						teacher_codes = teacherData[i].teacher_code;
						initHeader(teacherData[i].teacher_name + "教师课表", icurweek);
					} else {
						teahtml += "<li class='pull-left text-center'id=" + teacherData[i].teacher_code + " >";

						teahtml += '<p><img src="img/teacher.png" alt="" /><i class="mui-icon mui-icon-checkmarkempty"></i></p>';
						teahtml += "<span>" + teacherData[i].teacher_name + "</span>";
						teahtml += "</li>";
					}
				}
				jQuery("#teacherdata").append(teahtml);
				initTeacherClass();
				loadData(icurweek, itemsort);
			}

		}
	});
}

function sideSubmit() {
	closemenu();
	var nowweek = jQuery("#weekdata .active p").text();
	var sdate = jQuery("#weekdata .active .hide").eq(0).text();
	var edate = jQuery("#weekdata .active .hide").eq(1).text();
	var weekindex = {
		sdate: sdate,
		edate: edate
	};

	teacher_codes = jQuery("#teacherdata .active").attr("id");
	var teacher_name = jQuery("#teacherdata .active span").text();

	var itemsort = "";
	initHeader(teacher_name + "教师课表", nowweek);
	initFirst(weekindex, dataArray, courseArray);

	showLoading();
	//		nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 ***************************************************
	loadData(nowweek, itemsort)

}

function loadData(icurweek, itemsort) {
	$("#table_list").children().remove();
	var html = "";
	for(var i = 0; i < courseArray.length; i++) {
		html += "<tr><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td></tr>"
	}
	$("#table_list").append(html);

	getCourseTableList(getStartDate(), getEndDate(), getStartDate(), teacher_codes, class_codes, rsc_ids, true, false, function(data) {
		var item = data.data;
		var msg = data.msg;
		var course = new Array;
		if(data.msg > 0) {
			//倒序
			itemsort = sortJsonHtml(item);
			//			console.log(itemsort)
			for(var i = 0; i < itemsort.length; i++) {
				var weekstr = getDateByweekAndDay(itemsort[i].day, itemsort[i].week)
				var constr = "," + icurweek + ",";
				//console.log(weekstr.weeks.indexOf(constr))
				if(weekstr.weeks.indexOf(constr) != -1) {
					init(itemsort[i], course)
				}
			}
			$(".tditem").click(function() {
				infoMsg(this);
			})
			closeLoading();
			//							nwaiting.close();//***************************************************
		}
	})
}

function init(item, course) {
	//	console.log(item)
	var col = judgeTime(item.stime, item.etime); //纵轴array
	if(col.length == 3) {
		var colstart = col[0]; //纵轴开始
		var colend = col[1]; //纵轴结束
		var collen = col[2]; //colspan
		var row = item.day - 1; //横轴index  
		var bgcolor = initColor(course, item.course_code)
		//占课 
		$("#table_list tr").eq(colstart).find("td .tdab").eq(row).children().remove();
		var width = collen * 40 + "px";
		$("#table_list tr").eq(colstart).find("td .tdab").eq(row).css({
			"height": width,
			"z-index": "2"
		})
		var html = "";
		if(collen == 1) {
			html += '<div class="tditem ' + bgcolor + '" >';
			html += '<span class="hide info">' + JSON.stringify(item) + '</span>';
			html += '<h5 class="colorfff fontCondensed">' + judgeEmpty(item.course_name) + '</h5>';
			html += '</div>';
		} else {
			html += '<div class="tditem ' + bgcolor + '" >';
			html += '<span class="hide info">' + JSON.stringify(item) + '</span>';
			html += '<h5 class="colorfff fontCondensed">' + judgeEmpty(item.course_name) + '</h5>';
			html += '<ul>';
			html += '<li class="fontCondensed"><i class="fa fa-columns"></i>' + judgeEmpty(item.class_name) + '</li>';
			html += '<li class="fontCondensed"><i class="mui-icon mui-icon-location"></i>' + judgeEmpty(item.room_name) + '</li>';
			html += '</ul>';
			html += '</div>';
		}
		//console.log(row +"；；；"+row +"；；；"+collen);

		$("#table_list tr").eq(colstart).find("td .tdab").eq(row).html(html)

	}

}