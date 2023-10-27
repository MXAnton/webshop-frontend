<template>
  <div class="dropdown-2">
    <button class="dropdown__toggler" @click="isOpen = !isOpen">
      <span
        >{{ header
        }}<span
          class="dropdown__toggler__parantheses"
          v-if="parentheses != null"
          >({{ parentheses }})</span
        ></span
      >
      <AddOrRemoveIcon width="24" height="24" :showAddIcon="!isOpen" />
    </button>

    <div class="dropdown__content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AddOrRemoveIcon from "@/components/icons/AddOrRemoveIcon.vue";

export default defineComponent({
  name: "Dropdown2Comp",
  components: {
    AddOrRemoveIcon,
  },
  props: {
    header: String,
    parentheses: String,
  },

  data() {
    return {
      isOpen: false,
    };
  },
});
</script>

<style scoped></style>
