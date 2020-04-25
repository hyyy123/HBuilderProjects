var all = parseUrl();
var token = all["token"];
var area_id = all["area_id"];
var code = all["code"];
var id = all["id"];
var http = "http://www.cabr-emc.com";
window.addEventListener('refresh', function(e) { //执行刷新
	location.reload();
});
mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	var token = self.token; //获取当前页面所属的id 
	jQuery("a").each(function(i) {
		if(jQuery(this).attr("href") != "" && jQuery(this).attr("href") != undefined && jQuery(this).attr("href").indexOf("#") == -1) {

			jQuery(this).attr("href", jQuery(this).attr("href") + "&code=" + code + "&id=" + id);

			//									console.log(jQuery(this).attr("href"))
		}
	})
	//图片放大 
	mui.previewImage();

	$("#begindata").text(new Date().format("yyyy/MM/dd"))
	$("#enddata").text(new Date().format("yyyy/MM/dd"))
	mui('body').on('tap', '.licon', function() {
		var param = $("#equip_list li").has(this).find(".litip")
		if(param.hasClass("hide")) {
			param.removeClass("hide")
		} else {
			param.addClass("hide")
		}
	});

	$('#begindata').click(function() {
		dtpicker("#begindata", "data", function() {
		jQuery(".dropload-down").remove();
						getList();
		})
	})
	$('#enddata').click(function() {
		dtpicker("#enddata", "data", function() {
		jQuery(".dropload-down").remove();
						getList();
		})
	})

	initSelect();
	getList();

	//	alert($("#infoadd a").attr("href"))

});
// 多选
function initSelect() {
	//设备名称
	var icurinfo = 0;
	var infoname = ["请选择", "检验记录", "维保记录", "维修记录"];
	var infoid = ["-1", "1", "2", "3"];
	mobileSingleSelect("infotype", "#infotype", "#infotypetext", "选择类型", infoname, 0, function(indexArr, data) {
		//console.log(indexArr, data); 
		icurequip = indexArr
		$("#info_id").text(infoid[indexArr]);
		jQuery(".dropload-down").remove();
		getList();
	});
}

function getList() {
	jQuery("#equip_list").children().remove();

	// 每页展示8个
	var ps = 5;
	var p = 0;

	// dropload
	$('.info-a-list').dropload({
		scrollArea: window,
		//domUp: {
		//    domClass: 'dropload-up',
		//    domRefresh: '<p class="dropload-refresh">↓下拉刷新</p>',
		//    domUpdate: '<p class="dropload-update">↑释放更新</p>',
		//    domLoad: '<p class="dropload-load"><span class="loading"></span>加载中...</p>'
		//},
		domDown: {
			domClass: 'dropload-down',
			// 滑动到底部显示内容
			domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
			// 内容加载过程中显示内容
			domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
			// 没有更多内容-显示提示
			domNoData: '<div class="dropload-noData">暂无更多数据</div>'
		},
		loadDownFn: function(me) {
			p++;
			//console.log(p)
			// 拼接HTML
			var postData = "&p=" + p + "&ps=" + ps + "&kw=" + "" + "&device_id=" + id + "&start=" + $('#begindata').text() + "&end=" + $('#enddata').text() + "&type=" + $("#info_id").text() + "&token=" + token
			//	          console.log(postData);
			var html = '';
			$.ajax({
				type: 'GET',
				url: http + "/tools/EcmDeviceLog.ashx?action=get_list" + postData,
				dataType: 'json',
				success: function(data) {
					console.log(JSON.stringify(data));
					var count = data.count
					var item = data.data; 
					if(item == "") {
						html += '<li class="text-center" >暂无数据</li>';
						$('#equip_list').append(html);
						return
					}

					var arrLen = count - $("#equip_list").children().length;
					//	                  console.log(arrLen)
					if(arrLen > 0) {
						for(var i = 0; i < item.length; i++) {
							html += '<li>';
							html += '<div class="licon  clearfix mui-bg-white" >';
							html += '<p class="pull-left  text-blue-deep" ><b>' + (item[i].status == 0 ? "<span class='text-red'>检验不合格</span>" : '<span class="text-green">检验合格</span>') + '</b></p>';
							html += '<p class="pull-right " ><span class="colorblack" ></span>&nbsp;&nbsp;<i class="fa fa-chevron-circle-up" ></i></p>';
							html += '</div>'
							html += '<div class="litip hide" >';
							html += '<ul >';
							var base_json = JSON.parse(item[i].base_json);
							var info_json = JSON.parse(item[i].info_json);
							html += '<li class="clearfix" >';
							html += '<p class="pull-left" ><img src="../img/code/question.png" alt="" />&nbsp;&nbsp;<b>检验时间</b></p>';
							html += '<p class="pull-left colorblack" ><b class="colorblack" >' + item[i].add_time + '</b></p>';
							html += '</li>';
							html += '<li class="clearfix" >';
							html += '<p class="pull-left" ><img src="../img/code/question.png" alt="" />&nbsp;&nbsp;<b>设备状态</b></p>';
							html += '<p class="pull-left colorblack" ><b class="colorblack" >' + base_json.status + '</b></p>';
							html += '</li>';
							html += '<li class="clearfix" >';
							html += '<p class="pull-left" ><img src="../img/code/question.png" alt="" />&nbsp;&nbsp;<b>上报种类</b></p>';
							html += '<p class="pull-left colorblack" ><b class="colorblack" >' + base_json.type + '</b></p>';
							html += '</li>';
							html += '<li class="clearfix" >';
							html += '<p class="pull-left" ><img src="../img/code/question.png" alt="" />&nbsp;&nbsp;<b>上传人员</b></p>';
							html += '<p class="pull-left colorblack" ><b class="colorblack" >' + base_json.add_user + '</b></p>';
							html += '</li>';
							html += '<li class="clearfix" >';
							html += '<p class="pull-left" ><img src="../img/code/question.png" alt="" />&nbsp;&nbsp;<b>维修人员</b></p>';
							html += '<p class="pull-left colorblack" ><b class="colorblack" >' + info_json.repire_name + '</b></p>';
							html += '</li>';
							html += '<li class="clearfix" >';
							html += '<p class="pull-left" ><img src="../img/code/question.png" alt="" />&nbsp;&nbsp;<b>更换设备</b></p>';
							html += '<p class="pull-left colorblack" ><b class="colorblack" >' + (info_json.repire_equ == 0 ? "否" : "是") + '</b></p>';
							html += '</li>';
							html += '<li class="clearfix" >';
							html += '<p class="pull-left" ><img src="../img/code/question.png" alt="" />&nbsp;&nbsp;<b>负责单位</b></p>';
							html += '<p class="pull-left colorblack" ><b class="colorblack" >' + info_json.reprie_company + '</b></p>';
							html += '</li>';
							html += '<li class="clearfix" >';
							html += '<p class="pull-left" ><img src="../img/code/question.png" alt="" />&nbsp;&nbsp;<b>联系方式</b></p>';
							html += '<p class="pull-left colorblack" ><b class="colorblack" >' + info_json.repire_phone + '</b></p>';
							html += '</li>';
//							html += '<li class="clearfix border0" >';
//							html += '<p><img src="../img/code/question.png" alt="" />&nbsp;&nbsp;<b>现场图片</b></p>';
//							html += '<div class="colorblack clearfix" >';
//							html+='<div class="lipicture col-xs-4" >';
//							html+='<img src="../img/bg.png" alt=""  data-preview-src="" />';
//							html+='</div>';
							//								                          console.log(JSON.stringify(info_json)) ; 
//							if(info_json.imgarray != undefined || info_json.imgarray != "") {
//								var imgaarray = info_json.imgarray
//								for(var i = 0; i < imgaarray.length; i++) {
//									html += '<div class="lipicture col-xs-4" >';
//									html += '<img src="' + imgaarray[i] + '" alt=""  data-preview-src="" />';
//									html += '</div>';
//
//								}
//							}

//							html += '</div>';
//							html += '</li>';
							html += '</ul>';
							//	                          console.log(href)
							//	                          html += '<p class="text-center" ><a onclick="replay('+item[i].id+')" class="btn btn-primary btn-block">回复</a></p>';
							html += '</div>';
							html += '</li>';
						}
						// 如果没有数据
					} else {
						// 锁定
						me.lock();
						// 无数据
						me.noData();
					}
					// 为了测试，延迟1秒加载
					setTimeout(function() {
						//	                  	alert(html)
						// 插入数据到页面，放到最后面
						$('#equip_list').append(html);
						// 每次数据插入，必须重置
						me.resetload();
					}, 5000);
				},
				error: function(xhr, type) {
					//	                  alert('Ajax error!');
					// 即使加载出错，也得重置
					me.resetload();
				}
			});
		}
	});
}