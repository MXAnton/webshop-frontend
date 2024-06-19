<template>
  <main>
    <section class="hero">
      <div class="section__wrapper">
        <h1>ABOUT US</h1>

        <p class="long">
          Welcome to YOUR SHOES, your go-to destination for the latest in
          footwear fashion! We are an exciting new online shoe store, dedicated
          to providing stylish and comfortable shoes for both women and men. At
          YOUR SHOES, we understand that the right pair of shoes can elevate
          your style, boost your confidence, and make you feel your best. That's
          why we're committed to offering a carefully curated selection of
          footwear that caters to your unique tastes and needs.
        </p>
      </div>
    </section>

    <section class="our-mission">
      <div class="section__wrapper">
        <div class="our-mission__content">
          <h2>OUR MISSION</h2>
          <p class="long">
            Our mission at YOUR SHOES is to make online shoe shopping a breeze
            while offering an exceptional customer experience. We know that
            finding the perfect pair of shoes can be a challenge, and we're here
            to simplify the process. Whether you're searching for the ideal
            sneakers, heels, boots, or casual shoes, we've got you covered.
            We're on a mission to make your shopping experience enjoyable,
            convenient, and, most importantly, rewarding.
          </p>
        </div>
      </div>
    </section>

    <section class="why-us">
      <div class="section__wrapper">
        <div class="why-us__content">
          <h2 class="why-us__header">WHY CHOOSE YOUR SHOES?</h2>

          <div class="why-us__timeline"></div>

          <ul>
            <li>
              <h3>Diverse Selection</h3>
              <p class="long">
                At Your Shoes, we pride ourselves on offering a wide range of
                shoe styles, from classic and timeless designs to the latest
                trends. We believe in providing options that cater to every
                taste and occasion.
              </p>
            </li>
            <li>
              <h3>Quality Assurance</h3>
              <p class="long">
                We're committed to delivering quality footwear that not only
                looks good but also feels great. All our shoes are carefully
                selected for their craftsmanship and comfort, ensuring you get
                the best value for your money.
              </p>
            </li>
            <li>
              <h3>Affordable Luxury</h3>
              <p class="long">
                We believe that high-quality, stylish shoes shouldn't come with
                a hefty price tag. Your Shoes offers affordable options that
                allow you to step out in style without breaking the bank.
              </p>
            </li>
            <li>
              <h3>Easy Shopping</h3>
              <p class="long">
                Our user-friendly website is designed to provide a seamless
                shopping experience. Browsing, selecting, and checking out your
                favorite shoes has never been easier.
              </p>
            </li>
            <li>
              <h3>Customer-Centric Approach</h3>
              <p class="long">
                We put our customers first. We're here to assist you in any way
                we can, whether you have questions about sizing, styles, or need
                help with your order. Your satisfaction is our top priority.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="join-us">
      <div class="section__wrapper">
        <div class="join-us__content">
          <h2>JOIN US ON THIS EXCITING JOURNEY</h2>
          <p class="long">
            YOUR SHOES is more than just an online shoe store; it's a community
            of fashion enthusiasts who appreciate the value of quality footwear.
            We invite you to join us on this exciting journey of style, comfort,
            and confidence. Explore our collections, discover your perfect pair,
            and experience the difference of YOUR SHOES.
          </p>
          <p class="long">
            Thank you for choosing Your Shoes as your preferred destination for
            fashionable footwear. We look forward to serving you and helping you
            put your best foot forward, one step at a time.
          </p>
          <p class="long">Happy Shopping!</p>

          <p class="long"><i>The YOUR SHOES Team</i></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "AboutView",
  mounted() {
    let mm = gsap.matchMedia();

    // media query for screens larger than 500px
    mm.add("(min-width: 60rem)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".why-us__content",
          start: "top 40%",
          end: "bottom 52%",
          scrub: 1,
          toggleActions: "restart none none none",
          pin: ".why-us__header",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // },
        },
      });

      tl.to(".why-us__timeline", {
        scaleY: 0.15,
        duration: 0.1,
        ease: "power1",
      })
        .to(".why-us__timeline", {
          scaleY: 0.4,
          duration: 0.3,
          delay: 0.3,
          ease: "power1",
        })
        .to(".why-us__timeline", {
          scaleY: 0.6,
          duration: 0.3,
          delay: 0.5,
          ease: "power1",
        })
        .to(".why-us__timeline", {
          scaleY: 0.8,
          duration: 0.3,
          delay: 0.5,
          ease: "power1",
        })
        .to(".why-us__timeline", {
          scaleY: 1,
          duration: 0.4,
          delay: 0.3,
          ease: "power1",
        });
    });
  },
});
</script>

<style scoped>
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.hero .section__wrapper > * {
  max-width: 65ch;
}
.hero h1 {
  margin-bottom: 0.2em;
}

/* OUR MISSION */
.our-mission {
  background-color: var(--color-secondary);
  --color-text: var(--color-background);
}
.our-mission__content {
  display: grid;
  grid-template-columns: minmax(auto, 65ch);
  gap: 1rem;
}

/* why-us */
.why-us__content {
  display: grid;
  grid-template-columns: minmax(auto, 65ch);
  gap: 1.5rem;
}
.why-us__header {
  height: fit-content;
}
.why-us__content .why-us__timeline {
  transform: scaleY(0);
  transform-origin: top;

  margin-left: calc(min(8rem, 10%));

  width: 2px;
  height: 100%;

  background-color: var(--color-secondary);
}
.why-us__content ul {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.why-us__content ul h3 {
  margin-bottom: 0.2em;
}

/* join-us */
.join-us__content {
  max-width: 65ch;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.join-us__content h2 {
  margin-bottom: 0.2em;
}

@media only screen and (min-width: 60rem) {
  .our-mission__content {
    grid-template-columns: auto 1fr;
    gap: 10rem;
  }

  /* why-us */
  .why-us__content {
    grid-template-columns: minmax(auto, 25rem) auto 1fr;
    gap: 2rem;
  }
}
</style>
