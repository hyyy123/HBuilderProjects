var weekData, icurweek, icurData;
var today = new Date().format("yyyy/MM/dd");
var time = new Date().Format("HH:mm:ss");
var timeH = new Date().Format("HH");
var timeM = new Date().Format("mm");
var weekNow = new Date().Format("W");
var timeNow = parseInt(new Date().Format("HH"));
var StimeH, EtimeH;

var dataArray = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
var area_id = 0,
	type_id = 0;
var classArray = new Array; //所有教室
var classyellow = new Array; //占用教室
var classred = new Array; //即将占用
var classblue = new Array; //空闲教室
var emptyAreaId = new Array;
var emptyClassId = new Array;
var classyellowid = new Array;
var classredid = new Array;

var sdate, edate, stime, etime;
var timeArray;
var weekData;
var nwaiting;
//mui.plusReady
mui.plusReady(function() {
	showLoading();
	setCourseArr(function() {
		setWeekData(function() {
			//当前周
			icurweek = getWeekByDate(getStartDate(), today);
			//总周数
			weekData = weekData;
			//当前周开始结束日期
			icurData = getDateByWeeks(getStartDate(), icurweek);

			initDate();
			initClassroom();
			//			initArea(); 
			//判断下一时间段
			timeArray = nextSection(timeH, timeM);
			if(timeArray != "") {
				StimeH = timeArray[2]; //下节课开始
				EtimeH = timeArray[3]; //下节课结束 
			} else {
				StimeH = time;
				EtimeH = time;
			}

			sdate = today;
			edate = today;
			stime = time;
			etime = StimeH;

			initRealDate();
			realTime();
			initSelectNav();
		})
	})
})

//实时时间
function realTime() {
	setInterval(function() {

		time = new Date().Format("HH:mm:ss");
		timeH = new Date().Format("HH");
		timeM = new Date().Format("mm");
		timeArray = nextSection(timeH, timeM);
		if(timeArray != "") {
			StimeH = timeArray[2];
			EtimeH = timeArray[3];

		} else {

			StimeH = time;
			EtimeH = time;
		}
		//				console.log(time)
		//		console.log(timeArray[0])
		//		console.log(time == timeArray[0])
		if(time == timeArray[0]) {
			//loading
			showLoading();
			initRealDate();
			sideSubmit();
			// initYellowClass();
		}
	}, 1000)

}
//nav选择
function initSelectNav() {
	jQuery("#navul li").click(function() {

		if(jQuery(this).hasClass("active")) {
			jQuery(this).removeClass("active");
		} else {
			jQuery(this).addClass("active");
		}

		var kindWay = "";
		for(var i = 0; i < jQuery("#navul li.active").length; i++) {
			kindWay += jQuery("#navul li.active").eq(i).attr("class") + ",";
		}
		initClass(kindWay);
	})
}

//所有教室
function initClassroom() {
	classArray = [];
	getRoomListBykw(area_id, type_id, 0, "", true, function(data) {
		var item = data.data;
		var msg = data.msg;
		//		console.log(item)
		if(msg > 0) {
			if(item.length > 0) {
				for(var i = 0; i < item.length; i++) {
					classArray.push(item[i]);
				}
			}
			initYellowClass();
		}

	});
}

function initYellowClass() {
	classyellow = [];
	//	console.log(stime+"；；；；"+etime)
	getRoomInfoBydate(sdate, edate, stime, etime, function(data) {
		var item = data.data;
		var msg = data.msg;
		if(msg > 0) {
			if(item.length > 0) {
				for(var i = 0; i < item.length; i++) {
					classyellow.push(item[i]);
				}
			}
			allClass();
			initClass("type2")
		}
	})
}

function initClass(way) {

	$(".roomlist li.col-xs-2").addClass("hide");

	if(way.match("type0")) {
		$(".roomlist  li.col-xs-2").removeClass("hide");
	}
	if(way.match("type1a")) {
		$(".roomlist  li.col-xs-2").has(".type1").removeClass("hide");

	}
	if(way.match("type2")) {
		$(".roomlist  li.col-xs-2").has(".type2").removeClass("hide");

	}
	if(way.match("type3")) {
		$(".roomlist  li.col-xs-2").has(".type3").removeClass("hide");

	}
	if(way.match("type10")) {
		$(".roomlist  li.col-xs-2").has(".type10").removeClass("hide");

	}
	if(way.match("type5")) {
		$(".roomlist  li.col-xs-2").has(".type5").removeClass("hide");

	}
	if(way.match("type6")) {
		$(".roomlist  li.col-xs-2").has(".type6").removeClass("hide");

	}
	if(way == "") {
		$("#navul .type2").addClass("active");
		$(".roomlist  li.col-xs-2").has(".type2").removeClass("hide");

	}

}

function allClass() {

	$(".real_time_con .roomlist").children().remove();
	//所有
	//		console.log(classArray)
	for(var i = 0; i < classArray.length; i++) {

		var html = "";
		html += '<li class="col-xs-2" id="classroom' + classArray[i].id + '" >';
		html += '<p class="hide classtype" ><span class="tyid">' + classArray[i].tpid + '</span><span class="tpna">' + classArray[i].tpna + '</span></p>';
		html += '<div class="real_item type6">';
		//		html += '<span class="hide info">' + JSON.stringify(classArray[i]) + '</span>';
		html += '<p class="title colorfff">' + classArray[i].resna + '</p>';

		html += '<h4 class="colorfff fontCondensed" ">空闲中</h4>';
		html += '<ul>';
		html += '<li class="fontCondensed colorfff" ><i class="fa fa-columns"></i></li>';
		html += '<li class="fontCondensed colorfff" ><i class="mui-icon mui-icon-person"></i></li>';
		html += '<li class="fontCondensed colorfff " id="' + classArray[i].tpid + '"><i class="fa fa-th-large"></i>' + classArray[i].tpna + '</li>';
		html += '</ul>';

		html += '</div>';
		html += '</li>';
		$(".real_time_con .roomlist").append(html);
	}
	//空区域
	//	emptyArea();  
	//		console.log(classyellow)
	for(var j = 0; j < classyellow.length; j++) {
		$("#classroom" + classyellow[j].resid).children(".real_item").remove();

		var thistypeid = $("#classroom" + classyellow[j].resid).find(".classtype .tyid").text();
		var thistypena = $("#classroom" + classyellow[j].resid).find(".classtype .tpna").text();

		var html = "";
		if(classyellow[j].type == "") {
			html += '<div class="real_item type5 " >';
		} else {
			html += '<div class="real_item type' + classyellow[j].type + '" >';
		}
		//		console.log(classyellow[j].type)

		html += '<span class="hide info">' + JSON.stringify(classyellow[j]) + '</span>';
		html += '<p class="title colorfff" id="' + classyellow[j].resid + '">' + judgeEmpty(classyellow[j].resna) + '</p>';
		html += '<h4 class="colorfff fontCondensed" id="' + classyellow[j].course_code + '">' + judgeEmpty(classyellow[j].course_name) + '</h4>';
		html += '<ul>';
		html += '<li class="fontCondensed colorfff" id="' + classyellow[j].class_code + '"><i class="fa fa-columns"></i>' + judgeEmpty(classyellow[j].class_name) + '</li>';
		html += '<li class="fontCondensed colorfff" id="' + classyellow[j].teacher_code + '"><i class="mui-icon mui-icon-person"></i>' + judgeEmpty(classyellow[j].teacher_name) + '</li>';

		html += '<li class="fontCondensed colorfff liclasstype" id=' + thistypeid + ' ><i class="fa fa-th-large"></i>' + thistypena + '</li>';
		html += '</ul>';
		html += '</div>';
		$("#classroom" + classyellow[j].resid).append(html);
	}

	$(".real_item").click(function() {
		if($(this).hasClass("type6")) {

		} else {
			infoMsg(this);
		}
	})
	
	closeLoading();
	//	nwaiting.close(); //***************************************************
}

//*****************************************************侧边栏选择*****************************************************//
function initRealDateSelect() {
	jQuery("#realweekdata li").click(function() {
		jQuery("#realweekdata li").removeClass("active");
		jQuery(this).addClass("active");
	})

	jQuery("#realtimedata li").click(function() {
		jQuery("#realtimedata li").removeClass("active");
		jQuery(this).addClass("active");
	})
	jQuery("#realtypedata li").click(function() {
		jQuery("#realtypedata li").removeClass("active");
		jQuery(this).addClass("active");
	})
}

function initRealDate() {
	var name1, name2
	//星期
	$("#realweekdata").children().remove();
	var realweek = "";
	var realtime = "";
	var realtype = "";
	for(var i = 0; i < dataArray.length; i++) {
		if(dataArray[i].match(weekNow)) {
			realweek += "<li class='pull-left active'><span class='hide week'>" + i + "</span><p class='fontCondensed  text-center'>" + dataArray[i] + "</p></li>";
			name1 = dataArray[i];
		} else {
			realweek += "<li class='pull-left'><span class='hide week'>" + i + "</span><p class='fontCondensed  text-center'>" + dataArray[i] + "</p></li>";

		}
	}
	$("#realweekdata").append(realweek);
	//时间
	$("#realtimedata").children().remove();
	//	console.log(courseArray)
	for(var i = 0; i < courseArray.length; i++) {
		if(timeArray[0] == courseArray[i].start_hour + ":" + courseArray[i].start_minute + ":" + "00" && timeArray[1] == courseArray[i].end_hour + ":" + courseArray[i].end_minute + ":" + "00") {
			realtime += "<li class='pull-left active' id=course" + courseArray[i].short + ">";
			realtime += "<p class='fontCondensed  text-center'>" + courseArray[i].name + "</p>";
			realtime += "<p class='hide'><span class='strattime'>" + courseArray[i].start_hour + ":" + courseArray[i].start_minute + "</span><span  class='endtime'>" + courseArray[i].end_hour + ":" + courseArray[i].end_minute + "</span></p>";
			realtime += "</li>";
			name2 = courseArray[i].name;
		} else {
			realtime += "<li class='pull-left' id=course" + courseArray[i].short + ">";
			realtime += "<p class='fontCondensed  text-center'>" + courseArray[i].name + "</p>";
			realtime += "<p class='hide'><span class='strattime'>" + courseArray[i].start_hour + ":" + courseArray[i].start_minute + ":00" + "</span><span  class='endtime'>" + courseArray[i].end_hour + ":" + courseArray[i].end_minute + ":00" + "</span></p>";
			realtime += "</li>";

		}
	}
	$("#realtimedata").append(realtime);

	$("#realtypedata").children().remove();
	getTypesList(1, 1000, 1, function(data) {
		var item = data.data;
		var msg = data.msg;
		if(msg > 0) {
			realtype += "<li class='pull-left active' id='0'><p class='fontCondensed  text-center'>全部</p></li>";
			for(var i = 0; i < item.length; i++) {
				realtype += "<li class='pull-left' id=" + item[i].id + "> <p class='fontCondensed  text-center'>" + item[i].tpna + "</p> </li>";

			}
			$("#realtypedata").append(realtype);
			initRealDateSelect();

		}
	})
	//表头
	var namea = name1 + "&nbsp;&nbsp;" + name2
	initHeaderReal(namea, icurweek, ".titlesmall")
}

function sideSubmit() {
	showLoading();
	//	openmenu();
	closemenu();
	var nowweek = jQuery("#weekdata .active p").text();
	var name1 = jQuery("#realweekdata .active p").text();
	var name2 = jQuery("#realtimedata .active p").eq(0).text();
	var namea = name1 + "&nbsp;&nbsp;" + name2;
	initHeaderReal(namea, nowweek, ".titlesmall");

	//类型更改
	type_id = jQuery("#realtypedata .active").attr("id");
	$("#navul li").removeClass("active");
	$("#navul .type2").addClass("active");

	//占用教室信息更改
	var nowweekDta = jQuery("#realweekdata .active .week").text();
	var nowdate = nowDataThis(nowweek, nowweekDta); //选择的日期 
	stime = jQuery("#realtimedata .active .hide .strattime").text();
	etime = jQuery("#realtimedata .active .hide .endtime").text();
	sdate = nowdate;
	edate = nowdate;

	initClassroom();

}

//function initArea() {
//	getRoomAreaLists(function(data) {
//		var item = data.data;
//		var msg = data.msg;
//		var areahtml = "";
//		if(msg > 0) {
//			$(".real_time_con").children().remove();
//			for(var i = 0; i < item.length; i++) {
//				areahtml += '<div class="real_time_item" id=area' + item[i].id + '>';
//				areahtml += '<h5 class="colorfff text-left"> <span class="">' + item[i].tit + '</span></h5> ';
//				areahtml += '<ul class="row roomlist clearfix"> </ul>';
//				areahtml += '</div>';
//
//			}
//			$(".real_time_con").append(areahtml);
//			initClassroom();
//
//		}
//
//	})
//}
//区域无教室
//function emptyArea() {
//	//******************************区域没有教室删除******************************//
//	for(var j = 0; j < $(".real_time_item").length; j++) {
//		if($(".real_time_item").eq(j).find(".roomlist").children().length == 0) {
//			emptyAreaId.push($(".real_time_item").eq(j).attr("id"));
//		}
//	}
//	for(var i = 0; i < emptyAreaId.length; i++) {
//		for(var j = 0; j < $(".real_time_item").length; j++) {
//			if($(".real_time_item").eq(j).attr("id") == emptyAreaId[i]) {
//				$(".real_time_item").eq(j).remove();
//			}
//		}
//	}
//}
//区域教室被隐藏
//function emptyClass() {
//	emptyClassId = [];
//	//******************************区域没有教室删除******************************//
//	for(var j = 0; j < $(".real_time_item").length; j++) {
//		//		console.log($(".real_time_item").eq(j).attr("id") + ";;;" + $(".real_time_item").eq(j).find(".roomlist li").length + ";;;" + $(".real_time_item").eq(j).find(".roomlist li.hide").length)
//
//		if($(".real_time_item").eq(j).find(".roomlist li.col-xs-2").length == $(".real_time_item").eq(j).find(".roomlist li.hide").length) {
//			//			console.log()
//			emptyClassId.push($(".real_time_item").eq(j).attr("id"));
//		}
//	}
//	//	console.log(emptyClassId)
//	for(var i = 0; i < emptyClassId.length; i++) {
//		for(var j = 0; j < $(".real_time_item").length; j++) {
//			if($(".real_time_item").eq(j).attr("id") == emptyClassId[i]) {
//				$(".real_time_item").eq(j).addClass("hide");
//			}
//		}
//	}
//}