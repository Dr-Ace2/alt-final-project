<template>
  <div>
   
    <h1>Home</h1>
    <p>This is the home page</p>
    <router-link to="/about">about page</router-link>

  </div>


</template>

<script>
export default {

  name: "HomeApp",
  props: {
    msg: String,
  },
    
  data() {
    return {
    };
  },




};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
