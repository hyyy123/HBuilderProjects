
var http="http://www.paikongtong.com"
var app;   
mui.plusReady(function() { 
	app=getStorage("token");    
})  


//获取区域列表
function getRoomAreaLists(func) {
    var url =http+ "/tools/api_rms.ashx?act=get_all_area_list&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取教室类型列表
function getRoomTypeLists(func) {
    var url =http+ "/tools/api_rms.ashx?act=get_type_list&stat=1&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取待审批数量(排课)
function getCourseAuditCount(func) {
    var url =http+ "/tools/api_rms.ashx?act=get_exam_occupy_task_count&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取待审批数量(排教室)
function getRoomAuditCount(loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_exam_task_count&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
 
//新增占用申请
function addLessonApply(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=add_sys_ocpy_task&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//修改占用申请
function updateLessonApply(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=update_ocpy_task&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
function updateLessonApplyBym(postData, func, errorFunc) {
    var url =http+ "/tools/api_rms.ashx?act=update_ocpy_task&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    }, function (data) {
        if (errorFunc != undefined) {
            errorFunc(data);
        }
    });
}
//管理员调课
function addLessonApplyByadmin(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=sys_update_ocpy_task&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//拆分占用申请
function splitLessonApply(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=split_occupy&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
 
//审批通过
function passOccTask(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=do_exam_ocpy_task&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//审批驳回
function rejectOccTask(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=reject_exam_ocpy_task&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//=================================================================调课审批=================================================
//添加排课占用
function addOccupyTime(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=add_occupy&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取占用教师
function getOccupyTeacherList(date_list, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_occupy_tecaher_list&date_list=" + date_list+"&token="+app;
//  console.log(url)
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取课表
function getCourseTableList(sdate, edate, term_start_date, teacher_code, class_code, rsc_ids, loading, isAbort, func) {
    var postData = { sdate: sdate, edate: edate, term_start_date: term_start_date, teacher_code: teacher_code.toString(), class_code: class_code.toString(), rsc_ids: rsc_ids.toString() };
      var url =http+ "/tools/api_rms.ashx?act=get_course_table&token="+app;
    postAjax(url, postData, false, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    }, "", isAbort);
}
//根据教室获取我的课程
function getOccListByrscid(sdate, edate, rsc_ids, type, isAbort, func) {
    var url = http+ "/tools/api_rms.ashx?act=get_occlist_by_rsc_id&sdate=" + sdate + "&edate=" + edate + "&rsc_ids=" + rsc_ids + "&type=" + type+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    }, "", isAbort)
}
//获取教师课表
function getTeacherCourseTableList(sdate, edate, term_start_date, loading, func) {
    var postData = { sdate: sdate, edate: edate, term_start_date: term_start_date };
//  console.log(postData)
    var url =http+ "/tools/api_rms.ashx?act=get_teacher_course_table&token="+app;
    postAjax(url, postData, false, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//根据时间获取占用信息
function getRoomInfoBydate(sdate, edate, stime, etime, func) {
    var url = http+ "/tools/api_rms.ashx?act=get_occlist_by_date&sdate=" + sdate + "&edate=" + edate + "&stime=" + stime + "&etime=" + etime +"&token="+app;
  	getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    }); 
}
//获取占用教室
function getTermRoomList(sdate, edate, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_ocpy_room&sdate=" + sdate + "&edate=" + edate+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取占用班级
function getTermClassList(sdate, edate, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_ocpy_class&sdate=" + sdate + "&edate=" + edate+"&token="+app;
// console.log(url)
   getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//导出教师课表
function exportTeacherCourseTable(sdate, edate, term_start_date, term_name, teacher_code, teacher_name, func) {
    var url =http+ "/tools/api_rms.ashx?act=export_teacher_course_table&sdate=" + sdate + "&edate=" + edate + "&term_start_date=" + term_start_date + "&term_name=" + term_name + "&teacher_code=" + teacher_code + "&teacher_name=" + teacher_name+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
function exportTeacherCourseTableSelf(sdate, edate, term_start_date, term_name, func) {
    var url =http+ "/tools/api_rms.ashx?act=export_teacher_course_table_self&sdate=" + sdate + "&edate=" + edate + "&term_start_date=" + term_start_date + "&term_name=" + term_name+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//导出班级课表
function exportClassCourseTable(sdate, edate, term_start_date, term_name, class_code, class_name, func) {
    var url =http+ "/tools/api_rms.ashx?act=export_class_course_table&sdate=" + sdate + "&edate=" + edate + "&term_start_date=" + term_start_date + "&term_name=" + term_name + "&class_code=" + class_code + "&class_name=" + class_name+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//导出教室课表
function exportRoomCourseTable(sdate, edate, term_start_date, term_name, rsc_id, func) {
    var url =http+ "/tools/api_rms.ashx?act=export_room_course_table&sdate=" + sdate + "&edate=" + edate + "&term_start_date=" + term_start_date + "&term_name=" + term_name + "&rsc_id=" + rsc_id+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//导出课表
function exportCourseTable(sweek, eweek, sdate, edate, term_start_date, teacher_code, class_code, rsc_ids, func) {
    var postData = { sweek: sweek, eweek: eweek, sdate: sdate, edate: edate, term_start_date: term_start_date, teacher_code: teacher_code.toString(), class_code: class_code.toString(), rsc_ids: rsc_ids.toString() };
    var url =http+ "/tools/api_rms.ashx?act=export_total_table&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取课程表
function getScheduleTableList(sdate, edate, term_start_date, class_code, loading, func) {
    var postData = { sdate: sdate, edate: edate, term_start_date: term_start_date, class_code: class_code.toString() };
    var url =http+ "/tools/api_rms.ashx?act=get_schedule_table&token="+app;
    postAjax(url, postData, false, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//导出课程表
function exportSchedulTable(sdate, edate, term_start_date, class_code, func) {
    var postData = { sdate: sdate, edate: edate, term_start_date: term_start_date, class_code: class_code.toString() };
    var url =http+ "/tools/api_rms.ashx?act=export_schedule_table&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}

//=============================================================资源调度================================================================
//获取总利用率接口
function getTotalRate(type, area_id, start, end, minute, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_total_rate&type=" + type + "&area_id=" + area_id + "&start=" + start + "&end=" + end + "&minute=" + minute+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取各类型利用率接口
function getTypeRate(start, end, minute, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_type_rate&start=" + start + "&end=" + end + "&minute=" + minute+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取各区域利用率接口
function getAreaRate(start, end, minute, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_area_rate&start=" + start + "&end=" + end + "&minute=" + minute+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取各教室利用率接口
function getEachRate(start, end, type, area_id, minute, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_each_rate&start=" + start + "&end=" + end + "&type=" + type + "&area_id=" + area_id + "&minute=" + minute+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取教室借用列表
function getOccRoomList(ocpdatetime, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_occlist_by_dateime&ocpdatetime=" + ocpdatetime+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取教室借用列表
function getRoomListBykw(area_id, type_id, capacity, kw, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_search_list_new&kw=" + kw + "&area_id=" + area_id + "&type_id=" + type_id + "&capacity=" + capacity+"&token="+app;
// 	 console.log(url)
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取教室借用列表
function getClassRoomsList(postData, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_search_list&token="+app;
    postAjax(url, postData, false, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取任务列表接口
function getTaskRoomList(status, p, ps, loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_task_list&p=" + p + "&ps=" + ps + "&status=" + status+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取资源占用列表
function getRoomOccupyList(loading, postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_occlist&token="+app;
    postAjax(url, postData, false, loading, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//获取选中业务保障
function getDefFunctionList(typeId, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_def_func&tpid=" + typeId+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//添加资源任务
function addRoomTask(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=add_task&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//资源任务审批通过
function doRoomTask(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=do_exam&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//资源任务审批驳回
function rejectRoomTask(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=reject_exam&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//资源任务审批撤销
function deletetRoomTask(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=task_delete&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//资源任务审批取消
function canceltRoomTask(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=task_cancel&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    })
}
//=============================================================资源调度================================================================

//=============================================================自定义时间配置================================================================
//获取自定义时间配置接口
function getCustomTimeConfig(name, func,errfunc) {
    var url =http+ "/tools/api_rms.ashx?act=get_custom_time_config&name=" + name + "&token="+app;
//  console.log(url)
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    }, function (data) {
        if (errfunc != undefined) {
            errfunc(data);
        }
    });
}
//更新自定义时间配置接口
function updateCustomTimeConfig(postData, func) {
    var url =http+ "/tools/api_rms.ashx?act=update_custom_time_config&token="+app;
    postAjax(url, postData, false, true, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//=============================================================自定义时间配置================================================================

//=============================================================排考================================================================
//根据考试获取占用信息
function getOcupExamList(sdate, edate, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_occlist_by_exam&sdate=" + sdate + "&edate=" + edate+"&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取个人监考数量
function getSelfExamCount(loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_self_exam_count&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取个人借用数量
function getSelfTaskCount(loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_self_task_count&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//获取课程安排
function getSelfTaskCourseCount(loading, func) {
    var url =http+ "/tools/api_rms.ashx?act=get_index_course_count&token="+app;
    getAjax(url, false, false, function (data) {
        if (func != undefined) {
            func(data);
        }
    });
}
//=============================================================排考================================================================

 