"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[1756],{1587:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return v}});var n=a(1151),s=a(7294);function c(e){const t=Object.assign({p:"p",a:"a",code:"code",div:"div"},(0,n.ah)(),e.components),{Note:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Note",!0),s.createElement(s.Fragment,null,s.createElement(t.p,null,s.createElement(t.a,{href:"",title:"Missing link to 'ActionsContext.meet' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing tsdoc-link--aliased",target:"_blank"},"Meet")," can be useful for building tracking projectiles that always reach their target."),"\n",s.createElement(t.p,null,"This method will cause the entity to move towards another until they are within 1 pixel of each other at a specified speed."),"\n",s.createElement(a,{variant:"warning"},s.createElement(t.p,null,"This action could possibly never complete! Any actions chained off of it will not fire until the target is met. You will need to call ",s.createElement(t.code,null,".clearActions()")," to schedule new actions.")),"\n",s.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> missile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Track towards the target at 100 pixels/second</span>\nmissile<span class="token punctuation">.</span>actions<span class="token punctuation">.</span><span class="token function">meet</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>\n</code></pre></div>'}}))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?s.createElement(t,e,s.createElement(c,e)):c(e)};var o=a(4854),r=a(2436),i=a(2030),p=a(7306),m=a(2768),u=a(871),d=a(7924),k=a(9813);const f={Link:o.rU,Note:m.Z,Example:u.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:k.Z},E=e=>{let{toc:t,releases:a}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let a of t)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((t=>s.createElement(s.Fragment,{key:t},s.createElement("section",null,s.createElement(o.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[t][0].frontmatter.path},t),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[t].map((e=>{let{frontmatter:t}=e;return s.createElement(o.rU,{key:t.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:t.path},t.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"}," Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),a.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},h=()=>s.createElement("div",{className:"docs-search"},s.createElement(r.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),g=e=>{let{data:t}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,t.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function b(e){let{data:t,children:a}=e;const{page:c,toc:l,github:{data:{repository:{releases:o}}}}=t,{frontmatter:r}=c;return s.createElement(i.Z,null,s.createElement(p.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(h),s.createElement(E,{toc:l.edges.map((e=>e.node)),releases:o.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,r.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(n.Zo,{components:f},a))))))}function v(e){return s.createElement(b,e,s.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-06-5-actions-meet-mdx-b684b18c1c6d35e4d4f5.js.map