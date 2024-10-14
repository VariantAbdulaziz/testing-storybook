<template>
  <button
    :class="[
      'flex text-white items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-sm transition-all hover:bg-white/20 active:scale-95',
      type === 'primary' ? 'bg-black text-white' : 'text-black',
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
