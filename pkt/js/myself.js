var weekData, icurweek, icurData;
var today = new Date().format("yyyy/MM/dd");
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
			getInfo()
		})
	})
})

function getInfo() {
	 getInfoSelf( function(data) {
		var item = data.data;
//		console.log(item)
		if(item.photo != "") {
			$(".headimg img").attr("src", item.photo);
		} else {
			$(".headimg img").attr("src", "img/teacher.png");
		}
		$("#user_name").html(item.user_name);
		$("#real_name").html(item.real_name);
		if(item.sex==1){
			var sex="男";
		}else{
			
			var sex="女";
		}
		$("#sex").html(sex);
		
		$("#identifier").html(item.identifier);
		$("#email").html(item.email);
		$("#phone").html(item.phone);
			closeLoading();
	})
}
 