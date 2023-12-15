import{a as $,P as p,b as H}from"./vendor-59e0408b.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const O={CART_KEY:"cart"},o={productsFilters:document.querySelector(".products__filters-input"),productsFiltersSelect:document.querySelector(".products__filters-select"),productsCards:document.querySelector(".cards"),btnSubmit:document.querySelector(".products__filters-form"),input:document.querySelector(".products__filters-input"),discountCards:document.querySelector(".discount__list"),popularCards:document.querySelector(".popular__list"),cardWrapper:document.querySelector(".cart__wrapper"),pagination:document.querySelector(".tui-pagination"),cartProducts:document.querySelector(".cart__products"),cartQuantity:document.querySelectorAll(".cart-quantity"),deleteAllProductsFromCart:document.querySelector(".cart__delete-button"),totalPrice:document.querySelector("#cart__total"),sendForm:document.querySelector(".checkout__field"),paginationElement:document.querySelector(".tui-pagination")};let N={keyword:null,category:null,page:1,limit:6},Z=JSON.stringify(N);const j=document.querySelector(".footer__form");function ee(s){return o.cartQuantity.forEach(n=>n.textContent=s.length)}const C="https://food-boutique.b.goit.study/api",_=$.create({baseURL:`${C}/products`}),F=$.create({baseURL:`${C}/subscription`}),te=$.create({baseURL:`${C}/orders`});function se(s,n){localStorage.setItem(n,JSON.stringify(s))}function z(s){try{const n=localStorage.getItem(s);return n?JSON.parse(n):[]}catch(n){console.log(n.message)}}const g="/js-94_l-dmitry94/assets/icons-30be3c26.svg";async function R(){const s=z(O.CART_KEY);s&&s.forEach(({_id:n})=>{const r=document.querySelector(`[data-id="${n}"]`);if(r){const i=r.querySelector(".cards__button");i.innerHTML=`<svg class="icon-checked"><use href="${g}#icon-check"></use></svg>`}})}const d=o.pagination,a={totalItems:100,itemsPerPage:9,visiblePages:2,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};function m(s){const n=s.page,r=o.productsFiltersSelect.options[o.productsFiltersSelect.selectedIndex];let i=localStorage.getItem("filter"),t=i?JSON.parse(i):{};const e=r.textContent!=="Show all"?r.textContent:null;t.category=e,t.page=n,localStorage.setItem("filter",JSON.stringify(t));const l=o.productsFiltersSelect.value;t.keyword===null&&l==="Show all"?D(n,a.itemsPerPage).then(c=>{let f=u(c.results);o.productsCards.innerHTML=f}).catch(c=>{console.error(c)}):t.keyword!==null&&l==="Show all"?P(t.keyword,n,a.itemsPerPage).then(c=>{let f=u(c.results);c.perPage*c.totalPages,o.productsCards.innerHTML=f}).catch(c=>{console.error(c)}):t.keyword!==null&&t.category!==null?E(t.keyword,t.category,n,a.itemsPerPage).then(c=>{let f=u(c.results);c.perPage*c.totalPages,o.productsCards.innerHTML=f}).catch(c=>{console.error(c)}):t.keyword===null&&t.category!==null&&L(b(t.category),n,a.itemsPerPage).then(c=>{let f=u(c.results);a.totalItems=c.perPage*c.totalPages,o.productsCards.innerHTML=f}).catch(c=>{console.error(c)})}function A(){window.innerWidth<768?(a.visiblePages=2,a.itemsPerPage=6):window.innerWidth>=768&&window.innerWidth<=1303?(a.visiblePages=3,a.itemsPerPage=8):(a.visiblePages=4,a.itemsPerPage=9)}window.addEventListener("resize",A);A();async function oe(){return(await _({method:"GET",url:"/categories"})).data}async function q(){const s=await _({method:"GET",url:`?page=1&limit=${a.itemsPerPage}`});return R(),s.data}async function D(s,n){return(await _({method:"GET",url:`?page=${s}&limit=${n}`})).data}async function P(s,n,r){return(await _({method:"GET",url:`?keyword=${s}&page=${n}&limit=${r}`})).data}async function E(s,n,r,i){return(await _({method:"GET",url:`?keyword=${s}&category=${n}&page=${r}&limit=${i}`})).data}async function L(s,n,r){return(await _({method:"GET",url:`?category=${s}&page=${n}&limit=${r}`})).data}async function ae(s){return(await _({method:"GET",url:`/${s}`})).data}async function ne(){return(await _({method:"GET",url:"/discount"})).data}async function re(){return(await _({method:"GET",url:"/popular"})).data}function w(s){return s=s.replace("_&_"," / "),s=s.replace("_"," "),s}function b(s){return s=s.replace(/ /g,"_"),s=s.replace(/\//g,encodeURIComponent("&")),s}function ie(){const s=o.productsFiltersSelect.options[o.productsFiltersSelect.selectedIndex];let n=localStorage.getItem("filter"),r=n?JSON.parse(n):{};const i=s.textContent!=="Show all"?s.textContent:null;r.category=i,r.category===null&&r.keyword===null?(r.category=null,q().then(t=>{let e=u(t.results);o.productsCards.innerHTML=e,a.totalItems=t.perPage*t.totalPages,new p(d,a).on("beforeMove",m),o.paginationElement.style.display="block"}).catch):r.category!==null&&r.keyword===null?L(b(r.category),1,a.itemsPerPage).then(t=>{if(t.totalPages===0){let e=u(t.results);o.productsCards.innerHTML=e,o.paginationElement.setAttribute("style","display:none !important"),o.productsCards.innerHTML=y()}else if(t.perPage*t.totalPages<=a.itemsPerPage){a.totalItems=t.perPage*t.totalPages,o.paginationElement.setAttribute("style","display:none !important"),new p(d,a).on("beforeMove",m);let l=u(t.results);o.productsCards.innerHTML=l}else{a.totalItems=t.perPage*t.totalPages,new p(d,a).on("beforeMove",m);let l=u(t.results);o.productsCards.innerHTML=l,o.paginationElement.style.display="block"}}).catch(t=>{console.log(t)}):r.category===null&&r.keyword!==null?(localStorage.setItem("filter",JSON.stringify(r)),P(r.keyword,a.page,a.itemsPerPage).then(t=>{if(t.totalPages===0){let e=u(t.results);o.productsCards.innerHTML=e,o.paginationElement.setAttribute("style","display:none !important"),o.productsCards.innerHTML=y()}else if(t.perPage*t.totalPages<=a.itemsPerPage){a.totalItems=t.perPage*t.totalPages,o.paginationElement.setAttribute("style","display:none !important"),new p(d,a).on("beforeMove",m);let l=u(t.results);o.productsCards.innerHTML=l}else{a.totalItems=t.perPage*t.totalPages,new p(d,a).on("beforeMove",m);let l=u(t.results);o.productsCards.innerHTML=l,o.paginationElement.style.display="block"}}).catch):r.category!==null&&r.keyword!==null&&E(r.keyword,b(r.category),a.page,a.itemsPerPage).then(t=>{if(t.totalPages===0){let e=u(t.results);o.productsCards.innerHTML=e,o.paginationElement.setAttribute("style","display:none !important"),o.productsCards.innerHTML=y()}else if(t.perPage*t.totalPages<=a.itemsPerPage){a.totalItems=t.perPage*t.totalPages,o.paginationElement.setAttribute("style","display:none !important"),new p(d,a).on("beforeMove",m);let l=u(t.results);o.productsCards.innerHTML=l}else{a.totalItems=t.perPage*t.totalPages,new p(d,a).on("beforeMove",m);let l=u(t.results);o.productsCards.innerHTML=l,o.paginationElement.style.display="block"}}).catch(t=>{console.log(t)}),localStorage.setItem("filter",JSON.stringify(r))}function le(s){s.preventDefault();const n=o.input.value;let r=localStorage.getItem("filter"),i=r?JSON.parse(r):{};const t=n!==""?n:null;i.keyword=t,localStorage.setItem("filter",JSON.stringify(i)),i.keyword===null&&i.category!==null?L(b(i.category),1,a.itemsPerPage).then(e=>{if(e.totalPages===0){let l=u(e.results);o.productsCards.innerHTML=l,o.paginationElement.setAttribute("style","display:none !important"),o.productsCards.innerHTML=y()}else if(e.perPage*e.totalPages<=a.itemsPerPage){a.totalItems=e.perPage*e.totalPages,o.paginationElement.setAttribute("style","display:none !important"),new p(d,a).on("beforeMove",m);let c=u(e.results);o.productsCards.innerHTML=c}else{a.totalItems=e.perPage*e.totalPages,new p(d,a).on("beforeMove",m);let c=u(e.results);o.productsCards.innerHTML=c,o.paginationElement.style.display="block"}}).catch(e=>{console.error(e)}):i.keyword===null&&i.category===null?q().then(e=>{let l=u(e.results);a.totalItems=e.perPage*e.totalPages,o.paginationElement.style.display="block",new p(d,a).on("beforeMove",m),o.productsCards.innerHTML=l}).catch(e=>{console.error(e)}):i.keyword!==null&&i.category===null?P(i.keyword.toLowerCase(),1,a.itemsPerPage).then(e=>{if(e.totalPages===0){let l=u(e.results);o.productsCards.innerHTML=l,o.paginationElement.setAttribute("style","display:none !important"),o.productsCards.innerHTML=y()}else if(e.perPage*e.totalPages<=a.itemsPerPage){a.totalItems=e.perPage*e.totalPages,o.paginationElement.setAttribute("style","display:none !important"),new p(d,a).on("beforeMove",m);let c=u(e.results);o.productsCards.innerHTML=c}else{a.totalItems=e.perPage*e.totalPages,new p(d,a).on("beforeMove",m);let c=u(e.results);o.productsCards.innerHTML=c,o.paginationElement.style.display="block"}}).catch(e=>{console.error(e)}):i.keyword!==null&&i.category!==null?E(i.keyword.toLowerCase(),i.category,1,a.itemsPerPage).then(e=>{if(e.totalPages===0){let l=u(e.results);o.productsCards.innerHTML=l,o.paginationElement.setAttribute("style","display:none !important"),o.productsCards.innerHTML=y()}else if(e.perPage*e.totalPages<=a.itemsPerPage){a.totalItems=e.perPage*e.totalPages,o.paginationElement.setAttribute("style","display:none !important"),new p(d,a).on("beforeMove",m);let c=u(e.results);o.productsCards.innerHTML=c}else{a.totalItems=e.perPage*e.totalPages,new p(d,a).on("beforeMove",m);let c=u(e.results);o.productsCards.innerHTML=c,o.paginationElement.style.display="block"}}).catch(e=>{console.error(e)}):i.keyword!==null&&i.category===null&&(localStorage.setItem("filter",JSON.stringify(i)),P(i.keyword.toLowerCase(),1,a.itemsPerPage).then(e=>{if(e.totalPages===0){let l=u(e.results);o.productsCards.innerHTML=l,o.paginationElement.setAttribute("style","display:none !important"),o.productsCards.innerHTML=y()}else if(e.perPage*e.totalPages<=a.itemsPerPage){a.totalItems=e.perPage*e.totalPages,o.paginationElement.setAttribute("style","display:none !important"),new p(d,a).on("beforeMove",m);let c=u(e.results);o.productsCards.innerHTML=c}else{a.totalItems=e.perPage*e.totalPages,new p(d,a).on("beforeMove",m);let c=u(e.results);o.productsCards.innerHTML=c,o.paginationElement.style.display="block"}}).catch(e=>{console.error(e)}))}const T="/js-94_l-dmitry94/assets/empty-mobile-88cc64a6.png",J="/js-94_l-dmitry94/assets/empty-mobile@2x-9530797e.png",G="/js-94_l-dmitry94/assets/empty-tab-8d1fa0db.png",B="/js-94_l-dmitry94/assets/empty-tab@2x-36112229.png",I="/js-94_l-dmitry94/assets/checkout-image-046578b5.png",U="/js-94_l-dmitry94/assets/checkout-image-046578b5.png";function u(s){return s.map(({_id:n,name:r,img:i,category:t,price:e,size:l,popularity:c})=>`
                <li class="cards__item" data-id="${n}">
                <a class="cards__link" href="#">
                        <div class="cards__background-img">
                            <img class="cards__image-photo-js" loading="lazy" src="${i}" alt="${r}" />
                        </div>
                        <h4 class="cards__title">${r}</h4>
                        <ul class="cards__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${w(t)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${l}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${c}</span></p>
                            </li>
                        </ul>
                        <div class="cards__main">
                        <p class="cards__price">$${e}</p>
                            <button class="cards__button" type="button">
                                <svg class="icon__cart">
                                    <use href="${g}#icon-cart"></use>
                                </svg>
                            </button>
                        </div>
                        <svg class="icon__cart-discount">
                        <use href="${g}#icon-discount"></use>
                   </svg>
                    </a>
                </li>`).join("")}function ce(s){return s.map(({_id:n,name:r,img:i,category:t,size:e,popularity:l})=>`<li class="cards__item popular__item" data-id="${n}">
                    <a class="popular__link" href="#">
                <div class="cards__background-img popular__img">
                    <img class="cards__image-photo-js" loading="lazy" src="${i}" alt="${r}" />
                </div>
                <div class="popular__card-description">
                    <h4 class="cards__title">${r}</h4>
                     <ul class="popular__info">
                            <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${w(t)}</span></p>
                        
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${e}</span></p>
                               
                            </li>
                            <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${l}</span></p>
                            </li>
                        </ul>
                </div>
                <button class="popular__card-button cards__button" type="button">
                    <svg class="icon__cart">
                        <use href="${g}#icon-cart"></use>
                    </svg>
                </button>
            </a>
        </li>`).join("")}function ue(s){return s.map(({_id:n,name:r,img:i,price:t})=>`<li class="discount__item cards__item" data-id="${n}">
                 <a class="discount__link cards__link" href="#">
                  <div class="discount__image">
            <img class="cards__image-photo-js" loading="lazy" src="${i}" alt="${r}" /> </div>
            <div class="discount__descr">
            <p class="cards__title">${r}</p>
                    <div class="discount__price-container">
                        <p class="cards__price">${t}</p>
                        <button class="cards__button" type="button">
                <svg class="icon__cart">
                    <use href="${g}#icon-cart"></use>
                </svg>
                </button>
                    </div>
                        
            </div><svg class="icon__discount">
                            <use href="${g}#icon-discount"></use>
                         </svg>  
                 </a>
                 </li>`).join("")}function pe({_id:s,name:n,img:r,category:i,price:t,size:e,popularity:l,desc:c}){return`<div class="modal__item cards__item" data-id="${s}">
                <div class="cards__main-upper">
                    <img class="cards__image-photo" loading="lazy" src="${r}" alt="${n}" />
                    <div class="cards__main up">
                </div>
      <div class="cards__main-modal">
      <h4 class="cards__title modal">${n}</h4>
                    <ul class="modal__info">
                        <li class="cards__info-item">
                            <p class="cards__info-title">Category: <span class="cards__info-value">${w(i)}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Size: <span class="cards__info-value">${e}</span></p>
                        </li>
                        <li class="cards__info-item">
                            <p class="cards__info-title">Popularity: <span class="cards__info-value">${l}</span></p>
                        </li>
                    </ul>
                    <p class="cards__desc-modal">${c}</p>
                </div>
                
                <button class="modal__item-close" type="button">
                    <svg class="checkout__modal-close-icon">
                        <use href="${g}#icon-close"></use>
                    </svg>
                </button>
            </div><div class="cards__main">
            <p class="cards__price">$${t}</p>
            <button class="cards__button add__to-button" type="button"> Add to
                <svg class="icon__cart" width="18" height="18">
                    <use href="${g}#icon-cart"></use>
                </svg>
            </button>
        </div>`}function de(s){return s.map(({_id:n,name:r,img:i,category:t,price:e,size:l})=>`
            <li class="cart__products-item" data-id="${n}">
                <div class="cart__item-space">
                    <img src="${i}" alt="${r}" loading="lazy" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${r}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${w(t)}</p>
                        </li>
                        <li class="cart__item">
                            <p class="cart__item-name">Size:</p>
                            <p class="cart__item-value">${l}</p>
                        </li>
                    </ul> 
                    <div class="cart__item-main">
                        <span class="cart__item-price">$${e}</span>
                    </div>
                </div>
                <button class="cart__item-close">
                    <svg class="cart__item-icon">
                        <use href="${g}#icon-close"></use>
                    </svg>
                </button>
            </li>
    `).join("")}function me(){return`
    <div class="empty">
    <picture>
        <source media="(min-width: 768px)" srcset="${G} 1x, ${B} 2x">
        <source media="(min-width: 320px)" srcset="${T} 1x, ${J} 2x">
        <img class="empty__img" loading="lazy" src="${T}" alt="Empty">
    </picture>
    <h3 class="empty__title">Your basket is <span class="empty__title-color">empty...</span></h3>
    <p class="empty__descr">Go to the main page to select your favorite products and add them to the cart.</p>
</div>
`}function ge(s){return`
        <div class="checkout__modal">
            <button class="checkout__close">
                <svg class="checkout__modal-close-icon">
                    <use href="${g}#icon-close"></use>
                </svg>
            </button>
            <div class="checkout__modal-image-shadow">
                <img
                    class="checkout__modal-img"
                    loading="lazy"
                    src="${I}"
                    srcset="
                        ${I}   1x,
                        ${U} 2x
                    "
                    alt="Order picture"
                />
                <svg class="icon-ellipse">
                    <use href="${g}#icon-ellipse-1"></use>
                </svg>
            </div>

            <div class="checkout__modal-txt-container">
                <h3 class="checkout__modal-title">ORDER SUCCESS</h3>
                <p class="checkout__modal-descr">
                    ${s}
                </p>
            </div>
        </div>
    `}function y(){return`
        <div class="markup">
            <h3 class="markup-title">
                Nothing was found for the selected
                <span class="markup-title-span">filters...</span>
            </h3>
            <p class="markup-descr">
                Try adjusting your search parameters or browse our range by other
                criteria to find the perfect product for you.
            </p>
        </div>
        `}const W="/js-94_l-dmitry94/assets/subscription-tab-ac534afc.png",K="/js-94_l-dmitry94/assets/subscription.png-0e0f2d9d.png",S=window.matchMedia("(min-width: 768px)");let v,k;const h=H.create(`
<div class="modal">
<div class="footer__modal">
    <button type="button" class="footer__modal-close">
        <svg class="footer__modal-icon">
            <use href="${g}#icon-close"></use>
        </svg>
    </button>
    <div class="footer__modal-title-text">
        <h2 class="footer__modal-title">
            Thanks for subscribing for
            <span class="footer__modal-span">new </span>products
        </h2>
        <p class="footer__modal-text">
            We promise you organic and high-quality products that will meet
            your expectations. Please stay with us and we promise you many
            pleasant surprises.
        </p>
    </div>
    <div class="footer__modal-png">
        <img
            src="${v}"
            alt="bascket of products"
        />
    </div>
</div>
</div>
`,{onShow:()=>{window.addEventListener("keydown",x),k=h.element().querySelector(".footer__modal-close"),k.addEventListener("click",()=>h.close()),document.body.classList.add("modal-open")},onClose:()=>{k.removeEventListener("click",()=>h.close()),window.removeEventListener("keydown",x),S.removeEventListener("change",M),document.body.classList.remove("modal-open")}});function x(s){s.code==="Escape"&&h.close()}function M(){S.addEventListener("change",M),S.matches?v=W:v=K,h.show(()=>{const s=h.element().querySelector(".footer__modal-png");s&&(s.querySelector("img").src=v)})}const Y=function(){let s;const n=H.create(`
        <div class="modal-Existed">
        <div class="footer__modal-Existed">
            <button type="button" class="footer__modal-close">
                <svg class="footer__modal-icon">
                    <use href="${g}#icon-close"></use>
                </svg>
            </button>
            <div class="footer__modal-title-text-Existed">
                <h2 class="footer__modal-title-Existed">
                    This
                    <span class="footer__modal-span-Existed">email address</span>
                    has already been entered
                </h2>
                <p class="footer__modal-text-Existed">
                    You have already subscribed to our new products. Watch for
                    offers at the mailing address.
                </p>
            </div>
        </div>
    </div>
`,{onShow:i=>{window.addEventListener("keydown",r),s=i.element().querySelector(".footer__modal-close"),s.addEventListener("click",()=>i.close()),document.body.classList.add("modal-open")},onClose:()=>{s.removeEventListener("click",()=>n.close()),window.removeEventListener("keydown",r),document.body.classList.remove("modal-open")}});n.show();function r(i){i.code==="Escape"&&n.close()}};j.addEventListener("submit",Q);function Q(s){s.preventDefault();const{value:n}=s.currentTarget.elements.email;n!==""&&(V(n),s.target.reset())}async function V(s){try{(await F({method:"POST",data:{email:s}})).statusText==="Created"&&M()}catch({response:n}){n.statusText==="Conflict"&&Y()}}export{le as A,D as B,me as a,de as b,O as c,te as d,ge as e,ne as f,z as g,ue as h,R as i,re as j,ce as k,ae as l,g as m,pe as n,oe as o,w as p,ee as q,o as r,se as s,Z as t,q as u,u as v,d as w,a as x,m as y,ie as z};
//# sourceMappingURL=subscription-724d5721.js.map
