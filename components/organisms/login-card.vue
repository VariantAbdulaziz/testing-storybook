<template>
  <div
    class="relative flex flex-col gap-6 max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4"
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
    <Hero />
    <AuthForm @submitEmail="handleEmailSubmission" />
    <Divider />
    <div class="flex flex-col w-full mx-auto gap-2">
      <SocialButton :iconSrc="GoogleLogo" label="Continue with Google" />
      <SocialButton :iconSrc="AppleLogo" label="Continue with Facebook" />
      <SocialButton :iconSrc="FacebookLogo" label="Continue with Apple" />
    </div>
    <TermsAndConditions @click="handleTermsClick" />
  </div>
</template>

<script>
import AuthForm from "../molecules/auth-form.vue";
import SocialButton from "../molecules/social-button.vue";
import Divider from "../atoms/divider.vue";
import TermsAndConditions from "../molecules/terms-and-conditions.vue";
import Hero from "../molecules/hero.vue";
import GoogleLogo from "../../assets/img/google-logo.png";
import AppleLogo from "../../assets/img/apple-logo.png";
import FacebookLogo from "../../assets/img/facebook-logo.png";

export default {
  components: {
    AuthForm,
    SocialButton,
    Divider,
    TermsAndConditions,
    Hero,
  },
  setup() {
    return { GoogleLogo, AppleLogo, FacebookLogo };
  },
  methods: {
    handleEmailSubmission(email) {
      console.log("here in login card");
      this.$emit("submitLogin", email);
    },
  },
};
</script>
