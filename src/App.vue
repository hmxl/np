<template>
    <div id="app">
        <!-- 头部标题 -->
        <top-title class="title"></top-title>
        <!-- 导航菜单 -->
        <el-dropdown class="router-nav" @command="handleCommand">
            <span class="el-dropdown-link">
                {{currentNav}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item, index) in nav" :key="index" :command="index">{{item}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <!-- 看板页面 -->
        <router-view class="page"></router-view>
    </div>
</template>


<script>
    import TopTitle from './components/TopTitle'
    export default {
        name: 'App',
        components: {
            TopTitle
        },
        data(){
            return{
                nav:["日报看板","财务看板","运营看板","发展看板"],
                currentNav:"日报看板",
            }
        },
        methods:{
            handleCommand(command) {
                if(command == "0"){
                    this.$router.push({path: "/daily"});
                }else if(command == "1"){
                    this.$router.push({path: "/finance"});
                }else if(command == "2"){
                    this.$router.push({path: "/operation-national"});
                }else if(command == "3"){
                    this.$router.push({path: "/development-national"});
                }
                this.currentNav = this.nav[command];
            }
        }
    }

</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }

</style>

<style lang="less" scoped>
  #app {
    overflow: auto;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background: url("../static/images/bg.jpg") no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    >.title {
        width: 100%;
        height: 10%;
    }
    >.router-nav{
        position:absolute;
        top:0px;
        left:0px
    }
  }

</style>
<style lang="less" scoped>
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>


