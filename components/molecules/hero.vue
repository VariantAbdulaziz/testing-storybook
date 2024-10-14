<template>
  <div
    class="relative flex items-center justify-between overflow-hidden rounded border border-white/20 bg-black/80 px-8 py-6 opacity-80"
  >
    <!-- Background Gradient -->
    <div class="absolute inset-0 gradient opacity-[0.15]"></div>
    <div class="relative flex w-full justify-between items-center">
      <img :src="AladiaLogo" alt="Aladia Logo" class="h-20 w-20 object-cover" />
      <div class="text-left max-w-40 ml-4">
        <div class="mb-2 text-base font-semibold text-white">
          {{ title }}
        </div>
        <div class="text-white/70 leading-tight text-sm">
          {{ subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AladiaLogo from "../../assets/img/aladia.png";

export default {
  name: "Hero",
  props: {
    title: {
      type: String,
      default: "Welcome to Aladia,", // Default title if none is provided
    },
    subtitle: {
      type: String,
      default: "Create or access your account from here", // Default subtitle if none is provided
    },
  },
  setup() {
    return { AladiaLogo };
  },
};
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(
    15deg,
    #fff0 8.33%,
    #fff0 27.43%,
    #fff6,
    #fff0 37.85%,
    #fff0 53.91%,
    #fff 62.15%,
    #fff0 68.23%,
    #fff 91.67%
  );
}
</style>
