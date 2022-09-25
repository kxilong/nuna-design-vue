import { defineComponent, computed, renderSlot, h, createVNode } from "vue";
var useConfigInject = (name) => {
  const prefixCls = name ? `na-${name}` : "na";
  return {
    prefixCls
  };
};
const componentSizes = ["", "middle", "small", "large"];
const componentSizeMap = {
  large: 24,
  middle: 16,
  small: 8
};
const spaceProps = {
  align: {
    type: String,
    default: ""
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  size: {
    type: [String, Number],
    values: componentSizes,
    default: "small"
  },
  spacer: {
    type: [String, Number]
  }
};
var space = "";
var Space = defineComponent({
  name: "NSpace",
  props: spaceProps,
  setup(props, {
    slots
  }) {
    const {
      prefixCls
    } = useConfigInject("space");
    const {
      size
    } = props;
    const gapSize = computed(() => {
      return typeof Number(size) === "number" ? `${size}px` : `${componentSizeMap[size]}px`;
    });
    return () => {
      var _a;
      const {
        direction,
        align,
        spacer
      } = props;
      const children = renderSlot(slots, "default", {
        key: 0
      }, () => []);
      if (((_a = children.children) != null ? _a : []).length === 0)
        return null;
      const extractedChildren = [];
      if (Array.isArray(children.children)) {
        children.children.forEach((child, loopKey) => {
          var _a2;
          const Item = h("div", {
            class: `${prefixCls}-item`,
            key: `LoopKey${loopKey}`
          }, createVNode(child));
          const spacerBox = h("span", {
            class: `${prefixCls}-spacer`
          }, spacer);
          extractedChildren.push(createVNode(Item));
          if (loopKey + 1 !== ((_a2 = children.children) == null ? void 0 : _a2.length) && spacer) {
            extractedChildren.push(createVNode(spacerBox));
          }
        });
      }
      return createVNode("div", {
        class: [prefixCls, `${prefixCls}-${direction}`, align && `${prefixCls}-align-${align}`],
        style: {
          gap: gapSize.value
        }
      }, extractedChildren);
    };
  }
});
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
const NSpace = withInstall(Space);
export { NSpace, NSpace as default };
