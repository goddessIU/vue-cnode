<template>
  <el-row class="foot">
    <el-col :span="24" class="content">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究</el-col>
  </el-row>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.foot {
    height: 100px;
    background-color: #fff;
    margin-top: 20px;
    .content {
      padding: 20px 0 0 80px;
      font-size: 16px;
      color: rgb(94, 75, 75);
    }
}
</style>