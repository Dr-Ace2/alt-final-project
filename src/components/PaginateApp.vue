<template>
  <div>
   

    <p></p>

  </div>


</template>

<script>
export default {

  name: "PaginateApp",
  
  data() {
    return {

        repositories: [],
        currentPage: 1,
        perPage: 5,
        totalPages:0,
        loading: true,
    };
  },

// methods: {

// fetchRepositories(){
//     this.loading= true;
    
//         const response = 
//         fetch("https://api.github.com/users/Dr-Ace2/repos");

//         console.log(response);
//         this.repositories= response.data;
//         this.totalPages= math.ceil(this.repositories.length/this.perPage);
//         this.loading = false
    
    
// }

// },
// computed: {
//     paginatedRepos(){
//         const startIndex= (this.currentPage -1) * this.perPage;
//         const endIndex = startIndex+this.perPage;
//         return
//         this.repositories.slice(startIndex,endIndex);
//     },
// },

 };

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
