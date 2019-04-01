<template>
  <div class="header-content">
    <h1>
      I am Alan The
      <span class="txt-type" ref="writer"></span>
    </h1>
    <p class="lead">{{ lead }}</p>
    <a v-if="showViewMyWork" href="/" class="btn-light">View My Work</a>
  </div>
</template>

<script>
import TypeWriter from "../utils/typewriter";
export default {
  data() {
    return {
      words: ["Full Stack Developer", "Vue Expert", "React Engineer"],
      wait: 3000,
      lead: `I specialize in web applications with javascript frameworks Vue and React.`,
      showViewMyWork: false
    };
  },
  mounted() {
    new TypeWriter(this.$refs.writer, this.words, this.wait);
  }
};
</script>

