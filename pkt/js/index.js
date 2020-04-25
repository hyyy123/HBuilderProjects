var weekData, icurweek, icurData;
var today = new Date().format("yyyy/MM/dd");
//mui.plusReady
mui.plusReady(function() {
	setCourseArr(function() {
		setWeekData(function() {
			//当前周
			icurweek = getWeekByDate(getStartDate(), today);
			//总周数
			weekData = weekData;
			//当前周开始结束日期
			icurData = getDateByWeeks(getStartDate(), icurweek);
			//			console.log(icurData) 

			realTime();
			getInfo();

		})
	})
})

function getInfo() {
	getInfoSelf(function(data) {
		var item = data.data;
//		console.log(item)
		if(item.photo != "") {
			$(".headimg img").attr("src", item.photo);
		} else {
			$(".headimg img").attr("src", "img/teacher.png");
		}
		$(".headinfo p").eq(0).html(item.user_name)
		$(".headinfo p").eq(1).html(item.real_name)
	})
}

function realTime() {
	var nowTime = new Date().Format("yyyy/MM/DD") + "&nbsp;&nbsp;" + "周" + new Date().Format("W") + "&nbsp;&nbsp;" + new Date().Format("HH:mm:ss")

	initHeader(nowTime, icurweek);
	setInterval(function() {
		nowTime = new Date().Format("yyyy/MM/DD") + "&nbsp;&nbsp;" + "周" + new Date().Format("W") + "&nbsp;&nbsp;" + new Date().Format("HH:mm:ss")

		initHeader(nowTime, icurweek);
	}, 1000)
}

function editLogin() {
	//	console.log(111)
	removeStorage("token");
	location = "login.html";
}