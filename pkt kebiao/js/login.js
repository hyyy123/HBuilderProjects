mui.plusReady(function() { 
	jQuery("input").focus(function() {
		$(".login-support").addClass("hide");
	})
	jQuery("input").blur(function() {
		$(".login-support").removeClass("hide");
	})
})

function btnSubmit_Click() {
	var user_name = $("#txtUserName").val();
	var pass = $("#txtPassword").val();
	if(jQuery.trim(user_name)==""||jQuery.trim(pass)==""){
		$("#msgtip").html("请将信息填写完全");
		
	}else{
		appLogin(user_name, pass, function(data) {
		if(data.msg > 0) {
			var token = data.data.token;

			setStorage("token", token);
			//			console.log(getStorage("token"))
			location = "index.html";
		}
		}, function(data) {
			$("#msgtip").html(data.msgbox);
			removeStorage("token")
		})	
	}
	

}
//登录
var http="http://www.paikongtong.com"

function appLogin(user_name, pass, func, errorFuc) {
	var url = http + "/tools/api_mms.ashx?action=app_login&user_name=" + user_name + "&password=" + pass;
	//  console.log(url)
	getAjax(url, false, true, function(data) {
		if(func != undefined) {
			func(data);
		}
	}, function(data) {
		if(errorFuc != undefined) {
			errorFuc(data);
		}
	})
}