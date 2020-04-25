mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	var token = self.token; //获取当前页面所属的id 
	mui('body').on('tap', '.licon', function() {
		var param = $("#maintenance_list li").has(this).find(".litip")
		if(param.hasClass("hide")) {
			param.removeClass("hide")
		} else {
			param.addClass("hide")
		}
	});  
});