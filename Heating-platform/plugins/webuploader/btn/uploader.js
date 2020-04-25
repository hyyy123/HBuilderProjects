$(function () {
    //初始化绑定默认的属性
    $.upLoadDefaultsBtn = $.upLoadDefaultsBtn || {};
    $.upLoadDefaultsBtn.property = {
        callback: undefined,
        multiple: false, //是否多文件
        water: false, //是否加水印
        thumbnail: false, //是否生成缩略图
        sendurl: null, //发送地址
        filetypes: "jpg,jpeg,png,gif", //文件类型multiple
        mimeTypes: "image/*", //文件类型multiple
        filesize: "2048", //文件大小
        btntext: "浏览...", //上传按钮的文字
        progress: false,
        swf: null //SWF上传控件相对地址
    };
    //初始化上传控件
    $.fn.InitUploaderBtn = function (p) {
        var fun = function (parentObj) {
            var progressObj = parentObj.parents("dl").siblings(".progress-box");
            p = $.extend({}, $.upLoadDefaultsBtn.property, p || {});
            var btnObj = $('<div class="upload-btn">' + p.btntext + '</div>').appendTo(parentObj);
            //初始化属性
            p.sendurl += "?action=UpLoadFile";
            if (p.water) {
                p.sendurl += "&IsWater=1";
            }
            if (p.thumbnail) {
                p.sendurl += "&IsThumbnail=1";
            }
            if (!p.multiple) {
                p.sendurl += "&DelFilePath=" + parentObj.siblings(".upload-path").val();
            }

            //初始化WebUploader
            var uploaderBtn = WebUploaderBtn.create({
                auto: true, //自动上传
                swf: p.swf, //SWF路径
                server: p.sendurl, //上传地址
                pick: {
                    id: btnObj,
                    multiple: p.multiple
                },
                accept: {
                    //title: 'Images',
                    extensions: p.filetypes,
                    mimeTypes: p.mimeTypes,
                },
                formData: {
                    'DelFilePath': '' //定义参数
                },
                fileVal: 'Filedata', //上传域的名称
                fileSingleSizeLimit: p.filesize * 1024 //文件大小
            });

            //当validate不通过时，会以派送错误事件的形式通知
            uploaderBtn.on('error', function (type) {
                switch (type) {
                    case 'Q_EXCEED_NUM_LIMIT':
                        alert("错误：上传文件数量过多！");
                        break;
                    case 'Q_EXCEED_SIZE_LIMIT':
                        alert("错误：文件总大小超出限制！");
                        break;
                    case 'F_EXCEED_SIZE':
                        alert("错误：文件大小超出限制！");
                        break;
                    case 'Q_TYPE_DENIED':
                        alert("错误：禁止上传该类型文件！");
                        break;
                    case 'F_DUPLICATE':
                        alert("错误：请勿重复上传该文件！");
                        break;
                    default:
                        alert('错误代码：' + type);
                        break;
                }
            });

            //当有文件添加进来的时候
            uploaderBtn.on('fileQueued', function (file) {
                //如果是单文件上传，把旧的文件地址传过去
                if (!p.multiple) {
                    uploaderBtn.options.formData.DelFilePath = parentObj.siblings(".upload-path").val();
                }
                if (p.progress) {
                    //防止重复创建
                    if (progressObj.is(':hidden')) {
                        //创建进度条
                        progressObj.removeClass("hide");
                    }
                }
            });

            //文件上传过程中创建进度条实时显示
            uploaderBtn.on('uploadProgress', function (file, percentage) {
                if (p.progress) {
                    progressObj.find(".upload-progress b").width(percentage * 100 + "%");
                    progressObj.find(".progress-text").text(percentage * 100 + "%");
                }
            });

            //当文件上传出错时触发
            uploaderBtn.on('uploadError', function (file, reason) {
                uploaderBtn.removeFile(file); //从队列中移除
                alert(file.name + "上传失败，错误代码：" + reason);
            });

            //当文件上传成功时触发
            uploaderBtn.on('uploadSuccess', function (file, data) {
                if (p.progress) {
                    if (data.status == '0') {
                        progressObj.addClass("hide");
                    }
                }
                if (data.status == '1') {
                    //如果是单文件上传，则赋值相应的表单
                    if (!p.multiple || (p.multiple && p.callback != undefined)) {
                        if (p.callback != undefined) {
                            p.callback(data);
                        }
                    } else {
                        addImage(parentObj, data.path, data.thumb);
                    }
                }
                uploaderBtn.removeFile(file); //从队列中移除
            });

            //不管成功或者失败，文件上传完成时触发
            uploaderBtn.on('uploadComplete', function (file) {
                //如果队列为空，则移除进度条
                
                if (p.progress) {
                    if (uploaderBtn.getStats().queueNum == 0) {
                        progressObj.addClass("hide");
                    }
                }
            });
        };
        return $(this).each(function () {
            fun($(this));
        });
    }
});

/*图片相册处理事件
=====================================================*/
//添加图片相册
function addImage(targetObj, originalSrc, thumbSrc) {
    //插入到相册UL里面
    var newLi = $('<li>'
    + '<input type="hidden" name="hid_photo_name" value="0|' + originalSrc + '|' + thumbSrc + '" />'
    + '<input type="hidden" name="hid_photo_remark" value="" />'
    + '<div class="img-box" onclick="setFocusImg(this);">'
    + '<img src="' + thumbSrc + '" bigsrc="' + originalSrc + '" />'
    + '<span class="remark"><i>暂无描述...</i></span>'
    + '</div>'
    + '<a href="javascript:;" onclick="setRemark(this);">描述</a>'
    + '<a href="javascript:;" onclick="delImg(this);">删除</a>'
    + '</li>');
    newLi.appendTo(targetObj.siblings(".photo-list").children("ul"));

    //默认第一个为相册封面
    var focusPhotoObj = targetObj.siblings(".focus-photo");
    if (focusPhotoObj.val() == "") {
        focusPhotoObj.val(thumbSrc);
        newLi.children(".img-box").addClass("selected");
    }
}
function addSingleImage(originalSrc, thumbSrc) {
    $(".photo-list").children("ul").children().remove();
    //插入到相册UL里面
    var newLi = $('<li>'
    + '<div class="img-box">'
    + '<img src="' + thumbSrc + '" bigsrc="' + originalSrc + '" />'
    + '</div>'
    + '<a href="javascript:;" onclick="delImg(this);">删除</a>'
    + '</li>');
    newLi.appendTo($(".photo-list").children("ul"));
}