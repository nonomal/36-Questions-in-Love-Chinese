(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var n=this||self;function p(a,b){return a.g?a.j.slice(0,a.g.index)+b+a.j.slice(a.g.index):a.j+b}function q(a,b){return a.i&&a.h||a.l?1==b?a.i?a.h:p(a,"&dct=1"):2==b?p(a,"&ri=2"):p(a,"&ri=16"):a.j}var aa=class{constructor({url:a}){this.j=a;const b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}};var r=class{constructor(a,b){this.g=b===ba?a:""}};r.prototype.i=!0;r.prototype.h=function(){return this.g.toString()};r.prototype.toString=function(){return this.g.toString()};function ca(a){return a instanceof r&&a.constructor===r?a.g:"type_error:SafeUrl"}var da=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ba={};function ea(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var fa;a:{var ha=n.navigator;if(ha){var ia=ha.userAgent;if(ia){fa=ia;break a}}fa=""}function t(a){return-1!=fa.indexOf(a)};function ka(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function v(a,b){b instanceof r||b instanceof r||(b="object"==typeof b&&b.i?b.h():String(b),da.test(b)||(b="about:invalid#zClosurez"),b=new r(b,ba));a.href=ca(b)};function la(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};function ma(){return t("iPhone")&&!t("iPod")&&!t("iPad")};function na(a){na[" "](a);return a}na[" "]=function(){};var oa=ma(),qa=t("iPad");var ra=ma()||t("iPod"),sa=t("iPad");var ta={},w=null; 
function ua(a){var b;void 0===b&&(b=0);if(!w){w={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));ta[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===w[h]&&(w[h]=g)}}}b=ta[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var m=a[f],k=a[f+1];h=a[f+2];g=b[m>>2];m=b[(m&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=g+m+k+h}g=0;h=d;switch(a.length-f){case 2:g= 
a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")};var va="function"===typeof Uint8Array;function wa(a){return xa(a,b=>b,b=>new Uint8Array(b))}function ya(a,b,c){return"object"===typeof a?va&&!Array.isArray(a)&&a instanceof Uint8Array?c(a):xa(a,b,c):b(a)}function xa(a,b,c){if(Array.isArray(a)){var d=Array(a.length);for(var e=0;e<a.length;e++){var f=a[e];null!=f&&(d[e]=ya(f,b,c))}Array.isArray(a)&&a[za]&&y(d);return d}d={};for(e in a)f=a[e],null!=f&&(d[e]=ya(f,b,c));return d} 
function Aa(a){return xa(a,b=>"number"===typeof b?isFinite(b)?b:String(b):b,b=>ua(b))}const za=Symbol("IS_REPEATED_FIELD");function y(a){Array.isArray(a)&&!Object.isFrozen(a)&&(a[za]=!0);return a}let z;function A(a){a=a.g;const b=[];for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function C(a,b){return a.j?(b.g||(b.g=new a.j(b.value),a.isFrozen()&&null(b.g)),b.g):b.value}function Ba(a,b){const c=A(a);c.sort();for(let d=0;d<c.length;d++){const e=a.g[c[d]];b.call(void 0,C(a,e),e.key,a)}} 
class Ca{constructor(a,b){this.h=a;this.j=b;this.g={};this.i=!0;if(0<this.h.length){for(a=0;a<this.h.length;a++){b=this.h[a];const c=b[0];this.g[c.toString()]=new Da(c,b[1])}this.i=!0}}isFrozen(){return!1}toJSON(){const a=this.m(!1);return z?a:Aa(a)}m(a){if(this.i){if(this.j){var b=this.g;for(var c in b)if(Object.prototype.hasOwnProperty.call(b,c)){var d=b[c].g;d&&d.m(a)}}}else{this.h.length=0;b=A(this);b.sort();for(c=0;c<b.length;c++){d=this.g[b[c]];const e=d.g;e&&e.m(a);this.h.push([d.key,d.value])}this.i= 
!0}return this.h}entries(){const a=[],b=A(this);b.sort();for(let c=0;c<b.length;c++){const d=this.g[b[c]];a.push([d.key,C(this,d)])}return new Ea(a)}keys(){const a=[],b=A(this);b.sort();for(let c=0;c<b.length;c++)a.push(this.g[b[c]].key);return new Ea(a)}values(){const a=[],b=A(this);b.sort();for(let c=0;c<b.length;c++)a.push(C(this,this.g[b[c]]));return new Ea(a)}set(a,b){const c=new Da(a);this.j?(c.g=b,c.value=b.m(!1)):c.value=b;this.g[a.toString()]=c;this.i=!1;return this}get(a){if(a=this.g[a.toString()])return C(this, 
a)}has(a){return a.toString()in this.g}[Symbol.iterator](){return this.entries()}}class Da{constructor(a,b){this.key=a;this.value=b;this.g=void 0}}class Ea{constructor(a){this.h=0;this.g=a}next(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}};let Fa;function D(a,b,c){var d=Fa;Fa=null;a||(a=d);d=this.constructor.O;a||(a=d?[d]:[]);this.j=d?0:-1;this.g=null;this.h=a;a:{d=this.h.length;a=d-1;if(d&&(d=this.h[a],!(null===d||"object"!=typeof d||Array.isArray(d)||va&&d instanceof Uint8Array))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.h[a])?y(d):this.h[a]=Ja):(Ka(this),(d=this.i[a])?y(d):this.i[a]=Ja)}const Ja=Object.freeze(y([])); 
function Ka(a){let b=a.l+a.j;a.h[b]||(a.i=a.h[b]={})}function F(a,b){if(-1===b)return null;if(b<a.l){b+=a.j;var c=a.h[b];return c!==Ja?c:a.h[b]=y([])}if(a.i)return c=a.i[b],c!==Ja?c:a.i[b]=y([])}function G(a,b,c){a=F(a,b);return null==a?c:a}function J(a,b){a=F(a,b);a=null==a?a:!!a;return null==a?!1:a}function K(a,b,c){a.g||(a.g={});if(b in a.g)return a.g[b];let d=F(a,b);d||(d=y([]),L(a,b,d));c=new Ca(d,c);return a.g[b]=c}function L(a,b,c){b<a.l?a.h[b+a.j]=c:(Ka(a),a.i[b]=c);return a} 
function M(a,b,c){if(-1===c)return null;a.g||(a.g={});if(!a.g[c]){let d=F(a,c);d&&(a.g[c]=new b(d))}return a.g[c]}function La(a){var b=Ma;a.g||(a.g={});if(!a.g[7]){let c=F(a,7),d=[];for(let e=0;e<c.length;e++)d[e]=new b(c[e]);a.g[7]=d}return a.g[7]}D.prototype.toJSON=function(){const a=this.m(!1);return z?a:Aa(a)};D.prototype.m=function(a){if(this.g)for(let b in this.g){const c=this.g[b];if(Array.isArray(c))for(let d=0;d<c.length;d++)c[d]&&c[d].m(a);else c&&c.m(a)}return this.h}; 
function Na(a){z=!0;try{return JSON.stringify(a.toJSON(),Oa)}finally{z=!1}}function Oa(a,b){switch(typeof b){case "number":return isFinite(b)?b:String(b);case "object":if(va&&null!=b&&b instanceof Uint8Array)return ua(b)}return b}D.prototype.toString=function(){return this.m(!1).toString()};function Pa(a){var b=a.constructor;Fa=a=wa(a.m(!1));b=new b(a);Fa=null;return b}function N(a,b){return G(a,b,"")};var Qa=class extends D{constructor(a){super(a)}};var Ra=class extends D{constructor(a){super(a)}},Sa=class extends D{constructor(a){super(a)}};var Ua=class extends D{constructor(a){super(a,-1,Ta)}},Ma=class extends D{constructor(a){super(a)}o(){return N(this,3)}H(a){L(this,5,a)}},Va=class extends D{constructor(a){super(a)}o(){return N(this,1)}H(a){L(this,2,a)}},Wa=class extends D{constructor(a){super(a)}},Ta=[6,7];var Ya=class extends D{constructor(a){super(a,-1,Xa)}},Xa=[17];var Za=class extends D{constructor(a){super(a)}};var $a=class{};class ab extends $a{constructor(a){super();this.g=a}toString(){return this.g}}var bb=new ab("about:invalid#zTSz");function cb(a){if(a instanceof $a)if(a instanceof ab)a=a.g;else throw Error("");else a=ca(a);return a};var db={capture:!0},eb={passive:!0},fb=ka(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(b){}return a});function gb(a){return a?a.passive&&fb()?a:a.capture||!1:!1}function O(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,gb(d))}function ib(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,gb(void 0))};var jb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kb(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function lb(a,b){return b?a?a+"&"+b:b:a}function nb(a,b){if(!b)return a;a=kb(a);a[1]=lb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]} 
function ob(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ob(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function pb(a){var b=[],c;for(c in a)ob(c,a[c],b);return b.join("&")}function qb(){var a=la();a=null!=a?"="+encodeURIComponent(String(a)):"";return nb("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)} 
function rb(a,b){a=kb(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=lb(d.join("&"),pb(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function sb(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{na(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function tb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}let ub=[];const vb=()=>{const a=ub;ub=[];for(const b of a)try{b()}catch(c){}}; 
var wb=a=>{ub.push(a);1==ub.length&&(window.Promise?Promise.resolve().then(vb):window.setImmediate?setImmediate(vb):setTimeout(vb,0))},xb=a=>{var b=P;"complete"===b.readyState||"interactive"===b.readyState?wb(a):b.addEventListener("DOMContentLoaded",a)},yb=a=>{var b=window;"complete"===b.document.readyState?wb(a):b.addEventListener("load",a)};function Q(a,b,c=null){zb(a,b,c)}function zb(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=a.document.createElement("img");if(c){const e=f=>{c&&c(f);ib(d,"load",e);ib(d,"error",e)};O(d,"load",e);O(d,"error",e)}d.src=b;a.google_image_requests.push(d)};let Ab=0;function Bb(a){return(a=Cb(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Cb(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)} 
function Db(a){if(!(.01<Math.random())){a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Bb(a)}&sample=${.01}`;var b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Q(b,a)}};var P=document,R=window;class Eb{constructor(a){this.N=a}}function S(a){return new Eb(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Fb=new Eb(a=>/^[^:]*([/?#]|$)/.test(a));var Gb=S("http"),Hb=S("https"),Ib=S("ftp"),Jb=S("mailto");const Kb=[S("data"),Gb,Hb,Jb,Ib,Fb];function Lb(a,b=Kb){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Eb&&d.N(a))return new ab(a)}}function Qb(a,b=Kb){return Lb(a,b)||bb};const Rb=[Gb,Hb,Jb,Ib,Fb,S("market"),S("itms"),S("intent"),S("itms-appss")];function Sb(a,b){if(a instanceof r)return a;const c=Qb(a,Rb);c===bb&&b(a);return new r(cb(c),ba)}var Tb=a=>{var b=`${"http:"===R.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=pb({id:"unsafeurl",ctx:a,url:c});c=nb(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Ub=!!window.google_async_iframe_id;let U=Ub&&window.parent||window;var Vb=a=>{var b=P;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class Wb{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Xb=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Yb=class{constructor(a,b){this.g=a;this.h=b}},Zb=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};function $b(a,b){const c={};c[a]=b;return[c]}function ac(a,b,c,d,e){const f=[];tb(a,function(g,h){(g=bc(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)} 
function bc(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(bc(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ac(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function cc(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function dc(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=cc(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let m=0;m<h.length;m++){if(!d){c=null==c?g:c;break}let k=ac(h[m],a.i,",$");if(k){k=e+k;if(d>=k.length){d-=k.length;b+=k;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class ec{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function fc(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{let g;c instanceof ec?g=c:(g=new ec,tb(c,(m,k)=>{var l=g,u=l.j++;m=$b(k,m);l.g.push(u);l.h[u]=m}));const h=dc(g,a.h,"/pagead/gen_204?id="+b+"&");h&&("undefined"!==typeof f?Q(n,h,f):Q(n,h))}catch(g){}}class gc{constructor(){this.h="http:"===R.location.protocol?"http:":"https:";this.g=Math.random()}};let hc=null;var ic=()=>{const a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},jc=()=>{const a=n.performance;return a&&a.now?a.now():null};class kc{constructor(a,b){var c=jc()||ic();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const V=n.performance,lc=!!(V&&V.mark&&V.measure&&V.clearMarks),W=ka(()=>{var a;if(a=lc){var b;if(null===hc){hc="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(hc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=hc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function mc(a){a&&V&&W()&&(V.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),V.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class nc{constructor(){var a=X;this.h=[];this.i=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=W()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new kc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;V&&W()&&V.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(jc()||ic())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;V&&W()&&V.mark(b);!this.g||2048<this.h.length|| 
this.h.push(a)}}};function oc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function pc(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{mc(e),c=a.s(b,new Wb(f,{message:oc(f)}),void 0,void 0)}catch(g){a.l(217,g)}if(c){let g,h;null==(g=window.console)||null==(h=g.error)||h.call(g,f)}else throw f;}return d}function qc(a,b){var c=rc;return(...d)=>pc(c,a,()=>b.apply(void 0,d))} 
class sc{constructor(){var a=tc;this.i=Y;this.h=null;this.s=this.l;this.g=void 0===a?null:a;this.j=!1}pinger(){return this.i}l(a,b,c,d,e){e=e||"jserror";let f;try{const E=new ec;var g=E;g.g.push(1);g.h[1]=$b("context",a);b.error&&b.meta&&b.id||(b=new Wb(b,{message:oc(b)}));if(b.msg){g=E;var h=b.msg.substring(0,512);g.g.push(2);g.h[2]=$b("msg",h)}var m=b.meta||{};b=m;if(this.h)try{this.h(b)}catch(H){}if(d)try{d(b)}catch(H){}d=E;m=[m];d.g.push(3);d.h[3]=m;d=n;m=[];b=null;do{var k=d;if(sb(k)){var l= 
k.location.href;b=k.document&&k.document.referrer||null}else l=b,b=null;m.push(new Zb(l||""));try{d=k.parent}catch(H){d=null}}while(d&&k!=d);for(let H=0,Mb=m.length-1;H<=Mb;++H)m[H].depth=Mb-H;k=n;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==m.length-1)for(l=1;l<m.length;++l){var u=m[l];u.url||(u.url=k.location.ancestorOrigins[l-1]||"",u.G=!0)}var B=m;let pa=new Zb(n.location.href,!1);k=null;const Ga=B.length-1;for(u=Ga;0<=u;--u){var x=B[u];!k&&Xb.test(x.url)&&(k= 
x);if(x.url&&!x.G){pa=x;break}}x=null;const Kc=B.length&&B[Ga].url;0!=pa.depth&&Kc&&(x=B[Ga]);f=new Yb(pa,x);if(f.h){B=E;var I=f.h.url||"";B.g.push(4);B.h[4]=$b("top",I)}var Ha={url:f.g.url||""};if(f.g.url){var Ia=f.g.url.match(jb),T=Ia[1],Nb=Ia[3],Ob=Ia[4];I="";T&&(I+=T+":");Nb&&(I+="//",I+=Nb,Ob&&(I+=":"+Ob));var Pb=I}else Pb="";T=E;Ha=[Ha,{url:Pb}];T.g.push(5);T.h[5]=Ha;fc(this.i,e,E,this.j,c)}catch(E){try{fc(this.i,e,{context:"ecmserr",rctx:a,msg:oc(E),url:f&&f.g.url},this.j,c)}catch(pa){}}return!0}} 
;let Y,rc;if(Ub&&!sb(U)){let a="."+P.domain;try{for(;2<a.split(".").length&&!sb(U);)P.domain=a=a.substr(a.indexOf(".")+1),U=window.parent}catch(b){}sb(U)||(U=window)}const X=U,tc=new nc;var uc=()=>{if(!X.google_measure_js_timing){var a=tc;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(W()&&Array.prototype.forEach.call(a.h,mc,void 0),a.h.length=0)}};Y=new gc;"number"!==typeof X.google_srt&&(X.google_srt=Math.random());var vc=Y,wc=X.google_srt;0<=wc&&1>=wc&&(vc.g=wc);rc=new sc; 
rc.h=a=>{const b=Ab;0!==b&&(a.jc=String(b),a.shv=Bb(b))};rc.j=!0;"complete"==X.document.readyState?uc():tc.g&&O(X,"load",()=>{uc()});var xc=(a,b)=>qc(a,b);var yc=(a,b)=>{b=N(a,2)||b;if(!b)return"";if(J(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];Ba(K(a,4,null),(e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},zc=(a,b)=>{b=void 0===b?[]:b;b=0<b.length?b:Vb("data-asoch-targets");a=K(a,1,Ua);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let m of e)if(!a.has(m)){f=!1;break}if(f){f= 
a.get(e[0]);for(d=1;d<e.length;++d){var g=a.get(e[d]);f=Pa(f).toJSON();g=g.toJSON();const m=Math.max(f.length,g.length);for(let k=0;k<m;++k)null==f[k]&&(f[k]=g[k]);f=new Ua(f)}e=K(f,4,null);null!=F(f,5)&&e.set("nb",G(f,5,0).toString());c.push({element:b[h],data:f})}else fc(Y,"gdn-asoch",{type:1,data:d},!0,void 0,void 0)}return c},Bc=(a,b,c,d)=>{c=yc(b,c);if(0<c.length){if(null!=F(b,18)){var e=609===d;let f;f=e?1:void 0!==P.featurePolicy&&P.featurePolicy.allowsFeature("attribution-reporting")?3:2; 
c=Ac(c,"nis",f.toString());if(e||!a.hasAttribute("attributionsourceeventid"))e=M(b,Qa,18),a.setAttribute("attributiondestination",N(e,2)),a.setAttribute("attributionsourceeventid",N(e,1)),a.setAttribute("attributionreportto",N(e,3)),a.setAttribute("attributionexpiry",N(e,4))}v(a,Sb(c,Tb(d)));a.target||(a.target=null!=F(b,11)?N(b,11):"_top")}},Cc=a=>{var b=void 0===b?"":b;for(const d of a){a=d.data;var c=0===b.length?!1:d.element.matches(b);"A"!=d.element.tagName||J(a,1)||c||(c=d.element,Bc(c,a,c.href, 
609))}},Dc=a=>{const b=window.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&null!=F(a,8)){const d=N(M(a,Wa,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,N(M(a,Wa,8),6));break}}},Ec=(a,b)=>{b=void 0===b?500:b;const c=[],d=[];for(var e of a)(a=e.data)&&null!=F(a,12)&&(d.push(M(a,Va,12)),c.push(M(a,Va,12).o()));e=(f,g)=>{if(g)for(const h of d)h.H(g[h.o()]||!1)};a=window.oneAfmaInstance;for(const f of c)a.canOpenAndroidApp(f,e,()=>{},b)},Gc=(a,b,c,d,e)=>{if(a||!b||null==F(b,12))return!1;const f= 
M(b,Va,12).o();a="";if(0<La(b).length)for(const g of La(b))a+=N(g,2)+" "+g.o()+" ";if(J(M(b,Va,12),2))return Fc({id:"gmob-apps",event:"och-open-android-app-before-click",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e}),d.click(c),d.openAndroidApp(f),setTimeout(()=>{var g={id:"gmob-apps",event:"och-open-android-app",appId:f,isDeepLinkPath:!1,exptIds:e};Z(rb(qb(),g))},1E3),!0;Fc({id:"gmob-apps",event:"och-open-android-app-validated-false",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e});return!1}, 
Ic=(a,b,c,d,e,f,g)=>{if(!c||null==F(c,8))return!1;const h=M(c,Wa,8);let m=N(h,2);Ba(K(c,10,null),(k,l)=>{var u=m;l=encodeURIComponent(l);const B=encodeURIComponent(k);k=new RegExp("[?&]"+l+"=([^&]+)");const x=k.exec(u);console.log(x);l=l+"="+B;m=x?u.replace(k,x[0].charAt(0)+l):u.replace("?","?"+l+"&")});Fc({id:"gmob-apps",event:"och-try-u2-redirect",appId:N(h,4)||"",isIos:a,isDeepLinkPath:!1,exptIds:f});g&&Hc(c)&&J(c,15)&&(d=Ac(d,"label","deep_link_fallback"));a=k=>e.openStoreOverlay(k,void 0,N(h, 
6));return e.redirectForStoreU2({clickUrl:d,trackingUrl:N(h,3),finalUrl:m,pingFunc:e.click,openFunc:(null==b?0:J(b,1))?a:e.openIntentOrNativeApp})},Jc=(a,b)=>{b=void 0===b?null:b;if(null!==b){const c=new aa({url:a});if(c.i&&c.h||c.l)return b(p(c,"&act=1&ri=1")),q(c,1)}else return b=new aa({url:a}),b.i&&b.h||b.l?navigator.sendBeacon?navigator.sendBeacon(p(b,"&act=1&ri=1"),"")?q(b,1):q(b,2):q(b,0):a;return a},Fc=a=>{Z(rb(qb(),a))},Z=(a,b)=>{(void 0===b||b)&&R.fetch?R.fetch(a,{method:"GET",keepalive:!0, 
mode:"no-cors"}).then(c=>{c.ok||Q(R,a)}):Q(R,a)},Ac=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Hc=a=>{for(const b of La(a))if(3===G(b,1,0)&&N(b,2))return!0;return!1};var Mc=class extends D{constructor(){super(void 0,-1,Lc)}},Lc=[6];const Nc="platform platformVersion architecture model uaFullVersion bitness".split(" ");var Oc=()=>{var a=window;return a.navigator&&a.navigator.userAgentData&&"function"===typeof a.navigator.userAgentData.getHighEntropyValues?a.navigator.userAgentData.getHighEntropyValues(Nc).then(b=>{var c=new Mc;c=L(c,1,b.platform);c=L(c,2,b.platformVersion);c=L(c,3,b.architecture);c=L(c,4,b.model);c=L(c,5,b.uaFullVersion);return L(c,9,b.bitness)}):null};function Pc(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null!=F(c,2)||L(c,2,a.href)}}function Qc(a,b){return ea(a,c=>c.element===b)}function Rc(a){xb(xc(556,()=>{new Sc(a||{})}))} 
function Tc(a,b,c,d){if(!J(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(v(c,Sb(e[0],Tb(557)));!c.id;)if(f="asoch-id-"+la(),!P.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,P.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===typeof window.ja&&window.ja(f,d?G(d,5,0):0);a.i&&"function"===typeof window.ss&&(a.F?window.ss(f,1,a.i):window.ss(a.i, 
1));0<e.length&&(a=0<a.A.length?c.href+"&uach="+encodeURIComponent(a.A)+e[1]:c.href+e[1],v(c,Sb(a,Tb(557))))}}async function Uc(a,b,c,d){let e="";if(window.oneAfmaInstance){var f=window.oneAfmaInstance;e=await f.appendClickSignalsAsync(c.href)||"";if(a.B&&(f=await f.getNativeClickMeta())){if(f.customClickGestureEligible)return;e=Ac(e,"nas",f.encodedNas)}}Vc(a,b,c,d,e)} 
function Vc(a,b,c,d,e){const f=J(a.h,2),g=f&&Date.now()-a.D>a.J;if(window.oneAfmaInstance){b.preventDefault?b.preventDefault():b.returnValue=!1;var h=window.oneAfmaInstance;b=h.logScionEventAndAddParam(e);if(!Gc(a.l,d,b,h,a.s)&&!Ic(a.l,a.j,d,b,h,a.s,a.K)){c=a.L;e=a.l;var m=a.s;const k=J(d,15),l=!/[?&]dsh=1(&|$)/.test(b)&&/[?&]ae=1(&|$)/.test(b);!f||!g||k&&l||(b=Jc(b,h.click));b&&b.startsWith("intent:")?(h.openIntentOrNativeApp(b),d={id:"gmob-apps",event:"och-open-intent-or-native-app",appId:null!= 
F(d,8)&&N(M(d,Wa,8),4)||"",isIos:e,isDeepLinkPath:!1,exptIds:m},Z(rb(qb(),d))):c?e?h.openBrowser(b):h.openChromeCustomTab(b):h.openSystemBrowser(b,{useFirstPackage:!0,useRunningProcess:!0})}}else d=window,d.pawsig&&"function"===typeof d.pawsig.clk?d.pawsig.clk(c):g&&(d=Jc(c.href),d!==c.href&&v(c,Sb(d,Tb(599))));g&&(a.D=Date.now());Db(a.C)} 
var Sc=class{constructor(a){this.l=ra||oa||sa||qa;var b=Vb("data-asoch-meta");if(1!==b.length)fc(Y,"gdn-asoch",{type:2,data:b.length},!0,void 0,void 0);else{this.C=70;this.h=new Ya(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.I=a["extra-meta"]?new Ya(JSON.parse(a["extra-meta"])):null;this.B=!1;this.j=a["ios-store-overlay-config"]?new Za(JSON.parse(a["ios-store-overlay-config"])):null;this.L="true"===a["use-cct-over-browser"];this.s=a["expt-ids"]||"";this.K="true"===a.avoid_ace_double_billing; 
this.A="";b=Oc();null!=b&&b.then(d=>{this.A=Na(d)});this.g=zc(this.h);this.J=Number(a["async-click-timeout"])||300;this.M=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.D=-Infinity;this.i=N(this.h,5)||"";this.F=J(this.h,11);this.I&&(this.F=J(this.I,11));this.v=this.u=null;J(this.h,3)||(Cc(this.g),L(this.h,3,!0));Pc(this.g);!this.l&&window.oneAfmaInstance&&Ec(this.g,this.M);var c;if(window.oneAfmaInstance&&(null==(c=this.j)?0:J(c,2)))switch(a=()=>{const d=G(this.j,4,0);0<d?n.setTimeout(()=> 
{Dc(this.g)},d):Dc(this.g)},G(this.j,3,0)){case 1:window.oneAfmaInstance.runOnOnShowEvent(a);break;case 2:yb(a);break;default:Dc(this.g)}O(P,"click",xc(557,d=>{a:if(!d.defaultPrevented||this.u===d){for(var e,f,g=d.target;(!e||!f)&&g;){f||"A"!=g.tagName||(f=g);var h=g.hasAttribute("data-asoch-targets"),m=g.hasAttribute("data-asoch-fixed-value");if(!e)if(m)e=new Ua(JSON.parse(g.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==g.tagName||h)if(h=h&&"true"===g.getAttribute("data-asoch-is-dynamic")? 
zc(this.h,[g]):this.g,h=Qc(h,g))e=h.data;g=g.parentElement}if(g=e&&!J(e,1)){if(d.defaultPrevented){var k=f,l=e;if(this.u===d&&this.v){e=new Ra(this.v);f=N(l,9);g="";switch(G(e,4,1)){case 2:if(G(e,2,0))g="blocked_fast_click";else if(N(e,1)||N(e,7))g="blocked_border_click";break;case 3:g=P,g=g.getElementById?g.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&g&&(l=Pa(l),L(l,5,12),K(l,4,null).set("nb",(12).toString()),(h=Qc(this.g,g))?h.data=l:this.g.push({element:g, 
data:l}),k&&(Tc(this,d,k,l),L(l,2,k.href)),window.copfcChm(d,yc(l,g.href),null,null!=F(e,10)?Na(M(e,Sa,10)):null)),g="onepointfiveclick_first_click"}f&&g&&Z(f+"&label="+g,!1);Db(this.C)}break a}h=e;for(l of F(h,6))Z(l)}if(f&&g){e=g?e:null;(l=Qc(this.g,f))?l=l.data:(l=new Ua,L(l,2,f.href),L(l,11,f.target||"_top"),this.g.push({element:f,data:l}));Bc(f,e||l,N(l,2),557);Tc(this,d,f,e);for(k of F(this.h,17))l=k,g=P.body,h={},"function"===typeof window.CustomEvent?m=new CustomEvent(l,h):(m=document.createEvent("CustomEvent"), 
m.initCustomEvent(l,!!h.bubbles,!!h.cancelable,h.detail)),g.dispatchEvent(m);J(this.h,16)||this.B?Uc(this,d,f,e):(k="",window.oneAfmaInstance&&(k=window.oneAfmaInstance.appendClickSignals(f.href)),Vc(this,d,f,e,k))}}}),db);this.i&&"function"===typeof window.ss&&O(P.body,"mouseover",xc(626,()=>{window.ss(this.i,0)}),eb);a=window;a.googqscp&&"function"===typeof a.googqscp.registerCallback&&a.googqscp.registerCallback((d,e)=>{this.u=d;this.v=e})}}};var Wc=xc(555,a=>Rc(a));Ab=70;const Xc=Cb(70,document.currentScript);if(null==Xc)throw Error("JSC not found 70");const Yc={},Zc=Xc.attributes;for(let a=Zc.length-1;0<=a;a--){const b=Zc[a].name;0===b.indexOf("data-jcp-")&&(Yc[b.substring(9)]=Zc[a].value)}Wc(Yc);}).call(this);
