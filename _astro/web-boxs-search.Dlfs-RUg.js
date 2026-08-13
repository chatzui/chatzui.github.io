import{l as t,o as e,t as r}from"./lit.PcferLoS.js";import"./web-text.UmdERZzW.js";var i={vi:{ph:"Tìm kiếm...",clear:"Xoá lọc"},en:{ph:"Search...",clear:"Clear filter"}},s=class extends r{static properties={items:{type:Array},tags:{type:Array},field:{type:String},multi:{type:Boolean},color:{type:String},ui:{type:String},placeholder:{type:String},txt:{type:Object},lang:{type:String},active:{type:Array},query:{type:String}};static styles=t`
        :host { display: block; width: 100%; margin-bottom: 1.25rem; }
        .wbs-wrap { display: flex; flex-direction: column; gap: 0.75rem; }
        .wbs-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 2px; }
        .wbs-chip {
            padding: 0.35rem 0.9rem;
            border-radius: 99px;
            border: 1px solid #ffffff4d;
            background: color-mix(in oklab, var(--color-base-300, #393939) 30%, transparent);
            backdrop-filter: blur(25px);
            color: var(--color-base-content, inherit);
            font-size: 0.82rem;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            white-space: nowrap;
        }
        .wbs-chip:hover {
            background: var(--color-base-300, rgba(127,127,127,0.15));
            border-color: var(--color-primary, currentColor);
        }
        .wbs-chip.active {
            background: var(--wbs-active-bg, var(--color-primary));
            color: var(--wbs-active-text, #fff);
            border-color: transparent;
            box-shadow: 0 4px 12px var(--wbs-active-shadow, rgba(0,0,0,0.15));
        }
        .wbs-chip.clear {
            color: var(--color-error, #f5465c);
            border-color: var(--color-error, #f5465c);
        }
        .wbs-chip.clear:hover {
            background: var(--color-error, #f5465c);
            border-color: transparent;
            color: #fff;
        }
    `;constructor(){super(),this.items=[],this.field="tags",this.multi=!1,this.color="primary",this.ui="modern",this.placeholder="",this.txt=null,this.lang="vi",this.active=[],this.query="",this._active=new Set,this._query="",this._timer=null}willUpdate(t){t.has("active")&&(this._active=new Set(this.active||[])),t.has("query")&&(this._query=this.query||"")}get _extractedTags(){if(this.tags?.length)return[...this.tags];const t=new Set;for(const e of this.items||[]){const r=e[this.field];Array.isArray(r)?r.forEach(e=>e&&t.add(String(e))):"string"==typeof r&&r.split("|").filter(Boolean).forEach(e=>t.add(e))}return[...t].sort()}get _colorVars(){const t={primary:{bg:"var(--color-primary)",text:"#fff",shadow:"rgba(46,189,133,0.3)"},secondary:{bg:"var(--color-secondary)",text:"#fff",shadow:"rgba(245,70,92,0.3)"},accent:{bg:"var(--color-accent)",text:"#fff",shadow:"rgba(168,85,247,0.3)"}};return t[this.color]||t.primary}_toggle(t){if(this.multi)this._active.has(t)?this._active.delete(t):this._active.add(t);else{const e=this._active.has(t);this._active.clear(),e||this._active.add(t)}this.requestUpdate(),this._emit()}_clear(){this._active.clear(),this._query="",this.requestUpdate(),this._emit()}_onSearch(t){if(!t.detail)return;clearTimeout(this._timer);const e=t.detail.value??"";this._timer=setTimeout(()=>{this._query=e,this._emit()},200)}_emit(){this.dispatchEvent(new CustomEvent("filter",{detail:{active:[...this._active],query:this._query,field:this.field},bubbles:!0,composed:!0}))}get _txt(){const t=this.txt??i;return t[this.lang]??t.vi??{}}render(){const t=this._extractedTags,r=this._colorVars,i=this._active.size>0||this._query;return e`
            <div class="wbs-wrap" style="
                --wbs-active-bg:${r.bg};
                --wbs-active-text:${r.text};
                --wbs-active-shadow:${r.shadow};
            ">
                <web-text
                    type="search"
                    .value=${this._query}
                    .ui=${this.ui}
                    .placeholder=${this.placeholder||this._txt.ph}
                    height="45px"
                    @input=${this._onSearch}
                ></web-text>

                ${t.length?e`
                    <div class="wbs-chips">
                        ${t.map(t=>e`
                            <button
                                class="wbs-chip ${this._active.has(t)?"active":""}"
                                @click=${()=>this._toggle(t)}
                            >
                                ${t}
                                ${this._active.has(t)?e`
                                    <iconify-icon icon="ri:close-line"></iconify-icon>
                                `:""}
                            </button>
                        `)}
                        ${i?e`
                            <button class="wbs-chip clear" @click=${this._clear}>
                                <iconify-icon icon="ri:filter-off-line"></iconify-icon>
                                ${this._txt.clear}
                            </button>
                        `:""}
                    </div>
                `:""}
            </div>
        `}};customElements.get("web-boxs-search")||customElements.define("web-boxs-search",s);