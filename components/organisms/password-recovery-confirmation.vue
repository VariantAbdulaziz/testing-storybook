<template>
  <div
    class="relative flex flex-col items-center max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4"
  >
    <!-- Background Gradient Border -->
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

    <!-- Password Recovery Icon and Title (Hero Component) -->
    <Hero
      class="mb-6"
      title="Password Recovery"
      subtitle="Retrieve your password account through your registration mail"
    />
    <div class="mb-6 flex flex-col items-center px-6">
      <div class="flex justify-between w-full mb-24">
        <!-- Email Sent Confirmation Message -->
        <p class="text-white text-sm mb-2">Recovery link sent to:</p>
        <p class="text-white/50 text-xs font-medium mb-6">
          {{ recoveryEmail }}
        </p>
      </div>

      <!-- Instruction Text -->
      <p class="text-white/70 text-base text-center mb-32">
        Check your email to change your password!
      </p>
    </div>

    <!-- Resend Email Button (Button Component) -->
    <Button
      class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all"
      @click="sendEmailAgain"
    >
      <div class="gradient absolute w-full h-full inset-0 opacity-50"></div>
      <div>Send Email Again</div>
    </Button>
  </div>
</template>
<script>
import Button from "../atoms/button.vue";
import Hero from "../molecules/hero.vue";
export default {
  name: "PasswordRecoveryConfirmation",
  components: {
    Hero,
    Button,
  },
  props: {
    recoveryEmail: {
      type: String,
      required: true,
      default: "user@example.com", // Default email value if not passed as a prop
    },
  },
  setup(props) {
    // Method to Handle Resend Email Click
    function sendEmailAgain() {
      console.log(`Resend email to: ${props.recoveryEmail}`);
      // Logic to resend the recovery email to the specified address
    }

    return {
      sendEmailAgain,
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
