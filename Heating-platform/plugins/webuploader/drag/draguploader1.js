var parentObj;
(function ($) {
    //初始化绑定默认的属性
    $.upLoadDefaults = $.upLoadDefaults || {};
    $.upLoadDefaults.property = {
        upauto: false,//是否自动上传
        multiple: false, //是否多文件
        water: false, //是否加水印
        thumbnail: false, //是否生成缩略图
        sendurl: null, //发送地址
        swf: null, //SWF上传控件相对地址
        filetypes: "jpg,jpeg,png,gif", //文件类型multiple
        filesize: "2048", //文件大小
        btntext: "浏览...", //上传按钮的文字
        dnd: undefined,//拖拽容器
        shape: "oblong",
        callback: undefined//返回事件
    };
    //初始化上传控件
    $.fn.InitDragUploader1 = function (p) {
        var fun = function (parentObj) {
            parentObj = parentObj;
            p = $.extend({}, $.upLoadDefaults.property, p || {});
            //按钮及拖拽区域
            if (p.shape == "oblong") {
                var $uploadArea = $('<div class="queueList">'
                    + '<div class="placeholder">'
                    + '<div class="filePicker"></div>'
                    + '<p class="text-center title">点击上传图片或将图片拖拽到虚线区域</p>'
                    + '<p class="text-center">格式：JPG、jpeg、PNG</p>'
                    + '<p class="text-center">大小：小于2M</p>'
                    + '<p class="text-center">比例：2.5 ：1</p>'
                    + '<input type="hidden" class="upload-path" />'
                    + '</div>'
                    + '</div>'
                    + '<div class="statusBar" style="display:none">'
                    + '<div class="progress"><span class="text">0%</span><span class="percentage"></span></div>'
                    + '<div class="info"></div>'
                    + '</div>').appendTo(parentObj);
            } else if (p.shape == "square") {
                var $uploadArea = $('<div class="queueList">'
                    + '<div class="placeholder">'
                    + '<div class="filePicker"></div>'
                    + '<p class="text-center title">点击或拖拽图片</p>'
                    + '<p class="text-center">格式：JPG、jpeg、PNG</p>'
                    + '<p class="text-center">大小：小于2M</p>'
                    + '<p class="text-center">比例：1 ：1</p>'
                    + '<input type="hidden" class="upload-path" />'
                    + '</div>'
                    + '</div>'
                    + '<div class="statusBar" style="display:none">'
                    + '<div class="progress"><span class="text">0%</span><span class="percentage"></span></div>'
                    + '<div class="info"></div>'
                    + '</div>').appendTo(parentObj);
            }

            // 文件容器
            var $queue = $('<ul class="filelist"></ul>')
                .appendTo(parentObj.find('.queueList')),

            // 状态栏，包括进度和控制按钮
            $statusBar = parentObj.find('.statusBar'),
            // 文件总体选择信息。
            $info = $statusBar.find('.info'),

            // 上传按钮
            $upload = parentObj.find('.uploadBtn'),

            // 没选择文件之前的内容。
            $placeHolder = parentObj.find('.placeholder'),

            $progress = $statusBar.find('.progress').hide(),

            // 添加的文件数量
            fileCount = 0,

            // 添加的文件总大小
            fileSize = 0,

            // 优化retina, 在retina下这个值是2
            ratio = window.devicePixelRatio || 1,

             // 缩略图大小
                thumbnailWidth = 287.5 * ratio,
                thumbnailHeight = 117 * ratio,

        // 可能有pedding, ready, uploading, confirm, done.
        state = 'pedding',

        // 所有文件的进度信息，key为file id
        percentages = {},

            // WebUploader1实例
            uploader;
            //if (p.dnd != undefined && p.dnd != '') {
            //    $('#' + parentObj[0].id + " .tipTxt").text(p.btntext);
            //    p.btntext = ' ';
            //}

            //初始化属性
            p.sendurl += "?action=UpLoadFile";
            if (p.water) {
                p.sendurl += "&IsWater=1";
            }
            if (p.thumbnail) {
                p.sendurl += "&IsThumbnail=1";
            }
            if (!p.multiple) {
                p.sendurl += "&DelFilePath=" + $(".upload-path").val();
            }
            if (p.dnd == undefined) {
                $uploadArea = $('<div class="upload-btn">' + p.btntext + '</div>').appendTo(parentObj);
            }
            //初始化WebUploader1
            uploader = WebUploader1.create({
                swf: p.swf, //SWF路径
                server: p.sendurl, //上传地址
                auto: p.upauto, //自动上传
                fileSingleSizeLimit: p.filesize * 1024,//文件大小
                dnd: p.dnd,
                pick: {
                    id: '#' + parentObj[0].id + ' .filePicker',
                    label: p.btntext,
                    multiple: p.multiple
                },
                accept: {
                    extensions: p.filetypes
                },
                duplicate: true,
                //fileNumLimit:1,
                formData: {
                    'DelFilePath': '' //定义参数
                },
                fileVal: 'Filedata' //上传域的名称
            });
            //当validate不通过时，会以派送错误事件的形式通知
            uploader.on('error', function (type) {

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
            uploader.on('fileQueued', function (file) {
                if (!p.multiple) {
                    fileCount = 1;
                    fileSize = file.size;
                } else {
                    fileCount++;
                    fileSize += file.size;

                }
                //如果是单文件上传，把旧的文件地址传过去
                if (!p.multiple) {
                    uploader.options.formData.DelFilePath = $(".upload-path").val();
                    removeFile($(".upload-path").val(), true);
                } else {
                    addFile(file);
                }

                if (fileCount === 1) {
                    $placeHolder.addClass('element-invisible');
                    $statusBar.show();
                }
                setState('ready');
                updateTotalProgress();
            });

            //文件上传过程中创建进度条实时显示
            uploader.on('uploadProgress', function (file, percentage) {
                //var $li = $('#' + file.id),
                //$percent = $li.find('.progress span');

                //$percent.css('width', percentage * 100 + '%');
                //percentages[file.id][1] = percentage;
                //updateTotalProgress();
            });

            //当文件上传出错时触发
            uploader.on('uploadError', function (file, reason) {
                alert(file.name + "上传失败，错误代码：" + reason);
                removeFile(file); //从队列中移除
            });


            //当文件被移除队列后触发
            uploader.on('fileDequeued', function (file) {
                fileCount--;
                fileSize -= file.size;

                if (!fileCount) {
                    setState('pedding');
                }

                removeFile(file);
                updateTotalProgress();
            });

            //当文件上传成功时触发
            uploader.on('uploadSuccess', function (file, data) {
                if (data.status == '0') {
                    alert(data.msg);
                }
                if (data.status == '1') {
                    if (p.callback != undefined) {
                        p.callback(data);
                    }
                }
                if (!p.multiple) {
                    $(".upload-path").val(data.path);
                    addSingleFile(parentObj,data);
                }
            });

            //不管成功或者失败，文件上传完成时触发
            uploader.on('uploadComplete', function (file) {
                //alert("上传完成");
            });
            uploader.on('all', function (type) {
                var stats;
                switch (type) {
                    case 'uploadFinished':
                        setState('confirm');
                        break;

                    case 'startUpload':
                        setState('uploading');
                        break;

                    case 'stopUpload':
                        setState('paused');
                        break;

                }
            });
            // 当有文件添加进来时执行，负责view的创建
            function addFile(file) {
                var $li = $('<li id="' + file.id + '">' +
                    '<p class="title">' + file.name + '</p>' +
                    '<p class="imgWrap"></p>' +
                    '<p class="progress"><span></span></p>' +
                    '</li>'),


                    $btns = $('<div class="file-panel">' +
                        '<span class="cancel">删除</span>' + '</div>'),
                    $prgress = $li.find('p.progress span'),
                    parentObj = $li.find('p.imgWrap'),
                    $info = $('<p class="error"></p>'),

                    showError = function (code) {
                        switch (code) {
                            case 'interrupt':
                                text = '上传暂停';
                                break;

                            default:
                                text = '上传失败，请重试';
                                break;
                        }
                        $info.text(text).appendTo($li);
                    };

                if (!p.multiple) {
                    $(".filelist").children().remove();
                }
                $btns.appendTo($li);

                if (file.getStatus() === 'invalid') {
                    showError(file.statusText);
                } else {
                    parentObj.text('预览中');
                    uploader.makeThumb(file, function (error, src) {
                        if (error) {
                            parentObj.text('不能预览');
                            return;
                        }

                        var img = $('<img src="' + src + '">');
                        parentObj.empty().append(img);
                    }, thumbnailWidth, thumbnailHeight);

                    percentages[file.id] = [file.size, 0];
                    file.rotation = 0;
                }

                file.on('statuschange', function (cur, prev) {
                    if (prev === 'progress') {
                        $prgress.hide().width(0);
                    } else if (prev === 'queued') {
                        $li.off('mouseenter mouseleave');
                        $btns.remove();
                    }

                    // 成功
                    if (cur === 'error' || cur === 'invalid') {
                        showError(file.statusText);
                        percentages[file.id][1] = 1;
                    } else if (cur === 'interrupt') {
                        showError('interrupt');
                    } else if (cur === 'queued') {
                        percentages[file.id][1] = 0;
                    } else if (cur === 'progress') {
                        $info.remove();
                        $prgress.css({
                            display: 'block',
                            width: '10%'
                        });
                    } else if (cur === 'complete') {
                        $li.append('<span class="success"></span>');
                    }

                    $li.removeClass('state-' + prev).addClass('state-' + cur);
                });

                $li.on('mouseenter', function () {
                    $btns.stop().animate({
                        height: 30
                    });
                });

                $li.on('mouseleave', function () {
                    $btns.stop().animate({
                        height: 0
                    });
                });

                $btns.on('click', 'span', function () {
                    uploader.removeFile(file);
                });

                $li.appendTo($queue);
            }

            // 负责view的销毁
            function removeFile(file) {
                var $li = $('#' + file.id);

                delete percentages[file.id];
                updateTotalProgress();
                $li.off().find('.file-panel').off().end().remove();
            }

            function updateTotalProgress() {
                var loaded = 0,
                    total = 0,
                    spans = $progress.children(),
                    percent;

                $.each(percentages, function (k, v) {
                    total += v[0];
                    loaded += v[0] * v[1];
                });

                percent = total ? loaded / total : 0;

                spans.eq(0).text(Math.round(percent * 100) + '%');
                spans.eq(1).css('width', Math.round(percent * 100) + '%');
                updateStatus();
            }

            function updateStatus() {
                var text = '',
                    stats;

                if (state === 'ready') {
                    text = '选中' + fileCount + '条文件，共' +
                        WebUploader1.formatSize(fileSize) + '。';
                } else if (state === 'confirm') {
                    stats = uploader.getStats();
                    if (stats.uploadFailNum) {
                        text = '已成功上传' + stats.successNum + '条文件至，' +
                            stats.uploadFailNum + '条文件上传失败，<a class="retry" href="#">重新上传</a>失败文件或<a class="ignore" href="#">忽略</a>'
                    }

                } else {
                    stats = uploader.getStats();
                    text = '共' + fileCount + '条（' +
                        WebUploader1.formatSize(fileSize) +
                        '），已上传' + stats.successNum + '条';

                    if (stats.uploadFailNum) {
                        text += '，失败' + stats.uploadFailNum + '条';
                    }
                }

                $info.html(text);
            }

            function setState(val) {
                var file, stats;

                if (val === state) {
                    return;
                }

                $upload.removeClass('state-' + state);
                $upload.addClass('state-' + val);
                state = val;

                switch (state) {
                    case 'pedding':
                        $placeHolder.removeClass('element-invisible');
                        $queue.hide();
                        $statusBar.addClass('element-invisible');
                        uploader.refresh();
                        break;

                    case 'ready':
                        $placeHolder.addClass('element-invisible');
                        $queue.show();
                        $statusBar.removeClass('element-invisible');
                        uploader.refresh();
                        break;

                    case 'uploading':
                        $progress.show();
                        $upload.text('暂停上传');
                        break;

                    case 'paused':
                        $progress.show();
                        $upload.text('继续上传');
                        break;

                    case 'confirm':
                        $progress.hide();
                        $upload.text('开始上传').addClass('disabled');

                        stats = uploader.getStats();
                        if (stats.successNum && !stats.uploadFailNum) {
                            setState('finish');
                            return;
                        }
                        break;
                    case 'finish':
                        stats = uploader.getStats();
                        if (stats.successNum) {
                            //alert('上传成功');
                        } else {
                            // 没有成功的文件，重设
                            state = 'done';
                            location.reload();
                        }
                        break;
                }

                updateStatus();
            }


            $upload.on('click', function () {
                if ($(this).hasClass('disabled')) {
                    return false;
                }

                if (state === 'ready') {
                    uploader.upload();
                } else if (state === 'paused') {
                    uploader.upload();
                } else if (state === 'uploading') {
                    uploader.stop();
                }
            });

            $info.on('click', '.retry', function () {
                uploader.retry();
            });

            $info.on('click', '.ignore', function () {
                alert('todo');
            });

            $upload.addClass('state-' + state);
            updateTotalProgress();
        }
        return $(this).each(function () {
            fun($(this));
        });
    }
})(jQuery);
function addSingleFile(parentObj,data) {
    parentObj.find(".placeholder").addClass('element-invisible');
    parentObj.find(".statusBar").hide();
    parentObj.find(".filelist").children().remove();
    var $li = $('<li>' +
       '<p class="title">' + data.name + '</p>' +
       '<p class="imgWrap"></p>' +
       '</li>'),
       parentObj = $li.find('p.imgWrap');
    var img = $('<img src="' + data.path + '"/>');
    parentObj.empty().append(img);
    $li.appendTo(parentObj.find(".filelist"));
}
(function ($) {
    // 扩展md5逻辑
    var Uploader = WebUploader1.Uploader;

    var fr;

    function readContent(file, cb) {
        var chunkSize = 2 * 1024 * 1024,
            chunks = Math.ceil(file.size / chunkSize),
            chunk = 0,
            ret = '',
            blobSlice = file.mozSlice || file.webkitSlice || file.slice,
            loadNext;

        fr = fr || new FileReader;

        loadNext = function () {
            var start, end;

            start = chunk * chunkSize;
            end = start + chunkSize >= file.size ? file.size : start + chunkSize;

            fr.onload = function (e) {
                ret += fr.result;
                fr.result = null;
            };

            fr.onloadend = function () {
                fr.onload = fr.onloadend = null;

                if (++chunk < chunks) {
                    setTimeout(loadNext, 1);
                } else {
                    fr.readAsBinaryString(new Blob(['a'], {
                        type: 'text/plain'
                    }));
                    cb(ret);
                    ret = loadNext = blobSlice = file = null;
                }
            };

            fr.readAsBinaryString(blobSlice.call(file, start, end));
        };

        loadNext();
    }

    function Md5File(file, callback) {

        readContent(file, function (ret) {
            ret = md5(ret);

            setTimeout(function () {
                callback(ret);
            }, 1);
        });
    }

    Uploader.register({
        'before-send-file': 'preupload'
    }, {
        preupload: function (file) {
            var me = this,
                owner = this.owner,
                server = me.options.server,
                deferred = WebUploader1.Deferred(),
                blob = file.source.getSource();

            Md5File(blob, function (ret) {
                $.ajax(server, {
                    dataType: 'json',
                    data: {
                        md5: ret
                    },
                    success: function (response) {
                        if (response.exist) {
                            owner.skipFile(file);
                            var log = $('#' + file.id).find('p.imgWrap')
                            log.text('文件重复，已跳过');
                        }
                        deferred.resolve(true);
                    }
                });
            });

            return deferred.promise();
        }
    });
})(jQuery);