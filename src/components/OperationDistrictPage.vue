<template>
    <!-- 运营区级看板 -->
    <div class="container">
        <div class="top-box">
            <div class="top-left">
                <div class="tips">
                    <div>
                        <p>合约运力</p>
                        <div>
                            <span>65</span>
                            <span>辆</span>
                        </div>
                    </div>
                    <div>
                        <p>临时运力</p>
                        <div>
                            <span>65</span>
                            <span>辆</span>
                        </div>
                    </div>
                </div>
                <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :registerMapData='registerMapData' :chartData='chartData1' no='1' class='chart1'></new-chart>
            </div>
            <div class="top-right">
                <div class="pie-box">
                    <div>
                        <div class="pie-title">今日订单占比</div>
                        <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData2' no='2' class='chart2'></new-chart>
                    </div>
                    <div>
                        <div class="pie-title">月订单占比</div>
                        <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData3' no='3' class='chart3'></new-chart>
                    </div>
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
            district:'',
            loadMap:'',
            registerMapData:{},
            btns4:['订单量月度k线','交易额月度k线'],
            btns5:['订单量日k线','交易额日k线'],
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
                            {name: '济阳县',value:[117.132112,36.857098] },
                            
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
                        ]
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
                    }
                },
                series : [
                    {
                        name:'今日订单',
                        type:'pie',
                        radius : '70%',
                        center: ['50%', '45%'],
                        data:[
                            {value:60, name:'青岛市',
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
                            {value:30, name:'泰安市',
                                itemStyle:{
                                    color:"#de9a00"
                                }
                            },
                            {value:40, name:'潍坊市',
                                itemStyle:{
                                    color:"#6cfabe"
                                }
                            },
                        ],
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
                    }
                },
                series : [
                    {
                        name:'今日订单',
                        type:'pie',
                        radius : '70%',
                        center: ['50%', '45%'],
                        data:[
                            {value:600, name:'安徽省',itemStyle:{
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: '#0d90b4' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#06bfd7' // 100% 处的颜色
                                    }],
                                }
                            }},
                            {value:400, name:'山东省',itemStyle:{
                                color:"#de9a00"
                            }},
                        ],
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
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
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
                    data: [35, 50, 62, 55, 73, 76, 12, 30, 66, 90, 58, 78, 60, 54, 36, 
                            33, 62, 28, 91, 55, 75, 78, 85, 36, 54, 15, 61, 84, 79, 80],
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
            }
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
        this.district = this.$route.query.district;
        this.loadMap = this.$route.query.loadMap;
        this.chartData1.geo.map = name;
        this.loadProvincialMap(this.$route.query.loadMap,this.$route.query.provincial);
        
    },
    methods:{
        changeChart4(no){
            this.active4 = no;
            if(no == 0){
                this.chartData4.series[0].data = [35, 50, 62, 55, 73, 76];
            }else{
                this.chartData4.series[0].data = [22, 40, 80, 35, 88, 20];
            }
        },
        changeChart5(no){
            this.active5 = no;
            if(no==0){
                this.chartData5.series[0].data = [35, 50, 62, 55, 73, 76, 12, 30, 66, 90, 58, 78, 60, 54, 36, 
                                                    33, 62, 28, 91, 55, 75, 78, 85, 36, 54, 15, 61, 84, 79, 80];
            }else{
                this.chartData5.series[0].data = [40, 33, 56, 54, 22, 35, 65, 97, 45, 12, 56, 89, 35, 65, 96, 
                                                    35, 74, 83, 94, 42, 75, 35, 74, 46, 24, 27, 75, 43, 36, 56];
            }
        },
        loadProvincialMap(district){
            // 获取省级地图自定义配置
            this.$http.get('../../static/map/city/'+district+'.json').then((res)=>{
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
                    height: 49%;
                    margin:auto;
                    padding:1%;
                    box-sizing: border-box;
                    border:1px solid #1e3f85;
                    box-shadow: 1px 1px 5px #1e3f85;
                    background-color:rgba(21, 34, 74, 0.5);
                    >.chart4{
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


