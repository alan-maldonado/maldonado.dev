<template>
  <section>
    <home-welcome-mobile/>
    <home-specialize/>
    <home-languages/>
  </section>
</template>

<script>
import HomeWelcomeMobile from "../components/HomeWelcomeMobile";
import HomeLanguages from "../components/HomeLanguages";
import HomeSpecialize from "../components/HomeSpecialize";
export default {
  name: "Home",
  components: {
    HomeWelcomeMobile,
    HomeLanguages,
    HomeSpecialize
  }
};
</script>

<style scoped>
div {
  color: #fff;
}
</style>

