import{d as t,l as o,r as e}from"./lit.72plP4vO.js";import"./web-cropper.4CGCN2iz.js";var i={vi:{add:"Thêm ảnh",cropTitle:"Chỉnh ảnh",cancel:"Hủy",done:"Xong"},en:{add:"Add Photo",cropTitle:"Edit Photo",cancel:"Cancel",done:"Done"}},r=class extends t{static styles=[o(':host{--core-blur:var(--haze-blur,12px);--core-glass:var(--haze-glass,20%);--core-font:var(--font-sans,"system-ui");width:100%;display:block}.photo-grid{font-family:var(--core-font);grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:16px;display:grid}.photo-item,.upload-btn{aspect-ratio:1;background:var(--color-base-100,#0d0d0d);border:1px solid var(--color-base-300,#393939);border-radius:12px;transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}.upload-btn{cursor:pointer;color:var(--color-base-content,#fff);opacity:.7;flex-direction:column;justify-content:center;align-items:center;display:flex}.upload-btn:hover{opacity:1;border-color:var(--color-primary,#2ebd85);background:var(--color-base-200,#232323);transform:translateY(-4px);box-shadow:0 8px 20px #0003}.upload-btn svg{width:28px;height:28px;margin-bottom:6px;transition:transform .3s}.upload-btn:hover svg{transform:scale(1.1)}.upload-btn span{font-size:12px;font-weight:500}.photo-item:hover{transform:translateY(-4px);box-shadow:0 8px 25px #0000004d}.photo-item img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%;transition:transform .5s;display:block}.photo-item:hover img{transform:scale(1.05)}.remove-btn{backdrop-filter:blur(4px);color:#fff;cursor:pointer;z-index:2;background:#0000008c;border:1px solid #fff3;border-radius:50%;justify-content:center;align-items:center;width:24px;height:24px;transition:all .2s;display:flex;position:absolute;top:6px;right:6px}.remove-btn:hover{background:var(--color-secondary,#f5465c);transform:scale(1.1)rotate(90deg)}.remove-btn svg{stroke-width:2.5px;width:14px;height:14px}.modal-backdrop{-webkit-backdrop-filter:blur(6px);z-index:99;background:#000000b8;justify-content:center;align-items:center;width:100%;height:100%;margin:0;animation:.18s backdrop-in;display:flex;position:fixed;inset:0}@keyframes backdrop-in{0%{opacity:0}to{opacity:1}}.modal-card{background:#141414;border:1px solid #ffffff12;border-radius:16px;flex-direction:column;width:min(520px,96vw);max-height:92vh;animation:.2s cubic-bezier(.34,1.56,.64,1) card-in;display:flex;overflow:hidden;box-shadow:0 24px 64px #0009}@keyframes card-in{0%{opacity:0;transform:scale(.93)translateY(10px)}to{opacity:1;transform:scale(1)translateY(0)}}.modal-header{color:#ffffffe6;border-bottom:1px solid #ffffff12;flex-shrink:0;justify-content:space-between;align-items:center;padding:14px 16px;font-size:14px;font-weight:600;display:flex}.modal-close{color:#ffffff80;cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;width:28px;height:28px;padding:0;transition:all .15s;display:flex}.modal-close:hover{color:#fff;background:#ffffff14}.modal-close svg{width:16px;height:16px}.modal-body{flex:1;min-height:0;overflow:hidden}web-cropper{max-height:62vh;display:block}.modal-footer{border-top:1px solid #ffffff12;flex-shrink:0;justify-content:flex-end;gap:8px;padding:12px 16px;display:flex}.btn{cursor:pointer;border:none;border-radius:8px;height:36px;padding:0 18px;font-family:inherit;font-size:13px;font-weight:500;transition:all .15s}.btn-cancel{color:#ffffffb3;background:#ffffff12;border:1px solid #ffffff1a}.btn-cancel:hover{color:#fff;background:#ffffff1f}.btn-apply{background:var(--color-primary,#2ebd85);color:#fff}.btn-apply:hover{filter:brightness(1.1);transform:translateY(-1px);box-shadow:0 4px 12px #2ebd8559}:host([ui=spatial]) .photo-item,:host([ui=spatial]) .upload-btn{background:color-mix(in oklab, var(--color-base-300,#393939) var(--core-glass), transparent);backdrop-filter:blur(var(--core-blur));border:1px solid #ffffff4d}:host([ui=spatial]) .upload-btn:hover{background:color-mix(in oklab, var(--color-base-300,#393939) 15%, transparent);border-color:#ffffff4d}')];static properties={multiple:{type:Boolean},ui:{type:String},_photos:{state:!0},_pendingSrc:{state:!0},_pendingFile:{state:!0},txt:{type:Object},lang:{type:String}};constructor(){super(),this.multiple=!1,this.ui="modern",this._photos=[],this._pendingSrc=null,this._pendingFile=null,this.txt=null,this.lang="vi"}updated(t){if(t.has("_pendingSrc")&&this._pendingSrc){const t=this.shadowRoot.querySelector(".modal-backdrop");if(t?.showPopover&&!t.matches(":popover-open"))try{t.showPopover()}catch{}}}_openPicker(){this.shadowRoot.querySelector('input[type="file"]').click()}_onFileChange(t){const o=Array.from(t.target.files);t.target.value="",o.length&&(this._loadFile(o[0]),this._queue=this.multiple?o.slice(1):[])}_loadFile(t){const o=new FileReader;o.onload=o=>{this._pendingFile=t,this._pendingSrc=o.target.result},o.readAsDataURL(t)}_cancelCrop(){this._pendingSrc=null,this._pendingFile=null,this._queue=[]}_applyCrop(){const t=this.shadowRoot.querySelector("web-cropper");if(!t)return;const o=t.getCroppedCanvas(),e=o?o.toDataURL("image/jpeg",.92):this._pendingSrc,i={id:Math.random().toString(36).slice(2,11),url:e,file:this._pendingFile,cropData:t.getCropData()};if(this._photos=this.multiple?[...this._photos,i]:[i],this._pendingSrc=null,this._pendingFile=null,this._dispatch(),this._queue?.length){const t=this._queue.shift();requestAnimationFrame(()=>this._loadFile(t))}}_removePhoto(t){this._photos=this._photos.filter(o=>o.id!==t),this._dispatch()}_dispatch(){this.dispatchEvent(new CustomEvent("change",{detail:{photos:this._photos},bubbles:!0,composed:!0}))}getPhotos(){return this._photos}clear(){this._photos=[],this._dispatch()}get _txt(){const t=this.txt??i;return t[this.lang]??t.vi??{}}render(){const t=this.multiple||0===this._photos.length;return e`
      <input type="file" accept="image/*" .multiple=${this.multiple}
        style="display:none" @change=${this._onFileChange} />

      <div class="photo-grid">
        ${this._photos.map(t=>e`
          <div class="photo-item">
            <img src=${t.url} alt="" />
            <div class="remove-btn" @click=${()=>this._removePhoto(t.id)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </div>
          </div>
        `)}

        ${t?e`
          <div class="upload-btn" @click=${this._openPicker}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            <span>${this._txt.add}</span>
          </div>
        `:""}
      </div>

      ${this._pendingSrc?e`
        <div class="modal-backdrop" popover="manual" @click=${t=>t.target===t.currentTarget&&this._cancelCrop()}>
          <div class="modal-card">
            <div class="modal-header">
              <span>${this._txt.cropTitle}</span>
              <button class="modal-close" @click=${this._cancelCrop}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div class="modal-body">
              <web-cropper src=${this._pendingSrc}></web-cropper>
            </div>

            <div class="modal-footer">
              <button class="btn btn-cancel" @click=${this._cancelCrop}>${this._txt.cancel}</button>
              <button class="btn btn-apply" @click=${this._applyCrop}>${this._txt.done}</button>
            </div>
          </div>
        </div>
      `:""}
    `}};customElements.get("web-photor")||customElements.define("web-photor",r);