import{a as e,c as t,t as i}from"./lit.DdxAWBw5.js";import"./iconify-icon.BQKUsOMK.js";import"./web-button.CCcr9NnS.js";import{t as r}from"./pastel.ChvuEMaS.js";import{C as s,S as o,T as a,_ as n,a as l,o as c,s as h}from"./util.7B3q8i3m.js";import"./web-steps.CQuW5elZ.js";import"./web-alert.3whiDc4n.js";import"./web-dialog.7qqH-8ji.js";import"./web-toast.DBg7NCe4.js";import"./web-fab.DV1Z2bBF.js";import"./web-tooltip.DJH-bfFD.js";import"./web-text.BxifyJ0d.js";import{$ as d,A as p,B as m,D as u,E as b,F as y,G as f,H as v,I as _,J as g,K as x,L as $,M as w,N as k,O as P,P as S,Q as C,R as I,S as q,T as M,U as D,V as T,W as L,X as j,Y as R,Z as F,a as N,at as B,c as O,ct as z,d as A,dt as E,et as U,f as Q,ft as K,h as V,i as H,it as W,j as X,k as G,l as Y,lt as J,m as Z,n as ee,nt as te,o as ie,ot as re,p as se,q as oe,r as ae,rt as ne,s as le,st as ce,t as he,tt as de,u as pe,ut as me,y as ue,z as be}from"./service.Bfj8igp4.js";import{n as ye,r as fe}from"./conductor.iibYbMPc.js";import"./web-toggle.CD2ffXtX.js";import"./web-expansion.PdCnKOoa.js";import"./web-location-map.D0VGBLpU.js";import"./web-textarea.Ctfir3vD.js";import"./svc-photor.CDW_cu4T.js";var ve={vi:{label:"Mã khuyến mãi",ph:"Nhập mã giảm giá",apply:"Áp dụng",applied:"đã được áp dụng",errInvalid:"Mã không hợp lệ hoặc đã hết hạn",errMinOrder:"Đơn tối thiểu",errUsedUp:"Mã đã hết lượt sử dụng",createBtn:"Tạo mã",createTitle:"Tạo mã khuyến mãi mới",suggestLabel:"Mẫu có sẵn — bấm để điền nhanh",createSpecialTitle:"Tạo voucher gửi riêng",createSpecialBtn:"Gửi voucher",existingLabel:"Mã khuyến mãi đang tồn tại",remainingLabel:"Còn lại",fCode:"Mã (vd: SALE10)",fLabel:"Nhãn hiển thị (vd: Giảm 10%)",fDiscount:"Mức giảm",fQuantity:"Số lượng lượt dùng (bỏ trống = mặc định 1)",fMinOrder:"Đơn tối thiểu (không bắt buộc)",fMaxDiscount:"Giảm tối đa (không bắt buộc, chỉ áp dụng cho %)",percent:"Theo %",fixed:"Số tiền cố định",errRequired:"Vui lòng nhập đủ mã, nhãn và mức giảm",maxDiscHint:"Giảm tối đa",deleteTitle:"Xoá mã này",usedHint:"Dùng"},en:{label:"Promo code",ph:"Enter promo code",apply:"Apply",applied:"has been applied",errInvalid:"Invalid or expired code",errMinOrder:"Minimum order",errUsedUp:"This code has reached its usage limit",createBtn:"New code",createTitle:"Create new promo code",suggestLabel:"Templates — click to fill in",createSpecialTitle:"Create a private voucher",createSpecialBtn:"Send voucher",existingLabel:"Existing promo codes",remainingLabel:"Remaining",fCode:"Code (eg. SALE10)",fLabel:"Display label (eg. 10% off)",fDiscount:"Discount amount",fQuantity:"Usage limit (leave blank = defaults to 1)",fMinOrder:"Minimum order (optional)",fMaxDiscount:"Max discount (optional, percent only)",percent:"Percent",fixed:"Fixed amount",errRequired:"Code, label and discount are required",maxDiscHint:"Max discount",deleteTitle:"Delete this code",usedHint:"Used"}},_e={code:"",label:"",type:"percent",discount:"",minOrder:"",maxDiscount:""},ge=class extends i{static styles=t(":host{display:block}.section-label{opacity:.7;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.625rem;font-size:.72rem;font-weight:700}.promo-header{justify-content:space-between;align-items:center;margin-bottom:.625rem;display:flex}.promo-header .section-label{margin-bottom:0}.promo-row{gap:.5rem;margin-bottom:.5rem;display:flex}.promo-input-wrap{flex:1;align-items:center;display:flex;position:relative}.promo-clear{position:absolute;right:.5rem}.promo-input{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 15%, transparent);background:color-mix(in oklab, var(--color-base-200,#eee) 50%, transparent);width:100%;color:var(--color-base-content,#111);text-transform:uppercase;letter-spacing:.05em;border-radius:.625rem;outline:none;padding:.5rem 2rem .5rem .75rem;font-size:.875rem;font-weight:600;transition:border-color .2s}.promo-input:focus{border-color:var(--color-primary,#fbbf24)}.promo-input::placeholder{text-transform:none;letter-spacing:normal;opacity:.7;font-weight:400}.promo-msg{align-items:center;gap:.3rem;padding:.3rem 0;font-size:.8rem;display:flex}.promo-msg.ok{color:var(--color-success,#22c55e)}.promo-msg.err{color:var(--color-error,#f5465c)}.promo-hints{flex-wrap:wrap;gap:.375rem;margin-top:.375rem;display:flex}.promo-chip-info{vertical-align:middle;color:var(--color-base-content,#111);opacity:.7;cursor:help;margin:0 -.25rem;transition:opacity .2s}.promo-chip-info:hover{opacity:1}.promo-chip-delete{vertical-align:middle;color:var(--color-base-content,#111);opacity:.7;cursor:pointer;margin-right:-.25rem;transition:opacity .2s,color .2s}.promo-chip-delete:hover{opacity:1;color:var(--color-error,#f5465c)}.promo-form{text-align:left;flex-direction:column;gap:.75rem;margin-bottom:1rem;display:flex}.promo-type-toggle{gap:.5rem;display:flex}.sas-panel{border:1px solid color-mix(in oklab, var(--color-base-content) 30%, transparent);border-radius:1rem;flex-direction:column;gap:.5rem;margin:0;padding:.5rem .75rem .75rem;display:flex}.sas-legend{text-transform:uppercase;letter-spacing:.06em;color:var(--color-base-content);align-items:center;gap:.3rem;margin:0 auto;padding:0 .4rem;font-size:.72rem;font-weight:700;display:flex}");static properties={promos:{type:Array},applied:{type:Object},total:{type:Number},owner:{type:Boolean},type:{type:String},special:{type:Boolean},ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},txt:{type:Object},lang:{type:String},_input:{state:!0},_error:{state:!0},_showCreate:{state:!0},_fCode:{state:!0},_fLabel:{state:!0},_fType:{state:!0},_fDiscount:{state:!0},_fQuantity:{state:!0},_fMinOrder:{state:!0},_fMaxDiscount:{state:!0},_fError:{state:!0}};constructor(){super(),this.promos=[],this.applied=null,this.total=0,this.owner=!1,this.type="",this.special=!1,this.txt=null,this.lang="vi",this._input="",this._error="",this._showCreate=!1,this._fError="",this._setForm()}willUpdate(e){e.has("applied")&&!this.applied&&(this._input="",this._error="")}get _txt(){return s(this.txt,ve,this.lang)}_emit(e,t){l(this,e,t)}_dhApply(){const e=this._input.trim().toUpperCase();if(!e)return void(this._error="");const t=(this.promos??[]).find(t=>t.code===e);t?t.minOrder&&this.total<t.minOrder?this._error=`${this._txt.errMinOrder} ${h(t.minOrder,this.lang)}`:this._comUsedUp(t)?this._error=this._txt.errUsedUp:(this._error="",this._emit("promo:apply",{promo:t})):this._error=this._txt.errInvalid}_dhClear(){this._input="",this._error="",this._emit("promo:clear")}_dhPick(e){this._input=e,this._dhApply()}_dhDeletePromo(e){this._emit("promo:delete",{code:e})}_setForm(e=_e){this._fCode=e.code??"",this._fLabel=e.label??"",this._fType=e.type??"percent",this._fDiscount=e.discount?String(e.discount):"",this._fQuantity=e.quantity?String(e.quantity):"",this._fMinOrder=e.minOrder?String(e.minOrder):"",this._fMaxDiscount=e.maxDiscount?String(e.maxDiscount):"",this._fError=""}_dhOpenCreate(){this._setForm(),this._showCreate=!0}_dhCancelCreate(){this._showCreate=!1}_dhFillSuggestion(e){this._setForm(e)}_dhSubmitCreate(){const e=this._fCode.trim().toUpperCase(),t=this._fLabel.trim(),i=Number(this._fDiscount);if(!e||!t||!i)return void(this._fError=this._txt.errRequired);const r={code:e,label:t,type:this._fType,discount:i};this.special?(r.code=`${e}-${Math.random().toString(36).slice(2,6).toUpperCase()}`,r.private=!0,r.quantity=1):(r.quantity=this._fQuantity?Number(this._fQuantity):1,this._fMinOrder&&(r.minOrder=Number(this._fMinOrder)),"percent"===this._fType&&this._fMaxDiscount&&(r.maxDiscount=Number(this._fMaxDiscount))),this._emit("promo:create",{promo:r}),this._showCreate=!1}_rfCreateBtn(){const t="circle"===this.type,i=this.special?this._txt.createSpecialBtn:this._txt.createBtn;return e`
            <web-button type=${this.special?"soft":"fill"} color="primary" .stys=${{borderWidth:this.special?"0":"1px"}}
                ?square=${t} rounded=${t?"50%":".5rem"} height=${t?"45px":"23px"}
                ui=${this.ui} theme=${this.theme} title=${i} @click=${()=>this._dhOpenCreate()}>
                <iconify-icon icon=${"ri:coupon-3-line"} width=${t?"20px":"16px"}></iconify-icon>${t?"":e` ${i}`}
            </web-button>
            `}render(){return"circle"===this.type?e`${this.owner?e`${this._rfCreateBtn()}${this._rbCreateDialog()}`:""}`:e`
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
                    ${this._input?e`
                        <web-button class="promo-clear" type="ghost" square height="20px"
                            ui=${this.ui} theme=${this.theme} @click=${()=>this._dhClear()}>
                            <iconify-icon icon="ri:close-circle-fill"></iconify-icon>
                        </web-button>`:""}
                </div>
                <web-button type="outline" color="primary" height="36px" style="flex-shrink:0"
                    ui=${this.ui} theme=${this.theme} @click=${()=>this._dhApply()}>${this._txt.apply}</web-button>
            </div>
            ${this._error?e`<div class="promo-msg err"><iconify-icon icon="ri:error-warning-line"></iconify-icon> ${this._error}</div>`:""}
            ${this.applied?e`<div class="promo-msg ok"><iconify-icon icon="ri:checkbox-circle-line"></iconify-icon> ${this.applied.label} ${this._txt.applied}</div>`:""}
            <div class="promo-hints">
                ${(this.promos??[]).filter(e=>e.code!==this.applied?.code&&!e.private&&!this._comUsedUp(e)).map(e=>this._rfChip(e))}
            </div>
            ${this.owner?this._rbCreateDialog():""}`}_rfChip(t){return e`
            <web-button mode="badge" type="dash" color="primary" rounded="4px" style="font-size:0.7rem"
                ui=${this.ui} theme=${this.theme} @click=${()=>this._dhPick(t.code)}>
                ${this._comCondition(t)?e`
                    <web-tooltip ui=${this.ui} placement="top" @click=${e=>e.stopPropagation()}>
                        <iconify-icon class="promo-chip-info" icon="ri:information-line" width="16px"></iconify-icon>
                        <span slot="content">${this._comCondition(t)}</span>
                    </web-tooltip>
                `:""}
                ${t.code} — ${t.label}
                ${this.owner?e`
                    <iconify-icon class="promo-chip-delete" icon="ri:close-circle-fill" title=${this._txt.deleteTitle}
                     width="16px" @click=${e=>{e.stopPropagation(),this._dhDeletePromo(t.code)}}></iconify-icon>
                `:""}
            </web-button>`}_rbCreateDialog(){const t=this.special?this._txt.createSpecialTitle:this._txt.createTitle,i=this.special?B:W;return e`
            <web-dialog ?open=${this._showCreate} title=${t} lang=${this.lang}
                maxWidth="420px" persistent ui=${this.ui} theme=${this.theme}
                @confirm=${()=>this._dhSubmitCreate()} @cancel=${()=>this._dhCancelCreate()}>
                <div class="promo-form">
                    <fieldset class="sas-panel">
                        <legend class="sas-legend">
                            <iconify-icon icon="ri:coupon-3-line"></iconify-icon>${this._txt.suggestLabel}
                        </legend>
                        <div class="promo-hints">
                            ${i.map(t=>e`
                                <web-button mode="badge" type="dash" color="primary" rounded="4px" style="font-size:0.7rem"
                                    ui=${this.ui} theme=${this.theme}
                                    @click=${()=>this._dhFillSuggestion(t)}>${t.code} — ${t.label}</web-button>
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

                    ${this._fError?e`<div class="promo-msg err"><iconify-icon icon="ri:error-primary-line"></iconify-icon> ${this._fError}</div>`:""}
                </div>
                ${this._rfExistingPromos()}
            </web-dialog>`}_rfExistingPromos(){const t=(this.promos??[]).filter(e=>!e.private);return t.length?e`
            <fieldset class="sas-panel">
                <legend class="sas-legend">
                    <iconify-icon icon="ri:price-tag-3-line"></iconify-icon>${this._txt.existingLabel}
                </legend>
                <div class="promo-hints">
                    ${t.map(e=>this._rfExistingChip(e))}
                </div>
            </fieldset>`:""}_rfExistingChip(t){return e`
            <web-tooltip ui=${this.ui} placement="top">
                <web-button mode="badge" type="fill" color="primary" rounded="4px" style="font-size:0.7rem"
                    ui=${this.ui} theme=${this.theme}>${t.code} — ${t.label}</web-button>
                <span slot="content">${this._txt.remainingLabel}: ${this._comRemaining(t)}/${t.quantity??1}</span>
            </web-tooltip>`}_comRemaining(e){return Math.max(0,(e.quantity??1)-(e.used??0))}_rfTypeBtn(t,i){const r=this._fType===t;return e`
            <web-button type="fill" color=${r?"primary":""}
                style="flex:1" width="100%" ui="modern" rounded="0.25rem" theme=${this.theme}
                @click=${()=>{this._fType=t}}>${i}</web-button>`}_rfFormField(t,i,r="text"){return e`
            <web-text ui=${this.ui} type=${r} placeholder=${i} .value=${this[t]}
                @input=${e=>{this[t]=e.detail?.value??""}}></web-text>`}_comUsedUp(e){return!!(e.quantity&&(e.used??0)>=e.quantity)}_comCondition(e){const t=[];return e.minOrder&&t.push(`${this._txt.errMinOrder} ${h(e.minOrder,this.lang)}`),e.maxDiscount&&t.push(`${this._txt.maxDiscHint} ${h(e.maxDiscount,this.lang)}`),this.owner&&e.quantity&&t.push(`${this._txt.usedHint} ${e.used??0}/${e.quantity}`),t.join(" · ")}};customElements.get("svc-pay-promo")||customElements.define("svc-pay-promo",ge);var xe={vi:{items:"món",cart:"Giỏ hàng",empty:"Chưa có món nào trong giỏ",subtotal:"Tạm tính",discount:"Khuyến mãi",delete:"Xoá",notesLabel:"Yêu cầu đặc biệt",notesPh:"Ghi chú thêm...",total:"Tổng tiền",btnCheckout:"Đặt hàng →",btnClear:"Xóa tất cả"},en:{items:"items",cart:"Cart",empty:"No items in cart",subtotal:"Subtotal",discount:"Discount",delete:"Remove",notesLabel:"Special requests",notesPh:"Additional notes...",total:"Total",btnCheckout:"Checkout →",btnClear:"Clear all"}},$e=class extends i{static styles=t(":host{display:block}.header-icon{color:var(--color-primary,#fbbf24);font-size:1.375rem}.header-title{text-align:left;flex:1;font-size:1.05rem;font-weight:700}.header-badge{background:color-mix(in oklab, var(--color-primary,#fbbf24) 15%, transparent);color:var(--color-primary,#fbbf24);border-radius:2rem;padding:.2rem .625rem;font-size:.72rem;font-weight:700}.empty{opacity:.3;flex-direction:column;flex:1;justify-content:center;align-items:center;gap:.75rem;padding:3rem 1rem;display:flex}.empty iconify-icon{font-size:3.5rem}.empty p{margin:0;font-size:.95rem;font-weight:500}.items{flex-direction:column;padding:0 1.25rem;display:flex}.item{border-bottom:1px solid color-mix(in oklab, var(--color-base-content,#000) 6%, transparent);align-items:center;gap:.75rem;padding:.875rem 0;display:flex}.item:last-child{border-bottom:none}.item-img{object-fit:contain;background:color-mix(in oklab, var(--color-base-200,#eee) 60%, transparent);border-radius:.75rem;flex-shrink:0;width:3.75rem;height:3.75rem}.item-info{text-align:left;flex:1;min-width:0}.item-name{text-overflow:ellipsis;white-space:nowrap;margin-bottom:.2rem;font-size:.9rem;font-weight:600;overflow:hidden}.item-price{color:var(--color-primary,#fbbf24);font-size:.95rem;font-weight:700}.item-subtotal{opacity:.7;margin-top:.1rem;font-size:.75rem}.item-right{flex-direction:column;flex-shrink:0;align-items:flex-end;gap:.5rem;display:flex}.qty-row{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 14%, transparent);border-radius:.625rem;align-items:center;display:flex;overflow:hidden}.qty-num{text-align:center;min-width:2.25rem;padding:0 .25rem;font-size:.9rem;font-weight:700}.section{border-top:1px solid color-mix(in oklab, var(--color-base-content,#000) 7%, transparent);flex-shrink:0;padding:.875rem 1.25rem}.section-label{opacity:.7;text-transform:uppercase;text-align:left;letter-spacing:.06em;margin-bottom:.625rem;font-size:.72rem;font-weight:700}.row{justify-content:space-between;align-items:center;font-size:.85rem;display:flex}.row+.row{margin-top:.35rem}.row .label{opacity:.7}.row .value{font-weight:600}.row.discount .value{color:var(--color-success,#22c55e);font-weight:700}.notes-grid{grid-template-columns:1fr 1fr;gap:.375rem 1rem;margin-bottom:.625rem;display:grid}.note-item{cursor:pointer;user-select:none;align-items:center;gap:.5rem;font-size:.85rem;display:flex}.note-item input[type=checkbox]{accent-color:var(--color-primary,#fbbf24);cursor:pointer;flex-shrink:0;width:.9rem;height:.9rem}.note-textarea{box-sizing:border-box;border:1px solid color-mix(in oklab, var(--color-base-content,#000) 14%, transparent);background:color-mix(in oklab, var(--color-base-200,#eee) 50%, transparent);width:100%;color:var(--color-base-content,#111);resize:none;border-radius:.625rem;outline:none;padding:.5rem .75rem;font-family:inherit;font-size:.85rem;transition:border-color .2s}.note-textarea:focus{border-color:var(--color-primary,#fbbf24)}.note-textarea::placeholder{opacity:.4}.total-row{justify-content:space-between;align-items:baseline;display:flex}.total-label{font-size:1rem;font-weight:700}.total-value{color:var(--color-primary,#fbbf24);font-size:1.4rem;font-weight:900}.actions{border-top:1px solid color-mix(in oklab, var(--color-base-content,#000) 7%, transparent);flex-direction:column;flex-grow:1;gap:.5rem;margin:0 -1rem;padding:.625rem 1.25rem;display:flex}");static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},value:{},service:{type:String},owner:{type:Boolean},promosStore:{},position:{type:String},x:{type:String},y:{type:String},wallet:{type:Object},seller:{type:String},sellerId:{type:String},bayId:{type:String},txt:{type:Object},lang:{type:String},notes:{type:Array},_items:{state:!0},_open:{state:!0},_appliedPromo:{state:!0},_checkedNotes:{state:!0},_promos:{state:!0},_notes:{state:!0},_noteText:{state:!0}};constructor(){super(),this.service="cart",this.owner=!1,this.promosStore=null,this.position="fixed",this.x="99%",this.y="calc(100% - 7.5rem)",this.wallet={},this.seller="",this.sellerId="",this.bayId="",this.txt=null,this.lang="vi",this._items=[],this._open=!1,this._appliedPromo=null,this._checkedNotes=[],this._promos=[],this._notes=[],this._noteText="",this._unsub=null,this._unsubToast=null,this._unsubPromos=null,this._totals={items:[],count:0,total:0,disc:0,final:0}}connectedCallback(){super.connectedCallback(),this._dcInit()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsubPromos?.()}updated(e){e.has("service")&&this.service!==this._initedService&&this._dcReinit()}_dcReinit(){this._unsub?.(),this._unsub=null,this._unsubPromos?.(),this._unsubPromos=null,this._dcInit()}willUpdate(e){if(e.has("_items")||e.has("_appliedPromo")||e.has("_promos")){const e=this._items,t=e.reduce((e,t)=>e+Number(t.price??0)*t.qty,0);this._appliedPromo&&(!this._promos.some(e=>e.code===this._appliedPromo.code)||this._appliedPromo.minOrder&&t<this._appliedPromo.minOrder)&&(this._appliedPromo=null);const i=this._appliedPromo,r=i?Math.min("percent"===i.type?Math.round(t*i.discount/100):i.discount,i.maxDiscount??1/0):0;this._totals={items:e,count:e.reduce((e,t)=>e+t.qty,0),total:t,disc:r,final:Math.max(0,t-r)}}}_dcInit(){this._initedService=this.service;const e=Array.isArray(this.value)?this.value:[];f(this.service,e,{notes:this.notes}),this._unsub=R(this.service,e=>{this._items=e.items??[],this._open=e.open??!1,this._checkedNotes=e.checkedNotes??[],this.promosStore||(this._promos=e.promos??[]),this._notes=e.notes??this.notes}),this.promosStore&&(this._unsubPromos=this.promosStore.subscribe(e=>{this._promos=e??[]})),Z(this.service)}openSheet(){fe(this.service,{open:!0})}closeSheet(){fe(this.service,{open:!1}),this._emit("close")}showToast(e,t="success"){o(e,t)}_dfRemoveItem(e){k(this.service,e)}_dfSetQty(e,t){T(this.service,e,t)}_dfClearItems(){fe(this.service,{items:[]}),this._emit("act:clear",{e:"act:clear"})}_dfToggleNote(e){j(this.service,e)}_dhPromoApply(e){this._appliedPromo=e.detail.promo}_dhPromoClear(){this._appliedPromo=null}_dfPromoCreate(e){this.promosStore?this.promosStore.add(e.detail.promo):ee(this.service,e.detail.promo)}_dfPromoDelete(e){this.promosStore?this.promosStore.remove(e.detail.code):S(this.service,e.detail.code)}_dfPromoUse(e){this.promosStore?this.promosStore.use(e):F(this.service,e)}_dfCheckout(){const{count:e,disc:t}=this._comTotals;0!==e&&(this._emit("cart:checkout",{items:[...this._items],seller:this.seller,sellerId:this.sellerId,bayId:this.bayId,notes:[...this._checkedNotes,...this._noteText.trim()?[this._noteText.trim()]:[]],promo:this._appliedPromo?.code??null,disc:t}),this._appliedPromo&&this._dfPromoUse(this._appliedPromo.code),this._dhPromoClear(),this.closeSheet(),this._noteText="")}get _comTotals(){return this._totals}get _comWallet(){return n(this.wallet,{})}_emit(e,t={}){l(this,e,t)}get _txt(){return s(this.txt,xe,this.lang)}render(){const{count:t}=this._comTotals;return e`
            <web-toast ui="pastel"></web-toast>

            <web-fab icon="ri:shopping-cart-fill" badge=${t?c(t):""} position=${this.position} x=${this.x} y=${this.y} movable=${"fixed"===this.position}
              size="lg" ui=${this.ui} theme=${this.theme} @click=${()=>this.openSheet()}></web-fab>

            <web-dialog type="mobile" ui=${this.ui} theme=${this.theme} maxWidth="480px"
                .open=${this._open} @close=${()=>this.closeSheet()}>
                ${this._rbHeader()}
                ${0===this._items.length?this._rbEmpty():this._rbBody()}
            </web-dialog>`}_rbHeader(){const{count:t}=this._comTotals;return e`
            <iconify-icon slot="header" icon="ri:shopping-cart-fill" class="header-icon"></iconify-icon>
            <span slot="header" class="header-title">${this._txt.cart}</span>
            ${t>0?e`<span slot="header" class="header-badge">${t} ${this._txt.items}</span>`:""}
            <web-button slot="header" type="soft" square rounded="50%" height="1.5rem" width="1.5rem"
                ui=${this.ui} theme=${this.theme}
                @click=${()=>this.closeSheet()}>
                <iconify-icon icon="ri:close-line"></iconify-icon>
            </web-button>`}_rbEmpty(){return e`
            <div class="empty">
                <iconify-icon icon="ri:shopping-basket-line"></iconify-icon>
                <p>${this._txt.empty}</p>
            </div>`}_rbBody(){return e`
            <div class="items">${this._items.map(e=>this._rfItem(e))}</div>
            ${this._rbSummary()}
            ${this._rbPromo()}
            ${this._rbNotes()}
            ${this._rbActions()}`}_rbSummary(){const{count:t,total:i,disc:r}=this._comTotals;return e`
            <div class="section">
                <div class="row">
                    <span class="label">${this._txt.subtotal} (${t} ${this._txt.items})</span>
                    <span class="value">${h(i,this.lang)}</span>
                </div>
                ${r>0?e`
                    <div class="row discount">
                        <span class="label">${this._txt.discount} (${this._appliedPromo?.code})</span>
                        <span class="value">− ${h(r,this.lang)}</span>
                    </div>`:""}
            </div>`}_rfItem(t){const i=Number(t.price??0),r=t.img??t.pics??"",s=t.name??t.title??"";return e`
            <div class="item">
                ${r?e`<img class="item-img" src="${r}" alt="${s}" loading="lazy" />`:""}
                <div class="item-info">
                    <div class="item-name">${s}</div>
                    <div class="item-price">${t.formattedPrice??h(i,this.lang)}</div>
                    ${t.qty>1?e`<div class="item-subtotal">× ${t.qty} = ${h(i*t.qty,this.lang)}</div>`:""}
                </div>
                <div class="item-right">
                    <web-button type="ghost" height="24px" prefix="ri:delete-bin-line"
                        ui=${this.ui} theme=${this.theme}
                        @click=${()=>this._dfRemoveItem(t.id)}>${this._txt.delete}</web-button>
                    <div class="qty-row">
                        <web-button type="soft" square rounded="0" height="2rem" width="2rem" theme=${this.theme}
                            @click=${()=>this._dfSetQty(t.id,t.qty-1)}>−</web-button>
                        <span class="qty-num">${t.qty}</span>
                        <web-button type="soft" square rounded="0" height="2rem" width="2rem" theme=${this.theme}
                            @click=${()=>this._dfSetQty(t.id,t.qty+1)}>+</web-button>
                    </div>
                </div>
            </div>`}_rbPromo(){const{total:t}=this._comTotals;return e`
            <div class="section">
                <svc-pay-promo .promos=${this._promos} .applied=${this._appliedPromo} .total=${t}
                    lang=${this.lang} ui=${this.ui} theme=${this.theme} ?owner=${this.owner}
                    @promo:apply=${e=>this._dhPromoApply(e)}
                    @promo:clear=${()=>this._dhPromoClear()}
                    @promo:create=${e=>this._dfPromoCreate(e)}
                    @promo:delete=${e=>this._dfPromoDelete(e)}>
                </svc-pay-promo>
            </div>`}_rbNotes(){return e`
            <div class="section">
                <div class="section-label">${this._txt.notesLabel}</div>
                <div class="notes-grid">
                    ${(this._notes??[]).map(t=>e`
                        <label class="note-item">
                            <input type="checkbox" .checked=${this._checkedNotes.includes(t)}
                                @change=${()=>this._dfToggleNote(t)} />
                            ${t}
                        </label>`)}
                </div>
                <textarea class="note-textarea" rows="2" placeholder="${this._txt.notesPh}"
                    .value=${this._noteText}
                    @input=${e=>{this._noteText=e.target.value}}></textarea>
            </div>`}_rbActions(){const{count:t,final:i}=this._comTotals;return e`
            <div class="actions" slot="footer">
                <div class="total-row">
                    <span class="total-label">${this._txt.total}</span>
                    <span class="total-value">${h(i,this.lang)}</span>
                </div>
                <web-button type="fill" color="primary" height="45px" width="100%" ?disabled=${0===t}
                    ui=${this.ui} theme=${this.theme}  fontSize="1rem"
                    @click=${()=>this._dfCheckout()}>${this._txt.btnCheckout}</web-button>
                <web-button type="ghost" height="32px" width="100%"
                    ui="${this.ui}" theme=${this.theme}
                    @click=${()=>this._dfClearItems()}>${this._txt.btnClear}</web-button>
            </div>`}};customElements.get("svc-cart")||customElements.define("svc-cart",$e);var we={vi:{basic:"Cơ bản",map:"Bản đồ",streetPh:"Địa chỉ (số nhà, tên đường)",wardPh:"Phường / Xã",regionPh:"Tỉnh / Thành phố"},en:{basic:"Basic",map:"Map",streetPh:"Address (house number, street name)",wardPh:"Ward / Commune",regionPh:"Province / City"}},ke="việt nam";function Pe(e=""){const[t="",i="",r="",s=ke]=e.split("~");return{street:t,ward:i,region:r,country:s}}var Se=class extends i{static shadowRootOptions={mode:"open"};static styles=[t(r),t(':host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-font:var(--font-sans,"system-ui");width:100%;display:block}.web-location{flex-direction:column;gap:10px;width:100%;display:flex}.mode-tabs{background:color-mix(in oklab, var(--color-base-200,#232323) 60%, transparent);border-radius:var(--core-radius);border:1px solid color-mix(in oklab, var(--color-base-300,#393939) 50%, transparent);align-items:center;gap:0;width:fit-content;padding:3px;display:inline-flex}.mode-tab{border-radius:calc(var(--core-radius) - 2px);height:28px;font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 50%, transparent);cursor:pointer;user-select:none;background:0 0;border:none;align-items:center;gap:6px;padding:0 14px;font-size:12px;font-weight:600;transition:background .2s,color .2s,box-shadow .2s;display:inline-flex}.mode-tab svg{flex-shrink:0;width:13px;height:13px}.mode-tab:hover{color:color-mix(in oklab, var(--color-base-content,#fff) 80%, transparent)}.mode-tab.active{background:var(--color-base-100,#0d0d0d);color:var(--color-primary,#34ace0);box-shadow:0 1px 3px #00000040}.mode-panel{display:none}.mode-panel.active{display:block}.basic-fields{flex-direction:column;gap:10px;display:flex}.field-label{font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 60%, transparent);letter-spacing:.03em;margin-bottom:4px;font-size:12px;font-weight:600}.field-full{flex-direction:column;display:flex}.field-row{grid-template-columns:1fr 1fr;gap:10px;display:grid}.field-row>div{flex-direction:column;display:flex}@media (width<=480px){.field-row{grid-template-columns:1fr}}.pastel .mode-tabs{background:var(--pastel-surface);border-color:var(--pastel-line)}.pastel .mode-tab.active{background:var(--pastel-grad);color:var(--pastel-ink);box-shadow:var(--pastel-glow)}')];static properties={value:{type:String,reflect:!0},apiKey:{type:String},theme:{type:String},ui:{type:String},disabled:{type:Boolean},txt:{type:Object},lang:{type:String},_mode:{state:!0},_parts:{state:!0}};static get uiConfigs(){return{modern:{wrap:"modern web-location"},pastel:{wrap:"pastel web-location"}}}constructor(){super(),this.value="",this.apiKey="AIzaSyAAq_3rBXv_JZgDNmNZMuIARuTCkkyf1VY",this.theme="",this.ui="modern",this.disabled=!1,this.txt=null,this.lang="vi",this._mode="basic",this._parts={street:"",ward:"",region:"",country:ke}}willUpdate(e){e.has("value")&&this.value&&(this._parts=Pe(this.value))}updated(e){e.has("theme")&&this.theme&&this.setAttribute("data-theme",this.theme),e.has("theme")&&!this.theme&&this.removeAttribute("data-theme")}_dhField(e,t){const i=t.detail?.value??t.target?.value??"";this._parts={...this._parts,[e]:i},this._dfEmit()}_dhMode(e){this._mode=e}_dhAddressChange(e){const t=e.detail?.value??"";t&&t!==this.value&&(this.value=t,this._parts=Pe(t),this._emit(t))}_dhAddressConfirmed(e){const t=e.detail?.value??"";this.value=t,this._parts=Pe(t),this._emit(t)}_dfEmit(){this.value=function({street:e="",ward:t="",region:i="",country:r=ke}={}){return`${e}~${t}~${i}~${r}`}(this._parts),this._emit(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}get _txt(){const e=this.txt??we;return e[this.lang]??e.vi??{}}_rbModeToggle(){return e`
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
        `}_rbBasic(){const t=this._parts;return e`
            <div class="basic-fields">
                <div class="field-full">
                    <web-text
                        .ui=${this.ui}
                        .theme=${this.theme}
                        .value=${t.street}
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
                            .value=${t.ward}
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
                            .value=${t.region}
                            placeholder="${this._txt.regionPh}"
                            ?disabled=${this.disabled}
                            clearable
                            @input=${e=>this._dhField("region",e)}
                            @change=${e=>this._dhField("region",e)}
                        ></web-text>
                    </div>
                </div>
            </div>
        `}_rbAdvanced(){return e`
            <web-location-map
                .ui=${this.ui}
                .theme=${this.theme}
                .value=${this.value}
                ?disabled=${this.disabled}
                @change=${this._dhAddressChange}
                @address-confirmed=${this._dhAddressConfirmed}
            ></web-location-map>
        `}render(){const t=this.constructor.uiConfigs[this.ui||"modern"];return e`
            <div class="${t.wrap}">
                ${this._rbModeToggle()}
                <div class="mode-panel ${"basic"===this._mode?"active":""}">${this._rbBasic()}</div>
                <div class="mode-panel ${"advanced"===this._mode?"active":""}">${this._rbAdvanced()}</div>
            </div>
        `}};customElements.get("web-location")||customElements.define("web-location",Se);var Ce={vi:{title:"Thông tin khách hàng",new:"Khách mới",nameLabel:"Họ và tên",namePh:"Nguyễn Văn A",phoneLabel:"Số điện thoại",phonePh:"0912 345 678",emailLabel:"Email",emailOptional:"(tuỳ chọn)",emailPh:"you@example.com",addressLabel:"Địa chỉ",defaultBadge:"Mặc định",btnSetDefault:"Đặt mặc định",btnRemove:"Xóa",btnAdd:"Thêm",empty:"Chưa có thông tin nào. Thêm khách hàng mới."},en:{title:"Customer information",new:"New customer",nameLabel:"Full name",namePh:"John Doe",phoneLabel:"Phone number",phonePh:"0912 345 678",emailLabel:"Email",emailOptional:"(optional)",emailPh:"you@example.com",addressLabel:"Address",defaultBadge:"Default",btnSetDefault:"Set default",btnRemove:"Remove",btnAdd:"Add",empty:"No entries yet. Add a new customer."}},Ie=class extends i{static styles=[t(r),t(':host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-font:var(--font-sans,"system-ui");display:block}.svc-pay-customer{flex-direction:column;gap:8px;display:flex}.entries-header{justify-content:space-between;align-items:center;padding:2px 0;display:flex}.entries-title{font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 70%, transparent);letter-spacing:.03em;text-transform:uppercase;font-size:13px;font-weight:700}.btn-add{background:color-mix(in oklab, var(--color-primary,#34ace0) 15%, transparent);height:28px;color:var(--color-primary,#34ace0);border:1px solid color-mix(in oklab, var(--color-primary,#34ace0) 40%, transparent);border-radius:var(--core-radius);font-size:12px;font-weight:700;font-family:var(--core-font);cursor:pointer;align-items:center;gap:5px;padding:0 14px;transition:background .2s,border-color .2s;display:inline-flex}.btn-add svg{flex-shrink:0;width:12px;height:12px}.btn-add:hover{background:color-mix(in oklab, var(--color-primary,#34ace0) 22%, transparent);border-color:var(--color-primary,#34ace0)}.entries-list{flex-direction:column;gap:6px;display:flex}.entries-empty{text-align:center;font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 35%, transparent);border:1px dashed color-mix(in oklab, var(--color-base-300,#393939) 50%, transparent);border-radius:var(--core-radius);padding:20px 16px;font-size:13px}.entry-form{flex-direction:column;gap:12px;padding:14px 16px;display:flex}.entry-row{grid-template-columns:1fr 1fr;gap:12px;display:grid}@media (width<=480px){.entry-row{grid-template-columns:1fr}}.field{flex-direction:column;gap:6px;display:flex}.field label{font-size:12px;font-weight:600;font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 70%, transparent);letter-spacing:.03em}.field input{box-sizing:border-box;width:100%;height:var(--core-height);background:color-mix(in oklab, var(--color-base-100,#0d0d0d) 80%, transparent);border:1px solid color-mix(in oklab, var(--color-base-300,#393939) 70%, transparent);border-radius:var(--core-radius);color:var(--color-base-content,#fff);font-family:var(--core-font);appearance:none;outline:none;padding:0 12px;font-size:.875rem;transition:border-color .2s,box-shadow .2s}.field input:focus{border-color:var(--color-primary,#34ace0);box-shadow:0 0 0 3px color-mix(in oklab, var(--color-primary,#34ace0) 15%, transparent)}.field input::placeholder{color:color-mix(in oklab, var(--color-base-content,#fff) 30%, transparent)}.opt{opacity:.55;font-weight:400}.entry-footer{border-top:1px solid color-mix(in oklab, var(--color-base-300,#393939) 40%, transparent);align-items:center;gap:8px;padding-top:4px;display:flex}.badge-default{background:color-mix(in oklab, var(--color-primary,#34ace0) 15%, transparent);height:24px;color:var(--color-primary,#34ace0);border:1px solid color-mix(in oklab, var(--color-primary,#34ace0) 40%, transparent);font-size:11px;font-weight:700;font-family:var(--core-font);letter-spacing:.04em;border-radius:99px;align-items:center;padding:0 10px;display:inline-flex}.btn-set-default{height:24px;color:color-mix(in oklab, var(--color-base-content,#fff) 45%, transparent);border:1px solid color-mix(in oklab, var(--color-base-300,#393939) 60%, transparent);font-size:11px;font-weight:600;font-family:var(--core-font);cursor:pointer;background:0 0;border-radius:99px;align-items:center;padding:0 10px;transition:color .2s,border-color .2s;display:inline-flex}.btn-set-default:hover{color:var(--color-primary,#34ace0);border-color:color-mix(in oklab, var(--color-primary,#34ace0) 50%, transparent)}.btn-remove{height:24px;color:color-mix(in oklab, var(--color-error,#f87171) 60%, transparent);border:1px solid color-mix(in oklab, var(--color-error,#f87171) 25%, transparent);font-size:11px;font-weight:600;font-family:var(--core-font);cursor:pointer;background:0 0;border-radius:99px;align-items:center;gap:5px;margin-left:auto;padding:0 10px;transition:color .2s,border-color .2s,background .2s;display:inline-flex}.btn-remove svg{flex-shrink:0;width:11px;height:11px}.btn-remove:hover{color:var(--color-error,#f87171);border-color:var(--color-error,#f87171);background:color-mix(in oklab, var(--color-error,#f87171) 8%, transparent)}.pastel .field input{background:var(--pastel-corner);border:1px solid var(--pastel-line);border-radius:var(--radius-selector)}.pastel .field input:focus{background:var(--pastel-corner-hi);border-color:var(--pastel-a);box-shadow:var(--pastel-ring)}')];static properties={ui:{type:String},theme:{type:String},service:{type:String},txt:{type:Object},lang:{type:String},_data:{state:!0},_openMap:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.service="pay_customer",this.txt=null,this.lang="vi",this._data={entries:[]},this._openMap={},this._unsub=null,this._saveTimer=null}connectedCallback(){super.connectedCallback(),x(this.service),this._unsub=se(this.service,e=>{this._data=e?{...e}:this._data}),V(this.service)}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),clearTimeout(this._saveTimer)}_dhEntry(e,t,i){this._data={...this._data,entries:(this._data.entries??[]).map(r=>r.id===e?{...r,[t]:i}:r)},clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>I(this.service,this._data),600)}_dhAdd(){const e=M();0===(this._data.entries??[]).length&&(e.isDefault=!0),this._openMap={...this._openMap,[e.id]:!0},this._data={...this._data,entries:[...this._data.entries??[],e]}}_dhRemove(e){const t=(this._data.entries??[]).filter(t=>t.id!==e);t.length>0&&!t.some(e=>e.isDefault)&&(t[0]={...t[0],isDefault:!0});const{[e]:i,...r}=this._openMap;this._openMap=r;const s={...this._data,entries:t};this._data=s,I(this.service,s)}_dhSetDefault(e){const t={...this._data,entries:(this._data.entries??[]).map(t=>({...t,isDefault:t.id===e}))};this._data=t,I(this.service,t)}_rfEntry(t){const i=[t.fullName||this._txt.new,t.phone].filter(Boolean).join(" | "),r=t.id;return e`
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
                                .value=${t.fullName||""}
                                placeholder="${this._txt.namePh}"
                                @input=${e=>this._dhEntry(t.id,"fullName",e.target.value)} />
                        </div>
                        <div class="field">
                            <label>${this._txt.phoneLabel}</label>
                            <input type="tel"
                                .value=${t.phone||""}
                                placeholder="${this._txt.phonePh}"
                                @input=${e=>this._dhEntry(t.id,"phone",e.target.value)} />
                        </div>
                    </div>
                    <div class="field">
                        <label>${this._txt.emailLabel} <span class="opt">${this._txt.emailOptional}</span></label>
                        <input type="email"
                            .value=${t.email||""}
                            placeholder="${this._txt.emailPh}"
                            @input=${e=>this._dhEntry(t.id,"email",e.target.value)} />
                    </div>
                    <div class="field">
                        <label>${this._txt.addressLabel}</label>
                        <web-location
                            .ui=${this.ui}
                            .theme=${this.theme}
                            .value=${t.location||""}
                            @change=${e=>this._dhEntry(t.id,"location",e.detail.value)}
                        ></web-location>
                    </div>
                    <div class="entry-footer">
                        ${t.isDefault?e`<span class="badge-default">${this._txt.defaultBadge}</span>`:e`<button class="btn-set-default"
                                @click=${()=>this._dhSetDefault(t.id)}>${this._txt.btnSetDefault}</button>`}
                        <button class="btn-remove" @click=${()=>this._dhRemove(t.id)}>
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
        `}get _txt(){return s(this.txt,Ce,this.lang)}render(){const t=this._data.entries??[];return e`
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
                    ${0===t.length?e`<div class="entries-empty">${this._txt.empty}</div>`:t.map(e=>this._rfEntry(e))}
                </div>

            </div>
        `}};customElements.get("svc-pay-customer")||customElements.define("svc-pay-customer",Ie);var qe={vi:{label:"Hình thức thanh toán",momo:"MoMo",bank:"Chuyển khoản",cash:"Tiền mặt",cod:"Thanh toán khi nhận hàng",defaultBank:"Ngân hàng",vietqr:"VietQR"},en:{label:"Payment method",momo:"MoMo",bank:"Bank transfer",cash:"Cash",cod:"Cash on delivery",defaultBank:"Bank",vietqr:"VietQR"}},Me=class extends i{static styles=t(":host{display:block}.section-label{opacity:.7;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.625rem;font-size:.72rem;font-weight:700}.pay-method-tabs{gap:.5rem;margin-bottom:.75rem;display:flex}.pay-method-btn{color:color-mix(in oklab, var(--color-base-content,#000) 75%, transparent);border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);cursor:pointer;border-radius:.75rem;flex-direction:column;flex:1;align-items:center;gap:.3rem;padding:.625rem .5rem;font-size:.72rem;font-weight:600;transition:all .2s;display:flex}.pay-method-btn iconify-icon{font-size:1.25rem}.pay-method-btn.active{border-color:var(--color-primary,#fbbf24);background:color-mix(in oklab, var(--color-primary,#fbbf24) 12%, transparent);color:var(--color-primary,#fbbf24)}.pay-detail{flex-direction:column;gap:.5rem;margin-top:.25rem;display:flex}.bank-item{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);text-align:left;border-radius:.75rem;align-items:center;gap:.75rem;padding:.5rem 1rem;display:flex}.bank-item.active{border-color:var(--color-primary,#fbbf24);background:color-mix(in oklab, var(--color-primary,#fbbf24) 8%, transparent)}.bank-info{flex-direction:column;flex:1;gap:.15rem;display:flex}.bank-name{font-size:.875rem;font-weight:700}.bank-acct{opacity:.7;font-size:.75rem}.bank-default{background:color-mix(in oklab, var(--color-primary,#fbbf24) 15%, transparent);color:var(--color-primary,#fbbf24);border:1px solid color-mix(in oklab, var(--color-primary,#fbbf24) 40%, transparent);border-radius:99px;flex-shrink:0;align-items:center;padding:.15rem .5rem;font-size:.65rem;font-weight:700;display:flex}.bank-default .cash-icon{font-size:1.75rem}");static properties={wallet:{type:Object},method:{type:String},cashDisabled:{type:Boolean},ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},txt:{type:Object},lang:{type:String},_payMethod:{state:!0}};constructor(){super(),this.wallet={},this.method="cash",this.cashDisabled=!1,this.txt=null,this.lang="vi",this._payMethod="cash"}willUpdate(e){e.has("method")&&this.method&&(this._payMethod=this.method),(e.has("wallet")||e.has("method")||e.has("cashDisabled"))&&!this._comAvailableMethods.some(e=>e.value===this._payMethod)&&this._dfSelect(this._comAvailableMethods[0]?.value??"cash")}get _comAvailableMethods(){return ne.filter(e=>me(this._comWallet,e.value)&&!(this.cashDisabled&&"cash"===e.value))}_emit(e,t){l(this,e,t)}_dfSelect(e){this._payMethod=e,this._emit("payment:select",{method:e})}get _comWallet(){return n(this.wallet,{})}get _txt(){return s(this.txt,qe,this.lang)}render(){const t=this._comWallet;return e`
            <div class="section-label">${this._txt.label}</div>
            <div class="pay-method-tabs">
                ${this._comAvailableMethods.map(t=>e`
                    <button class="pay-method-btn ${this._payMethod===t.value?"active":""}"
                        @click=${()=>this._dfSelect(t.value)}>
                        <iconify-icon icon="${t.icon}"></iconify-icon>
                        ${this._txt[t.value]||t.label}
                    </button>`)}
            </div>
            ${this._rbDetail(t)}`}_rbDetail(t){const i=this._payMethod,r=t[i]??{};if("cash"===i)return this._rfBankItem(this._txt.cash,r.note??this._txt.cod,e`<iconify-icon icon="ion:cash-outline" class="cash-icon"></iconify-icon>`);const s="momo"===i?"MoMo":r.bankName??this._txt.defaultBank,o=K(i,r);return this._rfBankItem(s,r.accountName?`${o} — ${r.accountName}`:o,this._txt.vietqr)}_rfBankItem(t,i,r){return e`
            <div class="pay-detail">
                <div class="bank-item active">
                    <div class="bank-info">
                        <span class="bank-name">${t}</span>
                        <span class="bank-acct">${i}</span>
                    </div>
                    <span class="bank-default">${r}</span>
                </div>
            </div>`}};customElements.get("svc-pay-booking")||customElements.define("svc-pay-booking",Me);var De={momo:"971025",bank:""},Te={vi:{cod:"Thanh toán khi nhận hàng",qrLoading:"Đang tạo mã QR...",amountLabel:"Số tiền:",paid:"✓ Xác nhận đã thanh toán",back:"← Quay lại",freeOrder:"Đơn hàng đã được giảm giá hết — không cần thanh toán thêm"},en:{cod:"Cash on delivery",qrLoading:"Generating QR code...",amountLabel:"Amount:",paid:"✓ Confirm paid",back:"← Back",freeOrder:"This order is fully discounted — nothing left to pay"}},Le=class extends i{static styles=t(":host{flex-direction:column;flex:1;display:flex;overflow:hidden}.qr-body{flex-direction:column;flex:1;align-items:center;padding:1rem 1.25rem;display:flex;overflow-y:auto}.qr-body::-webkit-scrollbar{width:4px}.qr-body::-webkit-scrollbar-thumb{background:color-mix(in oklab, var(--color-base-content,#000) 20%, transparent);border-radius:9999px}.qr-card{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-radius:1rem;width:100%;max-width:320px;overflow:hidden}.qr-card-top{border-bottom:1px solid color-mix(in oklab, var(--color-base-content,#000) 8%, transparent);justify-content:space-between;align-items:center;padding:.75rem 1rem;display:flex}.qr-method-name{font-size:.9rem;font-weight:700}.qr-badge{color:var(--color-success,#22c55e);background:color-mix(in oklab, var(--color-success,#22c55e) 15%, transparent);border:1px solid color-mix(in oklab, var(--color-success,#22c55e) 35%, transparent);border-radius:99px;padding:.2rem .5rem;font-size:.65rem;font-weight:700}.qr-img{width:100%;max-width:260px;margin:.75rem auto;display:block}.qr-manual{flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem 1rem;display:flex}.qr-manual iconify-icon{opacity:.6;font-size:2.5rem}.spin{animation:.8s linear infinite spin;display:inline-block}@keyframes spin{to{transform:rotate(360deg)}}.qr-manual-phone{font-size:1.3rem;font-weight:700}.qr-manual-label{opacity:.7;font-size:.8rem}.cash-icon{color:var(--color-success,#22c55e);font-size:3rem}.qr-sep{background:color-mix(in oklab, var(--color-base-content,#000) 8%, transparent);height:1px;margin:0 1rem}.qr-footer{justify-content:space-between;align-items:baseline;padding:.625rem 1rem;display:flex}.qr-footer-label{opacity:.7;font-size:.78rem}.qr-amount{color:var(--color-success,#22c55e);font-size:1.15rem;font-weight:800}.qr-ref{opacity:.7;letter-spacing:.04em;margin-top:.75rem;font-size:.78rem;font-weight:600}.actions{flex-direction:column;flex-shrink:0;gap:.5rem;width:100%;max-width:300px;margin:0 auto;padding:.625rem 1.25rem;display:flex}");static properties={ui:{type:String},theme:{type:String},wallet:{type:Object},vietqr:{type:Object},paymentId:{type:String},amount:{type:Number},method:{type:String},_qrDataUrl:{state:!0},_qrLoading:{state:!0},_qrError:{state:!0},txt:{type:Object},lang:{type:String}};constructor(){super(),this.ui="modern",this.theme="",this.wallet={},this.vietqr={},this.paymentId="",this.amount=0,this.method="cash",this._qrDataUrl="",this._qrLoading=!1,this._qrError=!1,this.txt=null,this.lang="vi"}updated(e){(e.has("paymentId")||e.has("amount")||e.has("method"))&&this._fetchQr()}get _comWallet(){return n(this.wallet,{})}get _comAccount(){const e=this._comWallet[this.method]??{};return{...e,accountNo:K(this.method,e)}}get _comLocked(){return!("cash"===this.method||this.amount<=0)&&(this._qrLoading||this._qrError||!this._qrDataUrl)}async _fetchQr(){if("cash"===this.method)return;if(this._qrDataUrl="",this._qrError=!1,!this.paymentId||!this.amount)return;const e=this._comAccount,t=n(this.vietqr,{}),i=e.bin??De[this.method]??"";if(!e.accountNo||!i)return console.warn("[svc-pay-valider] skip QR fetch: missing account.accountNo/bin",{method:this.method,account:e,bin:i,wallet:this._comWallet}),void(this._qrError=!0);this._qrLoading=!0;try{const r=await async function({clientId:e,apiKey:t,accountNo:i,accountName:r,acqId:s,amount:o,addInfo:a}){return(await fetch("https://api.vietqr.io/v2/generate",{method:"POST",headers:{"x-client-id":e??"","x-api-key":t??"","Content-Type":"application/json"},body:JSON.stringify({accountNo:i,accountName:r??"",acqId:s,amount:o,addInfo:a,format:"text",template:"compact2"})})).json()}({clientId:t.clientId,apiKey:t.apiKey,accountNo:e.accountNo,accountName:e.accountName,acqId:i,amount:this.amount,addInfo:this.paymentId});"00"===r.code?this._qrDataUrl=r.data.qrDataURL:(console.warn("[svc-pay-valider] VietQR API returned an error",r),this._qrDataUrl=this._fallbackUrl(e,i),this._qrError=!0)}catch(r){console.warn("[svc-pay-valider] VietQR fetch failed",r),this._qrDataUrl=this._fallbackUrl(e,i),this._qrError=!0}finally{this._qrLoading=!1}}_fallbackUrl(e,t){const i=encodeURIComponent(e.accountName??""),r=encodeURIComponent(this.paymentId??"");return`https://img.vietqr.io/image/${t}-${e.accountNo}-compact2.png?amount=${this.amount}&addInfo=${r}&accountName=${i}`}_emit(e,t){l(this,e,t)}get _txt(){return s(this.txt,Te,this.lang)}render(){const t=ne.find(e=>e.value===this.method),i=this._comAccount;return e`
            <div class="qr-body">
                <div class="qr-card">
                    <div class="qr-card-top">
                        <span class="qr-method-name">${t?.label??""}</span>
                        ${"cash"!==this.method?e`<span class="qr-badge">VietQR</span>`:""}
                    </div>

                    ${this.amount<=0?e`
                        <div class="qr-manual">
                            <iconify-icon icon="ri:gift-line" class="cash-icon"></iconify-icon>
                            <span class="qr-manual-label">${this._txt.freeOrder}</span>
                        </div>
                    `:"cash"===this.method?e`
                        <div class="qr-manual">
                            <iconify-icon icon="ion:cash-outline" class="cash-icon"></iconify-icon>
                            <span class="qr-manual-label">${this._txt.cod}</span>
                        </div>
                    `:this._qrLoading?e`
                        <div class="qr-manual">
                            <iconify-icon icon="ri:loader-4-line" class="spin"></iconify-icon>
                            <span class="qr-manual-label">${this._txt.qrLoading}</span>
                        </div>
                    `:this._qrDataUrl?e`
                        <img class="qr-img" src="${this._qrDataUrl}" alt="QR thanh toán" />
                    `:e`
                        <div class="qr-manual">
                            <iconify-icon icon="${t?.icon??"ri:qr-code-line"}"></iconify-icon>
                            <span class="qr-manual-phone">${i.accountNo}</span>
                            <span class="qr-manual-label">${i.accountName}</span>
                        </div>`}

                    <div class="qr-sep"></div>
                    <div class="qr-footer">
                        <span class="qr-footer-label">${this._txt.amountLabel}</span>
                        <span class="qr-amount">${h(this.amount,this.lang,"")} VND</span>
                    </div>
                </div>
                <div class="qr-ref">Mã: ${this.paymentId}</div>
            </div>

            <div class="actions">
                <web-button type="fill" color="success" height="45px" width="100%" fontSize="1rem" ?disabled=${this._comLocked}
                    ui=${this.ui} theme=${this.theme}
                    @click=${()=>this._emit("valider:paid",{paymentId:this.paymentId})}>
                    ${this._txt.paid}
                </web-button>
                <web-button type="ghost" height="32px" width="100%"
                    ui=${this.ui} theme=${this.theme}
                    @click=${()=>this._emit("valider:back",{})}>${this._txt.back}</web-button>
            </div>`}};customElements.get("svc-pay-valider")||customElements.define("svc-pay-valider",Le);var je=class extends i{static styles=t(':host{box-sizing:border-box;--core-font:var(--font-sans,"system-ui");width:100%;font-family:var(--core-font);color:var(--color-base-content);display:block}.reason-form{flex-direction:column;gap:.5rem;width:100%;margin-top:.5rem;display:flex}.reason-head{justify-content:space-between;align-items:center;gap:1rem;display:flex}.reason-title{min-height:var(--reason-title-min-height,auto);font-size:.95rem;font-weight:600;line-height:1.3}.reason-input{box-sizing:border-box;width:100%}.reason-quickfill{align-self:flex-start}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},title:{type:String},titleColor:{type:String},name:{type:String},phone:{type:String},note:{type:String},media:{type:String},namePh:{type:String},phonePh:{type:String},notePh:{type:String},mediaPh:{type:String},showNote:{type:Boolean},showMedia:{type:Boolean},stepKey:{type:String},quickName:{type:String},quickPhone:{type:String},quickLabel:{type:String},actionLabel:{type:String},actionColor:{type:String},actionType:{type:String},actionDisabled:{type:Boolean}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.title="",this.titleColor="",this.name="",this.phone="",this.note="",this.media="",this.namePh="",this.phonePh="",this.notePh="",this.mediaPh="",this.showNote=!0,this.showMedia=!1,this.stepKey="",this.quickName="",this.quickPhone="",this.quickLabel="",this.actionLabel="",this.actionColor="primary",this.actionType="fill",this.actionDisabled=!1,this._cacheSaveTimer=null}async connectedCallback(){if(super.connectedCallback(),!this.stepKey||this.name||this.phone)return;const e=await q(this.stepKey);this.name||this.phone||(e.name&&l(this,"reason:input",{key:"name",value:e.name}),e.phone&&l(this,"reason:input",{key:"phone",value:e.phone}))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._cacheSaveTimer)}_dhInput(e,t){l(this,"reason:input",{key:e,value:t}),!this.stepKey||"name"!==e&&"phone"!==e||(clearTimeout(this._cacheSaveTimer),this._cacheSaveTimer=setTimeout(()=>be(this.stepKey,{name:this.name,phone:this.phone}),500))}_dhQuickFill(){this.quickName&&this._dhInput("name",this.quickName),this.quickPhone&&this._dhInput("phone",this.quickPhone)}_dfAction(){this.actionDisabled||l(this,"reason:action",{})}render(){return e`
			<div class="reason-form">
				<div class="reason-head">
					<div class="reason-title" style=${this.titleColor?`color: var(--color-${this.titleColor})`:""}>${this.title}</div>
					<div>
            ${this.quickLabel&&(this.quickName||this.quickPhone)?e`
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
				${this.showNote?e`
							<web-textarea
								class="reason-input"
								placeholder=${this.notePh}
								.value=${this.note}
								rows="3"
								ui=${this.ui}
								theme=${this.theme}
								@input=${e=>this._dhInput("note",e.detail?.value??"")}></web-textarea>
					  `:""}
				${this.showMedia?e`
							<svc-photor
								class="reason-input"
								multiple
								ui=${this.ui}
								placeholder=${this.mediaPh}
								.value=${this.media}
								@change=${e=>this._dhInput("media",e.detail.value)}></svc-photor>
					  `:""}
				${this.actionLabel?e`
							<web-button type=${this.actionType} color=${this.actionColor} height="40px" ?disabled=${this.actionDisabled} @click=${()=>this._dfAction()}>
								${this.actionLabel}
							</web-button>
					  `:""}
			</div>
		`}};customElements.get("svc-pay-reason")||customElements.define("svc-pay-reason",je);function Re(e){if(!e)return"";const t=new Date(e),i=e=>String(e).padStart(2,"0");return`${i(t.getDate())}-${i(t.getMonth()+1)}-${t.getFullYear()} ${i(t.getHours())}:${i(t.getMinutes())}:${i(t.getSeconds())}`}function Fe(e){const t=Math.floor(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Ne(t,i,r){const s=E(t);if(!s.at)return e``;const o=s.name?[s.name,s.phone].filter(Boolean).join(" · "):i;return e`
        <p class="handled-by">
            ${r}: ${o}${s.note?` — ${s.note}`:""} · ${Re(s.at)}
        </p>`}function Be(t,i,r,s){return t.length?e`
        <div class="order-items">
            ${t.map(t=>e`
                <div class="order-item-row">
                    <span class="order-item-name">${t.qty}× ${t.name}</span>
                    <span class="order-item-price">${h(Number(t.price??0)*Number(t.qty??1),s)}</span>
                </div>`)}
            <div class="order-item-row order-item-total">
                <span>${r.totalLabel}</span>
                <span>${h(i,s)}</span>
            </div>
        </div>`:e`<p class="order-items-empty">${r.orderItemsEmpty}</p>`}var Oe=class extends i{static styles=t(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.order-panel{flex-direction:column;gap:.6rem;display:flex}web-toggle{margin-bottom:.3rem}.hint{opacity:.6;margin:0;font-size:.8rem}.countdown{opacity:.8;margin-bottom:.5rem;font-size:.85rem;font-weight:600}.countdown.expired{color:var(--color-error);opacity:1}.order-items{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-radius:.75rem;flex-direction:column;gap:.4rem;padding:.75rem .9rem;display:flex}.order-items-empty{opacity:.7;margin:0;font-size:.85rem;font-style:italic}.order-item-row{justify-content:space-between;align-items:center;font-size:.85rem;display:flex}.order-item-name{opacity:.8}.order-item-price{font-weight:600}.order-item-total{border-top:1px dashed var(--color-base-300);color:var(--color-primary);margin-top:.3rem;padding-top:.4rem;font-weight:700}.invoice-lookup{text-align:center;flex-direction:column;align-items:center;gap:.6rem;padding:.5rem 0 1rem;display:flex}.invoice-qr{border:1px solid var(--color-base-300);background:var(--color-base-100);border-radius:.75rem;padding:.5rem}.invoice-id-link{color:var(--color-primary);align-items:center;gap:.4rem;font-size:.95rem;font-weight:700;text-decoration:none;display:inline-flex}.invoice-id-link:hover{text-decoration:underline}.invoice-hint{opacity:.6;max-width:320px;margin:0;font-size:.8rem}.actions{flex-direction:column;flex-shrink:0;gap:.5rem;width:100%;max-width:300px;margin:0 auto;padding:.625rem 1.25rem;display:flex}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},role:{type:String},subId:{type:String},txt:{type:Object},cancelTxt:{type:Object},wallet:{type:Object},vietqr:{type:Object},items:{type:Array},amount:{type:Number},isDelivery:{type:Boolean},hasCustomerData:{type:Boolean},onlyDelivery:{type:Boolean},cashDisabled:{type:Boolean},payMethod:{type:String},paymentRef:{type:String},payExpired:{type:Boolean},payRemainingLabel:{type:String},hasInvoice:{type:Boolean},invoiceId:{type:String},invoiceUrl:{type:String},invoiceQrSrc:{type:String},sellerPrefill:{type:Object},_form:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.role="buyer",this.subId="placing",this.txt={},this.cancelTxt={},this.wallet={},this.vietqr={},this.items=[],this.amount=0,this.isDelivery=!1,this.hasCustomerData=!1,this.onlyDelivery=!1,this.cashDisabled=!1,this.payMethod="cash",this.paymentRef="",this.payExpired=!1,this.payRemainingLabel="",this.hasInvoice=!1,this.invoiceId="",this.invoiceUrl="",this.invoiceQrSrc="",this.sellerPrefill=null,this._form={name:"",phone:"",note:""}}_emit(e,t={}){l(this,e,t)}_dhFormInput(e){this._form={...this._form,[e.key]:e.value}}render(){return"placing"===this.subId?this._rbPlacing():this._rbPaying()}_rbPlacing(){const t=this.isDelivery&&!this.hasCustomerData;return e`
            <div class="order-panel">
                ${this.onlyDelivery?"":e`
                    <web-toggle .active=${this.isDelivery} label=${this.txt.deliveryToggleLabel}
                        ui=${this.ui} theme=${this.theme}
                        @change=${e=>this._emit("order:toggle-delivery",{active:e.detail.active})}>
                    </web-toggle>`}
                <svc-pay-customer ui=${this.ui} theme=${this.theme} lang=${this.lang}></svc-pay-customer>
                ${Be(this.items,this.amount,this.txt,this.lang)}
                <svc-pay-booking
                    .wallet=${this.wallet}
                    method=${this.payMethod}
                    ?cashDisabled=${this.cashDisabled}
                    ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                    lang=${this.lang}
                    @payment:select=${e=>this._emit("order:payment-select",{method:e.detail.method})}>
                </svc-pay-booking>
                ${t?e`<p class="hint">${this.txt.customerRequiredHint}</p>`:""}
                <div class="actions">
                  <web-button type="fill" color="primary" height="45px" width="100%" fontSize="1rem"
                      ?disabled=${!this.items?.length||t} ui=${this.ui} theme=${this.theme}
                      @click=${()=>this._emit("order:place")}>${this.txt.continueToPayment}</web-button>
                  <web-button type="ghost" height="32px" width="100%" ui=${this.ui} theme=${this.theme}
                      @click=${()=>this._emit("order:back-to-cart")}>${this.txt.backToCart}</web-button>
                </div>
            </div>`}_rbPaying(){if(!this.hasInvoice)return e`
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
            </div>`;const t=this._form;return e`
            <div class="order-panel">
                ${"seller"===this.role?e`
                    <svc-pay-reason ui=${this.ui} theme=${this.theme}
                        stepKey="paying"
                        name=${t.name} phone=${t.phone} note=${t.note}
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
            </div>`}};customElements.get("svc-pay-order")||customElements.define("svc-pay-order",Oe);var ze={name:"",phone:"",note:""},Ae=class extends i{static styles=t(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.order-panel,.cancel-form,.cancel-block{flex-direction:column;gap:.6rem;display:flex}.waiting-note,.done-note{opacity:.7;font-size:.85rem;font-style:italic}.handled-by{opacity:.65;margin:0;font-size:.8rem}.hint{opacity:.6;margin:0;font-size:.8rem}.order-panel.reason-columns{--reason-title-min-height:2.6rem;grid-template-columns:1fr 1fr;align-items:start;column-gap:1.5rem;display:grid}.order-panel.reason-columns>svc-pay-reason{width:100%}@media (width<=640px){.order-panel.reason-columns{--reason-title-min-height:auto;grid-template-columns:1fr}}.cancel-block{border-top:1px dashed var(--color-base-300);margin-top:.75rem;padding-top:.75rem}.reason-columns>.cancel-block{border-top:none;margin-top:0;padding-top:0}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},role:{type:String},subId:{type:String},txt:{type:Object},cancelTxt:{type:Object},meta:{type:Object},sellerPrefill:{type:Object},stepTitle:{type:String},_prepareForm:{state:!0},_cancelForm:{state:!0},_buyerCancelReason:{state:!0},_sellerCancelledForm:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.role="buyer",this.subId="preparing",this.txt={},this.cancelTxt={},this.meta={},this.sellerPrefill=null,this.stepTitle="",this._prepareForm={...ze},this._cancelForm={...ze},this._buyerCancelReason="",this._sellerCancelledForm={...ze}}_emit(e,t={}){l(this,e,t)}_dhFormInput(e,t){this[e]={...this[e],[t.key]:t.value}}render(){return"preparing"===this.subId?this._rbPreparing():"cancelled"===this.subId?this._rbCancelled():this._rbDone()}_rbPreparing(){const t=this.meta.subStatus;if("seller"!==this.role){const i=E(this.meta.preparing);return e`
                <div class="order-panel">
                    ${i.name?Ne(this.meta.preparing,this.txt.roleSeller,this.txt.handledByLabel):e`<span class="waiting-note">${this.txt.sellerPreparingNote}</span>`}
                    ${this._rbCancelBlockBuyer(t)}
                </div>`}const i=this._prepareForm;return e`
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
                ${this._rbCancelBlockSeller(t)}
            </div>`}_rbCancelBlockBuyer(t){return t&&"rejected"!==t?e`
            <div class="cancel-block">
                <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.cancelTxt.cancelPendingBanner}>
                    ${this.txt.reasonLabel}: ${E(this.meta.cancel).note}
                </web-alert>
            </div>`:e`
            <div class="cancel-block">
                ${"rejected"===t?e`
                    <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.cancelTxt.cancelRejectedBanner}>
                        ${this.cancelTxt.cancelRejectReasonLabel}: ${E(this.meta.sellerCancelled).note}
                    </web-alert>`:""}
                <p class="hint">${this.txt.cancelHint}</p>
                <web-textarea placeholder=${this.txt.cancelReasonPh} .value=${this._buyerCancelReason} rows="3"
                    ui=${this.ui} theme=${this.theme}
                    @input=${e=>{this._buyerCancelReason=e.detail?.value??""}}></web-textarea>
                <web-button type="ghost" color="error" height="36px" ?disabled=${!(this._buyerCancelReason??"").trim()}
                    @click=${()=>{this._emit("processing:request-cancel",{reason:this._buyerCancelReason}),this._buyerCancelReason=""}}>
                    ${"rejected"===t?this.cancelTxt.cancelRetry:this.txt.cancelOrder}
                </web-button>
            </div>`}_rbCancelBlockSeller(t){if(!t||"rejected"===t){const t=this._cancelForm;return e`
                <div class="cancel-block">
                    <svc-pay-reason ui=${this.ui} theme=${this.theme}
                        stepKey="sellerCancel"
                        title=${this.txt.sellerCancelHint} titleColor="error"
                        name=${t.name} phone=${t.phone} note=${t.note}
                        namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh}
                        notePh=${this.txt.sellerCancelReasonPh}
                        quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                        actionLabel=${this.txt.sellerCancelOrder} actionColor="error" actionType="soft"
                        ?actionDisabled=${!(t.note??"").trim()}
                        @reason:input=${e=>this._dhFormInput("_cancelForm",e.detail)}
                        @reason:action=${()=>{this._emit("processing:seller-cancel",{handler:this._cancelForm}),this._cancelForm={...ze}}}>
                    </svc-pay-reason>
                </div>`}const i=this._sellerCancelledForm;return e`
            <div class="cancel-block">
                <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.cancelTxt.cancelPendingBanner}>
                    ${this.txt.reasonLabel}: ${E(this.meta.cancel).note}
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
            </div>`}_rbCancelled(){const t="seller_cancelled"===this.meta.subStatus,i=E(this.meta.cancel);return e`
            <div class="order-panel">
                <web-alert type="error" ui=${this.ui} theme=${this.theme}
                    title="${this.txt.cancelledBy}: ${t?this.txt.roleSeller:this.txt.roleBuyer}">
                    ${this.txt.reasonLabel}: ${i.note}
                </web-alert>
                ${Ne(this.meta.cancel,t?this.txt.roleSeller:this.txt.roleBuyer,this.txt.handledByLabel)}
                ${t?"":Ne(this.meta.sellerCancelled,this.txt.roleSeller,this.txt.handledByLabel)}
            </div>`}_rbDone(){return e`
            <div class="order-panel">
                <p class="done-note">${this.txt.orderPreparedNote}</p>
                ${Ne(this.meta.preparing,this.txt.roleSeller,this.txt.handledByLabel)}
                ${"seller"===this.role?e`
                    <web-button type="fill" color="primary" height="40px"
                        @click=${()=>this._emit("processing:advance")}>${this.txt.continueToDelivery}</web-button>
                `:""}
            </div>`}};customElements.get("svc-pay-processing")||customElements.define("svc-pay-processing",Ae);var Ee={name:"",phone:"",note:"",media:""},Ue=class extends i{static styles=t(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.order-panel,.return-form,.return-block{flex-direction:column;gap:.6rem;display:flex}.waiting-note,.done-note{opacity:.7;font-size:.85rem;font-style:italic}.handled-by{opacity:.65;margin:0;font-size:.8rem}.hint{opacity:.6;margin:0;font-size:.8rem}.countdown{opacity:.8;margin-bottom:.5rem;font-size:.85rem;font-weight:600}.countdown.expired{color:var(--color-error);opacity:1}.return-block{border-top:1px dashed var(--color-base-300);margin-top:.75rem;padding-top:.75rem}.returned-media{flex-wrap:wrap;gap:.5rem;display:flex}.returned-media img{object-fit:cover;border:1px solid var(--color-base-300);border-radius:.5rem;width:72px;height:72px}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},role:{type:String},subId:{type:String},txt:{type:Object},cancelTxt:{type:Object},meta:{type:Object},buyerPrefill:{type:Object},sellerPrefill:{type:Object},deliveredRemainingLabel:{type:String},_packingForm:{state:!0},_shippingForm:{state:!0},_shipperForm:{state:!0},_receivedForm:{state:!0},_showReturnForm:{state:!0},_returnForm:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.role="buyer",this.subId="packing",this.txt={},this.cancelTxt={},this.meta={},this.buyerPrefill=null,this.sellerPrefill=null,this.deliveredRemainingLabel="",this._packingForm={...Ee},this._shippingForm={...Ee},this._shipperForm={...Ee},this._receivedForm={...Ee},this._showReturnForm=!1,this._returnForm={...Ee},this._prefillApplied=!1,this._shipperPrefillApplied=!1}willUpdate(e){if(e.has("buyerPrefill")&&this.buyerPrefill&&!this._prefillApplied&&(this._prefillApplied=!0,this._receivedForm={...this._receivedForm,name:this.buyerPrefill.name,phone:this.buyerPrefill.phone},this._returnForm={...this._returnForm,name:this.buyerPrefill.name,phone:this.buyerPrefill.phone}),e.has("meta")&&this.meta?.shipping&&!this._shipperPrefillApplied){this._shipperPrefillApplied=!0;const e=E(this.meta.shipping);this._shipperForm={...this._shipperForm,name:e.name,phone:e.phone}}}_rfDeliveredInfo(){return e`
            ${Ne(this.meta.shipping,this.txt.roleSeller,this.txt.handledByLabel)}
            ${Ne(this.meta.delivered,this.txt.roleSeller,this.txt.deliveredByLabel)}
        `}_emit(e,t={}){l(this,e,t)}_dhFormInput(e,t){this[e]={...this[e],[t.key]:t.value}}get _comIsPast(){const e=z.delivery??[],t=e.indexOf(this.subId),i=e.indexOf(this.meta.sub);return-1!==t&&-1!==i&&t<i}render(){return"pickup"===this.meta.fulfillment&&["packing","shipping","delivered"].includes(this.subId)?e`<div class="order-panel"><p class="waiting-note">${this.cancelTxt.notApplicablePickup}</p></div>`:"packing"===this.subId?this._rbPacking():"shipping"===this.subId?this._rbShipping():"delivered"===this.subId?this._rbDelivered():"received"===this.subId?this._rbReceived():this._rbReturned()}_rbPacking(){const t=this._comIsPast,i=this._packingForm;return e`
            <div class="order-panel">
                ${t?Ne(this.meta.packing,this.txt.roleSeller,this.txt.handledByLabel):"seller"===this.role?e`
                        <svc-pay-reason ui=${this.ui} theme=${this.theme}
                            stepKey="packing"
                            name=${i.name} phone=${i.phone} note=${i.note}
                            namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                            quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                            actionLabel=${this.txt.confirmPacked}
                            @reason:input=${e=>this._dhFormInput("_packingForm",e.detail)}
                            @reason:action=${()=>this._emit("delivery:confirm-packed",{handler:this._packingForm})}>
                        </svc-pay-reason>
                    `:e`<span class="waiting-note">${this.txt.sellerPackingNote}</span>`}
            </div>`}_rbShipping(){const t=this._comIsPast,i=this._shippingForm;return e`
            <div class="order-panel">
                ${t?Ne(this.meta.shipping,this.txt.roleSeller,this.txt.handledByLabel):"seller"===this.role?e`
                        <svc-pay-reason ui=${this.ui} theme=${this.theme}
                            stepKey="shipping"
                            name=${i.name} phone=${i.phone} note=${i.note}
                            namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                            quickName=${this.sellerPrefill?.name??""} quickPhone=${this.sellerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                            actionLabel=${this.txt.confirmShipped}
                            @reason:input=${e=>this._dhFormInput("_shippingForm",e.detail)}
                            @reason:action=${()=>this._emit("delivery:confirm-shipped",{handler:this._shippingForm})}>
                        </svc-pay-reason>
                    `:e`<span class="waiting-note">${this.txt.courierShippingNote}</span>`}
            </div>`}_rbDelivered(){const t=this._comIsPast,i=this._receivedForm,r=this._shipperForm,s=E(this.meta.delivered).at;return e`
            <div class="order-panel">
                ${this._rfDeliveredInfo()}
                ${t?"":"buyer"===this.role?e`
                        <p class="hint">${this.txt.shipperCallHint}</p>
                        <svc-pay-reason ui=${this.ui} theme=${this.theme}
                            stepKey="received"
                            name=${i.name} phone=${i.phone} note=${i.note}
                            namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                            quickName=${this.buyerPrefill?.name??""} quickPhone=${this.buyerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                            actionLabel=${this.txt.confirmReceived}
                            @reason:input=${e=>this._dhFormInput("_receivedForm",e.detail)}
                            @reason:action=${()=>this._emit("delivery:confirm-received",{handler:this._receivedForm})}>
                        </svc-pay-reason>`:s?"":e`
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
                ${!t&&s?e`
                    <div class="countdown">${this.txt.autoConfirmLabel}: ${this.deliveredRemainingLabel}</div>
                `:""}
                ${t?"":this._rbReturnBlock()}
            </div>`}_rbReceived(){return e`
            <div class="order-panel">
                <p class="done-note">${this.txt.transactionDone}</p>
                ${Ne(this.meta.received,this.txt.roleBuyer,this.txt.handledByLabel)}
                ${this._comIsPast?"":this._rbReturnBlock()}
            </div>`}_rbReturned(){const t=E(this.meta.return);return e`
            <div class="order-panel">
                <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.txt.returnedNote}>
                    ${this.txt.reasonLabel}: ${t.note}
                </web-alert>
                ${Ne(this.meta.return,this.txt.roleBuyer,this.txt.handledByLabel)}
                ${this._rfReturnedMedia(t.media)}
            </div>`}_rfReturnedMedia(t){return t?e`
            <div class="returned-media">
                ${t.split("|").filter(Boolean).map(t=>e`<img src=${t} alt="" loading="lazy" />`)}
            </div>`:e``}_rbReturnBlock(){if("buyer"!==this.role)return e``;if(!this._showReturnForm)return e`
            <div class="return-block">
                <web-button type="soft" color="warning" height="36px"
                    @click=${()=>{this._showReturnForm=!0}}>${this.txt.returnOrder}</web-button>
            </div>`;const t=this._returnForm;return e`
            <div class="return-form">
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    stepKey="return"
                    title=${this.txt.returnOrder} titleColor="error"
                    name=${t.name} phone=${t.phone} note=${t.note}
                    namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.returnReasonPh}
                    quickName=${this.buyerPrefill?.name??""} quickPhone=${this.buyerPrefill?.phone??""} quickLabel=${this.txt.quickFillLabel}
                    showMedia media=${t.media} mediaPh=${this.txt.returnMediaPh}
                    @reason:input=${e=>this._dhFormInput("_returnForm",e.detail)}>
                </svc-pay-reason>
                <web-button type="soft" color="warning" height="40px" ?disabled=${!(t.note??"").trim()}
                    @click=${()=>this._emit("delivery:request-return",{reason:t.note,handler:t})}>
                    ${this.txt.confirmReturn}
                </web-button>
            </div>`}};customElements.get("svc-pay-delivery")||customElements.define("svc-pay-delivery",Ue);var Qe={name:"",phone:"",note:""},Ke=class extends i{static styles=[t(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.pay-root{flex-direction:column;gap:0;display:flex}.pay-cart-wrap{display:contents}.major-steps{z-index:5;background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-bottom:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);padding:1rem 1rem .5rem;top:0}.major-body{padding:1rem 1.25rem 2rem}.major-desc{opacity:.7;margin:0 0 1rem;font-size:.85rem}.sub-steps{max-width:860px}.order-panel,.cancel-block{flex-direction:column;gap:.6rem;display:flex}.done-note{opacity:.7;font-size:.85rem;font-style:italic}.cancel-block{border-top:1px dashed var(--color-base-300);margin-top:.75rem;padding-top:.75rem}.hint{opacity:.6;margin:0;font-size:.8rem}.handled-by{opacity:.65;margin:0;font-size:.8rem}.party-row{flex-wrap:wrap;gap:.75rem 1.5rem;display:flex}.party-block{flex-direction:column;gap:.15rem;display:flex}.party-label{opacity:.6;font-size:.75rem}.party-value{font-size:.9rem;font-weight:600}.order-items{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-radius:.75rem;flex-direction:column;gap:.4rem;padding:.75rem .9rem;display:flex}.order-items-empty{opacity:.5;margin:0;font-size:.85rem;font-style:italic}.order-item-row{justify-content:space-between;align-items:center;font-size:.85rem;display:flex}.order-item-name{opacity:.8}.order-item-price{font-weight:600}.order-item-total{border-top:1px dashed var(--color-base-300);color:var(--color-primary);margin-top:.3rem;padding-top:.4rem;font-weight:700}')];static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},service:{type:String},role:{type:String},lang:{type:String},txt:{type:Object},wallet:{type:Object},vietqr:{type:Object},invoiceId:{type:String},items:{type:Array},sellerId:{type:String},buyerId:{type:String},bayId:{type:String},isCart:{type:Boolean},onlyDelivery:{type:Boolean},cashDisabled:{type:Boolean},position:{type:String},cartService:{type:String},seller:{type:String},notes:{type:Array},owner:{type:Boolean},promosStore:{},_order:{state:!0},_invoice:{state:!0},_payMethod:{state:!0},_now:{state:!0},_refundForm:{state:!0},_selfOpen:{state:!0},_viewMajor:{state:!0},_customerData:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.service="pay",this.role="buyer",this.lang="vi",this.txt=null,this.wallet={},this.vietqr={},this.invoiceId="",this.items=[],this.sellerId="",this.buyerId="",this.bayId="",this.isCart=!1,this.onlyDelivery=!1,this.cashDisabled=!1,this.position="relative",this.cartService="",this.seller="",this.notes=null,this.owner=!1,this.promosStore=null,this._order=null,this._invoice=null,this._payMethod="bank",this._now=0,this._payTimer=null,this._confirmingPaid=!1,this._refundForm={...Qe},this._selfOpen=!1,this._viewMajor="",this._lastMajor="",this._customerData={entries:[]},this._unsubOrder=null,this._unsubInvoice=null,this._unsubCustomer=null}connectedCallback(){super.connectedCallback(),this._dcInit(),this._unsubCustomer=se("pay_customer",e=>{this._customerData=e??{entries:[]}}),this._unwatchLang=a("lang",e=>{this.lang=e||"vi"})}disconnectedCallback(){super.disconnectedCallback(),this._unsubOrder?.(),this._unsubInvoice?.(),this._unsubCustomer?.(),this._unwatchLang?.(),this._dcStopCountdown()}updated(e){if(e.has("service")&&this.service!==this._initedService&&this._dcReinit(),e.has("_order")||e.has("_invoice")){this._viewMajor&&this._comMajor!==this._lastMajor&&(this._viewMajor=""),this._lastMajor=this._comMajor;const e="order"===this._comMajor&&"paying"===this._comSub&&!this._invoice,t="delivered"===this._comSub&&!!this._comDeliveredAt;e||t?this._dcStartCountdown():this._dcStopCountdown()}!e.has("items")||this.invoiceId||this._invoice||"placing"!==this._order?.sub&&"paying"!==this._order?.sub||D(this.service,this.items),this.onlyDelivery&&this._order&&"delivery"!==this._order.fulfillment&&("placing"===this._order.sub||"paying"===this._order.sub)&&v(this.service,"delivery")}_dcInit(){this._initedService=this.service,this.invoiceId?this._dcSubscribeInvoice(this.invoiceId):(L(this.service,{bayId:this.bayId,sellerId:this.sellerId,buyerId:this.buyerId,items:this.items}),this._order=ye(this.service),this._unsubOrder=R(this.service,e=>{this._order=e,e.order_id&&e.payment_id&&!this._unsubInvoice&&this._dcSubscribeInvoice(e.order_id)}))}_dcReinit(){this._unsubOrder?.(),this._unsubOrder=null,this._unsubInvoice?.(),this._unsubInvoice=null,this._order=null,this._invoice=null,this.invoiceId="",this._dcInit()}_dcSubscribeInvoice(e){this.invoiceId=e,this._unsubInvoice=ue(e,e=>{this._invoice=e})}_dcStartCountdown(){this._payTimer||(this._now=Date.now(),this._payTimer=setInterval(()=>{this._now=Date.now(),this._dcMaybeAutoConfirm()},1e3))}_dcStopCountdown(){this._payTimer&&(clearInterval(this._payTimer),this._payTimer=null)}_dcMaybeAutoConfirm(){this.invoiceId&&"delivered"===this._comSub&&this._comDeliveredExpired&&H(this.invoiceId)}get _stepTxt(){return ce[this.lang]??ce.vi}get _desc(){return re[this.lang]??re.vi}get _txt(){return s(this.txt,J,this.lang)}get _cancelTxt(){return C[this.lang]??C.vi}get _comNotes(){return(this.notes?.length?this.notes:null)??de[this.lang]??de.vi}get _comMajor(){return this._invoice?.meta?.major??this._order?.major??U[0]}get _comSub(){return this._invoice?.meta?.sub??this._order?.sub??z[U[0]][0]}get _comMeta(){return this._invoice?.meta??{}}get _comAmount(){return this._invoice?Number((this._invoice.summary||"0~0~0").split("~")[2])||0:Math.max(0,(this._order?.amount??0)-$(this._order?.disc))}get _comPaymentRef(){return this._order?.order_id?`PAY-${this._order.order_id}`:""}get _comInvoiceUrl(){return N(this.invoiceId,{role:this.role,sellerId:this.sellerId,bayId:this.bayId})}get _comInvoiceQrSrc(){return this._comInvoiceUrl?`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(this._comInvoiceUrl)}`:""}get _comCartService(){return this.cartService||`${this.service}_cart`}get _comIsDelivery(){return this.onlyDelivery||"delivery"===this._order?.fulfillment}get _comHasCustomerData(){const e=this._customerData?.entries??[],t=e.find(e=>e.isDefault)??e[0];return!!(t?.fullName?.trim()&&t?.phone?.trim()&&t?.location?.trim())}get _comOrderTerminal(){return["cancelled","received","returned"].includes(this._comSub)}get _comMajorSteps(){return U.map(e=>({id:e,label:this._stepTxt[e].label}))}get _comViewMajor(){return this._viewMajor||this._comMajor}get _comIsPastMajor(){return this._comViewMajor!==this._comMajor}get _comViewSub(){if(!this._comIsPastMajor)return this._comSub;const e=z[this._comViewMajor]??[];return e[e.length-1]??""}get _comSubSteps(){const e=this._comViewMajor,t=["returned","cancelled"];return(z[e]??[]).filter(e=>!t.includes(e)||this._comSub===e).map(t=>({id:t,label:this._stepTxt[e][t],...this._comIsPastMajor?{status:"done"}:{}}))}get _comViewDesc(){return this._comIsPastMajor?"order"===this._comViewMajor?this._desc[this._comViewSub]??"":"":this._desc[this._comSub]??""}get _comBuyerPrefill(){const e=u(this._invoice?.buyer);return{name:e.name,phone:e.phone,note:""}}get _comSellerPrefill(){const e=G(this._invoice?.seller);return{name:e.name,phone:e.phone}}get _comPayRemainingMs(){return this._order?.expires_at?Math.max(0,this._order.expires_at-this._now):te}get _comPayExpired(){return!!this._order?.expires_at&&this._comPayRemainingMs<=0}get _comPayRemainingLabel(){return Fe(this._comPayRemainingMs)}get _comDeliveredAt(){return E(this._comMeta.delivered).at}get _comDeliveredRemainingMs(){return this._comDeliveredAt?Math.max(0,this._comDeliveredAt+d-this._now):0}get _comDeliveredExpired(){return!!this._comDeliveredAt&&this._comDeliveredRemainingMs<=0}get _comDeliveredRemainingLabel(){return Fe(this._comDeliveredRemainingMs)}_dhOrderPaymentSelect(e){this._payMethod=e.detail.method}_dhOrderToggleDelivery(e){v(this.service,e.detail.active?"delivery":"pickup")}_dhMajorChange(e){const t=e.detail?.active??"";this._viewMajor=t===this._comMajor?"":t}_dhCartCheckout(e){const t=e.detail?.items??[],i=e.detail?.notes??[],r=e.detail?.promo??null,s=Number(e.detail?.disc??0)||0,o={bayId:this.bayId,sellerId:this.sellerId,buyerId:this.buyerId,items:t,notes:i,promo:r,disc:s};this._order?.order_id&&!this.invoiceId?D(this.service,t,{notes:i,promo:r,disc:s}):(this._unsubInvoice?.(),this._unsubInvoice=null,this._invoice=null,this.invoiceId="",oe(this.service,o)),this._order=ye(this.service),this._selfOpen=!0,l(this,"cart:checkout",e.detail)}_dfPlaceOrder(){p(this.service)}_dfBackToPlacing(){fe(this.service,{sub:"placing",updated_at:Date.now()})}_dfBackToCart(){l(this,"pay:back-to-cart",{}),this.isCart&&(this._selfOpen=!1,fe(this._comCartService,{items:this._order?.items??[],open:!0}))}async _dfConfirmPaid(){if(!this._confirmingPaid){this._confirmingPaid=!0;try{const e=await X(this.service,this._comPaymentRef,this.seller);if(!e)return;b(e),this.isCart&&ie(this._comCartService)}finally{this._confirmingPaid=!1}}}_dfConfirmReceivedMoney(e){this.invoiceId&&pe(this.invoiceId,e)}_dfCompleteProcessing(e){this.invoiceId&&le(this.invoiceId,e)}_dfAdvanceToDelivery(){this.invoiceId&&ae(this.invoiceId)}_dfStartShipping(e){this.invoiceId&&g(this.invoiceId,e)}_dfConfirmShipped(e){this.invoiceId&&Q(this.invoiceId,e)}_dfConfirmDeliveryDone(e){this.invoiceId&&O(this.invoiceId,e)}_dfConfirmReceived(e){this.invoiceId&&Y(this.invoiceId,e)}_dfRequestCancel(e){(e??"").trim()&&this.invoiceId&&y(this.invoiceId,e,this._comBuyerPrefill)}_dfAcceptCancel(e){this.invoiceId&&he(this.invoiceId,e)}_dfSellerCancelOrder(e){(e.note??"").trim()&&this.invoiceId&&m(this.invoiceId,e.note,e)}_dfConfirmRefund(){this.invoiceId&&A(this.invoiceId,this._refundForm)}_dfRejectCancel(e){(e.note??"").trim()&&this.invoiceId&&w(this.invoiceId,e.note,e)}_dfRequestReturn(e,t){(e??"").trim()&&this.invoiceId&&_(this.invoiceId,e,t)}render(){const t=e`
            <div class="pay-root">
                <web-steps class="major-steps" linear
                    .steps=${this._comMajorSteps}
                    active=${this._comMajor}
                    ui=${this.ui} theme=${this.theme}
                    mainColors=${this.mainColors} textColor=${this.textColor}
                    size="lg" ?ended=${this._comOrderTerminal}
                    @change=${e=>this._dhMajorChange(e)}>
                </web-steps>
                <div class="major-body">
                    <p class="major-desc">${this._comViewDesc}</p>
                    ${this._rbSubSteps()}
                </div>
            </div>`;return this.isCart?e`
            <div class="pay-cart-wrap">
                ${"seller"===this.role?e``:e`
                    <svc-cart service=${this._comCartService} position=${this.position}
                        ui=${this.ui} theme=${this.theme} lang=${this.lang} ?owner=${this.owner}
                        .wallet=${this.wallet} .notes=${this._comNotes} .promosStore=${this.promosStore}
                        seller=${this.seller} sellerId=${this.sellerId} bayId=${this.bayId}
                        @cart:checkout=${e=>this._dhCartCheckout(e)}>
                    </svc-cart>`}
                <web-dialog type="mobile" ui=${this.ui} theme=${this.theme} maxWidth="640px"
                    .open=${this._selfOpen} @close=${()=>{this._selfOpen=!1}}>
                    ${t}
                </web-dialog>
            </div>`:t}_rbSubSteps(){return e`
            <web-steps class="sub-steps" isVertical linear
                .steps=${this._comSubSteps}
                active=${this._comViewSub}
                ui=${this.ui} theme=${this.theme}
                mainColors=${this.mainColors} textColor=${this.textColor}
                size="md" ?ended=${this._comOrderTerminal}>
                ${this._comSubSteps.map(t=>e`<div slot=${t.id}>${this._rfSubPanel(t.id)}</div>`)}
            </web-steps>`}_rfSubPanel(e){return this._comIsPastMajor?"order"===this._comViewMajor?this._rbOrderReadonlySummary():this._rbPastMajorSummary():"order"===this._comMajor?this._rbOrderLive(e):"processing"===this._comMajor?this._rbProcessingLive(e):this._rbDeliveryLive(e)}_rbOrderLive(t){return e`
            <svc-pay-order
                subId=${t} role=${this.role} lang=${this.lang}
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
            </svc-pay-order>`}_rbProcessingLive(t){const i=e`
            <svc-pay-processing
                subId=${t} role=${this.role} lang=${this.lang}
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
            </svc-pay-processing>`;return"cancelled"!==t?i:e`<div class="order-panel">${i}${this._rbRefundBlock()}</div>`}_rbDeliveryLive(t){const i=e`
            <svc-pay-delivery
                subId=${t} role=${this.role} lang=${this.lang}
                .txt=${this._txt} .cancelTxt=${this._cancelTxt} .meta=${this._comMeta}
                .buyerPrefill=${this._comBuyerPrefill} .sellerPrefill=${this._comSellerPrefill}
                deliveredRemainingLabel=${this._comDeliveredRemainingLabel}
                ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                @delivery:confirm-packed=${e=>this._dfStartShipping(e.detail.handler)}
                @delivery:confirm-shipped=${e=>this._dfConfirmShipped(e.detail.handler)}
                @delivery:confirm-delivery=${e=>this._dfConfirmDeliveryDone(e.detail.handler)}
                @delivery:confirm-received=${e=>this._dfConfirmReceived(e.detail.handler)}
                @delivery:request-return=${e=>this._dfRequestReturn(e.detail.reason,e.detail.handler)}>
            </svc-pay-delivery>`;return"returned"!==t?i:e`<div class="order-panel">${i}${this._rbRefundBlock()}</div>`}_rbPastMajorSummary(){return e`
            <div class="order-panel">
                <p class="done-note">${this._txt.pastStepDoneAt(Re(E(this._comMeta.preparing).at))}</p>
                ${Ne(this._comMeta.preparing,this._txt.roleSeller,this._txt.handledByLabel)}
            </div>`}_rbOrderReadonlySummary(){const t=u(this._invoice?.buyer),i=G(this._invoice?.seller),r=this._invoice?P(this._invoice.items):this._order?.items??[];return e`
            <div class="order-panel">
                <div class="party-row">
                    <div class="party-block">
                        <span class="party-label">${this._txt.roleBuyer}</span>
                        <span class="party-value">${[t.name,t.phone].filter(Boolean).join(" · ")||"—"}</span>
                    </div>
                    <div class="party-block">
                        <span class="party-label">${this._txt.roleSeller}</span>
                        <span class="party-value">${[i.name,i.phone].filter(Boolean).join(" · ")||"—"}</span>
                    </div>
                </div>
                ${Be(r,this._comAmount,this._txt,this.lang)}
            </div>`}_rbRefundBlock(){if(E(this._comMeta.refunded).at)return e`
            <div class="cancel-block">
                <web-alert type="success" ui=${this.ui} theme=${this.theme} title=${this._txt.refundDoneNote}></web-alert>
                ${Ne(this._comMeta.refunded,this._txt.roleSeller,this._txt.handledByLabel)}
            </div>`;if("seller"!==this.role)return e`<p class="hint">${this._txt.refundPendingNote}</p>`;const t=this._refundForm;return e`
            <div class="cancel-block">
                <p class="hint">${this._txt.refundPendingNote}</p>
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    stepKey="refund"
                    name=${t.name} phone=${t.phone} note=${t.note}
                    namePh=${this._txt.handlerNamePh} phonePh=${this._txt.handlerPhonePh} notePh=${this._txt.handlerNotePh}
                    quickName=${this._comSellerPrefill.name} quickPhone=${this._comSellerPrefill.phone} quickLabel=${this._txt.quickFillLabel}
                    actionLabel=${this._txt.confirmRefundLabel}
                    @reason:input=${e=>{this._refundForm={...this._refundForm,[e.detail.key]:e.detail.value}}}
                    @reason:action=${()=>this._dfConfirmRefund()}>
                </svc-pay-reason>
            </div>`}};customElements.get("svc-pay")||customElements.define("svc-pay",Ke);