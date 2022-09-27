import{_ as B,V as _,o as f,c as b,b as i,w as s,a as C,d as n,e as t,r as F}from"./app.1901549c.js";const D={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:a,openBlock:u,createElementBlock:c}=_;function l(r,p){const m=o("n-spin");return u(),c("div",null,[a(m)])}return{render:l,...{}}}(),"render-demo-1":function(){const{resolveComponent:o,createVNode:a,withCtx:u,openBlock:c,createElementBlock:l}=_;function k(p,m){const d=o("n-spin"),g=o("n-space");return c(),l("div",null,[a(g,null,{default:u(()=>[a(d,{size:"small"}),a(d),a(d,{size:"large"})]),_:1})])}return{render:k,...{}}}(),"render-demo-2":function(){const{resolveComponent:o,createVNode:a,createElementVNode:u,openBlock:c,createElementBlock:l}=_,k={class:"example"};function r(m,d){const g=o("n-spin");return c(),l("div",null,[u("div",k,[a(g)])])}return{render:r,...{}}}(),"render-demo-3":function(){const{resolveComponent:o,createVNode:a,createElementVNode:u,toDisplayString:c,createTextVNode:l,withCtx:k,openBlock:r,createElementBlock:p}=_,m={class:"example"};function d(e,v){const x=o("n-spin"),y=o("n-button");return r(),p("div",null,[u("div",m,[a(x,{spinning:e.spinning},null,8,["spinning"])]),a(y,{type:"primary",onClick:e.changeSpinning},{default:k(()=>[l("\u5207\u6362Loading\u72B6\u6001\uFF08"+c(e.spinning)+"\uFF09",1)]),_:1},8,["onClick"])])}const{defineComponent:g,ref:h}=_,E=g({setup(){const e=h(!1);return{spinning:e,changeSpinning:()=>{e.value=!e.value}}}});return{render:d,...E}}(),"render-demo-4":function(){const{resolveComponent:o,createVNode:a,createElementVNode:u,openBlock:c,createElementBlock:l}=_,k={class:"example"};function r(m,d){const g=o("n-spin");return c(),l("div",null,[u("div",k,[a(g,{tip:"Loading..."})])])}return{render:r,...{}}}(),"render-demo-5":function(){const{resolveComponent:o,createVNode:a,createElementVNode:u,toDisplayString:c,createTextVNode:l,withCtx:k,openBlock:r,createElementBlock:p}=_,m={class:"example"};function d(e,v){const x=o("n-spin"),y=o("n-button");return r(),p("div",null,[u("div",m,[a(x,{spinning:e.spinning,delay:e.delayTime},null,8,["spinning","delay"])]),a(y,{type:"primary",onClick:e.changeSpinning},{default:k(()=>[l("\u5207\u6362Loading\u72B6\u6001\uFF08"+c(e.spinning)+"\uFF09",1)]),_:1},8,["onClick"])])}const{defineComponent:g,ref:h}=_,E=g({setup(){const e=h(!1);return{spinning:e,delayTime:500,changeSpinning:()=>{e.value=!e.value}}}});return{render:d,...E}}()}},R=JSON.parse('{"title":"Spin \u52A0\u8F7D\u4E2D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u5404\u79CD\u5927\u5C0F","slug":"\u5404\u79CD\u5927\u5C0F"},{"level":2,"title":"\u5BB9\u5668","slug":"\u5BB9\u5668"},{"level":2,"title":"\u5185\u5BB9\u52A0\u8F7D","slug":"\u5185\u5BB9\u52A0\u8F7D"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848","slug":"\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848"},{"level":2,"title":"\u5EF6\u8FDF","slug":"\u5EF6\u8FDF"},{"level":2,"title":"Spin \u5C5E\u6027","slug":"spin-\u5C5E\u6027"}],"relativePath":"components/spin.md"}'),A=C('<h1 id="spin-\u52A0\u8F7D\u4E2D" tabindex="-1">Spin \u52A0\u8F7D\u4E2D <a class="header-anchor" href="#spin-\u52A0\u8F7D\u4E2D" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u9875\u9762\u548C\u533A\u5757\u7684\u52A0\u8F7D\u4E2D\u72B6\u6001\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h2><ul><li>\u9875\u9762\u5C40\u90E8\u5904\u4E8E\u7B49\u5F85\u5F02\u6B65\u6570\u636E\u6216\u6B63\u5728\u6E32\u67D3\u8FC7\u7A0B\u65F6\uFF0C\u5408\u9002\u7684\u52A0\u8F7D\u52A8\u6548\u4F1A\u6709\u6548\u7F13\u89E3\u7528\u6237\u7684\u7126\u8651\u3002 </li></ul><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2>',5),V=n("div",null,"\u4E00\u4E2A\u7B80\u5355\u7684 loading \u72B6\u6001\u3002",-1),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-spin")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),S=n("h2",{id:"\u5404\u79CD\u5927\u5C0F",tabindex:"-1"},[t("\u5404\u79CD\u5927\u5C0F "),n("a",{class:"header-anchor",href:"#\u5404\u79CD\u5927\u5C0F","aria-hidden":"true"},"#")],-1),w=n("div",null,"\u5C0F\u7684\u7528\u4E8E\u6587\u672C\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u7528\u4E8E\u5361\u7247\u5BB9\u5668\u7EA7\u52A0\u8F7D\uFF0C\u5927\u7684\u7528\u4E8E\u9875\u9762\u7EA7\u52A0\u8F7D\u3002",-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-space")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-spin")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-spin")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-spin")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h2",{id:"\u5BB9\u5668",tabindex:"-1"},[t("\u5BB9\u5668 "),n("a",{class:"header-anchor",href:"#\u5BB9\u5668","aria-hidden":"true"},"#")],-1),L=n("div",null,"\u653E\u5165\u4E00\u4E2A\u5BB9\u5668\u4E2D\u3002",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-spin")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".example"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},","),t(" 0"),n("span",{class:"token punctuation"},","),t(" 0"),n("span",{class:"token punctuation"},","),t(" 0.05"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 4px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 30px 50px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 20px 0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),$=n("h2",{id:"\u5185\u5BB9\u52A0\u8F7D",tabindex:"-1"},[t("\u5185\u5BB9\u52A0\u8F7D "),n("a",{class:"header-anchor",href:"#\u5185\u5BB9\u52A0\u8F7D","aria-hidden":"true"},"#")],-1),j=n("div",null,"\u53EF\u4EE5\u76F4\u63A5\u628A\u5185\u5BB9\u5185\u5D4C\u5230 Spin \u4E2D\uFF0C\u5C06\u73B0\u6709\u5BB9\u5668\u53D8\u4E3A\u52A0\u8F7D\u72B6\u6001\u3002",-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-spin")]),t(),n("span",{class:"token attr-name"},":spinning"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("spinning"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("changeSpinning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u5207\u6362Loading\u72B6\u6001\uFF08{{ spinning }}\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" spinning "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"changeSpinning"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            spinning`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("spinning"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            spinning`),n("span",{class:"token punctuation"},","),t(`
            changeSpinning`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".example"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},","),t(" 0"),n("span",{class:"token punctuation"},","),t(" 0"),n("span",{class:"token punctuation"},","),t(" 0.05"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 4px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 30px 50px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 20px 0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h2",{id:"\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848","aria-hidden":"true"},"#")],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-spin")]),t(),n("span",{class:"token attr-name"},"tip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Loading..."),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".example"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},","),t(" 0"),n("span",{class:"token punctuation"},","),t(" 0"),n("span",{class:"token punctuation"},","),t(" 0.05"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 4px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 30px 50px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 20px 0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h2",{id:"\u5EF6\u8FDF",tabindex:"-1"},[t("\u5EF6\u8FDF "),n("a",{class:"header-anchor",href:"#\u5EF6\u8FDF","aria-hidden":"true"},"#")],-1),H=n("div",null,"\u5EF6\u8FDF\u663E\u793A loading \u6548\u679C\u3002\u5F53 spinning \u72B6\u6001\u5728 delay \u65F6\u95F4\u5185\u7ED3\u675F\uFF0C\u5219\u4E0D\u663E\u793A loading \u72B6\u6001\u3002",-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-spin")]),t(),n("span",{class:"token attr-name"},":spinning"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("spinning"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("delayTime"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("changeSpinning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u5207\u6362Loading\u72B6\u6001\uFF08{{ spinning }}\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" spinning "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" delayTime "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},";"),t(`

        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"changeSpinning"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            spinning`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("spinning"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            spinning`),n("span",{class:"token punctuation"},","),t(`
            delayTime`),n("span",{class:"token punctuation"},","),t(`
            changeSpinning`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".example"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},","),t(" 0"),n("span",{class:"token punctuation"},","),t(" 0"),n("span",{class:"token punctuation"},","),t(" 0.05"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 4px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 30px 50px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 20px 0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=C('<h2 id="spin-\u5C5E\u6027" tabindex="-1">Spin \u5C5E\u6027 <a class="header-anchor" href="#spin-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>delay</td><td>\u5EF6\u8FDF\u663E\u793A\u52A0\u8F7D\u6548\u679C\u7684\u65F6\u95F4\uFF08\u9632\u6B62\u95EA\u70C1\uFF09</td><td>number (\u6BEB\u79D2)</td><td>-</td></tr><tr><td>size</td><td>\u7EC4\u4EF6\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A small middle large</td><td>string</td><td><code>middle</code></td></tr><tr><td>spinning</td><td>\u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001</td><td>boolean</td><td>true</td></tr><tr><td>tip</td><td>\u5F53\u4F5C\u4E3A\u5305\u88F9\u5143\u7D20\u65F6\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848</td><td>string</td><td>-</td></tr></tbody></table>',2);function M(o,a,u,c,l,k){const r=F("render-demo-0"),p=F("demo"),m=F("render-demo-1"),d=F("render-demo-2"),g=F("render-demo-3"),h=F("render-demo-4"),E=F("render-demo-5");return f(),b("div",null,[A,i(p,{sourceCode:`<template>
    <n-spin />
</template>
`},{description:s(()=>[V]),highlight:s(()=>[N]),default:s(()=>[i(r)]),_:1}),S,i(p,{sourceCode:`<template>
    <n-space>
        <n-spin size="small" />
        <n-spin />
        <n-spin size="large" />
    </n-space>
</template>
`},{description:s(()=>[w]),highlight:s(()=>[q]),default:s(()=>[i(m)]),_:1}),T,i(p,{sourceCode:`<template>
    <div class="example">
        <n-spin />
    </div>
</template>

<style scoped>
.example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
</style>
`},{description:s(()=>[L]),highlight:s(()=>[z]),default:s(()=>[i(d)]),_:1}),$,i(p,{sourceCode:`<template>
    <div class="example">
        <n-spin :spinning="spinning" />
    </div>
    <n-button type="primary" @click="changeSpinning">\u5207\u6362Loading\u72B6\u6001\uFF08{{ spinning }}\uFF09</n-button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const spinning = ref<boolean>(false);

        const changeSpinning = () => {
            spinning.value = !spinning.value;
        };

        return {
            spinning,
            changeSpinning,
        };
    },
});
<\/script>

<style scoped>
.example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
</style>
`},{description:s(()=>[j]),highlight:s(()=>[J]),default:s(()=>[i(g)]),_:1}),O,i(p,{sourceCode:`<template>
    <div class="example">
        <n-spin tip="Loading..." />
    </div>
</template>

<style scoped>
.example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
</style>
`},{highlight:s(()=>[P]),default:s(()=>[i(h)]),_:1}),G,i(p,{sourceCode:`<template>
    <div class="example">
        <n-spin :spinning="spinning" :delay="delayTime" />
    </div>
    <n-button type="primary" @click="changeSpinning">\u5207\u6362Loading\u72B6\u6001\uFF08{{ spinning }}\uFF09</n-button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const spinning = ref<boolean>(false);
        const delayTime = 500;

        const changeSpinning = () => {
            spinning.value = !spinning.value;
        };

        return {
            spinning,
            delayTime,
            changeSpinning,
        };
    },
});
<\/script>

<style scoped>
.example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
</style>
`},{description:s(()=>[H]),highlight:s(()=>[I]),default:s(()=>[i(E)]),_:1}),K])}var U=B(D,[["render",M]]);export{R as __pageData,U as default};
