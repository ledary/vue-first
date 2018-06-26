export default  {
    bind:function(el,data){
       el.style.backgroundColor=data.value.color;
       console.log(data);
    },
    inserted:function(value){
        console.log("inserted");


    },
    update:function(value){
        console.log("update");

    },
    componentUpdated:function(value){
        console.log("componentUpdated");

    },
    unbind:function(value){
        console.log("unbind");

    }
    
    
   }