import{n as t,o as e,t as o,u as i}from"./lit.PcferLoS.js";import{i as r,o as s}from"./helper.D6LK5q_e.js";var a=/(?:youtube\.com|youtu\.be)/i,c=/vimeo\.com/i,l=/tiktok\.com/i,n=/\.(mp4|webm|ogg|mov)(?:[?#].*)?$/i,h=/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/,d=/vimeo\.com\/(?:video\/)?(\d+)/,m=/tiktok\.com\/.*\/video\/(\d+)/;function u(t){return t?a.test(t)?"youtube":c.test(t)?"vimeo":l.test(t)?"tiktok":n.test(t)?"video":null:null}async function p(t){try{const e=await fetch(t);return e.ok&&(await e.json()).thumbnail_url||""}catch{return""}}var v=Symbol("unset-src"),b=class extends o{static styles=[i(":host{width:100%;display:block;position:relative}:host([fill]){width:100%;height:100%;position:absolute;inset:0}.svc-player-box{width:100%;position:relative;overflow:hidden}:host([fill]) .svc-player-box{width:100%;height:100%;position:absolute;inset:0}.embed-media{object-fit:cover;border:0;width:100%;height:100%;display:block}:host([fill]) iframe.embed-media{aspect-ratio:16/9;width:100%;transform:translate(-50%, -50%) scale(var(--fill-scale,1.6));transform-origin:50%;pointer-events:none;position:absolute;top:50%;left:50%}.facade{cursor:pointer;background:var(--color-base-300,#000);border:none;width:100%;height:100%;padding:0;position:absolute;inset:0}.facade-poster{object-fit:cover;width:100%;height:100%;position:absolute;inset:0}.facade-scrim{background:#00000040;transition:background .2s;position:absolute;inset:0}.facade:hover .facade-scrim{background:#0006}.facade-play{background:var(--color-primary,#2ebd85);width:4rem;height:4rem;color:var(--color-base-content,#fff);cursor:pointer;border:none;border-radius:9999px;justify-content:center;align-items:center;transition:transform .2s;display:flex;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 4px 16px #0000004d}.facade:hover .facade-play{transform:translate(-50%,-50%)scale(1.08)}.facade-play svg{width:2rem;height:2rem}.facade.spatial .facade-play{background:color-mix(in oklab, var(--color-primary,#2ebd85), transparent 15%);backdrop-filter:blur(var(--core-blur,12px))}")];static properties={src:{type:String},poster:{type:String},control:{type:Boolean},autoPlay:{type:Boolean},mute:{type:Boolean},loops:{type:Boolean},ratio:{type:Number},fill:{type:Boolean,reflect:!0},ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},rounded:{type:String},locked:{type:Boolean},_active:{state:!0},_resolvedPoster:{state:!0}};constructor(){super(),this.src="",this.poster="",this.control=!1,this.autoPlay=!1,this.mute=!1,this.loops=!1,this.ratio=16/9,this.fill=!1,this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.rounded="8px",this.locked=!1,this._active=!1,this._resolvedPoster="",this._lastSrc=v}willUpdate(){this.src!==this._lastSrc&&(this._lastSrc=this.src,this._active=!1,this._resolvedPoster="",this._dfResolvePoster(),this.autoPlay&&this._dhActivate())}updated(t){t.has("theme")&&this.theme?this.setAttribute("data-theme",this.theme):t.has("theme")&&!this.theme&&this.removeAttribute("data-theme")}async _dfResolvePoster(){if(this.poster)return;const t=this._comProvider;if(!t)return;const e=this.src,o=await async function(t,e,o){return"youtube"===t?e?`https://img.youtube.com/vi/${e}/hqdefault.jpg`:"":"vimeo"===t?p(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(o)}`):"tiktok"===t?p(`https://www.tiktok.com/oembed?url=${encodeURIComponent(o)}`):""}(t,this._comId,e);this.src===e&&(this._resolvedPoster=o)}_dhSeekPosterFrame(t){const e=t.target;if(!e.dataset.posterSeeked){e.dataset.posterSeeked="1";try{e.currentTime=Math.min(.1,e.duration||.1)}catch{}}}_dhActivate(){this._active||!this._comProvider||this.locked||(this._active=!0,s(this,"played",{provider:this._comProvider,src:this.src}))}get _comProvider(){return u(this.src)}get _comId(){return function(t,e){if(!e)return"";if("youtube"===t){const t=e.match(h);return t?t[1]:""}if("vimeo"===t){const t=e.match(d);return t?t[1]:""}if("tiktok"===t){const t=e.match(m);return t?t[1]:""}return""}(this._comProvider,this.src)}get _comPoster(){return this.poster||this._resolvedPoster}get _comBoxStyle(){return r({aspectRatio:this.fill?"":this.ratio||16/9,borderRadius:this.rounded||"8px","--color-primary":this.mainColors?(this.mainColors.split("|")[0]||"").trim():"",color:this.textColor||""})}render(){const o=this._comProvider;return o?e`
            <div class="svc-player-box" style="${this._comBoxStyle}">
                ${this._active?this._rbActive(o):this._rbFacade()}
            </div>`:t}_rbFacade(){const o=this._comPoster,i=!o&&"video"===this._comProvider;return e`
            <button
                type="button"
                class="facade ${"spatial"===this.ui?"spatial":""}"
                aria-label="Play video"
                @click=${this._dhActivate}
            >
                ${o?e`<img class="facade-poster" src="${o}" alt="" />`:t}
                ${i?e`
                    <video
                        class="facade-poster"
                        src="${this.src}"
                        preload="metadata"
                        muted
                        playsinline
                        @loadedmetadata=${this._dhSeekPosterFrame}
                    ></video>`:t}
                <div class="facade-scrim"></div>
                ${this.locked?t:e`
                    <div class="facade-play">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>`}
            </button>`}_rbActive(t){return"video"===t?this._rbVideo():this._rbIframe(t)}_rbVideo(){return e`
            <!-- Both attribute and property binding: browsers check the live 'muted' property (not just the attribute) when enforcing the autoplay-requires-muted policy. -->
            <video
                class="embed-media"
                src="${this.src}"
                ?controls=${this.control}
                autoplay
                ?muted=${this.mute}
                .muted=${this.mute}
                ?loop=${this.loops}
                playsinline
            ></video>`}_rbIframe(o){const i=function(t,e,{autoPlay:o=!1,mute:i=!1,loops:r=!1,control:s=!1}={}){const a=t=>t?"1":"0";return e?"youtube"===t?`https://www.youtube-nocookie.com/embed/${e}?${new URLSearchParams({autoplay:a(o),mute:a(i),loop:a(r),controls:a(s),playlist:e}).toString()}`:"vimeo"===t?`https://player.vimeo.com/video/${e}?${new URLSearchParams({autoplay:a(o),muted:a(i),loop:a(r),controls:a(s)}).toString()}`:"tiktok"===t?`https://www.tiktok.com/embed/v2/${e}?${new URLSearchParams({autoplay:a(o)}).toString()}`:"":""}(o,this._comId,{autoPlay:!0,mute:this.mute,loops:this.loops,control:this.control});return i?e`
            <iframe
                class="embed-media"
                src="${i}"
                title="${o} video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
            ></iframe>`:t}};customElements.get("svc-player")||customElements.define("svc-player",b);export{u as t};