mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	var token = self.token; //获取当前页面所属的id  
	setCharts(); 
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
});
function setCharts() {
	// 基于准备好的dom，初始化echarts实例 
	var myChart3 = echarts.init(document.getElementById("main1"));

	var option3 = {
		backgroundColor: '#18A0D5', //背景色 
		xAxis: [{
			type: 'category',
			boundaryGap: true,
			data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
			//设置轴线的属性
			axisLine: {
				lineStyle: {
					color: '#fff',
				}
			}
		}],
		yAxis: [{
			type: 'value',
			name: '耗电量 单位:kwh',
			nameGap: 25,
			//设置轴线的属性
			axisLine: {
				lineStyle: {
					color: '#fff',
				}
			},
			//网格样式
			splitLine: {
				show: true,
				lineStyle: {
					color: ['fff'],
					type: 'dotted'
				}
			}
		}],
		grid: {
			left: '3%',
			right: '4%',
			containLabel: true,
		},
		series: [{
			data: [820, 932, 901, 934, 1290, 1330],
			type: 'line',
			itemStyle: {
				normal: {
					color: '#fff',
					lineStyle: {
						color: '#fff'
					}
				}
			},
		}] 
	};
	myChart3.setOption(option3);

}