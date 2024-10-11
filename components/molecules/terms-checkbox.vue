<template>
  <div class="flex items-center text-white text-xs">
    <!-- Checkbox Input with v-model to track and emit changes -->
    <input
      type="checkbox"
      id="terms-checkbox"
      v-model="localChecked"
      class="flex h-3 w-3 mr-2 cursor-pointer bg-black items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white"
    />
    <!-- Text and Links -->
    <span>
      I accept
      <a href="#" class="underline text-primary hover:text-white"
        >Terms & Conditions</a
      >
      and
      <a href="#" class="underline text-primary hover:text-white"
        >Privacy Policy</a
      >.
    </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      localChecked: this.modelValue,
    };
  },
  watch: {
    localChecked(newValue) {
      this.$emit("update:checked", newValue);
    },
    modelValue(newValue) {
      this.localChecked = newValue; // Keep sync with parent prop changes
    },
  },
};
</script>

<style scoped></style>
