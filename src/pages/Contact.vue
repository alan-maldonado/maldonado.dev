<template>
  <div class="contact">
    <contact-form/>
    <contact-info/>
    <contact-tagline/>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ContactTagline from "../components/ContactTagline";
export default {
  name: "Contact",
  components: {
    ContactForm,
    ContactInfo,
    ContactTagline
  }
};
</script>

<style scoped>
div {
  color: #fff;
}
</style>

