 mui.plusReady(function() {
 	var self = plus.webview.currentWebview();
 	var token = self.token; //获取当前页面所属的id 
 	//获取参数
 	var all=parseUrl();
 	var type=all["type"];
 	if(type==1){
 		$(".mui-title").text("用户来电"); 
 	}
 	if(type==2){
 		$(".mui-title").text("巡检问题"); 
 	}
 	if(type==3){
 		$(".mui-title").text("平台报警"); 
 	} 
 	mui('body').on('tap', '.robbery_nav li', function() {
	 	$(".robbery_nav li").removeClass("liactive");
	 	$(this).addClass("liactive");
 	}); 
 });