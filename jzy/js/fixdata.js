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
                  text: '手术室空调',
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
                  text: '中水泵房补水',
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
                            name: "制冷剂/压力(kPa)",
                            id: "value47",
                            unit: "kPa"
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
                            name: "制冷剂/压力(kPa)",
                            id: "value51",
                            unit: "kPa"
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
                             name: "线功率(kW)",
                             id: "value59",
                             unit: "kW"
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
                             name: "油压(kPa)",
                             id: "value56",
                             unit: "kPa"
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
                            name: "制冷剂/压力(kPa)",
                            id: "value47",
                            unit: "kPa"
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
                            name: "制冷剂/压力(kPa)",
                            id: "value51",
                            unit: "kPa"
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
                            name: "制冷剂/压力(kPa)",
                            id: "value47",
                            unit: "kPa"
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
                            name: "制冷剂/压力(kPa)",
                            id: "value51",
                            unit: "kPa"
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
        { name: "变频运行频率", son: ["value110", "value110", "value110"], unit: "kW" },
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
                name: "额定功率(kW)", 
                id: "",
                value: "620"
            }, {
                name: "名义制冷量(kW)",
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
                name: "额定功率(kW)",
                id: "",
                value: "627"
            }, {
                name: "名义制冷量(kW)",
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
                name: "额定功率(kW)",
                id: "",
                value: "627"
            }, {
                name: "名义制冷量(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
                id: "coolpower",
                value: ""
            },{
            name: "品牌", 
            id: "",
            value: "空研"
        }, {
            name: "电机功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                name: "功率(kW)",
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
                 name: "制冷剂/压力(kPa)",
                 son: ["value47", "value47", "value47"],
                 unit: "kPa"
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
                 name: "冷冻水流量(m³/h)",
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
                    name: "制冷剂/压力(kPa)",
                    son: ["value51", "value51", "value51"],
                    unit: "kPa"
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
                     name: "线功率(kW)",
                     son: ["value59", "value59", "value59"],
                     unit: "kW"
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
                     name: "油压(kPa)",
                     son: ["value56", "value56", "value56"],
                     unit: "kPa"
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
                  text: '手术室空调',
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
                  text: '中水泵房补水',
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
                                          text: '食堂生活热水(暂无下挂表)',
                                          href: '#grandgrandgrandgrandchild1',
                                          tags: ['0'],
                                          type: "2", code: "2-1-3-1-2-1",
                                          nodes: [
                                              {
                                                  text: '食堂热水回水表',
                                                  href: '#grandgrandgrandgrandchildchild1',
                                                  tags: ['0'],
                                                  type: "2", code: "2-1-3-1-2-1-2",
                                              },
                                              {
                                                  text: '食堂热水供水表',
                                                  href: '#grandgrandgrandgrandchildchild2',
                                                  tags: ['0'],
                                                  type: "2", code: "2-1-3-1-2-1-1",
                                              }
                                          ]
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

var datatype = [{ id: "Value20", name: "设备能耗" },
       { id: "Value21", name: "AB项电压" }, { id: "Value22", name: "BC项电压" },
       { id: "Value23", name: "CA项电压" }, { id: "Value24", name: "A项电流" },
       { id: "Value25", name: "B项电流" }, { id: "Value26", name: "C项电流" },
       { id: "Value27", name: "总有功功率" }, { id: "Value28", name: "正向有功电能" },
       { id: "Value30", name: "电能差" }, { id: "Value31", name: "累计水量" },
       { id: "Value32", name: "设备异常" },

       { id: "Value41", name: "机组控制模式" }, { id: "Value42", name: "机组故障报警" },
       { id: "Value43", name: "电流百分比" }, { id: "Value44", name: "冷冻进水温度" },
       { id: "Value45", name: "冷冻出水温度" }, { id: "Value46", name: "蒸发器冷媒温度" },
       { id: "Value47", name: "蒸发器冷媒压力" }, { id: "Value48", name: "冷却水进温度" },
       { id: "Value49", name: "冷却水出温度" }, { id: "Value50", name: "冷凝器冷媒温度" },
       { id: "Value51", name: "冷凝器冷媒压力" }, { id: "Value52", name: "排气温度" },
       { id: "Value53", name: "导叶开度百分比" }, { id: "Value54", name: "压缩机轴承温度" },
       { id: "Value55", name: "压缩机油温" }, { id: "Value56", name: "压缩机油压" },
       { id: "Value57", name: "平均线电流" }, { id: "Value58", name: "平均线电压" },
       { id: "Value59", name: "线功率" }, { id: "Value60", name: "实际线电流" },
       { id: "Value61", name: "实际线电压" }, { id: "Value62", name: "冷冻水流量" },

       { id: "Value71", name: "冷冻水泵1运行状态" },
       { id: "Value72", name: "冷冻水泵2运行状态" }, { id: "Value73", name: "冷冻水泵3运行状态" },
       { id: "Value74", name: "冷冻水泵1运行频率" }, { id: "Value75", name: "冷冻水泵2运行频率" },
       { id: "Value76", name: "冷冻水泵3运行频率" }, { id: "Value77", name: "冷冻水流量" },
       { id: "Value78", name: "冷冻水供水压力" }, { id: "Value79", name: "冷冻水回水压力" },
       { id: "Value80", name: "室外温度" }, { id: "Value81", name: "室外湿度" },


       { id: "Value82", name: "主冷却水泵1运行状态" }, { id: "Value83", name: "主冷却水泵2运行状态" },
       { id: "Value84", name: "主冷却水泵3运行状态" }, { id: "Value85", name: "备冷却水泵1运行状态" },
       { id: "Value86", name: "备冷却水泵2运行状态" }, { id: "Value87", name: "备冷却水泵3运行状态" },
       { id: "Value88", name: "主冷却水泵1运行频率" }, { id: "Value89", name: "主冷却水泵2运行频率" },
       { id: "Value90", name: "主冷却水泵3运行频率" }, { id: "Value91", name: "备冷却水泵1运行频率" },
       { id: "Value92", name: "备冷却水泵2运行频率" }, { id: "Value93", name: "备冷却水泵3运行频率" },

       { id: "Value94", name: "空调冷热水供水压力" }, { id: "Value95", name: "补水泵状态" },
       { id: "Value96", name: "补水泵运行频率" },


       { id: "Value101", name: "一次进水压力" }, { id: "Value102", name: "一次回水压力" },
       { id: "Value103", name: "二次进水压力" }, { id: "Value104", name: "二次回水压力" },
       { id: "Value104", name: "一次进水温度" }, { id: "Value106", name: "一次回水温度" },
       { id: "Value105", name: "二次进水温度" }, { id: "Value108", name: "二次回水温度" },
       { id: "Value109", name: "变频运行状态" }, { id: "Value110", name: "变频运行频率" },

       { id: "Value111", name: "一次侧流量" }, { id: "Value112", name: "二次侧流量" },
       { id: "Value113", name: "补水泵状态" },
       { id: "Value114", name: "补水泵频率" }, { id: "Value118", name: "热量" },

       { id: "Value121", name: "温度" }, { id: "Value122", name: "湿度" },

       { id: "Value0", name: "表ID" }, { id: "value150", name: " " }
]; 
var warnthing1 = [
     { id: "1", name: "通讯异常" },
]
var warnthing2 = [
     //{ id: "1", name: "水泵故障" },
     //{ id: "2", name: "机组故障" },
     //{ id: "3", name: "机组电流百分比" },
     //{ id: "4", name: "冷冻水出水温度" },
     //{ id: "5", name: "冷冻水出水温度" },
     //{ id: "6", name: "冷却水进水温度" },
     //{ id: "7", name: "蒸发器制冷剂温度与冷冻水出水温度温差" },
     //{ id: "8", name: "冷冻水流量" },
     //{ id: "9", name: "蒸发压力" },
     //{ id: "10", name: "冷凝压力" },
     //{ id: "11", name: "排气温度" }, 
     { id: "1", name: "设备故障" },
     { id: "2", name: "停机报警" },
     { id: "3", name: "运行参数" }, 
]
var warnthing3 = [
     { id: "1", name: "上月能耗超标" },
     { id: "2", name: "昨日能耗超标" },
     { id: "3", name: "特殊异常超标" },
]

//*********************************************环境位置数据**************************//
//热湿环境
var envirLocData2 = [
{ text: "1层C区八部电梯厅", code: "5-1" },
{ text: "1层出入院大厅", code: "5-2" },
{ text: "1层核磁登记室", code: "5-3" },
{ text: "3层C区八部电梯厅", code: "5-4" },
{ text: "6层A区612室31床大套间", code: "5-5" },
{ text: "6层B区610室27床大套间", code: "5-6" },
{ text: "10层B区1010室27床大套间", code: "5-7" },
{ text: "13层A区1312室31床大套间", code: "5-8" },
{ text: "13层B区1310室27床大套间", code: "5-9" },
{ text: "16层A区21床大套间", code: "5-10" },
{ text: "16层B区1630室示教室", code: "5-11" },
{ text: "20层A区2002室作业治疗室", code: "5-12" },
{ text: "20层B区2002室运动治疗室温度", code: "5-13" },
{ text: "22层A区2203室临床神经病理室", code: "5-14" },
]
//热湿环境
var envirLocData1 = [
{ text: "1层核磁共振室外", code: "8-1" },
{ text: "1层出入院大厅", code: "8-2" },
{ text: "1层八部电梯厅", code: "8-3" },
{ text: "3层八部电梯厅", code: "8-4" },
{ text: "15层B区病房1-2床", code: "8-5" },
{ text: "15层B区病房3-4床", code: "8-6" },
{ text: "15层B区护士站", code: "8-7" },
{ text: "15层C区医生办公室", code: "8-8" },
{ text: "17层B区病房36床", code: "8-9" },
{ text: "17层B区病房35床", code: "8-10" },
{ text: "17层B区护士站", code: "8-11" },
{ text: "17层C区医生办公室", code: "8-12" }
]