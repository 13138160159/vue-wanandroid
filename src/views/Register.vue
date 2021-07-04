<template>
  <div class="register-wrap">
    <h3>注册</h3>
    <input type="text" placeholder="请输入用户名" v-model="username" />
    <input type="password" placeholder="请输入密码" v-model="password" />
    <input type="password" placeholder="请再次输入密码" v-model="repassword" />
    <button v-on:click="register">注册</button>
    <router-link to="/login">已有账号？马上登录</router-link>
  </div>
</template>

<script>
import { Register } from "../api/api";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      repassword: "",
    };
  },
  methods: {
    register() {
      let data = {
        username: this.username,
        password: this.password,
        repassword: this.repassword,
      };

      Register(data)
        .then((res) => {
          if (res.data.errorCode == 0) {
            console.log("注册成功");
          } else {
            console.log(res.data.errorMsg);
          }
        })
        .catch((err) => {
          console.log("注册失败");
        });

      // this.axios({
      //   method: "post",
      //   url: "/user/register",
      //   data: qs.stringify(data),
      // })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      // this.$http.post("/user/register", qs.stringify(data))
      // this.axios.post("/user/register", qs.stringify(data))
    },
  },
};
</script>

<style scoped>
</style>