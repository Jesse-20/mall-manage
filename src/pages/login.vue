<template>
  <div class="login-full-container">
    <div class="messge-input"></div>
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
  mounted() {
    this.getWindowSize();
  },
  methods: {
    getWindowSize() {
      const height =
        window.innerHeight ||
        document.body.clientHeight ||
        document.documentElement.innerHeight;
      const width =
        window.innerWidth ||
        document.body.clientWidth ||
        document.documentElement.innerWidth;
      console.log("Height" + height + "Width" + width);
    },
  },
};
</script>
<style>
.login-full-container {
  text-align: center;
  background: url("/images/login.png") no-repeat;
  height: 200px;
}
</style>
