!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(i=0;i<e.length;i++){var o=e[i];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){var r,i,s={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),d=null,l=0,c=[],h=n(4);function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=s[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(b(r.parts[o],t))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(b(r.parts[o],t));s[r.id]={id:r.id,refs:1,parts:a}}}}function m(e,t){for(var n=[],r={},i=0;i<e.length;i++){var s=e[i],o=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}function p(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(e.insertAt.before,n);n.insertBefore(t,i)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),p(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,i,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var o=l++;n=d||(d=g(t)),r=x.bind(null,n,o,!1),i=x.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||s)&&(r=h(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}.bind(null,n,t),i=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return u(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(a=s[o.id]).refs--,r.push(a)}e&&u(m(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete s[a.id]}}}};var w,y=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".item-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  width: calc(100%/var(--n)/4);\n  height: 100%;\n  align-items: center;\n}\n.slider {\n  flex-basis: 60%;;\n  --n: 1;\n  display: flex;\n  align-items: center;\n  overflow-y: hidden;\n  width: 100%;\n  width: calc(var(--n)*100%);\n  min-height: 30rem;\n  transform: translate(calc(var(--i, 0)/var(--n)*-100%));\n  cursor:grab;\n  padding: 1rem 0 1rem 0 0;\n}\n.item {\n  background: rgb(255, 255, 255);\n  height: 80%;\n  width: 20rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 1rem;\n  transition: all ease;\n  overflow: hidden;\n}\n.item:hover {\n  transform: scale(1.033);\n  box-shadow: 0rem 0rem 2rem rgb(255, 255, 255), 0rem 0rem 0.9rem rgb(255, 255, 255);\n}\n.item span {\n  margin-right: 0.6rem;\n  position: absolute;\n}\n.title {\n  width: 100%;\n  flex-basis: 40%;\n  margin-top: 5%;\n  display: flex;\n  align-items: center;\n}\n.title-name {\n  color: #fff;\n  font-size: 1.5rem;\n  background: rgba(0, 0, 0, 0.27);\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n  padding: 0 0.3rem;\n}\n.author,\n.date,\n.viewCount {\n  flex-basis: 15%;\n  font-size: 1.3rem;\n  display: flex;\n  font-weight: bold;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: relative;\n}\n.author span {\n  left: 9%;\n}\n.date span {\n  left: 8%;\n}\n.viewCount span {\n  left: 7%;\n}\n.author {\n  text-decoration: underline;\n  text-align: center;\n}\n.description {\n  width: 100%;\n  flex-basis: 15%;\n  background: rgba(0, 0, 0, 0.2);\n  font-size: 0.8rem;\n  text-align: center;\n  align-items: center;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  padding: 0.8rem 0;\n  overflow: hidden;\n}\n.description p {\n  width: 85%;\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(i=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(0)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Indie+Flower);",""]),t.push([e.i,"@import url(https://use.fontawesome.com/releases/v5.8.1/css/all.css);",""]),t.push([e.i,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Indie Flower', cursive;\r\n}\r\nbody {\r\n    background: rgb(21, 21, 52);\r\n   }\r\nbutton:active, \r\nbutton:focus {\r\n    outline: none;\r\n}\r\n:focus {\r\n    outline:none;\r\n}\r\n.root {\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n.search-btn-wrapper {\r\n    flex-basis: 10%;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-top: 1rem;\r\n}\r\n.search-btn {\r\n    width: 26rem;\r\n    padding: 0.7rem;\r\n    font-weight: bold;\r\n    border-radius: 0.3rem;\r\n    border: 0;\r\n    text-align: center;\r\n    background: rgb(255, 255, 255);\r\n    font-size: 1rem;\r\n    transition: all .3s;\r\n    z-index: 10;\r\n}\r\n.search-btn:focus {\r\n    box-shadow: 0rem 0rem 2rem rgb(255, 255, 255), 0rem 0rem 0.9rem rgb(255, 255, 255);\r\n}\r\n.controlPanel {\r\n    flex-basis: 10%;\r\n    display: flex;\r\n    width: 9rem;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n.hidden {\r\n    display: none;\r\n}\r\n.bfPrev,\r\n.prev,\r\n.current,\r\n.next {\r\n    margin: 0.3rem;\r\n    border-radius: 50%;\r\n    width: 1.6rem;\r\n    height: 1.66rem;\r\n    border: 0;\r\n    padding: 0.5rem;\r\n    line-height: 0.8rem;\r\n    background: rgb(245, 237, 237);\r\n    cursor: pointer;\r\n    transition: all .3s;\r\n    user-select: none;\r\n    font-weight: 900;\r\n    position: relative;\r\n}\r\n.current {\r\n    box-shadow: 0rem 0rem 0.5rem rgb(255, 255, 255), 0rem 0rem 0.3rem rgb(255, 255, 255);\r\n}\r\n.bfPrev:hover,\r\n.prev:hover,\r\n.next:hover {\r\n    box-shadow: 0rem 0rem 0.5rem rgb(255, 255, 255), 0rem 0rem 0.3rem rgb(255, 255, 255);\r\n}\r\n.tooltip {\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    font-size: 1.5rem;\r\n    position: absolute;\r\n    background: transparent;\r\n    text-shadow: 0rem 0rem 0.3rem rgb(255, 255, 255), 0rem 0rem 0.6rem rgb(255, 255, 255);\r\n    color: rgb(255, 255, 255);\r\n    top: -116%;\r\n    left: 4%;   \r\n}\r\n.logo {\r\n    position: absolute;\r\n    top: 14%;\r\n    left: 50%;\r\n    width: 50%;\r\n    margin-left: -25%;\r\n    text-align: center;\r\n    font-size: 5.5rem;\r\n    color: rgb(255, 255, 255);\r\n    letter-spacing: -0.4rem;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    text-shadow: 0rem 0rem 0.3rem #fff, 0rem 0rem 0.5rem #fff;\r\n    user-select: none;\r\n    z-index: -1;\r\n}\r\n.animate {\r\n    animation: blur 2s ease-out infinite;\r\n}\r\n@keyframes blur {\r\n  from {\r\n    text-shadow:0rem 0rem 0.6rem rgb(255, 0, 0),\r\n      0rem 0rem 0.6rem rgb(255, 0, 0), \r\n      0rem 0rem 1.6rem rgb(255, 0, 0),\r\n      0rem 0rem 1.6rem rgb(255, 0, 0),\r\n      0rem 0rem 1.6rem rgb(255, 0, 0),\r\n      0rem 0rem 1.6rem rgb(255, 0, 0),\r\n      0rem 0rem 1.6rem rgb(255, 0, 0),\r\n      0rem 0rem 1.6rem rgb(255, 0, 0),\r\n      0rem 0rem 3.1rem rgb(255, 0, 0),\r\n      0rem 0rem 3.1rem rgb(255, 0, 0),\r\n      0rem 0rem 3.1rem rgb(123, 150, 184),\r\n      0rem 0rem 9.5rem rgb(123, 150, 184),\r\n      0rem 0.6rem 6.5rem rgb(123, 150, 184),\r\n      0rem 0.6rem 6.5rem rgb(123, 150, 184),\r\n      0rem 0.6rem 6.5rem rgb(123, 150, 184),\r\n      0rem 0.6rem 6.5rem rgb(123, 150, 184),\r\n      0rem -0.6rem 6.5rem rgb(123, 150, 184),\r\n      0rem -0.6rem 6.5rem rgb(123, 150, 184);\r\n  }\r\n}\r\n@media (min-width: 1201px) and (max-width: 1500px) {\r\n    .item-wrapper {\r\n        width: calc(100%/var(--n)/3);\r\n        align-items: center;\r\n        height: 100%;\r\n    }\r\n    .logo {\r\n        top: 14%;\r\n    }\r\n}\r\n@media (min-width: 700px) and (max-width: 1200px) {\r\n    .item-wrapper {\r\n        width: calc(100%/var(--n)/2);\r\n        align-items: center;\r\n        height: 100%;\r\n    }\r\n    .logo {\r\n        top: 14%;\r\n        width: 100%;\r\n        margin-left: -50%;\r\n    }\r\n}\r\n@media (min-width: 350px) and (max-width: 699px) {\r\n    .root {\r\n        justify-content: flex-start;\r\n    }\r\n    .search-btn-wrapper {\r\n        padding-top: 0;\r\n    }\r\n    .search-btn {\r\n        width: 100%;\r\n        height: 2rem;\r\n        font-size: 1.2rem;\r\n    }\r\n    .slider {\r\n        min-height: 25rem;\r\n        flex-basis: 70%;\r\n    }\r\n    .item-wrapper {\r\n        width: calc(100%/var(--n)/1);\r\n        align-items: center;\r\n        height: 100%;\r\n    }\r\n    .item {\r\n        width: 15rem;\r\n        min-height: 15rem;\r\n        height: 80%;\r\n        margin-top: 2rem;\r\n    }\r\n    .logo {\r\n        font-size: 2.8rem;\r\n        top: 9%;\r\n        width: 100%;\r\n        margin-left: -50%;\r\n    }\r\n    .search-btn {\r\n        height: 1.6rem;\r\n        font-size: 1rem;\r\n    }\r\n    .controlPanel {\r\n        width: 100%;\r\n    }\r\n}",""])},function(e,t,n){"use strict";n.r(t);class r{constructor(e){this.state=e}static createItems(e,t){const n=[];return e.forEach((e,r)=>{const i={};i.title=e.snippet.title,i.link=`https://www.youtube.com/watch?v=${e.id.videoId}`,i.id=e.id.videoId,i.img=e.snippet.thumbnails.medium.url,i.date=new Date(e.snippet.publishedAt).toLocaleDateString().replace(/[.]/g,"-");let{description:s}=e.snippet;s.length<4&&(s="No description :("),s.length>65&&(s=`${s.substr(0,65)}...`),i.description=s,i.author=e.snippet.channelTitle,i.viewCount=t[r].statistics.viewCount,n.push(i)}),n}async getAllInfo(){const e={};return await fetch(`https://www.googleapis.com/youtube/v3/search?key=${this.state.API_KEY}=video&part=snippet&maxResults=15&q=${this.state.name}${this.state.nextPageToken?`&pageToken=${this.state.nextPageToken}`:""}`).then(e=>e.json()).then(t=>(e.nextPageToken=t.nextPageToken,e.id=t.items.map(e=>e.id.videoId),e.data=t.items,fetch(`https://www.googleapis.com/youtube/v3/videos?key=${this.state.API_KEY}&id=${e.id.toString()}&part=snippet,statistics`))).then(e=>e.json()).then(t=>{e.viewCounts=t.items,e.itemsInfo=r.createItems(e.data,e.viewCounts)}).catch(e=>window.console.log(e)),e}}n(2);class i{static createElements(e){const t=document.createElement("li");t.classList.add("item-wrapper");const n=document.createElement("div");n.classList.add("item");const r=document.createElement("div");r.style.background=`url(${e.img}) top no-repeat`,r.style.backgroundSize="cover",r.classList.add("title");const i=document.createElement("a");i.innerHTML=e.title,i.href=`https://www.youtube.com/watch?v=${e.id}`,i.classList.add("title-name"),r.appendChild(i);const s=document.createElement("div");s.classList.add("author");const o=document.createElement("p");o.innerHTML=e.author;const a=document.createElement("span");a.classList.add("fas","fa-male"),s.appendChild(a),s.appendChild(o);const d=document.createElement("div");d.classList.add("date");const l=document.createElement("p");l.innerHTML=e.date;const c=document.createElement("span");c.classList.add("fas","fa-calendar-alt"),d.appendChild(c),d.appendChild(l);const h=document.createElement("div");h.classList.add("viewCount");const u=document.createElement("p");u.innerHTML=e.viewCount;const m=document.createElement("span");m.classList.add("fas","fa-eye"),h.appendChild(m),h.appendChild(u);const p=document.createElement("div");p.classList.add("description");const f=document.createElement("p");return f.innerHTML=e.description,p.appendChild(f),n.appendChild(r),n.appendChild(s),n.appendChild(d),n.appendChild(h),n.appendChild(p),t.appendChild(n),t}render(e){const t=document.querySelector(".slider");e.forEach(e=>t.appendChild(i.createElements(e)))}}n(5);class s{static createRoot(){const e=document.createElement("div");return e.classList.add("root"),document.body.appendChild(e),e}static createSlider(){const e=document.createElement("ul");return e.classList.add("slider"),e}static createInput(){const e=document.createElement("div");e.classList.add("search-btn-wrapper");const t=document.createElement("input");return t.classList.add("search-btn"),t.autofocus=!0,t.placeholder="What kind of video do you want to find?",e.appendChild(t),e}static createLogo(){const e=document.createElement("p");return e.innerHTML="YouTube Client",e.classList.add("logo"),e}static createControlButtons(){const e=document.createElement("div");e.classList.add("controlPanel");const t=document.createElement("button");t.classList.add("bfPrev","hidden"),t.value=0;const n=document.createElement("button");n.classList.add("prev","hidden"),n.value=0;const r=document.createElement("button");r.classList.add("current","hidden"),r.value=0,r.innerHTML=1;const i=document.createElement("button");return i.value=1,i.classList.add("next","hidden"),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(i),e.childNodes.forEach(e=>{const t=document.createElement("span");t.classList.add("hidden","tooltip"),e.appendChild(t)}),e}}(new class{constructor(){this.requestInfo={API_KEY:"AIzaSyBbWnY9aBf7_U99aeuln0_u6DjYqE3Z0BI&type",name:"",nextPageToken:""},this.itemsCounter=0,this.indexToNewRequest=[],this.i=0,this.clientX=null,this.locked=!1,this.windowWidth=0,this.ini=0,this.fin=0,this.itemsOnPage=0}start(){const e=s.createRoot(),t=s.createInput(),n=s.createSlider(),o=s.createLogo(),a=s.createControlButtons();this.addEventListeners(t,n,a),e.appendChild(t),e.appendChild(n),e.appendChild(a),document.body.appendChild(o),this.size(),this.model=new r(this.requestInfo),this.view=new i,this.slider=n}async renderItems(){const e=document.querySelector(".logo");0===this.itemsCounter&&e.classList.add("animate");const t=await this.model.getAllInfo();this.requestInfo.nextPageToken=t.nextPageToken,this.itemsCounter+=t.itemsInfo.length,15===this.itemsCounter?requestAnimationFrame(()=>{this.view.render(t.itemsInfo),this.slider.style.setProperty("--n",this.itemsCounter)}):(this.dataInfo=t.itemsInfo,this.render=!0),this.showButtons(),document.querySelector(".logo").classList.remove("animate")}getIndexToNextRequest(){return 0!==this.i&&this.i+2>this.itemsCounter/this.itemsOnPage-1&&(this.indexToNewRequest.push(this.i),!0)}reRender(){for(;this.slider.firstChild;)this.slider.removeChild(this.slider.firstChild);this.indexToNewRequest=[],this.itemsCounter=0,this.requestInfo.nextPageToken="",this.i=0,this.renderItems(),this.setButtonsValue(),this.slider.style.setProperty("--i",0),document.querySelector(".current").classList.add("hidden")}size(){this.windowWidth=window.innerWidth,this.windowWidth>1500&&(this.itemsOnPage=4,this.setButtonsValue(),requestAnimationFrame(()=>this.slider.style.setProperty("--n",this.itemsCounter))),this.windowWidth<1500&&this.windowWidth>1200&&(this.itemsOnPage=3,this.setButtonsValue(),requestAnimationFrame(()=>this.slider.style.setProperty("--n",this.itemsCounter))),this.windowWidth<1200&&this.windowWidth>700&&(this.itemsOnPage=2,this.setButtonsValue(),requestAnimationFrame(()=>this.slider.style.setProperty("--n",this.itemsCounter))),this.windowWidth<700&&this.windowWidth>350&&(this.itemsOnPage=1,this.setButtonsValue(),requestAnimationFrame(()=>this.slider.style.setProperty("--n",this.itemsCounter))),this.i>this.itemsCounter/this.itemsOnPage&&(this.i=Math.floor(this.itemsCounter/this.itemsOnPage)-1,requestAnimationFrame(()=>this.slider.style.setProperty("--i",this.i)))}unify(e){return e.changedTouches?e.changedTouches[0]:e}lock(e){this.slider.style.cursor="grabbing",this.clientX=this.unify(e).clientX,this.locked=!0}move(e){if(this.locked){const t=this.unify(e).clientX-this.clientX,n=Math.sign(t);let r=+(n*t/this.windowWidth).toFixed(2);this.ini=this.i-n*r,(this.i>0||n<0)&&(this.i+1<this.itemsCounter/this.itemsOnPage||n>0)&&r>.2&&(this.i-=n,r=1-r),this.fin=this.i,this.slider.style.transition="transform .4s ease-in-out",this.ani(),this.clientX=null,this.locked=!1,this.setButtonsValue(),this.slider.style.cursor="grab"}}ani(){requestAnimationFrame(()=>{this.slider.style.setProperty("--i",this.ini+(this.fin-this.ini))})}drag(e){if(e.preventDefault(),this.locked){const t=((this.unify(e).clientX-this.clientX)/this.windowWidth).toFixed(2);requestAnimationFrame(()=>{this.slider.style.setProperty("--i",this.i-t)})}}ButtonsHandler(e){e.preventDefault(),e.stopPropagation(),e.target.classList.contains("current")||(this.slider.style.transition="transform .4s ease-in-out",this.i=+e.target.value,requestAnimationFrame(()=>{this.slider.style.setProperty("--i",this.i),this.setButtonsValue()}))}showTooltip(e){e.target.classList.contains("current")||(""===document.querySelector(".next").firstChild.innerHTML&&this.setButtonsValue(),e.target.firstChild.classList.remove("hidden"))}hideTooltip(e){e.target.classList.contains("current")||e.target.firstChild.classList.add("hidden")}setButtonsValue(){this.getIndexToNextRequest()&&this.renderItems();const e=document.querySelector(".bfPrev"),t=document.querySelector(".prev"),n=document.querySelector(".current"),r=document.querySelector(".next");this.i>=1?t.classList.remove("hidden"):t.classList.add("hidden"),this.i>=2?e.classList.remove("hidden"):e.classList.add("hidden"),this.i+1>this.itemsCounter/this.itemsOnPage&&4===this.itemsOnPage||this.i+2>this.itemsCounter/this.itemsOnPage&&3===this.itemsOnPage||this.i+1>this.itemsCounter/this.itemsOnPage&&2===this.itemsOnPage||this.i+2>this.itemsCounter/this.itemsOnPage&&1===this.itemsOnPage?r.classList.add("hidden"):(this.i+1<this.itemsCounter/this.itemsOnPage&&4===this.itemsOnPage||this.i+1<this.itemsCounter/this.itemsOnPage&&3===this.itemsOnPage||this.i+1<this.itemsCounter/this.itemsOnPage&&2===this.itemsOnPage||this.i+1<this.itemsCounter/this.itemsOnPage&&1===this.itemsOnPage)&&r.classList.remove("hidden"),n.value=this.i,n.firstChild.innerHTML=this.i+1,n.innerHTML=this.i+1,r.value=this.i+1,r.firstChild.innerHTML=this.i+2,t.value=this.i-1,t.firstChild.innerHTML=this.i,e.value=this.i-2,e.firstChild.innerHTML=this.i-1}showButtons(){this.itemsCounter>0&&document.querySelector(".current").classList.remove("hidden"),this.itemsCounter>this.itemsOnPage&&document.querySelector(".next").classList.remove("hidden")}addEventListeners(e,t,n){e.addEventListener("change",e=>{this.requestInfo.name=e.target.value,this.itemsCounter?this.reRender():this.renderItems(),document.querySelector(".search-btn").blur()}),e.addEventListener("submit",e=>{this.requestInfo.name=e.target.value,this.itemsCounter?this.reRender():this.renderItems()}),e.addEventListener("focusin",e=>{e.target.value=""}),window.addEventListener("resize",e=>this.size(e),!1),t.addEventListener("mousedown",e=>this.lock(e),!1),t.addEventListener("mouseleave",e=>{this.requestInfo.lock=!1,this.move(e)},!1),t.addEventListener("touchstart",e=>this.lock(e),!1),t.addEventListener("mousemove",e=>this.drag(e),!1),t.addEventListener("touchmove",e=>this.drag(e),!1),t.addEventListener("mouseup",e=>this.move(e),!1),t.addEventListener("touchend",e=>this.move(e),!1),t.addEventListener("transitionend",()=>{this.render&&requestAnimationFrame(()=>{this.slider.style.setProperty("--n",this.itemsCounter),this.view.render(this.dataInfo),this.render=!1}),this.slider.style.transition="none"}),n.childNodes.forEach(e=>{e.addEventListener("click",e=>this.ButtonsHandler(e),!1),e.addEventListener("mousedown",e=>this.showTooltip(e),!1),e.addEventListener("mouseup",e=>this.hideTooltip(e),!1),e.addEventListener("touchstart",e=>this.ButtonsHandler(e),!1)})}}).start()}]);
//# sourceMappingURL=app.bundle.js.map