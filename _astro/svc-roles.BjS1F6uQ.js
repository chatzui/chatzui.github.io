import{a as e,c as r,n as s,t}from"./lit.DdxAWBw5.js";import"./iconify-icon.BQKUsOMK.js";import{C as i}from"./util.7B3q8i3m.js";import{r as a}from"./crud.DGfQqACy.js";import{a as o,d as n,f as l,i as c,n as d,o as h,r as p,t as m,u}from"./service.xfGTdrVa.js";var b={vi:{title:"Phân quyền",users:"người dùng",search:"Tìm tên, email, username…",reload:"Tải lại",close:"Đóng",retry:"Thử lại",loading:"Đang tải…",empty:"Không có người dùng",noMatch:"Không tìm thấy người dùng phù hợp",errLoad:"Không thể tải danh sách",errSave:"Lỗi lưu quyền",noPerm:"Chỉ Super Admin được phân quyền",scope:"Phạm vi",superNote:"Toàn quyền hệ thống — không cần cấp theo bảng",clearCustom:"Xoá quyền lẻ",bundle:"Áp luôn cho",legacy:"Bảng cũ — không còn trong menu, chỉ nên gỡ quyền",legend:"Các mức quyền",...d.vi,levelHints:{VIEW:"Xem danh sách và chi tiết",EDIT:"Tạo, sửa, lưu nháp, gửi duyệt, upload media, xem lịch sử",REVIEW:"Bình luận, duyệt, từ chối, yêu cầu sửa, khôi phục phiên bản",PUBLISH:"Xuất bản, gỡ xuống, lên lịch",MANAGE:"Tất cả mức trên + xoá, nhập / xuất CSV, đổi trạng thái"}},en:{title:"Permissions",users:"users",search:"Search name, email, username…",reload:"Reload",close:"Close",retry:"Retry",loading:"Loading…",empty:"No users found",noMatch:"No matching user",errLoad:"Failed to load users",errSave:"Failed to save roles",noPerm:"Only a Super Admin can manage permissions",scope:"Scope",superNote:"Full system access — no per-table grants needed",clearCustom:"Clear custom capabilities",bundle:"Also applies to",legacy:"Legacy table — no longer in the menu, only worth revoking",legend:"Access levels",...d.en,levelHints:{VIEW:"See the list and details",EDIT:"Create, update, save drafts, submit for review, upload media, see history",REVIEW:"Comment, approve, reject, request edits, restore versions",PUBLISH:"Publish, unpublish, schedule",MANAGE:"Everything above + delete, CSV import / export, change status"}}},g=class extends t{static styles=r(":host{--sr-surface:color-mix(in oklab, var(--color-base-content) 4%, transparent);--sr-surface-2:color-mix(in oklab, var(--color-base-content) 8%, transparent);--sr-line:color-mix(in oklab, var(--color-base-content) 9%, transparent);--sr-muted:color-mix(in oklab, var(--color-base-content) 58%, transparent);--sr-radius:16px;--sr-gutter:.9rem;--sr-sticky:color-mix(in oklab, var(--color-tint-a,var(--color-base-100)) 5%, color-mix(in oklab, var(--color-tint-b,var(--color-base-100)) 4%, var(--color-base-100)));display:block;container:sr/inline-size}:host([fab]){display:contents}*{box-sizing:border-box}button{font:inherit;color:inherit;cursor:pointer;background:0 0;border:0;padding:0}button:disabled{cursor:default}button:focus-visible,input:focus-visible,summary:focus-visible{outline:2px solid var(--color-primary);outline-offset:2px}.sr{padding:0 var(--sr-gutter) var(--sr-gutter);color:var(--color-base-content);font-family:var(--font-sans,system-ui, sans-serif);flex-direction:column;gap:.75rem;display:flex}.sr-head{padding-top:var(--sr-gutter);align-items:center;gap:.6rem;display:flex}.sr-head-icon{background:color-mix(in oklab, var(--color-primary) 14%, transparent);width:40px;height:40px;color:var(--color-primary);border-radius:12px;flex-shrink:0;place-items:center;font-size:1.3rem;display:grid}.sr-head-title{flex-direction:column;flex:1;min-width:0;display:flex}.sr-h1{text-overflow:ellipsis;white-space:nowrap;letter-spacing:-.01em;font-size:1.2rem;font-weight:700;overflow:hidden}.sr-muted{color:var(--sr-muted);font-size:.82rem}.sr-icon-btn{border-radius:12px;flex-shrink:0;place-items:center;width:40px;height:40px;font-size:1.2rem;display:inline-grid}.sr-icon-btn:hover:not(:disabled){background:var(--sr-surface-2)}.sr-icon-btn:disabled{opacity:.5}.sr-bar{z-index:2;margin:0 calc(-1 * var(--sr-gutter));padding:.4rem var(--sr-gutter);background:var(--sr-sticky);flex-direction:column;gap:.5rem;display:flex;position:sticky;top:0}.sr-tabs{scrollbar-width:none;scroll-snap-type:x proximity;gap:.4rem;display:flex;overflow-x:auto}.sr-tabs::-webkit-scrollbar{display:none}.sr-tab{background:var(--sr-surface);text-transform:capitalize;scroll-snap-align:start;border-radius:999px;flex-shrink:0;align-items:center;gap:.4rem;min-height:36px;padding:0 .9rem;font-size:.875rem;font-weight:600;display:inline-flex}.sr-tab:hover{background:var(--sr-surface-2)}.sr-tab[aria-selected=true]{background:var(--color-primary);color:var(--color-base-100)}.sr-tab.is-legacy:not([aria-selected=true]){color:var(--color-warning)}.sr-tab-count{background:color-mix(in oklab, currentColor 16%, transparent);text-align:center;font-variant-numeric:tabular-nums;border-radius:999px;min-width:1.35rem;padding:0 .35rem;font-size:.72rem;line-height:1.35rem}.sr-search{border:1px solid var(--sr-line);background:var(--sr-surface);min-height:40px;color:var(--sr-muted);border-radius:12px;align-items:center;gap:.5rem;padding:0 .85rem;display:flex}.sr-search:focus-within{border-color:var(--color-primary)}.sr-search input{min-width:0;height:38px;color:var(--color-base-content);font:inherit;background:0 0;border:0;outline:0;flex:1;font-size:16px}.sr-legend{background:var(--sr-surface);border-radius:12px;font-size:.85rem}.sr-legend summary{min-height:40px;color:var(--sr-muted);cursor:pointer;align-items:center;gap:.4rem;padding:0 .85rem;list-style:none;display:flex}.sr-legend summary::-webkit-details-marker{display:none}.sr-legend dl{grid-template-columns:max-content 1fr;gap:.35rem .75rem;margin:0;padding:0 .85rem .75rem;display:grid}.sr-legend dt{font-weight:600}.sr-legend dd{color:var(--sr-muted);margin:0}.sr-bundle{color:var(--sr-muted);margin:-.25rem 0 0;font-size:.8rem}.sr-bundle.is-legacy{color:var(--color-warning)}.sr-notice{background:color-mix(in oklab, var(--color-error) 12%, transparent);color:var(--color-error);border-radius:12px;align-items:center;gap:.5rem;padding:.25rem .25rem .25rem .85rem;font-size:.85rem;display:flex}.sr-notice span{flex:1;min-width:0}.sr-state{border-radius:var(--sr-radius);background:var(--sr-surface);color:var(--sr-muted);text-align:center;flex-direction:column;align-items:center;gap:.6rem;padding:2.5rem 1rem;font-size:.9rem;display:flex}.sr-state iconify-icon{font-size:1.6rem}.sr-state.is-error{color:var(--color-error)}.sr-retry{background:var(--sr-surface-2);color:var(--color-base-content);border-radius:999px;padding:.5rem 1.1rem;font-size:.85rem;font-weight:600}.sr-list{grid-template-columns:1fr;gap:.6rem;display:grid}.sr-card{border:1px solid var(--sr-line);border-radius:var(--sr-radius);background:var(--sr-surface);flex-direction:column;gap:.75rem;min-width:0;padding:.85rem;transition:opacity .15s;display:flex}.sr-card[aria-busy=true]{opacity:.7}.sr-card-head{align-items:center;gap:.65rem;min-width:0;display:flex}.sr-avatar{background:color-mix(in oklab, var(--color-primary) 16%, transparent);width:38px;height:38px;color:var(--color-primary);border-radius:50%;flex-shrink:0;place-items:center;font-weight:700;display:grid;overflow:hidden}.sr-avatar img{object-fit:cover;width:100%;height:100%}.sr-who{flex-direction:column;flex:1;min-width:0;display:flex}.sr-name,.sr-sub{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.sr-name{font-size:.95rem;font-weight:600}.sr-sub{color:var(--sr-muted);font-size:.78rem}.sr-badge{background:color-mix(in oklab, var(--color-primary) 15%, transparent);color:var(--color-primary);letter-spacing:.02em;border-radius:999px;flex-shrink:0;padding:.15rem .55rem;font-size:.7rem;font-weight:700}.sr-saving{color:var(--color-primary);flex-shrink:0;font-size:1.1rem}.sr-note{color:var(--sr-muted);margin:0;font-size:.85rem}.sr-levels{flex-wrap:wrap;gap:.4rem;display:flex}.sr-level{border:1px solid var(--sr-line);border-radius:999px;align-items:center;gap:.25rem;min-height:36px;padding:0 .8rem;font-size:.85rem;font-weight:600;transition:background .15s,border-color .15s;display:inline-flex}.sr-level:hover:not(:disabled){background:var(--sr-surface-2)}.sr-level.is-on{border-color:var(--color-primary);background:var(--color-primary);color:var(--color-base-100)}.sr-level.is-on:hover:not(:disabled){background:color-mix(in oklab, var(--color-primary) 85%, var(--color-base-content))}.sr-level.is-implied{border-color:color-mix(in oklab, var(--color-primary) 35%, transparent);background:color-mix(in oklab, var(--color-primary) 12%, transparent);color:var(--color-primary)}.sr-level:disabled:not(.is-implied){opacity:.5}.sr-foot{flex-wrap:wrap;align-items:center;gap:.5rem .6rem;display:flex}.sr-label{letter-spacing:.04em;text-transform:uppercase;color:var(--sr-muted);font-size:.75rem;font-weight:700}.sr-seg{background:var(--sr-surface-2);border-radius:999px;padding:3px;display:inline-flex}.sr-seg-btn{min-height:32px;color:var(--sr-muted);border-radius:999px;padding:0 .85rem;font-size:.82rem;font-weight:600}.sr-seg-btn[aria-checked=true]{background:var(--color-base-100);color:var(--color-base-content);box-shadow:0 1px 3px color-mix(in oklab, var(--color-base-content) 18%, transparent)}.sr-seg-btn:disabled{opacity:.5}.sr-custom{background:color-mix(in oklab, var(--color-warning) 14%, transparent);color:var(--color-warning);border-radius:999px;align-items:center;gap:.15rem;margin-left:auto;padding-left:.6rem;font-size:.78rem;font-weight:600;display:inline-flex}.sr-custom-x{border-radius:50%;place-items:center;width:28px;height:28px;display:inline-grid}.sr-custom-x:hover:not(:disabled){background:color-mix(in oklab, var(--color-warning) 18%, transparent)}.sr-spin{animation:.9s linear infinite sr-spin}@keyframes sr-spin{to{transform:rotate(360deg)}}.sr-fab{right:1rem;bottom:calc(1rem + env(safe-area-inset-bottom));z-index:900;background:var(--color-primary);width:52px;height:52px;color:var(--color-base-100);box-shadow:0 6px 20px color-mix(in oklab, var(--color-base-content) 28%, transparent);border-radius:50%;place-items:center;font-size:1.35rem;transition:transform .15s;display:grid;position:fixed}.sr-fab:hover{transform:scale(1.06)}.sr-screen{z-index:950;overscroll-behavior:contain;padding-bottom:env(safe-area-inset-bottom);background:var(--color-base-100);animation:.18s sr-in;position:fixed;inset:0;overflow-y:auto;container:sr/inline-size}.sr-screen .sr{max-width:1200px;margin:0 auto}@keyframes sr-in{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}@media (prefers-reduced-motion:reduce){.sr-screen,.sr-spin{animation:none}}@container sr (width>=560px){.sr-bar{flex-direction:row;align-items:center}.sr-tabs{flex:1;min-width:0}.sr-search{flex:0 16rem}.sr-list{grid-template-columns:repeat(2,minmax(0,1fr))}}@container sr (width>=900px){.sr{--sr-gutter:1.25rem}.sr-list{grid-template-columns:repeat(3,minmax(0,1fr))}}");static properties={lang:{type:String},txt:{type:Object},ui:{type:String},theme:{type:String},dataTable:{type:String},server:{type:String},tables:{type:String},fab:{type:Boolean,reflect:!0},_open:{state:!0},_table:{state:!0},_users:{state:!0},_query:{state:!0},_loading:{state:!0},_error:{state:!0},_notice:{state:!0},_saving:{state:!0},_isAdmin:{state:!0}};constructor(){super(),this.lang="vi",this.txt=null,this.ui="",this.theme="",this.dataTable="profiles",this.server="DB_ACC",this.tables="",this.fab=!1,this._open=!1,this._table="",this._users=[],this._query="",this._loading=!1,this._error="",this._notice="",this._saving=new Set,this._isAdmin=null}async connectedCallback(){super.connectedCallback(),this._isAdmin=await m.isAdmin(),this._isAdmin&&!this.fab&&this._dcLoad()}willUpdate(e){(e.has("tables")||e.has("_users")||!this._table)&&(this._allTables.includes(this._table)||(this._table=this._tables[0]??""))}async _dcLoad(){this._loading=!0,this._error="";try{const e=await this._svc.findAll();this._users=e.sort((e,r)=>this._comName(e).localeCompare(this._comName(r)))}catch(e){this._error=`${this._txt.errLoad}: ${e.message}`}finally{this._loading=!1}}_dhOpen(){this._open=!0,this._users.length||this._loading||this._dcLoad()}_dhClose(){this._open=!1}_dhTabsWheel(e){if(!matchMedia("(min-width: 769px)").matches)return;const r=e.currentTarget,s=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY,t=r.scrollWidth-r.clientWidth;!s||t<=0||s<0&&r.scrollLeft<=0||s>0&&r.scrollLeft>=t-1||(e.preventDefault(),r.scrollLeft+=1===e.deltaMode?16*s:s)}_dhLevel(e,r){const s=n(e.roles,this._table),t=new Set(s.levels);t.has(r)?t.delete(r):t.add(r),this._dhSave(e,{...s,levels:t})}_dhScope(e,r){const s=n(e.roles,this._table);s.scope!==r&&this._dhSave(e,{...s,scope:r})}_dhClearCustom(e){this._dhSave(e,{...n(e.roles,this._table),custom:[]})}async _dhSave(e,r){if(this._comIsSuper(e)||this._saving.has(e.id))return;const s=e.roles,t=l(s,this._table,r)||"user";if(t!==s){this._notice="",this._comPatch(e.id,t),this._saving=new Set([...this._saving,e.id]);try{await this._svc.update(e.id,{roles:t,updated_at:await this._svc.now()})}catch(i){this._comPatch(e.id,s),this._notice=`${this._txt.errSave}: ${i.message}`}finally{const r=new Set(this._saving);r.delete(e.id),this._saving=r}}}get _txt(){return i(this.txt,b,this.lang)}get _svc(){return a((this.dataTable||"profiles").split("~")[0],"",this.server)}get _tables(){const e=(this.tables||"").trim();if(!e)return c;if(e.startsWith("["))try{return JSON.parse(e)}catch{}return e.split(",").map(e=>e.trim()).filter(Boolean)}get _legacyTables(){const e=new Set(this._tables),r=new Set(Object.values(h).flat()),s=this._users.flatMap(e=>u(e).roles.filter(e=>e.includes(".")).map(e=>e.slice(0,e.indexOf("."))));return[...new Set(s)].filter(s=>!e.has(s)&&!r.has(s)).sort()}get _allTables(){return[...this._tables,...this._legacyTables]}get _filtered(){const e=this._query.trim().toLowerCase();return e?this._users.filter(r=>[r.display_name,r.email,r.username].some(r=>(r||"").toLowerCase().includes(e))):this._users}_comIsSuper(e){return u(e).isAdmin}_comName(e){return e.display_name||e.email||e.id||""}_comPatch(e,r){this._users=this._users.map(s=>s.id===e?{...s,roles:r}:s)}_comCounts(){const e=Object.fromEntries(this._allTables.map(e=>[e,0]));for(const r of this._users){if(this._comIsSuper(r))continue;const{roles:s}=u(r);for(const r of this._allTables)s.some(e=>e.startsWith(`${r}.`))&&e[r]++}return e}render(){return this.fab?this._isAdmin?e`
                <button type="button" class="sr-fab" title=${this._txt.title} aria-label=${this._txt.title} @click=${this._dhOpen}>
                    <iconify-icon icon="ri:shield-user-line"></iconify-icon>
                </button>
                ${this._open?e`
                    <div class="sr-screen" role="dialog" aria-modal="true" aria-label=${this._txt.title}
                        @keydown=${e=>{"Escape"===e.key&&this._dhClose()}}>${this._rbPanel()}</div>`:s}
            `:s:null===this._isAdmin?this._rbState("ri:loader-4-line",this._txt.loading,!0):this._isAdmin?this._rbPanel():this._rbState("ri:lock-line",this._txt.noPerm)}_rbPanel(){return e`
            <div class="sr">
                ${this._rbHead()}
                <div class="sr-bar">
                    ${this._rbTabs()}
                    ${this._rbSearch()}
                </div>
                ${this._rbLegend()}
                ${this._notice?e`
                    <div class="sr-notice" role="alert">
                        <iconify-icon icon="ri:error-warning-line"></iconify-icon>
                        <span>${this._notice}</span>
                        <button type="button" class="sr-icon-btn" aria-label=${this._txt.close} @click=${()=>{this._notice=""}}>
                            <iconify-icon icon="ri:close-line"></iconify-icon>
                        </button>
                    </div>`:s}
                ${this._rbBody()}
            </div>
        `}_rbHead(){const r=this._txt;return e`
            <div class="sr-head">
                <span class="sr-head-icon"><iconify-icon icon="ri:shield-keyhole-line"></iconify-icon></span>
                <div class="sr-head-title">
                    <span class="sr-h1">${r.title}</span>
                    <span class="sr-muted">${this._loading?e`<iconify-icon class="sr-spin" icon="ri:loader-4-line"></iconify-icon>`:`${this._users.length} ${r.users}`}</span>
                </div>
                <button type="button" class="sr-icon-btn" title=${r.reload} aria-label=${r.reload} ?disabled=${this._loading} @click=${()=>this._dcLoad()}>
                    <iconify-icon icon="ri:refresh-line"></iconify-icon>
                </button>
                ${this.fab?e`
                    <button type="button" class="sr-icon-btn" title=${r.close} aria-label=${r.close} @click=${this._dhClose}>
                        <iconify-icon icon="ri:close-line"></iconify-icon>
                    </button>`:s}
            </div>
        `}_rbTabs(){const r=this._comCounts(),t=new Set(this._legacyTables);return e`
            <div class="sr-tabs" role="tablist" @wheel=${this._dhTabsWheel}>
                ${this._allTables.map(i=>e`
                    <button type="button" role="tab" class="sr-tab${t.has(i)?" is-legacy":""}" aria-selected=${i===this._table?"true":"false"}
                        title=${t.has(i)?this._txt.legacy:i} @click=${()=>{this._table=i}}>
                        <span>${i}</span>
                        ${r[i]?e`<span class="sr-tab-count">${r[i]}</span>`:s}
                    </button>`)}
            </div>
        `}_rbSearch(){return e`
            <label class="sr-search">
                <iconify-icon icon="ri:search-line"></iconify-icon>
                <input type="search" .value=${this._query} placeholder=${this._txt.search} aria-label=${this._txt.search}
                    @input=${e=>{this._query=e.target.value}}>
            </label>
        `}_rbLegend(){const r=this._txt,t=h[this._table],i=this._legacyTables.includes(this._table);return e`
            <details class="sr-legend">
                <summary><iconify-icon icon="ri:information-line"></iconify-icon>${r.legend}</summary>
                <dl>
                    ${p.map(s=>e`<dt>${r.levels[s]}</dt><dd>${r.levelHints[s]}</dd>`)}
                </dl>
            </details>
            ${t?e`<p class="sr-bundle">${r.bundle}: ${t.join(", ")}</p>`:s}
            ${i?e`<p class="sr-bundle is-legacy">${r.legacy}</p>`:s}
        `}_rbBody(){const r=this._txt;if(this._loading&&!this._users.length)return this._rbState("ri:loader-4-line",r.loading,!0);if(this._error)return e`
            <div class="sr-state is-error">
                <iconify-icon icon="ri:error-warning-line"></iconify-icon>
                <span>${this._error}</span>
                <button type="button" class="sr-retry" @click=${()=>this._dcLoad()}>${r.retry}</button>
            </div>`;if(!this._users.length)return this._rbState("ri:user-line",r.empty);const s=this._filtered;return s.length?e`<div class="sr-list">${s.map(e=>this._rbCard(e))}</div>`:this._rbState("ri:search-line",r.noMatch)}_rbState(r,s,t=!1){return e`
            <div class="sr-state">
                <iconify-icon class=${t?"sr-spin":""} icon=${r}></iconify-icon>
                <span>${s}</span>
            </div>
        `}_rbCard(r){const t=this._comIsSuper(r),i=this._saving.has(r.id),a=this._comName(r),o=[r.email!==a?r.email:"",r.username?`@${r.username}`:""].filter(Boolean).join(" · ");return e`
            <article class="sr-card${t?" is-super":""}" aria-busy=${i?"true":"false"}>
                <header class="sr-card-head">
                    <span class="sr-avatar">${r.avatar?e`<img src=${r.avatar} alt="" loading="lazy" referrerpolicy="no-referrer">`:a.slice(0,1).toUpperCase()}</span>
                    <div class="sr-who">
                        <span class="sr-name">${a}</span>
                        ${o?e`<span class="sr-sub">${o}</span>`:s}
                    </div>
                    ${t?e`<span class="sr-badge">Super Admin</span>`:s}
                    ${i?e`<iconify-icon class="sr-spin sr-saving" icon="ri:loader-4-line"></iconify-icon>`:s}
                </header>
                ${t?e`<p class="sr-note">${this._txt.superNote}</p>`:this._rbAccess(r,i)}
            </article>
        `}_rbAccess(r,t){const i=this._txt,{levels:a,scope:l,custom:c}=n(r.roles,this._table),d=a.size>0,h=a.has("MANAGE"),m=[...a].some(e=>"VIEW"!==e);return e`
            <div class="sr-levels" role="group" aria-label=${i.legend}>
                ${p.map(o=>{const n="MANAGE"!==o&&(h||"VIEW"===o&&m),l=a.has(o)&&!n;return e`
                        <button type="button" class="sr-level${l?" is-on":""}${n?" is-implied":""}"
                            aria-pressed=${l||n?"true":"false"} title=${i.levelHints[o]}
                            ?disabled=${t||n} @click=${()=>this._dhLevel(r,o)}>
                            ${l||n?e`<iconify-icon icon="ri:check-line"></iconify-icon>`:s}${i.levels[o]}
                        </button>`})}
            </div>
            <div class="sr-foot">
                <span class="sr-label">${i.scope}</span>
                <div class="sr-seg" role="radiogroup" aria-label=${i.scope}>
                    ${o.map(s=>e`
                        <button type="button" role="radio" class="sr-seg-btn" aria-checked=${d&&l===s?"true":"false"}
                            ?disabled=${t||!d} @click=${()=>this._dhScope(r,s)}>${i.scopes[s]}</button>`)}
                </div>
                ${c.length?e`
                    <span class="sr-custom" title=${c.join(", ")}>
                        +${c.length} ${i.custom}
                        <button type="button" class="sr-custom-x" title=${i.clearCustom} aria-label=${i.clearCustom}
                            ?disabled=${t} @click=${()=>this._dhClearCustom(r)}>
                            <iconify-icon icon="ri:close-line"></iconify-icon>
                        </button>
                    </span>`:s}
            </div>
        `}};customElements.get("svc-roles")||customElements.define("svc-roles",g);export{g as SvcRoles};