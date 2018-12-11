<template>
    <!-- 发展全国看板 -->
    <div class="container">
        <!-- 发展看板————全国 -->
        <div class="box">
            <div class="inner1">
                <div class="tips">
                    <div v-for="(item, index) in coverage" :key="index">
                        <p>{{item.name}}覆盖率</p>
                        <div>
                            <span>{{item.data|doCoverage1}}</span><span>.{{item.data|doCoverage2}}%</span>
                        </div>
                    </div>
                    <p class="remarks"><i class="el-icon-warning"></i>备注：请选择对应省份查看数据</p>
                </div>
                <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData1' no='1' class='chart1'></new-chart>
            </div>  
            <div class="inner2">
                <div class="pie-box">
                    <div>
                        <div class="pie-title">签约平台：5500万元</div>
                        <div class="pie-tips">
                            <div v-for="(item, index) in pieTips" :key="index" :class="active2==index?'active':''" @click='changeChart2(index)'>{{item}}</div>
                        </div>
                        <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData2' no='2' class='chart2'></new-chart>
                    </div>
                    <div>
                        <div class="pie-title">待签约平台：5500万元</div>
                        <div class="pie-tips">
                            <div v-for="(item, index) in pieTips" :key="index" :class="active3==index?'active':''" @click='changeChart3(index)'>{{item}}</div>
                        </div>
                        <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData3' no='3' class='chart3'></new-chart>
                    </div>
                </div>
                <div class="bottom-box">
                    <div v-for="(item, index) in conversionDate" :key="index">
                        <div class="pie-title">{{item.title}}</div>
                        <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='item.options' :no='index+4' class='charts'></new-chart>
                    </div>
                </div>
            </div>  
            <div class="inner3">
                <div class="line-tips">
                    <div v-for="(item, index) in lineTips" :key="index" :class="active7==index?'active':''" @click='changeChart7(index)'>
                        <p>{{item}}</p>
                    </div>
                </div>
                <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData7' no='7' class='chart7'></new-chart>
            </div>  
            <div class="inner4">
                <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData8' no='8' class='chart8'></new-chart>
            </div>  
        </div>
    </div>
</template>
<script>
import NewChart from '../baseComponents/NewChart'
import echarts from "echarts"
import "../../node_modules/echarts/map/js/province/shandong"
import "../../node_modules/echarts/map/js/china"
export default {
    data(){
        return{
            screenWidth:document.body.clientWidth,
            screenHeight:document.documentElement.clientHeight,
            pieTips:["数量占比","规模占比"],
            lineTips:["拜访平台","有效拜访平台","意向平台","尽调平台","立项平台","签约平台"],
            active2:0,
            active3:0,
            active7:0,
            coverage:[{
                name:'山东省',
                data:56.6
            },{
                name:'安徽省',
                data:56.9
            }],
            chartData1:{
                legend: {//图例组件
                    orient: 'vertical',
                    align: 'left', 
                    right:"5%",
                    bottom:"5%",
                    data: ['已覆盖省份', '2019年规划中'],
                    textStyle: {
                        color: '#00c0ff',
                        fontSize:11
                    },
                    borderColor:"#091335",
                    borderWidth:1,
                    padding: [10,10,10,10],
                    backgroundColor:"rgba(30,57,133,0.4)"
                },
                geo: { // 这个是重点配置区
                    map: 'china', // 表示中国地图
                    label: {
                        normal:{
                            show:false
                        },
                        emphasis: {
                            show:false
                        }
                    },
                    itemStyle:{
                        normal:{
                            areaColor:"#031132",
                            borderColor:"#1e3f8b",
                            borderWidth:1,
                            // color: {
                            //     type: 'linear',
                            //     x: 0,
                            //     y: 0,
                            //     x2: 1,
                            //     y2: 1,
                            //     colorStops: [{
                            //         offset: 0, color: '#031337' // 0% 处的颜色
                            //     }, {
                            //         offset: 1, color: '#05287a' // 100% 处的颜色
                            //     }],
                            //     globalCoord: false // 缺省为 false
                            // }
                        },
                        emphasis: {
                            areaColor: '#05287a',
                        }
                    },
                    left:"2%",
                    top:"2%",
                    right:"22%",
                    bottom:"2%"
                },
                series:[
                    {
                        name:"已覆盖省份",
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbolSize: 10,
                        large: true,
                        itemStyle: {
                            normal: {
                                shadowBlur: 20,
                                shadowColor: '#00e4ff',
                                color: '#fff',
                                shadowOffsetX:2
                            },
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        },
                        legendHoverLink:true,
                        hoverAnimation:true,
                        data: [
                            {name: '山东', value: [117.002146, 36.659572]},
                            {name: '安徽', value: [117.258387, 31.738471]},
                        ],
                        symbolSize: 12,
                        label: {
                            show:true,
                            formatter:'{b}',
                            offset:[15,10],//文字的相对偏移
                            color:'#5073c1',
                            fontWeight:'bold',
                            fontSize: 11
                        },
                    },
                    {
                        name:"2019年规划中",
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbolSize: 10,
                        large: true,
                        itemStyle: {
                            normal: {
                                shadowBlur: 20,
                                shadowColor: '#0b74ce',
                                color: '#009cff',
                                shadowOffsetX:2
                            }
                        },
                        legendHoverLink:true,
                        hoverAnimation:true,
                        data: [
                            {name: '山西', value: [112.556153, 37.872539]},
                            {name: '湖北', value: [113.913807, 30.701262]},
                            {name: '江西', value: [115.864828, 28.683718]},
                        ],
                        label: {
                            show:true,
                            formatter:'{b}',
                            offset:[15,10],//文字的相对偏移
                            color:'#5073c1',
                            fontWeight:'bold',
                            fontSize: 11
                        },
                    }
                ],
            },
            chartData2:{
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'horizontal',
                    textStyle:{
                        color:'#5d83da'
                    },
                    bottom:0,
                    left:"center",
                    itemWidth:10,
                    itemHeight:10,
                    textStyle:{
                        color:'#5d83da',
                        fontSize:10
                    },
                    data:['项目制','网络制','仓配制']
                },
                series : [
                    {
                        name:'今日订单',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '40%'],
                        data:[
                            {value:45, name:'项目制',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 1,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: '#0d90b4' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#06bfd7' // 100% 处的颜色
                                        }],
                                    }
                                }
                            },
                            {value:20, name:'网络制',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 1,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: '#e3a700' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#de9a00' // 100% 处的颜色
                                        }],
                                    }
                                }
                            },
                            {value:15, name:'仓配制',
                                itemStyle:{
                                    color:"#95e620"
                                }
                            },
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        labelLine: {
                            show:false
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                                textStyle : {                   
                                    align : 'center',
                                    baseline : 'middle',
                                    fontSize : 10,
                                    fontWeight : 'bolder',
                                    color:'#fff'
                                }
                            },
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            },
            chartData3:{
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'horizontal',
                    textStyle:{
                        color:'#5d83da'
                    },
                    bottom:0,
                    left:"center",
                    itemWidth:10,
                    itemHeight:10,
                    textStyle:{
                        color:'#5d83da',
                        fontSize:10
                    },
                    data:['项目制','网络制','仓配制']
                },
                series : [
                    {
                        name:'今日订单',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '40%'],
                        data:[
                            {value:45, name:'项目制',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 1,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: '#0d90b4' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#06bfd7' // 100% 处的颜色
                                        }],
                                    }
                                }
                            },
                            {value:33, name:'网络制',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 1,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: '#e3a700' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#de9a00' // 100% 处的颜色
                                        }],
                                    }
                                }
                            },
                            {value:40, name:'仓配制',
                                itemStyle:{
                                    color:"#95e620"
                                }
                            },
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        labelLine: {
                            show:false
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                                textStyle : {                   
                                    align : 'center',
                                    baseline : 'middle',
                                    fontSize : 10,
                                    fontWeight : 'bolder',
                                    color:'#fff'
                                }
                            },
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            },
            conversionDate:[
                {
                    title:'意向转化率',
                    options:{
                        series: [
                            {
                                name: '业务指标',
                                type: 'gauge',
                                radius: '90%',
                                startAngle: 210,
                                endAngle: -30,
                                detail: {
                                    formatter:'{value}%',
                                    offsetCenter:[0,0],
                                    fontSize:12,
                                    fontWeight:600,
                                    color:"#7bacef"
                                },
                                pointer:{
                                    show:false
                                },
                                axisLine: {
                                    show:true,
                                    // 属性lineStyle控制线条样式
                                    lineStyle: {
                                        width: 12,
                                        color:[[0.6062,{
                                            type: 'linear',
                                                x: 0,
                                                y: 1,
                                                x2: 1,
                                                y2: 0,
                                                colorStops: [{
                                                    offset: 0, color: '#1175a0' // 0% 处的颜色
                                                },{
                                                    offset: 0.5, color: '#05c5dc' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#03d2e5' // 100% 处的颜色
                                                }],
                                                globalCoord: false
                                        }],[1,'rgba(42,70,122,0.4)']]
                                    }
                                },
                                data:[
                                    {value:60.62,},
                                    {value:39.28,}
                                ],
                                splitLine:{
                                    show:false,
                                },
                                axisTick:{
                                    show:false,
                                },
                                axisLabel:{
                                    show:false,
                                },
                                
                            }
                        ]
                    }
                },{
                    title:'立项转化率',
                    options:{
                        series: [
                            {
                                name: '业务指标',
                                type: 'gauge',
                                radius: '90%',
                                startAngle: 210,
                                endAngle: -30,
                                detail: {
                                    formatter:'{value}%',
                                    offsetCenter:[0,0],
                                    fontSize:12,
                                    fontWeight:600,
                                    color:"#7bacef"
                                },
                                pointer:{
                                    show:false
                                },
                                axisLine: {
                                    show:true,
                                    // 属性lineStyle控制线条样式
                                    lineStyle: {
                                        width: 12,
                                        color:[[0.2010,{
                                            type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 1,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: '#fd822c' // 0% 处的颜色
                                                },{
                                                    offset: 0.5, color: '#fd6629' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#fe4626' // 100% 处的颜色
                                                }],
                                                globalCoord: false
                                        }],[1,'rgba(42,70,122,0.4)']]
                                    }
                                },
                                data:[
                                    {value:20.10}
                                ],
                                splitLine:{
                                    show:false,
                                },
                                axisTick:{
                                    show:false,
                                },
                                axisLabel:{
                                    show:false,
                                },
                                
                            }
                        ]
                    }
                },{
                    title:'签约转化率',
                    options:{
                        series: [
                            {
                                name: '业务指标',
                                type: 'gauge',
                                radius: "90%",
                                startAngle: 210,
                                endAngle: -30,
                                detail: {
                                    formatter:'{value}%',
                                    offsetCenter:[0,0],
                                    fontSize:12,
                                    fontWeight:600,
                                    color:"#7bacef"
                                },
                                pointer:{
                                    show:false
                                },
                                axisLine: {
                                    show:true,
                                    // 属性lineStyle控制线条样式
                                    lineStyle: {
                                        width: 12,
                                        color:[[0.6062,{
                                            type: 'linear',
                                                x: 0,
                                                y: 1,
                                                x2: 1,
                                                y2: 0,
                                                colorStops: [{
                                                    offset: 0, color: '#1175a0' // 0% 处的颜色
                                                },{
                                                    offset: 0.5, color: '#05c5dc' // 0% 处的颜色
                                                }, {
                                                    offset: 1, color: '#03d2e5' // 100% 处的颜色
                                                }],
                                                globalCoord: false
                                        }],[1,'rgba(42,70,122,0.4)']]
                                    }
                                },
                                data:[
                                    {value:60.62,},
                                    {value:39.28,}
                                ],
                                splitLine:{
                                    show:false,
                                },
                                axisTick:{
                                    show:false,
                                },
                                axisLabel:{
                                    show:false,
                                },
                                
                            }
                        ]
                    }
                }
            ],
            chartData7:{
                textStyle:{
                    color:"#5579ca",
                    fontSize:10
                },
                grid:{
                    left:'10%',
                    right:'10%',
                    top:'25%',
                    bottom:'15%',
                },
                xAxis: {
                    type: 'category',
                    data: ['7月', '8月', '9月', '10月', '11月', '12月'],
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
                    axisLabel:{
                        fontSize:10
                    }
                },
                yAxis: {
                    type: 'value',
                    name:"(万元)",
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
                    splitLine:{show: false},
                    axisLabel:{
                        fontSize:10
                    }
                },
                series: [{
                    data: [35, 50, 62, 55, 73, 76],
                    type: 'line',
                    stack: '销售量',  
                    itemStyle : {  
                        normal : {  
                            color:'#02dbeb',  
                            lineStyle:{  
                                color:'#02dbeb'  
                            },
                            label:{
                                show:true,
                                color:'#02dbeb'
                            }  
                        }  
                    },
                    areaStyle: {
                        color: {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'transparent' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(0,228,255,0.5)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                    }
                }]
            },
            chartData8:{
                grid:{
                    left:'10%',
                    right:'10%',
                    top:'25%',
                    bottom:'15%',
                },
                xAxis: {
                    type:'category',
                    data:["待尽调平台","待立项平台","待签约平台"],
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#5d83da',//轴线的颜色
                            width:'1'//坐标线的宽度
                        },
                        symbol:['none', 'arrow'],//箭头
                        symbolSize:[8,12],//箭头尺寸
                        symbolOffset:[0,10],//箭头偏移
                    }, 
                    // 刻度方向
                    axisTick: {
                        inside:true
                    },
                },
                yAxis: {
                    type: "value",
                    name:"(家)",//单位
                    nameLocation:"end",//单位位置
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#5d83da',//轴线的颜色
                            width:'1'//坐标线的宽度
                        },
                        symbol:['none', 'arrow'],
                        symbolSize:[8,12],
                        symbolOffset:10
                    },
                    axisTick: {
                        inside:true
                    },
                    // 去除横向网格线
                    splitLine:{show: false}
                },
                // 图表数据
                series: [{
                    type: "bar",
                    barWidth:"20%",
                    data:[100,100,100],
                    itemStyle: {
                        normal: {
                            color: '#101b3b',
                            borderColor:'#3c61ba'
                        }
                    },
                    barGap: '-100%',//偏移与另一柱状图重叠
                    silent: true,
                    },
                    {
                    type: "bar",
                    barWidth:"20%",
                    data:[50,40,20],
                    // 柱状图柱体
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
                    // 显示数据
                    label:{
                        show:true,
                        position:"top",
                        color:'#7bacef'
                    }
                }]
            }
        }
    },
    filters:{
        doCoverage1(value){
            return parseInt(value)
        },
        doCoverage2(value){
            return  value.toString().split('.')[1]
        }
    },
    methods:{
        changeChart2(no){
            this.active2 = no;
            if(no==0){
                this.chartData2.series[0].data[0].value = 45;
                this.chartData2.series[0].data[1].value = 20;
                this.chartData2.series[0].data[2].value = 15;
            }else{
                this.chartData2.series[0].data[0].value = 22;
                this.chartData2.series[0].data[1].value = 30;
                this.chartData2.series[0].data[2].value = 15;
            }
        },
        changeChart3(no){
            this.active3 = no;
            if(no==0){
                this.chartData3.series[0].data[0].value = 45;
                this.chartData3.series[0].data[1].value = 33;
                this.chartData3.series[0].data[2].value = 40;
            }else{
                this.chartData3.series[0].data[0].value = 35;
                this.chartData3.series[0].data[1].value = 20;
                this.chartData3.series[0].data[2].value = 15;
            }
        },
        changeChart7(no){
            this.active7 = no;
            switch(no)
            {
                case 0:
                    this.chartData7.series[0].data = [100, 52, 420, 120, 320, 210];
                    break;
                case 1:
                    this.chartData7.series[0].data = [210, 458, 103, 325, 125, 426];
                    break;
                case 2:
                    this.chartData7.series[0].data = [159, 178, 225, 384, 145, 345];
                    break;
                case 3:
                    this.chartData7.series[0].data = [125, 355, 256, 258, 324, 148];
                    break;
                case 4:
                    this.chartData7.series[0].data = [452, 256, 358, 258, 148, 358];
                    break;
                case 5:
                    this.chartData7.series[0].data = [227, 145, 268, 225, 560, 369];
                    break;
                default:
                    this.chartData7.series[0].data = [452, 356, 123, 158, 256, 222];
            }
        }
    },
    mounted(){
        // 窗口宽度变化调用方法
        const that = this;
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                window.screenHeight = document.documentElement.clientHeight
                that.screenWidth = window.screenWidth
                that.screenHeight = window.screenHeight
            })()
        }
    },
    components:{
        NewChart
    }
}
</script>
<style lang="less" scoped>
    .container{
        width: 100%;
        position: absolute;
        top:12%;
        bottom: 2%;
        >.box{
            width: 98%;
            height: 100%;
            margin:auto;
            display: flex;
            flex-wrap:wrap;
            >.inner1{
                width: 65%;
                height: 65%;
                box-sizing: border-box;
                background-color:rgba(77, 133, 255, 0.1);
                border:1px solid #2d437e;
                display:flex;
                position: relative;
                >.tips{
                    width: 15%;
                    height: 100%;
                    >div{
                        width: 70%;
                        height: 20%;
                        margin:auto;
                        margin-top:15%;
                        padding: 5%;
                        border:1px solid #2d437e;
                        background-color:rgba(77, 133, 255, 0.1);
                        text-align: center;
                        box-sizing: border-box;
                        >p{
                            font-size: 10px;
                            color: white;
                        }
                        >div{
                            padding: 8%;
                            background: #244ab2;
                            margin: auto;
                            margin-top:5%;
                            vertical-align: middle;
                            >span:nth-child(1){
                                color:#e9b500;
                                font-size: 20px;
                                font-weight: 700;
                            } 
                            >span:nth-child(2){
                                color:#e9b500;
                                font-weight: 700;
                                font-size: 10px;
                            }
                        }
                    }
                    .remarks{
                        white-space :nowrap;
                        font-size: 11px;
                        color:#00c0ff;
                        position: absolute;
                        bottom:2%;
                        left:2%
                    }
                }
                >.chart1{
                    width: 85%;
                    height: 100%;
                }
            }
            >.inner2{
                width: 35%;
                height: 65%;
                box-sizing: border-box;
                background-color:rgba(77, 133, 255, 0.1);
                border:1px solid #2d437e;
                padding: 1%;
                >.pie-box{
                    width: 100%;
                    height: 58%;
                    margin-bottom: 2%;
                    display: flex;
                    justify-content: space-between;
                    >div{
                        width: 49%;
                        height: 100%;
                        background-color: rgba(18, 30, 71, 0.5);
                        border:1px solid #1e3f85;
                        box-shadow: 1px 1px 5px #1e3f85;
                        box-sizing: border-box;
                        >.pie-title{
                            width: 80%;
                            margin:auto;
                            text-align: center;
                            border:1px solid #6cfabe;
                            color:#6cfabe;
                            padding: 4px;
                            font-size: 12px;
                            box-sizing: border-box;
                        }
                        .pie-tips{
                            width: 100%;
                            display: flex;
                            justify-content:center;
                            >div{
                                width:35%;
                                text-align: center;
                                font-size: 12px;
                                border:1px solid #091335;
                                background: rgba(22, 46, 121, 0.5);
                                color:#5d83da;
                                padding: 1%;
                                box-sizing: border-box;
                                margin-top:5%;
                            }
                            .active{
                                color:#00c0ff;
                                border:1px solid #3183ff;
                                background: rgba(11, 17, 50, 0.5);
                                box-shadow: 0px 0px 8px #3183ff;
                            }
                        }
                        >.chart2,.chart3{
                            width: 90%;
                            height: 70%;
                            margin: auto;
                        }
                    }
                }
                .bottom-box{
                    width: 100%;
                    height: 40%;
                    background-color: rgba(18, 30, 71, 0.5);
                    border:1px solid #1e3f85;
                    box-shadow: 1px 1px 5px #1e3f85;
                    box-sizing: border-box;
                    display: flex;
                    >div{
                        width: 33%;
                        border-right:1px dashed #3082fc;
                        >.pie-title{
                            width: 80%;
                            margin:auto;
                            margin-bottom: 8%;
                            text-align: center;
                            border:1px solid #6cfabe;
                            color:#6cfabe;
                            padding: 4px;
                            margin-top:5%;
                            font-size: 11px;
                            box-sizing: border-box;
                        }
                        >.charts{
                            width: 100%;
                            height: 70%;
                        }
                    }
                    >div:last-child{
                        border-right:none;
                    }           
                }
            }
            >.inner3{
                width: 65%;
                height: 35%;
                box-sizing: border-box;
                background-color:rgba(77, 133, 255, 0.1);
                border:1px solid #2d437e;
                display: flex;
                >.line-tips{
                    width: 20%;
                    height:100%;
                    >div{
                        width: 100%;
                        height: 16.7%;
                        position: relative;
                        box-sizing: border-box;
                        text-align: center;
                        border-top:1px dashed #38518d;
                        border-right:1px solid #1c4593;
                        border-left:1px solid transparent;
                        border-bottom:1px solid transparent;
                        background-color: rgba(17,30,72,0.5);
                        color: #5579cb;
                        font-size: 12px;
                        cursor: pointer;
                        >p{
                            position: absolute;
                            top:50%;
                            left:50%;
                            transform: translate(-50%,-50%)
                        }
                    }
                    >div:nth-child(1){
                        border-top:1px dashed transparent;
                    }
                    >.active{
                        border:1px solid #3575df;
                        box-shadow: 0px 0px 2px 1px #3575df;
                        background-color: rgba(13,24,60,0.5);
                        color:#00e4ff;
                        font-size: 14px;
                    }
                }
                .chart7{
                    width: 80%;
                    height: 100%;
                }
            }
            >.inner4{
                width: 35%;
                height: 35%;
                box-sizing: border-box;
                background-color:rgba(77, 133, 255, 0.1);
                border:1px solid #2d437e;
                >.chart8{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    
</style>



