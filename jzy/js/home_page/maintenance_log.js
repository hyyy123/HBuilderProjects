 var all = parseUrl();
 var token = all["token"];
 var area_id = all["area_id"];
 var code = all["code"];
 var id = all["id"];
 var http = "http://www.cabr-emc.com";

 mui.init({
 	gestureConfig: {
 		longtap: true, //默认为false   
 	},
 	beforeback: function() {　　　　 //获得父页面的webview
 		var list = plus.webview.currentWebview().opener();　　　　 //触发父页面的自定义事件(refresh),从而进行刷新
 		mui.fire(list, 'refresh');
 		//返回true,继续页面关闭逻辑
 		return true;
 	}
 });
 mui.plusReady(function() {
 	var self = plus.webview.currentWebview();
 	var token = self.token; //获取当前页面所属的id   
 	//时间
 	$('.data').click(function() {
 		dtpicker("#datatext", 'date')
 	})
 	initImg();
 	initSelect();
 	mui("body").on('longtap', ".imgcon", function(e) {
 		//		alert($(this));
 		var index = $(this).index();
 		// 将当前元素的索引作为参数进行传递
 		timeOutEvent = setTimeout("longPress(" + index + ")", 500);
 		e.preventDefault();
 	})
 });
 //删除照片
 function longPress(t) {
 	timeOutEvent = 0;
 	if(confirm('您确定要删除本张照片吗？')) {
 		// 用传递过来的参数定位当前元素
 		$('.imgcon').eq(t).remove();
 	}
 }
 // 多选
 function initSelect() {
 	//设备名称
 	var icurequip = 0;
 	var equipname = new Array;
 	var equipid = new Array;
 	mui.ajax(http + '/tools/Qrcode.ashx', {
 		data: {
 			action: 'get_list',
 			p: 1,
 			ps: 1000,
 			kw: "",
 			area_id: area_id,
 			token: token
 		},
 		dataType: 'json', //服务器返回json格式数据
 		type: 'get', //HTTP请求类型
 		success: function(data) {
 			// 			console.log(JSON.stringify(data));
 			var msg = data.msg;
 			var item = data.data;
				overTime(msg);
 			// 			console.log(item);

 			if(msg > 0) {
 				
 				for(var i = 0; i < item.length; i++) {
 					var base_json = JSON.parse(item[i].base_json);
 					equipname.push(base_json.name)
 					equipid.push(item[i].id);
 					if(id == item[i].id) {
 						$("#equip_id").text(id)
 						$("#equiptext").text(base_json.name)
 					}
 				}
 				mobileSingleSelect("equip", ".equip", "#equiptext", "选择设备", equipname, 0, function(indexArr, data) {
 					//console.log(indexArr, data); 
 					icurequip = indexArr
 					$("#equip_id").text(equipid[indexArr])
 				});
 			}

 		}
 	});

 	//上报种类
 	var icurequiptype = 0;
 	var equiptypename = ["检验记录", "维保记录", "维修记录"];
 	var equiptypeid = ["1", "2", "3"];
 	mobileSingleSelect("equiptype", ".equiptype", "#equiptype_text", "上报种类", equiptypename, 0, function(indexArr, data) {
 		//console.log(indexArr, data); 
 		icurequiptype = indexArr
 		$("#equiptype_id").text(equipid[indexArr])
 	});
 	//更换设备
 	var icurchange = 0;
 	var changename = ["否", "是"];
 	var changeid = ["0", "1"];
 	mobileSingleSelect("change", ".change", "#changetext", "紧急程度", changename, 0, function(indexArr, data) {
 		//console.log(indexArr, data); 
 		icurequip = indexArr
 		$("#change_id").text(equipid[indexArr])
 	});

 }
 //拍照

 function initImg() {
 	document.getElementById('addimg').addEventListener('tap', function() {
 		if(mui.os.plus) {
 			var buttonTit = [{
 				title: "拍照"
 			}, {
 				title: "从手机相册选择"
 			}];

 			plus.nativeUI.actionSheet({
 				title: "上传图片",
 				cancel: "取消",
 				buttons: buttonTit
 			}, function(b) { /*actionSheet 按钮点击事件*/
 				switch(b.index) {
 					case 0:
 						break;
 					case 1:
 						/*拍照*/
 						getImage(function(imgSrc) {
 							$("#addimg").before('<p class="imgcon  col-xs-4 text-center"><img src="' + imgSrc + '" alt="" /></p>');
 						});
 						break;
 					case 2:
 						/*打开相册*/
 						galleryImg(5, function(files) {
 							for(var i in files) {
 								var fileSrc = files[i];
 								// 其他操作,比如预览展示
 								$("#addimg").before('<p class="imgcon  col-xs-4 text-center"><img src="' + fileSrc + '" alt="" /></p>');
 							}
 						});
 						break;
 					default:
 						break;
 				}
 			})
 		}
 	}, false);
 }

 function addEquInfo() {
 	var device_id = $("#equip_id").text();
 	var status = 0;
 	var remark = $("#remark").val();
 	var add_user = $("#add_user").val();
 	var type= $("#equiptype_id").text();
 	var base_json = {
 		name: $("#equiptext").text(),
 		type: $("#equiptype_id").text(),
 		status: $("#equip_status").val()
 	};
 	var imgarray = new Array;
 	for(var i = 0; i < $(".imgcon").length; i++) {
 		imgarray.push($(".imgcon").eq(i).find("img").attr("src"));
 	}
 	var info_json = {
 		imgarray: imgarray,
 		repire_name: $("#repire_name").val(),
 		repire_equ: $("#change_id").text(), //0不更换 1更换
 		reprie_company: $("#reprie_company").val(),
 		repire_phone: $("#repire_phone").val(),

 	}
 	var postData = {
 		device_id: device_id,
 		status: status,
 		remark: remark,
 		type: type,
 		add_user: add_user,
 		base_json: JSON.stringify(base_json),
 		info_json: JSON.stringify(info_json),
 		token: token
 	};
 	// 	console.log(JSON.stringify(postData)) 
 	//console.log("/tools/EcmDeviceLog.ashx?action=add&token="+token)
 	mui.ajax(http + "/tools/EcmDeviceLog.ashx?action=add", {
 		data: {
 			device_id: device_id,
 			status: status,
 			type: $("#equiptype_id").text(),
 			remark: remark,
 			add_user: add_user,
 			base_json: JSON.stringify(base_json),
 			info_json: JSON.stringify(info_json),
 			token: token
 		},
 		type: "get",
 		dataType: 'json',
 		success: function(data) {
 			if(data.msg > 0) {
 				mui.toast(data.msgbox);
 				setTimeout(function() {
 					mui.back();
 				}, 1000);
 			}
 		},
 	});
 }