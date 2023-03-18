<template>
  <div class="backg">
   
    <h1>Home</h1>
    <p>Welcome to my Github App, click on the link below to view my repositories</p>

    <router-link to="/repos" class="home-repo">repos</router-link>


  </div>


</template>

<script>
export default {
 
  name: "HomeApp",

    
  data() {
    return {
    };
  },




};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


 p{
  font-size:30px;
  
}
.home-repo{
  color:green;
  font-size:30px;
  text-decoration:none;

}

</style>
