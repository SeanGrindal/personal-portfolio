(window.webpackJsonp=window.webpackJsonp||[]).push([[20,7,8,18],{202:function(e,t,o){"use strict";o(17),o(13),o(14),o(23),o(24);var r=o(5),n=o(18),c=o(6);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}t.a={data:function(){return{ioOptions:{rootMargin:"-20%",threshold:0},io:null,intersected:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)(["slideRevealed"])),methods:{initIO:function(){this.io||(this.io=new IntersectionObserver(this.IOCb.bind(this),this.ioOptions),this.io.observe(this.$el))},IOCb:function(e){var t=this;e.forEach((function(e){t.intersected?t.hasOwnProperty("hide")&&e.rootBounds.y<e.boundingClientRect.y&&!e.isIntersecting&&(t.intersected=!1,t.hide()):t.hasOwnProperty("reveal")&&e.isIntersecting&&(t.intersected=!0,t.reveal())}))},unobserveIO:function(){this.io&&(this.io.unobserve(this.$el),this.io=null)}},mounted:function(){var e=this;this.slideRevealed?this.initIO():n.a.on("INIT_ANIMATIONS",(function(){return e.initIO()}))},beforeDestroy:function(){this.unobserveIO()}}},205:function(e,t,o){var content=o(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("d7bffeea",content,!0,{sourceMap:!1})},206:function(e,t,o){"use strict";o.r(t);var r={mixins:[o(202).a],props:{src:{type:String,required:!0}},data:function(){return{ioOptions:{rootMargin:"60%",threshold:0},isLoaded:!1}},methods:{onLoad:function(){this.isLoaded=!0,this.$el.removeEventListener("load",this.onLoad)},reveal:function(){this.$el.addEventListener("load",this.onLoad),this.$el.setAttribute("src",this.src),this.unobserveIO()}}},n=(o(212),o(8)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{class:["Lazy-Img",{loaded:e.isLoaded}],attrs:{draggable:"false"}})}),[],!1,null,null,null);t.default=component.exports},207:function(e,t,o){var content=o(216);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("067d3ca6",content,!0,{sourceMap:!1})},208:function(e,t,o){"use strict";o.r(t);var r={components:{LazyImg:o(206).default},props:{imgData:{required:!0},isLazy:{default:!0,type:Boolean}}},n=(o(215),o(8)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"Work-Img"},[o("div",{staticClass:"background"},[e.isLazy?o("lazy-img",{staticClass:"img",attrs:{src:e.imgData.src,alt:e.imgData.alt,draggable:"false"}}):o("img",{staticClass:"img",attrs:{src:e.imgData.src,alt:e.imgData.alt,draggable:"false"}})],1)])}),[],!1,null,"675e6c94",null);t.default=component.exports;installComponents(component,{LazyImg:o(206).default})},212:function(e,t,o){"use strict";o(205)},213:function(e,t,o){var r=o(28)(!1);r.push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html{color:#0e0e11;color:var(--cl-black)}a{color:inherit;text-decoration:none}button,input,label,select,textarea{font-size:1em}p{line-height:1.8}.sz-heading{font-size:2.25rem}@media(min-width:768px){.sz-heading{font-size:2.5rem}}@media(min-width:1024px){.sz-heading{font-size:3rem}}@media(min-width:1600px){.sz-heading{font-size:4.5rem}}.sz-subheading{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading{font-size:2rem}}@media(min-width:1600px){.sz-subheading{font-size:2.75rem}}.sz-regular{font-size:1rem}@media(min-width:1024px){.sz-regular{font-size:1.125rem}}.sz-small{font-size:.875rem}.light{font-weight:300}.regular{font-weight:400}.medium{font-weight:500}.bold{font-weight:700}html{touch-action:manipulation}*,:after,:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.Lazy-Img{opacity:0;transition:opacity .36s cubic-bezier(.215,.61,.355,1)}.Lazy-Img.loaded{opacity:1}',""]),e.exports=r},215:function(e,t,o){"use strict";o(207)},216:function(e,t,o){var r=o(28)(!1);r.push([e.i,'a[data-v-675e6c94],abbr[data-v-675e6c94],acronym[data-v-675e6c94],address[data-v-675e6c94],applet[data-v-675e6c94],article[data-v-675e6c94],aside[data-v-675e6c94],audio[data-v-675e6c94],b[data-v-675e6c94],big[data-v-675e6c94],blockquote[data-v-675e6c94],body[data-v-675e6c94],canvas[data-v-675e6c94],caption[data-v-675e6c94],center[data-v-675e6c94],cite[data-v-675e6c94],code[data-v-675e6c94],dd[data-v-675e6c94],del[data-v-675e6c94],details[data-v-675e6c94],dfn[data-v-675e6c94],div[data-v-675e6c94],dl[data-v-675e6c94],dt[data-v-675e6c94],em[data-v-675e6c94],embed[data-v-675e6c94],fieldset[data-v-675e6c94],figcaption[data-v-675e6c94],figure[data-v-675e6c94],footer[data-v-675e6c94],form[data-v-675e6c94],h1[data-v-675e6c94],h2[data-v-675e6c94],h3[data-v-675e6c94],h4[data-v-675e6c94],h5[data-v-675e6c94],h6[data-v-675e6c94],header[data-v-675e6c94],hgroup[data-v-675e6c94],html[data-v-675e6c94],i[data-v-675e6c94],iframe[data-v-675e6c94],img[data-v-675e6c94],ins[data-v-675e6c94],kbd[data-v-675e6c94],label[data-v-675e6c94],legend[data-v-675e6c94],li[data-v-675e6c94],mark[data-v-675e6c94],menu[data-v-675e6c94],nav[data-v-675e6c94],object[data-v-675e6c94],ol[data-v-675e6c94],output[data-v-675e6c94],p[data-v-675e6c94],pre[data-v-675e6c94],q[data-v-675e6c94],ruby[data-v-675e6c94],s[data-v-675e6c94],samp[data-v-675e6c94],section[data-v-675e6c94],small[data-v-675e6c94],span[data-v-675e6c94],strike[data-v-675e6c94],strong[data-v-675e6c94],sub[data-v-675e6c94],summary[data-v-675e6c94],sup[data-v-675e6c94],table[data-v-675e6c94],tbody[data-v-675e6c94],td[data-v-675e6c94],tfoot[data-v-675e6c94],th[data-v-675e6c94],thead[data-v-675e6c94],time[data-v-675e6c94],tr[data-v-675e6c94],tt[data-v-675e6c94],u[data-v-675e6c94],ul[data-v-675e6c94],var[data-v-675e6c94],video[data-v-675e6c94]{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article[data-v-675e6c94],aside[data-v-675e6c94],details[data-v-675e6c94],figcaption[data-v-675e6c94],figure[data-v-675e6c94],footer[data-v-675e6c94],header[data-v-675e6c94],hgroup[data-v-675e6c94],menu[data-v-675e6c94],nav[data-v-675e6c94],section[data-v-675e6c94]{display:block}body[data-v-675e6c94]{line-height:1}ol[data-v-675e6c94],ul[data-v-675e6c94]{list-style:none}blockquote[data-v-675e6c94],q[data-v-675e6c94]{quotes:none}blockquote[data-v-675e6c94]:after,blockquote[data-v-675e6c94]:before,q[data-v-675e6c94]:after,q[data-v-675e6c94]:before{content:"";content:none}table[data-v-675e6c94]{border-collapse:collapse;border-spacing:0}html[data-v-675e6c94]{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark][data-v-675e6c94]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html[data-v-675e6c94]{color:#0e0e11;color:var(--cl-black)}a[data-v-675e6c94]{color:inherit;text-decoration:none}button[data-v-675e6c94],input[data-v-675e6c94],label[data-v-675e6c94],select[data-v-675e6c94],textarea[data-v-675e6c94]{font-size:1em}p[data-v-675e6c94]{line-height:1.8}.sz-heading[data-v-675e6c94]{font-size:2.25rem}@media(min-width:768px){.sz-heading[data-v-675e6c94]{font-size:2.5rem}}@media(min-width:1024px){.sz-heading[data-v-675e6c94]{font-size:3rem}}@media(min-width:1600px){.sz-heading[data-v-675e6c94]{font-size:4.5rem}}.sz-subheading[data-v-675e6c94]{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading[data-v-675e6c94]{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading[data-v-675e6c94]{font-size:2rem}}@media(min-width:1600px){.sz-subheading[data-v-675e6c94]{font-size:2.75rem}}.sz-regular[data-v-675e6c94]{font-size:1rem}@media(min-width:1024px){.sz-regular[data-v-675e6c94]{font-size:1.125rem}}.sz-small[data-v-675e6c94]{font-size:.875rem}.light[data-v-675e6c94]{font-weight:300}.regular[data-v-675e6c94]{font-weight:400}.medium[data-v-675e6c94]{font-weight:500}.bold[data-v-675e6c94]{font-weight:700}html[data-v-675e6c94]{touch-action:manipulation}*[data-v-675e6c94],[data-v-675e6c94]:after,[data-v-675e6c94]:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.Work-Img[data-v-675e6c94]{width:100%}.Work-Img.mobile .background[data-v-675e6c94]{padding:12% 24%}.Work-Img.tablet .background[data-v-675e6c94]{padding:12% 18%}.Work-Img .background[data-v-675e6c94]{background-color:#f5f6fa;background-color:var(--cl-light-gray);padding:10% 12%}.Work-Img img[data-v-675e6c94]{display:block;border-radius:4px;box-sizing:content-box;box-shadow:4px 4px 20px 8px rgba(0,0,0,.1);width:100%}',""]),e.exports=r},227:function(e,t,o){var content=o(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("35ecf4af",content,!0,{sourceMap:!1})},247:function(e,t,o){"use strict";o(227)},248:function(e,t,o){var r=o(28)(!1);r.push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{--cl-white:#fff;--cl-black:#0e0e11;--cl-red:#ff5050;--cl-gray:#404040;--cl-light-gray:#f5f6fa}html[data-theme=dark]{--cl-white:#0e0e11;--cl-black:#fff;--cl-gray:#e3e3e3;--cl-light-gray:#14151a}html{color:#0e0e11;color:var(--cl-black)}a{color:inherit;text-decoration:none}button,input,label,select,textarea{font-size:1em}p{line-height:1.8}.sz-heading{font-size:2.25rem}@media(min-width:768px){.sz-heading{font-size:2.5rem}}@media(min-width:1024px){.sz-heading{font-size:3rem}}@media(min-width:1600px){.sz-heading{font-size:4.5rem}}.sz-subheading{line-height:1.6;font-size:1.375rem}@media(min-width:768px){.sz-subheading{font-size:1.75rem}}@media(min-width:1024px){.sz-subheading{font-size:2rem}}@media(min-width:1600px){.sz-subheading{font-size:2.75rem}}.sz-regular{font-size:1rem}@media(min-width:1024px){.sz-regular{font-size:1.125rem}}.sz-small{font-size:.875rem}.light{font-weight:300}.regular{font-weight:400}.medium{font-weight:500}.bold{font-weight:700}html{touch-action:manipulation}*,:after,:before{-webkit-backface-visibility:hidden;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);backface-visibility:hidden;box-sizing:border-box;outline:none;position:relative}.Work-Item{display:block;padding:20px 0}.Work-Item .img-wrapper{box-shadow:3px 3px 16px 4px rgba(0,0,0,.1)}.Work-Item img{display:block;width:100%}.Work-Item .caption{margin-top:.25em;margin-bottom:.75em;padding:1em}@media(min-width:1024px){.Work-Item .caption{padding:.75em 0}}.Work-Item .caption .index{padding-right:.25em}html:not(.isMobile) .Work-Item{transform:translateY(6vh);will-change:transform}html:not(.isMobile) .Work-Item .img-wrapper{overflow:hidden;-webkit-clip-path:polygon(0 30%,110% 30%,110% 110%,0 110%);clip-path:polygon(0 30%,110% 30%,110% 110%,0 110%);will-change:clip-path}html:not(.isMobile) .Work-Item img{border-radius:4px;transition:transform .72s cubic-bezier(.215,.61,.355,1)}html:not(.isMobile) .Work-Item img:hover{transform:scale(1.05)}',""]),e.exports=r},257:function(e,t,o){"use strict";o.r(t);o(17),o(13),o(14),o(23),o(24);var r=o(5),n=o(202),c=o(208),d=o(6);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var m=o(93).default,h={mixins:[n.a],components:{WorkImg:c.default},props:{page:{type:Object,required:!0},number:{required:!0}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(d.c)(["isMobile"])),methods:{reveal:function(){if(!this.isMobile){var e=m.timeline({easing:"easeOutSine"});e.add({duration:1280,targets:this.$refs.imgWrapper,clipPath:"polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%)"}),e.add({duration:920,targets:this.$el,translateY:["6vh","0"]},0),this.unobserveIO()}}}},f=h,v=(o(247),o(8)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return"work"==e.page.type?o("nuxt-link",{staticClass:"Work-Item",attrs:{to:"/work/"+e.page.id}},[o("div",{ref:"imgWrapper",staticClass:"img-wrapper"},[o("work-img",{class:e.page.card.imgType,attrs:{isLazy:!1,imgData:{src:e.page.card.src,alt:e.page.pageName}}})],1),e._v(" "),o("p",{staticClass:"caption sz-small"},[o("span",{staticClass:"bold index"},[e._v("0"+e._s(e.number)+".")]),e._v(" "),o("span",[e._v(e._s(e.page.pageName))])])]):o("a",{staticClass:"Work-Item",attrs:{target:"_blank",href:e.page.link}},[o("div",{ref:"imgWrapper",staticClass:"img-wrapper"},[o("work-img",{class:e.page.card.imgType,attrs:{isLazy:!1,imgData:{src:e.page.card.src,alt:e.page.pageName}}})],1),e._v(" "),o("p",{staticClass:"caption sz-small"},[o("span",{staticClass:"bold index"},[e._v("0"+e._s(e.number)+".")]),e._v(" "),o("span",[e._v(e._s(e.page.pageName))])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{WorkImg:o(208).default})}}]);