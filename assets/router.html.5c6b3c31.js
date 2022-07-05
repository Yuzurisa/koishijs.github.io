import{_ as c,r as n,o as a,c as d,a as e,e as o,w as i,F as l,b as t,d as h}from"./app.fe95beed.js";const _={},u=e("h1",{id:"\u7F51\u7EDC\u670D\u52A1-router",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7F51\u7EDC\u670D\u52A1-router","aria-hidden":"true"},"#"),t(" \u7F51\u7EDC\u670D\u52A1 (Router)")],-1),p={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"TIP",-1),g=t("Koishi \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5E76\u4E0D\u4F1A\u76D1\u542C\u4EFB\u4F55\u7AEF\u53E3\uFF0C\u5982\u8981\u542F\u7528\u7F51\u7EDC\u670D\u52A1\u8BF7\u8BB0\u5F97\u914D\u7F6E "),b=e("code",null,"options.port",-1),x=t("\u3002"),f=e("code",null,"ctx.router",-1),k=t(" \u662F Koishi \u7684\u5185\u7F6E\u670D\u52A1\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u57FA\u4E8E "),w={href:"https://github.com/koajs/router",target:"_blank",rel:"noopener noreferrer"},E=t("Koa Router"),R=t(" \u7684\u7B80\u5355\u8DEF\u7531\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u7BA1\u7406 Koishi \u5E94\u7528\u6536\u5230\u7684\u7F51\u7EDC\u8BF7\u6C42\u3002\u9664\u4E86 Koa Router \u6240\u652F\u6301\u7684\u65B9\u6CD5\u5916\uFF0CRouter API \u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u989D\u5916\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u652F\u6301\u63A5\u53D7 WebSocket \u8FDE\u63A5\u7B49\u3002"),K=h('<h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="ctx-router-method-path-middleware" tabindex="-1"><a class="header-anchor" href="#ctx-router-method-path-middleware" aria-hidden="true">#</a> ctx.router[method](path, middleware)</h3><ul><li><strong>method:</strong> \u53EF\u4EE5\u662F <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>, <code>PATCH</code> \u6216 <code>ALL</code></li><li><strong>path:</strong> <code>string | RegExp | (string | RegExp)[]</code> \u8DEF\u5F84</li><li><strong>middleware:</strong> <code>Function</code> Koa \u4E2D\u95F4\u4EF6</li></ul>',3),L=t("\u5904\u7406\u7279\u5B9A\u8DEF\u5F84\u4E0A\u7684\u7F51\u7EDC\u8BF7\u6C42\u3002\u5177\u4F53\u8BF7\u53C2\u89C1 "),S={href:"https://github.com/koajs/router/blob/master/API.md",target:"_blank",rel:"noopener noreferrer"},T=t("\u8FD9\u91CC"),I=t("\u3002"),P=e("h3",{id:"ctx-router-ws-path-handler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-router-ws-path-handler","aria-hidden":"true"},"#"),t(" ctx.router.ws(path, handler)")],-1),W=e("li",null,[e("strong",null,"path:"),t(),e("code",null,"string | RegExp | (string | RegExp)[]"),t(" \u8DEF\u5F84")],-1),v=e("strong",null,"handler:",-1),A=t(),N=e("code",null,"WebSocketHandler",-1),V=t(" \u5904\u7406\u51FD\u6570\uFF0C\u63A5\u53D7\u4E0B\u5217\u53C2\u6570 "),j=e("strong",null,"socket:",-1),B=t(),C={href:"https://github.com/websockets/ws/blob/master/doc/ws.md#class-websocket",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"WebSocket",-1),H=t(" WebSocket \u8FDE\u63A5"),q=e("strong",null,"request:",-1),D=t(),G={href:"https://nodejs.org/api/http.html#class-httpincomingmessage",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"IncomingMessage",-1),O=t(" \u7F51\u7EDC\u8BF7\u6C42"),U=e("p",null,"\u5728\u7ED9\u5B9A\u7684\u8DEF\u5F84\u4E0A\u652F\u6301 WebSocket \u8FDE\u63A5\u3002",-1),y=e("h3",{id:"\u526F\u4F5C\u7528\u5904\u7406",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u526F\u4F5C\u7528\u5904\u7406","aria-hidden":"true"},"#"),t(" \u526F\u4F5C\u7528\u5904\u7406")],-1),z=e("p",null,"\u6211\u4EEC\u5728\u6269\u5C55\u4E86 Koa Router \u7684\u540C\u65F6\uFF0C\u5BF9\u4E8E\u5176\u5E38\u7528\u65B9\u6CD5\u4E5F\u652F\u6301\u4E86\u81EA\u52A8\u7684\u526F\u4F5C\u7528\u5904\u7406\u3002\u5F53\u4E00\u4E2A\u63D2\u4EF6\u88AB\u5378\u8F7D\u65F6\uFF0C\u5176\u4E0A\u6CE8\u518C\u7684\u8DEF\u7531\u4E5F\u5C06\u540C\u65F6\u88AB\u5220\u9664\u3002\u4E0D\u8FC7\u5728\u4F7F\u7528\u65F6\u4E5F\u4F1A\u6709\u4E00\u4E9B\u9650\u5236\u3002\u90E8\u5206\u65B9\u6CD5\u4F1A\u5F71\u54CD\u5176\u4ED6\u63D2\u4EF6\u4E0A\u4E0B\u6587\u6216\u4E0D\u652F\u6301\u526F\u4F5C\u7528\u5904\u7406\uFF0C\u56E0\u6B64\u8BF7\u907F\u514D\u4F7F\u7528\uFF1A",-1),J=e("ul",null,[e("li",null,"router.param()"),e("li",null,"router.prefix()")],-1);function Q(X,Y){const r=n("RouterLink"),s=n("ExternalLinkIcon");return a(),d(l,null,[u,e("div",p,[m,e("p",null,[g,o(r,{to:"/api/core/app.html#options-port"},{default:i(()=>[b]),_:1}),x])]),e("p",null,[f,k,e("a",w,[E,o(s)]),R]),K,e("p",null,[L,e("a",S,[T,o(s)]),I]),P,e("ul",null,[W,e("li",null,[v,A,N,V,e("ul",null,[e("li",null,[j,B,e("a",C,[F,o(s)]),H]),e("li",null,[q,D,e("a",G,[M,o(s)]),O])])])]),U,y,z,J],64)}var $=c(_,[["render",Q],["__file","router.html.vue"]]);export{$ as default};
