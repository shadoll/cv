(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Et30:function(t,e,n){},JkHd:function(t,e,n){},Lw3S:function(t,e,n){},OM7E:function(t,e,n){"use strict";n("JkHd")},RDME:function(t,e,n){"use strict";var i={props:{name:"",params:{}},created:function(){}},a=n("KHd+"),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",t._b({attrs:{flat:"",tile:"",id:t.name}},"v-card",t.params,!1),[n("v-card-title",{staticClass:"orange"},[t._v(t._s(t.$t("cv."+t.name+".title")))]),n("v-card-text",[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=r.exports},"T/Q9":function(t,e,n){"use strict";n("Et30")},"eXj+":function(t,e,n){"use strict";n("Lw3S")},iyQ6:function(t,e,n){"use strict";n.r(e);var i=n("RDME"),a=n("uQO6"),r=n("vVU0"),s={props:{category:""},data:function(){return{textcolor:"orange"}},methods:{newTab:function(t){void 0!==t&&""!=t&&window.open(encodeURI(t),"_blank")}}},o=(n("eXj+"),n("KHd+")),c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline",{attrs:{dark:t.$vuetify.theme.dark,dense:t.$vuetify.breakpoint.smAndDown,"align-top":t.$vuetify.breakpoint.smAndDown}},t._l(t.$t(t.category),(function(e,i){return n("v-timeline-item",{key:i,attrs:{color:t.textcolor,right:"",small:"","fill-dot":""},scopedSlots:t._u([t.$vuetify.breakpoint.smAndDown?null:{key:"opposite",fn:function(){return[n("h3",{staticClass:"headline"},[t._v("\n                "+t._s(e.place)+"\n                "),e.url?n("v-icon",{attrs:{link:"",size:"20",color:""+t.textcolor,dark:t.$vuetify.theme.dark},on:{click:function(n){return t.newTab(e.url)}}},[t._v("mdi-open-in-new")]):t._e()],1),n("span",{class:t.textcolor+"--text"},[t._v(t._s(e.period))])]},proxy:!0}],null,!0)},[n("v-card",{attrs:{color:t.textcolor,elevation:"0",tile:""}},[t.$vuetify.breakpoint.smAndDown?n("v-card-title",[t._v("\n                "+t._s(e.place)+"\n                "),n("div",[t._v(t._s(e.period))])]):t._e(),n("v-card-text",{staticClass:"pa-0"},[e.list?n("v-list",t._l(e.list,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-content",[n("v-list-item-title",{class:"text-h6 "+t.textcolor+"--text"},[t._v("\n                                "+t._s(e.title)+"\n                            ")]),t._v("\n                            "+t._s(e.description)+"\n                        ")],1)],1)})),1):n("v-list",[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{class:"text-h6 "+t.textcolor+"--text"},[t._v("\n                                "+t._s(e.title)+"\n                            ")]),t._v("\n                            "+t._s(e.description)+"\n                        ")],1)],1)],1)],1)],1)],1)})),1)}),[],!1,null,"8f97bb82",null).exports,l={components:{sCard:i.a},data:function(){return{textcolor:"orange"}},methods:{newTab:function(t){void 0!==t&&""!=t&&window.open(encodeURI(t),"_blank")}}},u=(n("T/Q9"),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("s-card",{attrs:{params:{class:"mt-0",width:"100%"},name:"technologies"}},t._l(t.$t("tech"),(function(e,i){return n("v-col",{key:i},[n("v-subheader",[t._v(t._s(e.group))]),n("v-chip-group",{attrs:{column:""}},t._l(e.list,(function(e,i){return n("v-chip",{key:i,staticClass:"ma-1",attrs:{color:t.textcolor,outlined:""},on:{click:function(n){return t.newTab(e.url)}}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n                "+t._s(e.title)+"\n            ")],1)})),1)],1)})),1)}),[],!1,null,null,null).exports),m={components:{sCard:i.a},data:function(){return{textcolor:"orange"}},methods:{newTab:function(t){void 0!==t&&""!=t&&window.open(encodeURI(t),"_blank")}}},d=Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("s-card",{attrs:{params:{class:"mt-0"},name:"link"}},[n("v-col",[t._l(t.$t("links"),(function(e,i){return n("v-btn",{key:i,staticClass:"d-print-none",attrs:{plain:""},on:{click:function(n){return t.newTab(e.url)}}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n            "+t._s(e.title)+"\n        ")],1)})),n("v-row",{attrs:{dense:""}},t._l(t.$t("links"),(function(e,i){return n("v-col",{key:i},[n("v-card",{staticClass:"d-none d-print-block",attrs:{"max-width":"230",flat:""}},[n("v-card-title",{staticClass:"qr-title"},[t._v("\n                        "+t._s(e.title)+"\n                    ")]),n("v-card-text",[n("qrcode",{attrs:{value:e.url,options:{width:200},tag:"img"}})],1)],1)],1)})),1)],2)],1)}),[],!1,null,null,null).exports,v=(n("DQNa"),{components:{sCard:i.a},data:function(){return{textcolor:"orange"}},computed:{lifeyears:function(){return(new Date).getFullYear()-1981},lifedays:function(){return Math.round(((new Date).getTime()-new Date("1981/03/01").getTime())/864e5)},information:function(){return{age:{years:this.lifeyears,days:this.lifedays}}}}}),f=Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("s-card",{attrs:{params:{class:"mt-0"},name:"information"}},[n("v-list",t._l(t.$t("information"),(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-icon",{staticClass:"mt-3 mb-3"},[n("v-icon",{attrs:{color:t.textcolor}},[t._v(t._s(e.icon))])],1),n("v-list-item-content",{staticClass:"pt-1 pb-1"},[n("v-list-item-title",[t._v("\n                    "+t._s(t.$t("information."+i+".msg",t.information[i]))+"\n                ")])],1)],1)})),1)],1)}),[],!1,null,null,null).exports,p={components:{sCard:i.a},data:function(){return{textcolor:"orange"}}},h=Object(o.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("s-card",{attrs:{params:{class:"mt-0"},name:"about"}},[e("div",{staticClass:"trade mt-5 mb-5"},[this._v("\n        "+this._s(this.$t("about.trade"))+"\n    ")]),e("blockquote",[this._v("\n        "+this._s(this.$t("about.summary"))+"\n    ")])])}),[],!1,null,null,null).exports,_={components:{sSideBar:a.a,sAppBar:r.a,sCard:i.a,sAbout:h,sInfo:f,sTechnologies:u,sLinks:d,sTimeline:c},data:function(){return{textcolor:"orange",miniVariant:!1,timelines:["experience","education"]}},metaInfo:function(){return{title:this.$i18n.t("meta.title")}}},g=Object(o.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("simple",[e("s-side-bar",{attrs:{miniVariant:this.miniVariant}}),e("s-app-bar",{attrs:{bgimage:"https://picsum.photos/id/180/1920/1080",_bgimage:"require('@/assets/images/bg.jpg')"},scopedSlots:this._u([{key:"logo",fn:function(){return[e("g-image",{attrs:{src:n("Q/7L")}})]},proxy:!0}])},[this._v("\n        "+this._s(this.$t("about.name"))+"\n    ")]),e("v-main",[e("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{staticClass:"md-12"},[e("s-about")],1),e("v-col",{staticClass:"md-12"},[e("s-info")],1)],1),e("s-links"),e("s-technologies"),this._l(this.timelines,(function(t,n){return e("s-card",{key:n,attrs:{params:{class:"mt-0",width:"100%"},name:t}},[e("s-timeline",{attrs:{category:t}})],1)}))],2)],1)],1)}),[],!1,null,null,null);e.default=g.exports},uQO6:function(t,e,n){"use strict";n("1AHG"),n("DQNa"),n("07d7"),n("JfAA"),n("sMBO");var i={props:[],data:function(){return{}},methods:{go:function(t,e){e==this.$route.path.substring(3)?(this.$vuetify.goTo("#"+t,"easeInOutCubic"),this.mini):this.$router.push({path:this.$tp(e,this.$i18n.locale.toString(),!0)})}},computed:{mini:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return!0;case"md":case"lg":case"xl":return!1}return!1}},created:function(){}},a=n("KHd+"),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"d-print-none",attrs:{app:"",dark:t.$vuetify.theme.dark,clipped:"","mini-variant":t.mini,permanent:"",bottom:""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}}},[n("v-list",{attrs:{dense:""}},t._l(t.$t("cv"),(function(e,i){return n("v-list-item",{key:i,attrs:{link:""},on:{click:function(n){return t.go(i,e.page)}}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)}),[],!1,null,null,null);e.a=r.exports},vVU0:function(t,e,n){"use strict";n("sMBO");var i=n("+ZcM"),a=(n("6cQw"),{name:"ColorSwitcher",data:function(){return{icon:"mdi-theme-light-dark"}},methods:{colorChange:function(){var t=!this.$vuetify.theme.dark;this.$vuetify.theme.dark=t,localStorage.setItem("theme",JSON.stringify(t?"dark":"light"))}},computed:{themeIcon:function(){return this.$vuetify.theme.dark?"mdi-brightness-7":"mdi-brightness-4"}},created:function(){var t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;null==localStorage.getItem("theme")?this.$vuetify.theme.dark=t:this.$vuetify.theme.dark='"dark"'==localStorage.getItem("theme")}}),r=n("KHd+"),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"d-print-none",attrs:{icon:""},on:{click:function(e){return t.colorChange()}}},"v-btn",a,!1),i),[n("v-icon",[t._v(t._s(t.themeIcon))])],1)]}}])})}),[],!1,null,null,null).exports,o={components:{LocaleSwitcher:i.a,ColorSwitcher:s},props:{bgimage:""},data:function(){return{miniVariant:!1}},computed:{size:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return 40;case"md":return 80;case"lg":case"xl":return 120}}}},c=(n("OM7E"),Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"#363636",dark:"","clipped-left":"","shrink-on-scroll":"",prominent:"",src:t.bgimage,"fade-img-on-scroll":"","scroll-threshold":"500"},scopedSlots:t._u([{key:"img",fn:function(e){var i=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(53,60,79,0.8), rgba(73,80,99,0.7)"}},"v-img",i,!1))]}}])},[n("v-avatar",{attrs:{height:"100%",width:"auto"}},[t._t("logo")],2),n("v-app-bar-title",{staticClass:"amber--text text--darken-2 text-h5 text-sm-h3 pb-0"},[t._t("default")],2),n("v-spacer"),n("ColorSwitcher"),n("LocaleSwitcher")],1)}),[],!1,null,"4891313b",null));e.a=c.exports}}]);