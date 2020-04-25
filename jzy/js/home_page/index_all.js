mui.plusReady(function() {
	var token = getSelfToken();
//	alert(token);
	jQuery("a").click(function() {
		if(jQuery(this).attr("href") != "" && jQuery(this).attr("href") != undefined) {
			document.location.href = jQuery(this).attr("href") + "&token=" + token;

		}
	})
	mui('body').on('tap', '.licon', function() {
		//		$(".litip").not(this).addClass("hide")
		var all = $("#info_list li").find(".litip");
		var param = $("#info_list li").has(this).find(".litip");
		if(param.hasClass("hide")) {
			all.addClass("hide");
			param.removeClass("hide");
		} else {
			all.addClass("hide");
		}
	});
});