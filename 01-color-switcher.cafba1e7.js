!function(){"use strict";var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=!1,r=null;function c(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));n.style.backgroundColor="".concat(t)}function a(t){t.setAttribute("disabled","disabled")}function u(t){t.removeAttribute("disabled")}a(e),t.addEventListener("click",(function(){(o=!0)&&a(t),u(e),r=setInterval(c,1e3)})),e.addEventListener("click",(function(){if(console.log("stop"),!o)return;a(e),u(t),clearInterval(r),o=!1}))}();
//# sourceMappingURL=01-color-switcher.cafba1e7.js.map