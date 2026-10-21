import{a as e,c as i,n as t,t as n}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import{T as a}from"./util.usvuopSX.js";import{t as r}from"./service.sSgTDzwg.js";import"./web-dialog.BfrF0jkq.js";import"./svc-pay-valider.BB7kbFRa.js";import"./svc-account.DAXjeymd.js";import{i as o,n as s,t as l}from"./service.BhN3Ax6N.js";var c={vi:{trial:"Dùng thử",trialPrice:"Miễn phí",trialUnit:"{n} lượt đăng",trialNote:"Đăng nhập để nhận khoá — không cần thanh toán.",perMonth:"/tháng",perYear:"/năm",approx:"≈ {v}/tháng",save:"Tiết kiệm {n}%",monthNote:"Trả trước 30 ngày, hết hạn tự khoá — không tự trừ tiền.",yearNote:"Trả trước 365 ngày, rẻ hơn mua lẻ từng tháng.",getTrial:"Nhận khoá dùng thử",pay:"Thanh toán qua VietQR",renew:"Gia hạn qua VietQR",paying:"Đang tạo đơn…",feats:["Đăng không giới hạn số bài","Facebook · Instagram · Threads · LinkedIn · X","Hẹn giờ đăng, nhiều bài một lúc",`Dùng chung trên ${s.devices} máy`],mine:"Khoá của tôi",signin:"Đăng nhập để nhận khoá dùng thử và quản lý gói.",noKey:"Chưa có khoá. Tạo khoá rồi dán vào extension (tab “Đích & cài đặt”).",makeKey:"Tạo khoá",rotate:"Tạo khoá mới",rotateAsk:"Khoá cũ sẽ hết hiệu lực và mọi máy phải nhập khoá mới. Tiếp tục?",fresh:"Khoá chỉ hiện đầy đủ lúc này — sao chép và dán vào extension ngay.",copy:"Sao chép",copied:"Đã chép",paidTill:"Đã mua · dùng tới {d}",daysLeft:"còn {n} ngày",expired:"Hết hạn ngày {d} — gia hạn để dùng tiếp.",trialLeft:"Dùng thử · còn {n}/{max} lượt",trialOver:"Đã dùng hết {max} lượt thử — mua gói để đăng tiếp.",devices:"Máy đang dùng khoá: {n}/{max}",renewSoon:"Sắp hết hạn — gia hạn để không bị gián đoạn.",steps:["Cài extension từ Chrome Web Store","Mở extension → tab “Đích & cài đặt” → dán khoá","Mở trang cần đăng → Thêm bài → Đăng"],payTitle:"Chuyển khoản gói {plan} — {amount}",payHow:"Quét mã bằng app ngân hàng. Nội dung chuyển khoản đã có sẵn trong mã:",payNote:"Bấm xác nhận sau khi đã chuyển — gói kích hoạt ngay. Chúng tôi sẽ đối soát giao dịch; nếu không nhận được tiền, thời gian gia hạn sẽ bị thu hồi.",done:"Đã kích hoạt — dùng tới {d}. Cảm ơn bạn! Chúng tôi sẽ đối soát giao dịch trong thời gian sớm nhất.",err:{too_many_unverified:"Bạn còn đơn chưa được đối soát — vui lòng chờ chúng tôi kiểm tra rồi mua tiếp.",blocked:"Tài khoản đã bị tạm khoá bản quyền — liên hệ hỗ trợ.",generic:"Có lỗi xảy ra — thử lại."},legal:"Thanh toán là trả trước cho thời gian dùng, không tự gia hạn."},en:{trial:"Free trial",trialPrice:"Free",trialUnit:"{n} posts",trialNote:"Sign in to get a key — no payment needed.",perMonth:"/month",perYear:"/year",approx:"≈ {v}/month",save:"Save {n}%",monthNote:"30 days prepaid, locks when it ends — never charged automatically.",yearNote:"365 days prepaid, cheaper than month by month.",getTrial:"Get a trial key",pay:"Pay by VietQR",renew:"Renew by VietQR",paying:"Creating order…",feats:["Unlimited posts","Facebook · Instagram · Threads · LinkedIn · X","Scheduled posts, many at once",`Share on ${s.devices} computers`],mine:"My key",signin:"Sign in to get a trial key and manage your plan.",noKey:"No key yet. Create one and paste it into the extension (“Targets & settings” tab).",makeKey:"Create key",rotate:"New key",rotateAsk:"The old key stops working and every computer must enter the new one. Continue?",fresh:"The full key is shown only now — copy it into the extension right away.",copy:"Copy",copied:"Copied",paidTill:"Paid · valid until {d}",daysLeft:"{n} days left",expired:"Expired on {d} — renew to keep posting.",trialLeft:"Trial · {n}/{max} posts left",trialOver:"All {max} trial posts used — buy a plan to keep posting.",devices:"Computers using the key: {n}/{max}",renewSoon:"Ending soon — renew to avoid interruption.",steps:["Install the extension from the Chrome Web Store","Open it → “Targets & settings” tab → paste the key","Open the page to share → Add post → Post"],payTitle:"Bank transfer for {plan} — {amount}",payHow:"Scan with your banking app. The transfer note is already in the code:",payNote:"Confirm after you have transferred — the plan starts right away. We check every transfer; if no money arrives, the renewal time is taken back.",done:"Activated — valid until {d}. Thank you! We will check the transfer shortly.",err:{too_many_unverified:"You still have a transfer waiting to be checked — please wait for it before buying again.",blocked:"Your license is suspended — please contact support.",generic:"Something went wrong — try again."},legal:"Payments prepay time of use and never renew automatically."}},h=(e,i)=>e.replace(/\{(\w+)\}/g,(e,t)=>i[t]??""),d={vi:"{id} - Zap Share goi {plan}",en:"{id} - Zap Share {plan} plan"},p=class extends n{static properties={lang:{type:String},theme:{type:String,reflect:!0},_user:{state:!0},_lic:{state:!0},_key:{state:!0},_copied:{state:!0},_busy:{state:!0},_pay:{state:!0},_done:{state:!0},_error:{state:!0}};constructor(){super(),this.lang="vi",this.theme="dark",this._user=void 0,this._lic=null,this._key="",this._copied=!1,this._busy=null,this._pay=null,this._done=null,this._error="",this._onAccount=e=>this._setUser(e.detail?.user??null)}get _t(){return c["en"===this.lang?"en":"vi"]}connectedCallback(){super.connectedCallback(),this.addEventListener("account-change",this._onAccount),r.get().then(e=>this._setUser(e??null)).catch(()=>this._setUser(null))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("account-change",this._onAccount)}async _setUser(e){const i=(e?.id??null)!==(this._user?.id??null)||void 0===this._user;this._user=e,i&&(this._key="",this._lic=null,this._pay=null,this._done=null,e&&await this._load())}async _load(){const e=await l.license();e.ok&&(this._lic=e.data)}async _makeKey(){if(this._lic?.has_key&&!confirm(this._t.rotateAsk))return;this._busy="key",this._error="";const e=await l.newKey();if(this._busy=null,!e.ok)return void(this._error=this._t.err.generic);const{key:i,...t}=e.data;this._key=i,this._lic=t,this._copied=!1}async _copy(){try{await navigator.clipboard.writeText(this._key),this._copied=!0}catch{}}_toMine(){this.renderRoot.querySelector("#mine")?.scrollIntoView({behavior:"smooth",block:"center"})}async _buy(e){if(!this._user)return this._toMine();this._busy=e,this._error="",this._done=null;const i=await l.order(e);this._busy=null,i.ok?this._pay=i.data:this._error=this._t.err[i.code]??this._t.err.generic}async _paid(){const e=this._pay;if(!e||this._busy)return;this._busy="paid",this._error="";const i=await l.paid(e.orderId);this._busy=null,i.ok&&["claimed","verified"].includes(i.data?.status)?(this._lic=i.data.license,this._done={until:i.data.paid_until},this._pay=null):this._error=this._t.err[i.code]??this._t.err.generic}_date(e){return new Date(e).toLocaleDateString("en"===this.lang?"en-GB":"vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"})}render(){return e`
            ${this._done?e`<p class="note paid" role="status"><iconify-icon icon="ri:checkbox-circle-fill"></iconify-icon>
                ${h(this._t.done,{d:this._done.until?this._date(this._done.until):""})}</p>`:t}
            <div class="plans">
                ${this._rbTrial()}
                ${s.plans.map(e=>this._rbPlan(e))}
            </div>
            ${this._rbPay()}
            ${this._error&&!this._pay?e`<p class="note err" role="alert">${this._error}</p>`:t}
            <p class="legal">${this._t.legal}</p>
            ${this._rbMine()}
        `}_rbPay(){const i=this._t,n="en"===this.lang?"en":"vi",a=this._pay,r=a&&s.plans.find(e=>e.id===a.plan),l=s.pay,c=a?h(i.payTitle,{plan:r?.name[n]??a.plan,amount:o(a.amount,n)}):"",p=a?h(d[n],{id:a.orderId,plan:(m=r?.name[n]??a.plan,String(m).normalize("NFD").replace(/\p{M}/gu,"").replace(/[đĐ]/g,e=>"đ"===e?"d":"D"))}):"";var m;return e`
            <web-dialog ?open=${!!a} title=${c} lang=${n} ui="pastel" theme=${this.theme} maxWidth="480px"
                @close=${()=>{this._pay=null,this._error=""}}>
                ${a?e`
                    <div class="pay" aria-busy=${"paid"===this._busy?"true":"false"}>
                        <p class="desc">${i.payHow} <code>${p}</code></p>
                        <svc-pay-valider ui="pastel" theme=${this.theme} lang=${n} method=${l.method} .wallet=${l.wallet} .vietqr=${l.vietqr}
                            paymentId=${a.orderId} note=${p} .amount=${a.amount}
                            @valider:paid=${()=>this._paid()} @valider:back=${()=>{this._pay=null,this._error=""}}></svc-pay-valider>
                        ${this._error?e`<p class="note err" role="alert">${this._error}</p>`:t}
                        <p class="note warn">${i.payNote}</p>
                    </div>`:t}
            </web-dialog>
        `}_rbTrial(){const i=this._t,t=this._lic,n=this._user&&t&&!t.has_key;return e`
            <article class="plan">
                <h3>${i.trial}</h3>
                <p class="price"><strong>${i.trialPrice}</strong></p>
                <p class="sub">${h(i.trialUnit,{n:s.trialUses})}</p>
                <p class="desc">${i.trialNote}</p>
                <button type="button" class="btn ghost" ?disabled=${this._busy||this._user&&!n}
                    @click=${()=>this._user?this._makeKey():this._toMine()}>
                    <iconify-icon icon="ri:key-2-line"></iconify-icon>${i.getTrial}</button>
            </article>
        `}_rbPlan(i){const n=this._t,a="en"===this.lang?"en":"vi",r="year"===i.id;return e`
            <article class="plan ${r?"hot":""}">
                ${i.off?e`<span class="badge">${h(n.save,{n:i.off})}</span>`:t}
                <h3>${i.name[a]}</h3>
                <p class="price"><strong>${o(i.amount,a)}</strong><span>${r?n.perYear:n.perMonth}</span></p>
                <p class="sub">${r?h(n.approx,{v:o(100*Math.round(i.amount/12/100),a)}):" "}</p>
                <p class="desc">${r?n.yearNote:n.monthNote}</p>
                <ul>${n.feats.map(i=>e`<li><iconify-icon icon="ri:check-line"></iconify-icon>${i}</li>`)}</ul>
                <button type="button" class="btn" ?disabled=${!!this._busy} @click=${()=>this._buy(i.id)}>
                    <iconify-icon icon="ri:qr-code-line"></iconify-icon>${this._busy===i.id?n.paying:this._lic?.paid_until?n.renew:n.pay}</button>
            </article>
        `}_rbMine(){const i=this._t;return e`
            <section class="mine" id="mine">
                <h3><iconify-icon icon="ri:shield-keyhole-line"></iconify-icon>${i.mine}</h3>
                ${void 0===this._user?e`<p class="muted">…</p>`:this._user?this._rbLicense():e`<p class="muted">${i.signin}</p>
                        <div class="acc"><svc-account embedded ui="pastel" theme=${this.theme} lang=${"en"===this.lang?"en":"vi"}></svc-account></div>`}
                <ol class="steps">${i.steps.map(i=>e`<li>${i}</li>`)}</ol>
            </section>
        `}_rbLicense(){const i=this._t,n=this._lic;if(!n)return e`<p class="muted">…</p>`;const a=Date.now(),r=n.paid_until?Math.ceil((n.paid_until-a)/864e5):0;return e`
            ${this._key?e`
                <div class="key fresh">
                    <code>${this._key}</code>
                    <button type="button" class="btn small" @click=${()=>this._copy()}>
                        <iconify-icon icon=${this._copied?"ri:check-line":"ri:file-copy-line"}></iconify-icon>${this._copied?i.copied:i.copy}</button>
                </div>
                <p class="note warn">${i.fresh}</p>`:n.has_key?e`
                <div class="key"><code>zs_••••••••••••${n.key_hint??""}</code>
                    <button type="button" class="btn small ghost" ?disabled=${!!this._busy} @click=${()=>this._makeKey()}>
                        <iconify-icon icon="ri:refresh-line"></iconify-icon>${i.rotate}</button></div>`:e`
                <p class="muted">${i.noKey}</p>
                <button type="button" class="btn" ?disabled=${!!this._busy} @click=${()=>this._makeKey()}>
                    <iconify-icon icon="ri:key-2-line"></iconify-icon>${i.makeKey}</button>`}

            <ul class="facts">
                ${n.active?e`<li class="ok"><iconify-icon icon="ri:checkbox-circle-fill"></iconify-icon>
                    ${h(i.paidTill,{d:this._date(n.paid_until)})} · ${h(i.daysLeft,{n:r})}</li>`:n.paid_until?e`<li class="err"><iconify-icon icon="ri:time-line"></iconify-icon>${h(i.expired,{d:this._date(n.paid_until)})}</li>`:t}
                ${n.active?t:e`<li class=${n.trial_left?"":"err"}><iconify-icon icon="ri:gift-line"></iconify-icon>
                    ${n.trial_left?h(i.trialLeft,{n:n.trial_left,max:n.trial_max}):h(i.trialOver,{max:n.trial_max})}</li>`}
                ${n.active&&r<=s.renewSoonDays?e`<li class="warn"><iconify-icon icon="ri:alarm-warning-line"></iconify-icon>${i.renewSoon}</li>`:t}
                ${n.has_key?e`<li><iconify-icon icon="ri:computer-line"></iconify-icon>${h(i.devices,{n:n.devices,max:n.device_max})}</li>`:t}
            </ul>
        `}static styles=i`
        :host {
            display: block; color: var(--color-base-content);
            --zs: #c1e899; --zs-ink: #3f6212; --zs-fg: #1f3a0a;
            --line: color-mix(in oklab, var(--color-base-content) 12%, transparent);
        }
        :host([theme="dark"]) { --zs-ink: #c1e899; }
        * { box-sizing: border-box; }
        iconify-icon { font-size: 1.1em; flex: none; }
        .plans { display: grid; gap: 1rem; grid-template-columns: minmax(0, 1fr); }
        @media (min-width: 760px) { .plans { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .plan {
            position: relative; display: flex; flex-direction: column; gap: .35rem; padding: 1.4rem 1.25rem 1.25rem;
            border: 1px solid var(--line); border-radius: 1rem; background: var(--color-base-100);
        }
        .plan.hot { border: 2px solid var(--zs); box-shadow: 0 18px 40px -26px color-mix(in oklab, var(--zs-ink) 70%, transparent); }
        .plan h3 { margin: 0; font-size: 1rem; font-weight: 700; }
        .badge { position: absolute; top: -.7rem; right: 1rem; padding: .15rem .6rem; border-radius: 99px; font-size: .72rem; font-weight: 700; background: var(--zs); color: var(--zs-fg); }
        .price { margin: .2rem 0 0; display: flex; align-items: baseline; gap: .25rem; }
        .price strong { font-size: 1.9rem; line-height: 1.1; letter-spacing: -.02em; }
        .price span, .sub, .muted, .desc { opacity: .72; font-size: .88rem; }
        .sub { margin: 0; min-height: 1.2em; }
        .desc { margin: .3rem 0 .5rem; }
        ul { margin: 0 0 .9rem; padding: 0; list-style: none; display: grid; gap: .35rem; font-size: .9rem; }
        li { display: flex; align-items: center; gap: .45rem; }
        .plan li iconify-icon { color: var(--zs-ink); }
        .btn {
            margin-top: auto; display: inline-flex; align-items: center; justify-content: center; gap: .45rem; width: 100%;
            padding: .7rem 1rem; border-radius: .7rem; border: 1px solid transparent; font: inherit; font-weight: 600; cursor: pointer;
            background: var(--zs); color: var(--zs-fg); transition: filter .15s, transform .15s;
        }
        .btn:hover:not(:disabled) { filter: brightness(.96); transform: translateY(-1px); }
        .btn:disabled { opacity: .55; cursor: not-allowed; }
        .btn.ghost { background: transparent; color: inherit; border-color: var(--line); }
        .btn.small { width: auto; margin: 0; padding: .4rem .75rem; font-size: .85rem; }
        .pay { display: grid; gap: .8rem; }
        .pay .desc { margin: 0; }
        .pay code { padding: .1rem .4rem; border-radius: .35rem; font: 700 .9rem ui-monospace, monospace; background: color-mix(in oklab, var(--zs) 35%, transparent); }
        .pay .note, .pay .note.warn { margin: 0; }
        .pay[aria-busy="true"] svc-pay-valider { opacity: .6; pointer-events: none; }
        .legal { margin: .8rem .2rem 0; font-size: .8rem; opacity: .65; }
        .note { display: flex; align-items: center; gap: .5rem; margin: 0 0 1rem; padding: .7rem .9rem; border-radius: .7rem; font-size: .9rem;
            background: color-mix(in oklab, var(--color-base-content) 6%, transparent); border-left: 3px solid var(--zs); }
        .note.paid { border-left-color: var(--color-success, #16a34a); }
        .note.failed, .note.missing, .note.err { border-left-color: var(--color-error, #dc2626); }
        .note.warn { border-left-color: var(--color-warning, #d97706); margin: .6rem 0 0; }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .mine { margin-top: 2rem; padding: 1.4rem 1.25rem; border: 1px solid var(--line); border-radius: 1rem; background: var(--color-base-100); display: grid; gap: .8rem; }
        .mine h3 { margin: 0; display: flex; align-items: center; gap: .5rem; font-size: 1.05rem; }
        .mine h3 iconify-icon { color: var(--zs-ink); }
        .mine p { margin: 0; }
        .mine > .btn { width: auto; justify-self: start; }
        .acc { max-width: 26rem; }
        .key { display: flex; align-items: center; gap: .6rem; flex-wrap: wrap; padding: .6rem .7rem; border-radius: .7rem; border: 1px dashed var(--line); }
        .key.fresh { border: 1.5px solid var(--zs); background: color-mix(in oklab, var(--zs) 18%, transparent); }
        .key code { flex: 1; min-width: 0; overflow-wrap: anywhere; font: 600 .85rem/1.4 ui-monospace, monospace; }
        .facts { margin: 0; gap: .45rem; }
        .facts .ok iconify-icon { color: var(--color-success, #16a34a); }
        .facts .err { color: var(--color-error, #dc2626); }
        .facts .warn { color: var(--color-warning, #d97706); }
        .steps { margin: .2rem 0 0; padding-left: 1.2rem; display: grid; gap: .3rem; font-size: .88rem; opacity: .8; }
    `};customElements.get("svc-zap-share")||customElements.define("svc-zap-share",p);var m=document.getElementById("zap");a("lang",e=>{m&&(m.lang="vi"===e?"vi":"en")}),a("data-theme",e=>{m&&(m.theme="light"===e?"light":"dark")});