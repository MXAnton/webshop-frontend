<template>
  <HeaderComp />

  <router-view />
</template>

<script lang="ts">
import HeaderComp from "./components/HeaderComp.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderComp,
  },
});
</script>
