<template>
<!-- 使用ref方式获取界面的元素 -->
  <div class="div_outer" id="vue_det" ref="vue_net">
      <div class="div_inner" >
           <span>直接绑定Html元素</span>
      <div v-html="message"></div>
      </div>

     <div class="div_inner">
         <span>v-bind指令 控制html属性</span>
       <label for="r1">修改颜色</label><input type="checkbox" v-model="class1" id="r1">
     <div v-bind:class="{'class1': class1}">
    directiva v-bind:class
  </div>
       
  </div>

<div class="div_inner">
    <span>Javascript表达式</span>
    <br>
{{5+5}}<br>
	{{ ok ? 'YES' : 'NO' }}<br>
	{{ str.split('').reverse().join('') }}
	<div v-bind:id="'list-' + id">菜鸟教程</div>
</div>
 </div>

 
</template>

<script>
export default {
  name: "DemoTwo",
  data() {
    return {
      message: "<span>菜鸟学Vue的道路</span>",
      class1: "false",
      ok:true,
      str:"上海自来水来自海上 山西落花生花落西山",
      id:"1"
    };
  }
};
</script>

<!-- scoped  样式，使该样式只能应用于此组件 -->
<style scoped>
.class1 {
  background: #444;
  color: #eee;
}
.div_outer{
    
    margin-top:20px;
    margin-left: 25%;
    width:50%;
    border:1px #ccc solid;
}

.div_inner{
    text-align: left;
    margin-top:20px;
    margin-left: 5%;
    width:50%;
    border:1px #ccc solid;
}
span{
    font-weight: bold;
    font-size: 20px;
}
</style>

