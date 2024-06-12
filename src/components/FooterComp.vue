<template>
  <footer>
    <div class="footer__top">
      <div class="footer__brand">
        <h2>YOUR SHOES</h2>
        <p>Find your next shoes,<br />or add on to your collection</p>
      </div>

      <nav class="footer__nav-list">
        <h2>SHOPPING</h2>
        <ul>
          <li>
            <router-link to="/products/women">Women</router-link>
          </li>
          <li>
            <router-link to="/products/men">Men</router-link>
          </li>
        </ul>
      </nav>

      <nav class="footer__nav-list">
        <h2>INFORMATION</h2>
        <ul>
          <li>
            <router-link to="/contact">Contact us</router-link>
          </li>
          <li>
            <router-link to="/about">About us</router-link>
          </li>
          <li>
            <router-link to="/cookies">Cookies</router-link>
          </li>
          <li>
            <router-link to="/return-policy">Return policy</router-link>
          </li>
        </ul>
      </nav>

      <nav class="footer__nav-list">
        <h2>THE DEVELOPER</h2>
        <p>
          Hi! My name is Anton Lehrberg. I'm a passionate full-stack developer
          with focus on Vue 3, Node.js, and SQL.
        </p>
        <h3 class="h5-size">Find me:</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/anton-lehrberg/"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >
          </li>
          <li>
            <a
              href="https://github.com/MXAnton"
              target="_blank"
              rel="noopener noreferrer"
              >Github</a
            >
          </li>
          <li>
            <a
              href="https://antonlehrberg.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              >Portfolio website</a
            >
          </li>
        </ul>
      </nav>
    </div>

    <div class="footer__bottom">
      <span class="footer__copyright">
        © {{ new Date().getFullYear() }} Anton Lehrberg -
        <a
          href="https://antonlehrberg.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          >My Portfolio</a
        >
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComp",
});
</script>

<style scoped>
footer {
  max-width: 80rem;

  margin: 0 auto;
  padding: 6.25rem 4rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
}

footer h2 {
  font-family: "Arvo", serif;
  font-size: 1.25rem;
}

.footer__top {
  display: flex;
  gap: 5rem;
}
.footer__top a {
  font-family: "Chivo Mono", monospace;
}

.footer__brand h2 {
  width: max-content;
  font-size: 2.25rem;
}

.footer__nav-list h2 {
  margin-bottom: 0.2rem;
}
.footer__nav-list p {
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
}
.footer__nav-list h3 {
  margin-bottom: 0.2em;
}

.footer__copyright,
.footer__copyright a {
  font-family: "Chivo Mono", monospace;
  font-weight: 100;
  font-size: 1rem;
}
.footer__copyright a {
  text-decoration: underline;
  text-underline-offset: 0.1em;
}
</style>
