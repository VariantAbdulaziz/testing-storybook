<template>
  <div class="flex flex-col gap-6 items-center">
    <div class="flex justify-center text-white text-sm">Enter your email</div>
    <InputField
      v-model="email"
      :icon="['fas', 'envelope']"
      label="Email Address"
      placeholder="Enter your email"
      :isValid="isEmailValid"
      errorMessage="Invalid Email"
    />
    <Button
      :class="[
        'relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
        isEmailValid
          ? 'border-white bg-primary text-white pointer-events-auto opacity-100'
          : 'border-white/0 bg-black text-white pointer-events-none opacity-70',
      ]"
      :disabled="!isEmailValid"
      @click="handleSubmit"
    >
      <div class="gradient absolute w-full h-full inset-0 opacity-50"></div>
      <div>Enter</div>
    </Button>
  </div>
</template>

<script>
import InputField from "../atoms/input-field.vue";
import Button from "../atoms/button.vue";

export default {
  name: "AuthForm",
  components: {
    InputField,
    Button,
  },
  data() {
    return {
      email: "",
    };
  },
  computed: {
    isEmailValid() {
      // Basic email validation regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
  },
  methods: {
    handleSubmit() {
      if (this.isEmailValid) {
        console.log("Email submitted:", this.email);
        this.$emit("submitEmail", this.email);
      }
    },
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(
    15deg,
    #fff0 9.55%,
    #fff0 30.28%,
    #fff6,
    #fff0 41.58%,
    #fff0 59.02%,
    #fff 67.97%,
    #fff0 74.56%,
    #fff
  );
}
</style>
