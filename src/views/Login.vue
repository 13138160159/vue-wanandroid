<template>
  <div class="register">
    <div class="login-wrap">
      <h3>登录</h3>
      <input
        type="text"
        placeholder="请输入用户名"
        v-model="userinfo.username"
      />
      <input
        type="password"
        placeholder="请输入密码"
        v-model="userinfo.password"
      />
      <button v-on:click="login">登录</button>
      <router-link to="/register">没有账号？马上注册</router-link>
    </div>
  </div>
</template>

<script>
import { Login } from "../api/api";
export default {
  name: "Login",
  data() {
    return {
      userinfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    //   Wangchunmin
    //   wang131381
    login() {
      Login(this.userinfo)
        .then((res) => {
          if (res.data.errorCode == 0) {
            this.$router.push("/main");
            console.log('您已成功登录，cookie是：'+ window.document.cookie);
          } else {
            console.log('你的错误是：' + res.data.errorMsg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {},
};
</script>

<style scoped>
.login-wrap {
  text-align: center;
}
</style>