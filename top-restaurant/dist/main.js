!function(e){var t={};function n(i){if(t[i])return t[i].exports;var c=t[i]={i:i,l:!1,exports:{}};return e[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(i,c,function(t){return e[t]}.bind(null,c));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("inner-content"),document.querySelector("#about").classList.add("menu-item-selected");const n=document.createElement("h1");n.innerHTML="About us";const i=document.createElement("p");i.innerHTML="Wasabi's Sushi Bar serves a wide selection of sushi classics, \n                        such as sashimi, nigiri and maki sushi. In addition, our sushi\n                        chefs exhibit many modern interpretations and innovations of \n                        sushi dishes in our specialty signature rolls. We take pride \n                        and passion in serving this artistic culinary form. The exclusive \n                        use of high quality and fresh ingredients is our top priority. ",i.style.padding="0 20%",t.appendChild(n),t.appendChild(i);const c=document.createElement("img");c.src="images/kitchen.jpeg",c.classList.add("about-img"),t.appendChild(c),e.appendChild(t)}n.r(t),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("header");const n=document.createElement("div");n.classList.add("logo"),t.appendChild(n);const i=document.createElement("p");i.classList.add("arrowDown");const c=document.createElement("div");c.classList.add("bounce"),c.appendChild(i),t.appendChild(c);const d=document.createElement("nav"),o=document.createElement("ul");o.classList="menu";const a=document.createElement("li"),s=document.createElement("li"),r=document.createElement("li");a.classList.add("menu-item"),s.classList.add("menu-item"),r.classList.add("menu-item"),a.id="about",s.id="menu",r.id="location",a.innerHTML="About",s.innerHTML="Menu",r.innerHTML="Map",o.appendChild(a),o.appendChild(s),o.appendChild(r),d.appendChild(o),e.appendChild(t),e.appendChild(d)}(),i(),document.querySelectorAll(".menu-item").forEach(e=>e.addEventListener("click",function(e){switch(document.querySelectorAll(".menu-item").forEach(e=>e.classList.remove("menu-item-selected")),document.querySelector("#content").removeChild(document.querySelector(".inner-content")),e.target.id){case"about":i();break;case"menu":!function(){const e=["Sushi","Sashimi","Rolls","Sets","Drinks","Desserts"],t=["images/sushi.jpeg","images/sashimi.jpeg","images/rolls.jpeg","images/sets.jpg","images/drinks.jpg","images/dessert.jpeg"],n=document.querySelector("#content");document.querySelector("#menu").classList.add("menu-item-selected");const i=document.createElement("div");i.classList.add("inner-content");const c=document.createElement("h1");c.innerHTML="Our menu",i.appendChild(c);for(let n=0;n<6;n++){const c=document.createElement("div");c.classList.add("product-item");const d=document.createElement("div");d.classList.add("product-picture"),d.style.backgroundImage=`url('${t[n]}')`;const o=document.createElement("h2");o.classList.add("product-name"),o.innerHTML=e[n],c.appendChild(d),c.appendChild(o),i.appendChild(c)}n.appendChild(i)}();break;case"location":!function(){const e=["Monday - Thursday: 11:30am - 9pm","Friday - Saturday: 11:30am - 10pm","Sunday: 12pm - 9pm"],t=document.querySelector("#content");document.querySelector("#location").classList.add("menu-item-selected");const n=document.createElement("div");n.classList.add("inner-content");const i=document.createElement("h1");i.innerHTML="Find us on the map";const c=document.createElement("div");c.id="map",n.appendChild(i),n.appendChild(c);const d=document.createElement("h3");d.innerHTML="Hours",n.appendChild(d);for(let t=0;t<e.length;t++){let i=document.createElement("p");i.innerHTML=e[t],n.appendChild(i)}t.appendChild(n);let o={lat:35.73,lng:-78.8},a=new google.maps.Map(document.getElementById("map"),{zoom:4,center:o});new google.maps.Marker({position:o,map:a})}()}}))}]);