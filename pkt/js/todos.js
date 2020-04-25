var weekData, icurweek, icurData;
var today = new Date().format("yyyy/MM/dd");
//mui.plusReady
mui.plusReady(function() {
//	showLoading();
	setCourseArr(function() {
		setWeekData(function() {
			//当前周
			icurweek = getWeekByDate(getStartDate(), today);
			//总周数
			weekData = weekData;
			//当前周开始结束日期
			icurData = getDateByWeeks(getStartDate(), icurweek);
			//			console.log(icurData) 
			getAllList();
			getItemList();
		})
	})
})
function initClassa() {
	$(".stu_all ul li").click(function() {
		$(".stu_all ul li").removeClass("active");
		$(this).addClass("active"); 
//		showLoading(); 
	})
}
function getAllList() {
	$(".stu_all ul").children().remove();
	var html = "";
	for(var i = 0; i < 50; i++) {
		if(i == 1) {
			html += '<li class=" colorfff futurn active">';
		} else {
			html += '<li class=" colorfff">';
		}
		html += '<div class="  colorfff clearfix itemall">';
		html += '<p class=" pull-left   sts fontsize12"><i class="fa fa-circle"></i></p>';
		html += '<div class="text-left pull-left itemallcon">';
		html += '<p class="colorfff fontsize16 itemalltime fontCondensed">2018/09/08</p>';
		html += '<p class="colorfff itemallsmall "><span>待办  2</span><span>已完成  3</span></p>';
		html += '</div>';
		html += '</div>';
		html += '</li>';
	}
	$(".stu_all ul").append(html);
	initClassa();
}

 function getItemList() {
 	$(".stu_list ").children().remove();
 	var html = "";
 	for(var i = 0; i < 50; i++) {
 		html += '<div class="item colorfff">';
 		html += '<div class=" clearfix ">';
 		html += '<div class="  colorfff clearfix ">';
 		html += '<p class=" pull-left  colorfff headimg"><img src="img/teacher.png" alt="" /></p>';
 		html += '<div class="text-left pull-left headinfo">';
 		html += '<p class="colorfff fontsize16">rerewrrwr</p>';
 		html += '<p class="colorfff">管理员</p>';
 		html += '</div>';
 		html += '</div>';
 		html += '<div class="itemcon colorfff">';
 		html += '<p class="colorfff">待办待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项待办事项事项</p>';
 		html += '<p class="colorfff">2018/09/07 10:09</p>';
 		html += '</div>';
 		html += '<p class="itembtn">';
 		if(i == 1) {
 			html += '<button type="button" class="mui-btn "  style=" background-color: rgba(255,255,255,0.3); border: rgba(0,0,0,0);">已完成</button> <span class="colorfff" style="line-height:31px ; padding-left:10px">2018/08/30</span>';
 		} else {
 			html += '<button type="button" class="mui-btn mui-btn-success">确认完成</button> ';
 		}
 		html += '</p>';
 		html += '</div>';
 		html += '</div>';
 	}
 	$(".stu_list").append(html);
 	initClassa();
 }