import { defineComponent, ref, onMounted, onUpdated, nextTick, onUnmounted, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, Fragment, renderList, toDisplayString, createCommentVNode, renderSlot, useSlots, computed, Text, pushScopeId, popScopeId, normalizeStyle, watch, h as h$1, createVNode, createBlock, Transition, withCtx, shallowRef, provide, inject, createTextVNode, withDirectives, vShow } from "vue";
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
function isObject$1(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function isPlainObject(o2) {
  var ctor, prot;
  if (isObject$1(o2) === false)
    return false;
  ctor = o2.constructor;
  if (ctor === void 0)
    return true;
  prot = ctor.prototype;
  if (isObject$1(prot) === false)
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
const spinProps = {
  tip: C.string,
  size: {
    type: String,
    default: "middle"
  },
  spinning: C.bool,
  delay: C.number
};
var spinProps$1 = spinProps;
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var index_vue_vue_type_style_index_0_scoped_true_lang$8 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$6 = { key: 0 };
const __default__$b = defineComponent({
  name: "NSpin"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: spinProps$1,
  setup(__props) {
    const props = __props;
    const { prefixCls } = useConfigInject("spin");
    const dotItems = new Array(4);
    const shouldDelay = (spinning, delay) => {
      return !!spinning && !!delay && !Number.isNaN(delay);
    };
    const shouldBeDelayed = shouldDelay(props == null ? void 0 : props.spinning, props == null ? void 0 : props.delay);
    const sSpinning = ref(props.spinning && !shouldBeDelayed);
    let originalUpdateSpinning = null;
    let updateSpinning = () => {
      if (sSpinning.value !== props.spinning) {
        sSpinning.value = props.spinning;
      }
    };
    const cancelExistSpin = () => {
      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    };
    const debouncifyUpdateSpinning = () => {
      const { delay } = props;
      if (delay) {
        cancelExistSpin();
        updateSpinning = debounce(originalUpdateSpinning, delay);
      }
    };
    onMounted(() => {
      originalUpdateSpinning = updateSpinning;
      debouncifyUpdateSpinning();
      updateSpinning();
    });
    onUpdated(() => {
      nextTick(() => {
        debouncifyUpdateSpinning();
        updateSpinning();
      });
    });
    onUnmounted(() => {
      cancelExistSpin();
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$slots.default && sSpinning.value && `${unref(prefixCls)}-nested-loading`])
      }, [
        sSpinning.value ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
          createElementVNode("div", {
            class: normalizeClass([
              `${unref(prefixCls)}`,
              `${unref(prefixCls)}-${_ctx.size}`,
              `${unref(prefixCls)}-spinning`,
              _ctx.tip && `${unref(prefixCls)}-show-text`
            ])
          }, [
            createElementVNode("span", {
              class: normalizeClass([`${unref(prefixCls)}-dot`, `${unref(prefixCls)}-dot-spin`])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dotItems), (item, index) => {
                return openBlock(), createElementBlock("i", {
                  class: normalizeClass([`${unref(prefixCls)}-dot-item`]),
                  key: index
                }, null, 2);
              }), 128))
            ], 2),
            _ctx.tip ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([`${unref(prefixCls)}-text`])
            }, toDisplayString(_ctx.tip), 3)) : createCommentVNode("v-if", true)
          ], 2)
        ])) : createCommentVNode("v-if", true),
        ((_a = _ctx.$slots) == null ? void 0 : _a.default) ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([`${unref(prefixCls)}-container`, sSpinning.value && `${unref(prefixCls)}-blur`])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Spin = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-64112f94"]]);
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
const withNoopInstall = (component) => {
  component.install = () => void 0;
  return component;
};
const NSpin = withInstall(Spin);
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
const _withScopeId$2 = (n2) => (pushScopeId("data-v-b5f9b81e"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$5 = ["disabled"];
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("span", { class: "anticon" }, [
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
const _hoisted_3$1 = [
  _hoisted_2$3
];
const _hoisted_4$1 = {
  key: 1,
  class: "anticon"
};
const __default__$a = defineComponent({
  name: "NButton",
  inheritAttrs: false
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$a,
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
        }, _hoisted_3$1, 2)) : createCommentVNode("v-if", true),
        ((_a = _ctx.$slots) == null ? void 0 : _a.icon) ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ])) : createCommentVNode("v-if", true),
        ((_b = _ctx.$slots) == null ? void 0 : _b.default) ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass({ expand: unref(shouldAddSpace) })
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 10, _hoisted_1$5);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b5f9b81e"]]);
const NButton = withInstall(Button);
const avatorProps = {
  icon: C.string,
  size: {
    type: String,
    default: "middle"
  },
  shape: {
    type: String,
    default: "circle"
  },
  src: C.string,
  alt: C.string
};
const avatorEmits = {
  error: (evt) => evt instanceof Event
};
var index_vue_vue_type_style_index_0_scoped_true_lang$7 = "";
const _hoisted_1$4 = ["src"];
const _hoisted_2$2 = {
  key: 1,
  class: "anticon"
};
const __default__$9 = defineComponent({
  name: "NAvatar"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: avatorProps,
  emits: avatorEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { prefixCls } = useConfigInject("avatar");
    const computedStyle = computed(() => {
      const isNumber = typeof props.size == "number";
      if (isNumber) {
        return `width: ${props.size}px; height: ${props.size}px; line-height: ${props.size}px; font-size: ${props.size / 2}px;`;
      }
      return "";
    });
    const errorHandler = (e) => {
      emit("error", e);
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return _ctx.src || ((_a = _ctx.$slots) == null ? void 0 : _a.icon) ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass([
          `${unref(prefixCls)}`,
          `${unref(prefixCls)}-${_ctx.size}`,
          `${unref(prefixCls)}-${_ctx.shape}`,
          _ctx.src && `${unref(prefixCls)}-image`
        ]),
        style: normalizeStyle(unref(computedStyle))
      }, [
        _ctx.src ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          onerror: errorHandler
        }, null, 8, _hoisted_1$4)) : ((_b = _ctx.$slots) == null ? void 0 : _b.icon) ? (openBlock(), createElementBlock("span", _hoisted_2$2, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ])) : createCommentVNode("v-if", true)
      ], 6)) : createCommentVNode("v-if", true);
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-4d8f0c06"]]);
const NAvatar = withInstall(Avatar);
const badgeProps = {
  count: C.string || C.number,
  color: C.string,
  isDot: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "danger"
  },
  max: C.number
};
var index_vue_vue_type_style_index_0_scoped_true_lang$6 = "";
const __default__$8 = defineComponent({
  name: "NBadge"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: badgeProps,
  setup(__props) {
    const props = __props;
    const { prefixCls } = useConfigInject("badge");
    const countNumber = computed(() => {
      if (props.isDot) {
        return "";
      }
      if (props.max) {
        return Number(props.count) > Number(props.max) ? `${props.max}+` : props.count;
      } else {
        return props.count;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(`${unref(prefixCls)}`)
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        createElementVNode("sup", {
          class: normalizeClass([
            `${unref(prefixCls)}-count`,
            _ctx.type && `${unref(prefixCls)}-${_ctx.type}`,
            _ctx.isDot && `${unref(prefixCls)}-dot`
          ]),
          style: normalizeStyle({ background: _ctx.color })
        }, toDisplayString(unref(countNumber)), 7)
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-704e0f28"]]);
const NBadge = withInstall(Badge);
const componentSizes = ["", "middle", "small", "large"];
const componentSizeMap = {
  large: 24,
  middle: 16,
  small: 8
};
const spaceProps = {
  align: {
    type: String,
    default: "center"
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
    const size = ref(props.size);
    watch(() => props.size, (newValue) => {
      size.value = newValue;
    });
    const gapSize = computed(() => {
      return isNaN(Number(size.value)) ? `${componentSizeMap[size.value]}px` : `${size.value}px`;
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
          const Item = h$1("div", {
            class: `${prefixCls}-item`,
            key: `LoopKey${loopKey}`
          }, createVNode(child));
          const spacerBox = h$1("span", {
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
const NSpace = withInstall(Space);
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
var index_vue_vue_type_style_index_0_scoped_true_lang$5 = "";
const __default__$7 = defineComponent({
  name: "NDivider"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
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
var Divider = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2ce6be2e"]]);
const NDivider = withInstall(Divider);
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
var index_vue_vue_type_style_index_0_scoped_true_lang$4 = "";
const _hoisted_1$3 = ["src"];
const __default__$6 = defineComponent({
  name: "NEmpty"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
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
          }, null, 8, _hoisted_1$3)
        ], 2),
        _ctx.description ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: normalizeClass(`${unref(prefixCls)}-description`)
        }, toDisplayString(_ctx.description), 3)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Empty = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0e648bb6"]]);
const NEmpty = withInstall(Empty);
const alertProps = {
  title: C.string,
  type: {
    type: String,
    value: "warning"
  },
  message: C.string,
  description: C.string,
  closable: {
    type: Boolean,
    default: false
  },
  border: C.bool
};
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const _withScopeId$1 = (n2) => (pushScopeId("data-v-3603d470"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$2 = {
  key: 0,
  focusable: "false",
  class: "",
  "data-icon": "check-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" }, null, -1));
const _hoisted_3 = [
  _hoisted_2$1
];
const _hoisted_4 = {
  key: 1,
  focusable: "false",
  class: "",
  "data-icon": "info-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" }, null, -1));
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = {
  key: 2,
  focusable: "false",
  class: "",
  "data-icon": "exclamation-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" }, null, -1));
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = {
  key: 3,
  focusable: "false",
  class: "",
  "data-icon": "close-circle",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "64 64 896 896"
};
const _hoisted_11 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" }, null, -1));
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "anticon anticon-close" }, [
  /* @__PURE__ */ createElementVNode("svg", {
    focusable: "false",
    class: "",
    "data-icon": "close",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    viewBox: "64 64 896 896"
  }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" })
  ])
], -1));
const _hoisted_14 = [
  _hoisted_13
];
const __default__$5 = defineComponent({
  name: "NAlert"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: alertProps,
  setup(__props) {
    const { prefixCls } = useConfigInject("alert");
    const visible = ref(true);
    const handleClose = () => {
      visible.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: `${unref(prefixCls)}-fade`
      }, {
        default: withCtx(() => [
          visible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([
              unref(prefixCls),
              `${unref(prefixCls)}-${_ctx.type}`,
              _ctx.description && `${unref(prefixCls)}-with-description`,
              !_ctx.border && `${unref(prefixCls)}-banner`
            ])
          }, [
            createElementVNode("span", {
              class: normalizeClass(["anticon", `${unref(prefixCls)}-icon`])
            }, [
              _ctx.type == "success" ? (openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3)) : _ctx.type == "info" ? (openBlock(), createElementBlock("svg", _hoisted_4, _hoisted_6)) : _ctx.type == "warning" ? (openBlock(), createElementBlock("svg", _hoisted_7, _hoisted_9)) : _ctx.type == "error" ? (openBlock(), createElementBlock("svg", _hoisted_10, _hoisted_12)) : createCommentVNode("v-if", true)
            ], 2),
            createElementVNode("div", {
              class: normalizeClass(`${unref(prefixCls)}-content`)
            }, [
              _ctx.message ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(`${unref(prefixCls)}-message`)
              }, toDisplayString(_ctx.message), 3)) : createCommentVNode("v-if", true),
              _ctx.description ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(`${unref(prefixCls)}-description`)
              }, toDisplayString(_ctx.description), 3)) : createCommentVNode("v-if", true)
            ], 2),
            _ctx.closable ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: normalizeClass(`${unref(prefixCls)}-close-icon`),
              onClick: handleClose
            }, _hoisted_14, 2)) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var Alert = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3603d470"]]);
const NAlert = withInstall(Alert);
const inputProps = {
  modelValue: {
    type: [String || Number || Object],
    default: ""
  },
  placeholder: C.string,
  disabled: {
    type: Boolean,
    default: false
  }
};
const inputEmits = {
  ["update:modelValue"]: (value) => value,
  input: (value) => value,
  change: (value) => value,
  blur: (value) => value,
  focus: (value) => value
};
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _hoisted_1$1 = ["placeholder", "disabled"];
const __default__$4 = defineComponent({
  name: "NInput"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: inputProps,
  emits: inputEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { prefixCls } = useConfigInject("input");
    const input = shallowRef();
    const focused = ref(false);
    const _ref = computed(() => input.value);
    const nativeInputValue = computed(() => {
      return String(props.modelValue);
    });
    watch(nativeInputValue, () => setNativeInputValue());
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const handleInput = (event) => {
      const { value } = event.target;
      if (value === nativeInputValue.value)
        return;
      emit("update:modelValue", value);
      emit("input", value);
      setNativeInputValue();
    };
    const handleChange = (event) => {
      const { value } = event.target;
      emit("change", value);
      setNativeInputValue();
    };
    const handleFocus = (event) => {
      const { value } = event.target;
      focused.value = true;
      emit("focus", value);
      setNativeInputValue();
    };
    const handleBlur = (event) => {
      const { value } = event.target;
      focused.value = false;
      emit("blur", value);
      setNativeInputValue();
    };
    onMounted(() => {
      setNativeInputValue();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `${unref(prefixCls)}`,
          (((_a = _ctx.$slots) == null ? void 0 : _a.prefix) || ((_b = _ctx.$slots) == null ? void 0 : _b.suffix)) && `${unref(prefixCls)}-group`,
          focused.value && `${unref(prefixCls)}-focused`,
          _ctx.disabled && `is-disabled`
        ])
      }, [
        ((_c = _ctx.$slots) == null ? void 0 : _c.prefix) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(`${unref(prefixCls)}-prefix`)
        }, [
          renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("span", {
          class: normalizeClass(`${unref(prefixCls)}-wrapper`)
        }, [
          createElementVNode("input", {
            ref_key: "input",
            ref: input,
            class: normalizeClass(`${unref(prefixCls)}-inner`),
            type: "text",
            placeholder: _ctx.placeholder,
            onInput: handleInput,
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            disabled: _ctx.disabled
          }, null, 42, _hoisted_1$1)
        ], 2),
        ((_d = _ctx.$slots) == null ? void 0 : _d.suffix) ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(`${unref(prefixCls)}-suffix`)
        }, [
          renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4700646c"]]);
const NInput = withInstall(Input);
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
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const __default__$3 = defineComponent({
  name: "NRow"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
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
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b69d6366"]]);
const NRow = withInstall(Row);
const colProps = {
  span: C.number,
  order: C.number
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__$2 = defineComponent({
  name: "NCol"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: colProps,
  setup(__props) {
    const { prefixCls } = useConfigInject("col");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`${unref(prefixCls)}`, `${unref(prefixCls)}-${_ctx.span}`, `${unref(prefixCls)}-order-${_ctx.order}`])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
var Col = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-11ae3f6f"]]);
const NCol = withInstall(Col);
const collapseProps = {
  value: { type: [Array, Number, String], default: () => [] },
  accordion: {
    type: Boolean,
    default: false
  }
};
const collapseEmits = {
  ["update:value"]: (value) => value
};
const collapseContextKey = Symbol("collapseContextKey");
var collapse_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__$1 = defineComponent({
  name: "NCollapse"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { prefixCls } = useConfigInject("collapse");
    const activeNames = ref(props.value);
    watch(
      () => props.value,
      () => {
        activeNames.value = props.value;
      }
    );
    const setActiveNames = (_avtiveNames) => {
      activeNames.value = _avtiveNames;
      emit("update:value", _avtiveNames);
    };
    const handleItemClick = (name) => {
      if (props.accordion) {
        const _activeName = activeNames.value != name && name;
        setActiveNames(_activeName);
      } else {
        if (Array.isArray(activeNames.value)) {
          const _activeNames = [...activeNames.value];
          const index = _activeNames.indexOf(name);
          if (index > -1) {
            _activeNames.splice(index, 1);
          } else {
            _activeNames.push(name);
          }
          setActiveNames(_activeNames);
        }
      }
    };
    provide(collapseContextKey, { activeNames, handleItemClick });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`${unref(prefixCls)}`])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-220cfbf0"]]);
const collapseItemProps = {
  header: C.string,
  name: C.string
};
var collapseItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n2) => (pushScopeId("data-v-9e4ca078"), n2 = n2(), popScopeId(), n2);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" }, null, -1));
const _hoisted_2 = [
  _hoisted_1
];
const __default__ = defineComponent({
  name: "NCollapseItem"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: collapseItemProps,
  setup(__props) {
    const props = __props;
    const { prefixCls } = useConfigInject("collapse-item");
    const collapse = inject(collapseContextKey);
    const isActive = computed(() => {
      if (Array.isArray(collapse == null ? void 0 : collapse.activeNames.value)) {
        return collapse == null ? void 0 : collapse.activeNames.value.includes(props.name);
      } else {
        return (collapse == null ? void 0 : collapse.activeNames.value) == props.name;
      }
    });
    const clickCollapseHeader = () => {
      collapse == null ? void 0 : collapse.handleItemClick(props.name);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`${unref(prefixCls)}`])
      }, [
        createElementVNode("div", {
          class: normalizeClass(`${unref(prefixCls)}-header`),
          onClick: clickCollapseHeader
        }, [
          createElementVNode("div", null, [
            createElementVNode("span", {
              role: "img",
              "aria-label": "right",
              class: normalizeClass(`anticon anticon-right ${unref(prefixCls)}-arrow`)
            }, [
              (openBlock(), createElementBlock("svg", {
                focusable: "false",
                class: "",
                "data-icon": "right",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                "aria-hidden": "true",
                viewBox: "64 64 896 896",
                style: normalizeStyle({ transform: unref(isActive) ? "rotate(90deg)" : "" })
              }, _hoisted_2, 4))
            ], 2)
          ]),
          createTextVNode(" " + toDisplayString(_ctx.header), 1)
        ], 2),
        withDirectives(createElementVNode("div", {
          class: normalizeClass([
            `${unref(prefixCls)}-content`,
            unref(isActive) ? `${unref(prefixCls)}-content-active` : `${unref(prefixCls)}-content-inactive`
          ])
        }, [
          createElementVNode("div", {
            class: normalizeClass(`${unref(prefixCls)}-content-box`)
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2)
        ], 2), [
          [vShow, unref(isActive)]
        ])
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e4ca078"]]);
const NCollapse = withInstall(Collapse, { CollapseItem });
const NCollapseItem = withNoopInstall(CollapseItem);
const installs = [
  NSpin,
  NButton,
  NAvatar,
  NSpace,
  NBadge,
  NDivider,
  NEmpty,
  NAlert,
  NInput,
  NRow,
  NCol,
  NCollapse
];
var components = {
  install(app) {
    installs.forEach((p2) => app.use(p2));
  }
};
export { NAlert, NAvatar, NBadge, NButton, NCol, NCollapse, NCollapseItem, NDivider, NEmpty, NInput, NRow, NSpace, NSpin, components as default };
