<template>
  <div class="headBar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu container"
      mode="horizontal"
      @select="handleSelect"
      background-color="#fff"
      text-color="#276692"
      active-text-color="#ffd04b"
    >
      <el-menu-item>
        <img class="logo" src="@/assets/logo.png" alt="" srcset="" />
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/login">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">广场</el-menu-item>
      <el-menu-item index="3">导航</el-menu-item>
      <el-menu-item index="5">问答</el-menu-item>
      <el-menu-item index="6">体系</el-menu-item>
      <el-menu-item index="7">项目</el-menu-item>
      <el-menu-item index="8">公众号</el-menu-item>
      <el-menu-item index="9">项目分类</el-menu-item>
      <el-menu-item index="10">工具</el-menu-item>

      <div class="nav_login" v-if="this.$store.state.loginUserName == null">
        <router-link to="/login">登录</router-link> ·
        <router-link to="/register">注册</router-link>
      </div><div class="nav_login" v-else-if="this.$store.state.loginUserName !== ''">
        <span to="/login">账户名称{{ this.$store.state.loginUserName }}</span> ·
        <span to="/register" @click="exit">退出</span>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { Exit }from "../api/api";
export default {
  name: "headBar",
  data() {
    return {
      activeIndex: "1",
      username: "yes",
    };
  },
  methods: {
    exit() {
      Exit().then((res) => {
        console.log(
          "您已成功退出账号，你的cookie是：" + window.document.cookie
        );
        this.$store.commit("setName");
        // this.$router.push("/login");
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created () {
    this.$store.commit('setName')
  }
};
</script>

<style scoped>
.container {
  width: 1140px;
  margin: 0 auto;
}
.logo {
  width: 100px;
  height: 60px;
}
.nav_login {
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  font-weight: 600;
  float: right;
}
.nav_login a {
  color: #276692;
}
</style>
