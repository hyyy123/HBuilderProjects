
		 $(function () {
		     //alert($(window).width())
		     //fullpage初始化
		     $('#fullpage').fullpage({
		         'verticalCentered': false,
		         'css3': true,
		         'sectionsColor': ['#254875'],
		         anchors: ['page1', 'page2', 'page3', 'page4'],
		         "scrollOverflow": true,
		         resize: false
		     })

		     var userarray = [
                 ["101", "设备A", "监测", "12F", "停用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["102", "设备A", "监测", "12F", "停用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["103", "设备A", "监测", "11F", "启用", "维修中", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["104", "设备A", "监测", "6F", "停用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["105", "设备A", "监测", "8F", "启用", "报警", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["106", "设备A", "监测", "12F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["107", "设备A", "监测", "11F", "启用", "维修中", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["108", "设备A", "监测", "6F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["109", "设备A", "监测", "8F", "停用", "报警", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["110", "设备A", "监测", "12F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["111", "设备A", "监测", "11F", "启用", "维修中", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["112", "设备A", "监测", "6F", "停用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["113", "设备A", "监测", "8F", "启用", "报警", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["114", "设备A", "监测", "12F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["115", "设备A", "监测", "11F", "启用", "维修中", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["116", "设备A", "监测", "6F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["117", "设备A", "监测", "8F", "启用", "报警", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["118", "设备A", "监测", "12F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["119", "设备A", "监测", "11F", "停用", "维修中", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["120", "设备A", "监测", "6F", "停用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["121", "设备A", "监测", "8F", "启用", "报警", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["122", "设备A", "监测", "12F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["123", "设备A", "监测", "11F", "停用", "维修中", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["124", "设备A", "监测", "6F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["125", "设备A", "监测", "8F", "启用", "报警", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["126", "设备A", "监测", "12F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["127", "设备A", "监测", "11F", "停用", "维修中", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["128", "设备A", "监测", "6F", "启用", "正常", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],
                 ["129", "设备A", "监测", "8F", "启用", "报警", "采集器A", "2016.5.23", " ", "厂家A", "2016.4.12", "", "[修改]", "[删除]"],

		     ]
		     //用户管理
		     //动态添加页数!!!!bug
		     function ye(array, father, num) {
		         for (var i = 1; i < array.length; i++) {
		             if (array.length > num * i) {
		                 $(father).find("ul").append("<li class='fontfamily' >" + i + "</li>")
		             }
		         }
		     }
		     ye(userarray, ".ye", 9)
		     //起始页面
		     for (var i = 0; i < 9; i++) {
		         $("#tablelist").append("<tr><td>" + userarray[i][0] + "</td><td>" + userarray[i][1] + "</td><td>" + userarray[i][2] + "</td><td>" + userarray[i][3] + "</td><td><a href='#' class='handlea lightfather'>" + userarray[i][4] + "</a><span class='light lightgreen'></span></td><td class='state'>"
                                          + userarray[i][5] + "</td><td>" + userarray[i][6] + "</td><td>" + userarray[i][7] + "</td><td>" + userarray[i][8] + "</td><td>" + userarray[i][9] + "</td><td>" + userarray[i][10] + "</td><td>"
                                          + userarray[i][11] + "</td><td class='hand paddinglf0 textcenter'><a href='#'class='handlea '>" + userarray[i][12] + "</a>" + "<a href='#'class='handlea '>" + userarray[i][13] + "</a></td></tr>")

		     }
		     textshadow()
		     //换行变色
		     //$("#tablelist").find("tr:even").css("background", "rgba(0,0,0,0.1)")
		     //文字阴影函数
		     function textshadow() {
		         for (var i = 0; i < $("#tablelist tr").length; i++) {
                     //文字阴影
		             $(".state").eq(i).removeClass("greenshadow")
		             $(".state").eq(i).removeClass("redshadow")
		             $(".state").eq(i).removeClass("yellowshadow")
		             if ($(".state").eq(i).html() == "正常") {
		                 $(".state").eq(i).addClass("greenshadow")
		             } else if ($(".state").eq(i).html() == "报警") {
		                 $(".state").eq(i).addClass("redshadow")
		             } else if ($(".state").eq(i).html() == "维修中") {
		                 $(".state").eq(i).addClass("yellowshadow")
		             }
		             //是否启用

		             $(".light").eq(i).removeClass("lightgreen")
		             $(".light").eq(i).removeClass("lightgrey")
		             if ($(".lightfather").eq(i).html() == "启用") {
		                 $(".light").eq(i).addClass("lightgreen")
		             } else if ($(".lightfather").eq(i).html() == "停用") {
		                 $(".light").eq(i).addClass("lightgrey")
		             } 
		         }

		     }
	
		    

		     //翻页动态添加
		     function changecon(num) {
		         //移除
		         $("#tablelist").find("tr").not(".tabletitle").remove();//用户管理      
		         $("#tablelist_log").find("tr").not(".tabletitle").remove(); //日志管理

		         //内容切换
		         //用户管理      
		         //第一个
		         if (num.html() == "1") {
		             for (var i = 0; i < 9; i++) {
		                 $("#tablelist").append("<tr><td>" + userarray[i][0] + "</td><td>" + userarray[i][1] + "</td><td>" + userarray[i][2] + "</td><td>" + userarray[i][3] + "</td><td><a href='#' class='handlea lightfather'>" + userarray[i][4] + "</a><span class='light lightgreen'></span></td><td class='state'>"
                                         + userarray[i][5] + "</td><td>" + userarray[i][6] + "</td><td>" + userarray[i][7] + "</td><td>" + userarray[i][8] + "</td><td>" + userarray[i][9] + "</td><td>" + userarray[i][10] + "</td><td>"
                                         + userarray[i][11] + "</td><td class='hand paddinglf0 textcenter'><a href='#'class='handlea '>" + userarray[i][12] + "</a>" + "<a href='#'class='handlea '>" + userarray[i][13] + "</a></td></tr>")

		             }
		         }
		         //其他
		         for (var j = 2; j <= $(".ye ul li").length; j++) {
		             if (num.html() == j) {
		                 for (var i = 9 * (j - 1) ; i < 9 * j; i++) {
		                     $("#tablelist").append("<tr><td>" + userarray[i][0] + "</td><td>" + userarray[i][1] + "</td><td>" + userarray[i][2] + "</td><td>" + userarray[i][3] + "</td><td><a href='#' class='handlea lightfather'>" + userarray[i][4] + "</a><span class='light lightgreen'></span></td><td class='state'>"
                                          + userarray[i][5] + "</td><td>" + userarray[i][6] + "</td><td>" + userarray[i][7] + "</td><td>" + userarray[i][8] + "</td><td>" + userarray[i][9] + "</td><td>" + userarray[i][10] + "</td><td>"
                                          + userarray[i][11] + "</td><td class='hand paddinglf0 textcenter'><a href='#'class='handlea '>" + userarray[i][12] + "</a>" + "<a href='#'class='handlea '>" + userarray[i][13] + "</a></td></tr>")

		                 }
		             }
		         }
		         textshadow()
		     }

		        
		     //翻页
		     function fanye(ye) {
		         var sum = 0;
		         var left = 0;//偏移
		         $(ye).find(".fontfamily").eq(0).addClass("liactive")
		         //单击
		         $(ye).find(".fontfamily").click(function () {
		             $(ye).find(".fontfamily").removeClass("liactive")
		             $(this).addClass("liactive")
		             changecon($(this))
		         })
		         //上一页
		         $(ye).find(".before").click(function () {
		             $(ye).find(".fontfamily").removeClass("liactive")
		             //active显示
		             if (sum == 0) {
		                 sum = 0
		             } else {
		                 sum--;
		             }
		             //多个数组时候移动页数
		             if (sum < 3) {
		                 left = 0
		             } else {
		                 left += 32
		             }
		             $(ye).find(".ye_con ul").css("left", left + "px")
		             $(ye).find(".fontfamily").removeClass("liactive")
		             $(ye).find(".fontfamily").eq(sum).addClass("liactive")
		             changecon($(ye).find(".fontfamily").eq(sum))
		         })
		         //下一页
		         $(ye).find(".next").click(function () {
		             //active显示
		             if (sum == $(ye).find(".fontfamily").length - 1) {
		                 sum = $(ye).find(".fontfamily").length - 1;
		             } else {
		                 sum++;

		             }
		             //多个数组时候移动页数
		             if (sum >= $(ye).find(".fontfamily").length - 3) {
		                 left = -32 * ($(ye).find("ul li").length - 3)
		             } else {
		                 left -= 32
		             }
		             $(ye).find(".ye_con ul").css("left", left + "px")
		             $(ye).find(".fontfamily").removeClass("liactive")
		             $(ye).find(".fontfamily").eq(sum).addClass("liactive")
		             changecon($(ye).find(".fontfamily").eq(sum))
		         })
		     }
		     fanye(".ye")
		   })

