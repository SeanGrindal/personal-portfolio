(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7,9,14],{202:function(t,e,d){"use strict";d(17),d(13),d(14),d(23),d(24);var f=d(5),n=d(18),v=d(6);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(object);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,d)}return e}e.a={data:function(){return{ioOptions:{rootMargin:"-20%",threshold:0},io:null,intersected:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(v.c)(["slideRevealed"])),methods:{initIO:function(){this.io||(this.io=new IntersectionObserver(this.IOCb.bind(this),this.ioOptions),this.io.observe(this.$el))},IOCb:function(t){var e=this;t.forEach((function(t){e.intersected?e.hasOwnProperty("hide")&&t.rootBounds.y<t.boundingClientRect.y&&!t.isIntersecting&&(e.intersected=!1,e.hide()):e.hasOwnProperty("reveal")&&t.isIntersecting&&(e.intersected=!0,e.reveal())}))},unobserveIO:function(){this.io&&(this.io.unobserve(this.$el),this.io=null)}},mounted:function(){var t=this;this.slideRevealed?this.initIO():n.a.on("INIT_ANIMATIONS",(function(){return t.initIO()}))},beforeDestroy:function(){this.unobserveIO()}}},203:function(t,e,d){"use strict";d.r(e);var f=d(202),n=d(93).default,v={mixins:[f.a],props:{lines:{type:Array,required:!0}},methods:{reveal:function(){this.lines.length>1?n({targets:this.$refs.lineText,duration:1200,easing:"easeOutQuint",translateY:["100%","0%"],delay:n.stagger(200,{easing:"linear"})}):n({targets:this.$refs.lineText,duration:1200,easing:"easeOutQuint",translateY:["100%","0%"]}),this.unobserveIO()}}},o=(d(209),d(8)),component=Object(o.a)(v,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"Line-Reveal io-animate-in"},t._l(t.lines,(function(text,i){return d("div",{key:i,class:["line","line-"+i]},[d("span",{ref:"lineText",refInFor:!0},[t._v(t._s(text))])])})),0)}),[],!1,null,"9f1e53f8",null);e.default=component.exports},204:function(t,e,d){var content=d(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(29).default)("25e99ab7",content,!0,{sourceMap:!1})},209:function(t,e,d){"use strict";d(204)},210:function(t,e,d){var f=d(28)(!1);f.push([t.i,'a[data-v-9f1e53f8],abbr[data-v-9f1e53f8],acronym[data-v-9f1e53f8],address[data-v-9f1e53f8],applet[data-v-9f1e53f8],article[data-v-9f1e53f8],aside[data-v-9f1e53f8],audio[data-v-9f1e53f8],b[data-v-9f1e53f8],big[data-v-9f1e53f8],blockquote[data-v-9f1e53f8],body[data-v-9f1e53f8],canvas[data-v-9f1e53f8],caption[data-v-9f1e53f8],center[data-v-9f1e53f8],cite[data-v-9f1e53f8],code[data-v-9f1e53f8],dd[data-v-9f1e53f8],del[data-v-9f1e53f8],details[data-v-9f1e53f8],dfn[data-v-9f1e53f8],div[data-v-9f1e53f8],dl[data-v-9f1e53f8],dt[data-v-9f1e53f8],em[data-v-9f1e53f8],embed[data-v-9f1e53f8],fieldset[data-v-9f1e53f8],figcaption[data-v-9f1e53f8],figure[data-v-9f1e53f8],footer[data-v-9f1e53f8],form[data-v-9f1e53f8],h1[data-v-9f1e53f8],h2[data-v-9f1e53f8],h3[data-v-9f1e53f8],h4[data-v-9f1e53f8],h5[data-v-9f1e53f8],h6[data-v-9f1e53f8],header[data-v-9f1e53f8],hgroup[data-v-9f1e53f8],html[data-v-9f1e53f8],i[data-v-9f1e53f8],iframe[data-v-9f1e53f8],img[data-v-9f1e53f8],ins[data-v-9f1e53f8],kbd[data-v-9f1e53f8],label[data-v-9f1e53f8],legend[data-v-9f1e53f8],li[data-v-9f1e53f8],mark[data-v-9f1e53f8],menu[data-v-9f1e53f8],nav[data-v-9f1e53f8],object[data-v-9f1e53f8],ol[data-v-9f1e53f8],output[data-v-9f1e53f8],p[data-v-9f1e53f8],pre[data-v-9f1e53f8],q[data-v-9f1e53f8],ruby[data-v-9f1e53f8],s[data-v-9f1e53f8],samp[data-v-9f1e53f8],section[data-v-9f1e53f8],small[data-v-9f1e53f8],span[data-v-9f1e53f8],strike[data-v-9f1e53f8],strong[data-v-9f1e53f8],sub[data-v-9f1e53f8],summary[data-v-9f1e53f8],sup[data-v-9f1e53f8],table[data-v-9f1e53f8],tbody[data-v-9f1e53f8],td[data-v-9f1e53f8],tfoot[data-v-9f1e53f8],th[data-v-9f1e53f8],thead[data-v-9f1e53f8],time[data-v-9f1e53f8],tr[data-v-9f1e53f8],tt[data-v-9f1e53f8],u[data-v-9f1e53f8],ul[data-v-9f1e53f8],var[data-v-9f1e53f8],video[data-v-9f1e53f8]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-9f1e53f8],aside[data-v-9f1e53f8],details[data-v-9f1e53f8],figcaption[data-v-9f1e53f8],figure[data-v-9f1e53f8],footer[data-v-9f1e53f8],header[data-v-9f1e53f8],hgroup[data-v-9f1e53f8],menu[data-v-9f1e53f8],nav[data-v-9f1e53f8],section[data-v-9f1e53f8]{display:block}body[data-v-9f1e53f8]{line-height:1}ol[data-v-9f1e53f8],ul[data-v-9f1e53f8]{list-style:none}blockquote[data-v-9f1e53f8],q[data-v-9f1e53f8]{quotes:none}blockquote[data-v-9f1e53f8]:after,blockquote[data-v-9f1e53f8]:before,q[data-v-9f1e53f8]:after,q[data-v-9f1e53f8]:before{content:"";content:none}table[data-v-9f1e53f8]{border-collapse:collapse;border-spacing:0}html[data-v-9f1e53f8]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-9f1e53f8]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-9f1e53f8]{color:#0e0e11;color:var(--cl-black)}a[data-v-9f1e53f8]{color:inherit;text-decoration:none}button[data-v-9f1e53f8],input[data-v-9f1e53f8],label[data-v-9f1e53f8],select[data-v-9f1e53f8],textarea[data-v-9f1e53f8]{font-size:1em}p[data-v-9f1e53f8]{line-height:1.8}.sz-heading[data-v-9f1e53f8]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-9f1e53f8]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-9f1e53f8]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-9f1e53f8]{font-size:4.5rem}}.sz-subheading[data-v-9f1e53f8]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-9f1e53f8]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-9f1e53f8]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-9f1e53f8]{font-size:2.75rem}}.sz-regular[data-v-9f1e53f8]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-9f1e53f8]{font-size:1.125rem}}.sz-small[data-v-9f1e53f8]{font-size:.875rem}.light[data-v-9f1e53f8]{font-weight:300}.regular[data-v-9f1e53f8]{font-weight:400}.bold[data-v-9f1e53f8],.medium[data-v-9f1e53f8]{font-weight:700}html[data-v-9f1e53f8]{touch-action:manipulation}*[data-v-9f1e53f8],[data-v-9f1e53f8]:after,[data-v-9f1e53f8]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.Line-Reveal[data-v-9f1e53f8]{font-size:inherit}.Line-Reveal.reveal--subheading[data-v-9f1e53f8]{font-size:5.5vw;font-weight:600}@media(min-width:768px){.Line-Reveal.reveal--subheading[data-v-9f1e53f8]{font-size:3.75vw}}@media(min-width:1024px){.Line-Reveal.reveal--subheading[data-v-9f1e53f8]{font-size:2.75vw}}@media(min-width:1600px){.Line-Reveal.reveal--subheading[data-v-9f1e53f8]{font-size:2.5rem}}.Line-Reveal.reveal--heading[data-v-9f1e53f8]{font-size:11vw;font-weight:700}@media(min-width:768px){.Line-Reveal.reveal--heading[data-v-9f1e53f8]{font-size:8vw}}@media(min-width:1024px){.Line-Reveal.reveal--heading[data-v-9f1e53f8]{font-size:6vw}}@media(min-width:1600px){.Line-Reveal.reveal--heading[data-v-9f1e53f8]{font-size:5.25rem}}.Line-Reveal .line[data-v-9f1e53f8]{line-height:1.45;overflow:hidden}.Line-Reveal .line span[data-v-9f1e53f8]{display:inline-block;transform:translateY(100%)}',""]),t.exports=f},211:function(t,e,d){var content=d(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(29).default)("79094061",content,!0,{sourceMap:!1})},214:function(t,e,d){"use strict";d.r(e);var f=d(202),n=d(93).default,v={mixins:[f.a],methods:{reveal:function(){n({targets:this.$el,duration:1280,easing:"easeOutQuint",translateY:["3em","0em"],opacity:["0","1"]}),this.unobserveIO()}}},o=(d(217),d(8)),component=Object(o.a)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"Text-Block"},[t._t("default")],2)}),[],!1,null,"79f44a64",null);e.default=component.exports},217:function(t,e,d){"use strict";d(211)},218:function(t,e,d){var f=d(28)(!1);f.push([t.i,'a[data-v-79f44a64],abbr[data-v-79f44a64],acronym[data-v-79f44a64],address[data-v-79f44a64],applet[data-v-79f44a64],article[data-v-79f44a64],aside[data-v-79f44a64],audio[data-v-79f44a64],b[data-v-79f44a64],big[data-v-79f44a64],blockquote[data-v-79f44a64],body[data-v-79f44a64],canvas[data-v-79f44a64],caption[data-v-79f44a64],center[data-v-79f44a64],cite[data-v-79f44a64],code[data-v-79f44a64],dd[data-v-79f44a64],del[data-v-79f44a64],details[data-v-79f44a64],dfn[data-v-79f44a64],div[data-v-79f44a64],dl[data-v-79f44a64],dt[data-v-79f44a64],em[data-v-79f44a64],embed[data-v-79f44a64],fieldset[data-v-79f44a64],figcaption[data-v-79f44a64],figure[data-v-79f44a64],footer[data-v-79f44a64],form[data-v-79f44a64],h1[data-v-79f44a64],h2[data-v-79f44a64],h3[data-v-79f44a64],h4[data-v-79f44a64],h5[data-v-79f44a64],h6[data-v-79f44a64],header[data-v-79f44a64],hgroup[data-v-79f44a64],html[data-v-79f44a64],i[data-v-79f44a64],iframe[data-v-79f44a64],img[data-v-79f44a64],ins[data-v-79f44a64],kbd[data-v-79f44a64],label[data-v-79f44a64],legend[data-v-79f44a64],li[data-v-79f44a64],mark[data-v-79f44a64],menu[data-v-79f44a64],nav[data-v-79f44a64],object[data-v-79f44a64],ol[data-v-79f44a64],output[data-v-79f44a64],p[data-v-79f44a64],pre[data-v-79f44a64],q[data-v-79f44a64],ruby[data-v-79f44a64],s[data-v-79f44a64],samp[data-v-79f44a64],section[data-v-79f44a64],small[data-v-79f44a64],span[data-v-79f44a64],strike[data-v-79f44a64],strong[data-v-79f44a64],sub[data-v-79f44a64],summary[data-v-79f44a64],sup[data-v-79f44a64],table[data-v-79f44a64],tbody[data-v-79f44a64],td[data-v-79f44a64],tfoot[data-v-79f44a64],th[data-v-79f44a64],thead[data-v-79f44a64],time[data-v-79f44a64],tr[data-v-79f44a64],tt[data-v-79f44a64],u[data-v-79f44a64],ul[data-v-79f44a64],var[data-v-79f44a64],video[data-v-79f44a64]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-79f44a64],aside[data-v-79f44a64],details[data-v-79f44a64],figcaption[data-v-79f44a64],figure[data-v-79f44a64],footer[data-v-79f44a64],header[data-v-79f44a64],hgroup[data-v-79f44a64],menu[data-v-79f44a64],nav[data-v-79f44a64],section[data-v-79f44a64]{display:block}body[data-v-79f44a64]{line-height:1}ol[data-v-79f44a64],ul[data-v-79f44a64]{list-style:none}blockquote[data-v-79f44a64],q[data-v-79f44a64]{quotes:none}blockquote[data-v-79f44a64]:after,blockquote[data-v-79f44a64]:before,q[data-v-79f44a64]:after,q[data-v-79f44a64]:before{content:"";content:none}table[data-v-79f44a64]{border-collapse:collapse;border-spacing:0}html[data-v-79f44a64]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-79f44a64]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-79f44a64]{color:#0e0e11;color:var(--cl-black)}a[data-v-79f44a64]{color:inherit;text-decoration:none}button[data-v-79f44a64],input[data-v-79f44a64],label[data-v-79f44a64],select[data-v-79f44a64],textarea[data-v-79f44a64]{font-size:1em}p[data-v-79f44a64]{line-height:1.8}.sz-heading[data-v-79f44a64]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-79f44a64]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-79f44a64]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-79f44a64]{font-size:4.5rem}}.sz-subheading[data-v-79f44a64]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-79f44a64]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-79f44a64]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-79f44a64]{font-size:2.75rem}}.sz-regular[data-v-79f44a64]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-79f44a64]{font-size:1.125rem}}.sz-small[data-v-79f44a64]{font-size:.875rem}.light[data-v-79f44a64]{font-weight:300}.regular[data-v-79f44a64]{font-weight:400}.bold[data-v-79f44a64],.medium[data-v-79f44a64]{font-weight:700}html[data-v-79f44a64]{touch-action:manipulation}*[data-v-79f44a64],[data-v-79f44a64]:after,[data-v-79f44a64]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.Text-Block[data-v-79f44a64]{opacity:0;transform:translateY(3em)}',""]),t.exports=f},263:function(t,e,d){var content=d(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(29).default)("fdf20536",content,!0,{sourceMap:!1})},280:function(t,e,d){"use strict";d(263)},281:function(t,e,d){var f=d(28)(!1);f.push([t.i,'a[data-v-56a63ab1],abbr[data-v-56a63ab1],acronym[data-v-56a63ab1],address[data-v-56a63ab1],applet[data-v-56a63ab1],article[data-v-56a63ab1],aside[data-v-56a63ab1],audio[data-v-56a63ab1],b[data-v-56a63ab1],big[data-v-56a63ab1],blockquote[data-v-56a63ab1],body[data-v-56a63ab1],canvas[data-v-56a63ab1],caption[data-v-56a63ab1],center[data-v-56a63ab1],cite[data-v-56a63ab1],code[data-v-56a63ab1],dd[data-v-56a63ab1],del[data-v-56a63ab1],details[data-v-56a63ab1],dfn[data-v-56a63ab1],div[data-v-56a63ab1],dl[data-v-56a63ab1],dt[data-v-56a63ab1],em[data-v-56a63ab1],embed[data-v-56a63ab1],fieldset[data-v-56a63ab1],figcaption[data-v-56a63ab1],figure[data-v-56a63ab1],footer[data-v-56a63ab1],form[data-v-56a63ab1],h1[data-v-56a63ab1],h2[data-v-56a63ab1],h3[data-v-56a63ab1],h4[data-v-56a63ab1],h5[data-v-56a63ab1],h6[data-v-56a63ab1],header[data-v-56a63ab1],hgroup[data-v-56a63ab1],html[data-v-56a63ab1],i[data-v-56a63ab1],iframe[data-v-56a63ab1],img[data-v-56a63ab1],ins[data-v-56a63ab1],kbd[data-v-56a63ab1],label[data-v-56a63ab1],legend[data-v-56a63ab1],li[data-v-56a63ab1],mark[data-v-56a63ab1],menu[data-v-56a63ab1],nav[data-v-56a63ab1],object[data-v-56a63ab1],ol[data-v-56a63ab1],output[data-v-56a63ab1],p[data-v-56a63ab1],pre[data-v-56a63ab1],q[data-v-56a63ab1],ruby[data-v-56a63ab1],s[data-v-56a63ab1],samp[data-v-56a63ab1],section[data-v-56a63ab1],small[data-v-56a63ab1],span[data-v-56a63ab1],strike[data-v-56a63ab1],strong[data-v-56a63ab1],sub[data-v-56a63ab1],summary[data-v-56a63ab1],sup[data-v-56a63ab1],table[data-v-56a63ab1],tbody[data-v-56a63ab1],td[data-v-56a63ab1],tfoot[data-v-56a63ab1],th[data-v-56a63ab1],thead[data-v-56a63ab1],time[data-v-56a63ab1],tr[data-v-56a63ab1],tt[data-v-56a63ab1],u[data-v-56a63ab1],ul[data-v-56a63ab1],var[data-v-56a63ab1],video[data-v-56a63ab1]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-56a63ab1],aside[data-v-56a63ab1],details[data-v-56a63ab1],figcaption[data-v-56a63ab1],figure[data-v-56a63ab1],footer[data-v-56a63ab1],header[data-v-56a63ab1],hgroup[data-v-56a63ab1],menu[data-v-56a63ab1],nav[data-v-56a63ab1],section[data-v-56a63ab1]{display:block}body[data-v-56a63ab1]{line-height:1}ol[data-v-56a63ab1],ul[data-v-56a63ab1]{list-style:none}blockquote[data-v-56a63ab1],q[data-v-56a63ab1]{quotes:none}blockquote[data-v-56a63ab1]:after,blockquote[data-v-56a63ab1]:before,q[data-v-56a63ab1]:after,q[data-v-56a63ab1]:before{content:"";content:none}table[data-v-56a63ab1]{border-collapse:collapse;border-spacing:0}html[data-v-56a63ab1]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-56a63ab1]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-56a63ab1]{color:#0e0e11;color:var(--cl-black)}a[data-v-56a63ab1]{color:inherit;text-decoration:none}button[data-v-56a63ab1],input[data-v-56a63ab1],label[data-v-56a63ab1],select[data-v-56a63ab1],textarea[data-v-56a63ab1]{font-size:1em}p[data-v-56a63ab1]{line-height:1.8}.sz-heading[data-v-56a63ab1]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-56a63ab1]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-56a63ab1]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-56a63ab1]{font-size:4.5rem}}.sz-subheading[data-v-56a63ab1]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-56a63ab1]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-56a63ab1]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-56a63ab1]{font-size:2.75rem}}.sz-regular[data-v-56a63ab1]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-56a63ab1]{font-size:1.125rem}}.sz-small[data-v-56a63ab1]{font-size:.875rem}.light[data-v-56a63ab1]{font-weight:300}.regular[data-v-56a63ab1]{font-weight:400}.bold[data-v-56a63ab1],.medium[data-v-56a63ab1]{font-weight:700}html[data-v-56a63ab1]{touch-action:manipulation}*[data-v-56a63ab1],[data-v-56a63ab1]:after,[data-v-56a63ab1]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.further-about-info[data-v-56a63ab1]{max-width:1600px;margin:0 auto;padding:0 1.5rem}@media(min-width:1024px){.further-about-info[data-v-56a63ab1]{padding:0 1rem 0 8.3333333333%}}@media(min-width:2260px){.further-about-info[data-v-56a63ab1]{max-width:2260px}}.further-about-info .Contact-Reel[data-v-56a63ab1]{max-width:none;width:100%;opacity:.5;font-size:1.25rem;margin-top:5rem;max-width:40em}.further-about-info p[data-v-56a63ab1]{max-width:40em;line-height:2;font-size:1rem;margin-top:2.5em}@media(min-width:768px){.further-about-info p[data-v-56a63ab1]{font-size:1.25rem}}.further-about-info a[data-v-56a63ab1]{font-weight:500;text-decoration:underline}.further-about-info a[data-v-56a63ab1]:hover{opacity:.7}',""]),t.exports=f},285:function(t,e,d){"use strict";d.r(e);var f={components:{LineReveal:d(203).default}},n=(d(280),d(8)),component=Object(n.a)(f,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("section",{staticClass:"further-about-info"},[d("line-reveal",{staticClass:"reveal--subheading bold",attrs:{lines:["More About Me"]}}),t._v(" "),d("text-block",[t._v("\n\t\tAfter having taught myself how to program, I began contracting as a frontend web developer for\n\t\ta "),d("a",{attrs:{href:"https://motiv.digital/",target:"_blank"}},[t._v("web agency")]),t._v(" shortly after starting high\n\t\tschool. I was granted the opportunity to work closely with senior developers and designers on\n\t\tvarious websites and web applications.\n\t\t")]),t._v(" "),d("text-block",[t._v("\n\t\tTo gain further professional experience, I took a gap year before university to work for\n\t\t"),d("a",{attrs:{href:"https://anoa.ca/",target:"_blank"}},[t._v("another agency")]),t._v("\n\t\tfocused on creating portfolio sites for the film industry. During the year I led the planning\n\t\tand development of new internal architectures and tools used in the development of all their\n\t\tcontemporary client projects.\n\t")]),t._v(" "),d("text-block",[t._v("\n\t\tI'm currently taking computer science at the University of Toronto and looking for internship\n\t\topportunities for summer '22.\n\t\t"),t._v("\n\t\tIf you want more details, here is my formal "),d("a",{attrs:{href:"/resume.pdf",target:"_blank"}},[t._v("resume")]),t._v(".\n\t\tIf you have a position, "),d("a",{attrs:{href:"/#contact"}},[t._v("contact me!")]),t._v(" :D\n\t")]),t._v(" "),d("contact-reel",{attrs:{speed:"slow"}})],1)}),[],!1,null,"56a63ab1",null);e.default=component.exports;installComponents(component,{LineReveal:d(203).default,TextBlock:d(214).default,ContactReel:d(94).default})}}]);