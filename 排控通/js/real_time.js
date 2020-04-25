var weekData, icurweek, icurData;
var today = new Date().format("yyyy/MM/dd");
var time = new Date().Format("HH:mm");
var timeH = new Date().Format("HH");
var timeM = new Date().Format("mm");
var timeNow = parseInt(new Date().Format("HH"));
var StimeH, EtimeH;

var dataArray = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
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

var weekData;
var nwaiting;
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

			initArea();
			//			init();
			//判断下一时间段
			var timeArray = nextSection(timeH, timeM);
			if(timeArray != "") {
				StimeH = timeArray[0];
				EtimeH = timeArray[1];

			} else {

				StimeH = time;
				EtimeH = time;
			}

			realTime();
			initSelectNav();
		})
	})
})
//实时时间
function realTime() {
	nowDate(".real_time_data", ".real_time_week", ".real_time_now");
	setInterval(function() {
		nowDate(".real_time_data", ".real_time_week", ".real_time_now")
	}, 1000)

	setInterval(function() {

		var timeH = new Date().Format("HH");
		var timeM = new Date().Format("mm");
		var timeArray = nextSection(timeH, timeM);
		if(timeArray != "") {
			StimeH = timeArray[0];
			EtimeH = timeArray[1];

		} else {

			StimeH = time;
			EtimeH = time;
		}

		showLoading();
		//		nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 ***************************************************
		initArea();
	}, 1800000)
}
//nav选择
function initSelectNav() {
	jQuery(".header ul li").click(function() {
		jQuery(".header ul li").removeClass("active");
		jQuery(this).addClass("active");

		initClass(jQuery(this).index())
	})
}

//所有教室
function initClassroom() {
	getRoomListBykw(area_id, type_id, 0, "", true, function(data) {
		var item = data.data;
		var msg = data.msg;
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

function initArea() {
	getRoomAreaLists(function(data) {
		var item = data.data;
		var msg = data.msg;
		var areahtml = "";
		if(msg > 0) {
			$(".real_time_con").children().remove();
			for(var i = 0; i < item.length; i++) {
				areahtml += '<div class="real_time_item" id=area' + item[i].id + '>';
				areahtml += '<h5 class="colorfff text-left"> <span class="">' + item[i].tit + '</span></h5> ';
				areahtml += '<ul class="row roomlist clearfix"> </ul>';
				areahtml += '</div>';

			}
			$(".real_time_con").append(areahtml);
			initClassroom();

		}

	})
}

function initYellowClass() {
	getRoomInfoBydate(today, today, time, StimeH, function(data) {
		var item = data.data;
		var msg = data.msg;
		if(msg > 0) {
			if(item.length > 0) {
				for(var i = 0; i < item.length; i++) {
					classyellow.push(item[i]);
				}
			}
			allClass();
			initClass(1);
		}
	})
}

function initClass(way) {
	$(".real_time_item li.col-xs-2").addClass("hide");
	$(".real_time_item").removeClass("hide");
	if(way == 0) {
		$(".real_time_item  li.col-xs-2").removeClass("hide");
	} else if(way == 1) {
		$(".real_time_item  li.col-xs-2").has(".bgyellow").removeClass("hide");
		emptyClass()

	} else if(way == 2) {
		$(".real_time_item  li.col-xs-2").has(".bgred").removeClass("hide");
		emptyClass()

	} else if(way == 3) {
		$(".real_time_item  li.col-xs-2").has(".bgblue").removeClass("hide");
		emptyClass()

	}
}

function allClass() {

	$(".real_time_item .roomlist").children().remove();
	//所有
	for(var i = 0; i < classArray.length; i++) {
		var html = "";
		html += '<li class="col-xs-2" id="classroom' + classArray[i].id + '" >';
		html += '<div class="real_item bgblue">';
		html += '<p class="title colorfff">' + classArray[i].resna + '</p>';
		html += '<h4 class="colorfff fontCondensed text-center" style="padding-left: 0px; line-height: 50px;">暂无记录</h4>';
		html += '</div>';
		html += '</li>';
		$("#area" + classArray[i].arid).find(".roomlist").append(html);
	}
	//空区域
	emptyArea();

	for(var j = 0; j < classyellow.length; j++) {
		$("#classroom" + classyellow[j].resid).children().remove();

		var html = "";
		//		if(judgeClass(classyellow[j].stime, StimeH)) {
		html += '<div class="real_item bgyellow" >';

		//		} else {
		//			html += '<div class="real_item bgred" >';
		//		}

		html += '<span class="hide info">' + JSON.stringify(classyellow[j]) + '</span>';
		html += '<p class="title colorfff" id="' + classyellow[j].resid + '">' + classyellow[j].resna + '</p>';
		html += '<h4 class="colorfff fontCondensed" id="' + classyellow[j].course_code + '">' + classyellow[j].course_name + '</h4>';
		html += '<ul>';
		html += '<li class="fontCondensed colorfff" id="' + classyellow[j].class_code + '"><i class="fa fa-columns"></i>' + judgeEmpty(classyellow[j].class_name)  + '</li>';
		html += '<li class="fontCondensed colorfff" id="' + classyellow[j].teacher_code + '"><i class="mui-icon mui-icon-person"></i>' + judgeEmpty(classyellow[j].teacher_name) + '</li>';
		html += '</ul>';
		html += '</div>';
		$("#classroom" + classyellow[j].resid).append(html);
	}

	$(".real_item").click(function() {
		if($(this).hasClass("bgblue")) {

		} else {
			infoMsg(this);
		}
	})
	closeLoading();
	//	nwaiting.close(); //***************************************************
}
//区域无教室
function emptyArea() {
	//******************************区域没有教室删除******************************//
	for(var j = 0; j < $(".real_time_item").length; j++) {
		if($(".real_time_item").eq(j).find(".roomlist").children().length == 0) {
			emptyAreaId.push($(".real_time_item").eq(j).attr("id"));
		}
	}
	for(var i = 0; i < emptyAreaId.length; i++) {
		for(var j = 0; j < $(".real_time_item").length; j++) {
			if($(".real_time_item").eq(j).attr("id") == emptyAreaId[i]) {
				$(".real_time_item").eq(j).remove();
			}
		}
	}
}
//区域教室被隐藏
function emptyClass() {
	emptyClassId = [];
	//******************************区域没有教室删除******************************//
	for(var j = 0; j < $(".real_time_item").length; j++) {
		//		console.log($(".real_time_item").eq(j).attr("id") + ";;;" + $(".real_time_item").eq(j).find(".roomlist li").length + ";;;" + $(".real_time_item").eq(j).find(".roomlist li.hide").length)

		if($(".real_time_item").eq(j).find(".roomlist li.col-xs-2").length == $(".real_time_item").eq(j).find(".roomlist li.hide").length) {
			//			console.log()
			emptyClassId.push($(".real_time_item").eq(j).attr("id"));
		}
	}
	//	console.log(emptyClassId)
	for(var i = 0; i < emptyClassId.length; i++) {
		for(var j = 0; j < $(".real_time_item").length; j++) {
			if($(".real_time_item").eq(j).attr("id") == emptyClassId[i]) {
				$(".real_time_item").eq(j).addClass("hide");
			}
		}
	}
}