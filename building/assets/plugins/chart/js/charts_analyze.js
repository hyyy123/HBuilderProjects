	var  date = ['1月','2月','3月'];
	var  str="同比"
//初始化
			$(document).ready(function() {
  			  //初始化切换
			  $(".animsition").animsition({
			  
			    inClass               :   'fade-in-right',
			    outClass              :   'fade-out',
			    inDuration            :    1500,
			    outDuration           :    800,
			    linkElement           :   '.animsition-link',
			    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			    loading               :    true,
			    loadingParentElement  :   'body', //animsition wrapper element
			    loadingClass          :   'animsition-loading',
			    unSupportCss          : [ 'animation-duration',
						                              '-webkit-animation-duration',
						                              '-o-animation-duration'
						                            ],
			    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			    
			    overlay               :   false,
			    
			    overlayClass          :   'animsition-overlay-slide',
			    overlayParentElement  :   'body'
			  });
			  
			  
			 	setCharts('main1'); //调用

				//同比环比标比
				$(".conkind li").click(function(){
						$(".conkind li").removeClass("fnav_active")
						$(this).addClass("fnav_active")
					if($(this).html().match("环")){
							 str="环比"
					}else if($(this).html().match("标")){
							str="标比"
					}else{
							 str="同比"
					}
					setCharts('main1');
				})
			tabimg()
			 			 
			});
					function tabimg(){
							 $(".tab_img").click(function(){
								setCharts("main1");//下面数据刷新
								$(".tab_img").removeClass("tab_img_active")
								$(this).addClass("tab_img_active")
								})
							}
				function pointsel(){
					$(".tabcon ul").children().remove()
					var ele=["照明用电","照明用电-照明插座","照明用电-走廊应急","照明用电-室外景观",
							"空调用电","空调用电-空调末端","空调用电-市政供暖","空调用电-冷水机组","空调用电-辅助水泵",
							"动力用电","动力用电-电梯","动力用电-水泵","动力用电-通风机",
							"特殊用电","特殊用电-信息中心","特殊用电-其他"]
					var hot=["采暖用热","生活用热"]
					var gas=["食堂用气","其他用电","燃气锅炉","直燃机","其他"]
					var water=["绿化用水","生活综合用水","采暖空调补水"]
					var diff=["太阳能","地源热泵"]
							//区域
							for(var i=0;i<$(".selpo_more .iradio_square-blue").length;i++){
								if($(".selpo_more .iradio_square-blue").eq(i).css("background-position")=="-168px 0px"){
									$(".selpo").html($(".selpo_more label").eq(i).html())
										
								}
							}
							//总项
							for(var i=0;i<$(".selele_more .iradio_square-blue").length;i++){
								if($(".selele_more .iradio_square-blue").eq(i).css("background-position")=="-168px 0px"){
									$(".selele").html($(".selele_more label").eq(i).html())
									$(".tabcon").css({"left":"0px"})
									if($(".selele_more label").eq(i).html().match("电")){
										for(var j=0;j<ele.length;j++){
											$(".tabcon ul").append("<li><div class='tabcon_one'><p class='tab_img '></p><p class='tab_title'>"+ele[j]+"</p></div></li>")
										}
										$(".dswei").html("kw·h")
									}else if($(".selele_more label").eq(i).html().match("热")){
										for(var j=0;j<hot.length;j++){
											$(".tabcon ul").append("<li><div class='tabcon_one'><p class='tab_img '></p><p class='tab_title'>"+hot[j]+"</p></div></li>")
										}
										$(".dswei").html("GJ")
									}else if($(".selele_more label").eq(i).html().match("水")){
										for(var j=0;j<water.length;j++){
											$(".tabcon ul").append("<li><div class='tabcon_one'><p class='tab_img '></p><p class='tab_title'>"+water[j]+"</p></div></li>")
										}
										$(".dswei").html("t")
									}else if($(".selele_more label").eq(i).html().match("气")){
										for(var j=0;j<gas.length;j++){
											$(".tabcon ul").append("<li><div class='tabcon_one'><p class='tab_img '></p><p class='tab_title'>"+gas[j]+"</p></div></li>")
										}
										$(".dswei").html("m<sub>3</sub>")
									}else if($(".selele_more label").eq(i).html().match("特殊")){
										for(var j=0;j<diff.length;j++){
											$(".tabcon ul").append("<li><div class='tabcon_one'><p class='tab_img '></p><p class='tab_title'>"+diff[j]+"</p></div></li>")
										}
										$(".dswei").html("kw·h")
									}
									$(".tabcon ul").find("li:first").find(".tab_img").addClass("tab_img_active")
									tabimg()
								}
							}
							//年份
							for(var i=0;i<$(".selyear_more .iradio_square-blue").length;i++){
								if($(".selyear_more .iradio_square-blue").eq(i).css("background-position")=="-168px 0px"){
									$(".selyear").html($(".selyear_more label").eq(i).html())
								}
							}
							//季度
							for(var j=0;j<$(".x_more .iradio_square-blue").length;j++){
								if($(".x_more label").eq(j).html().match("月")&&$(".x_more .iradio_square-blue").eq(j).css("background-position")=="-168px 0px"){
									$(".selfour").html($(".x_more label").eq(j).html())
									 date=[ ]
									 date = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
								}else if($(".x_more label").eq(j).html().match("季度")&&$(".x_more .iradio_square-blue").eq(j).css("background-position")=="-168px 0px"){
									for(var i=0;i<$(".selfour_more .iradio_square-blue").length;i++){
										if($(".selfour_more .iradio_square-blue").eq(i).css("background-position")=="-168px 0px"){
											$(".selfour").html($(".selfour_more label").eq(i).html())
											if($(".selfour_more label").eq(i).html().match("一")){
												date = ['1月','2月','3月'];
											}else if($(".selfour_more label").eq(i).html().match("二")){
												date = ['4月','5月','6月'];
											}else if($(".selfour_more label").eq(i).html().match("三")){
												date = ['7月','8月','9月'];
											}else if($(".selfour_more label").eq(i).html().match("四")){
												date = ['10月','11月','12月'];
											}
										}
									}
								}
							}
							
					setCharts('main1');
					 }
			
			//创建图表初始化
			function setCharts(main){
		   // 基于准备好的dom，初始化echarts实例
				var myChart3 = echarts.init(document.getElementById(main),'macarons');
		        // 指定图表的配置项和数据
				function my_data(){
					var data = [];
					for( var i =0; i<date.length; i++){
						data.push(Math.round(Math.random() * (300 - 100) + 150)/10);
					};
					return data;
				}
				var option3 = {
				  
				    tooltip : {
				        show: true, // 是否显示提示框组件 
							trigger: "axis", //坐标轴触发，用在柱状图，折线图等会使用类目轴的图表中使用 
							formatter: function (param){
				            return "<p style='padding:0px 5px;color:#000;'>"+param[0].name +" </p>"
						         + "<p style='padding:0px 6px;padding-right:50px;;color:#000;font-size:14px;line-height:20px;margin-top:20px;'>"+"本月"+ ' </br>' + "<span style='color:#EB8E06'>"+param[0].value+"&nbsp"+$(".dswei").html()+"</span> </p>"
						          + "<p style='padding:0px 6px;padding-right:50px;;color:#000;font-size:14px;line-height:20px;'>"+str+"上期"+ ' </br>' + "<span style='color:#EB8E06'>"+param[1].value+"&nbsp"+$(".dswei").html()+"</span> </p>"
                        },
				    	  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            mark : {show: true},
				            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
				            restore : {show: true},
//				            saveAsImage : {show: true}
				        },
				        
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : true,
				            data : date,
				           
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				        }
				    ],
				     grid: {
				        left: '3%',
				        right: '4%',
				        containLabel: true,
				    },
//				   
				    series : [
				        {
				            name:'照明用电',
				            type:'line',
				            stack: '总量',
				            data:my_data(),
				            itemStyle : {  
                                normal : {  
                                	color: "#369CD5",
                                	lineStyle:{
                                		width:5
                                	}
                                }  
                            },
				        },
				        
				        {
				            name:'走廊应急',
				            type:'line',
				            stack: '总量',
				            data:my_data(),
				            itemStyle : {  
                                normal : {  
                                	color: "#5ABBD8",
                                	lineStyle:{
                                		width:5
                                	}
                                }  
                            },
				        },
//				        {
//				            name:'室外景观',
//				            type:'line',
//				            stack: '总量',
//				            data:my_data(),
//				            itemStyle : {  
//                              normal : {  
//                              	color: "#FFC760"
//                              }  
//                          },
//				        },
				       
//				        {
//				            name:'超级VIP会员',
//				            type:'bar',
//				            stack: '总量',
//				            //itemStyle: {normal: {areaStyle: {type: 'default'}}},
//				            data:my_data()
//				        }
				    ]
			};
			 	myChart3.setOption(option3);
	}