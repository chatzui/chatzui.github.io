import{d as e,r as t,u as i}from"./lit.72plP4vO.js";import"./web-select.BqeVheYK.js";import"./web-board.CQ22JsSM.js";import{c as s,l as r,n as o,o as a,r as n,s as l,t as d,u as c}from"./codemirror.mnbi44SY.js";import"./web-split.BeqbiKy1.js";import{t as h}from"./spatial.DQTwa792.js";var p={json:r,javascript:d,js:d,typescript:d,ts:d,css:a,html:l,markup:l},u=class extends e{static properties={value:{type:String},lang:{type:String},title:{type:String},readonly:{type:Boolean},theme:{type:String},maxHeight:{type:String}};static styles=i`
        :host {
            display: flex;
            flex-direction: column;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin: 1rem 0;
        }

        .header {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.45rem 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .label {
            font-size: 0.7rem;
            font-weight: 600;
            color: #c678dd;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-family: system-ui, sans-serif;
        }

        .editor-wrap {
            flex: 1;
            min-height: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        #cm { flex: 1; min-height: 0; display: flex; flex-direction: column; }

        /* ── CodeMirror overrides ───────────────────────────────── */
        .cm-editor         { flex: 1; min-height: 0; font-size: 0.83rem; }
        .cm-editor.cm-focused { outline: none !important; }
        .cm-scroller {
            font-family: 'Fira Code', 'Cascadia Code', Consolas, Monaco, monospace !important;
            line-height: 1.6 !important;
            overflow: auto !important;
        }

        /* Thin scrollbar */
        .cm-scroller::-webkit-scrollbar         { width: 6px; height: 6px; }
        .cm-scroller::-webkit-scrollbar-track   { background: transparent; }
        .cm-scroller::-webkit-scrollbar-thumb   { background: rgba(255,255,255,0.12); border-radius: 3px; }
        .cm-scroller::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.22); }
    `;constructor(){super(),this.value="",this.lang="json",this.title="",this.readonly=!1,this.theme="dark",this.maxHeight="none",this._view=null,this._fromEditor=!1}disconnectedCallback(){super.disconnectedCallback(),this._view?.destroy(),this._view=null}firstUpdated(){this._mount()}updated(e){if(this._view){if(e.has("value")&&!this._fromEditor){const e=this._view.state.doc.toString();e!==(this.value??"")&&this._view.dispatch({changes:{from:0,to:e.length,insert:this.value??""}})}if(e.has("lang")||e.has("theme")||e.has("readonly")||e.has("maxHeight")){const e=this._view.state.doc.toString();this._view.destroy(),this._view=null,this._mount(e)}}}_mount(e){const t=this.shadowRoot?.querySelector("#cm");if(!t||this._view)return;const i=e??this.value??"",r=[c,(p[this.lang]??p.json)(),s.updateListener.of(e=>{if(!e.docChanged)return;const t=e.state.doc.toString();this._fromEditor=!0,this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0})),this._fromEditor=!1})];"dark"===this.theme&&r.push(o),this.readonly&&r.push(n.readOnly.of(!0)),"none"!==this.maxHeight&&r.push(s.theme({"&":{maxHeight:this.maxHeight},".cm-scroller":{overflow:"auto"}})),this._view=new s({root:this.shadowRoot,state:n.create({doc:i,extensions:r}),parent:t})}getValue(){return this._view?.state.doc.toString()??this.value}setValue(e){if(this.value=e??"",!this._view)return;const t=this._view.state.doc.toString();t!==(e??"")&&this._view.dispatch({changes:{from:0,to:t.length,insert:e??""}})}focus(){this._view?.focus()}render(){return t`
            <div class="header">
                <span class="label">${this.title||this.lang}</span>
            </div>
            <div class="editor-wrap">
                <div id="cm"></div>
            </div>
        `}};customElements.get("web-code")||customElements.define("web-code",u);var m=Object.entries(h).filter(([,e])=>e.data&&e.config).map(([e,t])=>({name:e,data:t.data,config:t.config}));customElements.get("svc-sandbox")||customElements.define("svc-sandbox",class extends e{createRenderRoot(){return this}static properties={ui:{type:String},theme:{type:String},showIntro:{converter:{fromAttribute:e=>null!==e&&"false"!==e}},_error:{state:!0}};constructor(){super(),this.ui="spatial",this.theme="dark",this.showIntro=!0,this._error="",this._debounce=null}get _dataEditor(){return this.querySelector("#svc-data-editor")}get _configEditor(){return this.querySelector("#svc-config-editor")}get _board(){return this.querySelector("#svc-board")}get _select(){return this.querySelector("#svc-preset-select")}connectedCallback(){super.connectedCallback()}firstUpdated(){this._dcInit()}_dcInit(){const e="cardPro",t=m.find(t=>t.name===e)??m[0];if(!t)return;const i=this._select;i&&(i.options=m.map(e=>({value:e.name,label:e.name})),i.value=e),this._dataEditor?.setValue(JSON.stringify(t.data,null,2)),this._configEditor?.setValue(JSON.stringify(t.config,null,2)),this._dfApplyBoard(),this._select?.addEventListener("change",this._dhPresetChange),this._dataEditor?.addEventListener("change",this._dhEditorChange),this._configEditor?.addEventListener("change",this._dhEditorChange)}_dhPresetChange=e=>{const t=m.find(t=>t.name===e.detail?.value);t&&(this._dataEditor?.setValue(JSON.stringify(t.data,null,2)),this._configEditor?.setValue(JSON.stringify(t.config,null,2)),this._dfApplyBoard())};_dhEditorChange=()=>{clearTimeout(this._debounce),this._debounce=setTimeout(()=>this._dfApplyBoard(),700)};_dfApplyBoard(){try{const e=JSON.parse(this._dataEditor?.getValue()||"[]"),t=JSON.parse(this._configEditor?.getValue()||"{}");this._board?.setAttribute("sections",JSON.stringify([{id:"sandbox",data:e,config:t}])),this._error=""}catch(e){this._error="⚠  "+e.message}}_rbIntro(){return t`
            <div class="shrink-0 px-8 pt-12 pb-8 text-center">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-base-200 text-base-content/50 mb-5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                    Component Library
                </span>
                <h2 class="text-4xl font-bold tracking-tight text-base-content leading-tight mb-3">
                    Explore the full<br/>component suite
                </h2>
                <p class="text-base text-base-content/50 max-w-md mx-auto">
                    Live editor — pick a preset, tweak the data and config, and see results instantly in the preview pane.
                </p>
            </div>`}render(){return t`
            ${this.showIntro?this._rbIntro():""}
            <div class="h-full max-h-screen flex flex-col overflow-hidden">
                <div class="flex-1 overflow-hidden min-h-0">
                    <web-split direction="horizontal" size="0.4" style="height:100%; display:block;">

                        <div slot="primary" class="h-full flex flex-col overflow-hidden">
                            <div class="shrink-0 flex items-center gap-2 px-3 py-2 border-b border-base-300/30 bg-base-200/40">
                                <span class="text-[11px] font-mono text-base-content/40 shrink-0">Section</span>
                                <web-select
                                    id="svc-preset-select"
                                    searchable
                                    height="28px"
                                    style="flex:1; min-width:0;"
                                ></web-select>
                            </div>

                            <web-split direction="vertical" size="0.3" style="flex:1; min-height:0; display:block;">
                                <web-code
                                    slot="primary"
                                    id="svc-data-editor"
                                    title="Data"
                                    lang="json"
                                    style="height:100%; margin:0; border-radius:0; border:none;"
                                ></web-code>
                                <web-code
                                    slot="secondary"
                                    id="svc-config-editor"
                                    title="Config"
                                    lang="json"
                                    style="height:100%; margin:0; border-radius:0; border:none;"
                                ></web-code>
                            </web-split>

                            <div
                                class="shrink-0 px-4 py-1.5 text-[11px] font-mono text-red-400 border-t border-red-800/40 truncate"
                                style="background:#2a0a0a;"
                                ?hidden=${!this._error}
                            >${this._error}</div>
                        </div>

                        <div slot="secondary" class="h-full flex flex-col overflow-hidden bg-base-100">
                            <div class="flex-1 overflow-auto p-4">
                                <web-board id="svc-board" unlock=${"ZXhwaXJlZA~MTgxNzA5MDE3OTEyOWshdEBkIw"}></web-board>
                            </div>
                        </div>

                    </web-split>
                </div>
            </div>`}});