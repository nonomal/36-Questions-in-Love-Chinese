(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var m=this||self;function n(a){return a};function aa(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var q;var r=class{constructor(a,b){this.g=b===ba?a:""}};r.prototype.toString=function(){return this.g+""};var ba={};function ca(a){if(void 0===q){var b=null;var c=m.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch(d){m.console&&m.console.error(d.message)}q=b}else q=b}a=(b=q)?b.createScriptURL(a):a;return new r(a,ba)};function t(a){t[" "](a);return a}t[" "]=function(){};var da={},u=null;var ea="function"===typeof Uint8Array;function fa(a,b,c){return"object"===typeof a?ea&&!Array.isArray(a)&&a instanceof Uint8Array?c(a):ha(a,b,c):b(a)}function ha(a,b,c){if(Array.isArray(a)){var d=Array(a.length);for(var e=0;e<a.length;e++){var f=a[e];null!=f&&(d[e]=fa(f,b,c))}Array.isArray(a)&&a[ia]&&v(d);return d}d={};for(e in a)f=a[e],null!=f&&(d[e]=fa(f,b,c));return d} 
function ja(a){return ha(a,b=>"number"===typeof b?isFinite(b)?b:String(b):b,b=>{var c;void 0===c&&(c=0);if(!u){u={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));da[f]=g;for(var l=0;l<g.length;l++){var k=g[l];void 0===u[k]&&(u[k]=l)}}}c=da[c];d=Array(Math.floor(b.length/3));e=c[64]||"";for(f=g=0;g<b.length-2;g+=3){var h=b[g],p=b[g+1];k=b[g+2];l=c[h>>2];h=c[(h&3)<<4|p>>4];p=c[(p&15)<< 
2|k>>6];k=c[k&63];d[f++]=l+h+p+k}l=0;k=e;switch(b.length-g){case 2:l=b[g+1],k=c[(l&15)<<2]||e;case 1:b=b[g],d[f]=c[b>>2]+c[(b&3)<<4|l>>4]+k+e}return d.join("")})}const ia=Symbol("IS_REPEATED_FIELD");function v(a){Array.isArray(a)&&!Object.isFrozen(a)&&(a[ia]=!0);return a};let na;function oa(a,b){var c=na;na=null;a||(a=c);c=this.constructor.V;a||(a=c?[c]:[]);this.j=c?0:-1;this.h=null;this.g=a;a:{c=this.g.length;a=c-1;if(c&&(c=this.g[a],!(null===c||"object"!=typeof c||Array.isArray(c)||ea&&c instanceof Uint8Array))){this.l=a-this.j;this.i=c;break a}this.l=Number.MAX_VALUE}if(b)for(a=0;a<b.length;a++)if(c=b[a],c<this.l){c+=this.j;var d=this.g[c];d?v(d):this.g[c]=w}else d=this.l+this.j,this.g[d]||(this.i=this.g[d]={}),(d=this.i[c])?v(d):this.i[c]=w}const w=Object.freeze(v([])); 
function A(a,b){if(-1===b)return null;if(b<a.l){b+=a.j;var c=a.g[b];return c!==w?c:a.g[b]=v([])}if(a.i)return c=a.i[b],c!==w?c:a.i[b]=v([])}function B(a,b){a=A(a,b);a=null==a?a:!!a;return null==a?!1:a}function pa(a){var b=qa;a.h||(a.h={});if(!a.h[1]){let c=A(a,1);c&&(a.h[1]=new b(c))}return a.h[1]}oa.prototype.toJSON=function(){const a=ra(this,!1);return ja(a)}; 
function ra(a,b){if(a.h)for(let c in a.h){const d=a.h[c];if(Array.isArray(d))for(let e=0;e<d.length;e++)d[e]&&ra(d[e],b);else d&&ra(d,b)}return a.g}function sa(a,b){a=A(a,b);return null==a?0:a}function F(a,b){a=A(a,b);return null==a?"":a};var qa=class extends oa{constructor(a){super(a,ta)}},ta=[28];var va=class extends oa{constructor(a){super(a,ua)}},ua=[21];var wa={passive:!0},xa=aa(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function G(a,b,c,d){if(a.addEventListener){var e=a.addEventListener;d=d?d.passive&&xa()?d:d.capture||!1:!1;e.call(a,b,c,d)}};function H(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function ya(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):za(b,a)[0]||null);return a||null} 
function za(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,l;if(l="function"==typeof g.split)l=0<=Array.prototype.indexOf.call(g.split(/\s+/),b,void 0);l&&(f[d++]=a)}f.length=d;return f}return e}function Aa(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var Ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function I(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{t(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ca(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};function Da(a,b){a.google_image_requests||(a.google_image_requests=[]);const c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};let Ea=0;function Fa(a){return(a=Ga(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Ga(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)} 
function Ha(){if(!(.01<Math.random())){var a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${Fa(60)}&sample=${.01}`,b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Da(b,a)}};var J=document,K=window;function Ia(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function Ja(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ia(a).match(/\S+/g)||[],b=0<=Array.prototype.indexOf.call(a,b,void 0));return b}function L(a,b){if(a.classList)a.classList.add(b);else if(!Ja(a,b)){var c=Ia(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};class Ka{constructor(a){this.g=(this.serializedAttributionData=a)?new va(a):null;this.isMutableImpression=null!=A(this.g,1)&&!!B(pa(this.g),33);F(this.g,30);this.S=!!B(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=A(this.g,1);this.K=!!B(this.g,4);this.N=!!B(this.g,6);this.J=!!B(this.g,13);sa(this.g,8);this.creativeIndexSuffix=1<sa(this.g,8)?sa(this.g,7).toString():"";this.T=!!B(this.g,17);this.P=!!B(this.g,18);this.I=!!B(this.g,14);this.enableMultiplexThirdPartyAttribution=!!B(this.g,32);this.B= 
!!B(this.g,15);this.U=!!B(this.g,31);this.O=1==B(this.g,9);this.openAttributionInline=1==B(this.g,10);this.isMobileDevice=!!B(this.g,12);this.R=null;this.M=(a=J.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.D=""!==this.creativeIndexSuffix)&&void 0===K.goog_multislot_cache&&(K.goog_multislot_cache={});if(this.D&&!this.M){if(a=K.goog_multislot_cache.hd,void 0===a){a=!1;var b=J.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom- 
b.top)a=!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.C=a;this.u=H("abgcp"+this.creativeIndexSuffix);this.s=H("abgc"+this.creativeIndexSuffix);this.h=H("abgs"+this.creativeIndexSuffix);H("abgl"+this.creativeIndexSuffix);this.o=H("abgb"+this.creativeIndexSuffix);this.A=H("abgac"+this.creativeIndexSuffix);H("mute_panel"+this.creativeIndexSuffix); 
this.v=ya("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.v&&!!this.I&&!ya("goog_delegate_disabled")&&!this.B;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(let d=0;d<c.length;d++){const e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.l=a;this.j=this.isDelegateAttributionActive?this.v:H("cbb"+this.creativeIndexSuffix);this.L=this.C?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu= 
!!this.j&&Ja(this.j,"goog_dismissable_menu");this.m=null;this.F=0;this.i=this.isDelegateAttributionActive?this.v:this.N&&this.u?this.u:this.s;this.H=!!B(this.g,19);this.adbadgeEnabled=!!B(this.g,24);this.enableNativeJakeUi=!!B(this.g,27);F(this.g,33)}};class La{constructor(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c}};var Ma=(a,b)=>{if(a)for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Na=!!window.google_async_iframe_id;let M=Na&&window.parent||window;var O=(a,b)=>{a&&Ma(b,(c,d)=>{a.style[d]=c})};class Sa{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Ta=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Ua=class{constructor(a,b){this.g=a;this.h=b}},Va=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};function P(a,b){const c={};c[a]=b;return[c]}function Wa(a,b,c,d,e){const f=[];Ca(a,function(g,l){(g=Xa(g,b,c,d,e))&&f.push(l+"="+g)});return f.join(b)} 
function Xa(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Xa(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Wa(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function Ya(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function Za(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=Ya(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],l=a.h[g];for(let k=0;k<l.length;k++){if(!d){c=null==c?g:c;break}let h=Wa(l[k],a.i,",$");if(h){h=e+h;if(d>=h.length){d-=h.length;b+=h;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class $a{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function ab(a,b,c,d,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof $a?f=c:(f=new $a,Ca(c,(l,k)=>{var h=f,p=h.j++;l=P(k,l);h.g.push(p);h.h[p]=l}));const g=Za(f,a.h,"/pagead/gen_204?id="+b+"&");g&&Da(m,g)}catch(f){}}class bb{constructor(){this.h="http:"===K.location.protocol?"http:":"https:";this.g=Math.random()}};let Q=null;var cb=()=>{const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},db=()=>{const a=m.performance;return a&&a.now?a.now():null};class eb{constructor(a,b){var c=db()||cb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const R=m.performance,fb=!!(R&&R.mark&&R.measure&&R.clearMarks),S=aa(()=>{var a;if(a=fb){var b;if(null===Q){Q="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(Q=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Q;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function gb(a){a&&R&&S()&&(R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class hb{constructor(){var a=T;this.h=[];this.i=a||m;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=S()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new eb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;R&&S()&&R.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(db()||cb())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;R&&S()&&R.mark(b);!this.g||2048<this.h.length|| 
this.h.push(a)}}};function ib(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function jb(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{gb(e),c=a.m(b,new Sa(f,{message:ib(f)}),void 0,void 0)}catch(g){a.j(217,g)}if(c){let g,l;null==(g=window.console)||null==(l=g.error)||l.call(g,f)}else throw f;}return d}function kb(a,b){var c=U;return(...d)=>jb(c,a,()=>b.apply(void 0,d))} 
class lb{constructor(){var a=mb;this.l=nb;this.h=null;this.m=this.j;this.g=void 0===a?null:a;this.i=!1}j(a,b,c,d,e){e=e||"jserror";let f;try{const x=new $a;var g=x;g.g.push(1);g.h[1]=P("context",a);b.error&&b.meta&&b.id||(b=new Sa(b,{message:ib(b)}));if(b.msg){g=x;var l=b.msg.substring(0,512);g.g.push(2);g.h[2]=P("msg",l)}var k=b.meta||{};b=k;if(this.h)try{this.h(b)}catch(C){}if(d)try{d(b)}catch(C){}d=x;k=[k];d.g.push(3);d.h[3]=k;d=m;k=[];b=null;do{var h=d;if(I(h)){var p=h.location.href;b=h.document&& 
h.document.referrer||null}else p=b,b=null;k.push(new Va(p||""));try{d=h.parent}catch(C){d=null}}while(d&&h!=d);for(let C=0,Oa=k.length-1;C<=Oa;++C)k[C].depth=Oa-C;h=m;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==k.length-1)for(p=1;p<k.length;++p){var D=k[p];D.url||(D.url=h.location.ancestorOrigins[p-1]||"",D.G=!0)}var y=k;let X=new Va(m.location.href,!1);h=null;const ka=y.length-1;for(D=ka;0<=D;--D){var z=y[D];!h&&Ta.test(z.url)&&(h=z);if(z.url&&!z.G){X=z;break}}z= 
null;const vb=y.length&&y[ka].url;0!=X.depth&&vb&&(z=y[ka]);f=new Ua(X,z);if(f.h){y=x;var E=f.h.url||"";y.g.push(4);y.h[4]=P("top",E)}var la={url:f.g.url||""};if(f.g.url){var ma=f.g.url.match(Ba),N=ma[1],Pa=ma[3],Qa=ma[4];E="";N&&(E+=N+":");Pa&&(E+="//",E+=Pa,Qa&&(E+=":"+Qa));var Ra=E}else Ra="";N=x;la=[la,{url:Ra}];N.g.push(5);N.h[5]=la;ab(this.l,e,x,this.i,c)}catch(x){try{ab(this.l,e,{context:"ecmserr",rctx:a,msg:ib(x),url:f&&f.g.url},this.i,c)}catch(X){}}return!0}};let nb,U;if(Na&&!I(M)){let a="."+J.domain;try{for(;2<a.split(".").length&&!I(M);)J.domain=a=a.substr(a.indexOf(".")+1),M=window.parent}catch(b){}I(M)||(M=window)}const T=M,mb=new hb;var ob=()=>{if(!T.google_measure_js_timing){var a=mb;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(S()&&Array.prototype.forEach.call(a.h,gb,void 0),a.h.length=0)}};nb=new bb;"number"!==typeof T.google_srt&&(T.google_srt=Math.random());var pb=nb,qb=T.google_srt;0<=qb&&1>=qb&&(pb.g=qb);U=new lb; 
U.h=a=>{const b=Ea;0!==b&&(a.jc=String(b),a.shv=Fa(b))};U.i=!0;"complete"==T.document.readyState?ob():mb.g&&G(T,"load",()=>{ob()});var V=(a,b)=>kb(a,b);function rb(a){if(a.g.l&&a.g.P){const b=pa(a.g.g);b&&null!=A(b,5)&&null!=A(b,6)&&(a.i=new La(F(b,5),F(b,6),F(b,19)));G(a.g.l,"click",V(452,()=>{if(!a.j&&(a.j=!0,a.i)){var c=a.i;let d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);Da(window,d)}}))}} 
function sb(a){if(a.g.S)G(a.g.i,"click",V(365,b=>{const c=K.goog_interstitial_display;c&&(c(b),b&&(b.stopPropagation(),b.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)G(a.g.i,"click",()=>a.h());else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.j&&(G(a.g.j,"click",()=>a.h()),G(a.g.j,"keydown",b=>{"Enter"!==b.code&&"Space"!==b.code||a.h()})),a.g.U&&a.g.h&&G(a.g.h,"click",()=>a.h())),a.g.K)tb(a);else{G(a.g.i,"mouseover",V(367,()=>tb(a)));G(a.g.i,"mouseout",V(369, 
()=>ub(a,500)));G(a.g.i,"touchstart",V(368,()=>tb(a)),wa);const b=V(370,()=>ub(a,4E3));G(a.g.i,"mouseup",b);G(a.g.i,"touchend",b);G(a.g.i,"touchcancel",b);a.g.l&&G(a.g.l,"click",V(371,c=>a.preventDefault(c)))}}function tb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.F=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function ub(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(()=>wb(a),b)} 
function xb(a){const b=a.g.A;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(()=>{L(b,"abgacfo")})}function wb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
class yb{constructor(a,b){this.g=a;this.h=b;this.g.T||(this.j=!1,this.i=null,!this.g.C||this.g.adbadgeEnabled||this.g.L?rb(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(O(this.g.o,a),O(this.g.h,a),O(this.g.u,b),O(this.g.s,b)):O(this.g.s,a)),sb(this),this.g.enableNativeJakeUi&&L(this.g.A,"abgnac"),this.g.isDelegateAttributionActive?(L(document.body,"goog_delegate_active"),L(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.j&&Aa(this.g.j),setTimeout(()=>{L(document.body, 
"jar")},this.g.J?750:100)),this.g.B&&L(document.body,"goog_delegate_disabled"),this.g.H&&K.addEventListener("load",()=>this.h()))}preventDefault(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.F)a.preventDefault?a.preventDefault():a.returnValue=!1;else if(this.g.openAttributionInline){var b=this.g.l.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openAttribution&&(window.openAttribution(b),a.preventDefault? 
a.preventDefault():a.returnValue=!1)}else this.g.O&&(b=this.g.l.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openSystemBrowser&&(window.openSystemBrowser(b),a.preventDefault?a.preventDefault():a.returnValue=!1))}};function zb(a){if(!a.g&&(a.g=!0,K.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new Ka(a);new b(a)}}class Ab{constructor(a){var b=Bb;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;ya("goog_delegate_deferred")?void 0!==K.goog_delegate_deferred_token?zb(this):(a=()=>{zb(this)},K.goog_delegate_deferred_token=a,setTimeout(a,5E3)):zb(this)}};var Cb=(a=[])=>{m.google_logging_queue||(m.google_logging_queue=[]);m.google_logging_queue.push([11,a])};class Db{constructor(){this.promise=new Promise(a=>{this.g=a})}};var Eb=class{constructor(){const a=new Db;this.promise=a.promise;this.resolve=a.g}};function Fb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Eb,b&&b());return a[5]} 
function Gb(a,b){return Fb(a,function(){var c=a.document;const d=c.createElement("script");d.src=b instanceof r&&b.constructor===r?b.g:"type_error:TrustedResourceUrl";var e;const f=(d.ownerDocument&&d.ownerDocument.defaultView||window).document,g=null===(e=f.querySelector)||void 0===e?void 0:e.call(f,"script[nonce]");(e=g?g.nonce||g.getAttribute("nonce")||"":"")&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function Hb(a){jb(U,373,()=>{wb(a.h);xb(a.h)});Gb(window,ca(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+F(a.g.g,33)+"/abg_survey.js"}`)).then(b=>{b.createAttributionCard(a.g);a.g.R=b;b.expandAttributionCard()});Ha()}class Bb{constructor(a){this.g=a;this.h=new yb(this.g,V(359,()=>Hb(this)))}};Ea=60;function Ib(a){Cb([a]);new Ab(a)}var W=["buildAttribution"],Y=m;W[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+W[0]);for(var Z;W.length&&(Z=W.shift());)W.length||void 0===Ib?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Ib;}).call(this);