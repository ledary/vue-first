<template>

    <div  class="loading_box">
        {{msg}}
        <localComponent message="Hello!"></localComponent>
       
          <button v-on:click="incrementHandler">子组件myvalue值加1</button>
    </div>


</template>

<script>
import Vue from 'vue';
Vue.component("localComponent",
{
    props:['message'],
    template: '<span>{{ message }}</span>'}
)


export default {
  name: "GlobalComponent",
  data() {
    return {
        msg:"loading...",
        myValue:this.value
    };
  },
  props: {
      value:{
          default:10
      },
      item:{
          required:true,
          default:2
      }
  
  },
   watch: {
        value(val) {
            alert("子组件接受值：" + val);
            this.myResult = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
        },
        myValue(val){
            //xxcanghai 小小沧海 博客园
            this.$emit("increment",[{id:"12345"},{message:"我的value"},val]);//③组件内对myResult变更后向外部发送事件通知
        }
    },
   methods: {
    incrementHandler: function () {
      this.myValue += 1
    
    }
  },
  


  }

</script>

<!-- scoped  样式，使该样式只能应用于此组件 -->
<style scoped>
.loading_box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 5rem;
    color: royalblue;
}

</style>

