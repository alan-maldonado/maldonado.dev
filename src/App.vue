<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #2c3e50;
}
</style>
