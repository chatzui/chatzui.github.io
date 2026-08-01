import{d as t,f as e,l as r,r as i}from"./lit.72plP4vO.js";var o=[{key:"free",label:"Free",ar:0},{key:"original",label:"Original",ar:-1},{key:"1:1",label:"Square",ar:1},{key:"9:16",label:"9:16",ar:9/16},{key:"16:9",label:"16:9",ar:16/9},{key:"4:5",label:"4:5",ar:.8},{key:"5:4",label:"5:4",ar:5/4},{key:"3:4",label:"3:4",ar:3/4},{key:"4:3",label:"4:3",ar:4/3}],s={free:'<rect x="3" y="5" width="18" height="14" rx="1.5" stroke-dasharray="3 2"/>',original:'<rect x="3" y="5" width="18" height="14" rx="1.5"/><line x1="12" y1="5" x2="12" y2="19" stroke-width="1" opacity=".4"/><line x1="3" y1="12" x2="21" y2="12" stroke-width="1" opacity=".4"/>',"1:1":'<rect x="4" y="4" width="16" height="16" rx="1.5"/>',"9:16":'<rect x="8" y="2" width="8" height="20" rx="1.5"/>',"16:9":'<rect x="2" y="8" width="20" height="8" rx="1.5"/>',"4:5":'<rect x="6" y="2" width="12" height="20" rx="1.5"/>',"5:4":'<rect x="2" y="6" width="20" height="12" rx="1.5"/>',"3:4":'<rect x="6.5" y="2" width="11" height="20" rx="1.5"/>',"4:3":'<rect x="2" y="6.5" width="20" height="11" rx="1.5"/>'},a=["nw","n","ne","e","se","s","sw","w"],n=class extends t{static styles=[r(':host{user-select:none;color:#fff;--core-font:var(--font-sans,"system-ui");background:#141414;border-radius:12px;font-family:inherit;display:block;overflow:hidden}.wrap{font-family:var(--core-font);flex-direction:column;display:flex}.canvas{background:#000;width:100%;line-height:0;position:relative;overflow:hidden}.img{pointer-events:none;-webkit-user-drag:none;width:100%;height:auto;display:block}.ov{pointer-events:none;background:#0000008c;position:absolute}.box{box-sizing:border-box;cursor:move;touch-action:none;position:absolute}.box-border{pointer-events:none;box-sizing:border-box;border:1.5px dashed #ffffffd9;position:absolute;inset:0}.gl{pointer-events:none;background:#ffffff24;position:absolute}.gl.h{height:1px;left:0;right:0}.gl.v{width:1px;top:0;bottom:0}.hl{box-sizing:border-box;background:#fff;border:1px solid #00000040;border-radius:1px;width:10px;height:10px;position:absolute}.hl.nw{cursor:nw-resize;top:-5px;left:-5px}.hl.n{cursor:n-resize;top:-5px;left:calc(50% - 5px)}.hl.ne{cursor:ne-resize;top:-5px;right:-5px}.hl.e{cursor:e-resize;top:calc(50% - 5px);right:-5px}.hl.se{cursor:se-resize;bottom:-5px;right:-5px}.hl.s{cursor:s-resize;bottom:-5px;left:calc(50% - 5px)}.hl.sw{cursor:sw-resize;bottom:-5px;left:-5px}.hl.w{cursor:w-resize;top:calc(50% - 5px);left:-5px}.bar{scrollbar-width:none;background:#1c1c1c;flex-shrink:0;align-items:stretch;gap:1px;padding:2px 6px;display:flex;overflow-x:auto}.bar::-webkit-scrollbar{display:none}.rbtn{cursor:pointer;color:#ffffff6b;white-space:nowrap;background:0 0;border:none;border-radius:6px;flex-direction:column;justify-content:center;align-items:center;gap:5px;min-width:50px;padding:8px;font-family:inherit;font-size:11px;transition:color .15s,background .15s;display:flex}.rbtn:hover{color:#fffc;background:#ffffff0f}.rbtn.active{color:#fff;background:#ffffff12}.rbtn svg{flex-shrink:0;width:22px;height:22px}')];static properties={src:{type:String},_crop:{state:!0},_ratio:{state:!0},_nat:{state:!0},_loaded:{state:!0}};constructor(){super(),this.src="",this._ratio="free",this._crop={x:0,y:0,w:0,h:0},this._nat={w:0,h:0},this._loaded=!1,this._drag=null}updated(t){t.has("src")&&this.src&&(this._loaded=!1)}_onLoad(t){const e=t.target;this._nat={w:e.naturalWidth,h:e.naturalHeight},this._loaded=!0,this._initCrop()}_initCrop(){const t=this.shadowRoot?.querySelector(".canvas");if(!t)return;const e=t.clientWidth,r=t.clientHeight;this._crop={x:Math.round(.1*e),y:Math.round(.1*r),w:Math.round(.8*e),h:Math.round(.8*r)},this._emitChange()}_clampCrop({x:t,y:e,w:r,h:i},o,s){const a=20;return r=Math.max(a,r),i=Math.max(a,i),(t=Math.max(0,Math.min(t,o-a)))+r>o&&(r=o-t),(e=Math.max(0,Math.min(e,s-a)))+i>s&&(i=s-e),{x:t,y:e,w:r=Math.max(a,r),h:i=Math.max(a,i)}}_resolveAr(){const t=o.find(t=>t.key===this._ratio);if(!t||0===t.ar)return 0;if(-1===t.ar){const t=this._nat.w/this._nat.h;return isFinite(t)&&t>0?t:0}return t.ar}_applyArToHandle(t,e,r,i,o){const s=this._resolveAr();if(!s)return this._clampCrop(t,i,o);let{x:a,y:n,w:h,h:d}=t;const l=["n","s"].includes(e),c=["e","w"].includes(e);if(l)h=Math.round(d*s),a=Math.round(r.x+(r.w-h)/2);else if(c)d=Math.round(h/s),n=Math.round(r.y+(r.h-d)/2);else{const t=Math.round(d*s),i=Math.round(h/s);Math.abs(h-r.w)>=Math.abs(d-r.h)?(d=i,"nw"!==e&&"ne"!==e||(n=r.y+r.h-d)):(h=t,"nw"!==e&&"sw"!==e||(a=r.x+r.w-h))}return this._clampCrop({x:a,y:n,w:h,h:d},i,o)}_startDrag(t,e,r=null){t.preventDefault();const i=t.touches?.[0]??t,o=this.shadowRoot.querySelector(".canvas").getBoundingClientRect();this._drag={type:e,handle:r,startX:i.clientX,startY:i.clientY,startCrop:{...this._crop},cw:o.width,ch:o.height};const s=t=>this._onMove(t),a=()=>{this._drag=null,window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",s),window.removeEventListener("touchend",a)};window.addEventListener("mousemove",s,{passive:!1}),window.addEventListener("mouseup",a),window.addEventListener("touchmove",s,{passive:!1}),window.addEventListener("touchend",a)}_onMove(t){if(t.preventDefault(),!this._drag)return;const e=t.touches?.[0]??t,{type:r,handle:i,startX:o,startY:s,startCrop:a,cw:n,ch:h}=this._drag,d=e.clientX-o,l=e.clientY-s;if("move"===r)return this._crop=this._clampCrop({x:a.x+d,y:a.y+l,w:a.w,h:a.h},n,h),void this._emitChange();let{x:c,y:p,w:u,h:x}={...a};switch(i){case"nw":c+=d,u-=d,p+=l,x-=l;break;case"n":p+=l,x-=l;break;case"ne":u+=d,p+=l,x-=l;break;case"e":u+=d;break;case"se":u+=d,x+=l;break;case"s":x+=l;break;case"sw":c+=d,u-=d,x+=l;break;case"w":c+=d,u-=d}this._crop=this._applyArToHandle({x:c,y:p,w:u,h:x},i,a,n,h),this._emitChange()}_setRatio(t){if(this._ratio=t,"free"===t)return void this._emitChange();const e=this.shadowRoot?.querySelector(".canvas");if(!e)return;const r=e.clientWidth,i=e.clientHeight,s=o.find(e=>e.key===t),a=-1===s.ar?this._nat.w/this._nat.h:s.ar;if(!isFinite(a)||a<=0)return;let n,h;r/i>a?(h=Math.round(.8*i),n=Math.round(h*a)):(n=Math.round(.8*r),h=Math.round(n/a)),this._crop=this._clampCrop({x:Math.round((r-n)/2),y:Math.round((i-h)/2),w:n,h:h},r,i),this._emitChange()}_emitChange(){this.dispatchEvent(new CustomEvent("crop-change",{detail:this.getCropData(),bubbles:!0,composed:!0}))}getCropData(){const t=this.shadowRoot?.querySelector(".canvas");if(!t||!this._nat.w||!this._loaded)return null;const e=t.clientWidth,r=t.clientHeight;if(!e||!r)return null;const i=this._nat.w/e,o=this._nat.h/r;return{x:Math.round(this._crop.x*i),y:Math.round(this._crop.y*o),width:Math.round(this._crop.w*i),height:Math.round(this._crop.h*o),ratio:this._ratio}}getCroppedCanvas(){const t=this.shadowRoot?.querySelector(".img"),e=this.getCropData();if(!t||!e)return null;const r=document.createElement("canvas");return r.width=e.width,r.height=e.height,r.getContext("2d").drawImage(t,e.x,e.y,e.width,e.height,0,0,e.width,e.height),r}render(){const{x:t,y:r,w:n,h:h}=this._crop;return i`
      <div class="wrap">
        <div class="canvas">
          ${this.src?i`
            <img class="img" src=${this.src} alt="" crossorigin="anonymous" @load=${this._onLoad} />
          `:""}

          ${this._loaded?i`
            <!-- 4 darkened overlays -->
            <div class="ov" style="top:0;left:0;right:0;height:${r}px"></div>
            <div class="ov" style="top:${r+h}px;left:0;right:0;bottom:0"></div>
            <div class="ov" style="top:${r}px;left:0;width:${t}px;height:${h}px"></div>
            <div class="ov" style="top:${r}px;left:${t+n}px;right:0;height:${h}px"></div>

            <!-- Crop box -->
            <div
              class="box"
              style="left:${t}px;top:${r}px;width:${n}px;height:${h}px"
              @mousedown=${t=>this._startDrag(t,"move")}
              @touchstart=${t=>this._startDrag(t,"move")}
            >
              <div class="box-border"></div>

              <!-- Rule-of-thirds grid -->
              <div class="gl h" style="top:${Math.round(h/3)}px"></div>
              <div class="gl h" style="top:${Math.round(2*h/3)}px"></div>
              <div class="gl v" style="left:${Math.round(n/3)}px"></div>
              <div class="gl v" style="left:${Math.round(2*n/3)}px"></div>

              <!-- Resize handles -->
              ${a.map(t=>i`
                <div
                  class="hl ${t}"
                  @mousedown=${e=>{e.stopPropagation(),this._startDrag(e,"resize",t)}}
                  @touchstart=${e=>{e.stopPropagation(),this._startDrag(e,"resize",t)}}
                ></div>
              `)}
            </div>
          `:""}
        </div>

        <!-- Aspect ratio bar -->
        <div class="bar">
          ${o.map(t=>{return i`
            <button
              class="rbtn ${this._ratio===t.key?"active":""}"
              @click=${()=>this._setRatio(t.key)}
            >
              ${r=t.key,e(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${s[r]}</svg>`)}
              ${t.label}
            </button>
          `;var r})}
        </div>
      </div>
    `}};customElements.get("web-cropper")||customElements.define("web-cropper",n);