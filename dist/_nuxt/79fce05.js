(window.webpackJsonp=window.webpackJsonp||[]).push([[22,10],{225:function(e,t,c){var content=c(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(29).default)("72f759bc",content,!0,{sourceMap:!1})},226:function(e,t,c){var content=c(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(29).default)("3792513e",content,!0,{sourceMap:!1})},229:function(e,t,c){"use strict";c(17),c(13),c(14),c(23),c(24);var d=c(5),n=c(6);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,c)}return t}var r=c(136).default;t.a={scrollToTop:!1,computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)(["isMobile"])),mounted:function(){this.isMobile||this.$nextTick((function(){window.scrollTo(0,0),r.init({wrapperSpeed:.28})}))},beforeDestroy:function(){this.isMobile||r.resetLuxy()}}},230:function(e,t,c){"use strict";c(17),c(13),c(14),c(23),c(24);var d=c(5),n=c(18),o=c(6);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,c)}return t}t.a={data:function(){return{links:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["isMobile"])),methods:{linkEnterHandler:function(){this.isMobile||n.a.emit("SET_MOUSE_TYPE",{type:"enlarged"})},linkLeaveHandler:function(){this.isMobile||n.a.emit("SET_MOUSE_TYPE",{type:"default"})}},mounted:function(){var e=this;this.isMobile||(this._linkEnterHandler=this.linkEnterHandler.bind(this),this._linkLeaveHandler=this.linkLeaveHandler.bind(this),this.links=document.querySelectorAll("a"),this.links.forEach((function(link){link.addEventListener("mouseenter",e._linkEnterHandler),link.addEventListener("mouseleave",e._linkLeaveHandler)})))},beforeDestroy:function(){var e=this;this.isMobile||(n.a.emit("SET_MOUSE_TYPE",{type:"default"}),this.links.forEach((function(link){link.removeEventListener("hover",e._linkEnterHandler),link.removeEventListener("mouseleave",e._linkLeaveHandler)})))}}},243:function(e,t,c){"use strict";c(225)},244:function(e,t,c){var d=c(28)(!1);d.push([e.i,'a[data-v-60ec22e7],abbr[data-v-60ec22e7],acronym[data-v-60ec22e7],address[data-v-60ec22e7],applet[data-v-60ec22e7],article[data-v-60ec22e7],aside[data-v-60ec22e7],audio[data-v-60ec22e7],b[data-v-60ec22e7],big[data-v-60ec22e7],blockquote[data-v-60ec22e7],body[data-v-60ec22e7],canvas[data-v-60ec22e7],caption[data-v-60ec22e7],center[data-v-60ec22e7],cite[data-v-60ec22e7],code[data-v-60ec22e7],dd[data-v-60ec22e7],del[data-v-60ec22e7],details[data-v-60ec22e7],dfn[data-v-60ec22e7],div[data-v-60ec22e7],dl[data-v-60ec22e7],dt[data-v-60ec22e7],em[data-v-60ec22e7],embed[data-v-60ec22e7],fieldset[data-v-60ec22e7],figcaption[data-v-60ec22e7],figure[data-v-60ec22e7],footer[data-v-60ec22e7],form[data-v-60ec22e7],h1[data-v-60ec22e7],h2[data-v-60ec22e7],h3[data-v-60ec22e7],h4[data-v-60ec22e7],h5[data-v-60ec22e7],h6[data-v-60ec22e7],header[data-v-60ec22e7],hgroup[data-v-60ec22e7],html[data-v-60ec22e7],i[data-v-60ec22e7],iframe[data-v-60ec22e7],img[data-v-60ec22e7],ins[data-v-60ec22e7],kbd[data-v-60ec22e7],label[data-v-60ec22e7],legend[data-v-60ec22e7],li[data-v-60ec22e7],mark[data-v-60ec22e7],menu[data-v-60ec22e7],nav[data-v-60ec22e7],object[data-v-60ec22e7],ol[data-v-60ec22e7],output[data-v-60ec22e7],p[data-v-60ec22e7],pre[data-v-60ec22e7],q[data-v-60ec22e7],ruby[data-v-60ec22e7],s[data-v-60ec22e7],samp[data-v-60ec22e7],section[data-v-60ec22e7],small[data-v-60ec22e7],span[data-v-60ec22e7],strike[data-v-60ec22e7],strong[data-v-60ec22e7],sub[data-v-60ec22e7],summary[data-v-60ec22e7],sup[data-v-60ec22e7],table[data-v-60ec22e7],tbody[data-v-60ec22e7],td[data-v-60ec22e7],tfoot[data-v-60ec22e7],th[data-v-60ec22e7],thead[data-v-60ec22e7],time[data-v-60ec22e7],tr[data-v-60ec22e7],tt[data-v-60ec22e7],u[data-v-60ec22e7],ul[data-v-60ec22e7],var[data-v-60ec22e7],video[data-v-60ec22e7]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-60ec22e7],aside[data-v-60ec22e7],details[data-v-60ec22e7],figcaption[data-v-60ec22e7],figure[data-v-60ec22e7],footer[data-v-60ec22e7],header[data-v-60ec22e7],hgroup[data-v-60ec22e7],menu[data-v-60ec22e7],nav[data-v-60ec22e7],section[data-v-60ec22e7]{display:block}body[data-v-60ec22e7]{line-height:1}ol[data-v-60ec22e7],ul[data-v-60ec22e7]{list-style:none}blockquote[data-v-60ec22e7],q[data-v-60ec22e7]{quotes:none}blockquote[data-v-60ec22e7]:after,blockquote[data-v-60ec22e7]:before,q[data-v-60ec22e7]:after,q[data-v-60ec22e7]:before{content:"";content:none}table[data-v-60ec22e7]{border-collapse:collapse;border-spacing:0}html[data-v-60ec22e7]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-60ec22e7]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-60ec22e7]{color:#0e0e11;color:var(--cl-black)}a[data-v-60ec22e7]{color:inherit;text-decoration:none}button[data-v-60ec22e7],input[data-v-60ec22e7],label[data-v-60ec22e7],select[data-v-60ec22e7],textarea[data-v-60ec22e7]{font-size:1em}p[data-v-60ec22e7]{line-height:1.8}.sz-heading[data-v-60ec22e7]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-60ec22e7]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-60ec22e7]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-60ec22e7]{font-size:4.5rem}}.sz-subheading[data-v-60ec22e7]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-60ec22e7]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-60ec22e7]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-60ec22e7]{font-size:2.75rem}}.sz-regular[data-v-60ec22e7]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-60ec22e7]{font-size:1.125rem}}.sz-small[data-v-60ec22e7]{font-size:.875rem}.light[data-v-60ec22e7]{font-weight:300}.regular[data-v-60ec22e7]{font-weight:400}.bold[data-v-60ec22e7],.medium[data-v-60ec22e7]{font-weight:700}html[data-v-60ec22e7]{touch-action:manipulation}*[data-v-60ec22e7],[data-v-60ec22e7]:after,[data-v-60ec22e7]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.Contact-Section[data-v-60ec22e7]{align-items:center;justify-content:center;display:flex;margin:0 auto;padding:16vh 1rem 22vh;width:100%}@media(min-width:768px){.Contact-Section[data-v-60ec22e7]{padding:0 1rem;min-height:100vh;width:auto}}.Contact-Section .say-hi[data-v-60ec22e7]{font-weight:500}.Contact-Section .content[data-v-60ec22e7]{position:relative;display:flex;flex-direction:column;padding-bottom:3rem;width:100%}@media(min-width:768px){.Contact-Section .content[data-v-60ec22e7]{width:auto}}.Contact-Section .Contact-Reel[data-v-60ec22e7],.Contact-Section p[data-v-60ec22e7]{color:#404040;color:var(--cl-gray)}.Contact-Section .Contact-Reel[data-v-60ec22e7]{width:calc(100% - 16px);margin:0 auto;right:0;left:0;position:absolute;bottom:0}.Contact-Section .email-me[data-v-60ec22e7]{display:inline-block;margin-top:2rem;margin-bottom:2.5rem}.Contact-Section .email-me .one-line[data-v-60ec22e7]{font-size:9.6vw;text-align:center}@media(min-width:1024px){.Contact-Section .email-me .one-line[data-v-60ec22e7]{font-size:min(8.8vw,200px)}}',""]),e.exports=d},245:function(e,t,c){"use strict";c(226)},246:function(e,t,c){var d=c(28)(!1);d.push([e.i,'a[data-v-a5c170fa],abbr[data-v-a5c170fa],acronym[data-v-a5c170fa],address[data-v-a5c170fa],applet[data-v-a5c170fa],article[data-v-a5c170fa],aside[data-v-a5c170fa],audio[data-v-a5c170fa],b[data-v-a5c170fa],big[data-v-a5c170fa],blockquote[data-v-a5c170fa],body[data-v-a5c170fa],canvas[data-v-a5c170fa],caption[data-v-a5c170fa],center[data-v-a5c170fa],cite[data-v-a5c170fa],code[data-v-a5c170fa],dd[data-v-a5c170fa],del[data-v-a5c170fa],details[data-v-a5c170fa],dfn[data-v-a5c170fa],div[data-v-a5c170fa],dl[data-v-a5c170fa],dt[data-v-a5c170fa],em[data-v-a5c170fa],embed[data-v-a5c170fa],fieldset[data-v-a5c170fa],figcaption[data-v-a5c170fa],figure[data-v-a5c170fa],footer[data-v-a5c170fa],form[data-v-a5c170fa],h1[data-v-a5c170fa],h2[data-v-a5c170fa],h3[data-v-a5c170fa],h4[data-v-a5c170fa],h5[data-v-a5c170fa],h6[data-v-a5c170fa],header[data-v-a5c170fa],hgroup[data-v-a5c170fa],html[data-v-a5c170fa],i[data-v-a5c170fa],iframe[data-v-a5c170fa],img[data-v-a5c170fa],ins[data-v-a5c170fa],kbd[data-v-a5c170fa],label[data-v-a5c170fa],legend[data-v-a5c170fa],li[data-v-a5c170fa],mark[data-v-a5c170fa],menu[data-v-a5c170fa],nav[data-v-a5c170fa],object[data-v-a5c170fa],ol[data-v-a5c170fa],output[data-v-a5c170fa],p[data-v-a5c170fa],pre[data-v-a5c170fa],q[data-v-a5c170fa],ruby[data-v-a5c170fa],s[data-v-a5c170fa],samp[data-v-a5c170fa],section[data-v-a5c170fa],small[data-v-a5c170fa],span[data-v-a5c170fa],strike[data-v-a5c170fa],strong[data-v-a5c170fa],sub[data-v-a5c170fa],summary[data-v-a5c170fa],sup[data-v-a5c170fa],table[data-v-a5c170fa],tbody[data-v-a5c170fa],td[data-v-a5c170fa],tfoot[data-v-a5c170fa],th[data-v-a5c170fa],thead[data-v-a5c170fa],time[data-v-a5c170fa],tr[data-v-a5c170fa],tt[data-v-a5c170fa],u[data-v-a5c170fa],ul[data-v-a5c170fa],var[data-v-a5c170fa],video[data-v-a5c170fa]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-a5c170fa],aside[data-v-a5c170fa],details[data-v-a5c170fa],figcaption[data-v-a5c170fa],figure[data-v-a5c170fa],footer[data-v-a5c170fa],header[data-v-a5c170fa],hgroup[data-v-a5c170fa],menu[data-v-a5c170fa],nav[data-v-a5c170fa],section[data-v-a5c170fa]{display:block}body[data-v-a5c170fa]{line-height:1}ol[data-v-a5c170fa],ul[data-v-a5c170fa]{list-style:none}blockquote[data-v-a5c170fa],q[data-v-a5c170fa]{quotes:none}blockquote[data-v-a5c170fa]:after,blockquote[data-v-a5c170fa]:before,q[data-v-a5c170fa]:after,q[data-v-a5c170fa]:before{content:"";content:none}table[data-v-a5c170fa]{border-collapse:collapse;border-spacing:0}html[data-v-a5c170fa]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-a5c170fa]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-a5c170fa]{color:#0e0e11;color:var(--cl-black)}a[data-v-a5c170fa]{color:inherit;text-decoration:none}button[data-v-a5c170fa],input[data-v-a5c170fa],label[data-v-a5c170fa],select[data-v-a5c170fa],textarea[data-v-a5c170fa]{font-size:1em}p[data-v-a5c170fa]{line-height:1.8}.sz-heading[data-v-a5c170fa]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-a5c170fa]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-a5c170fa]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-a5c170fa]{font-size:4.5rem}}.sz-subheading[data-v-a5c170fa]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-a5c170fa]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-a5c170fa]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-a5c170fa]{font-size:2.75rem}}.sz-regular[data-v-a5c170fa]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-a5c170fa]{font-size:1.125rem}}.sz-small[data-v-a5c170fa]{font-size:.875rem}.light[data-v-a5c170fa]{font-weight:300}.regular[data-v-a5c170fa]{font-weight:400}.bold[data-v-a5c170fa],.medium[data-v-a5c170fa]{font-weight:700}html[data-v-a5c170fa]{touch-action:manipulation}*[data-v-a5c170fa],[data-v-a5c170fa]:after,[data-v-a5c170fa]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.section-header[data-v-a5c170fa]{color:#404040;color:var(--cl-gray);display:inline-flex;pointer-events:none;opacity:.25;font-size:18vw;padding-bottom:.25em;will-change:transform}@media(min-width:1024px){.section-header[data-v-a5c170fa]{padding-bottom:0;font-size:12vw}}@media(min-width:2260px){.section-header[data-v-a5c170fa]{font-size:10vw}}.luxy-el[data-v-a5c170fa],.slider[data-v-a5c170fa]{display:inline-flex}.slider[data-v-a5c170fa]{-webkit-animation:horizontal-scroll-data-v-a5c170fa 75s linear infinite;animation:horizontal-scroll-data-v-a5c170fa 75s linear infinite}@media(min-width:1024px){.slider[data-v-a5c170fa]{-webkit-animation:horizontal-scroll-data-v-a5c170fa 150s linear infinite;animation:horizontal-scroll-data-v-a5c170fa 150s linear infinite}}.slider-wrapper[data-v-a5c170fa]{will-change:transform}.heading[data-v-a5c170fa]{display:inline-table;pointer-events:all;padding-left:.75em;line-height:1}html:not(.isMobile) .section-header[data-v-a5c170fa]{opacity:0;transition:opacity .24s ease-out}html:not(.isMobile) .section-header.show[data-v-a5c170fa]{opacity:.25}@-webkit-keyframes horizontal-scroll-data-v-a5c170fa{0%{transform:translateX(-75%)}to{transform:translateX(-25%)}}@keyframes horizontal-scroll-data-v-a5c170fa{0%{transform:translateX(-75%)}to{transform:translateX(-25%)}}',""]),e.exports=d},253:function(e,t,c){"use strict";c.r(t);var d=c(93),n=c(203),o={components:{ContactReel:d.default,LineReveal:n.default}},r=(c(243),c(8)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("section",{staticClass:"Contact-Section",attrs:{id:"contact"}},[c("div",{staticClass:"content"},[c("a",{staticClass:"bold email-me",attrs:{href:"mailto:sean@grindal.me"}},[c("line-reveal",{staticClass:"one-line",attrs:{lines:["sean@grindal.me"]}})],1),e._v(" "),c("contact-reel")],1)])}),[],!1,null,"60ec22e7",null);t.default=component.exports;installComponents(component,{LineReveal:c(203).default,ContactReel:c(93).default})},254:function(e,t,c){"use strict";c.r(t);c(17),c(13),c(14),c(23),c(24);var d=c(5),n=c(6);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,c)}return t}var r={props:{text:{type:String,required:!0}},data:function(){return{speedY:15,aniFrame:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)(["isMobile"])),methods:{setOffset:function(){var e=this;if(!this.isMobile){var t=this.$el.getBoundingClientRect().top-window.innerHeight/2;this.aniFrame=requestAnimationFrame((function(){e.$refs.slider.style.transform="translateY(".concat(Math.round(-.2*t),"px)"),e.setOffset()}))}},resizeHandler:function(){var e=this;this.isMobile||(clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout((function(){e.setOffset()}),64))}},mounted:function(){var e=this;this.isMobile||(this.aniFrame=requestAnimationFrame((function(){e.setOffset(),e.$el.classList.add("show")})))},beforeDestroy:function(){cancelAnimationFrame(this.aniFrame)}},v=r,l=(c(245),c(8)),component=Object(l.a)(v,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"section-header bold"},[c("div",{ref:"slider",staticClass:"slider-wrapper"},[c("div",{staticClass:"slider"},e._l(8,(function(t){return c("span",{key:t,staticClass:"heading"},[e._v("\n\t\t\t\t"+e._s(e.text)+"\n\t\t\t")])})),0)])])}),[],!1,null,"a5c170fa",null);t.default=component.exports},260:function(e,t,c){var content=c(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(29).default)("a4c2af8a",content,!0,{sourceMap:!1})},276:function(e,t,c){"use strict";c(260)},277:function(e,t,c){var d=c(28)(!1);d.push([e.i,'a[data-v-25c367e1],abbr[data-v-25c367e1],acronym[data-v-25c367e1],address[data-v-25c367e1],applet[data-v-25c367e1],article[data-v-25c367e1],aside[data-v-25c367e1],audio[data-v-25c367e1],b[data-v-25c367e1],big[data-v-25c367e1],blockquote[data-v-25c367e1],body[data-v-25c367e1],canvas[data-v-25c367e1],caption[data-v-25c367e1],center[data-v-25c367e1],cite[data-v-25c367e1],code[data-v-25c367e1],dd[data-v-25c367e1],del[data-v-25c367e1],details[data-v-25c367e1],dfn[data-v-25c367e1],div[data-v-25c367e1],dl[data-v-25c367e1],dt[data-v-25c367e1],em[data-v-25c367e1],embed[data-v-25c367e1],fieldset[data-v-25c367e1],figcaption[data-v-25c367e1],figure[data-v-25c367e1],footer[data-v-25c367e1],form[data-v-25c367e1],h1[data-v-25c367e1],h2[data-v-25c367e1],h3[data-v-25c367e1],h4[data-v-25c367e1],h5[data-v-25c367e1],h6[data-v-25c367e1],header[data-v-25c367e1],hgroup[data-v-25c367e1],html[data-v-25c367e1],i[data-v-25c367e1],iframe[data-v-25c367e1],img[data-v-25c367e1],ins[data-v-25c367e1],kbd[data-v-25c367e1],label[data-v-25c367e1],legend[data-v-25c367e1],li[data-v-25c367e1],mark[data-v-25c367e1],menu[data-v-25c367e1],nav[data-v-25c367e1],object[data-v-25c367e1],ol[data-v-25c367e1],output[data-v-25c367e1],p[data-v-25c367e1],pre[data-v-25c367e1],q[data-v-25c367e1],ruby[data-v-25c367e1],s[data-v-25c367e1],samp[data-v-25c367e1],section[data-v-25c367e1],small[data-v-25c367e1],span[data-v-25c367e1],strike[data-v-25c367e1],strong[data-v-25c367e1],sub[data-v-25c367e1],summary[data-v-25c367e1],sup[data-v-25c367e1],table[data-v-25c367e1],tbody[data-v-25c367e1],td[data-v-25c367e1],tfoot[data-v-25c367e1],th[data-v-25c367e1],thead[data-v-25c367e1],time[data-v-25c367e1],tr[data-v-25c367e1],tt[data-v-25c367e1],u[data-v-25c367e1],ul[data-v-25c367e1],var[data-v-25c367e1],video[data-v-25c367e1]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-25c367e1],aside[data-v-25c367e1],details[data-v-25c367e1],figcaption[data-v-25c367e1],figure[data-v-25c367e1],footer[data-v-25c367e1],header[data-v-25c367e1],hgroup[data-v-25c367e1],menu[data-v-25c367e1],nav[data-v-25c367e1],section[data-v-25c367e1]{display:block}body[data-v-25c367e1]{line-height:1}ol[data-v-25c367e1],ul[data-v-25c367e1]{list-style:none}blockquote[data-v-25c367e1],q[data-v-25c367e1]{quotes:none}blockquote[data-v-25c367e1]:after,blockquote[data-v-25c367e1]:before,q[data-v-25c367e1]:after,q[data-v-25c367e1]:before{content:"";content:none}table[data-v-25c367e1]{border-collapse:collapse;border-spacing:0}html[data-v-25c367e1]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-25c367e1]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-25c367e1]{color:#0e0e11;color:var(--cl-black)}a[data-v-25c367e1]{color:inherit;text-decoration:none}button[data-v-25c367e1],input[data-v-25c367e1],label[data-v-25c367e1],select[data-v-25c367e1],textarea[data-v-25c367e1]{font-size:1em}p[data-v-25c367e1]{line-height:1.8}.sz-heading[data-v-25c367e1]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-25c367e1]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-25c367e1]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-25c367e1]{font-size:4.5rem}}.sz-subheading[data-v-25c367e1]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-25c367e1]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-25c367e1]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-25c367e1]{font-size:2.75rem}}.sz-regular[data-v-25c367e1]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-25c367e1]{font-size:1.125rem}}.sz-small[data-v-25c367e1]{font-size:.875rem}.light[data-v-25c367e1]{font-weight:300}.regular[data-v-25c367e1]{font-weight:400}.bold[data-v-25c367e1],.medium[data-v-25c367e1]{font-weight:700}html[data-v-25c367e1]{touch-action:manipulation}*[data-v-25c367e1],[data-v-25c367e1]:after,[data-v-25c367e1]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}@media(min-aspect-ratio:3/4){.Theme-Changer[data-v-25c367e1]{margin-top:30vh}}.project-section-header[data-v-25c367e1]{margin-top:50vh;margin-bottom:6vh}.experiments-section-header[data-v-25c367e1]{margin-top:14vh}@media(min-aspect-ratio:1/1){.experiments-section-header[data-v-25c367e1]{margin-top:56vh;margin-bottom:4vh}}',""]),e.exports=d},283:function(e,t,c){"use strict";c.r(t);var d=c(265),n=c(253),o=c(254),r=c(267),v=c(228),l=c(229),f=c(230),h={mixins:[l.a,f.a],components:{Landing:d.default,WorkGrid:r.default,SectionHeader:o.default,ContactSection:n.default,ThemeChanger:v.default},beforeMount:function(){window.scrollTo(0,0)},computed:{workProjs:function(){return this.$store.state.workPages},experiments:function(){return this.$store.state.experiments}}},m=(c(276),c(8)),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"Home"},[c("landing"),e._v(" "),c("theme-changer",[c("section-header",{staticClass:"experiments-section-header",attrs:{text:"Sandbox"}}),e._v(" "),c("work-grid",{attrs:{type:"exps",projects:e.experiments}}),e._v(" "),c("contact-section")],1)],1)}),[],!1,null,"25c367e1",null);t.default=component.exports;installComponents(component,{Landing:c(265).default,SectionHeader:c(254).default,WorkGrid:c(267).default,ContactSection:c(253).default,ThemeChanger:c(228).default})}}]);