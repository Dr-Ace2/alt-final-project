<template>
  <div class='card'>
   

    <p> {{fullname}}</p>
    <p>{{name}}</p>
    <p> {{url}}</p>

  </div>


</template>

<script>
export default {
  name: "UserCard",
  props:["fullname", 'name', 'url']
  
};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
    width: 400px;
    border-radius: 10px;
    background-color: rgb(191, 138, 69);
    text-align: center;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    /* margin: 25px 115px; */
    margin: 0 auto;
    margin-top: 20px;
    transition: all ease-in-out .2s;
    

}

</style>
