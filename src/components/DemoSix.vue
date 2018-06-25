<template>
<div id = "computed_props">
    千米 : <input type = "text" v-model = "kilometers">
    米 : <input type = "text" v-model = "meters">


<div>
    <p>class属性绑定</p>
    <div v-bind:class="{active:isActive}"></div>
</div>
    </div>

</template>

<script>
export default {
  name: "DemoSix",
  data() {
    return {
      kilometers: 0,
      meters: 0,

      isActive:true,
      hasError:true,

    };
  },
  computed:{
      classObject:function(){
          return {
              active:this.isActive && !this.hasError,
              'text-danger':this.hasError && this.hasError.type === 'fatal',

          }
      }
  },
  watch: {
    kilometers: function(val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function(val) {
      this.kilometers = val / 1000;
      this.meters = val;
    }
  }
};
</script>

<!-- scoped  样式，使该样式只能应用于此组件 -->
<style scoped>
* {
  font-size: 20px;
}

.active {
	width: 100px;
	height: 100px;
	background: green;
}
.text-danger {
	background: red;
}
</style>

