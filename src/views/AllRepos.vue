<template>
  <div>
   
    <p class="allrepo-text">Welcome to my repositories</p>
    <router-link to="/" class='router-text'>home page</router-link>

    <div class='repo-wrap'>
        <div v-for='repo in repos' :key='repo.id' class='card'> 
        <UserCard v-bind:repository="repo.name">
            
                  <p> <span class='title'>FULL_NAME:</span>{{repo.full_name}}</p>
                  <p> <span class='title'>URL:</span>{{repo.url}}</p>
                  <p> <span class='title'>NAME:</span>{{repo.name}}</p>
                  <!-- <p> <span class='title'>ID:</span>{{repo.id}}</p> -->
                  <!-- <p> <span class='title'>DEFAULT_BRANCH:</span>{{repo.default_branch}}</p> -->
        </UserCard> 
        </div>
                
    </div>


  </div>


</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
   components: {
     UserCard,
     },
   
  name: "AllRepos",
  
    
  data() {
    return {
        repos: [],
      // loading: false,
      // page: 1,
      // PER_PAGE: 6,
      // background: {
      //   JavaScript: "bg-orangem",
      //   TypeScript: "bg-bluem",
      //   HTML: "bg-[#E34C26]",
      //   SCSS: "bg-[#C6538C]",
      //   CSS: "bg-purple-700",
      //   Vue: "bg-[#41B883]",
      // }
    };
  },
  // computed: {
  //   skip() {
  //     return this.page * this.PER_PAGE
  //   },
  //   indexOfFirstRepo() {
  //     return this.skip - this.PER_PAGE
  //   },
  //   currentRepos() {
  //     return this.repos.slice(this.indexOfFirstRepo, this.skip)
  //   },
  //   pages() {
  //     return this.repos.length / this.PER_PAGE
  //   }, 
  //   buttons() {
  //     return Array.from({ length: this.pages }, (value, index) => index + 1)
  //   }
  // },

  methods: {
  //         async fetchRepos() {
  //     this.loading = true 
  //       const response = await fetch("https://api.github.com/users/Dr-Ace2/repos");
  //     const data = await response.json() 
  //       this.loading = false 
  // this.repos = data
  //   },
  //   nextPage() {
  //     this.page += 1
  //   },
  //   prevPage() {
  //     this.page -= 1
  //   }
  },
  

  mounted(){

      // this.fetchRepos()

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
.allrepo-text{
  font-size: 30px;
  color:white;

}
.router-text{
  color:white;
  font-size: 22px;

}

  .card{
    width: 400px;
    border-radius: 10px;
    background-color: rgb(66, 245, 233);;
    text-align: center;
    /* box-shadow: 0 0 0.2px rgba(0, 0, 0, 0.6); */
    margin: 0 auto;
    margin-top: 20px;
    transition: all ease-in-out .2s;
    text-decoration:none;
  }

.title {
  color: #000;
  font-style: italic;
  font-size:15px;
  font-weight: bold;
}


</style>
