var vm = new Vue({
    el: '#cal',
    data: {
      number: 0,},    
    methods: { 
      addNumber: function(){
        this.number = this.number +1;
      },
      reduceNumber: function(){
        this.number = this.number -1;
      }      
    }
})
