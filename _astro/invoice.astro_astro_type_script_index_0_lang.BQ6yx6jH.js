import{n as e,o as t,t as i,u as s}from"./lit.PcferLoS.js";import"./iconify-icon.CciI8O2w.js";import{c as a,y as r}from"./helper.D6LK5q_e.js";import{_ as o,g as l,h as n,t as p,u as c}from"./svc-pay.VW5J8cFe.js";import"./web-button.CowA0wj5.js";var d={vi:{billTitle:"HOÁ ĐƠN THANH TOÁN",orderCode:"Mã đơn",date:"Ngày",customer:"Khách hàng",itemsHeader:"TÊN MẶT HÀNG",total:"Tổng cộng",fulfillment:"Hình thức",fulfillmentDelivery:"Giao hàng",fulfillmentPickup:"Tự đến lấy",thanks:"Xin cảm ơn quý khách!"},en:{billTitle:"PAYMENT RECEIPT",orderCode:"Order code",date:"Date",customer:"Customer",itemsHeader:"ITEMS",total:"Total",fulfillment:"Fulfillment",fulfillmentDelivery:"Delivery",fulfillmentPickup:"Self pickup",thanks:"Thank you!"}},m=class extends i{static styles=[s(":host{display:block}.paper-sheet{background:var(--color-base-100);max-width:380px;color:var(--color-base-content);box-shadow:0 4px 16px color-mix(in oklab, var(--color-base-content) 18%, transparent);border-radius:.25rem;margin:0 auto 1.5rem;padding:1.5rem 1.5rem 1.75rem;font-family:Courier New,ui-monospace,monospace;font-size:.85rem;line-height:1.5}.paper-header{text-align:center;margin-bottom:.85rem}.paper-seller-name{font-weight:700}.paper-seller-addr{opacity:.8}.paper-title{letter-spacing:.08em;margin-top:.6rem;font-weight:700}.paper-meta{margin-bottom:.4rem}.paper-meta-row{justify-content:space-between;gap:.75rem;display:flex}.paper-customer{margin-top:.4rem}.paper-customer-line{opacity:.85}.paper-divider{border-top:1px dashed color-mix(in oklab, var(--color-base-content) 35%, transparent);margin:.75rem 0}.paper-items-header{letter-spacing:.05em;margin-bottom:.5rem;font-weight:700}.paper-items{flex-direction:column;gap:.6rem;display:flex}.paper-item-name{font-weight:600}.paper-item-line{opacity:.9;justify-content:space-between;gap:.75rem;display:flex}.paper-total-row{justify-content:space-between;margin-bottom:.4rem;font-size:1rem;font-weight:700;display:flex}.paper-fulfillment{opacity:.8;margin-bottom:.6rem}.paper-thanks{text-align:center;opacity:.85;margin-top:1rem}.paper-footer{text-align:center;opacity:.6;margin-top:.6rem;font-size:.75rem}")];static properties={ui:{type:String},theme:{type:String},lang:{type:String},txt:{type:Object},invoiceId:{type:String},_invoice:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.lang="vi",this.txt=null,this.invoiceId="",this._invoice=null,this._unsub=null}connectedCallback(){super.connectedCallback(),this._dcSubscribe()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.()}updated(e){e.has("invoiceId")&&this._dcSubscribe()}_dcSubscribe(){this._unsub?.(),this._unsub=null,this._invoice=null,this.invoiceId&&(this._unsub=c(this.invoiceId,e=>{this._invoice=e}))}get _txt(){return r(this.txt,d,this.lang)}render(){if(!this._invoice)return e;const i=this._invoice,s=o(i.seller),r=n(i.buyer),c=l(i.items),d=Number((i.summary||"").split("~")[2])||0;return t`
            <div class="paper-sheet">
                <div class="paper-header">
                    <div class="paper-seller-name">${s.name||"—"}${s.phone?` - ${s.phone}`:""}</div>
                    ${s.address?t`<div class="paper-seller-addr">${s.address}</div>`:e}
                    <div class="paper-title">${this._txt.billTitle}</div>
                </div>

                <div class="paper-meta">
                    <div class="paper-meta-row"><span>${this._txt.orderCode}:</span><span>${i.id}</span></div>
                    <div class="paper-meta-row"><span>${this._txt.date}:</span><span>${p(Date.parse(i.issued_at))}</span></div>
                    ${r.name||r.phone?t`
                        <div class="paper-customer">
                            <div class="paper-meta-row"><span>${this._txt.customer}:</span><span>${r.name||"—"}</span></div>
                            ${r.phone?t`<div class="paper-customer-line">${r.phone}</div>`:e}
                            ${r.address?t`<div class="paper-customer-line">${r.address}</div>`:e}
                        </div>
                    `:e}
                </div>

                <div class="paper-divider"></div>
                <div class="paper-items-header">${this._txt.itemsHeader}</div>
                <div class="paper-items">
                    ${c.map(e=>t`
                        <div class="paper-item">
                            <div class="paper-item-name">${e.name}</div>
                            <div class="paper-item-line">
                                <span>${e.qty}${e.unit?` ${e.unit}`:""} x ${a(e.price,this.lang)}</span>
                                <span>${a(e.price*e.qty,this.lang)}</span>
                            </div>
                        </div>
                    `)}
                </div>
                <div class="paper-divider"></div>

                <div class="paper-total-row">
                    <span>${this._txt.total}</span>
                    <span>${a(d,this.lang)}</span>
                </div>
                ${i.meta?.fulfillment?t`
                    <div class="paper-fulfillment">
                        ${this._txt.fulfillment}: ${"pickup"===i.meta.fulfillment?this._txt.fulfillmentPickup:this._txt.fulfillmentDelivery}
                    </div>
                `:e}

                <div class="paper-thanks">${this._txt.thanks}</div>
                <div class="paper-footer">${p(Date.parse(i.issued_at))}</div>
            </div>
        `}};customElements.get("svc-pay-watch-paper")||customElements.define("svc-pay-watch-paper",m);var h={vi:{title:"Tra cứu đơn hàng",placeholder:"Nhập mã đơn hàng...",submit:"Tra cứu",empty:"Nhập mã đơn hàng (hoặc quét mã QR từ màn hình xác nhận thanh toán) để xem chi tiết."},en:{title:"Track your order",placeholder:"Enter your order code...",submit:"Look up",empty:"Enter your order code (or scan the QR from the payment confirmation screen) to see details."}},u=class extends i{static styles=[s(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);max-width:990px;margin:0 auto;padding:2.5rem 1.25rem;display:block}.lookup-root{flex-direction:column;gap:1.25rem;display:flex}.lookup-title{text-align:center;margin:0;font-size:1.4rem;font-weight:700}.lookup-result{flex-direction:column;align-items:stretch;gap:1.25rem;display:flex}@media (width>=56rem){.lookup-result{flex-direction:row;align-items:flex-start}.lookup-result>svc-pay-watch-paper{flex:0 0 380px}.lookup-result>svc-pay{flex:auto;min-width:0}}.lookup-form{gap:.6rem;width:100%;max-width:480px;margin:0 auto;display:flex}.lookup-form input{border:1px solid var(--color-base-300);background:var(--color-base-100);color:var(--color-base-content);border-radius:.6rem;flex:1;padding:.6rem .9rem;font-family:inherit;font-size:.95rem}.lookup-form input:focus{border-color:var(--color-primary);outline:none}.lookup-empty{opacity:.6;text-align:center;flex-direction:column;align-items:center;gap:.5rem;margin-top:2rem;font-size:.9rem;display:flex}')];static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},txt:{type:Object},_input:{state:!0},_lookedUpId:{state:!0},_sellerId:{state:!0},_bayId:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.txt=null,this._input="",this._lookedUpId="",this._sellerId="",this._bayId=""}connectedCallback(){super.connectedCallback();const e=new URLSearchParams(window.location.search),t=e.get("id");t&&(this._input=t,this._lookedUpId=t),this._sellerId=e.get("sellerId")??"",this._bayId=e.get("bayId")??""}get _comRole(){return this._sellerId?"seller":"buyer"}get _txt(){return r(this.txt,h,this.lang)}_dhSubmit(e){e?.preventDefault?.();const t=this._input.trim();t&&(this._lookedUpId=t)}render(){return t`
            <div class="lookup-root">
                <h1 class="lookup-title">${this._txt.title}</h1>
                <form class="lookup-form" @submit=${e=>this._dhSubmit(e)}>
                    <input type="text" placeholder=${this._txt.placeholder}
                        .value=${this._input}
                        @input=${e=>{this._input=e.target.value}} />
                    <web-button type="fill" color="primary" height="40px"
                        ui=${this.ui} theme=${this.theme}
                        @clicked=${()=>this._dhSubmit()}>${this._txt.submit}</web-button>
                </form>

                ${this._lookedUpId?t`
                    <div class="lookup-result">
                        <svc-pay role=${this._comRole} invoiceId=${this._lookedUpId} sellerId=${this._sellerId} bayId=${this._bayId}
                            ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                            lang=${this.lang}>
                        </svc-pay>
                        <svc-pay-watch-paper invoiceId=${this._lookedUpId} ui=${this.ui} theme=${this.theme} lang=${this.lang}>
                        </svc-pay-watch-paper>
                    </div>
                `:t`
                    <p class="lookup-empty">
                        <iconify-icon icon="ri:receipt-line" width="28px"></iconify-icon>
                        ${this._txt.empty}
                    </p>`}
            </div>
        `}};customElements.get("svc-pay-watch")||customElements.define("svc-pay-watch",u);