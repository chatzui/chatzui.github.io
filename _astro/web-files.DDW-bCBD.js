import{a as e,l as t,t as i}from"./lit.Db6wVdDu.js";import{t as o}from"./pastel.ChvuEMaS.js";var r={vi:{dropLabel:"Click hoặc kéo thả để tải lên"},en:{dropLabel:"Click or drag files to upload"}},s=class extends i{static shadowRootOptions={mode:"open"};static styles=[t(o),t(':host{--core-font:var(--font-sans,"system-ui");width:100%;display:block}.web-files{font-family:var(--core-font);flex-direction:column;gap:16px;display:flex}.drop-zone{border:2px dashed var(--color-base-300,#393939);text-align:center;background:var(--color-base-100,#0d0d0d);cursor:pointer;color:var(--color-base-content,#fff);border-radius:12px;flex-direction:column;justify-content:center;align-items:center;padding:32px 24px;transition:all .3s cubic-bezier(.4,0,.2,1);display:flex}.drop-zone:hover,.drop-zone.dragging{border-color:var(--color-primary,#34ace0);background:var(--color-base-200,#232323);transform:scale(1.01)}.drop-zone svg{opacity:.6;width:40px;height:40px;margin-bottom:12px;transition:transform .3s}.drop-zone:hover svg{color:var(--color-primary,#34ace0);transform:translateY(-4px)}.file-list{flex-direction:column;gap:10px;display:flex}.file-item{background:var(--color-base-200,#232323);border:1px solid var(--color-base-300,#393939);border-radius:10px;align-items:center;gap:12px;padding:10px 16px;font-size:.875rem;transition:all .2s;display:flex}.file-item:hover{border-color:var(--color-primary,#34ace0);background:var(--color-base-300,#393939)}.file-info{flex-direction:column;flex:1;display:flex;overflow:hidden}.file-name{white-space:nowrap;text-overflow:ellipsis;color:var(--color-base-content,#fff);font-weight:600;overflow:hidden}.file-size{opacity:.6;margin-top:2px;font-size:11px}.remove-btn{cursor:pointer;opacity:.5;border-radius:50%;justify-content:center;align-items:center;padding:6px;transition:all .2s;display:flex}.remove-btn:hover{opacity:1;color:var(--color-secondary,#706fd3);background:#f5465c1a}.pastel.web-files .drop-zone{background:var(--pastel-corner);border:2px dashed var(--pastel-line-hi);border-radius:var(--radius-box)}.pastel.web-files .drop-zone:hover,.pastel.web-files .drop-zone.dragging{background:var(--pastel-corner-hi);border-color:var(--pastel-a)}.pastel.web-files .file-item{background:var(--pastel-corner);border:1px solid var(--pastel-line);border-radius:var(--radius-box)}')];static properties={multiple:{type:Boolean},accept:{type:String},files:{type:Array,state:!0},theme:{type:String},ui:{type:String},txt:{type:Object},lang:{type:String}};static get uiConfigs(){return{modern:{wrap:"modern web-files",drop:"drop-zone",item:"file-item"},pastel:{wrap:"pastel web-files",drop:"drop-zone",item:"file-item"}}}constructor(){super(),this.multiple=!1,this.accept="*",this.files=[],this.theme="",this.ui="modern",this.txt=null,this.lang="vi"}updated(e){e.has("theme")&&this.theme&&this.setAttribute("data-theme",this.theme),e.has("theme")&&!this.theme&&this.removeAttribute("data-theme")}_handleClick(){this.shadowRoot.querySelector('input[type="file"]').click()}_handleFileChange(e){const t=Array.from(e.target.files);this.multiple?this.files=[...this.files,...t]:this.files=t,this._dispatchEvent()}_removeFile(e){this.files=this.files.filter((t,i)=>i!==e),this._dispatchEvent()}_dispatchEvent(){this.dispatchEvent(new CustomEvent("change",{detail:{files:this.files},bubbles:!0,composed:!0}))}_formatSize(e){if(0===e)return"0 B";const t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["B","KB","MB","GB"][t]}get _txt(){const e=this.txt??r;return e[this.lang]??e.vi??{}}render(){const t=this.constructor.uiConfigs[this.ui||"modern"];return e`
      <div class="${t.wrap}">
        <input type="file" style="display: none" .multiple=${this.multiple} .accept=${this.accept} @change=${this._handleFileChange}>
        
        <div class="${t.drop}" @click=${this._handleClick}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          <div class="label">${this._txt.dropLabel}</div>
        </div>

        <div class="file-list">
          ${this.files.map((i,o)=>e`
            <div class="${t.item}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
              <div class="file-info">
                <div class="file-name">${i.name}</div>
                <div class="file-size">${this._formatSize(i.size)}</div>
              </div>
              <div class="remove-btn" @click=${()=>this._removeFile(o)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
          `)}
        </div>
      </div>
    `}};customElements.get("web-files")||customElements.define("web-files",s);