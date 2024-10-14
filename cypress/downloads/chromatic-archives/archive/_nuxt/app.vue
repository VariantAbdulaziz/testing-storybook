import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/app.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"
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
/* Injection by vite-plugin-vue-inspector End */

import AuthTemplate from "/_nuxt/components/templates/auth-template.vue";

const _sfc_main = {
  components: {
    AuthTemplate,
  },
};

import { resolveComponent as _resolveComponent,  openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = { "data-v-inspector": "app.vue:2:3" }

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AuthTemplate = _resolveComponent("AuthTemplate")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_AuthTemplate)
  ]))
}


_sfc_main.__hmrId = "938b83b0"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/app.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFLLENBQUUsWUFBVyxDQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztBQUVuRSxLQUFLLFVBQVU7RUFDYixVQUFVLEVBQUU7SUFDVixZQUFZO0VBQ2QsQ0FBQztBQUNILENBQUM7Ozs7cUJBWk0sa0JBQWdCLEVBQUMsYUFBYTs7Ozs7d0JBQW5DLG9CQUVNLE9BRk4sVUFFTTtJQURKLGFBQWdCIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJhcHAudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiYXBwLnZ1ZToyOjNcIj5cbiAgICA8QXV0aFRlbXBsYXRlIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBdXRoVGVtcGxhdGUgZnJvbSBcIi4vY29tcG9uZW50cy90ZW1wbGF0ZXMvYXV0aC10ZW1wbGF0ZS52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQXV0aFRlbXBsYXRlLFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9WYXJpYW50QWJkdWxheml6L2Rldi9mcm9udGVuZC1xYS1zZWxlY3Rpb24vYXBwLnZ1ZSJ9