import{c as L,u as Ce,r as l,F as N,j as e,P as z,B as De,a as A,H as Fe,X as U}from"./index-Bqf7TJ8Z.js";import{A as Le,T as D,E as T}from"./api-C5QDMVvg.js";import{R}from"./receipt-D_UCIX3m.js";import{C as ce,B as _e,F as le}from"./file-image-DOE3qVUR.js";import{M as Be}from"./map-pin-fLzantJR.js";import{I as Ee}from"./indian-rupee-BsOzM877.js";/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};pe.node;const Me=L(pe);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};de.node;const I=L(de);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};xe.node;const Ae=L(xe);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};je.node;const F=L(je),w=`${Le}/api/projects`,j={photos:[],plans:[],gallery:[],docs:[],bills:[]};function Ge(){const{lang:he,t}=Ce(),_=he==="mr"?"mr-IN":"en-IN",[P,v]=l.useState([]),[i,h]=l.useState(null),[n,me]=l.useState("photos"),[ge,m]=l.useState(!1),[fe,g]=l.useState(!1),[q,B]=l.useState(null),[be,G]=l.useState(!0),[S,y]=l.useState(!1),[E,O]=l.useState(""),[Y,H]=l.useState(""),[J,V]=l.useState(""),[W,K]=l.useState(""),[X,Z]=l.useState(""),[Q,ee]=l.useState(""),[te,re]=l.useState("Raw Materials"),[k,oe]=l.useState(""),[f,ae]=l.useState(null);l.useEffect(()=>{ue()},[]);const ue=async()=>{try{G(!0);const r=await fetch(w);if(!r.ok)throw new Error(`HTTP Error: ${r.status}`);const s=await r.json(),o=Array.isArray(s)?s.map(a=>({...a,files:{...j,...a.files||{}}})):[];v(o),h(a=>o.length?a&&o.find(p=>p._id===a._id)||o[0]:null)}catch(r){console.error("Error fetching projects:",r)}finally{G(!1)}},ve=async r=>{if(r.preventDefault(),!E.trim()){alert(t("alertEnterProjectName"));return}const s={name:E.trim(),location:Y||t("defaultLocationBaramati"),client:J||t("defaultClientName"),startDate:new Date().toLocaleDateString("en-GB"),status:"In Progress",files:{...j}};try{y(!0);const o=await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!o.ok){const d=await o.json();throw new Error(d.message||t("alertFailedCreateProject"))}const a=await o.json(),p={...a,files:{...j,...a.files||{}}};v(d=>[p,...d]),h(p),g(!1),O(""),H(""),V("")}catch(o){console.error("Error creating project:",o),alert(o.message||t("alertBackendConnect"))}finally{y(!1)}},we=async r=>{if(r&&window.confirm(t("confirmDeleteProject")))try{if(!(await fetch(`${w}/${r}`,{method:"DELETE"})).ok)throw new Error(t("alertUnableDeleteProject"));const o=P.filter(a=>a._id!==r);v(o),h(o[0]||null)}catch(s){console.error("Error deleting project:",s),alert(s.message)}},ye=r=>{var a;const s=(a=r.target.files)==null?void 0:a[0];if(!s)return;const o=new FileReader;o.onloadend=()=>{oe(o.result)},o.readAsDataURL(s)},ke=r=>{var a;const s=(a=r.target.files)==null?void 0:a[0];if(!s)return;if(!["application/pdf","image/jpeg","image/png"].includes(s.type)){alert("Please select a PDF, JPG, JPEG or PNG file."),r.target.value="";return}if(s.size>4*1024*1024){alert("File size must be less than 4 MB."),r.target.value="";return}ae(s)},Ne=async r=>{if(r.preventDefault(),!i)return;const s=new Date().toISOString().split("T")[0];try{if(y(!0),n==="bills"){if(!f){alert("Please select a bill document or image."),y(!1);return}const o=new FormData;o.append("vendor",X||"General Vendor"),o.append("amount",Q),o.append("category",te),o.append("date",s),o.append("billNo",`BILL-${Date.now()}`),o.append("billFile",f);const a=await fetch(`${w}/${i._id}/bills`,{method:"POST",body:o}),p=await a.json();if(!a.ok)throw new Error(p.message||"Unable to upload material bill.");const d={...p,files:{...j,...p.files||{}}};h(d),v(b=>b.map(u=>u._id===d._id?d:u))}else{const o={...j,...i.files||{}},a={id:Date.now(),title:W||t("untitledAsset"),date:s,url:k||"https://images.unsplash.com/photo-1541888946425-d0fbb18f86f7?w=600",size:"1.8 MB",type:t(n==="docs"?"pdfType":"imageType")};o[n]=[a,...o[n]||[]];const p=await fetch(`${w}/${i._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!p.ok)throw new Error(t("alertUnableSaveFiles"));const d=await p.json(),b={...d,files:{...j,...d.files||{}}};h(b),v(u=>u.map(ne=>ne._id===b._id?b:ne))}m(!1),C()}catch(o){console.error("Error uploading project file:",o),alert(o.message||"Unable to save file.")}finally{y(!1)}},C=()=>{K(""),Z(""),ee(""),oe(""),ae(null),re("Raw Materials")},M=async(r,s)=>{if(!i)return;const o={...j,...i.files||{}};o[s]=(o[s]||[]).filter(a=>a.id!==r&&a._id!==r);try{const a=await fetch(`${w}/${i._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!a.ok)throw new Error(t("alertUnableDeleteItem"));const p=await a.json(),d={...p,files:{...j,...p.files||{}}};h(d),v(b=>b.map(u=>u._id===d._id?d:u))}catch(a){console.error("Error deleting item:",a),alert(a.message)}},ze=r=>!r||r==="In Progress"?t("inProgress"):r,Pe=r=>{switch(r){case"Raw Materials":return t("catRawMaterials");case"Electrical & Plumbing":return t("catElectricalPlumbing");case"Finishing & Tiles":return t("catFinishingTiles");case"Labor & Equipment":return t("catLaborEquipment");case"General":default:return r||t("generalCategory")}},c={...j,...(i==null?void 0:i.files)||{}},se=[{id:"photos",label:t("tabPhotosLabel"),description:t("tabPhotosDesc"),icon:I},{id:"plans",label:t("tabPlansLabel"),description:t("tabPlansDesc"),icon:Me},{id:"gallery",label:t("tabGalleryLabel"),description:t("tabGalleryDesc"),icon:Ae},{id:"docs",label:t("tabDocsLabel"),description:t("tabDocsDesc"),icon:N},{id:"bills",label:t("tabBillsLabel"),description:t("tabBillsDesc"),icon:R}],ie=(c.bills||[]).reduce((r,s)=>r+Number(s.amount||0),0),Se=c.photos.length+c.plans.length+c.gallery.length+c.docs.length,x=se.find(r=>r.id===n);return be?e.jsxs("div",{className:"project-page",children:[e.jsx("style",{children:$}),e.jsxs("div",{className:"project-loading",children:[e.jsx("div",{className:"project-loader"}),e.jsx("p",{children:t("loadingProjects")})]})]}):e.jsxs("div",{className:"project-page",children:[e.jsx("style",{children:$}),e.jsxs("div",{className:"project-page-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"project-eyebrow",children:[e.jsx("span",{className:"project-eyebrow-line"}),t("constructionWorkspace")]}),e.jsx("h1",{children:t("projectManagementTitle")}),e.jsx("p",{children:t("projectManagementSub")})]}),e.jsxs("button",{className:"project-primary-btn",onClick:()=>g(!0),children:[e.jsx(z,{size:17}),t("createProject")]})]}),P.length===0?e.jsxs("div",{className:"project-empty-workspace",children:[e.jsx("div",{className:"project-empty-icon",children:e.jsx(De,{size:34})}),e.jsx("h2",{children:t("noProjectsYet")}),e.jsx("p",{children:t("noProjectsDesc")}),e.jsxs("button",{className:"project-primary-btn",onClick:()=>g(!0),children:[e.jsx(z,{size:17}),t("createFirstProject")]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"project-selector-panel",children:[e.jsxs("div",{className:"project-selector-left",children:[e.jsx("div",{className:"project-selector-icon",children:e.jsx(A,{size:21})}),e.jsxs("div",{className:"project-selector-info",children:[e.jsx("span",{children:t("activeWorkspace")}),e.jsx("select",{value:(i==null?void 0:i._id)||"",onChange:r=>{const s=P.find(o=>o._id===r.target.value);h(s||null)},children:P.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))})]})]}),e.jsxs("div",{className:"project-selector-actions",children:[e.jsxs("button",{className:"project-secondary-btn",onClick:()=>g(!0),children:[e.jsx(z,{size:15}),t("addProject")]}),e.jsxs("button",{className:"project-delete-btn",onClick:()=>we(i==null?void 0:i._id),disabled:!i,children:[e.jsx(D,{size:15}),t("delete")]})]})]}),i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"project-hero",children:[e.jsx("div",{className:"project-hero-decoration"}),e.jsxs("div",{className:"project-hero-content",children:[e.jsxs("div",{className:"project-hero-top",children:[e.jsxs("div",{className:"project-status",children:[e.jsx("span",{className:"project-status-dot"}),ze(i.status)]}),e.jsxs("span",{className:"project-start-date",children:[e.jsx(ce,{size:13}),t("started")," ",i.startDate||t("na")]})]}),e.jsx("h2",{children:i.name}),e.jsxs("div",{className:"project-hero-meta",children:[e.jsxs("span",{children:[e.jsx(Be,{size:15}),i.location||t("locationNotSpecified")]}),e.jsxs("span",{children:[e.jsx(_e,{size:15}),i.client||t("clientNotSpecified")]})]})]}),e.jsxs("div",{className:"project-hero-mark",children:[e.jsx(Fe,{size:62,strokeWidth:1.1}),e.jsx("span",{children:t("projectBadge")})]})]}),e.jsxs("div",{className:"project-stat-grid",children:[e.jsxs("div",{className:"project-stat-card",children:[e.jsx("div",{className:"project-stat-icon bronze",children:e.jsx(A,{size:20})}),e.jsxs("div",{children:[e.jsx("span",{children:t("projectAssets")}),e.jsx("strong",{children:Se}),e.jsx("small",{children:t("uploadedFiles")})]})]}),e.jsxs("div",{className:"project-stat-card",children:[e.jsx("div",{className:"project-stat-icon sand",children:e.jsx(I,{size:20})}),e.jsxs("div",{children:[e.jsx("span",{children:t("sitePhotosStat")}),e.jsx("strong",{children:c.photos.length}),e.jsx("small",{children:t("progressImages")})]})]}),e.jsxs("div",{className:"project-stat-card",children:[e.jsx("div",{className:"project-stat-icon dark",children:e.jsx(N,{size:20})}),e.jsxs("div",{children:[e.jsx("span",{children:t("documentsStat")}),e.jsx("strong",{children:c.docs.length}),e.jsx("small",{children:t("projectRecords")})]})]}),e.jsxs("div",{className:"project-stat-card",children:[e.jsx("div",{className:"project-stat-icon expense",children:e.jsx(Ee,{size:20})}),e.jsxs("div",{children:[e.jsx("span",{children:t("materialExpenses")}),e.jsxs("strong",{children:["₹",ie.toLocaleString(_)]}),e.jsxs("small",{children:[c.bills.length," ",t("billsRecorded")]})]})]})]}),e.jsxs("div",{className:"project-section-heading",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"project-eyebrow",children:[e.jsx("span",{className:"project-eyebrow-line"}),t("projectResources")]}),e.jsx("h3",{children:t("projectFilesRecords")}),e.jsx("p",{children:t("projectFilesRecordsSub")})]}),e.jsxs("button",{className:"project-primary-btn",onClick:()=>m(!0),children:[e.jsx(F,{size:16}),t(n==="bills"?"uploadMaterialBill":n==="docs"?"uploadDocument":"uploadAsset")]})]}),e.jsx("div",{className:"project-tabs",children:se.map(r=>{var p;const s=r.icon,o=((p=c[r.id])==null?void 0:p.length)||0,a=n===r.id;return e.jsxs("button",{className:`project-tab ${a?"active":""}`,onClick:()=>me(r.id),children:[e.jsx("div",{className:"project-tab-icon",children:e.jsx(s,{size:18})}),e.jsxs("div",{className:"project-tab-text",children:[e.jsx("strong",{children:r.label}),e.jsx("span",{children:r.description})]}),e.jsx("span",{className:"project-tab-count",children:o})]},r.id)})}),["photos","plans","gallery"].includes(n)&&e.jsxs("div",{className:"project-content-area",children:[e.jsxs("div",{className:"project-content-heading",children:[e.jsxs("div",{children:[e.jsx("h3",{children:x==null?void 0:x.label}),e.jsx("p",{children:x==null?void 0:x.description})]}),e.jsxs("span",{className:"project-record-count",children:[c[n].length," ",t("filesCount")]})]}),c[n].length===0?e.jsxs("div",{className:"project-empty-content",children:[e.jsx("div",{className:"project-empty-icon",children:e.jsx(I,{size:30})}),e.jsx("h3",{children:t("noFilesUploadedYet")}),e.jsx("p",{children:t("uploadFirstFilePrompt").replace("{type}",((x==null?void 0:x.label)||"").toLowerCase())}),e.jsxs("button",{className:"project-secondary-btn",onClick:()=>m(!0),children:[e.jsx(z,{size:15}),t("uploadFirstFile")]})]}):e.jsx("div",{className:"project-asset-grid",children:c[n].map(r=>e.jsxs("div",{className:"project-asset-card",children:[e.jsxs("div",{className:"project-asset-image",children:[e.jsx("img",{src:r.url,alt:r.title||t("untitledAsset")}),e.jsxs("div",{className:"project-asset-overlay",children:[e.jsx("button",{onClick:()=>B(r.url),title:t("preview"),children:e.jsx(T,{size:17})}),e.jsx("button",{className:"danger",onClick:()=>M(r.id||r._id,n),title:t("delete"),children:e.jsx(D,{size:17})})]}),e.jsx("span",{className:"project-asset-type",children:t(n==="plans"?"floorPlanBadge":n==="gallery"?"galleryBadge":"sitePhotoBadge")})]}),e.jsxs("div",{className:"project-asset-info",children:[e.jsx("h4",{children:r.title||t("untitledAsset")}),e.jsxs("span",{children:[e.jsx(ce,{size:12}),t("uploadedOn")," ",r.date||t("na")]})]})]},r.id||r._id))})]}),n==="docs"&&e.jsxs("div",{className:"project-content-area",children:[e.jsxs("div",{className:"project-content-heading",children:[e.jsxs("div",{children:[e.jsx("h3",{children:t("engineeringDocuments")}),e.jsx("p",{children:t("engineeringDocumentsSub")})]}),e.jsxs("span",{className:"project-record-count",children:[c.docs.length," ",t("documentsCount")]})]}),c.docs.length===0?e.jsxs("div",{className:"project-empty-content",children:[e.jsx("div",{className:"project-empty-icon",children:e.jsx(N,{size:30})}),e.jsx("h3",{children:t("noDocumentsAvailable")}),e.jsx("p",{children:t("noDocumentsDesc")}),e.jsxs("button",{className:"project-secondary-btn",onClick:()=>m(!0),children:[e.jsx(F,{size:15}),t("uploadDocument")]})]}):e.jsx("div",{className:"project-document-list",children:c.docs.map(r=>e.jsxs("div",{className:"project-document-row",children:[e.jsx("div",{className:"project-document-icon",children:e.jsx(N,{size:22})}),e.jsxs("div",{className:"project-document-info",children:[e.jsx("h4",{children:r.title}),e.jsxs("p",{children:[r.type||t("fileUnavailable"),e.jsx("span",{children:"•"}),r.size||t("fileSizeUnavailable"),e.jsx("span",{children:"•"}),t("uploadedOn")," ",r.date||t("na")]})]}),e.jsxs("div",{className:"project-document-actions",children:[e.jsxs("a",{href:r.url,target:"_blank",rel:"noreferrer",className:"project-view-btn",children:[e.jsx(T,{size:15}),t("view")]}),e.jsx("button",{className:"project-icon-delete",onClick:()=>M(r.id||r._id,"docs"),title:t("deleteDocument"),children:e.jsx(D,{size:16})})]})]},r.id||r._id))})]}),n==="bills"&&e.jsxs("div",{className:"project-content-area",children:[e.jsxs("div",{className:"project-bill-summary",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"project-eyebrow",children:[e.jsx("span",{className:"project-eyebrow-line"}),t("expenseTracking")]}),e.jsx("h3",{children:t("materialPurchaseRecords")}),e.jsx("p",{children:t("materialPurchaseRecordsSub")})]}),e.jsxs("div",{className:"project-expense-total",children:[e.jsx("span",{children:t("totalRecordedExpense")}),e.jsxs("strong",{children:["₹",ie.toLocaleString(_)]}),e.jsxs("small",{children:[c.bills.length," ",t("invoicesCount")]})]})]}),e.jsx("div",{className:"project-table-wrapper",children:e.jsxs("table",{className:"project-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("invoiceNumber")}),e.jsx("th",{children:t("vendor")}),e.jsx("th",{children:t("category")}),e.jsx("th",{children:t("date")}),e.jsx("th",{className:"text-right",children:t("amountCol")}),e.jsx("th",{className:"text-center",children:"Attachment"}),e.jsx("th",{className:"text-center",children:t("actionCol")})]})}),e.jsx("tbody",{children:c.bills.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:"7",children:e.jsxs("div",{className:"project-table-empty",children:[e.jsx(R,{size:28}),e.jsx("strong",{children:t("noMaterialBillsRecorded")}),e.jsx("span",{children:t("uploadedBillsAppearHere")})]})})}):c.bills.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"project-invoice-number",children:r.billNo||t("na")})}),e.jsx("td",{className:"project-vendor-name",children:r.vendor||t("generalVendor")}),e.jsx("td",{children:e.jsx("span",{className:"project-category-tag",children:Pe(r.category)})}),e.jsx("td",{className:"project-date-cell",children:r.date||t("na")}),e.jsxs("td",{className:"project-amount-cell",children:["₹",Number(r.amount||0).toLocaleString(_)]}),e.jsx("td",{className:"text-center",children:r.fileUrl?e.jsxs("a",{href:r.fileUrl,target:"_blank",rel:"noreferrer",className:"project-view-btn",download:r.fileName||"material-bill",children:[e.jsx(T,{size:15}),"View Bill"]}):e.jsx("span",{style:{color:"#a49a8f",fontSize:"10px"},children:"No attachment"})}),e.jsx("td",{className:"text-center",children:e.jsx("button",{className:"project-icon-delete",onClick:()=>M(r.id||r._id,"bills"),title:t("deleteBill"),children:e.jsx(D,{size:16})})})]},r.id||r._id))})]})})]})]})]}),fe&&e.jsx("div",{className:"project-modal-backdrop",onClick:()=>g(!1),children:e.jsxs("div",{className:"project-modal",onClick:r=>r.stopPropagation(),children:[e.jsxs("div",{className:"project-modal-header",children:[e.jsx("div",{className:"project-modal-heading-icon",children:e.jsx(A,{size:21})}),e.jsxs("div",{children:[e.jsx("h3",{children:t("createNewProjectTitle")}),e.jsx("p",{children:t("createNewProjectSub")})]}),e.jsx("button",{className:"project-modal-close",onClick:()=>g(!1),children:e.jsx(U,{size:19})})]}),e.jsxs("form",{onSubmit:ve,children:[e.jsxs("div",{className:"project-form-group",children:[e.jsx("label",{children:t("projectNameLabel")}),e.jsx("input",{type:"text",required:!0,placeholder:t("projectNamePlaceholder"),value:E,onChange:r=>O(r.target.value)})]}),e.jsxs("div",{className:"project-form-group",children:[e.jsx("label",{children:t("siteLocationLabel")}),e.jsx("input",{type:"text",placeholder:t("siteLocationSample"),value:Y,onChange:r=>H(r.target.value)})]}),e.jsxs("div",{className:"project-form-group",children:[e.jsx("label",{children:t("clientNameLabel")}),e.jsx("input",{type:"text",placeholder:t("clientNameSample"),value:J,onChange:r=>V(r.target.value)})]}),e.jsxs("div",{className:"project-modal-footer",children:[e.jsx("button",{type:"button",className:"project-cancel-btn",onClick:()=>g(!1),children:t("cancel")}),e.jsxs("button",{type:"submit",className:"project-primary-btn",disabled:S,children:[e.jsx(z,{size:16}),t(S?"creating":"createProject")]})]})]})]})}),ge&&e.jsx("div",{className:"project-modal-backdrop",onClick:()=>{m(!1),C()},children:e.jsxs("div",{className:"project-modal",onClick:r=>r.stopPropagation(),children:[e.jsxs("div",{className:"project-modal-header",children:[e.jsx("div",{className:"project-modal-heading-icon",children:n==="bills"?e.jsx(R,{size:21}):e.jsx(F,{size:21})}),e.jsxs("div",{children:[e.jsx("h3",{children:n==="bills"?t("uploadMaterialBill"):n==="docs"?t("uploadSiteDocument"):`${t("uploadAsset")} — ${(x==null?void 0:x.label)||""}`}),e.jsx("p",{children:t("uploadRecordTo").replace("{project}",(i==null?void 0:i.name)||"")})]}),e.jsx("button",{className:"project-modal-close",onClick:()=>{m(!1),C()},children:e.jsx(U,{size:19})})]}),e.jsxs("form",{onSubmit:Ne,children:[n==="bills"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"project-form-group",children:[e.jsx("label",{children:t("vendorSupplierLabel")}),e.jsx("input",{type:"text",required:!0,placeholder:t("vendorSample"),value:X,onChange:r=>Z(r.target.value)})]}),e.jsxs("div",{className:"project-form-group",children:[e.jsx("label",{children:t("materialCategoryLabel")}),e.jsx("input",{type:"text",value:te,onChange:r=>re(r.target.value),placeholder:"Enter material category",style:$.input})]}),e.jsxs("div",{className:"project-form-group",children:[e.jsx("label",{children:t("billAmountLabel")}),e.jsx("input",{type:"number",required:!0,min:"1",placeholder:"50000",value:Q,onChange:r=>ee(r.target.value)})]}),e.jsxs("div",{className:"project-form-group",children:[e.jsx("label",{children:"Upload Bill Document / Image"}),e.jsxs("div",{className:"project-file-upload",children:[e.jsx(le,{size:25}),e.jsx("strong",{children:f?f.name:"Choose Material Bill"}),e.jsx("span",{children:"Supported formats: PDF, JPG, JPEG, PNG (Maximum 4 MB)"}),e.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png",onChange:ke,required:!0})]}),f&&e.jsxs("div",{className:"project-upload-success",children:[e.jsxs("span",{children:[e.jsx(N,{size:15}),f.name]}),e.jsxs("span",{children:[(f.size/1024).toFixed(1)," KB"]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"project-form-group",children:[e.jsx("label",{children:t("assetTitleLabel")}),e.jsx("input",{type:"text",required:!0,placeholder:t("assetTitleSample"),value:W,onChange:r=>K(r.target.value)})]}),e.jsxs("div",{className:"project-form-group",children:[e.jsx("label",{children:t("selectFileFromDevice")}),e.jsxs("div",{className:"project-file-upload",children:[e.jsx(le,{size:25}),e.jsx("strong",{children:t(k?"fileSelectedSuccess":"chooseFileToUpload")}),e.jsx("span",{children:t(n==="docs"?"docFileTypes":"imageFileTypes")}),e.jsx("input",{type:"file",accept:n==="docs"?".pdf,.doc,.docx":"image/*",onChange:ye})]}),k&&n!=="docs"&&e.jsxs("div",{className:"project-upload-preview",children:[e.jsx("img",{src:k,alt:t("uploadPreviewAlt")}),e.jsx("span",{children:t("previewReady")})]}),k&&n==="docs"&&e.jsx("p",{className:"project-upload-success",children:t("fileReadyToSave")})]})]}),e.jsxs("div",{className:"project-modal-footer",children:[e.jsx("button",{type:"button",className:"project-cancel-btn",onClick:()=>{m(!1),C()},children:t("cancel")}),e.jsxs("button",{type:"submit",className:"project-primary-btn",disabled:S,children:[e.jsx(F,{size:16}),t(S?"saving":"uploadAndSave")]})]})]})]})}),q&&e.jsxs("div",{className:"project-lightbox",onClick:()=>B(null),children:[e.jsx("button",{className:"project-lightbox-close",onClick:()=>B(null),children:e.jsx(U,{size:23})}),e.jsx("img",{src:q,alt:t("projectPreviewAlt"),onClick:r=>r.stopPropagation()})]})]})}const $=`
.project-page {
  --p-dark: #211b17;
  --p-dark-2: #30251e;
  --p-bronze: #a45e30;
  --p-bronze-light: #c58b60;
  --p-beige: #e8c29f;
  --p-bg: #f5f1eb;
  --p-card: #fffdfa;
  --p-border: #e8dfd3;
  --p-text: #29231e;
  --p-muted: #8a8076;
  min-height: 100%;
  padding: 28px;
  background: var(--p-bg);
  color: var(--p-text);
  font-family: inherit;
}

.project-page * {
  box-sizing: border-box;
}

.project-page button,
.project-page input,
.project-page select {
  font: inherit;
}

.project-page button {
  cursor: pointer;
}

.project-page button:disabled {
  opacity: .6;
  cursor: not-allowed;
}

.project-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 26px;
}

.project-eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--p-bronze);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.7px;
  margin-bottom: 9px;
}

.project-eyebrow-line {
  display: inline-block;
  width: 23px;
  height: 2px;
  background: var(--p-bronze);
}

.project-page-header h1 {
  color: var(--p-dark);
  font-size: 27px;
  font-weight: 800;
  letter-spacing: -.8px;
  margin: 0;
}

.project-page-header p {
  margin: 7px 0 0;
  color: var(--p-muted);
  font-size: 12px;
}

.project-primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 12px 17px;
  border: 1px solid var(--p-bronze);
  border-radius: 10px;
  background: var(--p-bronze);
  color: white;
  font-size: 12px;
  font-weight: 750;
  transition: .2s ease;
  box-shadow: 0 5px 13px rgba(164,94,48,.13);
}

.project-primary-btn:hover {
  background: var(--p-dark);
  border-color: var(--p-dark);
  transform: translateY(-1px);
}

.project-secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1px solid var(--p-border);
  border-radius: 9px;
  background: #f8f4ee;
  color: var(--p-dark);
  font-size: 11px;
  font-weight: 750;
  transition: .2s;
}

.project-secondary-btn:hover {
  background: var(--p-dark);
  color: white;
  border-color: var(--p-dark);
}

.project-delete-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 13px;
  border: 1px solid #ead5ce;
  border-radius: 9px;
  color: #a34b3f;
  background: #fff8f5;
  font-size: 11px;
  font-weight: 750;
}

.project-delete-btn:hover {
  background: #a34b3f;
  color: white;
}

.project-selector-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 15px 18px;
  background: var(--p-card);
  border: 1px solid var(--p-border);
  border-radius: 14px;
  margin-bottom: 18px;
  box-shadow: 0 3px 12px rgba(50,35,22,.025);
}

.project-selector-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.project-selector-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: #f1e5d8;
  color: var(--p-bronze);
}

.project-selector-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.project-selector-info > span {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.3px;
  color: var(--p-muted);
}

.project-selector-info select {
  max-width: 340px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--p-dark);
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
}

.project-selector-actions {
  display: flex;
  align-items: center;
  gap: 9px;
}

.project-hero {
  position: relative;
  overflow: hidden;
  min-height: 185px;
  padding: 25px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(115deg, #211b17 0%, #30251e 65%, #51402f 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 18px;
  box-shadow: 0 8px 22px rgba(33,27,23,.12);
}

.project-hero-decoration {
  position: absolute;
  width: 290px;
  height: 290px;
  right: 90px;
  top: -175px;
  border: 1px solid rgba(232,194,159,.13);
  border-radius: 50%;
  box-shadow: 0 0 0 32px rgba(232,194,159,.025),
              0 0 0 65px rgba(232,194,159,.025);
}

.project-hero-content {
  position: relative;
  z-index: 1;
}

.project-hero-top {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 14px;
}

.project-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  border: 1px solid rgba(197,139,96,.35);
  border-radius: 30px;
  background: rgba(197,139,96,.13);
  color: #e8c29f;
  font-size: 10px;
  font-weight: 750;
}

.project-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #c58b60;
}

.project-start-date {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #c8b9aa;
  font-size: 10px;
}

.project-hero h2 {
  margin: 0 0 12px;
  color: #fffaf4;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -.6px;
}

.project-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
}

.project-hero-meta span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #d2c4b7;
  font-size: 11px;
}

.project-hero-meta svg {
  color: var(--p-bronze-light);
}

.project-hero-mark {
  position: relative;
  z-index: 1;
  width: 112px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid rgba(232,194,159,.22);
  border-radius: 18px;
  background: rgba(255,255,255,.045);
  color: #d6a77f;
}

.project-hero-mark span {
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 2px;
}

.project-stat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 13px;
  margin-bottom: 30px;
}

.project-stat-card {
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  padding: 17px 15px;
  border: 1px solid var(--p-border);
  border-radius: 13px;
  background: var(--p-card);
  box-shadow: 0 3px 10px rgba(50,35,22,.025);
}

.project-stat-icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 11px;
}

.project-stat-icon.bronze {
  background: #f1e5d8;
  color: #a45e30;
}

.project-stat-icon.sand {
  background: #f2eadc;
  color: #92734d;
}

.project-stat-icon.dark {
  background: #eae5df;
  color: #514333;
}

.project-stat-icon.expense {
  background: #f5e9e0;
  color: #a45e30;
}

.project-stat-card > div:last-child {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.project-stat-card span {
  color: var(--p-muted);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .7px;
}

.project-stat-card strong {
  overflow: hidden;
  color: var(--p-dark);
  font-size: 19px;
  font-weight: 850;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-stat-card small {
  color: #a49a8f;
  font-size: 10px;
}

.project-section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 15px;
  margin-bottom: 16px;
}

.project-section-heading h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 19px;
  font-weight: 850;
}

.project-section-heading p {
  margin: 6px 0 0;
  color: var(--p-muted);
  font-size: 11px;
}

.project-tabs {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 9px;
  margin-bottom: 17px;
}

.project-tab {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 10px;
  border: 1px solid var(--p-border);
  border-radius: 11px;
  background: var(--p-card);
  text-align: left;
  transition: .2s;
}

.project-tab:hover {
  border-color: #cba27f;
  transform: translateY(-1px);
}

.project-tab.active {
  border-color: var(--p-bronze);
  background: #2b211b;
  box-shadow: 0 5px 13px rgba(33,27,23,.12);
}

.project-tab-icon {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: #f2e9df;
  color: var(--p-bronze);
}

.project-tab.active .project-tab-icon {
  background: rgba(197,139,96,.16);
  color: #e8c29f;
}

.project-tab-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.project-tab-text strong {
  overflow: hidden;
  color: var(--p-dark);
  font-size: 10px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-tab-text span {
  overflow: hidden;
  color: var(--p-muted);
  font-size: 9px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-tab.active .project-tab-text strong {
  color: #fff6ed;
}

.project-tab.active .project-tab-text span {
  color: #c4b3a3;
}

.project-tab-count {
  flex-shrink: 0;
  margin-left: auto;
  padding: 4px 6px;
  border-radius: 6px;
  background: #f1e9e0;
  color: var(--p-bronze);
  font-size: 9px;
  font-weight: 800;
}

.project-tab.active .project-tab-count {
  background: rgba(197,139,96,.18);
  color: #e8c29f;
}

.project-content-area {
  padding: 20px;
  border: 1px solid var(--p-border);
  border-radius: 14px;
  background: var(--p-card);
  box-shadow: 0 3px 12px rgba(50,35,22,.025);
}

.project-content-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-bottom: 17px;
  border-bottom: 1px solid #eee7de;
  margin-bottom: 18px;
}

.project-content-heading h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 15px;
  font-weight: 850;
}

.project-content-heading p {
  margin: 5px 0 0;
  color: var(--p-muted);
  font-size: 10px;
}

.project-record-count {
  padding: 7px 10px;
  border-radius: 7px;
  background: #f2e8dd;
  color: var(--p-bronze);
  font-size: 9px;
  font-weight: 850;
  letter-spacing: .7px;
}

.project-asset-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
}

.project-asset-card {
  overflow: hidden;
  border: 1px solid var(--p-border);
  border-radius: 12px;
  background: #fff;
  transition: .2s;
}

.project-asset-card:hover {
  border-color: #cba27f;
  transform: translateY(-3px);
  box-shadow: 0 9px 20px rgba(50,35,22,.08);
}

.project-asset-image {
  position: relative;
  height: 190px;
  overflow: hidden;
  background: #eee7df;
}

.project-asset-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s;
}

.project-asset-card:hover .project-asset-image img {
  transform: scale(1.045);
}

.project-asset-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  background: rgba(25,19,15,.43);
  opacity: 0;
  transition: .2s;
}

.project-asset-card:hover .project-asset-overlay {
  opacity: 1;
}

.project-asset-overlay button {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 10px;
  background: rgba(255,255,255,.94);
  color: var(--p-dark);
}

.project-asset-overlay button:hover {
  background: var(--p-bronze);
  color: white;
}

.project-asset-overlay button.danger:hover {
  background: #a34b3f;
}

.project-asset-type {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 5px 8px;
  border-radius: 5px;
  background: rgba(33,27,23,.82);
  color: #f5e5d5;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1px;
}

.project-asset-info {
  padding: 13px;
}

.project-asset-info h4 {
  overflow: hidden;
  margin: 0 0 9px;
  color: var(--p-dark);
  font-size: 12px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-asset-info span {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--p-muted);
  font-size: 10px;
}

.project-document-list {
  display: flex;
  flex-direction: column;
}

.project-document-row {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 13px 5px;
  border-bottom: 1px solid #eee7de;
}

.project-document-row:last-child {
  border-bottom: 0;
}

.project-document-icon {
  flex-shrink: 0;
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: #f2e8dd;
  color: var(--p-bronze);
}

.project-document-info {
  flex: 1;
  min-width: 0;
}

.project-document-info h4 {
  overflow: hidden;
  margin: 0 0 6px;
  color: var(--p-dark);
  font-size: 12px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-document-info p {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0;
  color: var(--p-muted);
  font-size: 10px;
}

.project-document-actions {
  display: flex;
  align-items: center;
  gap: 9px;
}

.project-view-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 11px;
  border: 1px solid var(--p-border);
  border-radius: 8px;
  background: #f8f4ee;
  color: var(--p-dark);
  font-size: 10px;
  font-weight: 800;
  text-decoration: none;
}

.project-view-btn:hover {
  border-color: var(--p-bronze);
  background: var(--p-bronze);
  color: white;
}

.project-icon-delete {
  width: 34px;
  height: 34px;
  display: inline-grid;
  place-items: center;
  border: 1px solid #f0dfda;
  border-radius: 8px;
  background: #fff8f5;
  color: #ae594b;
  transition: .2s;
}

.project-icon-delete:hover {
  background: #ae594b;
  color: white;
}

.project-bill-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #eee7de;
  margin-bottom: 17px;
}

.project-bill-summary h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 16px;
  font-weight: 850;
}

.project-bill-summary p {
  margin: 6px 0 0;
  color: var(--p-muted);
  font-size: 10px;
}

.project-expense-total {
  min-width: 185px;
  padding: 13px 16px;
  border: 1px solid #e7d3c0;
  border-radius: 11px;
  background: #f5ece2;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.project-expense-total span {
  color: #98714e;
  font-size: 8px;
  font-weight: 850;
  letter-spacing: .9px;
}

.project-expense-total strong {
  color: #784421;
  font-size: 21px;
  font-weight: 900;
}

.project-expense-total small {
  color: #987e68;
  font-size: 9px;
}

.project-table-wrapper {
  overflow-x: auto;
}

.project-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;
}

.project-table th {
  padding: 13px 12px;
  background: #f7f3ed;
  color: #85786a;
  font-size: 9px;
  font-weight: 850;
  letter-spacing: .7px;
  text-transform: uppercase;
}

.project-table td {
  padding: 14px 12px;
  border-bottom: 1px solid #eee7de;
  color: var(--p-text);
  font-size: 11px;
}

.project-table tbody tr:hover {
  background: #fcf9f5;
}

.project-invoice-number {
  color: var(--p-bronze);
  font-family: monospace;
  font-size: 11px;
  font-weight: 850;
}

.project-vendor-name {
  font-weight: 750;
}

.project-category-tag {
  display: inline-block;
  padding: 6px 9px;
  border-radius: 6px;
  background: #f2eae0;
  color: #806344;
  font-size: 9px;
  font-weight: 750;
}

.project-date-cell {
  color: var(--p-muted) !important;
}

.project-amount-cell {
  color: var(--p-dark) !important;
  text-align: right;
  font-size: 12px !important;
  font-weight: 850;
}

.project-table .text-right {
  text-align: right;
}

.project-table .text-center {
  text-align: center;
}

.project-table-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding: 35px 10px;
  color: #a99c8e;
}

.project-table-empty strong {
  color: var(--p-dark);
  font-size: 12px;
}

.project-table-empty span {
  font-size: 10px;
}

.project-empty-workspace,
.project-empty-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  border: 1px dashed #d9c9b7;
  border-radius: 14px;
  background: rgba(255,253,250,.8);
  text-align: center;
}

.project-empty-workspace {
  min-height: 390px;
}

.project-empty-content {
  padding: 42px 20px;
}

.project-empty-icon {
  width: 65px;
  height: 65px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: #f1e5d8;
  color: var(--p-bronze);
  margin-bottom: 14px;
}

.project-empty-workspace h2,
.project-empty-content h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 16px;
  font-weight: 850;
}

.project-empty-workspace p,
.project-empty-content p {
  max-width: 380px;
  margin: 8px 0 17px;
  color: var(--p-muted);
  font-size: 11px;
  line-height: 1.7;
}

.project-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: rgba(25,19,15,.66);
  backdrop-filter: blur(5px);
}

.project-modal {
  width: 100%;
  max-width: 490px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 23px;
  border: 1px solid #e8dfd3;
  border-radius: 17px;
  background: #fffdfa;
  box-shadow: 0 22px 65px rgba(0,0,0,.25);
  animation: projectModalIn .2s ease-out;
}

@keyframes projectModalIn {
  from {
    opacity: 0;
    transform: translateY(10px) scale(.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.project-modal-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 17px;
  border-bottom: 1px solid #eee7de;
  margin-bottom: 19px;
}

.project-modal-heading-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: #f1e5d8;
  color: var(--p-bronze);
}

.project-modal-header > div:nth-child(2) {
  flex: 1;
}

.project-modal-header h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 16px;
  font-weight: 850;
}

.project-modal-header p {
  margin: 5px 0 0;
  color: var(--p-muted);
  font-size: 10px;
}

.project-modal-close {
  width: 33px;
  height: 33px;
  display: grid;
  place-items: center;
  border: 1px solid var(--p-border);
  border-radius: 9px;
  background: #f8f4ee;
  color: var(--p-muted);
}

.project-modal-close:hover {
  background: var(--p-dark);
  color: white;
}

.project-form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 15px;
}

.project-form-group label {
  color: #74685c;
  font-size: 9px;
  font-weight: 850;
  letter-spacing: .8px;
}

.project-form-group input,
.project-form-group select {
  width: 100%;
  min-height: 42px;
  padding: 10px 12px;
  border: 1px solid #e4dbd0;
  border-radius: 9px;
  outline: none;
  background: #fff;
  color: var(--p-dark);
  font-size: 11px;
  transition: .2s;
}

.project-form-group input:focus,
.project-form-group select:focus {
  border-color: var(--p-bronze);
  box-shadow: 0 0 0 3px rgba(164,94,48,.09);
}

.project-file-upload {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 25px 15px;
  border: 1px dashed #cbb49c;
  border-radius: 11px;
  background: #faf6f0;
  color: var(--p-bronze);
  text-align: center;
}

.project-file-upload strong {
  color: var(--p-dark);
  font-size: 11px;
}

.project-file-upload span {
  color: var(--p-muted);
  font-size: 9px;
}

.project-file-upload input {
  width: 100%;
  min-height: auto;
  padding: 8px;
  border: 0;
  background: transparent;
  font-size: 10px;
}

.project-upload-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  color: #4c805d;
  font-size: 10px;
  font-weight: 750;
}

.project-upload-preview img {
  width: 48px;
  height: 42px;
  object-fit: cover;
  border-radius: 7px;
}

.project-upload-success {
  color: #4c805d;
  font-size: 10px;
  font-weight: 750;
}

.project-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  padding-top: 17px;
  border-top: 1px solid #eee7de;
  margin-top: 20px;
}

.project-cancel-btn {
  padding: 10px 15px;
  border: 1px solid var(--p-border);
  border-radius: 9px;
  background: white;
  color: #786e63;
  font-size: 11px;
  font-weight: 750;
}

.project-cancel-btn:hover {
  background: #f5f1eb;
}

.project-lightbox {
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: rgba(15,12,10,.94);
  backdrop-filter: blur(5px);
}

.project-lightbox img {
  max-width: 90%;
  max-height: 85vh;
  object-fit: contain;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,.4);
}

.project-lightbox-close {
  position: absolute;
  top: 22px;
  right: 25px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 50%;
  background: rgba(255,255,255,.1);
  color: white;
}

.project-lightbox-close:hover {
  background: var(--p-bronze);
}

.project-loading {
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: var(--p-muted);
  font-size: 12px;
}

.project-loader {
  width: 35px;
  height: 35px;
  border: 3px solid #e8dfd3;
  border-top-color: var(--p-bronze);
  border-radius: 50%;
  animation: projectSpin .8s linear infinite;
}

@keyframes projectSpin {
  to { transform: rotate(360deg); }
}

@media (max-width: 1100px) {
  .project-tabs {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .project-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-asset-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .project-page {
    padding: 16px;
  }

  .project-page-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-page-header h1 {
    font-size: 23px;
  }

  .project-selector-panel {
    align-items: stretch;
    flex-direction: column;
  }

  .project-selector-actions {
    width: 100%;
  }

  .project-selector-actions button {
    flex: 1;
    justify-content: center;
  }

  .project-selector-info select {
    max-width: 230px;
  }

  .project-hero {
    min-height: 165px;
    padding: 20px;
  }

  .project-hero h2 {
    font-size: 20px;
  }

  .project-hero-mark {
    width: 75px;
    height: 75px;
  }

  .project-hero-mark svg {
    width: 42px;
  }

  .project-hero-meta {
    flex-direction: column;
    gap: 8px;
  }

  .project-stat-grid {
    gap: 9px;
  }

  .project-stat-card {
    padding: 12px 10px;
    gap: 9px;
  }

  .project-stat-icon {
    width: 34px;
    height: 34px;
  }

  .project-stat-card strong {
    font-size: 16px;
  }

  .project-stat-card span {
    font-size: 8px;
  }

  .project-section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-content-area {
    padding: 14px;
  }

  .project-asset-grid {
    grid-template-columns: 1fr;
  }

  .project-asset-image {
    height: 210px;
  }

  .project-bill-summary {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-expense-total {
    width: 100%;
  }

  .project-document-row {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .project-document-info {
    width: calc(100% - 60px);
  }

  .project-document-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .project-modal {
    padding: 17px;
  }
}

@media (max-width: 420px) {
  .project-tabs {
    grid-template-columns: 1fr;
  }

  .project-stat-grid {
    grid-template-columns: 1fr 1fr;
  }

  .project-hero-mark {
    display: none;
  }

  .project-hero-top {
    gap: 8px;
  }

  .project-modal-footer {
    flex-wrap: wrap;
  }

  .project-modal-footer button {
    flex: 1;
  }
}
`;export{Ge as default};
