//对应类别
var defaultData = [
  {
      text: '电',
      href: '#parent',
      tags: ['0'],
      type: "1", "code": "1",
      nodes: [
        {
            text: '空调用电*',
            href: '#child',
            tags: ['0'],
            type: "1", "code": "1-1",
            nodes: [
              {
                  text: '制冷机房',
                  href: '#grandchild',
                  tags: ['0'],
                  type: "1", "code": "1-1-1",
                  nodes: [
                      {
                          text: '冷却水循环泵',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-1-1-1"
                      },
                      {
                          text: '冷水循环泵',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-1-1-2"
                      },
                      {
                          text: '冷却塔',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-1-1-3"
                      },
                      {
                          text: '热水冷却循环泵',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "1", code: "1-1-1-4"
                      },
                      {
                          text: '1号冷机',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "1", code: "1-1-1-5"
                      },
                      {
                          text: '2号冷机',
                          href: '#grandgrandchild6',
                          tags: ['0'],
                          type: "1", code: "1-1-1-6"
                      },
                      {
                          text: '3号冷机',
                          href: '#grandgrandchild7',
                          tags: ['0'],
                          type: "1", code: "1-1-1-7"
                      }
                  ]
              },
              {
                  text: '换热站',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-1-2",
              },
              {
                  text: '手术空调室',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-1-3",
              }
            ]
        },
        {
            text: '照明插座用电*',
            href: '#child2',
            tags: ['0'],
            type: "1", "code": "1-2",
            nodes: [
              {
                  text: '变配电室照明',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "1", "code": "1-2-1",
              },
              {
                  text: '主楼照明',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-2-2",
                  nodes: [

                      {
                          text: '一层照明',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-2-2-1"
                      },
                      {
                          text: '二层照明',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "1", code: "1-2-2-2"
                      },
                      {
                          text: '三层照明',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "1", code: "1-2-2-3"
                      },
                      {
                          text: '四层照明',
                          href: '#grandgrandchild6',
                          tags: ['0'],
                          type: "1", code: "1-2-2-4"
                      },
                      {
                          text: '五层照明',
                          href: '#grandgrandchild7',
                          tags: ['0'],
                          type: "1", code: "1-2-2-5"
                      },
                      {
                          text: '六层照明',
                          href: '#grandgrandchild8',
                          tags: ['0'],
                          type: "1", code: "1-2-2-6"
                      },
                      {
                          text: '七层照明',
                          href: '#grandgrandchild9',
                          tags: ['0'],
                          type: "1", code: "1-2-2-7"
                      },
                      {
                          text: '八层照明',
                          href: '#grandgrandchild10',
                          tags: ['0'],
                          type: "1", code: "1-2-2-8"
                      },
                      {
                          text: '九层照明',
                          href: '#grandgrandchild11',
                          tags: ['0'],
                          type: "1", code: "1-2-2-9"
                      },
                      {
                          text: '十层照明',
                          href: '#grandgrandchild12',
                          tags: ['0'],
                          type: "1", code: "1-2-2-10"
                      },
                      {
                          text: '十一层照明',
                          href: '#grandgrandchild13',
                          tags: ['0'],
                          type: "1", code: "1-2-2-11"
                      },
                      {
                          text: '十二层照明',
                          href: '#grandgrandchild14',
                          tags: ['0'],
                          type: "1", code: "1-2-2-12"
                      },
                      {
                          text: '十三层照明',
                          href: '#grandgrandchild15',
                          tags: ['0'],
                          type: "1", code: "1-2-2-13"
                      },
                      {
                          text: '十四层照明',
                          href: '#grandgrandchild16',
                          tags: ['0'],
                          type: "1", code: "1-2-2-14"
                      },
                      {
                          text: '十五层照明',
                          href: '#grandgrandchild17',
                          tags: ['0'],
                          type: "1", code: "1-2-2-15"
                      },
                      {
                          text: '十六层照明',
                          href: '#grandgrandchild18',
                          tags: ['0'],
                          type: "1", code: "1-2-2-16"
                      },
                      {
                          text: '十七层照明',
                          href: '#grandgrandchild19',
                          tags: ['0'],
                          type: "1", code: "1-2-2-17"
                      },
                      {
                          text: '十八层照明',
                          href: '#grandgrandchild20',
                          tags: ['0'],
                          type: "1", code: "1-2-2-18"
                      },
                      {
                          text: '十九层照明',
                          href: '#grandgrandchild21',
                          tags: ['0'],
                          type: "1", code: "1-2-2-19"
                      },
                      {
                          text: '二十层照明',
                          href: '#grandgrandchild22',
                          tags: ['0'],
                          type: "1", code: "1-2-2-20"
                      },
                      {
                          text: '二十一层照明',
                          href: '#grandgrandchild23',
                          tags: ['0'],
                          type: "1", code: "1-2-2-21"
                      },
                      {
                          text: '二十二层照明',
                          href: '#grandgrandchild24',
                          tags: ['0'],
                          type: "1", code: "1-2-2-22"
                      }
                  ]
              },
              {
                  text: 'B区裙房照明',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-2-3",
              },
              {
                  text: '应急照明',
                  href: '#grandchild4',
                  tags: ['0'],
                  type: "1", "code": "1-2-4",
                  nodes: [
                      {
                          text: '主楼高区应急照明',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-2-4-1"
                      },
                      {
                          text: '主楼低区应急照明',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-2-4-2"
                      },
                      {
                          text: 'B区裙房应急照明',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-2-4-3"
                      }
                  ]

              }
            ]
        },
        {
            text: '动力用电',
            href: '#child3',
            tags: ['0'],
            type: "1", "code": "1-3",
            nodes: [
              {
                  text: '电梯',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "1", "code": "1-3-1",
              },
              {
                  text: '制氧站*',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-3-2",
              },
              {
                  text: '真空吸引',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-3",
              },
              {
                  text: '主楼动力',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-4",
                  nodes: [
                      {
                          text: '高区',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-3-4-1"
                      },
                      {
                          text: '低区',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-3-4-2"
                      }
                  ]
              },
              {
                  text: 'B区动力',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-5",
              },
              {
                  text: '消防泵房',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-6",
              },
              {
                  text: '生活、中水泵房',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-7",
              }
            ]
        },
        {
            text: '医疗用电',
            href: '#child4',
            tags: ['0'],
            type: "1", "code": "1-4",
            nodes: [
              {
                  text: '手术室医疗',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "1", "code": "1-4-1",
                  nodes: [
                      {
                          text: '扫描设备',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-4-1-1"
                      },
                      {
                          text: '血管造影设备',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-4-1-2"
                      },
                      {
                          text: '手术区电源',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-4-1-3"
                      }
                  ]
              },
              {
                  text: '大型医疗设备',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-4-2",
                  nodes: [
                      {
                          text: 'X光机',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-4-2-1"
                      },
                      {
                          text: 'MR设备',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-4-2-2"
                      },
                      {
                          text: '乳腺X光机',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-4-2-3"
                      },
                      {
                          text: '全景X光机',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "1", code: "1-4-2-4"
                      },
                      {
                          text: 'DSA设备',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "1", code: "1-4-2-5"
                      },
                      {
                          text: '胃肠X光机',
                          href: '#grandgrandchild6',
                          tags: ['0'],
                          type: "1", code: "1-4-2-6"
                      },
                      {
                          text: 'CT设备',
                          href: '#grandgrandchild7',
                          tags: ['0'],
                          type: "1", code: "1-4-2-7"
                      },
                      {
                          text: 'DR设备',
                          href: '#grandgrandchild8',
                          tags: ['0'],
                          type: "1", code: "1-4-2-8"
                      },
                      {
                          text: '精准MDL设备*',
                          href: '#grandgrandchild8',
                          tags: ['0'],
                          type: "1", code: "1-4-2-9"
                      }
                  ]
              },
              {
                  text: '主楼医用电力',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-4-3",
              },
              {
                  text: 'B区裙房医疗动力',
                  href: '#grandchild4',
                  tags: ['0'],
                  type: "1", "code": "1-4-4",
              }
            ]
        },
        {
            text: '特殊用电',
            href: '#child5',
            tags: ['0'],
            type: "1", "code": "1-5",
            nodes: [
              {
                  text: '地下食堂*',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "1", "code": "1-5-1",
              },
              {
                  text: '网管主机房',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-5-2",
              },
              {
                  text: '消防控制室',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-5-3",
              },
              {
                  text: '消防用电',
                  href: '#grandchild',
                  tags: ['0'],
                  type: "1", "code": "1-5-4",
                  nodes: [
                      {
                          text: '主楼消防电力',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-5-4-1"
                      },
                      {
                          text: 'B区裙房消防电力',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-5-4-2"
                      }
                  ]
              },
              {
                  text: '其他用电',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-5-5",
                  nodes: [
                      {
                          text: '其他',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-5-5-1"
                      },
                      {
                          text: '信号报警箱',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-5-5-2"
                      },
                      {
                          text: '备用',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-5-5-3"
                      },
                      {
                          text: '电容柜',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "1", code: "1-5-5-4"
                      },
                      {
                          text: '母联柜',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "1", code: "1-5-5-5"
                      }
                  ]
              }
            ]
        }
      ]
  },
  {
      text: '水',
      href: '#parent2',
      tags: ['0'],
      type: "2", "code": "2",
      nodes: [
        {
            text: '冷水',
            href: '#child1',
            tags: ['0'],
            type: "2", "code": "2-1",
            nodes: [
              {
                  text: '空调机房补水',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "2", "code": "2-1-1",
              },
              {
                  text: '中水事故补水',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "2", "code": "2-1-2",
              },
              {
                  text: '生活供水',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "2", "code": "2-1-3",
                  nodes: [
                      {
                          text: '低区总供水',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "2", code: "2-1-3-1",
                          nodes: [
                              {
                                  text: '食堂供水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-1-1",
                              },
                              {
                                  text: '低区热水补水',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-1-2",
                                  nodes: [
                                      {
                                          text: '食堂生活热水',
                                          href: '#grandgrandgrandgrandchild1',
                                          tags: ['0'],
                                          type: "2", code: "2-1-3-1-2-1",
                                      },
                                      {
                                          text: '低区生活热水',
                                          href: '#grandgrandgrandgrandchild2',
                                          tags: ['0'],
                                          type: "2", code: "2-1-3-1-2-2",
                                      }
                                  ]
                              },
                              {
                                  text: '低区生活供水',
                                  href: '#grandgrandgrandchild3',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-1-3",
                              }
                          ]
                      },
                      {
                          text: '中区减压总供水',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "2", code: "2-1-3-2",
                          nodes: [
                              {
                                  text: '中区减压热水补水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-2-1",
                              },
                              {
                                  text: '中区减压生活供水',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-2-2",
                              }
                          ]
                      },
                      {
                          text: '中区总供水',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "2", code: "2-1-3-3",
                          nodes: [
                              {
                                  text: '中区热水补水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-3-1",
                              },
                              {
                                  text: '中区生活供水',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-3-2",
                              }
                          ]
                      },
                      {
                          text: '高区减压总供水',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "2", code: "2-1-3-4",
                          nodes: [
                              {
                                  text: '高区减压热水补水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-4-1",
                              },
                              {
                                  text: '高区减压生活供水',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-4-2",
                              }
                          ]
                      },
                      {
                          text: '高区总供水',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "2", code: "2-1-3-5",
                          nodes: [
                              {
                                  text: '高区热水补水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-5-1",
                              },
                              {
                                  text: '高区生活供水',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-5-2",
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
            type: "2", "code": "2-2",
        }
      ]
  },
  {
      text: '集中供冷量',
      href: '#parent3',
      tags: ['0'],
      type: "3", "code": "3",
  },
  {
      text: '集中供热量',
      href: '#parent4',
      tags: ['0'],
      type: "4", "code": "4",
  }

];
//制冷工艺流程图
var heatingTabJson = [
    {
        name: "1#机组",
        item: [
            {
                name: "蒸发器",
                data: [
                        {
                            name: "冷冻水/进水温度(℃)",
                            id:"value44",
                            unit: "℃"
                        },
                        {
                            name: "冷冻水/出水温度(℃)",
                            id: "value45",
                            unit: "℃"
                        },
                        {
                            name: "冷冻水/进水压力(MPa)",
                            unit: "MPa",
                            id: "value78",
                        },
                        {
                            name: "冷冻水/出水压力(MPa)",
                            unit: "MPa",
                            id: "value79",
                        },
                        {
                            name: "制冷剂/压力(kpa)",
                            id: "value47",
                            unit: "kpa"
                        },
                        {
                            name: "制冷剂/温度(℃)",
                            id: "value46",
                            unit: "℃"
                        } 
                    ]
            },
            {
                name: "冷凝器",
                data: [
                        {
                            name: "冷却水/进水温度(℃)",
                            id: "value48",
                            unit: "℃"
                        },
                        {
                            name: "冷却水/出水温度(℃)",
                            id: "value49",
                            unit: "℃"
                        },
                        {
                            name: "制冷剂/压力(kpa)",
                            id: "value51",
                            unit: "kpa"
                        },
                        {
                            name: "制冷剂/温度(℃)",
                            id: "value50",
                            unit: "℃"
                        }
                    ]

            },
            { 
                name: "压缩机",
                data: [
                         {
                             name: "电流百分比(%)",
                             id: "value43",
                             unit: "%"
                         },
                         {
                             name: "线电流(A)",
                             id: "value57",
                             unit: "A"
                         },
                         {
                             name: "线电压(V)",
                             id: "value58",
                             unit: "V"
                         },
                         {
                             name: "线功率(kw)",
                             id: "value59",
                             unit: "kw"
                         },
                         {
                             name: "导叶开度(%)",
                             id: "value53",
                             unit: "%"
                         },
                         {
                             name: "轴承温度(℃)",
                             id: "value54",
                             unit: "℃"
                         },
                         {
                             name: "油温(℃)",
                             id: "value55",
                             unit: "℃"
                         },
                         {
                             name: "油压(kpa)",
                             id: "value56",
                             unit: "kpa"
                         },
                         {
                             name: "排气温度(℃)",
                             id: "value52",
                             unit: "℃"
                         },
                         //{
                         //    name: "运行时长(h)",
                         //    unit: "h"
                         //}
                ]
            }
        ]
    },
    {
        name: "2#机组",
        item: [
            {
                name: "蒸发器",
                data: [
                        {
                            name: "冷冻水/进水温度(℃)",
                            id: "value44",
                            unit: "℃"
                        },
                        {
                            name: "冷冻水/出水温度(℃)",
                            id: "value45",
                            unit: "℃"
                        },
                        {
                            name: "冷冻水/进水压力(MPa)",
                            unit: "MPa",
                            id: "value78",
                        },
                        {
                            name: "冷冻水/出水压力(MPa)",
                            unit: "MPa",
                            id: "value79",
                        },
                        {
                            name: "制冷剂/压力(kpa)",
                            id: "value47",
                            unit: "kpa"
                        },
                        {
                            name: "制冷剂/温度(℃)",
                            id: "value46",
                            unit: "℃"
                        }
                ]
            },
            {
                name: "冷凝器",
                data: [
                        {
                            name: "冷却水/进水温度(℃)",
                            id: "value48",
                            unit: "℃"
                        },
                        {
                            name: "冷却水/出水温度(℃)",
                            id: "value49",
                            unit: "℃"
                        },
                        {
                            name: "制冷剂/压力(kpa)",
                            id: "value51",
                            unit: "kpa"
                        },
                        {
                            name: "制冷剂/温度(℃)",
                            id: "value50",
                            unit: "℃"
                        }
                ]

            },
            {
                name: "压缩机",
                data: [
                         {
                             name: "电流百分比(%)",
                             id: "value43",
                             unit: "%"
                         },
                         {
                             name: "线电流(A)",
                             id: "value57",
                             unit: "A"
                         },
                         {
                             name: "线电压(V)",
                             id: "value58",
                             unit: "V"
                         }, 
                         //{
                         //    name: "制冷量百分比(%)",
                         //    unit: "%"
                         //},
                         {
                             name: "排气温度(℃)",
                             id: "value52",
                             unit: "℃"
                         },
                         //{
                         //    name: "运行时长(h)",
                         //    unit: "h"
                         //}
                ]
            }
        ]
    },
   {
       name: "3#机组",
       item: [
           {
               name: "蒸发器",
               data: [
                       {
                           name: "冷冻水/进水温度(℃)",
                           id: "value44",
                           unit: "℃"
                       },
                        {
                            name: "冷冻水/出水温度(℃)",
                            id: "value45",
                            unit: "℃"
                        },
                        {
                            name: "冷冻水/进水压力(MPa)",
                            unit: "MPa",
                            id: "value78",
                        },
                        {
                            name: "冷冻水/出水压力(MPa)",
                            unit: "MPa",
                            id: "value79",
                        },
                        {
                            name: "制冷剂/压力(kpa)",
                            id: "value47",
                            unit: "kpa"
                        },
                        {
                            name: "制冷剂/温度(℃)",
                            id: "value46",
                            unit: "℃"
                        }
               ]
           },
           {
               name: "冷凝器",
               data: [
                       {
                           name: "冷却水/进水温度(℃)",
                           id: "value48",
                           unit: "℃"
                       },
                        {
                            name: "冷却水/出水温度(℃)",
                            id: "value49",
                            unit: "℃"
                        },
                        {
                            name: "制冷剂/压力(kpa)",
                            id: "value51",
                            unit: "kpa"
                        },
                        {
                            name: "制冷剂/温度(℃)",
                            id: "value50",
                            unit: "℃"
                        }
               ]

           },
           {
               name: "压缩机",
               data: [
                         {
                             name: "电流百分比(%)",
                             id: "value43",
                             unit: "%"
                         },
                         {
                             name: "线电流(A)",
                             id: "value57",
                             unit: "A"
                         },
                         {
                             name: "线电压(V)",
                             id: "value58",
                             unit: "V"
                         },
                         //{
                         //    name: "制冷量百分比(%)",
                         //    unit: "%"
                         //},
                         {
                             name: "排气温度(℃)",
                             id: "value52",
                             unit: "℃"
                         },
                         //{
                         //    name: "运行时长(h)",
                         //    unit: "h"
                         //}
               ]
           }
       ]
   }
]
//bim
var runhotdata = [
        { name: "一次进水压力", son: ["value101", "value101", "value101"], unit: "MPa" },
        { name: "一次回水压力", son: ["value102", "value102", "value102"], unit: "MPa" },
        { name: "二次进水压力", son: ["value103", "value103", "value103"], unit: "MPa" },
        { name: "二次回水压力", son: ["value104", "value104", "value104"], unit: "MPa" },
        { name: "一次进水温度", son: ["value105", "value105", "value105"], unit: "℃" },
        { name: "一次回水温度", son: ["value106", "value106", "value106"], unit: "℃" },
        { name: "二次进水温度", son: ["value107", "value107", "value107"], unit: "℃" },
        { name: "二次回水温度", son: ["value108", "value108", "value108"], unit: "℃" },
        { name: "变频运行状态", son: ["value109", "value109", "value109"], unit: "" },
        { name: "变频运行频率", son: ["value110", "value110", "value110"], unit: "kw" },
        { name: "一次侧流量", son: ["value111", "value111", "value111"], unit: "m³" },
        { name: "二次侧流量", son: ["value112", "value112", "value112"], unit: "m³" },
]
//对应类别
var facilityJson = [
    {
        name: "冷水机组",
        data: "1-1-1-5",
        son: [{
            name: "K1冷水机组",
            data: "1-1-1-5",
            param: [{
                name: "品牌", 
                id: "",
                value:"开利"
            }, {
                name: "型号", 
                id: "",
                value: "19XRV70714W6LHH52"
            }, {
                name: "额定功率(kw)", 
                id: "",
                value: "620"
            }, {
                name: "名义制冷量(kw)",
                id: "",
                value: "3332"
            }, {
                name: "制冷工质",
                id: "",
                value: "R134a"
            }]
        }, {
            name: "K2冷水机组",
            data: "1-1-1-6",
            param: [{
                name: "品牌",
                id: "",
                value: "开利"
            }, {
                name: "型号",
                id: "",
                value: "19XR70714W6LHH52"
            }, {
                name: "额定功率(kw)",
                id: "",
                value: "627"
            }, {
                name: "名义制冷量(kw)",
                id: "",
                value: "3516"
            }, {
                name: "制冷工质",
                id: "",
                value: "R134a"
            }]
        }, {
            name: "K3冷水机组",
            data: "1-1-1-7",
            param: [{
                name: "品牌",
                id: "",
                value: "开利"
            }, {
                name: "型号",
                id: "",
                value: "19XR70714W6LHH52"
            }, {
                name: "额定功率(kw)",
                id: "",
                value: "627"
            }, {
                name: "名义制冷量(kw)",
                id: "",
                value: "3516"
            }, {
                name: "制冷工质",
                id: "",
                value: "R134a"
            }]
        }]
    }, {
        name: "冷冻水泵",
        data: "1-1-1-2",
        son: [{
            name: "1#冷冻水泵",
            data: "1",
            param: [ {
                name: "运行状态", 
                id: "value71",
                value: ""
            }, {
                name: "运行频率(Hz)",
                id: "value74",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)", 
                id: "",
                value: "420"
            }, {
                name: "扬程(m)",
                id: "",
                value: "32"
            }, {
                name: "功率(kw)",
                id: "",
                value: "55"
            }]
        }, {
            name: "2#冷冻水泵",
            data: "2",
            param: [ {
                name: "运行状态", 
                id: "value72",
                value: ""
            }, {
                name: "运行频率(Hz)",
                id: "value75",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "420"
            }, {
                name: "扬程(m)",
                id: "",
                value: "32"
            }, {
                name: "功率(kw)",
                id: "",
                value: "55"
            }]
        }, {
            name: "3#冷冻水泵",
            data: "3",
            param: [ {
                name: "运行状态", 
                id: "value73",
                value: ""
            }, {
                name: "运行频率(Hz)",
                id: "value76",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "420"
            }, {
                name: "扬程(m)",
                id: "",
                value: "32"
            }, {
                name: "功率(kw)",
                id: "",
                value: "55"
            }]
        }] 
        
    }, {
        name: "冷却水泵",
        data: "1-1-1-1",
        son: [{
            name: "K1冷却主泵",
            data: "1",
            param: [{
                name: "运行状态", 
                id: "value82",
                value: ""
            }, {
                name: "运行频率(Hz)", 
                id: "value88",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "375"
            }, {
                name: "扬程(m)",
                id: "",
                value: "32"
            }, {
                name: "功率(kw)",
                id: "",
                value: "55"
            }]
        }, {
            name: "K1冷却备泵",
            data: "4",
            param: [ {
                name: "运行状态", 
                id: "value85",
                value: ""
            }, {
                name: "运行频率(Hz)", 
                id: "value91",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "375"
            }, {
                name: "扬程(m)",
                id: "",
                value: "32"
            }, {
                name: "功率(kw)",
                id: "",
                value: "55"
            }]
        }, {
            name: "K2冷却主泵",
            data: "2",
            param: [ {
                name: "运行状态", 
                id: "value83",
                value: ""
            }, {
                name: "运行频率(Hz)", 
                id: "value89",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "375"
            }, {
                name: "扬程(m)",
                id: "",
                value: "32"
            }, {
                name: "功率(kw)",
                id: "",
                value: "55"
            }]
        }, {
            name: "K2冷却备泵",
            data: "5",
            param: [{
                name: "运行状态", 
                id: "value86",
                value: ""
            }, {
                name: "运行频率(Hz)", 
                id: "value92",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "375"
            }, {
                name: "扬程(m)",
                id: "",
                value: "32"
            }, {
                name: "功率(kw)",
                id: "",
                value: "55"
            }]
        }, {
            name: "K3冷却主泵",
            data: "3",
            param: [ {
                name: "运行状态", 
                id: "value84",
                value: ""
            }, {
                name: "运行频率(Hz)", 
                id: "value90",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "375"
            }, {
                name: "扬程(m)",
                id: "",
                value: "32"
            }, {
                name: "功率(kw)",
                id: "",
                value: "55"
            }]
        }, {
            name: "K3冷却备泵",
            data: "6",
            param: [{
                name: "运行状态", 
                id: "value87",
                value: ""
            }, {
                name: "运行频率(Hz)", 
                id: "value93",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "375"
            }, {
                name: "扬程(m)",
                id: "",
                value: "32"
            }, {
                name: "功率(kw)",
                id: "",
                value: "55"
            }]
        }] 
    }, {
        name: "冷却塔",
        data: "1-1-1-3",
        son: [{
            name: "冷却塔",
            data: "1",
            param: [ {
                name: "供水温度(℃)", 
                id: "value48",
                value: ""
            }, {
                name: "回水温度(℃)", 
                id: "value49",
                value: ""
            }, {
                name: "供回温差", 
                id: "tempvalue",
                value: ""
            }, {
                name: "功率(kw)",
                id: "coolpower",
                value: ""
            },{
            name: "品牌", 
            id: "",
            value: "空研"
        }, {
            name: "电机功率(kw)",
            id: "",
            value: "7.5*9"
        }]
        }]
    }, {
        name: "供热循环水泵",
        data: "1-1-2",
        son: [{
            name: "1#供热循环水泵",
            data: "1",
            param: [ {
                name: "运行状态",
                id: "value109",
                classname: "loopsts",
                value: ""
            }, {
                name: "运行频率(Hz)", 
                id: "value110",
                classname: "loophz",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "280"
            }, {
                name: "扬程(m)",
                id: "",
                value: "29"
            }, {
                name: "功率(kw)",
                id: "",
                value: "30"
            }]
        }, {
            name: "2#供热循环水泵",
            data: "2",
            param: [ {
                name: "运行状态", 
                id: "value109",
                classname: "loopsts",
                value: ""
            }, {
                name: "运行频率(Hz)", 
                id: "value110",
                classname: "loophz",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "280"
            }, {
                name: "扬程(m)",
                id: "",
                value: "29"
            }, {
                name: "功率(kw)",
                id: "",
                value: "30"
            }]
        }, {
            name: "3#供热循环水泵",
            data: "3",
            param: [ {
                name: "运行状态", 
                id: "value109",
                classname:"loopsts",
                value: ""
            }, {
                name: "运行频率(Hz)", 
                id: "value110",
                classname: "loophz",
                value: ""
            }, {
                name: "品牌",
                id: "",
                value: "格兰富"
            }, {
                name: "流量(m³/h)",
                id: "",
                value: "280"
            }, {
                name: "扬程(m)",
                id: "",
                value: "29"
            }, {
                name: "功率(kw)",
                id: "",
                value: "30"
            }]
        }]
    }
]
//制冷
var heating_cool_device = [
        {
            name: "冷水机组", son: [
              {
                  name: "k1",
                  id: "wateronoff1",
              }, {
                  name: "k2",
                  id: "wateronoff2",
              }, {
                  name: "k3",
                  id: "wateronoff3",
              }
            ]
        },
];
var heating_cool_data = [
    {
        name: "蒸发器",
        data: [
             {
                 name: "冷冻水/进水温度(℃)",
                 son: ["value44", "value44", "value44"], unit: "℃"
             },
             {
                 name: "冷冻水/出水温度(℃)",
                 son: ["value45", "value45", "value45"], unit: "℃"
             },
              
             {
                 name: "制冷剂/压力(kpa)",
                 son: ["value47", "value47", "value47"],
                 unit: "kpa"
             },
             {
                 name: "制冷剂/温度(℃)",
                 son: ["value46", "value46", "value46"],
                 unit: "℃"
             },
             {
                 name: "冷冻水/出水压力(MPa)",
                 son: ["value79"], unit: "MPa"
             },
             {
                 name: "冷冻水/进水压力(MPa)",
                 son: ["value78"], unit: "MPa"
             },
             {
                 name: "冷冻水流量(m³)",
                 son: ["value62"], unit: "m³"
             },
        ]
    },
    {
        name: "冷凝器",
        data: [
                {
                    name: "冷却水/进水温度(℃)",
                    son: ["value48", "value48", "value48"],
                    unit: "℃"
                },
                {
                    name: "冷却水/出水温度(℃)",
                    son: ["value49", "value49", "value49"],
                    unit: "℃"
                },
                {
                    name: "制冷剂/压力(kpa)",
                    son: ["value51", "value51", "value51"],
                    unit: "kpa"
                },
                {
                    name: "制冷剂/温度(℃)",
                    son: ["value50", "value50", "value50"],
                    unit: "℃"
                }
        ]

    },
    {
        name: "压缩机",
        data: [
                 {
                     name: "电流百分比(%)",
                     son: ["value43", "value43", "value43"],
                     unit: "%"
                 },
                 {
                     name: "线电流(A)",
                     son: ["value57", "value57", "value57"],
                     unit: "A"
                 },
                 {
                     name: "线电压(V)",
                     son: ["value58", "value58", "value58"],
                     unit: "V"
                 },
                 {
                     name: "线功率(kw)",
                     son: ["value59", "value59", "value59"],
                     unit: "kw"
                 },
                 {
                     name: "导叶开度(%)",
                     son: ["value53", "value53", "value53"],
                     unit: "%"
                 },
                 {
                     name: "轴承温度(℃)",
                     son: ["value54", "value54", "value54"],
                     unit: "℃"
                 },
                 {
                     name: "油温(℃)",
                     son: ["value55", "value55", "value55"],
                     unit: "℃"
                 },
                 {
                     name: "油压(kpa)",
                     son: ["value56", "value56", "value56"],
                     unit: "kpa"
                 },
                 {
                     name: "排气温度(℃)",
                     son: ["value52", "value52", "value52"],
                     unit: "℃"
                 },
                 //{
                 //    name: "运行时长(h)",
                 //    unit: "h"
                 //}
        ]
    }
];
//计量表查询页面（需提示挂表）
//对应类别
var realtimeData = [
  {
      text: '电',
      href: '#parent',
      tags: ['0'],
      type: "1", "code": "1",
      nodes: [
        {
            text: '空调用电*(暂无下挂表)',
            href: '#child',
            tags: ['0'],
            type: "1", "code": "1-1",
            nodes: [
              {
                  text: '制冷机房(暂无下挂表)',
                  href: '#grandchild',
                  tags: ['0'],
                  type: "1", "code": "1-1-1",
                  nodes: [
                      {
                          text: '冷却水循环泵',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-1-1-1"
                      },
                      {
                          text: '冷水循环泵',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-1-1-2"
                      },
                      {
                          text: '冷却塔',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-1-1-3"
                      },
                      {
                          text: '热水冷却循环泵',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "1", code: "1-1-1-4"
                      },
                      {
                          text: '1号冷机',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "1", code: "1-1-1-5"
                      },
                      {
                          text: '2号冷机',
                          href: '#grandgrandchild6',
                          tags: ['0'],
                          type: "1", code: "1-1-1-6"
                      },
                      {
                          text: '3号冷机',
                          href: '#grandgrandchild7',
                          tags: ['0'],
                          type: "1", code: "1-1-1-7"
                      }
                  ]
              },
              {
                  text: '换热站',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-1-2",
              },
              {
                  text: '手术空调室',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-1-3",
              }
            ]
        },
        {
            text: '照明插座用电*(暂无下挂表)',
            href: '#child2',
            tags: ['0'],
            type: "1", "code": "1-2",
            nodes: [
              {
                  text: '变配电室照明',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "1", "code": "1-2-1",
              },
              {
                  text: '主楼照明',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-2-2",
                  nodes: [

                      {
                          text: '一层照明',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-2-2-1"
                      },
                      {
                          text: '二层照明',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "1", code: "1-2-2-2"
                      },
                      {
                          text: '三层照明',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "1", code: "1-2-2-3"
                      },
                      {
                          text: '四层照明',
                          href: '#grandgrandchild6',
                          tags: ['0'],
                          type: "1", code: "1-2-2-4"
                      },
                      {
                          text: '五层照明',
                          href: '#grandgrandchild7',
                          tags: ['0'],
                          type: "1", code: "1-2-2-5"
                      },
                      {
                          text: '六层照明',
                          href: '#grandgrandchild8',
                          tags: ['0'],
                          type: "1", code: "1-2-2-6"
                      },
                      {
                          text: '七层照明',
                          href: '#grandgrandchild9',
                          tags: ['0'],
                          type: "1", code: "1-2-2-7"
                      },
                      {
                          text: '八层照明',
                          href: '#grandgrandchild10',
                          tags: ['0'],
                          type: "1", code: "1-2-2-8"
                      },
                      {
                          text: '九层照明',
                          href: '#grandgrandchild11',
                          tags: ['0'],
                          type: "1", code: "1-2-2-9"
                      },
                      {
                          text: '十层照明',
                          href: '#grandgrandchild12',
                          tags: ['0'],
                          type: "1", code: "1-2-2-10"
                      },
                      {
                          text: '十一层照明',
                          href: '#grandgrandchild13',
                          tags: ['0'],
                          type: "1", code: "1-2-2-11"
                      },
                      {
                          text: '十二层照明',
                          href: '#grandgrandchild14',
                          tags: ['0'],
                          type: "1", code: "1-2-2-12"
                      },
                      {
                          text: '十三层照明',
                          href: '#grandgrandchild15',
                          tags: ['0'],
                          type: "1", code: "1-2-2-13"
                      },
                      {
                          text: '十四层照明',
                          href: '#grandgrandchild16',
                          tags: ['0'],
                          type: "1", code: "1-2-2-14"
                      },
                      {
                          text: '十五层照明',
                          href: '#grandgrandchild17',
                          tags: ['0'],
                          type: "1", code: "1-2-2-15"
                      },
                      {
                          text: '十六层照明',
                          href: '#grandgrandchild18',
                          tags: ['0'],
                          type: "1", code: "1-2-2-16"
                      },
                      {
                          text: '十七层照明',
                          href: '#grandgrandchild19',
                          tags: ['0'],
                          type: "1", code: "1-2-2-17"
                      },
                      {
                          text: '十八层照明',
                          href: '#grandgrandchild20',
                          tags: ['0'],
                          type: "1", code: "1-2-2-18"
                      },
                      {
                          text: '十九层照明',
                          href: '#grandgrandchild21',
                          tags: ['0'],
                          type: "1", code: "1-2-2-19"
                      },
                      {
                          text: '二十层照明',
                          href: '#grandgrandchild22',
                          tags: ['0'],
                          type: "1", code: "1-2-2-20"
                      },
                      {
                          text: '二十一层照明',
                          href: '#grandgrandchild23',
                          tags: ['0'],
                          type: "1", code: "1-2-2-21"
                      },
                      {
                          text: '二十二层照明',
                          href: '#grandgrandchild24',
                          tags: ['0'],
                          type: "1", code: "1-2-2-22"
                      }
                  ]
              },
              {
                  text: 'B区裙房照明',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-2-3",
              },
              {
                  text: '应急照明(暂无下挂表)',
                  href: '#grandchild4',
                  tags: ['0'],
                  type: "1", "code": "1-2-4",
                  nodes: [
                      {
                          text: '主楼高区应急照明',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-2-4-1"
                      },
                      {
                          text: '主楼低区应急照明',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-2-4-2"
                      },
                      {
                          text: 'B区裙房应急照明',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-2-4-3"
                      }
                  ]

              }
            ]
        },
        {
            text: '动力用电(暂无下挂表)',
            href: '#child3',
            tags: ['0'],
            type: "1", "code": "1-3",
            nodes: [
              {
                  text: '电梯',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "1", "code": "1-3-1",
              },
              {
                  text: '制氧站*',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-3-2",
              },
              {
                  text: '真空吸引',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-3",
              },
              {
                  text: '主楼动力(暂无下挂表)',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-4",
                  nodes: [
                      {
                          text: '高区',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-3-4-1"
                      },
                      {
                          text: '低区',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-3-4-2"
                      }
                  ]
              },
              {
                  text: 'B区动力',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-5",
              },
              {
                  text: '消防泵房',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-6",
              },
              {
                  text: '生活、中水泵房',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-3-7",
              }
            ]
        },
        {
            text: '医疗用电(暂无下挂表)',
            href: '#child4',
            tags: ['0'],
            type: "1", "code": "1-4",
            nodes: [
              {
                  text: '手术室医疗(暂无下挂表)',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "1", "code": "1-4-1",
                  nodes: [
                      {
                          text: '扫描设备',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-4-1-1"
                      },
                      {
                          text: '血管造影设备',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-4-1-2"
                      },
                      {
                          text: '手术区电源',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-4-1-3"
                      }
                  ]
              },
              {
                  text: '大型医疗设备(暂无下挂表)',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-4-2",
                  nodes: [
                      {
                          text: 'X光机',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-4-2-1"
                      },
                      {
                          text: 'MR设备',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-4-2-2"
                      },
                      {
                          text: '乳腺X光机',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-4-2-3"
                      },
                      {
                          text: '全景X光机',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "1", code: "1-4-2-4"
                      },
                      {
                          text: 'DSA设备',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "1", code: "1-4-2-5"
                      },
                      {
                          text: '胃肠X光机',
                          href: '#grandgrandchild6',
                          tags: ['0'],
                          type: "1", code: "1-4-2-6"
                      },
                      {
                          text: 'CT设备',
                          href: '#grandgrandchild7',
                          tags: ['0'],
                          type: "1", code: "1-4-2-7"
                      },
                      {
                          text: 'DR设备',
                          href: '#grandgrandchild8',
                          tags: ['0'],
                          type: "1", code: "1-4-2-8"
                      },
                      {
                          text: '精准MDL设备*',
                          href: '#grandgrandchild8',
                          tags: ['0'],
                          type: "1", code: "1-4-2-9"
                      }
                  ]
              },
              {
                  text: '主楼医用电力',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-4-3",
              },
              {
                  text: 'B区裙房医疗动力',
                  href: '#grandchild4',
                  tags: ['0'],
                  type: "1", "code": "1-4-4",
              }
            ]
        },
        {
            text: '特殊用电(暂无下挂表)',
            href: '#child5',
            tags: ['0'],
            type: "1", "code": "1-5",
            nodes: [
              {
                  text: '地下食堂*',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "1", "code": "1-5-1",
              },
              {
                  text: '网管主机房',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "1", "code": "1-5-2",
              },
              {
                  text: '消防控制室',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-5-3",
              },
              {
                  text: '消防用电(暂无下挂表)',
                  href: '#grandchild',
                  tags: ['0'],
                  type: "1", "code": "1-5-4",
                  nodes: [
                      {
                          text: '主楼消防电力',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-5-4-1"
                      },
                      {
                          text: 'B区裙房消防电力',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-5-4-2"
                      }
                  ]
              },
              {
                  text: '其他用电(暂无下挂表)',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "1", "code": "1-5-5",
                  nodes: [
                      {
                          text: '其他',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "1", code: "1-5-5-1"
                      },
                      {
                          text: '信号报警箱',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "1", code: "1-5-5-2"
                      },
                      {
                          text: '备用',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "1", code: "1-5-5-3"
                      },
                      {
                          text: '电容柜',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "1", code: "1-5-5-4"
                      },
                      {
                          text: '母联柜',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "1", code: "1-5-5-5"
                      }
                  ]
              }
            ]
        }
      ]
  },
  {
      text: '水(暂无下挂表)',
      href: '#parent2',
      tags: ['0'],
      type: "2", "code": "2",
      nodes: [
        {
            text: '冷水(暂无下挂表)',
            href: '#child1',
            tags: ['0'],
            type: "2", "code": "2-1",
            nodes: [
              {
                  text: '空调机房补水',
                  href: '#grandchild1',
                  tags: ['0'],
                  type: "2", "code": "2-1-1",
              },
              {
                  text: '中水事故补水',
                  href: '#grandchild2',
                  tags: ['0'],
                  type: "2", "code": "2-1-2",
              },
              {
                  text: '生活供水',
                  href: '#grandchild3',
                  tags: ['0'],
                  type: "2", "code": "2-1-3",
                  nodes: [
                      {
                          text: '低区总供水',
                          href: '#grandgrandchild1',
                          tags: ['0'],
                          type: "2", code: "2-1-3-1",
                          nodes: [
                              {
                                  text: '食堂供水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-1-1",
                              },
                              {
                                  text: '低区热水补水',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-1-2",
                                  nodes: [
                                      {
                                          text: '食堂生活热水',
                                          href: '#grandgrandgrandgrandchild1',
                                          tags: ['0'],
                                          type: "2", code: "2-1-3-1-2-1",
                                      },
                                      {
                                          text: '低区生活热水(暂无下挂表)',
                                          href: '#grandgrandgrandgrandchild2',
                                          tags: ['0'],
                                          type: "2", code: "2-1-3-1-2-2",
                                      }
                                  ]
                              },
                              {
                                  text: '低区生活供水(暂无下挂表)',
                                  href: '#grandgrandgrandchild3',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-1-3",
                              }
                          ]
                      },
                      {
                          text: '中区减压总供水',
                          href: '#grandgrandchild2',
                          tags: ['0'],
                          type: "2", code: "2-1-3-2",
                          nodes: [
                              {
                                  text: '中区减压热水补水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-2-1",
                              },
                              {
                                  text: '中区减压生活供水(暂无下挂表)',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-2-2",
                              }
                          ]
                      },
                      {
                          text: '中区总供水',
                          href: '#grandgrandchild3',
                          tags: ['0'],
                          type: "2", code: "2-1-3-3",
                          nodes: [
                              {
                                  text: '中区热水补水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-3-1",
                              },
                              {
                                  text: '中区生活供水(暂无下挂表)',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-3-2",
                              }
                          ]
                      },
                      {
                          text: '高区减压总供水',
                          href: '#grandgrandchild4',
                          tags: ['0'],
                          type: "2", code: "2-1-3-4",
                          nodes: [
                              {
                                  text: '高区减压热水补水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-4-1",
                              },
                              {
                                  text: '高区减压生活供水(暂无下挂表)',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-4-2",
                              }
                          ]
                      },
                      {
                          text: '高区总供水',
                          href: '#grandgrandchild5',
                          tags: ['0'],
                          type: "2", code: "2-1-3-5",
                          nodes: [
                              {
                                  text: '高区热水补水',
                                  href: '#grandgrandgrandchild1',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-5-1",
                              },
                              {
                                  text: '高区生活供水(暂无下挂表)',
                                  href: '#grandgrandgrandchild2',
                                  tags: ['0'],
                                  type: "2", code: "2-1-3-5-2",
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
            type: "2", "code": "2-2",
        }
      ]
  },
  {
      text: '集中供冷量',
      href: '#parent3',
      tags: ['0'],
      type: "3", "code": "3",
  },
  {
      text: '集中供热量',
      href: '#parent4',
      tags: ['0'],
      type: "4", "code": "4",
  }

];

