var $checkableTree; //选择树
var checkedNode = {};
checkedNode.El = new Array(); //电
checkedNode.Water = new Array(); //水
checkedNode.Hot = new Array(); //热
checkedNode.Cold = new Array(); //冷
var nodeId = "";
var selectType = "";
var start_date_time = "";
var end_date_time = "";
var time_modal = "";
var all = parseUrl();
var token = all["token"];
var area_id = all["area_id"];
var http = "http://www.cabr-emc.com";
mui.plusReady(function() {

	var self = plus.webview.currentWebview();
	if(plus.webview.currentWebview() != undefined) {
		nodeId = self.nodeId; //获取当前页面所属的id  
		selectType = self.selectType;
		start_date_time = self.start_date_time;
		time_modal = self.time_modal;
		//				alert(nodeId); //得到对应的id,在这里你可以看你点不同的li弹出的id是否相同 
		//		alert(selectType);
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
	}

	mui.init();

	initTreeView();
	getChartData();

});
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

function initTreeView() {
	//	console.log(JSON.stringify(defaultData))
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

	//				alert(getCheckedNode())
}
//获取图表数据
function getChartData() {
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
	//  alert(1)
	var option = {};
	option.device_id = "";
	option.area_id = area_id;
	option.type = time_modal;
	option.start_date_time = start_date_time;
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
//	console.log(JSON.stringify(option))
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
			////			console.log(JSON.stringify(data))
			if(msg > 0) {
				nwaiting.close();
				 
				var xLine = item.x; //X轴 
				var chartData = [{
						device_name: "本" + str + "耗" + name + "量",
						//                      device_name: "本月耗电量",
						                      unit: unit,
//						unit: "kwh",
						type: 'bar',
						yAxisIndex: 0,
						data: item.now
						//                      data:["1","10","100","24","46","67","56","4","78","89","98","67","23","100","24","46","67","56","4","78","89","98","67","23"]
					},
					{
						device_name: "上" + str + "耗" + name + "量",
						//                      device_name: "上月耗电量",
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

				setDataView(chartData, optionList, xLine)
			}
			//
		}
	});

}

function setDataView(chartData, optionList, xLine) {
//	console.log(JSON.stringify(chartData));

	var theadhtml = "";
	var tbodyhtml = "";
	//表格头部

	jQuery("#item_thead").children().remove();
	jQuery("#item_list").children().remove();
	theadhtml += "<tr>";
	theadhtml += "<td  class='fontsize12'>时间</td>";

	for(var i = 0; i < chartData.length; i++) {
		theadhtml += "<td class='fontsize12'>" + chartData[i].device_name +"("+ chartData[i].unit + ")</td>";
	}

	theadhtml += "</tr>";
	jQuery("#item_thead").append(theadhtml);

	//内容
	for(var i = 0; i < xLine.length; i++) {
		tbodyhtml += '<tr>';
		tbodyhtml += '<td><p class="num  fontfamily fontsize14">' + xLine[i] + '</p></td>';
		for(var j = 0; j < chartData.length; j++) {
			var valueList = chartData[j].data;
			var val = valueList[i];

			tbodyhtml += '<td class="counter fontfamily fontsize14">' + val + '</td>';

		}
		tbodyhtml += '</tr>';

	}
	jQuery("#item_list").append(tbodyhtml)
	jQuery('#item_list').fadeIn(300);
	//动画
	for(var i = 0; i < $(".counter").length; i++) {
		animateNumber($(".counter").eq(i), $(".counter").eq(i).html());
	}

}