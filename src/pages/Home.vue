<template>
  <section>
    <home-specialize/>
    <home-languages/>
  </section>
</template>

<script>
import HomeLanguages from "../components/HomeLanguages";
import HomeSpecialize from "../components/HomeSpecialize";
export default {
  name: "Home",
  components: {
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

