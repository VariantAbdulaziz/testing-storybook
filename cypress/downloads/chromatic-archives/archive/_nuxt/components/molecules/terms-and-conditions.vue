import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/terms-and-conditions.vue");/* Injection by vite-plugin-vue-inspector Start */
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

const _sfc_main = {
  name: "TermsAndConditions",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};

import { withKeys as _withKeys, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    class: "cursor-pointer text-center text-white/40 transition-colors hover:text-white focus:text-white focus:outline-none",
    role: "button",
    tabindex: "0",
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.onClick && $options.onClick(...args))),
    onKeydown: _cache[1] || (_cache[1] = _withKeys((...args) => ($options.onClick && $options.onClick(...args)), ["enter"])),
    "data-v-inspector": "components/molecules/terms-and-conditions.vue:2:3"
  }, " Terms & Conditions ", 32 /* NEED_HYDRATION */))
}


_sfc_main.__hmrId = "c26e7852"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/molecules/terms-and-conditions.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO0VBQzFCLE9BQU8sRUFBRTtJQUNQLE9BQU8sQ0FBQyxFQUFFO01BQ1IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztFQUNILENBQUM7QUFDSCxDQUFDOzs7Ozt3QkFuQkMsb0JBUU07SUFQSixLQUFLLEVBQUMsaUhBQWlIO0lBQ3ZILElBQUksRUFBQyxRQUFRO0lBQ2IsUUFBUSxFQUFDLEdBQUc7SUFDWCxPQUFLLDBDQUFFLDZDQUFPO0lBQ2QsU0FBTyw0QkFOWix3QkFNb0IsNkNBQU87SUFBRSxrQkFBZ0IsRUFBQyxtREFBbUQ7S0FDOUYsc0JBRUQiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInRlcm1zLWFuZC1jb25kaXRpb25zLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyIHRleHQtd2hpdGUvNDAgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC13aGl0ZSBmb2N1czp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgcm9sZT1cImJ1dHRvblwiXG4gICAgdGFiaW5kZXg9XCIwXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgICBAa2V5ZG93bi5lbnRlcj1cIm9uQ2xpY2tcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvdGVybXMtYW5kLWNvbmRpdGlvbnMudnVlOjI6M1wiXG4gID5cbiAgICBUZXJtcyAmYW1wOyBDb25kaXRpb25zXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJUZXJtc0FuZENvbmRpdGlvbnNcIixcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2soKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xpY2tcIik7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9WYXJpYW50QWJkdWxheml6L2Rldi9mcm9udGVuZC1xYS1zZWxlY3Rpb24vY29tcG9uZW50cy9tb2xlY3VsZXMvdGVybXMtYW5kLWNvbmRpdGlvbnMudnVlIn0=