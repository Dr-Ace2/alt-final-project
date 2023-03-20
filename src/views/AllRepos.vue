<template>
  <div>
    <h1 class='allrepo-text'>Welcome to the list of all my github repositories</h1>
    <router-link to="/" class='router-text'>Home</router-link>
    <div class="repo-wrap">
      <LoadingComponent :loading="isLoading" />
      <div class="repo-container" v-if="!isLoading">
        <div v-for="repo in currentRepos" :key="repo.id">
          <UserCard :repository="repo.name">
            <p><span class="title">Fullname:</span> {{ repo.full_name }}</p>
            <p><span class="title">Url:</span> {{ repo.url }}</p>
            <p><span class="title">Name:</span> {{ repo.name }}</p>
            <!-- <p><span class="title">ID:</span> {{ repo.id }}</p> -->
            <p>
              <span class="title">Default Branch:</span>
              {{ repo.default_branch }}
            </p>
          </UserCard>
        </div>
        <div class="btn-wrap">
          <button
            class="pagination-btn"
            :disabled="page <= 1"
            @click="prevPage"
          >
            prev
          </button>
          <button
            class="pagination-btn"
            v-for="(num, idx) in buttons"
            :key="idx"
            :disabled="page === num"
            @click="page = num"
          >
            {{ num }}
          </button>
          <button
            class="pagination-btn"
            :disabled="page >= pages"
            @click="nextPage"
          >
            next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
export default {
  components: { UserCard, LoadingComponent},
  name: "RepoPage",
  data() {
    return {
      isLoading: false,
      repos: [],
      page: 1,
      per_page: 6,
    };
  },
  methods: {
    nextPage() {
      this.page += 1;
    },
    prevPage() {
      this.page -= 1;
    },
  },
  computed: {
    skip() {
      return this.page * this.per_page;
    },
    indexOfFirstRepo() {
      return this.skip - this.per_page;
    },
    currentRepos() {
      return this.repos.slice(this.indexOfFirstRepo, this.skip);
    },
    pages() {
      return this.repos.length / this.per_page;
    },
    buttons() {
      return Array.from({ length: this.pages }, (value, index) => index + 1);
    },
  },
  mounted() {
    this.isLoading = true;
    fetch("https://api.github.com/users/Dr-Ace2/repos")
      .then((res) => res.json())
      .then((data) => {
        this.isLoading = false;
        this.repos = data;
      })
      .catch((err) => console.log("an error occur " + err));
  },
};
</script>

<style>
.repo-container{
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
    border-radius: 50px;
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

.btn-wrap {
  padding: 20px;
}

.pagination-btn {
  padding: 10px;
  margin: 10px;
}
</style>