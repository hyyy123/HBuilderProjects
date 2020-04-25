$(function(){
//	alert($(window).width())
	//fullpage初始化
		 $('#fullpage').fullpage({
			 'verticalCentered': false,
			 'css3': true,
			 'sectionsColor': ['#254875'],
			 anchors: ['page1', 'page2', 'page3', 'page4'],
			"scrollOverflow": true,
			resize:false
	 })
	
	//数字动画初始化
	$('.counter').countUp();
	//建筑
		$(".f_building").css({"background-position":"92% 110%"})
		$(".f_circle").delay(700).animate({"backgroundPositionX":"0px","backgroundPositionY":"25%","opacity": "1"},3000)
		//楼数据
		$(".con_big .f_data").css({"top": "0px","opacity": "1"})
		//分类数据
		$(".con_big .k_data").css({"right": "0px","opacity": "1"})
		//楼层导航样式
		//big_con
		
		function nav(){
		var a=[25,30,35,40,45,50,55,60,65,70]
		$(".con_big .f_num ul li").css({"background":"none","background-size": "none"})
		$(".con_big .f_num ul li").eq(0).css({"background":"url(assets/img/index/shadom.png) no-repeat ","background-size": "65px","background-position": "98%  55%"})
		$(".con_big .f_send").html($(".con_big .f_num ul li").eq(0).html())
//		$(".f_circle").delay(0).animate({"backgroundPositionX":"0px","backgroundPositionY":"25%","opacity": "1"},500)
		$(".con_big .f_num ul li").click(function(){
			$(".con_big .f_num ul li").css({"background":"none","background-size": "none"})
			$(".con_big .f_num ul li").eq($(this).index()).css({"background":"url(assets/img/index/shadom.png) no-repeat ","background-size": "65px","background-position": "98%  55%"})
			$(".con_big .f_send").html($(this).html())
			$(".con_big .f_circle").stop(true,true).animate({"backgroundPositionY":a[$(this).index()]+"%"},1000)
		})
		//small_con
			$("#nav_all ul li").css({"background":"none","background-size": "none"})
			$(".con_small .f_send").html($("#nav_all ul li").eq(0).text())
			if($(window).width()>768){
					$("#nav_all ul li").eq(0).css({"background":"url(assets/img/index/shadom.png) no-repeat ","background-size": "59px","background-position": "60%  35%"})
				}else{
					$("#nav_all ul li").eq(0).css({"background":"url(assets/img/index/shadom.png) no-repeat ","background-size": "55px","background-position": "50%  50%"})
				}
			$("#nav_all ul li").click(function(){
					$("#nav_all ul li").css({"background":"none","background-size": "none"})
					$(".con_small .f_send").html($(this).text())
				if($(window).width()>768){
					$("#nav_all ul li").eq($(this).index()).css({"background":"url(assets/img/index/shadom.png) no-repeat ","background-size": "59px","background-position": "60%  35%"})
				}else{
					$("#nav_all ul li").eq($(this).index()).css({"background":"url(assets/img/index/shadom.png) no-repeat ","background-size": "55px","background-position": "50%  50%"})
				}
			})
		}
			 nav()
		//分类切换
		//big_con
		var img=["assets/img/index/energy_normal.png","assets/img/index/structure_normal.png","assets/img/index/eve_normal.png",
				"assets/img/index/syn_normal.png","assets/img/index/BIM_normal.png"]
		var img1=["assets/img/index/energy_diff.png","assets/img/index/structure_diff.png","assets/img/index/eve_diff.png",
				"assets/img/index/syn_diff.png","assets/img/index/BIM_diff.png"]
		//初始化
		function kind_sel(){
			
				$(".con_big .k_floor ul li img").each(function(i,ele){
					$(ele).attr("src",img[i])
					})
				$(".con_big .k_floor ul li span").each(function(i,ele){
					$(ele).css("right","-30px")
				})
				$(".con_big .kk").html($(".con_big .k_floor ul li span").eq(0).html())
				 	$(".con_big .k_floor ul li img").eq(0).attr("src",img1[0])
			 	$(".con_big .k_floor ul li span").eq(0).css("right","0")
		
		
			$(".con_big .k_floor ul li").click(function(){
				$(".con_big .k_floor ul li img").each(function(i,ele){
					$(ele).attr("src",img[i])
				})
				$(".con_big .k_floor ul li span").each(function(i,ele){
					$(ele).css("right","-30px")
				})
					$(".con_big .kk").html($(this).find("span").html())
				 	$(".con_big .k_floor ul li img").eq($(this).index()).attr("src",img1[$(this).index()])
				 	$(".con_big .k_floor ul li span").eq($(this).index()).css("right","0")
			})
			//small_con
			
					$(".con_small .k_floor ul li img").each(function(i,ele){
						$(ele).attr("src",img[i])
					})
					$(".con_small .k_floor ul li p").each(function(i,ele){
						$(ele).css("bottom","-50px")
					})
					$(".con_small .kk").html($(".con_small .k_floor ul li p").eq(0).html())
				 	$(".con_small .k_floor ul li img").eq(0).attr("src",img1[0])
				 	$(".con_small .k_floor ul li p").eq(0).css("bottom","0")
			
			
			$(".con_small .k_floor ul li p").eq(0).css("bottom","0")
			$(".con_small .k_floor ul li").click(function(){
				$(".con_small .k_floor ul li img").each(function(i,ele){
					$(ele).attr("src",img[i])
				})
				$(".con_small .k_floor ul li p").each(function(i,ele){
					$(ele).css("bottom","-50px")
				})
					$(".con_small .kk").html($(this).find("p").html())
				 	$(".con_small .k_floor ul li img").eq($(this).index()).attr("src",img1[$(this).index()])
				 	$(".con_small .k_floor ul li p").eq($(this).index()).css("bottom","0")
			})
		}
		kind_sel()
	$(window).resize(function(){
		 nav()//导航栏
		 kind_sel()//分类栏
			 	setCharts("main1"); //
			 	setCharts("main2"); //调用
//		$('.counter').countUp();//数字动画初始化(bug)
	})
})
