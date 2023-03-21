<template>
    <div>
        <img class="error-img" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="404 error"/>
        <div class="return">
        <router-link to="/" class='router-not'>Return to Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "NotFound",
  
  };
</script>

<style>
.router-not{
    color:red;
    font-size:20px;
}
.error-img{
    width: 400px;
    height: 500px;
}

.return{
    margin:0 auto;
}
</style>