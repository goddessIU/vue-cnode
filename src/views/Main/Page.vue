<template>
  <el-row class="all">
      <el-row class="passage">
          <p>孙凌云、玉伯、常鑫、云谦将在 SEE Conf 2022 支付宝体验科技大会发表主题演讲</p>
          <p> 发布于 2 个月前  作者 
            <router-link to="/home">大帅币</router-link>
                17556 次浏览  来自 分享
          </p>
      </el-row>
      <el-row class="discussion">
          <el-row class="head">6回复</el-row>
          <el-row class="title">
              <img src="" alt="">
              <router-link to="/home">大帅币</router-link>
              <a href="">1楼·2个月前</a>
              <span class="like">赞2</span>
          </el-row>
          <el-row class="content">期待！</el-row>
      </el-row>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.all {
    margin-top: 20px;
    .passage {
        background-color: #fff;
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
        .title {
            font-size: 15px;
            img {
                width: 25px;
                height: 25px;
                padding-left: 10px;
                padding-top: 10px;
            }
            .like {
                float: right;
                margin-right: 10px;
            }
        }
        .content {
            padding-left: 50px;
            font-size: 18px;
        }
    }
}
</style>