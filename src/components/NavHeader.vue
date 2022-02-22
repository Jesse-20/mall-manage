<template>
  <div class="nav-header-container">
    <div class="info">{{ currentRoute }}</div>
    <div class="user_img">
      <templaet>
        <div class="demo-tyoe">
          <el-avatar :size="60" icon="el-icon-user-solid"></el-avatar>
        </div>
      </templaet>
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
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.nav-header-container {
  height: 56px;
  background-color: $colorC;
  text-align: left;
  .info {
    line-height: 56px;
  }
  .user_img{
    f
  }
}
</style>
