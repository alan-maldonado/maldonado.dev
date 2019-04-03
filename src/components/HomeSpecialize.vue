<template>
  <section id="home-specialize" class="py-3 bg-medium">
    <div class="container">
      <h2 class="section-title">I Specialize In</h2>
      <div class="bottom-line"></div>
      <p class="lead">Web Applications with Javascript, React and Vue</p>
      <div class="home-languages">
        <div v-for="logo in technologies" :key="logo">
          <img :src="logo">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aws from "../assets/languages-logos/aws.png";
import css from "../assets/languages-logos/css.png";
import html from "../assets/languages-logos/html.png";
import node from "../assets/languages-logos/node.png";
import react from "../assets/languages-logos/react.png";
import vue from "../assets/languages-logos/vue.png";

export default {
  data() {
    return {
      logos: [aws, css, html, node, react, vue]
    };
  },
  computed: {
    technologies() {
      const technologies = this.logos.slice(0);
      technologies.sort(function() {
        return 0.5 - Math.random();
      });

      return technologies;
    }
  }
};
</script>
