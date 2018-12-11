<template>
    <div :id="'myechart'+no" ></div>
</template>

<script>
    export default {
        // 父组件传值接收[配置参数，图表id，屏幕宽度]
        props:['chartData',"no","screenWidth","screenHeight"],
        data() {
            return {
            }
        },
        mounted() {
            this.drawLine();

            // 绑定事件
            this.bindSth(this.chartData);
        },
        methods: {
            // 绘制图表
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myechart'+this.no));
                // 绘制图表
                myChart.setOption(this.chartData);
            },

            // 绑定点击事件
            bindSth(options){
                let that = this;
                // 判断是否为国家地图,则绑定点击事件
                if(options.geo != undefined && options.geo.map == 'china'){
                    let myChart = this.$echarts.init(document.getElementById('myechart'+this.no));
                    myChart.on('click', function(params){
                        // 判断可否跳转
                        for(let a in options.series[0].data){
                            // console.log(options.series[0].data[a].name)
                            if(options.series[0].data[a].name == params.name){
                                that.bindTo(options.series[0].data[a].name);
                            }
                        }
                    });
                }
            },
            // 跳转页面
            bindTo(name){
                // console.log(name)
                // console.log(this.$route.path)
                let currPath = this.$route.path.split('-');
                this.$router.push({path: currPath[0]+'-provincial', query:{provincial:name}});
            }
        },
        watch:{
            // 监听配置参数发生改变
            chartData: {
                handler(newName, oldName) {
                    this.drawLine();
                },
                deep: true,
            },
            // 监听屏幕宽度改变重画图表--自适应
            screenWidth:{
                handler(newName, oldName) {
                    let myChart = this.$echarts.init(document.getElementById('myechart'+this.no));
                    myChart.resize();
                },
                deep: true,
            },
            screenHeight:{
                handler(newName, oldName) {
                    let myChart = this.$echarts.init(document.getElementById('myechart'+this.no));
                    myChart.resize();
                },
                deep: true,
            }
        }
    }
</script>

<style lang="less" scoped>
</style>