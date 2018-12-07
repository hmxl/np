<template>
  <div :id="'myechart'+no"></div>
</template>

<script>
  export default {
    props:['chartData',"no","screenWidth"],
    data() {
      return {
      }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myechart'+this.no));
        // 绘制图表
        myChart.setOption(this.chartData);
      }
    },
    watch:{
        chartData: {
            handler(newName, oldName) {
                this.drawLine();
            },
            deep: true,
        },
        screenWidth:{
            handler(newName, oldName) {
                let myChart = this.$echarts.init(document.getElementById('myechart'+this.no));
                myChart.resize();
            },
            deep: true,
        },
    }
  }
</script>

<style lang="less" scoped>
</style>