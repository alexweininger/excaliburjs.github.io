"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[5179],{2045:function(n,a,s){s.r(a),s.d(a,{Head:function(){return h},default:function(){return E}});var e=s(1151),t=s(7294);function p(n){const a=Object.assign({p:"p",div:"div",a:"a",code:"code"},(0,e.ah)(),n.components),{IFrameEmbed:s}=a;return s||function(n,a){throw new Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("IFrameEmbed",!0),t.createElement(t.Fragment,null,t.createElement(a.p,null,'Animations are a series of graphics that take a specific duration in milliseconds. Each of these units is called a "Frame". There are a few playing strategies as well to consider'),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">export</span> <span class="token keyword">enum</span> AnimationStrategy <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Animation ends without displaying anything\n   */</span>\n  End <span class="token operator">=</span> <span class="token string">\'end\'</span><span class="token punctuation">,</span>\n  <span class="token comment">/**\n   * Animation loops to the first frame after the last frame\n   */</span>\n  Loop <span class="token operator">=</span> <span class="token string">\'loop\'</span><span class="token punctuation">,</span>\n  <span class="token comment">/**\n   * Animation plays to the last frame, then backwards to the first frame, then repeats\n   */</span>\n  PingPong <span class="token operator">=</span> <span class="token string">\'pingpong\'</span><span class="token punctuation">,</span>\n\n  <span class="token comment">/**\n   * Animation ends stopping on the last frame\n   */</span>\n  Freeze <span class="token operator">=</span> <span class="token string">\'freeze\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Animation frames can be created by hand in the following example"),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> animation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Animation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  frames<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      graphic<span class="token operator">:</span> newSprite<span class="token punctuation">,</span>\n      duration<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      graphic<span class="token operator">:</span> circle<span class="token punctuation">,</span>\n      duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      graphic<span class="token operator">:</span> rect<span class="token punctuation">,</span>\n      duration<span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      graphic<span class="token operator">:</span> triangle<span class="token punctuation">,</span>\n      duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Animations can be constructed quickly from ",t.createElement(a.a,{href:"#SpriteSheet"},t.createElement(a.code,null,"ex.SpriteSheets"))),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/9621352f5b09cfe9c50b358b1b5e057e/b8471/player-run.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 4.787234042553192%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVElEQVQI1xXKSwqAIBQF0FZTei0/mONQ8UWjoAw/7X8f0Rmf4faTKwnmPRbZd6iSoHNg9txGkwOXnaAbQT+R2Scy1wiqEUQloS7P1hy5qzT/BzVBfwwuEyHGe4pEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Character running sprite sheet"\n        title="Character running sprite sheet"\n        src="/static/9621352f5b09cfe9c50b358b1b5e057e/1d69c/player-run.png"\n        srcset="/static/9621352f5b09cfe9c50b358b1b5e057e/4dcb9/player-run.png 188w,\n/static/9621352f5b09cfe9c50b358b1b5e057e/5ff7e/player-run.png 375w,\n/static/9621352f5b09cfe9c50b358b1b5e057e/1d69c/player-run.png 750w,\n/static/9621352f5b09cfe9c50b358b1b5e057e/78797/player-run.png 1125w,\n/static/9621352f5b09cfe9c50b358b1b5e057e/aa440/player-run.png 1500w,\n/static/9621352f5b09cfe9c50b358b1b5e057e/b8471/player-run.png 2016w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> runImageSrc <span class="token keyword">from</span> <span class="token string">\'./player-run.png\'</span>\n<span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    width<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>\n    height<span class="token operator">:</span> <span class="token number">400</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> runImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">ImageSource</span><span class="token punctuation">(</span>runImageSrc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> runSheet <span class="token operator">=</span> ex<span class="token punctuation">.</span>SpriteSheet<span class="token punctuation">.</span><span class="token function">fromImageSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    image<span class="token operator">:</span> runImage<span class="token punctuation">,</span>\n    grid<span class="token operator">:</span> <span class="token punctuation">{</span>\n        rows<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        columns<span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>\n        spriteWidth<span class="token operator">:</span> <span class="token number">96</span><span class="token punctuation">,</span>\n        spriteHeight<span class="token operator">:</span> <span class="token number">96</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> runAnim <span class="token operator">=</span> ex<span class="token punctuation">.</span>Animation<span class="token punctuation">.</span><span class="token function">fromSpriteSheet</span><span class="token punctuation">(</span>runSheet<span class="token punctuation">,</span> ex<span class="token punctuation">.</span>Util<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span>game<span class="token punctuation">.</span>halfDrawWidth<span class="token punctuation">,</span> game<span class="token punctuation">.</span>halfDrawHeight<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>runAnim<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),"\n",t.createElement(s,{src:"https://excaliburjs.com/excalibur-snippets/animation/"}),"\n",t.createElement(a.p,null,"Animations also emit events per frame, per loop, and per end (if it completes)."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">anim<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'loop\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'loop\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nanim<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'frame\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'frame\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nanim<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'end\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'ended\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}))}var o=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.ah)(),n.components);return a?t.createElement(a,n,t.createElement(p,n)):p(n)};var c=s(4854),l=s(2436),i=s(2030),r=s(7306),u=s(2768),k=s(871),m=s(7924),d=s(9813);const g={Link:c.rU,Note:u.Z,Example:k.Z,IFrameEmbed:m.Z,CodeSandboxEmbed:d.Z},f=n=>{let{toc:a,releases:s}=n;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const n={};for(let s of a)n[s.frontmatter.section]||(n[s.frontmatter.section]=[]),n[s.frontmatter.section].push(s);return Object.keys(n).map((a=>t.createElement(t.Fragment,{key:a},t.createElement("section",null,t.createElement(c.rU,{className:"item active",style:{fontSize:"1.2em"},to:n[a][0].frontmatter.path},a),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},n[a].map((n=>{let{frontmatter:a}=n;return t.createElement(c.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"}," Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),s.map((n=>t.createElement("a",{key:n.tag.name,className:"item",href:"/docs/api/"+n.tag.name+"/"},n.tag.name))))},b=()=>t.createElement("div",{className:"docs-search"},t.createElement(l.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),h=n=>{let{data:a}=n;return t.createElement(t.Fragment,null,t.createElement("title",null,a.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function y(n){let{data:a,children:s}=n;const{page:p,toc:o,github:{data:{repository:{releases:c}}}}=a,{frontmatter:l}=p;return t.createElement(i.Z,null,t.createElement(r.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(b),t.createElement(f,{toc:o.edges.map((n=>n.node)),releases:c.edges.map((n=>n.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,l.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(e.Zo,{components:g},s))))))}function E(n){return t.createElement(y,n,t.createElement(o,n))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-04-2-animation-mdx-31aff7fca4f3b0cb0616.js.map