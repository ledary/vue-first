<template>
  <div style="height:100%">
  <div class="inner_div">
 <ul>
      <li><router-link to="/">Hello World</router-link></li>
      <li><router-link to="/demoone">第一个demo</router-link></li>
      <li><router-link to="/demotwo">第贰个demo</router-link></li>
      <li><router-link to="/demotird">第叄个demo</router-link></li>
      <li><router-link to="/demofour">第肆个demo</router-link></li>
      <li><router-link to="/demofive">第伍个demo</router-link></li>
      <li><router-link to="/demosix">第六个demo</router-link></li>
      <li><router-link to="/demoseven">第七个demo</router-link></li>
      <li><router-link to="/demoeight">第八个demo</router-link></li>
      <li><router-link to="/globalchild">父子组件通讯demo</router-link></li>
      <li><router-link to="/demodirective">第一个指令</router-link></li>
    
    </ul>

  </div>
   
   <div class="right_div">
    <router-view/>
   </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.inner_div li{
  width:150px;
  font-size: 16px;
  text-align:left;

}
.right_div{
  float: right;
  width:60%;
}
.inner_div{

  border:1px solid #ccc;
  background-color: aliceblue;
  float: left;
  margin-top: 15px;
  height: 95%;
  text-align: left;
  margin-left: 25%;
}
</style>
