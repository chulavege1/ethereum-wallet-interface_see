/*! For license information please see 343.index.js.LICENSE.txt */
(self.webpackChunkethereum_wallet_interface=self.webpackChunkethereum_wallet_interface||[]).push([[343],{9742:(t,e)=>{"use strict";e.byteLength=function(t){var e=a(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,i=a(t),s=i[0],f=i[1],u=new o(function(t,e,r){return 3*(e+r)/4-r}(0,s,f)),l=0,c=f>0?s-4:s;for(r=0;r<c;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],u[l++]=e>>16&255,u[l++]=e>>8&255,u[l++]=255&e;return 2===f&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,u[l++]=255&e),1===f&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,u[l++]=e>>8&255,u[l++]=255&e),u},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],s=16383,a=0,u=n-o;a<u;a+=s)i.push(f(t,a,a+s>u?u:a+s));return 1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0;s<64;++s)r[s]=i[s],n[i.charCodeAt(s)]=s;function a(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function f(t,e,n){for(var o,i,s=[],a=e;a<n;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8764:(t,e,r)=>{"use strict";const n=r(9742),o=r(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.lW=f,e.h2=50;const s=2147483647;function a(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,f.prototype),e}function f(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return c(t)}return u(t,e,r)}function u(t,e,r){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!f.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|g(t,e);let n=a(r);const o=n.write(t,e);return o!==r&&(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(q(t,Uint8Array)){const e=new Uint8Array(t);return p(e.buffer,e.byteOffset,e.byteLength)}return h(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(q(t,ArrayBuffer)||t&&q(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(q(t,SharedArrayBuffer)||t&&q(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return f.from(n,e,r);const o=function(t){if(f.isBuffer(t)){const e=0|d(t.length),r=a(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||J(t.length)?a(0):h(t):"Buffer"===t.type&&Array.isArray(t.data)?h(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return f.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return l(t),a(t<0?0:0|d(t))}function h(t){const e=t.length<0?0:0|d(t.length),r=a(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,f.prototype),n}function d(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function g(t,e){if(f.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||q(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return K(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(t).length;default:if(o)return n?-1:K(t).length;e=(""+e).toLowerCase(),o=!0}}function y(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,r);case"utf8":case"utf-8":return C(this,e,r);case"ascii":return L(this,e,r);case"latin1":case"binary":return R(this,e,r);case"base64":return U(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function b(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),J(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,o){let i,s=1,a=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,f/=2,r/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){let n=-1;for(i=r;i<a;i++)if(u(t,i)===u(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===f)return n*s}else-1!==n&&(i-=i-n),n=-1}else for(r+f>a&&(r=a-f),i=r;i>=0;i--){let r=!0;for(let n=0;n<f;n++)if(u(t,i+n)!==u(e,n)){r=!1;break}if(r)return i}return-1}function E(t,e,r,n){r=Number(r)||0;const o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=e.length;let s;for(n>i/2&&(n=i/2),s=0;s<n;++s){const n=parseInt(e.substr(2*s,2),16);if(J(n))return s;t[r+s]=n}return s}function v(t,e,r,n){return Y(K(e,t.length-r),t,r,n)}function I(t,e,r,n){return Y(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function A(t,e,r,n){return Y(G(e),t,r,n)}function B(t,e,r,n){return Y(function(t,e){let r,n,o;const i=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function U(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function C(t,e,r){r=Math.min(t.length,r);const n=[];let o=e;for(;o<r;){const e=t[o];let i=null,s=e>239?4:e>223?3:e>191?2:1;if(o+s<=r){let r,n,a,f;switch(s){case 1:e<128&&(i=e);break;case 2:r=t[o+1],128==(192&r)&&(f=(31&e)<<6|63&r,f>127&&(i=f));break;case 3:r=t[o+1],n=t[o+2],128==(192&r)&&128==(192&n)&&(f=(15&e)<<12|(63&r)<<6|63&n,f>2047&&(f<55296||f>57343)&&(i=f));break;case 4:r=t[o+1],n=t[o+2],a=t[o+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(f=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&a,f>65535&&f<1114112&&(i=f))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s}return function(t){const e=t.length;if(e<=O)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=O));return r}(n)}f.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(t,e,r){return u(t,e,r)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(t,e,r){return function(t,e,r){return l(t),t<=0?a(t):void 0!==e?"string"==typeof r?a(t).fill(e,r):a(t).fill(e):a(t)}(t,e,r)},f.allocUnsafe=function(t){return c(t)},f.allocUnsafeSlow=function(t){return c(t)},f.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==f.prototype},f.compare=function(t,e){if(q(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),q(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=f.allocUnsafe(e);let o=0;for(r=0;r<t.length;++r){let e=t[r];if(q(e,Uint8Array))o+e.length>n.length?(f.isBuffer(e)||(e=f.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else{if(!f.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,o)}o+=e.length}return n},f.byteLength=g,f.prototype._isBuffer=!0,f.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},f.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},f.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},f.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?C(this,0,t):y.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){let t="";const r=e.h2;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(f.prototype[i]=f.prototype.inspect),f.prototype.compare=function(t,e,r,n,o){if(q(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;let i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0);const a=Math.min(i,s),u=this.slice(n,o),l=t.slice(e,r);for(let t=0;t<a;++t)if(u[t]!==l[t]){i=u[t],s=l[t];break}return i<s?-1:s<i?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return b(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return b(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return E(this,t,e,r);case"utf8":case"utf-8":return v(this,t,e,r);case"ascii":case"latin1":case"binary":return I(this,t,e,r);case"base64":return A(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const O=4096;function L(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function R(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function T(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=Z[t[n]];return o}function j(t,e,r){const n=t.slice(e,r);let o="";for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}function M(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function S(t,e,r,n,o,i){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function W(t,e,r,n,o){z(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function _(t,e,r,n,o){z(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function P(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function x(t,e,r,n,i){return e=+e,r>>>=0,i||P(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function N(t,e,r,n,i){return e=+e,r>>>=0,i||P(t,0,r,8),o.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,f.prototype),n},f.prototype.readUintLE=f.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||M(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},f.prototype.readUintBE=f.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||M(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},f.prototype.readUint8=f.prototype.readUInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),this[t]},f.prototype.readUint16LE=f.prototype.readUInt16LE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUint16BE=f.prototype.readUInt16BE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUint32LE=f.prototype.readUInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUint32BE=f.prototype.readUInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readBigUInt64LE=Q((function(t){F(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),f.prototype.readBigUInt64BE=Q((function(t){F(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)})),f.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||M(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||M(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},f.prototype.readInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){t>>>=0,e||M(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){t>>>=0,e||M(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readBigInt64LE=Q((function(t){F(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),f.prototype.readBigInt64BE=Q((function(t){F(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),f.prototype.readFloatLE=function(t,e){return t>>>=0,e||M(t,4,this.length),o.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return t>>>=0,e||M(t,4,this.length),o.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return t>>>=0,e||M(t,8,this.length),o.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return t>>>=0,e||M(t,8,this.length),o.read(this,t,!1,52,8)},f.prototype.writeUintLE=f.prototype.writeUIntLE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||S(this,t,e,r,Math.pow(2,8*r)-1,0);let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUintBE=f.prototype.writeUIntBE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||S(this,t,e,r,Math.pow(2,8*r)-1,0);let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUint8=f.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,1,255,0),this[e]=255&t,e+1},f.prototype.writeUint16LE=f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeUint16BE=f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeUint32LE=f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},f.prototype.writeUint32BE=f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeBigUInt64LE=Q((function(t,e=0){return W(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),f.prototype.writeBigUInt64BE=Q((function(t,e=0){return _(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);S(this,t,e,r,n-1,-n)}let o=0,i=1,s=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);S(this,t,e,r,n-1,-n)}let o=r-1,i=1,s=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeBigInt64LE=Q((function(t,e=0){return W(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),f.prototype.writeBigInt64BE=Q((function(t,e=0){return _(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),f.prototype.writeFloatLE=function(t,e,r){return x(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return x(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(!f.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},f.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{const i=f.isBuffer(t)?t:f.from(t,n),s=i.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=i[o%s]}return this};const k={};function D(t,e,r){k[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function $(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function z(t,e,r,n,o,i){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let o;throw o=i>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new k.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,r){F(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||V(e,t.length-(r+1))}(n,o,i)}function F(t,e){if("number"!=typeof t)throw new k.ERR_INVALID_ARG_TYPE(e,"number",t)}function V(t,e,r){if(Math.floor(t)!==t)throw F(t,r),new k.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new k.ERR_BUFFER_OUT_OF_BOUNDS;throw new k.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}D("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),D("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),D("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=$(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=$(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n}),RangeError);const H=/[^+/0-9A-Za-z-_]/g;function K(t,e){let r;e=e||1/0;const n=t.length;let o=null;const i=[];for(let s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function G(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(H,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Y(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function q(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function J(t){return t!=t}const Z=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();function Q(t){return"undefined"==typeof BigInt?X:t}function X(){throw new Error("BigInt not supported")}},645:(t,e)=>{e.read=function(t,e,r,n,o){var i,s,a=8*o-n-1,f=(1<<a)-1,u=f>>1,l=-7,c=r?o-1:0,h=r?-1:1,p=t[e+c];for(c+=h,i=p&(1<<-l)-1,p>>=-l,l+=a;l>0;i=256*i+t[e+c],c+=h,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=n;l>0;s=256*s+t[e+c],c+=h,l-=8);if(0===i)i=1-u;else{if(i===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),i-=u}return(p?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,a,f,u=8*i-o-1,l=(1<<u)-1,c=l>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),(e+=s+c>=1?h/f:h*Math.pow(2,1-c))*f>=2&&(s++,f/=2),s+c>=l?(a=0,s=l):s+c>=1?(a=(e*f-1)*Math.pow(2,o),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;t[r+p]=255&s,p+=d,s/=256,u-=8);t[r+p-d]|=128*g}},8448:(t,e,r)=>{"use strict";r.d(e,{ConfigCtrl:()=>m,zv:()=>p,uA:()=>g,ExplorerCtrl:()=>W,jb:()=>P,OptionsCtrl:()=>w,AV:()=>h,ThemeCtrl:()=>F,ToastCtrl:()=>H});var n=r(2478);const o=t=>"object"==typeof t&&null!==t,i=new WeakMap,s=new WeakSet,[a]=((t=Object.is,e=((t,e)=>new Proxy(t,e)),r=(t=>o(t)&&!s.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer)),a=(t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}}),f=new WeakMap,u=((t,e,r=a)=>{const o=f.get(t);if((null==o?void 0:o[0])===e)return o[1];const l=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return(0,n.jc)(l,!0),f.set(t,[e,l]),Reflect.ownKeys(t).forEach((e=>{if(Object.getOwnPropertyDescriptor(l,e))return;const o=Reflect.get(t,e),a={value:o,enumerable:!0,configurable:!0};if(s.has(o))(0,n.jc)(o,!1);else if(o instanceof Promise)delete a.value,a.get=()=>r(o);else if(i.has(o)){const[t,e]=i.get(o);a.value=u(t,e(),r)}Object.defineProperty(l,e,a)})),l}),l=new WeakMap,c=[1,1],h=(a=>{if(!o(a))throw new Error("object required");const f=l.get(a);if(f)return f;let p=c[0];const d=new Set,g=(t,e=++c[0])=>{p!==e&&(p=e,d.forEach((r=>r(t,e))))};let y=c[1];const w=t=>(e,r)=>{const n=[...e];n[1]=[t,...n[1]],g(n,r)},b=new Map,m=t=>{var e;const r=b.get(t);r&&(b.delete(t),null==(e=r[1])||e.call(r))},E=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),v=e(E,{deleteProperty(t,e){const r=Reflect.get(t,e);m(e);const n=Reflect.deleteProperty(t,e);return n&&g(["delete",[e],r]),n},set(e,a,f,u){const c=Reflect.has(e,a),p=Reflect.get(e,a,u);if(c&&(t(p,f)||l.has(f)&&t(p,l.get(f))))return!0;m(a),o(f)&&(f=(0,n.o5)(f)||f);let y=f;if(f instanceof Promise)f.then((t=>{f.status="fulfilled",f.value=t,g(["resolve",[a],t])})).catch((t=>{f.status="rejected",f.reason=t,g(["reject",[a],t])}));else{!i.has(f)&&r(f)&&(y=h(f));const t=!s.has(y)&&i.get(y);t&&((t,e)=>{if(b.has(t))throw new Error("prop listener already exists");if(d.size){const r=e[3](w(t));b.set(t,[e,r])}else b.set(t,[e])})(a,t)}return Reflect.set(e,a,y,u),g(["set",[a],f,p]),!0}});l.set(a,v);const I=[E,(t=++c[1])=>(y===t||d.size||(y=t,b.forEach((([e])=>{const r=e[1](t);r>p&&(p=r)}))),p),u,t=>(d.add(t),1===d.size&&b.forEach((([t,e],r)=>{if(e)throw new Error("remove already exists");const n=t[3](w(r));b.set(r,[t,n])})),()=>{d.delete(t),0===d.size&&b.forEach((([t,e],r)=>{e&&(e(),b.set(r,[t]))}))})];return i.set(v,I),Reflect.ownKeys(a).forEach((t=>{const e=Object.getOwnPropertyDescriptor(a,t);"value"in e&&(v[t]=a[t],delete e.value,delete e.writable),Object.defineProperty(E,t,e)})),v}))=>[h,i,s,t,e,r,a,f,u,l,c])();function f(t={}){return a(t)}function u(t,e,r){const n=i.get(t);let o;n||console.warn("Please use proxy object");const s=[],a=n[3];let f=!1;const u=a((t=>{s.push(t),r?e(s.splice(0)):o||(o=Promise.resolve().then((()=>{o=void 0,f&&e(s.splice(0))})))}));return f=!0,()=>{f=!1,u()}}var l=r(8764);const c=f({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),h={state:c,subscribe:t=>u(c,(()=>t(c))),push(t,e){t!==c.view&&(c.view=t,e&&(c.data=e),c.history.push(t))},reset(t){c.view=t,c.history=[t]},replace(t){c.history.length>1&&(c.history[c.history.length-1]=t,c.view=t)},goBack(){if(c.history.length>1){c.history.pop();const[t]=c.history.slice(-1);c.view=t}},setData(t){c.data=t}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>p.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const t=navigator.userAgent.toLowerCase();return p.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isHttpUrl:t=>t.startsWith("http://")||t.startsWith("https://"),isArray:t=>Array.isArray(t)&&t.length>0,formatNativeUrl(t,e,r){if(p.isHttpUrl(t))return this.formatUniversalUrl(t,e,r);let n=t;return n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,r),`${n}wc?uri=${encodeURIComponent(e)}`},formatUniversalUrl(t,e,r){if(!p.isHttpUrl(t))return this.formatNativeUrl(t,e,r);let n=t;return n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,r),`${n}wc?uri=${encodeURIComponent(e)}`},wait:async t=>new Promise((e=>{setTimeout(e,t)})),openHref(t,e){window.open(t,e,"noreferrer noopener")},setWalletConnectDeepLink(t,e){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(t){try{const[e]=t.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var t;const e=null==(t=h.state.data)?void 0:t.Wallet;if(!e)throw new Error('Missing "Wallet" view data');return e}},d=f({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),g={state:d,subscribe:t=>u(d.events,(()=>t(function(t,e){const r=i.get(t);r||console.warn("Please use proxy object");const[n,o,s]=r;return s(n,o(),void 0)}(d.events[d.events.length-1])))),initialize(){d.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(d.userSessionId=crypto.randomUUID())},setConnectedWalletId(t){d.connectedWalletId=t},click(t){if(d.enabled){const e={type:"CLICK",name:t.name,userSessionId:d.userSessionId,timestamp:Date.now(),data:t};d.events.push(e)}},track(t){if(d.enabled){const e={type:"TRACK",name:t.name,userSessionId:d.userSessionId,timestamp:Date.now(),data:t};d.events.push(e)}},view(t){if(d.enabled){const e={type:"VIEW",name:t.name,userSessionId:d.userSessionId,timestamp:Date.now(),data:t};d.events.push(e)}}},y=f({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:y,subscribe:t=>u(y,(()=>t(y))),setChains(t){y.chains=t},setWalletConnectUri(t){y.walletConnectUri=t},setIsCustomDesktop(t){y.isCustomDesktop=t},setIsCustomMobile(t){y.isCustomMobile=t},setIsDataLoaded(t){y.isDataLoaded=t},setIsUiLoaded(t){y.isUiLoaded=t},setIsAuth(t){y.isAuth=t}},b=f({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),m={state:b,subscribe:t=>u(b,(()=>t(b))),setConfig(t){var e,r;g.initialize(),w.setChains(t.chains),w.setIsAuth(Boolean(t.enableAuthMode)),w.setIsCustomMobile(Boolean(null==(e=t.mobileWallets)?void 0:e.length)),w.setIsCustomDesktop(Boolean(null==(r=t.desktopWallets)?void 0:r.length)),p.setModalVersionInStorage(),Object.assign(b,t)}},E="https://explorer-api.walletconnect.com";async function v(t,e){const r=new URL(t,E);return r.searchParams.append("projectId",m.state.projectId),Object.entries(e).forEach((([t,e])=>{e&&r.searchParams.append(t,String(e))})),(await fetch(r)).json()}const I=async t=>v("/w3m/v1/getDesktopListings",t),A=async t=>v("/w3m/v1/getMobileListings",t),B=async t=>v("/w3m/v1/getAllListings",t),U=t=>`${E}/w3m/v1/getWalletImage/${t}?projectId=${m.state.projectId}`,C=t=>`${E}/w3m/v1/getAssetImage/${t}?projectId=${m.state.projectId}`;var O=Object.defineProperty,L=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,j=(t,e,r)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;const M=p.isMobile(),S=f({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),W={state:S,async getRecomendedWallets(){const{explorerRecommendedWalletIds:t,explorerExcludedWalletIds:e}=m.state;if("NONE"===t||"ALL"===e&&!t)return S.recomendedWallets;if(p.isArray(t)){const e={recommendedIds:t.join(",")},{listings:r}=await B(e),n=Object.values(r);n.sort(((e,r)=>t.indexOf(e.id)-t.indexOf(r.id))),S.recomendedWallets=n}else{const{chains:t,isAuth:r}=w.state,n=t?.join(","),o=p.isArray(e),i={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:n,version:2,excludedIds:o?e.join(","):void 0},{listings:s}=M?await A(i):await I(i);S.recomendedWallets=Object.values(s)}return S.recomendedWallets},async getWallets(t){const e=((t,e)=>{for(var r in e||(e={}))R.call(e,r)&&j(t,r,e[r]);if(L)for(var r of L(e))T.call(e,r)&&j(t,r,e[r]);return t})({},t),{explorerRecommendedWalletIds:r,explorerExcludedWalletIds:n}=m.state,{recomendedWallets:o}=S;if("ALL"===n)return S.wallets;o.length?e.excludedIds=o.map((t=>t.id)).join(","):p.isArray(r)&&(e.excludedIds=r.join(",")),p.isArray(n)&&(e.excludedIds=[e.excludedIds,n].filter(Boolean).join(",")),w.state.isAuth&&(e.sdks="auth_v1");const{page:i,search:s}=t,{listings:a,total:f}=M?await A(e):await I(e),u=Object.values(a),l=s?"search":"wallets";return S[l]={listings:[...S[l].listings,...u],total:f,page:i??1},{listings:u,total:f}},getWalletImageUrl:t=>U(t),getAssetImageUrl:t=>C(t),resetSearch(){S.search={listings:[],total:0,page:1}}},_=f({open:!1}),P={state:_,subscribe:t=>u(_,(()=>t(_))),open:async t=>new Promise((e=>{const{isUiLoaded:r,isDataLoaded:n}=w.state;if(w.setWalletConnectUri(t?.uri),w.setChains(t?.chains),h.reset("ConnectWallet"),r&&n)_.open=!0,e();else{const t=setInterval((()=>{const r=w.state;r.isUiLoaded&&r.isDataLoaded&&(clearInterval(t),_.open=!0,e())}),200)}})),close(){_.open=!1}};var x=Object.defineProperty,N=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,$=(t,e,r)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;const z=f({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),F={state:z,subscribe:t=>u(z,(()=>t(z))),setThemeConfig(t){const{themeMode:e,themeVariables:r}=t;e&&(z.themeMode=e),r&&(z.themeVariables=((t,e)=>{for(var r in e||(e={}))k.call(e,r)&&$(t,r,e[r]);if(N)for(var r of N(e))D.call(e,r)&&$(t,r,e[r]);return t})({},r))}},V=f({open:!1,message:"",variant:"success"}),H={state:V,subscribe:t=>u(V,(()=>t(V))),openToast(t,e){V.open=!0,V.message=t,V.variant=e},closeToast(){V.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=l.lW),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window))},9343:(t,e,r)=>{"use strict";r.d(e,{WalletConnectModal:()=>o});var n=r(8448);class o{constructor(t){this.openModal=n.jb.open,this.closeModal=n.jb.close,this.subscribeModal=n.jb.subscribe,this.setTheme=n.ThemeCtrl.setThemeConfig,n.ThemeCtrl.setThemeConfig(t),n.ConfigCtrl.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await Promise.all([r.e(4),r.e(839)]).then(r.bind(r,4839));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),n.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);
//# sourceMappingURL=343.index.js.map