import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/login-password-card.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import InputField from "/_nuxt/components/atoms/input-field.vue";
import Button from "/_nuxt/components/atoms/button.vue";
import Hero from "/_nuxt/components/molecules/hero.vue";

const _sfc_main = {
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

import {  createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent,  withCtx as _withCtx, createStaticVNode as _createStaticVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "relative flex flex-col pb-56 max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4",
  "data-v-inspector": "components/organisms/login-password-card.vue:2:3"
}
const _hoisted_2 = {
  class: "flex flex-col gap-4 items-center",
  "data-v-inspector": "components/organisms/login-password-card.vue:28:5"
}
const _hoisted_3 = {
  class: "w-full flex flex-col",
  "data-v-inspector": "components/organisms/login-password-card.vue:30:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BackToLogin = _resolveComponent("BackToLogin")
  const _component_Hero = _resolveComponent("Hero")
  const _component_InputField = _resolveComponent("InputField")
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[4] || (_cache[4] = _createStaticVNode("<div class=\"absolute inset-0 rounded-md pointer-events-none\" data-v-inspector=\"components/organisms/login-password-card.vue:5:5\" data-v-1b4a5ac9><div class=\"bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/login-password-card.vue:6:7\" data-v-1b4a5ac9></div><div class=\"bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/login-password-card.vue:9:7\" data-v-1b4a5ac9></div><div class=\"bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/login-password-card.vue:12:7\" data-v-1b4a5ac9></div><div class=\"bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/login-password-card.vue:15:7\" data-v-1b4a5ac9></div></div>", 1)),
    _createCommentVNode(" Header Section "),
    _createVNode(_component_BackToLogin),
    _createVNode(_component_Hero, {
      title: "Welcome to Aladia,",
      subtitle: "Create or access your account from here",
      class: "mb-6"
    }),
    _createCommentVNode(" Password Entry Section "),
    _createElementVNode("div", _hoisted_2, [
      _cache[3] || (_cache[3] = _createElementVNode("p", {
        class: "text-white text-sm",
        "data-v-inspector": "components/organisms/login-password-card.vue:29:7"
      }, "Enter your password", -1 /* HOISTED */)),
      _createElementVNode("div", _hoisted_3, [
        _createCommentVNode(" Password Input Field "),
        _createVNode(_component_InputField, {
          modelValue: $data.password,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.password) = $event)),
          icon: ['fas', 'key'],
          type: "password",
          label: "Password",
          placeholder: "Password",
          "toggle-password": true,
          errorMessage: "Password required"
        }, null, 8 /* PROPS */, ["modelValue"]),
        _createCommentVNode(" Forgot Password "),
        _createElementVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.handleForgotPassword && $options.handleForgotPassword(...args))),
          class: "self-end mt-1 text-xs text-white/50 underline hover:text-white",
          "data-v-inspector": "components/organisms/login-password-card.vue:42:9"
        }, " Forgot Password? ")
      ]),
      _createCommentVNode(" Submit Button "),
      _createVNode(_component_Button, {
        class: "relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all",
        onClick: $options.handleSubmit
      }, {
        default: _withCtx(() => _cache[2] || (_cache[2] = [
          _createElementVNode("div", {
            class: "gradient absolute w-full h-full inset-0 opacity-50",
            "data-v-inspector": "components/organisms/login-password-card.vue:55:9"
          }, null, -1 /* HOISTED */),
          _createElementVNode("div", { "data-v-inspector": "components/organisms/login-password-card.vue:56:9" }, "Enter", -1 /* HOISTED */)
        ])),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"])
    ])
  ]))
}

import "/_nuxt/components/organisms/login-password-card.vue?vue&type=style&index=0&scoped=1b4a5ac9&lang.css"

_sfc_main.__hmrId = "1b4a5ac9"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-1b4a5ac9"],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/organisms/login-password-card.vue"]])
//# sourceMappingURL=data:application/json;base64,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LGdFQUFnRTtVQUFDLGtCQUFnQixFQUFDLG1EQUFtRDtXQUM1SSxvQkFFRDs7TUFHRixzQ0FBc0I7TUFDdEIsYUFNUztRQUxQLEtBQUssRUFBQyxxSUFBcUk7UUFDMUksT0FBSyxFQUFFLHFCQUFZOztRQXBENUIsa0JBc0RRLENBQTJJO1VBQTNJLG9CQUEySTtZQUF0SSxLQUFLLEVBQUMsb0RBQW9EO1lBQUMsa0JBQWdCLEVBQUMsbURBQW1EOztVQUNwSSxvQkFBcUYsU0FBaEYsa0JBQWdCLEVBQUMsbURBQW1ELElBQUMsT0FBSzs7UUF2RHZGIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJsb2dpbi1wYXNzd29yZC1jYXJkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgcGItNTYgbWF4LXctc20gcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLWJsYWNrLzUwIHB4LTggcHktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1wYXNzd29yZC1jYXJkLnZ1ZToyOjNcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC1tZCBwb2ludGVyLWV2ZW50cy1ub25lXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL2xvZ2luLXBhc3N3b3JkLWNhcmQudnVlOjU6NVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtWzFweF0gdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL2xvZ2luLXBhc3N3b3JkLWNhcmQudnVlOjY6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tbCBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgaC1bMXB4XSB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvbG9naW4tcGFzc3dvcmQtY2FyZC52dWU6OTo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by1iIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIHRvcC0wIGxlZnQtMCB3LVsxcHhdIGgtZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1wYXNzd29yZC1jYXJkLnZ1ZToxMjo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by10IGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy1bMXB4XSBoLWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvbG9naW4tcGFzc3dvcmQtY2FyZC52dWU6MTU6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBIZWFkZXIgU2VjdGlvbiAtLT5cbiAgICA8QmFja1RvTG9naW4gLz5cbiAgICA8SGVyb1xuICAgICAgdGl0bGU9XCJXZWxjb21lIHRvIEFsYWRpYSxcIlxuICAgICAgc3VidGl0bGU9XCJDcmVhdGUgb3IgYWNjZXNzIHlvdXIgYWNjb3VudCBmcm9tIGhlcmVcIlxuICAgICAgY2xhc3M9XCJtYi02XCJcbiAgICAvPlxuXG4gICAgPCEtLSBQYXNzd29yZCBFbnRyeSBTZWN0aW9uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC00IGl0ZW1zLWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1wYXNzd29yZC1jYXJkLnZ1ZToyODo1XCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC1zbVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1wYXNzd29yZC1jYXJkLnZ1ZToyOTo3XCI+RW50ZXIgeW91ciBwYXNzd29yZDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1wYXNzd29yZC1jYXJkLnZ1ZTozMDo3XCI+XG4gICAgICAgIDwhLS0gUGFzc3dvcmQgSW5wdXQgRmllbGQgLS0+XG4gICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgICA6aWNvbj1cIlsnZmFzJywgJ2tleSddXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIDp0b2dnbGUtcGFzc3dvcmQ9XCJ0cnVlXCJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U9XCJQYXNzd29yZCByZXF1aXJlZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDwhLS0gRm9yZ290IFBhc3N3b3JkIC0tPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgQGNsaWNrPVwiaGFuZGxlRm9yZ290UGFzc3dvcmRcIlxuICAgICAgICAgIGNsYXNzPVwic2VsZi1lbmQgbXQtMSB0ZXh0LXhzIHRleHQtd2hpdGUvNTAgdW5kZXJsaW5lIGhvdmVyOnRleHQtd2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvbG9naW4tcGFzc3dvcmQtY2FyZC52dWU6NDI6OVwiXG4gICAgICAgID5cbiAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gU3VibWl0IEJ1dHRvbiAtLT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3M9XCJyZWxhdGl2ZSBmbGV4IGgtMTAgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctYmxhY2sgdGV4dC1jZW50ZXIgdGV4dC1zbSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgIEBjbGljaz1cImhhbmRsZVN1Ym1pdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmFkaWVudCBhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGluc2V0LTAgb3BhY2l0eS01MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1wYXNzd29yZC1jYXJkLnZ1ZTo1NTo5XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL2xvZ2luLXBhc3N3b3JkLWNhcmQudnVlOjU2OjlcIj5FbnRlcjwvZGl2PlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBCYWNrVG9Mb2dpbiBmcm9tIFwiLi4vbW9sZWN1bGVzL2JhY2stdG8tbG9naW4udnVlXCI7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tIFwiLi4vYXRvbXMvaW5wdXQtZmllbGQudnVlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9hdG9tcy9idXR0b24udnVlXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vbW9sZWN1bGVzL2hlcm8udnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJMb2dpblBhc3N3b3JkQ2FyZFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQmFja1RvTG9naW4sXG4gICAgSW5wdXRGaWVsZCxcbiAgICBCdXR0b24sXG4gICAgSGVybyxcbiAgfSxcbiAgZW1pdHM6IFtcInN1Ym1pdFBhc3N3b3JkXCIsIFwiZm9yZ290UGFzc3dvcmRcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICBpZiAoIXRoaXMucGFzc3dvcmQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBlbnRlciBhIHBhc3N3b3JkLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGFzc3dvcmQgU3VibWl0dGVkOlwiLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgdGhpcy4kZW1pdChcInN1Ym1pdFBhc3N3b3JkXCIsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiZm9yZ290UGFzc3dvcmRcIik7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxNWRlZyxcbiAgICAjZmZmMCA4LjMzJSxcbiAgICAjZmZmMCAyNy40MyUsXG4gICAgI2ZmZjYsXG4gICAgI2ZmZjAgMzcuODUlLFxuICAgICNmZmYwIDUzLjkxJSxcbiAgICAjZmZmIDYyLjE1JSxcbiAgICAjZmZmMCA2OC4yMyUsXG4gICAgI2ZmZiA5MS42NyVcbiAgKTtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1wYXNzd29yZC1jYXJkLnZ1ZSJ9