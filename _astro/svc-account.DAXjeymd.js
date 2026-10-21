import{n as e}from"./rolldown-runtime.Bpd4S2KM.js";import{a as i,l as t,n as s,t as a}from"./lit.Db6wVdDu.js";import"./iconify-icon.BQKUsOMK.js";import{C as r}from"./util.usvuopSX.js";import"./web-fab.D4RerPV8.js";import"./web-popover.wiA4NUwm.js";import{t as o}from"./keyed.shnHa4Bw.js";import{n,s as l,t as c,u as p}from"./service.sSgTDzwg.js";import{n as d,t as h}from"./cookier.C2A61Slr.js";import"./svc-auth.CfUS6gjH.js";import{a as f,c as u,d as m,f as g,i as b,l as v,n as _,o as y,r as w,s as x,t as $,u as k}from"./profile.eBD9vBIN.js";var S=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,P={vi:{title:"Tài khoản",back:"Quay lại",statRoles:"Quyền",statDevices:"Thiết bị",statLinked:"Liên kết",general:"Chung",preferences:"Tuỳ chỉnh",profile:"Hồ sơ",editProfile:"Chỉnh sửa hồ sơ",darkMode:"Chế độ tối",language:"Ngôn ngữ",settings:"Cài đặt",email:"Email",connected:"Tài khoản liên kết",role:"Quyền",devices:"Thiết bị",status:"Trạng thái",noRole:"Tài khoản thường — chưa được cấp quyền bảng nào",notActive:"Tài khoản chưa hoạt động — quyền chưa có hiệu lực",linkGoogle:"Liên kết Google",thisDevice:"Thiết bị này",signOutOthers:"Đăng xuất khỏi thiết bị khác",name:"Họ tên",namePh:"Nhập họ tên",emailPh:"Nhập email",password:"Mật khẩu mới",passwordPh:"Để trống nếu không đổi",resetPassword:"Gửi email đặt lại mật khẩu",save:"Lưu thay đổi",changeAvatar:"Đổi ảnh đại diện",notifications:"Thông báo",notificationsSub:"Nhận email về hoạt động tài khoản",signOut:"Đăng xuất",saved:"Đã lưu thay đổi",emailSent:"Đã gửi link xác nhận tới email mới",passwordChanged:"Đã đổi mật khẩu",resetSent:"Đã gửi email đặt lại mật khẩu tới",othersSignedOut:"Đã đăng xuất các thiết bị khác",errName:"Vui lòng nhập họ tên",errEmail:"Email không hợp lệ",errPasswordShort:"Mật khẩu tối thiểu 6 ký tự",errFailed:"Thao tác thất bại",errUpload:"Tải ảnh lên thất bại"},en:{title:"Profile",back:"Back",statRoles:"Roles",statDevices:"Devices",statLinked:"Linked",general:"General",preferences:"Preferences",profile:"Profile",editProfile:"Edit profile",darkMode:"Dark mode",language:"Language",settings:"Settings",email:"Email",connected:"Connected accounts",role:"Roles",devices:"Devices",status:"Status",noRole:"Regular account — no table permissions yet",notActive:"Account not active — permissions do not apply yet",linkGoogle:"Link Google",thisDevice:"This device",signOutOthers:"Sign out other devices",name:"Name",namePh:"Enter your name",emailPh:"Enter your email",password:"New password",passwordPh:"Leave blank to keep current",resetPassword:"Send password reset email",save:"Save changes",changeAvatar:"Change avatar",notifications:"Notifications",notificationsSub:"Email me about account activity",signOut:"Sign out",saved:"Changes saved",emailSent:"Confirmation link sent to the new email",passwordChanged:"Password changed",resetSent:"Password reset email sent to",othersSignedOut:"Other devices signed out",errName:"Please enter your name",errEmail:"Enter a valid email address",errPasswordShort:"Password must be at least 6 characters",errFailed:"Something went wrong",errUpload:"Image upload failed"}},E=[{code:"vi",label:"Tiếng Việt",flag:"circle-flags:vn"},{code:"en",label:"English",flag:"circle-flags:us"}],O={google:"flat-color-icons:google",github:"ri:github-fill",email:"ri:mail-line"},z=e=>String(e).padStart(2,"0");var C=class extends a{static shadowRootOptions={mode:"open"};static styles=[t(':host{--pf-surface:color-mix(in oklab, var(--color-base-content) 4%, transparent);--pf-surface-hover:color-mix(in oklab, var(--color-base-content) 7%, transparent);--pf-line:color-mix(in oklab, var(--color-base-content) 10%, transparent);--pf-muted:color-mix(in oklab, var(--color-base-content) 58%, transparent);--pf-radius:18px;width:100%;display:block}*{box-sizing:border-box}button{font:inherit;color:inherit}button:disabled{cursor:default;opacity:.6}.pf{isolation:isolate;color:var(--color-base-content);font-family:var(--font-sans,system-ui, sans-serif);padding:1rem .75rem;position:relative}.pf:before{content:"";z-index:-1;pointer-events:none;border-radius:inherit;height:240px;position:absolute;inset:0 0 auto}.pf-view{flex-direction:column;gap:.6rem;animation:.22s ease-out pf-in;display:flex}@keyframes pf-in{0%{opacity:0;transform:translate(10px)}}@media (prefers-reduced-motion:reduce){.pf-view{animation:none}}.pf-h1{letter-spacing:-.01em;margin:.25rem 0 .5rem;font-size:1.5rem;font-weight:700}.pf-top{align-items:center;gap:.75rem;display:flex}.pf-top .pf-h1{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;margin:0;overflow:hidden}.pf-hero{align-items:center;gap:1rem;margin-bottom:.4rem;display:flex}.pf-hero-text{min-width:0}.pf-name{text-overflow:ellipsis;white-space:nowrap;font-size:1.45rem;font-weight:600;line-height:1.2;overflow:hidden}.pf-mail{color:var(--pf-muted);text-overflow:ellipsis;white-space:nowrap;margin-top:.2rem;font-size:.85rem;overflow:hidden}.pf-avatar{cursor:pointer;background:0 0;border:0;border-radius:50%;flex-shrink:0;padding:0;position:relative}.pf-avatar-lg{align-self:flex-start;margin-bottom:.5rem}.pf-avatar-img{width:var(--pf-avatar,88px);height:var(--pf-avatar,88px);object-fit:cover;background:color-mix(in oklab, var(--color-info) 22%, var(--color-base-100));border-radius:50%;display:block}.pf-avatar-initials{font-weight:700;font-size:calc(var(--pf-avatar,88px) * .36);color:var(--color-base-content);place-items:center;display:grid}.pf-badge{background:var(--color-base-content);width:30px;height:30px;color:var(--color-base-100);border:2px solid var(--color-base-100);border-radius:50%;place-items:center;font-size:.95rem;display:grid;position:absolute;bottom:2px;right:-2px}.pf-stats{grid-template-columns:repeat(3,1fr);gap:.5rem;margin-bottom:.4rem;display:grid}.pf-stat{border-radius:var(--pf-radius);background:var(--pf-surface);flex-direction:column;align-items:center;gap:.2rem;padding:.85rem .4rem;display:flex}.pf-stat b{font-size:1.15rem;font-weight:600}.pf-stat span{color:var(--pf-muted);font-size:.82rem}.pf-group-title{color:var(--pf-muted);margin-top:.5rem;font-size:.8rem}.pf-row{border-radius:var(--pf-radius);background:var(--pf-surface);text-align:left;cursor:pointer;border:0;align-items:center;gap:.8rem;width:100%;min-height:54px;padding:.6rem 1rem;transition:background .15s;display:flex}.pf-row:hover:not(:disabled){background:var(--pf-surface-hover)}.pf-row:focus-visible,.pf-lang:focus-visible,.pf-btn:focus-visible,.pf-back:focus-visible,.pf-avatar:focus-visible{outline:2px solid var(--color-primary);outline-offset:2px}.pf-row.is-danger,.pf-btn.is-danger{color:var(--color-error)}.pf-row-icon{flex-shrink:0;font-size:1.25rem}.pf-row-text{flex-direction:column;flex:1;min-width:0;display:flex}.pf-row-label{font-size:.98rem}.pf-row-sub{color:var(--pf-muted);margin-top:.1rem;font-size:.78rem}.pf-row-value{color:var(--pf-muted);white-space:nowrap;font-size:.85rem}.pf-row-chev{color:var(--pf-muted);font-size:1.2rem}.pf-switch{background:color-mix(in oklab, var(--color-base-content) 14%, transparent);border-radius:999px;flex-shrink:0;width:46px;height:27px;transition:background .2s;position:relative}.pf-switch:after{content:"";background:#fff;border-radius:50%;width:21px;height:21px;transition:transform .2s;position:absolute;top:3px;left:3px;box-shadow:0 1px 3px #00000040}.pf-switch.is-on{background:var(--color-primary)}.pf-switch.is-on:after{transform:translate(19px)}.pf-langs{flex-direction:column;display:flex}.pf-lang{border:0;border-bottom:1px solid var(--pf-line);text-align:left;cursor:pointer;background:0 0;align-items:center;gap:.9rem;width:100%;padding:.95rem .1rem;display:flex}.pf-lang:last-child{border-bottom:0}.pf-flag{flex-shrink:0;font-size:2.5rem}.pf-lang-label{flex:1;font-size:1.02rem}.pf-radio{border:1.5px solid color-mix(in oklab, var(--color-base-content) 22%, transparent);border-radius:50%;flex-shrink:0;width:24px;height:24px;transition:background .15s,box-shadow .15s}.pf-radio.is-on{border-color:var(--color-primary);background:var(--color-primary);box-shadow:inset 0 0 0 3px var(--color-base-100), 0 0 0 3px color-mix(in oklab, var(--color-primary) 22%, transparent)}.pf-back{background:var(--pf-surface);cursor:pointer;border:0;border-radius:50%;flex-shrink:0;place-items:center;width:42px;height:42px;padding:0;font-size:1.35rem;display:grid}.pf-back:hover{background:var(--pf-surface-hover)}.pf-card{border-radius:var(--pf-radius);background:var(--pf-surface);align-items:center;gap:.8rem;padding:.8rem 1rem;font-size:.92rem;display:flex}.pf-list{flex-direction:column;align-items:stretch;gap:0;padding:.2rem 1rem}.pf-item{border-bottom:1px solid var(--pf-line);align-items:center;gap:.8rem;padding:.65rem 0;display:flex}.pf-item:last-child{border-bottom:0}.pf-item-text{flex-direction:column;flex:1;min-width:0;display:flex}.pf-strong{font-weight:600}.pf-muted{color:var(--pf-muted);font-size:.8rem}.pf-cap{text-transform:capitalize}.pf-ellipsis{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.pf-dot{background:var(--color-success);width:8px;height:8px;box-shadow:0 0 0 3px color-mix(in oklab, var(--color-success) 25%, transparent);border-radius:50%}.pf-chips{flex-wrap:wrap;gap:.4rem}.pf-chip{background:var(--pf-surface-hover);border-radius:999px;padding:.25rem .65rem;font-size:.78rem}.pf-chip.is-ok{color:var(--color-success);background:color-mix(in oklab, var(--color-success) 14%, transparent)}.pf-access{max-width:60%;color:var(--color-primary);text-align:right;flex-shrink:0;font-size:.82rem;font-weight:600}.pf-role-note{color:var(--color-warning);margin-top:.4rem}.pf-form{flex-direction:column;gap:.9rem;display:flex}.pf-label{flex-direction:column;gap:.4rem;font-size:.85rem;display:flex}.pf-field{border-radius:var(--pf-radius);border:1px solid var(--pf-line);background:color-mix(in oklab, var(--color-base-100) 70%, transparent);align-items:center;gap:.7rem;height:54px;padding:0 1rem;font-size:1rem;transition:border-color .15s,box-shadow .15s;display:flex}.pf-field:focus-within{border-color:var(--color-primary);box-shadow:0 0 0 3px color-mix(in oklab, var(--color-primary) 18%, transparent)}.pf-field>iconify-icon{flex-shrink:0;font-size:1.25rem}.pf-field input{min-width:0;height:100%;font:inherit;color:inherit;background:0 0;border:0;outline:none;flex:1}.pf-field input::placeholder{color:var(--pf-muted)}.pf-eye{color:var(--pf-muted);cursor:pointer;background:0 0;border:0;place-items:center;padding:.25rem;font-size:1.2rem;display:grid}.pf-btn{border:1px solid var(--pf-line);background:var(--color-base-100);cursor:pointer;border-radius:999px;justify-content:center;align-items:center;gap:.5rem;width:100%;height:50px;font-size:.98rem;transition:background .15s;display:flex}.pf-btn:hover:not(:disabled){background:var(--pf-surface-hover)}.pf-btn-main{margin-top:.75rem}.pf-btn-ghost{background:0 0;height:44px;font-size:.9rem}.pf-link{color:var(--pf-muted);cursor:pointer;background:0 0;border:0;align-self:flex-start;align-items:center;gap:.4rem;padding:.2rem 0;font-size:.85rem;display:inline-flex}.pf-link:hover:not(:disabled){color:var(--color-base-content)}.pf-signout{color:var(--color-error);align-self:center;margin-top:.6rem}.pf-signout:hover:not(:disabled){color:var(--color-error);text-decoration:underline}.pf-notice{border-radius:12px;padding:.6rem .85rem;font-size:.85rem}.pf-notice.is-ok{color:var(--color-success);background:color-mix(in oklab, var(--color-success) 12%, transparent)}.pf-notice.is-err{color:var(--color-error);background:color-mix(in oklab, var(--color-error) 12%, transparent)}.pf-spin{animation:.8s linear infinite pf-spin}@keyframes pf-spin{to{transform:rotate(360deg)}}')];static properties={ui:{type:String},theme:{type:String},lang:{type:String},txt:{type:Object},user:{type:Object},_view:{state:!0},_identities:{state:!0},_draft:{state:!0},_showPw:{state:!0},_busy:{state:!0},_notice:{state:!0},_avatarFailed:{state:!0}};constructor(){super(),this.ui="pastel",this.theme="dark",this.lang="vi",this.txt=null,this.user=null,this._view="home",this._identities=[],this._draft=null,this._showPw=!1,this._busy="",this._notice=null,this._avatarFailed=!1,this._loadedFor=null}get _txt(){return r(this.txt,P,this.lang)}willUpdate(e){e.has("user")&&e.get("user")?.avatar!==this.user?.avatar&&(this._avatarFailed=!1)}updated(e){e.has("user")&&this.user?.id&&this.user.id!==this._loadedFor&&this._load()}async _load(){this._loadedFor=this.user.id;const e=await this._fetch(),[i,t]=await Promise.all([y().catch(e=>(console.warn("[svc-profile] identities:",e.message),[])),m(e).catch(i=>(console.warn("[svc-profile] device:",i.message),e))]);this._identities=i,t!==this.user&&this._emitUser(t)}_fetch(){return b(this.user).catch(e=>(console.warn("[svc-profile] profile:",e.message),this.user))}async _refresh(){const e=await this._fetch();e!==this.user&&this._emitUser(e)}_emit(e,i={}){this.dispatchEvent(new CustomEvent(e,{detail:i,bubbles:!0,composed:!0}))}_emitUser(e){this._emit("profile-update",{user:e})}_go(e){if(this._view=e,this._notice=null,"profile"===e&&this._refresh(),"edit"===e){const e=this.user;this._draft={name:e.display_name||"",email:e.email||"",password:"",avatar:e.avatar||""},this._showPw=!1}}async _run(e,i){if(!this._busy){this._busy=e,this._notice=null;try{await i()}catch(t){this._notice={type:"err",text:t?.message||this._txt.errFailed}}finally{this._busy=""}}}_ok(e){this._notice={type:"ok",text:e}}_dhTheme(){this._emit("theme-select",{theme:"dark"===this.theme?"light":"dark"})}_dhLang(e){e!==this.lang&&this._emit("lang-select",{lang:e})}_dhSignOut(){this._busy||(this._busy="signout",this._emit("sign-out"))}_dhPickAvatar(){this.renderRoot.querySelector("#pf-file")?.click()}_dhAvatarFile(e){const i=e.target.files?.[0];e.target.value="",i&&this._run("avatar",async()=>{try{this._draft={...this._draft,avatar:await g(i)},this._avatarFailed=!1}catch(e){throw console.error("[svc-profile] upload:",e),new Error(this._txt.errUpload)}})}_dhDraft(e,i){this._draft={...this._draft,[e]:i.target.value}}_dhSave(e){e.preventDefault();const i=this._txt,t=this.user,s=this._draft,a=s.name.trim(),r=s.email.trim(),o=s.password;return a?S.test(r)?o&&o.length<6?this._notice={type:"err",text:i.errPasswordShort}:void this._run("save",async()=>{const e=[],n={};a!==(t.display_name||"")&&(n.display_name=a),s.avatar!==(t.avatar||"")&&(n.avatar=s.avatar),Object.keys(n).length&&this._emitUser(await x(t,n)),r!==t.email&&(await $(r),e.push(i.emailSent)),o&&(await _(o),this._draft={...this._draft,password:""},e.push(i.passwordChanged)),this._ok(e.length?e.join(" · "):i.saved)}):this._notice={type:"err",text:i.errEmail}:this._notice={type:"err",text:i.errName}}_dhReset(){this._run("reset",async()=>{await v(this.user.email),this._ok(`${this._txt.resetSent} ${this.user.email}`)})}_dhLink(e){this._run("link",()=>f(e))}_dhSignOutOthers(){this._run("others",async()=>{this._emitUser(await k(this.user)),this._ok(this._txt.othersSignedOut)})}_dhNotifications(){const e=!1!==this.user.meta?.settings?.notifications;this._run("settings",async()=>this._emitUser(await u(this.user,{notifications:!e})))}_avatar(e,t){const s=this.user;return e&&!this._avatarFailed?i`<img class="pf-avatar-img" style="--pf-avatar:${t}" src=${e} alt="" referrerpolicy="no-referrer" @error=${()=>this._avatarFailed=!0} />`:i`<span class="pf-avatar-img pf-avatar-initials" style="--pf-avatar:${t}">${a=s.display_name||s.email,(a||"?").trim().split(/\s+/).slice(0,2).map(e=>e[0]).join("").toUpperCase()}</span>`;var a}_switch(e,t){return i`<span class="pf-switch ${e?"is-on":""}" role="switch" aria-checked=${e?"true":"false"} aria-label=${t}></span>`}_row({icon:e,label:t,sub:a,value:r,onClick:o,trail:n="chevron",danger:l=!1,busy:c=!1}){return i`
            <button class="pf-row ${l?"is-danger":""}" type="button" ?disabled=${c} @click=${o}>
                <iconify-icon class="pf-row-icon" icon=${e}></iconify-icon>
                <span class="pf-row-text">
                    <span class="pf-row-label">${t}</span>
                    ${a?i`<span class="pf-row-sub">${a}</span>`:s}
                </span>
                ${r?i`<span class="pf-row-value">${r}</span>`:s}
                ${c?i`<iconify-icon class="pf-spin" icon="ri:loader-4-line"></iconify-icon>`:"chevron"===n?i`<iconify-icon class="pf-row-chev" icon="ri:arrow-right-s-line"></iconify-icon>`:n}
            </button>
        `}_subHead(e){return i`
            <div class="pf-top">
                <button class="pf-back" type="button" aria-label=${this._txt.back} @click=${()=>this._go("home")}>
                    <iconify-icon icon="ri:arrow-left-s-line"></iconify-icon>
                </button>
                <h2 class="pf-h1" title=${e}>${e}</h2>
            </div>
        `}_noticeTpl(){const e=this._notice;return e?i`<div class="pf-notice is-${e.type}" role=${"err"===e.type?"alert":"status"}>${e.text}</div>`:s}get _devices(){return Array.isArray(this.user.meta?.devices)?this.user.meta.devices:[]}_home(){const e=this._txt,t=this.user,s=E.find(e=>e.code===this.lang)?.label,a=[[p(t).isAdmin?"∞":z(l(t).length),e.statRoles],[z(this._devices.length),e.statDevices],[z(this._identities.length),e.statLinked]];return i`
            <div class="pf-hero">
                <button class="pf-avatar" type="button" aria-label=${e.editProfile} @click=${()=>this._go("edit")}>
                    ${this._avatar(t.avatar,"88px")}
                    <span class="pf-badge"><iconify-icon icon="ri:pencil-line"></iconify-icon></span>
                </button>
                <div class="pf-hero-text">
                    <div class="pf-name">${t.display_name||t.email}</div>
                    <div class="pf-mail">${t.email}</div>
                </div>
            </div>

            <div class="pf-stats">
                ${a.map(([e,t])=>i`<div class="pf-stat"><b>${e}</b><span>${t}</span></div>`)}
            </div>

            <div class="pf-group-title">${e.general}</div>
            ${this._row({icon:"ri:id-card-line",label:e.profile,onClick:()=>this._go("profile")})}
            ${this._row({icon:"ri:edit-line",label:e.editProfile,onClick:()=>this._go("edit")})}

            <div class="pf-group-title">${e.preferences}</div>
            ${this._row({icon:"ri:moon-line",label:e.darkMode,onClick:()=>this._dhTheme(),trail:this._switch("dark"===this.theme,e.darkMode)})}
            ${this._row({icon:"ri:translate-2",label:e.language,value:s,onClick:()=>this._go("language")})}
            ${this._row({icon:"ri:settings-3-line",label:e.settings,onClick:()=>this._go("settings")})}

            <button class="pf-link pf-signout" type="button" ?disabled=${!!this._busy} @click=${this._dhSignOut}>
                <iconify-icon icon=${"signout"===this._busy?"ri:loader-4-line":"ri:logout-box-r-line"} class=${"signout"===this._busy?"pf-spin":""}></iconify-icon>${e.signOut}
            </button>
        `}_profile(){const e=this._txt,t=this.user,a=this._identities.some(e=>"google"===e.provider),r=w();return i`
            ${this._subHead(e.profile)}

            <div class="pf-group-title">${e.profile}</div>
            <div class="pf-card pf-identity">
                ${this._avatar(t.avatar,"48px")}
                <div class="pf-hero-text">
                    <div class="pf-strong">${t.display_name||t.email}</div>
                    ${t.username?i`<div class="pf-muted">@${t.username}</div>`:s}
                </div>
            </div>

            <div class="pf-group-title">${e.email}</div>
            <div class="pf-card"><iconify-icon class="pf-row-icon" icon="ri:mail-line"></iconify-icon><span class="pf-ellipsis">${t.email}</span></div>

            <div class="pf-group-title">${e.connected}</div>
            <div class="pf-card pf-list">
                ${this._identities.length?this._identities.map(e=>i`
                    <div class="pf-item">
                        <iconify-icon class="pf-row-icon" icon=${O[e.provider]||"ri:links-line"}></iconify-icon>
                        <span class="pf-item-text">
                            <span class="pf-strong pf-cap">${e.provider}</span>
                            ${e.identity_data?.email?i`<span class="pf-muted pf-ellipsis">${e.identity_data.email}</span>`:s}
                        </span>
                    </div>
                `):i`<div class="pf-item"><iconify-icon class="pf-row-icon" icon=${O[t.meta?.provider]||"ri:links-line"}></iconify-icon><span class="pf-strong pf-cap">${t.meta?.provider||"—"}</span></div>`}
            </div>
            ${a?s:i`
                <button class="pf-btn pf-btn-ghost" type="button" ?disabled=${!!this._busy} @click=${()=>this._dhLink("google")}>
                    <iconify-icon icon=${"link"===this._busy?"ri:loader-4-line":"flat-color-icons:google"} class=${"link"===this._busy?"pf-spin":""}></iconify-icon>${e.linkGoogle}
                </button>
            `}

            <div class="pf-group-title">${e.role}</div>
            ${this._roles(t)}

            <div class="pf-group-title">${e.devices}</div>
            <div class="pf-card pf-list">
                ${this._devices.map(t=>i`
                    <div class="pf-item">
                        <iconify-icon class="pf-row-icon" icon=${t.mobile?"ri:smartphone-line":"ri:computer-line"}></iconify-icon>
                        <span class="pf-item-text">
                            <span class="pf-strong">${t.name}</span>
                            <span class="pf-muted">${t.id===r?e.thisDevice:function(e,i){const t=Math.round((e-Date.now())/1e3),s=new Intl.RelativeTimeFormat(i,{numeric:"auto"});for(const[a,r]of[["day",86400],["hour",3600],["minute",60]])if(Math.abs(t)>=r)return s.format(Math.round(t/r),a);return s.format(0,"minute")}(t.lastSeen,this.lang)}</span>
                        </span>
                        ${t.id===r?i`<span class="pf-dot" aria-hidden="true"></span>`:s}
                    </div>
                `)}
            </div>
            ${this._devices.length>1?i`
                <button class="pf-btn pf-btn-ghost is-danger" type="button" ?disabled=${!!this._busy} @click=${this._dhSignOutOthers}>
                    <iconify-icon icon=${"others"===this._busy?"ri:loader-4-line":"ri:logout-circle-r-line"} class=${"others"===this._busy?"pf-spin":""}></iconify-icon>${e.signOutOthers}
                </button>
            `:s}
            ${this._noticeTpl()}
        `}_roles(e){const t=this._txt,a=n[this.lang]??n.vi,r=e.status&&"active"!==e.status?i`<div class="pf-muted pf-role-note">${t.notActive} (${e.status})</div>`:s;if(p(e).isAdmin)return i`
            <div class="pf-card"><iconify-icon class="pf-row-icon" icon="ri:shield-star-line"></iconify-icon><span class="pf-strong">Super Admin</span></div>${r}`;const o=l(e);return o.length?i`
            <div class="pf-card pf-list">
                ${o.map(e=>i`
                    <div class="pf-item">
                        <span class="pf-item-text">
                            <span class="pf-strong pf-cap">${e.table}</span>
                            ${e.with.length?i`<span class="pf-muted pf-ellipsis">+ ${e.with.join(", ")}</span>`:s}
                        </span>
                        <span class="pf-access">${[...e.levels.map(e=>a.levels[e]),"own"===e.scope?a.scopes.own:"",e.custom.length?`+${e.custom.length} ${a.custom}`:""].filter(Boolean).join(" · ")}</span>
                    </div>
                `)}
            </div>
            ${r}
        `:i`
            <div class="pf-card"><iconify-icon class="pf-row-icon" icon="ri:user-line"></iconify-icon><span class="pf-muted">${t.noRole}</span></div>${r}`}_edit(){const e=this._txt,t=this._draft,a="avatar"===this._busy;return i`
            ${this._subHead(e.editProfile)}
            <form class="pf-form" @submit=${this._dhSave} novalidate>
                <button class="pf-avatar pf-avatar-lg" type="button" aria-label=${e.changeAvatar} ?disabled=${!!this._busy} @click=${this._dhPickAvatar}>
                    ${this._avatar(t.avatar,"104px")}
                    <span class="pf-badge"><iconify-icon icon=${a?"ri:loader-4-line":"ri:pencil-line"} class=${a?"pf-spin":""}></iconify-icon></span>
                </button>
                <input id="pf-file" type="file" accept="image/*" hidden @change=${this._dhAvatarFile} />

                <label class="pf-label">${e.name}
                    <span class="pf-field">
                        <iconify-icon icon="ri:user-3-line"></iconify-icon>
                        <input type="text" autocomplete="name" .value=${t.name} placeholder=${e.namePh} @input=${e=>this._dhDraft("name",e)} />
                    </span>
                </label>

                <label class="pf-label">${e.email}
                    <span class="pf-field">
                        <iconify-icon icon="ri:mail-line"></iconify-icon>
                        <input type="email" autocomplete="email" .value=${t.email} placeholder=${e.emailPh} @input=${e=>this._dhDraft("email",e)} />
                    </span>
                </label>

                <label class="pf-label">${e.password}
                    <span class="pf-field">
                        <iconify-icon icon="ri:lock-password-line"></iconify-icon>
                        <input type=${this._showPw?"text":"password"} autocomplete="new-password" .value=${t.password} placeholder=${e.passwordPh} @input=${e=>this._dhDraft("password",e)} />
                        <button class="pf-eye" type="button" aria-label="toggle password" @click=${()=>this._showPw=!this._showPw}>
                            <iconify-icon icon=${this._showPw?"ri:eye-line":"ri:eye-off-line"}></iconify-icon>
                        </button>
                    </span>
                </label>

                <button class="pf-link" type="button" ?disabled=${!!this._busy} @click=${this._dhReset}>
                    <iconify-icon icon=${"reset"===this._busy?"ri:loader-4-line":"ri:key-2-line"} class=${"reset"===this._busy?"pf-spin":""}></iconify-icon>${e.resetPassword}
                </button>

                ${this._noticeTpl()}

                <button class="pf-btn pf-btn-main" type="submit" ?disabled=${!!this._busy}>
                    ${"save"===this._busy?i`<iconify-icon class="pf-spin" icon="ri:loader-4-line"></iconify-icon>`:s}${e.save}
                </button>
            </form>
        `}_language(){return i`
            ${this._subHead(this._txt.language)}
            <div class="pf-langs" role="radiogroup" aria-label=${this._txt.language}>
                ${E.map(e=>i`
                    <button class="pf-lang" type="button" role="radio" aria-checked=${e.code===this.lang?"true":"false"} @click=${()=>this._dhLang(e.code)}>
                        <iconify-icon class="pf-flag" icon=${e.flag}></iconify-icon>
                        <span class="pf-lang-label">${e.label}</span>
                        <span class="pf-radio ${e.code===this.lang?"is-on":""}"></span>
                    </button>
                `)}
            </div>
        `}_settings(){const e=this._txt,t=!1!==this.user.meta?.settings?.notifications;return i`
            ${this._subHead(e.settings)}
            ${this._row({icon:"ri:notification-3-line",label:e.notifications,sub:e.notificationsSub,onClick:()=>this._dhNotifications(),busy:"settings"===this._busy,trail:this._switch(t,e.notifications)})}
            ${this._row({icon:"ri:moon-line",label:e.darkMode,onClick:()=>this._dhTheme(),trail:this._switch("dark"===this.theme,e.darkMode)})}
            ${this._devices.length>1?this._row({icon:"ri:logout-circle-r-line",label:e.signOutOthers,onClick:()=>this._dhSignOutOthers(),busy:"others"===this._busy,trail:s}):s}
            ${this._row({icon:"ri:logout-box-r-line",label:e.signOut,onClick:()=>this._dhSignOut(),danger:!0,busy:"signout"===this._busy,trail:s})}
            ${this._noticeTpl()}
        `}render(){if(!this.user)return i``;const e={home:this._home,profile:this._profile,edit:this._edit,language:this._language,settings:this._settings}[this._view]??this._home;return i`<div class="pf">${o(this._view,i`<div class="pf-view">${e.call(this)}</div>`)}</div>`}};customElements.get("svc-profile")||customElements.define("svc-profile",C);var A=e({SvcAccount:()=>j,default:()=>j}),T=["vi","en"],j=class extends a{static shadowRootOptions={mode:"open"};static styles=[t(":host{justify-content:center;align-items:center;width:100%;display:flex}:host(:not([embedded])){display:contents}:host(:not([embedded])) web-popover{height:0;display:block}web-popover{--web-popover-max-height:min(640px, calc(100dvh - 6rem))}.acc-pop{box-sizing:border-box;justify-content:center;width:min(380px,100vw - 2rem);display:flex}")];static properties={ui:{type:String},theme:{type:String},lang:{type:String},guestOk:{type:Boolean},embedded:{type:Boolean,reflect:!0},x:{type:String},y:{type:String},_user:{state:!0},_ready:{state:!0}};constructor(){super(),this.ui="pastel",this.theme="dark",this.lang="vi",this.guestOk=!0,this.embedded=!1,this.x="99%",this.y="1rem",this._user=null,this._ready=!1}async connectedCallback(){super.connectedCallback();const e=d.get(h.THEME)??document.documentElement.getAttribute("data-theme"),i=d.get(h.LANGUAGE);"dark"!==e&&"light"!==e||(this.theme=e),T.includes(i)&&(this.lang=i),this._observer=new MutationObserver(()=>{const e=document.documentElement,i=e.getAttribute("data-theme"),t=e.getAttribute("lang");i&&i!==this.theme&&(this.theme=i),T.includes(t)&&t!==this.lang&&(this.lang=t)}),this._observer.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","lang"]}),this._setUser(await c.get()),this._ready=!0}disconnectedCallback(){super.disconnectedCallback(),this._observer?.disconnect()}_setUser(e){this._user=e??null,this.dispatchEvent(new CustomEvent("account-change",{detail:{user:this._user},bubbles:!0,composed:!0}))}_onLoginSuccess(e){this._setUser(e.detail.profile)}_onProfileUpdate(e){e.stopPropagation(),this._setUser(e.detail.user)}async _onSignOut(){await c.clear(),this._setUser(null)}_onThemeSelect(e){e.stopPropagation();const{theme:i}=e.detail;this.theme=i,document.documentElement.setAttribute("data-theme",i),d.set(h.THEME,i),this.dispatchEvent(new CustomEvent("theme-change",{detail:{theme:i},bubbles:!0,composed:!0}))}_onLangSelect(e){e.stopPropagation();const{lang:i}=e.detail;this.lang=i,document.documentElement.setAttribute("lang",i),d.set(h.LANGUAGE,i),this.dispatchEvent(new CustomEvent("lang-change",{detail:{lang:i},bubbles:!0,composed:!0}))}render(){if(!this._ready)return i``;if(this.embedded)return this._rbPanel();const e=this._user?"ri:account-circle-fill":"ri:user-3-line";return i`
            <web-popover ui=${this.ui} theme=${this.theme} lang=${this.lang} placement="bottom-end" placementGap="0">
                <web-fab slot="trigger" icon=${e} size="lg" rounded="50%" x=${this.x} y=${this.y} movable ui="modern" theme=${this.theme}
                    aria-label=${this._user?this._user.display_name||this._user.email||"Account":"Sign in"}></web-fab>
                <div class="acc-pop">${this._rbPanel()}</div>
            </web-popover>
        `}_rbPanel(){return this._user?i`<svc-profile .user=${this._user} ui=${this.ui} theme=${this.theme} lang=${this.lang}
                @sign-out=${this._onSignOut} @profile-update=${this._onProfileUpdate}
                @theme-select=${this._onThemeSelect} @lang-select=${this._onLangSelect}></svc-profile>`:i`<svc-auth embedded ?guestOk=${this.guestOk} ui=${this.ui} theme=${this.theme} lang=${this.lang} @login-success=${this._onLoginSuccess}></svc-auth>`}};customElements.get("svc-account")||customElements.define("svc-account",j);export{A as t};