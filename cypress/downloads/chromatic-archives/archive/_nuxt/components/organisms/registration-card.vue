import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/registration-card.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import BackToLogin from "/_nuxt/components/molecules/back-to-login.vue";
import ProfileUpload from "/_nuxt/components/molecules/profile-upload.vue";
import InputField from "/_nuxt/components/atoms/input-field.vue";
import Button from "/_nuxt/components/atoms/button.vue";
import TermsCheckbox from "/_nuxt/components/molecules/terms-checkbox.vue";
import TermsAndConditions from "/_nuxt/components/molecules/terms-and-conditions.vue";

const _sfc_main = {
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

import {  createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent,  normalizeClass as _normalizeClass, withCtx as _withCtx, createStaticVNode as _createStaticVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "relative flex flex-col max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4",
  "data-v-inspector": "components/organisms/registration-card.vue:2:3"
}
const _hoisted_2 = {
  class: "flex flex-col gap-4 mb-6",
  "data-v-inspector": "components/organisms/registration-card.vue:23:5"
}
const _hoisted_3 = {
  class: "flex flex-col gap-1 items-center",
  "data-v-inspector": "components/organisms/registration-card.vue:26:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BackToLogin = _resolveComponent("BackToLogin")
  const _component_ProfileUpload = _resolveComponent("ProfileUpload")
  const _component_TermsCheckbox = _resolveComponent("TermsCheckbox")
  const _component_InputField = _resolveComponent("InputField")
  const _component_Button = _resolveComponent("Button")
  const _component_TermsAndConditions = _resolveComponent("TermsAndConditions")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[9] || (_cache[9] = _createStaticVNode("<div class=\"absolute inset-0 rounded-md pointer-events-none\" data-v-inspector=\"components/organisms/registration-card.vue:5:5\" data-v-416921e3><div class=\"bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/registration-card.vue:6:7\" data-v-416921e3></div><div class=\"bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/registration-card.vue:9:7\" data-v-416921e3></div><div class=\"bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/registration-card.vue:12:7\" data-v-416921e3></div><div class=\"bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/registration-card.vue:15:7\" data-v-416921e3></div></div>", 1)),
    _createCommentVNode(" Header Section "),
    _createVNode(_component_BackToLogin, { class: "mb-6" }),
    _createCommentVNode(" Form Section "),
    _createElementVNode("div", _hoisted_2, [
      _createCommentVNode(" Profile Upload Section "),
      _createVNode(_component_ProfileUpload, {
        modelValue: $data.profileImage,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.profileImage) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createElementVNode("div", _hoisted_3, [
        _createVNode(_component_TermsCheckbox, {
          checked: $data.isChecked,
          "onUpdate:checked": _cache[1] || (_cache[1] = $event => (($data.isChecked) = $event))
        }, null, 8 /* PROPS */, ["checked"]),
        _cache[7] || (_cache[7] = _createElementVNode("p", {
          class: "text-center text-xs",
          "data-v-inspector": "components/organisms/registration-card.vue:28:9"
        }, "Enter your details", -1 /* HOISTED */))
      ]),
      _createVNode(_component_InputField, {
        inputId: "name",
        icon: ['fas', 'user'],
        placeholder: "Name",
        modelValue: $data.name,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($data.name) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode(_component_InputField, {
        inputId: "surname",
        icon: ['fas', 'user'],
        placeholder: "Surname",
        modelValue: $data.surname,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($data.surname) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode(_component_InputField, {
        inputId: "email",
        icon: ['fas', 'envelope'],
        placeholder: "Email",
        isValid: $options.isEmailValid,
        errorMessage: "Invalid email",
        modelValue: $data.email,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($data.email) = $event))
      }, null, 8 /* PROPS */, ["isValid", "modelValue"]),
      _createVNode(_component_InputField, {
        inputId: "password",
        icon: ['fas', 'lock'],
        placeholder: "Password",
        type: "password",
        postfixIcon: true,
        modelValue: $data.password,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($data.password) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode(_component_InputField, {
        inputId: "password",
        icon: ['fas', 'lock'],
        placeholder: "Confirm Password",
        type: "password",
        postfixIcon: true,
        modelValue: $data.confirmPassword,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($data.confirmPassword) = $event)),
        isValid: $options.matchingPassword,
        errorMessage: "Passwords do not match"
      }, null, 8 /* PROPS */, ["modelValue", "isValid"])
    ]),
    _createCommentVNode(" Submit Button "),
    _createVNode(_component_Button, {
      class: _normalizeClass([
        'relative flex h-10 w-full mb-2 items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
        $options.isFormValid
          ? 'border-white bg-primary text-white pointer-events-auto opacity-100'
          : 'border-white/0 bg-black text-white pointer-events-none opacity-70',
      ]),
      onClick: $options.handleSubmit
    }, {
      default: _withCtx(() => _cache[8] || (_cache[8] = [
        _createElementVNode("div", {
          class: "gradient absolute w-full h-full inset-0 opacity-50",
          "data-v-inspector": "components/organisms/registration-card.vue:80:7"
        }, null, -1 /* HOISTED */),
        _createElementVNode("div", { "data-v-inspector": "components/organisms/registration-card.vue:81:7" }, "Enter", -1 /* HOISTED */)
      ])),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["class", "onClick"]),
    _createVNode(_component_TermsAndConditions, { onClick: _ctx.handleTermsClick }, null, 8 /* PROPS */, ["onClick"])
  ]))
}

import "/_nuxt/components/organisms/registration-card.vue?vue&type=style&index=0&scoped=416921e3&lang.css"

_sfc_main.__hmrId = "416921e3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-416921e3"],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/organisms/registration-card.vue"]])
//# sourceMappingURL=data:application/json;base64,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RSxJQUFJO1FBdEQxQixZQXVEaUIsY0FBUTtRQXZEekIsNkRBdURpQixjQUFROztNQUVuQixhQVNFO1FBUkEsT0FBTyxFQUFDLFVBQVU7UUFDakIsSUFBSSxFQUFFLGVBQWU7UUFDdEIsV0FBVyxFQUFDLGtCQUFrQjtRQUM5QixJQUFJLEVBQUMsVUFBVTtRQUNkLFdBQVcsRUFBRSxJQUFJO1FBOUQxQixZQStEaUIscUJBQWU7UUEvRGhDLDZEQStEaUIscUJBQWU7UUFDdkIsT0FBTyxFQUFFLHlCQUFnQjtRQUMxQixZQUFZLEVBQUMsd0JBQXdCOzs7SUFJekMsc0NBQXNCO0lBQ3RCLGFBV1M7TUFWTixLQUFLLEVBdkVaOztRQXVFNEssb0JBQVc7Ozs7TUFNaEwsT0FBSyxFQUFFLHFCQUFZOztNQTdFMUIsa0JBK0VNLENBQXlJO1FBQXpJLG9CQUF5STtVQUFwSSxLQUFLLEVBQUMsb0RBQW9EO1VBQUMsa0JBQWdCLEVBQUMsaURBQWlEOztRQUNsSSxvQkFBbUYsU0FBOUUsa0JBQWdCLEVBQUMsaURBQWlELElBQUMsT0FBSzs7TUFoRm5GOztJQWtGSSxhQUFnRCxpQ0FBM0IsT0FBSyxFQUFFLHFCQUFnQiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicmVnaXN0cmF0aW9uLWNhcmQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtYXgtdy1zbSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctYmxhY2svNTAgcHgtOCBweS00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3JlZ2lzdHJhdGlvbi1jYXJkLnZ1ZToyOjNcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC1tZCBwb2ludGVyLWV2ZW50cy1ub25lXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3JlZ2lzdHJhdGlvbi1jYXJkLnZ1ZTo1OjVcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIHRvcC0wIGxlZnQtMCBoLVsxcHhdIHctZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWU6Njo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by1sIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBoLVsxcHhdIHctZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWU6OTo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by1iIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIHRvcC0wIGxlZnQtMCB3LVsxcHhdIGgtZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWU6MTI6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tdCBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctWzFweF0gaC1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3JlZ2lzdHJhdGlvbi1jYXJkLnZ1ZToxNTo3XCJcbiAgICAgID48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIEhlYWRlciBTZWN0aW9uIC0tPlxuICAgIDxCYWNrVG9Mb2dpbiBjbGFzcz1cIm1iLTZcIiAvPlxuXG4gICAgPCEtLSBGb3JtIFNlY3Rpb24gLS0+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgZ2FwLTQgbWItNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWU6MjM6NVwiPlxuICAgICAgPCEtLSBQcm9maWxlIFVwbG9hZCBTZWN0aW9uIC0tPlxuICAgICAgPFByb2ZpbGVVcGxvYWQgdi1tb2RlbD1cInByb2ZpbGVJbWFnZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBnYXAtMSBpdGVtcy1jZW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcmVnaXN0cmF0aW9uLWNhcmQudnVlOjI2OjdcIj5cbiAgICAgICAgPFRlcm1zQ2hlY2tib3ggdi1tb2RlbDpjaGVja2VkPVwiaXNDaGVja2VkXCIgLz5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhzXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3JlZ2lzdHJhdGlvbi1jYXJkLnZ1ZToyODo5XCI+RW50ZXIgeW91ciBkZXRhaWxzPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8SW5wdXRGaWVsZFxuICAgICAgICBpbnB1dElkPVwibmFtZVwiXG4gICAgICAgIDppY29uPVwiWydmYXMnLCAndXNlciddXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgdi1tb2RlbD1cIm5hbWVcIlxuICAgICAgLz5cbiAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgIGlucHV0SWQ9XCJzdXJuYW1lXCJcbiAgICAgICAgOmljb249XCJbJ2ZhcycsICd1c2VyJ11cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlN1cm5hbWVcIlxuICAgICAgICB2LW1vZGVsPVwic3VybmFtZVwiXG4gICAgICAvPlxuICAgICAgPElucHV0RmllbGRcbiAgICAgICAgaW5wdXRJZD1cImVtYWlsXCJcbiAgICAgICAgOmljb249XCJbJ2ZhcycsICdlbnZlbG9wZSddXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgIDppc1ZhbGlkPVwiaXNFbWFpbFZhbGlkXCJcbiAgICAgICAgZXJyb3JNZXNzYWdlPVwiSW52YWxpZCBlbWFpbFwiXG4gICAgICAgIHYtbW9kZWw9XCJlbWFpbFwiXG4gICAgICAvPlxuICAgICAgPElucHV0RmllbGRcbiAgICAgICAgaW5wdXRJZD1cInBhc3N3b3JkXCJcbiAgICAgICAgOmljb249XCJbJ2ZhcycsICdsb2NrJ11cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgOnBvc3RmaXhJY29uPVwidHJ1ZVwiXG4gICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAvPlxuICAgICAgPElucHV0RmllbGRcbiAgICAgICAgaW5wdXRJZD1cInBhc3N3b3JkXCJcbiAgICAgICAgOmljb249XCJbJ2ZhcycsICdsb2NrJ11cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICA6cG9zdGZpeEljb249XCJ0cnVlXCJcbiAgICAgICAgdi1tb2RlbD1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgIDppc1ZhbGlkPVwibWF0Y2hpbmdQYXNzd29yZFwiXG4gICAgICAgIGVycm9yTWVzc2FnZT1cIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gU3VibWl0IEJ1dHRvbiAtLT5cbiAgICA8QnV0dG9uXG4gICAgICA6Y2xhc3M9XCJbXG4gICAgICAgICdyZWxhdGl2ZSBmbGV4IGgtMTAgdy1mdWxsIG1iLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1ibGFjayB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRyYW5zaXRpb24tYWxsJyxcbiAgICAgICAgaXNGb3JtVmFsaWRcbiAgICAgICAgICA/ICdib3JkZXItd2hpdGUgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHBvaW50ZXItZXZlbnRzLWF1dG8gb3BhY2l0eS0xMDAnXG4gICAgICAgICAgOiAnYm9yZGVyLXdoaXRlLzAgYmctYmxhY2sgdGV4dC13aGl0ZSBwb2ludGVyLWV2ZW50cy1ub25lIG9wYWNpdHktNzAnLFxuICAgICAgXVwiXG4gICAgICBAY2xpY2s9XCJoYW5kbGVTdWJtaXRcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmFkaWVudCBhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGluc2V0LTAgb3BhY2l0eS01MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWU6ODA6N1wiPjwvZGl2PlxuICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcmVnaXN0cmF0aW9uLWNhcmQudnVlOjgxOjdcIj5FbnRlcjwvZGl2PlxuICAgIDwvQnV0dG9uPlxuICAgIDxUZXJtc0FuZENvbmRpdGlvbnMgQGNsaWNrPVwiaGFuZGxlVGVybXNDbGlja1wiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBCYWNrVG9Mb2dpbiBmcm9tIFwiLi4vbW9sZWN1bGVzL2JhY2stdG8tbG9naW4udnVlXCI7XG5pbXBvcnQgUHJvZmlsZVVwbG9hZCBmcm9tIFwiLi4vbW9sZWN1bGVzL3Byb2ZpbGUtdXBsb2FkLnZ1ZVwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4uL2F0b21zL2lucHV0LWZpZWxkLnZ1ZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYXRvbXMvYnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IFRlcm1zQ2hlY2tib3ggZnJvbSBcIi4uL21vbGVjdWxlcy90ZXJtcy1jaGVja2JveC52dWVcIjtcbmltcG9ydCBUZXJtc0FuZENvbmRpdGlvbnMgZnJvbSBcIi4uL21vbGVjdWxlcy90ZXJtcy1hbmQtY29uZGl0aW9ucy52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlJlZ2lzdHJhdGlvbkNhcmRcIixcbiAgY29tcG9uZW50czoge1xuICAgIEJhY2tUb0xvZ2luLFxuICAgIFByb2ZpbGVVcGxvYWQsXG4gICAgSW5wdXRGaWVsZCxcbiAgICBCdXR0b24sXG4gICAgVGVybXNBbmRDb25kaXRpb25zLFxuICAgIFRlcm1zQ2hlY2tib3gsXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgZW1haWxJbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiBcInVzZXJAZXhhbXBsZS5jb21cIixcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgc3VybmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsSW4sXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcbiAgICAgIHByb2ZpbGVJbWFnZTogXCJcIixcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0VtYWlsVmFsaWQoKSB7XG4gICAgICAvLyBCYXNpYyBlbWFpbCB2YWxpZGF0aW9uIHJlZ2V4IHBhdHRlcm5cbiAgICAgIGNvbnN0IGVtYWlsUGF0dGVybiA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgICAgcmV0dXJuIGVtYWlsUGF0dGVybi50ZXN0KHRoaXMuZW1haWwpO1xuICAgIH0sXG4gICAgbWF0Y2hpbmdQYXNzd29yZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhc3N3b3JkID09PSB0aGlzLmNvbmZpcm1QYXNzd29yZDtcbiAgICB9LFxuICAgIGlzRm9ybVZhbGlkKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgJiZcbiAgICAgICAgdGhpcy5uYW1lICYmXG4gICAgICAgIHRoaXMuc3VybmFtZSAmJlxuICAgICAgICB0aGlzLmVtYWlsICYmXG4gICAgICAgIHRoaXMucGFzc3dvcmQgJiZcbiAgICAgICAgdGhpcy5jb25maXJtUGFzc3dvcmQgJiZcbiAgICAgICAgdGhpcy5pc0VtYWlsVmFsaWQgJiZcbiAgICAgICAgdGhpcy5tYXRjaGluZ1Bhc3N3b3JkXG4gICAgICApO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICBpZiAodGhpcy5pc0Zvcm1WYWxpZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZvcm0gc3VibWl0dGVkIHdpdGggZGF0YTpcIiwge1xuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXJuYW1lOiB0aGlzLnN1cm5hbWUsXG4gICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgY29uZmlybVBhc3N3b3JkOiB0aGlzLmNvbmZpcm1QYXNzd29yZCxcbiAgICAgICAgICAvLyBJbmNsdWRlIHByb2ZpbGUgaW1hZ2UgZGF0YSBpZiBuZWVkZWRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGVtaXQoXCJzdWJtaXRSZWdpc3RyYXRpb25cIiwge1xuICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXJuYW1lOiB0aGlzLnN1cm5hbWUsXG4gICAgICAgICAgcHJvZmlsZUltYWdlOiB0aGlzLnByb2ZpbGVJbWFnZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRm9ybSB2YWxpZGF0aW9uIGZhaWxlZC5cIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxNWRlZyxcbiAgICAjZmZmMCA4LjMzJSxcbiAgICAjZmZmMCAyNy40MyUsXG4gICAgI2ZmZjYsXG4gICAgI2ZmZjAgMzcuODUlLFxuICAgICNmZmYwIDUzLjkxJSxcbiAgICAjZmZmIDYyLjE1JSxcbiAgICAjZmZmMCA2OC4yMyUsXG4gICAgI2ZmZiA5MS42NyVcbiAgKTtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL29yZ2FuaXNtcy9yZWdpc3RyYXRpb24tY2FyZC52dWUifQ==