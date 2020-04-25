//alert($(window).width())
//alert($(document).height())
$(function(){
	//GaugeMeter
	$(".GaugeMeter").gaugeMeter();//刷新仪表盘
	//数字动画初始化
	$('.counter').countUp();
	//fullpage初始化
		 $('#fullpage').fullpage({
			 'verticalCentered': false,
			 'css3': true,
			 'sectionsColor': ['#254875'],
			 anchors: ['page1', 'page2', 'page3', 'page4'],
			"scrollOverflow": true,
			resize:false
	 })
		//对应类别
			var ele=["照明用电","空调用电","动力用电","特殊用电"]
			var hot=["采暖用热","生活用热"]
			var gas=["食堂用气","其他用气","燃气锅炉","直燃机","其他"]
			var water=["绿化用水","生活综合用水","采暖空调补水"]
			var diff=["太阳能","地源热泵"]
			// 能耗总览-点击动态添加对应项
			function sedkind(obj){
				$(".all_con .sendkind").children().remove()
				if($(obj).find(".title span").html().match("电")){
					for(var i=0;i<ele.length;i++){
					$(".all_con .sendkind").append("<option >"+ele[i]+"</option>")
					}
				}else if($(obj).find(".title span").html().match("水")){
					for(var i=0;i<water.length;i++){
					$(".all_con .sendkind").append("<option >"+water[i]+"</option>")
					}
				}else if($(obj).find(".title span").html().match("气")){
					for(var i=0;i<gas.length;i++){
					$(".all_con .sendkind").append("<option >"+gas[i]+"</option>")
					}
				}else if($(obj).find(".title span").html().match("热")){
					for(var i=0;i<hot.length;i++){
					$(".all_con .sendkind").append("<option >"+hot[i]+"</option>")
					}
				}else if($(obj).find(".title span").html().match("特")){
					for(var i=0;i<diff.length;i++){
					$(".all_con .sendkind").append("<option >"+diff[i]+"</option>")
					}
				}
				
			}
			//能耗总览select各类刷新
			$(".sendkind").change(function(){
					setCharts("main1");//下面数据刷新
					$('.counter').countUp();//数字动画初始化
				})
			
	//能耗总览分类变色
	var color=["6px #EB6867 solid","6px #F39D15 solid","6px #45ADA7 solid","6px #66B9D3 solid","6px #A5BACB solid"]
	$(".small_width li").eq(0).find(".pandect_kind").css({"border-bottom": color[0],"transform": "translateY(-10px)"})
	$(".small_width li").click(function(){
		$(".small_width .pandect_kind").css({"border-bottom": "0","transform": "translateY(0px)"})
		$(this).find(".pandect_kind").css({"border-bottom": color[$(this).index()],"transform": "translateY(-10px)"})
		$(".data_img").attr("src",$(this).find("img").attr("src"))
		$(".liebie").html($(this).find(".title span").html())
		$(".data .danwei").html($(this).find(".main .danwei").html())
		//点击动态添加对应项
		sedkind(this)
		setCharts("main1");//下面数据刷新
	})
	
	var font=["耗电量","耗水量","耗气量","耗热量","特殊能源消耗"]
	$(".big_width li").eq(0).find(".pandect_kind").css({"border-right": color[0],"transform": "translateX(-10px)"})
	$(".big_width li").click(function(){
		$(".big_width .pandect_kind").css({"border-right": "0","transform": "translateX(0px)"})
		$(this).find(".pandect_kind").css({"border-right": color[$(this).index()],"transform": "translateX(-10px)"})
		$(".data_img").attr("src",$(this).find("img").attr("src"))
		$(".liebie").html(font[$(this).index()])
		$(".data .danwei").html($(this).find(".main .danwei").html())
		//点击动态添加对应项
		sedkind(this)
		setCharts("main1");//下面数据刷新
	})
	
	//能耗总览仪表盘屏幕极端小时控制
	function onResize(){
		if($(this).width()<435){
			//能耗总览
			//第一个
			$("#chart1").children().remove();
			$("#chart1").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="80" data-width="20" data-size="150"  data-color="#EB6867" data-back="RGBA(235,104,103,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >239.25</p><p>kw·h</p></div></div>');
			$("#chart1 .GaugeMeter").gaugeMeter();
			//第二个
			$("#chart2").children().remove();
			$("#chart2").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="60" data-width="20" data-size="150"  data-color="#F39D15" data-back="RGBA(243,157,21,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >56</p><p>t</p></div></div>');
			$("#chart2 .GaugeMeter").gaugeMeter();
			//第三个
			$("#chart3").children().remove();
			$("#chart3").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="75" data-width="20" data-size="150"  data-color="#45ADA7" data-back="RGBA(69,173,167,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >143</p><p>m<sup>3</sup></p></div></div>');
			$("#chart3 .GaugeMeter").gaugeMeter();
			//第四个
			$("#chart4").children().remove();
			$("#chart4").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="40" data-width="20" data-size="150"  data-color="#66B9D3" data-back="RGBA(102,185,211,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >560</p><p>GJ</p></div></div>');
			$("#chart4 .GaugeMeter").gaugeMeter();
			//第五个
			$("#chart5").children().remove();
			$("#chart5").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="30" data-width="20" data-size="150"  data-color="#A5BACB" data-back="RGBA(165,186,203,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >12.29</p><p>kw·h</p></div></div>');
			$("#chart5 .GaugeMeter").gaugeMeter();
			
			//设备能耗
			$("#chart6").children().remove();
			$("#chart6").append('<div class="GaugeMeter" id="PreviewGaugeMeter_1" data-percent="80" data-width="30" data-size="170"  data-color="#E06950" data-back="RGBA(224,105,80,.4)"  data-style="Semi"  data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p class=" timer counter" >315</p><p>燃气表累计流量</p></div></div>');
			$("#chart6 .GaugeMeter").gaugeMeter();
			
			$('.counter').countUp();;//数字刷新
			//能耗总览css控制
			$(" .big_width .GaugeMeter").css({"left":"-13px","top":"50px","height":"150px","width":"150px","margin":"0 auto"})
			$(".big_width  .GaugeMeter  .GaugeMeter_num").css({"top":"38px","left":"24px","line-height":"20px","font-size":"12px","width":"104px","text-align":"center"})
			$(".big_width  .GaugeMeter  .GaugeMeter_num .timer").css("font-size","38px")
			$(".big_width  .main .all").css({"width":"36%","margin-left":"-33px"})
			//设备能耗css控制
			$(" .dataf_watch .GaugeMeter").css({"left":"0px","top":"50px","height":"170px","width":"170px","margin":"0 auto"})
			$(".dataf_watch  .GaugeMeter  .GaugeMeter_num").css({"top":"52px","left":"36px","line-height":"20px","font-size":"12px"})
			$(".dataf_watch  .GaugeMeter  .GaugeMeter_num .timer").css("font-size","45px")
			
		
		}else{
			//第一个
			$("#chart1").children().remove();
			$("#chart1").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="80" data-width="20" data-size="250"  data-color="#EB6867" data-back="RGBA(235,104,103,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >239.25</p><p>kw·h</p></div></div>');
			$("#chart1 .GaugeMeter").gaugeMeter();
			//第二个
			$("#chart2").children().remove();
			$("#chart2").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="60" data-width="20" data-size="250"  data-color="#F39D15" data-back="RGBA(243,157,21,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >56</p><p>t</p></div></div>');
			$("#chart2 .GaugeMeter").gaugeMeter();
			//第三个
			$("#chart3").children().remove();
			$("#chart3").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="75" data-width="20" data-size="250"  data-color="#45ADA7" data-back="RGBA(69,173,167,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >143</p><p>m<sup>3</sup></p></div></div>');
			$("#chart3 .GaugeMeter").gaugeMeter();
			//第四个
			$("#chart4").children().remove();
			$("#chart4").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="40" data-width="20" data-size="250"  data-color="#66B9D3" data-back="RGBA(102,185,211,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >560</p><p>GJ</p></div></div>');
			$("#chart4 .GaugeMeter").gaugeMeter();
			//第五个
			$("#chart5").children().remove();
			$("#chart5").append('<div class="GaugeMeter" id="PreviewGaugeMeter_6" data-percent="30" data-width="20" data-size="250"  data-color="#A5BACB" data-back="RGBA(165,186,203,.4)"    data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p >今日</p><p class=" timer counter" >12.29</p><p>kw·h</p></div></div>');
			$("#chart5 .GaugeMeter").gaugeMeter();
			
			//设备能耗
			$("#chart6").children().remove();
			$("#chart6").append('<div class="GaugeMeter" id="PreviewGaugeMeter_1" data-percent="80" data-width="30" data-size="380"  data-color="#E06950" data-back="RGBA(224,105,80,.4)"  data-style="Semi"  data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p class=" timer counter" >315</p><p>燃气表累计流量</p></div></div>');
			$("#chart6 .GaugeMeter").gaugeMeter();
			
			
			$('.counter').countUp();;//数字刷新
			//能耗总览css控制
			$(" .big_width .GaugeMeter").css({"left":"0px","top":"0px","height":"250px","width":"250px","margin":"0 auto"})
			$(".big_width  .GaugeMeter  .GaugeMeter_num").css({"top":"67px","left":"53px","line-height":"33px","font-size":"16px","width":"150px","text-align":"center"})
			$(".big_width  .GaugeMeter  .GaugeMeter_num .timer").css("font-size","65px")
			$(".big_width  .main .all").css({"width":"30%","margin-left":"0px"})
			//设备能耗css控制
			$(" .dataf_watch .GaugeMeter").css({"left":"0px","top":"0px","height":"380px","width":"380px","margin":"0 auto"})
			$(".dataf_watch  .GaugeMeter  .GaugeMeter_num").css({"top":"135px","left":"144px","line-height":"28px","font-size":"12px"})
			$(".dataf_watch  .GaugeMeter  .GaugeMeter_num .timer").css("font-size","65px")
		}
		if($(this).width()<1385&&$(this).width()>970){
			//设备能耗
			$("#chart6").children().remove();
			$("#chart6").append('<div class="GaugeMeter" id="PreviewGaugeMeter_1" data-percent="80" data-width="30" data-size="170"  data-color="#E06950" data-back="RGBA(224,105,80,.4)"  data-style="Semi"  data-append="t" data-label_color="#FFF"><div class="GaugeMeter_num"><p class=" timer counter" >315</p><p>燃气表累计流量</p></div></div>');
			$("#chart6 .GaugeMeter").gaugeMeter();
			//设备能耗css控制
			$(" .dataf_watch .GaugeMeter").css({"left":"0px","top":"50px","height":"170px","width":"170px","margin":"0 auto"})
			$(".dataf_watch  .GaugeMeter  .GaugeMeter_num").css({"top":"52px","left":"36px","line-height":"20px","font-size":"12px"})
			$(".dataf_watch  .GaugeMeter  .GaugeMeter_num .timer").css("font-size","45px")
			$('.counter').countUp();;//数字刷新
		}
		
		
	}

	onResize()
	
	//分项能耗
	function data_point(){
		$(".dataf_point_more").css({"right":-$(".dataf_point_more").width(),"opacity":"0"})
		//多个点击触发
		function point(point){
			$(point).click(function(){
				$(".dataf_point_more").css({"right":"0","opacity":"1"})
			})
		}
			point(".dataf_point")
			//分项能耗
			point(".region")
			//能耗分析
			point(".analyze_con .sel ul li")
			
		//返回
		$(".back").click(function(){
			$(".dataf_point_more").css({"right":-$(".dataf_point_more").width(),"opacity":"0"})
		})
		$(".dataf_point_more .sub").click(function(){
			$(".dataf_point_more").css({"right":-$(".dataf_point_more").width(),"opacity":"0"})
		})
	}
	data_point()

	//设备能耗
	var region1=["区域1-设备1","区域1-设备2","区域1-设备3","区域1-设备4","区域1-设备5","区域1-设备6","区域1-设备7","区域1-设备8","区域1-设备9"]
	//选择区域
	 $("#bs-example-navbar-collapse-2  .nav li").click(function(){
			$("#bs-example-navbar-collapse-2  .nav li").removeClass("fnav_active")
			$(this).addClass("fnav_active")
			$("#f_nav_titel1").html($(this).text())
			if($(window).width()>767){
				$("#f_nav_titel1").html("选择区域")
			}
			//动态添加
			$("#bs-example-navbar-collapse-3  .nav ").not("#f_nav_titel2").children().remove()
			$(".table_list tr").not("tr:first").not("tr:last").remove()
			if($(this).text()=="区域名称1"){
				region1=["区域1-设备1","区域1-设备2","区域1-设备3","区域1-设备4","区域1-设备5","区域1-设备6","区域1-设备7","区域1-设备8","区域1-设备9","区域1-设备10","区域1-设备11"]
			}else if($(this).text()=="区域名称2"){
				region1=["区域2-设备1","区域2-设备2","区域2-设备3","区域2-设备4","区域2-设备5","区域2-设备6","区域2-设备7","区域2-设备1",
								"区域2-设备2","区域2-设备3","区域2-设备4","区域2-设备5","区域2-设备6","区域2-设备7"]
			}else if($(this).text()=="区域名称3"){
				region1=["区域3-设备1","区域3-设备2","区域3-设备3","区域3-设备4","区域3-设备5"]
			}else if($(this).text()=="区域名称4"){
				region1=["区域4-设备1","区域4-设备2","区域4-设备3","区域4-设备4","区域4-设备5","区域4-设备6","区域4-设备4","区域4-设备5","区域4-设备6","区域4-设备4","区域4-设备5","区域4-设备6","区域4-设备4","区域4-设备5","区域4-设备6"]
			}else if($(this).text()=="区域名称5"){
				region1=["区域5-设备1","区域5-设备2","区域5-设备3","区域5-设备4","区域5-设备5","区域5-设备6"]
			}else if($(this).text()=="区域名称6"){
				region1=["区域6-设备1","区域6-设备2","区域6-设备3","区域6-设备4","区域6-设备5"]
			}else if($(this).text()=="区域名称7"){
				region1=["区域7-设备1","区域7-设备2","区域7-设备3"]
			}
			for(var i=0;i<region1.length;i++){
				$("#bs-example-navbar-collapse-3  .nav ").append("	<li ><a href='javascript:;'>"+region1[i]+"</a></li>")
				$(".table_list tr:first").after("<tr><td class='namef'><ul class='clearfix name fontsize14'><li>"+$(this).text()+"</li><li>"+region1[i]+"</li></ul></td></tr>")
			}
			br()//设备能耗-选择设备数据分行
			selfacility()//选择设备点击事件
			setCharts("main1");//下面数据刷新
			plus( )//dataview加数据
			onResize()
		})
	 //设备能耗-选择设备点击事件
	 function selfacility(){
		$("#bs-example-navbar-collapse-3  .nav li").eq(0).addClass("fnav_active")
	 	$("#bs-example-navbar-collapse-3  .nav li").click(function(){
		$("#bs-example-navbar-collapse-3  .nav li").removeClass("fnav_active")
		$(this).addClass("fnav_active")
			$("#f_nav_titel2").html($(this).text())
				if($(window).width()>767){
					$("#f_nav_titel2").html("选择设备")
				}
			setCharts("main1");//下面数据刷新
			plus( )//dataview加数据
			onResize()
		})
	 }
	 selfacility()
 	//设备能耗-选择设备数据分行
 	function br(){
 		for(var i=1;i<$("#bs-example-navbar-collapse-3  .nav li").length;i++){
	   		//判断下拉是否出现
	   		if($("#bs-example-navbar-collapse-3  .nav li").length>8){
			   	$(".ptop6_more").show(500)
			}else{
			   	$(".ptop6_more").hide(500)
		   	}
			//显示隐藏
	   		if(8*i<=Number($("#bs-example-navbar-collapse-3  .nav li").length)){
	   			$("#bs-example-navbar-collapse-3  .nav ").children().hide( )
		   		for(var j=0;j<7;j++){
		   			$("#bs-example-navbar-collapse-3  .nav li").eq(j).show( )
		   		}
	   		}
		}
 	}
   	br()
   
 	//选择设备点击显现更多
 	var on=true
 	$(".ptop6_more").click(function(){
 		if(on){
   			$("#bs-example-navbar-collapse-3  .nav ").children().show( )
   			$(this).removeClass("glyphicon-menu-down")
   			$(this).addClass("glyphicon-menu-up")
   			on=false
 		}else{
 			$("#bs-example-navbar-collapse-3  .nav ").children().hide()
   			for(var j=0;j<7;j++){
   				$("#bs-example-navbar-collapse-3  .nav li").eq(j).show()
   			}
   			$(this).removeClass("glyphicon-menu-up")
   			$(this).addClass("glyphicon-menu-down")
   			on=true
 		}
 	})
 	
 	//能耗分析
 	//能耗分析-视图分类选择
	 function tab(){
		 	var nowleft=0
		 	var str=parseFloat($(".analyze_tabcon ul li").width())
			//最大left值
			var bigleft=parseFloat(str*($(".analyze_tabcon ul li").length))-parseFloat($(".analyze_tabcon").width())
			//向右
			$(".tab_right").click(function(){
			 	 nowleft=parseInt(nowleft)-str+"px"
			 	if(str*($(".analyze_tabcon ul li").length)<$(".analyze_tabcon").width()){
			 		$(".tabcon").css({"left":"0px"})
			 		nowleft=0
			 	}else if(parseInt($(".tabcon").css("left"))<=("-"+(bigleft-10))){
			  		$(".tabcon").css({"left":"-"+bigleft+"px"})
			  		 nowleft="-"+bigleft
			  	}else{
				 	$(".tabcon").css({"left":nowleft})
			  	}
			 })
			//向左
		  	$(".tab_left").click(function(){
			 	 nowleft=parseInt(nowleft)+str+"px"
			  	if(parseInt($(".tabcon").css("left"))>="-10"){
			  		$(".tabcon").css({"left":"0"})
			  		 nowleft=0
			  	}else{
				 	$(".tabcon").css({"left":nowleft})
			  	}
			 })
		 }
 		tab()
 		
 		
 	$(window).resize(function(){
	  	$(".tabcon").css({"left":"0"})
	  	$('.counter').countUp();
		br()//设备能耗下拉菜单
	  	tab()//能耗分析-视图分类选择
		setCharts("main1");//下面数据刷新
		onResize();//仪表盘屏幕极端小时控制
		data_point()//右侧指向选择
		plus( )//dataview添加数据
		$(".tabcon").css({"left":"0"})//能耗分析视图控制位置
		if($(window).width()>970){
			$("#f_nav_titel1").html("选择区域")
		}
		if($(window).width()>970){
			$("#f_nav_titel2").html("选择设备")
		}
	})
})

