const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let n=!1,r=null;function l(){let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;o.style.backgroundColor=`${t}`}function a(t){t.setAttribute("disabled","disabled")}function d(t){t.removeAttribute("disabled")}a(e),t.addEventListener("click",(()=>{n=!0,n&&a(t),d(e),r=setInterval(l,1e3)})),e.addEventListener("click",(function(){if(console.log("stop"),!n)return;a(e),d(t),clearInterval(r),n=!1}));
//# sourceMappingURL=01-color-switcher.2f98c555.js.map