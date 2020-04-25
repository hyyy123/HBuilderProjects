var weekData, icurweek, icurData;
var today = new Date().format("yyyy/MM/dd");
var dataArray = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
var teacher_codes = "",
	class_codes = "",
	rsc_ids = "";
var time = new Date().Format("HH:mm:ss");
var timeH = new Date().Format("HH");
var timeM = new Date().Format("mm");
var nwaiting;
var icurweekarray = new Array;
var nowday;
//mui.plusReady
mui.plusReady(function() {
	//	nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 ***************************************************

	showLoading();
	setCourseArr(function() {
		setWeekData(function() {

			//当前周
			icurweek = getWeekByDate(getStartDate(), today);
			//总周数
			weekData = weekData;
			//当前周开始结束日期
			icurData = getDateByWeeks(getStartDate(), icurweek);

			initFirst(icurData, dataArray, courseArray);

			initDate();
			initClass();

		})
	})
})
var area_id = 0,
	old_area_id = 0,
	type_id = 0,
	old_type_id = 0;

function initClass() {
	var itemsort = "";
	initHeader("我的课程", icurweek);
	loadData(icurweek, itemsort);
}

function sideSubmit() {
	//	openmenu();
	closemenu();
	var nowweek = jQuery("#weekdata .active p").text();
	var sdate = jQuery("#weekdata .active .hide").eq(0).text();
	var edate = jQuery("#weekdata .active .hide").eq(1).text();
	var weekindex = {
		sdate: sdate,
		edate: edate
	};

	//	class_codes = jQuery("#smallclassdata .active").attr("id");
	//	var class_name = jQuery("#smallclassdata .active p").text();

	var itemsort = "";
	initHeader("我的课程", nowweek);
	initFirst(weekindex, dataArray, courseArray);

	showLoading();
	//	nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 ***************************************************
	loadData(nowweek, itemsort)
}
//提示
function player() { //播放音乐 
	s = plus.audio.createPlayer("audio/11.mp3");
	var num = s.getDuration(); //获取音频总长度number 
	setTimeout(function() { //延时获取，否则可能没有返回长度 
		var num = s.getDuration(); //时间长度
	}, 100)

	s.play(function() { //播放完成回调 

	}, function(e) { //失败回调 

	});

}

function loadData(iweek, itemsort) {
	$("#table_list").children().remove();
	var html = "";
	for(var i = 0; i < courseArray.length; i++) {
		html += "<tr><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td></tr>"
	}
	$("#table_list").append(html);

	getTeacherCourseTableList(getStartDate(), getEndDate(), getStartDate(), false, function(data) {
		//console.log(JSON.stringify(data)); 
		var item = data.data;
		var msg = data.msg;
		var course = new Array;
		//当前周的课
		if(icurweek == iweek) {
			icurweekarray = [];
			nowday = $("#nowday").index() + 1;
		}
		if(data.msg > 0) {
			//倒序
			itemsort = sortJsonHtml(item);
			for(var i = 0; i < itemsort.length; i++) {
				var weekstr = getDateByweekAndDay(itemsort[i].day, itemsort[i].week)
				var constr = "," + iweek + ",";

				//console.log(weekstr.weeks.indexOf(constr))
				if(weekstr.weeks.indexOf(constr) != -1) {
					init(itemsort[i], course);
					//当前周的课//nowday
					if(icurweek == iweek && itemsort[i].day == nowday) {
						icurweekarray.push(itemsort[i]);
					}
				}
			}
			$(".tditem").click(function() {
				infoMsg(this);
			})
			tipmsg(icurweekarray);
			closeLoading();
			//nwaiting.close(); //***************************************************
		}
	})
}
function tipmsg(icurweekarray) {

		setInterval(function() {
			time = new Date().Format("HH:mm:ss");
			for(var i = 0; i < icurweekarray.length; i++) {
				if(TimeDifference(icurweekarray[i].stime, time) == 1) {
					var infojson = icurweekarray[i]
					var html = "";
					html += '<p class="title">&nbsp;您还有十分钟就要上课啦&nbsp;</p>';
					html += '<p>&nbsp;教室&nbsp;' + judgeEmpty(infojson.room_name) + '</p>';
					html += '<p>&nbsp;课程&nbsp;' + judgeEmpty(infojson.course_name) + '</p>';
					html += '<p>&nbsp;班级&nbsp;' + judgeEmpty(infojson.class_name) + '</p>';
					html += '<p>&nbsp;上课时间&nbsp;' + infojson.stime + "-" + infojson.etime + '</p>';
					layer.msg(html, {
						time: 5000
					});
					player();
				}
			}

		}, 1000)

}

function init(item, course) {
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
			html += '<h5 class="colorfff fontCondensed"  >' + judgeEmpty(item.course_name) + '</h5>';
			html += '<ul>';
			html += '<li class="fontCondensed"><i class="fa fa-columns"></i>' + judgeEmpty(item.class_name) + '</li>';
			html += '<li class="fontCondensed"><i class="mui-icon mui-icon-location"></i>' + judgeEmpty(item.room_name) + '</li>';
			html += '</ul>';
			html += '</div>';
		}

		$("#table_list tr").eq(colstart).find("td .tdab").eq(row).html(html)

	}

}