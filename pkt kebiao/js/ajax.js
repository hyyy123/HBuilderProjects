//==========================================ajax加载====================================
function isPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	var flag = true;
	for(var v = 0; v < Agents.length; v++) {
		if(userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
var ajaxLoading;
var showLoading = function() {
//	  if (isPC()) {
	      ajaxLoading = layer.load(0, { shade: [0.4, '#fff'] });
//	  } 

//	var ajaxLoading = plus.nativeUI.showWaiting(); //显示原生等待框  
};
var closeLoading = function() {
	  layer.close(ajaxLoading)

//	ajaxLoading.close();
};
//ajax异步
function sendGetAjaxP(url, func) {
	$.ajax({
		type: "get",
		url: url,
		dataType: 'jsonp',
		cache: false,
		error: function(data) {
			alert(JSON.stringify(data));
		},
		success: function(data) {
			success(data, func);
		}
	});
}

function sendGetAjax(url, func) {
	$.ajax({
		type: "get",
		url: url,
		dataType: 'jsonp',
		cache: false,
		error: function(data) {
			alert(JSON.stringify(data));
		},
		success: function(data) {
			success(data, func);
		}
	});
}

function sendPostAjax(url, postData, func) {
	$.ajax({
		type: "post",
		url: url,
		data: postData,
		dataType: 'jsonp',
		beforeSend: showLoading(),
		cache: false,
		error: function(data) {
			closeLoading();
			alert(JSON.stringify(data));
		},
		success: function(data) {
			closeLoading();
			success(data, func);
		}
	});
}

function sendLoadingAjaxP(url, postData, func) {
	$.ajax({
		type: "post",
		url: url,
		data: postData,
		dataType: 'jsonp',
		beforeSend: showLoading(),
		cache: false,
		error: function(data) {
			closeLoading();
			alert(JSON.stringify(data));
		},
		success: function(data) {
			closeLoading();
			success(data, func);
		}
	});
}
var ajaxEvent, $allLoadingDoc;

function getAjax(url, isCache, isLoading, func, errorFuc, isAbort) {
	if(isAbort) {
		if(ajaxEvent && ajaxEvent.readystate != 4) {
			$allLoadingDoc.remove();
			ajaxEvent.abort();
		}
	}
	if(typeof isLoading == "boolean") {
		if(isLoading) {
			ajaxEvent = $.ajax({
				type: "get",
				url: url,
				dataType: 'jsonp',
				cache: isCache,
				beforeSend: showLoading(),
				error: function(data) {
					//console.log(JSON.stringify(data))
				},
				success: function(data) {
					//console.log(JSON.stringify(data))
					success(data, func, errorFuc);
					closeLoading();
				}
			});
		} else {
			ajaxEvent = $.ajax({
				type: "get",
				url: url,
				dataType: 'jsonp',
				cache: isCache,
				error: function(data) {

				},
				success: function(data) {
					success(data, func, errorFuc);
				}
			});
		}
	} else {
		var $loadingDoc = $('<img src=\"/pkt/img/loading.gif\" />');
		$allLoadingDoc = $loadingDoc;
		ajaxEvent = $.ajax({
			type: "get",
			url: url,
			dataType: 'jsonp',
			cache: isCache,
			beforeSend: function() {
				var loadCont = isLoading.split("|");
				if(loadCont.length > 1) {
					for(var i = 0; i < loadCont.length; i++) {
						$(loadCont[i]).append($loadingDoc);
					}
				} else {
					$(isLoading).append($loadingDoc);
				}
			},
			error: function(data) {
				//console.log(JSON.stringify(data));
			},
			success: function(data) {
				$($loadingDoc).remove();
				success(data, func, errorFuc);
			}
		});
	}
}

function postAjax(url, postData, isCache, isLoading, func, errorFuc, isAbort) {
//	console.log(postData)
	if(isAbort) {
		if(ajaxEvent && ajaxEvent.readystate != 4) {
			$allLoadingDoc.remove();
			ajaxEvent.abort();
		}
	}
	if(typeof isLoading == "boolean") {
		if(isLoading) {
			ajaxEvent = $.ajax({
				type: "post",
				url: url,
				data: postData,
				dataType: 'jsonp',
				cache: isCache,
				beforeSend: showLoading(),
				error: function(data) {
					//console.log(JSON.stringify(data));
				},
				success: function(data) {
					//console.log(JSON.stringify(data));
					closeLoading();
					success(data, func, errorFuc);
				}
			});
		} else {
			ajaxEvent = $.ajax({
				type: "post",
				url: url,
				data: postData,
				dataType: 'jsonp',
				cache: isCache,
				error: function(data) {
					//console.log(JSON.stringify(data));
				},
				success: function(data) {
					success(data, func, errorFuc);
				}
			});
		}
	} else {
		var $loadingDoc = $('<img src=\"/pkt/img/loading.gif\" />');
		$allLoadingDoc = $loadingDoc;
		ajaxEvent = $.ajax({
			type: "post",
			url: url,
			data: postData,
			dataType: 'jsonp',
			cache: isCache,
			beforeSend: function() {
				$(isLoading).append($loadingDoc);
			},
			error: function(data) {
				//console.log(JSON.stringify(data));
			},
			success: function(data) {
				$loadingDoc.remove();
				success(data, func, errorFuc);
			}
		});
	}
}

function importPostAjax(url, postData, func, errorFuc) {
	var timerId;
	$.ajax({
		type: "post",
		url: url,
		data: postData,
		dataType: 'jsonp',
		cache: false,
		beforeSend: function() {
			// 设置 进度条到10%慢慢变到80%
			var count = 10;
			timerId = setInterval(function() {
				if(count < 90) {
					showAjaxProcessBar(count);
					count += 10;
				} else {
					clearInterval(timerId);
				}
			}, 500)
		},
		complete: function() {
			// 进度到100%
			showAjaxProcessBar(100);
		},
		success: function(data) {
			//console.log(JSON.stringify(data));
			// 设置 进度条到90%
			clearInterval(timerId);
			showAjaxProcessBar(90);
			success(data, func, errorFuc);
		},
		error: function(data) {
			//console.log(JSON.stringify(data));
		}
	});
}

var processBar;
var $cont;

function showAjaxProcessBar(num) {
	if(num <= 100) {
		processBar = $(".progress-box");
		if(processBar != undefined) {
			//防止重复创建
			if(processBar.is(':hidden')) {
				//创建进度条
				processBar.removeClass("hide");
			}
			processBar.find(".upload-progress b").width(num + "%");
			processBar.find(".progress-text").text(num + "%");
		}
	}

	if(num >= 100) {
		setTimeout(function() {
			processBar.addClass("hide");
		}, 1000);
	}
}

function success(data, func, errorFuc) {
	var msg = data.msg;
	if(msg > 0) {
		//console.log(JSON.stringify(data))
		func(data);
	} else {
		if(errorFuc == undefined) {
			layerTip("提示", data.msgbox)
		} else {
			errorFuc(data);
		}
	}
}
//==========================================ajax加载====================================