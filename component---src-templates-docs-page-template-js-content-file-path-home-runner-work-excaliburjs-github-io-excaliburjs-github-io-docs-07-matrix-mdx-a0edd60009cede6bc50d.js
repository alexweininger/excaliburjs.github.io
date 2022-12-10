"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[8424],{2275:function(e,a,n){n.r(a),n.d(a,{Head:function(){return g},default:function(){return b}});var t=n(1151),s=n(7294);function c(e){const a=Object.assign({p:"p",a:"a",h2:"h2",div:"div",code:"code"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.p,null,"The ",s.createElement(a.a,{href:"/docs/api/edge/classes/Matrix.html",title:"View 'Matrix' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Matrix")," type encapsulates a 4x4 matrix that can be used in WebGL or for doing affine transformations on ",s.createElement(a.a,{href:"/docs/api/edge/classes/Vector.html",title:"View 'Vector' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Vectors")," and other ",s.createElement(a.a,{href:"/docs/api/edge/classes/Matrix.html",title:"View 'Matrix' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Matrices"),"."),"\n",s.createElement(a.p,null,"The matrix data is stored in column major order, which is the convention for WebGL matrices."),"\n",s.createElement(a.p,null,"|         |         |          |          |\n| ------- | ------- | -------- | -------- |\n| data[0] | data[4] | data[8]  | data[12] |\n| data[1] | data[5] | data[9]  | data[13] |\n| data[2] | data[6] | data[10] | data[14] |\n| data[3] | data[7] | data[11] | data[15] |"),"\n",s.createElement(a.h2,{id:"transforming-vectors",style:{position:"relative"}},s.createElement(a.a,{href:"#transforming-vectors","aria-label":"transforming vectors permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Transforming Vectors"),"\n",s.createElement(a.p,null,"Matrices are an efficient way to transform multiple vectors by the same transformation. Especially if the matrix can be cached."),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> points <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> mat <span class="token operator">=</span> Matrix<span class="token punctuation">.</span><span class="token function">identity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// transform the points</span>\n<span class="token keyword">const</span> transformedPoints <span class="token operator">=</span> points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>p <span class="token operator">=></span> mat<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> inverse <span class="token operator">=</span> mat<span class="token punctuation">.</span><span class="token function">getAffineInverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// undo the transform with the inverse</span>\n<span class="token keyword">const</span> originalPoints <span class="token operator">=</span> points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>p <span class="token operator">=></span> inverse<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"multiplying-matrices",style:{position:"relative"}},s.createElement(a.a,{href:"#multiplying-matrices","aria-label":"multiplying matrices permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Multiplying Matrices"),"\n",s.createElement(a.p,null,"Order matters when multiplying matrices ",s.createElement(a.code,null,"A x B != B x A")," . When multiplying matrices the order read in the code"))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?s.createElement(a,e,s.createElement(c,e)):c(e)},l=n(4854),r=n(2436),p=n(2030),i=n(7306),m=n(2768),u=n(871),d=n(7924),k=n(9813);const h={Link:l.rU,Note:m.Z,Example:u.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:k.Z},f=e=>{let{toc:a,releases:n}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let n of a)e[n.frontmatter.section]||(e[n.frontmatter.section]=[]),e[n.frontmatter.section].push(n);return Object.keys(e).map((a=>s.createElement(s.Fragment,{key:a},s.createElement("section",null,s.createElement(l.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[a][0].frontmatter.path},a),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[a].map((e=>{let{frontmatter:a}=e;return s.createElement(l.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"}," Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),n.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},E=()=>s.createElement("div",{className:"docs-search"},s.createElement(r.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),g=e=>{let{data:a}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,a.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function v(e){let{data:a,children:n}=e;const{page:c,toc:o,github:{data:{repository:{releases:l}}}}=a,{frontmatter:r}=c;return s.createElement(p.Z,null,s.createElement(i.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(E),s.createElement(f,{toc:o.edges.map((e=>e.node)),releases:l.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,r.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(t.Zo,{components:h},n))))))}function b(e){return s.createElement(v,e,s.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-07-matrix-mdx-a0edd60009cede6bc50d.js.map