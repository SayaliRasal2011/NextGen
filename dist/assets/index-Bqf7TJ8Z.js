const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/QuotationPage-Dy-wpqK2.js","assets/api-C5QDMVvg.js","assets/index-DIhyqlDr.js","assets/receipt-D_UCIX3m.js","assets/search-Cqijw52N.js","assets/map-pin-fLzantJR.js","assets/BillingPage-jbzKeJNY.js","assets/indian-rupee-BsOzM877.js","assets/LaborPage-P8MWWsM2.js","assets/file-image-DOE3qVUR.js","assets/ProjectHandlingPage-DWbJETBm.js"])))=>i.map(i=>d[i]);
(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))x(L);new MutationObserver(L=>{for(const U of L)if(U.type==="childList")for(const $ of U.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&x($)}).observe(document,{childList:!0,subtree:!0});function h(L){const U={};return L.integrity&&(U.integrity=L.integrity),L.referrerPolicy&&(U.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?U.credentials="include":L.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function x(L){if(L.ep)return;L.ep=!0;const U=h(L);fetch(L.href,U)}})();var Xf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ku(k){return k&&k.__esModule&&Object.prototype.hasOwnProperty.call(k,"default")?k.default:k}var zi={exports:{}},xr={},Ri={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function df(){if(Mu)return V;Mu=1;var k=Symbol.for("react.element"),S=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),$=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),G=Symbol.iterator;function A(c){return c===null||typeof c!="object"?null:(c=G&&c[G]||c["@@iterator"],typeof c=="function"?c:null)}var ce={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,W={};function Q(c,v,H){this.props=c,this.context=v,this.refs=W,this.updater=H||ce}Q.prototype.isReactComponent={},Q.prototype.setState=function(c,v){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,v,"setState")},Q.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function xe(){}xe.prototype=Q.prototype;function ve(c,v,H){this.props=c,this.context=v,this.refs=W,this.updater=H||ce}var Ve=ve.prototype=new xe;Ve.constructor=ve,F(Ve,Q.prototype),Ve.isPureReactComponent=!0;var ke=Array.isArray,$e=Object.prototype.hasOwnProperty,Ce={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Oe(c,v,H){var q,Y={},X=null,ne=null;if(v!=null)for(q in v.ref!==void 0&&(ne=v.ref),v.key!==void 0&&(X=""+v.key),v)$e.call(v,q)&&!_e.hasOwnProperty(q)&&(Y[q]=v[q]);var ee=arguments.length-2;if(ee===1)Y.children=H;else if(1<ee){for(var ie=Array(ee),Ge=0;Ge<ee;Ge++)ie[Ge]=arguments[Ge+2];Y.children=ie}if(c&&c.defaultProps)for(q in ee=c.defaultProps,ee)Y[q]===void 0&&(Y[q]=ee[q]);return{$$typeof:k,type:c,key:X,ref:ne,props:Y,_owner:Ce.current}}function Tt(c,v){return{$$typeof:k,type:c.type,key:v,ref:c.ref,props:c.props,_owner:c._owner}}function wt(c){return typeof c=="object"&&c!==null&&c.$$typeof===k}function bt(c){var v={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(H){return v[H]})}var ft=/\/+/g;function qe(c,v){return typeof c=="object"&&c!==null&&c.key!=null?bt(""+c.key):v.toString(36)}function ot(c,v,H,q,Y){var X=typeof c;(X==="undefined"||X==="boolean")&&(c=null);var ne=!1;if(c===null)ne=!0;else switch(X){case"string":case"number":ne=!0;break;case"object":switch(c.$$typeof){case k:case S:ne=!0}}if(ne)return ne=c,Y=Y(ne),c=q===""?"."+qe(ne,0):q,ke(Y)?(H="",c!=null&&(H=c.replace(ft,"$&/")+"/"),ot(Y,v,H,"",function(Ge){return Ge})):Y!=null&&(wt(Y)&&(Y=Tt(Y,H+(!Y.key||ne&&ne.key===Y.key?"":(""+Y.key).replace(ft,"$&/")+"/")+c)),v.push(Y)),1;if(ne=0,q=q===""?".":q+":",ke(c))for(var ee=0;ee<c.length;ee++){X=c[ee];var ie=q+qe(X,ee);ne+=ot(X,v,H,ie,Y)}else if(ie=A(c),typeof ie=="function")for(c=ie.call(c),ee=0;!(X=c.next()).done;)X=X.value,ie=q+qe(X,ee++),ne+=ot(X,v,H,ie,Y);else if(X==="object")throw v=String(c),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return ne}function pt(c,v,H){if(c==null)return c;var q=[],Y=0;return ot(c,q,"","",function(X){return v.call(H,X,Y++)}),q}function Ie(c){if(c._status===-1){var v=c._result;v=v(),v.then(function(H){(c._status===0||c._status===-1)&&(c._status=1,c._result=H)},function(H){(c._status===0||c._status===-1)&&(c._status=2,c._result=H)}),c._status===-1&&(c._status=0,c._result=v)}if(c._status===1)return c._result.default;throw c._result}var de={current:null},P={transition:null},M={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:P,ReactCurrentOwner:Ce};function j(){throw Error("act(...) is not supported in production builds of React.")}return V.Children={map:pt,forEach:function(c,v,H){pt(c,function(){v.apply(this,arguments)},H)},count:function(c){var v=0;return pt(c,function(){v++}),v},toArray:function(c){return pt(c,function(v){return v})||[]},only:function(c){if(!wt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},V.Component=Q,V.Fragment=h,V.Profiler=L,V.PureComponent=ve,V.StrictMode=x,V.Suspense=B,V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,V.act=j,V.cloneElement=function(c,v,H){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var q=F({},c.props),Y=c.key,X=c.ref,ne=c._owner;if(v!=null){if(v.ref!==void 0&&(X=v.ref,ne=Ce.current),v.key!==void 0&&(Y=""+v.key),c.type&&c.type.defaultProps)var ee=c.type.defaultProps;for(ie in v)$e.call(v,ie)&&!_e.hasOwnProperty(ie)&&(q[ie]=v[ie]===void 0&&ee!==void 0?ee[ie]:v[ie])}var ie=arguments.length-2;if(ie===1)q.children=H;else if(1<ie){ee=Array(ie);for(var Ge=0;Ge<ie;Ge++)ee[Ge]=arguments[Ge+2];q.children=ee}return{$$typeof:k,type:c.type,key:Y,ref:X,props:q,_owner:ne}},V.createContext=function(c){return c={$$typeof:$,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:U,_context:c},c.Consumer=c},V.createElement=Oe,V.createFactory=function(c){var v=Oe.bind(null,c);return v.type=c,v},V.createRef=function(){return{current:null}},V.forwardRef=function(c){return{$$typeof:I,render:c}},V.isValidElement=wt,V.lazy=function(c){return{$$typeof:J,_payload:{_status:-1,_result:c},_init:Ie}},V.memo=function(c,v){return{$$typeof:b,type:c,compare:v===void 0?null:v}},V.startTransition=function(c){var v=P.transition;P.transition={};try{c()}finally{P.transition=v}},V.unstable_act=j,V.useCallback=function(c,v){return de.current.useCallback(c,v)},V.useContext=function(c){return de.current.useContext(c)},V.useDebugValue=function(){},V.useDeferredValue=function(c){return de.current.useDeferredValue(c)},V.useEffect=function(c,v){return de.current.useEffect(c,v)},V.useId=function(){return de.current.useId()},V.useImperativeHandle=function(c,v,H){return de.current.useImperativeHandle(c,v,H)},V.useInsertionEffect=function(c,v){return de.current.useInsertionEffect(c,v)},V.useLayoutEffect=function(c,v){return de.current.useLayoutEffect(c,v)},V.useMemo=function(c,v){return de.current.useMemo(c,v)},V.useReducer=function(c,v,H){return de.current.useReducer(c,v,H)},V.useRef=function(c){return de.current.useRef(c)},V.useState=function(c){return de.current.useState(c)},V.useSyncExternalStore=function(c,v,H){return de.current.useSyncExternalStore(c,v,H)},V.useTransition=function(){return de.current.useTransition()},V.version="18.3.1",V}var Au;function Ui(){return Au||(Au=1,Ri.exports=df()),Ri.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function ff(){if(Ou)return xr;Ou=1;var k=Ui(),S=Symbol.for("react.element"),h=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,L=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function $(I,B,b){var J,G={},A=null,ce=null;b!==void 0&&(A=""+b),B.key!==void 0&&(A=""+B.key),B.ref!==void 0&&(ce=B.ref);for(J in B)x.call(B,J)&&!U.hasOwnProperty(J)&&(G[J]=B[J]);if(I&&I.defaultProps)for(J in B=I.defaultProps,B)G[J]===void 0&&(G[J]=B[J]);return{$$typeof:S,type:I,key:A,ref:ce,props:G,_owner:L.current}}return xr.Fragment=h,xr.jsx=$,xr.jsxs=$,xr}var Iu;function pf(){return Iu||(Iu=1,zi.exports=ff()),zi.exports}var m=pf(),he=Ui();const mf=Ku(he);var zo={},Mi={exports:{}},He={},Ai={exports:{}},Oi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function hf(){return Fu||(Fu=1,(function(k){function S(P,M){var j=P.length;P.push(M);e:for(;0<j;){var c=j-1>>>1,v=P[c];if(0<L(v,M))P[c]=M,P[j]=v,j=c;else break e}}function h(P){return P.length===0?null:P[0]}function x(P){if(P.length===0)return null;var M=P[0],j=P.pop();if(j!==M){P[0]=j;e:for(var c=0,v=P.length,H=v>>>1;c<H;){var q=2*(c+1)-1,Y=P[q],X=q+1,ne=P[X];if(0>L(Y,j))X<v&&0>L(ne,Y)?(P[c]=ne,P[X]=j,c=X):(P[c]=Y,P[q]=j,c=q);else if(X<v&&0>L(ne,j))P[c]=ne,P[X]=j,c=X;else break e}}return M}function L(P,M){var j=P.sortIndex-M.sortIndex;return j!==0?j:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var U=performance;k.unstable_now=function(){return U.now()}}else{var $=Date,I=$.now();k.unstable_now=function(){return $.now()-I}}var B=[],b=[],J=1,G=null,A=3,ce=!1,F=!1,W=!1,Q=typeof setTimeout=="function"?setTimeout:null,xe=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ve(P){for(var M=h(b);M!==null;){if(M.callback===null)x(b);else if(M.startTime<=P)x(b),M.sortIndex=M.expirationTime,S(B,M);else break;M=h(b)}}function ke(P){if(W=!1,Ve(P),!F)if(h(B)!==null)F=!0,Ie($e);else{var M=h(b);M!==null&&de(ke,M.startTime-P)}}function $e(P,M){F=!1,W&&(W=!1,xe(Oe),Oe=-1),ce=!0;var j=A;try{for(Ve(M),G=h(B);G!==null&&(!(G.expirationTime>M)||P&&!bt());){var c=G.callback;if(typeof c=="function"){G.callback=null,A=G.priorityLevel;var v=c(G.expirationTime<=M);M=k.unstable_now(),typeof v=="function"?G.callback=v:G===h(B)&&x(B),Ve(M)}else x(B);G=h(B)}if(G!==null)var H=!0;else{var q=h(b);q!==null&&de(ke,q.startTime-M),H=!1}return H}finally{G=null,A=j,ce=!1}}var Ce=!1,_e=null,Oe=-1,Tt=5,wt=-1;function bt(){return!(k.unstable_now()-wt<Tt)}function ft(){if(_e!==null){var P=k.unstable_now();wt=P;var M=!0;try{M=_e(!0,P)}finally{M?qe():(Ce=!1,_e=null)}}else Ce=!1}var qe;if(typeof ve=="function")qe=function(){ve(ft)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,pt=ot.port2;ot.port1.onmessage=ft,qe=function(){pt.postMessage(null)}}else qe=function(){Q(ft,0)};function Ie(P){_e=P,Ce||(Ce=!0,qe())}function de(P,M){Oe=Q(function(){P(k.unstable_now())},M)}k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(P){P.callback=null},k.unstable_continueExecution=function(){F||ce||(F=!0,Ie($e))},k.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<P?Math.floor(1e3/P):5},k.unstable_getCurrentPriorityLevel=function(){return A},k.unstable_getFirstCallbackNode=function(){return h(B)},k.unstable_next=function(P){switch(A){case 1:case 2:case 3:var M=3;break;default:M=A}var j=A;A=M;try{return P()}finally{A=j}},k.unstable_pauseExecution=function(){},k.unstable_requestPaint=function(){},k.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=A;A=P;try{return M()}finally{A=j}},k.unstable_scheduleCallback=function(P,M,j){var c=k.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?c+j:c):j=c,P){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=j+v,P={id:J++,callback:M,priorityLevel:P,startTime:j,expirationTime:v,sortIndex:-1},j>c?(P.sortIndex=j,S(b,P),h(B)===null&&P===h(b)&&(W?(xe(Oe),Oe=-1):W=!0,de(ke,j-c))):(P.sortIndex=v,S(B,P),F||ce||(F=!0,Ie($e))),P},k.unstable_shouldYield=bt,k.unstable_wrapCallback=function(P){var M=A;return function(){var j=A;A=M;try{return P.apply(this,arguments)}finally{A=j}}}})(Oi)),Oi}var Uu;function gf(){return Uu||(Uu=1,Ai.exports=hf()),Ai.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function vf(){if(Bu)return He;Bu=1;var k=Ui(),S=gf();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x=new Set,L={};function U(e,t){$(e,t),$(e+"Capture",t)}function $(e,t){for(L[e]=t,e=0;e<t.length;e++)x.add(t[e])}var I=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),B=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J={},G={};function A(e){return B.call(G,e)?!0:B.call(J,e)?!1:b.test(e)?G[e]=!0:(J[e]=!0,!1)}function ce(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,t,n,r){if(t===null||typeof t>"u"||ce(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var xe=/[\-:]([a-z])/g;function ve(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xe,ve);Q[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xe,ve);Q[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xe,ve);Q[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ve(e,t,n,r){var o=Q.hasOwnProperty(t)?Q[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F(t,n,o,r)&&(n=null),r||o===null?A(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ke=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$e=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),wt=Symbol.for("react.provider"),bt=Symbol.for("react.context"),ft=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),pt=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),P=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,c;function v(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var H=!1;function q(e,t){if(!e||H)return"";H=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{H=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function Y(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case Ce:return"Portal";case Tt:return"Profiler";case Oe:return"StrictMode";case qe:return"Suspense";case ot:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bt:return(e.displayName||"Context")+".Consumer";case wt:return(e._context.displayName||"Context")+".Provider";case ft:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pt:return t=e.displayName||null,t!==null?t:X(e.type)||"Memo";case Ie:t=e._payload,e=e._init;try{return X(e(t))}catch{}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(t);case 8:return t===Oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ge(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Ge(e))}function Bi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uo(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ee(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qi(e,t){t=t.checked,t!=null&&Ve(e,"checked",t,!1)}function Bo(e,t){Qi(e,t);var n=ee(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wo(e,t.type,ee(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wo(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ee(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(An(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ee(n)}}function $i(e,t){var n=ee(t.value),r=ee(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ho(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,bi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mc=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){mc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function Ki(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Yi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ki(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var hc=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vo(e,t){if(t){if(hc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function $o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qo=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bo=null,dn=null,fn=null;function Xi(e){if(e=lr(e)){if(typeof bo!="function")throw Error(h(280));var t=e.stateNode;t&&(t=qr(t),bo(e.stateNode,e.type,t))}}function Zi(e){dn?fn?fn.push(e):fn=[e]:dn=e}function Ji(){if(dn){var e=dn,t=fn;if(fn=dn=null,Xi(e),t)for(e=0;e<t.length;e++)Xi(t[e])}}function ea(e,t){return e(t)}function ta(){}var Ko=!1;function na(e,t,n){if(Ko)return e(t,n);Ko=!0;try{return ea(e,t,n)}finally{Ko=!1,(dn!==null||fn!==null)&&(ta(),Ji())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=qr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Yo=!1;if(I)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Yo=!1}function gc(e,t,n,r,o,l,i,a,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var Bn=!1,Pr=null,Cr=!1,Xo=null,vc={onError:function(e){Bn=!0,Pr=e}};function yc(e,t,n,r,o,l,i,a,s){Bn=!1,Pr=null,gc.apply(vc,arguments)}function wc(e,t,n,r,o,l,i,a,s){if(yc.apply(this,arguments),Bn){if(Bn){var p=Pr;Bn=!1,Pr=null}else throw Error(h(198));Cr||(Cr=!0,Xo=p)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ra(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oa(e){if(Kt(e)!==e)throw Error(h(188))}function xc(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return oa(o),e;if(l===r)return oa(o),t;l=l.sibling}throw Error(h(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function la(e){return e=xc(e),e!==null?ia(e):null}function ia(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ia(e);if(t!==null)return t;e=e.sibling}return null}var aa=S.unstable_scheduleCallback,sa=S.unstable_cancelCallback,kc=S.unstable_shouldYield,Sc=S.unstable_requestPaint,pe=S.unstable_now,Ec=S.unstable_getCurrentPriorityLevel,Zo=S.unstable_ImmediatePriority,ua=S.unstable_UserBlockingPriority,Nr=S.unstable_NormalPriority,Pc=S.unstable_LowPriority,ca=S.unstable_IdlePriority,jr=null,mt=null;function Cc(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(jr,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Tc,Nc=Math.log,jc=Math.LN2;function Tc(e){return e>>>=0,e===0?32:31-(Nc(e)/jc|0)|0}var Tr=64,_r=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Wn(a):(l&=i,l!==0&&(r=Wn(l)))}else i=n&~o,i!==0?r=Wn(i):l!==0&&(r=Wn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),o=1<<n,r|=e[n],t&=~o;return r}function _c(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-lt(l),a=1<<i,s=o[i];s===-1?((a&n)===0||(a&r)!==0)&&(o[i]=_c(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function da(){var e=Tr;return Tr<<=1,(Tr&4194240)===0&&(Tr=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function Lc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-lt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function tl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function fa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pa,nl,ma,ha,ga,rl=!1,Lr=[],_t=null,Dt=null,Lt=null,Hn=new Map,Vn=new Map,zt=[],zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function $n(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=lr(t),t!==null&&nl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Rc(e,t,n,r,o){switch(t){case"focusin":return _t=$n(_t,e,t,n,r,o),!0;case"dragenter":return Dt=$n(Dt,e,t,n,r,o),!0;case"mouseover":return Lt=$n(Lt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Hn.set(l,$n(Hn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Vn.set(l,$n(Vn.get(l)||null,e,t,n,r,o)),!0}return!1}function ya(e){var t=Yt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=ra(n),t!==null){e.blockedOn=t,ga(e.priority,function(){ma(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qo=r,n.target.dispatchEvent(r),qo=null}else return t=lr(n),t!==null&&nl(t),e.blockedOn=n,!1;t.shift()}return!0}function wa(e,t,n){zr(e)&&n.delete(t)}function Mc(){rl=!1,_t!==null&&zr(_t)&&(_t=null),Dt!==null&&zr(Dt)&&(Dt=null),Lt!==null&&zr(Lt)&&(Lt=null),Hn.forEach(wa),Vn.forEach(wa)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,rl||(rl=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,Mc)))}function Gn(e){function t(o){return qn(o,e)}if(0<Lr.length){qn(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&qn(_t,e),Dt!==null&&qn(Dt,e),Lt!==null&&qn(Lt,e),Hn.forEach(t),Vn.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)ya(n),n.blockedOn===null&&zt.shift()}var pn=ke.ReactCurrentBatchConfig,Rr=!0;function Ac(e,t,n,r){var o=te,l=pn.transition;pn.transition=null;try{te=1,ol(e,t,n,r)}finally{te=o,pn.transition=l}}function Oc(e,t,n,r){var o=te,l=pn.transition;pn.transition=null;try{te=4,ol(e,t,n,r)}finally{te=o,pn.transition=l}}function ol(e,t,n,r){if(Rr){var o=ll(e,t,n,r);if(o===null)Sl(e,t,r,Mr,n),va(e,r);else if(Rc(o,e,t,n,r))r.stopPropagation();else if(va(e,r),t&4&&-1<zc.indexOf(e)){for(;o!==null;){var l=lr(o);if(l!==null&&pa(l),l=ll(e,t,n,r),l===null&&Sl(e,t,r,Mr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Sl(e,t,r,null,n)}}var Mr=null;function ll(e,t,n,r){if(Mr=null,e=Go(r),e=Yt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ra(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mr=e,null}function xa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ec()){case Zo:return 1;case ua:return 4;case Nr:case Pc:return 16;case ca:return 536870912;default:return 16}default:return 16}}var Rt=null,il=null,Ar=null;function ka(){if(Ar)return Ar;var e,t=il,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Ar=o.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function Sa(){return!1}function be(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ir:Sa,this.isPropagationStopped=Sa,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=be(mn),bn=j({},mn,{view:0,detail:0}),Ic=be(bn),sl,ul,Kn,Fr=j({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(sl=e.screenX-Kn.screenX,ul=e.screenY-Kn.screenY):ul=sl=0,Kn=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Ea=be(Fr),Fc=j({},Fr,{dataTransfer:0}),Uc=be(Fc),Bc=j({},bn,{relatedTarget:0}),cl=be(Bc),Wc=j({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Qc=be(Wc),Hc=j({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vc=be(Hc),$c=j({},mn,{data:0}),Pa=be($c),qc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bc[e])?!!t[e]:!1}function dl(){return Kc}var Yc=j({},bn,{key:function(e){if(e.key){var t=qc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dl,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xc=be(Yc),Zc=j({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=be(Zc),Jc=j({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dl}),ed=be(Jc),td=j({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),nd=be(td),rd=j({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),od=be(rd),ld=[9,13,27,32],fl=I&&"CompositionEvent"in window,Yn=null;I&&"documentMode"in document&&(Yn=document.documentMode);var id=I&&"TextEvent"in window&&!Yn,Na=I&&(!fl||Yn&&8<Yn&&11>=Yn),ja=" ",Ta=!1;function _a(e,t){switch(e){case"keyup":return ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Da(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function ad(e,t){switch(e){case"compositionend":return Da(t);case"keypress":return t.which!==32?null:(Ta=!0,ja);case"textInput":return e=t.data,e===ja&&Ta?null:e;default:return null}}function sd(e,t){if(hn)return e==="compositionend"||!fl&&_a(e,t)?(e=ka(),Ar=il=Rt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Na&&t.locale!=="ko"?null:t.data;default:return null}}var ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ud[e.type]:t==="textarea"}function za(e,t,n,r){Zi(r),t=Hr(t,"onChange"),0<t.length&&(n=new al("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,Zn=null;function cd(e){Ya(e,0)}function Ur(e){var t=xn(e);if(Bi(t))return e}function dd(e,t){if(e==="change")return t}var Ra=!1;if(I){var pl;if(I){var ml="oninput"in document;if(!ml){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),ml=typeof Ma.oninput=="function"}pl=ml}else pl=!1;Ra=pl&&(!document.documentMode||9<document.documentMode)}function Aa(){Xn&&(Xn.detachEvent("onpropertychange",Oa),Zn=Xn=null)}function Oa(e){if(e.propertyName==="value"&&Ur(Zn)){var t=[];za(t,Zn,e,Go(e)),na(cd,t)}}function fd(e,t,n){e==="focusin"?(Aa(),Xn=t,Zn=n,Xn.attachEvent("onpropertychange",Oa)):e==="focusout"&&Aa()}function pd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ur(Zn)}function md(e,t){if(e==="click")return Ur(t)}function hd(e,t){if(e==="input"||e==="change")return Ur(t)}function gd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:gd;function Jn(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!B.call(t,o)||!it(e[o],t[o]))return!1}return!0}function Ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fa(e,t){var n=Ia(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ia(n)}}function Ua(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ua(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ba(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vd(e){var t=Ba(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ua(n.ownerDocument.documentElement,n)){if(r!==null&&hl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Fa(n,l);var i=Fa(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yd=I&&"documentMode"in document&&11>=document.documentMode,gn=null,gl=null,er=null,vl=!1;function Wa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||gn==null||gn!==Sr(r)||(r=gn,"selectionStart"in r&&hl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&Jn(er,r)||(er=r,r=Hr(gl,"onSelect"),0<r.length&&(t=new al("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},yl={},Qa={};I&&(Qa=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Wr(e){if(yl[e])return yl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qa)return yl[e]=t[n];return e}var Ha=Wr("animationend"),Va=Wr("animationiteration"),$a=Wr("animationstart"),qa=Wr("transitionend"),Ga=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){Ga.set(e,t),U(t,[e])}for(var wl=0;wl<ba.length;wl++){var xl=ba[wl],wd=xl.toLowerCase(),xd=xl[0].toUpperCase()+xl.slice(1);Mt(wd,"on"+xd)}Mt(Ha,"onAnimationEnd"),Mt(Va,"onAnimationIteration"),Mt($a,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(qa,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Ka(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wc(r,t,void 0,e),e.currentTarget=null}function Ya(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,p=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Ka(o,a,p),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,p=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Ka(o,a,p),l=s}}}if(Cr)throw e=Xo,Cr=!1,Xo=null,e}function oe(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(Xa(t,e,2,!1),n.add(r))}function kl(e,t,n){var r=0;t&&(r|=4),Xa(n,e,r,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Qr]){e[Qr]=!0,x.forEach(function(n){n!=="selectionchange"&&(kd.has(n)||kl(n,!1,e),kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,kl("selectionchange",!1,t))}}function Xa(e,t,n,r){switch(xa(t)){case 1:var o=Ac;break;case 4:o=Oc;break;default:o=ol}n=o.bind(null,t,n,e),o=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Sl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Yt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}na(function(){var p=l,y=Go(n),w=[];e:{var g=Ga.get(e);if(g!==void 0){var C=al,T=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":C=Xc;break;case"focusin":T="focus",C=cl;break;case"focusout":T="blur",C=cl;break;case"beforeblur":case"afterblur":C=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=ed;break;case Ha:case Va:case $a:C=Qc;break;case qa:C=nd;break;case"scroll":C=Ic;break;case"wheel":C=od;break;case"copy":case"cut":case"paste":C=Vc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ca}var _=(t&4)!==0,me=!_&&e==="scroll",d=_?g!==null?g+"Capture":null:g;_=[];for(var u=p,f;u!==null;){f=u;var E=f.stateNode;if(f.tag===5&&E!==null&&(f=E,d!==null&&(E=Fn(u,d),E!=null&&_.push(rr(u,E,f)))),me)break;u=u.return}0<_.length&&(g=new C(g,T,null,n,y),w.push({event:g,listeners:_}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&n!==qo&&(T=n.relatedTarget||n.fromElement)&&(Yt(T)||T[xt]))break e;if((C||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,C?(T=n.relatedTarget||n.toElement,C=p,T=T?Yt(T):null,T!==null&&(me=Kt(T),T!==me||T.tag!==5&&T.tag!==6)&&(T=null)):(C=null,T=p),C!==T)){if(_=Ea,E="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ca,E="onPointerLeave",d="onPointerEnter",u="pointer"),me=C==null?g:xn(C),f=T==null?g:xn(T),g=new _(E,u+"leave",C,n,y),g.target=me,g.relatedTarget=f,E=null,Yt(y)===p&&(_=new _(d,u+"enter",T,n,y),_.target=f,_.relatedTarget=me,E=_),me=E,C&&T)t:{for(_=C,d=T,u=0,f=_;f;f=yn(f))u++;for(f=0,E=d;E;E=yn(E))f++;for(;0<u-f;)_=yn(_),u--;for(;0<f-u;)d=yn(d),f--;for(;u--;){if(_===d||d!==null&&_===d.alternate)break t;_=yn(_),d=yn(d)}_=null}else _=null;C!==null&&Za(w,g,C,_,!1),T!==null&&me!==null&&Za(w,me,T,_,!0)}}e:{if(g=p?xn(p):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var D=dd;else if(La(g))if(Ra)D=hd;else{D=pd;var z=fd}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(D=md);if(D&&(D=D(e,p))){za(w,D,n,y);break e}z&&z(e,g,p),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&Wo(g,"number",g.value)}switch(z=p?xn(p):window,e){case"focusin":(La(z)||z.contentEditable==="true")&&(gn=z,gl=p,er=null);break;case"focusout":er=gl=gn=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,Wa(w,n,y);break;case"selectionchange":if(yd)break;case"keydown":case"keyup":Wa(w,n,y)}var R;if(fl)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else hn?_a(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Na&&n.locale!=="ko"&&(hn||O!=="onCompositionStart"?O==="onCompositionEnd"&&hn&&(R=ka()):(Rt=y,il="value"in Rt?Rt.value:Rt.textContent,hn=!0)),z=Hr(p,O),0<z.length&&(O=new Pa(O,e,null,n,y),w.push({event:O,listeners:z}),R?O.data=R:(R=Da(n),R!==null&&(O.data=R)))),(R=id?ad(e,n):sd(e,n))&&(p=Hr(p,"onBeforeInput"),0<p.length&&(y=new Pa("onBeforeInput","beforeinput",null,n,y),w.push({event:y,listeners:p}),y.data=R))}Ya(w,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Fn(e,n),l!=null&&r.unshift(rr(e,l,o)),l=Fn(e,t),l!=null&&r.push(rr(e,l,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Za(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,p=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&p!==null&&(a=p,o?(s=Fn(n,l),s!=null&&i.unshift(rr(n,s,a))):o||(s=Fn(n,l),s!=null&&i.push(rr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Sd=/\r\n?/g,Ed=/\u0000|\uFFFD/g;function Ja(e){return(typeof e=="string"?e:""+e).replace(Sd,`
`).replace(Ed,"")}function Vr(e,t,n){if(t=Ja(t),Ja(e)!==t&&n)throw Error(h(425))}function $r(){}var El=null,Pl=null;function Cl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,Pd=typeof clearTimeout=="function"?clearTimeout:void 0,es=typeof Promise=="function"?Promise:void 0,Cd=typeof queueMicrotask=="function"?queueMicrotask:typeof es<"u"?function(e){return es.resolve(null).then(e).catch(Nd)}:Nl;function Nd(e){setTimeout(function(){throw e})}function jl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gn(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ts(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),ht="__reactFiber$"+wn,or="__reactProps$"+wn,xt="__reactContainer$"+wn,Tl="__reactEvents$"+wn,jd="__reactListeners$"+wn,Td="__reactHandles$"+wn;function Yt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ts(e);e!==null;){if(n=e[ht])return n;e=ts(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[ht]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function qr(e){return e[or]||null}var _l=[],kn=-1;function Ot(e){return{current:e}}function le(e){0>kn||(e.current=_l[kn],_l[kn]=null,kn--)}function re(e,t){kn++,_l[kn]=e.current,e.current=t}var It={},De=Ot(It),Fe=Ot(!1),Xt=It;function Sn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function Gr(){le(Fe),le(De)}function ns(e,t,n){if(De.current!==It)throw Error(h(168));re(De,t),re(Fe,n)}function rs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(h(108,ne(e)||"Unknown",o));return j({},n,r)}function br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Xt=De.current,re(De,e),re(Fe,Fe.current),!0}function os(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=rs(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,le(Fe),le(De),re(De,e)):le(Fe),re(Fe,n)}var kt=null,Kr=!1,Dl=!1;function ls(e){kt===null?kt=[e]:kt.push(e)}function _d(e){Kr=!0,ls(e)}function Ft(){if(!Dl&&kt!==null){Dl=!0;var e=0,t=te;try{var n=kt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Kr=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),aa(Zo,Ft),o}finally{te=t,Dl=!1}}return null}var En=[],Pn=0,Yr=null,Xr=0,Ze=[],Je=0,Zt=null,St=1,Et="";function Jt(e,t){En[Pn++]=Xr,En[Pn++]=Yr,Yr=e,Xr=t}function is(e,t,n){Ze[Je++]=St,Ze[Je++]=Et,Ze[Je++]=Zt,Zt=e;var r=St;e=Et;var o=32-lt(r)-1;r&=~(1<<o),n+=1;var l=32-lt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,St=1<<32-lt(t)+o|n<<o|r,Et=l+e}else St=1<<l|n<<o|r,Et=e}function Ll(e){e.return!==null&&(Jt(e,1),is(e,1,0))}function zl(e){for(;e===Yr;)Yr=En[--Pn],En[Pn]=null,Xr=En[--Pn],En[Pn]=null;for(;e===Zt;)Zt=Ze[--Je],Ze[Je]=null,Et=Ze[--Je],Ze[Je]=null,St=Ze[--Je],Ze[Je]=null}var Ke=null,Ye=null,ae=!1,at=null;function as(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ss(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ye=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:St,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Ye=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(ae){var t=Ye;if(t){var n=t;if(!ss(e,t)){if(Rl(e))throw Error(h(418));t=At(n.nextSibling);var r=Ke;t&&ss(e,t)?as(r,n):(e.flags=e.flags&-4097|2,ae=!1,Ke=e)}}else{if(Rl(e))throw Error(h(418));e.flags=e.flags&-4097|2,ae=!1,Ke=e}}}function us(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function Zr(e){if(e!==Ke)return!1;if(!ae)return us(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cl(e.type,e.memoizedProps)),t&&(t=Ye)){if(Rl(e))throw cs(),Error(h(418));for(;t;)as(e,t),t=At(t.nextSibling)}if(us(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ke?At(e.stateNode.nextSibling):null;return!0}function cs(){for(var e=Ye;e;)e=At(e.nextSibling)}function Cn(){Ye=Ke=null,ae=!1}function Al(e){at===null?at=[e]:at.push(e)}var Dd=ke.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Jr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ds(e){var t=e._init;return t(e._payload)}function fs(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=qt(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,E){return u===null||u.tag!==6?(u=Ni(f,d.mode,E),u.return=d,u):(u=o(u,f),u.return=d,u)}function s(d,u,f,E){var D=f.type;return D===_e?y(d,u,f.props.children,E,f.key):u!==null&&(u.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ie&&ds(D)===u.type)?(E=o(u,f.props),E.ref=ir(d,u,f),E.return=d,E):(E=Po(f.type,f.key,f.props,null,d.mode,E),E.ref=ir(d,u,f),E.return=d,E)}function p(d,u,f,E){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ji(f,d.mode,E),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function y(d,u,f,E,D){return u===null||u.tag!==7?(u=sn(f,d.mode,E,D),u.return=d,u):(u=o(u,f),u.return=d,u)}function w(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ni(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case $e:return f=Po(u.type,u.key,u.props,null,d.mode,f),f.ref=ir(d,null,u),f.return=d,f;case Ce:return u=ji(u,d.mode,f),u.return=d,u;case Ie:var E=u._init;return w(d,E(u._payload),f)}if(An(u)||M(u))return u=sn(u,d.mode,f,null),u.return=d,u;Jr(d,u)}return null}function g(d,u,f,E){var D=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return D!==null?null:a(d,u,""+f,E);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case $e:return f.key===D?s(d,u,f,E):null;case Ce:return f.key===D?p(d,u,f,E):null;case Ie:return D=f._init,g(d,u,D(f._payload),E)}if(An(f)||M(f))return D!==null?null:y(d,u,f,E,null);Jr(d,f)}return null}function C(d,u,f,E,D){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(f)||null,a(u,d,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case $e:return d=d.get(E.key===null?f:E.key)||null,s(u,d,E,D);case Ce:return d=d.get(E.key===null?f:E.key)||null,p(u,d,E,D);case Ie:var z=E._init;return C(d,u,f,z(E._payload),D)}if(An(E)||M(E))return d=d.get(f)||null,y(u,d,E,D,null);Jr(u,E)}return null}function T(d,u,f,E){for(var D=null,z=null,R=u,O=u=0,Pe=null;R!==null&&O<f.length;O++){R.index>O?(Pe=R,R=null):Pe=R.sibling;var Z=g(d,R,f[O],E);if(Z===null){R===null&&(R=Pe);break}e&&R&&Z.alternate===null&&t(d,R),u=l(Z,u,O),z===null?D=Z:z.sibling=Z,z=Z,R=Pe}if(O===f.length)return n(d,R),ae&&Jt(d,O),D;if(R===null){for(;O<f.length;O++)R=w(d,f[O],E),R!==null&&(u=l(R,u,O),z===null?D=R:z.sibling=R,z=R);return ae&&Jt(d,O),D}for(R=r(d,R);O<f.length;O++)Pe=C(R,d,O,f[O],E),Pe!==null&&(e&&Pe.alternate!==null&&R.delete(Pe.key===null?O:Pe.key),u=l(Pe,u,O),z===null?D=Pe:z.sibling=Pe,z=Pe);return e&&R.forEach(function(Gt){return t(d,Gt)}),ae&&Jt(d,O),D}function _(d,u,f,E){var D=M(f);if(typeof D!="function")throw Error(h(150));if(f=D.call(f),f==null)throw Error(h(151));for(var z=D=null,R=u,O=u=0,Pe=null,Z=f.next();R!==null&&!Z.done;O++,Z=f.next()){R.index>O?(Pe=R,R=null):Pe=R.sibling;var Gt=g(d,R,Z.value,E);if(Gt===null){R===null&&(R=Pe);break}e&&R&&Gt.alternate===null&&t(d,R),u=l(Gt,u,O),z===null?D=Gt:z.sibling=Gt,z=Gt,R=Pe}if(Z.done)return n(d,R),ae&&Jt(d,O),D;if(R===null){for(;!Z.done;O++,Z=f.next())Z=w(d,Z.value,E),Z!==null&&(u=l(Z,u,O),z===null?D=Z:z.sibling=Z,z=Z);return ae&&Jt(d,O),D}for(R=r(d,R);!Z.done;O++,Z=f.next())Z=C(R,d,O,Z.value,E),Z!==null&&(e&&Z.alternate!==null&&R.delete(Z.key===null?O:Z.key),u=l(Z,u,O),z===null?D=Z:z.sibling=Z,z=Z);return e&&R.forEach(function(cf){return t(d,cf)}),ae&&Jt(d,O),D}function me(d,u,f,E){if(typeof f=="object"&&f!==null&&f.type===_e&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case $e:e:{for(var D=f.key,z=u;z!==null;){if(z.key===D){if(D=f.type,D===_e){if(z.tag===7){n(d,z.sibling),u=o(z,f.props.children),u.return=d,d=u;break e}}else if(z.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ie&&ds(D)===z.type){n(d,z.sibling),u=o(z,f.props),u.ref=ir(d,z,f),u.return=d,d=u;break e}n(d,z);break}else t(d,z);z=z.sibling}f.type===_e?(u=sn(f.props.children,d.mode,E,f.key),u.return=d,d=u):(E=Po(f.type,f.key,f.props,null,d.mode,E),E.ref=ir(d,u,f),E.return=d,d=E)}return i(d);case Ce:e:{for(z=f.key;u!==null;){if(u.key===z)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=ji(f,d.mode,E),u.return=d,d=u}return i(d);case Ie:return z=f._init,me(d,u,z(f._payload),E)}if(An(f))return T(d,u,f,E);if(M(f))return _(d,u,f,E);Jr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=Ni(f,d.mode,E),u.return=d,d=u),i(d)):n(d,u)}return me}var Nn=fs(!0),ps=fs(!1),eo=Ot(null),to=null,jn=null,Ol=null;function Il(){Ol=jn=to=null}function Fl(e){var t=eo.current;le(eo),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){to=e,Ol=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(Ol!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(to===null)throw Error(h(308));jn=e,to.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var en=null;function Bl(e){en===null?en=[e]:en.push(e)}function ms(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Bl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Pt(e,n)}return o=r.interleaved,o===null?(t.next=t,Bl(r)):(t.next=o.next,o.next=t),r.interleaved=t,Pt(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tl(e,n)}}function gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ro(e,t,n,r){var o=e.updateQueue;Ut=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,p=s.next;s.next=null,i===null?l=p:i.next=p,i=s;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==i&&(a===null?y.firstBaseUpdate=p:a.next=p,y.lastBaseUpdate=s))}if(l!==null){var w=o.baseState;i=0,y=p=s=null,a=l;do{var g=a.lane,C=a.eventTime;if((r&g)===g){y!==null&&(y=y.next={eventTime:C,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=e,_=a;switch(g=t,C=n,_.tag){case 1:if(T=_.payload,typeof T=="function"){w=T.call(C,w,g);break e}w=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=_.payload,g=typeof T=="function"?T.call(C,w,g):T,g==null)break e;w=j({},w,g);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else C={eventTime:C,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(p=y=C,s=w):y=y.next=C,i|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(y===null&&(s=w),o.baseState=s,o.firstBaseUpdate=p,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);rn|=i,e.lanes=i,e.memoizedState=w}}function vs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(h(191,o));o.call(r)}}}var ar={},gt=Ot(ar),sr=Ot(ar),ur=Ot(ar);function tn(e){if(e===ar)throw Error(h(174));return e}function Ql(e,t){switch(re(ur,t),re(sr,e),re(gt,ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ho(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ho(t,e)}le(gt),re(gt,t)}function _n(){le(gt),le(sr),le(ur)}function ys(e){tn(ur.current);var t=tn(gt.current),n=Ho(t,e.type);t!==n&&(re(sr,e),re(gt,n))}function Hl(e){sr.current===e&&(le(gt),le(sr))}var se=Ot(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function $l(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var lo=ke.ReactCurrentDispatcher,ql=ke.ReactCurrentBatchConfig,nn=0,ue=null,ye=null,Se=null,io=!1,cr=!1,dr=0,Ld=0;function Le(){throw Error(h(321))}function Gl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function bl(e,t,n,r,o,l){if(nn=l,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lo.current=e===null||e.memoizedState===null?Ad:Od,e=n(r,o),cr){l=0;do{if(cr=!1,dr=0,25<=l)throw Error(h(301));l+=1,Se=ye=null,t.updateQueue=null,lo.current=Id,e=n(r,o)}while(cr)}if(lo.current=uo,t=ye!==null&&ye.next!==null,nn=0,Se=ye=ue=null,io=!1,t)throw Error(h(300));return e}function Kl(){var e=dr!==0;return dr=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ue.memoizedState=Se=e:Se=Se.next=e,Se}function tt(){if(ye===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?ue.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(h(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?ue.memoizedState=Se=e:Se=Se.next=e}return Se}function fr(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=tt(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=ye,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,p=l;do{var y=p.lane;if((nn&y)===y)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var w={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(a=s=w,i=r):s=s.next=w,ue.lanes|=y,rn|=y}p=p.next}while(p!==null&&p!==l);s===null?i=r:s.next=a,it(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ue.lanes|=l,rn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=tt(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);it(l,t.memoizedState)||(Be=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ws(){}function xs(e,t){var n=ue,r=tt(),o=t(),l=!it(r.memoizedState,o);if(l&&(r.memoizedState=o,Be=!0),r=r.queue,Zl(Es.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,pr(9,Ss.bind(null,n,r,o,t),void 0,null),Ee===null)throw Error(h(349));(nn&30)!==0||ks(n,t,o)}return o}function ks(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ss(e,t,n,r){t.value=n,t.getSnapshot=r,Ps(t)&&Cs(e)}function Es(e,t,n){return n(function(){Ps(t)&&Cs(e)})}function Ps(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Cs(e){var t=Pt(e,1);t!==null&&dt(t,e,1,-1)}function Ns(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=Md.bind(null,ue,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function js(){return tt().memoizedState}function ao(e,t,n,r){var o=vt();ue.flags|=e,o.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function so(e,t,n,r){var o=tt();r=r===void 0?null:r;var l=void 0;if(ye!==null){var i=ye.memoizedState;if(l=i.destroy,r!==null&&Gl(r,i.deps)){o.memoizedState=pr(t,n,l,r);return}}ue.flags|=e,o.memoizedState=pr(1|t,n,l,r)}function Ts(e,t){return ao(8390656,8,e,t)}function Zl(e,t){return so(2048,8,e,t)}function _s(e,t){return so(4,2,e,t)}function Ds(e,t){return so(4,4,e,t)}function Ls(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zs(e,t,n){return n=n!=null?n.concat([e]):null,so(4,4,Ls.bind(null,t,e),n)}function Jl(){}function Rs(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ms(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function As(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n):(it(n,t)||(n=da(),ue.lanes|=n,rn|=n,e.baseState=!0),t)}function zd(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{te=n,ql.transition=r}}function Os(){return tt().memoizedState}function Rd(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e))Fs(t,n);else if(n=ms(e,t,n,r),n!==null){var o=Ae();dt(n,e,r,o),Us(n,t,r)}}function Md(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Fs(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,it(a,i)){var s=t.interleaved;s===null?(o.next=o,Bl(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=ms(e,t,o,r),n!==null&&(o=Ae(),dt(n,e,r,o),Us(n,t,r))}}function Is(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Fs(e,t){cr=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Us(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tl(e,n)}}var uo={readContext:et,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Ad={readContext:et,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Ts,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ao(4194308,4,Ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return ao(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rd.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Ns,useDebugValue:Jl,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Ns(!1),t=e[0];return e=zd.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,o=vt();if(ae){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),Ee===null)throw Error(h(349));(nn&30)!==0||ks(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ts(Es.bind(null,r,l,e),[e]),r.flags|=2048,pr(9,Ss.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=vt(),t=Ee.identifierPrefix;if(ae){var n=Et,r=St;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ld++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Od={readContext:et,useCallback:Rs,useContext:et,useEffect:Zl,useImperativeHandle:zs,useInsertionEffect:_s,useLayoutEffect:Ds,useMemo:Ms,useReducer:Yl,useRef:js,useState:function(){return Yl(fr)},useDebugValue:Jl,useDeferredValue:function(e){var t=tt();return As(t,ye.memoizedState,e)},useTransition:function(){var e=Yl(fr)[0],t=tt().memoizedState;return[e,t]},useMutableSource:ws,useSyncExternalStore:xs,useId:Os,unstable_isNewReconciler:!1},Id={readContext:et,useCallback:Rs,useContext:et,useEffect:Zl,useImperativeHandle:zs,useInsertionEffect:_s,useLayoutEffect:Ds,useMemo:Ms,useReducer:Xl,useRef:js,useState:function(){return Xl(fr)},useDebugValue:Jl,useDeferredValue:function(e){var t=tt();return ye===null?t.memoizedState=e:As(t,ye.memoizedState,e)},useTransition:function(){var e=Xl(fr)[0],t=tt().memoizedState;return[e,t]},useMutableSource:ws,useSyncExternalStore:xs,useId:Os,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ei(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var co={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Vt(e),l=Ct(r,o);l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,o),t!==null&&(dt(t,e,o,r),no(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Vt(e),l=Ct(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Bt(e,l,o),t!==null&&(dt(t,e,o,r),no(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Vt(e),o=Ct(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(dt(t,e,r,n),no(t,e,r))}};function Bs(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(o,l):!0}function Ws(e,t,n){var r=!1,o=It,l=t.contextType;return typeof l=="object"&&l!==null?l=et(l):(o=Ue(t)?Xt:De.current,r=t.contextTypes,l=(r=r!=null)?Sn(e,o):It),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function ti(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Wl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=et(l):(l=Ue(t)?Xt:De.current,o.context=Sn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ei(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&co.enqueueReplaceState(o,o.state,null),ro(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dn(e,t){try{var n="",r=t;do n+=Y(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fd=typeof WeakMap=="function"?WeakMap:Map;function Hs(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,yi=r),ri(e,t)},n}function Vs(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ri(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ri(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function $s(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Zd.bind(null,e,t,n),t.then(e,e))}function qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gs(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Ud=ke.ReactCurrentOwner,Be=!1;function Me(e,t,n,r){t.child=e===null?ps(t,null,n,r):Nn(t,e.child,n,r)}function bs(e,t,n,r,o){n=n.render;var l=t.ref;return Tn(t,o),r=bl(e,t,n,r,l,o),n=Kl(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(ae&&n&&Ll(t),t.flags|=1,Me(e,t,r,o),t.child)}function Ks(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ci(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ys(e,t,l,r,o)):(e=Po(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(i,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=qt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ys(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Jn(l,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return oi(e,t,n,r,o)}function Xs(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(zn,Xe),Xe|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(zn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,re(zn,Xe),Xe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,re(zn,Xe),Xe|=r;return Me(e,t,o,n),t.child}function Zs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oi(e,t,n,r,o){var l=Ue(n)?Xt:De.current;return l=Sn(t,l),Tn(t,o),n=bl(e,t,n,r,l,o),r=Kl(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(ae&&r&&Ll(t),t.flags|=1,Me(e,t,n,o),t.child)}function Js(e,t,n,r,o){if(Ue(n)){var l=!0;br(t)}else l=!1;if(Tn(t,o),t.stateNode===null)po(e,t),Ws(t,n,r),ti(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,p=n.contextType;typeof p=="object"&&p!==null?p=et(p):(p=Ue(n)?Xt:De.current,p=Sn(t,p));var y=n.getDerivedStateFromProps,w=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==p)&&Qs(t,i,r,p),Ut=!1;var g=t.memoizedState;i.state=g,ro(t,r,i,o),s=t.memoizedState,a!==r||g!==s||Fe.current||Ut?(typeof y=="function"&&(ei(t,n,y,r),s=t.memoizedState),(a=Ut||Bs(t,n,a,r,g,s,p))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=p,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,hs(e,t),a=t.memoizedProps,p=t.type===t.elementType?a:st(t.type,a),i.props=p,w=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=et(s):(s=Ue(n)?Xt:De.current,s=Sn(t,s));var C=n.getDerivedStateFromProps;(y=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==w||g!==s)&&Qs(t,i,r,s),Ut=!1,g=t.memoizedState,i.state=g,ro(t,r,i,o);var T=t.memoizedState;a!==w||g!==T||Fe.current||Ut?(typeof C=="function"&&(ei(t,n,C,r),T=t.memoizedState),(p=Ut||Bs(t,n,p,r,g,T,s)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,T,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,T,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=T),i.props=r,i.state=T,i.context=s,r=p):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return li(e,t,n,r,l,o)}function li(e,t,n,r,o,l){Zs(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&os(t,n,!1),Nt(e,t,l);r=t.stateNode,Ud.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Nn(t,e.child,null,l),t.child=Nn(t,null,a,l)):Me(e,t,a,l),t.memoizedState=r.state,o&&os(t,n,!0),t.child}function eu(e){var t=e.stateNode;t.pendingContext?ns(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ns(e,t.context,!1),Ql(e,t.containerInfo)}function tu(e,t,n,r,o){return Cn(),Al(o),t.flags|=256,Me(e,t,n,r),t.child}var ii={dehydrated:null,treeContext:null,retryLane:0};function ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function nu(e,t,n){var r=t.pendingProps,o=se.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),re(se,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Co(i,r,0,null),e=sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ai(n),t.memoizedState=ii,e):si(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Bd(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=qt(a,l):(l=sn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ai(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ii,r}return l=e.child,e=l.sibling,r=qt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function si(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&Al(r),Nn(t,e.child,null,n),e=si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bd(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(h(422))),fo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Co({mode:"visible",children:r.children},o,0,null),l=sn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Nn(t,e.child,null,i),t.child.memoizedState=ai(i),t.memoizedState=ii,l);if((t.mode&1)===0)return fo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(h(419)),r=ni(l,r,void 0),fo(e,t,i,r)}if(a=(i&e.childLanes)!==0,Be||a){if(r=Ee,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Pt(e,o),dt(r,e,o,-1))}return Pi(),r=ni(Error(h(421))),fo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Jd.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ye=At(o.nextSibling),Ke=t,ae=!0,at=null,e!==null&&(Ze[Je++]=St,Ze[Je++]=Et,Ze[Je++]=Zt,St=e.id,Et=e.overflow,Zt=t),t=si(t,r.children),t.flags|=4096,t)}function ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function ui(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function ou(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Me(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,n,t);else if(e.tag===19)ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ui(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&oo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ui(t,!0,n,null,l);break;case"together":ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wd(e,t,n){switch(t.tag){case 3:eu(t),Cn();break;case 5:ys(t);break;case 1:Ue(t.type)&&br(t);break;case 4:Ql(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;re(eo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?nu(e,t,n):(re(se,se.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);re(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ou(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),re(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Xs(e,t,n)}return Nt(e,t,n)}var lu,ci,iu,au;lu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ci=function(){},iu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(gt.current);var l=null;switch(n){case"input":o=Uo(e,o),r=Uo(e,r),l=[];break;case"select":o=j({},o,{value:void 0}),r=j({},r,{value:void 0}),l=[];break;case"textarea":o=Qo(e,o),r=Qo(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}Vo(n,r);var i;n=null;for(p in o)if(!r.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var a=o[p];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(L.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var s=r[p];if(a=o!=null?o[p]:void 0,r.hasOwnProperty(p)&&s!==a&&(s!=null||a!=null))if(p==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(L.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&oe("scroll",e),l||a===s||(l=[])):(l=l||[]).push(p,s))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}},au=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qd(e,t,n){var r=t.pendingProps;switch(zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ue(t.type)&&Gr(),ze(t),null;case 3:return r=t.stateNode,_n(),le(Fe),le(De),$l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,at!==null&&(ki(at),at=null))),ci(e,t),ze(t),null;case 5:Hl(t);var o=tn(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)iu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return ze(t),null}if(e=tn(gt.current),Zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ht]=t,r[or]=l,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(o=0;o<tr.length;o++)oe(tr[o],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Wi(r,l),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},oe("invalid",r);break;case"textarea":Vi(r,l),oe("invalid",r)}Vo(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),o=["children",""+a]):L.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&oe("scroll",r)}switch(n){case"input":kr(r),Hi(r,l,!0);break;case"textarea":kr(r),qi(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=$r)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[ht]=t,e[or]=r,lu(e,t,!1,!1),t.stateNode=e;e:{switch(i=$o(n,r),n){case"dialog":oe("cancel",e),oe("close",e),o=r;break;case"iframe":case"object":case"embed":oe("load",e),o=r;break;case"video":case"audio":for(o=0;o<tr.length;o++)oe(tr[o],e);o=r;break;case"source":oe("error",e),o=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),o=r;break;case"details":oe("toggle",e),o=r;break;case"input":Wi(e,r),o=Uo(e,r),oe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=j({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Vi(e,r),o=Qo(e,r),oe("invalid",e);break;default:o=r}Vo(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Yi(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bi(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&On(e,s):typeof s=="number"&&On(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(L.hasOwnProperty(l)?s!=null&&l==="onScroll"&&oe("scroll",e):s!=null&&Ve(e,l,s,i))}switch(n){case"input":kr(e),Hi(e,r,!1);break;case"textarea":kr(e),qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ee(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?cn(e,!!r.multiple,l,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)au(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=tn(ur.current),tn(gt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(l=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return ze(t),null;case 13:if(le(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)cs(),Cn(),t.flags|=98560,l=!1;else if(l=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[ht]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else at!==null&&(ki(at),at=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?we===0&&(we=3):Pi())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return _n(),ci(e,t),e===null&&nr(t.stateNode.containerInfo),ze(t),null;case 10:return Fl(t.type._context),ze(t),null;case 17:return Ue(t.type)&&Gr(),ze(t),null;case 19:if(le(se),l=t.memoizedState,l===null)return ze(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)mr(l,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=oo(e),i!==null){for(t.flags|=128,mr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(se,se.current&1|2),t.child}e=e.sibling}l.tail!==null&&pe()>Rn&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304)}else{if(!r)if(e=oo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return ze(t),null}else 2*pe()-l.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=pe(),t.sibling=null,n=se.current,re(se,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Ei(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Xe&1073741824)!==0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function Hd(e,t){switch(zl(t),t.tag){case 1:return Ue(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),le(Fe),le(De),$l(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Hl(t),null;case 13:if(le(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(se),null;case 4:return _n(),null;case 10:return Fl(t.type._context),null;case 22:case 23:return Ei(),null;case 24:return null;default:return null}}var mo=!1,Re=!1,Vd=typeof WeakSet=="function"?WeakSet:Set,N=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function di(e,t,n){try{n()}catch(r){fe(e,t,r)}}var su=!1;function $d(e,t){if(El=Rr,e=Ba(),hl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,p=0,y=0,w=e,g=null;t:for(;;){for(var C;w!==n||o!==0&&w.nodeType!==3||(a=i+o),w!==l||r!==0&&w.nodeType!==3||(s=i+r),w.nodeType===3&&(i+=w.nodeValue.length),(C=w.firstChild)!==null;)g=w,w=C;for(;;){if(w===e)break t;if(g===n&&++p===o&&(a=i),g===l&&++y===r&&(s=i),(C=w.nextSibling)!==null)break;w=g,g=w.parentNode}w=C}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pl={focusedElem:e,selectionRange:n},Rr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var T=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var _=T.memoizedProps,me=T.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:st(t.type,_),me);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(E){fe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return T=su,su=!1,T}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&di(t,n,l)}o=o.next}while(o!==r)}}function ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uu(e){var t=e.alternate;t!==null&&(e.alternate=null,uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[or],delete t[Tl],delete t[jd],delete t[Td])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cu(e){return e.tag===5||e.tag===3||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(pi(e,t,n),e=e.sibling;e!==null;)pi(e,t,n),e=e.sibling}function mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mi(e,t,n),e=e.sibling;e!==null;)mi(e,t,n),e=e.sibling}var Ne=null,ut=!1;function Wt(e,t,n){for(n=n.child;n!==null;)fu(e,t,n),n=n.sibling}function fu(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(jr,n)}catch{}switch(n.tag){case 5:Re||Ln(n,t);case 6:var r=Ne,o=ut;Ne=null,Wt(e,t,n),Ne=r,ut=o,Ne!==null&&(ut?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(ut?(e=Ne,n=n.stateNode,e.nodeType===8?jl(e.parentNode,n):e.nodeType===1&&jl(e,n),Gn(e)):jl(Ne,n.stateNode));break;case 4:r=Ne,o=ut,Ne=n.stateNode.containerInfo,ut=!0,Wt(e,t,n),Ne=r,ut=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&di(n,t,i),o=o.next}while(o!==r)}Wt(e,t,n);break;case 1:if(!Re&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Wt(e,t,n),Re=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vd),t.forEach(function(r){var o=ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,ut=!1;break e;case 3:Ne=a.stateNode.containerInfo,ut=!0;break e;case 4:Ne=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(Ne===null)throw Error(h(160));fu(l,i,o),Ne=null,ut=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(p){fe(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mu(t,e),t=t.sibling}function mu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),yt(e),r&4){try{hr(3,e,e.return),ho(3,e)}catch(_){fe(e,e.return,_)}try{hr(5,e,e.return)}catch(_){fe(e,e.return,_)}}break;case 1:ct(t,e),yt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(ct(t,e),yt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var o=e.stateNode;try{On(o,"")}catch(_){fe(e,e.return,_)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Qi(o,l),$o(a,i);var p=$o(a,l);for(i=0;i<s.length;i+=2){var y=s[i],w=s[i+1];y==="style"?Yi(o,w):y==="dangerouslySetInnerHTML"?bi(o,w):y==="children"?On(o,w):Ve(o,y,w,p)}switch(a){case"input":Bo(o,l);break;case"textarea":$i(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var C=l.value;C!=null?cn(o,!!l.multiple,C,!1):g!==!!l.multiple&&(l.defaultValue!=null?cn(o,!!l.multiple,l.defaultValue,!0):cn(o,!!l.multiple,l.multiple?[]:"",!1))}o[or]=l}catch(_){fe(e,e.return,_)}}break;case 6:if(ct(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(h(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(_){fe(e,e.return,_)}}break;case 3:if(ct(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(_){fe(e,e.return,_)}break;case 4:ct(t,e),yt(e);break;case 13:ct(t,e),yt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(vi=pe())),r&4&&pu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(p=Re)||y,ct(t,e),Re=p):ct(t,e),yt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&(e.mode&1)!==0)for(N=e,y=e.child;y!==null;){for(w=N=y;N!==null;){switch(g=N,C=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:Ln(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(_){fe(r,n,_)}}break;case 5:Ln(g,g.return);break;case 22:if(g.memoizedState!==null){vu(w);continue}}C!==null?(C.return=g,N=C):vu(w)}y=y.sibling}e:for(y=null,w=e;;){if(w.tag===5){if(y===null){y=w;try{o=w.stateNode,p?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=w.stateNode,s=w.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ki("display",i))}catch(_){fe(e,e.return,_)}}}else if(w.tag===6){if(y===null)try{w.stateNode.nodeValue=p?"":w.memoizedProps}catch(_){fe(e,e.return,_)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;y===w&&(y=null),w=w.return}y===w&&(y=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:ct(t,e),yt(e),r&4&&pu(e);break;case 21:break;default:ct(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cu(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(On(o,""),r.flags&=-33);var l=du(e);mi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=du(e);pi(e,a,i);break;default:throw Error(h(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qd(e,t,n){N=e,hu(e)}function hu(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||mo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Re;a=mo;var p=Re;if(mo=i,(Re=s)&&!p)for(N=o;N!==null;)i=N,s=i.child,i.tag===22&&i.memoizedState!==null?yu(o):s!==null?(s.return=i,N=s):yu(o);for(;l!==null;)N=l,hu(l),l=l.sibling;N=o,mo=a,Re=p}gu(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,N=l):gu(e)}}function gu(e){for(;N!==null;){var t=N;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Re||ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&vs(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vs(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var w=y.dehydrated;w!==null&&Gn(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Re||t.flags&512&&fi(t)}catch(g){fe(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function vu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function yu(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ho(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var l=t.return;try{fi(t)}catch(s){fe(t,l,s)}break;case 5:var i=t.return;try{fi(t)}catch(s){fe(t,i,s)}}}catch(s){fe(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Gd=Math.ceil,go=ke.ReactCurrentDispatcher,hi=ke.ReactCurrentOwner,nt=ke.ReactCurrentBatchConfig,K=0,Ee=null,ge=null,je=0,Xe=0,zn=Ot(0),we=0,gr=null,rn=0,vo=0,gi=0,vr=null,We=null,vi=0,Rn=1/0,jt=null,yo=!1,yi=null,Qt=null,wo=!1,Ht=null,xo=0,yr=0,wi=null,ko=-1,So=0;function Ae(){return(K&6)!==0?pe():ko!==-1?ko:ko=pe()}function Vt(e){return(e.mode&1)===0?1:(K&2)!==0&&je!==0?je&-je:Dd.transition!==null?(So===0&&(So=da()),So):(e=te,e!==0||(e=window.event,e=e===void 0?16:xa(e.type)),e)}function dt(e,t,n,r){if(50<yr)throw yr=0,wi=null,Error(h(185));Qn(e,n,r),((K&2)===0||e!==Ee)&&(e===Ee&&((K&2)===0&&(vo|=n),we===4&&$t(e,je)),Qe(e,r),n===1&&K===0&&(t.mode&1)===0&&(Rn=pe()+500,Kr&&Ft()))}function Qe(e,t){var n=e.callbackNode;Dc(e,t);var r=Dr(e,e===Ee?je:0);if(r===0)n!==null&&sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sa(n),t===1)e.tag===0?_d(xu.bind(null,e)):ls(xu.bind(null,e)),Cd(function(){(K&6)===0&&Ft()}),n=null;else{switch(fa(r)){case 1:n=Zo;break;case 4:n=ua;break;case 16:n=Nr;break;case 536870912:n=ca;break;default:n=Nr}n=Tu(n,wu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wu(e,t){if(ko=-1,So=0,(K&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Dr(e,e===Ee?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Eo(e,r);else{t=r;var o=K;K|=2;var l=Su();(Ee!==e||je!==t)&&(jt=null,Rn=pe()+500,ln(e,t));do try{Yd();break}catch(a){ku(e,a)}while(!0);Il(),go.current=l,K=o,ge!==null?t=0:(Ee=null,je=0,t=we)}if(t!==0){if(t===2&&(o=Jo(e),o!==0&&(r=o,t=xi(e,o))),t===1)throw n=gr,ln(e,0),$t(e,r),Qe(e,pe()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,(r&30)===0&&!bd(o)&&(t=Eo(e,r),t===2&&(l=Jo(e),l!==0&&(r=l,t=xi(e,l))),t===1))throw n=gr,ln(e,0),$t(e,r),Qe(e,pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:an(e,We,jt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=vi+500-pe(),10<t)){if(Dr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Nl(an.bind(null,e,We,jt),t);break}an(e,We,jt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-lt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gd(r/1960))-r,10<r){e.timeoutHandle=Nl(an.bind(null,e,We,jt),r);break}an(e,We,jt);break;case 5:an(e,We,jt);break;default:throw Error(h(329))}}}return Qe(e,pe()),e.callbackNode===n?wu.bind(null,e):null}function xi(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Eo(e,t),e!==2&&(t=We,We=n,t!==null&&ki(t)),e}function ki(e){We===null?We=e:We.push.apply(We,e)}function bd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!it(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~gi,t&=~vo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function xu(e){if((K&6)!==0)throw Error(h(327));Mn();var t=Dr(e,0);if((t&1)===0)return Qe(e,pe()),null;var n=Eo(e,t);if(e.tag!==0&&n===2){var r=Jo(e);r!==0&&(t=r,n=xi(e,r))}if(n===1)throw n=gr,ln(e,0),$t(e,t),Qe(e,pe()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,We,jt),Qe(e,pe()),null}function Si(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Rn=pe()+500,Kr&&Ft())}}function on(e){Ht!==null&&Ht.tag===0&&(K&6)===0&&Mn();var t=K;K|=1;var n=nt.transition,r=te;try{if(nt.transition=null,te=1,e)return e()}finally{te=r,nt.transition=n,K=t,(K&6)===0&&Ft()}}function Ei(){Xe=zn.current,le(zn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pd(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:_n(),le(Fe),le(De),$l();break;case 5:Hl(r);break;case 4:_n();break;case 13:le(se);break;case 19:le(se);break;case 10:Fl(r.type._context);break;case 22:case 23:Ei()}n=n.return}if(Ee=e,ge=e=qt(e.current,null),je=Xe=t,we=0,gr=null,gi=vo=rn=0,We=vr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}en=null}return e}function ku(e,t){do{var n=ge;try{if(Il(),lo.current=uo,io){for(var r=ue.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}io=!1}if(nn=0,Se=ye=ue=null,cr=!1,dr=0,hi.current=null,n===null||n.return===null){we=1,gr=t,ge=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=je,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,y=a,w=y.tag;if((y.mode&1)===0&&(w===0||w===11||w===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var C=qs(i);if(C!==null){C.flags&=-257,Gs(C,i,a,l,t),C.mode&1&&$s(l,p,t),t=C,s=p;var T=t.updateQueue;if(T===null){var _=new Set;_.add(s),t.updateQueue=_}else T.add(s);break e}else{if((t&1)===0){$s(l,p,t),Pi();break e}s=Error(h(426))}}else if(ae&&a.mode&1){var me=qs(i);if(me!==null){(me.flags&65536)===0&&(me.flags|=256),Gs(me,i,a,l,t),Al(Dn(s,a));break e}}l=s=Dn(s,a),we!==4&&(we=2),vr===null?vr=[l]:vr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Hs(l,s,t);gs(l,d);break e;case 1:a=s;var u=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qt===null||!Qt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var E=Vs(l,a,t);gs(l,E);break e}}l=l.return}while(l!==null)}Pu(n)}catch(D){t=D,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Su(){var e=go.current;return go.current=uo,e===null?uo:e}function Pi(){(we===0||we===3||we===2)&&(we=4),Ee===null||(rn&268435455)===0&&(vo&268435455)===0||$t(Ee,je)}function Eo(e,t){var n=K;K|=2;var r=Su();(Ee!==e||je!==t)&&(jt=null,ln(e,t));do try{Kd();break}catch(o){ku(e,o)}while(!0);if(Il(),K=n,go.current=r,ge!==null)throw Error(h(261));return Ee=null,je=0,we}function Kd(){for(;ge!==null;)Eu(ge)}function Yd(){for(;ge!==null&&!kc();)Eu(ge)}function Eu(e){var t=ju(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Pu(e):ge=t,hi.current=null}function Pu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Qd(n,t,Xe),n!==null){ge=n;return}}else{if(n=Hd(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function an(e,t,n){var r=te,o=nt.transition;try{nt.transition=null,te=1,Xd(e,t,n,r)}finally{nt.transition=o,te=r}return null}function Xd(e,t,n,r){do Mn();while(Ht!==null);if((K&6)!==0)throw Error(h(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Lc(e,l),e===Ee&&(ge=Ee=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||wo||(wo=!0,Tu(Nr,function(){return Mn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=nt.transition,nt.transition=null;var i=te;te=1;var a=K;K|=4,hi.current=null,$d(e,n),mu(n,e),vd(Pl),Rr=!!El,Pl=El=null,e.current=n,qd(n),Sc(),K=a,te=i,nt.transition=l}else e.current=n;if(wo&&(wo=!1,Ht=e,xo=o),l=e.pendingLanes,l===0&&(Qt=null),Cc(n.stateNode),Qe(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yo)throw yo=!1,e=yi,yi=null,e;return(xo&1)!==0&&e.tag!==0&&Mn(),l=e.pendingLanes,(l&1)!==0?e===wi?yr++:(yr=0,wi=e):yr=0,Ft(),null}function Mn(){if(Ht!==null){var e=fa(xo),t=nt.transition,n=te;try{if(nt.transition=null,te=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,xo=0,(K&6)!==0)throw Error(h(331));var o=K;for(K|=4,N=e.current;N!==null;){var l=N,i=l.child;if((N.flags&16)!==0){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var p=a[s];for(N=p;N!==null;){var y=N;switch(y.tag){case 0:case 11:case 15:hr(8,y,l)}var w=y.child;if(w!==null)w.return=y,N=w;else for(;N!==null;){y=N;var g=y.sibling,C=y.return;if(uu(y),y===p){N=null;break}if(g!==null){g.return=C,N=g;break}N=C}}}var T=l.alternate;if(T!==null){var _=T.child;if(_!==null){T.child=null;do{var me=_.sibling;_.sibling=null,_=me}while(_!==null)}}N=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,N=i;else e:for(;N!==null;){if(l=N,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:hr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,N=d;break e}N=l.return}}var u=e.current;for(N=u;N!==null;){i=N;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,N=f;else e:for(i=u;N!==null;){if(a=N,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ho(9,a)}}catch(D){fe(a,a.return,D)}if(a===i){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if(K=o,Ft(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(jr,e)}catch{}r=!0}return r}finally{te=n,nt.transition=t}}return!1}function Cu(e,t,n){t=Dn(n,t),t=Hs(e,t,1),e=Bt(e,t,1),t=Ae(),e!==null&&(Qn(e,1,t),Qe(e,t))}function fe(e,t,n){if(e.tag===3)Cu(e,e,n);else for(;t!==null;){if(t.tag===3){Cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Dn(n,e),e=Vs(t,e,1),t=Bt(t,e,1),e=Ae(),t!==null&&(Qn(t,1,e),Qe(t,e));break}}t=t.return}}function Zd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(je&n)===n&&(we===4||we===3&&(je&130023424)===je&&500>pe()-vi?ln(e,0):gi|=n),Qe(e,t)}function Nu(e,t){t===0&&((e.mode&1)===0?t=1:(t=_r,_r<<=1,(_r&130023424)===0&&(_r=4194304)));var n=Ae();e=Pt(e,t),e!==null&&(Qn(e,t,n),Qe(e,n))}function Jd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nu(e,n)}function ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),Nu(e,n)}var ju;ju=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Be=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Be=!1,Wd(e,t,n);Be=(e.flags&131072)!==0}else Be=!1,ae&&(t.flags&1048576)!==0&&is(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var o=Sn(t,De.current);Tn(t,n),o=bl(null,t,r,e,o,n);var l=Kl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(l=!0,br(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wl(t),o.updater=co,t.stateNode=o,o._reactInternals=t,ti(t,r,e,n),t=li(null,t,r,!0,l,n)):(t.tag=0,ae&&l&&Ll(t),Me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=nf(r),e=st(r,e),o){case 0:t=oi(null,t,r,e,n);break e;case 1:t=Js(null,t,r,e,n);break e;case 11:t=bs(null,t,r,e,n);break e;case 14:t=Ks(null,t,r,st(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),oi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Js(e,t,r,o,n);case 3:e:{if(eu(t),e===null)throw Error(h(387));r=t.pendingProps,l=t.memoizedState,o=l.element,hs(e,t),ro(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Dn(Error(h(423)),t),t=tu(e,t,r,n,o);break e}else if(r!==o){o=Dn(Error(h(424)),t),t=tu(e,t,r,n,o);break e}else for(Ye=At(t.stateNode.containerInfo.firstChild),Ke=t,ae=!0,at=null,n=ps(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===o){t=Nt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return ys(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Cl(r,o)?i=null:l!==null&&Cl(r,l)&&(t.flags|=32),Zs(e,t),Me(e,t,i,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return nu(e,t,n);case 4:return Ql(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),bs(e,t,r,o,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,re(eo,r._currentValue),r._currentValue=i,l!==null)if(it(l.value,i)){if(l.children===o.children&&!Fe.current){t=Nt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Ct(-1,n&-n),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?s.next=s:(s.next=y.next,y.next=s),p.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ul(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(h(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ul(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Tn(t,n),o=et(o),r=r(o),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),Ks(e,t,r,o,n);case 15:return Ys(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),po(e,t),t.tag=1,Ue(r)?(e=!0,br(t)):e=!1,Tn(t,n),Ws(t,r,o),ti(t,r,o,n),li(null,t,r,!0,e,n);case 19:return ou(e,t,n);case 22:return Xs(e,t,n)}throw Error(h(156,t.tag))};function Tu(e,t){return aa(e,t)}function tf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new tf(e,t,n,r)}function Ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nf(e){if(typeof e=="function")return Ci(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ft)return 11;if(e===pt)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ci(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case _e:return sn(n.children,o,l,t);case Oe:i=8,o|=8;break;case Tt:return e=rt(12,n,t,o|2),e.elementType=Tt,e.lanes=l,e;case qe:return e=rt(13,n,t,o),e.elementType=qe,e.lanes=l,e;case ot:return e=rt(19,n,t,o),e.elementType=ot,e.lanes=l,e;case de:return Co(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wt:i=10;break e;case bt:i=9;break e;case ft:i=11;break e;case pt:i=14;break e;case Ie:i=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=rt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function sn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=rt(22,e,r,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function Ni(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function ji(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ti(e,t,n,r,o,l,i,a,s){return e=new rf(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=rt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wl(l),e}function of(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _u(e){if(!e)return It;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Ue(n))return rs(e,n,t)}return t}function Du(e,t,n,r,o,l,i,a,s){return e=Ti(n,r,!0,e,o,l,i,a,s),e.context=_u(null),n=e.current,r=Ae(),o=Vt(n),l=Ct(r,o),l.callback=t??null,Bt(n,l,o),e.current.lanes=o,Qn(e,o,r),Qe(e,r),e}function No(e,t,n,r){var o=t.current,l=Ae(),i=Vt(o);return n=_u(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,i),e!==null&&(dt(e,o,i,l),no(e,o,i)),i}function jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _i(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function lf(){return null}var zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Di(e){this._internalRoot=e}To.prototype.render=Di.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));No(e,t,null,null)},To.prototype.unmount=Di.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){No(null,e,null,null)}),t[xt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=ha();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&ya(e)}};function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function af(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var p=jo(i);l.call(p)}}var i=Du(t,r,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=i,e[xt]=i.current,nr(e.nodeType===8?e.parentNode:e),on(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var p=jo(s);a.call(p)}}var s=Ti(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=s,e[xt]=s.current,nr(e.nodeType===8?e.parentNode:e),on(function(){No(t,s,n,r)}),s}function Do(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=jo(i);a.call(s)}}No(t,i,e,o)}else i=af(n,t,e,o,r);return jo(i)}pa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(tl(t,n|1),Qe(t,pe()),(K&6)===0&&(Rn=pe()+500,Ft()))}break;case 13:on(function(){var r=Pt(e,1);if(r!==null){var o=Ae();dt(r,e,1,o)}}),_i(e,1)}},nl=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Ae();dt(t,e,134217728,n)}_i(e,134217728)}},ma=function(e){if(e.tag===13){var t=Vt(e),n=Pt(e,t);if(n!==null){var r=Ae();dt(n,e,t,r)}_i(e,t)}},ha=function(){return te},ga=function(e,t){var n=te;try{return te=e,t()}finally{te=n}},bo=function(e,t,n){switch(t){case"input":if(Bo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=qr(r);if(!o)throw Error(h(90));Bi(r),Bo(r,o)}}}break;case"textarea":$i(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}},ea=Si,ta=on;var sf={usingClientEntryPoint:!1,Events:[lr,xn,qr,Zi,Ji,Si]},wr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uf={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=la(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{jr=Lo.inject(uf),mt=Lo}catch{}}return He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sf,He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Li(t))throw Error(h(200));return of(e,t,null,n)},He.createRoot=function(e,t){if(!Li(e))throw Error(h(299));var n=!1,r="",o=zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ti(e,1,!1,null,null,n,!1,r,o),e[xt]=t.current,nr(e.nodeType===8?e.parentNode:e),new Di(t)},He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=la(t),e=e===null?null:e.stateNode,e},He.flushSync=function(e){return on(e)},He.hydrate=function(e,t,n){if(!_o(t))throw Error(h(200));return Do(null,e,t,!0,n)},He.hydrateRoot=function(e,t,n){if(!Li(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=zu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Du(t,null,e,1,n??null,o,!1,l,i),e[xt]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new To(t)},He.render=function(e,t,n){if(!_o(t))throw Error(h(200));return Do(null,e,t,!1,n)},He.unmountComponentAtNode=function(e){if(!_o(e))throw Error(h(40));return e._reactRootContainer?(on(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1},He.unstable_batchedUpdates=Si,He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_o(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Do(e,t,n,!1,r)},He.version="18.3.1-next-f1338f8080-20240426",He}var Wu;function yf(){if(Wu)return Mi.exports;Wu=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(S){console.error(S)}}return k(),Mi.exports=vf(),Mi.exports}var Qu;function wf(){if(Qu)return zo;Qu=1;var k=yf();return zo.createRoot=k.createRoot,zo.hydrateRoot=k.hydrateRoot,zo}var xf=wf();const kf=Ku(xf),Sf="modulepreload",Ef=function(k){return"/"+k},Hu={},Fo=function(S,h,x){let L=Promise.resolve();if(h&&h.length>0){let $=function(b){return Promise.all(b.map(J=>Promise.resolve(J).then(G=>({status:"fulfilled",value:G}),G=>({status:"rejected",reason:G}))))};document.getElementsByTagName("link");const I=document.querySelector("meta[property=csp-nonce]"),B=(I==null?void 0:I.nonce)||(I==null?void 0:I.getAttribute("nonce"));L=$(h.map(b=>{if(b=Ef(b),b in Hu)return;Hu[b]=!0;const J=b.endsWith(".css"),G=J?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${G}`))return;const A=document.createElement("link");if(A.rel=J?"stylesheet":Sf,J||(A.as="script"),A.crossOrigin="",A.href=b,B&&A.setAttribute("nonce",B),document.head.appendChild(A),J)return new Promise((ce,F)=>{A.addEventListener("load",ce),A.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${b}`)))})}))}function U($){const I=new Event("vite:preloadError",{cancelable:!0});if(I.payload=$,window.dispatchEvent(I),!I.defaultPrevented)throw $}return L.then($=>{for(const I of $||[])I.status==="rejected"&&U(I.reason);return S().catch(U)})};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=k=>k==null?void 0:k.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Cf(k,S,h=[]){if(S==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Pf(k),size:24,node:S,...h.length>0?{aliases:h}:{}}}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=k=>{let S="",h=!1;for(const x of k){if(x==="-"||x==="_"||x<=" "){h=S.length>0;continue}S.length===0?S+=x.toLowerCase():S+=h?x.toUpperCase():x,h=!1}return S};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=k=>{const S=Nf(k);return S.charAt(0).toUpperCase()+S.slice(1)};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=(...k)=>k.filter((S,h,x)=>!!S&&S.trim()!==""&&x.indexOf(S)===h).join(" ").trim();/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ii(k){return k!=null}function Tf(k,S={}){var A,ce;const h=S.attributeNames??{},x=F=>h[F]??F,L=k.size??k.width??un.width,U=k.size??k.height??un.height,$=((A=k.aliases)==null?void 0:A.filter(F=>typeof F=="string"&&F.trim()!=="").map(F=>`lucide-${F}`))??[],I=[...k.name?[`lucide-${k.name}`]:[],...$],B=((ce=S.className)==null?void 0:ce.split(" ").filter(Boolean))??[],b=S.includeDefaultClasses===!1?Fi(...B):Fi("lucide",...I,...B),J=S.absoluteStrokeWidth?Number(S.strokeWidth??un["stroke-width"])*Number(k.size??k.width??un.width)/Number(S.size??S.width??un.width):S.strokeWidth??un["stroke-width"];return["svg",{...Object.entries(un).reduce((F,[W,Q])=>(F[x(W)]=Q,F),{}),..."color"in S&&S.color&&{[x("stroke")]:S.color},..."size"in S&&Ii(S.size)&&{[x("width")]:S.size,[x("height")]:S.size},..."width"in S&&Ii(S.width)&&{[x("width")]:S.width},..."height"in S&&Ii(S.height)&&{[x("height")]:S.height},[x("stroke-width")]:J,...b&&{[x("class")]:b},[x("viewBox")]:`0 0 ${L} ${U}`,...S.hasA11yProp===!1?{[x("aria-hidden")]:"true"}:{},..."attributes"in S&&S.attributes},k.node.map(F=>{const[W,Q,xe]=F,ve=S.nonScalingStroke?{[x("vector-effect")]:"non-scaling-stroke",...Q}:Q;return xe?[W,ve,xe]:[W,ve]})]}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _f(k,S={}){return Tf(k,{...S,attributeNames:{...S.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=k=>{for(const S in k)if(S.startsWith("aria-")||S==="role"||S==="title")return!0;return!1},Lf=he.createContext({}),zf=()=>he.useContext(Lf),Rf=he.forwardRef(({color:k,size:S,width:h,height:x,strokeWidth:L,absoluteStrokeWidth:U,nonScalingStroke:$,className:I="",children:B,iconNode:b=[],icon:J={node:b,aliases:[],size:24},...G},A)=>{const{size:ce=24,strokeWidth:F=2,absoluteStrokeWidth:W=!1,nonScalingStroke:Q=!1,color:xe="currentColor",className:ve=""}=zf()??{},Ve=!!B||Df(G),[ke,$e,Ce=[]]=_f(J,{color:k??xe,width:h??S??ce,height:x??S??ce,strokeWidth:L??F,absoluteStrokeWidth:U??W,nonScalingStroke:$??Q,className:Fi(ve,I),hasA11yProp:Ve,attributes:G});return he.createElement(ke,{ref:A,...$e},[...Ce.map(([_e,Oe])=>he.createElement(_e,Oe)),...Array.isArray(B)?B:[B]])});/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Te(k,S=[],h=[]){const x=typeof k=="string"?Cf(k,S,h):k,L=he.forwardRef(({className:U,...$},I)=>he.createElement(Rf,{ref:I,icon:x,className:U,...$}));return x.name&&(L.displayName=jf(x.name)),L}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};Yu.node;const Vu=Te(Yu);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu={name:"building-complex",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],aliases:["building-2"]};Xu.node;const Ro=Te(Xu);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};Zu.node;const Mf=Te(Zu);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Ju.node;const Af=Te(Ju);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};ec.node;const Of=Te(ec);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc={name:"circle-user-round",size:24,node:[["path",{d:"M17.925 20.056a6 6 0 0 0-11.851.001",key:"z69sun"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["user-circle-2"]};tc.node;const If=Te(tc);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]};nc.node;const Ff=Te(nc);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};rc.node;const Mo=Te(rc);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]};oc.node;const Ao=Te(oc);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc={name:"hard-hat",size:24,node:[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]]};lc.node;const Oo=Te(lc);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};ic.node;const $u=Te(ic);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]};ac.node;const Uf=Te(ac);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc={name:"leaf",size:24,node:[["path",{d:"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",key:"1wjnjv"}],["path",{d:"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13",key:"c1ejpn"}]]};sc.node;const qu=Te(sc);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};uc.node;const Bf=Te(uc);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};cc.node;const Wf=Te(cc);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc={name:"receipt-text",size:24,node:[["path",{d:"M13 16H8",key:"wsln4y"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",key:"ycz6yz"}]]};dc.node;const Io=Te(dc);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};fc.node;const Qf=Te(fc),Gu={en:{appName:"NEXTGEN",appSubtitle:"ECOSITE MANAGER",workspace:"WORKSPACE",dashboardNav:"Dashboard",quotations:"Quotations",billingInvoices:"Billing & Invoices",laborManagement:"Labour Management",projectHandling:"Project Handling",logout:"Logout",buildToday:"Build Today",betterTomorrow:"For a Better Tomorrow",logoutAlert:"Logged out successfully",nameOfClient:"NAME OF CLIENT",nameOfProject:"NAME OF PROJECT",topPlan:"Plan",topTrack:"Track",topBuild:"Build",topGrow:"Grow",siteManager:"Site Manager",workspaceSub:"EcoSite Workspace",yourWorkspace:"YOUR WORKSPACE",welcomeBack:"Welcome back,",welcomeDesc:"Manage your construction projects, billing, quotations and labour operations — all in one place.",workOrganized:"Work organized",buildSustainably:"Build sustainably",getThingsDone:"GET THINGS DONE",exploreModules:"Explore Modules",modulesLabel:"MODULES",openModule:"Open module",billingTitle:"Billing & Invoices",billingDesc:"Create and manage bills, payments and expense history.",quotationsTitle:"Quotations",quotationsDesc:"Prepare quotations, manage offers and track status.",labourTitle:"Labour Management",labourDesc:"Manage workers, attendance and wage records.",projectsTitle:"Project Handling",projectsDesc:"Manage construction sites, work and project progress.",projectWorkspace:"Project Workspace",projectWorkspaceSub:"Keep your construction work organized",openProjects:"Open projects",workspaceBannerTitle:"Everything for your site, in one workspace",workspaceBannerDesc:"Open Project Handling to add and manage construction projects. Use the modules above to manage quotations, bills and labour records.",quickActions:"Quick Actions",quickActionsSub:"Shortcuts to your daily work",newBill:"New Bill",newQuotation:"New Quotation",addLabour:"Add Labour",openProjects:"Open Projects",totalInvoices:"Total Invoices",totalBilling:"Total Billing",gstInvoices:"GST Invoices",footerTitle:"NextGen EcoSite Manager",footerSlogan:"Build smarter. Build greener.",navHome:"Home",navProjects:"Projects",navLabour:"Labour",navBilling:"Billing",invoicesTitle:"Invoices & Billing",invoicesSub:"Manage project billing, GST and client invoices.",createNewInvoice:"Create New Invoice",invoiceNo:"Invoice No.",clientName:"Client Name",billingType:"Billing Type",date:"Date",finalAmount:"Final Amount",action:"Action",loadingInvoices:"Loading invoices...",noInvoicesYet:"No invoices yet",createFirstInvoice:"Create your first invoice to get started.",invoiceRecords:"Invoice Records",allGeneratedInvoices:"All generated project invoices",viewInvoice:"View Invoice",viewPdf:"View PDF",printSavePdf:"Print / Save PDF",cancel:"Cancel",saveGenerate:"Save & Generate Invoice",withGst:"With GST",withoutGst:"Without GST",gstRate:"GST Rate",laborPageTitle:"Labor Management & Payment Reports",laborPageSub:"Manage all registered site workers, track attendance, and process payouts",addNewLabor:"Add New Labor",laborDirectory:"Labor Directory",calendarAttendance:"Calendar Attendance",wageReports:"Wage Reports",dailyCharges:"Daily Charges",perDay:"/ day",viewDocs:"View Docs",selectAttendanceDate:"Select Attendance Date (dd/mm/yyyy)",workerRosterFor:"Worker Roster for",present:"Present",halfDay:"Half Day",absent:"Absent",notMarked:"Not Marked",past7DaysMatrix:"Past 7 Days Attendance Matrix",worker:"Worker",totalDaysCount:"Total Days Count",totalPaymentDue:"Total Payment Due",days:"Days",loadingProjects:"Loading your projects...",constructionWorkspace:"CONSTRUCTION WORKSPACE",projectManagementTitle:"Project Management",projectManagementSub:"Manage construction projects, site assets, engineering documents and material expenses.",createProject:"Create Project",noProjectsYet:"No projects created yet",noProjectsDesc:"Start organizing your construction work by creating your first project.",createFirstProject:"Create Your First Project",activeWorkspace:"ACTIVE WORKSPACE",addProject:"Add Project",delete:"Delete",inProgress:"In Progress",started:"Started",na:"N/A",locationNotSpecified:"Location not specified",clientNotSpecified:"Client not specified",projectBadge:"PROJECT",projectAssets:"PROJECT ASSETS",uploadedFiles:"Uploaded files",sitePhotosStat:"SITE PHOTOS",progressImages:"Progress images",documentsStat:"DOCUMENTS",projectRecords:"Project records",materialExpenses:"MATERIAL EXPENSES",billsRecorded:"bills recorded",projectResources:"PROJECT RESOURCES",projectFilesRecords:"Project Files & Records",projectFilesRecordsSub:"Everything related to this construction project, organized in one place.",uploadMaterialBill:"Upload Material Bill",uploadDocument:"Upload Document",uploadAsset:"Upload Asset",tabPhotosLabel:"Site Photos",tabPhotosDesc:"Construction progress",tabPlansLabel:"Floor Plans",tabPlansDesc:"Drawings and layouts",tabGalleryLabel:"Project Gallery",tabGalleryDesc:"Project visuals",tabDocsLabel:"Documents",tabDocsDesc:"Engineering files",tabBillsLabel:"Material Bills",tabBillsDesc:"Purchase records",filesCount:"FILES",documentsCount:"DOCUMENTS",noFilesUploadedYet:"No files uploaded yet",uploadFirstFilePrompt:"Upload your first {type} to keep your project records organized.",uploadFirstFile:"Upload First File",preview:"Preview",floorPlanBadge:"FLOOR PLAN",galleryBadge:"GALLERY",sitePhotoBadge:"SITE PHOTO",untitledAsset:"Untitled Asset",uploadedOn:"Uploaded",engineeringDocuments:"Engineering Documents",engineeringDocumentsSub:"Approved municipal and engineering project files.",noDocumentsAvailable:"No documents available",noDocumentsDesc:"Store drawings, approvals, PDFs and other engineering documents here.",fileUnavailable:"File",fileSizeUnavailable:"File size unavailable",view:"View",deleteDocument:"Delete document",expenseTracking:"EXPENSE TRACKING",materialPurchaseRecords:"Material Purchase Records",materialPurchaseRecordsSub:"Track construction material purchases and vendor bills.",totalRecordedExpense:"TOTAL RECORDED EXPENSE",invoicesCount:"invoices",invoiceNumber:"Invoice Number",vendor:"Vendor",category:"Category",amountCol:"Amount",actionCol:"Action",noMaterialBillsRecorded:"No material bills recorded",uploadedBillsAppearHere:"Uploaded purchase bills will appear here.",generalVendor:"General Vendor",generalCategory:"General",deleteBill:"Delete bill",createNewProjectTitle:"Create New Project",createNewProjectSub:"Add a new construction workspace.",projectNameLabel:"PROJECT NAME *",projectNamePlaceholder:"e.g. Skyline Heights Tower B",siteLocationLabel:"SITE LOCATION",siteLocationSample:"e.g. Baramati MIDC",clientNameLabel:"CLIENT NAME",clientNameSample:"e.g. Rameshwar Builders",creating:"Creating...",uploadSiteDocument:"Upload Site Document",uploadRecordTo:"Add a new record to {project}.",vendorSupplierLabel:"VENDOR / SUPPLIER NAME *",vendorSample:"e.g. UltraTech Cement Ltd",materialCategoryLabel:"MATERIAL CATEGORY",catRawMaterials:"Raw Materials (Cement/Steel)",catElectricalPlumbing:"Electrical & Plumbing",catFinishingTiles:"Finishing & Tiles",catLaborEquipment:"Labor & Equipment",billAmountLabel:"BILL AMOUNT (₹) *",assetTitleLabel:"ASSET TITLE / DESCRIPTION *",assetTitleSample:"e.g. Second Floor Slab Casting",selectFileFromDevice:"SELECT FILE FROM DEVICE",fileSelectedSuccess:"File selected successfully",chooseFileToUpload:"Choose a file to upload",docFileTypes:"PDF, DOC and DOCX files",imageFileTypes:"Select an image from your device",uploadPreviewAlt:"Upload preview",previewReady:"Preview ready",fileReadyToSave:"File selected and ready to save.",uploadAndSave:"Upload & Save",projectPreviewAlt:"Project preview",alertEnterProjectName:"Please enter a project name.",alertFailedCreateProject:"Failed to create project",alertBackendConnect:"Could not connect to the backend server.",confirmDeleteProject:"Are you sure you want to delete this entire project?",alertUnableDeleteProject:"Unable to delete project.",alertUnableSaveFiles:"Unable to save project files.",alertUnableDeleteItem:"Unable to delete item.",defaultLocationBaramati:"Baramati MIDC",defaultClientName:"Client Name",pdfType:"PDF",imageType:"Image",quotationsRecords:"Quotation Records",allQuotationsSaved:"All quotations saved in your database",searchPlaceholder:"Search quotation, client or project...",quotationId:"Quotation ID",project:"Project",type:"Type",noQuotationsFound:"No Quotations Found",tryAnotherKeyword:"Try searching with another keyword.",createFirstQuotationPrompt:"Create your first project quotation to get started.",prepareProfessionalEstimate:"Prepare a professional project estimate",quotationBillingType:"Quotation Billing Type",gstRatePercent:"GST Rate (%)",clientProjectDetails:"Client & Project Details",enterClientName:"Enter client name",enterProjectName:"Enter project name",siteLocationPlaceholder:"Site location",addWorkDetailsSub:"Add construction work details, quantity and rates.",workDescription:"Work Description",ratePlaceholder:"Rate (₹)",addLineItem:"Add Line Item",cancel:"Cancel",saving:"Saving...",saveGenerateQuotation:"Save & Generate Quotation",quotationsPageTitle:"Quotations & Estimates",quotationsPageSub:"Create, manage and track your project quotations",createNewQuotation:"Create New Quotation",totalQuotations:"Total Quotations",gstQuotations:"GST Quotations",totalQuotationValue:"Total Quotation Value",quotationsRecords:"Quotation Records",allGeneratedQuotations:"All generated project quotations",quotationNo:"Quotation No.",projectName:"Project Name",clientName:"Client Name",date:"Date",amount:"Amount",action:"Action",viewQuotation:"View Quotation",loadingQuotations:"Loading quotations...",noQuotationsYet:"No quotations yet",createFirstQuotation:"Create your first quotation to get started.",backToQuotations:"Back to quotations",printSavePdf:"Print / Save PDF",projectBudgetSummary:"PROJECT BUDGET SUMMARY",quotationLabel:"QUOTATION",quotationNumber:"QUOTATION NUMBER",addressSiteLocation:"ADDRESS / SITE LOCATION",layoutDetails:"LAYOUT DETAILS",builderContractorName:"BUILDER / CONTRACTOR NAME",descriptionOfWork:"DESCRIPTION OF WORK",srNo:"Sr. No.",unit:"Unit",qty:"QTY",rate:"RATE",totalAmount:"TOTAL AMOUNT",finalTotalAmount:"FINAL TOTAL AMOUNT",termsAndConditions:"TERMS & CONDITIONS",authorizedSignatory:"Authorized Signatory",laborPageTitle:"Labor Management & Payment Reports",laborPageSub:"Manage workers, attendance and payment records",addNewLabor:"Add New Labor",totalWorkers:"Total Workers",registeredLaborMembers:"Registered labor members",presentToday:"Present Today",halfDayAttendance:"half-day attendance",dailyWageTotal:"Daily Wage Total",combinedDailyWages:"Combined daily wages",totalEarnings:"Total Earnings",savedAttendanceRecords:"Based on saved attendance records",laborDirectory:"Labor Directory",attendance:"Attendance",wageReports:"Wage Reports",searchWorkers:"Search workers...",loadingLaborRecords:"Loading labor records...",noMatchingWorkers:"No matching workers found",noWorkerProfiles:"No worker profiles found",searchWorkerHint:"Try searching with another name, role or mobile number.",addFirstWorkerHint:"Add your first worker to start managing your labor records.",notProvided:"Not provided",locationNotProvided:"Location not provided",worker:"Worker",dailyCharges:"Daily Charges",perDay:"/ day",viewProfile:"View Profile",attendanceManagement:"Attendance Management",markAttendanceHint:"Mark daily worker attendance and review the last 7 days",workers:"Workers",selectAttendanceDate:"Select Attendance Date",present:"Present",halfDay:"Half Day",absent:"Absent",workerAttendanceRoster:"Worker Attendance Roster",noWorkersAvailable:"No workers available",addWorkersBeforeAttendance:"Add workers before marking attendance.",dailyWage:"Daily Wage",past7DaysAttendance:"Past 7 Days Attendance Matrix",selectStatusToUpdate:"Select a status to update attendance",notMarked:"Not Marked",noAttendanceRecords:"No attendance records available.",laborPaymentReports:"Labor Payment Reports",paymentCalculationHint:"Payment calculated from Present (1x) and Half Day (0.5x) attendance records",wageSummary:"Wage Summary",registeredWorkers:"Registered Workers",totalPaymentDue:"Total Payment Due",laborName:"Labor Name",totalDaysCount:"Total Days Count",noLaborRegistered:"No labor members registered.",days:"Days",workerVerificationProfile:"Worker Verification Profile",personalInfoDocuments:"Personal information and uploaded documents",profile:"Profile",profilePhoto:"Profile Photo",panCard:"PAN Card",aadhaarCard:"Aadhaar Card",closeProfile:"Close Profile",addNewLaborWorker:"Add New Labor Worker",enterWorkerDetails:"Enter worker details and upload verification documents",fullName:"Full Name",mobileNumber:"Mobile Number",locationNative:"Location / Native",roleTrade:"Role / Trade",mason:"Mason",electrician:"Electrician",plumber:"Plumber",helper:"Helper",barBender:"Bar Bender",dailyWageRequired:"Daily Wage (₹)",panCardPhoto:"PAN Card Photo",aadhaarCardPhoto:"Aadhaar Card Photo",uploaded:"Uploaded",cancel:"Cancel",saveWorker:"Save Worker",viewDocument:"View Document",notUploaded:"Not uploaded",exampleName:"e.g. Ramesh Kumar",unableToSaveWorker:"Unable to save worker: ",unableToSaveAttendance:"Unable to save attendance: "},mr:{appName:"नेक्स्टजेन",appSubtitle:"इकोसाईट मॅनेजर",workspace:"वर्कस्पेस",dashboardNav:"डॅशबोर्ड",quotations:"कोटेशन्स",billingInvoices:"बिलिंग आणि इनव्हॉइस",laborManagement:"कामगार व्यवस्थापन",projectHandling:"प्रकल्प व्यवस्थापन",logout:"बाहेर पडा",buildToday:"आज बांधकाम करा",betterTomorrow:"उद्याच्या चांगल्या भविष्यासाठी",logoutAlert:"यशस्वीरित्या बाहेर पडला",topPlan:"नियोजन",topTrack:"ट्रॅक",topBuild:"बांधकाम",topGrow:"वाढ",siteManager:"साईट मॅनेजर",workspaceSub:"इकोसाईट वर्कस्पेस",yourWorkspace:"तुमचे कार्यक्षेत्र",welcomeBack:"पुन्हा स्वागत आहे,",welcomeDesc:"तुमचे बांधकाम प्रकल्प, बिलिंग, कोटेशन आणि कामगार कामकाज एकाच ठिकाणी व्यवस्थापित करा.",workOrganized:"संघटित काम",buildSustainably:"शाश्वत बांधकाम",getThingsDone:"कामे पूर्ण करा",exploreModules:"मॉड्यूल्स तपासा",modulesLabel:"मॉड्यूल्स",openModule:"मॉड्यूल उघडा",billingTitle:"बिलिंग आणि इनव्हॉइस",billingDesc:"बिले, पेमेंट आणि खर्चाचा इतिहास तयार करा आणि व्यवस्थापित करा.",quotationsTitle:"कोटेशन्स",quotationsDesc:"कोटेशन तयार करा, ऑफर्स व्यवस्थापित करा आणि स्थिती ट्रॅक करा.",labourTitle:"कामगार व्यवस्थापन",labourDesc:"कामगार, हजेरी आणि मजुरीच्या नोंदी व्यवस्थापित करा.",projectsTitle:"प्रकल्प हाताळणी",projectsDesc:"बांधकाम साईट्स, काम आणि प्रकल्पाची प्रगती व्यवस्थापित करा.",projectWorkspace:"प्रकल्प कार्यक्षेत्र",projectWorkspaceSub:"तुमचे बांधकाम कार्य व्यवस्थित ठेवा",openProjects:"प्रकल्प उघडा",workspaceBannerTitle:"तुमच्या साईटसाठी सर्व काही, एकाच वर्कस्पेसमध्ये",workspaceBannerDesc:"बांधकाम प्रकल्प जोडण्यासाठी आणि व्यवस्थापित करण्यासाठी प्रकल्प हाताळणी उघडा. कोटेशन, बिले आणि कामगार नोंदी व्यवस्थापित करण्यासाठीवरील मॉड्यूल्स वापरा.",quickActions:"त्वरित कृती",quickActionsSub:"तुमच्या दैनंदिन कामाचे शॉर्टकट",newBill:"नवीन बिल",newQuotation:"नवीन कोटेशन",addLabour:"कामगार जोडा",openProjects:"प्रकल्प उघडा",footerTitle:"नेक्स्टजेन इकोसाईट मॅनेजर",footerSlogan:"स्मार्ट बांधकाम. पर्यावरणपूरक बांधकाम.",navHome:"होम",navProjects:"प्रकल्प",navLabour:"कामगार",navBilling:"बिलिंग",invoicesTitle:"बिले आणि इनव्हॉइस",invoicesSub:"प्रकल्प बिलिंग, GST आणि ग्राहकांची बिले व्यवस्थापित करा.",createNewInvoice:"नवीन बिल तयार करा",invoiceNo:"इनव्हॉइस क्र.",clientName:"ग्राहकाचे नाव",billingType:"बिलिंगचा प्रकार",date:"तारीख",finalAmount:"अंतिम रक्कम",action:"कृती",loadingInvoices:"बिले लोड होत आहेत...",noInvoicesYet:"कोणतीही बिले नाहीत",createFirstInvoice:"सुरुवात करण्यासाठी तुमचे पहिले इनव्हॉइस तयार करा.",invoiceRecords:"इनव्हॉइस नोंदी",allGeneratedInvoices:"सर्व तयार केलेले प्रकल्प इनव्हॉइस",viewInvoice:"इनव्हॉइस पहा",viewPdf:"PDF पहा",printSavePdf:"प्रिंट / PDF सेव्ह करा",cancel:"रद्द करा",saveGenerate:"सेव्ह आणि बिल तयार करा",withGst:"GST सह",withoutGst:"GST शिवाय",gstRate:"GST दर",nameOfClient:"ग्राहकाचे नाव",nameOfProject:"प्रकल्पाचे नाव",laborPageTitle:"कामगार व्यवस्थापन आणि पगार अहवाल",laborPageSub:"नोंदणीकृत कामगार, दैनिक हजेरी आणि पगार हिशोब व्यवस्थापित करा",addNewLabor:"नवीन कामगार جوडा",laborDirectory:"कामगार यादी",calendarAttendance:"कॅलेंडर हजेरी",wageReports:"पगार अहवाल",dailyCharges:"दैनिक मजुरी",perDay:"/ दिवस",viewDocs:"कागदपत्रे पहा",selectAttendanceDate:"हजेरी तारीख निवडा (dd/mm/yyyy)",workerRosterFor:"कामगार हजेरी यादी - तारीख:",present:"हजर",halfDay:"अर्धा दिवस",absent:"गैरहजर",notMarked:"नोंद नाही",past7DaysMatrix:"मागील ७ दिवसांचा हजेरी तक्ता",worker:"कामगार",totalDaysCount:"एकूण कामाचे दिवस",totalPaymentDue:"एकूण देय रक्कम",days:"दिवस",itemsWorkDetails:"वस्तू / कामाचे तपशील",itemNum:"आयटम",description:"वर्णन",workDescriptionPlaceholder:"कामाचे वर्णन प्रविष्ट करा",unit:"युनिट",quantity:"प्रमाण",rateLabel:"दर (₹)",discountPercent:"सूट (%)",lineAmount:"ओळ रक्कम",addAnotherItem:"दुसरा आयटम जोडा",invoiceSummary:"इनव्हॉइस सारांश",lumsumAmount:"एकत्रित रक्कम (Lumpsum)",totalInvoices:"एकूण बिले",totalBilling:"एकूण बिलिंग",gstInvoices:"GST बिले",loadingProjects:"तुमचे प्रकल्प लोड होत आहेत...",constructionWorkspace:"बांधकाम कार्यक्षेत्र",projectManagementTitle:"प्रकल्प व्यवस्थापन",projectManagementSub:"बांधकाम प्रकल्प, साईट साहित्य, अभियांत्रिकी कागदपत्रे आणि साहित्य खर्च व्यवस्थापित करा.",createProject:"प्रकल्प तयार करा",noProjectsYet:"अद्याप कोणतेही प्रकल्प तयार केलेले नाहीत",noProjectsDesc:"तुमचा पहिला प्रकल्प तयार करून बांधकाम कामाचे नियोजन सुरू करा.",createFirstProject:"तुमचा पहिला प्रकल्प तयार करा",activeWorkspace:"सक्रिय कार्यक्षेत्र",addProject:"प्रकल्प जोडा",delete:"हटवा",inProgress:"प्रगतीपथावर",started:"सुरुवात",na:"उपलब्ध नाही",locationNotSpecified:"ठिकाण नमूद केलेले नाही",clientNotSpecified:"ग्राहक नमूद केलेला नाही",projectBadge:"प्रकल्प",projectAssets:"प्रकल्प साहित्य",uploadedFiles:"अपलोड केलेल्या फाइल्स",sitePhotosStat:"साईट फोटो",progressImages:"प्रगतीचे फोटो",documentsStat:"कागदपत्रे",projectRecords:"प्रकल्प नोंदी",materialExpenses:"साहित्य खर्च",billsRecorded:"बिले नोंदवली",projectResources:"प्रकल्प संसाधने",projectFilesRecords:"प्रकल्प फाइल्स आणि नोंदी",projectFilesRecordsSub:"या बांधकाम प्रकल्पाशी संबंधित सर्व काही, एकाच ठिकाणी व्यवस्थित.",uploadMaterialBill:"साहित्य बिल अपलोड करा",uploadDocument:"कागदपत्र अपलोड करा",uploadAsset:"साहित्य अपलोड करा",tabPhotosLabel:"साईट फोटो",tabPhotosDesc:"बांधकामाची प्रगती",tabPlansLabel:"फ्लोअर प्लॅन्स",tabPlansDesc:"आराखडे आणि लेआउट",tabGalleryLabel:"प्रकल्प गॅलरी",tabGalleryDesc:"प्रकल्पाचे फोटो",tabDocsLabel:"कागदपत्रे",tabDocsDesc:"अभियांत्रिकी फाइल्स",tabBillsLabel:"साहित्य बिले",tabBillsDesc:"खरेदी नोंदी",filesCount:"फाइल्स",documentsCount:"कागदपत्रे",noFilesUploadedYet:"अद्याप कोणतीही फाइल अपलोड केलेली नाही",uploadFirstFilePrompt:"प्रकल्पाच्या नोंदी व्यवस्थित ठेवण्यासाठी पहिले {type} अपलोड करा.",uploadFirstFile:"पहिली फाइल अपलोड करा",preview:"पूर्वावलोकन",floorPlanBadge:"फ्लोअर प्लॅन",galleryBadge:"गॅलरी",sitePhotoBadge:"साईट फोटो",untitledAsset:"विनाशीर्षक साहित्य",uploadedOn:"अपलोड तारीख",engineeringDocuments:"अभियांत्रिकी कागदपत्रे",engineeringDocumentsSub:"मंजूर महापालिका आणि अभियांत्रिकी प्रकल्प फाइल्स.",noDocumentsAvailable:"कोणतीही कागदपत्रे उपलब्ध नाहीत",noDocumentsDesc:"आराखडे, मंजुरी, PDF आणि इतर अभियांत्रिकी कागदपत्रे येथे साठवा.",fileUnavailable:"फाइल",fileSizeUnavailable:"फाइलचा आकार उपलब्ध नाही",view:"पहा",deleteDocument:"कागदपत्र हटवा",expenseTracking:"खर्च ट्रॅकिंग",materialPurchaseRecords:"साहित्य खरेदी नोंदी",materialPurchaseRecordsSub:"बांधकाम साहित्य खरेदी आणि पुरवठादारांची बिले ट्रॅक करा.",totalRecordedExpense:"एकूण नोंदवलेला खर्च",invoicesCount:"बिले",invoiceNumber:"बिल क्रमांक",vendor:"पुरवठादार",category:"श्रेणी",amountCol:"रक्कम",actionCol:"कृती",noMaterialBillsRecorded:"कोणतीही साहित्य बिले नोंदवलेली नाहीत",uploadedBillsAppearHere:"अपलोड केलेली खरेदी बिले येथे दिसतील.",generalVendor:"सर्वसाधारण पुरवठादार",generalCategory:"सर्वसाधारण",deleteBill:"बिल हटवा",createNewProjectTitle:"नवीन प्रकल्प तयार करा",createNewProjectSub:"नवीन बांधकाम कार्यक्षेत्र जोडा.",projectNameLabel:"प्रकल्पाचे नाव *",projectNamePlaceholder:"उदा. स्कायलाईन हाईट्स टॉवर बी",siteLocationLabel:"साईटचे ठिकाण",siteLocationSample:"उदा. बारामती MIDC",clientNameLabel:"ग्राहकाचे नाव",clientNameSample:"उदा. रामेश्वर बिल्डर्स",creating:"तयार होत आहे...",uploadSiteDocument:"साईट कागदपत्र अपलोड करा",uploadRecordTo:"{project} मध्ये नवीन नोंद जोडा.",vendorSupplierLabel:"पुरवठादाराचे नाव *",vendorSample:"उदा. अल्ट्राटेक सिमेंट लि.",materialCategoryLabel:"साहित्याची श्रेणी",catRawMaterials:"कच्चा माल (सिमेंट / स्टील)",catElectricalPlumbing:"इलेक्ट्रिकल आणि प्लंबिंग",catFinishingTiles:"फिनिशिंग आणि टाइल्स",catLaborEquipment:"मजुरी आणि उपकरणे",billAmountLabel:"बिलाची रक्कम (₹) *",assetTitleLabel:"साहित्याचे शीर्षक / वर्णन *",assetTitleSample:"उदा. दुसऱ्या मजल्याचा स्लॅब कास्टिंग",selectFileFromDevice:"डिव्हाइसमधून फाइल निवडा",fileSelectedSuccess:"फाइल यशस्वीरित्या निवडली",chooseFileToUpload:"अपलोड करण्यासाठी फाइल निवडा",docFileTypes:"PDF, DOC आणि DOCX फाइल्स",imageFileTypes:"डिव्हाइसमधून फोटो निवडा",uploadPreviewAlt:"अपलोड पूर्वावलोकन",previewReady:"पूर्वावलोकन तयार आहे",fileReadyToSave:"फाइल निवडली आहे आणि सेव्ह करण्यासाठी तयार आहे.",uploadAndSave:"अपलोड आणि सेव्ह करा",projectPreviewAlt:"प्रकल्प पूर्वावलोकन",alertEnterProjectName:"कृपया प्रकल्पाचे नाव प्रविष्ट करा.",alertFailedCreateProject:"प्रकल्प तयार करता आला नाही",alertBackendConnect:"बॅकएंड सर्व्हरशी संपर्क होऊ शकला नाही.",confirmDeleteProject:"तुम्हाला खात्री आहे की तुम्हाला हा संपूर्ण प्रकल्प हटवायचा आहे?",alertUnableDeleteProject:"प्रकल्प हटवता आला नाही.",alertUnableSaveFiles:"प्रकल्पाच्या फाइल्स सेव्ह करता आल्या नाहीत.",alertUnableDeleteItem:"आयटम हटवता आला नाही.",defaultLocationBaramati:"बारामती MIDC",defaultClientName:"ग्राहकाचे नाव",pdfType:"PDF",imageType:"फोटो",quotationsRecords:"कोटेशन नोंदी",allQuotationsSaved:"तुमच्या डेटाबेसमध्ये सेव्ह केलेली सर्व कोटेशन्स",searchPlaceholder:"कोटेशन, ग्राहक किंवा प्रकल्प शोधा...",quotationId:"कोटेशन आयडी",project:"प्रकल्प",type:"प्रकार",noQuotationsFound:"कोणतीही कोटेशन्स सापडली नाहीत",tryAnotherKeyword:"दुसऱ्या कीवर्डसह शोधण्याचा प्रयत्न करा.",createFirstQuotationPrompt:"सुरुवात करण्यासाठी तुमचे पहिले प्रकल्प कोटेशन तयार करा.",prepareProfessionalEstimate:"व्यावसायिक प्रकल्प अंदाज तयार करा",quotationBillingType:"कोटेशन बिलिंग प्रकार",gstRatePercent:"GST दर (%)",clientProjectDetails:"ग्राहक आणि प्रकल्प तपशील",enterClientName:"ग्राहकाचे नाव प्रविष्ट करा",enterProjectName:"प्रकल्पाचे नाव प्रविष्ट करा",siteLocationPlaceholder:"साईटचे ठिकाण",addWorkDetailsSub:"बांधकामाच्या कामाचे तपशील, प्रमाण आणि दर जोडा.",workDescription:"कामाचे वर्णन",ratePlaceholder:"दर (₹)",addLineItem:"ओळ आयटम जोडा",cancel:"रद्द करा",saving:"सेव्ह होत आहे...",saveGenerateQuotation:"सेव्ह आणि कोटेशन तयार करा",quotationsPageTitle:"कोटेशन्स आणि अंदाजपत्रक",quotationsPageSub:"प्रकल्प कोटेशन तयार करा, व्यवस्थापित करा आणि ट्रॅक करा",createNewQuotation:"नवीन कोटेशन तयार करा",totalQuotations:"एकूण कोटेशन्स",gstQuotations:"GST कोटेशन्स",totalQuotationValue:"एकूण कोटेशन मूल्य",quotationsRecords:"कोटेशन नोंदी",allGeneratedQuotations:"सर्व तयार केलेले प्रकल्प कोटेशन",quotationNo:"कोटेशन क्र.",projectName:"प्रकल्पाचे नाव",clientName:"ग्राहकाचे नाव",date:"तारीख",amount:"रक्कम",action:"कृती",viewQuotation:"कोटेशन पहा",loadingQuotations:"कोटेशन्स लोड होत आहेत...",noQuotationsYet:"कोणतेही कोटेशन नाही",createFirstQuotation:"सुरुवात करण्यासाठी तुमचे पहिले कोटेशन तयार करा.",backToQuotations:"कोटेशनवर परत जा",printSavePdf:"प्रिंट / PDF सेव्ह करा",projectBudgetSummary:"प्रकल्प बजेट सारांश",quotationLabel:"कोटेशन",quotationNumber:"कोटेशन क्रमांक",addressSiteLocation:"पत्ता / साईटचे ठिकाण",layoutDetails:"लेआउट तपशील",builderContractorName:"빌डर / ठेकेदार नाव",descriptionOfWork:"कामाचे वर्णन",srNo:"अनु. क्र.",unit:"युनिट",qty:"प्रमाण",rate:"दर",totalAmount:"एकूण रक्कम",finalTotalAmount:"अंतिम एकूण रक्कम",termsAndConditions:"अटी आणि शर्ती",authorizedSignatory:"अधिकृत स्वाक्षरीकर्ता",laborPageTitle:"कामगार व्यवस्थापन आणि पेमेंट अहवाल",laborPageSub:"कामगार, हजेरी आणि पेमेंट नोंदी व्यवस्थापित करा",addNewLabor:"नवीन कामगार जोडा",totalWorkers:"एकूण कामगार",registeredLaborMembers:"नोंदणीकृत कामगार",presentToday:"आज उपस्थित",halfDayAttendance:"अर्ध्या दिवसाची हजेरी",dailyWageTotal:"एकूण दैनिक मजुरी",combinedDailyWages:"एकत्रित दैनिक मजुरी",totalEarnings:"एकूण कमाई",savedAttendanceRecords:"सेव्ह केलेल्या हजेरीच्या नोंदींनुसार",laborDirectory:"कामगार यादी",attendance:"हजेरी",wageReports:"मजुरी अहवाल",searchWorkers:"कामगार शोधा...",loadingLaborRecords:"कामगारांच्या नोंदी लोड होत आहेत...",noMatchingWorkers:"जुळणारे कामगार सापडले नाहीत",noWorkerProfiles:"कामगारांची प्रोफाइल उपलब्ध नाहीत",searchWorkerHint:"दुसरे नाव, कामाचा प्रकार किंवा मोबाईल क्रमांक वापरून शोधा.",addFirstWorkerHint:"कामगारांच्या नोंदी व्यवस्थापित करण्यासाठी पहिला कामगार जोडा.",notProvided:"दिलेली नाही",locationNotProvided:"ठिकाण दिलेले नाही",worker:"कामगार",dailyCharges:"दैनिक मजुरी",perDay:"/ दिवस",viewProfile:"प्रोफाइल पहा",attendanceManagement:"हजेरी व्यवस्थापन",markAttendanceHint:"दररोज कामगारांची हजेरी नोंदवा आणि मागील ७ दिवसांचा आढावा घ्या",workers:"कामगार",selectAttendanceDate:"हजेरीची तारीख निवडा",present:"उपस्थित",halfDay:"अर्धा दिवस",absent:"अनुपस्थित",workerAttendanceRoster:"कामगार हजेरी यादी",noWorkersAvailable:"कामगार उपलब्ध नाहीत",addWorkersBeforeAttendance:"हजेरी नोंदवण्यापूर्वी कामगार जोडा.",dailyWage:"दैनिक मजुरी",past7DaysAttendance:"मागील ७ दिवसांचा हजेरी तक्ता",selectStatusToUpdate:"हजेरी अपडेट करण्यासाठी स्थिती निवडा",notMarked:"नोंद नाही",noAttendanceRecords:"हजेरीच्या नोंदी उपलब्ध नाहीत.",laborPaymentReports:"कामगार पेमेंट अहवाल",paymentCalculationHint:"उपस्थित (१ पट) आणि अर्धा दिवस (०.५ पट) हजेरीनुसार पेमेंट मोजले जाते",wageSummary:"मजुरीचा सारांश",registeredWorkers:"नोंदणीकृत कामगार",totalPaymentDue:"एकूण देय रक्कम",laborName:"कामगाराचे नाव",totalDaysCount:"एकूण कामाचे दिवस",noLaborRegistered:"कोणतेही कामगार नोंदणीकृत नाहीत.",days:"दिवस",workerVerificationProfile:"कामगार पडताळणी प्रोफाइल",personalInfoDocuments:"वैयक्तिक माहिती आणि अपलोड केलेली कागदपत्रे",profile:"प्रोफाइल",profilePhoto:"प्रोफाइल फोटो",panCard:"पॅन कार्ड",aadhaarCard:"आधार कार्ड",closeProfile:"प्रोफाइल बंद करा",addNewLaborWorker:"नवीन कामगार जोडा",enterWorkerDetails:"कामगाराची माहिती भरा आणि पडताळणीची कागदपत्रे अपलोड करा",fullName:"पूर्ण नाव",mobileNumber:"मोबाईल क्रमांक",locationNative:"ठिकाण / मूळ गाव",roleTrade:"कामाचा प्रकार",mason:"गवंडी",electrician:"इलेक्ट्रिशियन",plumber:"प्लंबर",helper:"मदतनीस",barBender:"लोखंडी सळई बांधणारा",dailyWageRequired:"दैनिक मजुरी (₹)",panCardPhoto:"पॅन कार्ड फोटो",aadhaarCardPhoto:"आधार कार्ड फोटो",uploaded:"अपलोड झाले",cancel:"रद्द करा",saveWorker:"कामगार सेव्ह करा",viewDocument:"कागदपत्र पहा",notUploaded:"अपलोड केलेले नाही",exampleName:"उदा. रमेश कुमार",unableToSaveWorker:"कामगार सेव्ह करता आला नाही: ",unableToSaveAttendance:"हजेरी सेव्ह करता आली नाही: "}},pc=he.createContext();function Hf({children:k}){const[S,h]=he.useState(()=>localStorage.getItem("appLang")||"en");he.useEffect(()=>{localStorage.setItem("appLang",S)},[S]);const x=()=>{h(U=>U==="en"?"mr":"en")},L=U=>{var $,I;return(($=Gu[S])==null?void 0:$[U])||((I=Gu.en)==null?void 0:I[U])||U};return m.jsx(pc.Provider,{value:{lang:S,setLang:h,toggleLanguage:x,t:L},children:k})}const Vf=()=>he.useContext(pc),$f=he.lazy(()=>Fo(()=>import("./QuotationPage-Dy-wpqK2.js"),__vite__mapDeps([0,1,2,3,4,5]))),qf=he.lazy(()=>Fo(()=>import("./BillingPage-jbzKeJNY.js"),__vite__mapDeps([6,2,1,3,7]))),Gf=he.lazy(()=>Fo(()=>import("./LaborPage-P8MWWsM2.js"),__vite__mapDeps([8,1,4,5,9]))),bf=he.lazy(()=>Fo(()=>import("./ProjectHandlingPage-DWbJETBm.js"),__vite__mapDeps([10,1,3,9,5,7]))),bu=[{id:"billing",titleKey:"billingTitle",descKey:"billingDesc",icon:Io,color:"billing",image:"/billing.png"},{id:"quotations",titleKey:"quotationsTitle",descKey:"quotationsDesc",icon:Mo,color:"quotation",image:"/quotation.png"},{id:"labors",titleKey:"labourTitle",descKey:"labourDesc",icon:Oo,color:"labour",image:"/labour.png"},{id:"projects",titleKey:"projectsTitle",descKey:"projectsDesc",icon:Ao,color:"projects",image:"/reports.png"}],Kf=`

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  --eco-primary: #a87950;
  --eco-dark: #252d27;
  --eco-bg: #f5f3ef;
  --eco-white: #ffffff;
  --eco-text: #292e28;
  --eco-muted: #85847c;
  --eco-border: #e9e4dc;
}

* {
  box-sizing: border-box;
}

.eco-dashboard {
  min-height: 100vh;
  display: flex;
  background: var(--eco-bg);
  color: var(--eco-text);
font-family: Arial, sans-serif;
}

.eco-dashboard button {
  font-family: inherit;
  cursor: pointer;
}

/* SIDEBAR */

.eco-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 27px 18px 20px;
  background: #222b25;
  color: white;
  transition: transform .3s ease;
}

.eco-sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 6px 25px;
  border-bottom: 1px solid rgba(255,255,255,.12);
}

.eco-brand-symbol {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #354138;
  border: 1px solid rgba(196,154,115,.4);
  border-radius: 12px;
}

.eco-brand-logo {
  width: 100%;
  height: 100%;
  padding: 5px;
  object-fit: contain;
}

.eco-brand-text h2 {
  margin: 0;
font-family: Arial, sans-serif;  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
}

.eco-brand-text span {
  display: block;
  margin-top: 3px;
  color: #c49a73;
  font-size: 8px;
  letter-spacing: 1.7px;
}

.eco-sidebar-close {
  display: none;
  margin-left: auto;
  border: 0;
  background: transparent;
  color: white;
}

.eco-sidebar-caption {
  padding: 30px 11px 13px;
  color: #a9aea5;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
}

.eco-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.eco-nav-link {
  position: relative;
  width: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 0 13px;
  color: #c3c9c0;
  background: transparent;
  border: 0;
  border-radius: 10px;
  text-align: left;
  transition: .2s ease;
}

.eco-nav-link span {
  font-size: 12px;
  font-weight: 600;
}

.eco-nav-link:hover {
  color: white;
  background: rgba(255,255,255,.07);
}

.eco-nav-link.active {
  color: white;
  background: linear-gradient(120deg,#a87950,#805d40);
  box-shadow: 0 5px 15px rgba(0,0,0,.15);
}

.eco-nav-active-dot {
  width: 6px;
  height: 6px;
  margin-left: auto;
  background: white;
  border-radius: 50%;
}

.eco-sidebar-bottom {
  margin-top: auto;
}

.eco-sidebar-art {
  margin-bottom: 20px;
  padding: 20px 10px;
  color: #c49a73;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,.1);
}

.eco-building-art {
  display: grid;
  place-items: center;
}

.eco-sidebar-art p {
  margin: 5px 0;
  color: #e0d3c5;
  font-size: 10px;
  letter-spacing: 1px;
}

.eco-main {
  min-width: 0;
  width: calc(100% - 250px);
  margin-left: 250px;
}

/* TOPBAR */

.eco-topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0 34px;
  background: rgba(255,255,255,.94);
  border-bottom: 1px solid var(--eco-border);
  backdrop-filter: blur(15px);
}

.eco-topbar-left,
.eco-topbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.eco-menu-button,
.eco-sidebar-overlay,
.eco-mobile-brand {
  display: none;
}

.eco-topbar-links {
  display: flex;
  gap: 23px;
}

.eco-topbar-links span {
  color: #777c72;
  font-size: 11px;
  font-weight: 600;
}

.eco-date-display {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #777c72;
  font-size: 11px;
  font-weight: 600;
}

.eco-notification,
.eco-settings-button,
.eco-lang-button {
  position: relative;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  color: #596154;
  background: #f7f5f1;
  border: 1px solid #eee9e1;
  border-radius: 11px;
}

.eco-lang-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f7f5f1;
  border: 1px solid #eee9e1;
  border-radius: 11px;
  color: #596154;
  font-size: 11px;
  font-weight: 700;
}

.eco-notification span {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 7px;
  height: 7px;
  background: #b47b4c;
  border: 1px solid white;
  border-radius: 50%;
}

.eco-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 16px;
  border-left: 1px solid var(--eco-border);
}

.eco-profile-avatar {
  display: grid;
  place-items: center;
  width: 39px;
  height: 39px;
  color: #946e4c;
  background: #f0e5d9;
  border-radius: 12px;
}

.eco-profile-info strong,
.eco-profile-info span {
  display: block;
}

.eco-profile-info strong {
  font-size: 11px;
}

.eco-profile-info span {
  margin-top: 3px;
  color: #99958d;
  font-size: 9px;
}

/* CONTENT */

.eco-content {
  width: 100%;
  max-width: 1600px;
  margin: auto;
  padding: 30px 35px 25px;
}

/* WELCOME */

.eco-welcome {
  position: relative;
  min-height: 235px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 38px 42px;
  background:
    radial-gradient(circle at 85% 30%,rgba(196,154,115,.23),transparent 30%),
    linear-gradient(115deg,#26332c,#3e493d 65%,#554a3c);
  border-radius: 19px;
  box-shadow: 0 12px 30px rgba(36,43,35,.08);
}

.eco-welcome::before {
  content: "";
  position: absolute;
  top: -170px;
  right: 10%;
  width: 340px;
  height: 340px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 50%;
  box-shadow: 0 0 0 35px rgba(255,255,255,.025),
              0 0 0 70px rgba(255,255,255,.02);
}

.eco-welcome-content {
  position: relative;
  z-index: 2;
  max-width: 550px;
}

.eco-eyebrow {
  color: #b1845f;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 2.5px;
}

.eco-welcome .eco-eyebrow {
  color: #d5b18c;
}

.eco-welcome h2 {
  margin: 13px 0;
  color: #fffaf2;
font-family: Arial, sans-serif;  font-size: clamp(30px,3vw,42px);
  line-height: 1.15;
  letter-spacing: -1.5px;
}

.eco-welcome p {
  max-width: 440px;
  color: #d5d8cf;
  font-size: 12px;
  line-height: 1.8;
}

.eco-welcome-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 19px;
}

.eco-welcome-tags span {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  color: #f0e6d9;
  background: rgba(255,255,255,.09);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 30px;
  font-size: 9px;
}

.eco-welcome-decoration {
  position: absolute;
  right: 8%;
  bottom: -45px;
  color: #d5b28b;
  opacity: .2;
}

/* MODULE SECTION */

.eco-modules-section {
  margin-top: 35px;
}

.eco-section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;
}

.eco-section-heading h2 {
  margin: 7px 0 0;
  color: #252923;
font-family: Arial, sans-serif;  font-size: 22px;
  font-weight: 800;
}

.eco-module-count {
  padding: 9px 12px;
  color: #866346;
  background: #eee5da;
  border: 1px solid #e6d9c9;
  border-radius: 8px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
}

.eco-modules-grid {
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 15px;
}

.eco-module-card {
  position: relative;
  min-width: 0;
  min-height: 215px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 19px;
  overflow: hidden;
  text-align: left;
  background: #fff;
  border: 1px solid var(--eco-border);
  border-radius: 16px;
  transition: .3s ease;
}

.eco-module-card:hover {
  transform: translateY(-6px);
  border-color: #c9aa8d;
  box-shadow: 0 14px 30px rgba(45,47,38,.09);
}

.eco-module-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.eco-module-icon {
  width: 61px;
  height: 61px;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #f3ede5;
  border: 1px solid #eee4d8;
  border-radius: 14px;
}

.eco-module-image {
  width: 43px;
  height: 43px;
  object-fit: contain;
}

.eco-module-arrow {
  color: #a87950;
  transition: transform .2s;
}

.eco-module-card:hover .eco-module-arrow {
  transform: translate(3px,-3px);
}

.eco-module-details {
  margin-top: 20px;
}

.eco-module-details h3 {
  margin: 0;
  color: #292e28;
  font-size: 13px;
  font-weight: 800;
}

.eco-module-details p {
  margin: 7px 0 0;
  color: #85847c;
  font-size: 10px;
  line-height: 1.7;
}

.eco-module-open {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: auto;
  padding-top: 14px;
  color: #a87950;
  font-size: 10px;
  font-weight: 800;
}

/* OVERVIEW */

.eco-overview-grid {
  display: grid;
  grid-template-columns: minmax(0,1.55fr) minmax(280px,.85fr);
  gap: 18px;
  margin-top: 26px;
}

.eco-right-column {
  min-width: 0;
}

.eco-panel {
  min-width: 0;
  padding: 22px;
  background: white;
  border: 1px solid var(--eco-border);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(37,41,35,.025);
}

.eco-panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 17px;
  border-bottom: 1px solid #efebe5;
}

.eco-panel-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.eco-heading-icon {
  width: 41px;
  height: 41px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  color: #a87950;
  background: #f3ece3;
  border-radius: 11px;
}

.eco-panel-title h2 {
  margin: 0;
  color: #292e28;
  font-size: 13px;
  font-weight: 800;
}

.eco-panel-title p {
  margin: 5px 0 0;
  color: #929087;
  font-size: 9px;
}

.eco-text-button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px;
  color: #a87950;
  background: transparent;
  border: 0;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.eco-workspace-message {
  min-height: 140px;
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: 19px;
  padding: 17px;
  background: #f8f6f1;
  border: 1px solid #eee8df;
  border-radius: 12px;
}

.eco-workspace-illustration {
  width: 68px;
  height: 68px;
  flex: 0 0 68px;
  display: grid;
  place-items: center;
  color: #a87950;
  background: #eee5d9;
  border-radius: 15px;
}

.eco-workspace-message h3 {
  margin: 0;
  color: #30362f;
  font-size: 12px;
  font-weight: 800;
}

.eco-workspace-message p {
  margin: 7px 0 0;
  color: #85847c;
  font-size: 10px;
  line-height: 1.8;
}

/* QUICK ACTIONS */

.eco-quick-actions {
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 8px;
  margin-top: 18px;
}

.eco-quick-action {
  min-width: 0;
  min-height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 10px 4px;
  color: #53564d;
  background: #f8f6f1;
  border: 1px solid #eee8df;
  border-radius: 11px;
  transition: .2s ease;
}

.eco-quick-action:hover {
  background: #f0e6da;
  border-color: #d9c2a9;
  transform: translateY(-3px);
}

.eco-quick-icon {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  color: #a87950;
  background: #eee5d9;
  border-radius: 11px;
}

.eco-quick-icon img {
  width: 27px;
  height: 27px;
  object-fit: contain;
}

.eco-quick-action > span:last-child {
  font-size: 9px;
  font-weight: 800;
  text-align: center;
  overflow-wrap: anywhere;
}

/* FOOTER */

.eco-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
  padding: 18px 2px 5px;
  color: #929087;
  border-top: 1px solid #e7e2d9;
  font-size: 10px;
}

.eco-footer span:last-child {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #a87950;
}

/* OTHER PAGES */

.eco-module-view {
  min-width: 0;
  min-height: calc(100vh - 76px);
}

/* BUTTON ACCESSIBILITY */

.eco-dashboard button:focus-visible {
  outline: 3px solid #c49a73;
  outline-offset: 3px;
}

/* TABLET */

@media (max-width: 1200px) {
  .eco-content {
    padding: 25px 22px;
  }

  .eco-modules-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .eco-overview-grid {
    grid-template-columns: 1fr;
  }
}

.eco-mobile-bottom-nav {
  display: none;
}

/* MOBILE */

@media (max-width: 760px) {
  .eco-dashboard {
    display: block;
    padding-bottom: 72px;
  }
  .eco-mobile-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 80;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    background: white;
    border-top: 1px solid #e9e4dc;
    box-shadow: 0 -5px 20px rgba(0,0,0,.04);
  }
  .eco-sidebar {
    width: min(285px,85vw);
    transform: translateX(-105%);
  }

  .eco-sidebar.eco-sidebar-open {
    transform: translateX(0);
  }

  .eco-sidebar-close {
    display: grid;
    place-items: center;
  }

  .eco-sidebar-overlay {
    position: fixed;
    inset: 0;
    z-index: 90;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.45);
    border: 0;
  }

  .eco-main {
    width: 100%;
    margin-left: 0;
  }

  .eco-topbar {
    min-height: 65px;
    padding: 0 14px;
  }

  .eco-menu-button {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    color: #394238;
    background: #f5f2ed;
    border: 0;
    border-radius: 10px;
  }

  .eco-mobile-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #313a31;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .eco-topbar-links,
  .eco-date-display,
  .eco-settings-button {
    display: none;
  }

  .eco-topbar-left,
  .eco-topbar-right {
    gap: 9px;
  }

  .eco-profile {
    padding-left: 9px;
  }

  .eco-profile-info {
    display: none;
  }

  .eco-content {
    padding: 18px 14px;
  }

  .eco-welcome {
    min-height: 225px;
    padding: 26px 22px;
    border-radius: 15px;
  }

  .eco-welcome h2 {
    font-size: 30px;
  }

  .eco-welcome p {
    max-width: 290px;
    font-size: 10px;
  }

  .eco-welcome-decoration {
    right: -70px;
    opacity: .1;
  }

  .eco-modules-section {
    margin-top: 27px;
  }

  .eco-section-heading h2 {
    font-size: 19px;
  }

  .eco-modules-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 10px;
  }

  .eco-module-card {
    min-height: 195px;
    padding: 13px;
  }

  .eco-module-icon {
    width: 49px;
    height: 49px;
  }

  .eco-module-image {
    width: 34px;
    height: 34px;
  }

  .eco-module-details h3 {
    font-size: 11px;
  }

  .eco-module-details p {
    font-size: 9px;
  }

  .eco-overview-grid {
    margin-top: 20px;
    gap: 13px;
  }

  .eco-panel {
    padding: 15px;
  }

  .eco-workspace-message {
    align-items: flex-start;
    padding: 12px;
    gap: 11px;
  }

  .eco-workspace-illustration {
    width: 48px;
    height: 48px;
    flex-basis: 48px;
  }

  .eco-workspace-message h3 {
    font-size: 10px;
  }

  .eco-workspace-message p {
    font-size: 9px;
  }

  .eco-quick-actions {
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 5px;
  }

  .eco-quick-action {
    min-height: 80px;
    padding: 7px 2px;
  }

  .eco-quick-icon {
    width: 32px;
    height: 32px;
  }

  .eco-quick-icon img {
    width: 23px;
    height: 23px;
  }

  .eco-quick-action > span:last-child {
    font-size: 8px;
  }

  .eco-footer {
    font-size: 9px;
  }

  .eco-mobile-bottom-nav button {
    min-width: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 7px;
    color: #85847c;
    background: transparent;
    border: 0;
    border-radius: 9px;
  }

  .eco-mobile-bottom-nav button span {
    font-size: 9px;
    font-weight: 700;
  }

  .eco-mobile-bottom-nav button.active {
    color: #a87950;
    background: #f5eee7;
  }

  .eco-module-view {
    min-height: calc(100vh - 65px);
  }
}

/* VERY SMALL PHONES */

@media (max-width: 390px) {
  .eco-modules-grid {
    grid-template-columns: 1fr;
  }

  .eco-module-card {
    min-height: 175px;
  }

  .eco-quick-actions {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .eco-welcome h2 {
    font-size: 27px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .eco-dashboard *,
  .eco-dashboard *::before,
  .eco-dashboard *::after {
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
}


/* FIX MOBILE HORIZONTAL SCROLLING */

html,
body,
#root {
  width: 100%;
  max-width: 100%;
  margin: 0;
  overflow-x: hidden;
}

.eco-dashboard {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

.eco-main {
  min-width: 0;
  max-width: 100%;
  overflow-x: hidden;
}

@media (max-width: 760px) {
  .eco-topbar {
    width: 100%;
    min-width: 0;
    gap: 6px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .eco-topbar-left,
  .eco-topbar-right {
    min-width: 0;
    gap: 6px;
  }

  .eco-topbar-left {
    flex-shrink: 1;
  }

  .eco-topbar-right {
    flex-shrink: 0;
  }

  .eco-mobile-brand {
    min-width: 0;
    white-space: nowrap;
    gap: 5px;
    font-size: 13px;
  }

  .eco-lang-pill {
    flex-shrink: 0;
    white-space: nowrap;
    gap: 4px;
    padding: 6px 8px;
    font-size: 10px;
  }

  .eco-content {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  .eco-modules-grid,
  .eco-overview-grid,
  .eco-panel,
  .eco-workspace-message {
    min-width: 0;
    max-width: 100%;
  }

  .eco-workspace-message > div:last-child {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .eco-mobile-bottom-nav {
    width: 100%;
    max-width: 100%;
  }
}

`;function Yf(){const k=()=>m.jsx("div",{style:{minHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center",color:"#a87950",fontFamily:"DM Sans, sans-serif",fontSize:"14px",fontWeight:"600"},children:"Loading module..."}),{lang:S,toggleLanguage:h,t:x}=Vf(),[L,U]=he.useState("home"),[$,I]=he.useState(!1),[B,b]=he.useState("");he.useEffect(()=>{b(new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}))},[]);const J=[{id:"home",title:x("dashboardNav"),icon:$u},{id:"billing",title:x("billingInvoices"),icon:Io},{id:"quotations",title:x("quotations"),icon:Mo},{id:"labors",title:x("laborManagement"),icon:Oo},{id:"projects",title:x("projectHandling"),icon:Ao}],G=[{title:x("newBill"),id:"billing",icon:Io},{title:x("newQuotation"),id:"quotations",icon:Mo},{title:x("addLabour"),id:"labors",icon:Oo},{title:x("openProjects"),id:"projects",icon:Wf}],A=F=>{U(F),I(!1)},ce=()=>{switch(L){case"quotations":return m.jsx($f,{});case"billing":return m.jsx(qf,{});case"labors":return m.jsx(Gf,{});case"projects":return m.jsx(bf,{});default:return null}};return m.jsxs("div",{className:"eco-dashboard",children:[m.jsx("style",{children:Kf}),$&&m.jsx("button",{className:"eco-sidebar-overlay","aria-label":"Close navigation menu",onClick:()=>I(!1)}),m.jsxs("aside",{className:`eco-sidebar ${$?"eco-sidebar-open":""}`,children:[m.jsxs("div",{className:"eco-sidebar-brand",children:[m.jsx("div",{className:"eco-brand-symbol",children:m.jsx("img",{src:"/logo.png",alt:"NextGen Logo",className:"eco-brand-logo"})}),m.jsxs("div",{className:"eco-brand-text",children:[m.jsx("h2",{children:x("appName")}),m.jsx("span",{children:x("appSubtitle")})]}),m.jsx("button",{className:"eco-sidebar-close","aria-label":"Close sidebar",onClick:()=>I(!1),children:m.jsx(Qf,{size:21})})]}),m.jsx("div",{className:"eco-sidebar-caption",children:x("workspace")}),m.jsx("nav",{className:"eco-sidebar-nav",children:J.map(({id:F,title:W,icon:Q})=>m.jsxs("button",{className:`eco-nav-link ${L===F?"active":""}`,onClick:()=>A(F),children:[m.jsx(Q,{size:19,strokeWidth:2}),m.jsx("span",{children:W}),L===F&&m.jsx("span",{className:"eco-nav-active-dot"})]},F))}),m.jsx("div",{className:"eco-sidebar-bottom",children:m.jsxs("div",{className:"eco-sidebar-art",children:[m.jsx("div",{className:"eco-building-art",children:m.jsx(Ro,{size:76,strokeWidth:1.1})}),m.jsx("p",{children:x("buildToday")}),m.jsx("p",{children:x("betterTomorrow")})]})})]}),m.jsxs("main",{className:"eco-main",children:[m.jsxs("header",{className:"eco-topbar",children:[m.jsxs("div",{className:"eco-topbar-left",children:[m.jsx("button",{className:"eco-menu-button","aria-label":"Open navigation menu",onClick:()=>I(!0),children:m.jsx(Bf,{size:23})}),m.jsxs("div",{className:"eco-mobile-brand",children:[m.jsx(Ro,{size:22}),m.jsx("span",{children:x("appName")})]}),m.jsxs("div",{className:"eco-topbar-links",children:[m.jsx("span",{children:x("topPlan")}),m.jsx("span",{children:x("topTrack")}),m.jsx("span",{children:x("topBuild")}),m.jsx("span",{children:x("topGrow")})]})]}),m.jsxs("div",{className:"eco-topbar-right",children:[m.jsxs("button",{onClick:h,className:"eco-lang-pill",title:"Switch Language / भाषा बदला",children:[m.jsx(Uf,{size:15}),m.jsx("span",{children:S==="en"?"मराठी":"English"})]}),m.jsxs("div",{className:"eco-date-display",children:[m.jsx(Mf,{size:16}),m.jsx("span",{children:B})]}),m.jsxs("div",{className:"eco-profile",children:[m.jsx("div",{className:"eco-profile-avatar",children:m.jsx(If,{size:25})}),m.jsxs("div",{className:"eco-profile-info",children:[m.jsx("strong",{children:x("siteManager")}),m.jsx("span",{children:x("workspaceSub")})]})]})]})]}),L==="home"?m.jsxs("div",{className:"eco-content",children:[m.jsxs("section",{className:"eco-welcome",children:[m.jsxs("div",{className:"eco-welcome-content",children:[m.jsx("span",{className:"eco-eyebrow",children:x("yourWorkspace")}),m.jsx("h2",{children:x("welcomeBack")}),m.jsx("p",{children:x("welcomeDesc")}),m.jsxs("div",{className:"eco-welcome-tags",children:[m.jsxs("span",{children:[m.jsx(Of,{size:14}),x("workOrganized")]}),m.jsxs("span",{children:[m.jsx(qu,{size:14}),x("buildSustainably")]})]})]}),m.jsx("div",{className:"eco-welcome-decoration","aria-hidden":"true",children:m.jsx(Ro,{size:190,strokeWidth:.8})})]}),m.jsxs("section",{className:"eco-modules-section",children:[m.jsxs("div",{className:"eco-section-heading",children:[m.jsxs("div",{children:[m.jsx("span",{className:"eco-eyebrow",children:x("getThingsDone")}),m.jsx("h2",{children:x("exploreModules")})]}),m.jsxs("span",{className:"eco-module-count",children:[String(bu.length).padStart(2,"0")," ",x("modulesLabel")]})]}),m.jsx("div",{className:"eco-modules-grid",children:bu.map(({id:F,titleKey:W,descKey:Q,image:xe,color:ve})=>m.jsxs("button",{className:`eco-module-card ${ve}`,onClick:()=>A(F),children:[m.jsxs("div",{className:"eco-module-card-top",children:[m.jsx("div",{className:"eco-module-icon",children:m.jsx("img",{src:xe,alt:x(W),className:"eco-module-image"})}),m.jsx(Vu,{className:"eco-module-arrow",size:19})]}),m.jsxs("div",{className:"eco-module-details",children:[m.jsx("h3",{children:x(W)}),m.jsx("p",{children:x(Q)})]}),m.jsxs("span",{className:"eco-module-open",children:[x("openModule"),m.jsx(Af,{size:15})]})]},F))})]}),m.jsxs("section",{className:"eco-overview-grid",children:[m.jsxs("div",{className:"eco-panel eco-project-panel",children:[m.jsxs("div",{className:"eco-panel-heading",children:[m.jsxs("div",{className:"eco-panel-title",children:[m.jsx("div",{className:"eco-heading-icon",children:m.jsx(Ao,{size:19})}),m.jsxs("div",{children:[m.jsx("h2",{children:x("projectWorkspace")}),m.jsx("p",{children:x("projectWorkspaceSub")})]})]}),m.jsxs("button",{className:"eco-text-button",onClick:()=>A("projects"),children:[x("openProjects"),m.jsx(Vu,{size:15})]})]}),m.jsxs("div",{className:"eco-workspace-message",children:[m.jsx("div",{className:"eco-workspace-illustration",children:m.jsx(Ro,{size:42,strokeWidth:1.4})}),m.jsxs("div",{children:[m.jsx("h3",{children:x("workspaceBannerTitle")}),m.jsx("p",{children:x("workspaceBannerDesc")})]})]})]}),m.jsx("div",{className:"eco-right-column",children:m.jsxs("div",{className:"eco-panel eco-quick-panel",children:[m.jsx("div",{className:"eco-panel-heading",children:m.jsxs("div",{className:"eco-panel-title",children:[m.jsx("div",{className:"eco-heading-icon",children:m.jsx(Ff,{size:19})}),m.jsxs("div",{children:[m.jsx("h2",{children:x("quickActions")}),m.jsx("p",{children:x("quickActionsSub")})]})]})}),m.jsx("div",{className:"eco-quick-actions",children:G.map(({title:F,id:W,icon:Q})=>{const xe={billing:"/billing.png",labors:"/labour.png",quotations:"/quotation.png",projects:"/reports.png"};return m.jsxs("button",{className:"eco-quick-action",onClick:()=>A(W),children:[m.jsxs("span",{className:"eco-quick-icon",children:[m.jsx("img",{src:xe[W],alt:F,onError:ve=>{ve.currentTarget.style.display="none"}}),m.jsx(Q,{size:21,style:{display:"none"}})]}),m.jsx("span",{children:F})]},W)})})]})})]}),m.jsxs("footer",{className:"eco-footer",children:[m.jsxs("span",{children:["© ",new Date().getFullYear()," ",x("footerTitle")]}),m.jsxs("span",{children:[m.jsx(qu,{size:14}),x("footerSlogan")]})]})]}):m.jsx("div",{className:"eco-module-view",children:m.jsx(he.Suspense,{fallback:m.jsx(k,{}),children:ce()})})]}),m.jsxs("nav",{className:"eco-mobile-bottom-nav",children:[m.jsxs("button",{className:L==="home"?"active":"",onClick:()=>A("home"),children:[m.jsx($u,{size:20}),m.jsx("span",{children:x("navHome")})]}),m.jsxs("button",{className:L==="billing"?"active":"",onClick:()=>A("billing"),children:[m.jsx(Io,{size:20}),m.jsx("span",{children:x("navBilling")})]}),m.jsxs("button",{className:L==="quotations"?"active":"",onClick:()=>A("quotations"),children:[m.jsx(Mo,{size:20}),m.jsx("span",{children:x("quotations")})]}),m.jsxs("button",{className:L==="labors"?"active":"",onClick:()=>A("labors"),children:[m.jsx(Oo,{size:20}),m.jsx("span",{children:x("navLabour")})]}),m.jsxs("button",{className:L==="projects"?"active":"",onClick:()=>A("projects"),children:[m.jsx(Ao,{size:20}),m.jsx("span",{children:x("navProjects")})]})]})]})}kf.createRoot(document.getElementById("root")).render(m.jsx(mf.StrictMode,{children:m.jsx(Hf,{children:m.jsx(Yf,{})})}));export{Vu as A,Ro as B,Of as C,Mo as F,Oo as H,Wf as P,Qf as X,Fo as _,Ao as a,Xf as b,Te as c,Ku as g,m as j,he as r,Vf as u};
