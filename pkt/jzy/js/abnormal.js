var status = 1;
var getstatus = 1;

var p = 0;
var all=parseUrl();
var token= all["token"];
//alert(token);
mui.plusReady(function() {
	mui.init();

	getList(p, getstatus);
	navClick(getstatus);
});

function navClick(getstatus) {
	//console.log(getstatus)
	var now = getstatus - 1;
	//console.log(now)
	jQuery(".nav li").removeClass("warnlihover");
	jQuery(".nav li").eq(now).addClass("warnlihover");

	mui('body').on('tap', '.nav li', function() {
		jQuery(".nav li").removeClass("warnlihover");
		jQuery(this).addClass("warnlihover");
		status = $(this).index() + 1;
		jQuery(".dropload-down").remove();
		getList(p, status);
	});
}

function getList(p, status) { 
	jQuery("#warn_list").children().remove(); 

	  // 每页展示8个
	  var ps = 9;
	  
    var http = "http://www.iwesong.com:8056";
	  // dropload
	  $('.info-list').dropload({
	      scrollArea: window,
	      //domUp: {
	      //    domClass: 'dropload-up',
	      //    domRefresh: '<p class="dropload-refresh">↓下拉刷新</p>',
	      //    domUpdate: '<p class="dropload-update">↑释放更新</p>',
	      //    domLoad: '<p class="dropload-load"><span class="loading"></span>加载中...</p>'
	      //},
	      domDown : {
	          domClass   : 'dropload-down',
	          // 滑动到底部显示内容
	          domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
	          // 内容加载过程中显示内容
	          domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
	          // 没有更多内容-显示提示
	          domNoData  : '<div class="dropload-noData">暂无更多数据</div>'
	      }, 
	      loadDownFn: function (me) {
	          p++;
	          //console.log(p)
	          // 拼接HTML
	          var html = '';
	          $.ajax({
	              type: 'GET',
	              url: http + "/tools/EcmError.ashx?action=get_list&p=" + p + "&ps=" + ps + "&type=" + "" + "&status=" + status + "&date=" + ""+ "&token=" + token,
	              dataType: 'json',
	              success: function (data) { 
//	              	console.log(JSON.stringify(data));
	                  var count = data.count
	                  var item = data.data;
//	                  console.log(item);
	
	                  var arrLen = count - $("#warn_list").children().length;
	                  if (arrLen > 0) {
	                      for (var i = 0; i < item.length; i++) {
	                          html += '<div class="warnitem">';
	                          //html += '<div class="warnhead clearfix btline">';
	                          //html += '<div class="pull-left warnimg"> <img src="/templates/ecm-mobile/img/icon/hot.png" /> </div>';
	                          //html += '<div class="pull-left">';
	                          //html += '<p  class="colorblack">郭晓明</p>';
	                          //html += '<p class="colorgray">3F 负责人</p>';
	                          //html += '</div>';
	                          //html += '</div>';
	                          html += '<div class="warncon btline">';
	                          html += '<div class="clearfix">';
	                          html += '<p class="pull-left colorblack">' + item[i].area_name + '</p>';
	                          html += '<p class="pull-right colorgray">' + item[i].type + '</p>';
	                          html += '</div>';
	                          html += '<p class="colorgray">系统记录时间:' + item[i].add_time + '</p>';
	                          html += '</div>';
	                          html += '<div class="warnfoot clearfix"> ';
	                          html += '<p class="pull-right colorblue" onclick="warnmore(' + item[i].id +')">查看详情<i class="fa fa-angle-right"></i></p>';
	                          html += '</div>';
	                          html += '</div>';
	                      } 
	                      // 如果没有数据
	                  } else {
	                      // 锁定
	                      me.lock();
	                      // 无数据
	                      me.noData();
	                  }
	                  // 为了测试，延迟1秒加载
	                  setTimeout(function () {
	                      // 插入数据到页面，放到最后面
	                      $('#warn_list').append(html);
	                      // 每次数据插入，必须重置
	                      me.resetload();
	                  }, 5000);
	              },
	              error: function (xhr, type) {
	                  alert('Ajax error!');
	                  // 即使加载出错，也得重置
	                  me.resetload();
	              }
	          });
	      }
	  });
}

function warnmore(id){ 
		mui.openWindow({
			url: "abnormal_more.html?token="+token, //跳转的页面
			id: "abnormal_more.html",
			extras: {
				newId: id, //自定义newsId,处理页面传值
			},
			styles: { //这个和页面传值没关系
				popGesture: 'close'
			}
		})
}
