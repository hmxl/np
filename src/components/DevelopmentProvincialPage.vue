<template>
    <!-- 发展省级看板 -->
    <div class="container">
        <div class="box">
            <div class="inner1">
                <div class="table1">
                    <table>
                        <tr>
                            <th>{{provincial}}省</th>
                            <th>意向</th>
                            <th>尽调</th>
                            <th>立项</th>
                            <th>签约</th>
                        </tr>
                        <tr v-for="(item, index) in tableData1" :key="index">
                            <td style="width:40%">{{item.city}}</td>
                            <td style="width:12%" :class="item.intention>0?'hasnum':''">{{item.intention}}</td>
                            <td style="width:12%" :class="item.tune>0?'hasnum':''">{{item.tune}}</td>
                            <td style="width:12%" :class="item.project>0?'hasnum':''">{{item.project}}</td>
                            <td style="width:12%" :class="item.sign>0?'hasnum':''">{{item.sign}}</td>
                        </tr>
                    </table>
                </div>
                <div class="chart-box">
                    <div class="chart-title">{{provincial}}省</div>
                    <new-chart :screenWidth='screenWidth' :screenHeight='screenHeight' :chartData='chartData1' :registerMapData='registerMapData' no='1' class='chart1'></new-chart>
                </div>
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
                <table>
                    <tr>
                        <th v-for="(item, index) in tableData2" :key="index">{{item.type}}</th>
                    </tr>
                    <tr v-for="(item, index) in tableData2[0].data" :key="index">
                        <td>{{tableData2[0].data[index]}}</td>
                        <td>{{tableData2[1].data[index]}}</td>
                        <td>{{tableData2[2].data[index]}}</td>
                        <td>{{tableData2[3].data[index]}}</td>
                    </tr>
                </table>
            </div>  
        </div>
    </div>
</template>
<script>
import NewChart from '../baseComponents/NewChart'
// import echarts from "echarts"
// import "../../node_modules/echarts/map/js/province/shandong"
// import "../../node_modules/echarts/map/js/china"
// import '../../node_modules/echarts/map/js/geo'
export default {
    data(){
        return{
            screenWidth:document.body.clientWidth,
            screenHeight:document.documentElement.clientHeight,
            provincial:'',
            loadMap:'',
            registerMapData:{},
            pieTips:["数量占比","规模占比"],
            lineTips:["拜访平台","有效拜访平台","意向平台","尽调平台","立项平台","签约平台"],
            active2:0,
            active3:0,
            active7:0,
            tableData1:[
                {
                    city:"合计",
                    intention:7,
                    tune:4,
                    project:4,
                    sign:4
                },
                {
                    city:"青岛市",
                    intention:4,
                    tune:0,
                    project:2,
                    sign:0
                },
                {
                    city:"淄博市",
                    intention:0,
                    tune:2,
                    project:0,
                    sign:2
                },
                {
                    city:"枣庄市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:0
                },
                {
                    city:"东营市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:0
                },
                {
                    city:"烟台市",
                    intention:2,
                    tune:0,
                    project:0,
                    sign:0
                },
                {
                    city:"潍坊市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:0
                },
                {
                    city:"济宁市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:0
                },
                {
                    city:"泰安市",
                    intention:0,
                    tune:0,
                    project:1,
                    sign:1
                },
                {
                    city:"威海市",
                    intention:0,
                    tune:0,
                    project:1,
                    sign:0
                },
                {
                    city:"日照市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:0
                },
                {
                    city:"滨州市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:0
                },
                {
                    city:"德州市",
                    intention:0,
                    tune:1,
                    project:0,
                    sign:0
                },
                {
                    city:"聊城市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:0
                },
                {
                    city:"临沂市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:1
                },
                {
                    city:"莱芜市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:0
                },
                {
                    city:"济南市",
                    intention:0,
                    tune:0,
                    project:0,
                    sign:0
                }
            ],
            tableData2:[
                {
                    type:"待尽调平台",
                    data:["泰安钰达物流有限"," 泰安豪其物流运输","临沂沂蒙山水电器","淄博京创物流有限","淄博汇通物流有限","山东征途物流有限"]
                },
                {
                    type:"待立项平台",
                    data:["泰安钰达物流有限"," 泰安豪其物流运输","临沂沂蒙山水电器","淄博京创物流有限","淄博汇通物流有限","山东征途物流有限"]
                },
                {
                    type:"待签约平台",
                    data:["泰安钰达物流有限"," 泰安豪其物流运输","临沂沂蒙山水电器","淄博京创物流有限","淄博汇通物流有限","山东征途物流有限"]
                },
                {
                    type:"签约平台",
                    data:["泰安钰达物流有限"," 泰安豪其物流运输","临沂沂蒙山水电器","淄博京创物流有限","淄博汇通物流有限","山东征途物流有限"]
                }
            ],
            chartData1:{
                legend: {//图例组件
                    orient: 'vertical',
                    align: 'left', 
                    right:"2%",
                    bottom:"2%",
                    data: ['已覆盖城市'],
                    textStyle: {
                        color: '#00c0ff'
                    },
                    // borderColor:"#091335",
                    // borderWidth:1,
                    // padding: [15,15,15,15],
                    // backgroundColor:"rgba(30,57,133,0.5)"
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
                    left:"10%",
                    top:"5%",
                    right:"10%",
                    bottom:"5%"
                },
                series:[
                    {
                        name:"已覆盖城市",
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
                            },
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
        },
        loadProvincialMap(procincial){
            // 获取省级地图自定义配置
            this.$http.get('../../static/map/province/'+procincial+'.json').then((res)=>{
                var d = [];
                // console.log(res.body)
                this.registerMapData = res.body;
            })
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
        };
        this.provincial = this.$route.query.provincial;
        this.loadMap = this.$route.query.loadMap;
        this.chartData1.geo.map = this.$route.query.provincial;
        this.loadProvincialMap(this.$route.query.loadMap);
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
                padding: 1%;
                >.table1{
                    width: 20%;
                    font-size:12px;
                    background: rgba(39,60,119,0.4);
                    text-align:center;
                    padding: 0% 0.5%;
                    border:1px solid #2d437e;
                    box-sizing: border-box;
                    >table{
                        color:#00c0ff;
                        border-collapse: collapse; 
                        >tr{
                            border-bottom: 1px dotted #061e55;
                            background-color: rgba(35, 70, 170, 0.8);
                            height: 16px;
                            >th{
                                color:#feffff;
                                font-size: 13px;
                                font-weight: normal;
                            }
                            >.hasnum{
                                color:#e9b500;
                            }
                        }
                        >tr:nth-child(1){
                            border-bottom: none;
                            background-color: transparent;
                        }
                        >tr:nth-child(4n+3){
                            background-color: rgba(22, 49, 122, 0.8);
                        }
                    }
                }
                >.chart-box{
                    width: 80%;
                    height: 100%;
                    >.chart-title{
                        width: 30%;
                        font-size: 16px;
                        font-weight: bold;
                        color: #fff;
                        border:1px solid #578ff7;
                        margin:auto;
                        text-align:center;
                        padding: 1px;
                    }
                    >.chart1{
                        width: 100%;
                        height: 95%;
                    }
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
                            cursor: pointer;
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
                                box-shadow: 1px 1px 8px #3183ff;
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
                    border:2px solid #1e3f85;
                    box-shadow: 0px 0px 5px #1e3f85;
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
                padding: 0.2%;
                >table{
                    width: 100%;
                    font-size:12px;
                    color:#00c0ff;
                    border-collapse: collapse; 
                    text-align: center;
                    >tr{
                        border-bottom: 1px dotted #061e55;
                        height: 25px;
                        >th{
                            color:#feffff;
                            font-size: 13px;
                            font-weight: normal;
                        }
                        >td{
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            width: 25%;
                            
                        }
                    }
                    >tr:nth-child(odd){
                        background-color: rgba(35, 70, 170, 0.8);
                    }
                    >tr:nth-child(even){
                        background-color: rgba(22, 49, 122, 0.8);
                    }
                    >tr:nth-child(1){
                        background-color: transparent;
                    }
                    
                }
            }
        }
    }
    
</style>



