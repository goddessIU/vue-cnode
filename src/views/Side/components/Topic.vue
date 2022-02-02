<template>
  <el-row class="all">
    <el-row class="gray">无人回复的话题</el-row>
    <el-row class="white">
      <router-link to="/home" v-for="topicContent in unPopularContents" :key="topicContent.id" class="content">{{topicContent.title}}</router-link>
    </el-row>
  </el-row>
</template>

<script>
// import { mapState } from 'vuex';
export default {
  name: 'Topic',
  computed: {
    // ...mapState({
    //   allTopics: (state) => state.home.allTopics || []
    // }),
    unPopularContents() {
      let contents = this.$store.state.home.allTopics;
      return contents.sort((a, b) => a.reply_count - b.reply_count ).slice(0, 6);
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
    .content {
      overflow: hidden;
      white-space: nowrap;
      display: block;
      height: 30px;
      text-overflow:ellipsis;
    }
  }
}
</style>