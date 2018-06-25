<template>
  <div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>

  <div>
    <p>{{site}}</p>
</div>
</div>


</template>

<script>
export default {
  name: "DemoFive",
  data() {
    return {
      message:"Runoob!",
      name:"Google",
      url:"www.baidu.com"
    };
  },
  computed:{
      site:{
          get(){
              return this.name + ' ' + this.url;
          },
          set(value){
            var names = value.split(' ');
            this.name = names[0];
            this.url = names[names.length-1];
          }
      },
      reversedMessage(){
          return this.message.split('').reverse().join('');
      }
  },
  methods: {
   
  }
};
</script>

<!-- scoped  样式，使该样式只能应用于此组件 -->
<style scoped>
* {
  font-size: 20px;
}
</style>

