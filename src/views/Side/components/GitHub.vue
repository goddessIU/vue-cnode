<template>
  <el-row class="all">
    <el-row class="head"> CNode：Node.js专业中文社区 </el-row>
    <el-row class="main">
      您可以 <router-link to="/home">登录</router-link> 或
        <router-link to="/home">注册</router-link> , 也可以
    </el-row>
    <el-row class="github">
      <el-button type="primary" disabled
        >通过github登录</el-button
      >
    </el-row>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.all {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  height: 150px;
  background-color: rgb(255, 255, 255);
  .head {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    
  }
  .main {
    height: 50px;
    background-color: rgb(255, 255, 255);
    line-height: 50px;
    a {
      font-size: 14px;
    }
  }
  .github {
      width: 100%;
      text-align: center;
  }
}
</style>