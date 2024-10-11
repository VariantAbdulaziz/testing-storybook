import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/login-card.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import AuthForm from "/_nuxt/components/molecules/auth-form.vue";
import SocialButton from "/_nuxt/components/molecules/social-button.vue";
import Divider from "/_nuxt/components/atoms/divider.vue";
import TermsAndConditions from "/_nuxt/components/molecules/terms-and-conditions.vue";
import Hero from "/_nuxt/components/molecules/hero.vue";
import GoogleLogo from "/_nuxt/assets/img/google-logo.png?import";
import AppleLogo from "/_nuxt/assets/img/apple-logo.png?import";
import FacebookLogo from "/_nuxt/assets/img/facebook-logo.png?import";

const _sfc_main = {
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

import {  resolveComponent as _resolveComponent,  createStaticVNode as _createStaticVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "relative flex flex-col gap-6 max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4",
  "data-v-inspector": "components/organisms/login-card.vue:2:3"
}
const _hoisted_2 = {
  class: "flex flex-col w-full mx-auto gap-2",
  "data-v-inspector": "components/organisms/login-card.vue:22:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Hero = _resolveComponent("Hero")
  const _component_AuthForm = _resolveComponent("AuthForm")
  const _component_Divider = _resolveComponent("Divider")
  const _component_SocialButton = _resolveComponent("SocialButton")
  const _component_TermsAndConditions = _resolveComponent("TermsAndConditions")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = _createStaticVNode("<div class=\"absolute inset-0 rounded-md pointer-events-none\" data-v-inspector=\"components/organisms/login-card.vue:5:5\"><div class=\"bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/login-card.vue:6:7\"></div><div class=\"bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/login-card.vue:9:7\"></div><div class=\"bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/login-card.vue:12:7\"></div><div class=\"bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/login-card.vue:15:7\"></div></div>", 1)),
    _createVNode(_component_Hero),
    _createVNode(_component_AuthForm, { onSubmitEmail: $options.handleEmailSubmission }, null, 8 /* PROPS */, ["onSubmitEmail"]),
    _createVNode(_component_Divider),
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_SocialButton, {
        iconSrc: $setup.GoogleLogo,
        label: "Continue with Google"
      }, null, 8 /* PROPS */, ["iconSrc"]),
      _createVNode(_component_SocialButton, {
        iconSrc: $setup.AppleLogo,
        label: "Continue with Facebook"
      }, null, 8 /* PROPS */, ["iconSrc"]),
      _createVNode(_component_SocialButton, {
        iconSrc: $setup.FacebookLogo,
        label: "Continue with Apple"
      }, null, 8 /* PROPS */, ["iconSrc"])
    ]),
    _createVNode(_component_TermsAndConditions, { onClick: _ctx.handleTermsClick }, null, 8 /* PROPS */, ["onClick"])
  ]))
}


_sfc_main.__hmrId = "80690e3f"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/organisms/login-card.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBLE1BQUssQ0FBRSxRQUFPLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ2pELE1BQUssQ0FBRSxZQUFXLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ3pELE1BQUssQ0FBRSxPQUFNLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDMUMsTUFBSyxDQUFFLGtCQUFpQixDQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDdEUsTUFBSyxDQUFFLElBQUcsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN4QyxNQUFLLENBQUUsVUFBUyxDQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDekQsTUFBSyxDQUFFLFNBQVEsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3ZELE1BQUssQ0FBRSxZQUFXLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7QUFFN0QsS0FBSyxVQUFVO0VBQ2IsVUFBVSxFQUFFO0lBQ1YsUUFBUTtJQUNSLFlBQVk7SUFDWixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLElBQUk7RUFDTixDQUFDO0VBQ0QsS0FBSyxDQUFDLEVBQUU7SUFDTixNQUFLLENBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVcsQ0FBRSxDQUFDO0VBQ2hELENBQUM7RUFDRCxPQUFPLEVBQUU7SUFDUCxxQkFBcUIsQ0FBQyxLQUFLLEVBQUU7TUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUcsQ0FBRSxFQUFDLENBQUUsS0FBSSxDQUFFLElBQUksQ0FBQyxDQUFDO01BQ2pDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUNsQyxDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUM7Ozs7O0VBdkRHLEtBQUssRUFBQywrRkFBK0Y7RUFBQyxrQkFBZ0IsRUFBQyx5Q0FBeUM7OztFQW1CM0osS0FBSyxFQUFDLG9DQUFvQztFQUFDLGtCQUFnQixFQUFDLDBDQUEwQzs7Ozs7Ozs7Ozt3QkFwQjdHLG9CQTBCTSxPQTFCTixVQTBCTTs4QkEzQlI7SUFrQkksYUFBUTtJQUNSLGFBQWlELHVCQUF0QyxhQUFXLEVBQUUsOEJBQXFCO0lBQzdDLGFBQVc7SUFDWCxvQkFJTSxPQUpOLFVBSU07TUFISixhQUFtRTtRQUFwRCxPQUFPLEVBQUUsaUJBQVU7UUFBRSxLQUFLLEVBQUMsc0JBQXNCOztNQUNoRSxhQUFvRTtRQUFyRCxPQUFPLEVBQUUsZ0JBQVM7UUFBRSxLQUFLLEVBQUMsd0JBQXdCOztNQUNqRSxhQUFvRTtRQUFyRCxPQUFPLEVBQUUsbUJBQVk7UUFBRSxLQUFLLEVBQUMscUJBQXFCOzs7SUFFbkUsYUFBZ0QsaUNBQTNCLE9BQUssRUFBRSxxQkFBZ0IiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImxvZ2luLWNhcmQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBnYXAtNiBtYXgtdy1zbSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctYmxhY2svNTAgcHgtOCBweS00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL2xvZ2luLWNhcmQudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLW1kIHBvaW50ZXItZXZlbnRzLW5vbmVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvbG9naW4tY2FyZC52dWU6NTo1XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1bMXB4XSB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvbG9naW4tY2FyZC52dWU6Njo3XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJiZy1ncmFkaWVudC10by1sIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlIHRvLXRyYW5zcGFyZW50IGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBoLVsxcHhdIHctZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1jYXJkLnZ1ZTo5OjdcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLWIgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctWzFweF0gaC1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL2xvZ2luLWNhcmQudnVlOjEyOjdcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLXQgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB3LVsxcHhdIGgtZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1jYXJkLnZ1ZToxNTo3XCJcbiAgICAgID48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8SGVybyAvPlxuICAgIDxBdXRoRm9ybSBAc3VibWl0RW1haWw9XCJoYW5kbGVFbWFpbFN1Ym1pc3Npb25cIiAvPlxuICAgIDxEaXZpZGVyIC8+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdy1mdWxsIG14LWF1dG8gZ2FwLTJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvbG9naW4tY2FyZC52dWU6MjI6NVwiPlxuICAgICAgPFNvY2lhbEJ1dHRvbiA6aWNvblNyYz1cIkdvb2dsZUxvZ29cIiBsYWJlbD1cIkNvbnRpbnVlIHdpdGggR29vZ2xlXCIgLz5cbiAgICAgIDxTb2NpYWxCdXR0b24gOmljb25TcmM9XCJBcHBsZUxvZ29cIiBsYWJlbD1cIkNvbnRpbnVlIHdpdGggRmFjZWJvb2tcIiAvPlxuICAgICAgPFNvY2lhbEJ1dHRvbiA6aWNvblNyYz1cIkZhY2Vib29rTG9nb1wiIGxhYmVsPVwiQ29udGludWUgd2l0aCBBcHBsZVwiIC8+XG4gICAgPC9kaXY+XG4gICAgPFRlcm1zQW5kQ29uZGl0aW9ucyBAY2xpY2s9XCJoYW5kbGVUZXJtc0NsaWNrXCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEF1dGhGb3JtIGZyb20gXCIuLi9tb2xlY3VsZXMvYXV0aC1mb3JtLnZ1ZVwiO1xuaW1wb3J0IFNvY2lhbEJ1dHRvbiBmcm9tIFwiLi4vbW9sZWN1bGVzL3NvY2lhbC1idXR0b24udnVlXCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiLi4vYXRvbXMvZGl2aWRlci52dWVcIjtcbmltcG9ydCBUZXJtc0FuZENvbmRpdGlvbnMgZnJvbSBcIi4uL21vbGVjdWxlcy90ZXJtcy1hbmQtY29uZGl0aW9ucy52dWVcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9tb2xlY3VsZXMvaGVyby52dWVcIjtcbmltcG9ydCBHb29nbGVMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1nL2dvb2dsZS1sb2dvLnBuZ1wiO1xuaW1wb3J0IEFwcGxlTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9hcHBsZS1sb2dvLnBuZ1wiO1xuaW1wb3J0IEZhY2Vib29rTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9mYWNlYm9vay1sb2dvLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBBdXRoRm9ybSxcbiAgICBTb2NpYWxCdXR0b24sXG4gICAgRGl2aWRlcixcbiAgICBUZXJtc0FuZENvbmRpdGlvbnMsXG4gICAgSGVybyxcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHsgR29vZ2xlTG9nbywgQXBwbGVMb2dvLCBGYWNlYm9va0xvZ28gfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUVtYWlsU3VibWlzc2lvbihlbWFpbCkge1xuICAgICAgY29uc29sZS5sb2coXCJoZXJlIGluIGxvZ2luIGNhcmRcIik7XG4gICAgICB0aGlzLiRlbWl0KFwic3VibWl0TG9naW5cIiwgZW1haWwpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL29yZ2FuaXNtcy9sb2dpbi1jYXJkLnZ1ZSJ9