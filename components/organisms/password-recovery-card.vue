<template>
  <div
    class="relative flex flex-col max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4"
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
    <BackToLogin />

    <!-- Password Recovery Icon and Title -->
    <Hero
      title="Password Recovery"
      subtitle="Retrieve your password account through your registration mail"
    />

    <div class="flex flex-col gap-6 mt-6 items-center">
      <div class="flex flex-col gap-2 items-center justify-center">
        <p class="text-white text-sm mt-2">Enter recovery mail</p>
        <p class="text-white/50 text-xs text-center mt-1">
          A recovery mail will be sent to this address. Be sure that it is
          correct before submitting.
        </p>
        <div class="mb-6 flex items-center justify-between gap-6">
          <img
            :src="AladiaLogo"
            alt="Aladia Logo"
            class="h-20 w-20 object-cover"
          />
          <div class="flex flex-col items-center gap-3">
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-xl" />
            <img
              :src="MailIcon"
              alt="Aladia Logo"
              class="h-10 w-10 object-contain"
            />
          </div>
          <img
            :src="LockIcon"
            alt="Aladia Logo"
            class="h-20 w-20 object-contain"
          />
        </div>
      </div>

      <InputField
        v-model="recoveryEmail"
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
        @click="submitRecovery"
      >
        <div class="gradient absolute w-full h-full inset-0 opacity-50"></div>
        <div>Enter</div>
      </Button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import BackToLogin from "../molecules/back-to-login.vue";
import InputField from "../atoms/input-field.vue";
import Button from "../atoms/button.vue";
import Hero from "../molecules/hero.vue";
import AladiaLogo from "../../assets/img/aladia.png";
import LockIcon from "../../assets/img/lock.svg";
import MailIcon from "../../assets/img/mail.svg";

export default {
  name: "PasswordRecoveryCard",
  components: {
    BackToLogin,
    InputField,
    Button,
    Hero,
  },
  emits: ["submitRecovery"],
  setup(props, { emit }) {
    // Local State for the Email Input
    const recoveryEmail = ref("");

    // Computed property to validate the email format
    const isEmailValid = computed(() => {
      // Regular expression for validating an email address
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !recoveryEmail.value || emailPattern.test(recoveryEmail.value);
    });

    // Method to Handle Form Submission
    function submitRecovery() {
      if (isEmailValid.value) {
        console.log("Recovery Email Submitted:", recoveryEmail.value);
        emit("submitRecovery", recoveryEmail.value);
      } else {
        console.error("Please enter a valid recovery email.");
      }
    }

    return {
      recoveryEmail,
      isEmailValid,
      submitRecovery,
      AladiaLogo,
      LockIcon,
      MailIcon,
    };
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
