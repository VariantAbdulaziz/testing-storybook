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
    <!-- Header Section -->
    <BackToLogin class="mb-6" />

    <!-- Form Section -->
    <div class="flex flex-col gap-4 mb-6">
      <!-- Profile Upload Section -->
      <ProfileUpload v-model="profileImage" />
      <div class="flex flex-col gap-1 items-center">
        <TermsCheckbox v-model:checked="isChecked" />
        <p class="text-center text-xs">Enter your details</p>
      </div>
      <InputField :icon="['fas', 'user']" placeholder="Name" v-model="name" />
      <InputField
        :icon="['fas', 'user']"
        placeholder="Surname"
        v-model="surname"
      />
      <InputField
        :icon="['fas', 'envelope']"
        placeholder="Email"
        :isValid="isEmailValid"
        errorMessage="Invalid email"
        v-model="email"
      />
      <InputField
        :icon="['fas', 'lock']"
        placeholder="Password"
        type="password"
        :postfixIcon="true"
        v-model="password"
      />
      <InputField
        :icon="['fas', 'lock']"
        placeholder="Confirm Password"
        type="password"
        :postfixIcon="true"
        v-model="confirmPassword"
        :isValid="matchingPassword"
        errorMessage="Passwords do not match"
      />
    </div>

    <!-- Submit Button -->
    <Button
      :class="[
        'relative flex h-10 w-full mb-2 items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
        isFormValid
          ? 'border-white bg-primary text-white pointer-events-auto opacity-100'
          : 'border-white/0 bg-black text-white pointer-events-none opacity-70',
      ]"
      @click="handleSubmit"
    >
      <div class="gradient absolute w-full h-full inset-0 opacity-50"></div>
      <div>Enter</div>
    </Button>
    <TermsAndConditions @click="handleTermsClick" />
  </div>
</template>

<script>
import BackToLogin from "../molecules/back-to-login.vue";
import ProfileUpload from "../molecules/profile-upload.vue";
import InputField from "../atoms/input-field.vue";
import Button from "../atoms/button.vue";
import TermsCheckbox from "../molecules/terms-checkbox.vue";
import TermsAndConditions from "../molecules/terms-and-conditions.vue";

export default {
  name: "RegistrationCard",
  components: {
    BackToLogin,
    ProfileUpload,
    InputField,
    Button,
    TermsAndConditions,
    TermsCheckbox,
  },
  props: {
    emailIn: {
      type: String,
      required: true,
      default: "user@example.com",
    },
  },
  data() {
    return {
      name: "",
      surname: "",
      email: this.emailIn,
      password: "",
      confirmPassword: "",
      profileImage: "",
      isChecked: false,
    };
  },
  computed: {
    isEmailValid() {
      // Basic email validation regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
    matchingPassword() {
      return this.password === this.confirmPassword;
    },
    isFormValid() {
      return (
        this.isChecked &&
        this.name &&
        this.surname &&
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.isEmailValid &&
        this.matchingPassword
      );
    },
  },
  methods: {
    handleSubmit() {
      if (this.isFormValid) {
        console.log("Form submitted with data:", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          // Include profile image data if needed
        });
        this.$emit("submitRegistration", {
          email: this.email,
          password: this.password,
          name: this.name,
          surname: this.surname,
          profileImage: this.profileImage,
        });
      } else {
        console.error("Form validation failed.");
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
