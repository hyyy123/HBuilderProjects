//信息框
var layerTip = function (content, btn, callback) {
    layer.open({
        content: content,
        btn: btn,
        end: function (index) {
            layer.close(index);
            if (callback != undefined) {
                callback();
            }
        }
    });
}

//提示
var layerPrint = function (content, time, callback) {
    layer.open({
        content: content,
        skin: 'msg',
        time: time, //2秒后自动关闭
        style: 'background-color:#fff;color:#00a9b2',
        end: function (index) {
            layer.close(index);
            if (callback != undefined) {
                callback();
            }
        }
    });
}

//询问框
var layerComfire = function (content, btn, callback) {
    layer.open({
        content: content,
        btn: btn,
        yes: function (index) {
            layer.close(index);
            if (callback != undefined) {
                callback();
            }
        }
    });
}

//底部对话框
var layerTipFooter = function (content, btn, callback) {
    layer.open({
        content: content,
        btn: btn,
        skin: 'footer',
        yes: function (index) {
            layer.open({ content: '执行删除操作' })
        },
        end: function (index) {
            layer.close(index);
            if (callback != undefined) {
                callback();
            }
        }
    });
}
//底部提示
var layerPrintFooter = function (content) {
    layer.open({
        content: content
      , skin: 'footer'
    });
}
//页面层
var layerIframe = function (content) {
    layer.open({
        type: 1,
        content: content,
        anim: 'up',
        style: 'position:fixed; bottom:0; left:0; width: 100%; height: 200px; padding:10px 0; border:none;'
    });
}
//页面层
var layerLoading = function (content) {
    layer.open({
        type: 2,
        content: content
    });
}
