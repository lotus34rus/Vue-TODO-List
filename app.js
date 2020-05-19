

Vue.component("add-input", {
    template : `<div class="add-input">
                    <input type="text" v-model="newTaskText">
                </div>
    
    `,
    data:function(){
       return  {
           newTaskText : '123'
       }
    }
    
});





new Vue({
    el: "#app",
    data: {
        message:"hello",
    },

});

