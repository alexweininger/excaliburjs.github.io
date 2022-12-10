"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[6011],{1620:function(e,a,n){n.r(a),n.d(a,{Head:function(){return k},default:function(){return y}});var t=n(1151),s=n(7294);function c(e){const a=Object.assign({p:"p",h2:"h2",a:"a",div:"div",h3:"h3",ul:"ul",li:"li",code:"code"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.p,null,"Excalibur uses the WebGL under the hood to render it's graphics, however sometimes browsers and systems may have a non standard configuration that can cause issues with WebGL."),"\n",s.createElement(a.h2,{id:"browser-configuration",style:{position:"relative"}},s.createElement(a.a,{href:"#browser-configuration","aria-label":"browser configuration permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Browser configuration"),"\n",s.createElement(a.h3,{id:"chrome",style:{position:"relative"}},s.createElement(a.a,{href:"#chrome","aria-label":"chrome permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Chrome"),"\n",s.createElement(a.p,null,'Sometimes Chrome will detect an issue with hardware such as GPU drivers not being up to date, or running on a non-standard system like Linux and decide to not enable the GPU. When this happens you can override Chrome by visiting chrome://flags/#ignore-gpu-blocklist and ensuring "Override software rendering list" is "enabled".'),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/ea6dcbb57c61419e4a62f4cdfbbbd5cf/73fd0/gpu-block-list.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 17.02127659574468%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAt0lEQVQI10WOvYrCQBhF8yAqJFmTMVEnEx2T8afaZlUQf7bZPoLuYqmgVoI+hb2dz3gk6mpxOHyXy+WzPFFl8eux3RVYb0rs9kWyuUMlkITVN8G/w/orixopKqdpkErjfvhYblnQHyZMv1MmM8NorPkapLRMD520aZkuOu3cnaMaCXWpSDqf/B0uZNszq9OVn+UR23aw8lWpDFGcl3v4Isbz39+8eN6VoIYQ4d0yaj5QmpqMcVyPGwX4ZBpW38dgAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Chrome ignore gpu block list flag"\n        title="Chrome ignore gpu block list flag"\n        src="/static/ea6dcbb57c61419e4a62f4cdfbbbd5cf/1d69c/gpu-block-list.png"\n        srcset="/static/ea6dcbb57c61419e4a62f4cdfbbbd5cf/4dcb9/gpu-block-list.png 188w,\n/static/ea6dcbb57c61419e4a62f4cdfbbbd5cf/5ff7e/gpu-block-list.png 375w,\n/static/ea6dcbb57c61419e4a62f4cdfbbbd5cf/1d69c/gpu-block-list.png 750w,\n/static/ea6dcbb57c61419e4a62f4cdfbbbd5cf/73fd0/gpu-block-list.png 793w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"Otherwise the hardware acceleration setting can be switched off accidentally. Visit chrome://settings/system and ensure this setting is check on."),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/1bc7979d74f8952f6fd1bd8869fa6778/ef3e1/hardware-acceleration.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 27.659574468085108%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA4ElEQVQY042Q3U6EMBBGeRBZWFhKW/YHSmmnLbgm3ur7P85nhm5M1ES9OJlpMjnzTYvFBQih8FTWKA/HXzlUDaq6/cnxhLKsUNUNCj1cYWaHcbJ7ZSazwMzL3s/WwzCPmU4oiF5/oeskDL1CqCuK280gxA0UVsT0vMPvGDc4H7PwsYiFSl/AIXLNvVQD6P4GdTYo/GXEQgneR/D5zidY60G0wi4endDo5fAJi77TSw16ec9C3hrCBk9pT0eUkNY7nAu7gBP8BUvHaYZUZxT8J9xw7FwzLGtP/b9oWgHR5/kPiES17BLHCm0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Chrome hardware acceleration on"\n        title="Chrome hardware acceleration on"\n        src="/static/1bc7979d74f8952f6fd1bd8869fa6778/1d69c/hardware-acceleration.png"\n        srcset="/static/1bc7979d74f8952f6fd1bd8869fa6778/4dcb9/hardware-acceleration.png 188w,\n/static/1bc7979d74f8952f6fd1bd8869fa6778/5ff7e/hardware-acceleration.png 375w,\n/static/1bc7979d74f8952f6fd1bd8869fa6778/1d69c/hardware-acceleration.png 750w,\n/static/1bc7979d74f8952f6fd1bd8869fa6778/ef3e1/hardware-acceleration.png 759w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.h3,{id:"firefox",style:{position:"relative"}},s.createElement(a.a,{href:"#firefox","aria-label":"firefox permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Firefox"),"\n",s.createElement(a.p,null,"Firefox unfortunately performs worse than Chrome generally, but the Excalibur team is working to improve that metric over time."),"\n",s.createElement(a.p,null,"Firefox can also have hardware webgl or hardware accelerated disabled for one reason or another."),"\n",s.createElement(a.p,null,"In Firefox, visit about:config"),"\n",s.createElement(a.ul,null,"\n",s.createElement(a.li,null,"Ensure ",s.createElement(a.code,null,"webgl.disabled")," = false"),"\n",s.createElement(a.li,null,"Ensure ",s.createElement(a.code,null,"webgl.force-enabled")," = true"),"\n",s.createElement(a.li,null,"Ensure ",s.createElement(a.code,null,"layers.acceleration.force-enabled")," = true"),"\n"),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 397px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/7bfab0bbd85033c605fe9249b84c7700/4c04a/about-config.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 38.82978723404255%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABd0lEQVQoz3XQaY6bQBCGYc4QKYk3HJum2ZrNYGPAMCQ2XuVkRpGy3f8gbwSTscaK5sejUtdX6laXliQblFoS+CvSdENZbLHsBT92O35eH9kfvvNQn3DsCNeJse0Q5S0whUKfmEx1eUdbJiXKiQlUShKtWSUlUob8Kr7w+/CVp6c/bJszkZ+yXpYkcUaeVXhOyGjwCX00Z/KPPpqhDeOSYVTwMVj3PvgZwzDnXZDzPsz78yAsbjODMO/rKC6ZJBXjRcVkUTFOa8ZugqbsmGXWsG+vVNWepjmy3V743Bwx5h6mGSCE3zNFcPPSu2Uzl2F9RpslNVaxI2zOeNUBVR/xH064mz16VDCNN0zj8j969Ox1b7Rq0ISzQNgxcyvqGXYn7mufvcF0E6SX3veEQhNzRV21XE6PtLsrh/bK5fiNbFkhZi6y+46herIjfIyZxzprOLVXHBlizp+zbhVad6tpKiwrxLICLBkgpd+/JgzvTV0uzW5/93N/AW6W9MnCmKgzAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Firefox about:config settings webgl.disabled"\n        title="Firefox about:config settings webgl.disabled"\n        src="/static/7bfab0bbd85033c605fe9249b84c7700/4c04a/about-config.png"\n        srcset="/static/7bfab0bbd85033c605fe9249b84c7700/4dcb9/about-config.png 188w,\n/static/7bfab0bbd85033c605fe9249b84c7700/5ff7e/about-config.png 375w,\n/static/7bfab0bbd85033c605fe9249b84c7700/4c04a/about-config.png 397w"\n        sizes="(max-width: 397px) 100vw, 397px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.h2,{id:"poor-performance-fallback",style:{position:"relative"}},s.createElement(a.a,{href:"#poor-performance-fallback","aria-label":"poor performance fallback permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Poor Performance fallback"),"\n",s.createElement(a.p,null,"Excalibur will automatically fallback by default to the 2D canvas graphics context if it detects poor performance. The 2D canvas graphics usually performs better on non hardware accelerated browsers, currently postprocessing effects are unavailable in this fallback."),"\n",s.createElement(a.p,null,"By default if a game is running at 20fps or lower for 100 frames or more after the game has started it will be triggered, the developer can optionally show a player message that is off by default."),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">var</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    configurePerformanceCanvas2DFallback<span class="token operator">:</span> <span class="token punctuation">{</span>\n    allow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// opt-out of the fallback</span>\n    showPlayerMessage<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// opt-in to a player pop-up message</span>\n    threshold<span class="token operator">:</span> <span class="token punctuation">{</span> fps<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> numberOfFrames<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span> <span class="token comment">// configure the threshold to trigger the fallback</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"When the performance fallback is triggered Excalibur will raise the event ",s.createElement(a.code,null,"fallbackgraphicscontext")," that developers can listen to for"),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">game<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'fallbackgraphicscontext\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'fallback triggered\'</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"debugging-performance-problems",style:{position:"relative"}},s.createElement(a.a,{href:"#debugging-performance-problems","aria-label":"debugging performance problems permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Debugging Performance Problems"),"\n",s.createElement(a.p,null,"If you notice lag or unstable physics you may want to look into your game performance. Installing the ",s.createElement(a.a,{href:"/docs/devtool"},"DevTool")," will give you a live FPS read out to help debug your game."),"\n",s.createElement(a.p,null,"Firefox and Chrome have excellent performance profiling tools, if you have a section of your game that is slow activate the performance profiling tool during the slow behavior and inspect the results."),"\n",s.createElement(a.h3,{id:"common-sources-of-performance-problems",style:{position:"relative"}},s.createElement(a.a,{href:"#common-sources-of-performance-problems","aria-label":"common sources of performance problems permalink",className:"anchor before"},s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Common sources of performance Problems"),"\n",s.createElement(a.p,null,"Raster type graphics are expensive to update because their textures must be re-uploaded to the GPU which is a blocking operation."),"\n",s.createElement(a.ul,null,"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,"The raster ",s.createElement(a.code,null,"ex.Rectangle"),' is the most common culprit, changing the width/height requires a new image to uploaded. Commonly this is to create a "health bar". A faster way to draw a rectangle for a healthbar may be to draw directly to the graphics context'),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">    <span class="token keyword">let</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    actor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function-variable function">onPostDraw</span> <span class="token operator">=</span> <span class="token punctuation">(</span>gfx<span class="token operator">:</span> ExcaliburGraphicsContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        gfx<span class="token punctuation">.</span><span class="token function">drawRectangle</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span>Color<span class="token punctuation">.</span>Blue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span></code></pre></div>'}}),"\n"),"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,s.createElement(a.code,null,"ex.Canvas")," can also be expensive if changing every frame, it is recommended only updating them when there is something new to draw. Do this by enabling caching and calling ",s.createElement(a.code,null,"canvas.flagDirty()")," when there is something new."),"\n",s.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">let</span> rectangleWidth <span class="token operator">=</span> <span class="token number">100</span>\n<span class="token keyword">let</span> <span class="token function-variable function">draw</span> <span class="token operator">=</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> CanvasRenderingContext2D<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">\'blue\'</span>\n  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> rectangleWidth<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Canvas</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  cache<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  draw<span class="token operator">:</span> draw<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>sizeChanged<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  canvas<span class="token punctuation">.</span><span class="token function">flagDirty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?s.createElement(a,e,s.createElement(c,e)):c(e)},l=n(4854),r=n(2436),i=n(2030),p=n(7306),u=n(2768),m=n(871),d=n(7924),g=n(9813);const h={Link:l.rU,Note:u.Z,Example:m.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:g.Z},b=e=>{let{toc:a,releases:n}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let n of a)e[n.frontmatter.section]||(e[n.frontmatter.section]=[]),e[n.frontmatter.section].push(n);return Object.keys(e).map((a=>s.createElement(s.Fragment,{key:a},s.createElement("section",null,s.createElement(l.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[a][0].frontmatter.path},a),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[a].map((e=>{let{frontmatter:a}=e;return s.createElement(l.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"}," Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),n.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},f=()=>s.createElement("div",{className:"docs-search"},s.createElement(r.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),k=e=>{let{data:a}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,a.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function v(e){let{data:a,children:n}=e;const{page:c,toc:o,github:{data:{repository:{releases:l}}}}=a,{frontmatter:r}=c;return s.createElement(i.Z,null,s.createElement(p.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(f),s.createElement(b,{toc:o.edges.map((e=>e.node)),releases:l.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,r.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(t.Zo,{components:h},n))))))}function y(e){return s.createElement(v,e,s.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-14-performance-mdx-4ebedb3400ed03903d96.js.map