var $checkableTree; //选择树
var checkedNode = {};
checkedNode.El = new Array(); //电
checkedNode.Water = new Array(); //水
checkedNode.Hot = new Array(); //热
checkedNode.Cold = new Array(); //冷
var nodeId = "";
var selectType = "";
var all=parseUrl();
var token= all["token"];
mui.plusReady(function() {

	var self = plus.webview.currentWebview();
	if(plus.webview.currentWebview() != undefined) {
		nodeId = self.nodeId; //获取当前页面所属的id
		selectType = self.selectType;
//				alert(nodeId); //得到对应的id,在这里你可以看你点不同的li弹出的id是否相同 
		//		alert(selectType);
	}

	mui.init();

	initTreeView();
	getChartData();

});
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

function initTreeView() {
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

	$checkableTree = jQuery('.main_kind').treeview({
		data: changeData,
		showCheckbox: true,
		onNodeChecked: function(event, node) {
//			alert(node.nodeId); 
			getCheckedNode().push(node);
			console.log(node.nodeId)
			console.log(getCheckedNode())
		},
	});
	var re = /[，,]/g; 
	if(re.test(nodeId)) {
		var nodearrey = nodeId.split(",") 
		for(var i = 0; i < nodearrey.length; i++) { 
			
			$checkableTree.treeview('checkNode', [parseInt(nodearrey[i])]); //默认选择 
		}
	} else {
		var nodearrey = nodeId;
		$checkableTree.treeview('checkNode', [parseInt(nodearrey)]); //默认选择 
	}

//				alert(getCheckedNode())
}
//获取图表数据
function getChartData() {

	var optionList = new Array();
	var option = {};
	option.sort = 1;
	option.device_id = "";
	option.area_id = 1;
	option.type = selectType; //电
	option.start_date_time = new Date().format("yyyy/MM/dd");
	option.end_date_time = new Date().format("yyyy/MM/dd");
	optionList = getCheckedNode();

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
			loading: option.loading,
			token:token
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//获得服务器响应  

			var item = data.data;
			var msg = data.msg;
//						alert(JSON.stringify(item))
			if(msg > 0) {
				var xLine = item.x; //X轴
				var chartData = []; //图表数据

				//console.log("optionList", optionList);
				for(var i = 0; i < optionList.length; i++) {

					var code = optionList[i].code;
//										alert(item[code]) 
					var chartItem = {
						name: optionList[i].text,
						type: 'line',
						barMaxWidth: 30,
						smooth: 0.5,
						data: item[code]
					};
//										alert(JSON.stringify(chartItem));
					chartData.push(chartItem);
				};
				setDataView(optionList, chartData, xLine) //调用

			}

		}
	});
}

function setDataView(optionList, chartData, xLine) {
	//console.log(chartData);

	var theadhtml = "";
	var tbodyhtml = "";
	//表格头部

	jQuery("#item_thead").children().remove();
	jQuery("#item_list").children().remove();
	theadhtml += "<tr>";
	theadhtml += "<td  class='fontsize12'>时间</td>";

	for(var i = 0; i < chartData.length; i++) {
		theadhtml += "<td class='fontsize12'>" + chartData[i].name + "</td>";
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