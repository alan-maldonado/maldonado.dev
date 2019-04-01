<template>
  <div id="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Home,
    Header,
    Footer
  }
};
</script>

