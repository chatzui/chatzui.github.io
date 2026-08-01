const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/storager.CHY8swJW.js","_astro/storager.Caz1LaM-.js"])))=>i.map(i=>d[i]);
import{d as e,f as t,r as i}from"./lit.72plP4vO.js";import{t as s}from"./web-bg.DVXs5x4k.js";import{f as r,i as o,t as a}from"./helper.B2FEs72b.js";import"./web-dialog.38xLxqwS.js";import{o as n}from"./firestore.gVvguVbS.js";import{n as l,o as d,r as h,t as c}from"./web-boxs.CdRUlSmf.js";var m=["config"],u=class extends e{createRenderRoot(){return this}static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},container:{type:Boolean},draggable:{type:Boolean},resizable:{type:Boolean},responsive:{type:Boolean},handles:{type:String},unlock:{type:String},sections:{converter:{fromAttribute:e=>{try{return JSON.parse(e)}catch{return[]}}}},owner:{type:Boolean},_items:{state:!0},_live:{state:!0},_ready:{state:!0},_confirmRemove:{state:!0}};constructor(){super(),this.ui="spatial",this.theme="light",this.mainColors="",this.textColor="",this.container=!1,this.draggable=!1,this.resizable=!1,this.responsive=!1,this.handles="absolute",this.unlock="",this.sections=[],this.owner=!1,this._items=[],this._live={},this._ready=!1,this._confirmRemove=null,this._dragIdx=null,this._dragOver=null,this._resizeIdx=null,this._resizeCur=null,this._resizeW0=null,this._resizeX0=null,this._colW=null}connectedCallback(){super.connectedCallback(),a.run(this.unlock);const e=this.querySelector('script[type="application/json"]');if(e){try{this.sections=JSON.parse(e.textContent)}catch{}e.remove()}this._dcInit(),this._unsubConductor=d.subscribe(e=>{this._dcMergeSectionOverrides(e.sections??[]),this._dcSyncVariant(e)})}disconnectedCallback(){super.disconnectedCallback(),this._themeObserver?.disconnect(),this._unsubConductor?.()}willUpdate(e){e.has("sections")&&this.sections.length&&(this._items=this._sortBySortField(this.sections)),e.has("mainColors")&&this._dcApplyColors()}updated(){this.querySelectorAll('.wb-item img:not([draggable="false"])').forEach(e=>{e.draggable=!1})}get _layoutKey(){return`board_layout${location.pathname}`}async _store(){return this._storager||(this._storager=(await n(async()=>{const{default:e}=await import("./storager.CHY8swJW.js");return{default:e}},__vite__mapDeps([0,1]))).default),this._storager}_sortBySortField(e){return[...e].sort((e,t)=>(e.sort??9999)-(t.sort??9999))}async _dcInit(){this.sections.length&&(this._items=this._sortBySortField(this.sections)),this.theme=document.documentElement.getAttribute("data-theme")||"light",this._themeObserver=new MutationObserver(()=>{this.theme=document.documentElement.getAttribute("data-theme")||"light"}),this._themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),this._dcApplyColors(),this._dcInjectStyles(),await this._dcLoadLayout(),await this._dcLoadSections(),this._ready=!0}_dcApplyColors(){if(!this.mainColors)return;const e=this.mainColors.split("|")[0]?.trim();e&&document.documentElement.style.setProperty("--color-primary",e)}_dcInjectStyles(){r("web-board-styles",c+'\n.wb-board{opacity:0;transition:opacity .45s,transform .45s;transform:translateY(10px);gap:0 .5rem!important}.wb-board.is-ready{opacity:1;transform:translateY(0)}.wb-item{transition:opacity .2s,box-shadow .2s;position:relative}.wb-item.is-dragging{opacity:.35;pointer-events:none}.wb-board .wb-item{user-select:text}.wb-item.wb-over:before{content:"";border:2px dashed var(--color-primary,#2ebd85);pointer-events:none;z-index:10;border-radius:.75rem;position:absolute;inset:-3px}.wb-handles{gap:.3rem;display:flex}.wb-handles-absolute{z-index:20;position:absolute;top:.3rem;right:.3rem}.wb-handles-static{justify-content:flex-end;margin:.5rem 0 2px;position:static}.wb-drag-handle,.wb-resize-handle,.wb-config-handle,.wb-remove-handle{cursor:grab;width:2rem;height:2rem;color:var(--color-base-content,#f3f4f6);user-select:none;touch-action:none;background:#ffffff1f;border-radius:2rem;justify-content:center;align-items:center;padding:.5rem;font-size:1.4rem;line-height:1;display:inline-flex}.wb-resize-handle{cursor:col-resize}.wb-config-handle,.wb-remove-handle{cursor:pointer}.wb-remove-handle:hover{background:color-mix(in oklab, var(--color-error,#f5465c) 25%, transparent);color:var(--color-error,#f5465c)}.wb-drag-handle:active{cursor:grabbing}.wb-board.is-resizing{user-select:none}.wb-empty{border:2px dashed var(--color-base-300,#fff3);min-height:200px;color:var(--color-base-content,#f3f4f6);opacity:.6;text-align:center;border-radius:.75rem;justify-content:center;align-items:center;padding:1rem;font-size:.9rem;display:flex}.wb-empty.is-clickable{cursor:pointer}.wb-empty.is-clickable:hover{opacity:.85;border-color:var(--color-primary,#2ebd85)}')}_dcMergeSectionOverrides(e){if(!e.length||!this._items.length)return;let t=!1;const i=this._items.map(i=>{const s=e.find(e=>e.id===i.id);if(!s)return i;const r={};for(const e of m)void 0!==s[e]&&s[e]!==i[e]&&(r[e]=s[e],t=!0);return Object.keys(r).length?{...i,...r}:i});t&&(this._items=i)}_dcSyncVariant(e){void 0!==e.ui&&e.ui!==this.ui&&(this.ui=e.ui),void 0!==e.theme&&e.theme!==this.theme&&(this.theme=e.theme),void 0!==e.mainColors&&e.mainColors!==this.mainColors&&(this.mainColors=e.mainColors),void 0!==e.textColor&&e.textColor!==this.textColor&&(this.textColor=e.textColor)}async _dcSaveLayout(){const e=this._items.map((e,t)=>({id:e.id,col:e.col??"12",sort:t}));(await this._store()).set(this._layoutKey,e,0)}async _dcLoadLayout(){const e=await(await this._store()).get(this._layoutKey);if(!Array.isArray(e)||!e.length)return;const t=new Map(this._items.map(e=>[e.id,e])),i=[...e].sort((e,t)=>(e.sort??0)-(t.sort??0)).map(({id:e,col:i})=>t.has(e)?{...t.get(e),col:i}:null).filter(Boolean),s=new Set(e.map(e=>e.id)),r=this._items.filter(e=>!s.has(e.id));i.length&&(this._items=[...i,...r])}async _dcLoadSections(){const e={};for(const t of this._items)if(!t.component&&!(t.loadLimit>0)&&(t.dataTable||t.dataSrc))try{await l(t.id,{dataTable:t.dataTable,dataSrc:t.dataSrc}),e[t.id]=h(t.id)?.data??[]}catch{e[t.id]=[]}this._live=e}_dhDragStart(e,t){if(!e.currentTarget.draggable)return void e.preventDefault();this._dragIdx=t,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(t));const i=e.currentTarget;requestAnimationFrame(()=>i?.classList.add("is-dragging"))}_dhDragOver(e,t){e.preventDefault(),e.dataTransfer.dropEffect="move",this._dragOver!==t&&(this._dragOver=t,this.requestUpdate())}_dhDragLeave(e,t){this._dragOver===t&&(this._dragOver=null,this.requestUpdate())}_dhDrop(e,t){e.preventDefault();const i=this._dragIdx;if(null==i||i===t)return void this._dhDragEnd(e);const s=[...this._items],[r]=s.splice(i,1);s.splice(t,0,r),this._items=s,this._dragIdx=null,this._dragOver=null,this._dcSaveLayout(),this.dispatchEvent(new CustomEvent("block-reorder",{detail:{sections:this._items},bubbles:!0,composed:!0}))}_dhDragEnd(e){this.querySelectorAll(".wb-item").forEach(e=>{e.draggable=!1,e.classList.remove("is-dragging")}),this._dragIdx=null,this._dragOver=null,this.requestUpdate()}_dhHandleDown(e,t){e.stopPropagation();const i=this.querySelectorAll(".wb-item")[t];if(!i)return;i.draggable=!0;const s=()=>{i.draggable=!1};i.addEventListener("pointerup",s,{once:!0}),i.addEventListener("pointercancel",s,{once:!0})}_dhResizeStart(e,t){e.preventDefault(),e.stopPropagation();const i=this.querySelector(".wb-board"),s=parseFloat(getComputedStyle(i).columnGap)||8;this._colW=(i.getBoundingClientRect().width-11*s)/12,this._resizeIdx=t,this._resizeX0=e.clientX,this._resizeW0=parseInt(this._items[t]?.col)||12,this._resizeCur=this._resizeW0,i.classList.add("is-resizing");const r=e=>this._dhResizeMove(e),o=()=>{this._dhResizeEnd(),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",o)};window.addEventListener("pointermove",r),window.addEventListener("pointerup",o)}_dhResizeMove(e){if(null==this._resizeIdx)return;const t=Math.max(1,Math.min(12,this._resizeW0+Math.round((e.clientX-this._resizeX0)/this._colW)));if(this._resizeCur===t)return;this._resizeCur=t;const i=this.querySelectorAll(".wb-item")[this._resizeIdx];if(i){for(let e=1;e<=12;e++)i.classList.remove(`gi-col-${e}`);i.classList.add(`gi-col-${t}`)}}_dhResizeEnd(){if(null==this._resizeIdx)return;const e=this._resizeIdx,t=String(this._resizeCur);if(this._resizeIdx=null,this.querySelector(".wb-board")?.classList.remove("is-resizing"),String(this._items[e]?.col)!==t){const i=[...this._items];i[e]={...i[e],col:t},this._items=i,this._dcSaveLayout(),this.dispatchEvent(new CustomEvent("block-resize",{detail:{sections:this._items},bubbles:!0,composed:!0}))}}_dhConfigure(e,t){this.dispatchEvent(new CustomEvent("section-configure",{detail:{sectionId:e.id,index:t},bubbles:!0,composed:!0}))}_dhRemoveClick(e,t){this._confirmRemove={sec:e,i:t}}_dhConfirmRemove(){const e=this._confirmRemove;this._confirmRemove=null,e&&this.dispatchEvent(new CustomEvent("section-remove",{detail:{sectionId:e.sec.id,index:e.i},bubbles:!0,composed:!0}))}_dhCancelRemove(){this._confirmRemove=null}_rbEmpty(e,t){const s=this.owner&&e.configList?.length>0;return i`
            <div class="wb-empty${s?" is-clickable":""}"
                @click=${s?()=>this._dhConfigure(e,t):null}>
                ${s?"Chọn section":"Chưa có nội dung"}
            </div>
        `}_rfConfirmRemoveDialog(){return this.owner&&this._confirmRemove?i`
            <web-dialog open title="Xóa section?" ui=${this.ui} theme=${this.theme} maxWidth="360px" persistent
                @confirm=${this._dhConfirmRemove} @cancel=${this._dhCancelRemove}>
                <p>Bạn có chắc muốn xóa section này? Hành động này không thể hoàn tác.</p>
            </web-dialog>
        `:""}_rbBoxs(e){if(e.component){const i=e.dataSrc?` dataSrc="${e.dataSrc}"`:"",s=e.dataTable?` dataTable="${e.dataTable}"`:"",r=Object.entries(e).filter(([e])=>e.startsWith("dataSrc")&&"dataSrc"!==e).map(([e,t])=>` ${e.replace(/([A-Z])/g,e=>"-"+e.toLowerCase())}="${t}"`).join("");return t(`<div class="${e.container?"gi-container":""}"><${e.component} ui="${this.ui}" theme="${this.theme}" mainColors="${this.mainColors}" textColor="${this.textColor}"${i}${s}${r}></${e.component}></div>`)}const r={sectionId:e.id,emptyText:e.emptyText||"",tags:e.tags?.data??[],field:e.tags?.filterField??"tags",color:e.tags?.filterColor??"primary",active:[],query:"",...e.filterState||{}},a=e.loadLimit>0&&(e.dataTable||e.dataSrc),n=a||!e.dataTable&&!e.dataSrc?e.data||[]:this._live[e.id]??[],l=e.list??(e.config?.slider?"slider":""),d=s(e.config?.tiers?.length?e.config?.bg:null);return i`
        <div style="position:relative;${o(e.stys||{})}">
            ${d}
            <div class="${e.container?"gi-container":""}">
                ${a?i`
                <web-boxs
                    .config=${e.config||{}}
                    .dataSrc=${e.dataSrc||""}
                    .dataTable=${e.dataTable||""}
                    .loadLimit=${e.loadLimit}
                    .col=${e.col}
                    .filterState=${r}
                    .stysWrap=${{gap:"1rem"}}
                    .mainColors=${this.mainColors}
                    .textColor=${this.textColor}
                    animeQueue="150ms"
                    list=${l}
                    ui=${this.ui}
                    theme=${this.theme}
                    ?showSearch=${!!e.showSearch}
                    ?masonry=${!!e.masonry}
                    ?responsive=${e.responsive??this.responsive}
                ></web-boxs>
                `:i`
                <web-boxs
                    .config=${e.config||{}}
                    .data=${n}
                    .col=${e.col}
                    .filterState=${r}
                    .stysWrap=${{gap:"1rem"}}
                    .mainColors=${this.mainColors}
                    .textColor=${this.textColor}
                    animeQueue="150ms"
                    list=${l}
                    ui=${this.ui}
                    theme=${this.theme}
                    ?showSearch=${!!e.showSearch}
                    ?masonry=${!!e.masonry}
                    ?responsive=${e.responsive??this.responsive}
                ></web-boxs>
                `}
            </div>
        </div>
        `}render(){return i`
            <div class="gi-wrap wb-board${this.responsive?" responsive":""}${this._ready?" is-ready":""}">
                ${this._items.map((e,t)=>i`
                    <div
                        id="${e.id}"
                        class="gi gi-col-${e.col||"12"} wb-item${this._dragOver===t?" wb-over":""}"
                        data-section="${e.id||t}"
                        @dragstart=${this.draggable?e=>this._dhDragStart(e,t):null}
                        @dragover=${this.draggable?e=>this._dhDragOver(e,t):null}
                        @dragleave=${this.draggable?e=>this._dhDragLeave(e,t):null}
                        @drop=${this.draggable?e=>this._dhDrop(e,t):null}
                        @dragend=${this.draggable?e=>this._dhDragEnd(e):null}
                    >
                        ${this.draggable||this.resizable||this.owner&&e.configList?.length?i`
                        <div class="wb-handles wb-handles-${"static"===this.handles?"static":"absolute"}">
                            ${this.owner&&this.draggable?i`<span class="wb-drag-handle"   @pointerdown=${e=>this._dhHandleDown(e,t)}>⠿</span>`:""}
                            ${this.owner&&this.resizable?i`<span class="wb-resize-handle" @pointerdown=${e=>this._dhResizeStart(e,t)}>↔</span>`:""}
                            ${this.owner&&e.configList?.length?i`<span class="wb-config-handle" @click=${()=>this._dhConfigure(e,t)}>⚙</span>`:""}
                            ${this.owner&&e.configList?.length?i`<span class="wb-remove-handle" @click=${()=>this._dhRemoveClick(e,t)}>⤫</span>`:""}
                        </div>`:""}
                        ${void 0===e.configKey||e.config?this._rbBoxs(e):this._rbEmpty(e,t)}
                    </div>
                `)}
            </div>
            ${this._rfConfirmRemoveDialog()}
        `}};customElements.get("web-board")||customElements.define("web-board",u);