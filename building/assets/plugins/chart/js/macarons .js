(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }

    var colorPalette = [
       '#CA513A','#1090E1', '#3ACA60','#66B9D3','#A5BACB',
       '#CA513A','#1090E1', '#3ACA60','#66B9D3','#A5BACB',
       '#CA513A','#1090E1', '#3ACA60','#66B9D3','#A5BACB',
    ];


    var theme = {
        color: colorPalette,

        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: "#BFC0C1"//工具栏颜色
                }
            }
        },

        tooltip: {
            axisPointer : {
                type : 'line',
                shadowStyle : {
                    color: 'rgba(191,192,193,0.1)'
                }
            }
        },



        categoryAxis: {
            axisLine: {
        		show:false,
                lineStyle: {
                    color: '#BFC0C1'//X轴文字颜色
                }
            },
            axisTick:{
        		show:false,
            },
            splitLine: {
        		show:false
            }
        },

        valueAxis: {
            axisLine: {
        		show:false,
                lineStyle: {
                    color: '#BFC0C1'//Y轴文字颜色
                }
            }, 
            axisTick:{
        		show:false,
            },

            splitLine: {
        		show:true,
                lineStyle: {
                    color: 'rgba(222,222,222,.1)',
                    type: 'dashed'
                }
            }
        },

    };

    echarts.registerTheme('macarons', theme);
}));


	