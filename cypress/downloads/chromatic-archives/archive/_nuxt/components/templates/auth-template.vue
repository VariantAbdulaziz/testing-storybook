import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/auth-template.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { ref } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959";
import LoginCard from "/_nuxt/components/organisms/login-card.vue";
import RegistrationCard from "/_nuxt/components/organisms/registration-card.vue";
import VerificationCard from "/_nuxt/components/organisms/verification-card.vue";
import PasswordRecoveryCard from "/_nuxt/components/organisms/password-recovery-card.vue";
import PasswordRecoveryConfirmation from "/_nuxt/components/organisms/password-recovery-confirmation.vue";
import LoginPasswordCard from "/_nuxt/components/organisms/login-password-card.vue";

// Define in-memory database

const _sfc_main = {
  __name: 'auth-template',
  setup(__props, { expose: __expose }) {
  __expose();

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

const __returned__ = { database, authStage, enteredEmail, userName, profilePicture, handleLoginSubmit, handlePasswordSubmit, handleRegistrationSubmit, handleForgotPassword, handlePasswordRecoverySubmit, ref, LoginCard, RegistrationCard, VerificationCard, PasswordRecoveryCard, PasswordRecoveryConfirmation, LoginPasswordCard }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode, openBlock as _openBlock, createBlock as _createBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "flex items-center justify-center text-white h-screen bg-black",
  "data-v-inspector": "components/templates/auth-template.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Render Components Conditionally Based on the authStage "),
    ($setup.authStage === 'login')
      ? (_openBlock(), _createBlock($setup["LoginCard"], {
          key: 0,
          onSubmitLogin: $setup.handleLoginSubmit
        }))
      : ($setup.authStage === 'login-password')
        ? (_openBlock(), _createBlock($setup["LoginPasswordCard"], {
            key: 1,
            emailIn: $setup.enteredEmail,
            onForgotPassword: $setup.handleForgotPassword,
            onSubmitPassword: $setup.handlePasswordSubmit
          }, null, 8 /* PROPS */, ["emailIn"]))
        : ($setup.authStage === 'register')
          ? (_openBlock(), _createBlock($setup["RegistrationCard"], {
              key: 2,
              emailIn: $setup.enteredEmail,
              onSubmitRegistration: $setup.handleRegistrationSubmit
            }, null, 8 /* PROPS */, ["emailIn"]))
          : ($setup.authStage === 'verification')
            ? (_openBlock(), _createBlock($setup["VerificationCard"], {
                key: 3,
                userName: $setup.userName
              }, null, 8 /* PROPS */, ["userName"]))
            : ($setup.authStage === 'password-recovery')
              ? (_openBlock(), _createBlock($setup["PasswordRecoveryCard"], {
                  key: 4,
                  recoveryEmail: $setup.enteredEmail,
                  onSubmitRecovery: $setup.handlePasswordRecoverySubmit
                }, null, 8 /* PROPS */, ["recoveryEmail"]))
              : ($setup.authStage === 'password-recovery-confirmation')
                ? (_openBlock(), _createBlock($setup["PasswordRecoveryConfirmation"], {
                    key: 5,
                    recoveryEmail: $setup.enteredEmail
                  }, null, 8 /* PROPS */, ["recoveryEmail"]))
                : _createCommentVNode("v-if", true)
  ]))
}


_sfc_main.__hmrId = "25c21832"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/templates/auth-template.vue"]])
//# sourceMappingURL=data:application/json;base64,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QVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUs7QUFDM0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyRCxDQUFDOzs7Ozs7Ozs7OztFQXRITSxLQUFLLEVBQUMsK0RBQStEO0VBQUMsa0JBQWdCLEVBQUMsNENBQTRDOzs7O3dCQUF4SSxvQkEyQk0sT0EzQk4sVUEyQk07SUExQkosK0VBQStEO0tBQzlDLGdCQUFTO3VCQUExQixhQUEyRTtVQUgvRTtVQUc2QyxhQUFXLEVBQUUsd0JBQWlCOztTQUUxRCxnQkFBUzt5QkFEdEIsYUFLRTtZQVROO1lBTU8sT0FBTyxFQUFFLG1CQUFZO1lBQ3JCLGdCQUFjLEVBQUUsMkJBQW9CO1lBQ3BDLGdCQUFjLEVBQUUsMkJBQW9COztXQUcxQixnQkFBUzsyQkFEdEIsYUFJRTtjQWROO2NBWU8sT0FBTyxFQUFFLG1CQUFZO2NBQ3JCLG9CQUFrQixFQUFFLCtCQUF3Qjs7YUFJbEMsZ0JBQVM7NkJBRnRCLGFBR0U7Z0JBbEJOO2dCQWdCTyxRQUFRLEVBQUUsZUFBUTs7ZUFJUixnQkFBUzsrQkFEdEIsYUFJRTtrQkF2Qk47a0JBcUJPLGFBQWEsRUFBRSxtQkFBWTtrQkFDM0IsZ0JBQWMsRUFBRSxtQ0FBNEI7O2lCQUdsQyxnQkFBUztpQ0FEdEIsYUFHRTtvQkEzQk47b0JBMEJPLGFBQWEsRUFBRSxtQkFBWTs7a0JBMUJsQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYXV0aC10ZW1wbGF0ZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBoLXNjcmVlbiBiZy1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoLXRlbXBsYXRlLnZ1ZToyOjNcIj5cbiAgICA8IS0tIFJlbmRlciBDb21wb25lbnRzIENvbmRpdGlvbmFsbHkgQmFzZWQgb24gdGhlIGF1dGhTdGFnZSAtLT5cbiAgICA8TG9naW5DYXJkIHYtaWY9XCJhdXRoU3RhZ2UgPT09ICdsb2dpbidcIiBAc3VibWl0TG9naW49XCJoYW5kbGVMb2dpblN1Ym1pdFwiIC8+XG4gICAgPExvZ2luUGFzc3dvcmRDYXJkXG4gICAgICB2LWVsc2UtaWY9XCJhdXRoU3RhZ2UgPT09ICdsb2dpbi1wYXNzd29yZCdcIlxuICAgICAgOmVtYWlsSW49XCJlbnRlcmVkRW1haWxcIlxuICAgICAgQGZvcmdvdFBhc3N3b3JkPVwiaGFuZGxlRm9yZ290UGFzc3dvcmRcIlxuICAgICAgQHN1Ym1pdFBhc3N3b3JkPVwiaGFuZGxlUGFzc3dvcmRTdWJtaXRcIlxuICAgIC8+XG4gICAgPFJlZ2lzdHJhdGlvbkNhcmRcbiAgICAgIHYtZWxzZS1pZj1cImF1dGhTdGFnZSA9PT0gJ3JlZ2lzdGVyJ1wiXG4gICAgICA6ZW1haWxJbj1cImVudGVyZWRFbWFpbFwiXG4gICAgICBAc3VibWl0UmVnaXN0cmF0aW9uPVwiaGFuZGxlUmVnaXN0cmF0aW9uU3VibWl0XCJcbiAgICAvPlxuICAgIDxWZXJpZmljYXRpb25DYXJkXG4gICAgICA6dXNlck5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICB2LWVsc2UtaWY9XCJhdXRoU3RhZ2UgPT09ICd2ZXJpZmljYXRpb24nXCJcbiAgICAvPlxuICAgIDxQYXNzd29yZFJlY292ZXJ5Q2FyZFxuICAgICAgdi1lbHNlLWlmPVwiYXV0aFN0YWdlID09PSAncGFzc3dvcmQtcmVjb3ZlcnknXCJcbiAgICAgIDpyZWNvdmVyeUVtYWlsPVwiZW50ZXJlZEVtYWlsXCJcbiAgICAgIEBzdWJtaXRSZWNvdmVyeT1cImhhbmRsZVBhc3N3b3JkUmVjb3ZlcnlTdWJtaXRcIlxuICAgIC8+XG4gICAgPFBhc3N3b3JkUmVjb3ZlcnlDb25maXJtYXRpb25cbiAgICAgIHYtZWxzZS1pZj1cImF1dGhTdGFnZSA9PT0gJ3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbidcIlxuICAgICAgOnJlY292ZXJ5RW1haWw9XCJlbnRlcmVkRW1haWxcIlxuICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBMb2dpbkNhcmQgZnJvbSBcIi4uL29yZ2FuaXNtcy9sb2dpbi1jYXJkLnZ1ZVwiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbkNhcmQgZnJvbSBcIi4uL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWVcIjtcbmltcG9ydCBWZXJpZmljYXRpb25DYXJkIGZyb20gXCIuLi9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlXCI7XG5pbXBvcnQgUGFzc3dvcmRSZWNvdmVyeUNhcmQgZnJvbSBcIi4uL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jYXJkLnZ1ZVwiO1xuaW1wb3J0IFBhc3N3b3JkUmVjb3ZlcnlDb25maXJtYXRpb24gZnJvbSBcIi4uL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlXCI7XG5pbXBvcnQgTG9naW5QYXNzd29yZENhcmQgZnJvbSBcIi4uL29yZ2FuaXNtcy9sb2dpbi1wYXNzd29yZC1jYXJkLnZ1ZVwiO1xuXG4vLyBEZWZpbmUgaW4tbWVtb3J5IGRhdGFiYXNlXG5jb25zdCBkYXRhYmFzZSA9IHJlZihbXG4gIHtcbiAgICBlbWFpbDogXCJ0ZXN0QGV4YW1wbGUuY29tXCIsXG4gICAgcGFzc3dvcmQ6IFwicGFzc3dvcmQxMjMhXCIsXG4gICAgbmFtZTogXCJUZXN0XCIsXG4gICAgc3VybmFtZTogXCJVc2VyXCIsXG4gIH0sXG4gIHtcbiAgICBlbWFpbDogXCJqb2huQGRvZS5jb21cIixcbiAgICBwYXNzd29yZDogXCJwYXNzd29yZDQ1NiFcIixcbiAgICBuYW1lOiBcIlRlc3RcIixcbiAgICBzdXJuYW1lOiBcIlVzZXJcIixcbiAgfSxcbl0pO1xuXG4vLyBTdGF0ZSBtYW5hZ2VtZW50IGZvciBkaWZmZXJlbnQgc3RhZ2VzIG9mIHRoZSBhdXRoZW50aWNhdGlvbiBmbG93XG5jb25zdCBhdXRoU3RhZ2UgPSByZWYoXCJsb2dpblwiKTtcblxuLy8gVHJhY2sgdGhlIHVzZXIncyBpbnB1dFxuY29uc3QgZW50ZXJlZEVtYWlsID0gcmVmKFwiXCIpO1xuY29uc3QgdXNlck5hbWUgPSByZWYoXCJcIik7XG5jb25zdCBwcm9maWxlUGljdHVyZSA9IHJlZihcIlwiKTtcblxuLy8gSGFuZGxlIExvZ2luIEVtYWlsIFN1Ym1pc3Npb25cbmZ1bmN0aW9uIGhhbmRsZUxvZ2luU3VibWl0KGVtYWlsKSB7XG4gIGVudGVyZWRFbWFpbC52YWx1ZSA9IGVtYWlsO1xuICBjb25zb2xlLmxvZyhlbWFpbCwgXCJkb25lIVwiKTtcbiAgLy8gQ2hlY2sgaWYgdGhlIGVtYWlsIGV4aXN0cyBpbiB0aGUgaW4tbWVtb3J5IGRhdGFiYXNlXG4gIGNvbnN0IHVzZXJFeGlzdHMgPSBkYXRhYmFzZS52YWx1ZS5zb21lKCh1c2VyKSA9PiB1c2VyLmVtYWlsID09PSBlbWFpbCk7XG5cbiAgaWYgKHVzZXJFeGlzdHMpIHtcbiAgICAvLyBJZiB0aGUgdXNlciBleGlzdHMsIHByb2NlZWQgdG8gcGFzc3dvcmQgbG9naW5cbiAgICBhdXRoU3RhZ2UudmFsdWUgPSBcImxvZ2luLXBhc3N3b3JkXCI7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgdGhlIHVzZXIgZG9lc24ndCBleGlzdCwgZ28gdG8gdGhlIHJlZ2lzdHJhdGlvbiBzdGFnZVxuICAgIGF1dGhTdGFnZS52YWx1ZSA9IFwicmVnaXN0ZXJcIjtcbiAgfVxufVxuXG4vLyBIYW5kbGUgUGFzc3dvcmQgU3VibWlzc2lvbiAoTG9naW5QYXNzd29yZENhcmQpXG5mdW5jdGlvbiBoYW5kbGVQYXNzd29yZFN1Ym1pdChwYXNzd29yZCkge1xuICBjb25zdCB1c2VyID0gZGF0YWJhc2UudmFsdWUuZmluZChcbiAgICAodXNlcikgPT4gdXNlci5lbWFpbCA9PT0gZW50ZXJlZEVtYWlsLnZhbHVlICYmIHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkXG4gICk7XG5cbiAgaWYgKHVzZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHN1Y2Nlc3NmdWwgZm9yOlwiLCBlbnRlcmVkRW1haWwudmFsdWUpO1xuICAgIGFsZXJ0KFwiTG9naW4gc3VjY2Vzc2Z1bCFcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgcGFzc3dvcmQuXCIpO1xuICAgIGFsZXJ0KFwiSW52YWxpZCBwYXNzd29yZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gIH1cbn1cblxuLy8gSGFuZGxlIFJlZ2lzdHJhdGlvbiBTdWJtaXNzaW9uIChSZWdpc3RyYXRpb25DYXJkKVxuZnVuY3Rpb24gaGFuZGxlUmVnaXN0cmF0aW9uU3VibWl0KHVzZXIpIHtcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIG5hbWUsIHN1cm5hbWUsIHByb2ZpbGVJbWFnZSB9ID0gdXNlcjtcbiAgdXNlck5hbWUudmFsdWUgPSBgJHtuYW1lfSAke3N1cm5hbWV9YDtcbiAgcHJvZmlsZVBpY3R1cmUudmFsdWUgPSBgJHtwcm9maWxlSW1hZ2V9YDtcbiAgZGF0YWJhc2UudmFsdWUucHVzaCh7IGVtYWlsLCBwYXNzd29yZCB9KTtcblxuICAvLyBNb3ZlIHRvIHRoZSB2ZXJpZmljYXRpb24gc3RhZ2UgYWZ0ZXIgc3VjY2Vzc2Z1bCByZWdpc3RyYXRpb25cbiAgYXV0aFN0YWdlLnZhbHVlID0gXCJ2ZXJpZmljYXRpb25cIjtcbn1cblxuLy8gSGFuZGxlIEZvcmdvdCBQYXNzd29yZCBDbGljayAoTG9naW5QYXNzd29yZENhcmQpXG5mdW5jdGlvbiBoYW5kbGVGb3Jnb3RQYXNzd29yZCgpIHtcbiAgLy8gVHJhbnNpdGlvbiB0byB0aGUgUGFzc3dvcmQgUmVjb3Zlcnkgc3RhZ2VcbiAgYXV0aFN0YWdlLnZhbHVlID0gXCJwYXNzd29yZC1yZWNvdmVyeVwiO1xufVxuXG4vLyBIYW5kbGUgUGFzc3dvcmQgUmVjb3ZlcnkgRW1haWwgU3VibWlzc2lvbiAoUGFzc3dvcmRSZWNvdmVyeUNhcmQpXG5mdW5jdGlvbiBoYW5kbGVQYXNzd29yZFJlY292ZXJ5U3VibWl0KGVtYWlsKSB7XG4gIGVudGVyZWRFbWFpbC52YWx1ZSA9IGVtYWlsO1xuICBjb25zb2xlLmxvZyhcIlBhc3N3b3JkIHJlY292ZXJ5IGluaXRpYXRlZCBmb3I6XCIsIGVtYWlsKTtcblxuICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBQYXNzd29yZCBSZWNvdmVyeSBDb25maXJtYXRpb24gc3RhZ2VcbiAgYXV0aFN0YWdlLnZhbHVlID0gXCJwYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb25cIjtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL3RlbXBsYXRlcy9hdXRoLXRlbXBsYXRlLnZ1ZSJ9