
var http="http://www.paikongtong.com"
var app;   
mui.plusReady(function() {
	app=getStorage("token");   
})  

//获取周开始日期
function getTermInfoData(func) {
    var url =http+ "/tools/term.ashx?act=get_start_date_by_week&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取周
function getDateWeek(start, date, func) {
    var url =http+ "/tools/term.ashx?act=get_week_by_date&start=" + start + "&date=" + date+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取学期列表
function getTermInfoList(p, ps, kw, loading, func) {
    var url =http+ "/tools/term.ashx?act=get_list&p=" + p + "&ps=" + ps + "&kw=" + kw+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取学期单条
function getTermInfo(id, func) {
    var url =http+ "/tools/term.ashx?act=get&id=" + id+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//删除学期
function delTermInfo(ids, func) {
    var url =http+ "/tools/term.ashx?act=delete&ids=" + ids+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//添加学期
function addTermInfo(postData, func) {
    var url =http+ "/tools/term.ashx?act=add&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//修改学期
function updateTermInfo(postData, func) {
    var url =http+ "/tools/term.ashx?act=update&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}