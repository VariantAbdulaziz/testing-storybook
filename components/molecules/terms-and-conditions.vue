<template>
  <div
    class="cursor-pointer text-center text-white/40 transition-colors hover:text-white focus:text-white focus:outline-none"
    role="button"
    tabindex="0"
    @click="onClick"
    @keydown.enter="onClick"
  >
    Terms &amp; Conditions
  </div>
</template>

<script>
export default {
  name: "TermsAndConditions",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
