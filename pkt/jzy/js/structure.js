var category_data = [{
    id: "electric",
    data: [{
        "id": 1, "icon": "../img/icon/electricity.png", "name": "电", "value": "----", "unit": "kwh", "pid": null, "code": "1", "childrens": [
          {
              "id": 2, "icon": "../img/icon/e-socket.png", "name": "空调用电*", "value": "----", "unit": "kwh", "pid": 1, "code": "1-1", "childrens": [
                {
                    "id": 7, "icon": "../img/icon/e-socket.png", "name": "制冷机房", "value": "----", "unit": "kwh", "pid": 2, "code": "1-1-1", "childrens": [
	                    { "id": 7, "icon": "../img/icon/e-socket.png", "name": "冷却水循环泵", "value": "----", "code": "1-1-1-1", "unit": "kwh", "pid": 2, "childrens": [] },
			            { "id": 7, "icon": "../img/icon/e-socket.png", "name": "冷水循环泵", "value": "----", "code": "1-1-1-2", "unit": "kwh", "pid": 2, "childrens": [] },
			            { "id": 7, "icon": "../img/icon/e-socket.png", "name": "冷却塔", "value": "----", "code": "1-1-1-3", "unit": "kwh", "pid": 2, "childrens": [] },
			            { "id": 7, "icon": "../img/icon/e-socket.png", "name": "热水冷却循环泵", "value": "----", "code": "1-1-1-4", "unit": "kwh", "pid": 2, "childrens": [] },
			            { "id": 7, "icon": "../img/icon/e-socket.png", "name": "1号冷机", "value": "----", "code": "1-1-1-5", "unit": "kwh", "pid": 2, "childrens": [] },
			            { "id": 7, "icon": "../img/icon/e-socket.png", "name": "2号冷机", "value": "----", "code": "1-1-1-6", "unit": "kwh", "pid": 2, "childrens": [] },
			            { "id": 7, "icon": "../img/icon/e-socket.png", "name": "3号冷机", "value": "----", "code": "1-1-1-7", "unit": "kwh", "pid": 2, "childrens": [] }
                    ]
                },
                {
                    "id": 8, "icon": "../img/icon/e-emergency.png", "name": "换热站", "value": "----", "unit": "kwh", "pid": 2, "code": "1-1-2", "childrens": []
                },
                {
                    "id": 9, "icon": "../img/icon/e-outside.png", "name": "手术室空调", "value": "----", "unit": "kwh", "pid": 2, "code": "1-1-3", "childrens": []
                }
              ]
          },
          {
              "id": 3, "icon": "../img/icon/e-air-conditioner.png", "name": "动力用电", "value": "----", "unit": "kwh", "pid": 1, "code": "1-3", "childrens": [
                    {
                        "id": 10, "icon": "../img/icon/e-air-conditioner.png", "name": "电梯", "value": "----", "unit": "kwh", "pid": 4, "code": "1-3-1", "childrens": []
                    },
                   {
                       "id": 11, "icon": "../img/icon/e-heating.png", "name": "制氧站*", "value": "----", "unit": "kwh", "pid": 4, "code": "1-3-2", "childrens": []
                   },
                   {
                       "id": 12, "icon": "../img/icon/e-cooling-wate.png", "name": "真空吸引", "value": "----", "unit": "kwh", "pid": 4, "code": "1-3-3", "childrens": []
                   },
                   {
                       "id": 13, "icon": "../img/icon/e-pump-auxiliary.png", "name": "主楼动力", "value": "----", "unit": "kwh", "pid": 4, "code": "1-3-4", "childrens": [

				            { "id": 13, "icon": "../img/icon/e-pump-auxiliary.png", "name": "高区", "value": "----", "code": "1-3-4-1", "unit": "kwh", "pid": 4, "childrens": [] },
				            { "id": 13, "icon": "../img/icon/e-pump-auxiliary.png", "name": "低区", "value": "----", "code": "1-3-4-2", "unit": "kwh", "pid": 4, "childrens": [] }
                       ]
                   },
                   {
                       "id": 14, "icon": "../img/icon/e-pump-auxiliary.png", "name": "B区动力", "value": "----", "unit": "kwh", "pid": 4, "code": "1-3-5", "childrens": []
                   },
                   {
                       "id": 15, "icon": "../img/icon/e-pump-auxiliary.png", "name": "消防泵房", "value": "----", "unit": "kwh", "pid": 4, "code": "1-3-6", "childrens": []
                   },
                   {
                       "id": 16, "icon": "../img/icon/e-pump-auxiliary.png", "name": "生活、中水泵房", "value": "----", "unit": "kwh", "pid": 4, "code": "1-3-7", "childrens": []
                   }
              ]
          },
          {
              "id": 4, "icon": "../img/icon/e-power.png", "name": "照明插座用电*", "value": "----", "unit": "kwh", "pid": 1, "code": "1-2", "childrens": [
                  {
                      "id": 17, "icon": "../img/icon/e-elevator.png", "name": "变配电室照明", "value": "----", "unit": "kwh", "pid": 3, "code": "1-2-1", "childrens": []
                  },
                   {
                       "id": 18, "icon": "../img/icon/e-elevator.png", "name": "主楼照明", "value": "----", "unit": "kwh", "pid": 3, "code": "1-2-2", "childrens": [
	                       	{ "id": 18, "icon": "../img/icon/e-elevator.png", "name": "一层照明", "value": "----", "code": "1-2-2-1", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "二层照明", "value": "----", "code": "1-2-2-2", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "三层照明", "value": "----", "code": "1-2-2-3", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "四层照明", "value": "----", "code": "1-2-2-4", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "五层照明", "value": "----", "code": "1-2-2-5", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "六层照明", "value": "----", "code": "1-2-2-6", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "七层照明", "value": "----", "code": "1-2-2-7", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "八层照明", "value": "----", "code": "1-2-2-8", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "九层照明", "value": "----", "code": "1-2-2-9", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十层照明", "value": "----", "code": "1-2-2-10", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十一层照明", "value": "----", "code": "1-2-2-11", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十二层照明", "value": "----", "code": "1-2-2-12", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十三层照明", "value": "----", "code": "1-2-2-13", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十四层照明", "value": "----", "code": "1-2-2-14", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十五层照明", "value": "----", "code": "1-2-2-15", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十六层照明", "value": "----", "code": "1-2-2-16", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十七层照明", "value": "----", "code": "1-2-2-17", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十八层照明", "value": "----", "code": "1-2-2-18", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "十九层照明", "value": "----", "code": "1-2-2-19", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "二十层照明", "value": "----", "code": "1-2-2-20", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "二十一层照明", "value": "----", "code": "1-2-2-21", "unit": "kwh", "pid": 3, "childrens": [] },
				            { "id": 18, "icon": "../img/icon/e-elevator.png", "name": "二十二层照明", "value": "----", "code": "1-2-2-22", "unit": "kwh", "pid": 3, "childrens": [] }
                       ]
                   },
                   {
                       "id": 19, "icon": "../img/icon/e-pump.png", "name": "B区裙房照明", "value": "----", "unit": "kwh", "pid": 3, "code": "1-2-3", "childrens": []
                   },
                   {
                       "id": 20, "icon": "../img/icon/e-ventilator.png", "name": "应急照明", "value": "----", "unit": "kwh", "pid": 3, "code": "1-2-4", "childrens": [

				            { "id": 20, "icon": "../img/icon/e-ventilator.png", "name": "主楼高楼应急照明", "value": "----", "code": "1-2-4-1", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 20, "icon": "../img/icon/e-ventilator.png", "name": "主楼低楼应急照明", "value": "----", "code": "1-2-4-2", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 20, "icon": "../img/icon/e-ventilator.png", "name": "B区裙房应急照明", "value": "----", "code": "1-2-4-3", "unit": "kwh", "pid": 5, "childrens": [] }
                       ]
                   }
              ]
          },

          {
              "id": 5, "icon": "../img/icon/electricity.png", "name": "医疗用电", "value": "----", "unit": "kwh", "pid": 1, "code": "1-4", "childrens": [
                   {
                       "id": 21, "icon": "../img/icon/e-info.png", "name": "手术室医疗", "value": "----", "unit": "kwh", "pid": 5, "code": "1-4-1", "childrens": [

				            { "id": 21, "icon": "../img/icon/e-info.png", "name": "扫描设备", "value": "----", "code": "1-4-1-1", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 21, "icon": "../img/icon/e-info.png", "name": "血管造影设备", "value": "----", "code": "1-4-1-2", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 21, "icon": "../img/icon/e-info.png", "name": "手术区电源", "value": "----", "code": "1-4-1-3", "unit": "kwh", "pid": 5, "childrens": [] }
                       ]
                   },
                   {
                       "id": 22, "icon": "../img/icon/else.png", "name": "大型医疗设备", "value": "----", "unit": "kwh", "pid": 5, "code": "1-4-2", "childrens": [

				            { "id": 22, "icon": "../img/icon/else.png", "name": "X光机", "value": "----", "code": "1-4-2-1", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 22, "icon": "../img/icon/else.png", "name": "MR设备", "value": "----", "code": "1-4-2-2", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 22, "icon": "../img/icon/else.png", "name": "乳腺X光机", "value": "----", "code": "1-4-2-3", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 22, "icon": "../img/icon/else.png", "name": "全景X光机", "value": "----", "code": "1-4-2-4", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 22, "icon": "../img/icon/else.png", "name": "DSA设备", "value": "----", "code": "1-4-2-5", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 22, "icon": "../img/icon/else.png", "name": "胃肠X光机", "value": "----", "code": "1-4-2-6", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 22, "icon": "../img/icon/else.png", "name": "CT设备", "value": "----", "code": "1-4-2-7", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 22, "icon": "../img/icon/else.png", "name": "DR设备", "value": "----", "code": "1-4-2-8", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 22, "icon": "../img/icon/else.png", "name": "精准MDL设备*", "value": "----", "code": "1-4-2-9", "unit": "kwh", "pid": 5, "childrens": [] }
                       ]
                   },
                   {
                       "id": 23, "icon": "../img/icon/else.png", "name": "主楼医用电力", "value": "----", "unit": "kwh", "pid": 5, "code": "1-4-3", "childrens": []
                   },
                   {
                       "id": 24, "icon": "../img/icon/else.png", "name": "B区裙房医疗动力", "value": "----", "unit": "kwh", "pid": 5, "code": "1-4-4", "childrens": []
                   }
              ]
          },
          {
              "id": 6, "icon": "../img/icon/electricity.png", "name": "特殊用电", "value": "----", "unit": "kwh", "pid": 1, "code": "1-5", "childrens": [
                   {
                       "id": 25, "icon": "../img/icon/e-info.png", "name": "地下食堂*", "value": "----", "unit": "kwh", "pid": 5, "code": "1-5-1", "childrens": []
                   },
                   {
                       "id": 26, "icon": "../img/icon/else.png", "name": "网管主机房", "value": "----", "unit": "kwh", "pid": 5, "code": "1-5-2", "childrens": []
                   },
                   {
                       "id": 27, "icon": "../img/icon/else.png", "name": "消防控制室", "value": "----", "unit": "kwh", "pid": 5, "code": "1-5-3", "childrens": []
                   },
                   {
                       "id": 27, "icon": "../img/icon/else.png", "name": "消防用电", "value": "----", "unit": "kwh", "pid": 5, "code": "1-5-4", "childrens": [

				            { "id": 27, "icon": "../img/icon/else.png", "name": "主楼消防电力", "value": "----", "code": "1-5-4-1", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 27, "icon": "../img/icon/else.png", "name": "B区裙房消防电力", "value": "----", "code": "1-5-4-2", "unit": "kwh", "pid": 5, "childrens": [] }
                       ]
                   },
                   {
                       "id": 28, "icon": "../img/icon/else.png", "name": "其他用电", "value": "----", "unit": "kwh", "pid": 5, "code": "1-5-5", "childrens": [

				            { "id": 28, "icon": "../img/icon/else.png", "name": "其他", "value": "----", "code": "1-5-5-1", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 28, "icon": "../img/icon/else.png", "name": "信号报警箱", "value": "----", "code": "1-5-5-2", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 28, "icon": "../img/icon/else.png", "name": "备用", "value": "----", "code": "1-5-5-3", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 28, "icon": "../img/icon/else.png", "name": "电容柜", "value": "----", "code": "1-5-5-4", "unit": "kwh", "pid": 5, "childrens": [] },
				            { "id": 28, "icon": "../img/icon/else.png", "name": "母联柜", "value": "----", "code": "1-5-5-5", "unit": "kwh", "pid": 5, "childrens": [] }
                       ]
                   }
              ]
          }
        ]
    }]
}, {
    id: "water",
    data: [{
        "id": 1, "icon": "../img/icon/water.png", "name": "水", "value": "----", "unit": "m³", "pid": null, "code": "2", "childrens": [
          {
              "id": 2, "icon": "../img/icon/w-tree.png", "name": "冷水", "value": "----", "unit": "m³", "pid": 1, "code": "2-1", "childrens": [
                  {
                      "id": 4, "icon": "../img/icon/w-all.png", "name": "空调机房补水", "value": "----", "unit": "m³", "pid": 1, "code": "2-1-1", "childrens": []
                  },
                  {
                      "id": 6, "icon": "../img/icon/w-all.png", "name": "生活供水", "value": "----", "unit": "m³", "pid": 1, "code": "2-1-3", "childrens": [
                           {
                               "id": 25, "icon": "../img/icon/e-info.png", "name": "低区总供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-1", "childrens": [
                               {
                                   "id": 25, "icon": "../img/icon/e-info.png", "name": "食堂供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-1-1", "childrens": []
                               },
                               {
                                   "id": 26, "icon": "../img/icon/else.png", "name": "低区热水补水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-1-2", "childrens": [

            { "id": 26, "icon": "../img/icon/else.png", "name": "食堂生活热水", "value": "----", "code": "2-1-3-1-2-1", "unit": "m³", "pid": 5, "childrens": [] },
            { "id": 26, "icon": "../img/icon/else.png", "name": "低区生活热水", "value": "----", "code": "2-1-3-1-2-2", "unit": "m³", "pid": 5, "childrens": [] },
                                   ]
                               },
                               {
                                   "id": 26, "icon": "../img/icon/else.png", "name": "低区生活供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-1-3", "childrens": []
                               }
                               ]
                           },
                           {
                               "id": 26, "icon": "../img/icon/else.png", "name": "中区减压总供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-2", "childrens": [
                               {
                                   "id": 25, "icon": "../img/icon/e-info.png", "name": "中区减压热水补水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-2-1", "childrens": []
                               },
                               {
                                   "id": 26, "icon": "../img/icon/else.png", "name": "中区减压生活供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-2-2", "childrens": []
                               }]
                           },
                           {
                               "id": 27, "icon": "../img/icon/else.png", "name": "中区总供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-3", "childrens": [
                               {
                                   "id": 25, "icon": "../img/icon/e-info.png", "name": "中区热水补水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-3-1", "childrens": []
                               },
                               {
                                   "id": 26, "icon": "../img/icon/else.png", "name": "中区生活供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-3-2", "childrens": []
                               }]
                           },
                           {
                               "id": 27, "icon": "../img/icon/else.png", "name": "高区减压总供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-4", "childrens": [
                               {
                                   "id": 25, "icon": "../img/icon/e-info.png", "name": "高区减压热水补水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-4-1", "childrens": []
                               },
                               {
                                   "id": 26, "icon": "../img/icon/else.png", "name": "高区减压生活供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-4-2", "childrens": []
                               }]
                           },
                           {
                               "id": 28, "icon": "../img/icon/else.png", "name": "高区总供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-5", "childrens": [
                               {
                                   "id": 25, "icon": "../img/icon/e-info.png", "name": "高区热水补水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-5-1", "childrens": []
                               },
                               {
                                   "id": 26, "icon": "../img/icon/else.png", "name": "高区生活供水", "value": "----", "unit": "m³", "pid": 5, "code": "2-1-3-5-2", "childrens": []
                               }]
                           }
                      ]
                  },
                  {
                      "id": 5, "icon": "../img/icon/w-all.png", "name": "中水事故补水", "value": "----", "unit": "m³", "pid": 1, "code": "2-1-2", "childrens": []
                  }
              ]
          },
          {
              "id": 3, "icon": "../img/icon/w-all.png", "name": "中水", "value": "----", "unit": "m³", "pid": 1, "code": "2-2", "childrens": []
          }
        ]
    }]
}, {
    id: "hot",
    data: [{
        "id": 1, "icon": "../img/icon/different.png", "name": "集中供冷量", "value": "----", "unit": "kwh", "pid": null, "code": "3", "childrens": []
    }]
}, {
    id: "cold",
    data: [{
        "id": 1, "icon": "../img/icon/different.png", "name": "集中供热量", "value": "----", "unit": "kwh", "pid": null, "code": "4", "childrens": []
    }]
}];
var sort = 1, a, b, sorta = 1;
var item;
var kind = 1;
var arrayfather = [
    {
        name: "制冷机房", son: [
            { name: "冷却水循环泵", value: "----", code: "1-1-1-1" },
            { name: "冷水循环泵", value: "----", code: "1-1-1-2" },
            { name: "冷却塔", value: "----", code: "1-1-1-3" },
            { name: "热水冷却循环泵", value: "----", code: "1-1-1-4" },
            { name: "1号冷机", value: "----", code: "1-1-1-5" },
            { name: "2号冷机", value: "----", code: "1-1-1-6" },
            { name: "3号冷机", value: "----", code: "1-1-1-7" }
        ]
    },
    {
        name: "主楼照明", son: [
            { name: "一层照明", value: "----", code: "1-2-2-1" },
            { name: "二层照明", value: "----", code: "1-2-2-2" },
            { name: "三层照明", value: "----", code: "1-2-2-3" },
            { name: "四层照明", value: "----", code: "1-2-2-4" },
            { name: "五层照明", value: "----", code: "1-2-2-5" },
            { name: "六层照明", value: "----", code: "1-2-2-6" },
            { name: "七层照明", value: "----", code: "1-2-2-7" },
            { name: "八层照明", value: "----", code: "1-2-2-8" },
            { name: "九层照明", value: "----", code: "1-2-2-9" },
            { name: "十层照明", value: "----", code: "1-2-2-10" },
            { name: "十一层照明", value: "----", code: "1-2-2-11" },
            { name: "十二层照明", value: "----", code: "1-2-2-12" },
            { name: "十三层照明", value: "----", code: "1-2-2-13" },
            { name: "十四层照明", value: "----", code: "1-2-2-14" },
            { name: "十五层照明", value: "----", code: "1-2-2-15" },
            { name: "十六层照明", value: "----", code: "1-2-2-16" },
            { name: "十七层照明", value: "----", code: "1-2-2-17" },
            { name: "十八层照明", value: "----", code: "1-2-2-18" },
            { name: "十九层照明", value: "----", code: "1-2-2-19" },
            { name: "二十层照明", value: "----", code: "1-2-2-20" },
            { name: "二十一层照明", value: "----", code: "1-2-2-21" },
            { name: "二十二层照明", value: "----", code: "1-2-2-22" }
        ]
    },
    {
        name: "应急照明", son: [
            { name: "主楼高楼应急照明", value: "----", code: "1-2-4-1" },
            { name: "主楼低楼应急照明", value: "----", code: "1-2-4-2" },
            { name: "B区裙房应急照明", value: "----", code: "1-2-4-3" }
        ]
    },
    {
        name: "主楼动力", son: [
            { name: "高区", value: "----", code: "1-3-4-1" },
            { name: "低区", value: "----", code: "1-3-4-2" }
        ]
    },
    {
        name: "手术室医疗", son: [
            { name: "扫描设备", value: "----", code: "1-4-1-1" },
            { name: "血管造影设备", value: "----", code: "1-4-1-2" },
            { name: "手术区电源", value: "----", code: "1-4-1-3" }
        ]
    },
    {
        name: "大型医疗设备", son: [
            { name: "X光机", value: "----", code: "1-4-2-1" },
            { name: "MR设备", value: "----", code: "1-4-2-2" },
            { name: "乳腺X光机", value: "----", code: "1-4-2-3" },
            { name: "全景X光机", value: "----", code: "1-4-2-4" },
            { name: "DSA设备", value: "----", code: "1-4-2-5" },
            { name: "胃肠X光机", value: "----", code: "1-4-2-6" },
            { name: "CT设备", value: "----", code: "1-4-2-7" },
            { name: "DR设备", value: "----", code: "1-4-2-8" },
            { name: "精准MDL设备*", value: "----", code: "1-4-2-9" }
        ]
    },
    {
        name: "消防用电", son: [
            { name: "主楼消防电力", value: "----", code: "1-5-4-1" },
            { name: "B区裙房消防电力", value: "----", code: "1-5-4-2" }
        ]
    },
    {
        name: "其他用电", son: [
            { name: "其他", value: "----", code: "1-5-5-1" },
            { name: "信号报警箱", value: "----", code: "1-5-5-2" },
            { name: "备用", value: "----", code: "1-5-5-3" },
            { name: "电容柜", value: "----", code: "1-5-5-4" },
            { name: "母联柜", value: "----", code: "1-5-5-5" }
        ]
    },
    {
        name: "低区热水补水", son: [
            { name: "食堂生活热水", value: "----", code: "2-1-3-1-2-1" },
            { name: "低区生活热水", value: "----", code: "2-1-3-1-2-2" },
        ]
    },

]
var kind = 1;
var all=parseUrl();
var token= all["token"];
mui.plusReady(function() {
	mui.init();
    jQuery(".jqrgchart-container div").addClass("hide");
    jQuery(".jqrgchart-container div#electric").removeClass("hide");
	getData();
    kindsel();
    //setArea();
//  setData();
});
function kindsel() {
	mui('body').on('tap','.nav ul li', function () {
        jQuery(".nav ul li").removeClass("navlihover");
       jQuery(this).addClass("navlihover");
        kind = jQuery(this).index() + 1;
        if (kind == 1) {
            jQuery(".jqrgchart-container div").addClass("hide");
            jQuery(".jqrgchart-container div#electric").removeClass("hide");
        } else if (kind == 2) {
            jQuery(".jqrgchart-container div").removeClass("hide");
            jQuery(".jqrgchart-container div#electric").addClass("hide");
        }
        //console.log(kind)
//      setData();
        getData();
    })
}
function setData() {

    for (var i = 0; i < category_data.length; i++) {
        jQuery("#org-" + category_data[i].id).children().remove();
        jQuery("#" + category_data[i].id).children(".jqrgchart").remove();
        showall(category_data[i].data, $("#org-" + category_data[i].id));
        jQuery("#org-" + category_data[i].id).jOrgChart({
            chartElement: '#' + category_data[i].id
        });
    }


    for (var i = 0; i < $(".counter").length; i++) {
        animateNumber($(".counter").eq(i), $(".counter").eq(i).html())
    }
}
 
function showall(menu_list, parent) {
    $.each(menu_list, function (index, val) {
        if (val.childrens.length > 0) {
            var li = $("<li></li>");
            var html = "<p><img src='" + val.icon + "'/></p>";
            html += "<p>" + val.name + "</p>";
            html += "<div class='num textcenter'><p class='counter fontfamily'>" + val.value + "</p><p class='unit fontsize12'>" + val.unit + "</p></div>";
            li.append("<a href='javascript:void(0)'>" + html + "</a>").append("<ul></ul>").appendTo(parent);
            //递归显示
            showall(val.childrens, $(li).children().eq(1));
        } else {
            var html = "<p><img src='" + val.icon + "'/></p>";
            html += "<p>" + val.name + "</p>";
            html += "<div class='num textcenter'><p class='counter fontfamily'>" + val.value + "</p><p class='unit fontsize12'>" + val.unit + "</p></div>";


            $("<li></li>").append("<a href='javascript:void(0)'>" + html + "</a>").appendTo(parent);

        }
    });
} 
//接口
function getData() { 
	 
	var nwaiting = plus.nativeUI.showWaiting();//显示原生等待框

    var code = kind; 
    
    var http = "http://www.iwesong.com:8056";
	mui.ajax(http + '/tools/EcmDataHour.ashx', {
		data: {
			action: 'get_data_tree',
			code: code,
			type:1,
			area_id:1,
			exact:0,
			token:token
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//获得服务器响应 
//			alert(JSON.stringify(data));
 		var  item = data.data;
        var msg = data.msg;
        if (msg > 0) {
            for (var i = 0; i < item.length; i++) {
                seachid(item[i]);
            }

            setData();
			nwaiting.close();

        }
			 
		}
	}); 
    if (code == 2) {
        mui.ajax(http + '/tools/EcmDataHour.ashx', {
		data: {
			action: 'get_data_tree',
			code: 3,
			type:1,
			area_id:1,
			exact:0,
			token:token
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			//获得服务器响应 
//			alert(JSON.stringify(data));
 		var  item = data.data;
        var msg = data.msg;
        if (msg > 0) {
            for (var i = 0; i < item.length; i++) {
                seachid(item[i]);
            }

            setData();
			nwaiting.close();

        }
			 
		}
	}); 
    }
}
//赋值
function seachid(item) {
    //console.log(item)
    for (var i = 0; i < category_data.length; i++) {
        for (var j = 0; j < category_data[i].data.length; j++) {
            //console.log(category_data[i].data[j].code)
            if (item.code == category_data[i].data[j].code) {
                category_data[i].data[j].value = item.total;
            }
            for (var k = 0; k < category_data[i].data[j].childrens.length; k++) {
                //console.log(category_data[i].data[j].childrens[k].code)
                if (item.code == category_data[i].data[j].childrens[k].code) {
                    category_data[i].data[j].childrens[k].value = item.total;
                }
                for (var l = 0; l < category_data[i].data[j].childrens[k].childrens.length; l++) {
                    //console.log(category_data[i].data[j].childrens[k].childrens[l].code)
                    if (item.code == category_data[i].data[j].childrens[k].childrens[l].code) {
                        category_data[i].data[j].childrens[k].childrens[l].value = item.total;
                    }
                    for (var n = 0; n < category_data[i].data[j].childrens[k].childrens[l].childrens.length; n++) {
                        //console.log(category_data[i].data[j].childrens[k].childrens[l].childrens[n].code)
                        if (item.code == category_data[i].data[j].childrens[k].childrens[l].childrens[n].code) {
                            category_data[i].data[j].childrens[k].childrens[l].childrens[n].value = item.total;
                        }
                        for (var s = 0; s < category_data[i].data[j].childrens[k].childrens[l].childrens[n].childrens.length; s++) {
                            //console.log(category_data[i].data[j].childrens[k].childrens[l].childrens[n].childrens[s].code)
                            if (item.code == category_data[i].data[j].childrens[k].childrens[l].childrens[n].childrens[s].code) {
                                category_data[i].data[j].childrens[k].childrens[l].childrens[n].childrens[s].value = item.total;
                            }

                            for (var m = 0; m < category_data[i].data[j].childrens[k].childrens[l].childrens[n].childrens[s].childrens.length; m++) {
                                //console.log(category_data[i].data[j].childrens[k].childrens[l].childrens[n].childrens[s].code)
                                if (item.code == category_data[i].data[j].childrens[k].childrens[l].childrens[n].childrens[s].childrens[m].code) {
                                    category_data[i].data[j].childrens[k].childrens[l].childrens[n].childrens[s].childrens[m].value = item.total;
                                } 

                            }


                        }

                    }
                }
            }
        }
    } 

}