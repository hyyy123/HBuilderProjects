//=======================================================获取课程时间=======================================================
var courseArray = new Array();
function setCourseArr(func,errorFuc) {
    getCustomTimeConfig("course_time", function (data) {
        //console.log(JSON.stringify(data));
        if (data.data.config != "" && data.data.config != "[]") {
            courseArray = $.parseJSON(data.data.config);
            if (func != undefined) {
                func();
            }
        }
    }, function (data) {
        if (errorFuc != undefined) {
            errorFuc(data);
        }
    })
}
//时间转化课程
function timeToCourse(time, type) {
    var hour = parseInt(time.split(':')[0], 10);
    var minute = parseInt(time.split(':')[1], 10);
    var totalMinute = hour * 60 + minute;

    for (var i = 0; i < courseArray.length; i++) {
        var startHour = parseInt(courseArray[i].start_hour, 10);
        var startMinute = parseInt(courseArray[i].start_minute, 10);
        var sMinute = startHour * 60 + startMinute;

        var endHour = parseInt(courseArray[i].end_hour, 10);
        var endMinute = parseInt(courseArray[i].end_minute, 10);
        var eMinute = endHour * 60 + endMinute;

        if (type == 0) {
            if (totalMinute >= sMinute && totalMinute < eMinute) {
                return courseArray[i].name;
            }
        }
        else {
            if (totalMinute > sMinute && totalMinute <= eMinute) {
                return courseArray[i].name;
            }
        }
    }
    return "";
}
//获取节次时间
function getStartTime(selector) {
    if (selector == undefined) {
        return courseArray[0].start_hour + ":" + courseArray[0].start_minute;
    } else {
        var index = jsonApplyDataIndex($(selector).val() == -1 ? 0 : $(selector).val());
        if (index == -1) {
            layerTip("提示", "时间错误", -1);
        } else {
            return courseArray[index].start_hour + ":" + courseArray[index].start_minute;
        }
    }
}
function getEndTime(selector) {
    if (selector == undefined) {
        return courseArray[courseArray.length - 1].end_hour + ":" + courseArray[courseArray.length - 1].end_minute;
    } else {
        var index = jsonApplyDataIndex($(selector).val() == -1 ? courseArray.length - 1 : $(selector).val());
        if (index == -1) {
            layerTip("提示", "时间错误", -1);
        } else {
            return courseArray[index].end_hour + ":" + courseArray[index].end_minute;
        }
    }
}
//=======================================================获取课程时间=======================================================
//=======================================================获取学期数据===========================================================
var weekData = new Array();
function setWeekData(func) {
    getTermInfoData(function (data) {
        //console.log(JSON.stringify(data));
        if (data.msg > 0) {
            weekData = data.data;
            if (func != undefined) {
                func();
            }
        }
    })
}
//获取周开始日期
function getStartDate(selector) {
    if (selector == undefined) {
        return weekData[0].start;
    } else {
        if (nCheck(selector)) {
            var week = selector;
        } else {
            if ($(selector).val() == null) {
                return weekData[0].end;
            } else {
                var week = ($(selector).val() == 0 ? 0 : $(selector).val());
            }
        }
        if (weekData[jsonApplyDataIndex(weekData, week, "week")] == undefined) {
            layerTip("提示", "周次选择错误", -1);
        } else {
            return weekData[jsonApplyDataIndex(weekData, week, "week")].start;
        }
    }
}
//获取周结束日期
function getEndDate(selector) {
    if (selector == undefined) {
        return weekData[weekData.length - 1].end;
    } else {
        if (nCheck(selector)) {
            var week = selector;
        } else {
            if ($(selector).val() == null) {
                return weekData[0].end;
            } else {
                var week = ($(selector).val() == 0 ? weekData.length - 1 : $(selector).val());
            }
        }
        if (weekData[jsonApplyDataIndex(weekData, week, "week")] == undefined) {
            layerTip("提示", "周次选择错误", -1);
        } else {
            return weekData[jsonApplyDataIndex(weekData, week, "week")].end;
        }
    }
}
function nCheck(num) {
    var reg = new RegExp("^[0-9]*$");
    if (!reg.test(num)) {
        return false;
    } else {
        return true;
    }
}
//根据日期获取周数
function getWeekByDate(startDate, date) {
    return parseInt(dateDiff(new Date(startDate).format("yyyy/MM/dd"), date) / 7) + 1;
}
//根据周数获取日期
function getDateByWeeks(date, week) {
    var sdate = addDate(date, (week - 1) * 7);
    var edate = addDate(date, week * 7 - 1);
    return { sdate: sdate, edate: edate };
}
//=======================================================获取学期数据===========================================================

//根据周和星期获取日期
function getDateByweekAndDay(itemDay, weekTxt) {
    var sweek = 1, eweek = 1, weeks = ",";
    var weekJson = weekTxt.split(",");
    for (var i = 0; i < weekJson.length; i++) {
        //console.log(weekJson[i])
        var lastLength = weekJson.length - 1;
        if (i == 0) {
            if (weekJson[0].indexOf("-") > -1) {
                sweek = weekJson[0].split("-")[0];
            } else {
                sweek = weekJson[0];
            }
        }
        if (i == lastLength) {
            if (weekJson[lastLength].indexOf("-") > -1) {
                eweek = weekJson[lastLength].split("-")[1];
            } else {
                eweek = weekJson[lastLength];
            }
        }

        if (weekJson[i].indexOf("-") > -1) {
            var weekJsons = weekJson[i].split("-");
            for (var j = weekJsons[0]; j < parseInt(weekJsons[1]) + 1; j++) {
                weeks += j + ',';
            }
        } else {
            weeks += weekJson[i] + ',';
        }
    }

    var sdate = addDate(weekData[sweek - 1].start, itemDay - 1);
    var edate = addDate(weekData[eweek - 1].start, itemDay - 1);
    return { sweek: sweek, eweek: eweek, weeks: weeks, sdate: sdate, edate: edate }
}
function isInweek(sweek, eweek, d) {
    var weeks = getDateByweekAndDay(d.day, d.week).weeks;
    if (weeks.indexOf("," + sweek + ",") > -1 || weeks.indexOf("," + eweek + ",") > -1) {
        return true;
    }
    return false;
}
//根据时间获取课程数据
function getCourseInfoByTime(s, e) {
    var stime = s;
    var etime = e;
    var sname = timeToCourse(stime, 0);
    var ename = timeToCourse(etime, 1);
    var sIndex = jsonApplyDataIndex(courseArray, sname, "name");
    var eIndex = jsonApplyDataIndex(courseArray, ename, "name");
    var courseTxt = sname == ename ? sname : sname + ' - ' + ename;
    return { stime: stime, etime: etime, sname: sname, ename: ename, sIndex: sIndex, eIndex: eIndex, courseTxt: courseTxt }
}