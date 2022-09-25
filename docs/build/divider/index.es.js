import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode } from "vue";
var useConfigInject = (name) => {
  const prefixCls = name ? `na-${name}` : "na";
  return {
    prefixCls
  };
};
const dividerProps = {
  dashed: {
    type: Boolean,
    default: false
  },
  orientation: {
    type: String,
    default: "center"
  },
  type: {
    type: String,
    default: "horizontal"
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__ = defineComponent({
  name: "NDivider"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dividerProps,
  setup(__props) {
    const { prefixCls } = useConfigInject("divider");
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(prefixCls),
          `${unref(prefixCls)}-${_ctx.type}`,
          _ctx.dashed && `${unref(prefixCls)}-dashed`,
          ((_a = _ctx.$slots) == null ? void 0 : _a.default) && `${unref(prefixCls)}-with-text`,
          _ctx.orientation !== "center" && `${unref(prefixCls)}-with-text-${_ctx.orientation}`
        ])
      }, [
        ((_b = _ctx.$slots) == null ? void 0 : _b.default) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(`${unref(prefixCls)}-inner-text`)
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ce6be2e"]]);
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const NDivider = withInstall(Divider);
export { NDivider, NDivider as default };
