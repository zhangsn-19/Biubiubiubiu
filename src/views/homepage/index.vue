<template>
  <div class="home-container">
    <z-row :gutter="15">
      <z-col :span="7">
        <div class="echartList">
          <div class="chart-item">
            <box-container :boxTitle="year + '设备异常情况总量统计'">
              <city-count />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '人员异常情况总量统计'">
              <type-count />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '监控视频异常情况总量统计'">
              <word-chart />
            </box-container>
          </div>
        </div>
      </z-col>
      <z-col :span="10">
        <count-to :value="sum" suffix="万" :speed="20" />
        <div style="width:100%;height:85%">
          <scatter-map />
        </div>
      </z-col>
      <z-col :span="7">
        <div class="echartList">
          <div class="chart-item">
            <box-container :boxTitle="year + '年安防设施分布（新增加留存）'">
              <funnel-chart />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年入驻公司总产值'">
              <liquid-chart />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年出货流转量统计'">
              <bar-chart />
            </box-container>
          </div>
        </div>
      </z-col>
    </z-row>
  </div>
</template>

<script>
import { ZRow, ZCol } from "@UI/components";
import boxContainer from "@/components/boxContainer/index";
import fourAngel from "@/components/fourAngel/index";
import countTo from "@/components/countTo/index";
import {
  cityCount,
  typeCount,
  scatterMap,
  wordChart,
  funnelChart,
  lineChart,
  barChart,
  liquidChart,
} from "./components";
import useResize from "@/componentApi/useResize.js";
import { ref } from "vue";

export default {
  name: "homepage",
  components: {
    ZRow,
    ZCol,
    boxContainer,
    cityCount,
    typeCount,
    scatterMap,
    barChart,
    wordChart,
    funnelChart,
    lineChart,
    liquidChart,
    fourAngel,
    countTo,
  },
  setup(props, context) {
    const { year, sum } = useResize();
    return {
      year,
      sum,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  position: relative;

  .echartList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    .chart-item {
      height: 32.1%;
      width: 100%;
    }
  }
}
</style>
