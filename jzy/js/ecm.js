var http = "http://www.cabr-emc.com";



/*=============================================首页=============================================*/
//获取环境参数
function getEnvironment(area_id, func) {
    var url = http + "/tools/EcmEnvironment.ashx?action=get&area_id=" + area_id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取结构参数
function getStructure(area_id, func) {
    var url = http + "/tools//EcmStructure.ashx?action=get&area_id=" + area_id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取能耗
function getEnergy(area_id, func) {
    var url = http + "/tools//EcmDataDay.ashx?action=get_data_index&area_id=" + area_id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取分类数据
function getKind(code, func) {
    var url = http + "/tools//EcmDataDay.ashx?action=get_data_all_building&code=" + code;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取最新预警
function getNewError(area_id,func) {
    var url = http + "/tools/EcmError.ashx?action=get_last_error&area_id=" + area_id;
    //console.log(url);
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

/*=============================================能耗=============================================*/
//获取能耗详细、分项能耗、设备能耗、能耗预测、能耗对标
function getchart(sort, type, area_id, device_id, func) {
    var url = http + "/tools//EcmDataDay.ashx?action=get_data_chart&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&device_id=" + device_id;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
function getChartNew(option, func) {
    var sort = option.sort;
    var type = option.type;
    var area_id = option.area_id;
    var device_id = option.device_id;
    var start_date_time = option.start_date_time;
    var end_date_time = option.end_date_time;
    var loading;
    //console.log(option);
    if (option.loading != undefined) {
        loading = option.loading;
    } else {
        loading = "";
    }

    var url = "";
    var postData = ""
    if (sort == 1) {
        //url = http + "/tools/EcmDataDay.ashx?action=get_data_chart_by_day";
        var url = http + "/tools/EcmDataMonth.ashx?action=get_data_detail_search_by_custom";
        postData = "time_modal=1&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;
    }
    else if (sort == 2) {
        //url = http + "/tools/EcmDataDay.ashx?action=get_data_chart_by_month";
        var url = http + "/tools/EcmDataMonth.ashx?action=get_data_detail_search_by_custom";
        postData = "time_modal=2&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    else if (sort == 3) {
        //url = http + "/tools/EcmDataDay.ashx?action=get_data_chart_by_year";
        var url = http + "/tools/EcmDataMonth.ashx?action=get_data_detail_search_by_custom";
        postData = "time_modal=3&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    else if (sort == 4) {
        var url = http + "/tools/EcmDataMonth.ashx?action=get_data_detail_search_by_custom";
        var postData = "time_modal=1&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    else if (sort == 5) {
        var url = http + "/tools/EcmDataMonth.ashx?action=get_data_detail_search_by_custom";
        var postData = "time_modal=2&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    else if (sort == 6) {
        var url = http + "/tools/EcmDataMonth.ashx?action=get_data_detail_search_by_custom";
        var postData = "time_modal=3&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    else if (sort == 7) {
        var url = http + "/tools/EcmDataMonth.ashx?action=get_data_detail_search_by_custom";
        var postData = "time_modal=4&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    //console.log(postData)
    //console.log(postData)
    postAjax(url, postData, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
function outChart(option, func) {
    var sort = option.sort;
    var type = option.type;
    var area_id = option.area_id;
    var device_id = option.device_id;
    var names = option.names;
    var start_date_time = option.start_date_time;
    var end_date_time = option.end_date_time;
    var loading;
    //console.log(option);
    if (option.loading != undefined) {
        loading = option.loading;
    } else {
        loading = "";
    }

    var url = "";
    var postData = ""
    if (sort == 1) {
        url = http + "/tools/EcmDataDay.ashx?action=export_data_chart_by_day";
        postData = "sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&names=" + names + "&start_date_time=" + start_date_time;
    }
    else if (sort == 2) {
        url = http + "/tools/EcmDataDay.ashx?action=export_data_chart_by_month";
        postData = "sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&names=" + names + "&start_date_time=" + start_date_time;

    }
    else if (sort == 3) {
        url = http + "/tools/EcmDataDay.ashx?action=export_data_chart_by_year";
        postData = "sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&names=" + names + "&start_date_time=" + start_date_time;

    }
    else if (sort == 4) {
        var url = http + "/tools/EcmDataMonth.ashx?action=export_data_detail_search_by_custom";
        var postData = "time_modal=1&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&names=" + names + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    else if (sort == 5) {
        var url = http + "/tools/EcmDataMonth.ashx?action=export_data_detail_search_by_custom";
        var postData = "time_modal=2&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&names=" + names + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    else if (sort == 6) {
        var url = http + "/tools/EcmDataMonth.ashx?action=export_data_detail_search_by_custom";
        var postData = "time_modal=3&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&names=" + names + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    else if (sort == 7) {
        var url = http + "/tools/EcmDataMonth.ashx?action=export_data_detail_search_by_custom";
        var postData = "time_modal=4&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&names=" + names + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;

    }
    //console.log(postData)
    postAjax(url, postData, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

function getDeviceDataChart(option, func) {

    var area_id = option.area_id;
    var device_id = option.device_id;
    var start_date_time = option.start_date_time;
    var end_date_time = option.end_date_time;
    var time_modal = option.time_modal;
    var loading = option.loading;

    var url = http + "/tools/EcmDataDay.ashx?action=get_device_data_chart";
    var postData = "area_id=" + area_id + "&codes=" + device_id + "&start_date_time=" + start_date_time + "&time_modal=" + time_modal;

    //console.log(postData)
    postAjax(url, postData, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
function outDeviceDataChart(option, func) {

    var area_id = option.area_id;
    var device_id = option.device_id;
    var names = option.names;
    var start_date_time = option.start_date_time;
    var end_date_time = option.end_date_time;
    var time_modal = 1;
    //var loading = option.loading;

    var url = http + "/tools/EcmDataDay.ashx?action=export_device_data_chart";
    var postData = "area_id=" + area_id + "&codes=" + device_id + "&names=" + names + "&start_date_time=" + start_date_time + "&time_modal=" + time_modal;

    //console.log(postData)
    postAjax(url, postData, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取能耗总览
function getallEnergy(func) {
    var url = http + "/tools//EcmDataDay.ashx?action=get_data_total";
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取顶级能耗数据
function getTopEnergy(option, func) {
    var loading = option.loading;
    var area_id = option.area_id;
    var url = http + "/tools/EcmDataDay.ashx?action=get_data_total_top&area_id=" + area_id;
    getAjax(url, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取能耗总览
function getEnergyNew(option, func) {
    var loading = option.loading;
    var code = option.code;
    var area_id = option.area_id;
    var url = http + "/tools/EcmDataDay.ashx?action=get_data_total_by_week&code=" + code + "&area_id=" + area_id;
    getAjax(url, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取设备能耗
function getallDevice(sort, type, area_id, func) {
    var url = http + "/tools//EcmDataDay.ashx?action=get_data_device&sort=" + sort + "&type=" + type + "&area_id=" + area_id;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取能耗分析
//function getallAnalyze(year, season, area_id, type, func) {
//    var url = http + "/tools//EcmDataMonth.ashx?action=get_data_analyse&year=" + year + "&season=" + season + "&area_id=" + area_id + "&type=" + type;
//    //console.log(url)
//    getAjax(url, true, false, function (data) {
//        if (func != undefined) {
//            func(data);
//        }
//    });
//}
function getallAnalyze(type, date, code, area_id, func) {
    var url = http + "/tools//Statistics.ashx?action=get_analysis_data&type=" + type + "&date=" + date + "&area_id=" + area_id + "&code=" + code;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
function outAnalyze(postData, func) {

    var url = http + "/tools//Statistics.ashx?action=export_analysis_data";

    //console.log(url)
    postAjax(url, postData, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//获取能耗对比
function getallContrast(sort, year, month, day, type, func) {
    var url = http + "/tools//EcmDataMonth.ashx?action=get_data_contrast&sort=" + sort + "&year=" + year + "&month=" + month + "&day=" + day + "&type=" + type;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//录入数据对比
function getallhandwork(year, area_id, type, func) {
    var url = http + "/tools//EcmDataMonth.ashx?action=get_data_analysis&area_id=" + area_id + "&year=" + year + "&type=" + type;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取能耗结构
//function getallStructure(sort, func) {
//    var url = http + "/tools//EcmDataMonth.ashx?action=get_energy_consump&sort=" + sort;
//    //console.log(url)
//    getAjax(url, true, false, function (data) {
//        if (func != undefined) {
//            func(data);
//        }
//    });
//}
function getallStructure(code, type, area_id, exact, func) {
    var url = http + "/tools//EcmDataHour.ashx?action=get_data_tree&code=" + code + "&type=" + type + "&area_id=" + area_id + "&exact=" + 0;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//获取能耗对标
function getallBench(option, func) {
    var start_date = option.start_date;
    var type = option.type;
    var area_id = option.area_id;
    var exact = option.exact;
    var loading = option.loading;
    //console.log(area_id)
    var url = http + "/tools//Statistics.ashx?action=get_benchmarking"
    var postData = "start_date=" + start_date + "&type=" + type + "&area_id=" + area_id + "&exact=" + exact;
    //console.log(postData)

    postAjax(url, postData, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//获取能耗明细
function getallDetail(year, month, day, type, func) {
    var url = http + "/tools//EcmDataMonth.ashx?action=get_data_detail&year=" + year + "&month=" + month + "&day=" + day + "&type=" + type;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//获取能耗明细
//function getDataDetailSearch(option, func) {
//    var sort = option.sort;
//    var type = option.type;
//    var area_id = option.area_id;
//    var device_id = option.device_id;
//    var start_date_time = option.start_date_time;
//    var end_date_time = option.end_date_time;
//    var time_modal = option.time_modal;

//    var url = http + "/tools/EcmDataMonth.ashx?action=get_data_detail_search";
//    var postData = "time_modal=" + time_modal + "&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + device_id + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;
//    console.log(postData)
//    postAjax(url, postData, true, false, function (data) {
//        if (func != undefined) {
//            func(data);
//        }
//    });
//}
//导出能耗明细
function outDetail(option, func) {
    var codes = option.codes;
    var names = option.names;
    var type = option.type;
    var start_date_time = option.start_date_time;
    var end_date_time = option.end_date_time;
    var time_modal = option.time_modal;
    var url = http + "/tools//EcmDataMonth.ashx?action=export_data_detail_search";
    var postData = "time_modal=" + time_modal + "&codes=" + codes + "&type=" + type + "&names=" + names  + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;
     
    postAjax(url, postData, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取能耗明细
function getDataDetailSearch(option, func) {
    var codes = option.codes;
    var type = option.type;
    var area_id = option.area_id;
    var start_date_time = option.start_date_time;
    var end_date_time = option.end_date_time;
    var time_modal = option.time_modal; 
    if (option.loading != undefined) {
        var loading = option.loading;
    } else {
        var loading = "";
    }
    var url = http + "/tools/EcmDataMonth.ashx?action=get_data_detail_search";
    var postData = "time_modal=" + time_modal + "&codes=" + codes + "&type=" + type + "&area_id=" + area_id + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;
    //console.log(postData)

    postAjax(url, postData, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取设备查询明细
function getDataParam(code, date,area_id, func) {

    var url = http + "/tools/EcmDataTime.ashx?action=get_device_param&code=" + code + "&date=" + date + "&area_id=" + area_id;
       //console.log(postData)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//导出设备查询明细
function outDataParam(code, date, area_id, func) {
    var url = http + "/tools/EcmDataTime.ashx?action=export_device_param&code=" + code + "&date=" + date + "&area_id=" + area_id;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取实时数据
//function getReal(type,area_id,sort, func) {
//    var url = http + "/tools//EcmDataHour.ashx?action=get_data_real&sort=" + sort + "&area_id=" + area_id + "&type=" + type;
//    //console.log(url)
//    getAjax(url, true, false, function (data) {
//        if (func != undefined) {
//            func(data);
//        }
//    });
//} 
//获取实时数据电表
function postReal(loading, postData, func) {
    var url = http + "/tools//EcmDataHour.ashx?action=get_data_real";
    //console.log(url)
    postAjax(url, postData, false, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取实时数据图表
function getReal(code, area_id, type, func) {
    var url = http + "/tools//EcmDataHour.ashx?action=get_data&code=" + code + "&area_id=" + area_id + "&type=" + area_id;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//获取温湿度查询图表
function postHumiture(postData, func) {
    var codes = postData.codes;
    var area_id = postData.area_id;
    var start_date_time = postData.start_date_time;
    var end_date_time = postData.end_date_time;
    if (postData.loading != undefined) {
        var loading = postData.loading;
    } else {
        var loading = ""; 
    }
    var url = http + "/tools//EcmDataDay.ashx?action=get_humiture_data_chart_by_day";

    var postData = "codes=" + codes + "&area_id=" + area_id + "&start_date_time=" + start_date_time;
    //console.log(url)
    postAjax(url, postData, false, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}

function outHumiture(postData, func) {
    var codes = postData.codes;
    var area_id = postData.area_id;
    var names = postData.names;
    var start_date_time = postData.start_date_time;
    var end_date_time = postData.end_date_time;
    //var loading = postData.loading;
    var url = http + "/tools//EcmDataDay.ashx?action=export_humiture_data_chart_by_day";

    var postData = "codes=" + codes + "&area_id=" + area_id + "&start_date_time=" + start_date_time;
    if (names != undefined)
    {
        postData += "&names=" + names;
    }
    //console.log(url)
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}

//制冷工艺流程
function coldTechnology(postData, func) {
    var codes = postData.codes;
    var area_id = postData.area_id;
    var exact = postData.exact;
    var type = postData.type;

    var url = http + "/tools//EcmDataTime.ashx?action=get_monitor_data";
    var postData = "codes=" + codes + "&area_id=" + area_id;
    if (exact != undefined) {
        var url = http + "/tools//EcmDataTime.ashx?action=get_monitor_data";
        var postData = "codes=" + codes + "&type=" + type + "&area_id=" + area_id + "&exact=" + exact;

    }
    //console.log(url + postData)
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}


/*=============================================智能监控=============================================*/

//获取设备列表
function getControlList(ps, p, type, kw, func) {
    var url = http + "/tools/EcmControl.ashx?action=get_list&ps=" + ps + "&p=" + p + "&type=" + type + "&kw=" + kw;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取设备详情
function getControl(id, func) {
    var url = http + "/tools/EcmControl.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//修改设备数值
function updateControl(postData, func) {
    var url = http + "/tools/EcmControl.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取设备修改记录
function getControllog(ps, p, func) {
    var url = http + "/tools//EcmControlLog.ashx?action=get_list&ps=" + ps + "&p=" + p;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}



/*=============================================信息管理=============================================*/

//新增区域列表
function addArea(postData, func) {
    var url = http + "/tools/EcmArea.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取区域列表
function getAreaList(p, ps, kw, func) {
    var url = http + "/tools/EcmArea.ashx?action=get_list&p=" + p + "&ps=" + ps + "&kw=" + kw;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//获取开启区域列表
function getOpenAreaList(func) {
    var url = http + "/tools/EcmArea.ashx?action=get_all_list";
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//修改区域信息
function updateArea(postData, func) {
    var url = http + "/tools/EcmArea.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//删除区域信息
function deleteArea(ids, func) {
    var url = http + "/tools/EcmArea.ashx?action=delete&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取区域单条
function getArea(id, func) {
    var url = http + "/tools/EcmArea.ashx?action=get&id=" + id;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取配置列表
function getInfoList(p, ps, kw, func) {
    var url = http + "/tools/EcmSetting.ashx?action=get_list&p=" + p + "&ps=" + ps + "&kw=" + kw;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//新增解析配置
function addInfo(postData, func) {
    var url = http + "/tools/EcmSetting.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取配置单条
function getInfo(id, func) {
    var url = http + "/tools/EcmSetting.ashx?action=get&id=" + id;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//修改解析配置
function updateInfo(postData, func) {
    var url = http + "/tools/EcmSetting.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//修改配置
function updatedetail_Info(postData, func) {
    var url = http + "/tools/EcmSetting.ashx?action=update_detail";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//删除解析配置
function deleteInfo(ids, func) {
    var url = http + "/tools/EcmSetting.ashx?action=delete&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//配置某项
function setInfo(postData, func) {
    var url = http + "/tools/EcmSetting.ashx?action=update_detail";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}

//新增采集器
function addCollector(postData, func) {
    var url = http + "/tools/EcmCollector.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取采集器列表
function getCollectorList(p, ps, type, kw,area_id, func) {
    var url = http + "/tools/EcmCollector.ashx?action=get_list&p=" + p + "&ps=" + ps + "&type=" + type + "&kw=" + kw + "&area_id=" + area_id;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//导出采集器
function outCollectorList(type, kw, func) {
    var url = http + "/tools/EcmCollector.ashx?action=export&type=" + type + "&kw=" + kw;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//修改采集器信息
function updateCollector(postData, func) {
    var url = http + "/tools/EcmCollector.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//修改配置
function updatedetail_Collector(postData, func) {
    var url = http + "/tools/EcmCollector.ashx?action=update_detail";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取采集器单条
function getCollector(id, func) {
    var url = http + "/tools/EcmCollector.ashx?action=get&id=" + id;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//删除采集器信息
function deleteCollector(ids, func) {
    var url = http + "/tools/EcmCollector.ashx?action=delete&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//新增设备
function addDevice(postData, func) {
    var url = http + "/tools/EcmDevice.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取设备列表
function getDeviceList(p, ps, type, area_id, collector_id, status, kw, func) {
    var url = http + "/tools/EcmDevice.ashx?action=get_list&p=" + p + "&ps=" + ps + "&type=" + type + "&area_id=" + area_id + "&collector_id=" + collector_id + "&kw=" + kw + "&status=" + status;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//设备导出
function outDeviceList(type, area_id, collector_id, status, kw, func) {
    var url = http + "/tools/EcmDevice.ashx?action=export&type=" + type + "&area_id=" + area_id + "&collector_id=" + collector_id + "&kw=" + kw + "&status=" + status;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//修改设备信息
function updateDevice(postData, func) {
    var url = http + "/tools/EcmDevice.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取设备单条
function getDevice(id, func) {
    var url = http + "/tools/EcmDevice.ashx?action=get&id=" + id;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//删除设备信息
function deleteDevice(ids, func) {
    var url = http + "/tools/EcmDevice.ashx?action=delete&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}

//增加标准（指标）
function addWarnstand(postData, func) {
    var url = http + "/tools/EcmStandard.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取标准列表（指标）
function getWarnstandList(p, ps, sort, type, func) {
    var url = http + "/tools/EcmStandard.ashx?action=get_list&p=" + p + "&ps=" + ps + "&sort=" + sort + "&type=" + type;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//导出标准列表（指标）
function outWarnstandList(sort, func) {
    var url = http + "/tools/EcmStandard.ashx?action=export&sort=" + sort;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//修改标准信息（指标）
function updateWarnstand(postData, func) {
    var url = http + "/tools/EcmStandard.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}


//获取标准单条
function getWarnstand(id, func) {
    var url = http + "/tools/EcmStandard.ashx?action=get&id=" + id;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//删除标准信息
function deleteWarnstand(ids, func) {
    var url = http + "/tools/EcmStandard.ashx?action=delete&ids=" + ids;
    //console.log(url)
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}

//增加预警标准
function addWarnsafe(postData, func) {
    var url = http + "/tools/EcmAlarm.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//修改预警信息
function updateWarnsafe(postData, func) {
    var url = http + "/tools/EcmAlarm.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取预警列表
function getWarnsafeList(p, ps, type, status, alarm_item, func) {
    var url = http + "/tools/EcmAlarm.ashx?action=get_list&p=" + p + "&ps=" + ps + "&status=" + status + "&type=" + type + "&alarm_item=" + alarm_item;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取预警标准单条
function getWarnsafe(id, func) {
    var url = http + "/tools/EcmAlarm.ashx?action=get&id=" + id;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//删除预警标准信息  
function deleteWarnsafe(ids, func) {
    var url = http + "/tools/EcmAlarm.ashx?action=delete&ids=" + ids;
    //console.log(url)
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取预警标准原因
function getModelReason(type, func) {
    var url = http + "/tools/EcmAbnormalCause.ashx?action=get_by_type&type=" + type;
    //console.log(url)
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//修改预警标准原因
function updateReason(type, cause, deal_with, area_id, func) { 
    var url = http + "/tools/EcmAbnormalCause.ashx?action=update&type=" + type + "&area_id=" + area_id + "&cause=" + cause + "&deal_with=" + deal_with;
    //console.log(url)
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}

/*=============================================手工录入=============================================*/

//手工录入列表（新）
function getHandList(p, ps, year, month, type, func) {
    var url = http + "/tools//EcmDataMonth.ashx?action=get_data_by_month&p=" + p + "&ps=" + ps + "&year=" + year + "&month=" + month + "&type=" + type;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

function outHandList(postData, func) {
    var url = http + "/tools//EcmDataMonth.ashx?action=export_data_by_month";

    //console.log(url)
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}

//修改手工录入（新）
function updateHand(postData, func) {
    var url = http + "/tools//EcmDataMonth.ashx?action=set_month_data";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}


//手工录入批量导入（旧）
function addEntering(postData, func) {
    var url = http + "/tools/EcmEntering.ashx?action=import";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//手工录入导出（旧）
function outEnteringList(name, year, month, day, func) {
    var url = http + "/tools/EcmEntering.ashx?action=export&name=" + name + "&year=" + year + "&month=" + month + "&day=" + day;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//手工录入列表（旧）
function getEnteringList(p, ps, name, year, month, day, func) {
    var url = http + "/tools/EcmEntering.ashx?action=get_list&p=" + p + "&ps=" + ps + "&name=" + name + "&year=" + year + "&month=" + month + "&day=" + day;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//修改手工录入（旧）
function updateEntering(postData, func) {
    var url = http + "/tools/EcmEntering.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}

//数据采集增加
function addCollection(postData, func) {
    var url = http + "/tools/EcmCollection.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//数据采集列表
function getCollectionList(p, ps, area_id, type, func) {
    var url = http + "/tools/EcmCollection.ashx?action=get_list&p=" + p + "&ps=" + ps + "&area_id=" + area_id + "&type=" + type;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//数据采集单条
function getCollection(id, func) {
    var url = http + "/tools/EcmCollection.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//数据采集更改
function updateCollection(postData, func) {
    var url = http + "/tools/EcmCollection.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//数据采集导出
function outCollectionList(area_id, type, func) {
    var url = http + "/tools/EcmCollection.ashx?action=export&type=" + type + "&area_id=" + area_id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
////数据上传增加
//function addUpload(postData, func) {
//    var url = http + "/tools/EcmUpload.ashx?action=add";
//    postAjax(url, postData, false, false, function (data) {
//        if (func != undefined) {
//            func(data);
//        }
//    });
//}
//数据上传列表
function getUploadList(p, ps, area_id, year, month, func) {
    var url = http + "/tools/EcmUpload.ashx?action=get_list&p=" + p + "&ps=" + ps + "&area_id=" + area_id + "&year=" + year + "&month=" + month;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//数据上传导出
function outUploadList(area_id, year, month, func) {
    var url = http + "/tools/EcmUpload.ashx?action=export&area_id=" + area_id + "&year=" + year + "&month=" + month;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取上传设置
function getSend(sort, func) {
    var url = http + "/tools/EcmUploadSetting.ashx?action=get&sort=" + sort;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//上传设置更改
function updateSend(postData, func) {
    var url = http + "/tools/EcmUploadSetting.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}



/*=============================================系统管理=============================================*/
//用户管理增加
function addManager(postData, func) {
    var url = http + "/tools/Manager.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//用户管理修改
function updateManager(postData, func, errorfunc) {
    var url = http + "/tools/Manager.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    }, function (data) {
        if (errorfunc != undefined) {
            errorfunc(data);
        }
    });
}
//用户管理单条
function getManager(id, func) {
    var url = http + "/tools/Manager.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//用户管理删除
function deleteManager(ids, func) {
    var url = http + "/tools/Manager.ashx?action=delete&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//用户管理列表
function getManagerList(p, ps, company_id, depart_id, position_id, status, kw, func) {
    var url = http + "/tools/Manager.ashx?action=get_list&p=" + p + "&ps=" + ps + "&company_id=" + company_id + "&depart_id=" + depart_id + "&position_id=" + position_id + "&status=" + status + "&kw=" + kw;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//用户管理批准
function yesManager(postData, func) {
    var url = http + "/tools/Manager.ashx?action=pass";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//用户管理驳回
function noManager(postData, func) {
    var url = http + "/tools/Manager.ashx?action=nopass";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//用户管理导出
function outManagerList(company_id, depart_id, position_id, status, kw, func) {
    var url = http + "/tools/Manager.ashx?action=export&company_id=" + company_id + "&depart_id=" + depart_id + "&position_id=" + position_id + "&status=" + status + "&kw=" + kw;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//日志管理列表
function managerlogList(p, ps, date, func) {
    var url = http + "/tools/Manager.ashx?action=get_log_list&p=" + p + "&ps=" + ps + "&date=" + date;
    //console.log(url);
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//增加角色
function addRole(postData, func) {
    var url = http + "/tools/ManagerRole.ashx?action=add_role";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//用户角色列表
function getRoleList(p, ps, kw, func) {
    var url = http + "/tools/ManagerRole.ashx?action=get_role_list&p=" + p + "&ps=" + ps + "&kw=" + kw;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//用户角色单条
function getRole(id, func) {
    var url = http + "/tools/ManagerRole.ashx?action=get_role_by_id&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//删除角色
function deleteRole(ids, func) {
    var url = http + "/tools/ManagerRole.ashx?action=delete_role&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//添加角色权限
function addRoleValue(postData, func) {
    var url = http + "/tools/ManagerRole.ashx?action=add_role_value";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//单位添加
function addCompany(postData, func) {
    var url = http + "/tools/EcmCompany.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取单位列表
function getCompanyList(p, ps, kw, func) {
    var url = http + "/tools/EcmCompany.ashx?action=get_list&p=" + p + "&ps=" + ps + "&kw=" + kw;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取单位单条
function getCompany(id, func) {
    var url = http + "/tools/EcmCompany.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//单位修改
function updateCompany(postData, func) {
    var url = http + "/tools/EcmCompany.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//单位删除
function deleteCompany(ids, func) {
    var url = http + "/tools/EcmCompany.ashx?action=delete&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//部门添加
function addDepart(postData, func) {
    var url = http + "/tools/EcmDepart.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取部门列表
function getDepartList(p, ps, kw, company_id, func) {
    var url = http + "/tools/EcmDepart.ashx?action=get_list&p=" + p + "&ps=" + ps + "&kw=" + kw + "&company_id=" + company_id;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取部门单条
function getDepart(id, func) {
    var url = http + "/tools/EcmDepart.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//部门修改
function updateDepart(postData, func) {
    var url = http + "/tools/EcmDepart.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//部门删除
function deleteDepart(ids, func) {
    var url = http + "/tools/EcmDepart.ashx?action=delete&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//职位添加
function addPosition(postData, func) {
    var url = http + "/tools/EcmPosition.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//职位部门列表
function getPositionList(p, ps, kw, company_id, func) {
    var url = http + "/tools/EcmPosition.ashx?action=get_list&p=" + p + "&ps=" + ps + "&kw=" + kw + "&company_id=" + company_id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//职位部门单条
function getPosition(id, func) {
    var url = http + "/tools/EcmPosition.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//职位修改
function updatePosition(postData, func) {
    var url = http + "/tools/EcmPosition.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//职位删除
function deletePosition(ids, func) {
    var url = http + "/tools/EcmPosition.ashx?action=delete&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}

/*=============================================个人资料=============================================*/
//获取个人信息
function managerSelfInfo(p, ps, func) {
    var url = http + "/tools/Manager.ashx?action=get_self_info&p=" + p + "&ps=" + ps;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取个人日志列表
function managerSelfLog(p, ps, func) {
    var url = http + "/tools/Manager.ashx?action=get_self_log&p=" + p + "&ps=" + ps;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//修改密码
function updatePwd(postData, func) {
    var url = http + "/tools/Manager.ashx?action=update_pwd";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//修改头像
function updateImg(postData, func) {
    var url = http + "/tools/Manager.ashx?action=update_img";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

/*=============================================异常=============================================*/
//获取异常列表
function getErrorList(p, ps, type, status,date, func) {
    var url = http + "/tools/EcmError.ashx?action=get_list&p=" + p + "&ps=" + ps + "&type=" + type + "&status=" + status + "&date=" + date;
    //console.log(url);
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取异常详情
function getErrorModel(id, func) {
    var url = http + "/tools/EcmError.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取各状态数量
function getErrorCount(func) {
    var url = http + "/tools/EcmError.ashx?action=get_count";
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//批量修改状态
function updateStatus(postData, func) {
    var url = http + "/tools/EcmError.ashx?action=update_by_ids";

    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//导出报警
function outError(postData, func) {
    var url = http + "/tools/EcmError.ashx?action=export";

    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取异常数据
function getErrorExport(type, status, func) {
    var url = http + "/tools/EcmError.ashx?action=export&type=" + type + "&status=" + status;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//异常处理
function updateReport(postData, func) {
    var url = http + "/tools/EcmError.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//能源审计与节能量分析
function getAudit(postData, func) {

    var start_date = postData.start_date;
    var type = postData.type;
    var area_id = postData.area_id;
    var exact = postData.exact;
    var loading = postData.loading;

    var url = http + "/tools/Statistics.ashx?action=get_year_total";
    var postData = "&start_date=" + start_date + "&type=" + type + "&area_id=" + area_id + "&exact=" + exact;
    postAjax(url, postData, false, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//节能量分析新
function getAuditNew(postData, func) {
    //console.log(postData)
    var start_date = postData.start_date; 
    var type = postData.type;
    var area_id = postData.area_id;
    var time_modal = postData.time_modal;
    var loading = postData.loading;

    var url = http + "/tools/Statistics.ashx?action=get_year_total_new";
    var postData = "&start_date=" + start_date +  "&type=" + type + "&area_id=" + area_id + "&time_modal=" + time_modal;
    postAjax(url, postData, false, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
function getSavingRate(postData, func) {
    //console.log(postData)
    var l1 = postData.l1;
    var l2 = postData.l2;
    var l4 = postData.l4;
    var l1_1 = postData.l1_1;
    var l1_2 = postData.l1_2;
    var l1_3 = postData.l1_3;
    var l1_4 = postData.l1_4;
    var l1_5 = postData.l1_5;
    var lbm = postData.lbm;
    var r1 = postData.r1;
    var r2 = postData.r2;
    var r4 = postData.r4;
    var r1_1 = postData.r1_1;
    var r1_2 = postData.r1_2;
    var r1_3 = postData.r1_3;
    var r1_4 = postData.r1_4;
    var r1_5 = postData.r1_5;
    var rbm = postData.rbm;

    var url = http + "/tools/Statistics.ashx?action=do_saving_rate";
    var postData = "&l1=" + l1 + "&l2=" + l2 + "&l4=" + l4 + "&l1_1=" + l1_1 + "&l1_2=" + l1_2 + "&l1_3=" + l1_3 + "&l1_4=" + l1_4 + "&l1_5=" + 0 + "&lbm=" + lbm + "&r1=" + r1 + "&r2=" + r2 + "&r4=" + r4 + "&r1_1=" + r1_1 + "&r1_2=" + r1_2 + "&r1_3=" + r1_3 + "&r1_4=" + r1_4 + "&r1_5=" + r1_5 + "&rbm=" + rbm;
    //console.log(postData)
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

/*=============================================BIM=============================================*/
function getAreaBycode(code, loading,func) {
    var url = http + "/tools/EcmArea.ashx?action=get_area_by_code&code=" + code;
    //console.log(url)
    getAjax(url, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}


/*=============================================异常诊断=============================================*/


//获取异常诊断列表
function getErrorReport(p, ps, type, start, end, area_id, loading, func) {
    var url = http + "/tools/EcmError.ashx?action=get_report&p=" + p + "&ps=" + ps + "&type=" + type + "&start=" + start + "&end=" + end + "&area_id=" + area_id;
    //console.log(url)
    getAjax(url, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取诊断占比
function getErrorPercent(start, end, area_id, func) {
    var url = http + "/tools/EcmError.ashx?action=get_report_percent&start=" + start + "&end=" + end + "&area_id=" + area_id;
    //console.log(url);
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//导出诊断
function getErrorExportReport(type, start, end, area_id,func) {
    var url = http + "/tools/EcmError.ashx?action=export_report&type=" + type + "&start=" + start + "&end=" + end + "&area_id=" + area_id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

/*=============================================环境=============================================*/

//空气质量 
//获取实时数据 获取下挂表的最新表读数
function getDataReal(code, start_date_time, func) {
    var url = http + "/tools//EcmDataHour.ashx?action=get_data_real&code=" + code + "&start_date_time=" + start_date_time;
//  console.log(url)
    getAjax(url, true, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
function getMonitorData(option, func) {
    var sort = option.sort;
    var type = option.type;
    var area_id = option.area_id;
    var codes = option.codes;
    var start_date_time = option.start_date_time;
    var end_date_time = option.end_date_time;
    var loading;
    //console.log(option);
    if (option.loading != undefined) {
        loading = option.loading;
    } else {
        loading = "";
    }
    var url = "";
    var postData = ""
    var url = http + "/tools/EcmDataMonth.ashx?action=get_monitor_data_detail_search_by_custom";
    var postData = "time_modal=1&sort=" + sort + "&type=" + type + "&area_id=" + area_id + "&codes=" + codes + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time;
    //console.log(postData);
    postAjax(url, postData, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
function getEnvirData(option, func) {
    var time_num = option.time_num;
    var type = option.type;
    var area_id = option.area_id;
    var codes = option.codes;
    var start_date_time = option.start_date_time;
    var end_date_time = option.end_date_time;
    var p = option.p;
    var ps = option.ps;
    var loading;
    //console.log(option);
    if (option.loading != undefined) {
        loading = option.loading;
    } else {
        loading = "";
    }
    var url = "";
    var postData = ""
    var url = http + "/tools/EcmDataMonth.ashx?action=get_envir_data_detail_list";
    var postData = "time_num=" + time_num + "&type=" + type + "&area_id=" + area_id + "&codes=" + codes + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time + "&p=" + p + "&ps=" + ps;
    //console.log(url)
    //console.log(postData);
    postAjax(url, postData, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//结构报表
function getVibrateData(option, func) {
    var time_num = option.time_num;
    var type = option.type;
    var area_id = option.area_id;
    var codes = option.codes;
    var start_date_time = option.start_date_time;
    var end_date_time = option.end_date_time;
    var p = option.p;
    var ps = option.ps;
    var loading;
    //console.log(option);
    if (option.loading != undefined) {
        loading = option.loading;
    } else {
        loading = "";
    }
    var url = "";
    var postData = ""
    var url = http + "/tools/EcmStructure.ashx?action=get_vibrate_data_list";
    var postData = "time_num=" + time_num + "&type=" + type + "&area_id=" + area_id + "&codes=" + codes + "&start_date_time=" + start_date_time + "&end_date_time=" + end_date_time + "&p=" + p + "&ps=" + ps;
    //console.log(url)
    //console.log(postData);
    postAjax(url, postData, true, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

/*=============================================建筑信息=============================================*/
 
//获取建筑信息列表
function getBiuldInfoList(ps, p, func) {
    var url = http + "/tools/EcmAreaReference.ashx?action=get_list&ps=" + ps + "&p=" + p;
    //console.log(url)
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取建筑信息详情
function getBiuldInfo(id, func) {
    var url = http + "/tools/EcmAreaReference.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//修改建筑信息
function updateBiuldInfo(postData, func) {
    var url = http + "/tools/EcmAreaReference.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}


/*=============================================二维码管理=============================================*/
//二维码添加
function addQrcode(postData, func) {
    var url = http + "/tools/Qrcode.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//二维码列表
function getQrcodeList(p, ps, kw, area_id, func) {
    var url = http + "/tools/Qrcode.ashx?action=get_list&p=" + p + "&ps=" + ps + "&kw=" + kw + "&area_id=" + area_id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//二维码超时间列表
function getQrcodeOverList(p, ps, kw, area_id, func) {
    var url = "../../../tools/Qrcode.ashx?action=get_over_date_list&p=" + p + "&ps=" + ps + "&kw=" + kw + "&area_id=" + area_id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//二维码单条
function getQrcode(id, func) {
    var url = http + "/tools/Qrcode.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//二维码单条
function getQrcodeByCode(code, func) {
    var url = http + "/tools/Qrcode.ashx?action=get_by_code&code=" + code;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//二维码修改
function updateQrcode(postData, func) {
    var url = http + "/tools/Qrcode.ashx?action=update";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//二维码删除
function deleteQrcode(ids, func) {
    var url = http + "/tools/Qrcode.ashx?action=delete&ids=" + ids;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//=============================日志============================//
//维保记录添加
function addDeviceLog(postData, func) {
    var url = http + "/tools/EcmDeviceLog.ashx?action=add";
    postAjax(url, postData, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//维保记录列表
function getDeviceLogList(p, ps, kw, device_id,type,start,end, func) {
    var url = http + "/tools/EcmDeviceLog.ashx?action=get_list&p=" + p + "&ps=" + ps + "&kw=" + kw + "&device_id=" + device_id + "&start=" + start + "&end=" + end + "&type=" + type;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//维保记录单条
function getDeviceLog(id, func) {
    var url = http + "/tools/EcmDeviceLog.ashx?action=get&id=" + id;
    getAjax(url, true, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}