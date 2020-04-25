
var all=parseUrl();
var token= all["token"];
var area_id = all["area_id"];
	var http = "http://www.cabr-emc.com";
mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	var token = self.token; //获取当前页面所属的id 
	mui('body').on('tap', '.licon', function() {
		var param = $("#maintenance_list li").has(this).find(".litip")
		if(param.hasClass("hide")) {
			param.removeClass("hide")
		} else {
			param.addClass("hide")
		}
	}); 
		jQuery(".dropload-down").remove();
	getList()
});
window.addEventListener('refresh', function(e){//执行刷新
    location.reload();
});
function getList() { 
	jQuery("#maintenance_list").children().remove(); 

	  // 每页展示8个
	  var ps = 9;
	  var p = 0;
	  
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
	              url: http + "/tools/Qrcode.ashx?action=get_over_date_list&p=" + p + "&ps=" + ps + "&kw=" + "" + "&area_id=" + area_id+ "&token=" + token,
	              dataType: 'json',
	              success: function (data) { 
	              	console.log(JSON.stringify(data));
	                  var count = data.count
	                  var item = data.data;
//	                  console.log(item);
	
	                  var arrLen = count - $("#maintenance_list").children().length;
	                  if (arrLen > 0) {
	                      for (var i = 0; i < item.length; i++) {
	                          html += '<li>'; 
	                          html += '<div class="licon  clearfix mui-bg-white" >'; 
	                          html+='<p class="pull-left liimg" ><img src="../img/security/s2.png" alt="" /></p>';
	                            var base_json = JSON.parse(item[i].base_json);
	                          html+='<p class="pull-left colorblack" >'+base_json.name+'</p>';
	                          html+='<p class="pull-right " ><span class="colorblack" ></span>&nbsp;&nbsp;<i class="fa fa-chevron-circle-up" ></i></p>';
	                          html+='</div>' 
	                          html += '<div class="litip hide" >';
	                          html += '<ul >';
	                          html += '<li class="clearfix" >';
	                          html += '<p class="pull-left" ><b>使用期限</b></p>';
	                          html += '<p class="pull-left colorblack" ><b>'+base_json.limityear+'</b></p>';
	                          html += '</li>'; 
	                          html += '<li class="clearfix" >';
	                          html += '<p class="pull-left" ><b>计划安排</b></p>';
	                          html += '<p class="pull-left colorblack" ><b>'+item[i].plan_days+'天</b></p>';
	                          html += '</li>'; 
	                          html += '<li class="clearfix" >';
	                          html += '<p class="pull-left" ><b>安装位置</b></p>';
	                          html += '<p class="pull-left colorblack" ><b>'+base_json.location+'</b></p>';
	                          html += '</li>'; 
//	                          html += '<li class="clearfix" >';
//	                          html += '<p class="pull-left" ><b>使用期限</b></p>';
//	                          html += '<p class="pull-left colorblack" ><b>2028/4/10</b></p>';
//	                          html += '</li>'; 
	                          html += '</ul>';
//	                          console.log(href)
//	                          html += '<p class="text-center" ><a onclick="replay('+item[i].id+')" class="btn btn-primary btn-block">回复</a></p>';
	                          html += '</div>';
	                          html += '</li>'; 
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
	                      $('#maintenance_list').append(html);
	                      // 每次数据插入，必须重置
	                      me.resetload();
	                  }, 5000);
	              },
	              error: function (xhr, type) {
//	                  alert('Ajax error!');
	                  // 即使加载出错，也得重置
	                  me.resetload();
	              }
	          });
	      }
	  });
}
function replay(id){
	var href='maintenance_log.html?id='+id+'&token=' + token + '&area_id=' + area_id;
	location=href;
}
