"use strict";(self.webpackChunkpuls=self.webpackChunkpuls||[]).push([[459],{459:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var o=r(311),n=r(704);const a={class:"main"},c={class:"disc f1"},i={class:"send f1"};var u={__name:"ad",setup(e){let t=(0,o.reactive)({video:[]}),r=()=>{JSON.parse(t.video).map((e=>{let t=`${window.location.origin}?vid=${n.DS.encode(e.vod_play_url)}`;return{vod_name:e.vod_name,url:t,vod_rq:`https://api.pwmqr.com/qrcode/create/?url=${encodeURIComponent(t)}`}}))};return(e,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("div",c,[(0,o.withDirectives)((0,o.createElementVNode)("textarea",{"onUpdate:modelValue":n[0]||(n[0]=e=>(0,o.unref)(t).video=e)},null,512),[[o.vModelText,(0,o.unref)(t).video]])]),(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("button",{type:"primary",class:"toindex",onClick:n[1]||(n[1]=e=>(0,o.unref)(r)())},"生成")])]))}};var f=(0,r(89).Z)(u,[["__scopeId","data-v-725047fd"]])},704:function(e,t,r){r.d(t,{DS:function(){return P}});const o="3.7.5",n=o,a="function"==typeof atob,c="function"==typeof btoa,i="function"==typeof Buffer,u="function"==typeof TextDecoder?new TextDecoder:void 0,f="function"==typeof TextEncoder?new TextEncoder:void 0,d=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),l=(e=>{let t={};return e.forEach(((e,r)=>t[e]=r)),t})(d),s=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,p=String.fromCharCode.bind(String),h="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),A=e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_")),y=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),b=e=>{let t,r,o,n,a="";const c=e.length%3;for(let c=0;c<e.length;){if((r=e.charCodeAt(c++))>255||(o=e.charCodeAt(c++))>255||(n=e.charCodeAt(c++))>255)throw new TypeError("invalid character found");t=r<<16|o<<8|n,a+=d[t>>18&63]+d[t>>12&63]+d[t>>6&63]+d[63&t]}return c?a.slice(0,c-3)+"===".substring(c):a},m=c?e=>btoa(e):i?e=>Buffer.from(e,"binary").toString("base64"):b,g=i?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let r=0,o=e.length;r<o;r+=4096)t.push(p.apply(null,e.subarray(r,r+4096)));return m(t.join(""))},v=(e,t=!1)=>t?A(g(e)):g(e),x=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?p(192|t>>>6)+p(128|63&t):p(224|t>>>12&15)+p(128|t>>>6&63)+p(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return p(240|t>>>18&7)+p(128|t>>>12&63)+p(128|t>>>6&63)+p(128|63&t)},C=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,B=e=>e.replace(C,x),U=i?e=>Buffer.from(e,"utf8").toString("base64"):f?e=>g(f.encode(e)):e=>m(B(e)),w=(e,t=!1)=>t?A(U(e)):U(e),F=e=>w(e,!0),E=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,S=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return p(55296+(t>>>10))+p(56320+(1023&t));case 3:return p((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return p((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},_=e=>e.replace(E,S),D=e=>{if(e=e.replace(/\s+/g,""),!s.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r,o,n="";for(let a=0;a<e.length;)t=l[e.charAt(a++)]<<18|l[e.charAt(a++)]<<12|(r=l[e.charAt(a++)])<<6|(o=l[e.charAt(a++)]),n+=64===r?p(t>>16&255):64===o?p(t>>16&255,t>>8&255):p(t>>16&255,t>>8&255,255&t);return n},R=a?e=>atob(y(e)):i?e=>Buffer.from(e,"base64").toString("binary"):D,k=i?e=>h(Buffer.from(e,"base64")):e=>h(R(e).split("").map((e=>e.charCodeAt(0)))),T=e=>k(Z(e)),V=i?e=>Buffer.from(e,"base64").toString("utf8"):u?e=>u.decode(k(e)):e=>_(R(e)),Z=e=>y(e.replace(/[-_]/g,(e=>"-"==e?"+":"/"))),z=e=>V(Z(e)),I=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),N=function(){const e=(e,t)=>Object.defineProperty(String.prototype,e,I(t));e("fromBase64",(function(){return z(this)})),e("toBase64",(function(e){return w(this,e)})),e("toBase64URI",(function(){return w(this,!0)})),e("toBase64URL",(function(){return w(this,!0)})),e("toUint8Array",(function(){return T(this)}))},O=function(){const e=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,I(t));e("toBase64",(function(e){return v(this,e)})),e("toBase64URI",(function(){return v(this,!0)})),e("toBase64URL",(function(){return v(this,!0)}))},P={version:o,VERSION:n,atob:R,atobPolyfill:D,btoa:m,btoaPolyfill:b,fromBase64:z,toBase64:w,encode:w,encodeURI:F,encodeURL:F,utob:B,btou:_,decode:z,isValid:e=>{if("string"!=typeof e)return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},fromUint8Array:v,toUint8Array:T,extendString:N,extendUint8Array:O,extendBuiltins:()=>{N(),O()}}}}]);