import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
var useConfigInject = (name) => {
  const prefixCls = name ? `na-${name}` : "na";
  return {
    prefixCls
  };
};
const rowProps = {
  justify: {
    type: String,
    default: "start"
  },
  align: {
    type: String,
    default: "top"
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
  name: "NRow"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: rowProps,
  setup(__props) {
    const { prefixCls } = useConfigInject("row");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          `${unref(prefixCls)}`,
          _ctx.justify && `${unref(prefixCls)}-${_ctx.justify}`,
          _ctx.align && `${unref(prefixCls)}-${_ctx.align}`
        ]),
        style: { rowGap: "0px" }
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
var Row = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b69d6366"]]);
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
const NRow = withInstall(Row);
export { NRow, NRow as default };
