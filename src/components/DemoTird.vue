<template>
    <div>
       <label for="r1">显示/隐藏  使用v-if指令</label><input type="checkbox" v-model="seen" id="r1">
       
        <div id="app">
            <p v-if="seen">现在你看到我了</p>
        </div>
        <div style="margin-top:20px">
                参数  a标签 href  跳转
            <div id="app">
                <pre><a v-bind:href="url" target="_blank">mygithub</a></pre>
            </div>
        </div>


        <div>过滤器的用法
            <p>有参数的结果：{{str|dateFormat("yyyy-MM-dd")}}</p>
            <p>没有参数的结果：{{str|dateFormat}}</p>
        </div>
    </div>
 
</template>

<script>
import Vue from 'vue'
export default {
  name: "DemoTird",
  data() {
    return {
      seen: true,
      url: "https://github.com/ledary",
      str:new Date()
    };
  },
  methods:{
      capitalize(str){
          return str.charAt(0).toUpperCase()
      }
  }
};
</script>

<!-- scoped  样式，使该样式只能应用于此组件 -->
<style scoped>
</style>

