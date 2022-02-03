<template>
  <el-row class="all">
    <el-row class="gray">作者</el-row>
    <el-row class="white">
      <router-link :to="`/user/${author.loginname}`">
        <img :src="author.avatar_url" alt="" class="img" />
        {{ author.loginname }}
      </router-link>
      <p>积分： {{ author.score }}</p>
    </el-row>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AuthorIntroduction",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      author: (state) => state.author.author || {},
    }),
  },
  mounted() {
  },
  methods: {
  },
};
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