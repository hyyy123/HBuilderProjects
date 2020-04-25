var id=1;
var all=parseUrl();
var token= all["token"];
	var http = "http://www.cabr-emc.com";
mui.plusReady(function() {
	mui.init();
	var self = plus.webview.currentWebview();
	if(plus.webview.currentWebview() != undefined) {
		id = self.newId; //获取当前页面所属的id  
	}
    getmoudle(id);
});
function getmoudle(id) {
	mui.ajax(http + '/tools/EcmError.ashx',{
	data:{
		action:'get', 
		id:id,
		token:token
	},
	dataType:'json',//服务器返回json格式数据
	type:'get',//HTTP请求类型
	success:function(data){ 
		      var item = data.data;
        //alert(item)
        var msg = data.msg;
			overTime(msg);
        if (msg > 0) {
        	
            initMsg(item);
            
        }
	}
});  
}
 

function initMsg(item) {
//    console.log(JSON.stringify(item))
    var str;
    if (item.status == 1) {
        str = "报警中";
    } else if (item.status == 2) {
        str = "处理中";

    } else if (item.status == 3) {
        str = "已完成";

    }

    jQuery("#status").html("维修状态：" + str);
    var html = "";
       html += '<p class="conmsgp"><span class="msgname colorblack">设备名称</span><span>' + item.device_name + '</span></p>';
    html += '<p class="conmsgp"><span class="msgname colorblack">所在楼层</span><span>' + item.area_name + '</span></p>';
    html += '<p class="conmsgp"><span class="msgname colorblack">报警时间</span><span>' + item.add_time + '</span></p>';
    html += '<p class="conmsgp"><span class="msgname colorblack">联系人</span><span>' + item.add_user + '</span></p>';
    html += '<p class="conmsgp"><span class="msgname colorblack">电话</span><span>' + item.phone + '</span></p>';
    html += '<p class="conmsgp"><span class="msgname colorblack">报警信息</span><span>' + item.message + '</span></p>';

    html += '<div class="conmsgp">';
    html += '<p class="msgname colorblack ">问题描述</p>';
    html += ' <textarea rows="2">' + item.remark + '</textarea>';
    html += '</div>';

    //html += '<p class="conmsgp"><span class="msgname  colorblack">设备图片</span><span class="pull-right">查看<i class="fa fa-angle-right"></i></span></p>';
    $("#conmsg").append(html);
}