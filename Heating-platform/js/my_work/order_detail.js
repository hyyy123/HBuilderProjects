  mui.plusReady(function() {
  	var self = plus.webview.currentWebview();
  	var token = self.token; //获取当前页面所属的id 
  
   	//时间
   	$('.data').click(function () { 
      dtpicker("#datatext",'date')
    })
  });
