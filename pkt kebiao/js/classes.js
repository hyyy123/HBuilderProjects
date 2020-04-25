var weekData, icurweek, icurData;
var today = new Date().format("yyyy/MM/dd");
var dataArray = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
var teacher_codes = "",
	class_codes = "",
	rsc_ids = "";
var nwaiting;
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

function initSmallclassClass() {
	jQuery("#smallclassdata li").click(function() {
		jQuery("#smallclassdata li").removeClass("active");
		jQuery(this).addClass("active");
		//		console.log(1)
	})
}

var area_id = 0,
	old_area_id = 0,
	type_id = 0,
	old_type_id = 0;

function initClass() {
	getTermClassList(getStartDate(), getEndDate(), true, function(data) {
		//        console.log(JSON.stringify(data));
		var classData = data.data;
		var msg = data.msg;
		var itemsort = "";
		if(msg > 0) {
			jQuery("#smallclassdata").children().remove();
			var smallclasshtml = "";
			for(var i = 1; i < classData.length; i++) {
				if(i == 1) {
					smallclasshtml += "<li class='pull-left active' id=" + classData[i].class_code + "><p class='fontCondensed  text-center'>" + classData[i].class_name + "</p></li>";

					class_codes = classData[i].class_code;
					initHeader(classData[i].class_name, icurweek);
				} else {
					smallclasshtml += "<li class='pull-left'id=" + classData[i].class_code + "><p class='fontCondensed  text-center'>" + classData[i].class_name + "</p></li>";
				}
			}
			jQuery("#smallclassdata").append(smallclasshtml);
			initSmallclassClass();
			loadData(icurweek, itemsort);
		}
	});

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

	class_codes = jQuery("#smallclassdata .active").attr("id");
	var class_name = jQuery("#smallclassdata .active p").text();

	var itemsort = "";
	initHeader(class_name, nowweek);
	initFirst(weekindex, dataArray, courseArray);

	showLoading();
	//	nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 ***************************************************
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
			//			nwaiting.close(); //***************************************************
		}
	})
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
			html += '<li class="fontCondensed"><i class="mui-icon mui-icon-location"></i>' + judgeEmpty(item.room_name) + '</li>';
			html += '<li class="fontCondensed"><i class="mui-icon mui-icon-person"></i>' + judgeEmpty(item.teacher_name) + '</li>';
			html += '</ul>';
			html += '</div>';
		}

		$("#table_list tr").eq(colstart).find("td .tdab").eq(row).html(html)

	}

}