import{n as t}from"./rolldown-runtime.Bpd4S2KM.js";import{a as i,l as e,t as s}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import"./web-button.DzrrIr-d.js";import{C as a,S as n}from"./util.usvuopSX.js";import"./web-fab.D4RerPV8.js";import"./web-popover.wiA4NUwm.js";import"./web-avatar.DR0cDe3N.js";import"./web-text.DJCnRip-.js";import{r as o}from"./sectors.CrpvWC3a.js";import{t as l}from"./command.BBDam8WT.js";import{s as r}from"./conductor.3JgHo9oO.js";import"./web-toggle.Ca6T_js5.js";import{C as d,E as c,S as h,T as p,_ as u,a as m,b as g,c as f,d as b,f as v,g as _,h as $,i as k,l as y,m as w,n as x,o as j,p as O,r as S,s as I,t as T,u as P,v as C,w as J,x as A,y as E}from"./trial.WGM6yS3S.js";import{t as D}from"./tensor-api.C2pHhDdm.js";var B="secretary",R=new Set(["running","review","stale","error"]),N=class extends s{static styles=e(m);static properties={view:{type:Object},jobs:{type:Array},topic:{type:String},faces:{type:Object},outlines:{type:Object},pending:{type:Object},pdfJob:{type:String},lang:{type:String},ui:{type:String},theme:{type:String},noVerdict:{type:Boolean,attribute:"no-verdict"},_unfold:{state:!0}};constructor(){super(),this.view=null,this.jobs=[],this.topic="",this.faces={},this.outlines={},this.pending=new Set,this.pdfJob="",this.lang="vi",this.ui="pastel",this.theme="",this.noVerdict=!1,this._unfold=!1}_name(t){return this.faces?.[t]?.title||this.view?.titles?.[t]?.[this.lang]||this.view?.titles?.[t]?.vi||t}_emit(t,i){i&&this.dispatchEvent(new CustomEvent(t,{detail:{jobId:i},bubbles:!0,composed:!0}))}_stage(t){const i=this.view?.stage;if(i!==B)return i||"";const e=t.find(t=>t.fn===B)?.job;return"awaiting_review"===e?.status?"context":"done"!==e?.status||e.approved?B:"routing"}_pct({fn:t,state:i,job:e}){return"approved"===i?100:O(g(this.outlines?.[t],e))}render(){const t=P(this.lang),e=p(this.view,this.jobs),s=d(this.view),a=this._stage(e),n=e.find(t=>t.fn===B)?.job??this.jobs[0],o=e.filter(t=>"approved"===t.state).length,l=e.length?Math.round(e.reduce((t,i)=>t+this._pct(i),0)/e.length):0,r=e.filter(t=>"waiting"===t.state),c=r.length>=3,h=c?e.filter(t=>"waiting"!==t.state):e,u="routing"===a&&s?s.plan.run:[],m="routing"===a?A(this.view,t=>this.faces?.[t]?.title,this.lang):"",g=this.noVerdict?null:this.view?.verdict;return i`
            <div class="cd-card is-task is-click" @click=${()=>this._emit("open-job",n?.id)}>
                <div class="cd-task-head">
                    <div class="cd-task-text">
                        <div class="cd-title cd-clamp">${this.topic}</div>
                        <div class="cd-chips">
                            ${a?b(t.stage[a]??a,I[a]):""}
                            ${g?b(t.verdict[g]??g,y[g]):""}
                            <span class="cd-count">${t.approvedOf(o,e.length)}</span>
                        </div>
                    </div>
                    <div class="cd-ring ${100===l?"is-done":""}" style=${_({"--p":String(l)})}
                        role="img" aria-label=${`${l}%`}><span>${l}%</span></div>
                </div>
                ${w(e.map(t=>({state:$(t.state),label:this._name(t.fn)})))}
                <div class="cd-list">
                    ${h.map(i=>this._row(i,s,t))}
                    ${c?this._fold(r,t.waitingGroup(r.length),!0):""}
                    ${c&&this._unfold?r.map(i=>this._row(i,s,t)):""}
                    ${u.length?this._fold(u.map(t=>({fn:t})),t.proposed(u.length),!1):""}
                </div>
                ${m?i`<div class="cd-note">${m}</div>`:""}
            </div>
        `}_fold(t,e,s){const a=i`
            <span class="cd-avatars">
                ${t.slice(0,4).map(({fn:t})=>i`
                    <web-avatar src=${this.faces?.[t]?.pics||""} name=${this._name(t)} size="22px"
                        title=${this._name(t)} ui="modern" theme=${this.theme}></web-avatar>
                `)}
                ${t.length>4?i`<span class="cd-more">+${t.length-4}</span>`:""}
            </span>
            <span class="cd-fold-label">${e}</span>
        `;return s?i`
            <button class="cd-fold" aria-expanded=${this._unfold?"true":"false"}
                @click=${t=>{t.stopPropagation(),this._unfold=!this._unfold}}>
                ${a}
                <iconify-icon class="cd-chevron" icon="ri:arrow-down-s-line"></iconify-icon>
            </button>
        `:i`<div class="cd-fold">${a}</div>`}_pdf(t,e){if(!t)return"";const s=this.pdfJob===t.id;return i`
            <button class="cd-pdf" title=${e.pdf} aria-label=${e.pdf} ?disabled=${!!this.pdfJob}
                @click=${i=>{i.stopPropagation(),this._emit("pdf-job",t.id)}}>
                <iconify-icon class=${s?"is-spin":""} icon=${s?"ri:loader-4-line":"ri:file-pdf-2-line"}></iconify-icon>
            </button>
        `}_record(t,e,s){if(!t?.approved||!e?.recordable)return"";const a=!!t.createdPostId,n=!a&&this.pending?.has(t.id),o=(a?s.recorded:s.record).replace("{table}",e.output?.table??"");return i`
            <button class="cd-pdf cd-record ${a?"is-saved":""}" title=${o} aria-label=${o} ?disabled=${a||n}
                @click=${i=>{i.stopPropagation(),this._emit("record-job",t.id)}}>
                <iconify-icon class=${n?"is-spin":""} icon=${n?"ri:loader-4-line":"ri:database-2-line"}></iconify-icon>
            </button>
        `}_row(t,e,s){const{fn:a,state:n,job:o,missing:l}=t,r=this._name(a),d=this.outlines?.[a],c=this._pct(t),h=a===e?.routing.lead,p=h?"lead":e&&a in e.routing.levels?e.routing.levels[a]:null,u=f[n]??"neutral",m=R.has(n)&&c<100,g=!!o&&"done"===o.status&&!o.approved&&a!==B&&!d?.review,b=!!o&&this.pending?.has(o.id),_=t=>{t.stopPropagation(),this._emit("open-job",o?.id)},$=(t,e,s,a,n)=>i`
            <web-button type=${s} color=${e} height="26px" prefix=${a} ui=${this.ui} theme=${this.theme}
                ?loading=${b} ?disabled=${b}
                @click=${t=>{t.stopPropagation(),this._emit(n,o.id)}}>${t}</web-button>
        `;return i`
            <div class="cd-item ${"waiting"===n?"is-waiting":""}" role=${o?"button":"presentation"} tabindex=${o?"0":"-1"}
                title=${l?.length?l.map(t=>this.view?.kinds?.[t]?.[this.lang]||t).join(", "):""}
                @click=${o?_:t=>t.stopPropagation()}
                @keydown=${t=>{!o||t.target!==t.currentTarget||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),_(t))}}>
                <span class="cd-ava">
                    <web-avatar src=${this.faces?.[a]?.pics||""} name=${r} size="28px" ui="modern" theme=${this.theme}></web-avatar>
                    <span class="cd-dot" data-tone=${u}></span>
                </span>
                <div class="cd-item-main">
                    <div class="cd-item-top">
                        <span class="cd-row-name">${r}</span>
                        ${h?i`<iconify-icon class="cd-lead" icon="ri:star-fill" aria-hidden="true"></iconify-icon>`:""}
                    </div>
                    <div class="cd-item-sub">
                        ${p?i`<span>${s.level[p]??p}</span><span aria-hidden="true">·</span>`:""}
                        <span class="cd-item-state" data-tone=${u}>${s.state[n]??n}</span>
                        ${m?i`<span>${c}%</span>`:""}
                    </div>
                    ${m?v(c,"error"===n?"error":"primary"):""}
                </div>
                <div class="cd-row-side">
                    ${"error"===n?$(s.retry,"error","soft","ri:refresh-line","retry-job"):g?$(s.approve,"primary","fill","ri:check-line","approve-job"):"approved"===n?i`${this._record(o,d,s)}${this._pdf(o,s)}<iconify-icon class="cd-ok" icon="ri:checkbox-circle-fill"></iconify-icon>`:o?i`<iconify-icon class="cd-go" icon="ri:arrow-right-s-line"></iconify-icon>`:""}
                </div>
            </div>
        `}};customElements.get("svc-task-card")||customElements.define("svc-task-card",N);var V={vi:{why:"Vai trò",takes:"Nhận bàn giao",gives:"Gửi bàn giao",none:"chưa có",needsCheck:"cần xác minh",more:"Xem thêm",less:"Thu gọn",resumeText:"Chờ duyệt để chạy bước tiếp",approveText:"Xong — duyệt để giao kết quả",signOff:t=>`Đã được ${t} xem và đồng ý`,signOffName:"Họ tên người đã duyệt"},en:{why:"Role",takes:"Takes",gives:"Hands off",none:"not yet",needsCheck:"re-check",more:"More",less:"Less",resumeText:"Approve to run the next step",approveText:"Done — approve to hand it off",signOff:t=>`Reviewed and agreed by ${t}`,signOffName:"Name of the reviewer"}},z={APPROVED:"success",REQUIRES_VERIFICATION:"warning"},F=(t,i)=>(t??[]).filter(t=>t.kind===i&&"SUPERSEDED"!==t.status).sort((t,i)=>i.version-t.version)[0],M=class extends s{static styles=e(m);static properties={job:{type:Object},outline:{type:Object},view:{type:Object},face:{type:Object},why:{type:String},approvable:{type:Boolean},busy:{type:Boolean},lang:{type:String},ui:{type:String},theme:{type:String},_more:{state:!0},_signOffOk:{state:!0},_signOffBy:{state:!0}};constructor(){super(),this.job=null,this.outline=null,this.view=null,this.face=null,this.why="",this.approvable=!1,this.busy=!1,this.lang="vi",this.ui="pastel",this.theme="",this._more=!1,this._signOffOk=!1,this._signOffBy=""}willUpdate(t){t.has("job")&&t.get("job")?.id!==this.job?.id&&(this._more=!1,this._signOffOk=!1,this._signOffBy="")}updated(){this.toggleAttribute("collapsed",!this._more)}get _fn(){return String(this.job?.division??"").split(".")[1]??""}get _pausedText(){if("awaiting_review"!==this.job.status)return null;const t=this.outline.steps?.find(t=>Number(t.id)===Number(this.job.pausedStepId));return"text"===t?.type?t:null}get _canApprove(){return!("done"!==this.job.status||this.job.approved||!this.outline.output&&!this.outline.produces?.length)}get _signOffReady(){return!this.outline.review||this._signOffOk&&this._signOffBy.trim().length>=2}_stepState(t){const i=this.job,e=i.fields??{};return("image"===t.type?e.pics||"skip"===i.imageChoice:(t.calls??[]).every(t=>c(t,e)))||i.approved?"done":i.status===`step${t.id}`||Number(i.pausedStepId)===Number(t.id)?i.error?"error":"active":"todo"}_emit(t,i={}){this.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0}))}_approve(){this._signOffReady&&this._emit("approve",this.outline.review?{expertReview:{confirmed:!0,by:this._signOffBy.trim()}}:{})}_rfRecord(t){if(!this.job.approved||!this.outline.recordable)return"";const e=!!this.job.createdPostId,s=!e&&this.busy,a=(e?t.recorded:t.record).replace("{table}",this.outline.output?.table??"");return i`
            <button class="cd-icon-btn cd-record ${e?"is-saved":""}" title=${a} aria-label=${a} ?disabled=${e||s}
                @click=${()=>this._emit("record")}>
                <iconify-icon class=${s?"cd-spin":""}
                    icon=${s?"ri:loader-4-line":"ri:database-2-line"}></iconify-icon>
            </button>
        `}render(){if(!this.job||!this.outline)return i``;const t={...P(this.lang),...V[this.lang]??V.vi},e=this._fn,s=this.face?.title||this.outline.title?.[this.lang]||this.outline.title?.vi||e,a=J(this.view?.fns?.find(t=>t.jobId===this.job.id),this.job),n=d(this.view),o=n&&e in n.routing.levels?e===n.routing.lead?"lead":n.routing.levels[e]:null,l=g(this.outline,this.job),r=(this.outline.steps??[]).map(t=>({state:this._stepState(t),label:t[this.lang]??t.vi}));return i`
            <div class="cd-card is-job">
                <div class="cd-head">
                    <div class="cd-who">
                        <web-avatar src=${this.face?.pics||""} name=${s} size="30px" ui=${this.ui} theme=${this.theme}></web-avatar>
                        <div class="cd-who-text">
                            <div class="cd-title cd-ellipsis">${s}</div>
                            <div class="cd-chips">
                                ${b(t.state[a]??a,f[a])}
                                <span class="cd-count">${l.done}/${l.total}</span>
                            </div>
                        </div>
                    </div>
                    <div class="cd-head-side">
                        ${o?b(t.level[o],j[o]):""}
                        ${this._rfRecord(t)}
                        <button class="cd-icon-btn" aria-expanded=${this._more?"true":"false"}
                            title=${this._more?t.less:t.more} aria-label=${this._more?t.less:t.more}
                            @click=${()=>{this._more=!this._more}}>
                            <iconify-icon icon=${this._more?"ri:arrow-up-s-line":"ri:more-fill"}></iconify-icon>
                        </button>
                    </div>
                </div>
                ${r.length?w(r):""}
                ${this._more?this._rfMore(t):""}
                ${this._rfAction(t)}
                <slot></slot>
            </div>
        `}_rfMore(t){const e=this.view?[...this.outline.needs??[],...(this.outline.uses??[]).filter(t=>F(this.view.artifacts,t))]:[],s=this.view?(this.outline.produces??[]).map(t=>t.kind):[];return i`
            ${this.why?i`<div class="cd-section"><span class="cd-label">${t.why}</span><span class="cd-text">${k(this.why)}</span></div>`:""}
            ${e.length?i`<div class="cd-section"><span class="cd-label">${t.takes}</span>${this._handoffs(e,t)}</div>`:""}
            ${s.length?i`<div class="cd-section"><span class="cd-label">${t.gives}</span>${this._handoffs(s,t)}</div>`:""}
        `}_handoffs(t,e){const s=t=>this.view?.kinds?.[t]?.[this.lang]||this.view?.kinds?.[t]?.vi||t;return i`<div class="cd-chips">${t.map(t=>{const i=F(this.view?.artifacts,t),a=i?"REQUIRES_VERIFICATION"===i.status?` · ${e.needsCheck}`:` · v${i.version}`:` · ${e.none}`;return b(`${s(t)}${a}`,i?z[i.status]??"neutral":"muted")})}</div>`}_rfAction(t){if(!this.approvable)return"";const e=this._pausedText;if(!e&&!this._canApprove)return"";const s=!e&&this.outline.review;return i`
            ${s?i`
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
                <span class="cd-action-text">${e?t.resumeText:t.approveText}</span>
                <web-button type="fill" color="primary" height="30px" ui=${this.ui} theme=${this.theme}
                    ?loading=${this.busy} ?disabled=${this.busy||!e&&!this._signOffReady}
                    @click=${()=>e?this._emit("resume-step"):this._approve()}>
                    ${t.approve}
                </web-button>
            </div>
        `}};customElements.get("svc-job-card")||customElements.define("svc-job-card",M);var U=t({SvcTalk:()=>K,default:()=>K}),H={vi:{panelTitle:"Trợ lý AI toàn doanh nghiệp",placeholder:"Nhắn Thư ký việc cần làm…",empty:"Chưa có tin nhắn nào — nhắn Thư ký việc cần làm, Thư ký sẽ phân công các phòng.",auto:"Tự động",autoHint:"Tự duyệt từng bước, tự tạo ảnh (lỗi thì bỏ qua — tạo lại sau) và tự chuyển việc sang phòng kế tiếp",back:"Quay lại",staleMsg:"Bàn giao này dựa trên bản cũ của phòng phía trước — cần xác minh lại",rerun:"Chạy lại",stillValid:"Vẫn dùng được",planPdf:"Tải PDF kế hoạch",pdfFailed:"Không xuất được PDF — thử lại sau"},en:{panelTitle:"Enterprise AI Assistant",placeholder:"Tell the Secretary what needs doing…",empty:"No messages yet — tell the Secretary what needs doing and it will route the work.",auto:"Auto",autoHint:"Approves each step, generates the images (skips one that fails — redo it later) and hands the work on by itself",back:"Back",staleMsg:"This handoff was built on an older upstream version — it needs re-checking",rerun:"Re-run",stillValid:"Still valid",planPdf:"Download plan PDF",pdfFailed:"Couldn't export the PDF — try again later"}},K=class extends s{static styles=e(":host{display:contents}:host(:not([embedded])) web-popover{height:0;display:block}.tlk-panel{box-sizing:border-box;border-radius:.5rem;flex-direction:column;width:380px;height:calc(100% + 1rem);min-height:380px;margin:-.5rem;display:flex;overflow:hidden}:host([embedded]) .tlk-panel{border-radius:0;width:100%;height:100%;min-height:0;margin:0}.tlk-head{border-bottom:1px solid color-mix(in oklab, var(--color-base-300) 30%, transparent);flex:none;justify-content:space-between;align-items:center;padding:.5rem .75rem;display:flex}.tlk-title{font-weight:600}.tlk-auto{flex:none;align-items:center;gap:.4rem;font-size:.8rem;display:inline-flex}.tlk-title.has-icon{align-items:center;gap:.4rem;display:inline-flex}.tlk-title.has-icon iconify-icon{flex:none;font-size:1.15rem}.tlk-trial{color:var(--color-info);background:color-mix(in oklab, var(--color-info) 10%, transparent);flex:none;align-items:center;gap:.4rem;padding:.35rem .75rem;font-size:.75rem;display:flex}.tlk-messages{flex-direction:column;flex:1;gap:.6rem;min-height:0;padding:.75rem;display:flex;overflow-y:auto}.tlk-empty{opacity:.6;text-align:center;margin:auto;font-size:.8rem}.tlk-msg{gap:.5rem;max-width:85%;display:flex}.tlk-msg.mine{flex-direction:row-reverse;margin-left:auto}.tlk-bubble{background:color-mix(in oklab, var(--color-base-300) 30%, transparent);border-radius:.75rem;min-width:0;padding:.5rem .75rem}.tlk-msg.mine .tlk-bubble{background:color-mix(in oklab, var(--color-primary) 25%, transparent)}.tlk-author{opacity:.7;margin-bottom:.1rem;font-size:.72rem;display:block}.tlk-content{white-space:pre-wrap;word-break:break-word;margin:0;font-size:.875rem}.tlk-typing{letter-spacing:.15em;animation:1.2s ease-in-out infinite tlk-typing-pulse}@keyframes tlk-typing-pulse{0%,to{opacity:.35}50%{opacity:1}}.tlk-actions{flex-wrap:wrap;gap:.4rem;margin-top:.4rem;display:flex}.tlk-composer-wrap{border-top:1px solid var(--color-base-300);flex:none;position:relative}.tlk-composer{gap:.5rem;padding:.5rem;display:flex}.tlk-composer web-text{flex:1;min-width:0}.tlk-detail-head{justify-content:flex-start;gap:.5rem}.tlk-detail-head .tlk-title{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tlk-back{cursor:pointer;width:28px;height:28px;color:inherit;background:0 0;border:none;border-radius:50%;flex:none;justify-content:center;align-items:center;font-size:1.1rem;display:flex}.tlk-back:hover{background:color-mix(in oklab, var(--color-base-content) 10%, transparent)}.tlk-detail{flex:1;min-height:0;padding:.75rem;overflow-y:auto}.tlk-msg.is-card{width:100%;max-width:100%}.tlk-card{flex-direction:column;flex:1;min-width:0;display:flex}.tlk-detail svc-job-card{margin-bottom:.9rem}.tlk-detail svc-job-card[collapsed]{z-index:3;position:sticky;top:-.75rem}");static properties={ui:{type:String},theme:{type:String},lang:{type:String},txt:{type:Object},embedded:{type:Boolean,reflect:!0},sector:{type:String},noVerdict:{type:Boolean,attribute:"no-verdict"},trial:{type:Boolean},command:{attribute:!1},_log:{state:!0},_divisions:{state:!0},_system:{state:!0},_tasks:{state:!0},_typingId:{state:!0},_runningSub:{state:!0},_pendingJobs:{state:!0},_regeneratingImage:{state:!0},_auto:{state:!0},_trialUsage:{state:!0},_draft:{state:!0},_previewJobId:{state:!0},_pdfTask:{state:!0},_pdfJob:{state:!0}};constructor(){super(),this.ui="pastel",this.theme="dark",this.lang="vi",this.txt=null,this.embedded=!1,this.noVerdict=!0,this.trial=!1,this.command=null,this.sector=u,this._talk=C(u),this._dcSync(this._talk.state),this._draft="",this._previewJobId="",this._pdfTask="",this._pdfJob="",this._unsub=null}connectedCallback(){super.connectedCallback(),this._dcBind()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.()}_dcBind(){this._unsub?.(),this._talk=C(this.sector||"ecommerce",{trial:this.trial}),this._dcSync(this._talk.state),this._unsub=r(this._talk.section,()=>this._dcSync(this._talk.state)),this._talk.load(this.lang)}_dcSync(t){this._log=t.log,this._divisions=t.divisions,this._system=t.system,this._tasks=t.tasks,this._typingId=t.typingId,this._runningSub=t.runningSub,this._pendingJobs=t.pendingJobs,this._regeneratingImage=t.regeneratingImage,this._auto=!!t.auto,this._trialUsage=t.trialUsage,t.lang&&t.lang!==this.lang&&(this.lang=t.lang)}willUpdate(t){t.has("sector")&&this.isConnected&&this._talk.sector!==(this.sector||"ecommerce")?this._dcBind():t.has("trial")&&this.isConnected&&this._talk.setTrial(this.trial),t.has("lang")&&this._talk?.setLang(this.lang),this._talk&&(this._talk.showVerdict=!this.noVerdict),t.has("command")&&this._dhCommand()}updated(t){(t.has("_log")||t.has("_typingId")||t.has("_previewJobId"))&&this._scrollToBottom()}_scrollToBottom(){const t=this.shadowRoot?.querySelector(".tlk-messages");t&&(t.scrollTop=t.scrollHeight)}_dhPreview(t){this._previewJobId=t}_dhClosePreview(){this._previewJobId=""}async _dhApproveAndClose(t,i){await this._talk.approve(t,i),this._log.find(i=>i.id===t)?.approved&&this._dhClosePreview()}_dhKeydown(t){"Enter"!==t.key||t.isComposing||this._dhSend()}_dhSend(){const t=(this._draft||"").trim();t&&(this._draft="",this._talk.sendMessage(t))}_dhAuto(t){t.stopPropagation(),this._talk.setAuto(t.detail.active)}_dhCommand(){const t=l(this.command);t&&(this._previewJobId="",this._talk.sendMessage(t))}get _txt(){return a(this.txt,H,this.lang)}get _bossName(){return"Boss"}_comDivisionName(t){return this._talk.division(t)?.title||t}_comDivisionAvatar(t){return this._talk.division(t)?.pics||""}get _comFaces(){return Object.fromEntries([...this._divisions,...this._system].map(t=>[t.fn,{title:t.title,pics:t.pics}]))}get _comOutlines(){return Object.fromEntries([...this._divisions,...this._system].map(t=>[t.fn,t.outline]))}render(){return this._divisions.length?i`
            ${this.embedded?this._rbPanel():i`
                <web-popover ui=${this.ui} theme=${this.theme} lang=${this.lang} placement="top-end" placementGap="0" fullscreen>
                    <web-fab slot="trigger" icon=${o} size="lg" rounded="50%" x="99%" y="80%" movable ui="modern" theme=${this.theme}></web-fab>
                    ${this._rbPanel()}
                </web-popover>
            `}
        `:i``}_rbPanel(){const t=this._previewJobId&&this._log.find(t=>t.id===this._previewJobId),e=t&&this._talk.division(t.division);return t&&e?.outline?this._rbDetail(t,e):i`
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
        `}_rfTrial(){const t=this.trial?T(this._trialUsage,this.lang):"";return t?i`<div class="tlk-trial"><iconify-icon icon="ri:flask-line"></iconify-icon>${t}</div>`:""}_rbDetail(t,e){const s=t.task?this._tasks?.[t.task]??null:null,a=e.fn,n=s?.fns?.find(t=>t.fn===a)?.jobId===t.id,o="secretary"===a&&n?d(s):null,l=s&&this._log.find(t=>t.id===s.fns?.find(t=>"secretary"===t.fn)?.jobId),r="secretary"!==a&&h(l?.fields?.rationale)[a]||"";return i`
            <div class="tlk-panel is-detail">
                <div class="tlk-head tlk-detail-head">
                    <button class="tlk-back" aria-label=${this._txt.back} title=${this._txt.back} @click=${this._dhClosePreview}>
                        <iconify-icon icon="ri:arrow-left-line"></iconify-icon>
                    </button>
                    <span class="tlk-title">${t.topic||e.title}</span>
                </div>
                <div class="tlk-detail">
                    <svc-job-card .job=${t} .outline=${e.outline} .view=${s} .face=${{title:e.title,pics:e.pics}}
                        why=${r} ?approvable=${!t.approved} ?busy=${this._pendingJobs.has(t.id)}
                        lang=${this.lang} ui=${this.ui} theme=${this.theme}
                        @approve=${i=>this._dhApproveAndClose(t.id,i.detail?.expertReview)}
                        @resume-step=${()=>this._talk.resumeStep(t.id)}
                        @record=${()=>this._talk.record(t.id)}>${this._rfDetailActions(t,e)}</svc-job-card>
                    <svc-progress .outline=${e.outline} .doc=${t} .runningSub=${this._runningSub} externalActions
                        .routing=${o} .faces=${this._comFaces} .titles=${s?.titles||{}}
                        @routing-change=${i=>this._talk.setRouting(t.id,i.detail)}
                        editable ?regeneratingImage=${this._regeneratingImage}
                        ?busy=${this._pendingJobs.has(t.id)}
                        ai=${D} ui=${this.ui} theme=${this.theme} lang=${this.lang}
                        @field-change=${i=>this._talk.setField(t.id,i.detail.key,i.detail.value)}
                        @retry-step=${()=>this._talk.retry(t.id)}
                        @regenerate-image=${()=>this._talk.regenerateImage(t.id)}
                        @photo-upload=${i=>this._talk.uploadPhoto(t.id,i.detail.url)}
                        @regenerate-call=${i=>this._talk.regenerateCall(t.id,i.detail.stepId,i.detail.callKey,i.detail.instruction)}
                        @image-choice=${i=>this._talk.imageChoice(t.id,i.detail.choice)}></svc-progress>
                </div>
            </div>
        `}_rfLog(){const t=new Map;for(const i of this._log)"job"===i.kind&&i.task&&t.set(i.task,[...t.get(i.task)??[],i]);const e=new Set;let s="";const a=this._log.flatMap(i=>{if("chat"===i.kind){if("boss"!==i.from&&!this._talk.division(i.from)?.system)return[];const t="boss"!==i.from&&E(i.content)?i.task||s:"";return[this._rfMessage(i,t)]}return i.task&&(s=i.task),!i.task||e.has(i.task)?[]:(e.add(i.task),[this._rfTaskCard(i.task,t.get(i.task))])});return a.length?a:i`<div class="tlk-empty">${this._txt.empty}</div>`}_rfTaskCard(t,e){const s=this._tasks?.[t]??null,a=this._talk.secretary;return i`
            <div class="tlk-msg is-card">
                <web-avatar src=${a?.pics||""} name=${a?.title||""} size="28px" ui=${this.ui} theme=${this.theme}></web-avatar>
                <div class="tlk-card">
                    ${a?i`<span class="tlk-author">${a.title}</span>`:""}
                    <svc-task-card .view=${s} .jobs=${e} topic=${s?.topic||e[0]?.topic||""}
                        .faces=${this._comFaces} .outlines=${this._comOutlines} .pending=${this._pendingJobs} pdfJob=${this._pdfJob}
                        lang=${this.lang} ui=${this.ui} theme=${this.theme} ?no-verdict=${this.noVerdict}
                        @open-job=${t=>this._dhPreview(t.detail.jobId)}
                        @approve-job=${t=>this._talk.approve(t.detail.jobId)}
                        @retry-job=${t=>this._talk.retry(t.detail.jobId)}
                        @pdf-job=${t=>this._dhJobPdf(t.detail.jobId)}
                        @record-job=${t=>this._talk.record(t.detail.jobId)}></svc-task-card>
                </div>
            </div>
        `}_rfDetailActions(t,e){if(!t.task||!t.approved)return"";const s=this._txt,a=this._pendingJobs.has(t.id),n=this._talk.staleOf(t),o=this._talk.canRerun(t)?i`
            <web-button type=${n.length?"fill":"soft"} color="primary" height="26px" ui=${this.ui} theme=${this.theme} ?disabled=${a}
                @click=${()=>this._talk.rerun(t.task,e.fn)}>${s.rerun}</web-button>
        `:"";return n.length||o?i`
            ${n.length?i`<p class="tlk-content">⚠️ ${s.staleMsg}</p>`:""}
            <div class="tlk-actions">
                ${o}
                ${n.length?i`
                    <web-button type="soft" height="26px" ui=${this.ui} theme=${this.theme} ?disabled=${a}
                        @click=${()=>this._talk.verify(t.task,n.map(t=>t.id))}>${s.stillValid}</web-button>
                `:""}
            </div>
        `:""}_rfMessage(t,e=""){const s="boss"===t.from,a=s?this._bossName:this._comDivisionName(t.from),n=this._txt;return i`
            <div class="tlk-msg ${s?"mine":""}">
                <web-avatar src=${s?"":this._comDivisionAvatar(t.from)} name=${a} size="28px"
                    ui=${this.ui} theme=${this.theme}></web-avatar>
                <div class="tlk-bubble">
                    <span class="tlk-author">${a}</span>
                    <p class="tlk-content">${t.content}</p>
                    ${e?i`
                        <div class="tlk-actions">
                            <web-button type="soft" color="primary" height="28px" prefix="ri:file-pdf-2-line" ui=${this.ui} theme=${this.theme}
                                ?loading=${this._pdfTask===e} ?disabled=${!!this._pdfTask}
                                @click=${()=>this._dhPlanPdf(e)}>${n.planPdf}</web-button>
                        </div>
                    `:""}
                </div>
            </div>
        `}async _dhJobPdf(t){if(this._pdfJob)return;const i=this._log.find(i=>i.id===t),e=i&&this._talk.division(i.division);if(e?.outline){this._pdfJob=t;try{await x({job:i,outline:e.outline,department:e.title||"",lang:this.lang})}catch(s){console.error("[llm/talk] PDF export failed:",s),n(this._txt.pdfFailed,"error")}finally{this._pdfJob=""}}}async _dhPlanPdf(t){if(!this._pdfTask){this._pdfTask=t;try{const i=this._tasks?.[t]??null,e=this._log.filter(i=>"job"===i.kind&&i.task===t),s=p(i,e).flatMap(({fn:t,job:i})=>{const e=i&&this._talk.division(i.division);return e?.outline?[{name:e.title||t,job:i,outline:e.outline}]:[]}),a=!this.noVerdict&&i?.verdict?P(this.lang).verdict[i.verdict]??i.verdict:"";await S({topic:i?.topic||e[0]?.topic||"",verdict:a,parts:s,lang:this.lang})}catch(i){console.error("[llm/talk] plan PDF export failed:",i),n(this._txt.pdfFailed,"error")}finally{this._pdfTask=""}}}_rfTyping(t){return i`
            <div class="tlk-msg">
                <web-avatar src=${this._comDivisionAvatar(t)} name=${this._comDivisionName(t)} size="28px"
                    ui=${this.ui} theme=${this.theme}></web-avatar>
                <div class="tlk-bubble"><span class="tlk-author">${this._comDivisionName(t)}</span>
                    <p class="tlk-content tlk-typing">•••</p>
                </div>
            </div>
        `}};customElements.get("svc-talk")||customElements.define("svc-talk",K);export{U as t};