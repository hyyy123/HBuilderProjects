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
			 	//数据视图循环
			 		plus( )
			 	
			//点击切换X轴数据
			$(".data_time").change(function(){
					if($(this).val().match("日")){
						date=[ ]
						 date = ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00',
							'17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'];
							//数据视图刷新
							 		plus( )
					}else if($(this).val().match("周")){
						 date=[ ]
						 date = ['周一','周二','周三','周四','周五','周六','周日'];
							//数据视图刷新
						 		plus( )
					}
					$(".data_time").val($(this).val())
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
			//dataview动态添加
			 function plus( ){
			 	for(j=1;j<$(".dataview .table_list").find("tr").length-1;j++){
				 	$(".dataview .table_list").find("tr").eq(0).children().not(".namef").remove()
				 	$(".dataview .table_list").find("tr").eq(j).children().not(".namef").remove()
				 	for(var i=0;i<date.length;i++){
						$(".dataview .table_list").find("tr").eq(0).append("<td class='fontsize12'>"+date[i]+"</td>")
						$(".dataview .table_list").find("tr").eq(j).append("<td >"+Math.round(Math.random() * (30 - 10) + 10)+"</td>")
					}
				}
			 	//hover效果
				 for(var i=1;i<$(".dataview tr").length-1;i++){
					$(".dataview tr").eq(i).find("td").not(".namef").hover(function(){
						$(".dataview tr").has(this).css({"background-color":"rgba(0,0,0,0.2)"})
						for(var j=0;j<$(".dataview tr").length-1;j++){
							$(".dataview tr").eq(j).find("td").eq($(this).index()).css({"background-color":"rgba(0,0,0,0.2)"})
						}
					},function(){
						$(".dataview tr").has(this).css({"background-color":"rgba(0,0,0,0)"})
						for(var j=0;j<$(".dataview tr").length-1;j++){
							$(".dataview tr").eq(j).find("td").eq($(this).index()).css({"background-color":"rgba(0,0,0,0)"})
						}
					})
				}
			 //dataview自适应时删减
			var len=$(".dataview .table_list").find("tr").length
			if($(window).width()<=1200&&$(".dataview .table_list").find("tr").length==len){
				var num=0
				for(j=0;j<len;j++){
					num=num+2
				for(i=0;i<$(".dataview .table_list").find("tr").length;i++){
					$(".dataview .table_list").find("tr").eq(i).children("td").eq(num).remove()
					$(".dataview .table_list").find("tr").eq(i).children("td").eq(num+1).remove()
					$(".dataview .table_list").find("tr").eq(i).children("td").eq(num+2).remove()
				}
				}
			}
			if($(window).width()<=600&&$(".dataview .table_list").find("tr").length==len){
				var num=0
				for(j=0;j<len;j++){
					num=num+2
				for(i=0;i<$(".dataview .table_list").find("tr").length;i++){
					$(".dataview .table_list").find("tr").eq(i).children("td").eq(num).remove()
					$(".dataview .table_list").find("tr").eq(i).children("td").eq(num+1).remove()
					$(".dataview .table_list").find("tr").eq(i).children("td").eq(num+2).remove()
				}
				}
			}
			//打印导出按钮自适应行宽
			 var a=$(".dataview .table_list tr").eq(0).has(".namef").children().length
				$(".dataview .table_list tr .print").attr("colspan",a)
			
			
			//自适应删减
			 if($(window).width()<=350&&$(".dataview .table_list").find("tr").length==len){
				var num=0
				for(j=0;j<len;j++){
					num=num+2
				for(i=0;i<$(".dataview .table_list").find("tr").length;i++){
					$(".dataview .table_list").find("tr").eq(i).children("td").eq(num-1).remove()
					$(".dataview .table_list").find("tr").eq(i).children("td").eq(num).remove()
				}
				}
			}
			 
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
						         + "<p style='padding:0px 5px;color:#000;font-size:14px;'>"+$(".dataf_kind .footer li").eq(0).text() + ' : ' + "<span style='color:#EB8E06'>"+(param[0].value+"&nbsp"+$(".dataf_font .danwei").html()) +"</span>"+" </p>"
						         + "<p style='padding:0px 5px;color:#000;font-size:14px'>"+$(".dataf_kind .footer li").eq(1).text() + ' : ' + "<span style='color:#EB8E06'>"+(param[1].value+"&nbsp"+$(".dataf_font .danwei").html()) +"</span>"+" </p>"
						         + "<p style='padding:0px 5px;color:#000;font-size:14px'>"+$(".dataf_kind .footer li").eq(2).text() + ' : ' + "<span style='color:#EB8E06'>"+(param[2].value+"&nbsp"+$(".dataf_font .danwei").html()) +"</span>"+" </p>"
						         + "<p style='padding:0px 5px;color:#000;font-size:14px'>"+"&nbsp;&nbsp;&nbsp;"+"标准值" + ' : ' + "<span style='color:#EB8E06'>"+("36.8"+"&nbsp"+$(".dataf_font .danwei").html()) +"</span>"+" </p>"
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
				            data : date
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
				    series : [
				        {
				            name:'照明用电',
				            type:'line',
				            stack: '总量',
				            barMaxWidth : 30,
				            data:my_data()
				        },
				        {
				            name:'走廊应急',
				            type:'line',
				            stack: '总量',
				            data:my_data()
				        },
				        {
				            name:'室外景观',
				            type:'line',
				            stack: '总量',
				            data:my_data()
				        }
				    ]
			};
			 	myChart3.setOption(option3);
	}