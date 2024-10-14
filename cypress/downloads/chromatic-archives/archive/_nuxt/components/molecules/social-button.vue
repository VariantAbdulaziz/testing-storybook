import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/social-button.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import Button from "/_nuxt/components/atoms/button.vue";
const _sfc_main = {
  components: { Button },
  props: {
    iconSrc: String,
    label: String,
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};

import {  toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = ["src"]
const _hoisted_2 = {
  class: "flex-1 max-w-56 text-left",
  "data-v-inspector": "components/molecules/social-button.vue:8:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createBlock(_component_Button, {
    class: "flex w-full items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95",
    type: 'secondary',
    onClick: $options.onClick
  }, {
    default: _withCtx(() => [
      _createElementVNode("img", {
        src: $props.iconSrc,
        class: "ml-auto h-6 w-6",
        "data-v-inspector": "components/molecules/social-button.vue:7:5"
      }, null, 8 /* PROPS */, _hoisted_1),
      _createElementVNode("span", _hoisted_2, _toDisplayString($props.label), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"]))
}


_sfc_main.__hmrId = "e54521f7"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/molecules/social-button.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE1BQUssQ0FBRSxNQUFLLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDeEMsS0FBSyxVQUFVO0VBQ2IsVUFBVSxFQUFFLEVBQUUsTUFBSyxDQUFFLENBQUM7RUFDdEIsS0FBSyxFQUFFO0lBQ0wsT0FBTyxFQUFFLE1BQU07SUFDZixLQUFLLEVBQUUsTUFBTTtFQUNmLENBQUM7RUFDRCxPQUFPLEVBQUU7SUFDUCxPQUFPLENBQUMsRUFBRTtNQUNSLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7RUFDSCxDQUFDO0FBQ0gsQ0FBQzs7OzttQkF4QkQ7O0VBT1UsS0FBSyxFQUFDLDJCQUEyQjtFQUFDLGtCQUFnQixFQUFDLDRDQUE0Qzs7Ozs7O3dCQU52RyxhQU9TO0lBTlAsS0FBSyxFQUFDLHdNQUF3TTtJQUM3TSxJQUFJLEVBQUUsV0FBVztJQUNqQixPQUFLLEVBQUUsZ0JBQU87O0lBSm5CLGtCQU1JLENBQTRHO01BQTVHLG9CQUE0RztRQUF0RyxHQUFHLEVBQUUsY0FBTztRQUFFLEtBQUssRUFBQyxpQkFBaUI7UUFBQyxrQkFBZ0IsRUFBQyw0Q0FBNEM7OEJBTjdHO01BT0ksb0JBQXdILFFBQXhILFVBQXdILG1CQUFmLFlBQUs7O0lBUGxIIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzb2NpYWwtYnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxCdXR0b25cbiAgICBjbGFzcz1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCByb3VuZGVkIGJvcmRlciBib3JkZXItd2hpdGUvMjAgcHktMS41IHNoYWRvdy1bMHB4XzNweF82cHhfIzAwMDAwMDAwXSB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy13aGl0ZS8yMCBob3ZlcjpzaGFkb3ctWzBweF8zcHhfNnB4XyMwMDAwMDBdIGFjdGl2ZTpzY2FsZS05NVwiXG4gICAgOnR5cGU9XCInc2Vjb25kYXJ5J1wiXG4gICAgQGNsaWNrPVwib25DbGlja1wiXG4gID5cbiAgICA8aW1nIDpzcmM9XCJpY29uU3JjXCIgY2xhc3M9XCJtbC1hdXRvIGgtNiB3LTZcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvc29jaWFsLWJ1dHRvbi52dWU6Nzo1XCIgLz5cbiAgICA8c3BhbiBjbGFzcz1cImZsZXgtMSBtYXgtdy01NiB0ZXh0LWxlZnRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvc29jaWFsLWJ1dHRvbi52dWU6ODo1XCI+e3sgbGFiZWwgfX08L3NwYW4+XG4gIDwvQnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2F0b21zL2J1dHRvbi52dWVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBCdXR0b24gfSxcbiAgcHJvcHM6IHtcbiAgICBpY29uU3JjOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2soKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xpY2tcIik7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvVmFyaWFudEFiZHVsYXppei9kZXYvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3NvY2lhbC1idXR0b24udnVlIn0=