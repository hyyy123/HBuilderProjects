var codes = "";
var start_date_time = new Date().format("yyyy/MM/dd");
var end_date_time = new Date().format("yyyy/MM/dd");
var type = 0;
var typeparam = 0;
var codes = "8$1";
var all = parseUrl();
var token;
var area_id = all["area_id"];
mui.plusReady(function() {
	token = getSelfToken();
	var self = plus.webview.currentWebview();
	if(plus.webview.currentWebview() != undefined) {
		//		console.log(1)
		codes = self.codes; //获取当前页面所属的id 
		start_date_time = self.start_date_time;
		end_date_time = self.end_date_time;
		type = self.type;
		typeparam = self.param;
	}
		//清空 
	mui('body').on('tap', '.clear', function() {
		var checkedNode = getCheckedNode();
		checkedNode.splice(0, checkedNode.length); //清空选项

		$checkableTree.treeview('uncheckAll', {
			silent: true
		});
//		$checkableTree.treeview('checkNode', [0]); //默认选择 

//		getChartData();
//		$("#treeview-checkable").addClass("hide");
	})
	//	console.log(JSON.stringify(self))
	// 	  console.log(token)
	initSelect();
});
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
		codes = "";
		initCode(indexArr);
	});
	//设备名称

	infoparamname = ["PM2.5", "CO2"];
	infoparamid = ["0", "1"];
	mobileSingleSelect("infoparam", "#infoparam", "#infoparamtext", "请选择", infoparamname, 0, function(indexArr, data) {
		//console.log(indexArr, data); 
		//				icurinfoparam = indexArr;
		$("#infoparam_id").text(infoparamid[indexArr]);

		getData();
	});

	$("#info_id").text(type)
	$("#infotypetext").text(infoname[type]);
	initCode(type)
	$("#infoparam_id").text(typeparam)
	$("#infoparamtext").text(infoparamname[typeparam])
	infoparam.locatePosition(0, typeparam);
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
				$("#infoparam_id").text(codearray[i].son[0].value)
				$("#infoparamtext").text(codearray[i].son[0].name)

			}
			infoparam.updateWheel(0, infoparamname);
			infoparam.locatePosition(0, 0);

		}
	}

	initTreeView();
	getData();
}

function codegetname(code) {
	var codenum;
	if(sendcodes == 8) {
		codenum = code.split("$")[1];
	} else {
		codenum = code.split("-")[1];
	}

	for(var i = 0; i < envirLocData.length; i++) {
		if(codenum == envirLocData[i].code.split("-")[1]) {
			return envirLocData[i].text;
		}
	}
}

function getData() {
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
	if($.cookie("specialist") != undefined) {
		p = $.cookie("specialist");
	}
	$("thead").children().remove();
	$("#item_list").children().remove();

	if(codes == "" || codes == undefined) {
		if(sendcodes == 8) {
			codes = "8$1";
		} else {
			codes = "5-1";
		}
	}
	if(start_date_time == undefined || start_date_time == "") {
		start_date_time = new Date().format("yyyy/MM/dd");
	}
	if(end_date_time == undefined || end_date_time == "") {
		end_date_time = new Date().format("yyyy/MM/dd");
	}
	var option = {};
	option.time_num = 1;
	option.type = 1;
	option.area_id = area_id;
	option.codes = codes;
	option.start_date_time = start_date_time;
	option.end_date_time = end_date_time;;
	option.p = 1;
	option.ps = 1000;
	option.loading = false;
	console.log(JSON.stringify(option));
	getEnvirData(option, function(data) {

		//        console.log(JSON.stringify(data))
		var item = data.data;
		var msg = data.msg;
		count = item.count;
				overTime(msg);
		if(msg > 0) {
				nwaiting.close();
				
			itemList = item.dataList;
			if(itemList == "") {
				//var len = $("thead tr").children().length;
				$("#item_list").append('<tr><td>暂无记录</td></tr>');
			} else {
				getList();
			}
		}
	})
}

//*********************************************检测内容选择**************************//

var bodyjson = {
	name: "1层",
	time: "2018/12/12 00:05",
	param: "1"
}
function unit(name){
	var unita="";
	if(name=="PM2.5"){
		unita="ug/m<sup>3</sup>"
	}else if(name=="CO2"){
		unita="ppm"
	}else if(name=="温度"){
		unita="℃"
	}else if(name=="湿度"){
		unita="%"
	}
return unita	
}

function getList() {
	var head = "";
	head += "<tr>";
	head += "<td>位置</td>";
	head += "<td>时间</td>"; 
	if($("#infoparamtext").text() == itemList[0].name1) {
		head += '<td>' + itemList[0].name1 +"("+ unit(itemList[0].name1)+')</td>'
	}
	if($("#infoparamtext").text() == itemList[0].name2) {
		head += '<td>' + itemList[0].name2 +"("+ unit(itemList[0].name2)+')</td>'
	}
	head += "</tr>";
	$("#item_thead").append(head);

	for(var i = 0; i < itemList.length; i++) {
		var html = '<tr>';
		html += '<td><p class="num">' + codegetname(itemList[i].code) + '</p></td>';
		html += '<td><p class="num">' + itemList[i].time + '</p></td>';
		if($("#infoparamtext").text() == itemList[i].name1) {
			html += '<td><p class="num counter">' + itemList[i].d1 + '</p></td>';
		}
		if($("#infoparamtext").text() == itemList[i].name2) {
			html += '<td><p class="num counter">' + itemList[i].d2 + '</p></td>';
		}
		html += '</tr>';
		$("#item_list").append(html);
	}

}

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