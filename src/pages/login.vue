<template>
  <div class="login_container fillcontain">
    <section class="sec">
      <button @click="login">click me to login</button>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {
    ...mapActions(["getUserName"]),
    login() {
      this.axios.get("/login").then((res) => {
        const username = res.data.username;
        this.getUserName(username);
        this.$router.push("/manage");
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.login_container {
  background-color: $colorD;
  .sec {
    text-align: center;
    height: 200px;
    button {
      height: 100px;
    }
  }
}
</style>
