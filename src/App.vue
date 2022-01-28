<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/leaderboard/472883504217063466">Sample Leaderboard</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0 !important;
  color: #FFC30B;
  background-color: #1D1E28;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #FFC30B;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
