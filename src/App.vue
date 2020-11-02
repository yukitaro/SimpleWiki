<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#/">It's My wiki</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/WikiHome">Wiki Home</b-nav-item>
          <b-nav-item href="#/AllEntries">Wiki Entries</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <p>
      <router-link to="/WikiHome">Go to Wiki Home</router-link>
    </p> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
