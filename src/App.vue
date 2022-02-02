<template>
  <div id="app">
    <Head/>
    <MainPage/>
    <Foot/>
  </div>
</template>

<script>
import Head from './components/Head.vue';
import Foot from './components/Foot.vue';
import MainPage from './components/MainPage.vue'
export default {
    name: 'App',
    components: {
        Head,
        Foot,
        MainPage
    },
    mounted() {
      this.$store.dispatch('GetAllTopics');
    }
}
</script>

<style>
#app {
  height: 100vh;
  min-width: 1000px;
}
</style>
