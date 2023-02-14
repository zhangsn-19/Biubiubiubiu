<template>
  <div className="chart-wrapper" ref="barChart"></div>
</template>

<script>
import echarts from "echarts";
import {onMounted, onBeforeUnmount, ref, watch} from "vue";
import {debounce} from "@/utils/index.js";
import useResize from "@/componentApi/useResize.js";
import {selectOtherData} from "@/api/mockChart";

export default {
  name: "barChart",
  setup() {
    let {abcode, year, parentInfo, routerChange} = useResize();

    const barChart = ref(null);
    let myChart = ref(null);

    const resizeHandler = debounce(() => {
      if (myChart) {
        myChart.resize();
      }
    }, 200);

    onMounted(() => {
      getChartData();
      window.addEventListener("resize", resizeHandler);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", resizeHandler);
    });

    //模拟接口，获取echarts数据
    const getChartData = async () => {
      const {data} = await selectOtherData({
        abcode,
        year,
      });
      initEcharts(data);
    };

    //渲染echarts图
    const initEcharts = (data) => {
      myChart = echarts.init(barChart.value);
      let option = {
        //  backgroundColor: '#00265f',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0%',
          top:'10px',
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['芯片', '液晶屏', '快消食品', '烟酒', '其他'],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00a9fb",
              width: 1,
              type: "solid"
            },
          },

          axisTick: {
            show: false
          },
          axisLabel:  {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: "#cecece",
              fontSize: '12',
            },
          },
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            //formatter: '{value} %'
            show:true,
            textStyle: {
              color: "#cecece",
              fontSize: '12',
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#397cbc",
              width: 1,
              type: "solid"
            },
          },
          splitLine: {
            lineStyle: {
              color: "#f0f",
            }
          }
        }],
        series: [
          {
            type: 'bar',
            data: [
              ('湖北', 300),
              ('广东', 250),
              ('浙江', 200),
              ('河南', 150),
              ('湖南', 100)
            ],
            barWidth:'35%', //柱子宽度
            // barGap: 1, //柱子之间间距
            itemStyle: {
              normal: {
                color:'#1990DA',
                opacity: 1,
                barBorderRadius: 5,
              }
            }
          }

        ]
      };
      myChart.setOption(option);
      myChart.off("click");
      myChart.getZr().off("click");
      myChart.getZr().on("click", (params) => {
        const pointInPixel = [params.offsetX, params.offsetY];
        if (myChart.containPixel("grid", pointInPixel) || data.length === 0) {
          routerChange("/more");
        }
      });
    };

    watch(
        year,
        (nl, ol) => {
          getChartData();
        },
        {lazy: false}
    );

    watch(
        parentInfo,
        (nl, ol) => {
          getChartData();
        },
        {lazy: false, deep: true}
    );

    return {
      barChart,
    };
  },
};
</script>
