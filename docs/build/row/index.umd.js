(function(s,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(s=typeof globalThis!="undefined"?globalThis:s||self,e(s.index={},s.Vue))})(this,function(s,e){"use strict";var f=o=>({prefixCls:o?`na-${o}`:"na"});const l={justify:{type:String,default:"start"},align:{type:String,default:"top"}};var _="",p=(o,t)=>{const n=o.__vccOpts||o;for(const[r,a]of t)n[r]=a;return n};const u=e.defineComponent({name:"NRow"}),d=e.defineComponent({...u,props:l,setup(o){const{prefixCls:t}=f("row");return(n,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([`${e.unref(t)}`,n.justify&&`${e.unref(t)}-${n.justify}`,n.align&&`${e.unref(t)}-${n.align}`]),style:{rowGap:"0px"}},[e.renderSlot(n.$slots,"default",{},void 0,!0)],2))}});var c=p(d,[["__scopeId","data-v-b69d6366"]]);const i=((o,t)=>{if(o.install=n=>{for(const r of[o,...Object.values(t!=null?t:{})])n.component(r.name,r)},t)for(const[n,r]of Object.entries(t))o[n]=r;return o})(c);s.NRow=i,s.default=i,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
