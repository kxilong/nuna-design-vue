import{_ as A,o as U,c as L,b as h,w as r,V as b,d as n,e as a,a as V,r as _}from"./app.37dbe884.js";const N={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:t,resolveComponent:i,createVNode:s,renderList:k,Fragment:d,openBlock:o,createElementBlock:e,withCtx:c}=b,v=t("div",{class:"sub-title"},"circle",-1),C={class:"demo-basic--circle"},E={class:"block"},F=t("div",{class:"sub-title"},"square",-1),g={class:"demo-basic--circle"},D={class:"block"};function w(u,B){const p=i("n-avatar"),m=i("n-col"),f=i("n-row");return o(),e("div",null,[s(f,{class:"demo-avatar demo-basic"},{default:c(()=>[s(m,{span:12},{default:c(()=>[v,t("div",C,[t("div",E,[s(p,{size:50,src:u.circleUrl},null,8,["src"])]),(o(!0),e(d,null,k(u.sizeList,l=>(o(),e("div",{key:l,class:"block"},[s(p,{size:l,src:u.circleUrl},null,8,["size","src"])]))),128))])]),_:1}),s(m,{span:12},{default:c(()=>[F,t("div",g,[t("div",D,[s(p,{shape:"square",size:50,src:u.squareUrl},null,8,["src"])]),(o(!0),e(d,null,k(u.sizeList,l=>(o(),e("div",{key:l,class:"block"},[s(p,{shape:"square",size:l,src:u.squareUrl},null,8,["size","src"])]))),128))])]),_:1})]),_:1})])}const{defineComponent:z}=b,{reactive:q,toRefs:y}=b;return{render:w,...z({setup(u,{expose:B}){B();const p=q({circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",squareUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",sizeList:["small","","large"]}),{circleUrl:m,squareUrl:f,sizeList:l}=y(p),x={state:p,circleUrl:m,squareUrl:f,sizeList:l,reactive:q,toRefs:y};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}})}}(),"render-demo-1":function(){const{createElementVNode:t,resolveComponent:i,withCtx:s,createVNode:k,openBlock:d,createElementBlock:o}=b,e={class:"demo-type"},c=t("svg",{width:"14",height:"14",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z",fill:"none",stroke:"#ffffff","stroke-width":"4","stroke-linejoin":"round"}),t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z",fill:"#ffffff"})],-1);function v(E,F){const g=i("n-avatar");return d(),o("div",null,[t("div",e,[t("div",null,[k(g,null,{icon:s(()=>[c]),_:1})]),t("div",null,[k(g,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})])])])}return{render:v,...{}}}()}},I=JSON.parse('{"title":"Avatar \u5934\u50CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u5C55\u793A\u7C7B\u578B","slug":"\u5C55\u793A\u7C7B\u578B"},{"level":2,"title":"Avatar \u5C5E\u6027","slug":"avatar-\u5C5E\u6027"},{"level":2,"title":"Avatar \u4E8B\u4EF6","slug":"avatar-\u4E8B\u4EF6"},{"level":2,"title":"Avatar \u63D2\u69FD","slug":"avatar-\u63D2\u69FD"}],"relativePath":"components/avatar.md"}'),j=n("h1",{id:"avatar-\u5934\u50CF",tabindex:"-1"},[a("Avatar \u5934\u50CF "),n("a",{class:"header-anchor",href:"#avatar-\u5934\u50CF","aria-hidden":"true"},"#")],-1),M=n("p",null,"\u7528\u6765\u4EE3\u8868\u7528\u6237\u6216\u4E8B\u7269\uFF0C\u652F\u6301\u56FE\u7247\u3001\u56FE\u6807\u6216\u5B57\u7B26\u5C55\u793A\u3002",-1),Z=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[a("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),R=n("div",null,"\u9664\u4E86\u9ED8\u8BA4\u7684\u5927\u5C0F\uFF0C\u6309\u94AE\u7EC4\u4EF6\u8FD8\u63D0\u4F9B\u4E86\u51E0\u79CD\u989D\u5916\u7684\u5C3A\u5BF8\u53EF\u4F9B\u9009\u62E9\uFF0C\u4EE5\u4FBF\u9002\u914D\u4E0D\u540C\u7684\u573A\u666F\u3002",-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("n-row")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-avatar demo-basic"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("n-col")]),a(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sub-title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("circle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-basic--circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("n-avatar")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("circleUrl"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size in sizeList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("n-avatar")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("circleUrl"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("n-col")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("n-col")]),a(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sub-title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("square"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-basic--circle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("n-avatar")]),a(),n("span",{class:"token attr-name"},"shape"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("square"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("squareUrl"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size in sizeList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("n-avatar")]),a(),n("span",{class:"token attr-name"},"shape"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("square"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("squareUrl"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("n-col")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("n-row")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" toRefs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" state "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"circleUrl"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"squareUrl"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"sizeList"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'small'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'large'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token keyword"},"as"),a(),n("span",{class:"token keyword"},"const"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" circleUrl"),n("span",{class:"token punctuation"},","),a(" squareUrl"),n("span",{class:"token punctuation"},","),a(" sizeList "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),a("state"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-basic"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".demo-basic .sub-title"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),a(" 14px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},`.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square`),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" space-between"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"border-right"),n("span",{class:"token punctuation"},":"),a(" 1px solid #ebebeb"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-basic .block:not(:last-child)"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"border-right"),n("span",{class:"token punctuation"},":"),a(" 1px solid #ebebeb"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-basic .block"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),a(" 1"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-basic .n-col:not(:last-child)"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"border-right"),n("span",{class:"token punctuation"},":"),a(" 1px solid #ebebeb"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),$=n("h2",{id:"\u5C55\u793A\u7C7B\u578B",tabindex:"-1"},[a("\u5C55\u793A\u7C7B\u578B "),n("a",{class:"header-anchor",href:"#\u5C55\u793A\u7C7B\u578B","aria-hidden":"true"},"#")],-1),H=n("div",null,"\u9664\u4E86\u9ED8\u8BA4\u7684\u5927\u5C0F\uFF0C\u6309\u94AE\u7EC4\u4EF6\u8FD8\u63D0\u4F9B\u4E86\u51E0\u79CD\u989D\u5916\u7684\u5C3A\u5BF8\u53EF\u4F9B\u9009\u62E9\uFF0C\u4EE5\u4FBF\u9002\u914D\u4E0D\u540C\u7684\u573A\u666F\u3002",-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-type"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("n-avatar")]),n("span",{class:"token punctuation"},">")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),a(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("svg")]),a(`
                        `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("14"),n("span",{class:"token punctuation"},'"')]),a(`
                        `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("14"),n("span",{class:"token punctuation"},'"')]),a(`
                        `),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0 0 48 48"),n("span",{class:"token punctuation"},'"')]),a(`
                        `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("none"),n("span",{class:"token punctuation"},'"')]),a(`
                        `),n("span",{class:"token attr-name"},"xmlns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.w3.org/2000/svg"),n("span",{class:"token punctuation"},'"')]),a(`
                    `),n("span",{class:"token punctuation"},">")]),a(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(`
                            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z"),n("span",{class:"token punctuation"},'"')]),a(`
                            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("none"),n("span",{class:"token punctuation"},'"')]),a(`
                            `),n("span",{class:"token attr-name"},"stroke"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#ffffff"),n("span",{class:"token punctuation"},'"')]),a(`
                            `),n("span",{class:"token attr-name"},"stroke-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4"),n("span",{class:"token punctuation"},'"')]),a(`
                            `),n("span",{class:"token attr-name"},"stroke-linejoin"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("round"),n("span",{class:"token punctuation"},'"')]),a(`
                        `),n("span",{class:"token punctuation"},"/>")]),a(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(`
                            `),n("span",{class:"token attr-name"},"fill-rule"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("evenodd"),n("span",{class:"token punctuation"},'"')]),a(`
                            `),n("span",{class:"token attr-name"},"clip-rule"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("evenodd"),n("span",{class:"token punctuation"},'"')]),a(`
                            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"),n("span",{class:"token punctuation"},'"')]),a(`
                            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#ffffff"),n("span",{class:"token punctuation"},'"')]),a(`
                        `),n("span",{class:"token punctuation"},"/>")]),a(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("svg")]),n("span",{class:"token punctuation"},">")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("n-avatar")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("n-avatar")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-type"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-type > div"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),a(" 1"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".demo-type > div:not(:last-child)"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"border-right"),n("span",{class:"token punctuation"},":"),a(" 1px solid "),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),a("--el-border-color"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),P=V('<h2 id="avatar-\u5C5E\u6027" tabindex="-1">Avatar \u5C5E\u6027 <a class="header-anchor" href="#avatar-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>size</td><td>Avatar \u5927\u5C0F</td><td>number</td><td>&#39;large&#39; / &#39;middle&#39;</td><td><code>small</code></td></tr><tr><td>shape</td><td>Avatar \u5F62\u72B6</td><td>string</td><td>&#39;circle&#39; /&#39;square&#39;</td><td><code>circle</code></td></tr><tr><td>src</td><td>Avatar \u56FE\u7247\u7684\u6E90\u5730\u5740</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>alt</td><td>\u56FE\u7247 Avatar \u7684\u539F\u751F alt \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="avatar-\u4E8B\u4EF6" tabindex="-1">Avatar \u4E8B\u4EF6 <a class="header-anchor" href="#avatar-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>error</td><td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u89E6\u53D1</td><td><code>(event) =&gt; void</code></td></tr></tbody></table><h2 id="avatar-\u63D2\u69FD" tabindex="-1">Avatar \u63D2\u69FD <a class="header-anchor" href="#avatar-\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u5934\u50CF\u5C55\u793A\u56FE\u6807</td></tr></tbody></table>',6);function J(t,i,s,k,d,o){const e=_("render-demo-0"),c=_("demo"),v=_("render-demo-1");return U(),L("div",null,[j,M,Z,h(c,{sourceCode:`<template>
    <n-row class="demo-avatar demo-basic">
        <n-col :span="12">
            <div class="sub-title">circle</div>
            <div class="demo-basic--circle">
                <div class="block">
                    <n-avatar :size="50" :src="circleUrl" />
                </div>
                <div v-for="size in sizeList" :key="size" class="block">
                    <n-avatar :size="size" :src="circleUrl" />
                </div>
            </div>
        </n-col>
        <n-col :span="12">
            <div class="sub-title">square</div>
            <div class="demo-basic--circle">
                <div class="block">
                    <n-avatar shape="square" :size="50" :src="squareUrl" />
                </div>
                <div v-for="size in sizeList" :key="size" class="block">
                    <n-avatar shape="square" :size="size" :src="squareUrl" />
                </div>
            </div>
        </n-col>
    </n-row>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue';

const state = reactive({
    circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    sizeList: ['small', '', 'large'] as const,
});

const { circleUrl, squareUrl, sizeList } = toRefs(state);
<\/script>

<style scoped>
.demo-basic {
    text-align: center;
}

.demo-basic .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid #ebebeb;
}
.demo-basic .block:not(:last-child) {
    border-right: 1px solid #ebebeb;
}
.demo-basic .block {
    flex: 1;
}
.demo-basic .n-col:not(:last-child) {
    border-right: 1px solid #ebebeb;
}
</style>
`},{description:r(()=>[R]),highlight:r(()=>[S]),default:r(()=>[h(e)]),_:1}),$,h(c,{sourceCode:`<template>
    <div class="demo-type">
        <div>
            <n-avatar>
                <template #icon>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="4"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                            fill="#ffffff"
                        />
                    </svg>
                </template>
            </n-avatar>
        </div>
        <div>
            <n-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
    </div>
</template>

<style scoped>
.demo-type {
    display: flex;
}
.demo-type > div {
    flex: 1;
    text-align: center;
}

.demo-type > div:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
}
</style>
`},{description:r(()=>[H]),highlight:r(()=>[O]),default:r(()=>[h(v)]),_:1}),P])}var K=A(N,[["render",J]]);export{I as __pageData,K as default};
