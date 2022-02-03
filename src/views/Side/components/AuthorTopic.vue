<template>
  <el-row class="all">
    <el-row class="gray">作者的其他话题</el-row>
    <el-row class="white">
      <p v-if="otherTopics !== []">
        <a
          v-for="topic in otherTopics"
          :key="topic.id"
          @click="toTopid(topic.id)"
          >{{ topic.title }}</a
        >
      </p>
      <p v-else>无</p>
    </el-row>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AuthorTopic",
  computed: {
    ...mapState({
      author: (state) => state.author.author || {},
    }),
    topics() {
      if (this.author && this.author.recent_topics)
        return this.author.recent_topics;
      return undefined;
    },
    otherTopics() {
      let nowTopic = this.$route.params.id;
      if (!this.topics || !this.topics.length) return "无";
      if (this.topics.length === 0 || this.topics.length === 1) {
        return "无";
      }
      let res = [];
      for (const topic of this.topics) {
        if (topic.id !== nowTopic) res.push(topic);
        if (res.length && res.length === 5) break;
      }
      return res;
    },
  },
  methods: {
    toTopid(id) {
      let params = this.$route.params;
      params.id = id;
      this.$router.push({
        name: 'topic',
        params
      })
    }
  }
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
    p {
      a {
        overflow: hidden;
        white-space: nowrap;
        display: block;
        height: 30px;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>