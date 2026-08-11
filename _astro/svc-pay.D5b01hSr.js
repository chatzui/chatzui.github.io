const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/storager.CYok621C.js","_astro/rolldown-runtime.jxEyR9vv.js"])))=>i.map(i=>d[i]);
import{o as e,t,u as i}from"./lit.PcferLoS.js";import"./iconify-icon.CciI8O2w.js";import{b as r,c as n,g as o,o as s,s as a,v as l,y as c}from"./helper.D6LK5q_e.js";import{o as h}from"./firestore.BKaOfW4e.js";import{n as d,o as p,r as m,s as u}from"./conductor.CDFx3OLm.js";import"./web-text.BARBkaQj.js";import"./web-button.CowA0wj5.js";import"./web-dialog.RV46KU0d.js";import"./web-photor-upload.B4D-lKSP.js";import"./web-location-map.Ca5YeIZP.js";import"./web-textarea.Bydi_7tV.js";import"./web-toast.BxP0k1aK.js";import"./web-steps.DrW8L-1L.js";import"./web-expansion.BwV1Mbxa.js";import"./web-alert.DST4Xu-0.js";import"./web-fab.CuwEGYP8.js";import"./web-tooltip.HMGFHWOO.js";import"./web-toggle.CG9fEZbG.js";var b=["order","processing","delivery"],g={order:["placing","paying"],processing:["preparing","cancelled","done"],delivery:["packing","shipping","delivered","received","returned"]},f=3e5,y={vi:{order:{label:"Đặt hàng",placing:"Đặt hàng",paying:"Thanh toán"},processing:{label:"Xử lý đơn hàng",preparing:"Đang chuẩn bị hàng",cancelled:"Đã huỷ",done:"Đã hoàn thành"},delivery:{label:"Vận chuyển",packing:"Đóng gói",shipping:"Giao hàng",delivered:"Đã giao hàng",received:"Đã nhận hàng",returned:"Trả hàng"}},en:{order:{label:"Order",placing:"Place order",paying:"Payment"},processing:{label:"Processing",preparing:"Preparing",cancelled:"Cancelled",done:"Completed"},delivery:{label:"Delivery",packing:"Packing",shipping:"Shipping",delivered:"Delivered",received:"Received",returned:"Returned"}}},v={vi:{placing:"Chọn hình thức thanh toán và xác nhận đơn hàng.",paying:"Thanh toán trong vòng 5 phút, sau đó chờ xác nhận từ 2 bên.",preparing:"Người bán đang chuẩn bị hàng cho bạn.",cancelled:"Đơn hàng đã bị huỷ.",done:"Đơn hàng đã xử lý xong, chuẩn bị giao.",packing:"Đơn hàng đang chờ được đóng gói và giao đi.",shipping:"Đơn hàng đang được vận chuyển tới bạn.",delivered:"Người bán đã giao hàng, chờ người mua xác nhận.",received:"Người mua đã nhận hàng, giao dịch hoàn tất.",returned:"Đơn hàng đang được trả lại."},en:{placing:"Pick a payment method and confirm the order.",paying:"Pay within 5 minutes, then wait for both sides to confirm.",preparing:"The seller is preparing your order.",cancelled:"This order has been cancelled.",done:"Processing complete, getting ready to ship.",packing:"Order is waiting to be packed and shipped.",shipping:"Order is on its way to you.",delivered:"Seller marked this as delivered, waiting on buyer confirmation.",received:"Buyer confirmed receipt — transaction complete.",returned:"This order is being returned."}},_={vi:{roleLabel:"Xem với vai trò",roleBuyer:"Người mua",roleSeller:"Người bán",continueToPayment:"Tiếp tục thanh toán",countdownLabel:"Thời gian còn lại",countdownExpired:"Đã hết thời gian thanh toán",completeProcessing:"Hoàn thành xử lý",sellerPreparingNote:"Người bán đang chuẩn bị hàng.",cancelOrder:"Huỷ đơn",cancelHint:"Đơn hàng có thể được huỷ bởi người bán hoặc người mua.",cancelledBy:"Huỷ bởi",cancelReasonPh:"Lý do huỷ đơn...",sellerCancelHint:"Bạn có thể chủ động huỷ đơn này nếu cần.",sellerCancelReasonPh:"Lý do huỷ đơn (phía người bán)...",sellerCancelOrder:"Huỷ đơn này",confirmCancel:"Xác nhận huỷ",reasonLabel:"Lý do",refundPendingNote:"Đơn hàng cần được hoàn tiền lại cho người mua.",refundDoneNote:"Đã hoàn tiền cho người mua.",confirmRefundLabel:"Xác nhận đã hoàn tiền",continueToDelivery:"Chuyển sang đóng gói",confirmPacked:"Đóng gói và chuyển cho đơn vị giao hàng",confirmShipped:"Đang giao hàng",confirmReceived:"Đã nhận hàng",sellerPackingNote:"Người bán đang đóng gói hàng.",courierShippingNote:"Đơn vị giao hàng đang giao đơn hàng của bạn.",shipperCallHint:"Shipper có thể gọi điện khi đến giao hàng — vui lòng chú ý điện thoại.",confirmDelivery:"Xác nhận đã giao",returnOrder:"Trả hàng",returnReasonPh:"Lý do trả hàng...",confirmReturn:"Xác nhận trả hàng",returnedNote:"Đơn hàng đã được trả lại",orderPreparedNote:"Đơn hàng đã chuẩn bị xong.",transactionDone:"Giao dịch đã hoàn tất.",orderItemsEmpty:"Chưa có sản phẩm nào trong đơn.",totalLabel:"Tổng tiền",backToCart:"← Quay lại giỏ hàng",myOrder:"Đơn của tôi",autoConfirmLabel:"Tự động xác nhận đã nhận hàng sau",invoiceLookupHint:"Quét mã QR hoặc lưu lại mã đơn để tra cứu đơn hàng bất cứ lúc nào.",deliveryToggleLabel:"Giao hàng",customerRequiredHint:"Vui lòng nhập đầy đủ họ tên, số điện thoại và địa chỉ nhận hàng ở trên để tiếp tục.",pastStepDoneAt:e=>`Hoàn tất lúc ${e}`,handlerNamePh:"Tên người xử lý (tuỳ chọn)",handlerPhonePh:"Số điện thoại (tuỳ chọn)",handlerNotePh:"Ghi chú (tuỳ chọn)...",returnMediaPh:"Dán/upload ảnh minh chứng hàng trả (tuỳ chọn)",deliveryMediaPh:"Dán/upload ảnh minh chứng đã giao (tuỳ chọn)",handledByLabel:"Xử lý bởi",deliveredByLabel:"Đã giao hàng bởi"},en:{roleLabel:"View as",roleBuyer:"Buyer",roleSeller:"Seller",continueToPayment:"Continue to payment",countdownLabel:"Time remaining",countdownExpired:"Payment window expired",completeProcessing:"Complete processing",sellerPreparingNote:"The seller is preparing your order.",cancelOrder:"Cancel order",cancelHint:"Either the seller or the buyer can cancel this order.",cancelledBy:"Cancelled by",cancelReasonPh:"Reason for cancelling...",sellerCancelHint:"You can cancel this order yourself if needed.",sellerCancelReasonPh:"Reason for cancelling (seller side)...",sellerCancelOrder:"Cancel this order",confirmCancel:"Confirm cancel",reasonLabel:"Reason",refundPendingNote:"This order needs to be refunded to the buyer.",refundDoneNote:"The buyer has been refunded.",confirmRefundLabel:"Confirm refund sent",continueToDelivery:"Move to packing",confirmPacked:"Packed and handed over to the carrier",confirmShipped:"Out for delivery",confirmReceived:"Received",sellerPackingNote:"The seller is packing your order.",courierShippingNote:"The carrier is delivering your order.",shipperCallHint:"The shipper may call you on arrival — please keep an eye on your phone.",confirmDelivery:"Confirm delivered",returnOrder:"Return order",returnReasonPh:"Reason for return...",confirmReturn:"Confirm return",returnedNote:"This order has been returned",orderPreparedNote:"The order has been prepared.",transactionDone:"Transaction complete.",orderItemsEmpty:"No items in this order yet.",totalLabel:"Total",backToCart:"← Back to cart",myOrder:"My order",autoConfirmLabel:"Auto-confirm received in",invoiceLookupHint:"Scan the QR code or save this order code to look it up anytime.",deliveryToggleLabel:"Delivery",customerRequiredHint:"Please fill in full name, phone, and delivery address above to continue.",pastStepDoneAt:e=>`Completed at ${e}`,handlerNamePh:"Handler name (optional)",handlerPhonePh:"Phone number (optional)",handlerNotePh:"Note (optional)...",returnMediaPh:"Paste/upload proof photo (optional)",deliveryMediaPh:"Paste/upload delivery proof photo (optional)",handledByLabel:"Handled by",deliveredByLabel:"Delivered by"}},x={vi:{cancelPendingBanner:"Yêu cầu huỷ đơn đang chờ người bán xử lý.",cancelRejectedBanner:"Người bán đã từ chối yêu cầu huỷ đơn.",cancelRejectReasonLabel:"Lý do từ chối",cancelRetry:"Gửi lại yêu cầu huỷ",wardenTitle:"Danh sách đơn hàng",wardenEmpty:"Chưa có đơn hàng nào đã thanh toán.",wardenColInvoice:"Mã đơn",wardenColItems:"Sản phẩm",wardenColBuyer:"Người nhận",wardenColSeller:"Người bán",wardenColStep:"Quy trình",wardenColActions:"Hành động",wardenConfirmPayment:"Xác nhận đã nhận thanh toán",wardenConfirmReceived:"Xác nhận đã nhận hàng",wardenAcceptCancel:"Chấp nhận huỷ",wardenRejectCancel:"Từ chối huỷ",wardenRejectReasonPh:"Lý do từ chối huỷ đơn...",wardenCancelPending:"Khách yêu cầu huỷ",wardenViewDetail:"Xem chi tiết",wardenOpenTab:"Mở ở tab mới",notApplicablePickup:"Đơn nhận tại quầy — không qua bước này.",wardenNewOrderToast:"Có đơn hàng mới cần xử lý!",wardenSellerCancelledToast:"Người bán đã huỷ đơn hàng của bạn.",wardenCancelRejectedToast:"Người bán đã từ chối yêu cầu huỷ đơn của bạn.",wardenCancelAcceptedToast:"Yêu cầu huỷ đơn của bạn đã được chấp nhận.",wardenConfirmRefund:"Xác nhận đã hoàn tiền"},en:{cancelPendingBanner:"Cancellation request pending seller review.",cancelRejectedBanner:"The seller rejected the cancellation request.",cancelRejectReasonLabel:"Rejection reason",cancelRetry:"Request cancellation again",wardenTitle:"Orders",wardenEmpty:"No paid orders yet.",wardenColInvoice:"Invoice",wardenColItems:"Items",wardenColBuyer:"Buyer",wardenColSeller:"Seller",wardenColStep:"Progress",wardenColActions:"Actions",wardenConfirmPayment:"Confirm payment received",wardenConfirmReceived:"Confirm received",wardenAcceptCancel:"Accept cancel",wardenRejectCancel:"Reject cancel",wardenRejectReasonPh:"Reason for rejecting the cancellation...",wardenCancelPending:"Buyer requested cancellation",wardenViewDetail:"View detail",wardenOpenTab:"Open in new tab",notApplicablePickup:"Pickup order — this step is skipped.",wardenNewOrderToast:"New order needs processing!",wardenSellerCancelledToast:"The seller cancelled your order.",wardenCancelRejectedToast:"The seller rejected your cancellation request.",wardenCancelAcceptedToast:"Your cancellation request was accepted.",wardenConfirmRefund:"Confirm refund sent"}},$=[{value:"cash",label:"Tiền mặt",icon:"ion:cash-outline"},{value:"momo",label:"MoMo",icon:"ri:heart-2-line"},{value:"bank",label:"Chuyển khoản",icon:"ri:bank-line"}],w=(e,t={})=>"momo"===e?t.phone??"":t.accountNo??"",k=[{code:"CAFE10",type:"percent",discount:10,label:"Giảm 10%",minOrder:1e5,maxDiscount:2e4},{code:"CAFE20",type:"percent",discount:20,label:"Giảm 20%",minOrder:2e5,maxDiscount:4e4},{code:"GIAM50K",type:"fixed",discount:5e4,label:"Giảm 50.000đ",minOrder:3e5},{code:"FLASHSALE",type:"fixed",discount:3e4,label:"Giảm 30.000đ",minOrder:3e5}],C=[{code:"FREE100",type:"percent",discount:100,label:"Miễn phí 100%"},{code:"FREE50",type:"percent",discount:50,label:"Miễn phí 50%"}];function P(e,t){return p(e,e=>{e&&t(e)})}function S(e={}){const t=Date.now();return{order_id:e.id||r(),bay_id:e.bayId??"",seller_id:e.sellerId??"",buyer_id:e.buyerId??"",items:e.items??[],amount:(e.items??[]).reduce((e,t)=>e+Number(t.price??0)*Number(t.qty??1),0),currency:"VND",major:"order",sub:"placing",payment_id:null,buyer_confirmed:!1,seller_confirmed:!1,fulfillment:"pickup",created_at:t,expires_at:null,updated_at:t}}function I(e,t={}){!function(e){if(T.has(e))return;T.add(e),async function(e){const{default:t}=await h(async()=>{const{default:e}=await import("./storager.CYok621C.js").then(e=>e.n);return{default:e}},__vite__mapDeps([0,1])),i=await t.get(R(e));if(!i?.order_id)return;const r=d(e);r&&"placing"===r.sub&&!r.items?.length&&m(e,i)}(e),p(e,t=>{t&&h(async()=>{const{default:e}=await import("./storager.CYok621C.js").then(e=>e.n);return{default:e}},__vite__mapDeps([0,1])).then(({default:i})=>{i.set(R(e),t,0)})})}(e);const i=d(e);if(i?.order_id)return i;const r=S(t);return m(e,r),r}var T=new Set,R=e=>`pay_order_${e}`;function D(e){return e.reduce((e,t)=>e+Number(t.qty??1)*Number(t.price??0),0)}function M(e,t){const i=d(e);if(!i||"placing"!==i.sub&&"paying"!==i.sub)return;const r=t??[],n="paying"===i.sub;m(e,{items:r,amount:D(r),updated_at:Date.now(),...n?{sub:"placing",expires_at:null}:{}})}function j(){return u("invoices","","invoices")}function q(e){return(e||"").split("|").filter(Boolean).map(e=>{const[t,i,r,n]=e.split("~");return{name:t,price:Number(i)||0,unit:r,qty:Number(n)||0}})}function N(e){const[t="",i="",r="",n=""]=(e||"").split("~");return{name:t,phone:i,address:r,email:n}}function L(e){const t=(e||"").split("~");return{name:t[3]||"",phone:t[4]||"",address:t[5]||"",email:t[6]||"",taxCode:t[7]||""}}function O(e,{role:t,sellerId:i,bayId:r}={}){if(!e||"undefined"==typeof window)return"";const n=new URLSearchParams({id:e});return"seller"===t&&(i&&n.set("sellerId",i),r&&n.set("bayId",r)),`${window.location.origin}/channel/invoice?${n.toString()}`}function B(e={},t=!1){const i=[e.at??Date.now(),(e.name??"").trim(),(e.phone??"").trim(),(e.note??"").trim()];return t&&i.push((e.media??"").trim()),i.join("~")}function A(e){const[t,i="",r="",n="",o=""]=(e||"").split("~");return{at:Number(t)||0,name:i,phone:r,note:n,media:o}}function F(e){const t=d("pay_customer")?.entries??[],i=t.find(e=>e.isDefault)??t[0]??{},r=(i.location??"").split("~").filter(Boolean).join(", ");return[i.fullName??"",i.phone??"",r,i.email??"","",e??""].join("~")}function E(e,t){const[i="",r="",n="",o="",s=""]=(e??"").split("~");return["","","",i,r,n,o,s,t??""].join("~")}async function z(e,t,i,r={}){const n=j(),o=await n.findById(e);if(!o)return null;const s=o.meta??{};if(t&&!t(s,o))return null;const a="function"==typeof i?i(s,o):i,l={...s,...a},c=Date.now();try{await n.update(e,{meta:l,...r})}catch(h){return console.error("[pay] _patchInvoiceMeta Firestore error:",h),null}return{...o,meta:l,...r,_patchedAt:c}}function U(e){let t=null,i=!1;return e.then(e=>{i?e():t=e}),()=>{i=!0,t?.(),t=null}}function H(e,t,i){return U(j().listen({},i=>t(i.find(t=>t.id===e)??null),i))}function Q(e){return j().findAll({filters:{seller_id:e}})}function V(e,t,i){return U(j().listen({filters:{seller_id:e}},t,i))}function G(e){return j().findAll({filters:{buyer_id:e}})}function X(e,t,i){return U(j().listen({filters:{buyer_id:e}},t,i))}function W(e){return"order"===e.major&&"paying"===e.sub&&e.buyer_confirmed&&!e.seller_confirmed}function Y(e){return"delivery"===e.major&&"delivered"===e.sub}function K(e){return["cancelled","returned"].includes(e.sub)&&!e.refunded}function J(e,t={}){return z(e,e=>W(e),{major:"processing",sub:"preparing",seller_confirmed:!0,preparing:B(t)})}function Z(e,t={}){return z(e,e=>"delivered"===e.sub,{sub:"received",received:B(t)})}function ee(e,t={}){return z(e,e=>"pending"===e.subStatus,{sub:"cancelled",subStatus:"buyer_cancelled",sellerCancelled:B(t)},{status:"cancelled"})}function te(e,t={}){return z(e,e=>K(e),()=>({refunded:B(t)}))}function ie(e,t,i={}){const r=(t??"").trim();return r?z(e,e=>"pending"===e.subStatus,{subStatus:"rejected",sellerCancelled:B({...i,note:r})}):null}var re=new Set,ne=null,oe=!1;function se(){oe||(oe=!0,document.addEventListener("cell-action",e=>{const{action:t,info:i}=e.detail??{};if("add-to-cart"!==t||!i?.id||!ne)return;const r=Number((i.pricing||"").split("~")[0])||0,n=i.meta?.price??i.price??r;!function(e,t){const i=d(e);if(!i)return;const r=i.items??[];m(e,{items:r.find(e=>e.id===t.id)?r.map(e=>e.id===t.id?{...e,qty:e.qty+1}:e):[...r,{...t,qty:1}]})}(ne,{id:i.id,name:i.title??i.name,price:n,formattedPrice:i.meta?.formattedPrice??i.formattedPrice,img:i.pics??i.img}),m(ne,{open:!0})}))}function ae(e){ne=e,se(),re.has(e)||(re.add(e),async function(e){const{default:t}=await h(async()=>{const{default:e}=await import("./storager.CYok621C.js").then(e=>e.n);return{default:e}},__vite__mapDeps([0,1])),[i,r]=await Promise.all([t.get(`paycart_${e}`),t.get(`paycart_promos_${e}`)]);Array.isArray(i)&&i.length&&m(e,{items:i});Array.isArray(r)&&r.length&&m(e,{promos:r});p(e,i=>{i&&(t.set(`paycart_${e}`,i.items??[],0),t.set(`paycart_promos_${e}`,i.promos??[],0))})}(e))}function le(e,t){const i=d(e);i&&m(e,{items:(i.items??[]).filter(e=>e.id!==t)})}var ce={entries:[],payment:{cards:[],banks:[]}};function he(){return{id:Date.now().toString(),fullName:"",phone:"",email:"",location:"",isDefault:!1}}async function de({fullName:e="",email:t="",phone:i="",location:r=""}={},n="pay_customer"){if(!(e||t||i||r))return;const{default:o}=await h(async()=>{const{default:e}=await import("./storager.CYok621C.js").then(e=>e.n);return{default:e}},__vite__mapDeps([0,1])),s=await o.get(n)??{...ce},a=(s.entries??[]).length?s.entries.map(n=>n.isDefault?{...n,fullName:n.fullName||e,email:n.email||t,phone:n.phone||i,location:n.location||r}:n):[{...he(),fullName:e,email:t,phone:i,location:r,isDefault:!0}],l={...ce,...s,entries:a};m(n,l),await o.set(n,l,0)}function pe(e,t){const i={...ce,...t};m(e,i),h(async()=>{const{default:e}=await import("./storager.CYok621C.js").then(e=>e.n);return{default:e}},__vite__mapDeps([0,1])).then(({default:t})=>t.set(e,i,0))}function me(e,t){const i=d(e);return i&&t(i),p(e,e=>{e&&t(e)})}var ue={vi:{label:"Mã khuyến mãi",ph:"Nhập mã giảm giá",apply:"Áp dụng",applied:"đã được áp dụng",errInvalid:"Mã không hợp lệ hoặc đã hết hạn",errMinOrder:"Đơn tối thiểu",errUsedUp:"Mã đã hết lượt sử dụng",createBtn:"Tạo mã",createTitle:"Tạo mã khuyến mãi mới",suggestLabel:"Mẫu có sẵn — bấm để điền nhanh",createSpecialTitle:"Tạo voucher gửi riêng",createSpecialBtn:"Gửi voucher",existingLabel:"Mã khuyến mãi đang tồn tại",remainingLabel:"Còn lại",fCode:"Mã (vd: SALE10)",fLabel:"Nhãn hiển thị (vd: Giảm 10%)",fDiscount:"Mức giảm",fQuantity:"Số lượng lượt dùng (bỏ trống = mặc định 1)",fMinOrder:"Đơn tối thiểu (không bắt buộc)",fMaxDiscount:"Giảm tối đa (không bắt buộc, chỉ áp dụng cho %)",percent:"Theo %",fixed:"Số tiền cố định",errRequired:"Vui lòng nhập đủ mã, nhãn và mức giảm",maxDiscHint:"Giảm tối đa",deleteTitle:"Xoá mã này",usedHint:"Dùng"},en:{label:"Promo code",ph:"Enter promo code",apply:"Apply",applied:"has been applied",errInvalid:"Invalid or expired code",errMinOrder:"Minimum order",errUsedUp:"This code has reached its usage limit",createBtn:"New code",createTitle:"Create new promo code",suggestLabel:"Templates — click to fill in",createSpecialTitle:"Create a private voucher",createSpecialBtn:"Send voucher",existingLabel:"Existing promo codes",remainingLabel:"Remaining",fCode:"Code (eg. SALE10)",fLabel:"Display label (eg. 10% off)",fDiscount:"Discount amount",fQuantity:"Usage limit (leave blank = defaults to 1)",fMinOrder:"Minimum order (optional)",fMaxDiscount:"Max discount (optional, percent only)",percent:"Percent",fixed:"Fixed amount",errRequired:"Code, label and discount are required",maxDiscHint:"Max discount",deleteTitle:"Delete this code",usedHint:"Used"}},be={code:"",label:"",type:"percent",discount:"",minOrder:"",maxDiscount:""},ge=class extends t{static styles=i(":host{display:block}.section-label{opacity:.45;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.625rem;font-size:.72rem;font-weight:700}.promo-header{justify-content:space-between;align-items:center;margin-bottom:.625rem;display:flex}.promo-header .section-label{margin-bottom:0}.promo-row{gap:.5rem;margin-bottom:.5rem;display:flex}.promo-input-wrap{flex:1;align-items:center;display:flex;position:relative}.promo-clear{position:absolute;right:.5rem}.promo-input{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 15%, transparent);background:color-mix(in oklab, var(--color-base-200,#eee) 50%, transparent);width:100%;color:var(--color-base-content,#111);text-transform:uppercase;letter-spacing:.05em;border-radius:.625rem;outline:none;padding:.5rem 2rem .5rem .75rem;font-size:.875rem;font-weight:600;transition:border-color .2s}.promo-input:focus{border-color:var(--color-warning,#fbbf24)}.promo-input::placeholder{text-transform:none;letter-spacing:normal;opacity:.5;font-weight:400}.promo-msg{align-items:center;gap:.3rem;padding:.3rem 0;font-size:.8rem;display:flex}.promo-msg.ok{color:var(--color-success,#22c55e)}.promo-msg.err{color:var(--color-error,#f5465c)}.promo-hints{flex-wrap:wrap;gap:.375rem;margin-top:.375rem;display:flex}.promo-chip-info{vertical-align:middle;color:var(--color-base-content,#111);opacity:.4;cursor:help;margin:0 -.25rem;transition:opacity .2s}.promo-chip-info:hover{opacity:.8}.promo-chip-delete{vertical-align:middle;color:var(--color-base-content,#111);opacity:.4;cursor:pointer;margin-right:-.25rem;transition:opacity .2s,color .2s}.promo-chip-delete:hover{opacity:1;color:var(--color-error,#f5465c)}.promo-form{text-align:left;flex-direction:column;gap:.75rem;margin-bottom:1rem;display:flex}.promo-type-toggle{gap:.5rem;display:flex}.sas-panel{border:1px solid color-mix(in oklab, var(--color-base-content) 30%, transparent);border-radius:1rem;flex-direction:column;gap:.5rem;margin:0;padding:.5rem .75rem .75rem;display:flex}.sas-legend{text-transform:uppercase;letter-spacing:.06em;color:var(--color-base-content);align-items:center;gap:.3rem;margin:0 auto;padding:0 .4rem;font-size:.72rem;font-weight:700;display:flex}");static properties={promos:{type:Array},applied:{type:Object},total:{type:Number},owner:{type:Boolean},type:{type:String},special:{type:Boolean},ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},txt:{type:Object},lang:{type:String},_input:{state:!0},_error:{state:!0},_showCreate:{state:!0},_fCode:{state:!0},_fLabel:{state:!0},_fType:{state:!0},_fDiscount:{state:!0},_fQuantity:{state:!0},_fMinOrder:{state:!0},_fMaxDiscount:{state:!0},_fError:{state:!0}};constructor(){super(),this.promos=[],this.applied=null,this.total=0,this.owner=!1,this.type="",this.special=!1,this.txt=null,this.lang="vi",this._input="",this._error="",this._showCreate=!1,this._fError="",this._setForm()}willUpdate(e){e.has("applied")&&!this.applied&&(this._input="",this._error="")}get _txt(){return c(this.txt,ue,this.lang)}_emit(e,t){s(this,e,t)}_dhApply(){const e=this._input.trim().toUpperCase();if(!e)return void(this._error="");const t=(this.promos??[]).find(t=>t.code===e);t?t.minOrder&&this.total<t.minOrder?this._error=`${this._txt.errMinOrder} ${n(t.minOrder,this.lang)}`:this._comUsedUp(t)?this._error=this._txt.errUsedUp:(this._error="",this._emit("promo:apply",{promo:t})):this._error=this._txt.errInvalid}_dhClear(){this._input="",this._error="",this._emit("promo:clear")}_dhPick(e){this._input=e,this._dhApply()}_dhDeletePromo(e){this._emit("promo:delete",{code:e})}_setForm(e=be){this._fCode=e.code??"",this._fLabel=e.label??"",this._fType=e.type??"percent",this._fDiscount=e.discount?String(e.discount):"",this._fQuantity=e.quantity?String(e.quantity):"",this._fMinOrder=e.minOrder?String(e.minOrder):"",this._fMaxDiscount=e.maxDiscount?String(e.maxDiscount):"",this._fError=""}_dhOpenCreate(){this._setForm(),this._showCreate=!0}_dhCancelCreate(){this._showCreate=!1}_dhFillSuggestion(e){this._setForm(e)}_dhSubmitCreate(){const e=this._fCode.trim().toUpperCase(),t=this._fLabel.trim(),i=Number(this._fDiscount);if(!e||!t||!i)return void(this._fError=this._txt.errRequired);const r={code:e,label:t,type:this._fType,discount:i};this.special?(r.code=`${e}-${Math.random().toString(36).slice(2,6).toUpperCase()}`,r.private=!0,r.quantity=1):(r.quantity=this._fQuantity?Number(this._fQuantity):1,this._fMinOrder&&(r.minOrder=Number(this._fMinOrder)),"percent"===this._fType&&this._fMaxDiscount&&(r.maxDiscount=Number(this._fMaxDiscount))),this._emit("promo:create",{promo:r}),this._showCreate=!1}_rfCreateBtn(){const t="circle"===this.type,i=this.special?this._txt.createSpecialBtn:this._txt.createBtn;return e`
            <web-button type=${this.special?"soft":"fill"} color="primary" .stys=${{borderWidth:this.special?"0":"1px"}}
                ?square=${t} rounded=${t?"50%":".5rem"} height=${t?"45px":"23px"}
                ui=${this.ui} theme=${this.theme} title=${i} @clicked=${()=>this._dhOpenCreate()}>
                <iconify-icon icon=${"ri:coupon-3-line"} width=${t?"20px":"16px"}></iconify-icon>${t?"":e` ${i}`}
            </web-button>
            `}render(){return"circle"===this.type?e`${this.owner?e`${this._rfCreateBtn()}${this._rbCreateDialog()}`:""}`:e`
            <div class="promo-header">
                <div class="section-label">${this._txt.label}</div>
                ${this.owner?this._rfCreateBtn():""}
            </div>
            <div class="promo-row">
                <div class="promo-input-wrap">
                    <input class="promo-input" type="text" placeholder="${this._txt.ph}"
                        .value=${this._input}
                        @input=${e=>{this._input=e.target.value}}
                        @keydown=${e=>"Enter"===e.key&&this._dhApply()} />
                    ${this._input?e`
                        <web-button class="promo-clear" type="ghost" square height="20px"
                            ui=${this.ui} theme=${this.theme} @clicked=${()=>this._dhClear()}>
                            <iconify-icon icon="ri:close-circle-fill"></iconify-icon>
                        </web-button>`:""}
                </div>
                <web-button type="outline" color="primary" height="36px" style="flex-shrink:0"
                    ui=${this.ui} theme=${this.theme} @clicked=${()=>this._dhApply()}>${this._txt.apply}</web-button>
            </div>
            ${this._error?e`<div class="promo-msg err"><iconify-icon icon="ri:error-warning-line"></iconify-icon> ${this._error}</div>`:""}
            ${this.applied?e`<div class="promo-msg ok"><iconify-icon icon="ri:checkbox-circle-line"></iconify-icon> ${this.applied.label} ${this._txt.applied}</div>`:""}
            <div class="promo-hints">
                ${(this.promos??[]).filter(e=>e.code!==this.applied?.code&&!e.private&&!this._comUsedUp(e)).map(e=>this._rfChip(e))}
            </div>
            ${this.owner?this._rbCreateDialog():""}`}_rfChip(t){return e`
            <web-button mode="badge" type="dash" color="primary" rounded="4px" style="font-size:0.7rem"
                ui=${this.ui} theme=${this.theme} @clicked=${()=>this._dhPick(t.code)}>
                ${this._comCondition(t)?e`
                    <web-tooltip ui=${this.ui} placement="top" @click=${e=>e.stopPropagation()}>
                        <iconify-icon class="promo-chip-info" icon="ri:information-line" width="16px"></iconify-icon>
                        <span slot="content">${this._comCondition(t)}</span>
                    </web-tooltip>
                `:""}
                ${t.code} — ${t.label}
                ${this.owner?e`
                    <iconify-icon class="promo-chip-delete" icon="ri:close-circle-fill" title=${this._txt.deleteTitle}
                     width="16px" @click=${e=>{e.stopPropagation(),this._dhDeletePromo(t.code)}}></iconify-icon>
                `:""}
            </web-button>`}_rbCreateDialog(){const t=this.special?this._txt.createSpecialTitle:this._txt.createTitle,i=this.special?C:k;return e`
            <web-dialog ?open=${this._showCreate} title=${t} lang=${this.lang}
                maxWidth="420px" persistent ui=${this.ui} theme=${this.theme}
                @confirm=${()=>this._dhSubmitCreate()} @cancel=${()=>this._dhCancelCreate()}>
                <div class="promo-form">
                    <fieldset class="sas-panel">
                        <legend class="sas-legend">
                            <iconify-icon icon="ri:coupon-3-line"></iconify-icon>${this._txt.suggestLabel}
                        </legend>
                        <div class="promo-hints">
                            ${i.map(t=>e`
                                <web-button mode="badge" type="dash" color="primary" rounded="4px" style="font-size:0.7rem"
                                    ui=${this.ui} theme=${this.theme}
                                    @clicked=${()=>this._dhFillSuggestion(t)}>${t.code} — ${t.label}</web-button>
                            `)}
                        </div>

                        ${this._rfFormField("_fCode",this._txt.fCode)}
                        ${this._rfFormField("_fLabel",this._txt.fLabel)}

                        <div class="promo-type-toggle">
                            ${this._rfTypeBtn("percent",this._txt.percent)}
                            ${this._rfTypeBtn("fixed",this._txt.fixed)}
                        </div>

                        ${this._rfFormField("_fDiscount",this._txt.fDiscount,"number")}
                        ${this.special?"":this._rfFormField("_fQuantity",this._txt.fQuantity,"number")}
                        ${this.special?"":this._rfFormField("_fMinOrder",this._txt.fMinOrder,"number")}
                        ${this.special||"percent"!==this._fType?"":this._rfFormField("_fMaxDiscount",this._txt.fMaxDiscount,"number")}
                    </fieldset>

                    ${this._fError?e`<div class="promo-msg err"><iconify-icon icon="ri:error-primary-line"></iconify-icon> ${this._fError}</div>`:""}
                </div>
                ${this._rfExistingPromos()}
            </web-dialog>`}_rfExistingPromos(){const t=(this.promos??[]).filter(e=>!e.private);return t.length?e`
            <fieldset class="sas-panel">
                <legend class="sas-legend">
                    <iconify-icon icon="ri:price-tag-3-line"></iconify-icon>${this._txt.existingLabel}
                </legend>
                <div class="promo-hints">
                    ${t.map(e=>this._rfExistingChip(e))}
                </div>
            </fieldset>`:""}_rfExistingChip(t){return e`
            <web-tooltip ui=${this.ui} placement="top">
                <web-button mode="badge" type="fill" color="primary" rounded="4px" style="font-size:0.7rem"
                    ui=${this.ui} theme=${this.theme}>${t.code} — ${t.label}</web-button>
                <span slot="content">${this._txt.remainingLabel}: ${this._comRemaining(t)}/${t.quantity??1}</span>
            </web-tooltip>`}_comRemaining(e){return Math.max(0,(e.quantity??1)-(e.used??0))}_rfTypeBtn(t,i){return e`
            <web-button type="fill" color=${this._fType===t?"primary":""}
                style="flex:1" width="100%" ui="modern" rounded="0.25rem" theme=${this.theme}
                @clicked=${()=>{this._fType=t}}>${i}</web-button>`}_rfFormField(t,i,r="text"){return e`
            <web-text ui=${this.ui} type=${r} placeholder=${i} .value=${this[t]}
                @input=${e=>{this[t]=e.detail?.value??""}}></web-text>`}_comUsedUp(e){return!!(e.quantity&&(e.used??0)>=e.quantity)}_comCondition(e){const t=[];return e.minOrder&&t.push(`${this._txt.errMinOrder} ${n(e.minOrder,this.lang)}`),e.maxDiscount&&t.push(`${this._txt.maxDiscHint} ${n(e.maxDiscount,this.lang)}`),this.owner&&e.quantity&&t.push(`${this._txt.usedHint} ${e.used??0}/${e.quantity}`),t.join(" · ")}};customElements.get("svc-pay-promo")||customElements.define("svc-pay-promo",ge);var fe={vi:{items:"món",cart:"Giỏ hàng",empty:"Chưa có món nào trong giỏ",subtotal:"Tạm tính",discount:"Khuyến mãi",delete:"Xoá",notesLabel:"Yêu cầu đặc biệt",notesPh:"Ghi chú thêm...",total:"Tổng tiền",btnCheckout:"Đặt hàng →",btnClear:"Xóa tất cả"},en:{items:"items",cart:"Cart",empty:"No items in cart",subtotal:"Subtotal",discount:"Discount",delete:"Remove",notesLabel:"Special requests",notesPh:"Additional notes...",total:"Total",btnCheckout:"Checkout →",btnClear:"Clear all"}},ye=class extends t{static styles=i(":host{display:block}.header-icon{color:var(--color-primary,#fbbf24);font-size:1.375rem}.header-title{text-align:left;flex:1;font-size:1.05rem;font-weight:700}.header-badge{background:color-mix(in oklab, var(--color-primary,#fbbf24) 15%, transparent);color:var(--color-primary,#fbbf24);border-radius:2rem;padding:.2rem .625rem;font-size:.72rem;font-weight:700}.empty{opacity:.3;flex-direction:column;flex:1;justify-content:center;align-items:center;gap:.75rem;padding:3rem 1rem;display:flex}.empty iconify-icon{font-size:3.5rem}.empty p{margin:0;font-size:.95rem;font-weight:500}.items{flex-direction:column;padding:0 1.25rem;display:flex}.item{border-bottom:1px solid color-mix(in oklab, var(--color-base-content,#000) 6%, transparent);align-items:center;gap:.75rem;padding:.875rem 0;display:flex}.item:last-child{border-bottom:none}.item-img{object-fit:contain;background:color-mix(in oklab, var(--color-base-200,#eee) 60%, transparent);border-radius:.75rem;flex-shrink:0;width:3.75rem;height:3.75rem}.item-info{text-align:left;flex:1;min-width:0}.item-name{text-overflow:ellipsis;white-space:nowrap;margin-bottom:.2rem;font-size:.9rem;font-weight:600;overflow:hidden}.item-price{color:var(--color-primary,#fbbf24);font-size:.95rem;font-weight:700}.item-subtotal{opacity:.42;margin-top:.1rem;font-size:.75rem}.item-right{flex-direction:column;flex-shrink:0;align-items:flex-end;gap:.5rem;display:flex}.qty-row{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 14%, transparent);border-radius:.625rem;align-items:center;display:flex;overflow:hidden}.qty-num{text-align:center;min-width:2.25rem;padding:0 .25rem;font-size:.9rem;font-weight:700}.section{border-top:1px solid color-mix(in oklab, var(--color-base-content,#000) 7%, transparent);flex-shrink:0;padding:.875rem 1.25rem}.section-label{opacity:.45;text-transform:uppercase;text-align:left;letter-spacing:.06em;margin-bottom:.625rem;font-size:.72rem;font-weight:700}.row{justify-content:space-between;align-items:center;font-size:.85rem;display:flex}.row+.row{margin-top:.35rem}.row .label{opacity:.5}.row .value{font-weight:600}.row.discount .value{color:var(--color-success,#22c55e);font-weight:700}.notes-grid{grid-template-columns:1fr 1fr;gap:.375rem 1rem;margin-bottom:.625rem;display:grid}.note-item{cursor:pointer;user-select:none;align-items:center;gap:.5rem;font-size:.85rem;display:flex}.note-item input[type=checkbox]{accent-color:var(--color-primary,#fbbf24);cursor:pointer;flex-shrink:0;width:.9rem;height:.9rem}.note-textarea{box-sizing:border-box;border:1px solid color-mix(in oklab, var(--color-base-content,#000) 14%, transparent);background:color-mix(in oklab, var(--color-base-200,#eee) 50%, transparent);width:100%;color:var(--color-base-content,#111);resize:none;border-radius:.625rem;outline:none;padding:.5rem .75rem;font-family:inherit;font-size:.85rem;transition:border-color .2s}.note-textarea:focus{border-color:var(--color-primary,#fbbf24)}.note-textarea::placeholder{opacity:.4}.total-row{justify-content:space-between;align-items:baseline;display:flex}.total-label{font-size:1rem;font-weight:700}.total-value{color:var(--color-primary,#fbbf24);font-size:1.4rem;font-weight:900}.actions{border-top:1px solid color-mix(in oklab, var(--color-base-content,#000) 7%, transparent);flex-direction:column;flex-grow:1;gap:.5rem;margin:0 -1rem;padding:.625rem 1.25rem;display:flex}");static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},value:{},service:{type:String},owner:{type:Boolean},promosStore:{},position:{type:String},x:{type:String},y:{type:String},wallet:{type:Object},seller:{type:String},sellerId:{type:String},bayId:{type:String},txt:{type:Object},lang:{type:String},notes:{type:Array},_items:{state:!0},_open:{state:!0},_appliedPromo:{state:!0},_checkedNotes:{state:!0},_promos:{state:!0},_notes:{state:!0},_noteText:{state:!0}};constructor(){super(),this.service="cart",this.owner=!1,this.promosStore=null,this.position="fixed",this.x="100%",this.y="calc(100% - 7.5rem)",this.wallet={},this.seller="",this.sellerId="",this.bayId="",this.txt=null,this.lang="vi",this._items=[],this._open=!1,this._appliedPromo=null,this._checkedNotes=[],this._promos=[],this._notes=[],this._noteText="",this._unsub=null,this._unsubToast=null,this._unsubPromos=null,this._totals={items:[],count:0,total:0,disc:0,final:0}}connectedCallback(){super.connectedCallback(),this._dcInit()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsubPromos?.()}updated(e){e.has("service")&&this.service!==this._initedService&&this._dcReinit()}_dcReinit(){this._unsub?.(),this._unsub=null,this._unsubPromos?.(),this._unsubPromos=null,this._dcInit()}willUpdate(e){if(e.has("_items")||e.has("_appliedPromo")||e.has("_promos")){const e=this._items,t=e.reduce((e,t)=>e+Number(t.price??0)*t.qty,0);this._appliedPromo&&(!this._promos.some(e=>e.code===this._appliedPromo.code)||this._appliedPromo.minOrder&&t<this._appliedPromo.minOrder)&&(this._appliedPromo=null);const i=this._appliedPromo,r=i?Math.min("percent"===i.type?Math.round(t*i.discount/100):i.discount,i.maxDiscount??1/0):0;this._totals={items:e,count:e.reduce((e,t)=>e+t.qty,0),total:t,disc:r,final:Math.max(0,t-r)}}}_dcInit(){this._initedService=this.service;const e=Array.isArray(this.value)?this.value:[];!function(e,t=[],i={}){m(e,{items:t,checkedNotes:[],open:i.open??!1,promos:i.promos??[],notes:i.notes??[]})}(this.service,e,{notes:this.notes}),this._unsub=P(this.service,e=>{this._items=e.items??[],this._open=e.open??!1,this._checkedNotes=e.checkedNotes??[],this.promosStore||(this._promos=e.promos??[]),this._notes=e.notes??this.notes}),this.promosStore&&(this._unsubPromos=this.promosStore.subscribe(e=>{this._promos=e??[]})),ae(this.service)}openSheet(){m(this.service,{open:!0})}closeSheet(){m(this.service,{open:!1}),this._emit("close")}showToast(e,t="success"){l(e,t)}_dfRemoveItem(e){le(this.service,e)}_dfSetQty(e,t){!function(e,t,i){if(i<=0)return void le(e,t);const r=d(e);r&&m(e,{items:(r.items??[]).map(e=>e.id===t?{...e,qty:i}:e)})}(this.service,e,t)}_dfClearItems(){m(this.service,{items:[]}),this._emit("act:clear",{e:"act:clear"})}_dfToggleNote(e){!function(e,t){const i=d(e);if(!i)return;const r=new Set(i.checkedNotes??[]);r.has(t)?r.delete(t):r.add(t),m(e,{checkedNotes:[...r]})}(this.service,e)}_dhPromoApply(e){this._appliedPromo=e.detail.promo}_dhPromoClear(){this._appliedPromo=null}_dfPromoCreate(e){this.promosStore?this.promosStore.add(e.detail.promo):function(e,t){const i=d(e);i&&m(e,{promos:[...i.promos??[],t]})}(this.service,e.detail.promo)}_dfPromoDelete(e){this.promosStore?this.promosStore.remove(e.detail.code):function(e,t){const i=d(e);i&&m(e,{promos:(i.promos??[]).filter(e=>e.code!==t)})}(this.service,e.detail.code)}_dfPromoUse(e){this.promosStore?this.promosStore.use(e):function(e,t){const i=d(e);i&&m(e,{promos:(i.promos??[]).map(e=>e.code===t?{...e,used:(e.used??0)+1}:e)})}(this.service,e)}_dfCheckout(){const{count:e}=this._comTotals;0!==e&&(this._emit("cart:checkout",{items:[...this._items],seller:this.seller,sellerId:this.sellerId,bayId:this.bayId,notes:[...this._checkedNotes,...this._noteText.trim()?[this._noteText.trim()]:[]],promo:this._appliedPromo?.code??null}),this._appliedPromo&&this._dfPromoUse(this._appliedPromo.code),this._dhPromoClear(),this.closeSheet(),this._noteText="")}get _comTotals(){return this._totals}get _comWallet(){return o(this.wallet,{})}_emit(e,t={}){s(this,e,t)}get _txt(){return c(this.txt,fe,this.lang)}render(){const{count:t}=this._comTotals;return e`
            <web-toast ui="spatial"></web-toast>

            <web-fab icon="ri:shopping-cart-fill" badge=${t?a(t):""} position=${this.position} x=${this.x} y=${this.y}
              size="lg" ui=${this.ui} theme=${this.theme} @clicked=${()=>this.openSheet()}></web-fab>

            <web-dialog type="mobile" ui=${this.ui} theme=${this.theme} maxWidth="480px"
                .open=${this._open} @close=${()=>this.closeSheet()}>
                ${this._rbHeader()}
                ${0===this._items.length?this._rbEmpty():this._rbBody()}
            </web-dialog>`}_rbHeader(){const{count:t}=this._comTotals;return e`
            <iconify-icon slot="header" icon="ri:shopping-cart-fill" class="header-icon"></iconify-icon>
            <span slot="header" class="header-title">${this._txt.cart}</span>
            ${t>0?e`<span slot="header" class="header-badge">${t} ${this._txt.items}</span>`:""}
            <web-button slot="header" type="soft" square rounded="50%" height="1.5rem" width="1.5rem"
                ui=${this.ui} theme=${this.theme}
                @clicked=${()=>this.closeSheet()}>
                <iconify-icon icon="ri:close-line"></iconify-icon>
            </web-button>`}_rbEmpty(){return e`
            <div class="empty">
                <iconify-icon icon="ri:shopping-basket-line"></iconify-icon>
                <p>${this._txt.empty}</p>
            </div>`}_rbBody(){return e`
            <div class="items">${this._items.map(e=>this._rfItem(e))}</div>
            ${this._rbSummary()}
            ${this._rbPromo()}
            ${this._rbNotes()}
            ${this._rbActions()}`}_rbSummary(){const{count:t,total:i,disc:r}=this._comTotals;return e`
            <div class="section">
                <div class="row">
                    <span class="label">${this._txt.subtotal} (${t} ${this._txt.items})</span>
                    <span class="value">${n(i,this.lang)}</span>
                </div>
                ${r>0?e`
                    <div class="row discount">
                        <span class="label">${this._txt.discount} (${this._appliedPromo?.code})</span>
                        <span class="value">− ${n(r,this.lang)}</span>
                    </div>`:""}
            </div>`}_rfItem(t){const i=Number(t.price??0),r=t.img??t.pics??"",o=t.name??t.title??"";return e`
            <div class="item">
                ${r?e`<img class="item-img" src="${r}" alt="${o}" loading="lazy" />`:""}
                <div class="item-info">
                    <div class="item-name">${o}</div>
                    <div class="item-price">${t.formattedPrice??n(i,this.lang)}</div>
                    ${t.qty>1?e`<div class="item-subtotal">× ${t.qty} = ${n(i*t.qty,this.lang)}</div>`:""}
                </div>
                <div class="item-right">
                    <web-button type="ghost" height="24px" prefix="ri:delete-bin-line"
                        ui=${this.ui} theme=${this.theme}
                        @clicked=${()=>this._dfRemoveItem(t.id)}>${this._txt.delete}</web-button>
                    <div class="qty-row">
                        <web-button type="soft" square rounded="0" height="2rem" width="2rem" theme=${this.theme}
                            @clicked=${()=>this._dfSetQty(t.id,t.qty-1)}>−</web-button>
                        <span class="qty-num">${t.qty}</span>
                        <web-button type="soft" square rounded="0" height="2rem" width="2rem" theme=${this.theme}
                            @clicked=${()=>this._dfSetQty(t.id,t.qty+1)}>+</web-button>
                    </div>
                </div>
            </div>`}_rbPromo(){const{total:t}=this._comTotals;return e`
            <div class="section">
                <svc-pay-promo .promos=${this._promos} .applied=${this._appliedPromo} .total=${t}
                    lang=${this.lang} ui=${this.ui} theme=${this.theme} ?owner=${this.owner}
                    @promo:apply=${e=>this._dhPromoApply(e)}
                    @promo:clear=${()=>this._dhPromoClear()}
                    @promo:create=${e=>this._dfPromoCreate(e)}
                    @promo:delete=${e=>this._dfPromoDelete(e)}>
                </svc-pay-promo>
            </div>`}_rbNotes(){return e`
            <div class="section">
                <div class="section-label">${this._txt.notesLabel}</div>
                <div class="notes-grid">
                    ${(this._notes??[]).map(t=>e`
                        <label class="note-item">
                            <input type="checkbox" .checked=${this._checkedNotes.includes(t)}
                                @change=${()=>this._dfToggleNote(t)} />
                            ${t}
                        </label>`)}
                </div>
                <textarea class="note-textarea" rows="2" placeholder="${this._txt.notesPh}"
                    .value=${this._noteText}
                    @input=${e=>{this._noteText=e.target.value}}></textarea>
            </div>`}_rbActions(){const{count:t,final:i}=this._comTotals;return e`
            <div class="actions" slot="footer">
                <div class="total-row">
                    <span class="total-label">${this._txt.total}</span>
                    <span class="total-value">${n(i,this.lang)}</span>
                </div>
                <web-button type="fill" color="primary" height="45px" width="100%" ?disabled=${0===t}
                    ui=${this.ui} theme=${this.theme}  fontSize="1rem"
                    @clicked=${()=>this._dfCheckout()}>${this._txt.btnCheckout}</web-button>
                <web-button type="ghost" height="32px" width="100%"
                    ui="${this.ui}" theme=${this.theme}
                    @clicked=${()=>this._dfClearItems()}>${this._txt.btnClear}</web-button>
            </div>`}};customElements.get("svc-cart")||customElements.define("svc-cart",ye);var ve={vi:{basic:"Cơ bản",map:"Bản đồ",streetPh:"Địa chỉ (số nhà, tên đường)",wardPh:"Phường / Xã",regionPh:"Tỉnh / Thành phố"},en:{basic:"Basic",map:"Map",streetPh:"Address (house number, street name)",wardPh:"Ward / Commune",regionPh:"Province / City"}},_e="việt nam";function xe(e=""){const[t="",i="",r="",n=_e]=e.split("~");return{street:t,ward:i,region:r,country:n}}var $e=class extends t{static shadowRootOptions={mode:"open"};static styles=[i(':host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-blur:var(--haze-blur,12px);--core-glass:var(--haze-glass,20%);--core-font:var(--font-sans,"system-ui");width:100%;display:block}.web-location{flex-direction:column;gap:10px;width:100%;display:flex}.mode-tabs{background:color-mix(in oklab, var(--color-base-200,#232323) 60%, transparent);border-radius:var(--core-radius);border:1px solid color-mix(in oklab, var(--color-base-300,#393939) 50%, transparent);align-items:center;gap:0;width:fit-content;padding:3px;display:inline-flex}.mode-tab{border-radius:calc(var(--core-radius) - 2px);height:28px;font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 50%, transparent);cursor:pointer;user-select:none;background:0 0;border:none;align-items:center;gap:6px;padding:0 14px;font-size:12px;font-weight:600;transition:background .2s,color .2s,box-shadow .2s;display:inline-flex}.mode-tab svg{flex-shrink:0;width:13px;height:13px}.mode-tab:hover{color:color-mix(in oklab, var(--color-base-content,#fff) 80%, transparent)}.mode-tab.active{background:var(--color-base-100,#0d0d0d);color:var(--color-primary,#2ebd85);box-shadow:0 1px 3px #00000040}.mode-panel{display:none}.mode-panel.active{display:block}.basic-fields{flex-direction:column;gap:10px;display:flex}.field-label{font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 60%, transparent);letter-spacing:.03em;margin-bottom:4px;font-size:12px;font-weight:600}.field-full{flex-direction:column;display:flex}.field-row{grid-template-columns:1fr 1fr;gap:10px;display:grid}.field-row>div{flex-direction:column;display:flex}@media (width<=480px){.field-row{grid-template-columns:1fr}}.spatial .mode-tabs{background:color-mix(in oklab, var(--color-base-300,#393939) var(--core-glass), transparent);backdrop-filter:blur(var(--core-blur));border-color:#fff2}.spatial .mode-tab.active{background:color-mix(in oklab, var(--color-base-300,#393939) 25%, transparent);backdrop-filter:blur(var(--core-blur))}')];static properties={value:{type:String,reflect:!0},apiKey:{type:String},theme:{type:String},ui:{type:String},disabled:{type:Boolean},txt:{type:Object},lang:{type:String},_mode:{state:!0},_parts:{state:!0}};static get uiConfigs(){return{modern:{wrap:"modern web-location"},spatial:{wrap:"spatial web-location"}}}constructor(){super(),this.value="",this.apiKey="AIzaSyAAq_3rBXv_JZgDNmNZMuIARuTCkkyf1VY",this.theme="",this.ui="modern",this.disabled=!1,this.txt=null,this.lang="vi",this._mode="basic",this._parts={street:"",ward:"",region:"",country:_e}}willUpdate(e){e.has("value")&&this.value&&(this._parts=xe(this.value))}updated(e){e.has("theme")&&this.theme&&this.setAttribute("data-theme",this.theme),e.has("theme")&&!this.theme&&this.removeAttribute("data-theme")}_dhField(e,t){const i=t.detail?.value??t.target?.value??"";this._parts={...this._parts,[e]:i},this._dfEmit()}_dhMode(e){this._mode=e}_dhAddressChange(e){const t=e.detail?.value??"";t&&t!==this.value&&(this.value=t,this._parts=xe(t),this._emit(t))}_dhAddressConfirmed(e){const t=e.detail?.value??"";this.value=t,this._parts=xe(t),this._emit(t)}_dfEmit(){this.value=function({street:e="",ward:t="",region:i="",country:r=_e}={}){return`${e}~${t}~${i}~${r}`}(this._parts),this._emit(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}get _txt(){const e=this.txt??ve;return e[this.lang]??e.vi??{}}_rbModeToggle(){return e`
            <div class="mode-tabs">
                <button class="mode-tab ${"basic"===this._mode?"active":""}"
                    @click=${()=>this._dhMode("basic")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                    ${this._txt.basic}
                </button>
                <button class="mode-tab ${"advanced"===this._mode?"active":""}"
                    @click=${()=>this._dhMode("advanced")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${this._txt.map}
                </button>
            </div>
        `}_rbBasic(){const t=this._parts;return e`
            <div class="basic-fields">
                <div class="field-full">
                    <web-text
                        .ui=${this.ui}
                        .theme=${this.theme}
                        .value=${t.street}
                        placeholder="${this._txt.streetPh}"
                        ?disabled=${this.disabled}
                        clearable
                        @input=${e=>this._dhField("street",e)}
                        @change=${e=>this._dhField("street",e)}
                    ></web-text>
                </div>
                <div class="field-row">
                    <div>
                        <web-text
                            .ui=${this.ui}
                            .theme=${this.theme}
                            .value=${t.ward}
                            placeholder="${this._txt.wardPh}"
                            ?disabled=${this.disabled}
                            clearable
                            @input=${e=>this._dhField("ward",e)}
                            @change=${e=>this._dhField("ward",e)}
                        ></web-text>
                    </div>
                    <div>
                        <web-text
                            .ui=${this.ui}
                            .theme=${this.theme}
                            .value=${t.region}
                            placeholder="${this._txt.regionPh}"
                            ?disabled=${this.disabled}
                            clearable
                            @input=${e=>this._dhField("region",e)}
                            @change=${e=>this._dhField("region",e)}
                        ></web-text>
                    </div>
                </div>
            </div>
        `}_rbAdvanced(){return e`
            <web-location-map
                .ui=${this.ui}
                .theme=${this.theme}
                .value=${this.value}
                ?disabled=${this.disabled}
                @change=${this._dhAddressChange}
                @address-confirmed=${this._dhAddressConfirmed}
            ></web-location-map>
        `}render(){return e`
            <div class="${this.constructor.uiConfigs[this.ui||"modern"].wrap}">
                ${this._rbModeToggle()}
                <div class="mode-panel ${"basic"===this._mode?"active":""}">${this._rbBasic()}</div>
                <div class="mode-panel ${"advanced"===this._mode?"active":""}">${this._rbAdvanced()}</div>
            </div>
        `}};customElements.get("web-location")||customElements.define("web-location",$e);var we={vi:{title:"Thông tin khách hàng",new:"Khách mới",nameLabel:"Họ và tên",namePh:"Nguyễn Văn A",phoneLabel:"Số điện thoại",phonePh:"0912 345 678",emailLabel:"Email",emailOptional:"(tuỳ chọn)",emailPh:"you@example.com",addressLabel:"Địa chỉ",defaultBadge:"Mặc định",btnSetDefault:"Đặt mặc định",btnRemove:"Xóa",btnAdd:"Thêm",empty:"Chưa có thông tin nào. Thêm khách hàng mới."},en:{title:"Customer information",new:"New customer",nameLabel:"Full name",namePh:"John Doe",phoneLabel:"Phone number",phonePh:"0912 345 678",emailLabel:"Email",emailOptional:"(optional)",emailPh:"you@example.com",addressLabel:"Address",defaultBadge:"Default",btnSetDefault:"Set default",btnRemove:"Remove",btnAdd:"Add",empty:"No entries yet. Add a new customer."}},ke=class extends t{static styles=i(':host{--core-height:var(--height-selector,2.25rem);--core-radius:var(--radius-selector,.5rem);--core-blur:var(--haze-blur,12px);--core-glass:var(--haze-glass,20%);--core-font:var(--font-sans,"system-ui");display:block}.svc-pay-customer{flex-direction:column;gap:8px;display:flex}.entries-header{justify-content:space-between;align-items:center;padding:2px 0;display:flex}.entries-title{font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 70%, transparent);letter-spacing:.03em;text-transform:uppercase;font-size:13px;font-weight:700}.btn-add{background:color-mix(in oklab, var(--color-primary,#2ebd85) 15%, transparent);height:28px;color:var(--color-primary,#2ebd85);border:1px solid color-mix(in oklab, var(--color-primary,#2ebd85) 40%, transparent);border-radius:var(--core-radius);font-size:12px;font-weight:700;font-family:var(--core-font);cursor:pointer;align-items:center;gap:5px;padding:0 14px;transition:background .2s,border-color .2s;display:inline-flex}.btn-add svg{flex-shrink:0;width:12px;height:12px}.btn-add:hover{background:color-mix(in oklab, var(--color-primary,#2ebd85) 22%, transparent);border-color:var(--color-primary,#2ebd85)}.entries-list{flex-direction:column;gap:6px;display:flex}.entries-empty{text-align:center;font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 35%, transparent);border:1px dashed color-mix(in oklab, var(--color-base-300,#393939) 50%, transparent);border-radius:var(--core-radius);padding:20px 16px;font-size:13px}.entry-form{flex-direction:column;gap:12px;padding:14px 16px;display:flex}.entry-row{grid-template-columns:1fr 1fr;gap:12px;display:grid}@media (width<=480px){.entry-row{grid-template-columns:1fr}}.field{flex-direction:column;gap:6px;display:flex}.field label{font-size:12px;font-weight:600;font-family:var(--core-font);color:color-mix(in oklab, var(--color-base-content,#fff) 70%, transparent);letter-spacing:.03em}.field input{box-sizing:border-box;width:100%;height:var(--core-height);background:color-mix(in oklab, var(--color-base-100,#0d0d0d) 80%, transparent);border:1px solid color-mix(in oklab, var(--color-base-300,#393939) 70%, transparent);border-radius:var(--core-radius);color:var(--color-base-content,#fff);font-family:var(--core-font);appearance:none;outline:none;padding:0 12px;font-size:14px;transition:border-color .2s,box-shadow .2s}.field input:focus{border-color:var(--color-primary,#2ebd85);box-shadow:0 0 0 3px color-mix(in oklab, var(--color-primary,#2ebd85) 15%, transparent)}.field input::placeholder{color:color-mix(in oklab, var(--color-base-content,#fff) 30%, transparent)}.opt{opacity:.55;font-weight:400}.entry-footer{border-top:1px solid color-mix(in oklab, var(--color-base-300,#393939) 40%, transparent);align-items:center;gap:8px;padding-top:4px;display:flex}.badge-default{background:color-mix(in oklab, var(--color-primary,#2ebd85) 15%, transparent);height:24px;color:var(--color-primary,#2ebd85);border:1px solid color-mix(in oklab, var(--color-primary,#2ebd85) 40%, transparent);font-size:11px;font-weight:700;font-family:var(--core-font);letter-spacing:.04em;border-radius:99px;align-items:center;padding:0 10px;display:inline-flex}.btn-set-default{height:24px;color:color-mix(in oklab, var(--color-base-content,#fff) 45%, transparent);border:1px solid color-mix(in oklab, var(--color-base-300,#393939) 60%, transparent);font-size:11px;font-weight:600;font-family:var(--core-font);cursor:pointer;background:0 0;border-radius:99px;align-items:center;padding:0 10px;transition:color .2s,border-color .2s;display:inline-flex}.btn-set-default:hover{color:var(--color-primary,#2ebd85);border-color:color-mix(in oklab, var(--color-primary,#2ebd85) 50%, transparent)}.btn-remove{height:24px;color:color-mix(in oklab, var(--color-error,#f87171) 60%, transparent);border:1px solid color-mix(in oklab, var(--color-error,#f87171) 25%, transparent);font-size:11px;font-weight:600;font-family:var(--core-font);cursor:pointer;background:0 0;border-radius:99px;align-items:center;gap:5px;margin-left:auto;padding:0 10px;transition:color .2s,border-color .2s,background .2s;display:inline-flex}.btn-remove svg{flex-shrink:0;width:11px;height:11px}.btn-remove:hover{color:var(--color-error,#f87171);border-color:var(--color-error,#f87171);background:color-mix(in oklab, var(--color-error,#f87171) 8%, transparent)}.spatial .field input{background:color-mix(in oklab, var(--color-base-300,#393939) var(--core-glass), transparent);backdrop-filter:blur(var(--core-blur));border:1px solid #fff3}.spatial .field input:focus{border-color:var(--color-primary,#2ebd85);background:#ffffff12}');static properties={ui:{type:String},theme:{type:String},service:{type:String},txt:{type:Object},lang:{type:String},_data:{state:!0},_openMap:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.service="pay_customer",this.txt=null,this.lang="vi",this._data={entries:[]},this._openMap={},this._unsub=null,this._saveTimer=null}connectedCallback(){var e;super.connectedCallback(),e=this.service,m(e,{...ce}),this._unsub=me(this.service,e=>{this._data=e?{...e}:this._data}),async function(e){const{default:t}=await h(async()=>{const{default:e}=await import("./storager.CYok621C.js").then(e=>e.n);return{default:e}},__vite__mapDeps([0,1])),i=await t.get(e);i&&m(e,{...ce,...i})}(this.service)}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),clearTimeout(this._saveTimer)}_dhEntry(e,t,i){this._data={...this._data,entries:(this._data.entries??[]).map(r=>r.id===e?{...r,[t]:i}:r)},clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>pe(this.service,this._data),600)}_dhAdd(){const e=he();0===(this._data.entries??[]).length&&(e.isDefault=!0),this._openMap={...this._openMap,[e.id]:!0},this._data={...this._data,entries:[...this._data.entries??[],e]}}_dhRemove(e){const t=(this._data.entries??[]).filter(t=>t.id!==e);t.length>0&&!t.some(e=>e.isDefault)&&(t[0]={...t[0],isDefault:!0});const{[e]:i,...r}=this._openMap;this._openMap=r;const n={...this._data,entries:t};this._data=n,pe(this.service,n)}_dhSetDefault(e){const t={...this._data,entries:(this._data.entries??[]).map(t=>({...t,isDefault:t.id===e}))};this._data=t,pe(this.service,t)}_rfEntry(t){const i=[t.fullName||this._txt.new,t.phone].filter(Boolean).join(" | "),r=t.id;return e`
            <web-expansion
                .panels=${[{id:r,label:i}]}
                .active=${this._openMap[r]?r:""}
                .ui=${this.ui}
                .theme=${this.theme}
                @change=${e=>{e.detail?.open&&(this._openMap={...this._openMap,[r]:e.detail.open.includes(r)})}}
            >
                <div slot=${r} class="entry-form">
                    <div class="entry-row">
                        <div class="field">
                            <label>${this._txt.nameLabel}</label>
                            <input type="text"
                                .value=${t.fullName||""}
                                placeholder="${this._txt.namePh}"
                                @input=${e=>this._dhEntry(t.id,"fullName",e.target.value)} />
                        </div>
                        <div class="field">
                            <label>${this._txt.phoneLabel}</label>
                            <input type="tel"
                                .value=${t.phone||""}
                                placeholder="${this._txt.phonePh}"
                                @input=${e=>this._dhEntry(t.id,"phone",e.target.value)} />
                        </div>
                    </div>
                    <div class="field">
                        <label>${this._txt.emailLabel} <span class="opt">${this._txt.emailOptional}</span></label>
                        <input type="email"
                            .value=${t.email||""}
                            placeholder="${this._txt.emailPh}"
                            @input=${e=>this._dhEntry(t.id,"email",e.target.value)} />
                    </div>
                    <div class="field">
                        <label>${this._txt.addressLabel}</label>
                        <web-location
                            .ui=${this.ui}
                            .theme=${this.theme}
                            .value=${t.location||""}
                            @change=${e=>this._dhEntry(t.id,"location",e.detail.value)}
                        ></web-location>
                    </div>
                    <div class="entry-footer">
                        ${t.isDefault?e`<span class="badge-default">${this._txt.defaultBadge}</span>`:e`<button class="btn-set-default"
                                @click=${()=>this._dhSetDefault(t.id)}>${this._txt.btnSetDefault}</button>`}
                        <button class="btn-remove" @click=${()=>this._dhRemove(t.id)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6l-1 14H6L5 6"></path>
                                <path d="M10 11v6M14 11v6"></path>
                                <path d="M9 6V4h6v2"></path>
                            </svg>
                            ${this._txt.btnRemove}
                        </button>
                    </div>
                </div>
            </web-expansion>
        `}get _txt(){return c(this.txt,we,this.lang)}render(){const t=this._data.entries??[];return e`
            <div class="svc-pay-customer ${this.ui||"modern"}">

                <div class="entries-header">
                    <span class="entries-title">${this._txt.title}</span>
                    <button class="btn-add" @click=${this._dhAdd}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        ${this._txt.btnAdd}
                    </button>
                </div>

                <div class="entries-list">
                    ${0===t.length?e`<div class="entries-empty">${this._txt.empty}</div>`:t.map(e=>this._rfEntry(e))}
                </div>

            </div>
        `}};customElements.get("svc-pay-customer")||customElements.define("svc-pay-customer",ke);var Ce={vi:{label:"Hình thức thanh toán",momo:"MoMo",bank:"Chuyển khoản",cash:"Tiền mặt",cod:"Thanh toán khi nhận hàng",defaultBank:"Ngân hàng",vietqr:"VietQR"},en:{label:"Payment method",momo:"MoMo",bank:"Bank transfer",cash:"Cash",cod:"Cash on delivery",defaultBank:"Bank",vietqr:"VietQR"}},Pe=class extends t{static styles=i(":host{display:block}.section-label{opacity:.45;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.625rem;font-size:.72rem;font-weight:700}.pay-method-tabs{gap:.5rem;margin-bottom:.75rem;display:flex}.pay-method-btn{color:color-mix(in oklab, var(--color-base-content,#000) 75%, transparent);border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);cursor:pointer;border-radius:.75rem;flex-direction:column;flex:1;align-items:center;gap:.3rem;padding:.625rem .5rem;font-size:.72rem;font-weight:600;transition:all .2s;display:flex}.pay-method-btn iconify-icon{font-size:1.25rem}.pay-method-btn.active{border-color:var(--color-primary,#fbbf24);background:color-mix(in oklab, var(--color-primary,#fbbf24) 12%, transparent);color:var(--color-primary,#fbbf24)}.pay-detail{flex-direction:column;gap:.5rem;margin-top:.25rem;display:flex}.bank-item{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);text-align:left;border-radius:.75rem;align-items:center;gap:.75rem;padding:.5rem 1rem;display:flex}.bank-item.active{border-color:var(--color-primary,#fbbf24);background:color-mix(in oklab, var(--color-primary,#fbbf24) 8%, transparent)}.bank-info{flex-direction:column;flex:1;gap:.15rem;display:flex}.bank-name{font-size:.875rem;font-weight:700}.bank-acct{opacity:.55;font-size:.75rem}.bank-default{background:color-mix(in oklab, var(--color-primary,#fbbf24) 15%, transparent);color:var(--color-primary,#fbbf24);border:1px solid color-mix(in oklab, var(--color-primary,#fbbf24) 40%, transparent);border-radius:99px;flex-shrink:0;align-items:center;padding:.15rem .5rem;font-size:.65rem;font-weight:700;display:flex}.bank-default .cash-icon{font-size:1.75rem}");static properties={wallet:{type:Object},method:{type:String},ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},txt:{type:Object},lang:{type:String},_payMethod:{state:!0}};constructor(){super(),this.wallet={},this.method="cash",this.txt=null,this.lang="vi",this._payMethod="cash"}willUpdate(e){e.has("method")&&this.method&&(this._payMethod=this.method),!e.has("wallet")&&!e.has("method")||this._comAvailableMethods.some(e=>e.value===this._payMethod)||(this._payMethod=this._comAvailableMethods[0]?.value??"cash")}get _comAvailableMethods(){return $.filter(e=>((e,t)=>{if("cash"===t)return!0;const i=e?.[t]??{};return!!(i.accountNo??i.phone)})(this._comWallet,e.value))}_emit(e,t){s(this,e,t)}_dfSelect(e){this._payMethod=e,this._emit("payment:select",{method:e})}get _comWallet(){return o(this.wallet,{})}get _txt(){return c(this.txt,Ce,this.lang)}render(){const t=this._comWallet;return e`
            <div class="section-label">${this._txt.label}</div>
            <div class="pay-method-tabs">
                ${this._comAvailableMethods.map(t=>e`
                    <button class="pay-method-btn ${this._payMethod===t.value?"active":""}"
                        @click=${()=>this._dfSelect(t.value)}>
                        <iconify-icon icon="${t.icon}"></iconify-icon>
                        ${this._txt[t.value]||t.label}
                    </button>`)}
            </div>
            ${this._rbDetail(t)}`}_rbDetail(t){const i=this._payMethod,r=t[i]??{};if("cash"===i)return this._rfBankItem(this._txt.cash,r.note??this._txt.cod,e`<iconify-icon icon="ion:cash-outline" class="cash-icon"></iconify-icon>`);const n="momo"===i?"MoMo":r.bankName??this._txt.defaultBank,o=w(i,r);return this._rfBankItem(n,r.accountName?`${o} — ${r.accountName}`:o,this._txt.vietqr)}_rfBankItem(t,i,r){return e`
            <div class="pay-detail">
                <div class="bank-item active">
                    <div class="bank-info">
                        <span class="bank-name">${t}</span>
                        <span class="bank-acct">${i}</span>
                    </div>
                    <span class="bank-default">${r}</span>
                </div>
            </div>`}};customElements.get("svc-pay-booking")||customElements.define("svc-pay-booking",Pe);var Se={momo:"971025",bank:""},Ie={vi:{cod:"Thanh toán khi nhận hàng",qrLoading:"Đang tạo mã QR...",amountLabel:"Số tiền:",paid:"✓ Xác nhận đã thanh toán",back:"← Quay lại"},en:{cod:"Cash on delivery",qrLoading:"Generating QR code...",amountLabel:"Amount:",paid:"✓ Confirm paid",back:"← Back"}},Te=class extends t{static styles=i(":host{flex-direction:column;flex:1;display:flex;overflow:hidden}.qr-body{flex-direction:column;flex:1;align-items:center;padding:1rem 1.25rem;display:flex;overflow-y:auto}.qr-body::-webkit-scrollbar{width:4px}.qr-body::-webkit-scrollbar-thumb{background:color-mix(in oklab, var(--color-base-content,#000) 20%, transparent);border-radius:9999px}.qr-card{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-radius:1rem;width:100%;max-width:320px;overflow:hidden}.qr-card-top{border-bottom:1px solid color-mix(in oklab, var(--color-base-content,#000) 8%, transparent);justify-content:space-between;align-items:center;padding:.75rem 1rem;display:flex}.qr-method-name{font-size:.9rem;font-weight:700}.qr-badge{color:var(--color-success,#22c55e);background:color-mix(in oklab, var(--color-success,#22c55e) 15%, transparent);border:1px solid color-mix(in oklab, var(--color-success,#22c55e) 35%, transparent);border-radius:99px;padding:.2rem .5rem;font-size:.65rem;font-weight:700}.qr-img{width:100%;max-width:260px;margin:.75rem auto;display:block}.qr-manual{flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem 1rem;display:flex}.qr-manual iconify-icon{opacity:.6;font-size:2.5rem}.spin{animation:.8s linear infinite spin;display:inline-block}@keyframes spin{to{transform:rotate(360deg)}}.qr-manual-phone{font-size:1.3rem;font-weight:700}.qr-manual-label{opacity:.5;font-size:.8rem}.cash-icon{color:var(--color-warning,#fbbf24);font-size:3rem}.qr-sep{background:color-mix(in oklab, var(--color-base-content,#000) 8%, transparent);height:1px;margin:0 1rem}.qr-footer{justify-content:space-between;align-items:baseline;padding:.625rem 1rem;display:flex}.qr-footer-label{opacity:.45;font-size:.78rem}.qr-amount{color:var(--color-warning,#fbbf24);font-size:1.15rem;font-weight:800}.qr-ref{opacity:.45;letter-spacing:.04em;margin-top:.75rem;font-size:.78rem;font-weight:600}.actions{flex-direction:column;flex-shrink:0;gap:.5rem;width:100%;max-width:300px;margin:0 auto;padding:.625rem 1.25rem;display:flex}");static properties={ui:{type:String},theme:{type:String},wallet:{type:Object},vietqr:{type:Object},paymentId:{type:String},amount:{type:Number},method:{type:String},_qrDataUrl:{state:!0},_qrLoading:{state:!0},_qrError:{state:!0},txt:{type:Object},lang:{type:String}};constructor(){super(),this.ui="modern",this.theme="",this.wallet={},this.vietqr={},this.paymentId="",this.amount=0,this.method="cash",this._qrDataUrl="",this._qrLoading=!1,this._qrError=!1,this.txt=null,this.lang="vi"}updated(e){(e.has("paymentId")||e.has("amount")||e.has("method"))&&this._fetchQr()}get _comWallet(){return o(this.wallet,{})}get _comAccount(){const e=this._comWallet[this.method]??{};return{...e,accountNo:w(this.method,e)}}get _comLocked(){return"cash"!==this.method&&(this._qrLoading||this._qrError||!this._qrDataUrl)}async _fetchQr(){if("cash"===this.method)return;if(this._qrDataUrl="",this._qrError=!1,!this.paymentId||!this.amount)return;const e=this._comAccount,t=o(this.vietqr,{}),i=e.bin??Se[this.method]??"";if(!e.accountNo||!i)return console.warn("[svc-pay-valider] skip QR fetch: missing account.accountNo/bin",{method:this.method,account:e,bin:i,wallet:this._comWallet}),void(this._qrError=!0);this._qrLoading=!0;try{const r=await(await fetch("https://api.vietqr.io/v2/generate",{method:"POST",headers:{"x-client-id":t.clientId??"","x-api-key":t.apiKey??"","Content-Type":"application/json"},body:JSON.stringify({accountNo:e.accountNo,accountName:e.accountName??"",acqId:i,amount:this.amount,addInfo:this.paymentId,format:"text",template:"compact2"})})).json();"00"===r.code?this._qrDataUrl=r.data.qrDataURL:(console.warn("[svc-pay-valider] VietQR API returned an error",r),this._qrDataUrl=this._fallbackUrl(e,i),this._qrError=!0)}catch(r){console.warn("[svc-pay-valider] VietQR fetch failed",r),this._qrDataUrl=this._fallbackUrl(e,i),this._qrError=!0}finally{this._qrLoading=!1}}_fallbackUrl(e,t){const i=encodeURIComponent(e.accountName??""),r=encodeURIComponent(this.paymentId??"");return`https://img.vietqr.io/image/${t}-${e.accountNo}-compact2.png?amount=${this.amount}&addInfo=${r}&accountName=${i}`}_emit(e,t){s(this,e,t)}get _txt(){return c(this.txt,Ie,this.lang)}render(){const t=$.find(e=>e.value===this.method),i=this._comAccount;return e`
            <div class="qr-body">
                <div class="qr-card">
                    <div class="qr-card-top">
                        <span class="qr-method-name">${t?.label??""}</span>
                        ${"cash"!==this.method?e`<span class="qr-badge">VietQR</span>`:""}
                    </div>

                    ${"cash"===this.method?e`
                        <div class="qr-manual">
                            <iconify-icon icon="ion:cash-outline" class="cash-icon"></iconify-icon>
                            <span class="qr-manual-label">${this._txt.cod}</span>
                        </div>
                    `:this._qrLoading?e`
                        <div class="qr-manual">
                            <iconify-icon icon="ri:loader-4-line" class="spin"></iconify-icon>
                            <span class="qr-manual-label">${this._txt.qrLoading}</span>
                        </div>
                    `:this._qrDataUrl?e`
                        <img class="qr-img" src="${this._qrDataUrl}" alt="QR thanh toán" />
                    `:e`
                        <div class="qr-manual">
                            <iconify-icon icon="${t?.icon??"ri:qr-code-line"}"></iconify-icon>
                            <span class="qr-manual-phone">${i.accountNo}</span>
                            <span class="qr-manual-label">${i.accountName}</span>
                        </div>`}

                    <div class="qr-sep"></div>
                    <div class="qr-footer">
                        <span class="qr-footer-label">${this._txt.amountLabel}</span>
                        <span class="qr-amount">${n(this.amount,this.lang,"")} VND</span>
                    </div>
                </div>
                <div class="qr-ref">Mã: ${this.paymentId}</div>
            </div>

            <div class="actions">
                <web-button type="fill" color="success" height="45px" width="100%" fontSize="1rem" ?disabled=${this._comLocked}
                    ui=${this.ui} theme=${this.theme}
                    @clicked=${()=>this._emit("valider:paid",{paymentId:this.paymentId})}>
                    ${this._txt.paid}
                </web-button>
                <web-button type="ghost" height="32px" width="100%"
                    ui=${this.ui} theme=${this.theme}
                    @clicked=${()=>this._emit("valider:back",{})}>${this._txt.back}</web-button>
            </div>`}};customElements.get("svc-pay-valider")||customElements.define("svc-pay-valider",Te);var Re=class extends t{static styles=i(':host{box-sizing:border-box;--core-font:var(--font-sans,"system-ui");width:100%;font-family:var(--core-font);color:var(--color-base-content);display:block}.reason-form{flex-direction:column;gap:.5rem;width:100%;margin-top:.5rem;display:flex}.reason-title{min-height:var(--reason-title-min-height,auto);margin:0 0 .3rem;font-size:.95rem;font-weight:600;line-height:1.3}.reason-input{box-sizing:border-box;width:100%}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},title:{type:String},titleColor:{type:String},name:{type:String},phone:{type:String},note:{type:String},media:{type:String},namePh:{type:String},phonePh:{type:String},notePh:{type:String},mediaPh:{type:String},showNote:{type:Boolean},showMedia:{type:Boolean},actionLabel:{type:String},actionColor:{type:String},actionType:{type:String},actionDisabled:{type:Boolean}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.title="",this.titleColor="",this.name="",this.phone="",this.note="",this.media="",this.namePh="",this.phonePh="",this.notePh="",this.mediaPh="",this.showNote=!0,this.showMedia=!1,this.actionLabel="",this.actionColor="primary",this.actionType="fill",this.actionDisabled=!1}_dhInput(e,t){s(this,"reason:input",{key:e,value:t})}_dfAction(){this.actionDisabled||s(this,"reason:action",{})}render(){return e`
            <div class="reason-form">
                ${this.title?e`<p class="reason-title" style=${this.titleColor?`color: var(--color-${this.titleColor})`:""}>${this.title}</p>`:""}
                <web-text class="reason-input" placeholder=${this.namePh}
                    ui=${this.ui} theme=${this.theme} height="36px"
                    .value=${this.name}
                    @input=${e=>this._dhInput("name",e.detail.value)}>
                </web-text>
                <web-text class="reason-input" placeholder=${this.phonePh}
                    ui=${this.ui} theme=${this.theme} height="36px"
                    .value=${this.phone}
                    @input=${e=>this._dhInput("phone",e.detail.value)}>
                </web-text>
                ${this.showNote?e`
                    <web-textarea class="reason-input" placeholder=${this.notePh} .value=${this.note} rows="3"
                        ui=${this.ui} theme=${this.theme}
                        @input=${e=>this._dhInput("note",e.detail?.value??"")}>
                    </web-textarea>`:""}
                ${this.showMedia?e`
                    <web-photor-upload class="reason-input" multiple ui=${this.ui} placeholder=${this.mediaPh}
                        .value=${this.media}
                        @change=${e=>this._dhInput("media",e.detail.value)}>
                    </web-photor-upload>`:""}
                ${this.actionLabel?e`
                    <web-button type=${this.actionType} color=${this.actionColor} height="40px"
                        ?disabled=${this.actionDisabled}
                        @clicked=${()=>this._dfAction()}>${this.actionLabel}</web-button>`:""}
            </div>`}};customElements.get("svc-pay-reason")||customElements.define("svc-pay-reason",Re);function De(e){if(!e)return"";const t=new Date(e),i=e=>String(e).padStart(2,"0");return`${i(t.getDate())}-${i(t.getMonth()+1)}-${t.getFullYear()} ${i(t.getHours())}:${i(t.getMinutes())}:${i(t.getSeconds())}`}function Me(e){const t=Math.floor(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function je(t,i,r){const n=A(t);return n.at?e`
        <p class="handled-by">
            ${r}: ${n.name?[n.name,n.phone].filter(Boolean).join(" · "):i}${n.note?` — ${n.note}`:""} · ${De(n.at)}
        </p>`:e``}function qe(t,i,r,o){return t.length?e`
        <div class="order-items">
            ${t.map(t=>e`
                <div class="order-item-row">
                    <span class="order-item-name">${t.qty}× ${t.name}</span>
                    <span class="order-item-price">${n(Number(t.price??0)*Number(t.qty??1),o)}</span>
                </div>`)}
            <div class="order-item-row order-item-total">
                <span>${r.totalLabel}</span>
                <span>${n(i,o)}</span>
            </div>
        </div>`:e`<p class="order-items-empty">${r.orderItemsEmpty}</p>`}var Ne=class extends t{static styles=i(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.order-panel{flex-direction:column;gap:.6rem;display:flex}web-toggle{margin-bottom:.3rem}.hint{opacity:.6;margin:0;font-size:.8rem}.countdown{opacity:.8;margin-bottom:.5rem;font-size:.85rem;font-weight:600}.countdown.expired{color:var(--color-error);opacity:1}.order-items{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-radius:.75rem;flex-direction:column;gap:.4rem;padding:.75rem .9rem;display:flex}.order-items-empty{opacity:.5;margin:0;font-size:.85rem;font-style:italic}.order-item-row{justify-content:space-between;align-items:center;font-size:.85rem;display:flex}.order-item-name{opacity:.8}.order-item-price{font-weight:600}.order-item-total{border-top:1px dashed var(--color-base-300);color:var(--color-primary);margin-top:.3rem;padding-top:.4rem;font-weight:700}.invoice-lookup{text-align:center;flex-direction:column;align-items:center;gap:.6rem;padding:.5rem 0 1rem;display:flex}.invoice-qr{border:1px solid var(--color-base-300);background:var(--color-base-100);border-radius:.75rem;padding:.5rem}.invoice-id-link{color:var(--color-primary);align-items:center;gap:.4rem;font-size:.95rem;font-weight:700;text-decoration:none;display:inline-flex}.invoice-id-link:hover{text-decoration:underline}.invoice-hint{opacity:.6;max-width:320px;margin:0;font-size:.8rem}.actions{flex-direction:column;flex-shrink:0;gap:.5rem;width:100%;max-width:300px;margin:0 auto;padding:.625rem 1.25rem;display:flex}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},role:{type:String},subId:{type:String},txt:{type:Object},cancelTxt:{type:Object},wallet:{type:Object},vietqr:{type:Object},items:{type:Array},amount:{type:Number},isDelivery:{type:Boolean},hasCustomerData:{type:Boolean},payMethod:{type:String},paymentRef:{type:String},payExpired:{type:Boolean},payRemainingLabel:{type:String},hasInvoice:{type:Boolean},invoiceId:{type:String},invoiceUrl:{type:String},invoiceQrSrc:{type:String},_form:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.role="buyer",this.subId="placing",this.txt={},this.cancelTxt={},this.wallet={},this.vietqr={},this.items=[],this.amount=0,this.isDelivery=!1,this.hasCustomerData=!1,this.payMethod="cash",this.paymentRef="",this.payExpired=!1,this.payRemainingLabel="",this.hasInvoice=!1,this.invoiceId="",this.invoiceUrl="",this.invoiceQrSrc="",this._form={name:"",phone:"",note:""}}_emit(e,t={}){s(this,e,t)}_dhFormInput(e){this._form={...this._form,[e.key]:e.value}}render(){return"placing"===this.subId?this._rbPlacing():this._rbPaying()}_rbPlacing(){const t=this.isDelivery&&!this.hasCustomerData;return e`
            <div class="order-panel">
                <web-toggle .active=${this.isDelivery} label=${this.txt.deliveryToggleLabel}
                    ui=${this.ui} theme=${this.theme}
                    @change=${e=>this._emit("order:toggle-delivery",{active:e.detail.active})}>
                </web-toggle>
                <svc-pay-customer ui=${this.ui} theme=${this.theme} lang=${this.lang}></svc-pay-customer>
                ${qe(this.items,this.amount,this.txt,this.lang)}
                <svc-pay-booking
                    .wallet=${this.wallet}
                    method=${this.payMethod}
                    ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                    lang=${this.lang}
                    @payment:select=${e=>this._emit("order:payment-select",{method:e.detail.method})}>
                </svc-pay-booking>
                ${t?e`<p class="hint">${this.txt.customerRequiredHint}</p>`:""}
                <div class="actions">
                  <web-button type="fill" color="primary" height="45px" width="100%" fontSize="1rem"
                      ?disabled=${!this.items?.length||t} ui=${this.ui} theme=${this.theme}
                      @clicked=${()=>this._emit("order:place")}>${this.txt.continueToPayment}</web-button>
                  <web-button type="ghost" height="32px" width="100%" ui=${this.ui} theme=${this.theme}
                      @clicked=${()=>this._emit("order:back-to-cart")}>${this.txt.backToCart}</web-button>
                </div>
            </div>`}_rbPaying(){if(!this.hasInvoice)return e`
            <div class="order-panel">
                <div class="countdown ${this.payExpired?"expired":""}">
                    ${this.payExpired?this.txt.countdownExpired:`${this.txt.countdownLabel}: ${this.payRemainingLabel}`}
                </div>
                <svc-pay-valider
                    .wallet=${this.wallet}
                    .vietqr=${this.vietqr}
                    paymentId=${this.paymentRef}
                    .amount=${this.amount}
                    method=${this.payMethod}
                    ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                    lang=${this.lang}
                    @valider:paid=${e=>this._emit("order:paid",{paymentId:e.detail.paymentId})}
                    @valider:back=${()=>this._emit("order:back-to-placing")}>
                </svc-pay-valider>
            </div>`;const t=this._form;return e`
            <div class="order-panel">
                ${"seller"===this.role?e`
                    <svc-pay-reason ui=${this.ui} theme=${this.theme}
                        name=${t.name} phone=${t.phone} note=${t.note}
                        namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                        actionLabel=${this.cancelTxt.wardenConfirmPayment}
                        @reason:input=${e=>this._dhFormInput(e.detail)}
                        @reason:action=${()=>this._emit("order:confirm-payment",{handler:this._form})}>
                    </svc-pay-reason>`:""}
                <div class="invoice-lookup">
                    <img class="invoice-qr" src=${this.invoiceQrSrc} width="180" height="180" alt="QR" />
                    <a class="invoice-id-link" href=${this.invoiceUrl} target="_blank">
                        <iconify-icon icon="ri:receipt-line"></iconify-icon> ${this.invoiceId}
                    </a>
                    <p class="invoice-hint">${this.txt.invoiceLookupHint}</p>
                </div>
            </div>`}};customElements.get("svc-pay-order")||customElements.define("svc-pay-order",Ne);var Le={name:"",phone:"",note:""},Oe=class extends t{static styles=i(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.order-panel,.cancel-form,.cancel-block{flex-direction:column;gap:.6rem;display:flex}.waiting-note,.done-note{opacity:.7;font-size:.85rem;font-style:italic}.handled-by{opacity:.65;margin:0;font-size:.8rem}.hint{opacity:.6;margin:0;font-size:.8rem}.order-panel.reason-columns{--reason-title-min-height:2.6rem;grid-template-columns:1fr 1fr;align-items:start;column-gap:1.5rem;display:grid}.order-panel.reason-columns>svc-pay-reason{width:100%}@media (width<=640px){.order-panel.reason-columns{--reason-title-min-height:auto;grid-template-columns:1fr}}.cancel-block{border-top:1px dashed var(--color-base-300);margin-top:.75rem;padding-top:.75rem}.reason-columns>.cancel-block{border-top:none;margin-top:0;padding-top:0}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},role:{type:String},subId:{type:String},txt:{type:Object},cancelTxt:{type:Object},meta:{type:Object},stepTitle:{type:String},_prepareForm:{state:!0},_cancelForm:{state:!0},_buyerCancelReason:{state:!0},_sellerCancelledForm:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.role="buyer",this.subId="preparing",this.txt={},this.cancelTxt={},this.meta={},this.stepTitle="",this._prepareForm={...Le},this._cancelForm={...Le},this._buyerCancelReason="",this._sellerCancelledForm={...Le}}_emit(e,t={}){s(this,e,t)}_dhFormInput(e,t){this[e]={...this[e],[t.key]:t.value}}render(){return"preparing"===this.subId?this._rbPreparing():"cancelled"===this.subId?this._rbCancelled():this._rbDone()}_rbPreparing(){const t=this.meta.subStatus;if("seller"!==this.role)return e`
                <div class="order-panel">
                    ${A(this.meta.preparing).name?je(this.meta.preparing,this.txt.roleSeller,this.txt.handledByLabel):e`<span class="waiting-note">${this.txt.sellerPreparingNote}</span>`}
                    ${this._rbCancelBlockBuyer(t)}
                </div>`;const i=this._prepareForm;return e`
            <div class="order-panel reason-columns">
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    title=${this.stepTitle}
                    name=${i.name} phone=${i.phone} note=${i.note}
                    namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                    actionLabel=${this.txt.completeProcessing}
                    @reason:input=${e=>this._dhFormInput("_prepareForm",e.detail)}
                    @reason:action=${()=>this._emit("processing:complete",{handler:this._prepareForm})}>
                </svc-pay-reason>
                ${this._rbCancelBlockSeller(t)}
            </div>`}_rbCancelBlockBuyer(t){return t&&"rejected"!==t?e`
            <div class="cancel-block">
                <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.cancelTxt.cancelPendingBanner}>
                    ${this.txt.reasonLabel}: ${A(this.meta.cancel).note}
                </web-alert>
            </div>`:e`
            <div class="cancel-block">
                ${"rejected"===t?e`
                    <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.cancelTxt.cancelRejectedBanner}>
                        ${this.cancelTxt.cancelRejectReasonLabel}: ${A(this.meta.sellerCancelled).note}
                    </web-alert>`:""}
                <p class="hint">${this.txt.cancelHint}</p>
                <web-textarea placeholder=${this.txt.cancelReasonPh} .value=${this._buyerCancelReason} rows="3"
                    ui=${this.ui} theme=${this.theme}
                    @input=${e=>{this._buyerCancelReason=e.detail?.value??""}}></web-textarea>
                <web-button type="ghost" color="error" height="36px" ?disabled=${!(this._buyerCancelReason??"").trim()}
                    @clicked=${()=>{this._emit("processing:request-cancel",{reason:this._buyerCancelReason}),this._buyerCancelReason=""}}>
                    ${"rejected"===t?this.cancelTxt.cancelRetry:this.txt.cancelOrder}
                </web-button>
            </div>`}_rbCancelBlockSeller(t){if(!t||"rejected"===t){const t=this._cancelForm;return e`
                <div class="cancel-block">
                    <svc-pay-reason ui=${this.ui} theme=${this.theme}
                        title=${this.txt.sellerCancelHint} titleColor="error"
                        name=${t.name} phone=${t.phone} note=${t.note}
                        namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh}
                        notePh=${this.txt.sellerCancelReasonPh}
                        actionLabel=${this.txt.sellerCancelOrder} actionColor="error" actionType="soft"
                        ?actionDisabled=${!(t.note??"").trim()}
                        @reason:input=${e=>this._dhFormInput("_cancelForm",e.detail)}
                        @reason:action=${()=>{this._emit("processing:seller-cancel",{handler:this._cancelForm}),this._cancelForm={...Le}}}>
                    </svc-pay-reason>
                </div>`}const i=this._sellerCancelledForm;return e`
            <div class="cancel-block">
                <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.cancelTxt.cancelPendingBanner}>
                    ${this.txt.reasonLabel}: ${A(this.meta.cancel).note}
                </web-alert>
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    name=${i.name} phone=${i.phone} note=${i.note}
                    namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh}
                    notePh=${this.cancelTxt.wardenRejectReasonPh}
                    @reason:input=${e=>this._dhFormInput("_sellerCancelledForm",e.detail)}>
                </svc-pay-reason>
                <web-button type="fill" color="success" height="36px"
                    @clicked=${()=>this._emit("processing:accept-cancel",{handler:this._sellerCancelledForm})}>${this.cancelTxt.wardenAcceptCancel}</web-button>
                <web-button type="soft" color="error" height="36px" ?disabled=${!(i.note??"").trim()}
                    @clicked=${()=>this._emit("processing:reject-cancel",{handler:this._sellerCancelledForm})}>${this.cancelTxt.wardenRejectCancel}</web-button>
            </div>`}_rbCancelled(){const t="seller_cancelled"===this.meta.subStatus,i=A(this.meta.cancel);return e`
            <div class="order-panel">
                <web-alert type="error" ui=${this.ui} theme=${this.theme}
                    title="${this.txt.cancelledBy}: ${t?this.txt.roleSeller:this.txt.roleBuyer}">
                    ${this.txt.reasonLabel}: ${i.note}
                </web-alert>
                ${je(this.meta.cancel,t?this.txt.roleSeller:this.txt.roleBuyer,this.txt.handledByLabel)}
                ${t?"":je(this.meta.sellerCancelled,this.txt.roleSeller,this.txt.handledByLabel)}
            </div>`}_rbDone(){return e`
            <div class="order-panel">
                <p class="done-note">${this.txt.orderPreparedNote}</p>
                ${je(this.meta.preparing,this.txt.roleSeller,this.txt.handledByLabel)}
                ${"seller"===this.role?e`
                    <web-button type="fill" color="primary" height="40px"
                        @clicked=${()=>this._emit("processing:advance")}>${this.txt.continueToDelivery}</web-button>
                `:""}
            </div>`}};customElements.get("svc-pay-processing")||customElements.define("svc-pay-processing",Oe);var Be={name:"",phone:"",note:"",media:""},Ae=class extends t{static styles=i(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.order-panel,.return-form,.return-block{flex-direction:column;gap:.6rem;display:flex}.waiting-note,.done-note{opacity:.7;font-size:.85rem;font-style:italic}.handled-by{opacity:.65;margin:0;font-size:.8rem}.hint{opacity:.6;margin:0;font-size:.8rem}.countdown{opacity:.8;margin-bottom:.5rem;font-size:.85rem;font-weight:600}.countdown.expired{color:var(--color-error);opacity:1}.return-block{border-top:1px dashed var(--color-base-300);margin-top:.75rem;padding-top:.75rem}.returned-media{flex-wrap:wrap;gap:.5rem;display:flex}.returned-media img{object-fit:cover;border:1px solid var(--color-base-300);border-radius:.5rem;width:72px;height:72px}');static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},lang:{type:String},role:{type:String},subId:{type:String},txt:{type:Object},cancelTxt:{type:Object},meta:{type:Object},buyerPrefill:{type:Object},deliveredRemainingLabel:{type:String},_packingForm:{state:!0},_shippingForm:{state:!0},_shipperForm:{state:!0},_receivedForm:{state:!0},_showReturnForm:{state:!0},_returnForm:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.lang="vi",this.role="buyer",this.subId="packing",this.txt={},this.cancelTxt={},this.meta={},this.buyerPrefill=null,this.deliveredRemainingLabel="",this._packingForm={...Be},this._shippingForm={...Be},this._shipperForm={...Be},this._receivedForm={...Be},this._showReturnForm=!1,this._returnForm={...Be},this._prefillApplied=!1,this._shipperPrefillApplied=!1}willUpdate(e){if(e.has("buyerPrefill")&&this.buyerPrefill&&!this._prefillApplied&&(this._prefillApplied=!0,this._receivedForm={...this._receivedForm,name:this.buyerPrefill.name,phone:this.buyerPrefill.phone},this._returnForm={...this._returnForm,name:this.buyerPrefill.name,phone:this.buyerPrefill.phone}),e.has("meta")&&this.meta?.shipping&&!this._shipperPrefillApplied){this._shipperPrefillApplied=!0;const e=A(this.meta.shipping);this._shipperForm={...this._shipperForm,name:e.name,phone:e.phone}}}_rfDeliveredInfo(){return e`
            ${je(this.meta.shipping,this.txt.roleSeller,this.txt.handledByLabel)}
            ${je(this.meta.delivered,this.txt.roleSeller,this.txt.deliveredByLabel)}
        `}_emit(e,t={}){s(this,e,t)}_dhFormInput(e,t){this[e]={...this[e],[t.key]:t.value}}get _comIsPast(){const e=g.delivery??[],t=e.indexOf(this.subId),i=e.indexOf(this.meta.sub);return-1!==t&&-1!==i&&t<i}render(){return"pickup"===this.meta.fulfillment&&["packing","shipping","delivered"].includes(this.subId)?e`<div class="order-panel"><p class="waiting-note">${this.cancelTxt.notApplicablePickup}</p></div>`:"packing"===this.subId?this._rbPacking():"shipping"===this.subId?this._rbShipping():"delivered"===this.subId?this._rbDelivered():"received"===this.subId?this._rbReceived():this._rbReturned()}_rbPacking(){const t=this._comIsPast,i=this._packingForm;return e`
            <div class="order-panel">
                ${t?je(this.meta.packing,this.txt.roleSeller,this.txt.handledByLabel):"seller"===this.role?e`
                        <svc-pay-reason ui=${this.ui} theme=${this.theme}
                            name=${i.name} phone=${i.phone} note=${i.note}
                            namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                            actionLabel=${this.txt.confirmPacked}
                            @reason:input=${e=>this._dhFormInput("_packingForm",e.detail)}
                            @reason:action=${()=>this._emit("delivery:confirm-packed",{handler:this._packingForm})}>
                        </svc-pay-reason>
                    `:e`<span class="waiting-note">${this.txt.sellerPackingNote}</span>`}
            </div>`}_rbShipping(){const t=this._comIsPast,i=this._shippingForm;return e`
            <div class="order-panel">
                ${t?je(this.meta.shipping,this.txt.roleSeller,this.txt.handledByLabel):"seller"===this.role?e`
                        <svc-pay-reason ui=${this.ui} theme=${this.theme}
                            name=${i.name} phone=${i.phone} note=${i.note}
                            namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                            actionLabel=${this.txt.confirmShipped}
                            @reason:input=${e=>this._dhFormInput("_shippingForm",e.detail)}
                            @reason:action=${()=>this._emit("delivery:confirm-shipped",{handler:this._shippingForm})}>
                        </svc-pay-reason>
                    `:e`<span class="waiting-note">${this.txt.courierShippingNote}</span>`}
            </div>`}_rbDelivered(){const t=this._comIsPast,i=this._receivedForm,r=this._shipperForm,n=A(this.meta.delivered).at;return e`
            <div class="order-panel">
                ${this._rfDeliveredInfo()}
                ${t?"":"buyer"===this.role?e`
                        <p class="hint">${this.txt.shipperCallHint}</p>
                        <svc-pay-reason ui=${this.ui} theme=${this.theme}
                            name=${i.name} phone=${i.phone} note=${i.note}
                            namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                            actionLabel=${this.txt.confirmReceived}
                            @reason:input=${e=>this._dhFormInput("_receivedForm",e.detail)}
                            @reason:action=${()=>this._emit("delivery:confirm-received",{handler:this._receivedForm})}>
                        </svc-pay-reason>`:n?"":e`
                            <svc-pay-reason ui=${this.ui} theme=${this.theme}
                                name=${r.name} phone=${r.phone} note=${r.note}
                                namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.handlerNotePh}
                                actionLabel=${this.txt.confirmDelivery}
                                showMedia media=${r.media} mediaPh=${this.txt.deliveryMediaPh}
                                @reason:input=${e=>this._dhFormInput("_shipperForm",e.detail)}
                                @reason:action=${()=>this._emit("delivery:confirm-delivery",{handler:this._shipperForm})}>
                            </svc-pay-reason>`}
                ${!t&&n?e`
                    <div class="countdown">${this.txt.autoConfirmLabel}: ${this.deliveredRemainingLabel}</div>
                `:""}
                ${t?"":this._rbReturnBlock()}
            </div>`}_rbReceived(){return e`
            <div class="order-panel">
                <p class="done-note">${this.txt.transactionDone}</p>
                ${je(this.meta.received,this.txt.roleBuyer,this.txt.handledByLabel)}
                ${this._comIsPast?"":this._rbReturnBlock()}
            </div>`}_rbReturned(){const t=A(this.meta.return);return e`
            <div class="order-panel">
                <web-alert type="warning" ui=${this.ui} theme=${this.theme} title=${this.txt.returnedNote}>
                    ${this.txt.reasonLabel}: ${t.note}
                </web-alert>
                ${je(this.meta.return,this.txt.roleBuyer,this.txt.handledByLabel)}
                ${this._rfReturnedMedia(t.media)}
            </div>`}_rfReturnedMedia(t){return t?e`
            <div class="returned-media">
                ${t.split("|").filter(Boolean).map(t=>e`<img src=${t} alt="" loading="lazy" />`)}
            </div>`:e``}_rbReturnBlock(){if("buyer"!==this.role)return e``;if(!this._showReturnForm)return e`
            <div class="return-block">
                <web-button type="soft" color="warning" height="36px"
                    @clicked=${()=>{this._showReturnForm=!0}}>${this.txt.returnOrder}</web-button>
            </div>`;const t=this._returnForm;return e`
            <div class="return-form">
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    title=${this.txt.returnOrder} titleColor="error"
                    name=${t.name} phone=${t.phone} note=${t.note}
                    namePh=${this.txt.handlerNamePh} phonePh=${this.txt.handlerPhonePh} notePh=${this.txt.returnReasonPh}
                    showMedia media=${t.media} mediaPh=${this.txt.returnMediaPh}
                    @reason:input=${e=>this._dhFormInput("_returnForm",e.detail)}>
                </svc-pay-reason>
                <web-button type="soft" color="warning" height="40px" ?disabled=${!(t.note??"").trim()}
                    @clicked=${()=>this._emit("delivery:request-return",{reason:t.note,handler:t})}>
                    ${this.txt.confirmReturn}
                </web-button>
            </div>`}};customElements.get("svc-pay-delivery")||customElements.define("svc-pay-delivery",Ae);var Fe={name:"",phone:"",note:""},Ee=class extends t{static styles=[i(':host{--core-font:var(--font-sans,"system-ui");font-family:var(--core-font);color:var(--color-base-content);display:block}.pay-root{flex-direction:column;gap:0;display:flex}.pay-cart-wrap{display:contents}.major-steps{z-index:5;background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-bottom:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);padding:1rem 1rem .5rem;top:0}.major-body{padding:1rem 1.25rem 2rem}.major-desc{opacity:.7;margin:0 0 1rem;font-size:.85rem}.sub-steps{max-width:860px}.order-panel,.cancel-block{flex-direction:column;gap:.6rem;display:flex}.done-note{opacity:.7;font-size:.85rem;font-style:italic}.cancel-block{border-top:1px dashed var(--color-base-300);margin-top:.75rem;padding-top:.75rem}.hint{opacity:.6;margin:0;font-size:.8rem}.handled-by{opacity:.65;margin:0;font-size:.8rem}.party-row{flex-wrap:wrap;gap:.75rem 1.5rem;display:flex}.party-block{flex-direction:column;gap:.15rem;display:flex}.party-label{opacity:.6;font-size:.75rem}.party-value{font-size:.9rem;font-weight:600}.order-items{border:1px solid color-mix(in oklab, var(--color-base-content,#000) 12%, transparent);background:color-mix(in oklab, var(--color-base-100) 20%, transparent);border-radius:.75rem;flex-direction:column;gap:.4rem;padding:.75rem .9rem;display:flex}.order-items-empty{opacity:.5;margin:0;font-size:.85rem;font-style:italic}.order-item-row{justify-content:space-between;align-items:center;font-size:.85rem;display:flex}.order-item-name{opacity:.8}.order-item-price{font-weight:600}.order-item-total{border-top:1px dashed var(--color-base-300);color:var(--color-primary);margin-top:.3rem;padding-top:.4rem;font-weight:700}')];static properties={ui:{type:String},theme:{type:String},mainColors:{type:String},textColor:{type:String},service:{type:String},role:{type:String},lang:{type:String},txt:{type:Object},wallet:{type:Object},vietqr:{type:Object},invoiceId:{type:String},items:{type:Array},sellerId:{type:String},buyerId:{type:String},bayId:{type:String},isCart:{type:Boolean},cartService:{type:String},seller:{type:String},notes:{type:Array},owner:{type:Boolean},promosStore:{},_order:{state:!0},_invoice:{state:!0},_payMethod:{state:!0},_now:{state:!0},_refundForm:{state:!0},_selfOpen:{state:!0},_viewMajor:{state:!0},_customerData:{state:!0}};constructor(){super(),this.ui="modern",this.theme="",this.mainColors="",this.textColor="",this.service="pay",this.role="buyer",this.lang="vi",this.txt=null,this.wallet={},this.vietqr={},this.invoiceId="",this.items=[],this.sellerId="",this.buyerId="",this.bayId="",this.isCart=!1,this.cartService="",this.seller="",this.notes=[],this.owner=!1,this.promosStore=null,this._order=null,this._invoice=null,this._payMethod="cash",this._now=0,this._payTimer=null,this._refundForm={...Fe},this._selfOpen=!1,this._viewMajor="",this._lastMajor="",this._customerData={entries:[]},this._unsubOrder=null,this._unsubInvoice=null,this._unsubCustomer=null}connectedCallback(){super.connectedCallback(),this._dcInit(),this._unsubCustomer=me("pay_customer",e=>{this._customerData=e??{entries:[]}})}disconnectedCallback(){super.disconnectedCallback(),this._unsubOrder?.(),this._unsubInvoice?.(),this._unsubCustomer?.(),this._dcStopCountdown()}updated(e){if(e.has("service")&&this.service!==this._initedService&&this._dcReinit(),e.has("_order")||e.has("_invoice")){this._viewMajor&&this._comMajor!==this._lastMajor&&(this._viewMajor=""),this._lastMajor=this._comMajor;const e="order"===this._comMajor&&"paying"===this._comSub&&!this._invoice,t="delivered"===this._comSub&&!!this._comDeliveredAt;e||t?this._dcStartCountdown():this._dcStopCountdown()}!e.has("items")||this.invoiceId||this._invoice||"placing"!==this._order?.sub&&"paying"!==this._order?.sub||M(this.service,this.items)}_dcInit(){this._initedService=this.service,this.invoiceId?this._dcSubscribeInvoice(this.invoiceId):(I(this.service,{bayId:this.bayId,sellerId:this.sellerId,buyerId:this.buyerId,items:this.items}),this._order=d(this.service),this._unsubOrder=P(this.service,e=>{this._order=e,e.order_id&&e.payment_id&&!this._unsubInvoice&&this._dcSubscribeInvoice(e.order_id)}))}_dcReinit(){this._unsubOrder?.(),this._unsubOrder=null,this._unsubInvoice?.(),this._unsubInvoice=null,this._order=null,this._invoice=null,this.invoiceId="",this._dcInit()}_dcSubscribeInvoice(e){this.invoiceId=e,this._unsubInvoice=H(e,e=>{this._invoice=e})}_dcStartCountdown(){this._payTimer||(this._now=Date.now(),this._payTimer=setInterval(()=>{this._now=Date.now(),this._dcMaybeAutoConfirm()},1e3))}_dcStopCountdown(){this._payTimer&&(clearInterval(this._payTimer),this._payTimer=null)}_dcMaybeAutoConfirm(){this.invoiceId&&"delivered"===this._comSub&&this._comDeliveredExpired&&z(this.invoiceId,e=>{const t=A(e.delivered).at;return"delivered"===e.sub&&t&&Date.now()-t>=9e5},{sub:"received",autoCompleted:!0,received:B({})})}get _stepTxt(){return y[this.lang]??y.vi}get _desc(){return v[this.lang]??v.vi}get _txt(){return c(this.txt,_,this.lang)}get _cancelTxt(){return x[this.lang]??x.vi}get _comMajor(){return this._invoice?.meta?.major??this._order?.major??b[0]}get _comSub(){return this._invoice?.meta?.sub??this._order?.sub??g[b[0]][0]}get _comMeta(){return this._invoice?.meta??{}}get _comAmount(){return this._invoice?Number((this._invoice.summary||"0~0~0").split("~")[2])||0:this._order?.amount??0}get _comPaymentRef(){return this._order?.order_id?`PAY-${this._order.order_id}`:""}get _comInvoiceUrl(){return O(this.invoiceId,{role:this.role,sellerId:this.sellerId,bayId:this.bayId})}get _comInvoiceQrSrc(){return this._comInvoiceUrl?`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(this._comInvoiceUrl)}`:""}get _comCartService(){return this.cartService||`${this.service}_cart`}get _comIsDelivery(){return"delivery"===this._order?.fulfillment}get _comHasCustomerData(){const e=this._customerData?.entries??[],t=e.find(e=>e.isDefault)??e[0];return!!(t?.fullName?.trim()&&t?.phone?.trim()&&t?.location?.trim())}get _comOrderTerminal(){return["cancelled","received","returned"].includes(this._comSub)}get _comMajorSteps(){return b.map(e=>({id:e,label:this._stepTxt[e].label}))}get _comViewMajor(){return this._viewMajor||this._comMajor}get _comIsPastMajor(){return this._comViewMajor!==this._comMajor}get _comViewSub(){if(!this._comIsPastMajor)return this._comSub;const e=g[this._comViewMajor]??[];return e[e.length-1]??""}get _comSubSteps(){const e=this._comViewMajor,t=["returned","cancelled"];return(g[e]??[]).filter(e=>!t.includes(e)||this._comSub===e).map(t=>({id:t,label:this._stepTxt[e][t],...this._comIsPastMajor?{status:"done"}:{}}))}get _comViewDesc(){return this._comIsPastMajor?"order"===this._comViewMajor?this._desc[this._comViewSub]??"":"":this._desc[this._comSub]??""}get _comBuyerPrefill(){const e=N(this._invoice?.buyer);return{name:e.name,phone:e.phone,note:""}}get _comPayRemainingMs(){return this._order?.expires_at?Math.max(0,this._order.expires_at-this._now):f}get _comPayExpired(){return!!this._order?.expires_at&&this._comPayRemainingMs<=0}get _comPayRemainingLabel(){return Me(this._comPayRemainingMs)}get _comDeliveredAt(){return A(this._comMeta.delivered).at}get _comDeliveredRemainingMs(){return this._comDeliveredAt?Math.max(0,this._comDeliveredAt+9e5-this._now):0}get _comDeliveredExpired(){return!!this._comDeliveredAt&&this._comDeliveredRemainingMs<=0}get _comDeliveredRemainingLabel(){return Me(this._comDeliveredRemainingMs)}_dhOrderPaymentSelect(e){this._payMethod=e.detail.method}_dhOrderToggleDelivery(e){!function(e,t){const i=d(e);i&&"placing"===i.sub&&m(e,{fulfillment:"pickup"===t?"pickup":"delivery",updated_at:Date.now()})}(this.service,e.detail.active?"delivery":"pickup")}_dhMajorChange(e){const t=e.detail?.active??"";this._viewMajor=t===this._comMajor?"":t}_dhCartCheckout(e){const t=e.detail?.items??[],i={bayId:this.bayId,sellerId:this.sellerId,buyerId:this.buyerId,items:t};this._order?.order_id&&!this._comOrderTerminal?M(this.service,t):(this._unsubInvoice?.(),this._unsubInvoice=null,this._invoice=null,this.invoiceId="",function(e,t={}){const i=S(t);m(e,i)}(this.service,i)),this._order=d(this.service),this._selfOpen=!0,s(this,"cart:checkout",e.detail)}_dfPlaceOrder(){!function(e){const t=d(e);if(!t||!t.items.length||"placing"!==t.sub)return null;const i=Date.now();m(e,{sub:"paying",expires_at:i+f,updated_at:i}),d(e)}(this.service)}_dfBackToPlacing(){m(this.service,{sub:"placing",updated_at:Date.now()})}_dfBackToCart(){s(this,"pay:back-to-cart",{}),this.isCart&&(this._selfOpen=!1,m(this._comCartService,{items:this._order?.items??[],open:!0}))}async _dfConfirmPaid(){var e;await async function(e,t,i){const r=d(e);if(!r||"paying"!==r.sub||!t)return null;const n=Date.now(),o={id:r.order_id,order_id:r.order_id,issued_at:new Date(n).toISOString(),status:"issued",currency:r.currency,no:"",series:"",note:"",seller_id:r.seller_id,buyer_id:r.buyer_id,seller:E(i,r.seller_id),buyer:F(r.buyer_id),items:(s=r.items,(s??[]).map(e=>[e.name??"",Number(e.price??0),e.unit??"",Number(e.qty??1),0,Number(e.price??0)*Number(e.qty??1),0,0].join("~")).join("|")),summary:`${r.amount}~0~${r.amount}`,meta:{major:"order",sub:"paying",bay_id:r.bay_id,payment_id:t,buyer_confirmed:!0,seller_confirmed:!1,fulfillment:"pickup"===r.fulfillment?"pickup":"delivery",subStatus:null}};var s;try{await j().set(o.id,o)}catch(a){return console.error("[pay] promoteToInvoice Firestore error:",a),null}return m(e,{payment_id:t,buyer_confirmed:!0,updated_at:n}),o}(this.service,this._comPaymentRef,this.seller)&&this.isCart&&(e=this._comCartService,d(e)&&m(e,{items:[],checkedNotes:[]}))}_dfConfirmReceivedMoney(e){this.invoiceId&&J(this.invoiceId,e)}_dfCompleteProcessing(e){this.invoiceId&&function(e,t={}){z(e,e=>"processing"===e.major&&"preparing"===e.sub,e=>"pickup"===e.fulfillment?{major:"delivery",sub:"received",received:B(t)}:{sub:"done",preparing:B(t)})}(this.invoiceId,e)}_dfAdvanceToDelivery(){this.invoiceId&&z(this.invoiceId,e=>"processing"===e.major&&"done"===e.sub,{major:"delivery",sub:"packing"})}_dfStartShipping(e){this.invoiceId&&function(e,t={}){z(e,e=>"packing"===e.sub,{sub:"shipping",packing:B(t)})}(this.invoiceId,e)}_dfConfirmShipped(e){this.invoiceId&&function(e,t={}){z(e,e=>"shipping"===e.sub,{sub:"delivered",shipping:B(t)})}(this.invoiceId,e)}_dfConfirmDeliveryDone(e){this.invoiceId&&function(e,t={}){z(e,e=>"delivered"===e.sub&&!e.delivered,{delivered:B(t,!0)})}(this.invoiceId,e)}_dfConfirmReceived(e){this.invoiceId&&Z(this.invoiceId,e)}_dfRequestCancel(e){(e??"").trim()&&this.invoiceId&&function(e,t,i={}){const r=(t??"").trim();r&&z(e,e=>"preparing"===e.sub&&(!e.subStatus||"rejected"===e.subStatus),()=>({cancel:B({...i,note:r}),subStatus:"pending"}))}(this.invoiceId,e,this._comBuyerPrefill)}_dfAcceptCancel(e){this.invoiceId&&ee(this.invoiceId,e)}_dfSellerCancelOrder(e){(e.note??"").trim()&&this.invoiceId&&function(e,t,i={}){const r=(t??"").trim();r&&z(e,e=>"preparing"===e.sub&&"pending"!==e.subStatus,()=>({sub:"cancelled",subStatus:"seller_cancelled",cancel:B({...i,note:r})}),{status:"cancelled"})}(this.invoiceId,e.note,e)}_dfConfirmRefund(){this.invoiceId&&te(this.invoiceId,this._refundForm)}_dfRejectCancel(e){(e.note??"").trim()&&this.invoiceId&&ie(this.invoiceId,e.note,e)}_dfRequestReturn(e,t){(e??"").trim()&&this.invoiceId&&function(e,t,i={}){const r=(t??"").trim();r&&z(e,e=>"delivery"===e.major&&("delivered"===e.sub||"received"===e.sub),()=>({sub:"returned",return:B({...i,note:r},!0)}))}(this.invoiceId,e,t)}render(){const t=e`
            <div class="pay-root">
                <web-steps class="major-steps" linear
                    .steps=${this._comMajorSteps}
                    active=${this._comMajor}
                    ui=${this.ui} theme=${this.theme}
                    mainColors=${this.mainColors} textColor=${this.textColor}
                    size="lg" ?ended=${this._comOrderTerminal}
                    @change=${e=>this._dhMajorChange(e)}>
                </web-steps>
                <div class="major-body">
                    <p class="major-desc">${this._comViewDesc}</p>
                    ${this._rbSubSteps()}
                </div>
            </div>`;return this.isCart?e`
            <div class="pay-cart-wrap">
                ${"seller"===this.role?e``:e`
                    <svc-cart service=${this._comCartService} position="relative"
                        ui=${this.ui} theme=${this.theme} lang=${this.lang} ?owner=${this.owner}
                        .wallet=${this.wallet} .notes=${this.notes} .promosStore=${this.promosStore}
                        seller=${this.seller} sellerId=${this.sellerId} bayId=${this.bayId}
                        @cart:checkout=${e=>this._dhCartCheckout(e)}>
                    </svc-cart>`}
                <web-dialog type="mobile" ui=${this.ui} theme=${this.theme} maxWidth="640px"
                    .open=${this._selfOpen} @close=${()=>{this._selfOpen=!1}}>
                    ${t}
                </web-dialog>
            </div>`:t}_rbSubSteps(){return e`
            <web-steps class="sub-steps" isVertical linear
                .steps=${this._comSubSteps}
                active=${this._comViewSub}
                ui=${this.ui} theme=${this.theme}
                mainColors=${this.mainColors} textColor=${this.textColor}
                size="md" ?ended=${this._comOrderTerminal}>
                ${this._comSubSteps.map(t=>e`<div slot=${t.id}>${this._rfSubPanel(t.id)}</div>`)}
            </web-steps>`}_rfSubPanel(e){return this._comIsPastMajor?"order"===this._comViewMajor?this._rbOrderReadonlySummary():this._rbPastMajorSummary():"order"===this._comMajor?this._rbOrderLive(e):"processing"===this._comMajor?this._rbProcessingLive(e):this._rbDeliveryLive(e)}_rbOrderLive(t){return e`
            <svc-pay-order
                subId=${t} role=${this.role} lang=${this.lang}
                .txt=${this._txt} .cancelTxt=${this._cancelTxt}
                ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                .wallet=${this.wallet} .vietqr=${this.vietqr}
                .items=${this._order?.items??[]} .amount=${this._comAmount}
                ?isDelivery=${this._comIsDelivery} ?hasCustomerData=${this._comHasCustomerData}
                payMethod=${this._payMethod}
                paymentRef=${this._comPaymentRef}
                ?payExpired=${this._comPayExpired} payRemainingLabel=${this._comPayRemainingLabel}
                ?hasInvoice=${!!this._invoice}
                invoiceId=${this.invoiceId} invoiceUrl=${this._comInvoiceUrl} invoiceQrSrc=${this._comInvoiceQrSrc}
                @order:payment-select=${e=>this._dhOrderPaymentSelect(e)}
                @order:toggle-delivery=${e=>this._dhOrderToggleDelivery(e)}
                @order:place=${()=>this._dfPlaceOrder()}
                @order:back-to-cart=${()=>this._dfBackToCart()}
                @order:back-to-placing=${()=>this._dfBackToPlacing()}
                @order:paid=${()=>this._dfConfirmPaid()}
                @order:confirm-payment=${e=>this._dfConfirmReceivedMoney(e.detail.handler)}>
            </svc-pay-order>`}_rbProcessingLive(t){const i=e`
            <svc-pay-processing
                subId=${t} role=${this.role} lang=${this.lang}
                .txt=${this._txt} .cancelTxt=${this._cancelTxt} .meta=${this._comMeta}
                stepTitle=${this._stepTxt.processing.preparing}
                ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                @processing:complete=${e=>this._dfCompleteProcessing(e.detail.handler)}
                @processing:request-cancel=${e=>this._dfRequestCancel(e.detail.reason)}
                @processing:seller-cancel=${e=>this._dfSellerCancelOrder(e.detail.handler)}
                @processing:accept-cancel=${e=>this._dfAcceptCancel(e.detail.handler)}
                @processing:reject-cancel=${e=>this._dfRejectCancel(e.detail.handler)}
                @processing:advance=${()=>this._dfAdvanceToDelivery()}>
            </svc-pay-processing>`;return"cancelled"!==t?i:e`<div class="order-panel">${i}${this._rbRefundBlock()}</div>`}_rbDeliveryLive(t){const i=e`
            <svc-pay-delivery
                subId=${t} role=${this.role} lang=${this.lang}
                .txt=${this._txt} .cancelTxt=${this._cancelTxt} .meta=${this._comMeta}
                .buyerPrefill=${this._comBuyerPrefill}
                deliveredRemainingLabel=${this._comDeliveredRemainingLabel}
                ui=${this.ui} theme=${this.theme} mainColors=${this.mainColors} textColor=${this.textColor}
                @delivery:confirm-packed=${e=>this._dfStartShipping(e.detail.handler)}
                @delivery:confirm-shipped=${e=>this._dfConfirmShipped(e.detail.handler)}
                @delivery:confirm-delivery=${e=>this._dfConfirmDeliveryDone(e.detail.handler)}
                @delivery:confirm-received=${e=>this._dfConfirmReceived(e.detail.handler)}
                @delivery:request-return=${e=>this._dfRequestReturn(e.detail.reason,e.detail.handler)}>
            </svc-pay-delivery>`;return"returned"!==t?i:e`<div class="order-panel">${i}${this._rbRefundBlock()}</div>`}_rbPastMajorSummary(){return e`
            <div class="order-panel">
                <p class="done-note">${this._txt.pastStepDoneAt(De(A(this._comMeta.preparing).at))}</p>
                ${je(this._comMeta.preparing,this._txt.roleSeller,this._txt.handledByLabel)}
            </div>`}_rbOrderReadonlySummary(){const t=N(this._invoice?.buyer),i=L(this._invoice?.seller),r=this._invoice?q(this._invoice.items):this._order?.items??[];return e`
            <div class="order-panel">
                <div class="party-row">
                    <div class="party-block">
                        <span class="party-label">${this._txt.roleBuyer}</span>
                        <span class="party-value">${[t.name,t.phone].filter(Boolean).join(" · ")||"—"}</span>
                    </div>
                    <div class="party-block">
                        <span class="party-label">${this._txt.roleSeller}</span>
                        <span class="party-value">${[i.name,i.phone].filter(Boolean).join(" · ")||"—"}</span>
                    </div>
                </div>
                ${qe(r,this._comAmount,this._txt,this.lang)}
            </div>`}_rbRefundBlock(){if(A(this._comMeta.refunded).at)return e`
            <div class="cancel-block">
                <web-alert type="success" ui=${this.ui} theme=${this.theme} title=${this._txt.refundDoneNote}></web-alert>
                ${je(this._comMeta.refunded,this._txt.roleSeller,this._txt.handledByLabel)}
            </div>`;if("seller"!==this.role)return e`<p class="hint">${this._txt.refundPendingNote}</p>`;const t=this._refundForm;return e`
            <div class="cancel-block">
                <p class="hint">${this._txt.refundPendingNote}</p>
                <svc-pay-reason ui=${this.ui} theme=${this.theme}
                    name=${t.name} phone=${t.phone} note=${t.note}
                    namePh=${this._txt.handlerNamePh} phonePh=${this._txt.handlerPhonePh} notePh=${this._txt.handlerNotePh}
                    actionLabel=${this._txt.confirmRefundLabel}
                    @reason:input=${e=>{this._refundForm={...this._refundForm,[e.detail.key]:e.detail.value}}}
                    @reason:action=${()=>this._dfConfirmRefund()}>
                </svc-pay-reason>
            </div>`}};customElements.get("svc-pay")||customElements.define("svc-pay",Ee);export{L as _,J as a,x as b,W as c,V as d,G as f,q as g,N as h,Z as i,X as l,K as m,ee as n,te as o,Q as p,O as r,Y as s,De as t,H as u,ie as v,y as x,de as y};