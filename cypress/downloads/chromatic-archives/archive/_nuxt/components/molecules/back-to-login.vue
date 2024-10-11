import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/back-to-login.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import { FontAwesomeIcon } from "/_nuxt/node_modules/.cache/vite/client/deps/@fortawesome_vue-fontawesome.js?v=21adf959";

const _sfc_main = {
  name: "BackToLogin",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    currentIcon() {
      return this.isHovered ? ["fas", "arrow-left"] : ["fas", "chevron-left"];
    },
    textClass() {
      return this.isHovered ? "text-white" : "text-white/70";
    },
    iconClass() {
      return this.isHovered ? "text-white" : "text-white/70";
    },
  },
};

import { resolveComponent as _resolveComponent, normalizeClass as _normalizeClass, openBlock as _openBlock, createBlock as _createBlock,   } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = _resolveComponent("font-awesome-icon")

  return (_openBlock(), _createElementBlock("div", {
    class: "flex items-center mb-4 w-full gap-2 justify-center cursor-pointer",
    onMouseover: _cache[0] || (_cache[0] = $event => ($data.isHovered = true)),
    onMouseleave: _cache[1] || (_cache[1] = $event => ($data.isHovered = false)),
    "data-v-inspector": "components/molecules/back-to-login.vue:2:3"
  }, [
    (_openBlock(), _createBlock(_component_font_awesome_icon, {
      key: $options.currentIcon[1],
      icon: $options.currentIcon,
      class: _normalizeClass(["text-sm", $options.iconClass])
    }, null, 8 /* PROPS */, ["icon", "class"])),
    _createElementVNode("span", {
      class: _normalizeClass($options.textClass),
      "data-v-inspector": "components/molecules/back-to-login.vue:13:5"
    }, "Back to Log in", 2 /* CLASS */)
  ], 32 /* NEED_HYDRATION */))
}


_sfc_main.__hmrId = "b50a8f67"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/molecules/back-to-login.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsTUFBSyxDQUFFLEVBQUUsZUFBYyxDQUFFLEVBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzs7QUFFOUQsS0FBSyxVQUFVO0VBQ2IsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO0VBQ25CLFVBQVUsRUFBRTtJQUNWLGVBQWU7RUFDakIsQ0FBQztFQUNELElBQUksQ0FBQyxFQUFFO0lBQ0wsTUFBSyxDQUFFO01BQ0wsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztFQUNILENBQUM7RUFDRCxRQUFRLEVBQUU7SUFDUixXQUFXLENBQUMsRUFBRTtNQUNaLE1BQUssQ0FBRSxJQUFJLENBQUMsU0FBUSxDQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxTQUFTLENBQUMsRUFBRTtNQUNWLE1BQUssQ0FBRSxJQUFJLENBQUMsU0FBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsU0FBUyxDQUFDLEVBQUU7TUFDVixNQUFLLENBQUUsSUFBSSxDQUFDLFNBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQztFQUNILENBQUM7QUFDSCxDQUFDOzs7Ozs7O3dCQXZDQyxvQkFZTTtJQVhKLEtBQUssRUFBQyxtRUFBbUU7SUFDeEUsV0FBUyx1Q0FBRSxlQUFTO0lBQ3BCLFlBQVUsdUNBQUUsZUFBUztJQUFVLGtCQUFnQixFQUFDLDRDQUE0Qzs7bUJBRTdGLGFBS0U7TUFKQyxHQUFHLEVBQUUsb0JBQVc7TUFDaEIsSUFBSSxFQUFFLG9CQUFXO01BQ2xCLEtBQUssRUFUWCxpQkFTWSxTQUFTLEVBQ1Asa0JBQVM7O0lBRW5CLG9CQUE2RztNQUF0RyxLQUFLLEVBWmhCLGdCQVlrQixrQkFBUztNQUFFLGtCQUFnQixFQUFDLDZDQUE2QztPQUFDLGdCQUFjIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJiYWNrLXRvLWxvZ2luLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIG1iLTQgdy1mdWxsIGdhcC0yIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICBAbW91c2VvdmVyPVwiaXNIb3ZlcmVkID0gdHJ1ZVwiXG4gICAgQG1vdXNlbGVhdmU9XCJpc0hvdmVyZWQgPSBmYWxzZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9iYWNrLXRvLWxvZ2luLnZ1ZToyOjNcIlxuICA+XG4gICAgPGZvbnQtYXdlc29tZS1pY29uXG4gICAgICA6a2V5PVwiY3VycmVudEljb25bMV1cIlxuICAgICAgOmljb249XCJjdXJyZW50SWNvblwiXG4gICAgICBjbGFzcz1cInRleHQtc21cIlxuICAgICAgOmNsYXNzPVwiaWNvbkNsYXNzXCJcbiAgICAvPlxuICAgIDxzcGFuIDpjbGFzcz1cInRleHRDbGFzc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9iYWNrLXRvLWxvZ2luLnZ1ZToxMzo1XCI+QmFjayB0byBMb2cgaW48L3NwYW4+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJCYWNrVG9Mb2dpblwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgRm9udEF3ZXNvbWVJY29uLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0hvdmVyZWQ6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY3VycmVudEljb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0hvdmVyZWQgPyBbXCJmYXNcIiwgXCJhcnJvdy1sZWZ0XCJdIDogW1wiZmFzXCIsIFwiY2hldnJvbi1sZWZ0XCJdO1xuICAgIH0sXG4gICAgdGV4dENsYXNzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNIb3ZlcmVkID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtd2hpdGUvNzBcIjtcbiAgICB9LFxuICAgIGljb25DbGFzcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzSG92ZXJlZCA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LXdoaXRlLzcwXCI7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9WYXJpYW50QWJkdWxheml6L2Rldi9mcm9udGVuZC1xYS1zZWxlY3Rpb24vY29tcG9uZW50cy9tb2xlY3VsZXMvYmFjay10by1sb2dpbi52dWUifQ==