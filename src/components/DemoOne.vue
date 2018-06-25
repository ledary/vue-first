<template>
<!-- 使用ref方式获取界面的元素 -->
  <div id="vue_det" ref="vue_net">
  <h1>site:{{site}}</h1>
  <h1>url: {{url}}</h1>
 <h1>{{details()}}</h1>
 <button class="btn btn-default" v-on:click="getElement">点我</button>
 </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      site: "菜鸟学Vue",
      url: "www.runoob.com",
      alexa: "100000"
    };
  },
  methods: {
    details() {
      return this.site + "——学习的不仅是技术，还有梦想！";
    },
    //获取界面元素  $refs
    getElement(){
     var el = this.$refs.vue_net;
     this.$slots
     alert(el.innerHTML)
      
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
