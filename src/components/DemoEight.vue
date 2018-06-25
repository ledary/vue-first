<template>
  <div id="app">
  <button v-on:click="greet">Greet</button>

  <div >
      <p>事件监听 关键字</p>
      <p><!-- Alt + C -->
<input @keyup.alt.67="clear">
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
  </div>
</div>


</template>

<script>
export default {
  name: "DemoFive",
  data() {
    return {
        name:"事件监听 event"
    };
  },
  methods:{
      greet(event){
        alert('Hello' + this.name + '!');
        if(event){
            alert(event.target.tagName);
        }
      },
      clear(){
          alert(1)
      },
      doSomething(){
          alert("doSomething");
      }
  }

  }

</script>

<!-- scoped  样式，使该样式只能应用于此组件 -->
<style scoped>
* {
  font-size: 20px;
}
</style>

