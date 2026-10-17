const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/svc-division.BWCXxDh9.js","_astro/rolldown-runtime.Bpd4S2KM.js","_astro/lit.DdxAWBw5.js","_astro/iconify-icon.BQKUsOMK.js","_astro/util.CY6kFoG4.js","_astro/site.8LVfOMIu.js","_astro/crud.CX3WX3Lk.js","_astro/requester.jXCkXaDG.js","_astro/supabase.CVztqh8l.js","_astro/storager.DiqTSHNY.js","_astro/keyed.BQ2awlvF.js","_astro/directive.DQozs3xI.js","_astro/directive-helpers.B7fUJHHg.js","_astro/service.R3dnuEzn.js","_astro/server.CcQFWJi8.js","_astro/hub.dfnBb8qQ.js","_astro/sectors.BaJ4_iqg.js","_astro/command.BBDam8WT.js"])))=>i.map(i=>d[i]);
import{a as t,c as i,n as e,t as n}from"./lit.DdxAWBw5.js";import"./iconify-icon.BQKUsOMK.js";import"./web-button.CCcr9NnS.js";import{C as a,S as s}from"./util.CY6kFoG4.js";import{t as r}from"./preload-helper.CWk6GCoH.js";import"./web-text.BxifyJ0d.js";import{t as o,u as d}from"./service.R3dnuEzn.js";import{a as l}from"./sectors.BaJ4_iqg.js";import{c,n as h,t as p}from"./command.BBDam8WT.js";import{s as f}from"./conductor.B6bp_-mz.js";import{n as m,t as g,v as b}from"./trial.C3_DRxp4.js";import{t as u}from"./tensor-api.C2pHhDdm.js";var _={vi:{work:"Công việc",manage:"Quản lý",placeholder:"Giao chủ đề cho phòng này…",start:"Bắt đầu",empty:"Chưa có việc nào — giao 1 chủ đề để bắt đầu.",unavailable:"Phòng ban này chưa mở cho tài khoản của bạn.",back:"Quay lại",more:"Xem đầy đủ",less:"Thu gọn",pdf:"Tải PDF",pdfFailed:"Không xuất được PDF — thử lại sau",status:{running:"Đang làm",review:"Chờ duyệt bước",done:"Chờ duyệt",approved:"Đã duyệt",error:"Lỗi"}},en:{work:"Work",manage:"Manage",placeholder:"Give this department a topic…",start:"Start",empty:"No work yet — give it a topic to start.",unavailable:"This department is not open to your account yet.",back:"Back",more:"Show all",less:"Show less",pdf:"Download PDF",pdfFailed:"Couldn't export the PDF — try again later",status:{running:"Working",review:"Step review",done:"To approve",approved:"Approved",error:"Error"}}},v=class extends n{static styles=i(":host{height:100%;display:block}.fn-panel{box-sizing:border-box;flex-direction:column;height:100%;min-height:0;display:flex}.fn-head{border-bottom:1px solid color-mix(in oklab, var(--color-base-300) 30%, transparent);flex:none;justify-content:space-between;align-items:flex-start;gap:.75rem;padding:.6rem .75rem;display:flex}.fn-heading{flex:1;align-items:flex-start;gap:.6rem;min-width:0;display:flex}.fn-icon{color:var(--color-base-content);flex:none;justify-content:center;align-items:center;width:1.65rem;height:1.65rem;font-size:1.25rem;display:inline-flex;overflow:hidden}.fn-icon img{object-fit:cover;width:100%;height:100%}.fn-about{min-width:0;color:inherit;font:inherit;text-align:left;cursor:pointer;opacity:.8;white-space:nowrap;text-overflow:ellipsis;background:0 0;border:0;flex:1;align-self:center;padding:0;font-size:.75rem;overflow:hidden}.fn-about:hover{opacity:1}.fn-about.is-open{white-space:normal;align-self:flex-start;overflow:visible}.fn-tabs{flex:none;gap:.25rem;display:flex}.fn-tab{border:1px solid var(--color-base-300);color:inherit;font:inherit;cursor:pointer;background:0 0;border-radius:999px;padding:.2rem .6rem;font-size:.8rem}.fn-tab.is-active{background:color-mix(in oklab, var(--color-primary) 25%, transparent);border-color:var(--color-primary)}.fn-trial{color:var(--color-info);background:color-mix(in oklab, var(--color-info) 10%, transparent);flex:none;align-items:center;gap:.4rem;padding:.35rem .75rem;font-size:.75rem;display:flex}.fn-composer{flex:none;gap:.5rem;padding:.6rem .75rem;display:flex}.fn-composer web-text{flex:1;min-width:0}.fn-list{flex-direction:column;flex:1;gap:.4rem;min-height:0;padding:0 .75rem .75rem;display:flex;overflow-y:auto}.fn-empty{opacity:.6;text-align:center;margin:auto;padding:1rem;font-size:.8rem}.fn-job{box-sizing:border-box;cursor:pointer;text-align:left;width:100%;min-width:0;color:inherit;font:inherit;background:color-mix(in oklab, var(--color-base-300) 45%, transparent);border:0;border-radius:.6rem;justify-content:space-between;align-items:center;gap:.5rem;padding:.5rem .7rem;display:flex}.fn-job:hover{background:var(--color-base-300)}.fn-job:focus-visible{outline:2px solid var(--color-primary);outline-offset:2px}.fn-job-side{flex:none;align-items:center;gap:.3rem;display:flex}.fn-pdf{color:var(--color-primary);cursor:pointer;opacity:.75;background:0 0;border:0;border-radius:.3rem;justify-content:center;align-items:center;padding:.15rem;font-size:1rem;line-height:1;display:inline-flex}.fn-pdf:hover:not(:disabled){opacity:1;background:color-mix(in oklab, var(--color-primary) 15%, transparent)}.fn-pdf:disabled{cursor:progress}.fn-pdf .is-spin{animation:.8s linear infinite fn-spin}@keyframes fn-spin{to{transform:rotate(360deg)}}.fn-job-topic{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:.85rem;overflow:hidden}.fn-badge{background:var(--color-base-200);border-radius:999px;flex:none;padding:.1rem .5rem;font-size:.7rem}.fn-badge.is-running{background:color-mix(in oklab, var(--color-info) 25%, transparent)}.fn-badge.is-review,.fn-badge.is-done{background:color-mix(in oklab, var(--color-warning) 30%, transparent)}.fn-badge.is-approved{background:color-mix(in oklab, var(--color-success) 30%, transparent)}.fn-badge.is-error{background:color-mix(in oklab, var(--color-error) 30%, transparent)}.fn-detail-head{border-bottom:1px solid color-mix(in oklab, var(--color-base-300) 30%, transparent);flex:none;align-items:center;gap:.4rem;padding:.5rem .75rem;display:flex}.fn-back{color:inherit;cursor:pointer;background:0 0;border:0;padding:.2rem;font-size:1.1rem;display:inline-flex}.fn-detail-title{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:.9rem;font-weight:600;overflow:hidden}.fn-detail{flex:1;min-height:0;padding:.5rem .75rem;overflow-y:auto}.fn-manage{flex:1;min-height:0;overflow-y:auto}");static properties={ui:{type:String},theme:{type:String},lang:{type:String},txt:{type:Object},embedded:{type:Boolean,reflect:!0},division:{type:String},command:{attribute:!1},trial:{type:Boolean},_log:{state:!0},_divisions:{state:!0},_runningSub:{state:!0},_pendingJobs:{state:!0},_regeneratingImage:{state:!0},_trialUsage:{state:!0},_draft:{state:!0},_openId:{state:!0},_tab:{state:!0},_admin:{state:!0},_starting:{state:!0},_aboutOpen:{state:!0},_pdfId:{state:!0}};constructor(){super(),this.ui="pastel",this.theme="dark",this.lang="vi",this.txt=null,this.embedded=!1,this.division="",this.command=null,this.trial=!1,this._talk=null,this._unsub=null,this._draft="",this._openId="",this._tab="work",this._admin=!1,this._starting=!1,this._aboutOpen=!1,this._pdfId="",this._dcSync({}),this._dcPerms=this._dcPerms.bind(this)}connectedCallback(){super.connectedCallback(),this._dcBind(),this._dcPerms(),window.addEventListener("login-success",this._dcPerms)}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),window.removeEventListener("login-success",this._dcPerms)}willUpdate(t){t.has("division")&&this.isConnected&&this._dcBind(),t.has("trial")&&this._talk&&this._talk.setTrial(this.trial),t.has("lang")&&this._talk?.setLang(this.lang),t.has("command")&&this._dhCommand()}get _id(){return h(this.division)}_dcBind(){const t=c(this.division);t&&this._talk?.sector!==t&&(this._unsub?.(),this._talk=b(t,{trial:this.trial}),this._dcSync(this._talk.state),this._unsub=f(this._talk.section,()=>this._dcSync(this._talk.state)),this._talk.load(this.lang),this._talk.setLang(this.lang))}_dcSync(t){this._log=t.log??[],this._divisions=t.divisions??[],this._runningSub=t.runningSub??{},this._pendingJobs=t.pendingJobs??new Set,this._regeneratingImage=!!t.regeneratingImage,this._trialUsage=t.trialUsage??null}async _dcPerms(){const t=await o.get();this._admin="active"===t?.status&&d(t).isAdmin}async _dhStart(){const t=this._draft.trim();if(t&&!this._starting&&this._talk){this._starting=!0;try{const i=await this._talk.startJob(this._id,t);i&&(this._draft="",this._openId=i.id)}finally{this._starting=!1}}}_dhKeydown(t){"Enter"!==t.key||t.isComposing||this._dhStart()}_dhCommand(){const t=p(this.command);t&&(this._tab="work",this._draft=t,this._dhStart())}async _dhApprove(t,i){await this._talk.approve(t,i);const e=this._jobs.find(i=>i.id===t);e?.approved&&(this._openId="",this.dispatchEvent(new CustomEvent("fn-approved",{detail:{division:this._id,jobId:t,recordId:e.createdPostId??""},bubbles:!0,composed:!0})))}async _dhPdf(t){if(!this._pdfId){this._pdfId=t.id;try{await m({job:t,outline:this._dept?.outline,department:this._dept?.title||"",lang:this.lang})}catch(i){console.error("[llm/fn] PDF export failed:",i),s(this._txt.pdfFailed,"error")}finally{this._pdfId=""}}}get _txt(){return a(this.txt,_,this.lang)}get _dept(){return this._talk?.division(this._id)??null}get _jobs(){const t=this._id;return this._log.filter(i=>"job"===i.kind&&h(i.division)===t).reverse().slice(0,30)}render(){const i=this._txt,n=this._dept;return t`
            <div class="fn-panel">
                <div class="fn-head">
                    <div class="fn-heading">
                        ${this._rfIcon(n)}
                        ${n?.description?t`
                            <button class="fn-about ${this._aboutOpen?"is-open":""}" aria-expanded=${this._aboutOpen}
                                title=${this._aboutOpen?i.less:i.more}
                                @click=${()=>{this._aboutOpen=!this._aboutOpen}}>${n.description}</button>
                        `:e}
                    </div>
                    ${this._admin?t`
                        <div class="fn-tabs" role="tablist">
                            ${["work","manage"].map(e=>t`
                                <button role="tab" class="fn-tab ${this._tab===e?"is-active":""}" aria-selected=${this._tab===e}
                                    @click=${()=>{this._tab=e}}>${i[e]}</button>
                            `)}
                        </div>
                    `:e}
                </div>
                ${"manage"===this._tab&&this._admin?this._rbManage():this._rbWork(n)}
            </div>
        `}_rfIcon(i){const e=i?.title||this._id;return t`
            <span class="fn-icon" role="img" aria-label=${e} title=${e}>
                ${i?.pics?t`<img src=${i.pics} alt="" loading="lazy">`:t`<iconify-icon icon=${l(i??{fn:this._id.split(".")[1]})}></iconify-icon>`}
            </span>
        `}_rbWork(i){const n=this._txt;if(!i?.outline)return t`<div class="fn-empty">${this._divisions.length?n.unavailable:"…"}</div>`;const a=this._openId&&this._jobs.find(t=>t.id===this._openId);if(a)return this._rbDetail(a,i);const s=this._jobs,r=this.trial?g(this._trialUsage,this.lang,i.fn):"";return t`
            ${r?t`<div class="fn-trial"><iconify-icon icon="ri:flask-line"></iconify-icon>${r}</div>`:e}
            <div class="fn-composer">
                <web-text placeholder=${n.placeholder} .value=${this._draft} height="36px"
                    @input=${t=>{this._draft=t.detail.value}} @keydown=${this._dhKeydown}></web-text>
                <web-button type="fill" color="primary" height="36px" ui=${this.ui} theme=${this.theme}
                    ?loading=${this._starting} ?disabled=${this._starting||!this._draft.trim()}
                    @click=${this._dhStart}>${n.start}</web-button>
            </div>
            <div class="fn-list">
                ${s.length?s.map(t=>this._rfJob(t)):t`<div class="fn-empty">${n.empty}</div>`}
            </div>
        `}_rfJob(i){const n=this._txt,a=(t=>t.approved?"approved":t.error?"error":"awaiting_review"===t.status?"review":"done"===t.status?"done":"running")(i),s="done"===i.status&&!i.error,r=()=>{this._openId=i.id};return t`
            <div class="fn-job" role="button" tabindex="0" @click=${r}
                @keydown=${t=>{t.target!==t.currentTarget||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),r())}}>
                <span class="fn-job-topic">${i.topic}</span>
                <span class="fn-job-side">
                    ${s?t`
                        <button class="fn-pdf" title=${n.pdf} aria-label=${n.pdf} ?disabled=${!!this._pdfId}
                            @click=${t=>{t.stopPropagation(),this._dhPdf(i)}}>
                            <iconify-icon class=${this._pdfId===i.id?"is-spin":""} icon=${this._pdfId===i.id?"ri:loader-4-line":"ri:file-pdf-2-line"}></iconify-icon>
                        </button>
                    `:e}
                    <span class="fn-badge is-${a}">${n.status[a]}</span>
                </span>
            </div>
        `}_rbDetail(i,e){const n=this._txt,a=this._talk;return t`
            <div class="fn-detail-head">
                <button class="fn-back" aria-label=${n.back} title=${n.back} @click=${()=>{this._openId=""}}>
                    <iconify-icon icon="ri:arrow-left-line"></iconify-icon>
                </button>
                <span class="fn-detail-title">${i.topic}</span>
            </div>
            <div class="fn-detail">
                <svc-progress .outline=${e.outline} .doc=${i} .runningSub=${this._runningSub}
                    editable approvable
                    ?regeneratingImage=${this._regeneratingImage} ?busy=${this._pendingJobs.has(i.id)}
                    ai=${u} ui=${this.ui} theme=${this.theme} lang=${this.lang}
                    @field-change=${t=>a.setField(i.id,t.detail.key,t.detail.value)}
                    @retry-step=${()=>a.retry(i.id)}
                    @regenerate-image=${()=>a.regenerateImage(i.id)}
                    @photo-upload=${t=>a.uploadPhoto(i.id,t.detail.url)}
                    @approve=${t=>this._dhApprove(i.id,t.detail?.expertReview)}
                    @resume-step=${()=>a.resumeStep(i.id)}
                    @regenerate-call=${t=>a.regenerateCall(i.id,t.detail.stepId,t.detail.callKey,t.detail.instruction)}
                    @image-choice=${t=>a.imageChoice(i.id,t.detail.choice)}></svc-progress>
            </div>
        `}_rbManage(){return customElements.get("svc-division")||r(()=>import("./svc-division.BWCXxDh9.js").then(t=>t.t).then(()=>this.requestUpdate()),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),t`
            <div class="fn-manage">
                <svc-division division=${this._id} ui=${this.ui} theme=${this.theme} lang=${this.lang}></svc-division>
            </div>
        `}};customElements.get("svc-fn")||customElements.define("svc-fn",v);export{v as SvcFn,v as default};