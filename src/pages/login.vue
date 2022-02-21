<template>
  <div class="container">
    <div class="message-container">login</div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      wHeight: "",
      wWidth: "",
    };
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.container {
  height: 1000px;
  display: flex;
  justify-content: center; /*弹性盒子里边横轴对齐方式*/
  align-items: center;
  .message-container {
    font-size: $fontG;
    color: $Wcolor;
    background-color: $Bcolor;
    width: 200px;
    height: 200px;
  }
}
</style>
