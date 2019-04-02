<template>
  <section id="about-tech" class="bg-dark py-3">
    <div class="container">
      <h2 class="section-title">Technical Skills</h2>
      <div class="bottom-line"></div>
      <div class="areas">
        <div v-for="(skill, index) in skills" :key="index">
          <h4>{{skill.title}}:</h4>
          <div class="progress">
            <div :style="`width: ${skill.percentage}%`"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          title: "HTML & CSS",
          percentage: 90
        },
        {
          title: "Nodejs & Javascript",
          percentage: 100
        },
        {
          title: ".net",
          percentage: 70
        },
        {
          title: "Python",
          percentage: 80
        },
        {
          title: "Data Visualization",
          percentage: 80
        },
        {
          title: "Machine Learning",
          percentage: 60
        },
        {
          title: "ETL Jobs",
          percentage: 100
        },
        {
          title: "SQL DBs",
          percentage: 100
        },
        {
          title: "NoSql DBs",
          percentage: 90
        },
        {
          title: "Mobile with Flutter",
          percentage: 70
        },
        {
          title: "Scala & Spark",
          percentage: 40
        },
        {
          title: "Elixir",
          percentage: 30
        },
        {
          title: "AWS Cloud",
          percentage: 95
        },
        {
          title: "Automation Testing",
          percentage: 80
        },
        {
          title: "Unit Testing",
          percentage: 85
        }
      ]
    };
  }
};
</script>
