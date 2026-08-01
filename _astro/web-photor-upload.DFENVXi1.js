import{o as e,t,u as i}from"./lit.PcferLoS.js";import"./web-cropper.CdxZpyES.js";var[o,r]="7d20e2c6e70ac77d9c0ac1b3f146006f~https://api.imgbb.com/1/upload".split("~"),a={vi:{ph:"Upload ảnh để lấy URL...",delete:"Xóa",pick:"Chọn ảnh để upload",cropTitle:"Chỉnh ảnh trước khi upload",cancel:"Hủy",submit:"Upload"},en:{ph:"Upload image to get URL...",delete:"Delete",pick:"Pick image to upload",cropTitle:"Edit image before uploading",cancel:"Cancel",submit:"Upload"}},l=class extends t{static styles=[i(':host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-blur:var(--haze-blur,12px);--core-glass:var(--haze-glass,20%);--core-font:var(--font-sans,"system-ui");width:100%;display:block}.web-photor-upload{font-family:var(--core-font);max-width:100%;height:var(--core-height);background-color:var(--color-base-100,#0d0d0d);border:1px solid var(--color-base-300,#393939);border-radius:var(--core-radius);box-sizing:border-box;align-items:center;transition:all .3s cubic-bezier(.4,0,.2,1);display:flex;position:relative;overflow:hidden}.web-photor-upload:hover{border-color:var(--color-primary,#2ebd85);box-shadow:0 4px 12px #0000001a}.web-photor-upload:focus-within{border-color:var(--color-primary,#2ebd85);box-shadow:0 0 0 3px color-mix(in oklab, var(--color-primary,#2ebd85) 15%, transparent)}.web-photor-upload.disabled{opacity:.5;pointer-events:none}.text-input{min-width:0;height:100%;color:var(--color-base-content,#fff);background:0 0;border:none;outline:none;flex:1;padding:0 12px;font-size:13px;font-weight:500}.text-input::placeholder{color:color-mix(in oklab, var(--color-base-content,#fff) 45%, transparent)}.clear-btn{cursor:pointer;width:28px;height:28px;color:var(--color-base-content,#fff);opacity:.4;background:0 0;border:none;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;padding:0;transition:all .2s;display:flex}.clear-btn:hover{opacity:1;background:#ffffff14}.clear-btn svg{stroke-width:2.5px;width:13px;height:13px}.preview-btn{cursor:pointer;width:28px;height:28px;color:var(--color-base-content,#fff);opacity:.5;background:0 0;border:none;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;padding:0;transition:opacity .2s;display:flex}.preview-btn:hover{opacity:1}.preview-btn svg{width:15px;height:15px}.preview-modal{border-radius:12px;max-width:min(900px,94vw);max-height:90vh;animation:.2s cubic-bezier(.34,1.56,.64,1) card-in;position:relative;overflow:hidden}.preview-modal-close{z-index:1;position:absolute;top:8px;right:8px;background:#0000008c!important;border-radius:50%!important}.preview-modal-img{object-fit:contain;max-width:100%;max-height:90vh;display:block}.upload-btn{width:calc(var(--core-height) - 2px);height:calc(var(--core-height) - 2px);background:var(--color-primary,#2ebd85);border-radius:calc(var(--core-radius) - 1px);cursor:pointer;color:#fff;border:none;flex-shrink:0;justify-content:center;align-items:center;padding:0;transition:all .2s;display:flex}.upload-btn:hover:not(:disabled){filter:brightness(1.12)}.upload-btn:disabled{opacity:.6;cursor:not-allowed}.upload-btn svg{width:17px;height:17px}.spinner{border:2px solid #ffffff4d;border-top-color:#fff;border-radius:50%;width:16px;height:16px;animation:.7s linear infinite spin}@keyframes spin{to{transform:rotate(360deg)}}.err-msg{color:var(--color-error,#f5465c);margin:4px 2px 0;font-size:11px}.modal-backdrop{-webkit-backdrop-filter:blur(3px);z-index:99;background:#000000b8;justify-content:center;align-items:center;width:100%;height:100%;margin:0;animation:.18s backdrop-in;display:flex;position:fixed;inset:0}@keyframes backdrop-in{0%{opacity:0}to{opacity:1}}.modal-card{background:#141414;border:1px solid #ffffff12;border-radius:16px;flex-direction:column;width:min(520px,96vw);max-height:92vh;animation:.2s cubic-bezier(.34,1.56,.64,1) card-in;display:flex;overflow:hidden;box-shadow:0 24px 64px #0009}@keyframes card-in{0%{opacity:0;transform:scale(.93)translateY(10px)}to{opacity:1;transform:scale(1)translateY(0)}}.modal-header{color:#ffffffe6;border-bottom:1px solid #ffffff12;flex-shrink:0;justify-content:space-between;align-items:center;padding:14px 16px;font-size:14px;font-weight:600;display:flex}.modal-close{color:#ffffff80;cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;width:28px;height:28px;padding:0;transition:all .15s;display:flex}.modal-close:hover{color:#fff;background:#ffffff14}.modal-close svg{width:16px;height:16px}.modal-body{flex:1;min-height:0;overflow:hidden}web-cropper{max-height:62vh;display:block}.modal-footer{border-top:1px solid #ffffff12;flex-shrink:0;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px;display:flex}.upload-status{color:#ffffff73;flex:1;align-items:center;gap:6px;font-size:12px;display:flex}.btn{cursor:pointer;border:none;border-radius:8px;align-items:center;gap:6px;height:36px;padding:0 18px;font-family:inherit;font-size:13px;font-weight:500;transition:all .15s;display:flex}.btn:disabled{opacity:.5;cursor:not-allowed}.btn-cancel{color:#ffffffb3;background:#ffffff12;border:1px solid #ffffff1a}.btn-cancel:hover:not(:disabled){color:#fff;background:#ffffff1f}.btn-upload{background:var(--color-primary,#2ebd85);color:#fff}.btn-upload:hover:not(:disabled){filter:brightness(1.1);transform:translateY(-1px);box-shadow:0 4px 12px #2ebd8559}.modal-spinner{border:2px solid #ffffff4d;border-top-color:#fff;border-radius:50%;flex-shrink:0;width:15px;height:15px;animation:.7s linear infinite spin}.spatial.web-photor-upload{background:color-mix(in oklab, var(--color-base-300,#393939) var(--core-glass), transparent);-webkit-backdrop-filter:blur(var(--core-blur));border:1px solid #ffffff4d}.spatial.web-photor-upload:hover{background:#ffffff0f;border-color:#fff3}.spatial.web-photor-upload:focus-within{border-color:var(--color-primary,#2ebd85);background:#ffffff14}')];static properties={value:{type:String,reflect:!0},placeholder:{type:String},multiple:{type:Boolean},limit:{type:Number},disabled:{type:Boolean},hideUpload:{type:Boolean},height:{type:String},ui:{type:String},mime:{type:String},saveLocal:{},_pendingSrc:{state:!0},_uploading:{state:!0},_error:{state:!0},_previewOpen:{state:!0},txt:{type:Object},lang:{type:String}};constructor(){super(),this.value="",this.placeholder="",this.multiple=!1,this.limit=0,this.disabled=!1,this.hideUpload=!1,this.height="36px",this.ui="modern",this.mime="image/png",this.saveLocal=null,this._pendingSrc=null,this._uploading=!1,this._error="",this._previewOpen=!1,this.txt=null,this.lang="vi"}get _comCount(){return this.value?this.value.split("|").filter(Boolean).length:0}get _comAtLimit(){return this.multiple&&this.limit>0&&this._comCount>=this.limit}updated(e){if(e.has("_pendingSrc")&&this._pendingSrc||e.has("_previewOpen")&&this._previewOpen){const e=this.shadowRoot.querySelector(".modal-backdrop");if(e?.showPopover&&!e.matches(":popover-open"))try{e.showPopover()}catch{}}}_openPicker(){this.disabled||this._uploading||this._comAtLimit||this.shadowRoot.querySelector('input[type="file"]').click()}_onFileChange(e){const t=e.target.files[0];if(e.target.value="",!t)return;const i=new FileReader;i.onload=e=>{this._pendingSrc=e.target.result},i.readAsDataURL(t)}_cancelCrop(){this._pendingSrc=null}async _applyCrop(){const e=this.shadowRoot.querySelector("web-cropper");if(!e)return;const t=e.getCroppedCanvas(),i=this.mime||"image/png",a="image/png"===i?void 0:.92,l=t?t.toDataURL(i,a):this._pendingSrc;this._pendingSrc=null,this._uploading=!0,this._error="";try{let e;if(this.saveLocal){const t=await(await fetch(l)).blob();e=await this.saveLocal(t)}else{const t=l.split(",")[1],i=new FormData;i.append("key",o),i.append("image",t);const a=await(await fetch(r,{method:"POST",body:i})).json();if(!a.success)throw new Error(a.error?.message??"Upload thất bại");e=a.data.url}this.value=this.multiple&&this.value?`${this.value}|${e}`:e,this._emit()}catch(n){this._error=n.message}finally{this._uploading=!1}}_handleInput(e){this.value=e.target.value,this._emit()}_clear(){this.value="",this._error="",this._emit()}_emit(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}get _txt(){const e=this.txt??a;return e[this.lang]??e.vi??{}}render(){const t="spatial"===this.ui?"spatial web-photor-upload":"web-photor-upload";return e`
      <input type="file" accept="image/*" style="display:none" @change=${this._onFileChange} />

      <div class="${t} ${this.disabled?"disabled":""}"
           style="--core-height:${this.height}">

        <input
          class="text-input"
          .value=${this.value}
          placeholder=${this.placeholder||this._txt.ph}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
        />

        ${this.value?e`
          <button class="clear-btn" @click=${this._clear} tabindex="-1" title="${this._txt.delete}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        `:""}

        ${this.value&&!this.saveLocal?e`
          <button class="preview-btn" tabindex="-1" @click=${()=>{this._previewOpen=!0}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        `:""}

        ${this.hideUpload?"":e`
          <button
            class="upload-btn"
            @click=${this._openPicker}
            ?disabled=${this.disabled||this._uploading||this._comAtLimit}
            title="${this._txt.pick}"
            tabindex="-1"
          >
            ${this._uploading?e`<span class="spinner"></span>`:e`
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>`}
          </button>
        `}
      </div>

      ${this._error?e`<p class="err-msg">${this._error}</p>`:""}

      ${this._pendingSrc?e`
        <div class="modal-backdrop" popover="manual"
             @click=${e=>e.target===e.currentTarget&&this._cancelCrop()}>
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
              <button class="btn btn-upload" @click=${this._applyCrop}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                ${this._txt.submit}
              </button>
            </div>
          </div>
        </div>
      `:""}

      ${this._previewOpen?e`
        <div class="modal-backdrop" popover="manual" @click=${e=>e.target===e.currentTarget&&(this._previewOpen=!1)}>
          <div class="preview-modal">
            <button class="modal-close preview-modal-close" @click=${()=>{this._previewOpen=!1}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img class="preview-modal-img"
                 src="${this.value.split("|").filter(Boolean).at(-1)}"
                 alt="" />
          </div>
        </div>
      `:""}
    `}};customElements.get("web-photor-upload")||customElements.define("web-photor-upload",l);