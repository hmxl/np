<template>
    <!-- 运营省级看板 -->
    <div class="container">
        <div class="top-box">
            <div class="top-left">
                <div class="tips">
                    <div>
                        <p>合约运力</p>
                        <div>
                            <span>{{driverCnt.contract}}</span>
                            <span>辆</span>
                        </div>
                    </div>
                    <div>
                        <p>临时运力</p>
                        <div>
                            <span>{{driverCnt.temporary}}</span>
                            <span>辆</span>
                        </div>
                    </div>
                </div>
                <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :registerMapData='registerMapData' :chartData='chartData1' no='1' class='chart1'></new-chart>
            </div>
            <div class="top-right">
                <!-- <div class="pie-box"> -->
                    <div class="line-box">
                    <!-- <div>
                        <div class="pie-title">今日订单占比</div>
                        <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData2' no='2' class='chart2'></new-chart>
                    </div>
                    <div>
                        <div class="pie-title">月订单占比</div>
                        <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData3' no='3' class='chart3'></new-chart>
                    </div> -->
                    <div class="btns">
                        <div v-for="(item, index) in btns23" :key="index" :class="active23==index?'active':''" @click='changeChart23(index)'>{{item}}</div>
                    </div>
                    <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData23' no='23' class='chart23'></new-chart>

                </div>
                <div class="line-box">
                    <div class="btns">
                        <div v-for="(item, index) in btns4" :key="index" :class="active4==index?'active':''" @click='changeChart4(index)'>{{item}}</div>
                    </div>
                    <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData4' no='4' class='chart4'></new-chart>
                </div>
            </div>
        </div>
        <div class="bottom-box">
            <div class="btns">
                <div v-for="(item, index) in btns5" :key="index" :class="active5==index?'active':''" @click='changeChart5(index)'>{{item}}</div>
            </div>
            <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData5' no='5' class='chart5'></new-chart>
        </div>
    </div>
</template>
<script>
import NewChart from '../baseComponents/NewChart'
// import echarts from "echarts"
// import "../../node_modules/echarts/map/js/province/shandong"
// import "../../node_modules/echarts/map/js/china"
export default {
    data(){
        return{
            screenWidth:document.body.clientWidth,
            screenHeight:document.documentElement.clientHeight,
            provincial:'',
            loadMap:'',
            driverCnt:{},
            registerMapData:{},
            btns23:["当日订单省份排名","当日月订单省份排名"],
            btns4:['订单量月度k线','交易额月度k线'],
            btns5:['订单量日k线','交易额日k线'],
            active23:0,
            active4:0,
            active5:0,
            chartData1:{
                legend: {//图例组件
                    orient: 'vertical',
                    align: 'left', 
                    right:"2%",
                    bottom:"2%",
                    data: ['已覆盖地区', '2019年规划中'],
                    textStyle: {
                        color: '#00c0ff'
                    },
                    borderColor:"#091335",
                    borderWidth:1,
                    padding: [15,15,15,15],
                    backgroundColor:"rgba(30,57,133,0.5)"
                },
                geo: { // 这个是重点配置区
                    map: '山东', // 表示中国地图
                    label: {
                        normal: {
                            show: true, // 是否显示对应地名
                            textStyle: {
                                color: '#01b0ee'
                            }
                        },
                        emphasis:{
                            show:true,
                            textStyle: {
                                color: '#01b0ee'
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            // areaColor:"#052368",
                            borderColor:"#183058",
                            borderWidth:3,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#031337' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#05287a' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        emphasis: {
                            areaColor: '#05287a',
                        }
                    },
                    left:"8%",
                    top:"8%",
                    right:"8%",
                    bottom:"8%"
                },
                series:[
                    {
                        name:"已覆盖地区",
                        type: 'effectScatter',
                        rippleEffect: {
                            period:4,
                            scale: 3,
                        },
                        coordinateSystem: 'geo',
                        symbolSize: 10,
                        large: true,
                        itemStyle: {
                            normal: {
                                shadowBlur: 20,
                                shadowColor: '#00e4ff',
                                color: '#fff',
                                shadowOffsetX:2
                            }
                        },
                        legendHoverLink:true,
                        hoverAnimation:true,
                        data: [
                            {name: '青岛市', value: [120.383219, 36.106842]},
                            {name: '泰安市', value: [117.091042, 36.206789]},
                            {name: '潍坊市', value: [119.160325, 36.710798]},
                            {name: '临沂市', value: [119.160325, 36.710798]},
                            {name: '济南市', value: [117.132723, 36.658407]},
                            {name: '烟台市', value: [121.453267, 37.47004]},
                            
                        ]
                    },
                    {
                        name:"2019年规划中",
                        type: 'effectScatter',
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
                            {name: '枣庄市', value: [117.332839, 34.817891]},
                            {name: '东营市', value: [118.679659, 37.441017]},
                            {name: '威海市', value: [122.151691, 37.43716]},
                        ]
                    }
                ],
            },
            chartData2:{
                grid:{
                    left:'15%',
                    right:'5%',
                    top:'26%',
                    bottom:'18%',
                },
                xAxis: {
                    type:'category',
                    data:[],
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
                    axisLabel:{
					    interval:0,//横轴信息全部显示
					    rotate:-40,//-30度角倾斜显示
					}
                },
                yAxis: {
                    type: "value",
                    name:"(笔)",//单位
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
                series: [
                    {
                    type: "bar",
                    barWidth:"60%",
                    data:[],
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
            },
            chartData3:{
                grid:{
                    left:'20%',
                    right:'5%',
                    top:'26%',
                    bottom:'18%',
                },
                xAxis: {
                    type:'category',
                    data:[],
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
                    axisLabel:{
					    interval:0,//横轴信息全部显示
					    rotate:-40,//-30度角倾斜显示
					}
                },
                yAxis: {
                    type: "value",
                    name:"笔",//单位
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
                series: [
                    {
                    type: "bar",
                    barWidth:"40%",
                    data:[],
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
                
            },
            chartData23:{
                textStyle:{
                    color:"#5579ca",
                    fontSize:10
                },
                grid:{
                    left:'10%',
                    right:'10%',
                    top:'20%',
                    bottom:'20%',
                },
                xAxis: {
                    type:'category',
                    data:[],
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
                    }
                },
                yAxis: {
                    type: "value",
                    name:"(笔)",//单位
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
                    splitLine:{show: false},
                    axisLabel:{
                        fontSize:10
                    }
                },
                // 图表数据
                series: [
                    {
                    type: "bar",
                    barWidth:"40%",
                    data:[],
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
            },
            chartData23Day:[],
            chartData23Month:[],
            orderName1:[],
            orderName2:[],
            chartData4:{
                textStyle:{
                    color:"#5579ca",
                    fontSize:10
                },
                grid:{
                    left:'10%',
                    right:'10%',
                    top:'20%',
                    bottom:'20%',
                },
                xAxis: {
                    type: 'category',
                    data: [],
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
                    name:"",
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
                    data: [],
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
            chartData4Order:[],
            chartData4Money:[],
            chartData5:{
                textStyle:{
                    color:"#5579ca",
                    fontSize:10
                },
                grid:{
                    left:'5%',
                    right:'5%',
                    top:'20%',
                    bottom:'20%',
                },
                xAxis: {
                    type: 'category',
                    data: [],
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
                    splitLine:{show: false},
                    axisLabel:{
                        fontSize:10
                    }
                },
                series: [{
                    data: [],
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
            chartData5Order:[],
            chartData5Money:[],
        }
    },
    components:{
        NewChart
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
        };
        this.provincial = this.$route.query.provincial;
        this.loadMap = this.$route.query.loadMap;
        this.chartData1.geo.map = this.$route.query.provincial;
        this.loadProvincialMap(this.$route.query.loadMap);
        this.getData();
        setInterval(()=>{this.getData()},10*60*1000);
    },
    methods:{
        getData(){
            this.$http.get(process.env.BASE_URL+"/api/operation/order",{params:{province:this.provincial+"省"}}).then((res)=>{
                // console.log(res)
                let data = res.data;
                // 运力
                this.driverCnt = data.driverCnt;
                // 日订单 月订单(降序)
                let orderName1 = [];
                let dayOrder = [];
                let orderName2 = [];
                let monthOrder = [];
                for(let i in data.dayOrder){
                    let a = { value:data.dayOrder[i], name:i};
                    let b = { value:data.monthOrder[i], name:i};
                    dayOrder.push(a);
                    monthOrder.push(b);
                }
                dayOrder.sort(function (a, b) { return b.value - a.value; });
                monthOrder.sort(function (a, b) { return b.value - a.value; });
                for(let i in dayOrder){
                    orderName1.push(dayOrder[i].name);
                    orderName2.push(monthOrder[i].name);
                }
                this.orderName1 = orderName1;
                this.chartData23Day = dayOrder;
                
                this.orderName2 = orderName2;
                this.chartData23Month = monthOrder;
                this.chartData23.xAxis.data = orderName1;
                this.chartData23.series[0].data = dayOrder;
                // 月k线
                this.chartData4.xAxis.data = data.kLineMonth.times;
                this.chartData4.series[0].data = data.kLineMonth.orders;
                this.chartData4.yAxis.name = "(笔)";
                this.chartData4Order = data.kLineMonth.orders;
                this.chartData4Money = data.kLineMonth.moneys;
                // 日k线
                this.chartData5.xAxis.data = data.kLineDay.times;
                this.chartData5.series[0].data = data.kLineDay.orders;
                this.chartData5.yAxis.name = "(笔)";
                this.chartData5Order = data.kLineDay.orders;
                this.chartData5Money = data.kLineDay.moneys;
            });
        },
        changeChart23(no){
            this.active23 = no;
            if(no == 0){
                this.chartData23.series[0].data = this.chartData23Day;
                this.chartData23.xAxis.data = this.orderName1;
            }else{
                this.chartData23.series[0].data = this.chartData23Month;
                this.chartData23.xAxis.data = this.orderName2;
            }
        },
        changeChart4(no){
            this.active4 = no;
            if(no == 0){
                this.chartData4.series[0].data = this.chartData4Order;
                this.chartData4.yAxis.name = "(笔)";
            }else{
                this.chartData4.series[0].data = this.chartData4Money;
                this.chartData4.yAxis.name = "(元)";
            }
        },
        changeChart5(no){
            this.active5 = no;
            if(no==0){
                this.chartData5.series[0].data =  this.chartData5Order;
                this.chartData5.yAxis.name = "笔";
            }else{
                this.chartData5.series[0].data =  this.chartData5Money;
                this.chartData5.yAxis.name = "元";
            }
        },
        loadProvincialMap(procincial){
            // 获取省级地图自定义配置
            this.$http.get('../../static/map/province/'+procincial+'.json').then((res)=>{
                var d = [];
                // console.log(res.body)
                this.registerMapData = res.body;
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .container{
        width: 100%;
        position: absolute;
        top:12%;
        bottom: 2%;
        >.top-box{
            width: 98%;
            margin:auto;
            display: flex;
            height: 65%;
            >.top-left{
                width: 60%;
                height: 100%;
                box-sizing: border-box;
                background-color:rgba(77, 133, 255, 0.1);
                border:1px solid #2d437e;
                display: flex;
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
                            font-size: 12px;
                            color: white;
                        }
                        >div{
                            // width: 90%;
                            // height:65%;
                            padding: 8%;
                            background: #244ab2;
                            margin: auto;
                            margin-top:5%;
                            vertical-align: middle;
                            >span:nth-child(1){
                                color:#e9b500;
                                font-size: 22px;
                                font-weight: 700;
                            } 
                            >span:nth-child(2){
                                color:#2d437e;
                                font-size: 12px;
                            }
                        }
                    }
                }
                >.chart1{
                    width: 85%;
                    height: 100%;
                }
            }
            >.top-right{
                width: 40%;
                height: 100%;
                box-sizing: border-box;
                background-color:rgba(77, 133, 255, 0.1);
                border:1px solid #2d437e;
                >.pie-box{
                    width: 100%;
                    height: 50%;
                    padding:1%;
                    display: flex;
                    box-sizing: border-box;
                    justify-content: space-between;
                    >div{
                        width: 49%;
                        height: 100%;
                        background-color:rgba(21, 34, 74, 0.5);
                        border:1px solid #1e3f85;
                        box-shadow: 1px 1px 5px #1e3f85;
                        box-sizing: border-box;
                        padding: 1%;
                        >.pie-title{
                            width: 70%;
                            margin:auto;
                            text-align: center;
                            border:1px solid #6cfabe;
                            color:#6cfabe;
                            padding: 5px;
                            font-size: 12px;
                            box-sizing: border-box;
                        }
                        >.chart2,.chart3{
                            width: 90%;
                            height: 80%;
                            margin: auto;
                        }
                    }
                }
                >.line-box{
                    width: 98%;
                    height: 48%;
                    margin:auto;
                    margin-top:1%;
                    padding:1%;
                    box-sizing: border-box;
                    border:1px solid #1e3f85;
                    box-shadow: 1px 1px 5px #1e3f85;
                    background-color:rgba(21, 34, 74, 0.5);
                    >.chart23,.chart4{
                        width: 100%;
                        height: 90%;
                    }
                }
            }
        }
        >.bottom-box{
            width: 98%;
            margin:auto;
            height: 35%;
            box-sizing: border-box;
            padding:1%;
            background-color:rgba(77, 133, 255, 0.1);
            border:1px solid #2d437e;
            .chart5{
                width: 100%;
                height: 90%;
            }
        }
    }
</style>
<style lang="less" scoped>
    .btns{
        display: flex;
        font-size:10px;
        justify-content: flex-end;
        >div{
            border:1px solid #091335;
            background-color:#152d74;
            padding:2px 8px;
            box-sizing:border-box;
            color:#597fd4;
            margin-right:1px;
            cursor: pointer;
        }
        .active{
            border:1px solid #3183ff;
            background-color:#0c112f;
            color:#00c0ff;
            box-shadow:1px 1px 5px #1b4285 
        }
    }
</style>


