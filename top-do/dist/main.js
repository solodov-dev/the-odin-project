!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=(e,t,n,o)=>({done:!1,title:e,important:!1,project:t,dueDate:n,comment:o,toggleDone(){!1===this.done?this.done=!0:this.done=!1},toggleImportant(){!1===this.important?this.important=!0:this.important=!1}}),d=(e,t)=>{const n=document.querySelector(".table");for(;n.firstChild;)n.removeChild(n.firstChild);if("all"!==t){const e=document.createElement("a");e.classList.add("main-btn"),e.innerHTML="+",n.appendChild(e)}let o=0;e.forEach(e=>{const d=document.createElement("div");if(d.classList.add("row-container"),e.project===t||"all"===t){const t=document.createElement("div");t.classList.add("table-row"),t.dataset.index=o;const r=document.createElement("div");r.classList.add("todo-data","checkbox"),!0===e.done?r.innerHTML='<input type="checkbox" checked>':r.innerHTML='<input type="checkbox">',t.appendChild(r);const i=document.createElement("div");i.classList.add("todo-menu","exclamation","material-icons"),i.innerHTML="assignment_late",!0===e.important&&i.classList.add("important"),t.appendChild(i);const c=document.createElement("div");c.classList.add("todo-data","title"),!0===e.done&&c.classList.add("done"),c.innerHTML=e.title;const l=document.createElement("div");l.innerHTML=`due: ${e.dueDate}`,l.classList.add("due-date"),c.appendChild(l),t.appendChild(c);const a=document.createElement("div");a.innerHTML="mode_edit",a.classList.add("todo-menu","todo-menu--floater","edit","material-icons"),t.appendChild(a);const s=document.createElement("div");s.innerHTML="delete",s.classList.add("todo-menu","todo-menu--floater","delete","material-icons"),t.appendChild(s),d.appendChild(t);const u=document.createElement("div");u.innerHTML=e.comment,u.classList.add("todo-comment"),d.appendChild(u),n.appendChild(d)}o+=1})},r=()=>{const e=document.querySelector("#add-todo-window");"hidden"===e.style.visibility?e.style.visibility="visible":e.style.visibility="hidden"},i=()=>{const e=document.querySelector("#add-project-window");"hidden"===e.style.visibility?e.style.visibility="visible":e.style.visibility="hidden"},c=e=>{document.querySelector("#current-project").innerHTML=e;const t=document.querySelector("#delete-project");"* show all"!==e?(t.innerHTML="delete",t.classList.add("material-icons")):t.innerHTML=""},l=e=>{const t=document.querySelector(".sidebar");for(;t.firstChild;)t.removeChild(t.firstChild);const n=document.createElement("a");n.innerHTML="* show all",n.classList.add("show-all"),t.appendChild(n);const o=document.createElement("a");o.innerHTML="+ add project",o.classList.add("menu-item","add-project"),t.appendChild(o),e.forEach(e=>{const n=document.createElement("a");n.innerHTML=e,n.classList.add("menu-item","menu-project"),t.appendChild(n)})},a=(e,t)=>{const n=document.querySelector("#edit-todo-window");n.dataset.index=t,"hidden"===n.style.visibility?(n.style.visibility="visible",document.forms.editTodo.elements.title.value=e[t].title,document.forms.editTodo.elements["due-date"].value=e[t].dueDate,document.forms.editTodo.elements.comments.value=e[t].comment):n.style.visibility="hidden"},s=[],u=["inbox"],m=o("A todo (click me!)",u[0],"2019-08-19","Todo comments.");s.push(m),c(u[0]),d(s,u[0]),l(u),document.querySelector("#close-add-form").addEventListener("click",r),document.querySelector("#add").addEventListener("click",e=>{e.preventDefault();const t=o(document.forms.addTodo.elements.title.value,document.querySelector("#current-project").innerHTML,document.forms.addTodo.elements["due-date"].value,document.forms.addTodo.elements.comments.value);s.push(t),d(s,document.querySelector("#current-project").innerHTML),r()}),document.querySelector("#update").addEventListener("click",e=>{e.preventDefault();const{index:t}=document.querySelector("#edit-todo-window").dataset;s[t].title=document.forms.editTodo.elements.title.value,s[t].dueDate=document.forms.editTodo.elements["due-date"].value,s[t].comment=document.forms.editTodo.elements.comments.value,d(s,document.querySelector("#current-project").innerHTML),a()}),document.querySelector(".table").addEventListener("click",e=>{e.target.classList.contains("title")&&e.target.parentNode.parentNode.querySelector(".todo-comment").classList.toggle("show"),e.target.parentNode.classList.contains("checkbox")&&(s[e.target.parentNode.parentNode.dataset.index].toggleDone(),e.target.parentNode.parentNode.querySelector(".title").classList.toggle("done")),e.target.classList.contains("exclamation")&&(s[e.target.parentNode.dataset.index].toggleImportant(),e.target.classList.toggle("important")),e.target.classList.contains("delete")&&(s.splice(e.target.parentNode.dataset.index,1),d(s,document.querySelector("#current-project").innerHTML)),e.target.classList.contains("edit")&&a(s,e.target.parentNode.dataset.index),e.target.classList.contains("main-btn")&&r()}),document.querySelector("#close-edit-form").addEventListener("click",a),document.querySelector(".sidebar").addEventListener("click",e=>{e.target.classList.contains("add-project")?i():(e.target.classList.contains("menu-item")&&(e.target.parentNode.classList.contains("mobile")&&e.target.parentNode.classList.toggle("mobile"),c(e.target.innerHTML),l(u),d(s,document.querySelector("#current-project").innerHTML)),e.target.classList.contains("show-all")&&(c(e.target.innerHTML),l(u),d(s,"all")))}),document.querySelector("#close-project-form").addEventListener("click",i),document.querySelector("#add-project").addEventListener("click",e=>{e.preventDefault(),u.push(document.forms.addProject.elements["project-title"].value.toLowerCase()),c(u[u.length-1]),l(u),d(s,document.querySelector("#current-project").innerHTML),i(),document.querySelector(".mobile")&&document.querySelector(".mobile").classList.toggle("mobile")}),document.querySelector("#delete-project").addEventListener("click",()=>{if(window.confirm("You will delete this project and all TODOs in it!")){const e=document.querySelector("#current-project");u.splice(u.indexOf(e.innerHTML),1),l(u);for(let t=0;t<s.length;t+=1)s[t].project===e.innerHTML&&(s.splice(t,1),t-=1);u.length>0?(c(u[u.length-1]),d(s,document.querySelector("#current-project").innerHTML)):(d(s,"all"),c("* show all"))}}),document.querySelector(".toggle-menu").addEventListener("click",()=>{document.querySelector(".sidebar").classList.toggle("mobile")})}]);