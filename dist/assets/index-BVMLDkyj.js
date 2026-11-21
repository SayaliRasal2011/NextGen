(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))M(O);new MutationObserver(O=>{for(const E of O)if(E.type==="childList")for(const J of E.addedNodes)J.tagName==="LINK"&&J.rel==="modulepreload"&&M(J)}).observe(document,{childList:!0,subtree:!0});function p(O){const E={};return O.integrity&&(E.integrity=O.integrity),O.referrerPolicy&&(E.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?E.credentials="include":O.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function M(O){if(O.ep)return;O.ep=!0;const E=p(O);fetch(O.href,E)}})();function hd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ki={exports:{}},Bn={},Yi={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc;function lf(){if(Jc)return pe;Jc=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),J=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),te=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ae=Symbol.iterator;function Q(m){return m===null||typeof m!="object"?null:(m=ae&&m[ae]||m["@@iterator"],typeof m=="function"?m:null)}var me={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,V={};function X(m,y,Z){this.props=m,this.context=y,this.refs=V,this.updater=Z||me}X.prototype.isReactComponent={},X.prototype.setState=function(m,y){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,y,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function je(){}je.prototype=X.prototype;function be(m,y,Z){this.props=m,this.context=y,this.refs=V,this.updater=Z||me}var Le=be.prototype=new je;Le.constructor=be,H(Le,X.prototype),Le.isPureReactComponent=!0;var fe=Array.isArray,xe=Object.prototype.hasOwnProperty,Ne={current:null},we={key:!0,ref:!0,__self:!0,__source:!0};function Se(m,y,Z){var G,ie={},se=null,ue=null;if(y!=null)for(G in y.ref!==void 0&&(ue=y.ref),y.key!==void 0&&(se=""+y.key),y)xe.call(y,G)&&!we.hasOwnProperty(G)&&(ie[G]=y[G]);var $=arguments.length-2;if($===1)ie.children=Z;else if(1<$){for(var ce=Array($),S=0;S<$;S++)ce[S]=arguments[S+2];ie.children=ce}if(m&&m.defaultProps)for(G in $=m.defaultProps,$)ie[G]===void 0&&(ie[G]=$[G]);return{$$typeof:s,type:m,key:se,ref:ue,props:ie,_owner:Ne.current}}function Oe(m,y){return{$$typeof:s,type:m.type,key:y,ref:m.ref,props:m.props,_owner:m._owner}}function ze(m){return typeof m=="object"&&m!==null&&m.$$typeof===s}function $e(m){var y={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(Z){return y[Z]})}var Be=/\/+/g;function Ae(m,y){return typeof m=="object"&&m!==null&&m.key!=null?$e(""+m.key):y.toString(36)}function Ce(m,y,Z,G,ie){var se=typeof m;(se==="undefined"||se==="boolean")&&(m=null);var ue=!1;if(m===null)ue=!0;else switch(se){case"string":case"number":ue=!0;break;case"object":switch(m.$$typeof){case s:case c:ue=!0}}if(ue)return ue=m,ie=ie(ue),m=G===""?"."+Ae(ue,0):G,fe(ie)?(Z="",m!=null&&(Z=m.replace(Be,"$&/")+"/"),Ce(ie,y,Z,"",function(S){return S})):ie!=null&&(ze(ie)&&(ie=Oe(ie,Z+(!ie.key||ue&&ue.key===ie.key?"":(""+ie.key).replace(Be,"$&/")+"/")+m)),y.push(ie)),1;if(ue=0,G=G===""?".":G+":",fe(m))for(var $=0;$<m.length;$++){se=m[$];var ce=G+Ae(se,$);ue+=Ce(se,y,Z,ce,ie)}else if(ce=Q(m),typeof ce=="function")for(m=ce.call(m),$=0;!(se=m.next()).done;)se=se.value,ce=G+Ae(se,$++),ue+=Ce(se,y,Z,ce,ie);else if(se==="object")throw y=String(m),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return ue}function Ie(m,y,Z){if(m==null)return m;var G=[],ie=0;return Ce(m,G,"","",function(se){return y.call(Z,se,ie++)}),G}function Pe(m){if(m._status===-1){var y=m._result;y=y(),y.then(function(Z){(m._status===0||m._status===-1)&&(m._status=1,m._result=Z)},function(Z){(m._status===0||m._status===-1)&&(m._status=2,m._result=Z)}),m._status===-1&&(m._status=0,m._result=y)}if(m._status===1)return m._result.default;throw m._result}var he={current:null},N={transition:null},U={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:N,ReactCurrentOwner:Ne};function T(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:Ie,forEach:function(m,y,Z){Ie(m,function(){y.apply(this,arguments)},Z)},count:function(m){var y=0;return Ie(m,function(){y++}),y},toArray:function(m){return Ie(m,function(y){return y})||[]},only:function(m){if(!ze(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},pe.Component=X,pe.Fragment=p,pe.Profiler=O,pe.PureComponent=be,pe.StrictMode=M,pe.Suspense=ee,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,pe.act=T,pe.cloneElement=function(m,y,Z){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var G=H({},m.props),ie=m.key,se=m.ref,ue=m._owner;if(y!=null){if(y.ref!==void 0&&(se=y.ref,ue=Ne.current),y.key!==void 0&&(ie=""+y.key),m.type&&m.type.defaultProps)var $=m.type.defaultProps;for(ce in y)xe.call(y,ce)&&!we.hasOwnProperty(ce)&&(G[ce]=y[ce]===void 0&&$!==void 0?$[ce]:y[ce])}var ce=arguments.length-2;if(ce===1)G.children=Z;else if(1<ce){$=Array(ce);for(var S=0;S<ce;S++)$[S]=arguments[S+2];G.children=$}return{$$typeof:s,type:m.type,key:ie,ref:se,props:G,_owner:ue}},pe.createContext=function(m){return m={$$typeof:J,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:E,_context:m},m.Consumer=m},pe.createElement=Se,pe.createFactory=function(m){var y=Se.bind(null,m);return y.type=m,y},pe.createRef=function(){return{current:null}},pe.forwardRef=function(m){return{$$typeof:_,render:m}},pe.isValidElement=ze,pe.lazy=function(m){return{$$typeof:oe,_payload:{_status:-1,_result:m},_init:Pe}},pe.memo=function(m,y){return{$$typeof:te,type:m,compare:y===void 0?null:y}},pe.startTransition=function(m){var y=N.transition;N.transition={};try{m()}finally{N.transition=y}},pe.unstable_act=T,pe.useCallback=function(m,y){return he.current.useCallback(m,y)},pe.useContext=function(m){return he.current.useContext(m)},pe.useDebugValue=function(){},pe.useDeferredValue=function(m){return he.current.useDeferredValue(m)},pe.useEffect=function(m,y){return he.current.useEffect(m,y)},pe.useId=function(){return he.current.useId()},pe.useImperativeHandle=function(m,y,Z){return he.current.useImperativeHandle(m,y,Z)},pe.useInsertionEffect=function(m,y){return he.current.useInsertionEffect(m,y)},pe.useLayoutEffect=function(m,y){return he.current.useLayoutEffect(m,y)},pe.useMemo=function(m,y){return he.current.useMemo(m,y)},pe.useReducer=function(m,y,Z){return he.current.useReducer(m,y,Z)},pe.useRef=function(m){return he.current.useRef(m)},pe.useState=function(m){return he.current.useState(m)},pe.useSyncExternalStore=function(m,y,Z){return he.current.useSyncExternalStore(m,y,Z)},pe.useTransition=function(){return he.current.useTransition()},pe.version="18.3.1",pe}var Zc;function ll(){return Zc||(Zc=1,Yi.exports=lf()),Yi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function sf(){if(ed)return Bn;ed=1;var s=ll(),c=Symbol.for("react.element"),p=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,O=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function J(_,ee,te){var oe,ae={},Q=null,me=null;te!==void 0&&(Q=""+te),ee.key!==void 0&&(Q=""+ee.key),ee.ref!==void 0&&(me=ee.ref);for(oe in ee)M.call(ee,oe)&&!E.hasOwnProperty(oe)&&(ae[oe]=ee[oe]);if(_&&_.defaultProps)for(oe in ee=_.defaultProps,ee)ae[oe]===void 0&&(ae[oe]=ee[oe]);return{$$typeof:c,type:_,key:Q,ref:me,props:ae,_owner:O.current}}return Bn.Fragment=p,Bn.jsx=J,Bn.jsxs=J,Bn}var td;function cf(){return td||(td=1,Ki.exports=sf()),Ki.exports}var n=cf(),L=ll();const df=hd(L);var ta={},Xi={exports:{}},pt={},Ji={exports:{}},Zi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function uf(){return rd||(rd=1,(function(s){function c(N,U){var T=N.length;N.push(U);e:for(;0<T;){var m=T-1>>>1,y=N[m];if(0<O(y,U))N[m]=U,N[T]=y,T=m;else break e}}function p(N){return N.length===0?null:N[0]}function M(N){if(N.length===0)return null;var U=N[0],T=N.pop();if(T!==U){N[0]=T;e:for(var m=0,y=N.length,Z=y>>>1;m<Z;){var G=2*(m+1)-1,ie=N[G],se=G+1,ue=N[se];if(0>O(ie,T))se<y&&0>O(ue,ie)?(N[m]=ue,N[se]=T,m=se):(N[m]=ie,N[G]=T,m=G);else if(se<y&&0>O(ue,T))N[m]=ue,N[se]=T,m=se;else break e}}return U}function O(N,U){var T=N.sortIndex-U.sortIndex;return T!==0?T:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;s.unstable_now=function(){return E.now()}}else{var J=Date,_=J.now();s.unstable_now=function(){return J.now()-_}}var ee=[],te=[],oe=1,ae=null,Q=3,me=!1,H=!1,V=!1,X=typeof setTimeout=="function"?setTimeout:null,je=typeof clearTimeout=="function"?clearTimeout:null,be=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Le(N){for(var U=p(te);U!==null;){if(U.callback===null)M(te);else if(U.startTime<=N)M(te),U.sortIndex=U.expirationTime,c(ee,U);else break;U=p(te)}}function fe(N){if(V=!1,Le(N),!H)if(p(ee)!==null)H=!0,Pe(xe);else{var U=p(te);U!==null&&he(fe,U.startTime-N)}}function xe(N,U){H=!1,V&&(V=!1,je(Se),Se=-1),me=!0;var T=Q;try{for(Le(U),ae=p(ee);ae!==null&&(!(ae.expirationTime>U)||N&&!$e());){var m=ae.callback;if(typeof m=="function"){ae.callback=null,Q=ae.priorityLevel;var y=m(ae.expirationTime<=U);U=s.unstable_now(),typeof y=="function"?ae.callback=y:ae===p(ee)&&M(ee),Le(U)}else M(ee);ae=p(ee)}if(ae!==null)var Z=!0;else{var G=p(te);G!==null&&he(fe,G.startTime-U),Z=!1}return Z}finally{ae=null,Q=T,me=!1}}var Ne=!1,we=null,Se=-1,Oe=5,ze=-1;function $e(){return!(s.unstable_now()-ze<Oe)}function Be(){if(we!==null){var N=s.unstable_now();ze=N;var U=!0;try{U=we(!0,N)}finally{U?Ae():(Ne=!1,we=null)}}else Ne=!1}var Ae;if(typeof be=="function")Ae=function(){be(Be)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Ie=Ce.port2;Ce.port1.onmessage=Be,Ae=function(){Ie.postMessage(null)}}else Ae=function(){X(Be,0)};function Pe(N){we=N,Ne||(Ne=!0,Ae())}function he(N,U){Se=X(function(){N(s.unstable_now())},U)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_continueExecution=function(){H||me||(H=!0,Pe(xe))},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return Q},s.unstable_getFirstCallbackNode=function(){return p(ee)},s.unstable_next=function(N){switch(Q){case 1:case 2:case 3:var U=3;break;default:U=Q}var T=Q;Q=U;try{return N()}finally{Q=T}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=Q;Q=N;try{return U()}finally{Q=T}},s.unstable_scheduleCallback=function(N,U,T){var m=s.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?m+T:m):T=m,N){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=T+y,N={id:oe++,callback:U,priorityLevel:N,startTime:T,expirationTime:y,sortIndex:-1},T>m?(N.sortIndex=T,c(te,N),p(ee)===null&&N===p(te)&&(V?(je(Se),Se=-1):V=!0,he(fe,T-m))):(N.sortIndex=y,c(ee,N),H||me||(H=!0,Pe(xe))),N},s.unstable_shouldYield=$e,s.unstable_wrapCallback=function(N){var U=Q;return function(){var T=Q;Q=U;try{return N.apply(this,arguments)}finally{Q=T}}}})(Zi)),Zi}var nd;function pf(){return nd||(nd=1,Ji.exports=uf()),Ji.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function ff(){if(od)return pt;od=1;var s=ll(),c=pf();function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M=new Set,O={};function E(e,t){J(e,t),J(e+"Capture",t)}function J(e,t){for(O[e]=t,e=0;e<t.length;e++)M.add(t[e])}var _=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=Object.prototype.hasOwnProperty,te=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oe={},ae={};function Q(e){return ee.call(ae,e)?!0:ee.call(oe,e)?!1:te.test(e)?ae[e]=!0:(oe[e]=!0,!1)}function me(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,t,r,o){if(t===null||typeof t>"u"||me(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function V(e,t,r,o,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new V(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var je=/[\-:]([a-z])/g;function be(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(je,be);X[t]=new V(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(je,be);X[t]=new V(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(je,be);X[t]=new V(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function Le(e,t,r,o){var a=X.hasOwnProperty(t)?X[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H(t,r,a,o)&&(r=null),o||a===null?Q(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,o=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var fe=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),ze=Symbol.for("react.provider"),$e=Symbol.for("react.context"),Be=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),Ie=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),N=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,m;function y(e){if(m===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var Z=!1;function G(e,t){if(!e||Z)return"";Z=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(b){var o=b}Reflect.construct(e,[],t)}else{try{t.call()}catch(b){o=b}e.call(t.prototype)}else{try{throw Error()}catch(b){o=b}e()}}catch(b){if(b&&o&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),i=o.stack.split(`
`),l=a.length-1,d=i.length-1;1<=l&&0<=d&&a[l]!==i[d];)d--;for(;1<=l&&0<=d;l--,d--)if(a[l]!==i[d]){if(l!==1||d!==1)do if(l--,d--,0>d||a[l]!==i[d]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=d);break}}}finally{Z=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?y(e):""}function ie(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case Ne:return"Portal";case Oe:return"Profiler";case Se:return"StrictMode";case Ae:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $e:return(e.displayName||"Context")+".Consumer";case ze:return(e._context.displayName||"Context")+".Provider";case Be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ie:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===Se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S(e){var t=ce(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function re(e){e._valueTracker||(e._valueTracker=S(e))}function B(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=ce(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function f(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function D(e,t){var r=t.checked;return T({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function C(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=$(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function P(e,t){t=t.checked,t!=null&&Le(e,"checked",t,!1)}function ge(e,t){P(e,t);var r=$(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?v(e,t.type,r):t.hasOwnProperty("defaultValue")&&v(e,t.type,$(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function He(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function v(e,t,r){(t!=="number"||f(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var R=Array.isArray;function de(e,t,r,o){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&o&&(e[r].defaultSelected=!0)}else{for(r=""+$(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Me(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(p(91));return T({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function it(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(p(92));if(R(r)){if(1<r.length)throw Error(p(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:$(r)}}function cl(e,t){var r=$(t.value),o=$(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function dl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ul(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ul(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qn,pl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qn=Qn||document.createElement("div"),Qn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},du=["Webkit","ms","Moz","O"];Object.keys(nn).forEach(function(e){du.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nn[t]=nn[e]})});function fl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||nn.hasOwnProperty(e)&&nn[e]?(""+t).trim():t+"px"}function hl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,a=fl(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,a):e[r]=a}}var uu=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,t){if(t){if(uu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(p(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(p(61))}if(t.style!=null&&typeof t.style!="object")throw Error(p(62))}}function sa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,Tr=null,Dr=null;function ml(e){if(e=zn(e)){if(typeof ua!="function")throw Error(p(280));var t=e.stateNode;t&&(t=xo(t),ua(e.stateNode,e.type,t))}}function xl(e){Tr?Dr?Dr.push(e):Dr=[e]:Tr=e}function gl(){if(Tr){var e=Tr,t=Dr;if(Dr=Tr=null,ml(e),t)for(e=0;e<t.length;e++)ml(t[e])}}function vl(e,t){return e(t)}function bl(){}var pa=!1;function yl(e,t,r){if(pa)return e(t,r);pa=!0;try{return vl(e,t,r)}finally{pa=!1,(Tr!==null||Dr!==null)&&(bl(),gl())}}function on(e,t){var r=e.stateNode;if(r===null)return null;var o=xo(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(p(231,t,typeof r));return r}var fa=!1;if(_)try{var an={};Object.defineProperty(an,"passive",{get:function(){fa=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{fa=!1}function pu(e,t,r,o,a,i,l,d,u){var b=Array.prototype.slice.call(arguments,3);try{t.apply(r,b)}catch(w){this.onError(w)}}var ln=!1,Vn=null,Gn=!1,ha=null,fu={onError:function(e){ln=!0,Vn=e}};function hu(e,t,r,o,a,i,l,d,u){ln=!1,Vn=null,pu.apply(fu,arguments)}function mu(e,t,r,o,a,i,l,d,u){if(hu.apply(this,arguments),ln){if(ln){var b=Vn;ln=!1,Vn=null}else throw Error(p(198));Gn||(Gn=!0,ha=b)}}function fr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function jl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wl(e){if(fr(e)!==e)throw Error(p(188))}function xu(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(p(188));return t!==e?null:e}for(var r=e,o=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(o=a.return,o!==null){r=o;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return wl(a),e;if(i===o)return wl(a),t;i=i.sibling}throw Error(p(188))}if(r.return!==o.return)r=a,o=i;else{for(var l=!1,d=a.child;d;){if(d===r){l=!0,r=a,o=i;break}if(d===o){l=!0,o=a,r=i;break}d=d.sibling}if(!l){for(d=i.child;d;){if(d===r){l=!0,r=i,o=a;break}if(d===o){l=!0,o=i,r=a;break}d=d.sibling}if(!l)throw Error(p(189))}}if(r.alternate!==o)throw Error(p(190))}if(r.tag!==3)throw Error(p(188));return r.stateNode.current===r?e:t}function kl(e){return e=xu(e),e!==null?Nl(e):null}function Nl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nl(e);if(t!==null)return t;e=e.sibling}return null}var Sl=c.unstable_scheduleCallback,zl=c.unstable_cancelCallback,gu=c.unstable_shouldYield,vu=c.unstable_requestPaint,We=c.unstable_now,bu=c.unstable_getCurrentPriorityLevel,ma=c.unstable_ImmediatePriority,Cl=c.unstable_UserBlockingPriority,Kn=c.unstable_NormalPriority,yu=c.unstable_LowPriority,Pl=c.unstable_IdlePriority,Yn=null,Lt=null;function ju(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Yn,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Nu,wu=Math.log,ku=Math.LN2;function Nu(e){return e>>>=0,e===0?32:31-(wu(e)/ku|0)|0}var Xn=64,Jn=4194304;function sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zn(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,a=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var d=l&~a;d!==0?o=sn(d):(i&=l,i!==0&&(o=sn(i)))}else l=r&~a,l!==0?o=sn(l):i!==0&&(o=sn(i));if(o===0)return 0;if(t!==0&&t!==o&&(t&a)===0&&(a=o&-o,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-St(t),a=1<<r,o|=e[r],t&=~a;return o}function Su(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-St(i),d=1<<l,u=a[l];u===-1?((d&r)===0||(d&o)!==0)&&(a[l]=Su(d,t)):u<=t&&(e.expiredLanes|=d),i&=~d}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function El(){var e=Xn;return Xn<<=1,(Xn&4194240)===0&&(Xn=64),e}function ga(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function cn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=r}function Cu(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-St(r),i=1<<a;t[a]=0,o[a]=-1,e[a]=-1,r&=~i}}function va(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-St(r),a=1<<o;a&t|e[o]&t&&(e[o]|=t),r&=~a}}var ke=0;function Tl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Dl,ba,Ll,_l,Al,ya=!1,eo=[],Ht=null,Qt=null,Vt=null,dn=new Map,un=new Map,Gt=[],Pu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ml(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(t.pointerId)}}function pn(e,t,r,o,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[a]},t!==null&&(t=zn(t),t!==null&&ba(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Eu(e,t,r,o,a){switch(t){case"focusin":return Ht=pn(Ht,e,t,r,o,a),!0;case"dragenter":return Qt=pn(Qt,e,t,r,o,a),!0;case"mouseover":return Vt=pn(Vt,e,t,r,o,a),!0;case"pointerover":var i=a.pointerId;return dn.set(i,pn(dn.get(i)||null,e,t,r,o,a)),!0;case"gotpointercapture":return i=a.pointerId,un.set(i,pn(un.get(i)||null,e,t,r,o,a)),!0}return!1}function Rl(e){var t=hr(e.target);if(t!==null){var r=fr(t);if(r!==null){if(t=r.tag,t===13){if(t=jl(r),t!==null){e.blockedOn=t,Al(e.priority,function(){Ll(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);ca=o,r.target.dispatchEvent(o),ca=null}else return t=zn(r),t!==null&&ba(t),e.blockedOn=r,!1;t.shift()}return!0}function ql(e,t,r){to(e)&&r.delete(t)}function Tu(){ya=!1,Ht!==null&&to(Ht)&&(Ht=null),Qt!==null&&to(Qt)&&(Qt=null),Vt!==null&&to(Vt)&&(Vt=null),dn.forEach(ql),un.forEach(ql)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,ya||(ya=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Tu)))}function hn(e){function t(a){return fn(a,e)}if(0<eo.length){fn(eo[0],e);for(var r=1;r<eo.length;r++){var o=eo[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Ht!==null&&fn(Ht,e),Qt!==null&&fn(Qt,e),Vt!==null&&fn(Vt,e),dn.forEach(t),un.forEach(t),r=0;r<Gt.length;r++)o=Gt[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<Gt.length&&(r=Gt[0],r.blockedOn===null);)Rl(r),r.blockedOn===null&&Gt.shift()}var Lr=fe.ReactCurrentBatchConfig,ro=!0;function Du(e,t,r,o){var a=ke,i=Lr.transition;Lr.transition=null;try{ke=1,ja(e,t,r,o)}finally{ke=a,Lr.transition=i}}function Lu(e,t,r,o){var a=ke,i=Lr.transition;Lr.transition=null;try{ke=4,ja(e,t,r,o)}finally{ke=a,Lr.transition=i}}function ja(e,t,r,o){if(ro){var a=wa(e,t,r,o);if(a===null)Fa(e,t,o,no,r),Ml(e,o);else if(Eu(a,e,t,r,o))o.stopPropagation();else if(Ml(e,o),t&4&&-1<Pu.indexOf(e)){for(;a!==null;){var i=zn(a);if(i!==null&&Dl(i),i=wa(e,t,r,o),i===null&&Fa(e,t,o,no,r),i===a)break;a=i}a!==null&&o.stopPropagation()}else Fa(e,t,o,null,r)}}var no=null;function wa(e,t,r,o){if(no=null,e=da(o),e=hr(e),e!==null)if(t=fr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=jl(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function Il(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bu()){case ma:return 1;case Cl:return 4;case Kn:case yu:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var Kt=null,ka=null,oo=null;function Fl(){if(oo)return oo;var e,t=ka,r=t.length,o,a="value"in Kt?Kt.value:Kt.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var l=r-e;for(o=1;o<=l&&t[r-o]===a[i-o];o++);return oo=a.slice(e,1<o?1-o:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function Ol(){return!1}function ft(e){function t(r,o,a,i,l){this._reactName=r,this._targetInst=a,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(r=e[d],this[d]=r?r(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?io:Ol,this.isPropagationStopped=Ol,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=ft(_r),mn=T({},_r,{view:0,detail:0}),_u=ft(mn),Sa,za,xn,lo=T({},mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Sa=e.screenX-xn.screenX,za=e.screenY-xn.screenY):za=Sa=0,xn=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:za}}),Bl=ft(lo),Au=T({},lo,{dataTransfer:0}),Mu=ft(Au),Ru=T({},mn,{relatedTarget:0}),Ca=ft(Ru),qu=T({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Iu=ft(qu),Fu=T({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ou=ft(Fu),Bu=T({},_r,{data:0}),Wl=ft(Bu),Wu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$u[e])?!!t[e]:!1}function Pa(){return Hu}var Qu=T({},mn,{key:function(e){if(e.key){var t=Wu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vu=ft(Qu),Gu=T({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ul=ft(Gu),Ku=T({},mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),Yu=ft(Ku),Xu=T({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ju=ft(Xu),Zu=T({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ep=ft(Zu),tp=[9,13,27,32],Ea=_&&"CompositionEvent"in window,gn=null;_&&"documentMode"in document&&(gn=document.documentMode);var rp=_&&"TextEvent"in window&&!gn,$l=_&&(!Ea||gn&&8<gn&&11>=gn),Hl=" ",Ql=!1;function Vl(e,t){switch(e){case"keyup":return tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function np(e,t){switch(e){case"compositionend":return Gl(t);case"keypress":return t.which!==32?null:(Ql=!0,Hl);case"textInput":return e=t.data,e===Hl&&Ql?null:e;default:return null}}function op(e,t){if(Ar)return e==="compositionend"||!Ea&&Vl(e,t)?(e=Fl(),oo=ka=Kt=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $l&&t.locale!=="ko"?null:t.data;default:return null}}var ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ap[e.type]:t==="textarea"}function Yl(e,t,r,o){xl(o),t=fo(t,"onChange"),0<t.length&&(r=new Na("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var vn=null,bn=null;function ip(e){hs(e,0)}function so(e){var t=Fr(e);if(B(t))return e}function lp(e,t){if(e==="change")return t}var Xl=!1;if(_){var Ta;if(_){var Da="oninput"in document;if(!Da){var Jl=document.createElement("div");Jl.setAttribute("oninput","return;"),Da=typeof Jl.oninput=="function"}Ta=Da}else Ta=!1;Xl=Ta&&(!document.documentMode||9<document.documentMode)}function Zl(){vn&&(vn.detachEvent("onpropertychange",es),bn=vn=null)}function es(e){if(e.propertyName==="value"&&so(bn)){var t=[];Yl(t,bn,e,da(e)),yl(ip,t)}}function sp(e,t,r){e==="focusin"?(Zl(),vn=t,bn=r,vn.attachEvent("onpropertychange",es)):e==="focusout"&&Zl()}function cp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return so(bn)}function dp(e,t){if(e==="click")return so(t)}function up(e,t){if(e==="input"||e==="change")return so(t)}function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:pp;function yn(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var a=r[o];if(!ee.call(t,a)||!zt(e[a],t[a]))return!1}return!0}function ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var r=ts(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ts(r)}}function ns(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ns(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function os(){for(var e=window,t=f();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=f(e.document)}return t}function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fp(e){var t=os(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ns(r.ownerDocument.documentElement,r)){if(o!==null&&La(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(o.start,a);o=o.end===void 0?i:Math.min(o.end,a),!e.extend&&i>o&&(a=o,o=i,i=a),a=rs(r,i);var l=rs(r,o);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hp=_&&"documentMode"in document&&11>=document.documentMode,Mr=null,_a=null,jn=null,Aa=!1;function as(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Aa||Mr==null||Mr!==f(o)||(o=Mr,"selectionStart"in o&&La(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jn&&yn(jn,o)||(jn=o,o=fo(_a,"onSelect"),0<o.length&&(t=new Na("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=Mr)))}function co(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Rr={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Ma={},is={};_&&(is=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function uo(e){if(Ma[e])return Ma[e];if(!Rr[e])return e;var t=Rr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in is)return Ma[e]=t[r];return e}var ls=uo("animationend"),ss=uo("animationiteration"),cs=uo("animationstart"),ds=uo("transitionend"),us=new Map,ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){us.set(e,t),E(t,[e])}for(var Ra=0;Ra<ps.length;Ra++){var qa=ps[Ra],mp=qa.toLowerCase(),xp=qa[0].toUpperCase()+qa.slice(1);Yt(mp,"on"+xp)}Yt(ls,"onAnimationEnd"),Yt(ss,"onAnimationIteration"),Yt(cs,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(ds,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gp=new Set("cancel close invalid load scroll toggle".split(" ").concat(wn));function fs(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,mu(o,t,void 0,e),e.currentTarget=null}function hs(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],a=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var l=o.length-1;0<=l;l--){var d=o[l],u=d.instance,b=d.currentTarget;if(d=d.listener,u!==i&&a.isPropagationStopped())break e;fs(a,d,b),i=u}else for(l=0;l<o.length;l++){if(d=o[l],u=d.instance,b=d.currentTarget,d=d.listener,u!==i&&a.isPropagationStopped())break e;fs(a,d,b),i=u}}}if(Gn)throw e=ha,Gn=!1,ha=null,e}function Te(e,t){var r=t[Ha];r===void 0&&(r=t[Ha]=new Set);var o=e+"__bubble";r.has(o)||(ms(t,e,2,!1),r.add(o))}function Ia(e,t,r){var o=0;t&&(o|=4),ms(r,e,o,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function kn(e){if(!e[po]){e[po]=!0,M.forEach(function(r){r!=="selectionchange"&&(gp.has(r)||Ia(r,!1,e),Ia(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,Ia("selectionchange",!1,t))}}function ms(e,t,r,o){switch(Il(t)){case 1:var a=Du;break;case 4:a=Lu;break;default:a=ja}r=a.bind(null,t,r,e),a=void 0,!fa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Fa(e,t,r,o,a){var i=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var d=o.stateNode.containerInfo;if(d===a||d.nodeType===8&&d.parentNode===a)break;if(l===4)for(l=o.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;d!==null;){if(l=hr(d),l===null)return;if(u=l.tag,u===5||u===6){o=i=l;continue e}d=d.parentNode}}o=o.return}yl(function(){var b=i,w=da(r),k=[];e:{var j=us.get(e);if(j!==void 0){var A=Na,I=e;switch(e){case"keypress":if(ao(r)===0)break e;case"keydown":case"keyup":A=Vu;break;case"focusin":I="focus",A=Ca;break;case"focusout":I="blur",A=Ca;break;case"beforeblur":case"afterblur":A=Ca;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Bl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Yu;break;case ls:case ss:case cs:A=Iu;break;case ds:A=Ju;break;case"scroll":A=_u;break;case"wheel":A=ep;break;case"copy":case"cut":case"paste":A=Ou;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Ul}var F=(t&4)!==0,Ue=!F&&e==="scroll",x=F?j!==null?j+"Capture":null:j;F=[];for(var h=b,g;h!==null;){g=h;var z=g.stateNode;if(g.tag===5&&z!==null&&(g=z,x!==null&&(z=on(h,x),z!=null&&F.push(Nn(h,z,g)))),Ue)break;h=h.return}0<F.length&&(j=new A(j,I,null,r,w),k.push({event:j,listeners:F}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",j&&r!==ca&&(I=r.relatedTarget||r.fromElement)&&(hr(I)||I[qt]))break e;if((A||j)&&(j=w.window===w?w:(j=w.ownerDocument)?j.defaultView||j.parentWindow:window,A?(I=r.relatedTarget||r.toElement,A=b,I=I?hr(I):null,I!==null&&(Ue=fr(I),I!==Ue||I.tag!==5&&I.tag!==6)&&(I=null)):(A=null,I=b),A!==I)){if(F=Bl,z="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(F=Ul,z="onPointerLeave",x="onPointerEnter",h="pointer"),Ue=A==null?j:Fr(A),g=I==null?j:Fr(I),j=new F(z,h+"leave",A,r,w),j.target=Ue,j.relatedTarget=g,z=null,hr(w)===b&&(F=new F(x,h+"enter",I,r,w),F.target=g,F.relatedTarget=Ue,z=F),Ue=z,A&&I)t:{for(F=A,x=I,h=0,g=F;g;g=qr(g))h++;for(g=0,z=x;z;z=qr(z))g++;for(;0<h-g;)F=qr(F),h--;for(;0<g-h;)x=qr(x),g--;for(;h--;){if(F===x||x!==null&&F===x.alternate)break t;F=qr(F),x=qr(x)}F=null}else F=null;A!==null&&xs(k,j,A,F,!1),I!==null&&Ue!==null&&xs(k,Ue,I,F,!0)}}e:{if(j=b?Fr(b):window,A=j.nodeName&&j.nodeName.toLowerCase(),A==="select"||A==="input"&&j.type==="file")var W=lp;else if(Kl(j))if(Xl)W=up;else{W=cp;var K=sp}else(A=j.nodeName)&&A.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(W=dp);if(W&&(W=W(e,b))){Yl(k,W,r,w);break e}K&&K(e,j,b),e==="focusout"&&(K=j._wrapperState)&&K.controlled&&j.type==="number"&&v(j,"number",j.value)}switch(K=b?Fr(b):window,e){case"focusin":(Kl(K)||K.contentEditable==="true")&&(Mr=K,_a=b,jn=null);break;case"focusout":jn=_a=Mr=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,as(k,r,w);break;case"selectionchange":if(hp)break;case"keydown":case"keyup":as(k,r,w)}var Y;if(Ea)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else Ar?Vl(e,r)&&(ne="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ne="onCompositionStart");ne&&($l&&r.locale!=="ko"&&(Ar||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Ar&&(Y=Fl()):(Kt=w,ka="value"in Kt?Kt.value:Kt.textContent,Ar=!0)),K=fo(b,ne),0<K.length&&(ne=new Wl(ne,e,null,r,w),k.push({event:ne,listeners:K}),Y?ne.data=Y:(Y=Gl(r),Y!==null&&(ne.data=Y)))),(Y=rp?np(e,r):op(e,r))&&(b=fo(b,"onBeforeInput"),0<b.length&&(w=new Wl("onBeforeInput","beforeinput",null,r,w),k.push({event:w,listeners:b}),w.data=Y))}hs(k,t)})}function Nn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function fo(e,t){for(var r=t+"Capture",o=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=on(e,r),i!=null&&o.unshift(Nn(e,i,a)),i=on(e,t),i!=null&&o.push(Nn(e,i,a))),e=e.return}return o}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xs(e,t,r,o,a){for(var i=t._reactName,l=[];r!==null&&r!==o;){var d=r,u=d.alternate,b=d.stateNode;if(u!==null&&u===o)break;d.tag===5&&b!==null&&(d=b,a?(u=on(r,i),u!=null&&l.unshift(Nn(r,u,d))):a||(u=on(r,i),u!=null&&l.push(Nn(r,u,d)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var vp=/\r\n?/g,bp=/\u0000|\uFFFD/g;function gs(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(bp,"")}function ho(e,t,r){if(t=gs(t),gs(e)!==t&&r)throw Error(p(425))}function mo(){}var Oa=null,Ba=null;function Wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,yp=typeof clearTimeout=="function"?clearTimeout:void 0,vs=typeof Promise=="function"?Promise:void 0,jp=typeof queueMicrotask=="function"?queueMicrotask:typeof vs<"u"?function(e){return vs.resolve(null).then(e).catch(wp)}:Ua;function wp(e){setTimeout(function(){throw e})}function $a(e,t){var r=t,o=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(o===0){e.removeChild(a),hn(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=a}while(r);hn(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),_t="__reactFiber$"+Ir,Sn="__reactProps$"+Ir,qt="__reactContainer$"+Ir,Ha="__reactEvents$"+Ir,kp="__reactListeners$"+Ir,Np="__reactHandles$"+Ir;function hr(e){var t=e[_t];if(t)return t;for(var r=e.parentNode;r;){if(t=r[qt]||r[_t]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=bs(e);e!==null;){if(r=e[_t])return r;e=bs(e)}return t}e=r,r=e.parentNode}return null}function zn(e){return e=e[_t]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function xo(e){return e[Sn]||null}var Qa=[],Or=-1;function Jt(e){return{current:e}}function De(e){0>Or||(e.current=Qa[Or],Qa[Or]=null,Or--)}function Ee(e,t){Or++,Qa[Or]=e.current,e.current=t}var Zt={},et=Jt(Zt),lt=Jt(!1),mr=Zt;function Br(e,t){var r=e.type.contextTypes;if(!r)return Zt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function st(e){return e=e.childContextTypes,e!=null}function go(){De(lt),De(et)}function ys(e,t,r){if(et.current!==Zt)throw Error(p(168));Ee(et,t),Ee(lt,r)}function js(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(p(108,ue(e)||"Unknown",a));return T({},r,o)}function vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,mr=et.current,Ee(et,e),Ee(lt,lt.current),!0}function ws(e,t,r){var o=e.stateNode;if(!o)throw Error(p(169));r?(e=js(e,t,mr),o.__reactInternalMemoizedMergedChildContext=e,De(lt),De(et),Ee(et,e)):De(lt),Ee(lt,r)}var It=null,bo=!1,Va=!1;function ks(e){It===null?It=[e]:It.push(e)}function Sp(e){bo=!0,ks(e)}function er(){if(!Va&&It!==null){Va=!0;var e=0,t=ke;try{var r=It;for(ke=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}It=null,bo=!1}catch(a){throw It!==null&&(It=It.slice(e+1)),Sl(ma,er),a}finally{ke=t,Va=!1}}return null}var Wr=[],Ur=0,yo=null,jo=0,vt=[],bt=0,xr=null,Ft=1,Ot="";function gr(e,t){Wr[Ur++]=jo,Wr[Ur++]=yo,yo=e,jo=t}function Ns(e,t,r){vt[bt++]=Ft,vt[bt++]=Ot,vt[bt++]=xr,xr=e;var o=Ft;e=Ot;var a=32-St(o)-1;o&=~(1<<a),r+=1;var i=32-St(t)+a;if(30<i){var l=a-a%5;i=(o&(1<<l)-1).toString(32),o>>=l,a-=l,Ft=1<<32-St(t)+a|r<<a|o,Ot=i+e}else Ft=1<<i|r<<a|o,Ot=e}function Ga(e){e.return!==null&&(gr(e,1),Ns(e,1,0))}function Ka(e){for(;e===yo;)yo=Wr[--Ur],Wr[Ur]=null,jo=Wr[--Ur],Wr[Ur]=null;for(;e===xr;)xr=vt[--bt],vt[bt]=null,Ot=vt[--bt],vt[bt]=null,Ft=vt[--bt],vt[bt]=null}var ht=null,mt=null,_e=!1,Ct=null;function Ss(e,t){var r=kt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function zs(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,mt=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=xr!==null?{id:Ft,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=kt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ht=e,mt=null,!0):!1;default:return!1}}function Ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(_e){var t=mt;if(t){var r=t;if(!zs(e,t)){if(Ya(e))throw Error(p(418));t=Xt(r.nextSibling);var o=ht;t&&zs(e,t)?Ss(o,r):(e.flags=e.flags&-4097|2,_e=!1,ht=e)}}else{if(Ya(e))throw Error(p(418));e.flags=e.flags&-4097|2,_e=!1,ht=e}}}function Cs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function wo(e){if(e!==ht)return!1;if(!_e)return Cs(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wa(e.type,e.memoizedProps)),t&&(t=mt)){if(Ya(e))throw Ps(),Error(p(418));for(;t;)Ss(e,t),t=Xt(t.nextSibling)}if(Cs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){mt=Xt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=ht?Xt(e.stateNode.nextSibling):null;return!0}function Ps(){for(var e=mt;e;)e=Xt(e.nextSibling)}function $r(){mt=ht=null,_e=!1}function Ja(e){Ct===null?Ct=[e]:Ct.push(e)}var zp=fe.ReactCurrentBatchConfig;function Cn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(p(309));var o=r.stateNode}if(!o)throw Error(p(147,e));var a=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var d=a.refs;l===null?delete d[i]:d[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(p(284));if(!r._owner)throw Error(p(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Es(e){var t=e._init;return t(e._payload)}function Ts(e){function t(x,h){if(e){var g=x.deletions;g===null?(x.deletions=[h],x.flags|=16):g.push(h)}}function r(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function o(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function a(x,h){return x=sr(x,h),x.index=0,x.sibling=null,x}function i(x,h,g){return x.index=g,e?(g=x.alternate,g!==null?(g=g.index,g<h?(x.flags|=2,h):g):(x.flags|=2,h)):(x.flags|=1048576,h)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function d(x,h,g,z){return h===null||h.tag!==6?(h=Ui(g,x.mode,z),h.return=x,h):(h=a(h,g),h.return=x,h)}function u(x,h,g,z){var W=g.type;return W===we?w(x,h,g.props.children,z,g.key):h!==null&&(h.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Pe&&Es(W)===h.type)?(z=a(h,g.props),z.ref=Cn(x,h,g),z.return=x,z):(z=Vo(g.type,g.key,g.props,null,x.mode,z),z.ref=Cn(x,h,g),z.return=x,z)}function b(x,h,g,z){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=$i(g,x.mode,z),h.return=x,h):(h=a(h,g.children||[]),h.return=x,h)}function w(x,h,g,z,W){return h===null||h.tag!==7?(h=Sr(g,x.mode,z,W),h.return=x,h):(h=a(h,g),h.return=x,h)}function k(x,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ui(""+h,x.mode,g),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xe:return g=Vo(h.type,h.key,h.props,null,x.mode,g),g.ref=Cn(x,null,h),g.return=x,g;case Ne:return h=$i(h,x.mode,g),h.return=x,h;case Pe:var z=h._init;return k(x,z(h._payload),g)}if(R(h)||U(h))return h=Sr(h,x.mode,g,null),h.return=x,h;ko(x,h)}return null}function j(x,h,g,z){var W=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return W!==null?null:d(x,h,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xe:return g.key===W?u(x,h,g,z):null;case Ne:return g.key===W?b(x,h,g,z):null;case Pe:return W=g._init,j(x,h,W(g._payload),z)}if(R(g)||U(g))return W!==null?null:w(x,h,g,z,null);ko(x,g)}return null}function A(x,h,g,z,W){if(typeof z=="string"&&z!==""||typeof z=="number")return x=x.get(g)||null,d(h,x,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case xe:return x=x.get(z.key===null?g:z.key)||null,u(h,x,z,W);case Ne:return x=x.get(z.key===null?g:z.key)||null,b(h,x,z,W);case Pe:var K=z._init;return A(x,h,g,K(z._payload),W)}if(R(z)||U(z))return x=x.get(g)||null,w(h,x,z,W,null);ko(h,z)}return null}function I(x,h,g,z){for(var W=null,K=null,Y=h,ne=h=0,Xe=null;Y!==null&&ne<g.length;ne++){Y.index>ne?(Xe=Y,Y=null):Xe=Y.sibling;var ye=j(x,Y,g[ne],z);if(ye===null){Y===null&&(Y=Xe);break}e&&Y&&ye.alternate===null&&t(x,Y),h=i(ye,h,ne),K===null?W=ye:K.sibling=ye,K=ye,Y=Xe}if(ne===g.length)return r(x,Y),_e&&gr(x,ne),W;if(Y===null){for(;ne<g.length;ne++)Y=k(x,g[ne],z),Y!==null&&(h=i(Y,h,ne),K===null?W=Y:K.sibling=Y,K=Y);return _e&&gr(x,ne),W}for(Y=o(x,Y);ne<g.length;ne++)Xe=A(Y,x,ne,g[ne],z),Xe!==null&&(e&&Xe.alternate!==null&&Y.delete(Xe.key===null?ne:Xe.key),h=i(Xe,h,ne),K===null?W=Xe:K.sibling=Xe,K=Xe);return e&&Y.forEach(function(cr){return t(x,cr)}),_e&&gr(x,ne),W}function F(x,h,g,z){var W=U(g);if(typeof W!="function")throw Error(p(150));if(g=W.call(g),g==null)throw Error(p(151));for(var K=W=null,Y=h,ne=h=0,Xe=null,ye=g.next();Y!==null&&!ye.done;ne++,ye=g.next()){Y.index>ne?(Xe=Y,Y=null):Xe=Y.sibling;var cr=j(x,Y,ye.value,z);if(cr===null){Y===null&&(Y=Xe);break}e&&Y&&cr.alternate===null&&t(x,Y),h=i(cr,h,ne),K===null?W=cr:K.sibling=cr,K=cr,Y=Xe}if(ye.done)return r(x,Y),_e&&gr(x,ne),W;if(Y===null){for(;!ye.done;ne++,ye=g.next())ye=k(x,ye.value,z),ye!==null&&(h=i(ye,h,ne),K===null?W=ye:K.sibling=ye,K=ye);return _e&&gr(x,ne),W}for(Y=o(x,Y);!ye.done;ne++,ye=g.next())ye=A(Y,x,ne,ye.value,z),ye!==null&&(e&&ye.alternate!==null&&Y.delete(ye.key===null?ne:ye.key),h=i(ye,h,ne),K===null?W=ye:K.sibling=ye,K=ye);return e&&Y.forEach(function(af){return t(x,af)}),_e&&gr(x,ne),W}function Ue(x,h,g,z){if(typeof g=="object"&&g!==null&&g.type===we&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xe:e:{for(var W=g.key,K=h;K!==null;){if(K.key===W){if(W=g.type,W===we){if(K.tag===7){r(x,K.sibling),h=a(K,g.props.children),h.return=x,x=h;break e}}else if(K.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Pe&&Es(W)===K.type){r(x,K.sibling),h=a(K,g.props),h.ref=Cn(x,K,g),h.return=x,x=h;break e}r(x,K);break}else t(x,K);K=K.sibling}g.type===we?(h=Sr(g.props.children,x.mode,z,g.key),h.return=x,x=h):(z=Vo(g.type,g.key,g.props,null,x.mode,z),z.ref=Cn(x,h,g),z.return=x,x=z)}return l(x);case Ne:e:{for(K=g.key;h!==null;){if(h.key===K)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(x,h.sibling),h=a(h,g.children||[]),h.return=x,x=h;break e}else{r(x,h);break}else t(x,h);h=h.sibling}h=$i(g,x.mode,z),h.return=x,x=h}return l(x);case Pe:return K=g._init,Ue(x,h,K(g._payload),z)}if(R(g))return I(x,h,g,z);if(U(g))return F(x,h,g,z);ko(x,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(x,h.sibling),h=a(h,g),h.return=x,x=h):(r(x,h),h=Ui(g,x.mode,z),h.return=x,x=h),l(x)):r(x,h)}return Ue}var Hr=Ts(!0),Ds=Ts(!1),No=Jt(null),So=null,Qr=null,Za=null;function ei(){Za=Qr=So=null}function ti(e){var t=No.current;De(No),e._currentValue=t}function ri(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Vr(e,t){So=e,Za=Qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ct=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Za!==e)if(e={context:e,memoizedValue:t,next:null},Qr===null){if(So===null)throw Error(p(308));Qr=e,So.dependencies={lanes:0,firstContext:e}}else Qr=Qr.next=e;return t}var vr=null;function ni(e){vr===null?vr=[e]:vr.push(e)}function Ls(e,t,r,o){var a=t.interleaved;return a===null?(r.next=r,ni(t)):(r.next=a.next,a.next=r),t.interleaved=r,Bt(e,o)}function Bt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var tr=!1;function oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _s(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rr(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ve&2)!==0){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,Bt(e,r)}return a=o.interleaved,a===null?(t.next=t,ni(o)):(t.next=a.next,a.next=t),o.interleaved=t,Bt(e,r)}function zo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,va(e,r)}}function As(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Co(e,t,r,o){var a=e.updateQueue;tr=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var u=d,b=u.next;u.next=null,l===null?i=b:l.next=b,l=u;var w=e.alternate;w!==null&&(w=w.updateQueue,d=w.lastBaseUpdate,d!==l&&(d===null?w.firstBaseUpdate=b:d.next=b,w.lastBaseUpdate=u))}if(i!==null){var k=a.baseState;l=0,w=b=u=null,d=i;do{var j=d.lane,A=d.eventTime;if((o&j)===j){w!==null&&(w=w.next={eventTime:A,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var I=e,F=d;switch(j=t,A=r,F.tag){case 1:if(I=F.payload,typeof I=="function"){k=I.call(A,k,j);break e}k=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=F.payload,j=typeof I=="function"?I.call(A,k,j):I,j==null)break e;k=T({},k,j);break e;case 2:tr=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,j=a.effects,j===null?a.effects=[d]:j.push(d))}else A={eventTime:A,lane:j,tag:d.tag,payload:d.payload,callback:d.callback,next:null},w===null?(b=w=A,u=k):w=w.next=A,l|=j;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;j=d,d=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);if(w===null&&(u=k),a.baseState=u,a.firstBaseUpdate=b,a.lastBaseUpdate=w,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);jr|=l,e.lanes=l,e.memoizedState=k}}function Ms(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=r,typeof a!="function")throw Error(p(191,a));a.call(o)}}}var Pn={},At=Jt(Pn),En=Jt(Pn),Tn=Jt(Pn);function br(e){if(e===Pn)throw Error(p(174));return e}function ai(e,t){switch(Ee(Tn,t),Ee(En,e),Ee(At,Pn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ia(t,e)}De(At),Ee(At,t)}function Gr(){De(At),De(En),De(Tn)}function Rs(e){br(Tn.current);var t=br(At.current),r=ia(t,e.type);t!==r&&(Ee(En,e),Ee(At,r))}function ii(e){En.current===e&&(De(At),De(En))}var Re=Jt(0);function Po(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var li=[];function si(){for(var e=0;e<li.length;e++)li[e]._workInProgressVersionPrimary=null;li.length=0}var Eo=fe.ReactCurrentDispatcher,ci=fe.ReactCurrentBatchConfig,yr=0,qe=null,Ve=null,Ke=null,To=!1,Dn=!1,Ln=0,Cp=0;function tt(){throw Error(p(321))}function di(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!zt(e[r],t[r]))return!1;return!0}function ui(e,t,r,o,a,i){if(yr=i,qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?Dp:Lp,e=r(o,a),Dn){i=0;do{if(Dn=!1,Ln=0,25<=i)throw Error(p(301));i+=1,Ke=Ve=null,t.updateQueue=null,Eo.current=_p,e=r(o,a)}while(Dn)}if(Eo.current=_o,t=Ve!==null&&Ve.next!==null,yr=0,Ke=Ve=qe=null,To=!1,t)throw Error(p(300));return e}function pi(){var e=Ln!==0;return Ln=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?qe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function jt(){if(Ve===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=Ke===null?qe.memoizedState:Ke.next;if(t!==null)Ke=t,Ve=e;else{if(e===null)throw Error(p(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ke===null?qe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function _n(e,t){return typeof t=="function"?t(e):t}function fi(e){var t=jt(),r=t.queue;if(r===null)throw Error(p(311));r.lastRenderedReducer=e;var o=Ve,a=o.baseQueue,i=r.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}o.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,o=o.baseState;var d=l=null,u=null,b=i;do{var w=b.lane;if((yr&w)===w)u!==null&&(u=u.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),o=b.hasEagerState?b.eagerState:e(o,b.action);else{var k={lane:w,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};u===null?(d=u=k,l=o):u=u.next=k,qe.lanes|=w,jr|=w}b=b.next}while(b!==null&&b!==i);u===null?l=o:u.next=d,zt(o,t.memoizedState)||(ct=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=u,r.lastRenderedState=o}if(e=r.interleaved,e!==null){a=e;do i=a.lane,qe.lanes|=i,jr|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function hi(e){var t=jt(),r=t.queue;if(r===null)throw Error(p(311));r.lastRenderedReducer=e;var o=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);zt(i,t.memoizedState)||(ct=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,o]}function qs(){}function Is(e,t){var r=qe,o=jt(),a=t(),i=!zt(o.memoizedState,a);if(i&&(o.memoizedState=a,ct=!0),o=o.queue,mi(Bs.bind(null,r,o,e),[e]),o.getSnapshot!==t||i||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,An(9,Os.bind(null,r,o,a,t),void 0,null),Ye===null)throw Error(p(349));(yr&30)!==0||Fs(r,t,a)}return a}function Fs(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Os(e,t,r,o){t.value=r,t.getSnapshot=o,Ws(t)&&Us(e)}function Bs(e,t,r){return r(function(){Ws(t)&&Us(e)})}function Ws(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!zt(e,r)}catch{return!0}}function Us(e){var t=Bt(e,1);t!==null&&Dt(t,e,1,-1)}function $s(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:e},t.queue=e,e=e.dispatch=Tp.bind(null,qe,e),[t.memoizedState,e]}function An(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function Hs(){return jt().memoizedState}function Do(e,t,r,o){var a=Mt();qe.flags|=e,a.memoizedState=An(1|t,r,void 0,o===void 0?null:o)}function Lo(e,t,r,o){var a=jt();o=o===void 0?null:o;var i=void 0;if(Ve!==null){var l=Ve.memoizedState;if(i=l.destroy,o!==null&&di(o,l.deps)){a.memoizedState=An(t,r,i,o);return}}qe.flags|=e,a.memoizedState=An(1|t,r,i,o)}function Qs(e,t){return Do(8390656,8,e,t)}function mi(e,t){return Lo(2048,8,e,t)}function Vs(e,t){return Lo(4,2,e,t)}function Gs(e,t){return Lo(4,4,e,t)}function Ks(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ys(e,t,r){return r=r!=null?r.concat([e]):null,Lo(4,4,Ks.bind(null,t,e),r)}function xi(){}function Xs(e,t){var r=jt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&di(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Js(e,t){var r=jt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&di(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Zs(e,t,r){return(yr&21)===0?(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=r):(zt(r,t)||(r=El(),qe.lanes|=r,jr|=r,e.baseState=!0),t)}function Pp(e,t){var r=ke;ke=r!==0&&4>r?r:4,e(!0);var o=ci.transition;ci.transition={};try{e(!1),t()}finally{ke=r,ci.transition=o}}function ec(){return jt().memoizedState}function Ep(e,t,r){var o=ir(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},tc(e))rc(t,r);else if(r=Ls(e,t,r,o),r!==null){var a=at();Dt(r,e,o,a),nc(r,t,o)}}function Tp(e,t,r){var o=ir(e),a={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(tc(e))rc(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,d=i(l,r);if(a.hasEagerState=!0,a.eagerState=d,zt(d,l)){var u=t.interleaved;u===null?(a.next=a,ni(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}r=Ls(e,t,a,o),r!==null&&(a=at(),Dt(r,e,o,a),nc(r,t,o))}}function tc(e){var t=e.alternate;return e===qe||t!==null&&t===qe}function rc(e,t){Dn=To=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function nc(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,va(e,r)}}var _o={readContext:yt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Dp={readContext:yt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Qs,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Do(4194308,4,Ks.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var r=Mt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Mt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Ep.bind(null,qe,e),[o.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:$s,useDebugValue:xi,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=$s(!1),t=e[0];return e=Pp.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=qe,a=Mt();if(_e){if(r===void 0)throw Error(p(407));r=r()}else{if(r=t(),Ye===null)throw Error(p(349));(yr&30)!==0||Fs(o,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Qs(Bs.bind(null,o,i,e),[e]),o.flags|=2048,An(9,Os.bind(null,o,i,r,t),void 0,null),r},useId:function(){var e=Mt(),t=Ye.identifierPrefix;if(_e){var r=Ot,o=Ft;r=(o&~(1<<32-St(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ln++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Cp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lp={readContext:yt,useCallback:Xs,useContext:yt,useEffect:mi,useImperativeHandle:Ys,useInsertionEffect:Vs,useLayoutEffect:Gs,useMemo:Js,useReducer:fi,useRef:Hs,useState:function(){return fi(_n)},useDebugValue:xi,useDeferredValue:function(e){var t=jt();return Zs(t,Ve.memoizedState,e)},useTransition:function(){var e=fi(_n)[0],t=jt().memoizedState;return[e,t]},useMutableSource:qs,useSyncExternalStore:Is,useId:ec,unstable_isNewReconciler:!1},_p={readContext:yt,useCallback:Xs,useContext:yt,useEffect:mi,useImperativeHandle:Ys,useInsertionEffect:Vs,useLayoutEffect:Gs,useMemo:Js,useReducer:hi,useRef:Hs,useState:function(){return hi(_n)},useDebugValue:xi,useDeferredValue:function(e){var t=jt();return Ve===null?t.memoizedState=e:Zs(t,Ve.memoizedState,e)},useTransition:function(){var e=hi(_n)[0],t=jt().memoizedState;return[e,t]},useMutableSource:qs,useSyncExternalStore:Is,useId:ec,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=T({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function gi(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:T({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ao={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=at(),a=ir(e),i=Wt(o,a);i.payload=t,r!=null&&(i.callback=r),t=rr(e,i,a),t!==null&&(Dt(t,e,a,o),zo(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=at(),a=ir(e),i=Wt(o,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=rr(e,i,a),t!==null&&(Dt(t,e,a,o),zo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=at(),o=ir(e),a=Wt(r,o);a.tag=2,t!=null&&(a.callback=t),t=rr(e,a,o),t!==null&&(Dt(t,e,o,r),zo(t,e,o))}};function oc(e,t,r,o,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,l):t.prototype&&t.prototype.isPureReactComponent?!yn(r,o)||!yn(a,i):!0}function ac(e,t,r){var o=!1,a=Zt,i=t.contextType;return typeof i=="object"&&i!==null?i=yt(i):(a=st(t)?mr:et.current,o=t.contextTypes,i=(o=o!=null)?Br(e,a):Zt),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ic(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function vi(e,t,r,o){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},oi(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=yt(i):(i=st(t)?mr:et.current,a.context=Br(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(gi(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ao.enqueueReplaceState(a,a.state,null),Co(e,r,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t){try{var r="",o=t;do r+=ie(o),o=o.return;while(o);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function bi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function yi(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ap=typeof WeakMap=="function"?WeakMap:Map;function lc(e,t,r){r=Wt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Bo||(Bo=!0,Mi=o),yi(e,t)},r}function sc(e,t,r){r=Wt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;r.payload=function(){return o(a)},r.callback=function(){yi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){yi(e,t),typeof o!="function"&&(or===null?or=new Set([this]):or.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function cc(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Ap;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(r)||(a.add(r),e=Gp.bind(null,e,t,r),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uc(e,t,r,o,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Wt(-1,1),t.tag=2,rr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Mp=fe.ReactCurrentOwner,ct=!1;function ot(e,t,r,o){t.child=e===null?Ds(t,null,r,o):Hr(t,e.child,r,o)}function pc(e,t,r,o,a){r=r.render;var i=t.ref;return Vr(t,a),o=ui(e,t,r,o,i,a),r=pi(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(_e&&r&&Ga(t),t.flags|=1,ot(e,t,o,a),t.child)}function fc(e,t,r,o,a){if(e===null){var i=r.type;return typeof i=="function"&&!Wi(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,hc(e,t,i,o,a)):(e=Vo(r.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:yn,r(l,o)&&e.ref===t.ref)return Ut(e,t,a)}return t.flags|=1,e=sr(i,o),e.ref=t.ref,e.return=t,t.child=e}function hc(e,t,r,o,a){if(e!==null){var i=e.memoizedProps;if(yn(i,o)&&e.ref===t.ref)if(ct=!1,t.pendingProps=o=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,Ut(e,t,a)}return ji(e,t,r,o,a)}function mc(e,t,r){var o=t.pendingProps,a=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Xr,xt),xt|=r;else{if((r&1073741824)===0)return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Xr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,Ee(Xr,xt),xt|=o}else i!==null?(o=i.baseLanes|r,t.memoizedState=null):o=r,Ee(Xr,xt),xt|=o;return ot(e,t,a,r),t.child}function xc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ji(e,t,r,o,a){var i=st(r)?mr:et.current;return i=Br(t,i),Vr(t,a),r=ui(e,t,r,o,i,a),o=pi(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ut(e,t,a)):(_e&&o&&Ga(t),t.flags|=1,ot(e,t,r,a),t.child)}function gc(e,t,r,o,a){if(st(r)){var i=!0;vo(t)}else i=!1;if(Vr(t,a),t.stateNode===null)Ro(e,t),ac(t,r,o),vi(t,r,o,a),o=!0;else if(e===null){var l=t.stateNode,d=t.memoizedProps;l.props=d;var u=l.context,b=r.contextType;typeof b=="object"&&b!==null?b=yt(b):(b=st(r)?mr:et.current,b=Br(t,b));var w=r.getDerivedStateFromProps,k=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function";k||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==o||u!==b)&&ic(t,l,o,b),tr=!1;var j=t.memoizedState;l.state=j,Co(t,o,l,a),u=t.memoizedState,d!==o||j!==u||lt.current||tr?(typeof w=="function"&&(gi(t,r,w,o),u=t.memoizedState),(d=tr||oc(t,r,d,o,j,u,b))?(k||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),l.props=o,l.state=u,l.context=b,o=d):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,_s(e,t),d=t.memoizedProps,b=t.type===t.elementType?d:Pt(t.type,d),l.props=b,k=t.pendingProps,j=l.context,u=r.contextType,typeof u=="object"&&u!==null?u=yt(u):(u=st(r)?mr:et.current,u=Br(t,u));var A=r.getDerivedStateFromProps;(w=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==k||j!==u)&&ic(t,l,o,u),tr=!1,j=t.memoizedState,l.state=j,Co(t,o,l,a);var I=t.memoizedState;d!==k||j!==I||lt.current||tr?(typeof A=="function"&&(gi(t,r,A,o),I=t.memoizedState),(b=tr||oc(t,r,b,o,j,I,u)||!1)?(w||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,I,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,I,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=I),l.props=o,l.state=I,l.context=u,o=b):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),o=!1)}return wi(e,t,r,o,i,a)}function wi(e,t,r,o,a,i){xc(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return a&&ws(t,r,!1),Ut(e,t,i);o=t.stateNode,Mp.current=t;var d=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=Hr(t,e.child,null,i),t.child=Hr(t,null,d,i)):ot(e,t,d,i),t.memoizedState=o.state,a&&ws(t,r,!0),t.child}function vc(e){var t=e.stateNode;t.pendingContext?ys(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ys(e,t.context,!1),ai(e,t.containerInfo)}function bc(e,t,r,o,a){return $r(),Ja(a),t.flags|=256,ot(e,t,r,o),t.child}var ki={dehydrated:null,treeContext:null,retryLane:0};function Ni(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,t,r){var o=t.pendingProps,a=Re.current,i=!1,l=(t.flags&128)!==0,d;if((d=l)||(d=e!==null&&e.memoizedState===null?!1:(a&2)!==0),d?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ee(Re,a&1),e===null)return Xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,i?(o=t.mode,i=t.child,l={mode:"hidden",children:l},(o&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Go(l,o,0,null),e=Sr(e,o,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ni(r),t.memoizedState=ki,e):Si(t,l));if(a=e.memoizedState,a!==null&&(d=a.dehydrated,d!==null))return Rp(e,t,l,o,d,a,r);if(i){i=o.fallback,l=t.mode,a=e.child,d=a.sibling;var u={mode:"hidden",children:o.children};return(l&1)===0&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=u,t.deletions=null):(o=sr(a,u),o.subtreeFlags=a.subtreeFlags&14680064),d!==null?i=sr(d,i):(i=Sr(i,l,r,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,l=e.child.memoizedState,l=l===null?Ni(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=ki,o}return i=e.child,e=i.sibling,o=sr(i,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Si(e,t){return t=Go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,r,o){return o!==null&&Ja(o),Hr(t,e.child,null,r),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,r,o,a,i,l){if(r)return t.flags&256?(t.flags&=-257,o=bi(Error(p(422))),Mo(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,a=t.mode,o=Go({mode:"visible",children:o.children},a,0,null),i=Sr(i,a,l,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,(t.mode&1)!==0&&Hr(t,e.child,null,l),t.child.memoizedState=Ni(l),t.memoizedState=ki,i);if((t.mode&1)===0)return Mo(e,t,l,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var d=o.dgst;return o=d,i=Error(p(419)),o=bi(i,o,void 0),Mo(e,t,l,o)}if(d=(l&e.childLanes)!==0,ct||d){if(o=Ye,o!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|l))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Bt(e,a),Dt(o,e,a,-1))}return Bi(),o=bi(Error(p(421))),Mo(e,t,l,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Kp.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,mt=Xt(a.nextSibling),ht=t,_e=!0,Ct=null,e!==null&&(vt[bt++]=Ft,vt[bt++]=Ot,vt[bt++]=xr,Ft=e.id,Ot=e.overflow,xr=t),t=Si(t,o.children),t.flags|=4096,t)}function jc(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ri(e.return,t,r)}function zi(e,t,r,o,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=a)}function wc(e,t,r){var o=t.pendingProps,a=o.revealOrder,i=o.tail;if(ot(e,t,o.children,r),o=Re.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,r,t);else if(e.tag===19)jc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ee(Re,o),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Po(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),zi(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Po(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}zi(t,!0,r,null,i);break;case"together":zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),jr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,r=sr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=sr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qp(e,t,r){switch(t.tag){case 3:vc(t),$r();break;case 5:Rs(t);break;case 1:st(t.type)&&vo(t);break;case 4:ai(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;Ee(No,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ee(Re,Re.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?yc(e,t,r):(Ee(Re,Re.current&1),e=Ut(e,t,r),e!==null?e.sibling:null);Ee(Re,Re.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return wc(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(Re,Re.current),o)break;return null;case 22:case 23:return t.lanes=0,mc(e,t,r)}return Ut(e,t,r)}var kc,Ci,Nc,Sc;kc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ci=function(){},Nc=function(e,t,r,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,br(At.current);var i=null;switch(r){case"input":a=D(e,a),o=D(e,o),i=[];break;case"select":a=T({},a,{value:void 0}),o=T({},o,{value:void 0}),i=[];break;case"textarea":a=Me(e,a),o=Me(e,o),i=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=mo)}la(r,o);var l;r=null;for(b in a)if(!o.hasOwnProperty(b)&&a.hasOwnProperty(b)&&a[b]!=null)if(b==="style"){var d=a[b];for(l in d)d.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(O.hasOwnProperty(b)?i||(i=[]):(i=i||[]).push(b,null));for(b in o){var u=o[b];if(d=a!=null?a[b]:void 0,o.hasOwnProperty(b)&&u!==d&&(u!=null||d!=null))if(b==="style")if(d){for(l in d)!d.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in u)u.hasOwnProperty(l)&&d[l]!==u[l]&&(r||(r={}),r[l]=u[l])}else r||(i||(i=[]),i.push(b,r)),r=u;else b==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,d=d?d.__html:void 0,u!=null&&d!==u&&(i=i||[]).push(b,u)):b==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(b,""+u):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(O.hasOwnProperty(b)?(u!=null&&b==="onScroll"&&Te("scroll",e),i||d===u||(i=[])):(i=i||[]).push(b,u))}r&&(i=i||[]).push("style",r);var b=i;(t.updateQueue=b)&&(t.flags|=4)}},Sc=function(e,t,r,o){r!==o&&(t.flags|=4)};function Mn(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Ip(e,t,r){var o=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return st(t.type)&&go(),rt(t),null;case 3:return o=t.stateNode,Gr(),De(lt),De(et),si(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Ii(Ct),Ct=null))),Ci(e,t),rt(t),null;case 5:ii(t);var a=br(Tn.current);if(r=t.type,e!==null&&t.stateNode!=null)Nc(e,t,r,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(p(166));return rt(t),null}if(e=br(At.current),wo(t)){o=t.stateNode,r=t.type;var i=t.memoizedProps;switch(o[_t]=t,o[Sn]=i,e=(t.mode&1)!==0,r){case"dialog":Te("cancel",o),Te("close",o);break;case"iframe":case"object":case"embed":Te("load",o);break;case"video":case"audio":for(a=0;a<wn.length;a++)Te(wn[a],o);break;case"source":Te("error",o);break;case"img":case"image":case"link":Te("error",o),Te("load",o);break;case"details":Te("toggle",o);break;case"input":C(o,i),Te("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Te("invalid",o);break;case"textarea":it(o,i),Te("invalid",o)}la(r,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var d=i[l];l==="children"?typeof d=="string"?o.textContent!==d&&(i.suppressHydrationWarning!==!0&&ho(o.textContent,d,e),a=["children",d]):typeof d=="number"&&o.textContent!==""+d&&(i.suppressHydrationWarning!==!0&&ho(o.textContent,d,e),a=["children",""+d]):O.hasOwnProperty(l)&&d!=null&&l==="onScroll"&&Te("scroll",o)}switch(r){case"input":re(o),He(o,i,!0);break;case"textarea":re(o),dl(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=mo)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ul(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(r,{is:o.is}):(e=l.createElement(r),r==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,r),e[_t]=t,e[Sn]=o,kc(e,t,!1,!1),t.stateNode=e;e:{switch(l=sa(r,o),r){case"dialog":Te("cancel",e),Te("close",e),a=o;break;case"iframe":case"object":case"embed":Te("load",e),a=o;break;case"video":case"audio":for(a=0;a<wn.length;a++)Te(wn[a],e);a=o;break;case"source":Te("error",e),a=o;break;case"img":case"image":case"link":Te("error",e),Te("load",e),a=o;break;case"details":Te("toggle",e),a=o;break;case"input":C(e,o),a=D(e,o),Te("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=T({},o,{value:void 0}),Te("invalid",e);break;case"textarea":it(e,o),a=Me(e,o),Te("invalid",e);break;default:a=o}la(r,a),d=a;for(i in d)if(d.hasOwnProperty(i)){var u=d[i];i==="style"?hl(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pl(e,u)):i==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&rn(e,u):typeof u=="number"&&rn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(O.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Te("scroll",e):u!=null&&Le(e,i,u,l))}switch(r){case"input":re(e),He(e,o,!1);break;case"textarea":re(e),dl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+$(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?de(e,!!o.multiple,i,!1):o.defaultValue!=null&&de(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=mo)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Sc(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(p(166));if(r=br(Tn.current),br(At.current),wo(t)){if(o=t.stateNode,r=t.memoizedProps,o[_t]=t,(i=o.nodeValue!==r)&&(e=ht,e!==null))switch(e.tag){case 3:ho(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ho(o.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[_t]=t,t.stateNode=o}return rt(t),null;case 13:if(De(Re),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&mt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ps(),$r(),t.flags|=98560,i=!1;else if(i=wo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(p(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p(317));i[_t]=t}else $r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),i=!1}else Ct!==null&&(Ii(Ct),Ct=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Re.current&1)!==0?Ge===0&&(Ge=3):Bi())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return Gr(),Ci(e,t),e===null&&kn(t.stateNode.containerInfo),rt(t),null;case 10:return ti(t.type._context),rt(t),null;case 17:return st(t.type)&&go(),rt(t),null;case 19:if(De(Re),i=t.memoizedState,i===null)return rt(t),null;if(o=(t.flags&128)!==0,l=i.rendering,l===null)if(o)Mn(i,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Po(e),l!==null){for(t.flags|=128,Mn(i,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)i=r,e=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ee(Re,Re.current&1|2),t.child}e=e.sibling}i.tail!==null&&We()>Jr&&(t.flags|=128,o=!0,Mn(i,!1),t.lanes=4194304)}else{if(!o)if(e=Po(l),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Mn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!_e)return rt(t),null}else 2*We()-i.renderingStartTime>Jr&&r!==1073741824&&(t.flags|=128,o=!0,Mn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=We(),t.sibling=null,r=Re.current,Ee(Re,o?r&1|2:r&1),t):(rt(t),null);case 22:case 23:return Oi(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(xt&1073741824)!==0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(p(156,t.tag))}function Fp(e,t){switch(Ka(t),t.tag){case 1:return st(t.type)&&go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),De(lt),De(et),si(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ii(t),null;case 13:if(De(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Re),null;case 4:return Gr(),null;case 10:return ti(t.type._context),null;case 22:case 23:return Oi(),null;case 24:return null;default:return null}}var qo=!1,nt=!1,Op=typeof WeakSet=="function"?WeakSet:Set,q=null;function Yr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Fe(e,t,o)}else r.current=null}function Pi(e,t,r){try{r()}catch(o){Fe(e,t,o)}}var zc=!1;function Bp(e,t){if(Oa=ro,e=os(),La(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var a=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,d=-1,u=-1,b=0,w=0,k=e,j=null;t:for(;;){for(var A;k!==r||a!==0&&k.nodeType!==3||(d=l+a),k!==i||o!==0&&k.nodeType!==3||(u=l+o),k.nodeType===3&&(l+=k.nodeValue.length),(A=k.firstChild)!==null;)j=k,k=A;for(;;){if(k===e)break t;if(j===r&&++b===a&&(d=l),j===i&&++w===o&&(u=l),(A=k.nextSibling)!==null)break;k=j,j=k.parentNode}k=A}r=d===-1||u===-1?null:{start:d,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ba={focusedElem:e,selectionRange:r},ro=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var I=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var F=I.memoizedProps,Ue=I.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?F:Pt(t.type,F),Ue);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(z){Fe(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return I=zc,zc=!1,I}function Rn(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Pi(t,r,i)}a=a.next}while(a!==o)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Ei(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Cc(e){var t=e.alternate;t!==null&&(e.alternate=null,Cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[Sn],delete t[Ha],delete t[kp],delete t[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pc(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ti(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=mo));else if(o!==4&&(e=e.child,e!==null))for(Ti(e,t,r),e=e.sibling;e!==null;)Ti(e,t,r),e=e.sibling}function Di(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Di(e,t,r),e=e.sibling;e!==null;)Di(e,t,r),e=e.sibling}var Je=null,Et=!1;function nr(e,t,r){for(r=r.child;r!==null;)Tc(e,t,r),r=r.sibling}function Tc(e,t,r){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Yn,r)}catch{}switch(r.tag){case 5:nt||Yr(r,t);case 6:var o=Je,a=Et;Je=null,nr(e,t,r),Je=o,Et=a,Je!==null&&(Et?(e=Je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Je.removeChild(r.stateNode));break;case 18:Je!==null&&(Et?(e=Je,r=r.stateNode,e.nodeType===8?$a(e.parentNode,r):e.nodeType===1&&$a(e,r),hn(e)):$a(Je,r.stateNode));break;case 4:o=Je,a=Et,Je=r.stateNode.containerInfo,Et=!0,nr(e,t,r),Je=o,Et=a;break;case 0:case 11:case 14:case 15:if(!nt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Pi(r,t,l),a=a.next}while(a!==o)}nr(e,t,r);break;case 1:if(!nt&&(Yr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(d){Fe(r,t,d)}nr(e,t,r);break;case 21:nr(e,t,r);break;case 22:r.mode&1?(nt=(o=nt)||r.memoizedState!==null,nr(e,t,r),nt=o):nr(e,t,r);break;default:nr(e,t,r)}}function Dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Op),t.forEach(function(o){var a=Yp.bind(null,e,o);r.has(o)||(r.add(o),o.then(a,a))})}}function Tt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var a=r[o];try{var i=e,l=t,d=l;e:for(;d!==null;){switch(d.tag){case 5:Je=d.stateNode,Et=!1;break e;case 3:Je=d.stateNode.containerInfo,Et=!0;break e;case 4:Je=d.stateNode.containerInfo,Et=!0;break e}d=d.return}if(Je===null)throw Error(p(160));Tc(i,l,a),Je=null,Et=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(b){Fe(a,t,b)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lc(t,e),t=t.sibling}function Lc(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Rt(e),o&4){try{Rn(3,e,e.return),Io(3,e)}catch(F){Fe(e,e.return,F)}try{Rn(5,e,e.return)}catch(F){Fe(e,e.return,F)}}break;case 1:Tt(t,e),Rt(e),o&512&&r!==null&&Yr(r,r.return);break;case 5:if(Tt(t,e),Rt(e),o&512&&r!==null&&Yr(r,r.return),e.flags&32){var a=e.stateNode;try{rn(a,"")}catch(F){Fe(e,e.return,F)}}if(o&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,d=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{d==="input"&&i.type==="radio"&&i.name!=null&&P(a,i),sa(d,l);var b=sa(d,i);for(l=0;l<u.length;l+=2){var w=u[l],k=u[l+1];w==="style"?hl(a,k):w==="dangerouslySetInnerHTML"?pl(a,k):w==="children"?rn(a,k):Le(a,w,k,b)}switch(d){case"input":ge(a,i);break;case"textarea":cl(a,i);break;case"select":var j=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?de(a,!!i.multiple,A,!1):j!==!!i.multiple&&(i.defaultValue!=null?de(a,!!i.multiple,i.defaultValue,!0):de(a,!!i.multiple,i.multiple?[]:"",!1))}a[Sn]=i}catch(F){Fe(e,e.return,F)}}break;case 6:if(Tt(t,e),Rt(e),o&4){if(e.stateNode===null)throw Error(p(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(F){Fe(e,e.return,F)}}break;case 3:if(Tt(t,e),Rt(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{hn(t.containerInfo)}catch(F){Fe(e,e.return,F)}break;case 4:Tt(t,e),Rt(e);break;case 13:Tt(t,e),Rt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ai=We())),o&4&&Dc(e);break;case 22:if(w=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(b=nt)||w,Tt(t,e),nt=b):Tt(t,e),Rt(e),o&8192){if(b=e.memoizedState!==null,(e.stateNode.isHidden=b)&&!w&&(e.mode&1)!==0)for(q=e,w=e.child;w!==null;){for(k=q=w;q!==null;){switch(j=q,A=j.child,j.tag){case 0:case 11:case 14:case 15:Rn(4,j,j.return);break;case 1:Yr(j,j.return);var I=j.stateNode;if(typeof I.componentWillUnmount=="function"){o=j,r=j.return;try{t=o,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(F){Fe(o,r,F)}}break;case 5:Yr(j,j.return);break;case 22:if(j.memoizedState!==null){Mc(k);continue}}A!==null?(A.return=j,q=A):Mc(k)}w=w.sibling}e:for(w=null,k=e;;){if(k.tag===5){if(w===null){w=k;try{a=k.stateNode,b?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(d=k.stateNode,u=k.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,d.style.display=fl("display",l))}catch(F){Fe(e,e.return,F)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=b?"":k.memoizedProps}catch(F){Fe(e,e.return,F)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Tt(t,e),Rt(e),o&4&&Dc(e);break;case 21:break;default:Tt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Pc(r)){var o=r;break e}r=r.return}throw Error(p(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(rn(a,""),o.flags&=-33);var i=Ec(e);Di(e,i,a);break;case 3:case 4:var l=o.stateNode.containerInfo,d=Ec(e);Ti(e,d,l);break;default:throw Error(p(161))}}catch(u){Fe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wp(e,t,r){q=e,_c(e)}function _c(e,t,r){for(var o=(e.mode&1)!==0;q!==null;){var a=q,i=a.child;if(a.tag===22&&o){var l=a.memoizedState!==null||qo;if(!l){var d=a.alternate,u=d!==null&&d.memoizedState!==null||nt;d=qo;var b=nt;if(qo=l,(nt=u)&&!b)for(q=a;q!==null;)l=q,u=l.child,l.tag===22&&l.memoizedState!==null?Rc(a):u!==null?(u.return=l,q=u):Rc(a);for(;i!==null;)q=i,_c(i),i=i.sibling;q=a,qo=d,nt=b}Ac(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,q=i):Ac(e)}}function Ac(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||Io(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!nt)if(r===null)o.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Pt(t.type,r.memoizedProps);o.componentDidUpdate(a,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ms(t,i,o);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ms(t,l,r)}break;case 5:var d=t.stateNode;if(r===null&&t.flags&4){r=d;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var b=t.alternate;if(b!==null){var w=b.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&hn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}nt||t.flags&512&&Ei(t)}catch(j){Fe(t,t.return,j)}}if(t===e){q=null;break}if(r=t.sibling,r!==null){r.return=t.return,q=r;break}q=t.return}}function Mc(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,q=r;break}q=t.return}}function Rc(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Io(4,t)}catch(u){Fe(t,r,u)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(u){Fe(t,a,u)}}var i=t.return;try{Ei(t)}catch(u){Fe(t,i,u)}break;case 5:var l=t.return;try{Ei(t)}catch(u){Fe(t,l,u)}}}catch(u){Fe(t,t.return,u)}if(t===e){q=null;break}var d=t.sibling;if(d!==null){d.return=t.return,q=d;break}q=t.return}}var Up=Math.ceil,Fo=fe.ReactCurrentDispatcher,Li=fe.ReactCurrentOwner,wt=fe.ReactCurrentBatchConfig,ve=0,Ye=null,Qe=null,Ze=0,xt=0,Xr=Jt(0),Ge=0,qn=null,jr=0,Oo=0,_i=0,In=null,dt=null,Ai=0,Jr=1/0,$t=null,Bo=!1,Mi=null,or=null,Wo=!1,ar=null,Uo=0,Fn=0,Ri=null,$o=-1,Ho=0;function at(){return(ve&6)!==0?We():$o!==-1?$o:$o=We()}function ir(e){return(e.mode&1)===0?1:(ve&2)!==0&&Ze!==0?Ze&-Ze:zp.transition!==null?(Ho===0&&(Ho=El()),Ho):(e=ke,e!==0||(e=window.event,e=e===void 0?16:Il(e.type)),e)}function Dt(e,t,r,o){if(50<Fn)throw Fn=0,Ri=null,Error(p(185));cn(e,r,o),((ve&2)===0||e!==Ye)&&(e===Ye&&((ve&2)===0&&(Oo|=r),Ge===4&&lr(e,Ze)),ut(e,o),r===1&&ve===0&&(t.mode&1)===0&&(Jr=We()+500,bo&&er()))}function ut(e,t){var r=e.callbackNode;zu(e,t);var o=Zn(e,e===Ye?Ze:0);if(o===0)r!==null&&zl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&zl(r),t===1)e.tag===0?Sp(Ic.bind(null,e)):ks(Ic.bind(null,e)),jp(function(){(ve&6)===0&&er()}),r=null;else{switch(Tl(o)){case 1:r=ma;break;case 4:r=Cl;break;case 16:r=Kn;break;case 536870912:r=Pl;break;default:r=Kn}r=Qc(r,qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function qc(e,t){if($o=-1,Ho=0,(ve&6)!==0)throw Error(p(327));var r=e.callbackNode;if(Zr()&&e.callbackNode!==r)return null;var o=Zn(e,e===Ye?Ze:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Qo(e,o);else{t=o;var a=ve;ve|=2;var i=Oc();(Ye!==e||Ze!==t)&&($t=null,Jr=We()+500,kr(e,t));do try{Qp();break}catch(d){Fc(e,d)}while(!0);ei(),Fo.current=i,ve=a,Qe!==null?t=0:(Ye=null,Ze=0,t=Ge)}if(t!==0){if(t===2&&(a=xa(e),a!==0&&(o=a,t=qi(e,a))),t===1)throw r=qn,kr(e,0),lr(e,o),ut(e,We()),r;if(t===6)lr(e,o);else{if(a=e.current.alternate,(o&30)===0&&!$p(a)&&(t=Qo(e,o),t===2&&(i=xa(e),i!==0&&(o=i,t=qi(e,i))),t===1))throw r=qn,kr(e,0),lr(e,o),ut(e,We()),r;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(p(345));case 2:Nr(e,dt,$t);break;case 3:if(lr(e,o),(o&130023424)===o&&(t=Ai+500-We(),10<t)){if(Zn(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){at(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ua(Nr.bind(null,e,dt,$t),t);break}Nr(e,dt,$t);break;case 4:if(lr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var l=31-St(o);i=1<<l,l=t[l],l>a&&(a=l),o&=~i}if(o=a,o=We()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Up(o/1960))-o,10<o){e.timeoutHandle=Ua(Nr.bind(null,e,dt,$t),o);break}Nr(e,dt,$t);break;case 5:Nr(e,dt,$t);break;default:throw Error(p(329))}}}return ut(e,We()),e.callbackNode===r?qc.bind(null,e):null}function qi(e,t){var r=In;return e.current.memoizedState.isDehydrated&&(kr(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=dt,dt=r,t!==null&&Ii(t)),e}function Ii(e){dt===null?dt=e:dt.push.apply(dt,e)}function $p(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var a=r[o],i=a.getSnapshot;a=a.value;try{if(!zt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lr(e,t){for(t&=~_i,t&=~Oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-St(t),o=1<<r;e[r]=-1,t&=~o}}function Ic(e){if((ve&6)!==0)throw Error(p(327));Zr();var t=Zn(e,0);if((t&1)===0)return ut(e,We()),null;var r=Qo(e,t);if(e.tag!==0&&r===2){var o=xa(e);o!==0&&(t=o,r=qi(e,o))}if(r===1)throw r=qn,kr(e,0),lr(e,t),ut(e,We()),r;if(r===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nr(e,dt,$t),ut(e,We()),null}function Fi(e,t){var r=ve;ve|=1;try{return e(t)}finally{ve=r,ve===0&&(Jr=We()+500,bo&&er())}}function wr(e){ar!==null&&ar.tag===0&&(ve&6)===0&&Zr();var t=ve;ve|=1;var r=wt.transition,o=ke;try{if(wt.transition=null,ke=1,e)return e()}finally{ke=o,wt.transition=r,ve=t,(ve&6)===0&&er()}}function Oi(){xt=Xr.current,De(Xr)}function kr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,yp(r)),Qe!==null)for(r=Qe.return;r!==null;){var o=r;switch(Ka(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&go();break;case 3:Gr(),De(lt),De(et),si();break;case 5:ii(o);break;case 4:Gr();break;case 13:De(Re);break;case 19:De(Re);break;case 10:ti(o.type._context);break;case 22:case 23:Oi()}r=r.return}if(Ye=e,Qe=e=sr(e.current,null),Ze=xt=t,Ge=0,qn=null,_i=Oo=jr=0,dt=In=null,vr!==null){for(t=0;t<vr.length;t++)if(r=vr[t],o=r.interleaved,o!==null){r.interleaved=null;var a=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=a,o.next=l}r.pending=o}vr=null}return e}function Fc(e,t){do{var r=Qe;try{if(ei(),Eo.current=_o,To){for(var o=qe.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}To=!1}if(yr=0,Ke=Ve=qe=null,Dn=!1,Ln=0,Li.current=null,r===null||r.return===null){Ge=1,qn=t,Qe=null;break}e:{var i=e,l=r.return,d=r,u=t;if(t=Ze,d.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var b=u,w=d,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var j=w.alternate;j?(w.updateQueue=j.updateQueue,w.memoizedState=j.memoizedState,w.lanes=j.lanes):(w.updateQueue=null,w.memoizedState=null)}var A=dc(l);if(A!==null){A.flags&=-257,uc(A,l,d,i,t),A.mode&1&&cc(i,b,t),t=A,u=b;var I=t.updateQueue;if(I===null){var F=new Set;F.add(u),t.updateQueue=F}else I.add(u);break e}else{if((t&1)===0){cc(i,b,t),Bi();break e}u=Error(p(426))}}else if(_e&&d.mode&1){var Ue=dc(l);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),uc(Ue,l,d,i,t),Ja(Kr(u,d));break e}}i=u=Kr(u,d),Ge!==4&&(Ge=2),In===null?In=[i]:In.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=lc(i,u,t);As(i,x);break e;case 1:d=u;var h=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(or===null||!or.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var z=sc(i,d,t);As(i,z);break e}}i=i.return}while(i!==null)}Wc(r)}catch(W){t=W,Qe===r&&r!==null&&(Qe=r=r.return);continue}break}while(!0)}function Oc(){var e=Fo.current;return Fo.current=_o,e===null?_o:e}function Bi(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ye===null||(jr&268435455)===0&&(Oo&268435455)===0||lr(Ye,Ze)}function Qo(e,t){var r=ve;ve|=2;var o=Oc();(Ye!==e||Ze!==t)&&($t=null,kr(e,t));do try{Hp();break}catch(a){Fc(e,a)}while(!0);if(ei(),ve=r,Fo.current=o,Qe!==null)throw Error(p(261));return Ye=null,Ze=0,Ge}function Hp(){for(;Qe!==null;)Bc(Qe)}function Qp(){for(;Qe!==null&&!gu();)Bc(Qe)}function Bc(e){var t=Hc(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Wc(e):Qe=t,Li.current=null}function Wc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Ip(r,t,xt),r!==null){Qe=r;return}}else{if(r=Fp(r,t),r!==null){r.flags&=32767,Qe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Qe=null;return}}if(t=t.sibling,t!==null){Qe=t;return}Qe=t=e}while(t!==null);Ge===0&&(Ge=5)}function Nr(e,t,r){var o=ke,a=wt.transition;try{wt.transition=null,ke=1,Vp(e,t,r,o)}finally{wt.transition=a,ke=o}return null}function Vp(e,t,r,o){do Zr();while(ar!==null);if((ve&6)!==0)throw Error(p(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Cu(e,i),e===Ye&&(Qe=Ye=null,Ze=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Wo||(Wo=!0,Qc(Kn,function(){return Zr(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=wt.transition,wt.transition=null;var l=ke;ke=1;var d=ve;ve|=4,Li.current=null,Bp(e,r),Lc(r,e),fp(Ba),ro=!!Oa,Ba=Oa=null,e.current=r,Wp(r),vu(),ve=d,ke=l,wt.transition=i}else e.current=r;if(Wo&&(Wo=!1,ar=e,Uo=a),i=e.pendingLanes,i===0&&(or=null),ju(r.stateNode),ut(e,We()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],o(a.value,{componentStack:a.stack,digest:a.digest});if(Bo)throw Bo=!1,e=Mi,Mi=null,e;return(Uo&1)!==0&&e.tag!==0&&Zr(),i=e.pendingLanes,(i&1)!==0?e===Ri?Fn++:(Fn=0,Ri=e):Fn=0,er(),null}function Zr(){if(ar!==null){var e=Tl(Uo),t=wt.transition,r=ke;try{if(wt.transition=null,ke=16>e?16:e,ar===null)var o=!1;else{if(e=ar,ar=null,Uo=0,(ve&6)!==0)throw Error(p(331));var a=ve;for(ve|=4,q=e.current;q!==null;){var i=q,l=i.child;if((q.flags&16)!==0){var d=i.deletions;if(d!==null){for(var u=0;u<d.length;u++){var b=d[u];for(q=b;q!==null;){var w=q;switch(w.tag){case 0:case 11:case 15:Rn(8,w,i)}var k=w.child;if(k!==null)k.return=w,q=k;else for(;q!==null;){w=q;var j=w.sibling,A=w.return;if(Cc(w),w===b){q=null;break}if(j!==null){j.return=A,q=j;break}q=A}}}var I=i.alternate;if(I!==null){var F=I.child;if(F!==null){I.child=null;do{var Ue=F.sibling;F.sibling=null,F=Ue}while(F!==null)}}q=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,q=l;else e:for(;q!==null;){if(i=q,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Rn(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,q=x;break e}q=i.return}}var h=e.current;for(q=h;q!==null;){l=q;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,q=g;else e:for(l=h;q!==null;){if(d=q,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Io(9,d)}}catch(W){Fe(d,d.return,W)}if(d===l){q=null;break e}var z=d.sibling;if(z!==null){z.return=d.return,q=z;break e}q=d.return}}if(ve=a,er(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Yn,e)}catch{}o=!0}return o}finally{ke=r,wt.transition=t}}return!1}function Uc(e,t,r){t=Kr(r,t),t=lc(e,t,1),e=rr(e,t,1),t=at(),e!==null&&(cn(e,1,t),ut(e,t))}function Fe(e,t,r){if(e.tag===3)Uc(e,e,r);else for(;t!==null;){if(t.tag===3){Uc(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(or===null||!or.has(o))){e=Kr(r,e),e=sc(t,e,1),t=rr(t,e,1),e=at(),t!==null&&(cn(t,1,e),ut(t,e));break}}t=t.return}}function Gp(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&r,Ye===e&&(Ze&r)===r&&(Ge===4||Ge===3&&(Ze&130023424)===Ze&&500>We()-Ai?kr(e,0):_i|=r),ut(e,t)}function $c(e,t){t===0&&((e.mode&1)===0?t=1:(t=Jn,Jn<<=1,(Jn&130023424)===0&&(Jn=4194304)));var r=at();e=Bt(e,t),e!==null&&(cn(e,t,r),ut(e,r))}function Kp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),$c(e,r)}function Yp(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(p(314))}o!==null&&o.delete(t),$c(e,r)}var Hc;Hc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)ct=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ct=!1,qp(e,t,r);ct=(e.flags&131072)!==0}else ct=!1,_e&&(t.flags&1048576)!==0&&Ns(t,jo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ro(e,t),e=t.pendingProps;var a=Br(t,et.current);Vr(t,r),a=ui(null,t,o,e,a,r);var i=pi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(o)?(i=!0,vo(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,oi(t),a.updater=Ao,t.stateNode=a,a._reactInternals=t,vi(t,o,e,r),t=wi(null,t,o,!0,i,r)):(t.tag=0,_e&&i&&Ga(t),ot(null,t,a,r),t=t.child),t;case 16:o=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Jp(o),e=Pt(o,e),a){case 0:t=ji(null,t,o,e,r);break e;case 1:t=gc(null,t,o,e,r);break e;case 11:t=pc(null,t,o,e,r);break e;case 14:t=fc(null,t,o,Pt(o.type,e),r);break e}throw Error(p(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pt(o,a),ji(e,t,o,a,r);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pt(o,a),gc(e,t,o,a,r);case 3:e:{if(vc(t),e===null)throw Error(p(387));o=t.pendingProps,i=t.memoizedState,a=i.element,_s(e,t),Co(t,o,null,r);var l=t.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Kr(Error(p(423)),t),t=bc(e,t,o,r,a);break e}else if(o!==a){a=Kr(Error(p(424)),t),t=bc(e,t,o,r,a);break e}else for(mt=Xt(t.stateNode.containerInfo.firstChild),ht=t,_e=!0,Ct=null,r=Ds(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if($r(),o===a){t=Ut(e,t,r);break e}ot(e,t,o,r)}t=t.child}return t;case 5:return Rs(t),e===null&&Xa(t),o=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,Wa(o,a)?l=null:i!==null&&Wa(o,i)&&(t.flags|=32),xc(e,t),ot(e,t,l,r),t.child;case 6:return e===null&&Xa(t),null;case 13:return yc(e,t,r);case 4:return ai(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Hr(t,null,o,r):ot(e,t,o,r),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pt(o,a),pc(e,t,o,a,r);case 7:return ot(e,t,t.pendingProps,r),t.child;case 8:return ot(e,t,t.pendingProps.children,r),t.child;case 12:return ot(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ee(No,o._currentValue),o._currentValue=l,i!==null)if(zt(i.value,l)){if(i.children===a.children&&!lt.current){t=Ut(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var d=i.dependencies;if(d!==null){l=i.child;for(var u=d.firstContext;u!==null;){if(u.context===o){if(i.tag===1){u=Wt(-1,r&-r),u.tag=2;var b=i.updateQueue;if(b!==null){b=b.shared;var w=b.pending;w===null?u.next=u:(u.next=w.next,w.next=u),b.pending=u}}i.lanes|=r,u=i.alternate,u!==null&&(u.lanes|=r),ri(i.return,r,t),d.lanes|=r;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(p(341));l.lanes|=r,d=l.alternate,d!==null&&(d.lanes|=r),ri(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ot(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Vr(t,r),a=yt(a),o=o(a),t.flags|=1,ot(e,t,o,r),t.child;case 14:return o=t.type,a=Pt(o,t.pendingProps),a=Pt(o.type,a),fc(e,t,o,a,r);case 15:return hc(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pt(o,a),Ro(e,t),t.tag=1,st(o)?(e=!0,vo(t)):e=!1,Vr(t,r),ac(t,o,a),vi(t,o,a,r),wi(null,t,o,!0,e,r);case 19:return wc(e,t,r);case 22:return mc(e,t,r)}throw Error(p(156,t.tag))};function Qc(e,t){return Sl(e,t)}function Xp(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,r,o){return new Xp(e,t,r,o)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jp(e){if(typeof e=="function")return Wi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Be)return 11;if(e===Ie)return 14}return 2}function sr(e,t){var r=e.alternate;return r===null?(r=kt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Vo(e,t,r,o,a,i){var l=2;if(o=e,typeof e=="function")Wi(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case we:return Sr(r.children,a,i,t);case Se:l=8,a|=8;break;case Oe:return e=kt(12,r,t,a|2),e.elementType=Oe,e.lanes=i,e;case Ae:return e=kt(13,r,t,a),e.elementType=Ae,e.lanes=i,e;case Ce:return e=kt(19,r,t,a),e.elementType=Ce,e.lanes=i,e;case he:return Go(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ze:l=10;break e;case $e:l=9;break e;case Be:l=11;break e;case Ie:l=14;break e;case Pe:l=16,o=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return t=kt(l,r,t,a),t.elementType=e,t.type=o,t.lanes=i,t}function Sr(e,t,r,o){return e=kt(7,e,o,t),e.lanes=r,e}function Go(e,t,r,o){return e=kt(22,e,o,t),e.elementType=he,e.lanes=r,e.stateNode={isHidden:!1},e}function Ui(e,t,r){return e=kt(6,e,null,t),e.lanes=r,e}function $i(e,t,r){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zp(e,t,r,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Hi(e,t,r,o,a,i,l,d,u){return e=new Zp(e,t,r,d,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=kt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},oi(i),e}function ef(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Vc(e){if(!e)return Zt;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(p(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(p(171))}if(e.tag===1){var r=e.type;if(st(r))return js(e,r,t)}return t}function Gc(e,t,r,o,a,i,l,d,u){return e=Hi(r,o,!0,e,a,i,l,d,u),e.context=Vc(null),r=e.current,o=at(),a=ir(r),i=Wt(o,a),i.callback=t??null,rr(r,i,a),e.current.lanes=a,cn(e,a,o),ut(e,o),e}function Ko(e,t,r,o){var a=t.current,i=at(),l=ir(a);return r=Vc(r),t.context===null?t.context=r:t.pendingContext=r,t=Wt(i,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=rr(a,t,l),e!==null&&(Dt(e,a,l,i),zo(e,a,l)),l}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Qi(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function tf(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vi(e){this._internalRoot=e}Xo.prototype.render=Vi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));Ko(e,t,null,null)},Xo.prototype.unmount=Vi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wr(function(){Ko(null,e,null,null)}),t[qt]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=_l();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Gt.length&&t!==0&&t<Gt[r].priority;r++);Gt.splice(r,0,e),r===0&&Rl(e)}};function Gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function rf(e,t,r,o,a){if(a){if(typeof o=="function"){var i=o;o=function(){var b=Yo(l);i.call(b)}}var l=Gc(t,o,e,0,null,!1,!1,"",Xc);return e._reactRootContainer=l,e[qt]=l.current,kn(e.nodeType===8?e.parentNode:e),wr(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var d=o;o=function(){var b=Yo(u);d.call(b)}}var u=Hi(e,0,!1,null,null,!1,!1,"",Xc);return e._reactRootContainer=u,e[qt]=u.current,kn(e.nodeType===8?e.parentNode:e),wr(function(){Ko(t,u,r,o)}),u}function Zo(e,t,r,o,a){var i=r._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var d=a;a=function(){var u=Yo(l);d.call(u)}}Ko(t,l,e,a)}else l=rf(r,t,e,a,o);return Yo(l)}Dl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=sn(t.pendingLanes);r!==0&&(va(t,r|1),ut(t,We()),(ve&6)===0&&(Jr=We()+500,er()))}break;case 13:wr(function(){var o=Bt(e,1);if(o!==null){var a=at();Dt(o,e,1,a)}}),Qi(e,1)}},ba=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var r=at();Dt(t,e,134217728,r)}Qi(e,134217728)}},Ll=function(e){if(e.tag===13){var t=ir(e),r=Bt(e,t);if(r!==null){var o=at();Dt(r,e,t,o)}Qi(e,t)}},_l=function(){return ke},Al=function(e,t){var r=ke;try{return ke=e,t()}finally{ke=r}},ua=function(e,t,r){switch(t){case"input":if(ge(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var a=xo(o);if(!a)throw Error(p(90));B(o),ge(o,a)}}}break;case"textarea":cl(e,r);break;case"select":t=r.value,t!=null&&de(e,!!r.multiple,t,!1)}},vl=Fi,bl=wr;var nf={usingClientEntryPoint:!1,Events:[zn,Fr,xo,xl,gl,Fi]},On={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},of={bundleType:On.bundleType,version:On.version,rendererPackageName:On.rendererPackageName,rendererConfig:On.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kl(e),e===null?null:e.stateNode},findFiberByHostInstance:On.findFiberByHostInstance||tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{Yn=ea.inject(of),Lt=ea}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nf,pt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gi(t))throw Error(p(200));return ef(e,t,null,r)},pt.createRoot=function(e,t){if(!Gi(e))throw Error(p(299));var r=!1,o="",a=Yc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Hi(e,1,!1,null,null,r,!1,o,a),e[qt]=t.current,kn(e.nodeType===8?e.parentNode:e),new Vi(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=kl(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return wr(e)},pt.hydrate=function(e,t,r){if(!Jo(t))throw Error(p(200));return Zo(null,e,t,!0,r)},pt.hydrateRoot=function(e,t,r){if(!Gi(e))throw Error(p(405));var o=r!=null&&r.hydratedSources||null,a=!1,i="",l=Yc;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Gc(t,null,e,1,r??null,a,!1,i,l),e[qt]=t.current,kn(e),o)for(e=0;e<o.length;e++)r=o[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Xo(t)},pt.render=function(e,t,r){if(!Jo(t))throw Error(p(200));return Zo(null,e,t,!1,r)},pt.unmountComponentAtNode=function(e){if(!Jo(e))throw Error(p(40));return e._reactRootContainer?(wr(function(){Zo(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1},pt.unstable_batchedUpdates=Fi,pt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!Jo(r))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return Zo(e,t,r,!1,o)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var ad;function hf(){if(ad)return Xi.exports;ad=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Xi.exports=ff(),Xi.exports}var id;function mf(){if(id)return ta;id=1;var s=hf();return ta.createRoot=s.createRoot,ta.hydrateRoot=s.hydrateRoot,ta}var xf=mf();const gf=hd(xf);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function bf(s,c,p=[]){if(c==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:vf(s),size:24,node:c,...p.length>0?{aliases:p}:{}}}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=s=>{let c="",p=!1;for(const M of s){if(M==="-"||M==="_"||M<=" "){p=c.length>0;continue}c.length===0?c+=M.toLowerCase():c+=p?M.toUpperCase():M,p=!1}return c};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=s=>{const c=yf(s);return c.charAt(0).toUpperCase()+c.slice(1)};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=(...s)=>s.filter((c,p,M)=>!!c&&c.trim()!==""&&M.indexOf(c)===p).join(" ").trim();/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function el(s){return s!=null}function wf(s,c={}){var Q,me;const p=c.attributeNames??{},M=H=>p[H]??H,O=s.size??s.width??zr.width,E=s.size??s.height??zr.height,J=((Q=s.aliases)==null?void 0:Q.filter(H=>typeof H=="string"&&H.trim()!=="").map(H=>`lucide-${H}`))??[],_=[...s.name?[`lucide-${s.name}`]:[],...J],ee=((me=c.className)==null?void 0:me.split(" ").filter(Boolean))??[],te=c.includeDefaultClasses===!1?nl(...ee):nl("lucide",..._,...ee),oe=c.absoluteStrokeWidth?Number(c.strokeWidth??zr["stroke-width"])*Number(s.size??s.width??zr.width)/Number(c.size??c.width??zr.width):c.strokeWidth??zr["stroke-width"];return["svg",{...Object.entries(zr).reduce((H,[V,X])=>(H[M(V)]=X,H),{}),..."color"in c&&c.color&&{[M("stroke")]:c.color},..."size"in c&&el(c.size)&&{[M("width")]:c.size,[M("height")]:c.size},..."width"in c&&el(c.width)&&{[M("width")]:c.width},..."height"in c&&el(c.height)&&{[M("height")]:c.height},[M("stroke-width")]:oe,...te&&{[M("class")]:te},[M("viewBox")]:`0 0 ${O} ${E}`,...c.hasA11yProp===!1?{[M("aria-hidden")]:"true"}:{},..."attributes"in c&&c.attributes},s.node.map(H=>{const[V,X,je]=H,be=c.nonScalingStroke?{[M("vector-effect")]:"non-scaling-stroke",...X}:X;return je?[V,be,je]:[V,be]})]}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function kf(s,c={}){return wf(s,{...c,attributeNames:{...c.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=s=>{for(const c in s)if(c.startsWith("aria-")||c==="role"||c==="title")return!0;return!1},Sf=L.createContext({}),zf=()=>L.useContext(Sf),Cf=L.forwardRef(({color:s,size:c,width:p,height:M,strokeWidth:O,absoluteStrokeWidth:E,nonScalingStroke:J,className:_="",children:ee,iconNode:te=[],icon:oe={node:te,aliases:[],size:24},...ae},Q)=>{const{size:me=24,strokeWidth:H=2,absoluteStrokeWidth:V=!1,nonScalingStroke:X=!1,color:je="currentColor",className:be=""}=zf()??{},Le=!!ee||Nf(ae),[fe,xe,Ne=[]]=kf(oe,{color:s??je,width:p??c??me,height:M??c??me,strokeWidth:O??H,absoluteStrokeWidth:E??V,nonScalingStroke:J??X,className:nl(be,_),hasA11yProp:Le,attributes:ae});return L.createElement(fe,{ref:Q,...xe},[...Ne.map(([we,Se])=>L.createElement(we,Se)),...Array.isArray(ee)?ee:[ee]])});/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function le(s,c=[],p=[]){const M=typeof s=="string"?bf(s,c,p):s,O=L.forwardRef(({className:E,...J},_)=>L.createElement(Cf,{ref:_,icon:M,className:E,...J}));return M.name&&(O.displayName=jf(M.name)),O}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};md.node;const xd=le(md);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};gd.node;const ol=le(gd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};vd.node;const Pf=le(vd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd={name:"briefcase-business",size:24,node:[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};bd.node;const yd=le(bd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd={name:"building-complex",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],aliases:["building-2"]};jd.node;const ur=le(jd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd={name:"calculator",size:24,node:[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]};wd.node;const Ef=le(wd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd={name:"calendar-check",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]};kd.node;const tl=le(kd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};Nd.node;const Tf=le(Nd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};Sd.node;const al=le(Sd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};zd.node;const Df=le(zd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Cd.node;const aa=le(Cd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd={name:"circle-user-round",size:24,node:[["path",{d:"M17.925 20.056a6 6 0 0 0-11.851.001",key:"z69sun"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["user-circle-2"]};Pd.node;const Lf=le(Pd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};Ed.node;const _f=le(Ed);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]};Td.node;const Af=le(Td);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Dd.node;const Mf=le(Dd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld={name:"dollar-sign",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6",key:"pwzcbw"}]]};Ld.node;const ld=le(Ld);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};_d.node;const $n=le(_d);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad={name:"file-image",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]};Ad.node;const na=le(Ad);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Md.node;const gt=le(Md);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]};Rd.node;const Cr=le(Rd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd={name:"hard-hat",size:24,node:[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]]};qd.node;const tn=le(qd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};Id.node;const sd=le(Id);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};Fd.node;const rl=le(Fd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od={name:"indian-rupee",size:24,node:[["path",{d:"m14 20-8-8h4c5.333 0 5.333-8 0-8",key:"cvo5tb"}],["path",{d:"M6 4h12",key:"1x2ag7"}],["path",{d:"M6 8h12",key:"6g4wlu"}]]};Od.node;const il=le(Od);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]};Bd.node;const Rf=le(Bd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Wd.node;const qf=le(Wd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud={name:"leaf",size:24,node:[["path",{d:"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",key:"1wjnjv"}],["path",{d:"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13",key:"c1ejpn"}]]};Ud.node;const cd=le(Ud);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};$d.node;const If=le($d);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};Hd.node;const sl=le(Hd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Qd.node;const Ff=le(Qd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd={name:"percent",size:24,node:[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]};Vd.node;const Of=le(Vd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};Gd.node;const Bf=le(Gd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Kd.node;const Nt=le(Kd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};Yd.node;const Xd=le(Yd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd={name:"receipt-text",size:24,node:[["path",{d:"M13 16H8",key:"wsln4y"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",key:"ycz6yz"}]]};Jd.node;const oa=le(Jd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd={name:"receipt",size:24,node:[["path",{d:"M12 17V7",key:"pyj7ub"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",key:"1elt7d"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",key:"ycz6yz"}]]};Zd.node;const Pr=le(Zd);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};eu.node;const Wf=le(eu);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};tu.node;const ru=le(tu);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};nu.node;const en=le(nu);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};ou.node;const ra=le(ou);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],aliases:["user-2"]};au.node;const Uf=le(au);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};iu.node;const Wn=le(iu);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu={name:"wallet",size:24,node:[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]};lu.node;const dd=le(lu);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};su.node;const pr=le(su),Er="https://nextgen-iptu.onrender.com",ud={en:{appName:"NEXTGEN",appSubtitle:"ECOSITE MANAGER",workspace:"WORKSPACE",dashboardNav:"Dashboard",quotations:"Quotations",billingInvoices:"Billing & Invoices",laborManagement:"Labour Management",projectHandling:"Project Handling",logout:"Logout",buildToday:"Build Today",betterTomorrow:"For a Better Tomorrow",logoutAlert:"Logged out successfully",topPlan:"Plan",topTrack:"Track",topBuild:"Build",topGrow:"Grow",siteManager:"Site Manager",workspaceSub:"EcoSite Workspace",yourWorkspace:"YOUR WORKSPACE",welcomeBack:"Welcome back,",welcomeDesc:"Manage your construction projects, billing, quotations and labour operations — all in one place.",workOrganized:"Work organized",buildSustainably:"Build sustainably",getThingsDone:"GET THINGS DONE",exploreModules:"Explore Modules",modulesLabel:"MODULES",openModule:"Open module",billingTitle:"Billing & Invoices",billingDesc:"Create and manage bills, payments and expense history.",quotationsTitle:"Quotations",quotationsDesc:"Prepare quotations, manage offers and track status.",labourTitle:"Labour Management",labourDesc:"Manage workers, attendance and wage records.",projectsTitle:"Project Handling",projectsDesc:"Manage construction sites, work and project progress.",projectWorkspace:"Project Workspace",projectWorkspaceSub:"Keep your construction work organized",openProjects:"Open projects",workspaceBannerTitle:"Everything for your site, in one workspace",workspaceBannerDesc:"Open Project Handling to add and manage construction projects. Use the modules above to manage quotations, bills and labour records.",quickActions:"Quick Actions",quickActionsSub:"Shortcuts to your daily work",newBill:"New Bill",newQuotation:"New Quotation",addLabour:"Add Labour",openProjects:"Open Projects",totalInvoices:"Total Invoices",totalBilling:"Total Billing",gstInvoices:"GST Invoices",footerTitle:"NextGen EcoSite Manager",footerSlogan:"Build smarter. Build greener.",navHome:"Home",navProjects:"Projects",navLabour:"Labour",navBilling:"Billing",invoicesTitle:"Invoices & Billing",invoicesSub:"Manage project billing, GST and client invoices.",createNewInvoice:"Create New Invoice",invoiceNo:"Invoice No.",clientName:"Client Name",billingType:"Billing Type",date:"Date",finalAmount:"Final Amount",action:"Action",loadingInvoices:"Loading invoices...",noInvoicesYet:"No invoices yet",createFirstInvoice:"Create your first invoice to get started.",invoiceRecords:"Invoice Records",allGeneratedInvoices:"All generated project invoices",viewInvoice:"View Invoice",viewPdf:"View PDF",printSavePdf:"Print / Save PDF",cancel:"Cancel",saveGenerate:"Save & Generate Invoice",withGst:"With GST",withoutGst:"Without GST",gstRate:"GST Rate",laborPageTitle:"Labor Management & Payment Reports",laborPageSub:"Manage all registered site workers, track attendance, and process payouts",addNewLabor:"Add New Labor",laborDirectory:"Labor Directory",calendarAttendance:"Calendar Attendance",wageReports:"Wage Reports",dailyCharges:"Daily Charges",perDay:"/ day",viewDocs:"View Docs",selectAttendanceDate:"Select Attendance Date (dd/mm/yyyy)",workerRosterFor:"Worker Roster for",present:"Present",halfDay:"Half Day",absent:"Absent",notMarked:"Not Marked",past7DaysMatrix:"Past 7 Days Attendance Matrix",worker:"Worker",totalDaysCount:"Total Days Count",totalPaymentDue:"Total Payment Due",days:"Days",loadingProjects:"Loading your projects...",constructionWorkspace:"CONSTRUCTION WORKSPACE",projectManagementTitle:"Project Management",projectManagementSub:"Manage construction projects, site assets, engineering documents and material expenses.",createProject:"Create Project",noProjectsYet:"No projects created yet",noProjectsDesc:"Start organizing your construction work by creating your first project.",createFirstProject:"Create Your First Project",activeWorkspace:"ACTIVE WORKSPACE",addProject:"Add Project",delete:"Delete",inProgress:"In Progress",started:"Started",na:"N/A",locationNotSpecified:"Location not specified",clientNotSpecified:"Client not specified",projectBadge:"PROJECT",projectAssets:"PROJECT ASSETS",uploadedFiles:"Uploaded files",sitePhotosStat:"SITE PHOTOS",progressImages:"Progress images",documentsStat:"DOCUMENTS",projectRecords:"Project records",materialExpenses:"MATERIAL EXPENSES",billsRecorded:"bills recorded",projectResources:"PROJECT RESOURCES",projectFilesRecords:"Project Files & Records",projectFilesRecordsSub:"Everything related to this construction project, organized in one place.",uploadMaterialBill:"Upload Material Bill",uploadDocument:"Upload Document",uploadAsset:"Upload Asset",tabPhotosLabel:"Site Photos",tabPhotosDesc:"Construction progress",tabPlansLabel:"Floor Plans",tabPlansDesc:"Drawings and layouts",tabGalleryLabel:"Project Gallery",tabGalleryDesc:"Project visuals",tabDocsLabel:"Documents",tabDocsDesc:"Engineering files",tabBillsLabel:"Material Bills",tabBillsDesc:"Purchase records",filesCount:"FILES",documentsCount:"DOCUMENTS",noFilesUploadedYet:"No files uploaded yet",uploadFirstFilePrompt:"Upload your first {type} to keep your project records organized.",uploadFirstFile:"Upload First File",preview:"Preview",floorPlanBadge:"FLOOR PLAN",galleryBadge:"GALLERY",sitePhotoBadge:"SITE PHOTO",untitledAsset:"Untitled Asset",uploadedOn:"Uploaded",engineeringDocuments:"Engineering Documents",engineeringDocumentsSub:"Approved municipal and engineering project files.",noDocumentsAvailable:"No documents available",noDocumentsDesc:"Store drawings, approvals, PDFs and other engineering documents here.",fileUnavailable:"File",fileSizeUnavailable:"File size unavailable",view:"View",deleteDocument:"Delete document",expenseTracking:"EXPENSE TRACKING",materialPurchaseRecords:"Material Purchase Records",materialPurchaseRecordsSub:"Track construction material purchases and vendor bills.",totalRecordedExpense:"TOTAL RECORDED EXPENSE",invoicesCount:"invoices",invoiceNumber:"Invoice Number",vendor:"Vendor",category:"Category",amountCol:"Amount",actionCol:"Action",noMaterialBillsRecorded:"No material bills recorded",uploadedBillsAppearHere:"Uploaded purchase bills will appear here.",generalVendor:"General Vendor",generalCategory:"General",deleteBill:"Delete bill",createNewProjectTitle:"Create New Project",createNewProjectSub:"Add a new construction workspace.",projectNameLabel:"PROJECT NAME *",projectNamePlaceholder:"e.g. Skyline Heights Tower B",siteLocationLabel:"SITE LOCATION",siteLocationSample:"e.g. Baramati MIDC",clientNameLabel:"CLIENT NAME",clientNameSample:"e.g. Rameshwar Builders",creating:"Creating...",uploadSiteDocument:"Upload Site Document",uploadRecordTo:"Add a new record to {project}.",vendorSupplierLabel:"VENDOR / SUPPLIER NAME *",vendorSample:"e.g. UltraTech Cement Ltd",materialCategoryLabel:"MATERIAL CATEGORY",catRawMaterials:"Raw Materials (Cement/Steel)",catElectricalPlumbing:"Electrical & Plumbing",catFinishingTiles:"Finishing & Tiles",catLaborEquipment:"Labor & Equipment",billAmountLabel:"BILL AMOUNT (₹) *",assetTitleLabel:"ASSET TITLE / DESCRIPTION *",assetTitleSample:"e.g. Second Floor Slab Casting",selectFileFromDevice:"SELECT FILE FROM DEVICE",fileSelectedSuccess:"File selected successfully",chooseFileToUpload:"Choose a file to upload",docFileTypes:"PDF, DOC and DOCX files",imageFileTypes:"Select an image from your device",uploadPreviewAlt:"Upload preview",previewReady:"Preview ready",fileReadyToSave:"File selected and ready to save.",uploadAndSave:"Upload & Save",projectPreviewAlt:"Project preview",alertEnterProjectName:"Please enter a project name.",alertFailedCreateProject:"Failed to create project",alertBackendConnect:"Could not connect to the backend server.",confirmDeleteProject:"Are you sure you want to delete this entire project?",alertUnableDeleteProject:"Unable to delete project.",alertUnableSaveFiles:"Unable to save project files.",alertUnableDeleteItem:"Unable to delete item.",defaultLocationBaramati:"Baramati MIDC",defaultClientName:"Client Name",pdfType:"PDF",imageType:"Image",quotationsRecords:"Quotation Records",allQuotationsSaved:"All quotations saved in your database",searchPlaceholder:"Search quotation, client or project...",quotationId:"Quotation ID",project:"Project",type:"Type",noQuotationsFound:"No Quotations Found",tryAnotherKeyword:"Try searching with another keyword.",createFirstQuotationPrompt:"Create your first project quotation to get started.",prepareProfessionalEstimate:"Prepare a professional project estimate",quotationBillingType:"Quotation Billing Type",gstRatePercent:"GST Rate (%)",clientProjectDetails:"Client & Project Details",enterClientName:"Enter client name",enterProjectName:"Enter project name",siteLocationPlaceholder:"Site location",addWorkDetailsSub:"Add construction work details, quantity and rates.",workDescription:"Work Description",ratePlaceholder:"Rate (₹)",addLineItem:"Add Line Item",cancel:"Cancel",saving:"Saving...",saveGenerateQuotation:"Save & Generate Quotation",quotationsPageTitle:"Quotations & Estimates",quotationsPageSub:"Create, manage and track your project quotations",createNewQuotation:"Create New Quotation",totalQuotations:"Total Quotations",gstQuotations:"GST Quotations",totalQuotationValue:"Total Quotation Value",quotationsRecords:"Quotation Records",allGeneratedQuotations:"All generated project quotations",quotationNo:"Quotation No.",projectName:"Project Name",clientName:"Client Name",date:"Date",amount:"Amount",action:"Action",viewQuotation:"View Quotation",loadingQuotations:"Loading quotations...",noQuotationsYet:"No quotations yet",createFirstQuotation:"Create your first quotation to get started.",backToQuotations:"Back to quotations",printSavePdf:"Print / Save PDF",projectBudgetSummary:"PROJECT BUDGET SUMMARY",quotationLabel:"QUOTATION",quotationNumber:"QUOTATION NUMBER",addressSiteLocation:"ADDRESS / SITE LOCATION",layoutDetails:"LAYOUT DETAILS",builderContractorName:"BUILDER / CONTRACTOR NAME",descriptionOfWork:"DESCRIPTION OF WORK",srNo:"Sr. No.",unit:"Unit",qty:"QTY",rate:"RATE",totalAmount:"TOTAL AMOUNT",finalTotalAmount:"FINAL TOTAL AMOUNT",termsAndConditions:"TERMS & CONDITIONS",authorizedSignatory:"Authorized Signatory",laborPageTitle:"Labor Management & Payment Reports",laborPageSub:"Manage workers, attendance and payment records",addNewLabor:"Add New Labor",totalWorkers:"Total Workers",registeredLaborMembers:"Registered labor members",presentToday:"Present Today",halfDayAttendance:"half-day attendance",dailyWageTotal:"Daily Wage Total",combinedDailyWages:"Combined daily wages",totalEarnings:"Total Earnings",savedAttendanceRecords:"Based on saved attendance records",laborDirectory:"Labor Directory",attendance:"Attendance",wageReports:"Wage Reports",searchWorkers:"Search workers...",loadingLaborRecords:"Loading labor records...",noMatchingWorkers:"No matching workers found",noWorkerProfiles:"No worker profiles found",searchWorkerHint:"Try searching with another name, role or mobile number.",addFirstWorkerHint:"Add your first worker to start managing your labor records.",notProvided:"Not provided",locationNotProvided:"Location not provided",worker:"Worker",dailyCharges:"Daily Charges",perDay:"/ day",viewProfile:"View Profile",attendanceManagement:"Attendance Management",markAttendanceHint:"Mark daily worker attendance and review the last 7 days",workers:"Workers",selectAttendanceDate:"Select Attendance Date",present:"Present",halfDay:"Half Day",absent:"Absent",workerAttendanceRoster:"Worker Attendance Roster",noWorkersAvailable:"No workers available",addWorkersBeforeAttendance:"Add workers before marking attendance.",dailyWage:"Daily Wage",past7DaysAttendance:"Past 7 Days Attendance Matrix",selectStatusToUpdate:"Select a status to update attendance",notMarked:"Not Marked",noAttendanceRecords:"No attendance records available.",laborPaymentReports:"Labor Payment Reports",paymentCalculationHint:"Payment calculated from Present (1x) and Half Day (0.5x) attendance records",wageSummary:"Wage Summary",registeredWorkers:"Registered Workers",totalPaymentDue:"Total Payment Due",laborName:"Labor Name",totalDaysCount:"Total Days Count",noLaborRegistered:"No labor members registered.",days:"Days",workerVerificationProfile:"Worker Verification Profile",personalInfoDocuments:"Personal information and uploaded documents",profile:"Profile",profilePhoto:"Profile Photo",panCard:"PAN Card",aadhaarCard:"Aadhaar Card",closeProfile:"Close Profile",addNewLaborWorker:"Add New Labor Worker",enterWorkerDetails:"Enter worker details and upload verification documents",fullName:"Full Name",mobileNumber:"Mobile Number",locationNative:"Location / Native",roleTrade:"Role / Trade",mason:"Mason",electrician:"Electrician",plumber:"Plumber",helper:"Helper",barBender:"Bar Bender",dailyWageRequired:"Daily Wage (₹)",panCardPhoto:"PAN Card Photo",aadhaarCardPhoto:"Aadhaar Card Photo",uploaded:"Uploaded",cancel:"Cancel",saveWorker:"Save Worker",viewDocument:"View Document",notUploaded:"Not uploaded",exampleName:"e.g. Ramesh Kumar",unableToSaveWorker:"Unable to save worker: ",unableToSaveAttendance:"Unable to save attendance: "},mr:{appName:"नेक्स्टजेन",appSubtitle:"इकोसाईट मॅनेजर",workspace:"वर्कस्पेस",dashboardNav:"डॅशबोर्ड",quotations:"कोटेशन्स",billingInvoices:"बिलिंग आणि इनव्हॉइस",laborManagement:"कामगार व्यवस्थापन",projectHandling:"प्रकल्प व्यवस्थापन",logout:"बाहेर पडा",buildToday:"आज बांधकाम करा",betterTomorrow:"उद्याच्या चांगल्या भविष्यासाठी",logoutAlert:"यशस्वीरित्या बाहेर पडला",topPlan:"नियोजन",topTrack:"ट्रॅक",topBuild:"बांधकाम",topGrow:"वाढ",siteManager:"साईट मॅनेजर",workspaceSub:"इकोसाईट वर्कस्पेस",yourWorkspace:"तुमचे कार्यक्षेत्र",welcomeBack:"पुन्हा स्वागत आहे,",welcomeDesc:"तुमचे बांधकाम प्रकल्प, बिलिंग, कोटेशन आणि कामगार कामकाज एकाच ठिकाणी व्यवस्थापित करा.",workOrganized:"संघटित काम",buildSustainably:"शाश्वत बांधकाम",getThingsDone:"कामे पूर्ण करा",exploreModules:"मॉड्यूल्स तपासा",modulesLabel:"मॉड्यूल्स",openModule:"मॉड्यूल उघडा",billingTitle:"बिलिंग आणि इनव्हॉइस",billingDesc:"बिले, पेमेंट आणि खर्चाचा इतिहास तयार करा आणि व्यवस्थापित करा.",quotationsTitle:"कोटेशन्स",quotationsDesc:"कोटेशन तयार करा, ऑफर्स व्यवस्थापित करा आणि स्थिती ट्रॅक करा.",labourTitle:"कामगार व्यवस्थापन",labourDesc:"कामगार, हजेरी आणि मजुरीच्या नोंदी व्यवस्थापित करा.",projectsTitle:"प्रकल्प हाताळणी",projectsDesc:"बांधकाम साईट्स, काम आणि प्रकल्पाची प्रगती व्यवस्थापित करा.",projectWorkspace:"प्रकल्प कार्यक्षेत्र",projectWorkspaceSub:"तुमचे बांधकाम कार्य व्यवस्थित ठेवा",openProjects:"प्रकल्प उघडा",workspaceBannerTitle:"तुमच्या साईटसाठी सर्व काही, एकाच वर्कस्पेसमध्ये",workspaceBannerDesc:"बांधकाम प्रकल्प जोडण्यासाठी आणि व्यवस्थापित करण्यासाठी प्रकल्प हाताळणी उघडा. कोटेशन, बिले आणि कामगार नोंदी व्यवस्थापित करण्यासाठीवरील मॉड्यूल्स वापरा.",quickActions:"त्वरित कृती",quickActionsSub:"तुमच्या दैनंदिन कामाचे शॉर्टकट",newBill:"नवीन बिल",newQuotation:"नवीन कोटेशन",addLabour:"कामगार जोडा",openProjects:"प्रकल्प उघडा",footerTitle:"नेक्स्टजेन इकोसाईट मॅनेजर",footerSlogan:"स्मार्ट बांधकाम. पर्यावरणपूरक बांधकाम.",navHome:"होम",navProjects:"प्रकल्प",navLabour:"कामगार",navBilling:"बिलिंग",invoicesTitle:"बिले आणि इनव्हॉइस",invoicesSub:"प्रकल्प बिलिंग, GST आणि ग्राहकांची बिले व्यवस्थापित करा.",createNewInvoice:"नवीन बिल तयार करा",invoiceNo:"इनव्हॉइस क्र.",clientName:"ग्राहकाचे नाव",billingType:"बिलिंगचा प्रकार",date:"तारीख",finalAmount:"अंतिम रक्कम",action:"कृती",loadingInvoices:"बिले लोड होत आहेत...",noInvoicesYet:"कोणतीही बिले नाहीत",createFirstInvoice:"सुरुवात करण्यासाठी तुमचे पहिले इनव्हॉइस तयार करा.",invoiceRecords:"इनव्हॉइस नोंदी",allGeneratedInvoices:"सर्व तयार केलेले प्रकल्प इनव्हॉइस",viewInvoice:"इनव्हॉइस पहा",viewPdf:"PDF पहा",printSavePdf:"प्रिंट / PDF सेव्ह करा",cancel:"रद्द करा",saveGenerate:"सेव्ह आणि बिल तयार करा",withGst:"GST सह",withoutGst:"GST शिवाय",gstRate:"GST दर",laborPageTitle:"कामगार व्यवस्थापन आणि पगार अहवाल",laborPageSub:"नोंदणीकृत कामगार, दैनिक हजेरी आणि पगार हिशोब व्यवस्थापित करा",addNewLabor:"नवीन कामगार جوडा",laborDirectory:"कामगार यादी",calendarAttendance:"कॅलेंडर हजेरी",wageReports:"पगार अहवाल",dailyCharges:"दैनिक मजुरी",perDay:"/ दिवस",viewDocs:"कागदपत्रे पहा",selectAttendanceDate:"हजेरी तारीख निवडा (dd/mm/yyyy)",workerRosterFor:"कामगार हजेरी यादी - तारीख:",present:"हजर",halfDay:"अर्धा दिवस",absent:"गैरहजर",notMarked:"नोंद नाही",past7DaysMatrix:"मागील ७ दिवसांचा हजेरी तक्ता",worker:"कामगार",totalDaysCount:"एकूण कामाचे दिवस",totalPaymentDue:"एकूण देय रक्कम",days:"दिवस",itemsWorkDetails:"वस्तू / कामाचे तपशील",itemNum:"आयटम",description:"वर्णन",workDescriptionPlaceholder:"कामाचे वर्णन प्रविष्ट करा",unit:"युनिट",quantity:"प्रमाण",rateLabel:"दर (₹)",discountPercent:"सूट (%)",lineAmount:"ओळ रक्कम",addAnotherItem:"दुसरा आयटम जोडा",invoiceSummary:"इनव्हॉइस सारांश",lumsumAmount:"एकत्रित रक्कम (Lumpsum)",totalInvoices:"एकूण बिले",totalBilling:"एकूण बिलिंग",gstInvoices:"GST बिले",loadingProjects:"तुमचे प्रकल्प लोड होत आहेत...",constructionWorkspace:"बांधकाम कार्यक्षेत्र",projectManagementTitle:"प्रकल्प व्यवस्थापन",projectManagementSub:"बांधकाम प्रकल्प, साईट साहित्य, अभियांत्रिकी कागदपत्रे आणि साहित्य खर्च व्यवस्थापित करा.",createProject:"प्रकल्प तयार करा",noProjectsYet:"अद्याप कोणतेही प्रकल्प तयार केलेले नाहीत",noProjectsDesc:"तुमचा पहिला प्रकल्प तयार करून बांधकाम कामाचे नियोजन सुरू करा.",createFirstProject:"तुमचा पहिला प्रकल्प तयार करा",activeWorkspace:"सक्रिय कार्यक्षेत्र",addProject:"प्रकल्प जोडा",delete:"हटवा",inProgress:"प्रगतीपथावर",started:"सुरुवात",na:"उपलब्ध नाही",locationNotSpecified:"ठिकाण नमूद केलेले नाही",clientNotSpecified:"ग्राहक नमूद केलेला नाही",projectBadge:"प्रकल्प",projectAssets:"प्रकल्प साहित्य",uploadedFiles:"अपलोड केलेल्या फाइल्स",sitePhotosStat:"साईट फोटो",progressImages:"प्रगतीचे फोटो",documentsStat:"कागदपत्रे",projectRecords:"प्रकल्प नोंदी",materialExpenses:"साहित्य खर्च",billsRecorded:"बिले नोंदवली",projectResources:"प्रकल्प संसाधने",projectFilesRecords:"प्रकल्प फाइल्स आणि नोंदी",projectFilesRecordsSub:"या बांधकाम प्रकल्पाशी संबंधित सर्व काही, एकाच ठिकाणी व्यवस्थित.",uploadMaterialBill:"साहित्य बिल अपलोड करा",uploadDocument:"कागदपत्र अपलोड करा",uploadAsset:"साहित्य अपलोड करा",tabPhotosLabel:"साईट फोटो",tabPhotosDesc:"बांधकामाची प्रगती",tabPlansLabel:"फ्लोअर प्लॅन्स",tabPlansDesc:"आराखडे आणि लेआउट",tabGalleryLabel:"प्रकल्प गॅलरी",tabGalleryDesc:"प्रकल्पाचे फोटो",tabDocsLabel:"कागदपत्रे",tabDocsDesc:"अभियांत्रिकी फाइल्स",tabBillsLabel:"साहित्य बिले",tabBillsDesc:"खरेदी नोंदी",filesCount:"फाइल्स",documentsCount:"कागदपत्रे",noFilesUploadedYet:"अद्याप कोणतीही फाइल अपलोड केलेली नाही",uploadFirstFilePrompt:"प्रकल्पाच्या नोंदी व्यवस्थित ठेवण्यासाठी पहिले {type} अपलोड करा.",uploadFirstFile:"पहिली फाइल अपलोड करा",preview:"पूर्वावलोकन",floorPlanBadge:"फ्लोअर प्लॅन",galleryBadge:"गॅलरी",sitePhotoBadge:"साईट फोटो",untitledAsset:"विनाशीर्षक साहित्य",uploadedOn:"अपलोड तारीख",engineeringDocuments:"अभियांत्रिकी कागदपत्रे",engineeringDocumentsSub:"मंजूर महापालिका आणि अभियांत्रिकी प्रकल्प फाइल्स.",noDocumentsAvailable:"कोणतीही कागदपत्रे उपलब्ध नाहीत",noDocumentsDesc:"आराखडे, मंजुरी, PDF आणि इतर अभियांत्रिकी कागदपत्रे येथे साठवा.",fileUnavailable:"फाइल",fileSizeUnavailable:"फाइलचा आकार उपलब्ध नाही",view:"पहा",deleteDocument:"कागदपत्र हटवा",expenseTracking:"खर्च ट्रॅकिंग",materialPurchaseRecords:"साहित्य खरेदी नोंदी",materialPurchaseRecordsSub:"बांधकाम साहित्य खरेदी आणि पुरवठादारांची बिले ट्रॅक करा.",totalRecordedExpense:"एकूण नोंदवलेला खर्च",invoicesCount:"बिले",invoiceNumber:"बिल क्रमांक",vendor:"पुरवठादार",category:"श्रेणी",amountCol:"रक्कम",actionCol:"कृती",noMaterialBillsRecorded:"कोणतीही साहित्य बिले नोंदवलेली नाहीत",uploadedBillsAppearHere:"अपलोड केलेली खरेदी बिले येथे दिसतील.",generalVendor:"सर्वसाधारण पुरवठादार",generalCategory:"सर्वसाधारण",deleteBill:"बिल हटवा",createNewProjectTitle:"नवीन प्रकल्प तयार करा",createNewProjectSub:"नवीन बांधकाम कार्यक्षेत्र जोडा.",projectNameLabel:"प्रकल्पाचे नाव *",projectNamePlaceholder:"उदा. स्कायलाईन हाईट्स टॉवर बी",siteLocationLabel:"साईटचे ठिकाण",siteLocationSample:"उदा. बारामती MIDC",clientNameLabel:"ग्राहकाचे नाव",clientNameSample:"उदा. रामेश्वर बिल्डर्स",creating:"तयार होत आहे...",uploadSiteDocument:"साईट कागदपत्र अपलोड करा",uploadRecordTo:"{project} मध्ये नवीन नोंद जोडा.",vendorSupplierLabel:"पुरवठादाराचे नाव *",vendorSample:"उदा. अल्ट्राटेक सिमेंट लि.",materialCategoryLabel:"साहित्याची श्रेणी",catRawMaterials:"कच्चा माल (सिमेंट / स्टील)",catElectricalPlumbing:"इलेक्ट्रिकल आणि प्लंबिंग",catFinishingTiles:"फिनिशिंग आणि टाइल्स",catLaborEquipment:"मजुरी आणि उपकरणे",billAmountLabel:"बिलाची रक्कम (₹) *",assetTitleLabel:"साहित्याचे शीर्षक / वर्णन *",assetTitleSample:"उदा. दुसऱ्या मजल्याचा स्लॅब कास्टिंग",selectFileFromDevice:"डिव्हाइसमधून फाइल निवडा",fileSelectedSuccess:"फाइल यशस्वीरित्या निवडली",chooseFileToUpload:"अपलोड करण्यासाठी फाइल निवडा",docFileTypes:"PDF, DOC आणि DOCX फाइल्स",imageFileTypes:"डिव्हाइसमधून फोटो निवडा",uploadPreviewAlt:"अपलोड पूर्वावलोकन",previewReady:"पूर्वावलोकन तयार आहे",fileReadyToSave:"फाइल निवडली आहे आणि सेव्ह करण्यासाठी तयार आहे.",uploadAndSave:"अपलोड आणि सेव्ह करा",projectPreviewAlt:"प्रकल्प पूर्वावलोकन",alertEnterProjectName:"कृपया प्रकल्पाचे नाव प्रविष्ट करा.",alertFailedCreateProject:"प्रकल्प तयार करता आला नाही",alertBackendConnect:"बॅकएंड सर्व्हरशी संपर्क होऊ शकला नाही.",confirmDeleteProject:"तुम्हाला खात्री आहे की तुम्हाला हा संपूर्ण प्रकल्प हटवायचा आहे?",alertUnableDeleteProject:"प्रकल्प हटवता आला नाही.",alertUnableSaveFiles:"प्रकल्पाच्या फाइल्स सेव्ह करता आल्या नाहीत.",alertUnableDeleteItem:"आयटम हटवता आला नाही.",defaultLocationBaramati:"बारामती MIDC",defaultClientName:"ग्राहकाचे नाव",pdfType:"PDF",imageType:"फोटो",quotationsRecords:"कोटेशन नोंदी",allQuotationsSaved:"तुमच्या डेटाबेसमध्ये सेव्ह केलेली सर्व कोटेशन्स",searchPlaceholder:"कोटेशन, ग्राहक किंवा प्रकल्प शोधा...",quotationId:"कोटेशन आयडी",project:"प्रकल्प",type:"प्रकार",noQuotationsFound:"कोणतीही कोटेशन्स सापडली नाहीत",tryAnotherKeyword:"दुसऱ्या कीवर्डसह शोधण्याचा प्रयत्न करा.",createFirstQuotationPrompt:"सुरुवात करण्यासाठी तुमचे पहिले प्रकल्प कोटेशन तयार करा.",prepareProfessionalEstimate:"व्यावसायिक प्रकल्प अंदाज तयार करा",quotationBillingType:"कोटेशन बिलिंग प्रकार",gstRatePercent:"GST दर (%)",clientProjectDetails:"ग्राहक आणि प्रकल्प तपशील",enterClientName:"ग्राहकाचे नाव प्रविष्ट करा",enterProjectName:"प्रकल्पाचे नाव प्रविष्ट करा",siteLocationPlaceholder:"साईटचे ठिकाण",addWorkDetailsSub:"बांधकामाच्या कामाचे तपशील, प्रमाण आणि दर जोडा.",workDescription:"कामाचे वर्णन",ratePlaceholder:"दर (₹)",addLineItem:"ओळ आयटम जोडा",cancel:"रद्द करा",saving:"सेव्ह होत आहे...",saveGenerateQuotation:"सेव्ह आणि कोटेशन तयार करा",quotationsPageTitle:"कोटेशन्स आणि अंदाजपत्रक",quotationsPageSub:"प्रकल्प कोटेशन तयार करा, व्यवस्थापित करा आणि ट्रॅक करा",createNewQuotation:"नवीन कोटेशन तयार करा",totalQuotations:"एकूण कोटेशन्स",gstQuotations:"GST कोटेशन्स",totalQuotationValue:"एकूण कोटेशन मूल्य",quotationsRecords:"कोटेशन नोंदी",allGeneratedQuotations:"सर्व तयार केलेले प्रकल्प कोटेशन",quotationNo:"कोटेशन क्र.",projectName:"प्रकल्पाचे नाव",clientName:"ग्राहकाचे नाव",date:"तारीख",amount:"रक्कम",action:"कृती",viewQuotation:"कोटेशन पहा",loadingQuotations:"कोटेशन्स लोड होत आहेत...",noQuotationsYet:"कोणतेही कोटेशन नाही",createFirstQuotation:"सुरुवात करण्यासाठी तुमचे पहिले कोटेशन तयार करा.",backToQuotations:"कोटेशनवर परत जा",printSavePdf:"प्रिंट / PDF सेव्ह करा",projectBudgetSummary:"प्रकल्प बजेट सारांश",quotationLabel:"कोटेशन",quotationNumber:"कोटेशन क्रमांक",addressSiteLocation:"पत्ता / साईटचे ठिकाण",layoutDetails:"लेआउट तपशील",builderContractorName:"빌डर / ठेकेदार नाव",descriptionOfWork:"कामाचे वर्णन",srNo:"अनु. क्र.",unit:"युनिट",qty:"प्रमाण",rate:"दर",totalAmount:"एकूण रक्कम",finalTotalAmount:"अंतिम एकूण रक्कम",termsAndConditions:"अटी आणि शर्ती",authorizedSignatory:"अधिकृत स्वाक्षरीकर्ता",laborPageTitle:"कामगार व्यवस्थापन आणि पेमेंट अहवाल",laborPageSub:"कामगार, हजेरी आणि पेमेंट नोंदी व्यवस्थापित करा",addNewLabor:"नवीन कामगार जोडा",totalWorkers:"एकूण कामगार",registeredLaborMembers:"नोंदणीकृत कामगार",presentToday:"आज उपस्थित",halfDayAttendance:"अर्ध्या दिवसाची हजेरी",dailyWageTotal:"एकूण दैनिक मजुरी",combinedDailyWages:"एकत्रित दैनिक मजुरी",totalEarnings:"एकूण कमाई",savedAttendanceRecords:"सेव्ह केलेल्या हजेरीच्या नोंदींनुसार",laborDirectory:"कामगार यादी",attendance:"हजेरी",wageReports:"मजुरी अहवाल",searchWorkers:"कामगार शोधा...",loadingLaborRecords:"कामगारांच्या नोंदी लोड होत आहेत...",noMatchingWorkers:"जुळणारे कामगार सापडले नाहीत",noWorkerProfiles:"कामगारांची प्रोफाइल उपलब्ध नाहीत",searchWorkerHint:"दुसरे नाव, कामाचा प्रकार किंवा मोबाईल क्रमांक वापरून शोधा.",addFirstWorkerHint:"कामगारांच्या नोंदी व्यवस्थापित करण्यासाठी पहिला कामगार जोडा.",notProvided:"दिलेली नाही",locationNotProvided:"ठिकाण दिलेले नाही",worker:"कामगार",dailyCharges:"दैनिक मजुरी",perDay:"/ दिवस",viewProfile:"प्रोफाइल पहा",attendanceManagement:"हजेरी व्यवस्थापन",markAttendanceHint:"दररोज कामगारांची हजेरी नोंदवा आणि मागील ७ दिवसांचा आढावा घ्या",workers:"कामगार",selectAttendanceDate:"हजेरीची तारीख निवडा",present:"उपस्थित",halfDay:"अर्धा दिवस",absent:"अनुपस्थित",workerAttendanceRoster:"कामगार हजेरी यादी",noWorkersAvailable:"कामगार उपलब्ध नाहीत",addWorkersBeforeAttendance:"हजेरी नोंदवण्यापूर्वी कामगार जोडा.",dailyWage:"दैनिक मजुरी",past7DaysAttendance:"मागील ७ दिवसांचा हजेरी तक्ता",selectStatusToUpdate:"हजेरी अपडेट करण्यासाठी स्थिती निवडा",notMarked:"नोंद नाही",noAttendanceRecords:"हजेरीच्या नोंदी उपलब्ध नाहीत.",laborPaymentReports:"कामगार पेमेंट अहवाल",paymentCalculationHint:"उपस्थित (१ पट) आणि अर्धा दिवस (०.५ पट) हजेरीनुसार पेमेंट मोजले जाते",wageSummary:"मजुरीचा सारांश",registeredWorkers:"नोंदणीकृत कामगार",totalPaymentDue:"एकूण देय रक्कम",laborName:"कामगाराचे नाव",totalDaysCount:"एकूण कामाचे दिवस",noLaborRegistered:"कोणतेही कामगार नोंदणीकृत नाहीत.",days:"दिवस",workerVerificationProfile:"कामगार पडताळणी प्रोफाइल",personalInfoDocuments:"वैयक्तिक माहिती आणि अपलोड केलेली कागदपत्रे",profile:"प्रोफाइल",profilePhoto:"प्रोफाइल फोटो",panCard:"पॅन कार्ड",aadhaarCard:"आधार कार्ड",closeProfile:"प्रोफाइल बंद करा",addNewLaborWorker:"नवीन कामगार जोडा",enterWorkerDetails:"कामगाराची माहिती भरा आणि पडताळणीची कागदपत्रे अपलोड करा",fullName:"पूर्ण नाव",mobileNumber:"मोबाईल क्रमांक",locationNative:"ठिकाण / मूळ गाव",roleTrade:"कामाचा प्रकार",mason:"गवंडी",electrician:"इलेक्ट्रिशियन",plumber:"प्लंबर",helper:"मदतनीस",barBender:"लोखंडी सळई बांधणारा",dailyWageRequired:"दैनिक मजुरी (₹)",panCardPhoto:"पॅन कार्ड फोटो",aadhaarCardPhoto:"आधार कार्ड फोटो",uploaded:"अपलोड झाले",cancel:"रद्द करा",saveWorker:"कामगार सेव्ह करा",viewDocument:"कागदपत्र पहा",notUploaded:"अपलोड केलेले नाही",exampleName:"उदा. रमेश कुमार",unableToSaveWorker:"कामगार सेव्ह करता आला नाही: ",unableToSaveAttendance:"हजेरी सेव्ह करता आली नाही: "}},cu=L.createContext();function $f({children:s}){const[c,p]=L.useState(()=>localStorage.getItem("appLang")||"en");L.useEffect(()=>{localStorage.setItem("appLang",c)},[c]);const M=()=>{p(E=>E==="en"?"mr":"en")},O=E=>{var J,_;return((J=ud[c])==null?void 0:J[E])||((_=ud.en)==null?void 0:_[E])||E};return n.jsx(cu.Provider,{value:{lang:c,setLang:p,toggleLanguage:M,t:O},children:s})}const Hn=()=>L.useContext(cu);function Hf(){var ue,$,ce,S,re,B;const{t:s}=Hn(),[c,p]=L.useState(null),[M,O]=L.useState(!1),[E,J]=L.useState([]),[_,ee]=L.useState(""),[te,oe]=L.useState(!1),ae=["Sq. ft.","Cu. mtr.","R. mtr.","Bags","Nos","Hours","Days","L.S."],[Q,me]=L.useState(!0),[H,V]=L.useState(18),[X,je]=L.useState(""),[be,Le]=L.useState(""),[fe,xe]=L.useState("Civil Work (as per discussion)"),[Ne,we]=L.useState("AV TECH Baramati"),[Se,Oe]=L.useState(""),[ze,$e]=L.useState([{sn:1,description:"",unit:"Sq. ft.",qty:1,discount:0,rate:0}]);L.useEffect(()=>{Be()},[]);const Be=async()=>{try{const f=await fetch(`${Er}/api/quotations`);if(!f.ok)throw new Error("Failed to fetch quotations");const D=await f.json(),C=Array.isArray(D)?D.map(P=>({...P,items:Array.isArray(P.items)?P.items:[],notes:Array.isArray(P.notes)?P.notes:[],company:P.company||{},isGst:!!P.isGst})):[];return J(C),C}catch(f){return console.error("Error fetching quotations:",f),null}},Ae=()=>{window.print()},Ce=f=>{const C=(Array.isArray(f==null?void 0:f.items)?f.items:[]).reduce((He,v)=>{const R=Number(v.rate||0)*(1-Number(v.discount||0)/100);return He+Number(v.qty||0)*R},0),P=f!=null&&f.isGst?C*(Number(f.gstRate||0)/100):0,ge=C+P;return{total:C,gstAmount:P,finalAmount:ge}},Ie=f=>{const D=Number(f.qty)||0,C=Number(f.rate)||0,P=Number(f.discount)||0;return D*C*(1-P/100)},Pe=ze.reduce((f,D)=>f+Ie(D),0),he=Q?Pe*(Number(H)||0)/100:0,N=Pe+he,U=()=>{$e([...ze,{sn:ze.length+1,description:"",unit:"Sq. ft.",qty:1,discount:0,rate:0}])},T=f=>{if(ze.length===1)return;const D=ze.filter((C,P)=>P!==f).map((C,P)=>({...C,sn:P+1}));$e(D)},m=(f,D,C)=>{const P=[...ze];P[f]={...P[f],[D]:C},$e(P)},y=()=>{je(""),Le(""),Oe(""),xe("Civil Work (as per discussion)"),we("AV TECH Baramati"),V(18),me(!0),$e([{sn:1,description:"",unit:"Sq. ft.",qty:1,discount:0,rate:0}])},Z=async f=>{if(f.preventDefault(),te)return;oe(!0);const D={quotationNumber:`QT-${Date.now().toString().slice(-6)}`,date:new Date().toLocaleDateString("en-GB"),isGst:Q,gstRate:Q&&Number(H)||0,company:{name:"NEXTGEN CONSTRUCTION",gstin:"27CFDPN2325F1ZP",officeAddress:"Office Address: S No 346/3/B/4, Ground floor, Karbharinagar, Baramati, 413102",contact:"+91 9822000000"},clientName:X||"Client Name",siteLocation:be||"Baramati, Pune",layoutDetails:fe||"Civil Work",contractorName:Ne||"AV TECH Baramati",projectName:Se||"General Project",items:ze.map((C,P)=>({...C,sn:P+1,qty:Number(C.qty)||0,discount:Number(C.discount)||0,rate:Number(C.rate)||0})),notes:["SITE CLEARANCE AT CLIENT SCOPE","AFTER COMPLETION OF WORK MEASUREMENT WILL BE TAKEN",Q?`${H}% GST WILL BE APPLIED`:"NON-GST QUOTATION","EXTRA WORK WILL BE CHARGED EXTRA","WATER & ELECTRICITY SUPPLY AT CLIENT SCOPE"]};try{const C=await fetch(`${Er}/api/quotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)});if(C.ok){const P=await C.json();if(console.log("POST saved quotation:",P),await Be()===null){alert(s("quotationRefreshError"));return}O(!1),y()}else{const P=await C.json();console.error("Server validation error:",P),alert(`${s("failedToSaveQuotation")}: ${P.error||P.message||s("unknownError")}`)}}catch(C){console.error("Error saving quotation to database:",C),alert(s("backendConnectionError"))}finally{oe(!1)}},G=E.filter(f=>{const D=_.toLowerCase();return String(f.quotationNumber||"").toLowerCase().includes(D)||String(f.clientName||"").toLowerCase().includes(D)||String(f.projectName||"").toLowerCase().includes(D)}),ie=E.reduce((f,D)=>f+Ce(D).finalAmount,0),se=E.filter(f=>f.isGst).length;return n.jsxs("div",{className:"nextgen-quotation-page",children:[n.jsx("style",{children:`

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

            `}),c?n.jsxs("div",{className:"qt-paper-area",children:[n.jsxs("div",{className:"qt-paper-actions no-print",children:[n.jsxs("button",{onClick:()=>p(null),className:"qt-back-btn",children:[n.jsx(xd,{size:16}),s("backToQuotations")]}),n.jsxs("button",{onClick:Ae,className:"qt-print-btn",children:[n.jsx(Xd,{size:16}),s("printSavePdf")]})]}),n.jsxs("div",{id:"qt-printable",className:"qt-paper",children:[n.jsxs("div",{className:"qt-paper-header",children:[n.jsx("img",{src:"/logo.png",alt:"NextGen Logo",className:"qt-paper-logo"}),n.jsxs("div",{className:"qt-paper-company",children:[n.jsx("h2",{children:((ue=c.company)==null?void 0:ue.name)||"NEXTGEN CONSTRUCTION"}),n.jsxs("p",{children:[s("gstinLabel"),": ",(($=c.company)==null?void 0:$.gstin)||""]}),n.jsx("p",{children:((ce=c.company)==null?void 0:ce.officeAddress)||""}),n.jsxs("p",{children:[s("contactNoLabel"),": ",((S=c.company)==null?void 0:S.contact)||""]})]})]}),n.jsxs("div",{className:"qt-paper-title",children:[s("projectBudgetSummary"),n.jsx("div",{style:{fontSize:"11px",marginTop:"7px",letterSpacing:"2px"},children:s("quotationLabel")})]}),n.jsx("table",{className:"qt-paper-table",children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{className:"qt-paper-label",children:s("quotationNumber")}),n.jsx("td",{children:c.quotationNumber})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"qt-paper-label",children:s("date")}),n.jsx("td",{children:c.date})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"qt-paper-label",children:s("nameOfClient")}),n.jsx("td",{children:c.clientName})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"qt-paper-label",children:s("addressSiteLocation")}),n.jsx("td",{children:c.siteLocation})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"qt-paper-label",children:s("layoutDetails")}),n.jsx("td",{children:c.layoutDetails})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"qt-paper-label",children:s("builderContractorName")}),n.jsx("td",{children:c.contractorName})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"qt-paper-label",children:s("nameOfProject")}),n.jsx("td",{children:c.projectName})]}),n.jsx("tr",{children:n.jsx("td",{colSpan:"2",className:"qt-paper-section",children:s("descriptionOfWork")})})]})}),n.jsxs("table",{className:"qt-paper-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"8%"},children:s("srNo")}),n.jsx("th",{children:s("descriptionOfWork")}),n.jsx("th",{style:{width:"13%"},children:s("unit")}),n.jsx("th",{style:{width:"10%"},children:s("qty")}),n.jsx("th",{style:{width:"15%"},children:s("rate")}),n.jsx("th",{style:{width:"17%"},children:s("amount")})]})}),n.jsx("tbody",{children:[...Array(Math.max(10,((re=c.items)==null?void 0:re.length)||0))].map((f,D)=>{var ge;const C=(ge=c.items)==null?void 0:ge[D],P=C?Ie(C):null;return n.jsxs("tr",{children:[n.jsx("td",{style:{textAlign:"center"},children:D+1}),n.jsx("td",{children:(C==null?void 0:C.description)||""}),n.jsx("td",{children:(C==null?void 0:C.unit)||""}),n.jsx("td",{style:{textAlign:"center"},children:(C==null?void 0:C.qty)??""}),n.jsx("td",{style:{textAlign:"right"},children:C?`₹${Number(C.rate||0).toFixed(2)}`:""}),n.jsx("td",{style:{textAlign:"right"},children:C?`₹${P.toFixed(2)}`:""})]},D)})})]}),(()=>{const{total:f,gstAmount:D,finalAmount:C}=Ce(c);return n.jsx("table",{className:"qt-paper-table",children:n.jsxs("tbody",{children:[n.jsxs("tr",{className:"qt-paper-total",children:[n.jsx("td",{colSpan:"5",style:{textAlign:"right"},children:s("totalAmount")}),n.jsxs("td",{style:{textAlign:"right"},children:["₹",f.toFixed(2)]})]}),c.isGst&&n.jsxs("tr",{className:"qt-paper-total",children:[n.jsxs("td",{colSpan:"5",style:{textAlign:"right"},children:[s("gstLabel")," (",c.gstRate,"%)"]}),n.jsxs("td",{style:{textAlign:"right"},children:["₹",D.toFixed(2)]})]}),n.jsxs("tr",{className:"qt-paper-grand-total",children:[n.jsx("td",{colSpan:"5",style:{textAlign:"right"},children:s("finalTotalAmount")}),n.jsxs("td",{style:{textAlign:"right"},children:["₹",C.toFixed(2)]})]})]})})})(),n.jsx("table",{className:"qt-paper-table",children:n.jsxs("tbody",{children:[n.jsx("tr",{children:n.jsx("td",{className:"qt-paper-section",children:s("termsAndConditions")})}),n.jsx("tr",{children:n.jsx("td",{children:n.jsx("ol",{className:"qt-paper-notes",children:(Array.isArray(c.notes)?c.notes:[]).map((f,D)=>n.jsx("li",{children:f},D))})})})]})}),n.jsxs("div",{className:"qt-paper-signature",children:[n.jsxs("div",{children:["For ",((B=c.company)==null?void 0:B.name)||"NEXTGEN CONSTRUCTION"]}),n.jsx("div",{children:s("authorizedSignatory")})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"qt-top-heading",children:[n.jsxs("div",{className:"qt-heading-left",children:[n.jsx("div",{className:"qt-heading-icon",children:n.jsx(gt,{size:25})}),n.jsxs("div",{children:[n.jsx("h2",{children:s("quotationsPageTitle")}),n.jsx("p",{children:s("quotationsPageSub")})]})]}),n.jsxs("button",{onClick:()=>O(!0),className:"qt-primary-btn",children:[n.jsx(Nt,{size:17}),s("createNewQuotation")]})]}),n.jsxs("div",{className:"qt-summary-grid",children:[n.jsxs("div",{className:"qt-summary-card",children:[n.jsxs("div",{children:[n.jsx("div",{className:"qt-summary-label",children:s("totalQuotations")}),n.jsx("div",{className:"qt-summary-value",children:E.length})]}),n.jsx("div",{className:"qt-summary-icon",children:n.jsx(gt,{size:22})})]}),n.jsxs("div",{className:"qt-summary-card",children:[n.jsxs("div",{children:[n.jsx("div",{className:"qt-summary-label",children:s("gstQuotations")}),n.jsx("div",{className:"qt-summary-value",children:se})]}),n.jsx("div",{className:"qt-summary-icon",children:n.jsx(Pr,{size:22})})]}),n.jsxs("div",{className:"qt-summary-card",children:[n.jsxs("div",{children:[n.jsx("div",{className:"qt-summary-label",children:s("totalQuotationValue")}),n.jsxs("div",{className:"qt-summary-value",children:["₹",ie.toLocaleString("en-IN",{maximumFractionDigits:0})]})]}),n.jsx("div",{className:"qt-summary-icon",children:n.jsx(Ef,{size:22})})]})]}),n.jsxs("div",{className:"qt-list-card",children:[n.jsxs("div",{className:"qt-list-header",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"qt-list-title",children:s("quotationsRecords")}),n.jsx("div",{className:"qt-list-subtitle",children:s("allGeneratedQuotations")})]}),n.jsxs("div",{className:"qt-search-box",children:[n.jsx(ru,{size:15}),n.jsx("input",{type:"text",placeholder:s("searchPlaceholder"),value:_,onChange:f=>ee(f.target.value)})]})]}),n.jsx("div",{className:"qt-table-wrapper",children:n.jsxs("table",{className:"qt-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:s("quotationId")}),n.jsx("th",{children:s("clientName")}),n.jsx("th",{children:s("project")}),n.jsx("th",{children:s("type")}),n.jsx("th",{children:s("date")}),n.jsx("th",{children:s("totalAmount")}),n.jsx("th",{style:{textAlign:"right"},children:s("action")})]})}),n.jsx("tbody",{children:G.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"7",children:n.jsxs("div",{className:"qt-empty-state",children:[n.jsx("div",{className:"qt-empty-icon",children:n.jsx(gt,{size:27})}),n.jsx("h3",{children:s("noQuotationsFound")}),n.jsx("p",{children:s(_?"tryAnotherKeyword":"createFirstQuotationPrompt")})]})})}):G.map(f=>{const{finalAmount:D}=Ce(f);return n.jsxs("tr",{children:[n.jsx("td",{className:"qt-number",children:f.quotationNumber}),n.jsx("td",{className:"qt-client-name",children:f.clientName}),n.jsx("td",{children:n.jsxs("span",{className:"qt-project-name",children:[n.jsx(ur,{size:14}),f.projectName||"-"]})}),n.jsx("td",{children:n.jsx("span",{className:`qt-status ${f.isGst?"qt-status-gst":"qt-status-nongst"}`,children:f.isGst?`${s("gstLabel")} (${f.gstRate}%)`:s("withoutGst")})}),n.jsx("td",{children:f.date}),n.jsxs("td",{style:{fontWeight:800,color:"#211b17"},children:["₹",D.toFixed(2)]}),n.jsx("td",{style:{textAlign:"right"},children:n.jsxs("button",{onClick:()=>p(f),className:"qt-view-btn",children:[n.jsx($n,{size:14}),s("viewQuotation")]})})]},f._id||f.quotationNumber)})})]})})]})]}),M&&n.jsx("div",{className:"qt-modal-overlay",onClick:f=>{f.target===f.currentTarget&&O(!1)},children:n.jsxs("div",{className:"qt-modal",children:[n.jsxs("div",{className:"qt-modal-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:s("createNewQuotation")}),n.jsx("p",{children:s("prepareProfessionalEstimate")})]}),n.jsx("button",{type:"button",onClick:()=>O(!1),className:"qt-modal-close",children:n.jsx(pr,{size:19})})]}),n.jsx("div",{className:"qt-modal-body",children:n.jsxs("form",{onSubmit:Z,children:[n.jsxs("div",{className:"qt-gst-panel",children:[n.jsxs("div",{children:[n.jsx("div",{className:"qt-gst-title",children:s("quotationBillingType")}),n.jsxs("div",{className:"qt-radio-group",children:[n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"qtGstOption",checked:Q===!0,onChange:()=>me(!0)}),s("withGst")]}),n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"qtGstOption",checked:Q===!1,onChange:()=>me(!1)}),s("withoutGst")]})]})]}),Q&&n.jsxs("div",{className:"qt-gst-rate",children:[s("gstRatePercent"),n.jsx("input",{type:"number",min:"0",max:"100",step:"any",value:H,onChange:f=>V(f.target.value===""?"":Number(f.target.value))})]})]}),n.jsxs("div",{className:"qt-form-section",children:[n.jsxs("div",{className:"qt-section-heading",children:[n.jsx(ur,{size:15}),s("clientProjectDetails")]}),n.jsxs("div",{className:"qt-form-grid",children:[n.jsxs("div",{className:"qt-field",children:[n.jsxs("label",{children:[s("clientName")," *"]}),n.jsx("input",{type:"text",required:!0,placeholder:s("enterClientName"),value:X,onChange:f=>je(f.target.value)})]}),n.jsxs("div",{className:"qt-field",children:[n.jsx("label",{children:s("projectName")}),n.jsx("input",{type:"text",placeholder:s("enterProjectName"),value:Se,onChange:f=>Oe(f.target.value)})]})]}),n.jsxs("div",{className:"qt-form-grid qt-form-grid-three",style:{marginTop:16},children:[n.jsxs("div",{className:"qt-field",children:[n.jsxs("label",{children:[n.jsx(sl,{size:12,style:{display:"inline",marginRight:4}}),s("siteLocationPlaceholder")]}),n.jsx("input",{type:"text",placeholder:s("siteLocationPlaceholder"),value:be,onChange:f=>Le(f.target.value)})]}),n.jsxs("div",{className:"qt-field",children:[n.jsx("label",{children:s("layoutDetails")}),n.jsx("input",{type:"text",value:fe,onChange:f=>xe(f.target.value)})]}),n.jsxs("div",{className:"qt-field",children:[n.jsx("label",{children:s("contractorName")}),n.jsx("input",{type:"text",value:Ne,onChange:f=>we(f.target.value)})]})]})]}),n.jsxs("div",{className:"qt-form-section",children:[n.jsxs("div",{className:"qt-section-heading",children:[n.jsx(tn,{size:15}),s("descriptionOfWork")]}),n.jsx("div",{style:{fontSize:11,color:"#968778",marginBottom:13},children:s("addWorkDetailsSub")}),ze.map((f,D)=>{const C=Ie(f);return n.jsx("div",{className:"qt-item-container",children:n.jsxs("div",{className:"qt-item-grid",children:[n.jsxs("div",{className:"qt-item-number",children:["#",D+1]}),n.jsx("input",{type:"text",placeholder:s("workDescription"),required:!0,value:f.description,onChange:P=>m(D,"description",P.target.value)}),n.jsx("select",{value:f.unit,onChange:P=>m(D,"unit",P.target.value),children:ae.map(P=>n.jsx("option",{value:P,children:P},P))}),n.jsx("input",{type:"number",placeholder:s("qty"),min:"0",step:"any",value:f.qty,onChange:P=>m(D,"qty",P.target.value)}),n.jsx("input",{type:"number",placeholder:s("ratePlaceholder"),min:"0",step:"any",value:f.rate,onChange:P=>m(D,"rate",P.target.value)}),n.jsxs("div",{className:"qt-item-amount",children:["₹",C.toFixed(2)]}),n.jsx("button",{type:"button",onClick:()=>T(D),className:"qt-delete-btn",title:s("removeItem"),children:n.jsx(en,{size:14})})]})},D)}),n.jsxs("button",{type:"button",onClick:U,className:"qt-add-item",children:[n.jsx(Nt,{size:15}),s("addLineItem")]})]}),n.jsxs("div",{className:"qt-total-panel",children:[n.jsxs("div",{className:"qt-total-row",children:[n.jsx("span",{children:s("totalAmount")}),n.jsxs("span",{children:["₹",Pe.toFixed(2)]})]}),Q&&n.jsxs("div",{className:"qt-total-row",children:[n.jsxs("span",{children:[s("gstLabel")," (",H||0,"%)"]}),n.jsxs("span",{children:["₹",he.toFixed(2)]})]}),n.jsxs("div",{className:"qt-total-row qt-total-final",children:[n.jsx("span",{children:s("finalTotalAmount")}),n.jsxs("span",{children:["₹",N.toFixed(2)]})]})]}),n.jsxs("div",{className:"qt-modal-footer",children:[n.jsx("button",{type:"button",onClick:()=>O(!1),className:"qt-cancel-btn",children:s("cancel")}),n.jsx("button",{type:"submit",disabled:te,className:"qt-save-btn",children:s(te?"saving":"saveGenerateQuotation")})]})]})})]})})]})}function Qf(){var U,T,m,y,Z,G,ie,se,ue,$,ce;const{t:s}=Hn(),[c,p]=L.useState(null),[M,O]=L.useState(!1),[E,J]=L.useState([]),[_,ee]=L.useState(!0),te=["sqft","cum","bags","r","kg","nos","hours","days","ls"],[oe,ae]=L.useState(!0),[Q,me]=L.useState(18),[H,V]=L.useState(""),[X,je]=L.useState(""),[be,Le]=L.useState(""),[fe,xe]=L.useState([{sn:1,description:"",unit:"sqft",qty:1,discount:0,rate:0}]);L.useEffect(()=>{Ne()},[]);const Ne=async()=>{try{ee(!0);const S=await fetch(`${Er}/api/invoices`);if(S.ok){const re=await S.json();J(Array.isArray(re)?re:[])}}catch(S){console.error("Error fetching invoices:",S)}finally{ee(!1)}},we=S=>{const re=Number(S.qty)||0,B=Number(S.rate)||0,f=Number(S.discount)||0;return re*B*(1-f/100)},Se=S=>{const B=(Array.isArray(S.items)?S.items:[]).reduce((D,C)=>D+we(C),0),f=S.isGst?B*(Number(S.gstRate)||0)/100:0;return{lumSum:B,gstAmount:f,finalAmount:B+f}},Oe=fe.reduce((S,re)=>S+we(re),0),ze=oe?Oe*(Number(Q)||0)/100:0,$e=Oe+ze,Be=()=>{xe([...fe,{sn:fe.length+1,description:"",unit:"sqft",qty:1,discount:0,rate:0}])},Ae=S=>{fe.length!==1&&xe(fe.filter((re,B)=>B!==S).map((re,B)=>({...re,sn:B+1})))},Ce=(S,re,B)=>{xe(f=>f.map((D,C)=>C===S?{...D,[re]:B}:D))},Ie=()=>{V(""),je(""),Le(""),me(18),xe([{sn:1,description:"",unit:"sqft",qty:1,discount:0,rate:0}])},Pe=async S=>{S.preventDefault();const re={id:`INV-${Date.now()}`,date:new Date().toLocaleDateString("en-GB"),isGst:oe,company:{name:"NEXTGEN CONSTRUCTION",address:"S No 346/3/B/4, Ground floor, Karbharinagar, Jamdar Road, Baramati Pune, 413102",gstin:oe?"27CFDPN2325F1ZP":"",bankName:"COSMOS BANK THE COSMOS CO-OP. BANK LTD. (Multistate Scheduled Bank)",accountNo:"0141001011972 (CURRENT ACCOUNT)",ifsc:"COSB0000014"},billFrom:{name:H||"Client Name",gstin:oe?X:""},siteLocation:be||"Main Project Site",items:fe.map((B,f)=>({...B,sn:f+1,qty:Number(B.qty)||0,discount:Number(B.discount)||0,rate:Number(B.rate)||0})),gstRate:oe&&Number(Q)||0};try{const B=await fetch(`${Er}/api/invoices`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(re)});if(B.ok){const f=await B.json();J(D=>[f,...D]),O(!1),Ie()}else{const f=await B.json().catch(()=>({}));alert(f.message||"Unable to save invoice.")}}catch(B){console.error("Error saving invoice:",B),alert("Unable to connect to the server.")}},he=()=>{window.print()},N=S=>`₹${(Number(S)||0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`;return n.jsxs("div",{className:"billing-theme",children:[n.jsx("style",{children:`

        .billing-theme {
          --bill-dark: #15110e;
          --bill-card: #211b17;
          --bill-bronze: #a45e30;
          --bill-bronze-light: #c58b60;
          --bill-beige: #e8c29f;
          --bill-bg: #f5f1eb;
          --bill-border: #e7ded3;
          --bill-muted: #93877c;
          --bill-text: #29211b;
          min-height: 100%;
          background: var(--bill-bg);
          color: var(--bill-text);
          padding: 30px;
          font-family: inherit;
        }

        .bill-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }

        .bill-eyebrow {
          color: var(--bill-bronze);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .bill-page-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--bill-dark);
          letter-spacing: -0.7px;
          margin: 0;
        }

        .bill-page-subtitle {
          color: var(--bill-muted);
          font-size: 13px;
          margin-top: 6px;
        }

        .bill-primary-btn {
          background: var(--bill-dark);
          color: var(--bill-beige);
          border: 1px solid var(--bill-bronze);
          padding: 12px 19px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: .25s;
        }

        .bill-primary-btn:hover {
          background: var(--bill-bronze);
          color: white;
          transform: translateY(-2px);
        }

        .bill-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
          margin-bottom: 25px;
        }

        .bill-stat-card {
          background: white;
          border: 1px solid var(--bill-border);
          border-radius: 15px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 0 3px 12px rgba(40, 25, 12, .025);
        }

        .bill-stat-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f4e9dc;
          color: var(--bill-bronze);
          border-radius: 12px;
          flex-shrink: 0;
        }

        .bill-stat-label {
          color: var(--bill-muted);
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .bill-stat-value {
          font-size: 21px;
          font-weight: 800;
          color: var(--bill-dark);
          margin: 0;
        }

        .bill-table-card {
          background: white;
          border: 1px solid var(--bill-border);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(40, 25, 12, .035);
        }

        .bill-table-heading {
          padding: 19px 22px;
          border-bottom: 1px solid var(--bill-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bill-table-heading h3 {
          font-size: 14px;
          font-weight: 800;
          color: var(--bill-dark);
          margin: 0;
        }

        .bill-table-heading p {
          font-size: 11px;
          color: var(--bill-muted);
          margin: 5px 0 0;
        }

        .bill-table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .bill-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
          text-align: left;
        }

        .bill-table thead {
          background: #f8f5f0;
        }

        .bill-table th {
          color: #89796b;
          padding: 15px 18px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .8px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .bill-table td {
          padding: 16px 18px;
          font-size: 12px;
          border-top: 1px solid #f0ebe5;
          white-space: nowrap;
        }

        .bill-table tbody tr:hover {
          background: #fcfaf7;
        }

        .bill-invoice-id {
          font-weight: 800;
          color: var(--bill-bronze);
        }

        .bill-client-name {
          font-weight: 700;
          color: var(--bill-dark);
        }

        .bill-type {
          padding: 6px 10px;
          display: inline-flex;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 800;
        }

        .bill-type-gst {
          color: #527b53;
          background: #edf4e9;
        }

        .bill-type-non {
          color: #987044;
          background: #f7efe1;
        }

        .bill-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #f3e6d8;
          color: #92532e;
          border: 1px solid #ead6c1;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          transition: .2s;
        }

        .bill-view-btn:hover {
          background: var(--bill-bronze);
          color: white;
        }

        .bill-empty {
          text-align: center;
          padding: 55px 20px;
          color: var(--bill-muted);
        }

        .bill-empty-icon {
          width: 65px;
          height: 65px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 15px;
          border-radius: 18px;
          background: #f4e9dc;
          color: var(--bill-bronze);
        }

        .bill-empty h3 {
          color: var(--bill-dark);
          font-size: 15px;
          margin-bottom: 7px;
        }

        .bill-empty p {
          font-size: 12px;
        }

        /* MODAL */

        .bill-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(21, 17, 14, .72);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .bill-modal {
          width: 100%;
          max-width: 850px;
          max-height: 92vh;
          overflow-y: auto;
          background: #fdfbf8;
          border: 1px solid #bd936f;
          border-radius: 17px;
          box-shadow: 0 25px 80px rgba(0,0,0,.3);
        }

        .bill-modal-header {
          background: var(--bill-dark);
          color: var(--bill-beige);
          padding: 19px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 5;
        }

        .bill-modal-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 800;
        }

        .bill-modal-header p {
          margin: 4px 0 0;
          color: #b7a493;
          font-size: 11px;
        }

        .bill-close-btn {
          border: 1px solid #66503e;
          color: #e8c29f;
          background: #30241c;
          border-radius: 8px;
          padding: 7px;
          display: flex;
          cursor: pointer;
        }

        .bill-form {
          padding: 24px;
        }

        .bill-section {
          margin-bottom: 23px;
        }

        .bill-section-title {
          font-size: 11px;
          font-weight: 800;
          color: var(--bill-bronze);
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bill-gst-box {
          background: #f4ece2;
          border: 1px solid #e6d3bf;
          border-radius: 11px;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }

        .bill-radio-group {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .bill-radio-group label {
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
        }

        .bill-radio-group input {
          accent-color: var(--bill-bronze);
        }

        .bill-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .bill-field label {
          display: block;
          color: #716457;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 7px;
        }

        .bill-field input,
        .bill-field select {
          width: 100%;
          min-width: 0;
          background: white;
          border: 1px solid #e3d9ce;
          border-radius: 8px;
          padding: 11px 12px;
          font-size: 12px;
          color: var(--bill-dark);
          outline: none;
          transition: .2s;
        }

        .bill-field input:focus,
        .bill-field select:focus {
          border-color: var(--bill-bronze);
          box-shadow: 0 0 0 3px rgba(164,94,48,.1);
        }

        .bill-items-container {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .bill-item-card {
          background: white;
          border: 1px solid #e9dfd4;
          border-radius: 11px;
          padding: 13px;
        }

        .bill-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .bill-item-number {
          color: var(--bill-bronze);
          font-size: 11px;
          font-weight: 900;
        }

        .bill-delete-btn {
          color: #b15a4a;
          background: #fbefed;
          border: 0;
          border-radius: 7px;
          padding: 7px;
          display: flex;
          cursor: pointer;
        }

        .bill-item-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 10px;
        }

        .bill-line-total {
          margin-top: 11px;
          text-align: right;
          color: var(--bill-bronze);
          font-size: 12px;
          font-weight: 800;
        }

        .bill-add-item {
          background: transparent;
          color: var(--bill-bronze);
          border: 1px dashed #c99d77;
          padding: 11px;
          width: 100%;
          border-radius: 9px;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          cursor: pointer;
        }

        .bill-add-item:hover {
          background: #f8efe5;
        }

        .bill-total-box {
          background: var(--bill-dark);
          color: white;
          border-radius: 12px;
          padding: 19px;
        }

        .bill-total-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-size: 12px;
          color: #d3c2b2;
          margin-bottom: 12px;
        }

        .bill-total-final {
          border-top: 1px solid #554336;
          padding-top: 13px;
          margin-top: 5px;
          margin-bottom: 0;
          color: var(--bill-beige);
          font-size: 16px;
          font-weight: 900;
        }

        .bill-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 19px;
          border-top: 1px solid #e9dfd4;
        }

        .bill-cancel-btn {
          background: white;
          color: #796b5d;
          border: 1px solid #ddd1c4;
          padding: 11px 17px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        /* INVOICE PREVIEW */

        .bill-preview-page {
          background: #eae3d9;
          min-height: 100vh;
          padding: 25px;
        }

        .bill-preview-toolbar {
          max-width: 850px;
          margin: 0 auto 20px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .bill-back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #d4c5b5;
          background: white;
          color: var(--bill-dark);
          padding: 10px 15px;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .bill-print-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--bill-bronze);
          background: var(--bill-dark);
          color: var(--bill-beige);
          padding: 10px 17px;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .bill-paper {
          max-width: 850px;
          margin: auto;
          background: white;
          padding: 35px;
          color: #171717;
          box-shadow: 0 8px 30px rgba(0,0,0,.12);
          font-family: Arial, sans-serif;
          font-size: 12px;
        }

        .bill-paper table {
          width: 100%;
          border-collapse: collapse;
        }

        .bill-paper td,
        .bill-paper th {
          border: 1px solid #555;
          padding: 9px;
        }

        .bill-paper .paper-heading {
          background: #211b17;
          color: #e8c29f;
          font-weight: 800;
          text-transform: uppercase;
        }

        .bill-paper .paper-company {
          font-size: 17px;
          font-weight: 900;
          color: #211b17;
        }

        .bill-paper .paper-title {
          font-size: 22px;
          letter-spacing: 2px;
          text-align: center;
          font-weight: 900;
          color: #a45e30;
        }

        .bill-paper .paper-logo {
          width: 75px;
          height: 75px;
          object-fit: contain;
        }

        .bill-paper .paper-empty-row td {
          height: 9mm;
          min-height: 9mm;
          padding: 0 5px;
        }

        .bill-paper .paper-total {
          background: #f3e8dc;
          font-weight: 900;
        }

        .bill-paper .paper-final {
          background: #211b17;
          color: #e8c29f;
          font-size: 15px;
          font-weight: 900;
        }

        .bill-paper .paper-total td,
        .bill-paper .paper-final td {
          padding: 8px 9px;
          box-sizing: border-box;
        }

        .bill-paper .paper-total td:first-child,
        .bill-paper .paper-final td:first-child {
          text-align: right;
        }

        .bill-paper .paper-total td:last-child,
        .bill-paper .paper-final td:last-child {
          white-space: nowrap;
        }

        @media(max-width: 900px) {
          .billing-theme {
            padding: 22px;
          }

          .bill-item-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .bill-item-description {
            grid-column: span 3;
          }
        }

        @media(max-width: 600px) {
          .billing-theme {
            padding: 15px;
          }

          .bill-page-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .bill-page-title {
            font-size: 22px;
          }

          .bill-primary-btn {
            width: 100%;
          }

          .bill-stats-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .bill-stat-card {
            padding: 15px;
          }

          .bill-form-grid {
            grid-template-columns: 1fr;
          }

          .bill-form {
            padding: 16px;
          }

          .bill-modal-overlay {
            padding: 8px;
          }

          .bill-modal {
            max-height: 95vh;
          }

          .bill-item-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bill-item-description {
            grid-column: span 2;
          }

        
.bill-preview-page {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.bill-paper {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0 auto;
  padding: 8px;
  box-sizing: border-box;
  font-size: 8px;
  overflow-x: hidden;
}

.bill-paper table {
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

.bill-paper td,
.bill-paper th {
  padding: 4px 3px;
  font-size: 8px;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.bill-paper .paper-logo {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.bill-paper .paper-company {
  font-size: 10px;
  overflow-wrap: anywhere;
}

.bill-paper .paper-title {
  font-size: 12px;
  letter-spacing: 0;
  padding: 4px;
}

.bill-paper .paper-items-table {
  table-layout: fixed;
  font-size: 7px;
}

.bill-paper .paper-items-table th,
.bill-paper .paper-items-table td {
  padding: 4px 2px;
  font-size: 7px;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.bill-paper .paper-total td,
.bill-paper .paper-final td {
  padding: 5px 3px;
  font-size: 8px;
}

.bill-paper .paper-final {
  font-size: 10px;
}

.bill-preview-toolbar {
  width: 100%;
  max-width: 100%;
  gap: 7px;
  flex-wrap: wrap;
}


          .bill-preview-toolbar {
            flex-wrap: wrap;
          }

          .bill-back-btn,
          .bill-print-btn {
            flex: 1;
            justify-content: center;
          }

          .bill-modal-footer {
            flex-wrap: wrap;
          }
        }

        @media print {
    @page {
        size: A4 portrait;
        margin: 0;
    }

    html,
    body,
    #root {
        width: 100% !important;
        min-height: 0 !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
        background: #ffffff !important;
        overflow: visible !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    /* Hide everything except the invoice */
    body * {
        visibility: hidden !important;
    }

    #printable-invoice,
    #printable-invoice * {
        visibility: visible !important;
    }

    /* Remove preview background and outer spacing */
    .billing-theme,
    .bill-preview-page {
        display: block !important;
        position: static !important;
        width: 100% !important;
        min-height: 0 !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
        background: #ffffff !important;
        overflow: visible !important;
    }

    /* Hide only the preview buttons */
    .bill-preview-toolbar,
    .no-print {
        display: none !important;
    }

    /* Preserve the same invoice design as View Invoice */
    #printable-invoice {
        display: block !important;
        position: relative !important;
        width: 100% !important;
        max-width: 850px !important;
        min-height: 0 !important;
        height: auto !important;
        margin: 0 auto !important;
        padding: 35px !important;
        box-sizing: border-box !important;
        background: #ffffff !important;
        color: #171717 !important;
        box-shadow: none !important;
        border: none !important;
        font-family: Arial, sans-serif !important;
        font-size: 12px !important;
        overflow: visible !important;
    }

    /* Preserve original table appearance */
    #printable-invoice table {
        width: 100% !important;
        border-collapse: collapse !important;
    }

    #printable-invoice td,
    #printable-invoice th {
        border: 1px solid #555 !important;
        padding: 9px !important;
        font-size: inherit !important;
        line-height: normal !important;
    }

    /* Preserve original logo size */
    #printable-invoice .paper-logo {
        width: 75px !important;
        height: 75px !important;
        object-fit: contain !important;
    }

    /* Preserve original company and invoice title */
    #printable-invoice .paper-company {
        font-size: 17px !important;
    }

    #printable-invoice .paper-title {
        font-size: 22px !important;
        letter-spacing: 2px !important;
    }

    /* Preserve original colours */
    #printable-invoice .paper-heading {
        background: #211b17 !important;
        color: #e8c29f !important;
    }

    #printable-invoice .paper-total {
        background: #f3e8dc !important;
    }

    #printable-invoice .paper-final {
        background: #211b17 !important;
        color: #e8c29f !important;
        font-size: 15px !important;
    }

    #printable-invoice .paper-total td,
    #printable-invoice .paper-final td {
        padding: 8px 9px !important;
    }

    #printable-invoice tr {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
    }

   /* Keep signature on the first page */
#printable-invoice tr.paper-signature {
    break-inside: auto !important;
    page-break-inside: auto !important;
}

#printable-invoice tr.paper-signature td {
    padding: 8px 12px !important;
}

    /* Slightly reduce vertical spacing so the signature fits on page 1 */
    #printable-invoice {
        padding-top: 20px !important;
        padding-bottom: 20px !important;
    }

    #printable-invoice td,
    #printable-invoice th {
        padding-top: 6px !important;
        padding-bottom: 6px !important;
    }
}

      `}),c?n.jsxs("div",{className:"bill-preview-page",children:[n.jsxs("div",{className:"bill-preview-toolbar no-print",children:[n.jsxs("button",{onClick:()=>p(null),className:"bill-back-btn",children:[n.jsx(xd,{size:16}),s("cancel")||"Back to invoices"]}),n.jsxs("button",{onClick:he,className:"bill-print-btn",children:[n.jsx(Xd,{size:16}),s("printSavePdf")]})]}),n.jsx("div",{id:"printable-invoice",className:"bill-paper",children:n.jsx("table",{children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{width:"55%",children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"13px"},children:[n.jsx("img",{src:"/logo.png",alt:"NextGen Logo",className:"paper-logo"}),n.jsxs("div",{children:[n.jsx("div",{className:"paper-company",children:(U=c.company)==null?void 0:U.name}),c.isGst&&n.jsxs("p",{children:["GSTIN: ",(T=c.company)==null?void 0:T.gstin]})]})]})}),n.jsx("td",{className:"paper-title",children:c.isGst?"TAX INVOICE":"INVOICE"})]}),n.jsxs("tr",{children:[n.jsxs("td",{children:[n.jsx("strong",{children:(m=c.company)==null?void 0:m.name}),n.jsx("p",{children:(y=c.company)==null?void 0:y.address}),c.isGst&&n.jsxs("p",{children:["GSTIN: ",(Z=c.company)==null?void 0:Z.gstin]})]}),n.jsx("td",{style:{padding:0},children:n.jsx("table",{children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Date"})}),n.jsx("td",{children:c.date})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Invoice No"})}),n.jsx("td",{children:c.id})]})]})})})]}),n.jsx("tr",{children:n.jsx("td",{colSpan:"2",className:"paper-heading",children:"BILL FROM"})}),n.jsx("tr",{children:n.jsxs("td",{colSpan:"2",children:[n.jsx("strong",{children:(G=c.billFrom)==null?void 0:G.name}),c.isGst&&((ie=c.billFrom)==null?void 0:ie.gstin)&&n.jsxs("p",{children:["GSTIN: ",c.billFrom.gstin]})]})}),n.jsx("tr",{children:n.jsxs("td",{colSpan:"2",children:[n.jsx("strong",{children:"SITE LOCATION: "}),c.siteLocation]})}),n.jsx("tr",{children:n.jsx("td",{colSpan:"2",style:{padding:0},children:n.jsxs("table",{className:"paper-items-table",style:{textAlign:"center"},children:[n.jsx("thead",{className:"paper-heading",children:n.jsxs("tr",{children:[n.jsx("th",{children:"SN"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Unit"}),n.jsx("th",{children:"QTY"}),n.jsx("th",{children:"Discount"}),n.jsx("th",{children:"Rate"}),n.jsx("th",{children:"Amount"})]})}),n.jsxs("tbody",{children:[(Array.isArray(c.items)?c.items:[]).map((S,re)=>n.jsxs("tr",{children:[n.jsx("td",{children:re+1}),n.jsx("td",{style:{textAlign:"left"},children:S.description||""}),n.jsx("td",{children:S.unit||""}),n.jsx("td",{children:S.qty??""}),n.jsx("td",{children:S.discount?`${S.discount}%`:""}),n.jsx("td",{children:N(S.rate)}),n.jsx("td",{children:N(we(S))})]},`invoice-item-${re}`)),Array.from({length:Math.max(0,10-(Array.isArray(c.items)?c.items.length:0))}).map((S,re)=>n.jsxs("tr",{className:"paper-empty-row",children:[n.jsx("td",{children:" "}),n.jsx("td",{children:" "}),n.jsx("td",{children:" "}),n.jsx("td",{children:" "}),n.jsx("td",{children:" "}),n.jsx("td",{children:" "}),n.jsx("td",{children:" "})]},`empty-item-${re}`))]})]})})}),n.jsx("tr",{children:n.jsx("td",{colSpan:"2",style:{padding:0},children:(()=>{const{lumSum:S,gstAmount:re,finalAmount:B}=Se(c);return n.jsx("table",{style:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"},children:n.jsxs("tbody",{children:[n.jsxs("tr",{className:"paper-total",children:[n.jsx("td",{style:{width:"85%",textAlign:"right"},children:"LUMSUM AMOUNT"}),n.jsx("td",{style:{width:"15%",whiteSpace:"nowrap"},children:N(S)})]}),c.isGst&&n.jsxs("tr",{className:"paper-total",children:[n.jsxs("td",{style:{textAlign:"right"},children:["GST (",c.gstRate,"%)"]}),n.jsx("td",{style:{whiteSpace:"nowrap"},children:N(re)})]}),n.jsxs("tr",{className:"paper-final",children:[n.jsx("td",{style:{textAlign:"right"},children:s("finalAmount")}),n.jsx("td",{style:{whiteSpace:"nowrap"},children:N(B)})]})]})})})()})}),n.jsx("tr",{className:"paper-heading",children:n.jsx("td",{colSpan:"2",style:{textAlign:"center"},children:"BANK DETAILS"})}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Bank Name"})}),n.jsx("td",{children:(se=c.company)==null?void 0:se.bankName})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Account No."})}),n.jsx("td",{children:(ue=c.company)==null?void 0:ue.accountNo})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"IFSC CODE"})}),n.jsx("td",{children:($=c.company)==null?void 0:$.ifsc})]}),n.jsx("tr",{className:"paper-signature",children:n.jsx("td",{colSpan:"2",style:{padding:"24px 12px 10px"},children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:700},children:[n.jsxs("span",{children:["For ",(ce=c.company)==null?void 0:ce.name]}),n.jsx("span",{children:"Authorized Signatory"})]})})})]})})})]}):n.jsxs("div",{children:[n.jsxs("div",{className:"bill-page-header",children:[n.jsxs("div",{children:[n.jsx("div",{className:"bill-eyebrow",children:"NEXTGEN / FINANCIAL MANAGEMENT"}),n.jsx("h2",{className:"bill-page-title",children:s("invoicesTitle")}),n.jsx("p",{className:"bill-page-subtitle",children:s("invoicesSub")})]}),n.jsxs("button",{onClick:()=>O(!0),className:"bill-primary-btn",children:[n.jsx(Nt,{size:17}),s("createNewInvoice")]})]}),n.jsxs("div",{className:"bill-stats-grid",children:[n.jsxs("div",{className:"bill-stat-card",children:[n.jsx("div",{className:"bill-stat-icon",children:n.jsx(Pr,{size:22})}),n.jsxs("div",{children:[n.jsx("div",{className:"bill-stat-label",children:s("totalInvoices")}),n.jsx("h3",{className:"bill-stat-value",children:E.length})]})]}),n.jsxs("div",{className:"bill-stat-card",children:[n.jsx("div",{className:"bill-stat-icon",children:n.jsx(il,{size:22})}),n.jsxs("div",{children:[n.jsx("div",{className:"bill-stat-label",children:s("totalBilling")}),n.jsx("h3",{className:"bill-stat-value",children:N(E.reduce((S,re)=>S+Se(re).finalAmount,0))})]})]}),n.jsxs("div",{className:"bill-stat-card",children:[n.jsx("div",{className:"bill-stat-icon",children:n.jsx(Of,{size:22})}),n.jsxs("div",{children:[n.jsx("div",{className:"bill-stat-label",children:s("gstInvoices")}),n.jsx("h3",{className:"bill-stat-value",children:E.filter(S=>S.isGst).length})]})]})]}),n.jsxs("div",{className:"bill-table-card",children:[n.jsxs("div",{className:"bill-table-heading",children:[n.jsxs("div",{children:[n.jsx("h3",{children:s("invoiceRecords")}),n.jsx("p",{children:s("allGeneratedInvoices")})]}),n.jsx(gt,{size:21,color:"#a45e30"})]}),n.jsx("div",{className:"bill-table-wrap",children:n.jsxs("table",{className:"bill-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:s("invoiceNo")}),n.jsx("th",{children:s("clientName")}),n.jsx("th",{children:s("billingType")}),n.jsx("th",{children:s("date")}),n.jsx("th",{children:s("finalAmount")}),n.jsx("th",{style:{textAlign:"right"},children:s("action")})]})}),n.jsx("tbody",{children:_?n.jsx("tr",{children:n.jsx("td",{colSpan:"6",className:"bill-empty",children:s("loadingInvoices")})}):E.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"6",children:n.jsxs("div",{className:"bill-empty",children:[n.jsx("div",{className:"bill-empty-icon",children:n.jsx(Pr,{size:29})}),n.jsx("h3",{children:s("noInvoicesYet")}),n.jsx("p",{children:s("createFirstInvoice")})]})})}):E.map((S,re)=>{var f;const{finalAmount:B}=Se(S);return n.jsxs("tr",{children:[n.jsx("td",{className:"bill-invoice-id",children:S.id}),n.jsx("td",{className:"bill-client-name",children:((f=S.billFrom)==null?void 0:f.name)||"Client"}),n.jsx("td",{children:n.jsx("span",{className:`bill-type ${S.isGst?"bill-type-gst":"bill-type-non"}`,children:S.isGst?`GST (${S.gstRate}%)`:"Non-GST"})}),n.jsx("td",{children:S.date}),n.jsx("td",{style:{fontWeight:900,color:"#211b17"},children:N(B)}),n.jsx("td",{style:{textAlign:"right"},children:n.jsxs("button",{onClick:()=>p(S),className:"bill-view-btn",children:[n.jsx($n,{size:14}),s("viewPdf")]})})]},S._id||S.id||re)})})]})})]})]}),M&&n.jsx("div",{className:"bill-modal-overlay",onClick:()=>O(!1),children:n.jsxs("div",{className:"bill-modal",onClick:S=>S.stopPropagation(),children:[n.jsxs("div",{className:"bill-modal-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:s("createNewInvoice")}),n.jsx("p",{children:"Generate a professional project invoice"})]}),n.jsx("button",{onClick:()=>O(!1),className:"bill-close-btn",children:n.jsx(pr,{size:19})})]}),n.jsxs("form",{onSubmit:Pe,className:"bill-form",children:[n.jsxs("div",{className:"bill-section",children:[n.jsxs("div",{className:"bill-section-title",children:[n.jsx(Pr,{size:15}),"Billing Configuration"]}),n.jsxs("div",{className:"bill-gst-box",children:[n.jsxs("div",{className:"bill-radio-group",children:[n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gstOption",checked:oe,onChange:()=>ae(!0)}),s("withGst")]}),n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gstOption",checked:!oe,onChange:()=>ae(!1)}),s("withoutGst")]})]}),oe&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("label",{style:{fontSize:11,fontWeight:800},children:s("gstRate")}),n.jsx("input",{type:"number",min:"0",max:"100",step:"any",value:Q,onChange:S=>me(S.target.value===""?"":Number(S.target.value)),style:{width:75,padding:8,border:"1px solid #dfc8b1",borderRadius:7,outline:"none"}}),n.jsx("span",{style:{fontSize:12},children:"%"})]})]})]}),n.jsxs("div",{className:"bill-section",children:[n.jsxs("div",{className:"bill-section-title",children:[n.jsx(ur,{size:15}),"Client Information"]}),n.jsxs("div",{className:"bill-form-grid",children:[n.jsxs("div",{className:"bill-field",children:[n.jsxs("label",{children:[s("clientName")," *"]}),n.jsx("input",{type:"text",required:!0,placeholder:"Enter client name",value:H,onChange:S=>V(S.target.value)})]}),oe&&n.jsxs("div",{className:"bill-field",children:[n.jsx("label",{children:"Client GSTIN"}),n.jsx("input",{type:"text",placeholder:"Enter GSTIN",value:X,onChange:S=>je(S.target.value)})]})]}),n.jsxs("div",{className:"bill-field",style:{marginTop:15},children:[n.jsx("label",{children:s("siteLocation")}),n.jsx("input",{type:"text",placeholder:"Enter project/site location",value:be,onChange:S=>Le(S.target.value)})]})]}),n.jsxs("div",{className:"bill-section",children:[n.jsxs("div",{className:"bill-section-title",children:[n.jsx(gt,{size:15}),s("itemsWorkDetails")]}),n.jsx("div",{className:"bill-items-container",children:fe.map((S,re)=>n.jsxs("div",{className:"bill-item-card",children:[n.jsxs("div",{className:"bill-item-top",children:[n.jsxs("span",{className:"bill-item-number",children:[s("itemNum")," #",re+1]}),n.jsx("button",{type:"button",onClick:()=>Ae(re),className:"bill-delete-btn",disabled:fe.length===1,children:n.jsx(en,{size:15})})]}),n.jsxs("div",{className:"bill-item-grid",children:[n.jsxs("div",{className:"bill-field bill-item-description",children:[n.jsxs("label",{children:[s("description")," *"]}),n.jsx("input",{type:"text",placeholder:s("workDescriptionPlaceholder"),required:!0,value:S.description,onChange:B=>Ce(re,"description",B.target.value)})]}),n.jsxs("div",{className:"bill-field",children:[n.jsx("label",{children:s("unit")}),n.jsx("select",{value:S.unit,onChange:B=>Ce(re,"unit",B.target.value),children:te.map(B=>n.jsx("option",{value:B,children:B},B))})]}),n.jsxs("div",{className:"bill-field",children:[n.jsx("label",{children:s("quantity")}),n.jsx("input",{type:"number",min:"0",step:"any",value:S.qty,onChange:B=>Ce(re,"qty",B.target.value)})]}),n.jsxs("div",{className:"bill-field",children:[n.jsx("label",{children:s("rateLabel")}),n.jsx("input",{type:"number",min:"0",step:"any",value:S.rate,onChange:B=>Ce(re,"rate",B.target.value)})]}),n.jsxs("div",{className:"bill-field",children:[n.jsx("label",{children:s("discountPercent")}),n.jsx("input",{type:"number",min:"0",max:"100",step:"any",value:S.discount,onChange:B=>Ce(re,"discount",B.target.value)})]})]}),n.jsxs("div",{className:"bill-line-total",children:[s("lineAmount"),": ",N(we(S))]})]},re))}),n.jsxs("button",{type:"button",onClick:Be,className:"bill-add-item",style:{marginTop:12},children:[n.jsx(Nt,{size:15}),s("addAnotherItem")]})]}),n.jsxs("div",{className:"bill-section",children:[n.jsxs("div",{className:"bill-section-title",children:[n.jsx(il,{size:15}),s("invoiceSummary")]}),n.jsxs("div",{className:"bill-total-box",children:[n.jsxs("div",{className:"bill-total-row",children:[n.jsx("span",{children:s("lumsumAmount")}),n.jsx("strong",{children:N(Oe)})]}),oe&&n.jsxs("div",{className:"bill-total-row",children:[n.jsxs("span",{children:["GST (",Q||0,"%)"]}),n.jsx("strong",{children:N(ze)})]}),n.jsxs("div",{className:"bill-total-row bill-total-final",children:[n.jsx("span",{children:s("finalAmount")}),n.jsx("strong",{children:N($e)})]})]})]}),n.jsxs("div",{className:"bill-modal-footer",children:[n.jsx("button",{type:"button",onClick:()=>O(!1),className:"bill-cancel-btn",children:s("cancel")}),n.jsxs("button",{type:"submit",className:"bill-primary-btn",children:[n.jsx(aa,{size:16}),s("saveGenerate")]})]})]})]})})]})}function Vf(){const{t:s,lang:c}=Hn(),p=v=>{const R={Mason:"mason",Electrician:"electrician",Plumber:"plumber",Helper:"helper","Bar Bender":"barBender"};return R[v]?s(R[v]):v},[M,O]=L.useState("directory"),[E,J]=L.useState(!1),[_,ee]=L.useState(null),[te,oe]=L.useState([]),[ae,Q]=L.useState(!0),[me,H]=L.useState(""),V=(v=new Date)=>{const R=v.getFullYear(),de=String(v.getMonth()+1).padStart(2,"0"),Me=String(v.getDate()).padStart(2,"0");return`${R}-${de}-${Me}`},X=()=>{const v=new Date,R=new Date;R.setDate(v.getDate()-5);const de=new Date;return de.setDate(v.getDate()+5),{min:V(R),max:V(de)}},{min:je,max:be}=X(),fe=(()=>{const v=[];for(let R=6;R>=0;R--){const de=new Date;de.setDate(de.getDate()-R),v.push(V(de))}return v})(),[xe,Ne]=L.useState(V()),[we,Se]=L.useState(""),[Oe,ze]=L.useState(""),[$e,Be]=L.useState(""),[Ae,Ce]=L.useState("Mason"),[Ie,Pe]=L.useState(700),[he,N]=L.useState(""),[U,T]=L.useState(""),[m,y]=L.useState(""),Z=async()=>{try{const v=await fetch(`${Er}/api/labors`);if(!v.ok)throw new Error(`HTTP Error: ${v.status}`);const R=await v.json();console.log("Fetched Labors:",R),oe(Array.isArray(R)?R:[])}catch(v){console.error("Failed to fetch labors:",v)}finally{Q(!1)}};L.useEffect(()=>{Z()},[]);const G=(v,R)=>{var Me;const de=(Me=v.target.files)==null?void 0:Me[0];if(de){const it=new FileReader;it.onloadend=()=>{R(it.result)},it.readAsDataURL(de)}},ie=()=>{Se(""),ze(""),Be(""),Ce("Mason"),Pe(700),N(""),T(""),y("")},se=async v=>{v.preventDefault();const R={name:we,mobile:Oe,location:$e,role:Ae,dailyWage:Number(Ie),profilePhoto:he||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",panPhoto:U||"Verified",aadharPhoto:m||"Verified",attendanceRecords:{}};try{const de=await fetch("${API_BASE_URL}/api/labors",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R)});if(!de.ok){const Me=await de.json();throw new Error(Me.error||"Unable to save labor")}await Z(),J(!1),ie()}catch(de){console.error("Failed to save labor:",de),alert(s("unableToSaveWorker")+de.message)}},ue=async(v,R,de)=>{try{if(!v||!R||!de){console.error("Missing attendance data:",{laborId:v,targetDate:R,status:de});return}const Me=await fetch(`${Er}/api/labors/${v}/attendance`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:R,status:de})}),it=await Me.json();if(!Me.ok)throw new Error(it.error||"Attendance update failed");await Z(),console.log("Attendance saved:",it)}catch(Me){console.error("Failed to update attendance:",Me),alert(s("unableToSaveAttendance")+Me.message)}},$=v=>v!=null&&v.attendanceRecords?v.attendanceRecords instanceof Map?Object.fromEntries(v.attendanceRecords):v.attendanceRecords:{},ce=(v,R)=>$(v)[R]||"Not Marked",S=v=>{let R=0;const de=$(v);Object.values(de).forEach(it=>{it==="Present"?R+=1:it==="Half Day"&&(R+=.5)});const Me=R*Number(v.dailyWage||0);return{totalDaysWorked:R,totalEarned:Me}},re=te.filter(v=>{const R=me.toLowerCase();return(v.name||"").toLowerCase().includes(R)||(v.mobile||"").toLowerCase().includes(R)||(v.role||"").toLowerCase().includes(R)||(v.location||"").toLowerCase().includes(R)}),B=te.length,f=te.reduce((v,R)=>v+Number(R.dailyWage||0),0),D=te.filter(v=>ce(v,V())==="Present").length,C=te.filter(v=>ce(v,V())==="Half Day").length,P=te.reduce((v,R)=>v+S(R).totalEarned,0),ge=v=>Number(v||0).toLocaleString(c==="mr"?"mr-IN":"en-IN",{maximumFractionDigits:2}),He=(v,R)=>{const de=typeof v=="string"&&(v.startsWith("data:image")||v.startsWith("http://")||v.startsWith("https://"));return n.jsxs("div",{className:"nextgen-labor-document",children:[n.jsxs("div",{className:"nextgen-labor-document-heading",children:[n.jsx(na,{size:17}),n.jsx("span",{children:R})]}),de?n.jsxs("a",{href:v,target:"_blank",rel:"noreferrer",children:[n.jsx("img",{src:v,alt:R,className:"nextgen-labor-document-image"}),n.jsxs("span",{className:"nextgen-labor-document-link",children:[s("viewDocument")," ",n.jsx(ol,{size:13})]})]}):n.jsxs("div",{className:"nextgen-labor-document-status",children:[n.jsx(aa,{size:16}),n.jsx("span",{children:v||s("notUploaded")})]})]})};return n.jsxs("div",{className:"nextgen-labor-page",children:[n.jsx("style",{children:`

        .nextgen-labor-page {
          --labor-dark: #211b17;
          --labor-dark-2: #30251e;
          --labor-bronze: #a45e30;
          --labor-bronze-light: #c58b60;
          --labor-beige: #e8c29f;
          --labor-bg: #f5f1eb;
          --labor-card: #ffffff;
          --labor-text: #302820;
          --labor-muted: #92877c;
          --labor-border: #e9e1d8;
          width: 100%;
          min-height: 100%;
          padding: 28px;
          background: var(--labor-bg);
          color: var(--labor-text);
          font-family: inherit;
        }

        .nextgen-labor-page * {
          box-sizing: border-box;
        }

        .labor-page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .labor-heading-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .labor-heading-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--labor-dark);
          color: var(--labor-beige);
          border-radius: 16px;
          box-shadow: 0 6px 16px rgba(33, 27, 23, .13);
        }

        .labor-heading-title {
          font-size: 23px;
          font-weight: 800;
          letter-spacing: -.6px;
          color: var(--labor-dark);
          margin: 0;
        }

        .labor-heading-subtitle {
          margin: 5px 0 0;
          color: var(--labor-muted);
          font-size: 12px;
        }

        .labor-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          background: var(--labor-dark);
          color: #fff;
          border: 1px solid var(--labor-dark);
          border-radius: 11px;
          padding: 12px 18px;
          font-size: 12px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
          box-shadow: 0 5px 12px rgba(33, 27, 23, .12);
        }

        .labor-primary-btn:hover {
          background: var(--labor-bronze);
          border-color: var(--labor-bronze);
          transform: translateY(-1px);
        }

        .labor-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 25px;
        }

        .labor-stat-card {
          position: relative;
          overflow: hidden;
          background: var(--labor-card);
          border: 1px solid var(--labor-border);
          border-radius: 16px;
          padding: 19px;
          min-height: 125px;
          box-shadow: 0 3px 12px rgba(53, 42, 31, .035);
        }

        .labor-stat-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .labor-stat-icon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #f3e8dc;
          color: var(--labor-bronze);
        }

        .labor-stat-label {
          color: var(--labor-muted);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .65px;
        }

        .labor-stat-value {
          color: var(--labor-dark);
          font-size: 25px;
          font-weight: 850;
          letter-spacing: -.6px;
          line-height: 1.2;
        }

        .labor-stat-note {
          color: #a69a8e;
          font-size: 10px;
          margin-top: 5px;
        }

        .labor-tabs-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 20px;
          padding: 7px;
          background: #eae2d8;
          border: 1px solid #e2d8cc;
          border-radius: 14px;
        }

        .labor-tabs {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .labor-tab {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 15px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          color: #776b60;
          font-size: 11px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
        }

        .labor-tab:hover {
          background: rgba(255,255,255,.55);
          color: var(--labor-dark);
        }

        .labor-tab.active {
          background: var(--labor-dark);
          color: #fff;
          box-shadow: 0 3px 8px rgba(33, 27, 23, .15);
        }

        .labor-search {
          position: relative;
          min-width: 220px;
          max-width: 280px;
          flex: 1;
        }

        .labor-search input {
          width: 100%;
          height: 38px;
          padding: 0 13px 0 37px;
          border: 1px solid #e0d5c8;
          border-radius: 9px;
          background: #fff;
          outline: none;
          font-size: 11px;
          color: var(--labor-dark);
        }

        .labor-search input:focus {
          border-color: var(--labor-bronze);
          box-shadow: 0 0 0 3px rgba(164, 94, 48, .08);
        }

        .labor-search-icon {
          position: absolute;
          top: 11px;
          left: 12px;
          color: #a39484;
        }

        .labor-section-card {
          background: #fff;
          border: 1px solid var(--labor-border);
          border-radius: 17px;
          overflow: hidden;
          box-shadow: 0 3px 12px rgba(53, 42, 31, .035);
        }

        .labor-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          padding: 20px 22px;
          border-bottom: 1px solid var(--labor-border);
        }

        .labor-section-title {
          margin: 0;
          color: var(--labor-dark);
          font-size: 15px;
          font-weight: 800;
        }

        .labor-section-description {
          margin: 5px 0 0;
          font-size: 11px;
          color: var(--labor-muted);
        }

        .labor-count-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 11px;
          background: #f4ece3;
          color: var(--labor-bronze);
          border-radius: 8px;
          font-size: 10px;
          font-weight: 800;
        }

        .labor-directory-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .labor-worker-card {
          background: #fff;
          border: 1px solid var(--labor-border);
          border-radius: 16px;
          padding: 18px;
          transition: .2s ease;
          box-shadow: 0 3px 12px rgba(53, 42, 31, .025);
        }

        .labor-worker-card:hover {
          border-color: #cba17f;
          transform: translateY(-3px);
          box-shadow: 0 9px 22px rgba(53, 42, 31, .07);
        }

        .labor-worker-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .labor-worker-identity {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .labor-worker-avatar {
          width: 49px;
          height: 49px;
          flex-shrink: 0;
          border-radius: 14px;
          object-fit: cover;
          border: 2px solid #ead5c1;
          background: #f2e8de;
        }

        .labor-worker-name {
          margin: 0;
          color: var(--labor-dark);
          font-size: 14px;
          font-weight: 800;
          overflow-wrap: anywhere;
        }

        .labor-worker-role {
          display: inline-block;
          margin-top: 5px;
          padding: 4px 8px;
          border-radius: 6px;
          background: #f4ece3;
          color: var(--labor-bronze);
          font-size: 9px;
          font-weight: 800;
        }

        .labor-worker-id {
          max-width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 6px 8px;
          border-radius: 7px;
          background: #f5f2ee;
          color: #8c8075;
          font-family: monospace;
          font-size: 9px;
        }

        .labor-worker-details {
          display: grid;
          gap: 11px;
          margin-top: 20px;
          padding: 14px 0;
          border-top: 1px solid #f0ebe5;
          border-bottom: 1px solid #f0ebe5;
        }

        .labor-worker-detail {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #786d63;
          font-size: 11px;
          min-width: 0;
        }

        .labor-worker-detail svg {
          flex-shrink: 0;
          color: #b27b52;
        }

        .labor-worker-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 15px;
        }

        .labor-wage-label {
          color: #a2978b;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .labor-wage-value {
          display: block;
          margin-top: 4px;
          color: var(--labor-dark);
          font-size: 15px;
          font-weight: 850;
        }

        .labor-outline-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 11px;
          background: #f5f1eb;
          color: var(--labor-dark);
          border: 1px solid #e9dfd4;
          border-radius: 9px;
          font-size: 10px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
        }

        .labor-outline-btn:hover {
          background: var(--labor-dark);
          border-color: var(--labor-dark);
          color: #fff;
        }

        .labor-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 65px 20px;
          text-align: center;
          background: #fff;
          border: 1px dashed #d9cfc3;
          border-radius: 16px;
        }

        .labor-empty-icon {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3e9de;
          color: var(--labor-bronze);
          border-radius: 18px;
          margin-bottom: 14px;
        }

        .labor-empty-state h3 {
          margin: 0;
          color: var(--labor-dark);
          font-size: 14px;
          font-weight: 800;
        }

        .labor-empty-state p {
          margin: 7px 0 0;
          color: var(--labor-muted);
          font-size: 11px;
        }

        .labor-attendance-date-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          padding: 17px 19px;
          background: #f5eee6;
          border: 1px solid #e8d8c7;
          border-radius: 13px;
        }

        .labor-date-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .labor-date-icon {
          width: 41px;
          height: 41px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--labor-beige);
          background: var(--labor-dark);
          border-radius: 11px;
        }

        .labor-date-label {
          display: block;
          color: #90775f;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: .7px;
          text-transform: uppercase;
        }

        .labor-date-picker {
          margin-top: 4px;
          padding: 5px 8px;
          border: 1px solid #dfc9b3;
          border-radius: 7px;
          background: #fff;
          color: var(--labor-dark);
          font-size: 11px;
          font-weight: 750;
          outline: none;
        }

        .labor-attendance-summary {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .labor-attendance-summary span {
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 800;
        }

        .labor-summary-present {
          background: #e5f2e9;
          color: #39734b;
        }

        .labor-summary-half {
          background: #f8edda;
          color: #9b6b24;
        }

        .labor-summary-absent {
          background: #f8e5e2;
          color: #a44d43;
        }

        .labor-roster-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 23px 0 13px;
        }

        .labor-roster-heading h3 {
          margin: 0;
          font-size: 13px;
          color: var(--labor-dark);
          font-weight: 800;
        }

        .labor-roster-heading span {
          color: #a29588;
          font-size: 10px;
        }

        .labor-roster-list {
          display: grid;
          gap: 10px;
        }

        .labor-roster-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          padding: 13px 15px;
          border: 1px solid #eee8e1;
          border-radius: 12px;
          background: #fff;
          transition: .2s ease;
        }

        .labor-roster-row:hover {
          border-color: #d8b99c;
          background: #fdfbf8;
        }

        .labor-roster-worker {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .labor-roster-worker img {
          width: 39px;
          height: 39px;
          border-radius: 11px;
          object-fit: cover;
          border: 1px solid #ead8c6;
        }

        .labor-roster-worker h4 {
          margin: 0;
          font-size: 12px;
          color: var(--labor-dark);
          font-weight: 800;
        }

        .labor-roster-worker p {
          margin: 4px 0 0;
          color: #988c80;
          font-size: 10px;
        }

        .labor-status-buttons {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .labor-status-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 8px 10px;
          border: 1px solid #e7dfd6;
          border-radius: 8px;
          background: #fff;
          color: #7c7167;
          font-size: 10px;
          font-weight: 750;
          cursor: pointer;
          transition: .2s ease;
        }

        .labor-status-btn.present.active {
          background: #39734b;
          color: #fff;
          border-color: #39734b;
        }

        .labor-status-btn.half.active {
          background: #b17a2d;
          color: #fff;
          border-color: #b17a2d;
        }

        .labor-status-btn.absent.active {
          background: #a44d43;
          color: #fff;
          border-color: #a44d43;
        }

        .labor-status-btn:not(.active):hover {
          background: #f5f1eb;
        }

        .labor-matrix-section {
          margin-top: 25px;
          padding-top: 22px;
          border-top: 1px solid var(--labor-border);
        }

        .labor-matrix-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .labor-matrix-heading h3 {
          margin: 0;
          font-size: 13px;
          color: var(--labor-dark);
          font-weight: 850;
        }

        .labor-matrix-heading span {
          color: #a3978a;
          font-size: 10px;
        }

        .labor-table-scroll {
          width: 100%;
          overflow-x: auto;
        }

        .labor-table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
          text-align: left;
        }

        .labor-table th {
          padding: 13px 14px;
          background: #f5f1eb;
          color: #897b6d;
          font-size: 9px;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: .5px;
          white-space: nowrap;
          border-bottom: 1px solid #e9e1d8;
        }

        .labor-table td {
          padding: 13px 14px;
          color: #5e544a;
          font-size: 11px;
          border-bottom: 1px solid #f0ebe5;
          vertical-align: middle;
        }

        .labor-table tbody tr:hover {
          background: #fdfbf8;
        }

        .labor-table-worker {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--labor-dark);
          font-weight: 750;
          white-space: nowrap;
        }

        .labor-table-worker img {
          width: 29px;
          height: 29px;
          border-radius: 9px;
          object-fit: cover;
        }

        .labor-matrix-select {
          padding: 7px 8px;
          border: 1px solid #e5ded6;
          border-radius: 7px;
          outline: none;
          font-size: 9px;
          font-weight: 750;
          cursor: pointer;
          max-width: 105px;
        }

        .labor-matrix-select.present {
          background: #e5f2e9;
          color: #39734b;
          border-color: #c5dfcb;
        }

        .labor-matrix-select.half {
          background: #f8edda;
          color: #9b6b24;
          border-color: #ead7ad;
        }

        .labor-matrix-select.absent {
          background: #f8e5e2;
          color: #a44d43;
          border-color: #e9c6c1;
        }

        .labor-matrix-select.unmarked {
          background: #f5f2ee;
          color: #81766c;
        }

        .labor-wage-summary-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          padding: 19px 21px;
          background: #fff;
          border-bottom: 1px solid var(--labor-border);
        }

        .labor-wage-summary {
          padding: 14px;
          border-radius: 11px;
          background: #f7f3ee;
        }

        .labor-wage-summary span {
          display: block;
          color: #96897d;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .labor-wage-summary strong {
          display: block;
          margin-top: 7px;
          color: var(--labor-dark);
          font-size: 19px;
          font-weight: 850;
        }

        .labor-wage-summary.highlight {
          background: var(--labor-dark);
        }

        .labor-wage-summary.highlight span {
          color: #c9aa8c;
        }

        .labor-wage-summary.highlight strong {
          color: #f1d3b6;
        }

        .labor-payment-amount {
          color: var(--labor-bronze) !important;
          font-weight: 850;
          font-size: 14px !important;
        }

        .labor-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          background: rgba(22, 17, 13, .65);
          backdrop-filter: blur(5px);
        }

        .labor-modal {
          width: 100%;
          max-width: 590px;
          max-height: 91vh;
          overflow-y: auto;
          background: #fff;
          border-radius: 19px;
          box-shadow: 0 25px 70px rgba(0,0,0,.25);
          animation: laborModalIn .22s ease;
        }

        @keyframes laborModalIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .labor-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 19px 22px;
          background: var(--labor-dark);
          color: #fff;
          border-radius: 19px 19px 0 0;
        }

        .labor-modal-header h3 {
          margin: 0;
          color: #fff;
          font-size: 15px;
          font-weight: 800;
        }

        .labor-modal-header p {
          margin: 5px 0 0;
          color: #c7b5a4;
          font-size: 10px;
        }

        .labor-modal-close {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 9px;
          background: rgba(255,255,255,.08);
          color: #fff;
          cursor: pointer;
        }

        .labor-modal-close:hover {
          background: var(--labor-bronze);
        }

        .labor-modal-body {
          padding: 22px;
        }

        .labor-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .labor-form-group {
          min-width: 0;
        }

        .labor-form-group.full {
          grid-column: 1 / -1;
        }

        .labor-form-group label {
          display: block;
          margin-bottom: 7px;
          color: #685b4e;
          font-size: 10px;
          font-weight: 800;
        }

        .labor-form-group input,
        .labor-form-group select {
          width: 100%;
          min-height: 41px;
          padding: 10px 12px;
          border: 1px solid #e5ddd4;
          border-radius: 9px;
          background: #fff;
          color: var(--labor-dark);
          outline: none;
          font-size: 11px;
          transition: .2s ease;
        }

        .labor-form-group input:focus,
        .labor-form-group select:focus {
          border-color: var(--labor-bronze);
          box-shadow: 0 0 0 3px rgba(164, 94, 48, .08);
        }

        .labor-upload-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 20px;
        }

        .labor-upload-box {
          min-width: 0;
          padding: 13px 10px;
          border: 1px dashed #d9c9b8;
          border-radius: 11px;
          background: #fbf8f4;
          text-align: center;
        }

        .labor-upload-box svg {
          color: var(--labor-bronze);
          margin-bottom: 6px;
        }

        .labor-upload-box strong {
          display: block;
          margin-bottom: 9px;
          color: #6e5e4e;
          font-size: 9px;
        }

        .labor-upload-box input {
          width: 100%;
          font-size: 9px;
          color: #8c8176;
        }

        .labor-uploaded-label {
          display: block;
          margin-top: 7px;
          color: #428056;
          font-size: 9px;
          font-weight: 800;
        }

        .labor-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 9px;
          padding-top: 18px;
          margin-top: 20px;
          border-top: 1px solid #eee8e1;
        }

        .labor-cancel-btn {
          padding: 10px 16px;
          border: 1px solid #e2d9cf;
          border-radius: 9px;
          background: #fff;
          color: #75685c;
          font-size: 10px;
          font-weight: 750;
          cursor: pointer;
        }

        .labor-save-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 17px;
          border: 1px solid var(--labor-dark);
          border-radius: 9px;
          background: var(--labor-dark);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        .labor-save-btn:hover {
          background: var(--labor-bronze);
          border-color: var(--labor-bronze);
        }

        .labor-profile-info {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px;
          background: #f7f3ee;
          border: 1px solid #eee5da;
          border-radius: 12px;
          margin-bottom: 18px;
        }

        .labor-profile-info img {
          width: 65px;
          height: 65px;
          object-fit: cover;
          border-radius: 15px;
          border: 2px solid #dfc2a6;
        }

        .labor-profile-info h4 {
          margin: 0;
          color: var(--labor-dark);
          font-size: 15px;
          font-weight: 850;
        }

        .labor-profile-info p {
          margin: 5px 0 0;
          color: #938477;
          font-size: 10px;
        }

        .labor-documents-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .nextgen-labor-document {
          padding: 12px;
          border: 1px solid #eee6dd;
          border-radius: 11px;
          background: #fff;
        }

        .labor-document-profile {
          grid-column: 1 / -1;
        }

        .nextgen-labor-document-heading {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 10px;
          color: #756354;
          font-size: 10px;
          font-weight: 800;
        }

        .nextgen-labor-document-heading svg {
          color: var(--labor-bronze);
        }

        .nextgen-labor-document-image {
          display: block;
          width: 100%;
          height: 130px;
          object-fit: contain;
          border-radius: 8px;
          background: #f5f1eb;
        }

        .nextgen-labor-document-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 8px;
          color: var(--labor-bronze);
          font-size: 9px;
          font-weight: 800;
        }

        .nextgen-labor-document-status {
          display: flex;
          align-items: center;
          gap: 7px;
          min-height: 40px;
          color: #54835d;
          font-size: 10px;
          font-weight: 750;
        }

        .labor-loading {
          padding: 60px 20px;
          text-align: center;
          color: #8f8173;
          font-size: 12px;
        }

        .labor-loading svg {
          margin: 0 auto 10px;
          color: var(--labor-bronze);
          animation: laborSpin 1.2s linear infinite;
        }

        @keyframes laborSpin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1100px) {
          .labor-directory-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .labor-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .nextgen-labor-page {
            padding: 16px;
          }

          .labor-heading-title {
            font-size: 19px;
          }

          .labor-heading-icon {
            width: 45px;
            height: 45px;
          }

          .labor-directory-grid {
            grid-template-columns: 1fr;
          }

          .labor-tabs-wrapper {
            align-items: stretch;
          }

          .labor-tabs {
            width: 100%;
          }

          .labor-tab {
            flex: 1;
            padding: 10px 8px;
            font-size: 9px;
          }

          .labor-search {
            max-width: none;
          }

          .labor-wage-summary-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .labor-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px;
          }

          .labor-stat-card {
            padding: 13px;
            min-height: 110px;
          }

          .labor-stat-value {
            font-size: 20px;
          }

          .labor-stat-label {
            font-size: 9px;
          }

          .labor-status-buttons {
            width: 100%;
          }

          .labor-status-btn {
            flex: 1;
            justify-content: center;
            padding: 8px 6px;
            font-size: 9px;
          }

          .labor-form-grid {
            grid-template-columns: 1fr;
          }

          .labor-form-group.full {
            grid-column: auto;
          }

          .labor-upload-grid {
            grid-template-columns: 1fr;
          }

          .labor-documents-grid {
            grid-template-columns: 1fr;
          }

          .labor-document-profile {
            grid-column: auto;
          }

          .labor-modal-body {
            padding: 16px;
          }

          .labor-attendance-summary {
            width: 100%;
          }
        }

      `}),n.jsxs("div",{className:"labor-page-header",children:[n.jsxs("div",{className:"labor-heading-left",children:[n.jsx("div",{className:"labor-heading-icon",children:n.jsx(Wn,{size:25})}),n.jsxs("div",{children:[n.jsx("h2",{className:"labor-heading-title",children:s("laborPageTitle")}),n.jsx("p",{className:"labor-heading-subtitle",children:s("laborPageSub")})]})]}),n.jsxs("button",{onClick:()=>J(!0),className:"labor-primary-btn",children:[n.jsx(Nt,{size:16}),s("addNewLabor")]})]}),n.jsxs("div",{className:"labor-stats-grid",children:[n.jsxs("div",{className:"labor-stat-card",children:[n.jsxs("div",{className:"labor-stat-top",children:[n.jsx("span",{className:"labor-stat-label",children:s("totalWorkers")}),n.jsx("div",{className:"labor-stat-icon",children:n.jsx(Wn,{size:18})})]}),n.jsx("div",{className:"labor-stat-value",children:B}),n.jsx("div",{className:"labor-stat-note",children:s("registeredLaborMembers")})]}),n.jsxs("div",{className:"labor-stat-card",children:[n.jsxs("div",{className:"labor-stat-top",children:[n.jsx("span",{className:"labor-stat-label",children:s("presentToday")}),n.jsx("div",{className:"labor-stat-icon",children:n.jsx(tl,{size:18})})]}),n.jsx("div",{className:"labor-stat-value",children:D}),n.jsxs("div",{className:"labor-stat-note",children:[C," ",s("halfDayAttendance")]})]}),n.jsxs("div",{className:"labor-stat-card",children:[n.jsxs("div",{className:"labor-stat-top",children:[n.jsx("span",{className:"labor-stat-label",children:s("dailyWageTotal")}),n.jsx("div",{className:"labor-stat-icon",children:n.jsx(dd,{size:18})})]}),n.jsxs("div",{className:"labor-stat-value",children:["₹",ge(f)]}),n.jsx("div",{className:"labor-stat-note",children:s("combinedDailyWages")})]}),n.jsxs("div",{className:"labor-stat-card",children:[n.jsxs("div",{className:"labor-stat-top",children:[n.jsx("span",{className:"labor-stat-label",children:s("totalEarnings")}),n.jsx("div",{className:"labor-stat-icon",children:n.jsx(ld,{size:18})})]}),n.jsxs("div",{className:"labor-stat-value",children:["₹",ge(P)]}),n.jsx("div",{className:"labor-stat-note",children:s("savedAttendanceRecords")})]})]}),n.jsxs("div",{className:"labor-tabs-wrapper",children:[n.jsx("div",{className:"labor-tabs",children:[{id:"directory",label:s("laborDirectory"),icon:Wn},{id:"attendance",label:s("attendance"),icon:tl},{id:"wages",label:s("wageReports"),icon:ld}].map(v=>{const R=v.icon;return n.jsxs("button",{onClick:()=>O(v.id),className:`labor-tab ${M===v.id?"active":""}`,children:[n.jsx(R,{size:15}),v.label,v.id==="directory"&&n.jsxs("span",{children:["(",te.length,")"]})]},v.id)})}),M==="directory"&&n.jsxs("div",{className:"labor-search",children:[n.jsx(ru,{size:15,className:"labor-search-icon"}),n.jsx("input",{type:"text",placeholder:s("searchWorkers"),value:me,onChange:v=>H(v.target.value)})]})]}),ae?n.jsx("div",{className:"labor-section-card",children:n.jsxs("div",{className:"labor-loading",children:[n.jsx(Wf,{size:25}),n.jsx("div",{children:s("loadingLaborRecords")})]})}):n.jsxs(n.Fragment,{children:[M==="directory"&&n.jsx("div",{children:re.length===0?n.jsxs("div",{className:"labor-empty-state",children:[n.jsx("div",{className:"labor-empty-icon",children:n.jsx(Wn,{size:28})}),n.jsx("h3",{children:s(me?"noMatchingWorkers":"noWorkerProfiles")}),n.jsx("p",{children:s(me?"searchWorkerHint":"addFirstWorkerHint")})]}):n.jsx("div",{className:"labor-directory-grid",children:re.map(v=>n.jsxs("div",{className:"labor-worker-card",children:[n.jsxs("div",{className:"labor-worker-top",children:[n.jsxs("div",{className:"labor-worker-identity",children:[n.jsx("img",{src:v.profilePhoto||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",alt:v.name,className:"labor-worker-avatar"}),n.jsxs("div",{children:[n.jsx("h3",{className:"labor-worker-name",children:v.name}),n.jsx("span",{className:"labor-worker-role",children:p(v.role)})]})]}),v.laborId&&n.jsx("span",{className:"labor-worker-id",children:v.laborId})]}),n.jsxs("div",{className:"labor-worker-details",children:[n.jsxs("div",{className:"labor-worker-detail",children:[n.jsx(Bf,{size:14}),n.jsx("span",{children:v.mobile||s("notProvided")})]}),n.jsxs("div",{className:"labor-worker-detail",children:[n.jsx(sl,{size:14}),n.jsx("span",{children:v.location||s("locationNotProvided")})]}),n.jsxs("div",{className:"labor-worker-detail",children:[n.jsx(yd,{size:14}),n.jsx("span",{children:p(v.role)||s("worker")})]})]}),n.jsxs("div",{className:"labor-worker-footer",children:[n.jsxs("div",{children:[n.jsx("span",{className:"labor-wage-label",children:s("dailyCharges")}),n.jsxs("strong",{className:"labor-wage-value",children:["₹",ge(v.dailyWage)," ",s("perDay")]})]}),n.jsxs("button",{onClick:()=>ee(v),className:"labor-outline-btn",children:[n.jsx($n,{size:14}),s("viewProfile")]})]})]},v._id))})}),M==="attendance"&&n.jsxs("div",{className:"labor-section-card",children:[n.jsxs("div",{className:"labor-section-header",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"labor-section-title",children:s("attendanceManagement")}),n.jsx("p",{className:"labor-section-description",children:s("markAttendanceHint")})]}),n.jsxs("span",{className:"labor-count-label",children:[n.jsx(Wn,{size:13}),te.length," ",s("workers")]})]}),n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{className:"labor-attendance-date-box",children:[n.jsxs("div",{className:"labor-date-info",children:[n.jsx("div",{className:"labor-date-icon",children:n.jsx(al,{size:20})}),n.jsxs("div",{children:[n.jsx("label",{className:"labor-date-label",children:s("selectAttendanceDate")}),n.jsx("input",{type:"date",value:xe,min:je,max:be,onChange:v=>Ne(v.target.value),className:"labor-date-picker"})]})]}),n.jsxs("div",{className:"labor-attendance-summary",children:[n.jsxs("span",{className:"labor-summary-present",children:[s("present"),": ",te.filter(v=>ce(v,xe)==="Present").length]}),n.jsxs("span",{className:"labor-summary-half",children:[s("halfDay"),": ",te.filter(v=>ce(v,xe)==="Half Day").length]}),n.jsxs("span",{className:"labor-summary-absent",children:[s("absent"),": ",te.filter(v=>ce(v,xe)==="Absent").length]})]})]}),n.jsxs("div",{className:"labor-roster-heading",children:[n.jsx("h3",{children:s("workerAttendanceRoster")}),n.jsx("span",{children:xe})]}),te.length===0?n.jsxs("div",{className:"labor-empty-state",children:[n.jsx("div",{className:"labor-empty-icon",children:n.jsx(tl,{size:27})}),n.jsx("h3",{children:s("noWorkersAvailable")}),n.jsx("p",{children:s("addWorkersBeforeAttendance")})]}):n.jsx("div",{className:"labor-roster-list",children:te.map(v=>{const R=ce(v,xe);return n.jsxs("div",{className:"labor-roster-row",children:[n.jsxs("div",{className:"labor-roster-worker",children:[n.jsx("img",{src:v.profilePhoto||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",alt:v.name}),n.jsxs("div",{children:[n.jsx("h4",{children:v.name}),n.jsxs("p",{children:[p(v.role)," · ",s("dailyWage"),": ₹",ge(v.dailyWage)]})]})]}),n.jsxs("div",{className:"labor-status-buttons",children:[n.jsxs("button",{onClick:()=>ue(v._id,xe,"Present"),className:`labor-status-btn present ${R==="Present"?"active":""}`,children:[n.jsx(aa,{size:13}),s("present")]}),n.jsxs("button",{onClick:()=>ue(v._id,xe,"Half Day"),className:`labor-status-btn half ${R==="Half Day"?"active":""}`,children:[n.jsx(Mf,{size:13}),s("halfDay")]}),n.jsxs("button",{onClick:()=>ue(v._id,xe,"Absent"),className:`labor-status-btn absent ${R==="Absent"?"active":""}`,children:[n.jsx(_f,{size:13}),s("absent")]})]})]},v._id)})}),n.jsxs("div",{className:"labor-matrix-section",children:[n.jsxs("div",{className:"labor-matrix-heading",children:[n.jsx("h3",{children:s("past7DaysAttendance")}),n.jsx("span",{children:s("selectStatusToUpdate")})]}),n.jsx("div",{className:"labor-table-scroll",children:n.jsxs("table",{className:"labor-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:s("worker")}),fe.map(v=>n.jsx("th",{style:{textAlign:"center"},children:v.slice(5)},v))]})}),n.jsxs("tbody",{children:[te.map(v=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs("div",{className:"labor-table-worker",children:[n.jsx("img",{src:v.profilePhoto||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",alt:v.name}),n.jsx("span",{children:v.name})]})}),fe.map(R=>{const de=ce(v,R);let Me="unmarked";return de==="Present"&&(Me="present"),de==="Half Day"&&(Me="half"),de==="Absent"&&(Me="absent"),n.jsx("td",{style:{textAlign:"center"},children:n.jsxs("select",{value:de,onChange:it=>ue(v._id,R,it.target.value),className:`labor-matrix-select ${Me}`,children:[n.jsx("option",{value:"Not Marked",children:s("notMarked")}),n.jsx("option",{value:"Present",children:s("present")}),n.jsx("option",{value:"Half Day",children:s("halfDay")}),n.jsx("option",{value:"Absent",children:s("absent")})]})},R)})]},v._id)),te.length===0&&n.jsx("tr",{children:n.jsx("td",{colSpan:"8",style:{textAlign:"center"},children:s("noAttendanceRecords")})})]})]})})]})]})]}),M==="wages"&&n.jsxs("div",{className:"labor-section-card",children:[n.jsxs("div",{className:"labor-section-header",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"labor-section-title",children:s("laborPaymentReports")}),n.jsx("p",{className:"labor-section-description",children:s("paymentCalculationHint")})]}),n.jsxs("span",{className:"labor-count-label",children:[n.jsx(dd,{size:13}),s("wageSummary")]})]}),n.jsxs("div",{className:"labor-wage-summary-grid",children:[n.jsxs("div",{className:"labor-wage-summary",children:[n.jsx("span",{children:s("registeredWorkers")}),n.jsx("strong",{children:te.length})]}),n.jsxs("div",{className:"labor-wage-summary",children:[n.jsx("span",{children:s("combinedDailyWages")}),n.jsxs("strong",{children:["₹",ge(f)]})]}),n.jsxs("div",{className:"labor-wage-summary highlight",children:[n.jsx("span",{children:s("totalPaymentDue")}),n.jsxs("strong",{children:["₹",ge(P)]})]})]}),n.jsx("div",{className:"labor-table-scroll",children:n.jsxs("table",{className:"labor-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:s("laborName")}),n.jsx("th",{children:s("dailyWage")}),n.jsx("th",{children:s("totalDaysCount")}),n.jsx("th",{style:{textAlign:"right"},children:s("totalPaymentDue")})]})}),n.jsx("tbody",{children:te.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"4",style:{textAlign:"center",padding:"30px"},children:s("noLaborRegistered")})}):te.map(v=>{const{totalDaysWorked:R,totalEarned:de}=S(v);return n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs("div",{className:"labor-table-worker",children:[n.jsx("img",{src:v.profilePhoto||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",alt:v.name}),n.jsxs("div",{children:[n.jsx("div",{children:v.name}),n.jsx("span",{style:{display:"block",marginTop:"3px",color:"#a09488",fontSize:"9px",fontWeight:500},children:p(v.role)})]})]})}),n.jsx("td",{children:n.jsxs("strong",{children:["₹",ge(v.dailyWage)]})}),n.jsx("td",{children:n.jsxs("strong",{style:{color:"#a45e30"},children:[R," ",s("days")]})}),n.jsx("td",{style:{textAlign:"right"},children:n.jsxs("strong",{className:"labor-payment-amount",children:["₹",ge(de)]})})]},v._id)})})]})})]})]}),_&&n.jsx("div",{className:"labor-modal-overlay",onClick:()=>ee(null),children:n.jsxs("div",{className:"labor-modal",onClick:v=>v.stopPropagation(),children:[n.jsxs("div",{className:"labor-modal-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:s("workerVerificationProfile")}),n.jsx("p",{children:s("personalInfoDocuments")})]}),n.jsx("button",{onClick:()=>ee(null),className:"labor-modal-close",children:n.jsx(pr,{size:17})})]}),n.jsxs("div",{className:"labor-modal-body",children:[n.jsxs("div",{className:"labor-profile-info",children:[n.jsx("img",{src:_.profilePhoto||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",alt:s("profile")}),n.jsxs("div",{children:[n.jsx("h4",{children:_.name}),n.jsxs("p",{children:[p(_.role)," ·"," ",_.mobile]}),n.jsxs("p",{children:[s("dailyWage"),": ₹",ge(_.dailyWage)]})]})]}),n.jsxs("div",{className:"labor-documents-grid",children:[n.jsx("div",{className:"labor-document-profile",children:He(_.profilePhoto,s("profilePhoto"))}),He(_.panPhoto,s("panCard")),He(_.aadharPhoto,s("aadhaarCard"))]}),n.jsx("div",{className:"labor-modal-footer",children:n.jsx("button",{onClick:()=>ee(null),className:"labor-save-btn",children:s("closeProfile")})})]})]})}),E&&n.jsx("div",{className:"labor-modal-overlay",onClick:()=>J(!1),children:n.jsxs("div",{className:"labor-modal",onClick:v=>v.stopPropagation(),children:[n.jsxs("div",{className:"labor-modal-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:s("addNewLaborWorker")}),n.jsx("p",{children:s("enterWorkerDetails")})]}),n.jsx("button",{onClick:()=>J(!1),className:"labor-modal-close",children:n.jsx(pr,{size:17})})]}),n.jsx("div",{className:"labor-modal-body",children:n.jsxs("form",{onSubmit:se,children:[n.jsxs("div",{className:"labor-form-grid",children:[n.jsxs("div",{className:"labor-form-group",children:[n.jsxs("label",{children:[s("fullName")," *"]}),n.jsx("input",{type:"text",required:!0,placeholder:s("exampleName"),value:we,onChange:v=>Se(v.target.value)})]}),n.jsxs("div",{className:"labor-form-group",children:[n.jsxs("label",{children:[s("mobileNumber")," *"]}),n.jsx("input",{type:"tel",required:!0,placeholder:"+91 9823000000",value:Oe,onChange:v=>ze(v.target.value)})]}),n.jsxs("div",{className:"labor-form-group",children:[n.jsx("label",{children:s("locationNative")}),n.jsx("input",{type:"text",placeholder:"Baramati",value:$e,onChange:v=>Be(v.target.value)})]}),n.jsxs("div",{className:"labor-form-group",children:[n.jsx("label",{children:s("roleTrade")}),n.jsxs("select",{value:Ae,onChange:v=>Ce(v.target.value),children:[n.jsx("option",{value:"Mason",children:s("mason")}),n.jsx("option",{value:"Electrician",children:s("electrician")}),n.jsx("option",{value:"Plumber",children:s("plumber")}),n.jsx("option",{value:"Helper",children:s("helper")}),n.jsx("option",{value:"Bar Bender",children:s("barBender")})]})]}),n.jsxs("div",{className:"labor-form-group full",children:[n.jsxs("label",{children:[s("dailyWageRequired")," *"]}),n.jsx("input",{type:"number",required:!0,min:"100",value:Ie,onChange:v=>Pe(v.target.value)})]})]}),n.jsxs("div",{className:"labor-upload-grid",children:[n.jsxs("div",{className:"labor-upload-box",children:[n.jsx(Uf,{size:19}),n.jsx("strong",{children:s("profilePhoto")}),n.jsx("input",{type:"file",accept:"image/*",onChange:v=>G(v,N)}),he&&n.jsxs("span",{className:"labor-uploaded-label",children:["✓ ",s("uploaded")]})]}),n.jsxs("div",{className:"labor-upload-box",children:[n.jsx(na,{size:19}),n.jsx("strong",{children:s("panCardPhoto")}),n.jsx("input",{type:"file",accept:"image/*",onChange:v=>G(v,T)}),U&&n.jsxs("span",{className:"labor-uploaded-label",children:["✓ ",s("uploaded")]})]}),n.jsxs("div",{className:"labor-upload-box",children:[n.jsx(na,{size:19}),n.jsx("strong",{children:s("aadhaarCardPhoto")}),n.jsx("input",{type:"file",accept:"image/*",onChange:v=>G(v,y)}),m&&n.jsxs("span",{className:"labor-uploaded-label",children:["✓ ",s("uploaded")]})]})]}),n.jsxs("div",{className:"labor-modal-footer",children:[n.jsx("button",{type:"button",onClick:()=>{J(!1),ie()},className:"labor-cancel-btn",children:s("cancel")}),n.jsxs("button",{type:"submit",className:"labor-save-btn",children:[n.jsx(Nt,{size:14}),s("saveWorker")]})]})]})})]})})]})}const Un=`${Er}/api/projects`,dr={photos:[],plans:[],gallery:[],docs:[],bills:[]};function Gf(){const{lang:s,t:c}=Hn(),p=s==="mr"?"mr-IN":"en-IN",[M,O]=L.useState([]),[E,J]=L.useState(null),[_,ee]=L.useState("photos"),[te,oe]=L.useState(!1),[ae,Q]=L.useState(!1),[me,H]=L.useState(null),[V,X]=L.useState(!0),[je,be]=L.useState(!1),[Le,fe]=L.useState(""),[xe,Ne]=L.useState(""),[we,Se]=L.useState(""),[Oe,ze]=L.useState(""),[$e,Be]=L.useState(""),[Ae,Ce]=L.useState(""),[Ie,Pe]=L.useState("Raw Materials"),[he,N]=L.useState("");L.useEffect(()=>{U()},[]);const U=async()=>{try{X(!0);const f=await fetch(Un);if(!f.ok)throw new Error(`HTTP Error: ${f.status}`);const D=await f.json(),C=Array.isArray(D)?D.map(P=>({...P,files:{...dr,...P.files||{}}})):[];O(C),J(P=>C.length?P&&C.find(ge=>ge._id===P._id)||C[0]:null)}catch(f){console.error("Error fetching projects:",f)}finally{X(!1)}},T=async f=>{if(f.preventDefault(),!Le.trim()){alert(c("alertEnterProjectName"));return}const D={name:Le.trim(),location:xe||c("defaultLocationBaramati"),client:we||c("defaultClientName"),startDate:new Date().toLocaleDateString("en-GB"),status:"In Progress",files:{...dr}};try{be(!0);const C=await fetch(Un,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)});if(!C.ok){const He=await C.json();throw new Error(He.message||c("alertFailedCreateProject"))}const P=await C.json(),ge={...P,files:{...dr,...P.files||{}}};O(He=>[ge,...He]),J(ge),Q(!1),fe(""),Ne(""),Se("")}catch(C){console.error("Error creating project:",C),alert(C.message||c("alertBackendConnect"))}finally{be(!1)}},m=async f=>{if(f&&window.confirm(c("confirmDeleteProject")))try{if(!(await fetch(`${Un}/${f}`,{method:"DELETE"})).ok)throw new Error(c("alertUnableDeleteProject"));const C=M.filter(P=>P._id!==f);O(C),J(C[0]||null)}catch(D){console.error("Error deleting project:",D),alert(D.message)}},y=f=>{var P;const D=(P=f.target.files)==null?void 0:P[0];if(!D)return;const C=new FileReader;C.onloadend=()=>{N(C.result)},C.readAsDataURL(D)},Z=async f=>{if(f.preventDefault(),!E)return;const D=new Date().toISOString().split("T")[0],C={...dr,...E.files||{}};if(_==="bills"){const P={id:Date.now(),vendor:$e||c("generalVendor"),billNo:`BILL-${Math.floor(1e3+Math.random()*9e3)}`,date:D,amount:Number(Ae)||0,category:Ie};C.bills=[P,...C.bills||[]]}else{const P={id:Date.now(),title:Oe||c("untitledAsset"),date:D,url:he||"https://images.unsplash.com/photo-1541888946425-d0fbb18f86f7?w=600",size:"1.8 MB",type:c(_==="docs"?"pdfType":"imageType")};C[_]=[P,...C[_]||[]]}try{be(!0);const P=await fetch(`${Un}/${E._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:C})});if(!P.ok)throw new Error(c("alertUnableSaveFiles"));const ge=await P.json(),He={...ge,files:{...dr,...ge.files||{}}};J(He),O(v=>v.map(R=>R._id===He._id?He:R)),oe(!1),G()}catch(P){console.error("Error uploading project file:",P),alert(P.message)}finally{be(!1)}},G=()=>{ze(""),Be(""),Ce(""),N(""),Pe("Raw Materials")},ie=async(f,D)=>{if(!E)return;const C={...dr,...E.files||{}};C[D]=(C[D]||[]).filter(P=>P.id!==f&&P._id!==f);try{const P=await fetch(`${Un}/${E._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:C})});if(!P.ok)throw new Error(c("alertUnableDeleteItem"));const ge=await P.json(),He={...ge,files:{...dr,...ge.files||{}}};J(He),O(v=>v.map(R=>R._id===He._id?He:R))}catch(P){console.error("Error deleting item:",P),alert(P.message)}},se=f=>!f||f==="In Progress"?c("inProgress"):f,ue=f=>{switch(f){case"Raw Materials":return c("catRawMaterials");case"Electrical & Plumbing":return c("catElectricalPlumbing");case"Finishing & Tiles":return c("catFinishingTiles");case"Labor & Equipment":return c("catLaborEquipment");case"General":default:return f||c("generalCategory")}},$={...dr,...(E==null?void 0:E.files)||{}},ce=[{id:"photos",label:c("tabPhotosLabel"),description:c("tabPhotosDesc"),icon:rl},{id:"plans",label:c("tabPlansLabel"),description:c("tabPlansDesc"),icon:Pf},{id:"gallery",label:c("tabGalleryLabel"),description:c("tabGalleryDesc"),icon:qf},{id:"docs",label:c("tabDocsLabel"),description:c("tabDocsDesc"),icon:gt},{id:"bills",label:c("tabBillsLabel"),description:c("tabBillsDesc"),icon:Pr}],S=($.bills||[]).reduce((f,D)=>f+Number(D.amount||0),0),re=$.photos.length+$.plans.length+$.gallery.length+$.docs.length,B=ce.find(f=>f.id===_);return V?n.jsxs("div",{className:"project-page",children:[n.jsx("style",{children:pd}),n.jsxs("div",{className:"project-loading",children:[n.jsx("div",{className:"project-loader"}),n.jsx("p",{children:c("loadingProjects")})]})]}):n.jsxs("div",{className:"project-page",children:[n.jsx("style",{children:pd}),n.jsxs("div",{className:"project-page-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"project-eyebrow",children:[n.jsx("span",{className:"project-eyebrow-line"}),c("constructionWorkspace")]}),n.jsx("h1",{children:c("projectManagementTitle")}),n.jsx("p",{children:c("projectManagementSub")})]}),n.jsxs("button",{className:"project-primary-btn",onClick:()=>Q(!0),children:[n.jsx(Nt,{size:17}),c("createProject")]})]}),M.length===0?n.jsxs("div",{className:"project-empty-workspace",children:[n.jsx("div",{className:"project-empty-icon",children:n.jsx(ur,{size:34})}),n.jsx("h2",{children:c("noProjectsYet")}),n.jsx("p",{children:c("noProjectsDesc")}),n.jsxs("button",{className:"project-primary-btn",onClick:()=>Q(!0),children:[n.jsx(Nt,{size:17}),c("createFirstProject")]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"project-selector-panel",children:[n.jsxs("div",{className:"project-selector-left",children:[n.jsx("div",{className:"project-selector-icon",children:n.jsx(Cr,{size:21})}),n.jsxs("div",{className:"project-selector-info",children:[n.jsx("span",{children:c("activeWorkspace")}),n.jsx("select",{value:(E==null?void 0:E._id)||"",onChange:f=>{const D=M.find(C=>C._id===f.target.value);J(D||null)},children:M.map(f=>n.jsx("option",{value:f._id,children:f.name},f._id))})]})]}),n.jsxs("div",{className:"project-selector-actions",children:[n.jsxs("button",{className:"project-secondary-btn",onClick:()=>Q(!0),children:[n.jsx(Nt,{size:15}),c("addProject")]}),n.jsxs("button",{className:"project-delete-btn",onClick:()=>m(E==null?void 0:E._id),disabled:!E,children:[n.jsx(en,{size:15}),c("delete")]})]})]}),E&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"project-hero",children:[n.jsx("div",{className:"project-hero-decoration"}),n.jsxs("div",{className:"project-hero-content",children:[n.jsxs("div",{className:"project-hero-top",children:[n.jsxs("div",{className:"project-status",children:[n.jsx("span",{className:"project-status-dot"}),se(E.status)]}),n.jsxs("span",{className:"project-start-date",children:[n.jsx(al,{size:13}),c("started")," ",E.startDate||c("na")]})]}),n.jsx("h2",{children:E.name}),n.jsxs("div",{className:"project-hero-meta",children:[n.jsxs("span",{children:[n.jsx(sl,{size:15}),E.location||c("locationNotSpecified")]}),n.jsxs("span",{children:[n.jsx(yd,{size:15}),E.client||c("clientNotSpecified")]})]})]}),n.jsxs("div",{className:"project-hero-mark",children:[n.jsx(tn,{size:62,strokeWidth:1.1}),n.jsx("span",{children:c("projectBadge")})]})]}),n.jsxs("div",{className:"project-stat-grid",children:[n.jsxs("div",{className:"project-stat-card",children:[n.jsx("div",{className:"project-stat-icon bronze",children:n.jsx(Cr,{size:20})}),n.jsxs("div",{children:[n.jsx("span",{children:c("projectAssets")}),n.jsx("strong",{children:re}),n.jsx("small",{children:c("uploadedFiles")})]})]}),n.jsxs("div",{className:"project-stat-card",children:[n.jsx("div",{className:"project-stat-icon sand",children:n.jsx(rl,{size:20})}),n.jsxs("div",{children:[n.jsx("span",{children:c("sitePhotosStat")}),n.jsx("strong",{children:$.photos.length}),n.jsx("small",{children:c("progressImages")})]})]}),n.jsxs("div",{className:"project-stat-card",children:[n.jsx("div",{className:"project-stat-icon dark",children:n.jsx(gt,{size:20})}),n.jsxs("div",{children:[n.jsx("span",{children:c("documentsStat")}),n.jsx("strong",{children:$.docs.length}),n.jsx("small",{children:c("projectRecords")})]})]}),n.jsxs("div",{className:"project-stat-card",children:[n.jsx("div",{className:"project-stat-icon expense",children:n.jsx(il,{size:20})}),n.jsxs("div",{children:[n.jsx("span",{children:c("materialExpenses")}),n.jsxs("strong",{children:["₹",S.toLocaleString(p)]}),n.jsxs("small",{children:[$.bills.length," ",c("billsRecorded")]})]})]})]}),n.jsxs("div",{className:"project-section-heading",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"project-eyebrow",children:[n.jsx("span",{className:"project-eyebrow-line"}),c("projectResources")]}),n.jsx("h3",{children:c("projectFilesRecords")}),n.jsx("p",{children:c("projectFilesRecordsSub")})]}),n.jsxs("button",{className:"project-primary-btn",onClick:()=>oe(!0),children:[n.jsx(ra,{size:16}),c(_==="bills"?"uploadMaterialBill":_==="docs"?"uploadDocument":"uploadAsset")]})]}),n.jsx("div",{className:"project-tabs",children:ce.map(f=>{var ge;const D=f.icon,C=((ge=$[f.id])==null?void 0:ge.length)||0,P=_===f.id;return n.jsxs("button",{className:`project-tab ${P?"active":""}`,onClick:()=>ee(f.id),children:[n.jsx("div",{className:"project-tab-icon",children:n.jsx(D,{size:18})}),n.jsxs("div",{className:"project-tab-text",children:[n.jsx("strong",{children:f.label}),n.jsx("span",{children:f.description})]}),n.jsx("span",{className:"project-tab-count",children:C})]},f.id)})}),["photos","plans","gallery"].includes(_)&&n.jsxs("div",{className:"project-content-area",children:[n.jsxs("div",{className:"project-content-heading",children:[n.jsxs("div",{children:[n.jsx("h3",{children:B==null?void 0:B.label}),n.jsx("p",{children:B==null?void 0:B.description})]}),n.jsxs("span",{className:"project-record-count",children:[$[_].length," ",c("filesCount")]})]}),$[_].length===0?n.jsxs("div",{className:"project-empty-content",children:[n.jsx("div",{className:"project-empty-icon",children:n.jsx(rl,{size:30})}),n.jsx("h3",{children:c("noFilesUploadedYet")}),n.jsx("p",{children:c("uploadFirstFilePrompt").replace("{type}",((B==null?void 0:B.label)||"").toLowerCase())}),n.jsxs("button",{className:"project-secondary-btn",onClick:()=>oe(!0),children:[n.jsx(Nt,{size:15}),c("uploadFirstFile")]})]}):n.jsx("div",{className:"project-asset-grid",children:$[_].map(f=>n.jsxs("div",{className:"project-asset-card",children:[n.jsxs("div",{className:"project-asset-image",children:[n.jsx("img",{src:f.url,alt:f.title||c("untitledAsset")}),n.jsxs("div",{className:"project-asset-overlay",children:[n.jsx("button",{onClick:()=>H(f.url),title:c("preview"),children:n.jsx($n,{size:17})}),n.jsx("button",{className:"danger",onClick:()=>ie(f.id||f._id,_),title:c("delete"),children:n.jsx(en,{size:17})})]}),n.jsx("span",{className:"project-asset-type",children:c(_==="plans"?"floorPlanBadge":_==="gallery"?"galleryBadge":"sitePhotoBadge")})]}),n.jsxs("div",{className:"project-asset-info",children:[n.jsx("h4",{children:f.title||c("untitledAsset")}),n.jsxs("span",{children:[n.jsx(al,{size:12}),c("uploadedOn")," ",f.date||c("na")]})]})]},f.id||f._id))})]}),_==="docs"&&n.jsxs("div",{className:"project-content-area",children:[n.jsxs("div",{className:"project-content-heading",children:[n.jsxs("div",{children:[n.jsx("h3",{children:c("engineeringDocuments")}),n.jsx("p",{children:c("engineeringDocumentsSub")})]}),n.jsxs("span",{className:"project-record-count",children:[$.docs.length," ",c("documentsCount")]})]}),$.docs.length===0?n.jsxs("div",{className:"project-empty-content",children:[n.jsx("div",{className:"project-empty-icon",children:n.jsx(gt,{size:30})}),n.jsx("h3",{children:c("noDocumentsAvailable")}),n.jsx("p",{children:c("noDocumentsDesc")}),n.jsxs("button",{className:"project-secondary-btn",onClick:()=>oe(!0),children:[n.jsx(ra,{size:15}),c("uploadDocument")]})]}):n.jsx("div",{className:"project-document-list",children:$.docs.map(f=>n.jsxs("div",{className:"project-document-row",children:[n.jsx("div",{className:"project-document-icon",children:n.jsx(gt,{size:22})}),n.jsxs("div",{className:"project-document-info",children:[n.jsx("h4",{children:f.title}),n.jsxs("p",{children:[f.type||c("fileUnavailable"),n.jsx("span",{children:"•"}),f.size||c("fileSizeUnavailable"),n.jsx("span",{children:"•"}),c("uploadedOn")," ",f.date||c("na")]})]}),n.jsxs("div",{className:"project-document-actions",children:[n.jsxs("a",{href:f.url,target:"_blank",rel:"noreferrer",className:"project-view-btn",children:[n.jsx($n,{size:15}),c("view")]}),n.jsx("button",{className:"project-icon-delete",onClick:()=>ie(f.id||f._id,"docs"),title:c("deleteDocument"),children:n.jsx(en,{size:16})})]})]},f.id||f._id))})]}),_==="bills"&&n.jsxs("div",{className:"project-content-area",children:[n.jsxs("div",{className:"project-bill-summary",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"project-eyebrow",children:[n.jsx("span",{className:"project-eyebrow-line"}),c("expenseTracking")]}),n.jsx("h3",{children:c("materialPurchaseRecords")}),n.jsx("p",{children:c("materialPurchaseRecordsSub")})]}),n.jsxs("div",{className:"project-expense-total",children:[n.jsx("span",{children:c("totalRecordedExpense")}),n.jsxs("strong",{children:["₹",S.toLocaleString(p)]}),n.jsxs("small",{children:[$.bills.length," ",c("invoicesCount")]})]})]}),n.jsx("div",{className:"project-table-wrapper",children:n.jsxs("table",{className:"project-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:c("invoiceNumber")}),n.jsx("th",{children:c("vendor")}),n.jsx("th",{children:c("category")}),n.jsx("th",{children:c("date")}),n.jsx("th",{className:"text-right",children:c("amountCol")}),n.jsx("th",{className:"text-center",children:c("actionCol")})]})}),n.jsx("tbody",{children:$.bills.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"6",children:n.jsxs("div",{className:"project-table-empty",children:[n.jsx(Pr,{size:28}),n.jsx("strong",{children:c("noMaterialBillsRecorded")}),n.jsx("span",{children:c("uploadedBillsAppearHere")})]})})}):$.bills.map(f=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("span",{className:"project-invoice-number",children:f.billNo||c("na")})}),n.jsx("td",{className:"project-vendor-name",children:f.vendor||c("generalVendor")}),n.jsx("td",{children:n.jsx("span",{className:"project-category-tag",children:ue(f.category)})}),n.jsx("td",{className:"project-date-cell",children:f.date||c("na")}),n.jsxs("td",{className:"project-amount-cell",children:["₹",Number(f.amount||0).toLocaleString(p)]}),n.jsx("td",{className:"text-center",children:n.jsx("button",{className:"project-icon-delete",onClick:()=>ie(f.id||f._id,"bills"),title:c("deleteBill"),children:n.jsx(en,{size:16})})})]},f.id||f._id))})]})})]})]})]}),ae&&n.jsx("div",{className:"project-modal-backdrop",onClick:()=>Q(!1),children:n.jsxs("div",{className:"project-modal",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"project-modal-header",children:[n.jsx("div",{className:"project-modal-heading-icon",children:n.jsx(Cr,{size:21})}),n.jsxs("div",{children:[n.jsx("h3",{children:c("createNewProjectTitle")}),n.jsx("p",{children:c("createNewProjectSub")})]}),n.jsx("button",{className:"project-modal-close",onClick:()=>Q(!1),children:n.jsx(pr,{size:19})})]}),n.jsxs("form",{onSubmit:T,children:[n.jsxs("div",{className:"project-form-group",children:[n.jsx("label",{children:c("projectNameLabel")}),n.jsx("input",{type:"text",required:!0,placeholder:c("projectNamePlaceholder"),value:Le,onChange:f=>fe(f.target.value)})]}),n.jsxs("div",{className:"project-form-group",children:[n.jsx("label",{children:c("siteLocationLabel")}),n.jsx("input",{type:"text",placeholder:c("siteLocationSample"),value:xe,onChange:f=>Ne(f.target.value)})]}),n.jsxs("div",{className:"project-form-group",children:[n.jsx("label",{children:c("clientNameLabel")}),n.jsx("input",{type:"text",placeholder:c("clientNameSample"),value:we,onChange:f=>Se(f.target.value)})]}),n.jsxs("div",{className:"project-modal-footer",children:[n.jsx("button",{type:"button",className:"project-cancel-btn",onClick:()=>Q(!1),children:c("cancel")}),n.jsxs("button",{type:"submit",className:"project-primary-btn",disabled:je,children:[n.jsx(Nt,{size:16}),c(je?"creating":"createProject")]})]})]})]})}),te&&n.jsx("div",{className:"project-modal-backdrop",onClick:()=>{oe(!1),G()},children:n.jsxs("div",{className:"project-modal",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"project-modal-header",children:[n.jsx("div",{className:"project-modal-heading-icon",children:_==="bills"?n.jsx(Pr,{size:21}):n.jsx(ra,{size:21})}),n.jsxs("div",{children:[n.jsx("h3",{children:_==="bills"?c("uploadMaterialBill"):_==="docs"?c("uploadSiteDocument"):`${c("uploadAsset")} — ${(B==null?void 0:B.label)||""}`}),n.jsx("p",{children:c("uploadRecordTo").replace("{project}",(E==null?void 0:E.name)||"")})]}),n.jsx("button",{className:"project-modal-close",onClick:()=>{oe(!1),G()},children:n.jsx(pr,{size:19})})]}),n.jsxs("form",{onSubmit:Z,children:[_==="bills"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"project-form-group",children:[n.jsx("label",{children:c("vendorSupplierLabel")}),n.jsx("input",{type:"text",required:!0,placeholder:c("vendorSample"),value:$e,onChange:f=>Be(f.target.value)})]}),n.jsxs("div",{className:"project-form-group",children:[n.jsx("label",{children:c("materialCategoryLabel")}),n.jsxs("select",{value:Ie,onChange:f=>Pe(f.target.value),children:[n.jsx("option",{value:"Raw Materials",children:c("catRawMaterials")}),n.jsx("option",{value:"Electrical & Plumbing",children:c("catElectricalPlumbing")}),n.jsx("option",{value:"Finishing & Tiles",children:c("catFinishingTiles")}),n.jsx("option",{value:"Labor & Equipment",children:c("catLaborEquipment")})]})]}),n.jsxs("div",{className:"project-form-group",children:[n.jsx("label",{children:c("billAmountLabel")}),n.jsx("input",{type:"number",required:!0,min:"1",placeholder:"50000",value:Ae,onChange:f=>Ce(f.target.value)})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"project-form-group",children:[n.jsx("label",{children:c("assetTitleLabel")}),n.jsx("input",{type:"text",required:!0,placeholder:c("assetTitleSample"),value:Oe,onChange:f=>ze(f.target.value)})]}),n.jsxs("div",{className:"project-form-group",children:[n.jsx("label",{children:c("selectFileFromDevice")}),n.jsxs("div",{className:"project-file-upload",children:[n.jsx(na,{size:25}),n.jsx("strong",{children:c(he?"fileSelectedSuccess":"chooseFileToUpload")}),n.jsx("span",{children:c(_==="docs"?"docFileTypes":"imageFileTypes")}),n.jsx("input",{type:"file",accept:_==="docs"?".pdf,.doc,.docx":"image/*",onChange:y})]}),he&&_!=="docs"&&n.jsxs("div",{className:"project-upload-preview",children:[n.jsx("img",{src:he,alt:c("uploadPreviewAlt")}),n.jsx("span",{children:c("previewReady")})]}),he&&_==="docs"&&n.jsx("p",{className:"project-upload-success",children:c("fileReadyToSave")})]})]}),n.jsxs("div",{className:"project-modal-footer",children:[n.jsx("button",{type:"button",className:"project-cancel-btn",onClick:()=>{oe(!1),G()},children:c("cancel")}),n.jsxs("button",{type:"submit",className:"project-primary-btn",disabled:je,children:[n.jsx(ra,{size:16}),c(je?"saving":"uploadAndSave")]})]})]})]})}),me&&n.jsxs("div",{className:"project-lightbox",onClick:()=>H(null),children:[n.jsx("button",{className:"project-lightbox-close",onClick:()=>H(null),children:n.jsx(pr,{size:23})}),n.jsx("img",{src:me,alt:c("projectPreviewAlt"),onClick:f=>f.stopPropagation()})]})]})}const pd=`
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
`,fd=[{id:"billing",titleKey:"billingTitle",descKey:"billingDesc",icon:oa,color:"billing",image:"/billing.png"},{id:"quotations",titleKey:"quotationsTitle",descKey:"quotationsDesc",icon:gt,color:"quotation",image:"/quotation.png"},{id:"labors",titleKey:"labourTitle",descKey:"labourDesc",icon:tn,color:"labour",image:"/labour.png"},{id:"projects",titleKey:"projectsTitle",descKey:"projectsDesc",icon:Cr,color:"projects",image:"/reports.png"}],Kf=`

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
  font-family: 'DM Sans', sans-serif;
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
  font-family: Manrope, sans-serif;
  font-size: 20px;
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
  font-family: Manrope, sans-serif;
  font-size: clamp(30px,3vw,42px);
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
  font-family: Manrope, sans-serif;
  font-size: 22px;
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

`;function Yf(){const{lang:s,toggleLanguage:c,t:p}=Hn(),[M,O]=L.useState("home"),[E,J]=L.useState(!1),[_,ee]=L.useState("");L.useEffect(()=>{ee(new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}))},[]);const te=[{id:"home",title:p("dashboardNav"),icon:sd},{id:"billing",title:p("billingInvoices"),icon:oa},{id:"quotations",title:p("quotations"),icon:gt},{id:"labors",title:p("laborManagement"),icon:tn},{id:"projects",title:p("projectHandling"),icon:Cr}],oe=[{title:p("newBill"),id:"billing",icon:oa},{title:p("newQuotation"),id:"quotations",icon:gt},{title:p("addLabour"),id:"labors",icon:tn},{title:p("openProjects"),id:"projects",icon:Nt}],ae=H=>{O(H),J(!1)},Q=()=>{alert(p("logoutAlert"))},me=()=>{switch(M){case"quotations":return n.jsx(Hf,{});case"billing":return n.jsx(Qf,{});case"labors":return n.jsx(Vf,{});case"projects":return n.jsx(Gf,{});default:return null}};return n.jsxs("div",{className:"eco-dashboard",children:[n.jsx("style",{children:Kf}),E&&n.jsx("button",{className:"eco-sidebar-overlay","aria-label":"Close navigation menu",onClick:()=>J(!1)}),n.jsxs("aside",{className:`eco-sidebar ${E?"eco-sidebar-open":""}`,children:[n.jsxs("div",{className:"eco-sidebar-brand",children:[n.jsx("div",{className:"eco-brand-symbol",children:n.jsx("img",{src:"/logo.png",alt:"NextGen Logo",className:"eco-brand-logo"})}),n.jsxs("div",{className:"eco-brand-text",children:[n.jsx("h2",{children:p("appName")}),n.jsx("span",{children:p("appSubtitle")})]}),n.jsx("button",{className:"eco-sidebar-close","aria-label":"Close sidebar",onClick:()=>J(!1),children:n.jsx(pr,{size:21})})]}),n.jsx("div",{className:"eco-sidebar-caption",children:p("workspace")}),n.jsx("nav",{className:"eco-sidebar-nav",children:te.map(({id:H,title:V,icon:X})=>n.jsxs("button",{className:`eco-nav-link ${M===H?"active":""}`,onClick:()=>ae(H),children:[n.jsx(X,{size:19,strokeWidth:2}),n.jsx("span",{children:V}),M===H&&n.jsx("span",{className:"eco-nav-active-dot"})]},H))}),n.jsxs("div",{className:"eco-sidebar-bottom",children:[n.jsxs("div",{className:"eco-sidebar-art",children:[n.jsx("div",{className:"eco-building-art",children:n.jsx(ur,{size:76,strokeWidth:1.1})}),n.jsx("p",{children:p("buildToday")}),n.jsx("p",{children:p("betterTomorrow")})]}),n.jsxs("button",{className:"eco-nav-link",onClick:Q,children:[n.jsx(If,{size:19}),n.jsx("span",{children:p("logout")})]})]})]}),n.jsxs("main",{className:"eco-main",children:[n.jsxs("header",{className:"eco-topbar",children:[n.jsxs("div",{className:"eco-topbar-left",children:[n.jsx("button",{className:"eco-menu-button","aria-label":"Open navigation menu",onClick:()=>J(!0),children:n.jsx(Ff,{size:23})}),n.jsxs("div",{className:"eco-mobile-brand",children:[n.jsx(ur,{size:22}),n.jsx("span",{children:p("appName")})]}),n.jsxs("div",{className:"eco-topbar-links",children:[n.jsx("span",{children:p("topPlan")}),n.jsx("span",{children:p("topTrack")}),n.jsx("span",{children:p("topBuild")}),n.jsx("span",{children:p("topGrow")})]})]}),n.jsxs("div",{className:"eco-topbar-right",children:[n.jsxs("button",{onClick:c,className:"eco-lang-pill",title:"Switch Language / भाषा बदला",children:[n.jsx(Rf,{size:15}),n.jsx("span",{children:s==="en"?"मराठी":"English"})]}),n.jsxs("div",{className:"eco-date-display",children:[n.jsx(Tf,{size:16}),n.jsx("span",{children:_})]}),n.jsxs("div",{className:"eco-profile",children:[n.jsx("div",{className:"eco-profile-avatar",children:n.jsx(Lf,{size:25})}),n.jsxs("div",{className:"eco-profile-info",children:[n.jsx("strong",{children:p("siteManager")}),n.jsx("span",{children:p("workspaceSub")})]})]})]})]}),M==="home"?n.jsxs("div",{className:"eco-content",children:[n.jsxs("section",{className:"eco-welcome",children:[n.jsxs("div",{className:"eco-welcome-content",children:[n.jsx("span",{className:"eco-eyebrow",children:p("yourWorkspace")}),n.jsx("h2",{children:p("welcomeBack")}),n.jsx("p",{children:p("welcomeDesc")}),n.jsxs("div",{className:"eco-welcome-tags",children:[n.jsxs("span",{children:[n.jsx(aa,{size:14}),p("workOrganized")]}),n.jsxs("span",{children:[n.jsx(cd,{size:14}),p("buildSustainably")]})]})]}),n.jsx("div",{className:"eco-welcome-decoration","aria-hidden":"true",children:n.jsx(ur,{size:190,strokeWidth:.8})})]}),n.jsxs("section",{className:"eco-modules-section",children:[n.jsxs("div",{className:"eco-section-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eco-eyebrow",children:p("getThingsDone")}),n.jsx("h2",{children:p("exploreModules")})]}),n.jsxs("span",{className:"eco-module-count",children:[String(fd.length).padStart(2,"0")," ",p("modulesLabel")]})]}),n.jsx("div",{className:"eco-modules-grid",children:fd.map(({id:H,titleKey:V,descKey:X,image:je,color:be})=>n.jsxs("button",{className:`eco-module-card ${be}`,onClick:()=>ae(H),children:[n.jsxs("div",{className:"eco-module-card-top",children:[n.jsx("div",{className:"eco-module-icon",children:n.jsx("img",{src:je,alt:p(V),className:"eco-module-image"})}),n.jsx(ol,{className:"eco-module-arrow",size:19})]}),n.jsxs("div",{className:"eco-module-details",children:[n.jsx("h3",{children:p(V)}),n.jsx("p",{children:p(X)})]}),n.jsxs("span",{className:"eco-module-open",children:[p("openModule"),n.jsx(Df,{size:15})]})]},H))})]}),n.jsxs("section",{className:"eco-overview-grid",children:[n.jsxs("div",{className:"eco-panel eco-project-panel",children:[n.jsxs("div",{className:"eco-panel-heading",children:[n.jsxs("div",{className:"eco-panel-title",children:[n.jsx("div",{className:"eco-heading-icon",children:n.jsx(Cr,{size:19})}),n.jsxs("div",{children:[n.jsx("h2",{children:p("projectWorkspace")}),n.jsx("p",{children:p("projectWorkspaceSub")})]})]}),n.jsxs("button",{className:"eco-text-button",onClick:()=>ae("projects"),children:[p("openProjects"),n.jsx(ol,{size:15})]})]}),n.jsxs("div",{className:"eco-workspace-message",children:[n.jsx("div",{className:"eco-workspace-illustration",children:n.jsx(ur,{size:42,strokeWidth:1.4})}),n.jsxs("div",{children:[n.jsx("h3",{children:p("workspaceBannerTitle")}),n.jsx("p",{children:p("workspaceBannerDesc")})]})]})]}),n.jsx("div",{className:"eco-right-column",children:n.jsxs("div",{className:"eco-panel eco-quick-panel",children:[n.jsx("div",{className:"eco-panel-heading",children:n.jsxs("div",{className:"eco-panel-title",children:[n.jsx("div",{className:"eco-heading-icon",children:n.jsx(Af,{size:19})}),n.jsxs("div",{children:[n.jsx("h2",{children:p("quickActions")}),n.jsx("p",{children:p("quickActionsSub")})]})]})}),n.jsx("div",{className:"eco-quick-actions",children:oe.map(({title:H,id:V,icon:X})=>{const je={billing:"/billing.png",labors:"/labour.png",quotations:"/quotation.png",projects:"/reports.png"};return n.jsxs("button",{className:"eco-quick-action",onClick:()=>ae(V),children:[n.jsxs("span",{className:"eco-quick-icon",children:[n.jsx("img",{src:je[V],alt:H,onError:be=>{be.currentTarget.style.display="none"}}),n.jsx(X,{size:21,style:{display:"none"}})]}),n.jsx("span",{children:H})]},V)})})]})})]}),n.jsxs("footer",{className:"eco-footer",children:[n.jsxs("span",{children:["© ",new Date().getFullYear()," ",p("footerTitle")]}),n.jsxs("span",{children:[n.jsx(cd,{size:14}),p("footerSlogan")]})]})]}):n.jsx("div",{className:"eco-module-view",children:me()})]}),n.jsxs("nav",{className:"eco-mobile-bottom-nav",children:[n.jsxs("button",{className:M==="home"?"active":"",onClick:()=>ae("home"),children:[n.jsx(sd,{size:20}),n.jsx("span",{children:p("navHome")})]}),n.jsxs("button",{className:M==="billing"?"active":"",onClick:()=>ae("billing"),children:[n.jsx(oa,{size:20}),n.jsx("span",{children:p("navBilling")})]}),n.jsxs("button",{className:M==="quotations"?"active":"",onClick:()=>ae("quotations"),children:[n.jsx(gt,{size:20}),n.jsx("span",{children:p("quotations")})]}),n.jsxs("button",{className:M==="labors"?"active":"",onClick:()=>ae("labors"),children:[n.jsx(tn,{size:20}),n.jsx("span",{children:p("navLabour")})]}),n.jsxs("button",{className:M==="projects"?"active":"",onClick:()=>ae("projects"),children:[n.jsx(Cr,{size:20}),n.jsx("span",{children:p("navProjects")})]})]})]})}gf.createRoot(document.getElementById("root")).render(n.jsx(df.StrictMode,{children:n.jsx($f,{children:n.jsx(Yf,{})})}));
