mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	var token = self.token; //获取当前页面所属的id 
	
	
	mui('body').on('tap', '.licon', function() {
		var param = $("#equip_list li").has(this).find(".litip")
		if(param.hasClass("hide")) {
			param.removeClass("hide")
		} else {
			param.addClass("hide")
		}
	});  
	
	$('#begindata').click(function () {  
      dtpicker("#begindata","month") 
    })
	$('#enddata').click(function () {  
      dtpicker("#enddata","month") 
    })
	  
	initSelect();
});
 // 多选
function initSelect() {  
	//设备名称
	 var icurinfo=0;
	 var infoname=["检验记录","维保记录","维修记录"];
	 var infoid=["1","2","3"] ; 
   	mobileSingleSelect("infotype", "#infotype", "#infotypetext", "选择类型", infoname, 0, function(indexArr, data) {
   		//console.log(indexArr, data); 
   		icurequip=indexArr
   		$("#info_id").text(infoid[indexArr]) 
   	});  
}  