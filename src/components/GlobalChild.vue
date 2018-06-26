<template>
  <div id="app">
   <GlobalComponent :value="value" :item="'mmm'" v-on:increment="doValue"></GlobalComponent>
   <p>传递的值：{{value}}</p>
  <button class="btn btn-default"  v-on:click="addValue">父组件myvalue值加1</button>
  </div>
</template>

<script>
export default {
  name: 'GlobalChild',
  data(){
      return{
        value:1
      }
  },
  methods:{
      doValue(str){
          console.log(str);
          this.value = str[2]
         alert("父组件" + this.value);
      },
      addValue(){
        this.value +=1;
      }
  }

}
</script>

<style>

</style>
