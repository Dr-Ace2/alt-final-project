<template>
  <div>
   
    <h1>Home</h1>
    <p>This is the home page</p>

    <UserCard fullname='muhammad' url="hhrhrh" name="namefhffg"/>
    <router-link to="/repos">repos</router-link>


  </div>


</template>

<script>
import UserCard from '../components/UserCard'
export default {
 
  name: "HomeApp",
  components:{UserCard},

    
  data() {
    return {
    };
  },




};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
