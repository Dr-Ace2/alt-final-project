<template>
  <div class="card" @mouseenter="() => saveRepoToLocalStorage(repository)">
    <router-link to="/myrepo">
      <slot/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ['repository'],
  methods: {
    saveRepoToLocalStorage (rep) {
      localStorage.setItem('repoName', JSON.stringify(rep));
    }
  }
};
</script>

<style scoped>


</style>
