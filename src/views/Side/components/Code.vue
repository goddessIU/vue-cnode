<template>
  <el-row class="all">
    <el-row class="gray">二维码</el-row>
    <el-row class="white">
      <div ref="qrCodeUrl"></div>
    </el-row>
  </el-row>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  name: "Code",
  mounted() {
    this.makeQRCode();
  },
  methods: {
    makeQRCode() {
      this.$nextTick(function () {
        new QRCode(this.$refs.qrCodeUrl, {
          text: "https://cnodejs.org/",
          width: 200,
          height: 200,
        });
      });
    },
  },
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
    padding: 5px;
  }
}
</style>