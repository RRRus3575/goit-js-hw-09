!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o,u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var f="Expected a function",a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,m=v||p||Function("return this")(),y=Object.prototype.toString,b=Math.max,g=Math.min,h=function(){return m.Date.now()};function T(e,t,n){var r,i,o,u,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(f);function p(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function m(e){return l=e,a=setTimeout(T,t),d?p(e):u}function y(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=o}function T(){var e=h();if(y(e))return x(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?g(n,o-(e-l)):n}(e))}function x(e){return a=void 0,v&&r?p(e):(r=i=void 0,u)}function N(){var e=h(),n=y(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return m(c);if(s)return a=setTimeout(T,t),p(c)}return void 0===a&&(a=setTimeout(T,t)),u}return t=w(t)||0,j(n)&&(d=!!n.leading,o=(s="maxWait"in n)?b(w(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),N.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},N.flush=function(){return void 0===a?u:x(h())},N}function j(t){var n=void 0===t?"undefined":e(u)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(u)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=l.test(t);return r||d.test(t)?s(t.slice(2),r?2:8):c.test(t)?NaN:+t}o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(f);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),T(e,t,{leading:r,maxWait:t,trailing:i})};var x=i("h6c0i");console.log(3);var N=document.querySelector(".form");N.addEventListener("input",e(o)((function(e){e.preventDefault(),O[e.target.name]=e.target.value}),500)),N.addEventListener("submit",(function(e){e.preventDefault();for(var t=Number(O.delay),n=Number(O.step),r=Number(O.amount),i=1;i<=r;i++)setTimeout(E(i,n*i+t),t);e.currentTarget.reset()}));var O={};function E(e,t){var n=Math.random()>.3;new Promise((function(r,i){setTimeout((function(){n?r("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):i("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)})).then((function(e){x.Notify.success(e)})).catch((function(e){x.Notify.failure(e)}))}}();
//# sourceMappingURL=03-promises.140d8766.js.map
