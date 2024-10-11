<template>
  <div
    class="relative flex w-full justify-between items-center"
    @click="triggerFileInput"
  >
    <div
      class="relative min-h-24 min-w-24 rounded border transition-all border-white/20 hover:border-white"
    >
      <div class="gradient absolute inset-0 opacity-20"></div>
      <img
        :src="profileImageUrl"
        alt="Profile Image"
        class="absolute inset-0 h-full w-full rounded object-cover"
      />
      <!-- Hidden File Input -->
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        ref="fileInput"
        style="display: none"
        @change="handleImageUpload"
      />
      <div class="absolute inset-0 flex items-end justify-center pb-4"></div>
    </div>
    <div class="text-left ml-4">
      <div class="mb-2 text-base font-semibold text-white">
        Nice to meet you,
      </div>
      <div class="text-white/70 leading-tight text-sm">
        Upload a profile picture and complete your presentation
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import AladiaLogo from "../../assets/img/aladia.png";

export default {
  name: "ProfileUpload",
  props: {
    modelValue: {
      type: File,
      default: null,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const profileImage = ref(props.modelValue);
    const defaultImage = AladiaLogo;
    const fileInput = ref(null);

    const profileImageUrl = computed(() => {
      if (profileImage.value) {
        return URL.createObjectURL(profileImage.value);
      }
      return defaultImage;
    });

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        if (profileImage.value) {
          URL.revokeObjectURL(profileImageUrl.value);
        }
        profileImage.value = file;
        emit("update:modelValue", file);
      }
    };

    const triggerFileInput = (event) => {
      // Prevent triggering the input when clicking on the file input itself
      if (event.target !== fileInput.value) {
        fileInput.value.click();
      }
    };

    return {
      profileImage,
      profileImageUrl,
      handleImageUpload,
      triggerFileInput,
      fileInput,
    };
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(
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
