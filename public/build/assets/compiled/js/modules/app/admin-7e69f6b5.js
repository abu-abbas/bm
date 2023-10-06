import{d as ge,e as be}from"../../vendor/compat-config-02944a74.js";import{x as he,q as ye,H as ke,I as we,J as xe,d as Ae,c as X,w as Oe,h as Se,V as Fn,G as Ee}from"../../vendor/vue-utils-19108aca.js";import"../../vendor/common-utils-d99d0b9d.js";import"../../vendor/bootstrap-utils-dce0738e.js";import"../../vendor/jquery-utils-4b2e19e3.js";const Pe=(t,n)=>{const e=t.__vccOpts||t;for(const[a,r]of n)e[a]=r;return e},_e={};function Ce(t,n){const e=he("router-view");return ye(),ke(e)}const Ie=Pe(_e,[["render",Ce]]),Ne="modulepreload",Te=function(t){return"/build/"+t},ln={},ut=function(n,e,a){if(!e||e.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=Te(i),i in ln)return;ln[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!a)for(let l=r.length-1;l>=0;l--){const m=r[l];if(m.href===i&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Ne,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((l,m)=>{c.addEventListener("load",l),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Dn=we({history:xe("admin"),scrollBehavior(t,n,e){return e||(t.hash?{el:t.hash,behavior:"smooth"}:{top:0})},routes:[{path:"",component:()=>ut(()=>import("../chunk/admin/index-ef493f92.js"),["assets/compiled/js/modules/chunk/admin/index-ef493f92.js","assets/compiled/js/vendor/vue-utils-19108aca.js","assets/compiled/js/vendor/bootstrap-utils-dce0738e.js","assets/compiled/js/vendor/jquery-utils-4b2e19e3.js","assets/compiled/js/vendor/compat-config-02944a74.js","assets/compiled/js/vendor/common-utils-d99d0b9d.js","assets/compiled/css/Index-1ceb79fb.css"]),meta:{auth:!0,access:!0},children:[{path:"",name:"admin.home",component:()=>ut(()=>import("../chunk/dashboard/admin-9f50c49c.js"),["assets/compiled/js/modules/chunk/dashboard/admin-9f50c49c.js","assets/compiled/js/vendor/vue-utils-19108aca.js","assets/compiled/js/vendor/compat-config-02944a74.js","assets/compiled/js/vendor/common-utils-d99d0b9d.js","assets/compiled/js/vendor/bootstrap-utils-dce0738e.js","assets/compiled/js/vendor/jquery-utils-4b2e19e3.js"]),meta:{auth:!0,access:!0}},{path:"settings/tenant",name:"settings.tenant",component:()=>ut(()=>import("../chunk/tenant/index-a981ad87.js"),["assets/compiled/js/modules/chunk/tenant/index-a981ad87.js","assets/compiled/js/vendor/vue-utils-19108aca.js","assets/compiled/js/vendor/compat-config-02944a74.js","assets/compiled/js/vendor/common-utils-d99d0b9d.js","assets/compiled/js/vendor/bootstrap-utils-dce0738e.js","assets/compiled/js/vendor/jquery-utils-4b2e19e3.js"]),meta:{auth:!0,access:!0}}]},{path:"/404",name:"admin.forbidden",component:()=>ut(()=>import("../chunk/errors/404-542f4801.js"),["assets/compiled/js/modules/chunk/errors/404-542f4801.js","assets/compiled/js/vendor/vue-utils-19108aca.js","assets/compiled/js/vendor/compat-config-02944a74.js","assets/compiled/js/vendor/common-utils-d99d0b9d.js","assets/compiled/js/vendor/bootstrap-utils-dce0738e.js","assets/compiled/js/vendor/jquery-utils-4b2e19e3.js"]),meta:{auth:!0,access:!0}}]});Dn.beforeEach((t,n,e)=>{if(t.meta.auth&&!ge.user&&(window.location="/"),!t.meta.access){e({name:"admin.forbidden"});return}e()});function cn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?cn(Object(e),!0).forEach(function(a){O(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):cn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function At(t){"@babel/helpers - typeof";return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},At(t)}function Le(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function un(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Me(t,n,e){return n&&un(t.prototype,n),e&&un(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function qt(t,n){return Re(t)||De(t,n)||jn(t,n)||$e()}function ft(t){return ze(t)||Fe(t)||jn(t)||je()}function ze(t){if(Array.isArray(t))return Ft(t)}function Re(t){if(Array.isArray(t))return t}function Fe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function De(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function jn(t,n){if(t){if(typeof t=="string")return Ft(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ft(t,n)}}function Ft(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mn=function(){},Kt={},$n={},Yn=null,Hn={mark:mn,measure:mn};try{typeof window<"u"&&(Kt=window),typeof document<"u"&&($n=document),typeof MutationObserver<"u"&&(Yn=MutationObserver),typeof performance<"u"&&(Hn=performance)}catch{}var Ye=Kt.navigator||{},dn=Ye.userAgent,vn=dn===void 0?"":dn,Y=Kt,k=$n,pn=Yn,mt=Hn;Y.document;var D=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Bn=~vn.indexOf("MSIE")||~vn.indexOf("Trident/"),dt,vt,pt,gt,bt,z="___FONT_AWESOME___",Dt=16,Un="fa",Wn="svg-inline--fa",V="data-fa-i2svg",jt="data-fa-pseudo-element",He="data-fa-pseudo-element-pending",Jt="data-prefix",Qt="data-icon",gn="fontawesome-i2svg",Be="async",Ue=["HTML","HEAD","STYLE","SCRIPT"],Vn=function(){try{return!0}catch{return!1}}(),y="classic",w="sharp",Zt=[y,w];function lt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[y]}})}var at=lt((dt={},O(dt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(dt,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),dt)),rt=lt((vt={},O(vt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(vt,w,{solid:"fass",regular:"fasr",light:"fasl"}),vt)),it=lt((pt={},O(pt,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(pt,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),pt)),We=lt((gt={},O(gt,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(gt,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),gt)),Ve=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Gn="fa-layers-text",Ge=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xe=lt((bt={},O(bt,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(bt,w,{900:"fass",400:"fasr",300:"fasl"}),bt)),Xn=[1,2,3,4,5,6,7,8,9,10],qe=Xn.concat([11,12,13,14,15,16,17,18,19,20]),Ke=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],U={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ot=new Set;Object.keys(rt[y]).map(ot.add.bind(ot));Object.keys(rt[w]).map(ot.add.bind(ot));var Je=[].concat(Zt,ft(ot),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",U.GROUP,U.SWAP_OPACITY,U.PRIMARY,U.SECONDARY]).concat(Xn.map(function(t){return"".concat(t,"x")})).concat(qe.map(function(t){return"w-".concat(t)})),nt=Y.FontAwesomeConfig||{};function Qe(t){var n=k.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Ze(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(k&&typeof k.querySelector=="function"){var ta=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ta.forEach(function(t){var n=qt(t,2),e=n[0],a=n[1],r=Ze(Qe(e));r!=null&&(nt[a]=r)})}var qn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Un,replacementClass:Wn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);var Q=u(u({},qn),nt);Q.autoReplaceSvg||(Q.observeMutations=!1);var d={};Object.keys(qn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){Q[t]=e,et.forEach(function(a){return a(d)})},get:function(){return Q[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){Q.cssPrefix=n,et.forEach(function(e){return e(d)})},get:function(){return Q.cssPrefix}});Y.FontAwesomeConfig=d;var et=[];function na(t){return et.push(t),function(){et.splice(et.indexOf(t),1)}}var $=Dt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ea(t){if(!(!t||!D)){var n=k.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=k.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return k.head.insertBefore(n,a),t}}var aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){for(var t=12,n="";t-- >0;)n+=aa[Math.random()*62|0];return n}function Z(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function tn(t){return t.classList?Z(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Kn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Kn(t[e]),'" ')},"").trim()}function Pt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function nn(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function ia(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function oa(t){var n=t.transform,e=t.width,a=e===void 0?Dt:e,r=t.height,i=r===void 0?Dt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Bn?f+="translate(".concat(n.x/$-a/2,"em, ").concat(n.y/$-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/$,"em), calc(-50% + ").concat(n.y/$,"em)) "):f+="translate(".concat(n.x/$,"em, ").concat(n.y/$,"em) "),f+="scale(".concat(n.size/$*(n.flipX?-1:1),", ").concat(n.size/$*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Jn(){var t=Un,n=Wn,e=d.cssPrefix,a=d.replacementClass,r=sa;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var bn=!1;function Tt(){d.autoAddCss&&!bn&&(ea(Jn()),bn=!0)}var fa={mixout:function(){return{dom:{css:Jn,insertCss:Tt}}},hooks:function(){return{beforeDOMElementCreation:function(){Tt()},beforeI2svg:function(){Tt()}}}},R=Y||{};R[z]||(R[z]={});R[z].styles||(R[z].styles={});R[z].hooks||(R[z].hooks={});R[z].shims||(R[z].shims=[]);var N=R[z],Qn=[],la=function t(){k.removeEventListener("DOMContentLoaded",t),Ot=1,Qn.map(function(n){return n()})},Ot=!1;D&&(Ot=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),Ot||k.addEventListener("DOMContentLoaded",la));function ca(t){D&&(Ot?setTimeout(t,0):Qn.push(t))}function ct(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Kn(t):"<".concat(n," ").concat(ra(a),">").concat(i.map(ct).join(""),"</").concat(n,">")}function hn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var ua=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Lt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?ua(e,r):e,f,c,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function ma(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function $t(t){var n=ma(t);return n.length===1?n[0].toString(16):null}function da(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function yn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Yt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=yn(n);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,yn(n)):N.styles[t]=u(u({},N.styles[t]||{}),i),t==="fas"&&Yt("fa",n)}var ht,yt,kt,q=N.styles,va=N.shims,pa=(ht={},O(ht,y,Object.values(it[y])),O(ht,w,Object.values(it[w])),ht),en=null,Zn={},te={},ne={},ee={},ae={},ga=(yt={},O(yt,y,Object.keys(at[y])),O(yt,w,Object.keys(at[w])),yt);function ba(t){return~Je.indexOf(t)}function ha(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ba(r)?r:null}var re=function(){var n=function(i){return Lt(q,function(o,s,f){return o[f]=Lt(s,i,{}),o},{})};Zn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),te=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ae=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in q||d.autoFetchSvg,a=Lt(va,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ne=a.names,ee=a.unicodes,en=_t(d.styleDefault,{family:d.familyDefault})};na(function(t){en=_t(t.styleDefault,{family:d.familyDefault})});re();function an(t,n){return(Zn[t]||{})[n]}function ya(t,n){return(te[t]||{})[n]}function W(t,n){return(ae[t]||{})[n]}function ie(t){return ne[t]||{prefix:null,iconName:null}}function ka(t){var n=ee[t],e=an("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H(){return en}var rn=function(){return{prefix:null,iconName:null,rest:[]}};function _t(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?y:e,r=at[a][t],i=rt[a][t]||rt[a][r],o=t in N.styles?t:null;return i||o||null}var kn=(kt={},O(kt,y,Object.keys(it[y])),O(kt,w,Object.keys(it[w])),kt);function Ct(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},O(n,y,"".concat(d.cssPrefix,"-").concat(y)),O(n,w,"".concat(d.cssPrefix,"-").concat(w)),n),o=null,s=y;(t.includes(i[y])||t.some(function(c){return kn[y].includes(c)}))&&(s=y),(t.includes(i[w])||t.some(function(c){return kn[w].includes(c)}))&&(s=w);var f=t.reduce(function(c,l){var m=ha(d.cssPrefix,l);if(q[l]?(l=pa[s].includes(l)?We[s][l]:l,o=l,c.prefix=l):ga[s].indexOf(l)>-1?(o=l,c.prefix=_t(l,{family:s})):m?c.iconName=m:l!==d.replacementClass&&l!==i[y]&&l!==i[w]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var g=o==="fa"?ie(c.iconName):{},b=W(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||b||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!q.far&&q.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},rn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(q.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=W(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=H()||"fas"),f}var wa=function(){function t(){Le(this,t),this.definitions={}}return Me(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),Yt(s,o[s]);var f=it[y][s];f&&Yt(f,o[s]),re()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[s][m]=c)}),e[s][f]=c}),e}}]),t}(),wn=[],K={},J={},xa=Object.keys(J);function Aa(t,n){var e=n.mixoutsTo;return wn=t,K={},Object.keys(J).forEach(function(a){xa.indexOf(a)===-1&&delete J[a]}),wn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),At(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}a.provides&&a.provides(J)}),e}function Ht(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=K[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function G(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=K[t]||[];r.forEach(function(i){i.apply(null,e)})}function F(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,n):void 0}function Bt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||H();if(n)return n=W(e,n)||n,hn(oe.definitions,e,n)||hn(N.styles,e,n)}var oe=new wa,Oa=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,G("noAuto")},Sa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(G("beforeI2svg",n),F("pseudoElements2svg",n),F("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ca(function(){Pa({autoReplaceSvgRoot:e}),G("watch",n)})}},Ea={icon:function(n){if(n===null)return null;if(At(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:W(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=_t(n[0]);return{prefix:a,iconName:W(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Ve))){var r=Ct(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=H();return{prefix:i,iconName:W(i,n)||n}}}},C={noAuto:Oa,config:d,dom:Sa,parse:Ea,library:oe,findIconDefinition:Bt,toHtml:ct},Pa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?k:e;(Object.keys(N.styles).length>0||d.autoFetchSvg)&&D&&d.autoReplaceSvg&&C.dom.i2svg({node:a})};function It(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ct(a)})}}),Object.defineProperty(t,"node",{get:function(){if(D){var a=k.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function _a(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(nn(o)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=Pt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Ca(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function on(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,g=t.watchable,b=g===void 0?!1:g,S=a.found?a:e,E=S.width,P=S.height,v=r==="fak",p=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),h={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(P)})},x=v&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/P*16*.0625,"em")}:{};b&&(h.attributes[V]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||st())},children:[f]}),delete h.attributes.title);var A=u(u({},h),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},x),m.styles)}),T=a.found&&e.found?F("generateAbstractMask",A)||{children:[],attributes:{}}:F("generateAbstractIcon",A)||{children:[],attributes:{}},I=T.children,Nt=T.attributes;return A.children=I,A.attributes=Nt,s?Ca(A):_a(A)}function xn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[V]="");var l=u({},o.styles);nn(r)&&(l.transform=oa({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var m=Pt(l);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[n]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Ia(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Pt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Mt=N.styles;function Ut(t){var n=t[0],e=t[1],a=t.slice(4),r=qt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(U.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(U.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(U.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Na={found:!1,width:512,height:512};function Ta(t,n){!Vn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Wt(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=H()),new Promise(function(a,r){if(F("missingIconAbstract"),e==="fa"){var i=ie(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Mt[n]&&Mt[n][t]){var o=Mt[n][t];return a(Ut(o))}Ta(t,n),a(u(u({},Na),{},{icon:d.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}var An=function(){},Vt=d.measurePerformance&&mt&&mt.mark&&mt.measure?mt:{mark:An,measure:An},tt='FA "6.4.2"',La=function(n){return Vt.mark("".concat(tt," ").concat(n," begins")),function(){return se(n)}},se=function(n){Vt.mark("".concat(tt," ").concat(n," ends")),Vt.measure("".concat(tt," ").concat(n),"".concat(tt," ").concat(n," begins"),"".concat(tt," ").concat(n," ends"))},sn={begin:La,end:se},wt=function(){};function On(t){var n=t.getAttribute?t.getAttribute(V):null;return typeof n=="string"}function Ma(t){var n=t.getAttribute?t.getAttribute(Jt):null,e=t.getAttribute?t.getAttribute(Qt):null;return n&&e}function za(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ra(){if(d.autoReplaceSvg===!0)return xt.replace;var t=xt[d.autoReplaceSvg];return t||xt.replace}function Fa(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function Da(t){return k.createElement(t)}function fe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Fa:Da:e;if(typeof t=="string")return k.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(fe(o,{ceFn:a}))}),r}function ja(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var xt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(fe(r),e)}),e.getAttribute(V)===null&&d.keepOriginalSource){var a=k.createComment(ja(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~tn(e).indexOf(d.replacementClass))return xt.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ct(s)}).join(`
`);e.setAttribute(V,""),e.innerHTML=o}};function Sn(t){t()}function le(t,n){var e=typeof n=="function"?n:wt;if(t.length===0)e();else{var a=Sn;d.mutateApproach===Be&&(a=Y.requestAnimationFrame||Sn),a(function(){var r=Ra(),i=sn.begin("mutate");t.map(r),i(),e()})}}var fn=!1;function ce(){fn=!0}function Gt(){fn=!1}var St=null;function En(t){if(pn&&d.observeMutations){var n=t.treeCallback,e=n===void 0?wt:n,a=t.nodeCallback,r=a===void 0?wt:a,i=t.pseudoElementsCallback,o=i===void 0?wt:i,s=t.observeMutationsRoot,f=s===void 0?k:s;St=new pn(function(c){if(!fn){var l=H();Z(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!On(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&On(m.target)&&~Ke.indexOf(m.attributeName))if(m.attributeName==="class"&&Ma(m.target)){var g=Ct(tn(m.target)),b=g.prefix,S=g.iconName;m.target.setAttribute(Jt,b||l),S&&m.target.setAttribute(Qt,S)}else za(m.target)&&r(m.target)})}}),D&&St.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $a(){St&&St.disconnect()}function Ya(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ha(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ct(tn(t));return r.prefix||(r.prefix=H()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ya(r.prefix,t.innerText)||an(r.prefix,$t(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ba(t){var n=Z(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||st()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ua(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ha(t),a=e.iconName,r=e.prefix,i=e.rest,o=Ba(t),s=Ht("parseNodeAttributes",{},t),f=n.styleParser?Ya(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Wa=N.styles;function ue(t){var n=d.autoReplaceSvg==="nest"?Pn(t,{styleParser:!1}):Pn(t);return~n.extra.classes.indexOf(Gn)?F("generateLayersText",t,n):F("generateSvgReplacementMutation",t,n)}var B=new Set;Zt.map(function(t){B.add("fa-".concat(t))});Object.keys(at[y]).map(B.add.bind(B));Object.keys(at[w]).map(B.add.bind(B));B=ft(B);function _n(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var e=k.documentElement.classList,a=function(m){return e.add("".concat(gn,"-").concat(m))},r=function(m){return e.remove("".concat(gn,"-").concat(m))},i=d.autoFetchSvg?B:Zt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Wa));i.includes("fa")||i.push("fa");var o=[".".concat(Gn,":not([").concat(V,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Z(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=sn.begin("onTree"),c=s.reduce(function(l,m){try{var g=ue(m);g&&l.push(g)}catch(b){Vn||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(g){le(g,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(g){f(),m(g)})})}function Va(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ue(t).then(function(e){e&&le([e],n)})}function Ga(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Bt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Bt(r||{})),t(a,u(u({},e),{},{mask:r}))}}var Xa=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?L:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,m=e.title,g=m===void 0?null:m,b=e.titleId,S=b===void 0?null:b,E=e.classes,P=E===void 0?[]:E,v=e.attributes,p=v===void 0?{}:v,h=e.styles,x=h===void 0?{}:h;if(n){var A=n.prefix,T=n.iconName,I=n.icon;return It(u({type:"icon"},n),function(){return G("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(g?p["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(S||st()):(p["aria-hidden"]="true",p.focusable="false")),on({icons:{main:Ut(I),mask:f?Ut(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:T,transform:u(u({},L),r),symbol:o,title:g,maskId:l,titleId:S,extra:{attributes:p,styles:x,classes:P}})})}},qa={mixout:function(){return{icon:Ga(Xa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=_n,e.nodeCallback=Va,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?k:a,i=e.callback,o=i===void 0?function(){}:i;return _n(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,m=a.maskId,g=a.extra;return new Promise(function(b,S){Promise.all([Wt(r,s),l.iconName?Wt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var P=qt(E,2),v=P[0],p=P[1];b([e,on({icons:{main:v,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(S)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Pt(s);f.length>0&&(r.style=f);var c;return nn(o)&&(c=F("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Ka={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return It({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ft(i)).join(" ")},children:o}]})}}}},Ja={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,m=l===void 0?{}:l;return It({type:"counter",content:e},function(){return G("beforeDOMElementCreation",{content:e,params:a}),Ia({content:e.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ft(s))}})})}}}},Qa={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,m=l===void 0?{}:l,g=a.styles,b=g===void 0?{}:g;return It({type:"text",content:e},function(){return G("beforeDOMElementCreation",{content:e,params:a}),xn({content:e,transform:u(u({},L),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ft(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Bn){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,xn({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Za=new RegExp('"',"ug"),Cn=[1105920,1112319];function tr(t){var n=t.replace(Za,""),e=da(n,0),a=e>=Cn[0]&&e<=Cn[1],r=n.length===2?n[0]===n[1]:!1;return{value:$t(r?n[0]:n),isSecondary:a||r}}function In(t,n){var e="".concat(He).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=Z(t.children),o=i.filter(function(I){return I.getAttribute(jt)===n})[0],s=Y.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Ge),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(f[2])?w:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rt[g][f[2].toLowerCase()]:Xe[g][c],S=tr(m),E=S.value,P=S.isSecondary,v=f[0].startsWith("FontAwesome"),p=an(b,E),h=p;if(v){var x=ka(E);x.iconName&&x.prefix&&(p=x.iconName,b=x.prefix)}if(p&&!P&&(!o||o.getAttribute(Jt)!==b||o.getAttribute(Qt)!==h)){t.setAttribute(e,h),o&&t.removeChild(o);var A=Ua(),T=A.extra;T.attributes[jt]=n,Wt(p,b).then(function(I){var Nt=on(u(u({},A),{},{icons:{main:I,mask:rn()},prefix:b,iconName:h,extra:T,watchable:!0})),j=k.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=Nt.map(function(pe){return ct(pe)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function nr(t){return Promise.all([In(t,"::before"),In(t,"::after")])}function er(t){return t.parentNode!==document.head&&!~Ue.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(jt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Nn(t){if(D)return new Promise(function(n,e){var a=Z(t.querySelectorAll("*")).filter(er).map(nr),r=sn.begin("searchPseudoElements");ce(),Promise.all(a).then(function(){r(),Gt(),n()}).catch(function(){r(),Gt(),e()})})}var ar={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Nn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?k:a;d.searchPseudoElements&&Nn(r)}}},Tn=!1,rr={mixout:function(){return{dom:{unwatch:function(){ce(),Tn=!0}}}},hooks:function(){return{bootstrap:function(){En(Ht("mutationObserverCallbacks",{}))},noAuto:function(){$a()},watch:function(e){var a=e.observeMutationsRoot;Tn?Gt():En(Ht("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ln=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},ir={mixout:function(){return{parse:{transform:function(e){return Ln(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Ln(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},zt={x:0,y:0,width:"100%",height:"100%"};function Mn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function or(t){return t.tag==="g"?t.children:[t]}var sr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Ct(r.split(" ").map(function(o){return o.trim()})):rn();return i.prefix||(i.prefix=H()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,c=i.width,l=i.icon,m=o.width,g=o.icon,b=ia({transform:f,containerWidth:m,iconWidth:c}),S={tag:"rect",attributes:u(u({},zt),{},{fill:"white"})},E=l.children?{children:l.children.map(Mn)}:{},P={tag:"g",attributes:u({},b.inner),children:[Mn(u({tag:l.tag,attributes:u(u({},l.attributes),b.path)},E))]},v={tag:"g",attributes:u({},b.outer),children:[P]},p="mask-".concat(s||st()),h="clip-".concat(s||st()),x={tag:"mask",attributes:u(u({},zt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:or(g)},x]};return a.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},zt)}),{children:a,attributes:r}}}},fr={provides:function(n){var e=!1;Y.matchMedia&&(e=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},lr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},cr=[fa,qa,Ka,Ja,Qa,ar,rr,ir,sr,fr,lr];Aa(cr,{mixoutsTo:C});C.noAuto;C.config;var ur=C.library;C.dom;var Xt=C.parse;C.findIconDefinition;C.toHtml;var mr=C.icon;C.layer;C.text;C.counter;function zn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function M(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?zn(Object(e),!0).forEach(function(a){_(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):zn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Et(t)}function _(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function dr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function vr(t,n){if(t==null)return{};var e=dr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},me={exports:{}};(function(t){(function(n){var e=function(v,p,h){if(!c(p)||m(p)||g(p)||b(p)||f(p))return p;var x,A=0,T=0;if(l(p))for(x=[],T=p.length;A<T;A++)x.push(e(v,p[A],h));else{x={};for(var I in p)Object.prototype.hasOwnProperty.call(p,I)&&(x[v(I,h)]=e(v,p[I],h))}return x},a=function(v,p){p=p||{};var h=p.separator||"_",x=p.split||/(?=[A-Z])/;return v.split(x).join(h)},r=function(v){return S(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return a(v,p).toLowerCase()},s=Object.prototype.toString,f=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},l=function(v){return s.call(v)=="[object Array]"},m=function(v){return s.call(v)=="[object Date]"},g=function(v){return s.call(v)=="[object RegExp]"},b=function(v){return s.call(v)=="[object Boolean]"},S=function(v){return v=v-0,v===v},E=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(x,A){return h(x,v,A)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return e(E(r,p),v)},decamelizeKeys:function(v,p){return e(E(o,p),v,p)},pascalizeKeys:function(v,p){return e(E(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:n.humps=P})(pr)})(me);var gr=me.exports,br=["class","style"];function hr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=gr.camelize(e.slice(0,a)),i=e.slice(a+1).trim();return n[r]=i,n},{})}function yr(t){return t.split(/\s+/).reduce(function(n,e){return n[e]=!0,n},{})}function de(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return de(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.class=yr(l);break;case"style":f.style=hr(l);break;default:f.attrs[c]=l}return f},{attrs:{},class:{},style:{}});e.class;var i=e.style,o=i===void 0?{}:i,s=vr(e,br);return Se(t.tag,M(M(M({},n),{},{class:r.class,style:M(M({},r.style),o)},r.attrs),s),a)}var ve=!1;try{ve=!0}catch{}function kr(){if(!ve&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Rt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?_({},t,n):{}}function wr(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},_(n,"fa-".concat(t.size),t.size!==null),_(n,"fa-rotate-".concat(t.rotation),t.rotation!==null),_(n,"fa-pull-".concat(t.pull),t.pull!==null),_(n,"fa-swap-opacity",t.swapOpacity),_(n,"fa-bounce",t.bounce),_(n,"fa-shake",t.shake),_(n,"fa-beat",t.beat),_(n,"fa-fade",t.fade),_(n,"fa-beat-fade",t.beatFade),_(n,"fa-flash",t.flash),_(n,"fa-spin-pulse",t.spinPulse),_(n,"fa-spin-reverse",t.spinReverse),n);return Object.keys(e).map(function(a){return e[a]?a:null}).filter(function(a){return a})}function Rn(t){if(t&&Et(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xt.icon)return Xt.icon(t);if(t===null)return null;if(Et(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var xr=Ae({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,e){var a=e.attrs,r=X(function(){return Rn(n.icon)}),i=X(function(){return Rt("classes",wr(n))}),o=X(function(){return Rt("transform",typeof n.transform=="string"?Xt.transform(n.transform):n.transform)}),s=X(function(){return Rt("mask",Rn(n.mask))}),f=X(function(){return mr(r.value,M(M(M(M({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title}))});Oe(f,function(l){if(!l)return kr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=X(function(){return f.value?de(f.value.abstract[0],{},a):null});return function(){return c.value}}}),Ar={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},Or=Ar,Sr={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Er={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},Pr={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},_r={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Cr={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]};function Ir(){return{addLibrary:(...n)=>ur.add(n),FontAwesomeIcon:xr,faBars:Sr,faHouse:_r,faHeart:Pr,faSquare:Cr,faSignOutAlt:Or,faPeopleGroup:Er}}const{addLibrary:Nr,FontAwesomeIcon:Tr,faBars:Lr,faHouse:Mr,faHeart:zr,faSquare:Rr,faSignOutAlt:Fr,faPeopleGroup:Dr}=Ir();be(Fn);Nr(Lr,Mr,zr,Rr,Fr,Dr);Fn.component("FontAwesomeIcon",Tr);Ee(Ie).use(Dn).mount("#app");export{Pe as _};
