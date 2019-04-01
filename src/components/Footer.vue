<template>
  <footer id="main-footer">
    <div class="footer-content container">
      <p>Copyright &copy; 2019. All Rights Reserved</p>
      <div class="social">
        <a v-for="social in links" :href="social.href" :key="social.type" target="_blank">
          <i class="fab" :class="`fa-${social.type}`"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          type: "facebook",
          href: "https://facebook.com/alan.maldonado"
        },
        {
          type: "twitter",
          href: "https://twitter.com/alan_maldonado"
        },
        {
          type: "instagram",
          href: "https://www.instagram.com/_alan.maldonado_/"
        },
        {
          type: "linkedin",
          href: "https://www.linkedin.com/in/alanmaldonado/"
        }
      ]
    };
  }
};
</script>

