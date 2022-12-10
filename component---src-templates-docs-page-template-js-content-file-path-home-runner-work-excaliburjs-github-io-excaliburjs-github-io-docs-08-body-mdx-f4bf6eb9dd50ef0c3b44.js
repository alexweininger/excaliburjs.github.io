"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[1499],{5286:function(e,a,t){t.r(a),t.d(a,{Head:function(){return k},default:function(){return v}});var n=t(1151),s=t(7294);function l(e){const a=Object.assign({p:"p",a:"a",h2:"h2",div:"div",ul:"ul",li:"li",code:"code"},(0,n.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.p,null,s.createElement(a.a,{href:"/docs/api/edge/classes/BodyComponent.html",title:"View 'BodyComponent' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Bodies")," are an abstraction over the collision response, are manipulated by the physics simulation during the collision resolution phase. This is the component that receives the impulse to bounce off another object."),"\n",s.createElement(a.h2,{id:"physical-properties",style:{position:"relative"}},s.createElement(a.a,{href:"#physical-properties","aria-label":"physical properties permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Physical properties"),"\n",s.createElement(a.p,null,"The physics body modules"),"\n",s.createElement(a.ul,null,"\n",s.createElement(a.li,null,s.createElement(a.a,{href:"/docs/api/edge/classes/BodyComponent.html#mass",title:"View 'BodyComponent.mass' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Mass")),"\n",s.createElement(a.li,null,s.createElement(a.a,{href:"/docs/api/edge/classes/BodyComponent.html#inertia",title:"View 'BodyComponent.inertia' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Inertia")),"\n",s.createElement(a.li,null,s.createElement(a.a,{href:"/docs/api/edge/classes/BodyComponent.html#bounciness",title:"View 'BodyComponent.bounciness' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Bounciness")),"\n",s.createElement(a.li,null,s.createElement(a.a,{href:"/docs/api/edge/classes/BodyComponent.html#friction",title:"View 'BodyComponent.friction' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Friction")),"\n"),"\n",s.createElement(a.h2,{id:"degrees-of-freedom",style:{position:"relative"}},s.createElement(a.a,{href:"#degrees-of-freedom","aria-label":"degrees of freedom permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Degrees of Freedom"),"\n",s.createElement(a.p,null,"In the ",s.createElement(a.a,{href:"/docs/physics#realistic"},"realistic simulation"),", bodies in 2D have 3 degrees of freedom, X axis, Y axis, and rotation, which can be limited using the following"),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nactor<span class="token punctuation">.</span>body<span class="token punctuation">.</span>limitDegreeOfFreedom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span>DegreeOfFreedom<span class="token punctuation">.</span>Rotation<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"gravity",style:{position:"relative"}},s.createElement(a.a,{href:"#gravity","aria-label":"gravity permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Gravity"),"\n",s.createElement(a.p,null,"Bodies can be subject to the global acceleration (commonly used for gravity), the body must also be an ",s.createElement(a.a,{href:"/docs/api/edge/enums/CollisionType.html#Active",title:"View 'CollisionType.Active' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"CollisionType.Active")),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">ex<span class="token punctuation">.</span>Physics<span class="token punctuation">.</span>gravity <span class="token operator">=</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// accelerate 800 pixels down per second per second</span>\n\n<span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nactor<span class="token punctuation">.</span>body<span class="token punctuation">.</span>collisionType <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionType<span class="token punctuation">.</span>Active<span class="token punctuation">;</span>\nactor<span class="token punctuation">.</span>body<span class="token punctuation">.</span>useGravity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"sleep",style:{position:"relative"}},s.createElement(a.a,{href:"#sleep","aria-label":"sleep permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Sleep"),"\n",s.createElement(a.p,null,"In the ",s.createElement(a.a,{href:"/docs/physics#realistic"},"realistic simulation"),", bodies can fall asleep, which is a common performance enhancement to avoid recalculating collisions for objects that aren't moving much. To adjust the threshold where objects fall asleep use the ",s.createElement(a.code,null,"ex.Physics.sleepEpsilon"),"."),"\n",s.createElement(a.p,null,"This can be configured globally setting the ",s.createElement(a.code,null,"ex.Physics.bodiesCanSleepByDefault"),", note this should be done before engine construction."),"\n",s.createElement(a.p,null,"You can also wake or put a body to sleep with the ",s.createElement(a.code,null,"setSleeping(true)")," or ",s.createElement(a.code,null,"setSleeping(false)"),"."))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?s.createElement(a,e,s.createElement(l,e)):l(e)},o=t(4854),i=t(2436),r=t(2030),p=t(7306),m=t(2768),u=t(871),d=t(7924),h=t(9813);const g={Link:o.rU,Note:m.Z,Example:u.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:h.Z},f=e=>{let{toc:a,releases:t}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let t of a)e[t.frontmatter.section]||(e[t.frontmatter.section]=[]),e[t.frontmatter.section].push(t);return Object.keys(e).map((a=>s.createElement(s.Fragment,{key:a},s.createElement("section",null,s.createElement(o.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[a][0].frontmatter.path},a),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[a].map((e=>{let{frontmatter:a}=e;return s.createElement(o.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"}," Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),t.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},E=()=>s.createElement("div",{className:"docs-search"},s.createElement(i.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),k=e=>{let{data:a}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,a.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function b(e){let{data:a,children:t}=e;const{page:l,toc:c,github:{data:{repository:{releases:o}}}}=a,{frontmatter:i}=l;return s.createElement(r.Z,null,s.createElement(p.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(E),s.createElement(f,{toc:c.edges.map((e=>e.node)),releases:o.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,i.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(n.Zo,{components:g},t))))))}function v(e){return s.createElement(b,e,s.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-08-body-mdx-f4bf6eb9dd50ef0c3b44.js.map