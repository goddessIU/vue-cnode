<template>
  <el-row>
      <AuthorIntroduction/>
      <AuthorTopic/>
      <Topic/>
  </el-row>
</template>

<script>
import AuthorIntroduction from './components/AuthorIntroduction.vue';
import AuthorTopic from './components/AuthorTopic.vue';
import Topic from './components/Topic.vue';
export default {
    name: 'PageSide',
    components: {
        AuthorIntroduction,
        AuthorTopic,
        Topic
    }
}
</script>

<style>

</style>