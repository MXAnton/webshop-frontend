<template>
  <div class="number-1">
    <label v-if="label != null" :for="id">{{ label }}:</label>
    <div>
      <input
        type="number"
        :name="id"
        :id="id"
        :min="minValue"
        :max="maxValue"
        v-model="value"
        @input="changedValue"
      />
      <button @click="decreaseValue" class="btn-decrease">
        <RemoveIcon />
      </button>
      <button @click="increaseValue" class="btn-increase">
        <AddIcon />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddIcon from "./icons/AddIcon.vue";
import RemoveIcon from "./icons/RemoveIcon.vue";

export default defineComponent({
  name: "NumberInput1Comp",
  components: {
    AddIcon,
    RemoveIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: String,
    minValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      required: true,
    },
    startValue: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      value: 0,
    };
  },

  watch: {
    maxValue() {
      this.changedValue();
    },
  },

  methods: {
    decreaseValue() {
      this.value = Math.max(this.minValue, this.value - 1);

      this.$emit("valueChanged", this.value);
    },
    increaseValue() {
      this.value = Math.min(this.value + 1, this.maxValue);

      this.$emit("valueChanged", this.value);
    },

    changedValue() {
      this.value = Math.max(this.minValue, Math.min(this.value, this.maxValue));

      this.$emit("valueChanged", this.value);
    },
  },

  mounted() {
    this.value = this.startValue;
  },
});
</script>

<style scoped>
/* Remove arrows */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

.number-1 {
  display: flex;
  flex-direction: column;
}
.number-1 label {
  font-weight: 300;
  font-size: 0.875rem;
}

.number-1 > div {
  font-size: 1rem;
  color: var(--color-text);
  border: 1px solid var(--color-secondary);
  border-radius: 3px;

  display: grid;
  grid-template-columns: 3em auto;
}
.number-1 > div:has(input:focus) {
  border-color: var(--yellow);
}

.number-1 input {
  grid-row: 1 / span 2;

  padding: 0.4em 0.5em;
  font-size: 1em;
  font-weight: 600;
  text-align: center;

  color: inherit;
  border: none;
  border-right: 1px solid var(--color-secondary);
  background: none;
  outline: none;
}

.number-1 button {
  grid-column: 2;
  font-size: 1.5rem;
}
.number-1 button svg {
  transform: rotate(0deg);
  transition: transform 0.1s ease-in-out;
}
.number-1 button:active svg {
  transform: rotate(90deg);
}
.btn-decrease {
  grid-row: 2;
  border-top: 1px solid var(--color-secondary);
}
.number-1 .btn-decrease:active svg {
  transform: rotate(-90deg);
}
</style>
