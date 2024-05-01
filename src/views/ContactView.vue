<template>
  <main>
    <section class="contact">
      <div class="section__wrapper" v-if="!sentMail">
        <div class="contact__content-text">
          <h1 class="h2-size">CONTACT US</h1>

          <p class="long">
            Do you have any questions regarding our business, or are you
            interested in becoming our partners? Whatever you want, feel free to
            contact us!
          </p>
        </div>

        <form
          @submit.prevent="sendMail"
          class="contact__content-form"
          novalidate
        >
          <div
            class="input--1"
            :class="{
              'has-value': email.length > 0,
              'has-error': emailError.length > 0,
            }"
          >
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              required
              minlength="5"
              maxlength="254"
              @input="emailError = ''"
            />
            <span class="input--1__error-message">{{ emailError }}</span>
          </div>
          <div
            class="input--1"
            :class="{
              'has-value': header.length > 0,
              'has-error': headerError.length > 0,
            }"
          >
            <label for="header">Header</label>
            <input
              type="text"
              name="header"
              id="header"
              v-model="header"
              required
              minlength="2"
              maxlength="100"
              @input="headerError = ''"
            />
            <span class="input--1__error-message">{{ headerError }}</span>
          </div>
          <div
            class="input--1"
            :class="{
              'has-value': message.length > 0,
              'has-error': messageError.length > 0,
            }"
          >
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              v-model="message"
              required
              :minlength="minMessageLength"
              maxlength="999"
              @input="messageError = ''"
            ></textarea>
            <span class="input--1__error-message">{{ messageError }}</span>
            <span class="input--1__char-count"
              >{{ message.length }} of {{ 999 }}</span
            >
          </div>

          <input
            type="submit"
            value="Send Mail"
            class="btn--secondary btn--large"
          />
        </form>
      </div>

      <div class="section__wrapper" v-else>
        <div class="thanks-for-contacting">
          <h2 class="h3-size">Thanks for contacting us!</h2>
          <p class="long">
            We are very exited to read what you have to say and will reach back
            as soon as possible!
          </p>
          <button class="btn--primary" @click="sentMail = false">
            Send another mail
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactView",

  data() {
    return {
      email: "",
      header: "",
      message: "",

      minMessageLength: 30,

      emailError: "",
      headerError: "",
      messageError: "",

      sentMail: false,
    };
  },

  methods: {
    sendMail() {
      if (!this.validateInputs()) {
        return;
      }

      // Send mail
      this.sentMail = true;
      alert(
        `Email was sent in imagination, because form not set up completely. Your email: "${this.email}"`
      );

      // Clear vars
      this.email = this.header = this.message = "";
    },

    validateInputs() {
      this.emailError = "";
      this.headerError = "";
      this.messageError = "";

      // Check email
      if (this.email.length == 0) {
        this.emailError = "Email is required";
      } else if (
        !this.email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
      ) {
        this.emailError = "Email is not valid";
      }

      // Check header
      if (this.header.length < 2) {
        this.headerError = "Header must be at least 2 characters";
      }

      // Check message
      if (this.message.length == this.minMessageLength - 1) {
        this.messageError = `${
          this.minMessageLength - this.message.length
        } character more required`;
      } else if (this.message.length < this.minMessageLength) {
        this.messageError = `${
          this.minMessageLength - this.message.length
        } characters more required`;
      }

      if (
        this.emailError == "" &&
        this.headerError == "" &&
        this.messageError == ""
      ) {
        return true;
      }

      return false;
    },
  },
});
</script>

<style scoped>
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

h1 {
  margin-bottom: 0.2em;
}

.contact .section__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
}
.contact .section__wrapper > * {
  flex: 1 1 0;
  min-width: 300px;
}

.contact__content-form {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.contact__content-form input[type="submit"] {
  margin-top: 2.5rem;
  width: 100%;
}

.thanks-for-contacting {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.thanks-for-contacting button {
  margin-top: 1rem;
}
</style>
