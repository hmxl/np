<template>
  <div id="app">
    <top-title class="title"></top-title>
    <router-view class="page"></router-view>
  </div>
</template>

<script>
  import TopTitle from './components/TopTitle'
  export default {
    name: 'App',
    components: {
      TopTitle
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
    position:fixed;
    top:0;
    bottom: 0;
    background: url("./images/bg.jpg") no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    > .title {
      width: 40%;
      height: 80px;
      margin: auto;
    }
  }
</style>


