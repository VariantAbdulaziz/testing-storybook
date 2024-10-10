<template>
  <div class="flex items-center text-white text-xs">
    <!-- Checkbox Input with v-model to track and emit changes -->
    <input
      type="checkbox"
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

<script setup>
import { ref, watch } from "vue";

// Define props and emit for tracking the checkbox state
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:checked"]);

// Local state for the checkbox
const localChecked = ref(props.modelValue);

// Watch the local state and emit changes to the parent
watch(localChecked, (newValue) => {
  emit("update:checked", newValue);
});
</script>

<style scoped></style>
