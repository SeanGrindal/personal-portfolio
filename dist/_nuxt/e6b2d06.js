(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8,13,17],{202:function(e,t,d){"use strict";d(17),d(13),d(14),d(23),d(24);var n=d(5),v=d(18),o=d(6);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(object);e&&(d=d.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,d)}return t}t.a={data:function(){return{ioOptions:{rootMargin:"-20%",threshold:0},io:null,intersected:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["slideRevealed"])),methods:{initIO:function(){this.io||(this.io=new IntersectionObserver(this.IOCb.bind(this),this.ioOptions),this.io.observe(this.$el))},IOCb:function(e){var t=this;e.forEach((function(e){t.intersected?t.hasOwnProperty("hide")&&e.rootBounds.y<e.boundingClientRect.y&&!e.isIntersecting&&(t.intersected=!1,t.hide()):t.hasOwnProperty("reveal")&&e.isIntersecting&&(t.intersected=!0,t.reveal())}))},unobserveIO:function(){this.io&&(this.io.unobserve(this.$el),this.io=null)}},mounted:function(){var e=this;this.slideRevealed?this.initIO():v.a.on("INIT_ANIMATIONS",(function(){return e.initIO()}))},beforeDestroy:function(){this.unobserveIO()}}},203:function(e,t,d){"use strict";d.r(t);var n=d(202),v=d(92).default,o={mixins:[n.a],props:{lines:{type:Array,required:!0}},methods:{reveal:function(){this.lines.length>1?v({targets:this.$refs.lineText,duration:1200,easing:"easeOutQuint",translateY:["100%","0%"],delay:v.stagger(200,{easing:"linear"})}):v({targets:this.$refs.lineText,duration:1200,easing:"easeOutQuint",translateY:["100%","0%"]}),this.unobserveIO()}}},r=(d(209),d(8)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"Line-Reveal io-animate-in"},e._l(e.lines,(function(text,i){return d("div",{key:i,class:["line","line-"+i]},[d("div",{ref:"lineText",refInFor:!0,domProps:{innerHTML:e._s(text)}})])})),0)}),[],!1,null,"5332d574",null);t.default=component.exports},204:function(e,t,d){var content=d(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(29).default)("8eb80cde",content,!0,{sourceMap:!1})},209:function(e,t,d){"use strict";d(204)},210:function(e,t,d){var n=d(28)(!1);n.push([e.i,'a[data-v-5332d574],abbr[data-v-5332d574],acronym[data-v-5332d574],address[data-v-5332d574],applet[data-v-5332d574],article[data-v-5332d574],aside[data-v-5332d574],audio[data-v-5332d574],b[data-v-5332d574],big[data-v-5332d574],blockquote[data-v-5332d574],body[data-v-5332d574],canvas[data-v-5332d574],caption[data-v-5332d574],center[data-v-5332d574],cite[data-v-5332d574],code[data-v-5332d574],dd[data-v-5332d574],del[data-v-5332d574],details[data-v-5332d574],dfn[data-v-5332d574],div[data-v-5332d574],dl[data-v-5332d574],dt[data-v-5332d574],em[data-v-5332d574],embed[data-v-5332d574],fieldset[data-v-5332d574],figcaption[data-v-5332d574],figure[data-v-5332d574],footer[data-v-5332d574],form[data-v-5332d574],h1[data-v-5332d574],h2[data-v-5332d574],h3[data-v-5332d574],h4[data-v-5332d574],h5[data-v-5332d574],h6[data-v-5332d574],header[data-v-5332d574],hgroup[data-v-5332d574],html[data-v-5332d574],i[data-v-5332d574],iframe[data-v-5332d574],img[data-v-5332d574],ins[data-v-5332d574],kbd[data-v-5332d574],label[data-v-5332d574],legend[data-v-5332d574],li[data-v-5332d574],mark[data-v-5332d574],menu[data-v-5332d574],nav[data-v-5332d574],object[data-v-5332d574],ol[data-v-5332d574],output[data-v-5332d574],p[data-v-5332d574],pre[data-v-5332d574],q[data-v-5332d574],ruby[data-v-5332d574],s[data-v-5332d574],samp[data-v-5332d574],section[data-v-5332d574],small[data-v-5332d574],span[data-v-5332d574],strike[data-v-5332d574],strong[data-v-5332d574],sub[data-v-5332d574],summary[data-v-5332d574],sup[data-v-5332d574],table[data-v-5332d574],tbody[data-v-5332d574],td[data-v-5332d574],tfoot[data-v-5332d574],th[data-v-5332d574],thead[data-v-5332d574],time[data-v-5332d574],tr[data-v-5332d574],tt[data-v-5332d574],u[data-v-5332d574],ul[data-v-5332d574],var[data-v-5332d574],video[data-v-5332d574]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-5332d574],aside[data-v-5332d574],details[data-v-5332d574],figcaption[data-v-5332d574],figure[data-v-5332d574],footer[data-v-5332d574],header[data-v-5332d574],hgroup[data-v-5332d574],menu[data-v-5332d574],nav[data-v-5332d574],section[data-v-5332d574]{display:block}body[data-v-5332d574]{line-height:1}ol[data-v-5332d574],ul[data-v-5332d574]{list-style:none}blockquote[data-v-5332d574],q[data-v-5332d574]{quotes:none}blockquote[data-v-5332d574]:after,blockquote[data-v-5332d574]:before,q[data-v-5332d574]:after,q[data-v-5332d574]:before{content:"";content:none}table[data-v-5332d574]{border-collapse:collapse;border-spacing:0}html[data-v-5332d574]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-5332d574]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-5332d574]{color:#0e0e11;color:var(--cl-black)}a[data-v-5332d574]{color:inherit;text-decoration:none}button[data-v-5332d574],input[data-v-5332d574],label[data-v-5332d574],select[data-v-5332d574],textarea[data-v-5332d574]{font-size:1em}p[data-v-5332d574]{line-height:1.8}.sz-heading[data-v-5332d574]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-5332d574]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-5332d574]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-5332d574]{font-size:4.5rem}}.sz-subheading[data-v-5332d574]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-5332d574]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-5332d574]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-5332d574]{font-size:2.75rem}}.sz-regular[data-v-5332d574]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-5332d574]{font-size:1.125rem}}.sz-small[data-v-5332d574]{font-size:.875rem}.light[data-v-5332d574]{font-weight:300}.regular[data-v-5332d574]{font-weight:400}.bold[data-v-5332d574],.medium[data-v-5332d574]{font-weight:700}html[data-v-5332d574]{touch-action:manipulation}*[data-v-5332d574],[data-v-5332d574]:after,[data-v-5332d574]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.Line-Reveal[data-v-5332d574]{font-size:inherit}.Line-Reveal.reveal--subheading[data-v-5332d574]{font-size:5.5vw}@media(min-width:768px){.Line-Reveal.reveal--subheading[data-v-5332d574]{font-size:3.75vw}}@media(min-width:1024px){.Line-Reveal.reveal--subheading[data-v-5332d574]{font-size:2.75vw}}@media(min-width:1600px){.Line-Reveal.reveal--subheading[data-v-5332d574]{font-size:2.5rem}}.Line-Reveal.reveal--heading[data-v-5332d574]{font-size:11vw;font-weight:700}@media(min-width:768px){.Line-Reveal.reveal--heading[data-v-5332d574]{font-size:8vw}}@media(min-width:1024px){.Line-Reveal.reveal--heading[data-v-5332d574]{font-size:6vw}}@media(min-width:1600px){.Line-Reveal.reveal--heading[data-v-5332d574]{font-size:5.25rem}}.Line-Reveal .line[data-v-5332d574]{line-height:1.45;overflow:hidden}.Line-Reveal .line div[data-v-5332d574]{display:inline-block;transform:translateY(100%)}.Line-Reveal[data-v-5332d574]  a{position:relative}.Line-Reveal[data-v-5332d574]  a:hover:after{opacity:.8}.Line-Reveal[data-v-5332d574]  a:after{content:"";position:absolute;width:calc(100% - 4px);bottom:0;left:2px;height:2px;border-radius:2px/50%;background-color:#0e0e11;background-color:var(--cl-black);opacity:.3;transition:opacity .24s cubic-bezier(.215,.61,.355,1)}@media(min-width:1200px){.Line-Reveal[data-v-5332d574]  a:after{height:4px}}',""]),e.exports=n},211:function(e,t,d){var content=d(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(29).default)("79094061",content,!0,{sourceMap:!1})},214:function(e,t,d){"use strict";d.r(t);var n=d(202),v=d(92).default,o={mixins:[n.a],methods:{reveal:function(){v({targets:this.$el,duration:1280,easing:"easeOutQuint",translateY:["3em","0em"],opacity:["0","1"]}),this.unobserveIO()}}},r=(d(217),d(8)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"Text-Block"},[e._t("default")],2)}),[],!1,null,"79f44a64",null);t.default=component.exports},217:function(e,t,d){"use strict";d(211)},218:function(e,t,d){var n=d(28)(!1);n.push([e.i,'a[data-v-79f44a64],abbr[data-v-79f44a64],acronym[data-v-79f44a64],address[data-v-79f44a64],applet[data-v-79f44a64],article[data-v-79f44a64],aside[data-v-79f44a64],audio[data-v-79f44a64],b[data-v-79f44a64],big[data-v-79f44a64],blockquote[data-v-79f44a64],body[data-v-79f44a64],canvas[data-v-79f44a64],caption[data-v-79f44a64],center[data-v-79f44a64],cite[data-v-79f44a64],code[data-v-79f44a64],dd[data-v-79f44a64],del[data-v-79f44a64],details[data-v-79f44a64],dfn[data-v-79f44a64],div[data-v-79f44a64],dl[data-v-79f44a64],dt[data-v-79f44a64],em[data-v-79f44a64],embed[data-v-79f44a64],fieldset[data-v-79f44a64],figcaption[data-v-79f44a64],figure[data-v-79f44a64],footer[data-v-79f44a64],form[data-v-79f44a64],h1[data-v-79f44a64],h2[data-v-79f44a64],h3[data-v-79f44a64],h4[data-v-79f44a64],h5[data-v-79f44a64],h6[data-v-79f44a64],header[data-v-79f44a64],hgroup[data-v-79f44a64],html[data-v-79f44a64],i[data-v-79f44a64],iframe[data-v-79f44a64],img[data-v-79f44a64],ins[data-v-79f44a64],kbd[data-v-79f44a64],label[data-v-79f44a64],legend[data-v-79f44a64],li[data-v-79f44a64],mark[data-v-79f44a64],menu[data-v-79f44a64],nav[data-v-79f44a64],object[data-v-79f44a64],ol[data-v-79f44a64],output[data-v-79f44a64],p[data-v-79f44a64],pre[data-v-79f44a64],q[data-v-79f44a64],ruby[data-v-79f44a64],s[data-v-79f44a64],samp[data-v-79f44a64],section[data-v-79f44a64],small[data-v-79f44a64],span[data-v-79f44a64],strike[data-v-79f44a64],strong[data-v-79f44a64],sub[data-v-79f44a64],summary[data-v-79f44a64],sup[data-v-79f44a64],table[data-v-79f44a64],tbody[data-v-79f44a64],td[data-v-79f44a64],tfoot[data-v-79f44a64],th[data-v-79f44a64],thead[data-v-79f44a64],time[data-v-79f44a64],tr[data-v-79f44a64],tt[data-v-79f44a64],u[data-v-79f44a64],ul[data-v-79f44a64],var[data-v-79f44a64],video[data-v-79f44a64]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-79f44a64],aside[data-v-79f44a64],details[data-v-79f44a64],figcaption[data-v-79f44a64],figure[data-v-79f44a64],footer[data-v-79f44a64],header[data-v-79f44a64],hgroup[data-v-79f44a64],menu[data-v-79f44a64],nav[data-v-79f44a64],section[data-v-79f44a64]{display:block}body[data-v-79f44a64]{line-height:1}ol[data-v-79f44a64],ul[data-v-79f44a64]{list-style:none}blockquote[data-v-79f44a64],q[data-v-79f44a64]{quotes:none}blockquote[data-v-79f44a64]:after,blockquote[data-v-79f44a64]:before,q[data-v-79f44a64]:after,q[data-v-79f44a64]:before{content:"";content:none}table[data-v-79f44a64]{border-collapse:collapse;border-spacing:0}html[data-v-79f44a64]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-79f44a64]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-79f44a64]{color:#0e0e11;color:var(--cl-black)}a[data-v-79f44a64]{color:inherit;text-decoration:none}button[data-v-79f44a64],input[data-v-79f44a64],label[data-v-79f44a64],select[data-v-79f44a64],textarea[data-v-79f44a64]{font-size:1em}p[data-v-79f44a64]{line-height:1.8}.sz-heading[data-v-79f44a64]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-79f44a64]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-79f44a64]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-79f44a64]{font-size:4.5rem}}.sz-subheading[data-v-79f44a64]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-79f44a64]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-79f44a64]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-79f44a64]{font-size:2.75rem}}.sz-regular[data-v-79f44a64]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-79f44a64]{font-size:1.125rem}}.sz-small[data-v-79f44a64]{font-size:.875rem}.light[data-v-79f44a64]{font-weight:300}.regular[data-v-79f44a64]{font-weight:400}.bold[data-v-79f44a64],.medium[data-v-79f44a64]{font-weight:700}html[data-v-79f44a64]{touch-action:manipulation}*[data-v-79f44a64],[data-v-79f44a64]:after,[data-v-79f44a64]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.Text-Block[data-v-79f44a64]{opacity:0;transform:translateY(3em)}',""]),e.exports=n},256:function(e,t,d){var content=d(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(29).default)("09902e4e",content,!0,{sourceMap:!1})},263:function(e,t,d){"use strict";d.r(t);d(137),d(25);var n=d(203),v=d(214),o={components:{LineReveal:n.default,TextBlock:v.default},props:{link:{required:!0,type:String},name:{required:!0,type:String},description:{required:!0,type:String}},data:function(){return{titleHovered:!1}},computed:{lines:function(){return this.name.split(/\s+/)}}},r=(d(268),d(8)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"Work-Intro"},[d("a",{attrs:{href:e.link,target:"_blank"},on:{mouseover:function(t){e.titleHovered=!0},mouseleave:function(t){e.titleHovered=!1}}},[d("line-reveal",{staticClass:"reveal--heading bold",attrs:{lines:e.lines}})],1),e._v(" "),d("text-block",{staticClass:"description"},[e._v("\n\t\t"+e._s(e.description)+"\n\t\t"),d("br"),e._v(" "),d("a",{class:["page-link sz-small bold",{"--underline":e.titleHovered}],attrs:{href:e.link,target:"_blank"}},[e._v("\n\t\t\tVisit Site\n\t\t")])])],1)}),[],!1,null,"4ed9e4a6",null);t.default=component.exports;installComponents(component,{LineReveal:d(203).default,TextBlock:d(214).default})},268:function(e,t,d){"use strict";d(256)},269:function(e,t,d){var n=d(28)(!1);n.push([e.i,'a[data-v-4ed9e4a6],abbr[data-v-4ed9e4a6],acronym[data-v-4ed9e4a6],address[data-v-4ed9e4a6],applet[data-v-4ed9e4a6],article[data-v-4ed9e4a6],aside[data-v-4ed9e4a6],audio[data-v-4ed9e4a6],b[data-v-4ed9e4a6],big[data-v-4ed9e4a6],blockquote[data-v-4ed9e4a6],body[data-v-4ed9e4a6],canvas[data-v-4ed9e4a6],caption[data-v-4ed9e4a6],center[data-v-4ed9e4a6],cite[data-v-4ed9e4a6],code[data-v-4ed9e4a6],dd[data-v-4ed9e4a6],del[data-v-4ed9e4a6],details[data-v-4ed9e4a6],dfn[data-v-4ed9e4a6],div[data-v-4ed9e4a6],dl[data-v-4ed9e4a6],dt[data-v-4ed9e4a6],em[data-v-4ed9e4a6],embed[data-v-4ed9e4a6],fieldset[data-v-4ed9e4a6],figcaption[data-v-4ed9e4a6],figure[data-v-4ed9e4a6],footer[data-v-4ed9e4a6],form[data-v-4ed9e4a6],h1[data-v-4ed9e4a6],h2[data-v-4ed9e4a6],h3[data-v-4ed9e4a6],h4[data-v-4ed9e4a6],h5[data-v-4ed9e4a6],h6[data-v-4ed9e4a6],header[data-v-4ed9e4a6],hgroup[data-v-4ed9e4a6],html[data-v-4ed9e4a6],i[data-v-4ed9e4a6],iframe[data-v-4ed9e4a6],img[data-v-4ed9e4a6],ins[data-v-4ed9e4a6],kbd[data-v-4ed9e4a6],label[data-v-4ed9e4a6],legend[data-v-4ed9e4a6],li[data-v-4ed9e4a6],mark[data-v-4ed9e4a6],menu[data-v-4ed9e4a6],nav[data-v-4ed9e4a6],object[data-v-4ed9e4a6],ol[data-v-4ed9e4a6],output[data-v-4ed9e4a6],p[data-v-4ed9e4a6],pre[data-v-4ed9e4a6],q[data-v-4ed9e4a6],ruby[data-v-4ed9e4a6],s[data-v-4ed9e4a6],samp[data-v-4ed9e4a6],section[data-v-4ed9e4a6],small[data-v-4ed9e4a6],span[data-v-4ed9e4a6],strike[data-v-4ed9e4a6],strong[data-v-4ed9e4a6],sub[data-v-4ed9e4a6],summary[data-v-4ed9e4a6],sup[data-v-4ed9e4a6],table[data-v-4ed9e4a6],tbody[data-v-4ed9e4a6],td[data-v-4ed9e4a6],tfoot[data-v-4ed9e4a6],th[data-v-4ed9e4a6],thead[data-v-4ed9e4a6],time[data-v-4ed9e4a6],tr[data-v-4ed9e4a6],tt[data-v-4ed9e4a6],u[data-v-4ed9e4a6],ul[data-v-4ed9e4a6],var[data-v-4ed9e4a6],video[data-v-4ed9e4a6]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-4ed9e4a6],aside[data-v-4ed9e4a6],details[data-v-4ed9e4a6],figcaption[data-v-4ed9e4a6],figure[data-v-4ed9e4a6],footer[data-v-4ed9e4a6],header[data-v-4ed9e4a6],hgroup[data-v-4ed9e4a6],menu[data-v-4ed9e4a6],nav[data-v-4ed9e4a6],section[data-v-4ed9e4a6]{display:block}body[data-v-4ed9e4a6]{line-height:1}ol[data-v-4ed9e4a6],ul[data-v-4ed9e4a6]{list-style:none}blockquote[data-v-4ed9e4a6],q[data-v-4ed9e4a6]{quotes:none}blockquote[data-v-4ed9e4a6]:after,blockquote[data-v-4ed9e4a6]:before,q[data-v-4ed9e4a6]:after,q[data-v-4ed9e4a6]:before{content:"";content:none}table[data-v-4ed9e4a6]{border-collapse:collapse;border-spacing:0}html[data-v-4ed9e4a6]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-4ed9e4a6]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-4ed9e4a6]{color:#0e0e11;color:var(--cl-black)}a[data-v-4ed9e4a6]{color:inherit;text-decoration:none}button[data-v-4ed9e4a6],input[data-v-4ed9e4a6],label[data-v-4ed9e4a6],select[data-v-4ed9e4a6],textarea[data-v-4ed9e4a6]{font-size:1em}p[data-v-4ed9e4a6]{line-height:1.8}.sz-heading[data-v-4ed9e4a6]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-4ed9e4a6]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-4ed9e4a6]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-4ed9e4a6]{font-size:4.5rem}}.sz-subheading[data-v-4ed9e4a6]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-4ed9e4a6]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-4ed9e4a6]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-4ed9e4a6]{font-size:2.75rem}}.sz-regular[data-v-4ed9e4a6]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-4ed9e4a6]{font-size:1.125rem}}.sz-small[data-v-4ed9e4a6]{font-size:.875rem}.light[data-v-4ed9e4a6]{font-weight:300}.regular[data-v-4ed9e4a6]{font-weight:400}.bold[data-v-4ed9e4a6],.medium[data-v-4ed9e4a6]{font-weight:700}html[data-v-4ed9e4a6]{touch-action:manipulation}*[data-v-4ed9e4a6],[data-v-4ed9e4a6]:after,[data-v-4ed9e4a6]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.Work-Intro[data-v-4ed9e4a6]{max-width:1600px;margin:0 auto 10vh;padding:0 1rem}@media(min-width:1024px){.Work-Intro[data-v-4ed9e4a6]{justify-content:space-between;display:flex}}.Work-Intro .description[data-v-4ed9e4a6]{padding-top:4em;max-width:480px}@media(min-width:1024px){.Work-Intro .description[data-v-4ed9e4a6]{padding-top:2em}}.Work-Intro .description .page-link[data-v-4ed9e4a6]{color:#404040;color:var(--cl-gray);display:inline-block;margin-top:1em;margin-left:-1em;padding:1em}.Work-Intro .description .page-link[data-v-4ed9e4a6]:after{content:"";background-color:#404040;background-color:var(--cl-gray);width:0;transition:width .24s ease-in;position:absolute;bottom:1em;left:1em;height:1px}.Work-Intro .description .page-link.--underline[data-v-4ed9e4a6]:after,.Work-Intro .description .page-link[data-v-4ed9e4a6]:hover:after{width:calc(100% - 2em);transition:width .24s ease-out}',""]),e.exports=n}}]);