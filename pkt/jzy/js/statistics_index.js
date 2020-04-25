var id = 1;
var selectType = 1;
var nodeId = "";
var all=parseUrl();
var token= all["token"];
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
	if(plus.webview.currentWebview() != undefined) {
		newsId = self.newsId; //获取当前页面所属的id
		//     alert(newsId);//得到对应的id,在这里你可以看你点不同的li弹出的id是否相同
		id = newsId

	}
	if(id == undefined) {
		id = 1
	}
	selectType = id;
	initTreeView(0);
	initdatetrue();
	mui.init();
	getChartData();
	getTopData();
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
			url: "index_list.html?token="+token, //跳转的页面
			id: "index_list.html",
			extras: {
				nodeId: nodeId, //自定义newsId,处理页面传值
				selectType: selectType
			},
			styles: { //这个和页面传值没关系
				popGesture: 'close'
			}
		})
	});
	//清空 
	mui('body').on('tap', '.clear', function() {
		var checkedNode = getCheckedNode();
		checkedNode.splice(0, checkedNode.length); //清空选项

		$checkableTree.treeview('uncheckAll', {
			silent: true
		});
		$checkableTree.treeview('checkNode', [0]); //默认选择 

		getChartData();
		$("#treeview-checkable").addClass("hide");
	})

	//动画
	for(var i = 0; i < $(".counter").length; i++) {
		animateNumber($(".counter").eq(i), $(".counter").eq(i).html());
	}
});
//选择模式 1 电  2水 
//获取当前模式下的选择树
function getCheckedNode() {
	if(selectType == 1) {
		return checkedNode.El;
	} else if(selectType == 2) {
		return checkedNode.Water;
	} else if(selectType == 3) {
		return checkedNode.Hot;
	} else if(selectType == 4) {
		return checkedNode.Cold;
	}
}
//初始化顶部菜单
function initTop(id) {
	//console.log(id)
	var now = id - 1;
	//console.log(now)
	jQuery(".nav li").removeClass("navlihover");
	jQuery(".nav li").eq(now).addClass("navlihover");

	//能耗总览分类变色 
	mui('body').on('tap', '#wrapper li', function() {
		jQuery("#wrapper li").removeClass("navlihover");
		jQuery(this).addClass("navlihover");

		selectType = jQuery(this).index() + 1;
		getCheckedNode();
		initTreeView(1);
		getTopData();
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

	var checkedNode = getCheckedNode();
	checkedNode.splice(0, checkedNode.length); //清空选项

	if(changeData[0].nodes == undefined) {
		jQuery("#find").addClass("hide");
	} else {
		jQuery("#find").removeClass("hide");
	}
	$checkableTree = jQuery('.main_kind').treeview({
		data: changeData,
		showCheckbox: true,
		onNodeChecked: function(event, node) {
			//console.log(node.nodeId)
			//console.log(getCheckedNode())

			getCheckedNode().push(node);
		},
		onNodeUnchecked: function(event, node) {
			var currentCheckedNode = getCheckedNode();
			var index = -1;
			for(var i = 0; i < currentCheckedNode.length; i++) {
				if(currentCheckedNode[i].code == node.code) {
					index = i;
					break;
				}
			}
			currentCheckedNode.splice(index, 1);
		}
	});

	if(selectType == 1) {
		$checkableTree.treeview('checkNode', [0]); //默认选择 
		$checkableTree.treeview('checkNode', [1]); //默认选择 
		$checkableTree.treeview('checkNode', [12]); //默认选择 
		$checkableTree.treeview('checkNode', [44]); //默认选择 
		$checkableTree.treeview('checkNode', [66]); //默认选择 
		$checkableTree.treeview('checkNode', [70]); //默认选择 

	} else {
		$checkableTree.treeview('checkNode', [0]); //默认选择
	} 
}

function initdatetrue() {
	mui('body').on('tap', '#treeview-checkable .yes', function() {
		getTopData();
		getChartData();
		jQuery("#treeview-checkable").addClass("hide");
	});
}

//获取顶部数据
function getTopData() {
	var nowstr, todaystr, unit;
	jQuery(".data .fontfamily").html("");
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
					if(item.code == selectType) {
						if(selectType == 1) {
							nowstr = "今日耗电量";
							todaystr = "预计全天耗电量";
							unit = "kwh";
						} else if(selectType == 2) {
							nowstr = "今日耗水量";
							todaystr = "预计全天耗水量";
							unit = "m³";
						} else if(selectType == 3) {
							nowstr = "今日集中供冷量";
							todaystr = "预计全天集中供冷量";
							unit = "kwh";
						} else if(selectType == 4) {
							nowstr = "今日集中供热量";
							todaystr = "预计全天集中供热量";
							unit = "kwh";
						}

						//电
						$(".now .fontfamily").html(item.now_day);
						$(".now .colorgray").html(nowstr);
						$(".danwei").html(unit);
						$(".today .fontfamily").html(item.last_day);
						$(".today .colorgray").html(todaystr);
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

//获取图表数据
function getChartData() {
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
	//  alert(1)
	var option = {};
	option.sort = 1;
	option.device_id = "";
	option.area_id = 1;
	option.type = selectType; //电
	option.start_date_time = new Date().format("yyyy/MM/dd");
	option.end_date_time = new Date().format("yyyy/MM/dd");
	optionList = getCheckedNode();
	//console.log(optionList)
	option.loading = "#main1";
	//console.log(optionList)
	for(var i = 0; i < optionList.length; i++) {
		option.device_id += optionList[i].code + ",";
	}

	if(option.device_id.length > 0) {
		option.device_id = option.device_id.substring(0, option.device_id.length - 1);
	}

	var http = "http://www.iwesong.com:8056";
	mui.ajax(http + '/tools/EcmDataDay.ashx', {
		data: {
			action: 'get_data_chart_by_day',
			sort: option.sort,
			type: option.type,
			area_id: option.area_id,
			codes: option.device_id,
			start_date_time: option.start_date_time,
			end_date_time: option.end_date_time,
			token:token
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//获得服务器响应 

			var item = data.data;
			var msg = data.msg;
			//			alert(JSON.stringify(item))
			if(msg > 0) {
				nwaiting.close();
				var xLine = item.x; //X轴
				var chartData = []; //图表数据

				//console.log("optionList", optionList);
				for(var i = 0; i < optionList.length; i++) {

					var code = optionList[i].code;
					//					alert(item[code]) 
					var chartItem = {
						name: optionList[i].text,
						type: 'line',
						barMaxWidth: 30,
						smooth: 0.5,
						data: item[code]
					};
					//					alert(JSON.stringify(chartItem));
					chartData.push(chartItem);
				};
				setChartsView('main1', optionList, chartData, xLine); //调用

			}

		}
	});

}

//创建图表初始化
function setChartsView(main, optionList, chartData, xLine) {
	//	alert(1)
	//console.log(main);
	//console.log(optionList);
	//console.log(chartData);
	//console.log(xLine);

	// 基于准备好的dom，初始化echarts实例 
	var myChart3 = echarts.init(document.getElementById(main), 'macarons');

	var option3 = {
		tooltip: {
			show: false, // 是否显示提示框组件 
			trigger: "axis", //坐标轴触发，用在柱状图，折线图等会使用类目轴的图表中使用 
			formatter: function(param) {
				//console.log(param);
				var htmljson = new Array;
				var showhtml = "";
				//if (getSelectedDateType() == 1) {
				showhtml += "<p class='text-left' style='padding:0px 5px;margin:0;color:#000;'>" + new Date().format("yyyy/MM/dd") + " </p>";
				//}
				showhtml += "<p class='text-left' style='padding:0px 5px;color:#000;'>" + param[0].name + " </p>";

				for(var i = optionList.length - 1; i >= 0; i--) {
					var nowhtml = "<p style='padding:0px 5px;color:#000;font-size:14px;width:100%;'><span style='display:inline-block;text-align:left;min-width:100px;float:left;'><i style= 'background-color:" + colorPalette[i] + ";width:10px;height:10px;display:inline-block;margin-right:5px;'></i>" + optionList[i].text + '</span> : ' + "<span style='display:inline-block;color:#EB8E06;min-width:50px;text-align:right;' >" + (param[i].value + "&nbsp" + jQuery(".danwei").html()) + "</span>" + " </p>"
					var htmlsignal = {
						value: param[i].value,
						html: nowhtml
					};
					htmljson.push(htmlsignal)
				}

				return sortJsonHtml(htmljson, showhtml);

			},
			position: ['20%', '50%'],
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
			name: '单位:' + jQuery(".danwei").html(),
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