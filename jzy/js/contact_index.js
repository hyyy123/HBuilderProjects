var http = "http://www.cabr-emc.com";
var id = 1;
var selectType = 1;
var nodeId = "";
var all = parseUrl();
var token = all["token"];
var area_id = all["area_id"];

//alert(token)
var colorPalette = [
	'#CA513A', '#1090E1', '#3ACA60', '#66B9D3', '#A5BACB',
	'#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
	'#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
	'#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
	'#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
];
//var myDate = new Date();

var $checkableTree; //选择树
var checkedNode = {};
checkedNode.El = new Array(); //电
checkedNode.Water = new Array(); //水
checkedNode.Hot = new Array(); //热
checkedNode.Cold = new Array(); //热

var optionList = new Array();
mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	//	console.log(token)

	if(plus.webview.currentWebview() != undefined) {
		newsId = self.newsId; //获取当前页面所属的id
		//     alert(newsId);//得到对应的id,在这里你可以看你点不同的li弹出的id是否相同
		id = newsId

	}
	if(id == undefined) {
		id = 1
	}

	mui.init();
	timeCon();
	selectType = id;
	initTreeView(0);
	initdatetrue();
	mui.init();
	getChartData();
	findkind();
	initTop(id);
	//详情列表
	mui('body').on('tap', '#morecon', function() {
		var nodeId = "";
		for(var i = 0; i < optionList.length; i++) {
			nodeId += optionList[i].nodeId + ",";
		}
		if(nodeId.length > 0) {
			nodeId = nodeId.substring(0, nodeId.length - 1);
		}
		mui.openWindow({
			url: "contact_list.html?token=" + token + "&area_id=" + area_id, //跳转的页面
			id: "contact_list.html",
			extras: {
				nodeId: nodeId, //自定义newsId,处理页面传值 
				selectType: selectType,
				start_date_time: getSelectedStartDateValue(),
				time_modal: $("#infotimeid").text()
			},
			styles: { //这个和页面传值没关系
				popGesture: 'close'
			}
		})
	});
	//清空 
	mui('body').on('tap', '.clear', function() {
		checkedNode.splice(0, checkedNode.length); //清空选项

		$checkableTree.treeview('uncheckAll', {
			silent: true
		});
//		$checkableTree.treeview('checkNode', [0]); //默认选择 
//
//		getChartData();
//		$("#treeview-checkable").addClass("hide");
	})

	//动画
	for(var i = 0; i < $(".counter").length; i++) {
		animateNumber($(".counter").eq(i), $(".counter").eq(i).html());
	}
});
//=========================时间=======================//
function timeCon() {
	$("#timemtimeSelectonth").text(new Date().format("yyyy/MM"))
	$("#timeDate").text(new Date().format("yyyy/MM/dd"))
	$("#timeyear").text(new Date().format("yyyy"))
	var icurtimeinfo = 0;
	var infotimename = ["日", "月", "年"];
	var infotimeid = ["1", "2", "3"];
	//	timekind();

	mobileSingleSelect("infotime", "#timeSelect", "#infotimetext", "请选择", infotimename, 0, function(indexArr, data) {
		//console.log(indexArr, data); 
		icurtimeinfo = indexArr
		$("#infotimeid").text(infotimeid[indexArr]) 
		timeClick(icurtimeinfo); 
	});
	var year = new Array;
	for(var i = new Date().format("yyyy"); i >=2010 ; i--) {
		year.push(i);
	}
	mobileSingleSelect("timeyear", "#timeyear", "#timeyear", "", year, 0, function(indexArr, data) {
		timeSubmit();
	});
}

function timeClick(type) {
	if(type == 0) {
		dtpicker("#timeDate", "date", function() {
			timeSubmit();
		}) 
	} else if(type == 1) {
		dtpicker("#timemonth", "month", function() {
			timeSubmit();
		}) 
	} else if(type == 2) {
		$("#timeyear").click();
	}
}

function timeSubmit() {
	//		getTopData();
	getChartData();
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
//选择模式 1 电  2水 
//获取当前模式下的选择树
//function getCheckedNode() {
//	if(selectType == 1) {
//		return checkedNode.El;
//	} else if(selectType == 2) {
//		return checkedNode.Water;
//	} else if(selectType == 3) {
//		return checkedNode.Hot;
//	} else if(selectType == 4) {
//		return checkedNode.Cold;
//	}
//}
var chartType=1;

//初始化顶部菜单
function initTop(id) {
	//console.log(id)
	var now = id - 1;
	//console.log(now)

var codeArray=["电","水","冷","热"]
var codeId=["1","2","3","4"]
	mobileSingleSelect("codeSelect", "#codeSelect", "#codeaname", "请选择类别", codeArray, now, function(indexArr, data) {
		selectType = codeId[indexArr];
		if(selectType == 1) {
			checkedNode = [{
				code: "1",
				name: "电"
			}];
		} else if(selectType == 2) {
			checkedNode = [{
				code: "2",
				name: "水"
			}];
		}
		initTreeView(1);
		getChartData();

	});
		jQuery(".nav li").removeClass("navlihover");
	jQuery(".nav li").eq(now).addClass("navlihover");
	//能耗总览分类变色 
	mui('body').on('tap', '#wrapper li', function() {
		jQuery("#wrapper li").removeClass("navlihover");
		jQuery(this).addClass("navlihover"); 
		chartType = jQuery(this).index() + 1; 

		getChartData();
	});

}
//初始化筛选树形(模拟数据下需依赖fixdata.js)
function initTreeView(way) { //way判断是否为首次进入
	if(selectType == 1) {
		changeData = defaultData.slice(0, 1);
	} else if(selectType == 2) {
		changeData = defaultData.slice(1, 2);
	} else if(selectType == 3) {
		changeData = defaultData.slice(2, 3);
	} else if(selectType == 4) {
		changeData = defaultData.slice(3, 4);
	}

	if(changeData[0].nodes == undefined) {
		jQuery("#find").addClass("hide");
	} else {
		jQuery("#find").removeClass("hide");
	}
	$checkableTree = jQuery('.main_kind').treeview({
		data: changeData,
		showCheckbox: true,
		onNodeChecked: function(event, node) {
			//			console.log(JSON.stringify(checkedNode))
			//			console.log(JSON.stringify(node))
			checkedNode = [];
			checkedNode.push(node);
			//			console.log(JSON.stringify(checkedNode))
			//单选
			$(this).treeview('uncheckAll', {
				silent: true
			});
			$(this).treeview('checkNode', [node.nodeId, {
				silent: true
			}]);
		},
		onNodeUnchecked: function(event, node) {
			checkedNode = [];
		}
	});

	$checkableTree.treeview('checkNode', [0]); //默认选择 
}

function initdatetrue() {
	mui('body').on('tap', '#treeview-checkable .yes', function() {
		//		getTopData();
		getChartData();
		jQuery("#treeview-checkable").addClass("hide");
	});
}

//获取图表数据
function getChartData() {
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
	if(checkedNode==""){  
		$checkableTree.treeview('checkNode', [0]); //默认选择 
	}
	//  alert(1)
	var option = {};
	option.device_id = "";
	option.area_id = area_id;
	option.type = $("#infotimeid").text(); //电
	option.start_date_time = getSelectedStartDateValue();;
	optionList = checkedNode;
	//	console.log(optionList)
	option.loading = "#main1";
	//console.log(optionList)
	for(var i = 0; i < optionList.length; i++) {
		option.device_id += optionList[i].code + ",";
	}

	if(option.device_id.length > 0) {
		option.device_id = option.device_id.substring(0, option.device_id.length - 1);
	}
	// console.log(JSON.stringify(option)) 
	// console.log(token) 
	mui.ajax(http + '/tools/Statistics.ashx', {
		data: {
			action: 'get_analysis_data',
			type: option.type,
			area_id: option.area_id,
			code: option.device_id,
			date: option.start_date_time,
			token: token
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//			console.log(JSON.stringify(data))
			//			//获得服务器响应 
			if(selectType == 1) {
				var name = "电";
				var unit = "kWh";
			} else if(selectType == 2) {
				var name = "水";
				var unit = "m³";
			} else if(selectType == 3) {
				var name = "冷";
				var unit = "kWh";
			} else if(selectType == 4) {
				var name = "热";
				var unit = "kWh";

			}
			var time_modal = $("#infotimeid").text();
			if(time_modal == 1) {
				var str = "日"
			} else if(time_modal == 2) {
				var str = "月"
			}
			if(time_modal == 3) {
				var str = "年"
			}
			var item = data.data;
			var msg = data.msg;

			overTime(msg);
			if(msg > 0) {
				nwaiting.close();
				 
				var xLine = item.x; //X轴  
				var chartData = [{
						                      device_name: "本" + str + "耗" + name + "量",
//						device_name: "本月耗电量",
						                      unit: unit,
//						unit: "kwh",
						type: 'bar',
						yAxisIndex: 0,
						data: item.now
						//                      data:["1","10","100","24","46","67","56","4","78","89","98","67","23","100","24","46","67","56","4","78","89","98","67","23"]
					},
					{
//						device_name: "上月耗电量",

						device_name: "上" + str + "耗" + name + "量",
						                      unit: unit,
//						unit: "kwh",
						type: 'bar',
						yAxisIndex: 0,
						data: item.last

						//                      data:["1","10","100","24","46","67","56","4","78","89","98","67","23","100","24","46","67","56","4","78","89","98","67","23"]
					},
					{
						device_name: "同比增长率(%)",
						unit: "%",
						type: 'line',
						yAxisIndex: 1,
						data: item.same

						//                      data:["1","10","100","24","46","67","56","4","78","89","98","67","23","100","24","46","67","56","4","78","89","98","67","23"]
					},
					{
						device_name: "环比增长率(%)",
						unit: "%",
						type: 'line',
						yAxisIndex: 1,
						data: item.circle
						//                      data:["1","10","100","24","46","67","56","4","78","89","98","67","23","100","24","46","67","56","4","78","89","98","67","23"]
					}
				]
				var typechartData=new Array;
				if(chartType==1){
					typechartData.push(chartData[0]);
					typechartData.push(chartData[1]);
					typechartData.push(chartData[2]);
				}else if(chartType==2){
					typechartData.push(chartData[0]);
					typechartData.push(chartData[1]);
					typechartData.push(chartData[3]);
				}

				setChartsView("main1", typechartData, xLine)

			}
			//
		}
	});

}
//创建图表初始化
function setChartsView(main, chartData, xLine) {
	//console.log(xLine)
	// 基于准备好的dom，初始化echarts实例
	var myChart3 = echarts.init(document.getElementById(main), 'macarons');
	// 指定图表的配置项和数据
	var option3 = {

		tooltip: {
			show: true, // 是否显示提示框组件 
			trigger: "axis", //坐标轴触发，用在柱状图，折线图等会使用类目轴的图表中使用 
			formatter: function(param) {
				var showhtml = "";
				showhtml += "<p style='padding:0px 5px;margin:0;color:#000;'>" + getSelectedStartDateValue() + " </p>";
				showhtml += "<p style='padding:0px 5px;color:#000;'>" + param[0].name + " </p>";
				for(var i = chartData.length - 1; i >= 0; i--) {
					showhtml += "<p style='padding:0px 5px;color:#000;font-size:14px;width:100%;'><span style='display:inline-block;text-align:left;min-width:100px;'><i style= 'background-color:" + colorPalette[i] + ";width:10px;height:10px;display:inline-block;margin-right:5px;'></i>" + chartData[i].device_name + '</span> : ' + "<span style='display:inline-block;color:#EB8E06;min-width:50px;text-align:right;' >" + param[i].value + "&nbsp" + chartData[i].unit + "</span>" + " </p>"
				}
				return showhtml;
			},
			position: ['20%', '-5%'],
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
			top: -10,
			right: 10
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: true,
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

		}],
		yAxis: [

			{
				type: 'value',
				min: 0,
				name: '单位:kwh',
				nameGap: 25,
				axisLabel: {
					formatter: '{value} ',
				},
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
			{
				type: 'value',
				name: '单位:%',
				nameGap: 25,
				//interval: 50,//调间隔
				axisLabel: {
					formatter: '{value}% '
				},
				//设置轴线的属性
				axisLine: {
					lineStyle: {
						color: '#fff',
					}
				},
				//网格样式
							splitLine: {
								show: false,
								lineStyle: {
									color: ['fff'],
									type: 'dotted'
								}
							}
			}
		],
		grid: {
			left: '3%',
			right: '4%',
			containLabel: true,
		},
		series: function() {
			var seriesitem = [];
			for(var i = 0; i < chartData.length; i++) {
				var item = {
					name: chartData[i].device_name,
					type: chartData[i].type,
					yAxisIndex: chartData[i].yAxisIndex,
					data: chartData[i].data,
					itemStyle: {
						normal: {
							lineStyle: {
								width: 3, //折线宽度 
							}
						}
					},
				};
				seriesitem.push(item);

			}
			return seriesitem
		}(),

		legend: {
			data: function() {
				var legendname = new Array;
				for(var i = 0; i < chartData.length; i++) {
					legendname.push(chartData[i].device_name);
				}
				return legendname
			}(),
			bottom: 10,
			textStyle: {
				color: '#fff',
				fontSize: 12,

			}
		},
		title: [{
			left: 'center',
			text: function() {
				if(selectType == 1) {
					var titlename = "电";
				} else if(selectType == 2) {
					var titlename = "水";
				} else if(selectType == 3) {
					var titlename = "冷";
				} else if(selectType == 4) {
					var titlename = "热";
				}
				//              var title = getSelectedStartDateValue() + "  " + checkedNode[0].text + "能耗分析"
				var title = getSelectedStartDateValue() + "  " + titlename + "能耗分析"

				return title;
			}(),
			top: -5,
			textStyle: {
				//width: "100%",
				color: '#fff',
				fontSize: 14,
				fontWeight: 'bold',
			},
		}]

	};
	myChart3.setOption(option3);
}