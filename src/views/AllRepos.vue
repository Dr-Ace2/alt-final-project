<template>
  <div>
   
    <p>Welcome to my Repos page</p>
    <router-link to="/">home page</router-link>
    <div class='repo-wrap'>
        <div v-for='repo in repos' :key='repo.id' class='card'> 
        <UserCard v-bind:repository="repo.name">
            
                  <p> <span class='title'>FULL_NAME:</span>{{repo.full_name}}</p>
                  <p> <span class='title'>URL:</span>{{repo.url}}</p>
                  <p> <span class='title'>NAME:</span>{{repo.name}}</p>
                  <p> <span class='title'>ID:</span>{{repo.id}}</p>
                  <p> <span class='title'>DEFAULT_BRANCH:</span>{{repo.default_branch}}</p>
        </UserCard> 
        </div>
                
    </div>


  </div>


</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
   components: { UserCard },
  name: "AllRepos",
  
    
  data() {
    return {
        repos: [],
    };
  },

  methods: {

  },

  mounted(){

     fetch("https://api.github.com/users/Dr-Ace2/repos")

    .then(response => response.json())
    .then(data => {
    this.repos=data

    })

     .catch(err => console.log('an error occur ' + err));

  }



};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.repo-wrap{
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content:space-around;
  padding:30px;
  background-color:white;
}

  .card{
    width: 400px;
    border-radius: 10px;
    background-color: rgb(66, 245, 233);;
    text-align: center;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    margin: 0 auto;
    margin-top: 20px;
    transition: all ease-in-out .2s;
    text-decoration:none;
  }

.title {
  color: #000;
  font-style: italic;
  /* font-weight: bold; */
}


</style>
