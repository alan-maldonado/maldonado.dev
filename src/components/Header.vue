<template>
  <header id="header-home">
    <nav id="main-nav-wrapper">
      <div id="main-nav" class="container">
        <a class="logo" href="/">
          <img src="../assets/logo.png">
          <span>maldonado.dev</span>
        </a>
        <ul>
          <li v-for="item in menu" :key="item.title">
            <a :href="item.href" :class="{current: item.active}">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </nav>
    <header-secondary/>
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
        { title: "Home", href: "/", active: true }
        // { title: "About", href: "/", active: false },
        // { title: "Work", href: "/", active: false },
        // { title: "Contact", href: "/", active: false }
      ]
    };
  }
};
</script>
