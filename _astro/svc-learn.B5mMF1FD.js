import{a as t,l as e,t as s}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import"./web-button.DzrrIr-d.js";import{C as i,S as n,h as a}from"./util.6fuX_jJt.js";import{r as l}from"./crud.DPYAF5eE.js";import"./web-text.DJCnRip-.js";import{n as o,t as r}from"./server.CcQFWJi8.js";import{s as c}from"./sectors.CrpvWC3a.js";import{i as d}from"./command.BBDam8WT.js";import{n as p}from"./know-sync.BWTmQEJr.js";var h=l("know","",r),v=l("rel","",r);function m(t){return String(t||"").split(/[,;]/).map(t=>t.trim().toLowerCase()).filter(Boolean)}async function g(t="product"){let e=0;try{const s=(await h.findAll({filters:{type:t,status:"active"}})).filter(t=>!t.owner),i=new Map;for(const t of s)for(const e of m(t.meta?.tags))i.has(e)||i.set(e,[]),i.get(e).push(t.id);const n=new Map;for(const[t,e]of i)if(!(e.length<2||e.length>40))for(let s=0;s<e.length;s++)for(let i=s+1;i<e.length;i++){const[a,l]=[e[s],e[i]].sort(),o=`${a}|${l}`;n.has(o)||n.set(o,new Set),n.get(o).add(t)}const a=v.now(),l=await v.findAll({filters:{type:"related_to"}}),o=new Map(l.map(t=>[t.id,t.created_at]));for(const[t,r]of n){if(e>=500)break;const[s,i]=t.split("|"),n=`${s}_${i}_related_to`;await v.set(n,{from_id:s,to_id:i,type:"related_to",owner:"",weight:r.size,meta:{tags:[...r]},created_at:o.get(n)||a,updated_at:a,deleted_at:null}),e++}}catch(s){console.error("[llm/rel-sync] failed to auto-link know entries:",s?.message??s)}return e}var f=l("products","",o("products")),u={vi:{legend:"Nạp dữ liệu",hint:"Đưa sản phẩm vào kho tri thức để trợ lý tư vấn đúng hàng đang bán.",syncTitle:"Đồng bộ sản phẩm",syncDesc:"Nạp lại toàn bộ sản phẩm của cửa hàng, tự liên kết các mục cùng tag. Bấm nhiều lần vẫn an toàn.",syncBtn:"Nạp sản phẩm",csvTitle:"Nhập từ file CSV",csvBtn:"Chọn file CSV",csvDesc:"Cột theo thứ tự: title · description · content · tags · pricing · promo · quantity (dòng tiêu đề tự bỏ qua).",typeLabel:"Loại dữ liệu",typePlaceholder:"Bỏ trống = product",sectorLabel:"Ngành dùng dữ liệu này",allSectors:"Mọi ngành",fnLabel:"Phòng dùng dữ liệu này",allFns:"Mọi phòng",syncOk:"Đã nạp {ok} sản phẩm vào kho tri thức, sinh {linked} quan hệ liên quan",syncErr:"Nạp sản phẩm thất bại",csvOk:'Đã nhập {ok} dòng từ CSV (type="{type}"), sinh {linked} quan hệ liên quan',csvErr:"Nhập CSV thất bại"},en:{legend:"Data ingestion",hint:"Load products into the knowledge base so the assistant recommends what is actually on sale.",syncTitle:"Sync products",syncDesc:"Re-import every shop product and auto-link items that share tags. Safe to run repeatedly.",syncBtn:"Sync products",csvTitle:"Import a CSV file",csvBtn:"Choose CSV file",csvDesc:"Columns in order: title · description · content · tags · pricing · promo · quantity (a header row is skipped).",typeLabel:"Data type",typePlaceholder:"Blank = product",sectorLabel:"Sector that uses this data",allSectors:"Every sector",fnLabel:"Department that uses this data",allFns:"Every department",syncOk:"Synced {ok} products into the knowledge base, generated {linked} relations",syncErr:"Product sync failed",csvOk:'Imported {ok} CSV rows (type="{type}"), generated {linked} relations',csvErr:"CSV import failed"}};function y(t,e){return t.replace(/\{(\w+)\}/g,(t,s)=>e[s]??"")}var b=class extends s{static styles=e(":host{--svl-a:var(--color-tint-a,var(--color-primary));--svl-b:var(--color-tint-b,var(--color-secondary));--svl-ink:var(--color-base-content);--svl-muted:color-mix(in oklab, var(--color-base-content) 60%, transparent);--svl-surface:color-mix(in oklab, var(--color-base-content) 4%, transparent);--svl-line:color-mix(in oklab, var(--color-base-content) 10%, transparent);--svl-line-strong:color-mix(in oklab, var(--color-base-content) 18%, transparent);color:var(--svl-ink);display:block}.svl{gap:14px;padding:16px;display:grid}.svl-head{align-items:flex-start;gap:12px;display:flex}.svl-glyph{background:linear-gradient(135deg, color-mix(in oklab, var(--svl-a) 18%, transparent), color-mix(in oklab, var(--svl-b) 18%, transparent));width:40px;height:40px;color:color-mix(in oklab, var(--svl-a) 70%, var(--svl-ink));border-radius:12px;flex-shrink:0;place-items:center;font-size:20px;display:inline-grid}.svl-title{margin:0;font-size:1rem;font-weight:700;line-height:1.3}.svl-hint{color:var(--svl-muted);margin:2px 0 0;font-size:.82rem;line-height:1.45}.svl-cards{gap:12px;display:grid}.svl-card{border:1px solid var(--svl-line);background:var(--svl-surface);border-radius:16px;flex-direction:column;gap:10px;min-width:0;padding:14px;display:flex}.svl-card-head{align-items:center;gap:8px;display:flex}.svl-card-head iconify-icon{color:color-mix(in oklab, var(--svl-a) 70%, var(--svl-ink));font-size:18px}.svl-card-head h3{margin:0;font-size:.92rem;font-weight:700}.svl-desc{color:var(--svl-muted);margin:0;font-size:.8rem;line-height:1.5}.svl-fields{grid-template-columns:1fr 1fr;gap:10px;display:grid}.svl-field{gap:4px;min-width:0;display:grid}.svl-field-wide{grid-column:1/-1}.svl-field>span{color:var(--svl-muted);font-size:.72rem;font-weight:600}.svl-field web-text{width:100%;display:block}.svl-select{border:1px solid var(--svl-line-strong);background:var(--color-base-100);width:100%;min-width:0;height:36px;color:inherit;font:inherit;border-radius:10px;padding:0 .6rem;font-size:.82rem}.svl-select:focus-visible{border-color:color-mix(in oklab, var(--svl-a) 55%, transparent);box-shadow:0 0 0 3px color-mix(in oklab, var(--svl-a) 15%, transparent);outline:none}.svl-actions{justify-content:flex-end;margin-top:auto;padding-top:2px;display:flex}@media (width>=768px){.svl{padding:18px 20px 20px}.svl-cards{grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);align-items:stretch}}");static properties={ui:{type:String},theme:{type:String},lang:{type:String},txt:{type:Object},_type:{state:!0},_sectors:{state:!0},_sector:{state:!0},_fn:{state:!0},_syncLoading:{state:!0},_csvLoading:{state:!0}};constructor(){super(),this.ui="",this.theme="",this.lang="vi",this.txt=null,this._type="",this._sectors=[],this._sector="",this._fn="",this._syncLoading=!1,this._csvLoading=!1}get _txt(){return i(this.txt,u,this.lang)}connectedCallback(){super.connectedCallback(),c.sectors().then(t=>{t.ok&&(this._sectors=t.data??[])})}get _fnOptions(){return((this._sectors.find(t=>t.id===this._sector)??this._sectors[0])?.functions??[]).map(t=>({fn:t.fn,title:d(t,this.lang)}))}_emitDone(t){this.dispatchEvent(new CustomEvent("learn:done",{detail:t,bubbles:!0,composed:!0}))}_dhTypeInput(t){this._type=t.detail.value}async _dhSyncProducts(){this._syncLoading=!0;try{const t=await f.findAll();for(const s of t)await p(s,"products");const e=await g("product");this._emitDone({ok:t.length,linked:e}),n(y(this._txt.syncOk,{ok:t.length,linked:e}),"success")}catch(t){n(`${this._txt.syncErr}: ${t.message}`,"error")}finally{this._syncLoading=!1}}_dhPickCsv(){this.shadowRoot.querySelector('input[type="file"]')?.click()}async _dhCsvChange(t){const e=t.target.files?.[0];if(t.target.value="",e){this._csvLoading=!0;try{const t=this._type.trim()||"product",s=await e.text(),i=a(s.replace(/^﻿/,"")).filter(t=>t.some(t=>""!==t.trim())),l=i.length>0&&"title"===(i[0][0]||"").trim().toLowerCase()?i.slice(1):i;let o=0;for(const e of l){const[s,i,n,a,l,r,c]=e;s?.trim()&&(await p({id:crypto.randomUUID(),title:s.trim(),description:(i||"").trim(),content:(n||"").trim(),tags:(a||"").trim(),pricing:(l||"").trim(),promo:(r||"").trim(),quantity:(c||"").trim(),status:"active"},"products",{type:t,sector:this._sector,fn:this._fn}),o++)}const r=await g(t);this._emitDone({ok:o,linked:r,type:t}),n(y(this._txt.csvOk,{ok:o,type:t,linked:r}),"success")}catch(s){n(`${this._txt.csvErr}: ${s.message}`,"error")}finally{this._csvLoading=!1}}}render(){const e=this._txt;return t`
            <section class="svl" aria-labelledby="svl-h">
                <header class="svl-head">
                    <span class="svl-glyph"><iconify-icon icon="ri:database-2-line"></iconify-icon></span>
                    <div>
                        <h2 id="svl-h" class="svl-title">${e.legend}</h2>
                        <p class="svl-hint">${e.hint}</p>
                    </div>
                </header>

                <div class="svl-cards">
                    <article class="svl-card">
                        <div class="svl-card-head">
                            <iconify-icon icon="ri:refresh-line"></iconify-icon>
                            <h3>${e.syncTitle}</h3>
                        </div>
                        <p class="svl-desc">${e.syncDesc}</p>
                        <div class="svl-actions">
                            <web-button ui="modern" theme=${this.theme} type="fill" color="primary" height="38px" rounded="10px"
                                prefix="ri:upload-cloud-2-line" ?loading=${this._syncLoading} @click=${()=>this._dhSyncProducts()}>${e.syncBtn}</web-button>
                        </div>
                    </article>

                    <article class="svl-card">
                        <div class="svl-card-head">
                            <iconify-icon icon="ri:file-excel-2-line"></iconify-icon>
                            <h3>${e.csvTitle}</h3>
                        </div>
                        <p class="svl-desc">${e.csvDesc}</p>
                        <div class="svl-fields">
                            <label class="svl-field svl-field-wide">
                                <span>${e.typeLabel}</span>
                                <web-text ui=${this.ui} theme=${this.theme} height="36px" placeholder=${e.typePlaceholder}
                                    .value=${this._type} @input=${t=>this._dhTypeInput(t)}></web-text>
                            </label>
                            <label class="svl-field">
                                <span>${e.sectorLabel}</span>
                                <select class="svl-select" @change=${t=>{this._sector=t.target.value,this._fn=""}}>
                                    <option value="" ?selected=${!this._sector}>${e.allSectors}</option>
                                    ${this._sectors.map(e=>t`<option value=${e.id} ?selected=${this._sector===e.id}>${e.name?.[this.lang]||e.name?.vi||e.id}</option>`)}
                                </select>
                            </label>
                            <label class="svl-field">
                                <span>${e.fnLabel}</span>
                                <select class="svl-select" @change=${t=>{this._fn=t.target.value}}>
                                    <option value="" ?selected=${!this._fn}>${e.allFns}</option>
                                    ${this._fnOptions.map(e=>t`<option value=${e.fn} ?selected=${this._fn===e.fn}>${e.title}</option>`)}
                                </select>
                            </label>
                        </div>
                        <input type="file" accept=".csv" hidden @change=${t=>this._dhCsvChange(t)} />
                        <div class="svl-actions">
                            <web-button ui="modern" theme=${this.theme} type="outline" color="primary" height="38px" rounded="10px"
                                prefix="ri:file-upload-line" ?loading=${this._csvLoading} @click=${()=>this._dhPickCsv()}>${e.csvBtn}</web-button>
                        </div>
                    </article>
                </div>
            </section>
        `}};customElements.get("svc-learn")||customElements.define("svc-learn",b);export{b as SvcLearn};