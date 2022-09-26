import{_ as N,V as h,o as V,c as K,d as C,w as r,e as x,a as n,b as t,r as w}from"./app.b61b94fd.js";const S={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:a,createElementVNode:c,resolveComponent:e,withCtx:s,createVNode:u,openBlock:g,createElementBlock:k}=h;function i(o,l){const p=e("n-collapse-item"),b=e("n-collapse");return g(),k("div",null,[u(b,{activeKey:o.activeKey,"onUpdate:activeKey":l[0]||(l[0]=E=>o.activeKey=E)},{default:s(()=>[u(p,{name:"1",header:"This is item header 1"},{default:s(()=>[c("p",null,a(o.text),1)]),_:1}),u(p,{name:"2",header:"This is item header 2"},{default:s(()=>[c("p",null,a(o.text),1)]),_:1}),u(p,{name:"3",header:"This is item header 3",collapsible:"disabled"},{default:s(()=>[c("p",null,a(o.text),1)]),_:1})]),_:1},8,["activeKey"])])}const{defineComponent:d,ref:y,watch:_}=h,F=d({setup(){const o="A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",l=y(["1"]);return _(l,p=>{console.log(p)}),{text:o,activeKey:l}}});return{render:i,...F}}(),"render-demo-1":function(){const{createElementVNode:a,resolveComponent:c,withCtx:e,createVNode:s,openBlock:u,createElementBlock:g}=h,k={class:"demo-collapse"},i=a("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1),d=a("div",null," Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",-1),y=a("div",null," Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",-1),_=a("div",null," Visual feedback: reflect current state by updating or rearranging elements of the page. ",-1),F=a("div",null,"Simplify the process: keep operating process simple and intuitive;",-1),o=a("div",null," Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",-1),l=a("div",null," Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",-1),p=a("div",null," Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ",-1),b=a("div",null," Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",-1);function E(B,v){const m=c("n-collapse-item"),f=c("n-collapse");return u(),g("div",null,[a("div",k,[s(f,{modelValue:B.activeName,"onUpdate:modelValue":v[0]||(v[0]=q=>B.activeName=q),accordion:""},{default:e(()=>[s(m,{header:"Consistency",name:"1"},{default:e(()=>[i,d]),_:1}),s(m,{header:"Feedback",name:"2"},{default:e(()=>[y,_]),_:1}),s(m,{header:"Efficiency",name:"3"},{default:e(()=>[F,o,l]),_:1}),s(m,{header:"Controllability",name:"4"},{default:e(()=>[p,b]),_:1})]),_:1},8,["modelValue"])])])}const{defineComponent:A}=h,{ref:D}=h;return{render:E,...A({setup(B,{expose:v}){v();const f={activeName:D("1"),ref:D};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}})}}()}},H=JSON.parse('{"title":"Collapse \u6298\u53E0\u9762\u677F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u624B\u98CE\u7434\u6548\u679C","slug":"\u624B\u98CE\u7434\u6548\u679C"},{"level":2,"title":"Collapse \u5C5E\u6027","slug":"collapse-\u5C5E\u6027"},{"level":2,"title":"Collapse Item \u5C5E\u6027","slug":"collapse-item-\u5C5E\u6027"}],"relativePath":"components/collapse.md"}'),T=x('<h1 id="collapse-\u6298\u53E0\u9762\u677F" tabindex="-1">Collapse \u6298\u53E0\u9762\u677F <a class="header-anchor" href="#collapse-\u6298\u53E0\u9762\u677F" aria-hidden="true">#</a></h1><p>\u901A\u8FC7\u6298\u53E0\u9762\u677F\u6536\u7EB3\u5185\u5BB9\u533A\u57DF</p><h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h2><ul><li>\u5BF9\u590D\u6742\u533A\u57DF\u8FDB\u884C\u5206\u7EC4\u548C\u9690\u85CF\uFF0C\u4FDD\u6301\u9875\u9762\u7684\u6574\u6D01\u3002</li><li>&#39;\u624B\u98CE\u7434&#39; \u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6298\u53E0\u9762\u677F\uFF0C\u53EA\u5141\u8BB8\u5355\u4E2A\u5185\u5BB9\u533A\u57DF\u5C55\u5F00\u3002</li></ul><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2>',5),O=n("div",null,"\u53EF\u4EE5\u7528\u6765\u5C55\u793A\u65B0\u6D88\u606F\u7684\u6570\u91CF\u3002\u901A\u8FC7\u8BBE\u7F6E value \u6765\u8C03\u6574\u6807\u8BB0\u6240\u5C55\u793A\u7684\u5185\u5BB9\uFF0C\u652F\u6301 Number or String \u4F5C\u4E3A\u53C2\u6570",-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-collapse")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("activeKey")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("activeKey"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-collapse-item")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("This is item header 1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{ text }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-collapse-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-collapse-item")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("This is item header 2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{ text }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-collapse-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-collapse-item")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("This is item header 3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"collapsible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{ text }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-collapse-item")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-collapse")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" text "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" activeKey "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

        `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("activeKey"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token parameter"},"val"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            text`),n("span",{class:"token punctuation"},","),t(`
            activeKey`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),j=n("h2",{id:"\u624B\u98CE\u7434\u6548\u679C",tabindex:"-1"},[t("\u624B\u98CE\u7434\u6548\u679C "),n("a",{class:"header-anchor",href:"#\u624B\u98CE\u7434\u6548\u679C","aria-hidden":"true"},"#")],-1),z=n("div",null,"\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u9762\u677F\u3002",-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-collapse"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-collapse")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("activeName"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"accordion"),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-collapse-item")]),t(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Consistency"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                    Consistent with real life: in line with the process and logic of real life, and
                    comply with languages and habits that the users are used to;
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                    Consistent within interface: all elements should be consistent, such as: design
                    style, icons and texts, position of elements, etc.
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-collapse-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-collapse-item")]),t(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Feedback"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                    Operation feedback: enable the users to clearly perceive their operations by
                    style updates and interactive effects;
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                    Visual feedback: reflect current state by updating or rearranging elements of
                    the page.
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-collapse-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-collapse-item")]),t(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Efficiency"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("Simplify the process: keep operating process simple and intuitive;"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                    Definite and clear: enunciate your intentions clearly so that the users can
                    quickly understand and make decisions;
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                    Easy to identify: the interface should be straightforward, which helps the users
                    to identify and frees them from memorizing and recalling.
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-collapse-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("n-collapse-item")]),t(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Controllability"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                    Decision making: giving advices about operations is acceptable, but do not make
                    decisions for the users;
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                    Controlled consequences: users should be granted the freedom to operate,
                    including canceling, aborting or terminating current operation.
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-collapse-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("n-collapse")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" activeName "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=x('<h2 id="collapse-\u5C5E\u6027" tabindex="-1">Collapse \u5C5E\u6027 <a class="header-anchor" href="#collapse-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3A string\uFF0C\u5426\u5219\u4E3A array)</td><td>string (accordion mode) / array (non-accordion mode)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>accordion</td><td>\u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="collapse-item-\u5C5E\u6027" tabindex="-1">Collapse Item \u5C5E\u6027 <a class="header-anchor" href="#collapse-item-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>header</td><td>\u552F\u4E00\u6807\u5FD7\u7B26</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>title</td><td>\u9762\u677F\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table>',4);function U(a,c,e,s,u,g){const k=w("render-demo-0"),i=w("demo"),d=w("render-demo-1");return V(),K("div",null,[T,C(i,{sourceCode:`<template>
    <n-collapse v-model:activeKey="activeKey">
        <n-collapse-item name="1" header="This is item header 1">
            <p>{{ text }}</p>
        </n-collapse-item>
        <n-collapse-item name="2" header="This is item header 2">
            <p>{{ text }}</p>
        </n-collapse-item>
        <n-collapse-item name="3" header="This is item header 3" collapsible="disabled">
            <p>{{ text }}</p>
        </n-collapse-item>
    </n-collapse>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    setup() {
        const text = \`A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.\`;
        const activeKey = ref(['1']);

        watch(activeKey, val => {
            console.log(val);
        });

        return {
            text,
            activeKey,
        };
    },
});
<\/script>
`},{description:r(()=>[O]),highlight:r(()=>[$]),default:r(()=>[C(k)]),_:1}),j,C(i,{sourceCode:`<template>
    <div class="demo-collapse">
        <n-collapse v-model="activeName" accordion>
            <n-collapse-item header="Consistency" name="1">
                <div>
                    Consistent with real life: in line with the process and logic of real life, and
                    comply with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such as: design
                    style, icons and texts, position of elements, etc.
                </div>
            </n-collapse-item>
            <n-collapse-item header="Feedback" name="2">
                <div>
                    Operation feedback: enable the users to clearly perceive their operations by
                    style updates and interactive effects;
                </div>
                <div>
                    Visual feedback: reflect current state by updating or rearranging elements of
                    the page.
                </div>
            </n-collapse-item>
            <n-collapse-item header="Efficiency" name="3">
                <div>Simplify the process: keep operating process simple and intuitive;</div>
                <div>
                    Definite and clear: enunciate your intentions clearly so that the users can
                    quickly understand and make decisions;
                </div>
                <div>
                    Easy to identify: the interface should be straightforward, which helps the users
                    to identify and frees them from memorizing and recalling.
                </div>
            </n-collapse-item>
            <n-collapse-item header="Controllability" name="4">
                <div>
                    Decision making: giving advices about operations is acceptable, but do not make
                    decisions for the users;
                </div>
                <div>
                    Controlled consequences: users should be granted the freedom to operate,
                    including canceling, aborting or terminating current operation.
                </div>
            </n-collapse-item>
        </n-collapse>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeName = ref('1');
<\/script>
`},{description:r(()=>[z]),highlight:r(()=>[I]),default:r(()=>[C(d)]),_:1}),P])}var L=N(S,[["render",U]]);export{H as __pageData,L as default};
