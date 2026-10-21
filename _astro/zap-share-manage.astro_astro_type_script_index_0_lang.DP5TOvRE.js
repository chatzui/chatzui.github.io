import{a as e,l as i,n as t,t as s}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import{T as a}from"./util.usvuopSX.js";import{c as n,t as r}from"./service.sSgTDzwg.js";import"./svc-account.DAXjeymd.js";import{t as c}from"./svc-purchase-manager.DtDDpUn6.js";import{i as l,n as o,r as d,t as h}from"./service.BhN3Ax6N.js";var p={vi:{title:"Zap Share — đơn & bản quyền",orders:"Đơn chuyển khoản",users:"Người dùng",reload:"Tải lại",retry:"Thử lại",close:"Đóng",loading:"Đang tải…",errLoad:"Không tải được dữ liệu",signin:"Đăng nhập để quản lý",noPerm:"Cần quyền Xem trên bảng billing (hoặc Super Admin)",kpiClaimed:"Chờ đối soát",kpiVerified:"Đã nhận tiền",kpiRejected:"Đã thu hồi",kpiRevenue:"Đã thu (đã đối soát)",kpiActive:"Đang dùng gói",filters:{all:"Tất cả",claimed:"Chờ đối soát",verified:"Đã nhận tiền",rejected:"Đã thu hồi"},ufilters:{all:"Tất cả",active:"Đang dùng",trial:"Dùng thử",expired:"Hết hạn",blocked:"Bị khoá"},search:"Tìm tên, email, mã CK…",empty:"Chưa có đơn nào",emptyUsers:"Chưa có ai đăng ký",noMatch:"Không có kết quả phù hợp",transfer:"Nội dung CK: {id}",claimedAt:"Báo đã chuyển {d}",checkedAt:"Đối soát {d}",until:"Hạn sau đơn: {d}",verify:"Đã nhận tiền",reject:"Không nhận được — thu hồi",restore:"Thực ra đã nhận — cộng lại",rejectAsk:"Thu hồi {days} ngày của {name}? Hạn dùng bị trừ ngay, extension bị chặn nếu hết hạn.",confirm:"Thu hồi",keep:"Giữ lại",errAction:"Thao tác thất bại",paidTill:"Dùng tới {d}",expired:"Hết hạn {d}",trialLeft:"Dùng thử · còn {n}/{max} lượt",trialOver:"Hết lượt thử",blocked:"Bị khoá",devices:"{n}/{max} máy",noKey:"chưa tạo khoá",key:"khoá …{h}",block:"Khoá bản quyền",unblock:"Mở khoá",blockAsk:"Khoá bản quyền của {name}? Extension của họ bị chặn ngay lần Đăng sau.",blockOk:"Khoá",states:{claimed:"Chờ đối soát",verified:"Đã nhận tiền",rejected:"Đã thu hồi",active:"Đang dùng",trial:"Dùng thử",expired:"Hết hạn",blocked:"Bị khoá"}},en:{title:"Zap Share — orders & licenses",orders:"Transfers",users:"Users",reload:"Reload",retry:"Retry",close:"Close",loading:"Loading…",errLoad:"Could not load data",signin:"Sign in to manage",noPerm:"Needs View access on the billing table (or Super Admin)",kpiClaimed:"To check",kpiVerified:"Received",kpiRejected:"Taken back",kpiRevenue:"Collected (checked)",kpiActive:"On a paid plan",filters:{all:"All",claimed:"To check",verified:"Received",rejected:"Taken back"},ufilters:{all:"All",active:"Paid",trial:"Trial",expired:"Expired",blocked:"Blocked"},search:"Search name, email, transfer note…",empty:"No orders yet",emptyUsers:"Nobody signed up yet",noMatch:"No match",transfer:"Transfer note: {id}",claimedAt:"Reported paid {d}",checkedAt:"Checked {d}",until:"Valid until after order: {d}",verify:"Money received",reject:"Not received — take back",restore:"Actually received — add back",rejectAsk:"Take back {days} days from {name}? Their access shrinks now and the extension stops if it runs out.",confirm:"Take back",keep:"Keep",errAction:"Action failed",paidTill:"Valid until {d}",expired:"Expired {d}",trialLeft:"Trial · {n}/{max} posts left",trialOver:"Trial used up",blocked:"Blocked",devices:"{n}/{max} computers",noKey:"no key yet",key:"key …{h}",block:"Suspend license",unblock:"Unsuspend",blockAsk:"Suspend the license of {name}? Their extension stops at the next Post.",blockOk:"Suspend",states:{claimed:"To check",verified:"Received",rejected:"Taken back",active:"Active",trial:"Trial",expired:"Expired",blocked:"Blocked"}}},m=["all","claimed","verified","rejected"],u=["all","active","trial","expired","blocked"],_={claimed:0,rejected:1,verified:2},b={claimed:"--color-warning",verified:"--color-success",rejected:"--color-error",active:"--color-success",trial:"--color-info",expired:"--color-neutral",blocked:"--color-error"},f=(e,i)=>e.replace(/\{(\w+)\}/g,(e,t)=>i[t]??""),k=e=>"number"==typeof e?e:e&&Date.parse(e)||0,y=e=>e.blocked?"blocked":e.active?"active":e.paid_until?"expired":"trial",v=class extends s{static shadowRootOptions={mode:"open"};static styles=[i(c)];static properties={ui:{type:String},theme:{type:String},lang:{type:String},_perm:{state:!0},_tab:{state:!0},_orders:{state:!0},_licenses:{state:!0},_loading:{state:!0},_error:{state:!0},_notice:{state:!0},_filter:{state:!0},_query:{state:!0},_busy:{state:!0},_confirm:{state:!0}};constructor(){super(),this.ui="pastel",this.theme="dark",this.lang="vi",this._perm=null,this._tab="orders",this._orders=[],this._licenses=[],this._loading=!1,this._error="",this._notice="",this._filter="all",this._query="",this._busy=new Map,this._confirm=""}get _t(){return p["en"===this.lang?"en":"vi"]}connectedCallback(){super.connectedCallback(),this._dcPerm()}async _dcPerm(){const e=await r.get(),i="active"===e?.status,t=t=>i&&n(e,"billing",t);this._perm={signedIn:!!e,list:t("list"),update:t("update"),cancel:t("cancel")},this._perm.list&&this._dcLoad()}async _dcLoad(){this._loading=!0,this._error="";const e=await h.all();this._loading=!1,e.ok?(this._orders=e.data?.orders??[],this._licenses=e.data?.licenses??[]):this._error=`${this._t.errLoad}: ${e.message||e.statusCode}`}async _dhAct(e,i){if(this._busy.has(i))return;this._confirm="",this._notice="",this._busy=new Map(this._busy).set(i,e);const t="verify"===e?await h.verify(i):"reject"===e?await h.reject(i):await h.block(i,"block"===e);t.ok?"verify"===e||"reject"===e?(this._orders=this._orders.map(e=>e.id===i?{...e,status:t.data.status,checked_at:Date.now()}:e),this._mergeLicense(t.data.license)):this._mergeLicense(t.data):this._notice=`${this._t.errAction}: ${t.message||t.code||t.statusCode}`;const s=new Map(this._busy);s.delete(i),this._busy=s}_mergeLicense(e){e?.user_id&&(this._licenses=this._licenses.map(i=>i.user_id===e.user_id?{...i,...e}:i))}_name(e){return e.display_name||e.username||e.email||e.user_id}_date(e){const i=k(e);return i?new Date(i).toLocaleString("en"===this.lang?"en-GB":"vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}_matches(e,i=[]){const t=this._query.trim().toLowerCase();return!t||[e.display_name,e.username,e.email,e.user_id,...i].some(e=>String(e||"").toLowerCase().includes(t))}render(){const i=this._t,s=this._perm;return s?s.list?e`
            <div class="pm">
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
                    </div>`:t}
                ${this._rbBody()}
            </div>
        `:e`<div class="pm">${this._rbNote("ri:lock-line",s.signedIn?i.noPerm:i.signin)}</div>`:e`<div class="pm">${this._rbNote("ri:loader-4-line",i.loading,!0)}</div>`}_rbNote(i,t,s=!1){return e`<div class="pm-state"><iconify-icon class=${s?"pm-spin":""} icon=${i}></iconify-icon><span>${t}</span></div>`}_rbHead(){const i=this._t;return e`
            <div class="pm-head">
                <span class="pm-head-icon"><iconify-icon icon="ri:share-forward-line"></iconify-icon></span>
                <div class="pm-head-title">
                    <span class="pm-h1">${i.title}</span>
                    <span class="pm-muted">${this._loading?e`<iconify-icon class="pm-spin" icon="ri:loader-4-line"></iconify-icon>`:`${this._orders.length} ${i.orders.toLowerCase()} · ${this._licenses.length} ${i.users.toLowerCase()}`}</span>
                </div>
                <button type="button" class="pm-icon-btn" title=${i.reload} aria-label=${i.reload} ?disabled=${this._loading} @click=${()=>this._dcLoad()}>
                    <iconify-icon icon="ri:refresh-line"></iconify-icon>
                </button>
            </div>
        `}_rbKpis(){const i=this._t,t=e=>this._orders.filter(i=>i.status===e).length,s=this._orders.filter(e=>"verified"===e.status).reduce((e,i)=>e+Number(i.amount||0),0),a=[["ri:time-line",t("claimed"),i.kpiClaimed,"orders","claimed"],["ri:checkbox-circle-line",t("verified"),i.kpiVerified,"orders","verified"],["ri:arrow-go-back-line",t("rejected"),i.kpiRejected,"orders","rejected"],["ri:money-dollar-circle-line",l(s,"en"===this.lang?"en":"vi"),i.kpiRevenue,"",""],["ri:vip-crown-2-line",this._licenses.filter(e=>"active"===y(e)).length,i.kpiActive,"users","active"]];return e`
            <div class="pm-kpis">
                ${a.map(([i,t,s,a,n])=>e`
                    <button type="button" class="pm-kpi" ?disabled=${!n} aria-pressed=${n&&this._tab===a&&this._filter===n?"true":"false"}
                        style=${n?`--tone:var(${b[n]})`:"--tone:var(--color-primary)"}
                        @click=${()=>{n&&(this._tab=a,this._filter=this._filter===n?"all":n)}}>
                        <iconify-icon icon=${i}></iconify-icon><b>${t}</b><span>${s}</span>
                    </button>`)}
            </div>
        `}_rbFilters(){const i=this._t,t="orders"===this._tab?m:u,s="orders"===this._tab?i.filters:i.ufilters,a=e=>"orders"===this._tab?this._orders.filter(i=>"all"===e||i.status===e).length:this._licenses.filter(i=>"all"===e||y(i)===e).length;return e`
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
            </div>`;if("orders"===this._tab){if(!this._orders.length)return this._rbNote("ri:bank-card-line",i.empty);const t=this._orders.filter(e=>("all"===this._filter||e.status===this._filter)&&this._matches(e,[e.id])).sort((e,i)=>_[e.status]-_[i.status]||k(i.claimed_at)-k(e.claimed_at));return t.length?e`<div class="pm-list">${t.map(e=>this._rbOrder(e))}</div>`:this._rbNote("ri:search-line",i.noMatch)}if(!this._licenses.length)return this._rbNote("ri:user-line",i.emptyUsers);const t=this._licenses.filter(e=>("all"===this._filter||y(e)===this._filter)&&this._matches(e)).sort((e,i)=>k(i.updated_at)-k(e.updated_at));return t.length?e`<div class="pm-list">${t.map(e=>this._rbUser(e))}</div>`:this._rbNote("ri:search-line",i.noMatch)}_rbWho(i,s){const a=this._name(i);return e`
            <header class="pm-card-head">
                <span class="pm-avatar">${i.avatar?e`<img src=${i.avatar} alt="" loading="lazy" referrerpolicy="no-referrer">`:String(a).slice(0,1).toUpperCase()}</span>
                <div class="pm-who">
                    <span class="pm-name">${a}</span>
                    ${i.email&&i.email!==a?e`<span class="pm-sub">${i.email}</span>`:t}
                </div>
                <span class="pm-status">${this._t.states[s]}</span>
            </header>
        `}_rbOrder(i){const s=this._t,a="en"===this.lang?"en":"vi",n=d(i.plan),r=this._busy.get(i.id),c=this._name(i),o=this._confirm===`reject:${i.id}`;return e`
            <article class="pm-card" style="--tone:var(${b[i.status]})" aria-busy=${r?"true":"false"}>
                ${this._rbWho(i,i.status)}
                <div class="pm-plan">
                    <span class="pm-plan-name">Zap Share · ${n?.name[a]??i.plan}</span>
                    <span class="pm-price">${l(Number(i.amount||0),a)}</span>
                </div>
                <div class="pm-meta">
                    <span><b>${f(s.transfer,{id:i.id})}</b></span>
                    <span>${f(s.claimedAt,{d:this._date(i.claimed_at)})}</span>
                    ${i.paid_until?e`<span class="pm-muted">${f(s.until,{d:this._date(i.paid_until)})}</span>`:t}
                    ${i.checked_at?e`<span class="pm-muted">${f(s.checkedAt,{d:this._date(i.checked_at)})}</span>`:t}
                </div>
                ${this._perm.update?o?e`
                    <div class="pm-confirm" role="alertdialog">
                        <span>${f(s.rejectAsk,{days:i.days,name:c})}</span>
                        <div class="pm-confirm-actions">
                            <button type="button" class="pm-pill" @click=${()=>{this._confirm=""}}>${s.keep}</button>
                            <button type="button" class="pm-pill is-danger" @click=${()=>this._dhAct("reject",i.id)}>${s.confirm}</button>
                        </div>
                    </div>`:e`
                    <div class="pm-actions">
                        ${"verified"!==i.status?e`
                            <button type="button" class="pm-pill is-primary" ?disabled=${!!r} @click=${()=>this._dhAct("verify",i.id)}>
                                <iconify-icon class=${"verify"===r?"pm-spin":""} icon=${"verify"===r?"ri:loader-4-line":"ri:checkbox-circle-line"}></iconify-icon>
                                ${"rejected"===i.status?s.restore:s.verify}</button>`:t}
                        ${"rejected"!==i.status?e`
                            <button type="button" class="pm-cancel" ?disabled=${!!r} @click=${()=>{this._confirm=`reject:${i.id}`}}>
                                <iconify-icon class=${"reject"===r?"pm-spin":""} icon=${"reject"===r?"ri:loader-4-line":"ri:arrow-go-back-line"}></iconify-icon>${s.reject}
                            </button>`:t}
                    </div>`:t}
            </article>
        `}_rbUser(i){const s=this._t,a=y(i),n=this._busy.get(i.user_id),r=this._name(i),c=this._confirm===`block:${i.user_id}`,l="blocked"===a?s.blocked:"active"===a?f(s.paidTill,{d:this._date(i.paid_until)}):"expired"===a?f(s.expired,{d:this._date(i.paid_until)}):i.trial_left?f(s.trialLeft,{n:i.trial_left,max:i.trial_max}):s.trialOver;return e`
            <article class="pm-card" style="--tone:var(${b[a]})" aria-busy=${n?"true":"false"}>
                ${this._rbWho(i,a)}
                <div class="pm-plan"><span class="pm-plan-name">${l}</span></div>
                <div class="pm-meta">
                    <span>${i.has_key?f(s.key,{h:i.key_hint??""}):s.noKey}</span>
                    <span>${f(s.devices,{n:i.devices,max:i.device_max??o.devices})}</span>
                    ${"trial"!==a&&i.trial_used?e`<span class="pm-muted">${f(s.trialLeft,{n:i.trial_left,max:i.trial_max})}</span>`:t}
                </div>
                ${this._perm.cancel?c?e`
                    <div class="pm-confirm" role="alertdialog">
                        <span>${f(s.blockAsk,{name:r})}</span>
                        <div class="pm-confirm-actions">
                            <button type="button" class="pm-pill" @click=${()=>{this._confirm=""}}>${s.keep}</button>
                            <button type="button" class="pm-pill is-danger" @click=${()=>this._dhAct("block",i.user_id)}>${s.blockOk}</button>
                        </div>
                    </div>`:e`
                    <div class="pm-actions">
                        ${i.blocked?e`
                            <button type="button" class="pm-pill is-primary" ?disabled=${!!n} @click=${()=>this._dhAct("unblock",i.user_id)}>
                                <iconify-icon icon="ri:lock-unlock-line"></iconify-icon>${s.unblock}</button>`:e`
                            <button type="button" class="pm-cancel" ?disabled=${!!n} @click=${()=>{this._confirm=`block:${i.user_id}`}}>
                                <iconify-icon class=${n?"pm-spin":""} icon=${n?"ri:loader-4-line":"ri:lock-line"}></iconify-icon>${s.block}</button>`}
                    </div>`:t}
            </article>
        `}};customElements.get("svc-zap-manager")||customElements.define("svc-zap-manager",v);var $=document.getElementById("manager");a("lang",e=>{$&&($.lang="vi"===e?"vi":"en")}),a("data-theme",e=>{$&&($.theme="light"===e?"light":"dark")}),document.addEventListener("account-change",()=>$?._dcPerm?.());