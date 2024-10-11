import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/divider.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"
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
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
  name: "Divider",
};

import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "flex items-center justify-between gap-4 text-white",
  "data-v-inspector": "components/atoms/divider.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    _createElementVNode("div", {
      class: "h-[1px] w-40 bg-gradient-to-r from-white/0 to-white",
      "data-v-inspector": "components/atoms/divider.vue:3:5"
    }, null, -1 /* HOISTED */),
    _createElementVNode("div", { "data-v-inspector": "components/atoms/divider.vue:4:5" }, "Or", -1 /* HOISTED */),
    _createElementVNode("div", {
      class: "h-[1px] w-40 bg-gradient-to-r from-white to-white/0",
      "data-v-inspector": "components/atoms/divider.vue:5:5"
    }, null, -1 /* HOISTED */)
  ])))
}


_sfc_main.__hmrId = "72ef630e"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/atoms/divider.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFTQSxLQUFLLFVBQVU7RUFDYixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7QUFDakIsQ0FBQzs7Ozs7RUFWTSxLQUFLLEVBQUMsb0RBQW9EO0VBQUMsa0JBQWdCLEVBQUMsa0NBQWtDOzs7O3dCQUFuSCxvQkFJTSxPQUpOLFVBSU07SUFISixvQkFBMkg7TUFBdEgsS0FBSyxFQUFDLHFEQUFxRDtNQUFDLGtCQUFnQixFQUFDLGtDQUFrQzs7SUFDcEgsb0JBQWlFLFNBQTVELGtCQUFnQixFQUFDLGtDQUFrQyxJQUFDLElBQUU7SUFDM0Qsb0JBQTJIO01BQXRILEtBQUssRUFBQyxxREFBcUQ7TUFBQyxrQkFBZ0IsRUFBQyxrQ0FBa0MiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImRpdmlkZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvZGl2aWRlci52dWU6MjozXCI+XG4gICAgPGRpdiBjbGFzcz1cImgtWzFweF0gdy00MCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUvMCB0by13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL2RpdmlkZXIudnVlOjM6NVwiPjwvZGl2PlxuICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvZGl2aWRlci52dWU6NDo1XCI+T3I8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaC1bMXB4XSB3LTQwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZSB0by13aGl0ZS8wXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvZGl2aWRlci52dWU6NTo1XCI+PC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJEaXZpZGVyXCIsXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiJdLCJmaWxlIjoiL2hvbWUvVmFyaWFudEFiZHVsYXppei9kZXYvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2NvbXBvbmVudHMvYXRvbXMvZGl2aWRlci52dWUifQ==