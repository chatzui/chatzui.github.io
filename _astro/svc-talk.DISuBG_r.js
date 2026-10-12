import{n as t}from"./rolldown-runtime.Bpd4S2KM.js";import{a as e,c as i,t as s}from"./lit.DdxAWBw5.js";import"./iconify-icon.BQKUsOMK.js";import"./web-button.CCcr9NnS.js";import{C as a}from"./util.7B3q8i3m.js";import"./web-fab.DV1Z2bBF.js";import"./web-text.BxifyJ0d.js";import{s as n}from"./conductor.iibYbMPc.js";import"./web-toggle.CD2ffXtX.js";import"./web-popover.BQOfZx8x.js";import"./web-avatar.wlZVUw0h.js";import{r as o}from"./sectors.qeklSGEe.js";import{t as l}from"./command.BBDam8WT.js";import{C as r,S as c,_ as d,a as h,b as p,c as u,d as m,f as g,g as v,h as b,i as f,l as _,m as $,n as k,o as y,p as w,r as x,s as j,t as O,u as S,v as I,x as T,y as C}from"./trial.BPYxygdC.js";import{t as A}from"./tensor-api.BRHSVh1o.js";var E="secretary",B=new Set(["running","review","stale","error"]),N=class extends s{static styles=i(x);static properties={view:{type:Object},jobs:{type:Array},topic:{type:String},faces:{type:Object},outlines:{type:Object},pending:{type:Object},lang:{type:String},ui:{type:String},theme:{type:String},noVerdict:{type:Boolean,attribute:"no-verdict"},_unfold:{state:!0}};constructor(){super(),this.view=null,this.jobs=[],this.topic="",this.faces={},this.outlines={},this.pending=new Set,this.lang="vi",this.ui="pastel",this.theme="",this.noVerdict=!1,this._unfold=!1}_name(t){return this.faces?.[t]?.title||this.view?.titles?.[t]?.[this.lang]||this.view?.titles?.[t]?.vi||t}_emit(t,e){e&&this.dispatchEvent(new CustomEvent(t,{detail:{jobId:e},bubbles:!0,composed:!0}))}_stage(t){const e=this.view?.stage;if(e!==E)return e||"";const i=t.find(t=>t.fn===E)?.job;return"awaiting_review"===i?.status?"context":"done"!==i?.status||i.approved?E:"routing"}_pct({fn:t,state:e,job:i}){return"approved"===e?100:m(d(this.outlines?.[t],i))}render(){const t=u(this.lang),i=c(this.view,this.jobs),s=p(this.view),a=this._stage(i),n=i.find(t=>t.fn===E)?.job??this.jobs[0],o=i.filter(t=>"approved"===t.state).length,l=i.length?Math.round(i.reduce((t,e)=>t+this._pct(e),0)/i.length):0,r=i.filter(t=>"waiting"===t.state),d=r.length>=3,m=d?i.filter(t=>"waiting"!==t.state):i,v="routing"===a&&s?s.plan.run:[],b="routing"===a?I(this.view,t=>this.faces?.[t]?.title,this.lang):"",f=this.noVerdict?null:this.view?.verdict;return e`
            <div class="cd-card is-task is-click" @click=${()=>this._emit("open-job",n?.id)}>
                <div class="cd-task-head">
                    <div class="cd-task-text">
                        <div class="cd-title cd-clamp">${this.topic}</div>
                        <div class="cd-chips">
                            ${a?_(t.stage[a]??a,h[a]):""}
                            ${f?_(t.verdict[f]??f,j[f]):""}
                            <span class="cd-count">${t.approvedOf(o,i.length)}</span>
                        </div>
                    </div>
                    <div class="cd-ring ${100===l?"is-done":""}" style=${$({"--p":String(l)})}
                        role="img" aria-label=${`${l}%`}><span>${l}%</span></div>
                </div>
                ${g(i.map(t=>({state:w(t.state),label:this._name(t.fn)})))}
                <div class="cd-list">
                    ${m.map(e=>this._row(e,s,t))}
                    ${d?this._fold(r,t.waitingGroup(r.length),!0):""}
                    ${d&&this._unfold?r.map(e=>this._row(e,s,t)):""}
                    ${v.length?this._fold(v.map(t=>({fn:t})),t.proposed(v.length),!1):""}
                </div>
                ${b?e`<div class="cd-note">${b}</div>`:""}
            </div>
        `}_fold(t,i,s){const a=e`
            <span class="cd-avatars">
                ${t.slice(0,4).map(({fn:t})=>e`
                    <web-avatar src=${this.faces?.[t]?.pics||""} name=${this._name(t)} size="22px"
                        title=${this._name(t)} ui="modern" theme=${this.theme}></web-avatar>
                `)}
                ${t.length>4?e`<span class="cd-more">+${t.length-4}</span>`:""}
            </span>
            <span class="cd-fold-label">${i}</span>
        `;return s?e`
            <button class="cd-fold" aria-expanded=${this._unfold?"true":"false"}
                @click=${t=>{t.stopPropagation(),this._unfold=!this._unfold}}>
                ${a}
                <iconify-icon class="cd-chevron" icon="ri:arrow-down-s-line"></iconify-icon>
            </button>
        `:e`<div class="cd-fold">${a}</div>`}_row(t,i,s){const{fn:a,state:n,job:o,missing:l}=t,r=this._name(a),c=this.outlines?.[a],d=this._pct(t),h=a===i?.routing.lead,p=h?"lead":i&&a in i.routing.levels?i.routing.levels[a]:null,u=y[n]??"neutral",m=B.has(n)&&d<100,g=!!o&&"done"===o.status&&!o.approved&&a!==E&&!c?.review,v=!!o&&this.pending?.has(o.id),b=t=>{t.stopPropagation(),this._emit("open-job",o?.id)},f=(t,i,s,a,n)=>e`
            <web-button type=${s} color=${i} height="26px" prefix=${a} ui=${this.ui} theme=${this.theme}
                ?loading=${v} ?disabled=${v}
                @click=${t=>{t.stopPropagation(),this._emit(n,o.id)}}>${t}</web-button>
        `;return e`
            <div class="cd-item ${"waiting"===n?"is-waiting":""}" role=${o?"button":"presentation"} tabindex=${o?"0":"-1"}
                title=${l?.length?l.map(t=>this.view?.kinds?.[t]?.[this.lang]||t).join(", "):""}
                @click=${o?b:t=>t.stopPropagation()}
                @keydown=${t=>{!o||t.target!==t.currentTarget||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),b(t))}}>
                <span class="cd-ava">
                    <web-avatar src=${this.faces?.[a]?.pics||""} name=${r} size="28px" ui="modern" theme=${this.theme}></web-avatar>
                    <span class="cd-dot" data-tone=${u}></span>
                </span>
                <div class="cd-item-main">
                    <div class="cd-item-top">
                        <span class="cd-row-name">${r}</span>
                        ${h?e`<iconify-icon class="cd-lead" icon="ri:star-fill" aria-hidden="true"></iconify-icon>`:""}
                    </div>
                    <div class="cd-item-sub">
                        ${p?e`<span>${s.level[p]??p}</span><span aria-hidden="true">·</span>`:""}
                        <span class="cd-item-state" data-tone=${u}>${s.state[n]??n}</span>
                        ${m?e`<span>${d}%</span>`:""}
                    </div>
                    ${m?S(d,"error"===n?"error":"primary"):""}
                </div>
                <div class="cd-row-side">
                    ${"error"===n?f(s.retry,"error","soft","ri:refresh-line","retry-job"):g?f(s.approve,"primary","fill","ri:check-line","approve-job"):"approved"===n?e`<iconify-icon class="cd-ok" icon="ri:checkbox-circle-fill"></iconify-icon>`:o?e`<iconify-icon class="cd-go" icon="ri:arrow-right-s-line"></iconify-icon>`:""}
                </div>
            </div>
        `}};customElements.get("svc-task-card")||customElements.define("svc-task-card",N);var R={vi:{why:"Vai trò",takes:"Nhận bàn giao",gives:"Gửi bàn giao",none:"chưa có",needsCheck:"cần xác minh",more:"Xem thêm",less:"Thu gọn",resumeText:"Chờ duyệt để chạy bước tiếp",approveText:"Xong — duyệt để giao kết quả",signOff:t=>`Đã được ${t} xem và đồng ý`,signOffName:"Họ tên người đã duyệt"},en:{why:"Role",takes:"Takes",gives:"Hands off",none:"not yet",needsCheck:"re-check",more:"More",less:"Less",resumeText:"Approve to run the next step",approveText:"Done — approve to hand it off",signOff:t=>`Reviewed and agreed by ${t}`,signOffName:"Name of the reviewer"}},D={APPROVED:"success",REQUIRES_VERIFICATION:"warning"},P=(t,e)=>(t??[]).filter(t=>t.kind===e&&"SUPERSEDED"!==t.status).sort((t,e)=>e.version-t.version)[0],V=class extends s{static styles=i(x);static properties={job:{type:Object},outline:{type:Object},view:{type:Object},face:{type:Object},why:{type:String},approvable:{type:Boolean},busy:{type:Boolean},lang:{type:String},ui:{type:String},theme:{type:String},_more:{state:!0},_signOffOk:{state:!0},_signOffBy:{state:!0}};constructor(){super(),this.job=null,this.outline=null,this.view=null,this.face=null,this.why="",this.approvable=!1,this.busy=!1,this.lang="vi",this.ui="pastel",this.theme="",this._more=!1,this._signOffOk=!1,this._signOffBy=""}willUpdate(t){t.has("job")&&t.get("job")?.id!==this.job?.id&&(this._more=!1,this._signOffOk=!1,this._signOffBy="")}updated(){this.toggleAttribute("collapsed",!this._more)}get _fn(){return String(this.job?.division??"").split(".")[1]??""}get _pausedText(){if("awaiting_review"!==this.job.status)return null;const t=this.outline.steps?.find(t=>Number(t.id)===Number(this.job.pausedStepId));return"text"===t?.type?t:null}get _canApprove(){return!("done"!==this.job.status||this.job.approved||!this.outline.output&&!this.outline.produces?.length)}get _signOffReady(){return!this.outline.review||this._signOffOk&&this._signOffBy.trim().length>=2}_stepState(t){const e=this.job,i=e.fields??{};return("image"===t.type?i.pics||"skip"===e.imageChoice:(t.calls??[]).every(t=>r(t,i)))||e.approved?"done":e.status===`step${t.id}`||Number(e.pausedStepId)===Number(t.id)?e.error?"error":"active":"todo"}_emit(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}_approve(){this._signOffReady&&this._emit("approve",this.outline.review?{expertReview:{confirmed:!0,by:this._signOffBy.trim()}}:{})}render(){if(!this.job||!this.outline)return e``;const t={...u(this.lang),...R[this.lang]??R.vi},i=this._fn,s=this.face?.title||this.outline.title?.[this.lang]||this.outline.title?.vi||i,a=T(this.view?.fns?.find(t=>t.jobId===this.job.id),this.job),n=p(this.view),o=n&&i in n.routing.levels?i===n.routing.lead?"lead":n.routing.levels[i]:null,l=d(this.outline,this.job),r=(this.outline.steps??[]).map(t=>({state:this._stepState(t),label:t[this.lang]??t.vi}));return e`
            <div class="cd-card is-job">
                <div class="cd-head">
                    <div class="cd-who">
                        <web-avatar src=${this.face?.pics||""} name=${s} size="30px" ui=${this.ui} theme=${this.theme}></web-avatar>
                        <div class="cd-who-text">
                            <div class="cd-title cd-ellipsis">${s}</div>
                            <div class="cd-chips">
                                ${_(t.state[a]??a,y[a])}
                                <span class="cd-count">${l.done}/${l.total}</span>
                            </div>
                        </div>
                    </div>
                    <div class="cd-head-side">
                        ${o?_(t.level[o],f[o]):""}
                        <button class="cd-icon-btn" aria-expanded=${this._more?"true":"false"}
                            title=${this._more?t.less:t.more} aria-label=${this._more?t.less:t.more}
                            @click=${()=>{this._more=!this._more}}>
                            <iconify-icon icon=${this._more?"ri:arrow-up-s-line":"ri:more-fill"}></iconify-icon>
                        </button>
                    </div>
                </div>
                ${r.length?g(r):""}
                ${this._more?this._rfMore(t):""}
                ${this._rfAction(t)}
                <slot></slot>
            </div>
        `}_rfMore(t){const i=this.view?[...this.outline.needs??[],...(this.outline.uses??[]).filter(t=>P(this.view.artifacts,t))]:[],s=this.view?(this.outline.produces??[]).map(t=>t.kind):[];return e`
            ${this.why?e`<div class="cd-section"><span class="cd-label">${t.why}</span><span class="cd-text">${k(this.why)}</span></div>`:""}
            ${i.length?e`<div class="cd-section"><span class="cd-label">${t.takes}</span>${this._handoffs(i,t)}</div>`:""}
            ${s.length?e`<div class="cd-section"><span class="cd-label">${t.gives}</span>${this._handoffs(s,t)}</div>`:""}
        `}_handoffs(t,i){const s=t=>this.view?.kinds?.[t]?.[this.lang]||this.view?.kinds?.[t]?.vi||t;return e`<div class="cd-chips">${t.map(t=>{const e=P(this.view?.artifacts,t),a=e?"REQUIRES_VERIFICATION"===e.status?` · ${i.needsCheck}`:` · v${e.version}`:` · ${i.none}`;return _(`${s(t)}${a}`,e?D[e.status]??"neutral":"muted")})}</div>`}_rfAction(t){if(!this.approvable)return"";const i=this._pausedText;if(!i&&!this._canApprove)return"";const s=!i&&this.outline.review;return e`
            ${s?e`
                <div class="cd-signoff">
                    <label class="cd-signoff-check">
                        <input type="checkbox" .checked=${this._signOffOk} ?disabled=${this.busy}
                            @change=${t=>{this._signOffOk=t.target.checked}}>
                        <span>${t.signOff(s[this.lang]||s.vi)}</span>
                    </label>
                    <web-text placeholder=${t.signOffName} .value=${this._signOffBy} height="32px" ?disabled=${this.busy}
                        @input=${t=>{this._signOffBy=t.detail.value}}></web-text>
                </div>
            `:""}
            <div class="cd-action">
                <span class="cd-action-text">${i?t.resumeText:t.approveText}</span>
                <web-button type="fill" color="primary" height="30px" ui=${this.ui} theme=${this.theme}
                    ?loading=${this.busy} ?disabled=${this.busy||!i&&!this._signOffReady}
                    @click=${()=>i?this._emit("resume-step"):this._approve()}>
                    ${t.approve}
                </web-button>
            </div>
        `}};customElements.get("svc-job-card")||customElements.define("svc-job-card",V);var z=t({SvcTalk:()=>M,default:()=>M}),J={vi:{panelTitle:"Trợ lý AI toàn doanh nghiệp",placeholder:"Nhắn Thư ký việc cần làm…",empty:"Chưa có tin nhắn nào — nhắn Thư ký việc cần làm, Thư ký sẽ phân công các phòng.",auto:"Tự động",autoHint:"Tự duyệt từng bước, tự tạo ảnh (lỗi thì bỏ qua — tạo lại sau) và tự chuyển việc sang phòng kế tiếp",back:"Quay lại",staleMsg:"Bàn giao này dựa trên bản cũ của phòng phía trước — cần xác minh lại",rerun:"Chạy lại",stillValid:"Vẫn dùng được"},en:{panelTitle:"Enterprise AI Assistant",placeholder:"Tell the Secretary what needs doing…",empty:"No messages yet — tell the Secretary what needs doing and it will route the work.",auto:"Auto",autoHint:"Approves each step, generates the images (skips one that fails — redo it later) and hands the work on by itself",back:"Back",staleMsg:"This handoff was built on an older upstream version — it needs re-checking",rerun:"Re-run",stillValid:"Still valid"}},M=class extends s{static styles=i(":host{display:contents}:host(:not([embedded])) web-popover{height:0;display:block}.tlk-panel{box-sizing:border-box;border-radius:.5rem;flex-direction:column;width:380px;height:calc(100% + 1rem);min-height:380px;margin:-.5rem;display:flex;overflow:hidden}:host([embedded]) .tlk-panel{border-radius:0;width:100%;height:100%;min-height:0;margin:0}.tlk-head{border-bottom:1px solid color-mix(in oklab, var(--color-base-300) 30%, transparent);flex:none;justify-content:space-between;align-items:center;padding:.5rem .75rem;display:flex}.tlk-title{font-weight:600}.tlk-auto{flex:none;align-items:center;gap:.4rem;font-size:.8rem;display:inline-flex}.tlk-title.has-icon{align-items:center;gap:.4rem;display:inline-flex}.tlk-title.has-icon iconify-icon{flex:none;font-size:1.15rem}.tlk-trial{color:var(--color-info);background:color-mix(in oklab, var(--color-info) 10%, transparent);flex:none;align-items:center;gap:.4rem;padding:.35rem .75rem;font-size:.75rem;display:flex}.tlk-messages{flex-direction:column;flex:1;gap:.6rem;min-height:0;padding:.75rem;display:flex;overflow-y:auto}.tlk-empty{opacity:.6;text-align:center;margin:auto;font-size:.8rem}.tlk-msg{gap:.5rem;max-width:85%;display:flex}.tlk-msg.mine{flex-direction:row-reverse;margin-left:auto}.tlk-bubble{background:color-mix(in oklab, var(--color-base-300) 30%, transparent);border-radius:.75rem;min-width:0;padding:.5rem .75rem}.tlk-msg.mine .tlk-bubble{background:color-mix(in oklab, var(--color-primary) 25%, transparent)}.tlk-author{opacity:.7;margin-bottom:.1rem;font-size:.72rem;display:block}.tlk-content{white-space:pre-wrap;word-break:break-word;margin:0;font-size:.875rem}.tlk-typing{letter-spacing:.15em;animation:1.2s ease-in-out infinite tlk-typing-pulse}@keyframes tlk-typing-pulse{0%,to{opacity:.35}50%{opacity:1}}.tlk-actions{flex-wrap:wrap;gap:.4rem;margin-top:.4rem;display:flex}.tlk-composer-wrap{border-top:1px solid var(--color-base-300);flex:none;position:relative}.tlk-composer{gap:.5rem;padding:.5rem;display:flex}.tlk-composer web-text{flex:1;min-width:0}.tlk-detail-head{justify-content:flex-start;gap:.5rem}.tlk-detail-head .tlk-title{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tlk-back{cursor:pointer;width:28px;height:28px;color:inherit;background:0 0;border:none;border-radius:50%;flex:none;justify-content:center;align-items:center;font-size:1.1rem;display:flex}.tlk-back:hover{background:color-mix(in oklab, var(--color-base-content) 10%, transparent)}.tlk-detail{flex:1;min-height:0;padding:.75rem;overflow-y:auto}.tlk-msg.is-card{width:100%;max-width:100%}.tlk-card{flex-direction:column;flex:1;min-width:0;display:flex}.tlk-detail svc-job-card{margin-bottom:.9rem}.tlk-detail svc-job-card[collapsed]{z-index:3;position:sticky;top:-.75rem}");static properties={ui:{type:String},theme:{type:String},lang:{type:String},txt:{type:Object},embedded:{type:Boolean,reflect:!0},sector:{type:String},noVerdict:{type:Boolean,attribute:"no-verdict"},trial:{type:Boolean},command:{attribute:!1},_log:{state:!0},_divisions:{state:!0},_system:{state:!0},_tasks:{state:!0},_typingId:{state:!0},_runningSub:{state:!0},_pendingJobs:{state:!0},_regeneratingImage:{state:!0},_auto:{state:!0},_trialUsage:{state:!0},_draft:{state:!0},_previewJobId:{state:!0}};constructor(){super(),this.ui="pastel",this.theme="dark",this.lang="vi",this.txt=null,this.embedded=!1,this.noVerdict=!0,this.trial=!1,this.command=null,this.sector=b,this._talk=v(b),this._dcSync(this._talk.state),this._draft="",this._previewJobId="",this._unsub=null}connectedCallback(){super.connectedCallback(),this._dcBind()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.()}_dcBind(){this._unsub?.(),this._talk=v(this.sector||"ecommerce",{trial:this.trial}),this._dcSync(this._talk.state),this._unsub=n(this._talk.section,()=>this._dcSync(this._talk.state)),this._talk.load(this.lang)}_dcSync(t){this._log=t.log,this._divisions=t.divisions,this._system=t.system,this._tasks=t.tasks,this._typingId=t.typingId,this._runningSub=t.runningSub,this._pendingJobs=t.pendingJobs,this._regeneratingImage=t.regeneratingImage,this._auto=!!t.auto,this._trialUsage=t.trialUsage,t.lang&&t.lang!==this.lang&&(this.lang=t.lang)}willUpdate(t){t.has("sector")&&this.isConnected&&this._talk.sector!==(this.sector||"ecommerce")?this._dcBind():t.has("trial")&&this.isConnected&&this._talk.setTrial(this.trial),t.has("lang")&&this._talk?.setLang(this.lang),this._talk&&(this._talk.showVerdict=!this.noVerdict),t.has("command")&&this._dhCommand()}updated(t){(t.has("_log")||t.has("_typingId")||t.has("_previewJobId"))&&this._scrollToBottom()}_scrollToBottom(){const t=this.shadowRoot?.querySelector(".tlk-messages");t&&(t.scrollTop=t.scrollHeight)}_dhPreview(t){this._previewJobId=t}_dhClosePreview(){this._previewJobId=""}async _dhApproveAndClose(t,e){await this._talk.approve(t,e),this._log.find(e=>e.id===t)?.approved&&this._dhClosePreview()}_dhKeydown(t){"Enter"!==t.key||t.isComposing||this._dhSend()}_dhSend(){const t=(this._draft||"").trim();t&&(this._draft="",this._talk.sendMessage(t))}_dhAuto(t){t.stopPropagation(),this._talk.setAuto(t.detail.active)}_dhCommand(){const t=l(this.command);t&&(this._previewJobId="",this._talk.sendMessage(t))}get _txt(){return a(this.txt,J,this.lang)}get _bossName(){return"Boss"}_comDivisionName(t){return this._talk.division(t)?.title||t}_comDivisionAvatar(t){return this._talk.division(t)?.pics||""}get _comFaces(){return Object.fromEntries([...this._divisions,...this._system].map(t=>[t.fn,{title:t.title,pics:t.pics}]))}get _comOutlines(){return Object.fromEntries([...this._divisions,...this._system].map(t=>[t.fn,t.outline]))}render(){return this._divisions.length?e`
            ${this.embedded?this._rbPanel():e`
                <web-popover ui=${this.ui} theme=${this.theme} lang=${this.lang} placement="top-end" placementGap="0" fullscreen>
                    <web-fab slot="trigger" icon=${o} size="lg" rounded="50%" x="99%" y="80%" movable ui="modern" theme=${this.theme}></web-fab>
                    ${this._rbPanel()}
                </web-popover>
            `}
        `:e``}_rbPanel(){const t=this._previewJobId&&this._log.find(t=>t.id===this._previewJobId),i=t&&this._talk.division(t.division);return t&&i?.outline?this._rbDetail(t,i):e`
            <div class="tlk-panel">
                <div class="tlk-head">
                    <span class="tlk-title has-icon"><iconify-icon icon=${o}></iconify-icon>${this._txt.panelTitle}</span>
                    <span class="tlk-auto" title=${this._txt.autoHint}>
                        <web-toggle ui=${this.ui} theme=${this.theme} ?active=${this._auto} aria-label=${this._txt.autoHint}
                            @change=${this._dhAuto}></web-toggle>
                        <span>${this._txt.auto}</span>
                    </span>
                </div>
                ${this._rfTrial()}
                <div class="tlk-messages">
                    ${this._rfLog()}
                    ${this._typingId?this._rfTyping(this._typingId):""}
                </div>
                <div class="tlk-composer-wrap">
                    <div class="tlk-composer">
                        <web-text placeholder=${this._txt.placeholder} .value=${this._draft} height="36px"
                            @input=${t=>{this._draft=t.detail.value}} @keydown=${this._dhKeydown}></web-text>
                        <web-button type="soft" color="primary" height="36px" square rounded="50%" @click=${this._dhSend}>
                            <iconify-icon icon="ri:send-plane-2-fill" width="18"></iconify-icon>
                        </web-button>
                    </div>
                </div>
            </div>
        `}_rfTrial(){const t=this.trial?O(this._trialUsage,this.lang):"";return t?e`<div class="tlk-trial"><iconify-icon icon="ri:flask-line"></iconify-icon>${t}</div>`:""}_rbDetail(t,i){const s=t.task?this._tasks?.[t.task]??null:null,a=i.fn,n=s?.fns?.find(t=>t.fn===a)?.jobId===t.id,o="secretary"===a&&n?p(s):null,l=s&&this._log.find(t=>t.id===s.fns?.find(t=>"secretary"===t.fn)?.jobId),r="secretary"!==a&&C(l?.fields?.rationale)[a]||"";return e`
            <div class="tlk-panel is-detail">
                <div class="tlk-head tlk-detail-head">
                    <button class="tlk-back" aria-label=${this._txt.back} title=${this._txt.back} @click=${this._dhClosePreview}>
                        <iconify-icon icon="ri:arrow-left-line"></iconify-icon>
                    </button>
                    <span class="tlk-title">${t.topic||i.title}</span>
                </div>
                <div class="tlk-detail">
                    <svc-job-card .job=${t} .outline=${i.outline} .view=${s} .face=${{title:i.title,pics:i.pics}}
                        why=${r} ?approvable=${!t.approved} ?busy=${this._pendingJobs.has(t.id)}
                        lang=${this.lang} ui=${this.ui} theme=${this.theme}
                        @approve=${e=>this._dhApproveAndClose(t.id,e.detail?.expertReview)}
                        @resume-step=${()=>this._talk.resumeStep(t.id)}>${this._rfDetailActions(t,i)}</svc-job-card>
                    <svc-progress .outline=${i.outline} .doc=${t} .runningSub=${this._runningSub} externalActions
                        .routing=${o} .faces=${this._comFaces} .titles=${s?.titles||{}}
                        @routing-change=${e=>this._talk.setRouting(t.id,e.detail)}
                        editable ?regeneratingImage=${this._regeneratingImage}
                        ?busy=${this._pendingJobs.has(t.id)}
                        ai=${A} ui=${this.ui} theme=${this.theme} lang=${this.lang}
                        @field-change=${e=>this._talk.setField(t.id,e.detail.key,e.detail.value)}
                        @retry-step=${()=>this._talk.retry(t.id)}
                        @regenerate-image=${()=>this._talk.regenerateImage(t.id)}
                        @photo-upload=${e=>this._talk.uploadPhoto(t.id,e.detail.url)}
                        @regenerate-call=${e=>this._talk.regenerateCall(t.id,e.detail.stepId,e.detail.callKey,e.detail.instruction)}
                        @image-choice=${e=>this._talk.imageChoice(t.id,e.detail.choice)}></svc-progress>
                </div>
            </div>
        `}_rfLog(){const t=new Map;for(const e of this._log)"job"===e.kind&&e.task&&t.set(e.task,[...t.get(e.task)??[],e]);const i=new Set,s=this._log.flatMap(e=>"chat"===e.kind?"boss"===e.from||this._talk.division(e.from)?.system?[this._rfMessage(e)]:[]:!e.task||i.has(e.task)?[]:(i.add(e.task),[this._rfTaskCard(e.task,t.get(e.task))]));return s.length?s:e`<div class="tlk-empty">${this._txt.empty}</div>`}_rfTaskCard(t,i){const s=this._tasks?.[t]??null,a=this._talk.secretary;return e`
            <div class="tlk-msg is-card">
                <web-avatar src=${a?.pics||""} name=${a?.title||""} size="28px" ui=${this.ui} theme=${this.theme}></web-avatar>
                <div class="tlk-card">
                    ${a?e`<span class="tlk-author">${a.title}</span>`:""}
                    <svc-task-card .view=${s} .jobs=${i} topic=${s?.topic||i[0]?.topic||""}
                        .faces=${this._comFaces} .outlines=${this._comOutlines} .pending=${this._pendingJobs}
                        lang=${this.lang} ui=${this.ui} theme=${this.theme} ?no-verdict=${this.noVerdict}
                        @open-job=${t=>this._dhPreview(t.detail.jobId)}
                        @approve-job=${t=>this._talk.approve(t.detail.jobId)}
                        @retry-job=${t=>this._talk.retry(t.detail.jobId)}></svc-task-card>
                </div>
            </div>
        `}_rfDetailActions(t,i){if(!t.task||!t.approved)return"";const s=this._txt,a=this._pendingJobs.has(t.id),n=this._talk.staleOf(t),o=this._talk.canRerun(t)?e`
            <web-button type=${n.length?"fill":"soft"} color="primary" height="26px" ui=${this.ui} theme=${this.theme} ?disabled=${a}
                @click=${()=>this._talk.rerun(t.task,i.fn)}>${s.rerun}</web-button>
        `:"";return n.length||o?e`
            ${n.length?e`<p class="tlk-content">⚠️ ${s.staleMsg}</p>`:""}
            <div class="tlk-actions">
                ${o}
                ${n.length?e`
                    <web-button type="soft" height="26px" ui=${this.ui} theme=${this.theme} ?disabled=${a}
                        @click=${()=>this._talk.verify(t.task,n.map(t=>t.id))}>${s.stillValid}</web-button>
                `:""}
            </div>
        `:""}_rfMessage(t){const i="boss"===t.from,s=i?this._bossName:this._comDivisionName(t.from);return e`
            <div class="tlk-msg ${i?"mine":""}">
                <web-avatar src=${i?"":this._comDivisionAvatar(t.from)} name=${s} size="28px"
                    ui=${this.ui} theme=${this.theme}></web-avatar>
                <div class="tlk-bubble">
                    <span class="tlk-author">${s}</span>
                    <p class="tlk-content">${t.content}</p>
                </div>
            </div>
        `}_rfTyping(t){return e`
            <div class="tlk-msg">
                <web-avatar src=${this._comDivisionAvatar(t)} name=${this._comDivisionName(t)} size="28px"
                    ui=${this.ui} theme=${this.theme}></web-avatar>
                <div class="tlk-bubble"><span class="tlk-author">${this._comDivisionName(t)}</span>
                    <p class="tlk-content tlk-typing">•••</p>
                </div>
            </div>
        `}};customElements.get("svc-talk")||customElements.define("svc-talk",M);export{z as t};