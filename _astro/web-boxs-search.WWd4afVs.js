import{a as t,l as e,t as r}from"./lit.Db6wVdDu.js";import"./web-button.DzrrIr-d.js";import{t as i}from"./pastel.ChvuEMaS.js";import{m as s}from"./util.BubxWusL.js";import{a,i as n}from"./lingo.DeJvicYs.js";import"./web-text.DJCnRip-.js";import"./web-tooltip.DvfV2oqy.js";import"./web-select.DHhsJOoT.js";function o(t,e="vi"){return!t||"object"!=typeof t||Array.isArray(t)||void 0===t.vi&&void 0===t.en?t:n(t,e)??Object.values(t)[0]}function l(t){return null!==t&&"object"==typeof t&&!Array.isArray(t)}function h(...t){const e={};for(const r of t)if(l(r))for(const[t,i]of Object.entries(r)){if(void 0===i)continue;const r=e[t];e[t]=l(r)&&l(i)?h(r,i):Array.isArray(i)?[...i]:i}return e}var c=new WeakMap;function p(t,e={},r=[]){if(!t)return{};if(r.includes(t))throw new Error(`Circular preset inheritance: ${[...r,t].join(" → ")}`);const i=c.get(e)??new Map;if(i.has(t))return i.get(t);const s=e[t];if(!s)throw new Error(`Unknown preset: ${t}`);const a=h(s.extends?p(s.extends,e,[...r,t]):{},s);return i.set(t,a),c.set(e,i),a}function u(t,e={}){const r=h(t.preset?p(t.preset,e):{},{render:t.render,style:t.style,props:t.props});return{render:r.render,style:r.style||{},props:r.props||{}}}function d(t,e){return e.split(".").reduce((t,e)=>t?.[e],t)}function g(t,e={}){if(t)return"$item"===t?e.item:"$index"===t?e.index:"$records"===t?e.records:t.startsWith("$item.")?d(e.item,t.slice(6)):d(e.record,t)}function m(t,e){return o(void 0!==t.value?t.value:void 0!==t.source?g(t.source,e):void 0,e.lang)}function f(t,e){const r="$records"===t?e.records:g(t,e);return Array.isArray(r)?r:[]}function b(t,e){if(void 0===t.when)return!0;if("boolean"==typeof t.when)return t.when;const r=t.when.startsWith("!"),i=g(r?t.when.slice(1):t.when,e);return r?!i:!!i}var w=new Set(["overflow","position","top","right","bottom","left","inset","zIndex","alignSelf","flex","flexGrow","flexShrink","flexBasis","order"]);function v(t,e,r={}){const{render:i,style:s,props:a}=u(t,r),{host:n,inner:o}=function(t={}){const e={},r={},i=void 0!==t.borderRadius;for(const[s,a]of Object.entries(t))(!w.has(s)||"overflow"===s&&i?r:e)[s]=a;return/%$/.test(String(r.width??""))&&"100%"!==r.width&&(e.width=r.width,r.width="100%"),{host:e,inner:r}}("string"==typeof s?g(s,e)||{}:s||{});return{host:n,inner:o,render:i,props:a}}function y(t){return Array.isArray(t?.children)&&void 0===t.each&&t.bg||null}var x=["primary","secondary","accent","info","warning"],_=["#2ebd85","#f5465c","#a855f7","#00c7d4","#fbbf24"];function $(t="",e=""){const r=String(t??"").split("|").map(t=>t.trim()),i={};return x.forEach((t,e)=>{i[`--color-${t}`]=r[e]??_[e]}),i["--color-base-content"]=e||"inherit",i}var k=new Set(["http","https","mailto","tel"]);function S(t,e="#"){const r=String(t??"").trim();if(!r)return e;const i=/^([a-z][a-z0-9+.-]*):/i.exec(r.replace(/[\u0000- \u007f]/g,""));return!i||k.has(i[1].toLowerCase())?r:e}var A=new WeakMap;function q(t,{search:e="",query:r="",active:i=[],field:a="tags",range:n=null,rangeField:o="pricing"}={}){let l=Array.isArray(t)?t:[];const h=[e,r].filter(Boolean).map(s);if(h.length&&(l=l.filter(t=>h.every(e=>function(t){if(!t||"object"!=typeof t)return s(String(t??""));let e=A.get(t);return void 0===e&&(e=s(JSON.stringify(t)),A.set(t,e)),e}(t).includes(e)))),i.length&&(l=l.filter(t=>{const e=function(t,e="tags"){const r=t?.[e];return Array.isArray(r)?r:"string"==typeof r?r.split("|").filter(Boolean):[]}(t,a);return i.some(t=>e.includes(t))})),n){const{min:t=0,max:e=1/0}=n;l=l.filter(r=>{const i=function(t,e="pricing"){const r=parseFloat(String(t?.[e]??"").split("~")[0]);return Number.isFinite(r)?r:NaN}(r,o);return Number.isFinite(i)&&i>=(t??0)&&i<(e??1/0)})}return l}var j=class extends r{static shadowRootOptions={mode:"open"};static styles=[e(i),e(':host{--core-font:var(--font-sans,"system-ui");width:100%;display:block}.web-ranger{width:100%;font-family:var(--core-font);user-select:none;padding-top:1.5rem;position:relative}.web-ranger.disabled{opacity:.5;pointer-events:none}.wr-value{color:var(--color-base-content,#fff);white-space:nowrap;pointer-events:none;font-size:.8rem;font-weight:700;position:absolute;top:0;transform:translate(-50%)}.wr-track-wrap{padding:10px 0;position:relative}.wr-input{-webkit-appearance:none;appearance:none;cursor:pointer;background:0 0;width:100%;height:6px;margin:0;display:block}.wr-input:disabled{cursor:not-allowed}.wr-input::-webkit-slider-runnable-track{background:linear-gradient(to right, var(--wr-color,var(--color-primary,#34ace0)) var(--wr-fill,0%), var(--color-base-300,#d1d5db) var(--wr-fill,0%));border-radius:999px;height:6px}.wr-input::-moz-range-track{background:var(--color-base-300,#d1d5db);border-radius:999px;height:6px}.wr-input::-moz-range-progress{background:var(--wr-color,var(--color-primary,#34ace0));border-radius:999px 0 0 999px;height:6px}.wr-input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:var(--color-base-100,#fff);border:3px solid var(--wr-color,var(--color-primary,#34ace0));cursor:pointer;border-radius:50%;width:18px;height:18px;margin-top:-6px;transition:transform .15s;box-shadow:0 1px 3px #00000040}.wr-input::-webkit-slider-thumb:hover{transform:scale(1.1)}.wr-input::-moz-range-thumb{background:var(--color-base-100,#fff);border:3px solid var(--wr-color,var(--color-primary,#34ace0));cursor:pointer;border-radius:50%;width:18px;height:18px;transition:transform .15s;box-shadow:0 1px 3px #00000040}.wr-input::-moz-range-thumb:hover{transform:scale(1.1)}.wr-ticks{height:6px;margin-top:4px;position:relative}.wr-tick{background:var(--color-base-300,#d1d5db);width:1px;height:6px;position:absolute;top:0;transform:translate(-50%)}.wr-minmax{color:color-mix(in oklab, var(--color-base-content,#fff) 60%, transparent);justify-content:space-between;margin-top:4px;font-size:.7rem;display:flex}.pastel.web-ranger .wr-input::-webkit-slider-runnable-track{background:linear-gradient(to right, var(--pastel-a), var(--pastel-b)) 0 0 / var(--wr-fill,0%) 100% no-repeat, var(--pastel-hover)}.pastel.web-ranger .wr-input::-moz-range-track{background:var(--pastel-hover)}.pastel.web-ranger .wr-input::-moz-range-progress{background:linear-gradient(to right, var(--pastel-a), var(--pastel-b))}')];static properties={min:{type:Number},max:{type:Number},step:{type:Number},value:{type:Number},disabled:{type:Boolean},ticks:{type:Array},showValue:{type:Boolean},showMinMax:{type:Boolean},format:{attribute:!1},color:{type:String},ui:{type:String},theme:{type:String}};static get uiConfigs(){return{modern:{wrap:"modern web-ranger"},pastel:{wrap:"pastel web-ranger"}}}constructor(){super(),this.min=0,this.max=100,this.step=1,this.value=0,this.disabled=!1,this.ticks=[],this.showValue=!0,this.showMinMax=!0,this.format=null,this.color="primary",this.ui="modern",this.theme=""}updated(t){t.has("theme")&&this.theme?this.setAttribute("data-theme",this.theme):t.has("theme")&&!this.theme&&this.removeAttribute("data-theme")}_pctOf(t){const e=this.max-this.min;return e>0?Math.min(100,Math.max(0,(t-this.min)/e*100)):0}_display(t){return"function"==typeof this.format?this.format(t):t}_handleInput(t){t.stopPropagation(),this.value=Number(t.target.value),this._emit("input")}_handleChange(t){t.stopPropagation(),this.value=Number(t.target.value),this._emit("change")}_emit(t){this.dispatchEvent(new CustomEvent(t,{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const e=this.constructor.uiConfigs[this.ui||"modern"],r=this._pctOf(this.value),i=9-r/100*18;return t`
            <div class="${e.wrap} ${this.disabled?"disabled":""}" style="--wr-color: var(--color-${this.color||"primary"})">
                ${this.showValue?t`
                    <div class="wr-value" style="left: calc(${r}% + ${i}px)">${this._display(this.value)}</div>
                `:""}
                <div class="wr-track-wrap">
                    <input
                        type="range"
                        class="wr-input"
                        style="--wr-fill: ${r}%"
                        min=${this.min}
                        max=${this.max}
                        step=${this.step}
                        .value=${String(this.value)}
                        ?disabled=${this.disabled}
                        @input=${this._handleInput}
                        @change=${this._handleChange}
                    />
                    ${this.ticks?.length?t`
                        <div class="wr-ticks">
                            ${this.ticks.map(e=>t`<span class="wr-tick" style="left: ${this._pctOf(e)}%"></span>`)}
                        </div>
                    `:""}
                </div>
                ${this.showMinMax?t`
                    <div class="wr-minmax">
                        <span>${this._display(this.min)}</span>
                        <span>${this._display(this.max)}</span>
                    </div>
                `:""}
            </div>
        `}};customElements.get("web-ranger")||customElements.define("web-ranger",j);var z={vi:{ph:"Tìm kiếm...",clear:"Xoá lọc",filter:"Lọc theo nhãn",more:"Xem thêm nhãn"},en:{ph:"Search...",clear:"Clear filter",filter:"Filter by tag",more:"More tags"}},M=class extends r{static properties={items:{type:Array},tags:{type:Array},field:{type:String},multi:{type:Boolean},color:{type:String},ui:{type:String},placeholder:{type:String},txt:{type:Object},lang:{type:String},active:{type:Array},query:{type:String},ranges:{type:Array},range:{type:String},_expanded:{state:!0}};static styles=[e(":host{width:100%;margin-bottom:1.25rem;display:block}.wbs-wrap{flex-direction:column;gap:.75rem;display:flex}.wbs-chips{flex-wrap:wrap;align-items:center;gap:.5rem;padding:2px;display:flex}.wbs-filter-select{flex-shrink:0}.wbs-filter-trigger{border-radius:99px}.wbs-range{align-items:center;gap:1rem;padding:2px;display:flex}.wbs-range web-ranger{flex:auto;min-width:0}")];constructor(){super(),this.items=[],this.field="tags",this.multi=!1,this.color="primary",this.ui="modern",this.placeholder="",this.txt=null,this.lang="vi",this.active=[],this.query="",this.ranges=[],this.range="",this._active=new Set,this._query="",this._rangeKey="",this._timer=null,this._expanded=!1}willUpdate(t){t.has("active")&&(this._active=new Set(this.active||[])),t.has("query")&&(this._query=this.query||""),t.has("range")&&(this._rangeKey=this.range||"")}get _extractedTags(){if(this.tags?.length)return[...this.tags];const t=new Set;for(const e of this.items||[]){const r=e[this.field];Array.isArray(r)?r.forEach(e=>e&&t.add(String(e))):"string"==typeof r&&r.split("|").filter(Boolean).forEach(e=>t.add(e))}return[...t].sort()}_toggle(t){if(this.multi)this._active.has(t)?this._active.delete(t):this._active.add(t);else{const e=this._active.has(t);this._active.clear(),e||this._active.add(t)}this.requestUpdate(),this._emit()}_clearTags(){this._active.clear(),this._query="",this.requestUpdate(),this._emit()}_clearRange(){this._rangeKey="",this.requestUpdate(),this._emit()}_toggleRange(t){this._rangeKey=this._rangeKey===t?"":t,this.requestUpdate(),this._emit()}_onRangeSlide(t){const e=this.ranges[t.detail.value]?.key||"";e!==this._rangeKey&&(this._rangeKey=e,this._emit())}_locLabel(t){return null==t?"":o(t,this.lang)}_onSelectChange(t){const e=t.detail.value;this.multi?this._active=new Set(Array.isArray(e)?e:[]):(this._active.clear(),e&&this._active.add(e)),this.requestUpdate(),this._emit()}_showMore(){this._expanded=!0}_onSearch(t){if(!t.detail)return;clearTimeout(this._timer);const e=t.detail.value??"";this._timer=setTimeout(()=>{this._query=e,this._emit()},200)}_emit(){const t=(this.ranges||[]).find(t=>t.key===this._rangeKey)||null;this.dispatchEvent(new CustomEvent("filter",{detail:{active:[...this._active],query:this._query,field:this.field,range:t},bubbles:!0,composed:!0}))}get _txt(){return a(this.txt,z,this.lang)}render(){const e=this._extractedTags,r=this._active.size>0||this._query,i=!!this._rangeKey,s=this._expanded||e.length<=9,a=s?e:e.slice(0,9),n=!s&&e.length>9,o=this.multi?[...this._active]:[...this._active][0]??null;return t`
            <div class="wbs-wrap">
                <web-text
                    type="search"
                    .value=${this._query}
                    .ui=${this.ui}
                    .placeholder=${this.placeholder||this._txt.ph}
                    height="45px"
                    @input=${this._onSearch}
                ></web-text>

                ${e.length?t`
                    <div class="wbs-chips">
                        <web-select
                            class="wbs-filter-select"
                            .options=${e.map(t=>({label:t,value:t}))}
                            .value=${o}
                            .multiple=${this.multi}
                            .ui=${this.ui}
                            height="32px"
                            @change=${this._onSelectChange}
                        >
                            <web-button
                                slot="trigger"
                                class="wbs-filter-trigger"
                                type="outline"
                                square
                                height="32px"
                                fontSize="1rem"
                                .ui=${this.ui}
                                prefix="ri:filter-3-line"
                                .label=${this._txt.filter}
                            ></web-button>
                        </web-select>
                        ${a.map(e=>t`
                            <web-button
                                .type=${this._active.has(e)?"fill":"outline"}
                                .color=${this._active.has(e)?this.color:""}
                                .ui=${this.ui}
                                .suffix=${this._active.has(e)?"ri:close-line":""}
                                height="32px"
                                fontSize="0.82rem"
                                rounded="99px"
                                @click=${()=>this._toggle(e)}
                            >${e}</web-button>
                        `)}
                        ${n?t`
                            <web-button
                                type="outline"
                                .ui=${this.ui}
                                height="32px"
                                fontSize="0.82rem"
                                rounded="99px"
                                square
                                prefix="ri:more-line"
                                .label=${this._txt.more}
                                @click=${this._showMore}
                            ></web-button>
                        `:""}
                        ${r?t`
                            <web-tooltip .ui=${this.ui} placement="top">
                                <web-button
                                    type="outline"
                                    color="error"
                                    .ui=${this.ui}
                                    height="32px"
                                    fontSize="0.9rem"
                                    rounded="50%"
                                    square
                                    prefix="ri:filter-off-line"
                                    .label=${this._txt.clear}
                                    @click=${this._clearTags}
                                ></web-button>
                                <span slot="content">${this._txt.clear}</span>
                            </web-tooltip>
                        `:""}
                    </div>
                `:""}

                ${this.ranges?.length?t`
                    <div class="wbs-range">
                        <web-ranger
                            .min=${0}
                            .max=${this.ranges.length-1}
                            .step=${1}
                            .value=${Math.max(0,this.ranges.findIndex(t=>t.key===this._rangeKey))}
                            .ticks=${this.ranges.map((t,e)=>e)}
                            .format=${t=>this._locLabel(this.ranges[t]?.label)}
                            .color=${this.color}
                            .ui=${this.ui}
                            .lang=${this.lang}
                            @input=${this._onRangeSlide}
                        ></web-ranger>
                        ${i?t`
                            <web-tooltip .ui=${this.ui} placement="top">
                                <web-button
                                    type="outline"
                                    color="error"
                                    .ui=${this.ui}
                                    height="32px"
                                    fontSize="0.9rem"
                                    rounded="50%"
                                    square
                                    prefix="ri:filter-off-line"
                                    .label=${this._txt.clear}
                                    @click=${this._clearRange}
                                ></web-button>
                                <span slot="content">${this._txt.clear}</span>
                            </web-tooltip>
                        `:""}
                    </div>
                `:""}
            </div>
        `}};customElements.get("web-boxs-search")||customElements.define("web-boxs-search",M);export{v as a,b as c,o as i,S as l,q as n,g as o,f as r,m as s,$ as t,y as u};