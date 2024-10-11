import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/input-field.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock,createElementVNode as __createElementVNode } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
  name: "InputField",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter value",
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: Array,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    inputId: {
      type: String,
      default: () => `input-field-${Math.random().toString(36).substr(2, 9)}`,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    errorMessage: {
      type: String,
      default: "Invalid input",
    },
  },
  data() {
    return {
      inputType: this.type, // Initialize inputType with the passed type prop
      touched: false, // Track if the input has been interacted with
    };
  },
  methods: {
    toggleVisibility() {
      // Toggle between "password" and "text" for visibility
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    handleFocus() {
      // Mark the input as touched when the user focuses on the field
      this.touched = true;
    },
  },
  watch: {
    type(val) {
      this.inputType = val;
    },
  },
};

import { resolveComponent as _resolveComponent,  openBlock as _openBlock,  createCommentVNode as _createCommentVNode, normalizeClass as _normalizeClass,  toDisplayString as _toDisplayString } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "flex flex-col w-full",
  "data-v-inspector": "components/atoms/input-field.vue:2:3"
}
const _hoisted_2 = {
  key: 0,
  class: "flex w-10 items-center justify-center text-xl text-black",
  "data-v-inspector": "components/atoms/input-field.vue:11:7"
}
const _hoisted_3 = ["id", "value", "placeholder", "disabled", "type", "aria-labelledby"]
const _hoisted_4 = ["id"]
const _hoisted_5 = {
  key: 0,
  class: "text-red-500 text-xs mt-1",
  "data-v-inspector": "components/atoms/input-field.vue:46:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = _resolveComponent("font-awesome-icon")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", {
      class: _normalizeClass(["group relative flex h-10 w-full rounded transition-all", [
        $data.touched && !$props.isValid
          ? 'bg-red-50 border border-red-500'
          : 'bg-white border border-gray-300',
      ]]),
      "data-v-inspector": "components/atoms/input-field.vue:3:5"
    }, [
      ($props.icon)
        ? (_openBlock(), _createElementBlock("div", _hoisted_2, [
            _createVNode(_component_font_awesome_icon, {
              icon: $props.icon,
              class: "text-base text-black/70"
            }, null, 8 /* PROPS */, ["icon"])
          ]))
        : _createCommentVNode("v-if", true),
      _createElementVNode("input", {
        id: $props.inputId,
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = (...args) => ($options.handleInput && $options.handleInput(...args))),
        onFocus: _cache[1] || (_cache[1] = (...args) => ($options.handleFocus && $options.handleFocus(...args))),
        placeholder: $props.placeholder,
        disabled: $props.disabled,
        type: $data.inputType,
        class: _normalizeClass([
          'h-full flex-1 rounded bg-transparent text-sm outline-none transition-colors pl-2',
          $data.touched && !$props.isValid ? 'text-red-500' : 'text-black',
        ]),
        "aria-labelledby": $props.label ? $props.inputId + '-label' : null,
        "data-v-inspector": "components/atoms/input-field.vue:17:7"
      }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_3),
      ($props.type === 'password')
        ? (_openBlock(), _createElementBlock("div", {
            key: 1,
            class: "flex w-10 items-center justify-center cursor-pointer text-xl text-black/50",
            onClick: _cache[2] || (_cache[2] = (...args) => ($options.toggleVisibility && $options.toggleVisibility(...args))),
            "data-v-inspector": "components/atoms/input-field.vue:31:7"
          }, [
            _createVNode(_component_font_awesome_icon, {
              icon: 
            $data.inputType === 'password' ? ['fas', 'eye'] : ['fas', 'eye-slash']
          
            }, null, 8 /* PROPS */, ["icon"])
          ]))
        : _createCommentVNode("v-if", true),
      ($props.label)
        ? (_openBlock(), _createElementBlock("label", {
            key: 2,
            id: $props.inputId + '-label',
            class: "sr-only",
            "data-v-inspector": "components/atoms/input-field.vue:42:7"
          }, _toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_4))
        : _createCommentVNode("v-if", true)
    ], 2 /* CLASS */),
    ($data.touched && !$props.isValid && $props.errorMessage)
      ? (_openBlock(), _createElementBlock("div", _hoisted_5, _toDisplayString($props.errorMessage), 1 /* TEXT */))
      : _createCommentVNode("v-if", true)
  ]))
}


_sfc_main.__hmrId = "3259eec3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/atoms/input-field.vue"]])
//# sourceMappingURL=data:application/json;base64,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QWxCLG9CQUVRO1lBM0NkO1lBeUMyQixFQUFFLEVBQUUsY0FBTztZQUFhLEtBQUssRUFBQyxTQUFTO1lBQUMsa0JBQWdCLEVBQUMsdUNBQXVDOzhCQUNoSCxZQUFLLHdCQTFDaEI7VUFBQTs7S0E4Q1ksYUFBTyxLQUFLLGNBQU8sSUFBSSxtQkFBWTt1QkFEM0Msb0JBS00sT0FMTixVQUtNLG1CQURELG1CQUFZO1FBakRyQiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiaW5wdXQtZmllbGQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvaW5wdXQtZmllbGQudnVlOjI6M1wiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZ3JvdXAgcmVsYXRpdmUgZmxleCBoLTEwIHctZnVsbCByb3VuZGVkIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgIDpjbGFzcz1cIltcbiAgICAgICAgdG91Y2hlZCAmJiAhaXNWYWxpZFxuICAgICAgICAgID8gJ2JnLXJlZC01MCBib3JkZXIgYm9yZGVyLXJlZC01MDAnXG4gICAgICAgICAgOiAnYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCcsXG4gICAgICBdXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvaW5wdXQtZmllbGQudnVlOjM6NVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiaWNvblwiXG4gICAgICAgIGNsYXNzPVwiZmxleCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhsIHRleHQtYmxhY2tcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9pbnB1dC1maWVsZC52dWU6MTE6N1wiXG4gICAgICA+XG4gICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiA6aWNvbj1cImljb25cIiBjbGFzcz1cInRleHQtYmFzZSB0ZXh0LWJsYWNrLzcwXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIDppZD1cImlucHV0SWRcIlxuICAgICAgICA6dmFsdWU9XCJtb2RlbFZhbHVlXCJcbiAgICAgICAgQGlucHV0PVwiaGFuZGxlSW5wdXRcIlxuICAgICAgICBAZm9jdXM9XCJoYW5kbGVGb2N1c1wiXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICA6dHlwZT1cImlucHV0VHlwZVwiXG4gICAgICAgIDpjbGFzcz1cIltcbiAgICAgICAgICAnaC1mdWxsIGZsZXgtMSByb3VuZGVkIGJnLXRyYW5zcGFyZW50IHRleHQtc20gb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIHBsLTInLFxuICAgICAgICAgIHRvdWNoZWQgJiYgIWlzVmFsaWQgPyAndGV4dC1yZWQtNTAwJyA6ICd0ZXh0LWJsYWNrJyxcbiAgICAgICAgXVwiXG4gICAgICAgIDphcmlhLWxhYmVsbGVkYnk9XCJsYWJlbCA/IGlucHV0SWQgKyAnLWxhYmVsJyA6IG51bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9pbnB1dC1maWVsZC52dWU6MTc6N1wiXG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwidHlwZSA9PT0gJ3Bhc3N3b3JkJ1wiXG4gICAgICAgIGNsYXNzPVwiZmxleCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIHRleHQtYmxhY2svNTBcIlxuICAgICAgICBAY2xpY2s9XCJ0b2dnbGVWaXNpYmlsaXR5XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvaW5wdXQtZmllbGQudnVlOjMxOjdcIlxuICAgICAgPlxuICAgICAgICA8Zm9udC1hd2Vzb21lLWljb25cbiAgICAgICAgICA6aWNvbj1cIlxuICAgICAgICAgICAgaW5wdXRUeXBlID09PSAncGFzc3dvcmQnID8gWydmYXMnLCAnZXllJ10gOiBbJ2ZhcycsICdleWUtc2xhc2gnXVxuICAgICAgICAgIFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsYWJlbCB2LWlmPVwibGFiZWxcIiA6aWQ9XCJpbnB1dElkICsgJy1sYWJlbCdcIiBjbGFzcz1cInNyLW9ubHlcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9pbnB1dC1maWVsZC52dWU6NDI6N1wiPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICB2LWlmPVwidG91Y2hlZCAmJiAhaXNWYWxpZCAmJiBlcnJvck1lc3NhZ2VcIlxuICAgICAgY2xhc3M9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyBtdC0xXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvaW5wdXQtZmllbGQudnVlOjQ2OjVcIlxuICAgID5cbiAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiSW5wdXRGaWVsZFwiLFxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJFbnRlciB2YWx1ZVwiLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJ0ZXh0XCIsXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9LFxuICAgIGlucHV0SWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IGBpbnB1dC1maWVsZC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX1gLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGlzVmFsaWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIkludmFsaWQgaW5wdXRcIixcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dFR5cGU6IHRoaXMudHlwZSwgLy8gSW5pdGlhbGl6ZSBpbnB1dFR5cGUgd2l0aCB0aGUgcGFzc2VkIHR5cGUgcHJvcFxuICAgICAgdG91Y2hlZDogZmFsc2UsIC8vIFRyYWNrIGlmIHRoZSBpbnB1dCBoYXMgYmVlbiBpbnRlcmFjdGVkIHdpdGhcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgICAgIC8vIFRvZ2dsZSBiZXR3ZWVuIFwicGFzc3dvcmRcIiBhbmQgXCJ0ZXh0XCIgZm9yIHZpc2liaWxpdHlcbiAgICAgIHRoaXMuaW5wdXRUeXBlID0gdGhpcy5pbnB1dFR5cGUgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xuICAgIH0sXG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiLCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0sXG4gICAgaGFuZGxlRm9jdXMoKSB7XG4gICAgICAvLyBNYXJrIHRoZSBpbnB1dCBhcyB0b3VjaGVkIHdoZW4gdGhlIHVzZXIgZm9jdXNlcyBvbiB0aGUgZmllbGRcbiAgICAgIHRoaXMudG91Y2hlZCA9IHRydWU7XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB0eXBlKHZhbCkge1xuICAgICAgdGhpcy5pbnB1dFR5cGUgPSB2YWw7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9WYXJpYW50QWJkdWxheml6L2Rldi9mcm9udGVuZC1xYS1zZWxlY3Rpb24vY29tcG9uZW50cy9hdG9tcy9pbnB1dC1maWVsZC52dWUifQ==