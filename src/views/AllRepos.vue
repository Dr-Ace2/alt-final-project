<template>
  <div>
   
    <p>This is the AllRepos page</p>
    <router-link to="/">home page</router-link>
                <div class='repo-wrap'>
                        <div v-for='repo in repos' :key='repo.id'> 
                                <div class='card'>'
                                        <p> <span class='title'>fullname</span>{{repo.full_name}}</p>
                                        <p> <span class='title'>fullname</span>{{repo.url}}</p>
                                        <p> <span class='title'>fullname</span>{{repo.name}}</p>
                                        <p> <span class='title'>fullname</span>{{repo.id}}</p>
                                        <p> <span class='title'>fullname</span>{{repo.default_branch}}</p>
                                </div>
                                
                        </div>
                
                </div>


  </div>


</template>

<script>
export default {

  name: "AboutApp",
  
    
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

    });

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
  background-color:black;
}

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
