import{a as e,c as i,n as t,t as n}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import{T as a}from"./util.6fuX_jJt.js";import{t as r}from"./service.sSgTDzwg.js";import{t as s}from"./style-map.CPa_JDxU.js";import"./svc-account.CNg1BvGl.js";import"./web-dialog.BfrF0jkq.js";import"./svc-pay-valider.nbmA1uZk.js";import{a as o,n as l,o as c,t as h}from"./service.BY-gzU2L.js";var d={vi:{trial:"Dùng thử",trialPrice:"Miễn phí",perMonth:"/tháng",perYear:"/năm",approx:"≈ {v}/tháng",save:"Tiết kiệm {n}%",monthNote:"Trả trước 30 ngày, hết hạn tự khoá — không tự trừ tiền.",yearNote:"Trả trước 365 ngày, rẻ hơn mua lẻ từng tháng.",getTrial:"Nhận khoá dùng thử",pay:"Thanh toán qua VietQR",renew:"Gia hạn qua VietQR",paying:"Đang tạo đơn…",devicesFeat:"Dùng chung trên {n} máy",mine:"Khoá của tôi",signin:"Đăng nhập để nhận khoá dùng thử và quản lý gói.",noKey:"Chưa có khoá. Tạo khoá rồi dán vào extension ({tab}).",makeKey:"Tạo khoá",rotate:"Tạo khoá mới",rotateAsk:"Khoá cũ sẽ hết hiệu lực và mọi máy phải nhập khoá mới. Tiếp tục?",fresh:"Khoá chỉ hiện đầy đủ lúc này — sao chép và dán vào extension ngay.",copy:"Sao chép",copied:"Đã chép",paidTill:"Đã mua · dùng tới {d}",daysLeft:"còn {n} ngày",expired:"Hết hạn ngày {d} — gia hạn để dùng tiếp.",usesLeft:"Dùng thử · còn {n}/{max} lượt",usesOver:"Đã dùng hết {max} lượt thử — mua gói để dùng tiếp.",daysWait:"Dùng thử {n} ngày — bắt đầu khi extension kiểm khoá lần đầu.",daysTill:"Dùng thử · tới {d}",daysOver:"Đã hết thời gian dùng thử — mua gói để dùng tiếp.",devices:"Máy đang dùng khoá: {n}/{max}",renewSoon:"Sắp hết hạn — gia hạn để không bị gián đoạn.",payTitle:"Chuyển khoản gói {plan} — {amount}",payHow:"Quét mã bằng app ngân hàng. Nội dung chuyển khoản đã có sẵn trong mã:",payNote:"Bấm xác nhận sau khi đã chuyển — gói kích hoạt ngay. Chúng tôi sẽ đối soát giao dịch; nếu không nhận được tiền, thời gian gia hạn sẽ bị thu hồi.",done:"Đã kích hoạt — dùng tới {d}. Cảm ơn bạn! Chúng tôi sẽ đối soát giao dịch trong thời gian sớm nhất.",err:{too_many_unverified:"Bạn còn đơn chưa được đối soát — vui lòng chờ chúng tôi kiểm tra rồi mua tiếp.",blocked:"Tài khoản đã bị tạm khoá bản quyền — liên hệ hỗ trợ.",generic:"Có lỗi xảy ra — thử lại."},legal:"Thanh toán là trả trước cho thời gian dùng, không tự gia hạn."},en:{trial:"Free trial",trialPrice:"Free",perMonth:"/month",perYear:"/year",approx:"≈ {v}/month",save:"Save {n}%",monthNote:"30 days prepaid, locks when it ends — never charged automatically.",yearNote:"365 days prepaid, cheaper than month by month.",getTrial:"Get a trial key",pay:"Pay by VietQR",renew:"Renew by VietQR",paying:"Creating order…",devicesFeat:"Share on {n} computers",mine:"My key",signin:"Sign in to get a trial key and manage your plan.",noKey:"No key yet. Create one and paste it into the extension ({tab}).",makeKey:"Create key",rotate:"New key",rotateAsk:"The old key stops working and every computer must enter the new one. Continue?",fresh:"The full key is shown only now — copy it into the extension right away.",copy:"Copy",copied:"Copied",paidTill:"Paid · valid until {d}",daysLeft:"{n} days left",expired:"Expired on {d} — renew to keep going.",usesLeft:"Trial · {n}/{max} left",usesOver:"All {max} trial uses are gone — buy a plan to keep going.",daysWait:"{n}-day trial — starts the first time the extension checks the key.",daysTill:"Trial · until {d}",daysOver:"The trial has ended — buy a plan to keep going.",devices:"Computers using the key: {n}/{max}",renewSoon:"Ending soon — renew to avoid interruption.",payTitle:"Bank transfer for {plan} — {amount}",payHow:"Scan with your banking app. The transfer note is already in the code:",payNote:"Confirm after you have transferred — the plan starts right away. We check every transfer; if no money arrives, the renewal time is taken back.",done:"Activated — valid until {d}. Thank you! We will check the transfer shortly.",err:{too_many_unverified:"You still have a transfer waiting to be checked — please wait for it before buying again.",blocked:"Your license is suspended — please contact support.",generic:"Something went wrong — try again."},legal:"Payments prepay time of use and never renew automatically."}},p={share:{vi:{trialUnit:"{n} lượt đăng",trialNote:"Đăng nhập để nhận khoá — không cần thanh toán.",tab:"tab “Đích & cài đặt”",feats:["Đăng không giới hạn số bài","Facebook · Instagram · Threads · LinkedIn · X","Hẹn giờ đăng, nhiều bài một lúc"],steps:["Cài extension từ Chrome Web Store","Mở extension → tab “Đích & cài đặt” → dán khoá","Mở trang cần đăng → Thêm bài → Đăng"]},en:{trialUnit:"{n} posts",trialNote:"Sign in to get a key — no payment needed.",tab:"“Targets & settings” tab",feats:["Unlimited posts","Facebook · Instagram · Threads · LinkedIn · X","Scheduled posts, many at once"],steps:["Install the extension from the Chrome Web Store","Open it → “Targets & settings” tab → paste the key","Open the page to share → Add post → Post"]}},support:{vi:{trialUnit:"{n} ngày dùng đủ tính năng",trialNote:"Đăng nhập để nhận khoá — tính từ lần đầu bật extension, không cần thanh toán.",tab:"tab “Cài đặt”",feats:["Tự trả lời không giới hạn tin nhắn","Messenger · Zalo · Business Suite · mọi khung chat web","AI chạy ngay trên máy — kiến thức không rời máy"],steps:["Cài extension từ Chrome Web Store","Mở extension → tab “Cài đặt” → dán khoá, tải model AI","Nạp kiến thức, 🎯 chọn khung chat → bật trả lời"]},en:{trialUnit:"{n} day, every feature",trialNote:"Sign in to get a key — counted from the first time the extension runs, no payment needed.",tab:"“Settings” tab",feats:["Unlimited automatic replies","Messenger · Zalo · Business Suite · any web chat","AI runs on your computer — knowledge never leaves it"],steps:["Install the extension from the Chrome Web Store","Open it → “Settings” tab → paste the key, download the AI model","Add knowledge, 🎯 pick the chat box → switch replies on"]}}},m=(e,i)=>e.replace(/\{(\w+)\}/g,(e,t)=>i[t]??""),g={vi:"{id} - {name} goi {plan}",en:"{id} - {name} {plan} plan"},u=class extends n{static properties={product:{type:String},lang:{type:String},theme:{type:String,reflect:!0},_user:{state:!0},_lic:{state:!0},_key:{state:!0},_copied:{state:!0},_busy:{state:!0},_pay:{state:!0},_done:{state:!0},_error:{state:!0}};constructor(){super(),this.product="share",this.lang="vi",this.theme="dark",this._user=void 0,this._lic=null,this._key="",this._copied=!1,this._busy=null,this._pay=null,this._done=null,this._error="",this._onAccount=e=>this._setUser(e.detail?.user??null)}get _lang(){return"en"===this.lang?"en":"vi"}get _t(){return d[this._lang]}get _p(){return c(this.product)??c("share")}get _c(){return p[this._p.id][this._lang]}get _api(){return h(this._p.id)}connectedCallback(){super.connectedCallback(),this.addEventListener("account-change",this._onAccount),r.get().then(e=>this._setUser(e??null)).catch(()=>this._setUser(null))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("account-change",this._onAccount)}async _setUser(e){const i=(e?.id??null)!==(this._user?.id??null)||void 0===this._user;this._user=e,i&&(this._key="",this._lic=null,this._pay=null,this._done=null,e&&await this._load())}async _load(){const e=await this._api.license();e.ok&&(this._lic=e.data)}async _makeKey(){if(this._lic?.has_key&&!confirm(this._t.rotateAsk))return;this._busy="key",this._error="";const e=await this._api.newKey();if(this._busy=null,!e.ok)return void(this._error=this._t.err.generic);const{key:i,...t}=e.data;this._key=i,this._lic=t,this._copied=!1}async _copy(){try{await navigator.clipboard.writeText(this._key),this._copied=!0}catch{}}async _toMine(){await this.updateComplete,await(this.renderRoot.querySelector("web-dialog")?.updateComplete),this.renderRoot.querySelector("#mine")?.scrollIntoView({behavior:"smooth",block:"start"})}async _buy(e){if(!this._user)return this._toMine();this._busy=e,this._error="",this._done=null;const i=await this._api.order(e);this._busy=null,i.ok?this._pay=i.data:this._error=this._t.err[i.code]??this._t.err.generic}async _paid(){const e=this._pay;if(!e||this._busy)return;this._busy="paid",this._error="";const i=await this._api.paid(e.orderId);this._busy=null,i.ok&&["claimed","verified"].includes(i.data?.status)?(this._lic=i.data.license,this._done={until:i.data.paid_until},this._pay=null,this._toMine()):this._error=this._t.err[i.code]??this._t.err.generic}_date(e,i=!1){return new Date(e).toLocaleString("en"===this._lang?"en-GB":"vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",...i?{hour:"2-digit",minute:"2-digit"}:{}})}render(){const i=this._p.color,n={"--zap":i.fill,"--zap-fg":i.fg,"--zap-ink":"light"===this.theme?i.ink:i.inkDark};return e`
            <div style=${s(n)}>
                ${this._done?e`<p class="note paid" role="status"><iconify-icon icon="ri:checkbox-circle-fill"></iconify-icon>
                    ${m(this._t.done,{d:this._done.until?this._date(this._done.until):""})}</p>`:t}
                <div class="plans">
                    ${this._rbTrial()}
                    ${this._p.plans.map(e=>this._rbPlan(e))}
                </div>
                ${this._rbPay()}
                ${this._error&&!this._pay?e`<p class="note err" role="alert">${this._error}</p>`:t}
                <p class="legal">${this._t.legal}</p>
                ${this._rbMine()}
            </div>
        `}_rbPay(){const i=this._t,n=this._lang,a=this._pay,r=a&&this._p.plans.find(e=>e.id===a.plan),s=a?m(i.payTitle,{plan:r?.name[n]??a.plan,amount:o(a.amount,n)}):"",c=a?m(g[n],{id:a.orderId,name:this._p.name,plan:(h=r?.name[n]??a.plan,String(h).normalize("NFD").replace(/\p{M}/gu,"").replace(/[đĐ]/g,e=>"đ"===e?"d":"D"))}):"";var h;const d=()=>{this._pay=null,this._error=""};return e`
            <web-dialog ?open=${!!a} title=${s} lang=${n} ui="pastel" theme=${this.theme} maxWidth="480px" @close=${d}>
                ${a?e`
                    <div class="pay" aria-busy=${"paid"===this._busy?"true":"false"}>
                        <p class="desc">${i.payHow} <code>${c}</code></p>
                        <svc-pay-valider ui="pastel" theme=${this.theme} lang=${n} method=${l.method} .wallet=${l.wallet} .vietqr=${l.vietqr}
                            paymentId=${a.orderId} note=${c} .amount=${a.amount}
                            @valider:paid=${()=>this._paid()} @valider:back=${d}></svc-pay-valider>
                        ${this._error?e`<p class="note err" role="alert">${this._error}</p>`:t}
                        <p class="note warn">${i.payNote}</p>
                    </div>`:t}
            </web-dialog>
        `}_rbTrial(){const i=this._t,t=this._c,n=this._lic,a=this._user&&n&&!n.has_key,r=this._p.trial.uses??this._p.trial.days;return e`
            <article class="plan">
                <h3>${i.trial}</h3>
                <p class="price"><strong>${i.trialPrice}</strong></p>
                <p class="sub">${m(t.trialUnit,{n:r})}</p>
                <p class="desc">${t.trialNote}</p>
                <button type="button" class="btn ghost" ?disabled=${this._busy||this._user&&!a}
                    @click=${()=>this._user?this._makeKey():this._toMine()}>
                    <iconify-icon icon="ri:key-2-line"></iconify-icon>${i.getTrial}</button>
            </article>
        `}_rbPlan(i){const n=this._t,a=this._lang,r="year"===i.id,s=[...this._c.feats,m(n.devicesFeat,{n:this._p.devices})];return e`
            <article class="plan ${r?"hot":""}">
                ${i.off?e`<span class="badge">${m(n.save,{n:i.off})}</span>`:t}
                <h3>${i.name[a]}</h3>
                <p class="price"><strong>${o(i.amount,a)}</strong><span>${r?n.perYear:n.perMonth}</span></p>
                <p class="sub">${r?m(n.approx,{v:o(100*Math.round(i.amount/12/100),a)}):" "}</p>
                <p class="desc">${r?n.yearNote:n.monthNote}</p>
                <ul>${s.map(i=>e`<li><iconify-icon icon="ri:check-line"></iconify-icon>${i}</li>`)}</ul>
                <button type="button" class="btn" ?disabled=${!!this._busy} @click=${()=>this._buy(i.id)}>
                    <iconify-icon icon="ri:qr-code-line"></iconify-icon>${this._busy===i.id?n.paying:this._lic?.paid_until?n.renew:n.pay}</button>
            </article>
        `}_rbMine(){const i=this._t;return e`
            <section class="mine ${this._lic?.active?"glow":""}" id="mine">
                <h3><iconify-icon icon="ri:shield-keyhole-line"></iconify-icon>${i.mine}</h3>
                ${void 0===this._user?e`<p class="muted">…</p>`:this._user?this._rbLicense():e`<p class="muted">${i.signin}</p>
                        <div class="acc"><svc-account embedded ui="pastel" theme=${this.theme} lang=${this._lang}></svc-account></div>`}
                <ol class="steps">${this._c.steps.map(i=>e`<li>${i}</li>`)}</ol>
            </section>
        `}_rbTrialFact(i){const n=this._t,a=i.trial??{};if(null!=a.uses)return e`<li class=${a.left?"":"err"}><iconify-icon icon="ri:gift-line"></iconify-icon>
                ${a.left?m(n.usesLeft,{n:a.left,max:a.uses}):m(n.usesOver,{max:a.uses})}</li>`;if(i.paid_until)return t;const r=a.until&&a.until>Date.now();return e`<li class=${!a.until||r?"":"err"}><iconify-icon icon="ri:gift-line"></iconify-icon>
            ${a.until?r?m(n.daysTill,{d:this._date(a.until,!0)}):n.daysOver:m(n.daysWait,{n:a.days})}</li>`}_rbLicense(){const i=this._t,n=this._lic;if(!n)return e`<p class="muted">…</p>`;const a=n.paid_until?Math.ceil((n.paid_until-Date.now())/864e5):0;return e`
            ${this._key?e`
                <div class="key fresh">
                    <code>${this._key}</code>
                    <button type="button" class="btn small" @click=${()=>this._copy()}>
                        <iconify-icon icon=${this._copied?"ri:check-line":"ri:file-copy-line"}></iconify-icon>${this._copied?i.copied:i.copy}</button>
                </div>
                <p class="note warn">${i.fresh}</p>`:n.has_key?e`
                <div class="key"><code>${this._p.key}••••••••••••${n.key_hint??""}</code>
                    <button type="button" class="btn small ghost" ?disabled=${!!this._busy} @click=${()=>this._makeKey()}>
                        <iconify-icon icon="ri:refresh-line"></iconify-icon>${i.rotate}</button></div>`:e`
                <p class="muted">${m(i.noKey,{tab:this._c.tab})}</p>
                <button type="button" class="btn" ?disabled=${!!this._busy} @click=${()=>this._makeKey()}>
                    <iconify-icon icon="ri:key-2-line"></iconify-icon>${i.makeKey}</button>`}

            <ul class="facts">
                ${n.active?e`<li class="ok"><iconify-icon icon="ri:checkbox-circle-fill"></iconify-icon>
                    ${m(i.paidTill,{d:this._date(n.paid_until)})} · ${m(i.daysLeft,{n:a})}</li>`:n.paid_until?e`<li class="err"><iconify-icon icon="ri:time-line"></iconify-icon>${m(i.expired,{d:this._date(n.paid_until)})}</li>`:t}
                ${n.active?t:this._rbTrialFact(n)}
                ${n.active&&a<=this._p.renewSoonDays?e`<li class="warn"><iconify-icon icon="ri:alarm-warning-line"></iconify-icon>${i.renewSoon}</li>`:t}
                ${n.has_key?e`<li><iconify-icon icon="ri:computer-line"></iconify-icon>${m(i.devices,{n:n.devices,max:n.device_max})}</li>`:t}
            </ul>
        `}static styles=i`
        :host {
            display: block; color: var(--color-base-content);
            --line: color-mix(in oklab, var(--color-base-content) 12%, transparent);
        }
        * { box-sizing: border-box; }
        iconify-icon { font-size: 1.1em; flex: none; }
        .plans { display: grid; gap: 1rem; grid-template-columns: minmax(0, 1fr); }
        @media (min-width: 760px) { .plans { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .plan {
            position: relative; display: flex; flex-direction: column; gap: .35rem; padding: 1.4rem 1.25rem 1.25rem;
            border: 1px solid var(--line); border-radius: 1rem; background: var(--color-base-100);
        }
        .plan.hot { border: 2px solid var(--zap); box-shadow: 0 18px 40px -26px color-mix(in oklab, var(--zap-ink) 70%, transparent); }
        .plan h3 { margin: 0; font-size: 1rem; font-weight: 700; }
        .badge { position: absolute; top: -.7rem; right: 1rem; padding: .15rem .6rem; border-radius: 99px; font-size: .72rem; font-weight: 700; background: var(--zap); color: var(--zap-fg); }
        .price { margin: .2rem 0 0; display: flex; align-items: baseline; gap: .25rem; }
        .price strong { font-size: 1.9rem; line-height: 1.1; letter-spacing: -.02em; }
        .price span, .sub, .muted, .desc { opacity: .72; font-size: .88rem; }
        .sub { margin: 0; min-height: 1.2em; }
        .desc { margin: .3rem 0 .5rem; }
        ul { margin: 0 0 .9rem; padding: 0; list-style: none; display: grid; gap: .35rem; font-size: .9rem; }
        li { display: flex; align-items: center; gap: .45rem; }
        .plan li iconify-icon { color: var(--zap-ink); }
        .btn {
            margin-top: auto; display: inline-flex; align-items: center; justify-content: center; gap: .45rem; width: 100%;
            padding: .7rem 1rem; border-radius: .7rem; border: 1px solid transparent; font: inherit; font-weight: 600; cursor: pointer;
            background: var(--zap); color: var(--zap-fg); transition: filter .15s, transform .15s;
        }
        .btn:hover:not(:disabled) { filter: brightness(.96); transform: translateY(-1px); }
        .btn:disabled { opacity: .55; cursor: not-allowed; }
        .btn.ghost { background: transparent; color: inherit; border-color: var(--line); }
        .btn.small { width: auto; margin: 0; padding: .4rem .75rem; font-size: .85rem; }
        .pay { display: grid; gap: .8rem; }
        .pay .desc { margin: 0; }
        .pay code { padding: .1rem .4rem; border-radius: .35rem; font: 700 .9rem ui-monospace, monospace; background: color-mix(in oklab, var(--zap) 35%, transparent); }
        .pay .note, .pay .note.warn { margin: 0; }
        .pay[aria-busy="true"] svc-pay-valider { opacity: .6; pointer-events: none; }
        .legal { margin: .8rem .2rem 0; font-size: .8rem; opacity: .65; }
        .note { display: flex; align-items: center; gap: .5rem; margin: 0 0 1rem; padding: .7rem .9rem; border-radius: .7rem; font-size: .9rem;
            background: color-mix(in oklab, var(--color-base-content) 6%, transparent); border-left: 3px solid var(--zap); }
        .note.paid { border-left-color: var(--color-success, #16a34a); }
        .note.err { border-left-color: var(--color-error, #dc2626); }
        .note.warn { border-left-color: var(--color-warning, #d97706); margin: .6rem 0 0; }
        .mine { margin-top: 2rem; padding: 1.4rem 1.25rem; border: 1px solid var(--line); border-radius: 1rem; background: var(--color-base-100); display: grid; gap: .8rem;
            scroll-margin-top: 6rem; /* chừa chỗ thanh menu cố định khi cuộn tới */ }
        /* gói đã trả tiền còn hạn: khung "Khoá của tôi" phát sáng không dừng — lấy khoá ở đây. Cùng hiệu ứng panel đang
           focus của canvas (node/css/svc-node-glow.css), màu theo extension. */
        .mine.glow {
            border-color: transparent;
            box-shadow: 0 0 0 2px var(--zap-ink), 0 0 0 6px color-mix(in oklab, var(--zap-ink) 25%, transparent);
            animation: mine-glow 1.2s ease-in-out infinite;
        }
        @keyframes mine-glow {
            50% { box-shadow: 0 0 0 2px var(--zap-ink), 0 0 0 10px color-mix(in oklab, var(--zap-ink) 0%, transparent); }
        }
        @media (prefers-reduced-motion: reduce) { .mine.glow { animation: none; } }
        .mine h3 { margin: 0; display: flex; align-items: center; gap: .5rem; font-size: 1.05rem; }
        .mine h3 iconify-icon { color: var(--zap-ink); }
        .mine p { margin: 0; }
        .mine > .btn { width: auto; justify-self: start; }
        .acc { max-width: 26rem; }
        .key { display: flex; align-items: center; gap: .6rem; flex-wrap: wrap; padding: .6rem .7rem; border-radius: .7rem; border: 1px dashed var(--line); }
        .key.fresh { border: 1.5px solid var(--zap); background: color-mix(in oklab, var(--zap) 18%, transparent); }
        .key code { flex: 1; min-width: 0; overflow-wrap: anywhere; font: 600 .85rem/1.4 ui-monospace, monospace; }
        .facts { margin: 0; gap: .45rem; }
        .facts .ok iconify-icon { color: var(--color-success, #16a34a); }
        .facts .err { color: var(--color-error, #dc2626); }
        .facts .warn { color: var(--color-warning, #d97706); }
        .steps { margin: .2rem 0 0; padding-left: 1.2rem; display: grid; gap: .3rem; font-size: .88rem; opacity: .8; }
    `};customElements.get("svc-zap-license")||customElements.define("svc-zap-license",u);var y=document.getElementById("zap-license");a("lang",e=>{y&&(y.lang="vi"===e?"vi":"en")}),a("data-theme",e=>{y&&(y.theme="light"===e?"light":"dark")});