<template>
  <el-row class="outer">
    <el-row class="title">
      <a :class="{ bgc: isChoose === 0 }" @click="changeChoose('all')">全部</a>
      <a :class="{ bgc: isChoose === 1 }" @click="changeChoose('good')">精华</a>
      <a :class="{ bgc: isChoose === 2 }" @click="changeChoose('share')">分享</a>
      <a :class="{ bgc: isChoose === 3 }" @click="changeChoose('ask')">问答</a>
      <a :class="{ bgc: isChoose === 4 }" @click="changeChoose('job')">招聘</a>
    </el-row>
    <el-row
      class="content"
      v-for="topicContent in topicContents"
      :key="topicContent.id"
    >
      <el-col :span="2" class="contentBox">
        <div class="imgBox">
          <img :src="topicContent.author.avatar_url" alt="" />
        </div>
      </el-col>
      <el-col :span="3" class="font14px"
        >{{ topicContent.reply_count }}/{{ topicContent.visit_count }}</el-col
      >
      <el-col :span="2" class="font14px attr">
        <span>制定</span>
      </el-col>
      <el-col :span="13">
        <a class="titleContent" @click="toTopic(topicContent.id)">{{
          topicContent.title
        }}</a>
      </el-col>
      <el-col :span="2" class="contentBox">
        <div class="imgBox2">
          <img :src="topicContent.author.avatar_url" alt="" />
        </div>
      </el-col>
      <el-col :span="2" class="font8px heightSize">{{$moment(topicContent.last_reply_at.slice(0, 10), 'YYYY-MM-DD').locale('zh-cn').fromNow()}}</el-col>
    </el-row>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="topicsLength"
      :page-size="20"
      @current-change="changePage"
      :current-page="page"
    >
    </el-pagination>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainHome",
  data() {
    return {
      page: this.$route.query.page || 1,
      tabTypes: ["all", "good", "share", "ask", "job", ],
      tab: this.$route.query.tab || "all",
      limit: 20,
    };
  },
  computed: {
    ...mapState({
      topicContents: (state) => state.home.topicContents || [],
      topicsLength: (state) => state.home.topicsLength || 0,
      isChoose() {
        return this.tabTypes.indexOf(this.tab);
      },
    }),
  },
  mounted() {
    console.log(this.$moment('2021-11-02', 'YYYY-MM-DD').fromNow(true))
    this.$store.dispatch("GetTopics", {
      page: this.page,
      tab: this.tab,
      limit: this.limit,
      mdrender: "false",
    });
  },
  methods: {
    changePage(val) {
      this.page = val;
      let query = { ...this.$route.query };
      query.page = this.page;
      this.$router.push({
        name: "home",
        params: this.$route.params,
        query: query,
      });
      this.$store.dispatch("GetTopics", {
        page: this.$route.query.page || 1,
        tab: this.$route.query.tab || 'all',
        limit: this.limit,
        mdrender: "false",
      });
    },
    changeChoose(val) {
      this.tab = val;
      let query = { ...this.$route.query };
      query.tab = this.tab;
      delete query.page;
      this.$router.push({
        name: "home",
        params: this.$route.params,
        query: query,
      });
      this.$store.dispatch("GetTopics", {
        page: 1,
        tab: this.$route.query.tab || 'all',
        limit: this.limit,
        mdrender: "false",
      });
      this.page = 1;
    },
    toTopic(id) {
      this.$router.push({
        name: 'topic',
        params: { id }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.font14px {
  font-size: 14px;
}
.font8px {
  font-size: 3px;
}
.heightSize {
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.bgc {
  background-color: rgb(134, 189, 0);
  color: #fff !important;
}
.outer {
  border-radius: 10px;
  margin: 20px 0;
  overflow: hidden;
  .title {
    background-color: rgb(246, 246, 246);
    display: flex;
    justify-content: start;
    a {
      color: rgb(134, 189, 0);
      margin-left: 20px;
      font-size: 18px;
    }
  }
  .content {
    background-color: rgb(255, 255, 255);
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    .contentBox {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .imgBox {
        overflow: hidden;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        img {
          width: 30px;
          height: 30px;
          vertical-align: top;
        }
      }
      .imgBox2 {
        overflow: hidden;
        width: 15px;
        height: 15px;
        img {
          width: 15px;
          height: 15px;
          vertical-align: top;
        }
      }
    }
    .attr {
      span {
        background-color: rgb(134, 189, 0);
        color: #fff;
        padding: 0 5px;
        border-radius: 3px;
      }
    }
    .titleContent {
      // height: 100%;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      min-width: 350px;
    }
  }
}
</style>