<template>
  <div class="register_box">
    <div class="register_content">
      <h1>注册</h1>
      <el-form label-width="65px" class="form">
        <el-form-item label="用户名">
          <el-input
            placeholder="请输入用户名"
            v-model="username"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
            @keyup.enter.native="register"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请再次输入密码"
            v-model="repassword"
            show-password
            @keyup.enter.native="register"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">注册</el-button>
          <router-link to="/login">已有账号？马上登录</router-link>
        </el-form-item>
      </el-form>
    </div>
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

<style>
html,
body,
.register_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(../assets/background.jpg) no-repeat center center;
}
.register_content {
  width: 35%;
  min-width: 345px;
  height: 310px;
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
.register_content h1 {
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.register_content .form {
  padding: 0 24px 0 0;
}
.register_content .form .test {
  background-color: #999;
  color: white;
}
.register_content .form .toregister {
  margin-left: 20px;
}
</style>