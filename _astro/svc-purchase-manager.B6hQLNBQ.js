import{n as i}from"./rolldown-runtime.Bpd4S2KM.js";import{a as t,l as n,n as a,t as e}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import"./web-button.DzrrIr-d.js";import{a as s}from"./lingo.DeJvicYs.js";import{c as r,t as l}from"./service.sSgTDzwg.js";import{t as o}from"./svc-purchase-manager.DtDDpUn6.js";import{i as c,n as d,t as p}from"./service.CXdaJApM.js";import{i as h,o as m,s as u}from"./pending-checkout.BCm_VYI8.js";import{a as _,i as g,o as b,r as y,s as v,t as f}from"./billing.DxjPcxsB.js";var $=i({SvcPurchaseManager:()=>O,default:()=>O}),w={vi:{loading:"Đang xác nhận thanh toán…",successTitle:"Đã kích hoạt gói {plan}",trialSub:"Bạn được dùng thử tới {date}.",activeSub:"Cảm ơn bạn — gói đã sẵn sàng.",pendingTitle:"Đang xử lý thanh toán",pendingSub:"PayPal đang xác nhận. Trang sẽ tự cập nhật, bạn cũng có thể quay lại sau.",failedTitle:"Thanh toán chưa hoàn tất",failedSub:"Bạn chưa duyệt trên PayPal hoặc đã huỷ. Chưa có khoản nào bị trừ.",signinTitle:"Cần đăng nhập",signinSub:"Đăng nhập bằng tài khoản đã dùng để thanh toán để xem kết quả.",missingTitle:"Không tìm thấy gói đăng ký",next:"Tiếp tục",back:"Quay lại bảng giá",title:"Quản lý gói",subs:"thuê bao",reload:"Tải lại",retry:"Thử lại",close:"Đóng",loadingList:"Đang tải thuê bao…",errLoad:"Không tải được danh sách",empty:"Chưa có ai mua gói",noMatch:"Không có thuê bao phù hợp",search:"Tìm tên, email, mã subscription…",noPerm:"Cần quyền Xem trên bảng billing (hoặc Super Admin)",signinManage:"Đăng nhập để quản lý gói",kpiPaying:"Đang trả phí",kpiTrial:"Dùng thử",kpiMrr:"Doanh thu / tháng",kpiAttention:"Cần xử lý",mix:"Cơ cấu theo gói",month:"tháng",year:"năm",perMonth:"/tháng",perYear:"/năm",filters:{all:"Tất cả",active:"Đang trả phí",trial:"Dùng thử",attention:"Cần xử lý",pending:"Chờ duyệt",ended:"Đã kết thúc"},states:{active:"Đang hoạt động",trial:"Dùng thử",attention:"Cần xử lý",pending:"Chờ duyệt",ended:"Đã kết thúc"},renews:"Gia hạn {date}",trialUntil:"Dùng thử tới {date}",ended:"Trạng thái PayPal: {status}",failed:"{n} lần thu tiền lỗi",updated:"Cập nhật {date}",unknownPlan:"Gói không rõ",sync:"Đồng bộ từ PayPal",openPaypal:"Mở trên PayPal",cancel:"Huỷ gói",cancelAsk:"Huỷ gói của {name}? PayPal ngừng thu tiền ngay, không hoàn lại kỳ đang chạy.",confirm:"Huỷ gói",keep:"Giữ lại",errAction:"Thao tác thất bại",myTitle:"Gói của tôi",mySub:"Gói bạn đã mua",loadingOwn:"Đang tải gói của bạn…",errOwn:"Không tải được gói của bạn",noPlanTitle:"Bạn chưa có gói nào",noPlanSub:"Chọn một gói để bắt đầu — được dùng thử {days} ngày miễn phí.",endedSub:"Gói trước đã kết thúc. Chọn gói mới bất cứ lúc nào.",seePlans:"Xem các gói",changePlan:"Đổi gói",managePaypal:"Quản lý trên PayPal",cancelOwnAsk:"Huỷ gói của bạn? Gói dừng ngay và PayPal sẽ không trừ tiền thêm."},en:{loading:"Confirming your payment…",successTitle:"{plan} plan activated",trialSub:"Your trial runs until {date}.",activeSub:"Thank you — your plan is ready.",pendingTitle:"Payment processing",pendingSub:"PayPal is confirming it. This page updates on its own — you can also come back later.",failedTitle:"Payment not completed",failedSub:"The subscription was not approved on PayPal or you cancelled. Nothing was charged.",signinTitle:"Sign in required",signinSub:"Sign in with the account you paid with to see the result.",missingTitle:"Subscription not found",next:"Continue",back:"Back to pricing",title:"Plan manager",subs:"subscriptions",reload:"Reload",retry:"Retry",close:"Close",loadingList:"Loading subscriptions…",errLoad:"Could not load subscriptions",empty:"Nobody has bought a plan yet",noMatch:"No matching subscription",search:"Search name, email, subscription id…",noPerm:"Needs View access on the billing table (or Super Admin)",signinManage:"Sign in to manage plans",kpiPaying:"Paying",kpiTrial:"On trial",kpiMrr:"Monthly revenue",kpiAttention:"Needs attention",mix:"Plan mix",month:"monthly",year:"yearly",perMonth:"/mo",perYear:"/yr",filters:{all:"All",active:"Paying",trial:"Trial",attention:"Attention",pending:"Pending",ended:"Ended"},states:{active:"Active",trial:"Trial",attention:"Needs attention",pending:"Pending approval",ended:"Ended"},renews:"Renews {date}",trialUntil:"Trial until {date}",ended:"PayPal status: {status}",failed:"{n} failed payments",updated:"Updated {date}",unknownPlan:"Unknown plan",sync:"Sync from PayPal",openPaypal:"Open in PayPal",cancel:"Cancel plan",cancelAsk:"Cancel the plan of {name}? PayPal stops charging now; the running period is not refunded.",confirm:"Cancel plan",keep:"Keep it",errAction:"Action failed",myTitle:"My plan",mySub:"The plan you bought",loadingOwn:"Loading your plan…",errOwn:"Could not load your plan",noPlanTitle:"You have no plan yet",noPlanSub:"Pick a plan to start — with a free {days}-day trial.",endedSub:"Your last plan has ended. Pick a new one any time.",seePlans:"See plans",changePlan:"Change plan",managePaypal:"Manage on PayPal",cancelOwnAsk:"Cancel your plan? It stops now and PayPal will not charge you again."}},k=["all","active","trial","attention","pending","ended"],P={attention:0,pending:1,trial:2,active:3,ended:4},x={active:"--color-success",trial:"--color-info",attention:"--color-warning",pending:"--color-secondary",ended:"--color-neutral"},S=(i,t)=>i.replace(/\{(\w+)\}/g,(i,n)=>t[n]??""),C=i=>new Promise(t=>setTimeout(t,i)),T=i=>"number"==typeof i?i:i&&Math.floor(Date.parse(i)/1e3)||null;function M(i,t=Date.now()/1e3){return"suspended"===i.status?"attention":f.has(i.status)?i.failed_payments?"attention":i.trial_end&&i.trial_end>t?"trial":"active":"approval_pending"===i.status?"pending":"ended"}function L(i){const t=u(i.plan_id,i.interval);return t?v(t.price,i.interval):0}var O=class extends e{static shadowRootOptions={mode:"open"};static styles=[n(o)];static properties={ui:{type:String},theme:{type:String},lang:{type:String},txt:{type:Object},mode:{type:String},nextLink:{type:String},backLink:{type:String},_state:{state:!0},_record:{state:!0},_perm:{state:!0},_own:{state:!0},_items:{state:!0},_env:{state:!0},_loading:{state:!0},_error:{state:!0},_notice:{state:!0},_filter:{state:!0},_query:{state:!0},_busy:{state:!0},_confirm:{state:!0}};constructor(){super(),this.ui="pastel",this.theme="dark",this.lang="vi",this.txt=null,this.mode="",this.nextLink="/",this.backLink="/system/pricing",this._state="loading",this._record=null,this._perm=null,this._own=void 0,this._me=null,this._items=[],this._env="sandbox",this._loading=!1,this._error="",this._notice="",this._filter="all",this._query="",this._busy=new Map,this._confirm="",this._alive=!1,this._onPurchased=()=>{this._perm?.list?this._dcLoad():this._perm?.signedIn&&this._dcOwn()}}connectedCallback(){super.connectedCallback(),this._alive=!0,"complete"===this._mode?this._dcResolve():(window.addEventListener("purchase-complete",this._onPurchased),this._dcManage())}disconnectedCallback(){super.disconnectedCallback(),this._alive=!1,window.removeEventListener("purchase-complete",this._onPurchased)}get _txt(){return s(this.txt,w,this.lang)}get _mode(){return"complete"===this.mode||"manage"===this.mode?this.mode:new URLSearchParams(window.location.search).has("subscription_id")?"complete":"manage"}async _dcResolve(){const i=new URLSearchParams(window.location.search).get("subscription_id");if(i)if(await l.get())for(let t=0;t<8&&this._alive;t++){const t=await d.activate(i);if(!t.ok)return void(this._state=401===t.statusCode?"signin":"missing");if(y(t.data))return this._record=t.data,this._state="success",void window.dispatchEvent(new CustomEvent("purchase-complete",{detail:{subscriptionId:i,record:t.data}}));if("approval_pending"!==t.data?.status)return void(this._state="failed");this._state="pending",await C(1500)}else this._state="signin";else this._state="missing"}async _dcManage(){const i=await l.get(),t="active"===i?.status,n=n=>t&&r(i,"billing",n);this._me=i??null,this._perm={signedIn:!!i,list:n("list"),update:n("update"),cancel:n("cancel")},this._perm.list?this._dcLoad():i&&this._dcOwn()}async _dcOwn(){this._loading=!0,this._error="";const i=await d.subscription();this._loading=!1,i.ok?this._own=i.data?this._comWithMe(i.data):null:this._error=`${this._txt.errOwn}: ${i.message||i.statusCode}`}async _dcLoad(){this._loading=!0,this._error="";const i=await d.all();this._loading=!1,i.ok?(this._env=i.data?.env??"sandbox",this._items=i.data?.items??[]):this._error=`${this._txt.errLoad}: ${i.message||i.statusCode}`}async _dhAct(i,t){if(this._busy.has(i))return;const n=!this._perm?.list;this._confirm="",this._notice="",this._busy=new Map(this._busy).set(i,t);const a=n?"cancel"===t?await d.cancel():await d.activate(this._own?.subscription_id):"cancel"===t?await d.cancelFor(i):await d.syncFor(i);a.ok&&a.data&&n?(this._own=this._comWithMe(a.data),"cancel"===t&&this.dispatchEvent(new CustomEvent("subscription-change",{detail:{record:a.data},bubbles:!0,composed:!0}))):a.ok&&a.data?this._items=this._items.map(t=>t.user_id===i?{...t,...a.data}:t):this._notice=`${this._txt.errAction}: ${a.message||a.statusCode}`;const e=new Map(this._busy);e.delete(i),this._busy=e}_comName(i){return i.display_name||i.username||i.email||i.user_id}_comWithMe(i){const t=this._me??{};return{...i,user_id:t.id,email:t.email,display_name:t.display_name,username:t.username,avatar:t.avatar}}_emitPick(){this.dispatchEvent(new CustomEvent("purchase-pick",{detail:{},bubbles:!0,composed:!0}))}_comStats(i){const t=Date.now()/1e3,n=Object.fromEntries(k.map(i=>[i,0])),a=Object.fromEntries(h.plans.map(i=>[i.id,{month:0,year:0}]));let e=0;for(const s of i){const i=M(s,t);n.all++,n[i]++,"active"===i&&(e+=L(s)),f.has(s.status)&&a[s.plan_id]&&s.interval in a[s.plan_id]&&a[s.plan_id][s.interval]++}return{counts:n,mix:a,mrr:e}}_comVisible(){const i=this._query.trim().toLowerCase(),t=Date.now()/1e3;return this._items.map(i=>({r:i,s:M(i,t)})).filter(({r:t,s:n})=>("all"===this._filter||n===this._filter)&&(!i||[t.display_name,t.username,t.email,t.subscription_id,t.user_id].some(t=>(t||"").toLowerCase().includes(i)))).sort((i,t)=>P[i.s]-P[t.s]||(T(t.r.updated_at)??0)-(T(i.r.updated_at)??0))}render(){return"complete"===this._mode?this._rbComplete():this._rbManage()}_rbComplete(){const i=this._txt,n=t`<web-button type="outline" color="base-content" width="100%" height="38px" @click=${()=>{window.location.href=this.backLink}}>${i.back}</web-button>`;switch(this._state){case"success":return this._rbSuccess();case"pending":return this._rfState("ri:time-line",i.pendingTitle,i.pendingSub,"is-pending");case"failed":return this._rfState("ri:close-circle-line",i.failedTitle,i.failedSub,"is-failed",n);case"signin":return this._rfState("ri:user-line",i.signinTitle,i.signinSub,"",n);case"missing":return this._rfState("ri:question-line",i.missingTitle,"","",n);default:return this._rfState("ri:loader-4-line",i.loading,"","is-loading")}}_rbSuccess(){const i=this._txt,n=this._record,a=b(m(n.plan_id)?.name,this.lang)||n.plan_id,e=n.trial_end?S(i.trialSub,{date:g(n.trial_end,this.lang)}):i.activeSub;return this._rfState("ri:checkbox-circle-line",S(i.successTitle,{plan:a}),e,"is-success",t`<web-button type="fill" color="primary" width="100%" height="38px" @click=${()=>{window.location.href=this.nextLink}}>${i.next}</web-button>`)}_rfState(i,n,e,s="",r=a){return t`
            <div class="pk-wrap">
                <div class="pk-card ${s}" role="status">
                    <iconify-icon class="pk-icon" icon=${i}></iconify-icon>
                    <div class="pk-title">${n}</div>
                    ${e?t`<div class="pk-sub">${e}</div>`:a}
                    ${r}
                </div>
            </div>
        `}_rbManage(){const i=this._txt,n=this._perm;if(!n)return t`<div class="pm">${this._rbNote("ri:loader-4-line",i.loadingList,!0)}</div>`;if(!n.list)return n.signedIn?this._rbOwn():t`<div class="pm">${this._rbNote("ri:lock-line",i.signinManage)}</div>`;const e=this._comStats(this._items),s=t`${this._items.length} ${i.subs} · PayPal <span class="pm-env is-${this._env}">${this._env}</span>`;return t`
            <div class="pm">
                ${this._rbHead(i.title,s,()=>this._dcLoad())}
                ${this._items.length?t`${this._rbKpis(e)}${this._rbMix(e.mix)}`:a}
                <div class="pm-bar">
                    ${this._rbFilters(e.counts)}
                    <label class="pm-search">
                        <iconify-icon icon="ri:search-line"></iconify-icon>
                        <input type="search" .value=${this._query} placeholder=${i.search} aria-label=${i.search}
                            @input=${i=>{this._query=i.target.value}}>
                    </label>
                </div>
                ${this._rbNotice()}
                ${this._rbBody()}
            </div>
        `}_rbOwn(){const i=this._txt,n=this._own,e=n?M(n):"",s=n&&"ended"!==e;let r;return r=this._loading&&void 0===n?this._rbNote("ri:loader-4-line",i.loadingOwn,!0):this._error?t`
            <div class="pm-state is-error">
                <iconify-icon icon="ri:error-warning-line"></iconify-icon><span>${this._error}</span>
                <button type="button" class="pm-pill" @click=${()=>this._dcOwn()}>${i.retry}</button>
            </div>`:s?t`
            <div class="pm-list is-single">${this._rbCard(n,e,!0)}</div>
            <button type="button" class="pm-pill pm-change" @click=${this._emitPick}>
                <iconify-icon icon="ri:exchange-line"></iconify-icon>${i.changePlan}
            </button>`:t`
            <div class="pm-state pm-cta">
                <iconify-icon icon="ri:vip-crown-2-line"></iconify-icon>
                <b>${i.noPlanTitle}</b>
                <span>${n?i.endedSub:S(i.noPlanSub,{days:h.trialDays})}</span>
                <button type="button" class="pm-pill is-primary" @click=${this._emitPick}>${i.seePlans}</button>
            </div>
            ${n?t`<div class="pm-list is-single">${this._rbCard(n,e,!0)}</div>`:a}`,t`
            <div class="pm">
                ${this._rbHead(i.myTitle,i.mySub,()=>this._dcOwn())}
                ${this._rbNotice()}
                ${r}
            </div>
        `}_rbNotice(){return this._notice?t`
            <div class="pm-notice" role="alert">
                <iconify-icon icon="ri:error-warning-line"></iconify-icon><span>${this._notice}</span>
                <button type="button" class="pm-icon-btn" aria-label=${this._txt.close} @click=${()=>{this._notice=""}}>
                    <iconify-icon icon="ri:close-line"></iconify-icon>
                </button>
            </div>`:a}_rbNote(i,n,a=!1){return t`<div class="pm-state"><iconify-icon class=${a?"pm-spin":""} icon=${i}></iconify-icon><span>${n}</span></div>`}_rbHead(i,n,a){const e=this._txt;return t`
            <div class="pm-head">
                <span class="pm-head-icon"><iconify-icon icon="ri:vip-crown-2-line"></iconify-icon></span>
                <div class="pm-head-title">
                    <span class="pm-h1">${i}</span>
                    <span class="pm-muted">${this._loading?t`<iconify-icon class="pm-spin" icon="ri:loader-4-line"></iconify-icon>`:n}</span>
                </div>
                <button type="button" class="pm-icon-btn" title=${e.reload} aria-label=${e.reload} ?disabled=${this._loading} @click=${a}>
                    <iconify-icon icon="ri:refresh-line"></iconify-icon>
                </button>
            </div>
        `}_rbKpis({counts:i,mrr:n}){const a=this._txt,e=[["ri:vip-crown-2-line",i.active,a.kpiPaying,"active"],["ri:hourglass-2-line",i.trial,a.kpiTrial,"trial"],["ri:money-dollar-circle-line",_(n,h.currency,this.lang),a.kpiMrr,""],["ri:alarm-warning-line",i.attention,a.kpiAttention,"attention"]];return t`
            <div class="pm-kpis">
                ${e.map(([i,n,a,e])=>t`
                    <button type="button" class="pm-kpi" ?disabled=${!e} aria-pressed=${e&&this._filter===e?"true":"false"}
                        style=${e?`--tone:var(${x[e]})`:"--tone:var(--color-primary)"}
                        @click=${()=>{e&&(this._filter=this._filter===e?"all":e)}}>
                        <iconify-icon icon=${i}></iconify-icon>
                        <b>${n}</b>
                        <span>${a}</span>
                    </button>`)}
            </div>
        `}_rbMix(i){const n=this._txt,a=h.plans.map(t=>({name:b(t.name,this.lang),...i[t.id]})),e=Math.max(1,...a.map(i=>i.month+i.year));return t`
            <section class="pm-mix">
                <h3 class="pm-label">${n.mix}</h3>
                ${a.map(i=>t`
                    <div class="pm-mix-row">
                        <span class="pm-mix-name">${i.name}</span>
                        <span class="pm-mix-bar" role="img" aria-label=${`${i.name}: ${i.month} ${n.month}, ${i.year} ${n.year}`}>
                            <span class="is-month" style="width:${i.month/e*100}%"></span>
                            <span class="is-year" style="width:${i.year/e*100}%"></span>
                        </span>
                        <span class="pm-mix-n">${i.month+i.year}</span>
                    </div>`)}
                <div class="pm-mix-legend"><span class="is-month"></span>${n.month}<span class="is-year"></span>${n.year}</div>
            </section>
        `}_rbFilters(i){const n=this._txt;return t`
            <div class="pm-chips" role="tablist">
                ${k.filter(t=>"all"===t||i[t]).map(a=>t`
                    <button type="button" role="tab" class="pm-chip" aria-selected=${this._filter===a?"true":"false"}
                        @click=${()=>{this._filter=a}}>
                        ${n.filters[a]}<span class="pm-chip-n">${i[a]}</span>
                    </button>`)}
            </div>
        `}_rbBody(){const i=this._txt;if(this._loading&&!this._items.length)return this._rbNote("ri:loader-4-line",i.loadingList,!0);if(this._error)return t`
            <div class="pm-state is-error">
                <iconify-icon icon="ri:error-warning-line"></iconify-icon><span>${this._error}</span>
                <button type="button" class="pm-pill" @click=${()=>this._dcLoad()}>${i.retry}</button>
            </div>`;if(!this._items.length)return this._rbNote("ri:shopping-bag-3-line",i.empty);const n=this._comVisible();return n.length?t`<div class="pm-list">${n.map(({r:i,s:t})=>this._rbCard(i,t))}</div>`:this._rbNote("ri:search-line",i.noMatch)}_rbCard(i,n,e=!1){const s=this._txt,r=this._comName(i),l=m(i.plan_id),o=u(i.plan_id,i.interval),d=this._busy.get(i.user_id),v=i=>g(T(i),this.lang),f="trial"===n?S(s.trialUntil,{date:v(i.trial_end)}):"active"!==n&&"attention"!==n||!i.current_period_end?"ended"===n?S(s.ended,{status:i.status}):"":S(s.renews,{date:v(i.current_period_end)}),$=(e||this._perm.update)&&!!i.subscription_id,w=(e||this._perm.cancel)&&(y(i)||"suspended"===i.status),k=e?p:i.subscription_id?c(this._env,i.subscription_id):"";return t`
            <article class="pm-card" style="--tone:var(${x[n]})" aria-busy=${d?"true":"false"}>
                <header class="pm-card-head">
                    <span class="pm-avatar">${i.avatar?t`<img src=${i.avatar} alt="" loading="lazy" referrerpolicy="no-referrer">`:String(r).slice(0,1).toUpperCase()}</span>
                    <div class="pm-who">
                        <span class="pm-name">${r}</span>
                        ${i.email&&i.email!==r?t`<span class="pm-sub">${i.email}</span>`:a}
                    </div>
                    <span class="pm-status">${s.states[n]}</span>
                </header>

                <div class="pm-plan">
                    <span class="pm-plan-name">${l?b(l.name,this.lang):s.unknownPlan}</span>
                    ${o?t`<span class="pm-price">${_(o.price.amount,h.currency,this.lang)}${"year"===i.interval?s.perYear:s.perMonth}</span>`:a}
                </div>
                <div class="pm-meta">
                    ${f?t`<span>${f}</span>`:a}
                    ${i.failed_payments?t`<span class="pm-warn"><iconify-icon icon="ri:error-warning-line"></iconify-icon>${S(s.failed,{n:i.failed_payments})}</span>`:a}
                    ${i.updated_at?t`<span class="pm-muted">${S(s.updated,{date:v(i.updated_at)})}</span>`:a}
                </div>

                ${this._confirm===i.user_id?t`
                    <div class="pm-confirm" role="alertdialog">
                        <span>${e?s.cancelOwnAsk:S(s.cancelAsk,{name:r})}</span>
                        <div class="pm-confirm-actions">
                            <button type="button" class="pm-pill" @click=${()=>{this._confirm=""}}>${s.keep}</button>
                            <button type="button" class="pm-pill is-danger" @click=${()=>this._dhAct(i.user_id,"cancel")}>${s.confirm}</button>
                        </div>
                    </div>`:t`
                    <div class="pm-actions">
                        ${$?t`
                            <button type="button" class="pm-icon-btn" title=${s.sync} aria-label=${s.sync} ?disabled=${!!d} @click=${()=>this._dhAct(i.user_id,"sync")}>
                                <iconify-icon class=${"sync"===d?"pm-spin":""} icon=${"sync"===d?"ri:loader-4-line":"ri:refresh-line"}></iconify-icon>
                            </button>`:a}
                        ${k?t`
                            <a class="pm-icon-btn" href=${k} target="_blank" rel="noopener"
                                title=${e?s.managePaypal:s.openPaypal} aria-label=${e?s.managePaypal:s.openPaypal}>
                                <iconify-icon icon="ri:paypal-line"></iconify-icon>
                            </a>`:a}
                        ${w?t`
                            <button type="button" class="pm-cancel" ?disabled=${!!d} @click=${()=>{this._confirm=i.user_id}}>
                                <iconify-icon class=${"cancel"===d?"pm-spin":""} icon=${"cancel"===d?"ri:loader-4-line":"ri:close-circle-line"}></iconify-icon>${s.cancel}
                            </button>`:a}
                    </div>`}
            </article>
        `}};customElements.get("svc-purchase-manager")||customElements.define("svc-purchase-manager",O);export{$ as t};