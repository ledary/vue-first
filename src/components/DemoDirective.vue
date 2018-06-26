<template>
  <div id="app">
<input v-FirstDirective="directiveModel" v-model="value"/>
{{value}}
  </div>
</template>

<script>
export default {
  name: 'DemoDirective',
  data(){
      return{
        value:"自定义指令",
        directiveModel:{color:'red',text:'hello'}
        
      }
  }
}
</script>

<style>

</style>
