mui.plusReady(function() {
	realTime();
})

function realTime() {
	nowDate(".real_time_data", ".real_time_week", ".real_time_now");
	setInterval(function() {
		nowDate(".real_time_data", ".real_time_week", ".real_time_now")
	}, 1000)
}

function editLogin() {
	removeStorage("token");
	location = "login.html";
}