import{o as t,t as e,u as o}from"./lit.PcferLoS.js";import"./iconify-icon.CciI8O2w.js";import{i}from"./helper.D6LK5q_e.js";import"./web-button.CowA0wj5.js";var s=class extends e{static shadowRootOptions={mode:"open"};static styles=[o(':host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-blur:var(--haze-blur,12px);--core-glass:var(--haze-glass,20%);--core-font:var(--font-sans,"system-ui");font-family:inherit;display:inline-block}.web-dropdown{font-family:var(--core-font);user-select:none;position:relative}.dropdown-menu{font-family:var(--core-font);box-sizing:border-box;background:var(--color-base-100,#0d0d0d);border:1px solid var(--color-base-300,#393939);border-radius:var(--core-radius);z-index:99;opacity:0;visibility:hidden;pointer-events:none;will-change:transform, opacity;flex-direction:column;min-width:200px;margin:0;padding:0;transition:opacity .4s cubic-bezier(.16,1,.3,1),transform .4s cubic-bezier(.175,.885,.32,1.275),visibility .4s;display:flex;position:fixed;inset:auto;overflow:hidden;transform:scale(.92)translateY(10px);box-shadow:0 4px 15px #0000004d}.dropdown-menu.show{visibility:visible;pointer-events:auto;opacity:1;transform:scale(1)translateY(0)}@starting-style{.dropdown-menu.show{opacity:0;transform:scale(.92)translateY(10px)}}.options-list{max-height:350px;padding:6px;overflow-y:auto}.option-item{cursor:pointer;color:var(--color-base-content,#fff);border-radius:calc(var(--core-radius) - 4px);align-items:center;gap:12px;padding:10px 14px;font-size:14px;font-weight:500;transition:all .2s;display:flex}.option-item:hover{background:var(--color-primary,#2ebd85);color:#fff}.option-item iconify-icon{opacity:.8;font-size:1.25rem}.option-item.danger{color:var(--color-secondary,#f5465c)}.option-item.danger:hover{background:var(--color-secondary,#f5465c);color:#fff}.options-list::-webkit-scrollbar{width:5px}.options-list::-webkit-scrollbar-track{background:0 0}.options-list::-webkit-scrollbar-thumb{background:var(--color-base-300,#393939);border-radius:10px}.options-list::-webkit-scrollbar-thumb:hover{background:var(--color-primary,#2ebd85)}.spatial .dropdown-menu{background:color-mix(in oklab, var(--color-base-100,#0d0d0d) 90%, transparent);border:1px solid #ffffff4d}.spatial .option-item:hover{color:var(--color-primary,#2ebd85);background:#ffffff1a}')];static properties={label:{type:String},icon:{type:String},items:{type:Array},disabled:{type:Boolean},theme:{type:String},stys:{type:Object},ui:{type:String},isOpen:{type:Boolean,state:!0},height:{type:String},placement:{type:String},placementGap:{type:Number},opt:{type:Object}};static get uiConfigs(){return{modern:{wrap:"modern web-dropdown",trigger:"dropdown-trigger",menu:"dropdown-menu shadow-lg rounded-xl",item:"option-item"},spatial:{wrap:"spatial web-dropdown",trigger:"dropdown-trigger rounded-full",menu:"dropdown-menu backdrop-blur-xl border border-white/20 rounded-3xl",item:"option-item hover:bg-white/10"}}}constructor(){super(),this.label="",this.icon="",this.items=[],this.disabled=!1,this.theme="",this.ui="modern",this.isOpen=!1,this.height="36px",this.placement="bottom-start",this.placementGap=8,this.opt={},this._handleOutsideClick=this._handleOutsideClick.bind(this),this._updateDropdownPosition=this._updateDropdownPosition.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("mousedown",this._handleOutsideClick,{capture:!0}),window.addEventListener("scroll",this._updateDropdownPosition,!0),window.addEventListener("resize",this._updateDropdownPosition)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousedown",this._handleOutsideClick,{capture:!0}),window.removeEventListener("scroll",this._updateDropdownPosition,!0),window.removeEventListener("resize",this._updateDropdownPosition)}updated(t){t.has("theme")&&this.theme?this.setAttribute("data-theme",this.theme):t.has("theme")&&!this.theme&&this.removeAttribute("data-theme"),t.has("isOpen")&&this.isOpen&&(this._showPopover(),this._updateDropdownPosition())}_handleOutsideClick(t){this.isOpen&&(t.composedPath().includes(this)||this._closeDropdown())}_closeDropdown(){this.isOpen=!1;const t=this.shadowRoot.querySelector(".dropdown-menu");t&&(t.style.maxHeight=""),this._hidePopover()}_showPopover(){const t=this.shadowRoot.querySelector(".dropdown-menu");if(t?.showPopover&&!t.matches(":popover-open"))try{t.showPopover()}catch{}}_hidePopover(){const t=this.shadowRoot.querySelector(".dropdown-menu");if(t?.hidePopover&&t.matches(":popover-open"))try{t.hidePopover()}catch{}}_toggleDropdown(t){t.stopPropagation(),this.disabled||(this.isOpen=!this.isOpen)}_updateDropdownPosition(){if(!this.isOpen)return;const t=this.shadowRoot.querySelector(".dropdown-trigger"),e=this.shadowRoot.querySelector(".dropdown-menu");if(!t||!e)return;const o=t.getBoundingClientRect(),i=Math.max(o.width,160),s=(e.scrollHeight||e.offsetHeight)+8,r=parseFloat(this.placementGap||8),n=window.innerWidth,a=window.innerHeight,[d,p]=(this.placement||"bottom-start").split("-");let l="top"===d?o.top-s-r:o.bottom+r,c="end"===p?o.right-i:o.left;"bottom"===d&&l+s>a-8?l=o.top-s-r:"top"===d&&l<8&&(l=o.bottom+r),l<8&&(l=8),c+i>n-8&&(c=n-i-8),c<8&&(c=8),e.style.minWidth=`${i}px`,e.style.top=`${l}px`,e.style.left=`${c}px`,e.style.right="auto"}_selectItem(t){this.dispatchEvent(new CustomEvent("clicked",{detail:{name:"dropdown",value:t},bubbles:!0,composed:!0})),this._closeDropdown()}render(){const e=this.opt||{},o=i({"--core-height":this.height,...this.stys||{}}),s=this.constructor.uiConfigs[this.ui||"modern"],r=!this.label&&!!this.icon;return t`
      <div class="${s.wrap}" style="${o}">

        <web-button 
          class="${s.trigger} ${this.isOpen?"open":""}"
          .disabled=${this.disabled}
          .height=${this.height}
          .theme=${this.theme}
          .ui=${this.ui}
          .type=${e.type||(r?"ghost":"outline")}
          .color=${e.color||""}
          
          .rounded=${e.rounded||""}
          
          .square=${void 0!==e.square?e.square:r}
          
          
          .fontSize=${e.fontSize||"1rem"}
          .prefix=${e.prefix||""}
          .suffix=${e.suffix||""}
          @click=${this._toggleDropdown}
          style="pointer-events: ${this.disabled?"none":"auto"};"
        >
          ${this.icon?t`<iconify-icon icon="${this.icon}" slot="prefix"></iconify-icon>`:""}
          ${this.label?t`<span>${this.label}</span>`:""}
          <slot name="trigger"></slot>
        </web-button>

        <div class="${s.menu} ${this.isOpen?"show":""}" popover="manual">
          <div class="options-list">
            ${this.items.map(e=>t`
              <div class="${s.item} ${e.classes||""}" @click=${()=>this._selectItem(e)}>
                ${e.icon?t`<iconify-icon icon="${e.icon}"></iconify-icon>`:""}
                <span>${e.label||e.name||e.value}</span>
              </div>
            `)}
            <slot name="menu"></slot>
          </div>
        </div>
      </div>
    `}};customElements.get("web-dropdown")||customElements.define("web-dropdown",s);