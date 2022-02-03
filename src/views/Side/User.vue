<template>
  <el-row>
      <AuthorIntroduction/>
      <Community/>
      <Code/>
  </el-row>
</template>

<script>
import AuthorIntroduction from './components/AuthorIntroduction.vue';
import Community from './components/Community.vue';
import Code from './components/Code.vue';
export default {
    name: 'UserSide',
    components: {
        AuthorIntroduction,
        Community,
        Code
    }
}
</script>

<style>

</style>