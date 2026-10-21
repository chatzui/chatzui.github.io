import{a as e,c as i,l as t,n as s,t as a}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import{T as n}from"./util.6fuX_jJt.js";import{c as r,t as c}from"./service.sSgTDzwg.js";import{t as o}from"./style-map.CPa_JDxU.js";import"./svc-account.CNg1BvGl.js";import{a as l,i as d,o as p,r as h,t as m}from"./service.BY-gzU2L.js";import{t as u}from"./svc-purchase-manager.DtDDpUn6.js";var _={vi:{title:"{name} — đơn & bản quyền",orders:"Đơn chuyển khoản",users:"Người dùng",reload:"Tải lại",retry:"Thử lại",close:"Đóng",loading:"Đang tải…",errLoad:"Không tải được dữ liệu",signin:"Đăng nhập để quản lý",noPerm:"Cần quyền Xem trên bảng billing (hoặc Super Admin)",kpiClaimed:"Chờ đối soát",kpiVerified:"Đã nhận tiền",kpiRejected:"Đã thu hồi",kpiRevenue:"Đã thu (đã đối soát)",kpiActive:"Đang dùng gói",filters:{all:"Tất cả",claimed:"Chờ đối soát",verified:"Đã nhận tiền",rejected:"Đã thu hồi"},ufilters:{all:"Tất cả",active:"Đang dùng",trial:"Dùng thử",expired:"Hết hạn",blocked:"Bị khoá"},search:"Tìm tên, email, mã CK…",empty:"Chưa có đơn nào",emptyUsers:"Chưa có ai đăng ký",noMatch:"Không có kết quả phù hợp",transfer:"Nội dung CK: {id}",claimedAt:"Báo đã chuyển {d}",checkedAt:"Đối soát {d}",until:"Hạn sau đơn: {d}",verify:"Đã nhận tiền",reject:"Không nhận được — thu hồi",restore:"Thực ra đã nhận — cộng lại",rejectAsk:"Thu hồi {days} ngày của {name}? Hạn dùng bị trừ ngay, extension bị chặn nếu hết hạn.",confirm:"Thu hồi",keep:"Giữ lại",errAction:"Thao tác thất bại",paidTill:"Dùng tới {d}",expired:"Hết hạn {d}",blocked:"Bị khoá",usesLeft:"Dùng thử · còn {n}/{max} lượt",usesOver:"Hết lượt thử",daysWait:"Dùng thử {n} ngày · chưa bắt đầu",daysTill:"Dùng thử · tới {d}",daysOver:"Hết dùng thử ({d})",devices:"{n}/{max} máy",noKey:"chưa tạo khoá",key:"khoá …{h}",block:"Khoá bản quyền",unblock:"Mở khoá",blockAsk:"Khoá bản quyền của {name}? Extension của họ bị chặn ngay lần kiểm khoá sau.",blockOk:"Khoá",states:{claimed:"Chờ đối soát",verified:"Đã nhận tiền",rejected:"Đã thu hồi",active:"Đang dùng",trial:"Dùng thử",expired:"Hết hạn",blocked:"Bị khoá"}},en:{title:"{name} — orders & licenses",orders:"Transfers",users:"Users",reload:"Reload",retry:"Retry",close:"Close",loading:"Loading…",errLoad:"Could not load data",signin:"Sign in to manage",noPerm:"Needs View access on the billing table (or Super Admin)",kpiClaimed:"To check",kpiVerified:"Received",kpiRejected:"Taken back",kpiRevenue:"Collected (checked)",kpiActive:"On a paid plan",filters:{all:"All",claimed:"To check",verified:"Received",rejected:"Taken back"},ufilters:{all:"All",active:"Paid",trial:"Trial",expired:"Expired",blocked:"Blocked"},search:"Search name, email, transfer note…",empty:"No orders yet",emptyUsers:"Nobody signed up yet",noMatch:"No match",transfer:"Transfer note: {id}",claimedAt:"Reported paid {d}",checkedAt:"Checked {d}",until:"Valid until after order: {d}",verify:"Money received",reject:"Not received — take back",restore:"Actually received — add back",rejectAsk:"Take back {days} days from {name}? Their access shrinks now and the extension stops if it runs out.",confirm:"Take back",keep:"Keep",errAction:"Action failed",paidTill:"Valid until {d}",expired:"Expired {d}",blocked:"Blocked",usesLeft:"Trial · {n}/{max} left",usesOver:"Trial used up",daysWait:"{n}-day trial · not started",daysTill:"Trial · until {d}",daysOver:"Trial ended ({d})",devices:"{n}/{max} computers",noKey:"no key yet",key:"key …{h}",block:"Suspend license",unblock:"Unsuspend",blockAsk:"Suspend the license of {name}? Their extension stops at its next key check.",blockOk:"Suspend",states:{claimed:"To check",verified:"Received",rejected:"Taken back",active:"Active",trial:"Trial",expired:"Expired",blocked:"Blocked"}}},b=["all","claimed","verified","rejected"],v=["all","active","trial","expired","blocked"],f={claimed:0,rejected:1,verified:2},k={claimed:"--color-warning",verified:"--color-success",rejected:"--color-error",active:"--color-success",trial:"--color-info",expired:"--color-neutral",blocked:"--color-error"},y=(e,i)=>e.replace(/\{(\w+)\}/g,(e,t)=>i[t]??""),g=e=>"number"==typeof e?e:e&&Date.parse(e)||0,$=e=>e.blocked?"blocked":e.active?"active":e.paid_until?"expired":"trial",x=class extends a{static shadowRootOptions={mode:"open"};static styles=[t(u),i`
        /* Thanh đổi extension — segmented, màu riêng từng extension (products.js color) */
        .zm-switch {
            display: grid; grid-auto-columns: minmax(0, 1fr); grid-auto-flow: column; gap: 4px;
            margin-top: var(--pm-gutter); padding: 4px; border-radius: 14px; background: var(--pm-surface);
        }
        .zm-tab {
            display: flex; align-items: center; gap: 0.6rem; min-width: 0; min-height: 52px; padding: 0.4rem 0.75rem;
            border-radius: 11px; color: var(--pm-muted); text-align: left; transition: background 0.15s, color 0.15s, box-shadow 0.15s;
        }
        .zm-tab:hover { background: var(--pm-surface-2); color: var(--color-base-content); }
        .zm-tab[aria-selected='true'] {
            background: var(--color-base-100); color: var(--color-base-content);
            box-shadow: 0 1px 2px color-mix(in oklab, var(--color-base-content) 10%, transparent),
                0 6px 18px -10px color-mix(in oklab, var(--zap-ink) 60%, transparent);
        }
        .zm-ico {
            display: grid; flex-shrink: 0; place-items: center; width: 34px; height: 34px; border-radius: 10px; font-size: 1.1rem;
            background: color-mix(in oklab, var(--zap) 22%, transparent); color: var(--zap-ink);
        }
        .zm-tab[aria-selected='true'] .zm-ico { background: var(--zap); color: var(--zap-fg); }
        .zm-name { display: flex; flex-direction: column; min-width: 0; line-height: 1.25; }
        .zm-name b, .zm-name small { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .zm-name b { font-size: 0.92rem; font-weight: 650; }
        .zm-name small { color: var(--pm-muted); font-size: 0.75rem; }
        .pm-head-icon.is-zap { background: color-mix(in oklab, var(--zap) 22%, transparent); color: var(--zap-ink); }
        @media (max-width: 420px) { .zm-name small { display: none; } }
    `];static properties={product:{type:String},ui:{type:String},theme:{type:String},lang:{type:String},_perm:{state:!0},_tab:{state:!0},_orders:{state:!0},_licenses:{state:!0},_loading:{state:!0},_error:{state:!0},_notice:{state:!0},_filter:{state:!0},_query:{state:!0},_busy:{state:!0},_confirm:{state:!0}};constructor(){super(),this.product=h[0],this.ui="pastel",this.theme="dark",this.lang="vi",this._perm=null,this._tab="orders",this._orders=[],this._licenses=[],this._loading=!1,this._error="",this._notice="",this._filter="all",this._query="",this._busy=new Map,this._confirm=""}get _t(){return _["en"===this.lang?"en":"vi"]}get _p(){return p(this.product)??p(h[0])}get _api(){return m(this._p.id)}connectedCallback(){super.connectedCallback(),this._dcPerm()}updated(e){e.has("product")&&void 0!==e.get("product")&&this._perm?.list&&this._dcLoad()}async _dcPerm(){const e=await c.get(),i="active"===e?.status,t=t=>i&&r(e,"billing",t);this._perm={signedIn:!!e,list:t("list"),update:t("update"),cancel:t("cancel")},this._perm.list&&this._dcLoad()}async _dcLoad(){const e=this._p.id;this._loading=!0,this._error="",this._notice="",this._confirm="";const i=await this._api.all();e===this._p.id&&(this._loading=!1,i.ok?(this._orders=i.data?.orders??[],this._licenses=i.data?.licenses??[]):this._error=`${this._t.errLoad}: ${i.message||i.statusCode}`)}_dhProduct(e){e!==this._p.id&&(this._orders=[],this._licenses=[],this._filter="all",this.product=e,this.dispatchEvent(new CustomEvent("product-change",{detail:{product:e},bubbles:!0,composed:!0})))}async _dhAct(e,i){if(this._busy.has(i))return;const t=this._api;this._confirm="",this._notice="",this._busy=new Map(this._busy).set(i,e);const s="verify"===e?await t.verify(i):"reject"===e?await t.reject(i):await t.block(i,"block"===e);s.ok?"verify"===e||"reject"===e?(this._orders=this._orders.map(e=>e.id===i?{...e,status:s.data.status,checked_at:Date.now()}:e),this._mergeLicense(s.data.license)):this._mergeLicense(s.data):this._notice=`${this._t.errAction}: ${s.message||s.code||s.statusCode}`;const a=new Map(this._busy);a.delete(i),this._busy=a}_mergeLicense(e){e?.user_id&&(this._licenses=this._licenses.map(i=>i.user_id===e.user_id?{...i,...e}:i))}_name(e){return e.display_name||e.username||e.email||e.user_id}_date(e){const i=g(e);return i?new Date(i).toLocaleString("en"===this.lang?"en-GB":"vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}_matches(e,i=[]){const t=this._query.trim().toLowerCase();return!t||[e.display_name,e.username,e.email,e.user_id,...i].some(e=>String(e||"").toLowerCase().includes(t))}_trial(e){const i=this._t,t=e.trial??{};return null!=t.uses?t.left?y(i.usesLeft,{n:t.left,max:t.uses}):i.usesOver:t.until?t.until>Date.now()?y(i.daysTill,{d:this._date(t.until)}):y(i.daysOver,{d:this._date(t.until)}):y(i.daysWait,{n:t.days})}render(){const i=this._t,t=this._perm;return t?t.list?e`
            <div class="pm">
                ${this._rbProducts()}
                ${this._rbHead()}
                ${this._rbKpis()}
                <div class="pm-bar">
                    <div class="pm-chips" role="tablist">
                        ${["orders","users"].map(t=>e`
                            <button type="button" role="tab" class="pm-chip" aria-selected=${this._tab===t?"true":"false"}
                                @click=${()=>{this._tab=t,this._filter="all"}}>${i[t]}</button>`)}
                    </div>
                    <label class="pm-search">
                        <iconify-icon icon="ri:search-line"></iconify-icon>
                        <input type="search" .value=${this._query} placeholder=${i.search} aria-label=${i.search} @input=${e=>{this._query=e.target.value}}>
                    </label>
                </div>
                ${this._rbFilters()}
                ${this._notice?e`
                    <div class="pm-notice" role="alert">
                        <iconify-icon icon="ri:error-warning-line"></iconify-icon><span>${this._notice}</span>
                        <button type="button" class="pm-icon-btn" aria-label=${i.close} @click=${()=>{this._notice=""}}><iconify-icon icon="ri:close-line"></iconify-icon></button>
                    </div>`:s}
                ${this._rbBody()}
            </div>
        `:e`<div class="pm">${this._rbNote("ri:lock-line",t.signedIn?i.noPerm:i.signin)}</div>`:e`<div class="pm">${this._rbNote("ri:loader-4-line",i.loading,!0)}</div>`}_rbNote(i,t,s=!1){return e`<div class="pm-state"><iconify-icon class=${s?"pm-spin":""} icon=${i}></iconify-icon><span>${t}</span></div>`}_zapVars(e){const i=e.color;return o({"--zap":i.fill,"--zap-fg":i.fg,"--zap-ink":"light"===this.theme?i.ink:i.inkDark})}_rbProducts(){const i="en"!==this.lang;return e`
            <div class="zm-switch" role="tablist">
                ${h.map(t=>{const a=p(t),n=d(t,"month");return e`
                        <button type="button" role="tab" class="zm-tab" style=${this._zapVars(a)} aria-selected=${this._p.id===t?"true":"false"}
                            @click=${()=>this._dhProduct(t)}>
                            <span class="zm-ico"><iconify-icon icon=${a.icon}></iconify-icon></span>
                            <span class="zm-name"><b>${a.name}</b>${n?e`<small>${l(n.amount,i?"vi":"en")}${i?"/tháng":"/month"}</small>`:s}</span>
                        </button>`})}
            </div>
        `}_rbHead(){const i=this._t;return e`
            <div class="pm-head">
                <span class="pm-head-icon is-zap" style=${this._zapVars(this._p)}><iconify-icon icon=${this._p.icon}></iconify-icon></span>
                <div class="pm-head-title">
                    <span class="pm-h1">${y(i.title,{name:this._p.name})}</span>
                    <span class="pm-muted">${this._loading?e`<iconify-icon class="pm-spin" icon="ri:loader-4-line"></iconify-icon>`:`${this._orders.length} ${i.orders.toLowerCase()} · ${this._licenses.length} ${i.users.toLowerCase()}`}</span>
                </div>
                <button type="button" class="pm-icon-btn" title=${i.reload} aria-label=${i.reload} ?disabled=${this._loading} @click=${()=>this._dcLoad()}>
                    <iconify-icon icon="ri:refresh-line"></iconify-icon>
                </button>
            </div>
        `}_rbKpis(){const i=this._t,t=e=>this._orders.filter(i=>i.status===e).length,s=this._orders.filter(e=>"verified"===e.status).reduce((e,i)=>e+Number(i.amount||0),0),a=[["ri:time-line",t("claimed"),i.kpiClaimed,"orders","claimed"],["ri:checkbox-circle-line",t("verified"),i.kpiVerified,"orders","verified"],["ri:arrow-go-back-line",t("rejected"),i.kpiRejected,"orders","rejected"],["ri:money-dollar-circle-line",l(s,"en"===this.lang?"en":"vi"),i.kpiRevenue,"",""],["ri:vip-crown-2-line",this._licenses.filter(e=>"active"===$(e)).length,i.kpiActive,"users","active"]];return e`
            <div class="pm-kpis">
                ${a.map(([i,t,s,a,n])=>e`
                    <button type="button" class="pm-kpi" ?disabled=${!n} aria-pressed=${n&&this._tab===a&&this._filter===n?"true":"false"}
                        style=${n?`--tone:var(${k[n]})`:"--tone:var(--color-primary)"}
                        @click=${()=>{n&&(this._tab=a,this._filter=this._filter===n?"all":n)}}>
                        <iconify-icon icon=${i}></iconify-icon><b>${t}</b><span>${s}</span>
                    </button>`)}
            </div>
        `}_rbFilters(){const i=this._t,t="orders"===this._tab?b:v,s="orders"===this._tab?i.filters:i.ufilters,a=e=>"orders"===this._tab?this._orders.filter(i=>"all"===e||i.status===e).length:this._licenses.filter(i=>"all"===e||$(i)===e).length;return e`
            <div class="pm-chips">
                ${t.filter(e=>"all"===e||a(e)).map(i=>e`
                    <button type="button" class="pm-chip" aria-selected=${this._filter===i?"true":"false"} @click=${()=>{this._filter=i}}>
                        ${s[i]}<span class="pm-chip-n">${a(i)}</span>
                    </button>`)}
            </div>
        `}_rbBody(){const i=this._t;if(this._loading&&!this._orders.length&&!this._licenses.length)return this._rbNote("ri:loader-4-line",i.loading,!0);if(this._error)return e`
            <div class="pm-state is-error">
                <iconify-icon icon="ri:error-warning-line"></iconify-icon><span>${this._error}</span>
                <button type="button" class="pm-pill" @click=${()=>this._dcLoad()}>${i.retry}</button>
            </div>`;if("orders"===this._tab){if(!this._orders.length)return this._rbNote("ri:bank-card-line",i.empty);const t=this._orders.filter(e=>("all"===this._filter||e.status===this._filter)&&this._matches(e,[e.id])).sort((e,i)=>f[e.status]-f[i.status]||g(i.claimed_at)-g(e.claimed_at));return t.length?e`<div class="pm-list">${t.map(e=>this._rbOrder(e))}</div>`:this._rbNote("ri:search-line",i.noMatch)}if(!this._licenses.length)return this._rbNote("ri:user-line",i.emptyUsers);const t=this._licenses.filter(e=>("all"===this._filter||$(e)===this._filter)&&this._matches(e)).sort((e,i)=>g(i.updated_at)-g(e.updated_at));return t.length?e`<div class="pm-list">${t.map(e=>this._rbUser(e))}</div>`:this._rbNote("ri:search-line",i.noMatch)}_rbWho(i,t){const a=this._name(i);return e`
            <header class="pm-card-head">
                <span class="pm-avatar">${i.avatar?e`<img src=${i.avatar} alt="" loading="lazy" referrerpolicy="no-referrer">`:String(a).slice(0,1).toUpperCase()}</span>
                <div class="pm-who">
                    <span class="pm-name">${a}</span>
                    ${i.email&&i.email!==a?e`<span class="pm-sub">${i.email}</span>`:s}
                </div>
                <span class="pm-status">${this._t.states[t]}</span>
            </header>
        `}_rbOrder(i){const t=this._t,a="en"===this.lang?"en":"vi",n=d(this._p.id,i.plan),r=this._busy.get(i.id),c=this._name(i),o=this._confirm===`reject:${i.id}`;return e`
            <article class="pm-card" style="--tone:var(${k[i.status]})" aria-busy=${r?"true":"false"}>
                ${this._rbWho(i,i.status)}
                <div class="pm-plan">
                    <span class="pm-plan-name">${this._p.name} · ${n?.name[a]??i.plan}</span>
                    <span class="pm-price">${l(Number(i.amount||0),a)}</span>
                </div>
                <div class="pm-meta">
                    <span><b>${y(t.transfer,{id:i.id})}</b></span>
                    <span>${y(t.claimedAt,{d:this._date(i.claimed_at)})}</span>
                    ${i.paid_until?e`<span class="pm-muted">${y(t.until,{d:this._date(i.paid_until)})}</span>`:s}
                    ${i.checked_at?e`<span class="pm-muted">${y(t.checkedAt,{d:this._date(i.checked_at)})}</span>`:s}
                </div>
                ${this._perm.update?o?e`
                    <div class="pm-confirm" role="alertdialog">
                        <span>${y(t.rejectAsk,{days:i.days,name:c})}</span>
                        <div class="pm-confirm-actions">
                            <button type="button" class="pm-pill" @click=${()=>{this._confirm=""}}>${t.keep}</button>
                            <button type="button" class="pm-pill is-danger" @click=${()=>this._dhAct("reject",i.id)}>${t.confirm}</button>
                        </div>
                    </div>`:e`
                    <div class="pm-actions">
                        ${"verified"!==i.status?e`
                            <button type="button" class="pm-pill is-primary" ?disabled=${!!r} @click=${()=>this._dhAct("verify",i.id)}>
                                <iconify-icon class=${"verify"===r?"pm-spin":""} icon=${"verify"===r?"ri:loader-4-line":"ri:checkbox-circle-line"}></iconify-icon>
                                ${"rejected"===i.status?t.restore:t.verify}</button>`:s}
                        ${"rejected"!==i.status?e`
                            <button type="button" class="pm-cancel" ?disabled=${!!r} @click=${()=>{this._confirm=`reject:${i.id}`}}>
                                <iconify-icon class=${"reject"===r?"pm-spin":""} icon=${"reject"===r?"ri:loader-4-line":"ri:arrow-go-back-line"}></iconify-icon>${t.reject}
                            </button>`:s}
                    </div>`:s}
            </article>
        `}_rbUser(i){const t=this._t,a=$(i),n=this._busy.get(i.user_id),r=this._name(i),c=this._confirm===`block:${i.user_id}`,o="blocked"===a?t.blocked:"active"===a?y(t.paidTill,{d:this._date(i.paid_until)}):"expired"===a?y(t.expired,{d:this._date(i.paid_until)}):this._trial(i),l=null!=i.trial?.uses?i.trial.used>0:!!i.trial?.until;return e`
            <article class="pm-card" style="--tone:var(${k[a]})" aria-busy=${n?"true":"false"}>
                ${this._rbWho(i,a)}
                <div class="pm-plan"><span class="pm-plan-name">${o}</span></div>
                <div class="pm-meta">
                    <span>${i.has_key?y(t.key,{h:i.key_hint??""}):t.noKey}</span>
                    <span>${y(t.devices,{n:i.devices,max:i.device_max??this._p.devices})}</span>
                    ${"trial"!==a&&l?e`<span class="pm-muted">${this._trial(i)}</span>`:s}
                </div>
                ${this._perm.cancel?c?e`
                    <div class="pm-confirm" role="alertdialog">
                        <span>${y(t.blockAsk,{name:r})}</span>
                        <div class="pm-confirm-actions">
                            <button type="button" class="pm-pill" @click=${()=>{this._confirm=""}}>${t.keep}</button>
                            <button type="button" class="pm-pill is-danger" @click=${()=>this._dhAct("block",i.user_id)}>${t.blockOk}</button>
                        </div>
                    </div>`:e`
                    <div class="pm-actions">
                        ${i.blocked?e`
                            <button type="button" class="pm-pill is-primary" ?disabled=${!!n} @click=${()=>this._dhAct("unblock",i.user_id)}>
                                <iconify-icon icon="ri:lock-unlock-line"></iconify-icon>${t.unblock}</button>`:e`
                            <button type="button" class="pm-cancel" ?disabled=${!!n} @click=${()=>{this._confirm=`block:${i.user_id}`}}>
                                <iconify-icon class=${n?"pm-spin":""} icon=${n?"ri:loader-4-line":"ri:lock-line"}></iconify-icon>${t.block}</button>`}
                    </div>`:s}
            </article>
        `}};customElements.get("svc-zap-manager")||customElements.define("svc-zap-manager",x);var w=document.getElementById("manager"),z=new URLSearchParams(location.search).get("p");w&&p(z)&&(w.product=z),w?.addEventListener("product-change",e=>{const i=new URL(location.href);i.searchParams.set("p",e.detail.product),history.replaceState(null,"",i)}),n("lang",e=>{w&&(w.lang="vi"===e?"vi":"en")}),n("data-theme",e=>{w&&(w.theme="light"===e?"light":"dark")}),document.addEventListener("account-change",()=>w?._dcPerm?.());