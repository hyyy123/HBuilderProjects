var weekData, icurweek, icurData;
var today = new Date().format("yyyy/MM/dd");
var dataArray = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
var area_id = 0,
	type_id = 0;
var classArray = new Array;
var ocupItemData, teacher_codes = "",
	class_codes = "",
	rsc_ids = "";
var nwaiting;
//mui.plusReady
mui.plusReady(function() {
	showLoading();
	//	nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 ***************************************************

	setCourseArr(function() {
		setWeekData(function() {
			//当前周
			icurweek = getWeekByDate(getStartDate(), today);
			//总周数
			weekData = weekData;
			//当前周开始结束日期
			icurData = getDateByWeeks(getStartDate(), icurweek);

			initFirst(icurData, dataArray, courseArray);
			initClassroom();
			initDate();

		})
	})
})

function initSelectArea() {
	jQuery("#classarea li").click(function() {
		jQuery("#classarea li").removeClass("active");
		jQuery(this).addClass("active");
		area_id = jQuery(this).attr("id");
		classRoomList(2);
		//		console.log("area_id" + area_id);
	})
}

function initSelectType() {
	jQuery("#classtype li").click(function() {
		jQuery("#classtype li").removeClass("active");
		jQuery(this).addClass("active");
		type_id = jQuery(this).attr("id");
		//		console.log("type_id" + type_id);
		classRoomList(2);
	})
}

function initSelectClass() {
	jQuery("#classselect li").click(function() {
		jQuery("#classselect li").removeClass("active");
		jQuery(this).addClass("active");
	})
}

function initArea() {
	getRoomAreaLists(function(data) {
		var item = data.data;
		var msg = data.msg;
		var areahtml = "";
		if(msg > 0) {
			jQuery("#classarea").children().remove();
			areahtml += "<li class='pull-left active' id='0'><p class='fontCondensed  text-center'>全部</p></li>";
			for(var i = 0; i < item.length; i++) {
				areahtml += "<li class='pull-left' id=" + item[i].id + "><p class='fontCondensed  text-center'>" + item[i].tit + "</p></li>";

			}
			jQuery("#classarea").append(areahtml);
			initSelectArea();
			initType();
		}

	})
}

function initType() {

	getRoomTypeLists(function(data) {
		var item = data.data;
		var msg = data.msg;
		var typehtml = "";
		if(msg > 0) {
			jQuery("#classtype").children().remove();
			typehtml += "<li class='pull-left active' id='0'><p class='fontCondensed  text-center'>全部</p></li>";
			for(var i = 0; i < item.length; i++) {
				typehtml += "<li class='pull-left' id=" + item[i].id + "><p class='fontCondensed  text-center'>" + item[i].tpna + "</p></li>";

			}
			jQuery("#classtype").append(typehtml);
			initSelectType();
			classRoomList(1);
		}
	})
}

function initClassroom() {
	getRoomListBykw(area_id, type_id, 0, "", true, function(data) {
		//		console.log(JSON.stringify(data));
		var item = data.data;
		var msg = data.msg;
		if(msg > 0) {
			if(item.length > 0) {
				for(var i = 0; i < item.length; i++) {

					classArray.push(item[i]);
				}
			}
			initArea();
		}

	});
}

function classRoomList(way) {
	var classhtml = "";
	var count = 0;
	jQuery("#classselect").children().remove();
	//		console.log(classArray); 
	for(var i = 0; i < classArray.length; i++) {
		if(0 == area_id && 0 == type_id) {
			count = 2;
			if(i == 0) {
				classhtml += "<li class='pull-left active' id=" + classArray[i].id + "><p class='fontCondensed  text-center'>" + classArray[i].resna + "</p></li>";
				if(way == 1) {
					initHeader(classArray[i].resna, icurweek);
					rsc_ids = classArray[i].id;
					getRscList(icurweek);
				}
			} else {
				classhtml += "<li class='pull-left' id=" + classArray[i].id + "><p class='fontCondensed  text-center'>" + classArray[i].resna + "</p></li>";
			}
		} else if(classArray[i].arid == area_id && 0 == type_id || classArray[i].tpid == type_id && 0 == area_id || classArray[i].arid == area_id && classArray[i].tpid == type_id) {
			count = 1;

			classhtml += "<li class='pull-left' id=" + classArray[i].id + "><p class='fontCondensed  text-center'>" + classArray[i].resna + "</p></li>";

		}
	}

	if(count == 0) {
		classhtml += "<li class='pull-left'>暂无记录</li>";
	}

	jQuery("#classselect").append(classhtml);
	initSelectClass();

}

function sideSubmit() {
	//		openmenu(); 
	var nowweek = jQuery("#weekdata .active p").text();
	var sdate = jQuery("#weekdata .active .hide").eq(0).text();
	var edate = jQuery("#weekdata .active .hide").eq(1).text();
	var weekindex = {
		sdate: sdate,
		edate: edate
	};
	rsc_ids = jQuery("#classselect .active").attr("id");
	if(rsc_ids == undefined) {
		mui.toast('您还没有选择教室');
	} else {
		closemenu();
		var classroom_name = jQuery("#classselect .active p").text();

		initHeader(classroom_name, nowweek);
		initFirst(weekindex, dataArray, courseArray);

		showLoading();
		//		nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 ***************************************************
		getRscList(nowweek);
	}

}

//A306
//教室
function getRscList(icurweek) {
	//		console.log(47); 
	getOccListByrscid(getStartDate(), getEndDate(), rsc_ids, 1, false, function(data) {
		//		console.log(JSON.stringify(data));
		var itemCount = 0,
			ocupItemData = new Array;
		var item = data.data;
		if(data.data.length > 0) {
			itemCount += item.length;
			for(var i = 0; i < item.length; i++) {
				item[i].day = new Date(item[i].sdate).getDay() == 0 ? 7 : new Date(item[i].sdate).getDay();
				item[i].room_id = item[i].resid;
				item[i].room_name = item[i].resna;
				item[i].week = (getWeekByDate(getStartDate(), item[i].sdate) == getWeekByDate(getStartDate(), item[i].edate)) ? getWeekByDate(getStartDate(), item[i].sdate) : getWeekByDate(getStartDate(), item[i].sdate) + "-" + getWeekByDate(getStartDate(), item[i].edate);
			}
			ocupItemData = item;
		}
		//			console.log(ocupItemData)
		loadData(icurweek, itemCount, ocupItemData)
	})
}
//教室
function loadData(icurweek, itemCount, ocupItemData) {
	$("#table_list").children().remove();
	var html = "";
	for(var i = 0; i < courseArray.length; i++) {
		html += "<tr><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td><td><div class='tdab'></div></td></tr>"
	}
	$("#table_list").append(html);

	getCourseTableList(getStartDate(), getEndDate(), getStartDate(), teacher_codes, class_codes, rsc_ids, true, false, function(data) {
		var item = data.data;
		itemCount += item.length;
		var msg = data.msg;
		var course = new Array;
		if(data.msg > 0) {

			for(var i = 0; i < item.length; i++) {
				ocupItemData.push(item[i]);
			}
			//			console.log(ocupItemData)
			//倒序
			var itemsort = sortJsonHtml(ocupItemData);
			//			console.log(itemsort.length)
			for(var i = 0; i < itemsort.length; i++) {
				var weekstr = getDateByweekAndDay(itemsort[i].day, itemsort[i].week.toString())
				var constr = "," + icurweek + ",";
				//				console.log(weekstr);
				//				console.log(constr);
				//				console.log(weekstr.weeks.indexOf(constr));
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
			html += '<div class="tditem ' + bgcolor + '"  onclick="infoMsg(this)">';
			html += '<span class="hide info">' + JSON.stringify(item) + '</span>';

			html += '<h5 class="colorfff fontCondensed">' + judgeEmpty(item.course_name) + '</h5>';
			html += '</div>';
		} else {
			html += '<div class="tditem ' + bgcolor + '"  onclick="infoMsg(this)">';
			html += '<span class="hide info">' + JSON.stringify(item) + '</span>';

			html += '<h5 class="colorfff fontCondensed">' + judgeEmpty(item.course_name) + '</h5>';
			html += '<ul>';
			html += '<li class="fontCondensed"><i class="fa fa-columns"></i>' + judgeEmpty(item.class_name) + '</li>';
			html += '<li class="fontCondensed"><i class="mui-icon mui-icon-person"></i>' + judgeEmpty(item.teacher_name) + '</li>';
			html += '</ul>';
			html += '</div>';
		}

		$("#table_list tr").eq(colstart).find("td .tdab").eq(row).html(html)
	}

}