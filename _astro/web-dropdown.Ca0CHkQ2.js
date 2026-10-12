import{a as e,c as t,t as o}from"./lit.DdxAWBw5.js";import"./iconify-icon.BQKUsOMK.js";import"./web-button.CCcr9NnS.js";import{t as i}from"./pastel.ChvuEMaS.js";import{r as s}from"./util.7B3q8i3m.js";var r=class extends o{static shadowRootOptions={mode:"open"};static styles=[t(i),t(':host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-font:var(--font-sans,"system-ui");font-family:inherit;display:inline-block}.web-dropdown{font-family:var(--core-font);user-select:none;position:relative}.dropdown-menu{font-family:var(--core-font);box-sizing:border-box;background:var(--color-base-100,#0d0d0d);border:1px solid var(--color-base-300,#393939);border-radius:var(--core-radius);z-index:99;opacity:0;visibility:hidden;pointer-events:none;will-change:transform, opacity;flex-direction:column;min-width:200px;margin:0;padding:0;transition:opacity .4s cubic-bezier(.16,1,.3,1),transform .4s cubic-bezier(.175,.885,.32,1.275),visibility .4s;display:flex;position:fixed;inset:auto;overflow:hidden;transform:scale(.92)translateY(10px);box-shadow:0 4px 15px #0000004d}.dropdown-menu.show{visibility:visible;pointer-events:auto;opacity:1;transform:scale(1)translateY(0)}@starting-style{.dropdown-menu.show{opacity:0;transform:scale(.92)translateY(10px)}}.options-list{max-height:350px;padding:6px;overflow-y:auto}.option-item{cursor:pointer;color:var(--color-base-content,#fff);border-radius:calc(var(--core-radius) - 4px);align-items:center;gap:12px;padding:10px 14px;font-size:.875rem;font-weight:500;transition:all .2s;display:flex}.option-item:hover{background:var(--color-primary,#34ace0);color:#fff}.option-item iconify-icon{opacity:.8;flex-shrink:0;font-size:1.25rem}.option-item .option-label{white-space:nowrap;text-overflow:ellipsis;text-align:left;flex:auto;min-width:0;overflow:hidden}.option-item.danger{color:var(--color-secondary,#706fd3)}.option-item.danger:hover{background:var(--color-secondary,#706fd3);color:#fff}.options-list::-webkit-scrollbar{width:5px}.options-list::-webkit-scrollbar-track{background:0 0}.options-list::-webkit-scrollbar-thumb{background:var(--color-base-300,#393939);border-radius:10px}.options-list::-webkit-scrollbar-thumb:hover{background:var(--color-primary,#34ace0)}.pastel .dropdown-menu{background:var(--pastel-pop);border:1px solid var(--pastel-line);border-radius:var(--radius-box);box-shadow:var(--pastel-shadow)}.pastel .option-item:hover{background:var(--pastel-corner);color:var(--color-base-content)}')];static properties={label:{type:String},icon:{type:String},items:{type:Array},disabled:{type:Boolean},theme:{type:String},stys:{type:Object},ui:{type:String},isOpen:{type:Boolean,state:!0},height:{type:String},placement:{type:String},placementGap:{type:Number},opt:{type:Object}};static get uiConfigs(){return{modern:{wrap:"modern web-dropdown",trigger:"dropdown-trigger",menu:"dropdown-menu shadow-lg rounded-xl",item:"option-item"},pastel:{wrap:"pastel web-dropdown",trigger:"dropdown-trigger rounded-full",menu:"dropdown-menu backdrop-blur-xl border border-white/20 rounded-3xl",item:"option-item hover:bg-white/10"}}}constructor(){super(),this.label="",this.icon="",this.items=[],this.disabled=!1,this.theme="",this.ui="modern",this.isOpen=!1,this.height="36px",this.placement="bottom-start",this.placementGap=8,this.opt={},this._hideTimer=null,this._handleOutsideClick=this._handleOutsideClick.bind(this),this._updateDropdownPosition=this._updateDropdownPosition.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("mousedown",this._handleOutsideClick,{capture:!0}),window.addEventListener("scroll",this._updateDropdownPosition,!0),window.addEventListener("resize",this._updateDropdownPosition)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._hideTimer),window.removeEventListener("mousedown",this._handleOutsideClick,{capture:!0}),window.removeEventListener("scroll",this._updateDropdownPosition,!0),window.removeEventListener("resize",this._updateDropdownPosition)}updated(e){e.has("theme")&&this.theme?this.setAttribute("data-theme",this.theme):e.has("theme")&&!this.theme&&this.removeAttribute("data-theme"),e.has("isOpen")&&this.isOpen&&(this._showPopover(),this._updateDropdownPosition())}_handleOutsideClick(e){this.isOpen&&(e.composedPath().includes(this)||this._closeDropdown())}_closeDropdown(){this.isOpen=!1;const e=this.shadowRoot.querySelector(".dropdown-menu");e&&(e.style.maxHeight=""),this._scheduleHidePopover()}_showPopover(){clearTimeout(this._hideTimer);const e=this.shadowRoot.querySelector(".dropdown-menu");if(e?.showPopover&&!e.matches(":popover-open"))try{e.showPopover()}catch{}}_hidePopover(){const e=this.shadowRoot.querySelector(".dropdown-menu");if(e?.hidePopover&&e.matches(":popover-open"))try{e.hidePopover()}catch{}}_scheduleHidePopover(){const e=this.shadowRoot.querySelector(".dropdown-menu");if(!e?.hidePopover||!e.matches(":popover-open"))return;clearTimeout(this._hideTimer);const t=()=>{e.removeEventListener("transitionend",o),clearTimeout(this._hideTimer),this.isOpen||this._hidePopover()},o=o=>{o.target===e&&t()};e.addEventListener("transitionend",o),this._hideTimer=setTimeout(t,450)}_toggleDropdown(e){e.stopPropagation(),this.disabled||(this.isOpen=!this.isOpen)}_updateDropdownPosition(){if(!this.isOpen)return;const e=this.shadowRoot.querySelector(".dropdown-trigger"),t=this.shadowRoot.querySelector(".dropdown-menu");if(!e||!t)return;const o=e.getBoundingClientRect(),i=Math.max(o.width,160),s=(t.scrollHeight||t.offsetHeight)+8,r=parseFloat(this.placementGap||8),n=window.innerWidth,a=window.innerHeight,[d,p]=(this.placement||"bottom-start").split("-");let l="top"===d?o.top-s-r:o.bottom+r,h="end"===p?o.right-i:o.left;"bottom"===d&&l+s>a-8?l=o.top-s-r:"top"===d&&l<8&&(l=o.bottom+r),l<8&&(l=8),h+i>n-8&&(h=n-i-8),h<8&&(h=8),t.style.minWidth=`${i}px`,t.style.top=`${l}px`,t.style.left=`${h}px`,t.style.right="auto"}_selectItem(e){this.dispatchEvent(new CustomEvent("click",{detail:{name:"dropdown",value:e},bubbles:!0,composed:!0})),this._closeDropdown()}render(){const t=this.opt||{},o=s({"--core-height":this.height,...this.stys||{}}),i=this.constructor.uiConfigs[this.ui||"modern"],r=!this.label&&!!this.icon;return e`
      <div class="${i.wrap}" style="${o}">

        <web-button 
          class="${i.trigger} ${this.isOpen?"open":""}"
          .disabled=${this.disabled}
          .height=${this.height}
          .theme=${this.theme}
          .ui=${this.ui}
          .type=${t.type||(r?"ghost":"outline")}
          .color=${t.color||""}
          
          .rounded=${t.rounded||""}
          
          .square=${void 0!==t.square?t.square:r}
          
          
          .fontSize=${t.fontSize||"1rem"}
          .prefix=${t.prefix||""}
          .suffix=${t.suffix||""}
          @click=${this._toggleDropdown}
          style="pointer-events: ${this.disabled?"none":"auto"};"
        >
          ${this.icon?e`<iconify-icon icon="${this.icon}" slot="prefix"></iconify-icon>`:""}
          ${this.label?e`<span>${this.label}</span>`:""}
          <slot name="trigger"></slot>
        </web-button>

        <div class="${i.menu} ${this.isOpen?"show":""}" popover="manual">
          <div class="options-list">
            ${this.items.map(t=>e`
              <div class="${i.item} ${t.classes||""}" @click=${()=>this._selectItem(t)}>
                ${t.icon?e`<iconify-icon icon="${t.icon}"></iconify-icon>`:""}
                <span class="option-label">${t.label||t.name||t.value}</span>
              </div>
            `)}
            <slot name="menu"></slot>
          </div>
        </div>
      </div>
    `}};customElements.get("web-dropdown")||customElements.define("web-dropdown",r);