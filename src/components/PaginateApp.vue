// <template>
  <!-- <div>
   

    <p></p>

  </div>
 -->

// </template>

<!-- <script> -->

<!-- export default {
  name: "PaginateApp",
  components: {
    
    },
 data() {
    return {
        repos : [],
      loading: false,
      page: 1,
      PER_PAGE: 6,
      
      
      }
  },
  computed: {
    skip() {
      return this.page * this.PER_PAGE
    },
    indexOfFirstRepo() {
      return this.skip - this.PER_PAGE
    },
    currentRepos() {
      return this.repos.slice(this.indexOfFirstRepo, this.skip)
    },
    pages() {
      return this.repos.length / this.PER_PAGE
    }, 
    buttons() {
      return Array.from({ length: this.pages }, (value, index) => index + 1)
    }
  },
  methods: {
      
    async fetchRepos() {
      this.loading = true 
        const response = await fetch("https://api.github.com/users/Dr-Ace2/repos");
      const data = await response.json() 
        this.loading = false 
  this.repos = data
    },
    nextPage() {
      this.page += 1
    },
    prevPage() {
      this.page -= 1
    }
  },
  mounted() {
      this.fetchRepos()
    } -->
<!-- } -->
<!-- </script> -->
<style scoped>


</style>
