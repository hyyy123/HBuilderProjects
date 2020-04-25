mui.plusReady(function() {
	 
	if(getStorage("token") != undefined) { 
		location = "index.html";
	}else{
		location = "login.html";
		
	}
})
 