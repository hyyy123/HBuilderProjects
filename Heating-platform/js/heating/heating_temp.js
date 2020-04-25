 mui.plusReady(function() {
 	var self = plus.webview.currentWebview();
 	var token = self.token; //获取当前页面所属的id 
 	 
 	
 	
	$('#time').click(function () {  
      dtpicker("","datatime") 
    })
 });