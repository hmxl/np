<template>
    <div class='container'>
        <div class='top-box'>
            <div class="top-left">
                <div class="btns">
                    <div class="chart-title">财务数据</div>
                    <div class="chart-btn">
                        <div v-for="(item, index) in btns1" :key="index" :class="active1==index?'active':''" @click='changeChart1(index)'>{{item}}</div>
                    </div>
                </div>
                <new-chart :screenWidth='screenWidth' :chartData='chartData1' no='1' class='chart1'></new-chart>
            </div>
            <div class="top-right">
                <div class="btns">
                    <div class="chart-title">任务完成度</div>
                    <div class="chart-btn">
                        <div v-for="(item, index) in btns2" :key="index" :class="active2==index?'active':''" @click='changeChart2(index)'>{{item}}</div>
                    </div>
                </div>
                <new-chart :screenWidth='screenWidth' :chartData='chartData2' no='2' class='chart2'></new-chart>
            </div>
            
        </div>
        <div class='bottom-box'>
            <div class="btns">
                <div class="chart-title">资料收集进度</div>
                <div class="chart-btn">
                    <div v-for="(item, index) in btns3" :key="index" :class="active3==index?'active':''" @click='changeChart3(index)'>{{item}}</div>
                </div>
            </div>
            <new-chart :screenWidth='screenWidth' :chartData='chartData3' no='3' class='chart3'></new-chart>
        </div>
        
    </div>
</template>



<script>
  import NewChart from "../baseComponents/NewChart";
  export default {
    data() {
        return {
            screenWidth:document.body.clientWidth,
            btns1:["尽调平台数","立项平台数","财务流程委派","预算编制"],
            btns2:["尽调平台数","立项平台数","财务流程委派","预算编制"],
            btns3:["安徽","山东","江苏","浙江","江西","湖北","山西","河北"],
            active1:0,
            active2:0,
            active3:0,
            chartData1: {
                tooltip: {},
                xAxis: {
                    type:'category',
                    data:["7月","8月","9月","10月","11月","12月"],
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#5d83da',//左边线的颜色
                            width:'1'//坐标线的宽度
                        },
                        symbol:['none', 'arrow'],
                        symbolSize:[8,12],
                        symbolOffset:[0,10],
                    }, 
                    axisTick: {
                        inside:true
                    },
                },
                yAxis: {
                    type: "value",
                    name:"(家)",
                    nameLocation:"end",
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#5d83da',//左边线的颜色
                            width:'1'//坐标线的宽度
                        },
                        symbol:['none', 'arrow'],
                        symbolSize:[8,12],
                        symbolOffset:10
                    },
                    axisTick: {
                        inside:true
                    },
                    splitLine:{show: false}
                },
                series: [{
                    type: "bar",
                    barWidth:20,
                    data:[100,100,100,100,100,100],
                    itemStyle: {
                        normal: {
                            color: '#101b3b',
                            borderColor:'#3c61ba'
                        }
                    },
                    barGap: '-100%',
                    silent: true,
                    },
                    {
                    type: "bar",
                    barWidth:20,
                    data:[50,61,10,15,25,40],
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#01dcec"
                                },
                                {
                                offset: 1,
                                color: "#165789"
                                }
                            ])
                        }
                    },
                    label:{
                        show:true,
                        position:"top",
                        color:'#7bacef'
                    }
                }]
            },
            chartData2: {
                textStyle:{
                    color:"#5d83da",
                },
                legend: {
                    x: 50,
                    y: 10,
                    textStyle:{
                        color:"#5d83da"
                    }
                },
                tooltip: {},
                xAxis: [{
                    type: "category",
                    data:["山东","安徽","江苏","浙江","江西","湖北","山西","河北"],
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#5d83da',//左边线的颜色
                            width:'1'//坐标线的宽度
                        },
                        symbol:['none', 'arrow'],
                        symbolSize:[8,12],
                        symbolOffset:[0,10],
                    }, 
                    axisTick: {
                        inside:true
                    }
                
                }],
                yAxis: {
                    type: "value",
                    name:"(家)",
                    nameLocation:"end",
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#5d83da',//左边线的颜色
                            width:'1'//坐标线的宽度
                        },
                        symbol:['none', 'arrow'],
                        symbolSize:[8,12],
                        symbolOffset:10
                    },
                    axisTick: {
                        inside:true
                    },
                    splitLine:{show: false}
                },
                //   柱状图颜色
                series: [{
                        type: "bar",
                        name: "已完成",
                        // 切换数值
                        data:[63,60,50,55,22,30,42,11],
                        barWidth: "15",
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#01dcec"
                                    },
                                    {
                                    offset: 1,
                                    color: "#165789"
                                    }
                                ])
                            }
                        },
                        label:{
                            show:true,
                            position:"top",  
                            color:"#01dcec",
                            fontWeight:700                     
                        }

                    },
                    {
                    type: "bar",
                    name: "待完成",
                    // 切换数值
                    data:[33,20,30,25,12,40,12,21],
                    barWidth: "15",
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#f2b400"
                                },
                                {
                                offset: 1,
                                color: "#d17800"
                                }
                            ])
                        }
                    },
                    label:{
                        show:true,
                        position:"top",  
                        color:"#f2b400",
                        fontWeight:200                     
                    }
                }]
            },
            chartData3: {
                textStyle:{
                    color:"#5d83da"
                },
                legend: {
                    top:"10%",
                    right:'10%',
                    textStyle:{
                        color:"#5d83da"
                    }
                },
                tooltip: {},
                dataset: {
                    source: [{
                        product: "平台1",
                        所有资料进度: 43,
                        核心资料进度: 85
                    },
                    {
                        product: "平台2",
                        所有资料进度: 83,
                        核心资料进度: 73
                    },
                    {
                        product: "平台3",
                        所有资料进度: 86,
                        核心资料进度: 65
                    },
                    {
                        product: "平台4",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台5",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台6",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台7",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台8",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台9",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台10",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台11",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台12",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台13",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台14",
                        所有资料进度: 72,
                        核心资料进度: 53
                    }
                    ]
                },
                xAxis: {
                    type: "category",
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#5d83da',//左边线的颜色
                            width:'1'//坐标线的宽度
                        },
                        symbol:['none', 'arrow'],
                        symbolSize:[8,12],
                        symbolOffset:[0,10],
                    }, 
                    axisTick: {
                        inside:true
                    }
                },
                yAxis: {
                    type: "value",
                    name:"%",
                    nameLocation:"end",
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#5d83da',//左边线的颜色
                            width:'1'//坐标线的宽度
                        },
                        symbol:['none', 'arrow'],
                        symbolSize:[8,12],
                        symbolOffset:10
                    },
                    axisTick: {
                        inside:true
                    },
                    splitLine:{show: false}
                },
                series: [{
                    type: "bar",
                    barWidth: "15",
                    name: "所有资料进度",
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#01dcec"
                                },
                                {
                                offset: 1,
                                color: "#165789"
                                }
                            ])
                        }
                    },
                    label:{
                        show:true,
                        position:"top",  
                        color:"#01dcec",
                        fontWeight:700                     
                    }
                    },
                    {
                    type: "bar",
                    barWidth: "15",
                    name: "核心资料进度",
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#f2b400"
                                },
                                {
                                offset: 1,
                                color: "#d17800"
                                }
                            ])
                        }
                    },
                    label:{
                        show:true,
                        position:"top",  
                        color:"#01dcec",
                        fontWeight:700                     
                    }
                    }
                ]
            }
        };
    },
    components: {
        NewChart
    },
    methods:{
        changeChart1(no){
            this.active1 = no;
            if(no==0){
                this.chartData1.series[1].data = [50,61,10,15,25,40];
            }else if(no == 1){
                this.chartData1.series[1].data = [10,21,30,15,55,40];
            }else if(no ==2){
                this.chartData1.series[1].data = [30,10,40,25,9,60];
            }else{
                this.chartData1.series[1].data = [70,20,30,75,80,20];
            }
        },
        changeChart2(no){
            this.active2 = no;
            if(no==0){
                this.chartData2.series[0].data = [63,60,50,55,22,30,42,11];
                this.chartData2.series[1].data = [33,20,30,25,12,40,12,21];
            }else if(no==1){
                this.chartData2.series[0].data = [30,30,60,5,62,36,33,9];
                this.chartData2.series[1].data = [20,100,20,65,22,16,12,15];
            }else if(no==2){
                this.chartData2.series[0].data = [50,70,10,51,32,36,13,19];
                this.chartData2.series[1].data = [50,30,20,35,22,6,52,15];
            }else{
                this.chartData2.series[0].data = [33,70,33,51,32,36,13,19];
                this.chartData2.series[1].data = [15,3,20,35,12,36,52,15];
            }
        },
        changeChart3(no){
            this.active3 = no;
            if(no == 0){
                this.chartData3.dataset.source = [{
                        product: "平台1",
                        所有资料进度: 43,
                        核心资料进度: 85
                    },
                    {
                        product: "平台2",
                        所有资料进度: 83,
                        核心资料进度: 73
                    },
                    {
                        product: "平台3",
                        所有资料进度: 86,
                        核心资料进度: 65
                    },
                    {
                        product: "平台4",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台5",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台6",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台7",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台8",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台9",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台10",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台11",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台12",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台13",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台14",
                        所有资料进度: 72,
                        核心资料进度: 53
                    }]
            }else if(no == 1){
                this.chartData3.dataset.source = [{
                        product: "平台1",
                        所有资料进度: 44,
                        核心资料进度: 55
                    },
                    {
                        product: "平台2",
                        所有资料进度: 15,
                        核心资料进度: 26
                    },
                    {
                        product: "平台3",
                        所有资料进度: 65,
                        核心资料进度: 23
                    },
                    {
                        product: "平台4",
                        所有资料进度: 33,
                        核心资料进度: 78
                    },
                    {
                        product: "平台5",
                        所有资料进度: 55,
                        核心资料进度: 33
                    },
                    {
                        product: "平台6",
                        所有资料进度: 78,
                        核心资料进度: 95
                    },
                    {
                        product: "平台7",
                        所有资料进度: 55,
                        核心资料进度: 89
                    },
                    {
                        product: "平台8",
                        所有资料进度: 98,
                        核心资料进度: 77
                    },
                    {
                        product: "平台9",
                        所有资料进度: 25,
                        核心资料进度: 53
                    },
                    {
                        product: "平台10",
                        所有资料进度: 88,
                        核心资料进度: 59
                    },
                    {
                        product: "平台11",
                        所有资料进度: 36,
                        核心资料进度: 23
                    },
                    {
                        product: "平台12",
                        所有资料进度: 56,
                        核心资料进度: 60
                    },
                    {
                        product: "平台13",
                        所有资料进度: 72,
                        核心资料进度: 53
                    },
                    {
                        product: "平台14",
                        所有资料进度: 54,
                        核心资料进度: 59
                    }]
            }else if(no == 2){
                this.chartData3.dataset.source = [{
                        product: "平台1",
                        所有资料进度: 12,
                        核心资料进度: 45
                    },
                    {
                        product: "平台2",
                        所有资料进度: 52,
                        核心资料进度: 22
                    },
                    {
                        product: "平台3",
                        所有资料进度: 87,
                        核心资料进度: 62
                    },
                    {
                        product: "平台4",
                        所有资料进度: 37,
                        核心资料进度: 96
                    },
                    {
                        product: "平台5",
                        所有资料进度: 99,
                        核心资料进度: 78
                    },
                    {
                        product: "平台6",
                        所有资料进度: 55,
                        核心资料进度: 56
                    },
                    {
                        product: "平台7",
                        所有资料进度: 45,
                        核心资料进度: 66
                    },
                    {
                        product: "平台8",
                        所有资料进度: 78,
                        核心资料进度: 22
                    },
                    {
                        product: "平台9",
                        所有资料进度: 56,
                        核心资料进度: 45
                    },
                    {
                        product: "平台10",
                        所有资料进度: 45,
                        核心资料进度: 22
                    },
                    {
                        product: "平台11",
                        所有资料进度: 48,
                        核心资料进度: 86
                    },
                    {
                        product: "平台12",
                        所有资料进度: 47,
                        核心资料进度: 56
                    },
                    {
                        product: "平台13",
                        所有资料进度: 44,
                        核心资料进度: 53
                    },
                    {
                        product: "平台14",
                        所有资料进度: 66,
                        核心资料进度: 48
                    }]
            }

        },
    },
    mounted(){
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
    }
  };

</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        >.top-box {
            width: 98%;
            margin:auto;
            display: flex;
            >.top-left{ 
                width: 40%;
                height: 300px;
                padding: 10px;
                box-sizing: border-box;
                background-color:rgba(77, 133, 255, 0.1);
                border:1px solid #2d437e;
                >.chart1 {
                    width: 100%;
                    height: 95%;
                    margin:auto;
                } 
            }
            >.top-right{
                width: 60%;
                height: 300px;
                padding: 10px;
                box-sizing: border-box;
                background-color:rgba(77, 133, 255, 0.1);
                border:1px solid #2d437e;
                >.chart2 {
                    width: 100%;
                    height: 95%;
                    margin:auto;
                }
            }
            
        }
        >.bottom-box{
            width: 98%;
            height: 300px;
            margin:auto;
            padding: 10px;
            box-sizing: border-box;
            background-color:rgba(77, 133, 255, 0.1);
            border:1px solid #2d437e;
            >.chart3 {
                width: 100%;
                height: 95%;
                margin:auto;
            }
        }
        
    }
</style>
<style lang="less" scoped>
    .btns{
        width: 95%;
        margin:auto;
        display: flex;
        justify-content:space-between;
        >.chart-title{
            box-sizing:border-box;
            padding:1px 20px;
            color:#60deb7;
            text-align:center;
            font-size:14px;
            border:1px solid #60deb7;
        }
        >.chart-btn{
            display: flex;
            >div{
                box-sizing:border-box;
                padding:1px 15px;
                color:#5d83da;
                text-align:center;
                font-size:12px;
                border:2px solid transparent;
                cursor:pointer;
                background-color:rgba(27, 42, 86, 0.4);
            }
            .active{
                border:2px solid #3183ff;
                box-shadow: 0px 0px 5px #3183ff;
                background-color:rgba(27, 42, 86, 0.9);
            }
        }
    }
</style>

