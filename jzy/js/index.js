 var http = "http://www.cabr-emc.com";
 // 区域
 var areaname = new Array;
 areaid = new Array;
 var all = parseUrl();
 var area_id = all["area_id"];
 var icurarea = 1;
 var token;
 mui.plusReady(function() {
 	token = getSelfToken();
// 	alert(JSON.stringify(all))
// 	alert(token); 
 	//动画
 	mui.init();

 	areaname = ["天津市医科大学总医院三住", "天津市医科大学总医院二住"];
 	areaid = ["1", "10"];

 	$.each(areaid, function(i, val) {
 		if(val == area_id) {
 			icurarea=i;
 			$("#area_id").text(areaid[i]);
 			$("#area").text(areaname[i]);
 		}
 	})
 	hrefInit();

// 	initArea();
 	getTopData(token);

 });

 function hrefInit() { 
 	mui('body').on('tap', '.conheadul ul li', function() {
 		var news_id = jQuery(this).index() + 1; //获取id值
 		mui.openWindow({
 			url: "statistics/index.html?token=" + token + "&area_id=" + area_id, //跳转的页面
 			id: "statistics/index.html",
 			extras: {
 				newsId: news_id, //自定义newsId,处理页面传值
 			},
 			styles: { //这个和页面传值没关系
 				popGesture: 'close'
 			}
 		})
 	});
 }

// function initArea() {
// 	mobileSingleSelect("areaPicker", "#area", "#area", "选择区域", areaname, icurarea, function(indexArr, data) {
// 		//console.log(indexArr, data); 
// 		icurarea = indexArr
// 		$("#area_id").text(areaid[indexArr])
// 		area_id = areaid[indexArr]; 
// 		getTopData(token);
// 		// 		console.log($("#area_id").text());
// 	}); 
// }
 //路径

 //退出
 function editLogin() {
 	//	console.log(111)
 	removeStorage("token");
 	location = "login.html";
 }
 //获取顶部数据
 function getTopData(token) { 
 	mui.ajax(http + '/tools/EcmDataDay.ashx', {
 		data: {
 			action: 'get_data_total_top',
 			area_id: area_id,
 			token: token
 		},
 		dataType: 'json', //服务器返回json格式数据
 		type: 'get', //HTTP请求类型
 		success: function(data) {
 			//获得服务器响应 
 			jQuery(".counter").html("");
			overTime(data.msg);
//			alert(token)
// 			alert(JSON.stringify(data));
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