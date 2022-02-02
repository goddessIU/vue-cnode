<template>
  <el-row class="head">
    <el-col :span="24">
      <el-row>
        <el-col :span="8" :offset="3" >
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12" :push="1">
            <el-col :span="2">
                <router-link to="/home">主页</router-link>
            </el-col>
            <el-col :span="2">
                <router-link to="/home">api</router-link>
            </el-col>
            <el-col :span="2">
                <router-link to="/home">注册</router-link>
            </el-col>
            <el-col :span="2">
                <router-link to="/home">登录</router-link>
            </el-col>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="less" scoped>
.head {
  height: 50px;
  background-color: rgb(68, 68, 68);
  line-height: 50px;
  a {
    color: #fff;
  }
}
</style>