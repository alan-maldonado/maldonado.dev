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
        <button type="submit" class="btn-dark" @click.prevent="onSubmit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      phone: "",
      name: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    onSubmit() {
      console.log(
        this.email,
        this.phone,
        this.name,
        this.subject,
        this.message
      );
      if (!this.email || !this.message || !this.name || !this.subject) {
        return;
      }

      const msg = {
        to: "alan@maldonado.com",
        from: this.email,
        subject: `[maldonado.dev] ${this.subject}`,
        text: `
          ${this.message}

          By ${this.name},
          ${this.phone}
          ${this.email}
        `,
        html: `
          <div>
            ${this.message}

            <strong>
              ${this.name}, ${this.phone}, ${this.email}
            </strong>
          </div>
        `
      };
    }
  }
};
</script>

