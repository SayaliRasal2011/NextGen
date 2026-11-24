import{c as vt,u as kt,r as s,j as t,F as Q,P as rt,B as ot,X as St,H as zt}from"./index-Bqf7TJ8Z.js";import{A as R,E as Ct,T as st}from"./api-C5QDMVvg.js";import{A as At,D as Tt,h as Et,E as Pt,C as Lt,F as Qt,a as Rt,S as Dt}from"./index-DIhyqlDr.js";import{R as It}from"./receipt-D_UCIX3m.js";import{S as Ft}from"./search-Cqijw52N.js";import{M as Ot}from"./map-pin-fLzantJR.js";/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt={name:"calculator",size:24,node:[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]};lt.node;const Gt=vt(lt);async function Bt({fileName:a,base64:o,title:q,text:k}){try{if(Lt.isNativePlatform()){const c=await Qt.writeFile({path:a,data:o,directory:Rt.Cache,recursive:!0});await Dt.share({title:q,text:k,files:[c.uri],dialogTitle:"Share Quotation PDF"});return}const l=atob(o),u=new Uint8Array(l.length);for(let c=0;c<l.length;c++)u[c]=l.charCodeAt(c);const y=new Blob([u],{type:"application/pdf"}),b=URL.createObjectURL(y),f=document.createElement("a");f.href=b,f.download=a,document.body.appendChild(f),f.click(),f.remove(),setTimeout(()=>URL.revokeObjectURL(b),1e4)}catch(l){throw console.error("Quotation PDF sharing error:",l),l}}function Kt(){var Y,J,Z,tt,et,at;const{t:a}=kt(),[o,q]=s.useState(null),[k,l]=s.useState(!1),[u,y]=s.useState([]),[b,f]=s.useState(""),[c,D]=s.useState(!1),dt=["Sq. ft.","Cu. mtr.","R. mtr.","Bags","Nos","Hours","Days","L.S."],[h,S]=s.useState(!0),[j,I]=s.useState(18),[F,O]=s.useState(""),[G,B]=s.useState(""),[M,$]=s.useState("Civil Work (as per discussion)"),[W,U]=s.useState("AV TECH Baramati"),[H,_]=s.useState(""),[m,w]=s.useState([{sn:1,description:"",unit:"Sq. ft.",qty:1,discount:0,rate:0}]);s.useEffect(()=>{X()},[]);const X=async()=>{try{const e=await fetch(`${R}/api/quotations`);if(!e.ok)throw new Error("Failed to fetch quotations");const r=await e.json(),i=Array.isArray(r)?r.map(n=>({...n,items:Array.isArray(n.items)?n.items:[],notes:Array.isArray(n.notes)?n.notes:[],company:n.company||{},isGst:!!n.isGst})):[];return y(i),i}catch(e){return console.error("Error fetching quotations:",e),null}},ct=async()=>{try{if(!o){alert("Please select a quotation first.");return}const e=document.getElementById("qt-printable");if(!e){alert("Quotation document not found.");return}const r=await Et(e,{scale:2,useCORS:!0,allowTaint:!1,backgroundColor:"#ffffff",logging:!1,windowWidth:e.scrollWidth,windowHeight:e.scrollHeight}),i=new Pt({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),n=210,p=297,d=8,x=n-d*2,T=p-d*2,qt=r.width*T/x;let v=0,it=0;for(;v<r.height;){const yt=r.height-v,P=Math.min(qt,yt),g=document.createElement("canvas");g.width=r.width,g.height=Math.ceil(P);const L=g.getContext("2d");L.fillStyle="#ffffff",L.fillRect(0,0,g.width,g.height),L.drawImage(r,0,Math.floor(v),r.width,g.height,0,0,r.width,g.height),it>0&&i.addPage();const wt=g.toDataURL("image/jpeg",.95),Nt=P*x/r.width;i.addImage(wt,"JPEG",d,d,x,Nt,void 0,"FAST"),v+=P,it++}const E=o.quotationNumber||"Quotation",jt=`NextGen_Quotation_${E.replace(/[^a-zA-Z0-9_-]/g,"_")}.pdf`,nt=i.output("datauristring").split(",")[1];if(!nt)throw new Error("Unable to generate quotation PDF.");await Bt({fileName:jt,base64:nt,title:`Quotation ${E}`,text:`Please find attached quotation ${E}.`})}catch(e){console.error("Error generating quotation PDF:",e),alert("Unable to generate or share quotation PDF. Please try again.")}},z=e=>{const i=(Array.isArray(e==null?void 0:e.items)?e.items:[]).reduce((d,x)=>{const T=Number(x.rate||0)*(1-Number(x.discount||0)/100);return d+Number(x.qty||0)*T},0),n=e!=null&&e.isGst?i*(Number(e.gstRate||0)/100):0,p=i+n;return{total:i,gstAmount:n,finalAmount:p}},C=e=>{const r=Number(e.qty)||0,i=Number(e.rate)||0,n=Number(e.discount)||0;return r*i*(1-n/100)},A=m.reduce((e,r)=>e+C(r),0),K=h?A*(Number(j)||0)/100:0,pt=A+K,xt=()=>{w([...m,{sn:m.length+1,description:"",unit:"Sq. ft.",qty:1,discount:0,rate:0}])},ht=e=>{if(m.length===1)return;const r=m.filter((i,n)=>n!==e).map((i,n)=>({...i,sn:n+1}));w(r)},N=(e,r,i)=>{const n=[...m];n[e]={...n[e],[r]:i},w(n)},mt=()=>{O(""),B(""),_(""),$("Civil Work (as per discussion)"),U("AV TECH Baramati"),I(18),S(!0),w([{sn:1,description:"",unit:"Sq. ft.",qty:1,discount:0,rate:0}])},gt=async e=>{if(e.preventDefault(),c)return;D(!0);const r={quotationNumber:`QT-${Date.now().toString().slice(-6)}`,date:new Date().toLocaleDateString("en-GB"),isGst:h,gstRate:h&&Number(j)||0,company:{name:"NEXTGEN CONSTRUCTION",gstin:"27CFDPN2325F1ZP",officeAddress:"Office Address: S No 346/3/B/4, Ground floor, Karbharinagar, Baramati, 413102",contact:"+91 9822000000"},clientName:F||"Client Name",siteLocation:G||"Baramati, Pune",layoutDetails:M||"Civil Work",contractorName:W||"AV TECH Baramati",projectName:H||"General Project",items:m.map((i,n)=>({...i,sn:n+1,qty:Number(i.qty)||0,discount:Number(i.discount)||0,rate:Number(i.rate)||0})),notes:["SITE CLEARANCE AT CLIENT SCOPE","AFTER COMPLETION OF WORK MEASUREMENT WILL BE TAKEN",h?`${j}% GST WILL BE APPLIED`:"NON-GST QUOTATION","EXTRA WORK WILL BE CHARGED EXTRA","WATER & ELECTRICITY SUPPLY AT CLIENT SCOPE"]};try{const i=await fetch(`${R}/api/quotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(i.ok){const n=await i.json();if(console.log("POST saved quotation:",n),await X()===null){alert(a("quotationRefreshError"));return}l(!1),mt()}else{const n=await i.json();console.error("Server validation error:",n),alert(`${a("failedToSaveQuotation")}: ${n.error||n.message||a("unknownError")}`)}}catch(i){console.error("Error saving quotation to database:",i),alert(a("backendConnectionError"))}finally{D(!1)}},ut=async e=>{if(!(e!=null&&e._id)){alert("Quotation ID is missing. Cannot delete this quotation.");return}if(window.confirm(`Are you sure you want to delete quotation ${e.quotationNumber||""}?`))try{const i=await fetch(`${R}/api/quotations/${encodeURIComponent(e._id)}`,{method:"DELETE"}),n=await i.text();let p={};try{p=n?JSON.parse(n):{}}catch{throw new Error(`Backend returned invalid response. Status: ${i.status}. Response: ${n}`)}if(!i.ok)throw new Error(p.message||`Delete failed. Status: ${i.status}`);y(d=>d.filter(x=>String(x._id)!==String(e._id))),q(d=>d&&String(d._id)===String(e._id)?null:d),alert("Quotation deleted successfully.")}catch(i){console.error("Error deleting quotation:",i),alert(`Unable to delete quotation: ${i.message}`)}},V=u.filter(e=>{const r=b.toLowerCase();return String(e.quotationNumber||"").toLowerCase().includes(r)||String(e.clientName||"").toLowerCase().includes(r)||String(e.projectName||"").toLowerCase().includes(r)}),ft=u.reduce((e,r)=>e+z(r).finalAmount,0),bt=u.filter(e=>e.isGst).length;return t.jsxs("div",{className:"nextgen-quotation-page",children:[t.jsx("style",{children:`

                .nextgen-quotation-page {
                    min-height: 100vh;
                    background: #f5f1eb;
                    padding: 28px;
                    color: #211b17;
                    font-family: 'DM Sans', sans-serif;
                }

                .nextgen-quotation-page * {
                    box-sizing: border-box;
                }

                .qt-top-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 28px;
                }

                .qt-heading-left {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }

                .qt-heading-icon {
                    width: 52px;
                    height: 52px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #211b17;
                    color: #e8c29f;
                    box-shadow: 0 5px 15px rgba(33,27,23,.13);
                }

                .qt-heading-left h2 {
                    font-size: 25px;
                    font-weight: 800;
                    letter-spacing: -.6px;
                    margin: 0;
                    color: #211b17;
                }

                .qt-heading-left p {
                    font-size: 13px;
                    color: #87796c;
                    margin: 5px 0 0;
                }

                .qt-primary-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    background: #a45e30;
                    color: #fff;
                    border: none;
                    border-radius: 11px;
                    padding: 12px 19px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: .2s ease;
                    box-shadow: 0 5px 12px rgba(164,94,48,.18);
                }

                .qt-primary-btn:hover {
                    background: #814622;
                    transform: translateY(-1px);
                }

                .qt-summary-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 18px;
                    margin-bottom: 25px;
                }

                .qt-summary-card {
                    background: #fff;
                    border: 1px solid #e9dfd3;
                    border-radius: 16px;
                    padding: 21px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    min-width: 0;
                    box-shadow: 0 3px 12px rgba(45,34,24,.035);
                }

                .qt-summary-label {
                    font-size: 11px;
                    font-weight: 700;
                    color: #918274;
                    text-transform: uppercase;
                    letter-spacing: .8px;
                    margin-bottom: 9px;
                }

                .qt-summary-value {
                    font-size: 25px;
                    font-weight: 800;
                    color: #211b17;
                    overflow-wrap: anywhere;
                }

                .qt-summary-icon {
                    width: 46px;
                    height: 46px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f2e7dc;
                    color: #a45e30;
                    border-radius: 13px;
                    flex-shrink: 0;
                }

                .qt-list-card {
                    background: #fff;
                    border: 1px solid #e8dfd5;
                    border-radius: 17px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(45,34,24,.035);
                }

                .qt-list-header {
                    padding: 21px 23px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    border-bottom: 1px solid #eee6de;
                    flex-wrap: wrap;
                }

                .qt-list-title {
                    font-size: 16px;
                    font-weight: 800;
                    color: #211b17;
                    margin: 0;
                }

                .qt-list-subtitle {
                    font-size: 12px;
                    color: #928578;
                    margin-top: 5px;
                }

                .qt-search-box {
                    position: relative;
                    width: 250px;
                    max-width: 100%;
                }

                .qt-search-box svg {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #a29487;
                }

                .qt-search-box input {
                    width: 100%;
                    border: 1px solid #e6ddd3;
                    background: #faf8f5;
                    padding: 10px 12px 10px 36px;
                    border-radius: 9px;
                    font-size: 12px;
                    outline: none;
                    color: #211b17;
                }

                .qt-search-box input:focus {
                    border-color: #a45e30;
                }

                .qt-table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                }

                .qt-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                    min-width: 800px;
                }

                .qt-table thead {
                    background: #f7f3ee;
                }

                .qt-table th {
                    padding: 15px 18px;
                    font-size: 10px;
                    font-weight: 800;
                    color: #847466;
                    text-transform: uppercase;
                    letter-spacing: .7px;
                    white-space: nowrap;
                }

                .qt-table td {
                    padding: 17px 18px;
                    border-top: 1px solid #f0ebe5;
                    font-size: 12px;
                    color: #51483f;
                    white-space: nowrap;
                }

                .qt-table tbody tr {
                    transition: background .2s;
                }

                .qt-table tbody tr:hover {
                    background: #faf7f3;
                }

                .qt-number {
                    color: #a45e30 !important;
                    font-weight: 800;
                    font-family: monospace;
                    font-size: 13px !important;
                }

                .qt-client-name {
                    color: #211b17 !important;
                    font-weight: 700;
                }

                .qt-project-name {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .qt-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 6px 10px;
                    border-radius: 30px;
                    font-size: 10px;
                    font-weight: 800;
                }

                .qt-status-gst {
                    background: #edf3e8;
                    color: #547344;
                }

                .qt-status-nongst {
                    background: #f1eae1;
                    color: #8b6746;
                }

                .qt-view-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    border: 1px solid #e6d3c1;
                    color: #94552e;
                    background: #faf5ef;
                    border-radius: 8px;
                    padding: 8px 12px;
                    font-size: 11px;
                    font-weight: 800;
                    cursor: pointer;
                    transition: .2s;
                }

                .qt-view-btn:hover {
                    background: #a45e30;
                    color: #fff;
                    border-color: #a45e30;
                }

                .qt-empty-state {
                    padding: 65px 20px;
                    text-align: center;
                    color: #9b8c7d;
                }

                .qt-empty-icon {
                    width: 60px;
                    height: 60px;
                    background: #f5eee6;
                    color: #a45e30;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 15px;
                }

                .qt-empty-state h3 {
                    color: #45392e;
                    font-size: 15px;
                    font-weight: 800;
                    margin: 0 0 6px;
                }

                .qt-empty-state p {
                    font-size: 12px;
                    margin: 0;
                }

                /* CREATE MODAL */

                .qt-modal-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 1000;
                    background: rgba(21,17,14,.72);
                    backdrop-filter: blur(5px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .qt-modal {
                    background: #fff;
                    width: 100%;
                    max-width: 850px;
                    max-height: 92vh;
                    overflow-y: auto;
                    border-radius: 19px;
                    box-shadow: 0 25px 80px rgba(0,0,0,.25);
                }

                .qt-modal-header {
                    background: #211b17;
                    color: #fff;
                    padding: 21px 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 5;
                }

                .qt-modal-header h3 {
                    font-size: 17px;
                    font-weight: 800;
                    margin: 0;
                }

                .qt-modal-header p {
                    color: #c7b8a9;
                    font-size: 11px;
                    margin: 5px 0 0;
                }

                .qt-modal-close {
                    width: 34px;
                    height: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,.1);
                    color: white;
                    border: none;
                    border-radius: 9px;
                    cursor: pointer;
                }

                .qt-modal-close:hover {
                    background: #a45e30;
                }

                .qt-modal-body {
                    padding: 25px;
                }

                .qt-form-section {
                    margin-bottom: 23px;
                }

                .qt-section-heading {
                    font-size: 11px;
                    color: #a45e30;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    padding-bottom: 11px;
                    border-bottom: 1px solid #eee5dc;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .qt-form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 16px;
                }

                .qt-form-grid-three {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }

                .qt-field label {
                    display: block;
                    color: #65594e;
                    font-size: 11px;
                    font-weight: 800;
                    margin-bottom: 7px;
                }

                .qt-field input,
                .qt-field select {
                    width: 100%;
                    height: 41px;
                    padding: 0 12px;
                    background: #faf8f5;
                    border: 1px solid #e6ddd3;
                    border-radius: 8px;
                    font-size: 12px;
                    color: #30271f;
                    outline: none;
                }

                .qt-field input:focus,
                .qt-field select:focus {
                    border-color: #a45e30;
                    box-shadow: 0 0 0 3px rgba(164,94,48,.08);
                }

                .qt-gst-panel {
                    background: #f7f1e9;
                    border: 1px solid #e8d8c6;
                    border-radius: 12px;
                    padding: 17px;
                    margin-bottom: 22px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 14px;
                }

                .qt-gst-title {
                    font-size: 11px;
                    font-weight: 800;
                    color: #735032;
                    text-transform: uppercase;
                    letter-spacing: .7px;
                }

                .qt-radio-group {
                    display: flex;
                    align-items: center;
                    gap: 17px;
                    margin-top: 10px;
                }

                .qt-radio-group label {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #493c30;
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                }

                .qt-radio-group input {
                    accent-color: #a45e30;
                }

                .qt-gst-rate {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    font-size: 11px;
                    font-weight: 800;
                    color: #735032;
                }

                .qt-gst-rate input {
                    width: 75px;
                    padding: 8px;
                    border: 1px solid #ddc5ac;
                    border-radius: 7px;
                    outline: none;
                    background: white;
                    font-weight: 700;
                }

                /* ITEMS */

                .qt-item-container {
                    background: #faf8f5;
                    border: 1px solid #ece3da;
                    padding: 12px;
                    border-radius: 11px;
                    margin-bottom: 10px;
                }

                .qt-item-grid {
                    display: grid;
                    grid-template-columns: 30px minmax(130px, 2fr) 90px 75px 85px 80px 32px;
                    gap: 8px;
                    align-items: center;
                }

                .qt-item-grid input,
                .qt-item-grid select {
                    min-width: 0;
                    width: 100%;
                    height: 36px;
                    padding: 0 7px;
                    border: 1px solid #e3d9ce;
                    border-radius: 6px;
                    outline: none;
                    background: white;
                    color: #30271f;
                    font-size: 11px;
                }

                .qt-item-grid input:focus,
                .qt-item-grid select:focus {
                    border-color: #a45e30;
                }

                .qt-item-number {
                    font-size: 11px;
                    font-weight: 800;
                    color: #a45e30;
                    text-align: center;
                }

                .qt-item-amount {
                    font-size: 11px;
                    font-weight: 800;
                    text-align: right;
                    color: #7c4829;
                    overflow: hidden;
                }

                .qt-delete-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    background: #f8e9e7;
                    color: #bd5148;
                    width: 30px;
                    height: 30px;
                    border-radius: 7px;
                    cursor: pointer;
                }

                .qt-delete-btn:hover {
                    background: #bd5148;
                    color: white;
                }

                .qt-add-item {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    border: 1px dashed #c79b77;
                    background: #fbf6f0;
                    color: #99572f;
                    padding: 10px 14px;
                    border-radius: 8px;
                    font-size: 11px;
                    font-weight: 800;
                    cursor: pointer;
                    margin-top: 5px;
                }

                .qt-add-item:hover {
                    background: #f2e5d8;
                }

                /* TOTALS */

                .qt-total-panel {
                    background: #211b17;
                    border-radius: 12px;
                    padding: 20px;
                    color: #e9ddd0;
                    margin-top: 22px;
                }

                .qt-total-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 6px 0;
                    font-size: 12px;
                    color: #d0c0af;
                }

                .qt-total-final {
                    border-top: 1px solid #65503d;
                    margin-top: 10px;
                    padding-top: 14px;
                    font-size: 16px;
                    font-weight: 800;
                    color: #e8c29f;
                }

                .qt-modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 10px;
                    padding-top: 20px;
                    margin-top: 22px;
                    border-top: 1px solid #eee5dc;
                }

                .qt-cancel-btn {
                    padding: 11px 19px;
                    border: 1px solid #e1d8cf;
                    background: white;
                    color: #62564a;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                }

                .qt-cancel-btn:hover {
                    background: #f5f1eb;
                }

                .qt-save-btn {
                    padding: 11px 20px;
                    border: none;
                    background: #a45e30;
                    color: white;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 800;
                    cursor: pointer;
                }

                .qt-save-btn:hover {
                    background: #814622;
                }

                .qt-save-btn:disabled {
                    opacity: .6;
                    cursor: not-allowed;
                }

                /* QUOTATION VIEW */

                .qt-paper-area {
                    background: #eae4dc;
                    min-height: 100vh;
                    padding: 25px;
                    border-radius: 15px;
                }

                .qt-paper-actions {
                    max-width: 850px;
                    margin: 0 auto 20px;
                    display: flex;
                    justify-content: space-between;
                    gap: 12px;
                }

                .qt-back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: white;
                    border: 1px solid #ded3c7;
                    color: #45382d;
                    padding: 10px 15px;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 800;
                    cursor: pointer;
                }

                .qt-print-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #211b17;
                    color: #e8c29f;
                    border: none;
                    padding: 10px 17px;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 800;
                    cursor: pointer;
                }

                .qt-paper {
                    background: white;
                    max-width: 850px;
                    margin: 0 auto;
                    padding: 40px;
                    border: 1px solid #d5c6b5;
                    box-shadow: 0 10px 35px rgba(40,30,20,.12);
                    color: #171411;
                    font-family: Arial, sans-serif;
                    font-size: 12px;
                }

                .qt-paper-header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #211b17;
                }

                .qt-paper-logo {
                    width: 85px;
                    height: 85px;
                    object-fit: contain;
                    border: 1px solid #e5ded5;
                    padding: 4px;
                }

                .qt-paper-company h2 {
                    font-size: 20px;
                    font-weight: 900;
                    letter-spacing: 1px;
                    margin: 0 0 7px;
                    color: #211b17;
                }

                .qt-paper-company p {
                    font-size: 10px;
                    color: #5e554b;
                    margin: 4px 0;
                    line-height: 1.5;
                }

                .qt-paper-title {
                    text-align: center;
                    font-size: 17px;
                    letter-spacing: 3px;
                    font-weight: 900;
                    color: #a45e30;
                    padding: 18px 0;
                    border-bottom: 1px solid #c8b49e;
                }

                .qt-paper-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 15px;
                }

                .qt-paper-table td,
                .qt-paper-table th {
                    border: 1px solid #53483c;
                    padding: 10px;
                    text-align: left;
                }

                .qt-paper-table th {
                    background: #eee5d9;
                    font-weight: 800;
                    color: #211b17;
                    font-size: 10px;
                    text-transform: uppercase;
                }

                .qt-paper-table .qt-paper-label {
                    width: 27%;
                    font-weight: 800;
                    background: #f7f3ed;
                }

                .qt-paper-section {
                    background: #211b17 !important;
                    color: #e8c29f !important;
                    text-align: center !important;
                    font-weight: 900;
                    letter-spacing: 1px;
                    padding: 11px !important;
                }

                .qt-paper-total td {
                    font-weight: 800;
                    background: #f8f4ef;
                }

                .qt-paper-grand-total td {
                    background: #ead9c6;
                    font-weight: 900;
                    font-size: 13px;
                }

                .qt-paper-notes {
                    line-height: 1.8;
                    padding-left: 20px;
                    font-size: 10px;
                }

                .qt-paper-signature {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 75px;
                    font-size: 11px;
                    font-weight: 800;
                }

                .qt-paper-signature div:last-child {
                    width: 175px;
                    border-top: 1px solid #211b17;
                    text-align: center;
                    padding-top: 8px;
                }

                @media (max-width: 900px) {

                    .nextgen-quotation-page {
                        padding: 20px;
                    }

                    .qt-summary-grid {
                        gap: 12px;
                    }

                    .qt-item-grid {
                        grid-template-columns: 28px minmax(110px, 2fr) 75px 65px 75px 75px 30px;
                        gap: 5px;
                    }

                    .qt-paper {
                        padding: 25px;
                    }
                }

                @media (max-width: 650px) {

                    .nextgen-quotation-page {
                        padding: 14px;
                    }

                    .qt-top-heading {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .qt-heading-left h2 {
                        font-size: 20px;
                    }

                    .qt-primary-btn {
                        width: 100%;
                    }

                    .qt-summary-grid {
                        grid-template-columns: 1fr;
                        gap: 10px;
                    }

                    .qt-summary-card {
                        padding: 16px;
                    }

                    .qt-summary-value {
                        font-size: 22px;
                    }

                    .qt-list-header {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .qt-search-box {
                        width: 100%;
                    }

                    .qt-form-grid,
                    .qt-form-grid-three {
                        grid-template-columns: 1fr;
                    }

                    .qt-modal-overlay {
                        padding: 8px;
                        align-items: center;
                    }

                    .qt-modal {
                        max-height: 96vh;
                        border-radius: 13px;
                    }

                    .qt-modal-body {
                        padding: 16px;
                    }

                    .qt-gst-panel {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .qt-radio-group {
                        flex-wrap: wrap;
                        gap: 12px;
                    }

                    .qt-item-container {
                        overflow-x: auto;
                    }

                    .qt-item-grid {
                        min-width: 570px;
                    }

                   

                    .qt-paper-actions {
                        flex-wrap: wrap;
                    }

                    
.qt-paper-area {
    width: 100%;
    min-width: 0;
    padding: 8px;
    overflow-x: hidden;
    border-radius: 10px;
}

.qt-paper {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    padding: 10px;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 9px;
    overflow-wrap: break-word;
}

.qt-paper-header {
    gap: 8px;
    padding-bottom: 10px;
}

.qt-paper-logo {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
}

.qt-paper-company h2 {
    font-size: 13px;
    letter-spacing: 0;
    overflow-wrap: anywhere;
}

.qt-paper-company p {
    font-size: 8px;
    overflow-wrap: anywhere;
}

.qt-paper-title {
    font-size: 13px;
    letter-spacing: 1px;
    padding: 12px 0;
}

.qt-paper-table {
    width: 100%;
    table-layout: fixed;
    font-size: 8px;
}

.qt-paper-table td,
.qt-paper-table th {
    padding: 5px 3px;
    overflow-wrap: anywhere;
    word-break: break-word;
}

.qt-paper-table th {
    font-size: 7px;
}

.qt-paper-table .qt-paper-label {
    width: 32%;
}

.qt-paper-notes {
    padding-left: 15px;
    font-size: 8px;
}

.qt-paper-signature {
    margin-top: 35px;
    font-size: 8px;
    gap: 10px;
}

.qt-paper-signature div:last-child {
    width: 110px;
}

.qt-paper-actions {
    width: 100%;
    flex-wrap: wrap;
}


                    .qt-paper-header {
                        gap: 12px;
                    }

                    .qt-paper-logo {
                        width: 65px;
                        height: 65px;
                    }

                    .qt-paper-company h2 {
                        font-size: 16px;
                    }

                    .qt-modal-footer {
                        flex-wrap: wrap;
                    }

                    .qt-save-btn,
                    .qt-cancel-btn {
                        flex: 1;
                    }
                }

                @media print {

                    @page {
                        size: A4;
                        margin: 10mm;
                    }

                    body {
                        background: white !important;
                    }

                    body * {
                        visibility: hidden !important;
                    }

                    #qt-printable,
                    #qt-printable * {
                        visibility: visible !important;
                    }

                    #qt-printable {
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                        width: 100% !important;
                        max-width: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        border: none !important;
                        box-shadow: none !important;
                    }

                    .no-print {
                        display: none !important;
                    }

                    .qt-paper-table th,
                    .qt-paper-section,
                    .qt-paper-grand-total td {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                }

            `}),o?t.jsxs("div",{className:"qt-paper-area",children:[t.jsxs("div",{className:"qt-paper-actions no-print",children:[t.jsxs("button",{onClick:()=>q(null),className:"qt-back-btn",children:[t.jsx(At,{size:16}),a("backToQuotations")]}),t.jsxs("button",{type:"button",onClick:ct,className:"qt-print-btn",children:[t.jsx(Tt,{size:16}),"Share Quotation PDF"]})]}),t.jsxs("div",{id:"qt-printable",className:"qt-paper",children:[t.jsxs("div",{className:"qt-paper-header",children:[t.jsx("img",{src:"/logo.png",alt:"NextGen Logo",className:"qt-paper-logo"}),t.jsxs("div",{className:"qt-paper-company",children:[t.jsx("h2",{children:((Y=o.company)==null?void 0:Y.name)||"NEXTGEN CONSTRUCTION"}),t.jsxs("p",{children:[a("gstinLabel"),": ",((J=o.company)==null?void 0:J.gstin)||""]}),t.jsx("p",{children:((Z=o.company)==null?void 0:Z.officeAddress)||""}),t.jsxs("p",{children:[a("contactNoLabel"),": ",((tt=o.company)==null?void 0:tt.contact)||""]})]})]}),t.jsxs("div",{className:"qt-paper-title",children:[a("projectBudgetSummary"),t.jsx("div",{style:{fontSize:"11px",marginTop:"7px",letterSpacing:"2px"},children:a("quotationLabel")})]}),t.jsx("table",{className:"qt-paper-table",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{className:"qt-paper-label",children:a("quotationNumber")}),t.jsx("td",{children:o.quotationNumber})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"qt-paper-label",children:a("date")}),t.jsx("td",{children:o.date})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"qt-paper-label",children:a("nameOfClient")}),t.jsx("td",{children:o.clientName})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"qt-paper-label",children:a("addressSiteLocation")}),t.jsx("td",{children:o.siteLocation})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"qt-paper-label",children:a("layoutDetails")}),t.jsx("td",{children:o.layoutDetails})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"qt-paper-label",children:a("builderContractorName")}),t.jsx("td",{children:o.contractorName})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"qt-paper-label",children:a("nameOfProject")}),t.jsx("td",{children:o.projectName})]}),t.jsx("tr",{children:t.jsx("td",{colSpan:"2",className:"qt-paper-section",children:a("descriptionOfWork")})})]})}),t.jsxs("table",{className:"qt-paper-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{width:"8%"},children:a("srNo")}),t.jsx("th",{children:a("descriptionOfWork")}),t.jsx("th",{style:{width:"13%"},children:a("unit")}),t.jsx("th",{style:{width:"10%"},children:a("qty")}),t.jsx("th",{style:{width:"15%"},children:a("rate")}),t.jsx("th",{style:{width:"17%"},children:a("amount")})]})}),t.jsx("tbody",{children:[...Array(Math.max(10,((et=o.items)==null?void 0:et.length)||0))].map((e,r)=>{var p;const i=(p=o.items)==null?void 0:p[r],n=i?C(i):null;return t.jsxs("tr",{children:[t.jsx("td",{style:{textAlign:"center"},children:r+1}),t.jsx("td",{children:(i==null?void 0:i.description)||""}),t.jsx("td",{children:(i==null?void 0:i.unit)||""}),t.jsx("td",{style:{textAlign:"center"},children:(i==null?void 0:i.qty)??""}),t.jsx("td",{style:{textAlign:"right"},children:i?`₹${Number(i.rate||0).toFixed(2)}`:""}),t.jsx("td",{style:{textAlign:"right"},children:i?`₹${n.toFixed(2)}`:""})]},r)})})]}),(()=>{const{total:e,gstAmount:r,finalAmount:i}=z(o);return t.jsx("table",{className:"qt-paper-table",children:t.jsxs("tbody",{children:[t.jsxs("tr",{className:"qt-paper-total",children:[t.jsx("td",{colSpan:"5",style:{textAlign:"right"},children:a("totalAmount")}),t.jsxs("td",{style:{textAlign:"right"},children:["₹",e.toFixed(2)]})]}),o.isGst&&t.jsxs("tr",{className:"qt-paper-total",children:[t.jsxs("td",{colSpan:"5",style:{textAlign:"right"},children:[a("GST")," (",o.gstRate,"%)"]}),t.jsxs("td",{style:{textAlign:"right"},children:["₹",r.toFixed(2)]})]}),t.jsxs("tr",{className:"qt-paper-grand-total",children:[t.jsx("td",{colSpan:"5",style:{textAlign:"right"},children:a("finalTotalAmount")}),t.jsxs("td",{style:{textAlign:"right"},children:["₹",i.toFixed(2)]})]})]})})})(),t.jsx("table",{className:"qt-paper-table",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{className:"qt-paper-section",children:a("termsAndConditions")})}),t.jsx("tr",{children:t.jsx("td",{children:t.jsx("ol",{className:"qt-paper-notes",children:(Array.isArray(o.notes)?o.notes:[]).map((e,r)=>t.jsx("li",{children:e},r))})})})]})}),t.jsxs("div",{className:"qt-paper-signature",children:[t.jsxs("div",{children:["For ",((at=o.company)==null?void 0:at.name)||"NEXTGEN CONSTRUCTION"]}),t.jsx("div",{children:a("authorizedSignatory")})]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"qt-top-heading",children:[t.jsxs("div",{className:"qt-heading-left",children:[t.jsx("div",{className:"qt-heading-icon",children:t.jsx(Q,{size:25})}),t.jsxs("div",{children:[t.jsx("h2",{children:a("quotationsPageTitle")}),t.jsx("p",{children:a("quotationsPageSub")})]})]}),t.jsxs("button",{onClick:()=>l(!0),className:"qt-primary-btn",children:[t.jsx(rt,{size:17}),a("createNewQuotation")]})]}),t.jsxs("div",{className:"qt-summary-grid",children:[t.jsxs("div",{className:"qt-summary-card",children:[t.jsxs("div",{children:[t.jsx("div",{className:"qt-summary-label",children:a("totalQuotations")}),t.jsx("div",{className:"qt-summary-value",children:u.length})]}),t.jsx("div",{className:"qt-summary-icon",children:t.jsx(Q,{size:22})})]}),t.jsxs("div",{className:"qt-summary-card",children:[t.jsxs("div",{children:[t.jsx("div",{className:"qt-summary-label",children:a("gstQuotations")}),t.jsx("div",{className:"qt-summary-value",children:bt})]}),t.jsx("div",{className:"qt-summary-icon",children:t.jsx(It,{size:22})})]}),t.jsxs("div",{className:"qt-summary-card",children:[t.jsxs("div",{children:[t.jsx("div",{className:"qt-summary-label",children:a("totalQuotationValue")}),t.jsxs("div",{className:"qt-summary-value",children:["₹",ft.toLocaleString("en-IN",{maximumFractionDigits:0})]})]}),t.jsx("div",{className:"qt-summary-icon",children:t.jsx(Gt,{size:22})})]})]}),t.jsxs("div",{className:"qt-list-card",children:[t.jsxs("div",{className:"qt-list-header",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"qt-list-title",children:a("quotationsRecords")}),t.jsx("div",{className:"qt-list-subtitle",children:a("allGeneratedQuotations")})]}),t.jsxs("div",{className:"qt-search-box",children:[t.jsx(Ft,{size:15}),t.jsx("input",{type:"text",placeholder:a("searchPlaceholder"),value:b,onChange:e=>f(e.target.value)})]})]}),t.jsx("div",{className:"qt-table-wrapper",children:t.jsxs("table",{className:"qt-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:a("quotationId")}),t.jsx("th",{children:a("clientName")}),t.jsx("th",{children:a("project")}),t.jsx("th",{children:a("type")}),t.jsx("th",{children:a("date")}),t.jsx("th",{children:a("totalAmount")}),t.jsx("th",{style:{textAlign:"right"},children:a("action")})]})}),t.jsx("tbody",{children:V.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:"7",children:t.jsxs("div",{className:"qt-empty-state",children:[t.jsx("div",{className:"qt-empty-icon",children:t.jsx(Q,{size:27})}),t.jsx("h3",{children:a("noQuotationsFound")}),t.jsx("p",{children:a(b?"tryAnotherKeyword":"createFirstQuotationPrompt")})]})})}):V.map(e=>{const{finalAmount:r}=z(e);return t.jsxs("tr",{children:[t.jsx("td",{className:"qt-number",children:e.quotationNumber}),t.jsx("td",{className:"qt-client-name",children:e.clientName}),t.jsx("td",{children:t.jsxs("span",{className:"qt-project-name",children:[t.jsx(ot,{size:14}),e.projectName||"-"]})}),t.jsx("td",{children:t.jsx("span",{className:`qt-status ${e.isGst?"qt-status-gst":"qt-status-nongst"}`,children:e.isGst?`${a("GST")} (${e.gstRate}%)`:a("withoutGst")})}),t.jsx("td",{children:e.date}),t.jsxs("td",{style:{fontWeight:800,color:"#211b17"},children:["₹",r.toFixed(2)]}),t.jsx("td",{style:{textAlign:"right"},children:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"8px"},children:[t.jsxs("button",{onClick:()=>q(e),className:"qt-view-btn",children:[t.jsx(Ct,{size:14}),a("viewQuotation")]}),t.jsxs("button",{type:"button",onClick:()=>ut(e),title:"Delete Quotation",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"5px",background:"#f8e9e7",color:"#bd5148",border:"1px solid #f0d2ce",borderRadius:"8px",padding:"8px 10px",fontSize:"11px",fontWeight:800,cursor:"pointer"},children:[t.jsx(st,{size:14}),"Delete"]})]})})]},e._id||e.quotationNumber)})})]})})]})]}),k&&t.jsx("div",{className:"qt-modal-overlay",onClick:e=>{e.target===e.currentTarget&&l(!1)},children:t.jsxs("div",{className:"qt-modal",children:[t.jsxs("div",{className:"qt-modal-header",children:[t.jsxs("div",{children:[t.jsx("h3",{children:a("createNewQuotation")}),t.jsx("p",{children:a("prepareProfessionalEstimate")})]}),t.jsx("button",{type:"button",onClick:()=>l(!1),className:"qt-modal-close",children:t.jsx(St,{size:19})})]}),t.jsx("div",{className:"qt-modal-body",children:t.jsxs("form",{onSubmit:gt,children:[t.jsxs("div",{className:"qt-gst-panel",children:[t.jsxs("div",{children:[t.jsx("div",{className:"qt-gst-title",children:a("quotationBillingType")}),t.jsxs("div",{className:"qt-radio-group",children:[t.jsxs("label",{children:[t.jsx("input",{type:"radio",name:"qtGstOption",checked:h===!0,onChange:()=>S(!0)}),a("withGst")]}),t.jsxs("label",{children:[t.jsx("input",{type:"radio",name:"qtGstOption",checked:h===!1,onChange:()=>S(!1)}),a("withoutGst")]})]})]}),h&&t.jsxs("div",{className:"qt-gst-rate",children:[a("gstRatePercent"),t.jsx("input",{type:"number",min:"0",max:"100",step:"any",value:j,onChange:e=>I(e.target.value===""?"":Number(e.target.value))})]})]}),t.jsxs("div",{className:"qt-form-section",children:[t.jsxs("div",{className:"qt-section-heading",children:[t.jsx(ot,{size:15}),a("clientProjectDetails")]}),t.jsxs("div",{className:"qt-form-grid",children:[t.jsxs("div",{className:"qt-field",children:[t.jsxs("label",{children:[a("clientName")," *"]}),t.jsx("input",{type:"text",required:!0,placeholder:a("enterClientName"),value:F,onChange:e=>O(e.target.value)})]}),t.jsxs("div",{className:"qt-field",children:[t.jsx("label",{children:a("projectName")}),t.jsx("input",{type:"text",placeholder:a("enterProjectName"),value:H,onChange:e=>_(e.target.value)})]})]}),t.jsxs("div",{className:"qt-form-grid qt-form-grid-three",style:{marginTop:16},children:[t.jsxs("div",{className:"qt-field",children:[t.jsxs("label",{children:[t.jsx(Ot,{size:12,style:{display:"inline",marginRight:4}}),a("siteLocationPlaceholder")]}),t.jsx("input",{type:"text",placeholder:a("siteLocationPlaceholder"),value:G,onChange:e=>B(e.target.value)})]}),t.jsxs("div",{className:"qt-field",children:[t.jsx("label",{children:a("layoutDetails")}),t.jsx("input",{type:"text",value:M,onChange:e=>$(e.target.value)})]}),t.jsxs("div",{className:"qt-field",children:[t.jsx("label",{children:a("contractorName")}),t.jsx("input",{type:"text",value:W,onChange:e=>U(e.target.value)})]})]})]}),t.jsxs("div",{className:"qt-form-section",children:[t.jsxs("div",{className:"qt-section-heading",children:[t.jsx(zt,{size:15}),a("descriptionOfWork")]}),t.jsx("div",{style:{fontSize:11,color:"#968778",marginBottom:13},children:a("addWorkDetailsSub")}),m.map((e,r)=>{const i=C(e);return t.jsx("div",{className:"qt-item-container",children:t.jsxs("div",{className:"qt-item-grid",children:[t.jsxs("div",{className:"qt-item-number",children:["#",r+1]}),t.jsx("input",{type:"text",placeholder:a("workDescription"),required:!0,value:e.description,onChange:n=>N(r,"description",n.target.value)}),t.jsx("select",{value:e.unit,onChange:n=>N(r,"unit",n.target.value),children:dt.map(n=>t.jsx("option",{value:n,children:n},n))}),t.jsx("input",{type:"number",placeholder:a("qty"),min:"0",step:"any",value:e.qty,onChange:n=>N(r,"qty",n.target.value)}),t.jsx("input",{type:"number",placeholder:a("ratePlaceholder"),min:"0",step:"any",value:e.rate,onChange:n=>N(r,"rate",n.target.value)}),t.jsxs("div",{className:"qt-item-amount",children:["₹",i.toFixed(2)]}),t.jsx("button",{type:"button",onClick:()=>ht(r),className:"qt-delete-btn",title:a("removeItem"),children:t.jsx(st,{size:14})})]})},r)}),t.jsxs("button",{type:"button",onClick:xt,className:"qt-add-item",children:[t.jsx(rt,{size:15}),a("addLineItem")]})]}),t.jsxs("div",{className:"qt-total-panel",children:[t.jsxs("div",{className:"qt-total-row",children:[t.jsx("span",{children:a("totalAmount")}),t.jsxs("span",{children:["₹",A.toFixed(2)]})]}),h&&t.jsxs("div",{className:"qt-total-row",children:[t.jsxs("span",{children:[a("GST")," (",j||0,"%)"]}),t.jsxs("span",{children:["₹",K.toFixed(2)]})]}),t.jsxs("div",{className:"qt-total-row qt-total-final",children:[t.jsx("span",{children:a("finalTotalAmount")}),t.jsxs("span",{children:["₹",pt.toFixed(2)]})]})]}),t.jsxs("div",{className:"qt-modal-footer",children:[t.jsx("button",{type:"button",onClick:()=>l(!1),className:"qt-cancel-btn",children:a("cancel")}),t.jsx("button",{type:"submit",disabled:c,className:"qt-save-btn",children:a(c?"saving":"saveGenerateQuotation")})]})]})})]})})]})}export{Kt as default};
