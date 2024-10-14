import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/button.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};

import { renderSlot as _renderSlot, normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("button", {
    class: _normalizeClass([
      'flex text-white items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-sm transition-all hover:bg-white/20 active:scale-95',
      $props.type === 'primary' ? 'bg-black text-white' : 'text-black',
    ]),
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.onClick && $options.onClick(...args))),
    "data-v-inspector": "components/atoms/button.vue:2:3"
  }, [
    _renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}


_sfc_main.__hmrId = "d9dd3bec"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/atoms/button.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBLEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztFQUNkLEtBQUssRUFBRTtJQUNMLElBQUksRUFBRTtNQUNKLElBQUksRUFBRSxNQUFNO01BQ1osT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ3BCLENBQUM7RUFDSCxDQUFDO0VBQ0QsT0FBTyxFQUFFO0lBQ1AsT0FBTyxDQUFDLEVBQUU7TUFDUixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUM7Ozs7O3dCQXpCQyxvQkFRUztJQVBOLEtBQUssRUFGVjs7TUFFZ0wsV0FBSTs7SUFJL0ssT0FBSywwQ0FBRSw2Q0FBTztJQUFFLGtCQUFnQixFQUFDLGlDQUFpQzs7SUFFbkUsWUFBYSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxidXR0b25cbiAgICA6Y2xhc3M9XCJbXG4gICAgICAnZmxleCB0ZXh0LXdoaXRlIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCByb3VuZGVkIGJvcmRlciBib3JkZXItd2hpdGUvMjAgcHktMS41IHNoYWRvdy1zbSB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy13aGl0ZS8yMCBhY3RpdmU6c2NhbGUtOTUnLFxuICAgICAgdHlwZSA9PT0gJ3ByaW1hcnknID8gJ2JnLWJsYWNrIHRleHQtd2hpdGUnIDogJ3RleHQtYmxhY2snLFxuICAgIF1cIlxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9idXR0b24udnVlOjI6M1wiXG4gID5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJCdXR0b25cIixcbiAgcHJvcHM6IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcInByaW1hcnlcIixcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljaygpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJjbGlja1wiKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL2F0b21zL2J1dHRvbi52dWUifQ==