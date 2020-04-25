  
        scan = null;//扫描对象 
  mui.plusReady(function() {
  	var self = plus.webview.currentWebview();
  	var token = self.token; //获取当前页面所属的id 
  	mui('body').on('tap', '.pool', function() {
  		$(".list-pool-father").removeClass("hide");
  	});
  	mui('body').on('tap', '.removep', function() {
  		$(".list-pool-father").addClass("hide");
  	});  
//	var ahref = [
//		"hos-struction/structure.html?token=" + token,
//		"hos-struction/facility.html?token=" + token,
//		"statistics/index.html?token=" + token,
//		"energy/abnormal.html?token=" + token
//	]
//	jQuery("#popover1 a").each(function(i) {
//		jQuery(this).attr("href", ahref[i]);
//	})


 }); 