 
var all = parseUrl();
var token = all["token"];
var area_id = all["area_id"];
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
	var infoname = ["1#柱子", "2#柱子", "3#柱子", "4#柱子", "5#柱子", "6#柱子", "7#柱子"];
	var infoid = ["1", "2", "3", "4", "5", "6", "7"];
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
    $("#main3").children().remove();
    $("#main4").children().remove();
    var a = 2 * $("#info_id").text() - 1;
    var b = 2 * $("#info_id").text()
    var option = {};
    option.sort = 4;
    option.type = 1;
    option.area_id = area_id;
    option.codes = "10$" + a + "," + "10$" + b;
    option.start_date_time = $("#begindata").text() + " " + "00:00:00";
    option.end_date_time = $("#enddata").text() + " " + "23:59:59";
    option.loading = false;
//	option.token= token;
//	console.log(token)
//  console.log(JSON.stringify(option))
    getMonitorData(option, function (data) {
//  console.log(JSON.stringify(data))
        var item = data.data;
        var msg = data.msg;
				overTime(msg);
        if (msg > 0) {
				nwaiting.close();
				
            //console.log(item)
            var xLine = item.x;//X轴
            var chartData1 = [];//图表数据
            var chartData2 = [];//图表数据
            var chartData3 = [];//图表数据
            var chartData4 = [];//图表数据
            //console.log($("#selectcode").find("option:selected"))
            var dataList = item.dataList;
            //console.log(dataList);
            var list1 = dataList[0].list;
            var list2 = dataList[1].list;
            for (var i = 0; i < list1.length; i++) {
                var code = dataList[0].code;
                if (list1[i].name == "应变") {
                    var chartItem1 = {
                        code: code, text: $("#infotypetext").text(), name: list1[i].name, type: 'line', smooth: 0.5, data: list1[i].data
                    };
                    chartData1.push(chartItem1);
                }
                if (list1[i].name == "应力") {
                    var chartItem2 = {
                        code: code, text: $("#infotypetext").text(), name: list1[i].name, type: 'line', smooth: 0.5, data: list1[i].data
                    };
                    chartData2.push(chartItem2);
                }
            }
            for (var i = 0; i < list2.length; i++) {
                var code = dataList[1].code;
                if (list2[i].name == "应变") {
                    var chartItem3 = {
                        code: code, text: $("#infotypetext").text(), name: list2[i].name, type: 'line', smooth: 0.5, data: list2[i].data
                    };
                    chartData3.push(chartItem3);
                }
                if (list2[i].name == "应力") {
                    var chartItem4 = {
                        code: code, text: $("#infotypetext").text(),name: list2[i].name, type: 'line', smooth: 0.5, data: list2[i].data
                    };
                    chartData4.push(chartItem4);
                }
            }
            setCharts1(chartData1, xLine);
            setCharts2(chartData2, xLine);
            setCharts3(chartData3, xLine);
            setCharts4(chartData4, xLine);
        }

    })
}
function setCharts1(chartData, xLine) {
    var myChart = echarts.init(document.getElementById("main1"), 'macarons');
    var option = {
        color: ['#08EAF5'],
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
			//网格样式
//			splitLine: {
//				show: true,
//				lineStyle: {
//					color: '#fff',
//					type: 'dotted'
//				}
//			}

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '应变/ε',
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

    myChart.setOption(option);
}
function setCharts2(chartData, xLine) {
    var myChart2 = echarts.init(document.getElementById("main2"), 'macarons');
    var option2 = {
        color: ['#08EAF5'],
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
			//网格样式
//			splitLine: {
//				show: true,
//				lineStyle: {
//					color: ['fff'],
//					type: 'dotted'
//				}
//			}

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '应力/MPa',
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

    myChart2.setOption(option2);
}
function setCharts3(chartData, xLine) {
    var myChart3 = echarts.init(document.getElementById("main3"), 'macarons');
    var option3 = {
        color: ['#08EAF5'],
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
			//网格样式
//			splitLine: {
//				show: true,
//				lineStyle: {
//					color: ['fff'],
//					type: 'dotted'
//				}
//			}

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '应变/ε',
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

    myChart3.setOption(option3);
}
function setCharts4(chartData, xLine) {
    var myChart4 = echarts.init(document.getElementById("main4"), 'macarons');
    var option4 = {
        color: ['#08EAF5'],
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
			//网格样式
//			splitLine: {
//				show: true,
//				lineStyle: {
//					color: ['fff'],
//					type: 'dotted'
//				}
//			}

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '应力/MPa',
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

    myChart4.setOption(option4);
}

