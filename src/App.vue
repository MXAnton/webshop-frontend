<template>
  <HeaderComp />

  <router-view />

  <FooterComp />
</template>

<script lang="ts">
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderComp,
    FooterComp,
  },
});
</script>
