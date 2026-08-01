import{o as e,t,u as r}from"./lit.PcferLoS.js";var i=class extends t{static shadowRootOptions={mode:"open"};static styles=[r('/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n:host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-blur:var(--haze-blur,12px);--core-glass:var(--haze-glass,20%);--core-font:var(--font-sans,"system-ui");width:100%;display:block}.web-currency{font-family:var(--core-font);width:100%;height:var(--core-height);background-color:var(--color-base-100,#0d0d0d);border:1px solid var(--color-base-300,#393939);border-radius:var(--core-radius);box-sizing:border-box;align-items:center;transition:all .3s cubic-bezier(.4,0,.2,1);display:flex;position:relative;overflow:hidden}.web-currency:hover{border-color:var(--color-primary,#2ebd85);box-shadow:0 4px 12px #0000001a}.web-currency:focus-within{border-color:var(--color-primary,#2ebd85);box-shadow:0 0 0 3px var(--color-primary,#2ebd85)}@supports (color:color-mix(in lab, red, red)){.web-currency:focus-within{box-shadow:0 0 0 3px color-mix(in oklab, var(--color-primary,#2ebd85) 15%, transparent)}}.currency-input{width:100%;height:100%;color:var(--color-base-content,#fff);background:0 0;border:none;outline:none;padding:0 12px;font-family:inherit;font-size:15px;font-weight:600}.currency-input::-webkit-outer-spin-button{appearance:none;margin:0}.currency-input::-webkit-inner-spin-button{appearance:none;margin:0}.currency-input[type=number]{appearance:textfield}.controls{border-left:1px solid var(--color-base-300,#393939);background:#ffffff08;flex-direction:column;height:100%;display:flex}.control-btn{cursor:pointer;width:32px;height:50%;color:var(--color-base-content,#fff);opacity:.6;background:0 0;border:none;outline:none;justify-content:center;align-items:center;transition:all .2s;display:flex}.control-btn:hover{opacity:1;color:var(--color-primary,#2ebd85);background:#ffffff14}.control-btn:first-child{border-bottom:1px solid var(--color-base-300,#393939)}.control-btn svg{width:12px;height:12px;transition:transform .2s}.control-btn:hover svg{transform:scale(1.2)}.control-btn:active{background:#ffffff1f}.prefix-text,.suffix-text{pointer-events:none;user-select:none;color:var(--color-base-content,#fff);font-size:13px;font-weight:500}@supports (color:color-mix(in lab, red, red)){.prefix-text,.suffix-text{color:color-mix(in oklab, var(--color-base-content,#fff) 60%, transparent)}}.prefix-text{padding-left:14px}.suffix-text{padding-right:14px}.spatial.web-currency{background:var(--color-base-300,#393939)}@supports (color:color-mix(in lab, red, red)){.spatial.web-currency{background:color-mix(in oklab, var(--color-base-300,#393939) var(--core-glass), transparent)}}.spatial.web-currency{-webkit-backdrop-filter:blur(var(--core-blur));border:1px solid #ffffff4d}.spatial.web-currency:hover{background:#ffffff0f;border-color:#fff3}.spatial .controls{border-left:1px solid #ffffff4d}.spatial .control-btn:first-child{border-bottom:1px solid #ffffff4d}')];static properties={theme:{type:String},value:{type:Number,reflect:!0},step:{type:Number},format:{type:Boolean},precision:{type:Number},min:{type:Number},max:{type:Number},placeholder:{type:String},disabled:{type:Boolean},suffix:{type:String},prefix:{type:String},ui:{type:String},height:{type:String}};static get uiConfigs(){return{modern:{wrap:"modern web-currency"},spatial:{wrap:"spatial web-currency"}}}constructor(){super(),this.value=0,this.step=100,this.format=!1,this.precision=0,this.min=-1/0,this.max=1/0,this.placeholder="0",this.disabled=!1,this.suffix="",this.prefix="",this.ui="modern",this.height="36px",this._displayValue=""}firstUpdated(){this._updateDisplayValue()}updated(e){e.has("theme")&&this.theme?this.setAttribute("data-theme",this.theme):e.has("theme")&&!this.theme&&this.removeAttribute("data-theme"),(e.has("value")||e.has("format")||e.has("precision"))&&this._updateDisplayValue()}_updateDisplayValue(){this._displayValue=this._formatNumber(this.value);const e=this.shadowRoot.querySelector("input");e&&(e.value=this._displayValue)}_formatNumber(e){if(null==e||isNaN(e)||""===e)return"";const t=this.format?"de-DE":"en-US";return new Intl.NumberFormat(t,{minimumFractionDigits:this.precision,maximumFractionDigits:this.precision}).format(e)}_parseNumber(e){if(null==e||""===e)return 0;let t=e;t=this.format?t.replace(/\./g,"").replace(/,/g,"."):t.replace(/,/g,"");const r=parseFloat(t);return isNaN(r)?0:r}_handleInput(e){let t=e.target.value;const r=this.format?",":".";if(t.endsWith(r))return;const i=this._parseNumber(t);this.value=this._clamp(i),this._emitEvent("input")}_handleKeyDown(e){"ArrowUp"===e.key?(e.preventDefault(),this._increment()):"ArrowDown"===e.key?(e.preventDefault(),this._decrement()):"Enter"===e.key&&(this._updateDisplayValue(),this._emitEvent("change"),this.shadowRoot.querySelector("input").blur())}_handleBlur(){this._updateDisplayValue(),this._emitEvent("change")}_clamp(e){return Math.min(Math.max(e,this.min),this.max)}_increment(){this.disabled||(this.value=this._clamp(this.value+this.step),this._updateDisplayValue(),this._emitEvent("input"),this._emitEvent("change"))}_decrement(){this.disabled||(this.value=this._clamp(this.value-this.step),this._updateDisplayValue(),this._emitEvent("input"),this._emitEvent("change"))}_emitEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return e`
      <div 
        class="${this.constructor.uiConfigs[this.ui||"modern"].wrap} ${this.disabled?"opacity-50 pointer-events-none":""}"
        style="--core-height: ${this.height}"
      >

        ${this.prefix?e`<span class="prefix-text">${this.prefix}</span>`:""}
        <input
          type="text"
          class="currency-input"
          .value=${this._displayValue}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          @blur=${this._handleBlur}
          @keydown=${this._handleKeyDown}
        />
        ${this.suffix?e`<span class="suffix-text">${this.suffix}</span>`:""}
        <div class="controls">
          <button class="control-btn" @click=${this._increment} tabindex="-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
          <button class="control-btn" @click=${this._decrement} tabindex="-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `}};customElements.get("web-currency")||customElements.define("web-currency",i);