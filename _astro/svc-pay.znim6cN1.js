const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/crud.zgQ_dBQH.js","_astro/rolldown-runtime.Bpd4S2KM.js","_astro/util.usvuopSX.js","_astro/site.8LVfOMIu.js","_astro/requester.jXCkXaDG.js","_astro/supabase.CVztqh8l.js","_astro/storager.hYpI1feR.js","_astro/svc-auth.CfUS6gjH.js","_astro/lit.Db6wVdDu.js","_astro/iconify-icon.BQKUsOMK.js","_astro/web-button.DzrrIr-d.js","_astro/a11y.YT6k77dx.js","_astro/pastel.ChvuEMaS.js","_astro/web-text.DJCnRip-.js","_astro/service.sSgTDzwg.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime.Bpd4S2KM.js";import{a as t,l as i,t as r}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import"./web-button.DzrrIr-d.js";import{t as s}from"./pastel.ChvuEMaS.js";import{C as o,S as n,T as a,_ as l,a as c,o as h,s as d,w as p}from"./util.usvuopSX.js";import{r as m}from"./crud.zgQ_dBQH.js";import{t as u}from"./preload-helper.CWk6GCoH.js";import"./web-fab.D4RerPV8.js";import"./web-text.DJCnRip-.js";import"./web-dialog.BfrF0jkq.js";import{a as b,c as f,d as y,f as _,i as g,l as v,m as $,n as x,o as w,p as k,r as P,s as S,t as C,u as I}from"./svc-pay-valider.BB7kbFRa.js";import"./web-steps.uN-Wa94G.js";import"./web-alert.DY9Go6nz.js";import"./web-toast.CR7RBqbz.js";import"./web-tooltip.DvfV2oqy.js";import{n as D,r as M,s as j}from"./conductor.3JgHo9oO.js";import"./web-toggle.Ca6T_js5.js";import"./web-expansion.dpiTm1i5.js";import"./web-location-map.DWp6hrxg.js";import"./web-textarea.CbXw9tVO.js";import"./svc-photor.D6Ne4lyn.js";var T={vi:{label:"Mã khuyến mãi",ph:"Nhập mã giảm giá",apply:"Áp dụng",applied:"đã được áp dụng",errInvalid:"Mã không hợp lệ hoặc đã hết hạn",errMinOrder:"Đơn tối thiểu",errUsedUp:"Mã đã hết lượt sử dụng",createBtn:"Tạo mã",createTitle:"Tạo mã khuyến mãi mới",suggestLabel:"Mẫu có sẵn — bấm để điền nhanh",createSpecialTitle:"Tạo voucher gửi riêng",createSpecialBtn:"Gửi voucher",existingLabel:"Mã khuyến mãi đang tồn tại",remainingLabel:"Còn lại",fCode:"Mã (vd: SALE10)",fLabel:"Nhãn hiển thị (vd: Giảm 10%)",fDiscount:"Mức giảm",fQuantity:"Số lượng lượt dùng (bỏ trống = mặc định 1)",fMinOrder:"Đơn tối thiểu (không bắt buộc)",fMaxDiscount:"Giảm tối đa (không bắt buộc, chỉ áp dụng cho %)",percent:"Theo %",fixed:"Số tiền cố định",errRequired:"Vui lòng nhập đủ mã, nhãn và mức giảm",maxDiscHint:"Giảm tối đa",deleteTitle:"Xoá mã này",usedHint:"Dùng"},en:{label:"Promo code",ph:"Enter promo code",apply:"Apply",applied:"has been applied",errInvalid:"Invalid or expired code",errMinOrder:"Minimum order",errUsedUp:"This code has reached its usage limit",createBtn:"New code",createTitle:"Create new promo code",suggestLabel:"Templates — click to fill in",createSpecialTitle:"Create a private voucher",createSpecialBtn:"Send voucher",existingLabel:"Existing promo codes",remainingLabel:"Remaining",fCode:"Code (eg. SALE10)",fLabel:"Display label (eg. 10% off)",fDiscount:"Discount amount",fQuantity:"Usage limit (leave blank = defaults to 1)",fMinOrder:"Minimum order (optional)",fMaxDiscount:"Max discount (optional, percent only)",percent:"Percent",fixed:"Fixed amount",errRequired:"Code, label and discount are required",maxDiscHint:"Max discount",deleteTitle:"Delete this code",usedHint:"Used"}},q={code:"",label:"",type:"percent",discount:"",minOrder:"",maxDiscount:""},L=class extends r{static styles=i(":host{display:block}.section-label{opacity:.7;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.625rem;font-size:.72rem;font-weight:700}.promo-header{justify-content:space-between;align-items:center;margin-bottom:.625rem;display:flex}.promo-header .section-label{margin-bottom:0}.promo-row{gap:.5rem;margin-bottom:.5rem;display:flex}.promo-input-wrap{flex:1;align-items:center;display:flex;position:relative}.promo-clear{position:absolute;right:.5rem}.promo-input{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 15%, transparent);background:color-mix(in oklab, var(--color-base-200,#eee) 50%, transparent);width:100%;color:var(--color-base-content,#111);text-transform:uppercase;letter-spacing:.05em;border-radius:.625rem;outline:none;padding:.5rem 2rem .5rem .75rem;font-size:.875rem;font-weight:600;transition:border-color .2s}.promo-input:focus{border-color:var(--color-primary,#fbbf24)}.promo-input::placeholder{text-transform:none;letter-spacing:normal;opacity:.7;font-weight:400}.promo-msg{align-items:center;gap:.3rem;padding:.3rem 0;font-size:.8rem;display:flex}.promo-msg.ok{color:var(--color-success,#22c55e)}.promo-msg.err{color:var(--color-error,#f5465c)}.promo-hints{flex-wrap:wrap;gap:.375rem;margin-top:.375rem;display:flex}.promo-chip-info{vertical-align:middle;color:var(--color-base-content,#111);opacity:.7;cursor:help;margin:0 -.25rem;transition:opacity .2s}.promo-chip-info:hover{opacity:1}.promo-chip-delete{vertical-align:middle;color:var(--color-base-content,#111);opacity:.7;cursor:pointer;margin-right:-.25rem;transition:opacity .2s,color .2s}.promo-chip-delete:hover{opacity:1;color:var(--color-error,#f5465c)}.promo-form{text-align:left;flex-direction:column;gap:.75rem;margin-bottom:1rem;display:flex}.promo-type-toggle{gap:.5rem;display:flex}.sas-panel{border:1px solid color-mix(in oklab, var(--color-base-content) 30%, transparent);border-radius:1rem;flex-direction:column;gap:.5rem;margin:0;padding:.5rem .75rem .75rem;display:flex}.sas-legend{text-transform:uppercase;letter-spacing:.06em;color:var(--color-base-content);align-items:center;gap:.3rem;margin:0 auto;padding:0 .4rem;font-size:.72rem;font-weight:700;display:flex}");static properties={promos:{type:Array},applied:{type:Object},total:{type:Number},owner:{type:Boolean},type:{type:String},special:{type:Boolean},ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},txt:{type:Object},lang:{type:String},lookup:{attribute:!1},_input:{state:!0},_error:{state:!0},_showCreate:{state:!0},_fCode:{state:!0},_fLabel:{state:!0},_fType:{state:!0},_fDiscount:{state:!0},_fQuantity:{state:!0},_fMinOrder:{state:!0},_fMaxDiscount:{state:!0},_fError:{state:!0}};constructor(){super(),this.promos=[],this.applied=null,this.total=0,this.owner=!1,this.type="",this.special=!1,this.txt=null,this.lang="vi",this.lookup=null,this._input="",this._error="",this._showCreate=!1,this._fError="",this._setForm()}willUpdate(e){e.has("applied")&&!this.applied&&(this._input="",this._error="")}get _txt(){return o(this.txt,T,this.lang)}_emit(e,t){c(this,e,t)}async _dhApply(){const e=this._input.trim().toUpperCase();if(!e)return void(this._error="");const t=(this.promos??[]).find(t=>t.code===e)??(this.lookup?await this.lookup(e):null);t?t.minOrder&&this.total<t.minOrder?this._error=`${this._txt.errMinOrder} ${d(t.minOrder,this.lang)}`:this._comUsedUp(t)?this._error=this._txt.errUsedUp:(this._error="",this._emit("promo:apply",{promo:t})):this._error=this._txt.errInvalid}_dhClear(){this._input="",this._error="",this._emit("promo:clear")}_dhPick(e){this._input=e,this._dhApply()}_dhDeletePromo(e){this._emit("promo:delete",{code:e})}_setForm(e=q){this._fCode=e.code??"",this._fLabel=e.label??"",this._fType=e.type??"percent",this._fDiscount=e.discount?String(e.discount):"",this._fQuantity=e.quantity?String(e.quantity):"",this._fMinOrder=e.minOrder?String(e.minOrder):"",this._fMaxDiscount=e.maxDiscount?String(e.maxDiscount):"",this._fError=""}_dhOpenCreate(){this._setForm(),this._showCreate=!0}_dhCancelCreate(){this._showCreate=!1}_dhFillSuggestion(e){this._setForm(e)}_dhSubmitCreate(){const e=this._fCode.trim().toUpperCase(),t=this._fLabel.trim(),i=Number(this._fDiscount);if(!e||!t||!i)return void(this._fError=this._txt.errRequired);const r={code:e,label:t,type:this._fType,discount:i};this.special?(r.code=`${e}-${Math.random().toString(36).slice(2,6).toUpperCase()}`,r.private=!0,r.quantity=1):(r.quantity=this._fQuantity?Number(this._fQuantity):1,this._fMinOrder&&(r.minOrder=Number(this._fMinOrder)),"percent"===this._fType&&this._fMaxDiscount&&(r.maxDiscount=Number(this._fMaxDiscount))),this._emit("promo:create",{promo:r}),this._showCreate=!1}_rfCreateBtn(){const e="circle"===this.type,i=this.special?this._txt.createSpecialBtn:this._txt.createBtn;return t`
            <web-button type=${this.special?"soft":"fill"} color="primary" .stys=${{borderWidth:this.special?"0":"1px"}}
                ?square=${e} rounded=${e?"50%":".5rem"} height=${e?"45px":"23px"}
                ui=${this.ui} theme=${this.theme} title=${i} @click=${()=>this._dhOpenCreate()}>
                <iconify-icon icon=${"ri:coupon-3-line"} width=${e?"20px":"16px"}></iconify-icon>${e?"":t` ${i}`}
            </web-button>
            `}render(){return"circle"===this.type?t`${this.owner?t`${this._rfCreateBtn()}${this._rbCreateDialog()}`:""}`:t`
            <div class="promo-header">
                <div class="section-label">${this._txt.label}</div>
                ${this.owner?this._rfCreateBtn():""}
            </div>
            <div class="promo-row">
                <div class="promo-input-wrap">
                    <input class="promo-input" type="text" placeholder="${this._txt.ph}"
                        .value=${this._input}
                        @input=${e=>{this._input=e.target.value}}
                        @keydown=${e=>"Enter"===e.key&&this._dhApply()} />
                    ${this._input?t`
                        <web-button class="promo-clear" type="ghost" square height="20px"
                            ui=${this.ui} theme=${this.theme} @click=${()=>this._dhClear()}>
                            <iconify-icon icon="ri:close-circle-fill"></iconify-icon>
                        </web-button>`:""}
                </div>
                <web-button type="outline" color="primary" height="36px" style="flex-shrink:0"
                    ui=${this.ui} theme=${this.theme} @click=${()=>this._dhApply()}>${this._txt.apply}</web-button>
            </div>
            ${this._error?t`<div class="promo-msg err"><iconify-icon icon="ri:error-warning-line"></iconify-icon> ${this._error}</div>`:""}
            ${this.applied?t`<div class="promo-msg ok"><iconify-icon icon="ri:checkbox-circle-line"></iconify-icon> ${this.applied.label} ${this._txt.applied}</div>`:""}
            <div class="promo-hints">
                ${(this.promos??[]).filter(e=>e.code!==this.applied?.code&&!e.private&&!this._comUsedUp(e)).map(e=>this._rfChip(e))}
            </div>
            ${this.owner?this._rbCreateDialog():""}`}_rfChip(e){return t`
            <web-button mode="badge" type="dash" color="primary" rounded="4px" style="font-size:0.7rem"
                ui=${this.ui} theme=${this.theme} @click=${()=>this._dhPick(e.code)}>
                ${this._comCondition(e)?t`
                    <web-tooltip ui=${this.ui} placement="top" @click=${e=>e.stopPropagation()}>
                        <iconify-icon class="promo-chip-info" icon="ri:information-line" width="16px"></iconify-icon>
                        <span slot="content">${this._comCondition(e)}</span>
                    </web-tooltip>
                `:""}
                ${e.code} — ${e.label}
                ${this.owner?t`
                    <iconify-icon class="promo-chip-delete" icon="ri:close-circle-fill" title=${this._txt.deleteTitle}
                     width="16px" @click=${t=>{t.stopPropagation(),this._dhDeletePromo(e.code)}}></iconify-icon>
                `:""}
            </web-button>`}_rbCreateDialog(){const e=this.special?this._txt.createSpecialTitle:this._txt.createTitle,i=this.special?f:S;return t`
            <web-dialog ?open=${this._showCreate} title=${e} lang=${this.lang}
                maxWidth="420px" persistent ui=${this.ui} theme=${this.theme}
                @confirm=${()=>this._dhSubmitCreate()} @cancel=${()=>this._dhCancelCreate()}>
                <div class="promo-form">
                    <fieldset class="sas-panel">
                        <legend class="sas-legend">
                            <iconify-icon icon="ri:coupon-3-line"></iconify-icon>${this._txt.suggestLabel}
                        </legend>
                        <div class="promo-hints">
                            ${i.map(e=>t`
                                <web-button mode="badge" type="dash" color="primary" rounded="4px" style="font-size:0.7rem"
                                    ui=${this.ui} theme=${this.theme}
                                    @click=${()=>this._dhFillSuggestion(e)}>${e.code} — ${e.label}</web-button>
                            `)}
                        </div>

                        ${this._rfFormField("_fCode",this._txt.fCode)}
                        ${this._rfFormField("_fLabel",this._txt.fLabel)}

                        <div class="promo-type-toggle">
                            ${this._rfTypeBtn("percent",this._txt.percent)}
                            ${this._rfTypeBtn("fixed",this._txt.fixed)}
                        </div>

                        ${this._rfFormField("_fDiscount",this._txt.fDiscount,"number")}
                        ${this.special?"":this._rfFormField("_fQuantity",this._txt.fQuantity,"number")}
                        ${this.special?"":this._rfFormField("_fMinOrder",this._txt.fMinOrder,"number")}
                        ${this.special||"percent"!==this._fType?"":this._rfFormField("_fMaxDiscount",this._txt.fMaxDiscount,"number")}
                    </fieldset>

                    ${this._fError?t`<div class="promo-msg err"><iconify-icon icon="ri:error-primary-line"></iconify-icon> ${this._fError}</div>`:""}
                </div>
                ${this._rfExistingPromos()}
            </web-dialog>`}_rfExistingPromos(){const e=(this.promos??[]).filter(e=>!e.private);return e.length?t`
            <fieldset class="sas-panel">
                <legend class="sas-legend">
                    <iconify-icon icon="ri:price-tag-3-line"></iconify-icon>${this._txt.existingLabel}
                </legend>
                <div class="promo-hints">
                    ${e.map(e=>this._rfExistingChip(e))}
                </div>
            </fieldset>`:""}_rfExistingChip(e){return t`
            <web-tooltip ui=${this.ui} placement="top">
                <web-button mode="badge" type="fill" color="primary" rounded="4px" style="font-size:0.7rem"
                    ui=${this.ui} theme=${this.theme}>${e.code} — ${e.label}</web-button>
                <span slot="content">${this._txt.remainingLabel}: ${this._comRemaining(e)}/${e.quantity??1}</span>
            </web-tooltip>`}_comRemaining(e){return Math.max(0,(e.quantity??1)-(e.used??0))}_rfTypeBtn(e,i){const r=this._fType===e;return t`
            <web-button type="fill" color=${r?"primary":""}
                style="flex:1" width="100%" ui="modern" rounded="0.25rem" theme=${this.theme}
                @click=${()=>{this._fType=e}}>${i}</web-button>`}_rfFormField(e,i,r="text"){return t`
            <web-text ui=${this.ui} type=${r} placeholder=${i} .value=${this[e]}
                @input=${t=>{this[e]=t.detail?.value??""}}></web-text>`}_comUsedUp(e){return!!(e.quantity&&(e.used??0)>=e.quantity)}_comCondition(e){const t=[];return e.minOrder&&t.push(`${this._txt.errMinOrder} ${d(e.minOrder,this.lang)}`),e.maxDiscount&&t.push(`${this._txt.maxDiscHint} ${d(e.maxDiscount,this.lang)}`),this.owner&&e.quantity&&t.push(`${this._txt.usedHint} ${e.used??0}/${e.quantity}`),t.join(" · ")}};customElements.get("svc-pay-promo")||customElements.define("svc-pay-promo",L);var F=()=>u(async()=>{const{cacheGet:e,cacheSet:t}=await import("./crud.zgQ_dBQH.js").then(e=>e.i);return{cacheGet:e,cacheSet:t}},__vite__mapDeps([0,1,2,3,4,5,6])).then(({cacheGet:e,cacheSet:t})=>({default:{get:e,set:t}}));function N(e,t){return j(e,e=>{e&&t(e)})}function R(e={}){const t=Date.now();return{order_id:e.id||p(),bay_id:e.bayId??"",seller_id:e.sellerId??"",buyer_id:e.buyerId??"",items:e.items??[],notes:e.notes??[],promo:e.promo??null,disc:E(e.disc),amount:(e.items??[]).reduce((e,t)=>e+Number(t.price??0)*Number(t.qty??1),0),currency:"VND",major:"order",sub:"placing",payment_id:null,buyer_confirmed:!1,seller_confirmed:!1,fulfillment:"pickup",created_at:t,expires_at:null,updated_at:t}}function B(e,t={}){!function(e){if(O.has(e))return;O.add(e),async function(e){const{default:t}=await F(),i=await t.get(A(e));if(!i?.order_id)return;const r=D(e);r&&"placing"===r.sub&&!r.items?.length&&M(e,i)}(e),j(e,t=>{t&&F().then(({default:i})=>{i.set(A(e),t,0)})})}(e);const i=D(e);if(i?.order_id)return i;const r=R(t);return M(e,r),r}var O=new Set,A=e=>`pay_order_${e}`;function z(e){return e.reduce((e,t)=>e+Number(t.qty??1)*Number(t.price??0),0)}function E(e){const t=Number(e);return Number.isFinite(t)&&t>0?t:0}function U(e,t,i={}){const r=D(e);if(!r||"placing"!==r.sub&&"paying"!==r.sub)return;const s=t??[],o="paying"===r.sub;M(e,{items:s,amount:z(s),updated_at:Date.now(),..."notes"in i?{notes:i.notes}:{},..."promo"in i?{promo:i.promo}:{},..."disc"in i?{disc:E(i.disc)}:{},...o?{sub:"placing",expires_at:null}:{}})}function Q(e,t){const i=D(e);if(!i||"placing"!==i.sub&&"paying"!==i.sub)return;const r="pickup"===t?"pickup":"delivery",s="paying"===i.sub&&i.fulfillment!==r;M(e,{fulfillment:r,updated_at:Date.now(),...s?{sub:"placing",expires_at:null}:{}})}function V(){return m("invoices")}function K(){return m("promos")}function H(e){return(e||"").split("|").filter(Boolean).map(e=>{const[t,i,r,s]=e.split("~");return{name:t,price:Number(i)||0,unit:r,qty:Number(s)||0}})}function G(e){const[t="",i="",r="",s=""]=(e||"").split("~");return{name:t,phone:i,address:r,email:s}}function W(e){const t=(e||"").split("~");return{name:t[3]||"",phone:t[4]||"",address:t[5]||"",email:t[6]||"",taxCode:t[7]||""}}function X(e,{role:t,sellerId:i,bayId:r}={}){if(!e||"undefined"==typeof window)return"";const s=new URLSearchParams({id:e});return"seller"===t&&(i&&s.set("sellerId",i),r&&s.set("bayId",r)),`${window.location.origin}/product/invoice/?${s.toString()}`}function Y(e={},t=!1){const i=[e.at??Date.now(),(e.name??"").trim(),(e.phone??"").trim(),(e.note??"").trim()];return t&&i.push((e.media??"").trim()),i.join("~")}function J(e){const t=D("pay_customer")?.entries??[],i=t.find(e=>e.isDefault)??t[0]??{},r=(i.location??"").split("~").filter(Boolean).join(", ");return[i.fullName??"",i.phone??"",r,i.email??"","",e??""].join("~")}function Z(e,t){const[i="",r="",s="",o="",n=""]=(e??"").split("~");return["","","",i,r,s,o,n,t??""].join("~")}async function ee(e,t,i,r={}){const s=V(),o=await s.findById(e);if(!o)return null;const n=o.meta??{};if(t&&!t(n,o))return null;const a="function"==typeof i?i(n,o):i,l={...n,...a},c=Date.now();try{await s.update(e,{meta:l,...r})}catch(h){return console.error("[pay] _patchInvoiceMeta Firestore error:",h),null}return{...o,meta:l,...r,_patchedAt:c}}function te(e){let t=null,i=!1;return e.then(e=>{i?e():t=e}),()=>{i=!0,t?.(),t=null}}function ie(e){return V().findAll({filters:{seller_id:e}})}function re(e,t,i){return te(V().listen({filters:{seller_id:e}},t,i))}function se(e){return V().findAll({filters:{buyer_id:e}})}function oe(e,t,i){return te(V().listen({filters:{buyer_id:e}},t,i))}function ne(e){return"order"===e.major&&"paying"===e.sub&&e.buyer_confirmed&&!e.seller_confirmed}function ae(e){return"delivery"===e.major&&"delivered"===e.sub}function le(e){return["cancelled","returned"].includes(e.sub)&&!e.refunded}function ce(e,t={}){return ee(e,e=>ne(e),{major:"processing",sub:"preparing",seller_confirmed:!0,preparing:Y(t)})}function he(e,t={}){return ee(e,e=>"delivered"===e.sub,{sub:"received",received:Y(t)})}async function de(e,t={}){return await ee(e,e=>"pending"===e.subStatus,{sub:"cancelled",subStatus:"buyer_cancelled",sellerCancelled:Y(t),stockRestored:!0},{status:"cancelled"})}function pe(e,t={}){return ee(e,e=>le(e),()=>({refunded:Y(t)}))}function me(e,t,i={}){const r=(t??"").trim();return r?ee(e,e=>"pending"===e.subStatus,{subStatus:"rejected",sellerCancelled:Y({...i,note:r})}):null}var ue=new Set,be=null,fe=!1;function ye(){fe||(fe=!0,document.addEventListener("cell-action",e=>{const{action:t,info:i}=e.detail??{};if("add-to-cart"!==t||!i?.id||!be)return;const r=Number((i.pricing||"").split("~")[0])||0,s=i.meta?.price??i.price??r;!function(e,t){const i=D(e);if(!i)return;const r=i.items??[],s=r.find(e=>e.id===t.id);M(e,{items:s?r.map(e=>e.id===t.id?{...e,qty:e.qty+1}:e):[...r,{...t,qty:1}]})}(be,{id:i.id,name:i.title??i.name,price:s,formattedPrice:i.meta?.formattedPrice??i.formattedPrice,img:i.pics??i.img}),M(be,{open:!0})}))}function _e(e){be=e,ye(),ue.has(e)||(ue.add(e),async function(e){const{default:t}=await F(),i=await t.get(`paycart_${e}`);Array.isArray(i)&&i.length&&M(e,{items:i});j(e,i=>{i&&t.set(`paycart_${e}`,i.items??[],0)})}(e))}function ge(e,t){const i=D(e);i&&M(e,{items:(i.items??[]).filter(e=>e.id!==t)})}function ve(e,t){if(!e)return 0;const i=Math.max(0,Number(e.discount)||0),r="percent"===e.type?Math.round(t*Math.min(i,100)/100):i,s=Number(e.maxDiscount)>0?Number(e.maxDiscount):1/0;return Math.max(0,Math.min(r,s,t))}function $e(e){return{...e,code:String(e.code??"").trim().toUpperCase(),discount:Number(e.discount)||0,quantity:Number(e.quantity)||0,used:Number(e.used)||0,minOrder:Number(e.minOrder)||0,maxDiscount:Number(e.maxDiscount)||0,private:"private"===e.scope||!0===e.private}}var xe=e=>"active"===e.status&&(!e.expires_at||Date.parse(e.expires_at)>Date.now());async function we(e){const t=String(e??"").trim().toUpperCase();if(!t)return null;try{const e=(await K().findAll({filters:{code:t}}))[0],i=e?$e(e):null;return i&&xe(i)?i:null}catch{return null}}var ke=new Set,Pe=null;async function Se(){try{Pe=(await K().findAll()).map($e).filter(xe)}catch{Pe=[]}ke.forEach(e=>e(Pe))}var Ce={subscribe:e=>(ke.add(e),Pe?e(Pe):Se(),()=>ke.delete(e)),async add(e){const t=String(e.code??"").trim().toUpperCase(),{private:i,used:r,...s}=e;await K().set(p(),{...s,code:t,used:0,status:"active",scope:i?"private":"public"}),await Se()},async remove(e){const t=(await K().findAll({filters:{code:String(e??"").toUpperCase()}}))[0];t&&await K().delete(t.id),await Se()},use(){},lookup:we,reload:Se},Ie={entries:[],payment:{cards:[],banks:[]}};function De(e,t){const i={...Ie,...t};M(e,i),F().then(({default:t})=>t.set(e,i,0))}function Me(e,t){const i=D(e);return i&&t(i),j(e,e=>{e&&t(e)})}var je="pay_handler_cache";var Te={vi:{items:"món",cart:"Giỏ hàng",empty:"Chưa có món nào trong giỏ",subtotal:"Tạm tính",discount:"Khuyến mãi",delete:"Xoá",notesLabel:"Yêu cầu đặc biệt",notesPh:"Ghi chú thêm...",total:"Tổng tiền",btnCheckout:"Đặt hàng →",btnClear:"Xóa tất cả"},en:{items:"items",cart:"Cart",empty:"No items in cart",subtotal:"Subtotal",discount:"Discount",delete:"Remove",notesLabel:"Special requests",notesPh:"Additional notes...",total:"Total",btnCheckout:"Checkout →",btnClear:"Clear all"}},qe=class extends r{static styles=i(":host{display:block}.header-icon{color:var(--color-primary,#fbbf24);font-size:1.375rem}.header-title{text-align:left;flex:1;font-size:1.05rem;font-weight:700}.header-badge{background:color-mix(in oklab, var(--color-primary,#fbbf24) 15%, transparent);color:var(--color-primary,#fbbf24);border-radius:2rem;padding:.2rem .625rem;font-size:.72rem;font-weight:700}.empty{opacity:.3;flex-direction:column;flex:1;justify-content:center;align-items:center;gap:.75rem;padding:3rem 1rem;display:flex}.empty iconify-icon{font-size:3.5rem}.empty p{margin:0;font-size:.95rem;font-weight:500}.items{flex-direction:column;padding:0 1.25rem;display:flex}.item{border-bottom:1px solid color-mix(in oklab, var(--color-base-content,#000) 6%, transparent);align-items:center;gap:.75rem;padding:.875rem 0;display:flex}.item:last-child{border-bottom:none}.item-img{object-fit:contain;background:color-mix(in oklab, var(--color-base-200,#eee) 60%, transparent);border-radius:.75rem;flex-shrink:0;width:3.75rem;height:3.75rem}.item-info{text-align:left;flex:1;min-width:0}.item-name{text-overflow:ellipsis;white-space:nowrap;margin-bottom:.2rem;font-size:.9rem;font-weight:600;overflow:hidden}.item-price{color:var(--color-primary,#fbbf24);font-size:.95rem;font-weight:700}.item-subtotal{opacity:.7;margin-top:.1rem;font-size:.75rem}.item-right{flex-direction:column;flex-shrink:0;align-items:flex-end;gap:.5rem;display:flex}.qty-row{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 14%, transparent);border-radius:.625rem;align-items:center;display:flex;overflow:hidden}.qty-num{text-align:center;min-width:2.25rem;padding:0 .25rem;font-size:.9rem;font-weight:700}.section{border-top:1px solid color-mix(in oklab, var(--color-base-content,#000) 7%, transparent);flex-shrink:0;padding:.875rem 1.25rem}.section-label{opacity:.7;text-transform:uppercase;text-align:left;letter-spacing:.06em;margin-bottom:.625rem;font-size:.72rem;font-weight:700}.row{justify-content:space-between;align-items:center;font-size:.85rem;display:flex}.row+.row{margin-top:.35rem}.row .label{opacity:.7}.row .value{font-weight:600}.row.discount .value{color:var(--color-success,#22c55e);font-weight:700}.notes-grid{grid-template-columns:1fr 1fr;gap:.375rem 1rem;margin-bottom:.625rem;display:grid}.note-item{cursor:pointer;user-select:none;align-items:center;gap:.5rem;font-size:.85rem;display:flex}.note-item input[type=checkbox]{accent-color:var(--color-primary,#fbbf24);cursor:pointer;flex-shrink:0;width:.9rem;height:.9rem}.note-textarea{box-sizing:border-box;border:1px solid color-mix(in oklab, var(--color-base-content,#000) 14%, transparent);background:color-mix(in oklab, var(--color-base-200,#eee) 50%, transparent);width:100%;color:var(--color-base-content,#111);resize:none;border-radius:.625rem;outline:none;padding:.5rem .75rem;font-family:inherit;font-size:.85rem;transition:border-color .2s}.note-textarea:focus{border-color:var(--color-primary,#fbbf24)}.note-textarea::placeholder{opacity:.4}.total-row{justify-content:space-between;align-items:baseline;display:flex}.total-label{font-size:1rem;font-weight:700}.total-value{color:var(--color-primary,#fbbf24);font-size:1.4rem;font-weight:900}.actions{border-top:1px solid color-mix(in oklab, var(--color-base-content,#000) 7%, transparent);flex-direction:column;flex-grow:1;gap:.5rem;margin:0 -1rem;padding:.625rem 1.25rem;display:flex}");static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},value:{},service:{type:String},owner:{type:Boolean},promosStore:{},position:{type:String},x:{type:String},y:{type:String},wallet:{type:Object},seller:{type:String},sellerId:{type:String},bayId:{type:String},txt:{type:Object},lang:{type:String},notes:{type:Array},_items:{state:!0},_open:{state:!0},_appliedPromo:{state:!0},_checkedNotes:{state:!0},_promos:{state:!0},_notes:{state:!0},_noteText:{state:!0}};constructor(){super(),this.service="cart",this.owner=!1,this.promosStore=null,this.position="fixed",this.x="99%",this.y="calc(100% - 7.5rem)",this.wallet={},this.seller="",this.sellerId="",this.bayId="",this.txt=null,this.lang="vi",this._items=[],this._open=!1,this._appliedPromo=null,this._checkedNotes=[],this._promos=[],this._notes=[],this._noteText="",this._unsub=null,this._unsubToast=null,this._unsubPromos=null,this._totals={items:[],count:0,total:0,disc:0,final:0}}connectedCallback(){super.connectedCallback(),this._dcInit()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsubPromos?.()}updated(e){e.has("service")&&this.service!==this._initedService&&this._dcReinit()}_dcReinit(){this._unsub?.(),this._unsub=null,this._unsubPromos?.(),this._unsubPromos=null,this._dcInit()}willUpdate(e){if(e.has("_items")||e.has("_appliedPromo")||e.has("_promos")){const e=this._items,t=e.reduce((e,t)=>e+Number(t.price??0)*t.qty,0);this._appliedPromo?.minOrder&&t<this._appliedPromo.minOrder&&(this._appliedPromo=null);const i=ve(this._appliedPromo,t);this._totals={items:e,count:e.reduce((e,t)=>e+t.qty,0),total:t,disc:i,final:Math.max(0,t-i)}}}_dcInit(){this._initedService=this.service;const e=Array.isArray(this.value)?this.value:[];!function(e,t=[],i={}){M(e,{items:t,checkedNotes:[],open:i.open??!1,notes:i.notes??[]})}(this.service,e,{notes:this.notes}),this._unsub=N(this.service,e=>{this._items=e.items??[],this._open=e.open??!1,this._checkedNotes=e.checkedNotes??[],this._notes=e.notes??this.notes}),this._unsubPromos=this._promoStore.subscribe(e=>{this._promos=e??[]}),_e(this.service)}openSheet(){M(this.service,{open:!0})}closeSheet(){M(this.service,{open:!1}),this._emit("close")}showToast(e,t="success"){n(e,t)}_dfRemoveItem(e){ge(this.service,e)}_dfSetQty(e,t){!function(e,t,i){if(i<=0)return void ge(e,t);const r=D(e);r&&M(e,{items:(r.items??[]).map(e=>e.id===t?{...e,qty:i}:e)})}(this.service,e,t)}_dfClearItems(){M(this.service,{items:[]}),this._emit("act:clear",{e:"act:clear"})}_dfToggleNote(e){!function(e,t){const i=D(e);if(!i)return;const r=new Set(i.checkedNotes??[]);r.has(t)?r.delete(t):r.add(t),M(e,{checkedNotes:[...r]})}(this.service,e)}_dhPromoApply(e){this._appliedPromo=e.detail.promo}_dhPromoClear(){this._appliedPromo=null}get _promoStore(){return this.promosStore??Ce}_dfPromoWrite(e){Promise.resolve().then(e).catch(e=>n(e?.message||"Error","error"))}_dfPromoCreate(e){this._dfPromoWrite(()=>this._promoStore.add(e.detail.promo))}_dfPromoDelete(e){this._dfPromoWrite(()=>this._promoStore.remove(e.detail.code))}_dfPromoUse(e){this._promoStore.use?.(e)}_dfCheckout(){const{count:e,disc:t}=this._comTotals;0!==e&&(this._emit("cart:checkout",{items:[...this._items],seller:this.seller,sellerId:this.sellerId,bayId:this.bayId,notes:[...this._checkedNotes,...this._noteText.trim()?[this._noteText.trim()]:[]],promo:this._appliedPromo?.code??null,disc:t}),this._appliedPromo&&this._dfPromoUse(this._appliedPromo.code),this._dhPromoClear(),this.closeSheet(),this._noteText="")}get _comTotals(){return this._totals}get _comWallet(){return l(this.wallet,{})}_emit(e,t={}){c(this,e,t)}get _txt(){return o(this.txt,Te,this.lang)}render(){const{count:e}=this._comTotals;return t`
            <web-toast ui="pastel"></web-toast>

            <web-fab icon="ri:shopping-cart-fill" badge=${e?h(e):""} position=${this.position} x=${this.x} y=${this.y} movable=${"fixed"===this.position}
              size="lg" ui=${this.ui} theme=${this.theme} @click=${()=>this.openSheet()}></web-fab>

            <web-dialog type="mobile" ui=${this.ui} theme=${this.theme} maxWidth="480px"
                .open=${this._open} @close=${()=>this.closeSheet()}>
                ${this._rbHeader()}
                ${0===this._items.length?this._rbEmpty():this._rbBody()}
            </web-dialog>`}_rbHeader(){const{count:e}=this._comTotals;return t`
            <iconify-icon slot="header" icon="ri:shopping-cart-fill" class="header-icon"></iconify-icon>
            <span slot="header" class="header-title">${this._txt.cart}</span>
            ${e>0?t`<span slot="header" class="header-badge">${e} ${this._txt.items}</span>`:""}
            <web-button slot="header" type="soft" square rounded="50%" height="1.5rem" width="1.5rem"
                ui=${this.ui} theme=${this.theme}
                @click=${()=>this.closeSheet()}>
                <iconify-icon icon="ri:close-line"></iconify-icon>
            </web-button>`}_rbEmpty(){return t`
            <div class="empty">
                <iconify-icon icon="ri:shopping-basket-line"></iconify-icon>
                <p>${this._txt.empty}</p>
            </div>`}_rbBody(){return t`
            <div class="items">${this._items.map(e=>this._rfItem(e))}</div>
            ${this._rbSummary()}
            ${this._rbPromo()}
            ${this._rbNotes()}
            ${this._rbActions()}`}_rbSummary(){const{count:e,total:i,disc:r}=this._comTotals;return t`
            <div class="section">
                <div class="row">
                    <span class="label">${this._txt.subtotal} (${e} ${this._txt.items})</span>
                    <span class="value">${d(i,this.lang)}</span>
                </div>
                ${r>0?t`
                    <div class="row discount">
                        <span class="label">${this._txt.discount} (${this._appliedPromo?.code})</span>
                        <span class="value">− ${d(r,this.lang)}</span>
                    </div>`:""}
            </div>`}_rfItem(e){const i=Number(e.price??0),r=e.img??e.pics??"",s=e.name??e.title??"";return t`
            <div class="item">
                ${r?t`<img class="item-img" src="${r}" alt="${s}" loading="lazy" />`:""}
                <div class="item-info">
                    <div class="item-name">${s}</div>
                    <div class="item-price">${e.formattedPrice??d(i,this.lang)}</div>
                    ${e.qty>1?t`<div class="item-subtotal">× ${e.qty} = ${d(i*e.qty,this.lang)}</div>`:""}
                </div>
                <div class="item-right">
                    <web-button type="ghost" height="24px" prefix="ri:delete-bin-line"
                        ui=${this.ui} theme=${this.theme}
                        @click=${()=>this._dfRemoveItem(e.id)}>${this._txt.delete}</web-button>
                    <div class="qty-row">
                        <web-button type="soft" square rounded="0" height="2rem" width="2rem" theme=${this.theme}
                            @click=${()=>this._dfSetQty(e.id,e.qty-1)}>−</web-button>
                        <span class="qty-num">${e.qty}</span>
                        <web-button type="soft" square rounded="0" height="2rem" width="2rem" theme=${this.theme}
                            @click=${()=>this._dfSetQty(e.id,e.qty+1)}>+</web-button>
                    </div>
                </div>
            </div>`}_rbPromo(){const{total:e}=this._comTotals;return t`
            <div class="section">
                <svc-pay-promo .promos=${this._promos} .applied=${this._appliedPromo} .total=${e} .lookup=${this._promoStore.lookup}
                    lang=${this.lang} ui=${this.ui} theme=${this.theme} ?owner=${this.owner}
                    @promo:apply=${e=>this._dhPromoApply(e)}
                    @promo:clear=${()=>this._dhPromoClear()}
                    @promo:create=${e=>this._dfPromoCreate(e)}
                    @promo:delete=${e=>this._dfPromoDelete(e)}>
                </svc-pay-promo>
            </div>`}_rbNotes(){return t`
            <div class="section">
                <div class="section-label">${this._txt.notesLabel}</div>
                <div class="notes-grid">
                    ${(this._notes??[]).map(e=>t`
                        <label class="note-item">
                            <input type="checkbox" .checked=${this._checkedNotes.includes(e)}
                                @change=${()=>this._dfToggleNote(e)} />
                            ${e}
                        </label>`)}
                </div>
                <textarea class="note-textarea" rows="2" placeholder="${this._txt.notesPh}"
                    .value=${this._noteText}
                    @input=${e=>{this._noteText=e.target.value}}></textarea>
            </div>`}_rbActions(){const{count:e,final:i}=this._comTotals;return t`
            <div class="actions" slot="footer">
                <div class="total-row">
                    <span class="total-label">${this._txt.total}</span>
                    <span class="total-value">${d(i,this.lang)}</span>
                </div>
                <web-button type="fill" color="primary" height="45px" width="100%" ?disabled=${0===e}
                    ui=${this.ui} theme=${this.theme}  fontSize="1rem"
                    @click=${()=>this._dfCheckout()}>${this._txt.btnCheckout}</web-button>
                <web-button type="ghost" height="32px" width="100%"
                    ui="${this.ui}" theme=${this.theme}
                    @click=${()=>this._dfClearItems()}>${this._txt.btnClear}</web-button>
            </div>`}};customElements.get("svc-cart")||customElements.define("svc-cart",qe);var Le={vi:{basic:"Cơ bản",map:"Bản đồ",streetPh:"Địa chỉ (số nhà, tên đường)",wardPh:"Phường / Xã",regionPh:"Tỉnh / Thành phố"},en:{basic:"Basic",map:"Map",streetPh:"Address (house number, street name)",wardPh:"Ward / Commune",regionPh:"Province / City"}},Fe="việt nam";function Ne(e=""){const[t="",i="",r="",s=Fe]=e.split("~");return{street:t,ward:i,region:r,country:s}}var Re=class extends r{static shadowRootOptions={mode:"open"};static styles=[i(s),i(':host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-font:var(--font-sans,"system-ui");width:100%;display:block}.web-location{flex-direction:column;gap:10px;width:100%;display:flex}.mode-tabs{background:color-mix(in oklab, var(--color-base-200,#232323) 60%, transparent);border-radius:var(--core-radius);border:1px solid color-mix(in oklab, var(--color-base-300,#393939) 50%, transparent);align-items:center;gap:0;width:fit-content;padding:3px;display:inline-flex}.mode-tab{border-radius:calc(var(--core-radius) - 2px);height:28px;font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 50%, transparent);cursor:pointer;user-select:none;background:0 0;border:none;align-items:center;gap:6px;padding:0 14px;font-size:12px;font-weight:600;transition:background .2s,color .2s,box-shadow .2s;display:inline-flex}.mode-tab svg{flex-shrink:0;width:13px;height:13px}.mode-tab:hover{color:color-mix(in oklab, var(--color-base-content,#fff) 80%, transparent)}.mode-tab.active{background:var(--color-base-100,#0d0d0d);color:var(--color-primary,#34ace0);box-shadow:0 1px 3px #00000040}.mode-panel{display:none}.mode-panel.active{display:block}.basic-fields{flex-direction:column;gap:10px;display:flex}.field-label{font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 60%, transparent);letter-spacing:.03em;margin-bottom:4px;font-size:12px;font-weight:600}.field-full{flex-direction:column;display:flex}.field-row{grid-template-columns:1fr 1fr;gap:10px;display:grid}.field-row>div{flex-direction:column;display:flex}@media (width<=480px){.field-row{grid-template-columns:1fr}}.pastel .mode-tabs{background:var(--pastel-surface);border-color:var(--pastel-line)}.pastel .mode-tab.active{background:var(--pastel-grad);color:var(--pastel-ink);box-shadow:var(--pastel-glow)}')];static properties={value:{type:String,reflect:!0},apiKey:{type:String},theme:{type:String},ui:{type:String},disabled:{type:Boolean},txt:{type:Object},lang:{type:String},_mode:{state:!0},_parts:{state:!0}};static get uiConfigs(){return{modern:{wrap:"modern web-location"},pastel:{wrap:"pastel web-location"}}}constructor(){super(),this.value="",this.apiKey="AIzaSyAAq_3rBXv_JZgDNmNZMuIARuTCkkyf1VY",this.theme="",this.ui="modern",this.disabled=!1,this.txt=null,this.lang="vi",this._mode="basic",this._parts={street:"",ward:"",region:"",country:Fe}}willUpdate(e){e.has("value")&&this.value&&(this._parts=Ne(this.value))}updated(e){e.has("theme")&&this.theme&&this.setAttribute("data-theme",this.theme),e.has("theme")&&!this.theme&&this.removeAttribute("data-theme")}_dhField(e,t){const i=t.detail?.value??t.target?.value??"";this._parts={...this._parts,[e]:i},this._dfEmit()}_dhMode(e){this._mode=e}_dhAddressChange(e){const t=e.detail?.value??"";t&&t!==this.value&&(this.value=t,this._parts=Ne(t),this._emit(t))}_dhAddressConfirmed(e){const t=e.detail?.value??"";this.value=t,this._parts=Ne(t),this._emit(t)}_dfEmit(){this.value=function({street:e="",ward:t="",region:i="",country:r=Fe}={}){return`${e}~${t}~${i}~${r}`}(this._parts),this._emit(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}get _txt(){const e=this.txt??Le;return e[this.lang]??e.vi??{}}_rbModeToggle(){return t`
            <div class="mode-tabs">
                <button class="mode-tab ${"basic"===this._mode?"active":""}"
                    @click=${()=>this._dhMode("basic")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                    ${this._txt.basic}
                </button>
                <button class="mode-tab ${"advanced"===this._mode?"active":""}"
                    @click=${()=>this._dhMode("advanced")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${this._txt.map}
                </button>
            </div>
        `}_rbBasic(){const e=this._parts;return t`
            <div class="basic-fields">
                <div class="field-full">
                    <web-text
                        .ui=${this.ui}
                        .theme=${this.theme}
                        .value=${e.street}
                        placeholder="${this._txt.streetPh}"
                        ?disabled=${this.disabled}
                        clearable
                        @input=${e=>this._dhField("street",e)}
                        @change=${e=>this._dhField("street",e)}
                    ></web-text>
                </div>
                <div class="field-row">
                    <div>
                        <web-text
                            .ui=${this.ui}
                            .theme=${this.theme}
                            .value=${e.ward}
                            placeholder="${this._txt.wardPh}"
                            ?disabled=${this.disabled}
                            clearable
                            @input=${e=>this._dhField("ward",e)}
                            @change=${e=>this._dhField("ward",e)}
                        ></web-text>
                    </div>
                    <div>
                        <web-text
                            .ui=${this.ui}
                            .theme=${this.theme}
                            .value=${e.region}
                            placeholder="${this._txt.regionPh}"
                            ?disabled=${this.disabled}
                            clearable
                            @input=${e=>this._dhField("region",e)}
                            @change=${e=>this._dhField("region",e)}
                        ></web-text>
                    </div>
                </div>
            </div>
        `}_rbAdvanced(){return t`
            <web-location-map
                .ui=${this.ui}
                .theme=${this.theme}
                .value=${this.value}
                ?disabled=${this.disabled}
                @change=${this._dhAddressChange}
                @address-confirmed=${this._dhAddressConfirmed}
            ></web-location-map>
        `}render(){const e=this.constructor.uiConfigs[this.ui||"modern"];return t`
            <div class="${e.wrap}">
                ${this._rbModeToggle()}
                <div class="mode-panel ${"basic"===this._mode?"active":""}">${this._rbBasic()}</div>
                <div class="mode-panel ${"advanced"===this._mode?"active":""}">${this._rbAdvanced()}</div>
            </div>
        `}};customElements.get("web-location")||customElements.define("web-location",Re);var Be={vi:{title:"Thông tin khách hàng",new:"Khách mới",nameLabel:"Họ và tên",namePh:"Nguyễn Văn A",phoneLabel:"Số điện thoại",phonePh:"0912 345 678",emailLabel:"Email",emailOptional:"(tuỳ chọn)",emailPh:"you@example.com",addressLabel:"Địa chỉ",defaultBadge:"Mặc định",btnSetDefault:"Đặt mặc định",btnRemove:"Xóa",btnAdd:"Thêm",empty:"Chưa có thông tin nào. Thêm khách hàng mới."},en:{title:"Customer information",new:"New customer",nameLabel:"Full name",namePh:"John Doe",phoneLabel:"Phone number",phonePh:"0912 345 678",emailLabel:"Email",emailOptional:"(optional)",emailPh:"you@example.com",addressLabel:"Address",defaultBadge:"Default",btnSetDefault:"Set default",btnRemove:"Remove",btnAdd:"Add",empty:"No entries yet. Add a new customer."}},Oe=class extends r{static styles=[i(s),i(':host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-font:var(--font-sans,"system-ui");display:block}.svc-pay-customer{flex-direction:column;gap:8px;display:flex}.entries-header{justify-content:space-between;align-items:center;padding:2px 0;display:flex}.entries-title{font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 70%, transparent);letter-spacing:.03em;text-transform:uppercase;font-size:13px;font-weight:700}.btn-add{background:color-mix(in oklab, var(--color-primary,#34ace0) 15%, transparent);height:28px;color:var(--color-primary,#34ace0);border:1px solid color-mix(in oklab, var(--color-primary,#34ace0) 40%, transparent);border-radius:var(--core-radius);font-size:12px;font-weight:700;font-family:var(--core-font);cursor:pointer;align-items:center;gap:5px;padding:0 14px;transition:background .2s,border-color .2s;display:inline-flex}.btn-add svg{flex-shrink:0;width:12px;height:12px}.btn-add:hover{background:color-mix(in oklab, var(--color-primary,#34ace0) 22%, transparent);border-color:var(--color-primary,#34ace0)}.entries-list{flex-direction:column;gap:6px;display:flex}.entries-empty{text-align:center;font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 35%, transparent);border:1px dashed color-mix(in oklab, var(--color-base-300,#393939) 50%, transparent);border-radius:var(--core-radius);padding:20px 16px;font-size:13px}.entry-form{flex-direction:column;gap:12px;padding:14px 16px;display:flex}.entry-row{grid-template-columns:1fr 1fr;gap:12px;display:grid}@media (width<=480px){.entry-row{grid-template-columns:1fr}}.field{flex-direction:column;gap:6px;display:flex}.field label{font-size:12px;font-weight:600;font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 70%, transparent);letter-spacing:.03em}.field input{box-sizing:border-box;width:100%;height:var(--core-height);background:color-mix(in oklab, var(--color-base-100,#0d0d0d) 80%, transparent);border:1px solid color-mix(in oklab, var(--color-base-300,#393939) 70%, transparent);border-radius:var(--core-radius);color:var(--color-base-content,#fff);font-family:var(--core-font);appearance:none;outline:none;padding:0 12px;font-size:.875rem;transition:border-color .2s,box-shadow .2s}.field input:focus{border-color:var(--color-primary,#34ace0);box-shadow:0 0 0 3px color-mix(in oklab, var(--color-primary,#34ace0) 15%, transparent)}.field input::placeholder{color:color-mix(in oklab, var(--color-base-content,#fff) 30%, transparent)}.opt{opacity:.55;font-weight:400}.entry-footer{border-top:1px solid color-mix(in oklab, var(--color-base-300,#393939) 40%, transparent);align-items:center;gap:8px;padding-top:4px;display:flex}.badge-default{background:color-mix(in oklab, var(--color-primary,#34ace0) 15%, transparent);height:24px;color:var(--color-primary,#34ace0);border:1px solid color-mix(in oklab, var(--color-primary,#34ace0) 40%, transparent);font-size:11px;font-weight:700;font-family:var(--core-font);letter-spacing:.04em;border-radius:99px;align-items:center;padding:0 10px;display:inline-flex}.btn-set-default{height:24px;color:color-mix(in oklab, var(--color-base-content,#fff) 45%, transparent);border:1px solid color-mix(in oklab, var(--color-base-300,#393939) 60%, transparent);font-size:11px;font-weight:600;font-family:var(--core-font);cursor:pointer;background:0 0;border-radius:99px;align-items:center;padding:0 10px;transition:color .2s,border-color .2s;display:inline-flex}.btn-set-default:hover{color:var(--color-primary,#34ace0);border-color:color-mix(in oklab, var(--color-primary,#34ace0) 50%, transparent)}.btn-remove{height:24px;color:color-mix(in oklab, var(--color-error,#f87171) 60%, transparent);border:1px solid color-mix(in oklab, var(--color-error,#f87171) 25%, transparent);font-size:11px;font-weight:600;font-family:var(--core-font);cursor:pointer;background:0 0;border-radius:99px;align-items:center;gap:5px;margin-left:auto;padding:0 10px;transition:color .2s,border-color .2s,background .2s;display:inline-flex}.btn-remove svg{flex-shrink:0;width:11px;height:11px}.btn-remove:hover{color:var(--color-error,#f87171);border-color:var(--color-error,#f87171);background:color-mix(in oklab, var(--color-error,#f87171) 8%, transparent)}.pastel .field input{background:var(--pastel-corner);border:1px solid var(--pastel-line);border-radius:var(--radius-selector)}.pastel .field input:focus{background:var(--pastel-corner-hi);border-color:var(--pastel-a);box-shadow:var(--pastel-ring)}')];static properties={ui:{type:String},theme:{type:String},service:{type:String},txt:{type:Object},lang:{type:String},_data:{state:!0},_openMap:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.service="pay_customer",this.txt=null,this.lang="vi",this._data={entries:[]},this._openMap={},this._unsub=null,this._saveTimer=null}connectedCallback(){var e;super.connectedCallback(),e=this.service,M(e,{...Ie}),this._unsub=Me(this.service,e=>{this._data=e?{...e}:this._data}),async function(e){const{default:t}=await F(),i=await t.get(e);i&&M(e,{...Ie,...i})}(this.service)}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),clearTimeout(this._saveTimer)}_dhEntry(e,t,i){this._data={...this._data,entries:(this._data.entries??[]).map(r=>r.id===e?{...r,[t]:i}:r)},clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>De(this.service,this._data),600)}_dhAdd(){const e={id:Date.now().toString(),fullName:"",phone:"",email:"",location:"",isDefault:!1};0===(this._data.entries??[]).length&&(e.isDefault=!0),this._openMap={...this._openMap,[e.id]:!0},this._data={...this._data,entries:[...this._data.entries??[],e]}}_dhRemove(e){const t=(this._data.entries??[]).filter(t=>t.id!==e);t.length>0&&!t.some(e=>e.isDefault)&&(t[0]={...t[0],isDefault:!0});const{[e]:i,...r}=this._openMap;this._openMap=r;const s={...this._data,entries:t};this._data=s,De(this.service,s)}_dhSetDefault(e){const t={...this._data,entries:(this._data.entries??[]).map(t=>({...t,isDefault:t.id===e}))};this._data=t,De(this.service,t)}_rfEntry(e){const i=[e.fullName||this._txt.new,e.phone].filter(Boolean).join(" | "),r=e.id;return t`
            <web-expansion
                .panels=${[{id:r,label:i}]}
                .active=${this._openMap[r]?r:""}
                .ui=${this.ui}
                .theme=${this.theme}
                @change=${e=>{e.detail?.open&&(this._openMap={...this._openMap,[r]:e.detail.open.includes(r)})}}
            >
                <div slot=${r} class="entry-form">
                    <div class="entry-row">
                        <div class="field">
                            <label>${this._txt.nameLabel}</label>
                            <input type="text"
                                .value=${e.fullName||""}
                                placeholder="${this._txt.namePh}"
                                @input=${t=>this._dhEntry(e.id,"fullName",t.target.value)} />
                        </div>
                        <div class="field">
                            <label>${this._txt.phoneLabel}</label>
                            <input type="tel"
                                .value=${e.phone||""}
                                placeholder="${this._txt.phonePh}"
                                @input=${t=>this._dhEntry(e.id,"phone",t.target.value)} />
                        </div>
                    </div>
                    <div class="field">
                        <label>${this._txt.emailLabel} <span class="opt">${this._txt.emailOptional}</span></label>
                        <input type="email"
                            .value=${e.email||""}
                            placeholder="${this._txt.emailPh}"
                            @input=${t=>this._dhEntry(e.id,"email",t.target.value)} />
                    </div>
                    <div class="field">
                        <label>${this._txt.addressLabel}</label>
                        <web-location
                            .ui=${this.ui}
                            .theme=${this.theme}
                            .value=${e.location||""}
                            @change=${t=>this._dhEntry(e.id,"location",t.detail.value)}
                        ></web-location>
                    </div>
                    <div class="entry-footer">
                        ${e.isDefault?t`<span class="badge-default">${this._txt.defaultBadge}</span>`:t`<button class="btn-set-default"
                                @click=${()=>this._dhSetDefault(e.id)}>${this._txt.btnSetDefault}</button>`}
                        <button class="btn-remove" @click=${()=>this._dhRemove(e.id)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6l-1 14H6L5 6"></path>
                                <path d="M10 11v6M14 11v6"></path>
                                <path d="M9 6V4h6v2"></path>
                            </svg>
                            ${this._txt.btnRemove}
                        </button>
                    </div>
                </div>
            </web-expansion>
        `}get _txt(){return o(this.txt,Be,this.lang)}render(){const e=this._data.entries??[];return t`
            <div class="svc-pay-customer ${this.ui||"modern"}">

                <div class="entries-header">
                    <span class="entries-title">${this._txt.title}</span>
                    <button class="btn-add" @click=${this._dhAdd}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        ${this._txt.btnAdd}
                    </button>
                </div>

                <div class="entries-list">
                    ${0===e.length?t`<div class="entries-empty">${this._txt.empty}</div>`:e.map(e=>this._rfEntry(e))}
                </div>

            </div>
        `}};customElements.get("svc-pay-customer")||customElements.define("svc-pay-customer",Oe);var Ae={vi:{label:"Hình thức thanh toán",bank:"Chuyển khoản",cash:"Tiền mặt",cod:"Thanh toán khi nhận hàng",defaultBank:"Ngân hàng",vietqr:"VietQR"},en:{label:"Payment method",bank:"Bank transfer",cash:"Cash",cod:"Cash on delivery",defaultBank:"Bank",vietqr:"VietQR"}},ze=class extends r{static styles=i(":host{display:block}.section-label{opacity:.7;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.625rem;font-size:.72rem;font-weight:700}.pay-method-tabs{gap:.5rem;margin-bottom:.75rem;display:flex}.pay-method-btn{color:color-mix(in oklab, var(--color-base-content,#000) 75%, transparent);border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);cursor:pointer;border-radius:.75rem;flex-direction:column;flex:1;align-items:center;gap:.3rem;padding:.625rem .5rem;font-size:.72rem;font-weight:600;transition:all .2s;display:flex}.pay-method-btn iconify-icon{font-size:1.25rem}.pay-method-btn.active{border-color:var(--color-primary,#fbbf24);background:color-mix(in oklab, var(--color-primary,#fbbf24) 12%, transparent);color:var(--color-primary,#fbbf24)}.pay-detail{flex-direction:column;gap:.5rem;margin-top:.25rem;display:flex}.bank-item{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);text-align:left;border-radius:.75rem;align-items:center;gap:.75rem;padding:.5rem 1rem;display:flex}.bank-item.active{border-color:var(--color-primary,#fbbf24);background:color-mix(in oklab, var(--color-primary,#fbbf24) 8%, transparent)}.bank-info{flex-direction:column;flex:1;gap:.15rem;display:flex}.bank-name{font-size:.875rem;font-weight:700}.bank-acct{opacity:.7;font-size:.75rem}.bank-default{background:color-mix(in oklab, var(--color-primary,#fbbf24) 15%, transparent);color:var(--color-primary,#fbbf24);border:1px solid color-mix(in oklab, var(--color-primary,#fbbf24) 40%, transparent);border-radius:99px;flex-shrink:0;align-items:center;padding:.15rem .5rem;font-size:.65rem;font-weight:700;display:flex}.bank-default .cash-icon{font-size:1.75rem}");static properties={wallet:{type:Object},method:{type:String},cashDisabled:{type:Boolean},ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},txt:{type:Object},lang:{type:String},_payMethod:{state:!0}};constructor(){super(),this.wallet={},this.method="cash",this.cashDisabled=!1,this.txt=null,this.lang="vi",this._payMethod="cash"}willUpdate(e){e.has("method")&&this.method&&(this._payMethod=this.method),(e.has("wallet")||e.has("method")||e.has("cashDisabled"))&&!this._comAvailableMethods.some(e=>e.value===this._payMethod)&&this._dfSelect(this._comAvailableMethods[0]?.value??"cash")}get _comAvailableMethods(){return w.filter(e=>k(this._comWallet,e.value)&&!(this.cashDisabled&&"cash"===e.value))}_emit(e,t){c(this,e,t)}_dfSelect(e){this._payMethod=e,this._emit("payment:select",{method:e})}get _comWallet(){return l(this.wallet,{})}get _txt(){return o(this.txt,Ae,this.lang)}render(){const e=this._comWallet;return t`
            <div class="section-label">${this._txt.label}</div>
            <div class="pay-method-tabs">
                ${this._comAvailableMethods.map(e=>t`
                    <button class="pay-method-btn ${this._payMethod===e.value?"active":""}"
                        @click=${()=>this._dfSelect(e.value)}>
                        <iconify-icon icon="${e.icon}"></iconify-icon>
                        ${this._txt[e.value]||e.label}
                    </button>`)}
            </div>
            ${this._rbDetail(e)}`}_rbDetail(e){const i=this._payMethod,r=e[i]??{};if("cash"===i)return this._rfBankItem(this._txt.cash,r.note??this._txt.cod,t`<iconify-icon icon="ion:cash-outline" class="cash-icon"></iconify-icon>`);const s=r.bankName??this._txt.defaultBank,o=r.accountNo??"";return this._rfBankItem(s,r.accountName?`${o} — ${r.accountName}`:o,this._txt.vietqr)}_rfBankItem(e,i,r){return t`
            <div class="pay-detail">
                <div class="bank-item active">
                    <div class="bank-info">
                        <span class="bank-name">${e}</span>
                        <span class="bank-acct">${i}</span>
                    </div>
                    <span class="bank-default">${r}</span>
                </div>
            </div>`}};customElements.get("svc-pay-booking")||customElements.define("svc-pay-booking",ze);var Ee=class extends r{static styles=i(':host{box-sizing:border-box;--core-font:var(--font-sans,"system-ui");width:100%;font-family:var(--core-font);color:var(--color-base-content);display:block}.reason-form{flex-direction:column;gap:.5rem;width:100%;margin-top:.5rem;display:flex}.reason-head{justify-content:space-between;align-items:center;gap:1rem;display:flex}.reason-title{min-height:var(--reason-title-min-height,auto);font-size:.95rem;font-weight:600;line-height:1.3}.reason-input{box-sizing:border-box;width:100%}.reason-quickfill{align-self:flex-start}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},title:{type:String},titleColor:{type:String},name:{type:String},phone:{type:String},note:{type:String},media:{type:String},namePh:{type:String},phonePh:{type:String},notePh:{type:String},mediaPh:{type:String},showNote:{type:Boolean},showMedia:{type:Boolean},stepKey:{type:String},quickName:{type:String},quickPhone:{type:String},quickLabel:{type:String},actionLabel:{type:String},actionColor:{type:String},actionType:{type:String},actionDisabled:{type:Boolean}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.title="",this.titleColor="",this.name="",this.phone="",this.note="",this.media="",this.namePh="",this.phonePh="",this.notePh="",this.mediaPh="",this.showNote=!0,this.showMedia=!1,this.stepKey="",this.quickName="",this.quickPhone="",this.quickLabel="",this.actionLabel="",this.actionColor="primary",this.actionType="fill",this.actionDisabled=!1,this._cacheSaveTimer=null}async connectedCallback(){if(super.connectedCallback(),!this.stepKey||this.name||this.phone)return;const e=await async function(e){if(!e)return{name:"",phone:""};const{default:t}=await F();return(await t.get(je)??{})[e]??{name:"",phone:""}}(this.stepKey);this.name||this.phone||(e.name&&c(this,"reason:input",{key:"name",value:e.name}),e.phone&&c(this,"reason:input",{key:"phone",value:e.phone}))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._cacheSaveTimer)}_dhInput(e,t){c(this,"reason:input",{key:e,value:t}),!this.stepKey||"name"!==e&&"phone"!==e||(clearTimeout(this._cacheSaveTimer),this._cacheSaveTimer=setTimeout(()=>function(e,{name:t="",phone:i=""}={}){e&&(t||i)&&F().then(async({default:r})=>{const s=await r.get(je)??{};await r.set(je,{...s,[e]:{name:t,phone:i}},0)})}(this.stepKey,{name:this.name,phone:this.phone}),500))}_dhQuickFill(){this.quickName&&this._dhInput("name",this.quickName),this.quickPhone&&this._dhInput("phone",this.quickPhone)}_dfAction(){this.actionDisabled||c(this,"reason:action",{})}render(){return t`
			<div class="reason-form">
				<div class="reason-head">
					<div class="reason-title" style=${this.titleColor?`color: var(--color-${this.titleColor})`:""}>${this.title}</div>
					<div>
            ${this.quickLabel&&(this.quickName||this.quickPhone)?t`
								<web-button
									class="reason-quickfill"
									type="soft"
									color="primary"
									height="28px"
									ui="modern"
									theme=${this.theme}
									@click=${()=>this._dhQuickFill()}>
									${this.quickLabel}
								</web-button>
						  `:""}
          </div>
				</div>
				<web-text class="reason-input" height="36px" placeholder=${this.namePh} ui=${this.ui} theme=${this.theme} .value=${this.name} @input=${e=>this._dhInput("name",e.detail.value)}></web-text>
				<web-text class="reason-input" placeholder=${this.phonePh} ui=${this.ui} theme=${this.theme} height="36px" .value=${this.phone} @input=${e=>this._dhInput("phone",e.detail.value)}></web-text>
				${this.showNote?t`
							<web-textarea
								class="reason-input"
								placeholder=${this.notePh}
								.value=${this.note}
								rows="3"
								ui=${this.ui}
								theme=${this.theme}
								@input=${e=>this._dhInput("note",e.detail?.value??"")}></web-textarea>
					  `:""}
				${this.showMedia?t`
							<svc-photor
								class="reason-input"
								multiple
								ui=${this.ui}
								placeholder=${this.mediaPh}
								.value=${this.media}
								@change=${e=>this._dhInput("media",e.detail.value)}></svc-photor>
					  `:""}
				${this.actionLabel?t`
							<web-button type=${this.actionType} color=${this.actionColor} height="40px" ?disabled=${this.actionDisabled} @click=${()=>this._dfAction()}>
								${this.actionLabel}
							</web-button>
					  `:""}
			</div>
		`}};customElements.get("svc-pay-reason")||customElements.define("svc-pay-reason",Ee);function Ue(e){if(!e)return"";const t=new Date(e),i=e=>String(e).padStart(2,"0");return`${i(t.getDate())}-${i(t.getMonth()+1)}-${t.getFullYear()} ${i(t.getHours())}:${i(t.getMinutes())}:${i(t.getSeconds())}`}function Qe(e){const t=Math.floor(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Ve(e,i,r){const s=$(e);if(!s.at)return t``;const o=s.name?[s.name,s.phone].filter(Boolean).join(" · "):i;return t`
        <p class="handled-by">
            ${r}: ${o}${s.note?` — ${s.note}`:""} · ${Ue(s.at)}
        </p>`}function Ke(e,i,r,s){return e.length?t`
        <div class="order-items">
            ${e.map(e=>t`
                <div class="order-item-row">
                    <span class="order-item-name">${e.qty}× ${e.name}</span>
                    <span class="order-item-price">${d(Number(e.price??0)*Number(e.qty??1),s)}</span>
                </div>`)}
            <div class="order-item-row order-item-total">
                <span>${r.totalLabel}</span>
                <span>${d(i,s)}</span>
            </div>
        </div>`:t`<p class="order-items-empty">${r.orderItemsEmpty}</p>`}var He=class extends r{static styles=i(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.order-panel{flex-direction:column;gap:.6rem;display:flex}web-toggle{margin-bottom:.3rem}.hint{opacity:.6;margin:0;font-size:.8rem}.countdown{opacity:.8;margin-bottom:.5rem;font-size:.85rem;font-weight:600}.countdown.expired{color:var(--color-error);opacity:1}.order-items{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-radius:.75rem;flex-direction:column;gap:.4rem;padding:.75rem .9rem;display:flex}.order-items-empty{opacity:.7;margin:0;font-size:.85rem;font-style:italic}.order-item-row{justify-content:space-between;align-items:center;font-size:.85rem;display:flex}.order-item-name{opacity:.8}.order-item-price{font-weight:600}.order-item-total{border-top:1px dashed var(--color-base-300);color:var(--color-primary);margin-top:.3rem;padding-top:.4rem;font-weight:700}.invoice-lookup{text-align:center;flex-direction:column;align-items:center;gap:.6rem;padding:.5rem 0 1rem;display:flex}.invoice-qr{border:1px solid var(--color-base-300);background:var(--color-base-100);border-radius:.75rem;padding:.5rem}.invoice-id-link{color:var(--color-primary);align-items:center;gap:.4rem;font-size:.95rem;font-weight:700;text-decoration:none;display:inline-flex}.invoice-id-link:hover{text-decoration:underline}.invoice-hint{opacity:.6;max-width:320px;margin:0;font-size:.8rem}.actions{flex-direction:column;flex-shrink:0;gap:.5rem;width:100%;max-width:300px;margin:0 auto;padding:.625rem 1.25rem;display:flex}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},role:{type:String},subId:{type:String},txt:{type:Object},cancelTxt:{type:Object},wallet:{type:Object},vietqr:{type:Object},items:{type:Array},amount:{type:Number},isDelivery:{type:Boolean},hasCustomerData:{type:Boolean},onlyDelivery:{type:Boolean},cashDisabled:{type:Boolean},payMethod:{type:String},paymentRef:{type:String},payExpired:{type:Boolean},payRemainingLabel:{type:String},hasInvoice:{type:Boolean},invoiceId:{type:String},invoiceUrl:{type:String},invoiceQrSrc:{type:String},sellerPrefill:{type:Object},_form:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.role="buyer",this.subId="placing",this.txt={},this.cancelTxt={},this.wallet={},this.vietqr={},this.items=[],this.amount=0,this.isDelivery=!1,this.hasCustomerData=!1,this.onlyDelivery=!1,this.cashDisabled=!1,this.payMethod="cash",this.paymentRef="",this.payExpired=!1,this.payRemainingLabel="",this.hasInvoice=!1,this.invoiceId="",this.invoiceUrl="",this.invoiceQrSrc="",this.sellerPrefill=null,this._form={name:"",phone:"",note:""}}_emit(e,t={}){c(this,e,t)}_dhFormInput(e){this._form={...this._form,[e.key]:e.value}}render(){return"placing"===this.subId?this._rbPlacing():this._rbPaying()}_rbPlacing(){const e=this.isDelivery&&!this.hasCustomerData;return t`
            <div class="order-panel">
                ${this.onlyDelivery?"":t`
                    <web-toggle .active=${this.isDelivery} label=${this.txt.deliveryToggleLabel}
                        ui=${this.ui} theme=${this.theme}
                        @change=${e=>this._emit("order:toggle-delivery",{active:e.detail.active})}>
                    </web-toggle>`}
                <svc-pay-customer ui=${this.ui} theme=${this.theme} lang=${this.lang}></svc-pay-customer>
                ${Ke(this.items,this.amount,this.txt,this.lang)}
                <svc-pay-booking
                    .wallet=${this.wallet}
                    method=${this.payMethod}
                    ?cashDisabled=${this.cashDisabled}
                    ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                    lang=${this.lang}
                    @payment:select=${e=>this._emit("order:payment-select",{method:e.detail.method})}>
                </svc-pay-booking>
                ${e?t`<p class="hint">${this.txt.customerRequiredHint}</p>`:""}
                <div class="actions">
                  <web-button type="fill" color="primary" height="45px" width="100%" fontSize="1rem"
                      ?disabled=${!this.items?.length||e} ui=${this.ui} theme=${this.theme}
                      @click=${()=>this._emit("order:place")}>${this.txt.continueToPayment}</web-button>
                  <web-button type="ghost" height="32px" width="100%" ui=${this.ui} theme=${this.theme}
                      @click=${()=>this._emit("order:back-to-cart")}>${this.txt.backToCart}</web-button>
                </div>
            </div>`}_rbPaying(){if(!this.hasInvoice)return t`
            <div class="order-panel">
                <div class="countdown ${this.payExpired?"expired":""}">
                    ${this.payExpired?this.txt.countdownExpired:`${this.txt.countdownLabel}: ${this.payRemainingLabel}`}
                </div>
                <svc-pay-valider
                    .wallet=${this.wallet}
                    .vietqr=${this.vietqr}
                    paymentId=${this.paymentRef}
                    .amount=${this.amount}
                    method=${this.payMethod}
                    ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                    lang=${this.lang}
                    @valider:paid=${e=>this._emit("order:paid",{paymentId:e.detail.paymentId})}
                    @valider:back=${()=>this._emit("order:back-to-placing")}>
                </svc-pay-valider>
            </div>`;const e=this._form;return t`
            <div class="order-panel">
                ${"seller"===this.role?t`
                    <svc-pay-reason ui=${this.ui} theme=${this.theme}
                        stepKey="paying"
                        name=${e.name} phone=${e.phone} note=${e.note}
                        namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                        quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                        actionLabel=${this.cancelTxt.wardenConfirmPayment}
                        @reason:input=${e=>this._dhFormInput(e.detail)}
                        @reason:action=${()=>this._emit("order:confirm-payment",{handler:this._form})}>
                    </svc-pay-reason>`:""}
                <div class="invoice-lookup">
                    <img class="invoice-qr" src=${this.invoiceQrSrc} width="180" height="180" alt="QR" />
                    <a class="invoice-id-link" href=${this.invoiceUrl} target="_blank">
                        <iconify-icon icon="ri:receipt-line"></iconify-icon> ${this.invoiceId}
                    </a>
                    <p class="invoice-hint">${this.txt.invoiceLookupHint}</p>
                </div>
            </div>`}};customElements.get("svc-pay-order")||customElements.define("svc-pay-order",He);var Ge={name:"",phone:"",note:""},We=class extends r{static styles=i(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.order-panel,.cancel-form,.cancel-block{flex-direction:column;gap:.6rem;display:flex}.waiting-note,.done-note{opacity:.7;font-size:.85rem;font-style:italic}.handled-by{opacity:.65;margin:0;font-size:.8rem}.hint{opacity:.6;margin:0;font-size:.8rem}.order-panel.reason-columns{--reason-title-min-height:2.6rem;grid-template-columns:1fr 1fr;align-items:start;column-gap:1.5rem;display:grid}.order-panel.reason-columns>svc-pay-reason{width:100%}@media (width<=640px){.order-panel.reason-columns{--reason-title-min-height:auto;grid-template-columns:1fr}}.cancel-block{border-top:1px dashed var(--color-base-300);margin-top:.75rem;padding-top:.75rem}.reason-columns>.cancel-block{border-top:none;margin-top:0;padding-top:0}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},role:{type:String},subId:{type:String},txt:{type:Object},cancelTxt:{type:Object},meta:{type:Object},sellerPrefill:{type:Object},stepTitle:{type:String},_prepareForm:{state:!0},_cancelForm:{state:!0},_buyerCancelReason:{state:!0},_sellerCancelledForm:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.role="buyer",this.subId="preparing",this.txt={},this.cancelTxt={},this.meta={},this.sellerPrefill=null,this.stepTitle="",this._prepareForm={...Ge},this._cancelForm={...Ge},this._buyerCancelReason="",this._sellerCancelledForm={...Ge}}_emit(e,t={}){c(this,e,t)}_dhFormInput(e,t){this[e]={...this[e],[t.key]:t.value}}render(){return"preparing"===this.subId?this._rbPreparing():"cancelled"===this.subId?this._rbCancelled():this._rbDone()}_rbPreparing(){const e=this.meta.subStatus;if("seller"!==this.role){const i=$(this.meta.preparing);return t`
                <div class="order-panel">
                    ${i.name?Ve(this.meta.preparing,this.txt.roleSeller,this.txt.handledByLabel):t`<span class="waiting-note">${this.txt.sellerPreparingNote}</span>`}
                    ${this._rbCancelBlockBuyer(e)}
                </div>`}const i=this._prepareForm;return t`
            <div class="order-panel reason-columns">
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    stepKey="preparing"
                    title=${this.stepTitle}
                    name=${i.name} phone=${i.phone} note=${i.note}
                    namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                    quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                    actionLabel=${this.txt.completeProcessing}
                    @reason:input=${e=>this._dhFormInput("_prepareForm",e.detail)}
                    @reason:action=${()=>this._emit("processing:complete",{handler:this._prepareForm})}>
                </svc-pay-reason>
                ${this._rbCancelBlockSeller(e)}
            </div>`}_rbCancelBlockBuyer(e){return e&&"rejected"!==e?t`
            <div class="cancel-block">
                <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.cancelTxt.cancelPendingBanner}>
                    ${this.txt.reasonLabel}: ${$(this.meta.cancel).note}
                </web-alert>
            </div>`:t`
            <div class="cancel-block">
                ${"rejected"===e?t`
                    <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.cancelTxt.cancelRejectedBanner}>
                        ${this.cancelTxt.cancelRejectReasonLabel}: ${$(this.meta.sellerCancelled).note}
                    </web-alert>`:""}
                <p class="hint">${this.txt.cancelHint}</p>
                <web-textarea placeholder=${this.txt.cancelReasonPh} .value=${this._buyerCancelReason} rows="3"
                    ui=${this.ui} theme=${this.theme}
                    @input=${e=>{this._buyerCancelReason=e.detail?.value??""}}></web-textarea>
                <web-button type="ghost" color="error" height="36px" ?disabled=${!(this._buyerCancelReason??"").trim()}
                    @click=${()=>{this._emit("processing:request-cancel",{reason:this._buyerCancelReason}),this._buyerCancelReason=""}}>
                    ${"rejected"===e?this.cancelTxt.cancelRetry:this.txt.cancelOrder}
                </web-button>
            </div>`}_rbCancelBlockSeller(e){if(!e||"rejected"===e){const e=this._cancelForm;return t`
                <div class="cancel-block">
                    <svc-pay-reason ui=${this.ui} theme=${this.theme}
                        stepKey="sellerCancel"
                        title=${this.txt.sellerCancelHint} titleColor="error"
                        name=${e.name} phone=${e.phone} note=${e.note}
                        namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh}
                        notePh=${this.txt.sellerCancelReasonPh}
                        quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                        actionLabel=${this.txt.sellerCancelOrder} actionColor="error" actionType="soft"
                        ?actionDisabled=${!(e.note??"").trim()}
                        @reason:input=${e=>this._dhFormInput("_cancelForm",e.detail)}
                        @reason:action=${()=>{this._emit("processing:seller-cancel",{handler:this._cancelForm}),this._cancelForm={...Ge}}}>
                    </svc-pay-reason>
                </div>`}const i=this._sellerCancelledForm;return t`
            <div class="cancel-block">
                <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.cancelTxt.cancelPendingBanner}>
                    ${this.txt.reasonLabel}: ${$(this.meta.cancel).note}
                </web-alert>
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    stepKey="sellerCancelled"
                    name=${i.name} phone=${i.phone} note=${i.note}
                    namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh}
                    notePh=${this.cancelTxt.wardenRejectReasonPh}
                    quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                    @reason:input=${e=>this._dhFormInput("_sellerCancelledForm",e.detail)}>
                </svc-pay-reason>
                <web-button type="fill" color="success" height="36px"
                    @click=${()=>this._emit("processing:accept-cancel",{handler:this._sellerCancelledForm})}>${this.cancelTxt.wardenAcceptCancel}</web-button>
                <web-button type="soft" color="error" height="36px" ?disabled=${!(i.note??"").trim()}
                    @click=${()=>this._emit("processing:reject-cancel",{handler:this._sellerCancelledForm})}>${this.cancelTxt.wardenRejectCancel}</web-button>
            </div>`}_rbCancelled(){const e="seller_cancelled"===this.meta.subStatus,i=$(this.meta.cancel);return t`
            <div class="order-panel">
                <web-alert type="error" ui=${this.ui} theme=${this.theme}
                    title="${this.txt.cancelledBy}: ${e?this.txt.roleSeller:this.txt.roleBuyer}">
                    ${this.txt.reasonLabel}: ${i.note}
                </web-alert>
                ${Ve(this.meta.cancel,e?this.txt.roleSeller:this.txt.roleBuyer,this.txt.handledByLabel)}
                ${e?"":Ve(this.meta.sellerCancelled,this.txt.roleSeller,this.txt.handledByLabel)}
            </div>`}_rbDone(){return t`
            <div class="order-panel">
                <p class="done-note">${this.txt.orderPreparedNote}</p>
                ${Ve(this.meta.preparing,this.txt.roleSeller,this.txt.handledByLabel)}
                ${"seller"===this.role?t`
                    <web-button type="fill" color="primary" height="40px"
                        @click=${()=>this._emit("processing:advance")}>${this.txt.continueToDelivery}</web-button>
                `:""}
            </div>`}};customElements.get("svc-pay-processing")||customElements.define("svc-pay-processing",We);var Xe={name:"",phone:"",note:"",media:""},Ye=class extends r{static styles=i(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.order-panel,.return-form,.return-block{flex-direction:column;gap:.6rem;display:flex}.waiting-note,.done-note{opacity:.7;font-size:.85rem;font-style:italic}.handled-by{opacity:.65;margin:0;font-size:.8rem}.hint{opacity:.6;margin:0;font-size:.8rem}.countdown{opacity:.8;margin-bottom:.5rem;font-size:.85rem;font-weight:600}.countdown.expired{color:var(--color-error);opacity:1}.return-block{border-top:1px dashed var(--color-base-300);margin-top:.75rem;padding-top:.75rem}.returned-media{flex-wrap:wrap;gap:.5rem;display:flex}.returned-media img{object-fit:cover;border:1px solid var(--color-base-300);border-radius:.5rem;width:72px;height:72px}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},role:{type:String},subId:{type:String},txt:{type:Object},cancelTxt:{type:Object},meta:{type:Object},buyerPrefill:{type:Object},sellerPrefill:{type:Object},deliveredRemainingLabel:{type:String},_packingForm:{state:!0},_shippingForm:{state:!0},_shipperForm:{state:!0},_receivedForm:{state:!0},_showReturnForm:{state:!0},_returnForm:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.role="buyer",this.subId="packing",this.txt={},this.cancelTxt={},this.meta={},this.buyerPrefill=null,this.sellerPrefill=null,this.deliveredRemainingLabel="",this._packingForm={...Xe},this._shippingForm={...Xe},this._shipperForm={...Xe},this._receivedForm={...Xe},this._showReturnForm=!1,this._returnForm={...Xe},this._prefillApplied=!1,this._shipperPrefillApplied=!1}willUpdate(e){if(e.has("buyerPrefill")&&this.buyerPrefill&&!this._prefillApplied&&(this._prefillApplied=!0,this._receivedForm={...this._receivedForm,name:this.buyerPrefill.name,phone:this.buyerPrefill.phone},this._returnForm={...this._returnForm,name:this.buyerPrefill.name,phone:this.buyerPrefill.phone}),e.has("meta")&&this.meta?.shipping&&!this._shipperPrefillApplied){this._shipperPrefillApplied=!0;const e=$(this.meta.shipping);this._shipperForm={...this._shipperForm,name:e.name,phone:e.phone}}}_rfDeliveredInfo(){return t`
            ${Ve(this.meta.shipping,this.txt.roleSeller,this.txt.handledByLabel)}
            ${Ve(this.meta.delivered,this.txt.roleSeller,this.txt.deliveredByLabel)}
        `}_emit(e,t={}){c(this,e,t)}_dhFormInput(e,t){this[e]={...this[e],[t.key]:t.value}}get _comIsPast(){const e=y.delivery??[],t=e.indexOf(this.subId),i=e.indexOf(this.meta.sub);return-1!==t&&-1!==i&&t<i}render(){return"pickup"===this.meta.fulfillment&&["packing","shipping","delivered"].includes(this.subId)?t`<div class="order-panel"><p class="waiting-note">${this.cancelTxt.notApplicablePickup}</p></div>`:"packing"===this.subId?this._rbPacking():"shipping"===this.subId?this._rbShipping():"delivered"===this.subId?this._rbDelivered():"received"===this.subId?this._rbReceived():this._rbReturned()}_rbPacking(){const e=this._comIsPast,i=this._packingForm;return t`
            <div class="order-panel">
                ${e?Ve(this.meta.packing,this.txt.roleSeller,this.txt.handledByLabel):"seller"===this.role?t`
                        <svc-pay-reason ui=${this.ui} theme=${this.theme}
                            stepKey="packing"
                            name=${i.name} phone=${i.phone} note=${i.note}
                            namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                            quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                            actionLabel=${this.txt.confirmPacked}
                            @reason:input=${e=>this._dhFormInput("_packingForm",e.detail)}
                            @reason:action=${()=>this._emit("delivery:confirm-packed",{handler:this._packingForm})}>
                        </svc-pay-reason>
                    `:t`<span class="waiting-note">${this.txt.sellerPackingNote}</span>`}
            </div>`}_rbShipping(){const e=this._comIsPast,i=this._shippingForm;return t`
            <div class="order-panel">
                ${e?Ve(this.meta.shipping,this.txt.roleSeller,this.txt.handledByLabel):"seller"===this.role?t`
                        <svc-pay-reason ui=${this.ui} theme=${this.theme}
                            stepKey="shipping"
                            name=${i.name} phone=${i.phone} note=${i.note}
                            namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                            quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                            actionLabel=${this.txt.confirmShipped}
                            @reason:input=${e=>this._dhFormInput("_shippingForm",e.detail)}
                            @reason:action=${()=>this._emit("delivery:confirm-shipped",{handler:this._shippingForm})}>
                        </svc-pay-reason>
                    `:t`<span class="waiting-note">${this.txt.courierShippingNote}</span>`}
            </div>`}_rbDelivered(){const e=this._comIsPast,i=this._receivedForm,r=this._shipperForm,s=$(this.meta.delivered).at;return t`
            <div class="order-panel">
                ${this._rfDeliveredInfo()}
                ${e?"":"buyer"===this.role?t`
                        <p class="hint">${this.txt.shipperCallHint}</p>
                        <svc-pay-reason ui=${this.ui} theme=${this.theme}
                            stepKey="received"
                            name=${i.name} phone=${i.phone} note=${i.note}
                            namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                            quickName=${this.buyerPrefill?.name??""} quickPhone=${this.buyerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                            actionLabel=${this.txt.confirmReceived}
                            @reason:input=${e=>this._dhFormInput("_receivedForm",e.detail)}
                            @reason:action=${()=>this._emit("delivery:confirm-received",{handler:this._receivedForm})}>
                        </svc-pay-reason>`:s?"":t`
                            <svc-pay-reason ui=${this.ui} theme=${this.theme}
                                stepKey="delivered"
                                name=${r.name} phone=${r.phone} note=${r.note}
                                namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                                quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                                actionLabel=${this.txt.confirmDelivery}
                                showMedia media=${r.media} mediaPh=${this.txt.deliveryMediaPh}
                                @reason:input=${e=>this._dhFormInput("_shipperForm",e.detail)}
                                @reason:action=${()=>this._emit("delivery:confirm-delivery",{handler:this._shipperForm})}>
                            </svc-pay-reason>`}
                ${!e&&s?t`
                    <div class="countdown">${this.txt.autoConfirmLabel}: ${this.deliveredRemainingLabel}</div>
                `:""}
                ${e?"":this._rbReturnBlock()}
            </div>`}_rbReceived(){return t`
            <div class="order-panel">
                <p class="done-note">${this.txt.transactionDone}</p>
                ${Ve(this.meta.received,this.txt.roleBuyer,this.txt.handledByLabel)}
                ${this._comIsPast?"":this._rbReturnBlock()}
            </div>`}_rbReturned(){const e=$(this.meta.return);return t`
            <div class="order-panel">
                <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.txt.returnedNote}>
                    ${this.txt.reasonLabel}: ${e.note}
                </web-alert>
                ${Ve(this.meta.return,this.txt.roleBuyer,this.txt.handledByLabel)}
                ${this._rfReturnedMedia(e.media)}
            </div>`}_rfReturnedMedia(e){return e?t`
            <div class="returned-media">
                ${e.split("|").filter(Boolean).map(e=>t`<img src=${e} alt="" loading="lazy" />`)}
            </div>`:t``}_rbReturnBlock(){if("buyer"!==this.role)return t``;if(!this._showReturnForm)return t`
            <div class="return-block">
                <web-button type="soft" color="warning" height="36px"
                    @click=${()=>{this._showReturnForm=!0}}>${this.txt.returnOrder}</web-button>
            </div>`;const e=this._returnForm;return t`
            <div class="return-form">
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    stepKey="return"
                    title=${this.txt.returnOrder} titleColor="error"
                    name=${e.name} phone=${e.phone} note=${e.note}
                    namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.returnReasonPh}
                    quickName=${this.buyerPrefill?.name??""} quickPhone=${this.buyerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                    showMedia media=${e.media} mediaPh=${this.txt.returnMediaPh}
                    @reason:input=${e=>this._dhFormInput("_returnForm",e.detail)}>
                </svc-pay-reason>
                <web-button type="soft" color="warning" height="40px" ?disabled=${!(e.note??"").trim()}
                    @click=${()=>this._emit("delivery:request-return",{reason:e.note,handler:e})}>
                    ${this.txt.confirmReturn}
                </web-button>
            </div>`}};customElements.get("svc-pay-delivery")||customElements.define("svc-pay-delivery",Ye);var Je=e({SvcPay:()=>tt}),Ze={name:"",phone:"",note:""},et={vi:{signinFirst:"Đăng nhập để đặt hàng — đơn và lịch sử mua hàng gắn với tài khoản của bạn.",promoGone:"Mã khuyến mãi không còn dùng được — đã bỏ khỏi đơn.",orderFailed:"Không tạo được đơn hàng"},en:{signinFirst:"Sign in to place your order — orders and history stay with your account.",promoGone:"This promo code is no longer valid — removed from the order.",orderFailed:"Could not create the order"}},tt=class extends r{static styles=[i(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.pay-root{flex-direction:column;gap:0;display:flex}.pay-cart-wrap{display:contents}.major-steps{z-index:5;background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-bottom:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);padding:1rem 1rem .5rem;top:0}.major-body{padding:1rem 1.25rem 2rem}.major-desc{opacity:.7;margin:0 0 1rem;font-size:.85rem}.sub-steps{max-width:860px}.order-panel,.cancel-block{flex-direction:column;gap:.6rem;display:flex}.done-note{opacity:.7;font-size:.85rem;font-style:italic}.cancel-block{border-top:1px dashed var(--color-base-300);margin-top:.75rem;padding-top:.75rem}.hint{opacity:.6;margin:0;font-size:.8rem}.handled-by{opacity:.65;margin:0;font-size:.8rem}.party-row{flex-wrap:wrap;gap:.75rem 1.5rem;display:flex}.party-block{flex-direction:column;gap:.15rem;display:flex}.party-label{opacity:.6;font-size:.75rem}.party-value{font-size:.9rem;font-weight:600}.order-items{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-radius:.75rem;flex-direction:column;gap:.4rem;padding:.75rem .9rem;display:flex}.order-items-empty{opacity:.5;margin:0;font-size:.85rem;font-style:italic}.order-item-row{justify-content:space-between;align-items:center;font-size:.85rem;display:flex}.order-item-name{opacity:.8}.order-item-price{font-weight:600}.order-item-total{border-top:1px dashed var(--color-base-300);color:var(--color-primary);margin-top:.3rem;padding-top:.4rem;font-weight:700}.pay-login{flex-direction:column;gap:.75rem;padding:.25rem 0;display:flex}.pay-login-hint{border:1px dashed color-mix(in oklab, var(--color-primary) 35%, transparent);background:color-mix(in oklab, var(--color-primary) 8%, transparent);border-radius:.75rem;margin:0;padding:.7rem .9rem;font-size:.9rem}')];static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},service:{type:String},role:{type:String},lang:{type:String},txt:{type:Object},wallet:{type:Object},vietqr:{type:Object},invoiceId:{type:String},items:{type:Array},sellerId:{type:String},buyerId:{type:String},bayId:{type:String},isCart:{type:Boolean},onlyDelivery:{type:Boolean},cashDisabled:{type:Boolean},position:{type:String},cartService:{type:String},seller:{type:String},notes:{type:Array},owner:{type:Boolean},promosStore:{},loginRequired:{type:Boolean},_needLogin:{state:!0},_order:{state:!0},_invoice:{state:!0},_payMethod:{state:!0},_now:{state:!0},_refundForm:{state:!0},_selfOpen:{state:!0},_viewMajor:{state:!0},_customerData:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.service="pay",this.role="buyer",this.lang="vi",this.txt=null,this.wallet={},this.vietqr={},this.invoiceId="",this.items=[],this.sellerId="",this.buyerId="",this.bayId="",this.isCart=!1,this.onlyDelivery=!1,this.cashDisabled=!1,this.position="relative",this.cartService="",this.seller="",this.notes=null,this.owner=!1,this.promosStore=null,this.loginRequired=!1,this._needLogin=!1,this._pendingCheckout=null,this._order=null,this._invoice=null,this._payMethod="bank",this._now=0,this._payTimer=null,this._confirmingPaid=!1,this._refundForm={...Ze},this._selfOpen=!1,this._viewMajor="",this._lastMajor="",this._customerData={entries:[]},this._unsubOrder=null,this._unsubInvoice=null,this._unsubCustomer=null}connectedCallback(){super.connectedCallback(),this._dcInit(),this._unsubCustomer=Me("pay_customer",e=>{this._customerData=e??{entries:[]}}),this._unwatchLang=a("lang",e=>{this.lang=e||"vi"})}disconnectedCallback(){super.disconnectedCallback(),this._unsubOrder?.(),this._unsubInvoice?.(),this._unsubCustomer?.(),this._unwatchLang?.(),this._dcStopCountdown()}updated(e){if(e.has("service")&&this.service!==this._initedService&&this._dcReinit(),e.has("_order")||e.has("_invoice")){this._viewMajor&&this._comMajor!==this._lastMajor&&(this._viewMajor=""),this._lastMajor=this._comMajor;const e="order"===this._comMajor&&"paying"===this._comSub&&!this._invoice,t="delivered"===this._comSub&&!!this._comDeliveredAt;e||t?this._dcStartCountdown():this._dcStopCountdown()}!e.has("items")||this.invoiceId||this._invoice||"placing"!==this._order?.sub&&"paying"!==this._order?.sub||U(this.service,this.items),this.onlyDelivery&&this._order&&"delivery"!==this._order.fulfillment&&("placing"===this._order.sub||"paying"===this._order.sub)&&Q(this.service,"delivery")}_dcInit(){this._initedService=this.service,this.invoiceId?this._dcSubscribeInvoice(this.invoiceId):(B(this.service,{bayId:this.bayId,sellerId:this.sellerId,buyerId:this.buyerId,items:this.items}),this._order=D(this.service),this._unsubOrder=N(this.service,e=>{this._order=e,e.order_id&&e.payment_id&&!this._unsubInvoice&&this._dcSubscribeInvoice(e.order_id)}))}_dcReinit(){this._unsubOrder?.(),this._unsubOrder=null,this._unsubInvoice?.(),this._unsubInvoice=null,this._order=null,this._invoice=null,this.invoiceId="",this._dcInit()}_dcSubscribeInvoice(e){this.invoiceId=e,this._unsubInvoice=function(e,t,i){let r,s=!1,o=null;const n=async()=>{if(!s)try{const i=await V().findById(e),s=JSON.stringify(i??null);s!==r&&(r=s,t(i??null))}catch(a){i?.(a)}finally{s||(o=setTimeout(n,5e3))}};return n(),()=>{s=!0,clearTimeout(o)}}(e,e=>{this._invoice=e})}_dcStartCountdown(){this._payTimer||(this._now=Date.now(),this._payTimer=setInterval(()=>{this._now=Date.now(),this._dcMaybeAutoConfirm()},1e3))}_dcStopCountdown(){this._payTimer&&(clearInterval(this._payTimer),this._payTimer=null)}_dcMaybeAutoConfirm(){this.invoiceId&&"delivered"===this._comSub&&this._comDeliveredExpired&&ee(this.invoiceId,e=>{const t=$(e.delivered).at;return"delivered"===e.sub&&t&&Date.now()-t>=9e5},{sub:"received",autoCompleted:!0,received:Y({})})}get _stepTxt(){return I[this.lang]??I.vi}get _desc(){return v[this.lang]??v.vi}get _txt(){return o(this.txt,_,this.lang)}get _cancelTxt(){return C[this.lang]??C.vi}get _comNotes(){return(this.notes?.length?this.notes:null)??g[this.lang]??g.vi}get _comMajor(){return this._invoice?.meta?.major??this._order?.major??P[0]}get _comSub(){return this._invoice?.meta?.sub??this._order?.sub??y[P[0]][0]}get _comMeta(){return this._invoice?.meta??{}}get _comAmount(){return this._invoice?Number((this._invoice.summary||"0~0~0").split("~")[2])||0:Math.max(0,(this._order?.amount??0)-(Number(this._order?.disc)||0))}get _comPaymentRef(){return this._order?.order_id?`PAY-${this._order.order_id}`:""}get _comInvoiceUrl(){return X(this.invoiceId,{role:this.role,sellerId:this.sellerId,bayId:this.bayId})}get _comInvoiceQrSrc(){return this._comInvoiceUrl?`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(this._comInvoiceUrl)}`:""}get _comCartService(){return this.cartService||`${this.service}_cart`}get _comIsDelivery(){return this.onlyDelivery||"delivery"===this._order?.fulfillment}get _comHasCustomerData(){const e=this._customerData?.entries??[],t=e.find(e=>e.isDefault)??e[0];return!!(t?.fullName?.trim()&&t?.phone?.trim()&&t?.location?.trim())}get _comOrderTerminal(){return["cancelled","received","returned"].includes(this._comSub)}get _comMajorSteps(){return P.map(e=>({id:e,label:this._stepTxt[e].label}))}get _comViewMajor(){return this._viewMajor||this._comMajor}get _comIsPastMajor(){return this._comViewMajor!==this._comMajor}get _comViewSub(){if(!this._comIsPastMajor)return this._comSub;const e=y[this._comViewMajor]??[];return e[e.length-1]??""}get _comSubSteps(){const e=this._comViewMajor,t=["returned","cancelled"];return(y[e]??[]).filter(e=>!t.includes(e)||this._comSub===e).map(t=>({id:t,label:this._stepTxt[e][t],...this._comIsPastMajor?{status:"done"}:{}}))}get _comViewDesc(){return this._comIsPastMajor?"order"===this._comViewMajor?this._desc[this._comViewSub]??"":"":this._desc[this._comSub]??""}get _comBuyerPrefill(){const e=G(this._invoice?.buyer);return{name:e.name,phone:e.phone,note:""}}get _comSellerPrefill(){const e=W(this._invoice?.seller);return{name:e.name,phone:e.phone}}get _comPayRemainingMs(){return this._order?.expires_at?Math.max(0,this._order.expires_at-this._now):b}get _comPayExpired(){return!!this._order?.expires_at&&this._comPayRemainingMs<=0}get _comPayRemainingLabel(){return Qe(this._comPayRemainingMs)}get _comDeliveredAt(){return $(this._comMeta.delivered).at}get _comDeliveredRemainingMs(){return this._comDeliveredAt?Math.max(0,this._comDeliveredAt+x-this._now):0}get _comDeliveredExpired(){return!!this._comDeliveredAt&&this._comDeliveredRemainingMs<=0}get _comDeliveredRemainingLabel(){return Qe(this._comDeliveredRemainingMs)}_dhOrderPaymentSelect(e){this._payMethod=e.detail.method}_dhOrderToggleDelivery(e){Q(this.service,e.detail.active?"delivery":"pickup")}_dhMajorChange(e){const t=e.detail?.active??"";this._viewMajor=t===this._comMajor?"":t}async _dhCartCheckout(e){if(this.loginRequired&&!this.buyerId)return this._pendingCheckout=e.detail,this._needLogin=!0,this._selfOpen=!0,void(await u(()=>import("./svc-auth.CfUS6gjH.js").then(e=>e.t),__vite__mapDeps([7,1,8,9,10,11,12,2,3,5,4,13,14,6])));this._needLogin=!1;const t=e.detail?.items??[],i=e.detail?.notes??[],r=t.reduce((e,t)=>e+Number(t.price??0)*Number(t.qty??1),0),s=e.detail?.promo??null,o=s?await we(s):null,a=o&&!(o.minOrder&&r<o.minOrder)&&!(o.quantity&&o.used>=o.quantity);s&&!a&&n(this._loginTxt.promoGone,"warning");const l=a?o.code:null,h=a?ve(o,r):0,d={bayId:this.bayId,sellerId:this.sellerId,buyerId:this.buyerId,items:t,notes:i,promo:l,disc:h};this._order?.order_id&&!this.invoiceId?U(this.service,t,{notes:i,promo:l,disc:h}):(this._unsubInvoice?.(),this._unsubInvoice=null,this._invoice=null,this.invoiceId="",function(e,t={}){const i=R(t);M(e,i)}(this.service,d)),this._order=D(this.service),this._selfOpen=!0,c(this,"cart:checkout",e.detail)}_dfPlaceOrder(){!function(e){const t=D(e);if(!t||!t.items.length||"placing"!==t.sub)return null;const i=Date.now();M(e,{sub:"paying",expires_at:i+b,updated_at:i}),D(e)}(this.service)}_dfBackToPlacing(){M(this.service,{sub:"placing",updated_at:Date.now()})}_dfBackToCart(){c(this,"pay:back-to-cart",{}),this.isCart&&(this._selfOpen=!1,M(this._comCartService,{items:this._order?.items??[],open:!0}))}async _dfConfirmPaid(){if(!this._confirmingPaid){this._confirmingPaid=!0;try{if(!(await async function(e,t,i){const r=D(e);if(!r||"paying"!==r.sub||!t)return null;const s=Date.now(),o={id:r.order_id,order_id:r.order_id,issued_at:new Date(s).toISOString(),status:"issued",currency:r.currency,no:"",series:"",note:(r.notes??[]).join("; "),seller_id:r.seller_id,buyer_id:r.buyer_id,seller:Z(i,r.seller_id),buyer:J(r.buyer_id),items:(n=r.items,(n??[]).map(e=>[e.name??"",Number(e.price??0),e.unit??"",Number(e.qty??1),0,Number(e.price??0)*Number(e.qty??1),0,0].join("~")).join("|")),summary:`${r.amount}~0~${Math.max(0,r.amount-E(r.disc))}`,meta:{major:"order",sub:"paying",bay_id:r.bay_id,payment_id:t,buyer_confirmed:!0,seller_confirmed:!1,fulfillment:"pickup"===r.fulfillment?"pickup":"delivery",promo:r.promo??null,subStatus:null,stockItems:(r.items??[]).filter(e=>e.id).map(e=>({id:e.id,qty:Number(e.qty??1)})),stockRestored:!1}};var n;let a=null;try{await V().set(o.id,o),a=await V().findById(o.id)}catch(l){throw console.error("[pay] promoteToInvoice error:",l),l}return M(e,{payment_id:t,buyer_confirmed:!0,updated_at:s}),a??o}(this.service,this._comPaymentRef,this.seller)))return;this.isCart&&(e=this._comCartService,D(e)&&M(e,{items:[],checkedNotes:[]}))}catch(t){n(`${this._loginTxt.orderFailed}: ${t?.message??""}`,"error")}finally{this._confirmingPaid=!1}var e}}_dfConfirmReceivedMoney(e){this.invoiceId&&ce(this.invoiceId,e)}_dfCompleteProcessing(e){this.invoiceId&&function(e,t={}){ee(e,e=>"processing"===e.major&&"preparing"===e.sub,e=>"pickup"===e.fulfillment?{major:"delivery",sub:"received",received:Y(t)}:{sub:"done",preparing:Y(t)})}(this.invoiceId,e)}_dfAdvanceToDelivery(){this.invoiceId&&ee(this.invoiceId,e=>"processing"===e.major&&"done"===e.sub,{major:"delivery",sub:"packing"})}_dfStartShipping(e){this.invoiceId&&function(e,t={}){ee(e,e=>"packing"===e.sub,{sub:"shipping",packing:Y(t)})}(this.invoiceId,e)}_dfConfirmShipped(e){this.invoiceId&&function(e,t={}){ee(e,e=>"shipping"===e.sub,{sub:"delivered",shipping:Y(t)})}(this.invoiceId,e)}_dfConfirmDeliveryDone(e){this.invoiceId&&function(e,t={}){ee(e,e=>"delivered"===e.sub&&!e.delivered,{delivered:Y(t,!0)})}(this.invoiceId,e)}_dfConfirmReceived(e){this.invoiceId&&he(this.invoiceId,e)}_dfRequestCancel(e){(e??"").trim()&&this.invoiceId&&function(e,t,i={}){const r=(t??"").trim();r&&ee(e,e=>"preparing"===e.sub&&(!e.subStatus||"rejected"===e.subStatus),()=>({cancel:Y({...i,note:r}),subStatus:"pending"}))}(this.invoiceId,e,this._comBuyerPrefill)}_dfAcceptCancel(e){this.invoiceId&&de(this.invoiceId,e)}_dfSellerCancelOrder(e){(e.note??"").trim()&&this.invoiceId&&async function(e,t,i={}){const r=(t??"").trim();r&&await ee(e,e=>"preparing"===e.sub&&"pending"!==e.subStatus,()=>({sub:"cancelled",subStatus:"seller_cancelled",cancel:Y({...i,note:r}),stockRestored:!0}),{status:"cancelled"})}(this.invoiceId,e.note,e)}_dfConfirmRefund(){this.invoiceId&&pe(this.invoiceId,this._refundForm)}_dfRejectCancel(e){(e.note??"").trim()&&this.invoiceId&&me(this.invoiceId,e.note,e)}_dfRequestReturn(e,t){(e??"").trim()&&this.invoiceId&&async function(e,t,i={}){const r=(t??"").trim();r&&await ee(e,e=>"delivery"===e.major&&("delivered"===e.sub||"received"===e.sub),()=>({sub:"returned",return:Y({...i,note:r},!0),stockRestored:!0}))}(this.invoiceId,e,t)}get _loginTxt(){return et[this.lang]??et.vi}_dhLoginSuccess(e){const t=e.detail?.profile?.id;if(!t)return;this.buyerId=t;const i=this._pendingCheckout;this._pendingCheckout=null,this._needLogin=!1,i&&this._dhCartCheckout({detail:i})}_rbLogin(){return t`
            <div class="pay-login">
                <p class="pay-login-hint">${this._loginTxt.signinFirst}</p>
                <svc-auth embedded guestOk lang=${this.lang} ui=${this.ui} theme=${this.theme}
                    @login-success=${e=>this._dhLoginSuccess(e)}></svc-auth>
            </div>`}render(){const e=t`
            <div class="pay-root">
                <web-steps class="major-steps" linear horizontal
                    .steps=${this._comMajorSteps}
                    active=${this._comMajor}
                    ui=${this.ui} theme=${this.theme}
                    mainColors=${this.mainColors} textColor=${this.textColor}
                    size="md" ?ended=${this._comOrderTerminal}
                    @change=${e=>this._dhMajorChange(e)}>
                </web-steps>
                <div class="major-body">
                    <p class="major-desc">${this._comViewDesc}</p>
                    ${this._rbSubSteps()}
                </div>
            </div>`;return this.isCart?t`
            <div class="pay-cart-wrap">
                ${"seller"===this.role?t``:t`
                    <svc-cart service=${this._comCartService} position=${this.position}
                        ui=${this.ui} theme=${this.theme} lang=${this.lang} ?owner=${this.owner}
                        .wallet=${this.wallet} .notes=${this._comNotes} .promosStore=${this.promosStore}
                        seller=${this.seller} sellerId=${this.sellerId} bayId=${this.bayId}
                        @cart:checkout=${e=>this._dhCartCheckout(e)}>
                    </svc-cart>`}
                <web-dialog type="mobile" ui=${this.ui} theme=${this.theme} maxWidth="640px"
                    .open=${this._selfOpen} @close=${()=>{this._selfOpen=!1,this._needLogin=!1}}>
                    ${this._needLogin?this._rbLogin():e}
                </web-dialog>
            </div>`:e}_rbSubSteps(){return t`
            <web-steps class="sub-steps" isVertical linear
                .steps=${this._comSubSteps}
                active=${this._comViewSub}
                ui=${this.ui} theme=${this.theme}
                mainColors=${this.mainColors} textColor=${this.textColor}
                size="md" ?ended=${this._comOrderTerminal}>
                ${this._comSubSteps.map(e=>t`<div slot=${e.id}>${this._rfSubPanel(e.id)}</div>`)}
            </web-steps>`}_rfSubPanel(e){return this._comIsPastMajor?"order"===this._comViewMajor?this._rbOrderReadonlySummary():this._rbPastMajorSummary():"order"===this._comMajor?this._rbOrderLive(e):"processing"===this._comMajor?this._rbProcessingLive(e):this._rbDeliveryLive(e)}_rbOrderLive(e){return t`
            <svc-pay-order
                subId=${e} role=${this.role} lang=${this.lang}
                .txt=${this._txt} .cancelTxt=${this._cancelTxt}
                .sellerPrefill=${this._comSellerPrefill}
                ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                .wallet=${this.wallet} .vietqr=${this.vietqr}
                .items=${this._order?.items??[]} .amount=${this._comAmount}
                ?isDelivery=${this._comIsDelivery} ?hasCustomerData=${this._comHasCustomerData}
                ?onlyDelivery=${this.onlyDelivery} ?cashDisabled=${this.cashDisabled}
                payMethod=${this._payMethod}
                paymentRef=${this._comPaymentRef}
                ?payExpired=${this._comPayExpired} payRemainingLabel=${this._comPayRemainingLabel}
                ?hasInvoice=${!!this._invoice}
                invoiceId=${this.invoiceId} invoiceUrl=${this._comInvoiceUrl} invoiceQrSrc=${this._comInvoiceQrSrc}
                @order:payment-select=${e=>this._dhOrderPaymentSelect(e)}
                @order:toggle-delivery=${e=>this._dhOrderToggleDelivery(e)}
                @order:place=${()=>this._dfPlaceOrder()}
                @order:back-to-cart=${()=>this._dfBackToCart()}
                @order:back-to-placing=${()=>this._dfBackToPlacing()}
                @order:paid=${()=>this._dfConfirmPaid()}
                @order:confirm-payment=${e=>this._dfConfirmReceivedMoney(e.detail.handler)}>
            </svc-pay-order>`}_rbProcessingLive(e){const i=t`
            <svc-pay-processing
                subId=${e} role=${this.role} lang=${this.lang}
                .txt=${this._txt} .cancelTxt=${this._cancelTxt} .meta=${this._comMeta}
                .sellerPrefill=${this._comSellerPrefill}
                stepTitle=${this._stepTxt.processing.preparing}
                ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                @processing:complete=${e=>this._dfCompleteProcessing(e.detail.handler)}
                @processing:request-cancel=${e=>this._dfRequestCancel(e.detail.reason)}
                @processing:seller-cancel=${e=>this._dfSellerCancelOrder(e.detail.handler)}
                @processing:accept-cancel=${e=>this._dfAcceptCancel(e.detail.handler)}
                @processing:reject-cancel=${e=>this._dfRejectCancel(e.detail.handler)}
                @processing:advance=${()=>this._dfAdvanceToDelivery()}>
            </svc-pay-processing>`;return"cancelled"!==e?i:t`<div class="order-panel">${i}${this._rbRefundBlock()}</div>`}_rbDeliveryLive(e){const i=t`
            <svc-pay-delivery
                subId=${e} role=${this.role} lang=${this.lang}
                .txt=${this._txt} .cancelTxt=${this._cancelTxt} .meta=${this._comMeta}
                .buyerPrefill=${this._comBuyerPrefill} .sellerPrefill=${this._comSellerPrefill}
                deliveredRemainingLabel=${this._comDeliveredRemainingLabel}
                ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                @delivery:confirm-packed=${e=>this._dfStartShipping(e.detail.handler)}
                @delivery:confirm-shipped=${e=>this._dfConfirmShipped(e.detail.handler)}
                @delivery:confirm-delivery=${e=>this._dfConfirmDeliveryDone(e.detail.handler)}
                @delivery:confirm-received=${e=>this._dfConfirmReceived(e.detail.handler)}
                @delivery:request-return=${e=>this._dfRequestReturn(e.detail.reason,e.detail.handler)}>
            </svc-pay-delivery>`;return"returned"!==e?i:t`<div class="order-panel">${i}${this._rbRefundBlock()}</div>`}_rbPastMajorSummary(){return t`
            <div class="order-panel">
                <p class="done-note">${this._txt.pastStepDoneAt(Ue($(this._comMeta.preparing).at))}</p>
                ${Ve(this._comMeta.preparing,this._txt.roleSeller,this._txt.handledByLabel)}
            </div>`}_rbOrderReadonlySummary(){const e=G(this._invoice?.buyer),i=W(this._invoice?.seller),r=this._invoice?H(this._invoice.items):this._order?.items??[];return t`
            <div class="order-panel">
                <div class="party-row">
                    <div class="party-block">
                        <span class="party-label">${this._txt.roleBuyer}</span>
                        <span class="party-value">${[e.name,e.phone].filter(Boolean).join(" · ")||"—"}</span>
                    </div>
                    <div class="party-block">
                        <span class="party-label">${this._txt.roleSeller}</span>
                        <span class="party-value">${[i.name,i.phone].filter(Boolean).join(" · ")||"—"}</span>
                    </div>
                </div>
                ${Ke(r,this._comAmount,this._txt,this.lang)}
            </div>`}_rbRefundBlock(){if($(this._comMeta.refunded).at)return t`
            <div class="cancel-block">
                <web-alert type="success" ui=${this.ui} theme=${this.theme} title=${this._txt.refundDoneNote}></web-alert>
                ${Ve(this._comMeta.refunded,this._txt.roleSeller,this._txt.handledByLabel)}
            </div>`;if("seller"!==this.role)return t`<p class="hint">${this._txt.refundPendingNote}</p>`;const e=this._refundForm;return t`
            <div class="cancel-block">
                <p class="hint">${this._txt.refundPendingNote}</p>
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    stepKey="refund"
                    name=${e.name} phone=${e.phone} note=${e.note}
                    namePh=${this._txt.handlerNamePh} phonePh=${this._txt.handlerPhonePh} notePh=${this._txt.handlerNotePh}
                    quickName=${this._comSellerPrefill.name} quickPhone=${this._comSellerPrefill.phone} quickLabel=${this._txt.quickFillLabel}
                    actionLabel=${this._txt.confirmRefundLabel}
                    @reason:input=${e=>{this._refundForm={...this._refundForm,[e.detail.key]:e.detail.value}}}
                    @reason:action=${()=>this._dfConfirmRefund()}>
                </svc-pay-reason>
            </div>`}};customElements.get("svc-pay")||customElements.define("svc-pay",tt);export{me as _,ce as a,ne as c,se as d,ie as f,W as g,H as h,he as i,oe as l,G as m,de as n,pe as o,le as p,X as r,ae as s,Je as t,re as u};