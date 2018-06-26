<template>
<!-- 使用ref方式获取界面的元素 -->
  <div id="vue_det" >
      <button class="btn btn-default" v-on:click="dumpDemoOne()">点我到首页</button>
 </div>
</template>

<script>
export default {
  name: "DemoRouter",
  data() {
    return {
     
    };
  },
  methods: {
      dumpDemoOne(){
          this.$router.push("/")
      }
  }
};
</script>

<!-- scoped  样式，使该样式只能应用于此组件 -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
