//基于layer的弹出
//tips层
var layerRight = function (msgcontent, selector, color, skin, time) {
    layer.tips(msgcontent, selector, {
        tips: [2, color], //还可配置颜色
        skin: skin,
        time: time
    });
}
var layerTop = function (msgcontent, selector, color, skin, time) {
    layer.tips(msgcontent, selector, {
        tips: [1, color], //还可配置颜色
        skin: skin,
        time: time
    });
}
var layerDown = function (msgcontent, selector, color, skin, time) {
    layer.tips(msgcontent, selector, {
        tips: [3, color], //还可配置颜色
        skin: skin,
        time: time
    });
}
var layerLeft = function (msgcontent, selector, color, skin, time) {
    layer.tips(msgcontent, selector, {
        tips: [4, color], //还可配置颜色
        skin: skin,
        time: time
    });
}
//tips
var layerMarkTips;
function setMarksTips(selector, tipType, bgColor, skin) {
    if ($(selector).hasClass("layer-marks")) {
        $(selector).hover(function (e) {
            setMarksPos(this, e);
        }, function () {
            layer.close(layerMarkTips);
        });
    } else {
        $(selector).find(".layer-marks").hover(function (e) {
            setMarksPos(this, e);
        }, function () {
            layer.close(layerMarkTips);
        });
    }
    var setMarksPos = function (doc, e) {
        //console.log(1)
        var h = $(window).height();
        var y = e.clientY;
        var temporaryType = 0;
        if (y + 300 > h) {
            temporaryType = 1;
        }
        var id = $(doc).attr("id");
        var content = $(doc).attr("data-title");
        if (content != "" && content != undefined) {
            if (temporaryType > 0) {
                layerMarkTips = layer.tips(content, "#" + id, { tips: [temporaryType, bgColor], skin: skin, time: 0 });
            } else {
                layerMarkTips = layer.tips(content, "#" + id, { tips: [tipType, bgColor], skin: skin, time: 0 });
            }
        }
    }
}
//不可以自动关闭的提示框
var layerTip = function (title, msgcontent, option, callback) {
    layer.alert(msgcontent, {
        title: title,//标题
        icon: option,//提示图标
        closeBtn: 1,//关闭按钮是否显示 1显示 0不显示
        scrollbar: false,//浏览器滚动条已锁
        anim: 1,
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
    layer.msg('<div class="layer-m-ul">' + msgcontent + '</div>', {
        icon: option,//提示图标
        time: 1000,
        anim: 7,
        offset: 'rt'
    }, function (index) {
        layer.close(index);
        if (callback != undefined) {
            callback();
        }
    });
}
//询问框
var layerConfirm = function (title, msgcontent, option, callback, nocallback) {
    layer.confirm(msgcontent, {
        title: title,//标题
        icon: option,//提示图标
        closeBtn: 1,//关闭按钮是否显示 1显示 0不显示
        anim: 1,
        btn: ['确定', '取消'],
        yes: function (index) {
            layer.close(index);
            if (callback != undefined) {
                callback();
            }
        },
        btn2: function (index) {
            layer.close(index);
            if (nocallback != undefined) {
                nocallback();
            }
        }
    });
}
//询问框
var layerConfirmBySelfBtn = function (title, msgcontent, option, callback, nocallback) {
    layer.confirm(msgcontent, {
        title: title,//标题
        icon: option,//提示图标
        closeBtn: 1,//关闭按钮是否显示 1显示 0不显示
        anim: 1,
        btn: ['通过', '不通过'],
        yes: function (index) {
            layer.close(index);
            if (callback != undefined) {
                callback();
            }
        },
        btn2: function (index) {
            layer.close(index);
            if (nocallback != undefined) {
                nocallback();
            }
        }
    });
}
var layerConfirmM = function (title, msgcontent, option, callback, callback1) {
    layer.confirm(msgcontent, {
        title: title,//标题
        icon: option,//提示图标
        anim: 1,
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
var layerSelf = function (title, content, area, callback) {
    layer.open({
        type: 1,
        title: title,
        area: area,
        anim: 1,
        closeBtn: 1,//关闭按钮是否显示 1显示 0不显示
        shadeClose: true,//阴影
        scrollbar: false,//浏览器滚动条已锁
        content: content,
        end: function (index, layero) {
            if (callback != undefined) {
                callback();
            }
        }
    });
}
//示范一个公告层（弹出页关闭后回调函数）
var layerNotice = function (title, content, area, btn, success, callback, nocallback, manualClose) {
    layer.open({
        type: -1,
        title: title,
        area: area,
        anim: 1,
        id: 'LAY_layuipro',
        resize: true,
        btn: btn,
        moveType: 1,
        content: content,
        success: function (index, layero) {
            if (success != undefined) {
                success(index);
            }
        },
        yes: function (index, layero) {
            if (manualClose == undefined) {
                layer.close(index); //如果设定了yes回调，需进行手工关闭
            }
            if (callback != undefined) {
                callback(index);
            }
        },
        end: function (index, layero) {
            if (nocallback != undefined) {
                nocallback();
            }
        }
    });
}
//iframe层
function layerOther(title, url, width, height, cancel, closeBtn) {
    layer.open({
        title: title,
        type: 2,
        scrollbar: false,//浏览器滚动条已锁
        area: [(width == undefined ? '100%' : width), (height == undefined ? '100%' : height)],
        anim: 1,
        fix: true, //不固定
        closeBtn: (closeBtn == undefined ? 1 : closeBtn),
        content: url,
        cancel: function (index, layero) {
            if (cancel != undefined) {
                cancel(index);
            }
        }
    });
}
