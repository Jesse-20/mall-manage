<template>
  <div class="nav-header-container">
    <div class="info">{{ currentRoute }}</div>
    <div class="user_img">
      <template>
        <div class="demo-tyoe">
          <el-dropdown>
            <el-avatar :size="50" src="/images/login.png" @error="errorHandler">
            </el-avatar>
            <el-dropdown-menu slot="dropdown">
              <a @click="goToSet"><el-dropdown-item>查看</el-dropdown-item></a>
              <a @click="logOut"><el-dropdown-item>退出</el-dropdown-item></a>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "nav-header",
  data() {
    return {
      currentRoute: "",
    };
  },
  computed: {
    ...mapState(["routepath"]),
  },
  watch: {
    $route: {
      handler: function (route) {
        var sw = route.meta;
        this.currentRoute = "";
        for (var i = 0; i < sw.length; i++) {
          this.currentRoute += sw[i];
          this.currentRoute += "/";
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["addRoutePath"]),
    errorHandler() {
      return true;
    },
    goToSet() {
      //to-do查看登录状态跳转到settting界面
      this.$router.push("adminSet");
    },
    logOut() {
      //清除查看登录状态跳转到login界面
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scopd>
@import "./../assets/scss/config.scss";
.nav-header-container {
  display: flex;
  justify-content: space-between;
  height: 56px;
  background-color: $colorC;
  text-align: left;
  .info {
    line-height: 56px;
  }
  .user_img {
    margin-top: 3px;
    margin-right: 20px;
  }
}
</style>
