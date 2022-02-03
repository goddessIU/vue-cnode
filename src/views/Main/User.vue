<template>
  <el-row>
    <el-row class="main">
      <div class="head">
        <router-link to="/home">主页</router-link>
      </div>
      <div class="content">
        <div>
          <img :src="author.avatar_url" alt="" />
          {{ author.loginname }}
        </div>
        <div>{{ author.score }}积分</div>
        <div>
          注册时间：{{
            $moment(author.create_at.slice(0, 10), "YYYY-MM-DD")
              .locale("zh-cn")
              .fromNow()
          }}
        </div>
      </div>
    </el-row>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserMain",
  computed: {
    ...mapState({
      author: (state) => state.author.author || {},
    }),
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        await this.$store.dispatch("GetAuthor", this.$route.params.id);
      } catch (err) {
        Promise.reject(new Error("err"));
      }
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #fff;
  margin-top: 50px;
  .head {
    background-color: #f6f6f6;
    padding: 20px;
  }
  .content {
    padding: 20px;
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>