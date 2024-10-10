<template>
  <div class="flex items-center justify-center text-white h-screen bg-black">
    <!-- Render Components Conditionally Based on the authStage -->
    <LoginCard v-if="authStage === 'login'" @submitLogin="handleLoginSubmit" />
    <LoginPasswordCard
      v-else-if="authStage === 'login-password'"
      :emailIn="enteredEmail"
      @forgotPassword="handleForgotPassword"
      @submitPassword="handlePasswordSubmit"
    />
    <RegistrationCard
      v-else-if="authStage === 'register'"
      :emailIn="enteredEmail"
      @submitRegistration="handleRegistrationSubmit"
    />
    <VerificationCard
      :userName="userName"
      v-else-if="authStage === 'verification'"
    />
    <PasswordRecoveryCard
      v-else-if="authStage === 'password-recovery'"
      :recoveryEmail="enteredEmail"
      @submitRecovery="handlePasswordRecoverySubmit"
    />
    <PasswordRecoveryConfirmation
      v-else-if="authStage === 'password-recovery-confirmation'"
      :recoveryEmail="enteredEmail"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginCard from "../organisms/login-card.vue";
import RegistrationCard from "../organisms/registration-card.vue";
import VerificationCard from "../organisms/verification-card.vue";
import PasswordRecoveryCard from "../organisms/password-recovery-card.vue";
import PasswordRecoveryConfirmation from "../organisms/password-recovery-confirmation.vue";
import LoginPasswordCard from "../organisms/login-password-card.vue";

// Define in-memory database
const database = ref([
  {
    email: "test@example.com",
    password: "password123!",
    name: "Test",
    surname: "User",
  },
  {
    email: "john@doe.com",
    password: "password456!",
    name: "Test",
    surname: "User",
  },
]);

// State management for different stages of the authentication flow
const authStage = ref("login");

// Track the user's input
const enteredEmail = ref("");
const userName = ref("");
const profilePicture = ref("");

// Handle Login Email Submission
function handleLoginSubmit(email) {
  enteredEmail.value = email;
  console.log(email, "done!");
  // Check if the email exists in the in-memory database
  const userExists = database.value.some((user) => user.email === email);

  if (userExists) {
    // If the user exists, proceed to password login
    authStage.value = "login-password";
  } else {
    // If the user doesn't exist, go to the registration stage
    authStage.value = "register";
  }
}

// Handle Password Submission (LoginPasswordCard)
function handlePasswordSubmit(password) {
  const user = database.value.find(
    (user) => user.email === enteredEmail.value && user.password === password
  );

  if (user) {
    console.log("Login successful for:", enteredEmail.value);
    alert("Login successful!");
  } else {
    console.error("Invalid password.");
    alert("Invalid password, please try again.");
  }
}

// Handle Registration Submission (RegistrationCard)
function handleRegistrationSubmit(user) {
  const { email, password, name, surname, profileImage } = user;
  userName.value = `${name} ${surname}`;
  profilePicture.value = `${profileImage}`;
  database.value.push({ email, password });

  // Move to the verification stage after successful registration
  authStage.value = "verification";
}

// Handle Forgot Password Click (LoginPasswordCard)
function handleForgotPassword() {
  // Transition to the Password Recovery stage
  authStage.value = "password-recovery";
}

// Handle Password Recovery Email Submission (PasswordRecoveryCard)
function handlePasswordRecoverySubmit(email) {
  enteredEmail.value = email;
  console.log("Password recovery initiated for:", email);

  // Transition to the Password Recovery Confirmation stage
  authStage.value = "password-recovery-confirmation";
}
</script>

<style scoped></style>
