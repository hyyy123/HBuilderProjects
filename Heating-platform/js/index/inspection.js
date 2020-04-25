 mui.init({
 	gestureConfig: {
 		longtap: true, //默认为false   
 	}
 });
 mui.plusReady(function() {
 	var self = plus.webview.currentWebview();
 	var token = self.token; //获取当前页面所属的id  
 	// 时间
 	$('.data').click(function() {
 		dtpicker("#datatext", 'date')
 	})
 	$('.deadline').click(function() {
 		dtpicker("#deadlinetext", 'date')
 	})
 	initSelect();
 	initImg();
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
	 var icurequip=0;
	 var equipname=["a","b"];
	 var equipid=["0","1"] ; 
   	mobileSingleSelect("equip", ".equip", "#equiptext", "选择设备", equipname, 0, function(indexArr, data) {
   		//console.log(indexArr, data); 
   		icurequip=indexArr
   		$("#equip_id").text(equipid[indexArr]) 
   	}); 
	//紧急程度
	 var icurequip = 0;
	 var urgentname = ["a", "b"];
	 var urgentid = ["0", "1"];
	 mobileSingleSelect("urgent", ".urgent", "#urgenttext", "紧急程度", equipname, 0, function(indexArr, data) {
	 	//console.log(indexArr, data); 
	 	icurequip = indexArr
	 	$("#urgent_id").text(equipid[indexArr])
	 });
}  
//拍照

function initImg(){  
	document.getElementById('addimg').addEventListener('tap', function() {
	    if (mui.os.plus) {
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
	            switch (b.index) {
	                case 0:
	                    break;
	                case 1:
	                /*拍照*/
	                    getImage(function(imgSrc){
	                    	$("#addimg").before('<p class="imgcon  col-xs-4 text-center"><img src="'+imgSrc+'" alt="" /></p>');
	                    }); 
	                    break;
	                case 2:
	                 /*打开相册*/
	                    galleryImg(5,function(files){
	                    	for(var i in files){
							    var fileSrc = files[i];
						         // 其他操作,比如预览展示
						        $("#addimg").before('<p class="imgcon  col-xs-4 text-center"><img src="'+fileSrc+'" alt="" /></p>'); 
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
