var all=parseUrl();
var token= all["token"];
mui.plusReady(function() {
	mui.init();
	 swiperfunc();

    setCurrentSlide($(".nav ul li").eq(0), 0, "冷水机组");
    jQuery(".remove").click(function () {
        jQuery(".main").addClass("hide");

    })
});
function swiperfunc() {
  

    var swiper = new Swiper('.swiper1', { 
        slidesPerView: 5.5,
        paginationClickable: true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        spaceBetween: 10,//slide之间的距离（单位px）。
        freeMode: true,//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
        loop: false,//是否可循环
        onTab: function (swiper) {
            var n = swiper1.clickedIndex;
            //console.log(n)
        }
    });
    swiper.slides.each(function (index, val) {
        var ele = jQuery(this);
        ele.on("click", function () {
            var elename = ele.find("a").html();

            setCurrentSlide(ele, index, elename);

            jQuery(".main").addClass("hide");

        });
    });
     

} 
function setCurrentSlide(ele, index, elename) {
    jQuery(".swiper1 .swiper-slide").removeClass("navlihover");
    ele.addClass("navlihover");
    //图片
    var imgid = index + 1;
    jQuery(".faimg").children().remove();
    jQuery(".faimg").append('<img src="../img/icon/decice' + imgid + '.png" />');
    //卡片 
    jQuery(".swipermsg .swiper-wrapper").children().remove();
    var cardhtml = "";
    for (var i = 0; i < facilityJson.length; i++) {
        if (facilityJson[i].name == elename) {
            var falen;
            if (imgid == 4) {
                falen = 4;
            } else if (imgid == 1) {
                falen = 0;
            } else {
                falen = 2; 
            } 
            var nowcode;
            if (imgid == 2) {
                nowcode = "1-1-1-2";
            } else if (imgid == 3) {
                nowcode = "1-1-1-1";
            } else if (imgid == 4) {
                nowcode = "1-1-1-3";
            } else if (imgid == 5) {
                nowcode = "1-1-2";
            }

            for (var j = 0; j < facilityJson[i].son.length; j++) {
                cardhtml += '<div class="swiper-slide">';
                if (imgid == 1) {
                    if (j == 0) {
                        nowcode = "1-1-1-5"; 
                    } else if (j == 1) {
                        nowcode = "1-1-1-6";
                    } else if (j == 2) {
                        nowcode = "1-1-1-7";

                    }
                }
                //卡片 
                cardhtml += '<div class="faname faitem ">'; 

                cardhtml += '<p class="faitemname" id=' + facilityJson[i].son[j].data + '>' + facilityJson[i].son[j].name + '<a class="pull-right" onclick="getChartData(\'' + nowcode + '\')">查看图表</a> </p>';
                cardhtml += '<ul>';
                if (imgid == 1) {
                    
                    cardhtml += '<li class="clearfix"><p class="pull-left">运行状态</p><p class="pull-left value41"></p></li>'; 
                } else if (imgid == 5) {

                    cardhtml += '<li class="clearfix"><p class="pull-left">运行状态</p><p class="pull-left value109"></p></li>';
                    cardhtml += '<li class="clearfix"><p class="pull-left">运行频率(Hz)</p><p class="pull-left value110"></p></li>';
                } else {
                    for (var k = 0; k < falen; k++) {
                        cardhtml += '<li class="clearfix"><p class="pull-left">' + facilityJson[i].son[j].param[k].name + '</p><p class="pull-left" id=' + facilityJson[i].son[j].param[k].id + '></p></li>';

                    }
                } 
                cardhtml += '</ul>'; 
                cardhtml += '</div>';

                //内容
                cardhtml += '<div class="facon">';
                cardhtml += '<div class="faitem">';
                cardhtml += '<p class="faitemname">额定参数</p>';
                cardhtml += '<ul>'; 
                    for (var k = falen; k < facilityJson[i].son[j].param.length; k++) { 
                        
                        cardhtml += '<li class="clearfix"><p class="pull-left">' + facilityJson[i].son[j].param[k].name + '</p><p class="pull-left"  id=' + facilityJson[i].son[j].param[k].id + '>' + facilityJson[i].son[j].param[k].value + ' </p></li>';

                    } 
                cardhtml += '</ul>';
                cardhtml += '</div>';
                cardhtml += '</div>';

                //冷水机组
                if (imgid == 1) {
                    for (var l = 0; l < heating_cool_data.length; l++) {
                        cardhtml += '<div class="facon">';
                        cardhtml += '<div class="faitem">';
                        cardhtml += '<p class="faitemname">' + heating_cool_data[l].name + '</p>';
                        cardhtml += '<ul>';
                        for (var m = 0; m < heating_cool_data[l].data.length; m++) {

                            cardhtml += '<li class="clearfix"><p class="pull-left">' + heating_cool_data[l].data[m].name  + '</p><p class="pull-left ' + heating_cool_data[l].data[m].son[0] + '" >---</p></li>';

                        }
                        cardhtml += '</ul>';
                        cardhtml += '</div>';
                        cardhtml += '</div>';
                    }

                }
                 

                cardhtml += '</div>';
            }
        }
    }
    jQuery(".swipermsg .swiper-wrapper").append(cardhtml);

    var myswiper = new Swiper('.swipermsg', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents: true,//修改swiper的父元素时，自动初始化swiper ,


        onSlideChangeEnd: function (swiper) {
            myswiper.update(); //swiper更新
            //alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide 
        }
    });

    
    setAreaData();
}


//dataview获取数据(总)
function setAreaData() { 
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
    var postData = {
        codes: "3,7,1-1-1-3,4",
        area_id: 1
    }
     var http = "http://www.iwesong.com:8056";
	mui.ajax(http + '/tools/EcmDataTime.ashx', {
		data: {
			action: 'get_monitor_data',
			codes: postData.codes, 
			area_id:postData.area_id,
			token:token
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//获得服务器响应 
//			alert(JSON.stringify(data));
        var item = data.data;
        var msg = data.msg;
        if (msg > 0) {
				nwaiting.close();
            //console.log(item)
            //console.log(JSON.stringify(item))
            for (var i = 0; i < item.length; i++) {
                initAreaData(item[i]);
            } 
        }
		}
	}); 
}
var item31, item32, item33;
//dataview连接数据(其他)
function initAreaData(item) {
    //console.log(item)
    $("#value74").html(item["value74"]);
    $("#value75").html(item["value75"]);
    $("#value76").html(item["value76"]);

    $("#value78").html(item["value78"]);
    $("#value79").html(item["value79"]);
    for (var i = 88; i < 94; i++) {
        $("#value" + i + "").html(item["value" + i + ""]);
    }
    if (item["value84"] == 1) {
        $("#value90").html("工频运行")
    }
    if (item["value87"] == 1) {
        $("#value93").html("工频运行")
    }
    //console.log(item["value93"])
    //console.log(item["value90"])
    //冷却塔功率
    if (item.code == "1-1-1-3$1") {
        $("#coolpower").html(item.p_total);
        //$(".value44")
    }

    $(".value79").html(item["value79"]);
    $(".value78").html(item["value78"]);
    if (item.code == "3-1$1") { 
        item31 = item;
        for (var i = 43; i < 60; i++) {
            $(".value" + i).eq(0).html(item["value" + i]);
        }

        $(".value62").eq(0).html(item["value62"]);
        $(".value78").eq(0).html(item["value78"]);
        $(".value79").eq(0).html(item["value79"]);
    }
    if (item.code == "3-2$1") {
        item32 = item;
        for (var i = 43; i < 53; i++) {
            $(".value" + i).eq(1).html(item["value" + i]);
        }
        for (var i = 57; i < 59; i++) {
            $(".value" + i).eq(1).html(item["value" + i]);
        }

        $(".value60").eq(1).html(item["value60"]);

        $(".value62").eq(1).html(item["value62"]);
        $(".value78").eq(1).html(item["value78"]);
        $(".value79").eq(1).html(item["value79"]);
    }
    if (item.code == "3-3$1") {
        item33 = item;
        if (item["value41"] == 1 || item["value57"] > 100) {

            $("#wateronoff3").removeClass("lightgrey");
            $("#wateronoff3").addClass("lightgreen");
            //$(".value101")
        } else {
            $("#wateronoff3").removeClass("lightgreen");
            $("#wateronoff3").addClass("lightgrey");
        }

        for (var i = 43; i < 53; i++) {
            $(".value" + i).eq(2).html(item["value" + i]);
        }
        for (var i = 57; i < 59; i++) {
            $(".value" + i).eq(2).html(item["value" + i]);
        }
        $(".value60").eq(2).html(item["value60"]);

        $(".value62").eq(2).html(item["value62"]);
        $(".value78").eq(2).html(item["value78"]);
        $(".value79").eq(2).html(item["value79"]);
    }

    $(".value41").html("停止");

    var avgvalue48 = 0;
    var avgvalue49 = 0;
    var onsum = 0;

    if (item31 != undefined && item32 != undefined && item33 != undefined) { 
 
        //console.log(JSON.stringify(item31) + "+" + JSON.stringify(item32) + "+" + JSON.stringify(item33));
 
        //冷却泵1开启
        if (parseInt(item31["value41"]) == 1) {

            $(".value41").eq(0).html("运行");

            onsum += 1;
            avgvalue48 += parseFloat(item31["value48"]);
            avgvalue49 += parseFloat(item31["value49"]);
//          
//        console.log(avgvalue48);
//        console.log(avgvalue49);
        }
        //冷却泵2开启
        if (parseInt(item32["value41"]) == 1) {
            $(".value41").eq(1).html("运行");
            onsum += 1;
            avgvalue48 += parseFloat(item32["value48"]);
            avgvalue49 += parseFloat(item32["value49"]);

        }
        //冷却泵3开启
        if (parseInt(item33["value41"]) == 1) {
            $(".value41").eq(2).html("运行");
            onsum += 1; 
            avgvalue48 += parseFloat(item33["value48"]);
            avgvalue49 += parseFloat(item33["value49"]);
        }
        //console.log(onsum);
        if(onsum==0){
        	onsum=1;
        }
        var avgvalue48 = avgvalue48 / onsum;
        var avgvalue49 = avgvalue49 / onsum; 
//        console.log(avgvalue48);
//        console.log(avgvalue49);
        $("#value48").html(avgvalue48.toFixed(2));
        $("#value49").html(avgvalue49.toFixed(2));

        var nummul = avgvalue49 - avgvalue48;

        $("#tempvalue").html(nummul.toFixed(2));
    }





    //热循环
    if (item.code == "4-1$1") {
        if (parseInt(item["value109"]) == 0) {
            $(".value109").eq(0).html("停止");
        } else {
            $(".value109").eq(0).html("运行");
        }
        $(".value110").eq(0).html(item["value110"]);
    }
    if (item.code == "4-2$1") {
        if (parseInt(item["value109"]) == 0) {
            $(".value109").eq(1).html("停止");
        } else {
            $(".value109").eq(1).html("运行");
        }
        $(".value110").eq(1).html(item["value110"]);
    }
    if (item.code == "4-3$1") {
        if (parseInt(item["value109"]) == 0) {
            $(".value109").eq(2).html("停止");
        } else {
            $(".value109").eq(2).html("运行");
        }
        $(".value110").eq(2).html(item["value110"]);

    }

    statusDevice(item["value71"], "#value71");
    statusDevice(item["value72"], "#value72");
    statusDevice(item["value73"], "#value73");
    statusDevice(item["value82"], "#value82");
    statusDevice(item["value83"], "#value83");
    statusDevice(item["value84"], "#value84");
    statusDevice(item["value85"], "#value85");
    statusDevice(item["value86"], "#value86");
    statusDevice(item["value87"], "#value87");
}
//开启关闭状态
function statusDevice(value, name) {
    if (value == 1) {
        $(name).html("运行")
    } else {
        $(name).html("停止")
    }
}

//图表数据接口
function getChartData(nowcode) {
    jQuery(".main").removeClass("hide");
    //console.log(nowcode)
    var option = {};
    option.time_modal = 1;
    option.device_id = nowcode;
    option.area_id = 1;
    option.sort = 1;
    option.type = 1;
    option.start_date_time = new Date().format("yyyy/MM/dd");
    option.loading = "#main1";

	var http = "http://www.iwesong.com:8056";
    jQuery("#main1").children().remove();
    if (nowcode == "1-1-2") {
	mui.ajax(http + '/tools/EcmDataDay.ashx', {
		data: {
			action: 'get_data_chart_by_day',
			sort: option.sort,
			type: option.type,
			area_id: option.area_id,
			codes: option.device_id,
			start_date_time: option.start_date_time ,
			token:token
//			loading: option.loading
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//获得服务器响应 
			jQuery("#main1").children().remove();

			var item = data.data;
			var msg = data.msg;
//			alert(JSON.stringify(item)) 
            if (msg > 0) {
                var xLine = item.x;//X轴
                var chartData = [];//图表数据  
                var optionList = [{ device_name: "换热站电源" }];
                var chartItem = { name: optionList[0].device_name, type: 'line', barMaxWidth: 30, smooth: 0.5, data: item[nowcode] };
                chartData.push(chartItem);
                setChartsView('main1', optionList, chartData, xLine); //调用 

            }
		}
	});
    } else { 
	mui.ajax(http + '/tools/EcmDataDay.ashx', {
		data: {
			action: 'get_device_data_chart', 
			area_id: option.area_id,
			codes: option.device_id,
			start_date_time: option.start_date_time ,
			time_modal:1,
			token:token
//			loading: option.loading
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//获得服务器响应 
			jQuery("#main1").children().remove();

			var item = data.data;
			var msg = data.msg;
//			alert(JSON.stringify(item)) 
            if (msg > 0) {

                console.log(item)
                var xLine = item.x;//X轴
                var zLine = item.z;
                var chartData = [];//图表数据
                //console.log(zLine)
                for (var i = 0; i < zLine.length; i++) {
                    var code = zLine[i].code;
                    var name = zLine[i].device_name;
                    var chartItem = { name: name, type: 'line', barMaxWidth: 30, smooth: 0.5, data: item[code] };
                    chartData.push(chartItem);
                }; 
                setChartsView('main1', zLine, chartData, xLine); //调用  
            }
		}
	});
    }

}
//创建图表初始化
function setChartsView(main, optionList, chartData, xLine) {
    console.log(chartData)
    // 基于准备好的dom，初始化echarts实例
    var myChart3 = echarts.init(document.getElementById(main), 'macarons');
    // 指定图表的配置项和数据


    var option3 = {

        tooltip: {
            show: true, // 是否显示提示框组件 
            trigger: "axis", //坐标轴触发，用在柱状图，折线图等会使用类目轴的图表中使用 
            formatter: function (param) {
                //console.log(param);
                var htmljson = new Array;
                var showhtml = "";
                showhtml += "<p style='padding:0px 5px;margin:0;color:#000;text-align:left;'>" + new Date().format("yyyy.MM.dd") + " </p>";
                showhtml += "<p style='padding:0px 5px;color:#000;text-align:left;'>" + param[0].name + " </p>";

                for (var i = optionList.length - 1; i >= 0; i--) {
                    var nowhtml = "<p style='padding:0px 5px;color:#000;font-size:14px;width:100%;'><span style='display:inline-block;text-align:left;min-width:100px;'>" + optionList[i].device_name + '</span> : ' + "<span style='display:inline-block;color:#EB8E06;min-width:50px;text-align:right;' >" + (param[i].value + "&nbspkwh") + "</span>" + " </p>"
                    var htmlsignal = { value: param[i].value, html: nowhtml };
                    htmljson.push(htmlsignal)
                }

                return sortJsonHtml(htmljson, showhtml);

            },
            position: ['5%', '50%'],
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                //saveAsImage: { show: true, backgroundColor: "#000" }
            },
            top: 20,
            right: 10

        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: xLine,

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位:kwh',
                nameGap: 25
                //max:"40"
            }
        ],
        grid: {
            left: '3%',
            right: '4%',
            containLabel: true
        },
        //				   
        series: chartData,

        legend: {
            data: function () {
                var legendname = new Array;
                for (var i = 0; i < chartData.length; i++) {
                    legendname.push(chartData[i].name);
                }
                return legendname
            }(),
            bottom: 20,
            textStyle: {
                color: '#fff'
            }
        },
        //title: [{
        //    left: 'center',
        //    text: function () {

        //        var title = new Date().format("yyyy/MM/dd") + "设备能耗"

        //        return title;
        //    }(),
        //    textStyle: {
        //        //width: "100%",
        //        color: '#ccc',
        //        fontSize: 18,
        //        fontWeight: 'bold',
        //    },
        //}]
    };
    myChart3.setOption(option3);
}