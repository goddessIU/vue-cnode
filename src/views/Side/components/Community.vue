<template>
  <el-row class="all">
      <el-row class="gray">
        友情社区
      </el-row>
      <el-row class="white">
        <a href="https://ruby-china.org/" target="_blank">
          <img src="../../../assets/images/ruby-china.png" alt="">
        </a>
        <a href="https://golangtc.com/" target="_blank">
          <img src="../../../assets/images/golangtc-logo.png" alt="">
        </a>
        <a href="https://learnku.com/laravel" target="_blank">
          <img src="../../../assets/images/phphub-logo.png" alt="">
        </a>
      </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'Community'
}
</script>

<style lang="less" scoped>
.all {
  margin-top: 20px;
  font-size: 14px;
  .gray {
    background-color: rgb(246, 246, 246);
    padding: 5px 0px 5px 5px;
  }
  .white {
    background-color: #fff;
    padding: 3px 0 0 5px;
    a {
      display: block;
      img {
        width: 150px;
        height: 50px;
      }
    }
  }
}
</style>