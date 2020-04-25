$(function () {
    var defaultData = [
   {
       text: '电',
       href: '#parent1',
       tags: ['0'],
       type: "1",
       nodes: [
         {
             text: '空调用电',
             href: '#child1',
             tags: ['0'],
             type: "1",
             nodes: [
               {
                   text: '制冷机房',
                   href: '#grandchild1',
                   tags: ['0'],
                   type: "1",
                   nodes: [
                       {
                           text: '冷却水循环泵1',
                           href: '#grandgrandchild1',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '冷水循环泵1',
                           href: '#grandgrandchild2',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '冷却塔1',
                           href: '#grandgrandchild3',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '热水冷却循环泵1',
                           href: '#grandgrandchild4',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '1号冷机1',
                           href: '#grandgrandchild5',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '2号冷机1',
                           href: '#grandgrandchild6',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '3号冷机1',
                           href: '#grandgrandchild7',
                           tags: ['0'],
                           type: "1",
                       }
                   ]
               },
               {
                   text: '换热站2',
                   href: '#grandchild2',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '手术空调室8',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
               }
             ]
         },
         {
             text: '照明插座用电',
             href: '#child2',
             tags: ['0'],
             type: "1",
             nodes: [
               {
                   text: '变配电室照明2',
                   href: '#grandchild1',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '主楼照明2',
                   href: '#grandchild2',
                   tags: ['0'],
                   type: "1",
                   nodes: [
                       {
                           text: '地下二层照明',
                           href: '#grandgrandchild1',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '地下一层照明',
                           href: '#grandgrandchild2',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '一层照明',
                           href: '#grandgrandchild3',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '二层照明',
                           href: '#grandgrandchild4',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '三层照明',
                           href: '#grandgrandchild5',
                           tags: ['0'], type: "1",
                       },
                       {
                           text: '四层照明',
                           href: '#grandgrandchild6',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '五层照明',
                           href: '#grandgrandchild7',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '六层照明',
                           href: '#grandgrandchild8',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '七层照明',
                           href: '#grandgrandchild9',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '八层照明',
                           href: '#grandgrandchild10',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '九层照明',
                           href: '#grandgrandchild11',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '十层照明',
                           href: '#grandgrandchild12',
                           tags: ['0'], type: "1",
                       },
                       {
                           text: '十一层照明',
                           href: '#grandgrandchild13',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '十二层照明',
                           href: '#grandgrandchild14',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '十三层照明',
                           href: '#grandgrandchild15',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '十四层照明',
                           href: '#grandgrandchild16',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '十五层照明',
                           href: '#grandgrandchild17',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '十六层照明',
                           href: '#grandgrandchild18',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '十七层照明',
                           href: '#grandgrandchild19',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '十八层照明',
                           href: '#grandgrandchild20',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '十九层照明',
                           href: '#grandgrandchild21',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '二十层照明',
                           href: '#grandgrandchild22',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '二十一层照明',
                           href: '#grandgrandchild23',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '二十二层照明',
                           href: '#grandgrandchild24',
                           tags: ['0'],
                           type: "1",
                       }
                   ]
               },
               {
                   text: 'B区裙房照明2',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '应急照明',
                   href: '#grandchild4',
                   tags: ['0'],
                   type: "1",
                   nodes: [
                       {
                           text: '主楼高区应急照明2',
                           href: '#grandgrandchild1',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '主楼低区应急照明2',
                           href: '#grandgrandchild2',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: 'B区裙房应急照明2',
                           href: '#grandgrandchild3',
                           tags: ['0'],
                           type: "1",
                       }
                   ]

               }
             ]
         },
         {
             text: '动力用电',
             href: '#child3',
             tags: ['0'],
             type: "1",
             nodes: [
               {
                   text: '电梯16',
                   href: '#grandchild1',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '制氧站2',
                   href: '#grandchild2',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '真空吸引2',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '主楼动力',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
                   nodes: [
                       {
                           text: '高区1',
                           href: '#grandgrandchild1',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '低区1',
                           href: '#grandgrandchild2',
                           tags: ['0'],
                           type: "1",
                       }
                   ]
               },
               {
                   text: 'B区动力1',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '消防泵房2',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '生活、中水泵房',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
               }
             ]
         },
         {
             text: '医疗用电',
             href: '#child4',
             tags: ['0'],
             type: "1",
             nodes: [
               {
                   text: '手术室医疗',
                   href: '#grandchild1',
                   tags: ['0'],
                   type: "1",
                   nodes: [
                       {
                           text: '扫描设备2',
                           href: '#grandgrandchild1',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '血管造影设备1',
                           href: '#grandgrandchild2',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '手术区电源2',
                           href: '#grandgrandchild3',
                           tags: ['0'],
                           type: "1",
                       }
                   ]
               },
               {
                   text: '大型医疗设备',
                   href: '#grandchild2',
                   tags: ['0'],
                   type: "1",
                   nodes: [
                       {
                           text: 'X光机5',
                           href: '#grandgrandchild1',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: 'MR设备3',
                           href: '#grandgrandchild2',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '乳腺X光机1',
                           href: '#grandgrandchild3',
                           tags: ['0'], type: "1",
                       },
                       {
                           text: '全景X光机1',
                           href: '#grandgrandchild4',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: 'DSA设备3',
                           href: '#grandgrandchild5',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: '胃肠X光机1',
                           href: '#grandgrandchild6',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: 'CT设备2',
                           href: '#grandgrandchild7',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: 'DR设备2',
                           href: '#grandgrandchild8',
                           tags: ['0'],
                           type: "1",
                       }
                   ]
               },
               {
                   text: '主楼医用电力2',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: 'B区裙房医疗动力2',
                   href: '#grandchild4',
                   tags: ['0'],
                   type: "1",
               }
             ]
         },
         {
             text: '特殊用电',
             href: '#child5',
             tags: ['0'],
             type: "1",
             nodes: [
               {
                   text: '地下食堂3',
                   href: '#grandchild1',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '网管主机房2',
                   href: '#grandchild2',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '消防控制室2',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
               },
               {
                   text: '消防用电',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
                   nodes: [
                       {
                           text: '主楼消防电力2',
                           href: '#grandgrandchild1',
                           tags: ['0'],
                           type: "1",
                       },
                       {
                           text: 'B区裙房消防电力2',
                           href: '#grandgrandchild2',
                           tags: ['0'],
                           type: "1",
                       }
                   ]
               },
               {
                   text: '其他用电40',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "1",
               }
             ]
         }
       ]
   },
   {
       text: '水',
       href: '#parent2',
       tags: ['0'],
       type: "2",
       nodes: [
         {
             text: '冷水',
             href: '#child1',
             tags: ['0'],
             type: "2",
             nodes: [
               {
                   text: '空调机房补水1',
                   href: '#grandchild1',
                   tags: ['0'],
                   type: "2",
               },
               {
                   text: '中水事故补水2',
                   href: '#grandchild2',
                   tags: ['0'],
                   type: "2",
               },
               {
                   text: '生活给水1',
                   href: '#grandchild3',
                   tags: ['0'],
                   type: "2",
                   nodes: [
                       {
                           text: '低区1',
                           href: '#grandgrandchild1',
                           tags: ['0'],
                           type: "2",
                           nodes: [
                               {
                                   text: '食堂用冷水1',
                                   href: '#grandgrandgrandchild1',
                                   tags: ['0'],
                                   type: "2",
                               },
                               {
                                   text: '生活热水补水1',
                                   href: '#grandgrandgrandchild2',
                                   tags: ['0'],
                                   type: "2",
                                   nodes: [
                                       {
                                           text: '食堂用热水2(取差值)',
                                           href: '#grandgrandgrandgrandchild1',
                                           tags: ['0'],
                                           type: "2",
                                       },
                                       {
                                           text: '其他',
                                           href: '#grandgrandgrandgrandchild2',
                                           tags: ['0'],
                                           type: "2",
                                       }
                                   ]
                               },
                               {
                                   text: '其他',
                                   href: '#grandgrandgrandchild3',
                                   tags: ['0'],
                                   type: "2",
                               }
                           ]
                       },
                       {
                           text: '中区减压1',
                           href: '#grandgrandchild2',
                           tags: ['0'],
                           type: "2",
                           nodes: [
                               {
                                   text: '食堂用冷水1',
                                   href: '#grandgrandgrandchild1',
                                   tags: ['0'],
                                   type: "2",
                               },
                               {
                                   text: '生活热水补水1',
                                   href: '#grandgrandgrandchild2',
                                   tags: ['0'],
                                   type: "2",
                               }
                           ]
                       },
                       {
                           text: '中区1',
                           href: '#grandgrandchild3',
                           tags: ['0'],
                           type: "2",
                           nodes: [
                               {
                                   text: '食堂用冷水1',
                                   href: '#grandgrandgrandchild1',
                                   tags: ['0'],
                                   type: "2",
                               },
                               {
                                   text: '生活热水补水1',
                                   href: '#grandgrandgrandchild2',
                                   tags: ['0'],
                                   type: "2",
                               }
                           ]
                       },
                       {
                           text: '高区减压1',
                           href: '#grandgrandchild4',
                           tags: ['0'],
                           type: "2",
                           nodes: [
                               {
                                   text: '食堂用冷水1',
                                   href: '#grandgrandgrandchild1',
                                   tags: ['0'],
                                   type: "2",
                               },
                               {
                                   text: '生活热水补水1',
                                   href: '#grandgrandgrandchild2',
                                   tags: ['0'],
                                   type: "2",
                               }
                           ]
                       },
                       {
                           text: '高区1',
                           href: '#grandgrandchild5',
                           tags: ['0'],
                           type: "2",
                           nodes: [
                               {
                                   text: '食堂用冷水1',
                                   href: '#grandgrandgrandchild1',
                                   tags: ['0'],
                                   type: "2",
                               },
                               {
                                   text: '生活热水补水1',
                                   href: '#grandgrandgrandchild2',
                                   tags: ['0'],
                                   type: "2",
                               }
                           ]
                       }
                   ]
               }
             ]
         },
         {
             text: '中水',
             href: '#child2',
             tags: ['0'],
             type: "2",
         }
       ]
   },
   {
       text: '集中供冷量',
       href: '#parent3',
       tags: ['0'],
       type: "3",
   },
   {
       text: '集中供热量',
       href: '#parent4',
       tags: ['0'],
       type: "4",
   }

    ];

    //能耗容器
	  	
       


	  	
        });