<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeApp msg="welcome to this page"/>
  <!-- <AboutApp msg="welcome to this page"/> -->
  <AllRepo msg="welcome to this page"/>
  <PageNotFound msg="welcome to this page"/>
  <RepoEach msg="welcome to this page"/>
  <UserCard msg="welcome to this page"/>
  <PaginateApp msg="welcome to this page"/>
    <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HomeApp from './components/HomeApp';
// import AboutApp from './components/HomeApp';
import AllRepo from './components/AllRepo';
import PageNotFound from './components/PageNotFound';
import RepoEach from './components/RepoEach';
import UserCard from './components/UserCard';
import PaginateApp from './components/PaginateApp';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeApp,
    // AboutApp,
    AllRepo,
    PageNotFound,
    RepoEach,
    UserCard,
    PaginateApp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
