!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire699f;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire699f=r),r("aL5D8"),r("i8Q71"),r("1KhuP");var a=r("5g02X");r("e0N5w");var o=r("8sS99");r("aL5D8");!function(){for(var e=document.querySelector(".contain__table"),t=document.querySelector(".contain__select"),n=[],r=65;r<91;r++)n.push(String.fromCharCode(r));for(var i=49;i<58;i++)n.push(String.fromCharCode(i));n.push(String.fromCharCode(48));for(var c="",l=0;l<n.length;l++){0!=l&&13!=l&&26!=l||(c+="<tr>"),26==l&&(c+='<td class="table__item"></td>'),c+='<td class="table__item" data-value="'.concat(n[l],'">').concat(n[l],"</td>"),12!=l&&25!=l&&38!=l||(c+="</tr>");try{t.insertAdjacentHTML("beforeend",'<option class="select__item" data-value="'.concat(n[l],'">').concat(n[l],"</option>"))}catch(e){}}e&&(e.innerHTML=c,e.addEventListener("click",(function(e){null!==document.querySelector(".table__item--activ")&&document.querySelector(".table__item--activ").classList.remove("table__item--activ"),e.target.classList.add("table__item--activ"),d(e.target.dataset.value)})));try{t.addEventListener("change",(function(e){return d(e.target.value)}))}catch(e){}function d(e){var t=e.toLowerCase(),n=new(0,a.FetchCocktails);document.querySelector(".gallery__list");n.fetchCocktailsByFirstLetter(t).then((function(e){e.data.drinks,(0,o.renderPagination)(e.data)})).catch((function(e){return console.log(e)}))}}();var i=r("1KhuP");a=r("5g02X");r("e0N5w"),r("aL5D8"),r("e0N5w");for(var c=r("givgM"),l=document.querySelector(".gallery__list"),d=document.querySelector(".gallery__title"),s=new(0,a.FetchCocktails),u=[],f=0;f<9;f++){var v=s.fetchCocktailsRandom().then((function(e){return e||new Promise}));v&&u.push(v)}Promise.all(u).then((function(e){var t=e.flatMap((function(e){return e.data.drinks}));if(window.innerWidth>=1280)d.textContent="Cocktails",l.insertAdjacentHTML("beforeend",(0,i.galleryMarkUp)(t));else if(window.innerWidth<768){var n=t.slice(0,3);d.textContent="Cocktails",l.insertAdjacentHTML("beforeend",(0,i.galleryMarkUp)(n))}else{var r=t.slice(0,6);d.textContent="Cocktails",l.insertAdjacentHTML("beforeend",(0,i.galleryMarkUp)(r))}(0,i.addOnLearnMoreClick)(t),(0,c.addLikeClick)(t)})),r("e0N5w"),r("iv9BY"),r("8sS99")}();
//# sourceMappingURL=index.fcef4167.js.map
