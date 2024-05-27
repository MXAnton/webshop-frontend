<template>
  <div class="slider--dual-range">
    <div class="slider">
      <div class="slider-track" ref="sliderTrack"></div>
      <input
        id="min-slider"
        class="slider-1 slider-1__from-slider"
        type="range"
        :min="minValue"
        :max="maxValue"
        v-model="currentMinValue"
        @change="slideMin"
      />
      <input
        id="max-slider"
        class="slider-1"
        type="range"
        :min="minValue"
        :max="maxValue"
        v-model="currentMaxValue"
        @change="slideMax"
      />
    </div>

    <div class="values">
      <input
        type="number"
        name="min-slider-value"
        id="min-slider-value"
        :min="minValue"
        :max="maxValue"
        :maxlength="maxValue.toString().length"
        class="dropdown__option-input"
        v-model="currentMinValue"
        @change="slideMin"
      />
      <RemoveIcon width="12" height="12" />
      <input
        type="number"
        name="max-price"
        id="max-price"
        :min="minValue"
        :max="maxValue"
        :maxlength="maxValue.toString().length"
        class="dropdown__option-input"
        v-model="currentMaxValue"
        @change="slideMax"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import RemoveIcon from "@/components/icons/RemoveIcon.vue";

export default defineComponent({
  name: "SliderDoubleComp",
  components: {
    RemoveIcon,
  },
  props: {
    minValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 9999,
    },
    valueGapPercentage: {
      type: Number,
      default: 8,
    },
  },

  data() {
    return {
      currentMinValue: this.minValue as number,
      currentMaxValue: this.maxValue as number,

      sliderTrack: this.$refs.sliderTrack as HTMLDivElement,
    };
  },

  computed: {
    valueOffset() {
      return Math.ceil((this.valueGapPercentage / 100) * this.valueRange);
    },
    valueRange() {
      return this.maxValue - this.minValue;
    },
  },

  methods: {
    slideMin() {
      if (
        (this.currentMaxValue - this.currentMinValue) / this.valueRange <=
        this.valueGapPercentage / 100
      ) {
        this.currentMinValue = Math.floor(
          this.currentMaxValue - this.valueOffset
        );
      }

      if (this.currentMinValue < this.minValue) {
        this.currentMinValue = this.minValue;
      }

      this.fillColor();

      this.$emit("min-changed", this.currentMinValue);
    },
    slideMax() {
      if (
        (this.currentMaxValue - this.currentMinValue) / this.valueRange <=
        this.valueGapPercentage / 100
      ) {
        this.currentMaxValue = Math.floor(
          +this.currentMinValue + this.valueOffset
        );
      }

      if (this.currentMaxValue > this.maxValue) {
        this.currentMaxValue = this.maxValue;
      }

      this.fillColor();

      this.$emit("max-changed", this.currentMaxValue);
    },
    fillColor() {
      let percent1 =
        ((this.currentMinValue - this.minValue) / this.valueRange) * 100;
      let percent2 =
        ((this.currentMaxValue - this.minValue) / this.valueRange) * 100;

      this.sliderTrack.style.left = percent1 + "%";
      this.sliderTrack.style.right = 100 - percent2 + "%";
      // this.sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    },
  },

  mounted() {
    this.sliderTrack = this.$refs.sliderTrack as HTMLDivElement;
    this.fillColor();
  },
});
</script>

<style scoped>
.slider--dual-range {
  font-size: 1rem;
  width: 100%;
}

/* ___ SLIDER ___ */
.slider {
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 1.125em;

  margin-bottom: 0.75em;

  border: 1px solid var(--color-secondary);
  border-radius: 1.5em;
}

input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  overflow: visible;
  outline: none;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}
.slider-track {
  /* width: 100%; */
  height: 0.875em;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 1em;

  left: 0;
  right: 0;

  background-color: var(--color-secondary);

  transform: scaleY(1);
  transition: opacity 0.3s ease-in-out, transform 0.2s ease-in-out;
}
.slider:has(input[type="range"]:active) .slider-track {
  opacity: 0.9;
  transform: scaleY(0.95);
}
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 0.875em;
}
input[type="range"]::-moz-range-track {
  -moz-appearance: none;
  height: 0.875em;
}
input[type="range"]::-ms-track {
  appearance: none;
  height: 0.875em;
}
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  height: 1.5em;
  width: 1.5em;
  background-color: var(--color-text);
  cursor: pointer;
  margin-top: -0.35em;
  pointer-events: auto;
  border-radius: 50%;

  transform: scale(1);
  transition: transform 0.1s ease-in-out, background-color 0.2s ease-in-out;
}
input[type="range"]::-moz-range-thumb {
  appearance: none;
  -webkit-appearance: none;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--color-text);
  pointer-events: auto;
}
input[type="range"]::-ms-thumb {
  appearance: none;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--color-text);
  pointer-events: auto;
}
input[type="range"]:focus-visible::-webkit-slider-thumb {
  outline: 1px solid var(--yellow);
}
input[type="range"]:active::-webkit-slider-thumb {
  background-color: var(--color-secondary);
  transform: scale(0.9);
}

/* VALUES */
.values {
  display: flex;
  align-items: center;
  gap: 0.375em;
}
</style>
