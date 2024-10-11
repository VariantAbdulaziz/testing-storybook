import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/password-recovery-confirmation.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import Button from "/_nuxt/components/atoms/button.vue";
import Hero from "/_nuxt/components/molecules/hero.vue";
const _sfc_main = {
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

import { createCommentVNode as _createCommentVNode,  resolveComponent as _resolveComponent,  toDisplayString as _toDisplayString, withCtx as _withCtx, createStaticVNode as _createStaticVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "relative flex flex-col items-center max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4",
  "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:2:3"
}
const _hoisted_2 = {
  class: "mb-6 flex flex-col items-center px-6",
  "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:27:5"
}
const _hoisted_3 = {
  class: "flex justify-between w-full mb-24",
  "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:28:7"
}
const _hoisted_4 = {
  class: "text-white/50 text-xs font-medium mb-6",
  "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:31:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Hero = _resolveComponent("Hero")
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Background Gradient Border "),
    _cache[3] || (_cache[3] = _createStaticVNode("<div class=\"absolute inset-0 rounded-md pointer-events-none\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:6:5\" data-v-3c3102c9><div class=\"bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:7:7\" data-v-3c3102c9></div><div class=\"bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:10:7\" data-v-3c3102c9></div><div class=\"bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:13:7\" data-v-3c3102c9></div><div class=\"bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/password-recovery-confirmation.vue:16:7\" data-v-3c3102c9></div></div>", 1)),
    _createCommentVNode(" Password Recovery Icon and Title (Hero Component) "),
    _createVNode(_component_Hero, {
      class: "mb-6",
      title: "Password Recovery",
      subtitle: "Retrieve your password account through your registration mail"
    }),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createCommentVNode(" Email Sent Confirmation Message "),
        _cache[0] || (_cache[0] = _createElementVNode("p", {
          class: "text-white text-sm mb-2",
          "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:30:9"
        }, "Recovery link sent to:", -1 /* HOISTED */)),
        _createElementVNode("p", _hoisted_4, _toDisplayString($props.recoveryEmail), 1 /* TEXT */)
      ]),
      _createCommentVNode(" Instruction Text "),
      _cache[1] || (_cache[1] = _createElementVNode("p", {
        class: "text-white/70 text-base text-center mb-32",
        "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:37:7"
      }, " Check your email to change your password! ", -1 /* HOISTED */))
    ]),
    _createCommentVNode(" Resend Email Button (Button Component) "),
    _createVNode(_component_Button, {
      class: "relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all",
      onClick: $setup.sendEmailAgain
    }, {
      default: _withCtx(() => _cache[2] || (_cache[2] = [
        _createElementVNode("div", {
          class: "gradient absolute w-full h-full inset-0 opacity-50",
          "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:47:7"
        }, null, -1 /* HOISTED */),
        _createElementVNode("div", { "data-v-inspector": "components/organisms/password-recovery-confirmation.vue:48:7" }, "Send Email Again", -1 /* HOISTED */)
      ])),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"])
  ]))
}

import "/_nuxt/components/organisms/password-recovery-confirmation.vue?vue&type=style&index=0&scoped=3c3102c9&lang.css"

_sfc_main.__hmrId = "3c3102c9"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-3c3102c9"],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/organisms/password-recovery-confirmation.vue"]])
//# sourceMappingURL=data:application/json;base64,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bmZpcm1hdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYXgtdy1zbSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctYmxhY2svNTAgcHgtOCBweS00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6MjozXCJcbiAgPlxuICAgIDwhLS0gQmFja2dyb3VuZCBHcmFkaWVudCBCb3JkZXIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC1tZCBwb2ludGVyLWV2ZW50cy1ub25lXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6Njo1XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1bMXB4XSB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY29uZmlybWF0aW9uLnZ1ZTo3OjdcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLWwgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIGgtWzFweF0gdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6MTA6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tYiBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1bMXB4XSBoLWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY29uZmlybWF0aW9uLnZ1ZToxMzo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by10IGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy1bMXB4XSBoLWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY29uZmlybWF0aW9uLnZ1ZToxNjo3XCJcbiAgICAgID48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gUGFzc3dvcmQgUmVjb3ZlcnkgSWNvbiBhbmQgVGl0bGUgKEhlcm8gQ29tcG9uZW50KSAtLT5cbiAgICA8SGVyb1xuICAgICAgY2xhc3M9XCJtYi02XCJcbiAgICAgIHRpdGxlPVwiUGFzc3dvcmQgUmVjb3ZlcnlcIlxuICAgICAgc3VidGl0bGU9XCJSZXRyaWV2ZSB5b3VyIHBhc3N3b3JkIGFjY291bnQgdGhyb3VnaCB5b3VyIHJlZ2lzdHJhdGlvbiBtYWlsXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJtYi02IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB4LTZcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY29uZmlybWF0aW9uLnZ1ZToyNzo1XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG1iLTI0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6Mjg6N1wiPlxuICAgICAgICA8IS0tIEVtYWlsIFNlbnQgQ29uZmlybWF0aW9uIE1lc3NhZ2UgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG1iLTJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY29uZmlybWF0aW9uLnZ1ZTozMDo5XCI+UmVjb3ZlcnkgbGluayBzZW50IHRvOjwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlLzUwIHRleHQteHMgZm9udC1tZWRpdW0gbWItNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlOjMxOjlcIj5cbiAgICAgICAgICB7eyByZWNvdmVyeUVtYWlsIH19XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIEluc3RydWN0aW9uIFRleHQgLS0+XG4gICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUvNzAgdGV4dC1iYXNlIHRleHQtY2VudGVyIG1iLTMyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3Bhc3N3b3JkLXJlY292ZXJ5LWNvbmZpcm1hdGlvbi52dWU6Mzc6N1wiPlxuICAgICAgICBDaGVjayB5b3VyIGVtYWlsIHRvIGNoYW5nZSB5b3VyIHBhc3N3b3JkIVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBSZXNlbmQgRW1haWwgQnV0dG9uIChCdXR0b24gQ29tcG9uZW50KSAtLT5cbiAgICA8QnV0dG9uXG4gICAgICBjbGFzcz1cInJlbGF0aXZlIGZsZXggaC0xMCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1ibGFjayB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgIEBjbGljaz1cInNlbmRFbWFpbEFnYWluXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGllbnQgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBpbnNldC0wIG9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvcGFzc3dvcmQtcmVjb3ZlcnktY29uZmlybWF0aW9uLnZ1ZTo0Nzo3XCI+PC9kaXY+XG4gICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlOjQ4OjdcIj5TZW5kIEVtYWlsIEFnYWluPC9kaXY+XG4gICAgPC9CdXR0b24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9hdG9tcy9idXR0b24udnVlXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vbW9sZWN1bGVzL2hlcm8udnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiUGFzc3dvcmRSZWNvdmVyeUNvbmZpcm1hdGlvblwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgSGVybyxcbiAgICBCdXR0b24sXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgcmVjb3ZlcnlFbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiBcInVzZXJAZXhhbXBsZS5jb21cIiwgLy8gRGVmYXVsdCBlbWFpbCB2YWx1ZSBpZiBub3QgcGFzc2VkIGFzIGEgcHJvcFxuICAgIH0sXG4gIH0sXG4gIHNldHVwKHByb3BzKSB7XG4gICAgLy8gTWV0aG9kIHRvIEhhbmRsZSBSZXNlbmQgRW1haWwgQ2xpY2tcbiAgICBmdW5jdGlvbiBzZW5kRW1haWxBZ2FpbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBSZXNlbmQgZW1haWwgdG86ICR7cHJvcHMucmVjb3ZlcnlFbWFpbH1gKTtcbiAgICAgIC8vIExvZ2ljIHRvIHJlc2VuZCB0aGUgcmVjb3ZlcnkgZW1haWwgdG8gdGhlIHNwZWNpZmllZCBhZGRyZXNzXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbmRFbWFpbEFnYWluLFxuICAgIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTVkZWcsXG4gICAgI2ZmZjAgOS41NSUsXG4gICAgI2ZmZjAgMzAuMjglLFxuICAgICNmZmY2LFxuICAgICNmZmYwIDQxLjU4JSxcbiAgICAjZmZmMCA1OS4wMiUsXG4gICAgI2ZmZiA2Ny45NyUsXG4gICAgI2ZmZjAgNzQuNTYlLFxuICAgICNmZmZcbiAgKTtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL29yZ2FuaXNtcy9wYXNzd29yZC1yZWNvdmVyeS1jb25maXJtYXRpb24udnVlIn0=