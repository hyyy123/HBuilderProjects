 mui.plusReady(function() {
   	var self = plus.webview.currentWebview();
   	var token = self.token; //获取当前页面所属的id  
    initImg('addimg'); 
    initImg('liimgp');
   	//时间
   	$('.data').click(function () { 
      dtpicker("#datatext",'date')
    })  
});  

//拍照

function initImg(name){  
	document.getElementById(name).addEventListener('tap', function() {
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
						    $("#liimglabel img").attr("src",imgSrc);
						    $("#addimg").addClass("hide");
						    $("#liimgp").removeClass("hide");
						    
	                    }); 
	                    break;
	                case 2:
	                 /*打开相册*/
	                    galleryImg(1,function(files){ 
						    $("#liimglabel img").attr("src",files);  
						    $("#addimg").addClass("hide");
						    $("#liimgp").removeClass("hide");
						    
	                     });
	                    break;
	                default:
	                    break;
	            }
	        })
	    }        
	}, false); 
}