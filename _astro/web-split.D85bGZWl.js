import{l as e,o as i,t}from"./lit.PcferLoS.js";var s=class extends t{static properties={direction:{type:String},size:{type:Number},min:{type:Number},max:{type:Number},theme:{type:String},ui:{type:String},showExpanded:{type:Boolean}};static get uiConfigs(){return{modern:{wrap:"modern web-split",resizer:"resizer",pane:"pane"},spatial:{wrap:"spatial web-split",resizer:"resizer glass-resizer",pane:"pane glass-pane"}}}static styles=e`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
      --core-blur: var(--haze-blur, 12px);
      --core-glass: var(--haze-glass, 20%);
    }

    .web-split {
      display: flex;
      width: 100%;
      height: 100%;
      background-color: transparent;
    }

    .web-split.spatial {
      gap: 4px;
    }

    .web-split.horizontal {
      flex-direction: row;
    }

    .web-split.vertical {
      flex-direction: column;
    }

    .pane {
      overflow: auto;
      position: relative;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .pane.glass-pane {
      background: color-mix(in oklab, var(--color-base-300, #393939) var(--core-glass), transparent);
      backdrop-filter: blur(var(--core-blur));
      border: 1px solid #ffffff4d;
      border-radius: 12px;
    }

    .pane-primary {
      flex: 0 1 auto;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    }

    .pane-secondary {
      flex: 1 1 0%;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    }

    .resizer {
      flex: 0 0 auto;
      background-color: var(--color-base-200, #232323);
      transition: background-color 0.2s, width 0.2s, height 0.2s;
      position: relative;
      z-index: 10;
    }

    .resizer.glass-resizer {
      background-color: color-mix(in oklab, var(--color-base-300, #393939) var(--core-glass), transparent);
      backdrop-filter: blur(var(--core-blur));
      -webkit-backdrop-filter: blur(var(--core-blur));
      border: 1px solid #ffffff4d;
      border-radius: 4px;
    }

    .resizer:hover {
      background-color: var(--color-primary, #2ebd85);
    }

    .horizontal > .resizer {
      width: 4px;
      cursor: col-resize;
      background-clip: padding-box;
    }

    .spatial.horizontal > .resizer {
      width: 6px;
    }

    .vertical > .resizer {
      height: 4px;
      cursor: row-resize;
      background-clip: padding-box;
    }

    .spatial.vertical > .resizer {
      height: 6px;
    }

    .resizer .toggle-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      padding: 0;
      border-radius: 50%;
      background-color: var(--color-base-100, #0d0d0d);
      border: 1px solid var(--color-base-300, #333);
      color: var(--color-base-content, #fff);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 20;
      opacity: 0;
      transition: opacity 0.2s, background-color 0.2s, transform 0.2s;
      pointer-events: auto;
    }

    .resizer:hover .toggle-btn {
      opacity: 1;
    }

    .toggle-btn:hover {
      background-color: var(--color-primary, #2ebd85);
      color: #fff;
      transform: translate(-50%, -50%) scale(1.1);
    }

    .horizontal > .resizer .toggle-btn {
      margin-left: 0;
    }

    .vertical > .resizer .toggle-btn {
      transform: translate(-50%, -50%) rotate(90deg);
    }

    .vertical > .resizer .toggle-btn:hover {
      transform: translate(-50%, -50%) rotate(90deg) scale(1.1);
    }

    .toggle-btn svg {
      width: 14px;
      height: 14px;
    }

    :host(.resizing) .pane {
      pointer-events: none;
      user-select: none;
      transition: none !important;
      will-change: width, height;
    }

    :host(.resizing) .resizer {
      transition: none !important;
    }


  `;constructor(){super(),this.direction="horizontal",this.size=.5,this.min=50,this.max=1/0,this.theme="",this.ui="modern",this._isResizing=!1,this._isExpanded=!1,this._prevSize=this.size}updated(e){e.has("theme")&&this.theme?this.setAttribute("data-theme",this.theme):e.has("theme")&&!this.theme&&this.removeAttribute("data-theme"),(e.has("size")||e.has("direction")||e.has("_isExpanded"))&&this._updateSize()}_updateSize(){const e=this.shadowRoot.querySelector(".pane-primary");if(!e)return;const i=this.size<=1?"%":"px",t=this.size<=1?100*this.size:this.size;"horizontal"===this.direction?(e.style.width=`${t}${i}`,e.style.height=""):(e.style.height=`${t}${i}`,e.style.width="")}_onMouseDown(e){e.preventDefault(),this._isResizing=!0,window.addEventListener("mousemove",this._boundOnMouseMove||(this._boundOnMouseMove=this._onMouseMove.bind(this))),window.addEventListener("mouseup",this._boundOnMouseUp||(this._boundOnMouseUp=this._onMouseUp.bind(this))),this.classList.add("resizing")}_onMouseMove(e){if(!this._isResizing)return;const i=this.getBoundingClientRect();let t;t="horizontal"===this.direction?e.clientX-i.left:e.clientY-i.top,t<this.min&&(t=this.min);const s="horizontal"===this.direction?i.width:i.height;t>s-20&&(t=s-20),this.size=t,this._isExpanded=!1,this._updateSize(),this.dispatchEvent(new CustomEvent("resize",{detail:{size:this.size},bubbles:!0,composed:!0}))}_onMouseUp(){this._isResizing=!1,window.removeEventListener("mousemove",this._boundOnMouseMove),window.removeEventListener("mouseup",this._boundOnMouseUp),this.classList.remove("resizing")}_toggleExpand(e){e.stopPropagation(),this._isExpanded?(this.size=this._prevSize,this._isExpanded=!1):(this._prevSize=this.size,this.size=1,this._isExpanded=!0),this._updateSize(),this.dispatchEvent(new CustomEvent("resize",{detail:{size:this.size,_isExpanded:this._isExpanded},bubbles:!0,composed:!0}))}render(){const e=this.constructor.uiConfigs[this.ui||"modern"];return i`
      <div class="${e.wrap} ${this.direction}">
        <div class="${e.pane} pane-primary">
          <slot name="primary"></slot>
        </div>
        <div class="${e.resizer}" @mousedown=${this._onMouseDown}>
          ${this.showExpanded?i`
            <button class="toggle-btn" @mousedown=${e=>e.stopPropagation()} @click=${this._toggleExpand}>
              ${this._isExpanded?i`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="11 17 6 12 11 7"></polyline>
                  <polyline points="18 17 13 12 18 7"></polyline>
                </svg>
            `:i`
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            `}
          </button>
          `:""}
        </div>
        <div class="${e.pane} pane-secondary">
          <slot name="secondary"></slot>
        </div>
      </div>
    `}};customElements.get("web-split")||customElements.define("web-split",s);