import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/hero.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import AladiaLogo from "/_nuxt/assets/img/aladia.png?import";

const _sfc_main = {
  name: "Hero",
  props: {
    title: {
      type: String,
      default: "Welcome to Aladia,", // Default title if none is provided
    },
    subtitle: {
      type: String,
      default: "Create or access your account from here", // Default subtitle if none is provided
    },
  },
  setup() {
    return { AladiaLogo };
  },
};

import { createCommentVNode as _createCommentVNode,  toDisplayString as _toDisplayString, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "relative flex items-center justify-between overflow-hidden rounded border border-white/20 bg-black/80 px-8 py-6 opacity-80",
  "data-v-inspector": "components/molecules/hero.vue:2:3"
}
const _hoisted_2 = {
  class: "relative flex w-full justify-between items-center",
  "data-v-inspector": "components/molecules/hero.vue:7:5"
}
const _hoisted_3 = ["src"]
const _hoisted_4 = {
  class: "text-left max-w-40 ml-4",
  "data-v-inspector": "components/molecules/hero.vue:9:7"
}
const _hoisted_5 = {
  class: "mb-2 text-base font-semibold text-white",
  "data-v-inspector": "components/molecules/hero.vue:10:9"
}
const _hoisted_6 = {
  class: "text-white/70 leading-tight text-sm",
  "data-v-inspector": "components/molecules/hero.vue:13:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Background Gradient "),
    _cache[0] || (_cache[0] = _createElementVNode("div", {
      class: "absolute inset-0 gradient opacity-[0.15]",
      "data-v-inspector": "components/molecules/hero.vue:6:5"
    }, null, -1 /* HOISTED */)),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("img", {
        src: $setup.AladiaLogo,
        alt: "Aladia Logo",
        class: "h-20 w-20 object-cover",
        "data-v-inspector": "components/molecules/hero.vue:8:7"
      }, null, 8 /* PROPS */, _hoisted_3),
      _createElementVNode("div", _hoisted_4, [
        _createElementVNode("div", _hoisted_5, _toDisplayString($props.title), 1 /* TEXT */),
        _createElementVNode("div", _hoisted_6, _toDisplayString($props.subtitle), 1 /* TEXT */)
      ])
    ])
  ]))
}

import "/_nuxt/components/molecules/hero.vue?vue&type=style&index=0&scoped=7d94c5ae&lang.css"

_sfc_main.__hmrId = "7d94c5ae"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-7d94c5ae"],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/molecules/hero.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsTUFBSyxDQUFFLFVBQVMsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7O0FBRXBELEtBQUssVUFBVTtFQUNiLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztFQUNaLEtBQUssRUFBRTtJQUNMLEtBQUssRUFBRTtNQUNMLElBQUksRUFBRSxNQUFNO01BQ1osT0FBTyxFQUFFLENBQUMsT0FBTSxDQUFFLEVBQUMsQ0FBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFNLENBQUUsS0FBSSxDQUFFLEVBQUMsQ0FBRSxJQUFHLENBQUUsRUFBQyxDQUFFLFFBQU87SUFDcEUsQ0FBQztJQUNELFFBQVEsRUFBRTtNQUNSLElBQUksRUFBRSxNQUFNO01BQ1osT0FBTyxFQUFFLENBQUMsTUFBSyxDQUFFLEVBQUMsQ0FBRSxNQUFLLENBQUUsSUFBRyxDQUFFLE9BQU0sQ0FBRSxJQUFHLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU0sQ0FBRSxRQUFPLENBQUUsRUFBQyxDQUFFLElBQUcsQ0FBRSxFQUFDLENBQUUsUUFBTztJQUM1RixDQUFDO0VBQ0gsQ0FBQztFQUNELEtBQUssQ0FBQyxFQUFFO0lBQ04sTUFBSyxDQUFFLEVBQUUsVUFBUyxDQUFFLENBQUM7RUFDdkIsQ0FBQztBQUNILENBQUM7Ozs7O0VBcENHLEtBQUssRUFBQyw0SEFBNEg7RUFBQyxrQkFBZ0IsRUFBQyxtQ0FBbUM7OztFQUlsTCxLQUFLLEVBQUMsbURBQW1EO0VBQUMsa0JBQWdCLEVBQUMsbUNBQW1DOzttQkFOdkg7O0VBUVcsS0FBSyxFQUFDLHlCQUF5QjtFQUFDLGtCQUFnQixFQUFDLG1DQUFtQzs7O0VBQ2xGLEtBQUssRUFBQyx5Q0FBeUM7RUFBQyxrQkFBZ0IsRUFBQyxvQ0FBb0M7OztFQUdyRyxLQUFLLEVBQUMscUNBQXFDO0VBQUMsa0JBQWdCLEVBQUMsb0NBQW9DOzs7O3dCQVg1RyxvQkFnQk0sT0FoQk4sVUFnQk07SUFiSiw0Q0FBNEI7OEJBQzVCLG9CQUFpSDtNQUE1RyxLQUFLLEVBQUMsMENBQTBDO01BQUMsa0JBQWdCLEVBQUMsbUNBQW1DOztJQUMxRyxvQkFVTSxPQVZOLFVBVU07TUFUSixvQkFBK0g7UUFBekgsR0FBRyxFQUFFLGlCQUFVO1FBQUUsR0FBRyxFQUFDLGFBQWE7UUFBQyxLQUFLLEVBQUMsd0JBQXdCO1FBQUMsa0JBQWdCLEVBQUMsbUNBQW1DOzhCQVBsSTtNQVFNLG9CQU9NLE9BUE4sVUFPTTtRQU5KLG9CQUVNLE9BRk4sVUFFTSxtQkFERCxZQUFLO1FBRVYsb0JBRU0sT0FGTixVQUVNLG1CQURELGVBQVEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImhlcm8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIGJvcmRlciBib3JkZXItd2hpdGUvMjAgYmctYmxhY2svODAgcHgtOCBweS02IG9wYWNpdHktODBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvaGVyby52dWU6MjozXCJcbiAgPlxuICAgIDwhLS0gQmFja2dyb3VuZCBHcmFkaWVudCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBncmFkaWVudCBvcGFjaXR5LVswLjE1XVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9oZXJvLnZ1ZTo2OjVcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9oZXJvLnZ1ZTo3OjVcIj5cbiAgICAgIDxpbWcgOnNyYz1cIkFsYWRpYUxvZ29cIiBhbHQ9XCJBbGFkaWEgTG9nb1wiIGNsYXNzPVwiaC0yMCB3LTIwIG9iamVjdC1jb3ZlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9oZXJvLnZ1ZTo4OjdcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtbGVmdCBtYXgtdy00MCBtbC00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL2hlcm8udnVlOjk6N1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItMiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL2hlcm8udnVlOjEwOjlcIj5cbiAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd2hpdGUvNzAgbGVhZGluZy10aWdodCB0ZXh0LXNtXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL2hlcm8udnVlOjEzOjlcIj5cbiAgICAgICAgICB7eyBzdWJ0aXRsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQWxhZGlhTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9hbGFkaWEucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJIZXJvXCIsXG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiV2VsY29tZSB0byBBbGFkaWEsXCIsIC8vIERlZmF1bHQgdGl0bGUgaWYgbm9uZSBpcyBwcm92aWRlZFxuICAgIH0sXG4gICAgc3VidGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiQ3JlYXRlIG9yIGFjY2VzcyB5b3VyIGFjY291bnQgZnJvbSBoZXJlXCIsIC8vIERlZmF1bHQgc3VidGl0bGUgaWYgbm9uZSBpcyBwcm92aWRlZFxuICAgIH0sXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7IEFsYWRpYUxvZ28gfTtcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAxNWRlZyxcbiAgICAjZmZmMCA4LjMzJSxcbiAgICAjZmZmMCAyNy40MyUsXG4gICAgI2ZmZjYsXG4gICAgI2ZmZjAgMzcuODUlLFxuICAgICNmZmYwIDUzLjkxJSxcbiAgICAjZmZmIDYyLjE1JSxcbiAgICAjZmZmMCA2OC4yMyUsXG4gICAgI2ZmZiA5MS42NyVcbiAgKTtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL21vbGVjdWxlcy9oZXJvLnZ1ZSJ9