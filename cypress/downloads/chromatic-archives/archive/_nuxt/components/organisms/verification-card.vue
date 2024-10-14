import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/verification-card.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock,createVNode as __createVNode } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import defaultLogo from "/_nuxt/assets/img/aladia.png?import";
import Button from "/_nuxt/components/atoms/button.vue";

const _sfc_main = {
  name: "VerificationCard",
  components: {
    Button,
  },
  props: {
    userName: {
      type: String,
      default: "Aladia User",
    },
    logo: {
      type: String,
      default: defaultLogo,
    },
  },
  data() {
    return {
      code: ["", "", "", "", "", ""],
    };
  },
  methods: {
    focusNext(index) {
      if (this.code[index].length === 1 && index < this.code.length - 1) {
        const nextInput = this.$refs["input" + (index + 1)];
        if (nextInput) {
          nextInput.focus();
        }
      }
    },
    handleSubmit() {
      const codeString = this.code.join("");
      if (codeString.length === 6) {
        console.log("Submitted Code:", codeString);
        // Handle submission logic here, e.g., call an API.
      } else {
        console.error("Please enter the complete 6-digit code.");
      }
    },
  },
};

import {  createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock,  vModelText as _vModelText, withDirectives as _withDirectives, resolveComponent as _resolveComponent, normalizeClass as _normalizeClass, withCtx as _withCtx,  createStaticVNode as _createStaticVNode } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "relative flex flex-col items-center w-full max-w-sm rounded-md border border-white/10 bg-black/50 px-8 py-4",
  "data-v-inspector": "components/organisms/verification-card.vue:2:3"
}
const _hoisted_2 = {
  class: "h-24 w-24 rounded",
  "data-v-inspector": "components/organisms/verification-card.vue:21:5"
}
const _hoisted_3 = ["src"]
const _hoisted_4 = {
  class: "text-white text-xl font-semibold",
  "data-v-inspector": "components/organisms/verification-card.vue:28:5"
}
const _hoisted_5 = {
  class: "flex justify-center gap-2 mt-16",
  "data-v-inspector": "components/organisms/verification-card.vue:40:5"
}
const _hoisted_6 = ["onUpdate:modelValue", "onInput"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[1] || (_cache[1] = _createStaticVNode("<div class=\"absolute inset-0 rounded-md pointer-events-none\" data-v-inspector=\"components/organisms/verification-card.vue:5:5\" data-v-88edeba8><div class=\"bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/verification-card.vue:6:7\" data-v-88edeba8></div><div class=\"bg-gradient-to-l from-transparent via-white to-transparent absolute bottom-0 left-0 h-[1px] w-full\" data-v-inspector=\"components/organisms/verification-card.vue:9:7\" data-v-88edeba8></div><div class=\"bg-gradient-to-b from-transparent via-white to-transparent absolute top-0 left-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/verification-card.vue:12:7\" data-v-88edeba8></div><div class=\"bg-gradient-to-t from-transparent via-white to-transparent absolute top-0 right-0 w-[1px] h-full\" data-v-inspector=\"components/organisms/verification-card.vue:15:7\" data-v-88edeba8></div></div>", 1)),
    _createCommentVNode(" User Info section "),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("img", {
        src: $props.logo,
        alt: "Profile picture",
        class: "inset-0 h-full w-full rounded object-cover",
        "data-v-inspector": "components/organisms/verification-card.vue:22:7"
      }, null, 8 /* PROPS */, _hoisted_3)
    ]),
    _createElementVNode("h2", _hoisted_4, _toDisplayString($props.userName), 1 /* TEXT */),
    _createCommentVNode(" Welcome Text "),
    _cache[2] || (_cache[2] = _createElementVNode("p", {
      class: "text-white/70 mt-4",
      "data-v-inspector": "components/organisms/verification-card.vue:31:5"
    }, "Thanks for joining Aladia.", -1 /* HOISTED */)),
    _createCommentVNode(" Instruction Text "),
    _cache[3] || (_cache[3] = _createElementVNode("p", {
      class: "text-white/70 text-center mt-8",
      "data-v-inspector": "components/organisms/verification-card.vue:34:5"
    }, " Please enter below the 6-digit code we sent you through your registration e-mail: ", -1 /* HOISTED */)),
    _createCommentVNode(" Code Input Fields "),
    _createElementVNode("div", _hoisted_5, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList($data.code, (digit, index) => {
        return _withDirectives((_openBlock(), _createElementBlock("input", {
          key: index,
          type: "text",
          maxlength: "1",
          "onUpdate:modelValue": $event => (($data.code[index]) = $event),
          onInput: $event => ($options.focusNext(index)),
          ref_for: true,
          ref: 'input' + index,
          class: "w-8 h-8 text-center text-black text-lg rounded-md border border-gray-300",
          "data-v-inspector": "components/organisms/verification-card.vue:41:7"
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_6)), [
          [_vModelText, $data.code[index]]
        ])
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _createCommentVNode(" Help Text "),
    _cache[4] || (_cache[4] = _createElementVNode("p", {
      class: "text-white/70 text-xs mt-2",
      "data-v-inspector": "components/organisms/verification-card.vue:54:5"
    }, "You didn't receive any mail?", -1 /* HOISTED */)),
    _createCommentVNode(" Submit Button "),
    _createVNode(_component_Button, {
      class: _normalizeClass([
        'relative flex h-10 w-full mt-16 mb-8 items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm transition-all',
      ]),
      onClick: $options.handleSubmit
    }, {
      default: _withCtx(() => _cache[0] || (_cache[0] = [
        _createElementVNode("div", {
          class: "gradient absolute w-full h-full inset-0 opacity-50",
          "data-v-inspector": "components/organisms/verification-card.vue:63:7"
        }, null, -1 /* HOISTED */),
        _createElementVNode("div", { "data-v-inspector": "components/organisms/verification-card.vue:64:7" }, "Enter", -1 /* HOISTED */)
      ])),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"])
  ]))
}

import "/_nuxt/components/organisms/verification-card.vue?vue&type=style&index=0&scoped=88edeba8&lang.css"

_sfc_main.__hmrId = "88edeba8"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-88edeba8"],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/organisms/verification-card.vue"]])
//# sourceMappingURL=data:application/json;base64,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QUFLLEVBQUMsb0RBQW9EO1VBQUMsa0JBQWdCLEVBQUMsaURBQWlEOztRQUNsSSxvQkFBbUYsU0FBOUUsa0JBQWdCLEVBQUMsaURBQWlELElBQUMsT0FBSzs7TUEvRG5GIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJ2ZXJpZmljYXRpb24tY2FyZC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWF4LXctc20gcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLWJsYWNrLzUwIHB4LTggcHktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWU6MjozXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtbWQgcG9pbnRlci1ldmVudHMtbm9uZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWU6NTo1XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1bMXB4XSB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjY6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tbCBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgaC1bMXB4XSB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjk6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYmctZ3JhZGllbnQtdG8tYiBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZSB0by10cmFuc3BhcmVudCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1bMXB4XSBoLWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjEyOjdcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYWRpZW50LXRvLXQgZnJvbS10cmFuc3BhcmVudCB2aWEtd2hpdGUgdG8tdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB3LVsxcHhdIGgtZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWU6MTU6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFVzZXIgSW5mbyBzZWN0aW9uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJoLTI0IHctMjQgcm91bmRlZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWU6MjE6NVwiPlxuICAgICAgPGltZ1xuICAgICAgICA6c3JjPVwibG9nb1wiXG4gICAgICAgIGFsdD1cIlByb2ZpbGUgcGljdHVyZVwiXG4gICAgICAgIGNsYXNzPVwiaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQgb2JqZWN0LWNvdmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3ZlcmlmaWNhdGlvbi1jYXJkLnZ1ZToyMjo3XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGgyIGNsYXNzPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjI4OjVcIj57eyB1c2VyTmFtZSB9fTwvaDI+XG5cbiAgICA8IS0tIFdlbGNvbWUgVGV4dCAtLT5cbiAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUvNzAgbXQtNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWU6MzE6NVwiPlRoYW5rcyBmb3Igam9pbmluZyBBbGFkaWEuPC9wPlxuXG4gICAgPCEtLSBJbnN0cnVjdGlvbiBUZXh0IC0tPlxuICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZS83MCB0ZXh0LWNlbnRlciBtdC04XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL3ZlcmlmaWNhdGlvbi1jYXJkLnZ1ZTozNDo1XCI+XG4gICAgICBQbGVhc2UgZW50ZXIgYmVsb3cgdGhlIDYtZGlnaXQgY29kZSB3ZSBzZW50IHlvdSB0aHJvdWdoIHlvdXIgcmVnaXN0cmF0aW9uXG4gICAgICBlLW1haWw6XG4gICAgPC9wPlxuXG4gICAgPCEtLSBDb2RlIElucHV0IEZpZWxkcyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMiBtdC0xNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWU6NDA6NVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHYtZm9yPVwiKGRpZ2l0LCBpbmRleCkgaW4gY29kZVwiXG4gICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbWF4bGVuZ3RoPVwiMVwiXG4gICAgICAgIHYtbW9kZWw9XCJjb2RlW2luZGV4XVwiXG4gICAgICAgIEBpbnB1dD1cImZvY3VzTmV4dChpbmRleClcIlxuICAgICAgICA6cmVmPVwiJ2lucHV0JyArIGluZGV4XCJcbiAgICAgICAgY2xhc3M9XCJ3LTggaC04IHRleHQtY2VudGVyIHRleHQtYmxhY2sgdGV4dC1sZyByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjQxOjdcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gSGVscCBUZXh0IC0tPlxuICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZS83MCB0ZXh0LXhzIG10LTJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjU0OjVcIj5Zb3UgZGlkbid0IHJlY2VpdmUgYW55IG1haWw/PC9wPlxuXG4gICAgPCEtLSBTdWJtaXQgQnV0dG9uIC0tPlxuICAgIDxCdXR0b25cbiAgICAgIDpjbGFzcz1cIltcbiAgICAgICAgJ3JlbGF0aXZlIGZsZXggaC0xMCB3LWZ1bGwgbXQtMTYgbWItOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLWJsYWNrIHRleHQtY2VudGVyIHRleHQtc20gdHJhbnNpdGlvbi1hbGwnLFxuICAgICAgXVwiXG4gICAgICBAY2xpY2s9XCJoYW5kbGVTdWJtaXRcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmFkaWVudCBhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGluc2V0LTAgb3BhY2l0eS01MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWU6NjM6N1wiPjwvZGl2PlxuICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvdmVyaWZpY2F0aW9uLWNhcmQudnVlOjY0OjdcIj5FbnRlcjwvZGl2PlxuICAgIDwvQnV0dG9uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZGVmYXVsdExvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWcvYWxhZGlhLnBuZ1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYXRvbXMvYnV0dG9uLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiVmVyaWZpY2F0aW9uQ2FyZFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQnV0dG9uLFxuICB9LFxuICBwcm9wczoge1xuICAgIHVzZXJOYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIkFsYWRpYSBVc2VyXCIsXG4gICAgfSxcbiAgICBsb2dvOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBkZWZhdWx0TG9nbyxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZvY3VzTmV4dChpbmRleCkge1xuICAgICAgaWYgKHRoaXMuY29kZVtpbmRleF0ubGVuZ3RoID09PSAxICYmIGluZGV4IDwgdGhpcy5jb2RlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgbmV4dElucHV0ID0gdGhpcy4kcmVmc1tcImlucHV0XCIgKyAoaW5kZXggKyAxKV07XG4gICAgICAgIGlmIChuZXh0SW5wdXQpIHtcbiAgICAgICAgICBuZXh0SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlU3VibWl0KCkge1xuICAgICAgY29uc3QgY29kZVN0cmluZyA9IHRoaXMuY29kZS5qb2luKFwiXCIpO1xuICAgICAgaWYgKGNvZGVTdHJpbmcubGVuZ3RoID09PSA2KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0dGVkIENvZGU6XCIsIGNvZGVTdHJpbmcpO1xuICAgICAgICAvLyBIYW5kbGUgc3VibWlzc2lvbiBsb2dpYyBoZXJlLCBlLmcuLCBjYWxsIGFuIEFQSS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UgZW50ZXIgdGhlIGNvbXBsZXRlIDYtZGlnaXQgY29kZS5cIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxNWRlZyxcbiAgICAjZmZmMCA4LjMzJSxcbiAgICAjZmZmMCAyNy40MyUsXG4gICAgI2ZmZjYsXG4gICAgI2ZmZjAgMzcuODUlLFxuICAgICNmZmYwIDUzLjkxJSxcbiAgICAjZmZmIDYyLjE1JSxcbiAgICAjZmZmMCA2OC4yMyUsXG4gICAgI2ZmZiA5MS42NyVcbiAgKTtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL29yZ2FuaXNtcy92ZXJpZmljYXRpb24tY2FyZC52dWUifQ==