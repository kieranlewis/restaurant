(()=>{"use strict";var e={844:(e,t,n)=>{e.exports=n.p+"98f7c46d9970b1607ebc.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(844);const t=document.querySelector("#content"),o=()=>{const n=document.createElement("h1");n.textContent="Los Pollos Hermanos",t.appendChild(n);const o=new Image;o.src=e,t.appendChild(o);const r=document.createElement("p");r.textContent="The greatest restaurant chain for all you fried chicken needs. We have it all and we pride ourselves from having no links to the illegal drug trade with the great management of our leader Gustavo Fring. Come on down and you will be clucking to all your friends about us.",t.appendChild(r)},r=document.querySelector("#content"),c=document.querySelector("#content"),a=document.querySelector("#content"),i=document.querySelector("header");function l(){switch(a.innerHTML="",this.id){case"Home-btn":o();break;case"Menu-btn":(()=>{const e=document.createElement("h1");e.textContent="Menu",r.appendChild(e),function(){const e=document.createElement("ul"),t=document.createElement("li");t.textContent="Spicy Wings",e.appendChild(t);const n=document.createElement("li");n.textContent="Nugs",e.appendChild(n);const o=document.createElement("li");o.textContent="Curly Fries",e.appendChild(o);const c=document.createElement("li");c.textContent="Soft Drinks",e.appendChild(c),r.appendChild(e)}()})();break;case"Contact-btn":(()=>{const e=document.createElement("h1");e.textContent="Contact",c.appendChild(e)})()}}!function(){const e=["Home","Menu","Contact"];for(let t=0;t<e.length;t++){const n=document.createElement("button");n.textContent=e[t],n.setAttribute("id",e[t]+"-btn"),n.addEventListener("click",l),i.appendChild(n)}}(),o()})()})();