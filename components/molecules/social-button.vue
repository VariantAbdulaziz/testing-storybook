<template>
  <Button
    class="flex w-full items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
    :type="'secondary'"
    @click="onClick"
  >
    <img :src="iconSrc" class="ml-auto h-6 w-6" />
    <span class="flex-1 max-w-56 text-left">{{ label }}</span>
  </Button>
</template>

<script>
import Button from "../atoms/button.vue";
export default {
  components: { Button },
  props: {
    iconSrc: String,
    label: String,
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
