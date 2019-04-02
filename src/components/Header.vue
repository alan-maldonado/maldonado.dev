<template>
  <header :id="headerId">
    <nav id="main-nav-wrapper">
      <div id="main-nav" class="container">
        <a class="logo" href="/">
          <img src="../assets/logo.png">
          <span>maldonado.dev</span>
        </a>
        <ul>
          <li v-for="item in menu" :key="item.title">
            <router-link :to="item.to" :class="{current: isActive(item.title)}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <header-secondary v-if="showSecondary"/>
  </header>
</template>

<script>
import HeaderSecondary from "./HeaderSecondary";
export default {
  components: {
    HeaderSecondary
  },
  data() {
    return {
      menu: [
        { title: "Home", to: "/" },
        { title: "About", to: "/about" },
        // { title: "Work", href: "/" },
        { title: "Contact", to: "/contact" }
      ]
    };
  },
  computed: {
    showSecondary() {
      return this.$route.name === "Home";
    },
    headerId() {
      return this.$route.name === "Home" ? "header-home" : "header-inner";
    }
  },
  methods: {
    isActive(title) {
      return title === this.$route.name;
    }
  }
};
</script>
