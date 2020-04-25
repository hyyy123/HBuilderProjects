var weekData;//mui.plusReady
mui.plusReady(function() {
	mui.init();
	setCourseArr(function() {
		setWeekData(function() {
			mui.init();
			weekData = weekData;

		})
	}, function() {

		removeStorage("token");
		location = "login.html";

	})
})
////设置周数
var term_start_date = "",
	term_end_date = "";

function setWeekItem() {
	term_start_date = getStartDate();
	term_end_date = getEndDate();
}
//==========================================================教师课表====================================================================
//获取教师列表
var teacherData;

function setTableTeacher() {
	var ocpyTimes = {
		sdate: term_start_date,
		edate: term_end_date,
		stime: courseArray[0].start_hour + ":" + courseArray[0].end_hour,
		etime: courseArray[courseArray.length - 1].start_hour + ":" + courseArray[courseArray.length - 1].end_hour
	};
	getOccupyTeacherList(JSON.stringify([ocpyTimes]), false, function(data) {
		//  	console.log(data);
		var msg = data.msg;
		if(msg > 0) {
			teacherData = data.data;
			//         console.log(teacherData);
		}
	});
}
//==========================================================教室课表====================================================================

var area_id = 0;
old_area_id = 0, type_id = 0, old_type_id = 0;
var roomData;

function setTableRoom() {
	getRoomListBykw(area_id, type_id, 0, "", false, function(data) {
		//  	console.log(data);
		console.log(JSON.stringify(data));
		//      var msg = data.msg;
		//      if (msg > 0) {
		//          roomData = data.data;   
		//      }
	});

}
//==========================================================班级课表====================================================================
//获取班级列表
var classData;

function setTableClass(func) {
	getTermClassList(term_start_date, term_end_date, false, function(data) {
		console.log(data);
		//        console.log(JSON.stringify(data));
		var msg = data.msg;
		if(msg > 0) {
			classData = data.data;

		}
	});
}
//==========================================================课表====================================================================
//获取课表 
var timer;
var ocupItemData, teacher_codes = "",
	class_codes = "",
	rsc_ids = "";

function getOcpyList() {
	teacher_codes = "", class_codes = "", rsc_ids = "";
	param = $("#param").val();
	if(listType == 1) {
		teacher_codes = param;
		loadData();
	} else if(listType == 2) {
		rsc_ids = param;
		getRscList(loadData);
	} else {
		class_codes = param;
		loadData();
	}
}
//教室
function getRscList(func) {
	getOccListByrscid(term_start_date, term_end_date, rsc_ids, 1, false, function(data) {
		//console.log(JSON.stringify(data));
		if(data.data.length > 0) {
			var item = data.data;
			itemCount += item.length;
			for(var i = 0; i < item.length; i++) {
				item[i].day = new Date(item[i].sdate).getDay() == 0 ? 7 : new Date(item[i].sdate).getDay();
				item[i].room_id = item[i].resid;
				item[i].room_name = item[i].resna;
				item[i].week = (getWeekByDate(term_start_date, item[i].sdate) == getWeekByDate(term_start_date, item[i].edate)) ? getWeekByDate(term_start_date, item[i].sdate) : getWeekByDate(term_start_date, item[i].sdate) + "-" + getWeekByDate(term_start_date, item[i].edate);
			}
			ocupItemData = item;
		}
		if(func != undefined) {
			loadData();
		}
	})
}

function loadData() {
	getCourseTableList(term_start_date, term_end_date, term_start_date, teacher_codes, class_codes, rsc_ids, false, false, function(data) {
		console.log(JSON.stringify(data));
		//  	console.log(data);
		//      if (data.msg > 0) {
		//          closePageLoading();
		//          var item = data.data; 
		//      }
	})
}
//===================================================课程表=================================================
//var schedulData = [];
//function getSchedulList() {
//  $("#item_list").children().remove();
//  var class_code = $("#class").val();
//  $("#loading").text("");
//  getScheduleTableList(getStartDate(), getEndDate(), getStartDate(), class_code, true, function (data) {
//      //console.log(JSON.stringify(data));
//      if (data.msg > 0) {
//          schedulData = data.data;
//          setItemData();
//      }
//  });
//}