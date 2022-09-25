import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, toDisplayString, createCommentVNode } from "vue";
var useConfigInject = (name) => {
  const prefixCls = name ? `na-${name}` : "na";
  return {
    prefixCls
  };
};
const emptyProps = {
  description: {
    type: String,
    default: "\u6682\u65E0\u6570\u636E"
  },
  image: {
    type: String,
    default: "https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
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
const _hoisted_1 = ["src"];
const __default__ = defineComponent({
  name: "NEmpty"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: emptyProps,
  setup(__props) {
    const { prefixCls } = useConfigInject("empty");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(prefixCls)}`)
      }, [
        createElementVNode("div", {
          class: normalizeClass(`${unref(prefixCls)}-image`)
        }, [
          createElementVNode("img", {
            src: _ctx.image,
            alt: "empty"
          }, null, 8, _hoisted_1)
        ], 2),
        _ctx.description ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: normalizeClass(`${unref(prefixCls)}-description`)
        }, toDisplayString(_ctx.description), 3)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Empty = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e648bb6"]]);
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
const NEmpty = withInstall(Empty);
export { NEmpty, NEmpty as default };
