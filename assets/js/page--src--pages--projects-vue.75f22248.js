(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{El65:function(t,e,n){},JkHd:function(t,e,n){},OM7E:function(t,e,n){"use strict";n("JkHd")},fx0o:function(t,e,n){"use strict";n.r(e);var i=n("uQO6"),r=n("vVU0"),a={components:{sSideBar:i.a,sAppBar:r.a},data:function(){return{textcolor:"orange",miniVariant:!1}},metaInfo:function(){return{title:this.$i18n.t("meta.title")}},created:function(){},methods:{},computed:{}},s=(n("kaYr"),n("KHd+")),o=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("simple",[e("s-side-bar",{attrs:{miniVariant:this.miniVariant}}),e("s-app-bar"),e("v-main",[e("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"projects",height:"100%"}},[e("v-card",{staticClass:"d-flex justify-center align-center flex-column",attrs:{height:"100%",outlined:"",tile:""}},[e("div",[e("clock",{attrs:{size:"300px",border:"0",bg:"orange"}})],1),e("div",[this._v("In process...")])])],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports},kaYr:function(t,e,n){"use strict";n("El65")},uQO6:function(t,e,n){"use strict";n("1AHG"),n("DQNa"),n("07d7"),n("JfAA"),n("sMBO");var i={props:[],data:function(){return{}},methods:{go:function(t,e){e==this.$route.path.substring(3)?(this.$vuetify.goTo("#"+t,"easeInOutCubic"),this.mini):this.$router.push({path:this.$tp(e,this.$i18n.locale.toString(),!0)})}},computed:{mini:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return!0;case"md":case"lg":case"xl":return!1}return!1}},created:function(){}},r=n("KHd+"),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"d-print-none",attrs:{app:"",dark:t.$vuetify.theme.dark,clipped:"","mini-variant":t.mini,permanent:"",bottom:""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}}},[n("v-list",{attrs:{dense:""}},t._l(t.$t("cv"),(function(e,i){return n("v-list-item",{key:i,attrs:{link:""},on:{click:function(n){return t.go(i,e.page)}}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)}),[],!1,null,null,null);e.a=a.exports},vVU0:function(t,e,n){"use strict";n("sMBO");var i=n("+ZcM"),r=(n("6cQw"),{name:"ColorSwitcher",data:function(){return{icon:"mdi-theme-light-dark"}},methods:{colorChange:function(){var t=!this.$vuetify.theme.dark;this.$vuetify.theme.dark=t,localStorage.setItem("theme",JSON.stringify(t?"dark":"light"))}},computed:{themeIcon:function(){return this.$vuetify.theme.dark?"mdi-brightness-7":"mdi-brightness-4"}},created:function(){var t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;null==localStorage.getItem("theme")?this.$vuetify.theme.dark=t:this.$vuetify.theme.dark='"dark"'==localStorage.getItem("theme")}}),a=n("KHd+"),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"d-print-none",attrs:{icon:""},on:{click:function(e){return t.colorChange()}}},"v-btn",r,!1),i),[n("v-icon",[t._v(t._s(t.themeIcon))])],1)]}}])})}),[],!1,null,null,null).exports,o={components:{LocaleSwitcher:i.a,ColorSwitcher:s},props:{bgimage:""},data:function(){return{miniVariant:!1}},computed:{size:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return 40;case"md":return 80;case"lg":case"xl":return 120}}}},c=(n("OM7E"),Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"#363636",dark:"","clipped-left":"","shrink-on-scroll":"",prominent:"",src:t.bgimage,"fade-img-on-scroll":"","scroll-threshold":"500"},scopedSlots:t._u([{key:"img",fn:function(e){var i=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(53,60,79,0.8), rgba(73,80,99,0.7)"}},"v-img",i,!1))]}}])},[n("v-avatar",{attrs:{height:"100%",width:"auto"}},[t._t("logo")],2),n("v-app-bar-title",{staticClass:"amber--text text--darken-2 text-h5 text-sm-h3 pb-0"},[t._t("default")],2),n("v-spacer"),n("ColorSwitcher"),n("LocaleSwitcher")],1)}),[],!1,null,"4891313b",null));e.a=c.exports}}]);