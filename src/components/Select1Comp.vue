<template>
  <div class="select-1" :class="{ column: column, 'fill-height': fillHeight }">
    <label v-if="label != null" :for="id">{{ label }}:</label>
    <div>
      <select :name="id" :id="id" @change="onChange">
        <slot></slot>
      </select>

      <ExpandMoreIcon width="24" height="24" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ExpandMoreIcon from "@/components/icons/ExpandMoreIcon.vue";

export default defineComponent({
  name: "Select1Comp",
  components: {
    ExpandMoreIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: String,
    column: Boolean,
    fillHeight: Boolean,
  },

  methods: {
    // eslint-disable-next-line
    onChange(_event: any) {
      this.$emit("valueChanged", _event.target.value);
    },
  },
});
</script>

<style scoped>
/* ___ SELECT ___ */
.select-1 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.select-1.column {
  flex-direction: column;
  align-items: start;
  gap: 0rem;
}
.select-1 label {
  font-weight: 300;
  font-size: 0.875rem;
}

.select-1 > div {
  position: relative;
  font-size: 1rem;
  color: var(--color-text);

  min-width: max-content;
}
.select-1.fill-height > div {
  height: 100%;
}
.select-1 select {
  width: 100%;
  font-family: inherit;

  /* outline: none; */

  appearance: none;
  /*  safari  */
  -webkit-appearance: none;

  cursor: pointer;

  padding: 0.4em 1.8em 0.4em 0.5em;
  font-size: 1em;
  font-weight: 600;

  color: inherit;
  border: 1px solid var(--color-secondary);
  border-radius: 3px;
  background: none;
}
.select-1.fill-height select {
  height: 100%;
}
.select-1 select::-ms-expand {
  display: none;
}
.select-1 select option {
  background-color: var(--color-secondary);
  color: var(--color-background);
  font-weight: 600;
}
.select-1 svg {
  pointer-events: none;

  position: absolute;
  right: 0.15em;
  top: 50%;
  transform: translateY(-50%);

  width: 1.714285714em;
  height: 1.714285714em;
}
.select-1 > div:has(select:focus) {
  border-color: var(--yellow);
}
</style>
