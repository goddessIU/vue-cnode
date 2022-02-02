<template>
    <el-row>
        <GitHub/>
        <Topic/>
        <Community/>
        <Code/>
    </el-row>
</template>

<script>
import Code from './components/Code.vue';
import GitHub from './components/GitHub.vue';
import Topic from './components/Topic.vue';
import Community from './components/Community.vue';
export default {
    name: 'HomeSide',
    components: {
        Code,
        GitHub,
        Topic,
        Community
    }
}
</script>

<style>

</style>