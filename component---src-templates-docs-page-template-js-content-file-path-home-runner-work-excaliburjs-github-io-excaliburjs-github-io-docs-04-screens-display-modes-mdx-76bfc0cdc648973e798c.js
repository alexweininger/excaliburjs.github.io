"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[681],{4957:function(e,a,n){n.r(a),n.d(a,{Head:function(){return f},default:function(){return v}});var s=n(1151),t=n(7294);function l(e){const a=Object.assign({p:"p",h2:"h2",a:"a",div:"div",h3:"h3",code:"code"},(0,s.ah)(),e.components),{IFrameEmbed:n,Note:l}=a;return n||i("IFrameEmbed",!0),l||i("Note",!0),t.createElement(t.Fragment,null,t.createElement(a.p,null,"Excalibur can render the screen in various different display modes by default."),"\n",t.createElement(a.h2,{id:"managing-display-modes",style:{position:"relative"}},t.createElement(a.a,{href:"#managing-display-modes","aria-label":"managing display modes permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Managing display modes"),"\n",t.createElement(a.p,null,"Excalibur supports multiple display modes for a game. Pass in a ",t.createElement(a.a,{href:"/docs/api/edge/interfaces/EngineOptions.html#displayMode",title:"View 'EngineOptions.displayMode' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"displayMode"),"\noption when creating a game to customize the viewport."),"\n",t.createElement(a.h3,{id:"fixed-display-mode",style:{position:"relative"}},t.createElement(a.a,{href:"#fixed-display-mode","aria-label":"fixed display mode permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Fixed Display Mode"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/enums/DisplayMode.html#Fixed",title:"View 'DisplayMode.Fixed' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"DisplayMode.Fixed")," is the default, use a specified resolution for the game. Like 600x400 pixels for example."),"\n",t.createElement("div",{class:"snippet-resizer snippet-border",alt:"Resize me!"},t.createElement(n,{className:"snippet-resized",src:"https://excaliburjs.com/excalibur-snippets/displaymode/fixed/"})),"\n",t.createElement(a.p,null,"Click and drag right corner to resize!"),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    width<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>\n    height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">    displayMode<span class="token operator">:</span> ex<span class="token punctuation">.</span>DisplayMode<span class="token punctuation">.</span>Fixed</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),"\n",t.createElement(a.h3,{id:"fit-screen-display-mode",style:{position:"relative"}},t.createElement(a.a,{href:"#fit-screen-display-mode","aria-label":"fit screen display mode permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Fit Screen Display Mode"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/enums/DisplayMode.html#FitScreen",title:"View 'DisplayMode.FitScreen' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"DisplayMode.FitScreen")," Fit to screen using as much space as possible while maintaining aspect ratio and resolution."),"\n",t.createElement(a.p,null,"This is not the same as ",t.createElement(a.a,{href:"/docs/api/edge/classes/Screen.html#goFullScreen",title:"View 'Screen.goFullScreen' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Screen.goFullScreen"),", which uses the fullscreen api, but behaves in a similar way maintaining aspect ratio."),"\n",t.createElement(a.p,null,"You may want to center your game and fit to the screen here is an example:"),"\n","\n",t.createElement("div",{class:"snippet-resizer snippet-border",alt:"Resize me!"},t.createElement(n,{className:"snippet-resized",src:"https://excaliburjs.com/excalibur-snippets/displaymode/fitscreen/"})),"\n",t.createElement(a.p,null,"Click and drag right corner to resize!"),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    width<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>\n    height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">    displayMode<span class="token operator">:</span> ex<span class="token punctuation">.</span>DisplayMode<span class="token punctuation">.</span>FitScreen</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),"\n",t.createElement(a.h3,{id:"fill-screen-display-mode",style:{position:"relative"}},t.createElement(a.a,{href:"#fill-screen-display-mode","aria-label":"fill screen display mode permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Fill Screen Display Mode"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/enums/DisplayMode.html#FillScreen",title:"View 'DisplayMode.FillScreen' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"DisplayMode.FillScreen")," Fill the entire screen's css width/height for the game resolution dynamically. This means the resolution of the game will change dynamically as the window is resized. This is not the same as ",t.createElement(a.a,{href:"/docs/api/edge/classes/Screen.html#goFullScreen",title:"View 'Screen.goFullScreen' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Screen.goFullScreen")),"\n",t.createElement("div",{class:"snippet-resizer snippet-border",alt:"Resize me!"},t.createElement(n,{className:"snippet-resized",src:"https://excaliburjs.com/excalibur-snippets/displaymode/fillscreen/"})),"\n",t.createElement(a.p,null,"Click and drag right corner to resize!"),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    canvasElementId<span class="token operator">:</span> <span class="token string">\'game\'</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">    displayMode<span class="token operator">:</span> ex<span class="token punctuation">.</span>DisplayMode<span class="token punctuation">.</span>FillScreen</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),"\n",t.createElement(a.h3,{id:"fit-container-display-mode",style:{position:"relative"}},t.createElement(a.a,{href:"#fit-container-display-mode","aria-label":"fit container display mode permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Fit Container Display Mode"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/enums/DisplayMode.html#FitContainer",title:"View 'DisplayMode.FitContainer' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"DisplayMode.FitContainer")," Fit to parent element width/height using as much space as possible while maintaining aspect ratio and resolution."),"\n",t.createElement("div",{class:"snippet-resizer snippet-border",alt:"Resize me!"},t.createElement(n,{className:"snippet-resized",src:"https://excaliburjs.com/excalibur-snippets/displaymode/fitcontainer/"})),"\n",t.createElement(a.p,null,"Click and drag right corner to resize!"),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html">        .container {\n            /* Flexbox used to center game */\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            /* Container size with border */\n            border: red 4px dashed;\n            width: 50%;\n            height: 300px;\n        }</code></pre></div>'}})),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container snippet-resizer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>game<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre></div>'}})),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    canvasElementId<span class="token operator">:</span> <span class="token string">\'game\'</span><span class="token punctuation">,</span>\n    width<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>\n    height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">    displayMode<span class="token operator">:</span> ex<span class="token punctuation">.</span>DisplayMode<span class="token punctuation">.</span>FitContainer</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),"\n",t.createElement(a.h3,{id:"fill-container-display-mode",style:{position:"relative"}},t.createElement(a.a,{href:"#fill-container-display-mode","aria-label":"fill container display mode permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Fill Container Display Mode"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/enums/DisplayMode.html#FillContainer",title:"View 'DisplayMode.FillContainer' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"DisplayMode.FillContainer")," will fill the entire screen's css width/height for the game resolution dynamically. This means the resolution of the game will change dynamically as the window is resized. This is not the same as ",t.createElement(a.a,{href:"/docs/api/edge/classes/Screen.html#goFullScreen",title:"View 'Screen.goFullScreen' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Screen.goFullScreen")),"\n",t.createElement("div",{class:"snippet-resizer snippet-border",alt:"Resize me!"},t.createElement(n,{className:"snippet-resized",src:"https://excaliburjs.com/excalibur-snippets/displaymode/fillcontainer/"})),"\n",t.createElement(a.p,null,"Click and drag right corner to resize!"),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html">        .container {\n            border: red 4px dashed;\n            width: 50%;\n            height: 300px;\n        }</code></pre></div>'}})),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container snippet-resizer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>game<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre></div>'}})),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    canvasElementId<span class="token operator">:</span> <span class="token string">\'game\'</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">    displayMode<span class="token operator">:</span> ex<span class="token punctuation">.</span>DisplayMode<span class="token punctuation">.</span>FillContainer</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),"\n",t.createElement(a.h3,{id:"fit-screen-and-fill-display-mode",style:{position:"relative"}},t.createElement(a.a,{href:"#fit-screen-and-fill-display-mode","aria-label":"fit screen and fill display mode permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Fit Screen And Fill Display Mode"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/enums/DisplayMode.html#FitScreenAndFill",title:"View 'DisplayMode.FitScreenAndFill' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"DisplayMode.FitScreenAndFill")," is similar to ",t.createElement(a.a,{href:"/docs/api/edge/enums/DisplayMode.html#FitScreen",title:"View 'DisplayMode.FitScreen' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"DisplayMode.FitScreen"),' and will fit the game in the screen while preserving the original aspect ratio, but allow the excess gaps to be drawn to drawn to. This ensures there is no "letterboxing" and the entire screen is covered by canvas. You can use the ',t.createElement(a.a,{href:"/docs/api/edge/classes/Screen.html#contentArea",title:"View 'Screen.contentArea' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Screen.contentArea")," to return a screen space bounding box of area of the screen guaranteed to be visible to the user."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/a340ea7206bb30bb3823826ab89e6060/00d43/content-area.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60.1063829787234%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABg0lEQVQoz2OQyF4pkr1WLWOWSVKzVnybTnybTkKbdkKHdlyrTnyrblKXVmyTdnyrdnyrTlyTZmKnRUqrYuY80ew14tmrGMSzV4pmr1HNnCWfOpMveip/eA9/WA9/RL9g7HS+kE6BmKn8oZ18oV0CEf38Qa18CfPUsuYoZM5H0pyzViVjllLmXLHsNRK5ayRyVoPRGjBaBeXmrpHMWS2as1YzfapC5gIUzaoZM5Uz5oCFVoLRKjCCM0BskAdz1qpnTEfXDLI5Yy5ECBfCqRnJZgKaNdKnYbV5HpmaibcZn58lsleBQxiBwNqgSCQbm2a1jJkqGbPFctaIZq4QSl8umL5cJGOFcMYKwfTlopkghlD6CvGsFWI5a9CiapVozhqVjNlymQvECjZZtuw2a9pt07pHt2a7Tdte86bdJg27nDr3W7Xs1azcypu1QS1zJkIz1CfpM0xT2nUzpriVzXQtnelePsumYLpj8XT38llOJTM9K+Z4Vc62zp+qmTrJMqVFEZbCAKneGJOyo0cjAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Content area"\n        title="Content area"\n        src="/static/a340ea7206bb30bb3823826ab89e6060/1d69c/content-area.png"\n        srcset="/static/a340ea7206bb30bb3823826ab89e6060/4dcb9/content-area.png 188w,\n/static/a340ea7206bb30bb3823826ab89e6060/5ff7e/content-area.png 375w,\n/static/a340ea7206bb30bb3823826ab89e6060/1d69c/content-area.png 750w,\n/static/a340ea7206bb30bb3823826ab89e6060/00d43/content-area.png 1000w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement("div",{class:"snippet-resizer snippet-border",alt:"Resize me!"},t.createElement(n,{className:"snippet-resized",src:"https://excaliburjs.com/excalibur-snippets/displaymode/fitscreenandfill/"})),"\n",t.createElement(a.p,null,"Click and drag right corner to resize!"),"\n",t.createElement(a.h3,{id:"fit-container-and-fill-display-mode",style:{position:"relative"}},t.createElement(a.a,{href:"#fit-container-and-fill-display-mode","aria-label":"fit container and fill display mode permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Fit Container And Fill Display Mode"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/enums/DisplayMode.html#FitContainerAndFill",title:"View 'DisplayMode.FitContainerAndFill' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"DisplayMode.FitContainerAndFill")," is similar to ",t.createElement(a.a,{href:"",title:"Missing link to 'DisplayMode.FitCOntainer' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing",target:"_blank"},"DisplayMode.FitCOntainer")," and will fit the game to the the current container preserving the original aspect ratio, but allow the excess gaps in the container to be drawn to. You can use the ",t.createElement(a.a,{href:"/docs/api/edge/classes/Screen.html#contentArea",title:"View 'Screen.contentArea' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Screen.contentArea")," to return a screen space bounding box of area of the screen guaranteed to be visible to the user."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/a340ea7206bb30bb3823826ab89e6060/00d43/content-area.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60.1063829787234%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABg0lEQVQoz2OQyF4pkr1WLWOWSVKzVnybTnybTkKbdkKHdlyrTnyrblKXVmyTdnyrdnyrTlyTZmKnRUqrYuY80ew14tmrGMSzV4pmr1HNnCWfOpMveip/eA9/WA9/RL9g7HS+kE6BmKn8oZ18oV0CEf38Qa18CfPUsuYoZM5H0pyzViVjllLmXLHsNRK5ayRyVoPRGjBaBeXmrpHMWS2as1YzfapC5gIUzaoZM5Uz5oCFVoLRKjCCM0BskAdz1qpnTEfXDLI5Yy5ECBfCqRnJZgKaNdKnYbV5HpmaibcZn58lsleBQxiBwNqgSCQbm2a1jJkqGbPFctaIZq4QSl8umL5cJGOFcMYKwfTlopkghlD6CvGsFWI5a9CiapVozhqVjNlymQvECjZZtuw2a9pt07pHt2a7Tdte86bdJg27nDr3W7Xs1azcypu1QS1zJkIz1CfpM0xT2nUzpriVzXQtnelePsumYLpj8XT38llOJTM9K+Z4Vc62zp+qmTrJMqVFEZbCAKneGJOyo0cjAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Content area"\n        title="Content area"\n        src="/static/a340ea7206bb30bb3823826ab89e6060/1d69c/content-area.png"\n        srcset="/static/a340ea7206bb30bb3823826ab89e6060/4dcb9/content-area.png 188w,\n/static/a340ea7206bb30bb3823826ab89e6060/5ff7e/content-area.png 375w,\n/static/a340ea7206bb30bb3823826ab89e6060/1d69c/content-area.png 750w,\n/static/a340ea7206bb30bb3823826ab89e6060/00d43/content-area.png 1000w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement("div",{class:"snippet-resizer snippet-border",alt:"Resize me!"},t.createElement(n,{className:"snippet-resized",src:"https://excaliburjs.com/excalibur-snippets/displaymode/fitcontainerandfill/"})),"\n",t.createElement(a.p,null,"Click and drag right corner to resize!"),"\n",t.createElement(a.h2,{id:"fullscreen-api",style:{position:"relative"}},t.createElement(a.a,{href:"#fullscreen-api","aria-label":"fullscreen api permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Fullscreen API"),"\n",t.createElement(a.p,null,"The screen abstraction now supports the ",t.createElement(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"},"browser fullscreen api"),". This will cause the game to be displayed fullscreen until the user exits (usually with the escape key or by gesturing to the exit button at the top of the browser window)."),"\n",t.createElement("div",{class:"snippet-resizer snippet-border",alt:"Resize me!"},t.createElement(n,{className:"snippet-resized",src:"https://excaliburjs.com/excalibur-snippets/fullscreen/"})),"\n",t.createElement(a.p,null,"Click and drag right corner to resize!"),"\n",t.createElement(l,null,t.createElement(a.p,null,"This requires an explicit user gesture due to browser security, so wiring it into a native HTML button click is the easiest way to do this.")),"\n",t.createElement(a.p,null,t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'go-fullscreen\'</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    game<span class="token punctuation">.</span>screen<span class="token punctuation">.</span><span class="token function">goFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">await</span> game<span class="token punctuation">.</span>screen<span class="token punctuation">.</span><span class="token function">goFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">await</span> game<span class="token punctuation">.</span>screen<span class="token punctuation">.</span><span class="token function">exitFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"By default ",t.createElement(a.code,null,"goFullScreen()")," will use the canvas element as the root of full screen mode. If your game uses ",t.createElement(a.a,{href:"/docs/ui#html-based-ui"},"HTML based UI"),", the HTML UI will not be included because it is not a child of the canvas element."),"\n",t.createElement(a.p,null,"To include both the HTML based game UI as well as the game canvas, pass an id of an element that is the parent of both the canvas and UI. For example ",t.createElement(a.code,null,"goFullScreen('root')")))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?t.createElement(a,e,t.createElement(l,e)):l(e)};function i(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var o=n(4854),p=n(2436),r=n(2030),d=n(7306),u=n(2768),m=n(871),g=n(7924),h=n(9813);const k={Link:o.rU,Note:u.Z,Example:m.Z,IFrameEmbed:g.Z,CodeSandboxEmbed:h.Z},b=e=>{let{toc:a,releases:n}=e;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let n of a)e[n.frontmatter.section]||(e[n.frontmatter.section]=[]),e[n.frontmatter.section].push(n);return Object.keys(e).map((a=>t.createElement(t.Fragment,{key:a},t.createElement("section",null,t.createElement(o.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[a][0].frontmatter.path},a),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},e[a].map((e=>{let{frontmatter:a}=e;return t.createElement(o.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"}," Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),n.map((e=>t.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},y=()=>t.createElement("div",{className:"docs-search"},t.createElement(p.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),f=e=>{let{data:a}=e;return t.createElement(t.Fragment,null,t.createElement("title",null,a.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function E(e){let{data:a,children:n}=e;const{page:l,toc:c,github:{data:{repository:{releases:i}}}}=a,{frontmatter:o}=l;return t.createElement(r.Z,null,t.createElement(d.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(y),t.createElement(b,{toc:c.edges.map((e=>e.node)),releases:i.edges.map((e=>e.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,o.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(s.Zo,{components:k},n))))))}function v(e){return t.createElement(E,e,t.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-04-screens-display-modes-mdx-76bfc0cdc648973e798c.js.map