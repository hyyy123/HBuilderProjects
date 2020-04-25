//alert(token)
var colorPalette = [
	'#CA513A', '#1090E1', '#3ACA60', '#66B9D3', '#A5BACB',
	'#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
	'#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
	'#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
	'#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
];
var all = parseUrl();
var token = all["token"];
var area_id = all["area_id"];
mui.plusReady(function() {
	token = getSelfToken();
	timeCon();
	//树形
	findkind();
	initTreeView();
	initdatetrue();
	initSelect();
	//清空 
	mui('body').on('tap', '.clear', function() {
		var checkedNode = locationstr;
		checkedNode.splice(0, checkedNode.length); //清空选项

		$checkableTree.treeview('uncheckAll', {
			silent: true
		}); 
	})
	mui('body').on('tap', '#morecon', function() {
		var codes = "";
		if(sendcodes == 8) {
			for(var i = 0; i < locationstr.length; i++) {
				codes += sendcodes + "$" + locationstr[i].code.split("-")[1] + ",";
			}
		} else {
			for(var i = 0; i < locationstr.length; i++) {
				codes += sendcodes + "-" + locationstr[i].code.split("-")[1] + ",";
			}

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
				type: $("#info_id").text(),
				param: $("#infoparam_id").text()
			},
			styles: { //这个和页面传值没关系
				popGesture: 'close'
			}
		})
	});
	//数据
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
	for(var i = new Date().format("yyyy"); i >= 2010; i--) {
		year.push(i);
	}
	mobileSingleSelect("timeyear", "#timeyear", "#timeyear", "", year, 0, function(indexArr, data) {
		getData();
	});
}

function timeClick(type) {
	if(type == 0) {
		dtpicker("#timeDate", "date", function() {
			getData();
		})
	} else if(type == 1) {
		dtpicker("#timemonth", "month", function() {
			getData();
		})
	} else if(type == 2) {
		$("#timeyear").click();
	}
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
		return $("#timemonth").text();
	} else if(dateType == "3") {
		return $("#timeyear").text();
	}
}
//=========================时间=======================//
// 多选

var icurinfoparam = 0;
var infoparamname;
var infoparamid;
var infoparam;

function initSelect() {
	//	alert(1);
	//类型
	var icurequip = 0;
	var infoname = ["室内空气指数", "热湿环境"];
	var infoid = ["0", "1"];
	mobileSingleSelect("infotype", "#infotype", "#infotypetext", "请选择", infoname, 0, function(indexArr, data) {
		//console.log(indexArr, data); 
		icurequip = indexArr
		$("#info_id").text(infoid[indexArr])
		initCode(infoid[indexArr])
	});
	//设备名称

	infoparamname = ["PM2.5", "CO2"];
	infoparamid = ["0", "1"];
	mobileSingleSelect("infoparam", "#infoparam", "#infoparamtext", "请选择", infoparamname, 0, function(indexArr, data) {
		//console.log(indexArr, data); 
		icurinfoparam = indexArr;
		$("#infoparam_id").text(infoparamid[indexArr]);

		getData();
	});
	initCode(0)
}

//*********************************************检测内容选择**************************//
var codearray = [{
		name: "室内空气指数",
		value: 0,
		son: [{
			name: "PM2.5",
			value: 0,
		}, {
			name: "CO2",
			value: 1,
		}]
	},
	{
		name: "热湿环境",
		value: 1,
		son: [{
			name: "温度",
			value: 0,
		}, {
			name: "湿度",
			value: 1,
		}]
	}
];

var sendcodes = "8";

function initCode(param) {
	if(param == 0) {
		sendcodes = "8";
	} else {
		sendcodes = "5";
	}
	//  $("#selectcode").children().remove();
	for(var i = 0; i < codearray.length; i++) {
		if(param == codearray[i].value) {
			infoparamname = new Array;
			infoparamid = new Array;
			icurinfoparam = 0
			for(var j = 0; j < codearray[i].son.length; j++) {
				//              $("#selectcode").append('<option value="' + codearray[i].son[j].value + '">' + codearray[i].son[j].name + '</option>')
				infoparamname.push(codearray[i].son[j].name)
				infoparamid.push(codearray[i].son[j].value);
				$("#infoparamtext").text(codearray[i].son[0].name)

			}
			infoparam.updateWheel(0, infoparamname);
			infoparam.locatePosition(0, 0);
		}
	}

	initTreeView();
	getData();
}

//*********************************************检测内容选择**************************//
//*********************************************数据展示**************************//
function codegetname(code) {
	var codenum;
	if(sendcodes == 8) {
		codenum = code.split("$")[1];
	} else {
		codenum = code.split("-")[1];
	}

	for(var i = 0; i < locationstr.length; i++) {
		if(codenum == locationstr[i].code.split("-")[1]) {
			return locationstr[i].text
		}
	}
}

var nodeId;

function getData() {
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
	if(locationstr == "") {
		$checkableTree.treeview('checkNode', [0]); //默认选择 
	}
	$("#main1").children().remove();
	var name = $("#infoparamtext").text();
	//  $("#codename").html(name);
	var danwei;
	if(name == "PM2.5") {
		danwei = "ug/m³";
	} else if(name == "CO2") {
		danwei = "ppm";
	} else if(name == "温度") {
		danwei = "℃";
	} else if(name == "湿度") {
		danwei = "%RH";
	}
	$(".danwei").html(danwei);
	nodeId = "";
	for(var i = 0; i < locationstr.length; i++) {
		nodeId += locationstr[i].nodeId + ",";
	}
	if(nodeId.length > 0) {
		nodeId = nodeId.substring(0, nodeId.length - 1);
	}

	var codes = "";
	if(sendcodes == 8) {
		for(var i = 0; i < locationstr.length; i++) {
			codes += sendcodes + "$" + locationstr[i].code.split("-")[1] + ",";
		}
	} else {
		for(var i = 0; i < locationstr.length; i++) {
			codes += sendcodes + "-" + locationstr[i].code.split("-")[1] + ",";
		}

	}
	if(codes.length > 0) {
		codes = codes.substring(0, codes.length - 1);
	}

	var option = {};
	option.sort = 4;
	option.type = 1;
	option.area_id = 1;
	option.codes = codes;
	option.start_date_time = getSelectedStartDateValue();
	option.end_date_time = getSelectedEndDateValue();
	option.loading = false;
	//	console.log(JSON.stringify(option))
	getMonitorData(option, function(data) {
		var item = data.data;
		var msg = data.msg;
		overTime(msg);
		if(msg > 0) {
			nwaiting.close();

			//			console.log(JSON.stringify(item));
			var xLine = item.x; //X轴
			var chartData = []; //图表数据
			//console.log($("#selectcode").find("option:selected"))
			//console.log(name);
			var dataList = item.dataList;
			var chartItem;
			for(var i = 0; i < dataList.length; i++) {
				var code = dataList[i].code;
				var list = dataList[i].list;
				for(var j = 0; j < list.length; j++) {
					//console.log(list[j].name == name); 
					if(list[j].name == name) {
						chartItem = {
							code: code,
							text: codegetname(code),
							name: list[j].name,
							type: 'line',
							itemStyle: {
								normal: {
									color: colorPalette[i],
									lineStyle: {
										color: colorPalette[i]
									}
								}
							},
							smooth: 0.5,
							data: list[j].data
						};
					}
				}
				chartData.push(chartItem);
			};
			//			console.log(JSON.stringify(chartData))
			//			console.log(JSON.stringify(xLine))
			setChartsView('main1', chartData, xLine); //调用 
		}

	})
}

//创建图表初始化
function setChartsView(main, chartData, xLine) {

	// 基于准备好的dom，初始化echarts实例
	var myChart3 = echarts.init(document.getElementById(main), 'macarons');

	var option3 = {

		tooltip: {
			show: true, // 是否显示提示框组件 
			trigger: "axis", //坐标轴触发，用在柱状图，折线图等会使用类目轴的图表中使用  
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
			top: 20,
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
			}

		}],
		yAxis: [{
			type: 'value',
			//			name: name+' 实时数据 ' + danwei,
			//			nameGap: 25,
			//			boundaryGap: ['20%', '20%'],
			//			nameLocation:'end',
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
		}],
		grid: {
			left: '5%',
			right: '4%',
			containLabel: true,
		},
		series: chartData,
		title: [{
			left: 'center',
			text: function() {
				var name = $("#infoparamtext").text();
				//  $("#codename").html(name);
				var danwei;
				if(name == "PM2.5") {
					danwei = "ug/m³";
				} else if(name == "CO2") {
					danwei = "ppm";
				} else if(name == "温度") {
					danwei = "℃";
				} else if(name == "湿度") {
					danwei = "%RH";
				}
				//              var title = getSelectedStartDateValue() + "  " + checkedNode[0].text + "能耗分析"
				var title = name + ' 实时数据 ' + danwei

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

//*********************************************检测内容选择**************************//

//*********************************************树形筛选**************************//
var locationstr = new Array;
var $checkableTree;
var envirLocData = envirLocData1;

function initTreeView() {
	if(sendcodes == 8) {
		envirLocData = envirLocData1;
	} else {
		envirLocData = envirLocData2;
	}
	locationstr = new Array;
	//console.log(envirLocData)
	$checkableTree = $('.main_kind').treeview({
		data: envirLocData,
		showCheckbox: true,
		onNodeChecked: function(event, node) {
			locationstr.push(node);
			//console.log(locationstr)
		},
		onNodeUnchecked: function(event, node) {
			var currentCheckedNode = locationstr;
			var index = -1;
			for(var i = 0; i < currentCheckedNode.length; i++) {
				if(currentCheckedNode[i].code == node.code) {
					index = i;
					break;
				}
			}
			currentCheckedNode.splice(index, 1);
			//console.log(locationstr)
		}
	});

	$checkableTree.treeview('checkNode', [0]); //默认选择 
}

function allcheck() {
	$checkableTree.treeview('checkAll', {
		silent: true
	});
	locationstr = $checkableTree.treeview("getChecked")
}

function initdatetrue() {

	$("#treeview-checkable .yes").click(function() {
		if(locationstr.length == 0) {
			$checkableTree.treeview('checkNode', [0]); //默认选择 
		}
		//console.log(locationstr)
		$("#treeview-checkable").addClass("hide");
		getData();
	});
	$("#treeview-checkable .no").click(function() {
		$("#treeview-checkable").addClass("hide");
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
		getData();
	});
}
//*********************************************树形筛选**************************//