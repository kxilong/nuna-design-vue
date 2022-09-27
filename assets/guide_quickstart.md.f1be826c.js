import{_ as s,o as a,c as n,a as p}from"./app.37dbe884.js";const m=JSON.parse('{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u7EC4\u4EF6","slug":"\u4F7F\u7528\u7EC4\u4EF6"},{"level":2,"title":"\u6CE8\u518C","slug":"\u6CE8\u518C"}],"relativePath":"guide/quickstart.md"}'),e={name:"guide/quickstart.md"},t=p(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528\u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528\u7EC4\u4EF6" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i --save nuna-design-vue</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6CE8\u518C" tabindex="-1">\u6CE8\u518C <a class="header-anchor" href="#\u6CE8\u518C" aria-hidden="true">#</a></h2><ol><li>\u5168\u5C40\u6CE8\u518C</li></ol><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &quot;vue&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;./style.css&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &quot;./App.vue&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">import NunaDesignVue from &quot;nuna-design-vue&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;nuna-design-vue/style.css&quot;; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App); </span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(NunaDesignVue); </span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&quot;#app&quot;);</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5168\u5C40\u90E8\u5206\u6CE8\u518C</li></ol><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &quot;vue&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;./style.css&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &quot;./App.vue&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">import { NButton } from &quot;nuna-design-vue&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;nuna-design-vue/button/style.css&quot;; </span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app.use(NButton); </span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&quot;#app&quot;);</span></span>
<span class="line"></span></code></pre></div>`,8),l=[t];function o(c,r,i,u,A,d){return a(),n("div",null,l)}var q=s(e,[["render",o]]);export{m as __pageData,q as default};
