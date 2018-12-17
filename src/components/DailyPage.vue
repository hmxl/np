<template>
    <!-- 日报看板 -->
    <div class="container">
        <div class="box">
            <!-- 进度名称及公司个数 -->
            <div class="progress-rate">
                <div v-for="(item, index) in progress" :key="index">
                    <p class="progress-title">{{item}}</p>
                    <p class="progress-num">{{progressNum[index]}}</p>
                </div>
            </div>
            <!-- 图表区域 -->
            <div class="region-box">
                <div class="region" v-for="(item, index) in region" :key="index">
                    <div class="region-name">
                        {{item}}
                    </div>
                    <new-chart :chartData='chartData[index]' :no="index" :screenWidth="screenWidth"  :screenHeight='screenHeight' class="region-chart"></new-chart>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import NewChart from '../baseComponents/NewChart'
export default {
    data(){
        return{
            screenWidth:document.body.clientWidth,
            screenHeight:document.documentElement.clientHeight,
            progress:["平台名称","尽调发起","尽调","立项","合同签订","预算","资质","人员","系统配置","正式上线"],
            progressNum:[32,20,13,12,8,5,4,3,2,1],
            region:["山东分部","安徽分部"],
            chartData:[
                {
                    textStyle:{
                        color:"#0f99eb",
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        // formatter: '{b} <br /> {a0}: {c0}<br />{a1}: {c1} <br /> {a2}: {c2}' + "%"
                        formatter:function(params, ticket, callback){
                            // console.log(params)
                            let schedule1 = params[1].data==4?"完成":params[1].data+"/4";
                            let schedule2 = params[3].data==4?"完成":params[3].data+"/4";
                            let schedule3 = params[5].data==4?"完成":params[5].data+"/4";
                            let schedule4 = params[7].data==4?"完成":params[7].data+"/4";
                            let schedule5 = params[9].data==4?"完成":params[9].data+"/4";
                            let schedule6 = params[11].data==4?"完成":params[11].data+"/4";
                            let schedule7 = params[13].data==4?"完成":params[13].data+"/4";
                            let schedule8 = params[15].data==4?"完成":params[15].data+"/4";
                            let schedule9 = params[17].data==2?"完成":params[17].data+"/4";
                            return params[0].name + "<br/>" + "尽调发起: " + schedule1 + " 尽调: " + schedule2 + " 立项: " + schedule3 
                                    + " 合同签订: " + schedule4 +"<br/>" + " 预算: " + schedule5 + " 资质: " + schedule6 + " 人员: " + schedule7 
                                    + " 系统配置: " + schedule8 + " 正式上线: " + schedule9;
                        }
                    },
                    grid: {
                        left: '12%',
                        right: '0.5%',
                        top:"5%",
                        bottom: '5%',
                    },
                    xAxis:  {
                        show:false,
                        max:34,
                    },
                    yAxis: {
                        type: 'category',
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        },
                        data: ["泰安钰达物流有限责任公司","临沂市沂蒙山水电器有限公司","淄博京创电器销售有限公司","淄博汇通国际物流有限公司",
                                "青岛速迈物流有限公司","威海宏辉物流有限公司","泰安市豪其物流有限公司","威海宏辉物流有限公司",
                                "泰安市豪其物流有限公司","威海宏辉物流有限公司","泰安市豪其物流有限公司","威海宏辉物流有限公司",
                                "泰安市豪其物流有限公司","泰安钰达物流有限责任公司","临沂市沂蒙山水电器有限公司","淄博京创电器销售有限公司",
                                "青岛速迈物流有限公司","威海宏辉物流有限公司","泰安市豪其物流有限公司","威海宏辉物流有限公司"],
                        inverse:true,//反向坐标轴
                        axisLabel:{
                            interval: 0,//标签设置为全部显示
                            formatter:function(value){
                                var result = "";//拼接加\n返回的类目项
                                var maxLength = 12;//每项显示文字个数
                                var valLength = value.length;//X轴类目项的文字个数
                                var rowNumber = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                                if (rowNumber > 1)//如果文字大于3,
                                {
                                    for (var i = 0; i < rowNumber ; i++) {
                                        var temp = "";//每次截取的字符串
                                        var start = i * maxLength;//开始截取的位置
                                        var end = start + maxLength;//结束截取的位置
                                        temp = value.substring(start, end) + "\n";
                                        result += temp; //拼接生成最终的字符串
                                    }
                                    return result ;
                                }
                                else {
                                    return value;
                                }
                            },
                            align:"right"
                        }
                    },
                    series: [
                        {
                            type: "bar",
                            barWidth:10,
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '尽调发起',
                            type: 'bar',
                            barWidth:10,//宽度
                            stack: '进度',//相同值堆叠
                            itemStyle:{
                                color:"#0097ff",
                            },
                            data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],//每个进度4个步骤
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '尽调',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [4, 4, 4, 4, 3, 4, 0, 4, 4, 4,
                                    4, 0, 4, 4, 4, 0, 0, 0, 4, 4]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '立项',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [4, 3, 4, 4, 0, 4, 0, 4, 3, 2,
                                    4, 4, 4, 0, 3, 4, 4, 0, 0, 4]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '合同签订',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [3, 0, 4, 4, 0, 4, 0, 4, 0, 0,
                                    3, 4, 4, 0, 0, 3, 4, 0, 0, 4]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '预算',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [0, 0, 4, 3, 0, 4, 0, 4, 0, 0,
                                    0, 4, 4, 0, 0, 0, 4, 0, 0, 3]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '资质',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [0, 0, 4, 0, 0, 4, 0, 3, 0, 0,
                                    0, 2, 4, 0, 0, 0, 4, 0, 0, 0]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '人员',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [0, 0, 3, 0, 0, 4, 0, 0, 0, 0,
                                    0, 0, 4, 0, 0, 0, 2, 0, 0, 0]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '系统配置',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [0, 0, 0, 0, 0, 4, 0, 0, 0, 0,
                                    0, 0, 4, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '正式上线',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            barCategoryGap: "80%",
                            data: [0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
                                    0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
                        },
                    ]
                },
                {
                    textStyle:{
                        color:"#0f99eb",
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter:function(params, ticket, callback){
                            // console.log(params)
                            let schedule1 = params[1].data==4?"完成":params[1].data+"/4";
                            let schedule2 = params[3].data==4?"完成":params[3].data+"/4";
                            let schedule3 = params[5].data==4?"完成":params[5].data+"/4";
                            let schedule4 = params[7].data==4?"完成":params[7].data+"/4";
                            let schedule5 = params[9].data==4?"完成":params[9].data+"/4";
                            let schedule6 = params[11].data==4?"完成":params[11].data+"/4";
                            let schedule7 = params[13].data==4?"完成":params[13].data+"/4";
                            let schedule8 = params[15].data==4?"完成":params[15].data+"/4";
                            let schedule9 = params[17].data==2?"完成":params[17].data+"/4";
                            return params[0].name + "<br/>" + "尽调发起: " + schedule1 + " 尽调: " + schedule2 + " 立项: " + schedule3 
                                    + " 合同签订: " + schedule4 +"<br/>" + " 预算: " + schedule5 + " 资质: " + schedule6 + " 人员: " + schedule7 
                                    + " 系统配置: " + schedule8 + " 正式上线: " + schedule9;
                        }
                    },
                    grid: {
                        left: '12%',
                        right: '0.5%',
                        top:"5%",
                        bottom: '5%',
                    },
                    xAxis:  {
                        show:false,
                        max:34,
                    },
                    yAxis: {
                        type: 'category',
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        },
                        data: ["滁州市众泰运输有限公司", "安徽际通物流有限公司", "安徽众商共享供应链管理有限公司", "宿州一日达物流有限公司",
                                "宣城易达货运代理有限公司", "合肥远行物流有限公司", "阜阳多邦供应链管理有限公司", "安徽众商共享供应链管理有限公司",
                                "宣城易达货运代理有限公司", "合肥远行物流有限公司", "阜阳多邦供应链管理有限公司", "安徽众商共享供应链管理有限公司",
                                "滁州市众泰运输有限公司", "安徽际通物流有限公司", "安徽众商共享供应链管理有限公司", "宿州一日达物流有限公司",
                                "安徽际通物流有限公司", "安徽众商共享供应链管理有限公司", "合肥远行物流有限公司", "宣城易达货运代理有限公司"],
                        inverse:true,//反向坐标轴
                        axisLabel:{
                            interval: 0,//标签设置为全部显示
                            formatter:function(value){
                                var result = "";//拼接加\n返回的类目项
                                var maxLength = 12;//每项显示文字个数
                                var valLength = value.length;//X轴类目项的文字个数
                                var rowNumber = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                                if (rowNumber > 1)//如果文字大于3,
                                {
                                    for (var i = 0; i < rowNumber ; i++) {
                                        var temp = "";//每次截取的字符串
                                        var start = i * maxLength;//开始截取的位置
                                        var end = start + maxLength;//结束截取的位置
                                        temp = value.substring(start, end) + "\n";
                                        result += temp; //拼接生成最终的字符串
                                    }
                                    return result ;
                                }
                                else {
                                    return value;
                                }
                            },
                        }
                    },
                    series: [
                        {
                            type: "bar",
                            barWidth:10,
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '尽调发起',
                            type: 'bar',
                            barWidth:10,//宽度
                            stack: '进度',//相同值堆叠
                            itemStyle:{
                                color:"#0097ff",
                            },
                            data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],//每个进度4个步骤
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '尽调',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [4, 4, 4, 4, 3, 4, 0, 4, 4, 4,
                                    4, 0, 4, 4, 4, 0, 0, 0, 4, 4]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '立项',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [4, 3, 4, 4, 0, 4, 0, 4, 3, 2,
                                    4, 4, 4, 0, 3, 4, 4, 0, 0, 4]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '合同签订',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [3, 0, 4, 4, 0, 4, 0, 4, 0, 0,
                                    3, 4, 4, 0, 0, 3, 4, 0, 0, 4]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '预算',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [0, 0, 4, 3, 0, 4, 0, 4, 0, 0,
                                    0, 4, 4, 0, 0, 0, 4, 0, 0, 3]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '资质',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [0, 0, 4, 0, 0, 4, 0, 3, 0, 0,
                                    0, 2, 4, 0, 0, 0, 4, 0, 0, 0]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '人员',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [0, 0, 3, 0, 0, 4, 0, 0, 0, 0,
                                    0, 0, 4, 0, 0, 0, 2, 0, 0, 0]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '系统配置',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            data: [0, 0, 0, 0, 0, 4, 0, 0, 0, 0,
                                    0, 0, 4, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            type: "bar",
                            stack: '底色',
                            data:[2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            itemStyle: {
                                normal: {
                                    color: '#001c67',
                                }
                            },
                            barGap: '-100%',//偏移与另一柱状图重叠
                            silent: true,
                        },
                        {
                            name: '正式上线',
                            type: 'bar',
                            stack: '进度',
                            itemStyle:{
                                color:"#0097ff"
                            },
                            barCategoryGap: "80%",
                            data: [0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
                                    0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
                        },
                    ]
                }
            ]
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
        >.box{
            width: 98%;
            height: 100%;
            margin:auto;
            padding: 10px;
            box-sizing: border-box;
            background-color:rgba(56, 105, 209, 0.3);
            >.progress-rate{
                width: 100%;
                display:flex;
                // position: fixed;
                >div{
                    width: 10%;
                    padding: 8px;
                    text-align: center;
                    background: #244ec5;
                    >.progress-title{
                        font-size: 15px;
                        color: white;
                    }
                    >.progress-num{
                        font-size: 14px;
                        color: #0f99eb;
                    }
                }
                >div:nth-child(1){
                    width: 15%;
                }
                >div:last-child{
                    width: 5%;
                }
            }
            >.region-box{
                width: 100%;
                height: 90%;
                overflow-y: scroll;
                overflow-x: hidden;
                .region{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    padding:2px 0px;
                    height:120%;
                    >.region-name{
                        height: 100%;
                        background: #214ac1;
                        font-size: 15px;
                        text-align: center;
                        writing-mode: tb-rl;
                        padding:0 1%; 
                        color: #0f99eb;
                        font-weight: 700;
                    }
                    >.region-chart{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            
        }
    }
</style>



