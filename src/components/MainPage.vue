<template>
  <el-row>
    <el-col :span="14" :offset="2"><router-view></router-view></el-col>
    <el-col :span="5" :push="1" class="side"
      ><router-view name="side"></router-view
    ></el-col>
  </el-row>
</template>

<script>
export default {
  name: "MainPage",
  components: {},
};
</script>

<style lang="less" scoped>
.side {
  margin: 20px 0;
}
</style>