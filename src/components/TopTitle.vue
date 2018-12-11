<template>
    <div class="title-box">
        <div>
            <img src="../../static/images/title.png" alt=""> 
            <div class="time">{{date|doDate}}</div>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            date:new Date(),
        }
    },
    filters:{
        doDate(value){
            let arr = ["周日","周一","周二","周三","周四","周五","周六"];
            // console.log(value.getFullYear(),value.getMonth() + 1,value.getDate(),value.getDay())
            return `${value.getFullYear()}年${value.getMonth() + 1}月${value.getDate()}日 ${arr[value.getDay()]}`
        }
    }
}
</script>

<style lang="less" scoped>
    .title-box{
        >div{
            width: 100%;
            // margin:auto;
            position: relative;
            > img{
                width: 100%;
            } 
            >.time{
            position: absolute;
            bottom:10%;
            right:15%;
            font-size: 14px;
            color: #c9deff;
        }
        }
            
        
    }
</style>
