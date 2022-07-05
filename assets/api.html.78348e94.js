import{_ as s,r,o as l,c as i,e as t,w as c,F as n,d,a as e,b as o}from"./app.fe95beed.js";const p={},h=d('<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><p>pics \u672C\u8EAB\u4F1A\u5BFC\u51FA\u4E3A\u4E00\u4E2A\u670D\u52A1\uFF0C\u5177\u6709\u8FD9\u4E9B\u65B9\u6CD5\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u65B9\u6CD5\u8FDB\u884C\u83B7\u53D6\u56FE\u7247\u6216\u7BA1\u7406\u56FE\u6E90\u7B49\u8D44\u6E90\u3002</p><h2 id="\u83B7\u53D6\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u56FE\u7247" aria-hidden="true">#</a> \u83B7\u53D6\u56FE\u7247</h2><ul><li><code>randomPic(picTags: string[] = [], sourceTags: string[] = []): Promise&lt;{ url: string, description?: string }&gt;</code> \u83B7\u53D6\u968F\u673A\u56FE\u7247\u3002</li><li><code>getSegment(url: string, bot?: Bot): Promise&lt;string&gt;</code> \u4ECE\u56FE\u7247 URL \u83B7\u53D6\u6D88\u606F\u6BB5\u3002 <strong>\u7531\u4E8E OneBot \u7684\u4E00\u4E9B\u5BF9\u63A5\u539F\u56E0\uFF0COneBot \u673A\u5668\u4EBA\u6240\u4F7F\u7528\u7684\u683C\u5F0F\u4E0E\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u540C\uFF0C\u56E0\u6B64\u9700\u8981\u4F20\u5165\u673A\u5668\u4EBA\u5224\u522B\u3002</strong></li></ul><h2 id="\u56FE\u6E90\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6E90\u7BA1\u7406" aria-hidden="true">#</a> \u56FE\u6E90\u7BA1\u7406</h2><ul><li><code>addSource(source: PicSource)</code> \u8FDB\u884C\u56FE\u6E90\u6CE8\u518C\u3002\u4F1A\u81EA\u52A8\u5904\u7406\u63D2\u4EF6\u5378\u8F7D\u76F8\u5173\u903B\u8F91\u3002</li></ul><h2 id="\u4E2D\u95F4\u4EF6\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u7BA1\u7406" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6\u7BA1\u7406</h2><ul><li><code>middleware(mid: PicMiddleware)</code> \u6CE8\u518C\u56FE\u50CF\u5904\u7406\u4E2D\u95F4\u4EF6\u3002</li></ul><h2 id="\u8F85\u52A9\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8F85\u52A9\u65B9\u6CD5" aria-hidden="true">#</a> \u8F85\u52A9\u65B9\u6CD5</h2><ul><li><code>urlToBuffer(url: string, extraConfig: AxiosRequestConfig = {}): Promise&lt;Buffer&gt;</code> \u4ECE\u56FE\u7247 URL \u4E0B\u8F7D\u4E3A Buffer \u6570\u636E\u3002</li><li><code>bufferToUrl(buffer: Buffer): string</code> \u4ECE Buffer \u8F6C\u6362\u4E3A <code>base64://</code> \u5F62\u5F0F\u7684 URL\u3002</li><li><code>download(url: string, extraConfig: AxiosRequestConfig = {})</code> \u4ECE\u56FE\u7247 URL \u8F6C\u6362\u4E3A <code>base64://</code> \u5F62\u5F0F\u7684 URL\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2>',11),u=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"import"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"type"),e("span",{style:{color:"#F8F8F2"}}," {} "),e("span",{style:{color:"#F92672"}},"from"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E6DB74"}},"'koishi-plugin-pics'"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#88846F"}},"// \u4F60\u9700\u8981\u5BFC\u5165 pics \u63D2\u4EF6\u7684\u7C7B\u578B\u5B9A\u4E49")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"await"),e("span",{style:{color:"#F8F8F2"}}," ctx.pics."),e("span",{style:{color:"#A6E22E"}},"randomPic"),e("span",{style:{color:"#F8F8F2"}},"(["),e("span",{style:{color:"#E6DB74"}},"'komeiji koishi'"),e("span",{style:{color:"#F8F8F2"}},"], ["),e("span",{style:{color:"#E6DB74"}},"'lolicon'"),e("span",{style:{color:"#F8F8F2"}},"]) "),e("span",{style:{color:"#88846F"}},"//-> { url: string, description?: string }")])])],-1);function f(F,g){const a=r("panel-view");return l(),i(n,null,[h,t(a,{class:"code",title:"",style:{}},{default:c(()=>[u]),_:1})],64)}var m=s(p,[["render",f],["__file","api.html.vue"]]);export{m as default};
