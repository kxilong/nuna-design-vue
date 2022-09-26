import { defineComponent, useSlots, computed, Text, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, renderSlot, pushScopeId, popScopeId, createElementVNode } from "vue";
var useConfigInject = (name) => {
  const prefixCls = name ? `na-${name}` : "na";
  return {
    prefixCls
  };
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function isPlainObject(o2) {
  var ctor, prot;
  if (isObject(o2) === false)
    return false;
  ctor = o2.constructor;
  if (ctor === void 0)
    return true;
  prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = arguments[t2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (e[n2] = r2[n2]);
    }
    return e;
  }, t.apply(this, arguments);
}
function r(e, t2) {
  if (null == e)
    return {};
  var r2, n2, i2 = {}, o2 = Object.keys(e);
  for (n2 = 0; n2 < o2.length; n2++)
    t2.indexOf(r2 = o2[n2]) >= 0 || (i2[r2] = e[r2]);
  return i2;
}
const n = { silent: false, logLevel: "warn" }, i = ["validator"], o = Object.prototype, a = o.toString, s = o.hasOwnProperty, u = /^\s*function (\w+)/;
function l(e) {
  var t2;
  const r2 = null !== (t2 = null == e ? void 0 : e.type) && void 0 !== t2 ? t2 : e;
  if (r2) {
    const e2 = r2.toString().match(u);
    return e2 ? e2[1] : "";
  }
  return "";
}
const c = isPlainObject, f = (e) => e;
let d = f;
const p = (e, t2) => s.call(e, t2), y = Number.isInteger || function(e) {
  return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
}, v = Array.isArray || function(e) {
  return "[object Array]" === a.call(e);
}, h = (e) => "[object Function]" === a.call(e), b = (e) => c(e) && p(e, "_vueTypes_name"), g = (e) => c(e) && (p(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some((t2) => p(e, t2)));
function O(e, t2) {
  return Object.defineProperty(e.bind(t2), "__original", { value: e });
}
function m(e, t2, r2 = false) {
  let n2, i2 = true, o2 = "";
  n2 = c(e) ? e : { type: e };
  const a2 = b(n2) ? n2._vueTypes_name + " - " : "";
  if (g(n2) && null !== n2.type) {
    if (void 0 === n2.type || true === n2.type)
      return i2;
    if (!n2.required && void 0 === t2)
      return i2;
    v(n2.type) ? (i2 = n2.type.some((e2) => true === m(e2, t2, true)), o2 = n2.type.map((e2) => l(e2)).join(" or ")) : (o2 = l(n2), i2 = "Array" === o2 ? v(t2) : "Object" === o2 ? c(t2) : "String" === o2 || "Number" === o2 || "Boolean" === o2 || "Function" === o2 ? function(e2) {
      if (null == e2)
        return "";
      const t3 = e2.constructor.toString().match(u);
      return t3 ? t3[1] : "";
    }(t2) === o2 : t2 instanceof n2.type);
  }
  if (!i2) {
    const e2 = `${a2}value "${t2}" should be of type "${o2}"`;
    return false === r2 ? (d(e2), false) : e2;
  }
  if (p(n2, "validator") && h(n2.validator)) {
    const e2 = d, o3 = [];
    if (d = (e3) => {
      o3.push(e3);
    }, i2 = n2.validator(t2), d = e2, !i2) {
      const e3 = (o3.length > 1 ? "* " : "") + o3.join("\n* ");
      return o3.length = 0, false === r2 ? (d(e3), i2) : e3;
    }
  }
  return i2;
}
function j(e, t2) {
  const r2 = Object.defineProperties(t2, { _vueTypes_name: { value: e, writable: true }, isRequired: { get() {
    return this.required = true, this;
  } }, def: { value(e2) {
    return void 0 === e2 ? (p(this, "default") && delete this.default, this) : h(e2) || true === m(this, e2, true) ? (this.default = v(e2) ? () => [...e2] : c(e2) ? () => Object.assign({}, e2) : e2, this) : (d(`${this._vueTypes_name} - invalid default value: "${e2}"`), this);
  } } }), { validator: n2 } = r2;
  return h(n2) && (r2.validator = O(n2, r2)), r2;
}
function _(e, t2) {
  const r2 = j(e, t2);
  return Object.defineProperty(r2, "validate", { value(e2) {
    return h(this.validator) && d(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = O(e2, this), this;
  } });
}
function T(e, t2, n2) {
  const o2 = function(e2) {
    const t3 = {};
    return Object.getOwnPropertyNames(e2).forEach((r2) => {
      t3[r2] = Object.getOwnPropertyDescriptor(e2, r2);
    }), Object.defineProperties({}, t3);
  }(t2);
  if (o2._vueTypes_name = e, !c(n2))
    return o2;
  const { validator: a2 } = n2, s2 = r(n2, i);
  if (h(a2)) {
    let { validator: e2 } = o2;
    e2 && (e2 = null !== (l2 = (u2 = e2).__original) && void 0 !== l2 ? l2 : u2), o2.validator = O(e2 ? function(t3) {
      return e2.call(this, t3) && a2.call(this, t3);
    } : a2, o2);
  }
  var u2, l2;
  return Object.assign(o2, s2);
}
function $(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
const w = () => _("any", {}), P = () => _("function", { type: Function }), x = () => _("boolean", { type: Boolean }), E = () => _("string", { type: String }), N = () => _("number", { type: Number }), q = () => _("array", { type: Array }), A = () => _("object", { type: Object }), V = () => j("integer", { type: Number, validator: (e) => y(e) }), S = () => j("symbol", { validator: (e) => "symbol" == typeof e });
function D(e, t2 = "custom validation failed") {
  if ("function" != typeof e)
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return j(e.name || "<<anonymous function>>", { type: null, validator(r2) {
    const n2 = e(r2);
    return n2 || d(`${this._vueTypes_name} - ${t2}`), n2;
  } });
}
function L(e) {
  if (!v(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  const t2 = `oneOf - value should be one of "${e.join('", "')}".`, r2 = e.reduce((e2, t3) => {
    if (null != t3) {
      const r3 = t3.constructor;
      -1 === e2.indexOf(r3) && e2.push(r3);
    }
    return e2;
  }, []);
  return j("oneOf", { type: r2.length > 0 ? r2 : void 0, validator(r3) {
    const n2 = -1 !== e.indexOf(r3);
    return n2 || d(t2), n2;
  } });
}
function F(e) {
  if (!v(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  let t2 = false, r2 = [];
  for (let n3 = 0; n3 < e.length; n3 += 1) {
    const i2 = e[n3];
    if (g(i2)) {
      if (b(i2) && "oneOf" === i2._vueTypes_name && i2.type) {
        r2 = r2.concat(i2.type);
        continue;
      }
      if (h(i2.validator) && (t2 = true), true === i2.type || !i2.type) {
        d('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      r2 = r2.concat(i2.type);
    } else
      r2.push(i2);
  }
  r2 = r2.filter((e2, t3) => r2.indexOf(e2) === t3);
  const n2 = r2.length > 0 ? r2 : null;
  return j("oneOfType", t2 ? { type: n2, validator(t3) {
    const r3 = [], n3 = e.some((e2) => {
      const n4 = m(b(e2) && "oneOf" === e2._vueTypes_name ? e2.type || null : e2, t3, true);
      return "string" == typeof n4 && r3.push(n4), true === n4;
    });
    return n3 || d(`oneOfType - provided value does not match any of the ${r3.length} passed-in validators:
${$(r3.join("\n"))}`), n3;
  } } : { type: n2 });
}
function Y(e) {
  return j("arrayOf", { type: Array, validator(t2) {
    let r2 = "";
    const n2 = t2.every((t3) => (r2 = m(e, t3, true), true === r2));
    return n2 || d(`arrayOf - value validation error:
${$(r2)}`), n2;
  } });
}
function B(e) {
  return j("instanceOf", { type: e });
}
function I(e) {
  return j("objectOf", { type: Object, validator(t2) {
    let r2 = "";
    const n2 = Object.keys(t2).every((n3) => (r2 = m(e, t2[n3], true), true === r2));
    return n2 || d(`objectOf - value validation error:
${$(r2)}`), n2;
  } });
}
function J(e) {
  const t2 = Object.keys(e), r2 = t2.filter((t3) => {
    var r3;
    return !(null === (r3 = e[t3]) || void 0 === r3 || !r3.required);
  }), n2 = j("shape", { type: Object, validator(n3) {
    if (!c(n3))
      return false;
    const i2 = Object.keys(n3);
    if (r2.length > 0 && r2.some((e2) => -1 === i2.indexOf(e2))) {
      const e2 = r2.filter((e3) => -1 === i2.indexOf(e3));
      return d(1 === e2.length ? `shape - required property "${e2[0]}" is not defined.` : `shape - required properties "${e2.join('", "')}" are not defined.`), false;
    }
    return i2.every((r3) => {
      if (-1 === t2.indexOf(r3))
        return true === this._vueTypes_isLoose || (d(`shape - shape definition does not include a "${r3}" property. Allowed keys: "${t2.join('", "')}".`), false);
      const i3 = m(e[r3], n3[r3], true);
      return "string" == typeof i3 && d(`shape - "${r3}" property validation error:
 ${$(i3)}`), true === i3;
    });
  } });
  return Object.defineProperty(n2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(n2, "loose", { get() {
    return this._vueTypes_isLoose = true, this;
  } }), n2;
}
const M = ["name", "validate", "getter"], R = /* @__PURE__ */ (() => {
  var e;
  return (e = class {
    static get any() {
      return w();
    }
    static get func() {
      return P().def(this.defaults.func);
    }
    static get bool() {
      return x().def(this.defaults.bool);
    }
    static get string() {
      return E().def(this.defaults.string);
    }
    static get number() {
      return N().def(this.defaults.number);
    }
    static get array() {
      return q().def(this.defaults.array);
    }
    static get object() {
      return A().def(this.defaults.object);
    }
    static get integer() {
      return V().def(this.defaults.integer);
    }
    static get symbol() {
      return S();
    }
    static get nullable() {
      return { type: null };
    }
    static extend(e2) {
      if (v(e2))
        return e2.forEach((e3) => this.extend(e3)), this;
      const { name: t2, validate: n2 = false, getter: i2 = false } = e2, o2 = r(e2, M);
      if (p(this, t2))
        throw new TypeError(`[VueTypes error]: Type "${t2}" already defined`);
      const { type: a2 } = o2;
      if (b(a2))
        return delete o2.type, Object.defineProperty(this, t2, i2 ? { get: () => T(t2, a2, o2) } : { value(...e3) {
          const r2 = T(t2, a2, o2);
          return r2.validator && (r2.validator = r2.validator.bind(r2, ...e3)), r2;
        } });
      let s2;
      return s2 = i2 ? { get() {
        const e3 = Object.assign({}, o2);
        return n2 ? _(t2, e3) : j(t2, e3);
      }, enumerable: true } : { value(...e3) {
        const r2 = Object.assign({}, o2);
        let i3;
        return i3 = n2 ? _(t2, r2) : j(t2, r2), r2.validator && (i3.validator = r2.validator.bind(i3, ...e3)), i3;
      }, enumerable: true }, Object.defineProperty(this, t2, s2);
    }
  }).defaults = {}, e.sensibleDefaults = void 0, e.config = n, e.custom = D, e.oneOf = L, e.instanceOf = B, e.oneOfType = F, e.arrayOf = Y, e.objectOf = I, e.shape = J, e.utils = { validate: (e2, t2) => true === m(t2, e2, true), toType: (e2, t2, r2 = false) => r2 ? _(e2, t2) : j(e2, t2) }, e;
})();
function z(e = { func: () => {
}, bool: true, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
  var r2;
  return (r2 = class extends R {
    static get sensibleDefaults() {
      return t({}, this.defaults);
    }
    static set sensibleDefaults(r3) {
      this.defaults = false !== r3 ? t({}, true !== r3 ? r3 : e) : {};
    }
  }).defaults = t({}, e), r2;
}
class C extends z() {
}
const PropTypes = z({});
PropTypes.extend([
  {
    name: "positive",
    getter: true,
    type: Number
  }
]);
const buttonProps = {
  size: {
    type: String,
    default: "middle"
  },
  type: {
    type: String,
    default: "default"
  },
  loading: PropTypes.bool,
  shape: {
    type: String
  },
  autoInsertSpace: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
var button_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId = (n2) => (pushScopeId("data-v-b5f9b81e"), n2 = n2(), popScopeId(), n2);
const _hoisted_1 = ["disabled"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "anticon" }, [
  /* @__PURE__ */ createElementVNode("svg", {
    focusable: "false",
    class: "anticon-spin",
    "data-icon": "loading",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    viewBox: "0 0 1024 1024"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" })
  ])
], -1));
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 1,
  class: "anticon"
};
const __default__ = defineComponent({
  name: "NButton",
  inheritAttrs: false
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { prefixCls } = useConfigInject("button");
    const slots = useSlots();
    const shouldAddSpace = computed(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if ((defaultSlot == null ? void 0 : defaultSlot.length) == 1) {
        const slot = defaultSlot[0];
        if (props.autoInsertSpace && slot.type == Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
        }
      }
      return false;
    });
    const handleClick = (evt) => {
      emit("click", evt);
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          `${unref(prefixCls)}`,
          `${unref(prefixCls)}-${_ctx.type}`,
          `${unref(prefixCls)}-${_ctx.size}`,
          _ctx.shape && `${unref(prefixCls)}-${_ctx.shape}`,
          _ctx.loading && `${unref(prefixCls)}-loading`
        ]),
        type: "button",
        disabled: _ctx.disabled,
        onClick: handleClick
      }, [
        _ctx.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(`${unref(prefixCls)}-loading-icon`)
        }, _hoisted_3, 2)) : createCommentVNode("v-if", true),
        ((_a = _ctx.$slots) == null ? void 0 : _a.icon) ? (openBlock(), createElementBlock("span", _hoisted_4, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ])) : createCommentVNode("v-if", true),
        ((_b = _ctx.$slots) == null ? void 0 : _b.default) ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass({ expand: unref(shouldAddSpace) })
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 10, _hoisted_1);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5f9b81e"]]);
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
const NButton = withInstall(Button);
export { NButton, NButton as default };