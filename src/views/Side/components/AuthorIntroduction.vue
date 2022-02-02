<template>
  <el-row class="all">
    <el-row class="gray">作者</el-row>
    <el-row class="white">
      <router-link to="/home">
        <img src="../../../assets/images/1.jpg" alt="" class="img">
        大帅币
      </router-link>
      <p>积分： 125</p>
      <p>“ 这家伙很懒，什么个性签名都没有留下。 ”</p>
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
    .img {
        width: 30px;
        height: 30px;
    }
  }
}
</style>