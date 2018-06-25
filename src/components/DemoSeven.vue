<template>
  <div id="app">
        <div id="app">
  <p>单个复选框：</p>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
	
  <p>多个复选框：</p>
  <span  v-for="item in items" :key=item.id >
  <input v-bind:id="item.id" type="checkbox" v-model="checkedNames" v-bind:value="item.value" />
  <label v-bind:for="item.id">{{item.value}}</label>

      </span>
  
  <br>
  <span>选择的值为: {{ checkedNames }}</span>
</div>

  <div>
      <p>下拉框实现数据双向绑定</p>
        <select v-model="selected" name="fruit">
    <option value="">选择一个网站</option>
    <option value="www.runoob.com">Runoob</option>
    <option value="www.google.com">Google</option>
  </select>
  <span>选择的网站是: {{selected}}</span>
  </div>

</div>


</template>

<script>
export default {
  name: "DemoFive",
  data() {
    return {
        items:[
            {id:"0",value:"item0"},
            {id:"1",value:"item1"},
            {id:"2",value:"item2"}
        ],
        checked : false,
    checkedNames: [],
    selected:""
    };
  }

  }

</script>

<!-- scoped  样式，使该样式只能应用于此组件 -->
<style scoped>
* {
  font-size: 20px;
}
</style>

