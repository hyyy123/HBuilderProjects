mui.plusReady(function() { 
	var token = getSelfToken(); 
	jQuery("a").click(function() {
		if(jQuery(this).attr("href") != "" && jQuery(this).attr("href") != undefined) {
			document.location.href = jQuery(this).attr("href")+ "&token=" + token;
//			alert(document.location.href)

		}
	}) 
});