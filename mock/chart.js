module.exports = [
  {
    url: "/bar/selectTypeData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "执勤人员",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "海关人员",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "未经许可人员",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "外企工作人员",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "安保人员",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "其他许可人员",
            value: (Math.random() * 1500).toFixed(2),
          },
        ],
      };
    },
  },
  {
    url: "/word/selectWordData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "传送带异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "货物异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "人员属性异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "人员路径异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "报关异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "检验异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "其他异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "火灾异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "烟雾异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "其他异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "其他异常",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "其他异常",
            value: (Math.random() * 1000).toFixed(2),
          },
        ],
      };
    },
  },
  {
    url: "/box/selectBoxData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "枪机",
            value: parseInt(Math.random() * 1200),
          },
          {
            name: "球机",
            value: parseInt(Math.random() * 2000),
          },
          {
            name: "报警器",
            value: parseInt(Math.random() * 1800),
          },
          {
            name: "红外摄像头",
            value: parseInt(Math.random() * 1700),
          },
          {
            name: "烟雾传感器",
            value: parseInt(Math.random() * 1500),
          },
          {
            name: "门禁设备",
            value: parseInt(Math.random() * 1400),
          },
        ],
      };
    },
  },
  {
    url: "/line/selectOtherData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "1月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "2月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "3月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "4月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "5月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "6月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "7月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "8月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "9月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "10月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "11月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "12月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
        ],
      };
    },
  },
  {
    url: "/liquid/selectYearValue",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: {
          value: (Math.random() * 5000 + 300).toFixed(1),
        },
      };
    },
  },
];
