var weekData, icurweek, icurData;
var seachKw;
var today = new Date().format("yyyy/MM/dd");
var all = parseUrl();
if(all != undefined) {
	var sendClassCode = decodeURI(all["class_code"]);
	var codeArray = sendClassCode;
	if(sendClassCode.indexOf(",") != -1) {
		var codeArray = sendClassCode.split(",");
		sendClassCode = codeArray[0];
	}

}
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
			//			console.log(icurData) 

			getClassList(1);
		})
	})
})

function seachStudent() {
	seachKw = $(".seach input").val();
	getClassList(2);
}

function initClassa() {
	$(".stu_all ul li").click(function() {
		$(".stu_all ul li").removeClass("active");
		$(this).addClass("active");
		var code = $(this).attr("id");
		showLoading();
		getStudentList(code);
	})
}

function getClassList(way) {
	$(".stu_all ul").children().remove(); 
	getTermClassList(getStartDate(), getEndDate(),  true, function(data) { 
		var classData = data.data;
		var msg = data.msg;
		if(msg > 0) { 
			for(var i = 0; i < classData.length; i++) {
				//初加载way==1
				if(way == 1) {
					if(sendClassCode == undefined) {
						var html = ""
						//无指定code 
						html += '<li class="clearfix colorfff"  id=' + classData[i].class_code + ' ><span> ' + classData[i].class_name + ' </span><span class="pull-right peoplenum">  未曾录入</span> </li>';
						$(".stu_all ul").append(html);
						//初始显示名单
						$(".stu_all ul li").eq(0).addClass("active");
						getStudentList($(".stu_all ul li").eq(0).attr("id"));
					} else {
						//有指定code     
						if(codeArray.indexOf(classData[i].class_code) != -1) {
							var html = ""
							if(sendClassCode == classData[i].class_code) {
								html += '<li class="clearfix colorfff active" id=' + classData[i].class_code + ' ><span> ' + classData[i].class_name + ' </span><span class="pull-right peoplenum">  未曾录入 </span> </li>';
								getStudentList(classData[i].class_code);
							} else {  
								//判断是否为数组
								if(typeof codeArray != "string") {
									html += '<li class="clearfix colorfff"  id=' + classData[i].class_code + ' ><span> ' + classData[i].class_name + ' </span><span class="pull-right peoplenum">  未曾录入</span> </li>';
								 }
							}
							$(".stu_all ul").append(html);
						}
					}
				} else {
					//筛选way==2
					var html = ""
					if(classData[i].class_name.match(seachKw)) { //id=class'+classData[i]+'
						html += '<li class="clearfix colorfff " id=' + classData[i].class_code + ' ><span> ' + classData[i].class_name + ' </span><span class="pull-right peoplenum">  未曾录入 </span> </li>';
					}
					$(".stu_all ul").append(html);
						//初始显示名单
					$(".stu_all ul li").eq(0).addClass("active");
					getStudentList($(".stu_all ul li").eq(0).attr("id"));
				}
			}

			getAllList();
			initClassa();
		}
	})
}

function getAllList() {
	getClassAllList(function(data) {
		var item = data.data;
		var msg = data.msg;
		if(msg > 0) {
			for(var i = 0; i < item.length; i++) {
				$("#" + item[i].class_code).find(".peoplenum").html('<i class="fontCondensed fontsize15">' + item[i].student_count + '</i>&nbsp;&nbsp;&nbsp;人');
			}
		}

	})
}

function getStudentList(class_code) {
	$(".stu_list").children().remove();
	getStudentAllList(class_code, function(data) {
		var item = data.data;
		var msg = data.msg;
//		console.log(item)
		if(msg > 0) {
			if(item.length > 0) {
				for(var i = 0; i < item.length; i++) {
					initStudent(item[i])
				}
			} else {
				var html = "";
				html += "<h1 style='text-align: center; line-height: 450px; color: #fff;'>暂无人员录入</h1>"
				$(".stu_list").append(html);
			}

			closeLoading();
		}

	})

}

function initStudent(item) {
	var html = ""
	html += '<div class="col-xs-3 ">';
	html += '<div class="item clearfix"> ';
	html += '<p class=" pull-left  colorfff headimg"> ';
	if(item.photo == "") {
		html += '<img src="img/teacher.png" alt="" /> ';

	} else {
		html += '<img src="' + item.photo + '" alt="" /> ';

	}
	html += '</p> ';
	html += '<div class="text-left pull-left headinfo"> ';
	html += ' <p class="colorfff ">' + judgeEmpty(item.real_name) + '</p>';
	html += '<p class="colorfff fontsize12">' + judgeEmpty(item.user_name) + '</p> ';
	html += ' </div>';
	html += '</div> ';
	html += '</div> ';
	$(".stu_list").append(html);
}