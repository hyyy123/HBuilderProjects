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
			  
			 	setCharts("main1"); //
			 	setCharts("main2"); //调用
			 	
			});
			//创建图表初始化
			function setCharts(main){
				 var  ras="150%"
				 var po = "80%"
				 var le = '52%'
			      var bold =45
		        if($(window).width()<1580&&$(window).width()>991){
			        ras="100%"
			        po = "70%"
			        le = '48%'
			        bold =30
		        }
		          if($(window).width()<415){
			        ras="100%"
			        po = "70%"
			        le = '48%'
			        bold =30
		        }
		   	// 基于准备好的dom，初始化echarts实例
				var myChart3 = echarts.init(document.getElementById(main),'macarons');
			     
				var  option3 = {
		              tooltip : {  
						     formatter: "{a}: {c}%"  
						},    
				   series : [  
				         {     
				           startAngle: 180,  
				           endAngle: 0,  
				           name:'舒适度占比',  
				           type:'gauge',  
				           center: [le, po],    // 默认全局居中  
				           radius :ras,  
				           min:0,  
				           max:100,  
				           splitNumber:10,  
				           axisLine: {            // 坐标轴线  
				               lineStyle: {       // 属性lineStyle控制线条样式  
				                   color:[[1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
												 offset: 0,
							                color: 'rgba(255,255,255,0)'
							            },{
							                offset: 1,
							                color: 'rgba(255,255,255,1)'
							            }])]],  
				                   width: bold 
				               }  
				           },  
				           axisTick: {show:false},  
				           axisLabel: {            // 坐标轴小标记  
				               textStyle: {       // 属性lineStyle控制线条样式  
				                   fontWeight: 'bolder',  
				                   fontSize : 16,  
				                   color: 'rgba(255,255,255,0)'
				               }  
				           },  
				           splitLine: {           // 分隔线  
				               length : 0,         // 属性length控制线长  
				               lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式  
				                   width:1,  
				                   color: '#444'  
				               }  
				           },  
				           pointer: {           // 分隔线  
				               color:'#666666',  
				               width: 8,  
				               length:"80%"  
				           },  
				           detail: {
                                show:false,
				                offsetCenter: [0, '20%'],       // x, y，单位px ,
				                formatter: function(){
				                	return '今日舒适度评价：差';
                        		 },
				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				                    fontWeight: 'normal',
                            		  fontSize: 14,
				                    color: '#fff'
				                }
				           },  
				           data:[{value: 50}]  
				       },
				      
				       {     
				           startAngle: 180,  
				           endAngle: 0,  
				           name:'计划完成',  
				           type:'gauge',  
				           center : [le, po],    // 默认全局居中  
				           radius : ras,  
				           min:0,  
				           max:100,  
				           splitNumber:10,  
				           axisLine: {            // 坐标轴线  
				               lineStyle: {       // 属性lineStyle控制线条样式  
				                   color:[[1, '#A4182D']],  
				                   width: bold  
				               }  
				           },  
				           axisTick: {show:false},  
				           axisLabel: {
				           	formatter: function(v){
			                    switch (v+''){
			                        case '0': return '0';
			                        case '50': return '50';
			                        case '100': return '100';
			                        default: return '';
			                    }
			                },
			                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
			                    color: '#fff',
			                    fontSize: 15,
			                    fontWeight: 'bolder',
			                    
			                }},  
				           splitLine: {length:0},  
				           pointer: {           // 分隔线  
				           	
				               color:'#EB7D64',  
				               width: 0,  
				               length: 250  
				           },  
				          detail : {  
				               show : false  
				           },  
				            
				           data:[{value: "今日舒适度：差"}]  
				       }, 
				   ]  
          }
			 	myChart3.setOption(option3);
	}