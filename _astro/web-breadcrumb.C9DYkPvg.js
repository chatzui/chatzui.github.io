import{a as e,c as t,t as r}from"./lit.DdxAWBw5.js";import{t as a}from"./pastel.ChvuEMaS.js";var s=class extends r{static shadowRootOptions={mode:"open"};static styles=[t(a),t(':host{--core-font:var(--font-sans,"system-ui");display:block}.web-breadcrumb{font-family:var(--core-font);flex-wrap:wrap;align-items:center;gap:10px;font-size:.875rem;font-weight:500;display:flex}.breadcrumb-item{color:var(--color-base-content,#fff);opacity:.6;align-items:center;gap:10px;transition:all .3s cubic-bezier(.4,0,.2,1);display:flex}.breadcrumb-item.link{cursor:pointer;text-decoration:none}.breadcrumb-item.link:hover{opacity:1;color:var(--color-primary,#34ace0);transform:translateY(-1px)}.breadcrumb-item.last{opacity:1;color:var(--color-base-content,#fff);font-weight:700}.separator{opacity:.4;color:var(--color-base-content,#fff);justify-content:center;align-items:center;display:flex}.separator svg{width:16px;height:16px}.pastel.web-breadcrumb{background:var(--pastel-corner);border-color:var(--pastel-line);border-radius:999px;width:fit-content;padding:8px 16px}')];static properties={items:{type:Array},theme:{type:String},ui:{type:String}};static get uiConfigs(){return{modern:{wrap:"modern web-breadcrumb"},pastel:{wrap:"pastel web-breadcrumb"}}}constructor(){super(),this.items=[],this.theme="",this.ui="modern"}updated(e){e.has("theme")&&this.theme?this.setAttribute("data-theme",this.theme):e.has("theme")&&!this.theme&&this.removeAttribute("data-theme")}_handleClick(e,t){t.href&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("navigate",{detail:{item:t},bubbles:!0,composed:!0})))}render(){const t=this.constructor.uiConfigs[this.ui||"modern"];return e`
      <nav class="${t.wrap}">
        ${this.items.map((t,r)=>e`
          <div class="breadcrumb-item ${t.href?"link":""} ${r===this.items.length-1?"last":""}"
               @click=${e=>this._handleClick(e,t)}>
            ${t.label}
          </div>
          ${r<this.items.length-1?e`
            <div class="separator">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          `:""}
        `)}
      </nav>
    `}};customElements.get("web-breadcrumb")||customElements.define("web-breadcrumb",s);