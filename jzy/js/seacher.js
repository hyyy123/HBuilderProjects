var all=parseUrl();
var token= all["token"];
	var http = "http://www.cabr-emc.com";
//alert(token)
var ahref=[
	"hos-struction/structure.html?token=" + token,
	"hos-struction/facility.html?token=" + token,
	"statistics/index.html?token=" + token,
	"energy/abnormal.html?token=" + token
]
mui.plusReady(function() {
	mui.init();
 
	mui('body').on('tap', '.indexhref', function() {
		document.location.href = "index.html?token=" + token;
	});
	mui('body').on('tap', '.kindhref', function() {
		document.location.href = "seacher.html?token=" + token;
	});
	
	jQuery(".finditemlist a").each(function(i){
		jQuery(this).attr("href",ahref[i]); 
		
	})
	jQuery(".finditemlist a").click(function(){
		 document.location.href= jQuery(this).attr("href");
	})
}); 
