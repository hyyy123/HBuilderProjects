var all = parseUrl();
var token = all["token"];
var area_id = all["area_id"];
var code = all["code"];
var id = all["id"];
var http = "http://www.cabr-emc.com";
mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	var token = self.token; //获取当前页面所属的id 
	jQuery("a").each(function(i) {
		if(jQuery(this).attr("href") != "" && jQuery(this).attr("href") != undefined && jQuery(this).attr("href").indexOf("#") == -1) {

			jQuery(this).attr("href", jQuery(this).attr("href") + "&code=" + code + "&id=" + id);

			//									console.log(jQuery(this).attr("href"))
		}
	})
initTab();
});
function initTab() {
    $("#rundevice").children().remove();
    $("#rundata").children().remove();
    var nowmonth = new Date().getMonth() + 1;
    var runcolddevice = [
        {
            name: "冷水机组", son: [
              {
                  name: "k1",
                  id: "wateronoff1",
              }, {
                  name: "k2",
                  id: "wateronoff2",
              }, {
                  name: "k3",
                  id: "wateronoff3",
              }
            ]
        },
        {
            name: "冷冻水泵", son: [
                {
                    name: "1#",
                    id: "coldonoff1",
                },
                {
                    name: "2#",
                    id: "coldonoff2",
                },
                {
                    name: "3#",
                    id: "coldonoff3",
                } 
            ]
        },
        {
            name: "冷却水泵", son: [
                {
                    name: "k1主",
                    id: "coolonoff1",
                }, {
                    name: "k2主",
                    id: "coolonoff3",
                }, {
                    name: "k3主",
                    id: "coolonoff5",
                },
                {
                    name: "k1备",
                    id: "coolonoff2",
                },
                
                {
                    name: "k2备",
                    id: "coolonoff4",
                },
                
                {
                    name: "k3备",
                    id: "coolonoff6",
                }

            ]
        },
    ];
    var runcolddata = [
     { name: "冷冻供水温度", son: ["value44", "value44", "value44"], unit: "℃" },
     { name: "冷冻回水温度", son: ["value45", "value45", "value45"], unit: "℃" },
     { name: "冷却供水温度", son: ["value49", "value49", "value49"], unit: "℃" },
     { name: "冷却回水温度", son: ["value48", "value48", "value48"], unit: "℃" },
      { name: "冷冻回水压力", son: ["value79"], unit: "MPa" },
     { name: "冷冻供水压力", son: ["value78"], unit: "MPa" },
     { name: "冷冻水流量", son: ["value62"], unit: "m³" },
    ];
    var runhotdevice = [
        {
            name: "板换机组", son: [
                  {
                      name: "1#",
                      id: "onoff1",
                  }, {
                      name: "2#",
                      id: "onoff2",
                  }, {
                      name: "3#",
                      id: "onoff3",
                  }
            ]
        },
        {
            name: "循环水泵", son: [
                    {
                        name: "1#",
                        id: "looponoff1",
                    }, {
                        name: "2#",
                        id: "looponoff2",
                    }, {
                        name: "3#",
                        id: "looponoff3",
                    }
            ]
        },
    ];
    var runhotdata = [ 
        { name: "一次进水压力", son: ["value101", "value101", "value101"], unit: "MPa" },
        { name: "一次回水压力", son: ["value102", "value102", "value102"], unit: "MPa" },
        { name: "二次进水压力", son: ["value103", "value103", "value103"], unit: "MPa" },
        { name: "二次回水压力", son: ["value104", "value104", "value104"], unit: "MPa" },
        { name: "一次进水温度", son: ["value105", "value105", "value105"], unit: "℃" },
        { name: "一次回水温度", son: ["value106", "value106", "value106"], unit: "℃" },
        { name: "二次进水温度", son: ["value107", "value107", "value107"], unit: "℃" },
        { name: "二次回水温度", son: ["value108", "value108", "value108"], unit: "℃" },
        { name: "变频运行状态", son: ["value109", "value109", "value109"], unit: "" },
        { name: "变频运行频率", son: ["value110", "value110", "value110"], unit: "kw" },
        { name: "一次侧流量", son: ["value111", "value111", "value111"], unit: "m³" },
        { name: "二次侧流量", son: ["value112", "value112", "value112"], unit: "m³" },
    ] 
    //11月1日 到 3月31日为供暖期
    if (nowmonth >= 11 || nowmonth <= 3) {
        //设备
        var hotdevicehtml = "";
        var hotdatahtml = "";
        for (var i = 0; i < runhotdevice.length; i++) {
            hotdevicehtml += '<tr>';
            hotdevicehtml += '<td  width="130"> <p class="fontsize12">' + runhotdevice[i].name + '</p> </td>';
            hotdevicehtml += '<td align="left">';
            hotdevicehtml += '<ul class="clearfix">';

            for (var j = 0; j < runhotdevice[i].son.length; j++) {
                hotdevicehtml += '<li class="pull-left"><span class="bgcolorgreen" id=' + runhotdevice[i].son[j].id + '>' + runhotdevice[i].son[j].name + '</span></li>';
            }
            hotdevicehtml += '</ul>';
            hotdevicehtml += '</td>';
            hotdevicehtml += '</tr>';
        }
        ////数据 
        hotdatahtml += '<tr>';
        hotdatahtml += '<td width="130"> <p class="fontsize12">运行数据</p> </td>';
        hotdatahtml += '<td> <p class="fontsize12">1#</p> </td>';
        hotdatahtml += '<td> <p class="fontsize12">2#</p> </td>';
        hotdatahtml += '<td> <p class="fontsize12">3#</p> </td>';
        hotdatahtml += '</tr>'; 
        for (var i = 0; i < runhotdata.length; i++) {
            hotdatahtml += '<tr>';
            hotdatahtml += '<td> <span class="fontsize12">' + runhotdata[i].name + '</span> </td>';
            
                for (var j = 0; j < runhotdata[i].son.length; j++) {
                    hotdatahtml += '<td > <span class="fontsize12    ' + runhotdata[i].son[j] + '"></span>&nbsp;&nbsp;' + runhotdata[i].unit + '</td>';
                } 
            
            hotdatahtml += '</tr>';
        } 
        //console.log(hotdevicehtml);
        $("#rundevice").append($(hotdevicehtml).fadeIn(500))
        $("#rundata").append($(hotdatahtml).fadeIn(500))
    } else {
        //设备
        var colddevicehtml = "";
        var colddatahtml = "";
        for (var i = 0; i < runcolddevice.length; i++) {
            colddevicehtml += '<tr>';
            colddevicehtml += '<td> <p class="fontsize12">' + runcolddevice[i].name + '</p> </td>';
            colddevicehtml += '<td align="left">';
            colddevicehtml += '<ul class="clearfix">';
          
                for (var j = 0; j < runcolddevice[i].son.length; j++) {
                    colddevicehtml += '<li class="pull-left"><span class="lightgrey" id=' + runcolddevice[i].son[j].id + '>' + runcolddevice[i].son[j].name + '</span></li>';
                } 
            colddevicehtml += '</ul>';
            colddevicehtml += '</td>';
            colddevicehtml += '</tr>';
        }
        //数据
        colddatahtml += '<tr>';
        colddatahtml += '<td width="130"> <p class="fontsize12">运行数据</p> </td>';
        colddatahtml += '<td> <p class="fontsize12">1#</p> </td>';
        colddatahtml += '<td> <p class="fontsize12">2#</p> </td>';
        colddatahtml += '<td> <p class="fontsize12">3#</p> </td>';
        colddatahtml += '</tr>';
        for (var i = 0; i < runcolddata.length; i++) {
            colddatahtml += '<tr>';
            colddatahtml += '<td> <p class="fontsize12">' + runcolddata[i].name + '</p> </td>';
            if (runcolddata[i].name == "冷冻回水压力") {
                colddatahtml += '<td align="center"  colspan="3"> <p class="fontsize12  "><span class="' + runcolddata[i].son[0] + '"></span>&nbsp;&nbsp;' + runcolddata[i].unit + '</p></td>';
            } else if (runcolddata[i].name == "冷冻供水压力") {
                colddatahtml += '<td align="center"  colspan="3"> <p class="fontsize12  "><span class="' + runcolddata[i].son[0] + '"></span>&nbsp;&nbsp;' + runcolddata[i].unit + '</p></td>';
            } else if (runcolddata[i].name == "冷冻水流量") {
                colddatahtml += '<td align="center"  colspan="3"> <p class="fontsize12 "><span class="' + runcolddata[i].son[0] + '"></span>&nbsp;&nbsp;' + runcolddata[i].unit + '</p></td>';
            } else {
                for (var j = 0; j < runcolddata[i].son.length; j++) {
                    colddatahtml += '<td align="left"> <p class="fontsize12 "><span class="' + runcolddata[i].son[j] + '"></span>&nbsp;&nbsp;' + runcolddata[i].unit + '</p></td>';
                }
                colddatahtml += '</tr>';
            }
        }
        //console.log(colddevicehtml);
        $("#rundevice").append($(colddevicehtml).fadeIn(500))
        $("#rundata").append($(colddatahtml).fadeIn(500))
    }
    getData();
//  getArea();
}
function getData() { 
	var nwaiting = plus.nativeUI.showWaiting(); //显示原生等待框 
    var option = {
        codes: "7,2-1-1,3,4",
        area_id: area_id
    }
      mui.ajax(http + '/tools/EcmDataTime.ashx', {
		data: {
			action: 'get_monitor_data', 
			codes: option.codes,
			area_id: option.area_id, 
			token: token
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) { 
		var item = data.data;
        var msg = data.msg;
        	overTime(msg)
        if (msg > 0) {
        	nwaiting.close();
            //console.log(JSON.stringify(item));
            for (var i = 0; i < item.length; i++) {
                initdata(item[i]);
            }
           
        }
			//
		}
	});

 
}
function initdata(item) {
    //热

    status(1, "#onoff1");
    status(1, "#onoff2");
    status(1, "#onoff3");
    if (item.code == "4-1$1") {
        status(item["value109"], "#looponoff1");

        $(".value101").eq(0).html(item["value101"]);
        $(".value102").eq(0).html(item["value102"]);
        $(".value103").eq(0).html(item["value103"]);
        $(".value104").eq(0).html(item["value104"]);
        $(".value105").eq(0).html(item["value105"]);
        $(".value106").eq(0).html(item["value106"]);
        $(".value107").eq(0).html(item["value107"]);
        $(".value108").eq(0).html(item["value108"]);
        if (parseInt(item["value109"]) == 0) {
            $(".value109").eq(0).html("停止");
        } else {
            $(".value109").eq(0).html("运行");
        }

        $(".value110").eq(0).html(item["value110"]);
        $(".value111").eq(0).html(item["value111"]);
        var value112 = (item["value112"] / 3).toFixed(2);
        $(".value112").eq(0).html(value112);
    }
    if (item.code == "4-2$1") {
        status(item["value109"], "#looponoff2");

        $(".value101").eq(1).html(item["value101"]);
        $(".value102").eq(1).html(item["value102"]);
        $(".value103").eq(1).html(item["value103"]);
        $(".value104").eq(1).html(item["value104"]);
        $(".value105").eq(1).html(item["value105"]);
        $(".value106").eq(1).html(item["value106"]);
        $(".value107").eq(1).html(item["value107"]);
        $(".value108").eq(1).html(item["value108"]);
        if (parseInt(item["value109"]) == 0) {
            $(".value109").eq(1).html("停止");
        } else {
            $(".value109").eq(1).html("运行");
        }

        $(".value110").eq(1).html(item["value110"]);
        $(".value111").eq(1).html(item["value111"]);
        var value112 = (item["value112"] / 3).toFixed(2);
        $(".value112").eq(1).html(value112);
    }
    if (item.code == "4-3$1") {
        status(item["value109"], "#looponoff3");

        $(".value101").eq(2).html(item["value101"]);
        $(".value102").eq(2).html(item["value102"]);
        $(".value103").eq(2).html(item["value103"]);
        $(".value104").eq(2).html(item["value104"]);
        $(".value105").eq(2).html(item["value105"]);
        $(".value106").eq(2).html(item["value106"]);
        $(".value107").eq(2).html(item["value107"]);
        $(".value108").eq(2).html(item["value108"]);
        if (parseInt(item["value109"]) == 0) {
            $(".value109").eq(2).html("停止");
        } else {
            $(".value109").eq(2).html("运行");
        }

        $(".value110").eq(2).html(item["value110"]);
        $(".value111").eq(2).html(item["value111"]);
        var value112 = (item["value112"] / 3).toFixed(2);
        $(".value112").eq(2).html(value112);
    }
    //冷水机组  
    $(".value79").html(item["value79"]);
    $(".value78").html(item["value78"]);


    status(item["value71"], "#coldonoff1");
    status(item["value72"], "#coldonoff2");
    status(item["value73"], "#coldonoff3");

    status(item["value82"], "#coolonoff1");
    status(item["value82"], "#coolonoff2");
    status(item["value83"], "#coolonoff3");
    status(item["value83"], "#coolonoff4");
    status(item["value84"], "#coolonoff5");
    status(item["value84"], "#coolonoff6");

    if (item.code == "3-1$1") {

        status(item["value41"], "#wateronoff1");

        $(".value44").eq(0).html(item["value44"]);
        $(".value45").eq(0).html(item["value45"]); 
        $(".value62").eq(0).html(item["value62"]);
        $(".value49").eq(0).html(item["value49"]);
        $(".value48").eq(0).html(item["value48"]);
    }
    if (item.code == "3-2$1") { 
        status(item["value41"], "#wateronoff2");

        $(".value44").eq(1).html(item["value44"]);
        $(".value45").eq(1).html(item["value45"]); 
        $(".value62").eq(1).html(item["value62"]);
        $(".value49").eq(1).html(item["value49"]);
        $(".value48").eq(1).html(item["value48"]);
    }
    if (item.code == "3-3$1") {


        if (item["value41"] == 1 || item["value57"] > 100) {

            $("#wateronoff3").removeClass("bgcolorgray");
            $("#wateronoff3").addClass("bgcolorgreen");
            //$(".value101")
        } else {
            $("#wateronoff3").removeClass("bgcolorgreen");
            $("#wateronoff3").addClass("bgcolorgray");
        }

        $(".value44").eq(2).html(item["value44"]);
        $(".value45").eq(2).html(item["value45"]);
        $(".value62").eq(2).html(item["value62"]);
        $(".value49").eq(2).html(item["value49"]);
        $(".value48").eq(2).html(item["value48"]);
    }
}