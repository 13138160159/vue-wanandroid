<template>
  <div class="main">
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <button @click="exit">退出</button>
  </div>
</template>

<script>
import { Exit , ArticleList } from "../api/api";
export default {
  name: "Main",
  data() {
    return {};
  },
  methods: {
    exit() {
      Exit().then((res) => {
        console.log("您已成功退出账号，你的cookie是：" + window.document.cookie);
        this.$router.push("/login");
      });
    },
    renderArticle(){
      let num = 1
      ArticleList(num).then(res=>{
        console.log(res.data);
      })
    }
  },
  created () {
    this.renderArticle()
  }
};
</script>

<style>
</style>