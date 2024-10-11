<template>
  <div
    class="flex items-center mb-4 w-full gap-2 justify-center cursor-pointer"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <font-awesome-icon
      :key="currentIcon[1]"
      :icon="currentIcon"
      class="text-sm"
      :class="iconClass"
    />
    <span :class="textClass">Back to Log in</span>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "BackToLogin",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    currentIcon() {
      return this.isHovered ? ["fas", "arrow-left"] : ["fas", "chevron-left"];
    },
    textClass() {
      return this.isHovered ? "text-white" : "text-white/70";
    },
    iconClass() {
      return this.isHovered ? "text-white" : "text-white/70";
    },
  },
};
</script>

<style scoped></style>
