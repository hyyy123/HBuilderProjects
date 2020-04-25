//====================初始化验证表单====================
mui.plusReady(function() { 

	mui.init();
	var http = "http://www.iwesong.com:8056";
	//提交表单
	mui('body').on('tap', '#btnSubmit', function() {
		if(jQuery("#txtUserName").val() == "" || jQuery("#txtPassword").val() == "") {
			jQuery("#msgtips").show();
			jQuery("#msgtips").text("请填写用户名和登录密码！");
			return false;
		}
		mui.ajax(http + "/tools/user.ashx?action=login", {
			type: "POST",
			dataType: "json",
			data: {
				user_name: jQuery("#txtUserName").val(),
				password: jQuery("#txtPassword").val()
			},
			timeout: 20000,
			//			beforeSend: function(XMLHttpRequest) {
			//				jQuery("#btnSubmit").attr("disabled", true);
			//				jQuery("#msgtips").show();
			//				jQuery("#msgtips").text("正在登录，请稍候...");
			//			},
			success: function(data, textStatus) {
				jQuery("#msgtips").text("");
				//				alert(JSON.stringify(data));
				//				alert(textStatus);
				if(data.msg > 0) {
					jQuery("#msgtips").text("正在登录，请稍候...");
					jQuery("#btnSubmit").attr("disabled", true); 
					mui.openWindow({
						url: "index.html",
						id: 'index',
						extras: {
							token: data.data //自定义newsId,处理页面传值 
						},
						styles: { //这个和页面传值没关系
							popGesture: 'close'
						}
					});

				} else {
					jQuery("#btnSubmit").attr("disabled", false);
					jQuery("#msgtips").text(data.msgbox);
				}

			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				jQuery("#msgtips").text("状态：" + textStatus + "；出错提示：" + errorThrown);
				jQuery("#btnSubmit").attr("disabled", false);
			}
		});
		return false;
	});
});