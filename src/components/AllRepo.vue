<template>
  <div>
   

    <p> all repos</p>
    <p>{{repos}}</p>

  </div>


</template>

<script>


export default {

    

    data() {
        return {
            repos:[]
        };
    },
    
  

    methods:{
        
         setALLrepos(){
        
         }
  },
  

  
  mounted(){
         fetch('https://api.github.com/users/Dr-Ace2/repos')
        .then(response => response.json())
        .then(data => {
         this.repos=data;
         })
  }
  
};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
