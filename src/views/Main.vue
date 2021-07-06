<template>
  <div class="main">
    <head-bar></head-bar>
  </div>
</template>

<script>
import headBar from "@/components/headBar";
import { ArticleList } from "../api/api";
export default {
  name: "Main",
  data() {
    return {};
  },
  methods: {
    renderArticle() {
      let num = 1;
      ArticleList(num).then((res) => {
        console.log(res.data);
      });
    },
  },
  created() {
    // this.renderArticle();
  },
  components: {
    headBar: headBar,
  },
};
</script>

<style>
</style>