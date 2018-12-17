<template>
    <div :id="'myechart'+no" ></div>
</template>

<script>
    import cityMap from "../../static/map/citymap"
    export default {
        // 父组件传值接收[配置参数，图表id，屏幕宽度]
        props:['chartData',"no","screenWidth","screenHeight","registerMapData"],
        data() {
            return {
                cityMap:cityMap.cityMap(),
                provinces : {
                    //23个省
                    "台湾": "taiwan",
                    "河北": "hebei",
                    "山西": "shanxi",
                    "辽宁": "liaoning",
                    "吉林": "jilin",
                    "黑龙江": "heilongjiang",
                    "江苏": "jiangsu",
                    "浙江": "zhejiang",
                    "安徽": "anhui",
                    "福建": "fujian",
                    "江西": "jiangxi",
                    "山东": "shandong",
                    "河南": "henan",
                    "湖北": "hubei",
                    "湖南": "hunan",
                    "广东": "guangdong",
                    "海南": "hainan",
                    "四川": "sichuan",
                    "贵州": "guizhou",
                    "云南": "yunnan",
                    "陕西": "shanxi1",
                    "甘肃": "gansu",
                    "青海": "qinghai",
                    //5个自治区
                    "新疆": "xinjiang",
                    "广西": "guangxi",
                    "内蒙古": "neimenggu",
                    "宁夏": "ningxia",
                    "西藏": "xizang",
                    //4个直辖市
                    "北京": "beijing",
                    "天津": "tianjin",
                    "上海": "shanghai",
                    "重庆": "chongqing",
                    //2个特别行政区
                    "香港": "xianggang",
                    "澳门": "aomen"
                }
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
                }else if(options.geo != undefined && options.geo.map in this.provinces){
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
                if(currPath[1] == 'national'){
                    this.$router.push({path: currPath[0]+'-provincial', query:{provincial:name, loadMap:this.provinces[name]}});
                }else{
                    this.$router.push({path: currPath[0]+'-district', query:{district:name, loadMap:this.cityMap[name]}});
                }
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
            },
            registerMapData:{
                handler(n,o){
                    let myChart = this.$echarts.init(document.getElementById('myechart'+this.no));
                    if(this.chartData.geo != undefined && this.chartData.geo.map != 'china'){
                        this.$echarts.registerMap( this.chartData.geo.map, this.registerMapData);
                    }
                    // 绘制图表
                    myChart.setOption(this.chartData);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
</style>