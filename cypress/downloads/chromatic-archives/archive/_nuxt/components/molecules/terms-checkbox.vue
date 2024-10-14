import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/terms-checkbox.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      localChecked: this.modelValue,
    };
  },
  watch: {
    localChecked(newValue) {
      this.$emit("update:checked", newValue);
    },
    modelValue(newValue) {
      this.localChecked = newValue; // Keep sync with parent prop changes
    },
  },
};

import { createCommentVNode as _createCommentVNode, vModelCheckbox as _vModelCheckbox,  withDirectives as _withDirectives, createTextVNode as _createTextVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "flex items-center text-white text-xs",
  "data-v-inspector": "components/molecules/terms-checkbox.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Checkbox Input with v-model to track and emit changes "),
    _withDirectives(_createElementVNode("input", {
      type: "checkbox",
      id: "terms-checkbox",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.localChecked) = $event)),
      class: "flex h-3 w-3 mr-2 cursor-pointer bg-black items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white",
      "data-v-inspector": "components/molecules/terms-checkbox.vue:4:5"
    }, null, 512 /* NEED_PATCH */), [
      [_vModelCheckbox, $data.localChecked]
    ]),
    _createCommentVNode(" Text and Links "),
    _cache[1] || (_cache[1] = _createElementVNode("span", { "data-v-inspector": "components/molecules/terms-checkbox.vue:11:5" }, [
      _createTextVNode(" I accept "),
      _createElementVNode("a", {
        href: "#",
        class: "underline text-primary hover:text-white",
        "data-v-inspector": "components/molecules/terms-checkbox.vue:13:7"
      }, "Terms & Conditions"),
      _createTextVNode(" and "),
      _createElementVNode("a", {
        href: "#",
        class: "underline text-primary hover:text-white",
        "data-v-inspector": "components/molecules/terms-checkbox.vue:17:7"
      }, "Privacy Policy"),
      _createTextVNode(". ")
    ], -1 /* HOISTED */))
  ]))
}


_sfc_main.__hmrId = "69a496fd"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/molecules/terms-checkbox.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsS0FBSyxVQUFVO0VBQ2IsS0FBSyxFQUFFO0lBQ0wsVUFBVSxFQUFFO01BQ1YsSUFBSSxFQUFFLE9BQU87TUFDYixRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0VBQ0gsQ0FBQztFQUNELElBQUksQ0FBQyxFQUFFO0lBQ0wsTUFBSyxDQUFFO01BQ0wsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVO0lBQy9CLENBQUM7RUFDSCxDQUFDO0VBQ0QsS0FBSyxFQUFFO0lBQ0wsWUFBWSxDQUFDLFFBQVEsRUFBRTtNQUNyQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDO0lBQ3hDLENBQUM7SUFDRCxVQUFVLENBQUMsUUFBUSxFQUFFO01BQ25CLElBQUksQ0FBQyxZQUFXLENBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUcsQ0FBRSxJQUFHLENBQUUsSUFBRyxDQUFFLE1BQUssQ0FBRSxJQUFHLENBQUUsT0FBTTtJQUNwRSxDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUM7Ozs7O0VBM0NNLEtBQUssRUFBQyxzQ0FBc0M7RUFBQyxrQkFBZ0IsRUFBQyw2Q0FBNkM7Ozs7d0JBQWhILG9CQW1CTSxPQW5CTixVQW1CTTtJQWxCSiw4RUFBOEQ7b0JBQzlELG9CQUtFO01BSkEsSUFBSSxFQUFDLFVBQVU7TUFDZixFQUFFLEVBQUMsZ0JBQWdCO01BTHpCLDZEQU1lLGtCQUFZO01BQ3JCLEtBQUssRUFBQywrSUFBK0k7TUFBQyxrQkFBZ0IsRUFBQyw2Q0FBNkM7O3dCQUQzTSxrQkFBWTs7SUFHdkIsdUNBQXVCOzhCQUN2QixvQkFTTyxVQVRELGtCQUFnQixFQUFDLDhDQUE4QztNQVZ6RSxpQkFVMEUsWUFFcEU7TUFBQSxvQkFFQztRQUZFLElBQUksRUFBQyxHQUFHO1FBQUMsS0FBSyxFQUFDLHlDQUF5QztRQUFDLGtCQUFnQixFQUFDLDhDQUE4QztTQUN4SCxvQkFBa0I7TUFiM0IsaUJBY08sT0FFRDtNQUFBLG9CQUVDO1FBRkUsSUFBSSxFQUFDLEdBQUc7UUFBQyxLQUFLLEVBQUMseUNBQXlDO1FBQUMsa0JBQWdCLEVBQUMsOENBQThDO1NBQ3hILGdCQUFjO01BakJ2QixpQkFrQk8sSUFDSCIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidGVybXMtY2hlY2tib3gudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC14c1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy90ZXJtcy1jaGVja2JveC52dWU6MjozXCI+XG4gICAgPCEtLSBDaGVja2JveCBJbnB1dCB3aXRoIHYtbW9kZWwgdG8gdHJhY2sgYW5kIGVtaXQgY2hhbmdlcyAtLT5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICBpZD1cInRlcm1zLWNoZWNrYm94XCJcbiAgICAgIHYtbW9kZWw9XCJsb2NhbENoZWNrZWRcIlxuICAgICAgY2xhc3M9XCJmbGV4IGgtMyB3LTMgbXItMiBjdXJzb3ItcG9pbnRlciBiZy1ibGFjayBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBib3JkZXIgcHQtMC41IHRyYW5zaXRpb24tYWxsIGJvcmRlci13aGl0ZS81MCBob3Zlcjpib3JkZXItd2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvdGVybXMtY2hlY2tib3gudnVlOjQ6NVwiXG4gICAgLz5cbiAgICA8IS0tIFRleHQgYW5kIExpbmtzIC0tPlxuICAgIDxzcGFuIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy90ZXJtcy1jaGVja2JveC52dWU6MTE6NVwiPlxuICAgICAgSSBhY2NlcHRcbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ1bmRlcmxpbmUgdGV4dC1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvdGVybXMtY2hlY2tib3gudnVlOjEzOjdcIlxuICAgICAgICA+VGVybXMgJiBDb25kaXRpb25zPC9hXG4gICAgICA+XG4gICAgICBhbmRcbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ1bmRlcmxpbmUgdGV4dC1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvdGVybXMtY2hlY2tib3gudnVlOjE3OjdcIlxuICAgICAgICA+UHJpdmFjeSBQb2xpY3k8L2FcbiAgICAgID4uXG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsQ2hlY2tlZDogdGhpcy5tb2RlbFZhbHVlLFxuICAgIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgbG9jYWxDaGVja2VkKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KFwidXBkYXRlOmNoZWNrZWRcIiwgbmV3VmFsdWUpO1xuICAgIH0sXG4gICAgbW9kZWxWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5sb2NhbENoZWNrZWQgPSBuZXdWYWx1ZTsgLy8gS2VlcCBzeW5jIHdpdGggcGFyZW50IHByb3AgY2hhbmdlc1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiJdLCJmaWxlIjoiL2hvbWUvVmFyaWFudEFiZHVsYXppei9kZXYvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Rlcm1zLWNoZWNrYm94LnZ1ZSJ9