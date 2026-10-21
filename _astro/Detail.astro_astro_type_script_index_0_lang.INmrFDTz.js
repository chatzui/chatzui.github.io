import{a as i,l as t,t as e}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import"./web-button.DzrrIr-d.js";import{a as s,n,r as a,t as o}from"./crud.DPYAF5eE.js";import"./svc-player.CuhDiS0Z.js";var r="posts";async function c(i,t,e){return s().bump(r,i,`meta.${t}`,e)}async function l(i){const t=await a(r).findById(i);if(!t)return null;const e=function(i){return"string"==typeof i.meta?JSON.parse(i.meta||"{}"):i.meta??{}}(t);return{views:Number(e.views||0),likes:Number(e.likes||0)}}var d="engage";async function h(){return await o(d)??{liked:{},viewed:{}}}var p=class extends e{static styles=t(":host{display:inline-flex}.svc-engage{align-items:center;gap:1rem;display:flex}.engage-views{opacity:.6;color:var(--color-base-content);align-items:center;gap:.25rem;font-size:.875rem;display:flex}.engage-views iconify-icon{font-size:1rem}");static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},postId:{type:String},initialViews:{type:Number},initialLikes:{type:Number},_views:{state:!0},_likes:{state:!0},_liked:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.postId="",this.initialViews=0,this.initialLikes=0,this._views=0,this._likes=0,this._liked=!1}connectedCallback(){super.connectedCallback(),this._dcInit()}async _dcInit(){if(!this.postId)return;this._views=Number(this.initialViews)||0,this._likes=Number(this.initialLikes)||0,this._liked=await async function(i){return!!(await h()).liked[i]}(this.postId);const i=await l(this.postId);i&&(this._views=i.views,this._likes=i.likes),this._dcTrackView()}async _dcTrackView(){if(await async function(i){const t=(await h()).viewed[i];return!t||Date.now()-t>=3e4}(this.postId)){this._views+=1;try{const i=await c(this.postId,"views",1);this._views=i,await async function(i){const t=await h();t.viewed[i]=Date.now(),await n(d,t,0)}(this.postId)}catch(i){this._views-=1,console.error("[svc-engage] track view failed",i)}}}async _dhLike(){if(!this._liked){this._liked=!0,this._likes+=1;try{const i=await c(this.postId,"likes",1);this._likes=i,await async function(i){const t=await h();t.liked[i]=!0,await n(d,t,0)}(this.postId)}catch(i){console.error("[svc-engage] like failed",i),this._liked=!1,this._likes-=1}}}render(){return i`
            <div class="svc-engage">
                ${this._rbLikeButton()}
                ${this._rbViews()}
            </div>
        `}_rbLikeButton(){return i`
            <web-button
                type=${"soft"}
                color="primary"
                rounded="9999px"
                height="28px"
                fontSize="0.875rem"
                ?disabled=${this._liked}
                ui=${this.ui}
                theme=${this.theme}
                @click=${()=>this._dhLike()}
            >
                <iconify-icon slot="prefix" width="18" icon=${this._liked?"ri:heart-fill":"ri:heart-line"}></iconify-icon>
                ${this._likes.toLocaleString("vi-VN")}
            </web-button>
        `}_rbViews(){return i`
            <span class="engage-views">
                <iconify-icon width="18" icon="ri:eye-line"></iconify-icon>
                ${this._views.toLocaleString("vi-VN")}
            </span>
        `}};customElements.get("svc-engage")||customElements.define("svc-engage",p),document.addEventListener("click",async i=>{const t=i.target.closest("[data-copy]");if(!t)return;const e=t.querySelector("[data-copy-label]");try{if(await navigator.clipboard.writeText(t.dataset.copy||""),!e)return;const i=e.innerHTML;e.textContent="en"===document.documentElement.lang?"Copied!":"Đã copy!",setTimeout(()=>{e.innerHTML=i},1500)}catch{}});