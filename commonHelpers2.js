import{f as I,h as R,r as e,i as C,j as B,k as K,g as v,c as g,l as q,m,n as Y,s as w,o as D,p as k,t as T,u as F,v as P,w as b,x as y,y as O,z as M,A as J,B as N,q as j}from"./assets/subscription-724d5721.js";import{b as z,S as G,c as V,P as H}from"./assets/vendor-59e0408b.js";I().then(t=>{let s=R(t.slice(0,2));e.discountCards.innerHTML=s,C()}).catch;B().then(t=>{let s=K(t.slice(0,5));e.popularCards.innerHTML=s,C()}).catch;const _=v(g.CART_KEY);async function L(t){const{target:s}=t,r=s.closest(".cards__button");if(!r)return;const{id:a}=r.closest(".cards__item").dataset,o=await q(a);if(_.some(({_id:d})=>a===d))return;_.push(o);const p=document.querySelector(".header__menu-link-quantity");p.textContent=_.length,localStorage.setItem(g.CART_KEY,JSON.stringify(_)),_.forEach(({_id:d})=>{document.querySelectorAll(`[data-id="${d}"]`).forEach(n=>{const l=n.querySelector(".cards__button");l.innerHTML=`<svg class="icon-checked"><use href="${m}#icon-check"></use></svg>`})})}const A=document.body;async function E(t){t.preventDefault();const{target:s}=t,r=s.closest(".cards__button"),a=s.closest(".cards__link");if(r||!a)return;const{id:o}=a.closest(".cards__item").dataset,i=await q(o),p=c=>{const n=v(g.CART_KEY);if(n.find(({_id:u})=>o===u)){const u=n.findIndex(({_id:f})=>f===o);u!==-1&&n.splice(u,1);const S=document.querySelector(".header__menu-link-quantity");S.textContent=n.length,w(n,g.CART_KEY),n.length||localStorage.removeItem(g.CART_KEY),document.querySelectorAll(`[data-id="${o}"] .cards__button`).forEach(f=>{f.innerHTML=`<svg class="icon__cart" width="18" height="18"><use href="${m}#icon-cart"></use></svg>`,f.closest(".popular__item")&&(f.innerHTML=`<svg class="cart-green" width="18" height="18"><use href="${m}#icon-cart"></use></svg>`)}),c.innerHTML=`Add to <svg class="icon__cart" width="18" height="18"><use href="${m}#icon-cart"></use></svg>`}else{if(n.some(({_id:h})=>o===h))return;n.push(i);const S=document.querySelector(".header__menu-link-quantity");S.textContent=n.length,w(n,g.CART_KEY),n.forEach(({_id:h})=>{document.querySelectorAll(`[data-id="${h}"]`).forEach($=>{const x=$.querySelector(".cards__button");x.innerHTML=`<svg class="icon-checked"><use href="${m}#icon-check"></use></svg>`})}),c.innerHTML=`Remove from <svg class="icon__cart" width="18" height="18"><use href="${m}#icon-cart"></use></svg>`}};z.create(Y(i),{onShow:c=>{A.classList.add("modal-open"),window.addEventListener("keydown",h=>{h.code==="Escape"&&c.close()});const l=c.element().querySelector(".modal__item").querySelector(".cards__button");v(g.CART_KEY).find(({_id:h})=>h===o)?l.innerHTML=`Remove from <svg class="icon__cart" width="18" height="18"><use href="${m}#icon-cart"></use></svg>`:l.innerHTML=`Add to <svg class="icon__cart" width="18" height="18"><use href="${m}#icon-cart"></use></svg>`,l.addEventListener("click",()=>p(l)),C(),c.element().querySelector(".modal__item-close").onclick=c.close},onClose:c=>{A.classList.remove("modal-open"),window.removeEventListener("keydown",u=>{u.code==="Escape"&&c.close()});const l=c.element().querySelector(".modal__item").querySelector(".cards__button");l.removeEventListener("click",()=>p(l))}}).show(),new G(document.querySelector(".cards__desc-modal"))}D().then(t=>{let s=t.map(i=>k(i));localStorage.setItem("filter",T);let r=s.map(i=>`<option value="${i}">${k(i)}</option>`).join(""),a="<option  selected  >Show all</option>";e.productsFiltersSelect.innerHTML=r+a,new V({select:e.productsFiltersSelect,settings:{showSearch:!1,openPosition:"down"}}).setData(document.querySelector(".ss-single").textContent="Categories")}).catch;F().then(t=>{let s=P(t.results);e.productsCards.innerHTML=s,y.totalItems=t.perPage*t.totalPages,new H(b,y).on("beforeMove",O),C()}).catch();e.productsFiltersSelect.addEventListener("change",M);e.btnSubmit.addEventListener("submit",J);e.productsFiltersSelect.addEventListener("change",M);const Q=new H(b,y);Q.on("beforeMove",t=>{const s=t.page,r=e.productsFiltersSelect.options[e.productsFiltersSelect.selectedIndex];let a=localStorage.getItem("filter"),o=a?JSON.parse(a):{};const i=r.textContent!=="Show all"?r.textContent:null;o.category=i;let p=T;o.page=s,localStorage.setItem("filter",JSON.stringify(o)),o.keyword===null&&o.category===null&&N(s,o.limit).then(d=>{let c=P(d.results);localStorage.setItem("filter",p),e.productsCards.innerHTML=c}).catch(d=>{console.error(d)})});e.productsCards.addEventListener("click",L);e.popularCards.addEventListener("click",L);e.discountCards.addEventListener("click",L);const U=v(g.CART_KEY);j(U);e.productsCards.addEventListener("click",E);e.popularCards.addEventListener("click",E);e.discountCards.addEventListener("click",E);
//# sourceMappingURL=commonHelpers2.js.map