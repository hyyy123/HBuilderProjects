	var date = ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00',
							'17:00','18:00','19:00','20:00','21:00','22:00','23:00',"24:00"];
		
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
			 	
			//点击切换X轴数据
				$(".sel ul li").click(function(){
						$(".sel ul li").removeClass("sel_active")
						$(this).addClass("sel_active")
						if($(this).html().match("年")){
							 date=[ ]
							 date = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
							$(".consel_year").css("display",'inline-block')
							$(".consel_month").css("display",'none')
							$(".consel_day").css("display",'none')
						}else if($(this).html().match("月")){
							 date=[ ]
							 date = ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日',
							 '19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'];
							$(".consel_year").css("display",'inline-block')
							$(".consel_month").css("display",'inline-block')
							$(".consel_day").css("display",'none')
						
						}else if($(this).html().match("日")){
							 date=[ ]
							 date = ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00',
							'17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'];
							$(".consel_year").css("display",'inline-block')
							$(".consel_month").css("display",'inline-block')
							$(".consel_day").css("display",'inline-block')
						}
			 	setCharts('main1');
				})
				$(".consel_year").change(function(){
					setCharts('main1');
				})
				$(".consel_month").change(function(){
					setCharts('main1');
				})
				$(".consel_day").change(function(){
					setCharts('main1');
				})
			});
			//点击提交事件
			function pointsel(){
				$(".iradio_square-blue").has("input[name=po]")
				for(var i=0;i<$(".iradio_square-blue").has("input[name=po]").length;i++){
								if($(".iradio_square-blue").has("input[name=po]").eq(i).css("background-position")=="-168px 0px"){
									$(".region .selpo").html($(".checklist li").has("input[name=po]").find("label").eq(i).html())
										
								}
							}
			 	setCharts('main1');
			}
			//创建图表初始化
			function setCharts(main){
		   // 基于准备好的dom，初始化echarts实例
		  		var myChart1= echarts.init(document.getElementById('pizza'),'macarons');
				var myChart3 = echarts.init(document.getElementById(main),'macarons');
		        // 指定图表的配置项和数据
				function my_data(){
					var data = [];
					for( var i =0; i<date.length; i++){
						data.push(Math.round(Math.random() * (300 - 100) + 150)/10);
					};
					return data;
				}
				//柱状图
				var option3 = {
				  
				    tooltip : {
				        show: true, // 是否显示提示框组件 
							trigger: "axis", //坐标轴触发，用在柱状图，折线图等会使用类目轴的图表中使用 
							formatter: function (param){
				            return "<p style='padding:0px 5px;color:#000;'>"+param[0].name +" </p>"
						         + "<p style='padding:0px 5px;color:#000;font-size:14px;'>&nbsp&nbsp"+$(".dataf_kind .footer li").eq(0).text() + ' : ' + "<span style='color:#EB8E06'>"+param[0].value+"&nbspk·wh</span></p>"
						         + "<p style='padding:0px 5px;color:#000;font-size:14px'>&nbsp&nbsp"+$(".dataf_kind .footer li").eq(1).text() + ' : ' + "<span style='color:#EB8E06'>"+param[1].value+"&nbspk·wh</span></p>"
						         + "<p style='padding:0px 5px;color:#000;font-size:14px'>&nbsp&nbsp"+$(".dataf_kind .footer li").eq(2).text() + ' : ' + "<span style='color:#EB8E06'>"+param[2].value+"&nbspk·wh</span></p>"
						         + "<p style='padding:0px 5px;color:#000;font-size:14px'>"+"标准值" + ' : ' + "<span style='color:#EB8E06'>36.8&nbspkwh</span></p>"
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
				            saveAsImage : {show: true}
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
				            type:'bar',
				            barMaxWidth : 30,
				            data:my_data(),
				            itemStyle : {  
                                normal : {  
                                	color: "#5FC8E6"
                                }  
                            },
				        },
				        
				        {
				            name:'走廊应急',
				            type:'bar',
				            barMaxWidth : 30,
				            data:my_data(),
				            itemStyle : {  
                                normal : {  
                                	color: "#62CD20"
                                }  
                            },
				        },
				        {
				            name:'室外景观',
				            type:'bar',
				            barMaxWidth : 30,
				            data:my_data(),
				            itemStyle : {  
                                normal : {  
                                	color: "#FFC760"
                                }  
                            },
				        },
				       
//				        {
//				            name:'超级VIP会员',
//				            type:'bar',
//				            stack: '总量',
//				            //itemStyle: {normal: {areaStyle: {type: 'default'}}},
//				            data:my_data()
//				        }
				    ]
			};
				//pizza
				var option = {
//					    tooltip : {
//					        trigger: 'item',
//					        formatter: "{a} <br/>{b} : {c} ({d}%)"
//					    },
					    toolbox: {
					        show : true,
					        feature : {
					            mark : {show: true},
//					            dataView : {show: true, readOnly: false},
					            magicType : {
					                show: true, 
					                type: ['pie', 'funnel'],
					                option: {
					                    funnel: {
					                        x: '25%',
					                        width: '50%',
					                        funnelAlign: 'center',
					                        max: 1548
					                    }
					                }
					            },
//					            restore : {show: true},
//					            saveAsImage : {show: true}
					        }
					    },
					    calculable : true,
					    series : [
					        {
					            name:'能耗占比',
					            type:'pie',
					            radius : ['30%', '80%'],
//					            itemStyle : {
//					                normal : {
////					                    label : {
////					                        show : true
////					                    },
////					                    labelLine : {
////					                        show : true
////					                    }
//					                },
					                label: {
						                normal: {
						                	formatter: '{d}%',
						                    show: true,
						                    position: 'inner',
						                   
						                    textStyle: {
						                        fontSize: '10',
						                       
						                        fontWeight: 'normal',
												color:"#fff"
						                    }
						                },
//					                emphasis : {
//					                    label : {
//					                        show : true,
//					                        position : 'inner',
//					                        textStyle : {
//					                            fontSize : '12',
//					                            fontWeight : 'normal',
//												color:"#fff"
//					                        }
//					                    }
//					                }
					            },
					            data:[
					                {value:335, name:'区域a耗电量'},
					                {value:310, name:'区域b耗电量'},
					                {value:234, name:'区域c耗电量'},
					            ]
					        }
					    ]
				};
			 	
			 	myChart1.setOption(option);
			 	myChart3.setOption(option3);
			 	
	}