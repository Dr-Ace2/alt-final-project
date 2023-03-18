<template>
<div class='single-whole'>
  <div class="single">
    <h1>A single repo will show here</h1>
    <UserCard >
      <img v-bind:src="owner.avatar_url" alt="owner" class="owner-img"/>
      <p><span class="title">Owner:</span> {{ owner.login }}</p>
      <p><span class="title">Fullname:</span> {{ repo.full_name }}</p>
      <p><span class="title">Url:</span> {{ repo.url }}</p>
      <p><span class="title">Name:</span> {{ repo.name }}</p>
      <p><span class="title">ID:</span> {{ repo.id }}</p>
      <p>
        <span class="title">Default Branch:</span>
        {{ repo.default_branch }}
      </p>
    </UserCard>
   
  </div>

  <div>
    <router-link to="/">Home</router-link>
    </div>
    <div>
    <router-link to="/repos">Repos</router-link>
  </div>

  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";
export default {
  name: "MyRepo",
  components: { UserCard},
  data() {
    return {
      repo: {},
      owner: {}
    };
  },
  methods: {
    getRepoName() {
      return JSON.parse(localStorage.getItem("repoName"));
    },
  },
  beforeMount() {
    fetch(`https://api.github.com/repos/Dr-Ace2/${this.getRepoName()}`)
      .then((res) => res.json())
      .then((data) => {
        this.repo = data;
        this.owner = data.owner;
        console.log(this.owner);
      })
      .catch((err) => console.log('an error occur ' + err));
  },
};
</script>

<style>
.single{
  width: 50%;
  margin: 0 auto;
  background-color: rgb(210, 230, 247);
  border-radius: 20px;
}
.single-whole{
  background-color:rgb(233, 235, 232);
  border-radius: 10px;
}
.owner-img{
  width: 200px;
  height: 200px;
}
</style>