<template>
  <button class="px-4 py-2 bg-blue-200 text-white rounded hover:bg-blue-700">
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
