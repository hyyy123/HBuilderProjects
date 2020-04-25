 mui.plusReady(function() {
 	var self = plus.webview.currentWebview();
 	var token = self.token; //获取当前页面所属的id 
 	
 	
 	mui('body').on('tap', '.heating_nav li', function() {
	 	$(".heating_nav li").removeClass("liactive");
	 	$(this).addClass("liactive");
 	}); 
 	
 	
	$('#time').click(function () {  
      dtpicker("","datatime") 
    })
 });