//基于layer的弹出

//tips层
var layerRight = function (msgcontent, selector, color, time) {
    layer.tips(msgcontent, selector, {
        tips: [2, color], //还可配置颜色
        time: 3000
    });
}
var layerTop = function (msgcontent, selector, color, time) {
    layer.tips(msgcontent, selector, {
        tips: [1, color], //还可配置颜色
        time: 3000
    });
}
var layerDown = function (msgcontent, selector, color, time) {
    layer.tips(msgcontent, selector, {
        tips: [3, color], //还可配置颜色
        time: 3000
    });
}
var layerLeft = function (msgcontent, selector, color, time) {
    layer.tips(msgcontent, selector, {
        tips: [4, color], //还可配置颜色
        time: 3000
    });
}
//不可以自动关闭的提示框
var layerTip = function (msgcontent, option, callback) {
    layer.alert(msgcontent, {
        title: "",//标题
        icon: option,//提示图标
        closeBtn: 1,//关闭按钮是否显示 1显示 0不显示
        scrollbar: false,//浏览器滚动条已锁
        yes: function (index) {
            layer.close(index);
            if (callback != undefined) {
                callback();
            }
        }
    });
}
//可以自动关闭的提示框
var layerPrint = function (msgcontent, option, callback) {
    layer.msg(msgcontent, {
        icon: option,//提示图标
        time:3000
    }, function (index) {
        layer.close(index);
        if (callback != undefined) {
            callback();
        }
    });
}
//询问框
var layerComfirm = function (title, msgcontent, option, callback) {
    layer.confirm(msgcontent, {
        title: title,//标题
        icon: option,//提示图标
        closeBtn: 1,//关闭按钮是否显示 1显示 0不显示
        btn: ['确定', '取消'],
        yes: function (index) {
            layer.close(index);
            if (callback != undefined) {
                callback();
            }
        }
    });
}
var layerComfirmM = function (title, msgcontent, option, callback, callback1) {
    layer.confirm(msgcontent, {
        title: title,//标题
        icon: option,//提示图标
        closeBtn: 1,//关闭按钮是否显示 1显示 0不显示
        btn: ['确定', '取消']
    }, function (index) {
        layer.close(index);
        if (callback != undefined) {
            callback();
        }
    }, function (index) {
        layer.close(index);
        if (callback1 != undefined) {
            callback1();
        }
    });
}
//默认prompt
var layerPrompt = function (title, callback) {
    layer.prompt({
        title: title,//标题
        closeBtn: 1,//关闭按钮是否显示 1显示 0不显示
    }, function (val, index) {
        layer.close(index);
        if (callback != undefined) {
            callback(val);
        }
    });
}
//捕获页 就是从页面已经存在的元素上，包裹layer的结构
var layerSelf = function (title, content) {
    layer.open({
        type: 1,
        title: title,
        closeBtn: 1,//关闭按钮是否显示 1显示 0不显示
        shadeClose: true,//阴影
        scrollbar: false,//浏览器滚动条已锁
        content: $(content)
    });
}
//iframe层
function layerOther(title, url, width, height) {
    if (width != undefined && height != undefined) {
        layer.open({
            title: title,
            type: 2,
            scrollbar: false,//浏览器滚动条已锁
            area: [width, height],
            fix: true, //不固定
            content: url
        });
    } else if (width != undefined) {
        layer.open({
            title: title,
            type: 2,
            scrollbar: false,//浏览器滚动条已锁
            area: [width, "100%"],
            fix: true, //不固定
            content: url
        });
    } else if (height != undefined) {
        layer.open({
            title: title,
            type: 2,
            scrollbar: false,//浏览器滚动条已锁
            area: ["100%", height],
            fix: true, //不固定
            content: url
        });
    } else {
        layer.open({
            title: title,
            type: 2,
            scrollbar: false,//浏览器滚动条已锁
            area: ["100%", "100%"],
            fix: true, //不固定
            content: url
        });
    }
}

