<template>
  <div class="header-content">
    <h1>
      I Am Alan The
      <span class="txt-type" data-wait="3000" :data-words="words"></span>
    </h1>
    <p class="lead">{{ lead }}</p>
    <a v-if="showViewMyWork" href="/" class="btn-light">View My Work</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: `["Full Stack Developer", "Vue Expert", "React Engineer"]`,
      lead: `I specialize in web applications with javascript frameworks Vue and React.`,
      showViewMyWork: false
    };
  }
};
</script>

