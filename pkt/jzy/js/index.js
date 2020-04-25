 
mui.plusReady(function() {
	var self = plus.webview.currentWebview(); 
	var  token = self.token; //获取当前页面所属的id 
	//动画
	mui.init();
	mui('body').on('tap', '.indexhref', function() {
		document.location.href = "index.html?token=" + token;
	});
	mui('body').on('tap', '.kindhref', function() {
		document.location.href = "seacher.html?token=" + token;
	});
	
	mui('body').on('tap', '.con ul li', function() {
		var news_id = jQuery(this).index() + 1; //获取id值
		mui.openWindow({
			url: "statistics/index.html?token=" + token, //跳转的页面
			id: "statistics/index.html",
			extras: {
				newsId: news_id, //自定义newsId,处理页面传值
			},
			styles: { //这个和页面传值没关系
				popGesture: 'close'
			}
		})
	});
	getTopData(token);

});

//获取顶部数据
function getTopData(token) {  
	var http = "http://www.iwesong.com:8056";
	mui.ajax(http + '/tools/EcmDataDay.ashx', {
		data: {
			action: 'get_data_total_top',
			area_id: "1",
			token:token
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//获得服务器响应 
			jQuery(".counter").html("");
			//		alert(JSON.stringify(data));
			if(data.msg > 0) {
				var d = data.data;
				for(var i = 0; i < d.length; i++) {
					var item = d[i];
					if(item.code == "1") {
						//电
						$(".todayenergy .counter").html(item.now_day);
					} else if(item.code == "2") {
						//水
						$(".todaywater .counter").html(item.now_day);
					} else if(item.code == "3") {
						//冷
						$(".todaygas .counter").html(item.now_day);
					} else if(item.code == "4") {
						//热
						$(".todayhot .counter").html(item.now_day);
					}
				}
				//动画
				for(var i = 0; i < $(".counter").length; i++) {
					animateNumber($(".counter").eq(i), $(".counter").eq(i).html());
				}
			}
		}
	});

}