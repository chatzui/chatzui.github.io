import{n as i}from"./rolldown-runtime.Bpd4S2KM.js";import{a as e,l as t,n as s,t as n}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import{r as o}from"./crud.BkMWeHG6.js";import{a,i as r}from"./lingo.DeJvicYs.js";import{t as l}from"./keyed.shnHa4Bw.js";import{l as d,t as c,u as p}from"./service.sSgTDzwg.js";import{t as h}from"./server.CcQFWJi8.js";import{a as v,i as u,s as m,t as b}from"./hub.CSyoWhzs.js";import{s as f,t as _}from"./sectors.CrpvWC3a.js";import{a as g,i as w,n as y,r as k}from"./command.BBDam8WT.js";var $=i({SvcDivision:()=>O,default:()=>O}),x=o("know","",h),S=["product","law","faq","medical","technical","finance","post","other"],P=new Set(["know","info","hub"]),T=i=>String(i||"").split(",").map(i=>i.trim()).filter(Boolean),C={vi:{title:"Quản lý phòng ban",back:"Quay lại",statKnow:"Kiến thức",statSteps:"Bước",statPrinciples:"Nguyên tắc",statTypes:"Loại",groupFunction:"Chức năng",groupKnow:"Kiến thức",groupInfo:"Thông tin",persona:"Vai trò & nguyên tắc",pipeline:"Quy trình xử lý",pipelineSub:"{n} bước · xuất ra {table}",status:"Đang hoạt động",statusSub:"Tắt để tạm dừng phòng ban",active:"Hoạt động",inactive:"Tạm dừng",knowBase:"Kho kiến thức",info:"Tên & mô tả",readOnly:"Chế độ xem — cần tài khoản quản trị để chỉnh sửa.",role:"Vai trò",rolePh:"Mô tả vai trò của trợ lý…",principles:"Nguyên tắc",principlePh:"Một nguyên tắc…",addPrinciple:"Thêm nguyên tắc",remove:"Xoá",steps:"Các bước",calls:"{n} lượt gọi AI",stepImage:"Tạo ảnh",output:"Đầu ra",outputTable:"Bảng",outputStatus:"Trạng thái bản ghi",requiresProduct:"Chờ phòng Sản phẩm",stepsNote:"Các bước là chuyên môn của hệ thống — chỉ xem ở đây.",personaPrivate:"Vai trò & nguyên tắc là chuyên môn riêng — chỉ quản trị viên xem và sửa.",pipelineSignIn:"Đăng nhập để xem các bước",search:"Tìm kiến thức…",addKnow:"Thêm kiến thức",emptyKnow:"Chưa có kiến thức nào.",hubRow:"Nạp từ API & MCP",hubRowSub:"Đường dẫn API, loại · token MCP cho AI khác",ownerOf:"Kiến thức của owner: {owner}",ownerShared:"kiến thức chung",signIn:"Đăng nhập tài khoản đã mua gói để nạp kiến thức.",noHub:"Chưa có hub — mua gói xong token MCP sẽ được gửi qua email. Đã mua rồi thì bấm Kích hoạt.",activate:"Kích hoạt MCP",rotate:"Cấp lại token",plan:"Gói",token:"Token",emailTo:"Email",hubActive:"Đang hoạt động",hubExpired:"Hết hạn",emailSent:"đã gửi {at}",emailFail:"chưa gửi được ({err})",tokenOnce:"Token chỉ hiện 1 lần — lưu lại ngay.",tokenMailed:"Đã gửi token tới {email}.",copy:"Chép",copied:"Đã chép",mcpUrl:"MCP endpoint",embedHint:'Nhúng trợ lý dùng kiến thức này: <svc-aide owner="{owner}">',groupSites:"Site được nhúng",sitesLabel:"Tên miền — mỗi dòng 1 site",sitesHint:"Chỉ các site này chạy được trợ lý của hub (localhost luôn chạy được để thử). Để trống = mọi site.",sitesOpen:"Chưa giới hạn site — ai copy đoạn nhúng cũng chạy được trợ lý và đọc kiến thức này trên site của họ. Thêm tên miền của bạn.",sitesExpired:"Gói đã hết hạn — trợ lý nhúng đang ẩn trên mọi site. Gia hạn là tự bật lại.",sitesOff:"Đã tắt nhúng — trợ lý không chạy trên site nào.",groupImport:"Nạp từ API",apiUrl:"Đường dẫn API (JSON)",apiUrlPh:"https://api.example.com/products",advanced:"Tuỳ chọn map field (để trống = tự đoán)",itemsPath:"Đường dẫn mảng (vd data.items)",titleField:"Field tiêu đề",descField:"Field nội dung (cách nhau dấu phẩy)",idField:"Field id",tagsField:"Field tags",preview:"Xem trước",runImport:"Nạp dữ liệu",previewOf:"Tìm thấy {n} mục",mapping:'Map: mảng "{path}" · tiêu đề "{title}" · id "{id}"',imported:"Đã nạp: {created} mới, {updated} cập nhật, {indexed} đã index, {related} liên kết",skipped:"{n} mục bỏ qua (thuộc owner khác)",groupSources:"Nguồn đã lưu",rerun:"Nạp lại",removeSource:"Bỏ nguồn",items:"{n} mục",reindex:"Lập chỉ mục tìm kiếm",reindexSub:"{n} mục chưa được lập chỉ mục",reindexDone:"Chỉ mục đã đầy đủ",reindexing:"Đang lập chỉ mục… còn {n}",knowNew:"Kiến thức mới",knowEdit:"Kiến thức",type:"Loại",name:"Tiêu đề",content:"Nội dung",scope:"Dùng cho",scopeFn:"Riêng phòng này",scopeSector:"Cả ngành",scopeAll:"Mọi ngành",scopeKeep:"Phòng khác (giữ nguyên)",knowActive:"Đang dùng",knowDraft:"Nháp",publish:"Đang dùng cho trợ lý",publishSub:"Tắt = lưu nháp, trợ lý không tìm thấy",titleLabel:"Tên phòng ban",description:"Mô tả",save:"Lưu",delete:"Xoá kiến thức",saved:"Đã lưu",deleted:"Đã xoá",errSave:"Không lưu được, thử lại nhé",errLoad:"Không tải được dữ liệu"},en:{title:"Division",back:"Back",statKnow:"Knowledge",statSteps:"Steps",statPrinciples:"Principles",statTypes:"Types",groupFunction:"Functions",groupKnow:"Knowledge",groupInfo:"Details",persona:"Role & principles",pipeline:"Pipeline",pipelineSub:"{n} steps · outputs to {table}",status:"Active",statusSub:"Turn off to pause this division",active:"Active",inactive:"Paused",knowBase:"Knowledge base",info:"Name & description",readOnly:"View only — an admin account is needed to edit.",role:"Role",rolePh:"Describe the assistant's role…",principles:"Principles",principlePh:"A principle…",addPrinciple:"Add principle",remove:"Remove",steps:"Steps",calls:"{n} AI calls",stepImage:"Image",output:"Output",outputTable:"Table",outputStatus:"Record status",requiresProduct:"Waits for the Product department",stepsNote:"Steps are system expertise — view only here.",personaPrivate:"Role & principles are private expertise — only an admin can view and edit them.",pipelineSignIn:"Sign in to see the steps",search:"Search knowledge…",addKnow:"Add knowledge",emptyKnow:"No knowledge yet.",hubRow:"Import from API & MCP",hubRowSub:"API URL, type · MCP token for other AI agents",ownerOf:"Knowledge of owner: {owner}",ownerShared:"shared knowledge",signIn:"Sign in with the account that bought a plan to load knowledge.",noHub:"No hub yet — your MCP token is emailed after buying a plan. Already bought? Press Activate.",activate:"Activate MCP",rotate:"Reissue token",plan:"Plan",token:"Token",emailTo:"Email",hubActive:"Active",hubExpired:"Expired",emailSent:"sent {at}",emailFail:"not sent ({err})",tokenOnce:"This token is shown once — save it now.",tokenMailed:"Token emailed to {email}.",copy:"Copy",copied:"Copied",mcpUrl:"MCP endpoint",embedHint:'Embed an assistant on this knowledge: <svc-aide owner="{owner}">',groupSites:"Embed sites",sitesLabel:"Domains — one site per line",sitesHint:"Only these sites can run this hub's assistant (localhost always can, for testing). Empty = every site.",sitesOpen:"No sites set — anyone who copies the embed tag can run the assistant and read this knowledge on their own site. Add your domain.",sitesExpired:"The plan has lapsed — the embedded assistant is hidden on every site. Renewing switches it back on.",sitesOff:"Embedding is off — the assistant runs on no site.",groupImport:"Import from API",apiUrl:"API URL (JSON)",apiUrlPh:"https://api.example.com/products",advanced:"Field mapping (blank = guessed)",itemsPath:"Array path (e.g. data.items)",titleField:"Title field",descField:"Content fields (comma separated)",idField:"Id field",tagsField:"Tags field",preview:"Preview",runImport:"Import",previewOf:"Found {n} items",mapping:'Mapping: array "{path}" · title "{title}" · id "{id}"',imported:"Imported: {created} new, {updated} updated, {indexed} indexed, {related} links",skipped:"{n} skipped (owned by someone else)",groupSources:"Saved sources",rerun:"Import again",removeSource:"Remove source",items:"{n} items",reindex:"Build search index",reindexSub:"{n} items not indexed yet",reindexDone:"Index is complete",reindexing:"Indexing… {n} left",knowNew:"New knowledge",knowEdit:"Knowledge",type:"Type",name:"Title",content:"Content",scope:"Used by",scopeFn:"This department only",scopeSector:"The whole sector",scopeAll:"Every sector",scopeKeep:"Another department (kept)",knowActive:"In use",knowDraft:"Draft",publish:"Used by the assistant",publishSub:"Off = saved as draft, not searchable",titleLabel:"Division name",description:"Description",save:"Save",delete:"Delete knowledge",saved:"Saved",deleted:"Deleted",errSave:"Couldn't save, please try again",errLoad:"Couldn't load data"}},I=(i,e)=>i.replace(/\{(\w+)\}/g,(i,t)=>e[t]??""),O=class extends n{static styles=[t(':host{--dv-surface:color-mix(in oklab, var(--color-base-content) 4%, transparent);--dv-surface-hover:color-mix(in oklab, var(--color-base-content) 7%, transparent);--dv-line:color-mix(in oklab, var(--color-base-content) 10%, transparent);--dv-muted:color-mix(in oklab, var(--color-base-content) 58%, transparent);--dv-radius:18px;width:100%;display:block}*{box-sizing:border-box}button{font:inherit;color:inherit}button:disabled{cursor:default;opacity:.6}.dv{color:var(--color-base-content);font-family:var(--font-sans,system-ui, sans-serif);padding:.75rem .9rem 1rem}.dv-view{flex-direction:column;gap:.6rem;animation:.22s ease-out dv-in;display:flex}@keyframes dv-in{0%{opacity:0;transform:translate(10px)}}.dv-top{align-items:center;gap:.75rem;display:flex}.dv-top .dv-h1{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;margin:0;overflow:hidden}.dv-h1{letter-spacing:-.01em;margin:.25rem 0 .5rem;font-size:1.5rem;font-weight:700}.dv-hero{align-items:center;gap:1rem;margin:.4rem 0;display:flex}.dv-hero-text{flex-direction:column;align-items:flex-start;gap:.3rem;min-width:0;display:flex}.dv-name{text-overflow:ellipsis;white-space:nowrap;max-width:100%;font-size:1.35rem;font-weight:600;line-height:1.2;overflow:hidden}.dv-desc{-webkit-line-clamp:2;color:var(--dv-muted);-webkit-box-orient:vertical;font-size:.85rem;display:-webkit-box;overflow:hidden}.dv-avatar{object-fit:cover;background:color-mix(in oklab, var(--color-info) 22%, var(--color-base-100));border-radius:50%;flex-shrink:0;place-items:center;width:76px;height:76px;font-size:2rem;display:grid}.dv-stats{grid-template-columns:repeat(3,1fr);gap:.5rem;margin-bottom:.4rem;display:grid}.dv-stat{border-radius:var(--dv-radius);background:var(--dv-surface);flex-direction:column;align-items:center;gap:.2rem;min-width:0;padding:.85rem .4rem;display:flex}.dv-stat b{font-size:1.15rem;font-weight:600}.dv-stat span{color:var(--dv-muted);font-size:.82rem}.dv-group-title{color:var(--dv-muted);margin-top:.5rem;font-size:.8rem}.dv-row{border-radius:var(--dv-radius);background:var(--dv-surface);text-align:left;cursor:pointer;border:0;align-items:center;gap:.8rem;width:100%;min-height:54px;padding:.6rem 1rem;transition:background .15s;display:flex}.dv-row:hover:not(:disabled),.dv-item-btn:hover{background:var(--dv-surface-hover)}.dv-row:focus-visible,.dv-btn:focus-visible,.dv-back:focus-visible,.dv-item-btn:focus-visible,.dv-chip-btn:focus-visible{outline:2px solid var(--color-primary);outline-offset:2px}.dv-row-icon{flex-shrink:0;font-size:1.25rem}.dv-row-text{flex-direction:column;flex:1;min-width:0;display:flex}.dv-row-label{font-size:.98rem}.dv-row-sub{color:var(--dv-muted);text-overflow:ellipsis;white-space:nowrap;margin-top:.1rem;font-size:.78rem;overflow:hidden}.dv-row-value{max-width:40%;color:var(--dv-muted);text-overflow:ellipsis;white-space:nowrap;font-size:.85rem;overflow:hidden}.dv-row-chev{color:var(--dv-muted);flex-shrink:0;font-size:1.2rem}.dv-switch{background:color-mix(in oklab, var(--color-base-content) 14%, transparent);border-radius:999px;flex-shrink:0;width:46px;height:27px;transition:background .2s;position:relative}.dv-switch:after{content:"";background:#fff;border-radius:50%;width:21px;height:21px;transition:transform .2s;position:absolute;top:3px;left:3px;box-shadow:0 1px 3px #00000040}.dv-switch.is-on{background:var(--color-primary)}.dv-switch.is-on:after{transform:translate(19px)}.dv-back{background:var(--dv-surface);cursor:pointer;border:0;border-radius:50%;flex-shrink:0;place-items:center;width:42px;height:42px;padding:0;font-size:1.35rem;display:grid}.dv-back:hover{background:var(--dv-surface-hover)}.dv-card{border-radius:var(--dv-radius);background:var(--dv-surface);align-items:center;gap:.8rem;padding:.8rem 1rem;font-size:.92rem;display:flex}.dv-list{flex-direction:column;align-items:stretch;gap:0;padding:.2rem 1rem}.dv-list:has(.dv-item-btn){padding:.2rem 0;overflow:hidden}.dv-item{border-bottom:1px solid var(--dv-line);align-items:center;gap:.8rem;padding:.65rem 0;display:flex}.dv-item:last-child{border-bottom:0}.dv-item-btn{text-align:left;cursor:pointer;background:0 0;border-top:0;border-left:0;border-right:0;width:100%;padding:.7rem 1rem;transition:background .15s}.dv-item-text{flex-direction:column;flex:1;min-width:0;display:flex}.dv-index{background:var(--dv-surface-hover);border-radius:50%;flex-shrink:0;place-items:center;width:26px;height:26px;font-size:.78rem;font-weight:600;display:grid}.dv-strong{font-weight:600}.dv-muted{color:var(--dv-muted);font-size:.8rem}.dv-ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.dv-note{color:var(--dv-muted);font-size:.8rem}.dv-mcp{align-items:flex-start}.dv-mcp .dv-item-text{gap:.25rem}.dv-code{background:var(--dv-surface-hover);word-break:break-all;user-select:all;border-radius:10px;margin-top:.2rem;padding:.35rem .6rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.78rem}.dv-empty{color:var(--dv-muted);place-items:center;padding:2rem 0;font-size:.85rem;display:grid}.dv-chips{flex-wrap:wrap;gap:.4rem;display:flex}.dv-chips-lg{gap:.5rem}.dv-chip{background:var(--dv-surface-hover);border:0;border-radius:999px;flex-shrink:0;padding:.25rem .65rem;font-size:.78rem}.dv-chip.is-ok{color:var(--color-success);background:color-mix(in oklab, var(--color-success) 14%, transparent)}.dv-chip.is-draft{color:var(--color-warning);background:color-mix(in oklab, var(--color-warning) 14%, transparent)}.dv-chip-btn{cursor:pointer;padding:.45rem .9rem;font-size:.88rem;transition:background .15s,color .15s}.dv-chip-btn.is-on{background:var(--color-primary);color:var(--color-base-content)}.dv-form{flex-direction:column;gap:.9rem;display:flex}.dv-label{flex-direction:column;gap:.4rem;font-size:.85rem;display:flex}.dv-field{border-radius:var(--dv-radius);border:1px solid var(--dv-line);background:color-mix(in oklab, var(--color-base-100) 70%, transparent);align-items:center;gap:.7rem;height:54px;padding:0 1rem;font-size:1rem;transition:border-color .15s,box-shadow .15s;display:flex}.dv-field:focus-within,.dv-area:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px color-mix(in oklab, var(--color-primary) 18%, transparent)}.dv-field>iconify-icon{flex-shrink:0;font-size:1.25rem}.dv-field input,.dv-field select{min-width:0;height:100%;font:inherit;color:inherit;background:0 0;border:0;outline:none;flex:1}.dv-field select option{background:var(--color-base-100);color:var(--color-base-content)}.dv-field input::placeholder,.dv-area::placeholder{color:var(--dv-muted)}.dv-area{border-radius:var(--dv-radius);border:1px solid var(--dv-line);background:color-mix(in oklab, var(--color-base-100) 70%, transparent);width:100%;font:inherit;color:inherit;resize:vertical;outline:none;padding:.8rem 1rem;font-size:.95rem;line-height:1.45;transition:border-color .15s,box-shadow .15s}.dv-area[readonly],.dv-field:has(input[readonly]){background:var(--dv-surface)}.dv-principle{align-items:flex-start;gap:.6rem;display:flex}.dv-principle .dv-index{margin-top:.7rem}.dv-icon-btn{width:36px;height:36px;color:var(--dv-muted);cursor:pointer;background:0 0;border:0;border-radius:50%;flex-shrink:0;place-items:center;margin-top:.4rem;padding:0;font-size:1.2rem;display:grid}.dv-icon-btn:hover{background:var(--dv-surface-hover);color:var(--color-error)}.dv-btn{border:1px solid var(--dv-line);background:var(--color-base-100);cursor:pointer;border-radius:999px;justify-content:center;align-items:center;gap:.5rem;width:100%;height:50px;font-size:.98rem;transition:background .15s;display:flex}.dv-btn:hover:not(:disabled){background:var(--dv-surface-hover)}.dv-btn-main{margin-top:.75rem}.dv-link{color:var(--dv-muted);cursor:pointer;background:0 0;border:0;align-self:flex-start;align-items:center;gap:.4rem;padding:.2rem 0;font-size:.85rem;display:inline-flex}.dv-link:hover:not(:disabled){color:var(--color-base-content)}.dv-danger{color:var(--color-error);align-self:center;margin-top:.4rem}.dv-danger:hover:not(:disabled){color:var(--color-error);text-decoration:underline}.dv-notice{color:var(--dv-muted);background:var(--dv-surface);border-radius:12px;padding:.6rem .85rem;font-size:.85rem}.dv-notice.is-ok{color:var(--color-success);background:color-mix(in oklab, var(--color-success) 12%, transparent)}.dv-notice.is-err{color:var(--color-error);background:color-mix(in oklab, var(--color-error) 12%, transparent)}.dv-spin{animation:.8s linear infinite dv-spin}@keyframes dv-spin{to{transform:rotate(360deg)}}@media (prefers-reduced-motion:reduce){.dv-view,.dv-spin{animation:none}}.dv-mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.88rem}.dv-details{border-radius:var(--dv-radius);background:var(--dv-surface);flex-direction:column;gap:.6rem;padding:.7rem 1rem;font-size:.85rem;display:flex}.dv-details[open]>summary{margin-bottom:.6rem}.dv-details summary{cursor:pointer;color:var(--dv-muted)}.dv-details .dv-label+.dv-label{margin-top:.6rem}.dv-actions{grid-template-columns:1fr 1fr;gap:.6rem;margin-top:.4rem;display:grid}.dv-actions .dv-btn{margin:0}.dv-btn-primary{background:var(--color-primary);color:var(--color-base-100);border-color:#0000}.dv-btn-primary:hover:not(:disabled){background:color-mix(in oklab, var(--color-primary) 85%, var(--color-base-content))}')];static properties={ui:{type:String},theme:{type:String},lang:{type:String},txt:{type:Object},division:{type:String},value:{attribute:!1},closable:{type:Boolean},owner:{type:String},site:{type:String},_owner:{state:!0},_div:{state:!0},_outline:{state:!0},_override:{state:!0},_knows:{state:!0},_view:{state:!0},_form:{state:!0},_query:{state:!0},_busy:{state:!0},_notice:{state:!0},_can:{state:!0},_hub:{state:!0},_issued:{state:!0},_result:{state:!0},_sitesDraft:{state:!0}};constructor(){super(),this.ui="pastel",this.theme="dark",this.lang="vi",this.txt=null,this.division="ecommerce.consult",this.value=null,this.closable=!1,this.owner="",this.site="",this._owner="",this._div=null,this._outline=null,this._override=null,this._knows=null,this._view="home",this._form=null,this._query="",this._busy=!1,this._notice=null,this._can={division:!1,know:!1},this._hub=null,this._issued=null,this._result=null,this._sitesDraft=null,this._dcPerms=this._dcPerms.bind(this),this._dcHub=this._dcHub.bind(this),this._dcOwner=this._dcOwner.bind(this)}connectedCallback(){super.connectedCallback(),this._dcPerms(),window.addEventListener("login-success",this._dcPerms),window.addEventListener("hub-change",this._dcHub),this._offOwner=u(this._dcOwner)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("login-success",this._dcPerms),window.removeEventListener("hub-change",this._dcHub),this._offOwner?.()}willUpdate(i){(i.has("division")||i.has("value")&&this.value&&this.value.id!==this._div?.id)&&this._dcLoad(),(i.has("owner")||i.has("site"))&&this._dcOwner(),i.has("site")&&void 0!==i.get("site")&&this._dcKnows()}async _dcPerms(){const i=await c.get(),e="active"===i?.status,{roles:t,isAdmin:s}=p(i);this._can={division:e&&s,know:e&&(s||d(t,"know"))},this._can.division&&this._div&&!this._override&&this._dcOverride(this._div.id),this._div&&this._dcKnows()}async _dcOwner(){const i=this.owner,e=this.site,t=await v(i,e);i===this.owner&&e===this.site&&t!==this._owner&&(this._owner=t,this._div&&this._dcKnows(),"hub"===this._view&&this._dcHub())}async _dcLoad(){const i=y(this.division);this._view="home",this._knows=null,this._outline=null,this._override=null,this._div=this.value?.id===i&&this.value.kind?this.value:await this._dcFace(i),"pipeline"===this._div.kind&&f.spec(i).then(e=>{e.ok&&this._div?.id===i&&(this._outline=e.data)}),this._can.division&&this._dcOverride(i),this._dcKnows()}async _dcFace(i){const e=await f.sectors(await v(this.owner,this.site)),t=e.ok?g(e.data,i):null;return t||this._flash("err",this._txt.errLoad),{id:i,kind:t?.kind??"",title:t?w(t,this.lang):i,description:t?k(t,this.lang):"",pics:t?.pics||"",status:t?.status||"active"}}async _dcOverride(i){const e=await f.override(i,this._siteOwner);if(this._div?.id===i&&(this._override=e.ok?e.data:{error:e.message},"function"===this._view&&"pipeline"!==this._div?.kind&&!this._form&&e.ok)){const i=this._personaNow??{role:"",principles:[]};this._form={role:i.role||"",principles:[...i.principles||[]]}}}async _dcKnows(){const i=this._owner,e={sortBy:"updated_at",order:"desc",filters:{owner:i||"@shared"}};try{const t=(await x.findAll(e)).filter(e=>(e.owner??"")===i&&(this._can.know||"active"===e.status));this._knows=t.slice(0,200)}catch(t){console.error("[llm/svc-division] know load failed:",t?.message??t),this._knows=[]}}_go(i,e=null){this._view=i,this._form=e,this._notice=null}_set(i,e){this._form={...this._form,[i]:e}}_openFunction(){if(!this._override||this._override.error)return void this._go("function");const i=this._personaNow??{role:"",principles:[]};this._go("function",{role:i.role||"",principles:[...i.principles||[]]})}_openKnow(i){this._go("know",i?{id:i.id,type:i.type,title:i.title,description:i.description,status:i.status,version:i.version,sector:i.sector??"",fn:i.fn??""}:{type:"faq",title:"",description:"",status:"active",...this._scopes().fn,...this._selfDefaults()})}_openHub(){this._go("hub",{url:"",type:"product",itemsPath:"",title:"",description:"",id:"",tags:"",...this._scopes().fn,...this._selfDefaults()}),this._result=null,this._dcHub()}_setPrinciple(i,e){const t=[...this._form.principles];t[i]=e,this._set("principles",t)}async _dfSaveDivision(i={},e=null,t="home"){if(this._can.division&&!this._busy){this._busy=!0;try{const s={division:this._div.id,owner:this._siteOwner,face:i};e&&(s.patch={...this._override?.patch??{},...e});const n=await f.saveOverride(s);if(!n.ok)throw new Error(n.message);this._div={...this._div,...i},e&&(this._override={...this._override,patch:s.patch,persona:{...this._override?.persona??{},...e}}),f.forgetSectors(),this.dispatchEvent(new CustomEvent("division-change",{detail:{division:this._div},bubbles:!0,composed:!0})),this._go(t),this._flash("ok",this._txt.saved)}catch(s){console.error("[llm/svc-division] save failed:",s?.message??s),this._flash("err",this._txt.errSave)}finally{this._busy=!1}}}_dfSaveFunction(){const i=this._form.principles.map(i=>i.trim()).filter(Boolean);this._dfSaveDivision({},{role:this._form.role.trim(),principles:i})}async _dfSaveKnow(){const i=this._form;if(this._can.know&&!this._busy&&i.title.trim()){this._busy=!0;try{const e=(new Date).toISOString(),t={type:i.type.trim()||"other",title:i.title.trim(),description:i.description.trim(),status:i.status,sector:i.sector??"",fn:i.fn??"",updated_at:e};i.id?await x.update(i.id,{...t,version:(Number(i.version)||1)+1}):await x.create({...t,meta:{tags:[]},version:1,owner:this._owner,source:"",created_at:e,deleted_at:null}),await this._dcKnows(),this._go("knowledge"),this._flash("ok",this._txt.saved)}catch(e){console.error("[llm/svc-division] know save failed:",e?.message??e),this._flash("err",this._txt.errSave)}finally{this._busy=!1}}}async _dfDeleteKnow(){if(this._can.know&&!this._busy&&this._form?.id){this._busy=!0;try{await x.delete(this._form.id),this._knows=this._knows.filter(i=>i.id!==this._form.id),this._go("knowledge"),this._flash("ok",this._txt.deleted)}catch(i){console.error("[llm/svc-division] know delete failed:",i?.message??i),this._flash("err",this._txt.errSave)}finally{this._busy=!1}}}async _dcHub(){const i=await b.me(this._owner);this._hub=i.ok?i.data:{error:401===i.statusCode?"auth":i.message},this._sitesDraft=null}async _dfIssue(i){if(this._busy)return;this._busy=!0,this._issued=null;const e=await b.issue(i);if(this._busy=!1,!e.ok)return this._flash("err",e.message);const t=e.data.hub?.email;this._issued=e.data.token?{token:e.data.token,emailed:e.data.emailed,email:t}:null,await this._dcHub()}async _dfImport(i,e=null){const t=e?{url:e.url,type:e.type,owner:e.owner,itemsPath:e.itemsPath,fields:e.fields,sector:e.sector??"",fn:e.fn??""}:{url:this._form.url.trim(),type:this._form.type.trim(),owner:this._owner,sector:this._form.sector??"",fn:this._form.fn??"",itemsPath:this._form.itemsPath.trim()||void 0,fields:{title:this._form.title.trim()||void 0,description:T(this._form.description).length?T(this._form.description):void 0,id:this._form.id.trim()||void 0,tags:this._form.tags.trim()||void 0}};if(!t.url||!t.type||this._busy)return;this._busy=!0,this._result=null,this._notice=null;const s=await b.importApi({...t,dryRun:i});if(this._busy=!1,!s.ok)return this._flash("err",s.message);this._result=s.data,i||(this._hub?.hub&&s.data.sources&&(this._hub={...this._hub,hub:{...this._hub.hub,sources:s.data.sources}}),(s.data.owner??"")===this._owner&&this._dcKnows())}async _dfReindex(){if(this._busy)return;this._busy=!0,this._notice=null;const i=this._owner;try{for(let e=0;e<200;e++){const e=await b.reindex({owner:i});if(!e.ok)return this._flash("err",e.message);if(i===this._owner&&(this._hub={...this._hub,pending:e.data.remaining}),!e.data.remaining||!e.data.processed)break;this._flash("ok",I(this._txt.reindexing,{n:e.data.remaining}))}this._flash("ok",this._txt.reindexDone),this._dcKnows()}finally{this._busy=!1}}async _dfSaveSites(){if(!this._busy&&null!==this._sitesDraft){this._busy=!0;try{const i=this._sitesDraft.split(/[\s,]+/).map(i=>i.trim()).filter(Boolean),e=await b.setDomains({owner:this._owner,domains:i});if(!e.ok)return this._flash("err",e.message);this._hub={...this._hub,managed:{...this._hub.managed,domains:e.data.domains}},this._sitesDraft=null,this._flash("ok",this._txt.saved)}finally{this._busy=!1}}}async _dfRemoveSource(i){const e=await b.removeSource(i);if(!e.ok)return this._flash("err",e.message);this._hub={...this._hub,hub:{...this._hub.hub,sources:e.data.sources}}}async _copy(i){try{await navigator.clipboard.writeText(i),this._flash("ok",this._txt.copied)}catch{}}_flash(i,e){this._notice={type:i,text:e}}get _txt(){return a(this.txt,C,this.lang)}get _steps(){return this._outline?.steps??[]}get _personaNow(){return this._override?.persona??null}_label(i,e=""){return r(i,this.lang)??e}get _filteredKnows(){const i=this._query.trim().toLowerCase(),e=this._knows??[];return i?e.filter(e=>`${e.title} ${e.description}`.toLowerCase().includes(i)):e}_switch(i,t){return e`<span class="dv-switch ${i?"is-on":""}" role="switch" aria-checked=${i?"true":"false"} aria-label=${t}></span>`}_row({icon:i,label:t,sub:n,value:o,onClick:a,trail:r="chevron",disabled:l=!1}){return e`
            <button class="dv-row" type="button" ?disabled=${l} @click=${a}>
                <iconify-icon class="dv-row-icon" icon=${i}></iconify-icon>
                <span class="dv-row-text">
                    <span class="dv-row-label">${t}</span>
                    ${n?e`<span class="dv-row-sub">${n}</span>`:s}
                </span>
                ${null!=o&&""!==o?e`<span class="dv-row-value">${o}</span>`:s}
                ${"chevron"===r?e`<iconify-icon class="dv-row-chev" icon="ri:arrow-right-s-line"></iconify-icon>`:r}
            </button>
        `}_subHead(i,t="home"){return e`
            <div class="dv-top">
                <button class="dv-back" type="button" aria-label=${this._txt.back} @click=${()=>this._go(t)}>
                    <iconify-icon icon="ri:arrow-left-s-line"></iconify-icon>
                </button>
                <h2 class="dv-h1" title=${i}>${i}</h2>
            </div>
        `}_sitesTpl(i){const t=this._txt,n=i.managed;if(!n)return s;const o=n.active?n.embed?n.domains.length?"":t.sitesOpen:t.sitesOff:t.sitesExpired;return e`
            <div class="dv-group-title">${t.groupSites}</div>
            ${o?e`<div class="dv-notice is-err">${o}</div>`:s}
            <div class="dv-form">
                <label class="dv-label">${t.sitesLabel}
                    <textarea class="dv-area" rows="3" placeholder=${"shop.com\nblog.shop.com"} .value=${this._sitesDraft??n.domains.join("\n")}
                        @input=${i=>this._sitesDraft=i.target.value}></textarea>
                </label>
                <div class="dv-note">${t.sitesHint}</div>
            </div>
            ${this._saveBtn(()=>this._dfSaveSites(),null===this._sitesDraft)}
        `}_saveBtn(i,t=!1){return e`
            <button class="dv-btn dv-btn-main" type="button" ?disabled=${this._busy||t} @click=${i}>
                ${this._busy?e`<iconify-icon class="dv-spin" icon="ri:loader-4-line"></iconify-icon>`:s}${this._txt.save}
            </button>
        `}_noticeTpl(){const i=this._notice;return i?e`<div class="dv-notice is-${i.type}" role=${"err"===i.type?"alert":"status"}>${i.text}</div>`:s}_readOnlyTpl(i){return i?s:e`<div class="dv-notice">${this._txt.readOnly}</div>`}_avatar(){const i=this._div;return i.pics?e`<img class="dv-avatar" src=${i.pics} alt="" />`:e`<span class="dv-avatar"><iconify-icon icon=${"pipeline"===i.kind?"ri:building-2-line":_}></iconify-icon></span>`}_home(){const i=this._txt,t=this._div,n=this._personaNow,o=this._steps,a="pipeline"===t.kind,r="inactive"!==t.status,l=[[this._knows?.length??"–",i.statKnow],a?[o.length||"–",i.statSteps]:[n?n.principles.length:"–",i.statPrinciples],[this._knows?new Set(this._knows.map(i=>i.type)).size:"–",i.statTypes]];return e`
            <div class="dv-top">
                ${this.closable?e`
                    <button class="dv-back" type="button" aria-label=${i.back}
                        @click=${()=>this.dispatchEvent(new CustomEvent("division-close",{bubbles:!0,composed:!0}))}>
                        <iconify-icon icon="ri:arrow-left-s-line"></iconify-icon>
                    </button>`:s}
                <h2 class="dv-h1">${i.title}</h2>
            </div>
            <div class="dv-hero">
                ${this._avatar()}
                <div class="dv-hero-text">
                    <div class="dv-name">${t.title||t.id}</div>
                    ${t.description?e`<div class="dv-desc">${t.description}</div>`:s}
                    <span class="dv-chip ${r?"is-ok":""}">${r?i.active:i.inactive}</span>
                </div>
            </div>
            <div class="dv-stats">${l.map(([i,t])=>e`<div class="dv-stat"><b>${i}</b><span>${t}</span></div>`)}</div>

            <div class="dv-group-title">${i.groupFunction}</div>
            ${a?this._row({icon:"ri:flow-chart",label:i.pipeline,sub:this._outline?I(i.pipelineSub,{n:o.length,table:this._outline.output?.table||"—"}):i.pipelineSignIn,onClick:()=>this._go("function")}):this._row({icon:"ri:user-voice-line",label:i.persona,sub:n?.role||i.personaPrivate,onClick:()=>this._openFunction()})}
            ${this._row({icon:"ri:pulse-line",label:i.status,sub:i.statusSub,disabled:!this._can.division||this._busy,onClick:()=>this._dfSaveDivision({status:r?"inactive":"active"}),trail:this._switch(r,i.status)})}

            <div class="dv-group-title">${i.groupKnow}</div>
            ${this._row({icon:"ri:book-open-line",label:i.knowBase,sub:I(i.ownerOf,{owner:this._owner||i.ownerShared}),value:this._knows?.length,onClick:()=>this._go("knowledge")})}
            ${this._row({icon:"ri:download-cloud-2-line",label:i.hubRow,sub:i.hubRowSub,onClick:()=>this._openHub()})}

            <div class="dv-group-title">${i.groupInfo}</div>
            ${this._row({icon:"ri:edit-line",label:i.info,onClick:()=>this._go("info",{title:t.title||"",description:t.description||""})})}
            ${this._readOnlyTpl(this._can.division)}
            ${this._noticeTpl()}
        `}_function(){return"pipeline"===this._div.kind?this._pipeline():this._persona()}_persona(){const i=this._txt,t=this._can.division;if(!t)return e`${this._subHead(i.persona)}<div class="dv-notice">${i.personaPrivate}</div>`;if(!this._override)return e`${this._subHead(i.persona)}<div class="dv-empty"><iconify-icon class="dv-spin" icon="ri:loader-4-line"></iconify-icon></div>`;if(this._override.error)return e`${this._subHead(i.persona)}<div class="dv-notice">${this._override.error}</div>`;if(!this._form)return e`${this._subHead(i.persona)}<div class="dv-empty"><iconify-icon class="dv-spin" icon="ri:loader-4-line"></iconify-icon></div>`;const n=this._form;return e`
            ${this._subHead(i.persona)}
            ${this._readOnlyTpl(t)}
            <label class="dv-label">${i.role}
                <textarea class="dv-area" rows="3" placeholder=${i.rolePh} .value=${n.role} ?readonly=${!t}
                    @input=${i=>this._set("role",i.target.value)}></textarea>
            </label>
            <div class="dv-label">${i.principles}</div>
            ${n.principles.map((o,a)=>e`
                <div class="dv-principle">
                    <span class="dv-index">${a+1}</span>
                    <textarea class="dv-area" rows="2" placeholder=${i.principlePh} .value=${o} ?readonly=${!t}
                        @input=${i=>this._setPrinciple(a,i.target.value)}></textarea>
                    ${t?e`<button class="dv-icon-btn" type="button" aria-label=${i.remove}
                        @click=${()=>this._set("principles",n.principles.filter((i,e)=>e!==a))}><iconify-icon icon="ri:close-line"></iconify-icon></button>`:s}
                </div>
            `)}
            ${t?e`
                <button class="dv-link" type="button" @click=${()=>this._set("principles",[...n.principles,""])}>
                    <iconify-icon icon="ri:add-line"></iconify-icon>${i.addPrinciple}
                </button>
                ${this._saveBtn(()=>this._dfSaveFunction())}`:s}
            ${this._noticeTpl()}
        `}_pipeline(){const i=this._txt,t=this._outline,n=t?.output;return t?e`
            ${this._subHead(i.pipeline)}
            <div class="dv-group-title">${i.steps}</div>
            <div class="dv-card dv-list">
                ${t.steps.map((t,s)=>e`
                    <div class="dv-item">
                        <span class="dv-index">${s+1}</span>
                        <div class="dv-item-text">
                            <span class="dv-strong">${this._label(t,t.key||t.id)}</span>
                            <span class="dv-muted">${"image"===t.type?i.stepImage:I(i.calls,{n:t.calls?.length||0})}</span>
                        </div>
                        <iconify-icon class="dv-row-chev" icon=${"image"===t.type?"ri:image-line":"ri:file-text-line"}></iconify-icon>
                    </div>
                `)}
            </div>
            ${n?e`
                <div class="dv-group-title">${i.output}</div>
                <div class="dv-card dv-list">
                    <div class="dv-item"><span class="dv-item-text"><span class="dv-muted">${i.outputTable}</span><span class="dv-strong">${n.table}</span></span></div>
                    ${n.status?e`<div class="dv-item"><span class="dv-item-text"><span class="dv-muted">${i.outputStatus}</span><span>${n.status}</span></span></div>`:s}
                    ${n.fields?.length?e`<div class="dv-item dv-chips">${n.fields.map(i=>e`<span class="dv-chip">${i}</span>`)}</div>`:s}
                </div>`:s}
            ${[...t.needs??[],...t.uses??[]].some(i=>i.startsWith("product."))?e`<div class="dv-card"><iconify-icon icon="ri:shopping-bag-3-line"></iconify-icon>${i.requiresProduct}</div>`:s}
            <div class="dv-note">${i.stepsNote}</div>
        `:e`${this._subHead(i.pipeline)}<div class="dv-notice">${i.pipelineSignIn}</div>`}_knowledge(){const i=this._txt,t=this._filteredKnows;return e`
            ${this._subHead(i.knowBase)}
            <label class="dv-field">
                <iconify-icon icon="ri:search-line"></iconify-icon>
                <input type="search" placeholder=${i.search} .value=${this._query} @input=${i=>this._query=i.target.value} />
            </label>
            ${this._can.know?this._row({icon:"ri:add-circle-line",label:i.addKnow,onClick:()=>this._openKnow(null)}):s}
            ${this._row({icon:"ri:download-cloud-2-line",label:i.hubRow,sub:i.hubRowSub,onClick:()=>this._openHub()})}
            ${null===this._knows?e`<div class="dv-empty"><iconify-icon class="dv-spin" icon="ri:loader-4-line"></iconify-icon></div>`:t.length?e`<div class="dv-card dv-list">${t.map(i=>e`
                        <button class="dv-item dv-item-btn" type="button" @click=${()=>this._openKnow(i)}>
                            <span class="dv-item-text">
                                <span class="dv-strong dv-ellipsis">${i.title||i.id}</span>
                                <span class="dv-muted dv-ellipsis">${i.description}</span>
                            </span>
                            <span class="dv-chip ${"active"===i.status?"":"is-draft"}">${i.type}</span>
                            <iconify-icon class="dv-row-chev" icon="ri:arrow-right-s-line"></iconify-icon>
                        </button>`)}</div>`:e`<div class="dv-empty">${i.emptyKnow}</div>`}
            ${this._noticeTpl()}
        `}_scopes(){const[i="",e=""]=y(this._div?.id??this.division).split(".");return{fn:{sector:i,fn:e},sector:{sector:i,fn:""},all:{sector:"",fn:""}}}get _siteOwner(){return this.owner?"":m(this.site)}_selfDefaults(){return this._siteOwner?{type:"faq",...this._scopes().all}:{}}_scopeTpl(i,t){const n=this._txt,o=this._scopes(),a=Object.keys(o).find(e=>o[e].sector===(i.sector??"")&&o[e].fn===(i.fn??""))??"keep",r=i=>{o[i]&&(this._form={...this._form,...o[i]})};return e`
            <label class="dv-label">${n.scope}
                <span class="dv-field">
                    <iconify-icon icon="ri:focus-3-line"></iconify-icon>
                    <select .value=${a} ?disabled=${!t} @change=${i=>r(i.target.value)}>
                        <option value="fn" ?selected=${"fn"===a}>${n.scopeFn}</option>
                        <option value="sector" ?selected=${"sector"===a}>${n.scopeSector}</option>
                        <option value="all" ?selected=${"all"===a}>${n.scopeAll}</option>
                        ${"keep"===a?e`<option value="keep" selected disabled>${n.scopeKeep}</option>`:s}
                    </select>
                </span>
            </label>
        `}_know(){const i=this._txt,t=this._form,n=this._can.know,o=S;return e`
            ${this._subHead(t.id?i.knowEdit:i.knowNew,"knowledge")}
            ${this._readOnlyTpl(n)}
            <div class="dv-form">
                ${this._siteOwner?s:e`
                    <label class="dv-label">${i.type}
                        <span class="dv-field">
                            <iconify-icon icon="ri:price-tag-3-line"></iconify-icon>
                            <input list="dv-types" .value=${t.type} ?readonly=${!n} @input=${i=>this._set("type",i.target.value)} />
                            <datalist id="dv-types">${o.map(i=>e`<option value=${i}></option>`)}</datalist>
                        </span>
                    </label>
                    ${this._scopeTpl(t,n)}`}
                <label class="dv-label">${i.name}
                    <span class="dv-field">
                        <input .value=${t.title} ?readonly=${!n} @input=${i=>this._set("title",i.target.value)} />
                    </span>
                </label>
                <label class="dv-label">${i.content}
                    <textarea class="dv-area" rows="8" .value=${t.description} ?readonly=${!n} @input=${i=>this._set("description",i.target.value)}></textarea>
                </label>
                ${this._row({icon:"ri:eye-line",label:i.publish,sub:i.publishSub,disabled:!n,onClick:()=>this._set("status","active"===t.status?"draft":"active"),trail:this._switch("active"===t.status,i.publish)})}
            </div>
            ${n?e`
                ${this._saveBtn(()=>this._dfSaveKnow(),!t.title.trim())}
                ${t.id?e`<button class="dv-link dv-danger" type="button" ?disabled=${this._busy} @click=${()=>this._dfDeleteKnow()}>
                    <iconify-icon icon="ri:delete-bin-line"></iconify-icon>${i.delete}</button>`:s}`:s}
            ${this._noticeTpl()}
        `}_hubView(){const i=this._txt,t=this._hub,n=this._form;if(!t)return e`${this._subHead(i.hubRow,"knowledge")}<div class="dv-empty"><iconify-icon class="dv-spin" icon="ri:loader-4-line"></iconify-icon></div>`;if(t.error)return e`${this._subHead(i.hubRow,"knowledge")}<div class="dv-notice">${"auth"===t.error?i.signIn:t.error}</div>`;const o=t.hub,a=t.active||t.isAdmin;return e`
            ${this._subHead(i.hubRow,"knowledge")}

            <div class="dv-group-title">MCP</div>
            ${o?e`
                <div class="dv-card dv-list">
                    <div class="dv-item"><span class="dv-item-text"><span class="dv-muted">${i.plan}</span><span class="dv-strong">${o.plan_id}${o.plan_interval?` · ${o.plan_interval}`:""}</span></span>
                        <span class="dv-chip ${t.active?"is-ok":"is-draft"}">${t.active?i.hubActive:i.hubExpired}</span></div>
                    <div class="dv-item"><span class="dv-item-text"><span class="dv-muted">${i.token}</span><span class="dv-mono">mcp_…${o.token_hint}</span>
                        <span class="dv-muted">${(o.token_issued_at||"").slice(0,10)}</span></span></div>
                    <div class="dv-item"><span class="dv-item-text"><span class="dv-muted">${i.emailTo}</span><span class="dv-ellipsis">${o.email||"—"}</span>
                        <span class="dv-muted">${o.email_error?I(i.emailFail,{err:o.email_error}):o.email_sent_at?I(i.emailSent,{at:o.email_sent_at.slice(0,10)}):""}</span></span></div>
                </div>
                ${this._row({icon:"ri:key-2-line",label:i.rotate,disabled:this._busy||!a,onClick:()=>this._dfIssue(!0),trail:s})}`:e`
                <div class="dv-notice">${i.noHub}</div>
                ${this._row({icon:"ri:key-2-line",label:i.activate,disabled:this._busy,onClick:()=>this._dfIssue(!1),trail:s})}`}
            ${this._issued?e`
                <div class="dv-card dv-mcp">
                    <iconify-icon class="dv-row-icon" icon="ri:shield-keyhole-line"></iconify-icon>
                    <div class="dv-item-text">
                        <span class="dv-strong">${i.tokenOnce}</span>
                        ${this._issued.emailed?e`<span class="dv-muted">${I(i.tokenMailed,{email:this._issued.email})}</span>`:s}
                        <code class="dv-code">${this._issued.token}</code>
                        <button class="dv-link" type="button" @click=${()=>this._copy(this._issued.token)}><iconify-icon icon="ri:file-copy-line"></iconify-icon>${i.copy}</button>
                    </div>
                </div>`:s}
            <div class="dv-label">${i.mcpUrl}<code class="dv-code">${t.mcpUrl}</code></div>
            ${a?this._row({icon:"ri:search-eye-line",label:i.reindex,disabled:this._busy,sub:t.pending?I(i.reindexSub,{n:t.pending}):i.reindexDone,onClick:()=>this._dfReindex(),trail:s}):s}
            ${t.managed?e`<div class="dv-note">${I(i.embedHint,{owner:t.managed.id})}</div>`:s}
            ${this._sitesTpl(t)}

            ${a?e`
                <div class="dv-group-title">${i.groupImport}</div>
                <div class="dv-form">
                    <label class="dv-label">${i.apiUrl}
                        <span class="dv-field"><iconify-icon icon="ri:link"></iconify-icon>
                            <input type="url" placeholder=${i.apiUrlPh} .value=${n.url} @input=${i=>this._set("url",i.target.value)} /></span>
                    </label>
                    ${this._siteOwner?s:e`
                        <label class="dv-label">${i.type}
                            <span class="dv-field"><iconify-icon icon="ri:price-tag-3-line"></iconify-icon>
                                <input list="dv-hub-types" .value=${n.type} @input=${i=>this._set("type",i.target.value)} />
                                <datalist id="dv-hub-types">${(t.types??S).map(i=>e`<option value=${i}></option>`)}</datalist></span>
                        </label>
                        ${this._scopeTpl(n,!0)}`}
                    <details class="dv-details">
                        <summary>${i.advanced}</summary>
                        ${[["itemsPath",i.itemsPath],["title",i.titleField],["description",i.descField],["id",i.idField],["tags",i.tagsField]].map(([i,t])=>e`
                            <label class="dv-label">${t}
                                <span class="dv-field"><input .value=${n[i]} @input=${e=>this._set(i,e.target.value)} /></span>
                            </label>`)}
                    </details>
                </div>
                <div class="dv-actions">
                    <button class="dv-btn" type="button" ?disabled=${this._busy||!n.url.trim()||!n.type.trim()} @click=${()=>this._dfImport(!0)}>${i.preview}</button>
                    <button class="dv-btn dv-btn-primary" type="button" ?disabled=${this._busy||!n.url.trim()||!n.type.trim()} @click=${()=>this._dfImport(!1)}>
                        ${this._busy?e`<iconify-icon class="dv-spin" icon="ri:loader-4-line"></iconify-icon>`:s}${i.runImport}
                    </button>
                </div>
                ${this._resultTpl()}
                ${o?.sources?.length?e`
                    <div class="dv-group-title">${i.groupSources}</div>
                    <div class="dv-card dv-list">${o.sources.map(t=>e`
                        <div class="dv-item">
                            <span class="dv-item-text">
                                <span class="dv-strong dv-ellipsis">${t.url}</span>
                                <span class="dv-muted">${t.type}${t.fn||t.sector?` · ${[t.sector,t.fn].filter(Boolean).join(".")}`:""} · ${I(i.items,{n:t.last_count??0})} · ${(t.last_import_at||"").slice(0,10)}${t.owner!==o.id?` · ${t.owner||i.ownerShared}`:""}</span>
                            </span>
                            <button class="dv-icon-btn" type="button" title=${i.rerun} aria-label=${i.rerun} ?disabled=${this._busy} @click=${()=>this._dfImport(!1,t)}><iconify-icon icon="ri:refresh-line"></iconify-icon></button>
                            <button class="dv-icon-btn" type="button" title=${i.removeSource} aria-label=${i.removeSource} @click=${()=>this._dfRemoveSource(t.id)}><iconify-icon icon="ri:close-line"></iconify-icon></button>
                        </div>`)}
                    </div>`:s}`:s}
            ${this._noticeTpl()}
        `}_resultTpl(){const i=this._txt,t=this._result;if(!t)return s;const n=t.mapping;return e`
            <div class="dv-card dv-list">
                <div class="dv-item"><span class="dv-item-text">
                    <span class="dv-strong">${t.dryRun?I(i.previewOf,{n:t.count}):I(i.imported,t)}</span>
                    ${t.skipped?e`<span class="dv-muted">${I(i.skipped,{n:t.skipped})}</span>`:s}
                    ${n?e`<span class="dv-muted">${I(i.mapping,{path:n.itemsPath||"/",title:n.fields?.title??"—",id:n.fields?.id??"—"})}</span>`:s}
                </span></div>
                ${(t.sample??[]).map(i=>e`<div class="dv-item"><span class="dv-item-text"><span class="dv-ellipsis">${i.title}</span><span class="dv-muted dv-ellipsis">${i.description}</span></span></div>`)}
            </div>
        `}_info(){const i=this._txt,t=this._form,n=this._can.division;return e`
            ${this._subHead(i.info)}
            ${this._readOnlyTpl(n)}
            <div class="dv-form">
                <label class="dv-label">${i.titleLabel}
                    <span class="dv-field"><input .value=${t.title} ?readonly=${!n} @input=${i=>this._set("title",i.target.value)} /></span>
                </label>
                <label class="dv-label">${i.description}
                    <textarea class="dv-area" rows="4" .value=${t.description} ?readonly=${!n} @input=${i=>this._set("description",i.target.value)}></textarea>
                </label>
            </div>
            ${n?this._saveBtn(()=>this._dfSaveDivision({title:t.title.trim(),description:t.description.trim()}),!t.title.trim()):s}
            ${this._noticeTpl()}
        `}render(){if(!this._div)return e`<div class="dv"><div class="dv-empty"><iconify-icon class="dv-spin" icon="ri:loader-4-line"></iconify-icon></div></div>`;const i={home:this._home,function:this._function,knowledge:this._knowledge,know:this._know,hub:this._hubView,info:this._info},t=P.has(this._view)&&!this._form?this._home:i[this._view]??this._home;return e`<div class="dv">${l(this._view,e`<div class="dv-view">${t.call(this)}</div>`)}</div>`}};customElements.get("svc-division")||customElements.define("svc-division",O);export{$ as t};