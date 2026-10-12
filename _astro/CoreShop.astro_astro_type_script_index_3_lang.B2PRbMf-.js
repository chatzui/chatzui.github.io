import{a as t,c as e,t as i}from"./lit.DdxAWBw5.js";import{C as s,T as o,s as r}from"./util.7B3q8i3m.js";import"./web-dialog.7qqH-8ji.js";import"./web-fab.DV1Z2bBF.js";import{C as a,O as n}from"./service.KBw7q2XG.js";import"./svc-pie.B63BWoWx.js";import"./svc-graph.DF6kWlnp.js";var l={vi:{btnTitle:"Thống kê",dialogTitle:"Thống kê bán hàng",customers:"Khách hàng",orders:"Đơn hàng thành công",revenue:"Doanh thu",avgOrder:"Giá trị TB/đơn",revenueByFulfillment:"Doanh thu theo hình thức nhận hàng",fulfillmentDelivery:"Giao hàng",fulfillmentPickup:"Tự đến lấy",topProducts:"Top sản phẩm bán chạy theo ngày",loading:"Đang tải dữ liệu…",noData:"Chưa có dữ liệu"},en:{btnTitle:"Statistics",dialogTitle:"Sales statistics",customers:"Customers",orders:"Successful orders",revenue:"Revenue",avgOrder:"Avg. order value",revenueByFulfillment:"Revenue by fulfillment",fulfillmentDelivery:"Delivery",fulfillmentPickup:"Self pickup",topProducts:"Top selling products by day",loading:"Loading data…",noData:"No data yet"}},c=[["#2dd4bf","#0ea5e9"],["#818cf8","#7c3aed"],["#f472b6","#c026d3"],["#fbbf24","#f97316"],["#34d399","#059669"]],h=class extends i{static styles=e(":host{display:contents}.stat-loading,.stat-empty{text-align:center;opacity:.6;padding:2rem 0;font-size:.875rem}.stat-wrap{flex-direction:column;gap:1rem;display:flex}.stat-kpi-grid{grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:.75rem;display:grid}.stat-kpi-card{background:color-mix(in oklab, var(--color-base-200) 50%, transparent);border:1px solid color-mix(in oklab, var(--color-base-content) 10%, transparent);border-radius:.75rem;padding:.875rem 1rem}.stat-kpi-label{opacity:.5;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.375rem;font-size:.72rem;font-weight:700}.stat-kpi-value{color:var(--color-primary);font-size:1.375rem;font-weight:800}.stat-charts{grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1rem;display:grid}");static properties={ui:{type:String},theme:{type:String},lang:{type:String},mainColors:{type:String},textColor:{type:String},sellerId:{type:String},txt:{type:Object},position:{type:String},x:{type:String},y:{type:String},_show:{state:!0},_loading:{state:!0},_invoices:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.lang="vi",this.mainColors="",this.textColor="",this.sellerId="",this.txt=null,this.position="static",this.x="99%",this.y="1rem",this._show=!1,this._loading=!1,this._invoices=[]}connectedCallback(){super.connectedCallback(),this._unwatchLang=o("lang",t=>{this.lang=t||"vi"})}disconnectedCallback(){super.disconnectedCallback(),this._unwatchLang?.()}get _txt(){return s(this.txt,l,this.lang)}async _dhOpen(){if(this._show=!0,this.sellerId){this._loading=!0;try{this._invoices=await a(this.sellerId)??[]}catch(t){console.error("[svc-pay-stats] load error:",t)}finally{this._loading=!1}}}_dhClose(){this._show=!1}get _comCompleted(){return this._invoices.filter(t=>"received"===t.meta?.sub)}get _comOrderCount(){return this._comCompleted.length}get _comRevenue(){return this._comCompleted.reduce((t,e)=>t+(Number((e.summary||"").split("~")[2])||0),0)}get _comAvgOrder(){return this._comOrderCount>0?Math.round(this._comRevenue/this._comOrderCount):0}get _comCustomers(){return new Set(this._comCompleted.map(t=>t.buyer_id).filter(Boolean)).size}get _comFulfillmentBreakdown(){const t=new Map;for(const i of this._comCompleted){const e="pickup"===i.meta?.fulfillment?"pickup":"delivery",s=Number((i.summary||"").split("~")[2])||0;t.set(e,(t.get(e)??0)+s)}const e={delivery:this._txt.fulfillmentDelivery,pickup:this._txt.fulfillmentPickup};return[...t.entries()].map(([t,i])=>[e[t]??t,i])}get _comTopProducts(){const t=new Map;for(const e of this._comCompleted)for(const i of n(e.items))i.name&&t.set(i.name,(t.get(i.name)??0)+i.price*i.qty);return[...t.entries()].sort(([,t],[,e])=>e-t).slice(0,5)}get _comTopProductsByDay(){const t=this._comTopProducts.map(([t])=>t),e=new Map;for(const s of this._comCompleted){const i=(s.issued_at||"").slice(0,10);if(i)for(const o of n(s.items)){if(!t.includes(o.name))continue;const s=e.get(i)??{};s[o.name]=(s[o.name]??0)+o.price*o.qty,e.set(i,s)}}const i=[...e.keys()].sort();return{products:t,source:[["Ngày",...t],...i.map(i=>{const s=e.get(i)??{};return[i,...t.map(t=>s[t]??0)]})]}}render(){return t`
            <web-fab icon="ri:bar-chart-2-line" position=${this.position} x=${this.x} y=${this.y} movable=${"fixed"===this.position}
                ui=${"fixed"===this.position?"modern":this.ui} size="lg" theme=${this.theme} title=${this._txt.btnTitle}
                @click=${()=>this._dhOpen()}>
            </web-fab>
            <web-dialog ?open=${this._show} title=${this._txt.dialogTitle} lang=${this.lang} maxWidth="900px"
                ui=${this.ui} theme=${this.theme}
                @close=${()=>this._dhClose()}>
                ${this._loading?t`<div class="stat-loading">${this._txt.loading}</div>`:this._rbStats()}
            </web-dialog>
        `}_rbStats(){return t`
            <div class="stat-wrap">
                <div class="stat-kpi-grid">
                    ${this._rfKpi(this._txt.customers,String(this._comCustomers))}
                    ${this._rfKpi(this._txt.orders,String(this._comOrderCount))}
                    ${this._rfKpi(this._txt.revenue,r(this._comRevenue,this.lang))}
                    ${this._rfKpi(this._txt.avgOrder,r(this._comAvgOrder,this.lang))}
                </div>
                ${0===this._comOrderCount?t`<p class="stat-empty">${this._txt.noData}</p>`:t`
                    <div class="stat-charts">
                        ${this._rfFulfillmentPie()}
                        ${this._rfTopProductsGraph()}
                    </div>
                `}
            </div>
        `}_rfFulfillmentPie(){return t`
            <svc-pie ui=${this.ui} theme=${this.theme} .mainColors=${this.mainColors}
                title=${this._txt.revenueByFulfillment} height="320px"
                .option=${{dataset:{source:[["Hình thức nhận hàng",this._txt.revenue],...this._comFulfillmentBreakdown]},tooltip:{trigger:"item"},series:[{type:"pie",radius:["40%","70%"],padAngle:5,itemStyle:{borderRadius:10}}]}}
            ></svc-pie>
        `}_rfTopProductsGraph(){const{products:e,source:i}=this._comTopProductsByDay,s=e.map((t,e)=>{const[i,s]=c[e%c.length];return{name:t,type:"bar",stack:"total",smooth:!0,symbol:"circle",label:{show:!0,formatter:t=>r(t.value,this.lang)},areaStyle:{opacity:1,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:i},{offset:1,color:s}]}}}}),o=e.map((t,e)=>c[e%c.length][0]).join("|");return t`
            <svc-graph ui=${this.ui} theme=${this.theme} main-colors=${o}
                title=${this._txt.topProducts} height="320px" table
                .option=${{tooltip:{trigger:"axis"},dataset:{source:i},xAxis:{type:"category"},yAxis:{type:"value"},series:s}}
            ></svc-graph>
        `}_rfKpi(e,i){return t`
            <div class="stat-kpi-card">
                <div class="stat-kpi-label">${e}</div>
                <div class="stat-kpi-value">${i}</div>
            </div>
        `}};customElements.get("svc-pay-stats")||customElements.define("svc-pay-stats",h);