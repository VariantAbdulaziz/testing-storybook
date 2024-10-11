import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/auth-form.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import InputField from "/_nuxt/components/atoms/input-field.vue";
import Button from "/_nuxt/components/atoms/button.vue";

const _sfc_main = {
  name: "AuthForm",
  components: {
    InputField,
    Button,
  },
  data() {
    return {
      email: "",
    };
  },
  computed: {
    isEmailValid() {
      // Basic email validation regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
  },
  methods: {
    handleSubmit() {
      if (this.isEmailValid) {
        console.log("Email submitted:", this.email);
        this.$emit("submitEmail", this.email);
      }
    },
  },
};

import {  resolveComponent as _resolveComponent,  normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "flex flex-col gap-6 items-center",
  "data-v-inspector": "components/molecules/auth-form.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InputField = _resolveComponent("InputField")
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[2] || (_cache[2] = _createElementVNode("div", {
      class: "flex justify-center text-white text-sm",
      "data-v-inspector": "components/molecules/auth-form.vue:3:5"
    }, "Enter your email", -1 /* HOISTED */)),
    _createVNode(_component_InputField, {
      modelValue: $data.email,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.email) = $event)),
      inputId: "email-field",
      icon: ['fas', 'envelope'],
      label: "Email Address",
      placeholder: "Enter your email",
      isValid: $options.isEmailValid,
      errorMessage: "Invalid Email"
    }, null, 8 /* PROPS */, ["modelValue", "isValid"]),
    _createVNode(_component_Button, {
      class: _normalizeClass([
        'relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
        $options.isEmailValid
          ? 'border-white bg-primary text-white pointer-events-auto opacity-100'
          : 'border-white/0 bg-black text-white pointer-events-none opacity-70',
      ]),
      disabled: !$options.isEmailValid,
      onClick: $options.handleSubmit
    }, {
      default: _withCtx(() => _cache[1] || (_cache[1] = [
        _createElementVNode("div", {
          class: "gradient absolute w-full h-full inset-0 opacity-50",
          "data-v-inspector": "components/molecules/auth-form.vue:23:7"
        }, null, -1 /* HOISTED */),
        _createElementVNode("div", { "data-v-inspector": "components/molecules/auth-form.vue:24:7" }, "Enter", -1 /* HOISTED */)
      ])),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["class", "disabled", "onClick"])
  ]))
}

import "/_nuxt/components/molecules/auth-form.vue?vue&type=style&index=0&scoped=2884a390&lang.css"

_sfc_main.__hmrId = "2884a390"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-2884a390"],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/molecules/auth-form.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBLE1BQUssQ0FBRSxVQUFTLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2pELE1BQUssQ0FBRSxNQUFLLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7O0FBRXhDLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztFQUNoQixVQUFVLEVBQUU7SUFDVixVQUFVO0lBQ1YsTUFBTTtFQUNSLENBQUM7RUFDRCxJQUFJLENBQUMsRUFBRTtJQUNMLE1BQUssQ0FBRTtNQUNMLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0VBQ0gsQ0FBQztFQUNELFFBQVEsRUFBRTtJQUNSLFlBQVksQ0FBQyxFQUFFO01BQ2IsQ0FBQyxFQUFFLEtBQUksQ0FBRSxLQUFJLENBQUUsVUFBUyxDQUFFLEtBQUksQ0FBRSxPQUFNO01BQ3RDLEtBQUksQ0FBRSxZQUFXLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2pELE1BQUssQ0FBRSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztFQUNILENBQUM7RUFDRCxPQUFPLEVBQUU7SUFDUCxZQUFZLENBQUMsRUFBRTtNQUNiLEVBQUMsQ0FBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUN2QztJQUNGLENBQUM7RUFDSCxDQUFDO0FBQ0gsQ0FBQzs7Ozs7RUF6RE0sS0FBSyxFQUFDLGtDQUFrQztFQUFDLGtCQUFnQixFQUFDLHdDQUF3Qzs7Ozs7Ozt3QkFBdkcsb0JBd0JNLE9BeEJOLFVBd0JNOzhCQXZCSixvQkFBb0k7TUFBL0gsS0FBSyxFQUFDLHdDQUF3QztNQUFDLGtCQUFnQixFQUFDLHdDQUF3QztPQUFDLGtCQUFnQjtJQUM5SCxhQVFFO01BWE4sWUFJZSxXQUFLO01BSnBCLDZEQUllLFdBQUs7TUFDZCxPQUFPLEVBQUMsYUFBYTtNQUNwQixJQUFJLEVBQUUsbUJBQW1CO01BQzFCLEtBQUssRUFBQyxlQUFlO01BQ3JCLFdBQVcsRUFBQyxrQkFBa0I7TUFDN0IsT0FBTyxFQUFFLHFCQUFZO01BQ3RCLFlBQVksRUFBQyxlQUFlOztJQUU5QixhQVlTO01BWE4sS0FBSyxFQWJaOztRQWF1SyxxQkFBWTs7OztNQU01SyxRQUFRLEdBQUcscUJBQVk7TUFDdkIsT0FBSyxFQUFFLHFCQUFZOztNQXBCMUIsa0JBc0JNLENBQWlJO1FBQWpJLG9CQUFpSTtVQUE1SCxLQUFLLEVBQUMsb0RBQW9EO1VBQUMsa0JBQWdCLEVBQUMseUNBQXlDOztRQUMxSCxvQkFBMkUsU0FBdEUsa0JBQWdCLEVBQUMseUNBQXlDLElBQUMsT0FBSzs7TUF2QjNFIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJhdXRoLWZvcm0udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgZ2FwLTYgaXRlbXMtY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL2F1dGgtZm9ybS52dWU6MjozXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXNtXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL2F1dGgtZm9ybS52dWU6Mzo1XCI+RW50ZXIgeW91ciBlbWFpbDwvZGl2PlxuICAgIDxJbnB1dEZpZWxkXG4gICAgICB2LW1vZGVsPVwiZW1haWxcIlxuICAgICAgaW5wdXRJZD1cImVtYWlsLWZpZWxkXCJcbiAgICAgIDppY29uPVwiWydmYXMnLCAnZW52ZWxvcGUnXVwiXG4gICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgIDppc1ZhbGlkPVwiaXNFbWFpbFZhbGlkXCJcbiAgICAgIGVycm9yTWVzc2FnZT1cIkludmFsaWQgRW1haWxcIlxuICAgIC8+XG4gICAgPEJ1dHRvblxuICAgICAgOmNsYXNzPVwiW1xuICAgICAgICAncmVsYXRpdmUgZmxleCBoLTEwIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLWJsYWNrIHRleHQtY2VudGVyIHRleHQtc20gdHJhbnNpdGlvbi1hbGwnLFxuICAgICAgICBpc0VtYWlsVmFsaWRcbiAgICAgICAgICA/ICdib3JkZXItd2hpdGUgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHBvaW50ZXItZXZlbnRzLWF1dG8gb3BhY2l0eS0xMDAnXG4gICAgICAgICAgOiAnYm9yZGVyLXdoaXRlLzAgYmctYmxhY2sgdGV4dC13aGl0ZSBwb2ludGVyLWV2ZW50cy1ub25lIG9wYWNpdHktNzAnLFxuICAgICAgXVwiXG4gICAgICA6ZGlzYWJsZWQ9XCIhaXNFbWFpbFZhbGlkXCJcbiAgICAgIEBjbGljaz1cImhhbmRsZVN1Ym1pdFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImdyYWRpZW50IGFic29sdXRlIHctZnVsbCBoLWZ1bGwgaW5zZXQtMCBvcGFjaXR5LTUwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL2F1dGgtZm9ybS52dWU6MjM6N1wiPjwvZGl2PlxuICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvYXV0aC1mb3JtLnZ1ZToyNDo3XCI+RW50ZXI8L2Rpdj5cbiAgICA8L0J1dHRvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4uL2F0b21zL2lucHV0LWZpZWxkLnZ1ZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYXRvbXMvYnV0dG9uLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQXV0aEZvcm1cIixcbiAgY29tcG9uZW50czoge1xuICAgIElucHV0RmllbGQsXG4gICAgQnV0dG9uLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogXCJcIixcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzRW1haWxWYWxpZCgpIHtcbiAgICAgIC8vIEJhc2ljIGVtYWlsIHZhbGlkYXRpb24gcmVnZXggcGF0dGVyblxuICAgICAgY29uc3QgZW1haWxQYXR0ZXJuID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG4gICAgICByZXR1cm4gZW1haWxQYXR0ZXJuLnRlc3QodGhpcy5lbWFpbCk7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzRW1haWxWYWxpZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIHN1Ym1pdHRlZDpcIiwgdGhpcy5lbWFpbCk7XG4gICAgICAgIHRoaXMuJGVtaXQoXCJzdWJtaXRFbWFpbFwiLCB0aGlzLmVtYWlsKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE1ZGVnLFxuICAgICNmZmYwIDkuNTUlLFxuICAgICNmZmYwIDMwLjI4JSxcbiAgICAjZmZmNixcbiAgICAjZmZmMCA0MS41OCUsXG4gICAgI2ZmZjAgNTkuMDIlLFxuICAgICNmZmYgNjcuOTclLFxuICAgICNmZmYwIDc0LjU2JSxcbiAgICAjZmZmXG4gICk7XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9WYXJpYW50QWJkdWxheml6L2Rldi9mcm9udGVuZC1xYS1zZWxlY3Rpb24vY29tcG9uZW50cy9tb2xlY3VsZXMvYXV0aC1mb3JtLnZ1ZSJ9