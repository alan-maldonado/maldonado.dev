<template>
  <section id="contact-form" class="bg-light text-center py-3">
    <div class="container">
      <h2 class="section-title">Contact Me</h2>
      <div class="bottom-line"></div>
      <p class="lead">Here is how you can reach me</p>

      <form>
        <div class="text-fields">
          <input type="text" class="text-input name-input" placeholder="Name" v-model="name">
          <input
            type="email"
            class="text-input email-input"
            placeholder="Email Address"
            v-model="email"
          >
          <input
            type="text"
            class="text-input subject-input"
            placeholder="Subject"
            v-model="subject"
          >

          <input
            type="text"
            class="text-input phone-input"
            placeholder="Phone Number"
            v-model="phone"
          >
          <textarea class="text-input message-input" placeholder="Enter Message" v-model="message"></textarea>
        </div>
        <p class="response">{{response}}</p>

        <button type="submit" class="btn-dark" @click.prevent="onSubmit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      phone: "",
      name: "",
      subject: "",
      message: "",
      response: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.email || !this.message || !this.name || !this.subject) {
        return;
      }
      axios
        .post(
          "https://t2uil6smp8.execute-api.us-east-1.amazonaws.com/production/message-me",
          {
            email: this.email,
            message: this.message,
            name: this.name,
            phone: this.phone,
            subject: this.subject
          }
        )
        .then(() => {
          this.response = "Thanks for contacting me";
          this.email = "";
          this.phone = "";
          this.name = "";
          this.subject = "";
          this.message = "";
        })
        .catch(() => {
          this.response =
            "Looks like there is an issue while submitting the form. Please send me an email at alan@maldonado.dev";
        });
    }
  }
};
</script>

<style scoped>
.response {
  font-size: 2rem;
  color: #42b983;
  margin-bottom: 1rem;
}
</style>

