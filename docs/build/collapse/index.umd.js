(function(y,a){typeof exports=="object"&&typeof module!="undefined"?a(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],a):(y=typeof globalThis!="undefined"?globalThis:y||self,a(y.index={},y.Vue))})(this,function(y,a){"use strict";const D=(e,r)=>{if(e.install=t=>{for(const n of[e,...Object.values(r!=null?r:{})])t.component(n.name,n)},r)for(const[t,n]of Object.entries(r))e[t]=n;return e},L=e=>(e.install=()=>{},e);var w=e=>({prefixCls:e?`na-${e}`:"na"});const F={value:{type:[Array,Number,String],default:()=>[]},accordion:{type:Boolean,default:!1}},M={["update:value"]:e=>e},C=Symbol("collapseContextKey");var Oe="",N=(e,r)=>{const t=e.__vccOpts||e;for(const[n,o]of r)t[n]=o;return t};const Y=a.defineComponent({name:"NCollapse"}),J=a.defineComponent({...Y,props:F,emits:M,setup(e,{emit:r}){const t=e,{prefixCls:n}=w("collapse"),o=a.ref(t.value);a.watch(()=>t.value,()=>{o.value=t.value});const i=s=>{o.value=s,r("update:value",s)},c=s=>{if(t.accordion){const l=o.value!=s&&s;i(l)}else if(Array.isArray(o.value)){const l=[...o.value],u=l.indexOf(s);u>-1?l.splice(u,1):l.push(s),i(l)}};return a.provide(C,{activeNames:o,handleItemClick:c}),(s,l)=>(a.openBlock(),a.createElementBlock("div",{class:a.normalizeClass([`${a.unref(n)}`])},[a.renderSlot(s.$slots,"default",{},void 0,!0)],2))}});var K=N(J,[["__scopeId","data-v-220cfbf0"]]);/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function S(e){return Object.prototype.toString.call(e)==="[object Object]"}function R(e){var r,t;return S(e)===!1?!1:(r=e.constructor,r===void 0?!0:(t=r.prototype,!(S(t)===!1||t.hasOwnProperty("isPrototypeOf")===!1)))}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},O.apply(this,arguments)}function x(e,r){if(e==null)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}const H={silent:!1,logLevel:"warn"},G=["validator"],I=Object.prototype,P=I.toString,Q=I.hasOwnProperty,k=/^\s*function (\w+)/;function E(e){var r;const t=(r=e==null?void 0:e.type)!==null&&r!==void 0?r:e;if(t){const n=t.toString().match(k);return n?n[1]:""}return""}const h=R;let f=e=>e;const g=(e,r)=>Q.call(e,r),U=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},b=Array.isArray||function(e){return P.call(e)==="[object Array]"},_=e=>P.call(e)==="[object Function]",j=e=>h(e)&&g(e,"_vueTypes_name"),A=e=>h(e)&&(g(e,"type")||["_vueTypes_name","validator","default","required"].some(r=>g(e,r)));function T(e,r){return Object.defineProperty(e.bind(r),"__original",{value:e})}function v(e,r,t=!1){let n,o=!0,i="";n=h(e)?e:{type:e};const c=j(n)?n._vueTypes_name+" - ":"";if(A(n)&&n.type!==null){if(n.type===void 0||n.type===!0||!n.required&&r===void 0)return o;b(n.type)?(o=n.type.some(s=>v(s,r,!0)===!0),i=n.type.map(s=>E(s)).join(" or ")):(i=E(n),o=i==="Array"?b(r):i==="Object"?h(r):i==="String"||i==="Number"||i==="Boolean"||i==="Function"?function(s){if(s==null)return"";const l=s.constructor.toString().match(k);return l?l[1]:""}(r)===i:r instanceof n.type)}if(!o){const s=`${c}value "${r}" should be of type "${i}"`;return t===!1?(f(s),!1):s}if(g(n,"validator")&&_(n.validator)){const s=f,l=[];if(f=u=>{l.push(u)},o=n.validator(r),f=s,!o){const u=(l.length>1?"* ":"")+l.join(`
* `);return l.length=0,t===!1?(f(u),o):u}}return o}function d(e,r){const t=Object.defineProperties(r,{_vueTypes_name:{value:e,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(o){return o===void 0?(g(this,"default")&&delete this.default,this):_(o)||v(this,o,!0)===!0?(this.default=b(o)?()=>[...o]:h(o)?()=>Object.assign({},o):o,this):(f(`${this._vueTypes_name} - invalid default value: "${o}"`),this)}}}),{validator:n}=t;return _(n)&&(t.validator=T(n,t)),t}function p(e,r){const t=d(e,r);return Object.defineProperty(t,"validate",{value(n){return _(this.validator)&&f(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),this.validator=T(n,this),this}})}function V(e,r,t){const n=function(l){const u={};return Object.getOwnPropertyNames(l).forEach(m=>{u[m]=Object.getOwnPropertyDescriptor(l,m)}),Object.defineProperties({},u)}(r);if(n._vueTypes_name=e,!h(t))return n;const{validator:o}=t,i=x(t,G);if(_(o)){let{validator:l}=n;l&&(l=(s=(c=l).__original)!==null&&s!==void 0?s:c),n.validator=T(l?function(u){return l.call(this,u)&&o.call(this,u)}:o,n)}var c,s;return Object.assign(n,i)}function $(e){return e.replace(/^(?!\s*$)/gm,"  ")}const W=()=>p("any",{}),X=()=>p("function",{type:Function}),Z=()=>p("boolean",{type:Boolean}),ee=()=>p("string",{type:String}),te=()=>p("number",{type:Number}),ne=()=>p("array",{type:Array}),re=()=>p("object",{type:Object}),oe=()=>d("integer",{type:Number,validator:e=>U(e)}),ie=()=>d("symbol",{validator:e=>typeof e=="symbol"});function ae(e,r="custom validation failed"){if(typeof e!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return d(e.name||"<<anonymous function>>",{type:null,validator(t){const n=e(t);return n||f(`${this._vueTypes_name} - ${r}`),n}})}function se(e){if(!b(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const r=`oneOf - value should be one of "${e.join('", "')}".`,t=e.reduce((n,o)=>{if(o!=null){const i=o.constructor;n.indexOf(i)===-1&&n.push(i)}return n},[]);return d("oneOf",{type:t.length>0?t:void 0,validator(n){const o=e.indexOf(n)!==-1;return o||f(r),o}})}function le(e){if(!b(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");let r=!1,t=[];for(let o=0;o<e.length;o+=1){const i=e[o];if(A(i)){if(j(i)&&i._vueTypes_name==="oneOf"&&i.type){t=t.concat(i.type);continue}if(_(i.validator)&&(r=!0),i.type===!0||!i.type){f('oneOfType - invalid usage of "true" or "null" as types.');continue}t=t.concat(i.type)}else t.push(i)}t=t.filter((o,i)=>t.indexOf(o)===i);const n=t.length>0?t:null;return d("oneOfType",r?{type:n,validator(o){const i=[],c=e.some(s=>{const l=v(j(s)&&s._vueTypes_name==="oneOf"?s.type||null:s,o,!0);return typeof l=="string"&&i.push(l),l===!0});return c||f(`oneOfType - provided value does not match any of the ${i.length} passed-in validators:
${$(i.join(`
`))}`),c}}:{type:n})}function ce(e){return d("arrayOf",{type:Array,validator(r){let t="";const n=r.every(o=>(t=v(e,o,!0),t===!0));return n||f(`arrayOf - value validation error:
${$(t)}`),n}})}function ue(e){return d("instanceOf",{type:e})}function fe(e){return d("objectOf",{type:Object,validator(r){let t="";const n=Object.keys(r).every(o=>(t=v(e,r[o],!0),t===!0));return n||f(`objectOf - value validation error:
${$(t)}`),n}})}function de(e){const r=Object.keys(e),t=r.filter(o=>{var i;return!((i=e[o])===null||i===void 0||!i.required)}),n=d("shape",{type:Object,validator(o){if(!h(o))return!1;const i=Object.keys(o);if(t.length>0&&t.some(c=>i.indexOf(c)===-1)){const c=t.filter(s=>i.indexOf(s)===-1);return f(c.length===1?`shape - required property "${c[0]}" is not defined.`:`shape - required properties "${c.join('", "')}" are not defined.`),!1}return i.every(c=>{if(r.indexOf(c)===-1)return this._vueTypes_isLoose===!0||(f(`shape - shape definition does not include a "${c}" property. Allowed keys: "${r.join('", "')}".`),!1);const s=v(e[c],o[c],!0);return typeof s=="string"&&f(`shape - "${c}" property validation error:
 ${$(s)}`),s===!0})}});return Object.defineProperty(n,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(n,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),n}const pe=["name","validate","getter"],ye=(()=>{var e;return(e=class{static get any(){return W()}static get func(){return X().def(this.defaults.func)}static get bool(){return Z().def(this.defaults.bool)}static get string(){return ee().def(this.defaults.string)}static get number(){return te().def(this.defaults.number)}static get array(){return ne().def(this.defaults.array)}static get object(){return re().def(this.defaults.object)}static get integer(){return oe().def(this.defaults.integer)}static get symbol(){return ie()}static get nullable(){return{type:null}}static extend(r){if(b(r))return r.forEach(l=>this.extend(l)),this;const{name:t,validate:n=!1,getter:o=!1}=r,i=x(r,pe);if(g(this,t))throw new TypeError(`[VueTypes error]: Type "${t}" already defined`);const{type:c}=i;if(j(c))return delete i.type,Object.defineProperty(this,t,o?{get:()=>V(t,c,i)}:{value(...l){const u=V(t,c,i);return u.validator&&(u.validator=u.validator.bind(u,...l)),u}});let s;return s=o?{get(){const l=Object.assign({},i);return n?p(t,l):d(t,l)},enumerable:!0}:{value(...l){const u=Object.assign({},i);let m;return m=n?p(t,u):d(t,u),u.validator&&(m.validator=u.validator.bind(m,...l)),m},enumerable:!0},Object.defineProperty(this,t,s)}}).defaults={},e.sensibleDefaults=void 0,e.config=H,e.custom=ae,e.oneOf=se,e.instanceOf=ue,e.oneOfType=le,e.arrayOf=ce,e.objectOf=fe,e.shape=de,e.utils={validate:(r,t)=>v(t,r,!0)===!0,toType:(r,t,n=!1)=>n?p(r,t):d(r,t)},e})();function he(e={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var r;return(r=class extends ye{static get sensibleDefaults(){return O({},this.defaults)}static set sensibleDefaults(t){this.defaults=t!==!1?O({},t!==!0?t:e):{}}}).defaults=O({},e),r}class B extends he(){}const ve={header:B.string,name:B.string};var $e="";const me=[(e=>(a.pushScopeId("data-v-9e4ca078"),e=e(),a.popScopeId(),e))(()=>a.createElementVNode("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"},null,-1))],ge=a.defineComponent({name:"NCollapseItem"}),be=a.defineComponent({...ge,props:ve,setup(e){const r=e,{prefixCls:t}=w("collapse-item"),n=a.inject(C),o=a.computed(()=>Array.isArray(n==null?void 0:n.activeNames.value)?n==null?void 0:n.activeNames.value.includes(r.name):(n==null?void 0:n.activeNames.value)==r.name),i=()=>{n==null||n.handleItemClick(r.name)};return(c,s)=>(a.openBlock(),a.createElementBlock("div",{class:a.normalizeClass([`${a.unref(t)}`])},[a.createElementVNode("div",{class:a.normalizeClass(`${a.unref(t)}-header`),onClick:i},[a.createElementVNode("div",null,[a.createElementVNode("span",{role:"img","aria-label":"right",class:a.normalizeClass(`anticon anticon-right ${a.unref(t)}-arrow`)},[(a.openBlock(),a.createElementBlock("svg",{focusable:"false",class:"","data-icon":"right",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896",style:a.normalizeStyle({transform:a.unref(o)?"rotate(90deg)":""})},me,4))],2)]),a.createTextVNode(" "+a.toDisplayString(c.header),1)],2),a.withDirectives(a.createElementVNode("div",{class:a.normalizeClass([`${a.unref(t)}-content`,a.unref(o)?`${a.unref(t)}-content-active`:`${a.unref(t)}-content-inactive`])},[a.createElementVNode("div",{class:a.normalizeClass(`${a.unref(t)}-content-box`)},[a.renderSlot(c.$slots,"default",{},void 0,!0)],2)],2),[[a.vShow,a.unref(o)]])],2))}});var q=N(be,[["__scopeId","data-v-9e4ca078"]]);const z=D(K,{CollapseItem:q}),_e=L(q);y.NCollapse=z,y.NCollapseItem=_e,y.default=z,Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
