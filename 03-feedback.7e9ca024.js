!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,u,a,f,c,l=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(w,t),s?S(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function w(){var e=p();if(O(e))return h(e);f=setTimeout(w,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function h(e){return f=void 0,b&&r?S(e):(r=i=void 0,a)}function T(){var e=p(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(w,t),S(c)}return void 0===f&&(f=setTimeout(w,t)),a}return t=g(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?a:h(p())},T}function y(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=y(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var c=u.test(t);return c||a.test(t)?f(t.slice(2),c?2:8):i.test(t)?NaN:+t}var S=document.querySelector("input"),j=document.querySelector("textarea"),O=document.querySelector("form");function w(){var e={email:S.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}function h(e){var t=JSON.parse(localStorage.getItem("feedback-form-state"));""===t?(S.value="",j.value=""):(S.value=t.email,j.value=t.message)}S.addEventListener("input",w),j.addEventListener("input",w),window.addEventListener("load",h),O.addEventListener("submit",(function(e){var t=JSON.parse(localStorage.getItem("feedback-form-state"));t.email;O.reset(),e.preventDefault(),console.log("{email = ".concat(t.email,"\nmessage = ").concat(t.message,"}"))}))}();
//# sourceMappingURL=03-feedback.7e9ca024.js.map
