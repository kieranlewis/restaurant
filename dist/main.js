(()=>{"use strict";var e={17:(e,t,n)=>{e.exports=n.p+"bc7bc98e5e851a83bc32.jpg"},844:(e,t,n)=>{e.exports=n.p+"98f7c46d9970b1607ebc.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n(844);var e=n(17);const t=document.querySelector("#content"),o=()=>{const n=document.createElement("h1");n.textContent="Los Pollos Hermanos",t.appendChild(n);const o=new Image;o.src=e,o.style.height="300px",o.style.width="300px",t.appendChild(o);const r=document.createElement("p");r.textContent="The greatest restaurant chain for all you fried chicken needs. We have it all and we pride ourselves from having no links to the illegal drug trade with the great management of our leader Gustavo Fring. Come on down and you will be clucking to all your friends about us.",t.appendChild(r)},r=document.querySelector("#content"),c=[{name:"Spicy Wings",price:"$8"},{name:"Nugs",price:"$6"},{name:"Curly Fries",price:"$4.50"},{name:"Soft Drinks",price:"$4.50"}],l=document.querySelector("#content"),a=[{name:"Gus Fring",role:"Manager",phone:"021 123 456",email:"gusfring@hotmail.com",about:"I strive for our restaurant to be the greatest fried chicken shack in all of the country"},{name:"Jesse Pinkman",role:"Chef",phone:"022 666 999",email:"sciencebitch@gmail.com",about:"I love cooking all day and I will blow your mind with my drugs, I mean food"},{name:"Heisenberg",role:"???",phone:"N/A",email:"N/A",about:"I'm the one who knocks"}],i=document.querySelector("#content"),s=document.querySelector("header"),u=document.querySelector("body");function d(){switch(i.innerHTML="",this.id){case"Home-btn":o();break;case"Menu-btn":(()=>{const e=document.createElement("h1");e.textContent="Menu",r.appendChild(e),function(){const e=document.createElement("ul");for(let t=0;t<c.length;t++){const n=c[t],o=document.createElement("ul");o.textContent=n.name;for(const e in n)if("name"!==e){const t=document.createElement("li");t.textContent=`${n[e]}`,o.appendChild(t)}e.appendChild(o)}r.appendChild(e)}()})();break;case"Contact-btn":(()=>{const e=document.createElement("h1");e.textContent="Contact",l.appendChild(e),function(){const e=document.createElement("ul");for(let t=0;t<a.length;t++){const n=a[t],o=document.createElement("ul");o.textContent=n.name;for(const e in n)if("name"!==e){const t=document.createElement("li");t.textContent=`${n[e]}`,o.appendChild(t)}e.appendChild(o)}l.appendChild(e)}()})()}}!function(){const e=["Home","Menu","Contact"];for(let t=0;t<e.length;t++){const n=document.createElement("button");n.textContent=e[t],n.setAttribute("id",e[t]+"-btn"),n.addEventListener("click",d),n.style.border="none",n.style.color="white",n.style.backgroundColor="blue",n.style.fontSize="16px",n.style.margin="8px 0 8px 0",n.style.paddingRight="40px",s.appendChild(n)}}(),s.style.display="flex",s.style.justifyContent="center",s.style.backgroundColor="blue",s.style.position="absolute",s.style.left=0,s.style.right=0,s.style.top=0,i.style.display="flex",i.style.flexDirection="column",i.style.marginTop="20px",u.style.backgroundColor="rgba(254,220,0,255)",o()})()})();