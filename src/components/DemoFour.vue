<template>
    <div>
        <p>v-show指令</p>
      <h1 v-show="ok">Hello!</h1>
   

<p>if-else-if指令</p>
    <div>

        <select v-model="type">
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
    <option>E</option>
    <option>F</option>
</select>
 <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    </div>

<p>循环指令  点击每个li会发生变化的</p>
<ul id="example-2">
  <li v-for="(item,index) in items" :key=item  v-on:click="modiferValue(index)">
    {{ item.id }} - {{ index }} - {{ item.value }}
  </li>

<p>********************************************************</p>
  <li v-for="(value, key, index) in object" :key=value>
     {{ index }}. {{ key }} : {{ value }}
    </li>

</ul>

    </div>
 
</template>

<script>
export default {
  name: "DemoFour",
  data() {
    return {
      ok: true,
      type: "A",
      items: [
        { id: "1", value: "壹" },
        { id: "2", value: "贰" },
        { id: "3", value: "叄" },
        { id: "4", value: "肆" },
        { id: "5", value: "伍" },
        { id: "6", value: "陆" }
      ],
      object: {
        name: "菜鸟教程",
        url: "http://www.runoob.com",
        slogan: "学的不仅是技术，更是梦想！"
      }
    };
  },
  methods: {
    modiferValue(index) {
      var len = this.items.length;
      /*如果直接把 this.items[index]= this.items[len-index-1] 界面是不会发生变化的
            由此可以判定  界面检测变化  是根据最小的数据类型来变化的
            */
      this.items[index].value = this.items[len - index - 1].value;
      console.log(this.items);
    }
  }
};
</script>

<!-- scoped  样式，使该样式只能应用于此组件 -->
<style scoped>
* {
  font-size: 20px;
}
</style>

