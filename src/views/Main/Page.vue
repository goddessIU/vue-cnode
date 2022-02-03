<template>
  <el-row class="all">
    <el-row class="passage">
      <h2>{{ topic.title }}</h2>
      <p>
        发布于
        {{
          $moment(topic.create_at.slice(0, 10), "YYYY-MM-DD")
            .locale("zh-cn")
            .fromNow()
        }}
        作者
        <router-link :to="`/user/${topic.author_id}`">{{
          topic.author.loginname
        }}</router-link>
        {{ topic.visit_count }}次浏览 来自 {{ tab }}
      </p>
    </el-row>
    <el-row v-html="topic.content" class="content">
    </el-row>
    <el-row class="discussion">
      <el-row class="head">{{ replies.length }}回复</el-row>
      <el-row class="reply" v-for="(reply, index) in replies" :key="reply.id">
        <el-row class="title">
          <img :src="reply.author.avatar_url" alt="" />
          <router-link :to="`/user/${reply.id}`">{{ reply.author.loginname }}</router-link>
          <a href=""
            >{{ index + 1 }}楼·{{
              $moment(reply.create_at.slice(0, 10), "YYYY-MM-DD")
                .locale("zh-cn")
                .fromNow()
            }}</a
          >
          <span class="like">
            <img src="../../assets/images/dianzan.png" alt="" />
            {{  reply.ups.length || 0 }}</span
          >
        </el-row>
        <el-row class="content" v-html="reply.content"></el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      id: this.$route.params.id || "",
      topic: {},
      tabTypes: ["share"],
      tabTypesCN: ["分享"],
    };
  },
  computed: {
    tab() {
      let index = this.tabTypes.indexOf(this.topic.tab);
      return this.tabTypesCN[index];
    },
    replies() {
      return this.topic.replies || [];
    }
  },
  mounted() {
    this.getTopic();
  },
  methods: {
    async getTopic() {
      try {
        await this.$store.dispatch("getTopic", this.$route.params.id, {
          mdrender: "true",
        });
        this.topic = this.$store.state.topic.topic;
      } catch (err) {
        Promise.reject(new Error("err"));
      }
    },
  },
};
</script>

<style lang="less" scoped>
.all {
  margin-top: 20px;
  .passage {
    background-color: #fff;
    padding: 20px 0 10px 10px;
    border-bottom: 1px solid #838383;
    h2 {
      font-weight: 500;
    }
    p {
      font-size: 12px;
      padding-left: 30px;
      color: #838383;
      a {
        color: #838383;
      }
    }
  }
  .content {
    background-color: #fff;
    padding: 30px 10px 30px 10px;
    line-height: 30px;
    /deep/ blockquote {
      background-color: rgb(231, 221, 193);
      margin: 10px;
      border-left: 5px solid black;
      padding-left: 10px;
    }
    /deep/ img {
      width: 90%;
      padding: 0 5%;
    }
    /deep/ a {
      color: rgb(142, 184, 28);
    }
  }
  .discussion {
    margin-top: 15px;
    background-color: #fff;
    .head {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      background-color: rgb(246, 246, 246);
      padding-left: 10px;
    }
    .reply {
      .title {
        font-size: 15px;
        img {
          width: 25px;
          height: 25px;
          padding-left: 10px;
          padding-top: 10px;
          margin-right: 5px;
        }
        .like {
          float: right;
          margin-right: 10px;
          img {
              vertical-align: bottom;
          }
        }
      }
    }

    .content {
      padding-left: 50px;
      font-size: 16px;
      /deep/ li {
          font-size: 12px;
          list-style: inside;
      }
    }
  }
}
</style>