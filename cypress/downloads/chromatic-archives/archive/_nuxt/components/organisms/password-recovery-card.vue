import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/password-recovery-card.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import { ref, computed } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959";
import BackToLogin from "/_nuxt/components/molecules/back-to-login.vue";
import InputField from "/_nuxt/components/atoms/input-field.vue";
import Button from "/_nuxt/components/atoms/button.vue";
import Hero from "/_nuxt/components/molecules/hero.vue";
import AladiaLogo from "/_nuxt/assets/img/aladia.png?import";
import LockIcon from "/_nuxt/assets/img/lock.svg?import";
import MailIcon from "/_nuxt/assets/img/mail.svg?import";

const _sfc_main = {
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

import {  resolveComponent as _resolveComponent,  createCommentVNode as _createCommentVNode, normalizeClass as _normalizeClass, withCtx as _withCtx, createStaticVNode as _createStaticVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "relative flex flex-col max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4",
  "data-v-inspector": "components/organisms/password-recovery-card.vue:2:3"
}
const _hoisted_2 = {
  class: "flex flex-col gap-6 mt-6 items-center",
  "data-v-inspector": "components/organisms/password-recovery-card.vue:27:5"
}
const _hoisted_3 = {
  class: "flex flex-col gap-2 items-center justify-center",
  "data-v-inspector": "components/organisms/password-recovery-card.vue:28:7"
}
const _hoisted_4 = {
  class: "mb-6 flex items-center justify-between gap-6",
  "data-v-inspector": "components/organisms/password-recovery-card.vue:34:9"
}
const _hoisted_5 = ["src"]
const _hoisted_6 = {
  class: "flex flex-col items-center gap-3",
  "data-v-inspector": "components/organisms/password-recovery-card.vue:40:11"
}
const _hoisted_7 = ["src"]
const _hoisted_8 = ["src"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BackToLogin = _resolveComponent("BackToLogin")
  const _component_Hero = _resolveComponent("Hero")
  const _component_font_awesome_icon = _resolveComponent("font-awesome-icon")
  const _component_InputField = _resolveComponent("InputField")
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[4] || (_cache[4] = _createStaticVNode("<div class=\"absolute inset-0 rounded-md pointer-events-none\" data-v-inspector=\"components/organisms/password-recovery-card.vue:5:5\" data-v-3f54618a><div class=\"bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/password-recovery-card.vue:6:7\" data-v-3f54618a></div><div class=\"bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/password-recovery-card.vue:9:7\" data-v-3f54618a></div><div class=\"bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/password-recovery-card.vue:12:7\" data-v-3f54618a></div><div class=\"bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/password-recovery-card.vue:15:7\" data-v-3f54618a></div></div>", 1)),
    _createVNode(_component_BackToLogin),
    _createCommentVNode(" Password Recovery Icon and Title "),
    _createVNode(_component_Hero, {
      title: "Password Recovery",
      subtitle: "Retrieve your password account through your registration mail"
    }),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _cache[1] || (_cache[1] = _createElementVNode("p", {
          class: "text-white text-sm mt-2",
          "data-v-inspector": "components/organisms/password-recovery-card.vue:29:9"
        }, "Enter recovery mail", -1 /* HOISTED */)),
        _cache[2] || (_cache[2] = _createElementVNode("p", {
          class: "text-white/50 text-xs text-center mt-1",
          "data-v-inspector": "components/organisms/password-recovery-card.vue:30:9"
        }, " A recovery mail will be sent to this address. Be sure that it is correct before submitting. ", -1 /* HOISTED */)),
        _createElementVNode("div", _hoisted_4, [
          _createElementVNode("img", {
            src: $setup.AladiaLogo,
            alt: "Aladia Logo",
            class: "h-20 w-20 object-cover",
            "data-v-inspector": "components/organisms/password-recovery-card.vue:35:11"
          }, null, 8 /* PROPS */, _hoisted_5),
          _createElementVNode("div", _hoisted_6, [
            _createVNode(_component_font_awesome_icon, {
              icon: ['fas', 'arrow-right'],
              class: "text-xl"
            }),
            _createElementVNode("img", {
              src: $setup.MailIcon,
              alt: "Aladia Logo",
              class: "h-10 w-10 object-contain",
              "data-v-inspector": "components/organisms/password-recovery-card.vue:42:13"
            }, null, 8 /* PROPS */, _hoisted_7)
          ]),
          _createElementVNode("img", {
            src: $setup.LockIcon,
            alt: "Aladia Logo",
            class: "h-20 w-20 object-contain",
            "data-v-inspector": "components/organisms/password-recovery-card.vue:48:11"
          }, null, 8 /* PROPS */, _hoisted_8)
        ])
      ]),
      _createVNode(_component_InputField, {
        inputId: "recovery-email",
        modelValue: $setup.recoveryEmail,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.recoveryEmail) = $event)),
        icon: ['fas', 'envelope'],
        label: "Email Address",
        placeholder: "Enter your email",
        isValid: $setup.isEmailValid,
        errorMessage: "Invalid Email"
      }, null, 8 /* PROPS */, ["modelValue", "isValid"]),
      _createVNode(_component_Button, {
        class: _normalizeClass([
          'relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
          $setup.isEmailValid
            ? 'border-white bg-primary text-white pointer-events-auto opacity-100'
            : 'border-white/0 bg-black text-white pointer-events-none opacity-70',
        ]),
        disabled: !$setup.isEmailValid,
        onClick: $setup.submitRecovery
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createElementVNode("div", {
            class: "gradient absolute w-full h-full inset-0 opacity-50",
            "data-v-inspector": "components/organisms/password-recovery-card.vue:76:9"
          }, null, -1 /* HOISTED */),
          _createElementVNode("div", { "data-v-inspector": "components/organisms/password-recovery-card.vue:77:9" }, "Enter", -1 /* HOISTED */)
        ])),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["class", "disabled", "onClick"])
    ])
  ]))
}

import "/_nuxt/components/organisms/password-recovery-card.vue?vue&type=style&index=0&scoped=3f54618a&lang.css"

_sfc_main.__hmrId = "3f54618a"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-3f54618a"],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/organisms/password-recovery-card.vue"]])
//# sourceMappingURL=data:application/json;base64,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LCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJwYXNzd29yZC1yZWNvdmVyeS1jYXJkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWF4LXctc20gcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLWJsYWNrLzUwIHB4LTggcHktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jYXJkLnZ1ZToyOjNcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC1tZCBwb2ludGVyLWV2ZW50cy1ub25lXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNhcmQudnVlOjU6NVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtWzFweF0gdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNhcmQudnVlOjY6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tbCBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgaC1bMXB4XSB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY2FyZC52dWU6OTo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by1iIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIHRvcC0wIGxlZnQtMCB3LVsxcHhdIGgtZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jYXJkLnZ1ZToxMjo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by10IGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy1bMXB4XSBoLWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY2FyZC52dWU6MTU6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPEJhY2tUb0xvZ2luIC8+XG5cbiAgICA8IS0tIFBhc3N3b3JkIFJlY292ZXJ5IEljb24gYW5kIFRpdGxlIC0tPlxuICAgIDxIZXJvXG4gICAgICB0aXRsZT1cIlBhc3N3b3JkIFJlY292ZXJ5XCJcbiAgICAgIHN1YnRpdGxlPVwiUmV0cmlldmUgeW91ciBwYXNzd29yZCBhY2NvdW50IHRocm91Z2ggeW91ciByZWdpc3RyYXRpb24gbWFpbFwiXG4gICAgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC02IG10LTYgaXRlbXMtY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNhcmQudnVlOjI3OjVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jYXJkLnZ1ZToyODo3XCI+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG10LTJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY2FyZC52dWU6Mjk6OVwiPkVudGVyIHJlY292ZXJ5IG1haWw8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZS81MCB0ZXh0LXhzIHRleHQtY2VudGVyIG10LTFcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY2FyZC52dWU6MzA6OVwiPlxuICAgICAgICAgIEEgcmVjb3ZlcnkgbWFpbCB3aWxsIGJlIHNlbnQgdG8gdGhpcyBhZGRyZXNzLiBCZSBzdXJlIHRoYXQgaXQgaXNcbiAgICAgICAgICBjb3JyZWN0IGJlZm9yZSBzdWJtaXR0aW5nLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jYXJkLnZ1ZTozNDo5XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgOnNyYz1cIkFsYWRpYUxvZ29cIlxuICAgICAgICAgICAgYWx0PVwiQWxhZGlhIExvZ29cIlxuICAgICAgICAgICAgY2xhc3M9XCJoLTIwIHctMjAgb2JqZWN0LWNvdmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNhcmQudnVlOjM1OjExXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtM1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jYXJkLnZ1ZTo0MDoxMVwiPlxuICAgICAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIDppY29uPVwiWydmYXMnLCAnYXJyb3ctcmlnaHQnXVwiIGNsYXNzPVwidGV4dC14bFwiIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIDpzcmM9XCJNYWlsSWNvblwiXG4gICAgICAgICAgICAgIGFsdD1cIkFsYWRpYSBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJoLTEwIHctMTAgb2JqZWN0LWNvbnRhaW5cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY2FyZC52dWU6NDI6MTNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICA6c3JjPVwiTG9ja0ljb25cIlxuICAgICAgICAgICAgYWx0PVwiQWxhZGlhIExvZ29cIlxuICAgICAgICAgICAgY2xhc3M9XCJoLTIwIHctMjAgb2JqZWN0LWNvbnRhaW5cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY2FyZC52dWU6NDg6MTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgIGlucHV0SWQ9XCJyZWNvdmVyeS1lbWFpbFwiXG4gICAgICAgIHYtbW9kZWw9XCJyZWNvdmVyeUVtYWlsXCJcbiAgICAgICAgOmljb249XCJbJ2ZhcycsICdlbnZlbG9wZSddXCJcbiAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgOmlzVmFsaWQ9XCJpc0VtYWlsVmFsaWRcIlxuICAgICAgICBlcnJvck1lc3NhZ2U9XCJJbnZhbGlkIEVtYWlsXCJcbiAgICAgIC8+XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgOmNsYXNzPVwiW1xuICAgICAgICAgICdyZWxhdGl2ZSBmbGV4IGgtMTAgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctYmxhY2sgdGV4dC1jZW50ZXIgdGV4dC1zbSB0cmFuc2l0aW9uLWFsbCcsXG4gICAgICAgICAgaXNFbWFpbFZhbGlkXG4gICAgICAgICAgICA/ICdib3JkZXItd2hpdGUgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHBvaW50ZXItZXZlbnRzLWF1dG8gb3BhY2l0eS0xMDAnXG4gICAgICAgICAgICA6ICdib3JkZXItd2hpdGUvMCBiZy1ibGFjayB0ZXh0LXdoaXRlIHBvaW50ZXItZXZlbnRzLW5vbmUgb3BhY2l0eS03MCcsXG4gICAgICAgIF1cIlxuICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNFbWFpbFZhbGlkXCJcbiAgICAgICAgQGNsaWNrPVwic3VibWl0UmVjb3ZlcnlcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGllbnQgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBpbnNldC0wIG9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY2FyZC52dWU6NzY6OVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jYXJkLnZ1ZTo3Nzo5XCI+RW50ZXI8L2Rpdj5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEJhY2tUb0xvZ2luIGZyb20gXCIuLi9tb2xlY3VsZXMvYmFjay10by1sb2dpbi52dWVcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuLi9hdG9tcy9pbnB1dC1maWVsZC52dWVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2F0b21zL2J1dHRvbi52dWVcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9tb2xlY3VsZXMvaGVyby52dWVcIjtcbmltcG9ydCBBbGFkaWFMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1nL2FsYWRpYS5wbmdcIjtcbmltcG9ydCBMb2NrSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9sb2NrLnN2Z1wiO1xuaW1wb3J0IE1haWxJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1nL21haWwuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJQYXNzd29yZFJlY292ZXJ5Q2FyZFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQmFja1RvTG9naW4sXG4gICAgSW5wdXRGaWVsZCxcbiAgICBCdXR0b24sXG4gICAgSGVybyxcbiAgfSxcbiAgZW1pdHM6IFtcInN1Ym1pdFJlY292ZXJ5XCJdLFxuICBzZXR1cChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICAvLyBMb2NhbCBTdGF0ZSBmb3IgdGhlIEVtYWlsIElucHV0XG4gICAgY29uc3QgcmVjb3ZlcnlFbWFpbCA9IHJlZihcIlwiKTtcblxuICAgIC8vIENvbXB1dGVkIHByb3BlcnR5IHRvIHZhbGlkYXRlIHRoZSBlbWFpbCBmb3JtYXRcbiAgICBjb25zdCBpc0VtYWlsVmFsaWQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIHZhbGlkYXRpbmcgYW4gZW1haWwgYWRkcmVzc1xuICAgICAgY29uc3QgZW1haWxQYXR0ZXJuID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG4gICAgICByZXR1cm4gIXJlY292ZXJ5RW1haWwudmFsdWUgfHwgZW1haWxQYXR0ZXJuLnRlc3QocmVjb3ZlcnlFbWFpbC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBNZXRob2QgdG8gSGFuZGxlIEZvcm0gU3VibWlzc2lvblxuICAgIGZ1bmN0aW9uIHN1Ym1pdFJlY292ZXJ5KCkge1xuICAgICAgaWYgKGlzRW1haWxWYWxpZC52YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY292ZXJ5IEVtYWlsIFN1Ym1pdHRlZDpcIiwgcmVjb3ZlcnlFbWFpbC52YWx1ZSk7XG4gICAgICAgIGVtaXQoXCJzdWJtaXRSZWNvdmVyeVwiLCByZWNvdmVyeUVtYWlsLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCByZWNvdmVyeSBlbWFpbC5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY292ZXJ5RW1haWwsXG4gICAgICBpc0VtYWlsVmFsaWQsXG4gICAgICBzdWJtaXRSZWNvdmVyeSxcbiAgICAgIEFsYWRpYUxvZ28sXG4gICAgICBMb2NrSWNvbixcbiAgICAgIE1haWxJY29uLFxuICAgIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTVkZWcsXG4gICAgI2ZmZjAgOS41NSUsXG4gICAgI2ZmZjAgMzAuMjglLFxuICAgICNmZmY2LFxuICAgICNmZmYwIDQxLjU4JSxcbiAgICAjZmZmMCA1OS4wMiUsXG4gICAgI2ZmZiA2Ny45NyUsXG4gICAgI2ZmZjAgNzQuNTYlLFxuICAgICNmZmZcbiAgKTtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jYXJkLnZ1ZSJ9