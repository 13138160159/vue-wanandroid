<template>
  <div class="login_box">
    <div class="login_content">
      <h1>用户登录</h1>
      <el-form label-width="65px" class="form">
        <el-form-item label="用户名">
          <el-input
            placeholder="请输入用户名"
            v-model="userinfo.username"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请输入密码"
            v-model="userinfo.password"
            show-password
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resetForm" class="test">重置</el-button>
          <router-link class="toregister" to="/register">没有账号？马上注册</router-link>
        </el-form-item>
      </el-form>
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
    // Wangchunmin
    // wang131381
    // loginUserName=Wangchunmin; token_pass=571dda6a7611b70a5bef431ef5995346
    login() {
      Login(this.userinfo)
        .then((res) => {
          if (res.data.errorCode == 0) {
            this.$router.push("/main");
            this.$store.commit("setName");
            console.log("您已成功登录，cookie是：" + window.document.cookie);
          } else {
            this.$alert(res.data.errorMsg, {
              confirmButtonText: "确定",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    resetForm() {
      this.userinfo.username = "";
      this.userinfo.password = "";
    },
  },
  created() {},
};
</script>

<style>
html,
body,
.login_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(../assets/background.jpg) no-repeat center center;
}
.login_content {
  width: 35%;
  height: 300px;
  padding: 24px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 15px #fff;
  background-color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login_content h1 {
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.login_content .form {
  padding: 0 24px 0 0;
}
.login_content .form .test {
  background-color: #999;
  color: white;
}
.login_content .form .toregister {
  margin-left: 20px;
}
</style>