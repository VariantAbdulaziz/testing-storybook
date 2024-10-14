<template>
  <div
    class="relative flex flex-col pb-56 max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4"
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
    <!-- Header Section -->
    <BackToLogin />
    <Hero
      title="Welcome to Aladia,"
      subtitle="Create or access your account from here"
      class="mb-6"
    />

    <!-- Password Entry Section -->
    <div class="flex flex-col gap-4 items-center">
      <p class="text-white text-sm">Enter your password</p>
      <div class="w-full flex flex-col">
        <!-- Password Input Field -->
        <InputField
          v-model="password"
          :icon="['fas', 'key']"
          type="password"
          label="Password"
          placeholder="Password"
          :toggle-password="true"
          errorMessage="Password required"
        />
        <!-- Forgot Password -->
        <button
          @click="handleForgotPassword"
          class="self-end mt-1 text-xs text-white/50 underline hover:text-white"
        >
          Forgot Password?
        </button>
      </div>

      <!-- Submit Button -->
      <Button
        class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all"
        @click="handleSubmit"
      >
        <div class="gradient absolute w-full h-full inset-0 opacity-50"></div>
        <div>Enter</div>
      </Button>
    </div>
  </div>
</template>

<script>
import BackToLogin from "../molecules/back-to-login.vue";
import InputField from "../atoms/input-field.vue";
import Button from "../atoms/button.vue";
import Hero from "../molecules/hero.vue";

export default {
  name: "LoginPasswordCard",
  components: {
    BackToLogin,
    InputField,
    Button,
    Hero,
  },
  emits: ["submitPassword", "forgotPassword"],
  data() {
    return {
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.password) {
        console.error("Please enter a password.");
      } else {
        console.log("Password Submitted:", this.password);
        this.$emit("submitPassword", this.password);
      }
    },
    handleForgotPassword() {
      this.$emit("forgotPassword");
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
