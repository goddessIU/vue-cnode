<template>
  <el-row class="all">
    <el-row class="gray">作者的其他话题</el-row>
    <el-row class="white">
      <router-link to="/home">中国 npm 镜像源升级公告</router-link>
    </el-row>
  </el-row>
</template>

<script>
export default {};
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
  }
}
</style>