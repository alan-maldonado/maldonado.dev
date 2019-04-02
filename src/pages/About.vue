<template>
  <div>
    <about-me/>
    <about-technical/>
    <about-logos/>
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe";
import AboutTechnical from "../components/AboutTechnical";
import AboutLogos from "../components/AboutLogos";

export default {
  name: "About",
  components: {
    AboutMe,
    AboutTechnical,
    AboutLogos
  }
};
</script>