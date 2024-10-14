<template>
  <div
    class="relative flex flex-col items-center w-full max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4"
  >
    <div class="absolute inset-0 rounded-md pointer-events-none">
      <div
        class="bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full"
      ></div>
      <div
        class="bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full"
      ></div>
      <div
        class="bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full"
      ></div>
      <div
        class="bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full"
      ></div>
    </div>

    <!-- User Info section -->
    <div class="h-24 w-24 rounded">
      <img
        :src="logo"
        alt="Profile picture"
        class="inset-0 h-full w-full rounded object-cover"
      />
    </div>
    <h2 class="text-white text-xl font-semibold">{{ userName }}</h2>

    <!-- Welcome Text -->
    <p class="text-white/70 mt-4">Thanks for joining Aladia.</p>

    <!-- Instruction Text -->
    <p class="text-white/70 text-center mt-8">
      Please enter below the 6-digit code we sent you through your registration
      e-mail:
    </p>

    <!-- Code Input Fields -->
    <div class="flex justify-center gap-2 mt-16">
      <input
        v-for="(digit, index) in code"
        :key="index"
        type="text"
        maxlength="1"
        v-model="code[index]"
        @input="focusNext(index)"
        :ref="'input' + index"
        class="w-8 h-8 text-center text-black text-lg rounded-md border border-gray-300"
      />
    </div>

    <!-- Help Text -->
    <p class="text-white/70 text-xs mt-2">You didn't receive any mail?</p>

    <!-- Submit Button -->
    <Button
      :class="[
        'relative flex h-10 w-full mt-16 mb-8 items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
      ]"
      @click="handleSubmit"
    >
      <div class="gradient absolute w-full h-full inset-0 opacity-50"></div>
      <div>Enter</div>
    </Button>
  </div>
</template>

<script>
import defaultLogo from "../../assets/img/aladia.png";
import Button from "../atoms/button.vue";

export default {
  name: "VerificationCard",
  components: {
    Button,
  },
  props: {
    userName: {
      type: String,
      default: "Aladia User",
    },
    logo: {
      type: String,
      default: defaultLogo,
    },
  },
  data() {
    return {
      code: ["", "", "", "", "", ""],
    };
  },
  methods: {
    focusNext(index) {
      if (this.code[index].length === 1 && index < this.code.length - 1) {
        const nextInput = this.$refs["input" + (index + 1)];
        if (nextInput) {
          nextInput.focus();
        }
      }
    },
    handleSubmit() {
      const codeString = this.code.join("");
      if (codeString.length === 6) {
        console.log("Submitted Code:", codeString);
        // Handle submission logic here, e.g., call an API.
      } else {
        console.error("Please enter the complete 6-digit code.");
      }
    },
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
