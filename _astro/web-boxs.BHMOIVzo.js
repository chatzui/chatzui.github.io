const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/storager.DdM8yD0J.js","_astro/storager.uFgLUze8.js","_astro/rolldown-runtime.jxEyR9vv.js"])))=>i.map(i=>d[i]);
import{l as t,n as e,o as i,t as s,u as r}from"./lit.PcferLoS.js";import{t as o}from"./web-bg.CCCfD9-y.js";import"./iconify-icon.CciI8O2w.js";import{_ as n,a,d as l,f as c,i as d,m as p,p as h}from"./helper.B2FEs72b.js";import{a as m,n as g,o as u,r as f}from"./firestore.DjWoirgd.js";import"./web-button.DqiXRHrp.js";import"./web-photor-upload.DFENVXi1.js";import"./svc-player.0c4DEkhW.js";import{n as y,t as b}from"./web-letters.DSyBpbIU.js";import"./web-dropdown.CITdoRQG.js";import"./web-rating.DiAF4Eyq.js";import"./web-popover.AZu6mimJ.js";import"./web-slider.rAGwGhLx.js";import"./web-boxs-search.DuqKQELc.js";import"./web-steps.DDQLJlFE.js";import"./web-tabs.CsDKHUxC.js";import"./web-expansion.BwV1Mbxa.js";function $(t={}){const e="undefined"!=typeof localStorage?localStorage.getItem("token"):null;return{"Content-Type":"application/json",Accept:"application/json",...e?{Authorization:e}:{},...t}}var v=t=>new Promise(e=>setTimeout(e,t));async function w(t,e,i={},s={}){const{headers:r,retries:o=0,timeoutMs:n=1e4,...a}=s,l=t.toUpperCase(),c="GET"===l||"DELETE"===l,d=c&&Object.keys(i).length?`${e}${function(t){const e=new URLSearchParams;for(const[s,r]of Object.entries(t))null!=r&&""!==r&&e.set(s,String(r));const i=e.toString();return i?`?${i}`:""}(i)}`:e,p={method:l,headers:$(r),...a};c||(p.body=JSON.stringify(i));const h=async()=>{const t=await fetch(d,{...p,signal:AbortSignal.timeout(n)}),e=(t.headers.get("content-type")??"").includes("application/json")?await t.json():null;if(!t.ok){const i=new Error(e?.message||`HTTP ${t.status}`);throw i.status=t.status,i}return{ok:!0,statusCode:t.status,data:e}};try{return o?await async function(t,e){let i;for(let r=0;r<=e;r++)try{return await t()}catch(s){i=s,r<e&&await v(500*2**r)}throw i}(h,o):await h()}catch(m){switch(m?.status){case 404:return{ok:!1,statusCode:404,message:"Not found"};case 403:return{ok:!1,statusCode:403,message:"Auth expired"};case 401:return{ok:!1,statusCode:401,message:"Unauthorized"};default:return{ok:!1,statusCode:m?.status,message:m?.message}}}}var _=(t,e)=>e?String(e).split(".").reduce((t,e)=>t?.[e]??null,t):t,x=new Map;function S(t,e){if(x.has(t))return x.get(t);const i=e().finally(()=>x.delete(t));return x.set(t,i),i}var k=null,C=()=>k??=u(()=>import("./storager.DdM8yD0J.js").then(t=>t.default),__vite__mapDeps([0,1,2]));async function E(t){return(await C()).get(t)}async function j(t,e,i){return(await C()).set(t,e,6e4*i)}async function z(t){const e=String(t).split("|").map(t=>{const[e,i=""]=t.trim().split("~");return{url:e.trim(),nested:i.trim()}}).filter(t=>t.url),i=await Promise.all(e.map(async({url:t,nested:e})=>{const i=await w("GET",t,{},{retries:3});if(!i.ok)return console.warn(`[crud] API "${t}" failed:`,i.message),[];const s=e?_(i.data,e):i.data;return Array.isArray(s)?s:h(s)?[s]:[]}));return 1===e.length?i[0]:i.flat()}var A=(t,e)=>(t.endsWith("/")?t:t+"/")+e,T=(t,e,i)=>t&&e?A(t,e):e?`_fs_:${i||"firestore"}:${e}`:t||"";async function O(t,e,i){let s;if(t&&e)s=await z(A(t,e));else if(e)s=await async function(t,e){const i=String(t).split("|").map(t=>{const[e,i=""]=t.trim().split("~");return{name:e.trim(),nested:i.trim()}}).filter(t=>t.name),s=await Promise.all(i.map(async({name:t,nested:i})=>{try{const s=await I(e).find(t);return i?s.flatMap(t=>{const e=_(t,i);return Array.isArray(e)?e:null!=e?[e]:[]}):s}catch(s){return console.warn(`[crud] Firestore "${t}" failed:`,s.message),[]}}));return 1===i.length?s[0]:s.flat()}(e,i);else{if(!t)return[];s=await z(t)}return Array.isArray(s)?s:h(s)?[s]:[]}async function M({dataTable:t="",dataSrc:e="",cache:i=5,server:s=""}={}){try{if(!e&&!t)return[];const r=T(e,t,s),o=await S(r,()=>async function(t,e,i){if(!e)return i();const s=await E(t);if(null!==s)return s;const r=await i();return(Array.isArray(r)?r.length:null!=r)&&await j(t,r,e),r}(r,i,()=>O(e,t,s)));return Array.isArray(o)?o:[]}catch(r){return console.error("[crud] loadData failed:",r),[]}}var B={firestore:f,auth:g,invoices:m};function Y(t,e){B[t]=e}function I(t="firestore"){return B[t]??B.firestore}var D=class{constructor(t,e=""){this._endpoint=e?A(t,e):t}async findAll(t={}){const{page:e=1,limit:i=20,search:s="",sortBy:r="",order:o="asc",filters:n={}}=t,a={page:e,limit:i,...s?{search:s}:{},...r?{sortBy:r,order:o}:{},...n},l=await w("GET",this._endpoint,a);return l.ok?function(t,{page:e,limit:i}){if(Array.isArray(t))return{data:t,total:t.length,page:e,limit:i,totalPages:1};const s=Array.isArray(t?.data)?t.data:[],r=t?.total??s.length;return{data:s,total:r,page:t?.page??e,limit:t?.limit??i,totalPages:t?.totalPages??Math.ceil(r/i)}}(l.data,{page:e,limit:i}):{data:[],total:0,page:e,limit:i,totalPages:0}}async findById(t){const e=await w("GET",`${this._endpoint}/${t}`);return e.ok?e.data?.data??e.data??null:null}async create(t){const e=await w("POST",this._endpoint,t);if(!e.ok)throw new Error(e.message||`HTTP ${e.statusCode}`);return e.data?.data??e.data}async update(t,e){const i=await w("PATCH",`${this._endpoint}/${t}`,e);if(!i.ok)throw new Error(i.message||`HTTP ${i.statusCode}`);return i.data?.data??i.data}async delete(t){const e=await w("DELETE",`${this._endpoint}/${t}`);if(!e.ok)throw new Error(e.message||`HTTP ${e.statusCode}`)}},N=class{constructor(t,e="firestore"){this._table=t,this._server=e}_a(){return I(this._server)}now(){return this._a().now()}findAll(t={}){return this._a().find(this._table,t)}findById(t){return this._a().findById(this._table,t)}create(t){return this._a().add(this._table,t)}set(t,e){return this._a().set(this._table,t,e)}update(t,e){return this._a().put(this._table,t,e)}batch(t){return this._a().batch(this._table,t)}listen(t,e,i){return this._a().listen(this._table,t,e,i)}async delete(t){const e=await this.now();return this._a().put(this._table,t,{deleted_at:e,updated_at:e})}};function L(t,e="",i="firestore"){return e?new D(e,t):new N(t,i)}var P=[],F=0,X=null,R=globalThis.nanostoresGlobal||={epoch:0},W=t=>{let e=[],i={get:()=>(i.lc||i.listen(()=>{})(),i.value),init:t,lc:0,listen:t=>(i.lc=e.push(t),()=>{for(let e=F+4;e<P.length;)P[e]===t?P.splice(e,4):e+=4;let s=e.indexOf(t);~s&&(e.splice(s,1),--i.lc||i.off())}),notify(t,s){R.epoch++;let r=!P.length&&!0;for(let o of e)X?.has(o),X?.add(o),P.push(o,i,t,s);r&&(()=>{for(F=0;F<P.length;F+=4)P[F](P[F+1].value,P[F+2],P[F+3]);P.length=0})()},off(){},set(t){let e=i.value;e!==t&&(i.value=t,i.notify(e))},subscribe(t){let e=i.listen(t);return t(i.value),e},value:t};return i},q=W({}),G=new Map;function V(t,e){const i=q.get(),s=G.get(t),r=s?{...s,...e}:{id:t,...e};G.set(t,r),q.set({...i,sections:Array.from(G.values())})}function Q(t){const{url:e,dataSrc:i,dataTable:s="",cache:r=5,limit:o=0,filters:n,server:a=""}=t;return{src:i??e,dataTable:s,cache:r,limit:o,filters:n,server:a}}async function Z(t,e={}){const{src:i,dataTable:s,cache:r,limit:o,filters:n,server:a}=Q(e);if((i||s)&&!tt(t)?.data?.length){if(!o){const e=await M({dataSrc:i??"",dataTable:s,cache:r,server:a});return void(e.length&&V(t,{data:e}))}await U(t,{src:i,dataTable:s,cache:r,limit:o,filters:n,server:a})}}async function H(t,e={}){const{src:i,dataTable:s,cache:r,limit:o,filters:n,server:a}=Q(e);if(!o||!i&&!s)return;const l=tt(t);l&&!l._loadingMore&&!1!==l._hasMore&&await U(t,{src:i,dataTable:s,cache:r,limit:o,filters:n,server:a})}var J=(t,e,i)=>T(t,e,i)+":paged";function U(t,e){return S(`page:${t}`,()=>async function(t,{src:e,dataTable:i,cache:s,limit:r,filters:o,server:n}){const a=tt(t);if(!a&&s){const s=await E(J(e,i,n));if(s?.data?.length)return void V(t,s)}V(t,{_loadingMore:!0});try{const l=(a?._page??0)+1,{rows:c,hasMore:d,cursor:p}=e?await async function(t,e,i,s,r){const o=await L(e,t).findAll({page:i,limit:s,filters:r});return{rows:o.data,hasMore:i<o.totalPages,cursor:null}}(e,i,l,r,o):await async function(t,e,i,s,r){const o=await L(t,"",r).findAll({limit:i,cursor:e,filters:s});return{rows:o.data,hasMore:o.hasMore,cursor:o.cursor?.id??null}}(i,a?._cursor??null,r,o,n),h={data:[...a?.data??[],...c],_page:l,_cursor:p,_hasMore:d,_loadingMore:!1};V(t,h),s&&await j(J(e,i,n),h,s)}catch(l){console.error("[conductor] paginated fetch failed:",l),V(t,{_loadingMore:!1,_hasMore:!1})}}(t,e))}function K(t,e){V(t,e)}function tt(t){return G.get(t)??null}function et(t,e){let i=tt(t);return q.subscribe(()=>{const s=tt(t);s!==i&&(i=s,e(s))})}var it=".gi-container{box-sizing:border-box;width:100%;max-width:72rem;margin-inline:auto;padding-inline:1rem}.gi-wrap{box-sizing:border-box;grid-template-columns:repeat(12,1fr);gap:.5rem;width:100%;display:grid;position:relative}.gi-wrap.responsive,.responsive .gi-wrap{container-type:inline-size}.gi{position:relative}.gi-col-1,.gi-col-2,.gi-col-3,.gi-col-4,.gi-col-5,.gi-col-6,.gi-col-7,.gi-col-8,.gi-col-9,.gi-col-10,.gi-col-11,.gi-col-12{grid-column:span 12}@media (width>=1024px){.gi-col-1{grid-column:span 1}.gi-col-2{grid-column:span 2}.gi-col-3{grid-column:span 3}.gi-col-4{grid-column:span 4}.gi-col-5{grid-column:span 5}.gi-col-6{grid-column:span 6}.gi-col-7{grid-column:span 7}.gi-col-8{grid-column:span 8}.gi-col-9{grid-column:span 9}.gi-col-10{grid-column:span 10}.gi-col-11{grid-column:span 11}.gi-col-12{grid-column:span 12}}.responsive .gi-col-1,.responsive .gi-col-2,.responsive .gi-col-3,.responsive .gi-col-4,.responsive .gi-col-5,.responsive .gi-col-6,.responsive .gi-col-7,.responsive .gi-col-8,.responsive .gi-col-9,.responsive .gi-col-10,.responsive .gi-col-11,.responsive .gi-col-12{grid-column:span 12}@container (width>=35.5rem){.responsive .gi-col-1,.responsive .gi-col-2,.responsive .gi-col-3,.responsive .gi-col-4,.responsive .gi-col-5,.responsive .gi-col-6{grid-column:span 6}.responsive .gi-col-7{grid-column:span 7}.responsive .gi-col-8{grid-column:span 8}.responsive .gi-col-9{grid-column:span 9}.responsive .gi-col-10{grid-column:span 10}.responsive .gi-col-11{grid-column:span 11}}@container (width>=53.5rem){.responsive .gi-col-1,.responsive .gi-col-2,.responsive .gi-col-3,.responsive .gi-col-4{grid-column:span 4}.responsive .gi-col-5{grid-column:span 5}}@container (width>=71.5rem){.responsive .gi-col-1,.responsive .gi-col-2,.responsive .gi-col-3{grid-column:span 3}}@container (width>=107.5rem){.responsive .gi-col-1,.responsive .gi-col-2{grid-column:span 2}}@container (width>=215.5rem){.responsive .gi-col-1{grid-column:span 1}}.gi-row-1{grid-row:span 1}.gi-row-2{grid-row:span 2}.gi-row-3{grid-row:span 3}.gi-row-4{grid-row:span 4}.gi-row-5{grid-row:span 5}.gi-row-6{grid-row:span 6}.gi-row-7{grid-row:span 7}.gi-row-8{grid-row:span 8}.gi-row-9{grid-row:span 9}.gi-row-10{grid-row:span 10}.gi-row-11{grid-row:span 11}.gi-row-12{grid-row:span 12}.gi-masonry{column-gap:var(--masonry-gap,.5rem);position:relative}.gi-masonry .gi{break-inside:avoid;margin-bottom:var(--masonry-gap,.5rem);display:block}.gi-masonry.responsive,.responsive .gi-masonry{container-type:inline-size}.gi-masonry-1,.gi-masonry-2,.gi-masonry-3{columns:1}.gi-masonry-4,.gi-masonry-5,.gi-masonry-6,.gi-masonry-7,.gi-masonry-8,.gi-masonry-9,.gi-masonry-10,.gi-masonry-11,.gi-masonry-12{columns:2}@media (width>=768px){.gi-masonry-3,.gi-masonry-4{columns:2}.gi-masonry-5,.gi-masonry-6{columns:3}.gi-masonry-7,.gi-masonry-8,.gi-masonry-9{columns:4}.gi-masonry-10,.gi-masonry-11{columns:5}.gi-masonry-12{columns:6}}@media (width>=1024px){.gi-masonry-2{columns:2}.gi-masonry-3{columns:3}.gi-masonry-4{columns:4}.gi-masonry-5{columns:5}.gi-masonry-6{columns:6}.gi-masonry-7{columns:7}.gi-masonry-8{columns:8}.gi-masonry-9{columns:9}.gi-masonry-10{columns:10}.gi-masonry-11{columns:11}.gi-masonry-12{columns:12}}.gi-masonry-1.responsive,.responsive .gi-masonry-1,.gi-masonry-2.responsive,.responsive .gi-masonry-2,.gi-masonry-3.responsive,.responsive .gi-masonry-3{columns:1}.gi-masonry-4.responsive,.responsive .gi-masonry-4,.gi-masonry-5.responsive,.responsive .gi-masonry-5,.gi-masonry-6.responsive,.responsive .gi-masonry-6,.gi-masonry-7.responsive,.responsive .gi-masonry-7,.gi-masonry-8.responsive,.responsive .gi-masonry-8,.gi-masonry-9.responsive,.responsive .gi-masonry-9,.gi-masonry-10.responsive,.responsive .gi-masonry-10,.gi-masonry-11.responsive,.responsive .gi-masonry-11,.gi-masonry-12.responsive,.responsive .gi-masonry-12{columns:2}@container (width>=768px){.gi-masonry-3.responsive,.responsive .gi-masonry-3,.gi-masonry-4.responsive,.responsive .gi-masonry-4{columns:2}.gi-masonry-5.responsive,.responsive .gi-masonry-5,.gi-masonry-6.responsive,.responsive .gi-masonry-6{columns:3}.gi-masonry-7.responsive,.responsive .gi-masonry-7,.gi-masonry-8.responsive,.responsive .gi-masonry-8,.gi-masonry-9.responsive,.responsive .gi-masonry-9{columns:4}.gi-masonry-10.responsive,.responsive .gi-masonry-10,.gi-masonry-11.responsive,.responsive .gi-masonry-11{columns:5}.gi-masonry-12.responsive,.responsive .gi-masonry-12{columns:6}}@container (width>=1024px){.gi-masonry-2.responsive,.responsive .gi-masonry-2{columns:2}.gi-masonry-3.responsive,.responsive .gi-masonry-3{columns:3}.gi-masonry-4.responsive,.responsive .gi-masonry-4{columns:4}.gi-masonry-5.responsive,.responsive .gi-masonry-5{columns:5}.gi-masonry-6.responsive,.responsive .gi-masonry-6{columns:6}.gi-masonry-7.responsive,.responsive .gi-masonry-7{columns:7}.gi-masonry-8.responsive,.responsive .gi-masonry-8{columns:8}.gi-masonry-9.responsive,.responsive .gi-masonry-9{columns:9}.gi-masonry-10.responsive,.responsive .gi-masonry-10{columns:10}.gi-masonry-11.responsive,.responsive .gi-masonry-11{columns:11}.gi-masonry-12.responsive,.responsive .gi-masonry-12{columns:12}}",st=".fade-in{animation:1.2s cubic-bezier(.39,.575,.565,1) both fade-in}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.fade-in-fwd{animation:.6s cubic-bezier(.39,.575,.565,1) both fade-in-fwd}@keyframes fade-in-fwd{0%{opacity:0;transform:translateZ(-80px)}to{opacity:1;transform:translateZ(0)}}.fade-in-bck{animation:.6s cubic-bezier(.39,.575,.565,1) both fade-in-bck}@keyframes fade-in-bck{0%{opacity:0;transform:translateZ(80px)}to{opacity:1;transform:translateZ(0)}}.slide-in-blurred-left{animation:.6s cubic-bezier(.23,1,.32,1) both slide-in-blurred-left}@keyframes slide-in-blurred-left{0%{transform-origin:100%;filter:blur(40px);opacity:0;transform:translate(-1000px)scaleX(2.5)scaleY(.2)}to{transform-origin:50%;filter:blur();opacity:1;transform:translate(0)scaleY(1)scaleX(1)}}.slide-in-blurred-right{animation:.6s cubic-bezier(.23,1,.32,1) both slide-in-blurred-right}@keyframes slide-in-blurred-right{0%{transform-origin:0%;filter:blur(40px);opacity:0;transform:translate(1000px)scaleX(2.5)scaleY(.2)}to{transform-origin:50%;filter:blur();opacity:1;transform:translate(0)scaleY(1)scaleX(1)}}.slide-in-blurred-top{animation:.6s cubic-bezier(.23,1,.32,1) both slide-in-blurred-top}@keyframes slide-in-blurred-top{0%{transform-origin:50% 0;filter:blur(40px);opacity:0;transform:translateY(-1000px)scaleY(2.5)scaleX(.2)}to{transform-origin:50%;filter:blur();opacity:1;transform:translateY(0)scaleY(1)scaleX(1)}}.slide-in-blurred-bottom{animation:.6s cubic-bezier(.23,1,.32,1) both slide-in-blurred-bottom}@keyframes slide-in-blurred-bottom{0%{transform-origin:50% 100%;filter:blur(40px);opacity:0;transform:translateY(1000px)scaleY(2.5)scaleX(.2)}to{transform-origin:50%;filter:blur();opacity:1;transform:translateY(0)scaleY(1)scaleX(1)}}.tilt-in-tl{animation:.65s cubic-bezier(.25,.46,.45,.94) both tilt-in-tl}@keyframes tilt-in-tl{0%{opacity:0;transform:rotateY(35deg)rotateX(20deg)translate(-250px,-250px)skew(12deg,15deg)}to{opacity:1;transform:rotateY(0)rotateX(0)translate(0)skew(0deg)}}.tilt-in-tr{animation:.65s cubic-bezier(.25,.46,.45,.94) both tilt-in-tr}@keyframes tilt-in-tr{0%{opacity:0;transform:rotateY(-35deg)rotateX(20deg)translate(250px,-250px)skew(-12deg,-15deg)}to{opacity:1;transform:rotateY(0)rotateX(0)translate(0)skew(0deg)}}.tilt-in-bl{animation:.65s cubic-bezier(.25,.46,.45,.94) both tilt-in-bl}@keyframes tilt-in-bl{0%{opacity:0;transform:rotateY(35deg)rotateX(-20deg)translate(-250px,250px)skew(-12deg,-15deg)}to{opacity:1;transform:rotateY(0)rotateX(0)translate(0)skew(0deg)}}.tilt-in-br{animation:.65s cubic-bezier(.25,.46,.45,.94) both tilt-in-br}@keyframes tilt-in-br{0%{opacity:0;transform:rotateY(-35deg)rotateX(-20deg)translate(250px,250px)skew(12deg,15deg)}to{opacity:1;transform:rotateY(0)rotateX(0)translate(0)skew(0deg)}}.rotate-in-ccw{animation:.5s cubic-bezier(.25,.46,.45,.94) both rotate-in-ccw}@keyframes rotate-in-ccw{0%{opacity:0;transform:translateZ(200px)rotate(45deg)}to{opacity:1;transform:translateZ(0)rotate(0)}}.rotate-in-cw{animation:.5s cubic-bezier(.25,.46,.45,.94) both rotate-in-cw}@keyframes rotate-in-cw{0%{opacity:0;transform:translateZ(200px)rotate(-45deg)}to{opacity:1;transform:translateZ(0)rotate(0)}}.swirl-in-fwd{animation:.6s ease-out both swirl-in-fwd}@keyframes swirl-in-fwd{0%{opacity:0;transform:rotate(-540deg)scale(0)}to{opacity:1;transform:rotate(0)scale(1)}}.swirl-in-bck{animation:.65s ease-out both swirl-in-bck}@keyframes swirl-in-bck{0%{opacity:0;transform:rotate(540deg)scale(5)}to{opacity:1;transform:rotate(0)scale(1)}}.flip-in-diag-tl{animation:.5s cubic-bezier(.25,.46,.45,.94) both flip-in-diag-tl}@keyframes flip-in-diag-tl{0%{opacity:0;transform:rotate3d(-1,1,0,80deg)}to{opacity:1;transform:rotate3d(1,1,0,0)}}.flip-in-diag-tr{animation:.5s cubic-bezier(.25,.46,.45,.94) both flip-in-diag-tr}@keyframes flip-in-diag-tr{0%{opacity:0;transform:rotate3d(1,1,0,-80deg)}to{opacity:1;transform:rotate3d(1,1,0,0)}}.flip-in-diag-bl{animation:.5s cubic-bezier(.25,.46,.45,.94) both flip-in-diag-bl}@keyframes flip-in-diag-bl{0%{opacity:0;transform:rotate3d(1,1,0,80deg)}to{opacity:1;transform:rotate3d(1,1,0,0)}}.flip-in-diag-br{animation:.5s cubic-bezier(.25,.46,.45,.94) both flip-in-diag-br}@keyframes flip-in-diag-br{0%{opacity:0;transform:rotate3d(-1,1,0,-80deg)}to{opacity:1;transform:rotate3d(1,1,0,0)}}.bounce-in-left{animation:1.1s both bounce-in-left}@keyframes bounce-in-left{0%{opacity:0;animation-timing-function:ease-in;transform:translate(-600px)}38%{opacity:1;animation-timing-function:ease-out;transform:translate(0)}55%{animation-timing-function:ease-in;transform:translate(-68px)}72%{animation-timing-function:ease-out;transform:translate(0)}81%{animation-timing-function:ease-in;transform:translate(-28px)}90%{animation-timing-function:ease-out;transform:translate(0)}95%{animation-timing-function:ease-in;transform:translate(-8px)}to{animation-timing-function:ease-out;transform:translate(0)}}.bounce-in-right{animation:1.1s both bounce-in-right}@keyframes bounce-in-right{0%{opacity:0;animation-timing-function:ease-in;transform:translate(600px)}38%{opacity:1;animation-timing-function:ease-out;transform:translate(0)}55%{animation-timing-function:ease-in;transform:translate(68px)}72%{animation-timing-function:ease-out;transform:translate(0)}81%{animation-timing-function:ease-in;transform:translate(32px)}90%{animation-timing-function:ease-out;transform:translate(0)}95%{animation-timing-function:ease-in;transform:translate(8px)}to{animation-timing-function:ease-out;transform:translate(0)}}.bounce-in-top{animation:1.1s both bounce-in-top}@keyframes bounce-in-top{0%{opacity:0;animation-timing-function:ease-in;transform:translateY(-500px)}38%{opacity:1;animation-timing-function:ease-out;transform:translateY(0)}55%{animation-timing-function:ease-in;transform:translateY(-65px)}72%{animation-timing-function:ease-out;transform:translateY(0)}81%{animation-timing-function:ease-in;transform:translateY(-28px)}90%{animation-timing-function:ease-out;transform:translateY(0)}95%{animation-timing-function:ease-in;transform:translateY(-8px)}to{animation-timing-function:ease-out;transform:translateY(0)}}.bounce-in-bottom{animation:1.1s both bounce-in-bottom}@keyframes bounce-in-bottom{0%{opacity:0;animation-timing-function:ease-in;transform:translateY(500px)}38%{opacity:1;animation-timing-function:ease-out;transform:translateY(0)}55%{animation-timing-function:ease-in;transform:translateY(65px)}72%{animation-timing-function:ease-out;transform:translateY(0)}81%{animation-timing-function:ease-in;transform:translateY(28px)}90%{animation-timing-function:ease-out;transform:translateY(0)}95%{animation-timing-function:ease-in;transform:translateY(8px)}to{animation-timing-function:ease-out;transform:translateY(0)}}",rt=class extends s{static properties={src:{type:String},alt:{type:String},href:{type:String},loading:{type:Boolean},rounded:{type:String},float:{type:String},cls:{type:String},stys:{type:Object},ui:{type:String},reverse:{type:Boolean},blur:{type:Boolean},_open:{state:!0}};static styles=[r(":host{z-index:0;cursor:pointer;--core-font:var(--font-sans,system-ui);display:inline;position:relative}.gallery-single{overflow:hidden}.gallery-single img{width:100%;height:auto;display:block}.image-hover-zoom{transition:transform .3s ease-in-out;transform:scale(1)}.image-hover-zoom:hover{transform:scale(1.1)}.gallery-single.blur{background:#000;justify-content:center;align-items:center;width:100%;display:flex;position:relative;overflow:hidden}.gallery-single.blur .gsb-bg{filter:blur(40px);pointer-events:none;background-position:50%;background-repeat:no-repeat;background-size:cover;position:absolute;inset:0;transform:scale(1.1)}.gallery-single.blur img{z-index:1;width:auto;max-width:100%;height:auto;margin:0 auto auto;position:relative}.gallery-stack{cursor:pointer;user-select:none;aspect-ratio:4/3;width:100%;position:relative;overflow:hidden}.gallery-stack web-slider{width:100%;height:100%}dialog.gallery-dialog{background:#000000e0;border:none;width:100vw;max-width:100vw;height:100vh;max-height:100vh;margin:0;padding:0;display:none;position:fixed;inset:0}dialog.gallery-dialog[open]{justify-content:center;align-items:center;animation:.22s gallery-fade-in;display:flex}dialog.gallery-dialog::backdrop{display:none}@keyframes gallery-fade-in{0%{opacity:0}to{opacity:1}}.popup-inner{flex-direction:column;width:90vw;max-width:960px;height:80vh;display:flex;position:relative}.popup-close{color:#fff;cursor:pointer;z-index:10;background:#ffffff14;border:1.5px solid #ffffff59;border-radius:50%;justify-content:center;align-items:center;width:36px;height:36px;padding:0;transition:background .2s,border-color .2s;display:flex;position:absolute;top:-44px;right:0}.popup-close:hover{background:#fff3;border-color:#fff9}web-slider{width:100%;height:100%}")];constructor(){super(),this.src="",this.alt="",this.href="",this.loading=!1,this.rounded="4px",this.float="left",this.cls="",this.stys={},this.ui="modern",this.reverse=!1,this.blur=!1,this._open=!1}updated(t){if(!t.has("_open"))return;const e=this.shadowRoot?.querySelector("dialog.gallery-dialog");e&&(this._open&&!e.open?e.showModal():!this._open&&e.open&&e.close())}get _comImages(){return this.src?this.src.split("|").map(t=>t.trim()).filter(Boolean):[]}_dhClickSingle(){this.loading||this.dispatchEvent(new CustomEvent("clicked",{detail:{name:"gallery",value:this.src},bubbles:!0,composed:!0}))}_dhClickStack(){this.loading||(this._open=!0)}_dhCloseDialog(){this._open=!1}render(){const t=this._comImages;return 0===t.length?e:1===t.length?this._rbSingle(t[0]):i`${this._rbStack(t)}${this._rbDialog(t)}`}_rbSingle(t){if(this.loading)return i`<web-loader .stys=${{width:"100%","aspect-ratio":"1/1",height:"auto"}}></web-loader>`;const e=`border-radius:${this.rounded||"4px"};float:${this.float||"left"}`,s=this.blur?i`
                <div class="gallery-single blur" style="border-radius:${this.rounded||"4px"};${d(this.stys||{})};display:flex;justify-content:center;align-items:center">
                    <div class="gsb-bg" style="background-image:url(${t})"></div>
                    <img
                        src="${t}"
                        alt="${this.alt||""}"
                        class="${this.ui||""} ${this.cls||""}"
                        @click=${this._dhClickSingle}
                    />
                </div>`:i`
                <div class="gallery-single" style="${e}">
                    <img
                        src="${t}"
                        alt="${this.alt||""}"
                        class="${this.ui||""} ${this.cls||""} image-hover-zoom"
                        style="${d(this.stys||{})}"
                        @click=${this._dhClickSingle}
                    />
                </div>`;return this.href&&"#"!==this.href?i`<a href="${this.href}">${s}</a>`:s}_rbStack(t){return i`
            <div
                class="gallery-stack"
                @click=${this._dhClickStack}
                style="border-radius:${this.rounded||"4px"};${d(this.stys||{})}"
            >
                <web-slider
                    .images=${t}
                    ?nav=${!1}
                    ?dots=${!0}
                    ?loop=${!0}
                    .autoplay=${3e3}
                    ?reverse=${this.reverse}
                    justify="end"
                    placement="bottom"
                    .ui=${this.ui||"modern"}
                    ?blur=${this.blur}
                ></web-slider>
            </div>`}_rbDialog(t){return i`
            <dialog
                class="gallery-dialog"
                @close=${this._dhCloseDialog}
                @click=${t=>{t.target===t.currentTarget&&this._dhCloseDialog()}}
            >
                <div class="popup-inner">
                    <button class="popup-close" @click=${this._dhCloseDialog}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                    <web-slider
                        .images=${t}
                        ?nav=${!0}
                        ?dots=${!0}
                        ?loop=${!0}
                        .ui=${this.ui||"modern"}
                        ?blur=${this.blur}
                    ></web-slider>
                </div>
            </dialog>`}};customElements.get("web-gallery")||customElements.define("web-gallery",rt);var ot=class extends s{static properties={address:{type:String},lat:{type:String},lng:{type:String},zoom:{type:Number},rounded:{type:String},height:{type:String},stys:{type:Object},cls:{type:String}};static styles=[r(":host{width:100%;display:block}iframe{display:block}")];constructor(){super(),this.address="",this.lat="",this.lng="",this.zoom=15,this.rounded="12px",this.height="320px",this.stys={},this.cls=""}get _src(){const t=this.zoom||15;return this.lat&&this.lng?`https://maps.google.com/maps?q=${this.lat},${this.lng}&z=${t}&output=embed`:this.address?`https://maps.google.com/maps?q=${encodeURIComponent(this.address)}&z=${t}&output=embed`:""}render(){const t=this._src;if(!t)return e;const s=`width:100%;height:${this.height};border:0;border-radius:${this.rounded};${d(this.stys||{})}`;return i`
            <iframe
                class="${this.cls||""}"
                style="${s}"
                src="${t}"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        `}};customElements.get("web-google-map")||customElements.define("web-google-map",ot);var nt=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,at=(t,s,r,o=!0)=>t?s?i`<iconify-icon .icon=${t} style="${o?"pre"===r?"margin-right:0.375rem;":"margin-left:0.375rem;":""}vertical-align:middle;font-size:${s}"></iconify-icon>`:i`<span>${t}</span>`:e,lt=new Map,ct=class{static render(t,i={}){const s=(t=>lt.get(t)||null)(t);if(!s)return e;try{return s(i)}catch(r){return console.error(`[web-cell] render error [${t}]:`,r),e}}},dt=class extends s{static properties={theme:{type:String},mainColors:{type:String},textColor:{type:String},info:{type:Object},loading:{type:Boolean},justify:{type:String},makes:{type:Array},stys:{type:Object},ui:{type:String}};static styles=[t`
            :host { display: block; }
            .jf         { display: flex; flex-wrap: wrap; row-gap: 0.5rem; }
            .jf-left    { justify-content: flex-start; }
            .jf-center  { justify-content: center; }
            .jf-right   { justify-content: flex-end; }
            .jf-between { justify-content: space-between; }
            .jf-none    { display: block; }
            .jf-overflow{ overflow: hidden; }
        `,r(st)];updated(t){super.updated(t),(t.has("theme")||t.has("mainColors")||t.has("textColor"))&&this._applyCSS()}_applyCSS(){this.setAttribute("data-theme",this.theme||"light"),Object.entries(this._allStyles).forEach(([t,e])=>{t.startsWith("--")&&this.style.setProperty(t,e)})}get _colors(){const[t="#2ebd85",e="#f5465c",i="#a855f7",s="#00c7d4",r="#fbbf24"]=(this.mainColors||"").split("|").map(t=>t.trim());return{primary:t,secondary:e,accent:i,info:s,warning:r}}get _allStyles(){const t=this._colors;return{...this.stys,color:this.textColor||"","--color-primary":t.primary,"--color-secondary":t.secondary,"--color-accent":t.accent,"--color-info":t.info,"--color-warning":t.warning,"--color-base-content":this.textColor||""}}_nestedValue(t,e){if(e&&t)return e.split(".").reduce((t,e)=>t?.[e],t)}_renderItem(t){const{bit:e,ext:i={},opt:s={}}=t,r=s.mode||"p",o=void 0!==i.currency?n(e,i.lang,i.currency):i.location?l(e):e;"rating"===r&&(this._ratingRaw=e||"0~0");const a=t=>{if(!t||"#"===t)return"#";const e=this._nestedValue(this.info,t);return e&&"#"!==e?e:"#"},c={icon:{icon:e},rating:{value:"rating"===r&&parseFloat(String(e||"0~0").split("~")[0])||0},badge:{content:o},a:{content:i.label??o,href:a(i.org)},gallery:{src:e,alt:i.tip||i.cap||"",href:a(i.org)},"google-map":{address:l(e),...p(e)}},d="string"==typeof s.stys?this._nestedValue(this.info,s.stys)||{}:s.stys||{},h={cls:"",stys:{},ui:this.ui||"modern",...s,stys:d,opt:s,loading:this.loading,...c[r]||{content:o}};return ct.render(r.startsWith("web-")?r:`web-${r}`,h)}connectedCallback(){super.connectedCallback(),this._onClickedBound=t=>{const e=Array.isArray(this.makes)?this.makes.find(t=>t.opt?.action)?.opt?.action:null;let i=t?.detail?.value;if("rating"===t?.detail?.name&&void 0!==this._ratingRaw){const[t,e]=this._ratingRaw.split("~").map(Number);i=`${((t*e+i)/(e+1)).toFixed(1)}~${e+1}`}this.dispatchEvent(new CustomEvent("cell-action",{detail:{action:e||t?.detail?.name||"click",value:i,info:this.info},bubbles:!0,composed:!0}))},this.addEventListener("clicked",this._onClickedBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("clicked",this._onClickedBound)}render(){const t=this.info||{},e=this.makes||[],s=d(this._allStyles),r=`jf jf-${this.justify||"none"}`,o=e.length?e.map(e=>{const i=void 0!==e.bitLocal?e.bitLocal:this._nestedValue(t,e.bit);return{...e,bit:i}}):Object.entries(t).filter(([t])=>!["cls","justify"].includes(t)).map(([,t])=>({bit:"object"==typeof t?t.bit:t,ext:"object"==typeof t?t.ext:{},opt:"object"==typeof t?t.opt:{mode:"p"}}));return i`
            <div class="${this.theme||""} ${this.ui||"modern"} ${r}" style="${s}">
                ${o.map(t=>this._renderItem(t))}
            </div>
        `}};customElements.define("web-cell",dt);var pt=e=>class extends s{static properties={content:{type:String},loading:{type:Boolean},cls:{type:String},stys:{type:Object},ui:{type:String},prefix:{type:String},suffix:{type:String},iconSize:{type:String}};static styles=t`
        :host { display: block; cursor: pointer; }
        .h { margin: 0; padding: 0; line-height: 1.2; font-weight: 700; }
    `;_handleClick(){this.loading||this.dispatchEvent(new CustomEvent("clicked",{detail:{name:e,value:this.content},bubbles:!0,composed:!0}))}render(){const t=b(e);return y`
            <${t} class="h ${this.ui||""} ${this.cls||""}" style="${d({...this.stys||{}})}" @click=${this._handleClick}>
                ${at(this.prefix,this.iconSize,"pre",!!this.content)}
                ${this.loading?i`<web-loader width="${nt(30,90)}%" height="1em"></web-loader>`:this.content||""}
                ${at(this.suffix,this.iconSize,"suf",!!this.content)}
                <slot></slot>
            </${t}>`}},ht=class extends s{static properties={content:{type:String},loading:{type:Boolean},cls:{type:String},stys:{type:Object},ui:{type:String},prefix:{type:String},suffix:{type:String},iconSize:{type:String}};static styles=t`
        :host { display: block; cursor: pointer; }
        p { margin: 0; line-height: 1.25; text-align: justify; }
        .truncate { text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
    `;_handleClick(){this.loading||this.dispatchEvent(new CustomEvent("clicked",{detail:{name:"p",value:this.content},bubbles:!0,composed:!0}))}render(){return i`
            <p class="${this.ui||""} ${this.cls||""}" style="${d(this.stys||{})}" @click=${this._handleClick}>
                ${at(this.prefix,this.iconSize,"pre",!!this.content)}
                ${this.loading?i`<web-loader width="${nt(30,90)}%" height="1.35rem"></web-loader>`:this.content||""}
                ${at(this.suffix,this.iconSize,"suf",!!this.content)}
                <slot></slot>
            </p>`}};customElements.define("web-p",ht);var mt=class extends s{static properties={content:{type:String},href:{type:String},target:{type:String},loading:{type:Boolean},cls:{type:String},stys:{type:Object},ui:{type:String},prefix:{type:String},suffix:{type:String},iconSize:{type:String}};static styles=t`
        :host { display: inline; cursor: pointer; }
        a { text-decoration: none; color: inherit; transition: opacity 0.2s; }
        a:hover { opacity: 0.8; }
    `;render(){return this.loading?i`<web-loader width="${nt(30,70)}%" height="1.2rem"></web-loader>`:i`
            <a href="${this.href||"#"}" target="${this.target||"_self"}" class="${this.ui||""} ${this.cls||""}" style="${d(this.stys||{})}">
                ${at(this.prefix,this.iconSize,"pre",!!this.content)}
                ${this.content||""}
                ${at(this.suffix,this.iconSize,"suf",!!this.content)}
                <slot></slot>
            </a>`}};customElements.define("web-a",mt);var gt=(t,e={})=>({content:t.content,prefix:t.opt?.prefix,suffix:t.opt?.suffix,iconSize:t.opt?.iconSize,cls:t.cls,loading:t.loading,ui:t.ui,stys:{...e,...t.stys||{}},motion:t.opt?.motion??!1,effect:t.opt?.effect??"zoomIn",word:t.opt?.word??!1,loop:t.opt?.loop??!0,duration:t.opt?.duration??950,delay:t.opt?.delay??70}),ut=[{name:"web-p",render:t=>{const e=gt(t);return i`<web-letters tag="p"
            .content=${e.content} .prefix=${e.prefix} .suffix=${e.suffix} .iconSize=${e.iconSize}
            .cls=${e.cls} .loading=${e.loading} .stys=${e.stys} .ui=${e.ui}
            .motion=${e.motion} .effect=${e.effect} .word=${e.word}
            .loop=${e.loop} .duration=${e.duration} .delay=${e.delay}
        ></web-letters>`}},{name:"web-span",render:t=>{const e=gt(t,{display:"inline-block"});return i`<web-letters tag="span"
            .content=${e.content} .prefix=${e.prefix} .suffix=${e.suffix} .iconSize=${e.iconSize}
            .cls=${e.cls} .loading=${e.loading} .stys=${e.stys} .ui=${e.ui}
            .motion=${e.motion} .effect=${e.effect} .word=${e.word}
            .loop=${e.loop} .duration=${e.duration} .delay=${e.delay}
        ></web-letters>`}},{name:"web-a",render:t=>i`<web-a .content=${t.content} .prefix=${t.opt?.prefix} .suffix=${t.opt?.suffix} .iconSize=${t.opt?.iconSize} .href=${t.href} .target=${t.target} .cls=${t.cls} .loading=${t.loading} .stys=${t.stys} .ui=${t.ui}></web-a>`},{name:"web-gallery",render:t=>i`<web-gallery .src=${t.src} .alt=${t.alt} .href=${t.href} .cls=${t.cls} .rounded=${t.rounded} .float=${t.float} .loading=${t.loading} .stys=${t.stys} .ui=${t.ui} ?blur=${!!t.blur}></web-gallery>`},{name:"web-google-map",render:t=>i`<web-google-map .address=${t.address} .lat=${t.lat} .lng=${t.lng} .zoom=${t.opt?.zoom} .rounded=${t.opt?.rounded} .height=${t.opt?.height} .stys=${t.stys} .cls=${t.cls}></web-google-map>`},{name:"web-player",render:t=>{const e=t.opt||{};return i`<svc-player
                .src=${t.content}
                .poster=${e.poster||""}
                .control=${e.control??!1}
                .autoPlay=${e.autoPlay??!1}
                .mute=${e.mute??!1}
                .loops=${e.loops??!1}
                .fill=${e.fill??!1}
                .ratio=${e.ratio??16/9}
                .rounded=${e.rounded??"8px"}
                .ui=${t.ui}
                style=${d(t.stys||{})}
            ></svc-player>`}},{name:"web-icon",render:t=>t.loading?i`<web-loader width="24px" height="24px"></web-loader>`:i`<iconify-icon icon="${t.icon}" class="${t.ui||""} ${t.cls||""}" style="${d({fontSize:t.size||"1.5rem",color:t.color||"inherit",...t.stys||{}})}"></iconify-icon>`},{name:"web-button",render:t=>{const e=t.opt||{};return i`<web-button
                .type=${e.type||""} .color=${e.color} .height=${e.height} .rounded=${e.rounded}
                .square=${e.square} .prefix=${e.prefix} .suffix=${e.suffix} .iconSize=${e.iconSize}
                .fontSize=${e.fontSize} .loading=${t.loading} .disabled=${t.disabled||e.disabled}
                .stys=${t.stys||{}} .ui=${t.ui}
            >${t.content||e.text}</web-button>`}},{name:"web-rating",render:t=>i`<web-rating .value=${t.value} .max=${t.max} .half=${t.half??!0} .size=${t.size} .mask=${t.mask} .color=${t.color} .disabled=${t.disabled} .prefix=${t.opt?.prefix} .suffix=${t.opt?.suffix} .iconSize=${t.opt?.iconSize} .cls=${t.cls} .loading=${t.loading} .stys=${t.stys} .ui=${t.ui}></web-rating>`},{name:"web-badge",render:t=>{const{color:e="",type:s="fill"}=t.opt||{};return i`<web-button mode="badge" .color=${e} .type=${s} .loading=${t.loading} .stys=${t.stys||{}} .ui=${t.ui} .prefix=${t.opt?.prefix} .suffix=${t.opt?.suffix} .iconSize=${t.opt?.iconSize}>${t.content}</web-button>`}},{name:"web-tags",render:t=>{const{color:e="primary",type:s="fill",gap:r="0.5rem"}=t.opt||{},o=Array.isArray(t.content)?t.content:"string"==typeof t.content?t.content.split("|").filter(Boolean):[];return i`<div style="display:flex;flex-wrap:wrap;gap:${r};${d(t.stys||{})}">
                ${o.map(r=>i`<web-button mode="badge" .color=${e} .type=${s} .ui=${t.ui}>${r}</web-button>`)}
            </div>`}},{name:"web-dropdown",render:t=>{const{items:e=[],label:s="",icon:r="",placement:o="",placementGap:n,...a}=t.opt||{},l=t.content||"",c="string"==typeof l&&l.includes(":");return i`<web-dropdown
                .label=${c?s:l||s}
                .icon=${c?l:t.icon||r}
                .items=${t.items||e}
                .loading=${t.loading} .cls=${t.cls} .stys=${t.stys} .ui=${t.ui}
                .placement=${o} .placementGap=${n} .opt=${a}
            ></web-dropdown>`}},{name:"web-photor-upload",render:t=>i`<web-photor-upload
            .value=${t.content??""}
            .multiple=${t.opt?.multiple??!1}
            .placeholder=${t.opt?.placeholder??"Upload ảnh..."}
            .height=${t.opt?.height??"36px"}
            .ui=${t.ui}
        ></web-photor-upload>`},{name:"web-popover",render:t=>{const{placement:e="",placementGap:s}=t.opt||{};return i`<web-popover .placement=${e} .placementGap=${s} .ui=${t.ui} .loading=${t.loading} .stys=${t.stys}>
                <iconify-icon slot="trigger" icon="${t.icon||"ri:information-line"}" style="cursor:pointer;vertical-align:middle;font-size:${t.iconSize||"1.25rem"};color:${t.iconColor||"inherit"}"></iconify-icon>
                ${t.content||""}
            </web-popover>`}}];["h1","h2","h3","h4","h5","h6"].forEach(t=>{customElements.define(`web-${t}`,pt(t)),ut.push({name:`web-${t}`,render:e=>{const s=gt(e);return i`<web-letters tag="${t}"
            .content=${s.content} .prefix=${s.prefix} .suffix=${s.suffix} .iconSize=${s.iconSize}
            .cls=${s.cls} .loading=${s.loading} .stys=${s.stys} .ui=${s.ui}
            .motion=${s.motion} .effect=${s.effect} .word=${s.word}
            .loop=${s.loop} .duration=${s.duration} .delay=${s.delay}
        ></web-letters>`}})}),ut.forEach(t=>{return e=t.name,i=t.render,lt.set(e,i);var e,i});var ft=class extends s{static properties={dataSrc:{type:String},dataTable:{type:String},data:{type:Object,converter:{fromAttribute:t=>a(t,{})}},theme:{type:String},mainColors:{type:String},textColor:{type:String},makes:{type:Array,converter:{fromAttribute:t=>a(t,[])}},groupJustify:{type:Array,converter:{fromAttribute:t=>a(t,[])}},groupStyle:{type:Array,converter:{fromAttribute:t=>a(t,[])}},groupCol:{type:Array,converter:{fromAttribute:t=>a(t,[])}},groupRow:{type:Array,converter:{fromAttribute:t=>a(t,[])}},stys:{type:Object},loader:{type:Number},refresh:{type:Boolean},anime:{type:String},ui:{type:String}};static styles=[r(it),r(st)];constructor(){super(),this.resData={},this.theme="light",this.stys={},this.anime="fade-in-fwd",this.ui="modern"}connectedCallback(){super.connectedCallback(),void 0===this.refresh&&(this.refresh=!0)}willUpdate(t){t.has("data")&&h(this.data)&&Object.keys(this.data).length>0?(this.resData=this.data,this.loader=2,this.refresh=!1):(t.has("refresh")||t.has("dataSrc")||t.has("dataTable"))&&this.boxIO(),(t.has("theme")||t.has("mainColors")||t.has("textColor"))&&this.updateCSS()}get colors(){const t=(this.mainColors||"").split("|").map(t=>t.trim());return{primary:t[0]||"#2ebd85",secondary:t[1]||"#f5465c",accent:t[2]||"#a855f7",info:t[3]||"#00c7d4",warning:t[4]||"#fbbf24"}}get allStyles(){const t=this.colors;return{...this.stys,color:this.textColor||"","--color-primary":t.primary,"--color-secondary":t.secondary,"--color-accent":t.accent,"--color-info":t.info,"--color-warning":t.warning,"--color-base-content":this.textColor||""}}updateCSS(){this.setAttribute("data-theme",this.theme||"light");const t=this.allStyles;Object.entries(t).forEach(([t,e])=>{t.startsWith("--")&&this.style.setProperty(t,e)})}async boxIO(){if(!this.refresh)return;this.loader=1;const t=await this.boxData();h(t)&&(this.resData=t,this.refresh=!1)}async boxData(){try{let t={};if(this.dataSrc||this.dataTable){const e=T(this.dataSrc,this.dataTable);await Z(e,{dataSrc:this.dataSrc,dataTable:this.dataTable}),t=tt(e)?.data?.[0]??{}}else h(this.data)&&(t=this.data);return this.loader=2,t}catch{return this.loader=0,{}}}render(){const t=this.makes||[],e=this.groupJustify||[],s=this.groupCol||[],r=this.groupRow||[],o=this.groupStyle||[],n=d(this.allStyles),a=new Set(["overflow","position","top","right","bottom","left","inset","zIndex"]);return i`
			<div data-theme=${this.theme} class="gi-wrap ${this.ui||""} ${this.anime||""}" style="${n}">
				${t.map((n,l)=>{const c=parseInt(s[l]),p=parseInt(r[l]),h=["gi",isNaN(c)?"":`gi-col-${c}`,isNaN(p)?"":`gi-row-${p}`].filter(Boolean).join(" "),m=o[l]||{},g=Object.fromEntries(Object.entries(m).filter(([t])=>a.has(t))),u=Object.fromEntries(Object.entries(m).filter(([t])=>!a.has(t)));return i`
						<web-cell
							class=${h}
							style=${d(g)}
							.mainColors=${this.mainColors}
							.textColor=${this.textColor}
							.info=${this.resData}
							.makes=${t[l]}
							.justify=${e[l]||"none"}
							.stys=${u}
							.loading=${2!==this.loader}
							.theme=${this.theme}
							.ui=${this.ui}></web-cell>
					`})}
			</div>
		`}};customElements.define("web-box",ft);var yt={vi:{empty:"Không có dữ liệu"},en:{empty:"No data"}},bt=class extends s{static properties={data:{type:Array,converter:{fromAttribute:t=>a(t,[])}},dataSrc:{type:String},dataTable:{type:String},loadLimit:{type:Number},config:{type:Object,converter:{fromAttribute:t=>a(t,{})}},col:{type:Number},list:{type:String},masonry:{type:Boolean},responsive:{type:Boolean},stysWrap:{type:Object,converter:{fromAttribute:t=>a(t,{})}},bg:{type:Object,converter:{fromAttribute:t=>a(t,{})}},ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},animeQueue:{type:String},search:{type:String},refresh:{type:Boolean},loader:{type:Number},showSearch:{type:Boolean},filterState:{type:Object},resData:{state:!0},_isVisible:{state:!0},_filterActive:{state:!0},_filterQuery:{state:!0},txt:{type:Object},lang:{type:String}};createRenderRoot(){return this}static styles=[r(it)];constructor(){super(),this.resData=[],this.refresh=!0,this.loadLimit=0,this._paging=!1,this._autoContinueCount=0,this.loader=0,this.animeQueue="200ms",this.ui="modern",this.masonry=!1,this._isVisible=!1,this._filterActive=[],this._filterQuery="",this.theme=document.documentElement.getAttribute("data-theme")||"light",this.txt=null,this.lang="vi",this._injectStyles()}_injectStyles(){c("web-boxs-styles",it)}connectedCallback(){super.connectedCallback(),this.hasAttribute("theme")||(this.theme=document.documentElement.getAttribute("data-theme")||"light",this._themeObserver=new MutationObserver(()=>{this.theme=document.documentElement.getAttribute("data-theme")||"light"}),this._themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),this._io=new IntersectionObserver(t=>{t[0].isIntersecting&&(this._isVisible=!0,this._io.disconnect())},{threshold:.3}),this._io.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._themeObserver?.disconnect(),this._io?.disconnect(),this._loadMoreObs?.disconnect(),this._unsubConductor?.()}updated(){if(!this.loadLimit)return;const t=this.querySelector("[data-loadmore-sentinel]");t&&(this._loadMoreObs??=new IntersectionObserver(([t])=>{t.isIntersecting&&(this._autoContinueCount=0,this._loadMore())},{rootMargin:"200px"}),this._loadMoreObs.observe(t))}willUpdate(t){t.has("data")?(this.resData=Array.isArray(this.data)?this.data:this.data?[this.data]:[],this.refresh=!1):(t.has("refresh")||t.has("dataSrc")||t.has("dataTable"))&&(t.has("dataTable")&&(this.refresh=!0),this._loadData()),t.has("filterState")&&(this._filterActive=this.filterState?.active||[],this._filterQuery=this.filterState?.query||"")}async _loadData(){if(!this.refresh)return;this._unsubConductor?.();const t=T(this.dataSrc,this.dataTable);if(t){this.loader=1;try{await Z(t,{dataSrc:this.dataSrc,dataTable:this.dataTable,limit:this.loadLimit}),this.resData=tt(t)?.data??[],this._unsubConductor=et(t,t=>{this.resData=t?.data??[]}),this.loader=2}catch{this.loader=0}this.refresh=!1}else this.refresh=!1}get _hasMore(){return!!this.loadLimit&&!1!==tt(T(this.dataSrc,this.dataTable))?._hasMore}async _loadMore(t=!1){if(!this._paging&&this.loadLimit&&this._hasMore&&!(t&&this._autoContinueCount>=20)){this._paging=!0;try{await H(T(this.dataSrc,this.dataTable),{dataSrc:this.dataSrc,dataTable:this.dataTable,limit:this.loadLimit}),await this.updateComplete}finally{this._paging=!1}this._hasMore&&this._sentinelInView()&&(this._autoContinueCount++,this._loadMore(!0))}}_sentinelInView(){const t=this.querySelector("[data-loadmore-sentinel]");if(!t)return!1;const e=t.getBoundingClientRect();return e.top<window.innerHeight+200&&e.bottom>-200}_sentinelEl(){return this.loadLimit?i`<div data-loadmore-sentinel style="height:1px"></div>`:""}_onFilter(t){const{active:e,query:i,field:s}=t.detail;this._filterActive=e||[],this._filterQuery=i||"",this.dispatchEvent(new CustomEvent("filter",{detail:{sectionId:this.filterState?.sectionId,active:e,query:i,field:s},bubbles:!0,composed:!0}))}_applyFilter(t){let e=Array.isArray(t)?[...t]:[];if(this.search){const t=this.search.toLowerCase();e=e.filter(e=>JSON.stringify(e).toLowerCase().includes(t))}if(this._filterActive.length>0||this._filterQuery){const t=this.filterState?.field||"tags";if(this._filterActive.length>0&&(e=e.filter(e=>{const i=e[t],s=Array.isArray(i)?i:"string"==typeof i?i.split("|").filter(Boolean):[];return this._filterActive.some(t=>s.includes(t))})),this._filterQuery){const t=this._filterQuery.toLowerCase();e=e.filter(e=>JSON.stringify(e).toLowerCase().includes(t))}}return e}get _config(){const t=this.config||{};return{...t,mainColors:t[this.theme]}}get _respCls(){return this.responsive?"responsive":""}_colDef(t){return this.responsive?1:t}_toObj(t){return h(t)?t:{}}_rowCls(t,e=0){const i=Array.isArray(t)?t:[t],s=parseInt(i[e%i.length]);return isNaN(s)?"":`gi-row-${s}`}_renderWrapped(t){return i`<div style="${d(this.stysWrap)}">${t}</div>`}_searchEl(){if(!this.showSearch)return"";const t=this.filterState||{},e=this._applyFilter(this.resData);return i`
      <div class="mb-4 text-center">
        <web-boxs-search
          .items=${this.resData}
          .tags=${t.tags||[]}
          .field=${t.field||"tags"}
          .color=${t.color||"primary"}
          .ui=${this.ui}
          .active=${this._filterActive}
          .query=${this._filterQuery}
          @filter=${this._onFilter}
          class="mb-4"
        ></web-boxs-search>
        ${0===e.length?this.filterState?.emptyText||this._txt.empty||"No data":""}
      <div>
    `}_bgEl(t){return o(t)}_boxEl(t,e,s,r){const o=e*(parseInt(this.animeQueue)||200)+"ms";return i`
      <web-box
        .data=${t}
        .makes=${s.makes}
        .groupCol=${s.groupCol}
        .groupRow=${s.groupRow}
        .groupJustify=${s.groupJustify}
        .groupStyle=${s.groupStyle}
        .mainColors=${this.mainColors||s.mainColors}
        .textColor=${this.textColor||s.textColor}
        .stys=${{...s.stys||{},animationDelay:o,opacity:this._isVisible?"":"0"}}
        .bg=${s.bg}
        .anime=${this._isVisible?s.anime||"fade-in-fwd":""}
        .responsive=${this.responsive}
        .theme=${this.theme}
        .ui=${r}
      ></web-box>
    `}_isListBlock(t){return!!(t.masonry||t.cards||t.slider||t.steps||t.tabs||t.expansion)}_renderTierBlock(t,e,i,s){return t.masonry?this._comMasonryEl(t.masonry,t,e,"",s):t.cards?this._comCardsEl(t.cards,t,e,"",s):t.slider?this._comSliderEl(t.slider,t,e,"",s):t.steps?this._comStepsEl(this._toObj(t.steps),t,e,i,s):t.tabs?this._comTabsEl(this._toObj(t.tabs),t,e,i,s):t.expansion?this._comExpansionEl(this._toObj(t.expansion),t,e,i,s):null}_renderTiers(t,e,s,r){const o=t.tiersCol||[],n=t.tiersRow||[],a=t.tiersStys||[];return t.tiers.flatMap((t,l)=>{const c=o[l]??12,p=Array.isArray(c)?c[0]:c,h=this._rowCls(n[l]),m=d(a[l]||{}),g=(t,e)=>["gi",`gi-col-${t}`,e].filter(Boolean).join(" ");if(Array.isArray(t)){const o=t[0]||{},a=t=>i`<div class="${g(p,h)}" style="${m}">${t}</div>`;if(t.length>1&&t.some(t=>this._isListBlock(t))){const s=t.find(t=>t.wrapBg)?.wrapBg;return a(i`${s?this._bgEl(s):""}${t.map(t=>{const i=t.dataKey?e[0]?.[t.dataKey]??[]:e;return this._isListBlock(t)?this._renderTierBlock({...t,wrapBg:null},i,"",r):this._boxEl(e[0]??{},0,t,r)})}`)}const d=o.dataKey?e[0]?.[o.dataKey]??[]:e,u=this._renderTierBlock(o,d,s,r);if(u)return a(u);const f=Array.isArray(c)?c:[c];return t.flatMap((t,e)=>{const s=f[e%f.length],o=t.bg?this._bgEl(t.bg):"";return d.map((a,c)=>i`
            <div class="${g(s,this._rowCls(n[l],e))}" style="${m}">${o}${this._boxEl(a,c,t,r)}</div>
          `)})}const u=t.bg?this._bgEl(t.bg):"";return i`
        <div class="${g(p,h)}" style="${m}">${u}${this._boxEl(e[0]??{},0,t,r)}</div>
      `})}_renderMasonry(t,e,s,r){const o=this.stysWrap?.gap??this.stysWrap?.columnGap??null,n=o?`--masonry-gap:${o}`:"";return i`
      <div class="gi-masonry gi-masonry-${this._colDef(this.col||3)} ${this._respCls}" style="${n}">
        ${e.map((e,o)=>i`<div class="gi">${s}${this._boxEl(e,o,t,r)}</div>`)}
      </div>
      ${this._sentinelEl()}
    `}_renderSlider(t,e,s,r){return i`
      <div class="gi-wrap ${this._respCls}" style="${d(this.stysWrap)}">
        ${this._comSliderEl(t.slider||{},t,e,s,r,this._colDef(this.col||12))}
      </div>
    `}_renderSteps(t,e,i,s){return this._renderWrapped(this._comStepsEl(this._toObj(t.steps),t,e,i,s))}_renderTabs(t,e,i,s){return this._renderWrapped(this._comTabsEl(this._toObj(t.tabs),t,e,i,s))}_renderExpansion(t,e,i,s){return this._renderWrapped(this._comExpansionEl(this._toObj(t.expansion),t,e,i,s))}_renderGrid(t,e,s,r){const o=`gi gi-col-${this._colDef(this.col||12)}`;return i`
      <div class="gi-wrap ${this._respCls}" style="${d(this.stysWrap)};position:relative">
        ${e.map((e,n)=>i`
          <div class="${o}">${s}${this._boxEl(e,n,t,r)}</div>
        `)}
      </div>
      ${this._sentinelEl()}
    `}_comMasonryEl(t,e,s,r,o){const n="object"==typeof t&&t.col||3,a="object"==typeof t&&t.gap||null,l=a?`--masonry-gap:${a}`:"",c=e.bg?this._bgEl(e.bg):"";return i`
      <div class="gi-masonry gi-masonry-${n}" style="${l}">
        ${s.map((t,s)=>i`<div class="gi">${c}${this._boxEl(t,s,e,o)}</div>`)}
      </div>
    `}_comCardsEl(t,e,s,r,o){const n=t.col||12,a=void 0!==t.gap?`gap:${t.gap};`:"",l=void 0!==t.padding?`padding:${t.padding};`:"",c=e.bg?this._bgEl(e.bg):"";return i`
      <div class="gi-wrap" style="${a}${l}">
        ${e.wrapBg?this._bgEl(e.wrapBg):""}
        ${s.map((t,s)=>i`
          <div class="gi gi-col-${n}">${c}${this._boxEl(t,s,e,o)}</div>
        `)}
      </div>
    `}_comSliderEl(t,e,s,r,o,n=12){const a=e.bg?this._bgEl(e.bg):r;return i`
      <web-slider class="gi-col-12" style="display:none"
        .autoplay=${t.autoplay} .marquee=${!!t.marquee} .reverse=${!!t.reverse} .loop=${t.loop}
        .mode=${t.mode} .vertical=${t.vertical} .slides=${t.slides||12/n}
        .spacing=${t.spacing||0} .nav=${t.nav} .dots=${t.dots} .origin=${t.origin}
        .effect=${t.effect||""} ?blur=${!!t.blur} .maxHeight=${t.maxHeight||""}
      >${s.map((t,s)=>i`
        <div class="gi gi-col-${n}">${a}${this._boxEl(t,s,e,o)}</div>
      `)}</web-slider>
    `}_comTabsEl(t,e,s,r,o){const n=this._comNavItems(s,t);return i`
      <web-tabs
        .tabs=${n}
        .active=${t.active||n[0]?.id||""}
        .ui=${o}
        .theme=${this.theme}
        .mainColors=${this.mainColors}
        .align=${t.align||"left"}
        .size=${t.size||"md"}
      >${this._comNavSlots(n,s,e,r,o,t.pack)}</web-tabs>
    `}_comStepsEl(t,e,s,r,o){const n=this._comNavItems(s,t);return i`
      <web-steps
        .steps=${n}
        .active=${t.active||n[0]?.id||""}
        .ui=${o}
        .theme=${this.theme}
        .mainColors=${this.mainColors}
        .size=${t.size||"md"}
      >${this._comNavSlots(n,s,e,r,o,t.pack)}</web-steps>
    `}_comExpansionEl(t,e,s,r,o){const n=this._comNavItems(s,t);return i`
      <web-expansion
        .panels=${n}
        .active=${t.active||t.openFirst&&n[0]?.id||""}
        ?multiple=${!!t.multiple}
        .ui=${o}
        .theme=${this.theme}
        .mainColors=${this.mainColors}
        .size=${t.size||"md"}
      >${this._comNavSlots(n,s,e,r,o,t.pack)}</web-expansion>
    `}_comNavItems(t,e={}){const i=e.pack||1;if(i>1){const s=[];for(let r=0;r<t.length;r+=i){const i=t[r];s.push({id:i[e.idField]??`item-${s.length}`,label:i[e.labelField]??`Item ${s.length+1}`,icon:i[e.iconField],status:i[e.statusField]})}return s}return t.map((t,i)=>({id:t[e.idField]??`item-${i}`,label:t[e.labelField]??`Item ${i+1}`,icon:t[e.iconField],status:t[e.statusField]}))}_comNavSlots(t,e,s,r,o,n=1){if(n>1){const a=Math.round(12/n),l=[];for(let t=0;t<e.length;t+=n)l.push(e.slice(t,t+n));const c=s.bg?this._bgEl(s.bg):r;return t.map((t,e)=>i`
        <div slot="${t.id}">
          <div class="gi-wrap">
            ${(l[e]||[]).map((t,r)=>i`
              <div class="gi gi-col-${a}">${c}${this._boxEl(t,e*n+r,s,o)}</div>
            `)}
          </div>
        </div>
      `)}return t.map((t,n)=>i`
      <div slot="${t.id}">${r}${this._boxEl(e[n],n,s,o)}</div>
    `)}get _txt(){const t=this.txt??yt;return t[this.lang]??t.vi??{}}render(){const t=this._config,e=t?.ui||this.ui,s=this._applyFilter(this.resData),r=this.bg&&Object.keys(this.bg).length?this.bg:t.bg,o=r?this._bgEl(r):"";let n;return n=t.tiers?.length?i`<div class="gi-wrap ${this._respCls}" style="${d({...t.stys||{},...this.stysWrap})}">${this._renderTiers(t,s,o,e)}</div>`:this.masonry?this._renderMasonry(t,s,o,e):t.slider||"slider"===this.list?this._renderSlider(t,s,o,e):t.steps||"steps"===this.list?this._renderSteps(t,s,o,e):t.tabs||"tabs"===this.list?this._renderTabs(t,s,o,e):t.expansion||"expansion"===this.list?this._renderExpansion(t,s,o,e):this._renderGrid(t,s,o,e),i`${this._searchEl()}${n}`}};customElements.get("web-boxs")||customElements.define("web-boxs",bt);export{H as a,L as c,K as i,Y as l,Z as n,q as o,tt as r,et as s,it as t};