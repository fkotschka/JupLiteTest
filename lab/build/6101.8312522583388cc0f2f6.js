(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6101],{55650:(t,s,e)=>{"use strict";e.d(s,{Vw:()=>r,Qn:()=>n,CY:()=>o,Ko:()=>i,cq:()=>c,rc:()=>h,x1:()=>u,kr:()=>f,$2:()=>a,jS:()=>l,x:()=>b,RP:()=>p});const r=1,n=2,o=4,i=8,c=32,h=64,u=128,f=31,a=63,l=127,b=255,p=2147483647},24803:(t,s,e)=>{"use strict";e.d(s,{Te:()=>i,eh:()=>c,s3:()=>h,Gh:()=>u,f9:()=>f});var r=e(45931),n=e(70132);const o=t=>new Uint8Array(t),i=(t,s,e)=>new Uint8Array(t,s,e),c=t=>new Uint8Array(t),h=n.jU?t=>{let s="";for(let e=0;e<t.byteLength;e++)s+=r.IK(t[e]);return btoa(s)}:t=>Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("base64"),u=n.jU?t=>{const s=atob(t),e=o(s.length);for(let t=0;t<s.length;t++)e[t]=s.charCodeAt(t);return e}:t=>{const s=Buffer.from(t,"base64");return new Uint8Array(s.buffer,s.byteOffset,s.byteLength)},f=t=>{const s=o(t.byteLength);return s.set(t),s}},49e3:(t,s,e)=>{"use strict";e.d(s,{l1:()=>c,v3:()=>h,HN:()=>f,iU:()=>a,kj:()=>l,Jl:()=>b,yg:()=>p,F7:()=>d,kf:()=>g,v_:()=>U,XW:()=>A,UF:()=>E,dD:()=>_,sO:()=>m});var r=e(24803),n=e(55650),o=e(21332);class i{constructor(t){this.arr=t,this.pos=0}}const c=t=>new i(t),h=t=>t.pos!==t.arr.length,u=(t,s)=>{const e=r.Te(t.arr.buffer,t.pos+t.arr.byteOffset,s);return t.pos+=s,e},f=t=>u(t,p(t)),a=t=>u(t,t.arr.length-t.pos),l=t=>t.arr[t.pos++],b=t=>{const s=t.arr[t.pos]+(t.arr[t.pos+1]<<8)+(t.arr[t.pos+2]<<16)+(t.arr[t.pos+3]<<24)>>>0;return t.pos+=4,s},p=t=>{let s=0,e=0;for(;;){const r=t.arr[t.pos++];if(s|=(r&n.jS)<<e,e+=7,r<n.x1)return s>>>0;if(e>35)throw new Error("Integer out of range!")}},d=t=>{let s=t.arr[t.pos++],e=s&n.$2,r=6;const o=(s&n.rc)>0?-1:1;if(0==(s&n.x1))return o*e;for(;;){if(s=t.arr[t.pos++],e|=(s&n.jS)<<r,r+=7,s<n.x1)return o*(e>>>0);if(r>41)throw new Error("Integer out of range!")}},g=t=>{let s=p(t);if(0===s)return"";{let e=String.fromCodePoint(l(t));if(--s<100)for(;s--;)e+=String.fromCodePoint(l(t));else for(;s>0;){const r=s<1e4?s:1e4,n=t.arr.subarray(t.pos,t.pos+r);t.pos+=r,e+=String.fromCodePoint.apply(null,n),s-=r}return decodeURIComponent(escape(e))}},w=(t,s)=>{const e=new DataView(t.arr.buffer,t.arr.byteOffset+t.pos,s);return t.pos+=s,e},y=[t=>{},t=>null,d,t=>w(t,4).getFloat32(0,!1),t=>w(t,8).getFloat64(0,!1),t=>w(t,8).getBigInt64(0,!1),t=>!1,t=>!0,g,t=>{const s=p(t),e={};for(let r=0;r<s;r++)e[g(t)]=U(t);return e},t=>{const s=p(t),e=[];for(let r=0;r<s;r++)e.push(U(t));return e},f],U=t=>y[127-l(t)](t);class A extends i{constructor(t,s){super(t),this.reader=s,this.s=null,this.count=0}read(){return 0===this.count&&(this.s=this.reader(this),h(this)?this.count=p(this)+1:this.count=-1),this.count--,this.s}}class E extends i{constructor(t){super(t),this.s=0,this.count=0}read(){if(0===this.count){this.s=d(this);const t=o.GR(this.s);this.count=1,t&&(this.s=-this.s,this.count=p(this)+2)}return this.count--,this.s}}class _ extends i{constructor(t){super(t),this.s=0,this.count=0,this.diff=0}read(){if(0===this.count){const t=d(this),s=1&t;this.diff=t>>1,this.count=1,s&&(this.count=p(this)+2)}return this.s+=this.diff,this.count--,this.s}}class m{constructor(t){this.decoder=new E(t),this.str=g(this.decoder),this.spos=0}read(){const t=this.spos+this.decoder.read(),s=this.str.slice(this.spos,t);return this.spos=t,s}}},23406:(t,s,e)=>{"use strict";e.d(s,{sX:()=>j,GF:()=>m,TS:()=>k,HE:()=>v,Mf:()=>h,kE:()=>u,_f:()=>f,cW:()=>a,EM:()=>_,mK:()=>w,Ep:()=>b,$F:()=>l,HK:()=>y,pY:()=>d,uw:()=>g,uE:()=>p,mP:()=>U});var r=e(24803),n=e(21332),o=e(55650);Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,o.RP;const i=Number.isInteger||(t=>"number"==typeof t&&isFinite(t)&&n.GW(t)===t);Number.isNaN;class c{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const h=()=>new c,u=t=>{let s=t.cpos;for(let e=0;e<t.bufs.length;e++)s+=t.bufs[e].length;return s},f=t=>{const s=new Uint8Array(u(t));let e=0;for(let r=0;r<t.bufs.length;r++){const n=t.bufs[r];s.set(n,e),e+=n.length}return s.set(r.Te(t.cbuf.buffer,0,t.cpos),e),s},a=(t,s)=>{const e=t.cbuf.length;t.cpos===e&&(t.bufs.push(t.cbuf),t.cbuf=new Uint8Array(2*e),t.cpos=0),t.cbuf[t.cpos++]=s},l=a,b=(t,s)=>{for(let e=0;e<4;e++)a(t,s&o.x),s>>>=8},p=(t,s)=>{for(;s>o.jS;)a(t,o.x1|o.jS&s),s>>>=7;a(t,o.jS&s)},d=(t,s)=>{const e=n.GR(s);for(e&&(s=-s),a(t,(s>o.$2?o.x1:0)|(e?o.rc:0)|o.$2&s),s>>>=6;s>0;)a(t,(s>o.jS?o.x1:0)|o.jS&s),s>>>=7},g=(t,s)=>{const e=unescape(encodeURIComponent(s)),r=e.length;p(t,r);for(let s=0;s<r;s++)a(t,e.codePointAt(s))},w=(t,s)=>y(t,f(s)),y=(t,s)=>{const e=t.cbuf.length,r=t.cpos,o=n.VV(e-r,s.length),i=s.length-o;t.cbuf.set(s.subarray(0,o),r),t.cpos+=o,i>0&&(t.bufs.push(t.cbuf),t.cbuf=new Uint8Array(n.Fp(2*e,i)),t.cbuf.set(s.subarray(o)),t.cpos=i)},U=(t,s)=>{p(t,s.byteLength),y(t,s)},A=(t,s)=>{((t,s)=>{const e=t.cbuf.length;e-t.cpos<s&&(t.bufs.push(r.Te(t.cbuf.buffer,0,t.cpos)),t.cbuf=new Uint8Array(2*n.Fp(e,s)),t.cpos=0)})(t,s);const e=new DataView(t.cbuf.buffer,t.cpos,s);return t.cpos+=s,e},E=new DataView(new ArrayBuffer(4)),_=(t,s)=>{switch(typeof s){case"string":a(t,119),g(t,s);break;case"number":i(s)&&s<=o.RP?(a(t,125),d(t,s)):(e=s,E.setFloat32(0,e),E.getFloat32(0)===e?(a(t,124),((t,s)=>{A(t,4).setFloat32(0,s,!1)})(t,s)):(a(t,123),((t,s)=>{A(t,8).setFloat64(0,s,!1)})(t,s)));break;case"bigint":a(t,122),((t,s)=>{A(t,8).setBigInt64(0,s,!1)})(t,s);break;case"object":if(null===s)a(t,126);else if(s instanceof Array){a(t,117),p(t,s.length);for(let e=0;e<s.length;e++)_(t,s[e])}else if(s instanceof Uint8Array)a(t,116),U(t,s);else{a(t,118);const e=Object.keys(s);p(t,e.length);for(let r=0;r<e.length;r++){const n=e[r];g(t,n),_(t,s[n])}}break;case"boolean":a(t,s?120:121);break;default:a(t,127)}var e};class m extends c{constructor(t){super(),this.w=t,this.s=null,this.count=0}write(t){this.s===t?this.count++:(this.count>0&&p(this,this.count-1),this.count=1,this.w(this,t),this.s=t)}}const S=t=>{t.count>0&&(d(t.encoder,1===t.count?t.s:-t.s),t.count>1&&p(t.encoder,t.count-2))};class v{constructor(){this.encoder=new c,this.s=0,this.count=0}write(t){this.s===t?this.count++:(S(this),this.count=1,this.s=t)}toUint8Array(){return S(this),f(this.encoder)}}const F=t=>{if(t.count>0){const s=t.diff<<1|(1===t.count?0:1);d(t.encoder,s),t.count>1&&p(t.encoder,t.count-2)}};class j{constructor(){this.encoder=new c,this.s=0,this.count=0,this.diff=0}write(t){this.diff===t-this.s?(this.s=t,this.count++):(F(this),this.count=1,this.diff=t-this.s,this.s=t)}toUint8Array(){return F(this),f(this.encoder)}}class k{constructor(){this.sarr=[],this.s="",this.lensE=new v}write(t){this.s+=t,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(t.length)}toUint8Array(){const t=new c;return this.sarr.push(this.s),this.s="",g(t,this.sarr.join("")),y(t,this.lensE.toUint8Array()),f(t)}}},75736:(t,s,e)=>{"use strict";e.d(s,{y:()=>i});var r=e(23205),n=e(16834),o=e(11565);class i{constructor(){this._observers=r.Ue()}on(t,s){r.Yu(this._observers,t,n.U).add(s)}once(t,s){const e=(...r)=>{this.off(t,e),s(...r)};this.on(t,e)}off(t,s){const e=this._observers.get(t);void 0!==e&&(e.delete(s),0===e.size&&this._observers.delete(t))}emit(t,s){return o.Dp((this._observers.get(t)||r.Ue()).values()).forEach((t=>t(...s)))}destroy(){this._observers=r.Ue()}}},16834:(t,s,e)=>{"use strict";e.d(s,{U:()=>r});const r=()=>new Set},40870:(t,s,e)=>{"use strict";e.d(s,{ZG:()=>r});const r=Date.now}}]);
//# sourceMappingURL=6101.8312522583388cc0f2f6.js.map