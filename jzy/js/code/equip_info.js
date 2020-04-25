var all = parseUrl();
var token = all["token"];
var area_id = all["area_id"];
var code = all["code"];
var http = "http://www.cabr-emc.com";
mui.plusReady(function() {
	//	var self = plus.webview.currentWebview();
	//	var token = self.token; //获取当前页面所属的id  
	//	setCharts(); 
	mui('body').on('tap', '.licon', function() {
		var param = $("#equip_list li").has(this).find(".litip")
		if(param.hasClass("hide")) {
			param.removeClass("hide")
		} else {
			param.addClass("hide")
		}
	});
	//图片放大 
	mui.previewImage();
	getmoudle();
	//  console.log(code)

});

function getmoudle() {
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
	mui.ajax(http + '/tools/Qrcode.ashx', {
		data: {
			action: 'get_by_code',
			code: code,
			token: token
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//			console.log(JSON.stringify(data))
			//
			var item = data.data;
			//alert(item)
			var msg = data.msg;
			
				overTime(msg);
			if(msg > 0) {
				nwaiting.close();
				$("#area_id").text(item.area_id)
				$("#code").text(item.code);
				$("#equcode").text(item.link)
				$("#protect").text(item.plan_days);
				getChartData(item.link)

				var status_json = JSON.parse(item.status_json);
				$("#frequency").text(status_json.frequency+"HZ");

				var base_json = JSON.parse(item.base_json);
				$("#location").text(base_json.location);
				$("#equname").text(base_json.name);
				$("#startdate1").text(base_json.creatime);
				$("#limityear").text(base_json.limityear);
				$("#check").text(base_json.check);
				$("#produce").text(base_json.produce);

				var param_json = JSON.parse(item.param_json);
				$("#equtype").text(param_json.equtype);
				$("#flow").text(param_json.flow);
				$("#lift").text(param_json.lift);
				$("#power").text(param_json.power);

				var img_json = JSON.parse(item.img_json);
				var imgarray = img_json.imgarray;
				for(var i = 0; i < imgarray.length; i++) {
					//          	console.log(http +imgarray[i])
					$("#ulpicture").append('<li class="col-xs-4 lipicture"   ><img src="' + http + imgarray[i] + '" alt="" data-preview-src=""  /></li>');
				}
				if(item.status == 1) {
					$("#status").html('<b class="text-red" >关闭</b>');
				} else {
					$("#status").html('<b class="text-green" >开启</b>');

				}
				
				jQuery("a").each(function(i) {
					if(jQuery(this).attr("href") != "" && jQuery(this).attr("href") != undefined && jQuery(this).attr("href").indexOf("#") == -1) {

						jQuery(this).attr("href", jQuery(this).attr("href") + "&code=" + code + "&id=" + item.id);

						//									console.log(jQuery(this).attr("href"))
					}
				})
				
			}
		}
	})
}

//获取图表数据
function getChartData(code) {
	//    alert(code)
	//alert(type)
	if(code == 0) {
		$("#main1").addClass("hide");
		return;
	}
	$("#main1").removeClass("hide");
	var optionList = new Array();
	var option = {};
	option.time_modal = 1;
	option.device_id = "";
	option.area_id = area_id;
	option.type = 1; //电,水
	option.start_date_time = new Date().format("yyyy/MM/dd");
	option.loading = false;
	option.end_date_time = [];
	option.device_id = code;

	$("#main1").children().remove();
//	    console.log(option) 
	getDeviceDataChart(option, function(data) {

		var item = data.data;
		var msg = data.msg; 
				overTime(msg);
		if(msg > 0) {

//			console.log(item)
			var xLine = item.x; //X轴
			var zLine = item.z;
			if(zLine.length == 0) {
				$("#main1").append("<p>暂无图表</p>")
				return;
			}
			var chartData = []; //图表数据

			for(var i = 0; i < zLine.length; i++) {
				var code = zLine[i].code;
				var name = zLine[i].device_name;
				var chartItem = {
					name: name,
					type: 'line',
					barMaxWidth: 30,
					smooth: 0.5,
					data: item[code]
				};
				chartData.push(chartItem);
			};

			setChartsView('main1', zLine, chartData, xLine); //调用 
		}
	});
}

function setChartsView(main, optionList, chartData, xLine) {
	// 基于准备好的dom，初始化echarts实例
	var myChart3 = echarts.init(document.getElementById(main), 'macarons');

	var option3 = {
		tooltip: {
			show: true, // 是否显示提示框组件 
			trigger: "axis", //坐标轴触发，用在柱状图，折线图等会使用类目轴的图表中使用  
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},

			position: ['10%', '-5%'],
		},
		toolbox: {
			show: true,
			feature: {
				mark: {
					show: true
				},
				magicType: {
					show: true,
					type: ['line', 'bar']
				},
				restore: {
					show: false
				},
			},
			iconStyle:{  
                    normal:{
                      color:'white',//设置颜色
                    }
               },
			top: 20,
			right: 10
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			data: xLine,

		}],
		yAxis: [{
			type: 'value',
			name: '单位:KWh',
			nameGap: 25
		}],
		grid: {
			left: '3%',
			right: '4%',
			containLabel: true,
		},

		series: chartData,

	};
	myChart3.setOption(option3);
}