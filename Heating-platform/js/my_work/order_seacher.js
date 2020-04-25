 mui.plusReady(function() {
 	var self = plus.webview.currentWebview();
 	var token = self.token; //获取当前页面所属的id 
 	
 	 //导航
 	mui('body').on('tap', '.robbery_nav li a', function() {
	 	$(".robbery_nav li a").removeClass("navliactive");
	 	$(this).addClass("navliactive");
 	}); 
 	 //选择
 	mui('body').on('tap', '.robbery_select li', function() {
	 	$(".robbery_select li").removeClass("selectactive");
	 	$(this).addClass("selectactive");
 	}); 
 	 
 });