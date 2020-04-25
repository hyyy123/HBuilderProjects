var http = "http://www.cabr-emc.com";
var all = parseUrl();
var token = all["token"];
var area_id = all["area_id"];
var colorPalette = [
      '#CA513A', '#1090E1', '#3ACA60', '#66B9D3', '#A5BACB',
       '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
       '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
       '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
       '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
];
mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	var token = self.token; //获取当前页面所属的id   

	mui('body').on('tap', '.licon', function() {
		var param = $("#equip_list li").has(this).find(".litip")
		if(param.hasClass("hide")) {
			param.removeClass("hide")
		} else {
			param.addClass("hide")
		}
	});
	$('#begindata').click(function() {
		dtpicker("#begindata", "date",function(){
			getChartData(); 
		})
	})
	$('#enddata').click(function() {
		dtpicker("#enddata", "date",function(){
			getChartData(); 
		})
	})

	initSelect();
	getChartData(); 
});
// 多选
function initSelect() {
	$("#begindata").text(new Date().format("yyyy/MM/dd")) 
	$("#enddata").text(new Date().format("yyyy/MM/dd")) 
	//设备名称
	var icurinfo = 0;
	var infoname = ["8#柱子",  "9#柱子"];
	var infoid = ["1", "2"];
	mobileSingleSelect("infotype", "#infotype", "#infotypetext", "选择", infoname, 0, function(indexArr, data) {
		//console.log(indexArr, data); 
		icurequip = indexArr
		$("#info_id").text(infoid[indexArr])
			getChartData(); 
	});
}

function getChartData() { 
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
    $(".name").text($("#infotypetext").text())
    $("#main1").children().remove();
    $("#main2").children().remove();
    var option = {};
    option.sort = 4;
    option.type = 1;
    option.area_id = 1;
    option.codes = "11$" + $("#info_id").text();;
 	option.start_date_time = $("#begindata").text() + " " + "00:00:00";
    option.end_date_time = $("#enddata").text() + " " + "23:59:59";
    option.loading = false;
//  console.log(JSON.stringify(option))
	
    getMonitorData(option, function (data) {
        var item = data.data;
        var msg = data.msg;
				overTime(msg);
        if (msg > 0) {
				nwaiting.close();
				
            //console.log(item)
            var xLine = item.x;//X轴
            var chartData1 = [];//图表数据
            var chartData2 = [];//图表数据
            //console.log($("#selectcode").find("option:selected"))
            //console.log(name);
            var dataList = item.dataList;
            for (var i = 0; i < dataList.length; i++) {
                var code = dataList[i].code;
                var list = dataList[i].list;
                var chartItem1 = {
                    code: code, text: $("#infotypetext").text(), name: "X方向倾角", type: 'line', itemStyle: {
                        normal: { color: colorPalette[i], lineStyle: { color: colorPalette[i] } }
                    }, smooth: 0.5, data: list[0].data
                };
                var chartItem2 = {
                    code: code, text: $("#infotypetext").text(), name: "Y方向倾角", type: 'line', itemStyle: {
                        normal: { color: colorPalette[i], lineStyle: { color: colorPalette[i] } }
                    }, smooth: 0.5, data: list[1].data
                };
                chartData1.push(chartItem1);
                chartData2.push(chartItem2);
            };
            setCharts1(chartData1, xLine);
            setCharts2(chartData2, xLine);
        }

    })
}
function setCharts1(chartData, xLine) {
    //console.log(chartData)
    var myChart = echarts.init(document.getElementById("main1"), 'macarons');
    var option = {
        color: ['#E89E23'],
        tooltip: {
            trigger: 'axis',

            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
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
        xAxis: [
            {
                type: 'category',
                data: xLine,
                //设置轴线的属性
			axisLine: {
				lineStyle: {
					color: '#fff',
				}
			},
			 

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '倾角/°',
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
					color: '#fff',
					type: 'dotted'
				}
			}
            },
        ],
        series: chartData
    };

    myChart.setOption(option);
}
function setCharts2(chartData, xLine) {
    var myChart1 = echarts.init(document.getElementById("main2"), 'macarons');
    var option1 = {
        color: ['#E89E23'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
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
        xAxis: [
            {
                type: 'category',
                data: xLine,
//设置轴线的属性
			axisLine: {
				lineStyle: {
					color: '#fff',
				}
			}, 
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '倾角/°',
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
					color: '#fff',
					type: 'dotted'
				}
			}
            }
        ],
        series: chartData
    };

    myChart1.setOption(option1);
}