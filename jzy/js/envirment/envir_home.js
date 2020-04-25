 var http = "http://www.cabr-emc.com";
 var token;
 var all = parseUrl();
 var token = all["token"];
 var area_id = all["area_id"];
 var envirLocData = envirLocData1;
 mui.plusReady(function() {
 	token = getSelfToken();
 	// 	  console.log(token)
 	mui.init();
 	timeCon();
 	initSelect();
 		mui('body').on('tap', '#morecon', function() {
		var codes = "";
		if(sendcodes == 8) { 
				codes += sendcodes + "$" + $("#infoparam_id").text().split("-")[1] + ","; 
		} else { 
				codes += sendcodes + "-" + $("#infoparam_id").text().split("-")[1] + ","; 

		}
		if(codes.length > 0) {
			codes = codes.substring(0, codes.length - 1);
		}
		mui.openWindow({
			url: "envir_list.html?token=" + token + "&area_id=" + area_id, //跳转的页面
			id: "envir_list.html",
			extras: {
				codes: codes, //自定义newsId,处理页面传值 
				start_date_time: getSelectedStartDateValue(),
				end_date_time: getSelectedEndDateValue(),
				type:$("#info_id").text(),
				param:0
			},
			styles: { //这个和页面传值没关系
				popGesture: 'close'
			}
		})
	});
 });
 // 多选
 var icurinfoparam = 0;
 var infoparamname = new Array;
 var infoparamid = new Array;
 var infoparam;

 function initSelect() {
 	//设备名称
 	var icurequip = 0;
 	var infoname = ["室内空气指数", "热湿环境"];
 	var infoid = ["0", "1"];
 	mobileSingleSelect("infotype", "#infotype", "#infotypetext", "请选择", infoname, 0, function(indexArr, data) {
 		//console.log(indexArr, data); 
 		icurequip = indexArr
 		$("#info_id").text(infoid[indexArr])
 		codes = "";
 		initCode(indexArr);
 	});
 	for(var i = 0; i < envirLocData.length; i++) {
 		//		console.log(JSON.stringify(envirLocData[i]))
 		infoparamname.push(envirLocData[i].text);
 		infoparamid.push(envirLocData[i].code);
 	}
 	$("#infoparam_id").text(envirLocData[0].code)
 	$("#infoparamtext").text(envirLocData[0].text)
 	mobileSingleSelect("infoparam", "#infoparam", "#infoparamtext", "请选择", infoparamname, 0, function(indexArr, data) {

 		$("#infoparam_id").text(infoparamid[indexArr]);
 		getData();
 	});
 	getData();
 }
 var sendcodes = "8";

 function initCode(param) {
 	if(param == 0) {
 		sendcodes = "8";
 		envirLocData = envirLocData1;
 	} else {
 		sendcodes = "5";
 		envirLocData = envirLocData2;
 	}
 	infoparamname = new Array;
 	infoparamid = new Array;
 	icurinfoparam = 0
 	for(var i = 0; i < envirLocData.length; i++) {
 		infoparamname.push(envirLocData[i].text);
 		infoparamid.push(envirLocData[i].code);
 	}
 	$("#infoparam_id").text(envirLocData[0].code)
 	$("#infoparamtext").text(envirLocData[0].text)

 	infoparam.updateWheel(0, infoparamname);
 	infoparam.locatePosition(0, 0);

 	getData();
 }

 function timeCon() {
 	$("#timemonth").text(new Date().format("yyyy/MM"))
 	$("#timeDate").text(new Date().format("yyyy/MM/dd"))
 	$("#timeyear").text(new Date().format("yyyy"))
 	var icurtimeinfo = 0;
 	var infotimename = ["日", "月", "年"];
 	var infotimeid = ["1", "2", "3"];
 	timekind();
 	timeClick();

 	// 	mobileSingleSelect("infotime", "#infotime", "#infotimetext", "请选择", infotimename, 0, function(indexArr, data) {
 	// 		//console.log(indexArr, data); 
 	// 		icurtimeinfo = indexArr
 	// 		$("#infotimeid").text(infotimeid[indexArr])
 	// 		$(".a1").addClass("hide")
 	// 		if(icurtimeinfo == 0) {
 	// 			$(".a1").has("#timeDate").removeClass("hide")
 	// 		} else if(icurtimeinfo == 1) {
 	// 			$(".a1").has("#timemonth").removeClass("hide")
 	// 		} else if(icurtimeinfo == 2) {
 	// 			$(".a1").has("#timeyear").removeClass("hide")
 	// 		}
 	// 	});
 }

 function timeClick() {
// 	var year = new Array;
// 	for(var i = 2010; i < new Date().format("yyyy"); i++) {
// 		year.push(i);
// 	}
// 	mobileSingleSelect("timeyear", "#timeyear", "#timeyear", "", year, 0, function(indexArr, data) {});
// 	//	$('#timeyear').click(function() {  dtpicker("#timeyear", "year")   })
// 	$('#timemonth').click(function() {
// 		dtpicker("#timemonth", "month")
// 	})
 	$('#timeSelect').click(function() {
 		dtpicker("#timeDate", "date",function(){ 
 			getData()
 		})
 	})
 }
 //=========================时间=======================//

 //获取当前日期选择模式下的日期值
 function getSelectedStartDateValue() {
 	var dateType = $("#infotimeid").text();
 	if(dateType == "1") {
 		return $("#timeDate").text();
 	} else if(dateType == "2") {
 		return $("#timemonth").text();
 	} else if(dateType == "3") {
 		return $("#timeyear").text();
 	}
 }
 //获取当前日期选择模式下的日期值
 function getSelectedEndDateValue() {
 	var dateType = $("#infotimeid").text();
 	if(dateType == "1") {
 		return $("#timeDate").text();
 	} else if(dateType == "2") {
 		return getCurrentMonthLast($("#timemonth").text());
 	} else if(dateType == "3") {
 		return $("#timeyear").text() + "/12/31";
 	}
 }
 //=========================时间=======================//
 function getData() {
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
 	var type = $("#info_id").text(); //0空空气湿度1热湿环境
 	var param = $("#infoparam_id").text();
 	// 	console.log(param)
 	$("#position").text($("#infoparamtext").text())
 	var url;
 	var option;
 	if(type == 0) {
 		url = "/tools//EcmDataHour.ashx?action=get_data_real";
 		option = {
 			code: 8,
 			start_date_time: getSelectedStartDateValue() + " " + new Date().format("HH:00:00"),
 			token: token
 		}
 	} else if(type == 1) {
 		url = "/tools//EcmDataDay.ashx?action=get_humiture_data_chart_by_day";
 		option = {
 			codes: param,
 			start_date_time: getSelectedStartDateValue(),
 			end_date_time: getSelectedEndDateValue(),
 			area_id: area_id,
 			token: token
 		}
 	}
 	//console.log(http+url);
// 	console.log(JSON.stringify(option))
 	mui.ajax(http + url, {
 		data: option,
 		dataType: 'json', //服务器返回json格式数据
 		type: 'get', //HTTP请求类型
 		success: function(data) {
				nwaiting.close();
 			var item = data.data;
 			var msg = data.msg;
				overTime(msg);
 			if(msg > 0) {
 				
 				// 			console.log(JSON.stringify(data)); 
 				//空气质量
 				if(type == 0) {
 					// 				console.log(1);
 					for(var i = 0; i < item.length; i++) {
 						var acode = item[i].code.split("$")[1];
 						if(param == sendcodes + "-" + acode) {
 							$("#a1").html("----")
 							$("#a2").html("----")
 							$("#a3").html(item[i].d2 + '<i class="fontsize12" >ppm</i>')
 							//  					$("#a3p").html((item[i].d1 > 75 ? "<span class='text-red' >差<span>" : "<span class='text-green' >差<span>"))
 							$("#a4").html(item[i].d1 + '<i class="fontsize12" >ug/m<sup>3</sup></i>')
 							//  					$("#a4p").html((item[i].d1 > 75 ? "fa-frown-o colorred" : "fa-smile-o colorgreen"))
 						}
 					}
 				} else if(type == 1) {
 					// 				console.log(2);
 					var datacodes = item[option.codes]; //图表数据 
 					// 				console.log(JSON.stringify(item))
 					var temp = datacodes.temp;
 					var humidity = datacodes.humidity;
 					var nowtemp, nowhumidity;
 					for(var i = 0; i < temp.length; i++) {
 						if(isNaN(temp[i])) {
 							$("#a1").html(temp[((i - 1) > 0 ? (i - 1) : 0)] + '<i class="fontsize12" >℃</i>')
 							$("#a2").html(humidity[((i - 1) > 0 ? (i - 1) : 0)] + '</span><i class="fontsize12" >%</i>')
 							$("#a3").html("----")
 							$("#a4").html("----")
 							return
 						}
 					}

 				}
 			}
 		}
 	});

 }