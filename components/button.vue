<template>
  <button class="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Click Me",
    },
  },
};
</script>

<style scoped></style>
