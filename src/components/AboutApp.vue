<template>
  <div>
   
    <h1>About</h1>
    <p>This is the about page</p>
    <router-link to="/">home page</router-link>


  </div>


</template>

<script>
export default {

  name: "AboutApp",
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
