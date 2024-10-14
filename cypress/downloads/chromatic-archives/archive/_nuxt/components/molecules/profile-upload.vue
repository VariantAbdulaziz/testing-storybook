import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/profile-upload.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import { ref, computed } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959";
import AladiaLogo from "/_nuxt/assets/img/aladia.png?import";

const _sfc_main = {
  name: "ProfileUpload",
  props: {
    modelValue: {
      type: File,
      default: null,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const profileImage = ref(props.modelValue);
    const defaultImage = AladiaLogo;
    const fileInput = ref(null);

    const profileImageUrl = computed(() => {
      if (profileImage.value) {
        return URL.createObjectURL(profileImage.value);
      }
      return defaultImage;
    });

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        if (profileImage.value) {
          URL.revokeObjectURL(profileImageUrl.value);
        }
        profileImage.value = file;
        emit("update:modelValue", file);
      }
    };

    const triggerFileInput = (event) => {
      // Prevent triggering the input when clicking on the file input itself
      if (event.target !== fileInput.value) {
        fileInput.value.click();
      }
    };

    return {
      profileImage,
      profileImageUrl,
      handleImageUpload,
      triggerFileInput,
      fileInput,
    };
  },
};

import {  createCommentVNode as _createCommentVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=21adf959"

const _hoisted_1 = {
  class: "relative min-h-24 min-w-24 rounded border transition-all border-white/20 hover:border-white",
  "data-v-inspector": "components/molecules/profile-upload.vue:6:5"
}
const _hoisted_2 = ["src"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    class: "relative flex w-full justify-between items-center",
    onClick: _cache[1] || (_cache[1] = (...args) => ($setup.triggerFileInput && $setup.triggerFileInput(...args))),
    "data-v-inspector": "components/molecules/profile-upload.vue:2:3"
  }, [
    _createElementVNode("div", _hoisted_1, [
      _cache[2] || (_cache[2] = _createElementVNode("div", {
        class: "gradient absolute inset-0 opacity-20",
        "data-v-inspector": "components/molecules/profile-upload.vue:9:7"
      }, null, -1 /* HOISTED */)),
      _createElementVNode("img", {
        src: $setup.profileImageUrl,
        alt: "Profile Image",
        class: "absolute inset-0 h-full w-full rounded object-cover",
        "data-v-inspector": "components/molecules/profile-upload.vue:10:7"
      }, null, 8 /* PROPS */, _hoisted_2),
      _createCommentVNode(" Hidden File Input "),
      _createElementVNode("input", {
        id: "file-upload",
        type: "file",
        accept: "image/*",
        ref: "fileInput",
        style: {"display":"none"},
        onChange: _cache[0] || (_cache[0] = (...args) => ($setup.handleImageUpload && $setup.handleImageUpload(...args))),
        "data-v-inspector": "components/molecules/profile-upload.vue:16:7"
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */),
      _cache[3] || (_cache[3] = _createElementVNode("div", {
        class: "absolute inset-0 flex items-end justify-center pb-4",
        "data-v-inspector": "components/molecules/profile-upload.vue:24:7"
      }, null, -1 /* HOISTED */))
    ]),
    _cache[4] || (_cache[4] = _createElementVNode("div", {
      class: "text-left ml-4",
      "data-v-inspector": "components/molecules/profile-upload.vue:26:5"
    }, [
      _createElementVNode("div", {
        class: "mb-2 text-base font-semibold text-white",
        "data-v-inspector": "components/molecules/profile-upload.vue:27:7"
      }, " Nice to meet you, "),
      _createElementVNode("div", {
        class: "text-white/70 leading-tight text-sm",
        "data-v-inspector": "components/molecules/profile-upload.vue:30:7"
      }, " Upload a profile picture and complete your presentation ")
    ], -1 /* HOISTED */))
  ]))
}

import "/_nuxt/components/molecules/profile-upload.vue?vue&type=style&index=0&scoped=55c075a4&lang.css"

_sfc_main.__hmrId = "55c075a4"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-55c075a4"],['__file',"/home/VariantAbdulaziz/dev/frontend-qa-selection/components/molecules/profile-upload.vue"]])
//# sourceMappingURL=data:application/json;base64,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LEVBQUMsNkNBQTZDOztNQUNoSCxvQkFJRTtRQUhDLEdBQUcsRUFBRSxzQkFBZTtRQUNyQixHQUFHLEVBQUMsZUFBZTtRQUNuQixLQUFLLEVBQUMscURBQXFEO1FBQUMsa0JBQWdCLEVBQUMsOENBQThDOzhCQVpuSTtNQWNNLDBDQUEwQjtNQUMxQixvQkFPRTtRQU5BLEVBQUUsRUFBQyxhQUFhO1FBQ2hCLElBQUksRUFBQyxNQUFNO1FBQ1gsTUFBTSxFQUFDLFNBQVM7UUFDaEIsR0FBRyxFQUFDLFdBQVc7UUFDZixLQUFxQixFQUFyQixrQkFBcUI7UUFDcEIsUUFBTSwwQ0FBRSw2REFBaUI7UUFBRSxrQkFBZ0IsRUFBQyw4Q0FBOEM7O2dDQUU3RixvQkFBdUk7UUFBbEksS0FBSyxFQUFDLHFEQUFxRDtRQUFDLGtCQUFnQixFQUFDLDhDQUE4Qzs7OzhCQUVsSSxvQkFPTTtNQVBELEtBQUssRUFBQyxnQkFBZ0I7TUFBQyxrQkFBZ0IsRUFBQyw4Q0FBOEM7O01BQ3pGLG9CQUVNO1FBRkQsS0FBSyxFQUFDLHlDQUF5QztRQUFDLGtCQUFnQixFQUFDLDhDQUE4QztTQUFDLHFCQUVySDtNQUNBLG9CQUVNO1FBRkQsS0FBSyxFQUFDLHFDQUFxQztRQUFDLGtCQUFnQixFQUFDLDhDQUE4QztTQUFDLDJEQUVqSCIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicHJvZmlsZS11cGxvYWQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiXG4gICAgQGNsaWNrPVwidHJpZ2dlckZpbGVJbnB1dFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9wcm9maWxlLXVwbG9hZC52dWU6MjozXCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmVsYXRpdmUgbWluLWgtMjQgbWluLXctMjQgcm91bmRlZCBib3JkZXIgdHJhbnNpdGlvbi1hbGwgYm9yZGVyLXdoaXRlLzIwIGhvdmVyOmJvcmRlci13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9wcm9maWxlLXVwbG9hZC52dWU6Njo1XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGllbnQgYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTIwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2ZpbGUtdXBsb2FkLnZ1ZTo5OjdcIj48L2Rpdj5cbiAgICAgIDxpbWdcbiAgICAgICAgOnNyYz1cInByb2ZpbGVJbWFnZVVybFwiXG4gICAgICAgIGFsdD1cIlByb2ZpbGUgSW1hZ2VcIlxuICAgICAgICBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgaC1mdWxsIHctZnVsbCByb3VuZGVkIG9iamVjdC1jb3ZlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9wcm9maWxlLXVwbG9hZC52dWU6MTA6N1wiXG4gICAgICAvPlxuICAgICAgPCEtLSBIaWRkZW4gRmlsZSBJbnB1dCAtLT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgcmVmPVwiZmlsZUlucHV0XCJcbiAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lXCJcbiAgICAgICAgQGNoYW5nZT1cImhhbmRsZUltYWdlVXBsb2FkXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2ZpbGUtdXBsb2FkLnZ1ZToxNjo3XCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBwYi00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2ZpbGUtdXBsb2FkLnZ1ZToyNDo3XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtbGVmdCBtbC00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2ZpbGUtdXBsb2FkLnZ1ZToyNjo1XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWItMiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2ZpbGUtdXBsb2FkLnZ1ZToyNzo3XCI+XG4gICAgICAgIE5pY2UgdG8gbWVldCB5b3UsXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlLzcwIGxlYWRpbmctdGlnaHQgdGV4dC1zbVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9wcm9maWxlLXVwbG9hZC52dWU6MzA6N1wiPlxuICAgICAgICBVcGxvYWQgYSBwcm9maWxlIHBpY3R1cmUgYW5kIGNvbXBsZXRlIHlvdXIgcHJlc2VudGF0aW9uXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgcmVmLCBjb21wdXRlZCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBbGFkaWFMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1nL2FsYWRpYS5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlByb2ZpbGVVcGxvYWRcIixcbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBGaWxlLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICB9LFxuICBlbWl0czogW1widXBkYXRlOm1vZGVsVmFsdWVcIl0sXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHByb2ZpbGVJbWFnZSA9IHJlZihwcm9wcy5tb2RlbFZhbHVlKTtcbiAgICBjb25zdCBkZWZhdWx0SW1hZ2UgPSBBbGFkaWFMb2dvO1xuICAgIGNvbnN0IGZpbGVJbnB1dCA9IHJlZihudWxsKTtcblxuICAgIGNvbnN0IHByb2ZpbGVJbWFnZVVybCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9maWxlSW1hZ2UudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwocHJvZmlsZUltYWdlLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZhdWx0SW1hZ2U7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgIGlmIChwcm9maWxlSW1hZ2UudmFsdWUpIHtcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHByb2ZpbGVJbWFnZVVybC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvZmlsZUltYWdlLnZhbHVlID0gZmlsZTtcbiAgICAgICAgZW1pdChcInVwZGF0ZTptb2RlbFZhbHVlXCIsIGZpbGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0cmlnZ2VyRmlsZUlucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBQcmV2ZW50IHRyaWdnZXJpbmcgdGhlIGlucHV0IHdoZW4gY2xpY2tpbmcgb24gdGhlIGZpbGUgaW5wdXQgaXRzZWxmXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBmaWxlSW5wdXQudmFsdWUpIHtcbiAgICAgICAgZmlsZUlucHV0LnZhbHVlLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9maWxlSW1hZ2UsXG4gICAgICBwcm9maWxlSW1hZ2VVcmwsXG4gICAgICBoYW5kbGVJbWFnZVVwbG9hZCxcbiAgICAgIHRyaWdnZXJGaWxlSW5wdXQsXG4gICAgICBmaWxlSW5wdXQsXG4gICAgfTtcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxNWRlZyxcbiAgICAjZmZmMCA4LjMzJSxcbiAgICAjZmZmMCAyNy40MyUsXG4gICAgI2ZmZjYsXG4gICAgI2ZmZjAgMzcuODUlLFxuICAgICNmZmYwIDUzLjkxJSxcbiAgICAjZmZmIDYyLjE1JSxcbiAgICAjZmZmMCA2OC4yMyUsXG4gICAgI2ZmZiA5MS42NyVcbiAgKTtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL1ZhcmlhbnRBYmR1bGF6aXovZGV2L2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9maWxlLXVwbG9hZC52dWUifQ==